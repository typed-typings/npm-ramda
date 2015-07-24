declare var R: R.Static;

declare module R {

    /**
     * A special placeholder value used to specify "gaps" within curried functions,
     * allowing partial application of any combination of arguments, regardless of their positions.
     */
    interface placeholder {}

    interface ListIterator<T, TResult> {
        (value: T, index: number, list: T[]): TResult;
    }

    interface ObjectIterator<T, TResult> {
        (element: T, key: string, obj: Dictionary<T>): Dictionary<TResult>;
    }
    interface KeyValuePair<K, V> extends Array<K | V> { 0 : K; 1 : V; }

    interface ArrayLike {
        nodeType: number;
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

    interface ObjFunc {
        [index:string]: Function;
    }

    interface ObjFunc2 {
        [index:string]: (x: any, y: any) => boolean;
    }

    interface Pred {
        (...a: any[]): boolean;
    }

    interface ObjPred {
        (value: any, key: string): boolean;
    }

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface CharList extends String {
        push(x: string): void;
    }

    interface Static {
        /*
         * List category
         */


        /**
         * TODO adjust
         */

        /**
         * Returns true if all elements of the list match the predicate, false if there are any that don't.
         */
        all<T>(fn: (a: T) => boolean, list: T[]): boolean;
        all<T>(fn: (a: T) => boolean): (list: T[]) => boolean;

        /**
         * Returns true if at least one of elements of the list match the predicate, false otherwise.
         */
        any<T>(fn: (a: T) => boolean, list: T[]): boolean;
        any<T>(fn: (a: T) => boolean): (list: T[]) => boolean;

        /**
         * Returns a new list, composed of n-tuples of consecutive elements If n is greater than the length of the list, an empty list is returned.
         */
        aperture<T>(n: number, list: T): T[][];
        aperture<T>(n: number): (list: T) => T[][];

        /**
         * Returns a new list containing the contents of the given list, followed by the given element.
         */
        // note U is required (instead of just T) to allow appending an element of a different type than the array is.
        append<T, U>(el: U, list: T[]): T[];
        append<T, U>(el: U): (list: T[]) => T[];

        /**
         * `chain` maps a function over a list and concatenates the results.
         * This implementation is compatible with the Fantasy-land Chain spec
         */
        chain<T, U>(fn: (n: T) => U[], list: T[]): U[];
        chain<T, U>(fn: (n: T) => U[]): (list: T[]) => U[];

        /**
         * Turns a list of Functors into a Functor of a list.
         */
        commute<T, U>(of: (x: T) => U, list: U[]): U;
        commute<T, U>(of: (x: T) => U): (list: U[]) => U;
        commute<T, U>(of: (x: T) => T[], list: U[]): U[]
        commute<T, U>(of: (x: T) => T[]): (list: U[]) => U[]
        /*
         * Turns a list of Functors into a Functor of a list, applying a mapping function to the elements of the list along the way.
         */
        commuteMap<T, U>(fn: (list: T[]) => U[], of: (x: T[]) => U[][], list: T[][]): U[][];
        commuteMap<T, U>(fn: (list: T[]) => U[]): (of: (x: T[]) => U[][], list: T[][]) => U[][];
        commuteMap<T, U>(fn: (list: T[]) => U[], of: (x: T[]) => U[][]): (list: T[][]) => U[][];

        /**
         * Returns a new list consisting of the elements of the first list followed by the elements
         * of the second.
         */
        concat<T>(list1: T[], list2: T[]): T[];
        concat<T>(list1: T[]): (list2: T[]) => T[];
        concat<T>(list1: string, list2: string): string;
        concat<T>(list1: string): (list2: string) => string;

        /**
         * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
         * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
         */
        contains<T>(a: T, list: T[]): boolean;
        contains<T>(a: T): (list: T[]) => boolean;

        /**
         * Returns `true` if the `x` is found in the `list`, using `pred` as an
         * equality predicate for `x`.
         */
        containsWith<T>(pred: (a: T, b: T) => boolean, x: T, list: T[]): boolean;
        containsWith<T>(pred: (a: T, b: T) => boolean, x: T): (list: T[]) => boolean;

        /**
         * Returns a new list containing all but the first n elements of the given list.
         */
        drop<T>(n: number, list: T[]): T[];
        drop<T>(n: number): (list: T[]) => T[];

        /**
         * Returns a new list containing the last n elements of a given list, passing each value to the supplied
         * predicate function, skipping elements while the predicate function returns true.
         */
        dropWhile<T>(fn: (a: T) => boolean, list: T[]): T[];
        dropWhile<T>(fn: (a: T) => boolean): (list: T[]) => T[];

        /**
         * Returns a new list containing only those items that match a given predicate function. The predicate function is passed one argument: (value).
         */
        filter<T>(fn: (value: T) => boolean): (list: T[]) => T[];
        filter<T>(fn: (value: T) => boolean, list: T[]): T[];

        /**
         * Like filter, but passes additional parameters to the predicate function. The predicate function is passed three arguments: (value, index, list).
         */
        filterIndexed<T>(fn: (value: T, index: number, list: T[]) => boolean): (list: T[]) => T[];
        filterIndexed<T>(fn: (value: T, index: number, list: T[]) => boolean, list: T[]): T[];

        /**
         * Returns the first element of the list which matches the predicate, or `undefined` if no
         * element matches.
         */
        find<T>(fn: (a: T) => boolean, list: T[]): T;
        find<T>(fn: (a: T) => boolean): (list: T[]) => T;


        /**
         * Returns the index of the first element of the list which matches the predicate, or `-1`
         * if no element matches.
         */
        findIndex<T>(fn: (a: T) => boolean, list: T[]): number;
        findIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

        /**
         * Returns the last element of the list which matches the predicate, or `undefined` if no
         * element matches.
         */
        findLast<T>(fn: (a: T) => boolean, list: T[]): T;
        findLast<T>(fn: (a: T) => boolean): (list: T[]) => T;

        /**
         * Returns the index of the last element of the list which matches the predicate, or
         * `-1` if no element matches.
         */
        findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
        findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

        /**
         * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
         * them in a new array, depth-first.
         */
        flatten<T>(x: T[]): T[];

