(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{123:function(e,l,t){},125:function(e,l,t){"use strict";t.d(l,"a",function(){return o});var a=t(4),n=t(5),r=t(7),c=t(6),u=t(8),m=t(0),i=t.n(m),o=(t(126),function(e){function l(){var e,t;Object(a.a)(this,l);for(var n=arguments.length,u=new Array(n),m=0;m<n;m++)u[m]=arguments[m];return(t=Object(r.a)(this,(e=Object(c.a)(l)).call.apply(e,[this].concat(u)))).clickPosBtn=function(e){var l=document.getElementById(e);window.scrollTo({top:l.offsetTop-10,left:0,behavior:"smooth"})},t}return Object(u.a)(l,e),Object(n.a)(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"headerLink"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"real-content"},i.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(l,t){return i.a.createElement("span",{className:"a"+l.level,key:t,onClick:function(){return e.clickPosBtn(l.title)}},l.title)}))))}}]),l}(i.a.Component))},126:function(e,l,t){},49:function(e,l,t){"use strict";t.r(l),t.d(l,"default",function(){return E});var a=t(4),n=t(5),r=t(7),c=t(6),u=t(8),m=t(0),i=t.n(m),o=(t(123),t(125)),E=function(e){function l(){var e;return Object(a.a)(this,l),(e=Object(r.a)(this,Object(c.a)(l).call(this))).state={headerLink:[{level:"h3",title:"\u4ee3\u7801\u4f18\u5316"},{level:"h4",title:"v-for\u76f8\u5173"},{level:"h4",title:"\u51bb\u7ed3\u4e0d\u4f1a\u53d8\u5316\u7684\u5bf9\u8c61"},{level:"h4",title:"\u907f\u514d\u5185\u5b58\u6cc4\u6f0f"},{level:"h4",title:"\u56fe\u7247\u61d2\u52a0\u8f7d"},{level:"h4",title:"\u8def\u7531\u61d2\u52a0\u8f7d"},{level:"h4",title:"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u6309\u9700\u5f15\u5165"},{level:"h4",title:"\u670d\u52a1\u5668\u6e32\u67d3 SSR"},{level:"h4",title:"\u8bbe\u7f6e\u9884\u6e32\u67d3"},{level:"h3",title:"Web\u57fa\u7840\u4f18\u5316"},{level:"h3",title:"Webpack\u4f18\u5316"},{level:"h3",title:"Webpack\u6784\u5efa\u4f18\u5316"},{level:"h4",title:"\u51cf\u5c11\u5197\u4f59\u4ee3\u7801"},{level:"h4",title:"\u4f18\u5316 Loader \u914d\u7f6e"},{level:"h4",title:"\u4f18\u5316 resolve.noParse \u914d\u7f6e"},{level:"h4",title:"HappyPack \u591a\u5b50\u8fdb\u7a0b\u6784\u5efa"},{level:"h4",title:"ParallelUglifyPlugin \u53ef\u4ee5\u5f00\u542f\u591a\u4e2a\u8fdb\u7a0b\uff0c\u5e76\u884c\u4f7f\u7528 UglifyJS \u538b\u7f29\u4ee3\u7801\u6587\u4ef6"},{level:"h4",title:"\u8c03\u8282\u81ea\u52a8\u5237\u65b0\u65f6\u95f4"},{level:"h4",title:"\u6a21\u5757\u70ed\u66f4\u65b0"},{level:"h3",title:"\u53c2\u8003"}]},e}return Object(u.a)(l,e),Object(n.a)(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(m.Fragment,null,i.a.createElement(o.a,{headerLink:this.state.headerLink}),i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"title-content"},i.a.createElement("h1",{className:"title"},"Vue\u9879\u76ee\u4f18\u5316\u603b\u7ed3")),i.a.createElement("h3",{id:"\u4ee3\u7801\u4f18\u5316"},"\u4ee3\u7801\u4f18\u5316"),i.a.createElement("h4",{id:"v-for\u76f8\u5173"},"v-for\u76f8\u5173"),i.a.createElement("ol",null,i.a.createElement("li",null,i.a.createElement("p",null,"v-for\u904d\u5386",i.a.createElement("strong",null,"\u5fc5\u987b\u52a0key"),"\uff0c\u4e3a\u4e86\u65b9\u4fbf\u65b0\u65e7dom\u5bf9\u6bd4\u65f6\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u552f\u4e00id\u5feb\u901f\u5904\u7406\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u6211\u7684\u8fd9\u7bc7\u6587\u7ae0\uff1a",i.a.createElement("a",{target:"_blank",href:"http://www.duhonghui.top/#/vue%E7%9A%84key%E5%B1%9E%E6%80%A7%E5%8A%A0%E8%BF%98%E6%98%AF%E4%B8%8D%E5%8A%A0"},"vue\u7684key\u5c5e\u6027\u52a0\u8fd8\u662f\u4e0d\u52a0\uff1f"))),i.a.createElement("li",null,i.a.createElement("p",null,i.a.createElement("strong",null,"\u907f\u514d\u540c\u65f6\u548cv-if\u4f7f\u7528"),"\uff0c\u56e0\u4e3a\u4ee3\u7801\u4f1a\u5148\u6267\u884cfor\u518dif\uff0c\u8fd9\u6837\u4f1a\u9020\u6210\u591a\u4f59\u7684\u5faa\u73af\u5f00\u9500\uff0c\u6700\u597d\u914d\u5408computed\uff0c\u628aif\u64cd\u4f5c\u653e\u5230computed\u91cc\u9762\u53bb\u6267\u884c"))),i.a.createElement("h4",{id:"\u51bb\u7ed3\u4e0d\u4f1a\u53d8\u5316\u7684\u5bf9\u8c61"},"\u51bb\u7ed3\u4e0d\u4f1a\u53d8\u5316\u7684\u5bf9\u8c61"),i.a.createElement("p",null,"\u5f53\u6570\u636e\u91cf\u5927\u4e14\u4e0d\u4f1a\u4fee\u6539\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528",i.a.createElement("code",null,"Object.freeze"),"\u51bb\u7ed3\u8be5\u5bf9\u8c61\uff0c\u963b\u6b62Vue\u52ab\u6301\u6570\u636e"),i.a.createElement("h4",{id:"\u907f\u514d\u5185\u5b58\u6cc4\u6f0f"},"\u907f\u514d\u5185\u5b58\u6cc4\u6f0f"),i.a.createElement("p",null,"Vue\u7ec4\u4ef6\u9500\u6bc1\u65f6\u4f1a\u81ea\u52a8\u6e05\u7406\u5b83\u4e0e\u5b9e\u4f8b\u7684\u94fe\u63a5\uff0c\u89e3\u7ed1\u5168\u90e8\u6307\u4ee4\u4ee5\u53ca\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u4f46\u662f\u5728js\u5185\u901a\u8fc7",i.a.createElement("code",null,"addEventListener"),"\u7ed1\u5b9a\u7684\u4e0d\u4f1a\u81ea\u52a8\u9500\u6bc1\uff0c\u9700\u8981\u624b\u52a8\u79fb\u9664\uff0c\u907f\u514d\u5185\u5b58\u6cc4\u6f0f"),i.a.createElement("h4",{id:"\u56fe\u7247\u61d2\u52a0\u8f7d"},"\u56fe\u7247\u61d2\u52a0\u8f7d"),i.a.createElement("p",null,"\u5728vue\u4e2d\u53ef\u4ee5\u4f7f\u7528",i.a.createElement("code",null,"vue-lazyload"),"\u5b9e\u73b0\u56fe\u7247\u61d2\u52a0\u8f7d"),i.a.createElement("h4",{id:"\u8def\u7531\u61d2\u52a0\u8f7d"},"\u8def\u7531\u61d2\u52a0\u8f7d"),i.a.createElement("p",null,"\u5728",i.a.createElement("code",null,"vue-router"),"\u4e2d\u914d\u7f6e\u61d2\u52a0\u8f7d\uff0c\u6309\u9700\u8f7d\u5165\uff0c\u51cf\u5c11\u9996\u9875\u767d\u5c4f\u65f6\u95f4\uff1a"),i.a.createElement("pre",null,i.a.createElement("code",null,i.a.createElement("span",null),i.a.createElement("span",null,"const Foo = () => import('./Foo.vue')"),i.a.createElement("span",null,"const router = new VueRouter(","{"),i.a.createElement("span",null,"  routes: ["),i.a.createElement("span",null,"    ","{"," path: '/foo', component: Foo }"),i.a.createElement("span",null,"  ]"),i.a.createElement("span",null,"})"),i.a.createElement("span",null))),i.a.createElement("h4",{id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u6309\u9700\u5f15\u5165"},"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u6309\u9700\u5f15\u5165"),i.a.createElement("p",null,"\u501f\u52a9",i.a.createElement("code",null,"babel-plugin-component"),"\uff0c\u6bd4\u5982\u6211\u4eec\u5e38\u89c1\u7684\u6309\u9700\u5f15\u5165 elementUI"),i.a.createElement("h4",{id:"\u670d\u52a1\u5668\u6e32\u67d3 SSR"},"\u670d\u52a1\u5668\u6e32\u67d3 SSR"),i.a.createElement("p",null,"\u670d\u52a1\u7aef\u6e32\u67d3\u662f\u6307 Vue \u5728\u5ba2\u6237\u7aef\u5c06\u6807\u7b7e\u6e32\u67d3\u6210\u7684\u6574\u4e2a html \u7247\u6bb5\u7684\u5de5\u4f5c\u5728\u670d\u52a1\u7aef\u5b8c\u6210\uff0c\u670d\u52a1\u7aef\u5f62\u6210\u7684 html \u7247\u6bb5\u76f4\u63a5\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u53eb\u505a\u670d\u52a1\u7aef\u6e32\u67d3\u3002"),i.a.createElement("p",null,"\u4f18\u70b9\uff1a"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5229\u4e8eSEO\uff0c\u56e0\u4e3aSPA\u662f\u901a\u8fc7\u5f02\u6b65\u52a0\u8f7djs\u6587\u4ef6\u52a8\u6001\u8f7d\u5165\u5185\u5bb9\u7684\uff0c\u4f46\u662f\u722c\u866b\u4e0d\u4f1a\u7b49\u4f60\u5f02\u6b65\u8f7d\u5165\u4ee5\u540e\u518d\u6293\u9875\u9762\u5185\u5bb9"),i.a.createElement("li",null,"\u9996\u5c4f\u52a0\u8f7d\u66f4\u5feb\uff0c\u56e0\u4e3aSPA\u8fd8\u8981\u7b49js\u6587\u4ef6\u90fd\u4e0b\u8f7d\u5b8c\u4e86\u624d\u5f00\u59cb\u9875\u9762\u6e32\u67d3")),i.a.createElement("p",null,"\u7f3a\u70b9\uff1a"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5f00\u53d1\u9650\u5236\uff0c\u4f8b\u5982\u670d\u52a1\u7aef\u6e32\u67d3\u53ea\u652f\u6301 beforCreate \u548c created \u4e24\u4e2a\u94a9\u5b50\u51fd\u6570\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u5916\u90e8\u6269\u5c55\u5e93\u9700\u8981\u7279\u6b8a\u5904\u7406\uff0c\u624d\u80fd\u5728\u670d\u52a1\u7aef\u6e32\u67d3\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8fd0\u884c\uff1b\u5e76\u4e14\u4e0e\u53ef\u4ee5\u90e8\u7f72\u5728\u4efb\u4f55\u9759\u6001\u6587\u4ef6\u670d\u52a1\u5668\u4e0a\u7684\u5b8c\u5168\u9759\u6001\u5355\u9875\u9762\u5e94\u7528\u7a0b\u5e8f SPA \u4e0d\u540c\uff0c\u670d\u52a1\u7aef\u6e32\u67d3\u5e94\u7528\u7a0b\u5e8f\uff0c\u9700\u8981\u5904\u4e8e Node.js server \u8fd0\u884c\u73af\u5883\uff1b"),i.a.createElement("li",null,"\u66f4\u591a\u7684\u670d\u52a1\u5668\u8d1f\u8f7d\uff1a\u5728 Node.js \u4e2d\u6e32\u67d3\u5b8c\u6574\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u663e\u7136\u4f1a\u6bd4\u4ec5\u4ec5\u63d0\u4f9b\u9759\u6001\u6587\u4ef6\u7684 server \u66f4\u52a0\u5927\u91cf\u5360\u7528CPU \u8d44\u6e90\uff0c\u56e0\u6b64\u5982\u679c\u4f60\u9884\u6599\u5728\u9ad8\u6d41\u91cf\u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u8bf7\u51c6\u5907\u76f8\u5e94\u7684\u670d\u52a1\u5668\u8d1f\u8f7d\uff0c\u5e76\u660e\u667a\u5730\u91c7\u7528\u7f13\u5b58\u7b56\u7565\u3002")),i.a.createElement("h4",{id:"\u8bbe\u7f6e\u9884\u6e32\u67d3"},"\u8bbe\u7f6e\u9884\u6e32\u67d3"),i.a.createElement("p",null,"\u6784\u5efa\u65f6\u751f\u4ea7\u9488\u5bf9\u7279\u5b9a\u8def\u7531\u7684\u9759\u6001HTML\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528",i.a.createElement("code",null,"prerender-spa-plugin"),"\u6765\u5b9e\u73b0"),i.a.createElement("h3",{id:"Web\u57fa\u7840\u4f18\u5316"},"Web\u57fa\u7840\u4f18\u5316"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5f00\u542f gzip \u538b\u7f29"),i.a.createElement("li",null,"\u6d4f\u89c8\u5668\u7f13\u5b58"),i.a.createElement("li",null,"\u542f\u7528 CDN"),i.a.createElement("li",null,"\u4f7f\u7528 Chrome Performance \u68c0\u6d4b\u4ee3\u7801\u6027\u80fd")),i.a.createElement("h3",{id:"Webpack\u4f18\u5316"},"Webpack\u4f18\u5316"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("code",null,"url-loader")," ,\u8bbe\u7f6elimit\u4f7f\u5c0f\u56fe\u7247\u8f6c\u5316\u4e3abase64"),i.a.createElement("li",null,i.a.createElement("code",null,"image-webpack-loader")," \u7528\u6765\u538b\u7f29\u56fe\u7247"),i.a.createElement("li",null,i.a.createElement("code",null,"CommonsChunkPlugin"),",\u63d0\u53d6\u7b2c\u4e09\u65b9\u5e93\u5408\u516c\u5171\u6a21\u5757\uff0c\u907f\u514d\u76f8\u540c\u8d44\u6e90\u91cd\u590d\u52a0\u8f7d\u548c\u6d6a\u8d39"),i.a.createElement("li",null,i.a.createElement("code",null,"vue-template-loader"),"  \u6a21\u7248\u9884\u7f16\u8bd1\uff0c"),i.a.createElement("li",null,i.a.createElement("code",null,"SourceMap")," \uff0c\u56e0\u4e3a\u4ee3\u7801\u6253\u5305\u540e\u7ecf\u8fc7\u538b\u7f29\u7b49\u624b\u6bb5\u4e0d\u597d\u770b\u4ee3\u7801\uff0c\u5b83\u5c31\u662f\u6765\u89e3\u51b3\u4e0d\u597d\u8c03\u8bd5\u4ee3\u7801\u7684\u95ee\u9898\uff0c\u6709\u591a\u79cd\u8c03\u8bd5\u9009\u62e9"),i.a.createElement("li",null,i.a.createElement("code",null,"webpack-bundle-analyzer"),"\uff0c\u6784\u5efa\u7ed3\u679c\u8f93\u51fa\u5206\u6790\uff0c\u5728vue-cli\u4e2d\u76f4\u63a5\u901a\u8fc7 ",i.a.createElement("code",null,"npm run build \u2014report")," \u6307\u4ee4\u5373\u53ef")),i.a.createElement("h3",{id:"Webpack\u6784\u5efa\u4f18\u5316"},"Webpack\u6784\u5efa\u4f18\u5316"),i.a.createElement("h4",{id:"\u51cf\u5c11\u5197\u4f59\u4ee3\u7801"},"\u51cf\u5c11\u5197\u4f59\u4ee3\u7801"),i.a.createElement("p",null,"Babel \u63d0\u4f9b\u4e86 ",i.a.createElement("code",null,"babel-plugin-transform-runtime")," \u63d2\u4ef6\u6765\u51cf\u5c11\u5197\u4f59\u4ee3\u7801"),i.a.createElement("h4",{id:"\u4f18\u5316 Loader \u914d\u7f6e"},"\u4f18\u5316 Loader \u914d\u7f6e"),i.a.createElement("p",null,"\u5c3d\u53ef\u80fd\u8ba9\u66f4\u5c11\u7684\u6587\u4ef6\u88ab Loader \u5904\u7406\uff0c\u4e3b\u8981\u6709\u4e09\u79cd\u529e\u6cd5\uff1a\uff081\uff09\u4f18\u5316\u6b63\u5219\u5339\u914d\uff082\uff09\u901a\u8fc7cacheDirectory\u9009\u9879\u5f00\u542f\u7f13\u5b58\uff083\uff09\u901a\u8fc7include\u3001exclude\u6765\u51cf\u5c11\u88ab\u5904\u7406\u7684\u6587\u4ef6"),i.a.createElement("h4",{id:"\u4f18\u5316 resolve.noParse \u914d\u7f6e"},"\u4f18\u5316 resolve.noParse \u914d\u7f6e"),i.a.createElement("p",null,"noParse\u914d\u7f6e\u9879\u53ef\u4ee5\u8ba9Webpack\u5ffd\u7565\u5bf9\u90e8\u5206\u6ca1\u91c7\u7528\u6a21\u5757\u5316\u7684\u6587\u4ef6\u7684\u9012\u5f52\u89e3\u6790\u548c\u5904\u7406"),i.a.createElement("h4",{id:"HappyPack \u591a\u5b50\u8fdb\u7a0b\u6784\u5efa"},"HappyPack \u591a\u5b50\u8fdb\u7a0b\u6784\u5efa"),i.a.createElement("p",null,i.a.createElement("code",null,"HappyPack"),"\u53ef\u4ee5\u8ba9 Webpack \u6784\u5efa\u7531\u4e00\u4e2a\u5355\u7ebf\u7a0b\u5206\u89e3\u6210\u591a\u4e2a\u5b50\u8fdb\u7a0b\u53bb\u5e76\u53d1\u5904\u7406\u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u4e3b\u8fdb\u7a0b\uff0c\u52a0\u5feb Webpack \u5bf9\u6587\u4ef6\u7684\u89e3\u6790\u548c\u5904\u7406"),i.a.createElement("h4",{id:"ParallelUglifyPlugin \u53ef\u4ee5\u5f00\u542f\u591a\u4e2a\u8fdb\u7a0b\uff0c\u5e76\u884c\u4f7f\u7528 UglifyJS \u538b\u7f29\u4ee3\u7801\u6587\u4ef6"},"ParallelUglifyPlugin \u53ef\u4ee5\u5f00\u542f\u591a\u4e2a\u8fdb\u7a0b\uff0c\u5e76\u884c\u4f7f\u7528 UglifyJS \u538b\u7f29\u4ee3\u7801\u6587\u4ef6"),i.a.createElement("p",null,"\u538b\u7f29\u4ee3\u7801\u6587\u4ef6\u7684\u8fc7\u7a0b\u9700\u8981\u5c06Object\u5bf9\u8c61\u62bd\u8c61\u4e3aAST\u8bed\u6cd5\u6811\uff0c\u5728\u7528\u5404\u79cd\u89c4\u5219\u89e3\u6790\u5904\u7406AST\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u975e\u5e38\u8017\u65f6\uff0c\u5f53js\u6587\u4ef6\u5f88\u591a\u7684\u65f6\u5019\uff0c\u5e76\u884c\u538b\u7f29\u4ee3\u7801\u6587\u4ef6\u7684\u5904\u7406\u4f1a\u52a0\u5feb\u6784\u5efa\u901f\u5ea6"),i.a.createElement("h4",{id:"\u8c03\u8282\u81ea\u52a8\u5237\u65b0\u65f6\u95f4"},"\u8c03\u8282\u81ea\u52a8\u5237\u65b0\u65f6\u95f4"),i.a.createElement("p",null,"\u901a\u8fc7\u914d\u7f6e",i.a.createElement("code",null,"devServer"),"\u4e0b\u7684\u76f8\u5173\u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u9875\u9762\u81ea\u52a8\u5237\u65b0\u7684\u76f8\u5173\u89c4\u5219\uff1a"),i.a.createElement("pre",null,i.a.createElement("code",null,i.a.createElement("span",null),i.a.createElement("span",null,"devServer: ","{"),i.a.createElement("span",null,"  watchOptions: ","{"),i.a.createElement("span",null,"    // \u4e0d\u76d1\u542c\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u652f\u6301\u6b63\u5219\u5339\u914d"),i.a.createElement("span",null,"    ignored: /node_modules/,"),i.a.createElement("span",null,"    // \u76d1\u542c\u5230\u53d8\u5316\u540e\u7b49300ms\u518d\u53bb\u6267\u884c\u52a8\u4f5c"),i.a.createElement("span",null,"    aggregateTimeout: 300,"),i.a.createElement("span",null,"    // \u9ed8\u8ba4\u6bcf\u79d2\u8be2\u95ee1000\u6b21"),i.a.createElement("span",null,"    poll: 1000"),i.a.createElement("span",null,"  }"),i.a.createElement("span",null,"}"),i.a.createElement("span",null))),i.a.createElement("h4",{id:"\u6a21\u5757\u70ed\u66f4\u65b0"},"\u6a21\u5757\u70ed\u66f4\u65b0"),i.a.createElement("p",null,"\u6a21\u5757\u70ed\u66ff\u65b0\uff08 Hot Module Replacement \uff09\uff0c\u4e5f\u53ef\u4ee5\u7b80\u79f0 HMR\uff0c\u53ef\u4ee5\u5728\u4e00\u4e2a\u6e90\u7801\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u53ea\u9700\u91cd\u65b0\u7f16\u8bd1\u53d1\u751f\u53d8\u5316\u7684\u6a21\u5757\uff0c\u518d\u7528\u65b0\u8f93\u51fa\u7684\u6a21\u5757\u66ff\u6362\u6389\u6d4f\u89c8\u5668\u4e2d\u5bf9\u5e94\u7684\u8001\u6a21\u5757\u3002"),i.a.createElement("pre",null,i.a.createElement("code",null,i.a.createElement("span",null),i.a.createElement("span",null,"devServer: ","{"),i.a.createElement("span",null,"  hot: true,"),i.a.createElement("span",null,"},"),i.a.createElement("span",null,"plugins: ["),i.a.createElement("span",null,"  new webpack.HotModuleReplacementPlugin(),"),i.a.createElement("span",null,"// \u663e\u793a\u88ab\u66ff\u6362\u6a21\u5757\u7684\u540d\u79f0"),i.a.createElement("span",null,"  new webpack.NamedModulesPlugin(), // HMR shows correct file names"),i.a.createElement("span",null,"]"),i.a.createElement("span",null))),i.a.createElement("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),i.a.createElement("blockquote",null,i.a.createElement("p",null,i.a.createElement("a",{target:"_blank",href:"https://juejin.im/post/5d548b83f265da03ab42471d"},"Vue \u9879\u76ee\u6027\u80fd\u4f18\u5316"),i.a.createElement("br",null),i.a.createElement("a",{target:"_blank",href:"https://juejin.im/post/5c1fa158f265da613c09cb36"},"Vue\u9879\u76eeWebpack\u4f18\u5316\u5b9e\u8df5")))))}}]),l}(i.a.Component)}}]);
//# sourceMappingURL=12.9b8cb2e6.chunk.js.map