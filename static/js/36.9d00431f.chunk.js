(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{124:function(e,n,t){},126:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var a=t(4),l=t(5),c=t(7),r=t(6),s=t(8),u=t(0),i=t.n(u),o=(t(127),function(e){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return(t=Object(c.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(s)))).clickPosBtn=function(e){var n=document.getElementById(e);window.scrollTo({top:n.offsetTop-10,left:0,behavior:"smooth"})},t}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"headerLink"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"real-content"},i.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(n,t){return i.a.createElement("span",{className:"a"+n.level,key:t,onClick:function(){return e.clickPosBtn(n.title)}},n.title)}))))}}]),n}(i.a.Component))},127:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var a=t(4),l=t(5),c=t(7),r=t(6),s=t(8),u=t(0),i=t.n(u),o=(t(124),t(126)),m=function(e){function n(){var e;return Object(a.a)(this,n),(e=Object(c.a)(this,Object(r.a)(n).call(this))).state={headerLink:[]},e}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,{headerLink:this.state.headerLink}),i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"title-content"},i.a.createElement("h1",{className:"title"},"\u5c0f\u7a0b\u5e8f\u5c01\u88c5\u5f02\u6b65\u8bf7\u6c42\u63a5\u53e3")),i.a.createElement("p",null,"\u5f00\u53d1\u8fc7\u5c0f\u7a0b\u5e8f\u5e94\u8be5\u77e5\u9053\u5c0f\u7a0b\u5e8f\u7684\u5f02\u6b65http\u8bf7\u6c42\u90fd\u662f\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u81ea\u5df1\u7684api wx.request \u5b9e\u73b0\u7684\u3002"),i.a.createElement("pre",null,i.a.createElement("code",null,i.a.createElement("span",null),i.a.createElement("span",null,"function fetch(url, method, header, data, loading) ","{"),i.a.createElement("span",null,"  let fetchP = new Promise(function (resolve, reject) ","{"),i.a.createElement("span",null,"    if (loading) ","{"),i.a.createElement("span",null,"      wx.showLoading(","{"),i.a.createElement("span",null,"        title: '\u52a0\u8f7d\u4e2d',"),i.a.createElement("span",null,"        icon: 'loading'"),i.a.createElement("span",null,"      })"),i.a.createElement("span",null,"    }"),i.a.createElement("span",null,"    wx.request(","{"),i.a.createElement("span",null,"      url: url_host + url,"),i.a.createElement("span",null,"      method: method ? method : 'GET',"),i.a.createElement("span",null,"      header: ","{"),i.a.createElement("span",null,"          //\u8fd9\u91cc\u586b\u5199\u9ed8\u8ba4header"),i.a.createElement("span",null,"      },"),i.a.createElement("span",null,"      data: data,"),i.a.createElement("span",null,"      success: function (res) ","{"),i.a.createElement("span",null,"        res.statusCode == 200 ? resolve(res.data) : reject(res.data)"),i.a.createElement("span",null,"      },"),i.a.createElement("span",null,"      fail: function (err) ","{"),i.a.createElement("span",null,"        reject(err)"),i.a.createElement("span",null,"      },"),i.a.createElement("span",null,"      complete: function (comp) ","{"),i.a.createElement("span",null,"        if (loading) ","{"),i.a.createElement("span",null,"          wx.hideLoading()"),i.a.createElement("span",null,"        }"),i.a.createElement("span",null,"      }"),i.a.createElement("span",null,"    })"),i.a.createElement("span",null,"  })"),i.a.createElement("span",null,"  return fetchP"),i.a.createElement("span",null,"}"),i.a.createElement("span",null)))))}}]),n}(i.a.Component)}}]);
//# sourceMappingURL=36.9d00431f.chunk.js.map