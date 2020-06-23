Function.prototype.a = () => alert(1);
Object.prototype.b = () => alert(2);
function A() {}
const a = new A();
console.log(A instanceof Function)
a.a(); // 报错 
a.b(); // 不会执行
a.__proto__; // Object.prototype