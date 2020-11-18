
'use strict'

const guid = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0
		const v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
	})
}

const uuid = () => {
	let s = []
	const hexDigits = '0123456789abcdef'
	for (let i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
	}

	// bits 12-15 of the time_hi_and_version field to 0010
	s[14] = '4'

	// bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)

	s[8] = s[13] = s[18] = s[23] = '-'

	return s.join('')
}

const guid2 = () => {
	function S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
	}
	return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

// 指定长度和基数
const uuid2 = (len, radix) => {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
	radix = radix || chars.length

	const s = []

	if (len) {
		// Compact form
		for (let i = 0; i < len; i++) s[i] = chars[0 | Math.random() * radix]
	} else {
		// rfc4122, version 4 form
		let r

		// rfc4122 requires these characters
		s[8] = s[13] = s[18] = s[23] = '-'
		s[14] = '4'

		// Fill in random data.  At i==19 set the high bits of clock sequence as
		// per rfc4122, sec. 4.1.5
		for (let i = 0; i < 36; i++) {
			if (!s[i]) {
				r = 0 | Math.random() * 16
				s[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
			}
		}
	}

	return s.join('')
}


module.exports = {
	guid,
	guid2,
	uuid,
	uuid2
}
