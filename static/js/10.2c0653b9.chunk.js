(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(e,t,a){},126:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(4),l=a(5),r=a(7),c=a(6),i=a(8),u=a(0),s=a.n(u),o=(a(127),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),u=0;u<l;u++)i[u]=arguments[u];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).clickPosBtn=function(e){var t=document.getElementById(e);window.scrollTo({top:t.offsetTop-10,left:0,behavior:"smooth"})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"headerLink"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"real-content"},s.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(t,a){return s.a.createElement("span",{className:"a"+t.level,key:a,onClick:function(){return e.clickPosBtn(t.title)}},t.title)}))))}}]),t}(s.a.Component))},127:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(4),l=a(5),r=a(7),c=a(6),i=a(8),u=a(0),s=a.n(u),o=(a(124),a(126)),m=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this))).state={headerLink:[{level:"h3",title:"keep-alive\u7b80\u5355\u4ecb\u7ecd"},{level:"h3",title:"this.$route.query\u62a5\u9519"},{level:"h3",title:"\u4e8b\u4ef6\u7684\u5904\u7406"}]},e}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(o.a,{headerLink:this.state.headerLink}),s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"title-content"},s.a.createElement("h1",{className:"title"},"\u5228\u4e0bVUE\u4e2dkeep-alive\u7684\u4e00\u4e9b\u5751")),s.a.createElement("p",null,"\u5728\u505a\u5927\u725b\u5de5\u8d44\u6761\u7684\u65f6\u5019\u9047\u5230\u4e00\u4e2a\u9700\u6c42\u662f\u9700\u8981\u56fa\u5b9a\u9875\u9762\u4e0d\u8fdb\u884c\u6e32\u67d3\u7684\uff0c\u8fd9\u65f6\u5c31\u7528\u5230\u4e86 keep-alive\u4e86\u3002  "),s.a.createElement("h3",{id:"keep-alive\u7b80\u5355\u4ecb\u7ecd"},"keep-alive\u7b80\u5355\u4ecb\u7ecd"),s.a.createElement("p",null,"\u5982\u4e0b\u5728vue\u9879\u76ee\u91cc\u9762\u914d\u7f6e keep-alive\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null,"js"),s.a.createElement("span",null,"//app.vue"),s.a.createElement("span",null,"//\u53ea\u6709 keepAlive \u5c5e\u6027\u7684\u8def\u7531\u624d\u4f7f\u7528 keep-alive "),s.a.createElement("span",null,"//\u5982\u679c\u5168\u5c40\u90fd\u4f7f\u7528\u7684\u8bdd\u5219\u53bb\u6389 v-if\u5373\u53ef"),s.a.createElement("span",null,"<keep-alive>"),s.a.createElement("span",null,'     <router-view v-if="$route.meta.keepAlive"></router-view>'),s.a.createElement("span",null,"</keep-alive>"),s.a.createElement("span",null,"<router-view v-else></router-view>"),s.a.createElement("span",null),s.a.createElement("span",null,"//\u8def\u7531\u4e2d\u7684\u914d\u7f6e "),s.a.createElement("span",null," ","{"),s.a.createElement("span",null,"    path: '/salarydetail',"),s.a.createElement("span",null,"    name: 'salaryDetail',"),s.a.createElement("span",null,"    component: resolve => require(['@/page/salaryDetail'], resolve),"),s.a.createElement("span",null," \xa0 \xa0meta: ","{"," keepAlive: true }//\u6dfb\u52a0meta\uff0ckeepAlive\u5c5e\u6027"),s.a.createElement("span",null," \xa0}"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u5728 keep-alive\u7684\u8def\u7531\u7ec4\u4ef6\u91cc\u9762\u7684\u58f0\u660e\u5468\u671f\u6392\u5e8f\uff1a",s.a.createElement("br",null),"1.\u9875\u9762\u7b2c\u4e00\u6b21\u8fdb\u5165\uff0c\u94a9\u5b50\u7684\u89e6\u53d1\u987a\u5e8f",s.a.createElement("b",null,"created-> mounted-> activated"),"\uff0c\u9000\u51fa\u65f6\u89e6\u53d1deactivated\u3002",s.a.createElement("br",null),"2.\u5f53\u518d\u6b21\u8fdb\u5165\uff08\u524d\u8fdb\u6216\u8005\u540e\u9000\uff09\u65f6\uff0c\u53ea\u89e6\u53d1activated\u3002"),s.a.createElement("h3",{id:"this.$route.query\u62a5\u9519"},"this.$route.query\u62a5\u9519"),s.a.createElement("p",null,"\u5728\u9879\u76ee\u4e2d\u9047\u5230\u4e00\u4e2abug\uff0c\u83b7\u53d6\u8def\u7531\u7684query\u503c\u65f6\u6709\u65f6\u4f1a\u62a5\u9519\uff0c\u8fd9\u91cc\u53d1\u73b0\u95ee\u9898\u662f\uff0c\u4f7f\u7528\u4e86keep-alive\u540e\u6570\u636e\u9700\u8981\u8fdb\u5165\u9875\u9762\u5728activated\u4e2d\u518d\u6b21\u83b7\u53d6\uff0c\u624d\u80fd\u8fbe\u5230\u66f4\u65b0\u7684\u76ee\u7684\u3002\u6240\u4ee5\u5728\u70b9\u51fb\u67d0\u4e2a\u4e8b\u4ef6\u83b7\u53d6 this.$route.query\u65f6\u5c31\u4e0d\u662f\u6700\u65b0\u7684\u4e8b\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u53d8\u91cf\u5728 activated \u5468\u671f\u91cc\u9762\u8fdb\u884c\u66f4\u65b0\u8d4b\u503c\u3002"),s.a.createElement("h3",{id:"\u4e8b\u4ef6\u7684\u5904\u7406"},"\u4e8b\u4ef6\u7684\u5904\u7406"),s.a.createElement("p",null,"\u53d1\u751f\u7684\u95ee\u9898\u662f\u4e8b\u4ef6\u7ed1\u5b9a\u4e86\u5f88\u591a\u6b21\uff0c\u6bd4\u5982\u4e0a\u4f20\u70b9\u51fbinput\u76d1\u542cchange\u4e8b\u4ef6\uff0c\u7a81\u7136\u663e\u793a\u4e86\u591a\u5f20\u76f8\u540c\u56fe\u7247\u7684\u95ee\u9898\u3002"),s.a.createElement("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0cDOM\u5728\u7f16\u8bd1\u540e\u5c31\u7f13\u5b58\u5728\u5185\u5bb9\u4e2d\u4e86\uff0c\u5982\u679c\u518d\u6b21\u8fdb\u5165\u8fd8\u518d\u8fdb\u884c\u4e8b\u4ef6\u7ed1\u5b9a\u521d\u59cb\u5316\u5219\u5c31\u4f1a\u53d1\u751f\u8fd9\u4e2a\u95ee\u9898\u3002"),s.a.createElement("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a\u5728mounted\u4e2d\u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u5e76\u4e14DOM\u5df2\u51c6\u5907\u597d\u3002\u5982\u679c\u63d2\u4ef6\u7ed1\u5b9a\u540e\u8fd8\u8981\u518d\u6267\u884c\u4e00\u4e0b\u4e8b\u4ef6\u7684handler\u51fd\u6570\u7684\u8bdd\uff0c\u90a3\u5c31\u63d0\u53d6\u51fa\u6765\uff0c\u653e\u5728activated\u4e2d\u6267\u884c\u3002\u6bd4\u5982\uff1a\u6839\u636e\u8f93\u5165\u5185\u5bb9\u81ea\u52a8\u589e\u957ftextarea\u7684\u9ad8\u5ea6\uff0c\u8fd9\u90e8\u5206\u9700\u8981\u76d1\u542ctextarea\u7684input\u548cchange\u4e8b\u4ef6\uff0c\u5e76\u4e14\u9875\u9762\u8fdb\u5165\u540e\u8fd8\u8981\u518d\u6b21\u6267\u884c\u4e00\u6b21handler\u51fd\u6570\uff0c\u66f4\u65b0textarea\u9ad8\u5ea6\uff08\u907f\u514d\u4e0a\u6b21\u8f93\u5165\u7684\u5f71\u54cd\uff09\u3002")))}}]),t}(s.a.Component)}}]);
//# sourceMappingURL=10.2c0653b9.chunk.js.map