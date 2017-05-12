// 对给定的一个字符串，找出有重复的字符，并给出其位置，如：abcaaAB12ab12 输出：a，1；a，4；a，5；a，10，b，2；b，11，1，8；1，12， 2，9；2，13。

function findLocation(str) {
	var hashMap = {};
	for(var i = 0; i < str.length; i++) {
		if (!hashMap[str[i]]) {
			hashMap[str[i]] = [];
			hashMap[str[i]].push(i);
		} else {
			hashMap[str[i]].push(i);
		}
	}
	for (x in hashMap) {
		if (hashMap[x].length !== 1) {
			var tmp = '';
			hashMap[x].forEach(function(el) {
				tmp += x + ":" + el + ',';
			})
			console.log(tmp+";");
		}	
	}
}

findLocation('abcaaAB12ab12');