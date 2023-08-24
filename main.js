let firstOperand = ''
let secondOperand = ''
let operator = ''
let answer = ''
let displayCalculation = document.getElementById('display-calculation')
let displayCurrent = document.getElementById('display-current')
let clearButton = document.getElementById('clear-button')
let deleteButton = document.getElementById('delete-button')
let numberButtons = document.getElementsByClassName('number-button')
let operatorButtons = document.getElementsByClassName('operator-button')
let decimalButton = document.getElementById('decimal-button')
let equalButton = document.getElementById('equal-button')

clearButton.addEventListener("click", function () {
  clear()
});

deleteButton.addEventListener("click", function () {
  deleteLastCharacter()
});

for (let numberButton of numberButtons) {
  numberButton.addEventListener(
    "click",
    () => {
      enableDeleteButton()
      enableOperatorButtons()
      updateValue(numberButton.innerHTML)
    }
  )
}

for (let operatorButton of operatorButtons) {
  operatorButton.addEventListener(
    "click",
    () => {
      if (operator != '') {
        operate(firstOperand, secondOperand, operator)
        operator = operatorButton.innerHTML
        firstOperand = answer
        secondOperand = ''
        answer = ''
        disableOperatorButtons()
        disableEqualButton()
        enableDecimalButton()
        updateDisplayCalculation()
      }
      else if (operator === '') {
        operator = operatorButton.innerHTML
        disableOperatorButtons()
        disableEqualButton()
        enableDecimalButton()
        updateDisplayCalculation()
      }
    }
  )
}

decimalButton.addEventListener("click", function () {
  updateValue(decimalButton.innerHTML)
})

equalButton.addEventListener("click", function () {
  operate(firstOperand, secondOperand, operator)
  disableEqualButton()
});

function updateDisplayCalculation() {
  displayCalculation.innerHTML = `${firstOperand} ${operator} ${secondOperand}`
}

function updateValue(value) {
  if ((answer != '') && (firstOperand != '') && (secondOperand != '') && (operator != '')) {
    clear()
    if (value === '.') {
      disableOperatorButtons()
      disableDecimalButton()
      disableEqualButton()
      firstOperand = '0.'
      displayCurrent.innerHTML = firstOperand
    } else {
      firstOperand = value
      displayCurrent.innerHTML = firstOperand
    }
    updateDisplayCalculation()
  } else if ((answer != '') && (secondOperand === '')) {
    firstOperand = answer
    if (value === '.') {
      disableOperatorButtons()
      disableDecimalButton()
      disableEqualButton()
      secondOperand = '0.'
      displayCurrent.innerHTML = secondOperand
    } else {
      secondOperand = value
      displayCurrent.innerHTML = secondOperand
    }
    updateDisplayCalculation()
  } else if (answer != '') {
    secondOperand += value
    displayCurrent.innerHTML += value
    updateDisplayCalculation()
  } else if ((operator === '') && (firstOperand === '')) {
    if (value === '.') {
      disableOperatorButtons()
      disableDecimalButton()
      disableEqualButton()
      firstOperand = '0.'
      displayCurrent.innerHTML = firstOperand
    } else {
      firstOperand = value
      displayCurrent.innerHTML = firstOperand
    }
    updateDisplayCalculation()
  } else if (operator === '') {
    if (value === '.') {
      disableOperatorButtons()
      disableDecimalButton()
      disableEqualButton()
    }
    firstOperand += value
    displayCurrent.innerHTML += value
    updateDisplayCalculation()
  } else if ((operator != '') && (secondOperand === '')) {
    if (value === '.') {
      disableOperatorButtons()
      disableDecimalButton()
      disableEqualButton()
      secondOperand = '0.'
      displayCurrent.innerHTML = secondOperand
    } else {
      secondOperand = value
      displayCurrent.innerHTML = secondOperand
      enableEqualButton()
    }
    updateDisplayCalculation()
  } else if (operator != '') {
    if (value === '.') {
      disableOperatorButtons()
      disableDecimalButton()
      disableEqualButton()
      secondOperand += value
    } else {
      secondOperand += value
      enableEqualButton()
    }
    displayCurrent.innerHTML += value
    updateDisplayCalculation()
  }
}

