(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{124:function(e,l,a){},126:function(e,l,a){"use strict";a.d(l,"a",function(){return s});var n=a(4),t=a(5),r=a(7),c=a(6),u=a(8),p=a(0),m=a.n(p),s=(a(127),function(e){function l(){var e,a;Object(n.a)(this,l);for(var t=arguments.length,u=new Array(t),p=0;p<t;p++)u[p]=arguments[p];return(a=Object(r.a)(this,(e=Object(c.a)(l)).call.apply(e,[this].concat(u)))).clickPosBtn=function(e){var l=document.getElementById(e);window.scrollTo({top:l.offsetTop-10,left:0,behavior:"smooth"})},a}return Object(u.a)(l,e),Object(t.a)(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(l,a){return m.a.createElement("span",{className:"a"+l.level,key:a,onClick:function(){return e.clickPosBtn(l.title)}},l.title)}))))}}]),l}(m.a.Component))},127:function(e,l,a){},78:function(e,l,a){"use strict";a.r(l),a.d(l,"default",function(){return E});var n=a(4),t=a(5),r=a(7),c=a(6),u=a(8),p=a(0),m=a.n(p),s=(a(124),a(126)),E=function(e){function l(){var e;return Object(n.a)(this,l),(e=Object(r.a)(this,Object(c.a)(l).call(this))).state={headerLink:[{level:"h2",title:"\u7b2c\u4e00\u7bc7\u7ae0 \u914d\u7f6e"},{level:"h3",title:"1. \u4e3a\u4ec0\u4e48\u7528webpack\uff1f"},{level:"h3",title:"2. \u5b89\u88c5"},{level:"h3",title:"3. \u5165\u53e3\u4e0e\u8f93\u51fa"},{level:"h3",title:"4. Loader"},{level:"h3",title:"5. Plugin"},{level:"h3",title:"6. Resolve"},{level:"h3",title:"\u603b\u7ed3"},{level:"h2",title:"\u7b2c\u4e8c\u7bc7\u7ae0 \u672c\u5730\u670d\u52a1"},{level:"h3",title:"webpack-dev-server\xa0"},{level:"h3",title:"webpack-dev-middleware"},{level:"h3",title:"\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u6784\u5efa"},{level:"h4",title:"webpack 3.x\u914d\u7f6e"},{level:"h4",title:"webpack 4.0\u914d\u7f6e"},{level:"h2",title:"\u7b2c\u4e09\u7bc7\u7ae0 \u4f18\u5316"},{level:"h3",title:"image-webpack-loader \u56fe\u7247\u538b\u7f29"},{level:"h3",title:"\u4f7f\u7528 url-loader \u5c06\u6587\u4ef6\u8f6c\u4e3a DataURL"},{level:"h3",title:"\u5206\u79bb\u4ee3\u7801\u6587\u4ef6"}]},e}return Object(u.a)(l,e),Object(t.a)(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(s.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"\u6df1\u5165webpack4.0")),m.a.createElement("blockquote",null,m.a.createElement("p",null,"webpack \u662f\u4e00\u4e2a JS \u4ee3\u7801\u6a21\u5757\u5316\u7684\u6253\u5305\u5de5\u5177\uff0c\u85c9\u7531\u5b83\u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff0c\u968f\u7740\u793e\u533a\u7684\u53d1\u5c55\uff0c\u9010\u6e10\u6210\u4e3a\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\u7684\u6784\u5efa\u5de5\u5177\u3002\u4f46\u662f\u5e73\u65f6\u5f00\u53d1\u4e1a\u52a1\u7684\u65f6\u5019\u8bb8\u591a\u6846\u67b6\u90fd\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684\u811a\u624b\u67b6\uff0c\u4f7f\u5f97\u6211\u4eec\u5728\u5f00\u53d1\u4e1a\u52a1\u7684\u65f6\u5019\u5f88\u7701\u4e8b\uff0c\u5374\u5bf9webpack\u8d8a\u6765\u8d8a\u964c\u751f\uff0c\u6240\u4ee5\u7531\u6b64\u6765\u5bf9webpack\u6765\u6b21\u6df1\u5165\u7684\u4e86\u89e3\u3002")),m.a.createElement("h2",{id:"\u7b2c\u4e00\u7bc7\u7ae0 \u914d\u7f6e"},"\u7b2c\u4e00\u7bc7\u7ae0 \u914d\u7f6e"),m.a.createElement("h3",{id:"1. \u4e3a\u4ec0\u4e48\u7528webpack\uff1f"},"1. \u4e3a\u4ec0\u4e48\u7528webpack\uff1f"),m.a.createElement("p",null,"\u968f\u7740\u524d\u7aef\u5de5\u7a0b\u5316\u7684\u53d1\u5c55\uff0c\u6d8c\u73b0\u51fa\u4e86\u8bb8\u591a\u6846\u67b6\u7c7b\u5e93\uff0c\u4f46\u662f\u8fd9\u4e9b\u6e90\u4ee3\u7801\u65e0\u6cd5\u76f4\u63a5\u8fd0\u884c\uff0c\u9700\u8981\u7ecf\u8fc7\u5de5\u5177\u8f6c\u5316\u624d\u53ef\u4ee5\u3002\u9664\u4e86webpack\u8fd9\u4e2a\u6784\u5efa\u5de5\u5177\uff0c\u8fd8\u6709\u6211\u4eec\u4e86\u89e3\u7684Grunt\u3001Gulp\u7b49\u3002"),m.a.createElement("p",null,m.a.createElement("strong",null,"Grunt"),m.a.createElement("br",null),"Grunt \u6709\u5927\u91cf\u73b0\u6210\u7684\u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528\uff0c\u4e5f\u80fd\u7ba1\u7406\u4efb\u52a1\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u81ea\u52a8\u5316\u6267\u884c\u4f9d\u8d56\u7684\u4efb\u52a1\uff0c\u6bcf\u4e2a\u4efb\u52a1\u7684\u5177\u4f53\u6267\u884c\u4ee3\u7801\u548c\u4f9d\u8d56\u5173\u7cfb\u5199\u5728\u914d\u7f6e\u6587\u4ef6 Gruntfile.js \u91cc\u3002grunt\u7684\u597d\u5904\u5c31\u662f\u7075\u6d3b\uff0c\u53ea\u6267\u884c\u5b9a\u4e49\u597d\u7684\u4efb\u52a1\uff0c\u540c\u65f6\u4e5f\u6709\u5927\u91cf\u7684\u53ef\u590d\u7528\u7684\u63d2\u4ef6\u3002\u4f46\u662fgrunt\u96c6\u6210\u5ea6\u4e0d\u9ad8\uff0c\u9700\u8981\u624b\u52a8\u7f16\u5199\u5f88\u591a\u914d\u7f6e\uff0c\u4e0d\u80fd\u4e0a\u624b\u5373\u7528\u3002"),m.a.createElement("p",null,m.a.createElement("strong",null,"Gulp"),m.a.createElement("br",null),"gulp\u662f\u4e00\u4e2a\u57fa\u4e8e\u81ea\u52a8\u5316\u7684\u6784\u5efa\u5de5\u5177\uff0c\u9664\u4e86\u53ef\u4ee5\u7ba1\u7406\u548c\u6267\u884c\u4efb\u52a1\uff0c\u8fd8\u652f\u6301\u76d1\u542c\u6587\u4ef6\u3001\u8bfb\u5199\u6587\u4ef6\u3002gulp\u5f15\u5165\u4e86\u6d41\u7684\u6982\u5ff5\uff0c\u6d41\u53ef\u4ee5\u5728\u63d2\u4ef6\u95f4\u4f20\u9012\u3002\u76f8\u8f83\u4e8egrunt\uff0cgulp\u7684\u529f\u80fd\u66f4\u5b8c\u5584\uff0c\u4f46\u662f\u4ecd\u7136\u5b58\u5728\u96c6\u6210\u5ea6\u4e0d\u9ad8\u9700\u8981\u624b\u52a8\u914d\u7f6e\u7684\u95ee\u9898\u3002"),m.a.createElement("p",null,m.a.createElement("strong",null,"Webpack"),m.a.createElement("br",null),"webpack\u662f\u4e00\u4e2a\u6253\u5305\u6a21\u5757\u5316 JavaScript \u7684\u5de5\u5177\uff0c\u5728 Webpack \u91cc\u4e00\u5207\u6587\u4ef6\u7686\u6a21\u5757\uff0c\u901a\u8fc7 Loader \u8f6c\u6362\u6587\u4ef6\uff0c\u901a\u8fc7 Plugin \u6ce8\u5165\u94a9\u5b50\uff0c\u6700\u540e\u8f93\u51fa\u7531\u591a\u4e2a\u6a21\u5757\u7ec4\u5408\u6210\u7684\u6587\u4ef6\u3002Webpack \u4e13\u6ce8\u4e8e\u6784\u5efa\u6a21\u5757\u5316\u9879\u76ee\u3002webpack\u5177\u6709\u5f88\u5927\u7684\u7075\u6d3b\u6027\u548c\u62d3\u5c55\u6027\uff0c\u4e13\u6ce8\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u53ef\u4ee5\u505a\u5230\u5f00\u7bb1\u5373\u7528\uff0c\u540c\u65f6\u4f7f\u7528\u573a\u666f\u4e0d\u4ec5\u9650\u4e8eWeb\u5f00\u53d1\uff0c\u5177\u6709\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002",m.a.createElement("br",null),"\u73b0\u5728\u793e\u533a\u91cc\u9762\u57fa\u4e8ewebpack\u7684\u811a\u624b\u67b6\u5927\u81f4\u6709\uff1a react \u7684 create-react-app \u3001 vue \u7684 vue-cli \u3001 Angular \u7684 angular-cli\u7b49\u3002"),m.a.createElement("h3",{id:"2. \u5b89\u88c5"},"2. \u5b89\u88c5"),m.a.createElement("p",null,"\u9996\u5148\u8f93\u5165\u6307\u4ee4 ",m.a.createElement("code",null,"npm install webpack webpack-cli -g")," \u5b89\u88c5webback\uff0c\u6307\u4ee4 ",m.a.createElement("code",null,"npm init")," \u5b89\u88c5package.json\u6587\u4ef6\u3002Webpack \u5728\u6267\u884c\u6784\u5efa\u65f6\u9ed8\u8ba4\u4f1a\u4ece\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 webpack.config.js \u6587\u4ef6\u8bfb\u53d6\u914d\u7f6e\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u624b\u52a8\u65b0\u5efa\u8be5\u6587\u4ef6\u3002\u524d\u671f\u7684\u51c6\u5907\u5de5\u4f5c\u7ed3\u675f\uff0c\u4e0b\u9762\u6211\u4eec\u5c31\u5f00\u59cb\u8fdb\u5165\u795e\u5947\u7684webpack\u4e16\u754c\u4e86\uff01"),m.a.createElement("h3",{id:"3. \u5165\u53e3\u4e0e\u8f93\u51fa"},"3. \u5165\u53e3\u4e0e\u8f93\u51fa"),m.a.createElement("p",null,"\u5728\u591a\u4e2a\u4ee3\u7801\u6a21\u5757\u4e2d\u4f1a\u6709\u4e00\u4e2a\u8d77\u59cb\u7684 .js \u6587\u4ef6\uff0c\u6211\u4eec\u5c06\u6b64\u6587\u4ef6\u4f5c\u4e3a webpack \u6784\u5efa\u7684\u5165\u53e3\uff0c\u540c\u65f6webpack\u652f\u6301\u591a\u4e2a\u5165\u53e3\u914d\u7f6e\uff0c\u5982\u4e0b\u4ee3\u7801\u914d\u7f6e\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"  entry: './src/index.js' "),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"webpack\u7684\u8f93\u51fa\u6307\u7684\u662fwebpack\u6700\u7ec8\u6784\u5efa\u51fa\u6765\u7684\u9759\u6001\u6587\u4ef6\u3002\u901a\u8fc7output\u5b57\u6bb5\u5b9a\u4e49,\u5982\u4e0b\u6240\u793a\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"    //..."),m.a.createElement("span",null,"    output: ","{"),m.a.createElement("span",null,"        path: __dirname + '/dist',// __dirname\u6307\u5411\u88abjs\u6587\u4ef6\u6267\u884c\u7684\u7edd\u5bf9\u8def\u5f84"),m.a.createElement("span",null,"        filename: 'assets/index[hash].js',// [hash]\u53ef\u4ee5\u4fdd\u8bc1\u6bcf\u6b21\u6587\u4ef6\u540d\u90fd\u4e0d\u76f8\u540c"),m.a.createElement("span",null,"    },"),m.a.createElement("span",null,"    //..."),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"4. Loader"},"4. Loader"),m.a.createElement("p",null,"Loader \u53ef\u4ee5\u770b\u4f5c\u662f webpack \u7684\u8f6c\u6362\u5668\u6216\u8005\u201c\u7ffb\u8bd1\u5458\u201d\uff0c\u628a\u4ee3\u7801\u8f6c\u6362\u6210 webpack \u53ef\u4ee5\u6253\u5305\u7684\u6a21\u5757\uff0c\u5728 module.rules \u4e0b\u914d\u7f6e\u3002\u683c\u5f0f\u5982\u4e0b\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"  // ..."),m.a.createElement("span",null,"  module: ","{"),m.a.createElement("span",null,"    noParse: /jquery|lodash/, // \u6b63\u5219\u8868\u8fbe\u5f0f"),m.a.createElement("span",null,"    rules: [ "),m.a.createElement("span",null,"      ","{"),m.a.createElement("span",null,"        test: /\\.jsx?/, // \u6587\u4ef6\u540e\u7f00\u6761\u4ef6"),m.a.createElement("span",null,"        include: [ "),m.a.createElement("span",null,"          path.resolve(__dirname, 'src'),"),m.a.createElement("span",null,"        ], // \u6587\u4ef6\u6240\u5728\u8def\u5f84\u4f4d\u7f6e\u6761\u4ef6"),m.a.createElement("span",null,"        use: 'babel-loader', // \u89c4\u5219\u5e94\u7528\u7ed3\u679c\x0e"),m.a.createElement("span",null,"      },"),m.a.createElement("span",null,"      // ..."),m.a.createElement("span",null,"    ],"),m.a.createElement("span",null,"  },"),m.a.createElement("span",null,"}..."),m.a.createElement("span",null))),m.a.createElement("p",null,m.a.createElement("strong",null,"\u5339\u914d\u89c4\u5219"),"\uff08\u5b57\u7b26\u4e32\u3001\u6b63\u5219\u3001\u51fd\u6570\u3001\u6570\u7ec4\u3001\u5bf9\u8c61\uff09\uff1a",m.a.createElement("br",null),"* ","{"," test: ... } \u5339\u914d\u7279\u5b9a\u6761\u4ef6 ",m.a.createElement("br",null),"* ","{"," include: ... } \u5339\u914d\u7279\u5b9a\u8def\u5f84 ",m.a.createElement("br",null),"* ","{"," exclude: ... } \u6392\u9664\u7279\u5b9a\u8def\u5f84 ",m.a.createElement("br",null),"* ","{"," and: [...] }\u5fc5\u987b\u5339\u914d\u6570\u7ec4\u4e2d\u6240\u6709\u6761\u4ef6 ",m.a.createElement("br",null),"* ","{"," or: [...] } \u5339\u914d\u6570\u7ec4\u4e2d\u4efb\u610f\u4e00\u4e2a\u6761\u4ef6 ",m.a.createElement("br",null),"* ","{"," not: [...] } \u6392\u9664\u5339\u914d\u6570\u7ec4\u4e2d\u6240\u6709\u6761\u4ef6"),m.a.createElement("p",null,m.a.createElement("strong",null,"\u6267\u884c\u987a\u5e8f"),m.a.createElement("br",null),"\u6267\u884c\u987a\u5e8f\u662f\u4ece\u6700\u540e\u914d\u7f6e\u7684 loader \u5f00\u59cb\uff0c\u4e00\u6b65\u6b65\u5f80\u524d\u6267\u884c\u3002",m.a.createElement("br",null),'rule.enforce \u53ef\u4ee5\u8bbe\u7f6e loader \u79cd\u7c7b\uff0c\u9ed8\u8ba4\u4e3a\u666e\u901a\uff0c\u53ef\u4ee5\u8bbe\u7f6e \u201cpre\u201d\uff08\u524d\u7f6e\uff09\u3001post\uff08\u540e\u7f6e\uff09\uff0c\u8fd8\u6709\u4e00\u4e2a\u989d\u5916\u7684\u79cd\u7c7b"\u884c\u5185 loader"\uff0c\u88ab\u5e94\u7528\u5728 import/require \u884c\u5185\u3002',m.a.createElement("br",null),"\u79cd\u7c7b\u7684\u6267\u884c\u4f18\u5148\u7ea7\uff1a\u524d\u7f6e>\u884c\u5185>\u666e\u901a>\u540e\u7f6e"),m.a.createElement("p",null,m.a.createElement("strong",null,"noPrase"),m.a.createElement("br",null),"\u4e0d\u9700\u8981\u89e3\u6790\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u7c7b\u5e93\u53ef\u4ee5\u914d\u7f6e\u5728 noParse \u4e2d\uff0c\u4f46\u662f\u9700\u6ce8\u610f\u4f7f\u7528\xa0noParse\xa0\u8fdb\u884c\u5ffd\u7565\u7684\u6a21\u5757\u6587\u4ef6\u4e2d\u4e0d\u80fd\u4f7f\u7528\xa0import\u3001require\u3001define\xa0\u7b49\u5bfc\u5165\u673a\u5236\u3002"),m.a.createElement("h3",{id:"5. Plugin"},"5. Plugin"),m.a.createElement("p",null,"Plugin \u662f\u7528\u6765\u6269\u5c55 Webpack \u529f\u80fd\u7684\uff0c\u5904\u7406\u5176\u4ed6\u7684\u6784\u5efa\u4efb\u52a1\uff0c\u6a21\u5757\u8f6c\u6362\u7684\u5de5\u4f5c\u7ed9 loader \u505a\uff0c\u5269\u4e0b\u7684\u5de5\u4f5c\u7531 plugin \u5b8c\u6210\u3002\uff0c\u901a\u8fc7\u5728\u6784\u5efa\u6d41\u7a0b\u91cc\u6ce8\u5165\u94a9\u5b50\u5b9e\u73b0\uff0c\u5b83\u7ed9 Webpack \u5e26\u6765\u4e86\u5f88\u5927\u7684\u7075\u6d3b\u6027\u3002plugin\u5b89\u88c5\u540e\u9700\u8981\u624b\u52a8\u5f15\u5165\u3002\u4e0b\u9762\u4ee5\u914d\u7f6esass\u793a\u4f8b,\u6ce8\u610f\u5176\u4e2d\u7528\u5230\u4e86\u63d2\u4ef6",m.a.createElement("code",null,"extract-text-webpack-plugin"),"\u5728webpack 4.x\u4e2d\u6ca1\u6709\u505a\u652f\u6301\uff0c\u6240\u4ee5\u9700\u8981\u8fd9\u6837\u5f15\u5165\uff1a",m.a.createElement("code",null,"npm install extract-text-webpack-plugin@next -D")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"const ExtractTextPlugin = require('extract-text-webpack-plugin') //\u624b\u52a8\u5f15\u5165"),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"    //.."),m.a.createElement("span",null,"    module:","{"),m.a.createElement("span",null,"        rules:["),m.a.createElement("span",null,"            // \u8fd9\u91cc\u914d\u7f6esass\u6587\u4ef6\u7684Loader"),m.a.createElement("span",null,"            ","{"),m.a.createElement("span",null,"                test: /\\.scss$/,"),m.a.createElement("span",null,"                use: ExtractTextPlugin.extract(","{"),m.a.createElement("span",null,"                    fallback: 'style-loader',//\u5c06\u89e3\u6790\u7ed3\u679c\u8f6c\u4e3ajs\u4ee3\u7801\uff0c\u52a8\u6001\u63d2\u5165style"),m.a.createElement("span",null,"                    use: [ 'sass-loader','css-loader'] //\u9996\u5148\u5c06sass\u8f6c\u4e3acss,\u7136\u540e\u5904\u7406css\u7684\u4f9d\u8d56\uff0c\u6bd4\u5982@import\u3001url(\uff09\u7b49"),m.a.createElement("span",null,"                })"),m.a.createElement("span",null,"            },"),m.a.createElement("span",null,"            //.."),m.a.createElement("span",null,"        ]"),m.a.createElement("span",null,"    },"),m.a.createElement("span",null,"    plugins: ["),m.a.createElement("span",null,"        //.."),m.a.createElement("span",null,"        //\u8be5plugin\u4f5c\u7528\u662f\u5355\u72ec\u5206\u79bbcss\u6587\u4ef6"),m.a.createElement("span",null,"        new ExtractTextPlugin('index.css'),//\u5206\u79bbcss\u6587\u4ef6\uff0c\u51fa\u53e3index.css"),m.a.createElement("span",null,"    ]"),m.a.createElement("span",null,"    //.."),m.a.createElement("span",null,"}"),m.a.createElement("span",null),m.a.createElement("span",null))),m.a.createElement("h3",{id:"6. Resolve"},"6. Resolve"),m.a.createElement("p",null,"Webpack \u5728\u542f\u52a8\u540e\u4f1a\u4ece\u914d\u7f6e\u7684\u5165\u53e3\u6a21\u5757\u51fa\u53d1\u627e\u51fa\u6240\u6709\u4f9d\u8d56\u7684\u6a21\u5757\uff0cResolve \u914d\u7f6e Webpack \u5982\u4f55\u5bfb\u627e\u6a21\u5757\u6240\u5bf9\u5e94\u7684\u6587\u4ef6\u3002 Webpack \u5185\u7f6e JavaScript \u6a21\u5757\u5316\u8bed\u6cd5\u89e3\u6790\u529f\u80fd\uff0c\u9ed8\u8ba4\u4f1a\u91c7\u7528\u6a21\u5757\u5316\u6807\u51c6\u91cc\u7ea6\u5b9a\u597d\u7684\u89c4\u5219\u53bb\u5bfb\u627e\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u7684\u89c4\u5219\u3002",m.a.createElement("br",null),"\u6bd4\u5982 resolve.alias\u53ef\u4ee5\u8bbe\u7f6e\u8def\u5f84\u7684\u6620\u5c04,\u76f4\u63a5\u4f7f\u7528 components \u4ee3\u66ff ./src/components/\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"resolve:","{"),m.a.createElement("span",null,"  alias:","{"),m.a.createElement("span",null,"    components: './src/components/'"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u60f3\u8ba9\u6e90\u6587\u4ef6\u52a0\u5165\u5230\u6784\u5efa\u6d41\u7a0b\u4e2d\u53bb\u88ab Webpack \u63a7\u5236\uff0c\u914d\u7f6e entry\u3002"),m.a.createElement("li",null,"\u60f3\u81ea\u5b9a\u4e49\u8f93\u51fa\u6587\u4ef6\u7684\u4f4d\u7f6e\u548c\u540d\u79f0\uff0c\u914d\u7f6e output\u3002"),m.a.createElement("li",null,"\u60f3\u81ea\u5b9a\u4e49\u5bfb\u627e\u4f9d\u8d56\u6a21\u5757\u65f6\u7684\u7b56\u7565\uff0c\u914d\u7f6e resolve\u3002"),m.a.createElement("li",null,"\u60f3\u81ea\u5b9a\u4e49\u89e3\u6790\u548c\u8f6c\u6362\u6587\u4ef6\u7684\u7b56\u7565\uff0c\u914d\u7f6e module\uff0c\u901a\u5e38\u662f\u914d\u7f6e module.rules \u91cc\u7684 Loader\uff0c\u5176\u4f59\u5305\u62ec parser\u3001noParse\u7b49\u7b49\u914d\u7f6e\u3002"),m.a.createElement("li",null,"\u5176\u5b83\u7684\u5927\u90e8\u5206\u9700\u6c42\u53ef\u80fd\u8981\u901a\u8fc7 Plugin \u53bb\u5b9e\u73b0\uff0c\u914d\u7f6e plugin\u3002")),m.a.createElement("hr",null),m.a.createElement("h2",{id:"\u7b2c\u4e8c\u7bc7\u7ae0 \u672c\u5730\u670d\u52a1"},"\u7b2c\u4e8c\u7bc7\u7ae0 \u672c\u5730\u670d\u52a1"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u5728\u7b2c\u4e00\u4e2a\u7ae0\u8282\u6211\u4eec\u5df2\u7ecf\u5bf9webpack\u7684\u6574\u4f53\u67b6\u6784\u505a\u4e86\u4e00\u4e2a\u4ecb\u7ecd\u3002\u8fd9\u4e00\u7ae0\uff0c\u6211\u4eec\u5bf9\u5f00\u53d1\u73af\u5883\u7684\u672c\u5730\u670d\u52a1\u6765\u5c55\u5f00\u5206\u6790\u3002\u6211\u4eec\u5e73\u65f6\u5728vue-cli\u8fd8\u662f\u5176\u4ed6\u7684\u811a\u624b\u67b6\u4e5f\u597d\u90fd\u4f1a\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u670d\u52a1\u6765\u8fdb\u884c\u5b9e\u65f6\u7684\u8c03\u8bd5\uff0c\u90a3\u4e48\u8fd9\u4e2a\u529f\u80fd webpack \u662f\u600e\u4e48\u6765\u5b9e\u73b0\u7684\u5462\uff1f")),m.a.createElement("h3",{id:"webpack-dev-server\xa0"},"webpack-dev-server\xa0"),m.a.createElement("p",null,"\u5728",m.a.createElement("code",null,"package.json"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e,\u7136\u540e\u8fd0\u884c ",m.a.createElement("code",null,"npm run start"),"\u5c31\u53ef\u4ee5\u542f\u52a8\u672c\u5730\u670d\u52a1\u4e86\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,'  "scripts": ',"{"),m.a.createElement("span",null,'    "start": "webpack-dev-server --mode development"'),m.a.createElement("span",null,"  }"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u5728 webpack \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e devServer \u5b57\u6bb5\u6765\u914d\u7f6e\uff0c\u6bd4\u5982 port \u3001 publicPath \u7b49\u914d\u7f6e\u9879\u3002 "),m.a.createElement("h3",{id:"webpack-dev-middleware"},"webpack-dev-middleware"),m.a.createElement("p",null,"\u5176\u5b9e\u6211\u4eec\u5728\u524d\u9762\u7528\u5230\u7684 webpack-dev-server \u7528\u7684 nodejs\u73af\u5883\u4e0b\u7684 express \u6846\u67b6\u6765\u5b9e\u73b0\u7684\u3002\u90a3\u6211\u4eec\u662f\u5426\u53ef\u4ee5\u81ea\u5df1\u5229\u7528 nodejs \u6765\u5f00\u53d1\u4e00\u4e2a\u672c\u5730\u73af\u5883\u5462\uff1f\u8fd9\u91cc\u5c31\u5f15\u5165\u4e86\u6211\u4eec\u5728 nodejs \u73af\u5883\u4e0b\u7684\u4e24\u4e2a\u4e2d\u95f4\u4ef6 ",m.a.createElement("code",null,"webpack-dev-middleware"),"\u548c ",m.a.createElement("code",null,"webpack-hot-middleware"),",\u524d\u8005\u662f\u7528\u6765\u542f\u52a8 webpack \u672c\u5730\u670d\u52a1\u7684\u4e2d\u95f4\u4ef6\uff0c\u540e\u8005\u7528\u6765\u5b9e\u73b0\u70ed\u52a0\u8f7d\u3002"),m.a.createElement("p",null,"\u9996\u5148\u6211\u4eec\u5728 build \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a dev-server.js \u6587\u4ef6\uff0c\u7136\u540e\u5728",m.a.createElement("code",null,"package.json"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,'  "scripts": ',"{"),m.a.createElement("span",null,'    \u201cdev\u201d: "node build/dev-server.js"'),m.a.createElement("span",null,"  }"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u7136\u540e\u5f15\u5165",m.a.createElement("code",null,"npm install webpack-dev-middleware webpack-hot-middleware -D"),"\u540e\u5f00\u59cb\u7f16\u5199\u6587\u4ef6\u3002\u5982\u679c\u61c2\u70b9 nodejs \u7684\u8bdd\uff0c\u5f88\u65b9\u4fbf\u5c31\u53ef\u4ee5\u5199\u51fa\u6765\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null),m.a.createElement("span",null,"const webpack = require('webpack');"),m.a.createElement("span",null,'const path = require("path");'),m.a.createElement("span",null,"const express = require('express');"),m.a.createElement("span",null),m.a.createElement("span",null,"const devMiddleware = require('webpack-dev-middleware');"),m.a.createElement("span",null,"const hotMiddleware = require('webpack-hot-middleware');"),m.a.createElement("span",null),m.a.createElement("span",null,"const configFunc = require('../webpack.config')"),m.a.createElement("span",null,"const CONFIG = configFunc()"),m.a.createElement("span",null,"const complier = webpack(CONFIG)"),m.a.createElement("span",null),m.a.createElement("span",null,"CONFIG.mode = 'development'     //\u8bbe\u7f6e\u4e3a\u5f00\u53d1\u73af\u5883"),m.a.createElement("span",null),m.a.createElement("span",null,"const app = express();"),m.a.createElement("span",null),m.a.createElement("span",null,"app.use(devMiddleware(complier, ","{"),m.a.createElement("span",null,"    // \u8fd9\u91cc\u586b\u5199\u4e00\u4e9b\u914d\u7f6e\u9879"),m.a.createElement("span",null,"    //  \u5411\u63a7\u5236\u53f0\u663e\u793a\u4efb\u4f55\u5185\u5bb9 "),m.a.createElement("span",null,"    quiet: true,"),m.a.createElement("span",null,"    //  \u7ed1\u5b9a\u4e2d\u95f4\u4ef6\u7684\u516c\u5171\u8def\u5f84 "),m.a.createElement("span",null,"    //  \u4f7f\u7528\u4e0ewebpack\u76f8\u540c "),m.a.createElement("span",null,"    publicPath: CONFIG.output.publicPath,"),m.a.createElement("span",null),m.a.createElement("span",null,"}))"),m.a.createElement("span",null,"// \u70ed\u52a0\u8f7d"),m.a.createElement("span",null,"app.use(hotMiddleware(complier))"),m.a.createElement("span",null,"app.listen(8085, () => console.log('8085 is running'))"),m.a.createElement("span",null),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u6784\u5efa"},"\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u6784\u5efa"),m.a.createElement("h4",{id:"webpack 3.x\u914d\u7f6e"},"webpack 3.x\u914d\u7f6e"),m.a.createElement("p",null,"\u5728 webpack 3.x \u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 ",m.a.createElement("code",null,"process.env.NODE_ENV")," \u533a\u5206\u4e24\u79cd\u73af\u5883\u3002\u5728",m.a.createElement("code",null,"package.json"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e,"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,'"scripts": ',"{"),m.a.createElement("span",null,'    "build": "NODE_ENV=production webpack",'),m.a.createElement("span",null,'    "develop": "NODE_ENV=development webpack-dev-server"'),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u7136\u540e\u5f15\u5165 DefinePlugin \u63d2\u4ef6\u8fdb\u884c\u5168\u5c40\u53d8\u91cf\u7684\u5199\u5165\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"plugins: ["),m.a.createElement("span",null,"    new webpack.DefinePlugin(","{"),m.a.createElement("span",null,"      // webpack 3.x \u7684 process.env.NODE_ENV \u662f\u901a\u8fc7\u624b\u52a8\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a NODE_ENV=... \u7684\u65b9\u5f0f\u6765\u4f20\u9012\u7684"),m.a.createElement("span",null,"      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),"),m.a.createElement("span",null,"    }),"),m.a.createElement("span",null,"]"),m.a.createElement("span",null))),m.a.createElement("h4",{id:"webpack 4.0\u914d\u7f6e"},"webpack 4.0\u914d\u7f6e"),m.a.createElement("p",null,"webpack 4.x \u7248\u672c\u5f15\u5165\u4e86 mode \u7684\u6982\u5ff5\uff0c\u5728\u8fd0\u884c webpack \u65f6\u9700\u8981\u6307\u5b9a\u4f7f\u7528 production \u6216 development \u4e24\u4e2a mode \u5176\u4e2d\u4e00\u4e2a\u3002\u914d\u7f6e\u6307\u4ee4\u5982\u4e0b\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,'"scripts": ',"{"),m.a.createElement("span",null,'    "build": "webpack --mode production",'),m.a.createElement("span",null,'    "start": "webpack-dev-server --mode development",'),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,m.a.createElement("strong",null,"production mode")," \u65f6\uff0c\u9ed8\u8ba4\u4f1a\u542f\u7528\u5404\u79cd\u6027\u80fd\u4f18\u5316\u7684\u529f\u80fd\uff0c\u5305\u62ec\u6784\u5efa\u7ed3\u679c\u4f18\u5316\u4ee5\u53ca webpack \u8fd0\u884c\u6027\u80fd\u4f18\u5316\u3002",m.a.createElement("br",null),"- \u751f\u4ea7\u73af\u5883\u53ef\u80fd\u9700\u8981\u5206\u79bb CSS \u6210\u5355\u72ec\u7684\u6587\u4ef6\uff0c\u4ee5\u4fbf\u591a\u4e2a\u9875\u9762\u5171\u4eab\u540c\u4e00\u4e2a CSS \u6587\u4ef6",m.a.createElement("br",null),"- \u751f\u4ea7\u73af\u5883\u9700\u8981\u538b\u7f29 HTML/CSS/JS \u4ee3\u7801",m.a.createElement("br",null),"- \u751f\u4ea7\u73af\u5883\u9700\u8981\u538b\u7f29\u56fe\u7247"),m.a.createElement("p",null,m.a.createElement("strong",null,"development mode")," \u65f6\uff0c\u4f1a\u5f00\u542f debug \u5de5\u5177\uff0c\u8fd0\u884c\u65f6\u6253\u5370\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u4ee5\u53ca\u66f4\u52a0\u5feb\u901f\u7684\u589e\u91cf\u7f16\u8bd1\u6784\u5efa\u3002",m.a.createElement("br",null),"- \u5f00\u53d1\u73af\u5883\u9700\u8981\u751f\u6210 sourcemap \u6587\u4ef6",m.a.createElement("br",null),"- \u5f00\u53d1\u73af\u5883\u9700\u8981\u6253\u5370 debug \u4fe1\u606f",m.a.createElement("br",null),"- \u5f00\u53d1\u73af\u5883\u9700\u8981 live reload \u6216\u8005 hot reload \u7684\u529f\u80fd"),m.a.createElement("p",null,"\u540c\u65f6\uff0c\u5728webpack\u914d\u7f6e\u65f6\u6211\u4eec\u9700\u8981\u5c06mode\u53c2\u6570\u66b4\u9732\u51fa\u53bb\uff0c\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570\u5f62\u5f0f\u8fdb\u884c\u4f20\u9012\uff0c\u5982\u4e0b\u4ee3\u7801\u793a\u4f8b\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"module.exports = (env, argv) => (","{"),m.a.createElement("span",null,"return","{"),m.a.createElement("span",null,"    mode:argv.mode"),m.a.createElement("span",null,"    // ... \u5176\u4ed6\u914d\u7f6e"),m.a.createElement("span",null,"  })"),m.a.createElement("span",null))),m.a.createElement("hr",null),m.a.createElement("h2",{id:"\u7b2c\u4e09\u7bc7\u7ae0 \u4f18\u5316"},"\u7b2c\u4e09\u7bc7\u7ae0 \u4f18\u5316"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u8fd9\u4e00\u73af\u8282\u6211\u4eec\u6765\u804a\u4e00\u804a\u5982\u4f55\u901a\u8fc7\u914d\u7f6ewebpack\u6765\u4f7f\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u65f6\u6765\u4f18\u5316\u6211\u4eec\u7684\u9879\u76ee\u4ee3\u7801\u3002")),m.a.createElement("h3",{id:"image-webpack-loader \u56fe\u7247\u538b\u7f29"},"image-webpack-loader \u56fe\u7247\u538b\u7f29"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u4e4b\u524d\u4f7f\u7528 file-loader \u6765\u5904\u7406\u56fe\u7247\u6587\u4ef6\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u518d\u6dfb\u52a0\u4e00\u4e2a image-webpack-loader \u6765\u538b\u7f29\u56fe\u7247\u6587\u4ef6\u3002\u914d\u7f6e\u5982\u4e0b\uff1a")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"rules:["),m.a.createElement("span",null,"    ..."),m.a.createElement("span",null,"      ","{"),m.a.createElement("span",null,"        test: /\\.(jpg|jpeg|png|gif)$/,"),m.a.createElement("span",null,"        use: ["),m.a.createElement("span",null,"            ","{"),m.a.createElement("span",null,"                loader: 'file-loader',"),m.a.createElement("span",null,"                options: ","{"),m.a.createElement("span",null,"                    name: '[name].[ext]',"),m.a.createElement("span",null,"                    outputPath: 'assets/img'"),m.a.createElement("span",null,"                }"),m.a.createElement("span",null,"            },"),m.a.createElement("span",null,"            // \u56fe\u7247\u538b\u7f29"),m.a.createElement("span",null,"            ","{"),m.a.createElement("span",null,"                loader: 'image-webpack-loader',"),m.a.createElement("span",null,"                options: ","{"),m.a.createElement("span",null,"                    mozjpeg: ","{"," // \u538b\u7f29 jpeg \u7684\u914d\u7f6e"),m.a.createElement("span",null,"                        progressive: true,"),m.a.createElement("span",null,"                        quality: 65"),m.a.createElement("span",null,"                    },"),m.a.createElement("span",null,"                    optipng: ","{"," // \u4f7f\u7528 imagemin-optipng \u538b\u7f29 png\uff0cenable: false \u4e3a\u5173\u95ed"),m.a.createElement("span",null,"                        enabled: false,"),m.a.createElement("span",null,"                    },"),m.a.createElement("span",null,"                    pngquant: ","{"," // \u4f7f\u7528 imagemin-pngquant \u538b\u7f29 png"),m.a.createElement("span",null,"                        quality: '65-90',"),m.a.createElement("span",null,"                        speed: 4"),m.a.createElement("span",null,"                    },"),m.a.createElement("span",null,"                    gifsicle: ","{"," // \u538b\u7f29 gif \u7684\u914d\u7f6e"),m.a.createElement("span",null,"                        interlaced: false,"),m.a.createElement("span",null,"                    },"),m.a.createElement("span",null,"                }"),m.a.createElement("span",null,"            },"),m.a.createElement("span",null,"        ]"),m.a.createElement("span",null,"]"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u4f7f\u7528 url-loader \u5c06\u6587\u4ef6\u8f6c\u4e3a DataURL"},"\u4f7f\u7528 url-loader \u5c06\u6587\u4ef6\u8f6c\u4e3a DataURL"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"url-loader\u5c01\u88c5\u4e86 file-loader ,\u62e5\u6709\u5176\u57fa\u672c\u529f\u80fd\u6240\u4ee5\u4e0d\u9700\u8981\u4f9d\u8d56 file-loader\uff0c\u5f53\u56fe\u7247\u5927\u5c0f\u5c0f\u4e8elimit\u503c\u65f6\uff0c\u4f1a\u76f4\u63a5\u5c06\u6587\u4ef6\u8d44\u6e90\u8f6c\u4e3a base64 \u7f16\u7801\u7684 DataURL\u3002")),m.a.createElement("p",null,"\u914d\u7f6e\u5982\u4e0b\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"rules:["),m.a.createElement("span",null,"    ..."),m.a.createElement("span",null,"      ","{"),m.a.createElement("span",null,"        test: /\\.(jpg|jpeg|png|gif)$/,"),m.a.createElement("span",null,"        use: ["),m.a.createElement("span",null,"            ","{"),m.a.createElement("span",null,"                loader: 'url-loader',"),m.a.createElement("span",null,"                options: ","{"),m.a.createElement("span",null,"                    limit: 8192, // \u5355\u4f4d\u662f Byte\uff0c\u5f53\u6587\u4ef6\u5c0f\u4e8e 8KB \u65f6\u4f5c\u4e3a DataURL \u5904\u7406"),m.a.createElement("span",null,"                }"),m.a.createElement("span",null,"            },"),m.a.createElement("span",null,"            // \u56fe\u7247\u538b\u7f29"),m.a.createElement("span",null,"            ","{"),m.a.createElement("span",null,"                loader: 'image-webpack-loader',"),m.a.createElement("span",null,"                options: ","{"),m.a.createElement("span",null,"                    mozjpeg: ","{"," // \u538b\u7f29 jpeg \u7684\u914d\u7f6e"),m.a.createElement("span",null,"                        progressive: true,"),m.a.createElement("span",null,"                        quality: 65"),m.a.createElement("span",null,"                    },"),m.a.createElement("span",null,"                    optipng: ","{"," // \u4f7f\u7528 imagemin-optipng \u538b\u7f29 png\uff0cenable: false \u4e3a\u5173\u95ed"),m.a.createElement("span",null,"                        enabled: false,"),m.a.createElement("span",null,"                    },"),m.a.createElement("span",null,"                    pngquant: ","{"," // \u4f7f\u7528 imagemin-pngquant \u538b\u7f29 png"),m.a.createElement("span",null,"                        quality: '65-90',"),m.a.createElement("span",null,"                        speed: 4"),m.a.createElement("span",null,"                    },"),m.a.createElement("span",null,"                    gifsicle: ","{"," // \u538b\u7f29 gif \u7684\u914d\u7f6e"),m.a.createElement("span",null,"                        interlaced: false,"),m.a.createElement("span",null,"                    },"),m.a.createElement("span",null,"                }"),m.a.createElement("span",null,"            },"),m.a.createElement("span",null,"        ]"),m.a.createElement("span",null,"]"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u5206\u79bb\u4ee3\u7801\u6587\u4ef6"},"\u5206\u79bb\u4ee3\u7801\u6587\u4ef6"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u5047\u8bbe\u6211\u4eec\u539f\u672c\u9875\u9762\u7684\u9759\u6001\u8d44\u6e90\u90fd\u6253\u5305\u6210\u4e00\u4e2a JS \u6587\u4ef6\uff0c\u52a0\u8f7d\u9875\u9762\u65f6\u867d\u7136\u53ea\u9700\u8981\u52a0\u8f7d\u4e00\u4e2a JS \u6587\u4ef6\uff0c\u4f46\u662f\u6211\u4eec\u7684\u4ee3\u7801\u4e00\u65e6\u6539\u53d8\u4e86\uff0c\u7528\u6237\u8bbf\u95ee\u65b0\u7684\u9875\u9762\u65f6\u5c31\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u4e00\u4e2a\u65b0\u7684 JS \u6587\u4ef6\u3002\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u662f\u5355\u72ec\u4fee\u6539\u4e86\u6837\u5f0f\uff0c\u8fd9\u6837\u4e5f\u8981\u91cd\u65b0\u52a0\u8f7d\u6574\u4e2a\u5e94\u7528\u7684 JS \u6587\u4ef6\uff0c\u76f8\u5f53\u4e0d\u5212\u7b97\u3002\u6240\u4ee5\u5206\u79bb\u4ee3\u7801\u6587\u4ef6\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u5229\u7528\u7f13\u5b58\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u5f00\u652f\u3002")),m.a.createElement("p",null,"Webpcak4.0 \u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 optimization \u6765\u8fdb\u884c\u914d\u7f6e\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"  // ... webpack \u914d\u7f6e"),m.a.createElement("span",null),m.a.createElement("span",null,"  optimization: ","{"),m.a.createElement("span",null,"    splitChunks: ","{"),m.a.createElement("span",null,'      chunks: "all", // \u6240\u6709\u7684 chunks \u4ee3\u7801\u516c\u5171\u7684\u90e8\u5206\u5206\u79bb\u51fa\u6765\u6210\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6'),m.a.createElement("span",null,"    },"),m.a.createElement("span",null,"  },"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f46\u662f\uff0c\u6211\u4eec\u5efa\u8bae\u5c06\u7b2c\u4e09\u65b9\u7c7b\u5e93\u663e\u5f0f\u5730\u914d\u7f6e\u4e3a\u516c\u5171\u7684\u90e8\u5206\uff0c\u56e0\u4e3a\u7b2c\u4e09\u65b9\u7c7b\u5e93\u7684\u66f4\u65b0\u9891\u7387\u8f83\u4f4e\u3002\u914d\u7f6e\u5982\u4e0b\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"optimization: ","{"),m.a.createElement("span",null,"    splitChunks: ","{"),m.a.createElement("span",null,"        cacheGroups: ","{"),m.a.createElement("span",null,"            commons: ","{"),m.a.createElement("span",null,"                name: 'commons',"),m.a.createElement("span",null,"                chunks: 'initial',"),m.a.createElement("span",null,"                minChunks: 2"),m.a.createElement("span",null,"            }"),m.a.createElement("span",null,"        }"),m.a.createElement("span",null,"    },"),m.a.createElement("span",null,"},"),m.a.createElement("span",null)))))}}]),l}(m.a.Component)}}]);
//# sourceMappingURL=40.828b9acc.chunk.js.map