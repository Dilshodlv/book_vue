import{d as g,m as y,n as _,r as h,o as u,c,g as l,i as p,h as a,x as f,y as v,z as x,F as V,f as F,t as C}from"./index-DIzzULu7.js";import"./axios-Df_MYvD6.js";import{a as k}from"./axios-B4uVmeYG.js";import{_ as b,a as w}from"./FormButton-CvPA4Zvu.js";import{u as K}from"./getCategories-B0L5wfag.js";const B=g("create-book",()=>{function n(i){return new Promise((s,e)=>{k.post("books",i).then(r=>{console.log("Kitob muvaffaqiyatli yaratildi"),s()}).catch(()=>{console.log("Kitob qoshishda xatolik"),e()})})}return{bookCreate:n}}),U=g("add-file",()=>{function n(i){let s=new FormData;return s.append("file",i),new Promise((e,r)=>{k.post("media_objects",s).then(m=>{console.log("Fayl muvaffaqiyatli yuklandi"),e(m)}).catch(()=>{console.log("Fayl yuklanishda xatolik"),r()})})}return{addFile:n}}),q={class:"row mb-3"},D={class:"col-12 col-md-6"},S=l("h1",null,"Kitob yaratish",-1),$=["value"],j={class:"text-end"},E={__name:"CreateBook",setup(n){const i=y();let s=_(),e=h({name:"",description:"",text:"",category:"",image:""});function r(){U().addFile(s).then(d=>{e.image="/api/media_objects/"+d.data.id}),B().bookCreate(e).then(()=>{i.push("/")})}function m(d){s=d.target.files[0]}return(d,o)=>(u(),c("div",q,[l("div",D,[S,p(b,{modelValue:a(e).name,"onUpdate:modelValue":o[0]||(o[0]=t=>a(e).name=t),"props-id":"name","label-name":"Kitob nomi"},null,8,["modelValue"]),p(b,{modelValue:a(e).description,"onUpdate:modelValue":o[1]||(o[1]=t=>a(e).description=t),"props-id":"description","label-name":"Kitob tarifi"},null,8,["modelValue"]),f(l("textarea",{"onUpdate:modelValue":o[2]||(o[2]=t=>a(e).text=t),class:"form-control mb-2",rows:"8",placeholder:"Kitob matni"},null,512),[[v,a(e).text]]),f(l("select",{"onUpdate:modelValue":o[3]||(o[3]=t=>a(e).category=t),class:"form-select mb-3"},[(u(!0),c(V,null,F(a(K)().state.categories,t=>(u(),c("option",{key:t.id,value:t["@id"]},C(t.name),9,$))),128))],512),[[x,a(e).category]]),l("input",{onChange:o[4]||(o[4]=t=>m(t)),type:"file",class:"form-control mt-3"},null,32),l("div",j,[p(w,{onClick:o[5]||(o[5]=t=>r()),name:"Yaratish",class:"btn btn-success mt-3"})])])]))}};export{E as default};
