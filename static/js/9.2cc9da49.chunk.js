(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{123:function(e,n,l){},125:function(e,n,l){"use strict";l.d(n,"a",function(){return p});var a=l(4),t=l(5),r=l(7),c=l(6),m=l(8),u=l(0),s=l.n(u),p=(l(126),function(e){function n(){var e,l;Object(a.a)(this,n);for(var t=arguments.length,m=new Array(t),u=0;u<t;u++)m[u]=arguments[u];return(l=Object(r.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(m)))).clickPosBtn=function(e){var n=document.getElementById(e);window.scrollTo({top:n.offsetTop-10,left:0,behavior:"smooth"})},l}return Object(m.a)(n,e),Object(t.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"headerLink"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"real-content"},s.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(n,l){return s.a.createElement("span",{className:"a"+n.level,key:l,onClick:function(){return e.clickPosBtn(n.title)}},n.title)}))))}}]),n}(s.a.Component))},126:function(e,n,l){},46:function(e,n,l){"use strict";l.r(n),l.d(n,"default",function(){return E});var a=l(4),t=l(5),r=l(7),c=l(6),m=l(8),u=l(0),s=l.n(u),p=(l(123),l(125)),E=function(e){function n(){var e;return Object(a.a)(this,n),(e=Object(r.a)(this,Object(c.a)(n).call(this))).state={headerLink:[{level:"h2",title:"\u4e86\u89e3 TypeScript"},{level:"h3",title:"\u5bf9\u8c61\u7c7b\u578b"},{level:"h4",title:"\u57fa\u7840\u6570\u636e\u7c7b\u578b"},{level:"h4",title:"\u4efb\u610f\u7c7b\u578b"},{level:"h4",title:"\u7c7b\u578b\u63a8\u8bba"},{level:"h4",title:"\u8054\u5408\u7c7b\u578b"},{level:"h4",title:"\u6570\u7ec4\u7c7b\u578b"},{level:"h4",title:"\u51fd\u6570\u7c7b\u578b"},{level:"h4",title:"\u7c7b\u578b\u65ad\u8a00"},{level:"h4",title:"\u7c7b\u578b\u522b\u540d"},{level:"h4",title:"\u6cdb\u578b"},{level:"h4",title:"\u5185\u7f6e\u5bf9\u8c61"},{level:"h3",title:"\u63a5\u53e3"},{level:"h3",title:"\u7c7b"},{level:"h3",title:"\u7c7b\u4e0e\u63a5\u53e3\u7684\u7ed3\u5408"},{level:"h3",title:"\u53c2\u8003"}]},e}return Object(m.a)(n,e),Object(t.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement(u.Fragment,null,s.a.createElement(p.a,{headerLink:this.state.headerLink}),s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"title-content"},s.a.createElement("h1",{className:"title"},"TypeScript\u7b14\u8bb0")),s.a.createElement("h2",{id:"\u4e86\u89e3 TypeScript"},"\u4e86\u89e3 TypeScript"),s.a.createElement("blockquote",null,s.a.createElement("p",null,"TypeScript \u662f JavaScript \u7684\u4e00\u4e2a\u8d85\u96c6\uff0c\u4e3b\u8981\u63d0\u4f9b\u4e86\u7c7b\u578b\u7cfb\u7edf\u548c\u5bf9 ES6 \u7684\u652f\u6301\u3002TS \u589e\u5f3a\u4e86\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002")),s.a.createElement("p",null,"\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\u5c31\u53ef\u4ee5\u5728\u5168\u5c40\u4eab\u7528 TypeScript \u8bed\u6cd5\u5566\uff01"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"npm install -g typescript"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u7f16\u8bd1 TypeScript \u4e5f\u5f88\u7b80\u5355 \u76f4\u63a5\u6267\u884c\u6307\u4ee4\uff1a ",s.a.createElement("code",null,"tsc \u6587\u4ef6\u540d")," \u3002"),s.a.createElement("h3",{id:"\u5bf9\u8c61\u7c7b\u578b"},"\u5bf9\u8c61\u7c7b\u578b"),s.a.createElement("h4",{id:"\u57fa\u7840\u6570\u636e\u7c7b\u578b"},"\u57fa\u7840\u6570\u636e\u7c7b\u578b"),s.a.createElement("p",null,"\u5728 TypeScript \u4e2d\u6709\u516d\u79cd\u57fa\u7840\u6570\u636e\u7c7b\u578b\uff0c\u5176\u57fa\u672c\u7684\u5b9a\u4e49\u683c\u5f0f\u4e3a",s.a.createElement("code",null,"let \u53d8\u91cf\u540d : \u6570\u636e\u7c7b\u578b = \u53d8\u91cf\u503c"),"\u3002\u8fd9\u516d\u79cd\u6570\u636e\u7c7b\u578b\u5206\u522b\u662f\uff1a",s.a.createElement("code",null,"boolean")," ",s.a.createElement("code",null,"number")," ",s.a.createElement("code",null,"string")," ",s.a.createElement("code",null,"void")," ",s.a.createElement("code",null,"undefined")," ",s.a.createElement("code",null,"null"),"  \u9700\u8981\u6ce8\u610f\uff0c\u4f7f\u7528\u57fa\u7840\u6570\u636e\u7c7b\u578b\u65f6\u4e00\u5b9a\u8981\u4e25\u683c\u6309\u7167\u6570\u636e\u7c7b\u578b\u8d4b\u503c\uff0c\u5426\u5219\u7f16\u8bd1\u65f6\u4f1a\u62a5\u9519\u3002\u540c\u65f6\u8fd8\u63d0\u4f9b\u4e86\u679a\u4e3e\u7c7b\u578b\u65b9\u4fbf\u4f7f\u7528\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"/**"),s.a.createElement("span",null," * boolean\u7c7b\u578b"),s.a.createElement("span",null," * new Boolean() \u521b\u9020\u7684\u5bf9\u8c61\u4e0d\u662f\u5e03\u5c14\u503c\u800c\u662f\u4e00\u4e2a\u5e03\u5c14\u5bf9\u8c61,\u4e0b\u9762\u8fd9\u6837\u5199\u4f1a\u62a5\u9519"),s.a.createElement("span",null," * let is: boolean = new Boolean(2);  "),s.a.createElement("span",null," * boolean \u662f JavaScript \u4e2d\u7684\u57fa\u672c\u7c7b\u578b\uff0c\u800c Boolean \u662f JavaScript \u4e2d\u7684\u6784\u9020\u51fd\u6570\u3002"),s.a.createElement("span",null," */"),s.a.createElement("span",null),s.a.createElement("span",null,"let isDone: boolean = false"),s.a.createElement("span",null),s.a.createElement("span",null,"/**"),s.a.createElement("span",null," * number\u7c7b\u578b"),s.a.createElement("span",null," */"),s.a.createElement("span",null),s.a.createElement("span",null,"let num_a: number = 6"),s.a.createElement("span",null,"let num_b: number = 0xffff"),s.a.createElement("span",null,"let num_c: number = NaN"),s.a.createElement("span",null,"// \u4e8c\u8fdb\u5236\u548c\u516b\u8fdb\u5236\u90fd\u4f1a\u88ab\u7f16\u8bd1\u6210\u5341\u8fdb\u5236"),s.a.createElement("span",null,"let num_d: number = 0o744"),s.a.createElement("span",null,"let num_e: number = 0b111"),s.a.createElement("span",null),s.a.createElement("span",null,"/**"),s.a.createElement("span",null," * \u5b57\u7b26\u4e32"),s.a.createElement("span",null," */"),s.a.createElement("span",null),s.a.createElement("span",null,'let str_a: string = "Villion"'),s.a.createElement("span",null,"let str_b = `My name is $","{","str_a}.`"),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null,"/**"),s.a.createElement("span",null," * \u7a7a\u503c(void) Null Undefined"),s.a.createElement("span",null," */"),s.a.createElement("span",null),s.a.createElement("span",null,"let void_a: void = undefined"),s.a.createElement("span",null,"let und_b: undefined = undefined  // undefined \u7c7b\u578b\u53ea\u80fd\u88ab\u8d4b\u503c undefined "),s.a.createElement("span",null,"let null_c: null = null  // null \u7c7b\u578b\u53ea\u80fd\u8d4b\u503c null "),s.a.createElement("span",null),s.a.createElement("span",null,"/**"),s.a.createElement("span",null," * \u679a\u4e3e\u7c7b\u578b"),s.a.createElement("span",null," */"),s.a.createElement("span",null,"// enum\u7c7b\u578b\u662f\u5bf9JavaScript\u6807\u51c6\u6570\u636e\u7c7b\u578b\u7684\u4e00\u4e2a\u8865\u5145\u3002 "),s.a.createElement("span",null,"// \u4f7f\u7528\u679a\u4e3e\u7c7b\u578b\u53ef\u4ee5\u4e3a\u4e00\u7ec4\u6570\u503c\u8d4b\u4e88\u53cb\u597d\u7684\u540d\u5b57\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ece0\u5f00\u59cb\u4e3a\u5143\u7d20\u7f16\u53f7\u3002 \u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u7684\u6307\u5b9a\u6210\u5458\u7684\u6570\u503c\u3002"),s.a.createElement("span",null,"enum Color ","{","Red,Green,Blue}"),s.a.createElement("span",null,"let c:Color = Color.Green;"),s.a.createElement("span",null,"enum Days ","{","Sun, Mon, Tue, Wed, Thu, Fri, Sat}"),s.a.createElement("span",null,'console.log(Days["Sun"]) // 0'),s.a.createElement("span",null,"console.log(Days[0]); // 'Sun'"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u4efb\u610f\u7c7b\u578b"},"\u4efb\u610f\u7c7b\u578b"),s.a.createElement("p",null,"\u548c\u57fa\u7840\u6570\u636e\u7c7b\u578b\u5bf9\u7acb\uff0c\u53ef\u4ee5\u8d4b\u4efb\u4f55\u7c7b\u578b\u7684\u503c\u3002\u5728\u4efb\u610f\u503c\u4e0a\u8bbf\u95ee\u4efb\u4f55\u5c5e\u6027\u90fd\u662f\u5141\u8bb8\u7684\uff0c\u4e5f\u5141\u8bb8\u8c03\u7528\u4efb\u4f55\u65b9\u6cd5\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8ba4\u4e3a void \u4e0e any \u76f8\u53cd\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,'let any_a: any = "Dinosaur"'),s.a.createElement("span",null,"any_a.sayHello()"),s.a.createElement("span",null,"console.log(any_a.name)"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u53d8\u91cf\u5982\u679c\u5728\u58f0\u660e\u7684\u65f6\u5019\uff0c\u672a\u6307\u5b9a\u5176\u7c7b\u578b\uff0c\u90a3\u4e48\u5b83\u4f1a\u88ab\u8bc6\u522b\u4e3a\u4efb\u610f\u503c\u7c7b\u578b\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"let any_b"),s.a.createElement("span",null,"// \u7b49\u4ef7\u4e8e"),s.a.createElement("span",null,"let any_b: any"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u7c7b\u578b\u63a8\u8bba"},"\u7c7b\u578b\u63a8\u8bba"),s.a.createElement("p",null,"\u5982\u679c\u6ca1\u6709\u660e\u786e\u7684\u6307\u5b9a\u7c7b\u578b\uff0c\u90a3\u4e48 TypeScript \u4f1a\u4f9d\u7167",s.a.createElement("code",null,"\u7c7b\u578b\u63a8\u8bba"),"\u7684\u89c4\u5219\u63a8\u65ad\u51fa\u4e00\u4e2a\u7c7b\u578b,\u4f46\u662f\u7f16\u8bd1\u9636\u6bb5\u4f9d\u7136\u4f1a\u8fdb\u884c\u62a5\u9519\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,'let any_c = "string"'),s.a.createElement("span",null,"// \u7b49\u4ef7\u4e8e"),s.a.createElement("span",null,'let any_c: string = "string"'),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u8054\u5408\u7c7b\u578b"},"\u8054\u5408\u7c7b\u578b"),s.a.createElement("p",null,"\u8054\u5408\u7c7b\u578b\u5c31\u662f\u4e00\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u662f\u89c4\u5b9a\u5185\u7684\u591a\u79cd\u7c7b\u578b\u3002\u5728 TypeScript \u4e2d\u7528 ",s.a.createElement("code",null,"|")," \u7b26\u53f7\u6765\u5206\u5272\u5b9a\u4e49\u7684\u57fa\u7840\u7c7b\u578b\u3002\u5f53 TypeScript \u4e0d\u786e\u5b9a\u4e00\u4e2a\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u5230\u5e95\u662f\u54ea\u4e2a\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u53ea\u80fd\u8bbf\u95ee\u6b64\u8054\u5408\u7c7b\u578b\u7684\u6240\u6709\u7c7b\u578b\u91cc\u5171\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u3002\u53d8\u91cf\u5728\u88ab\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e\u7c7b\u578b\u63a8\u8bba\u7684\u89c4\u5219\u63a8\u65ad\u51fa\u4e00\u4e2a\u7c7b\u578b\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"let fix_a: string | number;"),s.a.createElement("span",null,'fix_a = "aaa";'),s.a.createElement("span",null,"fix_a = 1;"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u5bf9\u4e8e\u8054\u5408\u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e ",s.a.createElement("strong",null,"\u7c7b\u578b\u522b\u5b57")," \u6765\u8868\u793a\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"type isString = string;"),s.a.createElement("span",null,"type isNumber = number;"),s.a.createElement("span",null,"type fix = isString | isNumber;"),s.a.createElement("span",null),s.a.createElement("span",null,"let fix_b: fix = 'bbb'"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u6570\u7ec4\u7c7b\u578b"},"\u6570\u7ec4\u7c7b\u578b"),s.a.createElement("p",null,"\u5728 TypeScript \u4e2d\u6709\u5f88\u591a\u5b9a\u4e49\u65b9\u6cd5\uff0c\u5206\u522b\u662f",s.a.createElement("code",null,"\u7c7b\u578b+[]"),",",s.a.createElement("code",null,"\u6570\u7ec4\u6cdb\u578b"),",",s.a.createElement("code",null,"\u63a5\u53e3\u8868\u793a"),",\u6cdb\u578b\u548c\u63a5\u53e3\u6211\u4eec\u4f1a\u5728\u540e\u9762\u8fdb\u884c\u8bb2\u89e3\uff0c\u8fd9\u91cc\u505a\u7b80\u5355\u4e86\u89e3\u5373\u53ef\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"// \u8868\u793a\u65b9\u6cd5\u4e00\uff1a \u7c7b\u578b+[]"),s.a.createElement("span",null,"let arr_a: number[] = [1, 2, 3];"),s.a.createElement("span",null,"let arr_b: string[] = ['a', 'b', 'c'];"),s.a.createElement("span",null,"// \u8868\u793a\u65b9\u6cd5\u4e8c\uff1a\u6570\u7ec4\u6cdb\u578b"),s.a.createElement("span",null,"let arr_c: Array<number> = [1, 2, 3];"),s.a.createElement("span",null,"// \u8868\u793a\u65b9\u6cd5\u4e09\uff1a\u63a5\u53e3"),s.a.createElement("span",null,"interface nArray ","{"),s.a.createElement("span",null,"    [index: number]: number"),s.a.createElement("span",null,"}"),s.a.createElement("span",null,"let arr_d: nArray = [1, 2, 3, 4];"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u5728\u8d4b\u503c\u65f6\uff0c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u503c\u90fd\u5fc5\u987b\u6309\u7167\u5b9a\u4e49\u7684\u7c7b\u578b\u8d4b\u503c\uff0c\u5426\u5219\u4f1a\u62a5\u9519\uff0c\u5982\u679c\u7c7b\u578b\u4e0d\u786e\u5b9a\u53ef\u4ee5\u4f7f\u7528\u7528 ",s.a.createElement("code",null,"any")," \u6765\u8868\u793a\u3002"),s.a.createElement("p",null,"\u6211\u4eec\u5e38\u89c1\u7684",s.a.createElement("strong",null,"\u7c7b\u6570\u7ec4"),"\uff0c\u6bd4\u5982arguments\u7b49,\u5728 TypeScript \u90fd\u6709\u5bf9\u5e94\u7684\u5c01\u88c5\u597d\u7684\u63a5\u53e3,\u5982 IArguments, NodeList, HTMLCollection \u7b49\u76f4\u63a5\u8c03\u7528\u5373\u53ef\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"let args: IArguments = arguments;"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u62d3\u5c55\u4e00\u4e0b",s.a.createElement("strong",null,"\u5143\u7ec4\u7c7b\u578b"),"\uff1a\u5141\u8bb8\u8868\u793a\u4e00\u4e2a\u5df2\u77e5\u5143\u7d20\u6570\u91cf\u548c\u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u5404\u5143\u7d20\u7684\u7c7b\u578b\u4e0d\u5fc5\u76f8\u540c\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"let tuple_x: [string, number];"),s.a.createElement("span",null,"tuple_x = ['10', 10];"),s.a.createElement("span",null,"// tuple_x = ['10', 10];  // error"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u51fd\u6570\u7c7b\u578b"},"\u51fd\u6570\u7c7b\u578b"),s.a.createElement("p",null,"\u51fd\u6570\u5b9a\u4e49\u7684\u65b9\u5f0f\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff0c\u9700\u8981\u6ce8\u610f\u4f20\u53c2\u4ee5\u53ca\u51fd\u6570\u8f93\u51fa\u90fd\u8981\u5bf9\u5176\u8fdb\u884c\u7c7b\u578b\u5b9a\u4e49\uff0c\u540c\u65f6\u4e0d\u80fd\u591a\u8f93\u5165\u6216\u8005\u5c11\u8f93\u5165\u4f20\u53c2\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"// \u51fd\u6570\u58f0\u660e"),s.a.createElement("span",null,"function sum(a: number, b: number): number ","{"),s.a.createElement("span",null,"    return a + b;"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"// \u51fd\u6570\u8868\u8fbe\u5f0f"),s.a.createElement("span",null,"let aSum = function (a: number, b: number): number ","{"),s.a.createElement("span",null,"    return a + b;"),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u6211\u4eec\u5176\u5b9e\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u5b9e\u9645\u4f20\u5165\u7684\u53c2\u6570\u60c5\u51b5\u662f\u4e0d\u53ef\u63a7\u5236\u7684\uff0c\u90a3\u6709\u4ec0\u4e48\u529e\u6cd5\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5417\uff1f\u6211\u4eec\u53ef\u4ee5\u5728\u53c2\u6570\u7684\u540e\u9762\u52a0\u4e00\u4e2a ",s.a.createElement("code",null,"?")," \u6765\u8868\u793a\u8fd9\u4e2a\u53c2\u6570\u662f\u53ef\u9009\u7684\uff0c\u4f46\u662f\u9700\u6ce8\u610f\uff0c\u53ef\u9009\u53c2\u6570\u5fc5\u987b\u8981\u5728\u6240\u6709\u53c2\u6570\u7684\u6700\u540e\u4f4d\u7f6e\u3002\u540c\u65f6\u6211\u4eec\u53ef\u4ee5\u91c7\u7528 ES6 \u7684Rest\u53c2\u6570\u6765\u8868\u793a\u591a\u4f59\u7684\u4f20\u53c2\u3002\u5177\u4f53\u8868\u793a\u5982\u4e0b\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"// \u901a\u8fc7\u5728\u53c2\u6570\u540d\u540e\u9762\u6dfb\u52a0 \uff1f \u6765\u8868\u793a\u53ef\u9009\u53c2\u6570"),s.a.createElement("span",null,"function lessParams(a: number, b?: number) ","{"),s.a.createElement("span",null,"}"),s.a.createElement("span",null,"// \u5728\u53c2\u6570\u5c3e\u4ee5 ...\u53d8\u91cf\u540d \u5f62\u5f0f\u8868\u793a\u66f4\u591a\u53c2\u6570"),s.a.createElement("span",null,"function moreParams(a: number, ...more) ","{"),s.a.createElement("span",null,"}"),s.a.createElement("span",null,"// \u4f20\u9012\u9ed8\u8ba4\u53c2\u6570\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),s.a.createElement("span",null,"function sum(a: number = 0, b: number = 0)","{"),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u540c\u65f6 \u51fd\u6570\u540c\u6837\u53ef\u4ee5\u4f7f\u7528 ",s.a.createElement("code",null,"|")," \u548c ",s.a.createElement("code",null,"any")," \u6765\u5b9a\u4e49\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u3002"),s.a.createElement("h4",{id:"\u7c7b\u578b\u65ad\u8a00"},"\u7c7b\u578b\u65ad\u8a00"),s.a.createElement("p",null,"\u7c7b\u578b\u65ad\u8a00\uff08Type Assertion\uff09\u53ef\u4ee5\u7528\u6765\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u503c\u7684\u7c7b\u578b\u3002\u4e4b\u524d\u63d0\u5230\u8fc7\uff0c\u5f53 TypeScript \u4e0d\u786e\u5b9a\u4e00\u4e2a\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u5230\u5e95\u662f\u54ea\u4e2a\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ea\u80fd\u8bbf\u95ee\u6b64\u8054\u5408\u7c7b\u578b\u7684\u6240\u6709\u7c7b\u578b\u91cc\u5171\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u3002\u4f46\u662f\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u5728\u4e0d\u786e\u5b9a\u7c7b\u578b\u7684\u65f6\u5019\u5c31\u4f7f\u7528\u5176\u4e2d\u7684\u4e00\u4e2a\u5c5e\u6027\u6216\u8005\u65b9\u6cd5\u3002\u6240\u4ee5\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u4f7f\u7528",s.a.createElement("strong",null,"\u7c7b\u578b\u65ad\u8a00"),"\u4e86\u3002\u4f46\u662f\u9700\u6ce8\u610f\uff1a\u7c7b\u578b\u65ad\u8a00\u4e0d\u662f\u7c7b\u578b\u8f6c\u6362\uff0c\u65ad\u8a00\u6210\u4e00\u4e2a\u8054\u5408\u7c7b\u578b\u4e2d\u4e0d\u5b58\u5728\u7684\u7c7b\u578b\u662f\u4e0d\u5141\u8bb8\u7684\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"function getLength(something: string | number): number ","{"),s.a.createElement("span",null,"    if ((<string>something).length) ","{"),s.a.createElement("span",null,"        return (<string>something).length;"),s.a.createElement("span",null,"    } else ","{"),s.a.createElement("span",null,"        return something.toString().length;"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u522b\u540d"),s.a.createElement("p",null,"\u4f7f\u7528type\u6765\u521b\u5efa\u7c7b\u578b\u522b\u540d\uff0c\u7c7b\u578b\u522b\u540d\u5e38\u7528\u4e8e\u8054\u5408\u7c7b\u578b\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"type StringType = string;"),s.a.createElement("span",null,"type FunctionType = () => string;"),s.a.createElement("span",null,"type NameOrResolver = StringType | FunctionType;"),s.a.createElement("span",null,"function getName(n: NameOrResolver): StringType ","{"),s.a.createElement("span",null,"    if (typeof n === 'string') ","{"),s.a.createElement("span",null,"        return n;"),s.a.createElement("span",null,"    } else ","{"),s.a.createElement("span",null,"        return n();"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u6cdb\u578b"},"\u6cdb\u578b"),s.a.createElement("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u4f7f\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e0e\u4f20\u5165\u53c2\u6570\u7684\u7c7b\u578b\u662f\u76f8\u540c\u7684\uff0c\u8fd9\u91cc\u5c31\u5f15\u5165\u4e86",s.a.createElement("strong",null,"\u7c7b\u578b\u53d8\u91cf"),"\u6765\u8868\u793a\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"function identity<T>(arg: T): T ","{"),s.a.createElement("span",null,"    return arg;"),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u5185\u7f6e\u5bf9\u8c61"},"\u5185\u7f6e\u5bf9\u8c61"),s.a.createElement("p",null,"\u6211\u4eec\u77e5\u9053 JavaScript \u4e2d\u6709\u5f88\u591a\u7684\u5185\u7f6e\u5bf9\u8c61\u53ef\u4f9b\u4f7f\u7528\uff0c\u90a3\u4e48\u5728 TypeScript \u4e2d\u5462\uff0c\u53ef\u4ee5\u76f4\u63a5\u5f53\u505a\u5b9a\u4e49\u597d\u4e86\u7684\u7c7b\u578b\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"let in_b: Boolean = new Boolean(1);"),s.a.createElement("span",null,"let in_e: Error = new Error('Error occurred');"),s.a.createElement("span",null,"let in_d: Date = new Date();"),s.a.createElement("span",null,"let in_r: RegExp = /[a-z]/;"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u5bf9\u4e8e DOM \u548c BOM\u5185\u7f6e\u5bf9\u8c61\uff0cTypescript \u4e2d\u5bf9\u5e94\u4e86 ",s.a.createElement("code",null,"Document"),",",s.a.createElement("code",null,"HTMLElement"),",",s.a.createElement("code",null,"Event"),",",s.a.createElement("code",null,"NodeList"),",",s.a.createElement("code",null,"MouseEvent"),"\u7b49\u3002\u4e3e\u4f8b\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"let body: HTMLElement = document.body;"),s.a.createElement("span",null,"let allDiv: NodeList = document.querySelectorAll('div');"),s.a.createElement("span",null,"document.addEventListener('click', function(e: MouseEvent) ","{"),s.a.createElement("span",null,"  // Do something"),s.a.createElement("span",null,"});"),s.a.createElement("span",null))),s.a.createElement("h3",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),s.a.createElement("p",null,"\u5728\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\u4e2d\uff0c\u63a5\u53e3\uff08Interfaces\uff09\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u5b83\u662f\u5bf9\u884c\u4e3a\u7684\u62bd\u8c61\uff0c\u800c\u5177\u4f53\u5982\u4f55\u884c\u52a8\u9700\u8981\u7531\u7c7b\uff08classes\uff09\u53bb\u5b9e\u73b0\uff08implements\uff09\u3002TypeScript\u7684\u6838\u5fc3\u539f\u5219\u4e4b\u4e00\u662f\u5bf9\u503c\u6240\u5177\u6709\u7684\u7ed3\u6784\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u3002 \u5b83\u6709\u65f6\u88ab\u79f0\u505a\u201c\u9e2d\u5f0f\u8fa8\u578b\u6cd5\u201d\u6216\u201c\u7ed3\u6784\u6027\u5b50\u7c7b\u578b\u5316\u201d\u3002 \u5728TypeScript\u91cc\uff0c\u63a5\u53e3\u7684\u4f5c\u7528\u5c31\u662f\u4e3a\u8fd9\u4e9b\u7c7b\u578b\u547d\u540d\u548c\u4e3a\u4f60\u7684\u4ee3\u7801\u6216\u7b2c\u4e09\u65b9\u4ee3\u7801\u5b9a\u4e49\u5951\u7ea6\u3002\u540c\u65f6\u5728\u63a5\u53e3\u4e2d\u53ef\u4ee5\u8bbe\u7f6e \u53ef\u9009\u5c5e\u6027\u3001\u4efb\u610f\u5c5e\u6027\u3001\u53ea\u8bfb\u5c5e\u6027\u7b49\u3002",s.a.createElement("br",null),"\u4e3e\u4e2a\ud83c\udf30\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"interface Person ","{"),s.a.createElement("span",null,"    readonly id: number, // \u53ea\u8bfb\u5c5e\u6027\uff0c\u53ea\u80fd\u5728\u521b\u5efa\u7684\u65f6\u5019\u88ab\u590d\u5236 "),s.a.createElement("span",null,"    name: string,"),s.a.createElement("span",null,"    age: number,"),s.a.createElement("span",null,"    height?: number, // xx? \u8868\u793a\u5c5e\u6027\u53ef\u9009"),s.a.createElement("span",null,"    [propName: string]: any // \u4e00\u65e6\u5b9a\u4e49\u4e86\u4efb\u610f\u5c5e\u6027\uff0c\u90a3\u4e48\u786e\u5b9a\u5c5e\u6027\u548c\u53ef\u9009\u5c5e\u6027\u90fd\u5fc5\u987b\u662f\u5b83\u7684\u5b50\u5c5e\u6027\uff1a"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"let tom: Person = ","{"),s.a.createElement("span",null,"    name: 'honghui',"),s.a.createElement("span",null,"    age: 16,"),s.a.createElement("span",null,"    height: 175,"),s.a.createElement("span",null,"    weight: 70"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"// tom.id = 001  // Error"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u548c\u7c7b\u4e00\u6837\uff0c\u63a5\u53e3\u4e5f\u662f\u53ef\u4ee5\u7ee7\u627f\u7684\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"// extends \u7c7b\u7684\u7ee7\u627f"),s.a.createElement("span",null,"class Cat extends Animal ","{"),s.a.createElement("span",null,"    constructor(name) ","{"),s.a.createElement("span",null,"        super(name);"),s.a.createElement("span",null,"        // this.cat = 'meow';"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"    sayHi() ","{"),s.a.createElement("span",null,"        return `Meow~ $","{","super.sayHi()}`"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"let tomCat = new Cat('tom');"),s.a.createElement("span",null,"console.log(tomCat.sayHi()) // Meow~ My name is tom"),s.a.createElement("span",null))),s.a.createElement("h3",{id:"\u7c7b"},"\u7c7b"),s.a.createElement("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7c7b\u7684\u7b80\u6613Demo\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"class Animal ","{"),s.a.createElement("span",null,"    name: string;"),s.a.createElement("span",null,"    constructor(name) ","{"),s.a.createElement("span",null,"        this.name = name;"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"    sayHi() ","{"),s.a.createElement("span",null,"        return `My name is $","{","this.name}`"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null,"let cat = new Animal('cat');"),s.a.createElement("span",null,"console.log(cat.sayHi()) // My name is cat"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u4e0b\u9762\u8bb2\u8bb2\u51e0\u4e2a\u5173\u4e8e\u7c7b\u7684\u77e5\u8bc6\u70b9\uff1a",s.a.createElement("br",null),"* ",s.a.createElement("strong",null,"\u7ee7\u627f")," ",s.a.createElement("br",null),"    \u57fa\u4e8e\u7c7b\u7684\u7a0b\u5e8f\u8bbe\u8ba1\u4e2d\u4e00\u79cd\u6700\u57fa\u672c\u7684\u6a21\u5f0f\u662f\u5141\u8bb8\u4f7f\u7528\u7ee7\u627f\u6765\u6269\u5c55\u73b0\u6709\u7684\u7c7b\u3002\u4f7f\u7528 ",s.a.createElement("code",null,"extends")," \u5173\u952e\u5b57\u5b9e\u73b0\u7ee7\u627f\u3002 ",s.a.createElement("br",null),"* ",s.a.createElement("strong",null,"\u4fee\u9970\u7b26")," ",s.a.createElement("br",null),"    1. ",s.a.createElement("strong",null,"public"),"\uff1a typescript \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6210\u5458\u90fd\u662f public \u53ef\u8bbf\u95ee\u7684\u3002",s.a.createElement("br",null),"    2. ",s.a.createElement("strong",null,"private"),"\uff1a \u5f53\u6210\u5458\u88ab\u6807\u8bb0\u4e3a private \u65f6\uff0c\u5b83\u5c31\u4e0d\u80fd\u5728\u58f0\u660e\u5b83\u7684\u7c7b\u7684\u5916\u90e8\u8bbf\u95ee\u3002",s.a.createElement("br",null),"    3. ",s.a.createElement("strong",null,"protected"),"\uff1a protected \u4fee\u9970\u7b26\u4e0e private \u7684\u533a\u522b\u662f protected \u6210\u5458\u5728\u6d3e\u751f\u7c7b\u4e2d\u4ecd\u7136\u53ef\u4ee5\u8bbf\u95ee\u3002",s.a.createElement("br",null),"    4. ",s.a.createElement("strong",null,"readonly"),"\uff1a readonly \u5173\u952e\u5b57\u5c06\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u53ea\u8bfb\u7684\u3002 \u53ea\u8bfb\u5c5e\u6027\u5fc5\u987b\u5728\u58f0\u660e\u65f6\u6216\u6784\u9020\u51fd\u6570\u91cc\u88ab\u521d\u59cb\u5316\u3002"),s.a.createElement("p",null,"\u5177\u4f53\u5b9e\u73b0\u53ef\u4ee5\u770b\u5982\u4e0bdemo\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"class Animal ","{"),s.a.createElement("span",null,"    protected name: string;  // \u6d3e\u751f\u7c7b\u4e2d\u53ef\u8bbf\u95ee"),s.a.createElement("span",null,"    constructor(name) ","{"),s.a.createElement("span",null,"        this.name = name;"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"class Cat extends Animal ","{"),s.a.createElement("span",null,"    public food: string;"),s.a.createElement("span",null,"    private secret:string;//\u79c1\u6709\u5c5e\u6027\uff0c\u5916\u90e8\u4e0d\u80fd\u8bbf\u95ee"),s.a.createElement("span",null,"    constructor(name) ","{"),s.a.createElement("span",null,"        super(name);"),s.a.createElement("span",null,"        this.food = 'fish';"),s.a.createElement("span",null,"        this.secret = 'I love dog'"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"    sayHi() ","{"),s.a.createElement("span",null,"        return `Meow~ $","{","super.sayHi()}`"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"let tomCat = new Cat('tom');"),s.a.createElement("span",null,"console.log(tomCat.sayHi()) // Meow~ My name is tom"),s.a.createElement("span",null,'console.log("cat\'s food is " + tomCat.food)'),s.a.createElement("span",null,"// console.log(tomCat.secret); // Error"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u540c\u65f6\uff0cTypeScript\u652f\u6301\u901a\u8fc7 ",s.a.createElement("strong",null,"getters/setters")," \u6765\u622a\u53d6\u5bf9\u5bf9\u8c61\u6210\u5458\u7684\u8bbf\u95ee\uff0c\u53ef\u4ee5\u6709\u6548\u7684\u63a7\u5236\u5bf9\u5bf9\u8c61\u6210\u5458\u7684\u8bbf\u95ee\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"class Employee ","{"),s.a.createElement("span",null,"    private _fullName: string;"),s.a.createElement("span",null),s.a.createElement("span",null,"    get fullName(): string ","{"),s.a.createElement("span",null,"        return this._fullName"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null),s.a.createElement("span",null,"    set fullName(newName: string) ","{"),s.a.createElement("span",null,"        if (newName != 'admin') ","{"),s.a.createElement("span",null,"            this._fullName = newName"),s.a.createElement("span",null,"        } else ","{"),s.a.createElement("span",null,"            console.log('NewName is Invalid')"),s.a.createElement("span",null,"        }"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"let employee = new Employee();"),s.a.createElement("span",null,"employee.fullName = 'danny';"),s.a.createElement("span",null,"console.log(employee.fullName) // danny"),s.a.createElement("span",null,"employee.fullName = 'admin' // NewName is Invalid"),s.a.createElement("span",null))),s.a.createElement("h3",{id:"\u7c7b\u4e0e\u63a5\u53e3\u7684\u7ed3\u5408"},"\u7c7b\u4e0e\u63a5\u53e3\u7684\u7ed3\u5408"),s.a.createElement("p",null,">"),s.a.createElement("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:"https://ts.xcatliu.com/"},"TypeScript\u5165\u95e8\u6559\u7a0b")," ",s.a.createElement("br",null),s.a.createElement("a",{target:"_blank",href:"https://www.tslang.cn/docs/home.html"},"TypeScript\u6587\u6863"),s.a.createElement("br",null),s.a.createElement("a",{target:"_blank",href:"https://mp.weixin.qq.com/s/JYHme1lZHFro9S1Qd_7pGQ"},"\u4e00\u7bc7\u6734\u5b9e\u7684\u6587\u7ae0\u5e26\u634b\u5b8cTypeScript\u57fa\u7840"))))}}]),n}(s.a.Component)}}]);
//# sourceMappingURL=9.2cc9da49.chunk.js.map