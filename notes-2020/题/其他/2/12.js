function queue() {
    this.stack1 = []
    this.stack2 = []

    this.enqueue = function(el) {
        this.stack1.push(el)
    }

    this.dequeue = function() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        
        return this.stack2.pop()
    }
}

var a = new queue()
console.log(a)
console.log(a.enqueue(1))
console.log(a.enqueue(2))
console.log(a.enqueue(3))

console.log(a.dequeue())
console.log(a.dequeue())
console.log(a.dequeue())