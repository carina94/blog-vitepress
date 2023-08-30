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
