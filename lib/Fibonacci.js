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

const gen = fib(10)

function next() {
    let res = gen.next()
    console.log(res)
    if (res.done) {
        console.log('done')
    } else {
        setTimeout(next, 300)
    }
}

next()
