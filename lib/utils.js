
'use strict'

import { isObject, isArray } from './type'

/**
 * @description         检查是否为空(伪)
 * @param  {String} val 目标值
 * @return {Boolean}    true为空，false为不空
 */
export const isEmpty = val => {
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
	return false
}

/**
 * @description       比较两值是否相等(伪)
 * @param  {String} a 目标a
 * @param  {String} b 目标b
 * @return {Boolean}  true为相等，false为不等
 */
export const isEqual = (a, b) => {
	if (a === b) return true

	// object
	if (isObject(a) && isObject(b) &&
		Object.keys(a).length === Object.keys(b).length) {
		for (const key in a) {
			if (Object.prototype.hasOwnProperty.call(a, key)) {
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
 * @description                    深克隆(伪)
 * @param  {Object | Array} target 目标参数
 * @return {Object | Array}        深克隆完的对象或数组
 */
export const deepClone = target => {
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
export const deepFreeze = target => {
	let prop, propKey

	// 首先冻结第一层对象
	Object.freeze(target)

	for (propKey in target) {
		prop = target[propKey]
		if (
			!Object.prototype.hasOwnProperty.call(target, propKey) ||
			!(typeof prop === 'object') ||
			Object.isFrozen(prop)
		) {
			// 跳过原型链上的属性、基本类型和已冻结的对象
			continue
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
export const deepMerge = (src, target) => {
	for (let key in target) {
		src[key] =
			src[key] && src[key].toString() === '[object Object]'
				? deepMerge(src[key], target[key])
				: (src[key] = target[key])
	}

	return src
}




/**
 * @author Zhaocl1997   https://github.com/Zhaocl1997
 * @description         动态解析对象的key，使用柯里化支持深嵌套解析
 * @example             obj[dynamicKeys("a.b.c.d")] => obj[a][b][c][d]
 * @param  {String} key 可以带深层级，例如 "a.b.c.d"
 * @return {[Key]}      返回值即可直接在想要解析的对象上使用
 */
export const dynamicKeys = key => {
	if (!key) throw new Error('Please provide a STRING')

	// 分割去空
	const arr = key.split('.').filter(s => s && s.trim())

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
 * @description             百分比转化为RGB颜色
 * @param  {Number} percent 百分比数字 不能超过100小于0
 * @return {String}         rgb字符串
 */
export const percentToRGB = percent => {
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

	return `rgb(${r}, ${g}, ${b})`
}


/**
 * @description              计算年龄
 * @param  {String} birthStr 字符串日期，类似于 2020-10-20
 * @return {Number}          年龄
 */
export const countAge = birthStr => {

	let returnAge
	const birthStrArr = birthStr.split('-')
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
