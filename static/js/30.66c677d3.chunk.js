(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{124:function(e,a,t){},126:function(e,a,t){"use strict";t.d(a,"a",function(){return p});var l=t(4),n=t(5),r=t(7),c=t(6),u=t(8),s=t(0),m=t.n(s),p=(t(127),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,u=new Array(n),s=0;s<n;s++)u[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(u)))).clickPosBtn=function(e){var a=document.getElementById(e);window.scrollTo({top:a.offsetTop-10,left:0,behavior:"smooth"})},t}return Object(u.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(a,t){return m.a.createElement("span",{className:"a"+a.level,key:t,onClick:function(){return e.clickPosBtn(a.title)}},a.title)}))))}}]),a}(m.a.Component))},127:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i});var l=t(4),n=t(5),r=t(7),c=t(6),u=t(8),s=t(0),m=t.n(s),p=(t(124),t(126)),i=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).state={headerLink:[{level:"h2",title:"v1.0\u4e0a\u7ebf\u7248 2017/10/13-2017/11/2"},{level:"h2",title:"1.\u9ed8\u8ba4\u7535\u8bdd\u53f7\u7801\u5b57\u6bb5\u70b9\u51fb\u4f1a\u89e6\u53d1\u7cfb\u7edf\u62e8\u53f7"},{level:"h2",title:"2.safari\u6d4f\u89c8\u5668\u79fb\u52a8\u7aef\u517c\u5bb9\u95ee\u9898"},{level:"h4",title:"safari\u6d4f\u89c8\u5668\u5bf9\u4e8einput\u6807\u7b7e\u8bbe\u5b9a\u6709\u9ed8\u8ba4\u7684\u4e8b\u4ef6"},{level:"h4",title:"safari \u9ed8\u8ba4\u70b9\u51fb a\uff0cbutton\uff0cinput\u65f6\u4f1a\u6709\u4e00\u5c42\u7070\u8272\u7684\u906e\u7f69"},{level:"h2",title:"3.\u79fb\u52a8\u7aefclick\u70b9\u51fb\u4e8b\u4ef6\u4f1a\u6709\u5ef6\u8fdf"},{level:"h2",title:"4. vue \u5f02\u6b65\u8bf7\u6c42\u4e4b axios"},{level:"h4",title:"axios \u662f\u4e00\u4e2a\u57fa\u4e8ePromise \u7528\u4e8e\u6d4f\u89c8\u5668\u548c nodejs \u7684 HTTP \u5ba2\u6237\u7aef\uff0c\u5b83\u672c\u8eab\u5177\u6709\u4ee5\u4e0b\u7279\u5f81:"},{level:"h4",title:"axios\u7684\u914d\u7f6e"},{level:"h2",title:"5.\u79fb\u52a8\u7aefios\u4e0b\u89e6\u53d1input\u518d\u70b9\u51fb\u5176\u4ed6\u533a\u57df\u65e0\u6cd5\u5931\u53bb\u7126\u70b9"},{level:"h2",title:"6.\u79fb\u52a8\u7aef ios\u4e0b\u7ed1\u5b9a\u4f01\u4e1a\u5fae\u4fe1\u5f00\u53d1\u63a5\u53e3\u65e0\u6548"},{level:"h2",title:"7.\u5b50\u7ec4\u4ef6\u548c\u7236\u7ec4\u4ef6"},{level:"h2",title:"8.\u5f39\u6846\u6a21\u7cca\u4ee5\u53ca\u51fa\u73b0\u83ab\u540d\u5176\u5999\u7684\u9ed1\u7ebf"},{level:"h2",title:"9.\u5b9e\u73b0\u6587\u672c\u53cc\u884c\u8d85\u51fa\u663e\u793a\u7701\u7565\u53f7"},{level:"h2",title:"10.\u5de5\u8d44\u8868\u8be6\u60c5\u9875\u9762\u53cc\u51fb\u8df3\u5230\u653e\u5927\u9875\u9762\u518d\u8fd4\u56de\u4e0d\u5f3a\u5236\u5237\u65b0"},{level:"h2",title:"11.\u8def\u7531\u8df3\u8f6c\u65f6\u8bbe\u7f6e\u8fc7\u6e21\u6548\u679c\uff0c\u4ee5\u53ca\u8fc7\u6e21\u65f6\u95f4\u7684\u8bbe\u7f6e"},{level:"h2",title:"12.\u8def\u7531\u7ed1\u5b9aquery\u7684\u503c\u65f6\u53ea\u80fd\u63a5\u53d7\u57fa\u672c\u6570\u636e\u7c7b\u578b Number\u3001String\u3001Boolean\u7b49"},{level:"h2",title:"13.input\u5728IE\u4e0b\u56de\u8f66\u4f1a\u9ed8\u8ba4\u6267\u884c\u63d0\u4ea4\u4e8b\u4ef6"}]},e}return Object(u.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(p.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"[\u9879\u76ee\u603b\u7ed3]\u5927\u725b\u5de5\u8d44\u6761")),m.a.createElement("h2",{id:"v1.0\u4e0a\u7ebf\u7248 2017/10/13-2017/11/2"},"v1.0\u4e0a\u7ebf\u7248 2017/10/13-2017/11/2"),m.a.createElement("h2",{id:"1.\u9ed8\u8ba4\u7535\u8bdd\u53f7\u7801\u5b57\u6bb5\u70b9\u51fb\u4f1a\u89e6\u53d1\u7cfb\u7edf\u62e8\u53f7"},"1.\u9ed8\u8ba4\u7535\u8bdd\u53f7\u7801\u5b57\u6bb5\u70b9\u51fb\u4f1a\u89e6\u53d1\u7cfb\u7edf\u62e8\u53f7"),m.a.createElement("p",null,"\u4ece\u7f51\u4e0a\u67e5\u5230\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0meta\u5934\u90e8\u6807\u7b7e\u6765\u53d6\u6d88\u9ed8\u8ba4\u7684\u8bc6\u522b\u7535\u8bdd\u53f7\u3001\u90ae\u7bb1\u7b49\u4e8b\u4ef6"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,'    <meta name="format-detection" content="telephone=no" />  '),m.a.createElement("span",null,'    <meta http-equiv="x-rim-auto-match" content="none">'),m.a.createElement("span",null))),m.a.createElement("h2",{id:"2.safari\u6d4f\u89c8\u5668\u79fb\u52a8\u7aef\u517c\u5bb9\u95ee\u9898"},"2.safari\u6d4f\u89c8\u5668\u79fb\u52a8\u7aef\u517c\u5bb9\u95ee\u9898"),m.a.createElement("h4",{id:"safari\u6d4f\u89c8\u5668\u5bf9\u4e8einput\u6807\u7b7e\u8bbe\u5b9a\u6709\u9ed8\u8ba4\u7684\u4e8b\u4ef6"},"safari\u6d4f\u89c8\u5668\u5bf9\u4e8einput\u6807\u7b7e\u8bbe\u5b9a\u6709\u9ed8\u8ba4\u7684\u4e8b\u4ef6"),m.a.createElement("p",null,"\u8be5\u6d4f\u89c8\u5668\u5b9e\u8d28\u4e0a\u4f7f\u7528\u7684\u662f webkit \u5185\u6838\uff0c\u6240\u4ee5\u5728 input\u6807\u7b7e\u7684css\u6837\u5f0f\u91cc\u9762\u6dfb\u52a0\u8bed\u53e5"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"  -webkit-appearance:none; "),m.a.createElement("span",null))),m.a.createElement("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u53d6\u6d88\u9ed8\u8ba4\u7684\u4e8b\u4ef6\u4e86\uff0c\u4e0d\u8fc7\u5982\u679c\u53ea\u662f\u7528\u6765 button \u4f5c\u7528\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e a \u6807\u7b7e\u6765\u5b9e\u73b0\u76f8\u540c\u6548\u679c \xa0"),m.a.createElement("h4",{id:"safari \u9ed8\u8ba4\u70b9\u51fb a\uff0cbutton\uff0cinput\u65f6\u4f1a\u6709\u4e00\u5c42\u7070\u8272\u7684\u906e\u7f69"},"safari \u9ed8\u8ba4\u70b9\u51fb a\uff0cbutton\uff0cinput\u65f6\u4f1a\u6709\u4e00\u5c42\u7070\u8272\u7684\u906e\u7f69"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"a,button,input,textarea","{","-webkit-tap-highlight-color: rgba(0,0,0,0;)}"),m.a.createElement("span",null))),m.a.createElement("h2",{id:"3.\u79fb\u52a8\u7aefclick\u70b9\u51fb\u4e8b\u4ef6\u4f1a\u6709\u5ef6\u8fdf"},"3.\u79fb\u52a8\u7aefclick\u70b9\u51fb\u4e8b\u4ef6\u4f1a\u6709\u5ef6\u8fdf"),m.a.createElement("p",null,"\u4ece\u70b9\u51fb\u5c4f\u5e55\u4e0a\u7684\u5143\u7d20\u5230\u89e6\u53d1\u5143\u7d20\u7684 click \u4e8b\u4ef6\uff0c\u79fb\u52a8\u6d4f\u89c8\u5668\u4f1a\u6709\u5927\u7ea6 300 \u6beb\u79d2\u7684\u7b49\u5f85\u65f6\u95f4\u3002\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1\u5462\uff1f \u56e0\u4e3a\u5b83\u60f3\u770b\u770b\u4f60\u662f\u4e0d\u662f\u8981\u8fdb\u884c\u53cc\u51fb\uff08double tap\uff09\u64cd\u4f5c\u3002\u6240\u4ee5\u5f15\u5165",m.a.createElement("b",null,"fastclick.js")),m.a.createElement("h2",{id:"4. vue \u5f02\u6b65\u8bf7\u6c42\u4e4b axios"},"4. vue \u5f02\u6b65\u8bf7\u6c42\u4e4b axios"),m.a.createElement("h4",{id:"axios \u662f\u4e00\u4e2a\u57fa\u4e8ePromise \u7528\u4e8e\u6d4f\u89c8\u5668\u548c nodejs \u7684 HTTP \u5ba2\u6237\u7aef\uff0c\u5b83\u672c\u8eab\u5177\u6709\u4ee5\u4e0b\u7279\u5f81:"},"axios \u662f\u4e00\u4e2a\u57fa\u4e8ePromise \u7528\u4e8e\u6d4f\u89c8\u5668\u548c nodejs \u7684 HTTP \u5ba2\u6237\u7aef\uff0c\u5b83\u672c\u8eab\u5177\u6709\u4ee5\u4e0b\u7279\u5f81:"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u4ece\u6d4f\u89c8\u5668\u4e2d\u521b\u5efa XMLHttpRequest",m.a.createElement("br",null),"\u4ece node.js \u53d1\u51fa http \u8bf7\u6c42",m.a.createElement("br",null),"\u652f\u6301 Promise API",m.a.createElement("br",null),"\u62e6\u622a\u8bf7\u6c42\u548c\u54cd\u5e94",m.a.createElement("br",null),"\u8f6c\u6362\u8bf7\u6c42\u548c\u54cd\u5e94\u6570\u636e",m.a.createElement("br",null),"\u53d6\u6d88\u8bf7\u6c42",m.a.createElement("br",null),"\u81ea\u52a8\u8f6c\u6362JSON\u6570\u636e",m.a.createElement("br",null),"\u5ba2\u6237\u7aef\u652f\u6301\u9632\u6b62 CSRF/XSRF")),m.a.createElement("h4",{id:"axios\u7684\u914d\u7f6e"},"axios\u7684\u914d\u7f6e"),m.a.createElement("p",null,m.a.createElement("a",{target:"_blank",href:"http://blog.csdn.net/sinat_17775997/article/details/69367204"},"http://blog.csdn.net/sinat_17775997/article/details/69367204")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"import axios from 'axios'"),m.a.createElement("span",null,"import qs from 'qs'"),m.a.createElement("span",null,"import * as _ from '../util/tool'"),m.a.createElement("span",null,"axios.defaults.timeout = 5000; //\u54cd\u5e94\u65f6\u95f4"),m.a.createElement("span",null,"axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //\u914d\u7f6e\u8bf7\u6c42\u5934"),m.a.createElement("span",null,"axios.defaults.baseURL = '\u4f60\u7684\u63a5\u53e3\u5730\u5740'; //\u914d\u7f6e\u63a5\u53e3\u5730\u5740"),m.a.createElement("span",null,"//POST\u4f20\u53c2\u5e8f\u5217\u5316(\u6dfb\u52a0\u8bf7\u6c42\u62e6\u622a\u5668)"),m.a.createElement("span",null,"axios.interceptors.request.use((config) => ","{"),m.a.createElement("span",null,"    //\u5728\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\u505a\u67d0\u4ef6\u4e8b"),m.a.createElement("span",null,"    if(config.method  === 'post')","{"),m.a.createElement("span",null,"        config.data = qs.stringify(config.data);"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"    return config;"),m.a.createElement("span",null,"},(error) =>","{"),m.a.createElement("span",null,"     _.toast(\"\u9519\u8bef\u7684\u4f20\u53c2\", 'fail');"),m.a.createElement("span",null,"    return Promise.reject(error);"),m.a.createElement("span",null,"});"),m.a.createElement("span",null,"//\u8fd4\u56de\u72b6\u6001\u5224\u65ad(\u6dfb\u52a0\u54cd\u5e94\u62e6\u622a\u5668)"),m.a.createElement("span",null,"axios.interceptors.response.use((res) =>","{"),m.a.createElement("span",null,"    //\u5bf9\u54cd\u5e94\u6570\u636e\u505a\u4e9b\u4e8b"),m.a.createElement("span",null,"    if(!res.data.success)","{"),m.a.createElement("span",null,"        // _.toast(res.data.msg);"),m.a.createElement("span",null,"        return Promise.reject(res);"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"    return res;"),m.a.createElement("span",null,"}, (error) => ","{"),m.a.createElement("span",null,"    _.toast(\"\u7f51\u7edc\u5f02\u5e38\", 'fail');"),m.a.createElement("span",null,"    return Promise.reject(error);"),m.a.createElement("span",null,"});"),m.a.createElement("span",null,"//\u8fd4\u56de\u4e00\u4e2aPromise(\u53d1\u9001post\u8bf7\u6c42)"),m.a.createElement("span",null,"export function fetch(url, params) ","{"),m.a.createElement("span",null,"    return new Promise((resolve, reject) => ","{"),m.a.createElement("span",null,"        axios.post(url, params)"),m.a.createElement("span",null,"            .then(response => ","{"),m.a.createElement("span",null,"                resolve(response.data);"),m.a.createElement("span",null,"            }, err => ","{"),m.a.createElement("span",null,"                reject(err);"),m.a.createElement("span",null,"            })"),m.a.createElement("span",null,"            .catch((error) => ","{"),m.a.createElement("span",null,"               reject(error)"),m.a.createElement("span",null,"            })"),m.a.createElement("span",null,"    })"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("h2",{id:"5.\u79fb\u52a8\u7aefios\u4e0b\u89e6\u53d1input\u518d\u70b9\u51fb\u5176\u4ed6\u533a\u57df\u65e0\u6cd5\u5931\u53bb\u7126\u70b9"},"5.\u79fb\u52a8\u7aefios\u4e0b\u89e6\u53d1input\u518d\u70b9\u51fb\u5176\u4ed6\u533a\u57df\u65e0\u6cd5\u5931\u53bb\u7126\u70b9"),m.a.createElement("p",null,"\u5728\u79fb\u52a8\u7aef\u7684\u60c5\u51b5\u4e0b\uff0c\u70b9\u51fbinput\u65f6\u8f93\u5165\u6587\u5b57\u518d\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u65e0\u6cd5\u5931\u53bb\u7126\u70b9\uff0c\u952e\u76d8\u4f9d\u7136\u5b58\u5728.\u89e3\u51b3\u529e\u6cd5\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"//\u4fee\u590dios\u4e0b\u70b9\u51fb\u5176\u4ed6\u533a\u57df input\u4e0d\u4f1a\u5931\u53bb\u7126\u70b9\u95ee\u9898"),m.a.createElement("span",null,"    window.onload = function() ","{","  "),m.a.createElement("span",null,"        document.querySelector('body').addEventListener('touchend', function(e) ","{","  "),m.a.createElement("span",null,"            if(e.target.tagName.toLowerCase() != 'input') ","{","  "),m.a.createElement("span",null,"              var inputLists=document.getElementsByTagName('input');"),m.a.createElement("span",null,"              for(var i=0;i&ltinputLists.length;i++)","{"),m.a.createElement("span",null,"                inputLists[i].blur();"),m.a.createElement("span",null,"              }  "),m.a.createElement("span",null,"            }  "),m.a.createElement("span",null,"        });  "),m.a.createElement("span",null,"    }"),m.a.createElement("span",null))),m.a.createElement("h2",{id:"6.\u79fb\u52a8\u7aef ios\u4e0b\u7ed1\u5b9a\u4f01\u4e1a\u5fae\u4fe1\u5f00\u53d1\u63a5\u53e3\u65e0\u6548"},"6.\u79fb\u52a8\u7aef ios\u4e0b\u7ed1\u5b9a\u4f01\u4e1a\u5fae\u4fe1\u5f00\u53d1\u63a5\u53e3\u65e0\u6548"),m.a.createElement("p",null,"\u6316\u5751\u4e86\u597d\u4e45\uff0c\u56e0\u4e3a\u4e1a\u52a1\u903b\u8f91\u91cc\u9762\u6709\u4e00\u4e2a302\u8df3\u8f6c\uff0c\u6240\u4ee5\u70b9\u51fb\u8fd4\u56de\u5c31\u4f1a\u8df3\u8f6c\u56de\u6765\uff0c\u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u8c03\u53d6\u4f01\u4e1a\u5fae\u4fe1\u7684\u63a5\u53e3\u5199\u4e8b\u4ef6\uff0c\u903b\u8f91\u5199\u901a\u4ee5\u540e\uff0c\u5b89\u5353\u7aef\u8c03\u901a\uff0cios\u65e0\u6548\u3002\u627e\u4e86\u597d\u4e45\uff0c\u517c\u5bb9\u6027\u7814\u7a76\u8bb8\u4e45\u65e0\u679c\u3002\u7ed3\u679c\u5927\u4f6c\u6765\u4e86\u4e00\u770b\u662f\u5f15\u5165\u7684\u6587\u4ef6\u9519\u4e86\u3002 \xa0",m.a.createElement("br",null),"\u539f\u5f15\u5165\u6587\u4ef6\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,'<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"><\/script>'),m.a.createElement("span",null))),m.a.createElement("p",null,"\xa0",m.a.createElement("br",null),"\u5927\u4f6c\u4e00\u8bf4\u5f15\u5165\u6587\u4ef6\u9519\u4e86\uff0c\u604d\u7136\u5927\u609f\uff0c\u9519\u5c31\u9519\u5728\u4e86\u8fd9\u4e2a http\u534f\u8bae\u554a\u3002\u56e0\u4e3aios\u7684\u5b89\u5168\u62e6\u622a\u53ea\u652f\u6301https\u7684\u5b89\u5168\u94fe\u63a5\uff0cso... ",m.a.createElement("br",null),m.a.createElement("br",null),"\u66f4\u6b63\u4ee5\u540e\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,'<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"><\/script>'),m.a.createElement("span",null))),m.a.createElement("h2",{id:"7.\u5b50\u7ec4\u4ef6\u548c\u7236\u7ec4\u4ef6"},"7.\u5b50\u7ec4\u4ef6\u548c\u7236\u7ec4\u4ef6"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"//\u5b50\u7ec4\u4ef6\u4e2d"),m.a.createElement("span",null,"//$emit\u81ea\u5b9a\u4e49input\u4e8b\u4ef6\uff0c\u4f20\u9012\u7ed9\u7236\u7ec4\u4ef6"),m.a.createElement("span",null,'this.$emit("input", this.realYear + "\u5e74" + this.realMonth + "\u6708");'),m.a.createElement("span",null),m.a.createElement("span",null,"//\u7236\u7ec4\u4ef6\u4e2d"),m.a.createElement("span",null,'<din-date v-model="date"></din-date>'),m.a.createElement("span",null))),m.a.createElement("h2",{id:"8.\u5f39\u6846\u6a21\u7cca\u4ee5\u53ca\u51fa\u73b0\u83ab\u540d\u5176\u5999\u7684\u9ed1\u7ebf"},"8.\u5f39\u6846\u6a21\u7cca\u4ee5\u53ca\u51fa\u73b0\u83ab\u540d\u5176\u5999\u7684\u9ed1\u7ebf"),m.a.createElement("p",null,"\u90e8\u5206\u5c45\u4e2d\u7684\u5f39\u7a97\u663e\u793a\u6a21\u7cca\uff0c\u5206\u6790\u539f\u56e0\u662f\u5728\u5c45\u4e2d\u5bf9\u9f50\u65f6\uff0c\u4f7f\u7528\u4e86transform:translate(-50%,-50%);\u5982\u679c\u78b0\u5230\u8ba1\u7b9750%\u7684\u7ed3\u679c\u521a\u597d\u662f.5\u50cf\u7d20\u7684\u65f6\u5019\uff08\u5373\u50cf\u7d20\u503c\u4e3a\u5355\u6570\uff09\uff0c\u4f1a\u5bfc\u81f4Dom\u5185\u7684\u5185\u5bb9\u6a21\u7cca\u3002\u7531\u4e8e\u9879\u76ee\u662f\u517c\u5bb9ie11+,\u6240\u4ee5\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528flex\u5e03\u5c40\u5b9e\u73b0\u5c45\u4e2d\u5bf9\u9f50\u3002"),m.a.createElement("h2",{id:"9.\u5b9e\u73b0\u6587\u672c\u53cc\u884c\u8d85\u51fa\u663e\u793a\u7701\u7565\u53f7"},"9.\u5b9e\u73b0\u6587\u672c\u53cc\u884c\u8d85\u51fa\u663e\u793a\u7701\u7565\u53f7"),m.a.createElement("p",null,"\u9879\u76ee\u91cc\u6709\u8fd9\u6837\u4e00\u4e2a\u9700\u6c42\uff0c\u7528\u6237\u4e0a\u4f20\u7684\u6587\u672c\u8fc7\u957f\u65f6\u8d85\u51fa\u90e8\u5206\u672a\u505a\u5224\u65ad\uff0c\u5bfc\u81f4\u663e\u793a\u9519\u4e71\u3002\u63a5\u5230\u8fd9\u6837\u7684bug\u6211\u662f\u5d29\u6e83\u7684\uff0c\u56e0\u4e3a\u524d\u671f\u5e76\u6ca1\u6709\u6d89\u53ca\u8fd9\u4e2a\u9700\u6c42\uff0c\u540e\u671f\u518d\u6539css\u65f6\u771f\u7684\u9178\u723d\u6781\u4e86\uff0c\u56e0\u4e3a\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u5b9e\u5728\u592a\u591a\u4e86\uff0c\u6240\u4ee5\u5c31\u8981\u72c2\u52a0css\u6765\u505a\u9650\u5236\u4e86...  "),m.a.createElement("p",null,"\u9996\u5148\u67e5\u8be2\u5230\uff0c\u5355\u884c\u9690\u85cf\u7684\u5b9e\u73b0\u5f88\u7b80\u5355"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,".more-text-cut ","{"),m.a.createElement("span",null,"  overflow: hidden; /*\u81ea\u52a8\u9690\u85cf\u6587\u5b57*/"),m.a.createElement("span",null,"  text-overflow: ellipsis; /*\u6587\u5b57\u9690\u85cf\u540e\u6dfb\u52a0\u7701\u7565\u53f7*/"),m.a.createElement("span",null,"  white-space: nowrap; /*\u5f3a\u5236\u4e0d\u6362\u884c*/"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f46\u662f\u53cc\u884c\u8d85\u51fa\u663e\u793a\u7701\u7565\u53f7\u771f\u7684\u662f\u5f88\u5c11\u89c1\u554a\uff0c\u4e0d\u7740\u6025\uff0c\u7f51\u4e0a\u4e00\u67e5\u89e3\u51b3\u4e86,\u56e0\u4e3a\u7528\u7684webpack\u6253\u5305\uff0c\u8fd8\u6d89\u53ca\u5230\u4e86-webkit-box-orient\u6d88\u5931\u7684\u95ee\u9898\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,".double-row ","{"),m.a.createElement("span",null,"  display: -webkit-box;"),m.a.createElement("span",null,"  /* autoprefixer: off */"),m.a.createElement("span",null,"  -webkit-box-orient: vertical; //\u5982\u679c\u76f4\u63a5\u5199\uff0cwebpack\u7f16\u8bd1\u540e\u6b64\u5c5e\u6027\u6d88\u5931\uff0c\u9700\u8981\u4e0a\u4e0b\u4e24\u4e2a\u6ce8\u91ca\u5305\u88f9"),m.a.createElement("span",null,"  /* autoprefixer: on */"),m.a.createElement("span",null,"  -webkit-line-clamp: 2; //\u663e\u793a\u4e24\u884c"),m.a.createElement("span",null,"  overflow: hidden;"),m.a.createElement("span",null,"  word-break: break-all; //\u5355\u8bcd\u6298\u65ad"),m.a.createElement("span",null,"  line-height: 50px;"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u56e0\u4e3a\u79fb\u52a8\u7aef\u662f\u5728\u4f01\u4e1a\u5fae\u4fe1\uff0c\u672c\u8eab\u662fwebkit\u5185\u6838\uff0c\u517c\u5bb9\u6027\u5b8c\u597d\uff0c\u53ef\u8fd9\u5230\u4e86PC\u7aef\u5c31\u4e0d\u884c\u4e86\u3002\u53e6\u5916\u60f3\u5230\u4e86\u53e6\u4e00\u79cd\u529e\u6cd5\uff0c\u76f4\u63a5\u901a\u8fc7after\u4f2a\u7c7b\u6765\u5b9e\u73b0"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,".double-row ","{"),m.a.createElement("span",null,"  overflow: hidden;"),m.a.createElement("span",null,"  word-break: break-all; //\u5355\u8bcd\u6298\u65ad"),m.a.createElement("span",null,"  line-height: 20px;"),m.a.createElement("span",null,"  max-height: 40px;"),m.a.createElement("span",null,"  position: relative;"),m.a.createElement("span",null,"  &::after ","{"),m.a.createElement("span",null,'    content: "...";'),m.a.createElement("span",null,"    position: absolute;"),m.a.createElement("span",null,"    z-index: 2;"),m.a.createElement("span",null,"    background: #fff;"),m.a.createElement("span",null,"    top: 0;"),m.a.createElement("span",null,"    right: 0;"),m.a.createElement("span",null,"    padding-left: 0.5em;"),m.a.createElement("span",null,"    margin-top: 20px;"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f46\u662f\u8fd9\u79cd\u60c5\u51b5\u4ec5\u9650\u4e8e\u957f\u5ea6\u5927\u4e8e\u4e09\u884c\u7684\u60c5\u51b5\uff0c\u5426\u5219\u4e24\u884c\u65f6\u90fd\u4f1a\u663e\u793a\u201c...\u201d\u3002 ",m.a.createElement("br",null),m.a.createElement("br",null),"\u540c\u65f6\u60f3\u5230\u4e86\u53e6\u4e00\u79cd\u60c5\u51b5\uff0c\u6dfb\u52a0 filter \u8fdb\u884c\u5b57\u8282\u5224\u65ad\uff0c\u5f53\u957f\u5ea6\u5927\u4e8e\u67d0\u4e2a\u503c\u65f6\uff0c\u663e\u793a...\uff0c\u4f46\u662f\u8fd9\u79cd\u60c5\u51b5\u8fd8\u9700\u8981\u5224\u65ad\u6c49\u5b57\u5b57\u6bcd\u6570\u5b57\u7684\u4e2a\u6570\uff0c\u540c\u65f6\u53ef\u80fd\u4f1a\u5bf9\u539f\u59cb\u6570\u636e\u7684\u663e\u793a\u9020\u6210\u95ee\u9898\u3002\u6700\u540e\u91cd\u65b0\u6539\u9700\u6c42\uff0c\u8fbe\u6210IE\u60c5\u51b5\u4e0b\u7edf\u4e00\u5355\u884c\u663e\u793a\u3002"),m.a.createElement("h2",{id:"10.\u5de5\u8d44\u8868\u8be6\u60c5\u9875\u9762\u53cc\u51fb\u8df3\u5230\u653e\u5927\u9875\u9762\u518d\u8fd4\u56de\u4e0d\u5f3a\u5236\u5237\u65b0"},"10.\u5de5\u8d44\u8868\u8be6\u60c5\u9875\u9762\u53cc\u51fb\u8df3\u5230\u653e\u5927\u9875\u9762\u518d\u8fd4\u56de\u4e0d\u5f3a\u5236\u5237\u65b0"),m.a.createElement("p",null,"\u56e0\u4e3a\u4ece\u653e\u5927\u9875\u9762\u8fd4\u56de\u5230\u8be6\u60c5\u9875\u9762\u662f\u4e0d\u4f1a\u6709\u53d8\u5316\u7684\u6240\u4ee5\u4e0d\u5fc5\u987b\u8981created\u8fd9\u4e9b\u751f\u547d\u5468\u671f\u91cd\u65b0\u6e32\u67d3\u3002 \xa0",m.a.createElement("br",null),"\u9996\u5148\u662f\u5982\u4f55\u5224\u65ad\u5f53\u524d\u662f\u5728\u653e\u5927\u9875\u9762\u8df3\u56de\u5230\u8be6\u60c5\u9875\u800c\u4e0d\u662f\u5176\u4ed6\u9875\u9762\u8df3\u8f6c\u5230\u8be6\u60c5\u9875\u5462\uff1f \xa0"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"//app.vue"),m.a.createElement("span",null,"watch: ","{"),m.a.createElement("span",null,"    $route(to, from) ","{"),m.a.createElement("span",null,"      // from \u5bf9\u8c61\u4e2d\u8981 router \u6765\u6e90\u4fe1\u606f"),m.a.createElement("span",null,'      sessionStorage.setItem("fromRouter", from.path);'),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"  },"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u5982\u4e0a\uff0c\u5728app.vue\u4e2d\u5bf9$route\u8fdb\u884cwatch\u76d1\u542c,\u7136\u540e\u5c06from.path\u5199\u5165\u7f13\u5b58\u6216\u8005\u76f4\u63a5\u5b58\u5165\u4e00\u4e2a\u5168\u5c40\u7684\u53d8\u91cf\u4f9b\u5176\u5b83\u7ec4\u4ef6\u4f7f\u7528\u3002 \xa0",m.a.createElement("br",null),"\u63a5\u4e0b\u6765\u89e3\u51b3\u5f3a\u5236\u4e0d\u5237\u65b0\u95ee\u9898\uff0c\u7528\u5230\u4e86 vue\u4e2d\u7684 keep-alive\uff0c\u4e0a\u4ee3\u7801"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"//app.vue"),m.a.createElement("span",null,"<keep-alive>"),m.a.createElement("span",null,'     <router-view v-if="$route.meta.keepAlive"></router-view>'),m.a.createElement("span",null,"</keep-alive>"),m.a.createElement("span",null,'     <router-view v-if="!$route.meta.keepAlive"></router-view>'),m.a.createElement("span",null),m.a.createElement("span",null,"//\u8def\u7531\u4e2d\u7684\u914d\u7f6e "),m.a.createElement("span",null," ","{"),m.a.createElement("span",null,"    path: '/salarydetail',"),m.a.createElement("span",null,"    name: 'salaryDetail',"),m.a.createElement("span",null,"    component: resolve => require(['@/page/salaryDetail'], resolve),"),m.a.createElement("span",null," \xa0 \xa0meta: ","{"," keepAlive: true }//\u6dfb\u52a0meta\uff0ckeepAlive\u5c5e\u6027"),m.a.createElement("span",null," \xa0}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u6ce8\u610f\uff1akeep-alive\u4e0b\u662factivated\u548cdeactivated\u4e86"),m.a.createElement("h2",{id:"11.\u8def\u7531\u8df3\u8f6c\u65f6\u8bbe\u7f6e\u8fc7\u6e21\u6548\u679c\uff0c\u4ee5\u53ca\u8fc7\u6e21\u65f6\u95f4\u7684\u8bbe\u7f6e"},"11.\u8def\u7531\u8df3\u8f6c\u65f6\u8bbe\u7f6e\u8fc7\u6e21\u6548\u679c\uff0c\u4ee5\u53ca\u8fc7\u6e21\u65f6\u95f4\u7684\u8bbe\u7f6e"),m.a.createElement("p",null,"\u76f4\u63a5\u5728 router-view \u5916\u5199\u5165transition\u8fc7\u6e21\u6807\u7b7e\uff0c\u7136\u540e\u6dfb\u52a0mode\u5c5e\u6027\u8bbe\u7f6e\uff0c\u907f\u514d\u8fc7\u6e21\u65f6\u7684\u6837\u5f0f\u91cd\u53e0\uff08\u6bd4\u5982\u900f\u660e\u5ea6\u5207\u6362\u65f6\u4f1a\u9020\u6210\u91cd\u5f71\uff09\u3002"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"   //mode: out-in \u65e7\u5143\u7d20\u6267\u884c\u5b8c\u8fc7\u6e21\u518d\u6267\u884c\u65b0\u5143\u7d20\u8fc7\u6e21 in-out\u5219\u76f8\u53cd"),m.a.createElement("span",null,' \xa0 <transition name="jump" mode="out-in">'),m.a.createElement("span",null,"     <router-view></router-view>"),m.a.createElement("span",null,"   </transition>"),m.a.createElement("span",null))),m.a.createElement("h2",{id:"12.\u8def\u7531\u7ed1\u5b9aquery\u7684\u503c\u65f6\u53ea\u80fd\u63a5\u53d7\u57fa\u672c\u6570\u636e\u7c7b\u578b Number\u3001String\u3001Boolean\u7b49"},"12.\u8def\u7531\u7ed1\u5b9aquery\u7684\u503c\u65f6\u53ea\u80fd\u63a5\u53d7\u57fa\u672c\u6570\u636e\u7c7b\u578b Number\u3001String\u3001Boolean\u7b49"),m.a.createElement("p",null,"\u56e0\u4e3a\u8fc7\u53bb\u65f6\u8981\u4f20\u9012\u4e00\u4e2a\u5bf9\u8c61Object\u683c\u5f0f\u7684\uff0c\u6240\u4ee5\u9020\u6210\u4e86\u4f20\u9012\u8fc7\u53bb\u7684\u5185\u5bb9\u53ea\u662f[object]\uff0c\u6240\u4ee5\u5728\u4f20\u9012\u7684\u65f6\u5019\u9700\u8981\u8fdb\u884c\u5b57\u7b26\u4e32\u7684\u8f6c\u5316 JSON.stringfy\uff08...\uff09"),m.a.createElement("h2",{id:"13.input\u5728IE\u4e0b\u56de\u8f66\u4f1a\u9ed8\u8ba4\u6267\u884c\u63d0\u4ea4\u4e8b\u4ef6"},"13.input\u5728IE\u4e0b\u56de\u8f66\u4f1a\u9ed8\u8ba4\u6267\u884c\u63d0\u4ea4\u4e8b\u4ef6"),m.a.createElement("p",null,"\u7ed9 input \u5916\u5c42\u6dfb\u52a0\u4e00\u4e2a form\u6807\u7b7e \u6dfb\u52a0onkeydown\u4e8b\u4ef6\uff0c\u5f53\u6441\u4e0b\u56de\u8f66\u952e\u65f6\uff0c\u8fd4\u56de false\uff1b"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,'<form name="myform" action="" onkeydown="if(event.keyCode==13)',"{",'return false;}">'),m.a.createElement("span",null,"  <input type='text' name='user' />"),m.a.createElement("span",null,"</form>"),m.a.createElement("span",null)))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=30.66c677d3.chunk.js.map