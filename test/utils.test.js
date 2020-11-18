
'use strict'

const {
	isEmpty,
	isEqual,

	deepClone,
	deepMerge,

	percentToRGB,
	countAge,
} = require('../lib/utils')

const { isRGB } = require('../lib/regex')

describe('check value is valid', () => {

	test('check value is empty(easy way)', () => {
		expect(isEmpty('')).toBeTruthy()
		expect(isEmpty(null)).toBeTruthy()
		expect(isEmpty(undefined)).toBeTruthy()
		expect(isEmpty(NaN)).toBeTruthy()

		expect(isEmpty({})).toBeTruthy()
		expect(isEmpty([])).toBeTruthy()

		expect(isEmpty(new Map())).toBeTruthy()
		expect(isEmpty(new Set())).toBeTruthy()
	})

	test('check two values is equal(easy way)', () => {
		expect(isEqual({ name: 'jack' }, { name: 'jack' })).toBeTruthy()
		expect(isEqual([{ name: 'jack' }], [{ name: 'jack' }])).toBeTruthy()

		expect(isEqual([123, '123', true], [123, '123', true])).toBeTruthy()

		expect(isEqual(
			{
				name: 'jack',
				hobbies: ['jogging', 'swimming'],
				family: [
					{
						name: 'lucy',
						age: 36,
						hobbies: ['reading', 'writing']
					}
				]
			},
			{
				name: 'jack',
				hobbies: ['jogging', 'swimming'],
				family: [
					{
						name: 'lucy',
						age: 36,
						hobbies: ['reading', 'writing']
					}
				]
			})).toBeTruthy()
	})
})


describe('object operation like clone, merge, freeze', () => {

	test('deep clone target(easy way)', () => {
		const objTarget = { name: 'jack', age: 23, marriage: false, hobbies: ['jogging'], family: { father: { name: 'ken', age: 45 } } }
		expect(deepClone(objTarget)).toEqual({ name: 'jack', age: 23, marriage: false, hobbies: ['jogging'], family: { father: { name: 'ken', age: 45 } } })
	})

	test('deep merge two values(easy way)', () => {
		const src = { name: 'jack', age: 23, marriage: false, hobbies: ['jogging', 'running'] }
		const target = { name: 'lucy', age: 22, marriage: false, hobbies: ['jogging', 'writing'] }

		expect(deepMerge(src, target)).toEqual({
			name: 'lucy',
			age: 22,
			marriage: false,
			hobbies: ['jogging', 'writing']
		})
	})

})


test('percent number to RGB', () => {
	const rgb = percentToRGB('80')
	expect(isRGB(rgb)).toBeTruthy()
})

test('calculate time string to age', () => {
	expect(countAge('1997-12-22')).toBe(22)
})

