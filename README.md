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
![正在热映](https://github.com/qiqingfu/uc/blob/master/wx-image/1_%E6%AD%A3%E5%9C%A8%E7%83%AD%E6%98%A0.jpg)

##### 电影详情
![电影详情](https://github.com/qiqingfu/uc/blob/master/wx-image/2_%E7%94%B5%E5%BD%B1%E8%AF%A6%E6%83%85.jpg)

##### 预告片
![预告片](https://github.com/qiqingfu/uc/blob/master/wx-image/3_%E9%A2%84%E5%91%8A%E7%89%87%E6%92%AD%E6%94%BE.jpg)

##### 电影分类
![电影分类](https://github.com/qiqingfu/uc/blob/master/wx-image/4_%E7%94%B5%E5%BD%B1%E5%88%86%E7%B1%BB.jpg)

##### 用户登陆
![用户登陆](https://github.com/qiqingfu/uc/blob/master/wx-image/5_%E7%94%A8%E6%88%B7%E7%99%BB%E9%99%86.jpg)

##### 授权验证
![授权验证](https://github.com/qiqingfu/uc/blob/master/wx-image/6_%E7%94%A8%E6%88%B7%E6%8E%88%E6%9D%83.jpg)

##### 播放记录
![播放记录](https://github.com/qiqingfu/uc/blob/master/wx-image/7_%E6%92%AD%E6%94%BE%E8%AE%B0%E5%BD%95.jpg)

##### 设置
![设置](https://github.com/qiqingfu/uc/blob/master/wx-image/8_%E8%AE%BE%E7%BD%AE.jpg)




