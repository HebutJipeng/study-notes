// 找出整形数组中乘积最大的三个数

// 解题思路： 最大的三个数：无外乎 min1 * min2 * max1 或者是 max1 * max2 * max3


// 错误：
// 当数组中有两个 0个 、 1个负数的时候 最大值为 max1 * max2 * max3
// 			   2个 、 3个负数的时候 最大值为 min1 * min2 * max1 或者是 max1 * max2 * max3

var array = [-10, 7, 29, 30, 5, -10, -70];

console.log(maxThree(array));

function maxThree(unsort_array) {
    var sorted_array = unsort_array.sort(function(a, b) {
        return a - b;
    })


    // 以下的判断是没有意义的， 不管是否有两个负数以上， 只需要比较 min1 * min2 * max1 或者是 max1 * max2 * max3 即可

    // var low = 0;
    var length = sorted_array.length;

    // for (var i = 0; i < length; i++) {
    //     if (sorted_array[i] < 0) {
    //         low++;
    //     }
    // }

    // var higher = mul(sorted_array[length - 1], sorted_array[length - 2], sorted_array[length - 3]);

    // if (low > 1) {
    //     var lower = mul(sorted_array[0], sorted_array[1], sorted_array[length - 1]);
    //     if (lower >= higher) {
    //         higher = lower;
    //     }
    // }

    // return higher;


    //	正解：
    var product1 = mul(sorted_array[length - 1], sorted_array[length - 2], sorted_array[length - 3]);
    var product2 = mul(sorted_array[0], sorted_array[1], sorted_array[length - 1]);
    return product1 > product2 ? product1 : product2;
}

function mul(a, b, c) {
    return a * b * c;
}
