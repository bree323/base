/*
 * @Author: yuan.zhou
 * @Date: 2021-04-18 11:40:16
 * @Descripton: 闭包
 * @LastEditTime: 2021-04-18 23:45:48
 */
/* 1-闭包简介 
  js作用域链的查找机制: 作用域链的查找是线性、有序的，外部执行上下文不能访问内部执行上下文
  但是，又是不得不需要在外部执行上下文中获取到内部执行上下文中的变量或方法，这就是闭包的作用
*/
(function() {
  let a = 0
  const outerFun = function() {
    let a = 1
    const innerFun = function() {
      console.log(a) // 内部变量
    }
    return innerFun()
  }
  console.log(a);
  outerFun() 
});

/* 2-使用闭包 
 *缓存变量，让外部函数可以访问内部函数中的变量或者方法
 *封装对象的私有属性或方法
*/
// 2-1缓存变量
(function() {
  const addByStart = function( start ) {
    return function() {
      return start++
    }
  }
  const addBy5 = addByStart(5) // 这里执行addByStart，相当于在内存中开辟了一个崭新的空间，由变量addBy5指向这个全新的空间。下面addBy10也是开辟了一个全新的空间，所以两者之间的变量不会冲突
  const addBy10 = addByStart(10)
  let res1 = addBy5()
  let res11 = addBy10()
  let res2 = addBy5()
  let res22 = addBy10()
  let res3 = addBy5()
  let res33 = addBy10()
  console.log({res1,res2,res3},{res11,res22,res33}, 'addBy5、addBy10中都缓存了变量start');
});

/* 2-2 封装私有属性和方法 */
(function() {
  const tool = function() {
    const add = function(a, b) {
      return a+b
    }
    const ret = function(arr) {
      return [...new Set(arr)]
    }
  
    return {
      add,
      ret
    }
  }
  
  const tool_1 = tool()
  let add_res = tool_1.add(1,2)
  let ret_res = tool_1.ret([1,1,2,31,1,2])
  console.log({add_res, ret_res});
});
