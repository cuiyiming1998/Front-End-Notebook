# Vue

## Vue有哪些优点？

- 轻量级框架：只关注视图层
- 双向数据绑定，保留Angular的优点，在数据操作方面更加简单
- 组件化：保留React的优点，保留了HTML的封装和重用，在构建单页面应用方面有独特的优势
- 数据，视图，结构分离：不需要逻辑代码的修改，只需要操作数据就能完成相关操作
- 虚拟DOM：不再使用原生的DOM操作，节省性能
- 运行速度相较于React更快



## 组件传参

- 父传子： 使用`props`
- 子传父： 子组件通过`$emit`触发父组件的自定义事件穿参
- 兄弟组件传参：通过`eventbus`



## v-if和v-show的共同点和不同点

- 相同点：都可以控制元素的显示和隐藏

- 不同点：
  - `v-if`是动态地向DOM添加或者删除元素，如果不停地通过`v-if`创建和销毁元素，比较消耗性能
  - `v-show`是控制元素的`display`属性实现添加或者删除元素，只会编译一次
- 如果需要频繁切换节点的显示或隐藏，可以使用`v-show`（初始开销比较大，切换开销比较小）。如果不需要切换节点的话使用`v-if`（初始开销比较小，切换开销比较大）



## keep-alive

`<keep-alive>`是Vue内置的组件，可以使被包含的组件保留状态，或避免重新渲染



## 如何获取DOM

通过使用Vue中的`ref`

```html
<template>
    <!-- 设置ref名 -->
    <div ref="domName"></div>  
</template>
```

在script中获取ref使用`this.$ref.domName`



## computed和watch的使用场景

- Computed：当一个属性受多个属性影响的时候使用，需要`return`一个数值来保存
- Watch：当一条数据影响多条数据的时候使用。一般是监听一个数值的变化，然后做响应的操作



## data为什么必须是一个函数？

因为JS特性所致，在组件中，`data`必须以函数的形式存在，不可以是对象。

组件中的`data`写成一个函数，以返回值的形式定义。这样每次使用组件的时候，都会返回一份新的`data`，相当于每一个实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。如果写成对象的形式，所有实例共用一个对象，会造成数据的混乱。



## Vue的双向数据绑定的原理

Vue是采用数据劫持结合发布者-订阅者模式，通过`Object.defineProperty()`方法来劫持各个属性的`getter`和`setter`，在数据变动时发布消息给订阅者，触发相应的监听回调。



## v-if和v-show的优先级

`v-for`比`v-if`具有更高的优先级。这意味着v-if将分别重复运行于每个 v-for 循环中。所以，不推荐v-if和v-for同时使用。
如果v-if和v-for一起用的话，vue中的的会自动提示v-if应该放到外层去。



## 常用修饰符

- `.stop`等同于`event.stopPropagation()`防止事件冒泡
- `.prevent`等同于`event.preventDefault()`防止执行预设行为
- `.self`只触发自己范围内的事件，不包含子元素
- `.once`只触发一次



## Vue的两个核心点

- 数据驱动： `ViewModel`，保证数据和视图的统一性
- 组件系统：应用类UI可以看做全部是由组件组成的



## `delete`和`Vue.delete`删除数组的区别

`delete`只是删除的元素变成了`empty/undefined`其他元素的键值不变

`Vue.delete`直接删除元素，改变了数组的键值



## Vue-router和location.href的区别

- 使用`location.href = '/url'`来跳转，简单方便，但是刷新了页面
- 使用`history.pushState('/url')`无刷新页面，静态跳转
- 使用Vue-router使用`$router.push('/url')`来跳转，使用diff算法，实现了按需加载，减少了DOM消耗



## 封装VUE组件的过程

- 建立组件模板，写样式，考虑好组件的基本逻辑
- 准备好组件的数据输入，定好`props`里面的数据，类型
- 准备好组件的数据输出，根据组件逻辑，做好要暴露出来的方法
- 调用



## `params`和`query`的区别

- `query`要使用`path`来引入，`params`要用`name`来引入，接收参数都是类似的，分别是`this.$router.query`和`this.$router.params`
- url地址显示：`query`会在地址栏中显示传递参数，`params`不会
- `query`刷新不会丢失数据，`params`刷新会丢失数据



## Vue初始化页面闪动

在Vue初始化时，由于div是不归属Vue管理的，所以在代码还没有解析的时候容易出现花屏，看待类似于`{{ msg }}`的字样

可以在根元素添加`style = "display: none" :style="{display: 'block'}"`



## Vue生命周期

第一次加载页面会触发`beforeMount`，`beforeCreate`，`Created`，`Mounted`

- `beforeCreate`：在new一个Vue实例后，`data`和`methods`中数据还没有初始化。不能在这个阶段使用
- `created`：`data`和`methods`中数据已经被初始化好，如果需要调用`methods`中的方法或者使用`data`的数据，最早可以在这个阶段操作
- `beforeMounted`：内存中已经编译好模板，但是还没有挂载到页面
- mounted`：Vue实例初始化完成。这时组件脱离了创建阶段，进入到了运行阶段。如果我们想要通过插件操作DOM节点，最早可以在这个阶段进行
- `beforeUpdate`： 当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步
- `updated`：页面显示的数据和data中的数据已经保持同步了，都是最新的
- `beforeDestory`：Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁
- `destroyed`： 这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。



## MVC与MVVM

### MVC

- View接收用户的交互请求
- View将请求转发给Controller
- Controller操作Model进行数据更新
- 数据更新之后Model通知View数据变化
- View显示更新之后的数据

### MVVM

- VM指的是：ViewModel
- MVVM实现了View和Model的自动更新。也就是说，当Model属性发生改变的时候，我们不需要自己手动操作DOM，而是改变之后的属性对应的View会自动发生改变。
- 在MVVM中，View不知道Model的存在，Model和ViewModel也察觉不到View的存在。
- 双向数据绑定



