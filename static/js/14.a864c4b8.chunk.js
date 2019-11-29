(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,n,l){"use strict";l.d(n,"a",function(){return o});var a=l(4),t=l(5),c=l(7),r=l(6),u=l(8),s=l(0),m=l.n(s),o=(l(101),function(e){function n(){var e,l;Object(a.a)(this,n);for(var t=arguments.length,u=new Array(t),s=0;s<t;s++)u[s]=arguments[s];return(l=Object(c.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(u)))).clickPosBtn=function(e){var n=document.getElementById(e);window.scrollTo({top:n.offsetTop-10,left:0,behavior:"smooth"})},l}return Object(u.a)(n,e),Object(t.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(n,l){return m.a.createElement("span",{className:"a"+n.level,key:l,onClick:function(){return e.clickPosBtn(n.title)}},n.title)}))))}}]),n}(m.a.Component))},101:function(e,n,l){},38:function(e,n,l){"use strict";l.r(n),l.d(n,"default",function(){return E});var a=l(4),t=l(5),c=l(7),r=l(6),u=l(8),s=l(0),m=l.n(s),o=(l(98),l(100)),E=function(e){function n(){var e;return Object(a.a)(this,n),(e=Object(c.a)(this,Object(r.a)(n).call(this))).state={headerLink:[{level:"h3",title:"Async/Await \u7684\u51fa\u73b0"},{level:"h3",title:"Iterator"},{level:"h3",title:"Generator"},{level:"h3",title:"Async/Await"},{level:"h3",title:"\u53c2\u8003"}]},e}return Object(u.a)(n,e),Object(t.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(s.Fragment,null,m.a.createElement(o.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"\u7531 Async/Await \u5f15\u53d1\u51fa\u6765\u7684\u4e00\u7cfb\u5217\u95ee\u9898")),m.a.createElement("h3",{id:"Async/Await \u7684\u51fa\u73b0"},"Async/Await \u7684\u51fa\u73b0"),m.a.createElement("p",null,"\u5728 ES6 \u51fa\u73b0\u4e4b\u524d\uff0c\u6211\u4eec\u90fd\u662f\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u7684\u65b9\u5f0f\u6765\u64cd\u4f5c\u5f02\u6b65\u4ee3\u7801\uff0c\u5982\u679c\u51fa\u73b0\u5927\u91cf\u7684\u56de\u8c03\u51fd\u6570\u5d4c\u5957\uff0c\u4ee3\u7801\u90a3\u771f\u7684\u662f\u8fa3\u773c\u775b\uff0c\u8fd9\u4e5f\u662f\u6211\u4eec\u5e38\u8bf4\u7684",m.a.createElement("strong",null,"\u56de\u8c03\u5730\u72f1"),"\u3002ES6+\u4ee5\u540e\u51fa\u73b0\u4e86",m.a.createElement("code",null,"Promise"),",\u5927\u5927\u7684\u4f18\u5316\u4e86\u5f02\u6b65\u7f16\u7a0b\u7684\u95ee\u9898\uff0c\u4e5f\u907f\u514d\u4e86\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898\uff0c\u4f46\u662f\u6211\u4eec\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u4ecd\u7136\u4f1a\u9047\u5230\u4e00\u5927\u5806then\u94fe\u7684\u95ee\u9898\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"ajax('XXX1')"),m.a.createElement("span",null,"  .then(res => ","{"),m.a.createElement("span",null,"      // \u64cd\u4f5c\u903b\u8f91"),m.a.createElement("span",null,"      return ajax('XXX2')"),m.a.createElement("span",null,"  }).then(res => ","{"),m.a.createElement("span",null,"      // \u64cd\u4f5c\u903b\u8f91"),m.a.createElement("span",null,"      return ajax('XXX3')"),m.a.createElement("span",null,"  }).then(res => ","{"),m.a.createElement("span",null,"      // \u64cd\u4f5c\u903b\u8f91"),m.a.createElement("span",null,"  })"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u5c31\u7531",m.a.createElement("code",null,"Async/Await"),"\u767b\u573a\u4e86\uff0c\u4f7f\u7528 async \u51fd\u6570\u4ee5\u540e\uff0c\u4f7f\u5f97\u5f02\u6b65\u64cd\u4f5c\u53d8\u5f97\u66f4\u52a0\u65b9\u4fbf\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"async function a()","{"),m.a.createElement("span",null,"  await promise1()"),m.a.createElement("span",null,"  await promise2()"),m.a.createElement("span",null,"  await promise3()"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u6211\u4eec\u90fd\u77e5\u9053js\u662f",m.a.createElement("strong",null,"\u5355\u7ebf\u7a0b"),"\u7684\uff0c\u5f02\u6b65\u7684\u4ee3\u7801\u539f\u5219\u4e0a\u662f\u4e0d\u4f1a\u963b\u585e\u5176\u4ed6\u4ee3\u7801\u7684\u6267\u884c\uff0c\u4f46\u662f\u600e\u4e48\u5728",m.a.createElement("code",null,"async function"),"\u91cc\u9762\u5c31\u4e0d\u662f\u90a3\u4e48\u56de\u4e8b\u4e86\u5462\uff1f \u5173\u4e8e",m.a.createElement("code",null,"Async/Await"),"\u7a76\u7adf\u662f\u4f55\u7269\uff0c\u6211\u4eec\u7ee7\u7eed\u53bb\u63a2\u7d22\u7ed3\u679c\u3002"),m.a.createElement("h3",{id:"Iterator"},"Iterator"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u8fed\u4ee3\u5668\uff08Iterator\uff09\u53ef\u4ee5\u7ed9\u4e00\u4e2a\u5bf9\u8c61\u201c\u8d85\u80fd\u529b\u201d\uff0c\u5305\u542b\u4e00\u4e2a next() \u65b9\u6cd5\uff0c\u8c03\u7528\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u5305\u542b\u4e24\u4e2a\u5c5e\u6027\uff1avalue - \u5f53\u524d\u4f4d\u7f6e\u7684\u503c\uff1bdone - \u662f\u5426\u8fed\u4ee3\u7ed3\u675f\u3002")),m.a.createElement("p",null,"\u5728\u8fc7\u53bb\uff0c\u6211\u4eec\u901a\u8fc7for\u5faa\u73af\u6765\u904d\u5386\u6570\u7ec4\uff0c\u901a\u8fc7",m.a.createElement("code",null,"for...in"),"\u6765\u904d\u5386\u5bf9\u8c61\u3002ES\b6\u4ee5\u540e\uff0c\u53ea\u8981\u4e00\u4e2a\u5bf9\u8c61\u5305\u542b",m.a.createElement("code",null,"Iterator"),",\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7",m.a.createElement("code",null,"for...of"),"\u6765\u5b9e\u73b0\u904d\u5386\u4e86\uff01"),m.a.createElement("p",null,"\u5982\u679c\u60f3\u8ba9\u4e00\u4e2a\u5bf9\u8c61\u662f\u53ef\u8fed\u4ee3\u7684\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5bf9\u8c61\u6216\u8005\u5176\u539f\u578b\u94fe\u4e2d\u5fc5\u987b\u62e5\u6709",m.a.createElement("code",null,"Symbol.iterator"),"\u5c5e\u6027\u3002\u5f53\u8be5\u5bf9\u8c61\u8fdb\u884c\u8fed\u4ee3\u65f6\uff0c\u5b83\u7684",m.a.createElement("code",null,"iterator"),"\u65b9\u6cd5\u90fd\u4f1a\u5728\u4e0d\u4f20\u53c2\u60c5\u51b5\u4e0b\u88ab\u8c03\u7528\uff0c\u8fd4\u56de\u7684\u8fed\u4ee3\u5668\u7528\u4e8e\u83b7\u53d6\u8981\u8fed\u4ee3\u7684\u503c\u3002"),m.a.createElement("p",null,"\u5f53\u7136\uff0c\u4e00\u4e9b\u5185\u7f6e\u7c7b\u578b\u62e5\u6709\u9ed8\u8ba4\u7684\u8fed\u4ee3\u5668\u884c\u4e3a\uff0c\u4f8b\u5982 ",m.a.createElement("code",null,"Array"),",",m.a.createElement("code",null,"TypedArray"),",",m.a.createElement("code",null,"String"),",",m.a.createElement("code",null,"Map"),",",m.a.createElement("code",null,"Set"),"\u7b49\u3002"),m.a.createElement("h3",{id:"Generator"},"Generator"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u751f\u6210\u5668\u5bf9\u8c61\u662f\u7531\u4e00\u4e2a",m.a.createElement("strong",null,"generator function"),"\u8fd4\u56de\u7684,\u5e76\u4e14\u5b83\u7b26\u5408\u6211\u4eec\u4e0a\u9762\u6240\u8bf4\u7684\u53ef\u8fed\u4ee3\u534f\u8bae\u548c\u8fed\u4ee3\u5668\u534f\u8bae\u3002")),m.a.createElement("p",null,"\u6765\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a",m.a.createElement("code",null,"generator function"),":"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"function* gen() ","{"," "),m.a.createElement("span",null,"  yield 1;"),m.a.createElement("span",null,"  yield 2;"),m.a.createElement("span",null,"  const a = yield 3;"),m.a.createElement("span",null,"  yield a;"),m.a.createElement("span",null,"}"),m.a.createElement("span",null,'let g = gen(); // "Generator ',"{",' }"'),m.a.createElement("span",null,"console.log(g.next()); // ","{","value:1,done:false}"),m.a.createElement("span",null,"console.log(g.next()); // ","{","value:2,done:false}"),m.a.createElement("span",null,"console.log(g.next()); // ","{","value:3,done:false}"),m.a.createElement("span",null,"console.log(g.next(100)); // ","{","value:100,done:false}"),m.a.createElement("span",null,"console.log(g.next()); // ","{","value:undefined,done:true}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u5982\u4e0a\u9762\u6240\u793a\u7684\u4ee3\u7801\u7247\u6bb5\uff0c",m.a.createElement("code",null,"function* gen()","{","}"),"\u5c31\u662f\u4e00\u4e2a\u751f\u6210\u5668\u51fd\u6570\uff0c\u800c",m.a.createElement("code",null,"g"),"\u5c31\u662f\u4e00\u4e2a\u751f\u6210\u5668\u5bf9\u8c61\uff0c\u5b83\u53ef\u4ee5\u6267\u884c",m.a.createElement("code",null,"next()"),"\u65b9\u6cd5\uff08\u8fd9\u91cc\u53ef\u4ee5\u901a\u8fc7\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\u7528\u4ee5\u5411\u751f\u6210\u5668\u4f20\u503c\uff0c\u4f5c\u4e3a\u4e0a\u4e00\u6761yield\u64cd\u4f5c\u7684\u8fd4\u56de\u503c\uff09\uff0c\u4e5f\u53ef\u4ee5\u88ab",m.a.createElement("code",null,"for...of"),"\u904d\u5386\u3002"),m.a.createElement("p",null,"\u7b49\u7b49\uff1f\uff1f"),m.a.createElement("p",null,"\u6211\u4eec\u770b\u5230\u5728",m.a.createElement("code",null,"generator function"),"\u4e2d\uff0c\u6211\u4eec\u53ea\u6709\u6267\u884c\u4e86",m.a.createElement("code",null,"next()"),"\u65b9\u6cd5\u624d\u4f1a\u8df3\u5230\u4e0b\u4e00\u4e2ayeild\uff0c\u8fd9\u671f\u95f4\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\u4e00\u76f4\u90fd\u662f\u5904\u4e8e\u963b\u585e\u7684\u72b6\u6001\u3002\u6240\u4ee5\u6211\u4eec\u662f\u4e0d\u662f\u53ef\u4ee5\u628a yeild \u8fd4\u56de\u503c\u6362\u6210\u4e00\u4e2apromise\u5bf9\u8c61\uff0c\u5f53\u5f02\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5\u518d\u4ece",m.a.createElement("code",null,"then()"),"\u56de\u8c03\u4e2d\u53bb\u6267\u884c",m.a.createElement("code",null,"g.next()"),"\uff0c\u662f\u4e0d\u662f\u5c31\u80fd\u591f\u628a\u5f02\u6b65\u7684\u64cd\u4f5c\u53d8\u6210\u201c\u540c\u6b65\u201d\u7684\u4e86\uff1f\u4e3a\u4e86\u9a8c\u8bc1\u6211\u4eec\u7684\u731c\u60f3\uff0c\u6765\u4e0a\u4ee3\u7801\u8bd5\u8bd5\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"// \u8fd9\u91cc\u6a21\u62df\u5f02\u6b65\u4e8b\u4ef6"),m.a.createElement("span",null,"function getPromise1() ","{"),m.a.createElement("span",null,"  return new Promise((resole, reject) => ","{"),m.a.createElement("span",null,"    setTimeout(() => ","{"),m.a.createElement("span",null,"      resole('get promise1')"),m.a.createElement("span",null,"    }, 2000)"),m.a.createElement("span",null,"  })"),m.a.createElement("span",null,"}"),m.a.createElement("span",null,"// \u8fd9\u91cc\u6a21\u62df\u5f02\u6b65\u4e8b\u4ef6"),m.a.createElement("span",null,"function getPromise2() ","{"),m.a.createElement("span",null,"  return new Promise((resole, reject) => ","{"),m.a.createElement("span",null,"    setTimeout(() => ","{"),m.a.createElement("span",null,"      resole('get promise2')"),m.a.createElement("span",null,"    }, 1000)"),m.a.createElement("span",null,"  })"),m.a.createElement("span",null,"}"),m.a.createElement("span",null),m.a.createElement("span",null,"function* gen() ","{"),m.a.createElement("span",null,"  console.log('run gen function');"),m.a.createElement("span",null,"  yield getPromise1();"),m.a.createElement("span",null,"  console.log('wait primise1 done,output this');"),m.a.createElement("span",null,"  yield getPromise2();"),m.a.createElement("span",null,"}"),m.a.createElement("span",null),m.a.createElement("span",null,"let g = gen();"),m.a.createElement("span",null,"let g1 = g.next().value;"),m.a.createElement("span",null,"g1.then(res => ","{"),m.a.createElement("span",null,"  console.log(res);"),m.a.createElement("span",null,"  let g2 = g.next().value;"),m.a.createElement("span",null,"  g2.then(res2 => ","{"),m.a.createElement("span",null,"    console.log(res2);"),m.a.createElement("span",null,"    g.next();"),m.a.createElement("span",null,"  })"),m.a.createElement("span",null,"})"),m.a.createElement("span",null),m.a.createElement("span",null))),m.a.createElement("p",null,"\u592a\u597d\u4e86\uff01\u8f93\u51fa\u7ed3\u679c\u5982\u6211\u4eec\u6240\u671f\u5f85\u7684\uff0c\u6574\u4e2a\u6267\u884c\u8fc7\u7a0b\u5927\u6982\u5982\u4e0b\uff1a"),m.a.createElement("ol",null,m.a.createElement("li",null,"\u521b\u5efa\u904d\u5386\u5668\u5bf9\u8c61\uff0c\u8f93\u51fa",m.a.createElement("code",null,"run gen function")),m.a.createElement("li",null,"\u7b2c\u4e00\u6b21\u8c03\u7528",m.a.createElement("code",null,"g.next()"),"\uff0c\u5e76\u5c06\u4e00\u4e2apromise\u5bf9\u8c61\u8d4b\u503c\u7ed9",m.a.createElement("code",null,"g1")),m.a.createElement("li",null,"2s\u540e\uff0c",m.a.createElement("code",null,"g1"),"\u6267\u884c\u56de\u8c03\u51fd\u6570\uff0c\u8f93\u51fa",m.a.createElement("code",null,"get promise1")),m.a.createElement("li",null,"\u7b2c\u4e8c\u6b21\u8c03\u7528",m.a.createElement("code",null,"g.next()"),"\uff0c\u9996\u5148\u8f93\u51fa",m.a.createElement("code",null,"wait primise1 done,output this"),"\uff0c\u7136\u540e\u5c06\u7b2c\u4e8c\u4e2apromise2\u5bf9\u8c61\u8d4b\u503c\u7ed9",m.a.createElement("code",null,"g2")),m.a.createElement("li",null,"1s\u540e\uff0c",m.a.createElement("code",null,"g1"),"\u6267\u884c\u56de\u8c03\u51fd\u6570\uff0c\u8f93\u51fa",m.a.createElement("code",null,"get promise2"))),m.a.createElement("p",null,"\u4e0d\u8fc7\uff0c\u6211\u4eec\u8fd9\u4f8b\u5b50\u4e2d\u53ea\u662f\u7ed9\u4e86\u4e24\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u4f46\u51e1\u6211\u4eec\u7684\u64cd\u4f5c\u6709\u82e5\u5e72\u4e2a\uff0c\u8fd9\u4e00\u5c42\u5c42\u7684\u5d4c\u5957\u4e5f\u4e0d\u662f\u4e2a\u4e8b\u554a\uff01\u6240\u4ee5\u6211\u4eec\u6765\u6539\u9020\u4e00\u4e0b\uff0c\u4f7f\u5f97\u4e0a\u4e00\u4e2a\u5f02\u6b65\u4e8b\u4ef6\u6267\u884c\u5b8c\u4e86\u81ea\u52a8\u5c31\u53bb\u6267\u884c\u4e0b\u4e00\u4e2a\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"function async(gen) ","{"),m.a.createElement("span",null,"  let g = gen();"),m.a.createElement("span",null,"  function run() ","{"),m.a.createElement("span",null,"    let gResult = g.next()"),m.a.createElement("span",null,"    if (gResult.done) return;"),m.a.createElement("span",null,"    let gIndex = gResult.value"),m.a.createElement("span",null,"    gIndex.then(res => ","{"),m.a.createElement("span",null,"      console.log(res);"),m.a.createElement("span",null,"      run()"),m.a.createElement("span",null,"    })"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"  run()"),m.a.createElement("span",null,"}"),m.a.createElement("span",null),m.a.createElement("span",null,"async(function*() ","{"),m.a.createElement("span",null,"  console.log('run gen function');"),m.a.createElement("span",null,"  yield getPromise1();"),m.a.createElement("span",null,"  console.log('wait primise1 done,output this');"),m.a.createElement("span",null,"  yield getPromise2();"),m.a.createElement("span",null,"  console.log('wait primise2 done,output this');"),m.a.createElement("span",null,"});"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"Async/Await"},"Async/Await"),m.a.createElement("p",null,"\u6211\u4eec\u5df2\u7ecf\u901a\u8fc7\u4f7f\u7528",m.a.createElement("code",null,"Generator"),"\u5b9e\u73b0\u4e86\u7c7b\u4f3c",m.a.createElement("code",null,"Async/Await"),"\u4f7f\u5f02\u6b65\u4ee3\u7801\u6267\u884c\u7ed3\u675f\u540e\u518d\u6267\u884c\u540e\u7eed\u4ee3\u7801\u7684\u529f\u80fd\uff0c\u5bf9\u6bd4\u4e0b\u6211\u4eec\u7528",m.a.createElement("code",null,"Async/Await"),"\u6765\u5b9e\u73b0\u7684\u4ee3\u7801\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"// \u4f7f\u7528 Generator \u5b9e\u73b0"),m.a.createElement("span",null,"async(function*() ","{"),m.a.createElement("span",null,"  console.log('run gen function');"),m.a.createElement("span",null,"  yield getPromise1();"),m.a.createElement("span",null,"  console.log('wait primise1 done,output this');"),m.a.createElement("span",null,"  yield getPromise2();"),m.a.createElement("span",null,"  console.log('wait primise2 done,output this');"),m.a.createElement("span",null,"});"),m.a.createElement("span",null),m.a.createElement("span",null,"// Async/Await \u5b9e\u73b0"),m.a.createElement("span",null,"async function func() ","{"),m.a.createElement("span",null,"  console.log('run gen function');"),m.a.createElement("span",null,"  await getPromise1();"),m.a.createElement("span",null,"  console.log('wait primise1 done,output this');"),m.a.createElement("span",null,"  await getPromise2();"),m.a.createElement("span",null,"  console.log('wait primise2 done,output this');"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u53ef\u4ee5\u975e\u5e38\u76f4\u89c2\u7684\u611f\u53d7\u5230\uff0c",m.a.createElement("code",null,"Async/Await"),"\u5c31\u662f\u4e00\u79cd\u8bed\u6cd5\u7cd6\uff0c\u57fa\u4e8eGenerator \u51fd\u6570\u548c\u81ea\u52a8\u6267\u884c\u5668\u5b9e\u73b0\u3002\u4e0d\u8fc7\u5b9e\u9645\u4e0a\u81ea\u52a8\u6267\u884c\u5668\u8981\u4e0d\u6211\u4eec\u4e0a\u9762\u7684\u5b9e\u73b0\u590d\u6742\u4e9b,\u4e0b\u9762\u7ed9\u51faspawn\u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u57fa\u672c\u5c31\u662f\u81ea\u52a8\u6267\u884c\u5668\u7684\u7ffb\u7248\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"function spawn(genF) ","{"),m.a.createElement("span",null,"  return new Promise(function(resolve, reject) ","{"),m.a.createElement("span",null,"    const gen = genF();"),m.a.createElement("span",null,"    function step(nextF) ","{"),m.a.createElement("span",null,"      let next;"),m.a.createElement("span",null,"      try ","{"),m.a.createElement("span",null,"        next = nextF();"),m.a.createElement("span",null,"      } catch(e) ","{"),m.a.createElement("span",null,"        return reject(e);"),m.a.createElement("span",null,"      }"),m.a.createElement("span",null,"      if(next.done) ","{"),m.a.createElement("span",null,"        return resolve(next.value);"),m.a.createElement("span",null,"      }"),m.a.createElement("span",null,"      Promise.resolve(next.value).then(function(v) ","{"),m.a.createElement("span",null,"        step(function() ","{"," return gen.next(v); });"),m.a.createElement("span",null,"      }, function(e) ","{"),m.a.createElement("span",null,"        step(function() ","{"," return gen.throw(e); });"),m.a.createElement("span",null,"      });"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"    step(function() ","{"," return gen.next(undefined); });"),m.a.createElement("span",null,"  });"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u6839\u636e\u4e0a\u9762\u53ef\u77e5\uff0cawait \u64cd\u4f5c\u4e4b\u540e\u7684\u4ee3\u7801\u90fd\u76f8\u5f53\u4e8e\u4e00\u4e2amicrotask\u5fae\u4efb\u52a1\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"async function async1() ","{"),m.a.createElement("span",null,"    console.log('async1 start');"),m.a.createElement("span",null,"    await async2();"),m.a.createElement("span",null,"    console.log('async1 end');"),m.a.createElement("span",null,"}"),m.a.createElement("span",null,"// \u7b49\u540c\u4e8e"),m.a.createElement("span",null,"async function async1() ","{"),m.a.createElement("span",null,"    console.log('async1 start');"),m.a.createElement("span",null,"    Promise.resolve(async2()).then(() => ","{"),m.a.createElement("span",null,"            // microtask"),m.a.createElement("span",null,"            console.log('async1 end');"),m.a.createElement("span",null,"        })"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),m.a.createElement("blockquote",null,m.a.createElement("p",null,m.a.createElement("a",{target:"_blank",href:"https://muyiy.vip/question/async/9.html"},"Async/Await \u5982\u4f55\u901a\u8fc7\u540c\u6b65\u7684\u65b9\u5f0f\u5b9e\u73b0\u5f02\u6b65")))))}}]),n}(m.a.Component)},98:function(e,n,l){}}]);
//# sourceMappingURL=14.a864c4b8.chunk.js.map