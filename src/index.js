let num1 = 0;
let operator = '+';
let num2 = 0;
let result = 0;

const addition = function(a, b) {
  return  a + b;
};

const subtraction = function(a, b) {
  return a - b;
};

const multiplication = function(a, b) {
  return a * b;
};

const division = function(a, b) {
  if (a <= 0) {
    return 'Error, cannot divide with 0!';
  } else {
    return a / b;
  }
};

const modulo = function(a, b) {
  return a % b;
}

const power = function(a, b) {
  return a ** b;
}

const squareRoot = function(a) {
  return Math.sqrt(a);
}

const operation = function(a, operator, b) {
  switch (operator) {
    case '+':
      result = addition(a, b);
      break;
      case '-':
      result = subtraction(a, b);
      break;
      case '*':
      result = multiplication(a, b);
      break;
      case '/':
      result = division(a, b);
      break;
      case '%':
      result = modulo(a, b);
      break;
      case 'x²':
      result = power(a, b);
      break;
      case '√':
      result = squareRoot(a);  
      break;
  }
};

operation(4, '√');

console.log(result)