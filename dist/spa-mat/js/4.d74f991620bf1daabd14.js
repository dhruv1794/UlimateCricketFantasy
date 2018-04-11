webpackJsonp([4],{ds2m:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h5",{staticClass:"tab-header"},[e._v("Bank Account Details")]),e._v(" "),a("q-field",{attrs:{icon:"account balance",helper:"Enter your Account Number"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"Account Number"},model:{value:e.accno,callback:function(t){e.accno=t},expression:"accno"}})],1),e._v(" "),a("q-field",{attrs:{icon:"supervisor account\n",helper:"Enter your IFSC Code"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"IFSC Code"},model:{value:e.ifsc,callback:function(t){e.ifsc=t},expression:"ifsc"}})],1),e._v(" "),a("q-field",{attrs:{icon:"attach money",helper:"Enter your Bank Name"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"Bank Name"},model:{value:e.bank,callback:function(t){e.bank=t},expression:"bank"}})],1),e._v(" "),a("q-field",{attrs:{icon:"home",helper:"Enter your Bank Branch"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"Bank Branch"},model:{value:e.branch,callback:function(t){e.branch=t},expression:"branch"}})],1),e._v(" "),a("q-field",{attrs:{icon:"image",helper:"Upload Passbook Image"}},[a("q-uploader",{attrs:{"inverted-light":"",color:"secondary","stack-label":"Passbook Imagee",url:e.url}})],1),e._v(" "),a("q-btn",{staticClass:"verify-button",attrs:{color:"primary","icon-right":"send"}},[e._v("Submit Bank Details")])],1)},n=[];l._withStripped=!0;var r=a("XyMi"),i=Object(r.a)({data:function(){return{accno:"",ifsc:"",bank:"",branch:"",url:""}}},l,n,!1,null,null,null);i.options.__file="src/components/Verify/BankAccountDetails.vue";var o=i.exports,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h5",{staticClass:"tab-header"},[e._v("PAN Card Details")]),e._v(" "),a("q-field",{attrs:{icon:"accessibility",helper:"Enter your Name"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"Full Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("q-field",{attrs:{icon:"perm identity",helper:"Enter your PAN number"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"PAN Number"},model:{value:e.pan,callback:function(t){e.pan=t},expression:"pan"}})],1),e._v(" "),a("q-field",{attrs:{icon:"terrain",helper:"Enter your State"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"State"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1),e._v(" "),a("q-field",{attrs:{icon:"bubble chart",helper:"Enter your State"}},[a("q-datetime",{attrs:{"inverted-light":"",color:"secondary",type:"date"},model:{value:e.dob,callback:function(t){e.dob=t},expression:"dob"}})],1),e._v(" "),a("q-field",{attrs:{icon:"image",helper:"Upload Pan Image"}},[a("q-uploader",{attrs:{"inverted-light":"",color:"secondary","stack-label":"Pan Image",url:e.url}})],1),e._v(" "),a("q-btn",{staticClass:"verify-button",attrs:{color:"primary","icon-right":"send"}},[e._v("Submit PAN Card Details")])],1)},c=[];s._withStripped=!0;var u=Object(r.a)({data:function(){return{name:"",pan:"",state:"",dob:"",url:""}}},s,c,!1,null,null,null);u.options.__file="src/components/Verify/PanCardDetails.vue";var p=u.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h5",{staticClass:"tab-header"},[e._v("Email And Phone Verification")]),e._v(" "),a("q-field",{attrs:{icon:"phone",helper:"Enter your Mobile Number"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"Mobile"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e._v(" "),a("q-btn",{staticClass:"verify-button",attrs:{color:"primary","icon-right":"remove red eye"}},[e._v("Send OTP")]),e._v(" "),a("q-field",{attrs:{icon:"email",helper:"Enter your email"}},[a("q-input",{attrs:{"inverted-light":"",color:"secondary","stack-label":"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("q-btn",{staticClass:"verify-button",attrs:{color:"primary","icon-right":"email"}},[e._v("Verify Email")])],1)},d=[];b._withStripped=!0;var v=Object(r.a)({data:function(){return{mobile:"",email:""}}},b,d,!1,null,null,null);v.options.__file="src/components/Verify/PhoneAndEmail.vue";var m={components:{"app-email-phone":v.exports,"app-bank":o,"app-pan":p}},h=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"create-bottom-space"},[t("h3",{staticClass:"in-site-head"},[this._v("Verify Details")]),this._v(" "),t("q-tabs",{attrs:{color:"secondary",glossy:""}},[t("q-tab",{attrs:{slot:"title",alert:"",default:!0,label:"Mobile & Email Verification",name:"tab-1",icon:"message"},slot:"title"}),this._v(" "),t("q-tab",{attrs:{slot:"title",alert:"",label:"PAN card Details",name:"tab-2",icon:"fingerprint"},slot:"title"}),this._v(" "),t("q-tab",{attrs:{slot:"title",alert:"",label:"Bank Account Details",name:"tab-3",icon:"account_box"},slot:"title"}),this._v(" "),t("q-tab-pane",{attrs:{name:"tab-1"}},[t("app-email-phone")],1),this._v(" "),t("q-tab-pane",{attrs:{name:"tab-2"}},[t("app-pan")],1),this._v(" "),t("q-tab-pane",{attrs:{name:"tab-3"}},[t("app-bank")],1)],1)],1)},f=[];h._withStripped=!0;var _=Object(r.a)(m,h,f,!1,null,null,null);_.options.__file="src/components/Verify/Verify.vue";t.default=_.exports}});