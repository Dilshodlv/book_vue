import{_ as b,a as y}from"./FormButton-CvPA4Zvu.js";import{d as B,r as E,n as p,o as d,c as m,g as e,i as g,h as a,p as k,F as C,f as I,t as n,q as f}from"./index-DIzzULu7.js";import"./axios-Df_MYvD6.js";import{a as G}from"./axios-B4uVmeYG.js";const P=B("fetchUsers",()=>{const u=E({users:[],totalItems:0,pageCount:0});function c(i){return new Promise((r,o)=>{G.get("users"+i).then(s=>{console.log("Foydalanuvchilar muvaffaqiyatli olindi"),u.users=s.data["hydra:member"],u.totalItems=s.data["hydra:totalItems"],u.pageCount=Math.ceil(u.totalItems/5),r()}).catch(s=>{console.log("token olishda xatolik"),console.log(s),o()})})}return{usersGet:c,state:u}}),U={class:"mt-5 mx-lg-5"},$={class:"row justify-content-center"},x={class:"col-6 col-md-4 col-lg-2 align-self-end mb-3"},z={class:"col-6 col-md-4 col-lg-2 align-self-end mb-3"},F={class:"table-responsive"},q={class:"table table-hover table-bordered"},N=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Id"),e("th",{scope:"col"},"Email"),e("th",{scope:"col"},"Telefon"),e("th",{scope:"col"},"Yoshingiz"),e("th",{scope:"col"},"Jins"),e("th",{scope:"col"},"Resgistrsatsiya sanasi")])],-1),T={scope:"row"},j={scope:"col"},A={scope:"col"},J={scope:"col"},R={scope:"col"},S={class:"me-3"},D={class:"pagination justify-content-end"},L=["onClick"],Q={__name:"AdminPage",setup(u){let c=p("?page=1");const i=P();i.usersGet("?page=1");const{state:r}=i;let o=p(null),s=p(null);function V(){c.value="?page=1",o.value&&(c.value+="&email="+o.value),s.value&&(c.value+="&phone="+s.value),(o.value||s.value)&&i.usersGet(c.value)}function w(){document.getElementById("email").value="",document.getElementById("phone").value="",o.value=null,s.value=null,i.usersGet("?page=1")}let h=p(1);function v(_){console.log(_),i.usersGet(c.value.replace(/page=[1-9]/,"page="+_))}return(_,t)=>(d(),m("div",U,[e("div",$,[g(b,{modelValue:a(o),"onUpdate:modelValue":t[0]||(t[0]=l=>k(o)?o.value=l:o=l),"props-id":"email","label-name":"Email",class:"col-12 col-sm-6 col-md-4 col-lg-2"},null,8,["modelValue"]),g(b,{modelValue:a(s),"onUpdate:modelValue":t[1]||(t[1]=l=>k(s)?s.value=l:s=l),"props-id":"phone","label-name":"Telefon",class:"col-12 col-sm-6 col-md-4 col-lg-2"},null,8,["modelValue"]),e("div",x,[g(y,{onClick:t[2]||(t[2]=l=>V()),name:"Izlash",class:"btn-success w-100"})]),e("div",z,[g(y,{onClick:t[3]||(t[3]=l=>w()),name:"Tozalash",class:"btn-danger w-100"})])]),e("div",F,[e("table",q,[N,e("tbody",null,[(d(!0),m(C,null,I(a(r).users,l=>(d(),m("tr",{key:l.id},[e("th",T,n(l.id),1),e("th",j,n(l.email),1),e("th",A,n(l.phone),1),e("th",J,n(l.age),1),e("th",R,n(l.gender),1),e("td",null,n(l.createdAt.slice(0,10)),1)]))),128))])]),e("div",S," Jami foydalanuvchilar: "+n(a(r).totalItems),1)]),e("nav",null,[e("ul",D,[e("li",{class:f({active:a(h)===1})},[e("span",{onClick:t[4]||(t[4]=l=>v(1)),class:"page-link rounded btn",href:"#"},"Previous")],2),(d(!0),m(C,null,I(a(r).pageCount,l=>(d(),m("li",{key:l,class:f([{active:a(h)===l},"page-item mx-1"])},[e("span",{onClick:M=>v(l),class:"page-link btn btn-primary rounded"},n(l),9,L)],2))),128)),e("li",{class:f({disabled:a(h)===a(r).pageCount})},[e("span",{onClick:t[5]||(t[5]=l=>v(a(r).pageCount)),class:"page-link rounded btn btn-primary"},"Next")],2)])])]))}};export{Q as default};
