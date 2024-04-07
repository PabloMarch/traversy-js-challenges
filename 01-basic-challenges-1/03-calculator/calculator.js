const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

function calculator(a, b, operator) {
  return operators[operator](a, b);
}

module.exports = calculator;
