
'use strict'

const { isString } = require('./type')
/**
 * @description          划线转换驼峰
 * @param  {String} str  目标字符串
 * @param  {String} type 转换格式，默认-
 * @return {String}      
 */
const line2Camel = (str, type = '-') => str.replace(eval('/\\' + type + '(\\w)/g'), (all, letter) => letter.toUpperCase())

/**
 * @description          驼峰转换下划线
 * @param  {String} str  目标字符串
 * @param  {String} type 转换格式，默认-
 * @return {String}      
 */
const camel2Line = (str, type = '-') => str.replace(/([A-Z])/g, `${type}$1`).toLowerCase()

/**
 * @description         去除字符串两边的空格
 * @param  {String} str 目标字符串
 * @return {String}     
 */
const trimSpaceAside = str => (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')

/**
 * @description         检查字符串强度，适用于密码检查
 * @param  {String} str 目标字符串
 * @return {Number}     1-4其中一个，4为最强
 */
const checkStrStrong = str => {
	if (!str || !isString(str)) throw new Error('Please provide a string')

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
 * @author Zhaocl1997   (https://github.com/Zhaocl1997)
 * @description         清除想要强制清除的字符串，一般指一些敏感的特殊字符
 * @example             clearIllegalChars("a|b/c", ["|", "/"]) => "abc"
 * @param  {String} str 目标字符串
 * @param  {Array} arr  不想要的字符串数组
 * @return {String}     清除完的字符串
 */
const clearIllegalChars = (str, arr = ['<', '>']) => {
	if (!str || !isString(str)) throw new Error('Please provided a string!')

	let newStr = ''
	for (let i = 0; i < arr.length; i++) {
		if (str.indexOf(arr[i]) !== -1) {
			let regexp = '/\\' + arr[i] + '/g'
			str = str.replace(eval(regexp), '')
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
 * @param  {String} type ["number", "letter", "chinese"] 目前只支持这三个的其中一种
 * @return {String}      清除完的字符串
 */
const clearUnexpectedChars = (str, type = 'number') => {
	if (!str || !isString(str)) throw new Error('Please provided a string!')

	const allowedInputType = ['number', 'letter', 'chinese']

	if (!allowedInputType.includes(type)) {
		return str
	}

	const reverseRegex = v => '/' + v + '/g'
	const regexTemplate = {
		number: '[^0-9-.]',
		letter: '[^A-Za-z]',
		chinese: '[^\u4e00-\u9fa5]',
	}

	return str.replace(eval(reverseRegex(regexTemplate[type])), '')
}

module.exports = {
	line2Camel,
	camel2Line,
	trimSpaceAside,
	checkStrStrong,
	clearIllegalChars,
	clearUnexpectedChars
}