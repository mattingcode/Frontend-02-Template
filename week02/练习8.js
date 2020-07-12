function UTF8_Encoding(str) {
  const res = [];
  let size = 0;
  for (let i =0; i< str.length; i++) {
    const s = str.charCodeAt(i);
    if (s > 0x00 && s<= 0x7f) {
      size += 1;
      res.push(s);
    } else if (0x80 <= s && s <= 0x7ff) {
      size += 2;
      res.push((192 | (31 & (s >> 6))));
    } else if ((0x800 <= s && s <= 0xd7ff)  || (0xe000 <= code && code <= 0xffff)) {
      size += 3;
      res.push((224 | (15 & (s >> 12))));
      res.push((128 | (63 & (s >> 6))));
      res.push((128 | (63 & s)))
    }
  }
  for (i = 0; i < res.length; i++) {
    res[i] &= 0xff;
  }
  return res;
}
console.log(UTF8_Encoding('matt'));
console.log(UTF8_Encoding('严'));