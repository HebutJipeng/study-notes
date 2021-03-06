## 为h5建立的一些规则
* 新特性应该基于 HTML、CSS、DOM 以及 JavaScript。
* 减少对外部插件的需求（比如 Flash）
* 更优秀的错误处理
* 更多取代脚本的标记
* HTML5 应该独立于设备
* 开发进程应对公众透明

## 新增的特性
* 用于绘画的 canvas 元素
* 用于媒介回放的 video 和 audio 元素
*  对本地离线存储的更好的支持
*  新的特殊内容元素，比如 article、footer、header、nav、section
*  新的表单控件，比如 calendar、date、time、email、url、search

1. Html5 的视频和音频
		<!DOCTYPE HTML>
		<html>
		<body>
		
		<video width="320" height="240" controls="controls">
		  <source src="/i/movie.ogg" type="video/ogg">
		  <source src="/i/movie.mp4" type="video/mp4">
		Your browser does not support the video tag.
		</video>
		
		</body>
		</html>

control 属性供添加播放、暂停和音量控件。
\<video\> 与 \</video\> 之间插入的内容是供不支持 video 元素的浏览器显示的。
上面的例子第一个使用一个 Ogg 文件，适用于Firefox、Opera 以及 Chrome 浏览器。
要确保适用于 Safari 浏览器，视频文件必须是 MPEG4 类型。
video 元素允许多个 source 元素。source 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式：
 同理，音频实例： 

	<!DOCTYPE HTML>
	<html>
	<body>
	
	<audio controls="controls" autoplay="autoplay" loop="loop">
	  <source src="/i/song.ogg" type="audio/ogg">
	  <source src="/i/song.mp3" type="audio/mpeg">
	Your browser does not support the audio element.
	</audio>
	
	</body>
	</html>

2. Html5 拖放
	拖放（Drag 和 drop）是 HTML5 标准的组成部分。
	实例：
		<!DOCTYPE HTML>
		<html>
		<head>
		<script type="text/javascript">
		function allowDrop(ev)  {
		ev.preventDefault();
		}
		
		function drag(ev)  {
		ev.dataTransfer.setData("Text",ev.target.id);
		}
		
		function drop(ev){
		ev.preventDefault();
		var data=ev.dataTransfer.getData("Text");
		ev.target.appendChild(document.getElementById(data));
		}
		</script>
		</head>
		~<body>~
		<p>请把图片拖放到矩形中：</p>
		
		<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		<br />
		<img id="drag1" src="/i/xxx.gif" draggable="true" ondragstart="drag(event)" />
		
		</body>
		</html>

3. html5 canvas
	canvas 元素用于在网页上绘制图形。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
	实例：
	创建canvas元素
	<canvas id="myCanvas" width="200" height="100"></canvas>
canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成:
	<script type="text/javascript">
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.fillRect(0,0,150,75);
	</script>
4. HTML5 内联 SVG
	什么是svg
	*  SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
	*  SVG 用于定义用于网络的基于矢量的图形
	*  SVG 使用 XML 格式定义图形
	*  SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
	*  SVG 是万维网联盟的标准
	SVG 的优势（与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于）
	*   SVG 图像可通过文本编辑器来创建和修改
	*  SVG 图像可被搜索、索引、脚本化或压缩
	*  SVG 是可伸缩的
	*  SVG 图像可在任何的分辨率下被高质量地打印
	*  SVG 可在图像质量不下降的情况下被放大
			  
> Canvas 与 SVG
Canvas 和 SVG 都允许您在浏览器中创建图形，但是它们在根本上是不同的。

SVG
SVG 是一种使用 XML 描述 2D 图形的语言。
SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
Canvas
Canvas 通过 JavaScript 来绘制 2D 图形。
Canvas 是逐像素进行渲染的。
在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。
> Canvas 与 SVG 的比较
下表列出了 canvas 与 SVG 之间的一些不同之处。
Canvas
* 依赖分辨率
	* 不支持事件处理器
	* 弱的文本渲染能力
	* 能够以 .png 或 .jpg 格式保存结果图像
	* 最适合图像密集型的游戏，其中的许多对象会被频繁重绘
SVG
* 不依赖分辨率
	* 支持事件处理器
	* 最适合带有大型渲染区域的应用程序（比如谷歌地图）
	* 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
	* 不适合游戏应用

5. Html5 地理位置
	geolocation 对象
	API:  getCurrentPosition 获取当前 watchPosition 监视定位 /clearWatch 清除监视 
	可传第三个参来对返回结果进行调整  
	[https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using\_geolocation][1]

