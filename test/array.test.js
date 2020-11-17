
'use strict'

const { getRandomElement, getRandomElements, curryConcat, objectArrayUnique } = require('../lib/array')

describe('array utils', () => {

	const arr = [
		{ 'id': 1, 'name': '李四1' },
		{ 'id': 2, 'name': '李四' },
		{ 'id': 2, 'name': '李四' },
		{ 'id': 1, 'name': '李四1' },
		{ 'id': 5, 'name': '李四5' },
	]

	test('get random element in an array', () => {
		const result = getRandomElement(arr)
		const isInclude = arr.find(i => i.id === result.id)
		expect(isInclude).toBeTruthy()
	})

	test('get random elements in an array', () => {
		expect(getRandomElements(arr, 3)).toHaveLength(3)
	})

	test('curry concat', () => {
		const arr1 = [1, 3, 5]
		const arr2 = [7, 9, 11]
		const arr3 = [2, 4, 6, 8]

		expect(curryConcat(arr1)(arr2)(arr3).toString()).toEqual([1, 3, 5, 7, 9, 11, 2, 4, 6, 8])
	})

	test('object array unique', () => {
		expect(objectArrayUnique(arr)).toEqual([
			{ 'id': 1, 'name': '李四1' },
			{ 'id': 2, 'name': '李四' },
			{ 'id': 5, 'name': '李四5' },
		])
	})
})


