// abababx
function match(str) {
  let state = start;
  for (const s of str) {
    state = state(s);
  }
  if (state === end) {
    return true;
  }
  return false;
}
function start(s) {
  if (s === 'a') {
    return foundA;
  }
  return start;
}
function foundA(s) {
  if (s === 'b') {
    return foundB;
  }
  return start(s)
}
function foundB(s) {
  if (s === 'a') {
    return foundA2;
  }
  return start(s);
}
function foundA2(s) {
  if (s === 'b') {
    return foundB2;
  }
  return start(s);
}
function foundB2(s) {
  if (s === 'a') {
    return foundA3;
  }
  return foundB(s);
}
function foundA3(s) {
  if (s === 'b') {
    return foundB3;
  }
  return start(s);
}
function foundB3(s) {
  if (s === 'x') {
    return end;
  }
  return foundB2(s);
}
function end() {
  return end;
}
console.log(match('abababx'));
console.log(match('abababc'));
console.log(match(''));
console.log(match('ababababx'));