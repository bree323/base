/*
 * @Date: 2021-09-01 16:10:23
 * @Descripton: 
 * @LastEditTime: 2021-09-01 23:31:17
 */
// var sum = (a,b) => a+b
// console.log(sum(3,4));

/* let addThree = (a) => {
  return sum.bind(this)
}
addThree(4) */

let arr = [1, 2, 3]
/* 
* 1-增
  push
  unshift
  splice
  concat
*/
// arr.splice(0,1,4)

arr.slice(4, 2)

var sum = (a, b) => a + b
var addThree = (a) => {
  return sum.bind(this, [a, 3])
}
// console.log('addThree', addThree(4));
// console.log({arr});

// Range(6) => [1,2,3,4,5,6]
// Range(2,6) => [2,3,4,5,6]


const range = function () {
  let resArr = []
  let args = Array.prototype.slice.call(arguments)
  let argsLen = args.length
  for (let i = 0; i < args.length; i++) {
    const num = args[i];
    if (isNaN(+num) || +num < 1) {
      return resArr
    }
  }

  if (argsLen === 1) {
    for (let i = 1; i <= args[0]; i += 1) {
      resArr.push(i)
    }
  }
  // TODO 边界处理
  else if (argsLen === 2) {
    for (let i = args[0]; i <= args[1]; i += 1) {
      resArr.push(i)
    }
  } 
  else if (argsLen === 3) {
    for (let i = args[0]; i <= args[1]; i += args[2]) {
      resArr.push(i)
    }
  } else {
    console.error('参数超量');
  }
  return resArr
}

// console.log(range(6));
// console.log(range(2, 6)); // [2,3,4,5,6]
// console.log(range(2, 6, 2)); // [2,4,6]


const Person = function (name) {
  this.name = name
}

const ming = new Person('小明')

const Bag = function () {}
Bag.prototype = ming
Bag.prototype.price = function () {console.log('price');}

const nikeBag = new Bag()

nikeBag.price()

/* console.log(nikeBag instanceof Bag);
console.log(nikeBag instanceof Person);
console.log(nikeBag instanceof Object);
console.log(nikeBag instanceof Function); */

console.log(Object.prototype.toString.call(nikeBag));


function type(target) {
  const ret = typeof(target);
  const template = {
      "[object Array]": "array", 
      "[object Object]": "object",
      "[object Number]": "number - object",
      "[object Boolean]": "boolean - object",
      "[object String]": 'string - object'
 }
  if(target === null) {
      return 'null';
 }
  else if(ret == "object"){
      const str = Object.prototype.toString.call(target);
      return template[str];
 }
  else{
      return ret;
 }
}