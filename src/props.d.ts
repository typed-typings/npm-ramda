import { Struct, List, Prop } from '../interfaces'

/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves order.
 */
declare function props<
  P1 extends string & keyof O,
  P2 extends string & keyof O,
  P3 extends string & keyof O,
  O extends {[K in P1 | P2 | P3]: any}>
  (ps: [P1, P2, P3], obj: O): [O[P1], O[P2], O[P3]];

declare function props<
  P1 extends string & keyof O,
  P2 extends string & keyof O,
  O extends {[K in P1 | P2]: any}>
  (ps: [P1, P2], obj: O): [O[P1], O[P2]];

declare function props<
  P1 extends string & keyof O,
  O extends {[K in P1]: any}>
  (ps: [P1], obj: O): [O[P1]];


// curried:

declare function props<
  P1 extends string,
  P2 extends string>
  (ps: [P1, P2]): <O extends {[K in P1 | P2]: any}>(obj: O) => [O[P1], O[P2]];


declare function props<P1 extends string>
  (ps: [P1]): <O extends {[K in P1]: any}>(obj: O) => [O[P1]];

// array:

declare function props<T>(ps: List<Prop>, obj: List<T>): T[];
declare function props(ps: List<Prop>): <T>(obj: List<T>) => T[];

// allow custom typed result

// declare function props<R>
//   (ps: Prop[], obj: any): R;

// declare function props<R>
//   (ps: Prop[]): (obj: any) => R;

export = props;
