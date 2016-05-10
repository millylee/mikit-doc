# MiKit 简介

## 关于

MiKit 基于 [StartPoint](https://github.com/lildemon/contdelivery)，修复了一些已知 BUG，并结合当前业务添加了一些常用功能。

目前还是延用```nwjs```进行开发，等功能健全及时间空余将考虑使用功能、社区都更加完善的```Electron```进行重构。

## 功能

- 内置SSI(.shtml)的语法支持，实现html模块化，复用html代码
- SASS(.scss)语言支持，.scss文件为css的超集，可以在现有的css代码使用scss提供的语法&框架
- coffeescript语句编译
- 默认支持保存文件后自动刷新浏览器，无需额外配置
- 同时托管N个项目，不占用额外端口，项目之间以域名区分
- 整合了FIS的代码编译打包工具，实现自动压缩合并js、css文件，自动优化图片尺寸，css sprite、base64编码整合、自定义图片域名等功能
- 项目打包后的文件头部加上作者、团队、版本、编译时间等信息

## 系统

开发环境是```Win10-x64```，理论上支持 Win7 及以上的 64 位系统，32 位系统请谨慎下载。

## 下载

MiKit 目前选择发布到阿里巴巴的[TaoCode](http://code.taobao.org/p/MiKit/src/trunk/)，完整包以```MiKit_version.exe```命名，升级包以```MiKit_patch_oldversion_newversion.exe```命名，进入后找到对应版本下载即可。