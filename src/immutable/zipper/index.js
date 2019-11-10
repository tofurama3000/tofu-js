/**
 * Huet Zipper
 * @module immutable:Zipper
 */

// tree = Item | Iter(tree)
// path = Top | {left: Iter(tree), up: path, right: Iter(tree))}
// location = [tree, path]
import { emptyList, nestedToList, isList, toArrayNested } from '../list/index';
import { curry } from '../../fp/curry';
import { entries } from '../../obj/entries';

const Top = Symbol('top');

/**
 * Creates a new zipper from an iterable
 * Note: This will duplicate all nested iterables and convert them to immutable lists!
 *
 * @param {Iterable<any>} iterable to turn into a Huet Zipper
 * @returns {HuetZipper} A huet zipper
 */
export function createZipper(iterable) {
  return addZipperFuncs({
    tree: nestedToList(iterable),
    path: Top
  });
}

/**
 * Returns whether or not you can move left from a node
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {boolean} Whether or not you can move
 */
export function canMoveLeft({ path }) {
  return path !== Top && !path.left.isEmpty();
}

/**
 * Moves left in a huet zipper
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} A zipper that represents the result
 */
export function moveLeft({ tree, path }) {
  if (!canMoveLeft({ path })) {
    throw 'Cannot move left';
  }
  return addZipperFuncs({
    tree: path.left.first(),
    path: {
      left: path.left.rest(),
      up: path.up,
      right: path.right.add(tree)
    }
  });
}

/**
 * Moves to the leftmost position at the current level in a huet zipper
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} The leftmost position
 */
export function leftmost(zipper) {
  let currentZipper = zipper;
  while (currentZipper.canMoveLeft()) {
    currentZipper = currentZipper.moveLeft();
  }
  return currentZipper;
}

/**
 * Returns whether or not you can move right from a node
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {boolean} Whether or not you can move
 */
export function canMoveRight({ path }) {
  return path !== Top && !path.right.isEmpty();
}

/**
 * Moves right in a huet zipper
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} A zipper that represents the result
 */
export function moveRight({ tree, path }) {
  if (!canMoveRight({ path })) {
    throw 'Cannot move right';
  }
  return addZipperFuncs({
    tree: path.right.first(),
    path: {
      left: path.left.add(tree),
      up: path.up,
      right: path.right.rest()
    }
  });
}

/**
 * Moves to the rightmost position at the current level in a huet zipper
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} The rightmost position
 */
export function rightmost(zipper) {
  let currentZipper = zipper;
  while (currentZipper.canMoveRight()) {
    currentZipper = currentZipper.moveRight();
  }
  return currentZipper;
}

/**
 * Returns whether or not you can move up from a node
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {boolean} Whether or not you can move
 */
export function canMoveUp({ path }) {
  return path !== Top;
}

/**
 * Moves up in a huet zipper
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} A zipper that represents the result
 */
export function moveUp({ tree, path }) {
  if (!canMoveUp({ path })) {
    throw 'Cannot move up';
  }
  return addZipperFuncs({
    tree: path.left.reverse().concat(path.right.add(tree)),
    path: path.up
  });
}

/**
 * Returns whether or not you can move down from a node
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {boolean} Whether or not you can move
 */
export function canMoveDown({ tree }) {
  return isList(tree) && !tree.isEmpty();
}

/**
 * Moves down in a huet zipper
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} A zipper that represents the result
 */
export function moveDown({ tree, path }) {
  if (!canMoveDown({ tree })) {
    throw 'Cannot move down';
  }

  return addZipperFuncs({
    tree: tree.first(),
    path: {
      left: emptyList(),
      up: path,
      right: tree.rest()
    }
  });
}

/**
 * Changes the current element in the huet zipper
 *
 * @autocurry
 * @kind function
 * @param {any} newElem Element to replace the current element with
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} A zipper that represents the result
 */
export const change = curry((newElem, { path }) => addZipperFuncs({ tree: newElem, path }));

/**
 * Inserts element to the right
 *
 * @autocurry
 * @kind function
 * @param {any} newElem Element to insert
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} A zipper that represents the result
 */
