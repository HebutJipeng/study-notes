// function fab(n) {
// 	if (n === 2) {
// 		return 2;
// 	} else if (n === 1) {
// 		return 1;
// 	}

// 	return fab(n-1) + fab(n-2);
// }

console.log(fab(6));

function fab(n) {
	var tmp =[1, 2];
	for (var i = 2; i < n; i++) {
		tmp[i] = tmp[i-1] + tmp[i-2];
	}

	return tmp[n-1];
}