"use strict";
var argFun = function (_a) {
    var xx = _a.xx, yy = _a.yy;
    return xx + yy;
};
var argTotal = argFun({ xx: 1, yy: 1 });
// console.log({argTotal})
// 2-函数的返回值
// 2-1 返回值void
var voidFun = function () {
    console.log("this function return nothing");
};
// console.log( voidFun() )   // undefined
// 2-2返回值never
var neverFun = function () {
    while (true) {
        console.log("this function runing forever");
    }
};
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === "string") {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(1));
console.log(reverse('this is a word'));
