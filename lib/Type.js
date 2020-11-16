
'use strict'

const toString = Object.prototype.toString

const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

const isNull = isType('Null')
const isArray = isType('Array')
const isDate = isType('Date')
const isRegExp = isType('RegExp')
const isJSON = isType('JSON')

const isUndefined = val => typeof val === 'undefined' && toString.call(val) === '[object Undefined]'

const isString = val => typeof val === 'string' && toString.call(val) === '[object String]'

const isNumber = val => typeof val === 'number' && toString.call(val) === '[object Number]'

const isBoolean = val => typeof val === 'boolean' && toString.call(val) === '[object Boolean]'

const isObject = val => typeof val === 'object' && toString.call(val) === '[object Object]'

const isFunction = val => typeof val === 'function' && toString.call(val) === '[object Function]'

const isClient = () => typeof window !== 'undefined'

const isServer = () => typeof window === 'undefined'

const isWindow = () => typeof window !== 'undefined' && isType('Window')

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
	isWindow,
	isServer
}

