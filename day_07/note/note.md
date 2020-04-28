# `HTML5`新特性 -- `SVG`

# 1.`SVG`

## 1.1 什么是`SVG`?

`SVG`（`Scalable Vector Graphics`）,可缩放的矢量图形，是**基于`XML`语法**的2D矢量图形格式

`SVG`由`W3C`制定和维护，是一个开放标准。(https://www.w3.org/Graphics/SVG/)

## 1.2 `SVG`与`Canvas`的区别

|          | `SVG`                      | `Canvas`               |
| -------- | -------------------------- | ---------------------- |
| 分辨率   | 矢量图形，不依赖于分辨率   | 位图图形，依赖于分辨率 |
| 事件处理 | 支持事件处理               | 不支持事件处理         |
| 应用方向 | 适合带有大型渲染区域的应用 | 适合图像密集型的游戏   |

### 1.3 `SVG`的应用场景

• 地图

• 图表（`ECharts`）

## 1.4 `SVG`的使用方式

### • `<img>`元素

```javascript

<img src="SVG文件URL地址">

```

## • `CSS`中 `background-image`属性

```css

selector{
	background-image:url(SVG文件URL地址);
	...
}

```

### • `<object>`元素

```html

<object type="MIME类型" data="URL地址">
    对不起，您的浏览器版本过低，请下载最新版浏览器
</object>
```

> `SVG`文件的`MIME`类型是：`image/svg+xml`

### • `<embed>`元素

```html

<embed src="URL地址" type="MIME类型" width="宽度" height="高度">
	对不起，您的浏览器版本过低，请下载最新版浏览器
</embed>

```

### • `<iframe>`元素

```html

<iframe src="URL地址" width="宽度" height="高度">
</iframe>

```

### • `svg`元素

```html

<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    ...
</svg>

```

> `XMLNS`称为XML命名空间(` Namespace`)，命名空间用于解决标记名称冲突。
>
> `DTD`（ `Document Type Definitions`）,文档类型声明

## 1.5 `SVG`格式

### • `SVG`文档格式

```xml

<?xml version="1.0" encoding="编码方式"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"         "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    ...
</svg>

```

### • `SVG`元素

```html

<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    ...
</svg>

```

# 2.`SVG`元素

## 2.1 `SVG`元素属性

• `stroke`属性用于控制描边的颜色

• `stroke-width`属性用于控制描边的宽度

• `fill`属性用于控制填充颜色

• `font-size`属性用于控制字号

• `rotate`属性用于控制旋转角度

## 2.2 图形元素

### • `<line>`元素

`<line>`元素用于绘制线条，语法结构是：

```html

<line x1="start_x" y1="start_y" x2="end_x" y2="end_y">

```

### • `<polyline>`元素

`<polyline>`元素用于绘制开放的折线，其语法结构是：

```html

<polyline points="x1,y1,x2,y2,x3,y3,..."></polyline>

```

### • `<rect>`元素

`rect`元素用于绘制（圆角）矩形，其语法结构是：

```html

<rect x="start_x" y="start_y" width="width" height="height" rx="rx" ry="ry">
</rect>

```

### • `<polygon>`元素

 `<polygon>`元素用于绘制多边形，其语法结构是：

```html

<polygon points="x1,y1,x2,y2,x3,y3,..."></polygon>

```

### • `<text>`元素

`<text>`元素用于绘制文本图形，其语法结构是：

```html

<text x="start_x" y="start_y">...</text>

```

### • `<a>`元素

 `<a>`元素用于实现链接，其语法结构是：

```html

<a xlink:href="目标文档URL" target="窗口形式">
	...
</a>

```

### • `<cirlce>`元素

`<cirlce>`元素用于绘制圆形，其语法结构是：

```html

<circle cx="center_x" cy="center_y" r="radius"></circle>

```

### • `<image>`元素

`<image>`元素用于绘制图像资源，其语法结构是：

```html

<image x="start_x" y="start_y" xlink:href="图像URL地址">
</image>

```

`SVG Edit`域名是：https://svg-edit.github.io/svgedit/editor/svg-editor.html

## 2.3 `SVG DOM`

`SVG DOM`是`XML DOM`的组成部分，也就意味着其无法使用`HTML DOM`的任何属性和方法。

`DOM`分为 `DOM Core`、`HTML DOM`、`XML DOM`

https://www.w3.org/TR/DOM-Level-3-Core/

### • 获取元素

```javascript

document.getElementById(string id)

document.querySelector(string selector)

document.querySelectorAll(strin selector)

document.getElementsByTagName(string tagName)

document.getElementsByClassName(string className)

```

### • 创建元素

```javascript

document.createElementNS(namespace,tagName)

```

### • 获取/设置属性

```javascript

Element.getAttribute(attributeName)

Element.setAttribute(attributeName,value)

```

### • 增加/删除元素

```javascript

Element.appendChild(subElement)

Element.removeChid(subElement)

```

> https://oreillymedia.github.io/Using_SVG/guide/DOM.html

# 3.`ECharts`

### 3.1 概述

`ECharts`（`Enterprise Charts`）,商业级数据图表，是百度开发的开源的数据可视化工具。`ECharts`是一个纯`JavaScript`的图表库，能够在`PC`端和移动端运行。

## 3.2 下载

### • 浏览器客户端

https://www.echartsjs.com/zh/download.html

### • `npm`

```shell

npm install --save echarts

```

## 3.3 图表术语

### • 实例

一个网页中可以创建多个 `echarts 实例`。每个 `echarts 实例` 中可以创建多个图表和坐标系等等（用 `option` 来描述）。准备一个 `DOM` 节点（作为 `echarts` 的渲染容器），就可以在上面创建一个 `echarts` 实例。每个 `echarts` 实例独占一个 `DOM` 节点。

![multiple-ec-instance](E:\www\Material\WEBTN1912\15_HTML5\Day07\note\assets\multiple-ec-instance.jpg)

### •  系列

在 `echarts` 里，系列（`series`）是指：一组数值以及他们映射成的图。

![series-all-a](E:\www\Material\WEBTN1912\15_HTML5\Day07\note\assets\series-all-a.jpg)

### • 组件

在系列之上，`echarts` 中各种内容，被抽象为“组件”。

![components](E:\www\Material\WEBTN1912\15_HTML5\Day07\note\assets\components.jpg)

## 3.4 `ECharts`的使用步骤

A、在`HTML`页面中通过`<script>`标签引入`ECharts`的脚本文件

B、在`HTML`页面中准备一个`HTML`元素（通常时`DIV`元素），其将作为`ECharts`的渲染容器

C、书写`<script>`标签，通过`echarts`对象的`init()`方法**创建图表实例**

> 只要通过`<script>`标签引入`ECharts`的脚本文件后，将自动存在`echarts`对象。
>
> `init()`方法的语法结构是：
>
> ```javascript
> 
> var instance = echarts.init(HTMLElement,them?,{
>                             renderer:'canvas|svg'}
>                );
> 
> ```

D、通过**图表实例**的`setOption()`方法将配置项添加到图表图例，`setOption()`方法的语法结构是：

```javascript

instance.setOption({...})

```

> 配置项的数据类型为`object`

## 3.5 配置项

### • `title`组件

`title`组件是标题组件，用于设置主标题及副标题的相关信息

```javascript

title:{
	text:'主标题文本(string)',
    link:'主标题链接(string)',
    target:'主标题链接的窗口形式(blank|self)',
    subtext:'副标题文本(string)',
    sublink:'副标题链接(string)',
    subtarget:'副标题链接的窗口形式(blank|self)',
}

```

### • `xAxis`组件

`xAxis`组件用于控制图表的`X`坐标轴

```javascript

xAxis:{
    //该类型时必须通过 data 设置类目数据
	type:'X坐标轴的类型(category|value)',
    data:格式见下方,
    position:'X坐标轴的位置(top|bottom)'
}

```

```javascript
//data的数据格式有两种：

//第一：数组，如

data:['家用电器','手机数码','电脑办公','家居家具','男装女装'];

//第二：数组对象，如
data:[
    '家用电器',
    '手机数码',
    {
    	value:'电脑办公',
        textStyle:{
            fontFamily:'Microsoft Yahei',
            fontSize:16,
            color:'#f00'
        }
    },
    '家居家具',
    '男装女装'
];


```

### • `yAxis`组件

`yAxis`组件用于控制图表的`Y`坐标轴

### • `series`组件

`series`组件表示系列列表，每个系列的`type`属性决定了自己的图表类型，语法结构是：

```javascript

series:[
	{
		type:'系列类型(line|bar|pie)',
        data:[数据内容数组(array)](格式如下),
        //文本标签
        label:{
            show:true
        }
	},
    {
		type:'系列类型(line|bar|pie)',
        data:[数据内容数组(array)],
        //文本标签
        label:{
            show:true
        }
	}
	...
]

```

`data`的数据格式可以为：

```javascript

//数组
series:[
    //柱形图
    {
        type:'bar',
        data:[180,300,210,199,370]
    }
]

//数组对象
series:[
    //柱形图
    {
        type:'bar',
        data:[
            {
                name:'名称',
                value:'值'
            },
            {
                name:'名称',
                value:'值'
            },
        ]
    }
]

```

### • `tooltip`组件

`tooltip`组件用于控制提示框，其语法结构：

```javascript

tooltip:{
	show:true
}

```

### • `toolbox`组件

`toolbox`组件用于控制工具箱，其语法结构：

```javascript

toolbox:{
	feature:{
		//保存图片
		saveAsImage:{
			show:true
		}
	}
}


```

