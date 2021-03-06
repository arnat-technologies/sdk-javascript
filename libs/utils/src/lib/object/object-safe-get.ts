// ## just-safe-get

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-safe-get)

// ```js
// import get from 'just-safe-get';

// const obj = {a: {aa: {aaa: 2}}, b: 4};

// get(obj, 'a.aa.aaa'); // 2
// get(obj, ['a', 'aa', 'aaa']); // 2

// get(obj, 'b.bb.bbb'); // undefined
// get(obj, ['b', 'bb', 'bbb']); // undefined

// get(obj.a, 'aa.aaa'); // 2
// get(obj.a, ['aa', 'aaa']); // 2

// get(obj.b, 'bb.bbb'); // undefined
// get(obj.b, ['bb', 'bbb']); // undefined

// get(obj.b, 'bb.bbb', 5); // 5
// get(obj.b, ['bb', 'bbb'], true); // true

// get(null, 'a'); // undefined
// get(undefined, ['a']); // undefined

// get(null, 'a', 42); // 42
// get(undefined, ['a'], 42); // 42

// const obj = {a: {}};
// const sym = Symbol();
// obj.a[sym] = 4;
// get(obj.a, sym); // 4
// ```

module.exports = get;

/*
  const obj = {a: {aa: {aaa: 2}}, b: 4};

  get(obj, 'a.aa.aaa'); // 2
  get(obj, ['a', 'aa', 'aaa']); // 2

  get(obj, 'b.bb.bbb'); // undefined
  get(obj, ['b', 'bb', 'bbb']); // undefined

  get(obj.a, 'aa.aaa'); // 2
  get(obj.a, ['aa', 'aaa']); // 2

  get(obj.b, 'bb.bbb'); // undefined
  get(obj.b, ['bb', 'bbb']); // undefined

  get(obj.b, 'bb.bbb', 42); // 42
  get(obj.b, ['bb', 'bbb'], 42); // 42

  get(null, 'a'); // undefined
  get(undefined, ['a']); // undefined

  get(null, 'a', 42); // 42
  get(undefined, ['a'], 42); // 42

  const obj = {a: {}};
  const sym = Symbol();
  obj.a[sym] = 4;
  get(obj.a, sym); // 4
*/

function get(obj, propsArg, defaultValue) {
  if (!obj) {
    return defaultValue;
  }
  let props, prop;
  if (Array.isArray(propsArg)) {
    props = propsArg.slice(0);
  }
  if (typeof propsArg == 'string') {
    props = propsArg.split('.');
  }
  if (typeof propsArg == 'symbol') {
    props = [propsArg];
  }
  if (!Array.isArray(props)) {
    throw new Error('props arg must be an array, a string or a symbol');
  }
  while (props.length) {
    prop = props.shift();
    if (!obj) {
      return defaultValue;
    }
    obj = obj[prop];
    if (obj === undefined) {
      return defaultValue;
    }
  }
  return obj;
}
