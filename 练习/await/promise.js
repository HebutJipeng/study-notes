function runAsync() {
    return new Promise(function(resolved, rejected) {
        setTimeout(function() {
    	var num = Math.random() * 10;
    	num=3;
    		if (num < 5) {
        	    console.log('执行完成')
            	resolved('any data ' + num);
        	} else {
        		rejected('数字过大 ' + num)
        	}
        }, 500)
    })
}

function runAsync2() {
    return new Promise(function(resolved, rejected) {
        setTimeout(function() {
    	var num = Math.random() * 10;
    	num=3;
    		if (num < 5) {
        	    console.log('执行完成2')
            	resolved('any data2 ' + num);
        	} else {
        		rejected('数字过大2 ' + num)
        	}
        }, 1000)
    })
}

function runAsync3() {
    return new Promise(function(resolved, rejected) {
        setTimeout(function() {
    	var num = Math.random() * 10;
    	num = 3;
    		if (num < 5) {
        	    console.log('执行完成3')
            	resolved('any data3 ' + num);
        	} else {
        		rejected('数字过大3 ' + num)
        	}
        }, 2000)
    })
}
/*
runAsync().then(function(res) {
	console.log('resolved-->', res)
}, function(res) {
	console.log('rejected==>', res)
})
.catch(function(res) {
	console.log('catch==>', res)
})
*/

// rejected 和 catch 同事存在的时候 走rejected

// Promise.all([runAsync(), runAsync2(), runAsync3()])
// 	.then(function(res) {
// 		console.log('resolved==>', res)
// 	})
// 	.catch(function(err) {
// 		console.log('catch==>', err)
// 	})

// 当 多个异步中有一个地方被catch 就会中断回调
// all 是谁跑的慢 以谁为准执行回调

Promise.race([runAsync(), runAsync2(), runAsync3()])
	.then(function(res) {
		console.log('resolved==>', res)
	})
	.catch(function(err) {
		console.log('catch==>', err)
	})

// race 是以跑的快的为准