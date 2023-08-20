let firstOperand = Number
let secondOperand = Number
let operator = ''
let displayCurrent = document.getElementById('display-current')
let clearButton = document.getElementById('clear-button')
let deleteButton = document.getElementById('delete-button')
let one = document.getElementById('one')

displayCurrent.innerHTML = '0'

let displayValue = '0'

zero.addEventListener("click", function () {
  updateDisplayValue(zero.innerHTML)
  updateDisplay(zero.innerHTML)
  console.log(displayValue)
});

one.addEventListener("click", function () {
  updateDisplayValue(one.innerHTML)
  updateDisplay(one.innerHTML)
  console.log(displayValue)
});

two.addEventListener("click", function () {
  updateDisplayValue(two.innerHTML)
  updateDisplay(two.innerHTML)
  console.log(displayValue)
});

three.addEventListener("click", function () {
  updateDisplayValue(three.innerHTML)
  updateDisplay(three.innerHTML)
  console.log(displayValue)
});

four.addEventListener("click", function () {
  updateDisplayValue(four.innerHTML)
  updateDisplay(four.innerHTML)
  console.log(displayValue)
});

five.addEventListener("click", function () {
  updateDisplayValue(five.innerHTML)
  updateDisplay(five.innerHTML)
  console.log(displayValue)
});

six.addEventListener("click", function () {
  updateDisplayValue(six.innerHTML)
  updateDisplay(six.innerHTML)
  console.log(displayValue)
});

seven.addEventListener("click", function () {
  updateDisplayValue(seven.innerHTML)
  updateDisplay(seven.innerHTML)
  console.log(displayValue)
});

eight.addEventListener("click", function () {
  updateDisplayValue(eight.innerHTML)
  updateDisplay(eight.innerHTML)
  console.log(displayValue)
});

nine.addEventListener("click", function () {
  updateDisplayValue(nine.innerHTML)
  updateDisplay(nine.innerHTML)
  console.log(displayValue)
});

clearButton.addEventListener("click", function () {
  clear()
  console.log(displayValue)
});

deleteButton.addEventListener("click", function () {
  deleteNumber()
});

function updateDisplayValue(value) {
  if (displayValue === '0') {
    displayValue = value
  } else if (displayValue.length <= 11) {
    displayValue += value
  }
}

function updateDisplay(value) {
  if (displayCurrent.innerHTML === '0') {
    displayCurrent.innerHTML = value
  } else if (displayCurrent.innerHTML.length <= 11) {
    displayCurrent.innerHTML += value
  }
}

function clear() {
  displayValue = '0'
  displayCurrent.innerHTML = '0'
  console.log(typeof displayCurrent.innerHTML)
}

function deleteNumber() {
  if (displayCurrent.innerHTML.length <= 1) {
    displayCurrent.innerHTML = '0'
  }
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
