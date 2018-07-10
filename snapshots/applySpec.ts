import * as R from '../ramda/dist/index';

interface Name {
  firstname: string;
  lastname: string;
}

declare const name_spec: { [K in keyof Name]: (fullname: string) => Name[K] };

declare const fullname: string;

// @dts-jest:pass:snap -> (...args: any[]) => {}
R.applySpec(name_spec);
// @dts-jest:pass:snap -> {}
R.applySpec(name_spec)(fullname);

// @dts-jest:pass:snap -> (...args: any[]) => Name
R.applySpec<Name>(name_spec);
// @dts-jest:pass:snap -> Name
R.applySpec<Name>(name_spec)(fullname);
