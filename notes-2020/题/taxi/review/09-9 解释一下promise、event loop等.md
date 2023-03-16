复习一下的内容
说一下对promise的了解;

event loop 概念;

手写代码考察的是

在同一个页面中调用我写的jsonp和de 会不会有问题

1. jsonp

2. debounce

3. 发布订阅模式
class Bus{
    constructor() {
        this.deps = []
    }

    emit(type, data) {
        if (this.deps[type]) {
            this.deps.forEach(cb => {
                cb(data)
            })
        }
    }
    on(type, cb) {
        if (this.deps[type]) {
            this.deps[type].push(cb)
        } else {
            this.deps[type] = [cb]
        }
    }
    off(type) {
        if (this.deps[type]) {
            this.deps[type] = null
        }
    }
    once(type, data) {
        this.emit(type, data)
        this.off(type, cb)
    }
}

<!-- 但是没有对闭包，原型链，变量提升有考察； -->