6. html5 web存储
	在客户端存储数据，html5 提供了两种新的方法：
	* localStorage - 没有时间限制的数据存储
	* sessionStorage - 针对一个 session 的数据存储
	之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。
	> localStorage 方法
	localStorage 方法存储的数据没有时间限制。
	> sessionStorage 方法
	sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

7. html5 引用程序缓存
	使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。
	> 什么是应用程序缓存（Application Cache）？
	HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。
	应用程序缓存为应用带来三个优势：
	* 离线浏览 - 用户可在应用离线时使用它们
	* 速度 - 已缓存资源加载得更快
	* 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。

	`<!DOCTYPE HTML>
	<html manifest="/example/html5/demo_html.appcache">
	<body>
	<script type="text/javascript" src="/example/html5/demo_time.js">
	</script>
	<p id="timePara"><button onclick="getDateTime()">获得日期和事件</button></p>
	<p><img src="" /></p>
	<p>请打开<a href="/example/html5/html5_html_manifest.html" target="_blank">这个页面</a>，然后脱机浏览，重新加载页面。页面中的脚本和图像依然可用。</p>
	</body>
	</html>`

	每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 	文件中直接指定了该页面）。
	> manifest 文件的建议的文件扩展名是：".appcache"。
	> manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。
	manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。
	manifest 文件可分为三个部分：
		* CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
		* NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
		* FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）
	
	更新缓存
	> 一旦应用被缓存，它就会保持缓存直到发生下列情况：
		* 用户清空浏览器缓存
		* manifest 文件被修改（参阅下面的提示）
		* 由程序来更新应用缓存
	> 完整的manifest 文件
		CACHE MANIFEST
		/theme.css
		/logo.gif
		/main.js
		
		NETWORK
		login.php
		
		FALLBACK
		/html/   /404.html
		\# 第一个是资源链接，第二个是替补

8.  Html5 web worker
	web worker 是运行在后台的 JavaScript，不会影响页面的性能。什么是 Web Worker？当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。
9. Html5 服务器发送事件
	HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。
	Server-Sent 事件 - 单向消息传递
	Server-Sent 事件指的是网页自动获取来自服务器的更新。
	以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。

	`<!DOCTYPE html>
	<html>
	<body>
	<h1>获得服务器更新</h1>
	<div id="result"></div>
	 
	<script>
	if(typeof(EventSource)!=="undefined")
	  {
	  var source=new EventSource("/example/html5/demo_sse.php");
	  source.onmessage=function(event)
	{
	document.getElementById("result").innerHTML+=event.data + "<br />";
	};
	  }
	else
	  {
	  document.getElementById("result").innerHTML="Sorry, your browser does not support server-sent events...";
	  }
	</script>
	 
	</body>
	</html>`

	例子解释：
	* 创建一个新的 EventSource 对象，然后规定发送更新的页面的 URL（本例中是 "demo\_sse.php"）
	* 每接收到一次更新，就会发生 onmessage 事件
	* 当 onmessage 事件发生时，把已接收的数据推入 id 为 "result" 的元素中

## html5 新增标签

| 最新标签        | 说明           | 对应老的标签 |
| ------------- |:-------------:| :-----:|
| video    | 表示一段视频并提供播放的用户界面 | 
| audio	 | 表示音频 | <object type="application/ogg" data="someaudio.wav"><param name="src" value="someaudio.wav"></object> |
| canvas	 | 表示位图区域 | <object data="inc/hdr.svg" type="image/svg+xml" width="200" height="200"></object>|
| source	 | 为video和audio提供数据源 | <param>|
| track	 | 为video和audio指定字母 |
| svg	 | 定义矢量图 |
| code	 | 代码段 |
| figure	 | 和文档有关的图例 |  `<dl><h1>PRC</h1><p>The People's Republic of China was born in 1949...</p></dl>` |
| figcaption	 | 图例的说明.”figcaption” 元素应该被置于 “figure” 元素的第一个或最后一个子元素的位置。 |
| main	|
| time	 | 日期和时间值 |
| mark	 | 高亮的引用文字.主要用来在视觉上向用户呈现那些需要突出的文字。<mark>标签的一个比较典型的应用就是在搜索结果中向用户高亮显示搜索关键词。 | span
| datalist	 | 提供给其他控件的预定义选项, 与 input 元素配合使用，就可以制作出输入值的下拉列表。            |
| keygen	 | 秘钥对生成器控件 |
| output	 | 计算值 .标签定义不同类型的输出，比如脚本的输出。 | span
| progress	 | 进度条 | 
| menu	 | 菜单 |
| embed	 | 嵌入的外部资源 | <object data="flash.swf"  type="application/x-shockwave-flash"></object>
| menuitem	 | 用户可点击的菜单项 |
| menu	 | 菜单 |
| template	|
| section	|  标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分
| nav	|
| aside	| 标签定义 article 以外的内容。aside 的内容应该与 article 的内容相关。 | div
| article  | 标签定义外部的内容。比如来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容。 | div 
| footer  | 标签定义 section 或 document 的页脚。| div
| header  | 标签定义 section 或 document 的页眉。 | div
| command | 标签定义命令按钮，比如单选按钮、复选框或按钮。| 
| details | 标签定义元素的细节，用户可进行查看，或通过点击进行隐藏。与 <legend> 一起使用，来制作 detail 的标题。该标题对用户是可见的，当在其上点击时可打开或关闭 detail。 |  <dl style="display:hidden"></dl>
| summary | 标签包含 details 元素的标题，”details” 元素用于描述有关文档或文档片段的详细信息。”summary” 元素应该是 “details” 元素的第一个子元素。 | 
| hgroup | 标签用于对网页或区段（section）的标题进行组合。 | div
| meter |  标签定义度量衡。仅用于已知最大和最小值的度量。必须定义度量的范围，既可以在元素的文本中，也可以在 min/max 属性中定义。| 
| nav | 标签定义导航链接的部分。| ul
| ruby | 标签定义字符（中文注音或字符）的解释或发音 | 
| rp  | ruby 的注释
| rt  | 标签定义字符（中文注音或字符）的解释或发音 | 

