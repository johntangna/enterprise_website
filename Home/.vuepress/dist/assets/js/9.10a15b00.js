(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{399:function(t,e,r){"use strict";var n=r(9),a=r(1),i=r(3),s=r(123),o=r(17),u=r(11),c=r(214),l=r(35),f=r(90),p=r(215),d=r(4),v=r(61).f,I=r(36).f,h=r(13).f,_=r(402),g=r(401).trim,m=a.Number,N=m.prototype,b=a.TypeError,x=i("".slice),A=i("".charCodeAt),E=function(t){var e=p(t,"number");return"bigint"==typeof e?e:w(e)},w=function(t){var e,r,n,a,i,s,o,u,c=p(t,"number");if(f(c))throw b("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=g(c),43===(e=A(c,0))||45===e){if(88===(r=A(c,2))||120===r)return NaN}else if(48===e){switch(A(c,1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+c}for(s=(i=x(c,2)).length,o=0;o<s;o++)if((u=A(i,o))<48||u>a)return NaN;return parseInt(i,n)}return+c};if(s("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var T,y=function(t){var e=arguments.length<1?0:m(E(t)),r=this;return l(N,r)&&d((function(){_(r)}))?c(Object(e),r,y):e},q=n?v(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;q.length>C;C++)u(m,T=q[C])&&!u(y,T)&&h(y,T,I(m,T));y.prototype=N,N.constructor=y,o(a,"Number",y)}},400:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},401:function(t,e,r){var n=r(3),a=r(34),i=r(19),s=r(400),o=n("".replace),u="["+s+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(t){return function(e){var r=i(a(e));return 1&t&&(r=o(r,c,"")),2&t&&(r=o(r,l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},402:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},403:function(t,e,r){var n=r(2),a=r(1),i=r(39),s=r(5),o=r(62),u=r(66),c=r(217),l=/MSIE .\./.test(o),f=a.Function,p=function(t){return function(e,r){var n=c(arguments.length,1)>2,a=s(e)?e:f(e),o=n?u(arguments,2):void 0;return t(n?function(){i(a,this,o)}:a,r)}};n({global:!0,bind:!0,forced:l},{setTimeout:p(a.setTimeout),setInterval:p(a.setInterval)})},421:function(t,e,r){},454:function(t,e,r){"use strict";r(421)},515:function(t,e,r){"use strict";r.r(e);r(399),r(403);var n={name:"Appraise",props:{width:{type:Number},height:{type:Number}},data:function(){return{appraise:"/appraise.png",icon:"/appraise_icon.png",qaArr:[{content:"",title:""}],currentIndex:0,setInterval:null,title:""}},methods:{updateData:function(t){this.qaArr=t.arr,this.title=t.title}},watch:{pageData:{handler:function(t){this.updateData(t.qaArr)},deep:!0}},mounted:function(){var t=this;this.updateData(this.pageData.qaArr),this.setInterval=setInterval((function(){t.currentIndex==t.qaArr.length-1?t.currentIndex=0:t.currentIndex++}),3e3)},beforeDestroy:function(){clearInterval(this.setInterval),this.setInterval=null}},a=(r(454),r(60)),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"area_title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),r("div",{staticClass:"flex_row flex_around appraise_block"},[r("img",{attrs:{src:t.appraise,alt:""}}),t._v(" "),r("div",{staticClass:"appraise"},[r("div",{staticClass:"appraise_time_line"},t._l(t.qaArr,(function(e,n){return r("div",{key:n,staticClass:"qa_line",class:{active:t.currentIndex==n},on:{click:function(e){t.currentIndex=n}}})})),0)]),t._v(" "),r("div",{staticClass:"flex_row align_center"},[r("img",{attrs:{src:t.icon,width:t.width,height:t.height,alt:""}}),t._v(" "),r("div",{staticClass:"content"},[r("div",{domProps:{innerHTML:t._s(t.qaArr[t.currentIndex].content)}}),t._v(" "),r("strong",{domProps:{innerHTML:t._s(t.qaArr[t.currentIndex].title)}})])])])])}),[],!1,null,"13782308",null);e.default=i.exports}}]);