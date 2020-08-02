学习笔记
# 浏览器

URL --HTTP--> HTML --parse--> DOM --css computing--> DOM with CSS --layout--> DOM with position --render--> Bitmap

# CSS计算

```
第一步：收集CSS规则
1、遇到style标签时，把CSS规则保存起来
2、调用CSS parse分析CSS规则
3、研究使用的npm包css分析CSS规则的格式

第二步：添加调用
1、创建元素时立即计算CSS
2、分析元素对应的CSS规则且收集完毕
3、真实浏览器body style需重新计算CSS

第三步：获取父元素序列
1、computeCSS中必须获取父元素才能判断元素与规则是否匹配
2、从stack中获取本元素的所有父元素
3、由于首先获取的是当前元素，所以获得和计算父元素匹配顺序从内向外

第四步：选择器与元素匹配
1、选择器也要从当前元素向外排列
2、复杂选择器拆成针对单个元素的选择器，使用循环匹配父元素队列

第五步：计算选择器与元素匹配
1、根据选择器的类型和元素的属性计算是否当前元素匹配
2、实际的浏览器中要处理复合选择器

第六步：生成computed属性
1、选择器匹配上之后将选择器应用到元素上形成computedStyle

第七步：specificity的计算逻辑--优先级计算
1、CSS规则根据specificity和后来有限规则覆盖
2、specificity是一个四元数组，越左边权重越高
3、一个CSS规则的specificity根据包含的简单选择器相加而成

第八步：排版
1、根据浏览器属性进行排版--layout
2、收集元素
3、计算主轴
4、计算交叉轴

第九步：渲染绘制元素
1、绘制依赖图形环境--npm包images
2、绘制在viewport上进行
3、绘制相关属性
```