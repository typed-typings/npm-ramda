declare module H {
    interface ListIterator<T, TResult> {
        (value: T, index: number, list: T[]): TResult;
    }

    interface List<T> {
        [index: number]: T;
        length: number;
    }

    interface ArrayLike {
        nodeType: number;
    }

    interface FuncIndex extends Function {
        (): any;
        idx: Function;
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
            fnArity?: number): any;

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
            fn: H.ListIterator<T, void>,
            list: H.List<T>): H.List<T>;

    clone<T>(
            list: H.List<T>): H.List<T>;


    isEmpty<T>(
            list: H.List<T>): boolean;

    prepend<T>(
            el: T,
            list: H.List<T>): H.List<T>;
    cons<T>(
            el: T,
            list: H.List<T>): H.List<T>;

    head<T>(list: H.List<T>): H.List<T>;
    car<T>(list: H.List<T>): H.List<T>;

    last<T>(list: H.List<T>): H.List<T>;

    tail<T>(list: H.List<T>): H.List<T>;
    cdr<T>(list: H.List<T>): H.List<T>;

    isAtom(x: any): boolean;

    append<T>(
            el: T,
            list: H.List<T>): H.List<T>;
    push<T>(
            el: T,
            list: H.List<T>): H.List<T>;

    concat<T>(
            list1: H.List<T>,
            list2: H.List<T>): H.List<T>;

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
    ): H.List<any>

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
}

declare var R: RamdaStatic;
declare module 'ramda' {
    export = R;
}




