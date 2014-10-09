declare var R: R.RamdaStatic;

declare module R {

    interface ListIterator<T, TResult> {
        (value: T, index: number, list: T[]): TResult;
    }

    interface ObjectIterator<T, TResult> {
        (element: T, key: string, list: any): TResult;
    }

    interface ArrayLike {
        nodeType: number;
    }

    interface FuncIndex extends Arity0Fn {
        (): any;
        idx: Function;
    }

    interface Arity0Fn {
        (): any
    }

    interface Arity1Fn {
        (a: any): any
    }

    interface Arity2Fn {
        (a: any, b: any): any
    }

    // Common interface between Arrays and jQuery objects
    interface List<T> {
        [index: number]: T;
        length: number;
    }

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface RamdaStatic {

        /**
         * returns a subset of a string between one index and another.
         *
         * @func
         * @memberOf R
         * @category string
         * @sig Number -> Number -> String -> String
         * @param {Number} indexA An integer between 0 and the length of the string.
         * @param {Number} indexB An integer between 0 and the length of the string.
         * @param {String} The string to extract from
         * @return {String} the extracted substring
         * @see R.invoker
         * @example
         *
         *      substring(2, 5, 'abcdefghijklm'); //=> 'cde'
         */
        substring(indexA: number, indexB: number, str: string): string;

        /**
         * The trailing substring of a String starting with the nth character:
         *
         * @func
         * @memberOf R
         * @category string
         * @sig Number -> String -> String
         * @param {Number} indexA An integer between 0 and the length of the string.
         * @param {String} The string to extract from
         * @return {String} the extracted substring
         * @see R.invoker
         * @example
         *
         *      substringFrom(8, 'abcdefghijklm'); //=> 'ijklm'
         */
        substringFrom(indexA: number, str: string): string;

        /**
         * The leading substring of a String ending before the nth character:
         *
         * @func
         * @memberOf R
         * @category string
         * @sig Number -> String -> String
         * @param {Number} indexA An integer between 0 and the length of the string.
         * @param {String} str The string to extract from
         * @return {String} the extracted substring
         * @see R.invoker
         * @example
         *
         *      substringTo(8, 'abcdefghijklm'); //=> 'abcdefgh'
         */
        substringTo(indexA: number, str: string): string;

        /**
         * Tests whether or not an object is similar to an array.
         *
         * @func
         * @category Type
         * @category List
         * @param {*} val The object to test.
         * @return {boolean} `true` if `val` has a numeric length property; `false` otherwise.
         * @example
         *
         *      R.isArrayLike([]); //=> true
         *      R.isArrayLike(true); //=> false
         *      R.isArrayLike({}); //=> false
         *      R.isArrayLike({length: 10}); //=> true
         */
        isArrayLike(val: any): boolean;


        /**
         * Converts a function into something like an infix operation, meaning that
         * when called with a single argument, that argument is applied to the
         * second position, sort of a curry-right.  This allows for more natural
         * processing of functions which are really binary operators.
         *
         * @memberOf R
         * @category Functions
         * @param {function} fn The operation to adjust
         * @return {function} A new function that acts somewhat like an infix operator.
         * @example
         *
         *      var div = R.op(function (a, b) {
         *          return a / b;
         *      });
         *
         *      div(6, 3); //=> 2
         *      div(6, _)(3); //=> 2 // note: `_` here is just an `undefined` value.  You could use `void 0` instead
         *      div(3)(6); //=> 2
         */
        op(fn: Function): Function;


        /**
         * Creates a new version of `fn` with given arity that, when invoked,
         * will return either:
         * - A new function ready to accept one or more of `fn`'s remaining arguments, if all of
         * `fn`'s expected arguments have not yet been provided
         * - `fn`'s result if all of its expected arguments have been provided
         *
         * This function is useful in place of `curry`, when the arity of the
         * function to curry cannot be determined from its signature, e.g. if it's
         * a variadic function.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig Number -> (* -> a) -> (* -> a)
         * @param {number} fnArity The arity for the returned function.
         * @param {Function} fn The function to curry.
         * @return {Function} A new, curried function.
         * @see R.curry
         * @example
         *
         * var addFourNumbers = function() {
         * return R.sum([].slice.call(arguments, 0, 4));
         * };
         *
         * var curriedAddFourNumbers = R.curryN(4, addFourNumbers);
         * var f = curriedAddFourNumbers(1, 2);
         * var g = f(3);
         * g(4);//=> 10
         */
        curryN(lenght: number, fn: (...args: any[]) => any): Function;

        /**
         * Creates a new version of `fn` that, when invoked, will return either:
         * - A new function ready to accept one or more of `fn`'s remaining arguments, if all of
         * `fn`'s expected arguments have not yet been provided
         * - `fn`'s result if all of its expected arguments have been provided
         *
         * Optionally, you may provide an arity for the returned function.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (* -> a) -> Number -> (* -> a)
         * @sig (* -> a) -> (* -> a)
         * @param {Function} fn The function to curry.
         * @param {number} [fnArity=fn.length] An optional arity for the returned function.
         * @return {Function} A new, curried function.
         * @example
         *
         *      var addFourNumbers = function(a, b, c, d) {
         *        return a + b + c + d;
         *      };
         *
         *      var curriedAddFourNumbers = curry(addFourNumbers);
         *      var f = curriedAddFourNumbers(1, 2);
         *      var g = f(3);
         *      g(4);//=> 10
         */
        curry(fn: (...args: any[]) => any, fnArity?: number): Function;


        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
         * parameters. Any extraneous parameters will not be passed to the supplied function.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig Number -> (* -> a) -> (* -> a)
         * @param {number} n The desired arity of the new function.
         * @param {Function} fn The function to wrap.
         * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
         *         arity `n`.
         * @example
         *
         *      var takesTwoArgs = function(a, b) {
         *        return [a, b];
         *      };
         *      takesTwoArgs.length; //=> 2
         *      takesTwoArgs(1, 2); //=> [1, 2]
         *
         *      var takesOneArg = R.nAry(1, takesTwoArgs);
         *      takesOneArg.length; //=> 1
         *      // Only `n` arguments are passed to the wrapped function
         *      takesOneArg(1, 2); //=> [1, undefined]
         */
        nAry(n: number, fn: (...arg0: any[]) => any): Function;


        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly 1
         * parameter. Any extraneous parameters will not be passed to the supplied function.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (* -> b) -> (a -> b)
         * @param {Function} fn The function to wrap.
         * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
         *         arity 1.
         * @example
         *
         *      var takesTwoArgs = function(a, b) {
         *        return [a, b];
         *      };
         *      takesTwoArgs.length; //=> 2
         *      takesTwoArgs(1, 2); //=> [1, 2]
         *
         *      var takesOneArg = R.unary(takesTwoArgs);
         *      takesOneArg.length; //=> 1
         *      // Only 1 argument is passed to the wrapped function
         *      takesOneArg(1, 2); //=> [1, undefined]
         */
        unary(fn: (...args: any[]) => any): Function;


        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly 2
         * parameters. Any extraneous parameters will not be passed to the supplied function.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (* -> c) -> (a, b -> c)
         * @param {Function} fn The function to wrap.
         * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
         *         arity 2.
         * @example
         *
         *      var takesThreeArgs = function(a, b, c) {
         *        return [a, b, c];
         *      };
         *      takesThreeArgs.length; //=> 3
         *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
         *
         *      var takesTwoArgs = R.binary(takesThreeArgs);
         *      takesTwoArgs.length; //=> 2
         *      // Only 2 arguments are passed to the wrapped function
         *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
         */
        binary(fn: (...args: any[]) => any): Function;


        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
         * parameters. Unlike `nAry`, which passes only `n` arguments to the wrapped function,
         * functions produced by `arity` will pass all provided arguments to the wrapped function.
         *
         * @func
         * @memberOf R
         * @sig (Number, (* -> *)) -> (* -> *)
         * @category Function
         * @param {number} n The desired arity of the returned function.
         * @param {Function} fn The function to wrap.
         * @return {Function} A new function wrapping `fn`. The new function is
         *         guaranteed to be of arity `n`.
         * @example
         *
         *      var takesTwoArgs = function(a, b) {
         *        return [a, b];
         *      };
         *      takesTwoArgs.length; //=> 2
         *      takesTwoArgs(1, 2); //=> [1, 2]
         *
         *      var takesOneArg = R.arity(1, takesTwoArgs);
         *      takesOneArg.length; //=> 1
         *      // All arguments are passed through to the wrapped function
         *      takesOneArg(1, 2); //=> [1, 2]
         */
        arity(n: number, fn: (...args: any[]) => any): Function;


        /**
         * Turns a named method of an object (or object prototype) into a function that can be
         * called directly. Passing the optional `len` parameter restricts the returned function to
         * the initial `len` parameters of the method.
         *
         * The returned function is curried and accepts `len + 1` parameters (or `method.length + 1`
         * when `len` is not specified), and the final parameter is the target object.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (String, Object, Number) -> (* -> *)
         * @param {string} name The name of the method to wrap.
         * @param {Object} obj The object to search for the `name` method.
         * @param [len] The desired arity of the wrapped method.
         * @return {Function} A new function or `undefined` if the specified method is not found.
         * @example
         *
         *      var charAt = R.invoker('charAt', String.prototype);
         *      charAt(6, 'abcdefghijklm'); //=> 'g'
         *
         *      var join = R.invoker('join', Array.prototype);
         *      var firstChar = charAt(0);
         *      join('', R.map(firstChar, ['light', 'ampliifed', 'stimulated', 'emission', 'radiation']));
         *      //=> 'laser'
         */
        invoker(name: string, obj: any, len?: number): Function;


        /**
         * Accepts a function `fn` and any number of transformer functions and returns a new
         * function. When the new function is invoked, it calls the function `fn` with parameters
         * consisting of the result of calling each supplied handler on successive arguments to the
         * new function. For example:
         *
         * ```javascript
         *   var useWithExample = R.useWith(someFn, transformerFn1, transformerFn2);
         *
         *   // This invocation:
         *   useWithExample('x', 'y');
         *   // Is functionally equivalent to:
         *   someFn(transformerFn1('x'), transformerFn2('y'))
         * ```
         *
         * If more arguments are passed to the returned function than transformer functions, those
         * arguments are passed directly to `fn` as additional parameters. If you expect additional
         * arguments that don't need to be transformed, although you can ignore them, it's best to
         * pass an identity function so that the new function reports the correct arity.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig ((* -> *), (* -> *)...) -> (* -> *)
         * @param {Function} fn The function to wrap.
         * @param {...Function} transformers A variable number of transformer functions
         * @return {Function} The wrapped function.
         * @example
         *
         *      var double = function(y) { return y * 2; };
         *      var square = function(x) { return x * x; };
         *      var add = function(a, b) { return a + b; };
         *      // Adds any number of arguments together
         *      var addAll = function() {
         *        return R.reduce(add, 0, arguments);
         *      };
         *
         *      // Basic example
         *      var addDoubleAndSquare = R.useWith(addAll, double, square);
         *
         *      //≅ addAll(double(10), square(5));
         *      addDoubleAndSquare(10, 5); //=> 45
         *
         *      // Example of passing more arguments than transformers
         *      //≅ addAll(double(10), square(5), 100);
         *      addDoubleAndSquare(10, 5, 100); //=> 145
         *
         *      // But if you're expecting additional arguments that don't need transformation, it's best
         *      // to pass transformer functions so the resulting function has the correct arity
         *      var addDoubleAndSquareWithExtraParams = R.useWith(addAll, double, square, R.identity);
         *      //≅ addAll(double(10), square(5), R.identity(100));
         *      addDoubleAndSquare(10, 5, 100); //=> 145
         */
        useWith(fn: Function, ...transformers: Function[]): Function;


        forEach: {

            /**
             * Iterate over an input `list`, calling a provided function `fn` for each element in the
             * list.
             *
             * `fn` receives one argument: *(value)*.
             *
             * Note: `R.forEach` does not skip deleted or unassigned indices (sparse arrays), unlike
             * the native `Array.prototype.forEach` method. For more details on this behavior, see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
             *
             * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns the original
             * array. In some libraries this function is named `each`.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a -> *) -> [a] -> [a]
             * @param {Function} fn The function to invoke. Receives one argument, `value`.
             * @param {Array} list The list to iterate over.
             * @return {Array} The original list.
             * @example
             *
             *      var printXPlusFive = function(x) { console.log(x + 5); };
             *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
             *      //-> 6
             *      //-> 7
             *      //-> 8
             */
            <T>(fn: (x: any) => any, list: T[]): T[];


            /**
             * Like `forEach`, but but passes additional parameters to the predicate function.
             *
             * `fn` receives three arguments: *(value, index, list)*.
             *
             * Note: `R.forEach.idx` does not skip deleted or unassigned indices (sparse arrays),
             * unlike the native `Array.prototype.forEach` method. For more details on this behavior,
             * see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
             *
             * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns the original
             * array. In some libraries this function is named `each`.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a, i, [a] -> ) -> [a] -> [a]
             * @param {Function} fn The function to invoke. Receives three arguments:
             *        (`value`, `index`, `list`).
             * @param {Array} list The list to iterate over.
             * @return {Array} The original list.
             * @alias forEach.idx
             * @example
             *
             *      // Note that having access to the original `list` allows for
             *      // mutation. While you *can* do this, it's very un-functional behavior:
             *      var plusFive = function(num, idx, list) { list[idx] = num + 5 };
             *      R.forEach.idx(plusFive, [1, 2, 3]); //=> [6, 7, 8]
             */
            idx: <T>(fn: (value: T, index: number, list: T[]) => any, list: T[]) => T[];
        }

        /**
         * Creates a shallow copy of an array.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig [a] -> [a]
         * @param {Array} list The list to clone.
         * @return {Array} A new copy of the original list.
         * @example
         *
         *      var numbers = [1, 2, 3];
         *      var numbersClone = R.clone(numbers);
         *      console.log(numbersClone); //=> [1, 2, 3]
         *      numbers === numbersClone; //=> false
         *
         *      // Note that this is a shallow clone--it does not clone complex values:
         *      var objects = [{}, {}, {}];
         *      var objectsClone = R.clone(objects);
         *      objects[0] === objectsClone[0]; //=> true
         */
        clone<T>(list: T[]): T[];


        /**
         * Creates a shallow copy of an object's own properties.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {*} -> {*}
         * @param {Object} obj The object to clone
         * @returns {Object} A new object
         * @example
         *
         *     R.cloneObj({a: 1, b: 2, c: [1, 2, 3]}); // {a: 1, b: 2, c: [1, 2, 3]}
         */
        cloneObj<T>(obj: T): T;


        /**
         * Reports whether an array is empty.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig [a] -> Boolean
         * @param {Array} list The array to consider.
         * @return {boolean} `true` if the `list` argument has a length of 0 or
         *         if `list` is a falsy value (e.g. undefined).
         * @example
         *
         *      R.isEmpty([1, 2, 3]); //=> false
         *      R.isEmpty([]); //=> true
         *      R.isEmpty(); //=> true
         *      R.isEmpty(null); //=> true
         */
        isEmpty<T>(list: T[]): boolean;


        /**
         * Returns a new list with the given element at the front, followed by the contents of the
         * list.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig a -> [a] -> [a]
         * @param {*} el The item to add to the head of the output list.
         * @param {Array} list The array to add to the tail of the output list.
         * @return {Array} A new array.
         * @example
         *
         *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
         */
        prepend<T>(el: T, list: T[]): T[];

        /**
         * @func
         * @memberOf R
         * @category Array
         * @see R.prepend
         */
        cons<T>(el: T, list: T[]): T[];


        /**
         * Returns the first element in a list.
         * In some libraries this function is named `first`.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig [a] -> a
         * @param {Array} [list=[]] The array to consider.
         * @return {*} The first element of the list, or `undefined` if the list is empty.
         * @example
         *
         *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
         */
        head<T>(list: T[]): T;


        /**
         * @func
         * @memberOf R
         * @category Array
         * @see R.head
         */
        car<T>(list: T[]): T;


        /**
         * Returns the last element from a list.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig [a] -> a
         * @param {Array} [list=[]] The array to consider.
         * @return {*} The last element of the list, or `undefined` if the list is empty.
         * @example
         *
         *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
         */
        last<T>(list: T[]): T;


        /**
         * Returns all but the first element of a list. If the list provided has the `tail` method,
         * it will instead return `list.tail()`.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig [a] -> [a]
         * @param {Array} [list=[]] The array to consider.
         * @return {Array} A new array containing all but the first element of the input list, or an
         *         empty list if the input list is a falsy value (e.g. `undefined`).
         * @example
         *
         *      R.tail(['fi', 'fo', 'fum']); //=> ['fo', 'fum']
         */
        tail<T>(list: T[]): T[];


        /**
         * @func
         * @memberOf R
         * @category Array
         * @see R.tail
         */
        cdr<T>(list: T[]): T[];


        /**
         * Returns a new list containing the contents of the given list, followed by the given
         * element.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig a -> [a] -> [a]
         * @param {*} el The element to add to the end of the new list.
         * @param {Array} list The list whose contents will be added to the beginning of the output
         *        list.
         * @return {Array} A new list containing the contents of the old list followed by `el`.
         * @example
         *
         *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
         *      R.append('tests', []); //=> ['tests']
         *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
         */
        append<T>(el: T, list: T[]): T[];


        /**
         * @func
         * @memberOf R
         * @category Array
         * @see R.append
         */
        push<T>(el: T, list: T[]): T[];


        /**
         * Returns a new list consisting of the elements of the first list followed by the elements
         * of the second.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig [a] -> [a] -> [a]
         * @param {Array} list1 The first list to merge.
         * @param {Array} list2 The second set to merge.
         * @return {Array} A new array consisting of the contents of `list1` followed by the
         *         contents of `list2`. If, instead of an {Array} for `list1`, you pass an
         *         object with a `concat` method on it, `concat` will call `list1.concat`
         *         and it the value of `list2`.
         * @example
         *
         *      R.concat([], []); //=> []
         *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
         *      R.concat('ABC', 'DEF'); // 'ABCDEF'
         */
        concat<T>(list1: T[], list2: T[]): T[];


        /**
         * A function that does nothing but return the parameter supplied to it. Good as a default
         * or placeholder function.
         *
         * @func
         * @memberOf R
         * @category Core
         * @sig a -> a
         * @param {*} x The value to return.
         * @return {*} The input value, `x`.
         * @example
         *
         *      R.identity(1); //=> 1
         *
         *      var obj = {};
         *      R.identity(obj) === obj; //=> true
         */
        identity(a: any): any;

        /**
         * @func
         * @memberOf R
         * @category Core
         * @see R.identity
         */
        I(a: any): any;

        /**
         * Calls an input function `n` times, returning an array containing the results of those
         * function calls.
         *
         * `fn` is passed one argument: The current value of `n`, which begins at `0` and is
         * gradually incremented to `n - 1`.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (i -> a) -> i -> [a]
         * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
         * @param {number} n A value between `0` and `n - 1`. Increments after each function call.
         * @return {Array} An array containing the return values of all calls to `fn`.
         * @example
         *
         *      R.times(function(n) { return n; }, 5); //=> [0, 1, 2, 3, 4]
         */
        times<T>(fn: (i: number) => T, n: number): T[];

        /**
         * Returns a fixed list of size `n` containing a specified identical value.
         *
         * @func
         * @memberOf R
         * @category Array
         * @sig a -> n -> [a]
         * @param {*} value The value to repeat.
         * @param {number} n The desired size of the output list.
         * @return {Array} A new array containing `n` `value`s.
         * @example
         *
         *      R.repeatN('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
         *
         *      var obj = {};
         *      var repeatedObjs = R.repeatN(obj, 5); //=> [{}, {}, {}, {}, {}]
         *      repeatedObjs[0] === repeatedObjs[1]; //=> true
         */
        repeatN<T>(value: T, n: number): T[];

        /**
         * Creates a new function that runs each of the functions supplied as parameters in turn,
         * passing the return value of each function invocation to the next function invocation,
         * beginning with whatever arguments were passed to the initial invocation.
         *
         * Note that `compose` is a right-associative function, which means the functions provided
         * will be invoked in order from right to left. In the example `var h = compose(f, g)`,
         * the function `h` is equivalent to `f( g(x) )`, where `x` represents the arguments
         * originally passed to `h`.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig ((y -> z), (x -> y), ..., (b -> c), (a... -> b)) -> (a... -> z)
         * @param {...Function} functions A variable number of functions.
         * @return {Function} A new function which represents the result of calling each of the
         *         input `functions`, passing the result of each function call to the next, from
         *         right to left.
         * @example
         *
         *      var triple = function(x) { return x * 3; };
         *      var double = function(x) { return x * 2; };
         *      var square = function(x) { return x * x; };
         *      var squareThenDoubleThenTriple = R.compose(triple, double, square);
         *
         *      squareThenDoubleThenTriple(5); //≅ triple(double(square(5))) => 150
         */
        compose(...fns: Function[]): Function;

        /**
         * Creates a new function that runs each of the functions supplied as parameters in turn,
         * passing the return value of each function invocation to the next function invocation,
         * beginning with whatever arguments were passed to the initial invocation.
         *
         * `pipe` is the mirror version of `compose`. `pipe` is left-associative, which means that
         * each of the functions provided is executed in order from left to right.
         *
         * In some libraries this function is named `sequence`.
         * @func
         * @memberOf R
         * @category Function
         * @sig ((a... -> b), (b -> c), ..., (x -> y), (y -> z)) -> (a... -> z)
         * @param {...Function} functions A variable number of functions.
         * @return {Function} A new function which represents the result of calling each of the
         *         input `functions`, passing the result of each function call to the next, from
         *         right to left.
         * @example
         *
         *      var triple = function(x) { return x * 3; };
         *      var double = function(x) { return x * 2; };
         *      var square = function(x) { return x * x; };
         *      var squareThenDoubleThenTriple = R.pipe(square, double, triple);
         *
         *      squareThenDoubleThenTriple(5); //≅ triple(double(square(5))) => 150
         */
        pipe(...fns: Function[]): Function;

        /**
         * Returns a new function much like the supplied one, except that the first two arguments'
         * order is reversed.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
         * @param {Function} fn The function to invoke with its first two parameters reversed.
         * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
         * @example
         *
         *      var mergeThree = function(a, b, c) {
         *        ([]).concat(a, b, c);
         *      };
         *      var numbers = [1, 2, 3];
         *
         *      mergeThree(numbers); //=> [1, 2, 3]
         *
         *      R.flip([1, 2, 3]); //=> [2, 1, 3]
         */
        flip(fn: (arg0: any, arg1: any, ...args: any[]) => any): any;

        /**
         * Accepts as its arguments a function and any number of values and returns a function that,
         * when invoked, calls the original function with all of the values prepended to the
         * original function's arguments list. In some libraries this function is named `applyLeft`.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (a -> b -> ... -> i -> j -> ... -> m -> n) -> a -> b-> ... -> i -> (j -> ... -> m -> n)
         * @param {Function} fn The function to invoke.
         * @param {...*} [args] Arguments to prepend to `fn` when the returned function is invoked.
         * @return {Function} A new function wrapping `fn`. When invoked, it will call `fn`
         *         with `args` prepended to `fn`'s arguments list.
         * @example
         *
         *      var multiply = function(a, b) { return a * b; };
         *      var double = R.lPartial(multiply, 2);
         *      double(2); //=> 4
         *
         *      var greet = function(salutation, title, firstName, lastName) {
         *        return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
         *      };
         *      var sayHello = R.lPartial(greet, 'Hello');
         *      var sayHelloToMs = R.lPartial(sayHello, 'Ms.');
         *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
         */
        lPartial(fn: Function, ...args: any[]): Function;

        /**
         * Accepts as its arguments a function and any number of values and returns a function that,
         * when invoked, calls the original function with all of the values appended to the original
         * function's arguments list.
         *
         * Note that `rPartial` is the opposite of `lPartial`: `rPartial` fills `fn`'s arguments
         * from the right to the left.  In some libraries this function is named `applyRight`.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (a -> b-> ... -> i -> j -> ... -> m -> n) -> j -> ... -> m -> n -> (a -> b-> ... -> i)
         * @param {Function} fn The function to invoke.
         * @param {...*} [args] Arguments to append to `fn` when the returned function is invoked.
         * @return {Function} A new function wrapping `fn`. When invoked, it will call `fn` with
         *         `args` appended to `fn`'s arguments list.
         * @example
         *
         *      var greet = function(salutation, title, firstName, lastName) {
         *        return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
         *      };
         *      var greetMsJaneJones = R.rPartial(greet, 'Ms.', 'Jane', 'Jones');
         *
         *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
         */
        rPartial(fn: Function, ...args: any[]): Function;

        /**
         * Creates a new function that, when invoked, caches the result of calling `fn` for a given
         * argument set and returns the result. Subsequent calls to the memoized `fn` with the same
         * argument set will not result in an additional call to `fn`; instead, the cached result
         * for that set of arguments will be returned.
         *
         * Note that this version of `memoize` effectively handles only string and number
         * parameters.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (a... -> b) -> (a... -> b)
         * @param {Function} fn The function to be wrapped by `memoize`.
         * @return {Function}  Returns a memoized version of `fn`.
         * @example
         *
         *      var numberOfCalls = 0;
         *      var tracedAdd = function(a, b) {
         *        numberOfCalls += 1;
         *        return a + b;
         *      };
         *      var memoTrackedAdd = R.memoize(trackedAdd);
         *
         *      memoAdd(1, 2); //=> 3 (numberOfCalls => 1)
         *      memoAdd(1, 2); //=> 3 (numberOfCalls => 1)
         *      memoAdd(2, 3); //=> 5 (numberOfCalls => 2)
         *
         *      // Note that argument order matters
         *      memoAdd(2, 1); //=> 3 (numberOfCalls => 3)
         */
        memoize(fn: Function): Function;

        /**
         * Accepts a function `fn` and returns a function that guards invocation of `fn` such that
         * `fn` can only ever be called once, no matter how many times the returned function is
         * invoked.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (a... -> b) -> (a... -> b)
         * @param {Function} fn The function to wrap in a call-only-once wrapper.
         * @return {Function} The wrapped function.
         * @example
         *
         *      var addOneOnce = R.once(function(x){ return x + 1; });
         *      addOneOnce(10); //=> 11
         *      addOneOnce(addOneOnce(50)); //=> 11
         */
        once(fn: Function): Function;

         /**
         * Wrap a function inside another to allow you to make adjustments to the parameters, or do
         * other processing either before the internal function is called or with its results.
         *    *
         * @func
         * @memberOf R
         * @category Function
         * ((* -> *) -> ((* -> *), a...) -> (*, a... -> *)
         * @param {Function} fn The function to wrap.
         * @param {Function} wrapper The wrapper function.
         * @return {Function} The wrapped function.
         * @example
         *
         *      var slashify = R.wrap(flip(add)('/'), function(f, x) {
         *        return R.match(/\/$/, x) ? x : f(x);
         *      });
         *
         *      slashify('a');  //=> 'a/'
         *      slashify('a/'); //=> 'a/'
         */
        wrap(fn: Function, wrapper: Function): Function;

        /**
         * Wraps a constructor function inside a curried function that can be called with the same
         * arguments and returns the same type. The arity of the function returned is specified
         * to allow using variadic constructor functions.
         *
         * NOTE: Does not work with some built-in objects such as Date.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig Number -> (* -> {*}) -> (* -> {*})
         * @param {number} n The arity of the constructor function.
         * @param {Function} Fn The constructor function to wrap.
         * @return {Function} A wrapped, curried constructor function.
         * @example
         *
         *      // Variadic constructor function
         *      var Widget = function() {
         *        this.children = Array.prototype.slice.call(arguments);
         *        // ...
         *      };
         *      Widget.prototype = {
         *        // ...
         *      };
         *      var allConfigs = {
         *        // ...
         *      };
         *      map(R.constructN(1, Widget), allConfigs); // a list of Widgets
         */
        constructN(n: number, fn: Function): Function;

        /**
         * Wraps a constructor function inside a curried function that can be called with the same
         * arguments and returns the same type.
         *
         * NOTE: Does not work with some built-in objects such as Date.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (* -> {*}) -> (* -> {*})
         * @param {Function} Fn The constructor function to wrap.
         * @return {Function} A wrapped, curried constructor function.
         * @example
         *
         *      // Constructor function
         *      var Widget = function(config) {
         *        // ...
         *      };
         *      Widget.prototype = {
         *        // ...
         *      };
         *      var allConfigs = {
         *        // ...
         *      };
         *      map(R.construct(Widget), allConfigs); // a list of Widgets
         */
        construct(fn: Function): Function;

        /**
         * Accepts three functions and returns a new function. When invoked, this new function will
         * invoke the first function, `after`, passing as its arguments the results of invoking the
         * second and third functions with whatever arguments are passed to the new function.
         *
         * For example, a function produced by `converge` is equivalent to:
         *
         * ```javascript
         *   var h = R.converge(e, f, g);
         *   h(1, 2); //≅ e( f(1, 2), g(1, 2) )
         * ```
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig ((a, b -> c) -> (((* -> a), (* -> b), ...) -> c)
         * @param {Function} after A function. `after` will be invoked with the return values of
         *        `fn1` and `fn2` as its arguments.
         * @param {Function} fn1 A function. It will be invoked with the arguments passed to the
         *        returned function. Afterward, its resulting value will be passed to `after` as
         *        its first argument.
         * @param {Function} fn2 A function. It will be invoked with the arguments passed to the
         *        returned function. Afterward, its resulting value will be passed to `after` as
         *        its second argument.
         * @return {Function} A new function.
         * @example
         *
         *      var add = function(a, b) { return a + b; };
         *      var multiply = function(a, b) { return a * b; };
         *      var subtract = function(a, b) { return a - b; };
         *
         *      //≅ multiply( add(1, 2), subtract(1, 2) );
         *      R.converge(multiply, add, subtract)(1, 2); //=> -3
         */
        converge(after: Function, ...fns: Function[]): Function;

        // List Functions
        // --------------
        //
        // These functions operate on logical lists, here plain arrays.  Almost all of these are curried, and the list
        // parameter comes last, so you can create a new function by supplying the preceding arguments, leaving the
        // list parameter off.  For instance:
        //
        //     // skip third parameter
        //     var checkAllPredicates = reduce(andFn, alwaysTrue);
        //     // ... given suitable definitions of odd, lt20, gt5
        //     var test = checkAllPredicates([odd, lt20, gt5]);
        //     // test(7) => true, test(9) => true, test(10) => false,
        //     // test(3) => false, test(21) => false,

        // --------

        reduce: {
            /**
             * Returns a single item by iterating through the list, successively calling the iterator
             * function and passing it an accumulator value and the current value from the array, and
             * then passing the result to the next call.
             *
             * The iterator function receives two values: *(acc, value)*
             *
             * Note: `R.reduce` does not skip deleted or unassigned indices (sparse arrays), unlike
             * the native `Array.prototype.reduce` method. For more details on this behavior, see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a,b -> a) -> a -> [b] -> a
             * @param {Function} fn The iterator function. Receives two values, the accumulator and the
             *        current element from the array.
             * @param {*} acc The accumulator value.
             * @param {Array} list The list to iterate over.
             * @return {*} The final, accumulated value.
             * @example
             *
             *      var numbers = [1, 2, 3];
             *      var add = function(a, b) {
             *        return a + b;
             *      };
             *
             *      R.reduce(add, 10, numbers); //=> 16
             */
            <T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: T[]): TResult;


            /**
             * Like `reduce`, but passes additional parameters to the predicate function.
             *
             * The iterator function receives four values: *(acc, value, index, list)*
             *
             * Note: `R.reduce.idx` does not skip deleted or unassigned indices (sparse arrays),
             * unlike the native `Array.prototype.reduce` method. For more details on this behavior,
             * see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a,b,i,[b] -> a) -> a -> [b] -> a
             * @param {Function} fn The iterator function. Receives four values: the accumulator, the
             *        current element from `list`, that element's index, and the entire `list` itself.
             * @param {*} acc The accumulator value.
             * @param {Array} list The list to iterate over.
             * @return {*} The final, accumulated value.
             * @alias reduce.idx
             * @example
             *
             *      var letters = ['a', 'b', 'c'];
             *      var objectify = function(accObject, elem, idx, list) {
             *        accObject[elem] = idx;
             *        return accObject;
             *      };
             *
             *      R.reduce.idx(objectify, {}, letters); //=> { 'a': 0, 'b': 1, 'c': 2 }
             */
            idx: <T, TResult>(fn: (acc: TResult, elem: T, idx: Number, list: T[]) => TResult, acc: TResult, list: T[]) => TResult;
        };


