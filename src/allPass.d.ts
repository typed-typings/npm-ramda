import { Variadic } from "./$types";
declare const allPass: allPass_0;
type allPass_0 = {
    /**
     * Takes a list of predicates and returns a predicate that returns true for a
     * given list of arguments if every one of the provided predicates is satisfied
     * by those arguments.
     *
     * The function returned is a curried function whose arity matches that of the
     * highest-arity predicate.
     *
     * @func
     * @memberOf R
     * @since v0.9.0
     * @category Logic
     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
     * @param {Array} predicates An array of predicates to check
     * @return {Function} The combined predicate
     * @see R.anyPass
     * @example
     *
     *      var isQueen = R.propEq('rank', 'Q');
     *      var isSpade = R.propEq('suit', '♠︎');
     *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
     *
     *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
     *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
     */
    <F extends Variadic<boolean>>(fns: F[]): allPass_1<F>;
};
type allPass_1<F extends Variadic<boolean>> = F;
export = allPass;
