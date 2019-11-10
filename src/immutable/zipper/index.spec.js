import { createZipper } from './index';

describe('Zipper', () => {
  it('can detect if can go down', () => {
    const zipper = createZipper([1, 2]);

    expect(zipper.canMoveDown()).toBe(true);

    expect(zipper.moveDown().canMoveDown()).toBe(false);
    expect(
      createZipper([[], 1])
        .moveDown()
        .canMoveDown()
    ).toBe(false);
  });

  it('can go down', () => {
    const zipper = createZipper([[1, 2, 3, 4]]);

    expect(zipper.moveDown().node()).toEqual([1, 2, 3, 4]);

    expect(
      zipper
        .moveDown()
        .nodeRaw()
        .toArray()
    ).toEqual([1, 2, 3, 4]);

    expect(
      zipper
        .moveDown()
        .moveDown()
        .node()
    ).toBe(1);

    expect(() =>
      zipper
        .moveDown()
        .moveDown()
        .moveDown()
    ).toThrow();

    expect(() =>
      createZipper()
        .moveDown()
        .moveDown()
    ).toThrow();
  });

  it('can detect if can go right', () => {
    const zipper = createZipper([1, 2]);

    expect(zipper.moveDown().canMoveRight()).toBe(true);

    expect(zipper.canMoveRight()).toBe(false);
    expect(
      zipper
        .moveDown()
        .moveRight()
        .canMoveRight()
    ).toBe(false);
  });

  it('can go right', () => {
    const zipper = createZipper([1, 2, 3, 4]);

    expect(
      zipper
        .moveDown()
        .moveRight()
        .node()
    ).toBe(2);

    expect(
      zipper
        .moveDown()
        .moveRight()
        .moveRight()
        .node()
    ).toBe(3);

    expect(() =>
      createZipper([1])
        .moveDown()
        .moveRight()
        .moveRight()
    ).toThrow();

    expect(() =>
      createZipper([1])
        .moveRight()
        .moveRight()
    ).toThrow();
  });

  it('can detect if can go left', () => {
    const zipper = createZipper([1, 2, 3, 4]);

    expect(
      zipper
        .moveDown()
        .moveRight()
        .canMoveLeft()
    ).toBe(true);

    expect(zipper.canMoveLeft()).toBe(false);
    expect(zipper.moveDown().canMoveLeft()).toBe(false);
  });

  it('can go left', () => {
    const zipper = createZipper([1, 2, 3, 4]);

    expect(
      zipper
        .moveDown()
        .moveRight()
        .moveLeft()
        .node()
    ).toBe(1);

    expect(
      zipper
        .moveDown()
        .moveRight()
        .moveRight()
        .moveLeft()
        .node()
    ).toBe(2);

    expect(
      zipper
        .moveDown()
        .moveRight()
        .moveRight()
        .moveLeft()
        .moveLeft()
        .node()
    ).toBe(1);

    expect(() =>
      createZipper([1])
        .moveDown()
        .moveLeft()
    ).toThrow();

    expect(() => createZipper([1]).moveLeft()).toThrow();
  });

  it('can detect if can go up', () => {
    const zipper = createZipper([[1, 2, 3, 4]]);

    expect(
      zipper
        .moveDown()
        .moveDown()
        .moveUp()
        .canMoveUp()
    ).toBe(true);

    expect(zipper.canMoveUp()).toBe(false);
  });

  it('can go up', () => {
    const zipper = createZipper([[1, 2, 3, 4]]);

    expect(
      zipper
        .moveDown()
        .moveDown()
        .moveUp()
        .node()
    ).toEqual([1, 2, 3, 4]);

    expect(
      zipper
        .moveDown()
        .moveDown()
        .moveUp()
        .moveUp()
        .node()
    ).toEqual([[1, 2, 3, 4]]);

    expect(() => zipper.moveUp()).toThrow();
  });

  it('can change the current element', () => {
    const zipper = createZipper([1, 2, 3]);

    expect(
      zipper
        .moveDown()
        .change(4)
        .node()
    ).toBe(4);

    expect(
      zipper
        .moveDown()
        .change(4)
        .moveUp()
        .node()
    ).toEqual([4, 2, 3]);
  });

  it('can insert right', () => {
    const zipper = createZipper([1, 2, 3]);

    expect(
      zipper
        .moveDown()
        .insertRight(4)
        .moveRight()
        .node()
    ).toBe(4);

    expect(
      zipper
        .moveDown()
        .insertRight(4)
        .moveUp()
        .node()
    ).toEqual([1, 4, 2, 3]);

    expect(
      zipper
        .moveDown()
        .insertRight([1, 2])
        .moveRight()
        .nodeRaw()
        .equals([1, [2, []]])
    ).toBe(true);

    expect(() => createZipper([1]).insertRight(1)).toThrow();
  });

  it('can insert left', () => {
    const zipper = createZipper([1, 2, 3]);

    expect(
      zipper
        .moveDown()
        .insertLeft(4)
        .moveLeft()
        .node()
    ).toBe(4);

    expect(
      zipper
        .moveDown()
        .insertLeft(4)
        .moveUp()
        .node()
    ).toEqual([4, 1, 2, 3]);

    expect(
      zipper
        .moveDown()
        .insertLeft([1, 2])
        .moveLeft()
        .nodeRaw()
        .equals([1, [2, []]])
    ).toBe(true);

    expect(() => createZipper([1]).insertLeft(1)).toThrow();
  });

  it('can insert down', () => {
    const zipper = createZipper([[1], 1, 2, 3]);

    expect(
      zipper
        .moveDown()
        .insertDown(4)
        .node()
    ).toBe(4);

    expect(
      zipper
        .moveDown()
        .insertDown([1, 2])
        .nodeRaw()
        .equals([1, [2, []]])
    ).toBe(true);

    expect(
      zipper
        .moveDown()
        .insertDown(4)
        .moveUp()
        .node()
    ).toEqual([4, 1]);

    expect(() =>
      createZipper([1])
        .moveDown()
        .insertDown(1)
    ).toThrow();
  });

  it('can delete elements', () => {
    const zipper = createZipper([1, 2, 3]);

    const del1 = zipper.moveDown().delete();
    expect(del1.node()).toBe(2);
    expect(del1.moveUp().node()).toEqual([2, 3]);

    const del2 = zipper
      .moveDown()
      .moveRight()
      .moveRight()
      .delete();
    expect(del2.node()).toBe(2);
    expect(del2.moveUp().node()).toEqual([1, 2]);

    const del3 = createZipper([1, [2], 3])
      .moveDown()
      .moveRight()
      .moveDown()
      .delete();
    expect(del3.node()).toEqual([]);
    expect(del3.moveUp().node()).toEqual([1, [], 3]);

    expect(() => createZipper([1, 2, 3]).delete()).toThrow();
  });

  it('can detect end of DFS traversal', () => {
    let zipper = createZipper([[1, 2]]);
    expect(zipper.next().endOfDFS()).toBe(false);
    expect(
      zipper
        .next()
        .next()
        .next()
        .endOfDFS()
    ).toBe(false);
    expect(
      zipper
        .next()
        .next()
        .next()
        .next()
        .endOfDFS()
    ).toBe(true);
  });

  it('can do a DFS traversal', () => {
    let zipper = createZipper([[1, 2], [3, 4, [5, 6, 7], 8], 9, [[10]]]);
    const order = [];

    while (!zipper.endOfDFS()) {
      if (typeof zipper.node() === 'number') {
        order.push(zipper.node());
      }
      zipper = zipper.next();
    }
    expect(order).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can convert to an array', () => {
    let zipper = createZipper([[1, 2], [3, 4, [5, 6, 7], 8], 9, [[10]]]);
    expect(zipper.toArray()).toEqual([[1, 2], [3, 4, [5, 6, 7], 8], 9, [[10]]]);
    expect(
      zipper
        .moveDown()
        .moveRight()
        .toArray()
    ).toEqual([3, 4, [5, 6, 7], 8]);
    expect(zipper.moveDown().toArray()).toEqual([1, 2]);
    expect(
      zipper
        .moveDown()
        .moveDown()
        .toArray()
    ).toEqual(1);
  });

  it('can move to the root', () => {
    let zipper = createZipper([[[[[[1, 2]]]]]]);
    expect(zipper.root().node()).toEqual([[[[[[1, 2]]]]]]);
    expect(
      zipper
        .moveDown()
        .moveDown()
        .moveDown()
        .moveDown()
        .moveDown()
        .moveDown()
        .root()
        .node()
    ).toEqual([[[[[[1, 2]]]]]]);
  });

  it('can go to the rightmost position', () => {
    expect(
      createZipper([1, 2, 3, 4, 5])
        .moveDown()
        .rightmost()
        .node()
    ).toBe(5);
    expect(
      createZipper([1])
        .moveDown()
        .rightmost()
        .node()
    ).toBe(1);
  });

  it('can go to the leftmost position', () => {
    expect(
      createZipper([1, 2, 3, 4, 5])
        .moveDown()
        .moveRight()
        .moveRight()
        .moveRight()
        .moveRight()
        .leftmost()
        .node()
    ).toBe(1);
    expect(
      createZipper([1])
        .moveDown()
        .leftmost()
        .node()
    ).toBe(1);
  });
});
