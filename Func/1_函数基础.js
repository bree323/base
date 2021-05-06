/*
 * @Author: yuan.zhou
 * @Date: 2021-04-18 11:40:01
 * @Descripton: 
 * @LastEditTime: 2021-05-06 22:00:27
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








