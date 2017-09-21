// function resolveAfter2Seconds(x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }

// async function f1() {
//   var x = await resolveAfter2Seconds(10);
//   console.log(x); // 10
// }
// f1();

// 如果不是promise

// async function f2() {
// 	var y = await 20;
// 	console.log(y)
// }

// f2()

// 如果 promise 被拒绝 则拒绝的值被抛出
async function f3() {
	try {
		var z = await Promise.reject(30)
	} catch (e) {
		console.log(e)
	}
}
f3()