const limitRequest = (limit, handler, data) => {
    return new Promise(resolve => {
        var sequence = [].concat(data)
        var promise = []
        var i = limit
        promise = sequence.splice(0, limit).map((item, index) => handler(item).then(() => {
            return index
        }))
        async function loop() {
            let p = Promise.race(promise)
            p.then(res => {
                promise[res] = handler(sequence[i++]).then(() => {
                    return res
                })
                if (i < sequence.length) {
                    loop()
                }
            })
        }
        loop()
    })
}