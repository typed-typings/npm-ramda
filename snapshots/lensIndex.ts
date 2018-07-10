import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap -> PseudoLens<0>
R.lensIndex(0);
// @dts-jest:pass:snap -> PseudoLens<number>
R.lensIndex(number);
