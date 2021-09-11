/*
 * @Date: 2021-09-02 10:48:18
 * @Descripton: 
 * @LastEditTime: 2021-09-10 22:54:13
 */

function t0() {
  return new Promise(function () {
    setTimeout(() => {
      console.log('t0');
    }, 0)
  })
}
function t1() {
  return new Promise(function () {
    setTimeout( () => {
      console.log('t1');
    }, 1000)
  })
}

const fun = async function () {
  console.log(111);
  await t1()
  // await t0()
  // await setTimeout(() => {
  //   console.log('time1000');
  // }, 1000)
  // await setTimeout(() => {
  //   console.log('time0');
  // })
  await console.log(222);
}

// fun()


console.log('start') // 1

const fn1 = function () {
  console.log('fn1'); // 3
  return new Promise(function(resolve, reject) {
   setTimeout(() => {
    console.log({resolve});
    resolve('resolve')
    console.log({reject});
   }, 1000);
  })
}

const say = async function () {
  console.log('say start'); //2 
  await fn1() 
  console.log('say end'); //5
}

say()

console.log('end') // 4