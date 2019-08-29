function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function power(num1, num2) {
  return Math.pow(num1, num2);
}

function root(num1, num2) {
  return Math.pow(num1, 1 / num2);
}

function operate(operator, num1, num2) {

  switch (operator) {
    case "subtract":
      return subtract(num1, num2);
      break;
    case "add":
      return add(num1, num2);
      break;
    case "multiply":
      return multiply(num1, num2);
      break;
    case "divide":
      if (num2 == 0) {
        return "Universe Meltdown D:"
      } else {
        return divide(num1, num2);
      }
      break;
    case "power":
      return power(num1, num2);
      break;
    case "square":
      return root(num1, num2);
      break;
  }
}

var display = "";
var num1;
var operator;
var num2;
var reset = false;



var numsquare = document.getElementsByClassName("numsquare");
for (var i = 0; i < numsquare.length; i++) {
  numsquare[i].addEventListener('click', displayValue);
}

function displayValue() {
  if (reset == true) {
    display = "";
    reset = false;
  }
  display = display + this.innerHTML;
  document.getElementById("result").innerHTML = display;
}

document.getElementById("dot").addEventListener('click', function() {
  if (!display.includes(".")) {
    display = display + this.innerHTML;
    document.getElementById("result").innerHTML = display;
  }
});

document.getElementById("clear").addEventListener('click', function() {
  display,
  num1,
  num2,
  operator = "";
  reset = false;
  document.getElementById("result").innerHTML = "";
});

var opsquare = document.getElementsByClassName("opsquare");
for (var i = 0; i < opsquare.length; i++) {
  opsquare[i].addEventListener('click', function() {
    num1 = document.getElementById("result").innerHTML;
    operator = this.id;
    display = "";
    document.getElementById("result").innerHTML = this.innerHTML;
  });
}

function calculate() {
  num2 = document.getElementById("result").innerHTML;
  display = operate(operator, Number(num1), Number(num2))
  document.getElementById("result").innerHTML = display;
}

document.getElementById("equal").addEventListener('click', function() {
  calculate();
  num1, operator = "";
  reset = true
});

document.getElementById("backspace").addEventListener('click', function() {
  var array = display.split('')
  array.pop()
  display = array.join('');
  document.getElementById("result").innerHTML = display;
});
