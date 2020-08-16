/**
 * @module iterables:takeWhile
 * @ignore
 */
import { curry } from '../fp/curry';
import { isIterable } from '../is/isIterable';
import { Predicate } from '../commonTypes';

/**
 * Keeps elements from an iterable until the provided function returns a falsey value or terminates (if it is an iterable)
 *
 * If whileFunc is a function, the current value will be passed in each time
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {function | Iterable<any>} whileFunc Used to determine when to stop returning elements from iterable
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export const takeWhile = curry(function*(
  whileFunc: Predicate<any> | Iterable<any>,
  iterable: Iterable<any>
): Iterable<any> {
  if (isIterable(whileFunc)) {
    const whileIter = whileFunc[Symbol.iterator]();
    for (const val of iterable) {
      const quitIndicator = whileIter.next();
      if (!quitIndicator.value || quitIndicator.done) return;
      yield val;
    }
  } else {
    for (const val of iterable) {
      if (whileFunc(val)) yield val;
      else return;
    }
  }
});

/**
 * Keeps elements from an iterable until the provided generator returns a falsey value
 * After each step of pulling a value from the while generator, a value will be passed into the while generator
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {Generator<any>} whileGenerator Used to determine when to stop returning elements from iterable
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export const takeWhilePullPush = curry(function*(
  whileGenerator: Iterable<any>,
  iter: Iterable<any>
): Iterable<any> {
  const whileIter = whileGenerator[Symbol.iterator]();
  for (const val of iter) {
    let quitIndicator = whileIter.next();
    if (quitIndicator.done || !quitIndicator.value) return;
    quitIndicator = whileIter.next(val);
    if (quitIndicator.done || !quitIndicator.value) return;
    yield val;
  }
});
