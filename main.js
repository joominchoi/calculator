let firstOperand = ''
let secondOperand = ''
let answer = ''
let operator = ''
let displayCalculation = document.getElementById('display-calculation')
let displayCurrent = document.getElementById('display-current')
let clearButton = document.getElementById('clear-button')
let deleteButton = document.getElementById('delete-button')
let numberButtons = document.getElementsByClassName('number-button')
let operatorButtons = document.getElementsByClassName('operator-button')
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
        updateDisplayCalculation()
        disableOperatorButtons()
        disableEqualButton()
        console.log(`firstOperand = ${firstOperand}`)
        console.log(`secondOperand = ${secondOperand}`)
        console.log(`operator = ${operator}`)
        console.log(`answer = ${answer}`)
      }
      else if (operator === '') {
        operator = operatorButton.innerHTML
        updateDisplayCalculation()
        disableOperatorButtons()
        disableEqualButton()
        console.log(`firstOperand = ${firstOperand}`)
        console.log(`secondOperand = ${secondOperand}`)
        console.log(`operator = ${operator}`)
        console.log(`answer = ${answer}`)
      }
    }
  )
}

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
    firstOperand = value
    displayCurrent.innerHTML = value
    updateDisplayCalculation()
  }
  else if ((answer != '') && (secondOperand === '')) {
    firstOperand = answer
    secondOperand = value
    displayCurrent.innerHTML = value
    updateDisplayCalculation()
  } else if (answer != '') {
    secondOperand += value
    displayCurrent.innerHTML += value
    updateDisplayCalculation()
  }
  else if ((operator === '') && (firstOperand === '')) {
    firstOperand = value
    displayCurrent.innerHTML = value
    updateDisplayCalculation()
  } else if (operator === '') {
    firstOperand += value
    displayCurrent.innerHTML += value
    updateDisplayCalculation()
  } else if ((operator != '') && (secondOperand === '')) {
    secondOperand = value
    enableEqualButton()
    displayCurrent.innerHTML = value
    updateDisplayCalculation()
  } else if (operator != '') {
    secondOperand += value
    enableEqualButton()
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
  updateDisplayCalculation()
  disableDeleteButton()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
}

function deleteLastCharacter() {
  if ((firstOperand != '') && (operator != '') && (secondOperand === '')) {
    operator = ''
    displayCurrent.innerHTML = firstOperand
    updateDisplayCalculation()
    enableOperatorButtons()
  } else if ((firstOperand != '') && (secondOperand != '')) {
    newString = secondOperand.slice(0, -1);
    secondOperand = newString
    answer = ''

    if (newString === '') {
      displayCurrent.innerHTML = '0'
      updateDisplayCalculation()
      disableOperatorButtons()
    } else {
      displayCurrent.innerHTML = newString
      updateDisplayCalculation()
    }
  } else {
    newString = firstOperand.slice(0, -1);
    firstOperand = newString

    if (newString === '') {
      displayCurrent.innerHTML = '0'
      updateDisplayCalculation()
      disableDeleteButton()
      disableOperatorButtons()
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

window.onload = () => {
  disableDeleteButton()
  disableOperatorButtons()
  disableEqualButton()
  displayCurrent.innerHTML = '0'
}
