Function.prototype.bind = function(obj) {
    const _this = this
    return function (...args) {
        _this.apply(obj, args)
    }
}