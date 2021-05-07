/*
 * @Author: yuan.zhou
 * @Date: 2021-04-18 11:40:01
 * @Descripton: 
 * @LastEditTime: 2021-05-06 22:15:23
 */
/* 1、函数参数的传递方式 - 按值传递
* 变量可以通过按值访问和按引用访问，但传参只有通过按值传递
*/
(function() {
  let zoe = {
    name: 'zoe'
  }
  const perSon = function(obj) {
    obj.name = 'bree'  // 改变obj地址值指向的obj对象中的name属性，赋值"bree"
    obj = new Object()  // 将obj地址值重新赋值，此时obj地址值的指针不再指向之前的obj地址值对应的obj对象，
    obj.name = 'new bree' // 新的对象添加name属性
    return obj
  }
  let my = perSon(zoe)
  console.log(my.name, zoe.name)  // 'new bree' 'bree'
});

/* 
* 2、手写实现函数的call、apply与bind 
*/
(function() {
  let window = {
    name: 'bree',
    age: 23,
  }
  
  let obj2 = {
    name: 'zoe',
    age: 25,
  }
  
  let age = 30
  let addAge = function( num ) {
    num = parseInt( num )
    console.log( this.age + num );
  }
  
  /**
   * 自定义实现call
   * @param {function} fn 传入的函数
   * @param {*} obj 需绑定的this对象
   * @param  {...any} args 参数
   */
  const _call = function( fn, obj, ...args ) {
    let res
  
    if( obj === null || obj === undefined ) {
      obj = window
    }
  
    obj.tempFn = fn
    res = obj.tempFn(...args)
    delete obj.tempFn
  
    return res
  }
  // _call( addAge, obj2, 2 )
  // _call( addAge, obj2, '12asdf' )
  
  /**
   * 手写实现apply方法  与call不同在于这里的参数作为数组传入
   * @param {*} fn 
   * @param {*} obj 
   * @param {*} args 
   */
  const _apply = function( fn, obj, args ) {
    let res
    if( obj === null || obj === undefined ) {
      obj = window
    }
  
    obj.tempFn = fn
    res = obj.tempFn(...args)
    delete obj.tempFn
    
    return res
  }
  
  // _apply( addAge, obj2, [10])
  /**
   * 手写实现bind
   * @param {*} fn 
   * @param {*} obj 
   * @param  {...any} args1 
   * @returns 绑定的新函数
   */
  const _bind = function( fn, obj, ...args1 ) {
    return function(...args2) {
      return _call( fn, obj, ...args1, ...args2 )
    }
  }
  // _bind( addAge, obj2, 20 )()
})();







