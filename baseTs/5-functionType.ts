/*
 * @Date: 2022-07-01 16:49:43
 * @Description: 函数的类型
 */
// 1-1 函数的参数
// 函数声明式
function fun(num: number) : string {
    return num + "";
}
// 函数表达式
const fun1: (num: number) => string = function(num: number) : string {
    return num + "";
}
// 接口定义函数参数
interface numArgType {
    xx: number;
    yy: number;
}
const argFun = function( {xx, yy}: numArgType ): number {
    return xx + yy
}

// 接口定义函数的形状
interface searchFunc {
    (num: number, str: string): string;
}
const mySearch: searchFunc = function(num: number, str: string) : string {
    return num + str;
}

// 接口定义函数参数
interface IParams {
    num: number;
    str: string;
}
const foo: ({num, str}: IParams) => string = function({num, str} : IParams) : string {
    return num + str;
}

// 2-函数的返回值
// 2-1 返回值void
const voidFun = (): void => {
    console.log("this function return nothing")
}
// console.log( voidFun() )   // undefined

// 2-2返回值never
const neverFun = () => {
    while( true ) {
        console.log("this function runing forever")
    }
}

// console.log( neverFun() )



// ++ 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if( typeof x === "number" ) {
        return Number( x.toString().split('').reverse().join('') )
    } else if( typeof x === "string" ) {
        return x.split('').reverse().join('')
    }
}

console.log(reverse(1))
console.log(reverse('this is a word'))


