## Vue 响应式基本原理

### 响应式系统的基本原理
    1. Object.defineProperty(obj, prop, descriptor)
        descriptor
            - enumerable 属性是否可以枚举, default: false
            - configurable 是否可被修改或删除， default: false
            - get
            - set

    2. 实现 observer

### 依赖收集追踪原理
    1. 订阅者 Dep - 主要作用是来存放 Watcher 观察者对象
    2. 观察者 Watcher
    3. 依赖收集
    ===
    observer 的过程中会注册 get 方法，该方法用来进行依赖收集。他的闭包中会有一个 Dep 对象，这个对象用来存放 Watcher对象的实例。 其实 依赖收集的过程就是把 Watcher 实例放在对应的 Dep实例中去。 get 方法可以让当前的 Watcher 对象（Dep.target） 存放到它的subs中（ addSub ）方法，在数据变化时， set 会调用 Dep 对象的notify 方法通知它内部所有的 Watcher 对象进行视图更新。

    TODO： 未被render function 使用过的 变量，是否会被添加watcher

    - 定向触发notify

    ===
    评论理解：
    - Dep => key 的依赖者容器； Watcher => 依赖者(组件/实例)
    - 实例Vue的时候，将data对象传入observer函数中，为data对象的所有key定义行为
    - 在为每个key定义行为的时候， 为每个key都实例了一个 Dep；
    - 当 new Watcher 的时候，Dep 的target 指向该Watcher实例；
    - 调key的set的时候，将Watcher实例放入Dep实例当中；
    - 调key的set的时候，触发Dep实例中所有watcher实例的更新方法;

    ===
    vue1.x中一个dep对应多个watcher，2.x中 1对1的实现原理；

### 实现Virtual DOM 下的一个VNode节点

### template 模板是怎么通过 Compile 编译的
