import * as R from '../ramda/dist/index';

declare const object: object;

// @dts-jest:pass:snap
R.propIs(Number)('a');
// @dts-jest:pass:snap
R.propIs(Number, 'a');
// @dts-jest:pass:snap
R.propIs(Number)('a')(object);
// @dts-jest:pass:snap
R.propIs(Number, 'a', object);
