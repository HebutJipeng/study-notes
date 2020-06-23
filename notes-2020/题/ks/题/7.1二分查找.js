let n = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8]
let k = 8

function binarySearch(start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (n[mid] === k) {
    return mid;
  } else if (n[mid] > k) {
    return binarySearch(start, mid - 1);
  } else {
    return binarySearch(mid + 1, end);
  }
}

function binarySearch2(start, end) {
    let left = start
    let right = end

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (n[mid] == k) {
            return mid
        } else if (n[mid] > k) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

console.log(binarySearch2(0, n.length - 1))
