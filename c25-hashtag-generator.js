function hashtagGenerator(str) {
  const wordArr = [];

  str.split(' ').forEach((item) => {
    wordArr.push(item.charAt(0).toUpperCase() + item.slice(1));
  });

  return `#${wordArr.join('')}`;
}

console.log(hashtagGenerator('Javascript is awesome'));
