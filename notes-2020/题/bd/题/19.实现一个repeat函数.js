function repeat1(str, n) {
    return new Array(n + 1).join(str)
}

function repeat2(str, n) {
    return n > 0 ? str.concat(repeat2(str, n--)) : ''
}
