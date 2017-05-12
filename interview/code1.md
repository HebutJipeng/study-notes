## 如下代码输出什么？ 解释原因
	var object1 = {
	    valueOf: function () {
	        return 1;
	    },
	    toString: function () {
	        return "object1";
	    }
	};

	var object2 = {
	    valueOf: function () {
	        return 2;
	    },
	    toString: function () {
	        return "object2";
	    }
	};

	alert((object2 > object1 +-- object1) + true); //输出什么？ 解释原因

	***

	参考MDN的运算符优先级
	（） 19级 -- 15级 + 13级 >11 级
	原因：
		1.对对象进行的计算会先调用对象的valueOf方法，无结果再调用toString方法，这里的两个对象都有valueOf方法，所以调用成功，所以式子(object2 > object1 +-- object1)，转化为
		(2 > 1 + --1) + true

		2.在2 > 1 + --1中，自减符号优先级高，先计算--1，得出结果0，2 > 1结果为true，最后式子变成
		(true + 0) + true

		3.因为加法运算符，true转化为1，所以结果为2