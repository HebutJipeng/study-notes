1. this的用法
	1) 全局上下文
		浏览器中，全局对象为window对象
	2) 函数上下文
		1.. 直接调用
			严格模式下，如果 this 未被执行的上下文环境定义， 那么他的默认值是undefined
		2.. 对象方法中的 this
			当以对象里的方法的方式调用函数时， 他们的this是调用该函数的对象

			<code><pre>
				var obj = {
					prop: 37,
					foo: function() {
						return this.props
					}
				}

				console.log(obj.foo()) // 37
			</pre></code>

		> 注意： 在任何 或者 如何定义调用函数完全不会影响 this 的行为
		
			<code><pre>
				var obj = {
					prop: 37
				}

				function independent () {
					return this.props;
				}

				obj.foo = independent;

				console.log(obj.foo()) // 37
			</pre></code>

			说明 this的值 至于 foo 作为 obj的成员被调用有关系。

			<code><pre>
				var obj = { prop: 37 }
				function independent () { reutrn this.props }

				obj.b = {
					g: independent,
					prop: 42
				}
				
				console.log(obj.g()) // 42
			</pre></code>

		3.. 原型链中的 this 
			相同的概念在定义在原型链中的方法也是一致的。如果该方法存在于一个对象的原型链上，那么this指向的是调用这个方法的对象，表现得好像是这个方法就存在于这个对象上一样。

			<code><pre>
				var obj = {
					f: function() {
						return this.a + this.b;
					}
				}

				var p = Object.create(obj)
				p.a = 1;
				p.b = 4;

				console.log(p.f())
			</pre></code>

		4.. getter 和 setter 中的 this

		5.. 构造函数中的 this
			当一个函数被作为一个构造函数来使用 (使用 new 关键字), 他的this 与即将被创建的新对象绑定

			注意：当构造器返回的默认值是一个this引用的对象时，可以手动设置返回其他的对象，如果返回值不是一个对象，返回this。
			<code><pre>
				function Fn() {
					this.a = 37;
				}
				var obj = new Fn();
				console.log(obj.a) // 37

				function Foo () {
					this.a = 37;
					return { a : 38 }
				}
				obj = new Foo()
				console.log(obj.a) // 38
			</pre></code>
		
		6.. call 和 apply 
			当一个函数的函数体中使用了 this 关键字时， 通过所有函数都从 Function 对象的原型中继承  call() 和 apply() 时， 它的值可以绑定一个对象上

			<code><pre>
				function add(c, d) {
					return console.log(this.a + this.b + c + d)
				}

				var obj = {
					a: 1,
					b: 3
				}

				add.call(obj, 5, 7)
				add.apply(obj, [10, 20])
			</pre></code>
		
			使用 call 和 apply 函数的时候 要注意 如果传递的this 不是一个对象， js 将会尝试使用内部 ToObject 操作 将其转换为对象。因此， 如果传递的值 是一个原始值，那么就会使用相关构造函数将它转换为对象。

		7.. bind 方法
			ECMAScript 5引入了Function.prototype.bind。调用fn.bind(someObject)会创建一个与fn具有相同函数体和作用域的函数，但是在这个新函数中，this将永久地被绑定到了bind的第一个参数，无论这个函数是如何被调用的。

			<code><pre>
				function fn() { return this.a }

				var g = fn.bind({ a: 'azerty' })
				console.log(g()) // azerty

				var obj = {
					a: 37,
					foo: fn,
					go: g
				}

				console.log(obj.foo(), obj.go()) // 37, 'azerty'
			</pre></code>

		8.. dom 时间处理函数中的 this
			// 获取文档中的所有元素的列表
			var elements = document.getElementsByTagName('*')

			for(var i = 0; i < elements.length; i++) {
				elements[i].addEventListener('click', function(e) {
					e.stopPropagation();
					console.log(this)
					console.log(e.currentTarget)
					console.log(e.target)

					this.style.backgroundColor = "red"
					})
			}

		9.. 内联事件处理函数中的this
			当代码被内联函数调用时, 他的 this 指向监听器 所在的 dom 元素	

			<code><pre>
				<button onclick="alert(this.tagName.toLowerCase())">click</button>
				// button

				<button onclick="alert((function() { return this})())">click</button>
				// global/window
			</pre></code>

2. new 关键字做了什么 // 可以说是很重要了
	
	new操作符具体干了什么呢?其实很简单，就干了三件事情。

 	`var obj  = {}; 
 	obj.__proto__ = Base.prototype; 
 	Base.call(obj); `

	第一行，我们创建了一个空对象obj
	第二行，我们将这个空对象的__proto__成员指向了Base函数对象prototype成员对象
	第三行，我们将Base函数对象的this指针替换成obj，然后再调用Base函数，于是我们就给obj对象赋值了一个id成员变量，这个成员变量的值是”base”，

	https://www.cnblogs.com/AaronNotes/p/6529492.html
	https://zhuanlan.zhihu.com/p/23987456?refer=study-fe

