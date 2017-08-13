import * as R_fromPairs from '../ramda/dist/src/fromPairs';

declare const number_object_tuple: [number, object];

// @dts-jest:pass -> Dictionary<object>
R_fromPairs([number_object_tuple]);
