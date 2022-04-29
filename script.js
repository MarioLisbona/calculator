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


//test function for outputing to display and clearing display

const displayOp = document.querySelector('.display-operation');
const btnClear = document.querySelector('#btnClear');

buttons.forEach(button => button.addEventListener('click', testFunction));


function testFunction(e) {
	displayOp.textContent += e.target.textContent;	
}