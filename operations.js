const operations = (a, b) => {
  return {
    sumResult: a + b,
    restResult: a - b,
    multiplicationResult: a * b,
    divideResult: a / b,
  };
};

module.exports = operations;
