class Promise {
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined

        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value

                this.onFulfilledCallbacks.forEach(fn => fn())
            }
        }

        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason

                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)    
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled: value => value
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err}
        let promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
                
            }

            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
                
            }

            if (this.state === 'pending') {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject) 
                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
                    
                })

                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
                })
                
            }
        })

        return promise2
    }
}

resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('xx'))
    }

    let called
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) {
                        return
                    }
                    callled = true
                    resolvePromise(promise2, y, resolve, reject)
                }, err => {
                    if (called) {
                        return
                    }
                    callled = true
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (err) {
            if (called) {
                return
            }
            called = true
            reject(err)
        }
    } else {
        reject(x)
    }
}