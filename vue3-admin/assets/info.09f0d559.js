import{v as I,b as p,C as i,H as O,B as T,M as $,y as j,x as S,z as A,A as H,N as M,O as D,P as G,o as c,m as y,w as a,k as e,c as J,q as f}from"./index.d17a8e71.js";const K=["src"],W={__name:"info",setup(L){const{proxy:k}=I(),_=p("first"),b=p("default"),v=p(),s=i({name:"",realName:""}),C=i({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}]}),V=(t,l)=>{_.value==="first"&&k.$get("/api/sumile-auth/oauth/user-info").then(d=>{Object.assign(s,d.data.data)})},F=async t=>{!t||await t.validate((l,d)=>{l?console.log("submit!"):console.log("error submit!",d)})},U=()=>{Object.assign(s,{name:"",realName:"",email:"",phone:" ",avatar:" "})},r=i({oldPassword:"",newPassword:"",newPassword1:""}),x=i({oldPassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801",trigger:"blur"}],newPassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"}],newPassword1:[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:"blur"}]}),w=p(),N=async t=>{!t||await t.validate((l,d)=>{l?console.log("submit!"):console.log("error submit!",d)})},E=t=>{!t||(Object.assign(r,{oldPassword:"",newPassword:"",newPassword1:""}),t.resetFields())};return V(),(t,l)=>{const d=O("Plus"),z=T,q=$,n=j,u=S,m=A,g=H,P=M,B=D,R=G;return c(),y(R,{shadow:"always"},{default:a(()=>[e(B,{modelValue:_.value,"onUpdate:modelValue":l[10]||(l[10]=o=>_.value=o),class:"demo-tabs",onTabChange:V},{default:a(()=>[e(P,{label:"\u4E2A\u4EBA\u4FE1\u606F",name:"first"},{default:a(()=>[e(g,{ref_key:"ruleFormRef",ref:v,model:s,rules:C,"label-width":"120px",class:"demo-ruleForm",size:b.value,"status-icon":""},{default:a(()=>[e(n,{label:"\u5934\u50CF",prop:"avatar"},{default:a(()=>[e(q,{class:"avatar-uploader",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","show-file-list":!1},{default:a(()=>[s.avatar?(c(),J("img",{key:0,src:s.avatar,class:"avatar"},null,8,K)):(c(),y(z,{key:1,class:"avatar-uploader-icon"},{default:a(()=>[e(d)]),_:1}))]),_:1})]),_:1}),e(n,{label:"\u59D3\u540D",prop:"realName"},{default:a(()=>[e(u,{modelValue:s.realName,"onUpdate:modelValue":l[0]||(l[0]=o=>s.realName=o)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u7528\u6237\u540D",prop:"name"},{default:a(()=>[e(u,{modelValue:s.name,"onUpdate:modelValue":l[1]||(l[1]=o=>s.name=o)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u624B\u673A\u53F7",prop:"phone"},{default:a(()=>[e(u,{modelValue:s.phone,"onUpdate:modelValue":l[2]||(l[2]=o=>s.phone=o)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u90AE\u7BB1",prop:"email"},{default:a(()=>[e(u,{modelValue:s.email,"onUpdate:modelValue":l[3]||(l[3]=o=>s.email=o)},null,8,["modelValue"])]),_:1}),e(n,null,{default:a(()=>[e(m,{type:"primary",onClick:l[4]||(l[4]=o=>F(v.value))},{default:a(()=>[f("\u63D0\u4EA4")]),_:1}),e(m,{onClick:U},{default:a(()=>[f("\u6E05\u7A7A")]),_:1})]),_:1})]),_:1},8,["model","rules","size"])]),_:1}),e(P,{label:"\u4FEE\u6539\u5BC6\u7801",name:"second"},{default:a(()=>[e(g,{ref_key:"passwordFormRef",ref:w,model:r,rules:x,"label-width":"120px",class:"demo-ruleForm",size:b.value,"status-icon":""},{default:a(()=>[e(n,{label:"\u539F\u5BC6\u7801",prop:"oldPassword"},{default:a(()=>[e(u,{modelValue:r.oldPassword,"onUpdate:modelValue":l[5]||(l[5]=o=>r.oldPassword=o),type:"password"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u65B0\u5BC6\u7801",prop:"newPassword"},{default:a(()=>[e(u,{modelValue:r.newPassword,"onUpdate:modelValue":l[6]||(l[6]=o=>r.newPassword=o),type:"password"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"newPassword1"},{default:a(()=>[e(u,{modelValue:r.newPassword1,"onUpdate:modelValue":l[7]||(l[7]=o=>r.newPassword1=o),type:"password"},null,8,["modelValue"])]),_:1}),e(n,null,{default:a(()=>[e(m,{type:"primary",onClick:l[8]||(l[8]=o=>N(w.value))},{default:a(()=>[f("\u63D0\u4EA4")]),_:1}),e(m,{onClick:l[9]||(l[9]=o=>E(w.value))},{default:a(()=>[f("\u6E05\u7A7A")]),_:1})]),_:1})]),_:1},8,["model","rules","size"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}};export{W as default};
