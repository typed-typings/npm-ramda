import * as R_defaultTo from '../ramda/dist/src/defaultTo';

declare const string: string;
declare const number_or_undefined: number | undefined;

// @dts-jest:pass -> string
R_defaultTo(string)(undefined);
// @dts-jest:pass -> string
R_defaultTo(string, undefined);
// @dts-jest:pass -> string | number
R_defaultTo(string)(number_or_undefined);
// @dts-jest:pass -> string | number
R_defaultTo(string, number_or_undefined);
