import R_applySpec = require('../ramda/dist/src/applySpec');

interface Name {
  firstname: string;
  lastname: string;
}

declare const name_spec: { [K in keyof Name]: (fullname: string) => Name[K] };

declare const fullname: string;

// @dts-jest:pass:snap -> (...args: any[]) => {}
R_applySpec(name_spec);
// @dts-jest:pass:snap -> {}
R_applySpec(name_spec)(fullname);

// @dts-jest:pass:snap -> (...args: any[]) => Name
R_applySpec<Name>(name_spec);
// @dts-jest:pass:snap -> Name
R_applySpec<Name>(name_spec)(fullname);
