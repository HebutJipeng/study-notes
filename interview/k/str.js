let str1 = "what movies did sally field win an oscar for"
let str2 = "what movies did _ win an _ for"

function fun(str1, str2) {
    let a = str2.split('_')
    let aa = []
    a.forEach(item => {
        if (item == '') {
            aa.push(str1)
            return false
        }
        let tem = str1.split(item)
        tem[0] ? aa.push(tem[0]) : ''
        str1 = tem[1]
    });
    return aa
}

let bb = fun(str1, str2)
console.log(bb);