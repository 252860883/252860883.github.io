(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{133:function(e,l,a){},135:function(e,l,a){"use strict";a.d(l,"a",function(){return p});var n=a(4),t=a(5),r=a(7),c=a(6),u=a(8),s=a(0),m=a.n(s),p=(a(136),function(e){function l(){return Object(n.a)(this,l),Object(r.a)(this,Object(c.a)(l).apply(this,arguments))}return Object(u.a)(l,e),Object(t.a)(l,[{key:"componentDidMount",value:function(){}},{key:"clickPosBtn",value:function(e){var l=document.getElementById(e);window.scrollTo({top:l.offsetTop-10,left:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(l,a){return m.a.createElement("span",{className:"a"+l.level,key:a,onClick:e.clickPosBtn.bind(e,l.title)},l.title)}))))}}]),l}(m.a.Component))},136:function(e,l,a){},85:function(e,l,a){"use strict";a.r(l),a.d(l,"default",function(){return E});var n=a(4),t=a(5),r=a(7),c=a(6),u=a(8),s=a(0),m=a.n(s),p=(a(133),a(135)),E=function(e){function l(){var e;return Object(n.a)(this,l),(e=Object(r.a)(this,Object(c.a)(l).call(this))).state={headerLink:[{level:"h3",title:"1. \u4e3a\u4ec0\u4e48\u7528webpack\uff1f"},{level:"h3",title:"2. \u5b89\u88c5"},{level:"h3",title:"3. \u5165\u53e3\u4e0e\u8f93\u51fa"},{level:"h3",title:"4. Loader"},{level:"h3",title:"5. Plugin"},{level:"h3",title:"6. Resolve"},{level:"h3",title:"\u603b\u7ed3"}]},e}return Object(u.a)(l,e),Object(t.a)(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(p.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"\u6df1\u5165webpack4.0\uff08\u4e00\uff09\u6574\u4f53\u67b6\u6784")),m.a.createElement("blockquote",null,m.a.createElement("p",null,"webpack \u662f\u4e00\u4e2a JS \u4ee3\u7801\u6a21\u5757\u5316\u7684\u6253\u5305\u5de5\u5177\uff0c\u85c9\u7531\u5b83\u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff0c\u968f\u7740\u793e\u533a\u7684\u53d1\u5c55\uff0c\u9010\u6e10\u6210\u4e3a\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\u7684\u6784\u5efa\u5de5\u5177\u3002\u4f46\u662f\u5e73\u65f6\u5f00\u53d1\u4e1a\u52a1\u7684\u65f6\u5019\u8bb8\u591a\u6846\u67b6\u90fd\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684\u811a\u624b\u67b6\uff0c\u4f7f\u5f97\u6211\u4eec\u5728\u5f00\u53d1\u4e1a\u52a1\u7684\u65f6\u5019\u5f88\u7701\u4e8b\uff0c\u5374\u5bf9webpack\u8d8a\u6765\u8d8a\u964c\u751f\uff0c\u6240\u4ee5\u7531\u6b64\u6765\u5bf9webpack\u6765\u6b21\u6df1\u5165\u7684\u4e86\u89e3\u3002"),m.a.createElement("h3",{id:"1. \u4e3a\u4ec0\u4e48\u7528webpack\uff1f"},"1. \u4e3a\u4ec0\u4e48\u7528webpack\uff1f")),m.a.createElement("p",null,"\u968f\u7740\u524d\u7aef\u5de5\u7a0b\u5316\u7684\u53d1\u5c55\uff0c\u6d8c\u73b0\u51fa\u4e86\u8bb8\u591a\u6846\u67b6\u7c7b\u5e93\uff0c\u4f46\u662f\u8fd9\u4e9b\u6e90\u4ee3\u7801\u65e0\u6cd5\u76f4\u63a5\u8fd0\u884c\uff0c\u9700\u8981\u7ecf\u8fc7\u5de5\u5177\u8f6c\u5316\u624d\u53ef\u4ee5\u3002\u9664\u4e86webpack\u8fd9\u4e2a\u6784\u5efa\u5de5\u5177\uff0c\u8fd8\u6709\u6211\u4eec\u4e86\u89e3\u7684Grunt\u3001Gulp\u7b49\u3002"),m.a.createElement("p",null,m.a.createElement("strong",null,"Grunt"),m.a.createElement("br",null),"Grunt \u6709\u5927\u91cf\u73b0\u6210\u7684\u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528\uff0c\u4e5f\u80fd\u7ba1\u7406\u4efb\u52a1\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u81ea\u52a8\u5316\u6267\u884c\u4f9d\u8d56\u7684\u4efb\u52a1\uff0c\u6bcf\u4e2a\u4efb\u52a1\u7684\u5177\u4f53\u6267\u884c\u4ee3\u7801\u548c\u4f9d\u8d56\u5173\u7cfb\u5199\u5728\u914d\u7f6e\u6587\u4ef6 Gruntfile.js \u91cc\u3002grunt\u7684\u597d\u5904\u5c31\u662f\u7075\u6d3b\uff0c\u53ea\u6267\u884c\u5b9a\u4e49\u597d\u7684\u4efb\u52a1\uff0c\u540c\u65f6\u4e5f\u6709\u5927\u91cf\u7684\u53ef\u590d\u7528\u7684\u63d2\u4ef6\u3002\u4f46\u662fgrunt\u96c6\u6210\u5ea6\u4e0d\u9ad8\uff0c\u9700\u8981\u624b\u52a8\u7f16\u5199\u5f88\u591a\u914d\u7f6e\uff0c\u4e0d\u80fd\u4e0a\u624b\u5373\u7528\u3002"),m.a.createElement("p",null,m.a.createElement("strong",null,"Gulp"),m.a.createElement("br",null),"gulp\u662f\u4e00\u4e2a\u57fa\u4e8e\u81ea\u52a8\u5316\u7684\u6784\u5efa\u5de5\u5177\uff0c\u9664\u4e86\u53ef\u4ee5\u7ba1\u7406\u548c\u6267\u884c\u4efb\u52a1\uff0c\u8fd8\u652f\u6301\u76d1\u542c\u6587\u4ef6\u3001\u8bfb\u5199\u6587\u4ef6\u3002gulp\u5f15\u5165\u4e86\u6d41\u7684\u6982\u5ff5\uff0c\u6d41\u53ef\u4ee5\u5728\u63d2\u4ef6\u95f4\u4f20\u9012\u3002\u76f8\u8f83\u4e8egrunt\uff0cgulp\u7684\u529f\u80fd\u66f4\u5b8c\u5584\uff0c\u4f46\u662f\u4ecd\u7136\u5b58\u5728\u96c6\u6210\u5ea6\u4e0d\u9ad8\u9700\u8981\u624b\u52a8\u914d\u7f6e\u7684\u95ee\u9898\u3002"),m.a.createElement("p",null,m.a.createElement("strong",null,"Webpack"),m.a.createElement("br",null),"webpack\u662f\u4e00\u4e2a\u6253\u5305\u6a21\u5757\u5316 JavaScript \u7684\u5de5\u5177\uff0c\u5728 Webpack \u91cc\u4e00\u5207\u6587\u4ef6\u7686\u6a21\u5757\uff0c\u901a\u8fc7 Loader \u8f6c\u6362\u6587\u4ef6\uff0c\u901a\u8fc7 Plugin \u6ce8\u5165\u94a9\u5b50\uff0c\u6700\u540e\u8f93\u51fa\u7531\u591a\u4e2a\u6a21\u5757\u7ec4\u5408\u6210\u7684\u6587\u4ef6\u3002Webpack \u4e13\u6ce8\u4e8e\u6784\u5efa\u6a21\u5757\u5316\u9879\u76ee\u3002webpack\u5177\u6709\u5f88\u5927\u7684\u7075\u6d3b\u6027\u548c\u62d3\u5c55\u6027\uff0c\u4e13\u6ce8\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u53ef\u4ee5\u505a\u5230\u5f00\u7bb1\u5373\u7528\uff0c\u540c\u65f6\u4f7f\u7528\u573a\u666f\u4e0d\u4ec5\u9650\u4e8eWeb\u5f00\u53d1\uff0c\u5177\u6709\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002",m.a.createElement("br",null),"\u73b0\u5728\u793e\u533a\u91cc\u9762\u57fa\u4e8ewebpack\u7684\u811a\u624b\u67b6\u5927\u81f4\u6709\uff1a react \u7684 create-react-app \u3001 vue \u7684 vue-cli \u3001 Angular \u7684 angular-cli\u7b49\u3002"),m.a.createElement("h3",{id:"2. \u5b89\u88c5"},"2. \u5b89\u88c5"),m.a.createElement("p",null,"\u9996\u5148\u8f93\u5165\u6307\u4ee4 ",m.a.createElement("code",null,"npm install webpack webpack-cli -g")," \u5b89\u88c5webback\uff0c\u6307\u4ee4 ",m.a.createElement("code",null,"npm init")," \u5b89\u88c5package.json\u6587\u4ef6\u3002Webpack \u5728\u6267\u884c\u6784\u5efa\u65f6\u9ed8\u8ba4\u4f1a\u4ece\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 webpack.config.js \u6587\u4ef6\u8bfb\u53d6\u914d\u7f6e\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u624b\u52a8\u65b0\u5efa\u8be5\u6587\u4ef6\u3002\u524d\u671f\u7684\u51c6\u5907\u5de5\u4f5c\u7ed3\u675f\uff0c\u4e0b\u9762\u6211\u4eec\u5c31\u5f00\u59cb\u8fdb\u5165\u795e\u5947\u7684webpack\u4e16\u754c\u4e86\uff01"),m.a.createElement("h3",{id:"3. \u5165\u53e3\u4e0e\u8f93\u51fa"},"3. \u5165\u53e3\u4e0e\u8f93\u51fa"),m.a.createElement("p",null,"\u5728\u591a\u4e2a\u4ee3\u7801\u6a21\u5757\u4e2d\u4f1a\u6709\u4e00\u4e2a\u8d77\u59cb\u7684 .js \u6587\u4ef6\uff0c\u6211\u4eec\u5c06\u6b64\u6587\u4ef6\u4f5c\u4e3a webpack \u6784\u5efa\u7684\u5165\u53e3\uff0c\u540c\u65f6webpack\u652f\u6301\u591a\u4e2a\u5165\u53e3\u914d\u7f6e\uff0c\u5982\u4e0b\u4ee3\u7801\u914d\u7f6e\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"  entry: './src/index.js' "),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"webpack\u7684\u8f93\u51fa\u6307\u7684\u662fwebpack\u6700\u7ec8\u6784\u5efa\u51fa\u6765\u7684\u9759\u6001\u6587\u4ef6\u3002\u901a\u8fc7output\u5b57\u6bb5\u5b9a\u4e49,\u5982\u4e0b\u6240\u793a\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"    //..."),m.a.createElement("span",null,"    output: ","{"),m.a.createElement("span",null,"        path: __dirname + '/dist',// __dirname\u6307\u5411\u88abjs\u6587\u4ef6\u6267\u884c\u7684\u7edd\u5bf9\u8def\u5f84"),m.a.createElement("span",null,"        filename: 'assets/index[hash].js',// [hash]\u53ef\u4ee5\u4fdd\u8bc1\u6bcf\u6b21\u6587\u4ef6\u540d\u90fd\u4e0d\u76f8\u540c"),m.a.createElement("span",null,"    },"),m.a.createElement("span",null,"    //..."),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"4. Loader"},"4. Loader"),m.a.createElement("p",null,"Loader \u53ef\u4ee5\u770b\u4f5c\u662f webpack \u7684\u8f6c\u6362\u5668\u6216\u8005\u201c\u7ffb\u8bd1\u5458\u201d\uff0c\u628a\u4ee3\u7801\u8f6c\u6362\u6210 webpack \u53ef\u4ee5\u6253\u5305\u7684\u6a21\u5757\uff0c\u5728 module.rules \u4e0b\u914d\u7f6e\u3002\u683c\u5f0f\u5982\u4e0b\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"  // ..."),m.a.createElement("span",null,"  module: ","{"),m.a.createElement("span",null,"    noParse: /jquery|lodash/, // \u6b63\u5219\u8868\u8fbe\u5f0f"),m.a.createElement("span",null,"    rules: [ "),m.a.createElement("span",null,"      ","{"),m.a.createElement("span",null,"        test: /\\.jsx?/, // \u6587\u4ef6\u540e\u7f00\u6761\u4ef6"),m.a.createElement("span",null,"        include: [ "),m.a.createElement("span",null,"          path.resolve(__dirname, 'src'),"),m.a.createElement("span",null,"        ], // \u6587\u4ef6\u6240\u5728\u8def\u5f84\u4f4d\u7f6e\u6761\u4ef6"),m.a.createElement("span",null,"        use: 'babel-loader', // \u89c4\u5219\u5e94\u7528\u7ed3\u679c\x0e"),m.a.createElement("span",null,"      },"),m.a.createElement("span",null,"      // ..."),m.a.createElement("span",null,"    ],"),m.a.createElement("span",null,"  },"),m.a.createElement("span",null,"}..."),m.a.createElement("span",null))),m.a.createElement("p",null,m.a.createElement("strong",null,"\u5339\u914d\u89c4\u5219"),"\uff08\u5b57\u7b26\u4e32\u3001\u6b63\u5219\u3001\u51fd\u6570\u3001\u6570\u7ec4\u3001\u5bf9\u8c61\uff09\uff1a",m.a.createElement("br",null),"* ","{"," test: ... } \u5339\u914d\u7279\u5b9a\u6761\u4ef6 ",m.a.createElement("br",null),"* ","{"," include: ... } \u5339\u914d\u7279\u5b9a\u8def\u5f84 ",m.a.createElement("br",null),"* ","{"," exclude: ... } \u6392\u9664\u7279\u5b9a\u8def\u5f84 ",m.a.createElement("br",null),"* ","{"," and: [...] }\u5fc5\u987b\u5339\u914d\u6570\u7ec4\u4e2d\u6240\u6709\u6761\u4ef6 ",m.a.createElement("br",null),"* ","{"," or: [...] } \u5339\u914d\u6570\u7ec4\u4e2d\u4efb\u610f\u4e00\u4e2a\u6761\u4ef6 ",m.a.createElement("br",null),"* ","{"," not: [...] } \u6392\u9664\u5339\u914d\u6570\u7ec4\u4e2d\u6240\u6709\u6761\u4ef6"),m.a.createElement("p",null,m.a.createElement("strong",null,"\u6267\u884c\u987a\u5e8f"),m.a.createElement("br",null),"\u6267\u884c\u987a\u5e8f\u662f\u4ece\u6700\u540e\u914d\u7f6e\u7684 loader \u5f00\u59cb\uff0c\u4e00\u6b65\u6b65\u5f80\u524d\u6267\u884c\u3002",m.a.createElement("br",null),'rule.enforce \u53ef\u4ee5\u8bbe\u7f6e loader \u79cd\u7c7b\uff0c\u9ed8\u8ba4\u4e3a\u666e\u901a\uff0c\u53ef\u4ee5\u8bbe\u7f6e \u201cpre\u201d\uff08\u524d\u7f6e\uff09\u3001post\uff08\u540e\u7f6e\uff09\uff0c\u8fd8\u6709\u4e00\u4e2a\u989d\u5916\u7684\u79cd\u7c7b"\u884c\u5185 loader"\uff0c\u88ab\u5e94\u7528\u5728 import/require \u884c\u5185\u3002',m.a.createElement("br",null),"\u79cd\u7c7b\u7684\u6267\u884c\u4f18\u5148\u7ea7\uff1a\u524d\u7f6e>\u884c\u5185>\u666e\u901a>\u540e\u7f6e"),m.a.createElement("p",null,m.a.createElement("strong",null,"noPrase"),m.a.createElement("br",null),"\u4e0d\u9700\u8981\u89e3\u6790\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u7c7b\u5e93\u53ef\u4ee5\u914d\u7f6e\u5728 noParse \u4e2d\uff0c\u4f46\u662f\u9700\u6ce8\u610f\u4f7f\u7528\xa0noParse\xa0\u8fdb\u884c\u5ffd\u7565\u7684\u6a21\u5757\u6587\u4ef6\u4e2d\u4e0d\u80fd\u4f7f\u7528\xa0import\u3001require\u3001define\xa0\u7b49\u5bfc\u5165\u673a\u5236\u3002"),m.a.createElement("h3",{id:"5. Plugin"},"5. Plugin"),m.a.createElement("p",null,"Plugin \u662f\u7528\u6765\u6269\u5c55 Webpack \u529f\u80fd\u7684\uff0c\u5904\u7406\u5176\u4ed6\u7684\u6784\u5efa\u4efb\u52a1\uff0c\u6a21\u5757\u8f6c\u6362\u7684\u5de5\u4f5c\u7ed9 loader \u505a\uff0c\u5269\u4e0b\u7684\u5de5\u4f5c\u7531 plugin \u5b8c\u6210\u3002\uff0c\u901a\u8fc7\u5728\u6784\u5efa\u6d41\u7a0b\u91cc\u6ce8\u5165\u94a9\u5b50\u5b9e\u73b0\uff0c\u5b83\u7ed9 Webpack \u5e26\u6765\u4e86\u5f88\u5927\u7684\u7075\u6d3b\u6027\u3002plugin\u5b89\u88c5\u540e\u9700\u8981\u624b\u52a8\u5f15\u5165\u3002\u4e0b\u9762\u4ee5\u914d\u7f6esass\u793a\u4f8b,\u6ce8\u610f\u5176\u4e2d\u7528\u5230\u4e86\u63d2\u4ef6",m.a.createElement("code",null,"extract-text-webpack-plugin"),"\u5728webpack 4.x\u4e2d\u6ca1\u6709\u505a\u652f\u6301\uff0c\u6240\u4ee5\u9700\u8981\u8fd9\u6837\u5f15\u5165\uff1a",m.a.createElement("code",null,"npm install extract-text-webpack-plugin@next -D")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"const ExtractTextPlugin = require('extract-text-webpack-plugin') //\u624b\u52a8\u5f15\u5165"),m.a.createElement("span",null,"module.exports = ","{"),m.a.createElement("span",null,"    //.."),m.a.createElement("span",null,"    module:","{"),m.a.createElement("span",null,"        rules:["),m.a.createElement("span",null,"            // \u8fd9\u91cc\u914d\u7f6esass\u6587\u4ef6\u7684Loader"),m.a.createElement("span",null,"            ","{"),m.a.createElement("span",null,"                test: /\\.scss$/,"),m.a.createElement("span",null,"                use: ExtractTextPlugin.extract(","{"),m.a.createElement("span",null,"                    fallback: 'style-loader',//\u5c06\u89e3\u6790\u7ed3\u679c\u8f6c\u4e3ajs\u4ee3\u7801\uff0c\u52a8\u6001\u63d2\u5165style"),m.a.createElement("span",null,"                    use: [ 'sass-loader','css-loader'] //\u9996\u5148\u5c06sass\u8f6c\u4e3acss,\u7136\u540e\u5904\u7406css\u7684\u4f9d\u8d56\uff0c\u6bd4\u5982@import\u3001url(\uff09\u7b49"),m.a.createElement("span",null,"                })"),m.a.createElement("span",null,"            },"),m.a.createElement("span",null,"            //.."),m.a.createElement("span",null,"        ]"),m.a.createElement("span",null,"    },"),m.a.createElement("span",null,"    plugins: ["),m.a.createElement("span",null,"        //.."),m.a.createElement("span",null,"        //\u8be5plugin\u4f5c\u7528\u662f\u5355\u72ec\u5206\u79bbcss\u6587\u4ef6"),m.a.createElement("span",null,"        new ExtractTextPlugin('index.css'),//\u5206\u79bbcss\u6587\u4ef6\uff0c\u51fa\u53e3index.css"),m.a.createElement("span",null,"    ]"),m.a.createElement("span",null,"    //.."),m.a.createElement("span",null,"}"),m.a.createElement("span",null),m.a.createElement("span",null))),m.a.createElement("h3",{id:"6. Resolve"},"6. Resolve"),m.a.createElement("p",null,"Webpack \u5728\u542f\u52a8\u540e\u4f1a\u4ece\u914d\u7f6e\u7684\u5165\u53e3\u6a21\u5757\u51fa\u53d1\u627e\u51fa\u6240\u6709\u4f9d\u8d56\u7684\u6a21\u5757\uff0cResolve \u914d\u7f6e Webpack \u5982\u4f55\u5bfb\u627e\u6a21\u5757\u6240\u5bf9\u5e94\u7684\u6587\u4ef6\u3002 Webpack \u5185\u7f6e JavaScript \u6a21\u5757\u5316\u8bed\u6cd5\u89e3\u6790\u529f\u80fd\uff0c\u9ed8\u8ba4\u4f1a\u91c7\u7528\u6a21\u5757\u5316\u6807\u51c6\u91cc\u7ea6\u5b9a\u597d\u7684\u89c4\u5219\u53bb\u5bfb\u627e\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u7684\u89c4\u5219\u3002",m.a.createElement("br",null),"\u6bd4\u5982 resolve.alias\u53ef\u4ee5\u8bbe\u7f6e\u8def\u5f84\u7684\u6620\u5c04,\u76f4\u63a5\u4f7f\u7528 components \u4ee3\u66ff ./src/components/\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"resolve:","{"),m.a.createElement("span",null,"  alias:","{"),m.a.createElement("span",null,"    components: './src/components/'"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u60f3\u8ba9\u6e90\u6587\u4ef6\u52a0\u5165\u5230\u6784\u5efa\u6d41\u7a0b\u4e2d\u53bb\u88ab Webpack \u63a7\u5236\uff0c\u914d\u7f6e entry\u3002"),m.a.createElement("li",null,"\u60f3\u81ea\u5b9a\u4e49\u8f93\u51fa\u6587\u4ef6\u7684\u4f4d\u7f6e\u548c\u540d\u79f0\uff0c\u914d\u7f6e output\u3002"),m.a.createElement("li",null,"\u60f3\u81ea\u5b9a\u4e49\u5bfb\u627e\u4f9d\u8d56\u6a21\u5757\u65f6\u7684\u7b56\u7565\uff0c\u914d\u7f6e resolve\u3002"),m.a.createElement("li",null,"\u60f3\u81ea\u5b9a\u4e49\u89e3\u6790\u548c\u8f6c\u6362\u6587\u4ef6\u7684\u7b56\u7565\uff0c\u914d\u7f6e module\uff0c\u901a\u5e38\u662f\u914d\u7f6e module.rules \u91cc\u7684 Loader\uff0c\u5176\u4f59\u5305\u62ec parser\u3001noParse\u7b49\u7b49\u914d\u7f6e\u3002"),m.a.createElement("li",null,"\u5176\u5b83\u7684\u5927\u90e8\u5206\u9700\u6c42\u53ef\u80fd\u8981\u901a\u8fc7 Plugin \u53bb\u5b9e\u73b0\uff0c\u914d\u7f6e plugin\u3002"))))}}]),l}(m.a.Component)}}]);
//# sourceMappingURL=46.5ce38b42.chunk.js.map