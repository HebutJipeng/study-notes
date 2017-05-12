//数组中元素乘积

// 给定某无序数组，要求返回新数组 output ，其中 output[i] 为原数组中除了下标为 i 的元素之外的元素乘积，要求以 O(n) 复杂度实现：

function productExceptSelf(array) {
	var product = 1,
		length = array.length,
		output = [];

	for (var i = 0; i < length; i++) {
		output.push(product);
		product = product * array[i];
	}

	product = 1;

	for (var j = length - 1; j > -1; j--) {
		output[j] = output[j] * product;
		product = product * array[j];
	}

	return output;
}

var firstArray = [2, 2, 4, 1];
var secondArray = [0, 0, 0, 2];
var thirdArray = [-2, -2, -3, 2];

console.log(productExceptSelf(firstArray)); // [8, 8, 4, 16]
console.log(productExceptSelf(secondArray)); // [0, 0, 0, 0]
console.log(productExceptSelf(thirdArray)); // [12, 12, 8, -12]




// var firstArray = [2, 2, 4, 1];
// var secondArray = [0, 0, 0, 2];
// var thirdArray = [-2, -2, -3, 2];

// productExceptSelf(firstArray); // [8, 8, 4, 16]
// productExceptSelf(secondArray); // [0, 0, 0, 0]
// productExceptSelf(thirdArray); // [12, 12, 8, -12]

// function productExceptSelf(numArray) {
//   var product = 1;
//   var size = numArray.length;
//   var output = [];

//   // From first array: [1, 2, 4, 16]
//   // The last number in this case is already in the right spot (allows for us)
//   // to just multiply by 1 in the next step.
//   // This step essentially gets the product to the left of the index at index + 1
//   for (var x = 0; x < size; x++) {
//       output.push(product);
//       product = product * numArray[x];
//   }

//   // From the back, we multiply the current output element (which represents the product
//   // on the left of the index, and multiplies it by the product on the right of the element)
//   var product = 1;
//   for (var i = size - 1; i > -1; i--) {
//       output[i] = output[i] * product;
//       product = product * numArray[i];
//   }

//   return output;
// }