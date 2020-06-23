// ### 把promise那个题再看一遍；

// 着重看下，多个微任务之间的顺序； 还有就是后一个微任务的输出如何在前面?

// finally() 方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。

console.log('start')

new Promise(resolve => {
    console.log(1)
    // throw new Error()
    resolve(1)
}).then(res => {
    console.log(4)
    // throw new Error()
    setTimeout(() => {
        console.log(2)
    }, 0);
    Promise.resolve().then(r => {
        console.log('01')
    }).then(r => {
        console.log('03')
    }).then(r => {
        console.log('04')
    }).finally(() => {
        console.log('pre finally')
    })
}, err => {
    console.log('err =>', err)
}).then(res => {
    console.log(3)
    Promise.resolve().then(r => {
        console.log('02')
    }).then(r => {
        console.log('05')
    }).finally(() => {
        console.log('after finally')
    })
}).finally(res => {
    console.log('finally')
}).catch(err => {
    console.log('err => 1')
}).then(res => {
    console.log('after err')
})
// limit request