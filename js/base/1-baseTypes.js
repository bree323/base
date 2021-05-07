/*
 * @Author: yuan.zhou
 * @Date: 2021-04-18 11:25:14
 * @Descripton: 
 * @LastEditTime: 2021-05-07 23:05:17
 */
"use strict";
// 1-基础数据静态类型
var num1 = 1;
console.log(num1, num1.toFixed(2));
var tomato = {
    name: "土豆",
    price: 1.00,
    size: "big",
};
// 2-2 数组
var arr = ['1', '2'];
// 或者使用泛型
var arr1 = [1, 2, 3];
// 2-3 元组tuple
// 3-函数
// 函数类型包含两部分：参数类型和返回值类型。
// 3-1
function add(x, y) {
    return (x + y).toString();
}
// 3-2 
var myAdd = function (x, y) {
    var total = x + y;
    return !!total;
};
// 4-class类
var Person = /** @class */ (function () {
    function Person() {
        this.hair = "black";
    }
    return Person;
}());
var bree = new Person();
// console.log(bree.hair)
// 类型注解与类型推断
var xx = 1;
var yy = 2;
var addFn = function (x, y) {
    return x + y + '';
};
var addTotal = addFn(xx, yy);
console.log(addTotal);
var obj = {
    name: "bree",
    age: 18
};
obj.name = "zoe";
console.log({ obj: obj });
