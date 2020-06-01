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