
'use strict'

// 防抖
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
// 场景：按钮提交，搜索联想
const debounce = (callback, delay = 500) => {
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

module.exports = debounce
