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



