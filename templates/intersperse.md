Creates a new list with the separator interposed between elements.

Dispatches to the `intersperse` method of the second argument, if present.

@func
@memberOf R
@since v0.14.0
@category List
@sig a -> [a] -> [a]
@param {*} separator The element to add to the list.
@param {Array} list The list to be interposed.
@return {Array} The new list.
@example

     R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
