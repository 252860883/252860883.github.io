(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{133:function(e,n,a){},135:function(e,n,a){"use strict";a.d(n,"a",function(){return i});var t=a(4),l=a(5),c=a(7),r=a(6),m=a(8),u=a(0),s=a.n(u),i=(a(136),function(e){function n(){return Object(t.a)(this,n),Object(c.a)(this,Object(r.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"clickPosBtn",value:function(e){var n=document.getElementById(e);window.scrollTo({top:n.offsetTop-10,left:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"headerLink"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"real-content"},s.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(n,a){return s.a.createElement("span",{className:"a"+n.level,key:a,onClick:e.clickPosBtn.bind(e,n.title)},n.title)}))))}}]),n}(s.a.Component))},136:function(e,n,a){},60:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return p});var t=a(4),l=a(5),c=a(7),r=a(6),m=a(8),u=a(0),s=a.n(u),i=(a(133),a(135)),p=function(e){function n(){var e;return Object(t.a)(this,n),(e=Object(c.a)(this,Object(r.a)(n).call(this))).state={headerLink:[]},e}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(i.a,{headerLink:this.state.headerLink}),s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"title-content"},s.a.createElement("h1",{className:"title"},"vue\u7684key\u5c5e\u6027\u52a0\u8fd8\u662f\u4e0d\u52a0\uff1f")),s.a.createElement("p",null,"\u505a\u8fc7vue\u5f00\u53d1\u7684\u7a0b\u5e8f\u733f\u5927\u5927\u4eec\u4e00\u5b9a\u7ecf\u5e38\u9047\u5230\u7684\u95ee\u9898\u5c31\u662f\u5fd8\u52a0key\uff01\u5fd8\u52a0key\uff01\u5fd8\u52a0key\uff01\u4e0d\u8fc7\u597d\u5728vscode\u540e\u6765\u7684vue\u6821\u9a8c\u5bf9\u4e0d\u52a0key\u7684\u4ee3\u7801\u505a\u51fa\u4e86\u7ea2\u8272\u6ce2\u6d6a\u7ebf\u8b66\u793a\uff0c\u4f46\u662f\u611f\u89c9\u5f88\u662f\u4e0d\u8212\u670d\u5440\uff0c\u6240\u4ee5\u8fd9\u4e2akey\u5230\u5e95\u6709\u4ec0\u4e48\u7528\u9014\u5462\uff1f\u5b98\u65b9\u6587\u6863\u4e2d\u89e3\u91ca\u5230\uff1a"),s.a.createElement("blockquote",null,s.a.createElement("p",null,"key \u7684\u7279\u6b8a\u5c5e\u6027\u4e3b\u8981\u7528\u5728 Vue \u7684\u865a\u62df DOM \u7b97\u6cd5\uff0c\u5728\u65b0\u65e7 nodes \u5bf9\u6bd4\u65f6\u8fa8\u8bc6 VNodes\u3002\u5982\u679c\u4e0d\u4f7f\u7528 key\uff0cVue \u4f1a\u4f7f\u7528\u4e00\u79cd\u6700\u5927\u9650\u5ea6\u51cf\u5c11\u52a8\u6001\u5143\u7d20\u5e76\u4e14\u5c3d\u53ef\u80fd\u7684\u5c1d\u8bd5\u4fee\u590d/\u518d\u5229\u7528\u76f8\u540c\u7c7b\u578b\u5143\u7d20\u7684\u7b97\u6cd5\u3002\u4f7f\u7528 key\uff0c\u5b83\u4f1a\u57fa\u4e8e key \u7684\u53d8\u5316\u91cd\u65b0\u6392\u5217\u5143\u7d20\u987a\u5e8f\uff0c\u5e76\u4e14\u4f1a\u79fb\u9664 key \u4e0d\u5b58\u5728\u7684\u5143\u7d20\u3002\u6709\u76f8\u540c\u7236\u5143\u7d20\u7684\u5b50\u5143\u7d20\u5fc5\u987b\u6709\u72ec\u7279\u7684 key\u3002\u91cd\u590d\u7684 key \u4f1a\u9020\u6210\u6e32\u67d3\u9519\u8bef\u3002")),s.a.createElement("p",null,"\u7b80\u5355\u6765\u8bb2\uff0c\u5982\u679c\u6709\u4e86key\uff0cdiff\u7b97\u6cd5\u4f1a\u76f4\u63a5\u62ffkey\u503c\u6765\u505a\u5bf9\u6bd4\uff0c\u800c\u6ca1\u6709key\u7684\u8bdd\uff0c\u53ea\u80fd\u7528\u5176\u4ed6\u7684\u529e\u6cd5\uff0c\u5728\u6027\u80fd\u4e0a\u80af\u5b9a\u4f1a\u6709\u66f4\u591a\u7684\u635f\u8017\u3002\u540c\u65f6\u6ce8\u610f\u5230\u6700\u540e\u4e00\u53e5\u8bdd\uff0c\u6709\u76f8\u540c\u7236\u5143\u7d20\u7684\u5b50\u5143\u7d20\u5fc5\u987b\u6709\u72ec\u7279\u7684key\uff0c\u6240\u4ee5\u8bf4\u5982\u679c\u76f8\u540c\u7684\u7236\u5143\u7d20\u4e0b\uff0c\u5f15\u7528\u4e86\u4e24\u6b21\u76f8\u540c\u7684\u5b50\u7ec4\u4ef6\uff0c\u90a3\u4e48\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u540c\u6837\u4e5f\u9700\u8981\u52a0key\u6765\u4f5c\u533a\u5206\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u9020\u6210\u672a\u77e5\u7684\u9519\u8bef\uff08\u5982\u679c\u51fa\u73b0\u672a\u77e5\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u52a0key\u8bd5\u8bd5\uff09\u3002"),s.a.createElement("p",null,"\u76f8\u4fe1\u5e73\u65f6\u5927\u5bb6\u6709\u4e00\u4e2a\u5077\u61d2\u7684\u5199\u6cd5\u5c31\u662f\u76f4\u63a5\u628aindex\u4f5c\u4e3akey\u503c\uff0c\u4f46\u662f\u7ed3\u5408key\u7684\u5b9e\u9645\u7528\u9014\u53d1\u73b0\uff0c\u4ee5index\u4f5c\u4e3akey\u7684\u8bdd\uff0c\u65e0\u6cd5\u8fdb\u884c\u65b0\u65e7\u6bd4\u8f83\uff0c\u6240\u4ee5\u8fd9\u4e2a\u5199\u6cd5\u53ef\u4ee5\u8bf4\u662f\u65e0\u6548\u7684\uff0c\u4e25\u683c\u6765\u8bb2\u6700\u597d\u4f7f\u7528\u5143\u7d20\u7684\u552f\u4e00id\u505a\u4e3akey\u503c\u3002\u5177\u4f53\u6211\u4eec\u53ef\u4ee5\u770b\u4e0b\u56fe\u7684\u4f8b\u5b50\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null," "),s.a.createElement("span",null,"key:0 name:LiMing     key:0 name:LiMing"),s.a.createElement("span",null,"key:1 name:HanDan     key:1 name:YeXuan"),s.a.createElement("span",null,"key:2 name:ZhangYi    key:2 name:HanDan"),s.a.createElement("span",null,"                      key:3 name:ZhangYi"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u4ece\u7b2c\u4e8c\u9879\u63d2\u5165\u4e86\u4e00\u4e2a dom \u5982\u679c\u4f7f\u7528 index \u505a\u4e3a key \u503c\u65f6\uff0c\u9664\u4e86\u7b2c\u4e00\u9879\u5176\u4f59\u7684\u9700\u8981\u5168\u90e8\u91cd\u7ed8\u3002"),s.a.createElement("p",null,"\u5ef6\u4f38\u4e2a\u6709\u610f\u601d\u7684\u95ee\u9898\uff0c",s.a.createElement("strong",null,"v-for\u5faa\u73af\u4f53\u4e2d\u7684input\u5982\u4f55\u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a\u5462\uff1f")),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"<template>"),s.a.createElement("span",null,'  <div id="app">'),s.a.createElement("span",null,'    <div v-for="(item,index) of list" :key="item">'),s.a.createElement("span",null,"        <p>","{","{","item}}</p>"),s.a.createElement("span",null,'        <input type="text" v-model="item"> '),s.a.createElement("span",null,"    </div>"),s.a.createElement("span",null,"  </div>"),s.a.createElement("span",null,"</template>"),s.a.createElement("span",null,"export default ","{"),s.a.createElement("span",null,'  name: "app",'),s.a.createElement("span",null,"  data() ","{"),s.a.createElement("span",null,"    return ","{"),s.a.createElement("span",null,"      list: [1,2,3],"),s.a.createElement("span",null,"    };"),s.a.createElement("span",null,"  }"),s.a.createElement("span",null,"};"),s.a.createElement("span",null,"<\/script>"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u770b\u4e0a\u9762\u4ee3\u7801\uff0c\u5f88\u7b80\u5355\u5417\uff01\u4f46\u662f\u8dd1\u8d77\u6765\u53d1\u73b0\uff0c\u62a5\u9519\u4e86\uff1a"),s.a.createElement("p",null,s.a.createElement("img",{src:"http://wx4.sinaimg.cn/mw690/a73bc6a1ly1ft5xvbdk92j214604275x.jpg",alt:"image",title:""})),s.a.createElement("p",null,"\u5927\u81f4\u610f\u601d\u662f\u4e0d\u80fd\u628av-for\u7684\u5faa\u73af\u6570\u636e\u76f4\u63a5\u8fdb\u884c\u53cc\u5411\u7ed1\u5b9a\uff0c\u6240\u4ee5\u6700\u597d\u7684\u529e\u6cd5\u5c31\u662f\u628a\u7eaf\u6570\u7ec4\u4fee\u6539\u4e3a\u5bf9\u8c61\u6570\u7ec4\u683c\u5f0f\uff0c\u5982\u4e0b\u4f18\u5316\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"<template>"),s.a.createElement("span",null,'  <div id="app">'),s.a.createElement("span",null,'    <div v-for="(item,index) of list" :key="item.id">'),s.a.createElement("span",null,"        <p>","{","{","item.num}}</p>"),s.a.createElement("span",null,'        <input type="text" v-model="item.num"> '),s.a.createElement("span",null,"    </div>"),s.a.createElement("span",null,"  </div>"),s.a.createElement("span",null,"</template>"),s.a.createElement("span",null),s.a.createElement("span",null,"<script>"),s.a.createElement("span",null,"export default ","{"),s.a.createElement("span",null,'  name: "app",'),s.a.createElement("span",null,"  data() ","{"),s.a.createElement("span",null,"    return ","{"),s.a.createElement("span",null,"      list: [","{"," id: 1, num: 1 }, ","{"," id: 2, num: 2 }, ","{"," id: 3, num: 3 }]"),s.a.createElement("span",null,"    };"),s.a.createElement("span",null,"  },"),s.a.createElement("span",null,"  methods: ","{"),s.a.createElement("span",null,"    add: function() ","{"),s.a.createElement("span",null,'      this.list.push("string");'),s.a.createElement("span",null,"    },"),s.a.createElement("span",null,"    remove: function(index) ","{"),s.a.createElement("span",null,"      this.list.splice(index, 1);"),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"  }"),s.a.createElement("span",null,"};"),s.a.createElement("span",null,"<\/script>"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u8bbe\u60f3\u4e0a\u9762\u4e00\u79cd\u60c5\u51b5\uff0c\u5982\u679c\u6211\u4eec\u628akey\u8bbe\u4e3aitem.num\u662f\u4e0d\u662f\u80fd\u884c\u5462\uff1f\u7b54\u6848\u662f\u5426\u5b9a\u7684\uff0c\u4e0d\u59a8\u8bd5\u4e00\u4e0b\uff0c\u4ea7\u751f\u7684\u95ee\u9898\u5c31\u662f\u6211\u4eec\u6bcf\u4fee\u6539\u4e00\u6b21input\u7684\u503c\uff0cinput\u6846\u5c31\u4f1a\u5931\u7126\u3002\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u628akey\u8bbe\u7f6e\u4e3anum\uff0c\u800c\u6211\u4eec\u6bcf\u6b21\u6539\u53d8num\uff0c\u90fd\u4f1a\u9020\u6210key\u53d8\u5316\uff0c\u800c\u5bfc\u81f4\u865a\u62dfdom\u5bf9\u6bd4\u8ba4\u4e3a\u53d1\u751f\u5143\u7d20\u53d8\u5316\u800c\u4ea7\u751f\u91cd\u7ed8\u884c\u4e3a\u3002"),s.a.createElement("p",null,"\u4e0d\u8fc7\u57fa\u4e8e\u8fd9\u4e00\u70b9\u5b98\u7f51\u4e0a\u8fd8\u7ed9\u4e86\u4e00\u4e2a\u597d\u73a9\u7684\u4f8b\u5b50,\u5982\u679c\u6211\u4eec\u60f3\u67d0\u4e2a\u6587\u672c\u53d8\u5316\u5c31\u6267\u884ctransition\u52a8\u753b\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0key\u503c\u6765\u5b9e\u73b0\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,'<transition name="bomb" mode="out-in">'),s.a.createElement("span",null,'    <span :key="msg">',"{","{","msg}}</span>"),s.a.createElement("span",null,"</transition>"),s.a.createElement("span",null,'<input class="input" type="text" v-model="msg">'),s.a.createElement("span",null))),s.a.createElement("p",null,"\u6548\u679c\u5982\u4e0b\uff0c\u6bcf\u5f53\u4fee\u6539\u6587\u672c\u65f6\u5019\u5c31\u4f1a\u89e6\u53d1\u7ea2\u8272\u7684\u6e10\u53d8\u6548\u679c\uff1a",s.a.createElement("br",null),s.a.createElement("img",{src:"http://wx1.sinaimg.cn/mw690/a73bc6a1ly1ft5xvcewk8g20gq08ch0q.gif",alt:"image",title:""})),s.a.createElement("p",null,s.a.createElement("strong",null,"\u5c0f\u603b\u7ed3"),"\uff1a",s.a.createElement("br",null),"1. key\u5728dom\u7b97\u6cd5\u4e2d\u4f5c\u4e3a\u8fa8\u8bc6\u5b57\u6bb5\u6392\u5217\u5143\u7d20\uff0c\u52a0\u5feb\u66f4\u65b0\u7684\u6548\u7387",s.a.createElement("br",null),"2. \u7236\u5143\u7d20\u4e0b\u76f8\u540c\u7684\u5b50\u5143\u7d20\u90fd\u9700\u8981\u52a0key\u4ee5\u4f5c\u533a\u5206\uff0c\u5b50\u7ec4\u4ef6\u540c\u6837\u9002\u7528",s.a.createElement("br",null),"3. key\u503c\u88ab\u4fee\u6539\u4f1a\u9020\u6210\u5143\u7d20\u91cd\u7ed8\uff0c\u5177\u6709\u4e24\u9762\u6027\uff0c\u9700\u8981\u4f9d\u636e\u6b64\u7279\u5f81\u91c7\u53d6\u5408\u9002\u7684\u65b9\u6848\u5b9akey\u503c",s.a.createElement("br",null),"4. \u8bf4\u4e86\u8fd9\u4e48\u591a\uff0c\u90a3\u6807\u9898\u7684\u7591\u95ee\uff0c\u52a0\u8fd8\u662f\u4e0d\u52a0\u5462\uff1f")))}}]),n}(s.a.Component)}}]);
//# sourceMappingURL=21.44870ea1.chunk.js.map