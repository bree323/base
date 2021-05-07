/*
 * @Author: yuan.zhou
 * @Date: 2021-04-19 00:50:52
 * @Descripton: 
 * @LastEditTime: 2021-05-07 23:01:22
 */
/* 浅拷贝：
    说明：只复制一层对象，当对象的属性是引用类型时，实质复制的是其引用，当引用值发生改变时，也会跟着改变
    实现方案： 1、for in遍历
              2、Object.assign(target,source) (适用于对象)
              3、扩展运算符...
              4、slice(适用于数组)
*/
(function() {
  let shallCopy = obj =>{
    let rst={}
    for(let key in obj){
      //只复制本身的属性（非继承过来的属性）枚举属性
      if(Object.prototype.hasOwnProperty.call(obj, key)){
        rst[key]=obj[key]
      }
    }
    return rst
  }
  
  let start ={
    name:'古力娜扎',
    age:'22',
    friend:{
      name:'邓超'
    }
  }
  let copyStart = shallCopy(start)
  copyStart.name="热巴"
  copyStart.friend.name='黄渤'
  // 拷贝的第一层层如果是引用类型，拷贝的其实是一个指针，所以拷贝对象改变会影响原对象
  console.log('for in遍历实现的浅拷贝', {start, copyStart})
  
  let obj1 = {
    name: 'zoe',
    age: 23,
    hobby: ['code','music'],
    height: 22,
  }
  
  let obj2 = {
    name: 'bree',
    age: 27,
    hobby: ['run'],
  }
  /* Object.assign(target, source)拷贝的是可枚举属性，源对象中的属性会覆盖目标对象中的属性 */
  let assignObj = Object.assign(obj1, obj2)
  console.log('Object.assing实现的浅拷贝',{assignObj});

  /* 扩展运算符同Object.assign实现的效果类似 */
  console.log('扩展运算符...', {...obj1, ...obj2});

  /* slice是针对与数组的浅拷贝 */
  let arr = [1, 2, 3, {num: 666}]
  arr.slice()[3].num = 7777
  console.log('slice浅拷贝数组', arr.slice(), {arr});
});



/* 深拷贝：
    说明：深拷贝是另外申请了一块内存，内容和原来一样，更改原对象，拷贝对象不会发生改变
    实现方案： 1、JSON.parse(JSON.stringify(obj))
              2、递归实现深拷贝 
*/
(function() {
  let obj = {
    name: '小明',
    dog: ['小花', '旺财']
  }

  let copy = JSON.parse(JSON.stringify(obj));
  copy.name = '小华';
  copy.dog[0] = '小白';
  console.log('通过JSON.parse(JSON.stringify实现深拷贝', {obj, copy})   //  {name: "小明", dog: ['小花', '旺财']}
  // 原数组并没有改变，说明实现了深拷贝


  let originArr = [{
    name:'开心',
    car:['宝马','奔驰','保时捷'],
    deive:function (){},
    age:undefined
  }]
    /*1、JSON.parse(JSON.stringify(obj))拷贝的缺点
  当属性值为undefined，函数，Symbol,不能被JSON序列化，会丢失纯的JSON数据，不包含循环引用
  */
  let copyArr = JSON.parse(JSON.stringify(originArr));
  console.log('通过JSON.parse(JSON.stringify实现深拷贝的缺点',copyArr);

  /* 递归实现深拷贝 */
  let deepClone = obj => {
    let newObj = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && typeof obj[key] === 'object') {
            newObj[key] = deepClone(obj[key]);
          } else {
            // 如果不是对象直接拷贝
            newObj[key] = obj[key];
          }
        }
      }
    }
    return newObj;
  }

  let originObj = {
    name: '开心',
    car: ['宝马', '奔驰', '保时捷'],
    deive: function () { },
    age: undefined
  }

  let copyObj = deepClone(originObj);

  copyObj.deive = '渣男开大G';
  copyObj.name = '小明';
  copyObj.car = ['哈罗单车', '膜拜'];
  // copyObj.age = 20;

  console.log({originObj, copyObj});

})();