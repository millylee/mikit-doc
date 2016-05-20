(function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||a.defaults,this.rules=p.normal,this.options.gfm&&(this.rules=this.options.tables?p.tables:p.gfm)}function t(e,t){if(this.options=t||a.defaults,this.links=e,this.rules=u.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.rules=this.options.breaks?u.breaks:u.gfm:this.options.pedantic&&(this.rules=u.pedantic)}function n(e){this.options=e||{}}function r(e){this.tokens=[],this.token=null,this.options=e||a.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function s(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function i(e){return e.replace(/&([#\w]+);/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?String.fromCharCode("x"===t.charAt(1)?parseInt(t.substring(2),16):+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function o(){}function h(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function a(t,n,i){if(i||"function"==typeof n){i||(i=n,n=null),n=h({},a.defaults,n||{});var l,o,p=n.highlight,u=0;try{l=e.lex(t,n)}catch(c){return i(c)}o=l.length;var g=function(e){if(e)return n.highlight=p,i(e);var t;try{t=r.parse(l,n)}catch(s){e=s}return n.highlight=p,e?i(e):i(null,t)};if(!p||p.length<3)return g();if(delete n.highlight,!o)return g();for(;u<l.length;u++)!function(e){return"code"!==e.type?--o||g():p(e.text,e.lang,function(t,n){return t?g(t):null==n||n===e.text?--o||g():(e.text=n,e.escaped=!0,void(--o||g()))})}(l[u])}else try{return n&&(n=h({},a.defaults,n)),r.parse(e.lex(t,n),n)}catch(c){if(c.message+="\nPlease report this to https://github.com/chjj/marked.",(n||a.defaults).silent)return"<p>An error occured:</p><pre>"+s(c.message+"",!0)+"</pre>";throw c}}var p={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:o,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:o,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:o,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};p.bullet=/(?:[*+-]|\d+\.)/,p.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,p.item=l(p.item,"gm")(/bull/g,p.bullet)(),p.list=l(p.list)(/bull/g,p.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+p.def.source+")")(),p.blockquote=l(p.blockquote)("def",p.def)(),p._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",p.html=l(p.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,p._tag)(),p.paragraph=l(p.paragraph)("hr",p.hr)("heading",p.heading)("lheading",p.lheading)("blockquote",p.blockquote)("tag","<"+p._tag)("def",p.def)(),p.normal=h({},p),p.gfm=h({},p.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),p.gfm.paragraph=l(p.paragraph)("(?!","(?!"+p.gfm.fences.source.replace("\\1","\\2")+"|"+p.list.source.replace("\\1","\\3")+"|")(),p.tables=h({},p.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=p,e.lex=function(t,n){var r=new e(n);return r.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t,n){for(var r,s,i,l,o,h,a,u,c,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),h={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<h.align.length;u++)h.align[u]=/^ *-+: *$/.test(h.align[u])?"right":/^ *:-+: *$/.test(h.align[u])?"center":/^ *:-+ *$/.test(h.align[u])?"left":null;for(u=0;u<h.cells.length;u++)h.cells[u]=h.cells[u].split(/ *\| */);this.tokens.push(h)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),l=i[2],this.tokens.push({type:"list_start",ordered:l.length>1}),i=i[0].match(this.rules.item),r=!1,c=i.length,u=0;c>u;u++)h=i[u],a=h.length,h=h.replace(/^ *([*+-]|\d+\.) +/,""),~h.indexOf("\n ")&&(a-=h.length,h=this.options.pedantic?h.replace(/^ {1,4}/gm,""):h.replace(new RegExp("^ {1,"+a+"}","gm"),"")),this.options.smartLists&&u!==c-1&&(o=p.bullet.exec(i[u+1])[0],l===o||l.length>1&&o.length>1||(e=i.slice(u+1).join("\n")+e,u=c-1)),s=r||/\n\n(?!\s*$)/.test(h),u!==c-1&&(r="\n"===h.charAt(h.length-1),s||(s=r)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(h,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),h={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<h.align.length;u++)h.align[u]=/^ *-+: *$/.test(h.align[u])?"right":/^ *:-+: *$/.test(h.align[u])?"center":/^ *:-+ *$/.test(h.align[u])?"left":null;for(u=0;u<h.cells.length;u++)h.cells[u]=h.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(h)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var u={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:o,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:o,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};u._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,u._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,u.link=l(u.link)("inside",u._inside)("href",u._href)(),u.reflink=l(u.reflink)("inside",u._inside)(),u.normal=h({},u),u.pedantic=h({},u.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),u.gfm=h({},u.normal,{escape:l(u.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(u.text)("]|","~]|")("|","|https?://|")()}),u.breaks=h({},u.gfm,{br:l(u.br)("{2,}","*")(),text:l(u.gfm.text)("{2,}","*")()}),t.rules=u,t.output=function(e,n,r){var s=new t(n,r);return s.output(e)},t.prototype.output=function(e){for(var t,n,r,i,l="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),l+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=this.mangle(":"===i[1].charAt(6)?i[1].substring(7):i[1]),r=this.mangle("mailto:")+n):(n=s(i[1]),r=n),l+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):s(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,l+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){l+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),l+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),l+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),l+=this.renderer.codespan(s(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),l+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),l+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),l+=this.renderer.text(s(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=s(i[1]),r=n,l+=this.renderer.link(r,null,n);return l},t.prototype.outputLink=function(e,t){var n=s(t.href),r=t.title?s(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,s(e[1]))},t.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},t.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;r>s;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},n.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+s(t,!0)+'">'+(n?e:s(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:s(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(i(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(s){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var l='<a href="'+e+'"';return t&&(l+=' title="'+t+'"'),l+=">"+n+"</a>"},n.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},n.prototype.text=function(e){return e},r.parse=function(e,t,n){var s=new r(t,n);return s.parse(e)},r.prototype.parse=function(e){this.inline=new t(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var n="";this.next();)n+=this.tok();return n},r.prototype.next=function(){return this.token=this.tokens.pop()},r.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},r.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},r.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s,i="",l="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});l+=this.renderer.tablerow(n)}return this.renderer.table(i,l);case"blockquote_start":for(var l="";"blockquote_end"!==this.next().type;)l+=this.tok();return this.renderer.blockquote(l);case"list_start":for(var l="",o=this.token.ordered;"list_end"!==this.next().type;)l+=this.tok();return this.renderer.list(l,o);case"list_item_start":for(var l="";"list_item_end"!==this.next().type;)l+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(l);case"loose_item_start":for(var l="";"list_item_end"!==this.next().type;)l+=this.tok();return this.renderer.listitem(l);case"html":var h=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(h);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},o.exec=o,a.options=a.setOptions=function(e){return h(a.defaults,e),a},a.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n,xhtml:!1},a.Parser=r,a.parser=r.parse,a.Renderer=n,a.Lexer=e,a.lexer=e.lex,a.InlineLexer=t,a.inlineLexer=t.output,a.parse=a,"undefined"!=typeof module&&"object"==typeof exports?module.exports=a:"function"==typeof define&&define.amd?define(function(){return a}):this.marked=a}).call(function(){return this||("undefined"!=typeof window?window:global)}());
;!function(e){var r="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):r&&(r.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return r.hljs}))}(function(e){function r(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function n(e,r){var t=e&&e.exec(r);return t&&0==t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function c(e){var r,t,n,c=e.className+" ";if(c+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(c))return w(t[1])?t[1]:"no-highlight";for(c=c.split(/\s+/),r=0,n=c.length;n>r;r++)if(w(c[r])||a(c[r]))return c[r]}function i(e,r){var t,n={};for(t in e)n[t]=e[t];if(r)for(t in r)n[t]=r[t];return n}function o(e){var r=[];return function n(e,a){for(var c=e.firstChild;c;c=c.nextSibling)3==c.nodeType?a+=c.nodeValue.length:1==c.nodeType&&(r.push({event:"start",offset:a,node:c}),a=n(c,a),t(c).match(/br|hr|img|input/)||r.push({event:"stop",offset:a,node:c}));return a}(e,0),r}function s(e,n,a){function c(){return e.length&&n.length?e[0].offset!=n[0].offset?e[0].offset<n[0].offset?e:n:"start"==n[0].event?e:n:e.length?e:n}function i(e){function n(e){return" "+e.nodeName+'="'+r(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,n).join("")+">"}function o(e){l+="</"+t(e)+">"}function s(e){("start"==e.event?i:o)(e.node)}for(var u=0,l="",f=[];e.length||n.length;){var b=c();if(l+=r(a.substr(u,b[0].offset-u)),u=b[0].offset,b==e){f.reverse().forEach(o);do s(b.splice(0,1)[0]),b=c();while(b==e&&b.length&&b[0].offset==u);f.reverse().forEach(i)}else"start"==b[0].event?f.push(b[0].node):f.pop(),s(b.splice(0,1)[0])}return l+r(a.substr(u))}function u(e){function r(e){return e&&e.source||e}function t(t,n){return new RegExp(r(t),"m"+(e.cI?"i":"")+(n?"g":""))}function n(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},s=function(r,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[r,t[1]?Number(t[1]):1]})};"string"==typeof a.k?s("keyword",a.k):Object.keys(a.k).forEach(function(e){s(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\b\w+\b/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=r(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(r){u.push(i(e,r))}):u.push("self"==e?a:e)}),a.c=u,a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(r).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}n(e)}function l(e,t,a,c){function i(e,r){for(var t=0;t<r.c.length;t++)if(n(r.c[t].bR,e))return r.c[t]}function o(e,r){if(n(e.eR,r)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?o(e.parent,r):void 0}function s(e,r){return!a&&n(r.iR,e)}function b(e,r){var t=N.cI?r[0].toLowerCase():r[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,r,t,n){var a=n?"":E.classPrefix,c='<span class="'+a,i=t?"":"</span>";return c+=e+'">',c+r+i}function g(){if(!R.k)return r(A);var e="",t=0;R.lR.lastIndex=0;for(var n=R.lR.exec(A);n;){e+=r(A.substr(t,n.index-t));var a=b(R,n);a?(k+=a[1],e+=p(a[0],r(n[0]))):e+=r(n[0]),t=R.lR.lastIndex,n=R.lR.exec(A)}return e+r(A.substr(t))}function d(){var e="string"==typeof R.sL;if(e&&!y[R.sL])return r(A);var t=e?l(R.sL,A,!0,C[R.sL]):f(A,R.sL.length?R.sL:void 0);return R.r>0&&(k+=t.r),e&&(C[R.sL]=t.top),p(t.language,t.value,!1,!0)}function h(){x+=void 0!==R.sL?d():g(),A=""}function m(e){x+=e.cN?p(e.cN,"",!0):"",R=Object.create(e,{parent:{value:R}})}function v(e,r){if(A+=e,void 0===r)return h(),0;var t=i(r,R);if(t)return t.skip?A+=r:(t.eB&&(A+=r),h(),t.rB||t.eB||(A=r)),m(t,r),t.rB?0:r.length;var n=o(R,r);if(n){var a=R;a.skip?A+=r:(a.rE||a.eE||(A+=r),h(),a.eE&&(A=r));do R.cN&&(x+="</span>"),R.skip||(k+=R.r),R=R.parent;while(R!=n.parent);return n.starts&&m(n.starts,""),a.rE?0:r.length}if(s(r,R))throw new Error('Illegal lexeme "'+r+'" for mode "'+(R.cN||"<unnamed>")+'"');return A+=r,r.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');u(N);var M,R=c||N,C={},x="";for(M=R;M!=N;M=M.parent)M.cN&&(x=p(M.cN,"",!0)+x);var A="",k=0;try{for(var B,L,S=0;R.t.lastIndex=S,B=R.t.exec(t),B;)L=v(t.substr(S,B.index-S),B[0]),S=B.index+L;for(v(t.substr(S)),M=R;M.parent;M=M.parent)M.cN&&(x+="</span>");return{r:k,value:x,language:e,top:R}}catch(I){if(-1!=I.message.indexOf("Illegal"))return{r:0,value:r(t)};throw I}}function f(e,t){t=t||E.languages||Object.keys(y);var n={r:0,value:r(e)},a=n;return t.forEach(function(r){if(w(r)){var t=l(r,e,!1);t.language=r,t.r>a.r&&(a=t),t.r>n.r&&(a=n,n=t)}}),a.language&&(n.second_best=a),n}function b(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,r){return r.replace(/\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\n/g,"<br>")),e}function p(e,r,t){var n=r?M[r]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}function g(e){var r=c(e);if(!a(r)){var t;E.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var n=t.textContent,i=r?l(r,n,!0):f(n),u=o(t);if(u.length){var g=document.createElementNS("http://www.w3.org/1999/xhtml","div");g.innerHTML=i.value,i.value=s(u,o(g),n)}i.value=b(i.value),e.innerHTML=i.value,e.className=p(e.className,r,i.language),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r})}}function d(e){E=i(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,g)}}function m(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function v(r,t){var n=y[r]=t(e);n.aliases&&n.aliases.forEach(function(e){M[e]=r})}function N(){return Object.keys(y)}function w(e){return e=(e||"").toLowerCase(),y[e]||y[M[e]]}var E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},y={},M={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=b,e.highlightBlock=g,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=m,e.registerLanguage=v,e.listLanguages=N,e.getLanguage=w,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(r,t,n){var a=e.inherit({cN:"comment",b:r,e:t,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("xml",function(e){var r="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:r,r:0},{b:"=",r:0,c:[{cN:"string",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js","jsx"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:["self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM]}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),hljs.registerLanguage("css",function(e){var r="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:r,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}});
;var Midoc=function(){var e=document.getElementById("layout"),t=document.getElementById("menu"),a=document.getElementById("menuLink"),r=document.querySelector(".pure-menu-list"),n=document.getElementById("progress"),s=document.querySelector(".content");return o={init:function(){this.initNav(),this.activeNav(),this.toggleHash(),this.loadPage(),this.stat()},initNav:function(){function r(e,t){for(var a=e.className.split(/\s+/),r=a.length,o=0;r>o;o++)if(a[o]===t){a.splice(o,1);break}r===a.length&&a.push(t),e.className=a.join(" ")}a.onclick=function(o){var n="active";o.preventDefault(),r(e,n),r(t,n),r(a,n)}},activeNav:function(){window.addEventListener("load",function(){for(var e=window.location.hash.replace("#!/","")||r.getElementsByTagName("a")[0].getAttribute("href"),t=r.getElementsByTagName("a"),a=0;a<t.length;a++)~t[a].getAttribute("href").indexOf(e)&&t[a].parentNode.classList.add("pure-menu-selected")})},toggleHash:function(){var e=this;r.addEventListener("click",function(t){t.preventDefault();for(var a=this.getElementsByTagName("li"),r=0;r<a.length;r++)a[r].classList.remove("pure-menu-selected");t.target.parentNode.classList.add("pure-menu-selected"),window.location.hash="#!/"+t.target.getAttribute("href"),e.loadPage(t.target.getAttribute("href"))})},loadPage:function(e){var t=this;t.loadProgress(Math.floor(20*Math.random())+10),!e&&window.location.hash&&(e=window.location.hash.replace("#!",".")),window.location.hash||(e=r.getElementsByTagName("a")[0].getAttribute("href"));var a=null;window.XMLHttpRequest&&(a=new XMLHttpRequest,a.open("GET",e+"?_t="+1*new Date)),a.send(),t.loadProgress(Math.floor(30*Math.random())+20),a.onreadystatechange=function(){if(4==a.readyState)if(200==a.status){s.innerHTML=marked(a.responseText);for(var e=s.querySelectorAll("table"),r=0;r<e.length;r++)e[r].classList.add("pure-table"),e[r].classList.add("pure-table-bordered");for(var o=s.querySelectorAll("img"),i=0;i<o.length;i++)o[i].classList.add("pure-img");for(var l=s.querySelectorAll("pre code"),c=0;c<l.length;c++)hljs.highlightBlock(l[c]);var d=s.querySelector("h1");d.parentNode.removeChild(d),document.querySelector(".header").innerHTML="",document.querySelector(".header").appendChild(d),t.loadProgress(Math.floor(20*Math.random())+80),document.body.scrollTop="0"}else n.style.opacity="0",alert("页面载入失败："+a.status+" - "+a.statusText)}},loadProgress:function(e){n.querySelector(".progress-bar").style.width=e+"%",e>=80?(n.querySelector(".progress-bar").style.width="100%",this.timer&&clearTimeout(this.timer),setTimeout(function(){n.style.opacity="0",n.querySelector(".progress-bar").style.width=0},100)):n.style.opacity="1"},stat:function(){!function(){var e=document.createElement("script");e.src="http://hm.baidu.com/hm.js?cb9af96e6e2fed8bd03189163e3a47b5";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}}}();Midoc.init();