// 原型继承
function SuperType() {
    
}

function SubType() {
    
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType

// 上述代码使用了最基本的原型链继承使得子类能够继承父类的属性，**原型继承的关键步骤就在于：将子类原型和父类原型关联起来，使原型链能够衔接上，**这边是直接将子类原型指向了父类实例来完成关联。
// 上述是原型继承的一种最初始的状态，我们分析上面代码，会发现还是会有问题：

// 在创建子类实例的时候，不能向超类型的构造函数中传递参数。
// 这样创建的子类原型会包含父类的实例属性，造成引用类型属性同步修改的问题。


// 组合继承
function Parent(value) {
    this.value = value
}

Parent.prototype.getValue = function() {
    return this.value
}

function Child(value) {
    Parent.call(this, value)
}

Child.prototype = new Parent()

// 寄生组合继承
function Parent(value) {
    this.value = value
}

Parent.prototype.getValue = function() {
    return this.value
}

function Child(value) {
    Parent.call(this, value)
}

Child.prototype = Object.create(Parent.prototype, {
    constructor: {
        value: Child,
        enumerable: false, // 不可枚举该属性
        writable: true, // 可改写该属性
        configurable: true // 可用 delete 删除该属性
    }
})

