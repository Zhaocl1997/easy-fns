
'use strict'

const { isString, isObject, isArray } = require('./Type')
const { ALL_STRING } = require('./Constant')

/**
 * @description         检查字符串强度，适用于密码检查
 * @param  {String} str 目标字符串
 * @return {Number}     1-4其中一个，4为最强
 */
const checkStrStrong = str => {
    if (!str) throw new Error('Please provide a STRING')

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
 * @description         检查是否为空(伪)）
 * @param  {String} val 目标值
 * @return {Boolean}    true为空，false为不空
 */
const isEmpty = val => {
    // null or undefined
    if (val === null || val === undefined) return true

    if (typeof val === 'boolean') return false

    if (typeof val === 'number') return !val

    if (val instanceof Error) return val.message === ''

    switch (Object.prototype.toString.call(val)) {
        // String or Array
        case '[object String]':
        case '[object Array]':
            return !val.length

        // Map or Set or File
        case '[object File]':
        case '[object Map]':
        case '[object Set]': {
            return !val.size
        }

        // Plain Object
        case '[object Object]': {
            return !Object.keys(val).length
        }
    }
    return false;
}

/**
 * @description       比较两值是否相等(伪)
 * @param  {String} a 目标a
 * @param  {String} b 目标b
 * @return {Boolean}  true为相等，false为不等
 */
const isEqual = (a, b) => {
    if (a === b) return true

    // object
    if (isObject(a) && isObject(b) &&
        Object.keys(a).length === Object.keys(b).length) {
        for (const key in a) {
            if (a.hasOwnProperty(key)) {
                if (!isEqual(a[key], b[key]))
                    // key different
                    return false
            }
        }
    } else
        // array
        if (isArray(a) && isArray(a) && a.length === b.length) {
            for (let i = 0, length = a.length; i < length; i++) {
                if (!isEqual(a[i], b[i]))
                    // item different
                    return false
            }
        } else {
            // other false
            return false
        }
    return true
}

/**
 * @author Zhaocl1997   https://github.com/Zhaocl1997
 * @description         动态解析对象的key，使用柯里化支持深嵌套解析
 * @example             obj[dynamicKeys("a.b.c.d")] => obj[a][b][c][d]
 * @param  {String} key 可以带深层级，例如 "a.b.c.d"
 * @return {[Key]}      返回值即可直接在想要解析的对象上使用
 */
const dynamicKeys = key => {
    if (!key) throw new Error('Please provide a STRING')

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

/**
 * @author Zhaocl1997   (https://github.com/Zhaocl1997)
 * @description         清除想要强制清除的字符串，一般指一些敏感的特殊字符
 * @example             clearIllegalChars("a|b/c", ["|", "/"]) => "abc"
 * @param  {String} str 目标字符串
 * @param  {Array} arr  不想要的字符串数组
 * @return {String}     清除完的字符串
 */
const clearIllegalChars = (str, arr) => {
    let newStr = ""
    for (let i = 0; i < arr.length; i++) {
        if (str.indexOf(arr[i]) !== -1) {
            let regexp = "/\\" + arr[i] + "/g"
            str = str.replace(eval(regexp), "")
        }
    }
    newStr = str
    return newStr
}

/**
 * @author Zhaocl1997    (https://github.com/Zhaocl1997)
 * @description          限制字符串内容，目前支持只能输入数字，字母和中文
 * @example              clearUnexpectedChars("123abc啊啊啊", "number") => "123"
 * @param  {String} str  目标字符串
 * @param  {String} type 类似于Enum ["number", "letter", "chinese"] 目前只支持这三个的其中一种
 * @return {String}      清除完的字符串
 */
const clearUnexpectedChars = (str, type) => {
    const allowedInputType = ["number", "letter", "chinese"]

    if (!str || !isString(type) || !allowedInputType.includes(type)) {
        return str
    }

    const reverseRegex = v => "/" + v + "/g"
    const regexTemplate = {
        number: '[^0-9-.]',
        letter: '[^A-Za-z]',
        chinese: '[^\u4e00-\u9fa5]',
    }

    return str.replace(eval(reverseRegex(regexTemplate[type])), "")
}

/**
 * @description         生成随机ID
 * @param  {Number} len 多少位ID，默认32位
 * @return {String}     随机ID
 */
const randomId = (len = 32) => {
    const $chars = ALL_STRING
    let pwd = ""
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * $chars.length))
    }
    return pwd
}

/**
 * @description             百分比转化为RGB颜色
 * @param  {Number} percent 百分比数字 不能超过100小于0
 * @return {String}         rgb字符串
 */
