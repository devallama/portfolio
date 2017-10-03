class Rocket extends createjs.Sprite {
    constructor(spriteSheet, animation) {
        super(spriteSheet, animation);
        this.name = "rocket";
        this.currentSpeed = 5;

        this.targetPos = {x: 50, y: 300};

        this.regX = this.getBounds().width / 2;
        this.regY = this.getBounds().height / 2;
        this.scaleX = this.scaleY = 2;

        this.addEventListener('mousechange', this.mouseMove.bind(this));
    }

    handleMove() {
        let targetPos = this.targetPos;

        let direction = Math.atan2(targetPos.x - this.x, targetPos.y - this.y);
        let direction_degrees = this.radians_to_degrees(direction);
        
        this.rotation = -direction_degrees;
        
        if(!this.intercepts(targetPos.x, targetPos.y)) {
            if(this.currentAnimation != 'move') {
                this.gotoAndPlay('move');
            }

            let x = (this.currentSpeed / Math.sin(Math.PI / 2)) * Math.sin(direction);
            let y = (this.currentSpeed / Math.sin(Math.PI / 2)) * Math.sin(Math.PI - (Math.PI / 2 + direction));

            this.x += x;
            this.y += y;
        } else {
            if(this.currentAnimation != 'stop') {
                this.gotoAndStop('stop');
            }
        }
    }

    mouseMove(event) {
        let targetPos = {};
        targetPos.x = this.stage.mouseX;
        targetPos.y = this.stage.mouseY;
        console.log(targetPos);
        this.targetPos = targetPos;
    }

    intercepts(x, y) {
        let half_width = this.getActualBounds().half_width;
        let half_height = this.getActualBounds().half_height;
        if(x < this.x + half_width && x > this.x - half_width && y < this.y + half_height && y > this.y - half_height) {
            return true;
        }
        return false;
    }

    degrees_to_radians(degrees) {
        let radians = degrees * (Math.PI / 180);
        return radians;
    }

    radians_to_degrees(radians) {
        let degrees = radians * (180 / Math.PI);
        return degrees;
    }

    getActualBounds() {
        let width = this.getBounds().width * this.scaleX;
        let height = this.getBounds().height * this.scaleY;
        let half_width = width / 2;
        let half_height = height / 2;
        return {
            width: width,
            height: height,
            half_width: half_width,
            half_height: half_height
        };
    }
}

export default Rocket;