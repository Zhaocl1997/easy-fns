module.exports = {
    arr: require('./lib/array'),
    constant: require('./lib/constant'),
    copy: require('./lib/copy'),
    ...require('./lib/debounce'),
    ...require('./lib/fibonacci'),
    log: require('./lib/log'),
    math: require('./lib/math'),
    obj: require('./lib/object'),
    regex: require('./lib/regex'),
    // ...require('./lib/storage'),
    ...require('./lib/throttle'),
    time: require('./lib/time'),
    tree: require('./lib/tree'),
    type: require('./lib/type'),
    url: require('./lib/url'),
    utils: require('./lib/utils'),
    uuid: require('./lib/uuid')
}
