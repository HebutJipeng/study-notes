var foo = {
    value: 1
}

function bar() {
    console.log(this.value)
}

var bindFoo = bar.bind(foo)
bindFoo()


Function.prototype.call2 = function (context) {
   let context = context || window
   context.fn = this
   let args = []
   for (let i = 1; i < arguments.length; i++) {
       args.push(`arguments[${i}]`)
   }
   const result = eval(`context.fn(${ args })`)
  
   delete context.fn
   return result
}

Function.prototype.apply2 = function (context, arr) {
    let context = Object(context) || window
    context.fn = this

    let result
    if (!arr) {
        result = context.fn()
    } else {
        let args = []
        for (let i = 0; i < arr.length; i++) {
            args.push(`arr[${ i }]`)
        }
        result = eval(`context.fn(${ args })`)
    }

    delete context.fn
    return result
}