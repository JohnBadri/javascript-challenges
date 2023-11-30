function reverseStringRecursion(str) {
  if (str === '') {
    return '';
  }

  return reverseStringRecursion(str.substring(1)) + str[0];
}

console.log(reverseStringRecursion('Hello World!'));
