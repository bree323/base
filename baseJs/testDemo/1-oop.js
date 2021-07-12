/*
 * @Author: yuan.zhou
 * @Date: 2021-07-12 23:00:54
 * @Descripton: oop
 * @LastEditTime: 2021-07-13 00:14:02
 */


function dog(y) {
  let x = 10
  this.x = x
  this.y = y
  return {
    x: 1000000000
  }
}

dog.prototype.sing = function() {
  console.log('wwww~~~');
}

// let commonres = dog()
// console.log({commonres});

// let newres = new dog()
// console.log({newres});
// newres.sing()
// console.dir(newres)



/* 
* 实现一个new的功能
* new指令做的事情：
  创建一个空对象，作为将要返回的对象实例。
  将这个空对象的原型，指向构造函数的prototype属性。
  将这个空对象赋值给函数内部的this关键字。
  开始执行构造函数内部的代码。
*/

const _new = function() {
  // 获取参数
  let args = Array.from(arguments) // Array.prototype.slice.call(arguments)
  // 取出构造函数
  let Fn = args.shift()

  // 创建一个对象，作为默认返回的实例对象，这个对象的__proto__指向构造函数的prototype
  let ctx = {}
  ctx.__proto__ = Fn.prototype  // let ctx = Object.create(Fn.prototype)

  // 执行Fn构造函数，构造函数的this指向创建的实例对象
  let resctx = Fn.apply(ctx, args)

  // 如果构造函数没有返回值，或者返回值不是object类型, 则一律返回新创建的实例对象
  return Object.prototype.toString.call(resctx) === '[object Object]' ? resctx : ctx

}

let _newDog = _new(dog, 100)
console.log({_newDog});
// _newDog.sing()