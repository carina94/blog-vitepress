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

# react环境安装

<https://blog.csdn.net/weixin_36732046/article/details/95884577?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-4.baidujs&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCom>mendFromMachineLearnPai2%7Edefault-4.baidujs

设置NPM

npm config set registry <https://registry.npm.taobao.org>

安装create-react-app 安装成功之后，就可以创建React项目啦！

安装命令：npm install -g create-react-app

创建React项目 这里的create-react-app是创建命令，demo是你要创建的项目的名称，项目名称可以随便起。

create-react-app demo

# 基础知识

rm -rf folder-my 本地强制删除文件夹或文件

打tag

git tag tage-ver-my

git push origin tage-ver-my

## jsx基础语法

jsx语法中使用大括号，className 代替class,style的双括号写法。

for需要写成htmlFor,并且属性名需要采用小驼峰命名法（tabName）。

建议将有多行内容的jsx包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。

JSX 也是一个表达式:可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX。

    import React from 'react';
    import ReactDOM from 'react-dom';

    import './index.scss';

    //变量声明
    const name= <h1>Hello, world!</h1>;
    const element = <div>Hello, {name}</div>;
    ReactDOM.render(
      element,
      document.getElementById('root')

    );

    // className 代替class
    let jsx = <div className="jsx" style={style}>jsx</div>;

    //style={{fontSize:'30px'}}style写法
    let style = {
        color: 'r' + 'ed',
        fontSize:'30px',//小驼峰写法
    }
    let jsx = <div style={style}>jsx</div>;
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

    //将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX
    function getGreeting(user) {
      if (user) {
         return <h1>Hello, {formatName(user)}!</h1>;
      }
          return <h1>Hello, Stranger.</h1>;
    }

    //JSX 特定属性:可以通过使用引号，来将属性值指定为字符串字面量;可以使用大括号，来在属性值中插入一个 JavaScript 表达式：
    在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。
    JSX 里的tabindex 则变为 tabIndex。小驼峰写法。
    const element = <div tabIndex="0"></div>;
    const element = <img src={user.avatarUrl} style={{ width: 100 }} className="img" ></img>;

    ReactDOM.render(
        jsx,
        document.getElementById('app')
    );

## jsx列表渲染

    基础列表组件：  在 map() 方法中的元素需要设置 key 属性。
    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        <li key={number.toString()}>   //当你创建一个元素时，必须包括一个特殊的 key 属性。
          {number}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }

    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(
      <NumberList numbers={numbers} />,
      document.getElementById('root')
    );


    function TodoList() {
      const todos = ['finish doc', 'submit pr', 'nag dan to review'];
      return (
        <ul>
          {todos.map((message) => <Item key={message} message={message} />)}
        </ul>
      );
    }

## jsx条件渲染

    1.与运算符 &&
    因为在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。
    因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
    function Mailbox(props) {
      const unreadMessages = props.unreadMessages;
      return (
        <div>
          <h1>Hello!</h1>
          {unreadMessages.length > 0 &&
            <h2>
              You have {unreadMessages.length} unread messages.
            </h2>
          }
        </div>
      );
    }

    const messages = ['React', 'Re: React', 'Re:Re: React'];
    ReactDOM.render(
      <Mailbox unreadMessages={messages} />,
      document.getElementById('root')
    );


    2.三目运算符
    另一种内联条件渲染的方法是使用 JavaScript 中的三目运算符 condition ? true : false。
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      return (
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
      );
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      return (
        <div>
          {isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick} />
            : <LoginButton onClick={this.handleLoginClick} />
          }
        </div>
      );
    }


    3 if 语句以及 for 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。但是，你可以用在 JSX 以外的代码中。比如：
    function NumberDescriber(props) {
      let description;
      if (props.number % 2 == 0) {
        description = <strong>even</strong>;
      } else {
        description = <i>odd</i>;
      }
      return <div>{props.number} is an {description} number</div>;
    }

## 组件分类

函数式组件写法  组件名首字母大写

class组件写法  组件名首字母大写

**用户定义的组件必须以大写字母开头**

