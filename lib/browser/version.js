
'use strict'

const { isServer } = require('../type')
const { regex } = require('../regex')

const getTypeVersion = () => {
	if (isServer()) return

	const userAgent = navigator.userAgent.toLowerCase()

	/* const browserTypes = {
		IE: /(?:msie|trident.*rv).([\d.]+)/,
		Edge: /edge.([\d.]+)/,
		Chrome: /chrome.([\d.]+)/,
		Firefox: /firefox.([\d.]+)/,
		Opera: /opera.([\d.]+)/,
		Safari: /(?:safari|version).([\d.]+)/,
	} */

	/** browser type */
	let type
	/** browser version */
	let version

	for (type in regex.browser) {
		if ((version = regex.browser[type].exec(userAgent))) {
			version = version[1]
			break
		}
	}

	if (version) {
		if (type === 'IE') {
			try {
				document.execCommand('BackgroundImageCache', false, true)
			} catch (error) {
				console.log(error)
			}
		}
	} else {
		type = version = null
	}

	return { type, version }
}

module.exports = { getTypeVersion }