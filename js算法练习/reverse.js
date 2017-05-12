// 颠倒字符串
// 给定某个字符串，要求将其中单词倒转之后然后输出，譬如"Welcome to this Javascript Guide!" 应该输出为 "emocleW ot siht tpircsavaJ !ediuG"。

function reversestring(re_string) {
	return re_string.reverse('').reverse(' ');
}

String.prototype.reverse = function(separator) {
	return this.split(separator).reverse().join(separator);
};

// function reverse(string, separator) {
// 	return string.split(separator).reverse().join(separator);
// }



var a = reversestring("Welcome to this Javascript Guide!");
console.log(a);




// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }