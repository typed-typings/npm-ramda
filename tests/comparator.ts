import * as R_comparator from '../ramda/dist/src/comparator';

declare const string_string_to_boolean: (a: string, b: string) => boolean;

// @dts-jest:pass
R_comparator(string_string_to_boolean);
