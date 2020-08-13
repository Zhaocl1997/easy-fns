exports = module.exports = (function () {
    'use strict'

    const toString = Object.prototype.toString

    const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

    const isNull = isType('Null')
    const isArray = isType('Array')
    const isDate = isType('Date')
    const isRegExp = isType('RegExp')
    const isJSON = isType('JSON')

    function isUndefined(val) {
        return typeof val === 'undefined' && toString.call(val) === '[object Undefined]'
    }
    function isString(val) {
        return typeof val === 'string' && toString.call(val) === '[object String]'
    }
    function isNumber(val) {
        return typeof val === 'number' && toString.call(val) === '[object Number]'
    }
    function isBoolean(val) {
        return typeof val === 'boolean' && toString.call(val) === '[object Boolean]'
    }
    function isObject(val) {
        return typeof val === 'object' && toString.call(val) === '[object Object]'
    }
    function isFunction(val) {
        return typeof val === 'function' && toString.call(val) === '[object Function]'
    }

    return {
        isNull: isNull,
        isArray: isArray,
        isDate: isDate,
        isRegExp: isRegExp,
        isJSON: isJSON,
        isUndefined: isUndefined,
        isString: isString,
        isNumber: isNumber,
        isBoolean: isBoolean,
        isObject: isObject,
        isFunction: isFunction
    }

})()


