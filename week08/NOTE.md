定义
超文本标记语言(英语:HyperText Markup Language,简称:HTML)
语义
语法
合法元素
• element
• text
• comment
• documentType: <!Doctype html>
• ProcessingInstruction: <?a 1?>
• CDATA: <![CDATA[]]>
字符引用
• &#161
• &amp
• &it
• &quot
实体引用
字符
&lt;
<
&gt;
>
&amp;
&
&quot;
"
&apos;
'
DOM API
节点类
导航类操作
• parentNode 找到父节点
• childNodes 子节点
• firstChild 
• lastChild
• nextSibling
• previouseSibling
 下面的主要针对元素
• ParentElement
• children
• firstElementChild
• lastElementChild
• nextElementSibling
• previousElementSibling
修改操作
• appendChild
• insertbefore
• removeChild
• replaceChild
高级操作
• compareDocumentPosition 比较两个节点关系
• contains 检查一个节点是否包含另一个节点
• isEqualNode 检查两个节点是否完全相同
• isSameNode 检查两个节点是否是同一个节点
• cloneNode 复制一个节点
事件部分
冒泡与捕获
浏览器处理事件的机制，先捕获，再冒泡
为什么先捕获
点击的时候，需要计算点到的元素
range
从一个问题引申
把一个元素所有的子元素逆序
function reverseChildren(element) {
  var l = element.childNodes.length;
  while (l--) {
    element.appendChild(element.childNodes[l]);
  }
}
API(创建)
• range = new Range
• range.setStart(element, 9)
• range.setEnd(element, 4)
• range = document.getSelection().getRanngeAt(0)
• range.setStartBefore
• range.setEndBefore
• range.setStartAfter
• range.setEndAfter
• range.selectNode
• range.selectNodeContents
API(创建后使用)
• var fragment = range.extractContents()
• range.insertNode(document.createTextNode('aaaa'))
CSSOM
document.styleSheets
rules
• documennt.styleSheets[0].cssRules
• document.styleSheets[0].insertRule("p { color: pink }" ,0)
• document.styleSheets[0].removeRule(0)
CSSStyleRule
• selectorText String
• style K-V结构
getComputedStyle
window.getComputedStyle(elt, pseudoElt)
pueudoElt为可选，伪元素
CSSOM VIEW
window
• window.innerHeight,  window.innerWidth (viewport)
• window.outerWidth, window.outerHeight ( 浏览器窗口)
• window.devicePixelRatio
• window.screen
     window.screen.width
     window.screen.height
     window.screen.availWidth
     window.screen.availHeight
• window.open()
• moveTo(x, y)
• moveby(x, y)
• resizeTo(x, y)
• resizeBy(x,y)
scroll
• scrollTop
• scrollLeft
• scrollWidth
• scrollHeight
• scroll(x, y)
• scrollBy(x,y)
• scrollIntoView()
• window.scrollX
• window.scrollY
• scroll(x,y)
• scrollBy(x, y)
layout
• getClientRects()
实际上，该方法主要用于内联元素，内联元素有多少行，该方法返回的对象有多少个成员。这个方法主要用于判断行内元素是否换行，以及行内元素的每一行的位置偏移
• getoundingClienntRect()
其他api