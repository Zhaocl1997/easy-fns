

const fibonacci = n => {
    if (n === 0 || n < 0) return 0
    const arr = []

    function* fib(x) {
        let a = 1
        let b = 1
        let n = 0
        while (n <= x) {
            yield a; // 这个分号一定要有
            [a, b] = [b, a + b]
            n++
        }
    }

    const gen = fib(n)

    function next() {
        const res = gen.next()
        if (res.done) {
            return arr
        } else {
            arr.push(res.value)
            next()
        }
    }

    next()

    return arr
}

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(45));



