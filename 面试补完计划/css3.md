## css3 新特性

1. css3 选择器
	:nth-child(even)
	:nth-child(odd)
	:first-child
	:nth-last-child
	:nth-of-type(n)
	:last-child
	:first-of-type
	:only-child
	:only-of-type
	:empty
	:checked
	:enabled
	:disabled
	::selection
	:not(s)

2. font-face 特性
	@font-face {
		font-family: BorderWeb;
		src: url(BORDERWO.eot);
	}

3. word-wrap & text-overflow 样式
	word-wrap: break-word; 设置或检索当当前行超过制定容器的边界时，是否断开转行，文字此时已被打散。
	text-overflow: 与word-wrap 协同工作的。wrod-wrap 设置或检索当当前行超过指定容器的边界时是否断开转行，
		而text-overflow 则设置或检索当前行超过制定容器的边界时如何显示。

	Text-overflow
	`
		.clip {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: clip;
			width: 200px;
			background: #ccc;
		}

		.ellipsis {
			overflow: hidden;
			white-space: nowrap;
			width: 200px;
			text-overflow: clip;
			background: #ccc;
		}

		<div class="clip">裁剪</div>
		<div class="sllipsis">单行省略</div>
	`

4. 文字渲染 text-decoration
	`
	div {
		-webkit-text-fill-color: black;
		-webkit-text-stroke-color: red;	
		-webkit-text-stroke-width: 2.75px;
	}
	`
	Text-fill-color: 文字内部填充颜色
	Text-stroke-color: 文字边界填充颜色
	Text-stroke-width: 文字边界宽度

5. 多列布局 multi-column layout
	`
		.multi_column_style {
			-webkit-column-count: 3;
			-webkit-column-rule: 1px solid #bbb;
			-webkit-column-gap: 2em;
		}
	`	
	Column-count：表示布局几列。
	Column-rule：表示列与列之间的间隔条的样式
	Column-gap：表示列于列之间的间隔

6. 边框和颜色
	1) 颜色的透明度
		color: rgba(255, 0, 0, .75);
	2) hsl 的透明度
		color: hsla(112, 72%, 33%, .68);
	3) 圆角
		border-radius: 15px;

7. css3的渐变效果
	1) 线性渐变
		`background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#2a8bbe), to(#fe280e))`
		复杂线性渐变
		`background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#2a8bbe), color-stop(33%, #aad010), color-stop(66%, #ff7f00), to(#fe280e))`
	2) 经向渐变
		`background: -webkit-gradient(radial, 50 50, 50, 50 50, 0, from(black), color-stop(.5, red), to(red))`

8. 阴影 和 反射
	<pre><code>
		.class1{ 
			text-shadow:5px 2px 6px rgba(64, 64, 64, 0.5); 
		} 
		.class2{ 
			box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3); 
		}
	</code></pre>