        foldl: {
            /**
             * @func
             * @memberOf R
             * @category List
             * @see R.reduce
             */
            <T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: T[]): TResult;


            /**
             * @func
             * @memberOf R
             * @category List
             * @alias foldl.idx
             * @see R.reduce.idx
             */
            idx: <T, TResult>(fn: (acc: TResult, elem: T, idx: Number, list: T[]) => TResult, acc: TResult, list: T[]) => TResult;
        };


        reduceRight: {
            /**
             * Returns a single item by iterating through the list, successively calling the iterator
             * function and passing it an accumulator value and the current value from the array, and
             * then passing the result to the next call.
             *
             * Similar to `reduce`, except moves through the input list from the right to the left.
             *
             * The iterator function receives two values: *(acc, value)*
             *
             * Note: `R.reduce` does not skip deleted or unassigned indices (sparse arrays), unlike
             * the native `Array.prototype.reduce` method. For more details on this behavior, see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a,b -> a) -> a -> [b] -> a
             * @param {Function} fn The iterator function. Receives two values, the accumulator and the
             *        current element from the array.
             * @param {*} acc The accumulator value.
             * @param {Array} list The list to iterate over.
             * @return {*} The final, accumulated value.
             * @example
             *
             *      var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
             *      var flattenPairs = function(acc, pair) {
             *        return acc.concat(pair);
             *      };
             *
             *      R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
             */
            <T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: T[]): TResult;

            /**
             * Like `reduceRight`, but passes additional parameters to the predicate function. Moves through
             * the input list from the right to the left.
             *
             * The iterator function receives four values: *(acc, value, index, list)*.
             *
             * Note: `R.reduceRight.idx` does not skip deleted or unassigned indices (sparse arrays),
             * unlike the native `Array.prototype.reduce` method. For more details on this behavior,
             * see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a,b,i,[b] -> a -> [b] -> a
             * @param {Function} fn The iterator function. Receives four values: the accumulator, the
             *        current element from `list`, that element's index, and the entire `list` itself.
             * @param {*} acc The accumulator value.
             * @param {Array} list The list to iterate over.
             * @return {*} The final, accumulated value.
             * @alias reduceRight.idx
             * @example
             *
             *      var letters = ['a', 'b', 'c'];
             *      var objectify = function(accObject, elem, idx, list) {
             *        accObject[elem] = idx;
             *        return accObject;
             *      };
             *
             *      R.reduceRight.idx(objectify, {}, letters); //=> { 'c': 2, 'b': 1, 'a': 0 }
             */
            idx: <T, TResult>(fn: (acc: TResult, elem: T, idx: Number, list: T[]) => TResult, acc: TResult, list: T[]) => TResult;
        };


        foldr: {
            /**
             * @func
             * @memberOf R
             * @category List
             * @see R.reduceRight
             */
            <T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: T[]): TResult;


            /**
             * @func
             * @memberOf R
             * @category List
             * @alias foldr.idx
             * @see R.reduceRight.idx
             */
            idx: <T, TResult>(fn: (acc: TResult, elem: T, idx: Number, list: T[]) => TResult, acc: TResult, list: T[]) => TResult;
        }

        /**
         * Builds a list from a seed value. Accepts an iterator function, which returns either false
         * to stop iteration or an array of length 2 containing the value to add to the resulting
         * list and the seed to be used in the next call to the iterator function.
         *
         * The iterator function receives one argument: *(seed)*.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> [b]) -> * -> [b]
         * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
         *        either false to quit iteration or an array of length two to proceed. The element
         *        at index 0 of this array will be added to the resulting array, and the element
         *        at index 1 will be passed to the next call to `fn`.
         * @param {*} seed The seed value.
         * @return {Array} The final list.
         * @example
         *
         *      var f = function(n) { return n > 50 ? false : [-n, n + 10] };
         *      R.unfoldr(f, 10); //=> [-10, -20, -30, -40, -50]
         */
        unfoldr<T, TResult>(fn: (seed: TResult) => boolean, seed: TResult): TResult[];
    }


    interface RamdaStatic {
        map: {
            /**
             * Returns a new list, constructed by applying the supplied function to every element of the
             * supplied list.
             *
             * Note: `R.map` does not skip deleted or unassigned indices (sparse arrays), unlike the
             * native `Array.prototype.map` method. For more details on this behavior, see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Description
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a -> b) -> [a] -> [b]
             * @param {Function} fn The function to be called on every element of the input `list`.
             * @param {Array} list The list to be iterated over.
             * @return {Array} The new list.
             * @example
             *
             *      var double = function(x) {
             *        return x * 2;
             *      };
             *
             *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
             */
            (fn: (x: any) => any, list: any[]): any[];

            /**
             * Like `map`, but but passes additional parameters to the mapping function.
             * `fn` receives three arguments: *(value, index, list)*.
             *
             * Note: `R.map.idx` does not skip deleted or unassigned indices (sparse arrays), unlike
             * the native `Array.prototype.map` method. For more details on this behavior, see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Description
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a,i,[b] -> b) -> [a] -> [b]
             * @param {Function} fn The function to be called on every element of the input `list`.
             * @param {Array} list The list to be iterated over.
             * @return {Array} The new list.
             * @alias map.idx
             * @example
             *
             *      var squareEnds = function(elt, idx, list) {
             *        if (idx === 0 || idx === list.length - 1) {
             *          return elt * elt;
             *        }
             *        return elt;
             *      };
             *
             *      R.map.idx(squareEnds, [8, 5, 3, 0, 9]); //=> [64, 5, 3, 0, 81]
             */
            idx: <T, TResult>(fn: R.ListIterator<T, TResult>, list: R.List<T>) => R.List<TResult>;
        }


        mapObj: {
            /**
             * Map, but for objects. Creates an object with the same keys as `obj` and values
             * generated by running each property of `obj` through `fn`. `fn` is passed one argument:
             * *(value)*.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (v -> v) -> {k: v} -> {k: v}
             * @param {Function} fn A function called for each property in `obj`. Its return value will
             * become a new property on the return object.
             * @param {Object} obj The object to iterate over.
             * @return {Object} A new object with the same keys as `obj` and values that are the result
             * of running each property through `fn`.
             * @example
             *
             *      var values = { x: 1, y: 2, z: 3 };
             *      var double = function(num) {
             *        return num * 2;
             *      };
             *
             *      R.mapObj(double, values); //=> { x: 2, y: 4, z: 6 }
             */
            <T, TResult>(fn: (value: T) => TResult, obj: any): {[index: string]: TResult};

            /**
             * Like `mapObj`, but but passes additional arguments to the predicate function. The
             * predicate function is passed three arguments: *(value, key, obj)*.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (v, k, {k: v} -> v) -> {k: v} -> {k: v}
             * @param {Function} fn A function called for each property in `obj`. Its return value will
             *        become a new property on the return object.
             * @param {Object} obj The object to iterate over.
             * @return {Object} A new object with the same keys as `obj` and values that are the result
             *         of running each property through `fn`.
             * @alias mapObj.idx
             * @example
             *
             *      var values = { x: 1, y: 2, z: 3 };
             *      var prependKeyAndDouble = function(num, key, obj) {
             *        return key + (num * 2);
             *      };
             *
             *      R.mapObj.idx(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
             */
            idx: <T, TResult>(fn: (value: T, key: string, obj?: any) => TResult, obj: any) => {[index:string]: TResult};
        }

        /**
         * ap applies a list of functions to a list of values.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig [f] -> [a] -> [f a]
         * @param {Array} fns An array of functions
         * @param {Array} vs An array of values
         * @return the value of applying each the function `fns` to each value in `vs`
         * @example
         *
         *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
         */
         ap(fns: Function[], vs: any[]): any[];
         ap(fns: Function[]): Function;


        /**
         *
         * `of` wraps any object in an Array. This implementation is compatible with the
         * Fantasy-land Applicative spec, and will work with types that implement that spec.
         * Note this `of` is different from the ES6 `of`; See
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig a -> [a]
         * @param x any value
         * @return [x]
         * @example
         *
         *      R.of(1); //=> [1]
         *      R.of([2]); //=> [[2]]
         *      R.of({}); //=> [{}]
         */
        of(x: any): any[];


        /**
         * `empty` wraps any object in an array. This implementation is compatible with the
         * Fantasy-land Monoid spec, and will work with types that implement that spec.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig * -> []
         * @return {Array} an empty array
         * @example
         *
         *      R.empty([1,2,3,4,5]); //=> []
         */
        empty(x: any): any[];


        /**
         * `chain` maps a function over a list and concatenates the results.
         * This implementation is compatible with the
         * Fantasy-land Chain spec, and will work with types that implement that spec.
         * `chain` is also known as `flatMap` in some libraries
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> [b]) -> [a] -> [b]
         * @param {Function}
         * @param {Array}
         * @return {Array}
         * @example
         *
         *      var duplicate = function(n) {
         *        return [n, n];
         *      };
         *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
         *
         */
        chain(fn: (n: any) => any[], list: any[]): any[];


        lift(fn: Function, ...monads: any[]): any;

        /**
         * Returns the number of elements in the array by returning `arr.length`.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig [a] -> Number
         * @param {Array} arr The array to inspect.
         * @return {number} The size of the array.
         * @example
         *
         *      R.size([]); //=> 0
         *      R.size([1, 2, 3]); //=> 3
         */
        size(list: any[]): number;

        /**
         * @func
         * @memberOf R
         * @category List
         * @see R.size
         */
        length(list: any[]): number;

        filter: {
            /**
             * Returns a new list containing only those items that match a given predicate function.
             * The predicate function is passed one argument: *(value)*.
             *
             * Note that `R.filter` does not skip deleted or unassigned indices, unlike the native
             * `Array.prototype.filter` method. For more details on this behavior, see:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Description
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a -> Boolean) -> [a] -> [a]
             * @param {Function} fn The function called per iteration.
             * @param {Array} list The collection to iterate over.
             * @return {Array} The new filtered array.
             * @example
             *
             *      var isEven = function(n) {
             *        return n % 2 === 0;
             *      };
             *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
             */
            (fn: (n: any) => any, list: any[]): any[];

            /**
             * Like `filter`, but passes additional parameters to the predicate function. The predicate
             * function is passed three arguments: *(value, index, list)*.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a, i, [a] -> Boolean) -> [a] -> [a]
             * @param {Function} fn The function called per iteration.
             * @param {Array} list The collection to iterate over.
             * @return {Array} The new filtered array.
             * @alias filter.idx
             * @example
             *
             *      var lastTwo = function(val, idx, list) {
             *        return list.length - idx <= 2;
             *      };
             *      R.filter.idx(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]
             */
            idx: (fn: (value: any, index: number, list: any[]) => any, list: any[]) => any[];
        };


        reject: {
            /**
             * Similar to `filter`, except that it keeps only values for which the given predicate
             * function returns falsy. The predicate function is passed one argument: *(value)*.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a -> Boolean) -> [a] -> [a]
             * @param {Function} fn The function called per iteration.
             * @param {Array} list The collection to iterate over.
             * @return {Array} The new filtered array.
             * @example
             *
             *      var isOdd = function(n) {
             *        return n % 2 === 1;
             *      };
             *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
             */
             (fn: (n: any) => any, list: any[]): any[];

            /**
             * Like `reject`, but passes additional parameters to the predicate function. The predicate
             * function is passed three arguments: *(value, index, list)*.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig (a, i, [a] -> Boolean) -> [a] -> [a]
             * @param {Function} fn The function called per iteration.
             * @param {Array} list The collection to iterate over.
             * @return {Array} The new filtered array.
             * @alias reject.idx
             * @example
             *
             *      var lastTwo = function(val, idx, list) {
             *        return list.length - idx <= 2;
             *      };
             *
             *      R.reject.idx(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]
             */
             idx: (fn: (value: any, index: number, list: any[]) => any, list: any[]) => any;
        }

        /**
         * Returns a new list containing the first `n` elements of a given list, passing each value
         * to the supplied predicate function, and terminating when the predicate function returns
         * `false`. Excludes the element that caused the predicate function to fail. The predicate
         * function is passed one argument: *(value)*.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> [a]
         * @param {Function} fn The function called per iteration.
         * @param {Array} list The collection to iterate over.
         * @return {Array} A new array.
         * @example
         *
         *      var isNotFour = function(x) {
         *        return !(x === 4);
         *      };
         *
         *      R.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
         */
        takeWhile(fn: (x: any) => any, list: any[]): any[];


        /**
         * Returns a new list containing the first `n` elements of the given list.  If
         * `n > * list.length`, returns a list of `list.length` elements.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig Number -> [a] -> [a]
         * @param {number} n The number of elements to return.
         * @param {Array} list The array to query.
         * @return {Array} A new array containing the first elements of `list`.
         */
        take(n: number, list: any[]): any[];

        /**
         * Returns a new list containing the last `n` elements of a given list, passing each value
         * to the supplied predicate function, beginning when the predicate function returns
         * `true`. Excludes the element that caused the predicate function to fail. The predicate
         * function is passed one argument: *(value)*.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> [a]
         * @param {Function} fn The function called per iteration.
         * @param {Array} list The collection to iterate over.
         * @return {Array} A new array.
         * @example
         *
         *      var isTwo = function(x) {
         *        return x === 2;
         *      };
         *
         *      R.skipUntil(isTwo, [1, 2, 3, 4]); //=> [2, 3, 4]
         */
        skipUntil(fn: (x: any) => any, list: any[]): any[];


        /**
         * Returns a new list containing all but the first `n` elements of the given `list`.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig Number -> [a] -> [a]
         * @param {number} n The number of elements of `list` to skip.
         * @param {Array} list The array to consider.
         * @return {Array} The last `n` elements of `list`.
         * @example
         *
         *     R.skip(3, [1,2,3,4,5,6,7]); //=> [4,5,6,7]
         */
        skip(
            n: number,
            list: any[]
        ): any[];


        /**
         * Returns the first element of the list which matches the predicate, or `undefined` if no
         * element matches.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> a | undefined
         * @param {Function} fn The predicate function used to determine if the element is the
         *        desired one.
         * @param {Array} list The array to consider.
         * @return {Object} The element found, or `undefined`.
         * @example
         *
         *      var xs = [{a: 1}, {a: 2}, {a: 3}];
         *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
         *      R.find(R.propEq('a', 4))(xs); //=> undefined
         */
        find(fn: (a: any) => boolean, list: any[]): any;
        find(fn: (a: any) => boolean): Function;


        /**
         * Returns the index of the first element of the list which matches the predicate, or `-1`
         * if no element matches.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> Number
         * @param {Function} fn The predicate function used to determine if the element is the
         * desired one.
         * @param {Array} list The array to consider.
         * @return {number} The index of the element found, or `-1`.
         * @example
         *
         *      var xs = [{a: 1}, {a: 2}, {a: 3}];
         *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
         *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
         */
        findIndex(fn: (...args: any[]) => boolean, list: any[]): number;

        /**
         * Returns the last element of the list which matches the predicate, or `undefined` if no
         * element matches.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> a | undefined
         * @param {Function} fn The predicate function used to determine if the element is the
         * desired one.
         * @param {Array} list The array to consider.
         * @return {Object} The element found, or `undefined`.
         * @example
         *
         *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
         *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
         *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
         */
        findLast(fn: (...args: any[]) => boolean, list: any[]): any;


        /**
         * Returns the index of the last element of the list which matches the predicate, or
         * `-1` if no element matches.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> Number
         * @param {Function} fn The predicate function used to determine if the element is the
         * desired one.
         * @param {Array} list The array to consider.
         * @return {number} The index of the element found, or `-1`.
         * @example
         *
         *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
         *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
         *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
         */
        findLastIndex(fn: (...args: any[]) => boolean, list: any[]): number;

        /**
         * Returns `true` if all elements of the list match the predicate, `false` if there are any
         * that don't.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> Boolean
         * @param {Function} fn The predicate function.
         * @param {Array} list The array to consider.
         * @return {boolean} `true` if the predicate is satisfied by every element, `false`
         *         otherwise
         * @example
         *
         *      var lessThan2 = R.flip(R.lt)(2);
         *      var lessThan3 = R.flip(R.lt)(3);
         *      var xs = R.range(1, 3);
         *      xs; //=> [1, 2]
         *      R.every(lessThan2)(xs); //=> false
         *      R.every(lessThan3)(xs); //=> true
         */
        every(
            fn: (x: any) => boolean,
            list: any[]
        ): boolean;


        /**
         * Returns `true` if at least one of elements of the list match the predicate, `false`
         * otherwise.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> Boolean
         * @param {Function} fn The predicate function.
         * @param {Array} list The array to consider.
         * @return {boolean} `true` if the predicate is satisfied by at least one element, `false`
         *         otherwise
         * @example
         *
         *      var lessThan0 = R.flip(R.lt)(0);
         *      var lessThan2 = R.flip(R.lt)(2);
         *      var xs = R.range(1, 3);
         *      xs; //=> [1, 2]
         *      R.some(lessThan0)(xs); //=> false
         *      R.some(lessThan2)(xs); //=> true
         */
        some(
            fn: (x: any) => boolean,
            list: any[]
        ): boolean;


        indexOf: {
            /**
             * Returns the position of the first occurrence of an item in an array
             * (by strict equality),
             * or -1 if the item is not included in the array.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig a -> [a] -> Number
             * @param target The item to find.
             * @param {Array} list The array to search in.
             * @return {Number} the index of the target, or -1 if the target is not found.
             *
             * @example
             *
             *      R.indexOf(3, [1,2,3,4]); //=> 2
             *      R.indexOf(10, [1,2,3,4]); //=> -1
             */
            (target: number, list: any[]): number;

            /**
             * Returns the position of the first occurrence of an item (by strict equality) in
             * an array, or -1 if the item is not included in the array. However,
             * `indexOf.from` will only search the tail of the array, starting from the
             * `fromIdx` parameter.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig a -> Number -> [a] -> Number
             * @param target The item to find.
             * @param {Number} fromIdx the index to start searching from
             * @param {Array} list The array to search in.
             * @return {Number} the index of the target, or -1 if the target is not found.
             *
             * @example
             *
             *      R.indexOf.from(3, 2, [-1,0,1,2,3,4]); //=> 4
             *      R.indexOf.from(10, 2, [1,2,3,4]); //=> -1
             */
            from: (target: any, fromIdx: number, list: any[]) => number;
        }


        lastIndexOf: {
            /**
             * Returns the position of the last occurrence of an item (by strict equality) in
             * an array, or -1 if the item is not included in the array.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig a -> [a] -> Number
             * @param {*} target The item to find.
             * @param {Array} list The array to search in.
             * @return {Number} the index of the target, or -1 if the target is not found.
             *
             * @example
             *
             *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
             *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
             */
            (target: any, list: any[]): number;


            /**
             * Returns the position of the last occurrence of an item (by strict equality) in
             * an array, or -1 if the item is not included in the array. However,
             * `lastIndexOf.from` will only search the tail of the array, starting from the
             * `fromIdx` parameter.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig a -> Number -> [a] -> Number
             * @param {*} target The item to find.
             * @param {Array} list The array to search in.
             * @param {Number} fromIdx the index to start searching from
             * @return {Number} the index of the target, or -1 if the target is not found.
             *
             * @example
             *
             *      R.lastIndexOf.from(3, 2, [-1,3,3,0,1,2,3,4]); //=> 2
             *      R.lastIndexOf.from(10, 2, [1,2,3,4]); //=> -1
             */
            from: (target: any, fromIdx: number, list: any[]) => number;
        }

        /**
         * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
         * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig a -> [a] -> Boolean
         * @param {Object} a The item to compare against.
         * @param {Array} list The array to consider.
         * @return {boolean} `true` if the item is in the list, `false` otherwise.
         * @example
         *
         *      R.contains(3)([1, 2, 3]); //=> true
         *      R.contains(4)([1, 2, 3]); //=> false
         *      R.contains({})([{}, {}]); //=> false
         *      var obj = {};
         *      R.contains(obj)([{}, obj, {}]); //=> true
         */
        contains(a: any, list: any[]): boolean;


        /**
         * Returns `true` if the `x` is found in the `list`, using `pred` as an
         * equality predicate for `x`.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (x, a -> Boolean) -> x -> [a] -> Boolean
         * @param {Function} pred :: x -> x -> Bool
         * @param x the item to find
         * @param {Array} list the list to iterate over
         * @return {Boolean} `true` if `x` is in `list`, else `false`
         * @example
         *
         *     var xs = [{x: 12}, {x: 11}, {x: 10}];
         *     R.containsWith(function(a, b) { return a.x === b.x; }, {x: 10}, xs); //=> true
         *     R.containsWith(function(a, b) { return a.x === b.x; }, {x: 1}, xs); //=> false
         */
        containsWith(pred: (a: any, b: any) => boolean, x: any, list: any[]): boolean;


        /**
         * Returns a new list containing only one copy of each element in the original list.
         * Equality is strict here, meaning reference equality for objects and non-coercing equality
         * for primitives.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig [a] -> [a]
         * @param {Array} list The array to consider.
         * @return {Array} The list of unique items.
         * @example
         *
         *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
         *      R.uniq([{}, {}]);     //=> [{}, {}]
         *      R.uniq([1, '1']);     //=> [1, '1']
         */
        uniq(list: any[]): any[];


        /**
         * Returns `true` if all elements are unique, otherwise `false`.
         * Uniqueness is determined using strict equality (`===`).
         *
         * @func
         * @memberOf R
         * @category List
         * @sig [a] -> Boolean
         * @param {Array} list The array to consider.
         * @return {boolean} `true` if all elements are unique, else `false`.
         * @example
         *
         *      R.isSet(['1', 1]); //=> true
         *      R.isSet([1, 1]);   //=> false
         *      R.isSet([{}, {}]); //=> true
         */
        isSet(list: any[]): boolean;


        /**
         * Returns a new list containing only one copy of each element in the original list, based
         * upon the value returned by applying the supplied predicate to two list elements. Prefers
         * the first item if two items compare equal based on the predicate.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (x, a -> Boolean) -> [a] -> [a]
         * @param {Function} pred
         * @param {Array} list The array to consider.
         * @return {Array} The list of unique items.
         * @example
         *
         *      var strEq = function(a, b) { return ('' + a) === ('' + b) };
         *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
         *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
         *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
         *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
         */
        uniqWith(pred: (x: any, a: any) => boolean, list: any[]): any[];


        /**
         * Returns a new list by plucking the same named property off all objects in the list supplied.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig String -> {*} -> [*]
         * @param {string|number} key The key name to pluck off of each object.
         * @param {Array} list The array to consider.
         * @return {Array} The list of values for the given key.
         * @example
         *
         *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
         *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
         */
        pluck(p: string, list: any[]): any[];
        pluck(p: number, list: any[]): any[];



        /**
         * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
         * them in a new array, depth-first.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig [a] -> [b]
         * @param {Array} list The array to consider.
         * @return {Array} The flattened list.
         * @example
         *
         *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
         *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
         */
        flatten(x: any[]): any[];


        /**
         * Returns a new list by pulling every item at the first level of nesting out, and putting
         * them in a new array.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig [a] -> [b]
         * @param {Array} list The array to consider.
         * @return {Array} The flattened list.
         * @example
         *
         *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
         *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
         */
        unnest(x: any[]): any[];


        /**
         * Creates a new list out of the two supplied by applying the function to each
         * equally-positioned pair in the lists.
         *
         * @function
         * @memberOf R
         * @category List
         * @sig (a,b -> c) -> a -> b -> [c]
         * @param {Function} fn The function used to combine the two elements into one value.
         * @param {Array} list1 The first array to consider.
         * @param {Array} list2 The second array to consider.
         * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
         * using `fn`.
         * @example
         *
         *      var f = function(x, y) {
         *        // ...
         *      };
         *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
         *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
         */
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[], list2: U[]): TResult[];


        /**
         * Creates a new list out of the two supplied by pairing up equally-positioned items from
         * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig a -> b -> [[a,b]]
         * @param {Array} list1 The first array to consider.
         * @param {Array} list2 The second array to consider.
         * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
         * @example
         *
         *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
         */
        zip(list1: any[], list2: any[]): any[];


        /**
         * Creates a new object out of a list of keys and a list of values.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig k -> v -> {k: v}
         * @param {Array} keys The array that will be properties on the output object.
         * @param {Array} values The list of values on the output object.
         * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
         * @example
         *
         *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
         */
        zipObj<TResult extends {}>(keys: any[], values: any[]): TResult;


        /**
         * Creates a new object out of a list key-value pairs.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig [[k,v]] -> {k: v}
         * @param {Array} An array of two-element arrays that will be the keys and values of the ouput object.
         * @return {Object} The object made by pairing up `keys` and `values`.
         * @example
         *
         *      R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}
         */
        fromPairs(pairs: any[]): any;


        /**
         * Creates a new list out of the two supplied by applying the function
         * to each possible pair in the lists.
         *
         * @see R.xprod
         * @func
         * @memberOf R
         * @category List
         * @sig (a,b -> c) -> a -> b -> [c]
         * @param {Function} fn The function to join pairs with.
         * @param {Array} as The first list.
         * @param {Array} bs The second list.
         * @return {Array} The list made by combining each possible pair from
         *         `as` and `bs` using `fn`.
         * @example
         *
         *      var f = function(x, y) {
         *        // ...
         *      };
         *      R.xprodWith(f, [1, 2], ['a', 'b']);
         *      // [f(1, 'a'), f(1, 'b'), f(2, 'a'), f(2, 'b')];
         */
        // R.xprodWith = curry3(function _xprodWith(fn, a, b) {
        //     if (isEmpty(a) || isEmpty(b)) {
        //         return [];
        //     }
        //     // Better to push them all or to do `new Array(ilen * jlen)` and
        //     // calculate indices?
        //     var i = -1, ilen = a.length, j, jlen = b.length, result = [];
        //     while (++i < ilen) {
        //         j = -1;
        //         while (++j < jlen) {
        //             result.push(fn(a[i], b[j]));
        //         }
        //     }
        //     return result;
        // });


        /**
         * Creates a new list out of the two supplied by creating each possible
         * pair from the lists.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig a -> b -> [[a,b]]
         * @param {Array} as The first list.
         * @param {Array} bs The second list.
         * @return {Array} The list made by combining each possible pair from
         * `as` and `bs` into pairs (`[a, b]`).
         * @example
         *
         *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
         */
        // R.xprod = curry2(function _xprod(a, b) { // = xprodWith(prepend); (takes about 3 times as long...)
        //     if (isEmpty(a) || isEmpty(b)) {
        //         return [];
        //     }
        //     var i = -1;
        //     var ilen = a.length;
        //     var j;
        //     var jlen = b.length;
        //     // Better to push them all or to do `new Array(ilen * jlen)` and calculate indices?
        //     var result = [];
        //     while (++i < ilen) {
        //         j = -1;
        //         while (++j < jlen) {
        //             result.push([a[i], b[j]]);
        //         }
        //     }
        //     return result;
        // });


        /**
         * Returns a new list with the same elements as the original list, just
         * in the reverse order.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig [a] -> [a]
         * @param {Array} list The list to reverse.
         * @return {Array} A copy of the list in reverse order.
         * @example
         *
         *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
         *      R.reverse([1, 2]);     //=> [2, 1]
         *      R.reverse([1]);        //=> [1]
         *      R.reverse([]);         //=> []
         */
        // R.reverse = function _reverse(list) {
        //     return clone(list || []).reverse();
        // };


        /**
         * Returns a list of numbers from `from` (inclusive) to `to`
         * (exclusive). In mathematical terms, `range(a, b)` is equivalent to
         * the half-open interval `[a, b)`.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig Number -> Number -> [Number]
         * @param {number} from The first number in the list.
         * @param {number} to One more than the last number in the list.
         * @return {Array} The list of numbers in tthe set `[a, b)`.
         * @example
         *
         *      R.range(1, 5);    //=> [1, 2, 3, 4]
         *      R.range(50, 53);  //=> [50, 51, 52]
         */
        // R.range = curry2(function _range(from, to) {
        //     if (from >= to) {
        //         return [];
        //     }
        //     var idx = 0, result = new Array(Math.floor(to) - Math.ceil(from));
        //     for (; from < to; idx++, from++) {
        //         result[idx] = from;
        //     }
        //     return result;
        // });


        /**
         * Returns a string made by inserting the `separator` between each
         * element and concatenating all the elements into a single string.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig String -> [a] -> String
         * @param {string|number} separator The string used to separate the elements.
         * @param {Array} xs The elements to join into a string.
         * @return {string} The string made by concatenating `xs` with `separator`.
         * @example
         *
         *      var spacer = R.join(' ');
         *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
         *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
         */
        join(x: string, xs: any[]): string;
        join(x: number, xs: any[]): string;


        slice: {
            /**
             * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig Number -> Number -> [a] -> [a]
             * @param {number} a The starting index.
             * @param {number} b One more than the ending index.
             * @param {Array} xs The list to take elements from.
             * @return {Array} The items from `a` to `b - 1` from `xs`.
             * @example
             *
             *      var xs = R.range(0, 10);
             *      R.slice(2, 5)(xs); //=> [2, 3, 4]
             */
            (a: number, b: number, list: any[]): any[];


            /**
             * Returns the elements from `xs` starting at `a` going to the end of `xs`.
             *
             * @func
             * @memberOf R
             * @category List
             * @sig Number -> [a] -> [a]
             * @param {number} a The starting index.
             * @param {Array} xs The list to take elements from.
             * @return {Array} The items from `a` to the end of `xs`.
             * @example
             *
             *      var xs = R.range(0, 10);
             *      R.slice.from(2)(xs); //=> [2, 3, 4, 5, 6, 7, 8, 9]
             *
             *      var ys = R.range(4, 8);
             *      var tail = R.slice.from(1);
             *      tail(ys); //=> [5, 6, 7]
             */
            from: (a: number, xs: any[]) => any[];
        }

        /**
         * Removes the sub-list of `list` starting at index `start` and containing
         * `count` elements.  _Note that this is not destructive_: it returns a
         * copy of the list with the changes.
         * <small>No lists have been harmed in the application of this function.</small>
         *
         * @func
         * @memberOf R
         * @category List
         * @sig Number -> Number -> [a] -> [a]
         * @param {Number} start The position to start removing elements
         * @param {Number} count The number of elements to remove
         * @param {Array} list The list to remove from
         * @return {Array} a new Array with `count` elements from `start` removed
         * @example
         *
         *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
         */
        remove<T>(start: number, count: number, list: T[]): T[];


        insert: {
            /**
             * Inserts the supplied element into the list, at index `index`.  _Note
             * that this is not destructive_: it returns a copy of the list with the changes.
             * <small>No lists have been harmed in the application of this function.</small>
             *
             * @func
             * @memberOf R
             * @category List
             * @sig Number -> a -> [a] -> [a]
             * @param {Number} index The position to insert the element
             * @param elt The element to insert into the Array
             * @param {Array} list The list to insert into
             * @return {Array} a new Array with `elt` inserted at `index`
             * @example
             *
             *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
             */
            (index: number, elt:any, list: any[]): any[];

            /**
             * Inserts the sub-list into the list, at index `index`.  _Note  that this
             * is not destructive_: it returns a copy of the list with the changes.
             * <small>No lists have been harmed in the application of this function.</small>
             *
             * @func
             * @memberOf R
             * @category List
             * @sig Number -> [a] -> [a] -> [a]
             * @param {Number} index The position to insert the sublist
             * @param {Array} elts The sub-list to insert into the Array
             * @param {Array} list The list to insert the sub-list into
             * @return {Array} a new Array with `elts` inserted starting at `index`
             * @example
             *
             *      R.insert.all(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
             */
            all: (index: number, elts: any[], list: any[]) => any[];
        }


        /**
         * Makes a comparator function out of a function that reports whether the first element is less than the second.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig (a, b -> Boolean) -> (a, b -> Number)
         * @param {Function} pred A predicate function of arity two.
         * @return {Function} a Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
         * @example
         *
         *      var cmp = R.comparator(function(a, b) {
         *        return a.age < b.age;
         *      });
         *      var people = [
         *        // ...
         *      ];
         *      sort(cmp, people);
         */
        comparator(pred: (a: any, b: any) => boolean): (x: number, y: number) => number;

        /**
         * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
         * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
         * if they are equal.  Please note that this is a **copy** of the list.  It does not modify the original.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a,a -> Number) -> [a] -> [a]
         * @param {Function} comparator A sorting function :: a -> b -> Int
         * @param {Array} list The list to sort
         * @return {Array} a new array with its elements sorted by the comparator function.
         * @example
         *
         *      var diff = function(a, b) { return a - b; };
         *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
         */
        sort(fn: (a: any, b: any) => number, list: any[]): any[];


        /**
         * Splits a list into sublists stored in an object, based on the result of calling a String-returning function
         * on each element, and grouping the results according to values returned.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> s) -> [a] -> {s: a}
         * @param {Function} fn Function :: a -> String
         * @param {Array} list The array to group
         * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
         *         that produced that key when passed to `fn`.
         * @example
         *
         *     var byGrade = R.groupBy(function(student) {
         *       var score = student.score;
         *       return (score < 65) ? 'F' : (score < 70) ? 'D' :
         *              (score < 80) ? 'C' : (score < 90) ? 'B' : 'A';
         *     });
         *     var students = [{name: 'Abby', score: 84},
         *                     {name: 'Eddy', score: 58},
         *                     // ...
         *                     {name: 'Jack', score: 69}];
         *     byGrade(students);
         *     // {
         *     //   'A': [{name: 'Dianne', score: 99}],
         *     //   'B': [{name: 'Abby', score: 84}]
         *     //   // ...,
         *     //   'F': [{name: 'Eddy', score: 58}]
         *     // }
         */
        // R.groupBy = curry2(function _groupBy(fn, list) {
        //     return foldl(function(acc, elt) {
        //         var key = fn(elt);
        //         acc[key] = append(elt, acc[key] || (acc[key] = []));
        //         return acc;
        //     }, {}, list);
        // });


        /**
         * Takes a predicate and a list and returns the pair of lists of
         * elements which do and do not satisfy the predicate, respectively.
         *
         * @func
         * @memberOf R
         * @category List
         * @sig (a -> Boolean) -> [a] -> [[a],[a]]
         * @param {Function} pred Function :: a -> Boolean
         * @param {Array} list The array to partition
         * @return {Array} A nested array, containing first an array of elements that satisfied the predicate,
         *                 and second an array of elements that did not satisfy.
         * @example
         *
         *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
         *      //=> [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
         */
        // R.partition = curry2(function _partition(pred, list) {
        //     return foldl(function(acc, elt) {
        //         acc[pred(elt) ? 0 : 1].push(elt);
        //         return acc;
        //     }, [[], []], list);
        // });




        // Object Functions
        // ----------------
        //
        // These functions operate on plain Javascript object, adding simple functions to test properties on these
        // objects.  Many of these are of most use in conjunction with the list functions, operating on lists of
        // objects.

        // --------

        /**
         * Runs the given function with the supplied object, then returns the object.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig a -> (a -> *) -> a
         * @param {*} x
         * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
         * @return {*} x
         * @example
         *
         *      var sayX = function(x) { console.log('x is ' + x); };
         *      R.tap(100, sayX); //=> 100
         *      // (and logs: 'x is 100')
         */
        // R.tap = curry2(function _tap(x, fn) {
        //     if (typeof fn === 'function') { fn(x); }
        //     return x;
        // });


        /**
         * Tests if two items are equal.  Equality is strict here, meaning reference equality for objects and
         * non-coercing equality for primitives.
         *
         * @func
         * @memberOf R
         * @category Relation
         * @sig a -> b -> Boolean
         * @param {*} a
         * @param {*} b
         * @return {Boolean}
         * @example
         *
         *      var o = {};
         *      R.eq(o, o); //=> true
         *      R.eq(o, {}); //=> false
         *      R.eq(1, 1); //=> true
         *      R.eq(1, '1'); //=> false
         */
        eq<T>(a: T, b: T): boolean;


        /**
         * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig s -> {s: a} -> a
         * @param {String} p The property name
         * @param {Object} obj The object to query
         * @return {*} The value at obj.p
         * @example
         *
         *      R.prop('x', {x: 100}); //=> 100
         *      R.prop('x', {}); //=> undefined
         *
         *      var fifth = R.prop(4); // indexed from 0, remember
         *      fifth(['Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy', 'Sleepy', 'Sneezy']);
         *      //=> 'Happy'
         */
        prop(p: string, obj: any): any;

        /**
         * @func
         * @memberOf R
         * @category Object
         * @see R.prop
         */
        get(p: string, obj: any): any;


        /**
         * Returns the value at the specified property.
         * The only difference from `prop` is the parameter order.
         *
         * @func
         * @memberOf R
         * @see R.prop
         * @category Object
         * @sig {s: a} -> s -> a
         * @param {Object} obj The object to query
         * @param {String} prop The property name
         * @return {*} The value at obj.p
         * @example
         *
         *      R.props({x: 100}, 'x'); //=> 100
         */
        props(obj: any, prop: string): any;


        /**
         * If the given object has an own property with the specified name,
         * returns the value of that property.
         * Otherwise returns the provided default value.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig s -> v -> {s: x} -> x | v
         * @param {String} p The name of the property to return.
         * @param {*} val The default value.
         * @param {Object} obj The object to query.
         * @returns {*} The value of given property or default value.
         * @example
         *
         *      var alice = {
         *        name: 'ALICE',
         *        age: 101
         *      };
         *      var favorite = R.prop('favoriteLibrary');
         *      var favoriteWithDefault = R.propOrDefault('favoriteLibrary', 'Ramda');
         *
         *      favorite(alice);  //=> undefined
         *      favoriteWithDefault(alice);  //=> 'Ramda'
         */
        propOrDefault(p: string, val: any, obj: any): any;


        /**
         * Calls the specified function on the supplied object. Any additional arguments
         * after `fn` and `obj` are passed in to `fn`. If no additional arguments are passed to `func`,
         * `fn` is invoked with no arguments.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig k -> {k : v} -> v(*)
         * @param {String} fn The name of the property mapped to the function to invoke
         * @param {Object} obj The object
         * @return {*} The value of invoking `obj.fn`
         * @example
         *
         *      R.func('add', R, 1, 2); //=> 3
         *
         *      var obj = { f: function() { return 'f called'; } };
         *      R.func('f', obj); //=> 'f called'
         */
        func(funcName: string , obj: any): any;


        /**
         * Returns a function that always returns the given value.
         *
         * @func
         * @memberOf R
         * @category Function
         * @sig a -> (* -> a)
         * @param {*} val The value to wrap in a function
         * @return {Function} A Function :: * -> val
         * @example
         *
         *      var t = R.always('Tee');
         *      t(); //=> 'Tee'
         */
        always(val: any): Function;


        /**
         * Returns a list containing the names of all the enumerable own
         * properties of the supplied object.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {k: v} -> [k]
         * @param {Object} obj The object to extract properties from
         * @return {Array} An array of the object's own properties
         * @example
         *
         *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
         */
        keys(x: any): string[];


        /**
         * Returns a list containing the names of all the
         * properties of the supplied object, including prototype properties.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {k: v} -> [k]
         * @param {Object} obj The object to extract properties from
         * @return {Array} An array of the object's own and prototype properties
         * @example
         *
         *      var F = function() { this.x = 'X'; };
         *      F.prototype.y = 'Y';
         *      var f = new F();
         *      R.keysIn(f); //=> ['x', 'y']
         */
        keysIn(obj: any): string[];


        /**
         * Converts an object into an array of key, value arrays.
         * Only the object's own properties are used.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {k: v} -> [[k,v]]
         * @param {Object} obj The object to extract from
         * @return {Array} An array of key, value arrays from the object's own properties
         * @example
         *
         *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
         */
        toPairs(obj: any): any[][];


        /**
         * Converts an object into an array of key, value arrays.
         * The object's own properties and prototype properties are used.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {k: v} -> [[k,v]]
         * @param {Object} obj The object to extract from
         * @return {Array} An array of key, value arrays from the object's own
         *         and prototype properties
         * @example
         *
         *      var F = function() { this.x = 'X'; };
         *      F.prototype.y = 'Y';
         *      var f = new F();
         *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
         */
        toPairsIn(obj: any): any[][];


        /**
         * Returns a list of all the enumerable own properties of the supplied object.
         * Note that the order of the output array is not guaranteed across
         * different JS platforms.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {k: v} -> [v]
         * @param {Object} obj The object to extract values from
         * @return {Array} An array of the values of the object's own properties
         * @example
         *
         *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
         */
        values(obj: any): any[];


    //     /**
    //      * Returns a list of all the properties, including prototype properties,
    //      * of the supplied object.
    //      * Note that the order of the output array is not guaranteed to be
    //      * consistent across different JS platforms.
    //      *
    //      * @func
    //      * @memberOf R
    //      * @category Object
    //      * @sig {k: v} -> [v]
    //      * @param {Object} obj The object to extract values from
    //      * @return {Array} An array of the values of the object's own and prototype properties
    //      * @example
    //      *
    //      *      var F = function() { this.x = 'X'; };
    //      *      F.prototype.y = 'Y';
    //      *      var f = new F();
    //      *      R.valuesIn(f); //=> ['X', 'Y']
    //      */
    //     // R.valuesIn = function _valuesIn(obj) {
    //     //     var prop, vs = [];
    //     //     for (prop in obj) {
    //     //         vs.push(obj[prop]);
    //     //     }
    //     //     return vs;
    //     // };


        /**
         * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
         * property is ignored.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig [k] -> {k: v} -> {k: v}
         * @param {Array} names an array of String propery names to copy onto a new object
         * @param {Object} obj The object to copy from
         * @return {Object} A new object with only properties from `names` on it.
         * @example
         *
         *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
         *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
         */
        pick<T>(names: string[], obj: T): T;


        /**
         * Returns a partial copy of an object omitting the keys specified.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig [k] -> {k: v} -> {k: v}
         * @param {Array} names an array of String propery names to omit from the new object
         * @param {Object} obj The object to copy from
         * @return {Object} A new object with properties from `names` not on it.
         * @example
         *
         *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
         */
        omit<T>(names: string[], obj: T): T;


        /**
         * Returns a partial copy of an object containing only the keys that
         * satisfy the supplied predicate.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
         * @param {Function} pred A predicate to determine whether or not a key
         *        should be included on the output object.
         * @param {Object} obj The object to copy from
         * @return {Object} A new object with only properties that satisfy `pred`
         *         on it.
         * @see R.pick
         * @example
         *
         *      var isUpperCase = function(val, key) { return key.toUpperCase() === key; }
         *      R.pickWith(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
         */
        pickWith<T>(pred: (v: any, k: string) => boolean, T): T;

        /**
         * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig [k] -> {k: v} -> {k: v}
         * @param {Array} names an array of String propery names to copy onto a new object
         * @param {Object} obj The object to copy from
         * @return {Object} A new object with only properties from `names` on it.
         * @see R.pick
         * @example
         *
         *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
         *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
         */
        pickAll<T>(names: string[], T): T;


        /**
         * Create a new object with the own properties of a
         * merged with the own properties of object b.
         * This function will *not* mutate passed-in objects.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {k: v} -> {k: v} -> {k: v}
         * @param {Object} a source object
         * @param {Object} b object with higher precendence in output
         * @returns {Object} Returns the destination object.
         * @example
         *
         *      R.mixin({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
         *      //=> { 'name': 'fred', 'age': 40 }
         */
        mixin<T>(a: T, b: T): T;


        /**
         * Reports whether two functions have the same value for the specified property.  Useful as a curried predicate.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig k -> {k: v} -> {k: v} -> Boolean
         * @param {String} prop The name of the property to compare
         * @param {Object} obj1
         * @param {Object} obj2
         * @return {Boolean}
         *
         * @example
         *
         *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
         *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
         *      R.eqProps('a', o1, o2); //=> false
         *      R.eqProps('c', o1, o2); //=> true
         */
        eqProps(prop: string, obj1: any, obj2: any): boolean;


        /**
         * Takes a spec object and a test object and returns true if the test satisfies the spec.
         * Any property on the spec that is not a function is interpreted as an equality
         * relation.
         *
         * If the spec has a property mapped to a function, then `where` evaluates the function, passing in
         * the test object's value for the property in question, as well as the whole test object.
         *
         * `where` is well suited to declarativley expressing constraints for other functions, e.g.,
         * `filter`, `find`, `pickWith`, etc.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {k: v} -> {k: v} -> Boolean
         * @param {Object} spec
         * @param {Object} testObj
         * @return {Boolean}
         * @example
         *
         *      var spec = {x: 2};
         *      R.where(spec, {w: 10, x: 2, y: 300}); //=> true
         *      R.where(spec, {x: 1, y: 'moo', z: true}); //=> false
         *
         *      var spec2 = {x: function(val, obj) { return  val + obj.y > 10; }};
         *      R.where(spec2, {x: 2, y: 7}); //=> false
         *      R.where(spec2, {x: 3, y: 8}); //=> true
         *
         *      var xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
         *      R.filter(R.where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
         */
        where<T>(spec: T, testObj: T): boolean;


        // Miscellaneous Functions
        // -----------------------
        //
        // A few functions in need of a good home.

        // --------

        /**
         * Expose the functions from ramda as properties of another object.
         * If the provided object is the global object then the ramda
         * functions become global functions.
         * Warning: This function *will* mutate the object provided.
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig -> {*} -> {*}
         * @param {Object} obj The object to attach ramda functions
         * @return {Object} a reference to the mutated object
         * @example
         *
         *      var x = {}
         *      R.installTo(x); // x now contains ramda functions
         *      R.installTo(this); // add ramda functions to `this` object
         */
        installTo(obj: any): any;


        /**
         * See if an object (`val`) is an instance of the supplied constructor.
         * This function will check up the inheritance chain, if any.
         *
         * @func
         * @memberOf R
         * @category type
         * @sig (* -> {*}) -> a -> Boolean
         * @param {Object} ctor A constructor
         * @param {*} val The value to test
         * @return {Boolean}
         * @example
         *
         *      R.is(Object, {}); //=> true
         *      R.is(Number, 1); //=> true
         *      R.is(Object, 1); //=> false
         *      R.is(String, 's'); //=> true
         *      R.is(String, new String('')); //=> true
         *      R.is(Object, new String('')); //=> true
         *      R.is(Object, 's'); //=> false
         *      R.is(Number, {}); //=> false
         */
        is(ctor: any, val: any): boolean;


        /**
         * A function that always returns `0`. Any passed in parameters are ignored.
         *
         * @func
         * @memberOf R
         * @category function
         * @sig * -> 0
         * @see R.always
         * @return {Number} 0. Always zero.
         * @example
         *
         *      R.alwaysZero(); //=> 0
         */
        alwaysZero(): number;


        /**
         * A function that always returns `false`. Any passed in parameters are ignored.
         *
         * @func
         * @memberOf R
         * @category function
         * @sig * -> false
         * @see R.always
         * @return {Boolean} false
         * @example
         *
         *      R.alwaysFalse(); //=> false
         */
        alwaysFalse(): boolean;


        /**
         * A function that always returns `true`. Any passed in parameters are ignored.
         *
         * @func
         * @memberOf R
         * @category function
         * @sig * -> true
         * @see R.always
         * @return {Boolean} true
         * @example
         *
         *      R.alwaysTrue(); //=> true
         */
        alwaysTrue(): boolean;



        // Logic Functions
        // ---------------
        //
        // These functions are very simple wrappers around the built-in logical operators, useful in building up
        // more complex functional forms.

        // --------

        /**
         *
         * A function wrapping calls to the two functions in an `&&` operation, returning `true` or `false`.  Note that
         * this is short-circuited, meaning that the second function will not be invoked if the first returns a false-y
         * value.
         *
         * @func
         * @memberOf R
         * @category logic
         * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
         * @param {Function} f a predicate
         * @param {Function} g another predicate
         * @return {Function} a function that applies its arguments to `f` and `g` and ANDs their outputs together.
         * @example
         *
         *      var gt10 = function(x) { return x > 10; };
         *      var even = function(x) { return x % 2 === 0 };
         *      var f = R.and(gt10, even);
         *      f(100); //=> true
         *      f(101); //=> false
         */
        and<T extends () => boolean>(fn1: T, fn2: T): T;

        /**
         * A function wrapping calls to the two functions in an `||` operation, returning `true` or `false`.  Note that
         * this is short-circuited, meaning that the second function will not be invoked if the first returns a truth-y
         * value.
         *
         * @func
         * @memberOf R
         * @category logic
         * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
         * @param {Function} f a predicate
         * @param {Function} g another predicate
         * @return {Function} a function that applies its arguments to `f` and `g` and ORs their outputs together.
         * @example
         *
         *      var gt10 = function(x) { return x > 10; };
         *      var even = function(x) { return x % 2 === 0 };
         *      var f = R.or(gt10, even);
         *      f(101); //=> true
         *      f(8); //=> true
         */
        or<T extends () => boolean>(fn1: T, fn2: T): T;


        /**
         * A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
         * underlying function would return a false-y value, and `false` when it would return a truth-y one.
         *
         * @func
         * @memberOf R
         * @category logic
         * @sig (*... -> Boolean) -> (*... -> Boolean)
         * @param {Function} f a predicate
         * @return {Function} a function that applies its arguments to `f` and logically inverts its output.
         * @example
         *
         *      var gt10 = function(x) { return x > 10; };
         *      var f = R.not(gt10);
         *      f(11); //=> false
         *      f(9); //=> true
         */
        not<T extends () => boolean>(fn: T): T;



        /**
         * Given a list of predicates, returns a new predicate that will be true exactly when all of them are.
         *
         * @func
         * @memberOf R
         * @category logic
         * @sig [(*... -> Boolean)] -> (*... -> Boolean)
         * @param {Array} list An array of predicate functions
         * @param {*} optional Any arguments to pass into the predicates
         * @return {Function} a function that applies its arguments to each of
         *         the predicates, returning `true` if all are satisfied.
         * @example
         *
         *      var gt10 = function(x) { return x > 10; };
         *      var even = function(x) { return x % 2 === 0};
         *      var f = R.allPredicates([gt10, even]);
         *      f(11); //=> false
         *      f(12); //=> true
         */
        allPredicates(fns: Function[], ...args: any[]): Function;


        /**
         * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
         *
         * @func
         * @memberOf R
         * @category logic
         * @sig [(*... -> Boolean)] -> (*... -> Boolean)
         * @param {Array} list An array of predicate functions
         * @param {*} optional Any arguments to pass into the predicates
         * @return {Function}  a function that applies its arguments to each of the predicates, returning
         *                   `true` if all are satisfied..
         * @example
         *
         *      var gt10 = function(x) { return x > 10; };
         *      var even = function(x) { return x % 2 === 0};
         *      var f = R.anyPredicates([gt10, even]);
         *      f(11); //=> true
         *      f(8); //=> true
         *      f(9); //=> false
         */
        anyPredicates(fns: Function[], ...args: any[]): Function;




        // Arithmetic Functions
        // --------------------
        //
        // These functions wrap up the certain core arithmetic operators

        // --------

        /**
         * Adds two numbers (or strings). Equivalent to `a + b` but curried.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @sig String -> String -> String
         * @param {number|string} a The first value.
         * @param {number|string} b The second value.
         * @return {number|string} The result of `a + b`.
         * @example
         *
         *      var increment = R.add(1);
         *      increment(10);   //=> 11
         *      R.add(2, 3);       //=>  5
         *      R.add(7)(10);      //=> 17
         */
        add(a: number, b: number): number;
        add(a: string, b: string): string;
        add(a: number): Function;
        add(a: string): Function;


        /**
         * Multiplies two numbers. Equivalent to `a * b` but curried.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @param {number} a The first value.
         * @param {number} b The second value.
         * @return {number} The result of `a * b`.
         * @example
         *
         *      var double = R.multiply(2);
         *      var triple = R.multiply(3);
         *      double(3);       //=>  6
         *      triple(4);       //=> 12
         *      R.multiply(2, 5);  //=> 10
         */
        multiply(a: number, b: number): number;
        multiply(a: number): Function;


        /**
         * Subtracts two numbers. Equivalent to `a - b` but curried.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @param {number} a The first value.
         * @param {number} b The second value.
         * @return {number} The result of `a - b`.
         * @see R.subtractN
         * @example
         *
         *      var complementaryAngle = R.subtract(90);
         *      complementaryAngle(30); //=> 60
         *
         *      var theRestOf = R.subtract(1);
         *      theRestOf(0.25); //=> 0.75
         *
         *      R.subtract(10)(8); //=> 2
         */
        subtract(a: number, b: number): number;


        /**
         * Subtracts two numbers in reverse order. Equivalent to `b - a` but
         * curried. Probably more useful when partially applied than
         * `subtract`.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @param {number} a The first value.
         * @param {number} b The second value.
         * @return {number} The result of `a - b`.
         * @example
         *
         *      var complementaryAngle = R.subtractN(90);
         *      complementaryAngle(30); //=> -60
         *
         *      var theRestOf = R.subtractN(1);
         *      theRestOf(0.25); //=> -0.75
         *
         *      R.subtractN(10)(8); //=> -2
         */
        subtractN(a: number, b: number): number;


        /**
         * Divides two numbers. Equivalent to `a / b`.
         * While at times the curried version of `divide` might be useful,
         * probably the curried version of `divideBy` will be more useful.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @param {number} a The first value.
         * @param {number} b The second value.
         * @return {number} The result of `a / b`.
         * @see R.divideBy
         * @example
         *
         *      var reciprocal = R.divide(1);
         *      reciprocal(4);   //=> 0.25
         *      R.divide(71, 100); //=> 0.71
         */
        divide(a: number, b: number): number;


        /**
         * Divides two numbers in reverse order. Equivalent to `b / a`.
         * `divideBy` is the reversed version of `divide`, where the second parameter is
         * divided by the first.  The curried version of `divideBy` may prove more useful
         * than that of `divide`.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @param {number} a The second value.
         * @param {number} b The first value.
         * @return {number} The result of `b / a`.
         * @see R.divide
         * @example
         *
         *      var half = R.divideBy(2);
         *      half(42); //=> 21
         */
        divideBy(a: number, b: number): number;


        /**
         * Divides the second parameter by the first and returns the remainder.
         * The flipped version (`moduloBy`) may be more useful curried.
         * Note that this functions preserves the JavaScript-style behavior for
         * modulo. For mathematical modulo see `mathMod`
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @param {number} a The value to the divide.
         * @param {number} b The pseudo-modulus
         * @return {number} The result of `b % a`.
         * @see R.moduloBy
         * @see R.mathMod
         * @example
         *
         *      R.modulo(17, 3); //=> 2
         *      // JS behavior:
         *      R.modulo(-17, 3); //=> -2
         *      R.modulo(17, -3); //=> 2
         */
        modulo(a: number, b: number): number;



        /**
         * mathMod behaves like the modulo operator should mathematically, unlike the `%`
         * operator (and by extension, R.modulo). So while "-17 % 5" is -2,
         * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
         * when the modulus is zero or negative.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @param {number} m The dividend.
         * @param {number} p the modulus.
         * @return {number} The result of `b mod a`.
         * @see R.moduloBy
         * @example
         *
         *      R.mathMod(-17, 5)  // 3
         *      R.mathMod(17, 5)   // 2
         *      R.mathMod(17, -5)  // NaN
         *      R.mathMod(17, 0)   // NaN
         *      R.mathMod(17.2, 5) // NaN
         *      R.mathMod(17, 5.3) // NaN
         */
       mathMod(a: number, b: number): number;


        /**
         * Reversed version of `modulo`, where the second parameter is divided by the first.  The curried version of
         * this one might be more useful than that of `modulo`.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Number
         * @param {number} m The dividend.
         * @param {number} p the modulus.
         * @return {number} The result of `b mod a`.
         * @see R.modulo
         * @example
         *
         *      var isOdd = R.moduloBy(2);
         *      isOdd(42); //=> 0
         *      isOdd(21); //=> 1
         */
        moduloBy(a: number, b: number): number;


        /**
         * Adds together all the elements of a list.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig [Number] -> Number
         * @param {Array} list An array of numbers
         * @return {number} The sum of all the numbers in the list.
         * @see reduce
         * @example
         *
         *      R.sum([2,4,6,8,100,1]); //=> 121
         */
        sum(list: number[]): number;


        /**
         * Multiplies together all the elements of a list.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig [Number] -> Number
         * @param {Array} list An array of numbers
         * @return {number} The product of all the numbers in the list.
         * @see reduce
         * @example
         *
         *      R.product([2,4,6,8,100,1]); //=> 38400
         */
        product(list: number[]): number;


        /**
         * Returns true if the first parameter is less than the second.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Boolean
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean} a < b
         * @example
         *
         *      R.lt(2, 6); //=> true
         *      R.lt(2, 0); //=> false
         *      R.lt(2, 2); //=> false
         */
        lt(a: number, b: number): boolean;


        /**
         * Returns true if the first parameter is less than or equal to the second.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Boolean
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean} a <= b
         * @example
         *
         *      R.lte(2, 6); //=> true
         *      R.lte(2, 0); //=> false
         *      R.lte(2, 2); //=> true
         */
        lte(a: number, b: number): boolean;


        /**
         * Returns true if the first parameter is greater than the second.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Boolean
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean} a > b
         * @example
         *
         *      R.gt(2, 6); //=> false
         *      R.gt(2, 0); //=> true
         *      R.gt(2, 2); //=> false
         */
        gt(a: number, b: number): boolean;


        /**
         * Returns true if the first parameter is greater than or equal to the second.
         *
         * @func
         * @memberOf R
         * @category math
         * @sig Number -> Number -> Boolean
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean} a >= b
         * @example
         *
         *      R.gte(2, 6); //=> false
         *      R.gte(2, 0); //=> true
         *      R.gte(2, 2); //=> true
         */
        gte(a: number, b: number): boolean;


        /**
         * Determines the largest of a list of numbers (or elements that can be cast to numbers)
         *
         * @func
         * @memberOf R
         * @category math
         * @sig [Number] -> Number
         * @see R.maxWith
         * @param {Array} list A list of numbers
         * @return {Number} The greatest number in the list
         * @example
         *
         *      R.max([7, 3, 9, 2, 4, 9, 3]); //=> 9
         */
        max(list: number[]): number;


        /**
         * Determines the largest of a list of items as determined by pairwise comparisons from the supplied comparator
         *
         * @func
         * @memberOf R
         * @category math
         * @sig (a -> Number) -> [a] -> a
         * @param {Function} keyFn A comparator function for elements in the list
         * @param {Array} list A list of comparable elements
         * @return {*} The greatest element in the list. `undefined` if the list is empty.
         * @see R.max
         * @example
         *
         *      function cmp(obj) { return obj.x; }
         *      var a = {x: 1}, b = {x: 2}, c = {x: 3};
         *      R.maxWith(cmp, [a, b, c]); //=> {x: 3}
         */
        maxWithmax<T>(keyFn: (a: T) => number, list: T[]): T;


        /**
         * Determines the smallest of a list of items as determined by pairwise comparisons from the supplied comparator
         *
         * @func
         * @memberOf R
         * @category math
         * @sig (a -> Number) -> [a] -> a
         * @param {Function} keyFn A comparator function for elements in the list
         * @param {Array} list A list of comparable elements
         * @see R.min
         * @return {*} The greatest element in the list. `undefined` if the list is empty.
         * @example
         *
         *      function cmp(obj) { return obj.x; }
         *      var a = {x: 1}, b = {x: 2}, c = {x: 3};
         *      R.minWith(cmp, [a, b, c]); //=> {x: 1}
         */
        minWith<T>(keyFn: (a: T) => number, list: T[]): T;

        /**
         * Determines the smallest of a list of numbers (or elements that can be cast to numbers)
         *
         * @func
         * @memberOf R
         * @category math
         * @sig [Number] -> Number
         * @param {Array} list A list of numbers
         * @return {Number} The greatest number in the list
         * @see R.minWith
         * @example
         *
         *      R.min([7, 3, 9, 2, 4, 9, 3]); //=> 2
         */
        min(list: number[]): number;



        // String Functions
        // ----------------
        //
        // Much of the String.prototype API exposed as simple functions.

        // --------

        /**
         * returns a subset of a string between one index and another.
         *
         * @func
         * @memberOf R
         * @category string
         * @sig Number -> Number -> String -> String
         * @param {Number} indexA An integer between 0 and the length of the string.
         * @param {Number} indexB An integer between 0 and the length of the string.
         * @param {String} The string to extract from
         * @return {String} the extracted substring
         * @see R.invoker
         * @example
         *
         *      R.substring(2, 5, 'abcdefghijklm'); //=> 'cde'
         */
        substring(indexA: number, indexB: number, str: string): string;


        /**
         * The trailing substring of a String starting with the nth character:
         *
         * @func
         * @memberOf R
         * @category string
         * @sig Number -> String -> String
         * @param {Number} indexA An integer between 0 and the length of the string.
         * @param {String} The string to extract from
         * @return {String} the extracted substring
         * @see R.invoker
         * @example
         *
         *      R.substringFrom(8, 'abcdefghijklm'); //=> 'ijklm'
         */
        substringFrom(indexA: number, indexB: number, str: string): string;


        /**
         * The leading substring of a String ending before the nth character:
         *
         * @func
         * @memberOf R
         * @category string
         * @sig Number -> String -> String
         * @param {Number} indexA An integer between 0 and the length of the string.
         * @param {String} The string to extract from
         * @return {String} the extracted substring
         * @see R.invoker
         * @example
         *
         *      R.substringTo(8, 'abcdefghijklm'); //=> 'abcdefgh'
         */
        substringTo(indexA: number, indexB: number, str: string): string;


        /**
         * The character at the nth position in a String:
         *
         * @func
         * @memberOf R
         * @category string
         * @sig Number -> String -> String
         * @param {Number} index An integer between 0 and the length of the string.
         * @param {String} str The string to extract a char from
         * @return {String} the character at `index` of `str`
         * @see R.invoker
         * @example
         *
         *      R.charAt(8, 'abcdefghijklm'); //=> 'i'
         */
        charAt(index: number, indexB: number, str: string): string;


        /**
         * The ascii code of the character at the nth position in a String:
         *
         * @func
         * @memberOf R
         * @category string
         * @sig Number -> String -> Number
         * @param {Number} index An integer between 0 and the length of the string.
         * @param {String} str The string to extract a charCode from
         * @return {Number} the code of the character at `index` of `str`
         * @see R.invoker
         * @example
         *
         *      R.charCodeAt(8, 'abcdefghijklm'); //=> 105
         *      // (... 'a' ~ 97, 'b' ~ 98, ... 'i' ~ 105)
         */
        charCodeAt(index: number, indexB: number, str: string): string;


        /**
         * Tests a regular expression agains a String
         *
         * @func
         * @memberOf R
         * @category string
         * @sig RegExp -> String -> [String] | null
         * @param {RegExp} rx A regular expression.
         * @param {String} str The string to match against
         * @return {Array} The list of matches, or null if no matches found
         * @see R.invoker
         * @example
         *
         *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
         */
        match(regexp: RegExp, str: string): any[];


        /**
         * Finds the first index of a substring in a string, returning -1 if it's not present
         *
         * @func
         * @memberOf R
         * @category string
         * @sig String -> String -> Number
         * @param {String} c A string to find.
         * @param {String} str The string to search in
         * @return {Number} The first index of `c` or -1 if not found
         * @see R.invoker
         * @example
         *
         *      R.strIndexOf('c', 'abcdefg'); //=> 2
         */
        strIndexOf(c: string, str: string): number;


        /**
         *
         * Finds the last index of a substring in a string, returning -1 if it's not present
         *
         * @func
         * @memberOf R
         * @category string
         * @sig String -> String -> Number
         * @param {String} c A string to find.
         * @param {String} str The string to search in
         * @return {Number} The last index of `c` or -1 if not found
         * @see R.invoker
         * @example
         *
         *      R.strLastIndexOf('a', 'banana split'); //=> 5
         */
        strLastIndexOf(c: string, str: string): number;


        /**
         * The upper case version of a string.
         *
         * @func
         * @memberOf R
         * @category string
         * @sig String -> String
         * @param {string} str The string to upper case.
         * @return {string} The upper case version of `str`.
         * @example
         *
         *      R.toUpperCase('abc'); //=> 'ABC'
         */
        toUpperCase(str: string): string;


        /**
         * The lower case version of a string.
         *
         * @func
         * @memberOf R
         * @category string
         * @sig String -> String
         * @param {string} str The string to lower case.
         * @return {string} The lower case version of `str`.
         * @example
         *
         *      R.toLowerCase('XYZ'); //=> 'xyz'
         */
        toLowerCase(str: string): string;


        /**
         * Splits a string into an array of strings based on the given
         * separator.
         *
         * @func
         * @memberOf R
         * @category string
         * @sig String -> String -> [String]
         * @param {string} sep The separator string.
         * @param {string} str The string to separate into an array.
         * @return {Array} The array of strings from `str` separated by `str`.
         * @example
         *
         *      var pathComponents = R.split('/');
         *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
         *
         *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
         */
        split(sep: string, str: string): string[];


        /**
         * Retrieve a nested path on an object seperated by the specified
         * separator value.
         *
         * @func
         * @memberOf R
         * @category string
         * @sig String -> String -> {*} -> *
         * @param {string} sep The separator to use in `path`.
         * @param {string} path The path to use.
         * @return {*} The data at `path`.
         * @example
         *
         *      R.pathOn('/', 'a/b/c', {a: {b: {c: 3}}}); //=> 3
         */
        pathOn(sep: string, str: string, obj: any): any;

        /**
         * Retrieve a nested path on an object seperated by periods
         *
         * @func
         * @memberOf R
         * @category string
         * @sig String -> {*} -> *
         * @param {string} path The dot path to use.
         * @return {*} The data at `path`.
         * @example
         *
         *      R.path('a.b', {a: {b: 2}}); //=> 2
         */
        path(path: string, any): any;



        // Data Analysis and Grouping Functions
        // ------------------------------------
        //
        // Functions performing SQL-like actions on lists of objects.  These do
        // not have any SQL-like optimizations performed on them, however.

        // --------

        /**
         * Reasonable analog to SQL `select` statement.
         *
         * @func
         * @memberOf R
         * @category object
         * @category relation
         * @string [k] -> [{k: v}] -> [{k: v}]
         * @param {Array} props The property names to project
         * @param {Array} objs The objects to query
         * @return {Array} An array of objects with just the `props` properties.
         * @example
         *
         *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
         *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
         *      var kids = [abby, fred];
         *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
         */
        project<T>(props: string[], objs: T[]): T[];


        /**
         * Determines whether the given property of an object has a specific
         * value according to strict equality (`===`).  Most likely used to
         * filter a list:
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig k -> v -> {k: v} -> Boolean
         * @param {string|number} name The property name (or index) to use.
         * @param {*} val The value to compare the property with.
         * @return {boolean} `true` if the properties are equal, `false` otherwise.
         * @example
         *
         *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
         *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
         *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
         *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
         *      var kids = [abby, fred, rusty, alois];
         *      var hasBrownHair = R.propEq('hair', 'brown');
         *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
         */
        propEq<T>(name: string, val: T, obj: {[index:string]: T}): boolean;
        propEq<T>(name: number, val: T, obj: {[index:number]: T}): boolean;
        propEq<T>(name: string, val: T): Function;
        propEq<T>(name: number, val: T): Function;
        propEq<T>(name: string): Function;
        propEq<T>(name: number): Function;


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of the
         * elements of each list.
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig [a] -> [a] -> [a]
         * @param {Array} as The first list.
         * @param {Array} bs The second list.
         * @return {Array} The first and second lists concatenated, with
         * duplicates removed.
         * @example
         *
         *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
         */
        union<T>(as: T[], bs: T[]): T[];


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
         * determined according to the value returned by applying the supplied predicate to two list elements.
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig (a,a -> Boolean) -> [a] -> [a] -> [a]
         * @param {Function} pred
         * @param {Array} list1 The first list.
         * @param {Array} list2 The second list.
         * @return {Array} The first and second lists concatenated, with
         *         duplicates removed.
         * @see R.union
         * @example
         *
         *      function cmp(x, y) { return x.a === y.a; }
         *      var l1 = [{a: 1}, {a: 2}];
         *      var l2 = [{a: 1}, {a: 4}];
         *      R.unionWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
         */
        unionWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[];


        /**
         * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig [a] -> [a] -> [a]
         * @param {Array} list1 The first list.
         * @param {Array} list2 The second list.
         * @return {Array} The elements in `list1` that are not in `list2`
         * @see R.differenceWith
         * @example
         *
         *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
         *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
         */
        difference<T>(list1: T[], list2: T[]): T[];


        /**
         * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
         * Duplication is determined according to the value returned by applying the supplied predicate to two list
         * elements.
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig (a,a -> Boolean) -> [a] -> [a] -> [a]
         * @param {Function} pred
         * @param {Array} list1 The first list.
         * @param {Array} list2 The second list.
         * @see R.difference
         * @return {Array} The elements in `list1` that are not in `list2`
         * @example
         *
         *      function cmp(x, y) { return x.a === y.a; }
         *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
         *      var l2 = [{a: 3}, {a: 4}];
         *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
         *
         */
        differenceWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[];


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig [a] -> [a] -> [a]
         * @param {Array} list1 The first list.
         * @param {Array} list2 The second list.
         * @see R.intersectionWith
         * @return {Array} The list of elements found in both `list1` and `list2`
         * @example
         *
         *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
         */
        intersection<T>(list1: T[], list2: T[]): T[];


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of those
         * elements common to both lists.  Duplication is determined according
         * to the value returned by applying the supplied predicate to two list
         * elements.
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig (a,a -> Boolean) -> [a] -> [a] -> [a]
         * @param {Function} pred A predicate function that determines whether
         *        the two supplied elements are equal.
         * @param {Array} list1 One list of items to compare
         * @param {Array} list2 A second list of items to compare
         * @see R.intersection
         * @return {Array} A new list containing those elements common to both lists.
         * @example
         *
         *      var buffaloSpringfield = [
         *        {id: 824, name: 'Richie Furay'},
         *        {id: 956, name: 'Dewey Martin'},
         *        {id: 313, name: 'Bruce Palmer'},
         *        {id: 456, name: 'Stephen Stills'},
         *        {id: 177, name: 'Neil Young'}
         *      ];
         *      var csny = [
         *        {id: 204, name: 'David Crosby'},
         *        {id: 456, name: 'Stephen Stills'},
         *        {id: 539, name: 'Graham Nash'},
         *        {id: 177, name: 'Neil Young'}
         *      ];
         *
         *      var sameId = function(o1, o2) {return o1.id === o2.id;};
         *
         *      R.intersectionWith(sameId, buffaloSpringfield, csny);
         *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
         */
        intersectionWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[];


        /**
         * Sorts the list according to a key generated by the supplied function.
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig (a -> String) -> [a] -> [a]
         * @param {Function} fn The function mapping `list` items to keys.
         * @param {Array} list The list to sort.
         * @return {Array} A new list sorted by the keys generated by `fn`.
         * @example
         *
         *      var sortByFirstItem = R.sortBy(prop(0));
         *      var sortByNameCaseInsensitive = R.sortBy(compose(R.toLowerCase, prop('name')));
         *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
         *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
         *      var alice = {
         *         name: 'ALICE',
         *         age: 101
         *      };
         *      var bob = {
         *         name: 'Bob',
         *        age: -10
         *      };
         *      var clara = {
         *        name: 'clara',
         *        age: 314.159
         *      };
         *      var people = [clara, bob, alice];
         *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
         */
        sortBy<T>(fn: (a: T) => string, list: T[]): T[];


        /**
         * Counts the elements of a list according to how many match each value
         * of a key generated by the supplied function. Returns an object
         * mapping the keys produced by `fn` to the number of occurrences in
         * the list. Note that all keys are coerced to strings because of how
         * JavaScript objects work.
         *
         * @func
         * @memberOf R
         * @category relation
         * @sig (a -> String) -> [a] -> {*}
         * @param {Function} fn The function used to map values to keys.
         * @param {Array} list The list to count elements from.
         * @return {Object} An object mapping keys to number of occurrences in the list.
         * @example
         *
         *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
         *      var letters = R.split('', 'abcABCaaaBBc');
         *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
         *      R.countBy(R.toLowerCase)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}
         */
        countBy(fn: (a: any) => string, list: any[]): any;



        /**
         * Returns a list of function names of object's own functions
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {*} -> [String]
         * @param {Object} obj The objects with functions in it
         * @return {Array} returns a list of the object's own properites that map to functions
         * @example
         *
         *      R.functions(R); // returns list of ramda's own function names
         *
         *      var F = function() { this.x = function(){}; this.y = 1; }
         *      F.prototype.z = function() {};
         *      F.prototype.a = 100;
         *      R.functions(new F()); //=> ["x"]
         */
        functions(obj: any): string[];


        /**
         * Returns a list of function names of object's own and prototype functions
         *
         * @func
         * @memberOf R
         * @category Object
         * @sig {*} -> [String]
         * @param {Object} obj The objects with functions in it
         * @return {Array} returns a list of the object's own properites and prototype
         *                 properties that map to functions
         * @example
         *
         *      R.functionsIn(R); // returns list of ramda's own and prototype function names
         *
         *      var F = function() { this.x = function(){}; this.y = 1; }
         *      F.prototype.z = function() {};
         *      F.prototype.a = 100;
         *      R.functionsIn(new F()); //=> ["x", "z"]
         */
        functionsIn(obj: any): string[];

    }
}

declare module 'ramda' {
    export = R;
}
