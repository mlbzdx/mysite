(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05ba3b6a"],{"40ad":function(t,a,i){"use strict";i("ba47")},"9d1f":function(t,a,i){"use strict";i("a9e5")},a9e5:function(t,a,i){},ba47:function(t,a,i){},d097:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"set-up-container"},[i("div",{staticClass:"title-1st"},[t._v("网站信息")]),i("div",{staticClass:"title-2st"},[t._v("网站标题")]),i("el-input",{attrs:{placeholder:"请输入网站标题",disabled:!0},model:{value:t.data.siteTitle,callback:function(a){t.$set(t.data,"siteTitle",a)},expression:"data.siteTitle"}}),i("div",{staticClass:"title-2st"},[t._v("邮箱")]),i("el-input",{attrs:{placeholder:"请输入邮箱",disabled:!0},model:{value:t.data.mail,callback:function(a){t.$set(t.data,"mail",a)},expression:"data.mail"}}),i("div",{staticClass:"title-2st"},[t._v("备案号")]),i("el-input",{attrs:{placeholder:"请输入备案号",disabled:!0},model:{value:t.data.icp,callback:function(a){t.$set(t.data,"icp",a)},expression:"data.icp"}}),i("div",{staticClass:"title-1st"},[t._v("网站头像信息")]),i("el-image",{staticStyle:{width:"150px"},attrs:{"preview-src-list":t.srcList,src:t.data.avatar,fit:"contain"}}),i("div",{staticClass:"title-1st"},[t._v("网址图标信息")]),i("div",{staticClass:"title-2st"},[t._v("网址图标地址")]),i("el-input",{attrs:{placeholder:"网址图标地址",disabled:!0},model:{value:t.data.favicon,callback:function(a){t.$set(t.data,"favicon",a)},expression:"data.favicon"}}),i("div",{staticClass:"title-2st"},[t._v("网址图标预览")]),i("el-image",{staticStyle:{width:"150px"},attrs:{"preview-src-list":t.srcList,src:t.data.favicon,fit:"contain"}}),i("div",{staticClass:"title-1st"},[t._v("github信息")]),i("div",{staticClass:"title-2st"},[t._v("github名字")]),i("el-input",{attrs:{placeholder:"github名字",disabled:!0},model:{value:t.data.githubName,callback:function(a){t.$set(t.data,"githubName",a)},expression:"data.githubName"}}),i("div",{staticClass:"title-2st"},[t._v("github地址")]),i("el-input",{attrs:{placeholder:"github地址",disabled:!0},model:{value:t.data.github,callback:function(a){t.$set(t.data,"github",a)},expression:"data.github"}}),i("div",{staticClass:"title-1st"},[t._v("QQ信息")]),i("div",{staticClass:"title-2st"},[t._v("QQ号码")]),i("el-input",{attrs:{placeholder:"QQ号码",disabled:!0},model:{value:t.data.qq,callback:function(a){t.$set(t.data,"qq",a)},expression:"data.qq"}}),i("div",{staticClass:"title-2st"},[t._v("QQ二维码图片预览")]),i("el-image",{staticStyle:{width:"150px"},attrs:{"preview-src-list":t.srcList,src:t.data.qqQrCode,fit:"contain"}}),i("div",{staticClass:"title-1st"},[t._v("微信信息")]),i("div",{staticClass:"title-2st"},[t._v("微信号")]),i("el-input",{attrs:{placeholder:"微信号",disabled:!0},model:{value:t.data.weixin,callback:function(a){t.$set(t.data,"weixin",a)},expression:"data.weixin"}}),i("div",{staticClass:"title-2st"},[t._v("微信二维码图片预览")]),i("el-image",{staticStyle:{width:"150px"},attrs:{"preview-src-list":t.srcList,src:t.data.weixinQrCode,fit:"contain"}}),i("div",{staticStyle:{margin:"25px 0"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.openDialogHandle}},[t._v("进入编辑模式")])],1),i("el-dialog",{attrs:{title:"请设置个人空间信息",visible:t.dialogVisible,fullscreen:""},on:{"update:visible":function(a){t.dialogVisible=a}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px","label-position":"left",size:"medium"}},[i("el-form-item",{attrs:{label:"网站标题"}},[i("el-input",{attrs:{placeholder:"请输入网站标题"},model:{value:t.form.siteTitle,callback:function(a){t.$set(t.form,"siteTitle",a)},expression:"form.siteTitle"}})],1),i("el-form-item",{attrs:{label:"邮箱"}},[i("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:t.form.mail,callback:function(a){t.$set(t.form,"mail",a)},expression:"form.mail"}})],1),i("el-form-item",{attrs:{label:"备案号"}},[i("el-input",{attrs:{placeholder:"请输入备案号"},model:{value:t.form.icp,callback:function(a){t.$set(t.form,"icp",a)},expression:"form.icp"}})],1),i("el-form-item",{attrs:{label:"网站头像地址"}},[i("Upload",{model:{value:t.form.avatar,callback:function(a){t.$set(t.form,"avatar",a)},expression:"form.avatar"}})],1),i("el-form-item",{attrs:{label:"网站图标地址"}},[i("el-input",{attrs:{placeholder:"网站图标地址"},model:{value:t.form.favicon,callback:function(a){t.$set(t.form,"favicon",a)},expression:"form.favicon"}})],1),i("el-form-item",{attrs:{label:"github名字"}},[i("el-input",{attrs:{placeholder:"github名字"},model:{value:t.form.githubName,callback:function(a){t.$set(t.form,"githubName",a)},expression:"form.githubName"}})],1),i("el-form-item",{attrs:{label:"github地址"}},[i("el-input",{attrs:{placeholder:"github地址"},model:{value:t.form.github,callback:function(a){t.$set(t.form,"github",a)},expression:"form.github"}})],1),i("el-form-item",{attrs:{label:"QQ号码"}},[i("el-input",{attrs:{placeholder:"QQ号码"},model:{value:t.form.qq,callback:function(a){t.$set(t.form,"qq",a)},expression:"form.qq"}})],1),i("el-form-item",{attrs:{label:"QQ二维码图片预览"}},[i("Upload",{model:{value:t.form.qqQrCode,callback:function(a){t.$set(t.form,"qqQrCode",a)},expression:"form.qqQrCode"}})],1),i("el-form-item",{attrs:{label:"微信号"}},[i("el-input",{attrs:{placeholder:"微信号"},model:{value:t.form.weixin,callback:function(a){t.$set(t.form,"weixin",a)},expression:"form.weixin"}})],1),i("el-form-item",{attrs:{label:"微信二维码图片预览"}},[i("Upload",{model:{value:t.form.weixinQrCode,callback:function(a){t.$set(t.form,"weixinQrCode",a)},expression:"form.weixinQrCode"}})],1),i("el-form-item",[i("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.confirmEditDialogHandle}},[t._v("确 定")])],1)],1)],1)],1)},l=[],s=i("5530"),r=i("b775");function o(){return Object(r["a"])({url:"/api/setting",method:"get"})}function n(t){return Object(r["a"])({url:"/api/setting",method:"put",data:t})}var c=i("d443"),d={components:{Upload:c["a"]},data:function(){return{data:{avatar:"string",siteTitle:"string",github:"string",qq:"string",qqQrCode:"string",weixin:"string",weixinQrCode:"string",mail:"string",icp:"string",githubName:"string",favicon:"string",id:"string"},dialogVisible:!1,form:{avatar:"string",siteTitle:"string",github:"string",qq:"string",qqQrCode:"string",weixin:"string",weixinQrCode:"string",mail:"string",icp:"string",githubName:"string",favicon:"string",id:"string"}}},computed:{srcList:function(){return[this.data.avatar,this.data.favicon,this.data.qqQrCode,this.data.weixinQrCode]}},methods:{initData:function(){var t=this;o().then((function(a){t.data=a.data}))},openDialogHandle:function(){this.dialogVisible=!0,this.form=Object(s["a"])({},this.data)},confirmEditDialogHandle:function(){var t=this;n(this.form).then((function(){t.dialogVisible=!1,t.initData(),t.$message.success("成功修改全局设置")}))}},created:function(){this.initData()}},u=d,m=(i("9d1f"),i("2877")),f=Object(m["a"])(u,e,l,!1,null,null,null);a["default"]=f.exports},d443:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"block"},[t._v(t._s(t.uploadTitle))]),i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,headers:t.headers}},[t.value?i("img",{staticClass:"avatar",attrs:{src:t.value}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},l=[],s={props:["uploadTitle","value"],computed:{headers:function(){return{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}}},methods:{handleAvatarSuccess:function(t){this.$emit("input",t.data)}}},r=s,o=(i("40ad"),i("2877")),n=Object(o["a"])(r,e,l,!1,null,null,null);a["a"]=n.exports}}]);