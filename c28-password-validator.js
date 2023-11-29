function passwordValidator(str) {
  const lowerCase = /[a-z]/.test(str);
  const upperCase = /[A-Z]/.test(str);
  const numCheck = /[0-9]/.test(str);

  return lowerCase && upperCase && numCheck && str.length > 7 ? true : false;
}
console.log(passwordValidator('Password123'));
