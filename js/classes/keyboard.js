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

export default KeyboardInit;