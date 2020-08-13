exports = module.exports = (function () {
    'use strict'

    // 防抖
    // 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
    // 场景：按钮提交，搜索联想
    function debounce(callback, delay) {
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

    return debounce
})()
