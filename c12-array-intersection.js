function arrayIntersect(arrayOne, arrayTwo) {
  const newArr = [];
  arrayOne.forEach((element) => {
    if (arrayTwo.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(
  arrayIntersect([1, 2, 3, 4, 5, 6, 'hello'], [4, 'hello', 5, 6, 7, 8, 9])
);
