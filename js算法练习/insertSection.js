//

function insertSection(array1, array2) {
	var hashMap = {},
		output = [];

	// for (var i = 0, l = array1.length; i < l; i++) {
	// 	if (!hashMap[array1[i]]) {
	// 		hashMap[array1[i]] = array1[i];  事实上这道题 记这个数是没有用的
	// 	}
	// }

	// for (var j = 0, l2 = array2.length; j <l2; j++) {
	// 	if (hashMap[array2[j]]) {
	// 		output.push(array2[j]);
	// 		delete hashMap[array2[j]];
	// 	}
	// }

	array1.forEach(function(el) {
		hashMap[el] = 1;
	})

	array2.forEach(function(el) {
		if (hashMap[el] === 1) {
			output.push(el);
			hashMap[el]++;
		}
	})

	return output;
}

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

console.log(insertSection(firstArray, secondArray)); // [2, 1]




// var firstArray = [2, 2, 4, 1];
// var secondArray = [1, 2, 0, 2];

// intersection(firstArray, secondArray); // [2, 1]

// function intersection(firstArray, secondArray) {
//   // The logic here is to create a hashmap with the elements of the firstArray as the keys.
//   // After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
//   // If it does exist, add that element to the new array.

//   var hashmap = {};
//   var intersectionArray = [];

//   firstArray.forEach(function(element) {
//     hashmap[element] = 1;
//   });z

//   // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
//   secondArray.forEach(function(element) {
//     if (hashmap[element] === 1) {
//       intersectionArray.push(element);
//       hashmap[element]++;
//     }
//   });

//   return intersectionArray;

//   // Time complexity O(n), Space complexity O(n)
// }