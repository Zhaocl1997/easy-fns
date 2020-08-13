exports = module.exports = (function () {

    'use strict'

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return {
        getRandomInt: getRandomInt
    }

})()

