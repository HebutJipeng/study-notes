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

