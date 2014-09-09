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

    interface FuncIndex extends Function {
        (): any;
        idx: Function;
    }
    // Common interface between Arrays and jQuery objects
    interface List<T> {
        [index: number]: T;
        length: number;
    }
    interface Dictionary<T> {
        [index: string]: T;
    }
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
    substring(
            indexA: number,
            indexB: number,
            The: string): string;

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
    substringFrom(
            indexA: number,
            The: string): string;

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
     *      substringTo(8, 'abcdefghijklm'); //=> 'abcdefgh'
     */
    substringTo(
            indexA: number,
            The: string): string;

    toString(): string;

    /**
     * Tests whether or not an object is an array.
     *
     * @private
     * @category Internal
     * @param {*} val The object to test.
     * @return {boolean} `true` if `val` is an array, `false` otherwise.
     * @example
     *
     *      isArray([]); //=> true
     *      isArray(true); //=> false
     *      isArray({}); //=> false
     */
    // isArray(
    //         a: any[]): boolean;
    //
    // isArrayLike(
    //         a: Array<any>): boolean;
    //
    // isArrayLike(
    //         a: ArrayLike): boolean;

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
    curry(
        fn: (...args: any[]) => any,
        fnArity?: number
    ): any;

    nAry(
            a: number,
            fn: () => any): any;
    nAry(
            a: number,
            fn: (arg0: any, ...rest: any[]) => any): any;

    arity(
            a: number,
            fn: Function): any;
    arity(
            a: number,
            fn: (...args: any[]) => any): any;

    unary(
            fn: Function): any;

    unary(
            fn: (...args: any[]) => any): any;

    binary(
            fn: Function): any;

    binary(
            fn: (...args: any[]) => any): any;

    invoker(
            name: string,
            obj: any,
            len?: number): any;

    useWith(
            fn: Function,
            ...rest: Function[]): any;

    forEach<T>(
            fn: R.ListIterator<T, void>,
            list: R.List<T>): R.List<T>;

    clone<T>(
            list: R.List<T>): R.List<T>;


    isEmpty<T>(
            list: R.List<T>): boolean;

    prepend<T>(
            el: T,
            list: R.List<T>): R.List<T>;
    cons<T>(
            el: T,
            list: R.List<T>): R.List<T>;

    head<T>(list: R.List<T>): R.List<T>;
    car<T>(list: R.List<T>): R.List<T>;

    last<T>(list: R.List<T>): R.List<T>;

    tail<T>(list: R.List<T>): R.List<T>;
    cdr<T>(list: R.List<T>): R.List<T>;

    append<T>(
            el: T,
            list: R.List<T>): R.List<T>;
    push<T>(
            el: T,
            list: R.List<T>): R.List<T>;

    concat<T>(
            list1: R.List<T>,
            list2: R.List<T>): R.List<T>;

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
    times(
        fn: (i: number) => any,
        n: number
    ): R.List<any>

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
    repeatN(
        value: number,
        n: number
    ): any[];

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
    compose(
        ...Functions: Function[]
    ): Function;

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
    pipe(
        ...Functions: Function[]
    ): Function;

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
    flip(
        fn: (arg0: any, ...args: any[]) => any
    ): Function;

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
    lPartial(
        fn: Function,
        ...args: any[]
    ): Function;

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
    rPartial(
        fn: Function,
        ...args: any[]
    ): Function;

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
    memoize(
        fn: Function
    ): Function;

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
    once(
        fn: Function
    ): Function;

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
    wrap(
        fn: Function,
        wrapper: Function
    ): Function;

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
    constructN(
        n: number,
        fn: Function
    ): Function;

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
    construct(
        fn: Function
    ): Function;

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
    converge(
        after: Function,
        ...fns: Function[]
    ): Function;

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
    reduce<T, TResult>(
        fn: R.ListIterator<T, TResult>,
        acc: TResult,
        list: R.List<T>
    ): TResult;

    /**
     * @func
     * @memberOf R
     * @category List
     * @see R.reduce
     */
    foldl<T, TResult>(
        fn: R.ListIterator<T, TResult>,
        acc: TResult,
        list: R.List<T>
    ): TResult;


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
    // R.reduce.idx = curry3(function _reduceIdx(fn, acc, list) {
    //     var idx = -1, len = list.length;
    //     while (++idx < len) {
    //         acc = fn(acc, list[idx], idx, list);
    //     }
    //     return acc;
    // });


    /**
     * @func
     * @memberOf R
     * @category List
     * @alias foldl.idx
     * @see R.reduce.idx
     */
    // R.foldl.idx = R.reduce.idx;


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
    reduceRight<T, TResult>(
        fn: R.ListIterator<T, TResult>,
        acc: TResult,
        list: R.List<T>
    ): TResult;

    /**
     * @func
     * @memberOf R
     * @category List
     * @see R.reduceRight
     */
    foldr<T, TResult>(
        fn: R.ListIterator<T, TResult>,
        acc: TResult,
        list: R.List<T>
    ): TResult;

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
    // R.reduceRight.idx = curry3(function _reduceRightIdx(fn, acc, list) {
    //     var idx = list.length;
    //     while (idx--) {
    //         acc = fn(acc, list[idx], idx, list);
    //     }
    //     return acc;
    // });


    /**
     * @func
     * @memberOf R
     * @category List
     * @alias foldr.idx
     * @see R.reduceRight.idx
     */
    // R.foldr.idx = R.reduceRight.idx;


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
    unfoldr<T, TResult>(
        fn: (seed: TResult) => boolean,
        seed: TResult
    ): R.List<TResult>;


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
    map<T, TResult>(
        fn: R.ListIterator<T, TResult>,
        list: R.List<T>
    ): R.List<TResult>;


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
    // R.map.idx = curry2(function _mapIdx(fn, list) {
    //     var idx = -1, len = list.length, result = new Array(len);
    //     while (++idx < len) {
    //         result[idx] = fn(list[idx], idx, list);
    //     }
    //     return result;
    // });


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
    // TODO: consider mapObj.key in parallel with mapObj.idx.  Also consider folding together with `map` implementation.
    mapObj<T, TResult>(
        fn: (el: T) => TResult,
        obj: any
    ): any;


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
    // R.mapObj.idx = curry2(function mapObjectIdx(fn, obj) {
    //     return foldl(function(acc, key) {
    //         acc[key] = fn(obj[key], key, obj);
    //         return acc;
    //     }, {}, keys(obj));
    // });
}

declare module 'ramda' {
    var ramda: RamdaStatic;
    export = ramda;
}




