/* 6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. */

const memoize = (fn) => {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);

        if (cache.has(key)) return cache.get(key);

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

const fastFactorial = memoize((n) => {
    if (n === 0) return 1;
    return n * fastFactorial(n - 1);
});

console.log(fastFactorial(5));
console.log(fastFactorial(10));
console.log(fastFactorial(15));
