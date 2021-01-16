"use strict";
var unioTypeVariable = function (arg) {
    var returnVal = 0;
    if (typeof arg === "string") {
        // return arg.length
        returnVal = arg.length;
    }
    if (typeof arg === "number") {
        // return arg
        returnVal = arg;
    }
    // returnNone( {msg: "ok?"} )
    return returnVal;
};
console.log(unioTypeVariable("str"));
