function throttle (fn) {
    let timer = null
    let timer2 = null
    return function(...args) {
        const _this = this
        if(timer2) {
            clearTimeout(timer2)
        }

        if(timer) {
            timer2 = setTimeout(() => {
                console.log('de', new Date())
                fn.apply(_this, args)
                timer2 = null
            }, 500);
            return
        }
        timer = setTimeout(() => {
            console.log('th', new Date())
            fn.apply(_this, args)
            timer = null
        }, 500);
    }
}

var a = throttle(function() {
})

let count = 0
let at = setInterval(() => {
    if (count == 15) {
        clearInterval(at)
    } else {
        count ++
    }
    console.log('==>', new Date())
    a()
}, 100);