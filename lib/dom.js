
'use strict'

/**
 * @description toggle class
 * @param {HTMLElement} elm
 * @param {string} cls
 */
const toggleClass = (ele, cls) => {
    if (hasClass(ele, cls)) {
        removeClass(ele, cls);
    } else {
        addClass(ele, cls);
    }
};

/**
 * @description Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
const hasClass = (ele, cls) => {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * @description Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
const addClass = (ele, cls) => {
    if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * @description Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
const removeClass = (ele, cls) => {
    if (hasClass(ele, cls)) {
        const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        ele.className = ele.className.replace(reg, ' ')
    }
}

/**
 * @description add event listener
 * @param {HTMLElement} elm 
 * @param {String} eventName
 * @param {Function} handler
 */
const on = (ele, eventName, handler) => {
    if (ele && eventName && handler) {
        ele.addEventListener(eventName, handler, false)
    }
}

/**
 * @description remove event listener
 * @param {HTMLElement} elm 
 * @param {string} eventName
 * @param {Function} handler
 */
const off = (ele, eventName, handler) => {
    if (ele && eventName && handler) {
        ele.removeEventListener(eventName, handler, false)
    }
}

module.exports = {
    toggleClass,
    hasClass,
    addClass,
    removeClass,
    on,
    off
}
