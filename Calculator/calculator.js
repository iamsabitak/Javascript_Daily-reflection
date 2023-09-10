
// taking the operator input
const operator = prompt('Enter operator ( +, -, *, / ): ');

// taking the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
let a = (`${number1} ${operator} ${number2} = ${result}`)
cal.innerHTML = cal.innerHTML + a
// console.log(`${number1} ${operator} ${number2} = ${result}`);