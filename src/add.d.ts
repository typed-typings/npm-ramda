/**
 * Adds two numbers. Equivalent to a + b but curried.
 */
declare function add(a: number, b: number): number;
declare function add(a: number): (b: number) => number;

export default add
