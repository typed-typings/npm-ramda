import {
  importInterfaces,
  declareFunction,
  arrowFunction,
  makeParamStringNumberCombinations,
  makeParamStringNumbers,
  makeNestedObjPath,
  makeTuple,
  Template,
  docs
} from '../gen';

// const propsParams = getParamsNums(8).reverse()
//   .map(nums => nums.map(n => 'P' + n));

const maxPathDepth = 5;

const desc = `
Makes a shallow clone of an object, setting or overriding 
the nodes required to create the given path, and placing the specific 
value at the tail end of that path.
Note: Tuples are not supported by typings.
Max path depth typed is ${maxPathDepth}.
`;

// const propsParams =
//   makeParamStringNumberCombinations(maxPathDepth);

const propsParams =
  makeParamStringNumbers(maxPathDepth);

const orBrackets = (...items: string[]) =>
  `(${items.join(') | (')})`;


const generic = [
  {
    d: desc,
    t: ['T', 'O'],
    p: [{ path: 'Path' }, { val: 'T' }, { obj: 'O' }],
    r: 'O'
  },
  {
    d: desc,
    t: ['T'],
    p: [{ path: 'Path' }, { val: 'T' }],
    r: [
      {
        t: ['O'],
        p: [{ obj: 'O' }],
        r: 'O'
      }
    ]
  },
  {
    p: [{ path: 'Path' }], r: [
      {
        d: desc,
        t: ['T', 'O'],
        p: [{ val: 'T' }, { obj: 'O' }],
        r: 'O'
      },
      {
        t: ['T'], p: [{ val: 'T' }], r: [
          { t: ['O'], p: [{ obj: 'O' }], r: 'O' }
        ]
      }
    ]
  }
]


const template: Template = {
  imports: ['Path'],
  signatures: [
    ...propsParams.map(props => [
      {
        d: desc,
        t: props.map(n => `P${n} extends ${typeof n} | number`)
          .concat([
            `T`,
            'O extends ' + makeNestedObjPath(props, 'T')
          ]),
        p: [
          { path: makeTuple(props, props.length) },
          { value: 'T' },
          {
            obj: 'O'
          }
        ],
        r: 'O'
      }
    ]),
    // curry 2-1
    ...propsParams.map(props => [
      {
        // d: desc,
        t: props.map(n => `P${n} extends ${typeof n} | number`)
          .concat([
            `T`
          ]),
        p: [
          { path: makeTuple(props, props.length) },
          { value: 'T' }
        ],
        r: [{
          t: ['O extends ' + makeNestedObjPath(props, 'T')],
          p: [{ obj: 'O' }],
          r: `O`
        }]
      }
    ]),
    // curry 1-(1,2)
    ...propsParams.map(props => [
      {
        //d: desc,
        t: props.map(n => `P${n} extends ${typeof n} | number`)
          .concat([
            `T`
          ]),
        p: [
          { path: makeTuple(props, props.length) }
        ],
        r: [{
          t: ['T'],
          p: [{ value: 'T' }],
          r: [{
            t: ['O extends ' + makeNestedObjPath(props, 'T')],
            p: [{ obj: 'O' }],
            r: `O`
          }]
        }, {
          t: [`T`, 'O extends ' + makeNestedObjPath(props, 'T')],
          p: [{ value: 'T' }, { obj: 'O' }],
          r: `O`
        }]
      }
    ]),
    //generic
  ]
};

module.exports = template;

// const fun = [
//   // importInterfaces(['Path', 'List', 'Prop']),
//   ...propsParams.map((props) =>
//     docs(desc) +
//     declareFunction('assocPath',
//       props.map(n => `P${n} extends ${typeof n}`)
//         .concat([
//           `T`,
//           'O extends ' + makeNestedObjPath(props, 'T')
//         ]),
//       [
//         { path: makeTuple(props, props.length) },
//         { value: 'T' },
//         {
//           obj: 'O'
//         }
//       ],
//       `O`
//     )),
//   `// curried 1-1-1`,
//   ...propsParams.map((props) =>
//     docs(desc) +
//     declareFunction('assocPath',
//       props.map(n => `P${n} extends ${typeof n}`)
//         .concat(`T`),
//       [
//         { paths: makeTuple(props, props.length) },
//         { value: 'T' }
//       ],
//       arrowFunction(
//         ['T'],
//         [{ value: 'T' }],
//         arrowFunction(
//           [
//             'O extends ' + makeNestedObjPath(props, 'T')
//           ],
//           [{ obj: 'O' }],
//           `O`
//         )
//       )
//     )),
//   `// curried 2-1`,
//   ...propsParams.map((props) =>
//     docs(desc) +
//     declareFunction('assocPath',
//       props.map(n => `P${n} extends ${typeof n}`)
//         .concat(`T`),
//       [
//         { paths: makeTuple(props, props.length) },
//         { value: 'T' }
//       ],
//       arrowFunction(
//         ['O extends ' + makeNestedObjPath(props, 'T')],
//         [{ obj: 'O' }],
//         `O`
//       )
//     )),
//   `// curried 1-2`,
//   ...propsParams.map((props) =>
//     docs(desc) +
//     declareFunction('assocPath',
//       props.map(n => `P${n} extends ${typeof n}`),
//       [
//         { paths: makeTuple(props, props.length) }
//       ],
//       arrowFunction(
//         ['T',
//           'O extends ' + makeNestedObjPath(props, 'T')
//         ],
//         [{ value: 'T' }, { obj: 'O' }],
//         `O`
//       ),
//     )),
//   // docs +
//   // declareFunction('props', ['T'], [{ ps: 'List<Prop>' }, { obj: 'List<T>' }], 'T[]'),
//   // `// curried`,
//   // docs +
//   // declareFunction('props', ['T'], [{ ps: 'List<Prop>' }],
//   //   arrowFunction(['T'], [{ obj: 'List<T>' }], 'T[]')
//   // )
// ];
