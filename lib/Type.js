
'use strict'

export const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

export const isNull = isType('Null')
export const isArray = isType('Array')
export const isDate = isType('Date')
export const isRegExp = isType('RegExp')
export const isJSON = isType('JSON')

export const isUndefined = val => typeof val === 'undefined' && isType('Undefined')(val)

export const isString = val => typeof val === 'string' && isType('String')(val)

export const isNumber = val => typeof val === 'number' && isType('Number')(val)

export const isBoolean = val => typeof val === 'boolean' && isType('Boolean')(val)

export const isObject = val => typeof val === 'object' && isType('Object')(val)

export const isFunction = val => typeof val === 'function' && isType('Function')(val)

export const isClient = () => typeof window !== 'undefined'

export const isServer = () => typeof window === 'undefined'

export const isWindow = () => typeof window !== 'undefined' && isType('Window')(window)

