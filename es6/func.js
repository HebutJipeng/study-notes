function log(x, y = 'world') {
	console.log(x, y);
}

function Point(x = 0, y = 0) {
	this.x = x;
	this.y = y;
}

const p = new Point()
p // {x: 0, y: 0}

// 参数变量是默认声明的， 不能用let 或 const再次 声明
const foo = ( x = 5) => {
	let x = 5;
	const x = 5; 
	// 都会报错 error
}

// 使用参数默认值时， 函数不能有同名参数

// 另外，一个容易忽略的地方是，参数默认值不是传值的，
// 而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101

// 与解构赋值默认值结合使用

// 函数的length 属性
((a) => {}).length
((a = 5) => {}).length
// length 函数预期传入的参数个数

// 如果设置了默认值的参数不是尾参数， 那么length 就不会计算后面的参数了。
((a, b=5, c) => {}).length


// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。
// 等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。
var x = 1;

function f(x, y = x) {
  console.log(y);
}

f(2) // 2

// ----------

var x =1;

function f(y = x) {
	let x = 2;
	console.log(y)
}

f() // 1

// ----------

function f(y = x) {
	let x = 2;
	console.log(y)
}

f() // x not define

// rest 参数
const add = (...values) => {
	let sum = 0;

	for (var val of values) {
		sum += val;
	}

	return sum;
}

function sortNumbers() {
	return Array.prototype.slice.call(arguments).sort();
}

const sortNumbers = (...numbers) => numbers.sort();

// reset 参数之后不能再有其他参数，只能是最后一个参数

(function(a) {}).length == 1
(function(...a) {}).length == 0
(function(a, ...a) {}).length == 1

// 从es5 开始 函数内部可以设定为严格模式

function a (a, b) {
	'use strict';
	// ..
}

// es6 函数只要参数使用了 默认值， 解构赋值， 扩展运算符 那么就不可以
// 设置为严格模式， 否则会报错

const doSomething = (function() {
	'use strict';
	return function(value = 42) {
		return value;
	}
} ())

function foo() {}
foo.name // "foo"

var f = function() {}

// es5 
f.name // ""

// es6
f.name // "f"

const bar = function baz() {}

// es5 
bar.name // baz

// es6
bar.name // baz

// Function 构造函数返回的函数实例， name 属性为 anonymous
(new Function).name // anonymous

// bind 返回的函数， name 属性会加上bound 前缀
function foo() {}

foo.bind({}).name // "bound foo"

// 箭头函数
var f = v => v;

// 相当于
var f = function (v) {
	return v;
}


// 如果箭头函数的代码块部分多于一条语句，就要用大括号将他们括起来，
// 并且使用 return 语句返回

let getT = id => ({ id: id, name: 'temp' });

// 箭头函数可以与变量解构结合使用

cosnt full = ({ first, last }) => first + '' + last;

var full = function(person) {
	return person.fist + ' ' + person.last
}

const isEven = n => n%2 == 0;

// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。
// 
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => { this.s1++; console.log(this) }, 1000);
  // 普通函数
  setInterval(function () {
  	console.log(this)
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

// s1: 3
// s2: 0

// this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
// 实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
// 正是因为它没有this，所以也就不能用作构造函数。

//----------- 关于this
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

// 上面代码之中，只有一个this，就是函数foo的this，
// 所以t1、t2、t3都输出同样的结果。
// 因为所有的内层函数都是箭头函数，都没有自己的this，
// 它们的this其实都是最外层foo函数的this。

let insert = value => ({ into: (array) => ({after: afterValue => {
	array.splice(array.indexOf(afterValue) + 1, 0, value);
	return array;
}})})

insert(2).into([1, 3]).after(1); //[1, 2, 3]

const pipe = (...funcs) => val => funcs.reduce((a, b) => b(a), val);

// 双冒号运算符--- 函数绑定运算符

foo::bar;
// bar.bind(foo)

foo::bar(...arguments)
// bar.bind(foo, arguments)

// todo ::

function f(x) {
	return g(x);
}

// 尾调用不一定出现在函数尾部，只要是最后一步操作即可。
function f(x) {
	if (x > 0) {
		return m(x)
	}
	return n(x)
}
// 函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame）

// 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。

// 尾调用优化

// 尾递归

// 非
function f (n) {
	if (n <= 1) { return 1 };
	return f(n - 1) + f(n - 2);
}

// 尾递归 斐波那契数列
function f2 (n, ac1 = 1, ac2 = 1) {
	if (n <= 1) { return ac2 };
	return f2 (n -1, ac2, ac1 + ac2);
}


// 尾递归 阶乘
function tailFac (n, total) {
	if (n === 1 ) { return total; }
	return tailFac (n - 1, n + total)
}

function fac (n) {
	return tailFac(n, 1)
}
// 函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化。


function tailFac (n, total = 1) {
	if (n === 1 ) { return total; }
	return tailFac (n - 1, n + total)
}

 // todo 尾递归持续优化

 // es6 允许函数的最后一个参数有尾逗号
 function a (
 	p1,
 	p2,
 	p3,
 ) { ... }

// catch 不加参数 而不报错












