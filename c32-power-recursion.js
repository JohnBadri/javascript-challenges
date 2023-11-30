function powerRecursion(num, power) {
  if (power === 0) {
    return 1;
  }
  return powerRecursion(num, power - 1) * num;
}

console.log(powerRecursion(3, 4));
