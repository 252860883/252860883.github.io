(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{100:function(e,a,l){"use strict";l.d(a,"a",function(){return i});var n=l(4),t=l(5),r=l(7),c=l(6),u=l(8),m=l(0),s=l.n(m),i=(l(101),function(e){function a(){var e,l;Object(n.a)(this,a);for(var t=arguments.length,u=new Array(t),m=0;m<t;m++)u[m]=arguments[m];return(l=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(u)))).clickPosBtn=function(e){var a=document.getElementById(e);window.scrollTo({top:a.offsetTop-10,left:0,behavior:"smooth"})},l}return Object(u.a)(a,e),Object(t.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"headerLink"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"real-content"},s.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(a,l){return s.a.createElement("span",{className:"a"+a.level,key:l,onClick:function(){return e.clickPosBtn(a.title)}},a.title)}))))}}]),a}(s.a.Component))},101:function(e,a,l){},70:function(e,a,l){"use strict";l.r(a),l.d(a,"default",function(){return p});var n=l(4),t=l(5),r=l(7),c=l(6),u=l(8),m=l(0),s=l.n(m),i=(l(98),l(100)),p=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).state={headerLink:[{level:"h2",title:"Bind\u65b9\u6cd5"},{level:"h4",title:"bind() \u5141\u8bb8\u6211\u4eec\u975e\u5e38\u7b80\u5355\u7684\u5728\u51fd\u6570\u6216\u8005\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\u7ed1\u5b9a this \u5230\u6307\u5b9a\u5bf9\u8c61\u4e0a"},{level:"h4",title:"\u6a21\u62df\u5b9e\u73b0\u67ef\u91cc\u5316"},{level:"h3",title:"Apply \u548c Call\u65b9\u6cd5"},{level:"h4",title:"apply \u548c call \u4e24\u8005\u53ea\u662f\u5728\u4f20\u53c2\u5f62\u5f0f\u4e0a\u4e0d\u4e00\u6837"},{level:"h4",title:"\u914d\u5408 argument \u573a\u666f"},{level:"h4",title:"\u53c2\u6570\u53ef\u53d8\u573a\u666f"},{level:"h2",title:"\u603b\u7ed3"}]},e}return Object(u.a)(a,e),Object(t.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement(m.Fragment,null,s.a.createElement(i.a,{headerLink:this.state.headerLink}),s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"title-content"},s.a.createElement("h1",{className:"title"},"\u8bf4\u4e86\u591a\u5c11\u904d\u7684Bind\u3001Call\u3001Apply")),s.a.createElement("blockquote",null,s.a.createElement("p",null,"\u6b63\u5982\u6807\u9898\u6240\u8bf4\uff0c\u8bf4\u4e86\u591a\u5c11\u904d\uff01\u591a\u5c11\u904d\uff01\u591a\u5c11\u904d\uff01\u5509\uff0c\u6240\u4ee5\u6709\u4e86\u8fd9\u8fb9\u590d\u4e60\u6587\uff0c\u7b97\u662f\u7acb\u4e0b\u8840\u5fd7\u5427\u3002")),s.a.createElement("p",null,s.a.createElement("code",null,"bind"),",",s.a.createElement("code",null,"call"),",",s.a.createElement("code",null,"apply"),"\u4e09\u4e2a\u65b9\u6cd5\u90fd\u662f\u7528\u6765\u5c06\u4e00\u4e2a\u6307\u5b9a\u7684 this \u6765\u8c03\u7528\u6216\u8005\u521b\u5efa\u4e00\u4e2a\u51fd\u6570\u3002"),s.a.createElement("h2",{id:"Bind\u65b9\u6cd5"},"Bind\u65b9\u6cd5"),s.a.createElement("h4",{id:"bind() \u5141\u8bb8\u6211\u4eec\u975e\u5e38\u7b80\u5355\u7684\u5728\u51fd\u6570\u6216\u8005\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\u7ed1\u5b9a this \u5230\u6307\u5b9a\u5bf9\u8c61\u4e0a"},"bind() \u5141\u8bb8\u6211\u4eec\u975e\u5e38\u7b80\u5355\u7684\u5728\u51fd\u6570\u6216\u8005\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\u7ed1\u5b9a this \u5230\u6307\u5b9a\u5bf9\u8c61\u4e0a"),s.a.createElement("p",null,"eg:"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"var user = ","{"),s.a.createElement("span",null,"  data: 666,"),s.a.createElement("span",null,"  showData: function (other) ","{"),s.a.createElement("span",null,"    console.log(this.data + other)"),s.a.createElement("span",null,"  }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"var user2 = user.showData"),s.a.createElement("span",null,"user2() // undefined,\u6307\u5411\u5168\u5c40\u51fd\u6570"),s.a.createElement("span",null,"var user3 = user.showData.bind(user)"),s.a.createElement("span",null,"user3('777') // 666777"),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u6a21\u62df\u5b9e\u73b0\u67ef\u91cc\u5316"},"\u6a21\u62df\u5b9e\u73b0\u67ef\u91cc\u5316"),s.a.createElement("blockquote",null,s.a.createElement("p",null,"tip:\u67ef\u91cc\u5316\uff1a\u51fd\u6570\u5141\u8bb8\u5c06\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c\u8fdb\u884c\u8fd4\u56de")),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"var user = ","{"),s.a.createElement("span",null,"  data: 666,"),s.a.createElement("span",null,"  currying: function (x, y) ","{"),s.a.createElement("span",null,"    console.log(x + '+' + y + '=' + (x + y))"),s.a.createElement("span",null,"  }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null,"var curry = user.currying.bind(user, 5)"),s.a.createElement("span",null,"curry(6) // 5+6=11"),s.a.createElement("span",null))),s.a.createElement("h3",{id:"Apply \u548c Call\u65b9\u6cd5"},"Apply \u548c Call\u65b9\u6cd5"),s.a.createElement("h4",{id:"apply \u548c call \u4e24\u8005\u53ea\u662f\u5728\u4f20\u53c2\u5f62\u5f0f\u4e0a\u4e0d\u4e00\u6837"},"apply \u548c call \u4e24\u8005\u53ea\u662f\u5728\u4f20\u53c2\u5f62\u5f0f\u4e0a\u4e0d\u4e00\u6837"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"var person = ","{"),s.a.createElement("span",null,'  name: "LiMing",'),s.a.createElement("span",null,"  callName: function (a, b) ","{"),s.a.createElement("span",null,'    console.log(this.name + " is " + a + " and " + b)'),s.a.createElement("span",null,"  }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null,"var callName = person.callName"),s.a.createElement("span",null,"callName('people', \"goodman\") // undefined is people and goodman"),s.a.createElement("span",null,"callName.call(person, 'dog', 'boy')  // LiMing is dog and boy"),s.a.createElement("span",null,"callName.apply(person, ['cat', 'girl']) // LiMing is cat and girl"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u914d\u5408 argument \u573a\u666f"},"\u914d\u5408 argument \u573a\u666f"),s.a.createElement("blockquote",null,s.a.createElement("p",null,"\u56e0\u4e3a argument \u662f\u4e00\u4e2a\u8fd1\u4f3c\u6570\u7ec4\u7684\u7ed3\u6784\uff0c\u4f46\u662f\u5e76\u4e0d\u662f\u6570\u7ec4\uff0c\u65e0\u6cd5\u4f7f\u7528array\u65b9\u6cd5\uff0c\u8fd9\u5c31\u5f15\u5165\u4e86\u6211\u4eec\u7684 apply\u65b9\u6cd5")),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"// argument\u573a\u666f"),s.a.createElement("span",null,"function newArray()","{"),s.a.createElement("span",null,"  console.log(Array.prototype.slice.call(arguments,0,2))"),s.a.createElement("span",null,"}"),s.a.createElement("span",null,"newArray(1,2,3,4,5,6) //0,2"),s.a.createElement("span",null))),s.a.createElement("h4",{id:"\u53c2\u6570\u53ef\u53d8\u573a\u666f"},"\u53c2\u6570\u53ef\u53d8\u573a\u666f"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"// max \u53c2\u6570\u53ef\u53d8"),s.a.createElement("span",null,"var allNumbers=[22,11,0,23,15]"),s.a.createElement("span",null,"console.log(Math.max.apply(null,allNumbers) )"),s.a.createElement("span",null,"// ES6\u62d3\u5c55\u8fd0\u7b97\u7b26\u4e5f\u53ef\u4ee5\u5b9e\u73b0"),s.a.createElement("span",null,"console.log(Math.max(...allNumbers) )"),s.a.createElement("span",null))),s.a.createElement("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),s.a.createElement("ol",null,s.a.createElement("li",null,"Bind()\u65b9\u6cd5\u53ea\u662f\u5c06\u7ed1\u5b9a\u540e\u7684\u51fd\u6570\u8fdb\u884c\u8fd4\u56de\uff0c\u800c\u540e\u4e24\u8005\u662f\u7acb\u5373\u6267\u884c"),s.a.createElement("li",null,"apply \u548c call \u53ea\u662f\u7a7f\u53c2\u5f62\u5f0f\u4e0d\u4e00\u6837\uff0c\u524d\u8005\u662f\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\u53c2\u6570\uff0c\u540e\u8005\u662f\u591a\u4e2a\u53c2\u6570"),s.a.createElement("li",null,"\u7bad\u5934\u51fd\u6570\u4e2d\uff0ccall\u548capply\u5931\u6548"))))}}]),a}(s.a.Component)},98:function(e,a,l){}}]);
//# sourceMappingURL=46.6c7a438e.chunk.js.map