(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{399:function(t,e,n){"use strict";var r=n(9),i=n(1),a=n(3),o=n(123),s=n(17),u=n(11),c=n(214),p=n(35),f=n(90),l=n(215),_=n(4),d=n(61).f,g=n(36).f,h=n(13).f,v=n(402),m=n(401).trim,I=i.Number,N=I.prototype,b=i.TypeError,E=a("".slice),x=a("".charCodeAt),w=function(t){var e=l(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,n,r,i,a,o,s,u,c=l(t,"number");if(f(c))throw b("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=m(c),43===(e=x(c,0))||45===e){if(88===(n=x(c,2))||120===n)return NaN}else if(48===e){switch(x(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(a=E(c,2)).length,s=0;s<o;s++)if((u=x(a,s))<48||u>i)return NaN;return parseInt(a,r)}return+c};if(o("Number",!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var T,y=function(t){var e=arguments.length<1?0:I(w(t)),n=this;return p(N,n)&&_((function(){v(n)}))?c(Object(e),n,y):e},M=r?d(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;M.length>P;P++)u(I,T=M[P])&&!u(y,T)&&h(y,T,g(I,T));y.prototype=N,N.constructor=y,s(i,"Number",y)}},400:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},401:function(t,e,n){var r=n(3),i=n(34),a=n(19),o=n(400),s=r("".replace),u="["+o+"]",c=RegExp("^"+u+u+"*"),p=RegExp(u+u+"*$"),f=function(t){return function(e){var n=a(i(e));return 1&t&&(n=s(n,c,"")),2&t&&(n=s(n,p,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},402:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},420:function(t,e,n){},453:function(t,e,n){"use strict";n(420)},514:function(t,e,n){"use strict";n.r(e);n(399);var r={name:"PricingPlan",props:{width:{type:Number},height:{type:Number}},data:function(){return{planArr:[],currentIndex:1,title:""}},watch:{pageData:{handler:function(t){this.updateData(t.planArr)},deep:!0}},methods:{updateData:function(t){this.planArr=t.arr,this.title=t.title}},mounted:function(){this.updateData(this.pageData.planArr)}},i=(n(453),n(60)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"area_title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{staticClass:"flex_row pricing_plan_content"},t._l(t.planArr,(function(e,r){return n("div",{key:r,staticClass:"flex_row flex_vertical align_center pricing_plan",class:{active:r==t.currentIndex},on:{click:function(e){t.currentIndex=r}}},[n("img",{attrs:{src:r==t.currentIndex?e.bg_activeImg:e.bg_img,width:t.width,height:t.height,alt:""}}),t._v(" "),n("strong",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.content)}}),t._v(" "),n("button",{domProps:{innerHTML:t._s(e.button_text)}})])})),0)])}),[],!1,null,"2746adb8",null);e.default=a.exports}}]);