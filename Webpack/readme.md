# Webpack

## Webpack是什么

一个现代JavaScript应用程序的静态模块打包器

1. 默认：只对js进行处理，其他类型文件需要配置loader或者plugin进行处理。
2. 打包：将各个依赖文件进行梳理打包，形成一个JS依赖文件。

## Webpack产生的背景

### 为什么打包？

1. 各个依赖文件的关系难以梳理，耦合程度较高，代码难以维护。
2. 把所有依赖包都打包成一个js文件(`bundle.js`)，会有效降低文件请求次数，一定程度提升性能。
3. 逻辑多、文件多、项目复杂度提高。

### 为什么要用Webpack?

1. Webpack除了提供上述功能外，还充当“翻译官”的角色。例如将ES6翻译为低版本的语法，将less,sass等翻译为css的功能。
2. 强大，灵活，plugin可插拔

## 前端模块化

### 作用域

定义：运行时变量、函数、对象可访问性
作用域决定了代码中变量和其他资源的可见性

1. 全局作用域：

   ```javascript
   var a = 1;
   window.a // 1
   global.a // 1
   
   ```

2. 局部作用域：

   ``` javascript
   function a(){
   	var v = 1;
   }
   
   window.v; // undefined
   
   ```

在传统的html中，通过`<script>`引入多个js文件，很容易造成全局作用域冲突，引发各种Bug和问题。

改进方法1：使用变量作用域形成局部作用域

```javascript
var Susan = {
    name: 'susan',
    sex: 'female',
    tell: function(){
        console.log('im Susan!')
    }
}

```

这种方法无法保证模块内部的安全性，可以直接访问或更改属性值。

改进方法2：使用立即执行函数，形成闭包

```javascript
// 第一种
var Susan1 = (function(){
    var Susan = {
        name: 'Susan',
        sex: 'female',
        // 通过return 只允许访问tell
        return {
        	tell: function(){
                console.log('im Susan!');
            }
    	}
    }
})

// 第二种
(function(window){
    var name = 'Susan';
    var sex = 'female';
    function tell(){
        console.log(this.name);
    }
    window.Susan = {tell};
})(window)
// 立即执行参数，将window作为参数

```



## Webpack打包机制

### 打包过程

1. 从入口文件开始，分析整个应用的依赖树
2. 将每个依赖模块包装起来，放到一个数组中等待调用
3. 实现模块加载的方法，并把它放到模块执行的环境中，确保模块间可以相互调用
4. 把执行入口文件的逻辑放在一个函数表达式中，立即执行

### 常用Module与Plugin

1. babel

   将高版本的ES6转换为低版本语法

   ```javascript
   module: {
       rules: [
           {
               test: /\.jsx?/, //js或jsx文件
               exclude: /node_modules/, //排除依赖文件
               use: {
                   loader: 'babel-loader',
                   options: {
                       babelrc: false, //不寻找babelrc文件
                       presets: [
                           require.resolve('@babel/preset-react'),
                           [require.resolve('@babel/preset-env'),{modules: false}]
                       ]
                   }
               }
           }
       ]
   }
   
   ```

2. Html-webpack-plugin

   为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题。

   可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口。

3. Webpack-dev-server

   `webpack-dev-server --open`自动打开浏览器，运行项目

   提供文件变化监听，项目文件更新后，自动打包，刷新页面

4. webpack.HotModuleReplacementPlugin 模块热更新

5. TerserPlugin

   打包优化

   ```javascript
   optimization: {
           minimizer: [new TerserPlugin({
               // 加快构建速度
               cache: true,
               parallel: true, //多线程
               terserOptions: {
                   compress: {
                       // 移除无用代码
                       unused: true,
                       drop_debugger: true,
                       drop_console: true,
                       dead_code: true,
                   }
               }
           })]
       },
   
   ```

6. webpackBundleAnalyzer

   可视化webpack分析器