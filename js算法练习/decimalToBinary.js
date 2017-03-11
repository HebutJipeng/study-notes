// 求十进制转二进制 ----》求任意进制转化（有限制）

// function decimaltobinary(digit) {
//     if (digit >= 1) {
//         if (digit % 2) {
//             return decimaltobinary((digit - 1) / 2) + 1;
//         } else {
//             return decimaltobinary((digit / 2) + 　0);
//         }
//     } else {
//         return "";
//     }
// }

var binarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];

function translate(digit, bin) {
	if (digit >= 1) {
		console.log("-->", binarr[digit % bin]);
		return translate((digit - binarr.indexOf(binarr[digit%bin])) / bin, bin) + binarr[digit % bin];
	} else {
		return "";
	}	
}

console.log(translate(2000, 20));