import * as R_propIs from '../ramda/dist/src/propIs';

declare const object: object;

// @dts-jest:pass -> <U extends {}>(object: U) => object is U & Record<"a", Number>
R_propIs(Number)('a');
// @dts-jest:pass -> <U extends {}>(object: U) => object is U & Record<"a", Number>
R_propIs(Number, 'a');
// @dts-jest:pass -> boolean
R_propIs(Number)('a')(object);
// @dts-jest:pass -> boolean
R_propIs(Number, 'a', object);
