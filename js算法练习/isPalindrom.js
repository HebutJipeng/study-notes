//回文字符串
// 判断某个字符串是否为回文字符串，譬如racecar与race car都是回文字符串：


// 我这写的简直傻逼啊
// var isPalindrome = function(string) {
// 	string = string.toLowerCase().replace(" ", "");
// 	var arr = string.split('');
// 	var length = Math.floor(string.length / 2);
// 	var l = string.length;
// 	for (var i = 0; i < length; i++) {
// 		if(arr[i] !== arr[l-i-1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("race Cara")); // true


isPalindrome("racecar"); // true
isPalindrome("race Car"); // true

function isPalindrome(word) {
  // Replace all non-letter chars with "" and change to lowercase
  var lettersOnly = word.toLowerCase().replace(/\s/g, "");

  // Compare the string with the reversed version of the string
  return lettersOnly === lettersOnly.split("").reverse().join("");
}