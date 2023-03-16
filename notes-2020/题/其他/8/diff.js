function diff(a, b) {
    let _b = new Set(b)
    let res = []
    for (let i = 0; i < a.length; i ++){
        const l = _b.size
        _b.add(a[i])
        if (_b.size == l) {
            res.push(a[i])
        }
    }
    return res
}

let a = [10, 1, 2, 3, 4]
let b = [2, 4, 5, 10]
console.log(diff(a, b))