// 1. 工厂模式
function createPerson(name) {
   var obj = new Object() 
   obj.name = name
   obj.getName = function () {
       return this.name
   }
   return obj
}

var p = createPerson('kv')
// 缺点所有实例都指向同一个原型

// 2. 构造函数模式
function Person(name) {
    this.name = name
    this.getName = function () {
        return this.name
    }
}

var p = new Person('kv')
// 可是识别原型
// 缺点： 每次方法都会被创造

// 3. 构造函数优化
function Person(name) {
    this.name = name
    this.getName = getName
}

function getName() {
    return this.name
}
// 优点：方法不必每次都被创造

// 4.原型模式
function Person() {
    
}

Person.prototype.name = 'kv'
Person.prototype.getName = function () {
    return this.name
}
var p = new Person()
// 方法不会被从新创建
// 变量方法共享；不能初始化参数

// 4.1 无论是重写原型，还是构造函数指向，都无法改变原型模式的问题；

// 5. 组合模式
function Person(name) {
    this.name = name
}

Person.prototype = {
    constructor: Person,
    getName: function () {
        return this.name
    }
}

// 6. 寄生构造
function Person(name) {
    var obj = new Object()
    obj.name = name
    obj.getName = function() {
        return this.name
    }

    return obj
}

// 稳妥构建
function Person(name) {
   var obj = new Object() 
   obj.getName = function () {
       return name
   }

   return obj
}