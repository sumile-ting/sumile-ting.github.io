import{_ as $}from"./index-46df7c1c.js";import{_ as j}from"./index-901847f8.js";import{_ as H}from"./index-8e07afd6.js";import{_ as I}from"./index-ec704b20.js";import{_ as K,r as L,h as u,l as M,e as r,o as d,a as Q,w as l,f as e,j as s,t as q,c as g,m as h,b as p}from"./index-116d1b68.js";const O={key:0,class:"sumile-table-alert mt-15px"},R=p("div",null,[p("span",{class:"c-gray"},[s("已选择"),p("span",{style:{color:"var(--el-color-primary-light-3)"}},"2"),s("项")]),p("span",{class:"c-black-085 ml-10px"},[s("共计"),p("span",{class:"mx-5px"},"200"),s("条数据")])],-1),T={key:1,class:"sumile-pagination"},b=!1,G={__name:"spare-part-ledger",setup(J){const y=L({columns:[{label:"设备名称",prop:"name",type:"input"},{label:"设备编号",prop:"number",type:"input"},{label:"设备种类",prop:"category",type:"select",dictData:[{label:"动设备",value:1},{label:"静设备",value:2},{label:"电气设备",value:3}]},{label:"ABC分类",prop:"abc",type:"select",props:{label:"dictValue",value:"dictKey"},dictUrl:"/api/sumile-system/dict-biz/dictionary?code=abc_classify"},{label:"安装日期",prop:"date",type:"datepicker",props:{valueFormat:"YYYY-MM-DD"}},{label:"管理部门",prop:"manageDeptId",type:"tree",dictUrl:"/api/sumile-system/dept/tree?tenantId=000000",props:{nodeKey:"id",props:{label:"title"}}},{label:"安装位置",prop:"installPosition",slot:!0}]}),i=u({}),f=t=>{console.log("query ing...",t)},v=t=>{console.log("click",t)},c=[{company:"公司名称",content:"主营化工品",date:"2016-05-03",address:"西安市雁塔区大寨路129号",status:0,process:78}];M(()=>`calc(100% - ${97+(c.length?48:0)}px)`);const w=function(t){return[{label:"查看",icon:"Reading",type:"primary",operator:"show"},{label:"编辑",icon:"EditPen",type:"primary",operator:"edit",disabled:t===2},{label:"删除",icon:"Delete",type:"danger",operator:"delete"},{label:"打印",icon:"Printer",type:"primary",operator:"print"},{label:"导出",icon:"Download",type:"primary",operator:"export",show:t!==2}]};function C(t){return["未开始","进行中","出错"][t]}function x(t){return["#62A6ED","#47D56D","#E35A7C"][t]}const _=u(1),m=u(20);function D(t){}function k(t){}return(t,a)=>{const P=r("el-input"),z=I,n=r("el-table-column"),V=H,A=r("el-progress"),B=j,S=r("el-table"),U=r("el-button"),E=r("el-tag"),F=r("el-pagination"),N=$;return d(),Q(N,{"show-pagination":!!c.length,"show-alert":b,"show-operator":!1},{search:l(()=>[e(z,{option:y,model:i.value,"onUpdate:model":a[1]||(a[1]=o=>i.value=o),onQueryChange:f},{installPosition:l(o=>[e(P,{placeholder:o.placeholder,modelValue:i.value.installPosition,"onUpdate:modelValue":a[0]||(a[0]=Y=>i.value.installPosition=Y)},null,8,["placeholder","modelValue"])]),_:1},8,["option","model"])]),default:l(()=>[e(S,{data:c,border:"",stripe:"",height:"100%"},{default:l(()=>[e(n,{type:"selection",width:"55"}),e(n,{prop:"company",label:"公司","min-width":"150",width:"150"}),e(n,{prop:"content",label:"内容","show-overflow-tooltip":""}),e(n,{prop:"date",label:"日期",width:"150"}),e(n,{prop:"address",label:"地址",width:"200","show-overflow-tooltip":""}),e(n,{prop:"status",label:"状态",width:"120"},{default:l(({row:o})=>[e(V,{type:"primary",color:x(o.status)},{default:l(()=>[s(q(C(o.status)),1)]),_:2},1032,["color"])]),_:1}),e(n,{prop:"process",label:"进度",width:"150"},{default:l(({row:o})=>[e(A,{percentage:o.process},null,8,["percentage"])]),_:1}),e(n,{fixed:"right",label:"操作",width:"160"},{default:l(({row:o})=>[e(B,{operators:w(o.status),onClick:v},null,8,["operators"])]),_:1})]),_:1}),b?(d(),g("div",O,[e(E,null,{default:l(()=>[R,e(U,{type:"primary",text:""},{default:l(()=>[s(" 清空已选 ")]),_:1})]),_:1})])):h("v-if",!0),c.length?(d(),g("div",T,[e(F,{"current-page":_.value,"onUpdate:currentPage":a[2]||(a[2]=o=>_.value=o),"page-size":m.value,"onUpdate:pageSize":a[3]||(a[3]=o=>m.value=o),"page-sizes":[10,20,50,100],layout:"prev, pager, next, sizes, jumper",total:400,"hide-on-single-page":"",onSizeChange:D,onCurrentChange:k},null,8,["current-page","page-size"])])):h("v-if",!0)]),_:1},8,["show-pagination"])}}},oe=K(G,[["__file","F:/online/project-vue3/src/views/device-management/spare-part-management/spare-part-ledger.vue"]]);export{oe as default};
