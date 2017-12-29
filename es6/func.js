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
