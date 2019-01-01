"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const is_1 = require("../is");
exports.takeWhile = fp_1.curry(function* (whileFunc, iter) {
    if (is_1.isIterable(whileFunc)) {
        const whileIter = whileFunc[Symbol.iterator]();
        for (const val of iter) {
            const quitIndicator = whileIter.next();
            if (!quitIndicator.value || quitIndicator.done)
                return;
            yield val;
        }
    }
    else {
        for (const val of iter) {
            if (whileFunc(val))
                yield val;
            else
                return;
        }
    }
});
exports.takeWhilePullPush = fp_1.curry(function* (whileIterable, iter) {
    const whileIter = whileIterable[Symbol.iterator]();
    for (const val of iter) {
        let quitIndicator = whileIter.next();
        if (quitIndicator.done || !quitIndicator.value)
            return;
        quitIndicator = whileIter.next(val);
        if (quitIndicator.done || !quitIndicator.value)
            return;
        yield val;
    }
});
