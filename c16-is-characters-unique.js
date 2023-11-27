function isUnique(str) {
  const arr = Array.from(new Set(str)).join('');
  return arr === str ? true : false;
}

console.log(isUnique('abdc'));
