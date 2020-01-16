exports = module.exports = (function () {
    'use strict'

    return function debounce(delay, callback) {
        let timeoutID

        function wrapper() {
            const self = this
            const args = arguments

            function exec() {
                callback.apply(self, args)
            }

            clearTimeout(timeoutID)

            timeoutID = setTimeout(exec, delay)
        }

        return wrapper
    }
})()