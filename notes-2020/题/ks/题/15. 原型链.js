Function.prototype.a = () => alert(1)
Object.prototype.b = () => alert(2)
function A() {}
const a = new A()
a.a()
a.b()

// a.a报错