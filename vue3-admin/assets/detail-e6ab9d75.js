import{_ as w}from"./index-1dbf1c60.js";import{_ as X,r as B,d as R,e as s,o as f,a as k,w as t,f as r,c as F,g as C,F as H,b as i,t as T}from"./index-fd9b97e1.js";const y=i("div",null,"基本信息2XXX",-1),D=i("div",null,"基本信息3XXX",-1),E={__name:"detail",setup(N){const p=[{name:"info1",label:"基本信息1"},{name:"info2",label:"基本信息2"},{name:"info3",label:"基本信息3"}],a=[{label:"参数1的名字",name:"params1",value:"参数1的值参数1的值参数1的值参数1的值1的值参数1的值1的值参数1的值参数1的值"},{label:"参数2",name:"params2",value:"请输入参数2请输入参数2的值请输入参数2的值请输入参数2的值请输入参数2的的值请输入参数2的值请输入参数2的值请输入参数2的值"},{label:"参数3",name:"params3",value:"参数3的值"},{label:"参数4",name:"params4",value:"参数4的值"},{label:"参数5",name:"params5",value:"参数5的值"},{label:"参数6的名字",name:"params6",value:"请输入参数6的参数6的参数6的参数6的参数6的的值请输入参数1的值请输入参数1的值请输入参数1的值请输入参数1的值请输入参数1的值请输入参数1的值"}],c=B({});for(let e=0;e<a.length;e++)c[a[e].name]=!1;const m={},u=function(e,n){m[n+"Ref"]=e};function d(){for(let e=0;e<a.length;e++){const n=m[a[e].name+"Ref"],o=document.createRange();o.setStart(n,0),o.setEnd(n,1),o.getBoundingClientRect().height>n.clientHeight&&(c[a[e].name]=!0)}}return R(()=>{d()}),(e,n)=>{const o=s("el-tooltip"),_=s("el-form-item"),b=s("el-col"),g=s("el-row"),v=s("el-form"),h=w;return f(),k(h,{title:"设备详情",subTitles:p,showFooter:!1},{info1:t(()=>[r(v,{inline:!0,"label-width":"100px"},{default:t(()=>[r(g,null,{default:t(()=>[(f(),F(H,null,C(a,l=>r(b,{md:12,xs:24,xl:8,lg:8,sm:12},{default:t(()=>[r(_,{label:l.label+":",prop:l.name,class:"no-wrap"},{default:t(()=>[r(o,{class:"box-item",effect:"dark",content:l.value,placement:"bottom",disabled:!c[l.name]},{default:t(()=>[i("span",{class:"text-line-2",ref_for:!0,ref:x=>u(x,l.name)},T(l.value),513)]),_:2},1032,["content","disabled"])]),_:2},1032,["label","prop"])]),_:2},1024)),64))]),_:1})]),_:1})]),info2:t(()=>[y]),info3:t(()=>[D]),_:1})}}},j=X(E,[["__file","F:/online/project-vue3/src/views/device-management/device-ledger/detail.vue"]]);export{j as default};
