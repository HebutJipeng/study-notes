// 属性的简洁表示法

const foo = 'bar'
const baz = { foo }

baz // => { foo: 'bar' }

// 等同于
const baz = {foo: foo};

// ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值
function f(x, y) {
	return { x, y }
}

function f(x, y) {
	return {
		x: x,
		y: y
	}
}

// 除了属性简写，方法也可以简写。
const o = {
	method() {
		return 'Hello';
	}
}

// =>
const o = {
	method: function() {
		return 'hello'
	}
}

// CommonJS 模块输出一组变量，就非常合适使用简洁写法。

let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = {
	getItem,
	setItem,
	clear
}

// 等同于

module.exports = {
	getItem: getItem,
	setItem: setItem,
	clear: clear
}

// 属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。
const cart = {
	_wheel: 4,

	get wheel () {
		return this._wheel
	},

	set wheel (value) {
		if (value < this._wheel) {
			throw new Error('****')
		}
		this._wheel = value
	}
}


// ***

// 注意，简洁写法的属性名总是字符串，这会导致一些看上去比较奇怪的结果。
const obj = { 
	class () {}
}

var obj = {
	'class': function() {}
}

// 上面代码中，class是字符串，所以不会因为它属于关键字，而导致语法解析报错。

// 如果某个方法的值是一个 Generator 函数，前面需要加上星号。

const obj = {
	* m() {
		yield 'hello world'
	}
}

// ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

let propKey = 'foo'

let obj = {
	[propKey]: true,
	['a' + 'bc']: 123
}

// *** 

let lastWord = 'last word'
const a = {
	'first word': 'hello',
	[lastword]: 'world'
}

a['first word'] // 'hello'
a[lastword] // 'world'
a['last word'] // 'world'


//***
let obj = {
	['h' + 'ello']() {
		return 'hi'
	}
}

obj.hello() // hi

// 注意，属性名表达式与简洁表示法，不能同时使用，会报错。

// 报错
const foo = 'bar'
const bar = 'bac'
const baz = { [foo] }

// 正确
const foo = 'bar'
const baz = { [foo]: 'abc'}

// 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。

// 方法的  name 属性

const person = {
	sayName () {
		console.log('1')
	},
}

person.sayName.name // sayName

// 如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set。

const obj = {
	get foo() {},
	set foo(x) {}
}

const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

descriptor.get.name // "get foo"
descriptor.set.name // "set foo"

// 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。

const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
  [key1]() {},
  [key2]() {},
};
obj[key1].name // "[description]"
obj[key2].name // ""



// Object.is()
// 基本和 === 一致， 但是  对 +0， -0; NaN 的处理

Object.is('foo', 'foo')
// true
Object.is({}, {})
// false


// es6  
+0 === -0 // true
NaN === NaN // false

Object.is(+0， -0) // false
Object.is(NaN, NaN) // true

// es5
Object.defineProperty(Object, 'is', {
	value: function(x, y) {
		if (x === y) {
			return x !=== 0 || 1 / x === 1 / y
		}

		return x !== x && y !== y
	},
	configurable: true,
	enumerable: false,
	writable: true
})

// Object.assign()

// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

const target = { a: 1}
const source1 = { b: 2}
const source2 = { c: 3}

Object.assign(target, source1, source1)
target // { a: 1, b: 2, c: 3}


// 如果只有一个参数，Object.assign会直接返回该参数。
const obj = { a : 1}
Object.assign(obj) === obj // true

// 如果该参数不是对象，则会先转成对象，然后返回。

typeof Object.assign(2) // "object"

// 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。

Object.assign(undefined) // 报错
Object.assign(null) // 报错


// ====> 注意点
// 1.浅拷贝

// Object.assign方法实行的是浅拷贝，而不是深拷贝。
// 也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。

const obj1 = {
	a: { b: 1}
}
const obj2 = Object.assign({}, obj1)

obj1.a.b = 2
obj2.a.b // 2

// 2.同名属性的替换
// 对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。

const target = { a: { b: 'c', d: 'e' } }
const source = { a: { b: 'hello' } }
Object.assign(target, source)
// { a: { b: 'hello' } }

// 3. 数组的处理
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

// 4. 取值函数的处理
// Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。

const source = {
	get foo() { return 1}
}
const target = {}
Object.assign(target, source)

// { foo: 1 }

// >>> 常见用途
// 1)  为对象添加属性

class Point {
	constructor(x, y) {
		Object.assign(this, {x, y})
	}
}

// 上面方法通过Object.assign方法，将x属性和y属性添加到Point类的对象实例。

// 2) 为对象添加方法
Object.assign(SomeClass.prototype, {
	someMethod(arg1, arg2) {
		// ...
	},
	anotherMethod() {
		// ...
	}
})

// 3）克隆对象

function clone(origin) {
  return Object.assign({}, origin);
}

// 上面代码将原始对象拷贝到一个空对象，就得到了原始对象的克隆。

// 不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。

function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}

// 4) 合并多个对象
const merge = (target, ...sources) => {
	Object.assign(target, ...sources)
}

// 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。

const merge =
  (...sources) => Object.assign({}, ...sources);

// 5) 为属性指定默认值

const DEFAULTS = {
	logLevel: 0,
	outputFormat: 'html'
}

function processContent(options) {
	options = Object.assign({}, DEFAULTS, options)
	console.log(options)
}

// TODO: 属性的可枚举性和遍历




















