// 节流 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
exports.throttle = function (fn, limit = 1000) {
    let flag = true;
    return function () {
      if (!flag) {
        return;
      }
      flag = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        flag = true;
      }, limit);
    };
  }

// 防抖 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
exports.debounce = function (fn, limit = 1000) {
    let flag = null;
    return function () {
      clearTimeout(flag);
      flag = setTimeout(() => {
        fn.apply(this, arguments);
      }, limit);
    };
  }

