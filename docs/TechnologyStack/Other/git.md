---
title: git 使用说明
---
# {{ $frontmatter.title }}
> 代码管理 & 迭代 的工具

## 基本命令
~~~shell
# 提交
git add . # . 全部 也可以单个文件提交
# 给提交的内容 输入备注
git commit -m '' # 引号里面是 备注的内容
# 获取
git pull # 拉取最新的代码 防止冲突
# 推送
git push # 推送前 需要解决现有的冲突
~~~
---

## 使用流程
### 注册
> 程序员怎么可以没有自己的GitHub账号呢???<br/>
> 有条件上[github](https://github.com/) 没条件上[gitee](https://gitee.com/)
- gitee 属于国内,商业气息较重;中文 适合国内开发者
- github 属于国外,有墙;优秀项目较多 开源
- 只要代码写得好,上哪个都一样
### 绑定
- 电脑需要生成key 存于 账号中
~~~shell
# -C来指定所指定的注释，可以方便用户标识这个密钥
ssh-keygen -t rsa -C "youremail@example.com"
~~~
- 绑定到账号<br />
    + 生成的ssh公钥存放路径在 `[c盘->用户->自己的用户名->.ssh]` 目录下<br />
    + 将`id_rsa.pub` 文件内容(以文本打开) 复制<br />
    + 添加到 git中: `[账号头像->设置->SSH and GPG keys->new ssh key]`
### 配置
> 电脑需要配置身份信息 -> 这样就知道代码是谁提交的
~~~shell
git config --global user.name "用户名"
git config --global user.email "邮箱"
~~~
### 使用
~~~shell
# 初始化 在代码根目录执行
git init
# 提交代码
git add . # 提交所有文件
git add views # 提交该views 目录下所有文件
git add app.js # 提交app.js 单个文件
# 当前提交注释
git commit -m "初始化" # 提交时 说明当前提交了什么
# 绑定仓库
git remote add origin 仓库地址 # 提前在账号中注册一个仓库
# 推送到仓库去
git push -u origin master
~~~