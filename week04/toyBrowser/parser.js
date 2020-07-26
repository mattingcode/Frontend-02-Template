const EOF = Symbol('EOF');
let tag = '';
let currentToken = null;
let currentAttribute = {};
let currentTextNode = null;
let stack = [{ type: 'document', children: [] }];
function emit(token) {
  let top = stack[stack.length - 1];
  if (token.type === 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attributes: []
    }
    element.tagName = token.tagName;
    for (let p in token) {
      if (p != 'type' && p != 'tagName') {
        element.attributes.push({
          name: p,
          value: token[p]
        })
      }
    }
    top.children.push(element);
    element.parent = top;
    currentTextNode = null;
    if (!token.isSelfClosing) {
      stack.push(element);
    }
    currentTextNode = null;
  } else if (token.type === 'endTag') {
    if (top.tagName !== token.tagName) {
      throw new Error('not top');
    } else {
      stack.pop();
    }
    currentTextNode = null;
  } else if (token.type === 'text') {
    if (currentTextNode === null) {
      currentTextNode = {
        type: 'text',
        content: ''
      }
      top.children.push(currentTextNode);
    }
    console.log(token.content);
    currentTextNode.content += typeof token.content === 'string' ? token.content : '';
  }
  console.log(token);
}
function data(c) {
  if (c === '<') {
    return tagOpen;
  } else if (c === EOF) {
    emit({
      type: 'text',
      content: c
    });
    return ;
  } else {
    console.log('text', c);
    emit({
      type: 'text',
      content: c
    })
    return data;
  }
}
function tagOpen(c) {
  if (c === '/') {
    return endTagOpen;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'startTag',
      tagName: ''
    }
    return tagName(c);
  } else {
    return ; 
  }
}
function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'endTag',
      tagName: ''
    }
    return tagName(c);
  } else if ( c === '>') {
    console.log(tag);
  } else if (c === EOF) {

  } else {

  }
}
function tagName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if ( c === '/') {
    return selfClosingStartTag;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName +=c;
    return tagName;
  } else if (c === '>') {
    emit(currentToken);
    return data;
  }
}
function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if ( c=== '/' || c ==='>' || c === EOF) {
    return afterArrtibuteName(c);
  } else if (c === '=') {
    return beforeAttributeName;
  } else {
    currentAttribute = {
      name: '',
      value: ''
    }
    return attributeName(c);
  }
}
function attributeName(c) {
  if (c.match(/^[\t\n\f ]$/) || c === '/' || c === '>' || c === EOF) {
    return afterAttributeName(c)
  } else if (c === '=') {
    return beforeAttributeValue;
  } else if (c  === '\u00000') {

  } else if (c === '\"' || c === '\'' || c === "<") {

  } else {
    currentAttribute.name +=c;
    return attributeName;
  }
}
function beforeAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/) || c === '/' || c === '>' || c === EOF) {
    return beforeAttributeValue;
  } else if (c === '\"') {
    return doubleQuotedAttributeValue;
  } else if (c === '\'') {
    return singleQuotedAttributeValue;
  } else if (c ==='>') {
    return data;
  } else {
    return UnquotedAttributeValue(c);
  }
}
function doubleQuotedAttributeValue(c) {
  if (c === '\"') {
    currentToken[currentAttribute.name] = currentAttribute.value;
    return afterQuotedAttributeValue;
  } else if (c === '\u0000') {

  } else if (c === EOF) {

  } else {
    currentAttribute.value += c;
    return doubleQuotedAttributeValue;
  }
}
function singleQuotedAttributeValue(c) {
  if (c === '\'') {
    currentToken[currentAttribute.name] = currentAttribute.value;
    return afterQuotedAttributeValue;
  } else if (c === '\u0000') {

  } else if (c === EOF) {

  } else {
    currentAttribute.value += c;
    return singleQuotedAttributeValue;
  }
}
function afterQuotedAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  }  else if (c === '/') {
    return selfClosingStartTag;
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value;
    emit(currentToken);
    return data;
  } else if (c === EOF) {

  } else {
    currentAttribute.value += c;
    return doubleQuotedAttributeValue;
  }
}
function UnquotedAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    currentToken[currentAttribute.name] = currentAttribute.value;
    return beforeAttributeName;
  } else if (c === '/') {
    currentToken[currentAttribute.name] = currentAttribute.value;
    return selfClosingStartTag;
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value;
    emit(currentToken);
    return data;
  } else if ( c === '\u0000') {

  } else if (c === '\"' || c === '\'' || c=== '<' || c=== '=' || c=== '`') {

  } else if ( c=== EOF) {
    
  } else {
    currentAttribute.value += c;
    return UnquotedAttributeValue;
  }
}
function selfClosingStartTag(c) {
  if (c === '>') {
    currentToken.isSelfClosing = true;
    return data;
  } else if (c ==='EOF') {

  } else {

  }
}
module.exports.parserHTML = function parseHTML(html) {
  stack = [{ type: 'document', children: [] }];
  let state = data;
  for (let c of html) {
    state = state(c);
  }
  state = state(EOF);
  console.log(stack[0]);
}