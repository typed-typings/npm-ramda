import * as R_modulo from '../ramda/dist/src/modulo';

declare const number: number;

// @dts-jest:pass
R_modulo(number, number);
// @dts-jest:pass
R_modulo(number)(number);
