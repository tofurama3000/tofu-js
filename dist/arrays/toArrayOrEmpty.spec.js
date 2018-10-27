"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
describe('toArrayOrEmpty', () => {
    it('passes arrays through', () => {
        const arr = [1, 2, 3];
        expect(toArrayOrEmpty_1.toArrayOrEmpty(arr)).toBe(arr);
    });
    it('returns an empty array for non-arrays', () => {
        expect(toArrayOrEmpty_1.toArrayOrEmpty(1)).toEqual([]);
        expect(toArrayOrEmpty_1.toArrayOrEmpty('1')).toEqual([]);
        expect(toArrayOrEmpty_1.toArrayOrEmpty(() => 1)).toEqual([]);
        expect(toArrayOrEmpty_1.toArrayOrEmpty({ l: 1 })).toEqual([]);
        expect(toArrayOrEmpty_1.toArrayOrEmpty(null)).toEqual([]);
        expect(toArrayOrEmpty_1.toArrayOrEmpty(undefined)).toEqual([]);
    });
});
//# sourceMappingURL=toArrayOrEmpty.spec.js.map