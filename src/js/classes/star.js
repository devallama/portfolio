class Star extends createjs.Shape {
    constructor(stage, starsCollection, colour) {
        super();
        let success = this.createStar(stage, starsCollection, colour);
        this.success = success;
    }

    createStar(stage, starsCollection, colour) {
        // let randomX = this.__getRandomInt(1, 10);
        // console.log(i);
        // let randomY = this.__getRandomInt(1, 10);

        // console.log("created star");

        // let stageX = stage.getBounds().width;
        // let stageY = stage.getBounds().height;

        // let q = starsCollection.numChildren;

        // let minX = stageX / 100;
        // let maxX = stageX - 50;

        // let minY = stageY / maxStars * q;
        // let maxY = stageY / maxStars * (q + 1);

        // let x = this.__getRandomInt(minX, maxX);
        // let y = this.__getRandomInt(minY, maxY);

        // let randomRadius = this.__getRandomInt(30, 90);
        
        // let angle = this.__getRandomInt(0, 360);

        // let radius = (randomRadius / 10) * (stage.getBounds().width / 400);

        // this.graphics.beginFill(colour).drawPolyStar(x, y, radius, 5, 0, angle).endFill();

        // starsCollection.addChild(this);

        let position = this.generateXY(stage);
        let failed = 0;
        const maxFailed = 5;

        for(let i = 0; i < starsCollection.numChildren; i++) {
            if(this.intercepts({x: starsCollection.getChildAt(i).x, y: starsCollection.getChildAt(i).y}, position, 400)) {
                failed++;
                position = this.generateXY(stage);
                console.log("failed " + failed + " times.");
                if(failed == maxFailed) {
                    return false;
                } else {
                    i--;
                    continue;
                }
            }
        }

        let randomRadius = this.__getRandomInt(30, 90);
        
        let angle = this.__getRandomInt(0, 360);

        let radius = (randomRadius / 10) * (stage.getBounds().width / 400);

        this.graphics.beginFill(colour).drawPolyStar(position.x, position.y, radius, 5, 0, angle).endFill();

        starsCollection.addChild(this);

        return true;
    }
    
    __getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateXY(stage) {
        let stageX = stage.getBounds().width;
        let stageY = stage.getBounds().height;

        let minX = (stageX / 100) * 10;
        let maxX = stageX - minX

        let minY = (stageY / 100) * 10;
        let maxY = stageY - minY;

        let x = this.__getRandomInt(minX, maxX);
        let y = this.__getRandomInt(minY, maxY);

        return {
            x: x,
            y: y
        };
    }

    intercepts(objectXY, targetXY, radius) {
        if(targetXY.x < objectXY.x + radius || targetXY.x > objectXY - radius) {
            if(targetXY.y < objectXY.y + radius || targetXY.y > objectXY - radius) {
                console.log("failed intercept");
                return true;
            }
        }
        return false;
    }
}

export default Star;