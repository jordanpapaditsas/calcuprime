let operator = '';
let result = 0;

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

const operation = function(num1, operator, num2) {
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
  }
};

operation(125, 'x²', 1/3);

console.log(result);