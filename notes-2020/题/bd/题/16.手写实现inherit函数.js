// 原型链继承
function A (name) {
    this.name = name
}

A.prototype.getName = function () {
    return this.name
}

function B(name) {
    
}

B.prototype = new A()


// 构造继承
function A () {
}

function B() {
    A.call(this)
}


// es6 继承
class A {
    constructor(name) {
        this.name = name
    }
}

class B extends A {
    constructor(name) {
        super(name)
    }
}