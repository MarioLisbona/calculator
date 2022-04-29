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


const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('mouseover', buttonHover));

function buttonHover() {
	console.log('Hovering over a button');
}