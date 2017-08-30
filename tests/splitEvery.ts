import { List } from '../ramda/dist/src/$types';
import * as R_splitEvery from '../ramda/dist/src/splitEvery';

declare const number: number;
declare const string: string;
declare const object_list: List<object>;

// @dts-jest:pass:snap
R_splitEvery(number)(string);
// @dts-jest:pass:snap
R_splitEvery(number, string);

// @dts-jest:pass:snap
R_splitEvery(number)(object_list);
// @dts-jest:pass:snap
R_splitEvery(number, object_list);
