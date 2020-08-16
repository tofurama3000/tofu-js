import { and, boolToPredicate, negate, or, toPredicate, xor } from './predicate';

describe('predicate', () => {
  describe('or', () => {
    it('can accept 2 functions', () => {
      expect(or(T, T)(5)).toBe(true);
      expect(or(T, F)(5)).toBe(true);
      expect(or(F, T)(5)).toBe(true);
      expect(or(F, F)(5)).toBe(false);
    });

    it('can accept many functions', () => {
      expect(or(F, F, T)(5)).toBe(true);
      expect(or(F, F, F)(5)).toBe(false);
      expect(or(F, F, F, T)(5)).toBe(true);
      expect(or(F, F, F, F)(5)).toBe(false);
    });
  });

  describe('and', () => {
    it('can accept 2 functions', () => {
      expect(and(T, T)(5)).toBe(true);
      expect(and(T, F)(5)).toBe(false);
      expect(and(F, T)(5)).toBe(false);
      expect(and(F, F)(5)).toBe(false);
    });

    it('can accept many functions', () => {
      expect(and(T, T, T)(5)).toBe(true);
      expect(and(F, F, T)(5)).toBe(false);
      expect(and(F, F, F)(5)).toBe(false);
      expect(and(T, T, T, T)(5)).toBe(true);
      expect(and(F, F, F, T)(5)).toBe(false);
      expect(and(F, F, F, F)(5)).toBe(false);
    });
  });

  describe('xor', () => {
    it('can accept 2 functions', () => {
      expect(xor(T, T)(5)).toBe(false);
      expect(xor(T, F)(5)).toBe(true);
      expect(xor(F, T)(5)).toBe(true);
      expect(xor(F, F)(5)).toBe(false);
    });

    it('can accept many functions', () => {
      expect(xor(T, T, T)(5)).toBe(false);
      expect(xor(F, F, T)(5)).toBe(true);
      expect(xor(F, F, F)(5)).toBe(false);
      expect(xor(T, T, T, T)(5)).toBe(false);
      expect(xor(F, F, F, T)(5)).toBe(true);
      expect(xor(F, F, F, F)(5)).toBe(false);
    });
  });

  describe('negate', () => {
    it('negates the output', () => {
      expect(negate(T)(5)).toBe(false);
      expect(negate(F)(5)).toBe(true);
    });
  });

  describe('toPredicate', () => {
    it('converts predicate to output', () => {
      expect(toPredicate(NonPredicate)(5)).toBe(false);
      expect(toPredicate(NonPredicate)(6)).toBe(true);
    });
  });

  describe('boolToPredicate', () => {
    it('converts bool to predicate', () => {
      expect(boolToPredicate(true)(6)).toBe(true);
      expect(boolToPredicate(false)(5)).toBe(false);
    });
  });
});

function T(_) {
  return true;
}

function F(_) {
  return false;
}

function NonPredicate(val) {
  return val - 5;
}
