var a = 'www.toutiao.com.cn'

function reverse1 (a) {
    return a.split('.').reverse().join('.')
}

console.log(reverse1(a) === 'cn.com.toutiao.www')