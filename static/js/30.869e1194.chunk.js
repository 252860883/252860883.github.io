(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{123:function(e,t,a){},125:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(4),l=a(5),r=a(7),c=a(6),s=a(8),u=a(0),m=a.n(u),i=(a(126),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).clickPosBtn=function(e){var t=document.getElementById(e);window.scrollTo({top:t.offsetTop-10,left:0,behavior:"smooth"})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(t,a){return m.a.createElement("span",{className:"a"+t.level,key:a,onClick:function(){return e.clickPosBtn(t.title)}},t.title)}))))}}]),t}(m.a.Component))},126:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(4),l=a(5),r=a(7),c=a(6),s=a(8),u=a(0),m=a.n(u),i=(a(123),a(125)),p=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this))).state={headerLink:[{level:"h3",title:"\u65b9\u6cd5\u4e00\uff1a\u5229\u7528\u6b7b\u5faa\u73af\u963b\u585e\u7ebf\u7a0b"},{level:"h3",title:"\u65b9\u6cd5\u4e8c\uff1aAsync/Await"},{level:"h3",title:"\u65b9\u6cd5\u4e09\uff1aGenerator"},{level:"h3",title:"\u6700\u540e"},{level:"h3",title:"\u53c2\u8003"}]},e}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(u.Fragment,null,m.a.createElement(i.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"\u5982\u4f55\u7528js\u5b9e\u73b0\u4e00\u4e2asleep\u51fd\u6570")),m.a.createElement("blockquote",null,m.a.createElement("p",null,"Sleep\u51fd\u6570\u53ef\u4ee5\u4f7f\u8ba1\u7b97\u673a\u7a0b\u5e8f\uff08\u8fdb\u7a0b\uff0c\u4efb\u52a1\u6216\u7ebf\u7a0b\uff09\u8fdb\u5165\u4f11\u7720\uff0c\u4f7f\u5176\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u5904\u4e8e\u975e\u6d3b\u52a8\u72b6\u6001\u3002\u5f53\u51fd\u6570\u8bbe\u5b9a\u7684\u8ba1\u65f6\u5668\u5230\u671f\uff0c\u6216\u8005\u63a5\u6536\u5230\u4fe1\u53f7\u3001\u7a0b\u5e8f\u53d1\u751f\u4e2d\u65ad\u90fd\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u7ee7\u7eed\u6267\u884c\u3002")),m.a.createElement("p",null,"\u4e00\u4e9b\u8bed\u8a00\u4e2d\u90fd\u5b9e\u73b0\u4e86sleep\u51fd\u6570\uff0c\u6bd4\u5982java\u4e2d",m.a.createElement("code",null,"Thread.sleep"),"\uff0cshell\u811a\u672c\u4e2d\u7684",m.a.createElement("code",null,"sleep\u547d\u4ee4"),"\u7b49\u7b49\uff0c\u4f46\u662f\u5bf9\u4e8eJavaScript\uff0c\u672c\u8eab\u5e76\u6ca1\u6709\u63d0\u4f9b sleep() \u65b9\u6cd5\uff0c\u5728\u6267\u884cjs\u811a\u672c\u65f6\u6ca1\u6709\u76f4\u63a5\u7684\u8ba9\u7ebf\u7a0b\u8fdb\u5165\u4f11\u7720\u6682\u505c\u7684\u529f\u80fd\uff0c\u6216\u8bb8\u6211\u4eec\u5e38\u89c1\u7684\u5904\u7406\u662f\u628a2s\u4ee5\u540e\u8981\u6267\u884c\u7684\u4ee3\u7801\u653e\u5230 setTimeout \u4e2d\u8fdb\u884c\u5f02\u6b65\u5904\u7406\uff0c\u4f46\u662f\u50cf sleep() \u51fd\u6570\u8fd9\u6837\u5728\u540c\u6b65\u7684\u4ee3\u7801\u91cc\u53bb\u6267\u884c\u4f11\u7720\u64cd\u4f5c\u7684\u529f\u80fd\uff0c\u6709\u6ca1\u6709\u529e\u6cd5\u6a21\u62df\u5b9e\u73b0\u4e00\u4e0b\u5462\uff1f"),m.a.createElement("h3",{id:"\u65b9\u6cd5\u4e00\uff1a\u5229\u7528\u6b7b\u5faa\u73af\u963b\u585e\u7ebf\u7a0b"},"\u65b9\u6cd5\u4e00\uff1a\u5229\u7528\u6b7b\u5faa\u73af\u963b\u585e\u7ebf\u7a0b"),m.a.createElement("p",null,"\u5728 timeout \u65f6\u95f4\u5185\u75af\u72c2\u7684\u6267\u884c\u6b7b\u5faa\u73af\u6765\u963b\u585e\u7ebf\u7a0b\uff0c\u867d\u7136\u540e\u7eed\u7684\u4ee3\u7801\u4e0d\u7ee7\u7eed\u6267\u884c\u4e86\uff0c\u4f46\u662f\u8fd9\u5e76\u4e0d\u662f\u610f\u5473\u7740\u7ebf\u7a0b\u8fdb\u5165\u4f11\u7720\uff0c\u53cd\u5012CPU\u4f1a\u98d9\u5347\uff0c\u8fd9\u79cd\u66b4\u529b\u5b9e\u73b0\u8fd8\u662f\u4e0d\u8981\u8f7b\u6613\u5c1d\u8bd5\uff0c\u5f53\u7136\u66f4\u4e0d\u80fd\u653e\u5230\u4e1a\u52a1\u4e2d\u53bb\u4f7f\u7528\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"function sleep(timeout) ","{"),m.a.createElement("span",null,"    let startTime = new Date().getTime()"),m.a.createElement("span",null,"    while (new Date().getTime() - startTime <= timeout) ","{"),m.a.createElement("span",null,"        // \u8fd9\u91cc\u8fdb\u5165\u6b7b\u5faa\u73af\uff0c\u963b\u585e\u7ebf\u7a0b"),m.a.createElement("span",null,"        // \u5f53 timeout \u4ee5\u540e \u91ca\u653e\u7ebf\u7a0b\uff0c\u6267\u884c\u540e\u7eed\u4ee3\u7801"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u65b9\u6cd5\u4e8c\uff1aAsync/Await"},"\u65b9\u6cd5\u4e8c\uff1aAsync/Await"),m.a.createElement("p",null,"\u5b9e\u73b0\u8fd9\u4e2asleep\u51fd\u6570\u5176\u5b9e\u5c31\u53ef\u4ee5\u53d8\u76f8\u7684\u7406\u89e3\u4e3a\u5982\u4f55\u628a\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1\u53d8\u6210\u540c\u6b65\u4efb\u52a1\u6267\u884c\u3002\u90a3\u663e\u7136\u5c31\u53ef\u4ee5\u7528 ES6 \u7684 Async/Await\uff0c\u5b9e\u73b0\u8d77\u6765\u4e5f\u5f88\u7b80\u5355\uff0csleep\u51fd\u6570\u5185\u8fd4\u56de\u4e00\u4e2apromise\u5bf9\u8c61\uff0c\u5f53timeout\u65f6\u95f4\u540e\u53d8\u6210fulfilled\u72b6\u6001\uff0csleep\u51fd\u6570\u6267\u884c\u7ed3\u675f\uff0c\u7ee7\u7eed\u6267\u884c\u540e\u7eed\u4ee3\u7801\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"function sleep(timeout) ","{"),m.a.createElement("span",null,"    return new Promise(resolve => ","{"),m.a.createElement("span",null,"        setTimeout(resolve, timeout)"),m.a.createElement("span",null,"    })"),m.a.createElement("span",null,"}"),m.a.createElement("span",null),m.a.createElement("span",null,"(async function () ","{"),m.a.createElement("span",null,"    await sleep(1000)   "),m.a.createElement("span",null,"    // 'run after 1000ms'"),m.a.createElement("span",null,"})()"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u65b9\u6cd5\u4e09\uff1aGenerator"},"\u65b9\u6cd5\u4e09\uff1aGenerator"),m.a.createElement("h3",{id:"\u6700\u540e"},"\u6700\u540e"),m.a.createElement("p",null,"\u7ed9 JavaScript \u786c\u5b89\u4e00\u4e2a sleep() \u51fd\u6570\u7740\u5b9e\u6709\u4e9b\u201c\u6b7b\u9a6c\u5f53\u6d3b\u9a6c\u533b\u201d\u7684\u610f\u601d\uff0cJavaScript\u662f\u5355\u7ebf\u7a0b\u6267\u884c\u7684\u811a\u672c\u8bed\u8a00\uff0c\u6211\u4eec\u5728\u4ee3\u7801\u91cc\u9762\u76f4\u63a5 sleep \u8ba9\u7ebf\u7a0b\u4f11\u7720\u662f\u4e0d\u662f\u592a\u81ea\u79c1\u4e86\u70b9\uff1f\u6bd5\u7adf\u4eba\u5bb6\u5c31\u8fd9\u4e48\u4e00\u6761\u9053\u597d\u591a\u201c\u4eba\u201d\u90fd\u7b49\u7740\u8d70\u5462\uff01\u6240\u4ee5js\u7684\u5f02\u6b65\u673a\u5236\u5c31\u5f88\u68d2\u4e86\uff0c\u6211\u4eec\u8981\u7b49\u5f85\u7684\u4ee3\u7801\u5148\u653e\u5230\u961f\u5217\u91cc\u7b49\u7740\uff0c\u522b\u7684\u4e0d\u9700\u8981\u7b49\u5f85\u7684\u64cd\u4f5c\u5462\u5c31\u7ee7\u7eed\u6267\u884c\uff0c\u591a\u597d\uff0c\u4e00\u6d3e\u548c\u8c10\uff01"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"function sleep (timeout) ","{"),m.a.createElement("span",null,"  return new Promise(resolve => ","{"),m.a.createElement("span",null,"      setTimeout(resolve, timeout)"),m.a.createElement("span",null,"  });"),m.a.createElement("span",null,"}"),m.a.createElement("span",null),m.a.createElement("span",null,"sleep(5000).then(() => ","{"),m.a.createElement("span",null,"    // run after 5000ms"),m.a.createElement("span",null,"})"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u6240\u4ee5\u4e0d\u7528\u7ea0\u7ed3\u5982\u4f55\u5b9e\u73b0 sleep() \u51fd\u6570\uff0c\u9009\u62e9\u5408\u9002\u7684\u7f16\u7801\u65b9\u5f0f\u6700\u91cd\u8981\u4e86 \uff1a\uff09"),m.a.createElement("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),m.a.createElement("p",null,m.a.createElement("a",{target:"_blank",href:"https://www.cnblogs.com/mfryf/p/3142681.html"},"js\u4e2d\u5b9e\u73b0sleep\u51fd\u6570"),m.a.createElement("br",null),m.a.createElement("a",{target:"_blank",href:"https://juejin.im/post/5cc7ddaf6fb9a032106bda07"},"\u7b80\u77ed\u4f18\u96c5\u5730\u5229\u7528js\u5b9e\u73b0 sleep \u51fd\u6570"))))}}]),t}(m.a.Component)}}]);
//# sourceMappingURL=30.869e1194.chunk.js.map