function translate(m, r) {
    let s = m + ''
    return parseInt(s, 36).toString(r)
}

console.log(translate(20, 10))