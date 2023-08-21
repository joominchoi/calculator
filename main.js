let firstOperand = '0'
let secondOperand = '0'
let operator = ''
let displayCurrent = document.getElementById('display-current')
let clearButton = document.getElementById('clear-button')
let deleteButton = document.getElementById('delete-button')
let numberButtons = document.getElementsByClassName('number-button')
let operatorButtons = document.getElementsByClassName('operator-button')

displayCurrent.innerHTML = '0'

clearButton.addEventListener("click", function () {
  clear()
  console.log(firstOperand)
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
      console.log(firstOperand)
      console.log(displayCurrent.innerHTML)
    }
  )
}

for (let operatorButton of operatorButtons) {
  operatorButton.addEventListener(
    "click",
    () => {
      operator = operatorButton.innerHTML
      console.log(operator)
    }
  )
}

function updateValue(value) {
  if (firstOperand === '0') {
    firstOperand = value
    displayCurrent.innerHTML = value
  } else if (firstOperand.length <= 11) {
    firstOperand += value
    displayCurrent.innerHTML += value
  }
}

function clear() {
  firstOperand = '0'
  secondOperand = '0'
  operator = ''
  displayCurrent.innerHTML = '0'
}

function deleteLastNumber() {
  if (displayCurrent.innerHTML.length <= 1) {
    clear()
    console.log(firstOperand);
    console.log(displayCurrent.innerHTML);
  } else {
    newString = firstOperand.slice(0, -1);
    firstOperand = newString
    displayCurrent.innerHTML = newString
    console.log(firstOperand);
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
