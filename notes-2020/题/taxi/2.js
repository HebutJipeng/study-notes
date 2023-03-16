function copy(obj) {
    if (obj === null) {
        return null
    }
    if (typeof obj === 'function') {
        return new function(obj) {
            
        }
    }
    let _obj = new obj.__proto__.constructor()
    for (var key in obj) {
        if (typeof obj[key] == 'Object') {
            _obj[key] = copy(obj[key])
        } else {
            _obj[key] = obj[key]
        }
    }
    return _obj
}

console.log(copy({
    a: 1,
    b: 2,
    c: {
        d: 2,
        x: 0
    }
}))

console.log([1, 2, 3])