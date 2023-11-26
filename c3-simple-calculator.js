function simpleCalculator(a, b, op) {
  return op === '+'
    ? a + b
    : op === '-'
    ? a - b
    : op === '*'
    ? a * b
    : op === '/'
    ? a / b
    : 'Please ensure you utilise these operands +, -, *, /';
}

console.log(simpleCalculator(10, 10, '-'));
