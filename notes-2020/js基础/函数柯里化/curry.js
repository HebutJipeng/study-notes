// 初步封装
const curry1 = function (fn) {
   const args = Array.prototype.slice.call(arguments, 1) 
   return function () {
       const newArgs = args.concat(Array.prototype.slice.call(arguments))
       fn.apply(this, newArgs)
   }
}

// 二次
const curry = function (fn, args) {
    args = args || []
    const length = fn.length
    return function () {
        let _args = Array.prototype.slice.call(args)
        _args = _args.concat(Array.prototype.slice.call(arguments))
        
        if (_args.length < length) {
            return curry.call(this, fn, _args)
        } else {
            return fn.apply(this, _args)
        }
    }
}