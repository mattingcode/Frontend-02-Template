function UTF8_Encoding(str) {
  const res = [];
  for (let i =0; i< str.length; i++) {
    const charCode = str.charCodeAt(i);
    console.log(charCode);
    res.push(charCode);
  }
  return res;
}
console.log(UTF8_Encoding('matt'));