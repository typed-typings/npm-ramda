import * as R_dropRepeats from '../ramda/dist/src/dropRepeats';

declare const string_array: string[];

// @dts-jest:pass -> string[]
R_dropRepeats(string_array);
