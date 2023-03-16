function sendRequest(_urls, max, callback){
    //TODO
    let res = []
    let idx = 0
    const l = urls.length
    let urls = [].concat(_urls)

    let promises = urls.splice(0, max).map((url, index) => {
        return fetch(url).then(function (re1) {
            res[idx ++] = re1
            if (idx === l) {
                callback()
            }
            return index
        })
    })

    let p = Promise.race(promises)
    for (let i = 0; i < urls.length; i++) {
        p = p.then(res => {
            promises[res] = fetch(url[i]).then(re2 => {
                re[idx ++ ] = re2
                if (idx === l) {
                    callback()
                }
                return res
            })
        })
    }
}