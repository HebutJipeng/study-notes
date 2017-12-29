var x = 1;
var kit = {
	x: 2,
	buf: {
		x: 3,
		fac: function() {
			return this.x;
		}
	}
}

var kbf = kit.buf.fac;
console.log(kbf)
console.log(kbf());
console.log(kit.buf.fac())

function Foo () {
	var i = 0;
	return function() {
		console.log(i++)
	}
}

var f1 = Foo(), f2 = Foo()
f1();f1();f2();
