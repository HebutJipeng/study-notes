const { debounce, throttle } = require('../2.decorator 实现防抖，节流函数')

var a = throttle(() => {
    console.log(111)
}, 5000)

setInterval(() => {
    a()
}, 1000);