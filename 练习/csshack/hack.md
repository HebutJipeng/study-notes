一、IE6 css hack：

1. *html Selector {} /* Selector 表示 css选择器 下同 */
2. Selector { _property: value; } /* property: value 表示 css 的属性名: 属性值 下同 */
3. Selector { _property/**/: /**/value; }
4. Selector { -property: value; } /*IE6 css hack常用习惯推荐使用下划线_ */
二、IE7 css hack：

1. *+html Selector {}
2. *:first-child+html Selector {}
三、IE8 css hack：

Selector { /* 注意看value值的 */
    property: value1; /* W3C MODEL */
    property: value2\0; /* IE 8+ */
    property: value1\9\0; /* IE 9+ */
}
四、IE6、IE7、IE8共有的css hack：

Selector { property: value\9; }
五、IE6、IE7共有的css hack：

1. Selector { *property: value; }
2. Selector { #property: value; }
3. Selector { +property: value; }
六、IE8+ css hack：

Selector { property: value\0; }
七、IE9+ css hack：

Selector { property: value\9\0; }
八、判断方式：
<!–[if !IE]><!–> 除IE外都可识别 <!–<![endif]–>
<!–[if IE]> 所有的IE可识别 <![endif]–>
<!–[if IE 6]> 仅IE6可识别 <![endif]–>
<!–[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]–>
<!–[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]–>
<!–[if IE 7]> 仅IE7可识别 <![endif]–>
<!–[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]–>
<!–[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]–>
<!–[if IE 8]> 仅IE8可识别 <![endif]–>
<!–[if IE 9]> 仅IE9可识别 <![endif]–>

项目	范例	说明
!	[if !IE]	The NOT operator. This is placed immediately in front of the feature, operator, or subexpression to reverse the Boolean meaning of the expression.
NOT运算符。这是摆立即在前面的功能，操作员，或子表达式扭转布尔表达式的意义。
lt	[if lt IE 5.5]	The less-than operator. Returns true if the first argument is less than the second argument.
小于运算符。如果第一个参数小于第二个参数，则返回true。
lte	[if lte IE 6]	The less-than or equal operator. Returns true if the first argument is less than or equal to the second argument.
小于或等于运算。如果第一个参数是小于或等于第二个参数，则返回true。
gt	[if gt IE 5]	The greater-than operator. Returns true if the first argument is greater than the second argument.
大于运算符。如果第一个参数大于第二个参数，则返回true。
gte	[if gte IE 7]	The greater-than or equal operator. Returns true if the first argument is greater than or equal to the second argument.
大于或等于运算。如果第一个参数是大于或等于第二个参数，则返回true。
( )	[if !(IE 7)]	Subexpression operators. Used in conjunction with boolean operators to create more complex expressions.
子表达式运营商。在与布尔运算符用于创建更复杂的表达式。
&	[if (gt IE 5)&(lt IE 7)]	The AND operator. Returns true if all subexpressions evaluate to true
AND运算符。如果所有的子表达式计算结果为true，返回true
|	[if (IE 6)|(IE 7)]	The OR operator. Returns true if any of the subexpressions evaluates to true.
OR运算符。返回true，如果子表达式计算结果为true。