function clear() {
  firstOperand = ''
  secondOperand = ''
  operator = ''
  answer = ''
  displayCurrent.innerHTML = '0'
  disableDeleteButton()
  enableDecimalButton()
  updateDisplayCalculation()
}

function deleteLastCharacter() {
  if ((firstOperand != '') && (operator != '') && (secondOperand === '')) {
    operator = ''
    displayCurrent.innerHTML = firstOperand
    enableOperatorButtons()
    disableDecimalButton()
    updateDisplayCalculation()
  } else if ((firstOperand != '') && (secondOperand != '')) {
    newString = secondOperand.slice(0, -1);
    if (!newString.includes('.')) {
      enableDecimalButton()
    }
    secondOperand = newString
    answer = ''

    if (newString === '') {
      displayCurrent.innerHTML = '0'
      disableOperatorButtons()
      updateDisplayCalculation()
    } else {
      displayCurrent.innerHTML = newString
      updateDisplayCalculation()
    }
  } else {
    newString = firstOperand.slice(0, -1);
    if (!newString.includes('.')) {
      enableDecimalButton()
    }
    firstOperand = newString

    if (newString === '') {
      displayCurrent.innerHTML = '0'
      disableDeleteButton()
      disableOperatorButtons()
      updateDisplayCalculation()
    } else {
      displayCurrent.innerHTML = newString
      updateDisplayCalculation()
    }
  }
}

function divide(firstOperand, secondOperand) {
  if (secondOperand === 0) {
    alert("Are you trying to crash the calculator? 🙃")
    answer = ''
  } else {
    answer = roundResult((firstOperand / secondOperand))
  }
}

function multiply(firstOperand, secondOperand) {
  answer = roundResult((firstOperand * secondOperand))
}

function add(firstOperand, secondOperand) {
  answer = roundResult((firstOperand + secondOperand))
}

function subtract(firstOperand, secondOperand) {
  answer = roundResult((firstOperand - secondOperand))
}

function operate(firstOperand, secondOperand, operator) {
  convertStringToNumber(firstOperand, secondOperand)

  switch (operator) {
    case '÷':
      divide(x, y)
      if (answer === '') {
        return clear()
      } else if (answer != '') {
        return displayCurrent.innerHTML = answer
      }
    case 'x':
      multiply(x, y)
      return displayCurrent.innerHTML = answer
    case '+':
      add(x, y)
      return displayCurrent.innerHTML = answer
    case '-':
      subtract(x, y)
      return displayCurrent.innerHTML = answer
    default:
      return null
  }
}

function convertStringToNumber(firstOperand, secondOperand) {
  x = Number(firstOperand)
  y = Number(secondOperand)
}

function roundResult(result) {
  return Math.round(result * 1000) / 1000
}

function disableDeleteButton() {
  deleteButton.disabled = true
}
function enableDeleteButton() {
  deleteButton.disabled = false
}

function disableOperatorButtons() {
  for (let operatorButton of operatorButtons) {
    operatorButton.disabled = true
  }
}

function enableOperatorButtons() {
  for (let operatorButton of operatorButtons) {
    operatorButton.disabled = false
  }
}

function disableEqualButton() {
  equalButton.disabled = true
}

function enableEqualButton() {
  equalButton.disabled = false
}

function disableDecimalButton() {
  decimalButton.disabled = true
}

function enableDecimalButton() {
  decimalButton.disabled = false
}

window.onload = () => {
  displayCurrent.innerHTML = '0'
  disableDeleteButton()
  disableOperatorButtons()
  disableEqualButton()
}
