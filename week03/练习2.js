function StringToNumber(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res = res * 10 + (str[i] - '0');
  }
  return res;
}
console.log(StringToNumber('2321'));

function NumberToString(num) {
  let res = '';
  while (num) {
    const rest = num % 10;
    num = Math.floor(num / 10);
    res = `${rest}${res}`;
  }
  return res;
}
console.log(NumberToString(2321));