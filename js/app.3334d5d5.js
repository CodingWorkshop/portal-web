(function(t){function e(e){for(var a,s,r=e[0],c=e[1],u=e[2],m=0,d=[];m<r.length;m++)s=r[m],o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/portal-web/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06f5":function(t,e,n){},"09ee":function(t,e,n){"use strict";var a=n("2281"),o=n.n(a);o.a},"0cd1":function(t,e,n){},"0d43":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transaction"},[n("Table",{attrs:{columns:t.columns1,data:t.data1}})],1)},o=[],i={data:function(){return{columns1:[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],data1:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}}},s=i,r=(n("7c27"),n("2877")),c=Object(r["a"])(s,a,o,!1,null,"bb4b65f2",null);c.options.__file="Transaction.vue";e["default"]=c.exports},1077:function(t,e,n){"use strict";var a=n("06f5"),o=n.n(a);o.a},"140b":function(t,e,n){"use strict";var a=n("3798"),o=n.n(a);o.a},"172f":function(t,e,n){"use strict";var a=n("21a8"),o=n.n(a);o.a},"1ae4":function(t,e,n){"use strict";var a=n("a987"),o=n.n(a);o.a},"1c82":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-box"},[n("h3",[t._v('"'+t._s(this.Account)+'"，您好!')]),n("img",{attrs:{src:"https://i.imgur.com/rZR6jIk.png",width:"103"}}),n("p",{staticClass:"balance"},[t._v("\n    您的余额 \n    "),n("span",[t._v("$ "+t._s(this.Balance))]),t._v(" \n    "),n("i",{staticClass:"fas fa-sync-alt",on:{click:function(e){t.updateBalance()}}})]),n("Button",{staticClass:"deposit-btn",attrs:{type:"default"}},[t._v("在线存款")]),n("Button",{staticClass:"withdraw-btn",attrs:{type:"default"}},[t._v("在线取款")]),n("Button",{attrs:{type:"default"}},[t._v("修改密码")]),n("Button",{attrs:{type:"default"}},[t._v("修改取款密码")]),n("Button",{staticClass:"signout-btn",attrs:{type:"default"},on:{click:function(e){t.signOut()}}},[t._v("会员登出")])],1)},o=[],i={data:function(){return{Account:this.$store.state.login.user,Balance:1000.77}},methods:{updateBalance:function(){console.log("沒得更新啦~~~")},signOut:function(){this.$store.dispatch("submitLogout"),this.$store.commit("closeModal"),this.$router.push("/")}}},s=i,r=(n("1ae4"),n("2877")),c=Object(r["a"])(s,a,o,!1,null,"0c0b2746",null);c.options.__file="AccountBox.vue";e["default"]=c.exports},"21a8":function(t,e,n){},2281:function(t,e,n){},"25e0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("img",{attrs:{src:"https://via.placeholder.com/130"}}),n("div",{staticClass:"game-text"},[t._v("\n    "+t._s(t.name)+"\n    "),n("i",{staticClass:"fa-heart",class:[t.isLike?"fas":"far"]})])])},o=[],i=(n("cadf"),n("551c"),n("097d"),{name:"Game",props:{name:String,isLike:Boolean}}),s=i,r=(n("1077"),n("2877")),c=Object(r["a"])(s,a,o,!1,null,"61a9bc2a",null);c.options.__file="Game.vue";e["a"]=c.exports},"2c9f":function(t,e,n){"use strict";var a=n("90f8"),o=n.n(a);o.a},"2f7a":function(t,e,n){},3234:function(t,e,n){},3798:function(t,e,n){},"3e07":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-mail"},[n("h1",[t._v("You are in SiteMail Page now")])])}],i=n("2877"),s={},r=Object(i["a"])(s,a,o,!1,null,null,null);r.options.__file="SiteMail.vue";e["default"]=r.exports},"3f9e":function(t,e,n){"use strict";var a=n("7b5c"),o=n.n(a);o.a},"417e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lobby"},[n("div",{staticClass:"wrapper"},[n("SearchBar"),n("h1",[t._v("遊戲列表")]),n("GameList")],1)])},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transtion",[n("div",{staticClass:"searchbar",class:{active:t.isSearchBarOpen}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",id:"search",placeholder:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("div",{staticClass:"list"},[n("div",[t._v("Hot")]),n("ul",t._l(t.Hot,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0)]),n("div",{staticClass:"list history"},[n("div",[t._v("History")]),n("ul",t._l(t.History,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0)])])])},s=[],r={name:"SearchBar",props:{},data:function(){return{Hot:["好熱","真的很熱","熱爆了","熱熱","台中熱"],History:["這個","小秘密","午餐吃什麼","提高尾牙抽獎中獎率","蛤"]}},computed:{isSearchBarOpen:function(){return this.$store.state.game.openSearchBar}}},c=r,u=(n("2c9f"),n("2877")),l=Object(u["a"])(c,i,s,!1,null,"6ddf1b5d",null);l.options.__file="SearchBar.vue";var m=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-list"},t._l(t.openGameList,function(t){return n("Game",{key:t.id,attrs:{name:t.NameTw,isLike:t.isLike}})}),1)},f=[],p=n("25e0"),v={name:"GameList",props:{},components:{Game:p["a"]},computed:{openGameList:function(){return this.$store.state.game.openGameList}}},h=v,g=(n("df46"),Object(u["a"])(h,d,f,!1,null,"7cb04666",null));g.options.__file="GameList.vue";var _=g.exports,b={name:"lobby",data:function(){return{}},components:{SearchBar:m,GameList:_}},C=b,w=(n("f442"),Object(u["a"])(C,a,o,!1,null,"10a5e1d8",null));w.options.__file="Lobby.vue";e["default"]=w.exports},"446f":function(t,e,n){"use strict";var a=n("0cd1"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("a481"),n("ac6a"),n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Layout")],1)},i=[],s=n("88e9"),r={name:"app",components:{Layout:s["default"]}},c=r,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,o,i,!1,null,null,null);l.options.__file="App.vue";var m=l.exports,d=n("bc3a"),f=n.n(d),p=n("a7fe"),v=n.n(p),h=n("8c4f");a["default"].use(h["a"]);var g=new h["a"]({routes:[{path:"/",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/lobby",name:"lobby",component:function(){return Promise.resolve().then(n.bind(null,"417e"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(n.bind(null,"f820"))}}]}),_=n("2f62"),b={state:{account:"",password:"",signing:!1,loginStatus:!1,user:"",meiDonnow:""},mutations:{updateSigning:function(t){t.signing=!t.signing},updateLoginStatus:function(t){t.loginStatus=!t.loginStatus},updateUser:function(t,e){t.user=e.user},updatemeiDonnow:function(){}},actions:{checkLogin:function(t){return new Promise(function(e){setTimeout(function(){t.commit("updateSigning"),e()},2e3)})},submitLogin:function(t,e){return t.dispatch("checkLogin").then(function(){t.commit("updateLoginStatus"),t.commit("updateUser",e)})},submitLogout:function(t){t.commit("updateLoginStatus"),t.commit("updateUser",{user:""})}}},C={state:{isModalOpen:!1,modalOptions:{},modelDetail:{login:{headerTitle:"会员登入",viewName:"account",animation:"fade",size:{width:283,height:477}},siteMail:{headerTitle:"站内信",viewName:"site-mail",animation:"fade",size:{width:500,height:600},requiredLogin:!0},transaction:{headerTitle:"交易记录",viewName:"transaction",animation:"fade",size:{width:500,height:600},requiredLogin:!0},AccountBox:{headerTitle:"",viewName:"AccountBox",animation:"fade",size:{width:283,height:438},requiredLogin:!0},register:{headerTitle:"會員註冊",viewName:"register",animation:"fade",size:{width:900,height:700}}}},mutations:{openModal:function(t,e){t.isModalOpen=!0,t.modalOptions=t.modelDetail[e]},closeModal:function(t){t.isModalOpen=!1}},actions:{}},w={state:{openGameList:[],openGameListKind:0,openSearchBar:!1},mutations:{openGameList:function(t,e){t.openGameList=e.SortList,t.openGameListKind=e.GameKind},switchSearchBar:function(t){t.openSearchBar=!t.openSearchBar}},actions:{}},y=n("0e44");a["default"].use(_["a"]);var k=new _["a"].Store({modules:{login:b,popup:C,game:w},plugins:[Object(y["a"])({storage:{getItem:function(t){return localStorage.getItem(t)},setItem:function(t,e){localStorage.setItem(t,e,{expires:3,secure:!0})},removeItem:function(t){return localStorage.removeItem(t)}},paths:["login.loginStatus","login.user"]})]}),M=n("5a0c"),S=n.n(M),$=n("8103"),x=n.n($),L=n("bba4"),O=n.n(L),N=(n("15f5"),n("e069")),I=n.n(N);n("dcad");a["default"].use(I.a);n("f5df");a["default"].prototype.dayjs=S.a,a["default"].use(S.a),a["default"].use(v.a,f.a),a["default"].config.productionTip=!1;var A=n("7861");A.keys().forEach(function(t){var e=A(t),n=x()(O()(t.replace(/^\.\/(.*)\.\w+$/,"$1")));a["default"].component(n,e.default||e)}),new a["default"]({router:g,store:k,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5e27":function(t,e,n){},6349:function(t,e,n){"use strict";var a=n("6e90"),o=n.n(a);o.a},"68ef":function(t,e,n){"use strict";var a=n("ea4e"),o=n.n(a);o.a},"6e90":function(t,e,n){},"73cf":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{staticClass:"register-form",attrs:{model:t.formItem,"label-width":120,rules:t.ruleValidate}},[n("ul",{staticClass:"step-list"},t._l(t.steplist,function(e,a){return n("li",{key:a,class:{active:a<=t.step}},[t._v(t._s(e))])}),0),0==t.step?[n("FormItem",{attrs:{label:"推荐人",prop:"ParentAccount"}},[n("i-input",{attrs:{placeholder:"Enter something..."},model:{value:t.formItem.ParentAccount,callback:function(e){t.$set(t.formItem,"ParentAccount",e)},expression:"formItem.ParentAccount"}})],1),n("FormItem",{attrs:{label:"会员账号",prop:"Account"}},[n("i-input",{attrs:{placeholder:"Enter something..."},model:{value:t.formItem.Account,callback:function(e){t.$set(t.formItem,"Account",e)},expression:"formItem.Account"}})],1),n("FormItem",{attrs:{label:"会员密码",prop:"Password"}},[n("i-input",{attrs:{placeholder:"Enter something..."},model:{value:t.formItem.Password,callback:function(e){t.$set(t.formItem,"Password",e)},expression:"formItem.Password"}})],1),n("FormItem",{attrs:{label:"确认密码",prop:"Confirm_Password"}},[n("i-input",{attrs:{placeholder:"Enter something..."},model:{value:t.formItem.Confirm_Password,callback:function(e){t.$set(t.formItem,"Confirm_Password",e)},expression:"formItem.Confirm_Password"}})],1),n("FormItem",{attrs:{label:"取款密码",prop:"MoneyPassword"}},[n("i-input",{attrs:{placeholder:"Enter something..."},model:{value:t.formItem.MoneyPassword,callback:function(e){t.$set(t.formItem,"MoneyPassword",e)},expression:"formItem.MoneyPassword"}})],1),n("FormItem",{staticClass:"step-1-btn"},[n("Checkbox",{model:{value:t.formItem.agree,callback:function(e){t.$set(t.formItem,"agree",e)},expression:"formItem.agree"}},[t._v("\n        已满18 岁，且同意本站\n        "),n("span",[t._v("用户注册协议")])]),n("Button",{on:{click:function(e){t.nextStep()}}},[t._v("下一步")])],1)]:1==t.step?[n("FormItem",[n("Button",{staticClass:"prev-btn",on:{click:function(e){t.prevStep()}}},[t._v("上一步")]),n("Button",{on:{click:function(e){t.nextStep()}}},[t._v("下一步")])],1)]:2==t.step?void 0:t._e()],2)},o=[],i={data:function(){return{step:0,steplist:["输入账密","会员资料","完成注册"],formItem:{ParentAccount:"",Account:"",Password:"",Confirm_Password:"",MoneyPassword:""},ruleValidate:{ParentAccount:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],Account:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],Password:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],Confirm_Password:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],MoneyPassword:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],agree:[{required:!0}]}}},methods:{nextStep:function(){switch(this.step){case 0:console.log("step 1 done. ".concat(JSON.stringify(this.formItem)," "));break;case 1:console.log("step 2 done. ".concat(JSON.stringify(this.formItem)," "));break;default:break}this.step++},prevStep:function(){this.step--}}},s=i,r=(n("3f9e"),n("2877")),c=Object(r["a"])(s,a,o,!1,null,"515b3a0e",null);c.options.__file="Register.vue";e["default"]=c.exports},"77be":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account"},[n("i",{staticClass:"far fa-user-circle"}),n("Login")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.state.login.loginStatus?t._e():[n("Form",{attrs:{model:t.formItem}},[n("FormItem",[n("i-input",{attrs:{type:"text",placeholder:"账号"},model:{value:t.formItem.user,callback:function(e){t.$set(t.formItem,"user",e)},expression:"formItem.user"}})],1),n("FormItem",[n("i-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.formItem.password,callback:function(e){t.$set(t.formItem,"password",e)},expression:"formItem.password"}})],1),n("FormItem",[n("i-input",{attrs:{type:"text",placeholder:"验证码"},model:{value:t.formItem.checkCode,callback:function(e){t.$set(t.formItem,"checkCode",e)},expression:"formItem.checkCode"}})],1),n("Button",{staticClass:"login-btn",attrs:{disabled:t.$store.state.login.signing,long:""},on:{click:t.login}},[t._v(t._s(t.$store.state.login.signing?"登入中...":"登入"))]),n("Button",{staticClass:"forget-btn",attrs:{type:"text"},on:{click:function(e){t.forget()}}},[t._v("是否忘记您的密码?")])],1)]],2)},s=[],r={data:function(){return{formItem:{user:"",password:""}}},methods:{login:function(){var t=this;""!=this.formItem.user&&""!=this.formItem.password?(this.$store.commit("updateSigning"),this.$store.dispatch({type:"submitLogin",user:this.formItem.user,password:this.formItem.password}).then(function(){t.$store.commit("openModal","AccountBox")})):this.$Modal.error({title:"錯誤",content:"<p>帳號或密碼不得為空</p>"})},forget:function(){this.$Modal.warning({title:"忘記密碼",content:"<h3>我也不知道，幫QQ</h3>"})}},created:function(){},computed:{}},c=r,u=(n("d3c5"),n("2877")),l=Object(u["a"])(c,i,s,!1,null,"ec556dde",null);l.options.__file="Login.vue";var m=l.exports,d={name:"account",data:function(){return{}},components:{Login:m}},f=d,p=(n("e4a8"),Object(u["a"])(f,a,o,!1,null,"4ec2bd3e",null));p.options.__file="Account.vue";e["default"]=p.exports},7861:function(t,e,n){var a={"./About.vue":"f820","./Account.vue":"77be","./AccountBox.vue":"1c82","./Home.vue":"bb51","./Layout.vue":"88e9","./Lobby.vue":"417e","./Register.vue":"73cf","./SiteMail.vue":"3e07","./Transaction.vue":"0d43"};function o(t){var e=i(t);return n(e)}function i(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=i,t.exports=o,o.id="7861"},"7b5c":function(t,e,n){},"7c27":function(t,e,n){"use strict";var a=n("b197"),o=n.n(a);o.a},"85cd":function(t,e,n){},"88e9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("AppHeader",{staticClass:"header"}),n("AppNavigationDrawer"),n("router-view"),n("AppFooter"),n("AppModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalOpen,expression:"isModalOpen"}],attrs:{animation:t.modalOption.animation,"modal-name":t.modalOption.viewName,"modal-size":t.modalOption.size}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.modalOption.headerTitle))]),n(t.modalOption.viewName,{tag:"component",attrs:{slot:"body"},slot:"body"})],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"top-header"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"top-mei-don"},[n("MeiDon")],1),n("div",{staticClass:"top-marquee"},[n("NewsMarquee")],1)])]),n("div",{staticClass:"nav"},[n("div",{staticClass:"wrapper"},[n("GameCategory")],1)])])},s=[],r=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mai-don"},[t._v("美东时间 "+t._s(t.MeiDonNow))])}),c=[],u={name:"MaiDon",props:{},data:function(){return{MeiDonNow:""}},methods:{getMeiDonNow:function(){var t=this.dayjs().format("YYYY/MM/DD HH:mm:ss");this.MeiDonNow=t}},mounted:function(){this.getMeiDonNow()},created:function(){var t=this;setInterval(function(){t.getMeiDonNow()},990)}},l=u,m=(n("140b"),n("2877")),d=Object(m["a"])(l,r,c,!1,null,"68ab6910",null);d.options.__file="MeiDon.vue";var f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-marquee"},[n("i",{staticClass:"fas fa-volume-up"}),t._v("\n  "+t._s(t.news)+"\n")])},v=[],h={name:"NewsMarquee",props:{},data:function(){return{news:"義行對與調連，紙參快、風樣施過直！言生發聲不安笑候們然加量先紙參快、風樣施過直！"}}},g=h,_=(n("6349"),Object(m["a"])(g,p,v,!1,null,"4f4b9ca2",null));_.options.__file="NewsMarquee.vue";var b=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-category"},[n("ul",[t._l(t.gameCategories,function(e){return n("li",{key:e.GameKind,class:{active:t.activeKind===e.GameKind},on:{click:function(n){t.openGameList(e)}}},[n("i",{staticClass:"fas",class:e.Icon}),t._v("\n      "+t._s(e.GameName)+"\n    ")])}),n("li",{on:{click:function(e){t.openSearchBar()}}},[n("i",{staticClass:"fas fa-search"}),t._v("\n      Search\n    ")])],2)])},w=[],y={name:"GameCategory",props:{},data:function(){return{gameCategories:[]}},methods:{openGameList:function(t){this.$store.commit("openGameList",t),this.$router.push("lobby")},openSearchBar:function(){this.$store.commit("switchSearchBar")}},mounted:function(){var t=this;this.axios.get("https://next.json-generator.com/api/json/get/41iE5zvCr").then(function(e){t.gameCategories=e.data,t.$store.commit("openGameList",t.gameCategories[0])},function(){console.log("fail")})},computed:{activeKind:function(){return this.$store.state.game.openGameListKind}}},k=y,M=(n("172f"),Object(m["a"])(k,C,w,!1,null,"7fc990de",null));M.options.__file="GameCategory.vue";var S=M.exports,$={name:"Header",components:{MeiDon:f,NewsMarquee:b,GameCategory:S},props:{},data:function(){return{}}},x=$,L=(n("68ef"),Object(m["a"])(x,i,s,!1,null,"eeb6586a",null));L.options.__file="Header.vue";var O=L.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("ArticleList"),n("p",{staticClass:"copy-right"},[t._v("Copyright © Portal-Web Reserved")])],1)},I=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-list"},[n("ul",t._l(t.articles,function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:e.Url}},[t._v(t._s(e.title))])],1)}),0)])},P=[],j={name:"article-list",props:{},data:function(){return{articles:[{title:"关于我们",Url:"/About"},{title:"联络我们",Url:"/Contact"},{title:"代理加盟",Url:"/Partner"},{title:"存款帮助",Url:"/How/Deposit"},{title:"取款帮助",Url:"/How/Withdrawal"},{title:"常见问题",Url:"/FAQ"},{title:"客户端下载",Url:"/Client"}]}}},B=j,E=(n("cbcc"),Object(m["a"])(B,A,P,!1,null,"c9a80c20",null));E.options.__file="ArticleList.vue";var G=E.exports,D={name:"Footer",props:{},components:{ArticleList:G}},T=D,U=(n("446f"),Object(m["a"])(T,N,I,!1,null,"6b879d96",null));U.options.__file="Footer.vue";var F=U.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation",class:{show:this.navigationState,hide:!this.navigationState}},[n("div",{staticClass:"change-btn",on:{click:function(e){t.changeNaviState()}}},[n("i",{staticClass:"fas fa-arrow-circle-right"}),this.navigationState?[t._v("收起")]:[t._v("展開")]],2),n("div",{staticClass:"navi-box"},[n("div",{staticClass:"navi-head"},[t._m(0),n("div",{staticClass:"domain"},[t._v(t._s(t.domainName))])]),n("ul",{staticClass:"menu"},t._l(t.sideMenu,function(e,a){return n("li",{key:a},["Modal"===e.open?n("div",{on:{click:function(n){t.openModal(e.ActionContent)}}},[n("img",{attrs:{src:e.icon}}),t._v("\n          "+t._s(e.NameCn)+"\n        ")]):t._e(),"router"===e.open?n("div",{on:{click:function(n){t.chanheRouter(e.ActionContent)}}},[n("img",{attrs:{src:e.icon}}),t._v("\n          "+t._s(e.NameCn)+"\n        ")]):t._e()])}),0),n("div",{staticClass:"navi-foot"},[t.services?n("ul",{staticClass:"service-info"},t._l(t.services,function(e,a){return n("li",{key:a},[t._v(t._s(e.NameCn))])}),0):t._e(),n("div",{staticClass:"chat-btn"},[t._v("7x24客服")])])])])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"https://img00.deviantart.net/64e9/i/2018/211/5/b/nintendo__1975__vector_logo_by_dreamcopter-dcir65u.png"}})])}],z={name:"NavigationDrawer",props:{},data:function(){return{domainName:"XXXDEMO.com",screenWidth:document.body.clientWidth,navigationState:!0,Menus:[{NameCn:"会员登入",ActionContent:"login",open:"Modal",icon:"https://i.imgur.com/Cuvtop7.png"},{NameCn:"免费开户",ActionContent:"register",open:"Modal",icon:"https://i.imgur.com/eokHtFS.png"},{NameCn:"免费试玩",ActionContent:"freeplay",open:"Modal",icon:"https://i.imgur.com/01XD9Aw.png"},{NameCn:"优惠活动",ActionContent:"promotion",open:"Modal",icon:"https://i.imgur.com/VuZUT3m.png"},{NameCn:"手机投注",ActionContent:"/Mobile",open:"blank",icon:"https://i.imgur.com/JOTgWVI.png"}],loginMenu:[{NameCn:"会员中心",ActionContent:"AccountBox",open:"Modal",icon:"https://i.imgur.com/SAgWk6X.png"},{NameCn:"站內信",ActionContent:"siteMail",open:"Modal",icon:"https://i.imgur.com/QQdcFWs.png"},{NameCn:"帐务记录",ActionContent:"transaction",open:"Modal",icon:"https://i.imgur.com/Tec3LLS.png"},{NameCn:"投注记录",ActionContent:"betrecord",open:"Modal",icon:"https://i.imgur.com/dQf3aQD.png"},{NameCn:"优惠活动",ActionContent:"promotion",open:"Modal",icon:"https://i.imgur.com/VuZUT3m.png"},{NameCn:"时时返水",ActionContent:"atd",open:"Modal",icon:"https://i.imgur.com/Nhw5zvJ.png"},{NameCn:"最近浏览",ActionContent:"review",open:"Modal",icon:"https://i.imgur.com/WUZzQlK.png"}],services:[{service:"qq",NameCn:"客服QQ",content:"123456"},{service:"wechat",NameCn:"微信客服",content:"123456"}]}},mounted:function(){var t=this;window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,t.screenWidth=window.screenWidth}()}},computed:{sideMenu:function(){return this.$store.state.login.loginStatus?this.loginMenu:this.Menus}},watch:{screenWidth:function(t){this.screenWidth=t,this.screenWidth<1e3?this.navigationState=!1:this.navigationState=!0}},methods:{openModal:function(t){this.$store.commit("openModal",t)},chanheRouter:function(t){this.$router.push({path:t})},changeNaviState:function(){this.navigationState=!this.navigationState}}},W=z,J=(n("09ee"),Object(m["a"])(W,q,H,!1,null,"5297686e",null));J.options.__file="NavigationDrawer.vue";var Q=J.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"md-"+t.animation}},[n("div",{staticClass:"md-backdrop"},[n("div",{staticClass:"md-container",class:t.modaleClass,style:{width:t.containerSize.width+"px",height:t.containerSize.height+"px"}},[n("div",{staticClass:"md-header"},[t._t("header",[t._v("彈窗標題")]),n("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[t._v("x")])],2),n("div",{staticClass:"md-body"},[t._t("body",[t._v("彈窗標題內容")])],2)])])])},R=[],Y={name:"Modal",props:["animation","modalName","modalSize"],data:function(){return{}},methods:{close:function(){this.$store.commit("closeModal")}},computed:{containerSize:function(){return this.modalSize||{width:283,height:477}},modaleClass:function(){return this.modalName||""}}},V=Y,X=(n("b77d"),Object(m["a"])(V,K,R,!1,null,"39c7d2cb",null));X.options.__file="Modal.vue";var Z=X.exports,tt={name:"layout",components:{AppHeader:O,AppFooter:F,AppNavigationDrawer:Q,AppModal:Z},data:function(){return{}},methods:{},computed:{isModalOpen:function(){return this.$store.state.popup.isModalOpen},modalOption:function(){return this.$store.state.popup.modalOptions}}},et=tt,nt=(n("ae7e"),Object(m["a"])(et,a,o,!1,null,"01e77322",null));nt.options.__file="Layout.vue";e["default"]=nt.exports},"90f8":function(t,e,n){},a0e4:function(t,e,n){},a987:function(t,e,n){},ae7e:function(t,e,n){"use strict";var a=n("d9c3"),o=n.n(a);o.a},ae9d:function(t,e,n){},b197:function(t,e,n){},b77d:function(t,e,n){"use strict";var a=n("2f7a"),o=n.n(a);o.a},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("this is home page")])])}],i=n("2877"),s={},r=Object(i["a"])(s,a,o,!1,null,null,null);r.options.__file="Home.vue";e["default"]=r.exports},cbcc:function(t,e,n){"use strict";var a=n("a0e4"),o=n.n(a);o.a},d3c5:function(t,e,n){"use strict";var a=n("3234"),o=n.n(a);o.a},d9c3:function(t,e,n){},df46:function(t,e,n){"use strict";var a=n("e9cc"),o=n.n(a);o.a},e4a8:function(t,e,n){"use strict";var a=n("ae9d"),o=n.n(a);o.a},e9cc:function(t,e,n){},ea4e:function(t,e,n){},f442:function(t,e,n){"use strict";var a=n("85cd"),o=n.n(a);o.a},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),t._m(0),t._m(1),t._l(t.games,function(t){return n("Game",{key:t.id,attrs:{name:t.name,isLike:t.isLike}})})],2)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("i",{staticClass:"fas fa-shuttle-van"}),n("i",{staticClass:"fas fa-shuttle-van"}),n("i",{staticClass:"fas fa-shuttle-van"}),t._v("微婆 會帶 不養\n    "),n("i",{staticClass:"fas fa-shuttle-van"}),n("i",{staticClass:"fas fa-shuttle-van"}),n("i",{staticClass:"fas fa-shuttle-van"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("i",{staticClass:"far fa-lemon"}),n("i",{staticClass:"fas fa-coffee"}),t._v("來一杯蜂蜜檸檬\n  ")])}],i=(n("cadf"),n("551c"),n("097d"),n("25e0")),s={name:"about",data:function(){return{games:[{id:0,name:"吃飯",imgUrl:"",isLike:!0},{id:1,name:"睡覺",imgUrl:"",isLike:!1},{id:2,name:"打東東",imgUrl:"",isLike:!1},{id:3,name:"????",imgUrl:"",isLike:!0},{id:4,name:"ㄎㄎㄎ",imgUrl:"",isLike:!0}]}},components:{Game:i["a"]}},r=s,c=n("2877"),u=Object(c["a"])(r,a,o,!1,null,null,null);u.options.__file="About.vue";e["default"]=u.exports}});
//# sourceMappingURL=app.3334d5d5.js.map