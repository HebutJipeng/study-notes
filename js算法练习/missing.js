// 找到连续数组中的缺失数

var array_of_integers = [2, 5, 1, 4, 9, 6, 3, 7];
var upper_bound = 9;
var lower_bound = 1;

var missingNumber = function(un_array, min, max) {
	var _min = min;
	var sorted_array = un_array.sort(function(a, b) {
		return a - b;
	})

	if (_min !== sorted_array[0]) {
		return  _min;
	}

	for (var i = 1, l = sorted_array.length; i < l; i++) {
		_min++;
		if (_min !== sorted_array[i]) {
			return _min;
		}
	}

	return _min;
}

console.log(missingNumber(array_of_integers, lower_bound, upper_bound));


// // The output of the function should be 8
// var array_of_integers = [2, 5, 1, 4, 9, 6, 3, 7];
// var upper_bound = 9;
// var lower_bound = 1;

// findMissingNumber(array_of_integers, upper_bound, lower_bound); //8

// function findMissingNumber(array_of_integers, upper_bound, lower_bound) {

//   // Iterate through array to find the sum of the numbers
//   var sum_of_integers = 0;
//   for (var i = 0; i < array_of_integers.length; i++) {
//     sum_of_integers += array_of_integers[i];
//   }

//   // 以高斯求和公式计算理论上的数组和
//   // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
//   // N is the upper bound and M is the lower bound

//   upper_limit_sum = (upper_bound * (upper_bound + 1)) / 2;
//   lower_limit_sum = (lower_bound * (lower_bound - 1)) / 2;

//   theoretical_sum = upper_limit_sum - lower_limit_sum;

//   //
//   return (theoretical_sum - sum_of_integers)
// }