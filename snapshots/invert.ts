import * as R from '../ramda/dist/index';

declare const number_object_record: { [number: number]: object };

// @dts-jest:pass:snap -> R.Dictionary<string[]>
R.invert(number_object_record);
