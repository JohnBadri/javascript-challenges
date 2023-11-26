function findMaxNumber(arr) {
  return arr.sort((a, b) => a - b).pop();
}

console.log(findMaxNumber([1, 2, 5, 6, 7, 4, 5, 3, 14, 1]));
