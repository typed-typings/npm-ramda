import { Struct } from '../interfaces'

/**
 * Create a new object with the own properties of a
 * merged with the own properties of object b.
 * This function will *not* mutate passed-in objects.
 */
declare function merge<T1 extends Struct<any>, T2 extends Struct<any>>(a: T1, b: T2): T1 & T2;
declare function merge<T1 extends Struct<any>>(a: T1): <V2, T2 extends Struct<any>>(b: T2) => T1 & T2;

export = merge;
