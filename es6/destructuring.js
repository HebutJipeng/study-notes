// // 数组的解构赋值
// let a = 1;
// let b = 2;
// let c = 3;

// let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]]

let [ , , third] = ['foo', 'bar', 'baz']

let [x, y] = [1, 2, 3]
// x -> 1, y->2
let [x, , y] = [1, 2, 3]
// x -> 1, y-> 3

let [head, ...tail] = [1, 2, 3, 4]
// head -> 1, tail -> [2, 3, 4]

let [x, y, ...z] = ['a'];
// x -> 'a', y -> undefined, z ->[]

// 如果解构不成功， 变量就是undefined

let [foo] = []
let [foo, bar] = [1]
// 两种都会 ud

// 不完全解构
let [x, y] = [1, 2, 3]
// x -> 1, y -> 2

let [a, [b], c] = [1, [2, 3], 4]
// a -> 1, b->2, c -> 4



// 报错, 不可以遍历
let [f] = 1;
let [f] = false;
let [f] = NaN;
let [f] = undefined;
let [f] = null;
let [f] = {};

// Set 解构也可以数组解构赋值
let [x, y, z] = new Set(['a', 'b', 'c'])
// x -> 'a'

// 默认值
let [foo = false] = []
// foo -> false

let [x, y = 'b'] = ['a'];
// x -> 'a', y -> 'b'

let [x, y = 'b'] = ['a', undefined];
// x -> 'a', b -> 'b'

// es6 内部使用严格的 ===， 判断一个位置是否有值， 所以如果一个数组成员不严格等于 undefined, 默认值是不会生效的
let [x = 1] = [undefined]
// x -> 1

let [x = 1] = [null]
// x -> null

// 如果默认值是一个表达式，则表达式是惰性的， 只有在用到的时候 才会求值
function f() {
	console.log(1)
}

let [x = f()] = [1];
// x -> 1, f不会执行

// 默认值可以引用结构赋值的其他标量，但是变量必须已经声明
let [x = 1, y = x] = []
// x -> 1, y -> 1
let [x = 1, y = x] = [2]
// x -> 2, y -> 2
let [x = 1, y = x] = [1, 2]
// x -> 1, y -> 2
let [x = y, y = 1] = []
// 报错


// ************************

// 对象的结构赋值

let { foo, bar } = { foo: 'aaa', bar: 'bbb'}
// aaa -> 'aaa', bar -> bbb
// 与数组不同的是， 对象的属性没有次序，但是变量名要与属性相同

let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
// foo -> 'aaa', bar -> 'bbb'
let { baz } = { foo: 'aaa', bar: 'bbb' }
// baz -> undefined

// 如果变量名与属性名不同
let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
// baz -> 'aaa'
let obj = { foo: 'a', bar: 'bbb' }
let { foo: f, bar: b } = obj
// f -> 'a', b -> 'bbb'


// 全写===》
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' }


// 对象的解构赋值的内部机制, 先找到同名属性， 再付给对应的变量。真正赋值的是后者
let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
// baz -> 'aaa', foo -> undefined

// 与数组一样， 解构也可以用于嵌套解构的对象
let obj = {
	p: [
		'hello',
		{ y: 'world' }
	]
}

let { p: [x, {y}] } = obj
// x -> 'hello', y -> 'world', p -> [ 'hello', { y: 'world'} ]

const node = {
	loc: {
		start: {
			line: 1,
			column: 5
		}
	}
}
let { loc, loc: { start }, loc: { start: { line }} } = node



