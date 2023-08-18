let firstOperand = Number
let secondOperand = Number
let operator = ''
let displayCurrent = document.getElementById('display-current')
let one = document.getElementById('one')

displayCurrent.innerHTML = '0'

let displayValue = displayCurrent.innerHTML

console.log(displayValue)

zero.addEventListener("click", function() {
  displayValue = zero.innerHTML
  updateDisplay(zero.innerHTML)
  console.log(displayValue)
});

one.addEventListener("click", function() {
  displayValue = one.innerHTML
  updateDisplay(one.innerHTML)
  console.log(displayValue)
});

two.addEventListener("click", function() {
  displayValue = two.innerHTML
  updateDisplay(two.innerHTML)
  console.log(displayValue)
});

three.addEventListener("click", function() {
  displayValue = three.innerHTML
  updateDisplay(three.innerHTML)
  console.log(displayValue)
});

four.addEventListener("click", function() {
  displayValue = four.innerHTML
  updateDisplay(four.innerHTML)
  console.log(displayValue)
});

five.addEventListener("click", function() {
  displayValue = five.innerHTML
  updateDisplay(five.innerHTML)
  console.log(displayValue)
});

six.addEventListener("click", function() {
  displayValue = six.innerHTML
  updateDisplay(six.innerHTML)
  console.log(displayValue)
});

seven.addEventListener("click", function() {
  displayValue = seven.innerHTML
  updateDisplay(seven.innerHTML)
  console.log(displayValue)
});

eight.addEventListener("click", function() {
  displayValue = eight.innerHTML
  updateDisplay(eight.innerHTML)
  console.log(displayValue)
});

nine.addEventListener("click", function() {
  displayValue = nine.innerHTML
  updateDisplay(nine.innerHTML)
  console.log(displayValue)
});


function updateDisplay(value) {
  displayCurrent.innerHTML = value
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
