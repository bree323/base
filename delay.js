/*
 * @Author: yuan.zhou
 * @Date: 2021-07-20 23:29:36
 * @Descripton: 
 * @LastEditTime: 2021-07-21 00:09:57
 */
const delay_1 = function() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log(1000);
      resolve('1000-delay')
    }, 1000);
    console.log('1');
  })
}

const delay_2 = function() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log(2000);
      // delay_1()
      resolve('2000-delay')
    }, 2000);
    console.log('2');
  })
}

const doFn = async function() {
  let res1 = await delay_2()
  console.log(res1);
  let res2 = await delay_1()
  console.log(res2);
}

// doFn()


import ex  from './exportM.js';
console.log(ex);
ex()
// const exportM = require('./exportM')
// console.log(exportM);
