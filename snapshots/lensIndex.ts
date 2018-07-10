import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap -> R.PseudoLens<0>
R.lensIndex(0);
// @dts-jest:pass:snap -> R.PseudoLens<number>
R.lensIndex(number);
