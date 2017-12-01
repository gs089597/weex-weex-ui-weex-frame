# weex-weex-ui-weex-frame
weex三端统一开放框架，集成了weex-ui natjs

https://github.com/walid1992/weex-frame 项目修改版本

[![GitHub release](https://img.shields.io/github/release/osmartian/weex-frame.svg)](https://github.com/osmartian/weex-frame/releases)  [![GitHub issues](https://img.shields.io/github/issues/osmartian/weex-frame.svg)](https://github.com/osmartian/weex-frame/issues)
![Node Version](https://img.shields.io/node/v/martian-cli.svg "Node Version")

# weex-frame

> weex 基于vue2.0开发框架，包括三端集成、组件库提供、weex api封装~

目前 Weex 官网域名统计如下：
    weexpack 参考https://github.com/weexteam/weex-pack/tree/dev
    natjs 参考http://natjs.com/
    weex-ui参考https://github.com/alibaba/weex-ui
    https://weex.apache.org : Apache 官网地址，部署于 apache 仓库，国内访问速度较慢。
    https://weex-project.io : Weex 官网中国镜像，部署于阿里云，国内访问速度较快。

大家可根据实际需求选择访问。

# 工作原理

先简单熟悉一下weex的工作原理，这里引用一下weex官网上的一张图片，[详细信息见官网](https://weex.apache.org/cn/guide/intro/how-it-works.html)

![Weex工作原理](http://upload-images.jianshu.io/upload_images/2843033-a11114f55ceb7478.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640)

# 开发环境搭建

## weex 开发环境搭建

[关于weex开发环境搭建问题见官方文档](https://weex.apache.org/cn/guide/set-up-env.html)

## android 、iOS 开发环境

[关于native开发环境搭建问题见官方文档](https://weex.apache.org/cn/guide/integrate-to-your-app.html)

# 框架说明

## 基于vue2.0搭建

像前面说的那样weex和vue一直在努力的进行生态互通，而且weex实现web标准化是早晚的问题，所以也建议开发者不要在用.we做后缀来开发了

## native端多页模式、web端采用单页模式

* 单页形态对于原生可能体验不够好，所以android与ios端采用多页模式
* web端沿用spa模式标准

## 集成三端（android、ios、h5平台）

关于android、ios、h5平台的集成与打包问题，在项目中都以解决~

##  集成 weexpack 工具

可以使用weexpack相关功能~
