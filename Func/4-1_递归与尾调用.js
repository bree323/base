/*
 * @Author: yuan.zhou
 * @Date: 2021-04-20 21:01:19
 * @Descripton: 递归与尾调用
 *  递归：函数自己调用自己  ---耗内存，因为需同时保存所有调用栈，易发生‘栈溢出’
 *  尾调用：某个函数的最后一步是调用另一个函数。
 *  尾递归 = 递归 + 尾调用
 * @LastEditTime: 2021-04-20 21:59:54
 */

/**
 * 从斐波拉契数列求和看递归、尾调用与尾递归
 * 斐波拉契数列：
 * 每一个数都是前二个数的和。头二项是0和1，此数列的前几项如下： 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
 */

/* 递归 */
(function() {
  let count = 0
  const fib = function(n) {
    count++
    if( n <= 1 ) {return n}
    return fib(n-2)+fib(n-1)
  }
  console.log('==========递归===========');
  console.log(fib(10)); 
  console.log(count);
  
})();

/* 尾调用 */
(function() {
  let count = 0
  const fib = function(n) {
    count++
    return dofib(0, 1, n)
  }
  // 尾递归
  function dofib(a, b, n) {
    console.log({n});
    count++
    if( n === 0 ) { return a }
    return dofib(b, a+b, n-1)
  }
  console.log('==========尾调用===========');
  console.log(fib(10)); 
  console.log(count);
})();