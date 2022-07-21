/*
 * @Date: 2022-07-01 16:49:43
 * @Description: 类型断言
 * 手动指定一个值的类型
 * 语法 值 as 类型 （推荐）
 */

interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) : string {
    return animal.name;
}

function isCat(animal: Cat | Fish) : boolean {
    return typeof (animal as Cat).run === "function";
}

// 危险的类型断言
function run(animal: Cat | Fish) : void {
    // (animal as Cat).run();
    (animal as Cat).run?.();
}
const yu: Fish = {
    name: "小鱼儿",
    swim: () => { 
        console.log("小鱼儿") 
    }
}

run(yu);

// 类型断言 & 类型转换
function toBool(something: any): boolean {
    // return something as boolean;
    return !!something;
}
console.log(toBool(1));
