function ipv4Validate(str) {
  const numArr = str.split('.');

  for (const number of numArr) {
    if (
      number < 0 ||
      number > 255 ||
      numArr.length !== 4 ||
      Number(number.charAt(0)) === 0
    ) {
      return false;
    }
  }
  return true;
}

console.log(ipv4Validate('224.213.11.1'));
