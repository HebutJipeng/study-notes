1. 伪类、伪元素选择器 
   伪类 -> 不改变任何DOM内容。只是插入了一些修饰类的元素，这些元素对于用户来说是可见的，但是对于DOM来说不可见。伪类的效果可以通过添加一个实际的类来达到。
   a:link | a:visited | a:hover(必须置于前两个之后) | a:active (必须置于 :hover 之后)
   etc.
   结构性伪类
   :root() | :not() | :empty() | :target() | :first-child() | :nth-child() | :nth-of-type(n) | :only-child 表示一个元素是它的父元素的唯一一个子元素


   伪元素 -> 通过添加一个实际的元素才能达到的
   :first-letter | :first-line | :before | :after | :selection??? (css3)
   
   css3中，明确规定 伪类用一个冒号来表示，而伪元素用两个冒号来表示

   UI状态元素伪类选择器
   E:checked{attribute} 匹配所有用户界面（form表单）中处于选中状态的元素
   E:enabled{attribute} 匹配所有用户界面（form表单）中处于可用状态的元素
   E:disabled{attribute} 匹配所有用户界面（form表单）中处于不可用状态的元素
   E::selection{attribute} 匹配元素中被用户选中或处于高亮状态的部分

 
 
   目标伪类
   E:target{attribute}   匹配相关URL指向的元素:selection 用来改变 浏览网页选中文字的默认效果



2. q: 当你把ul标签放在p标签里的时候， 如：
	<code>
		<p><ul><li></li></ul></p>
	</code>
	浏览器：如chrome 渲染为：
	<code>
		<p></p>
		<ul>
			<li></li>
		</ul>
	</code>

	群里大神赐教： 
	1） 块级元素可以包含内联元素或某些会计元素，但是内联元素不能包含块级元素
	2） 会计元素 p/h1-h6/dt不能 包含块级元素
	3） a标签内不可以嵌套交互元素，如 <a> <button> <select>等 
		之前在写的时候们也遇到了类似的问题，但是没有搞明白，现在也算是有了一个合理的解释。