const percentToRGB = percent => {
    if (percent > 100 || percent < 0) {
        throw new Error('Percent should be in [0, 100]')
    }

    let r, g, b

    if (percent < 50) {
        // green to yellow
        r = Math.floor(255 * (percent / 50))
        g = 255
    } else {
        // yellow to red
        r = 255
        g = Math.floor(255 * ((50 - (percent % 50)) / 50))
    }

    b = 0

    return "rgb(" + r + "," + g + "," + b + ")"
}


/**
 * @description              计算年龄
 * @param  {String} birthStr 字符串日期，类似于 2020-10-20
 * @return {Number}          年龄
 */
const countAge = birthStr => {

    let returnAge
    const birthStrArr = birthStr.split("-")
    const birthYear = birthStrArr[0]
    const birthMonth = birthStrArr[1]
    const birthDay = birthStrArr[2]

    const d = new Date()
    const nowYear = d.getFullYear()
    const nowMonth = d.getMonth() + 1
    const nowDay = d.getDate()

    if (nowYear == birthYear) {
        returnAge = 0 // 同年 则为0岁
    } else {
        const ageDiff = nowYear - birthYear // 年之差
        if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
                const dayDiff = nowDay - birthDay // 日之差
                if (dayDiff < 0) {
                    returnAge = ageDiff - 1
                }
                else {
                    returnAge = ageDiff
                }
            }
            else {
                const monthDiff = nowMonth - birthMonth // 月之差
                if (monthDiff < 0) {
                    returnAge = ageDiff - 1
                }
                else {
                    returnAge = ageDiff
                }
            }
        }
        else {
            returnAge = -1 // 返回-1 表示出生日期输入错误 晚于今天
        }
    }

    return returnAge // 返回周岁年龄
}

/**
 * @description                    深克隆(伪)
 * @param  {Object | Array} target 目标参数
 * @return {Object | Array}        深克隆完的对象或数组
 */
const deepClone = target => {
    const dp = t => {
        if (!t && typeof t !== 'object') {
            throw new Error('error arguments', 'deepClone')
        }

        const tObj = t.constructor === Array ? [] : {}

        Object.keys(t).forEach(keys => {
            if (t[keys] && typeof t[keys] === 'object') {
                tObj[keys] = dp(t[keys])
            } else {
                tObj[keys] = t[keys]
            }
        })
        return tObj
    }

    return dp(target)
}

/**
 * @description                    深冻结(伪)
 * @param  {Object | Array} target 目标参数
 * @return {Object | Array}        深冻结完的对象或数组
 */
const deepFreeze = target => {
    let prop, propKey

    // 首先冻结第一层对象
    Object.freeze(target)

    for (propKey in target) {
        prop = target[propKey]
        if (
            !target.hasOwnProperty(propKey) ||
            !(typeof prop === "object") ||
            Object.isFrozen(prop)
        ) {
            // 跳过原型链上的属性、基本类型和已冻结的对象
            continue;
        }
        deepFreeze(prop) // 递归调用
    }
}

/**
 * @description                    深合并(伪)
 * @param  {Object | Array} src    
 * @param  {Object | Array} target 
 * @return {Object | Array}        
 */
const deepMerge = (src, target) => {
    let key

    for (key in target) {
        src[key] =
            src[key] && src[key].toString() === '[object Object]'
                ? deepMerge(src[key], target[key])
                : (src[key] = target[key]);
    }

    return src
}

/**
 * @description          划线转换驼峰
 * @param  {String} str  目标字符串
 * @param  {String} type 转换格式，默认-
 * @return {String}      默认替换dash为大写字母
 */
const line2Camel = (str, type = "-") => str.replace(eval("/\\" + type + "(\\w)/g"), (all, letter) => letter.toUpperCase())


/**
 * @description          驼峰转换下划线
 * @param  {String} str  目标字符串
 * @param  {String} type 转换格式，默认-
 * @return {String}      默认dash分割的字符串
 */
const camel2Line = (str, type = "-") => str.replace(/([A-Z])/g, `${type}$1`).toLowerCase()


/**
 * @description 柯里化concat
 */
const curryConcat = function () {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    const _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    const _concat = function () {
        _args.push(...arguments);
        return _concat;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _concat.toString = function () {
        return _args.reduce(function (a, b) {
            return a.concat(b);
        });
    }
    return _concat
}

module.exports = {
    checkStrStrong,
    isEmpty,
    isEqual,
    dynamicKeys,
    clearIllegalChars,
    clearUnexpectedChars,
    randomId,
    percentToRGB,
    countAge,
    deepClone,
    deepFreeze,
    line2Camel,
    camel2Line,
    curryConcat
}
