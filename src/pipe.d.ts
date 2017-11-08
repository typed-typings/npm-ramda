declare const pipe: typeof $;
/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
declare function $<R1>(fn1: () => R1): () => R1;
declare function $<V1, R1>(fn1: (v1: V1) => R1): (v1: V1) => R1;
declare function $<V1, V2, R1>(fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R1;
declare function $<V1, V2, V3, R1>(fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R1;
declare function $<V1, V2, V3, V4, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R1;
declare function $<V1, V2, V3, V4, V5, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1;
declare function $<V1, V2, V3, V4, V5, V6, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1;
declare function $<R1, R2>(fn1: () => R1, fn2: (v: R1) => R2): () => R2;
declare function $<V1, R1, R2>(fn1: (v1: V1) => R1, fn2: (v: R1) => R2): (v1: V1) => R2;
declare function $<V1, V2, R1, R2>(fn1: (v1: V1, v2: V2) => R1, fn2: (v: R1) => R2): (v1: V1, v2: V2) => R2;
declare function $<V1, V2, V3, R1, R2>(fn1: (v1: V1, v2: V2, v3: V3) => R1, fn2: (v: R1) => R2): (v1: V1, v2: V2, v3: V3) => R2;
declare function $<V1, V2, V3, V4, R1, R2>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1, fn2: (v: R1) => R2): (v1: V1, v2: V2, v3: V3, v4: V4) => R2;
declare function $<V1, V2, V3, V4, V5, R1, R2>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1, fn2: (v: R1) => R2): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R2;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1, fn2: (v: R1) => R2): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R2;
declare function $<R1, R2, R3>(fn1: () => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3): () => R3;
declare function $<V1, R1, R2, R3>(fn1: (v1: V1) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3): (v1: V1) => R3;
declare function $<V1, V2, R1, R2, R3>(fn1: (v1: V1, v2: V2) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3): (v1: V1, v2: V2) => R3;
declare function $<V1, V2, V3, R1, R2, R3>(fn1: (v1: V1, v2: V2, v3: V3) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3): (v1: V1, v2: V2, v3: V3) => R3;
declare function $<V1, V2, V3, V4, R1, R2, R3>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3): (v1: V1, v2: V2, v3: V3, v4: V4) => R3;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R3;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R3;
declare function $<R1, R2, R3, R4>(fn1: () => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4): () => R4;
declare function $<V1, R1, R2, R3, R4>(fn1: (v1: V1) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4): (v1: V1) => R4;
declare function $<V1, V2, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4): (v1: V1, v2: V2) => R4;
declare function $<V1, V2, V3, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2, v3: V3) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4): (v1: V1, v2: V2, v3: V3) => R4;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4): (v1: V1, v2: V2, v3: V3, v4: V4) => R4;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R4;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R4;
declare function $<R1, R2, R3, R4, R5>(fn1: () => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5): () => R5;
declare function $<V1, R1, R2, R3, R4, R5>(fn1: (v1: V1) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5): (v1: V1) => R5;
declare function $<V1, V2, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5): (v1: V1, v2: V2) => R5;
declare function $<V1, V2, V3, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2, v3: V3) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5): (v1: V1, v2: V2, v3: V3) => R5;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5): (v1: V1, v2: V2, v3: V3, v4: V4) => R5;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R5;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R5;
declare function $<R1, R2, R3, R4, R5, R6>(fn1: () => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5, fn6: (v: R5) => R6): () => R6;
declare function $<V1, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5, fn6: (v: R5) => R6): (v1: V1) => R6;
declare function $<V1, V2, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5, fn6: (v: R5) => R6): (v1: V1, v2: V2) => R6;
declare function $<V1, V2, V3, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2, v3: V3) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5, fn6: (v: R5) => R6): (v1: V1, v2: V2, v3: V3) => R6;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5, fn6: (v: R5) => R6): (v1: V1, v2: V2, v3: V3, v4: V4) => R6;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5, fn6: (v: R5) => R6): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R6;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1, fn2: (v: R1) => R2, fn3: (v: R2) => R3, fn4: (v: R3) => R4, fn5: (v: R4) => R5, fn6: (v: R5) => R6): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R6;
export = pipe;
