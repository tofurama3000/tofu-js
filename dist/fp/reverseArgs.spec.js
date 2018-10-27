"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('reverseArgs', () => {
    it('reverses function arguments', () => {
        const func1 = index_1.reverseArgs((a, b) => a + b);
        const func2 = index_1.reverseArgs((a, b, c) => a + b + c);
        expect(func1('Hello', 'World')).toBe('WorldHello');
        expect(func2('Hello', 'World', '?!')).toBe('?!WorldHello');
    });
});
//# sourceMappingURL=reverseArgs.spec.js.map