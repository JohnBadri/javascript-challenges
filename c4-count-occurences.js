function findOccurence(string, letter) {
  return string
    .toLowerCase()
    .split('')
    .filter((item) => item === letter.toLowerCase()).length;
}

console.log(findOccurence('DommmmmM', 'M'));
