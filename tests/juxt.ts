import * as R from '../ramda/dist/index';

declare const string_string_to_number: (x: string, y: string) => number;
declare const string: string;

// @dts-jest:pass:snap
R.juxt([string_string_to_number]);
// @dts-jest:pass:snap
R.juxt([string_string_to_number])(string, string);
