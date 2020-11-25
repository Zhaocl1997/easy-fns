
'use strict'

const { getRandomInt, Fibonacci } = require('../lib/math')

describe('math utils', () => {

	test('get random int', () => {
		expect(getRandomInt(10, 20)).toBeGreaterThanOrEqual(10)
		expect(getRandomInt(10, 20)).toBeLessThanOrEqual(20)
	})

	test('Fibonacci array', () => {
		expect(Fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34])
	})
})