* **函数组件**、无状态组件、展示型组件主要关注**UI的展示**
* **类组件**、有状态组件、容器型组件主要关注**数据逻辑**

    // 函数式组件
    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }

    // class组件
    class ES6Component extends React.Component {
    render () {
    return <h1>I am Rosen in es6</h1>
    }
    }
    //最外层只能有一个标签
    ReactDOM.render( <div> \<Component /> \<ES6Component /> </div>,
    document.getElementById('app')
    );

    //自定义组件：  组件名称必须以大写字母开头。
    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }

    const element = \<Welcome name="Sara" />;
    ReactDOM.render(
    element,
    document.getElementById('root')

    )

    //组合组件：
    function UserInfo(props) {
    return ( <div> \<Avatar user={props.user} /> <div>
    {props.user.name} </div> </div>
    );
    }

    function Comment(props) {
    return ( <div> \<UserInfo user={props.author} /> <div>
    {props.text} </div> <div>
    {formatDate(props.date)} </div> </div>
    );
    }

## Fragments 空标签

    短语法：你可以使用一种新的，且更简短的语法来声明 Fragments。它看起来像空标签。
    class Columns extends React.Component {
      render() {
        return (
          <>
            <td>Hello</td>
            <td>World</td>
          </>
        );
      }
    }
    带 key 的 Fragments  （key 是唯一可以传递给 Fragment 的属性。）
    使用显式 <React.Fragment> 语法声明的片段可能具有 key。一个使用场景是将一个集合映射到一个 Fragments 数组 - 举个例子，创建一个描述列表：
    function Glossary(props) {
      return (
        <dl>
          {props.items.map(item => (
            // 没有`key`，React 会发出一个关键警告
            <React.Fragment key={item.id}>
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </React.Fragment>
          ))}
        </dl>
      );
    }

## state\&props

状态提升：

在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”。

### state

state 是私有的，并且完全受控于当前组件。

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

组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。**Props 只读。**

Props 默认值为 “True”

如果你没给 prop 赋值，它的默认值是 true。推荐写全

\<MyTextBox autocomplete />

\<MyTextBox autocomplete={true} />

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


    如果你已经有了一个 props 对象，你可以使用展开运算符 ... 来在 JSX 中传递整个 props 对象。
    function App2() {
      const props = {firstName: 'Ben', lastName: 'Hector'};
      return <Greeting {...props} />;
    }

