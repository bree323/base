/*
 * @Date: 2021-09-01 17:21:33
 * @Descripton:
 * less文件如何转换成css文件 
 * @LastEditTime: 2021-09-01 17:24:33
 */
const fs = require('fs');
// console.log({fs});
/* fs.rmdir('./txt.json', function(res) {
  console.log(res);
}) */


let data = `
div {
  li {
    display: flex
  }
}
`

let res = fs.readFileSync('./less.less')
console.log( res.toString() );


const r = {
  'div': {
    'li': {
      
    }
  }
}