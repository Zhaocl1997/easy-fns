
'use strict'

const {
	addTimeStamp,
	addParams,
	parseParams
} = require('../lib/url')

describe('url utils', () => {

	test('add a timestamp in url', () => {
		const target = 'https://www.zhaocl.net'

		expect(addTimeStamp(target).includes('?')).toBeTruthy()
	})

	test('add params in url', () => {
		const target = 'https://www.zhaocl.net'
		const result = 'https://www.zhaocl.net?name=jack'

		expect(addParams(target, 'name', 'jack')).toBe(result)
	})

	test('trim the space aside', () => {
		const target = 'http://127.0.0.1:7300/dev-api/system/user/list?nickName=&pageNum=1&pageSize=10'
		const result = {
			nickName: '',
			pageNum: 1,
			pageSize: 10
		}

		expect(parseParams(target)).toEqual(result)
	})
})
