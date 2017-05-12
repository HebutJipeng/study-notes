## 偶尔看到的一套面试题

* 有一个长度未知的数组a，如果它的长度为0就把数字1添加到数组里面，否则按照先进先出的队列规则让第一个元素出队。

```javascript
	a.length === 0 ? a.push(1) : a.shift();
```

* 下面代码会输出什么：

```javascript
	var test = (function(a) {    
	this.a = a;    
	return function(b) {        
	return this.a + b;    }} (function(a, b) {    
	return a;}(1, 2))); console.log(test(4)); //输出什么？？？？
```

> 自执行的函数执行之后 var test = function (b) { return this.a + b; } , 并且 this ->window , window.a = 1, 所以 最后输出为5

> function 与感叹号的关系 https://swordair.com/function-and-exclamation-mark/

* 请把<ul><li>第1行</li><li>第2行</li>...</ul>（ul之间有10个li元素）插入body里面，注意：需要考虑到性能问题。

```javascript
	var lis = '';
	var ul = document.createElement('ul');
	for(var i=1; i< 11; i++) {
		lis += '<li>第' + i + '行</li>';		
	}
	ul.innerHTML = lis;
	document.body.appendChild = ul;

```

* 不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标。

```javascript
	Array(100).fill().map((_, i) => i+1);
```

> 答案出处： https://75team.com/post/luckey-draw-in-5-minutes.html

  需要注意： 当这种方法生成长度在100+ 的数组的时候， 超过100的部分 会自动生成一个二维数组， [[0-99], [100-199],..]


```javascript
	Array(100).join(',').split('').map(function(i, idx){ return idx + 1;});
```

  文章中推荐方式，并且注明如果不经过数组操作，会生成undefined*100,并且map不会对这个空数组进行遍历

* 实现对数组进行乱序

```javascript
	function random(arr) {
		return arr.sort(function() {
			return Math.random() -0.5;
		}) 
	}
```

小一一之前跟我说的，但是我忘了具体怎么写了

* 有一个长度为100的数组，请以优雅的方式求出该数组的前10个元素之和

```js
	array.splice(0, 10).reduce(function(a, b) { return a + b;})
```

* JavaScript实现继承的常用方法有哪些？你推荐的是哪一种？

js实现继承的方法： 查了下 <<JavaScript高级程序设计>> 的第六章，有 原型链、借用构造函数、组合继承、原型式继承、 寄生式继承、 寄生组合式继承。

推荐组合继承：
```js
	function SuperType(name) {
		this.name = name;
		this.colors = ['red', 'yellow', 'blue'];
	}

	SuperType.prototype.sayName = function() {
		alert(this.name);	
	}

	function SubType(name, age) {
		//继承属性
		SuperType.call(this, name);
		this.age = age;
	}

	//继承方法
	SubType.prototype = new SuperType();
	SubType.prototype.constructor = SubType;
	SubType.prototype.sayAge = function() {
		alert(this.age);
	}

	var instance = new SubType('nio', 10);
	instance.colors.push('black');
	instance.sayName();
	instance.sayAge();
```


* 在项目开发完成之后，根据雅虎性能优化规则，需要对html，JS，CSS，图片需要做出怎样的处理？是否可以借助构建工具实现自动化？

* 当项目的某个模块发生问题了，你是怎么定位错误的？你常用的调试工具是什么？

* 我们在跟后端进行异步请求时，很容易陷入嵌套太深的陷阱？

> 原文附带的参考 https://segmentfault.com/a/1190000002395343

> 我自己找的参考 https://www.zhihu.com/question/25413141    回调地狱

* 请写个正则表达式匹配所有二级域名是9game.cn和其目录下的网址，比如：http://abc.9game.cn/sname/view/

* 项目测试没问题，但是放到线上就有问题了，你是怎么解决的？？







