var a = new RegExp(/^\w+@\w+[\.com | \.cn]+$/)
var b = 'hello1988@gmail.com'
var c = 'hello1987@didichuxing.com.cn'
var d = '1@fasdf.ab'
console.log(a.test(b))
console.log(a.test(c))
console.log(a.test(d))

