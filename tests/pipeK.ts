import * as R from '../ramda/dist/index';

declare const chain_boolean_to_chain_number: (
  x: R.Chain<boolean>,
) => R.Chain<number>;
declare const chain_boolean_to_chain_string: (
  x: R.Chain<boolean>,
) => R.Chain<string>;
declare const chain_number_to_chain_boolean: (
  x: R.Chain<number>,
) => R.Chain<boolean>;
declare const chain_number_to_chain_string: (
  x: R.Chain<number>,
) => R.Chain<string>;
declare const chain_string_to_chain_boolean: (
  x: R.Chain<string>,
) => R.Chain<boolean>;
declare const chain_string_to_chain_number: (
  x: R.Chain<string>,
) => R.Chain<number>;

// @dts-jest:pass:snap
R.pipeK(chain_boolean_to_chain_number);
// @dts-jest:pass:snap
R.pipeK(chain_string_to_chain_boolean, chain_boolean_to_chain_number);
// @dts-jest:pass:snap
R.pipeK(
  chain_number_to_chain_string,
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
// @dts-jest:pass:snap
R.pipeK(
  chain_string_to_chain_number,
  chain_number_to_chain_string,
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
// @dts-jest:pass:snap
R.pipeK(
  chain_boolean_to_chain_string,
  chain_string_to_chain_number,
  chain_number_to_chain_string,
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
// @dts-jest:pass:snap
R.pipeK(
  chain_number_to_chain_boolean,
  chain_boolean_to_chain_string,
  chain_string_to_chain_number,
  chain_number_to_chain_string,
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
