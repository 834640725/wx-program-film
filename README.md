## 微信小程序开发的 豆瓣(数据)+爱奇艺(界面)电影,嘿嘿。

## 前言

前段时间用Vue刚写个印象笔记pc端的，琢磨着准备用Vue也写套移动端，逛技术博客都看到有的人讨论小程序。我就去小程序官网注册了一个小程序账号，开始小程序之旅。

感觉直接看小程序文档没实际的引用场景也不行，于是就一遍查文档一边写这个项目。数据用的反向代理，嗯...。 写着写着突然写出了vue和react的影子。好熟悉的感觉.... 当然其中也碰到不少坑。

## 项目说明

项目名称：豆奇艺电影 😄

数据来源: douban /v2/movie 

微信开发者工具: (1.02.1805181)

## 目录结构

 -  assets——静态资源(image,gif)
 -  component——公用组件
 -  collection——收藏组件
 -  pages
 	- index——首页
 	- movieInfo——电影详情
 	- subject——电影分类
 	- user——用户界面
 	- yugao——预告片播放
 -  record——播放记录
 -  setting——用户设置
 -  subject-movies-types——电影分类数据模板
 
## 项目截图

##### 正在热映(首页)
![正在热映](https://github.com/qiqingfu/wx-program-film/blob/master/assets/img/1_%E6%AD%A3%E5%9C%A8%E7%83%AD%E6%98%A0.jpg)




