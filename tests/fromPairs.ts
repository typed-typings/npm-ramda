import * as R from '../ramda/dist/index';

declare const number_object_tuple: [number, object];

// @dts-jest:pass:snap
R.fromPairs([number_object_tuple]);
