# react认识

React：用于构建用户界面的 JavaScript 库

Redux：Redux 是 JavaScript状态容器，提供可预测化的状态管理

React-Router：通过管理 URL，实现组件的切换和状态的变化

React-Thunk和React-Saga： Redux store 仅支持同步数据流。使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性。

React通过声明式渲染和组件化很好的胜任了UI层面的工作，但是没有路由功能（管理页面之间的切换）和状态容器（管理全局数据），action中也不能执行异步操作，所以就有了react-router和redux和thunk。

## react全家桶

react（整体架构） +  redux || mobx（状态管理） +  react-router（路由） +  axios（ajax请求） +  antd || react-material || antd-model(UI框架库)

20220329 react V18

20201020 react  V17

20190206 react V16.8

## 飞冰

飞冰 (ICE) 是一套基于 React 的前端解决方案，围绕应用研发框架 (ice.js 3) 提供了应用的构建、路由、调试等基础能力以及微前端、一体化等领域能力，同时结合可视化操作、物料复用等方案降低研发门槛。

## umi

Umi，中文可发音为乌米，是可扩展的企业级前端应用框架。Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。

简单来说，Umi就是一个支持约定式路由和配置式路由的大杂烩，他整合了所有React生态的东西，Antd、Dva等等，把他们都当成了Umi的插件，我们想使用的时候，直接通过配置就能使用。

## dva

dva 首先是一个基于 [redux](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Freduxjs%2Fredux%2560) 和 [redux-saga](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fredux-saga%2Fredux-saga) 的数据流方案，然后为了简化开发体验，

dva 还额外内置了 [react-router](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FReactTraining%2Freact-router) 和 [fetch](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgithub%2Ffetch)，所以也可以理解为一个轻量级的应用框架。

飞冰和 Umi 都是 React 生态系统中的前端框架，不过它们有一些区别：

1 飞冰是阿里巴巴开发的前端框架，而 Umi 是由蚂蚁金服开发的前端框架。

2 飞冰是一个全面的前端解决方案，包括了前端框架、模板库、物料市场等，而 Umi 只是一个前端框架。

&#x20;3 飞冰采用的是飞冰 CLI 工具进行开发，而 Umi 采用的是 Umi CLI 工具进行开发。

4 飞冰强调可视化操作，提供了一系列的可视化工具，使得前端开发更加高效。而 Umi 则更加注重代码的可维护性和扩展性。

&#x20;5 飞冰采用了 Iceworks 可视化开发工具，而 Umi 则采用了 Dva 数据流方案和路由方案。

总体来说，飞冰更加注重前端开发的效率和可视化开发，而 Umi 则更加注重代码的可维护性和扩展性。具体选择哪个框架需要根据项目需求和个人喜好进行选择。

umi--路由配置

dva--数据流方案

Umi和Dva都是基于React的框架，Umi主要以路由为主，Dva主要管理数据流。

Antd pro（<https://pro.ant.design/docs/getting-started-cn>）集成了umi、dva、antd的完整前端脚手架

原文链接：<https://blog.csdn.net/halations/article/details/107505440>

## Ant Design Pro

Ant Design Pro 是基于 Ant Design 和 umi 的封装的一整套企业级中后台前端/设计解决方案，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源

使用umi脚手架初始化一个后台管理项目（集成ant-design-pro到项目中）

<https://github.com/ant-design/ant-design-pro>

```
使用umi2X创建项目

 mkdir

 cd

 yarn create umi # or npm create umi

 Choose ant-design-pro:

Select the boilerplate type (Use arrow keys)

❯ ant-design-pro - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.

app - Create project with a simple boilerplate, support typescript.

block - Create a umi block.

library - Create a library with umi.

plugin - Create a umi plugin.

git init

npm install

npm start # visit <http://localhost:8000>

```

umi2和umi3的差别 <https://blog.csdn.net/mayazure/article/details/108782239>

