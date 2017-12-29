// for (let a of 'foo') console.log(a)
// 便利器可以识别码点


// let s = 'hello world!' 
// console.log(s.startsWith('hello'))
// console.log(s.endsWith('!'))
// console.log(s.includes('o'))
// 接受第二个参数，开始位置

// console.log('x'.repeat(5))
// console.log('na'.repeat(2.9))

// 如果repeat的参数是负数或者Infinity，会报错。
// console.log('na'.repeat(Infinity))
// 'na'.repeat(-1)

// 但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
// console.log('na'.repeat(-0.9)) // ""
// console.log('na'.repeat(NaN)) // ""

// console.log('na'.repeat('na')) // ""
// console.log('na'.repeat('3')) // nanana

// 补全 
// console.log('x'.padStart(5, 'ab'))
// console.log('x'.padEnd(5, 'ab'))


// let a = 'a',
// 	b = 'bbb'
// console.log(`
// 	   hello world ${a}
// 	falsdj
// 	${b}--flkasdjf    
// 	`.trim())

const fn = () => 'hello world'
console.log(`foo ${fn()} bar`)

// {}内未定义变量会报错
