import * as R from '../ramda/dist/index';

declare const property: R.Property;

// @dts-jest:pass:snap
R.lensProp(1);
// @dts-jest:pass:snap
R.lensProp('x');
// @dts-jest:pass:snap
R.lensProp(property);
// @dts-jest:pass:snap
R.lensProp<number, object>(property);
