let firstOperand = Number
let secondOperand = Number
let operator = ''
let displayValue = ''
let displayCurrent = document.getElementById('display-current')
let one = document.getElementById('one')

function populateDisplay() {
  displayCurrent.innerHTML = Text
}

one.addEventListener("click", myFunc);

function myFunc() {
  displayCurrent.innerHTML = '1'
}

function divide(x, y) {
  return x / y
}

function multiply(x, y) {
  return x * y
}

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function operate(x, y, operator) {
  switch (operator) {
    case '/':
      return divide(x, y)
    case '*':
      return multiply(x, y)
    case '+':
      return add(x, y)
    case '-':
      return subtract(x, y)
    default:
      return null
  }
}
