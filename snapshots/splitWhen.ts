import { List } from '../ramda/dist/src/$types';
import R_splitWhen = require('../ramda/dist/src/splitWhen');

declare const string: string;
declare const string_to_boolean: (x: string) => boolean;

declare const object_list: List<object>;
declare const object_to_boolean: (x: object) => boolean;

// @dts-jest:pass:snap -> (list: List<string>) => [string[], string[]]
R_splitWhen(string_to_boolean);
// @dts-jest:pass:snap -> [string[], string[]]
R_splitWhen(string_to_boolean)(string);
// @dts-jest:pass:snap -> [string[], string[]]
R_splitWhen(string_to_boolean, string);

// @dts-jest:pass:snap -> (list: List<object>) => [object[], object[]]
R_splitWhen(object_to_boolean);
// @dts-jest:pass:snap -> [object[], object[]]
R_splitWhen(object_to_boolean)(object_list);
// @dts-jest:pass:snap -> [object[], object[]]
R_splitWhen(object_to_boolean, object_list);
