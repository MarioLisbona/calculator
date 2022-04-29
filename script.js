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

//functions for displaying numbers, deleting numbers, clearing the display
const dspOperation = document.querySelector('.display-operation');
const dspResult = document.querySelector('.display-result');
const btnClear = document.querySelector('#btnClear');
const btnDelete = document.querySelector('#btnDelete');


buttons.forEach(button => button.addEventListener('click', displayOperation));
btnClear.addEventListener('click', clearDisplay);
btnDelete.addEventListener('click', deleteEntry);

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







