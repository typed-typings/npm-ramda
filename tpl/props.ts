import {
  importInterfaces,
  declareFunction,
  arrowFunction,
  getParamsNums
} from '../gen';

const numParams = getParamsNums(8).reverse();

const docs = `
/**
 * Acts as multiple \`prop\`: array of keys in, array of values out. Preserves order.
 */
`;

module.exports = [
  importInterfaces(['Struct', 'List', 'Prop']),
  ...numParams.map((nums) =>
    docs +
    declareFunction('props',
      nums.map(n => `P${n} extends string & keyof O`)
        .concat(`O extends {[K in ${nums.map(n => 'P' + n).join(' | ')}]: any}`),
      [
        { ps: `[${nums.map(n => 'P' + n).join(', ')}]` },
        { obj: 'O' }
      ],
      `[${nums.map(n => 'O[P' + n + ']').join(', ')}]`
    )),
  `// curried`,
  ...numParams.map((nums) =>
    docs +
    declareFunction('props',
      nums.map(n => `P${n} extends string`),
      [
        { ps: `[${nums.map(n => 'P' + n).join(', ')}]` }
      ],
      arrowFunction(
        [`O extends {[K in ${nums.map(n => 'P' + n).join(' | ')}]: any}`],
        [{ obj: 'O' }],
        `[${nums.map(n => 'O[P' + n + ']').join(', ')}]`
      )
    )),
  docs +
  declareFunction('props', ['T'], [{ ps: 'List<Prop>' }, { obj: 'List<T>' }], 'T[]'),
  `// curried`,
  docs +
  declareFunction('props', ['T'], [{ ps: 'List<Prop>' }],
    arrowFunction(['T'], [{ obj: 'List<T>' }], 'T[]')
  )
];
