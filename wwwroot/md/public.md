# 发布域名前缀配置

## 一、自定义

> 高级功能且目前支持不完善，直接使用图片资源域名或全局资源域名即可满足大部分场景。

**注意：以下功能都需要开启资源重定向功能**

## 二、图片资源域名

![](./md/img/doc-public-01.jpg)

如图所示添加域名，不要以```/```结尾，可添加多个 CDN 地址，MiKit 会自动查找本地图片是否存在，如果存在则随机添加 CDN 地址。

## 三、全局资源域名

与图片资源域名类似，全局资源域名是指给 ```html``` 里面引用到的本地 CSS/JS 等地址添加域名前缀。

**打包前**

```
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Public Domain</title>
    <link type="text/css" rel="stylesheet" href="css/pure-min.css">
    <link type="text/css" rel="stylesheet" href="css/custom.css">
</head>
<body>
    <script type="text/javascript" src="js/lib/markd.js"></script>
    <script type="text/javascript" src="js/lib/highlight.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</body>
</html>
```

**打包后**

```
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Public Domain</title>
    <link type="text/css" rel="stylesheet" href="http://static.milly.me/css/pure-min.css">
    <link type="text/css" rel="stylesheet" href="http://static.milly.me/css/custom.css">
</head>
<body>
    <script type="text/javascript" charset="utf-8" src="http://static.milly.me/js/lib/markd.js"></script>
    <script type="text/javascript" charset="utf-8" src="http://static.milly.me/js/lib/highlight.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="http://static.milly.me/js/main.js"></script>
</body>
</html>
```