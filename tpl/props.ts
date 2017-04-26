import {
  importInterfaces,
  declareFunction,
  arrowFunction,
  makeParamStringNumbers,
  docs
} from '../gen';

const propsParams = makeParamStringNumbers(8).reverse()
  .map(nums => nums.map(n => 'P' + n));

const desc = 'Acts as multiple \`prop\`: array of keys in, array of values out. Preserves order.';

module.exports = [
  importInterfaces(['Struct', 'List', 'Prop']),
  ...propsParams.map((props) =>
    docs(desc) +
    declareFunction('props',
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
    docs(desc) +
    declareFunction('props',
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
  docs(desc) +
  declareFunction('props', ['T'], [{ ps: 'List<Prop>' }, { obj: 'List<T>' }], 'T[]'),
  `// curried`,
  docs(desc) +
  declareFunction('props', ['T'], [{ ps: 'List<Prop>' }],
    arrowFunction(['T'], [{ obj: 'List<T>' }], 'T[]')
  )
];