如果使用umi2的命令创建umi3的项目会导致run不起来

<https://blog.csdn.net/uncle_Huang/article/details/104741268>

这里umi2和umi3版本的不同点：

第一，node的版本要求不一样，2版本要求8以上，3版本要求10以上。

第二，2版本创建umi项目使用的命令行是yarn create umi，3版本创建的命令行是yarn create @umijs/umi-app

第三，2版本的.umi文件夹在pages文件夹下，而3版本的.umi文件夹在pages文件夹外。

使用umi3X创建项目

yarn create @umijs/umi-app

集成proComponents到项目中

<https://procomponents.ant.design/docs/getting-started>

## 微前端框架

Mooa：基于Angular的微前端服务框架

Single-Spa：最早的微前端框架，兼容多种前端技术栈。

Qiankun：基于Single-Spa，阿里系开源微前端框架。

Icestark：阿里飞冰微前端框架，兼容多种前端技术栈。

Ara Framework：由服务端渲染延伸出的微前端框架。

微前端技术在国内还不太常见，目前这些框架都比较小众。

# 基础知识

rm -rf folder-my 本地强制删除文件夹或文件

打tag

git tag tage-ver-my

git push origin tage-ver-my

## 基础语法

className 代替class

    import React from 'react';
    import ReactDOM from 'react-dom';

    import './index.scss';

    // 基础jsx、样式
    let style = {
        color: 'r' + 'ed',
        fontSize:'30px',//小驼峰写法
    }
    // className 代替class
    let jsx = <div className="jsx" style={style}>jsx</div>;

    //style={{fontSize:'30px'}}style写法
    let jsx = <div  style={{fontSize:'30px'}}>jsx</div>;

    ReactDOM.render(
        jsx,
        document.getElementById('app')
    );


    // 数据逻辑处理 常用{}
    let name = 'Rosen';
    let names = ['Rosen', 'Geely', 'Jimin']
    let flag = false;
    let jsx = (
        <div>
            {/* 注释：变量的使用 */}
            <p>I am {name}</p>
            {/* 条件判断 */}
            {
                flag ? <p>I am {name}</p> : <p>I am not {name}</p>
            }
            {/* 数组循环 */}
            {
                names.map((name, index) => <p key={index}>Hello, I am {name}</p>)
            }
        </div>
    );

    ReactDOM.render(
        jsx,
        document.getElementById('app')
    );

## 组件基本结构

函数式组件写法  组件名首字母大写

class组件写法  组件名首字母大写

    // 基础组件写法
    // 函数式组件
    function Component () {
        return <h1>I am Rosen</h1>
    }

    // class组件
    class ES6Component extends React.Component {
        render () {
            return <h1>I am Rosen in es6</h1>
        }
    }
    //最外层只能有一个标签
    ReactDOM.render(
        <div>
            <Component />
            <ES6Component />
        </div>,
        document.getElementById('app')
    );

## state\&props

### state

    class Component extends React.Component {
        constructor(props) {
            super(props);//固定写法 拿到父级的this
          // state初始数据状态
            this.state = {
                name: 'Rosen'
            }
        }
        render () {
            setTimeout(() => {
             // setState  改变state中的数据状态
                this.setState({
                    name: 'Rosen Test'
                })
            }, 2000)
            return <h1>I am {this.state.name}</h1>
        }
    }

    ReactDOM.render(
        <div>
            <Component name="Rosen" />
        </div>,
        document.getElementById('app')
    );

### props

    class Component extends React.Component{
        constructor(props){
            super(props);//固定写法 拿到父级的this
        }
        render(){
            // props只能使用，不能改变
            return <h1>I am {this.props.name}</h1>
        }
    }
    ReactDOM.render(
        <div>
            {/* 父组件传递name属性给子组件 */}
            <Component name="Rosen"/>
        </div>,
        document.getElementById('app')
    );

## 事件处理

