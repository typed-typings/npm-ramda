import * as R_lensIndex from '../ramda/dist/src/lensIndex';

declare const number: number;

// @dts-jest:pass -> PseudoLens<0>
R_lensIndex(0);
// @dts-jest:pass -> PseudoLens<number>
R_lensIndex(number);
