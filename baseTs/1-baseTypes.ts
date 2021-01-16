// 1-基础数据静态类型
let num1: number= 1
// console.log(num1, num1.toFixed(2))

// 2-对象类型   
    // 2-1 对象（狭义）
    interface Vegtable {
        name: string;
        price: number;
        // howDo?: string;
        [propName: string]: string | number;
    }

    let tomato: Vegtable = {
        name: "土豆",
        price: 1.00,
        size: "big",
    }

    // 2-2 数组
    let arr: string[] = ['1','2']
        // 或者使用泛型
    let arr1: Array<number> = [1,2,3]

    // 2-3 元组tuple


    // 3-函数
        // 函数类型包含两部分：参数类型和返回值类型。
    // 3-1
        function add(x: number, y: number): string {
            return (x+y).toString()
        }
    
    // 3-2 
        let myAdd = (x: number, y: number): boolean　=> {
            let total = x + y
            return !!total
        }

    
    // 4-class类
    class Person {
        hair = "black"
    }
    let bree: Person = new Person()
    // console.log(bree.hair)





// 类型注解与类型推断
let xx = 1
let yy = 2
let addFn = function(x: number, y: number) {
    return x +  y + ''
}

let addTotal = addFn(xx, yy)
// console.log(addTotal)

const obj = {
    name: "bree",
    age: 18
}
obj.name = "zoe"
// console.log({obj})




// Date
let date = Date()
// console.log(date, typeof date)

let dateNew0 = new Date("2020, 1, 12")
// 日期的运算
let d1 = new Date("2020, 12, 10").getTime()
let d2 = new Date(Date.parse("2020, 12, 12, 12")).getTime()
let distance = Number(d2) - Number(d1)
let day = distance / (24*3600*1000)
console.log({d1, d2, distance, day})


let dateNew = new Date(Date.parse("2020, 1, 12"))
// console.log(dateNew0.toString(), dateNew.toString(), typeof dateNew)

// console.log(dateNew.toISOString() === dateNew.toJSON())


// console.log(typeof localTime.toLocaleString())
let localTime = new Date().toLocaleString("zh-CN", {
    hour12: false,
}).replace(/\//g, "-")

console.log({localTime})

let now = Date.now()
console.log({now})


let arr12  = [1,2,3]
console.log(arr12[1])


//封装函数   --日期对象的类型检查
// const dateFormat = function(fmt, date) {
//     let ret;
//     const opt: object = {
//         "y+": date.getFullYear().toString(),        // 年
//         "M+": (date.getMonth() + 1).toString(),     // 月
//         "d+": date.getDate().toString(),            // 日
//         "H+": date.getHours().toString(),           // 时
//         "m+": date.getMinutes().toString(),         // 分
//         "s+": date.getSeconds().toString(),         // 秒
//         "S+": date.getMilliseconds().toString()     // 毫秒
//         // 有其他格式化字符需求可以继续添加，必须转化成字符串
//     };
//     for (let k in opt) {
//         ret = new RegExp("(" + k + ")").exec(fmt);
//         if (ret) {
//             fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
//         };
//     };
//     return fmt;
// }

//使用 
// let crtime = dateFormat("yyyy-MM-dd HH:mm:ss", new Date());
// console.log({crtime})