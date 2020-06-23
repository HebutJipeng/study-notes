function  Super(name) {
    this.name = name
}

function Sub(name) {
   Super.call(this, name) 
}

Sub.prototype = new Super()
Sub.prototype.constructor = Sub