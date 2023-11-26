function palindrome(str) {
  return str.toLowerCase() === str.split('').reverse().join('').toLowerCase()
    ? true
    : false;
}

console.log(palindrome('carrac'));
