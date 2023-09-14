## HashRouter和BrowserRouter

### 前端路由实现方式

路由需要实现三个功能：

1. 当浏览器地址变化时，切换页面；
2. 点击浏览器后退，前进按钮，网页内容发生变化；
3. 刷新浏览器，页面加载内容对应当前路由对应的地址.

**页面路由**：**页面会重新加载，刷新到新的页面**。可通过浏览器的前进后退按钮操作上下历史记录。 window\.location.href = '<http://www.baidu.com>'; history.back();

**在单页面web网页中，单纯的浏览器地址改变，网页不会重载**，如单纯的hash值改变，网页是不会变化的，因此我们的路由需要监听事件，并利用js实现动态改变网页。

* hash 模式：监听浏览器地址hash值变化，并执行相应的js切换。
* history 模式：利用H5 history API实现url地址改变，网页内容改变。

### hash模式

使用window\.location.hash 属性和window\.onhashchange事件。可以监听浏览器hash值得变化，去执行相应的js切换网页。

hash路由实现原理：

1. hash 指的是地址中 # 号以及后面的字符。称为散列值。
2. 散列值不会随请求发送到服务器端的，所以**改变hash,不会重新加载界面**。
3. 监听onhashchange事件，hash改变时，可以通过window\.location.hash来获取和设置hash值。
4. location.hash值的变化直接反应在浏览器的地址栏。

### history模式

我们使用history首先应该了解window\.history对象。**它表示的是当前窗口的浏览历史，当发生改变时，只会改变路径，不会刷新界面**.History对象就是一个堆栈。

方法：

* History.back：移动上一个网址，等同于浏览器的后退。
* History.forward:移动到下一个网址，等同于浏览器前进。&#x20;
* History.go:接受一个参数，以当前网页为基准，来进行跳转。默认history.go(0),刷新当前界面。 history.go(1) 相当与history.forward();&#x20;
* History.pushState():往history堆栈中添加一条记录。不会刷新界面，只会导致History对象变化，地址栏发生变化.
* History.replaceState():是替换当前history堆栈中最上层的记录。也是不会刷新界面，只会是Histoty对象变化，地址栏发生变化。 每当history对象发生变化，就会触发popstate事件： window\.addEventListener("popstate",function(){})

> 只调用pushState或者replaceState是不会触发改事件的，只有调用back,forward,go才会触发该事件。

### 区别

**底层原理不一样：**
BrowserRouter调用的是H5 history API,低版本兼容性问题。
HashRouter 使用的是URL哈希值

**地址栏表现形式不一样：**
BrowserRouter的路径：localhost:3000/demo/a
HashRouter的路径：localhost:3000/#/demo/a

**刷新后对路由state参数的影响**
BrowserRouter没有任何影响，因为state保存在history对象中。
HashRouter刷新后会导致路由state参数的丢失！！！

官方会更推荐使用`browserRouter`，貌似是因为其构建于H5的`History API`，比起`hashRouter`，它多出了更多的方法操控url。&#x20;
建议：前端路由使用HashRouter ,服务路由使用BrowerRouter

## router V5\&V6

## router V6

React-Router的安装方法：
npm： `$ npm install react-router-dom@6`
yarn`$ yarn add react-router-dom@6`

## 安装

* react-router包含3个库，react-router、react-router-dom和react-router-native。
* react-router提供最基本的路由功能，实际使用的时候我们不会直接安装react-router，而是根据应用运行的环境选择安装：react-router-dom（在浏览器器中使⽤用），react-router-native（在rn中使用）。
* &#x20;**react-router-dom和 react-router-native都依赖react-router，所以在安装时，react-router也会⾃自动安装。**

在 react-router 里面，一共有 3 种基础组件，他们分别是

* 路由组件(router components) 比如 `<BrowserRouter>` 和 `<HashRouter>`
* 路由匹配组件(route matchers components) 比如 `<Route>` 和 `<Switch>`
* 导航组件(navigation components) 比如 `<Link>`, `<NavLink>`, 和 `<Redirect>`

## 路由组件

对于 web 项目，react-roruter-dom 提供了 `<BrowserRouter>` 和 `<HashRouter>`两个路由组件。

