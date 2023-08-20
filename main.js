let firstOperand = Number
let secondOperand = Number
let operator = ''
let displayCurrent = document.getElementById('display-current')
let one = document.getElementById('one')

displayCurrent.innerHTML = '0'

let displayValue = displayCurrent.innerHTML

zero.addEventListener("click", function() {
  displayValue = zero.innerHTML
  updateDisplay(zero.innerHTML)
});

one.addEventListener("click", function() {
  displayValue = one.innerHTML
  updateDisplay(one.innerHTML)
});

two.addEventListener("click", function() {
  displayValue = two.innerHTML
  updateDisplay(two.innerHTML)
});

three.addEventListener("click", function() {
  displayValue = three.innerHTML
  updateDisplay(three.innerHTML)
});

four.addEventListener("click", function() {
  displayValue = four.innerHTML
  updateDisplay(four.innerHTML)
});

five.addEventListener("click", function() {
  displayValue = five.innerHTML
  updateDisplay(five.innerHTML)
});

six.addEventListener("click", function() {
  displayValue = six.innerHTML
  updateDisplay(six.innerHTML)
});

seven.addEventListener("click", function() {
  displayValue = seven.innerHTML
  updateDisplay(seven.innerHTML)
});

eight.addEventListener("click", function() {
  displayValue = eight.innerHTML
  updateDisplay(eight.innerHTML)
});

nine.addEventListener("click", function() {
  displayValue = nine.innerHTML
  updateDisplay(nine.innerHTML)
});


function updateDisplay(value) {
  if (displayCurrent.innerHTML === '0') {
    displayCurrent.innerHTML = value
  } else if (displayCurrent.innerHTML.length <= 11) {
    displayCurrent.innerHTML += value
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
