---
title: 使用SecureCRT快速的上传和下载文件
date: 2018-03-28 16:26:07
categories:
- 程序员笔记
tags: 
- SecureCRT
---


SecureCRT是一款支持SSH（SSH1和SSH2）的终端仿真程序，简单地说是Windows下登录UNIX或Linux服务器主机的软件。
配置好SecureCRT软件后，使用Linux的**sz**、**rz**命令可以很方便的在服务器端和客户端之间传递数据。SecureCRT支持Mac、Linux、IOS三个平台，使用非常方便。我使用的是Windows版的SecureCRT，版本是8.1.0。

<!--more-->

### 使用步骤

#### 1、客户端安装SecureCRT
下载安装请[转到此处](https://www.vandyke.com/products/securecrt/windows.html "转到此处")

#### 2、Linux端安装lrzsz程序
```shell
sudo apt install lrzsz
```
#### 3、设置上传和下载文件默认路径
打开SecureCRT：OPTIONS→Session Options→X/Y/Zmodem

<img src="https://blog-1256366574.cos.ap-shanghai.myqcloud.com/images/demo.jpg" width="50%" height="50%">

#### 4、传递文件
客户端发送文件至服务器端：服务器端 → 客户端
```shell
rz   #客户端输入rz后敲击Enter会自动弹出文件选择框
```
服务器端发送文件之客户端：客户端 → 服务器端
```shell
 sz [options] file   #例如 sz -i ../example.txt
```

>  **传输大文件时要特别注意**：
单独用`rz`会有两个问题：上传中断、上传文件变化（md5不同），
解决办法是上传是用`rz -be`，并且去掉弹出的对话框中“Upload files as ASCII”前的勾选。
`rz -be`的含义是使用二进制流传输，并跳过所有控制字符。详情请查看帮助`rz --help`

<br />
### 传输协议简介

在SecureCRT下的传输协议主要有**Xmodem**、**Ymodem**、**Zmodem** 3种。[Xmodem](https://en.wikipedia.org/wiki/XMODEM?oldformat=true "Xmodem")是在1977年由Ward christensen创建的用于调制解调器纠错的协议，是一种简单文件传输协议, 具有流量控制功能。Ymodem协议和Zmodem均是对Xmodem协议的改进。

其中ZMODEM是**最有效的一个XMODEM版本**，采用了串流式传输方式，传输速度较快，而且还具有自动改变区段大小和断点续传、快速错误侦测等功能。这是目前最流行的文件传输协议。

