var x = 10
function a(y) {
    var x = 20
    return b(y)
}
function b(y) {
    return x + y
}
a(20)


// 30
// b 中的x 会获取创建函数时的 x