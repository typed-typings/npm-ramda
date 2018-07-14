import * as R from '../ramda/dist/index';

declare const string: string;
declare const number_or_undefined: number | undefined;

// @dts-jest:pass:snap
R.defaultTo(string)(undefined);
// @dts-jest:pass:snap
R.defaultTo(string, undefined);
// @dts-jest:pass:snap
R.defaultTo(string)(number_or_undefined);
// @dts-jest:pass:snap
R.defaultTo(string, number_or_undefined);
