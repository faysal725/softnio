import{aq as g,ak as p,D as m,O as d}from"./XY3UzohT.js";const f=()=>{const{baseUrl:e}=p().public;return e},h=async({method:e,path:s,heads:t,body:l})=>{var r="",o,n=[];let a=200;return await g(s,{method:e,baseURL:f(),headers:t,body:l}).then(i=>{o=i}).catch(i=>{a=422,r=i.response._data.message,n=i.response._data.errors}),a==422?{status:422,errors:n,message:r}:{status:200,res:o,message:"Network Responded Successfully"}},b=async({method:e,path:s,heads:t})=>{var l="Error Internal",r,o=[];let n=200;return await g(s,{method:e,baseURL:f(),headers:t}).then(a=>{r=a}).catch(a=>{n=422,o=a}),n==422?{status:422,errors:o,message:l}:{status:200,res:r,message:"Network Responded Successfully"}};m("errorsStore",{state:()=>({message:[]}),actions:{set(e){this.message=e},get(){return this.message}}});const c=()=>{const{baseUrl:e}=p().public;return e},v=e=>c()+"/"+e,S=async e=>{let s=await h({method:"POST",body:e,heads:{},path:c()+"/api/auth/register"});return s.status==200?(console.log(s.res),u(s.res,"registration")):console.log("failed"),s},w=async e=>{let s=await h({method:"POST",body:e,heads:{},path:c()+"/api/auth/verify/otp"});return s.status==200,u(s,"otp"),s},k=async e=>{let s=await h({method:"POST",body:e,heads:{},path:c()+"/api/auth/login"});return s.status==200?u(s.res):console.log("failed"),s},u=(e,s)=>{const t=d();s=="otp"?t.saveOtpData(!0):s=="registration"?t.savePrimaryData(e):t.saveAuthAccess(e)},O=()=>d().authenticated();export{c as a,O as b,b as c,h as d,k as l,v as n,w as o,S as r,u as s};
