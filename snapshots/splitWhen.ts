import { List } from '../ramda/dist/src/$types';
import * as R_splitWhen from '../ramda/dist/src/splitWhen';

declare const string: string;
declare const string_to_boolean: (x: string) => boolean;

declare const object_list: List<object>;
declare const object_to_boolean: (x: object) => boolean;

// @dts-jest:pass -> (list: List<string>) => [string[], string[]]
R_splitWhen(string_to_boolean);
// @dts-jest:pass -> [string[], string[]]
R_splitWhen(string_to_boolean)(string);
// @dts-jest:pass -> [string[], string[]]
R_splitWhen(string_to_boolean, string);

// @dts-jest:pass -> (list: List<object>) => [object[], object[]]
R_splitWhen(object_to_boolean);
// @dts-jest:pass -> [object[], object[]]
R_splitWhen(object_to_boolean)(object_list);
// @dts-jest:pass -> [object[], object[]]
R_splitWhen(object_to_boolean, object_list);
