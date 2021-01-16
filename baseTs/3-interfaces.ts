// ts中的接口就是用来规范类型的

interface interPerson {
    readonly id: number;
    name: string;
    age: number;
    [prop: string]: any;
    sex?: string
}

let tom: interPerson = {
    id: 9527,
    name: "tom",
    age: 22,
    sex: "men",
    height: 120
}

let tony: interPerson = {
    id: 0o234,
    name: "tony",
    age: 22,
}

// 接口的可选值和任意值
interface Girl {
    name: string;
    age: number;
    waistline?: number;
    [propname: string]: string | number | undefined;
  }
/**
 * 
 * @param girl 
 */
    const getGir = (girl: Girl): void => {
        console.log(`${girl.name}的年龄是${girl.age}岁，${!!girl.waistline && "腰围是" + girl.waistline}`)
    }
    let girl = {
        name: "大脚",
        age: 18,
        bust: 94,
        // waistline: 21,
        sex: "女",
    }
    getGir( girl )

// 
    
// 类型别名： type
type typePerson = {
    name: string,
    age: number,
}


// 类型别名与接口的区别：
    // 类型别名可以直接给类型，比如string，而接口必须代表对象。
    type getTypeName = string
    type getTypeName1 = {
        name: string
    }

    interface getInterfaceName {
        name: string
    }

