
'use strict'

/**
 * @description         给url添加时间戳参数
 * @param  {String} url 目标地址
 * @return {String}     
 */
export const addTimeStamp = url => {
	const timestamp = new Date().valueOf()
	if (url.indexOf('?') > -1) {
		url = url + '&timestamp=' + timestamp
	} else {
		url = url + '?timestamp=' + timestamp
	}
	return url
}

/**
 * @description           给url添加参数
 * @param  {String} url   目标地址
 * @param  {String} key   参数key值
 * @param  {String} value 参数value值
 * @return {String}       
 */
export const addParams = (url, key, value) => {
	if (url.indexOf('?') > -1) {
		url = url + '&' + key + '=' + value
	} else {
		url = url + '?' + key + '=' + value
	}
	return url
}

/**
 * @description         提取url参数
 * @param  {String} url 目标地址
 * @return {Object}     参数对象
 */
export const parseParams = url => {
	const paramsStr = /.+\?(.+)$/.exec(url)[1] // 将 ? 后面的字符串取出来
	const paramsArr = paramsStr.split('&') // 将字符串以 & 分割后存到数组中
	let paramsObj = {}

	// 将 params 存到对象中
	paramsArr.forEach(param => {
		if (/=/.test(param)) { // 处理有 value 的参数
			let [key, val] = param.split('=') // 分割 key 和 value
			val = decodeURIComponent(val) // 解码
			val = /^\d+$/.test(val) ? parseFloat(val) : val // 判断是否转为数字

			if (Object.prototype.hasOwnProperty.call(paramsObj, key)) { // 如果对象有 key，则添加一个值
				paramsObj[key] = [].concat(paramsObj[key], val)
			} else { // 如果对象没有这个 key，创建 key 并设置值
				paramsObj[key] = val
			}
		} else { // 处理没有 value 的参数
			paramsObj[param] = true
		}
	})

	return paramsObj
}
