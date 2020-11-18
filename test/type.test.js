
'use strict'

const {
	isNull,
	isArray,
	isDate,
	isRegExp,
	isUndefined,
	isString,
	isNumber,
	isBoolean,
	isObject,
	isFunction,
	isClient,
	isServer,
	isWindow
} = require('../lib/type')

const { regex } = require('../lib/regex')

describe('type utils', () => {

	test('check value is null', () => {
		expect(isNull(null)).toBeTruthy()
		expect(isNull('')).toBeFalsy()
	})

	test('check value is Array', () => {
		expect(isArray([])).toBeTruthy()
		expect(isArray('')).toBeFalsy()
	})

	test('check value is Date', () => {
		expect(isDate(new Date())).toBeTruthy()
		expect(isDate('')).toBeFalsy()
	})

	test('check value is Regex', () => {
		expect(isRegExp(regex.email)).toBeTruthy()
		expect(isRegExp('')).toBeFalsy()
	})

	test('check value is Undefined', () => {
		expect(isUndefined(undefined)).toBeTruthy()
		expect(isUndefined('')).toBeFalsy()
	})

	test('check value is String', () => {
		expect(isString('123abc')).toBeTruthy()
		expect(isString({})).toBeFalsy()
	})

	test('check value is Number', () => {
		expect(isNumber(123123)).toBeTruthy()
		expect(isNumber('')).toBeFalsy()
	})

	test('check value is Boolean', () => {
		expect(isBoolean(true)).toBeTruthy()
		expect(isBoolean('')).toBeFalsy()
	})

	test('check value is Object', () => {
		expect(isObject({})).toBeTruthy()
		expect(isObject('')).toBeFalsy()
	})

	test('check value is Function', () => {
		expect(isFunction(() => { })).toBeTruthy()
		expect(isFunction('')).toBeFalsy()
	})

	test('check value is Client', () => {
		expect(isClient()).toBeTruthy()
	})

	test('check value is Server', () => {
		expect(isServer()).toBeFalsy()
	})

	test('check value is Window', () => {
		expect(isWindow()).toBeTruthy()
	})

})