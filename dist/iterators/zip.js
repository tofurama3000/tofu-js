"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.zip = fp_1.curry(function* (iterableLeft, iterableRight, ...moreIterables) {
    const iterators = [iterableLeft, iterableRight]
        .concat(moreIterables)
        .map(toIterableOrEmpty_1.toIterableOrEmpty)
        .map(iterable => iterable[Symbol.iterator]());
    while (true) {
        const next = iterators.map(iterator => iterator.next());
        const items = next.map(({ value, done }) => (done ? null : value));
        if (next.reduce((acc, cur) => acc && cur.done, true))
            return;
        yield items;
    }
});
//# sourceMappingURL=zip.js.map