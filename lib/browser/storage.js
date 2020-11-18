exports = module.exports = (function (window) {
	'use strict'

	if (typeof window.localStorage === 'undefined' ||
		typeof window.sessionStorage === 'undefined' ||
		typeof window.document.cookie === 'undefined') return

	const cookie = {
		set(name, val, exdays = 7) {
			/* set expire time */
			const exdate = new Date()
			exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)

			/* set cookie */
			window.document.cookie =
				name + '=' + escape(val) + ';path=/;expires=' + exdate.toGMTString()
		},
		get(name) {
			let result = {}
			if (window.document.cookie.length > 0) {
				/* split */
				const arr = window.document.cookie.split('; ')
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].includes(name)) {
						/* split again */
						const key = arr[i].split('=')[0]
						const val = arr[i].split('=')[1]
						result[key] = val
					}
				}
			}
			return result
		},
		getAll() {
			let result = {}
			if (window.document.cookie.length > 0) {
				/* split */
				const arr = window.document.cookie.split('; ')
				for (let i = 0; i < arr.length; i++) {
					/* split again */
					const key = arr[i].split('=')[0]
					const val = arr[i].split('=')[1]
					result[key] = val
				}
			}
			return result
		},
		remove(name) {
			this.set(name, '', -1)
		},
		clear() {
			const keys = Object.keys(this.getAll())
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i]
				this.remove(key)
			}
		}
	}

	let store = {
		local: { storage: window.localStorage },
		session: { storage: window.sessionStorage },
		cookie
	}

	/* 序列化 */
	function serialize(val) {
		return JSON.stringify(val)
	}

	/* 反序列化 */
	function deserialize(val) {
		if (typeof val !== 'string') {
			return undefined
		}
		return JSON.parse(val)
	}

	const api = {
		set(key, val) {
			this.storage.setItem(key, serialize(val))
		},
		get(key) {
			let val = deserialize(this.storage.getItem(key))
			if (val === undefined) {
				return undefined
			} else {
				return val
			}
		},
		has(key) {
			return this.get(key) !== undefined
		},
		remove(key) {
			this.storage.removeItem(key)
		},
		clear() {
			this.storage.clear()
		},
		getAll() {
			let ret = {}
			this.forEach((key, val) => {
				ret[key] = val
			})
			return ret
		},
		forEach(callback) {
			for (let i = 0; i < this.storage.length; i++) {
				let key = this.storage.key(i)
				callback(key, this.get(key))
			}
		}
	}

	/* 拼接 */
	Object.assign(store.local.storage, api)
	Object.assign(store.session.storage, api)

	return store
})(typeof window == 'undefined' ? global : window)