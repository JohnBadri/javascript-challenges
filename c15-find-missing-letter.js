function findMissingLetter(word) {
  let start = word[0].charCodeAt(0);

  for (let i = 0; i < word.length; i++) {
    const current = word[i].charCodeAt(0);

    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return 1;
}

console.log(findMissingLetter(['a', 'b', 'd']));
