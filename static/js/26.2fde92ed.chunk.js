(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{124:function(e,a,t){},126:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var l=t(4),n=t(5),r=t(7),c=t(6),u=t(8),s=t(0),m=t.n(s),o=(t(127),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,u=new Array(n),s=0;s<n;s++)u[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(u)))).clickPosBtn=function(e){var a=document.getElementById(e);window.scrollTo({top:a.offsetTop-10,left:0,behavior:"smooth"})},t}return Object(u.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(a,t){return m.a.createElement("span",{className:"a"+a.level,key:t,onClick:function(){return e.clickPosBtn(a.title)}},a.title)}))))}}]),a}(m.a.Component))},127:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return p});var l=t(4),n=t(5),r=t(7),c=t(6),u=t(8),s=t(0),m=t.n(s),o=(t(124),t(126)),p=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).state={headerLink:[{level:"h3",title:"\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a"},{level:"h3",title:"\u5982\u4f55\u5bf9\u6570\u7ec4\u548c\u5bf9\u8c61\u8fdb\u884c\u6570\u636e\u52ab\u6301"},{level:"h3",title:"Vue.set \u539f\u7406"},{level:"h3",title:"Proxy"},{level:"h3",title:"\u53c2\u8003"}]},e}return Object(u.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(o.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"\u5256\u6790Vue\u54cd\u5e94\u5f0f\u7ed1\u5b9a")),m.a.createElement("p",null,"Vue\u7684\u4e00\u5927\u7279\u8272\u5c31\u662f\u53cc\u5411\u7ed1\u5b9a\uff0c\u5173\u4e8e\u5176\u539f\u7406\u6211\u60f3\u5927\u591a\u6570\u4eba\u90fd\u80fd\u76f4\u63a5\u8bf4\u51fa\u6765\uff0c\u4f7f\u7528",m.a.createElement("code",null,"Object.defineProperty"),"\u5bf9\u8c61\u62e6\u622a\u901a\u8fc7",m.a.createElement("code",null,"setter"),"\u3001",m.a.createElement("code",null,"getter"),"\u76d1\u542c\u6570\u636e\u53d8\u5316\u4f5c\u51fa\u76f8\u5e94\u64cd\u4f5c\u3002\u867d\u7136\u539f\u7406\u5927\u6982\u5982\u6b64\uff0c\u4f46\u662f\u8fd8\u9700\u8981\u518d\u6df1\u5165\u7684\u8fdb\u884c\u4e00\u4e9b\u4e86\u89e3\u3002"),m.a.createElement("h3",{id:"\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a"},"\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a"),m.a.createElement("p",null,"Vue \u7684\u6570\u636e\u53cc\u5411\u7ed1\u5b9a\u4e3b\u8981\u662f\u6307\uff1a\u6570\u636e\u53d8\u5316\u66f4\u65b0\u89c6\u56fe\uff0c\u89c6\u56fe\u53d8\u5316\u66f4\u65b0\u6570\u636e\u3002"),m.a.createElement("p",null,"Vue \u4e3b\u8981\u901a\u8fc74\u4e2a\u6b65\u9aa4\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a\uff1a"),m.a.createElement("ol",null,m.a.createElement("li",null,m.a.createElement("strong",null,"\u5b9e\u73b0\u4e00\u4e2a\u76d1\u542c\u5668 Observer\uff1a"),"\u5bf9\u6570\u636e\u5bf9\u8c61\u8fdb\u884c\u904d\u5386\uff0c\u5305\u62ec\u5b50\u5c5e\u6027\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u5229\u7528",m.a.createElement("code",null,"Object.defineProperty()"),"\u5bf9\u5c5e\u6027\u90fd\u52a0\u4e0a",m.a.createElement("code",null,"setter"),"\u548c",m.a.createElement("code",null,"getter"),"\u3002\u8fd9\u6837\uff0c\u7ed9\u8fd9\u4e2a\u5bf9\u8c61\u7684\u67d0\u4e2a\u503c\u8d4b\u503c\uff0c\u5c31\u4f1a\u89e6\u53d1 ",m.a.createElement("code",null,"setter"),",\u5c31\u80fd\u542c\u5230\u4e86\u6570\u636e\u53d8\u5316\u3002"),m.a.createElement("li",null,m.a.createElement("strong",null,"\u5b9e\u73b0\u4e00\u4e2a\u89e3\u6790\u5668 Compile\uff1a"),"\u89e3\u6790 Vue \u6a21\u677f\u6307\u4ee4\uff0c\u5c06\u6a21\u677f\u4e2d\u7684\u53d8\u91cf\u90fd\u66ff\u6362\u6210\u6570\u636e\uff0c\u7136\u540e\u521d\u59cb\u5316\u6e32\u67d3\u9875\u9762\u89c6\u56fe\uff0c\u5e76\u5c06\u6bcf\u4e2a\u6307\u4ee4\u5bf9\u5e94\u7684\u8282\u70b9\u7ed1\u5b9a\u66f4\u65b0\u51fd\u6570\uff0c\u6dfb\u52a0\u76d1\u542c\u6570\u636e\u7684\u8ba2\u9605\u8005\uff0c\u4e00\u65e6\u6570\u636e\u6709\u53d8\u52a8\uff0c\u6536\u5230\u901a\u77e5\uff0c\u8c03\u7528\u66f4\u65b0\u51fd\u6570\u8fdb\u884c\u6570\u636e\u66f4\u65b0\u3002"),m.a.createElement("li",null,m.a.createElement("strong",null,"\u5b9e\u73b0\u4e00\u4e2a\u8ba2\u9605\u8005 Watcher\uff1a"),"Watcher \u8ba2\u9605\u8005\u662f",m.a.createElement("code",null,"Observer"),"\u548c",m.a.createElement("code",null,"Compile"),"\u4e4b\u95f4\u901a\u4fe1\u7684\u6865\u6881 \uff0c\u4e3b\u8981\u7684\u4efb\u52a1\u662f\u8ba2\u9605",m.a.createElement("code",null,"Observer"),"\u4e2d\u7684\u5c5e\u6027\u503c\u53d8\u5316\u7684\u6d88\u606f\uff0c\u5f53\u6536\u5230\u5c5e\u6027\u503c\u53d8\u5316\u7684\u6d88\u606f\u65f6\uff0c\u89e6\u53d1\u89e3\u6790\u5668 ",m.a.createElement("code",null,"Compile"),"\u4e2d\u5bf9\u5e94\u7684\u66f4\u65b0\u51fd\u6570\u3002"),m.a.createElement("li",null,m.a.createElement("strong",null,"\u5b9e\u73b0\u4e00\u4e2a\u8ba2\u9605\u5668 Dep\uff1a"),"\u8ba2\u9605\u5668\u91c7\u7528 \u53d1\u5e03-\u8ba2\u9605 \u8bbe\u8ba1\u6a21\u5f0f\uff0c\u7528\u6765\u6536\u96c6\u8ba2\u9605\u8005",m.a.createElement("code",null,"Watcher"),"\uff0c\u5bf9\u76d1\u542c\u5668",m.a.createElement("code",null,"Observer"),"\u548c",m.a.createElement("code",null,"\u8ba2\u9605\u8005 Watcher"),"\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u3002")),m.a.createElement("p",null,"\u5177\u4f53\u7684\u5b9e\u73b0\u6d41\u7a0b\u53ef\u4ee5\u56f4\u89c2",m.a.createElement("a",{target:"_blank",href:"https://juejin.im/post/5d421bcf6fb9a06af23853f1"},"\u300a0 \u5230 1 \u638c\u63e1\uff1aVue \u6838\u5fc3\u4e4b\u6570\u636e\u53cc\u5411\u7ed1\u5b9a\u300b"),"\u8fd9\u7bc7\u535a\u5ba2\u3002"),m.a.createElement("h3",{id:"\u5982\u4f55\u5bf9\u6570\u7ec4\u548c\u5bf9\u8c61\u8fdb\u884c\u6570\u636e\u52ab\u6301"},"\u5982\u4f55\u5bf9\u6570\u7ec4\u548c\u5bf9\u8c61\u8fdb\u884c\u6570\u636e\u52ab\u6301"),m.a.createElement("p",null,"\u4e0a\u9762\u5df2\u7ecf\u63d0\u5230\u4e86 Vue \u901a\u8fc7",m.a.createElement("code",null,"Object.defineProperty()"),"\u8fdb\u884c\u6570\u636e\u52ab\u6301\uff0c\u4f46\u662f",m.a.createElement("code",null,"Object.defineProperty()"),"\u6709\u4e2a\u7f3a\u9677\uff0c",m.a.createElement("strong",null,"\u53ea\u80fd\u5bf9\u5c5e\u6027\u8fdb\u884c\u6570\u636e\u52ab\u6301"),"\uff0c\u6240\u4ee5\u4e0d\u80fd\u5bf9\u6574\u4e2a\u5bf9\u8c61\u6216\u662f\u6570\u7ec4\u8fdb\u884c\u52ab\u6301\u3002\u5bf9\u6b64\uff0cVue \u4e5f\u5bf9\u6570\u7ec4\u548c\u5bf9\u8c61\u7c7b\u578b\u8fdb\u884c\u4e86\u4e00\u4e9b\u589e\u5f3a\u5904\u7406\uff0c\u5373\u901a\u8fc7\u9012\u5f52\u904d\u5386\u6765\u5b9e\u73b0\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"/**"),m.a.createElement("span",null," * \u5bf9\u6570\u7ec4\u8fdb\u884c\u904d\u5386"),m.a.createElement("span",null," */"),m.a.createElement("span",null,"observeArray (items: Array<any>) ","{"),m.a.createElement("span",null,"    for (let i = 0, l = items.length; i < l; i++) ","{"),m.a.createElement("span",null,"        observe(items[i])  // observe \u529f\u80fd\u4e3a\u76d1\u6d4b\u6570\u636e\u7684\u53d8\u5316"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"}"),m.a.createElement("span",null),m.a.createElement("span",null,"/**"),m.a.createElement("span",null," * \u5bf9\u5c5e\u6027\u8fdb\u884c\u9012\u5f52\u904d\u5386"),m.a.createElement("span",null," */"),m.a.createElement("span",null,"let childOb = !shallow && observe(val) // observe \u529f\u80fd\u4e3a\u76d1\u6d4b\u6570\u636e\u7684\u53d8\u5316"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u867d\u7136 Vue \u5c3d\u81ea\u5df1\u6700\u5927\u9650\u5ea6\u7684\u89e3\u51b3\u4e86\u5bf9\u8c61\u548c\u6570\u7ec4\u7684\u53cc\u5411\u7ed1\u5b9a\u95ee\u9898\uff0c\u4f46\u662f\u5b83\u8fd8\u662f",m.a.createElement("strong",null,"\u65e0\u6cd5\u76d1\u6d4b\u5230\u5bf9\u8c61\u5c5e\u6027\u7684\u589e\u52a0\u6216\u8005\u662f\u5220\u9664"),"\uff0c\u56e0\u4e3a Vue \u4f1a\u5728\u521d\u59cb\u5316\u5b9e\u4f8b\u7684\u65f6\u5019\u5bf9\u5c5e\u6027\u6267\u884c",m.a.createElement("code",null,"getter"),"/",m.a.createElement("code",null,"setter"),"\u8f6c\u5316\uff0c\u6240\u4ee5\u5c5e\u6027\u5fc5\u987b\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u5b58\u5728\u624d\u4f1a\u5b9e\u73b0\u54cd\u5e94\u5f0f\u3002"),m.a.createElement("p",null,"\u5bf9\u4e8e\u6570\u7ec4\uff0cVue\u5bf9 Array \u7684\u4e00\u4e9b\u539f\u751f\u65b9\u6cd5\u8fdb\u884c\u4e86\u5305\u88f9\uff0c\u5305\u62ec\uff1a",m.a.createElement("code",null,"push()"),"/",m.a.createElement("code",null,"pop()"),"/",m.a.createElement("code",null,"shift()"),"/",m.a.createElement("code",null,"unshift()"),"/",m.a.createElement("code",null,"splice()"),"/",m.a.createElement("code",null,"sort()"),"/",m.a.createElement("code",null,"reverse()"),"\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u4f1a\u89e6\u53d1\u89c6\u56fe\u54cd\u5e94\u5f0f\u66f4\u65b0\u3002\u5177\u4f53\u6211\u4eec\u53ef\u4ee5\u6765\u53c2\u8003Vue\u6e90\u7801\u4e2d",m.a.createElement("a",{target:"_blank",href:"https://github.com/vuejs/vue/blob/dev/src/core/observer/array.js"},"array.js"),"\u6587\u4ef6\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"/*"),m.a.createElement("span",null," * not type checking this file because flow doesn't play well with"),m.a.createElement("span",null," * dynamically accessing methods on Array prototype"),m.a.createElement("span",null," */"),m.a.createElement("span",null,"import ","{"," def } from '../util/index'"),m.a.createElement("span",null,"// "),m.a.createElement("span",null,"const arrayProto = Array.prototype"),m.a.createElement("span",null,"export const arrayMethods = Object.create(arrayProto)"),m.a.createElement("span",null),m.a.createElement("span",null,"const methodsToPatch = ["),m.a.createElement("span",null,"  'push',"),m.a.createElement("span",null,"  'pop',"),m.a.createElement("span",null,"  'shift',"),m.a.createElement("span",null,"  'unshift',"),m.a.createElement("span",null,"  'splice',"),m.a.createElement("span",null,"  'sort',"),m.a.createElement("span",null,"  'reverse'"),m.a.createElement("span",null,"]"),m.a.createElement("span",null),m.a.createElement("span",null,"/**"),m.a.createElement("span",null," * Intercept mutating methods and emit events"),m.a.createElement("span",null," */"),m.a.createElement("span",null,"methodsToPatch.forEach(function (method) ","{"),m.a.createElement("span",null,"  // cache original method"),m.a.createElement("span",null,"  const original = arrayProto[method]"),m.a.createElement("span",null,"  // def \u7684\u4f5c\u7528\u662f\u91cd\u65b0\u5b9a\u4e49\u5bf9\u8c61\u5c5e\u6027\u7684value\u503c"),m.a.createElement("span",null,"  def(arrayMethods, method, function mutator (...args) ","{"),m.a.createElement("span",null,"    const result = original.apply(this, args)"),m.a.createElement("span",null,"    const ob = this.__ob__"),m.a.createElement("span",null,"    let inserted"),m.a.createElement("span",null,"    switch (method) ","{"),m.a.createElement("span",null,"      case 'push':"),m.a.createElement("span",null,"      case 'unshift':"),m.a.createElement("span",null,"        inserted = args"),m.a.createElement("span",null,"        break"),m.a.createElement("span",null,"      case 'splice':"),m.a.createElement("span",null,"        inserted = args.slice(2)"),m.a.createElement("span",null,"        break"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"    if (inserted) ob.observeArray(inserted)"),m.a.createElement("span",null,"    // notify change"),m.a.createElement("span",null,"    ob.dep.notify()"),m.a.createElement("span",null,"    return result"),m.a.createElement("span",null,"  })"),m.a.createElement("span",null,"})"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4ece\u4e0a\u9762\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\uff0cVue \u5bf9 Array \u51e0\u4e2a\u65b9\u6cd5\u8fdb\u884c\u91cd\u5199\uff0c\u9664\u4e86\u6267\u884c\u6570\u7ec4\u539f\u59cb\u65b9\u6cd5\u4ee5\u5916\uff0c\u8fd8\u4f1a\u989d\u5916\u6267\u884c",m.a.createElement("code",null,"ob.dep.notify()"),"\uff0c\u5728\u8fd9\u91cc\u901a\u77e5\u53d8\u66f4\u5c31\u662f\u5f88\u5173\u952e\u7684\u5b9e\u73b0\u54cd\u5e94\u5f0f\u4e86\u3002\u4f46\u662f\u5230\u8fd9\u4e00\u6b65\u6211\u4eec",m.a.createElement("strong",null,"\u901a\u8fc7\u7d22\u5f15\u8bbe\u7f6e\u4e00\u4e2a\u6570\u7ec4\u9879\u6216\u8005\u6539\u53d8\u6570\u7ec4\u7684\u957f\u5ea6\u4ecd\u7136\u65e0\u6cd5\u5b9e\u73b0\u54cd\u5e94\u5f0f"),"\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"var vm = new Vue(","{"),m.a.createElement("span",null,"  data: ","{"),m.a.createElement("span",null,"    items: ['a', 'b', 'c']"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"})"),m.a.createElement("span",null,"vm.items[1] = 'x' // \u4e0d\u662f\u54cd\u5e94\u6027\u7684"),m.a.createElement("span",null,"vm.items.length = 2 // \u4e0d\u662f\u54cd\u5e94\u6027\u7684"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u65e2\u7136 Vue \u90fd\u5bf9\u6570\u7ec4\u4e0b\u624b\u5f00\u5200\u652f\u6301\u54cd\u5e94\u5f0f\u4e86\uff0c\u4e3a\u4ec0\u4e48\u5bf9\u6570\u7ec4\u4e0b\u6807\u5f62\u5f0f\u4e5f\u5904\u7406\u4e0b\u5462\uff1f\u5bf9\u6b64\u95ee\u9898\u5c24\u5927\u7ed9\u51fa\u7684\u89e3\u91ca\u662f\u51fa\u4e8e\u6027\u80fd\u7684\u8003\u8651\u3002\u6240\u4ee5\u9488\u5bf9\u4e0a\u8ff0\u4e0d\u652f\u6301\u54cd\u5e94\u5f0f\u7684\u60c5\u51b5\uff0cVue \u4e5f\u7ed9\u51fa\u4e86\u89e3\u51b3\u529e\u6cd5,\u5c31\u662f\u4f7f\u7528 ",m.a.createElement("code",null,"Vue.set"),"\u5411\u54cd\u5e94\u5f0f\u5bf9\u8c61\u4e2d\u65b0\u589e\u5c5e\u6027\u3002"),m.a.createElement("h3",{id:"Vue.set \u539f\u7406"},"Vue.set \u539f\u7406"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"Vue.set( target, propertyName/index, value )")),m.a.createElement("p",null,"\u4f5c\u7528\uff1a\u5411\u54cd\u5e94\u5f0f\u5bf9\u8c61\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u5c5e\u6027\uff0c\u5e76\u786e\u4fdd\u8fd9\u4e2a\u65b0\u5c5e\u6027\u540c\u6837\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u4e14\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0\u3002\u5b83\u5fc5\u987b\u7528\u4e8e\u5411\u54cd\u5e94\u5f0f\u5bf9\u8c61\u4e0a\u6dfb\u52a0\u65b0\u5c5e\u6027\u3002"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"var vm = new Vue(","{"),m.a.createElement("span",null,"  data: ","{"),m.a.createElement("span",null,"    userProfile: ","{"),m.a.createElement("span",null,"      name: 'Anika'"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"})"),m.a.createElement("span",null,"Vue.set(vm.userProfile, 'age', 27); // age \u662f\u54cd\u5e94\u5f0f\u5c5e\u6027"),m.a.createElement("span",null,"vm.userProfile.height = 20; // height \u4e0d\u662f\u54cd\u5e94\u5f0f\u5c5e\u6027"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u8fd9\u795e\u5947\u7684",m.a.createElement("code",null,"Vue.set"),"\u7a76\u7adf\u662f\u600e\u4e48\u5b9e\u73b0\u7684\u5462\uff1f\u5728\u6e90\u7801",m.a.createElement("a",{target:"_blank",href:"https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js"},"core/observer/index.js"),"\u6587\u4ef6\u4e2d\u53ef\u4ee5\u627e\u5230",m.a.createElement("code",null,"set"),"\u65b9\u6cd5\u7684\u5b9a\u4e49\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"/**"),m.a.createElement("span",null," * Set a property on an object. Adds the new property and"),m.a.createElement("span",null," * triggers change notification if the property doesn't"),m.a.createElement("span",null," * already exist."),m.a.createElement("span",null," */"),m.a.createElement("span",null,"export function set (target: Array<any> | Object, key: any, val: any): any ","{"),m.a.createElement("span",null,"  if (process.env.NODE_ENV !== 'production' &&"),m.a.createElement("span",null,"    (isUndef(target) || isPrimitive(target))"),m.a.createElement("span",null,"  ) ","{"),m.a.createElement("span",null,"    warn(`Cannot set reactive property on undefined, null, or primitive value: $","{","(target: any)}`)"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"  // \u5982\u679c\u662f\u6570\u7ec4 \u6267\u884c splice\u65b9\u6cd5\u89e6\u53d1\u54cd\u5e94\u5f0f"),m.a.createElement("span",null,"  if (Array.isArray(target) && isValidArrayIndex(key)) ","{"),m.a.createElement("span",null,"    target.length = Math.max(target.length, key)"),m.a.createElement("span",null,"    target.splice(key, 1, val)"),m.a.createElement("span",null,"    return val"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"  // \u5982\u679c\u5c5e\u6027\u5df2\u7ecf\u5b58\u5728\u5219\u76f4\u63a5\u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c"),m.a.createElement("span",null,"  if (key in target && !(key in Object.prototype)) ","{"),m.a.createElement("span",null,"    target[key] = val"),m.a.createElement("span",null,"    return val"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"  const ob = (target: any).__ob__"),m.a.createElement("span",null,"  if (target._isVue || (ob && ob.vmCount)) ","{"),m.a.createElement("span",null,"    process.env.NODE_ENV !== 'production' && warn("),m.a.createElement("span",null,"      'Avoid adding reactive properties to a Vue instance or its root $data ' +"),m.a.createElement("span",null,"      'at runtime - declare it upfront in the data option.'"),m.a.createElement("span",null,"    )"),m.a.createElement("span",null,"    return val"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"  if (!ob) ","{"),m.a.createElement("span",null,"    target[key] = val"),m.a.createElement("span",null,"    return val"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"  defineReactive(ob.value, key, val)"),m.a.createElement("span",null,"  ob.dep.notify()"),m.a.createElement("span",null,"  return val"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5982\u679c\u5bf9\u8c61\u662f\u6570\u7ec4\u7684\u8bdd\u76f4\u63a5\u4f7f\u7528",m.a.createElement("code",null,"target.splice(key, 1, val)"),"\u6765\u89e6\u53d1\u54cd\u5e94\u5f0f\uff0c\u5982\u679c\u7ed9\u5bf9\u8c61\u589e\u52a0\u65b0\u5c5e\u6027\uff0c\u4f1a\u8c03\u7528",m.a.createElement("code",null,"defineReactive()"),"\u65b9\u6cd5,\u8fd9\u4e2a\u65b9\u6cd5\u5176\u5b9e\u5c31\u662f\u5728Vue\u5728\u521d\u59cb\u5316\u5bf9\u8c61\u65f6\u7ed9\u5bf9\u8c61\u5c5e\u6027\u91c7\u7528",m.a.createElement("code",null,"Object.defineProperty"),"\u52a8\u6001\u6dfb\u52a0",m.a.createElement("code",null,"getter"),"\u548c",m.a.createElement("code",null,"setter"),"\u7684\u529f\u80fd\uff0c\u8bf4\u767d\u4e86\u53ef\u4ee5\u7406\u89e3\u4e3a\u5c31\u7ed9\u65b0\u589e\u5bf9\u8c61\u5c31\u50cf\u521d\u59cb\u5316\u90a3\u6837\u505a\u4e00\u5957\u54cd\u5e94\u5f0f\u903b\u8f91\u3002"),m.a.createElement("h3",{id:"Proxy"},"Proxy"),m.a.createElement("p",null,"\u5c24\u5927\u4e4b\u524d\u5c31\u8bf4\u8fc7\u4e86 Vue3.0 \u8981\u628a ",m.a.createElement("code",null,"Object.defineProperty")," \u7528 ",m.a.createElement("code",null,"Proxy")," \u6765\u8fdb\u884c\u91cd\u6784\u4e86\u3002\u8fd9\u4e2a",m.a.createElement("code",null,"Proxy"),"\u53ef\u771f\u662f\u4e2a\u597d\u4e1c\u897f\uff0c\u548c",m.a.createElement("code",null,"Object.defineProperty"),"\u6bd4\u8d77\u6765\u6709\u8bf8\u591a\u4f18\u70b9\uff1a"),m.a.createElement("ol",null,m.a.createElement("li",null,"Proxy \u53ef\u4ee5\u76f4\u63a5\u76d1\u542c\u5bf9\u8c61\u800c\u975e\u5c5e\u6027\uff1b"),m.a.createElement("li",null,"Proxy \u53ef\u4ee5\u76f4\u63a5\u76d1\u542c\u6570\u7ec4\u7684\u53d8\u5316\uff1b"),m.a.createElement("li",null,"Proxy \u6709\u591a\u8fbe 13 \u79cd\u62e6\u622a\u65b9\u6cd5,\u4e0d\u9650\u4e8e",m.a.createElement("code",null,"apply"),"\u3001",m.a.createElement("code",null,"ownKeys"),"\u3001",m.a.createElement("code",null,"deleteProperty"),"\u3001",m.a.createElement("code",null,"has"),"\u7b49\u7b49,\u662f",m.a.createElement("code",null,"Object.defineProperty"),"\u4e0d\u5177\u5907\u7684\uff1b"),m.a.createElement("li",null,"Proxy \u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u65b0\u5bf9\u8c61,\u6211\u4eec\u53ef\u4ee5\u53ea\u64cd\u4f5c\u65b0\u7684\u5bf9\u8c61\u8fbe\u5230\u76ee\u7684,\u800c",m.a.createElement("code",null,"Object.defineProperty"),"\u53ea\u80fd\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u76f4\u63a5\u4fee\u6539\uff1b"),m.a.createElement("li",null,"Proxy \u4f5c\u4e3a\u65b0\u6807\u51c6\u5c06\u53d7\u5230\u6d4f\u89c8\u5668\u5382\u5546\u91cd\u70b9\u6301\u7eed\u7684\u6027\u80fd\u4f18\u5316\uff0c\u4e5f\u5c31\u662f\u4f20\u8bf4\u4e2d\u7684\u65b0\u6807\u51c6\u7684\u6027\u80fd\u7ea2\u5229\uff1b")),m.a.createElement("p",null,"\u6700\u540e\u518d\u6765\u56de\u987e\u4e00\u4e0b ",m.a.createElement("code",null,"Proxy"),"\u5982\u4f55\u4f7f\u7528\u5427\uff0cProxy\u5bf9\u8c61\u7528\u4e8e\u5b9a\u4e49\u57fa\u672c\u64cd\u4f5c\u7684\u81ea\u5b9a\u4e49\u884c\u4e3a\uff08\u5982\u5c5e\u6027\u67e5\u627e\uff0c\u8d4b\u503c\uff0c\u679a\u4e3e\uff0c\u51fd\u6570\u8c03\u7528\u7b49\uff09\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"let handler = ","{"),m.a.createElement("span",null,"    // \u83b7\u53d6\u5c5e\u6027\u65f6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570"),m.a.createElement("span",null,"    get: function(target, name)","{"),m.a.createElement("span",null,"        return name in target ? target[name] : 37;"),m.a.createElement("span",null,"    },"),m.a.createElement("span",null,"    // \u8bbe\u7f6e\u5c5e\u6027\u65f6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570"),m.a.createElement("span",null,"    set: function (obj, prop, value) ","{"),m.a.createElement("span",null,"        ..."),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"};"),m.a.createElement("span",null),m.a.createElement("span",null,"let p = new Proxy(","{","}, handler); // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u88ab\u5305\u88c5\u7684\u76ee\u6807\u5bf9\u8c61\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5404\u79cd\u64cd\u4f5c\u56de\u8c03\u51fd\u6570\u7684\u96c6\u5408"),m.a.createElement("span",null),m.a.createElement("span",null,"p.a = 1; "),m.a.createElement("span",null,"p.b = undefined;"),m.a.createElement("span",null),m.a.createElement("span",null,"console.log(p.a, p.b);    // 1, undefined"),m.a.createElement("span",null,"console.log('c' in p, p.c);    // false, 37"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),m.a.createElement("blockquote",null,m.a.createElement("p",null,m.a.createElement("a",{target:"_blank",href:"https://juejin.im/post/5d421bcf6fb9a06af23853f1"},"0 \u5230 1 \u638c\u63e1\uff1aVue \u6838\u5fc3\u4e4b\u6570\u636e\u53cc\u5411\u7ed1\u5b9a"),m.a.createElement("br",null),m.a.createElement("a",{target:"_blank",href:"https://juejin.im/post/5a04231af265da431f4a84be"},"Vue\u54cd\u5e94\u5f0f----\u6570\u7ec4\u53d8\u5f02\u65b9\u6cd5")))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=26.2fde92ed.chunk.js.map