function bubble(unsorted_array) {
	for (var i = 0; i < unsorted_array.length; i++) {
		for (var j = 0; j < unsorted_array.length - i -1; j++) {
			if (unsorted_array[j] > unsorted_array[j+1]) {
				var tmp = unsorted_array[j];
				unsorted_array[j] = unsorted_array[j+1];
				unsorted_array[j+i] = tmp;
			}
		}
	}
	return unsorted_array;
}

var a = [3, 1, 2, 5, 6];

console.log(bubble(a));