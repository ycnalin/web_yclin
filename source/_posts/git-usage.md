---
title: Git常用命令
date: 2017-11-21 17:52:19
categories:
- 程序员笔记
tags: 
- Git
---

## 用户配置
```shell
git config --global user.name "your nme"   #以我的账户为例
git config --global user.email "email_name@gmail.com"
git config --global core.editor vim    #非必需的命令
```
## 查看配置、状态、帮助
```shell
git config --list
git status    #查看文件状态
git help commands
```
## Clone和Push命令
```shell
git clone https://github.com/ycnalin/java-2017f-homework.git
touch README.md
echo this is a test >README.md
git push -u origin master    #第一次push时加上-u与远程仓库关联
```
## 跳过暂存区提交
给 git commit 加上 -a 选项，就可以跳过git add 命令将已跟踪的修改一并提交
```shell
git commit -a -m "trivial modification"
```
## 避免Push时输入密码
使用ssh协议推送
```shell
git remote -v    #查看远程地址
git remote rm origin    #删除原推送地址
git add remote origin git@github.com:user_name/repositories.git
```
如何设置SSH Keys [请到此处](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2 "请到此处")
## 设置socks代理
国内网络环境下访问github会比较慢，可以为git设置代理
```shell
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```
## 从上游更新本地代码
这一步也可以在github上直接操作，[详见链接](https://jinlong.github.io/2015/10/12/syncing-a-fork/ "详见链接")
```shell
git remote -v    #查看remote内容
git remote add upstream https://github.com/name/repository.git
git fetch upstream    #获取上游仓库内容
git checkout master    #切换到本地主分支
git merge upstream/master    #合并上游分支
git push origin master    #推送到远程仓库
```
## 代码回滚

1、git add 添加错了文件，还没commit
```shell
git status    #先查看git状态
git reset HEAD    #撤销上一次add的全部文件
git reset HEAD filename.c    #仅撤销上一次add的某个文件
```
2、git add之后, 又使用了git commit
```shell
git log    #查看最近几次commit的哈希值，复制想要回退的节点的commit_id
git reset <commit_id>    #仅撤销git add和git commit的内容，不修改代码
# git commit --hard <commit_id>    #同时回退修改的代码，慎用
```
3、还原已经提交的修改
```shell
git revert HEAD~2    #Revert 撤销一个提交的同时会创建一个新的提交，不会重写提交历史。
# HEAD 上一次递交，HEAD^ 前前一次提交，HEAD~n 前n次提交
```
4、向远程仓库推送了不该推送的内容
```shell
git reset --hard <commit_id>
git push origin HEAD --force    #HEAD表示最近一次提交
```
回滚详细介绍[请到此处](https://github.com/geeeeeeeeek/git-recipes/wiki/5.2-%E4%BB%A3%E7%A0%81%E5%9B%9E%E6%BB%9A%EF%BC%9AReset%E3%80%81Checkout%E3%80%81Revert-%E7%9A%84%E9%80%89%E6%8B%A9 "转至此处")


