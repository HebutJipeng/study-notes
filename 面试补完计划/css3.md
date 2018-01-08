## css3 新特性

1. css3 选择器
	:nth-child(even)
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
	:not(s)

2. font-face 特性
	@font-face {
		font-family: BorderWeb;
		src: url(BORDERWO.eot);
	}

3. word-wrap & text-overflow 样式
	word-wrap: break-word; 设置或检索当当前行超过制定容器的边界时，是否断开转行，文字此时已被打散。
	text-overflow: 与word-wrap 协同工作的。wrod-wrap 设置或检索当当前行超过指定容器的边界时是否断开转行，
		而text-overflow 则设置或检索当前行超过制定容器的边界时如何显示。