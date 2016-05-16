# 快速入门

## 一、新建或打开项目

在文件夹上或文件夹内部右键```使用 MiKit 新建或打开``` 可以打开已有或新建项目。

**注意，这种方法会清空文件夹的内容，所以不要在桌面上或有重要文件的文件夹上右键打开**

![](./md/img/doc-sf-03.jpg)

如果是没有```wwwroot```子文件夹，则会被认为是新项目，此时会有新建项目的界面，目前预留了三种方案，可以根据实现情况选择，这里演示用的是创建空项目，然后就可以在```wwwroot```存放平时用到的```HTML/CSS/JS/img```等文件。

![](./md/img/doc-open-proj.jpg)

作者等信息默认读取全局设置信息，其它项目基本信息可以手动补全或不填写，最终这些信息会在项目根目录生成一个```package.json```文件。

![](./md/img/doc-create-proj-interface.jpg)

创建成功后会默认加载该项目，点击链接即可预览```wwwroot```里面的内容。

![](./md/img/doc-new-proj-created.jpg)

## 二、打开项目

打开一个已存在的项目除了上面介绍的方法，还可以直接从项目历史中载入（最多支持10条历史），```文件 -> 打开```，```从文件夹装载项目```三种方法。

使用```.shtml```与```sass```来模块化管理 HTML、CSS组件（组件都要添加```_```前缀，该类文件不会被编译），编码完点击打包即可合并编译文件为```.html```与```.scss```，以上就是最简单与常用的功能。

![](./md/img/doc-proj-open.jpg)

路径坚持使用英文命名是一个好习惯，认为看中文比较舒服可以在文件夹下新建一个```desktop.ini```来实现路径英文，但显示中文及自定义图标，文件内容如下。

```
[.ShellClassInfo]
LocalizedResourceName=本地站点
IconResource=D:\icons\icon_chrome.ico
[ViewState]
Mode=
Vid=
FolderType=Documents
```

通过以上定义显示的是自定义的图标和中文文件名

![](./md/img/doc-custom-foldername-cn.jpg)

但查看路径时可以看出其实是英文路径

![](./md/img/doc-custom-foldername-en.jpg)