### props.children

    把回调函数作为 props.children 进行传递：  props.children指父组件中的东西
    每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容。
    // 调用子元素回调 numTimes 次，来重复生成组件
    function Repeat(props) {
      let items = [];
      for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
      }
      return <div>{items}</div>;
    }
    function ListOfTenThings() {
      return (
        <Repeat numTimes={10}>
          {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
      );

### 示例1

    class Clock extends React.Component {
      constructor(props) {
    //通过以下方式将 props 传递到父类的构造函数中
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {//生命周期的挂载
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() { //生命周期的卸载
        clearInterval(this.timerID);
      }

      tick() {  //方法
        this.setState({
          date: new Date()
        });
      }

      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }

    ReactDOM.render(
      <Clock />,
      document.getElementById('root')
    );

### 示例2

```
function LoginButton(props) {  //登录按钮：
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {  //注销按钮：
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;  //已登录状态
}



function GuestGreeting(props) {  //未登录状态
  return <h1>Please sign up.</h1>;
}



function Greeting(props) {     // Greeting 组件，它会根据用户是否登录来决定显示上面的哪一个组件。
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (  // 它将根据当前的状态来渲染 <LoginButton /> 或者 <LogoutButton />。同时它还会渲染上一个示例中的 <Greeting />。
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

```

## 事件处理

* React 事件的命名采用小驼峰式（camelCase），而不是纯小写。

* 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。\<button onClick={activateLasers}>    Activate Lasers \</button>

* 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault。

        function ActionLink() {
          function handleClick(e) {
            e.preventDefault();
          }
          return (
            <a href="#" onClick={handleClick}>Click me</a>);
        }

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

箭头函数默认指向定义它时，所处上下文的对象的this指向

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

### 申明式函数

    class LoggingButton extends React.Component {
      // 此语法确保 `handleClick` 内的 `this` 已被绑定
      handleClick = () => {
        console.log('this is:', this);
      }
      render() {
        return (
          <button onClick={this.handleClick}>Click me</button>
        );
      }
    }

### react 中的组件四种绑定 this 方法的区别

    class App extends React.Component<any, any> {
    handleClick2;
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            title: ' react study'
        };
        this.handleClick2 = this.handleClick1.bind(this);
    }

    handleClick1() {
        this.setState({
            num: this.state.num + 1,
        })
    }

    handleClick3 = () => {
        this.setState({
            num: this.state.num + 1,
        })
    };

    render() {
        return (<div>
            <h2>Ann, {this.state.num}</h2>
            <button onClick={this.handleClick2}>btn1</button>
            <button onClick={this.handleClick1.bind(this)}>btn2</button> //前一个this指代button这个dom对象，所以要用bind绑定到App这个对象，才能使用App下的方法
            <button onClick={() => this.handleClick1()}>btn3</button>  //传参使用
            <button onClick={this.handleClick3}>btn4</button>  //常用方式
        </div>)
    }
    }

apply 改变this指向并自动执行函数

call 改变this指向并自动执行函数

bind 改变this指向 不会自动执行函数

### 事件绑定原理

<https://www.jianshu.com/p/1b50aab9168c>

react中的事件都是合成事件，不是把每一个dom的事件绑定在dom上，而是把事件统一绑定到document中，触发时通过事件冒泡到document进行触发合成事件，因为是合成事件，所以我们无法去使用e.stopPropagation去阻止，而是使用e.preventDefault去阻止。

### 事件处理函数传递额外的参数

分别通过箭头函数和 Function.prototype.bind 来实现。

例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：

onClick={(e) => this.deleteRow(id, e)}>Delete Row //默认的事件e作为第二个参数传递

onClick={this.deleteRow\.bind(this, id)}>Delete Row

## 组件复合(类似于vue的插槽)

* 单纯组件
* 容器式组件(this.props.children)指组件标签之间的所有代码。

### 不具名

this.props.children

    ```
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
        return (
         <div>
             {/\* 容器式组件 title组件包裹东西会整个插入title组件内部  */}
             <Title>
                <span>App Span</span> <a href>link</a>
             </Title>
             <hr />
            {/* 单纯组件 \*/}
           <Component />
         </div>
        );
        }
        }

    ```

### 具名

在传递具名组件的时候，需要用双`{{}}`包裹。使用的就当属性使用就可以了。this.props.children.btn

    //Layout
    import React, { Component } from 'react';
    import TabBar from '../components/TabBar';
    class Layout extends Component{
      constructor(props) {
        super(props);
      }
      render() {
        console.log(this.props)
        return (
            <div>
              <h1>我是布局页面</h1>
              {/* 这个是具名的使用*/}
              {
                this.props.children.btn
              }
              { this.props.showTab && <TabBar/> }
            </div>
        )
      }
    }
    export default Layout


    // Home.js
    import React, { Component } from 'react';
    import Layout from '../ComponentCombination/Layout';
    class Home extends Component {
      render() {
        return (
            <Named/>
        )
      }
    }
    function DisNamed() {
      return (
          <Layout showTab={ false } title='首页'>
            { {
              btn: <button>我是按钮</button>
            } }
          </Layout>
      )
    }
    export default Home

## *setState*

*setState是异步执行的*

    changeNumber = () => {
        this.setState({  number: this.state.number + 1 } )
        this.setState({ number: this.state.number + 2 } )
         // 这里不能进行直接修改
        console.log(this.state.number)
     }

    //setState 实现同步执行：回调方法
    changeNumber2 = ()=> {
        this.setState((nextState)=>{
             return { number:     nextState.number + 1 } } )
        this.setState((nextState)=>{
             return { number: nextState.number + 2 } } )
        console.log(this.state.number)
     }


    import React, { Component } from 'react';
    class State extends Component {
      constructor(props) {
        super(props);
        this.state = { date: new Date(), number: 0 };
      }

      // 组件挂载时启动定时器每秒更新状态
      componentDidMount() {
        this.timerID = setInterval(() => {
          // 使⽤用setState方法更新状态
          this.setState({ date: new Date() });
        }, 1000);
      }

      // 组件卸载时停止定时器
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

        // setState是异步执行的。
      changeNumber = () => {
        this.setState({ number: this.state.number + 1 } )
        this.setState({ number: this.state.number + 2 } )// 这里不能进行直接修改
        console.log(this.state.number)//执行这个结果是 log 是2不是3 证明是异步执行
      }
      // 同步改变
      changeNumber2 = ()=> {
        this.setState((nextState)=>{ return { number: nextState.number + 1 } } )
        this.setState((nextState)=>{ return { number: nextState.number + 2 } } )
        console.log(this.state.number)
      }

      render() {
        return (
            <div>
              { this.state.date.toLocaleTimeString() }
              <p>{ this.state.number }</p>
              <p>setState是异步执行的</p>
              <button onClick={this.changeNumber}>异步改变number</button>
              <button onClick={this.changeNumber2}>同步改变number</button>
            </div>
        )
      }
    }

## ref(只用于class组件)

### 如何使用ref

React的开发模式中，通常情况下不需要、也不建议直接操作DOM元素，但是某些特殊的情况，确实需要获取到DOM进行某些操作: 文本选择或媒体播放；触发强制动画；集成第三方 DOM 库。

* 方式一：传入字符串

  * 标签上定义ref="titleRef" ,使用时通过 `this.refs.`titleRef 格式获取对应的元素
* 方式二：传入一个对象

  * 对象this.titleRefCreate是通过 `React.createRef()` 方式创建出来的；
  * 使用时获取到创建的对象其中有一个`current`属性就是对应的元素
* 方式三：传入一个函数

  * 该函数会在DOM被挂载时进行回调，这个函数会传入一个 元素对象，我们可以自己保存
  * 使用时，直接拿到之前保存的元素对象即可

    import React, { PureComponent, createRef } from 'react'
    constructor(props) {
    super(props)
    this.titleRefCreate = createRef()
    this.titleEl = null
    }
    render() {
    return ( <div>
    {/\* <h2> hello react</h2> \*/} <h2>hello react</h2> <h2>hello react</h2>
    \<h2 ref={arg => (this.titleEl = arg)}>hello react</h2>
    \<button onClick={e => this.changeText()}>改变文本&lt;/button&gt; </div>
    )
    }

    changeText() {
    // 1.通过refs来操作DOM,有三种方式
    // 方式一: 字符串
    this.refs.titleRef.innerHTML = 'hello jean'
    // 方式二: 对象
    this.titleRefCreate.current.innerHTML = 'hello JavaScript'
    // 方式三: 函数
    this.titleEl.innerHTML = 'hello TypeScript'
    }

### ref的类型

`ref` 的值根据节点的类型而有所不同：

* 当 `ref` 属性用于 `HTML` 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` 接收底层 `DOM` 元素作为其 `current` 属性
* 当 `ref` 属性用于自定义 `class` 组件时，`ref` 对象接收组件的挂载实例作为其 `current` 属性.
* **你不能在函数组件上使用** **ref** **属性**，因为他们没有实例

### 使用ref拿到真实 DOM

this.ref.current 其实就是指代了原生 input DOM 节点，<https://juejin.cn/post/7036776658258362399>

    @@@@@为 DOM 元素添加 ref
    import React from 'react'
    class Form extends React.Component {
      constructor(props) {
      super(props)
         this.refMy = React.createRef()
       }
      focus = () => {
       this.refMy.current.focus()
      }
    render() {
       return (
        <div>
         <input ref={this.refMy} />
         <button onClick={this.focus}>获取焦点</button>
        </div>
       )
      }
    }
    export default Form


    @@@@为 class 组件添加 Ref（自定义组件，且写法必须为class形式的）
    class AutoFocusTextInput extends React.Component {
      constructor(props) {
        super(props);
        this.textInput = React.createRef();
      }
      componentDidMount() {
        this.textInput.current.focusTextInput();  //focusTextInput()为组件内部定义的方法
      }
      render() {
        return (
          <CustomTextInput ref={this.textInput} />
        );
      }
    }

## forwardRef

函数式组件是没有实例的，所以无法通过ref获取他们的实例： 但是某些时候，我们可能想要获取函数式组件中的某个DOM元素； 这个时候我们可以通过 `React.forwardRef` ，后面会学习 `hooks` 中如何使用ref。

## 组件通信

### 父子组件props

父组件在展示子组件, 可能会传递一些数据给子组件

* 父组件将需要传递的参数通过`key={xxx}`方式传递至子组件，子组件通过`this.props.key`获取参数.

子组件传递父组件-函数传递

* 利用 props callback 通信，父组件传递一个 callback 到子组件，当子组件中事件触发时将参数放置到 callback 带回给父组件

    ```javascript
    class Child1 extends React.Component {
      constructor(props) {
        super(props);
      }
      handleClick() {
        this.props.changeChild2Color('red');//父组件上的方法
      }
      render() {
        return (<div> <h1>Child1： {this.props.bgColor}</h1>//父组件上的属性
          <button onClick={(e) => { this.handleClick(e) }}>改变child2 颜色\</button> </div>
        );
      }
    }
    class Child2 extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div style={{ background: this.props.bgColor }}> <h1>Child2背景颜色： {this.props.bgColor}</h1> </div>
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
      onChild2BgColorChange(color) {
        this.setState({
          child2BgColor: color
        })
      }
      render(props) {
        return (<div>
          <Child1 changeChild2Color={(color) => { this.onChild2BgColorChange(color) }} />
          <Child2 bgColor={this.state.child2BgColor} /> </div>
        );
      }

    }

    //函数式组件传递props
    function App(props) {
      const { name, age, height } = props
      return (<div>
        {name}+'' +{age} </div>
      );
    }
    export default App;

    ```

### 发布订阅

### reducx

1. 需要一个`store`来存储数据
2. `store`里`reducer`初始化`state`并定义`state`修改规则
3. 通过`dispatch`一个`action`来提交对数据的修改
4. `action`提交到`reducer`函数里，根据传入的`action`的`type`，返回新的 `state`

`createStore` 创建`store`

`reducer`初始化、修改状态函数

`getState` 获取状态值

`dispatch`提交更新

`subscribe` 变更订阅

```
// 创建store  store/ReduxStore
import { createStore } from 'redux';
// 创建数据并指定行为
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}
// 创建一个store
const store = createStore(counterReducer)
export default store



