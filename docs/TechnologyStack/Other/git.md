---
title: git 使用说明
---
# {{ $frontmatter.title }}
> 代码管理 & 迭代 的工具 
> [参考文档](https://blog.csdn.net/weixin_44950987/article/details/102619708?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1)
> || [命令大全](https://blog.csdn.net/halaoda/article/details/78661334?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)

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

## 命令
### 常用命令
~~~shell
# 查看状态
git status
# 查看文件都修改了什么
git diff 文件名
# 查看日志
git log

# 历史版本管理
git reflog # 查看历史版本 => 附带版本号
git reset --hard 版本号 # 回退到指定版本
# 回退到历史版本
git reset --hard HEAD^ # 代表上一个版本
git reset --hard HEAD^^ # 代表上上版 
git reset --hard HEAD~数字 # 同上

# 撤销修改
git checkout --文件名 # 将上一次提交的文件 拉回工作区 => 已add 但未commit
# 方法一: 回退到上一版本
# 方法二: 手动更改文件 再 add => commit
# 方法三: 
git restore --文件名 # 丢弃工作区的修改

# 本地文件远程关联github仓库
git remote add origin git@github.com:wangxin98521/ceshi.git

# 上传本地代码
git push -u origin master # 简写: git push
~~~

### 分支
~~~shell
# 查看分支
git branch
# 创建分支
git branch 分支名称 # 创建并切换 => git checkout -b 分支名
# 切换分支:
git checkout 分支名称 
# 删除分支:
git branch -d 分支名称
# 更改分支名称:
git reset –hard 分支重命名
# 合并某分支到当前分支
git merge 被合并的分支名

# 更新云端分支代码到本地:
git pull origin 云端分支名称
# 将本地代码上传到云端
git push origin 本地分支:云端分支
# 删除远程分支
git push origin --delete 分支名称
# 将远程git仓库里的指定分支拉取到本地（本地不存在的分支）
git checkout -b 本地分支名 origin/远程分支名
~~~

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