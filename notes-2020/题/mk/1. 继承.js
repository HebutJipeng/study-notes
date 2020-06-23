function Parent(name) {
    this.name = name
}

Parent.prototype.getName = function() {
    console.log(this.name)
}

function Child() {
    Parent.apply(this, [])
}

// Child.prototype = new Parent()
// Child.prototype = Parent.prototype
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child