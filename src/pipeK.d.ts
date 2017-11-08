import { Chain } from "./$types";
declare const pipeK: typeof $;
/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
declare function $<R1>(fn1: () => Chain<R1>): () => Chain<R1>;
declare function $<V1, R1>(fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R1>;
declare function $<R1, R2>(fn1: () => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>): () => Chain<R2>;
declare function $<V1, R1, R2>(fn1: (v1: Chain<V1>) => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>): (v1: Chain<V1>) => Chain<R2>;
declare function $<R1, R2, R3>(fn1: () => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>, fn3: (v: Chain<R2>) => Chain<R3>): () => Chain<R3>;
declare function $<V1, R1, R2, R3>(fn1: (v1: Chain<V1>) => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>, fn3: (v: Chain<R2>) => Chain<R3>): (v1: Chain<V1>) => Chain<R3>;
declare function $<R1, R2, R3, R4>(fn1: () => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>, fn3: (v: Chain<R2>) => Chain<R3>, fn4: (v: Chain<R3>) => Chain<R4>): () => Chain<R4>;
declare function $<V1, R1, R2, R3, R4>(fn1: (v1: Chain<V1>) => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>, fn3: (v: Chain<R2>) => Chain<R3>, fn4: (v: Chain<R3>) => Chain<R4>): (v1: Chain<V1>) => Chain<R4>;
declare function $<R1, R2, R3, R4, R5>(fn1: () => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>, fn3: (v: Chain<R2>) => Chain<R3>, fn4: (v: Chain<R3>) => Chain<R4>, fn5: (v: Chain<R4>) => Chain<R5>): () => Chain<R5>;
declare function $<V1, R1, R2, R3, R4, R5>(fn1: (v1: Chain<V1>) => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>, fn3: (v: Chain<R2>) => Chain<R3>, fn4: (v: Chain<R3>) => Chain<R4>, fn5: (v: Chain<R4>) => Chain<R5>): (v1: Chain<V1>) => Chain<R5>;
declare function $<R1, R2, R3, R4, R5, R6>(fn1: () => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>, fn3: (v: Chain<R2>) => Chain<R3>, fn4: (v: Chain<R3>) => Chain<R4>, fn5: (v: Chain<R4>) => Chain<R5>, fn6: (v: Chain<R5>) => Chain<R6>): () => Chain<R6>;
declare function $<V1, R1, R2, R3, R4, R5, R6>(fn1: (v1: Chain<V1>) => Chain<R1>, fn2: (v: Chain<R1>) => Chain<R2>, fn3: (v: Chain<R2>) => Chain<R3>, fn4: (v: Chain<R3>) => Chain<R4>, fn5: (v: Chain<R4>) => Chain<R5>, fn6: (v: Chain<R5>) => Chain<R6>): (v1: Chain<V1>) => Chain<R6>;
export = pipeK;
