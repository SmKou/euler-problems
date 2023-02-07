const MAX_NUM = 4000000;
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const fibonacci = (n) => {
    return (GOLDEN_RATIO**n - (1 - GOLDEN_RATIO)**n) / Math.sqrt(5);
}

function loopAllN_evenFibonacciNum(max) {
    let i = 1, j = 1, f = 2;
    let sum = 0;
    while (i < max) {
        sum += f;
        i = f + j;
        j = f + i;
        f = i + j;
    }
    return sum;
}

function loopNinArr_evenFibonacciNum(max) {
    let arr = [1, 1];
    let n = arr[arr.length - 1] + arr[arr.length - 2];
    while (n < max) {
        arr.push(n);
        n = arr[arr.length - 1] + arr[arr.length - 2];
    }
    let sum = 0;
    for (let i = 2; i < arr.length; i += 3) {
        sum += arr[i];
    }
    return sum;
}

function loopEvery3_evenFibonacciNum(max) {
    let sum = 0;
    let n = 3;
    let f = 2;
    do {
        sum += f;
        n += 3;
        f = Math.round(fibonacci(n));
    } while (f < max)
    return sum;
}

const SOLUTIONS = [
    loopAllN_evenFibonacciNum,
    loopNinArr_evenFibonacciNum,
    loopEvery3_evenFibonacciNum
];