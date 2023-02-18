/*
 * @Date: 2022-12-28 14:47:41
 * @Description: 函数柯里化 - 将原本接收多个参数的函数转换成一次只接收一个参数的函数
 */

// 一个简单的例子
const add = (x) => (y) => (z) => x + y + z;

// console.log(add(1)(2)(3));

/*
需求：

var fn = curry(function(a, b, c) {
  return [a, b, c];
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]

*/
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

// const curry = (foo, length) => {
//   console.log(foo, foo.length);
//     length = length || foo.length;
//     const slice = Array.prototype.slice;
//     return function () {
//       if (arguments.length < length) {
//         var combined = [fn].concat(slice.call(arguments));
//         return curry(sub_curry.apply(this, combined), length - arguments.length);
//       } else {
//         return fn.apply(this, arguments);
//       }
//     };
// };

function curry(fn, args = []) {
  const length = fn.length;

  return function () {
    let _args = args.slice(0),
      arg,
      i;

    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      _args.push(arg);
    }
    if (_args.length < length) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  };
}

var fn = curry(function (a, b, c) {
  return [a, b, c];
});

// console.log(fn("a", "b", "c")); // ["a", "b", "c"]
console.log(fn("a", "b")("c")); // ["a", "b", "c"]
// console.log(fn("a")("b")("c")); // ["a", "b", "c"]
// console.log(fn("a")("b", "c")); // ["a", "b", "c"]
