var Midoc = function() {
    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        navLink  = document.querySelector('.pure-menu-list'),
        progress = document.getElementById('progress'),
        content  = document.querySelector('.content');

    o = {
        init: function() {
            this.initNav();
            this.activeNav();
            this.toggleHash();
            this.loadPage();
            this.stat();
        },
        //导航菜单
        initNav: function() {
            function toggleClass(element, className) {
                var classes = element.className.split(/\s+/),
                    length = classes.length,
                    i = 0;

                for(; i < length; i++) {
                  if (classes[i] === className) {
                    classes.splice(i, 1);
                    break;
                  }
                }

                if (length === classes.length) {
                    classes.push(className);
                }

                element.className = classes.join(' ');
            }

            menuLink.onclick = function (e) {
                var active = 'active';
                e.preventDefault();
                toggleClass(layout, active);
                toggleClass(menu, active);
                toggleClass(menuLink, active);
            };
        },
        //导航高亮选中
        activeNav: function() {
            window.addEventListener('load', function(e) {
                var url = window.location.hash.replace('#!/', '') || navLink.getElementsByTagName('a')[0].getAttribute('href'),
                    list = navLink.getElementsByTagName('a'),
                    i = 0;
                for(; i < list.length; i++) {
                    if(!!~list[i].getAttribute('href').indexOf(url)) {
                        list[i].parentNode.classList.add('pure-menu-selected');
                    }
                }                
            });
        },
        //导航点击切换hash
        toggleHash: function() {
            var self = this;
            var url = '';
            navLink.addEventListener('click', function(e) {
                e.preventDefault();
                //当前选中效果
                var li = this.getElementsByTagName('li'),
                    i = 0;
                for(; i < li.length; i++) {
                    li[i].classList.remove('pure-menu-selected');
                }
                e.target.parentNode.classList.add('pure-menu-selected');
                //切换hash并加载对应页面
                window.location.hash = '#!/' + e.target.getAttribute('href');
                self.loadPage(e.target.getAttribute('href'));
            });
        },
        //载入页面
        loadPage: function(url) {
            var self = this;
            self.loadProgress(Math.floor(Math.random() * 20) + 10);
            //直接通过hash访问
            if(!url && window.location.hash) {
                url = window.location.hash.replace('#!', '.');
            }
            if(!window.location.hash) {
                url = navLink.getElementsByTagName('a')[0].getAttribute('href');
            }

            var xhr = null;
            if(window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
                xhr.open('GET', url + "?_t=" + new Date() * 1);
            }
            xhr.send();
            self.loadProgress(Math.floor(Math.random() * 30) + 20);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        content.innerHTML = marked(xhr.responseText);
                        //添加表格样式
                        var tableBlock = content.querySelectorAll('table');
                        for (var i = 0; i < tableBlock.length; i++) {
                            tableBlock[i].classList.add('pure-table');
                            tableBlock[i].classList.add('pure-table-bordered');
                        }
                        //添加图片样式
                        var imgBlock = content.querySelectorAll('img');
                        for (var j = 0; j < imgBlock.length; j++) {
                            imgBlock[j].classList.add('pure-img');
                        }
                        //代码块着色
                        var codeBlock = content.querySelectorAll('pre code');
                        for (var k = 0; k < codeBlock.length; k++) {
                            hljs.highlightBlock(codeBlock[k]);
                        }
                        //获取标题
                        var titBlock = content.querySelector('h1');
                        titBlock.parentNode.removeChild(titBlock);
                        document.querySelector('.header').innerHTML = '';
                        document.querySelector('.header').appendChild(titBlock);

                        self.loadProgress(Math.floor(Math.random() * 20) + 80);
                        document.body.scrollTop = '0';
                    } else {
                        progress.style.opacity = "0";
                        alert('页面载入失败：' + xhr.status + ' - ' + xhr.statusText);
                    }
                    
                }
            };
        },
        // 底部进度条
        loadProgress: function(percent) {
            progress.querySelector('.progress-bar').style.width = percent + '%';
            if (percent >= 80) {
                progress.querySelector('.progress-bar').style.width = "100%";
                this.timer && clearTimeout(this.timer);
                setTimeout(function() {
                    progress.style.opacity = "0";
                    progress.querySelector('.progress-bar').style.width = 0;
                }, 100);
            } else {
                progress.style.opacity = "1";
            }
        },
        //统计功能
        stat: function() {
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "http://hm.baidu.com/hm.js?cb9af96e6e2fed8bd03189163e3a47b5";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        }
    };
    return o;
}();
Midoc.init();