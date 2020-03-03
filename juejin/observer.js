function cb(val) {
    /** 渲染视图 */
    console.log('视图更新')
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true, // 可枚举
        configurable: true,
        get: function reactiveGetter() {
            return val
        },
        set: function recativeSetter(newVal) {
            if (val === newVal) {
                return 
            }
            cb(newVal)
        }
    })
}

function observer(value) {
    if (!value || typeof value !== 'object') {
        return 
    }

    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key])
    });
}

class Vue {
    constructor(options) {
        this._data = options.data
        observer(this._data)
    }
}

let o = new Vue({
    data: {
        test: 'test'
    }
})

o._data.test = 'aaa'