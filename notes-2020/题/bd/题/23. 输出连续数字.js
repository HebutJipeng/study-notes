// 给定一个升序整型数组[0,1,2,4,5,7,13,15,16],找出其中连续出现的数字区间，输出为["0->2","4->5","7","13","15->16"]
function summaryRanges(arr){
    //TODO
    let res = []
    let cur = arr[0]
    let last = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if ((last + 1) == arr[i]) {
            cur += `->${arr[i]}`
            last = arr[i]
        } else {
            res.push(cur + '')
            last = arr[i]
            cur = arr[i]
        }
    }
    res.push(cur)
    return res
}

console.log(summaryRanges([0,1,2,4,5,7,13,15,16]))