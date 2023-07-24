let currentInput = '';
let firstInput = '';
let operator = '';
let result = '';

// Query Selectors
const displayScreen = document.querySelector('#display');
const clearBtn = document.querySelector('#clear');
const delBtn = document.querySelector('#delete');
const allCalcBtns = document.querySelectorAll('.calc-btn');
const addOperatorBtn = document.querySelector('#add-op');
const subOperatorBtn = document.querySelector('#subtract-op');
const mulOperatorBtn = document.querySelector('#multiply-op');
const divOperatorBtn = document.querySelector('#divide-op');
const modOperatorBtn = document.querySelector('#modulo-op');
const powerOperatorBtn = document.querySelector('#power-op');
const sqrtOperatorBtn = document.querySelector('#sqrt-op');
const equalsBtn = document.querySelector('#equals');
const splitterBtn = document.querySelector('#splitter');
const allOpBtns = document.querySelectorAll('.op-btn');

// Event Listeners
clearBtn.addEventListener('click', clearDisplay);
delBtn.addEventListener('click', deleteLastInput);
equalsBtn.addEventListener('click', showResults);
allCalcBtns.forEach((button) => {
  button.addEventListener('click', showDisplayInput);
});
addOperatorBtn.addEventListener('click', getAddition);
subOperatorBtn.addEventListener('click', getSubtraction);
mulOperatorBtn.addEventListener('click', getMultiplication);
divOperatorBtn.addEventListener('click', getDivision);
modOperatorBtn.addEventListener('click', getModulo);
powerOperatorBtn.addEventListener('click', getPower);
sqrtOperatorBtn.addEventListener('click', getSqrt);

function getSqrt(event) {
  let target = event.target;

  if (target && operator === '') {
    operator = '√';
    displayScreen.textContent = operator + currentInput;
    firstInput += currentInput;
    currentInput = '';
  }
} 

function getPower(event) {
  let target = event.target;

  if (target && operator === '') {
    operator = '^';
    displayScreen.textContent = currentInput + operator;
    firstInput += currentInput;
    currentInput = '';
  }
} 

function getModulo(event) {
  let target = event.target;

  if (target && operator === '') {
    operator = 'Mod';
    displayScreen.textContent = currentInput + operator;
    firstInput += currentInput;
    currentInput = '';
  }
} 

function getDivision(event) {
  let target = event.target;

  if (target && operator === '') {
    operator = '÷';
    displayScreen.textContent = currentInput + operator;
    firstInput += currentInput;
    currentInput = '';
  }

} 

function getMultiplication(event) {
  let target = event.target;

  if (target && operator === '') {
    operator = 'x';
    displayScreen.textContent = currentInput + operator;
    firstInput += currentInput;
    currentInput = '';
  }
}

function getSubtraction(event) {
  let target = event.target;

  if (target && operator === '') {
    operator = '-';
    displayScreen.textContent = currentInput + operator;
    firstInput += currentInput;
    currentInput = '';
  }
}

function getAddition(event) {
  let target = event.target;
 
  if (target && operator === '') {
    operator = '+';
    displayScreen.textContent = currentInput + operator;
    firstInput += currentInput;
    currentInput = '';
  } else if (target.className === 'allOpBtns' && operator === '+') {
    
  }
}

/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 *        The result from each operation. 
 */     
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

/**
 * 
 * @param {*} num1 
 * @param {*} operator 
 * @param {*} num2 
 * @returns 
 *          The final result from the operation that have been called, stored in the global variable 'result'
 *            and passed for using it with the showResult function.
 */
const operate = function(num1, operator, num2) {
  switch (operator) {
    case '+':
      result = addition(num1, num2);
      break;
    case '-':
      result = subtraction(num1, num2);
      break;
    case 'x':
      result = multiplication(num1, num2);
      break;
    case '÷':
      result = division(num1, num2);
      break;
    case 'Mod':
      result = modulo(num1, num2);
      break;
    case '^':
      result = power(num1, num2);
      break;
    case '√':
      result = squareRoot(num1);  
      break;
    default:
      return error = `Oups! An error occurred!`;
  }
  return result;
};

// Cleaner functions
function deleteLastInput() {
  currentInput = displayScreen.textContent;
  currentInput = currentInput.slice(0, -1);
  displayScreen.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  firstInput = '';
  result = '';
  displayScreen.textContent = '';
  operator = '';
}

// Utility functions
function showDisplayInput(event) {
  let target = event.target;

  if (target.className === 'calc-btn') {
    displayScreen.textContent += target.textContent;
    currentInput += target.textContent;
  }
}

function convertStringIntoNumber(input) {
  return parseFloat(input);
}

function showResults() {
  const num1 = convertStringIntoNumber(firstInput);
  const num2 = convertStringIntoNumber(currentInput);
  result = operate(num1, operator, num2);

  displayScreen.textContent = result;
  displayScreen.style.textAlign = 'center';
  firstInput = '';
  operator = '';
  currentInput = result;
}


