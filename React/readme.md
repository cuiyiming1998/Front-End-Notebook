# React

## JSX的优点是什么?

1. JSX执行更快（虚拟DOM），为编译为JavaScript代码时进行优化

2. 类型更安全，编译过程如果出错就不能编译，即时发现错误

3. JSX编写模板更加简单快速

   注意：

   1. JSX必须要有根节点
   2. 普通HTML元素要小写。（大写默认组件）

## JSX表达式

1. 由HTML元素构成
2. 用`{}`插入变量，可以使用JSX对象

## style样式

1. 不可以存在多个class属性

   ```jsx
   <div className="abc" className={'def'}></div>
   {/* 错误 */}
   
   ```

2.  style中使用驼峰命名法，或使用引号

3. 多个类共存

   ```jsx
   <div className={'abc' + def}></div>
   
   ```

   

## 组件

1. 函数式组件

   ```jsx
   function Hello(props) {
       let title = <h2>我是副标题</h2>
       
       return (
       	<div>
           	<h1>函数式组件</h1>
               {title}
           </div>
       )
   }
   
   ```

   

2. 类组件

   ```jsx
   class Hello extends React.Component {
       render(){
           return (
               <div>
           		<h1>类组件</h1>
           	</div>
           )
       }
   }
   
   ```

3. 复合组件：组件中包含类组件和函数式组件

## State

相当于Vue中的data，但是使用方式有不同

修改State的方式

```jsx
this.state.isLiked = '不喜欢'
/*
	可以修改，但是不会重新渲染页面
*/

this.setState({
    isLiked: '不喜欢'
})
/*
	推荐的方式
*/

```

State的更新是异步的，React为了优化性能，可能将多个`setState()`合并成一个区更新，因为`this.state`和`this.props`是异步更新的，所以不能依据他们的值区计算下一个值。

以下操作是错误的：

```jsx
this.setState({
    sum: this.state.count + this.props.num
})

```

为此，可以使用参数为方法，此方法有两个参数，第一个参数是前一个状态，第二个参数为传入的`props`

用法如下：

```jsx
this.setState((state,props)=>{
    return {
        sum: state.count + props.num
    }
})

```

## 参数传递

`props`：父组件传给子组件，单向流动，不能子传父。`props`的传值可以使任意的类型

