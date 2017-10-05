class Star extends createjs.Shape {
    constructor(stage, starsCollection, colour, maxStars) {
        super();
        this.createStar(stage, starsCollection, colour, maxStars);
    }

    createStar(stage, starsCollection, colour, maxStars) {
        // let randomX = this.__getRandomInt(1, 10);
        // console.log(i);
        // let randomY = this.__getRandomInt(1, 10);

        console.log("created star");

        let stageX = stage.getBounds().width;
        let stageY = stage.getBounds().height;

        let q = starsCollection.numChildren;

        let minX = stageX / 100;
        let maxX = stageX - 50;

        let minY = stageY / maxStars * q;
        let maxY = stageY / maxStars * (q + 1);

        let x = this.__getRandomInt(minX, maxX);
        let y = this.__getRandomInt(minY, maxY);

        let randomRadius = this.__getRandomInt(30, 90);
        
        let angle = this.__getRandomInt(0, 360);

        let radius = (randomRadius / 10) * (stage.getBounds().width / 400);

        this.graphics.beginFill(colour).drawPolyStar(x, y, radius, 5, 0, angle).endFill();

        starsCollection.addChild(this);
    }
    
    __getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default Star;