// ReduxPage
import React, { Component } from 'react';
import store from '../store/ReduxStore';
export default class ReduxPage extends Component {
  componentDidMount() { // 挂在之后
    store.subscribe(() => { // 执行订阅
      console.log('subscribe');
      this.forceUpdate(); // 重新render
      //this.setState({}); // 这个也可以，内部方法也是forceUpdate
    });
  }
// 执行行为
  add = () => {
      // 派发action
    store.dispatch({ type: 'add' });
  };
  minus = () => {
    store.dispatch({ type: 'minus' });
  };
  stayStatic = () => {
    store.dispatch({ type: 'others' });
  };

  render() {
    console.log('store', store);
    return (
        <div>
          <h1>ReduxPage</h1>
          <p>获取store数据</p>
          <p>{ store.getState() }</p>
          <button onClick={ this.add }>+</button>
          <button onClick={ this.minus }>-</button>
          <button onClick={ this.stayStatic }>+-</button>
        </div>
    );
  }
}


```

### redux-saga

### react-thunk

### content 跨组件通讯

跨层级组件之间通信

    // context.js
    import React from 'react'
    const { Consumer, Provider } = React.createContext(null)
    //创建 context 并暴露Consumer和Provide
    export { Consumer, Provider }


    // 父组件
    import React from 'react'
    import Son from './son'
    import { Provider } from './context'
    class Father extends React.Component {
      constructor(props) {
        super(props)
      }
      state = {
        info: 'info from father',
      }
      render() {
        return (
          <Provider value={this.state.info}>
            <div>
              <p>{this.state.info}</p>
              <Son />
            </div>
          </Provider>
        )
      }
    }
    export default Father

    // 子组件
    import React from 'react'
    import GrandSon from './grandson'
    import { Consumer } from './context'
    class Son extends React.Component {
      constructor(props) {
        super(props)
      }
      render() {
        return (
          <Consumer>
            {(info) => (
              // 通过Consumer直接获取父组件的值
              <div>
                <p>父组件的值:{info}</p>
                <GrandSon />
              </div>
            )}
          </Consumer>
        )
      }
    }
    export default Son


    // 孙子组件
    import React from 'react'
    import { Consumer } from './context'
    class GrandSon extends React.Component {
      constructor(props) {
        super(props)
      }
      render() {
        return (
          <Consumer>
            {(info) => (
              // 通过 Consumer 中可以直接获取组父组件的值
              <div>
                <p>组父组件的值:{info}</p>
              </div>
            )}
          </Consumer>
        )
      }
    }
    export default GrandSon

### events 发布订阅

这种方式适用于没有任何嵌套关系的组件通信。其原理就是使用事件订阅。即是一个发布者，一个或者多个订阅者。 使用之前需要先安装:   yarn add events

    // event.ts
    import { EventEmitter } from 'events'
    export default new EventEmitter()

    // 发布者 通过emit事件触发方法，发布订阅消息给订阅者
    import React from 'react'
    import Son1 from './son1'
    import Son2 from './son2'
    import { Button } from 'antd'
    import emitter from './event'

    class Father extends React.Component {
      son: any
      constructor(props) {
        super(props)
      }
      handleClick = () => {
        //emit事件触发方法,通过事件名称找对应的事件处理函数info，将事件处理函数作为参数传入
        emitter.emit('info', '我是来自father的 info')
      }
      render() {
        return (
          <div>
            <Button type='primary' onClick={this.handleClick}>
              点击按钮发布事件
            </Button>
            <Son1 />
            <Son2 />
          </div>
        )
      }
    }
    export default Father

    // 订阅者1
    // 通过emitter.addListener(事件名称,函数名)方法，进行事件监听(订阅)。
    // 通过emitter.removeListener(事件名称,函数名)方法 ，进行事件销毁(取消订阅)

    import React from 'react'
    import { Button } from 'antd'
    import emitter from './event'

    class Son1 extends React.Component {
      constructor(props) {
        super(props)
      }
      state = {
        info: '',
      }
      componentDidMount() {
        // 在组件挂载完成后开始监听
        emitter.addListener('info', (info) => {
          this.setState({
            info: 'Son1收到消息--' + info,
          })
        })
      }

      componentWillUnmount() {
        // 组件销毁前移除事件监听
        emitter.removeListener('info', (info) => {
          this.setState({
            info: 'Son1即将移除事件监听--' + info,
          })
        })
      }
      render() {
        return (
          <div>
            <div>{this.state.info}</div>
          </div>
        )
      }
    }
    export default Son1

    // 订阅者2
    import React from 'react'
    import { Button } from 'antd'
    import emitter from './event'

    class Son2 extends React.Component {
      constructor(props) {
        super(props)
      }
      state = {
        info: '',
      }
      componentDidMount() {
        // 在组件挂载完成后开始监听
        emitter.addListener('info', (info) => {
          this.setState({
            info: 'Son2收到消息--' + info,
          })
        })
      }

      componentWillUnmount() {
        // 组件销毁前移除事件监听
        emitter.removeListener('info', (info) => {
          this.setState({
            info: 'Son2即将移除事件监听--' + info,
          })
        })
      }
      render() {
        return (
          <div>
            <div>{this.state.info}</div>
          </div>
        )
      }
    }
    export default Son2

## 生命周期

很多的事物都有从**创建到销毁的整个过程**，这个过程称之为是**生命周期。**

在生命周期的整个过程，分成了很多个阶段:

* 比如装载阶段（`Mount`），组件第一次在DOM树中被渲染的过程
* 比如更新阶段（`Update`），组件状态发生变化，重新更新渲染的过程
* 比如卸载过程（`Unmount`），组件从DOM树中被移除的过程

我们谈React生命周期时，主要谈的**类的生命周期**，因为**函数式组件是没有生命周期函数**的

### Constructor

* 如果不初始化 `state` 或不进行方法绑定，则不需要为 `React` 组件实现构造函数
* `constructor`中通常只做两件事情：

  * 通过给 `this.state` 赋值对象来**初始化内部 state**
  * 为事件**绑定this**

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
    return ( <div> <div>Props: {this.props.data}</div>
    \<button onClick={()=>{this.handleClick()}}>更新组件\</button> </div>
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
    return ( <div>
    {
    this.state.hasChild ? \<Component data={this.state.data}/> : null
    }
    \<button onClick={()=>{this.onPropsChange()}}>改变Props\</button>
    \<button onClick={()=>{this.onDestoryChild()}}>干掉子组件\</button> </div>
    );
    }
    }
    ReactDOM.render( \<App/>,
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

# React Router

<https://www.ruanyifeng.com/blog/2016/05/react_router.html>
<https://zhuanlan.zhihu.com/p/101129994?from_voters_page=true>

* 页面路由：页面会重新加载，刷新到新的页面。可通过浏览器的前进后退按钮操作上下历史记录。 window\.location.href = '<http://www.baidu.com>';
    history.back();

* hash 路由：还是原来的页面，没有重新加载。只是改变了hash值。可通过浏览器的前进后退按钮操作上下历史记录。

    &#x20;window\.location = '#hash';

    &#x20;window\.onhashchange = function(){     console.log('current hash:', window\.location.hash); }

* h5 路由： 推进一个状态 history.pushState('name', 'title', '/path'); 替换一个状态 history.replaceState('name', 'title', '/path');

    popstate   &#x20;

    window\.onpopstate = function() {&#x20;

    console.log(window\.location.href);&#x20;

    console.log(window\.location.pathname);&#x20;

    console.log(window\.location.hash);&#x20;

    onsole.log(window\.location.search);    }

## 安装

react-router包含3个库，react-router、react-router-dom和react-router-native。

react-router提供最 基本的路由功能，实际使用的时候我们不会直接安装react-router，而是根据应用运行行的环境选择安装

​ react-router-dom（在浏览器器中使⽤用）

​ react-router-native（在rn中使用）。

​ **react-router-dom和 react-router-native都依赖react-router，所以在安装时，react-router也会⾃自动安装。**

在 react-router 里面，一共有 3 种基础组件，他们分别是

* 路由组件(router components) 比如 `<BrowserRouter>` 和 `<HashRouter>`
* 路由匹配组件(route matchers components) 比如 `<Route>` 和 `<Switch>`
* 导航组件(navigation components) 比如 `<Link>`, `<NavLink>`, 和 `<Redirect>`

## 路由组件

对于 web 项目，react-roruter-dom 提供了 `<BrowserRouter>` 和 `<HashRouter>`两个路由组件。

* `BrowserRouter`：浏览器的路由方式，也就是使用 `HTML5` 提供的 [`history API`](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FHistory "https://developer.mozilla.org/zh-CN/docs/Web/API/History") ( pushState , replaceState 和 popstate 事件) 来保持 `UI` 和 `url` 的同步。这种方式在`react`开发中是经常使用的路由方式，但是在打包后，打开会发现访问不了页面，所以需要通过配置 `nginx` 解决或者后台配置代理。
* `HashRouter`：在路径前加入#号成为一个哈希值，`Hash` 模式的好处是，再也不会因为我们刷新而找不到我们的对应路径，但是链接上面会有`#/`。在`vue`开发中，经常使用这种方式。

