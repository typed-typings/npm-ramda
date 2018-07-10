import * as R from '../ramda/dist/index';

declare const number: number;
declare const object: object;

// @dts-jest:pass:snap -> <V>(value: V) => KeyValuePair<number, V>
R.pair(number);
// @dts-jest:pass:snap -> KeyValuePair<number, object>
R.pair(number)(object);
// @dts-jest:pass:snap -> KeyValuePair<number, object>
R.pair(number, object);