## web 语义化
> Web语义化是指使用语义恰当的标签，使页面有良好的结构，页面元素有含义，能够让人和搜索引擎都容易理解。

为什么要语义化
* 了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；
* 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

* 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
* 用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用；
* 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

注意事项 (更像是参考文档的个人理解)
* 不要使用纯样式标签，如：b、font、u等，改用css设置。
* 尽可能少的使用无语义的标签div和span；

* 在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
* 需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b），em是斜体（不用）；
* 使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
* 表单域要用fieldset标签包起来，并用legend标签说明表单的用途；
* 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。


	`<header></header>
	 <nav></nav>
	 <article>
	 	<section></section>
	 </article>
	 <aside></aside>
	 <footer></footer>`

## 新增API 
基本是上面内容的汇总
* 语义： 能够让你更恰当地描述你的内容是什么。 
* 连通性： 能够让你和服务器之间通过创新的新技术方法进行通信（web sockets等）。 
* 离线 & 存储：能够让网页在客户端本地存储数据以及更高效地离线运行（离线资源、在线和离线事件、DOM存储、IndexDB、自web应用程序中使用文件[FileReader]）。 
* 多媒体：使 video 和 audio 成为了在所有 Web 中的一等公民。 
* 2D/3D 绘图 & 效果：提供了一个更加分化范围的呈现选择(canvas、webGL)。 
* 性能 & 集成：提供了非常显著的性能优化和更有效的计算机硬件使用（WebWorkers、XMLHttpRequest2、HistoryAPI、拖放、requestAnimationFrame、全屏API、指针锁定API、在线和离线事件）。 
* 设备访问 Device Access：能够处理各种输入和输出设备（触控事件touch、使用地理位置定位、检测设备方向）。


FILE API 
History	 API
参考 [H5的新特性及部分API详解](http://blog.csdn.net/charlene0824/article/details/52165429)

## 移除的元素
* 纯表现的元素： basefont、big、center、font等 
* 对可用性产生负面影响的元素： frame、frameset、noframes

[1]:	https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using_geolocation

## 移动端 <viewport> 的意义以及原理
	
`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">`


| 属性       | 说明          | 
| ------------- |:-------------:|
| width  | 	设置layout viewport  的宽度，为一个正整数，或字符串"width-device" | 
| initial-scale	| 设置页面的初始缩放值，为一个数字，可以带小数 |
| minimum-scale | 允许用的最小缩放值，为一个数字，可以带小数 |
| maximum-scale | 允许用的最大缩放值，为一个数字，可以带小数 |
| height  | 设置layout viewport  的高度，这个属性对我们并不重要，很少使用 | 
| user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许 |
| 这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。 |
| 在安卓中还支持  target-densitydpi  这个私有属性，它表示目标设备的密度等级，作用是决定css中的1px代表多少物理像素 |
| target-densitydpi | 值可以为一个数值或 high-dpi 、 medium-dpi、 low-dpi、 device-dpi 这几个字符串中的一个 |

> 特别说明的是，当 target-densitydpi=device-dpi 时， css中的1px会等于物理像素中的1px

## http 三次握手后拿到的HTML，浏览器怎么加载

## 前端优化一般都做哪些