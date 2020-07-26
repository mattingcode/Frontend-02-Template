function match(str) {
  let state = start;
  for (let c of str) {
    state = state(c);
  }
  return state === end;
}
function start(c) {
  if (c === 'a') {
    return foundA;
  } else return start(c);
}
function end() {
  return end;
}
function foundA(c) {
  if (c === 'b') {
    return foundB;
  } else {
    return start(c);
  }
}
function foundB(c) {
  if (c === 'c') {
    return end;
  } else {
    return start(c);
  }
}
console.log(match('abc'));
console.log(match('ab'));