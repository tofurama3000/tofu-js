"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe_1 = require("./pipe");
const is_1 = require("../is");
describe('pipe', () => {
    it('will return a function with only function args', () => {
        expect(is_1.isFunction(pipe_1.pipe(add1, prefixHello))).toBe(true);
    });
    it('will return a result with first param not a function', () => {
        expect(pipe_1.pipe(2, add1, prefixHello)).toBe('Hello 3');
    });
    it('will pipe functions', () => {
        expect(pipe_1.pipe(add1, prefixHello)(1)).toBe('Hello 2');
    });
});
function add1(x) {
    return x + 1;
}
function prefixHello(x) {
    return 'Hello ' + x;
}
//# sourceMappingURL=pipe.spec.js.map