# JavaScript

## 闭包

- 闭包是能够读取其他函数内部变量的函数

- 闭包是指有权访问另一个作用域中变量的函数，创建闭包的最常见的方式就是在一个A函数内创建B函数，通过B函数访问A函数的局部变量，利用闭包可以突破作用域链

- 闭包的特性：
  - 函数内再嵌套函数
  - 让外部访问函数内部变量成为可能
  - 局部变量会常驻在内存中
  - 可以避免使用全局变量，防止全局变量污染
  
- 闭包的创建：

  - 闭包就是可以创建一个独立的环境，每个闭包里面的环境都是独立的，互不干扰。**闭包会发生内存泄露，每次外部执行函数的时候，外部函数的引用地址不同，都会重新创建一个新的地址。**但凡是当前活动对象中有被内部子集引用的数据，那么这个时候，这个数据不删除，保留指针给内部活动对象。

- 闭包的应用场景：

  ```javascript
  function funA(){
      var a = 10; // funA的活动对象中
      return function(){ // 匿名函数的活动对象
  		console.log(a);
      }
  }
  var b = funA();
  b(); // 10
  
  ```

  每次外部函数执行的时候，都会开辟一块内存空间，外部函数的地址不同，都会重新创建一块地址。

  ```javascript
  function outerFn(){
      var i = 0;
      function innerFn(){
          i++;
          console.log(i);
      }
      return innerFn();
  }
  var fn1 = outerFn();
  fn1(); // 1
  fn1(); // 2
  fn1(); // 3
  
  var fn2 = outerFn();
  fn2(); // 1
  fn2(); // 2
  fn2(); // 3
  
  ```

- 闭包的作用：

  - 读取函数内部的变量
  - 让变量始终保存在内存中
  - 封装对象的私有属性和私有方法

- 闭包的好处与坏处：

  - 好处：能够实现封装和缓存
  - 消耗内存，不正当使用会造成内存溢出等问题



## 作用域链

- 作用域链的作用是保证运行环境里有权访问的变量和函数是有序的。作用域链的变量只能向上访问，一直到访问到`window`对象即被终止。作用域链不允许向下访问。
- 简单的说，作用域就是变量与函数可以访问的范围，即作用域控制着变量和函数的可见性和生命周期。



## 原型，原型链

- 每个对象都会在其内部初始化一个属性`prototype`（原型），当我们访问一个对象的属性时，如果这个对象不存在这个属性，那么js就会去当前对象的`prototype`中寻找这个属性，这个`prototype`又会有自己的`prototype`，于是就会这样一直找下去，直到找到为止。这就是我们平常所说的原型链的概念。
- 关系：`instance.constructor.prototype = instance.__proto__`

- 特点：JS对象是通过引用来传递的，我们创建的每一个对象实体中并没有属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。
- 当我们需要一个属性时，JS引擎会先看当前对象中有没有此属性，如果没有的话就会查找它的`prototype`中是否有这个属性，如此递推。

## 事件代理

- 事件代理又称为事件委托，把元素原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM的事件冒泡，可以提升性能。
- 可以大量节省内存占用，比如将`td`的`click`事件绑定在`table`上。
- 新增子元素时无需再次绑定。

## 继承

- 借助构造函数

```javascript
function Parent(){
    this.name = 'a';
    this.age = 17;
}

function Child(){
    Parent.call(this);
    this.address = 'Beijing'
}

var s = new Child();
console.log(s1.name); // a
```

这个方法只能实现部分继承，如果在父类的原型上添加属性或者方法，子类的实例无法继承。

- 借助原型链

```javascript
function Parent(){
    this.name = 'a';
    this.age = 17;
}
Parent.prototype = {
    say(){
        console.log( 'Hi');
    }
}
function Child(){
    this.address = 'Beijing';
}
Child.prototype = new Parent();

var s = new Child();
console.log(s.name); // a
console.log(s.say()); // Hi
```

这种方法也有一个弊端，就是如果通过子类的实例对象修改父类上的属性和方法，那么所有子类的实例对象上的属性和方法都会被改变。

- 组合继承

```javascript
function Parent(){
    this.name = 'a';
    this.age = 17;
}
function Child(){
    Parent.call(this);
    this.address = 'Beijing'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

var s = new Child();
console.log(s.constructor); // 指向Child
```

- ES6继承

