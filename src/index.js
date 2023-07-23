let currentInput = '';
let firstInput = '';
let secondInput = '';
let result = '';

// Query Selectors
const displayScreen = document.querySelector('#display');
const clearBtn = document.querySelector('#clear');
const delBtn = document.querySelector('#delete');
const allCalcBtns = document.querySelectorAll('.calc-btns');
const addOperatorBtn = document.querySelector('#add-op');
const subOperatorBtn = document.querySelector('#subtract-op');
const mulOperatorBtn = document.querySelector('#multiply-op');
const divOperatorBtn = document.querySelector('#divide-op');
const modOperatorBtn = document.querySelector('#modulo-op');
const powerOpBtn = document.querySelector('#power-op');
const sqrtOpBtn = document.querySelector('#sqrt-op');
const equalsBtn = document.querySelector('#equals');
const splitterBtn = document.querySelector('#splitter');

// Event Listeners
clearBtn.addEventListener('click', clearDisplay);
delBtn.addEventListener('click', deleteLastInput);
allCalcBtns.forEach((button) => {
  button.addEventListener('click', showDisplayInput);
});


function showDisplayInput(event) {
  let target = event.target;

  if (target.className === 'calc-btns') {
    displayScreen.textContent += target.textContent;
    currentInput = target.textContent;
  }
}





function deleteLastInput() {
  currentInput = displayScreen.textContent;
  currentInput = currentInput.slice(0, -1);
  displayScreen.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  firstInput = '';
  secondInput = '';
  displayScreen.textContent = '';
}


const addition = function(num1, num2) {
  return  num1 + num2;
};

const subtraction = function(num1, num2) {
  return num1 - num2;
};

const multiplication = function(num1, num2) {
  return num1 * num2;
};

const division = function(num1, num2) {
  if (num1 <= 0) {
    return 'Error, cannot divide with 0!';
  } else {
    return num1 / num2;
  }
};

const modulo = function(num1, num2) {
  return num1 % num2;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const squareRoot = function(num) {
  return Math.sqrt(num);
};

const operate = function(num1, operator, num2) {
  switch (operator) {
    case '+':
      result = addition(num1, num2);
      break;
    case '-':
      result = subtraction(num1, num2);
      break;
    case '*':
      result = multiplication(num1, num2);
      break;
    case '/':
      result = division(num1, num2);
      break;
    case '%':
      result = modulo(num1, num2);
      break;
    case 'x²':
      result = power(num1, num2);
      break;
    case '√':
      result = squareRoot(num1);  
      break;
    default:
      return 'Something went wrong!';
  }
  return result;
};