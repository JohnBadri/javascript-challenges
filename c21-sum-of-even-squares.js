function sumEvenSquare(numArr) {
  return numArr
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
}

console.log(sumEvenSquare([-2, -1, 0, 1, 4, 3, 2, 5, 9]));
