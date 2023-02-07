const tester = document.getElementById('test_num');

const TEST_ANSWER = () => {
    let test_num = (tester.value)? tester.value: 1000000;
    document.querySelectorAll('.max').forEach(e => {
        e.innerHTML = test_num;
    });
    tester.value = test_num;
    let init = '';
    let fini = '';
    let sum = 0;
    for (let i = 0; i < SOLUTIONS.length; i++) {
        init = Date.now();
        sum = SOLUTIONS[i](test_num);
        fini = Date.now();
        document.querySelector(`.sol-t-${i + 1}`).innerHTML = sum;
        document.querySelector(`.t-${i + 1}`).innerHTML = `${fini - init}ms`;
    }
}
tester.addEventListener('change', TEST_ANSWER);

const ANSWER = () => {
    let init = '';
    let fini = '';
    let sum = 0;
    for (let i = 0; i < SOLUTIONS.length; i++) {
        init = Date.now();
        sum = SOLUTIONS[i](MAX_NUM);
        fini = Date.now();
        document.querySelector(`.sol-${i + 1}`).innerHTML = sum;
    }
    TEST_ANSWER();
}
ANSWER();