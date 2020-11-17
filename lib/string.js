
'use strict'

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

module.exports = {
	line2Camel,
	camel2Line,
	trimSpaceAside,
	checkStrStrong
}