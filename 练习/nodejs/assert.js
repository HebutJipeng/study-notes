// assert.deepEqual()

/*
const assert = require('assert')

const obj1 = {
	a: {
		b: 1
	}
}

const obj2 = {
	a: {
		b: 2
	}
}

const obj3 = {
	a: {
		b: 1
	}
}

const obj4 = Object.create(obj1)

assert.deepEqual(obj1, obj1)
// 通过

// assert.deepEqual(obj1, obj2)
// { a: { b: 1 } } deepEqual { a: { b: 2 } }

assert.deepEqual(obj1, obj3)
// 通过

console.log(obj4)
// assert.deepEqual(obj1, obj4, '哈哈哈哈')
// AssertionError: { a: { b: 1 } } deepEqual {} 
// 原型会被忽略

console.log('----------------------------------------------------------------------------------------')


*/


// assert.notDeepStrictEqual(actual, expected, message);

/*

const assert = require('assert')
const message = 'error: not equal'

assert.deepEqual({a: 1}, {a: '1'})
// 1 == '1'

// assert.deepStrictEqual({a: 1}, {a: '1'}, message);

const date = new Date()
const object = {}
const fakeDate = {}

Object.setPrototypeOf(fakeDate, Date.prototype)

assert.deepEqual(object, fakeDate)

assert.deepStrictEqual(object, fakeDate);
// AssertionError: {} deepStrictEqual Date {}

assert.deepEqual(date, fakeDate)

assert.deepStrictEqual(date, fakeDate);
// AssertionError: {} deepStrictEqual Date {}

*/

// console.log('----------------------------------------------------------------------------------------')
const assert = require('assert')
// assert.doesNotThrow(
// 	() => {
// 		throw new TypeError('错误');
// 	},
// 	syntaxError
// );


assert.equal(1, 1)
assert.equal(1, '1')


// assert.equal(1, 2)
// assert.equal(
// 	{ a: {b: 1}},
// 	{ a: {b: 1}}
// )

// assert.fail(1, 2, '','>')

assert.ok(true)
// assert.ok(false)
assert.ok({})
// assert.ok('')

// assert.ok(0)

// assert.ok(null)

assert.ok('undefined')
// assert.ok(undefined)
