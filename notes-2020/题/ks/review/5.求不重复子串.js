var lengthOfLongestSubstring = function(s) {
    let length = s.length
    let res = 0
    let temp = ''
    for (let i = 0; i < length; i ++) {
        if (temp.indexOf(s[i]) === -1) {
            temp += s[i]
            res = Math.max(res, temp.length)
        } else {
            temp = temp.slice(temp.indexOf(s[i]) + 1) + s[i]
        }
    }
    return res
};