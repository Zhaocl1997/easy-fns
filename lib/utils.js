exports = module.exports = (function () {
    'use strict'

    const { isString, isObject, isArray } = require('./Type')

    /**
     * Check the strength of a string, used as password strength check
     *
     * @param  {String} str String to check strength
     * @return {Number} one in [1,2,3,4] for strength
     */
    function checkStrStrong(str) {
        if (!str || !isString(str)) throw new Error('Please provided a STRING')

        let modes = 0

        if (str.length < 1) return modes
        if (/\d/.test(str)) modes++ // number
        if (/[a-z]/.test(str)) modes++ // lower
        if (/[A-Z]/.test(str)) modes++ // upper  
        if (/\W/.test(str)) modes++ // special

        switch (modes) {
            case 1:
                return 1
            case 2:
                return 2
            case 3:
            case 4:
                return str.length < 12 ? 3 : 4
        }
        return modes
    }

    /**
        * Check the val is empty
        *
        * @param  {String} val val to check is empty
        * @return {Boolean} true for empty, other false
        */
    function isEmpty(val) {
        // null or undefined
        if (val === null || val === undefined) return true

        if (typeof val === 'boolean') return false;

        if (typeof val === 'number') return !val;

        if (val instanceof Error) return val.message === '';

        switch (Object.prototype.toString.call(val)) {
            // String or Array
            case '[object String]':
            case '[object Array]':
                return !val.length;

            // Map or Set or File
            case '[object File]':
            case '[object Map]':
            case '[object Set]': {
                return !val.size;
            }

            // Plain Object
            case '[object Object]': {
                return !Object.keys(val).length;
            }
        }
        return false;
    }

    /**
        * Check two val is equal
        *
        * @param  {String} a 
        * @param  {String} b
        * @return {Boolean} true for equal, other false
        */
    function isEqual(a, b) {
        if (a === b) return true

        // object
        if (isObject(a) && isObject(b) &&
            Object.keys(a).length === Object.keys(b).length) {
            for (const key in a) {
                if (a.hasOwnProperty(key)) {
                    if (!this.isEqual(a[key], b[key]))
                        // key different
                        return false
                }
            }
        } else
            // array
            if (isArray(a) && isArray(a) && a.length === b.length) {
                for (let i = 0, length = a.length; i < length; i++) {
                    if (!this.isEqual(a[i], b[i]))
                        // item different
                        return false
                }
            } else {
                // other false
                return false
            }
        return true
    }

    const dynamicKeys = key => {
        // 分割去空
        const arr = key.split(".").filter(s => s && s.trim())

        // 第一次执行时，定义一个数组专门用来存储所有的参数
        const _args = Array.prototype.slice.call(arguments)

        // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
        const _adder = function () {
            _args.push(...arguments)
            return _adder
        }

        // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = () => arr.reduce((a, b) => [a][b])

        return _adder
    }

    return {
        checkStrStrong: checkStrStrong,
        isEmpty: isEmpty,
        isEqual: isEqual,
        dynamicKeys: dynamicKeys
    }
})()

