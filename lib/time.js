
'use strict'


/**
 * @description            格式化时间
 * @param  {Date} str     
 * @param  {String} format 默认 YYYY-MM-DD HH:mm:ss
 * @return {String}        
 */
const formatTime = (str, format = 'YYYY-MM-DD HH:mm:ss') => {
	if (!str) throw new Error('Please provide a time!')

	const t = new Date(str)
	const tf = i => (i < 10 ? '0' : '') + i

	return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (key) => {
		switch (key) {
			case 'YYYY':
				return tf(t.getFullYear())
			case 'MM':
				return tf(t.getMonth() + 1)
			case 'DD':
				return tf(t.getDate())
			case 'HH':
				return tf(t.getHours())
			case 'mm':
				return tf(t.getMinutes())
			case 'ss':
				return tf(t.getSeconds())
		}
	})
}

/**
 * @description            获取当前格式化的时间
 * @param  {String} format 默认 YYYY-MM-DD HH:mm:ss
 * @return {String}        
 */
const getNow = (format = 'YYYY-MM-DD HH:mm:ss') => {
	return formatTime(new Date(), format)
}


/**
 * @description         格式化时间为多久前
 * @param  {String} str 
 * @return {String}       
 */
const formatAgo = str => {
	if (!str) throw new Error('Please provide a time!')

	const date = new Date(Number(str))
	const time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）

	if (time < 0) {
		return ''
	} else if (time / 1000 < 30) {
		return '刚刚'
	} else if (time / 1000 < 60) {
		return parseInt(String(time / 1000)) + '秒前'
	} else if (time / 60000 < 60) {
		return parseInt(String(time / 60000)) + '分钟前'
	} else if (time / 3600000 < 24) {
		return parseInt(String(time / 3600000)) + '小时前'
	} else if (time / 86400000 < 31) {
		return parseInt(String(time / 86400000)) + '天前'
	} else if (time / 2592000000 < 12) {
		return parseInt(String(time / 2592000000)) + '月前'
	} else {
		return parseInt(String(time / 31536000000)) + '年前'
	}
}


module.exports = {
	formatTime,
	getNow,
	formatAgo
}


