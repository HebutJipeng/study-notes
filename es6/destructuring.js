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

// 嵌套解构
let obj = {};
let arr = [];

let { foo: obj.v, bar: arr[0] } = { foo: 'aaa', bar: 'bbb'}
// obj -> { v: 'aaa' }, arr = ['bbb']

// 对象解构也可以有默认值
let {x = 3} = {}
// x -> 3
let {x, y = 5} = { x: 1 }
// x -> 1, y -> 5
let { x: y = 3 } = {}
// y -> 3
let { message: msg = 'hello world' } = {}
// msg -> 'hello world'


// 默认值生效的条件 -》 对象的属性值严格等于undefined
let { x = 3 } = { x = undefined }
// x -> 3
let { x = 3 } = { x = null }
// x -> null

// 如果解构失败，变量的值等于 undefined
let { foo } = { bar: 'baz' }
// foo -> undefined

// 如果解构模式是嵌套的对象， 而且子对象所在的父属性不存在，那么将会报错
let { foo: { bar }} = { bar : 'baz'}

let _tmp = {bar: 'baz'}
// _tmp.foo.bar 报错

// 错误
let x;
{ x } = { x: 1};

// 正确
{{} = {true, false}}
{{} = 'abc'}
{{} = {}}
// 虽然表达式没有意义，但是语法是合法的

// 对象的解构赋值，可以将对象的方法赋值给某个变量
let {sin. cos, tan} = Math;

const [a, b, c, d, e] = 'hello'
// a -> 'h'
// b -> 'e'
// c -> 'l'
// d -> 'l'
// e -> 'o'


let {length: len} = 'hello'
// len 0-> 5

// 解构赋值是，如果等好友百年是数值和布尔值， 则会先转为对象
let { toString: s } = 123;
// s === Number.prototype.toString // true

let { toString: s } = true;
// s === Boolean.prototype.toString true


// 由于 undefined 和 null 无法转为对象，所以他们进行结构赋值，都会报错
let { prop: x } = undefined; // 报错
let { prop: y } = null; //报错

// 函数参数的解构赋值

function add([x, y]) {
	return x + y;
}

add([1, 2]); // 3

// 函数 add 的参数表面上是一个数组，但是对于函数内部而言，感受到的是 x 和 y


[[1, 2], [3, 4]].map(([a, b]) =>{ return  a + b}) // [3, 7]

// 函数的解构也可以有默认值

function move({x = 0, y = 0} = {}) {
	return [x, y];
}

move({x: 3, y:4}) // [3, 4]
move({x: 3}) // [3, 0]
move({}) // [0, 0]
move() // [0, 0]

// 与上面的方法 结果不一样
function move({x, y} = {x: 0, y: 0}) {
	return [x, y];
}

move ({x: 3, y: 4}) // [3, 4]
move({x: 3}) // [3, undefined]
move({}) // [undefined, undefined]
move() // [0, 0]

// 因为上面代码为函数move 的默认值，而不为x， y单独设置默认值，所以跟之前不一样


// undefined会触发默认值
[1, undefined, 3].map(x = 'map' => x)
// [1, 'map', 3]


// 不能使用圆括号的情况， 圆括号容易导致解构错误

// 1) 变量生命语句 以下会报错
let [(a)] = [1]

let {x: (c)} = {}
let {{x: c}} = {}
let {(x: c)} = {}
let {(x): c} = {}

let { o: ({p: p })} = { o: {p: 2}}


// 2) 函数参数
// 函数参数也属于变量生命， 因此不能带有圆括号
function f([(z)]) { return z; }

function