### construstor 中bind 绑定this

    class Component extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'Rosen',
                age: 18
            }
            this.handleClick = this.handleClick.bind(this)//bind
        }
        handleClick () {
            this.setState({
                age: this.state.age + 1
            });
        }
        render () {
            return (
                <div>
                    <h1>I am {this.state.name}</h1>
                    <p>I am {this.state.age} years old!</p>
                    <button onClick={this.handleClick}>加一岁</button>
                    //这种bind绑定this写法也对
                    <button onClick={this.handleClic.bind(this)}>加一岁</button>
                </div>
            );
        }
    }

### 箭头函数绑定this

    class Component extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'Rosen',
                age: 18
            }
        }
    //初始化数据这种写法也是可以的，和在constructor中写法一样
    //  state={
    //           name : 'Rosen',
    //           age : 18
    //  }
        handleClick () {
            this.setState({
                age: this.state.age + 1
            });
        }
        onValueChange (e) {
            this.setState({
                age: e.target.value
            });
        }
        render () {
            return (
                <div>
                    <h1>I am {this.state.name}</h1>
                    <p>I am {this.state.age} years old!</p>
                    <button onClick={(e) => { this.handleClick(e) }}>加一岁</button>
                    <input type="text" onChange={(e) => { this.onValueChange(e) }} />
                </div>
            );
        }
    }

## 组件组合方式

* 单纯组件
* 容器式组件(this.props.children)指组件标签之间的所有代码。

    class Component extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    name: 'Rosen'
    }
    }
    render () {
    return ( <div> <h1>I am {this.state.name}</h1> </div>
    );
    }
    }

    class Title extends React.Component {
    constructor(props) {
    super(props);
    }
    render (props) {
    //this.props.children  固定表示title组件中的内容
    return <h1>{this.props.children}</h1>
    }

    }
    class App extends React.Component {
    render () {
    return ( <div>
    {/\* 容器式组件 title组件包裹东西会整个插入title组件内部  */} &lt;Title&gt; <span>App Span</span> <a href>link</a> &lt;/Title&gt; <hr />
    {/* 单纯组件 \*/} &lt;Component /&gt; </div>
    );
    }
    }

## 组件间的数据通信

### 父子组件props

child1组件和child2组件是Father组件内部的子组件，是兄弟组件。child1组件通过Father组件改变child2组件的样式。

    class Child1 extends React.Component {
        constructor(props) {
            super(props);
        }
        handleClick () {
            this.props.changeChild2Color('red');
        }
        render () {
            return (
                <div>
                    <h1>Child1： {this.props.bgColor}</h1>
                    <button onClick={(e) => { this.handleClick(e) }}>改变child2 颜色</button>
                </div>
            );
        }
    }
    class Child2 extends React.Component {
        constructor(props) {
            super(props);
        }
        render () {
            return (
                <div style={{ background: this.props.bgColor }}>
                    <h1>Child2背景颜色： {this.props.bgColor}</h1>
                </div>
            );
        }
    }

    class Father extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                child2BgColor: '#999'
            }
        }
        onChild2BgColorChange (color) {
            this.setState({
                child2BgColor: color
            })
        }
        render (props) {
            return (
                <div>
                    <Child1 changeChild2Color={(color) => { this.onChild2BgColorChange(color) }} />
                    <Child2 bgColor={this.state.child2BgColor} />
                </div>
            );
        }

    }

### 发布订阅

### reducx

