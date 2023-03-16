function newInstance(Con) {
    var obj = {}
    obj._proto_ = Con.prototype
    Con.call(obj)
    return obj
}