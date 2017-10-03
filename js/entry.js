import KeyboardInit from './classes/keyboard.js';
import Rocket from './classes/rocket.js';

let keyboard = new KeyboardInit();

document.getElementById('canvas').width = document.getElementById('section_top').offsetWidth;
document.getElementById('canvas').height = document.getElementById('section_top').offsetHeight;

let stage = new createjs.Stage("canvas");


var queue = new createjs.LoadQueue();
queue.on("complete", init, this);
queue.loadManifest([
    {
        id: "rocket", src: "rocket_sprites.png",
    }
]);

function init() {
    stage.setBounds(0, 0, document.getElementById('canvas').width, document.getElementById('canvas').height);
    stage.lastMousePos = {x: 0, y: 0};

    console.log("called");
    let sprite_data = {
        images: [queue.getResult('rocket')],
        frames: {
            width: 32,
            height: 40
        },
        animations: {
            stop: 0,
            move: [1, 4, "move", 1],
        }
    }

    let rocket_spritesheet = new createjs.SpriteSheet(sprite_data);

    let rocket = new Rocket(rocket_spritesheet, "move");

    stage.addChild(rocket);

    

    stage.update();

    createjs.Ticker.interval = 50;
    createjs.Ticker.addEventListener("tick", handleTick);
}

function handleTick(event) {
    let rocket = stage.getChildByName("rocket");
    
    if(stage.lastMousePos.x != stage.mouseX || stage.lastMousePos.y != stage.mouseY) {
        // console.log('Last Mouse x = ' + stage.lastMousePos.x + '|| current mouseX = ' + stage.mouseX);
        stage.lastMousePos.x = stage.mouseX;
        // console.log('Last Mouse y = ' + stage.lastMousePos.y + '|| current mouseY = ' + stage.mouseY);
        stage.lastMousePos.y = stage.mouseY;
        // console.log(ship.stage.x + ' | ' + ship.stage.y);
        rocket.dispatchEvent("mousechange");
    }

    // if(keyboard.isKeyDown("w") || keyboard.isKeyDown("s")) {
    //     if(rocket.currentAnimation != 'move') {
    //         console.log(rocket);
    //         rocket.gotoAndPlay("move"); 
    //     }
    // } else {
    //     rocket.gotoAndPlay("stop");
    // }

    rocket.handleMove();
    
    stage.update(event);
}