
'use strict'

const { isArray, isFunction, isUndefined } = require('./Type')

// 判断数据是否含有某元素(简单版)
const hasValue = {
    hv1(arr, key) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) {
                return true
            }
        }
        return false
    },

    hv2(arr, key) {
        if (arr.indexOf(key) !== -1) {
            return true
        }
        return false
    },

    hv3(arr, key) {
        if (arr.includes(key)) {
            return true
        }
        return false
    },

    hv4(arr, key) {
        for (const v of arr) {
            if (v === key) {
                return true
            }
        }
        return false
    }
}

// 数组去重(简单版)
const unique = {
    u1(arr) {
        console.log('indexOf去重')
        let temp = []
        for (let i = 0; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i])
            }
        }
        return temp
    },

    u2(arr) {
        let temp = {}, r = [], len = arr.length, val, type;
        for (let i = 0; i < len; i++) {
            val = arr[i];
            type = typeof val;
            if (!temp[val]) {
                temp[val] = [type];
                r.push(val);
            } else if (temp[val].indexOf(type) < 0) {
                temp[val].push(type);
                r.push(val);
            }
        }
        return r;
    },

    u3(arr) {
        console.log('sort去重')
        arr.sort()
        let temp = [arr[0]]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1]) {
                temp.push(arr[i])
            }
        }
        return temp
    },

    u4(arr) {
        let temp = []
        for (let i = 0; i < arr.length; i++) {
            // 如果当前数组的第i项在当前数组中第一次出现的位置是i，才存入数组；否则代表是重复的
            if (arr.indexOf(arr[i]) == i) {
                temp.push(arr[i])
            }
        }
        return temp
    },

    u5(arr) {
        console.log('两次for + splice')
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1)
                    j--
                }
            }
        }
        return arr
    },

    u6(arr) {
        console.log('new Set')
        return [...new Set(arr)]
    },

    u7(arr) {
        console.log('filter + hasOwnProperty')
        let obj = {};
        return arr.filter(item => {
            return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
        })
    },

    u8(arr) {
        console.log('filter + indexOf')
        return arr.filter((item, index) => {
            return arr.indexOf(item, 0) === index;
        });
    },

    u9(arr) {
        console.log('reduce + includes')
        return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
    },

    u10(arr) {
        console.log('new Map')
        let map = new Map()
        let array = new Array() // 数组用于返回结果
        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {  // 如果有该key值
                map.set(arr[i], true)
            } else {
                map.set(arr[i], false)   // 如果没有该key值
                array.push(arr[i])
            }
        }
        return array
    },

    u11(arr) {
        console.log('includes')
        let temp = []
        for (let i = 0; i < arr.length; i++) {
            if (!temp.includes(arr[i])) {
                temp.push(arr[i])
            }
        }
        return temp
    }
}

// 数组打乱
const random = {
    // 随机打乱数组
    random1(arr) {
        return arr.sort(() => Math.random() - 0.5)
    },

    random2(arr) {
        for (let i = 0; i < arr.length; i++) {
            let rdm = Math.floor(Math.random() * arr.length)
            arr.push(arr[rdm])
            arr.splice(rdm, 1)
        }
        return arr
    }
}

// 数组展开去重排序(简单)
function flatUniqSort(arr) {
    return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b)
}

// 数组随机元素
function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// 返回数组最后一项
function lastOne(arr) {
    return arr.slice(-1)[0]
}

// 返回删除了最后一项的数组
function lastDel(arr) {
    return arr.slice(0, -1)
}

// 数组元素求和
function add(...args) {
    return args.reduce((prev, cur) => prev + cur)
}

// 统计元素出现次数
function calTimes(arr) {
    return arr.reduce((prev, cur) => {
        if (!prev[cur]) {
            prev[cur] = 1
        } else {
            prev[cur] += 1
        }
        return prev
    }, {})
}

// 返回两个数组交集
function cross(a, b) {
    return [...new Set(a)].filter(v => [...new Set(b)].includes(v)).sort()
}

// selfMap
function selfMap(arr, mapCB) {
    // 验证
    if (!isArray(arr) || !arr.length || !isFunction(mapCB)) {
        return []
    } else {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            // 将 mapCB 返回的结果 push 到 result 数组中
            result.push(mapCB(arr[i], i, arr))
        }
        return result
    }
}

// selfFilter
function selfFilter(arr, filterCB) {
    // 验证
    if (!isArray(arr) || !arr.length || !isFunction(filterCB)) {
        return []
    } else {
        let result = []
        for (let i = 0, len = arr.length; i < len; i++) {
            // 检查 filterCB 的返回值是否是真值
            if (filterCB(arr[i], i, arr)) {
                result.push(arr[i])
            }
        }
        return result
    }
}

// selfReduce
function selfReduce(arr, reduceCB, InitVal) {
    // 验证
    if (!isArray(arr) || !arr.length || !isFunction(reduceCB)) {
        return []
    } else {
        // 如果没有将InitVal传递给该函数，我们将使用第一个数组项作为InitVal
        let hasInitVal = !isUndefined(InitVal)
        let value = hasInitVal ? InitVal : arr[0]

        // 如果有传递 InitVal，则索引从 1 开始，否则从 0 开始
        for (let i = hasInitVal ? 0 : 1; i < arr.length; i++) {
            value = reduceCB(value, arr[i], i, arr)
        }
        return value
    }
}

module.exports = {
    hasValue,
    unique,
    random,

    sample,
    lastOne,
    lastDel,
    add,
    calTimes,
    cross,
    flatUniqSort,

    selfMap,
    selfFilter,
    selfReduce
}


