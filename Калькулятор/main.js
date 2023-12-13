let input = document.querySelector('.input');

function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent = input.textContent + num;
    } else
        input.textContent = input.textContent + num
}
function clean() {
    input.textContent = "0";
}
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}
function equal() {
    let exp = input.textContent;
    if (exp) {
        input.textContent = eval(exp);
    }
}

function percent() {
    input.textContent = eval(input.textContent)/100;
}

let reset = false;
function clean() {
    if (reset) {
        reset.value = "";
        reset = false;
    }
}

function insert(num) {
    clean();
    result.value += num;
}

function theAnswer() {
    let evalo = eval(result.value);
    result.value = evalo;
    reset = true;
}