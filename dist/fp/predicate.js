"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = (...predicates) => (param) => [...predicates].reduce((a, p) => a && p(param), true) && !!predicates.length;
exports.or = (...predicates) => (param) => [...predicates].reduce((a, p) => a || p(param), false);
exports.xor = (...predicates) => (param) => [...predicates].map(p => +p(param)).reduce((a, c) => a + c, 0) === 1;
exports.negate = (p1) => (param) => !p1(param);
exports.toPredicate = (p) => (param) => !!p(param);
exports.boolToPredicate = (b) => () => b;
//# sourceMappingURL=predicate.js.map