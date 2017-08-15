import * as R_mathMod from '../ramda/dist/src/mathMod';

declare const number: number;

// @dts-jest:pass
R_mathMod(number, number);
// @dts-jest:pass
R_mathMod(number)(number);
