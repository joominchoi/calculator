let firstOperand = Number
let secondOperand = Number
let operator = ''
let displayCurrent = document.getElementById('display-current')
let one = document.getElementById('one')

displayCurrent.innerHTML = '0'

let displayValue = displayCurrent.innerHTML

console.log(displayValue)

one.addEventListener("click", function() {
  displayValue = one.innerHTML
  updateDisplay(one.innerHTML)
  console.log(displayValue)
});

function updateDisplay(value) {
  displayCurrent.innerHTML = value
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
