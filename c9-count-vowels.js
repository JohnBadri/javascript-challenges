function countVowels(str) {
  return str
    .toLowerCase()
    .split('')
    .filter((item) => /[aeiou]/.test(item)).length;
}

console.log(countVowels("Check how many vowels, it's eight"));
