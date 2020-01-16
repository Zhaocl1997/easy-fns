exports = module.exports = (function () {
    'use strict'

    const toString = Object.prototype.toString

    return {
        isNull(val) {
            return toString.call(val) === '[object Null]'
        },
        isUndefined(val) {
            return typeof val === 'undefined' && toString.call(val) === '[object Undefined]'
        },
        isString(val) {
            return typeof val === 'string' && toString.call(val) === '[object String]'
        },
        isNumber(val) {
            return typeof val === 'number' && toString.call(val) === '[object Number]'
        },
        isBoolean(val) {
            return typeof val === 'boolean' && toString.call(val) === '[object Boolean]'
        },
        isObject(val) {
            return typeof val === 'object' && toString.call(val) === '[object Object]'
        },
        isArray(val) {
            return toString.call(val) === '[object Array]'
        },
        isDate(val) {
            return toString.call(val) === '[object Date]'
        },
        isFunction(val) {
            return toString.call(val) === '[object Function]'
        },
        isRegExp(val) {
            return toString.call(val) === '[object RegExp]'
        },
        isJSON(val) {
            return toString.call(val) === '[object JSON]'
        }
    }
})()