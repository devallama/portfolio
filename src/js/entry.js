import KeyboardInit from './classes/keyboard.js';
import Rocket from './classes/rocket.js';
import Star from './classes/star.js';

(function() {
    let keyboard = new KeyboardInit();
    let stage;
    let starsContainer;

    var queue = new createjs.LoadQueue();
    queue.on("complete", init, this);
    queue.loadManifest([
        {
            id: "rocket", src: "./resources/imgs/rocket_sprites.png",
        }
    ]);

    function init(event) {
        let assets = event.currentTarget;
        createStage();
        createRocket(assets);
        addListeners();
    }

    function createStage() {
        stage = new createjs.Stage("canvas");
        starsContainer = new createjs.Container();

        stage.addChild(starsContainer);

        stage.lastMousePos = {x: 0, y: 0};

        resizeCanvas();
    }

    function createStars() {
        let stars = [['#2f687f', '#af8e1c', '#c86868', '#5ac8f5', '#be3fc9', '#b94353'],['#2f687f', '#af8e1c', '#c86868', '#5ac8f5', '#be3fc9', '#b94353']];
        outer:
        for(let i = 0; i < stars.length; i++) {
            stars[i] = shuffleArray(stars[i]);
            console.log(stars[i]);
            for(let j = 0; j < stars[i].length; j++) {
                let resp = new Star(stage, starsContainer, stars[i][j]);
                if(!resp.success) {
                    console.log("stopped making stars");
                    break outer;
                } 
            }
        }
    }

    function shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
    }

    function removeStars() {
        starsContainer.removeAllChildren();
    }

    function createRocket(assets) {
        let rocket_spritesheet = new createjs.SpriteSheet(getRocketSpritesheet(assets));
        
        let rocket = new Rocket(stage, rocket_spritesheet, 'stop');
    }

    function getRocketSpritesheet(assets) {
        return {
            images: [assets.getResult('rocket')],
            frames: {
                width: 32,
                height: 40
            },
            animations: {
                stop: 0,
                move: [1, 4, "move", 1],
            }
        }
    }

    function addListeners() {
        window.addEventListener("resize", resizeCanvas);

        createjs.Ticker.interval = 50;
        createjs.Ticker.addEventListener("tick", handleTick);
    }

    function handleTick(event) {
        let rocket = stage.getChildByName("rocket");
        
        if(stage.lastMousePos.x != stage.mouseX || stage.lastMousePos.y != stage.mouseY) {
            stage.lastMousePos.x = stage.mouseX;
            stage.lastMousePos.y = stage.mouseY;
            rocket.dispatchEvent("mousechange");
        }

        rocket.handleMove();
        
        stage.update(event);
    }

    function resizeCanvas() {
        console.log("called");
        document.getElementById('canvas').width = document.getElementById('section_top').offsetWidth;
        document.getElementById('canvas').height = document.getElementById('section_top').offsetHeight;

        stage.setBounds(0, 0, document.getElementById('canvas').width, document.getElementById('canvas').height);

        removeStars();
        createStars();
    }
})()