```javascript
class Animal {
    constructor(props){
        this.name = props.name || 'Unknown';
    }
    eat() {
        console.log(`${this.name} will eat pests.`)
    }
}

// class继承
class Bird extends Animal {
    constructor(props,attr){ 
        // props是继承过来的属性，attr是自己的属性
        super(props); // 获得父类的this指向
        this.type = props.type || 'Unknown';
        this.attr = attr;
    }
    fly() {
        // 自己的私有方法
        console.log(`${this.name} can fly.`);
    }
    myAttr() {
        console.log(`${this.name} is ${this.type}`);
    }
}

var bird = new Bird({
    name: '燕子',
    type: '鸟类'
},'Bird')
bird.eat();// 燕子 will eat pests.
bird.fly(); // 燕子 can fly.
bird.myAttr();// 燕子 is 鸟类
```

## this对象

- `this`总是指向函数的直接调用者
- 如果有`new`，则指向`new`出来的对象
- 在事件中，`this`指向触发这个事件的对象，IE中的`attachEvent`中`this`总指向`window`



## new一个对象的过程

- 创建一个空对象

```javascript
var obj = {};
```

- 完成原型链的构建——将所创建对象的`__proto__`设为构造函数的`prototype`的属性值，即指向构造函数的原型对象。将构造函数的作用域赋值给新对象。执行构造函数内部的代码，将属性添加给`this`对象。

```javascript
this.__proto__ = ClassA.prototype;
```

- 返回新对象

## Ajax

- `Ajax`的原理是在用户和服务器之间加了一个中间层（AJAX引擎），通过`XMLHttpRequest`对象来向服务器发送异步请求，从服务器获得数据，然后通过`javascript`来操作DOM来更新页面。`XMLHttpRequest`是AJAX的核心。

```javascript
// 创建连接
var xhr = null;
xhr = new XMLHttpRequest();
// 连接服务器
xhr.open('get',url,true);
// 发送请求
xhr.send(null);
// 接收请求
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            success(xhr.responseText);
        }else{
            fail && fail(xhr.status);
        }
    }
}
```

- 优点
  - 通过异步模式，提升用户体验
  - 优化浏览器和服务器之间的传输，减少带宽占用
  - 在客户端运行，减少服务器负载
  - 可以实现局部刷新
- 缺点
  - 暴露与服务器交互的细节，安全性较差
  - 对搜索引擎的支持较弱
  - 不容易调试

## 跨域问题

- 通过jsonp跨域

```javascript
var script = document.createElement('script');
script.type = 'text/javascript';

script.src = 'http:// www.....';
document.head.appendChild(script);

// 执行回调函数
function back(res){
    console.log(res);
}
```

- nginx代理跨域
- nodejs中间件代理跨域
- 后端在头部信息中设置安全域名
- 框架中的跨域，`webpack.config.js`添加`proxy`
- `WebSocket`跨域

## 模块化开发

- 使用立即执行函数，不暴露私有成员

```javascript
var module = (function(){
    var count = 0;
    var m1 = function(){
        ...
    };
    var m2 = function() {
        ...
    };
    return {
        m1: m1,
        m2: m2
    };
})();
```

- 使用ES6 `export`/`import`

## 异步加载JS

- `defer`只支持IE
- `async`
- 创建`script`，插入DOM

## 定义对象的方法

- 对象字面量： `var obj = {}`
- 构造函数： `var obj = new Object()`
- `var obj = Object.create(Object.prototype)`

## 常见的兼容性问题

- 浏览器默认的`margin`和`padding`不同，解决方案是加一个全局的`*{padding:0;margin:0}`，但是全局效率很低，通常是：

```css
body,ul,li,ol,dl,dt,dd,form,input,h1,h2,h3,h4,h5,h6,p{
	margin:0;
	padding:0;
}
```

- IE下，`event`对象有`x`，`y`属性，没有`pageX`，`pageY`
- Firefox下与上面相反

## Promise

- `promise`是js的一种异步解决方案
- `promise`有四种状态，`pending`初始状态，`fulfilled`成功状态，`rejected`失败状态，`settled: Promise`已被`fulfilled`或`rejected`且不是`pending`
- `fulfilled`与`rejected`合称`settled`

```javascript
function func = (()=>{
    return new Promise(function(resolve,reject){
        if(...){
        	resolve(1)  
        }else{
            reject(Error(errMsg))
        }
    });
}).then(()=>{
    ...
})
```

### `Promise.all（iterable）`

`iterable`是一个数组，在数组中所有的函数都执行成功`resolved`或者参数不包含promise时回调完成`resolve`。如果参数中有一个失败，则回调失败`reject`，失败的原因是上一个`promise`的结果。

通常在启动多个异步任务并发运行时使用，以便等待所有任务完成执行`then`。

### `Promise.prototype.finally()`

返回一个`promise`，在`promise`结束时，无论结果是`fulfilled`还是`rejected`，都会执行指定的回调函数。

### `Promise.race(interable)`

race就是赛跑，意思就是`Promise.race([f1,f2,f3])`里面哪一个结束的快，就返回哪一个结果，无论是`fulfilled`还是`rejected`。