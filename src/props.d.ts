import { Struct, List } from '../interfaces'

/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves order.
 */



declare function props<
  P1 extends string,
  O extends {[K in P1]: any}>
  (ps: [P1], obj: O): [O[P1]];


declare function props<
  P1 extends string, P2 extends string,
  O extends {[K in P1 | P2]: any}>
  (ps: [P1, P2], obj: O): [O[P1], O[P2]];

declare function props<P1 extends string, P2 extends string>
  (ps: [P1, P2]): <T1, T2>(obj: {[K in P1]: T1} & {[K2 in P2]: T2})
    => [T1, T2];


// declare function props<A  extends string, PropA>
//   (ps: [A], obj: {[K in A]: PropA}): [PropA];
// declare function props<T>(ps: List<Prop>, obj: Struct<T>): T[];
// declare function props<T>(ps: List<Prop>, obj: Struct<T>): T[];
// declare function props(ps: List<Prop>): <T>(obj: Struct<T>) => T[];

export default props