## 生命周期

    mport React from 'react';
    import ReactDOM from 'react-dom';

    class Component extends React.Component{
        // 构造函数
        constructor(props){
            super(props)
            this.state = {
                data: 'Old State'
            }
            console.log('初始化数据','constructor');
        }
        // 组件将要加载
        componentWillMount(){
            console.log('componentWillMount');
        }
        // 组件加载完成
        componentDidMount(){
            console.log('componentDidMount');
        }
        // 将要接收父组件传来的props
        componentWillReceiveProps(){
            console.log('componentWillReceiveProps');
        }
        // 子组件是不是应该更新
        shouldComponentUpdate(){
            console.log('shouldComponentUpdate');
            return true;
        }
        // 组件将要更新
        componentWillUpdate(){
            console.log('componentWillUpdate');
        }
        // 组件更新完成
        componentDidUpdate(){
            console.log('componentDidUpdate');
        }
        // 组件即将销毁
        componentWillUnmount(){
            console.log('componentWillUnmount');
        }
        // 处理点击事件
        handleClick(){
            console.log('更新数据：');
            this.setState({
                data: 'New State'
            });
        }
        // 渲染
        render(){
            console.log('render')
            return (
                <div>
                    <div>Props: {this.props.data}</div>
                    <button onClick={()=>{this.handleClick()}}>更新组件</button>
                </div>
            );
        }
    }

    class App extends React.Component{
        // 构造函数
        constructor(props){
            super(props)
            this.state = {
                data: 'Old Props',
                hasChild: true
            }
            console.log('初始化数据','constructor');
        }
        onPropsChange(){
            console.log('更新props:');
            this.setState({
                data: 'New Props'
            });
        }
        onDestoryChild(){
            console.log('干掉子组件：');
            this.setState({
                hasChild: false
            });
        }
        render(){
            return (
            <div>
                {
                    this.state.hasChild ? <Component data={this.state.data}/> : null
                }
                <button onClick={()=>{this.onPropsChange()}}>改变Props</button>
                <button onClick={()=>{this.onDestoryChild()}}>干掉子组件</button>
            </div>
            );
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

### 代码执行顺序

    // 刷新页面后的动作+一个组件内部点击更新组件按钮
    // constructor           //初始化数据
    // componentWillMount    // 组件将要加载
    // render                //初始加载dom组件
    // componentDidMount     // 组件加载完成
    // 更新数据               // 点击更新组件按钮更新数据时加载顺序
    // shouldComponentUpdate // 子组件是不是应该更新 默认是更新。若写为return false 则不更新，执行到此处就停止
    // componentWillUpdate   // 组件将要更新
    // render                //更新加载dom组件
    // componentDidUpdate    // 组件更新完成



    // 刷新页面后的动作+父子组件中点击改变props
    // constructor           //初始化数据
    // componentWillMount    // 组件将要加载
    // render                //初始加载dom组件
    // componentDidMount     // 组件加载完成
    // 更新props             //点击改变props传递到子组件的数据
    // componentWillReceiveProps  // 将要接收父组件传来的props
    // shouldComponentUpdate // 子组件是不是应该更新 默认是更新。若写为return false 则不更新，执行到此处就停止
    // componentWillUpdate   // 组件将要更新
    // render                //更新加载dom组件
    // componentDidUpdate    // 组件更新完成

## router

<https://www.ruanyifeng.com/blog/2016/05/react_router.html>

<https://zhuanlan.zhihu.com/p/101129994?from_voters_page=true>

页面路由：页面会重新加载，刷新到新的页面。可通过浏览器的前进后退按钮操作上下历史记录。

window\.location.href = '<http://www.baidu.com>';

history.back();

hash 路由：还是原来的页面，没有重新加载。只是改变了hash值。可通过浏览器的前进后退按钮操作上下历史记录。

window\.location = '#hash';

window\.onhashchange = function(){

    console.log('current hash:', window\.location.hash);

}

h5 路由：

推进一个状态 history.pushState('name', 'title', '/path');

替换一个状态 history.replaceState('name', 'title', '/path');

popstate

window\.onpopstate = function(){

console.log(window\.location.href);

console.log(window\.location.pathname);

console.log(window\.location.hash); console.log(window\.location.search);

}

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
          return <div>当前组件是带参数的A, 参数是：               {route.match.params.id}</div>
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
