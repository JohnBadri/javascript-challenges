function highestScoringWord(str) {
  let highestTotal = 0;
  let highestWord;
  str
    .toLowerCase()
    .split(' ')
    .forEach((element) => {
      let total = 0;
      for (let i = 0; i < element.length; i++) {
        total = total + element.charCodeAt(i) - 96;
      }
      if (highestTotal <= total) {
        highestTotal = total;
        highestWord = element;
      }
    });

  return highestWord;
}

console.log(highestScoringWord('what time are we climbing up the volcano'));
