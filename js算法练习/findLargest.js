//

function findLargest(array) {
    var diff = [];

    for (var i = 0, l = array.length; i < l; i++) {
        for (var j = i; j < l - i; j++) {
            if (array[i] < array[j]) {
                diff.push(array[j] - array[i]);
            }
        }
    }

    return diff.sort(function(a, b) {
        return b - a;
    })[0];
}


var array1 = [7, 8, 4, 9, 9, 15, 3, 1, 10];

console.log(findLargest(array1));
