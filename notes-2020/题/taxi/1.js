function search(arr, target, left, right) {
    let start = left
    let end = right
    let mid = Math.floor((end + start) / 2)

    if (left > right) {
        return -1
    }

    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] > target){
        return search(arr, target, start, mid - 1)
    } else {
        return search(arr, target, mid + 1, end)
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const target = -1
console.log(search(arr, target, 0, arr.length - 1))

// 时间复杂度log(n)