import { List } from '../ramda/dist/src/$types';
import * as R_splitAt from '../ramda/dist/src/splitAt';

declare const number: number;
declare const string: string;
declare const object_list: List<object>;

// @dts-jest:pass
R_splitAt(number)(string);
// @dts-jest:pass
R_splitAt(number, string);

// @dts-jest:pass
R_splitAt(number)(object_list);
// @dts-jest:pass
R_splitAt(number, object_list);
