
'use strict'

const { isObject, isArray } = require('./type')

const hasValue = {
	hv1(obj, key) {
		return obj[key]
	},

	hv2(obj, key) {
		return `${key}` in obj
	},

	hv3(obj, key) {
		return Object.prototype.hasOwnProperty.call(obj, key)
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
				cloneTarget[key] = deepClone.DC3(target[key])
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
				cloneTarget[key] = deepClone.DC4(target[key])
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



