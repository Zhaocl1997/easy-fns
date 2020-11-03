
'use strict'

/**
 * @description toggle class
 * @param {HTMLElement} elm
 * @param {string} cls
 */
const toggleClass = (ele, cls, flag) => {
    flag ? addClass(ele, cls) : removeClass(ele, cls)
};

/**
 * @description Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
const hasClass = (ele, cls) => {
    if (!ele || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (ele.classList) {
        return ele.classList.contains(cls);
    } else {
        return (' ' + ele.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

/**
 * @description Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
const addClass = (ele, cls) => {
    if (!ele) return;
    let curClass = ele.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (ele.classList) {
            ele.classList.add(clsName);
        } else if (!hasClass(ele, clsName)) {
            curClass += ' ' + clsName;
        }
    }
    if (!ele.classList) {
        ele.className = curClass;
    }
}

/**
 * @description Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
const removeClass = (ele, cls) => {
    if (!ele || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + ele.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (ele.classList) {
            ele.classList.remove(clsName);
        } else if (hasClass(ele, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
    }
    if (!ele.classList) {
        ele.className = trim(curClass);
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
