//global element selectors
const dspOperation = document.querySelector('.display-operation');
const dspResult = document.querySelector('.display-result');
const btnClear = document.querySelector('#btnClear');
const btnDelete = document.querySelector('#btnDelete');
const btnEquals = document.querySelector('#btnEquals');
const btnOperators = document.querySelectorAll('.operator');
const btnNumbers = document.querySelectorAll('.number');

//global variables for operator, num1, num2 and result
let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;

//math operation functions
function add(num1, num2) {
	return parseInt(num1) + parseInt(num2);
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

//operate fucntions calls each math function based on what operator argument is passed
function operate(operator, num1, num2){

	switch(operator) {
		case '+':
			return add(num1, num2);
			break;
		case "-":
			return subtract(num1, num2);
			break;
		case "*":
			return multiply(num1, num2);
			break;
		case "/":
			return divide(num1, num2);
			break;
	}
}

//event listeners & functions for button animations
const buttons = Array.from(document.querySelectorAll('.button'));

buttons.forEach(button => button.addEventListener('mouseover', btnHover));
buttons.forEach(button => button.addEventListener('mouseout', btnDefault));
buttons.forEach(button => button.addEventListener('mousedown', btnClickDown));
buttons.forEach(button => button.addEventListener('mouseup', btnClickUp));

function btnHover(e) {
	(e.target.id != 'btnEquals') ? this.style.backgroundColor = '#BCBCBD' : this.style.backgroundColor = '#ffb25a';
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

//functions for displaying numbers, deleting numbers, clearing the display
btnOperators.forEach(btnOp => btnOp.addEventListener('click', btnOperator));
buttons.forEach(button => button.addEventListener('click', displayOperation));
btnEquals.addEventListener('click', performCalculation);
btnClear.addEventListener('click', clearDisplay);
btnDelete.addEventListener('click', deleteEntry);


function btnOperator(e) {
	num1 = dspOperation.textContent.replace(/[^0-9.]+/g, '').split('').join('');
	if (e.target.textContent === 'x') {
		operator = '*'
	} else {
		operator = e.target.textContent;
	}
	
	if (result != 0) {
		dspOperation.textContent = result;
		num1 = result;
	}
	num2 = 0;
}

function displayOperation(e) {
	dspOperation.textContent += e.target.textContent;	
}

function performCalculation() {	
	let num2Raw = dspOperation.textContent.replace(/[^0-9.]+/g, '').split('');
	num2 = num2Raw.slice(num1.length).join('');	
	result = operate(operator, num1, num2);
	dspResult.textContent = result;

}

function clearDisplay() {
	dspOperation.textContent = '';
	dspResult.textContent = '';
}

function deleteEntry() {
	let rawString = dspOperation.textContent;
	let fString = rawString.replace(/[^0-9.]+/g, '').split('');	
	dspOperation.textContent = fString.slice(0, -1).join('');
}