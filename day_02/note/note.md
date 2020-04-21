# `HTML5` 新特性 `Canvas`


# 1.`Canvas`

## 1.1 什么是`canvas`?

`canvas`是一个可以通过脚本语言（主要指`JavaScript`）来绘制图形的`HTML`元素，语法结构是：

```html

<canvas width="宽度" height="高度">
</cavas>

```

> `<canvas>`元素默认的宽度为`300`像素，高度为`150`像素
>
> `<canvas>`元素可以通过`CSS`样式来进行修饰，**但一定避免修改其宽度和高度的样式**，可通过以下方式实现：
>
> - 直接在`<canvas>`标签中书写`width`和`height`属性进行修改
> - 直接通过`HTMLCanvasElement`的`width`和`height`属性进行修改

## 1.2 `canvas`有什么用？

- 数据可视化，如百度的`ECharts`
- 游戏画面
- `Banner`广告 

## 4.3 `HTMLCanvasElement`

### • 概述

`HTMLCanvasElement`接口提供用于操纵`canvas`元素布局的属性和方法

`HTMLCanvasElement`接口继承自`HTMLElement`接口

![image-20200418175049544](E:\www\Material\WEBTN1912\15_HTML5\Day02\note\assets\image-20200418175049544.png)

### • 属性

#### •  `width`

`width`属性用于获取/设置`<canvas>`元素的宽度，其语法结构是：

```javascript

//获取
variable = HTMLCanvasElement.width

//设置
HTMLCanvasElement.width = number value

```

#### • `height`

`height`属性用于获取/设置`<canvas>`元素的高度，其语法结构是：

```javascript

//获取
variable = HTMLCanvasElement.height

//设置
HTMLCanvasElement.height = number value

```

### • 方法

#### • `getContext()`

`getContext()`方法用于返回`canvas`的上下文对象，如果没有定义上下文将返回`null`，其语结构是：

```javascript

HTMLCanvasElement.getContext(string contextType)

```

> 上下文类型的取值有：
>
> `2d`，此时将建立一个`Canva··sRenderingContext2D`对象，是一个二维渲染对象
>
> `webgl`，此时将建立 一个`WebGLRenderingContext`对象，是一个三维渲染对象

# 2.`CanvasRenderingContext2D`对象

## 2.1 绘制矩形

### •  `strokeRect()`方法

`strokeRect()`方法用于绘制矩形框，其语法结构是：

```javascript

CanvasRenderingContext2D.strokeRect(x,y,width,height)

```

### • `fillRect()`方法

`fillRect()`方法用于绘制填充矩形，其语法结构是：

```javascript

CanvasRenderingContext2D.fillRect(x,y,width,height)

```

### • `clearRect()`方法

`clearRect()`方法用于擦除指定区域所绘制的内容，其语法结构是：

```javascript

CanvasRenderingContext2D.clearRect(x,y,width,height)

```

## 2.2 描边与填充

### • `strokeStyle`属性

`strokeStyle`属性用于设置描边颜色，默认为`#000`，其语法结构是：

```

CanvasRenderingContext2D.strokeStyle = string color

```

> 关于`color`的写法与`CSS`中的颜色表示方法是相同的

### • `fillStyle`属性

`fillStyle`属性用于设置填充矩形，默认为`#000`，其语法结构是：

```javascript

CanvasRenderingContext2D.fillStyle = string color

```

### 2.3 文本

### • `strokeText()`方法

`strokeText()`方法用于绘制描边文本，其语法结构是：

```javascript

CanvasRenderingContext2D.strokeText(text,x,y)

```

### • `fillText()`方法

`fillText()`方法用于绘制填充文本，其语法结构是：

```javascript

CanvasRenderingContext2D.fillText(text,x,y)

```

### •  `font`属性

`font`属性用于设置文本样式，默认样式为`10px sans-serif`，语法结构是：

```javascript

CanvasRenderingContext2D.font = string value

```

> 文本样式采用与`CSS`中`font`属性相同的规范

### • `textAlign`属性

`textAlign`属性用于设置文本的对齐方式，其语法结构是：

```javascript

CanvasRenderingContext2D.textAlign = 'left | center | right'

```

### • `measureText()`方法

`measureText()`方法将返回`TextMetrics `对象，其语法结构是：

```javascript

TextMetrics  CanvasRenderingContext2D.measureText(string text)

```

> `TextMetrics`对象包含`width`属性，将表示文本内容的宽度

# 3.`window`对象

## • `requestAnimationFrame()`方法

`window.requestAnimationFrame()`方法用于在浏览器中定时循环操作的一个接口，类似于`window.setTimtout()`方法，主要用途是按帧对于网页进行重绘，其优势在于充分利用显示器的刷新机制（显示器有固定的刷新频率，一般为60Hz/75Hz，也就是代表每秒重绘60/75次）,与刷新频率保持一致。除此之外，如果使用该方法的话，一旦页面不处于浏览器的当前标签，则会自动停止刷新，以节省`CPU`，其语法结构是：

```javascript

int window.requestAnimationFrame(callback)

```

> 返回值代表该方法产生的唯一`ID`，该`ID`可以带入到`window.cancelAnimationFrame()`方法中，以取消回调函数的执行
>
> 优点：
>
> 1. 与显示刷新频率保持一致，不会出现卡顿、丢帧等现象
> 2. 如果标签页不是浏览器当前标签页的话，自动停止刷新，以节省`CPU`







