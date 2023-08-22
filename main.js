let firstOperand = '0'
let secondOperand = '0'
let answer = ''
let operator = ''
let displayLast = document.getElementById('display-last')
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
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
});

deleteButton.addEventListener("click", function () {
  deleteLastDigit()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
});

for (let numberButton of numberButtons) {
  numberButton.addEventListener(
    "click",
    () => {
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
        secondOperand = '0'
        console.log(`firstOperand = ${firstOperand}`)
        console.log(`secondOperand = ${secondOperand}`)
        console.log(`operator = ${operator}`)
        console.log(`answer = ${answer}`)
      }
      else if (operator === '') {
        operator = operatorButton.innerHTML
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
});

function updateValue(value) {
  if ((answer != '') && (secondOperand === '0')) {
    firstOperand = answer
    secondOperand = value
    displayCurrent.innerHTML = value
  } else if (answer != '') {
    secondOperand += value
    displayCurrent.innerHTML += value
  }
  else if ((operator === '') && (firstOperand === '0')) {
    firstOperand = value
    displayCurrent.innerHTML = value
  } else if (operator === '') {
    firstOperand += value
    displayCurrent.innerHTML += value
  } else if ((operator != '') && (secondOperand === '0')) {
    secondOperand = value
    displayCurrent.innerHTML = value
  } else if (operator != '') {
    secondOperand += value
    displayCurrent.innerHTML += value
  }
}

function clear() {
  firstOperand = '0'
  secondOperand = '0'
  operator = ''
  answer = ''
  deleteButton.disabled = false
  displayCurrent.innerHTML = '0'
}

function deleteLastDigit() {
  if (answer.length <= 1) {
    clear()
  }
  else if (answer != '') {
    newString = answer.slice(0, -1);
    firstOperand = '0'
    secondOperand = '0'
    operator = 'newAnswer'
    answer = newString
    displayCurrent.innerHTML = newString
  }
  else if (displayCurrent.innerHTML.length <= 1) {
    if ((firstOperand === '0') && (secondOperand === '0')) {
      clear()
    } else {
      secondOperand = '0'
      displayCurrent.innerHTML = secondOperand
    }
  } else if ((firstOperand != '0') && (secondOperand != '0')) {
    newString = secondOperand.slice(0, -1);
    secondOperand = newString
    displayCurrent.innerHTML = newString
  } else {
    newString = firstOperand.slice(0, -1);
    firstOperand = newString
    displayCurrent.innerHTML = newString
  }
}

function divide(firstOperand, secondOperand) {
  firstOperand = Number(firstOperand)
  secondOperand = Number(secondOperand)
  answer = (firstOperand / secondOperand).toString()
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
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
      return displayCurrent.innerHTML = answer
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
