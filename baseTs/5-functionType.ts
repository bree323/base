// 1-函数的参数
interface numArgType {
    xx: number,
    yy: number
}
const argFun = function( {xx, yy}: numArgType ): number {
    return xx + yy
}
const argTotal = argFun({xx: 1, yy: 1})
// console.log({argTotal})

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


