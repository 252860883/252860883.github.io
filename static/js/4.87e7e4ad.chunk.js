(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,t,n){},103:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var l=n(4),a=n(5),c=n(7),r=n(6),u=n(8),o=n(0),m=n.n(o),p=(n(104),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(u)))).clickPosBtn=function(e){var t=document.getElementById(e);window.scrollTo({top:t.offsetTop-10,left:0,behavior:"smooth"})},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(t,n){return m.a.createElement("span",{className:"a"+t.level,key:n,onClick:function(){return e.clickPosBtn(t.title)}},t.title)}))))}}]),t}(m.a.Component))},104:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var l=n(4),a=n(5),c=n(7),r=n(6),u=n(8),o=n(0),m=n.n(o),p=(n(101),n(103)),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(r.a)(t).call(this))).state={headerLink:[{level:"h3",title:"\u7c7b\u578b"},{level:"h3",title:"typeof"},{level:"h3",title:"instanceof"},{level:"h3",title:"isPrototypeOf()"},{level:"h3",title:"==="},{level:"h3",title:"constructor"},{level:"h3",title:"Object.prototype.toString.call()"},{level:"h3",title:"\u603b\u7ed3"}]},e}return Object(u.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(o.Fragment,null,m.a.createElement(p.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"JavaScript\u7684\u7c7b\u578b\u68c0\u6d4b")),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u5927\u5bb6\u90fd\u77e5\u9053 JavaScript \u662f\u4e00\u4e2a\u5f31\u7c7b\u578b\u8bed\u8a00\uff0c\u6240\u4ee5\u5e73\u65f6\u5bf9\u7c7b\u578b\u7684\u5224\u65ad\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u4e8b\u60c5\u3002\u5f53\u7136\u4e5f\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u533a\u5206\u7c7b\u578b\uff1atypeof\u3001instanceof\u3001=== \u7b49\u7b49\uff0c\u90a3\u6211\u4eec\u9700\u8981\u5728\u4ec0\u4e48\u573a\u666f\u4e0b\u8be5\u7528\u54ea\u4e2a\u65b9\u6cd5\u6765\u533a\u5206\u5462\uff1f")),m.a.createElement("h3",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),m.a.createElement("p",null,"\u590d\u4e60\u4e00\u4e0b JavaScript \u7684\u6570\u636e\u7c7b\u578b\uff0c\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff1a",m.a.createElement("code",null,"Number"),"\u3001",m.a.createElement("code",null,"String"),"\u3001",m.a.createElement("code",null,"Null"),"\u3001",m.a.createElement("code",null,"Undefined"),"\u3001",m.a.createElement("code",null,"Boolean"),"\u3001",m.a.createElement("code",null,"Symbol"),"\u3002\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff1a",m.a.createElement("code",null,"Object"),"\u3001",m.a.createElement("code",null,"Array"),"\u3001",m.a.createElement("code",null,"Function"),"\u3001",m.a.createElement("code",null,"Date"),"\u7b49\u3002\u5173\u4e8e\u4e24\u8005\u7684\u533a\u522b\u8fd9\u91cc\u4e0d\u518d\u505a\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u7ffb\u770b\u6211\u4e4b\u524d\u7684\u53e6\u4e00\u7bc7\u6587\u7ae0\uff1a",m.a.createElement("a",{target:"_blank",href:"https://252860883.github.io/2018/06/12/%E5%89%96%E6%9E%90JavaScript%E7%9A%84%E5%86%85%E5%AD%98%E6%9C%BA%E5%88%B6/"},"\u5256\u6790JavaScript\u7684\u5185\u5b58\u673a\u5236")),m.a.createElement("h3",{id:"typeof"},"typeof"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"typeof \u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u6570\u636e\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u3002\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\uff1a\u5b83\u4e0d\u80fd\u5224\u65ad null\u3001array\u3001date\u3001RegExp\u7b49\u7c7b\u578b\u3002")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"** \u4ee5\u4e0b\u60c5\u51b5\u53ef\u4ee5\u8fdb\u884c\u5224\u65ad **"),m.a.createElement("span",null),m.a.createElement("span",null,"typeof Symbol(); // symbol "),m.a.createElement("span",null,"typeof ''; // string "),m.a.createElement("span",null,"typeof 1; // number "),m.a.createElement("span",null,"typeof true; //boolean "),m.a.createElement("span",null,"typeof undefined; //undefined "),m.a.createElement("span",null,"typeof new Function(); // function "),m.a.createElement("span",null,"typeof ","{","}; // object"),m.a.createElement("span",null),m.a.createElement("span",null,"** \u4ee5\u4e0b\u60c5\u51b5\u65e0\u6cd5\u8fdb\u884c\u5224\u65ad **"),m.a.createElement("span",null),m.a.createElement("span",null,"typeof null; //object "),m.a.createElement("span",null,"typeof [1,2,3] ; //object "),m.a.createElement("span",null,"typeof new Date(); //object "),m.a.createElement("span",null,"typeof new RegExp(); //object "),m.a.createElement("span",null),m.a.createElement("span",null))),m.a.createElement("h3",{id:"instanceof"},"instanceof"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"A instanceof B \u662f\u5224\u65ad A \u662f\u5426\u4e3a B \u7684\u5b9e\u4f8b\uff0c\u5373\u5224\u65ad A\u7684\u539f\u578b\u94fe\u4e2d\u662f\u5426\u5b58\u5728\u6784\u9020\u51fd\u6570B\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u6765\u5224\u65ad array\u3001date\u3001RegExp\u7b49\u3002")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"[1,2,3] instanceof Array; //true"),m.a.createElement("span",null,"{","} instanceof Object;//true"),m.a.createElement("span",null,"new Date() instanceof Date;//true"),m.a.createElement("span",null,"new RegExp() instanceof RegExp//true"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u540c\u65f6\uff0c\u68c0\u6d4b Array \u7c7b\u578b\u4e5f\u53ef\u4ee5\u4f7f\u7528 ES6 \u7684\u65b0\u8bed\u6cd5  ",m.a.createElement("code",null,"Array.isArray()")," \u6765\u8fdb\u884c\u68c0\u6d4b\u3002"),m.a.createElement("p",null,"\u6b63\u5982\u4e0a\u9762\u6240\u8bf4\uff0c\u53ea\u8981 A\u7684\u539f\u578b\u94fe\u4e2d\u5b58\u5728\u6784\u9020\u51fd\u6570B\u5373\u8fd4\u56de true \u6240\u4ee5\u53ef\u80fd\u6709\u591a\u4e2a\u6784\u9020\u51fd\u6570B\u6ee1\u8db3\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"[1,2,3] instanceof Array; // true"),m.a.createElement("span",null,"[1,2,3] instanceof Object; // true"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u6a21\u62df\u5b9e\u73b0\u4e00\u4e2a ",m.a.createElement("code",null,"instanceof")," \u65b9\u6cd5\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"function instanceOf(A, B) ","{"),m.a.createElement("span",null,"    while (true) ","{"),m.a.createElement("span",null,"        // \u539f\u578b\u94fe\u5230\u5934\u4ecd\u672a\u627e\u5230\u8fd4\u56defalse"),m.a.createElement("span",null,"        if(A === null)","{"),m.a.createElement("span",null,"            return false"),m.a.createElement("span",null,"        }"),m.a.createElement("span",null,"        if (A === B.prototype) ","{"),m.a.createElement("span",null,"            console.log(A,B)"),m.a.createElement("span",null,"            return true"),m.a.createElement("span",null,"        }"),m.a.createElement("span",null,"        A = A.__proto__"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f46\u662f\u9700\u8981\u6ce8\u610f\uff0c\u5bf9\u4e8e\u57fa\u672c\u6570\u636e\u7c7b\u578b\u6765\u8bf4\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7",m.a.createElement("strong",null,"\u521b\u5efa\u5b9e\u4f8b"),"\u65b9\u6cd5\u624d\u80fd\u88ab instanceof \u68c0\u6d4b\u51fa\u6765\u3002\u539f\u56e0\u662f\uff1a\u901a\u8fc7\u5b57\u9762\u91cf\u65b9\u5f0f\u521b\u5efa\u7684\u57fa\u672c\u6570\u636e\u7c7b\u578b\u4e0d\u662f\u4e00\u4e2a\u4e25\u8c28\u7684\u5b9e\u4f8b\uff0c\u53ea\u6709\u901a\u8fc7\u5b9e\u4f8b\u521b\u5efa\u51fa\u7684\u5bf9\u8c61\u624d\u662f\u6807\u51c6\u7684\u5bf9\u8c61\u6570\u636e\u7c7b\u578b\u503c\u3002\u800c\u7531\u4e8e JS \u7684\u677e\u6563\u6027\uff0c\u53ef\u4ee5\u6309\u7167\u6b63\u5e38\u57fa\u672c\u7c7b\u578b\u5bf9\u8c61\u5904\u7406\u3002"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"1 instanceof Number; // false"),m.a.createElement("span",null,"new Number(1) instanceof Number; // false"),m.a.createElement("span",null),m.a.createElement("span",null,'"abc" instanceof String; // false '),m.a.createElement("span",null,"new String('abc') instanceof String; // true"),m.a.createElement("span",null),m.a.createElement("span",null))),m.a.createElement("p",null,"\u5bf9\u4e8e\u68c0\u6d4b Null \u548c Undefined \u7c7b\u578b\uff0cinstanceof \u53c8\u9e21\u808b\u4e86\uff01\u56e0\u4e3a\u6d4f\u89c8\u5668\u4e0d\u5141\u8bb8\u5728\u5916\u90e8\u8bbf\u95ee Null \u548c Undefined \u7c7b\uff0c\u6240\u4ee5\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u62a5\u9519\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"null instanceof Null; // Null is not defined"),m.a.createElement("span",null,"undefined instanceof Undefined; // Undefined is not defined"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"isPrototypeOf()"},"isPrototypeOf()"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u65b9\u6cd5\u7528\u4e8e\u6d4b\u8bd5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a,\u5b83\u548c instanceof \u6709\u7740\u5f02\u66f2\u540c\u5de5\u7684\u4f5c\u7528\uff1a")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"RegExp.prototype.isPrototypeOf(/\\n/)    // true"),m.a.createElement("span",null,"String.prototype.isPrototypeOf(new String('1234'))  // true"),m.a.createElement("span",null,"String.prototype.isPrototypeOf('1234')  // true"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"==="},"==="),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u4e25\u683c\u7b49\u4e8e\u5c31\u597d\u8bf4\u5566\uff0c\u4ed6\u53ea\u80fd\u7528\u6765\u5224\u65ad null \u548c undefined \u7c7b\u578b\uff0c\u56e0\u4e3a\u8fd9\u4e24\u4e2a\u7c7b\u578b\u7684\u503c\u90fd\u662f\u552f\u4e00\u7684\u3002")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"var a = null;"),m.a.createElement("span",null,"a === null; // true "),m.a.createElement("span",null),m.a.createElement("span",null,"var b = undefined;"),m.a.createElement("span",null,"b ==== undefined; // true"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"constructor"},"constructor"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"constructor \u548c instanceof \u7684\u4f5c\u7528\u5f88\u50cf\uff0c\u533a\u522b\u5728\u4e8e\u5b83\u53ef\u4ee5\u5904\u7406\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u5e76\u4e14\u5728\u68c0\u6d4b Object \u65f6\u5904\u7406\u4e0d\u4e00\u6837\u3002")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"** constructor\u53ea\u80fd\u5224\u65ad\u662f\u5426\u7531\u8be5\u6784\u9020\u51fd\u6570\u521b\u5efa\u7684\u5b9e\u4f8b\uff0c\u4e0d\u80fd\u5224\u65ad\u539f\u578b\u94fe\u4e0a\u7684 **"),m.a.createElement("span",null,"[1,2,3].constructor == Array; // true "),m.a.createElement("span",null,"[1,2,3].constructor == Object; // false"),m.a.createElement("span",null),m.a.createElement("span",null,"** \u53ef\u4ee5\u7528\u6765\u5224\u65ad\u57fa\u7840\u7c7b\u578b null/undefined \u9664\u5916 **"),m.a.createElement("span",null,'var a="aaa";'),m.a.createElement("span",null,"a.constructor == String; // true"),m.a.createElement("span",null,"var b=1;"),m.a.createElement("span",null,"b.constructor == Number; // true"),m.a.createElement("span",null),m.a.createElement("span",null))),m.a.createElement("p",null,"\u5f53\u7136 constructor \u8fd8\u662f\u540c\u6837\u4e0d\u80fd\u5224\u65ad ",m.a.createElement("code",null,"null")," \u548c ",m.a.createElement("code",null,"undefined"),"\uff0c\u540c\u65f6\u5982\u679c\u5bf9\u7c7b\u7684\u539f\u578b\u8fdb\u884c\u91cd\u5199\u65f6\u5f88\u6709\u53ef\u80fd\u628a constructor\u7ed9\u8986\u76d6\uff0c\u6240\u4ee5\u8fd8\u662f\u8981\u614e\u7528\u54e6\uff01"),m.a.createElement("h3",{id:"Object.prototype.toString.call()"},"Object.prototype.toString.call()"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u55ef\uff0c\u6700\u540e\u51fa\u573a\u7684\u4e00\u5b9a\u662f\u5927\u4f6c\u7ea7\u4e86\uff0c\u8fd9\u662f\u6700\u51c6\u786e\u4e5f\u662f\u6700\u5e38\u7528\u7684\u65b9\u6cd5\u4e86\u3002")),m.a.createElement("p",null,"\u6211\u4eec\u5e73\u65f6\u90fd\u77e5\u9053 ",m.a.createElement("code",null,"to String()"),' \u662f\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u5bf9\u4e8eObject\u4e0a\u7684 toString \u5e76\u4e0d\u662f\u7528\u6765\u8f6c\u6362\u5b57\u7b26\u4e32\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u8fd4\u56de\u5f53\u524d\u65b9\u6cd5\u6267\u884c\u7684\u4e3b\u4f53\uff08\u65b9\u6cd5\u4e2d\u7684 this\uff09\u6240\u5c5e\u7c7b\u7684\u8be6\u7ec6\u4fe1\u606f\u5373"[object Object]",\u5176\u4e2d\u7b2c\u4e00\u4e2a object \u4ee3\u8868\u5f53\u524d\u5b9e\u4f8b\u662f\u5bf9\u8c61\u6570\u636e\u7c7b\u578b\u7684(\u8fd9\u4e2a\u662f\u56fa\u5b9a\u6b7b\u7684)\uff0c\u7b2c\u4e8c\u4e2a Object \u4ee3\u8868\u7684\u662f this \u6240\u5c5e\u7684\u7c7b\u662f Object\u3002'),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"Object.prototype.toString.call('') ;   // [object String]"),m.a.createElement("span",null,"Object.prototype.toString.call(1) ;    // [object Number]"),m.a.createElement("span",null,"Object.prototype.toString.call(true) ; // [object Boolean]"),m.a.createElement("span",null,"Object.prototype.toString.call(undefined) ; // [object Undefined]"),m.a.createElement("span",null,"Object.prototype.toString.call(null) ; // [object Null]"),m.a.createElement("span",null,"Object.prototype.toString.call(new Function()) ; // [object Function]"),m.a.createElement("span",null,"Object.prototype.toString.call(new Date()) ; // [object Date]"),m.a.createElement("span",null,"Object.prototype.toString.call([]) ; // [object Array]"),m.a.createElement("span",null,"Object.prototype.toString.call(new RegExp()) ; // [object RegExp]"),m.a.createElement("span",null,"Object.prototype.toString.call(new Error()) ; // [object Error]"),m.a.createElement("span",null,"Object.prototype.toString.call(document) ; // [object HTMLDocument]"),m.a.createElement("span",null,"Object.prototype.toString.call(window) ; //[object global] window\u662f\u5168\u5c40\u5bf9\u8c61global\u7684\u5f15\u7528"),m.a.createElement("span",null,"Object.prototype.toString.call(","{","}) ; // [object Object]"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),m.a.createElement("table",null,m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",null," \u65b9\u6cd5 "),m.a.createElement("th",null," \u53ef\u5224\u65ad\u7c7b\u578b "),m.a.createElement("th",null," \u7f3a\u70b9 ")),m.a.createElement("tr",null,m.a.createElement("td",null," typeof "),m.a.createElement("td",null," \u57fa\u672c\u6570\u636e\u7c7b\u578b\uff08null\u9664\u5916\uff09\u3001Object "),m.a.createElement("td",null," \u4e0d\u80fd\u5224\u65ad null\u3001array\u3001date\u3001RegExp\u7b49\u7c7b\u578b ")),m.a.createElement("tr",null,m.a.createElement("td",null," instanceof "),m.a.createElement("td",null,"  Array\u3001Date\u3001RegExp\u7b49\u7c7b\u578b "),m.a.createElement("td",null," 1.\u53ea\u8981\u662f\u5728\u5b9e\u4f8b\u4e0a\u7684\u6784\u9020\u51fd\u6570\u5c31\u4f1a\u5224\u65ad\u4e3a\u771f 2.\u57fa\u672c\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u901a\u8fc7\u5b9e\u4f8b\u521b\u5efa\u65b9\u5f0f\u624d\u80fd\u88ab\u68c0\u6d4b 3.\u4e0d\u80fd\u68c0\u6d4b null \u548c undefined ")),m.a.createElement("tr",null,m.a.createElement("td",null," === "),m.a.createElement("td",null," Null \u548c Undefined"),m.a.createElement("td",null," \u53ea\u80fd\u68c0\u6d4b null \u548c undefined")),m.a.createElement("tr",null,m.a.createElement("td",null," constructor"),m.a.createElement("td",null," \u57fa\u672c\u6570\u636e\u7c7b\u578b\u3001Array\u3001Date\u3001RegExp\u7b49"),m.a.createElement("td",null," 1.\u4e0d\u80fd\u5224\u65ad null \u548c undefined 2.\u5982\u679c\u5bf9\u7c7b\u7684\u539f\u578b\u8fdb\u884c\u91cd\u5199\u65f6\u5f88\u6709\u53ef\u80fd\u628a constructor\u7ed9\u8986\u76d6")),m.a.createElement("tr",null,m.a.createElement("td",null,"Object.prototype.toString.call()"),m.a.createElement("td",null,"\u5168\u90fd\u53ef\u4ee5"),m.a.createElement("td",null,"\u5982\u679c\u975e\u8981\u627e\u7f3a\u70b9\uff0c\u90a3\u5c31\u662f\u9700\u8981\u591a\u6253\u51e0\u4e2a\u5b57\u6bcd\uff1f"))))))}}]),t}(m.a.Component)}}]);
//# sourceMappingURL=4.87e7e4ad.chunk.js.map