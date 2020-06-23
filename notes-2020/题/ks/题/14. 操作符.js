var a = {x: 1}
var b = a
a.x = a = {n: 1}
console.log(a)
console.log(b)

a => { n : 1}
b => { x : { n: 1}}

// 由于. 操作符的优先级比 = 高，所以先把a.x 换位 {x:1}.x来理解