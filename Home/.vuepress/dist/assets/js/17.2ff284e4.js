(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{403:function(t,n,a){"use strict";a.d(n,"a",(function(){return e}));var e=new(a(0).default)},418:function(t,n,a){},474:function(t,n,a){"use strict";a(418)},559:function(t,n,a){"use strict";a.r(n);var e=a(403),c={name:"GroupBra",data:function(){return{currentIndex:""}},methods:{editData:function(t,n){this.currentIndex!=t&&(console.info(this.pageData[t]),this.currentIndex=t,window.localStorage.setItem("currentOperateObj",t),e.a.$emit("currentIndex",this.currentIndex))}},mounted:function(){var t=window.localStorage.getItem("currentOperateObj");t&&(this.currentIndex=t)},beforeDestroy:function(){}},i=(a(474),a(62)),r=Object(i.a)(c,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("scroll-up"),t._v(" "),a("div",{staticClass:"swiperBgClass",class:{areaActive:"swiperBgBranch"==t.currentIndex},on:{click:function(n){return t.editData("swiperBgBranch",n)}}},[a("swiper-bg-branch")],1),t._v(" "),a("div",{staticClass:"content_exhibit"},[a("div",{staticClass:"main_padding",class:{areaActive:"branchMap"==t.currentIndex},staticStyle:{padding:"0 !important"},on:{click:function(n){return t.editData("branchMap",n)}}},[a("div",{staticClass:"area_content"},[a("branch-map")],1)])]),t._v(" "),a("div",{staticClass:"content_exhibit"},[a("div",{staticClass:"main_padding",class:{areaActive:"companyShowArr"==t.currentIndex},staticStyle:{padding:"5.8rem 22rem 6.2rem"},on:{click:function(n){return t.editData("companyShowArr",n)}}},[a("div",{staticClass:"area_content"},[a("company-show")],1)])]),t._v(" "),a("div",{staticClass:"content_exhibit",staticStyle:{background:"#f2f8fd"}},[a("div",{staticClass:"main_padding",class:{areaActive:"contactUs"==t.currentIndex},on:{click:function(n){return t.editData("contactUs",n)}}},[a("div",{staticClass:"area_content"},[a("contact-us")],1)])]),t._v(" "),a("div",{staticClass:"content_exhibit",staticStyle:{background:"url('/widget_bg.png')","background-size":"100% 100%"}},[a("div",{staticClass:"main_padding",class:{areaActive:"companyInfo"==t.currentIndex},on:{click:function(n){return t.editData("companyInfo",n)}}},[a("div",{staticClass:"area_content"},[a("company-info")],1)])]),t._v(" "),a("div",{staticClass:"bottomClass",class:{areaActive:"BottomCom"==t.currentIndex},on:{click:function(n){return t.editData("BottomCom",n)}}},[a("bottom-com")],1)],1)}),[],!1,null,"05653dda",null);n.default=r.exports}}]);