/*
 * @Date: 2021-08-10 22:50:47
 * @Descripton: 多态 
 * 多态背后的思想是将‘做什么’和谁去做以及怎样去做‘分离开来，也就是将’不变的事物‘与’可能改变的事物‘分离开
 * @LastEditTime: 2021-08-10 23:21:25
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



singSong(new Dog())
singSong(new Chicken())