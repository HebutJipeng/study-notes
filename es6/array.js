// 扩展运算符
// console.log(...[1, 2, 3])

let log = (...items) => console.log(items)

const arr = [
	...(x > 0 ? ['a'] : []),
	'b',
]

[...[], 1]

// 替代函数的apply方法
// 
// es5
function f(x, y, z) { }
var args = [0, 1, 2]
f.apply(null, args)

// es6
function f(x, y, z) {}
let args = [0, 1, 2]
f(...args)

// 扩展运算符的应用
const a1 = [1, 2]
const a2 = a1;

a2[0] = 2;
a1 // [2, 2]

// a2 并不是 a1 的克隆 而是指向同一份数据的另一个指针，修改a2， 会直接导致a1 变化

// es5 只能用变通方法来赋值数组
const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
a1 // [1, 2]

// 数组合并

// es5 
[1, 2].concat(more)
// es6
[1, 2, ...more]

// 与结构赋值结合
// es5
a = list[0], rest = list.slice(1)
// es6
[a, ...rest] = list

const [first, ...rest] = [1, 2, 3,4,5]
// first -> 1, rest = [2,3,4,5]

const [first, ...rest] = []
// first undefined, rest []

const [first, ...rest] = ['first']
// first -> first, rest []

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

// 字符串
[...'hello']
// ['h', 'e', 'l', 'l', 'o']

// 实现了 Iterator 接口的对象

// Map 和 Set 结构， Generator 函数
// 扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。
let map = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three'],
])

let arr = [...map.keys()]

// Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。
const go = function*() {
	yield 1;
	yield 2;
	yield 3;
}

[...go()] // 1, 2, 3
// 变量go是一个 Generator 函数，执行后返回的是一个遍历器对象，对这个遍历器对象执行扩展运算符，就会将内部遍历得到的值，转为一个数组。

// Array.from() 讲两类对象转为真正的数组： 类似数组的对象，可便利的对象（Set Map)

// Array.of() 用于将一组值，转换为数组
// 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。

// 数组实例的 copyWithin()

// 数组实例的 find() 和 findIndex()
[1, 2, 3, 4, 5].find(n => n < 0) // 找到第一个返回true的成员， 如果没有符合条件  返回undefined

[1, 5, 10, 15].find(function(value, index, arr) {
	return value > 0;
})

// 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
// 这两个方法都可以发现 NaN， 弥补了 indexOf() 的不足

// 数组实例的 fill()
['a', 'b', 'c'].fill(7) // [7, 7, 7]
['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c']

// 数组实例的 extries(), keys(), values()
// ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。
// 它们都返回一个遍历器对象（详见《Iterator》一章），
// 可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，
//  entries()是对键值对的遍历。

for(let index of ['a', 'b'].keys()) {} // 0, 1
for(let elem of ['a', 'b'].values()) {} // 'a', 'b'
for(let [index, elem] of ['a', 'b'].extries()) {} // 0 'a' 1 'b'

// 数组实例的 includes 和 字符串的 includes相似
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true

// 该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始

// 数组的空位

0 in [undefined, undefined, undefined] // true
0 in [,,,] // false







