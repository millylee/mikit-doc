# 打包配置

## 一、输出目录名

由于使用场景中可能需要将打包后的文件发给需求方，所以MiKit增加了输出目录名的配置。

加载项目后点击```配置```进入到配置页，在```打包配置```这里可以看到```输出目录名```，这里可以设置需求的文件夹名称，支持中文，点击保存按钮确定。

![](./md/img/doc-pack-01.jpg)

返回到主界面点击打包按钮即可使用新的输出目录名，打包完成后会自动打开文件项目文件夹，此时直接将打包后的文件夹发给需求方即可。

![](./md/img/doc-pack-02.jpg)

有一点需求注意，**新版本为了防止旧文件的冗余，打包前会先删除输出文件夹，所以不要将一些重要文件放在```dist```或你设置的输出文件夹，或者将输出目录名设置成```wwwroot```等**。

## 二、资源重定向

- 压缩HTML
- 压缩CSS
- 压缩JS
- 压缩PNG

勾选对应选项则会压缩```wwwroot```下对应的文件。


## 三、CSS3前缀

默认情况只需勾选```自动添加前缀```即可，打包时就会根据所有主流浏览器的最近2个版本支持情况来添加前缀，该数据来自CanIuse；当前，也可以自己设置更多规则，比如移动端基本不考虑```WindowPhone```，所以不用``-ms-````前缀。

![](./md/img/doc-pre-01.jpg)

所有的浏览器规则可以在[Browserslist](https://github.com/ai/browserslist#queries)中查看，以下做一个简要的介绍。

### 规则说明：

- ```last 2 versions```: 所有主流浏览器最近2个版本
- ```last 2 Chrome versions```: Chrome 最近2个版本
- ```> 5%```: 全球范围内大于5%的使用
- ```> 5% in US```: 美国地区大于5%的使用
- ```ie 6-8```: ie 6/7/8
- ```Firefox > 20```: 火狐版本大于20
- ```Firefox >= 20```: 火狐版本大于等于20
- ```Firefox < 20```: 火狐版本小于20
- ```Firefox <= 20```: 火狐版本小于等于20
- ```iOS 7```: iOS 7 浏览器
- ```not ie <= 8```: 不考虑 ie8 及 ie8 以下

### 主流浏览器代号：

- ```Chrome``` 表示 Google Chrome
- ```Firefox``` 或 ```ff``` 表示 Mozilla Firefox
- ```Explorer``` 或 ```ie``` 表示 Internet Explorer
- ```Edge``` 表示 Microsoft Edge
- ```iOS``` 或 ```ios_saf``` 表示 iOS Safari
- ```Opera``` 表示 Opera
- ```Safari``` 表示桌面版的 Safari
- ```ExplorerMobile``` 或 ```ie_mob``` 表示移动版Internet Explorer

### 其它浏览器代号：

- ```Android``` 表示安卓 Webview
- ```BlackBerry``` 或 ```bb``` 表示黑莓浏览器
- ```ChromeAndroid``` 或 ```and_chr``` 表示安卓版的Chrome (基本表现和Chrome差不多)
- ```FirefoxAndroid``` 或 ```and_ff``` 表示 安卓版Firefox
- ```OperaMobile``` 或 ```op_mob``` 表示 Opera Mobile
- ```OperaMini``` 或 ```op_mini``` 表示 Opera Mini

一般不用开启``支持转换flexbox/gradient老语法````功能，除非原来的样式表中使用到了旧的语法，开启该功能后会帮你添加新语法，例如：

flexbox老语法：

```
.foo {
  display: -webkit-box;
  -webkit-box-pack: justify;
}
```

转换后：

```
.foo {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
```

gradient老语法：

```
.foo {
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ffffff), to(#f0efe7));
}
```

转换后：

```
.foo {
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ffffff), to(#f0efe7));
  background: linear-gradient(to bottom, #ffffff 0%, #f0efe7 100%);
}
```

## 四、自定义合并规则

> 暂不可用