3. 闭包

	> 返回函数不要引用任何循环变量，或者后续会发生变化的变量。
	
	如果一定要引用循环变量怎么办？ 方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变。

	> 创建一个匿名函数并立即执行的语法：
	
	```js
	(function (x) {
		return x * x;
		})(3) // 9
	```

	在没有 class 机制，只有函数的语言里，借助闭包 同样可以封装一个私有变量。

	在返回的对象中，实现了一个闭包，该闭包携带了 局部变量，并且，从外部代码无法访问到变量。换句话说， 闭包就是携带状态的函数，并且它的状态完全可以对外隐藏起来。

	> 返回 对象 / 方法 可以构成闭包

	用闭包模拟私有方法
	```js
		var Counter = (function() {
			var privateCounter = 0;
			function changeBy(val) {
				privateCounter += val;
			}
			return {
				increment: function() {
				  changeBy(1);
				},
				decrement: function() {
				  changeBy(-1);
				},
				value: function() {
				  return privateCounter;
				}
			}   
		})();

		console.log(Counter.value()); /* logs 0 */
		Counter.increment();
		Counter.increment();
		console.log(Counter.value()); /* logs 2 */
		Counter.decrement();
		console.log(Counter.value()); /* logs 1 */
	```



4. js 实现继承的方式

	既然要实现继承，那么首先我们要有个父类。代码如下： 

	```js
		// 定义一个动物类
		function Animal (name) {
			// 属性
			this.name = name | 'Animal';
			// 实例方法
			this.sleep = function() {
				console.log(this.name = '正在睡觉！')
			}
		}

		// 原型方法
		Animal.prototype.eat = function(food) {
			console.log(this.name + '正在吃：' + food);
		}
	```

	1) 原型链继承
	> 核心： 将父类的实例 作为子类的原型。

	```js
		function Cat() {}

		Cat.prototype = new Animal();
		Cat.prototype.name = 'cat';

		// Test code
		var cat = new Cat();
		console.log(cat.name);
		console.log(cat.eat('fish'));
		console.log(cat.sleep());
		console.log(cat instanceof Animal);
		console.log(cat instanceof Cat);
	```

	特点：
		*非常纯粹的继承关系，实例是子类的实例，也是父类的实例
		*父类新增原型方法、原型属性，子类都能访问到
		*简单，易于实现

	缺点： 
		*想要为子类新增属性和方法，必须要在new Animal() 之后执行， 不能放到构造器中
		*无法实现多继承
		*来自原型对象的引用属性是所有实例共享的
		*创建子类实例时，无法向父类构造方法穿餐


	2) 构造继承
	> 核心使用父类的构造函数来增强子类实例， 等于是复制父类的实例属性给子类。（这里没有用到原型）

	```js
		function Cat(name) {
			Animal.call(this);
			this.name = name || 'Tom';
		}

		var cat = new Cat();
		console.log(cat.name);
		console.log(cat.sleep());
		console.log(cat instanceof Animal);
		console.log(cat instanceof Cat);
	```
	
	特点：
		*解决了 子类实例共享父类引用属性的问题
		*创建子类实例时，可以向父类传递参数
		*可以实现多继承（call多个父类对象）

	缺点：
		*实例并不是父类的实例， 只是子类的实例
		*只能继承父类的实力属性和方法，不能继承原型属性、方法
		*无法实现函数复用，每个子类都有父类实例函数的副本，影响性能


	3) 实例继承
	> 为父类实例添加新特性，作为子类实例返回

	```js
		function Cat(name) {
			var instance = new Animal();
			instance.name = name || 'Tom';
			return instance;
		}

		var cat = new Cat();
		console.log(cat.name) // Tom
		console.log(cat.sleep()); 
		console.log(cat instanceof Animal); // true
		console.log(cat instanceof Cat); // false
	```

	特点：
		*不限制调用方式， 不管是 new子类（） 还是 子类（）， 返回的对象具有相同的效果

	缺点：
		*实例是父类的实例，不是子类的实例
		*不支持多继承


	4. 拷贝继承
	```js
		function Cat(name) {
			var animal = new Animal();
			for (var p in animal) {
				Cat.prototype[p] = animal[p];
			}
			Cat.prototype.name = name || 'Tom';
		}
	```

	特点
		*支持多继承

	缺点
		*效率较低，内存占用高（因为要拷贝父类的属性）
		*无法获取父类不可美剧的方法


	5. 组合继承
	> 通过调用父类构造 继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

	```js
		function Cat(name) {
			Animal.call(this);
			this.name = name || 'Tom';
		}

		Cat.prototype = new Animal();

		Cat.prototype.constructor = Cat;
	```

	特点：
		*弥补了方式2的缺陷，可以继承实例属性、方法，也可以继承原型属性、方法
		*既是子类的实例，也是父类的实例
		*不存在引用属性共享问题
		*可传参
		*函数可复用

	缺点：
		*调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）


	6. 寄生组合继承
	> 通过寄生方式， 砍掉弗雷德实例属性，这样 在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免了组合继承的缺点

	```js
		function Cat(name) {
			Animal.call(this);
			this.name = name || 'Tom';
		}

		Cat.prototype.constructor = Cat;

		(function() {
			// 创建一个没有实例方法的类
			var Super = function() {}
			Super.prototype = Animal.prototype;
			// 将实例作为子类的原型
			Cat.prototype = new Super();
		})()
	```






























