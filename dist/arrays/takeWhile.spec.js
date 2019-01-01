"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const takeWhile_1 = require("./takeWhile");
describe('takeWhile', () => {
    it('will take while a function returns true', () => {
        const fn = (() => {
            let i = 0;
            return () => {
                if (i++ < 3)
                    return true;
                return false;
            };
        })();
        expect(takeWhile_1.takeWhile(fn, [1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
    });
});