要使用路由组件，我们只需要确保它是在根组件使用，我们应该将`<App />`包裹在路由组件下面：

    import { BrowserRouter } from 'react-router-dom';

    <BrowserRouter>
        <App />
    </BrowserRouter>

## 匹配组件

有两种路由匹配组件：`<Route>` 和 `<Switch>`

这两个路由匹配组件通常在一起使用，在`<Switch>`里面包裹多个`<Route>`，然后它会逐步去比对每个`<Route>`的`path`属性 和浏览器当前`location`的`pathname`是否一致，如果一致则返回内容，否则返回`null`。

    <Switch>
      <Route exact path='/' component={Home} />
      {/* 如果当前的URL是`/about`,即 location = { pathname: '/about' } ,那么About组件就应该被渲染，其余的Route就会被忽略 */
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Switch>

值得注意的是： `<Route path={xxx}>` 只会匹配 `URL`的开头，而不是整个 URL。简单的来说就是它不是精确匹配 ，例如`<Route path ='/'>` 和`<Route path ='/about'>` 它永远都只能匹配到`<Route path ='/'>`,他们开头都有'/'。\
在这里我们有两种解决方法：

* 将此`<Route path='/'>`放在`<Switch>`的最后一个位置
* 另一种解决方案是添加'exact' 实现精确匹配： `<Route exact='/'>`

所以`<Switch>`组件只会 `render` 第一个匹配到的路由，像上面我们说的，如果没有设置 `path`，则一定会匹配，我们可以用来实现 404 的功能:

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      {/* 当上面的组件都没有匹配到的时候, 404页面 就会被 render */}
      <Route render={() => <div> 404页面 </div>} />
    </Switch>

## 导航组件

导航组件有`<Link>`, `<NavLink>`, 和 `<Redirect>`。

当我们使用`<Link>`的时候，在 html 页面会被渲染为一个`a`标签:

```
<Link to='/'>Home</Link>    // <a href='/'>Home</a>

```

`<NavLink>`是一种特殊的`<Link>` ，当`<NavLink>`中的地址和浏览器地址匹配成功的时候，会添加一个 style 样式，如下：

```
<NavLink to='/about' activeClassName='active'>
  About
</NavLink>

在 html 页面当中，它会被渲染为:
<a href='/about' className='active'>
  About
</a>

```

但是有时你可能想要强制跳转到某个页面，比如未登录不能进入首页，这个时候你可以使用`<Redirect>`

    <Redirect to='/login' />

\
作者：Xieyezi\
链接：<https://juejin.cn/post/6844904183934484494>\
来源：稀土掘金\
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 基本使用

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

## 动态路由

## 路由守卫

# 高阶组件HOC

* 高阶函数的维基百科定义(至少满足以下条件之一)：

  * 接受一个或多个函数作为输入
  * 输出一个函数

    `JavaScript`中比较常见的`filter、map、reduce`都是高阶函数

官方的定义: **高阶组件是参数为组件, 返回为新的组件。**

* **首先, 高阶组件本身不是一个组件, 而是一个函数**
* **其次, 这个函数的参数是一个组件, 返回值是一个组件**

# React Hook（只用于函数式组件）

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性

**解决的问题：**

**注意事项：**

* 只能在函数最外层调用 Hook。**不要在循环、条件判断或者子函数中调用。**
* **只能在 React 的函数组件中调用 Hook**。不要在其他 JavaScript 函数中调用。

## useState

    import React,{useState} from 'react';
    function Counter() {
      // useState会返回两个，一个是当前值。一个是改变它的函数
      let [state,setState] = useState({num: 0})
      let [num,setNum] = useState(0)
      // 两种方式 看个人喜好
      return (
          <div>
            <p>{state.num}</p>
            <p>{num}</p>
            <button onClick={()=>{setState({num: state.num +1})}}>+</button>
            <button onClick={()=>{setNum(num + 1)}}>+</button>
          </div>
      )
    }

## useMemo

## useReducer

## useEffect

useEffect跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。**通过useEffect,你可以告诉 React 组件需要在渲染后执行哪些操作。** **useEffect 会在每次渲染后都执行。** 默认情况下，它在第一次渲染之后*和*每次更新之后都会执行。

    //useEffect.js    这样就完成了点击更改页面标题的功能  无需清除
    import React, { useEffect, useState } from 'react';
    function CounterEffect() {
      let [state, setState] = useState(0)
      useEffect(()=>{
        document.title = state
      })
      return (
          <div>
            <p>{state}</p>
            <button onClick={()=> setState(state+1)}>+</button>
          </div>
      )
    }
    export {CounterEffect}

## useRef

    //  useRef 返回一个可变的 ref 对象 通过ref来访问dom
    let last;
    let last2;
    function Child() {
        // 以前的做法
      let ref = React.createRef()
      console.log('last === ref',last === ref)  // false 证明每次都不是一个
      last = ref

        // 使用hooks之后
      let ref2 = useRef()
      console.log('last2 === ref2',last2 === ref2) // true 证明是同一个
      last2 = ref2

      function getFocus() {
        ref.current.focus();
      }

      function getFocus2() {
          // `current` 指向已挂载到 DOM 上的文本输入元素
        ref2.current.focus();
      }

      return (
          <div>
            <input type="text" ref={ref} />
            <button onClick={getFocus}>获取焦点</button>
            <br/>
            <input type="text" ref={ref2} />
            <button onClick={getFocus2}>获取焦点2</button>
          </div>
      )
    }

## 自定义hooks

1. 函数的名字以 use 开头，并且调用了其他的 Hook，则就称其为一个自定义 Hook
2. 是一种复用状态逻辑的方式，它不复用 state 本身
3. 每次调用都有一个完全独立的 state

```
import  React, { useState, useEffect } from 'react';
function useBaseCounter() {
  // 函数的名字以 use 开头，并且调用了其他的 Hook，则就称其为一个自定义 Hook
  const [state,setState] = useState(0)
  // 是一种复用状态逻辑的方式，它不复用 state 本身
  // 每次调用都有一个完全独立的 state
  useEffect(() => {
    console.log('开启一个新的定时器')
    const $timer = setInterval(()=>{
      setState(state+1);
    },1000);
    return ()=>{
      console.log('销毁老的定时器')
      clearInterval($timer);
    }
  });
  return state;
}

function CounterTest() {
  let num = useBaseCounter()
  return (
      <>
        <p>{num}</p>
      </>
  )
}

function CounterTest2() {
  let num = useBaseCounter()
  return (
      <>
        <p>{num}</p>
      </>
  )
}
export {CounterTest,CounterTest2}

```
