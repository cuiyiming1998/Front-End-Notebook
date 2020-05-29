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

`props`可以设置默认值

```jsx
Hello.defaultProps = { msg: 'hello world' }

```

`props`可以传递父元素的函数，就可以去修改父元素的状态（State），从而达到传递数据给父元素的功能。

子传父：调用父元素的函数（父元素将函数作为`props`传给子元素）从而操作父元素的数据。

## 单向数据流

`props`是property的缩写，可以理解为HTML标签的attribute

不可以使用`this.props`直接修改props，因为`props是`只读的，`props`是用于整个组件树中传递数据和配置

在当前组件访问`props`，使用`this.props`

`State`与`props`的区别在于`State`只存在于组件内部，**只能**从当前组件调用`setState`来修改它的值

一般我们更新组件都是通过改变`State`的值，将值通过属性传递给子组件，子组件获取`props`从而达到更新

## React事件

1. 绑定事件使用驼峰命名
2. 使用`{}`传入函数
3. React返回的事件对象是代理的原生事件对象，如果想要查看具体值，必须直接输出
4. 原生阻止默认行为时，可以使用`return false`。这种方式在React中不可行，需要在事件处理函数中添加`e.preventDefault()`

事件传参：使用箭头函数（匿名函数）

```jsx
{/* 使用箭头函数 */}
<button onClick={(e)=>{this.clickEvent(e)}}>点击事件</button>

{/* 使用匿名函数，需要绑定this */}
<button onClick={function(e){this.clickEvent(e)}.bind(this)}>
    点击事件
</button>

```



## 条件渲染

React中条件渲染和JavaScript中，条件运算（`if... else..`）

1. 直接通过条件运算返回要渲染的JSX对象
2. 先运算要返回的JSX对象，再渲染

## 列表渲染

将列表内容拼装成数组，放置到模板中

使用数组的`map`方法，对每一项数据按照JSX格式进行加工，最终得到每一项都是JSX对象的数组，再进行渲染

`key`需要放置在每一项当中

```jsx
let arr = [{name:'zhang3',age:12},{name:'li4',age:16}];
render(){
    return(
    	<div>
        	arr.map((item,index)=>{
                return(
                	<div key={index}>
                    	<p>name:{item.name}</p>
                        <p>age:{item.age}</p>
                    </div>
                    <hr/>
                )
            })
        </div>
    )
}

```

## 生命周期

是组件从实例化到渲染到最终从页面中销毁的整个过程，在生命周期中我们有许多可以调用的事件，成为钩子函数

卸载挂载过程：

`constructor()`,`componentWillMount()`,`componentDidMount()`,`componentWillUnmount`

更新过程：

`componentWillReceiveProps`将要接收prop

`shouldComponentUpdate`组件接收到新的state或者props，判断是否更新

`componentWillUpdate`

`componentDidUpdate`

`render()`

提高组件性能——通过`shouldComponentUpdate`

```jsx
shouldComponentUpdate(){
    return false;
}

```



## 插槽

在组件中写入内容，这些内容可以被识别和控制

原理：组件中写入的HTML，可以传入组件中。通过`props.children`可以获取到插槽的内容。

## 路由

使用库`react-router-dom`

```
npm install react-router-dom --save

```

`Router`：所有路由组件的根组件，包裹路由规则的最外层容器，可以在一个组件中写多个

​		属性：`basename`：设置根的路径

`Route`：路由规则匹配的组件，显示当前对应规则的组件

`Link`：路由跳转的组件

如果要精确匹配，要在`Route`上加`exact`属性

## Redux

一种状态管理的解决方案

解决React数据管理（状态管理），用于中大型，数据比较庞大组件之间数据交互多的情况下使用

`store`：数据仓库，保存数据的地方

`state`：对象，包含整个应用所需要的数据

`action`：用来触发数据改变的方法

`dispatch`

`reduce`：函数，改变数据，生成新的状态，从而改变页面

1. 创建store

   ```jsx
   import { createStore } from 'redux'
   import reducer from './reducer' // 引入reducer
   
   const store = createStore(reducer);
   
   export default store;
   
   ```

2. 创建reducer

   ```jsx
   const defaultState = {
       name: 'zhangsan',
       age: 22
   }
   
   export default (state=defaultState,action)=>{
       switch(action.type){
           case 'click':
               let newState=JSON.parse(JSON.stringify(state))
          		newState.value = action.value;
               break;
           default:
               break;
       }
       // ...操作
       return newState
   }
   
   ```

3. 在`components`中引入`store`，并使用`store.getState()`获取值

`reducer`里只能接收state，不能改变state

## React-Redux

`Provider`：将store与组件进行关联

`mapStateToProps(state)`：将store中的state映射到组件里的props

`mapDispatchToProps(dispatch)`：将dispatch映射到组件里的props

`connect`：将组件和数据进行连接

使用方法：

1. 初始化数据,实例化store

   ```jsx
   function reducer(state={num:0},Action){
       switch(Action.type){
           case "add":
               state.num++;
               break;
           default:
               break;
       }
       return {...state}
   }
   
   const store = createStore(reducer);
   
   ```

2. 获取数据，修改数据

   ```jsx
   // 将state映射到prop
   function mapStateToProp(state){
       return {
           value: num
       }
   }
   //将dispatch映射到prop
   function mapDispatchToProp(){
       return {
           add()=>{
           	dispatch({
   				type: 'add'
               })
       	}
       }
   }
   
   ```

3. 关联

   ```jsx
   const CounterCom = connect(
   	mapStateToprop,
       mapDispatchToProp
   )(Counter)
   
   ```

4. 渲染

   ```jsx
   class App extends React.Component {
       render(){
           return (
           	<Provider store={store}>
               	<CounterCom></CounterCom>
               </Provider>
           )
       }
   }
   
   ```


## 函数式编程

1. 代码清晰，一个函数代表一个功能
2. 方便代码测试，更容易实现前端的自动化测试

## React Hooks

`useState`

```jsx
const [count,setCount] = useState(0)

```

`useEffect`：相当于`componentDidMount`和`componentDidUpdate`这两个生命周期，传入第二个参数（数组）可以在数组内的值变化的时候执行，若为空，则只在组件销毁的时候执行（`componentWillUnmount`）

```jsx
// useEffect 副作用 --> componentDidMount/componentDidUpdate
useEffect(()=>{
    console.log('Update')
    return ()=>{
        console.log('Unmount')
    }
},[])

```

