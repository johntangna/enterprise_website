(window.webpackJsonp=window.webpackJsonp||[]).push([[10,21],{351:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},352:function(t,e,r){var n=r(3),i=r(32),a=r(18),s=r(351),u=n("".replace),o="["+s+"]",c=RegExp("^"+o+o+"*"),h=RegExp(o+o+"*$"),g=function(t){return function(e){var r=a(i(e));return 1&t&&(r=u(r,c,"")),2&t&&(r=u(r,h,"")),r}};t.exports={start:g(1),end:g(2),trim:g(3)}},353:function(t,e,r){"use strict";var n=r(9),i=r(0),a=r(3),s=r(114),u=r(16),o=r(11),c=r(192),h=r(33),g=r(85),l=r(193),p=r(4),f=r(58).f,m=r(34).f,b=r(13).f,d=r(354),N=r(352).trim,I=i.Number,v=I.prototype,y=i.TypeError,E=a("".slice),S=a("".charCodeAt),w=function(t){var e=l(t,"number");return"bigint"==typeof e?e:_(e)},_=function(t){var e,r,n,i,a,s,u,o,c=l(t,"number");if(g(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=N(c),43===(e=S(c,0))||45===e){if(88===(r=S(c,2))||120===r)return NaN}else if(48===e){switch(S(c,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(s=(a=E(c,2)).length,u=0;u<s;u++)if((o=S(a,u))<48||o>i)return NaN;return parseInt(a,n)}return+c};if(s("Number",!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var x,A=function(t){var e=arguments.length<1?0:I(w(t)),r=this;return h(v,r)&&p((function(){d(r)}))?c(Object(e),r,A):e},k=n?f(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;k.length>T;T++)o(I,x=k[T])&&!o(A,x)&&b(A,x,m(I,x));A.prototype=v,v.constructor=A,u(i,"Number",A)}},354:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},415:function(t,e,r){"use strict";r.r(e);var n={name:"BannerBg",props:{width:{type:String},height:{type:String}}},i=r(57),a=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{position:"absolute"}},[e("img",{attrs:{src:"/banner_bg.png",Width:this.width,Height:this.height,alt:""}})])}),[],!1,null,null,null);e.default=a.exports},509:function(t,e,r){"use strict";r.r(e);r(353);var n={name:"ImageCom",components:{BannerBg:r(415).default},props:{src:{type:String},width:{type:Number},height:{type:Number},headerImg:{type:String},bgWidth:{type:String},bgHeight:{type:String}},mounted:function(){var t=document.getElementsByClassName("home-link")[0],e=document.getElementsByClassName("navbar")[0];e.style.background='url("'.concat(this.headerImg,'")'),e.style.backgroundSize="100% 100%";var r=document.createElement("img");r.src=this.src,r.width=this.width,r.height=this.height,r.style.margin="35px 0 0 80px",t.appendChild(r)}},i=r(57),a=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("banner-bg",{attrs:{width:this.bgWidth,height:this.bgHeight}})}),[],!1,null,null,null);e.default=a.exports}}]);