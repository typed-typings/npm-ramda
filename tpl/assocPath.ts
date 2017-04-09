import {
  importInterfaces,
  declareFunction,
  arrowFunction,
  getParamsNums
} from '../gen';

const propsParams = getParamsNums(8).reverse()
  .map(nums => nums.map(n => 'P' + n));

const docs = `
/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
`;

const makeNestedObjPath = (props: string[], init: string) =>
  props.concat([]).reverse().reduce<string>((prev, prop, index) =>
    `{[K${props.length - index} in ${prop}]: ${prev}}`
    , init)

module.exports = [
  importInterfaces(['Path', 'List', 'Prop']),
  ...propsParams.map((props) =>
    docs +
    declareFunction('assocPath',
      props.map(Pn => `${Pn} extends string | number`)
        //.concat(props.map(Pn => `${Pn.replace(/P/, 'N')} extends number`))
        .concat([
          `T`,
          //'O extends ' + makeNestedObjPath(props.map(Pn => `${Pn} & ${Pn.replace(/P/, 'N')}`) , 'T')
          'O extends ' + makeNestedObjPath(props, 'T')
        ]),
      [
        { path: `[${props.join(', ')}]` },
        { value: 'T' },
        {
          obj: 'O'
        }
      ],
      `O`
    )),
  `// curried`,
  ...propsParams.map((props) =>
    docs +
    declareFunction('assocPath',
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
