# 学习笔记
## 一、编程语言基本知识
### 语言分类
- 非形式语言
- 形式语言（乔姆斯基谱系）
  - 0型 无限制文法
  - 1型 上下文相关文法
  - 2型 上下文无关文法
  - 3型 正则文法
### BNF产生式
四则运算
```
<MultiplicativeExpression>::=<Number>| <MultiplicativeExpression>"*"<Number>| <MultiplicativeExpression>"/"<Number>| <AddtiveExpression>::=< MultiplicativeExpression>| <AddtiveExpression>"+"<MultiplicativeExpression>| <AddtiveExpression>"-"<MultiplicativeExpression>| 
```
## 二、语言分类
- 形式语言-用途
  - 数据描述语言
  - 编程语言
- 形式语言-表达方式
  - 声明式语言
  - 命令式语言

## 三、 编程语言的性质
### 图灵完备性
### 动态与静态
  - 动态， 用户设备上
  - 静态， 程序员设备上
### 类型系统

### 一般命令式编程语言的设计方式

  - Atom(关键字，直接量，变量名)
    - Identifier
    - Literal
  - Expression：原子级的这些结构通过运算符相连接加上一些辅助的符号
    - Atom
    - Operator
    - Punctuator
  - Statement：表达式加上特定的标识符和一些特定的关键字和符号形成一定的结构我们称之为语句
    - Expresion
    - Keyword
    - Punctuator
  - Structure：结构化帮助我们组织代码，把代码分成不同的块，达到分成不同的复用结构
    - Function
    - Class
    - Process
    - Namespace
  - Program：组织代码
    - Program
    - Module 
    - Package
    - Library

  ## 四、js类型
  ```
  number、string、bool、null、undefined、object、symbol、（bigint）
  ```

  ### number
  采用双精度浮点法表示,可能会存在e的误差
  
  测试地址
  http://weitz.de/ieee/

  - sign（1）
  - exponent(11) 指数位
  - Fraction(52)  精度位

  精度位一定是以1开头，所以最多有2^53 -1
  指数位存在偏移、需要+1023

  ### string
  - ASCII
  - Unicode
  - UCS
  - GB
    - GB2312
    - GBK(GB13000)
    - GB18030
  - ISO-8859
  - BIG5

  ### boolean
  true、false

  ### null undefined
  - null是关键字 typeof null 是Object
  - undefined不是关键字，表示未定义，可以用void 0 产生

  ### object
  - 原型链，如果对象本身查不到某个属性，会从原型中查找，如果找不到且原型存在原型，会继续查找，知道原型为null
  - 基于原型的对象API
    - Object.defineProperty
    - Object.create / Object.setPrototypeOf / Object.getPrototypeOf
    - new / class / extends
    - new / function / prototype 不建议用
  - Function

    用JavaScript中的function关键字、箭头运算符或者Function构造器创建的对象，会有[[call]]这个内置行为。
    调用f()会触发，但是平时直接取取不到

  - special Object
    - 数组对象 [[length]]会变
    - Object.property [[setPropertyOf]]
  - Host Object
    
  ### symbol
  对象的属性，独一无二
