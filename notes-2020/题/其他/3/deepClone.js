// weak map 弱引用
function deepClone(obj, map = new WeakMap()) {
    if (obj !== null && typeof obj === 'object') {
        let _obj = Array.isArray(obj) ? [] : {}
        if (map.has(obj)) {
            return map.get(obj)
        }
        map.set(obj, _obj)

        if (Object.prototype.toString.call(obj) === '[Object Reg]') {
            ...
        }

        if (Object.prototype.toString.call(obj) === '[Object date]') {
            return obj.constructor()
        }

        for (let i in obj) {
            _obj[i] = deepClone(obj[i], map)
            return _obj
        }
    } else {
        return obj
    }
}