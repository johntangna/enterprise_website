(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{418:function(t,n,e){},451:function(t,n,e){"use strict";e(418)},512:function(t,n,e){"use strict";e.r(n);var r={name:"ExhibitContent",data:function(){return{contentArr:[{contentImg:"",title:"",content:"",link:""}],title:"",currentIndex:0,currentTab:"content1",tabs:["content1","content2","content3","content4"]}},methods:{clickTab:function(t){this.currentIndex=t},updateData:function(t){this.contentArr=t.arr,this.title=t.title}},mounted:function(){this.updateData(this.pageData.contentArr)},watch:{pageData:{handler:function(t){this.updateData(t.contentArr)},deep:!0}}},c=(e(451),e(60)),i=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("span",{staticClass:"area_title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{staticClass:"desktop_flex whitebg",staticStyle:{"border-top-left-radius":"7px","border-top-right-radius":"7px"}},t._l(t.contentArr,(function(n,r){return e("div",{key:r,class:["titleClass flex_shrank",{active:t.currentIndex==r}],on:{click:function(n){return t.clickTab(r)}}},[e("img",{attrs:{src:t.currentIndex==r?n.bg_activeImg:n.bg_img,alt:""}}),t._v(" "),e("span",{domProps:{innerHTML:t._s(n.button_text)}})])})),0),t._v(" "),e("div",{staticClass:"content_com content_padding whitebg"},[e("img",{attrs:{src:t.contentArr[t.currentIndex].contentImg,alt:""}}),t._v(" "),e("div",{staticClass:"content_com_right"},[e("div",{domProps:{innerHTML:t._s(t.contentArr[t.currentIndex].title)}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.contentArr[t.currentIndex].content)}}),t._v(" "),e("a",{attrs:{href:t.contentArr[t.currentIndex].link}},[t._v("Read More >")])])])])}),[],!1,null,"3d1febea",null);n.default=i.exports}}]);