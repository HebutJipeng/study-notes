## css3 新特性

1. css3 选择器
<pre><code>:nth-child(even)
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
	:not(s)</code></pre>

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
	<pre><code>.class1{ 
			text-shadow:5px 2px 6px rgba(64, 64, 64, 0.5); 
		} 
		.class2{ 
			box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3); 
		}</code></pre>

9. css3的背景效果
	* background-clip 确定背景画区
	* background-clip: border-box; // 背景从border开始
	*			   : padding-box; // padding开始
	* 			   : content-box; // content 区域开始显示
	*			   : no-clip; // 默认属性 等同于border-box

	<!-- 通常情况，我们的背景都是覆盖整个元素的，现在 CSS3 让您可以设置是否一定要这样做。这里您可以设定背景颜色或图片的覆盖范围。 -->

	“Background Origin”，用于确定背景的位置，它通常与 background-position 联合使用，您可以从 border、padding、content 来计算 background-position（就像 background-clip）。

	* background-origin: border-box; 从 border. 开始计算 background-position;
	* background-origin: padding-box; 从 padding. 开始计算 background-position;
	* background-origin: content-box; 从 content. 开始计算 background-position;

	还有，“Background Size”，常用来调整背景图片的大小，注意别和 clip 弄混，这个主要用于设定图片本身。有以下可能的属性：

	* background-size: contain; 缩小图片以适合元素（维持像素长宽比）
	* background-size: cover; 扩展元素以填补元素（维持像素长宽比）
	* background-size: 100px 100px; 缩小图片至指定的大小 .
	* background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包	含元素的尺寸 .

	“Background Break”属性，CSS3 中，元素可以被分成几个独立的盒子（如使内联元素 span 跨越多行），background-break 属性用来控制背景怎样在这些不同的盒子中显示。

	* background-break: continuous; 默认值。忽略盒之间的距离（也就是像元	素没有分成多个盒子，依然是一个整体一	样）
	* background-break: bounding-box; 把盒之间的距离计算在内；
	* background-break: each-box; 为每个盒子单独重绘背景。

10. css的盒子模型
	用于父元素的样式
	display: box;  该属性会将此元素及其直系子代加入弹性框模型中。（Flexbox 模型只适用于直系子代）
	box-orient: horizontal | vertical | inherit; 该属性定义父元素的子元素是如何排列的。
	box-pack: start | end | center | justify; 设置沿 box-orient 轴的父元素中子元素的排列 方式。因此，如果 box-orient 是水平方向，则父元素的子元素是水平的排列方式，反之亦然。（表示父容器里面子容器的水平对齐方式--垂直排列时--定宽）
	box-align: start | end | center | baseline | stretch;
	用于子元素的样式：
	box-flex: 0 | n 

11. css 的 transitions, transforms, animation

	transition-property: 用于指定过渡的性质，比如 transition-property:backgrond 就是指 backgound 参与这个过渡 
	transition-duration: 用于指定这个过度的持续时间
	transition-delay: 用于指定延迟过度的时间
	transition-timing-function: 用于指定过渡类型，有 ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier
	
	transform
	.skew {
		transform: skew(50deg);
	}

	.scale {
		transform: scale(2, .5);
	}
	.rotate {
		transform: rotate(30deg);
	}
	.translate{
		transform: translate(50px, 50px);
	}

	.all {
		transform: skew(20deg) scale(1.1, 1.1) rotate(40deg) translate(10px 15px);
	}

	animation

	animation-name : 指定@keyframes的名字，CSS加载时会应用该名字的@keyframes规则来实现动画
	animation-duration: 动画持续时间，默认是0表示无动画，单位可以设s秒或ms毫秒
	animation-timing-function: 可以设linear，ease，ease-in，ease-out，ease-in-out，cubic-bezier(n,n,n,n)，steps。
	animation-delay: 延迟开始动画的时间，默认值是0，表示不延迟，立即播放动画。单位是s秒或ms毫秒。允许设负时间，意思是让动画动作从该时间点开始启动，之前的动画不显示。例如-2s 使动画马上开始，但前 2 秒的动画被跳过。
	animation-iteraion-count: 动画循环播放的次数，默认值为1，即放完一遍后不循环播放。除数字外也可以设关键字infinite表示无限循环播放。
	animation-direction: 动画播放的方向，可设normal，alternate，alternate-reverse。默认值是normal表示正常播放动画。alternate表示轮转正反向播放动画，即动画会在奇数次（1，3，5…）正常播放，而在偶数次（2，4，6…）反向播放。alternate-reverse正好反过来，奇数次反向播动画，偶数次正向播动画。
	animation-play-state: 动画的状态，可设running，paused。默认值running表示正在播放动画，paused表示暂停动画。通常在JS端使用该属性object.style.animationPlayState=”paused”来暂停动画。
	animation-fill-mode: 动画的时间外属性，可设none，forwards，backwards，both。默认值none表示动画播完后，恢复到初始状态。forwards当动画播完后，保持@keyframes里最后一帧的属性。backwards表示开始播动画时，应用@keyframes里第一帧的属性，要看出效果，通常要设animation-delay延迟时间。both表示forwards和backforwards都应用。
	@Keyframes




