const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.alloc(10, 2)
console.log(buf2)

const buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

const buf4 = Buffer.from([1, 2, 3])
console.log(buf4)

const buf5 = Buffer.from('test')
console.log(buf5)

const buf6 = Buffer.from('test', 'latin1')
console.log(buf6)

const buf7 = Buffer.from('hello world', 'ascii')

console.log(buf7.toString('hex'))
console.log(buf7.toString('base64'))


