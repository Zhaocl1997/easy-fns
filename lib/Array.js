
'use strict'

const { getRandomInt } = require('./math')

// 判断数据是否含有某元素(简单版)
const hasValue = {
	hv1(arr, key) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === key) {
				return true
			}
		}
		return false
	},

	hv2(arr, key) {
		return arr.indexOf(key) !== -1
	},

	hv3(arr, key) {
		return arr.includes(key)
	},

	hv4(arr, key) {
		for (const v of arr) {
			if (v === key) {
				return true
			}
		}
		return false
	}
}

// 数组去重(简单版)
const unique = {
	u1(arr) {
		console.log('indexOf去重')
		let temp = []
		for (let i = 0; i < arr.length; i++) {
			if (temp.indexOf(arr[i]) == -1) {
				temp.push(arr[i])
			}
		}
		return temp
	},

	u2(arr) {
		let temp = {}, r = [], len = arr.length, val, type
		for (let i = 0; i < len; i++) {
			val = arr[i]
			type = typeof val
			if (!temp[val]) {
				temp[val] = [type]
				r.push(val)
			} else if (temp[val].indexOf(type) < 0) {
				temp[val].push(type)
				r.push(val)
			}
		}
		return r
	},

	u3(arr) {
		console.log('sort去重')
		arr.sort()
		let temp = [arr[0]]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] !== arr[i - 1]) {
				temp.push(arr[i])
			}
		}
		return temp
	},

	u4(arr) {
		let temp = []
		for (let i = 0; i < arr.length; i++) {
			// 如果当前数组的第i项在当前数组中第一次出现的位置是i，才存入数组；否则代表是重复的
			if (arr.indexOf(arr[i]) == i) {
				temp.push(arr[i])
			}
		}
		return temp
	},

	u5(arr) {
		console.log('两次for + splice')
		for (let i = 0; i < arr.length; i++) {
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[i] === arr[j]) {
					arr.splice(j, 1)
					j--
				}
			}
		}
		return arr
	},

	u6(arr) {
		console.log('new Set')
		return [...new Set(arr)]
	},

	u7(arr) {
		console.log('filter + hasOwnProperty')
		let obj = {}
		return arr.filter(item => {
			return Object.prototype.hasOwnProperty.call(obj, typeof item + item) ? false : (obj[typeof item + item] = true)
		})
	},

	u8(arr) {
		console.log('filter + indexOf')
		return arr.filter((item, index) => {
			return arr.indexOf(item, 0) === index
		})
	},

	u9(arr) {
		console.log('reduce + includes')
		return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], [])
	},

	u10(arr) {
		console.log('new Map')
		let map = new Map()
		let array = new Array() // 数组用于返回结果
		for (let i = 0; i < arr.length; i++) {
			if (map.has(arr[i])) {  // 如果有该key值
				map.set(arr[i], true)
			} else {
				map.set(arr[i], false)   // 如果没有该key值
				array.push(arr[i])
			}
		}
		return array
	},

	u11(arr) {
		console.log('includes')
		let temp = []
		for (let i = 0; i < arr.length; i++) {
			if (!temp.includes(arr[i])) {
				temp.push(arr[i])
			}
		}
		return temp
	}
}

// 数组打乱
const random = {
	// 随机打乱数组
	random1(arr) {
		return arr.sort(() => Math.random() - 0.5)
	},

	random2(arr) {
		for (let i = 0; i < arr.length; i++) {
			let rdm = Math.floor(Math.random() * arr.length)
			arr.push(arr[rdm])
			arr.splice(rdm, 1)
		}
		return arr
	}
}

// 数组展开去重排序(简单)
function flatUniqSort(arr) {
	return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b)
}

// 返回数组最后一项
function lastOne(arr) {
	return arr.slice(-1)[0]
}

// 返回删除了最后一项的数组
function lastDel(arr) {
	return arr.slice(0, -1)
}

// 数组元素求和
function add(...args) {
	return args.reduce((prev, cur) => prev + cur)
}

// 统计元素出现次数
function calTimes(arr) {
	return arr.reduce((prev, cur) => {
		if (!prev[cur]) {
			prev[cur] = 1
		} else {
			prev[cur] += 1
		}
		return prev
	}, {})
}

// 返回两个数组交集
function cross(a, b) {
	return [...new Set(a)].filter(v => [...new Set(b)].includes(v)).sort()
}




/**
 * @description        获取数组随意一项
 * @param  {Array} arr 目标数组
 * @return {Any}       目标数组的一项
 */
const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)]


/**
 * @description           获取数组随机多项
 * @param  {Array} arr    目标数组
 * @param  {Number} count 想要获取的项目数量，默认目标数组长度
 * @return {Array}        目标数组的多项
 */
const getRandomElements = (arr, count) => {
	count = count || getRandomInt(1, arr.length - 1)
	let shuffled = arr.slice(0)
	let i = arr.length
	let min = i - count
	let temp
	let index

	while (min < i--) {
		index = Math.floor((i + 1) * Math.random())
		temp = shuffled[index]
		shuffled[index] = shuffled[i]
		shuffled[i] = temp
	}

	return shuffled.slice(min)
}

/**
 * @description    柯里化concat
 * @return {Array} concat结束后的数组
 */
const curryConcat = function () {
	// 第一次执行时，定义一个数组专门用来存储所有的参数
	const _args = Array.prototype.slice.call(arguments)

	// 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
	const _concat = function () {
		_args.push(...arguments)
		return _concat
	}

	// 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
	_concat.toString = function () {
		return _args.reduce(function (a, b) {
			return a.concat(b)
		})
	}
	return _concat
}

/**
 * @description                对象数组去重
 * @param {Array} arr          目标数组
 * @param {String} uniqueField 去重根据字段key值，默认id
 * @return {Array}
 */
const objectArrayUnique = (arr, uniqueField = 'id') => {
	let flag = {}

	arr = arr.reduce((prev, cur) => {
		flag[cur[uniqueField]]
			? ''
			: (flag[cur[uniqueField]] = true && prev.push(cur))
		return prev
	}, [])

	return arr
}

module.exports = {
	hasValue,
	unique,
	random,

	lastOne,
	lastDel,
	add,
	calTimes,
	cross,
	flatUniqSort,

	getRandomElement,
	getRandomElements,
	curryConcat,
	objectArrayUnique
}


