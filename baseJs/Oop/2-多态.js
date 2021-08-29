/*
 * @Date: 2021-08-10 22:50:47
 * @Descripton: 多态 
 * 多态背后的思想是将‘做什么’和谁去做以及怎样去做‘分离开来，也就是将’不变的事物‘与’可能改变的事物‘分离开
 * @LastEditTime: 2021-08-29 12:18:04
 */

const singSong = function (animal) {
  animal.sing()
}


const Dog = function () {
  // console.log('');
}
Dog.prototype.sing = function () {
  console.log('汪汪汪');
}

const Chicken = function () {

}
Chicken.prototype.sing = function () {
  console.log('箩箩箩');
}



// singSong(new Dog())
// singSong(new Chicken())




/** 
 * 危险的继承
 * 定义在原型函数上的属性，在实例中时共享的，一个实例更改了这个属性，其他实例的这个属性也会发生变化
 * 所以实例变化的部分应该挂载在this上，不变的挂载在prototype上
 */

const Fn = function () {
  this.arr = [1, 2]
  this.arrs = null
  this.getArrs()
}
Fn.prototype.getArrs = function () {
  this.arrs = [9,9,9]
}
Fn.prototype.dangerArr = [1,1,1]

/* let fn_1 = new Fn()
let fn_2 = new Fn()
fn_1.arr.push(0)
fn_1.arrs.push(99999999)
fn_1.dangerArr.push(000)
// console.log({fn_1.dangerArr, fn_2});
console.log(fn_1.arrs === fn_2.arrs);
console.log(fn_1.arr === fn_2.arr);
console.log(fn_1.dangerArr === fn_2.dangerArr);
 */
let phoneReg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
console.log(phoneReg.test('18185060235'));