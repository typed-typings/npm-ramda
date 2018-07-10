import * as R from '../ramda/dist/index';

declare const property: R.Property;
declare const string: string;

// @dts-jest:pass:snap
R.eqProps(property, string);
// @dts-jest:pass:snap
R.eqProps(property)(string, string);
// @dts-jest:pass:snap
R.eqProps(property, string, string);
