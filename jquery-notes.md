#jquery 使用记录
1. form 表格序列化  form = $("form").serialize()  =>  formb = form.split("&") => formc = JSON.stringify(formb)
    可以优雅的对表格内的数据进行序列化，然后转化成可以使用的 json
2. 最近，总是要做下拉到底部刷新，经历了网上的各种不靠谱之后，我还是记录下 可行的方法
    首先 监听窗口 滚动事件， $(window).scroll()  , 这个方法代替了之前愚蠢的用setTimeout 来检测是否到底的事件， :)
    其次，要判断网页是否到底，这个就涉及到 对于页面和文档的高度 的判断
    var totalheight parseFloat($(window).height()) + parseFloat($(window).scrollTop())  当前窗口底端，距文档顶端的距离
    和 $(document).height() 做比较
    有两个比较方式，pla $(document).height() <= totalheight + *   距离底部的距离
                   plb / 之后的百分比 ，网上一般以95% 作为标准
                   
   ***     
   
   $(window).height() ---> 浏览器当前窗口可视区域的高度
   $(document).height() --> 浏览器当前窗口文档的高度
   $(document.body).height() --> 浏览器当前窗口文档body的高度
   $(document.body.outerHeight(true)) --> 浏览器当前窗口文档 body 的总高度 (包括 border padding margin
   
   $(document).scrollTop() --> 获取滚动条到顶部的高度
   $(document).scrollLeft() --> 获取滚动条到左边的高度
   
   以上宽度同理
   ***
   
   然后， 可以向后台发post，这里 返回数据之后也有两个方式append 到页面之中
   pla 获得返回数据res ，然后解析出里面的res.data ，在js中 根据页面结构，把数据拼接好，循环输出( 不建议，因为js拼接数据很容易卡死
       ** 今天老司机 跟我说，直接把数据返回来，而不洗一遍模板 有利于数据的分离 ，这其实让我很困惑。到底该怎么着啊？
   plb 在后台获取到数据之后， 把页面结构做成模板，把数据过一遍模板，然后fetch回来，把结构+数据的代码一起返回给 callback里面
       这样直接append到页面之后，就是一个可以直接展示的结构，在前端减少拼接，展示更合理 推荐 :)
3. 和上面的原理类似 要实现 div内 实现到底 刷新
   今天又遇到了和上面类似的问题，所以一块记录下来：
   var distanceScrollCount = 0; //滚动距离总长
   var distanceScroll = 0;   //滚动到的当前位置
   var divHight = $(".className").height();

   $(".className").scroll(function(){
     distanceScrollCount = $(this)[0].scrollHeight;;
     distanceScroll = $(this)[0].scrollTop;
     if(distanceScroll + divHight >= distanceScrollCount - 20)
          alert("滚动条到底部了");
     });


4. jq自定义选择器(奇淫巧技系列)
	$.expr[':'].text = function(obj, index, meta, stack) {
		/* obj 当前的DOM元素
		index 当前元素在stack 中的索引？
		meta 用来存参数值
		satck 选择其中所选中的元素集

		return true to include current el
		return false to explude current el
		*/
	}
	
	$('.someClasses:test').doSometing();
	$(".someClasses:test('arg1, arg2')").toSomething();
	$(".someClasses:test('argument')").doSomething(); //meta
	
	meta 就会得到以下的格式:
	{
		':test(argument)',
		'test',
		'',
		'argument'
	}

4. $.noConflict()
	如果其他js框架也和jq一样使用  $作为框架缩写改怎么办呢？
	这个方法就尤其管用了。

	noConflict 方法会释放 $标识符的控制，这样其他脚本就可以控制它了

	$.noConflict();
	jQuery(document).ready(function() {})

	i也可以创建自己的简写，noConflict 可返回对jq的引用，可以把他存起来，以供稍后 使用。
	var jq = $.noConflict();
	jq(document).ready(function()｛})

	如果你的jq代码块使用了 $ 简写，并且你不愿意更改这个快捷方式，那么可以把 $符号作为变量传递给ready方法。这样就可以在函数内使用 $付好了。而在函数外，由于已经释放对 $ 对控制，所以我们不得不接着 使用jQuery
	$.noConflict();
	jQuery(document).ready(function($) {
		$("button").click(function() {
		})
	})

5. jq复合属性选择器 [selector1][selector2][selectorN]
	事实上，jq远比你想象的更加智能
   在学习 jq核心的时候，遇到了  queue(e, [q]) 这一些列函数，还不是很清楚 其具体的作用。

6. jQuery.fn.extend(object) 扩展jQuery 元素来提供新的方法
   jQuery.extend(object) 扩展jQuery对象本身 。用来在jQuery命名空间上添加新函数。

   q: jq的命名空间是什么？


<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
