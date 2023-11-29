function hashtagGenerator(str) {
  if (str === '' || str.length > 140) {
    return false;
  }
  const wordArr = [];

  str.split(' ').forEach((item) => {
    wordArr.push(item.charAt(0).toUpperCase() + item.slice(1));
  });

  return `#${wordArr.join('')}`;
}

console.log(hashtagGenerator(''));
