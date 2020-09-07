var regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;
var dictionary = ['Number', 'Whitespace', 'LineTerminator', '*', '/', '+', '-'];

// function tokenize(source) {
//   var result = null;
//   while(true) {
//     result = regexp.exec(source);
//     if (!result) {
//       break;
//     }
//     for (let i = 1; i<= dictionary.length; i++) {
//       if (result[i]) {
//         console.log(dictionary[i-1]);
//       }
//     }
//     console.log(result);
//   }
// }
function* tokenize(source) {
  var result = null;
  var lastIndex = 0;
  while (true) {
    lastIndex = regexp.lastIndex;
    result = regexp.exec(source);
    if (!result) {
      break;
    }
    if (regexp.lastIndex - lastIndex > result[0].length) {
      break;
    }
    let token = {
      type: null,
      value: null
    };
    for (let i = 1; i <= dictionary.length; i++) {
      if (result[i]) {
        token.type = dictionary[i-1];
      }
    }
    token.value = result[0];
    yield token;
  }
  yield {
    type: 'EOF'
  }
}
let source = [];
for (let token of tokenize('10 * 2 / 2')) {
  if (token.type !== 'Whitespace' && token.type !== 'LineTenminator') {
    source.push(token);
  }
}
console.log(source);
function Expression(tokens) {

}
function AdditiveExpression(source) {

}
function MultiplicativeExpression(source) {
  if (source[0].type === 'Number') {
    let node = {
      type: 'MultiplicativeExpression',
      children: [source[0]]
    }
    source[0] = node;
    return MultiplicativeExpression(source);
  }
  if (source[0].type === 'MultiplicatvieExpression' && source[1] && source[1].type === '*') {
    let node = {
      type: 'MultiplicativeExpression',
      operator: '*',
      children: []
    }
    node.children.push(source.shift());
    node.children.push(source.shift());
    node.children.push(source.shift());
    source.unshift(node);
    return MultiplicativeExpression(source);
  }
  if (source[0].type === 'MultiplicativeExpression' && source[1] && source[1].type ==='/') {
    let node = {
      type: 'MultiplicativeExpression',
      operator: '/',
      children: []
    }
    node.children.push(source.shift());
    node.children.push(source.shift());
    node.children.push(source.shift());
    source.unshift(node);
    return MultiplicativeExpression(source);
  }
  if (source[0].type === 'MultiplicativeExpression') {
    return source[0];
  }
  return MultiplicativeExpression(source);
}
// for (let token of tokenize('1024 + 10 * 25')) {
//   console.log(token);
// }
// tokenize('1024 + 10 * 25');
console.log(MultiplicativeExpression(source));