/*
 * @Author: yuan.zhou
 * @Date: 2021-07-21 19:49:40
 * @Descripton: 
 * @LastEditTime: 2021-07-23 23:38:34
 */
const {numToZhUp, intToChinese} = require('../sum');
// let res = (new toUplower(123)).getNum()
// console.log({res});
/* test('adds 1 + 2 to equal 3', () => {
  expect( (new numToZhUp(2)).getZhNum() ).toBe('贰');
});
test('adds 1 + 2 to equal 3', () => {
  expect( (new numToZhUp(51)).getZhNum() ).toBe('伍拾壹');
});
test('adds 1 + 2 to equal 3', () => {
  expect( (new numToZhUp(93)).getZhNum() ).toBe('玖拾叁');
}); */
test('adds 1 + 2 to equal 3', () => {
  expect( intToChinese('202') ).toBe('贰百零贰');
});
test('adds 1 + 2 to equal 3', () => {
  expect( intToChinese('10000000') ).toBe('壹千万');
});
test('adds 1 + 2 to equal 3', () => {
  expect( intToChinese('100000000') ).toBe('壹亿');
});
/* === => ... <> += / * 
this.numZhMap = {
  0: '零',
  1: '壹',
  2: '贰',
  3: '叁',
  4: '肆',
  5: '伍',
  6: '陆',
  7: '柒',
  8: '拔',
  9: '玖',
} 
this.units = ['拾', '佰', '千', '万', '亿']
*/