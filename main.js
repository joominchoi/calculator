let firstOperand = Number
let secondOperand = Number
let operator = ''
let displayCurrent = document.getElementById('display-current')
let clearButton = document.getElementById('clear-button')
let deleteButton = document.getElementById('delete-button')
let numberButtons = document.getElementsByClassName('number-button')

let displayValue = '0'
displayCurrent.innerHTML = '0'

clearButton.addEventListener("click", function () {
  clear()
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

deleteButton.addEventListener("click", function () {
  deleteLastNumber()
});

for (let numberButton of numberButtons) {
  numberButton.addEventListener(
    "click",
    () => {
      updateValue(numberButton.innerHTML)
      console.log(displayValue)
      console.log(displayCurrent.innerHTML)
    }
  )
}

function updateValue(value) {
  if (displayValue === '0') {
    displayValue = value
    displayCurrent.innerHTML = value
  } else if (displayValue.length <= 11) {
    displayValue += value
    displayCurrent.innerHTML += value
  }
}

function clear() {
  displayValue = '0'
  displayCurrent.innerHTML = '0'
}

function deleteLastNumber() {
  if (displayCurrent.innerHTML.length <= 1) {
    clear()
    console.log(displayValue);
    console.log(displayCurrent.innerHTML);
  } else {
    newString = displayValue.slice(0, -1);
    displayValue = newString
    displayCurrent.innerHTML = newString
    console.log(displayValue);
    console.log(displayCurrent.innerHTML);
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
