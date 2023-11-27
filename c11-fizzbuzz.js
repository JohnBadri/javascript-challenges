function fizzBuzzArray(max) {
  const fizzBuzz = [];
  for (let i = 1; i <= max; i++) {
    i % 3 === 0 && i % 5 === 0
      ? fizzBuzz.push('FizzBuzz')
      : i % 5 === 0
      ? fizzBuzz.push('Buzz')
      : i % 3 === 0
      ? fizzBuzz.push('Fizz')
      : fizzBuzz.push(i);
  }
  return fizzBuzz;
}

console.log(fizzBuzzArray(15));
