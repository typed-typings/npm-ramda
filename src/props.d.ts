import { Struct, List, Prop } from '../interfaces'

/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves order.
 */
declare function props<
  P1 extends string, P2 extends string,
  O extends {[K in P1 | P2]: any}>
  (ps: [P1, P2], obj: O): [O[P1], O[P2]];

declare function props<
  P1 extends string,
  O extends {[K in P1]: any}>
  (ps: [P1], obj: O): [O[P1]];


declare function props<
  P1 extends string, P2 extends string>
  (ps: [P1, P2]): <O extends {[K in P1 | P2]: any}>(obj: O) => [O[P1], O[P2]];


declare function props<P1 extends string>
  (ps: [P1]): <O extends {[K in P1]: any}>(obj: O) => [O[P1]];

// declare function props<P1 extends string, P2 extends string>
//   (ps: [P1, P2]): <T1, T2>(obj: {[K in P1]: T1} & {[K2 in P2]: T2})
//     => [T1, T2];


//declare function props<T>(ps: List<Prop>, obj: List<T>): T[];
//declare function props(ps: List<Prop>): <T>(obj: List<T>) => T[];

export = props;
