
'use strict'

const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

const isNull = isType('Null')
const isArray = isType('Array')
const isDate = isType('Date')
const isRegExp = isType('RegExp')
const isJSON = isType('JSON')

const isUndefined = val => typeof val === 'undefined' && isType('Undefined')(val)

const isString = val => typeof val === 'string' && isType('String')(val)

const isNumber = val => typeof val === 'number' && isType('Number')(val)

const isBoolean = val => typeof val === 'boolean' && isType('Boolean')(val)

const isObject = val => typeof val === 'object' && isType('Object')(val)

const isFunction = val => typeof val === 'function' && isType('Function')(val)

const isClient = () => typeof window !== 'undefined'

const isServer = () => typeof window === 'undefined'

const isWindow = () => typeof window !== 'undefined' && isType('Window')(window)

module.exports = {
	isNull,
	isArray,
	isDate,
	isRegExp,
	isJSON,
	isUndefined,
	isString,
	isNumber,
	isBoolean,
	isObject,
	isFunction,
	isClient,
	isServer,
	isWindow
}

