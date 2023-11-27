function findMissingNumber(numArr) {
  numArr.sort((a, b) => a - b);
  for (let i = 1; i <= numArr.length; i++) {
    if (i !== numArr[i - 1]) {
      return i;
    }
  }
  return 1;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 11, 5]));
