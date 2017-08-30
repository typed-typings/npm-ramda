import * as R_juxt from '../ramda/dist/src/juxt';

declare const string_string_to_number: (x: string, y: string) => number;
declare const string: string;

// @dts-jest:pass:snap
R_juxt([string_string_to_number]);
// @dts-jest:pass:snap
R_juxt([string_string_to_number])(string, string);
