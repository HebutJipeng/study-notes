1. 浏览器缓存
	http://www.cnblogs.com/lyzg/p/5125934.html?from=cnblogs

2. 跨域
	* CORS 跨域资源共享	
	* JSONP 
	* postMessage + iframe
	* window.name + iframe 
	* location.hash + iframe
	* document.domain + iframe
	* Proxy server / client 带参
	* websocket



3. 移动端 rem

4. webpack

	1) babel-loader 是干嘛的
		loader是预处理器， 让webpack 处理非js文件，将所有的文件转换为 webpack能够处理的有效模块.

		loader的两个目标
			* 识别出应该被loader转化的文件， 使用test属性
			* 转换这些文件，使他们添加到 依赖图中， 最终添加到 bundle中，使用use属性

		babel-loader 是一个 将 jsx、 es6 格式的文件转换为 js文件的 工具。

	2） css-loader
		可以预处理 css 文件使用 css-loader

		 

