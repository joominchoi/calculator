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
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
});

deleteButton.addEventListener("click", function () {
  deleteLastCharacter()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
});

for (let numberButton of numberButtons) {
  numberButton.addEventListener(
    "click",
    () => {
      enableDeleteButton()
      enableOperatorButtons()
      updateValue(numberButton.innerHTML)
      console.log(`firstOperand = ${firstOperand}`)
      console.log(`secondOperand = ${secondOperand}`)
      console.log(`operator = ${operator}`)
      console.log(`answer = ${answer}`)
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
        console.log(`firstOperand = ${firstOperand}`)
        console.log(`secondOperand = ${secondOperand}`)
        console.log(`operator = ${operator}`)
        console.log(`answer = ${answer}`)
      }
      else if (operator === '') {
        operator = operatorButton.innerHTML
        disableOperatorButtons()
        disableEqualButton()
        enableDecimalButton()
        updateDisplayCalculation()
        console.log(`firstOperand = ${firstOperand}`)
        console.log(`secondOperand = ${secondOperand}`)
        console.log(`operator = ${operator}`)
        console.log(`answer = ${answer}`)
      }
    }
  )
}

decimalButton.addEventListener("click", function() {
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
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
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
  firstOperand = Number(firstOperand)
  secondOperand = Number(secondOperand)

  if (secondOperand === 0) {
    alert("Are you trying to crash the calculator? 🙃")
    answer = ''
    console.log(`firstOperand = ${firstOperand}`)
    console.log(`secondOperand = ${secondOperand}`)
    console.log(`operator = ${operator}`)
    console.log(`answer = ${answer}`)
  } else {
    answer = (firstOperand / secondOperand).toString()
    console.log(`firstOperand = ${firstOperand}`)
    console.log(`secondOperand = ${secondOperand}`)
    console.log(`operator = ${operator}`)
    console.log(`answer = ${answer}`)
  }
}

function multiply(firstOperand, secondOperand) {
  firstOperand = Number(firstOperand)
  secondOperand = Number(secondOperand)
  answer = (firstOperand * secondOperand).toString()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
}

function add(firstOperand, secondOperand) {
  firstOperand = Number(firstOperand)
  secondOperand = Number(secondOperand)
  answer = (firstOperand + secondOperand).toString()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
}

function subtract(firstOperand, secondOperand) {
  firstOperand = Number(firstOperand)
  secondOperand = Number(secondOperand)
  answer = (firstOperand - secondOperand).toString()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
}

function operate(x, y, operator) {
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
