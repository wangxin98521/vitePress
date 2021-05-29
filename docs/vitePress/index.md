---
title: vitePress 使用说明
editLink: true
sidebar: auto
---
# {{ $frontmatter.title }}

> vitePress 是 `vuePress` 的升级版; 主要为展示 **markdown** 笔记<br/>
>  [vitePress官方文档](https://fttp.jjf-tech.cn/vitepress/) |
> [vuePress官方文档](https://vuepress.vuejs.org/zh/)

## 安装
~~~shell
# 初始化项目
npm init
# 安装vitePress
npm i -D vitepress
~~~
---
## 初始化项目
- 首先创建一个docs目录
- 然后再创建 **.vitepress** 目录
  + 创建配置文件 **config.js**
~~~js
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
    }
}
~~~

> 额外
- 路径跳转 /路径名/ 默认该文件夹下的 index.md
- /路径名/xx.html 该文件夹下的 xx.md