/*
 * @Author: yuan.zhou
 * @Date: 2021-07-21 19:49:40
 * @Descripton: 
 * @LastEditTime: 2021-07-21 19:51:21
 */
const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});