---
title: vitePress 使用说明
sidebarDepth: 1
---
# {{ $frontmatter.title }}

> vitePress 是 `vuePress` 的升级版; 主要为展示 **markdown** 笔记<br/>
>  [vitePress官方文档](https://fttp.jjf-tech.cn/vitepress/) |
> [vuePress官方文档](https://vuepress.vuejs.org/zh/)

## 安装
~~~shell
# 初始化项目
npm init
# 安装 vitePress
npm i -D vitepress
~~~
---
<tag />
<wx />
<span v-for="i in [1,2,3,4,5]" :key='i'>{{ i * 2 }} </span>

## 初始化项目
- 首先创建一个docs目录 [目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html)
- 然后再创建 **.vitepress** 目录
  + 创建配置文件 **config.js** [配置项](https://vuepress.vuejs.org/zh/config/)
~~~js
// .vuepress/config.js
module.exports = {
    title: '苏年璟',
    lang: 'zh-US', // 语言
    description: '描述文字',
    theme: 'theme', // 使用的主题 默认主题可以去掉此选项
    markdown: { // markdown 配置
        lineNumbers: true, // 是否展示行号
        anchor: { permalink: false },
        toc: { includeLevel: [1, 2] },
    },
    themeConfig: { // 主题配置
        search: true, // 搜索框 无效果
        lastUpdated: '最后更新', // 提示文字
        nav: [], // 导航栏配置
        sidebar: {}, // 侧边栏配置
        repo: 'wangxin98521/vitePress', // 仓库
        repoLabel: '查看源码',
    }
}
~~~
---

## 配置
> [配置参考](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)

### 路径
- 路径跳转 /路径名/ 默认该文件夹下的 index.md
- /路径名/xx.html 该文件夹下的 xx.md

### 导航栏
- 全局配置
~~~js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // nav: false, // 禁用导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '首页', link: '/', target:'_blank' }, // target: 可选（_blank & _self） 新建窗口打开
      {
        text: 'Languages',
        items: [ // 带下拉菜单的
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
  }
}
~~~
- 单文件配置
~~~yaml
---
nav: false # 当前页面禁用导航栏
---
~~~

### 侧边栏
- 全局配置
~~~js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    displayAllHeaders: true, // 显示所有页面的标题链接
    // sidebar: 'auto', // 自动生成
    // sidebar: false, // 不展示侧边栏
    sidebar: { // 根据路径生成多个侧边栏 【单个 使用对象[]】
      '/vitePress/': [
        { text: '标签', link: '/tags/' },
        {
          text: '技术栈',
          children: [ // 分组
            { text: 'vitePress', link: '/vitePress/' },
            { text: 'aa', link: '/vitePress/aa' },
          ]
        }
      ],
      '/': { text: '首页', link: '/'}, // / 为 未定义 以外的全部页面(除HOME) 的侧边栏 [放最下]
    },
  }
}
~~~
- 单文件配置
~~~yaml
---
#sidebar: auto # 根据 标题生成 [h2, h3]
sidebar: false # 禁用
---
~~~

### 最后更新时间
~~~js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    lastUpdated: '最后更新', // string | boolean
  }
}
~~~

### 上 / 下一篇链接
- 全局配置
~~~js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  }
}
~~~
- 单文件配置
~~~yaml
---
prev: ./some-other-page # 上一篇 自定义地址
next: false
---
~~~

### 配置Git仓库
- 全局
~~~js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}
~~~
- 单文件配置
~~~yaml
---
editLink: false # 禁用指定页面的编辑链接
---
~~~

### 自定义页面类
- 单文件配置
~~~yaml
---
pageClass: custom-page-class
---
~~~
- 修改样式 【指定`.vuepress/styles/index.styl` 文件下】
~~~css
/* .vuepress/styles/index.styl */

.theme-container.custom-page-class {
  /* 特定页面的 CSS */
}
~~~
### markDown 扩展
> [官方配置](https://fttp.jjf-tech.cn/vitepress/guide/markdown.html)
