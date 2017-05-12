## es6-note

### let

> 存在块级作用域 ; 
> 不存在变量提升, 变量一定要声明之后使用
> ** 暂时性死区 ** 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。; 

```js
	if (true) {
	  // TDZ开始
	  tmp = 'abc'; // ReferenceError
	  console.log(tmp); // ReferenceError

	  let tmp; // TDZ结束
	  console.log(tmp); // undefined

	  tmp = 123;
	  console.log(tmp); // 123
	}
```
> 不允许重复声明