export const insertRight = curry((newElem, { tree, path }) => {
  if (path === Top) {
    throw 'Cannot insert at top';
  }
  return addZipperFuncs({ tree, path: { ...path, right: path.right.add(nestedToList(newElem)) } });
});

/**
 * Inserts element to the left
 *
 * @autocurry
 * @kind function
 * @param {any} newElem Element to insert
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} A zipper that represents the result
 */
export const insertLeft = curry((newElem, { tree, path }) => {
  if (path === Top) {
    throw 'Cannot insert at top';
  }
  return addZipperFuncs({ tree, path: { ...path, left: nestedToList(path.left.add(newElem)) } });
});

/**
 * Inserts element below the current element if the current element is a list
 *
 * @autocurry
 * @kind function
 * @param {any} newElem Element to insert
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} A zipper that represents the result
 */
export const insertDown = curry((newElem, { tree, path }) => {
  if (!isList(tree)) {
    throw 'Cannot insert below an element';
  }
  return addZipperFuncs({
    tree: nestedToList(newElem),
    path: { left: emptyList(), path, right: tree }
  });
});

/**
 * Deletes the node from the zipper
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {HuetZipper} The zipper with the current element removed
 */
export function deleteNode({ path }) {
  if (path === Top) {
    throw 'Cannot delete top of tree';
  }
  if (!path.right.isEmpty()) {
    return addZipperFuncs({
      tree: path.right.first(),
      path: {
        ...path,
        right: path.right.rest()
      }
    });
  } else if (!path.left.isEmpty()) {
    return addZipperFuncs({
      tree: path.left.first(),
      path: {
        ...path,
        left: path.left.rest()
      }
    });
  } else {
    return addZipperFuncs({
      tree: [],
      path: path.up
    });
  }
}

/**
 * Returns the node for the current element in the zipper (will convert a list to an array)
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {any[] | any} The current element
 */
export function node({ tree }) {
  return isList(tree) ? toArrayNested(tree) : tree;
}

/**
 * Returns the node for the current element in the zipper without transformations
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {List | any} The current element
 */
export function nodeRaw({ tree }) {
  return tree;
}

/**
 * Returns the next element in the tree for a DFS traversal
 * @param {HuetZipper} zipper The zipper to operate navigate
 * @returns {HuetZipper} The next element
 */
export function next(zipper) {
  const addNotFinished = e => {
    e.finished = false;
    return e;
  };

  if (zipper.canMoveDown()) {
    return addNotFinished(zipper.moveDown());
  } else if (zipper.canMoveRight()) {
    return addNotFinished(zipper.moveRight());
  } else {
    let currentZipper = zipper;
    while (currentZipper.canMoveUp()) {
      currentZipper = currentZipper.moveUp();
      if (currentZipper.canMoveRight()) {
        return addNotFinished(currentZipper.moveRight());
      }
    }
    currentZipper.finished = true;
    return currentZipper;
  }
}

/**
 * Returns the current tree and it's sub elements as an array
 * @param {HuetZipper} zipper The zipper to operate on
 * @returns {any[]} The tree represented with arrays
 */
export function toArray({ tree }) {
  if (isList(tree)) {
    return toArrayNested(tree);
  }
  return tree;
}

/**
 * Returns whether or not a zipper is at the end of a DFS walk
 * @param {HuetZipper} zipper The zipper to check
 * @returns {boolean} Whether or not it is the end of a DFS walk
 */
export function endOfDFS({ finished }) {
  return finished;
}

const bind = zipper => ([name, func]) => {
  zipper[name] = (...args) => func(...args, zipper);
};

function addZipperFuncs(zipper) {
  entries({
    change,
    canMoveLeft,
    canMoveRight,
    canMoveUp,
    canMoveDown,
    delete: deleteNode,
    endOfDFS,
    insertRight,
    insertLeft,
    insertDown,
    leftmost,
    moveRight,
    moveLeft,
    moveDown,
    moveUp,
    next,
    node,
    nodeRaw,
    rightmost,
    toArray
  }).forEach(bind(zipper));
  return zipper;
}
