"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("../is");
exports.lazyRange = (start = Infinity, end, step = 1) => {
    if (is_1.isNil(end))
        return exports.lazyRange(0, start, step);
    const to = +(end || 0);
    const from = +start;
    const stepAmt = Math.abs(step || 1);
    if (is_1.isInfinite(to)) {
        if (is_1.isInfinite(from)) {
            return (function* () {
                yield 0;
                for (let n = stepAmt;; n += stepAmt) {
                    yield n;
                    yield -n;
                }
            })();
        }
        else {
            if (to === Infinity) {
                return (function* () {
                    for (let n = from;; n += stepAmt)
                        yield n;
                })();
            }
            else {
                return (function* () {
                    for (let n = from;; n -= stepAmt)
                        yield n;
                })();
            }
        }
    }
    else {
        if (from < to) {
            return (function* () {
                for (let n = from; n < to; n += stepAmt)
                    yield n;
            })();
        }
        else {
            return (function* () {
                for (let n = from; n > to; n -= stepAmt)
                    yield n;
            })();
        }
    }
};
//# sourceMappingURL=lazyRange.js.map