// 随机数 现在还不知道啥叫洗牌
// const random = function (arr) {
//     return arr.sort(function (a, b) {
//         return Math.random() - 0.5
//     })
// }

// console.log(random([1, 2, 3, 4, 5, 6,7,8,9,10]))

// 是一种产生随机数组的方法
const shuffle = function (arr) {
    let copy = []
    const array = [].concat(arr)
    let n = array.length
    while (n) {
        let i = Math.floor(array.length * Math.random())
        if (i in array) {
            copy.push(array[i])
            delete array[i]
            n-- 
        }
    }
    return copy
}


const shuffle2 = function (arr) {
    let array = [].concat(arr)
    let n = array.length - 1
    while (n) {
        let i = Math.floor(Math.random() * (n + 1))
        let temp = array[n]
        array[n] = array[i]
        array[i] = temp
        n--
    }
    return array
}

console.log(shuffle2([1, 2, 3, 4, 5, 6,7,8,9,10]))