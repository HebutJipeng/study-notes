// 定义一个动物类
function Animal (name) {
	// 属性
	this.name = name | 'Animal';
	// 实例方法
	this.sleep = function() {
		console.log(this.name, '正在睡觉！')
	}
}

// 原型方法
Animal.prototype.eat = function(food) {
	console.log(this.name + '正在吃：' + food);
}

// 1. 原型链
// function Cat() {}

// Cat.prototype = new Animal();
// Cat.prototype.name = 'cat';

// Test code
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.eat('fish')); // undefined
// console.log(cat.sleep()); // undefined
// console.log(cat instanceof Animal); // true
// console.log(cat instanceof Cat); // true

// 2. 构造继承
function Cat(name) {
	Animal.call(this);
	this.name = name || 'Tom';
}

var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true

