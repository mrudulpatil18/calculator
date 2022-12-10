function add(a, b){
    return a + b;
}

function substract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "ERROR";
    }
}
let val = '';
let operand1 = 0;
let operator = '';
let operand2 = 0;
let done = true;
let history = '';
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let result = document.querySelector('.result');

function reset(e){
    operand1 = 0;
    operand2 = 0;
    val = '';
    done = true;
    history = '';
    display.textContent = '';
    result.textContent = '';
}

function appendValue(e){
    val = val + this.textContent;
    display.textContent = val;
}

function operatorButton(e){
    if(!done){
        evaluate();   
    }
    operand1 = parseInt(val);
    operator = this.textContent;
    history = operand1 + " " + this.textContent;
    result.textContent = history
    
    if(!operand1){
        display.textContent = 'ERROR';
        result.textContent = ''
    }
    done = false;

    val = '';
}

function evaluate(e){
    operand2 = parseInt(val);
    val = operate(operator, operand1, operand2);
    history = `${operand1} ${operator} ${operand2}`;
    
    result.textContent = history;

    done = true;
    if(val == "ERROR"){
        display.textContent = "ERROR";
    }
    else if(this.textContent == "="){
        display.textContent = `Ans. ${val}`;
    }
    else{
        display.textContent = val;
    }
    if(!operand2){
        display.textContent = 'ERROR';
        result.textContent = ''
    }
}

buttons.forEach((box) => {
    if(box.textContent - box.textContent == 0){ //check if number
        box.addEventListener('click', appendValue);
    }
    else if(box.textContent == '='){
        box.addEventListener('click',evaluate);
    }
    else if(box.textContent == 'C'){
        box.addEventListener('click',reset);
    }
    else{
        box.addEventListener('click', operatorButton);
    }
})

