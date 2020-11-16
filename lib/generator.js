
'use strict'

const {
	PHONE_PREFIX,
	EMAIL_SUFFIX,
	ALL_STRING,
	ALL_SYMBOL,
	MAC_ADDRESS_TEMPLATE,
	MAC_ADDRESS_POOL,
	NUMBER_STRING
} = require('./constant')
const { getRandomElement, getRandomElements } = require('./array')

/**
 * @description         生成随机字符串
 * @param  {Number} len 位数，默认32位
 * @return {String}     随机字符串
 */
const genString = (len = 32) => getRandomElements(ALL_STRING.split(''), len).join('')

/**
 * @description         生成随机字符串
 * @param  {Number} len 位数，默认32位
 * @return {String}     随机字符串
 */
const genMAC = () => MAC_ADDRESS_TEMPLATE.replace(/X/g, () => MAC_ADDRESS_POOL.charAt(Math.floor(Math.random() * 16)))

/**
 * @description     生成随机手机号
 * @return {String} 随机手机号
 */
const genPhone = () => getRandomElement(PHONE_PREFIX) + getRandomElements(NUMBER_STRING.split(''), 8).join('')

/**
 * @description     生成随机邮箱
 * @return {String} 随机邮箱
 */
const genEmail = () => genString(8) + getRandomElement(EMAIL_SUFFIX).value

/**
 * @description     生成随机密码
 * @param  {Number} len 位数，默认16位
 * @return {String} 随机密码
 */
const genPassword = (len = 16) => getRandomElements((ALL_STRING + ALL_SYMBOL).split(''), len).join('')

module.exports = {
	genString,
	genMAC,
	genPhone,
	genEmail,
	genPassword
}