(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"46d7b53c"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e63":function(t,e,n){},"3e4f":function(t,e,n){"use strict";var a=n("0e63"),i=n.n(a);i.a},4737:function(t,e,n){"use strict";var a=n("6787"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("5c0b"),n("2877")),s={},c=Object(o["a"])(s,i,r,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"header"},[n("ul",{staticClass:"header-left"},[t._m(0),t._m(1),t._m(2),n("li",{on:{click:function(e){return t.newFrame(null,"我的电脑","Computer")}}},[t._v("文件")]),n("li",{on:{click:function(e){return t.newFrame(null,"壁纸","wallpaper")}}},[t._v("壁纸")]),n("li",{on:{click:function(e){return t.newFrame(null,"关于","about")}}},[t._v("关于")])]),n("ul",{staticClass:"header-right"},[n("li",{staticClass:"iconfont"},[t._v("")]),n("li",{staticClass:"iconfont"},[t._v("")]),n("li",{staticClass:"iconfont",on:{click:function(e){return t.newFrame("http://www.kuwo.cn/","酷我音乐")}}},[t._v("")]),n("li",{staticClass:"iconfont"},[t._v("")]),n("li",{staticClass:"iconfont"},[t._v("")]),n("li",{staticClass:"iconfont"},[t._v("")]),n("li",{staticClass:"iconfont",on:{click:t.weather}},[t._v(t._s(t.time))])])]),n("div",{staticClass:"content-hone",style:{backgroundImage:"url("+t.bgSrc+")"},on:{click:t.weatherHide}},[n("ul",{staticClass:"app-list"},[n("li",{staticClass:"list-item",on:{click:function(e){return t.newFrame(null,"我的电脑","Computer")}}},[n("img",{attrs:{src:"images/icons/computer.png",alt:""}}),n("span",[t._v("我的电脑")])]),t._m(3),n("li",{staticClass:"list-item",on:{click:function(e){return t.newFrame(null,"工具箱","tools")}}},[n("img",{attrs:{src:"images/tool.png",alt:""}}),n("span",[t._v("工具箱")])])])]),n("div",{attrs:{id:"container",title:"单击直接用iframe打开页面，拖拽可以在新标签页打开"},on:{click:t.weatherHide}},[n("div",{attrs:{id:"dock"}},[n("ul",t._l(t.dock_data,(function(e){return n("li",{on:{click:function(n){return t.newFrame(e.url,e.title,e.who)},dragend:function(n){return t.newWindow(e.url)}}},[n("span",[t._v(t._s(e.title))]),n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:e.icon}})])])})),0)])]),n("transition",{attrs:{name:"slide-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.weatherShow,expression:"weatherShow"}],staticClass:"weather"},[n("iframe",{attrs:{src:"https://widget-page.heweather.net/h5/index.html?bg=3&md=036&lc=accu&key=09ce9044126b48f5b79c6d8f198e832a"}})])])],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"iconfont"},[n("a",{attrs:{href:"https://www.apple.com/cn/",target:"_blank",title:"苹果官网"}},[t._v("")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://github.com/lw1995/Vue-Mac-WebDesktop",target:"_blank",title:"原版"}},[t._v("GitHub")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://gitee.com/kbtxwer/mac-web-desktop",target:"_blank",title:"改版"}},[t._v("Gitee")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-item",attrs:{onclick:"window.open('https://pan.baidu.com/disk/main#/recyclebin/list')"}},[n("img",{attrs:{src:"images/icons/TrashIcon.png",alt:""}}),n("span",[t._v("回收站")])])}],p=(n("c975"),n("ac1f"),n("466d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"browser"},[n("iframe",{attrs:{src:t.url,allowfullscreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true"}})])}),h=[],m={name:"Browser",props:["url"],methods:{}},g=m,v=(n("735b"),Object(o["a"])(g,p,h,!1,null,"4374ecf1",null)),_=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wallpaper"},[n("div",{staticClass:"content"},[n("ul",{staticClass:"list-box"},t._l(t.imgList,(function(e,a){return n("li",{attrs:{"data-id":a},on:{click:function(n){return t.choice(e)}}},[n("img",{attrs:{src:e}})])})),0),n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.imgSrc,expression:"imgSrc"}],attrs:{type:"text",placeholder:"请输入网络图片URL",title:"以https开头，可能会受到跨域策略限制无法生效"},domProps:{value:t.imgSrc},on:{input:function(e){e.target.composing||(t.imgSrc=e.target.value)}}}),n("button",{on:{click:t.confirm}},[t._v("确定")])])])])},w=[],k={name:"Wallpaper",props:{layerid:{type:String,default:""}},data:function(){return{imgList:[],imgSrc:""}},mounted:function(){var t=["images/wallpapers/bg.jpg","images/wallpapers/bg2.jpg","images/wallpapers/bg3.jpg","images/wallpapers/bg4.jpg","images/wallpapers/bg5.jpg","images/wallpapers/bg6.jpg"],e="imgList",n=JSON.parse(localStorage.getItem(e));n||(localStorage.setItem(e,JSON.stringify(t)),n=t),this.imgList=n},methods:{choice:function(t){localStorage.setItem("bg",t),this.$parent.setBg()},confirm:function(){console.log(this.imgSrc),this.imgSrc&&(localStorage.setItem("bg",this.imgSrc),this.$parent.setBg(),this.imgList.push(this.imgSrc),localStorage.setItem("imgList",JSON.stringify(this.imgList)))}}},y=k,C=(n("4737"),Object(o["a"])(y,b,w,!1,null,"e6beefd2",null)),x=C.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools"},[n("div",{staticClass:"content"},[n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],attrs:{type:"text",placeholder:"搜索工具"},domProps:{value:t.keyWord},on:{input:function(e){e.target.composing||(t.keyWord=e.target.value)}}}),n("button",{on:{click:function(e){return t.search(t.keyWord)}}},[t._v("搜索")]),n("button",{on:{click:function(e){return t.search("")}}},[t._v("重置")])]),n("ul",{staticClass:"list-box"},t._l(t.tools,(function(e,a){return n("li",{staticStyle:{cursor:"pointer"},attrs:{"data-id":a},on:{click:function(n){return t.openTool(e)}}},[n("img",{attrs:{src:e.icon,width:"80px"}}),n("p",[t._v(t._s(e.name))])])})),0)])])},j=[],O=(n("4160"),n("b0c0"),n("159b"),n("bc3a")),E=n.n(O),W={name:"Tools",data:function(){return{init_tools:[],tools:[],keyWord:""}},mounted:function(){var t=this;E.a.get("data/tools_data.json").then((function(e){t.init_tools=e.data,t.tools=t.init_tools}))},methods:{search:function(t){var e=this;if(!t)return this.tools=this.init_tools,void(this.keyWord="");this.tools=[],this.init_tools.forEach((function(n,a){-1!==n.name.indexOf(t)&&e.tools.push(n)}))},newFrame:function(t,e,n){this.$layer.iframe({title:e,maxmin:!0,shade:!1,area:["70%","60%"],content:{content:_,parent:this,data:{url:t}}})},openTool:function(t){t.newtab?window.open(t.url,"_blank"):this.newFrame(t.url,t.name)}}},P=W,$=(n("3e4f"),Object(o["a"])(P,S,j,!1,null,"ec005046",null)),B=$.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"computer"},[n("div",{staticStyle:{display:"flex"}},[n("div",{staticClass:"navigation"},[n("img",{attrs:{src:"images/icons/computer.png",alt:""}}),t._v(t._s(t.currentPath))]),n("img",{staticClass:"gobackbtn",attrs:{"data-v-9232cc6a":"",src:"images/icons/goback.svg",alt:"",title:"返回上级目录"},on:{click:t.goback}}),n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],attrs:{type:"text",placeholder:"搜索当前目录"},domProps:{value:t.keyWord},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.keyWord)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.search("")}],input:function(e){e.target.composing||(t.keyWord=e.target.value)}}}),n("button",{on:{click:function(e){return t.search(t.keyWord)}}},[t._v("搜索")]),n("button",{on:{click:function(e){return t.search("")}}},[t._v("重置")])])]),n("div",{staticClass:"content"},[n("ul",{staticClass:"left-box"},[n("li",{staticClass:"iconfont",on:{click:t.enterRoot}},[t._v(" 主目录")]),n("li",{staticClass:"iconfont",attrs:{onclick:"window.open('https://bilibili.com')"}},[t._v(" 视频")]),n("li",{staticClass:"iconfont",attrs:{onclick:"window.open('https://www.kuwo.cn/')"}},[t._v(" 音乐")]),n("li",{staticClass:"iconfont",attrs:{onclick:"window.open('https://bing.ioliu.cn/')"}},[t._v(" 图片")]),n("li",{staticClass:"iconfont",attrs:{onclick:"window.open('https://docs.qq.com')"}},[t._v(" 文档")]),n("li",{staticClass:"iconfont",attrs:{onclick:"window.open('https://npupt.com')",title:"仅限西工大学生访问"}},[t._v(" 下载")]),n("li",{staticClass:"iconfont",attrs:{onclick:"window.open('https://pan.baidu.com/disk/main#/recyclebin/list')"}},[t._v(" 回收站")]),n("li",{staticClass:"iconfont",staticStyle:{"border-top":"1px solid #B4B4B4"},on:{click:t.enterRoot}},[t._v(" 我的电脑")]),n("li",{staticClass:"iconfont",attrs:{onclick:"window.open('https://pan-yz.chaoxing.com')"}},[t._v(" 云盘")]),n("li",{staticClass:"iconfont",staticStyle:{"border-top":"1px solid #B4B4B4"},on:{click:t.enterNeighbour}},[t._v(" 网络邻居(友链)")])]),n("ul",{staticClass:"right-box"},t._l(t.file_data,(function(e){return n("li",{on:{click:function(n){return t.processFile(e)}}},[e.type&&"root"!==e.type?t._e():n("img",{attrs:{src:"images/icons/disk.png",alt:""}}),e.title.endsWith("html")||"link"===e.type?n("img",{attrs:{src:"images/icons/html.png",alt:""}}):t._e(),n("div",{attrs:{title:e.title+"\n"+e.inner_name}},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),e.type&&"root"!==e.type?t._e():n("span",{staticClass:"progress-bar"}),n("span",{staticClass:"xtitle"},[t._v(t._s(e.inner_name))])])])})),0)])])},I=[],L=(n("baa5"),n("a434"),n("2ca0"),n("96cf"),n("1da1")),D={name:"Computer",data:function(){return{keyWord:"",root_file_data:[],neighbour_data:[],file_data_stack:[],file_data_saved:[],file_data:[],currentPath:""}},props:{},methods:{search:function(t){var e=this;if(0===this.file_data_saved.length&&(this.file_data_saved=this.file_data),!t)return this.file_data=this.file_data_saved,void(this.keyWord="");this.file_data=[],this.file_data_saved.forEach((function(n,a){-1!==n.title.indexOf(t)&&e.file_data.push(n)}))},getData:function(t){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=[],("root"===t.type||"floder"===t.type)&&t.source){n.next=3;break}return n.abrupt("return",a);case 3:i=t.source,i.forEach((function(n){var i;n.startsWith("http")||(i="https://kbtxwer.gitee.io/"+n+"/"+t.inner_name+"/",n=i+"json_utf8");var r=e.getReq(n);r.then((function(t){t.data.article&&t.data.article.forEach((function(t){t.type="file",t.title=t.name,t.inner_name=t.date,t.url=i+t.name,a.push(t)}))}))})),e.file_data_stack.unshift(e.file_data),e.file_data=a,e.file_data_saved=[];case 8:case"end":return n.stop()}}),n)})))()},getReq:function(t){return Object(L["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},goback:function(){0!==this.file_data_stack.length&&(this.currentPath=this.currentPath.substring(0,this.currentPath.lastIndexOf("/")),this.file_data=this.file_data_stack[0],this.file_data_stack.splice(0,1))},enterRoot:function(){this.currentPath="> 我的电脑",this.file_data=this.root_file_data},enterNeighbour:function(){this.currentPath="> 友情链接",this.file_data=this.neighbour_data},processFile:function(t){"floder"!==t.type&&"root"!==t.type?t.url?this.newFrame(t.url,t.title):alert("没有合适的方式处理此资源"):this.enterDir(t)},enterDir:function(t){this.currentPath+="/"+t.title,console.log(this.getData(t))},newFrame:function(t,e){this.$layer.iframe({title:e,maxmin:!0,shade:!1,area:["70%","60%"],content:{content:_,parent:this,data:{url:t}}})}},mounted:function(){var t=this;E.a.get("data/root_file_data.json").then((function(e){t.root_file_data=e.data,t.enterRoot()})),E.a.get("data/neighbour_data.json").then((function(e){t.neighbour_data=e.data}))}},R=D,M=(n("7b25"),Object(o["a"])(R,F,I,!1,null,"43013d75",null)),T=M.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"content"},[n("div",{staticClass:"iconfont logo",attrs:{onclick:"window.open('https://search.jd.com/Search?keyword=%E8%8B%B9%E6%9E%9C')",title:"给你来点黑色幽默"}},[t._v("")]),n("ul",{staticClass:"list-box"},t._l(t.list,(function(e,a){return n("li",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])])})),0)])])},A=[],H={name:"About",props:{},data:function(){return{list:[{url:"https://github.com/lw1995/Vue-Mac-WebDesktop",title:"这是一个前端小白的开源项目,基于vue全家桶"},{url:"https://gitee.com/kbtxwer/mac-web-desktop",title:"我在其基础上加以修改，制成了自己的博客首页，源码同样开放"},{url:"https://www.bilibili.com/video/BV1sA411V7iA",title:"这是保存微信文章的演示视频，如果你希望了解如何保存，可以在评论区和我交流"}]}},methods:{}},q=H,J=(n("e3b7"),Object(o["a"])(q,N,A,!1,null,"7c9bb05a",null)),V=J.exports,U={name:"home",components:{Wallpaper:x,Browser:_,Tools:B,Computer:T,About:V},data:function(){return{time:"",setInter:null,weatherShow:!1,bgSrc:"images/wallpapers/bg.jpg",dock_data:[]}},created:function(){var t=this,e=navigator.userAgent.toLowerCase();if(-1!==e.indexOf("android")||e.indexOf("Adr")>-1||e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){var n=confirm("当前可能是手机访问，建议跳转到简易版本");n&&(window.location="https://kbtxwer.gitee.io/articles")}clearInterval(this.setInter),this.setInter=setInterval((function(){t.newDate()}),1e3),E.a.get("data/dock_data.json").then((function(e){t.dock_data=e.data})),this.setBg()},methods:{newWindow:function(t){return window.open(t),!1},getComponent:function(t){return t?(t=t.toLowerCase(),"computer"===t?T:"about"===t?V:"wallpaper"===t?x:"tools"===t?B:void 0):_},newFrame:function(t,e,n){this.$layer.iframe({title:e,maxmin:!0,shade:!1,area:["70%","60%"],content:{content:this.getComponent(n),parent:this,data:{url:t}}})},wallpaper:function(){this.$layer.iframe({title:"壁纸中心",maxmin:!0,area:["70%","60%"],content:{content:x,parent:this,data:{}}})},weather:function(){this.weatherShow?this.weatherShow=!1:this.weatherShow=!0},weatherHide:function(){this.weatherShow=!1},newDate:function(){var t=new Date,e=(t.getFullYear(),t.getMonth()),n=t.getDate(),a=t.getDay(),i=t.getHours(),r=t.getMinutes(),o=t.getSeconds(),s=t.getMilliseconds();e+=1,e<10&&(e="0"+e),n<10&&(n="0"+n),i<10&&(i="0"+i),r<10&&(r="0"+r),o<10&&(o="0"+o),s<100&&(s="0"+s);var c=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],l=c[a];this.time=i+":"+r+":"+o+" "+l},setBg:function(){localStorage.getItem("bg")?this.bgSrc=localStorage.getItem("bg"):this.bgSrc="images/wallpapers/bg2.jpg"}}},z=U,G=(n("cccb"),Object(o["a"])(z,f,d,!1,null,null,null)),X=G.exports;a["a"].use(u["a"]);var Y=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],K=new u["a"]({routes:Y}),Q=K,Z=n("2f62");a["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=n("d842"),nt=n.n(et);n("2ba8");a["a"].prototype.$layer=nt()(a["a"]),a["a"].prototype.axios=E.a,a["a"].config.productionTip=!1,new a["a"]({router:Q,store:tt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"5ced":function(t,e,n){},6782:function(t,e,n){},6787:function(t,e,n){},"6ccb":function(t,e,n){},"735b":function(t,e,n){"use strict";var a=n("bf12"),i=n.n(a);i.a},"7b25":function(t,e,n){"use strict";var a=n("6782"),i=n.n(a);i.a},"9c0c":function(t,e,n){},bf12:function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("5ced"),i=n.n(a);i.a},e3b7:function(t,e,n){"use strict";var a=n("6ccb"),i=n.n(a);i.a}});
//# sourceMappingURL=app.a66c5366.js.map