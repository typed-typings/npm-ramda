import * as R_dropLastWhile from '../ramda/dist/src/dropLastWhile';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest:pass
R_dropLastWhile(string_to_boolean);
// @dts-jest:pass
R_dropLastWhile(string_to_boolean, string_array);
