(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{411:function(t,n,a){"use strict";a.d(n,"a",(function(){return e}));var e=new(a(0).default)},413:function(t,n,a){},445:function(t,n,a){"use strict";a(413)},509:function(t,n,a){"use strict";a.r(n);var e=a(411),i={name:"Home",data:function(){return{currentIndex:""}},methods:{editData:function(t,n){this.currentIndex!=t&&(console.info(this.pageData[t]),this.currentIndex=t,window.localStorage.setItem("currentOperateObj",t),e.a.$emit("currentIndex",this.currentIndex))}},mounted:function(){var t=window.localStorage.getItem("currentOperateObj");t&&(this.currentIndex=t)},beforeDestroy:function(){}},c=(a(445),a(60)),s=Object(c.a)(i,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("scroll-up"),t._v(" "),a("div",{staticClass:"swiperBgClass",class:{areaActive:"swiperBg"==t.currentIndex},on:{click:function(n){return t.editData("swiperBg",n)}}},[a("swiper-bg")],1),t._v(" "),a("div",{staticClass:"content_exhibit",staticStyle:{background:"url('/company_info_bg.png')","background-size":"100% 100%"}},[a("div",{staticClass:"main_padding",class:{areaActive:"company_info"==t.currentIndex},staticStyle:{"padding-top":"22rem !important"},on:{click:function(n){return t.editData("company_info",n)}}},[a("div",{staticClass:"area_content"},[a("company-ins")],1)])]),t._v(" "),a("div",{staticClass:"content_exhibit"},[a("div",{staticClass:"main_padding",class:{areaActive:"contentArr"==t.currentIndex},on:{click:function(n){return t.editData("contentArr",n)}}},[a("div",{staticClass:"area_content"},[a("exhibit-content")],1)])]),t._v(" "),a("div",{staticClass:"content_exhibit"},[a("div",{staticClass:"main_padding",class:{areaActive:"parternBrand"==t.currentIndex},staticStyle:{padding:"5.8rem 9rem 6.2rem"},on:{click:function(n){return t.editData("parternBrand",n)}}},[a("div",{staticClass:"area_content"},[a("partern-brand")],1)])]),t._v(" "),a("div",{staticClass:"content_exhibit",staticStyle:{background:"url('/banner_bg.png')","background-size":"100% 100%"}},[a("div",{staticClass:"main_padding",class:{areaActive:"ka"==t.currentIndex},staticStyle:{padding:"0"},on:{click:function(n){return t.editData("ka",n)}}},[a("div",{staticClass:"area_content"},[a("ka")],1)])]),t._v(" "),a("div",{staticClass:"content_exhibit",staticStyle:{background:"#f2f8fd"}},[a("div",{staticClass:"main_padding",class:{areaActive:"contactUs"==t.currentIndex},on:{click:function(n){return t.editData("contactUs",n)}}},[a("div",{staticClass:"area_content"},[a("contact-us")],1)])]),t._v(" "),a("div",{staticClass:"content_exhibit",staticStyle:{background:"url('/widget_bg.png')","background-size":"100% 100%"}},[a("div",{staticClass:"main_padding",class:{areaActive:"companyInfo"==t.currentIndex},on:{click:function(n){return t.editData("companyInfo",n)}}},[a("div",{staticClass:"area_content"},[a("company-info")],1)])]),t._v(" "),a("div",{staticClass:"bottomClass",class:{areaActive:"BottomCom"==t.currentIndex},on:{click:function(n){return t.editData("BottomCom",n)}}},[a("bottom-com")],1)],1)}),[],!1,null,"443ea4b6",null);n.default=s.exports}}]);