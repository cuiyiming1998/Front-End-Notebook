# React-Router

```jsx
import { Router, Route, hashHistory } from 'react-router';

render((
	<Router history={hashHistory}>
    	<Route path='/' component={Com1} />
    </Router>
),document.getElementById('app'));
```



`Router`组件有一个参数`history`，它的值`hashHistory`表示，路由的切换由URL的hash变化决定，即URL的`#`部分发生变化。举例来说，用户访问`http://www.example.com/`，实际会看到的是`http://www.example.com/#/`。



```jsx
<Router history={hashHistory}>
	<Route path='/' component={App} />
    <Route path='/repos' component={Repos} />
    <Route path='/about' component={About} />
</Router>
```



## 嵌套

```jsx
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Route>
</Router>
```

访问`About`时，先加载`App`，再加载`About`

App组件中需要使用`{this.props.children}`放置子组件

子路由也可以不写在`Router`里面，单独传入`Router`组件的`routes`属性

```jsx
let routes = <Route path="/" component={App}>
  <Route path="/repos" component={Repos}/>
  <Route path="/about" component={About}/>
</Route>;

<Router routes={routes} history={browserHistory}/>
```



## Path

`Route`组件的`path`属性指定路由的匹配规则。这个属性是可以省略的，这样的话，不管路径是否匹配，总是会加载指定组件

```jsx
<Route component={Inbox}>
	<Route path="inbox/message/:id" component={Message} />
</Route>
```

显示为：

```jsx
<Inbox>
	<Message />
</Inbox>
```



## 通配符

`path`属性可以使用通配符

```jsx
<Route path="/hello/:name" />
//	/hello/micheal	/hello/abc

<Route path="/htllo(/:name)" />
//	/hello	/hello/abc

<Route path="/files/*.*" />
//	/files/abc.html	/files/def.jpg

<Route path="/files/*" />
//	/files/a/b/c

<Route path="/**/*.jpg" />
//	/files/abc/file.jpg
```



规则：

1. `:paramName`

   匹配URL的一个部分，直到遇到下一个`/`,`?`,`*`为止。

   可以通过`this.props.params.paramName`取出

2. `()`

   表示这个URL部分是可选的

3. `*`

   匹配任意字符，直到模式里面的下一个字符为止。匹配模式是非贪婪模式

4. `*

   匹配任意字符，直到下一个`/`,`?`,`*`为止。匹配模式是贪婪模式	



`path`属性也可以使用相对路径（不以`/`开头），匹配时就会相对于父组件的路径，可以参考上一节的例子。嵌套路由如果想摆脱这个规则，可以使用绝对路由。



路由匹配规则是从上到下执行，一旦发现匹配，就不再其余的规则了。

```jsx
<Router>
  <Route path="/:userName/:id" component={UserPage}/>
  <Route path="/about/me" component={About}/>
</Router>
```

上面代码中，用户访问`/about/me`时，不会触发第二个路由规则，因为它会匹配`/:userName/:id`这个规则。因此，带参数的路径一般要写在路由规则的底部。

此外，URL的查询字符串`/foo?bar=baz`，可以用`this.props.location.query.bar`获取。



## IndexRoute

访问根路径`/`通常会采用`{this.props.children} || <Home />`这样的写法。这时`<Home>`是子元素的同级组件，却没有写在`Route`中



可以使用`<IndexRoute>`

```jsx
<Router>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="accounts" component={Accounts}/>
    <Route path="statements" component={Statements}/>
  </Route>
</Router>
```

`<IndexRoute>`组件没有路径参数`path`