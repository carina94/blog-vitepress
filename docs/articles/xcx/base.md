微信小程序开发流程 <https://juejin.cn/post/7219943233798373432>

# **获取小程序的 AppID**

注册小程序账号图文详细参考：

<https://juejin.cn/post/7241750800400515133>

* 首先，我们需要拥有一个帐号，登录 <https://mp.weixin.qq.com> ，就可以在网站的「设置」-「开发者设置」中，查看到微信小程序的 AppID 了。

* 如果我们不是用注册时绑定的管理员微信号，在手机上体验该小程序。那么我们还需要操作「绑定开发者」。即在「用户身份-开发者」模块，绑定上需要体验该小程序的微信号。

* 如果没有自己的小程序账号 可以使用测试appid做临时开发使用。

## 云开发

# **创建项目**

我们需要通过开发者工具，来完成小程序创建和代码编辑。

开发者工具安装完成后，打开并使用微信扫码登录。选择创建「项目」，填入获取到的 AppID（或者直接点击测试appid），设置一个本地项目的名称（非小程序名称），比如「我的第一个项目」，并选择一个本地的文件夹作为代码存储的目录，点击「新建项目」就可以了。

为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择「是」，开发者工具会帮助我们在开发目录里生成一个简单的 demo。

项目创建成功后，我们就可以点击该项目，进入并看到完整的开发者工具界面，点击左侧导航，在「编辑」里可以查看和编辑我们的代码，在「调试」里可以测试代码并模拟小程序在微信客户端效果，在「项目」里可以发送到手机里预览实际效果。

# 项目结构

* `pages`用来存放所有小程序的页面

* `utils`用来存放工具性质的模块

* components 自定义组件

* `app.js` 小程序项目的入口文件

* `app.json` 小程序项目的全局配置文件

* `app.wxss` 小程序项目的全局样式文件

* `project.config.json` 项目的配置文件

* `sitemap.json` 用来配置小程序及其页面是否允许被微信索引

```javascript
├─  app.js    --- 小程序项目的入口文件 
├─  app.json   ---小程序项目的全局配置文件 
├─  app.wxss     ---小程序项目的全局样式文件 
├─  project.config.json     ---项目的配置文件 
├─  sitemap.json     ---用来配置小程序及其页面是否允许被微信索引
│
├─cloud-functions     ---云函数
│  └─setCrypto      ---数据加密模块，用户加密一些数据
│          index.js
│          package.json
│          ...
│          ...
│
├─components      ---小程序自定义组件
│  ├─plugins      --- （重点）可独立运行的大型模块，可以打包成plugins
│  │  ├─comment         ---评论模块
│  │  │  │  index.js
│  │  │  │  index.json
│  │  │  │  index.wxml
│  │  │  │  index.wxss
│  │  │  │  services.js    ---（重点）用来处理和清洗数据的service.js，配套模板和插件
│  │  │  │
│  │  │  └─submit    ---评论模块子模块：提交评论
│  │  │          index.js
│  │  │          index.json
│  │  │          index.wxml
│  │  │          index.wxss
│  │  │
│  │  └─canvasPoster     ---canvas海报生成模块
│  │          index.js
│  │          index.json
│  │          index.wxml
│  │          index.wxss
│  │          services.js    ---（重点）用来处理和清洗数据的service.js，配套模板和插件
│  │     ...
│  │     ...
│  │
│  └─templates   ---（重点）模板，通过外部传参的容器，不做过多的数据处理
│      │
│      ├─slideshow     ---滚屏切换模板
│      │      index.js
│      │      index.json
│      │      index.wxml
│      │      index.wxss
│      │      service.js    ---（重点）用来处理和清洗数据的service.js，配套模板和插件
│      │
│      └─works       ---作品模板
│          │  index.js
│          │  index.json
│          │  index.wxml
│          │  index.wxss
│          │  service.js
│          │
│          ├─articlePlugin    ---作品模板中的文章类型
│          │      index.js
│          │      index.json
│          │      index.wxml
│          │      index.wxss
│          │
│          ├─galleryPlugin    ---作品模板中的九宫格类型
│          │      index.js
│          │      index.json
│          │      index.wxml
│          │      index.wxss
│          │
│          └─videoPlugin     ---作品模板中的视频类型
│                  index.js
│                  index.json
│                  index.wxml
│                  index.wxss
│                  ...
│                  ...
│
├─config     ---自定义配置文件
│      config.js    ---存放基础配置
│      constants.js   ---存储常量
│      weui.wxss   ---第三方文件wxss，js等
│      ...
│      ...
│
├─pages     ---小程序页面
│  ├─user      ---用户页面
│  │      user.js
│  │      user.json
│  │      user.wxml
│  │      user.wxss
│  │
│  └─home      ---首页
│         home.js
│         home.json
│         home.wxml
│         home.wxss
│         ...
│         ...
│
├─request      ---https请求管理（根据switch tab分类会比较好）
│      common.js    ---一些公共请求获取，如兑换openId,unionId 等
│      news.js
│      uri.js     --- （重点）总的URI请求管理，方便切换和配置DEV,QA,PROD环境
│      user.js
│      ...
│      ...
│
└─utils       ---功能组件
        logger.js    ---日志管理
        util.js       ---公共小组件库
        ...
        ...
```

