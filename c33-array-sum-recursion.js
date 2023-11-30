function sumArrayRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return sumArrayRecursion(arr.splice(0, arr.length - 1)) + arr.pop();
}

console.log(sumArrayRecursion([1, 2, -100, 3, 4, 5, 10, 20, 100]));
