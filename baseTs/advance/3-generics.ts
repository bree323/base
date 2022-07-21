/*
 * @Date: 2022-07-21 10:37:16
 * @Description: 泛型
 * 定义函数、接口或类的时候，不预先指定具体的类型，而是在使用的时候再指定类型的一种特性
 */

/** 1 - example */
/* function createArr(len: number, val: any): any[] {
    let arr = [];
    for(let i = 0; i < len; i++) {
        arr.push(val)
    }
    return arr;
} */
function createArr<T>(len: number, val: T): Array<T> {
    let arr = [];
    for(let i = 0; i < len; i++) {
        arr.push(val)
    }
    return arr;
}

console.log(createArr(3, "0"));

// 泛型约束
function copyFields<T extends U, U>(target: T, source: U) : T {
    for(let key in target) {
        // (<T>source)[key] 这句代码的含义？
        target[key] = (<T>source)[key]
    }
    return target;
}

console.log(copyFields({a: 1, b: 2, c: 3}, {b: 4}));

// 泛型接口
interface fooFunc {
    <T>(len: number, val: T): Array<T>;
}
interface IFooParams {
    len: number;
    val: any;
}
const fooT: fooFunc = function<T>(len: number, val: T) : Array<T> {
    const arr: T[] = [];
    for(let i = 0; i < len; i++) {
        arr.push(val);
    }
    return arr;
}

console.log(fooT(3, "a"));
