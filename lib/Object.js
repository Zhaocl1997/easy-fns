
'use strict'

const { isObject, isArray } = require('./type')

const hasValue = {
    hv1(obj, key) {
        if (obj[key]) {
            return true
        }
        return false
    },

    hv2(obj, key) {
        if (`${key}` in obj) {
            return true
        }
        return false
    },

    hv3(obj, key) {
        if (obj.hasOwnProperty(`${key}`)) {
            return true
        }
        return false
    },
}

const deepClone = {
    DC1(target) {
        return JSON.parse(JSON.stringify(target))
    },

    DC2(target) {
        let cloneTarget = {}
        for (const key in target) {
            cloneTarget[key] = target[key]
        }
        return cloneTarget
    },

    DC3(target) {
        if (isObject(target)) {
            let cloneTarget = {}
            for (const key in target) {
                cloneTarget[key] = DC3(target[key])
            }
            return cloneTarget
        } else {
            return target
        }
    },

    DC4(target) {
        if (isObject(target)) {
            let cloneTarget = isArray(target) ? [] : {}
            for (const key in target) {
                cloneTarget[key] = DC4(target[key])
            }
            return cloneTarget
        } else {
            return target
        }
    }
}

module.exports = {
    hasValue,
    deepClone
}



