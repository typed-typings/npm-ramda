import * as R from '../ramda/dist/index';

declare const object_to_string: (x: object) => string;
declare const string_object_to_object: (x: string, y: object) => object;

// @dts-jest:pass:snap
R.lens(object_to_string);
// @dts-jest:pass:snap
R.lens(object_to_string)(string_object_to_object);
// @dts-jest:pass:snap
R.lens(object_to_string, string_object_to_object);
