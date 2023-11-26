function titleCase(str) {
  let arr = str
    .split(' ')
    .map(
      (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    );
  return arr.join(' ');
}

console.log(titleCase('hello all you beautiful PEOPLE'));
