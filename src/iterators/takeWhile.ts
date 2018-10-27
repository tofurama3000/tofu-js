import { curry } from '../fp';
import { isIterable } from '../is';

export const takeWhile = curry(function*(
  whileFunc: ((elem: any) => boolean) | Iterable<any>,
  iter: Iterable<any>
) {
  if (isIterable(whileFunc)) {
    const whileIter = ((whileFunc as any) as Iterable<any>)[Symbol.iterator]();
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

export const takeWhilePullPush = curry(function*(
  whileIterable: Iterable<any>,
  iter: Iterable<any>
) {
  const whileIter = whileIterable[Symbol.iterator]();
  for (const val of iter) {
    let quitIndicator = whileIter.next();
    if (quitIndicator.done || !quitIndicator.value) return;
    quitIndicator = whileIter.next(val);
    if (quitIndicator.done || !quitIndicator.value) return;
    yield val;
  }
});
