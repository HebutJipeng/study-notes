js里面事件的三个阶段
  分别是捕获 目标 冒泡；低版本ie不支持捕获，
Ie ：事件冒泡，即事件最开始由最具体的元素接收，然后逐级向上，一直到文档；
网景公司： 冒泡事件 与冒泡事件正好相反

ie 和w3c不同绑定事件和解绑事件的方法有什么不同，参数分别是什么，以及事件对象e有什么区别
W3c   target.addEventListenter(event, listener, usecapture)
事件类型；触发时执行的函数；指定是否在捕获或冒泡时执行
True： 捕获时执行；FALSE ： 冒泡时执行
btn.addEventListener(‘click’, function() {}, false);

对应事件的移除  removeEventListener(event, listener, capture/bubble)

Ie: target.attachEvent(event, listener) 只能在冒泡时执行
Event: onclick , onmouseover(事件e的区别，ie需要加一个on的前缀)
btn.attachEvent(‘click’, function() {})
对应的移除事件 detachEvent(‘click’, funtcion)

Var addEvent = function(target, type, fn) {
If(target.addEventListener) {
target.addEventListener(type, fn, fase);
} else if (target.attachEvent) {
target.attachEvent(‘on’ + type, fn);
} else {
Target[‘on’ + type] = fn;
}
}


事件的代理和委托，优缺点
 委托事件就是那些被绑定到父级元素上的事件，但是只要满足一些条件的时候才会触发，这是靠事件的冒泡来完成的。
  优点： 可以大量节省内存，减少事件的注册（比如在table上注册click事件来代替在td上注册）
可以实现新增子对象的时候无需再从新对齐进行事件绑定，对于动态内容部分尤为适合。
  缺点： 事件代理应该仅限于上述条件中使用，如果所有事件都使用事件代理有可能造成事件误判，即本来不应该用触发事件的被绑定上了事件。

Var toolbar = document.querySelector(‘.toolbar’);
toolbar.addEventListener(‘click’, function(e) {
Var button = e.target;
If(!button.classList.contain(‘active’)) {
button.classList.add(‘active’);
} else {
button.classList.remove(‘active’)
}
}) 

手写事件代理，要求兼容ie
Function delegateEvent(interfaceaEle, selector, type, fn) {
If(interfaceEle.addEventListener) {
interfaceEle.addEventLister(type, eventfn);
} else {
interfaceEle.attachEvent(‘on’+type, eventfn);
}
Function eventfn (e) {
Var e = e|| window.target;
Var target = e.target || e.srcElement;
If(matchSelector(target, selector)) {
If(fn) {
Fn.call(target, e);
}
}
}
}

Function matchSelector (target, selector) {
If(selector.charAt(0) === ‘#’) {
Return target.id === selector.slice(1);
}

If(selector.charAt(0) === ‘.’) {
Return (‘ ’ + selector.className + ‘ ’).indexOf(‘ ’ + target.className + ‘ ’) ===  -1; 
}

Return target.tagName.toLowerCase() === selector.tagName.toLowerCase();
}

事件模型

Function Emitter() {
This._listener =[];
}
Emitter.prototype.bind = function (eventName, callback) {
Var listener = this._listener || [];
Listenerl.push(callback);
This._listener[eventName] = listener;
}
Emitter.prototype.trigger = function(eventName) {
Var args = Array.prototype.slice.apply(arguments).slice(1)
Var listener = this._listener[eventName];
If(!Array.isArray(listener)) return;
Listener .forEach(function(cb) {
Try {
Cb.apply(this, args)
} catch(e) {
} 
})
}


## BFC
bfc直译的话为块级格式化上下文，他是一个独立的渲染区域，只有box-level box参与，他规定了内部的 box-level box该如何布局，并且与这个区域外的内容不相关。

其实了解这个概念，还是应该了解其他两个概念。
B ---box 盒模型，css的基本布局。直观来讲，一个页面由多个盒模型组成，元素的类型和他的display类型，决定了他的盒模型的展示类型。不同的盒模型会参与不同的formatting context（一个决定如何渲染的容器）。

