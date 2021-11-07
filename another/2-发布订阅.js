/*
 * @Date: 2021-08-30 21:54:58
 * @Descripton: 
 * @LastEditTime: 2021-08-31 00:26:57
 */
let corp = {};   // 自定义一个公司对象
// 这里放一个列表用来缓存回调函数
corp.list = [];
// 去订阅事件
corp.on = function (type, fn) {
    // 二话不说，直接把fn先存到列表中
    this.list.push({type: type, fn: fn});
};
// 发布事件
corp.emit = function () {
    // 当发布的时候再把列表里存的函数依次执行
    /* this.list.forEach(cb => {
        cb.apply(this, arguments);
    }); */
    let ff = this.list.find( foo => foo.type === Array.from(arguments).shift())
    ff.fn && ff.fn.apply(this, Array.from(arguments).splice(1))
};
// 测试用例
corp.on('job', function (position, salary) {
    console.log('你的职位是：' + position);
    console.log('期望薪水：' + salary);
});
corp.on('hobby', function(skill, hobby) {
    console.log('你的技能有： ' + skill);
    console.log('爱好： ' + hobby);
});

// corp.emit('job','前端', 10000);
// corp.emit('hobby', '端茶和倒水', '足球');
/*
    你的职位是：前端
    期望薪水：10000
    你的技能有： 前端
    爱好： 10000
    你的职位是：端茶和倒水
    期望薪水：足球
    你的技能有： 端茶和倒水
    爱好： 足球
*/ 



let event = {
  list: {},
  on(key, fn) {
      if (!this.list[key]) {
          this.list[key] = [];
      }
      this.list[key].push(fn);
  },
  emit() {
      let key = [].shift.call(arguments),
          fns = this.list[key];

      if (!fns || fns.length === 0) {
          return false;
      }
      fns.forEach(fn => {
          fn.apply(this, arguments);
      });
  },
  remove(key, fn) {
      // 这回我们加入了取消订阅的方法
      let fns = this.list[key];
      // 如果缓存列表中没有函数，返回false
      if (!fns) return false;
      // 如果没有传对应函数的话
      // 就会将key值对应缓存列表中的函数都清空掉
      if (!fn) {
          fns && (fns.length = 0);
      } else {
          // 遍历缓存列表，看看传入的fn与哪个函数相同
          // 如果相同就直接从缓存列表中删掉即可
          fns.forEach((cb, i) => {
              if (cb === fn) {
                  fns.splice(i, 1);
              }
          });
      }
  }
};

function cat() {
  console.log('一起喵喵喵');
}
function dog() {
  console.log('一起旺旺旺');
}

event.on('pet', data => {
  console.log('接收数据');
  console.log(data);
});
event.on('pet', cat);
event.on('pet', dog);
// 取消dog方法的订阅
event.remove('pet', dog);
// 发布
event.emit('pet', ['二哈', '波斯猫']);
/*
  接收数据
  [ '二哈', '波斯猫' ]
  一起喵喵喵
*/

function EventEmitter() {
  // 用Object.create(null)代替空对象{}
  // 好处是无杂质，不继承原型链的东东
  this._events = Object.create(null);
}
// 默认最多的绑定次数
EventEmitter.defaultMaxListeners = 10;
// 同on方法
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
// 返回监听的事件名
EventEmitter.prototype.eventNames = function () {
  return Object.keys(this._events);
};
// 设置最大监听数
EventEmitter.prototype.setMaxListeners = function (n) {
  this._count = n;
};
// 返回监听数
EventEmitter.prototype.getMaxListeners = function () {
  return this._count ? this._count : this.defaultMaxListeners;
};
// 监听
EventEmitter.prototype.on = function (type, cb, flag) {
  // 默认值，如果没有_events的话，就给它创建一个
  if (!this._events) {
      this._events = Object.create(null);
  }
  // 不是newListener 就应该让newListener执行以下
  if (type !== 'newListener') {
      this._events['newListener'] && this._events['newListener'].forEach(listener => {
          listener(type);
      });
  }
  if (this._events[type]) {
      // 根据传入的flag来决定是向前还是向后添加
      if (flag) {
          this._events[type].unshift(cb);
      } else {
          this._events[type].push(cb);
      }
  } else {
      this._events[type] = [cb];
  }
  // 监听的事件不能超过了设置的最大监听数
  if (this._events[type].length === this.getMaxListeners()) {
      console.warn('警告-警告-警告');
  }
};
// 向前添加
EventEmitter.prototype.prependListener = function (type, cb) {
  this.on(type, cb, true);
};
EventEmitter.prototype.prependOnceListener = function (type, cb) {
  this.once(type, cb, true);
};
// 监听一次
EventEmitter.prototype.once = function (type, cb, flag) {
  // 先绑定，调用后删除
  function wrap() {
      cb(...arguments);
      this.removeListener(type, wrap);
  }
  // 自定义属性
  wrap.listen = cb;
  this.on(type, wrap, flag);
};
// 删除监听类型
EventEmitter.prototype.removeListener = function (type, cb) {
  if (this._events[type]) {
      this._events[type] = this._events[type].filter(listener => {
          return cb !== listener && cb !== listener.listen;
      });
  }
};
EventEmitter.prototype.removeAllListener = function () {
  this._events = Object.create(null);
};
// 返回所有的监听类型
EventEmitter.prototype.listeners = function (type) {
  return this._events[type];
};
// 发布
EventEmitter.prototype.emit = function (type, ...args) {
  if (this._events[type]) {
      this._events[type].forEach(listener => {
          listener.call(this, ...args);
      });
  }
};

module.exports = EventEmitter;
