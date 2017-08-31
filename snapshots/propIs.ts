import R_propIs = require('../ramda/dist/src/propIs');

declare const object: object;

// @dts-jest:pass:snap -> <U extends {}>(object: U) => object is U & Record<"a", Number>
R_propIs(Number)('a');
// @dts-jest:pass:snap -> <U extends {}>(object: U) => object is U & Record<"a", Number>
R_propIs(Number, 'a');
// @dts-jest:pass:snap -> boolean
R_propIs(Number)('a')(object);
// @dts-jest:pass:snap -> boolean
R_propIs(Number, 'a', object);