# 页面的组成

小程序官方建议把所有小程序的页面 都存放在pages目录中，以单独的文件夹存在。

pages中页面的后缀：

* `js`文件 页面的脚本文件，存放页面的数据、事件处理函数等
* `json`文件 当前页面的配置文件，配置窗口的外观、表现等
* `wxml`文件 页面的模板结构文件（html）
* `wxss`文件 当前页面的样式表文件（css）

## 页面新增

只需要在根目录的`app.json`-> `pages`中新增页面的存放路径（ "pages/home/home"），小程序开发者工具即可帮我们自动创建对应的页面文件夹home及内部文件（home.json, home.js, home.wxss, home.wxml）。

## 项目首页查看

只需要调整根目录的`app.json`->`pages`数组中页面路径的前后顺序 ，即可修改项目的首页。 小程序会把排在第一位的页面，当做项目首页进行渲染。

# 项目中JSON文件的作用

小程序中有4种json配置文件:

* **注意json文件不可添加任何注释。**

1. 项目根目录中的`app.json`配置文件
2. 项目根目录中的`project.config.json`配置文件
3. 项目根目录中的`sitemap.json`配置文件
4. 每个页面文件夹中的`.json`配置文件

## `app.json`

是当前小程序的全局配置，包括了小程序***所有页面路径***、***窗口外观、界面表现、底部tab等***。

* `pages`：用来记录当前小程序所有页面的路径
* `window`：全局定义小程序所有页面的背景色、文字颜色
* `style`：全局定义小程序组件所使用样式的版本
* `sitemapLocation`： 用来指明`sitemap.json`的位置

```javascript
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle":"black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

## project.config.json

`project.config.json`是项目配置文件，用来记录我们**对小程序开发工具所做的个性化配置**，你在工具上做的任何配置都会写入到这个文件，当你重新安装工具或者换电脑工作时，你只要载入同一个项目的代码包，开发者工具就自动会帮你恢复到当时你开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。

&#x20;例如：

* `setting`中保存了编译相关的配置
* `projectname`中保存的是项目名称
* `appid`保存的是小程序的账号ID

        {
        "description": "项目配置文件",
        "packOptions": {
           "ignore": [],
           "include": []
        },
        "setting": {
        "bundle": false,
        "userConfirmedBundleSwitch": false,
        "urlCheck": true,
        "scopeDataCheck": false,
        "coverView": true,
        "es6": true,
        "postcss": true,
        "compileHotReLoad": false,
        "lazyloadPlaceholderEnable": false,
        "preloadBackgroundData": false,
        "minified": true,
        "autoAudits": false,
        "newFeature": false,
        "uglifyFileName": false,
        "uploadWithSourceMap": true,
        "useIsolateContext": true,
        "nodeModules": false,
        "enhance": true,
        "useMultiFrameRuntime": true,
        "useApiHook": true,
        "useApiHostProcess": true,
        "showShadowRootInWxmlPanel": true,
        "packNpmManually": false,
        "enableEngineNative": false,
        "packNpmRelationList": [],
        "minifyWXSS": true,
        "showES6CompileOption": false,
        "minifyWXML": true,
        "babelSetting": {
        "ignore": [],
        "disablePlugins": [],
        "outputPath": ""
        },
        "condition": false
        },
        "compileType": "miniprogram",
        "libVersion": "2.19.4",
        "appid": "wxb4085b7b49ed2b7c",
        "projectname": "miniprogram-92",
        "condition": {},
        "editorSetting": {
        "tabIndent": "insertSpaces",
        "tabSize": 2
        }
        }

## sitemap.json

微信现已开发小程序内搜索，效果类似于PC网页的SEO。 `sitemap.josn`文件用来**配置小程序页面是否允许被微信索引。**

```javascript
{
  "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
  "rules": [{
  "action": "allow",
  "page": "*"
  }]
}
```

## 页面内的json

**对本页面的窗口外观进行设置**，可能你小程序里边的每个页面都有不一样的色调来区分不同功能模块，因此我们提供了 `page.json`，让开发者可以独立定义每个页面的一些属性，例如顶部颜色、是否允许下拉刷新等等。

页面中的配置项会覆盖`app.json`的window中的相同配置项。

```javascript
{
  "navigationBarTitleText": "查看启动日志",
  "usingComponents": {}
}
```

# 基础语法

## json

JSON文件都是被包裹在一个大括号中 {}，通过key-value的方式来表达数据。JSON的Key必须包裹在一个双引号中。还需要注意的是 JSON 文件中无法使用注释，添加注释将会引发报错。`json`文件让开发者可以独立定义每个页面的一些属性，例如顶部颜色、是否允许下拉刷新等等。

## wxml

`WXML（WeiXin Markup Language）`是一种**类似HTML的标记语言**，是小程序开发中的一部分。它用于描述小程序的结构和组件，可以像HTML一样编写静态页面。

```html
<view class="container">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}"> 获取头像昵称 </button>
    <block wx:else>
      <image src="{{userInfo.avatarUrl}}" background-size="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>
