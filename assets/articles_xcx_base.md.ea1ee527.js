import{_ as s,o as n,c as a,O as l}from"./chunks/framework.312978fa.js";const F=JSON.parse('{"title":"获取小程序的 AppID","description":"","frontmatter":{},"headers":[],"relativePath":"articles/xcx/base.md","filePath":"articles/xcx/base.md"}'),o={name:"articles/xcx/base.md"},p=l(`<h1 id="获取小程序的-appid" tabindex="-1"><strong>获取小程序的 AppID</strong> <a class="header-anchor" href="#获取小程序的-appid" aria-label="Permalink to &quot;**获取小程序的 AppID**&quot;">​</a></h1><p>首先，我们需要拥有一个帐号，登录 <a href="https://mp.weixin.qq.com" target="_blank" rel="noreferrer">https://mp.weixin.qq.com</a> ，就可以在网站的「设置」-「开发者设置」中，查看到微信小程序的 AppID 了。</p><p>如果我们不是用注册时绑定的管理员微信号，在手机上体验该小程序。那么我们还需要操作「绑定开发者」。即在「用户身份-开发者」模块，绑定上需要体验该小程序的微信号。</p><p>图文详细参考：<a href="https://juejin.cn/post/7241750800400515133" target="_blank" rel="noreferrer">https://juejin.cn/post/7241750800400515133</a></p><p>如果没有自己的小程序账号 可以使用测试appid做临时开发使用。</p><h1 id="创建项目" tabindex="-1"><strong>创建项目</strong> <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;**创建项目**&quot;">​</a></h1><p>我们需要通过开发者工具，来完成小程序创建和代码编辑。</p><p>开发者工具安装完成后，打开并使用微信扫码登录。选择创建「项目」，填入获取到的 AppID（或者直接点击测试appid），设置一个本地项目的名称（非小程序名称），比如「我的第一个项目」，并选择一个本地的文件夹作为代码存储的目录，点击「新建项目」就可以了。</p><p>为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择「是」，开发者工具会帮助我们在开发目录里生成一个简单的 demo。</p><p>项目创建成功后，我们就可以点击该项目，进入并看到完整的开发者工具界面，点击左侧导航，在「编辑」里可以查看和编辑我们的代码，在「调试」里可以测试代码并模拟小程序在微信客户端效果，在「项目」里可以发送到手机里预览实际效果。</p><h1 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h1><ul><li><code>pages</code>用来存放所有小程序的页面</li></ul><ul><li><code>utils</code>用来存放工具性质的模块</li></ul><ul><li>components自定义组件</li></ul><ul><li><code>app.js</code> 小程序项目的入口文件</li></ul><ul><li><code>app.json</code> 小程序项目的全局配置文件</li></ul><ul><li><code>app.wxss</code> 小程序项目的全局样式文件</li></ul><ul><li><code>project.config.json</code> 项目的配置文件</li></ul><ul><li><code>sitemap.json</code> 用来配置小程序及其页面是否允许被微信索引</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─  app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;"> 小程序项目的入口文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">├─  app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json   </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">小程序项目的全局配置文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">├─  app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">小程序项目的全局样式文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">├─  project</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">项目的配置文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">├─  sitemap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">用来配置小程序及其页面是否允许被微信索引</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─cloud</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">functions     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">云函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─setCrypto      </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">数据加密模块，用户加密一些数据</span></span>
<span class="line"><span style="color:#A6ACCD;">│          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│          package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│          </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│          </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─components      </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">小程序自定义组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─plugins      </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;"> （重点）可独立运行的大型模块，可以打包成plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─comment         </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">评论模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  services</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">（重点）用来处理和清洗数据的service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js，配套模板和插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─submit    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">评论模块子模块：提交评论</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─canvasPoster     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">canvas海报生成模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │          services</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">（重点）用来处理和清洗数据的service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js，配套模板和插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │     </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │     </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─templates   </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">（重点）模板，通过外部传参的容器，不做过多的数据处理</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      ├─slideshow     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">滚屏切换模板</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">（重点）用来处理和清洗数据的service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js，配套模板和插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      └─works       </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">作品模板</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │  service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │</span></span>
<span class="line"><span style="color:#A6ACCD;">│          ├─articlePlugin    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">作品模板中的文章类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │</span></span>
<span class="line"><span style="color:#A6ACCD;">│          ├─galleryPlugin    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">作品模板中的九宫格类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│          │</span></span>
<span class="line"><span style="color:#A6ACCD;">│          └─videoPlugin     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">作品模板中的视频类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│                  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│                  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│                  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│                  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│                  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│                  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─config     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">自定义配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│      config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">存放基础配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│      constants</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js   </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">存储常量</span></span>
<span class="line"><span style="color:#A6ACCD;">│      weui</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss   </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">第三方文件wxss，js等</span></span>
<span class="line"><span style="color:#A6ACCD;">│      </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│      </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─pages     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">小程序页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─user      </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">用户页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─home      </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">首页</span></span>
<span class="line"><span style="color:#A6ACCD;">│         home</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│         home</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">│         home</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxml</span></span>
<span class="line"><span style="color:#A6ACCD;">│         home</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wxss</span></span>
<span class="line"><span style="color:#A6ACCD;">│         </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│         </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─request      </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">https请求管理（根据switch tab分类会比较好）</span></span>
<span class="line"><span style="color:#A6ACCD;">│      common</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">一些公共请求获取，如兑换openId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">unionId 等</span></span>
<span class="line"><span style="color:#A6ACCD;">│      news</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│      uri</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js     </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;"> （重点）总的URI请求管理，方便切换和配置DEV</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">QA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">PROD环境</span></span>
<span class="line"><span style="color:#A6ACCD;">│      user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│      </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│      </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">└─utils       </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">功能组件</span></span>
<span class="line"><span style="color:#A6ACCD;">        logger</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js    </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">日志管理</span></span>
<span class="line"><span style="color:#A6ACCD;">        util</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js       </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">公共小组件库</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span></code></pre></div><h1 id="页面的组成" tabindex="-1">页面的组成 <a class="header-anchor" href="#页面的组成" aria-label="Permalink to &quot;页面的组成&quot;">​</a></h1><p>小程序官方建议把所有小程序的页面 都存放在pages目录中，以单独的文件夹存在。</p><p>pages中页面的后缀：</p><ul><li><code>js</code>文件 页面的脚本文件，存放页面的数据、事件处理函数等</li><li><code>json</code>文件 当前页面的配置文件，配置窗口的外观、表现等</li><li><code>wxml</code>文件 页面的模板结构文件（html）</li><li><code>wxss</code>文件 当前页面的样式表文件（css）</li></ul><h2 id="页面新增" tabindex="-1">页面新增 <a class="header-anchor" href="#页面新增" aria-label="Permalink to &quot;页面新增&quot;">​</a></h2><p>只需要在根目录的<code>app.json</code>-&gt; <code>pages</code>中新增页面的存放路径（ &quot;pages/home/home&quot;），小程序开发者工具即可帮我们自动创建对应的页面文件夹home及内部文件（home.json, home.js, home.wxss, home.wxml）。</p><h2 id="项目首页查看" tabindex="-1">项目首页查看 <a class="header-anchor" href="#项目首页查看" aria-label="Permalink to &quot;项目首页查看&quot;">​</a></h2><p>只需要调整根目录的<code>app.json</code>-&gt;<code>pages</code>数组中页面路径的前后顺序 ，即可修改项目的首页。 小程序会把排在第一位的页面，当做项目首页进行渲染。</p><h1 id="项目中json文件的作用" tabindex="-1">项目中JSON文件的作用 <a class="header-anchor" href="#项目中json文件的作用" aria-label="Permalink to &quot;项目中JSON文件的作用&quot;">​</a></h1><p>小程序中有4种json配置文件:</p><ol><li>项目根目录中的<code>app.json</code>配置文件</li><li>项目根目录中的<code>project.config.json</code>配置文件</li><li>项目根目录中的<code>sitemap.json</code>配置文件</li><li>每个页面文件夹中的<code>.json</code>配置文件</li></ol><h2 id="app-json" tabindex="-1"><code>app.json</code> <a class="header-anchor" href="#app-json" aria-label="Permalink to &quot;\`app.json\`&quot;">​</a></h2><p>是当前小程序的全局配置，包括了小程序<em><strong>所有页面路径</strong></em>、<em><strong>窗口外观、界面表现、底部tab等</strong></em>。</p><p><strong>注意该文件不可添加任何注释。</strong></p><ul><li><code>pages</code>：用来记录当前小程序所有页面的路径</li><li><code>window</code>：全局定义小程序所有页面的背景色、文字颜色</li><li><code>style</code>：全局定义小程序组件所使用样式的版本</li><li><code>sitemapLocation</code>： 用来指明<code>sitemap.json</code>的位置</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">:[</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pages/index/index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pages/logs/logs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">window</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">backgroundTextStyle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">navigationBarBackgroundColor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#fff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">navigationBarTitleText</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Weixin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">navigationBarTextStyle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">black</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">style</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">v2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sitemapLocation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sitemap.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="project-config-json" tabindex="-1">project.config.json <a class="header-anchor" href="#project-config-json" aria-label="Permalink to &quot;project.config.json&quot;">​</a></h2><p><code>project.config.json</code>是项目配置文件，用来记录我们<strong>对小程序开发工具所做的个性化配置</strong>， 例如：</p><ul><li><code>setting</code>中保存了编译相关的配置</li><li><code>projectname</code>中保存的是项目名称</li><li><code>appid</code>保存的是小程序的账号ID</li></ul><pre><code>{
  &quot;description&quot;: &quot;项目配置文件&quot;,
  &quot;packOptions&quot;: {
    &quot;ignore&quot;: [],
    &quot;include&quot;: []
  },
  &quot;setting&quot;: {
    &quot;bundle&quot;: false,
    &quot;userConfirmedBundleSwitch&quot;: false,
    &quot;urlCheck&quot;: true,
    &quot;scopeDataCheck&quot;: false,
    &quot;coverView&quot;: true,
    &quot;es6&quot;: true,
    &quot;postcss&quot;: true,
    &quot;compileHotReLoad&quot;: false,
    &quot;lazyloadPlaceholderEnable&quot;: false,
    &quot;preloadBackgroundData&quot;: false,
    &quot;minified&quot;: true,
    &quot;autoAudits&quot;: false,
    &quot;newFeature&quot;: false,
    &quot;uglifyFileName&quot;: false,
    &quot;uploadWithSourceMap&quot;: true,
    &quot;useIsolateContext&quot;: true,
    &quot;nodeModules&quot;: false,
    &quot;enhance&quot;: true,
    &quot;useMultiFrameRuntime&quot;: true,
    &quot;useApiHook&quot;: true,
    &quot;useApiHostProcess&quot;: true,
    &quot;showShadowRootInWxmlPanel&quot;: true,
    &quot;packNpmManually&quot;: false,
    &quot;enableEngineNative&quot;: false,
    &quot;packNpmRelationList&quot;: [],
    &quot;minifyWXSS&quot;: true,
    &quot;showES6CompileOption&quot;: false,
    &quot;minifyWXML&quot;: true,
    &quot;babelSetting&quot;: {
      &quot;ignore&quot;: [],
      &quot;disablePlugins&quot;: [],
      &quot;outputPath&quot;: &quot;&quot;
    },
    &quot;condition&quot;: false
  },
  &quot;compileType&quot;: &quot;miniprogram&quot;,
  &quot;libVersion&quot;: &quot;2.19.4&quot;,
  &quot;appid&quot;: &quot;wxb4085b7b49ed2b7c&quot;,
  &quot;projectname&quot;: &quot;miniprogram-92&quot;,
  &quot;condition&quot;: {},
  &quot;editorSetting&quot;: {
    &quot;tabIndent&quot;: &quot;insertSpaces&quot;,
    &quot;tabSize&quot;: 2
  }
}
</code></pre><h2 id="sitemap-json" tabindex="-1">sitemap.json <a class="header-anchor" href="#sitemap-json" aria-label="Permalink to &quot;sitemap.json&quot;">​</a></h2><p>微信现已开发小程序内搜索，效果类似于PC网页的SEO。 <code>sitemap.josn</code>文件用来<strong>配置小程序页面是否允许被微信索引。</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">desc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">allow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="页面的json配置文件" tabindex="-1">页面的json配置文件 <a class="header-anchor" href="#页面的json配置文件" aria-label="Permalink to &quot;页面的json配置文件&quot;">​</a></h2><p><strong>对本页面的窗口外观进行设置</strong>，页面中的配置项会覆盖<code>app.json</code>的window中的相同配置项</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">navigationBarTitleText</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">查看启动日志</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">usingComponents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h1 id="小程序渲染流程解析" tabindex="-1">小程序渲染流程解析 <a class="header-anchor" href="#小程序渲染流程解析" aria-label="Permalink to &quot;小程序渲染流程解析&quot;">​</a></h1><h1 id="mpvue" tabindex="-1">mpvue <a class="header-anchor" href="#mpvue" aria-label="Permalink to &quot;mpvue&quot;">​</a></h1><h1 id="小程序与h5深度对比及原理解析" tabindex="-1">小程序与H5深度对比及原理解析 <a class="header-anchor" href="#小程序与h5深度对比及原理解析" aria-label="Permalink to &quot;小程序与H5深度对比及原理解析&quot;">​</a></h1><p><a href="https://juejin.cn/post/7239336033367277629" target="_blank" rel="noreferrer">https://juejin.cn/post/7239336033367277629</a></p><h1 id="小程序框架对比" tabindex="-1">小程序框架对比 <a class="header-anchor" href="#小程序框架对比" aria-label="Permalink to &quot;小程序框架对比&quot;">​</a></h1><p><a href="https://juejin.cn/post/7234028496086073405" target="_blank" rel="noreferrer">https://juejin.cn/post/7234028496086073405</a></p><p>taro</p><p>mpvue</p><p>uni-app</p>`,55),e=[p];function t(c,r,D,y,i,C){return n(),a("div",null,e)}const u=s(o,[["render",t]]);export{F as __pageData,u as default};
