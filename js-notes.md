#js相关

1. js索引数组，关联数组和静态数组，动态数组

> 索引数组 按索引去取数组元素，从0开始---一些自然语言从1开始
{
	example: var arr = [1,2,3,4] 
}

> 关联数组 指的是按非序数 类型为下标来存取的数组
{ 
	example: var ary2 = {}; //存取时，以非序数（数字），这里是字符串
	ary2["one"] = 1;
	ary2["two"] = 2;
	ary2["thr"]  = 3;
	ary2["fou"] = 4;
}

从对数据的存储分为 静态数组、动态数组

java 中静态数组： 定以后数组的长度固定了不能改变，按索引获取数组元素
	   动态数组： 可以动态的添加元素，数组的长度也随着变化

js 的数组属于动态数组

{
	var arr = []; arr[0] = 1; arr.push(5);
}

js中的数组同时属于索引数组和动态数组，因为本质上js的数组为一个js对象，体现了js的语言特性。但是js的索引数组并不是 “连续分配内存”的，因此索引方式并不会带来很高的效率。 这点与java是不一样的

2. js字符串翻转
	想想真是一个简单的做法
	<code>
		var str = "我爱你祖国";
		var strRev = str.split("").reverse().join("");
	</code>
	事先把字符串转成数组，然后数组倒置，再把数组拼回字符串.

	这里记录一下 关于字符串处理的方法：
	indexOf()/lastIndexOf()  从前/后查找字符串的位置，大小写敏感，从0开始计数。
	length
	substr() 截取字符串， 一个必选参数，一个可选参数，从0开始计数
	charAt() 用于返回指定位置的字符，从 0 开始计数
	split() 按照某种方式把字符串分割成字符串数组

3. 跨域问题理解
	由于同源策略带来的直接问题，协议 域名 端口不同，

	同源策略限制的不同源之间的交互主要是针对的js中的XMLHttpRequest 等请求
	如下的情况是完全不受同源策略的限制的：
	@页面中的链接，重定向以及表单提交是不受到同源策略限制的。--值得注意的是提交表单也是不受限制的。
	@跨域资源嵌入是允许的，当然，浏览器限制了js不嗯能够读写加载的内容。这里值得注意的是，iframe也是一个不受浏览器限制的标签，所以我们要组织iframe嵌入页面，需要在服务器上做响应的设置。

	跨域问题的解决办法：
	1 ajax跨域

	注意：今天老司机测试过的内容，当跨域请求ajax时，这个跨域请求其实是发送成功了的，服务器也有返回响应的内容，只是浏览器禁止了js去取response的内容。如果设置了 允许跨域请求的设置，就可以获取到。
	参考： http://www.cnblogs.com/rainman/archive/2011/02/20/1959325.html

	2 jsonp 等。今天不想看了:(

4. js的命名空间  namespace
	http://ourjs.com/detail/538d8d024929582e6200000c
	http://blog.sina.com.cn/s/blog_6d3f840a0102uxcr.html
	https://my.oschina.net/u/1540325/blog/502229

	看过三位大神对命名空间的理解，看来是有点明白了。

5. isNaN
	判断它是不是一个非数字
	我觉得最根本就是 这几个
	isNaN()    NaN  ---> true
		undefined ---> true
		{}  ---> true 

		true ---> false
		null ---> false
		37  ---> false  

		"37" ---> false
		"37.12" ---> false
		"123abc" ---> true
		"" --> false
		"  “ -> false

		new Date()  --> false
		new Date().toString() --> true

	等价于
	isNaN = function(value) {
		Number.isNaN(Number(value))
		}

	
6. Null 和 Undefined 的区别
	null 类型只有一个值，就是 null  。用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象
	undefined 也只有一个值，就是undefined 。当声明的变量未被初始化的时候，变量默认值为 unfinished

	typeof undefined ==> undefined 
	typeof undefined ==> object //理解为 null是一个不存在对象的占位符，其实这并不正确

	console.log(null == undefined)   ==> true

	undefined 是从null 派生出来的，所以把他们定义为相等。

	区分：
	null === undefined ==>false
	typeof null  == typeof undefined ==> false



