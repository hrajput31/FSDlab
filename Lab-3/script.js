let result = document.getElementById('result');
let curr = '';
let storedVal = '';
let operator = '';

function appendValue(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        operator = value;
        storedVal = curr;
        curr = '';
    } else {
        curr += value;
    }
    result.value += value;
}

function clearResult() {
    result.value = '';
    curr = '';
    storedVal = '';
    operator = '';
}

function deleteLast() {
    curr = curr.slice(0, -1);
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    let res;
    const n1 = parseFloat(storedVal);
    const n2 = parseFloat(curr);

    switch (operator) {
        case '+':
            res = n1 + n2;
            break;
        case '-':
            res = n1 - n2;
            break;
        case '*':
            res = n1 * n2;
            break;
        case '/':
            res = n1 / n2;
            break;
        default:
            res = 'Error';
    }

    result.value = res;
    curr = res.toString();
}
