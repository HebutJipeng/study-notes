// 传入 可以返回promise的handle， 限制最多并发两个

function limitRequest(urls, max, callback) {
    let idx = 0
    let length = urls.length

    const handler =  () => {
        if (urls.length) {
            const url = urls.shift()
            fetch(url).finally(() => {
                idx ++
                handler()
            })
        }

        if (idx >= length) {
            callback
        }
    }

    for (let i = 0; i < max; i++) {
        handler()
    }
}
