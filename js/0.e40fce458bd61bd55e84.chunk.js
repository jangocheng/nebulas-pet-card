webpackJsonp([0],{342:function(t,e,a){"use strict";function r(t){i||a(349)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(345),s=a(350),i=!1,o=a(139),l=r,c=o(n.a,s.a,!1,l,"data-v-0fd60cd4",null);c.options.__file="src/views/create.vue",e.default=c.exports},345:function(t,e,a){"use strict";var r=a(140),n=a(141),s=a(142),i=(a.n(s),new s.Neb),o=new n.a;i.setRequest(new s.HttpRequest("https://testnet.nebulas.io")),e.a={data:function(){return{account:null,currentStep:0,serialNumber:"",petCardForm:{name:"",date:"",desc:"",avatar:""},ruleValidate:{name:[{required:!0,message:"爱宠怎么可以没有一个好听的名字呢",trigger:"blur"}],date:[{required:!0,type:"date",message:"不记得 ta 的生日了？想想看 ta 是什么时候成为你的家庭成员的",trigger:"change"}],desc:[{required:!0,message:"有什么想对 ta 说的吗",trigger:"blur"}]},loading:!1,viewImage:!1}},computed:{fmtBirthday:function(){return r.a.dateFmt(this.petCardForm.date)}},created:function(){this.getAccount()},methods:{initAccount:function(t){var e=r.a.parse(t.result);this.account=s.Account.fromAddress(e)},getAccount:function(){var t=this;o.simulateCall(r.a.getContractAddress(),"0","getUserAddress","",{listener:t.initAccount})},handleView:function(){this.viewImage=!0},handleRemove:function(){this.petCardForm.avatar=""},handleImgUpload:function(t){var e=this,a=t.target.files[0],n=new FileReader;n.readAsDataURL(a),n.onload=function(t){e.petCardForm.avatar=t.target.result};var s=new FormData;s.append("smfile",a),s.append("ssl",!0),r.a.uploadImg.post("/api/upload",s).then(function(t){e.petCardForm.avatar=t.data.url,console.log("===========",t)}).catch(function(t){console.error(t)})},handleNextClick:function(t){var e=this;this.$refs[t].validate(function(t){t?e.currentStep++:e.$Message.error("请将信息填写完整")})},handleConfirmClick:function(){if(this.account){this.loading=!0;var t={name:this.petCardForm.name,birthday:+this.petCardForm.birthday,photo:this.petCardForm.avatar,remark:this.petCardForm.desc};this.handleCreate(t)}else this.$Modal.warning({title:"请先安装浏览器钱包插件",content:'<p>检测到你还没安装浏览器钱包插件，请先<a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">安装 NAS 钱包插件</a></p><br>\n                              <p>如果你还没有创建 NAS 钱包，可以参考官方教程进行创建「<a href="https://blog.nebulas.io/2018/04/12/creating-a-nas-wallet/" target="_blank">星云Web钱包教程1：创建NAS钱包</a>」</p><br>\n                              <p>确认导入钱包并解锁后，请刷新页面重新进行操作 :)</p>'})},handleCreate:function(t){var e=this,a=r.a.getContractAddress(),n=r.a.toSting([t]);this.serialNumber=o.call(a,"0","createPetCard",n,{listener:function(t){e.currentStep++,e.loading=!1}})}}}},349:function(t,e){},350:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("Row",{staticClass:"pet-mb-32",attrs:{type:"flex",justify:"center",align:"middle"}},[r("Col",{attrs:{span:"12"}},[r("Steps",{attrs:{current:t.currentStep}},[r("Step",{attrs:{title:"填写",content:"填写爱宠的相关信息"}}),t._v(" "),r("Step",{attrs:{title:"确认",content:"确认爱宠信息无误"}}),t._v(" "),r("Step",{attrs:{title:"完成",content:"宠物卡创建完成"}})],1)],1)],1),t._v(" "),r("Row",{staticClass:"pet-mb-160",attrs:{type:"flex",justify:"center",align:"middle"}},[0===t.currentStep?r("Col",{attrs:{span:"12"}},[r("Form",{ref:"petCardForm",attrs:{model:t.petCardForm,rules:t.ruleValidate,"label-width":80}},[r("FormItem",{attrs:{label:"萌宠照片"}},[t.petCardForm.avatar?r("div",{staticClass:"pet-upload-image"},[r("img",{attrs:{src:t.petCardForm.avatar}}),t._v(" "),r("div",{staticClass:"pet-upload-image-cover"},[r("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(e){return t.handleView(e)}}}),t._v(" "),r("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(e){return t.handleRemove(e)}}})],1)]):r("div",[r("input",{staticStyle:{display:"none"},attrs:{id:"petAvatar",type:"file",accept:"image/*"},on:{change:t.handleImgUpload}}),t._v(" "),r("label",{attrs:{for:"petAvatar"}},[r("div",{staticClass:"pet-img-upload"},[r("Icon",{attrs:{type:"camera",size:"20"}})],1)])])]),t._v(" "),r("FormItem",{attrs:{label:"爱宠名称",prop:"name"}},[r("Input",{attrs:{placeholder:"告诉我 ta 的名字吧"},model:{value:t.petCardForm.name,callback:function(e){t.$set(t.petCardForm,"name",e)},expression:"petCardForm.name"}})],1),t._v(" "),r("FormItem",{attrs:{label:"出生日期",prop:"date"}},[r("DatePicker",{attrs:{type:"date",placeholder:"选择爱宠的出生日期"},model:{value:t.petCardForm.date,callback:function(e){t.$set(t.petCardForm,"date",e)},expression:"petCardForm.date"}})],1),t._v(" "),r("FormItem",{attrs:{label:"主人寄语",prop:"desc"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"你们之间一定有不少趣事..."},model:{value:t.petCardForm.desc,callback:function(e){t.$set(t.petCardForm,"desc",e)},expression:"petCardForm.desc"}})],1),t._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleNextClick("petCardForm")}}},[t._v("下一步")])],1)],1),t._v(" "),r("Modal",{attrs:{title:"萌宠照片"},model:{value:t.viewImage,callback:function(e){t.viewImage=e},expression:"viewImage"}},[t.viewImage?r("img",{staticStyle:{width:"100%"},attrs:{src:t.petCardForm.avatar}}):t._e()])],1):t._e(),t._v(" "),1===t.currentStep?r("Col",{attrs:{span:"8"}},[r("Card",{staticClass:"pet-mb-32"},[r("Row",{staticClass:"pet-pt-16 pet-pb-16",attrs:{type:"flex",justify:"center",align:"top"}},[r("Col",{attrs:{span:"8"}},[r("img",{staticClass:"pet-avatar",attrs:{src:t.petCardForm.avatar,alt:"Pepe"}})]),t._v(" "),r("Col",{attrs:{span:"16"}},[r("div",{staticStyle:{"margin-top":"32px"}},[r("p",[t._v("爱宠名称："+t._s(t.petCardForm.name))]),t._v(" "),r("p",[t._v("出生日期："+t._s(t.fmtBirthday))]),t._v(" "),r("p",[t._v("主人寄语：")]),t._v(" "),r("p",[t._v(t._s(t.petCardForm.desc))])])])],1)],1),t._v(" "),r("Button",{attrs:{type:"ghost"},on:{click:function(e){t.currentStep--}}},[t._v("上一步")]),t._v(" "),r("Button",{attrs:{type:"primary"},on:{click:t.handleConfirmClick}},[t._v("确定")])],1):t._e(),t._v(" "),2===t.currentStep?r("Col",{attrs:{span:"12"}},[r("div",{staticStyle:{"text-align":"center"}},[r("h1",[r("img",{attrs:{src:a(351),alt:""}})]),t._v(" "),r("h2",{staticClass:"pet-mb-32"},[t._v("「"+t._s(t.petCardForm.name)+"」的宠物卡已经创建，你可以在「个人中心」-「宠物卡」中查看")]),t._v(" "),r("p",[t._v("* 数据写入需要一定时间，如果不能马上看到新创建的宠物卡，可以稍候再刷新查看")]),t._v(" "),r("router-link",{attrs:{to:"/"}},[r("Button",{attrs:{type:"primary",size:"large"}},[t._v("返回首页")])],1),t._v(" "),r("router-link",{attrs:{to:"/account"}},[r("Button",{attrs:{type:"ghost",size:"large"}},[t._v("个人中心")])],1)],1)]):t._e(),t._v(" "),t.loading?r("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},n=[];r._withStripped=!0;var s={render:r,staticRenderFns:n};e.a=s},351:function(t,e,a){t.exports=a.p+"d36b382ab87824a77ba0d1d7f30b78de.png"}});