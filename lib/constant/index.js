
'use strict'

/* 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1 */
const ALL_STRING = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'

/* 默认去掉敏感符号 */
const ALL_SYMBOL = '~!@#$%&_-+'

/* 数字字符串 */
const NUMBER_STRING = '0123456789'

/* macAddress 模板和字符串池 */
const MAC_ADDRESS_TEMPLATE = 'XX:XX:XX:XX:XX:XX'
const MAC_ADDRESS_POOL = '0123456789ABCDEF'

/* console.log 类型 */
const THEME_TYPE = {
	PRIMARY: 'primary',
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
	INFO: 'info'
}

const PHONE_PREFIX = ['131', '133', '138', '139', '157', '175', '184', '186']

const EMAIL_SUFFIX = [
	{ value: '@chinaunicom.com' },
	{ value: '@qq.com' },
	{ value: '@163.com' },
	{ value: '@gmail.com' },
	{ value: '@126.com' },
	{ value: '@foxmail.com' },
	{ value: '@sina.com' },
	{ value: '@sohu.com' },
	{ value: '@sogou.com' }
]

module.exports = {
	ALL_STRING,
	ALL_SYMBOL,

	NUMBER_STRING,

	MAC_ADDRESS_TEMPLATE,
	MAC_ADDRESS_POOL,

	THEME_TYPE,
	PHONE_PREFIX,
	EMAIL_SUFFIX
}