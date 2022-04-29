function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(operator, num1, num2){

	switch(operator) {
		case '+':
			console.log(add(num1, num2));
			break;
		case "-":
			console.log(subtract(num1, num2));
			break;
		case "*":
			console.log(multiply(num1, num2));
			break;
		case "/":
			console.log(divide(num1, num2));
			break;
	}
}

//event listeners and functions for button animations
const buttons = Array.from(document.querySelectorAll('.button'));

buttons.forEach(button => button.addEventListener('mouseover', btnHover));
buttons.forEach(button => button.addEventListener('mouseout', btnDefault));
buttons.forEach(button => button.addEventListener('mousedown', btnClickDown));
buttons.forEach(button => button.addEventListener('mouseup', btnClickUp));

function btnHover(e) {
	this.style.backgroundColor = '#BCBCBD';
}
function btnDefault(e) {
	this.style.backgroundColor = '';
}
function btnClickDown(e) {
	this.style.transform = 'scale(.95)';
}
function btnClickUp(e) {
	this.style.transform = '';
}

//global variables for operator, num1, num2 and result
let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;

//functions for displaying numbers, deleting numbers, clearing the display
const dspOperation = document.querySelector('.display-operation');
const dspResult = document.querySelector('.display-result');
const btnClear = document.querySelector('#btnClear');
const btnDelete = document.querySelector('#btnDelete');
const btnEquals = document.querySelector('#btnEquals');
const btnOperators = document.querySelectorAll('.operator');
const btnNumbers = document.querySelectorAll('.number');

btnOperators.forEach(btnOp => btnOp.addEventListener('click', btnOperator));
btnNumbers.forEach(btnNum => btnNum.addEventListener('click', btnNumber));
buttons.forEach(button => button.addEventListener('click', displayOperation));
btnClear.addEventListener('click', clearDisplay);
btnDelete.addEventListener('click', deleteEntry);
btnEquals.addEventListener('click', performCalculation);

function btnOperator(e) {
	num1 = dspOperation.textContent;
	operator = e.target.textContent;
	console.log('number 1 after operator click', num1);
	console.log('operator after operator click', operator);
}

function btnNumber(e) {
}

function performCalculation() {
	let split = num1.replace(/[^0-9.]+/g, '').split('');
	let num2Raw = dspOperation.textContent.replace(/[^0-9.]+/g, '').split('');
	console.log('number 1 and split after equal', num1, split);
	console.log('number 1len and splitlen after equal', num1.length, split.length);
	console.log('number 2 after equals click', num2Raw);
	console.log('operator after equals click', operator);
	num2 = num2Raw.slice(split.length).join('');
	console.log('number 1 after filtering', num1);
	console.log('number 2 after filtering', num2);
	console.log('operator after filtering', operator);
	
}

function displayOperation(e) {
	dspOperation.textContent += e.target.textContent;	
}

function clearDisplay() {
	dspOperation.textContent = '';
}

function deleteEntry() {
	let rawString = dspOperation.textContent;
	let fString = rawString.replace(/[^0-9.]+/g, '').split('');	
	dspOperation.textContent = fString.slice(0, -1).join('');
}







