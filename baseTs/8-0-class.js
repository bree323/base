// es6 class补充

// 1-this的指向问题
class Logger {
    constructor() {
        // 通过bind改变this的指向
        this.printName = this.printName.bind(this)
    }
    printName(name = 'bind') {
        this.print(`Hello ${name}`);
    }
    printName1 = () => {
        this.print(`箭头函数确定this的指向`)
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const { printName } = logger;
printName();


// 2-静态成员
//2-1 静态方法
class Foo {
    static bar() {
      this.baz(); //静态方法中的this指向这个类，而不是实例对象
    }
    static baz() {
      console.log('hello');
    }
    baz() {
      console.log('world');
    }
  }
  
  Foo.bar() // hello

// 2-2 静态属性
class MyClass {
        static myStaticProp = 42;
      
        constructor() {
          console.log(MyClass.myStaticProp); // 42
        }
        say = () => {
            console.log(MyClass.myStaticProp)
        }
}
let ml = new MyClass()
console.log({ml})

class IncreasingCounter {
    _count = 0;
    get value() {
      console.log('Getting the current value!');
      return this._count;
    }
    increment() {
      this._count++;
      console.log(this._count)
    }
}
let inc = new IncreasingCounter()
inc.increment()
