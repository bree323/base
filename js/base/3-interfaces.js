"use strict";
// ts中的接口就是用来规范类型的
var tom = {
    id: 9527,
    name: "tom",
    age: 22,
    sex: "men",
    height: 120
};
var tony = {
    id: 156,
    name: "tony",
    age: 22,
};
/**
 *
 * @param girl
 */
var getGir = function (girl) {
    console.log(girl.name + "\u7684\u5E74\u9F84\u662F" + girl.age + "\u5C81\uFF0C" + (!!girl.waistline && "腰围是" + girl.waistline));
};
var girl = {
    name: "大脚",
    age: 18,
    bust: 94,
    // waistline: 21,
    sex: "女",
};
getGir(girl);
