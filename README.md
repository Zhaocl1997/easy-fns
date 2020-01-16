# easy functions

Some basic-daily-used functions

![](https://img.shields.io/badge/language-javascript-green.svg) ![](https://img.shields.io/bundlephobia/min/easy-fns) ![](https://img.shields.io/npm/dw/easy-fns) ![](https://img.shields.io/npm/l/easy-fns) ![](https://img.shields.io/npm/v/easy-fns) ![](https://img.shields.io/github/followers/zhaocl1997?style=social)

- storage
    - local/session
        - set(key, val)
        ```
        set('user', obj)
        ```

        - get(key) 
        ```
        get('user') => obj
        ```

        - has(key) 
        ```
        has('user') => true
        has('other') => false
        ```

        - remove(key) 
        ```
        remove('user') => remove specified in localStorage
        ```

        - clear(key) 
        ```
        clear() => clear everything in localStorage
        ```

        - getAll() 
        ```
        getAll() => get everything in localStorage
        ```
    - cookie
        - set(name, val, exdays)
        ```
        set('pass', str) => exdays default 7
        ```

        - get(name)
        ```
        get('pass') => { name: str }
        ```

        - remove(name)
        ```
        remove('pass') => remove pass
        ```

        - clear()
        ```
        clear() => clear things set in cookie
        ```
        
        - getAll()
        ```
        getAll() => get things set in cookie
        ```

- time
    - format(time, format)
    ```
    format(new Date()) => format default YYYY-MM-DD HH:mm:ss
    ```

    - now()
    ```
    now() => 2020-1-1 12:00:00
    ```

- utils
    - checkStrStrong(str)
    ```
    checkStrStrong('123') => 1
    checkStrStrong('abc') => 1
    checkStrStrong('ABC') => 1
    checkStrStrong('123abc') => 2
    checkStrStrong('123ABC') => 2
    checkStrStrong('123abcABC') => 3
    checkStrStrong('123abcABC+?@') => 4
    ```

    - addUrlTimeStamp(url)
    ```
    addUrlTimeStamp('https://www.baidu.com')
     => https://www.baidu.com?timestamp=1579155071720
    ```

    - isEmpty(val)
    ```
    isEmpty(null) => true
    isEmpty(undefined) => true
    isEmpty('') => true
    isEmpty({}) => true
    isEmpty([]) => true
    ```

    - isEqual(a, b)
    ```
    isEqual(
    {name:'Jack',age:23,hobby:{first:'swim',second:'jog'}},
    {name:'Jack',age:23,hobby:{first:'swim',second:'jog'}}
    ) => true
    ```

- throttle(delay, callback)
    ```
    function foo() { console.log('foo..'); }
    const fooWrapper = throttle(200, foo);
 
    for (let i = 1; i < 10; i++) {
       setTimeout(fooWrapper, i * 30);
    }
    => foo..
       foo..
       foo..
    ```

- debounce(delay, callback)
    ```
    function bar() { console.log('bar..'); }
    const barWrapper = debounce(200, bar);
 
    for (let i = 1; i < 10; i++) {
        setTimeout(barWrapper, i * 30);
    }
    => bar..
    ```


- type
    - isNull(val)
    ```
    isNull(null) => true
    ```

    - isUndefined(val)
    ```
    isUndefined(undefined) => true
    ```

    - isString(val)
    ```
    isString('123') => true
    ```

    - isNumber(val)
    ```
    isNumber(123) => true
    ```

    - isBoolean(val)
    ```
    isBoolean(true) => true
    ```

    - isObject(val)
    ```
    isObject({}) => true
    ```

    - isArray(val)
    ```
    isArray([]) => true
    ```

    - isDate(val)
    ```
    isDate(new Date()) => true
    ```

    - isFunction(val)
    ```
    isFunction(function() {}) => true
    ```

    - isRegExp(val)
    ```
    isRegExp(/^\d{1,}$/) => true
    ```

    - isJSON(val)
    ```
    isJSON({"foo":"bar"}) => true
    ```

- regex
    - isUrl(val)
    ```
    isUrl('https://www.baidu.com') => true
    ```

    - isPhone(val)
    ```
    isPhone('15845453636') => true
    ```

    - isEmail(val)
    ```
    isEmail('testemail@qq.com') => true
    ```

    - isMac(val)
    ```
    isMac('25:C9:CF:D9:77:69') => true
    ```

    - isId(val)
    ```
    isId(Chinese Identity Number) => true
    ```
    
    - isNumber(val)
    ```
    isNumber(3123) => true
    ```

    - isLetter(val)
    ```
    isLetter('foobar') => true
    ```