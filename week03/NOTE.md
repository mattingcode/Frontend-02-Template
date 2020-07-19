## 类型转换
- 基本转换
   - number 0 false 其他 true
   - string '' 与非 ''
   - undefined转numeber是NaN, null转Number是0
- 拆箱转换
  - ToPremitive 
  - toString vs valueOf
  - Symbal.toPrimitive

- 装箱转换
  - Number new Number()
  - String new String()
  - Boolean new Boolean()
  - Symbol new Object(Symbol('a'))

## js 语句
- Completion Record
  - [[type]] normal break continue return throw
  - [[value]] 基本类型
  - [[target]] label
- 简单语句
  - expressionStatement 表达式语句
  - EmptyStatement 单独一个分号
  - DebuggerStatement 触发debugger断点
  - ThrowStatement
  - ContinueStatement
  - BreakStatement
  - ReturnStatement
- 复合语句
  - BlockStatement
  - IfStatement
  - SwitchStatement
  - IterationStatement
    - while
    - do while
    - for(; ;)
    - for( in )
      遍历索引
    - for ( of )
      遍历值
  - WithStatement
  - LabelledStatement
  - TryStatement

- 声明
  - FunctionDeclaration
  - GeneratorDeclaration
  - AsyncFunctionDeclaration

## 宏任务和微任务

- js执行颗粒度，在运行时的表示
  - 宏任务
  - 微任务（promise）
  - 函数调用
  - 语句/声明（completion record）
  - 表达式
  - 直接量/变量/this...
- 宏观任务
  - 宿主环境给js引擎一段代码，引擎把代码执行，这个任务就是宿主发起的任务叫宏观任务
- 微观任务
  - 在ES5引入promise之后，即在宿主发起执行任务后，由引擎自己发起并执行的任务叫微观任务，在js里面只有Promise会产生微任务
- 事件循环本身不属于js语言本身的内容
- 为什么Promise 里的代码比setTimeout先执行
  - Promise永远往队列尾部添加微观任务
  - setTImeout等宿主API则会直接添加宏观任务

## 函数调用

- js 每个函数都会生成闭包
- js里面每个函数都会带一个它定义时的Environment Record,保存在自己对象身上，变成一个属性
```
var y = 2;
function foo2 () {
console.log(y)
}
export foo2
```
- 不管foo2会被传到哪里去，都会带上y
- 闭包分成两个部分
  - 代码部分
  - 环境部分
    - Object
    - 变量序列