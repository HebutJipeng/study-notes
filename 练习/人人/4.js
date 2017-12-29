var a = 239190934851
var _a = a.toString().replace(/(\d{4})/g, '$1 ').trim()
console.log(_a)

var b = 1582987
_b = b.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,')
console.log(_b)