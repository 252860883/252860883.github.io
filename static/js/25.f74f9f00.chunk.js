(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{133:function(e,l,a){},135:function(e,l,a){"use strict";a.d(l,"a",function(){return m});var t=a(4),n=a(5),r=a(7),c=a(6),u=a(8),o=a(0),p=a.n(o),m=(a(136),function(e){function l(){return Object(t.a)(this,l),Object(r.a)(this,Object(c.a)(l).apply(this,arguments))}return Object(u.a)(l,e),Object(n.a)(l,[{key:"componentDidMount",value:function(){}},{key:"clickPosBtn",value:function(e){var l=document.getElementById(e);window.scrollTo({top:l.offsetTop-10,left:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"headerLink"},p.a.createElement("div",{className:"content"},p.a.createElement("div",{className:"real-content"},p.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(l,a){return p.a.createElement("span",{className:"a"+l.level,key:a,onClick:e.clickPosBtn.bind(e,l.title)},l.title)}))))}}]),l}(p.a.Component))},136:function(e,l,a){},64:function(e,l,a){"use strict";a.r(l),a.d(l,"default",function(){return E});var t=a(4),n=a(5),r=a(7),c=a(6),u=a(8),o=a(0),p=a.n(o),m=(a(133),a(135)),E=function(e){function l(){var e;return Object(t.a)(this,l),(e=Object(r.a)(this,Object(c.a)(l).call(this))).state={headerLink:[{level:"h3",title:"Array.prototype.map"},{level:"h3",title:"Array.prototype.forEach"},{level:"h3",title:"Array.prototype.Filter"},{level:"h3",title:"Array.prototype.Sort"},{level:"h3",title:"Array.prototype.Some"},{level:"h3",title:"Array.prototype.Every"},{level:"h3",title:"Array.prototype.FindIndex"},{level:"h3",title:"Array.prototype.Find"},{level:"h3",title:"Array.prototype.Reduce"},{level:"h3",title:"Array.prototype.reduceRight"},{level:"h3",title:"Array.prototype.includes(ES6\u65b0\u589e)"},{level:"h3",title:"Array.isArray(ES6\u65b0\u589e)"},{level:"h3",title:"Array.prototype.fill(ES6\u65b0\u589e)"},{level:"h3",title:"Array.prototype.entries/keys/values(ES6\u65b0\u589e)"},{level:"h3",title:"Array.of(ES6\u65b0\u589e)"},{level:"h3",title:"Array.from"}]},e}return Object(u.a)(l,e),Object(n.a)(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(m.a,{headerLink:this.state.headerLink}),p.a.createElement("div",{className:"article"},p.a.createElement("div",{className:"title-content"},p.a.createElement("h1",{className:"title"},"\u5173\u4e8earray\u7684\u5e38\u7528\u7684\u51e0\u4e2aAPI")),p.a.createElement("h3",{id:"Array.prototype.map"},"Array.prototype.map"),p.a.createElement("ul",null,p.a.createElement("li",null,"\u65b0\u5efa\u4e00\u4e2a\u6570\u7ec4\uff0c\u9700\u8981\u6709\u627f\u8f7d\u5bf9\u8c61,\u539f\u59cb\u6570\u7ec4\u5728\u8c03\u7528\u5b83\u540e\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316"),p.a.createElement("li",null,"\u8be5\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u8c03\u7528\u4e00\u4e2a\u63d0\u4f9b\u7684\u51fd\u6570\u540e\u8fd4\u56de\u7ed3\u679c,\u5426\u5219\u8fd4\u56de undefined")),p.a.createElement("blockquote",null,p.a.createElement("p",null,"\u4e0d\u80fd\u5728 callbackfn \u5185\u8bbe\u7f6e",p.a.createElement("code",null,"break"),"\u6765\u8df3\u51fa\u5faa\u73af\u7684\u539f\u56e0\u662f\uff0ccallbackfn \u5e76\u4e0d\u662f\u5faa\u73af\u4f53\uff0cforEach \u7b49\u5176\u4ed6\u65b9\u6cd5\u540c\u7406\u4e0d\u80fd\u8df3\u51fa\u5faa\u73af")),p.a.createElement("h3",{id:"Array.prototype.forEach"},"Array.prototype.forEach"),p.a.createElement("ul",null,p.a.createElement("li",null,"\u53ef\u4ee5\u6539\u53d8\u6570\u7ec4\u81ea\u8eab\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\uff1b"),p.a.createElement("li",null,"\u4e2d\u9014\u4e0d\u80fd\u7528\u5e38\u89c4\u64cd\u4f5c\u8df3\u51fa\u5faa\u73af\uff0c\u53ef\u4ee5\u7528\u629b\u51fa\u5f02\u5e38\uff08try/catch\uff09\u7684\u65b9\u5f0f\uff0c\u4f46\u4e0d\u63a8\u8350\u8fd9\u6837\u505a")),p.a.createElement("h3",{id:"Array.prototype.Filter"},"Array.prototype.Filter"),p.a.createElement("ul",null,p.a.createElement("li",null,"\u548c map \u5f88\u50cf\uff0c\u4e5f\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u6570\u7ec4\uff0c\u65b0\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u662f\u7b5b\u9009\u51fa\u6765\u7684\u7b26\u5408\u6761\u4ef6\u7684\u6240\u6709\u5bf9\u8c61\u3002")),p.a.createElement("h3",{id:"Array.prototype.Sort"},"Array.prototype.Sort"),p.a.createElement("ul",null,p.a.createElement("li",null,"\u9ed8\u8ba4\u6309\u7167\u5b57\u6bcd\u5347\u5e8f\u6392\u5217"),p.a.createElement("li",null,"\u4e0e\u5176\u4ed6\u65b9\u6cd5\u4e0d\u540c\uff0c\u4ed6\u76f4\u63a5\u6539\u53d8\u539f\u59cb\u6570\u7ec4"),p.a.createElement("li",null,"sort()\u7528\u4e8e\u5bf9\u6570\u7ec4\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u3002\u6392\u5e8f\u987a\u5e8f\u53ef\u4ee5\u662f\u5b57\u6bcd\u6216\u6570\u5b57\uff0c\u5e76\u6309\u5347\u5e8f\u6216\u964d\u5e8f\u3002"),p.a.createElement("li",null,"\u5982\u679c\u60f3\u6309\u7167\u5176\u4ed6\u6807\u51c6\u8fdb\u884c\u6392\u5e8f\uff0c\u5c31\u9700\u63d0\u4f9b\u6bd4\u8f83\u51fd\u6570compareFunction(a,b)")),p.a.createElement("h3",{id:"Array.prototype.Some"},"Array.prototype.Some"),p.a.createElement("ul",null,p.a.createElement("li",null,"\u7528\u4e8e\u68c0\u67e5\u6570\u7ec4\u4e2d\u662f\u5426\u6709\u67d0\u4e9b\u7b26\u5408\u6761\u4ef6"),p.a.createElement("li",null,"\u53ea\u8981\u6709\u4e00\u4e2a\u6ee1\u8db3\u5373\u8fd4\u56detrue\uff0c\u4e4b\u540e\u7684\u4e0d\u518d\u6267\u884c"),p.a.createElement("li",null,"\u53ea\u662f\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u7c7b\u578b\u7684\u503c")),p.a.createElement("h3",{id:"Array.prototype.Every"},"Array.prototype.Every"),p.a.createElement("ul",null,p.a.createElement("li",null,"\u548c some \u7c7b\u4f3c\uff0c\u53ea\u8fd4\u56de\u5e03\u5c14\u7c7b\u578b"),p.a.createElement("li",null,"\u5224\u65ad\u6570\u7ec4\u4e2d\u6240\u6709\u7684\u503c\u662f\u5426\u90fd\u6ee1\u8db3")),p.a.createElement("h3",{id:"Array.prototype.FindIndex"},"Array.prototype.FindIndex"),p.a.createElement("ul",null,p.a.createElement("li",null,"\u7ed3\u6784\u548cmap\u7c7b\u4f3c\uff0c\u83b7\u53d6\u5230\u6ee1\u8db3\u6761\u4ef6\u7684\u7d22\u5f15\u503c"),p.a.createElement("li",null,"IE 11 \u53ca\u66f4\u65e9\u7248\u672c\u4e0d\u652f\u6301findIndex()\xa0\u65b9\u6cd5\uff0c\u5982\u679c\u5bf9\u6d4f\u89c8\u5668\u517c\u5bb9\u6709\u8981\u6c42\uff0c\u90a3\u5c31\u7528Lodash\u7684\xa0_.findIndex()")),p.a.createElement("h3",{id:"Array.prototype.Find"},"Array.prototype.Find"),p.a.createElement("ul",null,p.a.createElement("li",null,"\u548csome\u7c7b\u4f3c\uff0c\u6709\u4e00\u4e2a\u6ee1\u8db3\u7684\u5143\u7d20\u5c31\u4f1a\u8fd4\u56de"),p.a.createElement("li",null,"IE 11 \u53ca\u66f4\u65e9\u7248\u672c\u4e0d\u652f\u6301")),p.a.createElement("h3",{id:"Array.prototype.Reduce"},"Array.prototype.Reduce"),p.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u4e2a\u7531\u60a8\u63d0\u4f9b\u7684reducer\u51fd\u6570(\u5347\u5e8f\u6267\u884c)\uff0c\u5c06\u5176\u7ed3\u679c\u6c47\u603b\u4e3a\u5355\u4e2a\u8fd4\u56de\u503c\u3002reducer\u51fd\u6570\u5bf9\u5e94\u56db\u4e2a\u4f20\u53c2\uff0c\u4f9d\u6b21\u662f\uff1a",p.a.createElement("code",null,"accumulator \u7d2f\u8ba1\u5668"),", ",p.a.createElement("code",null,"currentValue \u5f53\u524d\u503c"),", ",p.a.createElement("code",null,"currentIndex \u5f53\u524d\u7d22\u5f15"),", ",p.a.createElement("code",null,"array \u6570\u7ec4"),"."),p.a.createElement("pre",null,p.a.createElement("code",null,p.a.createElement("span",null),p.a.createElement("span",null),p.a.createElement("span",null,"const array1 = [1, 2, 3, 4];"),p.a.createElement("span",null,"const reducer = (accumulator, currentValue) => accumulator + currentValue;"),p.a.createElement("span",null),p.a.createElement("span",null,"// 1 + 2 + 3 + 4"),p.a.createElement("span",null,"console.log(array*reduce(reducer));"),p.a.createElement("span",null,"// expected output: 10"),p.a.createElement("span",null))),p.a.createElement("p",null,"\u26a0\ufe0f\u9700\u8981\u6ce8\u610f\uff0c\u7b2c\u4e00\u6b21\u5faa\u73af\u65f6 accumulator \u4e3a\u6570\u7ec4\u7b2c\u4e00\u4e2a\u503c\uff0ccurrentValue \u4e3a\u6570\u7ec4\u7b2c\u4e8c\u4e2a\u503c\u3002"),p.a.createElement("h3",{id:"Array.prototype.reduceRight"},"Array.prototype.reduceRight"),p.a.createElement("p",null,"\u548c reduce \u4f5c\u7528\u4e00\u6837\uff0c\u533a\u522b\u662f\u4ece\u6570\u7ec4\u6700\u53f3\u5f00\u59cb\u964d\u5e8f\u6267\u884c\u3002"),p.a.createElement("h3",{id:"Array.prototype.includes(ES6\u65b0\u589e)"},"Array.prototype.includes(ES6\u65b0\u589e)"),p.a.createElement("p",null,"\u7528\u6765\u5224\u65ad\u4e00\u4e2a\u6570\u7ec4\u662f\u5426\u5305\u542b\u4e00\u4e2a\u6307\u5b9a\u7684\u503c\uff0c\u6839\u636e\u60c5\u51b5\uff0c\u5982\u679c\u5305\u542b\u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56defalse\u3002",p.a.createElement("br",null),"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u8868\u793a\u4ece\u7b2c\u51e0\u4e2a\u7d22\u5f15\u503c\u5f00\u59cb\u67e5\u627e\u3002"),p.a.createElement("pre",null,p.a.createElement("code",null,p.a.createElement("span",null),p.a.createElement("span",null,"[1,2,3].includes(3) "),p.a.createElement("span",null,"// true"),p.a.createElement("span",null,"[1,2,3].includes(4) "),p.a.createElement("span",null,"// false"),p.a.createElement("span",null),p.a.createElement("span",null),p.a.createElement("span",null,"[1,2,3,4].includes(1,1)"),p.a.createElement("span",null,"// false"),p.a.createElement("span",null))),p.a.createElement("h3",{id:"Array.isArray(ES6\u65b0\u589e)"},"Array.isArray(ES6\u65b0\u589e)"),p.a.createElement("p",null,"\u7528\u6765\u68c0\u6d4b\u503c\u662f\u5426\u662f\u4e00\u4e2aArray\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u7c7b\u578b\u7684\u503c\u3002 \u76f8\u8f83\u4e8e ",p.a.createElement("code",null,"instanceof"),", Array.isArray \u53ef\u4ee5\u68c0\u6d4b iframes\u3002"),p.a.createElement("pre",null,p.a.createElement("code",null,p.a.createElement("span",null),p.a.createElement("span",null,"Array.isArray([1, 2, 3]);  "),p.a.createElement("span",null,"// true"),p.a.createElement("span",null,"Array.isArray(","{","foo: 123}); "),p.a.createElement("span",null,"// false"),p.a.createElement("span",null))),p.a.createElement("h3",{id:"Array.prototype.fill(ES6\u65b0\u589e)"},"Array.prototype.fill(ES6\u65b0\u589e)"),p.a.createElement("p",null,"\u7528\u4e00\u4e2a\u56fa\u5b9a\u503c\u586b\u5145\u4e00\u4e2a\u6570\u7ec4\u4e2d\u4ece\u8d77\u59cb\u7d22\u5f15\u5230\u7ec8\u6b62\u7d22\u5f15\u5185\u7684\u5168\u90e8\u5143\u7d20\u3002\u4e0d\u5305\u62ec\u7ec8\u6b62\u7d22\u5f15\u3002"),p.a.createElement("pre",null,p.a.createElement("code",null,p.a.createElement("span",null),p.a.createElement("span",null,"[0,1,2,3,4,5,6].fill('*',1,5)"),p.a.createElement("span",null,'// [0, "*", "*", "*", "*", 5, 6]'),p.a.createElement("span",null),p.a.createElement("span",null,"[0,1,2,3,4,5,6].fill('*')"),p.a.createElement("span",null,'// [0, "*", "*", "*", "*","*","*"]'),p.a.createElement("span",null))),p.a.createElement("h3",{id:"Array.prototype.entries/keys/values(ES6\u65b0\u589e)"},"Array.prototype.entries/keys/values(ES6\u65b0\u589e)"),p.a.createElement("pre",null,p.a.createElement("code",null,p.a.createElement("span",null),p.a.createElement("span",null,"let arr=['a', 'b', 'c']"),p.a.createElement("span",null),p.a.createElement("span",null,"//\u53d6\u952e"),p.a.createElement("span",null,"for(let key of arr.keys())","{","}  "),p.a.createElement("span",null),p.a.createElement("span",null,"//\u53d6\u503c\uff1b\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\uff0c\u6709\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u751a\u81f3\u8c37\u6b4c"),p.a.createElement("span",null,"for(let value of arr.values())","{","}         "),p.a.createElement("span",null),p.a.createElement("span",null,"//\u90fd\u53d6"),p.a.createElement("span",null,"for(let [key, value] of arr.entries())","{","}      "),p.a.createElement("span",null))),p.a.createElement("h3",{id:"Array.of(ES6\u65b0\u589e)"},"Array.of(ES6\u65b0\u589e)"),p.a.createElement("p",null,"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u7684\u65b0\u6570\u7ec4\u5b9e\u4f8b\uff0c\u800c\u4e0d\u8003\u8651\u53c2\u6570\u7684\u6570\u91cf\u6216\u7c7b\u578b\u3002"),p.a.createElement("pre",null,p.a.createElement("code",null,p.a.createElement("span",null),p.a.createElement("span",null,"Array.of(7);       // [7] "),p.a.createElement("span",null,"Array.of(1, 2, 3); // [1, 2, 3]"),p.a.createElement("span",null),p.a.createElement("span",null,"Array(7);          // [ , , , , , , ]"),p.a.createElement("span",null,"Array(1, 2, 3);    // [1, 2, 3]"),p.a.createElement("span",null))),p.a.createElement("h3",{id:"Array.from"},"Array.from"),p.a.createElement("p",null,"\u4ece\u4e00\u4e2a\u7c7b\u4f3c\u6570\u7ec4\u6216\u53ef\u8fed\u4ee3\u5bf9\u8c61\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\uff0c\u6d45\u62f7\u8d1d\u7684\u6570\u7ec4\u5b9e\u4f8b"),p.a.createElement("pre",null,p.a.createElement("code",null,p.a.createElement("span",null),p.a.createElement("span",null,"Array.from('foo')"),p.a.createElement("span",null,'// output: Array ["f", "o", "o"]'),p.a.createElement("span",null),p.a.createElement("span",null,"Array.from([1, 2, 3], x => x + x)"),p.a.createElement("span",null,"// output: Array [2, 4, 6]"),p.a.createElement("span",null),p.a.createElement("span",null,"Array.from(","{","length: 10}, (_, i) => i)"),p.a.createElement("span",null,"// output: Array [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"),p.a.createElement("span",null),p.a.createElement("span",null)))))}}]),l}(p.a.Component)}}]);
//# sourceMappingURL=25.f74f9f00.chunk.js.map