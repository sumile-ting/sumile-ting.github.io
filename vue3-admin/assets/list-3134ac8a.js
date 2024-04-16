import{_ as Y}from"./index-2bf2c444.js";import{_ as q}from"./index-37d1bd15.js";import{_ as z}from"./index-fb79dfd6.js";import{_ as E}from"./index-a4740d68.js";import{_ as M}from"./index-cbc1a307.js";import{_ as N,u as O,r as Q,h as m,i as j,e as c,o as H,a as K,w as t,f as o,j as n,t as I,b as S,p as R,k as G}from"./index-fd9b97e1.js";const J=u=>(R("data-v-457060a0"),u=u(),G(),u),W=J(()=>S("div",{class:"text-14px font-500"},"抽屉标题",-1)),X={style:{flex:"auto"}},Z={__name:"list",setup(u){const y=O(),f=Q({columns:[{label:"设备名称",prop:"name",type:"input"},{label:"设备编号",prop:"number",type:"input"},{label:"设备种类",prop:"category",type:"select",dictData:[{label:"动设备",value:1},{label:"静设备",value:2},{label:"电气设备",value:3}]},{label:"ABC分类",prop:"abc",type:"select",props:{label:"dictValue",value:"dictKey"},dictUrl:"/api/sumile-system/dict-biz/dictionary?code=abc_classify"},{label:"安装日期",prop:"date",type:"datepicker",props:{valueFormat:"YYYY-MM-DD"}},{label:"管理部门",prop:"manageDeptId",type:"tree",dictUrl:"/api/sumile-system/dept/tree?tenantId=000000",props:{nodeKey:"id",props:{label:"title"}}},{label:"安装位置",prop:"installPosition",slot:!0}]}),r=m({}),i=m(),b=[{type:"selection"},{label:"公司",prop:"company",width:150},{label:"内容",prop:"content",showOverflowTooltip:!0},{label:"日期",prop:"date",width:150},{label:"地址",prop:"address",width:200,showOverflowTooltip:!0},{label:"状态",prop:"status",width:"120",slot:!0},{label:"进度",prop:"process",width:"150",slot:!0},{label:"操作",prop:"operation",width:"160",slot:!0}],{proxy:g}=j();function v(a){const l={...a,...r.value};return console.log("查询参数:",l),g.$get("/api/sumile-companies/page",l)}const h=(a,l)=>{l==="query"&&(i.value.page.currentPage=1,i.value.page.pageSize=20),i.value.getTableData()},d=function(a){a.length&&g.$sumileMsgBox({title:"提示",type:"warning",subTitle:"确认删除？",message:"操作后将无法恢复，请谨慎操作！",showCancelButton:!0})},C=(a,l)=>{console.log("click",a),a==="show"?y.push("/device-management/device-ledger/detail"):a==="delete"&&d([l])},w=function(){y.push("/device-management/device-ledger/add")},k=function(a){return[{label:"查看",icon:"Reading",type:"primary",operator:"show"},{label:"编辑",icon:"EditPen",type:"primary",operator:"edit",disabled:a===2},{label:"删除",icon:"Delete",type:"danger",operator:"delete"},{label:"打印",icon:"Printer",type:"primary",operator:"print"},{label:"导出",icon:"Download",type:"primary",operator:"export",show:a!==2}]};function D(a){return["未开始","进行中","出错"][a]}function P(a){return["#62A6ED","#47D56D","#E35A7C"][a]}const _=m(!1);function V(){_.value=!0}return(a,l)=>{const x=c("el-input"),T=M,s=c("el-button"),U=E,$=c("el-progress"),A=z,B=q,L=c("el-drawer"),F=Y;return H(),K(F,null,{search:t(()=>[o(T,{option:f,model:r.value,"onUpdate:model":l[1]||(l[1]=e=>r.value=e),onQueryChange:h},{installPosition:t(e=>[o(x,{placeholder:e.placeholder,modelValue:r.value.installPosition,"onUpdate:modelValue":l[0]||(l[0]=p=>r.value.installPosition=p)},null,8,["placeholder","modelValue"])]),_:1},8,["option","model"])]),default:t(()=>[o(B,{columns:b,requestApi:v,ref_key:"myTable",ref:i},{tableHeader:t(e=>[o(s,{type:"primary",icon:"Plus",onClick:w},{default:t(()=>[n("新增")]),_:1}),o(s,{type:"primary",icon:"Upload",plain:""},{default:t(()=>[n("导入")]),_:1}),o(s,{type:"danger",icon:"Delete",plain:"",onClick:p=>d(e.selectedList),disabled:!e.selectedList.length},{default:t(()=>[n("删除")]),_:2},1032,["onClick","disabled"]),o(s,{plain:"",onClick:V},{default:t(()=>[n("打开抽屉")]),_:1})]),status:t(({row:e})=>[o(U,{type:"primary",color:P(e.status)},{default:t(()=>[n(I(D(e.status)),1)]),_:2},1032,["color"])]),process:t(({row:e})=>[o($,{percentage:e.process},null,8,["percentage"])]),operation:t(({row:e})=>[o(A,{operators:k(e.status),onClick:p=>C(p,e)},null,8,["operators","onClick"])]),_:1},512),o(L,{modelValue:_.value,"onUpdate:modelValue":l[4]||(l[4]=e=>_.value=e),direction:"rtl",size:"840","modal-class":"custom-drawer"},{header:t(()=>[W]),default:t(()=>[o(T,{option:f,model:r.value,"onUpdate:model":l[3]||(l[3]=e=>r.value=e),onQueryChange:h},{installPosition:t(e=>[o(x,{placeholder:e.placeholder,modelValue:r.value.installPosition,"onUpdate:modelValue":l[2]||(l[2]=p=>r.value.installPosition=p)},null,8,["placeholder","modelValue"])]),_:1},8,["option","model"]),o(B,{columns:b,requestApi:v,ref_key:"myTable",ref:i},{tableHeader:t(e=>[o(s,{type:"primary",icon:"Plus",onClick:w},{default:t(()=>[n("新增")]),_:1}),o(s,{type:"primary",icon:"Upload",plain:""},{default:t(()=>[n("导入")]),_:1}),o(s,{type:"danger",icon:"Delete",plain:"",onClick:p=>d(e.selectedList),disabled:!e.selectedList.length},{default:t(()=>[n("删除")]),_:2},1032,["onClick","disabled"]),o(s,{plain:"",onClick:V},{default:t(()=>[n("打开抽屉")]),_:1})]),status:t(({row:e})=>[o(U,{type:"primary",color:P(e.status)},{default:t(()=>[n(I(D(e.status)),1)]),_:2},1032,["color"])]),process:t(({row:e})=>[o($,{percentage:e.process},null,8,["percentage"])]),operation:t(({row:e})=>[o(A,{operators:k(e.status),onClick:p=>C(p,e)},null,8,["operators","onClick"])]),_:1},512)]),footer:t(()=>[S("div",X,[o(s,null,{default:t(()=>[n("取消")]),_:1}),o(s,null,{default:t(()=>[n("保存")]),_:1})])]),_:1},8,["modelValue"])]),_:1})}}},se=N(Z,[["__scopeId","data-v-457060a0"],["__file","F:/online/project-vue3/src/views/device-management/device-ledger/list.vue"]]);export{se as default};