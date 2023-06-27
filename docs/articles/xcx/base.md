# **获取小程序的 AppID**

首先，我们需要拥有一个帐号，登录 <https://mp.weixin.qq.com> ，就可以在网站的「设置」-「开发者设置」中，查看到微信小程序的 AppID 了。

如果我们不是用注册时绑定的管理员微信号，在手机上体验该小程序。那么我们还需要操作「绑定开发者」。即在「用户身份-开发者」模块，绑定上需要体验该小程序的微信号。

图文详细参考：<https://juejin.cn/post/7241750800400515133>

如果没有自己的小程序账号 可以使用测试appid做临时开发使用。

# **创建项目**

我们需要通过开发者工具，来完成小程序创建和代码编辑。

开发者工具安装完成后，打开并使用微信扫码登录。选择创建「项目」，填入获取到的 AppID（或者直接点击测试appid），设置一个本地项目的名称（非小程序名称），比如「我的第一个项目」，并选择一个本地的文件夹作为代码存储的目录，点击「新建项目」就可以了。

为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择「是」，开发者工具会帮助我们在开发目录里生成一个简单的 demo。

项目创建成功后，我们就可以点击该项目，进入并看到完整的开发者工具界面，点击左侧导航，在「编辑」里可以查看和编辑我们的代码，在「调试」里可以测试代码并模拟小程序在微信客户端效果，在「项目」里可以发送到手机里预览实际效果。

# 项目结构

* `pages`用来存放所有小程序的页面

<!---->

* `utils`用来存放工具性质的模块

<!---->

* components自定义组件

<!---->

* `app.js` 小程序项目的入口文件

<!---->

* `app.json` 小程序项目的全局配置文件

<!---->

* `app.wxss` 小程序项目的全局样式文件

<!---->

* `project.config.json` 项目的配置文件

<!---->

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

1. 项目根目录中的`app.json`配置文件
2. 项目根目录中的`project.config.json`配置文件
3. 项目根目录中的`sitemap.json`配置文件
4. 每个页面文件夹中的`.json`配置文件

## `app.json`

是当前小程序的全局配置，包括了小程序***所有页面路径***、***窗口外观、界面表现、底部tab等***。

**注意该文件不可添加任何注释。**

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

`project.config.json`是项目配置文件，用来记录我们**对小程序开发工具所做的个性化配置**， 例如：

* `setting`中保存了编译相关的配置
* `projectname`中保存的是项目名称
* `appid`保存的是小程序的账号ID

<!---->

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

## 页面的json配置文件

**对本页面的窗口外观进行设置**，页面中的配置项会覆盖`app.json`的window中的相同配置项

```javascript
{
  "navigationBarTitleText": "查看启动日志",
  "usingComponents": {}
}
```

# 小程序渲染流程解析

# mpvue

# 小程序与H5深度对比及原理解析

<https://juejin.cn/post/7239336033367277629>

# 小程序框架对比

<https://juejin.cn/post/7234028496086073405>

taro

mpvue

uni-app
