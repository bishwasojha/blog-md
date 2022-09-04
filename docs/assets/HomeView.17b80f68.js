import{o as n,c as r,a,_ as N,u as P,b as K,d as b,n as p,e as w,t as u,h as V,f as I,w as k,g as Z,r as E,F as y,i as x,j as m,p as O,k as G,l as J,m as _,q as Q,s as S,v as W,x as X,y as ee,z as te,D}from"./index.e16b4aad.js";const ae={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},oe=a("path",{fill:"currentColor",d:"m18 21l-4-4h3V7h-3l4-4l4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2Z"},null,-1),ne=[oe];function re(e,c){return n(),r("svg",ae,ne)}var se={name:"mdi-sort",render:re};const le={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ie=a("path",{fill:"currentColor",d:"M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z"},null,-1),de=[ie];function ce(e,c){return n(),r("svg",le,de)}var ue={name:"mdi-filter",render:ce};const be={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},he=a("path",{fill:"currentColor",d:"M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"},null,-1),me=[he];function ve(e,c){return n(),r("svg",be,me)}var ge={name:"mdi-search",render:ve};const pe={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},fe=a("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),_e=[fe];function ke(e,c){return n(),r("svg",pe,_e)}var we={name:"mdi-close",render:ke};const ye={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},xe=a("path",{fill:"currentColor",d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7c0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91c1.61 0 2.92-1.3 2.92-2.91A2.92 2.92 0 0 0 18 16.08Z"},null,-1),$e=[xe];function Le(e,c){return n(),r("svg",ye,$e)}var Be={name:"mdi-share-variant",render:Le};const Ce=e=>(O("data-v-b0b55b08"),e=e(),G(),e),Se={class:"blog-peek--banner"},Ae=["src"],Me=Ce(()=>a("div",{class:"blog-peek--divider"},null,-1)),Re={class:"blog-peek--author"},Ve=["src"],De={class:"author-info"},Ne=["href","title"],Ie={key:1,class:"author-name"},Te={class:"created-at",title:"Created Timestamp"},Ye={class:"blog-peek--content"},je={class:"tags"},ze={key:0,class:"blog-peek--footer"},He={"aria-label":"Share",title:"Share Post",class:"icon-button"},Ue={class:"read-time"},qe={computed:{minutesToRead(){return Math.round(this.contentLength/(100*6))}}},Fe=Object.assign(qe,{__name:"BlogPeek",props:{title:{type:String,required:!0},tags:{type:Array,required:!0},authorName:{type:String,required:!0},authorAvatar:{type:String,required:!0},authorLink:{type:String,default:null},createdAt:{type:[Date,String],required:!0},contentLength:{type:Number,default:0},detailView:{type:Boolean,default:!1},banner:{type:String,default:null}},setup(e){const c=new URL("/assets/fallback_banner_dark.69cbc58b.png",self.location).href,f=new URL("/assets/fallback_banner.05e83917.png",self.location).href,{dark:l}=P(),d=K(()=>l.value?c:f);return(h,v)=>{const g=Be;return n(),r("div",{class:p(["blog-peek",{"small-shadow":!e.detailView&&!b(l),"small-shadow-dark":!e.detailView&&b(l)}])},[a("div",Se,[e.banner||b(d)?(n(),r("img",{key:0,src:e.banner||b(d),alt:"Blog Banner",class:p(["sharp-border",{"fallback-banner":!e.banner,"regular-banner":e.banner}])},null,10,Ae)):w("",!0)]),Me,a("div",Re,[a("img",{src:e.authorAvatar,class:"author-avatar circle",alt:"Author Avatar"},null,8,Ve),a("div",De,[e.authorLink?(n(),r("a",{key:0,href:e.authorLink,target:"_blank",title:e.authorName,class:"author-link"},u(e.authorName),9,Ne)):(n(),r("div",Ie,u(e.authorName),1)),a("div",Te,u(b(V)(e.createdAt).format("MMM DD, YYYY"))+" ("+u(b(V)(e.createdAt).fromNow())+") ",1)])]),a("div",Ye,[(n(),I(E(e.detailView?"h1":"h3"),{class:"blog-title"},{default:k(()=>[Z(u(e.title),1)]),_:1})),a("div",je,[(n(!0),r(y,null,x(e.tags,($,L)=>(n(),r("span",{key:L,class:"tag-item"}," #"+u($),1))),128))])]),e.detailView?w("",!0):(n(),r("div",ze,[a("button",He,[m(g,{class:"one-rem"})]),a("div",Ue,u(h.minutesToRead)+" minutes of read ",1)]))],2)}}});var Pe=N(Fe,[["__scopeId","data-v-b0b55b08"]]);const Ke={class:"home-view"},Ze=["src"],Ee={class:"home-view--search"},Oe=["onKeyup"],Ge=["onClick"],Je=["onClick"],Qe={class:"home-view--list"},We={key:0,class:"home-view--no-results"},Xe={class:"message"},et={__name:"HomeView",setup(e){const{currentRoute:c,push:f}=J(),l=_([]),d=_(""),h=_(!1),v=_(null),g=_(null),$=[{key:"alpha",label:"Alphabetically"},{key:"date",label:"Date Created"}],L=[{key:"author",label:"Author"},{key:"tag",label:"Tags"}];Q(async()=>{T()});const T=()=>{var t;h.value=!0,v.value=c.value.params.filterBy,g.value=(t=c.value.params)==null?void 0:t.sortBy,l.value=S(),B(g.value),h.value=!1},Y=new URL("/assets/loading.f90db703.png",self.location).href,j=t=>{const i=t.seriesTitle;i?window.location.href=`/#/blog/${encodeURIComponent(i)}/${encodeURIComponent(t.title)}`:window.location.href=`/#/blog/${encodeURIComponent(t.title)}`},A=()=>{h.value=!0;const t=[],i=d.value.toLowerCase();v.value?l.value.forEach(s=>{v.value==="tag"?s.tags&&s.tags.join(" ").toLowerCase().includes(i)&&t.push(s):s.authorName.toLowerCase().includes(i)&&t.push(s)}):g.value?l.value.forEach(s=>{s.title.toLowerCase().includes(i)&&t.push(s)}):l.value.forEach(s=>{s.title.toLowerCase().includes(i)&&t.push(s)}),l.value=t,h.value=!1},M=()=>{d.value=""};W(d,()=>{d.value||(l.value=S())});const R=()=>{f({name:"Home"}).then(()=>{l.value=S(),B(g.value),d.value=""})},z=t=>{c.value.params.sortBy===t?R():f({name:"Sort",params:{sortBy:t}}).then(()=>{v.value=t,B(t)})},H=t=>{c.value.params.filterBy===t?R():f({name:"Filter",params:{filterBy:t}}).then(()=>{v.value=t})},B=t=>{t==="date"?l.value.sort((i,s)=>s.createdAt-i.createdAt):l.value.sort((i,s)=>i.title.localeCompare(s.title))};return(t,i)=>{const s=we,U=ge,q=ue,F=se;return n(),r("div",Ke,[h.value?(n(),r("img",{key:0,src:b(Y),height:"30",width:"30",alt:"loading",class:"spinner"},null,8,Ze)):w("",!0),a("div",Ee,[X(a("input",{id:"search","onUpdate:modelValue":i[0]||(i[0]=o=>d.value=o),placeholder:"Search...",onKeyup:te(A,["enter"])},null,40,Oe),[[ee,d.value]]),d.value.length>0?(n(),r("button",{key:0,class:"clear-button",onClick:M},[m(s)])):w("",!0),a("button",{class:"icon-button",title:"Search",onClick:A},[m(U,{class:"one-rem"})]),m(b(D),null,{trigger:k(()=>[a("button",{class:p(["icon-button",{filtering:t.$route.name==="Filter"}]),title:"Filter"},[m(q,{class:"one-rem"})],2)]),drop:k(()=>[(n(),r(y,null,x(L,o=>a("div",{key:o.key,class:p(["menu-drop-item",{"item-active":t.$route.params.filterBy===o.key}]),onClick:C=>H(o.key)},u(o.label),11,Ge)),64))]),_:1}),m(b(D),{class:"menu"},{trigger:k(()=>[a("button",{class:p(["icon-button",{sorting:t.$route.name==="Sort"}]),title:"Sort"},[m(F,{class:"one-rem"})],2)]),drop:k(()=>[(n(),r(y,null,x($,o=>a("div",{key:o.key,class:p(["menu-drop-item",{"item-active":t.$route.params.sortBy===o.key}]),onClick:C=>z(o.key)},u(o.label),11,Je)),64))]),_:1})]),a("div",Qe,[(n(!0),r(y,null,x(l.value,(o,C)=>(n(),I(b(Pe),{key:C,title:o.title,"created-at":o.createdAt,"author-name":o.authorName,"author-link":o.authorLink,"author-avatar":o.authorAvatar,"content-length":o.contentLength,tags:o.tags,banner:o.banner,onClick:tt=>j(o)},null,8,["title","created-at","author-name","author-link","author-avatar","content-length","tags","banner","onClick"]))),128)),l.value.length===0?(n(),r("div",We,[a("div",Xe,'Sorry, no results found for "'+u(d.value)+'"',1),a("button",{onClick:M},"Reset Search")])):w("",!0)])])}}};var ot=N(et,[["__scopeId","data-v-77b7fdeb"]]);export{ot as default};