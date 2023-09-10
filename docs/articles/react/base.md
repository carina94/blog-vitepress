# 基础知识

## react环境安装

* 设置NPM：npm config set registry <https://registry.npm.taobao.org>

<!---->

* 安装create-react-app ：安装命令：npm install -g create-react-app

<!---->

* 创建React项目：create-react-app是创建命令，demo是你要创建的项目的名称，项目名称可以随便起。如  create-react-app demo

## jsx基础语法

* jsx语法中使用大括号{ }，className 代替class，style的双括号写法。

<!---->

* for需要写成htmlFor，并且属性名需要采用小驼峰命名法(tabName)。

<!---->

* 建议将有多行内容的jsx包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号的陷阱。

<!---->

* JSX 也是一个表达式:可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX。

```javascript
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
let jsx = <div className="jsx">jsx</div>;

//style写法
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
```

## jsx列表渲染

```javascript
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
```

## jsx条件渲染

```javascript
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
```

## 组件分类

* 函数式组件写法 ：组件名首字母大写。

<!---->

* class组件写法 ：组件名首字母大写。

<!---->

* **用户定义的组件必须以大写字母开头。**

    **函数组件**、无状态组件、展示型组件主要关注**UI的展示**

    **类组件**、有状态组件、容器型组件主要关注**数据逻辑**

```javascript
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
ReactDOM.render(
    <div>
        <Component />
        <ES6Component />
    </div>,
    document.getElementById('app')
);


//自定义组件：  组件名称必须以大写字母开头。
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')

)


//组合组件：
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

## Fragments 空标签

```javascript
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
```
