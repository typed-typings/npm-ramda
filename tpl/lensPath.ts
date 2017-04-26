import {
  importInterfaces,
  declareFunction,
  arrowFunction,
  makeParamStringNumbers
} from '../gen';

const propsParams = makeParamStringNumbers(8).reverse()
  .map(nums => nums.map(n => 'P' + n));

const docs = `
/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
`;

module.exports = [
  importInterfaces(['Path', 'List', 'Prop']),
  ...propsParams.map((props) =>
    docs +
    declareFunction('lensPath',
      props.map(Pn => `${Pn} extends string & keyof O`)
        .concat(`O extends {[K in ${props.join(' | ')}]: any}`),
      [
        { ps: `[${props.join(', ')}]` },
        { obj: 'O' }
      ],
      `[${props.map(Pn => 'O[' + Pn + ']').join(', ')}]`
    )),
  `// curried`,
  ...propsParams.map((props) =>
    docs +
    declareFunction('lensPath',
      props.map(Pn => `${Pn} extends string`),
      [
        { ps: `[${props.join(', ')}]` }
      ],
      arrowFunction(
        [`O extends {[K in ${props.join(' | ')}]: any}`],
        [{ obj: 'O' }],
        `[${props.map(Pn => 'O[' + Pn + ']').join(', ')}]`
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
