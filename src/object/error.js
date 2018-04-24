
module.exports = class Err {
    constructor(msg, code = 0) {
        Object.defineProperty(this, 'msg', {
            value: msg,
            writable: false
        });
        Object.defineProperty(this, 'code', {
            value: code,
            writable: false
        });
        Object.defineProperty(this, 'stack', {
            value: (new Error()).stack,
            writable: false
        });
    }
}
