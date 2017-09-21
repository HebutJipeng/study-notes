function resolveAfter2Seconds (x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x)
		}, 2000);
	});
}

async function add1(x) {
	console.log('add1--->', Date())
	var a = resolveAfter2Seconds(20);
	console.log('add1--->', Date())
	var b = resolveAfter2Seconds(30);
	console.log('add1--->', Date())
	return x + await a + await b; // 如果两个 await 写在同一句话中， 就只会等待两句话中比较慢的
}

add1(10).then(v => {
	console.log('add1--->', Date(), '--->', v)
})

async function add2(x) {
	console.log('add2--->', Date())
	var a = await resolveAfter2Seconds(20)
	console.log('add2--->', Date())
	var b = await resolveAfter2Seconds(30) // 两个 await 分开写， 就会单独等待异步时间
	console.log('add2--->', Date())
	return x + a + b
}

add2(10).then(v => {
	console.log('add1--->', Date(), '--->', v)
})


// $ node asyncfunc.js 结果如下:
// add1---> Thu Sep 21 2017 09:57:40 GMT+0800 (CST)
// add1---> Thu Sep 21 2017 09:57:40 GMT+0800 (CST)
// add1---> Thu Sep 21 2017 09:57:40 GMT+0800 (CST)
// add2---> Thu Sep 21 2017 09:57:40 GMT+0800 (CST)
// add2---> Thu Sep 21 2017 09:57:42 GMT+0800 (CST)
// add1---> Thu Sep 21 2017 09:57:42 GMT+0800 (CST) ---> 60
// add2---> Thu Sep 21 2017 09:57:44 GMT+0800 (CST)
// add1---> Thu Sep 21 2017 09:57:44 GMT+0800 (CST) ---> 60

// 通过异步方式重写promise 链

function getProcessedData(url) {
	return downloadData(url)
		.catch(e => {
			return downloadFallbackData(url)
		})
		.then(v => {
			return processDataInWorker(v)
		})
}

// 自己写的
async function getProcessedData(url) {
	try {
		var v = await downloadData(url)
		processDataInWorker(v)
	} catch(e)	{
		downloadFallbackData(url)
	}
}

// 修改
async function getProcessedData(url) {
	let v
	try {
		v = await downloadData(url)
	} catch(e)	{
		v = downloadFallbackData(url)
	}
	return processDataInWorker(v)
}

// 注意，在上面的例子中返回语句中没有 await ，因为 Promise.resolve 会隐式包裹异步方法的返回值。