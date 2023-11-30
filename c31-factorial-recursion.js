function factorialRecusion(num) {
  if (num < 2) {
    return 1;
  }

  return factorialRecusion(num - 1) * num;
}

console.log(factorialRecusion(5));
