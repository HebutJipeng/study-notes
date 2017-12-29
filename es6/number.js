const log = (res) => console.log(res)

// log(Number.isFinite(1))
// log(Number.isFinite(.8))
// log(Number.isFinite(NaN))
// log(Number.isFinite(Infinity))
// log(Number.isFinite(-Infinity))
// log(Number.isFinite('foo'))
// log(Number.isFinite('15'))
// log(Number.isFinite(true))

// log('-----')

//  log(Number.isNaN(NaN))
//  log(Number.isNaN(15))
//  log(Number.isNaN('15'))

//  log(Number.isNaN(true))
//  log(Number.isNaN(9/NaN))
//  log(Number.isNaN('true'/0))
//  log(Number.isNaN('true'/'true'))

// 它们与传统的全局方法isFinite()和isNaN()的区别在于，
// 传统方法先调用Number()将非数值的值转为数值，再进行判断，
// 而这两个新方法只对数值有效，
// Number.isFinite()对于非数值一律返回false, 
// Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

// log(parseInt('12.34'))
// log(Number.parseInt('12.23'))

// log(parseFloat('12.23#'))
// log(Number.parseFloat('12.34#'))
// 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化
// 

// log(Number.isInteger(25))
// log(Number.isInteger(25.0))

// log(Number.EPSILON)

// 安全整数和Number.isSafeInteger()
// 没怎么看


// 去除小数部分
// 先用Number()转为整数
log(Math.trunc(-31231.12312))
log(Math.trunc('123.323'))
log(Math.trunc(true))
log(Math.trunc(false))
log(Math.trunc(null))

// 对于空值和无法截取整数的值，返回NaN。
log(Math.trunc(NaN))
log(Math.trunc('foo'))
log(Math.trunc())
log(Math.trunc(undefined))
