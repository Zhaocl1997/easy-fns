
'use strict'

import { genEmail, genMAC, genPhone, genPassword, genString } from '../lib/generator'
import { isEmail, isMacAddress, isPhone } from '../lib/regex'

describe('generator', () => {

	test('generate email and validate', () => {
		expect(isEmail(genEmail())).toBeTruthy()
	})

	test('generate macAddress and validate', () => {
		expect(isMacAddress(genMAC())).toBeTruthy()
	})

	test('generate phone and validate', () => {
		expect(isPhone(genPhone())).toBeTruthy()
	})

	test('generate password', () => {
		expect(genPassword(12)).toHaveLength(12)
	})

	test('generate random string', () => {
		expect(genString(32)).toHaveLength(32)
	})
})
