function ran(arr) {
    let n = arr.length - 1
    let array = [].concat(arr)
    while (n) {
        let i = Math.floor(Math.random() * (n + 1))
        let temp = array[n]
        array[n] = array[i]
        array[i] = temp
        n -- 
    }
    return array
}