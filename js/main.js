/*
 * Author: MillyLee
 * Version: 0.1.0
 * Compile Date: 2016-05-20 18:19
*/ 
var Midoc=function(){var e=document.getElementById("layout"),t=document.getElementById("menu"),a=document.getElementById("menuLink"),r=document.querySelector(".pure-menu-list"),n=document.getElementById("progress"),s=document.querySelector(".content");return o={init:function(){this.initNav(),this.activeNav(),this.toggleHash(),this.loadPage(),this.stat()},initNav:function(){function r(e,t){for(var a=e.className.split(/\s+/),r=a.length,o=0;r>o;o++)if(a[o]===t){a.splice(o,1);break}r===a.length&&a.push(t),e.className=a.join(" ")}a.onclick=function(o){var n="active";o.preventDefault(),r(e,n),r(t,n),r(a,n)}},activeNav:function(){window.addEventListener("load",function(){for(var e=window.location.hash.replace("#!/","")||r.getElementsByTagName("a")[0].getAttribute("href"),t=r.getElementsByTagName("a"),a=0;a<t.length;a++)~t[a].getAttribute("href").indexOf(e)&&t[a].parentNode.classList.add("pure-menu-selected")})},toggleHash:function(){var e=this;r.addEventListener("click",function(t){t.preventDefault();for(var a=this.getElementsByTagName("li"),r=0;r<a.length;r++)a[r].classList.remove("pure-menu-selected");t.target.parentNode.classList.add("pure-menu-selected"),window.location.hash="#!/"+t.target.getAttribute("href"),e.loadPage(t.target.getAttribute("href"))})},loadPage:function(e){var t=this;t.loadProgress(Math.floor(20*Math.random())+10),!e&&window.location.hash&&(e=window.location.hash.replace("#!",".")),window.location.hash||(e=r.getElementsByTagName("a")[0].getAttribute("href"));var a=null;window.XMLHttpRequest&&(a=new XMLHttpRequest,a.open("GET",e+"?_t="+1*new Date)),a.send(),t.loadProgress(Math.floor(30*Math.random())+20),a.onreadystatechange=function(){if(4==a.readyState)if(200==a.status){s.innerHTML=marked(a.responseText);for(var e=s.querySelectorAll("table"),r=0;r<e.length;r++)e[r].classList.add("pure-table"),e[r].classList.add("pure-table-bordered");for(var o=s.querySelectorAll("img"),i=0;i<o.length;i++)o[i].classList.add("pure-img");for(var l=s.querySelectorAll("pre code"),c=0;c<l.length;c++)hljs.highlightBlock(l[c]);var d=s.querySelector("h1");d.parentNode.removeChild(d),document.querySelector(".header").innerHTML="",document.querySelector(".header").appendChild(d),t.loadProgress(Math.floor(20*Math.random())+80),document.body.scrollTop="0"}else n.style.opacity="0",alert("页面载入失败："+a.status+" - "+a.statusText)}},loadProgress:function(e){n.querySelector(".progress-bar").style.width=e+"%",e>=80?(n.querySelector(".progress-bar").style.width="100%",this.timer&&clearTimeout(this.timer),setTimeout(function(){n.style.opacity="0",n.querySelector(".progress-bar").style.width=0},100)):n.style.opacity="1"},stat:function(){!function(){var e=document.createElement("script");e.src="http://hm.baidu.com/hm.js?cb9af96e6e2fed8bd03189163e3a47b5";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}}}();Midoc.init();