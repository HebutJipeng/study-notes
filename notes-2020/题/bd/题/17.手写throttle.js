function throttle(fn, limit) {
    let flag = false
    return function (...args) {
        if (flag) return
        flag = true
        setTimeout(() => {
            fn.call(this, ...args)
            flag = false
        }, limit);
    }
}