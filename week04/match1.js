function findA(str, a) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === a) {
      return i;
    }
  }
  return -1;
}
console.log(findA('abc', 'a'));