## Angular中生命周期钩子的调用顺序如下：

* ngOnChanges -- 当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit()之前。
* ngOnInit() -- 在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。在第一轮ngOnChanges()完成之后调用，只调用一次。
* ngDoCheck -- 自定义的方法，用于检测和处理值的改变。
* ngAfterContentInit -- 在组件内容初始化之后调用，只适用于组件
* ngAfterContentChecked -- 组件每次检查内容时调用，只适用于组件
* ngAfterViewInit -- 组件相应的视图初始化之后调用，只适用于组件
* ngAfterViewChecked -- 组件每次检查视图时调用，只适用于组件
* ngOnDestroy -- 当Angular每次销毁指令/组件之前调用并清扫。在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。

> 在Angular销毁指令/组件之前调用。

## router-outlet
``` js
    <router-outlet></router-outlet
```
路由插座？


