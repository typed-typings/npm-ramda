declare const compose: typeof $;
/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
declare function $<R1>(fn1: () => R1): () => R1;
declare function $<V1, R1>(fn1: (v1: V1) => R1): (v1: V1) => R1;
declare function $<V1, V2, R1>(fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R1;
declare function $<V1, V2, V3, R1>(fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R1;
declare function $<V1, V2, V3, V4, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R1;
declare function $<V1, V2, V3, V4, V5, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1;
declare function $<V1, V2, V3, V4, V5, V6, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1;
declare function $<R1, R2>(fn2: (v: R1) => R2, fn1: () => R1): () => R2;
declare function $<V1, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R2;
declare function $<V1, V2, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R2;
declare function $<V1, V2, V3, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R2;
declare function $<V1, V2, V3, V4, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R2;
declare function $<V1, V2, V3, V4, V5, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R2;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R2;
declare function $<R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: () => R1): () => R3;
declare function $<V1, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R3;
declare function $<V1, V2, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R3;
declare function $<V1, V2, V3, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R3;
declare function $<V1, V2, V3, V4, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R3;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R3;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R3;
declare function $<R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: () => R1): () => R4;
declare function $<V1, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R4;
declare function $<V1, V2, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R4;
declare function $<V1, V2, V3, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R4;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R4;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R4;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R4;
declare function $<R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: () => R1): () => R5;
declare function $<V1, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R5;
declare function $<V1, V2, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R5;
declare function $<V1, V2, V3, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R5;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R5;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R5;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R5;
declare function $<R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: () => R1): () => R6;
declare function $<V1, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R6;
declare function $<V1, V2, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R6;
declare function $<V1, V2, V3, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R6;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R6;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R6;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R6;
export = compose;
