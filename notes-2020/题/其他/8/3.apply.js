Function.prototype.call = function(obj) {
    obj.fn = this
    var args = arguments.slice(1)
    obj.fn(args)
    delete obj.fn
}

Function.prototype.apply = function (obj, args) {
    obj.fn = this
    obj.fn(args)
    delete obj.fn
}

Function.prototype.bind = function (obj) {
    let _this = this
    return function (args) {
        _this.apply(obj, args)
    }
}