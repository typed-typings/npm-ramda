import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_to_boolean: (x: string) => boolean;

declare const object_list: R.List<object>;
declare const object_to_boolean: (x: object) => boolean;

// @dts-jest:pass:snap
R.splitWhen(string_to_boolean);
// @dts-jest:pass:snap
R.splitWhen(string_to_boolean)(string);
// @dts-jest:pass:snap
R.splitWhen(string_to_boolean, string);

// @dts-jest:pass:snap
R.splitWhen(object_to_boolean);
// @dts-jest:pass:snap
R.splitWhen(object_to_boolean)(object_list);
// @dts-jest:pass:snap
R.splitWhen(object_to_boolean, object_list);
