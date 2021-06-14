/*
 * @Author: yuan.zhou
 * @Date: 2021-06-13 09:46:35
 * @Descripton: 代码测试
 * @LastEditTime: 2021-06-13 12:19:16
 */

// 有效的括号
let str = '(]'
const isValid = function(str) {
  let stack = [], item
  let strMap = new Map([
      ['(', ')'],
      ['{', '}'],
      ['[', ']'],
  ])
  for(let i = 0, len = str.length; i < len; i++) {
      item = str.charAt(i)
      if(["{","[","("].includes(item)) { stack.push(item) }

      else if(["}","]",")"].includes(item)) { 
          let popItem = stack.pop()
          if( strMap.get(item) !== popItem) {
              return false
          }
      }
  }
  return !stack.length
}
console.time()
isValid(str)
console.timeEnd()