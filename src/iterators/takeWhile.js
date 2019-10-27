import { curry } from '../fp/curry';
import { isIterable } from '../is/isIterable';

export const takeWhile = curry(function*(whileFunc, iter) {
  if (isIterable(whileFunc)) {
    const whileIter = whileFunc[Symbol.iterator]();
    for (const val of iter) {
      const quitIndicator = whileIter.next();
      if (!quitIndicator.value || quitIndicator.done) return;
      yield val;
    }
  } else {
    for (const val of iter) {
      if (whileFunc(val)) yield val;
      else return;
    }
  }
});

export const takeWhilePullPush = curry(function*(whileIterable, iter) {
  const whileIter = whileIterable[Symbol.iterator]();
  for (const val of iter) {
    let quitIndicator = whileIter.next();
    if (quitIndicator.done || !quitIndicator.value) return;
    quitIndicator = whileIter.next(val);
    if (quitIndicator.done || !quitIndicator.value) return;
    yield val;
  }
});
