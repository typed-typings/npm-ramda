import { Chain } from "./$types";
declare const composeK: typeof $;
/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
declare function $<R1>(fn1: () => Chain<R1>): () => Chain<R1>;
declare function $<V1, R1>(fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R1>;
declare function $<R1, R2>(fn2: (v: Chain<R1>) => Chain<R2>, fn1: () => Chain<R1>): () => Chain<R2>;
declare function $<V1, R1, R2>(fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R2>;
declare function $<R1, R2, R3>(fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: () => Chain<R1>): () => Chain<R3>;
declare function $<V1, R1, R2, R3>(fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R3>;
declare function $<R1, R2, R3, R4>(fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: () => Chain<R1>): () => Chain<R4>;
declare function $<V1, R1, R2, R3, R4>(fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R4>;
declare function $<R1, R2, R3, R4, R5>(fn5: (v: Chain<R4>) => Chain<R5>, fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: () => Chain<R1>): () => Chain<R5>;
declare function $<V1, R1, R2, R3, R4, R5>(fn5: (v: Chain<R4>) => Chain<R5>, fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R5>;
declare function $<R1, R2, R3, R4, R5, R6>(fn6: (v: Chain<R5>) => Chain<R6>, fn5: (v: Chain<R4>) => Chain<R5>, fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: () => Chain<R1>): () => Chain<R6>;
declare function $<V1, R1, R2, R3, R4, R5, R6>(fn6: (v: Chain<R5>) => Chain<R6>, fn5: (v: Chain<R4>) => Chain<R5>, fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R6>;
export = composeK;
