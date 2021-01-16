"use strict";
console.log("hello typescript");
// 这是注释
var str = '';
var num = 1;
// void
var vo;
var voNull = vo;
var voUndefind = undefined;
/**
 * @param msg: string
 * @param notice: string
 */
var returnNone = function (_a) {
    var msg = _a.msg, notice = _a.notice;
    console.log("void: " + msg + notice);
};
var mapObj = function (persons) {
};
var strFiledName = "firstName";
var Tom = {
    name: "tom",
    age: 22,
    secondName: "sec",
};
Tom[strFiledName] = "zoe";
var Tony = {
    name: "tony",
    age: "23",
    hobby: "coding"
};
/**
@params  none
*/
var consoleLog = function () {
    console.log({ str: str, num: num });
    console.log({ voNull: voNull, voUndefind: voUndefind });
    console.log({ Tom: Tom });
};
var initPage = function () {
    consoleLog();
    returnNone({ msg: '无返回值的函数' });
};
initPage();
