function curry(fn) {
    let args = []
    return function() {
        if (arguments.length) {
            args.push(...arguments)
            return arguments.callee
        } else {
            return fn.apply(this, args)
        }
    }
}