import * as R from '../ramda/dist/index';

declare const object_to_string: R.Morphism<object, string>;
declare const object_array: object[];

// @dts-jest:pass:snap
R.countBy(object_to_string);
// @dts-jest:pass:snap
R.countBy(object_to_string, object_array);