        /**
         * Iterate over an input list, calling a provided function fn for each element in the list.
         */
        forEach<T>(fn: (x: T) => void, list: T[]): T[];
        forEach<T>(fn: (x: T) => void): (list: T[]) => T[];

        /**
         * Like forEach, but but passes additional parameters to the predicate function.
         */
        forEachIndexed<T>(fn: (x: T, idx?: number, list?: T[]) => void, list: T[]): T[];
        forEachIndexed<T>(fn: (x: T, idx?: number, list?: T[]) => void): (list: T[]) => T[];

        /**
         * Creates a new object out of a list key-value pairs.
         */
        fromPairs<V>(pairs: KeyValuePair<string, V>[]): {[index: string]: V};
        fromPairs<V>(pairs: KeyValuePair<number, V>[]): {[index: number]: V};


        /**
         * Splits a list into sublists stored in an object, based on the result of
         * calling a String-returning function
         * on each element, and grouping the results according to values returned.
         */
        groupBy<T>(fn: (a: T) => string, list: T[]): {[index: string]: T[]}
        groupBy<T>(fn: (a: T) => string): <T>(list: T[]) => {[index: string]: T[]}

        /**
         * Returns the first element in a list.
         * In some libraries this function is named `first`.
         */
        head<T>(list: T[]): T;

        /**
         * Returns the position of the first occurrence of an item in an array
         * (by strict equality),
         * or -1 if the item is not included in the array.
         */
        indexOf<T>(target: T, list: T[]): number;
        indexOf<T>(target: T): (list: T[]) => number;

        /**
         * Returns all but the last element of a list.
         */
        init<T>(list: T): T[];

        /**
         * Inserts the supplied element into the list, at index index. Note that
         * this is not destructive: it returns a copy of the list with the changes.
         */
        insert(index: number, elt: any, list: any[]): any[];
        insert(index: number): (elt: any, list: any[]) => any[];
        insert(index: number, elt: any): (list: any[]) => any[];

        /**
         * Inserts the sub-list into the list, at index `index`.  _Note  that this
         * is not destructive_: it returns a copy of the list with the changes.
         */
        insertAll(index: number, elts: any[], list: any[]): any[];
        insertAll(index: number): (elts: any[], list: any[]) => any[];
        insertAll(index: number, elts: any[]): (list: any[]) => any[];

        /**
         * Transforms the items of the list with the transducer and appends the transformed items to the accumulator
         * using an appropriate iterator function based on the accumulator type.
         */
        into<T>(acc: any, xf: Function, list: T[]): T[];
        into<T>(acc: any, xf: Function): (list: T[]) => T[];
        into<T>(acc: any): (xf: Function, list: T[]) => T[];


        /**
         * Returns `true` if all elements are unique, otherwise `false`.
         * Uniqueness is determined using strict equality (`===`).
         */
        isSet(list: any[]): boolean;

        /**
         * Returns a string made by inserting the `separator` between each
         * element and concatenating all the elements into a single string.
         */
        join(x: string, xs: any[]): string;
        join(x: string): (xs: any[]) => string;

        /**
         * Returns the last element from a list.
         */
        last<T>(list: T[]): T;

        /**
         * Returns the position of the last occurrence of an item (by strict equality) in
         * an array, or -1 if the item is not included in the array.
         */
        lastIndexOf<T>(target: T, list: T[]): number;

        /**
         * Returns the number of elements in the array by returning list.length.
         */
        length(list: any[]): number;


        /**
         * Returns a new list, constructed by applying the supplied function to every element of the supplied list.
         */
        map<T, U>(fn: (x: T) => U, list: T[]): U[];
        map<T, U>(fn: (x: T) => U, obj: any): any; // used in functors
        map<T, U>(fn: (x: T) => U): (list: T[]) => U[];

