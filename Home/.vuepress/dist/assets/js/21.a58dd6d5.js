(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{424:function(t,e,n){},454:function(t,e,n){"use strict";n(424)},512:function(t,e,n){"use strict";n.r(e);var a={name:"Blog",data:function(){return{blogTeamArr:[],currentIndex:0,teamActive:"/team_active.png",title:""}},methods:{updateData:function(t){this.blogTeamArr=t.arr,this.title=t.title}},watch:{pageData:{handler:function(t){this.updateData(t.blogTeamArr)},deep:!0}},mounted:function(){this.updateData(this.pageData.blogTeamArr)}},r=(n(454),n(60)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"area_title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{staticClass:"flex_row blog"},t._l(t.blogTeamArr,(function(e,a){return n("div",{key:a,staticClass:"team",class:{active:t.currentIndex==a},on:{click:function(e){t.currentIndex=a}}},[n("img",{attrs:{src:e.contentImg,alt:""}}),t._v(" "),n("div",{staticClass:"team_content"},[n("strong",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("div",[n("span",{domProps:{innerHTML:t._s(e.content)}},[t._v(t._s(e.content))]),t._v(" "),n("a",{attrs:{href:e.link}},[t._v("Read More")])])])])})),0)])}),[],!1,null,"822a4d26",null);e.default=i.exports}}]);