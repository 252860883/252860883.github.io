(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,l){},103:function(e,t,l){"use strict";l.d(t,"a",function(){return m});var n=l(4),a=l(5),c=l(7),r=l(6),i=l(8),o=l(0),u=l.n(o),m=(l(104),function(e){function t(){var e,l;Object(n.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(l=Object(c.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).clickPosBtn=function(e){var t=document.getElementById(e);window.scrollTo({top:t.offsetTop-10,left:0,behavior:"smooth"})},l}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"headerLink"},u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"real-content"},u.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(t,l){return u.a.createElement("span",{className:"a"+t.level,key:l,onClick:function(){return e.clickPosBtn(t.title)}},t.title)}))))}}]),t}(u.a.Component))},104:function(e,t,l){},24:function(e,t,l){"use strict";l.r(t),l.d(t,"default",function(){return E});var n=l(4),a=l(5),c=l(7),r=l(6),i=l(8),o=l(0),u=l.n(o),m=(l(101),l(103)),E=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(r.a)(t).call(this))).state={headerLink:[{level:"h2",title:"BFC"},{level:"h2",title:"IFC"},{level:"h2",title:"GFC"},{level:"h2",title:"FFC"}]},e}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement(o.Fragment,null,u.a.createElement(m.a,{headerLink:this.state.headerLink}),u.a.createElement("div",{className:"article"},u.a.createElement("div",{className:"title-content"},u.a.createElement("h1",{className:"title"},"BFC\u3001IFC\u3001FFC\u3001GFC")),u.a.createElement("blockquote",null,u.a.createElement("p",null,"\u770b\u5230\u6807\u9898\u6709\u4e9b\u604d\u60da\uff0c\u600e\u4e48\u8fd9\u4e48\u591a FC \uff1f\u662f\u7684\uff0c\u6211\u5728\u4e00\u6b21\u9762\u8bd5\u7684\u7b14\u8bd5\u9898\u4e2d\u770b\u5230\u8fd9\u591a FC\u7684\u65f6\u5019\uff0c\u4e5f\u6709\u4e9b\u61f5\u903c\u4e86\uff0c\u751a\u81f3\u6709\u70b9\u60f3\u60f3\u5403 KFC \u54c8\u54c8\u3002\u53ef\u80fd\u5e73\u65f6\u5927\u5bb6\u6700\u719f\u6089\u7684\u662f BFC \uff0c\u5176\u4ed6\u7684\u8fd9\u4e9b\u725b\u9b3c\u86c7\u795e\u90fd\u662f\u4ec0\u4e48\uff0c\u6211\u4eec\u8fd9\u7bc7\u6587\u7ae0\u5c31\u6765\u63a2\u8ba8\u63a2\u8ba8\u3002")),u.a.createElement("h2",{id:"BFC"},"BFC"),u.a.createElement("p",null,"\u6211\u4eec\u5148\u6765\u4f1a\u4f1a\u8001\u5927\u54e5 ",u.a.createElement("code",null,"BFC"),"\u5757\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587\uff08Block Formatting Context\uff0cBFC\uff09,\u7b80\u5355\u6765\u8bf4\u5c31\u662fCSS\u6e32\u67d3\u5e03\u5c40\u4e2d\u7684\u4e00\u90e8\u5206\uff0c\u5757\u76d2\u5b50\u6240\u5728\u7684\u533a\u57df\u3002"),u.a.createElement("p",null,"1.\u521b\u5efa BFC \u65b9\u5f0f\uff08\u5e38\u7528\uff09\uff1a"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6839\u5143\u7d20(",u.a.createElement("code",null,"<html>"),")"),u.a.createElement("li",null,"\u6d6e\u52a8\u5143\u7d20\uff08\u5143\u7d20\u7684 float \u4e0d\u662f none\uff09"),u.a.createElement("li",null,"\u7edd\u5bf9\u5b9a\u4f4d\u5143\u7d20\uff08\u5143\u7d20\u7684 position \u4e3a absolute \u6216 fixed\uff09"),u.a.createElement("li",null,"display \u4e3a inline-block\u3001table\u76f8\u5173\u503c\u3001flex\u3001grid \u7b49"),u.a.createElement("li",null,"overflow \u503c\u4e0d\u4e3a visible \u7684\u5757\u5143\u7d20"),u.a.createElement("li",null,"contain \u503c\u4e3a layout\u3001content\u6216 paint \u7684\u5143\u7d20")),u.a.createElement("p",null,"2.BFC \u7279\u70b9\uff1a"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u540c\u4e00\u4e2a BFC \u5185\u7684\u4e24\u4e2a\u76f8\u90bb\u5143\u7d20\u4f1a\u53d1\u751f margin \u574d\u584c\uff0c\u4e24\u4e2a BFC \u4e4b\u95f4\u5219\u4e0d\u4f1a\u53d1\u751f\u574d\u584c"),u.a.createElement("li",null,"BFC \u533a\u57df\u4e0d\u4f1a\u4e0e\u6d6e\u52a8\u5143\u7d20\u91cd\u53e0"),u.a.createElement("li",null,"BFC \u4f1a\u5305\u542b\u533a\u57df\u5185\u7684\u6d6e\u52a8\u5143\u7d20\u9ad8\u5ea6"),u.a.createElement("li",null,"BFC \u5728\u6587\u6863\u6d41\u4e2d\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bb9\u5668\uff0c\u5185\u5916\u5143\u7d20\u4e0d\u4f1a\u5f71\u54cd")),u.a.createElement("p",null,"3.BFC \u4e3b\u8981\u5e94\u7528\u573a\u666f"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6e05\u9664\u6d6e\u52a8\uff08\u56e0\u4e3aBFC\u533a\u57df\u8ba1\u7b97\u6d6e\u52a8\u5143\u7d20\u9ad8\u5ea6\uff09"),u.a.createElement("li",null,"\u907f\u514d margin \u574d\u584c\uff08\u56e0\u4e3a\u4e24\u4e2aBFC\u4e4b\u95f4\u4e0d\u5b58\u5728margin\uff09")),u.a.createElement("blockquote",null,u.a.createElement("p",null,"\u79d1\u666e\uff1amargin \u574d\u584c\uff08\u5916\u8fb9\u8ddd\u91cd\u53e0\uff09\uff0c\u5f53\u5757\u7ea7\u5143\u7d20\u4e0a\u8fb9\u8ddd\u548c\u4e0b\u8fb9\u8ddd\u540c\u65f6\u90fd\u6709\u8bbe\u5b9a\u65f6\u53ea\u4f1a\u4fdd\u7559\u6700\u5927\u7684\u8fb9\u8ddd\u3002\u6709\u4e09\u79cd\u60c5\u51b5\u4f1a\u53d1\u751f\u5916\u8fb9\u8ddd\u91cd\u53e0\uff1a\u540c\u4e00\u5c42\u76f8\u90bb\u5143\u7d20\u4e4b\u95f4\u3001\u6ca1\u6709\u5185\u5bb9\u5c06\u7236\u5143\u7d20\u548c\u540e\u4ee3\u5143\u7d20\u5206\u5f00\uff08\u5982\u6ca1\u6709boder\u3001padding\u3001BFC\u6216\u6e05\u9664\u6d6e\u52a8\u65f6\uff09\u3001\u7a7a\u7684\u5757\u7ea7\u5143\u7d20\u3002")),u.a.createElement("h2",{id:"IFC"},"IFC"),u.a.createElement("p",null,u.a.createElement("code",null,"IFC"),"\u5185\u8054\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587(Inline formatting context)"),u.a.createElement("p",null,"IFC \u7279\u70b9\uff1a"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u5143\u7d20\u4f1a\u5728\u884c\u5185\u4ece\u5de6\u5230\u53f3\u8fdb\u884c\u6392\u5217"),u.a.createElement("li",null,"\u6240\u6709\u5143\u7d20\u4f1a\u5728\u533a\u57df\u5185\u5f62\u6210\u4e00\u4e2a\u7ebf\u6846"),u.a.createElement("li",null,"\u9ad8\u5ea6\u7531\u5176\u5305\u542b\u7684\u884c\u5185\u5143\u7d20\u6700\u9ad8\u7684\u6765\u8ba1\u7b97"),u.a.createElement("li",null,"\u533a\u57df\u5185\u7684\u6d6e\u52a8\u5143\u7d20\u4e0d\u5728\u884c\u6846\u4e2d\u5e76\u4e14\u4f1a\u538b\u7f29\u884c\u6846\u5bbd\u5ea6"),u.a.createElement("li",null,"\u884c\u6846\u5bbd\u5ea6\u5bb9\u4e0d\u4e0b\u5143\u7d20\u65f6\u4f1a\u53e6\u8d77\u4e00\u4e2a\u884c\u6846\u5e76\u7ee7\u7eed\u8fdb\u884c\u6392\u5217\u3001"),u.a.createElement("li",null,"\u884c\u6846\u5143\u7d20\u9075\u5faa",u.a.createElement("code",null,"text-align"),"\u548c",u.a.createElement("code",null,"vertical-align"))),u.a.createElement("p",null,"IFC \u5e94\u7528\uff1a"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u5e38\u7528\u4e8e \u6c34\u5e73/\u5782\u76f4\u5c45\u4e2d")),u.a.createElement("h2",{id:"GFC"},"GFC"),u.a.createElement("p",null,u.a.createElement("code",null,"GFC")," \u7f51\u683c\u5e03\u5c40\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587(GridLayout Formatting Contexts),\u901a\u5e38\u901a\u8fc7\u8bbe\u7f6e",u.a.createElement("code",null,"display:grid\uff1b"),"\u6765\u5b9e\u73b0\u4e00\u4e2aGFC\u533a\u57df\uff0c\u53ef\u4ee5\u5728\u8be5\u533a\u57df\u5185\u5b9a\u4e49\u884c\u548c\u5217\u3002\u548c table \u76f8\u6bd4\uff0c\u6709\u66f4\u591a\u7684\u5c5e\u6027\u6765\u63a7\u5236\u884c\u884c\u4e3a\u3002"),u.a.createElement("h2",{id:"FFC"},"FFC"),u.a.createElement("p",null,u.a.createElement("code",null,"FFC")," \u81ea\u9002\u5e94\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587(Flex Formatting Contexts),\u901a\u8fc7\u8bbe\u7f6e",u.a.createElement("code",null,"display:flex;"),"\u6216\u8005",u.a.createElement("code",null,"display:inline-flex"),"\u6765\u751f\u6210\u3002\u5176\u5b9e\u4e5f\u5c31\u662f\u6211\u4eec\u5e38\u8bf4\u7684 flex\u5e03\u5c40\uff0c\u8fd9\u4e2a\u5c31\u4e0d\u7528\u591a\u8bf4\u4e86\u3002"),u.a.createElement("blockquote",null,u.a.createElement("p",null,"\u53c2\u8003\uff1a",u.a.createElement("br",null),u.a.createElement("a",{target:"_blank",href:"https://juejin.im/entry/5938daf7a0bb9f006b2295db"},"\u5c0f\u79d1\u666e\uff1a\u5230\u5e95\u4ec0\u4e48\u662f BFC\u3001IFC\u3001GFC \u548c FFC"),u.a.createElement("br",null),u.a.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Inline_formatting_context"},"Inline formatting context"),u.a.createElement("br",null),u.a.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context"},"Block formatting context")))))}}]),t}(u.a.Component)}}]);
//# sourceMappingURL=0.a64f69d2.chunk.js.map