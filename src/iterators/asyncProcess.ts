export const asyncProcess = (iterable: Iterable<any>, delay: number = 0) => {
  const iterator = iterable[Symbol.iterator]();
  function getNext() {
    const item = iterator.next();
    if (!item.done) {
      setTimeout(getNext, delay | 0);
    }
  }
  getNext();
};
