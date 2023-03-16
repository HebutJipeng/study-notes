function partial(fn, ...args) {
    return function(...argss) {
        fn.apply(this, [...args, ...argss])
    }
}