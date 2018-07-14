import * as R from '../ramda/dist/index';

declare const object: object;

// @dts-jest:pass:snap -> <U extends {}>(object: U) => object is U & Record<"a", Number>
R.propIs(Number)('a');
// @dts-jest:pass:snap -> <U extends {}>(object: U) => object is U & Record<"a", Number>
R.propIs(Number, 'a');
// @dts-jest:pass:snap -> boolean
R.propIs(Number)('a')(object);
// @dts-jest:pass:snap -> boolean
R.propIs(Number, 'a', object);
