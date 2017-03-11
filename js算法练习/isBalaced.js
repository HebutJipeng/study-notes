//判断大括号是否闭合
// 创建一个函数来判断给定的表达式中的大括号是否闭合：
// 不是非得化为数组，字符串同样可以做操作，stack出栈的时候 当可以出栈 就是说明还有内容

// var isBalanced = function(string) {
// 	var a = string.split("");
// 	var stack = [];

	// if (string.length <=0) return true;
// 	a.forEach(function(el) {
// 		if (el === '{') {
// 			stack.push(el);
// 		} else {
// 			if (stack.length <= 0) {
// 				return false;
// 			}
// 			stack.pop();
// 		}
// 	})

// 	if (stack.length) {
// 		return false;
// 	}

// 	return true;
// }

// var expression = "{{}}{}{}"
// var expressionFalse = "{}{{}";

// console.log(isBalanced(expression)); // true
// console.log(isBalanced(expressionFalse)); // false
// console.log(isBalanced("")); // true



var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

isBalanced(expression); // true
isBalanced(expressionFalse); // false
isBalanced(""); // true

function isBalanced(expression) {
  var checkString = expression;
  var stack = [];

  // If empty, parentheses are technically balanced
  if (checkString.length <= 0) return true;

  for (var i = 0; i < checkString.length; i++) {
    if(checkString[i] === '{') {
      stack.push(checkString[i]);
    } else if (checkString[i] === '}') {
      // Pop on an empty array is undefined
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // If the array is not empty, it is not balanced
  if (stack.pop()) return false;
  return true;
}