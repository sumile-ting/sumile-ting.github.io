import{_ as g}from"./index-2bf2c444.js";import{r as x,_ as y,h as I,l as S,d as w,o as _,a as k,w as D,b as l,q as f,y as m,c as v,F as B,g as M,t as p,p as b,k as z}from"./index-fd9b97e1.js";const H=(n,u)=>{const e=x({list:[],total:1e3,height:400,rowHeight:50,startIndex:0,endIndex:0,timer:!1,bufferSize:5});return{viewData:e,renderData:()=>{e.list=[];const{rowHeight:s,height:i,startIndex:o,total:a,bufferSize:c}=e,t=Math.ceil(i/s);e.endIndex=Math.min(o+t+c,a);for(let r=o;r<e.endIndex;r++)e.list.push({content:u[r],style:{top:`${r*s}px`}})},handleScroll:s=>{n.value&&n.value.addEventListener("scroll",i=>{if(e.timer)return;const{rowHeight:o,startIndex:a,bufferSize:c}=e,{scrollTop:t}=i.target,r=Math.floor(t/o);e.timer=!0,setTimeout(()=>{e.timer=!1,r!==a&&(e.startIndex=Math.max(r-c,0),s())})})}}};const F=n=>(b("data-v-e22f7ac3"),n=n(),z(),n),L=F(()=>l("div",{slot:"top"},"虚拟列表",-1)),C={__name:"list",setup(n){const u=Array.from({length:1e3}).map((o,a)=>({id:a,name:"测试"+a,age:a%2?"女":"男",address:"的打发十分噶"})),e=I(null),h=S(()=>({height:`${d.total*d.rowHeight}px`,position:"relative"})),{viewData:d,renderData:s,handleScroll:i}=H(e,u);return w(()=>{s(),i(s)}),(o,a)=>{const c=g;return _(),k(c,null,{default:D(()=>[L,l("div",{class:"virtual-list-wrapper",ref_key:"listWrap",ref:e},[l("div",{class:"content",ref:"content",style:f(m(h))},[(_(!0),v(B,null,M(m(d).list,t=>(_(),v("div",{key:t.index,class:"row",style:f(t.style)},[l("div",null,p(t.content.name),1),l("div",null,p(t.content.age),1),l("div",null,p(t.content.address),1)],4))),128))],4)],512)]),_:1})}}},V=y(C,[["__scopeId","data-v-e22f7ac3"],["__file","F:/online/project-vue3/src/views/health-management/overhaul-management/overhaul-plan/list.vue"]]);export{V as default};
