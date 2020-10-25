
'use strict'

const { isDate } = require('./Type')

/**
 * format time, default to YYYY-MM-DD HH:mm:ss
 *
 * @param  {Date} time time to format
 * @param  {String} format pattern change to
 * @return {String} formatted time
 */
const format = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
    if (!time || !isDate(time)) throw new Error('Please provided a TIME')

    const t = new Date(time)
    const tf = (i) => { return (i < 10 ? '0' : '') + i }

    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (key) => {
        switch (key) {
            case 'YYYY':
                return tf(t.getFullYear())
            case 'MM':
                return tf(t.getMonth() + 1)
            case 'DD':
                return tf(t.getDate())
            case 'HH':
                return tf(t.getHours())
            case 'mm':
                return tf(t.getMinutes())
            case 'ss':
                return tf(t.getSeconds())
        }
    })
}

/**
 * get now formatted time
 *
 * @return {String} formatted now time
 */
const getNow = () => {
    return format(new Date())
}


module.exports = {
    format,
    getNow
}


