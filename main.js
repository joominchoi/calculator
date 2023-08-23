let firstOperand = ''
let secondOperand = ''
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
      if ((firstOperand === '') && (secondOperand === '')) {
        alert('Please input a number first')
      }
      else if (operator != '') {
        operate(firstOperand, secondOperand, operator)
        operator = operatorButton.innerHTML
        firstOperand = answer
        secondOperand = ''
        answer = ''
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
  if ((answer != '') && (firstOperand != '') && (secondOperand != '') && (operator != '')) {
    clear()
    firstOperand = value
    displayCurrent.innerHTML = value
  }
  else if ((answer != '') && (secondOperand === '')) {
    firstOperand = answer
    secondOperand = value
    displayCurrent.innerHTML = value
  } else if (answer != '') {
    secondOperand += value
    displayCurrent.innerHTML += value
  }
  else if ((operator === '') && (firstOperand === '')) {
    firstOperand = value
    displayCurrent.innerHTML = value
  } else if (operator === '') {
    firstOperand += value
    displayCurrent.innerHTML += value
  } else if ((operator != '') && (secondOperand === '')) {
    secondOperand = value
    displayCurrent.innerHTML = value
  } else if (operator != '') {
    secondOperand += value
    displayCurrent.innerHTML += value
  }
}

function clear() {
  firstOperand = ''
  secondOperand = ''
  operator = ''
  answer = ''
  deleteButton.disabled = false
  displayCurrent.innerHTML = '0'
  console.log(`firstOperand = ${firstOperand}`)
  console.log(`secondOperand = ${secondOperand}`)
  console.log(`operator = ${operator}`)
  console.log(`answer = ${answer}`)
}

function deleteLastCharacter() {
  if ((firstOperand != '') && (operator != '') && (secondOperand === '')) {
    operator = ''
    displayCurrent.innerHTML = firstOperand
  } else if ((firstOperand != '') && (secondOperand != '')) {
    newString = secondOperand.slice(0, -1);
    secondOperand = newString
    answer = ''

    if (newString === '') {
      displayCurrent.innerHTML = '0'
    } else {
      displayCurrent.innerHTML = newString
    }
  } else {
    newString = firstOperand.slice(0, -1);
    firstOperand = newString
    displayCurrent.innerHTML = newString
  }
}

function divide(firstOperand, secondOperand) {
  firstOperand = Number(firstOperand)
  secondOperand = Number(secondOperand)

  if (secondOperand === 0) {
    alert("Are you trying to crash the calculator? 🙃")
    answer = ''
  } else {
    answer = (firstOperand / secondOperand).toString()
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
      } else {
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
