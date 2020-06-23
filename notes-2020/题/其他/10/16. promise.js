function requestLimit(urls, max) {
    let length = urls.length
    let result = []
    let idx = 0
    return new Promise(resolve => {
        const handler = (i) => {
            if (urls.length) {
                const url = urls.pop()
                fetch(url).then(res => {
                    idx ++
                    result[i] = res

                    if (idx === length) {
                        resolve(result)
                    }
                })
            }
        }
        for (let i = 0; i < length; i++) {
            handler(i)
        }
    })
}
function promise10(urls) {
    return new Promise(resolve => {
        let idx = 0
        let result = []
        let end = Math.ceil(urls.length / 10)
        while (urls.length) {
            const u = urls.splice(0, 10)
            requestLimit(u, 10).then((res) => {
                result[idx] = res
                if (idx === end) {
                    resolve(result)
                }
            })
            idx ++
        }
    })
}