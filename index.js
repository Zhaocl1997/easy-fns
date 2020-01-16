exports = module.exports = (function () {
    'use strict'

    return {
        storage: require('./lib/storage'),
        time: require('./lib/time'),
        utils: require('./lib/utils'),
        throttle: require('./lib/throttle'),
        debounce: require('./lib/debounce'),
        type: require('./lib/typeof'),
        regex: require('./lib/regex')
    }
})()