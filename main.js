let firstOperand = Number
let secondOperand = Number
let operator = ''
let displayCurrent = document.getElementById('display-current')
let clearButton = document.getElementById('clear-button')
let deleteButton = document.getElementById('delete-button')
let one = document.getElementById('one')

let displayValue = '0'
displayCurrent.innerHTML = '0'



zero.addEventListener("click", function () {
  updateValueupdateValue(zero.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

one.addEventListener("click", function () {
  updateValue(one.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

two.addEventListener("click", function () {
  updateValue(two.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

three.addEventListener("click", function () {
  updateValue(three.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

four.addEventListener("click", function () {
  updateValue(four.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

five.addEventListener("click", function () {
  updateValue(five.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

six.addEventListener("click", function () {
  updateValue(six.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

seven.addEventListener("click", function () {
  updateValue(seven.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

eight.addEventListener("click", function () {
  updateValue(eight.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

nine.addEventListener("click", function () {
  updateValue(nine.innerHTML)
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

clearButton.addEventListener("click", function () {
  clear()
  console.log(displayValue)
  console.log(displayCurrent.innerHTML)
});

deleteButton.addEventListener("click", function () {
  deleteLastNumber()
});

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
