class bus {
    constructor() {
        this.deps = {}
    }

    emit(handler, data) {
        const funcs = this.deps[handler]
        if (funcs) {
            funcs.forEach(cb => {
                cb(data)
            })
        }
    }
    on(handler, cb) {
        if (!this.deps[handler]) {
            this.deps[handler] = []
        }

        this.deps[handler].push(cb)
    }
    off(handler, cb) {
        this.deps[handler] =  this.deps[handler] &&  this.deps[handler].filter(it => it !== cb)
    }
    once(handler, data) {
        this.emit(handler, data)
        this.off(handler)
    }
}