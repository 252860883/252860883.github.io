(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{101:function(e,n,l){},103:function(e,n,l){"use strict";l.d(n,"a",function(){return i});var t=l(4),a=l(5),r=l(7),c=l(6),s=l(8),u=l(0),m=l.n(u),i=(l(104),function(e){function n(){var e,l;Object(t.a)(this,n);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return(l=Object(r.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(s)))).clickPosBtn=function(e){var n=document.getElementById(e);window.scrollTo({top:n.offsetTop-10,left:0,behavior:"smooth"})},l}return Object(s.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"headerLink"},m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"real-content"},m.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(n,l){return m.a.createElement("span",{className:"a"+n.level,key:l,onClick:function(){return e.clickPosBtn(n.title)}},n.title)}))))}}]),n}(m.a.Component))},104:function(e,n,l){},62:function(e,n,l){"use strict";l.r(n),l.d(n,"default",function(){return E});var t=l(4),a=l(5),r=l(7),c=l(6),s=l(8),u=l(0),m=l.n(u),i=(l(101),l(103)),E=function(e){function n(){var e;return Object(t.a)(this,n),(e=Object(r.a)(this,Object(c.a)(n).call(this))).state={headerLink:[{level:"h3",title:"\u4f20\u7edf\u61d2\u52a0\u8f7d\u65b9\u6848"},{level:"h3",title:"\u65b9\u6848\u4e00\uff1aimage\u7ec4\u4ef6\u7684lazy-load\u5c5e\u6027"},{level:"h3",title:"\u65b9\u6848\u4e8c\uff1a\u5229\u7528WXML\u8282\u70b9\u4fe1\u606fAPI\u5b9e\u73b0"},{level:"h3",title:"\u65b9\u6848\u4e09\uff1a\u5229\u7528WXML\u8282\u70b9\u5e03\u5c40\u76f8\u4ea4\u72b6\u6001\u5b9e\u73b0"}]},e}return Object(s.a)(n,e),Object(a.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(u.Fragment,null,m.a.createElement(i.a,{headerLink:this.state.headerLink}),m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"title-content"},m.a.createElement("h1",{className:"title"},"\u5c0f\u7a0b\u5e8f\u5b9e\u73b0\u56fe\u7247\u61d2\u52a0\u8f7d\u7684\u4e09\u79cd\u65b9\u5f0f")),m.a.createElement("blockquote",null,m.a.createElement("p",null,"\u61d2\u52a0\u8f7d\uff0cemm\u5927\u6982\u662f\u6bcf\u4e2a\u524d\u7aef\u5de5\u7a0b\u5e08\u5728\u9762\u8bd5\u65f6\u88ab\u95ee\u5230\u5982\u4f55\u8fdb\u884c\u524d\u7aef\u4f18\u5316\u7684\u7b2c\u4e00\u4e2a\u60f3\u5230\u7684\u65b9\u6cd5\u5427\u54c8\u54c8\u3002\u6bd4\u5982\u6211\u4eec\u7684\u56fe\u7247\u7011\u5e03\u6d41\u5e03\u5c40\u7b49\u7b49\uff0c\u4e00\u6b21\u6027\u52a0\u8f7d\u8fd9\u4e48\u591a\u7684\u56fe\u7247\u8d44\u6e90\u90a3\u901f\u5ea6\u80af\u5b9a\u662f\u76f8\u5f53\u7684\u201c\u8fa3\u773c\u775b\u201d\u5440\uff5e\uff0c\u6240\u4ee5\u56fe\u7247\u61d2\u52a0\u8f7d\u5728\u524d\u7aef\u4f18\u5316\u4e2d\u53ef\u4ee5\u53d1\u6325\u5230\u5f88\u5927\u7684\u4f5c\u7528\uff0c\u6240\u4ee5\u8fd9\u4e00\u7bc7\u5c31\u6765\u804a\u804a\u5c0f\u7a0b\u5e8f\u8be5\u5982\u4f55\u5b9e\u73b0\u56fe\u7247\u61d2\u52a0\u8f7d\uff5e")),m.a.createElement("h3",{id:"\u4f20\u7edf\u61d2\u52a0\u8f7d\u65b9\u6848"},"\u4f20\u7edf\u61d2\u52a0\u8f7d\u65b9\u6848"),m.a.createElement("p",null,"\u719f\u6089H5\u5f00\u53d1\u7684\u8bdd\u53ef\u80fd\u5df2\u7ecf\u5f88\u719f\u6089\u8be5\u5982\u4f55\u8fdb\u884c\u56fe\u7247\u61d2\u52a0\u8f7d\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u5176\u539f\u7406\u5c31\u662f\u5f53\u56fe\u7247DOM\u8fdb\u5165\u5230\u7a97\u53e3\u53ef\u89c6\u533a\u7684\u65f6\u5019\u8bbe\u7f6e\u771f\u5b9e\u7684\u56fe\u7247\u8def\u5f84\u3002\u901a\u8fc7\u8282\u6d41\u51fd\u6570\u8bbe\u7f6e\u4e00\u5b9a\u65f6\u95f4\u6ed1\u52a8\u5185\u6267\u884c\u5224\u65ad\u51fd\u6570\u5373\u53ef\u3002\u4e3b\u8981\u601d\u8def\u5982\u4e0b\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"//\u83b7\u53d6\u56fe\u7247\u5f53\u524d\u4f4d\u7f6e\u8ddd\u79bb\u9876\u90e8\u7684\u8ddd\u79bb"),m.a.createElement("span",null,"let top=document.getElementById('xxx').getBondingClientRect().top; "),m.a.createElement("span",null,"//\u5982\u679ctop\u5c0f\u4e8e\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5c06\u56fe\u7247\u94fe\u63a5\u63d2\u5165\u5230img\u4e2d\uff0c\u52a0\u8f7d"),m.a.createElement("span",null,"if(top<window.innerheight)","{"),m.a.createElement("span",null,"   document.getElementById('xxx').getBondingClientRect().src=xxx"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f46\u662f\uff0c\u5c34\u5c2c\u7684\u4e8b\u60c5\u53d1\u751f\u4e86\uff0c\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42\u662f\u5206\u5f00\u7684\uff0c\u4e00\u4e2a\u5728 webview \u4e00\u4e2a\u662f JSCore\uff0c\u6ca1\u6709 BOM\u3001DOM \u65e2\u4e0d\u80fd\u8bbe\u7f6e\u8282\u70b9\uff0c\u4e5f\u83b7\u53d6\u4e0d\u5230\u7a97\u53e3\u5bf9\u8c61\uff0c\u8fd9\u53ef\u548b\u6574\uff1f",m.a.createElement("br",null),"\u563f\uff0c\u522b\u7740\u6025\uff0c\u5f80\u4e0b\u770b\u3002"),m.a.createElement("h3",{id:"\u65b9\u6848\u4e00\uff1aimage\u7ec4\u4ef6\u7684lazy-load\u5c5e\u6027"},"\u65b9\u6848\u4e00\uff1aimage\u7ec4\u4ef6\u7684lazy-load\u5c5e\u6027"),m.a.createElement("p",null,"\u5c0f\u7a0b\u5e8f\u5728\u8bbe\u8ba1\u7684\u65f6\u5019\u5c31\u60f3\u5230\u4e86\u56fe\u7247\u61d2\u52a0\u8f7d\uff0c\u6240\u4ee5\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u4e5f\u7ed9\u51fa\u4e86 ",m.a.createElement("code",null,"lazy-load")," \u5c5e\u6027\uff0c\u52a0\u4e0a\u4e4b\u540e\u5c31\u53ef\u4ee5\u5b9e\u73b0\u61d2\u52a0\u8f7d\u5566\uff01\u662f\u4e0d\u662f\u5f88\u65b9\u4fbf\uff01"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"<scroll-view scroll-y=\"true\" class='lazyload'>"),m.a.createElement("span",null,'  <image lazy-load="true" src="',"{","{",'item.url}}" wx:for="',"{","{",'imgUrls}}" wx:key="',"{","{",'index}}"></image>'),m.a.createElement("span",null,"</scroll-view> "),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f18\u70b9\uff1a",m.a.createElement("br",null),"-\u65b9\u4fbf\uff0c\u7b80\u5355",m.a.createElement("br",null),"\u7f3a\u70b9\uff1a",m.a.createElement("br",null),"-\u53ea\u9488\u5bf9page\u4e0escroll-view\u4e0b\u7684image\u6709\u6548\uff0c\u540c\u65f6\u7248\u672c\u9650\u5236\u5728 ",m.a.createElement("code",null,"1.5.0")," \u4ee5\u4e0a",m.a.createElement("br",null),"-\u61d2\u52a0\u8f7d\u65e0\u56de\u8c03\u51fd\u6570\uff0c\u56fe\u7247\u52a0\u8f7d\u540e\u4e0d\u80fd\u8fdb\u884c\u5176\u4ed6\u64cd\u4f5c",m.a.createElement("br",null),"-\u52a0\u8f7d\u4e4b\u524d\u4e0d\u80fd\u8bbe\u7f6e\u9ed8\u8ba4\u663e\u793a\u56fe\u7247"),m.a.createElement("h3",{id:"\u65b9\u6848\u4e8c\uff1a\u5229\u7528WXML\u8282\u70b9\u4fe1\u606fAPI\u5b9e\u73b0"},"\u65b9\u6848\u4e8c\uff1a\u5229\u7528WXML\u8282\u70b9\u4fe1\u606fAPI\u5b9e\u73b0"),m.a.createElement("p",null,"\u7b2c\u4e8c\u4e2a\u529e\u6cd5\u5462\u5c31\u662f\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\u7684api ",m.a.createElement("code",null,"createSelectorQuery")," \u6765\u5b8c\u6210\u3002",m.a.createElement("br",null),"\u9996\u5148\uff0c\u901a\u8fc7 ",m.a.createElement("code",null,"wx.getSystemInfo")," \u83b7\u53d6\u53ef\u89c6\u533a\u7684\u9ad8\u5ea6\uff0c\u5e76\u5199\u5165 data\u3002"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"secondMethod: function() ","{"),m.a.createElement("span",null,"    let that = this;"),m.a.createElement("span",null,"    if (this.data.screenHeight) ","{"),m.a.createElement("span",null,"      this.judgeShow()"),m.a.createElement("span",null,"    } else ","{"),m.a.createElement("span",null,"      wx.getSystemInfo(","{"),m.a.createElement("span",null,"        success: function(res) ","{"),m.a.createElement("span",null,"          console.log('\u5c4f\u5e55\u9ad8\u5ea6\uff1a' + res.screenHeight)"),m.a.createElement("span",null,"          that.setData(","{"),m.a.createElement("span",null,"            screenHeight: res.screenHeight"),m.a.createElement("span",null,"          })"),m.a.createElement("span",null,"          that.judgeShow()"),m.a.createElement("span",null,"        }"),m.a.createElement("span",null,"      })"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u7136\u540e\u83b7\u53d6\u5230 screenHeight \u540e\uff0c\u6267\u884c\u61d2\u52a0\u8f7d\u7684\u6838\u5fc3\u4ee3\u7801\u3002"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"judgeShow: function() ","{"),m.a.createElement("span",null,"    let that = this"),m.a.createElement("span",null,"    wx.createSelectorQuery().selectAll('.item').boundingClientRect(function(rects) ","{"),m.a.createElement("span",null,"      rects.forEach(function(rect, index) ","{"),m.a.createElement("span",null,"        // \u5982\u679c\u5f53\u524d\u7684\u5143\u7d20\u8ddd\u79bb\u9876\u90e8\u7684\u9ad8\u5ea6\u5c0f\u4e8e\u53ef\u89c6\u533a\u57df\u7684\u9ad8\u5ea6\uff0c\u5219\u8bbe\u7f6e\u4e3a\u663e\u793a"),m.a.createElement("span",null,"        if (rect.top <= that.data.screenHeight) ","{"),m.a.createElement("span",null,"          that.setData(","{"),m.a.createElement("span",null,"            [`imgUrls[$","{","index}].show`]: true,"),m.a.createElement("span",null,"          })"),m.a.createElement("span",null,"        }"),m.a.createElement("span",null,"      })"),m.a.createElement("span",null,"    }).exec()"),m.a.createElement("span",null,"},"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u5c0f\u7a0b\u5e8f\u6709\u9ed8\u8ba4\u7684\u6ed1\u52a8\u76d1\u542c\u4e8b\u4ef6 ",m.a.createElement("code",null,"onPageScroll")),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"onPageScroll: function() ","{"),m.a.createElement("span",null,"    this.secondMethod()"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f46\u662f\uff0c\u7531\u4e8e\u6ed1\u52a8\u76d1\u542c\u662f\u4e00\u4e2a\u9ad8\u9891\u64cd\u4f5c\uff0c\u4f1a\u5bfc\u81f4\u6301\u7eed\u7684\u6267\u884c\u61d2\u52a0\u8f7d\u51fd\u6570\uff0c\u8fd9\u91cc\u6211\u4eec\u91c7\u7528 ",m.a.createElement("strong",null,"throttle\u51fd\u6570")," \u8fdb\u884c\u4f18\u5316\u3002"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"onReady: function() ","{"),m.a.createElement("span",null,"    this.runThrottle = this.throttle()"),m.a.createElement("span",null,"},"),m.a.createElement("span",null,"throttle: function() ","{"),m.a.createElement("span",null,"    console.log('throttle')"),m.a.createElement("span",null,"    let that = this;"),m.a.createElement("span",null,"    var starTime = 0"),m.a.createElement("span",null,"    return function() ","{"),m.a.createElement("span",null,"      var nowTime = new Date().getTime()"),m.a.createElement("span",null,"      if (nowTime - starTime > 100) ","{"),m.a.createElement("span",null,"        that.secondMethod()"),m.a.createElement("span",null,"        starTime = nowTime"),m.a.createElement("span",null,"      }"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"},"),m.a.createElement("span",null,"onPageScroll: function() ","{"),m.a.createElement("span",null,"    this.runThrottle()"),m.a.createElement("span",null,"},"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f18\u70b9\uff1a",m.a.createElement("br",null),"-\u65e0\u7248\u672c\u9650\u5236",m.a.createElement("br",null),"-\u56fe\u7247\u8f7d\u5165\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56de\u8c03\uff0c\u914d\u7f6e\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c",m.a.createElement("br",null),"\u7f3a\u70b9\uff1a",m.a.createElement("br",null),"-\u4ee3\u7801\u6bd4\u8f83\u591a\uff0c\u6d41\u7a0b\u6bd4\u8f83\u590d\u6742"),m.a.createElement("h3",{id:"\u65b9\u6848\u4e09\uff1a\u5229\u7528WXML\u8282\u70b9\u5e03\u5c40\u76f8\u4ea4\u72b6\u6001\u5b9e\u73b0"},"\u65b9\u6848\u4e09\uff1a\u5229\u7528WXML\u8282\u70b9\u5e03\u5c40\u76f8\u4ea4\u72b6\u6001\u5b9e\u73b0"),m.a.createElement("p",null,"\u5c0f\u7a0b\u5e8f\u5f00\u653e\u4e86\u4e00\u7ec4WXML\u8282\u70b9\u5e03\u5c40\u76f8\u4ea4\u72b6\u6001\u5b9e\u73b0\u7684api\uff0c\u53ef\u4ee5\u7528\u4e8e\u63a8\u65ad\u67d0\u4e9b\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3001\u6709\u591a\u5927\u6bd4\u4f8b\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3002\u793a\u4f8b\u5982\u4e0b,\u5f53\u76ee\u6807\u5143\u7d20\u5728\u9875\u9762\u663e\u793a\u533a\u57df\u5185\u76f8\u4ea4\u6216\u76f8\u79bb\uff0c\u4e14\u76f8\u4ea4\u6216\u76f8\u79bb\u7a0b\u5ea6\u8fbe\u5230\u76ee\u6807\u8282\u70b9\u5e03\u5c40\u533a\u57df\u768420%\u548c50%\u65f6\u89e6\u53d1\u56de\u8c03\u51fd\u6570\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"Page(","{"),m.a.createElement("span",null,"  onLoad: function()","{"),m.a.createElement("span",null,"    wx.createIntersectionObserver(this, ","{"),m.a.createElement("span",null,"      thresholds: [0.2, 0.5]"),m.a.createElement("span",null,"    }).relativeToViewport().observe('.target-class', (res) => ","{"),m.a.createElement("span",null,"      res.id // \u76ee\u6807\u8282\u70b9 id"),m.a.createElement("span",null,"      res.dataset // \u76ee\u6807\u8282\u70b9 dataset"),m.a.createElement("span",null,"      res.intersectionRatio // \u76f8\u4ea4\u533a\u57df\u5360\u76ee\u6807\u8282\u70b9\u7684\u5e03\u5c40\u533a\u57df\u7684\u6bd4\u4f8b"),m.a.createElement("span",null,"      res.intersectionRect // \u76f8\u4ea4\u533a\u57df"),m.a.createElement("span",null,"      res.intersectionRect.left // \u76f8\u4ea4\u533a\u57df\u7684\u5de6\u8fb9\u754c\u5750\u6807"),m.a.createElement("span",null,"      res.intersectionRect.top // \u76f8\u4ea4\u533a\u57df\u7684\u4e0a\u8fb9\u754c\u5750\u6807"),m.a.createElement("span",null,"      res.intersectionRect.width // \u76f8\u4ea4\u533a\u57df\u7684\u5bbd\u5ea6"),m.a.createElement("span",null,"      res.intersectionRect.height // \u76f8\u4ea4\u533a\u57df\u7684\u9ad8\u5ea6"),m.a.createElement("span",null,"    })"),m.a.createElement("span",null,"  }"),m.a.createElement("span",null,"})"),m.a.createElement("span",null),m.a.createElement("span",null))),m.a.createElement("p",null,"\u5229\u7528\u8fd9\u4e2a\u7279\u6027\u6211\u4eec\u5c31\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u5b9e\u73b0\u56fe\u7247\u61d2\u52a0\u8f7d\u4e86\uff1a"),m.a.createElement("pre",null,m.a.createElement("code",null,m.a.createElement("span",null),m.a.createElement("span",null,"// WXML \u6587\u4ef6"),m.a.createElement("span",null,"<view class='lazyload'>"),m.a.createElement("span",null,"  <view class='left'>"),m.a.createElement("span",null,"    <image class='img","{","{","index}}' src=\"","{","{","item.show?item.url: '' }}\" wx:for=\"","{","{",'imgUrls}}" wx:key="',"{","{",'index}}" wx:if="',"{","{",'index%2}}" ></image>'),m.a.createElement("span",null,"  </view>"),m.a.createElement("span",null,"  <view class='right'>"),m.a.createElement("span",null,"    <image class='img","{","{","index}}' src=\"","{","{","item.show?item.url: '' }}\" wx:for=\"","{","{",'imgUrls}}" wx:key="',"{","{",'index}}" wx:if="',"{","{",'!(index%2)}}"></image>'),m.a.createElement("span",null,"  </view>"),m.a.createElement("span",null,"</view>"),m.a.createElement("span",null),m.a.createElement("span",null,"// JS \u6587\u4ef6"),m.a.createElement("span",null,"judge: function() ","{"),m.a.createElement("span",null,"    for (let index in this.data.imgUrls) ","{"),m.a.createElement("span",null,"        wx.createIntersectionObserver().relativeToViewport().observe(`.img$","{","index}`, (res) => ","{"),m.a.createElement("span",null,"        console.log(res)"),m.a.createElement("span",null,"        if (res.intersectionRatio)","{"),m.a.createElement("span",null,"            //\u5982\u679c\u56fe\u7247\u8fdb\u5165\u53ef\u89c6\u533a\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a show"),m.a.createElement("span",null,"            this.setData(","{"),m.a.createElement("span",null,"            [`imgUrls[$","{","index}].show`]: true,"),m.a.createElement("span",null,"            })"),m.a.createElement("span",null,"        }"),m.a.createElement("span",null,"        })"),m.a.createElement("span",null,"    }"),m.a.createElement("span",null,"}"),m.a.createElement("span",null))),m.a.createElement("p",null,"\u4f18\u70b9\uff1a",m.a.createElement("br",null),"-\u65b9\u4fbf\u914d\u7f6e\uff0c\u51e0\u884c\u4ee3\u7801\u5373\u53ef",m.a.createElement("br",null),"-\u65e0\u7248\u672c\u9650\u5236",m.a.createElement("br",null),"-\u56fe\u7247\u8f7d\u5165\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56de\u8c03\uff0c\u914d\u7f6e\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c")))}}]),n}(m.a.Component)}}]);
//# sourceMappingURL=38.d6be1191.chunk.js.map