(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{101:function(e,t,a){},103:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(4),l=a(5),r=a(7),c=a(6),u=a(8),s=a(0),m=a.n(s),o=(a(104),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,u=new Array(l),s=0;s<l;s++)u[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).clickPosBtn=function(e){var t=document.getElementById(e);window.scrollTo({top:t.offsetTop-10,left:0,behavior:"smooth"})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(t,a){return m.a.createElement("span",{className:"a"+t.level,key:a,onClick:function(){return e.clickPosBtn(t.title)}},t.title)}))))}}]),t}(m.a.Component))},104:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(4),l=a(5),r=a(7),c=a(6),u=a(8),s=a(0),m=a.n(s),o=(a(101),a(103)),p=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this))).state={headerLink:[{level:"h2",title:"Hash\u6a21\u5f0f"},{level:"h2",title:"History\u6a21\u5f0f"},{level:"h3",title:"\u4e24\u79cd\u6a21\u5f0f\u6bd4\u8f83"}]},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(s.Fragment,null,m.a.createElement(o.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"\u524d\u7aef\u4e24\u79cd\u8def\u7531\u7684\u5b9e\u73b0\u539f\u7406")),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u8fc7\u53bb,\u8def\u7531\u90fd\u662f\u7531\u540e\u7aef\u5b9e\u73b0\uff0c\u76f4\u63a5\u6839\u636eurl\u6765\u91cd\u8f7d\u9875\u9762\uff0c\u4f46\u968f\u7740\u524d\u7aef\u7684\u5de5\u7a0b\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u670d\u52a1\u5668\u538b\u529b\u53d8\u5927\u3002\u540e\u6765\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bb0\u5f55 url \u6765\u8bb0\u5f55 ajax \u7684\u53d8\u5316\u3002\u518d\u5230\u540e\u6765\u7684SPA\u7684\u51fa\u73b0\uff0c\u4e3a\u4e86\u5b9e\u73b0\u5355\u9875\u5e94\u7528\u4ece\u800c\u51fa\u73b0\u4e86\u524d\u7aef\u8def\u7531\u3002\u5728\u8fd9\u91cc\u4e3b\u8981\u8bb2\u89e3\u524d\u7aef\u8def\u7531\u7684\u4e24\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff1ahistory\u6a21\u5f0f\u548chash\u6a21\u5f0f\u3002")),m.a.createElement("h2",{id:"Hash\u6a21\u5f0f"},"Hash\u6a21\u5f0f"),m.a.createElement("p",null,"\u5728URL\u4e2d\u770b\u5230 # \u6709\u4e24\u79cd\u53ef\u80fd\uff0c\u4e00\u79cd\u662f\u6211\u4eec\u719f\u77e5\u7684\u951a\u70b9\uff0c\u6bd4\u5982\u70b9\u51fb\u56de\u5230\u9876\u90e8\u7b49\u7b49\uff0c\u53e6\u4e00\u79cd\u5c31\u662f\u6211\u4eec\u8fd9\u91cc\u8bf4\u5230\u7684hash\u8def\u7531\u4e86\u3002\u8bb8\u591a\u6846\u67b6\uff0c\u6bd4\u5982\u6211\u4eec\u770b\u5230\u7684vue-router\u7b49\u90fd\u7528\u5230\u4e86hash\u6a21\u5f0f\u3002",m.a.createElement("br",null),"\u5b9e\u73b0hash\u6a21\u5f0f\u7684\u6838\u5fc3\u5c31\u662f\uff1a",m.a.createElement("strong",null,"hashchange\u4e8b\u4ef6"),"\uff0c\u5b83\u53ef\u4ee5\u76d1\u542c\u5730\u5740\u7684hash\u503c\u7684\u53d8\u5316\u3002\u4e0b\u9762\u7528\u539f\u751fjs\u6765\u4e00\u6b65\u6b65\u5b9e\u73b0\u4e00\u4e2ahash\u8def\u7531\u3002"),m.a.createElement("ol",null,m.a.createElement("li",null,"\u9996\u5148\u5b9e\u73b0\u4e00\u4e2a\u6784\u9020\u51fd\u6570Router:")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"// \u521b\u5efa\u6784\u9020\u51fd\u6570"),m.a.createElement("span",null,"function Router(routes) ","{"),m.a.createElement("span",null,"    this.routes = routes"),m.a.createElement("span",null,"}"),m.a.createElement("span",null,"//\u6ce8\u518c\u8def\u7531"),m.a.createElement("span",null,"Router.prototype.init = function () ","{"),m.a.createElement("span",null,"    // \u575a\u542c\u8def\u7531\u53d8\u5316"),m.a.createElement("span",null,"    window.addEventListener('hashchange', this.update.bind(this));"),m.a.createElement("span",null,"    // \u76d1\u542c\u9875\u9762\u52a0\u8f7d"),m.a.createElement("span",null,"    window.addEventListener('load', this.update.bind(this));"),m.a.createElement("span",null,"}"),m.a.createElement("span",null,"// \u66f4\u65b0\u8def\u7531"),m.a.createElement("span",null,"Router.prototype.update = function () ","{"),m.a.createElement("span",null,"    let hashPath = location.hash.split('#')[1];"),m.a.createElement("span",null,"    let routerData = this.routes.filter(item => item.path === hashPath)[0]"),m.a.createElement("span",null,"    // \u8fd9\u91cc\u8fdb\u884c\u6a21\u62df\u7ec4\u4ef6\u5207\u6362\u64cd\u4f5c"),m.a.createElement("span",null,"    document.getElementById('app').innerHTML =  routerData.component;"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4ece\u4e0a\u9762\u4ee3\u7801\u77e5\u9053\uff0c\u9996\u5148\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u76db\u653e\u8def\u7531\u914d\u7f6e\u7684\u5bb9\u5668 ",m.a.createElement("code",null,"routes")," , ",m.a.createElement("code",null,"update\u65b9\u6cd5")," \u5373\u5730\u5740\u8def\u7531\u66f4\u65b0\u65f6\u6839\u636e path \u5728\u8def\u7531\u5bb9\u5668\u91cc\u627e\u5230\u5bf9\u5e94\u7684\u8def\u7531\u4fe1\u606f\u5e76\u6267\u884c\u76f8\u5173\u64cd\u4f5c\uff1b",m.a.createElement("code",null,"init")," \u5373\u6ce8\u518c\u8def\u7531\uff0c\u5c06\u8def\u7531\u66f4\u65b0\u64cd\u4f5c\u7ed1\u5b9a\u5728 ",m.a.createElement("code",null,"load")," \u548c ",m.a.createElement("code",null,"hashchange")," \u4e8b\u4ef6\u4e0a\u3002"),m.a.createElement("ol",null,m.a.createElement("li",null,"\u4e0b\u9762\u6211\u4eec\u53ef\u4ee5\u5728\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u8fdb\u884c\u4f7f\u7528\uff1a")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"<body>"),m.a.createElement("span",null,'    <a href="#/a">\u5207\u6362a\u8def\u7531</a>'),m.a.createElement("span",null,'    <a href="#/b">\u5207\u6362b\u8def\u7531</a>'),m.a.createElement("span",null,'    <a href="#/c">\u5207\u6362c\u8def\u7531</a>'),m.a.createElement("span",null,'    <div id="app"></div>'),m.a.createElement("span",null,"</body>"),m.a.createElement("span",null,"<script>"),m.a.createElement("span",null,"    // \u8def\u7531\u914d\u7f6e\u6587\u4ef6"),m.a.createElement("span",null,"    let router = ["),m.a.createElement("span",null,"        ","{"," path: 'a', component: 'a\u9875\u9762' },"),m.a.createElement("span",null,"        ","{"," path: 'b', component: 'b\u9875\u9762' },"),m.a.createElement("span",null,"        ","{"," path: 'c', component: 'c\u9875\u9762' }"),m.a.createElement("span",null,"    ]"),m.a.createElement("span",null,"    let route = new Router(router);"),m.a.createElement("span",null,"    route.init()"),m.a.createElement("span",null,"<\/script>"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u6765\u770b\u770b\u5b9e\u9645\u6548\u679c\uff1a",m.a.createElement("br",null),m.a.createElement("img",{src:"http://wx4.sinaimg.cn/large/a73bc6a1ly1g523tcdr2sg20ps0g4hdv.gif",alt:"image",title:""}),m.a.createElement("br",null),"\u7531\u6b64\u539f\u7406\uff0c\u53ef\u4ee5\u5728vue\u7b49\u5355\u9875\u9762SPA\u4e2d\u901a\u8fc7\u8def\u7531\u7684\u53d8\u5316\u6765\u51b3\u5b9a\u663e\u793a\u54ea\u4e9b\u6a21\u5757\u3002"),m.a.createElement("h2",{id:"History\u6a21\u5f0f"},"History\u6a21\u5f0f"),m.a.createElement("p",null,"vue-router \u540c\u65f6\u4e5f\u652f\u6301 H5 history\u6a21\u5f0f\u7684\u8def\u7531\uff0c\u5176\u4e3b\u8981\u539f\u7406\u7528\u5230\u4e86 H5 History \u65b0\u589e\u7684\u4e24\u4e2aAPI: ",m.a.createElement("code",null,"history.pushState()"),"  \u548c  ",m.a.createElement("code",null,"history.replaceState()")," \u3002\u8fd9\u4e24\u4e2aAPI\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u64cd\u4f5c\u6d4f\u89c8\u5668\u7684\u5386\u53f2\u8bb0\u5f55\uff0c\u800c\u4e0d\u4f1a\u5f15\u8d77\u9875\u9762\u7684\u5237\u65b0\u3002\u4f46\u4e0d\u540c\u4e4b\u5904\u662fpushState\u4f1a\u589e\u52a0\u4e00\u6761\u65b0\u7684\u8bb0\u5f55\uff0c\u800c\u540e\u8005\u662f\u76f4\u63a5\u66ff\u6362\u5f53\u524d\u7684\u5386\u53f2\u8bb0\u5f55\u3002",m.a.createElement("br",null),"\u540c\u65f6\u4e5f\u9700\u8981\u914d\u5408 ",m.a.createElement("code",null,"onpopstate"),"\u4e8b\u4ef6\u6765\u5b9e\u73b0,\u5b83\u53ef\u4ee5\u76d1\u542c\u6d4f\u89c8\u5668\u7684\u524d\u8fdb\u540e\u9000\u4e8b\u4ef6\uff0c\u5f53\u6211\u4eec\u70b9\u51fb\u524d\u8fdb\u540e\u9000\u7684\u65f6\u5019\u53ef\u4ee5\u4f7f\u5f97\u8def\u7531\u540c\u65f6\u53d7\u63a7\u3002"),m.a.createElement("p",null,m.a.createElement("code",null,"pushState()")," \u548c ",m.a.createElement("code",null,"replaceState()")," \u63a5\u53d7\u4e09\u4e2a\u5bf9\u8c61\uff0c\u5206\u522b\u662f\uff1a",m.a.createElement("br",null),"1. ",m.a.createElement("strong",null,"\u72b6\u6001\u5bf9\u8c61"),",  opstate\u4e8b\u4ef6\u76d1\u542c\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",m.a.createElement("code",null,"event.state")," \u62ff\u5230\u8be5\u5bf9\u8c61\uff0c\u72b6\u6001\u5bf9\u8c61\u4e0d\u80fd\u8d85\u8fc7 640k,\u5982\u679c\u6570\u636e\u8f83\u5927\u5efa\u8bae\u7528\u7f13\u5b58\u5b9e\u73b0",m.a.createElement("br",null),"2. ",m.a.createElement("strong",null,"\u6807\u9898"),m.a.createElement("br",null),"3. ",m.a.createElement("strong",null,"URL"),",\u8be5\u53c2\u6570\u5b9a\u4e49\u4e86\u65b0\u7684URL\uff0c\u4f46\u662f\u9875\u9762\u4e0d\u4f1a\u8fdb\u884c\u5237\u65b0"),m.a.createElement("p",null,"\u5177\u4f53\u5b9e\u73b0\u89c1\u4e0b\u65b9\u4ee3\u7801\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"<body>"),m.a.createElement("span",null,"    <button id=\"a\" onClick='clickHandler()'>\u5207\u6362a\u8def\u7531</button>"),m.a.createElement("span",null,"    <button id=\"b\" onClick='clickHandler()'>\u5207\u6362b\u8def\u7531</button>"),m.a.createElement("span",null,"    <button id=\"c\" onClick='clickHandler()'>\u5207\u6362c\u8def\u7531</button>"),m.a.createElement("span",null,'    <div id="app"></div>'),m.a.createElement("span",null,"</body>"),m.a.createElement("span",null,"<script>"),m.a.createElement("span",null,"    let routerMap = ["),m.a.createElement("span",null,"        ","{"," path: 'a', component: 'a\u9875\u9762' },"),m.a.createElement("span",null,"        ","{"," path: 'b', component: 'b\u9875\u9762' },"),m.a.createElement("span",null,"        ","{"," path: 'c', component: 'c\u9875\u9762' }"),m.a.createElement("span",null,"    ]"),m.a.createElement("span",null,"    // \u76d1\u542c\u5de6\u53f3\u952e\u5207\u6362"),m.a.createElement("span",null,"    window.onpopstate = function (event) ","{"),m.a.createElement("span",null,"        let route = event.state.route;"),m.a.createElement("span",null,"        handleRoute(route)"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"    // \u70b9\u51fb\u5207\u6362\u8def\u7531"),m.a.createElement("span",null,"    function clickHandler() ","{"),m.a.createElement("span",null,"        let route = window.event.target.id;"),m.a.createElement("span",null,"        // \u5411\u5386\u53f2\u8bb0\u5f55\u6dfb\u52a0url"),m.a.createElement("span",null,"        history.pushState(","{"," route: route }, null, route);"),m.a.createElement("span",null,"        // \u8def\u7531\u64cd\u4f5c"),m.a.createElement("span",null,"        handleRoute(route)"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"    // \u6a21\u62df\u8def\u7531\u5904\u7406"),m.a.createElement("span",null,"    function handleRoute(route) ","{"),m.a.createElement("span",null,"        let routerData = routerMap.filter(item => item.path === route)[0]"),m.a.createElement("span",null,"        document.getElementById('app').innerHTML = routerData.component;"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"<\/script>"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u5b9e\u73b0\u6548\u679c\uff1a",m.a.createElement("br",null),m.a.createElement("img",{src:"http://wx1.sinaimg.cn/large/a73bc6a1ly1g523tdmlfng20ps0g4e83.gif",alt:"image",title:""})),m.a.createElement("p",null,"\u4f46\u662f\u9700\u8981\u6ce8\u610f\uff0cHistory\u6a21\u5f0f\u6709\u4e00\u4e2a\u5f88\u4e25\u91cd\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u5e94\u7528\u662f\u4e2a\u5355\u9875\u5ba2\u6237\u7aef\u5e94\u7528\uff0c\u5982\u679c\u5237\u65b0\u9875\u9762 ",m.a.createElement("code",null,"xxx.com/history/a")," \u7684\u8bdd\u5c31\u4f1a\u8fd4\u56de 404\u3002\u6240\u4ee5\u9700\u8981\u5728\u670d\u52a1\u7aef\u914d\u7f6e\uff0c\u589e\u52a0\u4e00\u4e2a\u8986\u76d6\u6240\u6709\u60c5\u51b5\u7684\u5019\u9009\u8d44\u6e90\uff1a\u5982\u679c URL \u5339\u914d\u4e0d\u5230\u4efb\u4f55\u9759\u6001\u8d44\u6e90\uff0c\u5219\u5e94\u8be5\u8fd4\u56de\u540c\u4e00\u4e2a index.html \u9875\u9762\u3002\u5bf9\u6b64\uff0cvue-router \u5b98\u65b9\u6587\u6863\u5df2\u7ecf\u7ed9\u4e86\u5f88\u8be6\u7ec6\u7684\u793a\u4f8b\u3002"),m.a.createElement("h3",{id:"\u4e24\u79cd\u6a21\u5f0f\u6bd4\u8f83"},"\u4e24\u79cd\u6a21\u5f0f\u6bd4\u8f83"),m.a.createElement("p",null,m.a.createElement("strong",null,"Hash\u6a21\u5f0f\uff1a")," "),m.a.createElement("ol",null,m.a.createElement("li",null,"\u5b9e\u73b0\u65b9\u5f0f\u8f83\u4e3a\u7b80\u5355\uff0c\u53ef\u4ee5\u901a\u8fc7",m.a.createElement("code",null,"<a>"),"\u6807\u7b7e\u6216\u8005",m.a.createElement("code",null,"location.hash=xxx"),"\u6539\u53d8\u5730\u5740\u7684hash\u503c"),m.a.createElement("li",null,"\u76f4\u63a5\u901a\u8fc7",m.a.createElement("code",null,"hashchange"),"\u76d1\u542chash\u503c\u7684\u53d8\u5316\uff0c\u517c\u5bb9\u6027\u8f83\u597d"),m.a.createElement("li",null,"hash\u503c\u7684\u6539\u53d8\uff0c\u90fd\u4f1a\u5728\u6d4f\u89c8\u5668\u7684\u8bbf\u95ee\u5386\u53f2\u4e2d\u589e\u52a0\u4e00\u4e2a\u8bb0\u5f55\uff0c\u80fd\u901a\u8fc7\u6d4f\u89c8\u5668\u7684\u56de\u9000\u3001\u524d\u8fdb\u6309\u94ae\u63a7\u5236hash\u7684\u5207\u6362"),m.a.createElement("li",null,"URL\u4e2d\u7684hash\u503c\u53ea\u662f\u5ba2\u6237\u7aef\u7684\u72b6\u6001\uff0c\u5f53\u5411\u670d\u52a1\u5668\u7aef\u53d1\u51fa\u8bf7\u6c42\u65f6hash\u90e8\u5206\u4e0d\u4f1a\u88ab\u53d1\u9001\uff0c\u4e0d\u5229\u4e8eSEO")),m.a.createElement("p",null,m.a.createElement("strong",null,"History\u6a21\u5f0f\uff1a")," "),m.a.createElement("ol",null,m.a.createElement("li",null,"\u9700\u8981\u7528\u5230",m.a.createElement("code",null,"pushState"),"\u548c",m.a.createElement("code",null,"repalceState"),"\u4e24\u4e2aAPI\u6765\u64cd\u4f5c\u5b9e\u73b0URL\u7684\u53d8\u5316\uff0c\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898"),m.a.createElement("li",null,"\u901a\u8fc7",m.a.createElement("code",null,"popstate"),"\u4e8b\u4ef6\u6765\u76d1\u542cURL\u7684\u53d8\u5316\uff0c\uff0c\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898"),m.a.createElement("li",null,"\u6ca1\u6709\u201c\u4e11\u964b\u201d\u7684\u201c#\u201d\u770b\u8d77\u6765\u50cf\u6b63\u5e38\u7684URL"),m.a.createElement("li",null,"\u9700\u8981\u540e\u7aef\u914d\u7f6e\u914d\u5408\uff0c\u5426\u5219\u5237\u65b0\u9875\u9762\u4f1a\u51fa\u73b0404\uff0c\u56e0\u4e3a\u670d\u52a1\u5668\u4f1a\u8ba4\u4e3a\u8def\u7531\u90e8\u5206\u662f\u6587\u4ef6\u8def\u5f84"))))}}]),t}(m.a.Component)}}]);
//# sourceMappingURL=25.9dc8ebef.chunk.js.map