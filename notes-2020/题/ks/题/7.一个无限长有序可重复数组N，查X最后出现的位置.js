// n 为无限长有序数组, k 为目标值
function search(n, k) {
    let left = 0
    let right = 1
    let mid = 0

    while(n[right] < k) {
        left = right
        right *= 2
    }

    // 二分查找 1
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        if (n[mid] === k) {
            return mid
        } else if (n[mid] > k) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1

    // 二分查找2
    // function binarySearch(start, end) {
    //     if (start > end) {
    //         return -1
    //     }
    //     let mid = Math.floor((start + end )/2)
    //     if (n[mid] === k) {
    //         return mid
    //     } else if (n[mid] > k) {
    //         return binarySearch(start, mid - 1)
    //     } else {
    //         return binarySearch(mid + 1, end)
    //     }
    // }

    // return binarySearch(left, right)
    
}

// let n = []
// let k = target
