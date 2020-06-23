### 作用场景
$nextTick在DOM更新循环结束之后执行延迟回调。
要知道Vue实现响应式不是数据发生之后，dom立即变化，vue会开启一个队列，缓冲我们在一个时间循环之中的所有数据变化，如果同一个Watcher被触发多次，只会被推入到队列中一次。这样当我们改变了数据的时候，DOM的渲染需要时间，然而我们希望去操作DOM元素，就需要等待渲染完成后再去操作。就需要用到nextTick，将等待DOM渲染完成后需要的操作放在回调函数里。

[https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/281](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/281)