# Tofu-JS

This is a collection of useful JavaScript functions

# Table of Contents
 - [arrays](#arrays)
   - [chunk](#chunk)
   - [filter](#filter)
   - [first](#first)
   - [firstOr](#firstOr)
   - [firstOrNull](#firstOrNull)
   - [flatMap](#flatMap)
   - [flatten](#flatten)
   - [fromPairs](#fromPairs)
   - [join](#join)
   - [limit](#limit)
   - [map](#map)
   - [reduce](#reduce)
   - [scan](#scan)
   - [skip](#skip)
   - [take](#take)
   - [takeWhile](#takeWhile)
   - [tap](#tap)
   - [toArrayOrEmpty](#toArrayOrEmpty)
   - [zip](#zip)
 - [fp](#fp)
   - [curry](#curry)
   - [pipe](#pipe)
   - [and](#and)
   - [or](#or)
   - [xor](#xor)
   - [negate](#negate)
   - [toPredicate](#toPredicate)
   - [boolToPredicate](#boolToPredicate)
   - [reverseArgs](#reverseArgs)
   - [reverseCurry](#reverseCurry)
   - [spread](#spread)
 - [immutable](#immutable)
   - [List](#List)
     - [count](#count)
     - [equals](#equals)
     - [first](#first)
     - [rest](#rest)
     - [add](#add)
     - [concat](#concat)
     - [drop](#drop)
     - [dropFirst](#dropFirst)
     - [map](#map)
     - [nestedToList](#nestedToList)
     - [reverse](#reverse)
     - [split](#split)
     - [splitOn](#splitOn)
     - [toArray](#toArray)
     - [toArrayNested](#toArrayNested)
     - [toList](#toList)
     - [isEmpty](#isEmpty)
     - [isList](#isList)
     - [isListLike](#isListLike)
     - [reduce](#reduce)
   - [Stack](#Stack)
     - [Stack](#Stack)
     - [push](#push)
     - [pop](#pop)
     - [peek](#peek)
     - [isEmpty](#isEmpty)
     - [isStack](#isStack)
   - [Zipper](#Zipper)
     - [createZipper](#createZipper)
     - [canMoveLeft](#canMoveLeft)
     - [moveLeft](#moveLeft)
     - [canMoveRight](#canMoveRight)
     - [moveRight](#moveRight)
     - [canMoveUp](#canMoveUp)
     - [moveUp](#moveUp)
     - [canMoveDown](#canMoveDown)
     - [moveDown](#moveDown)
     - [change](#change)
     - [insertRight](#insertRight)
     - [insertLeft](#insertLeft)
     - [insertDown](#insertDown)
     - [deleteNode](#deleteNode)
     - [node](#node)
     - [nodeRaw](#nodeRaw)
 - [is](#is)
   - [isArray](#isArray)
   - [isBuffer](#isBuffer)
   - [isEqual](#isEqual)
   - [isFloat](#isFloat)
   - [isFunction](#isFunction)
   - [isInfinite](#isInfinite)
   - [isInteger](#isInteger)
   - [isIterable](#isIterable)
   - [isMap](#isMap)
   - [isNil](#isNil)
   - [isNull](#isNull)
   - [isNumber](#isNumber)
   - [isObject](#isObject)
   - [isSet](#isSet)
   - [isString](#isString)
   - [isUndefined](#isUndefined)
 - [iterables](#iterables)
   - [all](#all)
   - [append](#append)
   - [map](#map)
   - [prepend](#prepend)
   - [chunk](#chunk)
   - [collectToArray](#collectToArray)
   - [collectToList](#collectToList)
   - [collectToSet](#collectToSet)
   - [concat](#concat)
   - [contains](#contains)
   - [containsEquals](#containsEquals)
   - [difference](#difference)
   - [fill](#fill)
   - [fillAll](#fillAll)
   - [fillEnd](#fillEnd)
   - [fillStart](#fillStart)
   - [filter](#filter)
   - [find](#find)
   - [findOr](#findOr)
   - [findOrNull](#findOrNull)
   - [first](#first)
   - [firstOr](#firstOr)
   - [firstOrCall](#firstOrCall)
   - [firstOrNull](#firstOrNull)
   - [flatMap](#flatMap)
   - [flatten](#flatten)
   - [forEach](#forEach)
   - [fromPairs](#fromPairs)
   - [groupBy](#groupBy)
   - [intersect](#intersect)
   - [join](#join)
   - [last](#last)
   - [limit](#limit)
   - [reduce](#reduce)
   - [removeFalsey](#removeFalsey)
   - [removeTruthy](#removeTruthy)
   - [rest](#rest)
   - [reverse](#reverse)
   - [scan](#scan)
   - [skip](#skip)
   - [some](#some)
   - [take](#take)
   - [takeWhile](#takeWhile)
   - [takeWhilePullPush](#takeWhilePullPush)
   - [tap](#tap)
   - [toIterableOrEmpty](#toIterableOrEmpty)
   - [union](#union)
   - [zip](#zip)
 - [logic](#logic)
   - [and](#and)
   - [or](#or)
   - [xor](#xor)
   - [negate](#negate)
   - [negateAll](#negateAll)
 - [obj](#obj)
   - [copyInto](#copyInto)
   - [copyIntoDeep](#copyIntoDeep)
   - [entries](#entries)
   - [toPairs](#toPairs)
 - [utils](#utils)
   - [cloneShallow](#cloneShallow)
   - [cloneDeep](#cloneDeep)
   - [lazyRange](#lazyRange)
   - [range](#range)


# Documentation

# arrays




Functions for working with arrays


## chunk


&#x60;function [auto-curried]: (size: number, array: any[]) &#x3D;&gt; any[][]&#x60;

Chunks an array into arrays of a maximum size

Params: 

	**size: number** Maximum chunk size

	**array: any[]** Array to chunk

Returns: 

	**any[][]** The chunked array

[Back to Top](#table-of-contents)


## filter


&#x60;function [auto-curried]: (func: Predicate, array: any[]) &#x3D;&gt; any[]&#x60;

Filters out the elements of an array where the predicate returns false

Params: 

	**func: Predicate** Function to filter by

	**array: any[]** Array to filter

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## first


&#x60;function: (array: any[]) &#x3D;&gt; any | null&#x60;

Returns the first element of an array or null if the array is empty

Params: 

	**array: any[]** Array to operate on

Returns: 

	**any | null** The first array element

[Back to Top](#table-of-contents)


## firstOr


&#x60;function: (defaultValue: any, array: any[]) &#x3D;&gt; any&#x60;

Returns the first element of an array or a default value if the array is empty

Params: 

	**defaultValue: any** The value to return if the array is empty

	**array: any[]** Array to operate on

Returns: 

	**any** The first array element or default value

[Back to Top](#table-of-contents)


## firstOrNull


&#x60;function: (array: any[]) &#x3D;&gt; any | null&#x60;

Returns the first element of an array or null if the array is empty

Params: 

	**array: any[]** Array to operate on

Returns: 

	**any | null** The first array element

[Back to Top](#table-of-contents)


## flatMap


&#x60;function [auto-curried]: (func: function, array: any[]) &#x3D;&gt; any[]&#x60;

Calls map and then flatten on the array

Params: 

	**func: function** Function to call map with

	**array: any[]** Array to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## flatten


&#x60;function: (array: any[]) &#x3D;&gt; any[]&#x60;

Flattens one layer of nested arrays in an array

Params: 

	**array: any[]** Array to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## fromPairs


&#x60;function: (array: any[]) &#x3D;&gt; Object&#x60;

Converts an array of key&#x2F;value pairs into an object

Params: 

	**array: any[]** Array to operate on

Returns: 

	**Object** The resulting object

[Back to Top](#table-of-contents)


## join


&#x60;function [auto-curried]: (separator: string, array: any[]) &#x3D;&gt; string&#x60;

Joins elements of an array with a string

Params: 

	**separator: string** String to join elements with

	**array: any[]** Array to operate on

Returns: 

	**string** The resulting string

[Back to Top](#table-of-contents)


## limit


&#x60;function [auto-curried]: (max: number, array: any[]) &#x3D;&gt; any[]&#x60;

Limits the number of elements in an array

Params: 

	**max: number** Maximum number of elements in the array

	**array: any[]** Array to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## map


&#x60;function [auto-curried]: (func: function, array: any[]) &#x3D;&gt; any[]&#x60;

Call a function for each element of the array and return the results in a new array

Params: 

	**func: function** The function to call on each element

	**array: any[]** Array to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## reduce


&#x60;function [auto-curried]: (func: function, start: any, array: any[]) &#x3D;&gt; any&#x60;

Accumulates the elements in the array using a function

Params: 

	**func: function** Function to accumulate the values with

	**start: any** The starting accumulation value

	**array: any[]** Array to operate on

Returns: 

	**any** The resulting accumulation

[Back to Top](#table-of-contents)


## scan


&#x60;function [auto-curried]: (func: function, start: any, array: any[]) &#x3D;&gt; any[]&#x60;

Accumulates the elements in the array using a function and returns an array with each intermediate accumulation

Params: 

	**func: function** Function to accumulate the values with

	**start: any** The starting accumulation value

	**array: any[]** Array to operate on

Returns: 

	**any[]** The resulting intermediate accumulation values

[Back to Top](#table-of-contents)


## skip


&#x60;function [auto-curried]: (n: number, array: any[]) &#x3D;&gt; any[]&#x60;

Skips the first n items of the array

Params: 

	**n: number** Number of elements to skip

	**array: any[]** Array to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## take


&#x60;function [auto-curried]: (max: number, array: any[]) &#x3D;&gt; any[]&#x60;

Alias for limit

Params: 

	**max: number** Maximum number of elements in the array

	**array: any[]** Array to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## takeWhile


&#x60;function [auto-curried]: (whileFunc: Predicate, array: any[]) &#x3D;&gt; any[]&#x60;

Takes elements from the array so long as the predicate returns true for each element

Params: 

	**whileFunc: Predicate** Predicate to determine when to stop taking elements

	**array: any[]** Array to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## tap


&#x60;function [auto-curried]: (func: function, array: any[]) &#x3D;&gt; any[]&#x60;

Calls a function for each element in the array and returns the array

Params: 

	**func: function** Function to call on the array

	**array: any[]** Array to operate on

Returns: 

	**any[]** The original array

[Back to Top](#table-of-contents)


## toArrayOrEmpty


&#x60;function [auto-curried]: (obj: any) &#x3D;&gt; any[]&#x60;

If the element is an array, it returns the array; otherwise it returns an empty array

Params: 

	**obj: any** Object to check

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


## zip


&#x60;function [auto-curried]: (arrLeft: any[], arrRight: any[], moreArrays: ...any[]) &#x3D;&gt; any[][]&#x60;

Takes two or more arrays and groups elements by index from each array

E.g.
&#x60;zip([1, 2, 3], [4, 5, 6]) &#x3D;&gt; [[1, 4], [2, 5], [3, 6]]&#x60;

Params: 

	**arrLeft: any[]** The first array to zip

	**arrRight: any[]** The second array to zip

	**moreArrays: ...any[]** Other arrays to zip

Returns: 

	**any[][]** The resulting array

[Back to Top](#table-of-contents)


# fp




Functions for working with functions


## curry




Auto-curries a function

Params: 

	**func: function** Function to auto-curry

Returns: 

	**function** undefined

[Back to Top](#table-of-contents)


## pipe




Pipes an input through a series of functions

If the first parameter is a function, then pipe() will return a function
that accepts an input to pipe. Otherwise, it will pipe the first parameter
through the provided functions

Params: 

	**paramOrFunc: function | any** Either the input to pipe or a function to pipe through

	**functions: ...any** Functions to pipe through

Returns: 

	**function | any** undefined

[Back to Top](#table-of-contents)


## and




Performs the and operation on a group of predicates
This returns a function that takes a parameter to pass to the predicates

Params: 

	**predicates: ...Predicate** Predicates to and

Returns: 

	**Predicate** undefined

[Back to Top](#table-of-contents)


## or




Performs the and operation on a group of predicates
This returns a function that takes a parameter to pass to the predicates

Params: 

	**predicates: ...Predicate** Predicates to and

Returns: 

	**Predicate** undefined

[Back to Top](#table-of-contents)


## xor




Performs the and operation on a group of predicates
This returns a function that takes a parameter to pass to the predicates

Will return true if only one predicate returns true, false otherwise

Params: 

	**predicates: ...Predicate** Predicates to and

Returns: 

	**Predicate** undefined

[Back to Top](#table-of-contents)


## negate




Negates a predicate
This returns a function that takes a parameter to pass to the predicates

Params: 

	**predicates: ...Predicate** Predicate to negate

Returns: 

	**Predicate** undefined

[Back to Top](#table-of-contents)


## toPredicate




Converts a function into a predicate
(Predicates are functions that take one input and return either true or false)

Params: 

	**func: function** Function to transform

Returns: 

	**Predicate** undefined

[Back to Top](#table-of-contents)


## boolToPredicate




Converts a boolean into a predicate that always returns the same value

Params: 

	**b: boolean** Boolean to return

Returns: 

	**Predicate** undefined

[Back to Top](#table-of-contents)


## reverseArgs


&#x60;function: (func: function) &#x3D;&gt; function&#x60;

Reverses the order arguments are passed to a function

Params: 

	**func: function** Function to reverse argument order for

Returns: 

	**function** Function that will reverse the arguments

[Back to Top](#table-of-contents)


## reverseCurry




Reverses the order of arguments and auto-curries a function

Params: 

	**func: function** Function to reverse the arguments for and auto-curry

Returns: 

	**function** undefined

[Back to Top](#table-of-contents)


## spread


&#x60;function [auto-curried]: (func: function, args: any[]) &#x3D;&gt; any&#x60;

Takes a function and an array of arguments and spreads the array into function arguments

Params: 

	**func: function** Function to auto-curry

	**args: any[]** Arguments to pass to func

Returns: 

	**any** Result of calling func(...args)

[Back to Top](#table-of-contents)


# immutable




Collection of immutable data structures


## List




An immutable list

[Back to Top](#table-of-contents)


### count


&#x60;function: (list: List) &#x3D;&gt; number&#x60;

Counts the number of elements in a list

Params: 

	**list: List** List to operate on

Returns: 

	**number** The list size

[Back to Top](#table-of-contents)


### equals


&#x60;function: (list1: List, list2: List) &#x3D;&gt; boolean&#x60;

Returns whether or not two lists are equal

Lists are considered equal if they have identical elements

Params: 

	**list1: List** The first list to check

	**list2: List** The second list to check

Returns: 

	**boolean** Whether or not they are equal

[Back to Top](#table-of-contents)


### first


&#x60;function: (list: List) &#x3D;&gt; any&#x60;

Returns the first element in a list or null if the list is empty

Params: 

	**list: List** List to add the element to

Returns: 

	**any** First element of the list

[Back to Top](#table-of-contents)


### rest


&#x60;function: (list: List) &#x3D;&gt; List&#x60;

Returns the list excluding the first element or an empty list if it is empty

Params: 

	**list: List** List

Returns: 

	**List** List without the first element

[Back to Top](#table-of-contents)


### add


&#x60;function: (list: List, elem: any) &#x3D;&gt; List&#x60;

Adds an element to the front of an immutable list

Params: 

	**list: List** List to add the element to

	**elem: any** The element to add

Returns: 

	**List** A list with the element added

[Back to Top](#table-of-contents)


### concat


&#x60;function: (list1: List, lists: ...List) &#x3D;&gt; List&#x60;

Concatenates immutable lists

Params: 

	**list1: List** A list to concatenate

	**lists: ...List** Other lists to concatenate

Returns: 

	**List** A list that is the result of concatenating previous lists

[Back to Top](#table-of-contents)


### drop


&#x60;function: (list: List, n: number) &#x3D;&gt; List&#x60;

Drops n elements from the start of a list

Params: 

	**list: List** List to operate on

	**n: number** The number of elements to drop

Returns: 

	**List** A list with that many elements dropped

[Back to Top](#table-of-contents)


### dropFirst


&#x60;function: (list: List) &#x3D;&gt; List&#x60;

Drops the first element from the start of a list

Params: 

	**list: List** List to operate on

Returns: 

	**List** A list with the first element dropped

[Back to Top](#table-of-contents)


### map


&#x60;function: (list: List, func: function) &#x3D;&gt; List&#x60;

Calls func on every element in a list and returns the results as a list

Params: 

	**list: List** List to operate on

	**func: function** The function to call

Returns: 

	**List** The resulting list

[Back to Top](#table-of-contents)


### nestedToList


&#x60;function: (obj: any) &#x3D;&gt; List&#x60;

Converts all nested arrays in an object into lists

Params: 

	**obj: any** Object to covert

Returns: 

	**List** The resulting list

[Back to Top](#table-of-contents)


### reverse


&#x60;function: (list: List) &#x3D;&gt; List&#x60;

Reverses a list

Params: 

	**list: List** List to operate on

Returns: 

	**List** The reversed list

[Back to Top](#table-of-contents)


### split


&#x60;function: (list: List, index: number) &#x3D;&gt; List[]&#x60;

Splits a list at an index where all elements at that index and after are put into a separate list

Params: 

	**list: List** List to operate on

	**index: number** (Optional, default 1) The index to split the list at

Returns: 

	**List[]** A pair of lists representing the split

[Back to Top](#table-of-contents)


### splitOn


&#x60;function: (list: List, predicate: Predicate) &#x3D;&gt; List[]&#x60;

Splits a list at the first element to return true from a predicate

Params: 

	**list: List** List to operate on

	**predicate: Predicate** The predicate to use

Returns: 

	**List[]** The resulting list pair

[Back to Top](#table-of-contents)


### toArray


&#x60;function: (list: List) &#x3D;&gt; any[]&#x60;

Converts a list to an array

Params: 

	**list: List** List to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


### toArrayNested


&#x60;function: (list: List) &#x3D;&gt; any[]&#x60;

Converts a list and all sub-lists to an array

Params: 

	**list: List** List to operate on

Returns: 

	**any[]** The resulting array

[Back to Top](#table-of-contents)


### toList


&#x60;function: (obj: any[] | any) &#x3D;&gt; List&#x60;

Converts an array to a list or wraps an object in a list

This does not affect any nested arrays

Params: 

	**obj: any[] | any** The object to turn into a list

Returns: 

	**List** The resulting list

[Back to Top](#table-of-contents)


### isEmpty


&#x60;function: (list: List) &#x3D;&gt; boolean&#x60;

Returns whether or not a list is empty

Params: 

	**list: List** List to check

Returns: 

	**boolean** Whether or not it is empty

[Back to Top](#table-of-contents)


### isList


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not an object is an immutable list

Params: 

	**obj: any** The object to check

Returns: 

	**boolean** Whether it is an immutable list

[Back to Top](#table-of-contents)


### isListLike


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not an object can be operated on similar to an immutable list

Params: 

	**obj: any** Object to check

Returns: 

	**boolean** Whether or not it is list-like

[Back to Top](#table-of-contents)


### reduce


&#x60;function: (list: List, func: function, initialValue: any) &#x3D;&gt; any&#x60;

Accumulate the values of a list using a function

Params: 

	**list: List** List to accumulate

	**func: function** Function to accumulate with

	**initialValue: any** The initial value for accumulation

Returns: 

	**any** The result of the list

[Back to Top](#table-of-contents)


## Stack




An immutable stack

[Back to Top](#table-of-contents)


### Stack


&#x60;function: () &#x3D;&gt; Stack&#x60;

Creates an immutable Stack

Returns: 

	**Stack** a stack

[Back to Top](#table-of-contents)


### push


&#x60;function: (stack: Stack, items: ...any) &#x3D;&gt; Stack&#x60;

Pushes items onto the stack

Note: They will be popped off in reverse order

Params: 

	**stack: Stack** Stack to push to

	**items: ...any** Items to push

Returns: 

	**Stack** A new stack with the items pushed

[Back to Top](#table-of-contents)


### pop


&#x60;function: (stack: Stack) &#x3D;&gt; Stack&#x60;

Pops the top item from the stack

Params: 

	**stack: Stack** Stack to pop from

Returns: 

	**Stack** A new stack with the top popped

[Back to Top](#table-of-contents)


### peek


&#x60;function: (stack: Stack) &#x3D;&gt; any&#x60;

Peeks at the first item on the stack

Params: 

	**stack: Stack** Stack to peek into

Returns: 

	**any** The first item on the stack or undefined if it is empty

[Back to Top](#table-of-contents)


### isEmpty


&#x60;function: (stack: Stack) &#x3D;&gt; boolean&#x60;

Checks a stack to see if it&#39;s empty

Params: 

	**stack: Stack** Stack to check

Returns: 

	**boolean** Whether or not the stack is empty

[Back to Top](#table-of-contents)


### isStack


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Checks a stack to see if an object is an immutable stack

Params: 

	**obj: any** The object to check

Returns: 

	**boolean** Whether or not it is an immutable stack

[Back to Top](#table-of-contents)


## Zipper




Huet Zipper

[Back to Top](#table-of-contents)


### createZipper


&#x60;function: (iterable: Iterable&lt;any&gt;) &#x3D;&gt; HuetZipper&#x60;

Creates a new zipper from an iterable
Note: This will duplicate all nested iterables and convert them to immutable lists!

Params: 

	**iterable: Iterable&lt;any&gt;** to turn into a Huet Zipper

Returns: 

	**HuetZipper** A huet zipper

[Back to Top](#table-of-contents)


### canMoveLeft


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; boolean&#x60;

Returns whether or not you can move left from a node

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**boolean** Whether or not you can move

[Back to Top](#table-of-contents)


### moveLeft


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Moves left in a huet zipper

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** A zipper that represents the result

[Back to Top](#table-of-contents)


### canMoveRight


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; boolean&#x60;

Returns whether or not you can move right from a node

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**boolean** Whether or not you can move

[Back to Top](#table-of-contents)


### moveRight


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Moves right in a huet zipper

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** A zipper that represents the result

[Back to Top](#table-of-contents)


### canMoveUp


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; boolean&#x60;

Returns whether or not you can move up from a node

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**boolean** Whether or not you can move

[Back to Top](#table-of-contents)


### moveUp


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Moves up in a huet zipper

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** A zipper that represents the result

[Back to Top](#table-of-contents)


### canMoveDown


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; boolean&#x60;

Returns whether or not you can move down from a node

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**boolean** Whether or not you can move

[Back to Top](#table-of-contents)


### moveDown


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Moves down in a huet zipper

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** A zipper that represents the result

[Back to Top](#table-of-contents)


### change


&#x60;function: (newElem: any, zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Changes the current element in the huet zipper

Params: 

	**newElem: any** Element to replace the current element with

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** A zipper that represents the result

[Back to Top](#table-of-contents)


### insertRight


&#x60;function: (newElem: any, zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Inserts element to the right

Params: 

	**newElem: any** Element to insert

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** A zipper that represents the result

[Back to Top](#table-of-contents)


### insertLeft


&#x60;function: (newElem: any, zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Inserts element to the left

Params: 

	**newElem: any** Element to insert

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** A zipper that represents the result

[Back to Top](#table-of-contents)


### insertDown


&#x60;function: (newElem: any, zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Inserts element below the current element if the current element is a list

Params: 

	**newElem: any** Element to insert

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** A zipper that represents the result

[Back to Top](#table-of-contents)


### deleteNode


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; HuetZipper&#x60;

Deletes the node from the zipper

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**HuetZipper** The zipper with the current element removed

[Back to Top](#table-of-contents)


### node


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; any[] | any&#x60;

Returns the node for the current element in the zipper (will convert a list to an array)

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**any[] | any** The current element

[Back to Top](#table-of-contents)


### nodeRaw


&#x60;function: (zipper: HuetZipper) &#x3D;&gt; List | any&#x60;

Returns the node for the current element in the zipper without transformations

Params: 

	**zipper: HuetZipper** The zipper to operate on

Returns: 

	**List | any** The current element

[Back to Top](#table-of-contents)


# is




Functions for detecting types and properties


## isArray


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is an array

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is an array

[Back to Top](#table-of-contents)


## isBuffer


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is a Buffer

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is a buffer

[Back to Top](#table-of-contents)


## isEqual


&#x60;function: (left: any, right: any) &#x3D;&gt; boolean&#x60;

Performs value equality on the parameters to test for equality

Note: This is slow since it does traverse all elements in a collection

Params: 

	**left: any** The first object to test

	**right: any** The second object to test*

Returns: 

	**boolean** Whether or not they are equal

[Back to Top](#table-of-contents)


## isFloat


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Alias for isNumber

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is a floating point number

[Back to Top](#table-of-contents)


## isFunction


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is a function

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is a function

[Back to Top](#table-of-contents)


## isInfinite


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is an infinite number

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is infinite

[Back to Top](#table-of-contents)


## isInteger


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is an integer

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is an integer

[Back to Top](#table-of-contents)


## isIterable


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is an iterable

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is an iterable

[Back to Top](#table-of-contents)


## isMap


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is a Map

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is a Map

[Back to Top](#table-of-contents)


## isNil


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is either null or undefined

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is either null or undefined

[Back to Top](#table-of-contents)


## isNull


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is null

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is null

[Back to Top](#table-of-contents)


## isNumber


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is a number

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is a number

[Back to Top](#table-of-contents)


## isObject


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is an Object

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is an Object

[Back to Top](#table-of-contents)


## isSet


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is a Set

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is a Set

[Back to Top](#table-of-contents)


## isString


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is a string

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is a string

[Back to Top](#table-of-contents)


## isUndefined


&#x60;function: (obj: any) &#x3D;&gt; boolean&#x60;

Returns whether or not something is undefined

Params: 

	**obj: any** the object to test

Returns: 

	**boolean** Whether or not it is undefined

[Back to Top](#table-of-contents)


# iterables




Functions for working with iterables


## all


&#x60;function [auto-curried]: (predicate: Predicate, iterable: Iterable&lt;any&gt;) &#x3D;&gt; boolean&#x60;

Applies a predicate to all elements of an iterable and ensures they all return true
Will return false as soon as the predicate returns false for any element

Params: 

	**predicate: Predicate** The predicate to execute for each element

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**boolean** returns true if the predicate returns true for all elements of the iterable

[Back to Top](#table-of-contents)


## append


&#x60;function* [auto-curried]: (element: any, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Calls a function on each element of an iterable and returns an iterable of those results

Params: 

	**element: any** The element to prepend

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## map


&#x60;function* [auto-curried]: (func: function, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Calls a function on each element of an iterable and returns an iterable of those results

Params: 

	**func: function** The funciton to call on each element of an iterable

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## prepend


&#x60;function* [auto-curried]: (element: any, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Calls a function on each element of an iterable and returns an iterable of those results

Params: 

	**element: any** The element to prepend

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## chunk


&#x60;function* [auto-curried]: (size: number, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any[]&gt;&#x60;

Chuncks an iterable into groups of a specific size.
This is itself an iterable and will return each chunk lazily as needed

If the chunk size does not divide fully into the iterable size, the last chunk returned will be the remaining items (no padding)

Params: 

	**size: number** The maximum size for all chunks

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any[]&gt;** returns an iterable of arrays of chunked elements

[Back to Top](#table-of-contents)


## collectToArray


&#x60;function: (iterable: Iterable&lt;any&gt;, max: number) &#x3D;&gt; any[]&#x60;

Converts an iterable into an array

The maximum number of elements to iterate over can optionally be provided as well

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

	**max: number** (Optional, default Infinity) the maximum size of the resulting array

Returns: 

	**any[]** returns the iterable as an array

[Back to Top](#table-of-contents)


## collectToList


&#x60;function: (iterable: Iterable&lt;any&gt;, max: number) &#x3D;&gt; List&lt;any&gt;&#x60;

Converts an iterable into an immutable List

The maximum number of elements to iterate over can optionally be provided as well

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

	**max: number** (Optional, default Infinity) the maximum size of the resulting array

Returns: 

	**List&lt;any&gt;** returns the iterable as an immutable list

[Back to Top](#table-of-contents)


## collectToSet


&#x60;function: (iterable: Iterable&lt;any&gt;, max: number) &#x3D;&gt; Set&lt;any&gt;&#x60;

Converts an iterable into a native Set

The maximum number of elements to iterate over can optionally be provided as well

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

	**max: number** (Optional, default Infinity) the maximum size of the resulting array

Returns: 

	**Set&lt;any&gt;** returns the iterable as a Set

[Back to Top](#table-of-contents)


## concat


&#x60;function* [auto-curried]: (iterable1: Iterable&lt;any&gt;, iterable2: Iterable&lt;any&gt;, iterables: ...Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Concatenates the provided iterables

Params: 

	**iterable1: Iterable&lt;any&gt;** The first iterable

	**iterable2: Iterable&lt;any&gt;** The second iterable*

	**iterables: ...Iterable&lt;any&gt;** Other iterables

Returns: 

	**Iterable&lt;any&gt;** the resulting concatenation of the provided iterables

[Back to Top](#table-of-contents)


## contains


&#x60;function [auto-curried]: (value: any, iterable: Iterable&lt;any&gt;) &#x3D;&gt; boolean&#x60;

Returns true if the value is identical to an element in the iterable

Params: 

	**value: any** The value to search for

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**boolean** whether or not the value was found

[Back to Top](#table-of-contents)


## containsEquals


&#x60;function [auto-curried]: (value: any, iterable: Iterable&lt;any&gt;) &#x3D;&gt; boolean&#x60;

Returns true if the value is in the iterable by checking using isEqual

Params: 

	**value: any** The value to search for

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**boolean** whether or not the value was found

[Back to Top](#table-of-contents)


## difference


&#x60;function* [auto-curried]: (iterable1: Iterable&lt;any&gt;, iterable2: Iterable&lt;any&gt;, iterables: ...Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns the items in the first iterable that are not in the other iterables
Can be thought of as performing the Set difference operator (A - B)

Note: It uses the Set has function to find the difference

Params: 

	**iterable1: Iterable&lt;any&gt;** The iterable that will provide values

	**iterable2: Iterable&lt;any&gt;** An iterable with values to remove from iterable1

	**iterables: ...Iterable&lt;any&gt;** Other iterables with values to remove from iterable1

Returns: 

	**Iterable&lt;any&gt;** values from iterable1 not in the other iterables

[Back to Top](#table-of-contents)


## fill


&#x60;function* [auto-curried]: (start: number, end: number, value: value, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Fills an iterable between the start and end indexes with a value

Params: 

	**start: number** The starting index to begin filling values

	**end: number** The exclusive ending index to stop filling values

	**value: value** The value to fill the iterable with

	**iterable: Iterable&lt;any&gt;** The iterable to fill

Returns: 

	**Iterable&lt;any&gt;** An iterable with some values filled

[Back to Top](#table-of-contents)


## fillAll


&#x60;function* [auto-curried]: (value: value, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Fills all values of an iterable with a provided value

Params: 

	**value: value** The value to fill the iterable with

	**iterable: Iterable&lt;any&gt;** The iterable to fill

Returns: 

	**Iterable&lt;any&gt;** An iterable with it&#39;s values filled

[Back to Top](#table-of-contents)


## fillEnd


&#x60;function* [auto-curried]: (start: number, value: value, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Replaces all values in an iterable with a specified value after a provided index

Params: 

	**start: number** The index to start replacing values

	**value: value** The value to fill the iterable with

	**iterable: Iterable&lt;any&gt;** The iterable to fill

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## fillStart


&#x60;function* [auto-curried]: (end: number, value: value, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Replaces all values in an iterable with a specified value before a provided index

Params: 

	**end: number** The exclusive ending index to stop filling values

	**value: value** The value to fill the iterable with

	**iterable: Iterable&lt;any&gt;** The iterable to fill

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## filter


&#x60;function* [auto-curried]: (predicate: Predicate, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Filters values from an iterable where a predicate returns false

Params: 

	**predicate: Predicate** The predicate to test values with

	**iterable: Iterable&lt;any&gt;** The iterable to filter

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## find


&#x60;function* [auto-curried]: (predicate: Predicate, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns an iterable holding first element in an iterable for which a predicate returns true or an empty iterable if none is found

Params: 

	**predicate: Predicate** The predicate to test values with

	**iterable: Iterable&lt;any&gt;** The iterable to filter

Returns: 

	**Iterable&lt;any&gt;** An iterable of one element if a match is found or an empty iterable otherwise

[Back to Top](#table-of-contents)


## findOr


&#x60;function [auto-curried]: (defaultValue: any, predicate: Predicate, iterable: Iterable&lt;any&gt;) &#x3D;&gt; any&#x60;

Returns the first element in an iterable that a predicate returns true for or a default value if none is found

Params: 

	**defaultValue: any** The value to return if no element is found

	**predicate: Predicate** The predicate to test values with

	**iterable: Iterable&lt;any&gt;** The iterable to filter

Returns: 

	**any** The first element a predicate returned true for or defaultValue if none is found

[Back to Top](#table-of-contents)


## findOrNull


&#x60;function [auto-curried]: (predicate: Predicate, iterable: Iterable&lt;any&gt;) &#x3D;&gt; any&#x60;

Returns the first element in an iterable that a predicate returns true for or null if none is found

Params: 

	**predicate: Predicate** The predicate to test values with

	**iterable: Iterable&lt;any&gt;** The iterable to filter

Returns: 

	**any** The first element a predicate returned true for or null if none is found

[Back to Top](#table-of-contents)


## first




Alias for head

[Back to Top](#table-of-contents)


## firstOr


&#x60;function: (defaultValue: any, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns the first element of an iterable or a default value if the iterable is empty

Params: 

	**defaultValue: any** the vaue to return if the iterable is empty

	**iterable: Iterable&lt;any&gt;** The iterable to grab the first element of

Returns: 

	**Iterable&lt;any&gt;** The first element of the iterable or defaultValue if it is empty

[Back to Top](#table-of-contents)


## firstOrCall


&#x60;function: (func: function, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns the first element of an iterable or the result of calling a function the iterable is empty

Params: 

	**func: function** The function to call if empty

	**iterable: Iterable&lt;any&gt;** The iterable to grab the first element of

Returns: 

	**Iterable&lt;any&gt;** The result

[Back to Top](#table-of-contents)


## firstOrNull


&#x60;function: (iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns the first element of an iterable or a null if the iterable is empty

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to grab the first element of

Returns: 

	**Iterable&lt;any&gt;** The first element of the iterable or null if it is empty

[Back to Top](#table-of-contents)


## flatMap


&#x60;function* [auto-curried]: (func: function, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Performs map(func, iterable) followed by flatten(iterable) on an iterable

Params: 

	**func: function** A function to apply to each element of the iterable

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## flatten


&#x60;function*: (iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Takes an iterable of iterables and concatenates the inner iterables into one iterable

E.g.
[[1, 2, 3], [4, 5, 6]] &#x3D;&gt; [1, 2, 3, 4, 5, 6]

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to flatten

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## forEach


&#x60;function: (func: function, iterable: Iterable&lt;any&gt;) &#x3D;&gt; void&#x60;

Calls a function on each element of an iterable

Params: 

	**func: function** The function to call for each element

	**iterable: Iterable&lt;any&gt;** The iterable to flatten

Returns: 

	**void** Does not return

[Back to Top](#table-of-contents)


## fromPairs


&#x60;function*: (pairs: Iterable&lt;any[]&gt;) &#x3D;&gt; Object&#x60;

Takes an iterable of key value pairs and returns an object formed from those key-value pairs

E.g.
[[&#39;a&#39;, 5], [&#39;b&#39;, 6]] &#x3D;&gt; [{a: 5, b: 6}]

Params: 

	**pairs: Iterable&lt;any[]&gt;** An iterable of key-value pairs

Returns: 

	**Object** An object

[Back to Top](#table-of-contents)


## groupBy


&#x60;function*: (func: function, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Object&#x60;

Takes an iterable of values and groups them by the result of calling a function

Params: 

	**func: function** A function to call to group elements by

	**iterable: Iterable&lt;any&gt;** An iterable to iterate over

Returns: 

	**Object** An object where the result of func is the key and an array of elements that provided that key is the value

[Back to Top](#table-of-contents)


## intersect


&#x60;function* [auto-curried]: (iterable1: Iterable&lt;any&gt;, iterable2: Iterable&lt;any&gt;, iterables: ...Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns only the items that appear in all iterables

Note: It uses the Set.has function to find matches

Params: 

	**iterable1: Iterable&lt;any&gt;** The first iterable to get values from

	**iterable2: Iterable&lt;any&gt;** The second iterable to get values from

	**iterables: ...Iterable&lt;any&gt;** Other iterables

Returns: 

	**Iterable&lt;any&gt;** values that only occur in all provided iterables

[Back to Top](#table-of-contents)


## join


&#x60;function [auto-curried]: (separator: string, iterable: Iterable&lt;any&gt;) &#x3D;&gt; string&#x60;

Returns the elements of an iterable as a string joined by the separator

Params: 

	**separator: string** The string to join elements with

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**string** The resulting string

[Back to Top](#table-of-contents)


## last


&#x60;function: (iterable: Iterable&lt;any&gt;) &#x3D;&gt; any&#x60;

Returns the last element of an iterable

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

[Back to Top](#table-of-contents)


## limit


&#x60;function* [auto-curried]: (max: number, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns an iterable with no more than a provided maximum number of elements

Params: 

	**max: number** The maximum number of elements in the resulting iterable

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## reduce


&#x60;function [auto-curried]: (func: function, start: any, iterable: Iterable&lt;any&gt;) &#x3D;&gt; any&#x60;

Accumulates the values of an iterable by calling a function and passing in the last accumulate and current value

Params: 

	**func: function** The reducer function

	**start: any** The initial accumulation value

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**any** The resulting accumulation

[Back to Top](#table-of-contents)


## removeFalsey


&#x60;function: (iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Removes all falsey values from an iterable

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## removeTruthy


&#x60;function: (iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Removes all truthy values from an iterable

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## rest


&#x60;function: (iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns an iterable that skips over the first element

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to operate on

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## reverse


&#x60;function*: (iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Reverses the elements of an iterable

Params: 

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## scan


&#x60;function* [auto-curried]: (func: function, start: any, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Accumulates the values of an iterable by calling a function and returns all intermediate results

Params: 

	**func: function** The reducer function

	**start: any** The initial accumulation value

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** An iterable of all intermediate accumulations

[Back to Top](#table-of-contents)


## skip


&#x60;function* [auto-curried]: (n: number, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Skips the first n values of an iterable

Params: 

	**n: number** The number of elements to skip

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## some


&#x60;function [auto-curried]: (predicate: Predicate, iterable: Iterable&lt;any&gt;) &#x3D;&gt; boolean&#x60;

Returns true if any element of an iterable returns true

Params: 

	**predicate: Predicate** The predicate to execute for each element

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**boolean** returns true if the predicate returns true for any element of the iterable

[Back to Top](#table-of-contents)


## take


&#x60;function* [auto-curried]: (n: number, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Keeps only the first n values of an iterable

Params: 

	**n: number** The number of elements to keep

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## takeWhile


&#x60;function* [auto-curried]: (whileFunc: function | Iterable&lt;any&gt;, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Keeps elements from an iterable until the provided function returns a falsey value or terminates (if it is an iterable)

If whileFunc is a function, the current value will be passed in each time

Params: 

	**whileFunc: function | Iterable&lt;any&gt;** Used to determine when to stop returning elements from iterable

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## takeWhilePullPush


&#x60;function* [auto-curried]: (whileGenerator: Generator&lt;any&gt;, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Keeps elements from an iterable until the provided generator returns a falsey value
After each step of pulling a value from the while generator, a value will be passed into the while generator

Params: 

	**whileGenerator: Generator&lt;any&gt;** Used to determine when to stop returning elements from iterable

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** The resulting iterable

[Back to Top](#table-of-contents)


## tap


&#x60;function* [auto-curried]: (func: function, iterable: Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Calls a function for each element of an iterable and then passes the elmenet on

Often used for creating side effects (such as logging) while in the middle of processing an iterable

Params: 

	**func: function** Function to call on each element

	**iterable: Iterable&lt;any&gt;** The iterable to iterate over

Returns: 

	**Iterable&lt;any&gt;** An iterable with the values passed through

[Back to Top](#table-of-contents)


## toIterableOrEmpty


&#x60;function: (param: any) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

If the parameter is an iterable it is returned, otherwise an empty array is returned

Params: 

	**param: any** An object to check if it is an iterable

Returns: 

	**Iterable&lt;any&gt;** undefined

[Back to Top](#table-of-contents)


## union


&#x60;function* [auto-curried]: (iterable1: Iterable&lt;any&gt;, iterable2: Iterable&lt;any&gt;, iterables: ...Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Returns all the items in any iterable at most once

Note: It uses the Set.has function to make occurences unique

Params: 

	**iterable1: Iterable&lt;any&gt;** The first iterable to get values from

	**iterable2: Iterable&lt;any&gt;** The second iterable to get values from

	**iterables: ...Iterable&lt;any&gt;** Other iterables

Returns: 

	**Iterable&lt;any&gt;** values from all provided iterables

[Back to Top](#table-of-contents)


## zip


&#x60;function* [auto-curried]: (iterable1: Iterable&lt;any&gt;, iterable2: Iterable&lt;any&gt;, iterables: ...Iterable&lt;any&gt;) &#x3D;&gt; Iterable&lt;any&gt;&#x60;

Takes the corresponding elements of each iterable based on index and groups them

E.g.
&#x60;zip([1, 2, 3], [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [4, 5, 6]) &#x3D;&gt; [[1, &#39;a&#39;, 4], [2, &#39;b&#39;, 5], [3, &#39;c&#39;, 6]]&#x60;

Params: 

	**iterable1: Iterable&lt;any&gt;** The first iterable to iterate over

	**iterable2: Iterable&lt;any&gt;** The second iterable to iterate over

	**iterables: ...Iterable&lt;any&gt;** Other iterables to iterate over

Returns: 

	**Iterable&lt;any&gt;** values from all provided iterables grouped by index

[Back to Top](#table-of-contents)


# logic




Functions for handling boolean logic


## and


&#x60;function: (bools: ...boolean) &#x3D;&gt; boolean&#x60;

Ands a group of booleans

Params: 

	**bools: ...boolean** list of booleans

Returns: 

	**boolean** result of and on all of them

[Back to Top](#table-of-contents)


## or


&#x60;function: (bools: ...boolean) &#x3D;&gt; boolean&#x60;

Ors a group of booleans

Params: 

	**bools: ...boolean** list of booleans

Returns: 

	**boolean** result of or on all of them

[Back to Top](#table-of-contents)


## xor


&#x60;function: (bools: ...boolean) &#x3D;&gt; boolean&#x60;

Xors a group of booleans (only returns true if one and only one is true)

Params: 

	**bools: ...boolean** list of booleans

Returns: 

	**boolean** result of xor on all of them

[Back to Top](#table-of-contents)


## negate


&#x60;function: (bool: boolean) &#x3D;&gt; boolean&#x60;

Negates a boolean

Params: 

	**bool: boolean** boolean to negate

Returns: 

	**boolean** negation of the boolean

[Back to Top](#table-of-contents)


## negateAll


&#x60;function: (bools: ...boolean) &#x3D;&gt; boolean[]&#x60;

Negates a group of booleans

Params: 

	**bools: ...boolean** list of booleans

Returns: 

	**boolean[]** result of negating each boolean

[Back to Top](#table-of-contents)


# obj




Functions for operating on objects


## copyInto


&#x60;function [auto-curried]: (source: obj, target: obj) &#x3D;&gt; any&#x60;

Copies attributes from source into a target

Params: 

	**source: obj** The object to copy attributes from

	**target: obj** The object to copy attributes into

[Back to Top](#table-of-contents)


## copyIntoDeep


&#x60;function [auto-curried]: (source: obj, target: obj) &#x3D;&gt; any&#x60;

Copies attributes from source into a target
Values are deeply cloned when copied

Params: 

	**source: obj** The object to copy attributes from

	**target: obj** The object to copy attributes into

[Back to Top](#table-of-contents)


## entries


&#x60;function: (param: object | Map | Set | Array | Iterable) &#x3D;&gt; any&#x60;

Grabs entries for an object

Params: 

	**param: object | Map | Set | Array | Iterable** 

[Back to Top](#table-of-contents)


## toPairs




Splits an object into pairs

[Back to Top](#table-of-contents)


# utils




Misc utility functions


## cloneShallow


&#x60;function: (toClone: any) &#x3D;&gt; any&#x60;

Performs a shallow clone
Shallow clones don&#39;t copy any nested objects, arrays, etc

Params: 

	**toClone: any** what should be cloned

Returns: 

	**any** cloned object

[Back to Top](#table-of-contents)


## cloneDeep


&#x60;function: (toClone: any) &#x3D;&gt; any&#x60;

Performs a deep clone
Deep clones will also clone any nested objects, arrays, etc

Params: 

	**toClone: any** what should be cloned

Returns: 

	**any** cloned object

[Back to Top](#table-of-contents)


## lazyRange


&#x60;function: (start: number, end: number, step: number) &#x3D;&gt; Iterable&lt;number&gt;&#x60;

Generates a range of numbers lazily (can be infinite range)

Note: if start is provided but end is not then it will act as if starting at 0 and ending at the provided number
E.g. lazyRange(4) is the same as lazyRange(0, 4)

Note: if start &gt; end then it will step down from start to end

Params: 

	**start: number** (Optional, defaults to 0) the starting number for the range

	**end: number** (Optional, defaults to Infinity) the ending number for the range

	**step: number** (optional, defaults to 1) the step size to take for the range

Returns: 

	**Iterable&lt;number&gt;** iterable for the range to be generated

[Back to Top](#table-of-contents)


## range


&#x60;function: (start: number, end: number, step: number) &#x3D;&gt; number[]&#x60;

Generates a range of numbers and returns them as an array

Note: if start is provided but end is not then it will act as if starting at 0 and ending at the provided number
E.g. range(4) is the same as range(0, 4)

Note: if start &gt; end then it will step down from start to end

Params: 

	**start: number** (Optional, defaults to 0) the starting number for the range

	**end: number** the ending number for the range

	**step: number** (optional, defaults to 1) the step size to take for the range

Returns: 

	**number[]** number array for the range

[Back to Top](#table-of-contents)


