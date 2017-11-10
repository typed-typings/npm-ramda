import { Property, Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const memoizeWith: memoizeWith_00;
type memoizeWith_00 = {
    /**
     * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
     * additional function that will be applied to a given argument set and used to
     * create the cache key under which the results of the function to be memoized
     * will be stored. Care must be taken when implementing key generation to avoid
     * clashes that may overwrite previous entries erroneously.
     *
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Function
     * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
     * @param {Function} fn The function to generate the cache key.
     * @param {Function} fn The function to memoize.
     * @return {Function} Memoized version of `fn`.
     * @see R.memoize
     * @example
     *
     *      let count = 0;
     *      const factorial = R.memoizeWith(R.identity, n => {
     *        count += 1;
     *        return R.product(R.range(1, n + 1));
     *      });
     *      factorial(5); //=> 120
     *      factorial(5); //=> 120
     *      factorial(5); //=> 120
     *      count; //=> 1
     */
    (cacheKey: Variadic<Property>): memoizeWith_10;
    <T extends Function>(_cacheKey: PH, fn: T): memoizeWith_01<T>;
    <$SEL extends "11">(): <T extends Function>(cacheKey: Variadic<Property>, fn: T) => memoizeWith_11<T>;
    <$SEL extends "01">(): <T extends Function>(_cacheKey: PH, fn: T) => memoizeWith_01<T>;
    <$SEL extends "1">(): (cacheKey: Variadic<Property>) => memoizeWith_10;
    <T extends Function>(cacheKey: Variadic<Property>, fn: T): memoizeWith_11<T>;
};
type memoizeWith_10 = {
    <T extends Function>(fn: T): memoizeWith_11<T>;
};
type memoizeWith_01<T extends Function> = {
    (cacheKey: Variadic<Property>): memoizeWith_11<T>;
};
type memoizeWith_11<T extends Function> = T;
export = memoizeWith;
