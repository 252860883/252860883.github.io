(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{105:function(e,t,a){e.exports=a.p+"static/media/dinosaur.6a2928d9.png"},109:function(e,t,a){e.exports=a.p+"static/media/main-item1.1add0734.png"},110:function(e,t,a){e.exports=a.p+"static/media/main-item2.4f161836.png"},111:function(e,t,a){e.exports=a.p+"static/media/main-item3.608c0728.png"},95:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a(5),c=a(7),r=a(6),o=a(8),s=a(0),l=a.n(s),m=(a(98),function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{id:"container",className:this.props.IsPC?"container":"container mobile-container"},l.a.createElement("div",{className:"word-1"}),l.a.createElement("div",{className:"word-2"}),l.a.createElement("div",{className:"circle"}),l.a.createElement("img",{className:"dinosaur",alt:"",src:a(105)}))}}]),t}(l.a.Component)),u=a(103);function d(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){a=!1;break}return a}var p=a(126),f=function(e){function t(){var e,i;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(i=Object(c.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={date:new Date,name:"duhonghui",blockLists:[{title:"ARTICLE",icon:a(109),link:"/article"},{icon:a(110),title:"PROJECT",link:"/project"},{title:"ABOUT",icon:a(111),link:"/about"}]},i.clickBlockItem=function(e){i.props.history.push(e)},i}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"main"},l.a.createElement(m,{IsPC:d()}),l.a.createElement("div",{className:"mainBlock"},this.state.blockLists.map(function(t){return l.a.createElement("div",{className:"item",key:t.link,onClick:function(){return e.clickBlockItem(t.link)}},l.a.createElement("img",{className:"item-icon",alt:"",src:t.icon}))})),l.a.createElement("div",{className:"main-article"},l.a.createElement("div",{className:"article-title"},"TOP ARTICLE"),l.a.createElement(u.a,{hideNormal:!0})))}}]),t}(l.a.Component);t.default=Object(p.a)(f)},98:function(e,t,a){}}]);
//# sourceMappingURL=51.3423a698.chunk.js.map