function findNonRepeatingChar(str) {
  const arr = str.split('');
  let count;
  for (let i of arr) {
    count = arr.filter((item) => i === item).length;
    if (count === 1) {
      return i;
    }
  }
}

console.log(findNonRepeatingChar('aabbcceeexdd'));
