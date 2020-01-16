exports = module.exports = (function () {
    'use strict'

    const { isString, isObject, isArray } = require('./typeof')

    return {
        /**
         * Check the strength of a string, used as password strength check
         *
         * @param  {String} str String to check strength
         * @return {Number} one in [1,2,3,4] for strength
         */
        checkStrStrong(str) {
            if (!str || !isString(str)) throw new Error('Please provided a STRING')

            let modes = 0

            if (str.length < 1) return modes
            if (/\d/.test(str)) modes++ // number
            if (/[a-z]/.test(str)) modes++ // lower
            if (/[A-Z]/.test(str)) modes++ // upper  
            if (/\W/.test(str)) modes++ // special

            switch (modes) {
                case 1:
                    return 1
                case 2:
                    return 2
                case 3:
                case 4:
                    return str.length < 12 ? 3 : 4
            }
            return modes
        },
        /**
         * Add timestamp after url, used as same url request like avatar
         *
         * @param  {String} url Url to add timestamp
         * @return {String} new url added with timestamp
         */
        addUrlTimeStamp(url) {
            if (!url) throw new Error('Url must be provided!')

            const timestamp = new Date().valueOf()
            if (url.indexOf("?") > -1) {
                url = url + "&timestamp=" + timestamp
            } else {
                url = url + "?timestamp=" + timestamp
            }
            return url
        },
        /**
         * Check the val is empty
         *
         * @param  {String} val val to check is empty
         * @return {Boolean} true for empty, other false
         */
        isEmpty(val) {
            // null or undefined
            if (val === null || val === undefined) return true

            if (typeof val === 'boolean') return false;

            if (typeof val === 'number') return !val;

            if (val instanceof Error) return val.message === '';

            switch (Object.prototype.toString.call(val)) {
                // String or Array
                case '[object String]':
                case '[object Array]':
                    return !val.length;

                // Map or Set or File
                case '[object File]':
                case '[object Map]':
                case '[object Set]': {
                    return !val.size;
                }
                // Plain Object
                case '[object Object]': {
                    return !Object.keys(val).length;
                }
            }
            return false;
        },
        /**
         * Check two val is equal
         *
         * @param  {String} a 
         * @param  {String} b
         * @return {Boolean} true for equal, other false
         */
        isEqual(a, b) {
            if (a === b) return true

            // object
            if (isObject(a) && isObject(b) &&
                Object.keys(a).length === Object.keys(b).length) {
                for (const key in a) {
                    if (a.hasOwnProperty(key)) {
                        if (!this.isEqual(a[key], b[key]))
                            // key different
                            return false
                    }
                }
            } else
                // array
                if (isArray(a) && isArray(a) && a.length === b.length) {
                    for (let i = 0, length = a.length; i < length; i++) {
                        if (!this.isEqual(a[i], b[i]))
                            // item different
                            return false
                    }
                } else {
                    // other false
                    return false
                }
            return true
        }
    }
})()