import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_to_boolean: (x: string) => boolean;

declare const object_list: R.List<object>;
declare const object_to_boolean: (x: object) => boolean;

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => [string[], string[]]
R.splitWhen(string_to_boolean);
// @dts-jest:pass:snap -> [string[], string[]]
R.splitWhen(string_to_boolean)(string);
// @dts-jest:pass:snap -> [string[], string[]]
R.splitWhen(string_to_boolean, string);

// @dts-jest:pass:snap -> (list: object[] | ArrayLike<object>) => [object[], object[]]
R.splitWhen(object_to_boolean);
// @dts-jest:pass:snap -> [object[], object[]]
R.splitWhen(object_to_boolean)(object_list);
// @dts-jest:pass:snap -> [object[], object[]]
R.splitWhen(object_to_boolean, object_list);
