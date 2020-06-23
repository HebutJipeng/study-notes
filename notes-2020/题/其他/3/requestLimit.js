function requestLimit(urls, max, callback) {
    let idx = 0
    let length = urls.length
    let res = []
    return new Promise(resolve => {
        let handler = () => {
            if (urls.length) {
                const url = urls.shift()
                fetch(url).then(res => {
                    res[idx] = res
                    idx ++
                    handler()
                })
            }
            if (res.length === length) {
                callback()
                resolve(res)
            }
        }

        for (let i = 0; i < max; i++) {
            handler()
        }
    })
}