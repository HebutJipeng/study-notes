let name = 'wrap';

while (true) {
	let name = 'inner';
	console.log('里面', name);
	break;
}

console.log('外边:', name);

var a = []
for(var i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i)
	}
}
a[6]()

var b = []
for(let i = 0; i < 10; i++) {
	b[i] = function() {
		console.log(i)
	}
}
b[6]()


const PI = Math.PI

