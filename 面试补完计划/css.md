1. position的用法
   position: static/ relative/ absolute/ fixed/ inherit (center/ page/ sticky)

2. 如何实现居中

	--> 居中练习

	水平居中
		1) text-align: center;
		2) margin: 0 auto;

	垂直居中
		1） position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			-------------
			margin: -50%, 0, 0, -50%;

3. 盒模型
	w3c  margin border padding width 
		content --> width
	ie  content --> border + padding + width

	box-sizing: border-box;
			  : content-box;

4. flex的使用
	display: flex;

	flex-direction: row | row-reverse | column | column-reverse;
	flex-wrap: nowrap | wrap | wrap-reverse;
	flex-flow: <flex-direction> || <flex-wrap>;

	justify-content: flex-start | flex-end | center | space-between | space-around;
	align-items: flex-start | flex-end | center | baseline | stretch;
	align-content: flex-start | flex-end | center | space-between | space-around | strech; // 多根轴的对齐方式；如果只有一根轴线，该属性不起作用

	---
	项目的属性
	order: 0 | n;
	flex-grow: 0 | n;
	flex-shrink: 1 | n;
	flex-basis: auto | n;
	flex: none | [<flex-grow> <flex-shrink> <flex-basi>]
	align-self: auto | flex-start | flex-end | center | baseline | strech;

5. css hack
	
	--> hack

6. vertival-align

7. 盒模型
	标准模式：
	盒子的总宽度 = width/height + padding + border + margin

	怪异模式：
	盒子的总宽度 = width/height + margin

	---

	box-sizing的用法
	box-sizing: content-box | border-box | inherit

	content-box 对应 标准模式； border-box 对应怪异模式

8. 脱离文档流的方式 以及区别：
	float
	position: absolute | fixed
	
	所谓的文档流，指的是元素排版布局过程中，元素会自动从左向右，自上往下的流式排列。
	脱离文档流， 也就是将元素从普通的布局排版中拿走，其他盒子在定位的时候，会当做脱离文档流的元素不存在而进行定位。

	浮动： 浮动的框可以向左或者向右移动，知道它的边框碰到包含框或者另一个浮动框的边框为止。但是其他的盒子不会无视这个元素，其他的盒子仍会为这个元素让出位置，围绕在周围。而position：absolute脱离文档流的元素，其他的盒子会无视它。

	

