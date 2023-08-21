let firstOperand = '0'
let secondOperand = '0'
let operator = ''
let displayCurrent = document.getElementById('display-current')
let clearButton = document.getElementById('clear-button')
let deleteButton = document.getElementById('delete-button')
let numberButtons = document.getElementsByClassName('number-button')
let operatorButtons = document.getElementsByClassName('operator-button')
let equalButton = document.getElementById('equal-button')

displayCurrent.innerHTML = '0'

clearButton.addEventListener("click", function () {
  clear()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`displayValue = ${displayCurrent.innerHTML}`)
  console.log(`operator = ${operator}`)
});

deleteButton.addEventListener("click", function () {
  deleteLastNumber()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`displayValue = ${displayCurrent.innerHTML}`)
});

for (let numberButton of numberButtons) {
  numberButton.addEventListener(
    "click",
    () => {
      updateValue(numberButton.innerHTML)
      console.log(`firstOperand = ${firstOperand}`)
      console.log(`secondOperand = ${secondOperand}`)
      console.log(`operator = ${operator}`)
      console.log(`displayValue = ${displayCurrent.innerHTML}`)
    }
  )
}

for (let operatorButton of operatorButtons) {
  operatorButton.addEventListener(
    "click",
    () => {
      operator = operatorButton.innerHTML
      console.log(`firstOperand = ${firstOperand}`)
      console.log(`secondOperand = ${secondOperand}`)
      console.log(`operator = ${operator}`)
      console.log(`displayValue = ${displayCurrent.innerHTML}`)
    }
  )
}

equalButton.addEventListener("click", function () {
  console.log('Equal button has been clicked')
});

function updateValue(value) {
  if ((operator === '') && (firstOperand === '0') ) {
    firstOperand = value
    displayCurrent.innerHTML = value
  } else if ((operator === '') && (firstOperand.length <= 11)) {
    firstOperand += value
    displayCurrent.innerHTML += value
  } else if ((operator != '') && (secondOperand === '0')) {
    secondOperand = value
    displayCurrent.innerHTML = value
  } else if ((operator != '') && (secondOperand.length <= 11)) {
    secondOperand += value
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
  } else {
    newString = firstOperand.slice(0, -1);
    firstOperand = newString
    displayCurrent.innerHTML = newString
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
