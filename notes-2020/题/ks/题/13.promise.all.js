function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let res = []
        let l = promises.length
        let idx = 0
        for (let i = 0; i < l; i++) {
            promise.then(r => {
                idx ++
                res[index] = r
                if (idx === l) {
                    resolve(res)
                }
            }).catch(e => {
                reject(e)
            })
        }
    })
}

function promiseRate(promises) {
    const l = promises.length
   return new Promise((resolve, reject) => {
       for (let i = 0; i < l; i++) {
           promises[i].then(res => {
               resolve(res)
           }).catch(err => {
               reject(err)
           })
       }
   }) 
}