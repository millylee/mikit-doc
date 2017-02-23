// read more config, see: https://docute.js.org/#/zh-Hans/
self.$config = {
    url: 'http://mikit.milly.me',
    'edit-link': 'https://github.com/millylee/mikit-doc/blob/gh-pages/',
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
};
