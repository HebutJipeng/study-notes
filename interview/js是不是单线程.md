## js到底是不是单线程？

### 应该也是那天解释，js中异步的实现原理？？？

js确实是单线程的，但是浏览器不是，是多线程的。浏览器内部有一个 event loop，会询问事件队列并且处理事件。

### 那ajax异步请求是否真的异步呢？

请求确实是异步的，这请求是浏览器新开一个线程请求。当请求的状态变更时，如果先前已经设置过回调，这异步线程就产生状态改变事件放到js引擎的事件处理队列中等待处理。当浏览器空闲的时候出队列任务被处理，js引擎始终是单线程处理任务

*总结一下，Ajax请求确实是异步的，这请求是由浏览器新开一个线程请求，事件回调的时候是放入Event loop单线程事件队列等候处理。*

> 参考 文章
  http://blog.csdn.net/talking12391239/article/details/21168489
  http://www.cnblogs.com/wancy86/p/js_threed.html