function formatPhone(numArr) {
  return `(${numArr.slice(0, 3).join('')}) ${numArr
    .slice(3, 6)
    .join('')}-${numArr.slice(6).join('')}`;
}

console.log(formatPhone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
