import{o as l,c as n,a,r as m,q as f,h as u,t as c,F as v,y as g,C as _,x as d,d as y,s as w,z as V}from"./XY3UzohT.js";function k(r,i){return l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const b={class:"text-xs font-medium pb-3 text-gray-700 dark:text-slate-200"},C={class:"flex justify-start gap-3 flex-wrap max-h-28 overflow-y-scroll scrollbar-hide"},B=["onClick"],L={class:"text-sm text-red-600"},z={__name:"Selector4",props:{options:{type:Array,default:[]},oldValue:Array,title:{type:String,default:"demo"},error:String},emits:["update:modelValue"],setup(r,{emit:i}){const t=r;let p=m("");const x=i,e=m([]);f(()=>{t.oldValue&&(e.value=[...t.oldValue])});const h=s=>{e.value.includes(s)?e.value.splice(e.value.indexOf(s),1):e.value.push(s)};return u(()=>e.value,()=>{x("update:modelValue",e.value)},{deep:!0}),u(()=>t.oldValue,()=>{e.value.push(t.oldValue)},{deep:!0}),u(()=>t.error,()=>{p.value=t.error},{deep:!0}),(s,S)=>(l(),n("div",null,[a("p",b,c(r.title),1),a("ul",C,[(l(!0),n(v,null,g(r.options,o=>(l(),n("li",{onClick:M=>h(o._id),class:_(["p-2 cursor-pointer flex items-center gap-3 text-xs rounded-md border border-lightGrey",d(e).includes(o._id)?"bg-blackPrimary text-white":"bg-whiteSecondary "])},[y(c(o.title)+" ",1),d(e).includes(o._id)?(l(),w(d(k),{key:0,class:"h-5 w-5 text-white"})):V("",!0)],10,B))),256))]),a("div",null,[a("p",L,c(d(p)),1)])]))}};export{z as _,k as r};
