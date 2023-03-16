// 给定一串只含有小写形式的、排序过的 letters，并且给定一个目标字母 target ，请找出在给定字母串中，大于目标字母的最小的那一个字母。
function search(arr, target) {
    if (arr[arr.length - 1] < target) {
        return arr[0]
    }

    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return arr[left]
}