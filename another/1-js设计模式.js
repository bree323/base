/**《Javascript设计模式与开发实践》
 *  1、基础知识部分：  
        1.1-面向对象（多态、封装）； 
        1.2-this指向； 
        1.3-闭包与高阶函数
 *  2、设计模式：
        2.1-
 *  3、设计原则与编程技巧：
        3.1-
    4、其它备注：
 * */
function init() {
    let a = 0
}
/*  1、基础知识部分：---start */
// 1-1: 面向对象
    /** 1-1-1: 多态
            -同一操作作用于不同对象上面，可以产生不同的解释和不同的执行结果；
            -核心思想：将“做什么”与“谁去做以及怎样去做”分离开来
     */
const Sing = function( animal ) {
    if( animal.singSong instanceof Function ) {
        animal.singSong()
    }
}

const Duck = function( options ) {
    this.sort = "鸭子"
    this.name = options.name
}
Duck.prototype.singSong = function() {
    console.log("嘎嘎嘎")
}

const Chicken = function( options ) {
    this.sort = "小鸡"
    this.name = options.name
}
Chicken.prototype.singSong = function() {
    console.log("咯咯咯")
}

const duck = new Duck( {name: "唐老鸭"} )
const chicken = new Chicken( {name: "汤姆"} )
// Sing( duck )
// Sing( chicken )

    /* 1-1-2：封装
            -广义的封装：封装数据、封装实现、封装类型、封装变化
            -z参考ts中的接口权限：private、public、protected、readonly
    */
    
/*  1、基础知识部分：---end */