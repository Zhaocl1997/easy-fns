
'use strict'

import {
	guid,
	guid2,
	uuid,
	uuid2
} from '../lib/uuid'

import { isUUID } from '../lib/regex'

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