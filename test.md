# Tofu-JS

This is a collection of useful JavaScript functions

## Table of Contents
 - [logic](#logic)   - [and](#and)   - [or](#or)   - [xor](#xor)   - [negate](#negate)   - [negateAll](#negateAll)

# Documentation

## logic


Functions for handling boolean logic

### and

`function: (bools: ...boolean) => boolean`
Ands a group of booleans
Params: 
	**bools: ...boolean** list of booleans
Returns: 
	**boolean** result of and on all of them

### or

`function: (bools: ...boolean) => boolean`
Ors a group of booleans
Params: 
	**bools: ...boolean** list of booleans
Returns: 
	**boolean** result of or on all of them

### xor

`function: (bools: ...boolean) => boolean`
Xors a group of booleans (only returns true if one and only one is true)
Params: 
	**bools: ...boolean** list of booleans
Returns: 
	**boolean** result of xor on all of them

### negate

`function: (bool: boolean) => boolean`
Negates a boolean
Params: 
	**bool: boolean** boolean to negate
Returns: 
	**boolean** negation of the boolean

### negateAll

`function: (bools: ...boolean) => boolean[]`
Negates a group of booleans
Params: 
	**bools: ...boolean** list of booleans
Returns: 
	**boolean[]** result of negating each boolean

