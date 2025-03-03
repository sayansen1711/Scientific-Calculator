'use strict';
let inputStack = []; //
function append1() {
    inputStack.push(1);
    document.querySelector('.output-stack').textContent = 1;
}
function append2() {
    inputStack.push(2);
    document.querySelector('.output-stack').textContent = 2;
}
function append3() {
    inputStack.push(3);
    document.querySelector('.output-stack').textContent = 3;
}
function append4() {
    inputStack.push(4);
    document.querySelector('.output-stack').textContent = 4;
}
function append5() {
    inputStack.push(5);
    document.querySelector('.output-stack').textContent = 5;
}
function append6() {
    inputStack.push(6);
    document.querySelector('.output-stack').textContent = 6;
}
function append7() {
    inputStack.push(7);
    document.querySelector('.output-stack').textContent = 7;
}
function append8() {
    inputStack.push(8);
    document.querySelector('.output-stack').textContent = 8;
}
function append9() {
    inputStack.push(9);
    document.querySelector('.output-stack').textContent = 9;
}
function append0() {
    inputStack.push(0);
    document.querySelector('.output-stack').textContent = 0;
}
function multiply() {
    document.querySelector('.output-stack').textContent = '*';
    inputStack.push('*');
}
function add() {
    document.querySelector('.output-stack').textContent = '+';
    inputStack.push('+');
}
function minus() {
    document.querySelector('.output-stack').textContent = '-';
    inputStack.push('-');
}
function divide() {
    document.querySelector('.output-stack').textContent = '/';
    inputStack.push('/');
}
function equals() {
    let result = 0, numbers = [], operators = [], numberStr = '', j = 0, k = 0, i = 0;
    inputStack.push('#'); //ending character needed to mark the end of stack and push the last number to numbers array
    console.log(inputStack);
    //document.querySelector('.output-result').textContent=output;
    for (i = 0; i < inputStack.length; i++) {
        console.log(inputStack[i], i);
        if (inputStack[i] >= '0' && inputStack[i] <= '9') {
            //for forming the current number
            numberStr += inputStack[i];
        }
        else {
            operators[j++] = inputStack[i];
            numbers[k++] = Number(numberStr);
            numberStr = '';
        }
    }
    if (numbers.length == 1) {
        document.querySelector('.output-result').textContent = numbers[0];
        return;
    }
    operators.pop('#');
    //console.log('Operators:',operators );
    //console.log('numbers ',numbers);
    j = 0, i = 0;
    while (numbers.length != 1 && operators != null) {
        switch (operators[j++]) {
            case '+': //add first two numbers
                result = numbers[i] + numbers[i + 1];
                numbers.shift(); //remove first number
                numbers.shift(); //remove second number
                numbers.unshift(result); //store the result in first place
                break;
            case '-':
                result = numbers[i] - numbers[i + 1];
                numbers.shift(); //remove first number
                numbers.shift(); //remove second number
                numbers.unshift(result); //store the result in first place
                break;
            case '*':
                result = numbers[i] * numbers[i + 1];
                numbers.shift(); //remove first number
                numbers.shift(); //remove second number
                numbers.unshift(result); //store the result in first place
                break;
            case '/':
                if(numbers[i+1]==0){
                    document.querySelector('.output-result').textContent = 'Math ERROR';
                    return;
                }
                result = numbers[i] / numbers[i + 1];
                numbers.shift(); //remove first number
                numbers.shift(); //remove second number
                numbers.unshift(result); //store the result in first place
                break;
        }
        //console.log('result ',result);
    }
    document.querySelector('.output-result').textContent = result;
}
function allClear() {
    document.querySelector('.output-stack').textContent = '';
    document.querySelector('.output-result').textContent = '';
    inputStack = [];
}
