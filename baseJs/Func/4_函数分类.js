/*
 * @Author: yuan.zhou
 * @Date: 2021-04-18 23:41:25
 * @Descripton: 
 * @LastEditTime: 2021-05-07 21:58:44
 */
/* 1-纯函数与函数的副作用
* 纯函数：一个函数相同的输入只能有唯一的输出
* 函数的副作用： 如果在函数中引用了外层上下文中的变量，函数中修改了这个变量，外层也会被修改。这里需注意，函数中是否需对外部变量做更改。
*/
(function() {
  /* 纯函数 */
    let arr = [1,2,3]
    console.log(arr.slice(0,1)); // [1]
    console.log(arr.slice(0,1)); // [1]
    console.log(arr.slice(0,1)); // [1]
  /* 不纯函数 */
    console.log(arr.shift()); //1
    console.log(arr.shift()); //2
    console.log(arr.shift()); //3
   
  /* 函数可变性 */
    let a = 1
    const change = () => a = a+1
    change()
    console.log(a)  // 2  这里a被改变了，如果不想被改变，函数需按值传递

  /* 函数不可变性 */
    let b = 1 
    const change_1 = (b) => b = b+1
    change_1(b) 
    console.log(b) // 1 
  
});
  
/* 2-高阶函数
* 简单的说，一个函数接收函数作为参数或者将一个函数作为返回值返回
* 这种函数主要用于做把一个函数最为另一个函数的回调进行使用
*/
(function() {
  let cb = function(val) { console.log(val);}
  let req = function(data, cb) {
    cb && typeof cb === 'function' && cb(data)
  }
  req('data', cb)
});

/* 3-柯里化函数与偏函数
*  柯里化是将一个多参数函数转换成多个单参数的函数，也就是将一个n元函数转换成n个一元函数
*  偏函数则固定一个函数的一个或多个参数，也就是将一个n元函数转换成一个n-x元的函数
*
*  柯里化：f(a,b,c)=f(a)(b)(c)
*  偏函数：f(a,b,c)=f(a,b)(c)
*/
(function() {
/* 函数柯里化与偏函数概念 */
  (function() {
    const add = function(a, b, c) {
      return a+b+c
    }
    // 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一些列使用一个参数的函数技术（把接受多个参数的函数转换成几个单一参数的函数）
    const curryAdd = function(a) {
      return function(b){
        return function(c) {
          return a+b+c
        }
      }
    }
    console.log(add(1,2,3)); // 6 偏函数
    console.log(curryAdd(1)(2)(3)); // 柯里化函数
  });
/* 应用 */
  (function() {
    /*  1-检测字符串中是否有空格 */
      // 封装函数去检测
     const matching = (reg, str) => reg.test(str)
     console.log(matching(/\s+/g, 'zoe bree'));
      // 柯里化
      const curryMatching = reg => str => reg.test(str)
      const hasSpace = curryMatching(/\s+/g)
      console.log(hasSpace('zoe bree'));
    /* 2-使用bind实现偏函数 
    * 用bind函数实现偏函数，bind的另一个用法使一个函数拥有预设的初始参数，将这些参数写在bind的第一个参数后，
    * 当绑定函数调用时，会插入目标函数的初始位置，调用函数传入的参数会跟在bind传入的后面
    */
    const add = (x, y, z) => x+y+z
    const add_1 = add.bind(null, 1)
    console.log(add_1(2,3), add_1.valueOf());
  })();
});
