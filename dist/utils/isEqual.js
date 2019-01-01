"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../is/index");
const index_2 = require("../arrays/index");
const index_3 = require("../iterators/index");
const index_4 = require("../fp/index");
function isEqual(left, right) {
    if (index_1.isNull(left) && index_1.isNull(right))
        return true;
    if (index_1.isUndefined(left) && index_1.isUndefined(right))
        return true;
    if (typeof left !== typeof right)
        return false;
    // can't compare, possibly infinite
    else if (index_1.isIterable(left))
        return index_1.isIterable(right);
    else if (index_1.isArray(left)) {
        if (!index_1.isArray(right))
            return false;
        if (left.length !== right.length)
            return false;
        const pairs = index_2.zip(left, right);
        for (const pair of pairs) {
            if (!isEqual(pair[0], pair[1]))
                return false;
        }
        return true;
    }
    else if (index_1.isBuffer(left)) {
        if (!index_1.isBuffer(right))
            return false;
        return left.compare(right) === 0;
    }
    else if (index_1.isSet(left)) {
        if (!index_1.isSet(right))
            return false;
        const compare = (lSet, rSet) => index_4.pipe(lSet, (s) => s.entries(), index_3.map((elem) => rSet.has(elem)), index_3.reduce((a, c) => a && c, true));
        return compare(left, right) && compare(right, left);
    }
    else if (index_1.isMap(left)) {
        if (!index_1.isMap(right))
            return false;
        const compare = (lMap, rMap) => index_4.pipe(lMap, (s) => s.entries(), index_3.map(([key, val]) => rMap.has(key) && isEqual(val, rMap.get(key))), index_3.reduce((a, c) => a && c, true));
        return compare(left, right) && compare(right, left);
    }
    else if (index_1.isObject(left)) {
        if (!index_1.isObject(right))
            return false;
        const compare = (lMap, rMap) => index_4.pipe(lMap, (s) => Object.entries(s), index_3.map(([key, val]) => key in rMap && isEqual(val, rMap[key])), index_3.reduce((a, c) => a && c, true));
        return compare(left, right) && compare(right, left);
    }
    else
        return left === right;
}
exports.isEqual = isEqual;
