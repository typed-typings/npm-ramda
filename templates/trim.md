Removes (strips) whitespace from both ends of the string.

@func
@memberOf R
@since v0.6.0
@category String
@sig String -> String
@param {String} str The string to trim.
@return {String} Trimmed version of `str`.
@example

     R.trim('   xyz  '); //=> 'xyz'
     R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
