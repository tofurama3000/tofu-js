const {new_} = require('../src/object/index.js')

class Helper {
    constructor() {
        this.foo = 'bar'
    }
}

module.exports = class Obj {
    constructor() {
        this.nil = null;
        this.undef = undefined;
        this.int = 4;
        this.double = 5.4;
        this.bool = true;
        this.str = 'hello world';
        this.func = () => true;
        this.arr = [1,2,3,4];
        this.obj = {a: 4, b: 3, c: 10};
        this._class = new Helper();
        this.custom_class = new_(Helper)
        this.$ = '$'
    }

    hello() {
        return 'world'
    }
}
