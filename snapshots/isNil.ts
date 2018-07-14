import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap -> (value: any) => value is null | undefined
R.isNil;

// @dts-jest:pass:snap -> boolean
R.isNil(string);
