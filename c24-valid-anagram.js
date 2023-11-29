function validAnagram(str, strTwo) {
  return str.split('').sort().join('') == strTwo.split('').sort().join('')
    ? true
    : false;
}

console.log(validAnagram('astronomer', 'moonstarer'));