* `BrowserRouter`：浏览器的路由方式，也就是使用 `HTML5` 提供的 [`history API`](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FHistory "https://developer.mozilla.org/zh-CN/docs/Web/API/History") ( pushState , replaceState 和 popstate 事件) 来保持 `UI` 和 `url` 的同步。这种方式在`react`开发中是经常使用的路由方式，但是在打包后，打开会发现访问不了页面，所以需要通过配置 `nginx` 解决或者后台配置代理。
* `HashRouter`：在路径前加入#号成为一个哈希值，`Hash` 模式的好处是，再也不会因为我们刷新而找不到我们的对应路径，但是链接上面会有`#/`。在`vue`开发中，经常使用这种方式。

要使用路由组件，我们只需要确保它是在根组件使用，我们应该将`<App />`包裹在路由组件下面：

```javascript
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
    <App />
</BrowserRouter>
```

## 匹配组件

有两种路由匹配组件：`<Route>` 和 `<Switch>`

这两个路由匹配组件通常在一起使用，在`<Switch>`里面包裹多个`<Route>`，然后它会逐步去比对每个`<Route>`的`path`属性 和浏览器当前`location`的`pathname`是否一致，如果一致则返回内容，否则返回`null`。

```javascript
<Switch>
  <Route exact path='/' component={Home} />
  {/* 如果当前的URL是`/about`,即 location = { pathname: '/about' } ,那么About组件就应该被渲染，其余的Route就会被忽略 */
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
</Switch>
```

值得注意的是： `<Route path={xxx}>` 只会匹配 `URL`的开头，而不是整个 URL。简单的来说就是它不是精确匹配 ，例如`<Route path ='/'>` 和`<Route path ='/about'>` 它永远都只能匹配到`<Route path ='/'>`,他们开头都有'/'。\
在这里我们有两种解决方法：

* 将此`<Route path='/'>`放在`<Switch>`的最后一个位置
* 另一种解决方案是添加'exact' 实现精确匹配： `<Route`exact path='/'>

所以`<Switch>`组件只会 `render` 第一个匹配到的路由，像上面我们说的，如果没有设置 `path`，则一定会匹配，我们可以用来实现 404 的功能:

```javascript
<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
  {/* 当上面的组件都没有匹配到的时候, 404页面 就会被 render */}
  <Route render={() => <div> 404页面 </div>} />
</Switch>
```

## 导航组件

导航组件有`<Link>`, `<NavLink>`, 和 `<Redirect>`。

当我们使用`<Link>`的时候，在 html 页面会被渲染为一个`a`标签:

```javascript
<Link to='/'>Home</Link>    // <a href='/'>Home</a>
```

`<NavLink>`是一种特殊的`<Link>` ，当`<NavLink>`中的地址和浏览器地址匹配成功的时候，会添加一个 style 样式，如下：

```javascript
<NavLink to='/about' activeClassName='active'>
  About
</NavLink>

在 html 页面当中，它会被渲染为:
<a href='/about' className='active'> About</a>
```

但是有时你可能想要强制跳转到某个页面，比如未登录不能进入首页，这个时候你可以使用`<Redirect>`

```javascript
<Redirect to='/login' />
```

## 基本使用

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class A extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
            Component A
{/* 获取当前路由上的参数id   {this.props.match.params.id}
    获取当前路由     this.props.match.path
    需要路由完全匹配时加： exact
    路由表自上而下匹配，最后加通配匹配。这种的/:id加到最后
*/}
<Switch>
  <Route exact path={`${this.props.match.path}`}
    render={(route) => {
       return <div>当前组件是不带参数的A</div>
    }}/>
 <Route path={`${this.props.match.path}/sub`}
    render={(route) => {
        return <div>当前组件是Sub</div>
    }}/>
 <Route path={`${this.props.match.path}/:id`}
   render={(route) => {
      return <div>当前组件是带参数的A, 参数是：{route.match.params.id}</div>
   }}/>
  </Switch>
   </div>
        )
    }
}
class B extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>Component B</div>
    }
}
class Wrapper extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Link to="/a">组件A</Link>
                <br/>
                <Link to="/a/123">带参数的组件A</Link>
                <br/>
                <Link to="/b">组件B</Link>
                <br/>
                <Link to="/a/sub">/a/sub</Link>
                {this.props.children}
            </div>
        );
    }
}
ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A}/>
            {/* <Route path="/a/:id" component={A}/> */}
            <Route path="/b" component={B}/>
        </Wrapper>
    </Router>,
    document.getElementById('app')
);
```

## 动态路由

## 路由守卫
