---
home: false
heroImage: /hero.png
heroText: Hero 标题11
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /foo/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue3 + vite 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VitePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
  footer: MIT Licensed | Copyright © 2018-present Evan You
---
> sss 
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
:::