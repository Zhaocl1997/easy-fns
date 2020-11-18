
'use strict'

const {
	guid,
	guid2,
	uuid,
	uuid2
} = require('../lib/uuid')

const { isUUID } = require('../lib/regex')

describe('generate uuid and guid', () => {

	test('generate guid', () => {
		expect(isUUID(guid())).toBeTruthy()
		expect(isUUID(guid2())).toBeTruthy()
	})

	test('generate uuid', () => {
		expect(isUUID(uuid())).toBeTruthy()
		expect(isUUID(uuid2())).toBeTruthy()
	})

})