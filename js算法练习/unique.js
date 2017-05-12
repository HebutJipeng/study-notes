//数组去重

function unique(unsorted_array) {
	var hashMap = {};
	var arr = [];
	for (var i = 0,l = unsorted_array.length; i< l; i++) {
		if (!hashMap[unsorted_array[i]]) {
			hashMap[unsorted_array[i]] = unsorted_array[i];
			arr.push(unsorted_array[i]);
		}
	}
	return arr;
}

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

console.log(unique(array));


// // ES6 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]


// // ES5 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// uniqueArray(array); // [1, 2, 3, 5, 9, 8]

// function uniqueArray(array) {
//   var hashmap = {};
//   var unique = [];
//   for(var i = 0; i < array.length; i++) {
//     // If key returns null (unique), it is evaluated as false.
//     if(!hashmap.hasOwnProperty([array[i]])) {
//       hashmap[array[i]] = 1;
//       unique.push(array[i]);
//     }
//   }
//   return unique;
// }