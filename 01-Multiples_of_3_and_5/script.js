const MAX_NUM = 1000;
const UPPERBOUND = (n, max) => {
    let bound = Math.floor(max / n);
    if (max % n == 0) { bound -= 1 }
    return bound;
}

function loopAllN_Mult3n5(max) {
    let sum = 0;
    let n = 1;
    do {
        if (n % 3 == 0 || n % 5 == 0) {
            sum += n;
        }
        n++;
    } while (n < max)
    return sum;
}

function loopNMult_Mult3n5(max) {
    let sum = 0;
    let n = 1;
    let s = n * 3;
    while (s < max) {
        sum += s;
        s = n * 5;
        if (s < max && s % 3 != 0) { sum += s }
        n++;
        s = n * 3;
    }
    return sum;
}

function loopMult_Mult3n5(max) {
    let sum = 0;
    let upperBound = UPPERBOUND(3, max);
    for (let i = 0; i <= upperBound; i++) {
        sum += (i * 3)
    }
    upperBound = UPPERBOUND(5, max);
    for (let i = 0; i <= upperBound; i++) {
       if ((i * 5) % 3 != 0) {
        sum += (i * 5);
       }
    }
    return sum;
}

const SOLUTIONS = [
    loopAllN_Mult3n5, 
    loopNMult_Mult3n5, 
    loopMult_Mult3n5
];