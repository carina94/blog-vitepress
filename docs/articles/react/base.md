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

## state

* state用来存放组件的数据。state 是私有的，完全受控于当前组件。
* 不能直接修改 state，这样不会触发 render。
* state 的更新是异步的，而且 React 可能会将多次状态修改合并为一次更新。

```javascript
ReactDOM.render(
    <div> <Component name="Rosen" /></div>,
    document.getElementById('app')
);

class Component extends React.Component {
 //构造器调用几次？ ———— 1次
    constructor(props) {
        super(props);//固定写法 拿到父级的this
      // state初始数据状态
        this.state = {
            name: 'Rosen'
        }
    }
 //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
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
```

## *setState*

不要直接修改 state，而是使用 `setState()`，React 会【合并】我们设置的 state。每次在组件中调用 `setState` 时，React 都会自动更新其子组件。

*setState是异步执行的*

```javascript
add = () => {
  this.setState({ count: this.state.count + 1 })
  console.log(this.state.count)//代码打印的 count 值是上一次的值，而非更新后的
}

add = () => {
  this.setState({ count: this.state.count + 1 }, () => {
    console.log(this.state.count)//可在第二个参数回调中获取更新后的状态。
  })
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
```

## props

组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。**Props 只读。**

Props 默认值为 “True”

如果你没给 prop 赋值，它的默认值是 true。推荐写全

<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />

```javascript
class Component extends React.Component{
    constructor(props){
     //构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
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
```

## propTypes

`PropTypes` 对象用于校验 `props` 的类型。

```javascript
//创建组件
class Person extends React.Component {
    constructor(props) {
        super(props);
    }

  //对标签属性进行类型、必要性的限制
  static propTypes = {
      name: PropTypes.string.isRequired, //限制name必传，且为字符串
      sex: PropTypes.string,
      age: PropTypes.number,
  };

  //指定默认标签属性值
  static defaultProps = {
      sex: '男',
      age: 18,
  };

  render() {
      const { name, age, sex } = this.props;
      return (
          <ul>
              <li>姓名：{name}</li>
              <li>性别：{sex}</li>
              <li>年龄：{age + 1}</li>
          </ul>
      );
  }
}

const p1 = { name: 'Tom', sex: '女', age: 20 };
ReactDOM.render(<Person {...p1} />, document.getElementById('test'));
```

## props.children

```javascript
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
```
