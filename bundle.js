/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_keyboard_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_rocket_js__ = __webpack_require__(2);



let keyboard = new __WEBPACK_IMPORTED_MODULE_0__classes_keyboard_js__["a" /* default */]();

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

    let rocket = new __WEBPACK_IMPORTED_MODULE_1__classes_rocket_js__["a" /* default */](rocket_spritesheet, "move");

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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class KeyboardInit {
    constructor() {
        this.keys_down = [];
        document.addEventListener("keydown", this.keyDown.bind(this));
        document.addEventListener("keyup", this.keyUp.bind(this));
    }

    keyDown(e) {
        this.__addKey(e.key, this.keys_down);
    }

    keyUp(e) {
        this.__removeKey(e.key, this.keys_down);
    }

    __addKey(key, array) {
        if(array.indexOf(key) < 0) {
            array.push(key);
        }
    }

    __removeKey(key, array) {
        if(array.indexOf(key) >= 0) {
            array.splice(array.indexOf(key), 1);
        }
    }

    isKeyDown(key) {
        if(this.keys_down.indexOf(key) >= 0) {
            return true;
        } else {
            return false;
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (KeyboardInit);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Rocket);

/***/ })
/******/ ]);