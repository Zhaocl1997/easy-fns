
'use strict'

/**  
 *  整个代码的逻辑十分清晰，一共只有三步：
 *  1.计算距离最近一次函数执行后经过的时间 elapsed，并清除之前设置的计时器。
 *  2.如果经过的时间大于设置的时间间隔 delay，那么立即执行函数，并更新最近一次*函数的执行时间。
 *  3.如果经过的时间小于设置的时间间隔 delay，那么通过 setTimeout 设置一个计数器，让函数在 delay - elapsed 时间后执行。
 */
// 节流
// 规定在一个单位时间内，只能触发一次函数
// 场景：拖拽，缩放，动画
const throttle = (callback, delay = 500) => {
	let timeoutID
	let lastExec = 0

	function wrapper() {
		const self = this
		const elapsed = Number(new Date()) - lastExec
		const args = arguments

		function exec() {
			lastExec = Number(new Date())
			callback.apply(self, args)
		}

		clearTimeout(timeoutID)

		if (elapsed > delay) {
			exec()
		} else {
			timeoutID = setTimeout(exec, delay - elapsed)
		}
	}

	return wrapper
}

module.exports = { throttle }


