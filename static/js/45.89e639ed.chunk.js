(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{101:function(e,a,l){},103:function(e,a,l){"use strict";l.d(a,"a",function(){return u});var n=l(4),t=l(5),r=l(7),c=l(6),m=l(8),p=l(0),s=l.n(p),u=(l(104),function(e){function a(){var e,l;Object(n.a)(this,a);for(var t=arguments.length,m=new Array(t),p=0;p<t;p++)m[p]=arguments[p];return(l=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(m)))).clickPosBtn=function(e){var a=document.getElementById(e);window.scrollTo({top:a.offsetTop-10,left:0,behavior:"smooth"})},l}return Object(m.a)(a,e),Object(t.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"headerLink"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"real-content"},s.a.createElement("div",{className:"tag"},"Reading Assistance \xb7"),this.props.headerLink.map(function(a,l){return s.a.createElement("span",{className:"a"+a.level,key:l,onClick:function(){return e.clickPosBtn(a.title)}},a.title)}))))}}]),a}(s.a.Component))},104:function(e,a,l){},69:function(e,a,l){"use strict";l.r(a),l.d(a,"default",function(){return o});var n=l(4),t=l(5),r=l(7),c=l(6),m=l(8),p=l(0),s=l.n(p),u=(l(101),l(103)),o=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).state={headerLink:[{level:"h2",title:"\u524d\u8a00"},{level:"h2",title:"Shell\u811a\u672c \u5b9e\u73b0"},{level:"h2",title:"nodejs\u73af\u5883 \u5b9e\u73b0"}]},e}return Object(m.a)(a,e),Object(t.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement(p.Fragment,null,s.a.createElement(u.a,{headerLink:this.state.headerLink}),s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"title-content"},s.a.createElement("h1",{className:"title"},"\u5b9e\u73b0\u4e00\u4e2a\u81ea\u52a8\u751f\u6210\u5c0f\u7a0b\u5e8f\u6587\u4ef6\u6a21\u7248\u7684\u811a\u672c")),s.a.createElement("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),s.a.createElement("p",null,"\u641e\u8fc7\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u8bf8\u4f4d\u7a0b\u5e8f\u5458\u4eec\u4e00\u5b9a\u9762\u4e34\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u7f16\u8f91\u5668\u597d\u96be\u7528\u554a\uff01\u65b0\u5efa\u9875\u9762\u597d\u96be\u7528\uff01\u624b\u6296\u4e0d\u5c0f\u5fc3\u5efa\u9519\u4e86\u8fd8\u8981\u6253\u5f00\u6587\u4ef6\u5939\u5220\u4e86\u6587\u4ef6\u518d\u53bb\u7f16\u8f91\u5668\u91cd\u65b0\u521b\u5efa\u3002\u54ce\u5440\uff01\u9ebb\u70e6\u6b7b\u4e86\uff01"),s.a.createElement("p",null,"\u76f4\u5230\u67d0\u5929\uff0c\u540c\u4e8b\uff1a\u201c\u54b1\u4eec\u5199\u4e2a\u81ea\u52a8\u521b\u5efa\u6587\u4ef6\u6a21\u7248\u7684\u811a\u672c\u5427\uff1f\u201d  \u201c\u5f00\u641e\uff01\u201d"),s.a.createElement("h2",{id:"Shell\u811a\u672c \u5b9e\u73b0"},"Shell\u811a\u672c \u5b9e\u73b0"),s.a.createElement("p",null,"Shell \u662f\u4e00\u4e2a\u7528 C \u8bed\u8a00\u7f16\u5199\u7684\u7a0b\u5e8f\uff0c\u5b83\u662f\u7528\u6237\u4f7f\u7528 Linux \u7684\u6865\u6881\u3002Shell \u65e2\u662f\u4e00\u79cd\u547d\u4ee4\u8bed\u8a00\uff0c\u53c8\u662f\u4e00\u79cd\u7a0b\u5e8f\u8bbe\u8ba1\u8bed\u8a00\u3002\u6211\u4eec\u4e0b\u9762\u7684\u811a\u672c\u4e5f\u662f\u901a\u8fc7 Shell\u8bed\u8a00\u6765\u5b9e\u73b0\u7684\u3002\u5982\u679c\u4f60\u8fd8\u4e0d\u4e86\u89e3\u4ec0\u4e48\u662f Shell \u8bed\u6cd5\u7684\u8bdd\uff0c\u53ef\u4ee5\u5148\u719f\u6089\u4e00\u4e0b\u8bed\u6cd5\uff0c\u5165\u95e8\u4e0d\u96be\u3002",s.a.createElement("a",{target:"_blank",href:"http://www.runoob.com/linux/linux-shell.html"},"\u70b9\u51fb\u8fd9\u91cc"),"\u3002"),s.a.createElement("p",null,"\u9996\u5148\u6211\u4eec\u6267\u884c ",s.a.createElement("code",null,"npm init")," \u6307\u4ee4\uff0c\u521b\u5efa ",s.a.createElement("code",null,"package.json")," \u6587\u4ef6\u3002\u7136\u540e\u5728\u8be5\u6587\u4ef6\u4e0b\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"..."),s.a.createElement("span",null,'"scripts": ',"{"),s.a.createElement("span",null,'    "test": "echo \\"Error: no test specified\\" && exit 1",'),s.a.createElement("span",null,'    "set":"sh ./cli/clone.sh"'),s.a.createElement("span",null,"},"),s.a.createElement("span",null,"..."),s.a.createElement("span",null))),s.a.createElement("p",null,"\u7136\u540e\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",s.a.createElement("code",null,"cli")," \u6587\u4ef6\u5939\uff0c\u5728\u4e0b\u9762\u6211\u4eeccopy\u4e00\u4e0b\u521d\u59cb\u5316\u7684page\u6587\u4ef6\u5939\u548ccomponent\u6587\u4ef6\u5939\u3002\u540c\u65f6\u521b\u5efa\u4e00\u4e2a ",s.a.createElement("code",null,"clone.sh")," \u6587\u4ef6\u3002\u5177\u4f53\u7684\u6587\u4ef6\u5939\u76ee\u5f55\u53ef\u89c1\u4e0b\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"..."),s.a.createElement("span",null,"\u251c\u2500\u2500 cli"),s.a.createElement("span",null,"\u2502   \u251c\u2500\u2500 clone.sh"),s.a.createElement("span",null,"\u2502   \u251c\u2500\u2500 component"),s.a.createElement("span",null,"\u2502   \u2502   \u251c\u2500\u2500 component.js"),s.a.createElement("span",null,"\u2502   \u2502   \u251c\u2500\u2500 component.json"),s.a.createElement("span",null,"\u2502   \u2502   \u251c\u2500\u2500 component.wxml"),s.a.createElement("span",null,"\u2502   \u2502   \u2514\u2500\u2500 component.wxss"),s.a.createElement("span",null,"\u2502   \u2514\u2500\u2500 page"),s.a.createElement("span",null,"\u2502       \u251c\u2500\u2500 page.js"),s.a.createElement("span",null,"\u2502       \u251c\u2500\u2500 page.json"),s.a.createElement("span",null,"\u2502       \u251c\u2500\u2500 page.wxml"),s.a.createElement("span",null,"\u2502       \u2514\u2500\u2500 page.wxss"),s.a.createElement("span",null,"..."),s.a.createElement("span",null))),s.a.createElement("p",null,"\u4e0b\u9762\u6211\u4eec\u5c31\u6765\u7f16\u5199shell\u811a\u672c\u5427\uff0c\u8bed\u6cd5\u90fd\u4e0d\u662f\u5f88\u96be\uff0c\u6240\u4ee5\u5c31\u4e0d\u4e00\u4e00\u89e3\u6790\u4e86\uff0c\u76f4\u63a5\u89c1\u4ee3\u7801\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"#!/bin/bash"),s.a.createElement("span",null,'num=("1" "2" "3")'),s.a.createElement("span",null,'pathname=("pages" "component" "packages")'),s.a.createElement("span",null,'template=("cli/page" "cli/component" "cli/page")'),s.a.createElement("span",null),s.a.createElement("span",null,"# \u590d\u5236page\u51fd\u6570"),s.a.createElement("span",null,"function copyFile()","{"),s.a.createElement("span",null,"  while [ -z $pageName ]"),s.a.createElement("span",null,"  do "),s.a.createElement("span",null,'    printf "\\033[32mplease input page Name : \\033[0m"'),s.a.createElement("span",null,"    read pageName"),s.a.createElement("span",null,"  done"),s.a.createElement("span",null,'  targetPath="$',"{",'pathname[$1]}/$pageName"'),s.a.createElement("span",null,"  if [ -d $targetPath ]"),s.a.createElement("span",null,"    then"),s.a.createElement("span",null,'      echo "\\033[31mwarn: page [$pageName] is exist!\\033[0m"'),s.a.createElement("span",null,"  else"),s.a.createElement("span",null,"    # cp \u590d\u5236\u6a21\u7248\u5230\u65b0\u5efa\u8def\u5f84"),s.a.createElement("span",null,"    cp -iR $","{","template[$1]} $targetPath "),s.a.createElement("span",null,"    for file in `ls ./$","{","template[$1]}`"),s.a.createElement("span",null,"    do"),s.a.createElement("span",null,"      suffixName=$","{","file#*.}"),s.a.createElement("span",null,'      lastName="$pageName.$suffixName"'),s.a.createElement("span",null,"      # mv \u6587\u4ef6\u91cd\u547d\u540d"),s.a.createElement("span",null,'      mv  "$targetPath/$file" "$targetPath/$lastName"'),s.a.createElement("span",null,"    done "),s.a.createElement("span",null,'  echo "page [$pageName] create complete!"'),s.a.createElement("span",null,"  fi"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"# \u5224\u65ad\u7c7b\u578b"),s.a.createElement("span",null,"function choiceType()","{"),s.a.createElement("span",null,"  # \u590d\u5236page"),s.a.createElement("span",null,"  if [ $type == $","{","num[0]} ]"),s.a.createElement("span",null,"    then "),s.a.createElement("span",null,"      copyFile 0"),s.a.createElement("span",null,"  elif [ $type == $","{","num[1]} ]"),s.a.createElement("span",null,"    then"),s.a.createElement("span",null,"      copyFile 1"),s.a.createElement("span",null,"  elif [ $type == $","{","num[2]} ]"),s.a.createElement("span",null,"    then"),s.a.createElement("span",null,"      copyFile 2"),s.a.createElement("span",null,"  fi"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null,"# -z \u68c0\u67e5\u5b57\u7b26\u4e32\u957f\u5ea6\u662f\u5426\u4e3a0"),s.a.createElement("span",null,"while [ -z $type ] || [[ $type != $","{","num[0]} && $type != $","{","num[1]} && $type != $","{","num[2]}  ]]"),s.a.createElement("span",null,"do"),s.a.createElement("span",null,'  echo "\\033[32mplease input your file type: \\033[0m"'),s.a.createElement("span",null,'  echo "\u30101\u3011page"'),s.a.createElement("span",null,'  echo "\u30102\u3011compoment"'),s.a.createElement("span",null,'  echo "\u30103\u3011package"'),s.a.createElement("span",null,"  read type"),s.a.createElement("span",null,"done"),s.a.createElement("span",null),s.a.createElement("span",null,"choiceType"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u6765\u968f\u610f\u7684\u521b\u5efa\u5566\uff01\u6253\u5f00\u547d\u4ee4\u884c\uff0c\u6267\u884c ",s.a.createElement("code",null,"npm run set")," \u5c31\u53ef\u4ee5\u6765\u521b\u5efa\u3002"),s.a.createElement("h2",{id:"nodejs\u73af\u5883 \u5b9e\u73b0"},"nodejs\u73af\u5883 \u5b9e\u73b0"),s.a.createElement("blockquote",null,s.a.createElement("p",null,"\u4e0a\u9762\u6211\u4eec\u901a\u8fc7shell\u8bed\u6cd5\u6765\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6587\u4ef6\u514b\u9686\u811a\u672c\uff0c\u4f46\u662f\u8fd9\u4e2a\u811a\u672c\u8fd8\u5b58\u5728\u8bf8\u591a\u4e0d\u8db3\uff0c\u6bd4\u5982\uff1a\u9009\u62e9\u67d0\u4e00\u79cd\u60c5\u51b5\u7684\u65f6\u5019\u5fc5\u987b\u624b\u52a8\u8f93\u5165\u5bf9\u5e94\u503c\u3001\u591a\u7ea7\u5206\u5305\u7b49\u95ee\u9898\u3002\u4e0b\u9762\u6211\u4eec\u5c31\u6765\u8bd5\u8bd5\u7528nodejs\u6765\u5b9e\u73b0\u8fd9\u4e2a\u811a\u672c\u3002")),s.a.createElement("p",null,"\u9996\u5148\u6211\u4eec\u5728\u521b\u5efa\u7684 ",s.a.createElement("code",null,"package.json")," \u6587\u4ef6\u4e0b\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801,\u540c\u65f6\u521b\u5efa",s.a.createElement("code",null,"clone.js"),"\u6587\u4ef6\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"..."),s.a.createElement("span",null,'"scripts": ',"{"),s.a.createElement("span",null,'    "test": "echo \\"Error: no test specified\\" && exit 1",'),s.a.createElement("span",null,'    "set":"sh ./cli/clone.sh",'),s.a.createElement("span",null,'    "create": "node ./cli/clone.js"'),s.a.createElement("span",null,"},"),s.a.createElement("span",null,"..."),s.a.createElement("span",null))),s.a.createElement("p",null,"\u4e0eshell\u811a\u672c\u4e0d\u540c\u7684\u662f\u6211\u4eec\u8fd8\u9700\u8981 ",s.a.createElement("code",null,"npm install")," \u5b89\u88c5\u4f9d\u8d56\u3002\u8fd9\u91cc\u9700\u8981\u7528\u5230\u4ee5\u4e0b\u51e0\u4e2a\u4f9d\u8d56\uff1a",s.a.createElement("br",null),s.a.createElement("code",null,"fs"),"\u662fnodejs\u91cc\u9762\u5f88\u91cd\u8981\u7684\u6587\u4ef6\u6a21\u5757\uff0c\u6211\u4eec\u5bf9\u4e8e\u6587\u4ef6\u7684\u589e\u5220\u6539\u67e5\u3001\u7c98\u8d34\u3001\u8d4b\u503c\u90fd\u4e0e\u6b64\u76f8\u5173\uff1b",s.a.createElement("br",null),s.a.createElement("code",null,"path"),"\u6a21\u5757\u7528\u4e8e\u5904\u7406\u6587\u4ef6\u4e0e\u76ee\u5f55\u7684\u8def\u5f84\uff0c\u6211\u4eec\u90fd\u77e5\u9053\u73b0\u5728\u7684\u524d\u7aef\u9879\u76ee\u5927\u90e8\u5206\u90fd\u662f\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u6240\u4ee5\u4ece\u4e2d\u6d89\u53ca\u5230\u7684\u8def\u5f84\u95ee\u9898\u7531\u5b83\u6765\u89e3\u51b3\uff1b",s.a.createElement("br",null),s.a.createElement("code",null,"chalk"),"\u5c31\u662f\u4e00\u4e2a\u7ec8\u7aef\u6837\u5f0f\u4fee\u9970\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u51fa\u597d\u770b\u7684\u7ec8\u7aef\u754c\u9762\u3002\u91cd\u70b9\u6765\u4e86\uff1b",s.a.createElement("br",null),s.a.createElement("code",null,"inquirer"),"\u8bd5\u56fe\u4e3aNodeJs\u505a\u4e00\u4e2a\u53ef\u5d4c\u5165\u5f0f\u7684\u7f8e\u89c2\u7684\u547d\u4ee4\u884c\u754c\u9762\uff0c\u6211\u4eec\u8fd9\u91cc\u4e5f\u662f\u4f7f\u7528\u8fd9\u4e2a\u4f9d\u8d56\u53ef\u4ee5\u5f88\u4fbf\u6377\u7684\u8fdb\u884c\u7ec8\u7aef\u8f93\u51fa\u7684\u6539\u9020\uff0c\u6bd4\u5982\u4e0a\u4e0b\u9009\u62e9\uff0c\u5355\u9009\u3001\u591a\u9009\u7b49\u591a\u79cd\u5f62\u6001\uff0c\u5177\u4f53\u53ef\u4ee5\u79fb\u6b65",s.a.createElement("a",{target:"_blank",href:"https://www.npmjs.com/package/inquirer"},"\u8fd9\u91cc\u67e5\u770b\u66f4\u591a"),"\u3002"),s.a.createElement("p",null,s.a.createElement("img",{src:"http://wx2.sinaimg.cn/mw690/a73bc6a1ly1fyzfn6lq00j20ho04ugnk.jpg",alt:"image",title:""})),s.a.createElement("p",null,"\u4e0b\u9762\u6211\u4eec\u5c31\u5256\u6790\u5982\u4f55\u7528\u4ee3\u7801\u5b9e\u73b0\u4e86\uff0c\u9996\u5148\u6211\u4eec\u628a ",s.a.createElement("code",null,"inquirer")," \u67b6\u5b50\u642d\u8d77\u6765\uff0c\u7b80\u5355\u7684\u4e24\u4e2a\u5f02\u6b65\u5d4c\u5957\u64cd\u4f5c\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null,"// \u9996\u5148\u9009\u62e9\u4e00\u4e2a\u7c7b\u76ee"),s.a.createElement("span",null,"inquirer.prompt([","{"),s.a.createElement("span",null,"    type: 'list',"),s.a.createElement("span",null,"    name: 'type',"),s.a.createElement("span",null,"    message: 'Select a type you will create:',"),s.a.createElement("span",null,"    choices: ['page', 'component', 'package'],"),s.a.createElement("span",null,"}]).then((answers) => ","{"),s.a.createElement("span",null,"    console.log(chalk.yellow(\"\u5982\u679c\u5efa\u7acb\u5b50\u76ee\u5f55\u76f4\u63a5\u52a0'/'\u5206\u9694\u5373\u53ef\"))"),s.a.createElement("span",null,"    // \u8f93\u5165\u6587\u4ef6\u6216\u76ee\u5f55\u540d"),s.a.createElement("span",null,"    inquirer.prompt([","{"),s.a.createElement("span",null,"        type: 'input',"),s.a.createElement("span",null,"        name: 'name',"),s.a.createElement("span",null,"        message: 'Input new page name:'"),s.a.createElement("span",null,"    }]).then((folder) => ","{"),s.a.createElement("span",null,"        \x3c!-- \u8fd9\u91cc\u521b\u5efa\u6587\u4ef6\u5939 --\x3e"),s.a.createElement("span",null,"        mkdirs(...);"),s.a.createElement("span",null,"        \x3c!-- \u8fd9\u91cccopy\u6587\u4ef6 --\x3e"),s.a.createElement("span",null,"        ..."),s.a.createElement("span",null,"        copyRealFile(...);"),s.a.createElement("span",null,"    })"),s.a.createElement("span",null,"})"),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("p",null,"\u4e0a\u9762\u4e00\u4e2a\u7b80\u5355\u7684\u4e8c\u6b21\u8f93\u5165\u6307\u4ee4\u5c31\u5927\u81f4\u505a\u597d\u4e86\u3002\u4e0b\u9762\u6211\u4eec\u5c31\u6765\u5b8c\u6210 ",s.a.createElement("code",null,"mkdirs")," \u548c ",s.a.createElement("code",null,"copyRealFile")," \u51fd\u6570\u7684\u903b\u8f91\u5427\u3002",s.a.createElement("br",null),"\u4e3a\u4e86\u65b9\u4fbf\u6211\u9996\u5148\u5728\u5168\u5c40\u5b9a\u4e49\u4e86\u4e00\u4e2a\u8def\u5f84\u6620\u5c04\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"let temFolders = ","{"),s.a.createElement("span",null,"    \"package\": path.join(__dirname, 'page'),"),s.a.createElement("span",null,"    \"page\": path.join(__dirname, 'page'),"),s.a.createElement("span",null,"    \"component\": path.join(__dirname, 'component')"),s.a.createElement("span",null,"}"),s.a.createElement("span",null,"let targetFolderRoots = ","{"),s.a.createElement("span",null,'    "package": "packages/",'),s.a.createElement("span",null,'    "page": "pages/",'),s.a.createElement("span",null,'    "component": "component/"'),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u4e0a\u9762\u4e24\u4e2a\u6620\u5c04\u5bf9\u8c61\u5206\u522b\u4ee3\u8868 \u6a21\u7248\u6587\u4ef6\u6839\u8def\u5f84 \u548c \u76ee\u6807\u6587\u4ef6\u5939\u3002",s.a.createElement("br",null),"\u7136\u540e\u6211\u4eec\u6765\u5b8c\u6210 ",s.a.createElement("code",null,"mkdirs")," \u521b\u5efa\u6587\u4ef6\u5939\u51fd\u6570\uff0c\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u8003\u8651\u5230\u5206\u5305\u53ef\u80fd\u6709\u591a\u5c42\u5b50\u6587\u4ef6\u5939\uff0c\u6240\u6709\u6211\u4eec\u5728\u8f93\u5165\u65f6\u8981\u6c42 ",s.a.createElement("code",null,"/")," \u7b26\u4e3a\u6587\u4ef6\u5939\u5206\u9694\u7b26\uff0c\u6240\u4ee5\u8fd9\u91cc\u6211\u4eec\u4e5f\u8981\u505a\u597d\u76f8\u5e94\u7684\u517c\u5bb9\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"/**"),s.a.createElement("span",null," * \u521b\u5efa\u6587\u4ef6\u5939"),s.a.createElement("span",null," * @param ","{","String} folder \u7ec8\u7aef\u8f93\u5165\u7684\u8def\u5f84"),s.a.createElement("span",null," * @param ","{","String} targetFolderRoot \u8f93\u51fa\u7684\u76ee\u6807\u6587\u4ef6\u5939"),s.a.createElement("span",null," */"),s.a.createElement("span",null,"function mkdirs(folder, targetFolderRoot) ","{"),s.a.createElement("span",null,"    const folderName = folder.split('/')"),s.a.createElement("span",null,"    folderName.push('');"),s.a.createElement("span",null,"    folderName.reduce((total, folderItem) => ","{"),s.a.createElement("span",null,"        console.log(folderItem);"),s.a.createElement("span",null,"        const hasFolder = fs.existsSync(`$","{","targetFolderRoot + total}`)"),s.a.createElement("span",null,"        !hasFolder && fs.mkdirSync(`$","{","targetFolderRoot + total}`)"),s.a.createElement("span",null,"        if (!folderItem && hasFolder) console.error(chalk.red(`== sorry, folder $","{","folder} is exist or your input is error! ==`))"),s.a.createElement("span",null,'        return total + "/" + folderItem'),s.a.createElement("span",null,"    })"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("p",null,"\u6587\u4ef6\u5939\u521b\u5efa\u597d\uff0c\u6211\u4eec\u5c31\u9700\u8981\u6838\u5fc3\u7684\u590d\u5236\u903b\u8f91\u4e86\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"/**"),s.a.createElement("span",null," * \u514b\u9686\u5b9e\u9645\u7684\u5e95\u5c42\u6587\u4ef6\u5217\u8868"),s.a.createElement("span",null," * @param ","{","String} folder \u7ec8\u7aef\u8f93\u5165\u7684\u8def\u5f84"),s.a.createElement("span",null," * @param ","{","String} type \u7528\u6237\u9009\u62e9\u7684\u7c7b\u578b"),s.a.createElement("span",null," */"),s.a.createElement("span",null),s.a.createElement("span",null,"function copyRealFile(folder,type ) ","{"),s.a.createElement("span",null,"    let targetFolderRoot =  targetFolderRoots[type];"),s.a.createElement("span",null,"    let temFolder = temFolders[type];"),s.a.createElement("span",null,"    let fileName = folder.split('/').pop()"),s.a.createElement("span",null,"    let targetFolder = `$","{","targetFolderRoot + folder}/$","{","fileName}`;"),s.a.createElement("span",null,"    fs.readdirSync(temFolder).forEach((val, index) => ","{"),s.a.createElement("span",null,"        const extname = path.extname(val);"),s.a.createElement("span",null,"        let temRealFile = path.join(temFolder, `$","{","val}`);"),s.a.createElement("span",null,"        let targetFile = targetFolder + extname;"),s.a.createElement("span",null,"        console.log(targetFolder);"),s.a.createElement("span",null,"        fs.writeFileSync(targetFile, fs.readFileSync(temRealFile), (err) => ","{"),s.a.createElement("span",null,"            if (err) throw err;"),s.a.createElement("span",null,"            console.log('\u6587\u4ef6\u5df2\u4fdd\u5b58');"),s.a.createElement("span",null,"        });"),s.a.createElement("span",null),s.a.createElement("span",null,"    })"),s.a.createElement("span",null,"}"),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("p",null,"\u7b49\u4e00\u4e0b\uff0c\u6211\u4eec\u597d\u50cf\u843d\u4e86\u70b9\u4e1c\u897f\uff1f\u5982\u679c\u6211\u4eec\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u521b\u5efa page \u7684\u8bdd\uff0capp.json \u7684 pages\u4f1a\u9ed8\u8ba4\u589e\u52a0\u65b0\u5efa\u7684page\u8def\u5f84\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"// app.json"),s.a.createElement("span",null),s.a.createElement("span",null,"{"),s.a.createElement("span",null,'    "pages": ['),s.a.createElement("span",null,'        "pages/index/index",'),s.a.createElement("span",null,'        "pages/page2/index",'),s.a.createElement("span",null,'        "pages/logs/logs" /* \u8fd9\u4e2a\u662f\u65b0\u589e\u7684\u9875\u9762\u8def\u5f84 */'),s.a.createElement("span",null,"    ],"),s.a.createElement("span",null,'    "window": ',"{"),s.a.createElement("span",null,'        "backgroundTextStyle": "light",'),s.a.createElement("span",null,'        "navigationBarBackgroundColor": "#000",'),s.a.createElement("span",null,'        "navigationBarTitleText": "WeChat",'),s.a.createElement("span",null,'        "navigationBarTextStyle": "white"'),s.a.createElement("span",null,"    },"),s.a.createElement("span",null,'    "usingComponents": ',"{"),s.a.createElement("span",null,'        "ec-canvas": "libs/ec-canvas/ec-canvas"'),s.a.createElement("span",null,"    }"),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u6240\u4ee5\u6211\u4eec\u8fd8\u9700\u8981\u6784\u5efa\u4e00\u4e2a\u51fd\u6570\u5728page\u6587\u4ef6\u521b\u5efa\u540e\u66f4\u65b0app.json\u3002\u8fd9\u91cc\u6211\u4eec\u521b\u5efa addPageInfoToApp \u51fd\u6570\uff0c\u5c06\u65b0\u589e\u7684page\u8def\u5f84\u6dfb\u52a0\u8fdb\u53bb\u3002"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"function addPageInfoToApp(fileName) ","{"),s.a.createElement("span",null,"    fs.readFile('./app.json', function (err, data) ","{"),s.a.createElement("span",null,"        if (err) ","{"),s.a.createElement("span",null,"            return console.error(err)"),s.a.createElement("span",null,"        }"),s.a.createElement("span",null,"        var person = data.toString();//\u5c06\u4e8c\u8fdb\u5236\u7684\u6570\u636e\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32"),s.a.createElement("span",null,"        person = JSON.parse(person);//\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3ajson\u5bf9\u8c61"),s.a.createElement("span",null,"        person.pages.push(fileName);"),s.a.createElement("span",null,'        const outputData = JSON.stringify(person,null,"\\t");//\u5c06json\u6570\u636e\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u9700\u8981\u4fdd\u7559\u56de\u8f66\u7b26\uff0c\u6ce8\u610f\u683c\u5f0f'),s.a.createElement("span",null,"        fs.writeFile('./app.json',outputData,function(err)","{"),s.a.createElement("span",null,"            if(err)","{"),s.a.createElement("span",null,"                console.error(err);"),s.a.createElement("span",null,"            }"),s.a.createElement("span",null,"            console.log('\u6587\u4ef6\u5efa\u597d\u5566\uff01');"),s.a.createElement("span",null,"        })"),s.a.createElement("span",null,"        console.log(person.pages);"),s.a.createElement("span",null,"    })"),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u7136\u540e\u5728 copyRealFile \u51fd\u6570\u7684\u6700\u540e\u6dfb\u52a0\u903b\u8f91 \uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"function copyRealFile(folder,type ) ","{"),s.a.createElement("span",null,"    ..."),s.a.createElement("span",null),s.a.createElement("span",null,"    type == 'page' && addPageInfoToApp(targetFolder)"),s.a.createElement("span",null,"}"),s.a.createElement("span",null))),s.a.createElement("p",null,"\u7136\u540e\u5728\u6211\u4eec\u7684 ",s.a.createElement("code",null,"inquirer"),"\u56de\u8c03\u4e2d\u6309\u5982\u4e0b\u4ee3\u7801\u4f20\u53c2\uff1a"),s.a.createElement("pre",null,s.a.createElement("code",null,s.a.createElement("span",null),s.a.createElement("span",null,"..."),s.a.createElement("span",null,".then((folder) => ","{"),s.a.createElement("span",null,"        mkdirs(folder.name, targetFolderRoots[answers.type]);"),s.a.createElement("span",null,"        copyRealFile(folder.name,targetFolderRoots[answers.type], temFolders[answers.type]);"),s.a.createElement("span",null,"    })"),s.a.createElement("span",null,"..."),s.a.createElement("span",null))),s.a.createElement("p",null,"\u6700\u540e\uff0c\u5927\u529f\u544a\u6210\uff01\u6211\u4eec\u5c31\u53ef\u4ee5\u6267\u884c ",s.a.createElement("code",null,"npm run create")," \u6307\u4ee4\u6765\u4f53\u9a8c\u4e00\u4e0b\u4e86\u3002"),s.a.createElement("blockquote",null,s.a.createElement("p",null,"\u6e90\u7801\uff1a",s.a.createElement("br",null),s.a.createElement("a",{target:"_blank",href:"https://github.com/MagicalDinosaur/smallProgramDemo/blob/master/cli/clone.js"},"https://github.com/MagicalDinosaur/smallProgramDemo/blob/master/cli/clone.js"),s.a.createElement("br",null),"https://github.com/MagicalDinosaur/smallProgramDemo/blob/master/cli/clone.sh"))))}}]),a}(s.a.Component)}}]);
//# sourceMappingURL=45.89e639ed.chunk.js.map