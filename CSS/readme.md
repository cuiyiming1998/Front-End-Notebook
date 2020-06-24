# CSS

## CSS实现水平垂直居中的方法

1. 绝对定位

   ```css
   section {
       position: relative;
       height: 100vh;
       background: black;
   }
   .box {
       width: 200px;
       height: 200px;
       position: absolute;
       top: 50%;
       left: 50%;
       transition: translate(-50%,-50%);
   }
   
   ```

2. flex布局

   ```css
   section {
       height: 100vh;
       background: black;
       display: flex;
       justify-content: center;
       align-items: center;
   }
   .box {
       width: 200px;
       height: 200px;
   }
   
   ```

3. grid布局

   ```css
   section {
       height: 100vh;
       background: black;
       display: grid;
   }
   .box {
       width: 200px;
       height: 200px;
       align-self: center;
       justify-self: center;
   }
   
   ```

   ```css
   section {
       height: 100vh;
       background: black;
       display: grid;
   }
   .box {
       width: 200px;
       height: 200px;
       margin: auto;
   }
   
   ```

   ```css
   section {
       height: 100vh;
       background: black;
       display: grid;
       place-items: center;
   }
   .box {
       width: 200px;
       height: 200px;
   }
   
   ```

   

## CSS盒模型

1. W3C（标准盒模型）

   `box-sizing: content-box;`

   `width = content.width`

   `height = content.height`

2. IE（怪异盒模型）

   `box-sizing: border-box`

   `width = content.width + padding + border`

   `height = content.height + padding + border`

3. flex盒模型

   main-axis,cross-axis

4. 多列布局

## 响应式布局的解决方案

1. 媒体查询

   ```css
   @media screen and (max-width: 300px){
       background: black;
   }
   
   ```

2. rem

   rem 是 css 的长度单位，它是相对于 `<html>` 元素的 `font-size` 的相对值。假设 `html { font-size: 20px; }`，那么 1rem 就等于 20px。

3. flex

4. vh/vw

   ...



## BFC

BFC(Block Formatting Contexts)块级格式化上下文。

可以把BFC理解为一个隔离的容器，容器内部的元素不会在布局上影响容器外部的元素

### 触发BFC（满足一条即可）

- body根元素
- 浮动元素：`float`除了`none`以外的值
- 绝对定位元素：`position: absolute`或者`fixed`
- `display`的值为`inline-block`、`table-cell`、`flex`
- `overflow`除了`visible`以外的值

### BFC的应用

- 避免外边距的重叠
- 清除浮动
- 阻止元素被浮动元素覆盖



## 清除浮动

父元素会因为子元素浮动所造成内部高度为0

- 使用伪元素`:after`让其具有`clear:both`属性
- 给父级添加`overflow:hidden`



## z-index

`z-index`控制重叠元素的堆叠顺序，只能影响`position`的值不是`static`的元素



## OPACITY/VISIBILITY/DISPLAY

### opacity:0

- DOM结构：透明，但是会被渲染，占据空间
- 可以进行DOM事件监听
- 提升为合成层，不会触发重绘，性能更高
- 会被子元素继承，且子元素不能通过`opacity:1`来取消隐藏

### visibility:hidden

- DOM结构：元素会被隐藏，但是会被渲染，占据空间
- 无法进行事件监听
- 动态改变此属性时会触发重绘
- 会被子元素继承，子元素可以通过`visibility:visible`来取消隐藏

### display:none

- DOM结构：浏览器不会渲染此元素，不占据空间
- 无法进行DOM事件监听
- 动态改变此属性时会引起重排，性能较差
- 不会被子元素继承，子元素不会渲染

