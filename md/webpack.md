# Webpack 配置

## 一、Pack目录名

![](./md/img/doc-webpack-01.jpg)

```pack```是 Webpack 打包 CommonJS 等风格文件为浏览器可解析文件的目录。开发阶段该目录的文件是实时更新的，文件需要打包后才能看得到，但我们可以在 ```.html``` 中引入，例如：

```
// 打包前该文件在目录中是看不到的
<script src="app/main.js"></script>
```

**小技巧:** 如果文件放在 Eclipse 项目中，那么可以把 MiKit 当成 SCSS 与 CommonJS 编译器，直接引用对应文件的网址，比如本项目使用到的是```http://mikit-doc.i.milly.me```，那么该项目下面的SCSS、以及Pack下面的文件可以直接引入其它页面中，并且是实时刷新的。

```
//样式引用
<link href="http://mikit-doc.i.milly.me/css/style.css">
//脚本引用
<script src="http://mikit-doc.i.milly.me/app/main.js"></script>
```

## 二、Entry 配置

![](./md/img/doc-webpack-02.jpg)

Webpack 入口文件配置，这里设置哪些文件要被打包成入口文件或公共文件。设置为公共文件后 Webpack 会自动帮我们提取出共同部分，这样在页面中引入这个共同文件即可，其它不一致的部分再单独引用。例如上图的配置，我们只需要在页面这样引入：

```
//首页可能是这样
<script src="app/common.js"></script>
<script src="app/index.js"></script>

//列表页
<script src="app/common.js"></script>
<script src="app/list.js"></script>
```

## 三、实验性

> 暂不可用

## 四、Alias 配置

> 暂不可用

## 五、其它说明

1、MiKit 预留了一个功能，```PRODUCTION``` 在打包前为 ```false```，打包后为```true```，可以由此来切换生产环境或开发环境，选择是否输出调试信息等。

```
if (PRODUCTION) {
    console.log('生产环境');
} else {
    console.log('开发环境');
}
```

2、如果第三方库或文件不支持 CommonJS，则可以使用以下方式来调用。

```
var foo = require("exports?foo!./normal");

foo();
```

3、MiKit 同样支持在项目根目录下新建```webpack.config.js```的方式来实现相同功能，修改后需要重启 MiKit 打包才能生效。当然，写法与原生的```webpack.config.js```略有不同。除非对 webpack 比较熟悉，不然不推荐这种方式修改。

```
module.exports = function(webpack) {
    return {
        //这里webpack配置写法
        entry: {
            entryIndex: './js/index',
            entrySub: './js/sub'
        },
        resolve: {
            alias: {
                'jquery': 'jquery-1.7.2'
            },
            extensions: ['', '.js', '.coffee', '.html', '.css', '.scss']
        }
        //more...
    };
};
```

4、使用 Webpack 配置时一些错误并不会在浏览器端呈现，这里可以通过```工具-开发者工具```来调试，这里会展示项目中 Webpack 的运行情况。

![](./md/img/doc-webpack-03.jpg)






