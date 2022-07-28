/*
 * @Date: 2022-07-28 11:22:00
 * @Description: jest 测试
 */
const { Tools } = require('./index');
test('数字金额转换为中文大写金额', () => {
  expect( Tools.trans.moneyNum2ChineseUplower('202') ).toBe('贰佰零贰元整');
});
test('数字金额转换为中文大写金额', () => {
  expect( Tools.trans.moneyNum2ChineseUplower('10000000') ).toBe('壹仟万元整');
});
test('数字金额转换为中文大写金额', () => {
  expect( Tools.trans.moneyNum2ChineseUplower('100000000') ).toBe('壹亿元整');
});