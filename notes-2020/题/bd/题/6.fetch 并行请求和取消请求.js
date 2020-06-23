function batchRequest(urls, handler, limit) {
    return new Promise(resolve => {
        let sequence = [].concat(urls)
        let promises = []
        let l = urls.length
        let i = 0
        let res = []

        promises = sequence.splice(0, limit).map((url, index) => {
            return handler(url).then(re1 => {
                res[i++] = re1
                if (i === l) {
                    resolve(res)
                }
                return index
            })
        })

        let p = Promise.race(promises)
        for (let i = 0; i < sequence.length; i++) {
            p = p.then(re2 => {
                promises[re2] = handler(sequence[i]).then(re3 => {
                    res[i++] = re3
                    if (i === l) {
                        resolve(res)
                    }
                    return re2
                })
                return Promise.race(promises)
            })
        }
    })
}

// 取消fetch
// https://juejin.im/entry/5af85b6f518825426a1fc8c8

// const con = new AbortController()
// const signal = con.signal

// fetch('', {}).then(...)

// con.abort()