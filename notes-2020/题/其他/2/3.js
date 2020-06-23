function find(obj, str) {
    var arr = str.split('.')
    while (arr.length) {
        var temp = arr.shift()
        if (obj[temp]) {
            obj = obj[temp]
        } else {
            return undefined
        }
    }
    return obj
}

var obj = {
    a: {
        b: {
            c: 1
        }
    }
}
console.log(find(obj, 'a.b.c'))
console.log(find(obj, 'a.d.c'))
