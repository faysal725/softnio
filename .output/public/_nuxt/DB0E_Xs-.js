import{Y as y,h as d,G as h,S as v}from"./Dn4VB67O.js";import{r as w}from"./CG_kaG1Q.js";import{r as x,o as m,s as _,w as t,b as s,x as e,a as n,C as B,c as C,z as g,L as b}from"./XY3UzohT.js";const k=n("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),S={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},z={class:"flex h-full md:min-h-full items-end justify-center md:p-4 text-center sm:items-center sm:p-0"},N={key:0,class:"flex md:hidden justify-end"},j={__name:"Container",props:{modelValue:[String,Number,Boolean],shouldOpen:{type:Boolean,default:!1},classes:{type:String,default:"sm:w-full sm:max-w-lg"},showCloseBtn:{type:Boolean,default:!1}},emits:["updateInput"],setup(l,{emit:c}){const r=l,u=c;let o=x();o.value=r.shouldOpen;const i=()=>{o.value=!1,u("updateInput",o.value)};return(f,a)=>(m(),_(e(v),{as:"template",show:r.shouldOpen},{default:t(()=>[s(e(y),{class:"relative z-50",onClose:a[1]||(a[1]=p=>i())},{default:t(()=>[s(e(d),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:t(()=>[k]),_:1}),n("div",S,[n("div",z,[s(e(d),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:t(()=>[s(e(h),{class:B(["relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6 h-full md:h-fit w-full md:w-fit",l.classes])},{default:t(()=>[l.showCloseBtn?(m(),C("div",N,[s(e(w),{onClick:a[0]||(a[0]=p=>i()),class:"h-5 w-5 text-slate-500"})])):g("",!0),b(f.$slots,"default")]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"]))}};export{j as _};
