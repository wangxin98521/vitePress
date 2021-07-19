import{o as n,c as s,a,b as p,t as e,d as t}from"./app.52b163c2.js";const o='{"title":"vitePress 使用说明","description":"","frontmatter":{"title":"vitePress 使用说明","sidebarDepth":1},"headers":[{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"初始化项目","slug":"初始化项目"},{"level":2,"title":"配置","slug":"配置"},{"level":3,"title":"路径","slug":"路径"},{"level":3,"title":"导航栏","slug":"导航栏"},{"level":3,"title":"侧边栏","slug":"侧边栏"},{"level":3,"title":"最后更新时间","slug":"最后更新时间"},{"level":3,"title":"上 / 下一篇链接","slug":"上-下一篇链接"},{"level":3,"title":"配置Git仓库","slug":"配置git仓库"},{"level":3,"title":"自定义页面类","slug":"自定义页面类"},{"level":3,"title":"使用组件","slug":"使用组件"},{"level":3,"title":"markDown 扩展","slug":"markdown-扩展"}],"relativePath":"TechnologyStack/Vue/vitePress.md","lastUpdated":1622735785163}',l={},c={id:"frontmatter-title"},r=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=t('<blockquote><p>vitePress 是 <code>vuePress</code> 的升级版; 主要为展示 <strong>markdown</strong> 笔记<br><a href="https://fttp.jjf-tech.cn/vitepress/" target="_blank" rel="noopener noreferrer">vitePress官方文档</a> | <a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vuePress官方文档</a></p></blockquote><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-shell line-numbers-mode"><pre><code><span class="token comment"># 初始化项目</span>\n<span class="token function">npm</span> init\n<span class="token comment"># 安装 vitePress</span>\n<span class="token function">npm</span> i -D vitepress\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h2 id="初始化项目"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><ul><li>首先创建一个docs目录 <a href="https://vuepress.vuejs.org/zh/guide/directory-structure.html" target="_blank" rel="noopener noreferrer">目录结构</a></li><li>然后再创建 <strong>.vitepress</strong> 目录 <ul><li>创建配置文件 <strong>config.js</strong> <a href="https://vuepress.vuejs.org/zh/config/" target="_blank" rel="noopener noreferrer">配置项</a></li></ul></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// .vuepress/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;苏年璟&#39;</span><span class="token punctuation">,</span>\n    lang<span class="token operator">:</span> <span class="token string">&#39;zh-US&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 语言</span>\n    description<span class="token operator">:</span> <span class="token string">&#39;描述文字&#39;</span><span class="token punctuation">,</span>\n    theme<span class="token operator">:</span> <span class="token string">&#39;theme&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 使用的主题 默认主题可以去掉此选项</span>\n    markdown<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// markdown 配置</span>\n        lineNumbers<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否展示行号</span>\n        anchor<span class="token operator">:</span> <span class="token punctuation">{</span> permalink<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        toc<span class="token operator">:</span> <span class="token punctuation">{</span> includeLevel<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 主题配置</span>\n        search<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 搜索框 无效果</span>\n        lastUpdated<span class="token operator">:</span> <span class="token string">&#39;最后更新&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 提示文字</span>\n        nav<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏配置</span>\n        sidebar<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏配置</span>\n        repo<span class="token operator">:</span> <span class="token string">&#39;wangxin98521/vitePress&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 仓库</span>\n        repoLabel<span class="token operator">:</span> <span class="token string">&#39;查看源码&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><hr><h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><blockquote><p><a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html" target="_blank" rel="noopener noreferrer">配置参考</a></p></blockquote><h3 id="路径"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h3><ul><li>路径跳转 /路径名/ 默认该文件夹下的 <a href="http://index.md" target="_blank" rel="noopener noreferrer">index.md</a></li><li>/路径名/xx.html 该文件夹下的 <a href="http://xx.md" target="_blank" rel="noopener noreferrer">xx.md</a></li></ul><h3 id="导航栏"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h3><ul><li>全局配置</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// .vuepress/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// nav: false, // 禁用导航栏</span>\n    nav<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> target<span class="token operator">:</span><span class="token string">&#39;_blank&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// target: 可选（_blank &amp; _self） 新建窗口打开</span>\n      <span class="token punctuation">{</span>\n        text<span class="token operator">:</span> <span class="token string">&#39;Languages&#39;</span><span class="token punctuation">,</span>\n        items<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 带下拉菜单的</span>\n          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Chinese&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/language/chinese/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Japanese&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/language/japanese/&#39;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>单文件配置</li></ul><div class="language-yaml line-numbers-mode"><pre><code><span class="token punctuation">---</span>\n<span class="token key atrule">nav</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 当前页面禁用导航栏</span>\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="侧边栏"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h3><ul><li>全局配置</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// .vuepress/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n    displayAllHeaders<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示所有页面的标题链接</span>\n    <span class="token comment">// sidebar: &#39;auto&#39;, // 自动生成</span>\n    <span class="token comment">// sidebar: false, // 不展示侧边栏</span>\n    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 根据路径生成多个侧边栏 【单个 使用对象[]】</span>\n      <span class="token string">&#39;/vitePress/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;标签&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/tags/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          text<span class="token operator">:</span> <span class="token string">&#39;技术栈&#39;</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 分组</span>\n            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;vitePress&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/vitePress/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/vitePress/aa&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// / 为 未定义 以外的全部页面(除HOME) 的侧边栏 [放最下]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>单文件配置</li></ul><div class="language-yaml line-numbers-mode"><pre><code><span class="token punctuation">---</span>\n<span class="token comment">#sidebar: auto # 根据 标题生成 [h2, h3]</span>\n<span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 禁用</span>\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="最后更新时间"><a class="header-anchor" href="#最后更新时间" aria-hidden="true">#</a> 最后更新时间</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// .vuepress/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n    lastUpdated<span class="token operator">:</span> <span class="token string">&#39;最后更新&#39;</span><span class="token punctuation">,</span> <span class="token comment">// string | boolean</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="上-下一篇链接"><a class="header-anchor" href="#上-下一篇链接" aria-hidden="true">#</a> 上 / 下一篇链接</h3><ul><li>全局配置</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// .vuepress/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接</span>\n    nextLinks<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接</span>\n    prevLinks<span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>单文件配置</li></ul><div class="language-yaml line-numbers-mode"><pre><code><span class="token punctuation">---</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> ./some<span class="token punctuation">-</span>other<span class="token punctuation">-</span>page <span class="token comment"># 上一篇 自定义地址</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="配置git仓库"><a class="header-anchor" href="#配置git仓库" aria-hidden="true">#</a> 配置Git仓库</h3><ul><li>全局</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// .vuepress/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL</span>\n    repo<span class="token operator">:</span> <span class="token string">&#39;vuejs/vuepress&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为</span>\n    <span class="token comment">// &quot;GitHub&quot;/&quot;GitLab&quot;/&quot;Bitbucket&quot; 其中之一，或是 &quot;Source&quot;。</span>\n    repoLabel<span class="token operator">:</span> <span class="token string">&#39;查看源码&#39;</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// 以下为可选的编辑链接选项</span>\n\n    <span class="token comment">// 假如你的文档仓库和项目本身不在一个仓库：</span>\n    docsRepo<span class="token operator">:</span> <span class="token string">&#39;vuejs/vuepress&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 假如文档不是放在仓库的根目录下：</span>\n    docsDir<span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 假如文档放在一个特定的分支下：</span>\n    docsBranch<span class="token operator">:</span> <span class="token string">&#39;master&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 默认是 false, 设置为 true 来启用</span>\n    editLinks<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// 默认为 &quot;Edit this page&quot;</span>\n    editLinkText<span class="token operator">:</span> <span class="token string">&#39;帮助我们改善此页面！&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>单文件配置</li></ul><div class="language-yaml line-numbers-mode"><pre><code><span class="token punctuation">---</span>\n<span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 禁用指定页面的编辑链接</span>\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="自定义页面类"><a class="header-anchor" href="#自定义页面类" aria-hidden="true">#</a> 自定义页面类</h3><ul><li>单文件配置</li></ul><div class="language-yaml line-numbers-mode"><pre><code><span class="token punctuation">---</span>\n<span class="token key atrule">pageClass</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>page<span class="token punctuation">-</span>class\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>修改样式 【指定<code>.vuepress/styles/index.styl</code> 文件下】</li></ul><div class="language-css line-numbers-mode"><pre><code><span class="token comment">/* .vuepress/styles/index.styl */</span>\n\n<span class="token selector">.theme-container.custom-page-class</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* 特定页面的 CSS */</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="使用组件"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h3><blockquote><p>vitePress 可以在md文件中 使用 html标签 &amp; vue组件</p></blockquote><ul><li>html标签使用</li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 3<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>span标签 {{ i }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>vue 组件使用</li></ul><div class="language-javascript line-numbers-mode"><pre><code><span class="token comment">/* .vitePress/theme/index.js */</span>\n<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/dist/client/theme-default&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 默认主题扩展</span>\n<span class="token keyword">import</span> tag <span class="token keyword">from</span> <span class="token string">&#39;./component/tag.vue&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 自己建相应的组件</span>\n<span class="token keyword">import</span> text <span class="token keyword">from</span> <span class="token string">&#39;./component/text.vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>DefaultTheme<span class="token punctuation">,</span> <span class="token comment">// 默认主题扩展</span>\n\n    <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注册组件</span>\n        app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;wx&#39;</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注册 wx 组件(使用: &lt;wx /&gt;)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="markdown-扩展"><a class="header-anchor" href="#markdown-扩展" aria-hidden="true">#</a> markDown 扩展</h3><blockquote><p><a href="https://fttp.jjf-tech.cn/vitepress/guide/markdown.html" target="_blank" rel="noopener noreferrer">官方配置</a></p></blockquote>',47);l.render=function(t,o,l,i,k,m){return n(),s("div",null,[a("h1",c,[r,p(" "+e(t.$frontmatter.title),1)]),u])};export default l;export{o as __pageData};