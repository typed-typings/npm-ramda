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

    identity(a: any): any;
    I(a: any): any;

    times(
            fn: (i: number) => any,
            n: number): H.List<any>

                        repeatN(
                                value: number,
                                n: number): any[];

    compose(
            ...Functions: Function[]): Function;

    pipe(
            ...Functions: Function[]): Function;

    flip(
            fn: (arg0: any, ...args: any[]) => any): Function
}

declare var R: RamdaStatic;
declare module 'ramda' {
    export = R;
}




