Function.prototype.bind2 = function(context) {
    let self = this
    let args = arguments.slice(1)
    
    let fNOP = function() {}
    let fBound = function () {
        let bindArgs = arguments.slice()
        return self.apply(this instanceof fNOP? this : context, args.concat(bindArgs))
    }

    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
}