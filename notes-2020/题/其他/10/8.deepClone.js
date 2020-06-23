// WeakMap 键是弱引用，并且键只能是对象，而值是任意的。
function deepClone(obj, map = new WeakMap()) {
    if (obj !== null && typeof obj === 'object') {
        let _obj = Array.isArray(obj) ? [] : {}

        if (map.has(obj)) {
            return map.get(obj)
        }
        map.set(obj, _obj)

        if (Object.prototype.toString.call(obj) === '[Object xxx]') {
            // xxx
        }

        for (let i in _obj) {
            _obj[i] = deepClone(obj[i])
        }
    } else {
        return obj
    }
}