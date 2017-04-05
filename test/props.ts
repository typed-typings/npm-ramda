import props from 'ramda/src/props'
import * as test from 'tape'

const obj = {
  num: 1,
  str: 'str',
  other: {}
};

test('props: one argument', (t) => {
  const res = props(['str'], obj) as any
  t.is(res[0], 'str' as string)
})
