function search(arr, target, left, right) {
    if (left > right) return -1
    var mid = Math.floor((right + left) / 2)
    var p = arr[mid]

    if (p === target) {
        return mid
    } else if (p < target){
        return search(arr, target, mid + 1, right)
    } else {
        return search(arr, target, left, mid - 1)
    }
}

function search2(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}


console.log(search2([1, 3, 5,6,8,9], 3, 0, 5))