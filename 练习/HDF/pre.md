1. bind live delegate on 的区别是什么

	$(selector).bind(event,data,function)
	$(selector).live(event,data,function)//jquery1.9版本以下支持，jquery1.9及其以上版本删除了此方法，jquery1.9以上版本用on()方法来代替
	$(selector).delegate(childSelector,event,data,function)//jquery1.4.2及其以上版本；
	$(selector).on(event,childselector,data,function)//jquery1.7及其以上版本；jquery1.7版本出现之后用于替代bind()，live()绑定事件方式；

	1) .bind()是直接绑定在元素上，也很好的解决了浏览器在事件处理中的兼容问题。如果不人为的设置stopPropagation(Moder Browser), cancelBubble(IE)，那么它的所有父元素，祖宗元素都会受之影响

	缺点：
	它会绑定事件到所有的选出来的元素上
	它不会绑定到在它执行完后动态添加的那些元素上
	当元素很多时，会出现效率问题
	当页面加载完的时候，你才可以进行bind()，所以可能产生效率问题

	2) .live()则是通过冒泡的方式来绑定到元素上的。更适合列表类型的，绑定到document DOM节点上。一旦事件冒泡到document上，jQuery将会查找selector/event metadata,然后决定那个handler应该被调用。当handler在执行的时候，因为有冒泡的参与，确实会有一些延迟，但是绑定的时候是特别的快。和.bind()相比的时候有一个好处就是我们不需要在每个元素上再去绑定事件，而只在document上绑定一次就可以了。尽管这个不是最快的方式，但是确实是最少浪费的。

	优点：

	这里仅有一次的事件绑定，绑定到document上而不像.bind()那样给所有的元素挨个绑定
	那些动态添加的elemtns依然可以触发那些早先绑定的事件，因为事件真正的绑定是在document上
	你可以在document ready之前就可以绑定那些需要的事件
	缺点：

	从1.7开始已经不被推荐了，所以你也要开始逐步淘汰它了。
	Chaining没有被正确的支持
	当使用event.stopPropagation()是没用的，因为都要到达document
	因为所有的selector/event都被绑定到document, 所以当我们使用matchSelector方法来选出那个事件被调用时，会非常慢
	当发生事件的元素在你的DOM树中很深的时候，会有performance问题

	3) .delegate()则是更精确的小范围使用事件代理，性能优于.live()。它不会把所有的event全部绑定到document,而是由你决定把它放在哪儿。而和.live()相同的地方在于都是用event delegation.

	 优点：
	你可以选择你把这个事件放到那个元素上了
	chaining被正确的支持了
	jQuery仍然需要迭代查找所有的selector/event data来决定那个子元素来匹配，但是因为你可以决定放在那个根元素上，所以可以有效的减小你所要查找的元素。
	可以用在动态添加的元素上
	缺点：

	需要查找那个那个元素上发生了那个事件了，尽管比document少很多了，不过，你还是得浪费时间来查找。
	4) .on()则是最新的1.9版本整合了之前的三种方式的新事件绑定机制。.bind(), .live(), .delegate()都是通过.on()来实现的，.unbind(), .die(), .undelegate(),也是一样的都是通过.off()来实现的。

2. 前端优化方案
	优化的方向有两个：
	  *减少页面体积，提升网络加载
	  *优化页面渲染

	减少页面体积，提升网络加载
		*静态资源的压缩合并（JS 代码压缩合并、CSS 代码压缩合并、雪碧图）
		*静态资源缓存（资源名称加 MD5 戳）
		*使用 CDN 让资源加载更快

	优化页面渲染
		*CSS 放前面，JS 放后面
		*懒加载（图片懒加载、下拉加载更多）
		*减少DOM 查询，对 DOM 查询做缓存
		*减少DOM 操作，多个操作尽量合并在一起执行（DocumentFragment）
		*事件节流
		*尽早执行操作（DOMContentLoaded）
		*使用 SSR 后端渲染，数据直接输出到 HTML 中，减少浏览器使用 JS 模板渲染页面 HTML 的时间...

3.写个弹窗插件该注意什么

