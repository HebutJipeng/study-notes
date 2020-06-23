function add() {
   if (arguments.length) {
       return arguments[0] + '+'
   } else {
       return '+'
   }
}
function one() {
    if (arguments.length) {
        return eval(arguments[0] + '1')
    } else {
        return '1'
    }
}
function two() {
    if (arguments.length) {
        return eval(arguments[0] + '2')
    } else {
        return '2'
    }
}
console.log(one(add(two()))) // 3
console.log(two(add(one()))) // 3

// function curring(fn) {
//     let args = []
//     return function () {
//         if (arguments.length) {
//             args.push(...arguments)
//         } else {
//             fn.apply(this, args)
//         }
//     }
// }