        /**
         * The mapAccum function behaves like a combination of map and reduce.
         */
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: T[]): [U, TResult[]];
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): (acc: U, list: T[]) => [U, TResult[]];
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: T[]) => [U, TResult[]];

        /**
         * The mapAccumRight function behaves like a combination of map and reduce.
         */
        mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: T[]): [U, TResult[]];
        mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): (acc: U, list: T[]) => [U, TResult[]];
        mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: T[]) => [U, TResult[]];

        /**
         * Like map, but but passes additional parameters to the mapping function.
         */
        mapIndexed<T, U>(fn: (val: T, key: number, list: T[]) => U, list: T[]): U[];
        mapIndexed<T, U>(fn: (val: T, key: number, list: T[]) => U): (list: T[]) => U[];


        /**
         * Like mapObj, but but passes additional arguments to the predicate function.
         */
        mergeAll(list: any[]): any;

        /**
         * Returns true if no elements of the list match the predicate, false otherwise.
         */
        none<T>(fn: (a: T) => boolean, list: T[]): boolean;
        none<T>(fn: (a: T) => boolean): (list: T[]) => boolean;

        /**
         * Returns the nth element in a list.
         */
        nth<T>(n: number, list: T[]): T;
        nth<T>(n: number): (list: T[]) => T;

        /**
         * Takes a predicate and a list and returns the pair of lists of elements
         * which do and do not satisfy the predicate, respectively.
         */
        partition<T>(fn: (a: T) => boolean, list: T): T[]
        partition<T>(fn: (a: T) => boolean): (list: T) => T[]

        /**
         * Returns a new list by plucking the same named property off all objects in the list supplied.
         */
        pluck(p: string|number, list: any[]): any[];
        pluck(p: string|number): (list: any[]) => any[];

        /**
         * Returns a new list with the given element at the front, followed by the contents of the
         * list.
         */
        prepend<T>(el: T, list: T[]): T[];
        prepend<T>(el: T): (list: T[]) => T[];

        /**
         * Returns a list of numbers from `from` (inclusive) to `to`
         * (exclusive). In mathematical terms, `range(a, b)` is equivalent to
         * the half-open interval `[a, b)`.
         */
        range(from: number, to: number): number[];
        range(from: number): (to: number) => number[];

        /**
         * Returns a single item by iterating through the list, successively calling the iterator
         * function and passing it an accumulator value and the current value from the array, and
         * then passing the result to the next call.
         */
        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: T[]): TResult;
        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, list: T[]) => TResult;
        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: T[]) => TResult;

        /**
         * Like `reduce`, but passes additional parameters to the predicate function.
         */
        reduceIndexed<T, TResult>(fn: (acc: TResult, elem: T, idx: number, list: T[]) => TResult, acc: TResult, list: T[]): TResult;
        reduceIndexed<T, TResult>(fn: (acc: TResult, elem: T, idx: number, list: T[]) => TResult): (acc: TResult, list: T[]) => TResult;
        reduceIndexed<T, TResult>(fn: (acc: TResult, elem: T, idx: number, list: T[]) => TResult, acc: TResult): (list: T[]) => TResult;

        /**
         * Returns a single item by iterating through the list, successively calling the iterator
         * function and passing it an accumulator value and the current value from the array, and
         * then passing the result to the next call.
         */
        reduceRight<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: T[]): TResult;
        reduceRight<T, TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, list: T[]) => TResult;
        reduceRight<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: T[]) => TResult;

        /**
         * Like `reduceRight`, but passes additional parameters to the predicate function. Moves through
         * the input list from the right to the left.
         */
        reduceRightIndexed<T, TResult>(fn: (acc: TResult, elem: T, idx: Number, list: T[]) => TResult, acc: TResult, list: T[]): TResult;
        reduceRightIndexed<T, TResult>(fn: (acc: TResult, elem: T, idx: Number, list: T[]) => TResult): (acc: TResult, list: T[]) => TResult;
        reduceRightIndexed<T, TResult>(fn: (acc: TResult, elem: T, idx: Number, list: T[]) => TResult, acc: TResult): (list: T[]) => TResult;

        /**
         * Similar to `filter`, except that it keeps only values for which the given predicate
         * function returns falsy.
         */
        reject<T>(fn: (value: T) => boolean, list: T[]): T[];
        reject<T>(fn: (value: T) => boolean): (list: T[]) => T[];

        /**
         * Like `reject`, but passes additional parameters to the predicate function.
         */
        rejectIndexed<T>(fn: (value: T, index: number, list: T[]) => boolean, list: T[]): T[];
        rejectIndexed<T>(fn: (value: T, index: number, list: T[]) => boolean): (list: T[]) => T[];

        /**
         * Removes the sub-list of `list` starting at index `start` and containing `count` elements.
         */
        remove<T>(start: number, count: number, list: T[]): T[];
        remove<T>(start: number): (count: number, list: T[]) => T[];
        remove<T>(start: number, count: number): (list: T[]) => T[];

        /**
         * Returns a fixed list of size n containing a specified identical value.
         */
        repeat<T>(a: T, n: number): T[];
        repeat<T>(a: T): (n: number) => T[];

        /**
         * Returns a new list with the same elements as the original list, just in the reverse order.
         */
        reverse<T>(list: T[]): T[];

        /**
         * Scan is similar to reduce, but returns a list of successively reduced values from the left.
         */
        scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: T[]): TResult;
        scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, list: T[]) => TResult;
        scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: T[]) => TResult;

        /**
         * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
         */
        slice(a: number, b: number, list: string): string;
        slice<T>(a: number, b: number, list: T[]): T[];
        slice<T>(a: number, b: number): (list: string|T[]) => string|T[];
        slice<T>(a: number): (b: number, list: string|T[]) => string|T[];

        /**
         * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
         * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
         * if they are equal.
         */
        sort<T>(fn: (a: T, b: T) => number, list: T[]): T[];
        sort<T>(fn: (a: T, b: T) => number): (list: T[]) => T[];

        /**
         * Returns all but the first element of a list.
         */
        tail<T>(list: T[]): T[];

        /**
         * Returns a new list containing the first `n` elements of the given list.  If
         * `n > * list.length`, returns a list of `list.length` elements.
         */
        take<T>(n: number, list: T[]): T[];
        take<T>(n: number): (list: T[]) => T[];

        /**
         * Returns a new list containing the first `n` elements of a given list, passing each value
         * to the supplied predicate function, and terminating when the predicate function returns
         * `false`.
         */
        takeWhile<T>(fn: (x: T) => boolean, list: T[]): T[];
        takeWhile<T>(fn: (x: T) => boolean): (list: T[]) => T[];

        /**
         * Calls an input function `n` times, returning an array containing the results of those
         * function calls.
         */
        times<T>(fn: (i: number) => T, n: number): T[];
        times<T>(fn: (i: number) => T): (n: number) => T[];

        /**
         * Initializes a transducer using supplied iterator function. Returns a single item by iterating through the
         * list, successively calling the transformed iterator function and passing it an accumulator value and the
         * current value from the array, and then passing the result to the next call.
         */
        transduce<T,U>(xf: (arg: T[]) => T[], fn: (acc: U[], val: U) => U[], acc: T[], list: T[]): U;
        transduce<T,U>(xf: (arg: T[]) => T[]): (fn: (acc: U[], val: U) => U[], acc: T[], list: T[]) => U;
        transduce<T,U>(xf: (arg: T[]) => T[], fn: (acc: U[], val: U) => U[]): (acc: T[], list: T[]) => U;
        transduce<T,U>(xf: (arg: T[]) => T[], fn: (acc: U[], val: U) => U[], acc: T[]): (list: T[]) => U;

        /**
         * Builds a list from a seed value. Accepts an iterator function, which returns either false
         * to stop iteration or an array of length 2 containing the value to add to the resulting
         * list and the seed to be used in the next call to the iterator function.
         */
        unfold<T, TResult>(fn: (seed: T) => TResult, seed: T): TResult[];
        unfold<T, TResult>(fn: (seed: T) => TResult): (seed: T) => TResult[];

        /**
         * Returns a new list containing only one copy of each element in the original list.
         */
        uniq<T>(list: T[]): T[];

        /**
         * Returns a new list containing only one copy of each element in the original list, based upon the value
         * returned by applying the supplied predicate to two list elements.
         */
        uniqWith<T,U>(pred: (x: T, y: T) => boolean, list: T[]): T[];
        uniqWith<T,U>(pred: (x: T, y: T) => boolean): (list: T[]) => T[];

        /**
         * Returns a new list by pulling every item at the first level of nesting out, and putting
         * them in a new array.
         */
        unnest<T>(x: T[]): T[];

        /**
         * Creates a new list out of the two supplied by creating each possible pair from the lists.
         */
        xprod<K,V>(as: K[], bs: V[]): KeyValuePair<K,V>[];
        xprod<K,V>(as: K[]): (bs: V[]) => KeyValuePair<K,V>[];

        /**
         * Creates a new list out of the two supplied by pairing up equally-positioned items from
         * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
         */
        zip<K,V>(list1: K[], list2: V[]): KeyValuePair<K,V>[];
        zip<K,V>(list1: K[]): (list2: V[]) => KeyValuePair<K,V>[];

        /**
         * Creates a new object out of a list of keys and a list of values.
         */
        // TODO: Dictionary<T> as a return value is to specific, any seems to loose
        zipObj<T>(keys: string[], values: T[]): any;
        zipObj<T>(keys: string[]): (values: T[]) => any;

        /**
         * Creates a new list out of the two supplied by applying the function to each
         * equally-positioned pair in the lists.
         */
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[], list2: U[]): TResult[];
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[]): (list2: U[]) => TResult[];
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): (list1: T[], list2: U[]) => TResult[];

        /*
         * Object category
         */

        /**
         * Makes a shallow clone of an object, setting or overriding the specified property with the given value.
         */
        assoc(prop: string, val: any, obj: any): any;
        assoc(prop: string): (val: any, obj: any) => any;
        assoc(prop: string, val: any): (obj: any) => any;

        /**
         * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and
         * placing the specific value at the tail end of that path.
         */
        assocPath(path: string[], val: any, obj: any): any;
        assocPath(path: string[]): (val: any, obj: any) => any;
        assocPath(path: string[], val: any): (obj: any) => any;

        // assoc(prop: string, val: placeholder, obj: any): (val: any) => any;
        // assoc(prop: string, val: any, obj: placeholder): (obj: any) => any;
        // assoc(prop: placeholder, val: placeholder, obj: any): (prop:string, val: any) => any;
        // assoc(prop: placeholder, val: any, obj: placeholder): (prop:string, obj: any) => any;
        // assoc(prop: placeholder, val: any, obj: any): (prop:string) => any;


        /**
         * Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.
         */
        clone(value: any): any;
        clone(value: any[]): any[];

        /**
         * Creates an object containing a single key:value pair.
         */
        createMapEntry<T>(key: string, val: T): {[index: string]: T};
        createMapEntry<T>(key: placeholder, val: T): (key: string) => {[index: string]: T};
        createMapEntry<T>(key: string): (val: T) => {[index: string]: T};

        /**
         * Returns a new object that does not contain a `prop` property.
         */
        dissoc(prop: string, obj: any): any
        dissoc(prop: string): (obj: any) => any

        /**
         * Returns a new object that does not contain a prop property.
         */
        dissoc(prop: string, obj: any): any;
        dissoc(prop: placeholder, obj: any): (prop: string) => any;
        dissoc(prop: string): (obj: any) => any;

        /**
         * Makes a shallow clone of an object, omitting the property at the given path.
         */
        dissocPath(path: string[], obj: any): any;
        dissocPath(path: string[]): (obj: any) => any;

        /**
         * Reports whether two functions have the same value for the specified property.
         */
        eqProps(prop: string, obj1: any, obj2: any): boolean;
        eqProps(prop: string): (obj1: any, obj2: any) => boolean;
        eqProps(prop: string, obj1: any): (obj2: any) => boolean;

        /**
         * Creates a new object by evolving a shallow copy of object, according to the transformation functions.
         */
        evolve(transformations: {[index: string]: (value: any) => any}, obj: any): any;

        /**
         * Returns a list of function names of object's own functions
         */
        functions(obj: any): string[];

        /**
         * Returns a list of function names of object's own and prototype functions
         */
        functionsIn(obj: any): string[];

        /**
         * Returns whether or not an object has an own property with the specified name.
         */
        has(s: string, obj: any): boolean;
        has(s: string): (obj: any) => boolean;
        has(s: placeholder, obj: any): (a: string) => boolean;

        /**
         * Returns whether or not an object or its prototype chain has a property with the specified name
         */
        hasIn(s: string, obj: any): boolean;
        hasIn(s: string): (obj: any) => boolean;
        hasIn(s: placeholder, obj: any): (a: string) => boolean;

        /**
         * Same as R.invertObj, however this accounts for objects with duplicate values by putting the values into an array.
         */
        invert(obj: any): {[index:string]: string[]};

        /**
         * Returns a new object with the keys of the given object as values, and the values of the given object as keys.
         */
        invertObj(obj: any): {[index:string]: string};
        invertObj(obj: {[index: number]: string}): {[index:string]: string};

        /**
         * Returns the result of applying obj[methodName] to args.
         */
        invoke(methodName: string, args: any[], obj: any): any;
        // invoke(methodName: string): (args: any[]) => (obj: any) => any;
        invoke(methodName: string): (args: any[], obj: any) => any;
        invoke(methodName: string, args: any[]): (obj: any) => any;

        /**
         * Returns a list containing the names of all the enumerable own
         * properties of the supplied object.
         */
        keys(x: any): string[];

        /**
         * Returns a list containing the names of all the
         * properties of the supplied object, including prototype properties.
         */
        keysIn(obj: any): string[];


        /**
         * Creates a lens. Supply a function to get values from inside an object,
         * and a set function to change values on an object.
         */
        lens(get: Function, set: Function): {
            <T>(obj: T|T[]): T;
            set<T,U,V>(val: T, obj: U|U[]): V|V[];
            /*map<T>(fn: Function, obj: T|T[]): T|T[]*/
        };


        /**
         * Creates a lens that will focus on index n of the source array.
         */
        lensIndex(n: number): {
            <T>(list: T[]): T;
            set<T,U,V>(str: T, list: U[]): V[];
            /*map<T>(fn: (x: T) => T, list: T[]): T[]*/
        };

        /**
         * lensProp creates a lens that will focus on property k of the source object.
         */
        lensProp(str: string): {
            <T, U>(obj: T): U;
            set<T,U,V>(val: T, obj: U): V;
            /*map<T>(fn: Function, obj: T): T*/
        }

        mapObj<T, TResult>(fn: (value: T) => TResult, obj: any): {[index: string]: TResult};
        mapObj<T, TResult>(fn: (value: T) => TResult): (obj: any) => {[index: string]: TResult};

        /**
         * Like mapObj, but but passes additional arguments to the predicate function.
         */
        mapObjIndexed<T, TResult>(fn: (value: T, key: string, obj?: any) => TResult, obj: any): {[index:string]: TResult};
        mapObjIndexed<T, TResult>(fn: (value: T, key: string, obj?: any) => TResult): (obj: any) => {[index:string]: TResult};


        /**
         * Create a new object with the own properties of a
         * merged with the own properties of object b.
         * This function will *not* mutate passed-in objects.
         */
        merge(a: any, b: any): any;
        merge(a: any): (b: any) => any;

        /**
         * Returns a partial copy of an object omitting the keys specified.
         */
        omit<T>(names: string[], obj: T): T;
        omit<T>(names: string[]): (obj: T) => T;

        /**
         * Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value.
         */
        over<T>(lens: {
                    <T>(obj: T|T[]): T;
                    set<T,U,V>(val: T, obj: U|U[]): V|V[]},
                fn: Arity1Fn, value: T[]): T[];

        /**
         * Retrieve the value at a given path.
         */
        path<T>(path: string[], obj: any): T;
        path<T>(path: placeholder, obj: any): (path: string[]) => T;
        path<T>(path: string[]): (obj: any) => T;


        /**
         * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
         * property is ignored.
         */
        pick<T>(names: string[], obj: T): T;
        pick<T>(names: string[]): (obj: T) => T;

        /**
         * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
         */
        pickAll<T, U>(names: string[], obj: T): U;
        pickAll<T, U>(names: string[]): (obj: T) => U;

        /**
         * Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.
         */
        pickBy<T,U>(pred: ObjPred, obj: T): U;
        pickBy<T,U>(pred: ObjPred): (obj: T) => U;

        /**
         * Reasonable analog to SQL `select` statement.
         */
        project<T,U>(props: string[], objs: T[]): U[];

        /**
         * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
         */
        prop<T,U>(p: string, obj: T): U;
        prop<T,U>(p: string): (obj: T) => U;

        /**
         * If the given, non-null object has an own property with the specified name, returns the value of that property.
         * Otherwise returns the provided default value.
         */
        propOr<T,U,V>(val: T, p: string, obj: U): V;
        propOr<T,U,V>(val: T, p: string): (obj: U) => V;
        propOr<T,U,V>(val: T): (p: string, obj: U) => V;

        /**
         * Returns the value at the specified property.
         * The only difference from `prop` is the parameter order.
         */
        props<T>(ps: string[], obj: Dictionary<T>): T[];
        props<T>(ps: string[]): (obj:  Dictionary<T>) => T[];

        /**
         * Converts an object into an array of key, value arrays.
         * Only the object's own properties are used.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         */
        toPairs(obj: any): any[][];

        /**
         * Converts an object into an array of key, value arrays.
         * The object's own properties and prototype properties are used.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         */
        toPairsIn(obj: any): any[][];

        /**
         * Returns a list of all the enumerable own properties of the supplied object.
         * Note that the order of the output array is not guaranteed across
         * different JS platforms.
         */
        values<T>(obj: {[index: string]: T}): T[];
        values(obj: any): any[];

        /**
         * Returns a list of all the properties, including prototype properties, of the supplied
         * object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.
         */
        valuesIn(obj: any): any[];

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
        */
       where<T>(spec: T, testObj: T): boolean;
       where<T>(spec: T): (testObj: T) => boolean;
       where<ObjFunc2,U>(spec: ObjFunc2, testObj: U): boolean;
       where<ObjFunc2,U>(spec: ObjFunc2): (testObj: U) => boolean;

       /**
        * Takes a spec object and a test object; returns true if the test satisfies the spec,
        * false otherwise. An object satisfies the spec if, for each of the spec's own properties,
        * accessing that property of the object gives the same value (in R.eq terms) as accessing
        * that property of the spec.
        */
       whereEq<T,U>(spec: T, obj: U): boolean;
       whereEq<T,U>(spec: T): (obj: U) => boolean;


       /*
        * Function category
        * -----------------
        */

       __: placeholder;

       /**
        * Creates a new list iteration function from an existing one by adding two new parameters to its callback
        * function: the current index, and the entire list.
        */
        addIndex<T, U>(fn: (f: (item: T) => U, list: T[]) => U[]): (fn: (item: T, idx: number, list?: T[]) => U, list: T[]) => U[];

       /**
        * Returns a function that always returns the given value.
        */
        always(val: any): Function;

        /**
         * ap applies a list of functions to a list of values.
         */
         ap(fns: Function[], vs: any[]): any[];
         ap(fns: Function[]): Function;

        /**
         * Applies function fn to the argument list args. This is useful for creating a fixed-arity function from
         * a variadic function. fn should be a bound function if context is significant.
         */
        apply<T, U, TResult>(fn: (arg0: T, ...args: T[]) => TResult, args: U[]): TResult;
        apply<T, U, TResult>(fn: (arg0: T, ...args: T[]) => TResult): (args: U[]) => TResult;

        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
         * parameters. Unlike `nAry`, which passes only `n` arguments to the wrapped function,
         * functions produced by `arity` will pass all provided arguments to the wrapped function.
         */
        arity(n: number, fn: (...args: any[]) => any): Function;

        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly 2
         * parameters. Any extraneous parameters will not be passed to the supplied function.
         */
        binary(fn: (...args: any[]) => any): Function;

        bind<T>(thisObj: T, fn: (...args: any[]) => any): (...args: any[]) => any;

        /**
         * TODO call
         */

        /**
         * Makes a comparator function out of a function that reports whether the first element is less than the second.
         */
        comparator(pred: (a: any, b: any) => boolean): (x: number, y: number) => number;

        /**
         * Creates a new function that runs each of the functions supplied as parameters in turn,
         * passing the return value of each function invocation to the next function invocation,
         * beginning with whatever arguments were passed to the initial invocation.
        */
        // TODO composeL
        compose<T>(fn: T, ...fns: Function[]): T;
        /*compose<T, U, V, W>(fn: (...args: T[])=> W, ...fns: ((...args: U[]) => V)[]): (...arg3: T[])=> V;*/

        /**
         * TODO composeP
         */

        construct(fn: Function): Function;

        constructN(n: number, fn: Function): Function;

        converge(after: Function, ...fns: Function[]): Function;

        curry(fn: Function): Function

        curryN(lenght: number, fn: (...args: any[]) => any): Function;

        /**
         * `empty` wraps any object in an array. This implementation is compatible with the
         * Fantasy-land Monoid spec, and will work with types that implement that spec.
         */
        empty(x: any): any[];

        F(): boolean;

        /**
         * Returns a new function much like the supplied one, except that the first two arguments'
         * order is reversed.
         */
        flip<T,U,TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
        flip<T,U,TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (arg1: U, arg0?: T, ...args: any[]) => TResult;

        /**
         * A function that does nothing but return the parameter supplied to it. Good as a default
         * or placeholder function.
         */
        identity(a: any): any;

        /**
         * Turns a named method of an object (or object prototype) into a function that can be
         * called directly. Passing the optional `len` parameter restricts the returned function to
         * the initial `len` parameters of the method.
         *
         * The returned function is curried and accepts `len + 1` parameters (or `method.length + 1`
         * when `len` is not specified), and the final parameter is the target object.
         */
        invoker(name: string, obj: any, len?: number): Function;


        lift(fn: Function, ...args: any[]): any;

        liftN(n: number, fn: Function, ...args: any[]): any;


        memoize(fn: Function): Function;

        nAry(n: number, fn: (...arg: any[]) => any): Function;

        /**
         * TODO nthArg
         */

        of<T>(x: T): T[];
        of<T>(x: T[]): T[][];

        once(fn: Function): Function;


        /**
         * Accepts as its arguments a function and any number of values and returns a function that,
         * when invoked, calls the original function with all of the values prepended to the
         * original function's arguments list. In some libraries this function is named `applyLeft`.
         */
        partial(fn: Function, ...args: any[]): Function;

        /**
         * Accepts as its arguments a function and any number of values and returns a function that,
         * when invoked, calls the original function with all of the values appended to the original
         * function's arguments list.
         */
        partialRight(fn: Function, ...args: any[]): Function;

        /**
         * Creates a new function that runs each of the functions supplied as parameters in turn,
         * passing the return value of each function invocation to the next function invocation,
         * beginning with whatever arguments were passed to the initial invocation.
         */
        pipe<T>(fn1: T): T;
        pipe<T>(fn1: Function, fn2: T): T;
        pipe<T>(fn1: Function, fn2: Function, fn3: T): T;
        pipe<T>(fn1: Function, fn2: Function, fn3: Function, fn4: T): T;
        pipe<T>(fn1: Function, fn2: Function, fn3: Function, fn4: Function, fn5: T): T;
        pipe<T>(fn1: Function, fn2: Function, fn3: Function, fn4: Function, fn5: Function, fn6: T): T;
        pipe<T>(fn1: Function, fn2: Function, fn3: Function, fn4: Function, fn5: Function, fn6: Function, fn7: T): T;
        pipe<T>(fn1: Function, fn2: Function, fn3: Function, fn4: Function, fn5: Function, fn6: Function, fn7: Function, fn8: T): T;



        // Object Functions
        // ----------------
        //
        // These functions operate on plain Javascript object, adding simple functions to test properties on these
        // objects.  Many of these are of most use in conjunction with the list functions, operating on lists of
        // objects.


        op(fn: (a: any, b: any) => any): Function;

        substring(indexA: number, indexB: number, str: string): string;
        substringFrom(indexA: number, str: string): string;
        substringTo(indexA: number, str: string): string;

        isArrayLike(val: any): boolean;

        op(fn: Function): Function;



        unary<T>(fn: (a: T, ...args: any[]) => any): (a: T) => any




        /**
         * Accepts a function `fn` and any number of transformer functions and returns a new
         * function. When the new function is invoked, it calls the function `fn` with parameters
         * consisting of the result of calling each supplied handler on successive arguments to the
         * new function. For example:
         */
        useWith(fn: Function, ...transformers: Function[]): Function;








        /**
         * Returns a fixed list of size `n` containing a specified identical value.
         */
        repeatN<T>(value: T, n: number): T[];


        wrap(fn: Function, wrapper: Function): Function;




        /*
         * List category
         * -------------
         */



        // flip<T,U,TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (arg1: U, arg0: T) => ((...args: any[]) => TResult);
        // flip<T,U,TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (arg1: U) => ((arg0: T, ...args: any[]) => TResult);




        /**
         * `of` wraps any object in an Array. This implementation is compatible with the
         * Fantasy-land Applicative spec, and will work with types that implement that spec.
         * Note this `of` is different from the ES6 `of`; See
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
         */
        of(x: any): any[];






        /**
         * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
         * them in a new array, depth-first.
         */
        // checked
        flatten(x: any[]): any[];

        /**
         * Calls the specified function on the supplied object. Any additional arguments
         * after `fn` and `obj` are passed in to `fn`. If no additional arguments are passed to `func`,
         * `fn` is invoked with no arguments.
         */
        func(funcName: string , obj: any): any;



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
         */
        installTo(obj: any): any;


        /**
         * See if an object (`val`) is an instance of the supplied constructor.
         * This function will check up the inheritance chain, if any.
         */
        is(ctor: any, val: any): boolean;
        is(ctor: any): (val: any) => boolean;


        /**
         * A function that always returns `0`. Any passed in parameters are ignored.
         */
        alwaysZero(): number;


        /**
         * A function that always returns `false`. Any passed in parameters are ignored.
         */
        alwaysFalse(): boolean;


        /**
         * A function that always returns `true`. Any passed in parameters are ignored.
         */
        alwaysTrue(): boolean;

        /**
         * Logic Functions
         * ---------------
         */

        /**
         * Given a list of predicates, returns a new predicate that will be true exactly when all of them are.
         */
        allPass(preds: Pred[]): Pred;

        /**
         * A function that returns the first argument if it's falsy otherwise the second argument. Note that this is
         * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
         */
        and<T extends {and?: Function;}>(fn1: T, val2: boolean|any): boolean;
        and<T extends {and?: Function;}>(fn1: T): (val2: boolean|any) => boolean;

        /**
         * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
         */
        anyPass(preds: Pred[]): Pred;

        /**
         * A function wrapping calls to the two functions in an && operation, returning the result of the first function
         * if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning
         * that the second function will not be invoked if the first returns a false-y value.
         */
        both(pred1: Pred, pred2: Pred): Pred;
        both(pred1: Pred): (pred2: Pred) => Pred;

        /**
         * Takes a function f and returns a function g such that:
         * - applying g to zero or more arguments will give true if applying the same arguments to f gives
         *   a logical false value; and
         * - applying g to zero or more arguments will give false if applying the same arguments to f gives
         *   a logical true value.
         */
        complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean

        /**
         * Returns a function, fn, which encapsulates if/else-if/else logic. Each argument to R.cond is a
         * [predicate, transform] pair. All of the arguments to fn are applied to each of the predicates in
         * turn until one returns a "truthy" value, at which point fn returns the result of applying its
         * arguments to the corresponding transformer. If none of the predicates matches, fn returns undefined.
         */
        cond(fn: [Pred, Function], ...fns: [Pred, Function][]): Function;

        /**
         * Returns the second argument if it is not null or undefined. If it is null or undefined, the
         * first (default) argument is returned.
         */
        defaultTo<T,U>(a: T, b: U): T|U
        defaultTo<T>(a: T): <U>(b: U) => T|U

        /**
         * A function wrapping calls to the two functions in an || operation, returning the result of the first
         * function if it is truth-y and the result of the second function otherwise. Note that this is
         * short-circuited, meaning that the second function will not be invoked if the first returns a truth-y value.
         */
        either(pred1: Pred, pred2: Pred): Pred;
        either(pred1: Pred): (pred2: Pred) => Pred;

        /**
         * Creates a function that will process either the onTrue or the onFalse function depending upon the result
         * of the condition predicate.
         */
        ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;

        /**
         * Reports whether the list has zero elements.
         */
        isEmpty(value: string|any[]): boolean;

        /**
         * A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
         * underlying function would return a false-y value, and `false` when it would return a truth-y one.
         */
        not(value: any): boolean;

        /**
         * A function that returns the first truthy of two arguments otherwise the last argument. Note that this is
         * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
         */
        or<T extends {or?: Function;}>(fn1: T, val2: boolean|any): boolean;
        or<T extends {or?: Function;}>(fn1: T): (val2: boolean|any) => boolean;



        /**
         * Math category
         * -------------
         */

        /**
         * Adds two numbers (or strings). Equivalent to a + b but curried.
         */
        add(a: number, b: number): number;
        add(a: string, b: string): string;
        add(a: number): (b: number) => number;
        add(a: string): (b: string) => string;

        /**
         * Decrements its argument.
         */
        dec(n: number): number;

        /**
         * Divides two numbers. Equivalent to a / b.
         */
        divide(a: number, b: number): number;
        divide(a: number): (b: number) => number;
        divide(a: placeholder, b: number): (b: number) => number;

        /**
         * Returns true if the first parameter is greater than the second.
         */
        gt(a: number, b: number): boolean;
        gt(a: number): (b: number) => boolean;
        gt(a: placeholder, b: number): (b: number) => boolean;

        /**
         * Returns true if the first parameter is greater than or equal to the second.
         */
        gte(a: number, b: number): boolean;
        gte(a: number): (b: number) => boolean;
        gte(a: placeholder, b: number): (b: number) => boolean;

        /**
         * Increments its argument.
         */
        inc(n: number): number;

        /**
         * Returns true if the input value is NaN.
         */
        isNaN(x: any): boolean;

        /**
         * Returns true if the first parameter is less than the second.
         */
        lt(a: number, b: number): boolean;
        lt(a: number): (b: number) => boolean;
        lt(a: placeholder, b: number): (b: number) => boolean;

        /**
         * Returns true if the first parameter is less than or equal to the second.
         */
        lte(a: number, b: number): boolean;
        lte(a: number): (b: number) => boolean;
        lte(a: placeholder, b: number): (b: number) => boolean;

        /**
         * mathMod behaves like the modulo operator should mathematically, unlike the `%`
         * operator (and by extension, R.modulo). So while "-17 % 5" is -2,
         * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
         * when the modulus is zero or negative.
         */
        mathMod(a: number, b: number): number;
        mathMod(a: number): (b: number) => number;
        mathMod(a: placeholder, b: number): (a: number) => number;

        /**
         * Determines the largest of a list of numbers (or elements that can be cast to numbers)
         */
        max(list: number[]): number;

        /**
         * Determines the largest of a list of items as determined by pairwise comparisons from the supplied comparator.
         */
        maxBy<T>(keyFn: (a: T) => number, list: T[]): T;
        maxBy<T>(keyFn: (a: T) => number): (list: T[]) => T;

        /**
         * Determines the smallest of a list of numbers (or elements that can be cast to numbers)
         */
        min(list: number[]): number;

        /**
         * Determines the smallest of a list of items as determined by pairwise comparisons from the supplied comparator.
         */
        minBy<T>(keyFn: (a: T) => number, list: T[]): T;
        minBy<T>(keyFn: (a: T) => number): (list: T[]) => T;

        /**
         * Divides the second parameter by the first and returns the remainder.
         * The flipped version (`moduloBy`) may be more useful curried.
         * Note that this functions preserves the JavaScript-style behavior for
         * modulo. For mathematical modulo see `mathMod`
         */
        modulo(a: number, b: number): number;
        modulo(a: placeholder, b: number): (a: number) => number;
        modulo(a: number): (b: number) => number;

        /**
         * Multiplies two numbers. Equivalent to a * b but curried.
         */
        multiply(a: number, b: number): number;
        multiply(a: number): (b: number) => number;
        multiply(a: placeholder, b: number): (a: number) => number;

        /**
         * Negates its argument.
         */
        negate(n: number): number;

        /**
         * Multiplies together all the elements of a list.
         */
        product(list: number[]): number;

        /**
         * Subtracts two numbers. Equivalent to `a - b` but curried.
         */
        subtract(a: number, b: number): number;
        subtract(a: placeholder, b: number): (a: number) => number;
        subtract(a: number): (b: number) => number;

        /**
         * Adds together all the elements of a list.
         */
        sum(list: number[]): number;

        /*
         * String Functions
         */

        /**
         * Returns a string containing the characters of str from fromIndex (inclusive) to toIndex (exclusive).
         */
        substring(indexA: number, indexB: number, str: string): string;
        substring(indexA: number): (indexB: number, str: string) => string;
        substring(indexA: number, indexB: number): (str: string) => string;


        /**
         * The trailing substring of a String starting with the nth character:
         */
        substringFrom(indexA: number, str: string): string;
        substringFrom(indexA: number): (str: string) => string;

        /**
         * Replace a substring or regex match in a string with a replacement.
         */
        replace(pattern: RegExp, replacement: string, str: string): string;
        replace(pattern: RegExp, replacement: string): (str: string) => string;
        replace(pattern: RegExp): (replacement: string, str: string) => string;
        replace(pattern: String, replacement: string, str: string): string;
        replace(pattern: String, replacement: string): (str: string) => string;
        replace(pattern: String): (replacement: string, str: string) => string;

        /**
         * Returns a string containing the first toIndex characters of str.
         */
        substringTo(toIndex: number, str: string): string;
        substringTo(toIndex: number): (str: string) => string;


        /**
         * Returns the nth character of the given string.
         */
        nthChar(index: number, str: string): string;


        /**
         * Returns the character code of the nth character of the given string.
         */
        nthCharCode(index: number, str: string): number;


        /**
         * Tests a regular expression agains a String
         */
        match(regexp: RegExp, str: string): any[];


        /**
         * Finds the first index of a substring in a string, returning -1 if it's not present
         */
        strIndexOf(c: string, str: string): number;


        /**
         * Finds the last index of a substring in a string, returning -1 if it's not present
         */
        strLastIndexOf(c: string, str: string): number;


        /**
         * The upper case version of a string.
         */
        toUpper(str: string): string;


        /**
         * The lower case version of a string.
         */
        toLower(str: string): string;


        /**
         * Splits a string into an array of strings based on the given
         * separator.
         */
        split(sep: string, str: string): string[];

        // Data Analysis and Grouping Functions
        // ------------------------------------
        //
        // Functions performing SQL-like actions on lists of objects.  These do
        // not have any SQL-like optimizations performed on them, however.

        // --------

        /*
         * Relation category
         */

        /**
         * Counts the elements of a list according to how many match each value
         * of a key generated by the supplied function. Returns an object
         * mapping the keys produced by `fn` to the number of occurrences in
         * the list. Note that all keys are coerced to strings because of how
         * JavaScript objects work.
         */
        countBy(fn: (a: any) => string|number, list: any[]): any;
        countBy(fn: (a: any) => string|number): (list: any[]) => any;

        /**
         * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
         */
        difference<T>(list1: T[], list2: T[]): T[];


        /**
         * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
         * Duplication is determined according to the value returned by applying the supplied predicate to two list
         * elements.
         */
        differenceWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[];

        /**
         * Tests if two items are equal.  Equality is strict here, meaning reference equality for objects and
         * non-coercing equality for primitives.
         */
        eq<T>(a: T, b: T): boolean;
        eq<T>(a: T): (b: T) => boolean;

        /**
         * Returns true if its arguments are equivalent, false otherwise. Dispatches to an equals method if present.
         * Handles cyclical data structures.
         */
        equals<T>(a: T, b: T): boolean;
        equals<T>(a: T): (b: T) => boolean;


        /**
         * Returns true if its arguments are identical, false otherwise. Values are identical if they reference the
         * same memory. NaN is identical to NaN; 0 and -0 are not identical.
         */
        identical<T>(a: T, b: T): boolean;
        identical<T>(a: T): (b: T) => boolean;


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
         */
        intersection<T>(list1: T[], list2: T[]): T[];


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of those
         * elements common to both lists.  Duplication is determined according
         * to the value returned by applying the supplied predicate to two list
         * elements.
         */
        intersectionWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[];

        /**
         * Determines whether a nested path on an object has a specific value,
         * in `R.equals` terms. Most likely used to filter a list.
         */
        pathEq(path: string[], val: any, obj: any): boolean;
        pathEq(path: string[], val: any): (obj: any) => boolean;
        pathEq(path: string[]): (val: any, obj: any) => boolean;
        pathEq(path: string[]): (val: any) => (obj: any) => boolean;

        /**
         * Determines whether the given property of an object has a specific
         * value according to strict equality (`===`).  Most likely used to
         * filter a list.
         */
        propEq<T>(name: string, val: T, obj: any): boolean;
        propEq<T>(name: number, val: T, obj: any): boolean;
        propEq<T>(name: string, val: T): (...args: any[]) => boolean;
        propEq<T>(name: number, val: T): (...args: any[]) => boolean;
        propEq<T>(name: string): (val: T, ...args: any[]) => boolean;
        propEq<T>(name: number): (val: T, ...args: any[]) => boolean;




        /**
         * Sorts the list according to a key generated by the supplied function.
         */
        sortBy<T>(fn: (a: any) => string, list: T[]): T[];
        sortBy<T>(__: placeholder, list: T[]): T[];
        sortBy<T>(fn: (a: any) => string): (list: T[]) => T[];


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of the
         * elements of each list.
         */
        union<T>(as: T[], bs: T[]): T[];


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
         * determined according to the value returned by applying the supplied predicate to two list elements.
         */
        unionWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[];


        eq<T,U>(a: T, b: U): boolean;



        T(): boolean;


    }
}

declare module 'ramda' {
    export = R;
}