```

**WXML 模板常用标签**

* `<view>`：视图容器，类似于 HTML 中的 `<div>` 标签。
* `<text>`：文本容器，用于显示文本内容。
* `<image>`：图片容器，用于显示图片。
* `<block>`：块级容器，可以替代 `<view>` 使用，但是**不会在页面中生成额外的节点。**
* `<swiper>`：滑块视图容器，用于展示轮播图等内容。
* `<scroll-view>`：可滚动视图容器，用于展示大量数据时，可以滚动查看。
* `<icon>`：图标容器，用于显示小图标。
* `<button>`：按钮容器，用于实现用户交互。
* `<input>`：输入框容器，用于接收用户输入。
* `<checkbox>`：复选框容器，用于选择多个选项。
* `<radio>`：单选框容器，用于选择一个选项。
* `<picker>`：选择器容器，用于从预设的选项中选择一个或多个选项。
* `<form>`：表单容器，用于收集用户输入的数据。
* `<navigator>`：导航容器，用于实现页面跳转。

    **注意点：**

    `<view>` 在渲染时会被转换为 `div` 标签，而 `<block>` 则不会被转换，它只是一个纯粹的容器标签，不会在页面中生成额外的节点。

    `<view>` 和 `<block>` 的样式类别都是块级元素，`<view>` 默认有一些边距和内边距，而 `<block>` 则没有。

    `<view>` 和 `<block>` 在使用场景上也有一些差异，`<view>` 更适合用于布局容器，比如页面的主要结构、列表的项等；而 `<block>` 更适合用于临时包裹一些元素，比如在一个条件判断中，将一些元素作为一个整体进行包裹等。

**条件渲染**

`wx:if` 条件渲染标签，实现根据条件显示不同内容的效果。还可以使用 `wx:else` 标签来实现条件判断的 `else` 分支。

`wx:for` 列表渲染标签，实现根据数据循环渲染列表的效果。

## wxss

WXSS（WeiXin Style Sheets）是小程序的样式语言，用于控制小程序界面的外观和布局。它是一种 CSS 扩展语言，具有类似 CSS 的语法。支持大部分 CSS 语法和特性，如选择器、盒模型、浮动、定位、字体、背景、颜色、动画等等。

CSS 语法和特性之外，WXSS 还有一些自己的特点和扩展。

* 支持尺寸单位 `rpx`，可以根据屏幕宽度自动缩放。由于换算采用的浮点数运算，所以运算结果会和预期结果有一点点偏差；
* 支持导入外部样式文件，可以使用 `@import` 关键字；
* 支持样式继承，可以使用 `inherit` 和 `initial` 值；
* 支持全局样式覆盖，可以使用 `!important` 关键字。

<!---->

    /**index.wxss**/
    .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
    }

    .userinfo-nickname {
    color: #aaa;
    }

    .usermotto {
    margin-top: 200px;
    }

**rpx**

## js

在小程序里边，我们就通过编写 `JS` 脚本文件来处理用户的操作。此外你还可以在 JS 中调用小程序提供的丰富的 API，利用这些 API 可以很方便的调起微信提供的能力，例如获取用户信息、本地存储、微信支付等。

    //logs.js
    var util = require('../../utils/util.js')
    Page({
      data: {
        logs: []
      },
      onLoad: function () {
        this.setData({
          logs: (wx.getStorageSync('logs') || []).map(function (log) {
            return util.formatTime(new Date(log))
          })
        })
      }
    })

# 传参场景

<https://juejin.cn/post/7239539290536165413>

# 授权登录功能

<https://juejin.cn/post/7152038521497190431>

# 小程序渲染流程解析

* 小程序的运行环境分成渲染层和逻辑层。

<!---->

* WXML 模板和 WXSS 样式工作在渲染层，JS 脚本工作在逻辑层。

<!---->

* 小程序的渲染层和逻辑层分别由2个线程管理：渲染层的界面使用了WebView 进行渲染；逻辑层采用JsCore线程运行JS脚本。

<!---->

* 一个小程序存在多个界面，所以渲染层存在多个WebView线程，这两个线程的通信会经由微信客户端（Native代指微信客户端）做中转，逻辑层发送网络请求也经由Native转发至服务器。

**程序执行**

* 微信客户端在打开小程序之前，会把整个小程序的代码包下载到本地。

<!---->

* 通过 `app.json` 的 `pages` 字段就可以知道你当前小程序的所有页面路径。写在 `pages` 字段的第一个页面就是这个小程序的首页（打开小程序看到的第一个页面）。

<!---->

* 微信客户端把首页的代码装载进来，通过小程序底层的一些机制，渲染出这个首页。

<!---->

* 小程序启动后，在 `app.js` 定义的 `App` 实例的 `onLaunch` 回调方法会被执行。

<!---->

* 整个小程序只有一个 App 实例，是全部页面共享的。

**页面执行**

例如  pages/logs/logs 页面：

* 微信客户端会先根据 `logs.json` 配置生成一个界面，顶部的颜色和文字你都可以在这个 `json` 文件里边定义好。紧接着客户端就会装载这个页面的 `WXML` 结构和 `WXSS` 样式。最后客户端会装载 `logs.js`：

```javascript
Page({
  data: { // 参与页面渲染的数据
    logs: []
  },
  onLoad: function () {
    // 页面渲染后 执行
  }
})
```

* `Page` 是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把 `data` 数据和 `index.wxml` 一起渲染出最终的结构。在渲染完界面之后，页面实例就会收到一个 `onLoad` 的回调，你可以在这个回调处理你的逻辑。

# 小程序与H5深度对比及原理解析

<https://juejin.cn/post/7239336033367277629>

与网页开发的对比：

网页开发者可以使用到各种浏览器暴露出来的 DOM API，进行 DOM 选中和操作。小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的DOM API和BOM API。这一区别导致了前端开发非常熟悉的一些库，例如 jQuery、 Zepto 等，在小程序中是无法运行的。同时 JSCore 的环境同 NodeJS 环境也是不尽相同，所以一些 NPM 的包在小程序中也是无法运行的。

 网页开发者需要面对的环境是各式各样的浏览器，PC 端需要面对 IE、Chrome、QQ浏览器等，在移动端需要面对Safari、Chrome以及 iOS、Android 系统中的各式 WebView 。而小程序开发过程中需要面对的是两大操作系统 iOS 和 Android 的微信客户端，以及用于辅助开发的小程序开发者工具。

网页开发者在开发网页的时候，只需要使用到浏览器，并且搭配上一些辅助工具或者编辑器即可。小程序的开发则有所不同，需要经过申请小程序帐号、安装小程序开发者工具、配置项目等等过程

# 小程序框架对比

<https://juejin.cn/post/7234028496086073405>

taro

mpvue

uni-app

第三方多端框架中，`taro` 和 `uni-app` 的使用度是最广的，一般来说，做技术选型时，团队用 `react`，就用 taro，团队用 `vue`，就用 uni-app，两者之间没有什么优劣之分，都挺好用的。

<https://juejin.cn/post/7051828074362437663>

# mpvue

# 项目

仿得物

<https://juejin.cn/post/6997644572629139492#heading-35>

<https://juejin.cn/post/6997644572629139492#heading-35>
