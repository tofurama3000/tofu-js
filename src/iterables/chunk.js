/**
 * @module iterables:chunk
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Chuncks an iterable into groups of a specific size.
 * This is itself an iterable and will return each chunk lazily as needed
 * 
 * If the chunk size does not divide fully into the iterable size, the last chunk returned will be the remaining items (no padding)
 * @autocurried
 * @generator
 * @kind function
 * @param {number} size The maximum size for all chunks
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any[]>} returns an iterable of arrays of chunked elements
 */
export const chunk = curry(function*(size, iterable) {
  const iter = toIterableOrEmpty(iterable);
  let chunks = [];
  for (const elem of iter) {
    if (chunks.length >= size) {
      yield chunks;
      chunks = [];
    }
    chunks.push(elem);
  }
  if (chunks.length) {
    yield chunks;
  }
});
