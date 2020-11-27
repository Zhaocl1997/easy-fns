
'use strict'

export const regex = {
	url: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:~+#-]*[\w@?^=%&~+#-])?$/,

	phone: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,

	email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

	macAddress: /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i,

	id: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,

	number: /^\d{1,}$/,

	letter: /^[a-zA-Z]+$/,

	ip4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,

	ip6: /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i,

	external: /^(https?:|mailto:|tel:)/,

	rgb: /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/,

	browser: {
		IE: /(?:msie|trident.*rv).([\d.]+)/,
		Edge: /edge.([\d.]+)/,
		Chrome: /chrome.([\d.]+)/,
		Firefox: /firefox.([\d.]+)/,
		Opera: /opera.([\d.]+)/,
		Safari: /(?:safari|version).([\d.]+)/,
	},

	uuid: /\w{8}(-\w{4}){3}-\w{12}/

}

export const isUrl = val => regex.url.test(val)
export const isPhone = val => regex.phone.test(val)
export const isEmail = val => regex.email.test(val)
export const isMacAddress = val => regex.macAddress.test(val)
export const isId = val => regex.id.test(val)
export const isNumber = val => regex.number.test(val)
export const isLetter = val => regex.letter.test(val)
export const isExternal = val => regex.external.test(val)
export const isRGB = val => regex.rgb.test(val)
export const isUUID = val => regex.uuid.test(val)




