/*
 * @Date: 2022-07-10 11:08:30
 * @Description: this指向
 */

function foo() {
    console.log(11111);
    bar();
}
function bar() {
    console.log(2222);
    baz()
}
function baz() {
    console.log(333);
}

// foo();

function myNew(fn, ...args) {
    let obj = {};
    obj.__proto__ = myNew.prototype;
    const ret = fn.apply(obj, args); 
    return typeof ret === "object" ? ret : obj; 
}

function fooN(a) {
    this.a = a;
    return {
        a: this.a,
        b: 2
    }
}

const ins = myNew(fooN, 1);
console.log(11, ins, ins.a, ins.b);
