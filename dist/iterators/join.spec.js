"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const join_1 = require("./join");
const firstOrNull_1 = require("./firstOrNull");
describe('join', () => {
    it('works on arrays', () => {
        expect(firstOrNull_1.firstOrNull(join_1.join(',', [1, 2, 3]))).toBe('1,2,3');
        expect(firstOrNull_1.firstOrNull(join_1.join(' ', [0, 1, 2, 3]))).toBe('0 1 2 3');
    });
    it('works on generators', () => {
        const gen = function* () {
            yield* [1, 3, 5];
        };
        expect(firstOrNull_1.firstOrNull(join_1.join(',', gen()))).toBe('1,3,5');
    });
});
//# sourceMappingURL=join.spec.js.map