//global element selectors

const btnClear = document.querySelector('#btnClear');
const btnDelete = document.querySelector('#btnDelete');
const btnEquals = document.querySelector('#btnEquals');
const btnOperators = Array.from(document.querySelectorAll('.operator'));
const btnNumbers = Array.from(document.querySelectorAll('.number'));
const buttons = Array.from(document.querySelectorAll('.button'));

//global variables for operator, num1, num2 and result
let displayPrevious = document.querySelector('.display-previous');
let displayCurrent = document.querySelector('.display-current');
let num1 = '';
let num2 = '';
let currentOperator = null;
let result = '';
let resetCurrentDisplay = false;



//event listeners & functions for button animations
buttons.forEach(button => button.addEventListener('mouseover', btnHover));
buttons.forEach(button => button.addEventListener('mouseout', btnDefault));
buttons.forEach(button => button.addEventListener('mousedown', btnClickDown));
buttons.forEach(button => button.addEventListener('mouseup', btnClickUp));
window.document.addEventListener('keydown', keyboardHover);
window.document.addEventListener('keyup', keyboardDefault);

//fucntions for mouseovers
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


//function for keyboard input animations
function keyboardHover(e) {
	console.log('inside hover if statment', e.key);
    const keyboardTarget = document.getElementById(`btn${e.key}`);
	keyboardTarget.style.backgroundColor = '#BCBCBD';
	
}

function keyboardDefault(e) {
	console.log('inside default if statment', e.key);
    const keyboardTarget = document.getElementById(`btn${e.key}`);
	keyboardTarget.style.backgroundColor = '';
}


//functions for displaying numbers, deleting numbers, clearing the display
window.document.addEventListener('keydown', keyboardInput);
btnNumbers.forEach(btnNumber => btnNumber.addEventListener('click', () => addNumber(btnNumber.textContent)));
btnOperators.forEach(btnOperator => btnOperator.addEventListener('click', () => setOperator(btnOperator.textContent)));
btnEquals.addEventListener('click', performCalculation);
btnClear.addEventListener('click', resetDisplay);
btnDelete.addEventListener('click', deleteEntry);
displayCurrent.textContent = '0';

function addNumber(number) {
	if (resetCurrentDisplay === true || displayCurrent.textContent === '0') {
		clearCurrentDisplay()
	}
	resetCurrentDisplay = false;
	displayCurrent.textContent += number;
}
	

function setOperator(operator) {
	num1 = displayCurrent.textContent;
	currentOperator = operator;
	if (currentOperator === 'x') {
		displayPrevious.textContent = `${num1} x`;
		currentOperator = '*'
		resetCurrentDisplay = true;
	}
	if (currentOperator === '%') {
		currentOperator = '/';
		resetCurrentDisplay = true;
	}

	displayPrevious.textContent = `${num1} ${operator}`;
	resetCurrentDisplay = true;
}

function performCalculation() {
	displayPrevious.textContent += ` ${displayCurrent.textContent} =`;
	num2 = displayCurrent.textContent;
	displayCurrent.textContent = operate(currentOperator, num1, num2);
}

function clearCurrentDisplay() {
	displayCurrent.textContent = '';
}

function deleteEntry() {
	displayCurrent.textContent = displayCurrent.textContent.slice(0, -1);
	
}

function resetDisplay() {
	displayCurrent.textContent = '';
	displayPrevious.textContent = '';

}

function keyboardInput(event) {
	if (event.key >= 0 && event.key <= 9) {
		addNumber(event.key);
	}
	if (event.key === '+') {
		setOperator(event.key);
	}
	if (event.key === '-') {
		setOperator(event.key);
	}
	if (event.key === '%') {
		setOperator(event.key);
	}
	if (event.key === 'x') {
		setOperator(event.key);
	}
	if (event.key === '=' || event.key === "Enter") {
		performCalculation();
	}
	if (event.key === 'Backspace') {
		deleteEntry();
	}

}




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