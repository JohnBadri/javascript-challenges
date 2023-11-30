function numberRangeRecursion(start, end) {
  if (end === start) {
    return [end];
  }

  const num = numberRangeRecursion(start, end - 1);
  num.push(end);

  return num;
}

console.log(numberRangeRecursion(5, 20));
