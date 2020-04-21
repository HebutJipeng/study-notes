function objectFactory() {
    let obj = new Object()
    const Constructor = arguments.shift()
    obj._proto_ = Constructor.prototype
    const ret = Constructor.apply(obj, arguments    )
    return typeof ret === 'object' ? ret : obj
}