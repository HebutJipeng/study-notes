1. jquery 发post
	API:
	$.post('/', {}, callback, type)
	<!-- type: xml, html, script, json, text, _default -->

	*jsonp 实现跨域

	$.ajax({
		async : true,
        url : "https://api.douban.com/v2/book/search",
        type : "GET",
        dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
        jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
        jsonpCallback: 'handleResponse', //设置回调函数名
        data : {
            q : "javascript", 
            count : 1
        }, 
        success: function(response, status, xhr){
            console.log('状态为：' + status + ',状态是：' + xhr.statusText);
            console.log(response);
        }
	})

	$.getJSON("https://api.douban.com/v2/book/search?q=javascript&count=1&callback=?", function(data){
        console.log(data);
    });

2. 对象深克隆

	深浅拷贝的区分：
	浅复制--->就是将一个对象的内存地址的“”编号“”复制给另一个对象。
	深复制--->实现原理，先新建一个空对象，内存中新开辟一块地址，把被复制对象的所有可枚举的(注意可枚举的对象)属性方法一一复制过来，注意要用递归来复制子对象里面的所有属性和方法，直到子子.....属性为基本数据类型。

	总结，深复制理解两点，1,新开辟内存地址，2,递归来刨根复制。

	function shallowClone (obj) {
		var dist = {}

		for(var prop in obj) {
			dist[prop] = obj[prop]
		}

		return dist
	}

	function deepClone (obj1, obj2) {
		obj2 = obj2 || {}

		for (x in obj1) {
			if (typeof obj1[x] === 'Object') {
				obj2[x] = Array.isArray(obj1[x]) ? [] : {}
				deepClone(obj1[x], obj2[x])
			}
			else {
				obj2[x] = obj1[x]
			}
		}
	}


3. 二分搜索
	function find (target, arr) {
		var i = 0
		var j = arr.length - 1
		var mid 
		while(i <= j) {
			mid = Math.floor( (j - i) / 2 )
			if ( target < arr[mid]) {
				j = mid	
			} else if ( target > arr[mid] {
				i = mid
			} else {
				return mid
			}
		}

		return -1

	}

4. 异步资源加载	
	*jquery 

	需要引入jquery; 兼容所有浏览器

	$(function() {
		// 浏览器已经加载并解析完整个html文档，dom树已经建立起来了,然后执行此函数
	})

	或者 $(document).ready(function() {})

	*async 

	async属性是HTML5新增属性，需要Chrome、FireFox、IE9+浏览器支持; async属性规定一旦脚本可用，则会异步执行
	;async属性仅适用于外部脚本; 此方法不能保证脚本按顺序执行
	
	<script type="text/javascript" src="xxx.js" async="async"></script>

	*defer
	
	defer属性规定是否对脚本执行进行延迟，直到页面加载为止;如果脚本不会改变文档的内容，
	可将defer属性加入到<script>标签中，以便加快处理文档的速度;兼容所有浏览器;此方法可以确保所有设置了defer属性的脚本按顺序执行
	
	*动态创建<script>标签

	```
	(function(){
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = "http://code.jquery.com/jquery-1.7.2.min.js";
	    var tmp = document.getElementsByTagName('script')[0];
	    tmp.parentNode.insertBefore(script, tmp);
	})();
	```

5. 跨域
	* CORS 跨域资源共享	
	* JSONP 
	* postMessage + iframe
	* window.name + iframe 
	* location.hash + iframe
	* document.domain + iframe
	* Proxy server / client 带参
	* websocket

6. xss

7. http协议

8. 前端缓存
	http://web.jobbole.com/85243/

	明天背一背

9. Vue 生命周期

10. 组件间通讯

11. cookie localstorage sessionstorage