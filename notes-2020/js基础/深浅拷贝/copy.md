1. 基础数据类型存储在栈内存之中； Number String Null Undefiend Boolean Symbol
2. 引用数据类型存储在堆内存之中; Object Array

### 深拷贝常用的方法
1. JSON.stringify / JSON.parse
> 但是这种方式会忽略 undefined/ function/ symbol

2. 递归复制

---

### js自带的拷贝方法
1. concat 是对第一层的深拷贝
2. slice 与concat相同
3. ... / Object.assign 也是一样