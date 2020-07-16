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