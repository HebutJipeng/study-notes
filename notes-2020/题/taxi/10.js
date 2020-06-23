const obj = {
    a: 100
}

const obj1 = obj
let a1 = obj.a

obj1.a = 200
console.log(obj.a)
console.log(a1)
a1 = 300
console.log(obj.a)
console.log(obj1.a)
