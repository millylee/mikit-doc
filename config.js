// read more config, see: https://docute.js.org/#/zh-Hans/
self.$config = {
    // 站点域名
    url: 'http://mikit.milly.me',
    // 设置文章编辑地址
    'edit-link': 'https://github.com/millylee/mikit-doc/blob/gh-pages',
    // 首页文件，如果不设置不能访问首页
    home: 'readme.md',
    // 导航设置
    nav: [
        {title: '首页', path: '/'},
        {title: '更新日志', path: '/changelog.md'}
    ],
    // 默认隐藏侧边栏
    sidebar: true,
    // 默认显示切换侧边栏按钮
    disableSidebarToggle: false,
    // 使用登录页，默认为 landing.html
    // landing: 'xx.html' 也可以自己指定，支持html与md
    landing: false,
    // docsearch 方法由插件提供
    plugins: [
        docsearch({
            apiKey: 'c18f5c7db1b18faa507820d89c56415d',
            indexName: 'mikit'
        })
    ]
};
