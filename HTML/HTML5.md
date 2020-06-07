# HTML5新特性

## 语义化标签

好处：

1. 有利于搜索引擎爬虫更好的理解我们的网页，从而提取需要的信息，提升网页权重。
2. 在没有CSS的时候能够清晰的看出网页的解构，增强可读性。
3. 便于团队的开发和维护，语义化的标签可以让开发者更容易的看明白，提升开发和维护的效率。
4. 支持多终端设备的浏览器渲染

标签：

`<header>`：文档头部区域

`<footer>`：文档尾部区域

`<main>`：文档主要内容

`<aside>`：通常用于侧边栏

`<nav>`：通常用于导航栏

`<section>`：文档中的一节

`<article>`：文章

`<time>`： 时间

...

## 增强型表单

新增`<input>`的输入特性，有更好的输入控制。

`color,date(),datetime,month,week,time,email,number,url,tel,search,range`

新增五个表单元素：

`<datalist>`：用户会在他们输入数据时看到域定义选项的下拉列表

`<progress>`：进度条

`<meter>`：刻度值

`<keygen>`：提供一种用于验证用户的方法，生成一个公钥和私钥

`<output>`：用于不同类型的输出

新增表单属性：

`placeholder`：默认提示文字

`required`：要求输入是否为空

`pattern`：正则表达式，验证输入的值

`min/max`：设置元素最小/最大值

`step`：步长

`height/width`：用于规定image类型的input的宽高

`autofocus`：自动获得焦点

`multiple`：规定元素可选取多个值

## 音频和视频

音频：`<audio src=""> </audio>`

```html
<audio controls> 
    <!-- controls添加播放暂停和音量的控件 -->
	<source src="" type="audio/ogg">
    <source src="" type="audio/mpeg">
    您的浏览器不支持audio，请升级成更高版本。
</audio>

```

视频：`<video src=""> </video>`

```html
<video width="320" height="240" controls> 
    <!-- controls添加播放暂停和音量的控件 -->
	<source src="" type="video/mp4">
    <source src="" type="video/ogg">
    您的浏览器不支持video，请升级成更高版本。
</video>

```

## Canvas

## SVG

## 地理定位

使用`getCurrentPosition()`来获取用户位置

```javascript
var x=document.getElementById("demo");
function getLocation(){
  if (navigator.geolocation){
    	navigator.geolocation.getCurrentPosition(showPosition);
	}else{
    x.innerHTML="Geolocation is not supported by this browser.";
	}
}
function showPosition(position){
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br />Longitude: " + position.coords.longitude;
}

```

## 拖放API

```html
<div draggable="true" ondragstart="drag(e)"></div>
<script>
	function drag(e){
        console.log(e)
    }
</script>

```

`ondragstart,ondrag,ondragenter,ondragover,ondragleave,ondrop,ondragend`

## Web Storage

分为`localStorage`和`sessionStorage`

`localStorage`：没有时间限制的数据存储

`sessionStorage`：浏览器关闭的时候清除

## WebSocket

WebSocket协议为web应用程序客户端和服务端之间提供了一种全双工通信机制。

特点：

 （1）握手阶段采用HTTP协议，默认端口是80和443

 （2）建立在TCP协议基础之上，和http协议同属于应用层

 （3）可以发送文本，也可以发送二进制数据。

 （4）没有同源限制，客户端可以与任意服务器通信。

 （5）协议标识符是ws（如果加密，为wss），如ws://localhost:8023