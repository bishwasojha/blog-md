import{o,c as n,a as t,g as A,u as K,b as U,d as u,n as v,e as w,t as m,h as N,F as x,r as $,f as b,_ as G,i as J,j as f,k as Q,l as L,S as D,w as W,m as X,v as ee,p as te,q as y,D as T,s as S,x as ae,y as oe}from"./index.e8374168.js";const ne={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},re=t("path",{fill:"currentColor",d:"M3 5h18v4H3V5m0 5h18v4H3v-4m0 5h18v4H3v-4Z"},null,-1),ie=[re];function se(a,c){return o(),n("svg",ne,ie)}var le={name:"mdi-view-sequential",render:se};const ce={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},de=t("path",{fill:"currentColor",d:"M3 19h6v-7H3v7m7 0h12v-7H10v7M3 5v6h19V5H3Z"},null,-1),ue=[de];function he(a,c){return o(),n("svg",ce,ue)}var me={name:"mdi-view-compact",render:he};const ve={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ge=t("path",{fill:"currentColor",d:"m18 21l-4-4h3V7h-3l4-4l4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2Z"},null,-1),be=[ge];function pe(a,c){return o(),n("svg",ve,be)}var _e={name:"mdi-sort",render:pe};const fe={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ke=t("path",{fill:"currentColor",d:"M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z"},null,-1),we=[ke];function ye(a,c){return o(),n("svg",fe,we)}var xe={name:"mdi-filter",render:ye};const $e={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Me=t("path",{fill:"currentColor",d:"M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"},null,-1),Be=[Me];function Ce(a,c){return o(),n("svg",$e,Be)}var Le={name:"mdi-search",render:Ce};const Se={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ae=t("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),Ve=[Ae];function Re(a,c){return o(),n("svg",Se,Ve)}var He={name:"mdi-close",render:Re};const Ne={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},De=t("path",{fill:"currentColor",d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7c0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91c1.61 0 2.92-1.3 2.92-2.91A2.92 2.92 0 0 0 18 16.08Z"},null,-1),Te=[De];function Ye(a,c){return o(),n("svg",Ne,Te)}var je={name:"mdi-share-variant",render:Ye};const Ie=["src"],qe=t("div",{class:"blog-peek--divider"},null,-1),ze={class:"blog-peek--author"},Fe=["src"],Pe={class:"author-info"},Ze=["href","title"],Oe={key:1,class:"author-name"},Ee={class:"created-at",title:"Created Timestamp"},Ke={class:"blog-peek--content"},Ue={class:"blog-title"},Ge={class:"tags"},Je={key:0,class:"blog-peek--footer"},Qe={"aria-label":"Share",title:"Share Post",class:"icon-button"},We={class:"read-time"},Xe={computed:{minutesToRead(){return Math.round(this.contentLength/(100*6))}}},et=Object.assign(Xe,{__name:"BlogPeek",props:{title:{type:String,required:!0},tags:{type:Array,required:!0},authorName:{type:String,required:!0},authorAvatar:{type:String,required:!0},authorLink:{type:String,default:null},createdAt:{type:[Date,String],required:!0},contentLength:{type:Number,default:0},detailView:{type:Boolean,default:!1},banner:{type:String,default:null}},setup(a){const c=A("fallback_banner_dark"),k=A("fallback_banner"),{dark:l}=K(),d=U(()=>l.value?c:k);return(g,p)=>{const _=je;return o(),n("div",{class:v(["blog-peek",{"small-shadow":!a.detailView&&!u(l),"small-shadow-dark":!a.detailView&&u(l)}])},[t("div",{class:v(["blog-peek--banner",{"blog-peek--banner--fallback":!a.banner}])},[a.banner||u(d)?(o(),n("img",{key:0,src:a.banner||u(d),alt:"Blog Banner",class:v({"fallback-banner":!a.banner,"regular-banner":a.banner})},null,10,Ie)):w("",!0)],2),qe,t("div",ze,[t("img",{src:a.authorAvatar,class:"author-avatar circle",alt:"Author Avatar"},null,8,Fe),t("div",Pe,[a.authorLink?(o(),n("a",{key:0,href:a.authorLink,target:"_blank",title:a.authorName,class:"author-link"},m(a.authorName),9,Ze)):(o(),n("div",Oe,m(a.authorName),1)),t("div",Ee,m(u(N)(a.createdAt).format("MMM DD, YYYY"))+" ("+m(u(N)(a.createdAt).fromNow())+") ",1)])]),t("div",Ke,[t("div",Ue,m(a.title),1),t("div",Ge,[(o(!0),n(x,null,$(a.tags,(h,M)=>(o(),n("span",{key:M,class:"tag-item"}," #\xA0"+m(h),1))),128))])]),a.detailView?w("",!0):(o(),n("div",Je,[t("button",Qe,[b(_,{class:"one-rem"})]),t("div",We,m(g.minutesToRead)+" minutes of read ",1)]))],2)}}});const tt={class:"home-view"},at=["src"],ot={class:"home-view--search"},nt=["onKeyup"],rt={class:"home-view--search--actions"},it=["onClick"],st=["onClick"],lt=["title"],ct={key:0,class:"home-view--no-results"},dt={class:"message"},ut={__name:"HomeView",setup(a){const{currentRoute:c,push:k}=J(),l=f([]),d=f(""),g=f(!1),p=f(null),_=f(null),h=f(null);Q(async()=>{M()});const M=()=>{var e;g.value=!0,p.value=c.value.params.filterBy,_.value=(e=c.value.params)==null?void 0:e.sortBy,l.value=L(),B(_.value),g.value=!1,h.value=D.getHomeViewMode()},Y=A("loading");W(d,()=>{d.value||(l.value=L())});const j=()=>{h.value=h.value==="list"?"grid":"list",D.saveHomeViewMode(h.value)},I=e=>{const s=e.seriesTitle;s?window.location.href=`/#/blog/${encodeURIComponent(s)}/${encodeURIComponent(e.title)}`:window.location.href=`/#/blog/${encodeURIComponent(e.title)}`},V=()=>{g.value=!0;const e=[],s=d.value.toLowerCase();p.value?l.value.forEach(i=>{p.value==="tag"?i.tags&&i.tags.join(" ").toLowerCase().includes(s)&&e.push(i):i.authorName.toLowerCase().includes(s)&&e.push(i)}):_.value?l.value.forEach(i=>{i.title.toLowerCase().includes(s)&&e.push(i)}):l.value.forEach(i=>{i.title.toLowerCase().includes(s)&&e.push(i)}),l.value=e,g.value=!1},R=()=>{d.value=""},H=()=>{k({name:"Home"}).then(()=>{l.value=L(),B(_.value),d.value=""})},q=e=>{c.value.params.sortBy===e?H():k({name:"Sort",params:{sortBy:e}}).then(()=>{p.value=e,B(e)})},z=e=>{c.value.params.filterBy===e?H():k({name:"Filter",params:{filterBy:e}}).then(()=>{p.value=e})},B=e=>{e==="date"?l.value.sort((s,i)=>i.createdAt-s.createdAt):l.value.sort((s,i)=>s.title.localeCompare(i.title))};return(e,s)=>{const i=He,F=Le,P=xe,Z=_e,O=me,E=le;return o(),n("div",tt,[g.value?(o(),n("img",{key:0,src:u(Y),height:"30",width:"30",alt:"Loading Spinner",class:"spinner"},null,8,at)):w("",!0),t("div",ot,[X(t("input",{id:"search",class:"home-view--search--input","onUpdate:modelValue":s[0]||(s[0]=r=>d.value=r),placeholder:"Search...",onKeyup:te(V,["enter"])},null,40,nt),[[ee,d.value]]),t("div",rt,[d.value.length>0?(o(),n("button",{key:0,class:"clear-button",onClick:R},[b(i)])):w("",!0),t("button",{class:"icon-button",title:"Search",onClick:V},[b(F,{class:"one-rem"})]),b(u(T),null,{trigger:y(()=>[t("button",{class:v(["icon-button",{filtering:e.$route.name==="Filter"}]),title:"Filter"},[b(P,{class:"one-rem"})],2)]),drop:y(()=>[(o(!0),n(x,null,$(u(ae),r=>(o(),n("div",{key:r.key,class:v(["menu-drop-item",{"item-active":e.$route.params.filterBy===r.key}]),onClick:C=>z(r.key)},m(r.label),11,it))),128))]),_:1}),b(u(T),{class:"menu"},{trigger:y(()=>[t("button",{class:v(["icon-button",{sorting:e.$route.name==="Sort"}]),title:"Sort"},[b(Z,{class:"one-rem"})],2)]),drop:y(()=>[(o(!0),n(x,null,$(u(oe),r=>(o(),n("div",{key:r.key,class:v(["menu-drop-item",{"item-active":e.$route.params.sortBy===r.key}]),onClick:C=>q(r.key)},m(r.label),11,st))),128))]),_:1}),t("button",{class:v(["icon-button",{sorting:e.$route.name==="Sort"}]),title:h.value==="list"?"Grid View":"List View",onClick:s[1]||(s[1]=r=>j())},[h.value==="list"?(o(),S(O,{key:0,class:"one-rem"})):(o(),S(E,{key:1,class:"one-rem"}))],10,lt)])]),t("div",{class:v({"home-view--list":h.value==="list","home-view--grid":h.value!=="list"})},[(o(!0),n(x,null,$(l.value,(r,C)=>(o(),S(u(et),{key:C,title:r.title,"created-at":r.createdAt,"author-name":r.authorName,"author-link":r.authorLink,"author-avatar":r.authorAvatar,"content-length":r.contentLength,tags:r.tags,banner:r.banner,onClick:ht=>I(r)},null,8,["title","created-at","author-name","author-link","author-avatar","content-length","tags","banner","onClick"]))),128)),l.value.length===0?(o(),n("div",ct,[t("div",dt,'Sorry, no results found for "'+m(d.value)+'"',1),t("button",{onClick:R},"Reset Search")])):w("",!0)],2)])}}};var vt=G(ut,[["__scopeId","data-v-28eaacb6"]]);export{vt as default};
