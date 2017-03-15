function format(num) {
	var str = num.toString();
	var l =str.length;
	var output = "";
	for(var i=0; i<l; i++) {
		if (i % 3 === 0) {
			output =  str[l- i -1] + "," + output;
		} else {
			output =  str[l- i -1] +  output;
		}
	}
	return output.substr(0, output.length-1);

}

console.log(format(22312312322));
