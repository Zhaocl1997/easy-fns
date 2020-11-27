

'use strict'

/**
 * @description         获取一个区间内的随机整数
 * @param  {Number} min 最小整数值
 * @param  {Number} max 最大整数值
 * @return {Number}     
 */
export const getRandomInt = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @description       生成斐波那契数组
 * @param  {String} n 次数
 * @return {Array}    斐波那契数组
 */
export const Fibonacci = n => {
	if (n === 0 || n < 0) return 0
	const arr = []

	function* fib(x) {
		let a = 1
		let b = 1
		let n = 0
		while (n <= x) {
			yield a; // 这个分号一定要有
			[a, b] = [b, a + b]
			n++
		}
	}

	const gen = fib(n)

	function next() {
		const res = gen.next()
		if (res.done) {
			return arr
		} else {
			arr.push(res.value)
			next()
		}
	}

	next()

	return arr
}

