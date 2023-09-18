
# React Hooks（只用于函数式组件）

Hook 是 React 16.8 的新增特性。

解决的问题：使用类组件时，有大量的业务逻辑如各类的接口请求需要放在 componentDidMount 和 componentDidUpdate 等生命周期函数中，会使组件变得特别复杂并且难以维护，并且 Class 中的 this 问题也需要特别注意；函数组件虽然能避免 this 问题，但没有生命周期等。Hooks可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

**注意事项：**

* 只能在函数最外层调用 Hook。**不要在循环、条件判断或者子函数中调用。**
* 只能在函数式组件和自定义 Hooks 之中调用 Hooks，普通函数或者类组件中不能使用 Hooks。

## useState

* `State Hook` 让函数式组件也可拥有 `state` 状态。
* 语法：`const [Xxx, setXxx] = React.useState(initValue)`
* `useState()` 参数：状态初始化值；返回值：包含 2 个元素的数组，分别为状态值和状态更新函数
* `setXxx()` 的 2 种用法：

  * `setXxx(newValue)`
  * `setXxx(value => newValue)`
  * 注意！新状态值会**覆盖**原状态值！因此若有多个状态，只能多次调用 `React.useState` ，不能使用对象！

```javascript
import React,{useState} from 'react';
function Counter() {
  // useState会返回两个，一个是当前值。一个是改变它的函数
  let [state,setState] = useState({num: 0})
  let [num,setNum] = useState(0)
  // 两种方式 看个人喜好
  return ( <div> <p>{state.num}</p> <p>{num}</p>
    <button onClick={()=>{setState({num: state.num +1})}}>+</button>
    <button onClick={()=>{setNum(num + 1)}}>+</button> </div>
    )
}
```

## useEffect

* `Effect Hook` 让我们能在函数式组件中执行副作用操作（就是模拟生命周期钩子）
* 副作用操作：发送 Ajax 请求、定时器、手动更改真实 DOM
* `Effect Hook` 可以模拟三个钩子：`componentDidMount`、`componentDidUpdate`、`componentWillUnmount`
* `React.useEffect` 第一个参数 `return` 的函数相当于 `componentWillUnmount` ，若有多个会按顺序执行

```javascript
// 语法
React.useEffect(() => {
  ...
  return () => {
    // 组件卸载前执行，即 componentWillUnmount 钩子
    ...
  }
}, [stateValue])

// 模拟 componentDidMount
// 第二个参数数组为空，表示不监听任何状态的更新
// 因此只有页面首次渲染会执行输出
React.useEffect(() => {
  console.log('DidMount')
  return () => {
    console.log('WillUnmount 1')
  }
}, [])

// 模拟全部状态 componentDidUpdate
// 若第二个参数不写，表示监听所有状态的更新
React.useEffect(() => {
  console.log('All DidUpdate')
  return () => {
    console.log('WillUnmount 2')
  }
})

// 模拟部分状态 componentDidUpdate
// 第二个参数数组写上状态，表示只监听这些状态的更新
React.useEffect(() => {
  console.log('Part DidUpdate')
  return () => {
    console.log('WillUnmount 3')
  }
}, [count, name])

// 若调用 ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// 会输出 WillUnmount 1、2、3

```

## useRef

它就是用来拿到子组件的实例的，相当于`class`组件的`React.createRef()`：

```javascript
import React, { useRef } from "react";
function App() {
  let el = useRef();
  return (
    <div>
      <h1 ref={el}>{state}</h1>
    </div>
  );
  // 通过 el.current 可以获得 DOM 节点
}
export default App;
```

## useContext

## useMemo

## useCallback

## useReducer

## 自定义hooks

1. 函数的名字以 use 开头，并且调用了其他的 Hook，则就称其为一个自定义 Hook
2. 是一种复用状态逻辑的方式，它不复用 state 本身
3. 每次调用都有一个完全独立的 state

```javascript
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