分为 block-level box  参与 block-formatting-context
 		Inline-level box  inline-formatting-context

Formatting context
他是页面中，	的一块渲染区域，并且有一套渲染的规则，他决定子元素该如何的定位，并且与其他元素该如何相互作用。

哪些会形成bfc？
根元素
Float不为none的元素
Position为absolute 或者 fixed
Display为 inline-block，table-cell， table-caption，flex， flex-box
Overflow不为visiable

Bfc的布局规则
内部的box会在垂直方向，一个挨一个的放置
Box垂直方向的距离由margin来决定，属于同一个bfc的两个相邻box的margin会发生重叠。
每个元素的margin box 的左边，与包含块border box的左边接触，即使浮动也会如此。
Bfc区域不会与float box重叠。
Bfc就是页面上的一个隔离的独立容器容器里的子元素不会影响到外边的元素。反之也如此。
计算bfc高度的时候，浮动元素也参与计算。

包含块 containing block
包含块的作用就是给它里面的元素提供一个参考，元素的位置和尺寸的计算往往是由该元素的包含块来决定的。
包含块简单来说就是定位参考框，或者定位坐标系，元素一旦定位显示（相对，绝对，固定）都具有包含块的性质，它所包含的定位元素都将以包含块为坐标系进行定位和调整。

用户代理（比如浏览器）选择根元素作为包含块
对于其他元素，除非使用绝对定位，包含块都是由块级祖先元素的内容边界组成
如果元素的定位为 为fixed，包含块为视口建立。=
如果元素为 position： absolute，包含块由最近的postitin不是static的祖先元素建立；
如果祖先元素为块级元素，包含块由祖先的padding edge形成
如果祖先为内联元素，包含块取决于祖先的direction属性
如果direction为从左到右，祖先产生的第一个盒子上、左内容边界是包含块的上和左，祖先的最后一个盒子的下、右内容边界是包含块的下和右
如果 direction 为从右到左，则相反
如果没有祖先，根元素盒子的内容边界确定为包含块

div></div> 标签被浏览器解析后会生成div元素并添加到document tree中，但CSS作用的对象并不是document tree，而是根据document tree生成的render tree，而盒子模型就是render tree的节点。   * 注意:    * 1. CSS作用的是盒子(Box), 而不是元素(Element);   * 2. JS无法直接操作盒子。

Normal flow 文档流

http://www.cnblogs.com/fsjohnhuang/p/5259121.html

Box 布局、排版时涉及到定位问题而CSS中通过positioning scheme来定义，其包含normal flow、floats和absolute positioning三种定位方式.而normal flow包含block formatting、inline formatting和relative positioning，其中BFC为block formatting的上下文，IFC为inline formatting的上下文。

Js new（）到底做了什么？
创建一个新对象
将构造函数的作用域赋给新对象，因此this就指向了这个新对象
执行构造函数的代码，为这个新对象添加属性
返回新对象

Var obj = new Base();


Var obj = {} 创建一个空对象
Obj.__proto__ = base.prototype	;将空对象的__proto__成员指向base对象的prototype成员对象
Base.call(obj); 将base的this指针替换成obj，然后再调用base函数

a：创建一个空对象，作为将要返回的对象实例。
　　b：将空对象的原型指向了构造函数的prototype属性。
　　c：将空对象赋值给构造函数内部的this关键字。
d：开始执行构造函数内部的代码

组合构造

Function Person (name, age, class) {
This.name = name;
This.age = age;
This.class = class;
This.friends = [‘a’, ‘b’];
}

Person.prototype = {
Constructed: Person,
sayName: function() {
Return this.name;
}
}\

Var s1 = new Person(‘d’, 1, 2)
S1.friends.push(‘c’);
Var s2 = new Person(‘e’, 2, 3);
Alert(s1.friends === s2.friends); //false

判断一个结构是否是数组

Function judge(obj) {
Reutrn Object.prototype.toString().call(obj) === ‘[Object Array]’
}
 	
