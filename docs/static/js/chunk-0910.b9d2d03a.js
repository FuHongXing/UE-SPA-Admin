(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0910"],{"26rb":function(n,t,s){"use strict";var o=s("VcVH");s.n(o).a},VcVH:function(n,t,s){},c11S:function(n,t,s){"use strict";var o=s("gTgX");s.n(o).a},gTgX:function(n,t,s){},ntYl:function(n,t,s){"use strict";s.r(t);var o={name:"Login",components:{LangSelect:s("ETGp").a},data:function(){var n=this;return{loginForm:{username:"admin",password:"admin"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(t,s,o){!function(n){return["admin","editor"].indexOf(n.trim())>=0}(s)?o(new Error(n.$t("login.msg1"))):o()}}],password:[{required:!0,trigger:"blur",validator:function(t,s,o){s.length<5?o(new Error(n.$t("login.msg2"))):o()}}]},loading:!1,pwdType:"password"}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("Login",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:"/"})}).catch(function(){n.loading=!1})})}}},e=(s("c11S"),s("26rb"),s("KHd+")),i=Object(e.a)(o,function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[n._v(n._s(n.$t("login.title")))]),n._v(" "),s("lang-select",{staticClass:"set-language"})],1),n._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container svg-container_login"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),s("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"username"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),n._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),s("el-input",{attrs:{type:n.pwdType,name:"password","auto-complete":"on",placeholder:"password"},nativeOn:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.handleLogin(t):null}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),n._v(" "),s("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[s("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),n.handleLogin(t)}}},[n._v("\n      "+n._s(n.$t("login.logIn"))+"\n    ")]),n._v(" "),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"20px"}},[n._v(n._s(n.$t("login.username"))+" : admin")]),n._v(" "),s("span",[n._v(n._s(n.$t("login.password"))+": "+n._s(n.$t("login.any")))])]),n._v(" "),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"18px"}},[n._v(n._s(n.$t("login.username"))+" : editor")]),n._v(" "),s("span",[n._v(n._s(n.$t("login.password"))+" : "+n._s(n.$t("login.any")))])])],1)],1)},[],!1,null,"d244079a",null);i.options.__file="index.vue";t.default=i.exports}}]);