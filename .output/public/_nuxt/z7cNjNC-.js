import{o as l,c as n,a as i,r as u,G as _,q as w,P as O,h as q,z as k,t as V,C as f,s as C,x as S,b as z,w as L,M as P,Q as j,F as A,y as D,T as E}from"./XY3UzohT.js";import{r as I}from"./CG_kaG1Q.js";function T(a,g){return l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})])}const M=["for"],$={key:0,class:"text-red-500 mr-1"},F={class:"relative dropdown-container pt-3"},U=["value"],G={key:0,class:"absolute left-0 right-0 top-[100%] bg-white dark:bg-blackPrimary border border-gray-300 rounded-lg shadow-md p-1 space-y-1 z-10"},Q={class:"h-auto max-h-28 overflow-x-hidden overflow-y-scroll small-scrollbar scrollbar-hide"},H=["onClick"],J={key:1,class:"text-xs font-normal text-gray-700 bg-gray-50 rounded-md p-2 mt-1"},X={__name:"Combobox",props:{options:{type:Array,required:!0},title:String,label:String,id:{type:[String,Number],required:!1},modelValue:{type:[String,Number]},placeholder:{type:String,default:"Enter your ..."},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},show:{type:String,default:"name"},showVal:{type:[String,Number,Boolean]},returnVal:{type:[String,Number,Boolean,Array,Object],default:"_id"},defaultVal:{type:[String,Number,Boolean,Array,Object]},select:{type:[String,Number,Boolean,Array,Object]},classes:{type:String,default:"rounded-full"},iconClasses:{type:String,default:"text-gray-700"},oldValue:{type:[String,Number],default:""}},emits:["update:modelValue","select"],setup(a,{emit:g}){const e=a,h=g,o=u(null),d=u(""),c=u("");u("");const m=u(""),y=u(null),v=t=>{o.value&&!t.target.closest(".dropdown-container")&&(o.value=!1)},B=()=>{y.value.focus(),o.value=!0},b=t=>{c.value=t[e.show],d.value=t[e.show],h("update:modelValue",t[e.returnVal]),d.value="",o.value=!1,h("select",t)},x=_(()=>e.options.filter(t=>{var s;return(s=t[e.show])==null?void 0:s.toString().toLowerCase().includes(d.value.toString().toLowerCase())})),N=()=>{o.value=!0};return w(()=>{document.addEventListener("click",v)}),w(()=>{console.log(e.oldValue),e.oldValue!==""&&(console.log(e.options),e.options.map(t=>{t[e.returnVal]==e.oldValue&&b(t)}))}),O(()=>{document.removeEventListener("click",v)}),q(()=>e.showVal,(t,s)=>{var r;t&&((r=e.options)==null||r.find(p=>{p.id==e.showVal&&(m.value=p.name)}))}),(t,s)=>(l(),n("div",null,[i("label",{for:a.label,class:"block text-gray-700 dark:text-slate-200 text-xs leading-5 font-medium capitalize"},[a.required?(l(),n("span",$,"*")):k("",!0),i("span",null,V(a.title),1)],8,M),i("div",F,[i("input",{onClick:B,value:a.defaultVal||c.value||m.value,readonly:!0,class:f([(e.disabled,"bg-transparent  text-gray-700 dark:text-slate-300"),"w-full h-10 flex items-center pl-6 pr-8  border border-gray-300 cursor-pointer placeholder:text-gray-700  focus:ring-1 focus:ring-primary text-xs font-base  focus:outline-none capitalize ",a.classes]),ref_key:"searchInput",ref:y},null,10,U),c.value||m.value?(l(),C(S(I),{key:0,onClick:s[0]||(s[0]=r=>c.value=""),class:f(["h-6 w-6 p-1 bg-gray-50 rounded-full absolute top-5 right-2 transition-all duration-500 cursor-pointer",[o.value&&"rotate-180",a.iconClasses]])},null,8,["class"])):(l(),C(S(T),{key:1,class:f(["h-4 w-4 absolute top-6 right-3 transition-all duration-500 cursor-pointer",[o.value&&"rotate-180",a.iconClasses]])},null,8,["class"])),z(E,{mode:"out-in","enter-active-class":"transition-all duration-300 ease-in","enter-from-class":"transform translate-y-5 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition-all duration-300 ease-out","leave-from-class":"transform translate-y-0 opacity-100","leave-to-class":"transform translate-y-5 opacity-0"},{default:L(()=>[o.value?(l(),n("div",G,[P(i("input",{type:"text",ref_key:"searchInput",ref:y,"onUpdate:modelValue":s[1]||(s[1]=r=>d.value=r),onInput:N,class:f([e.disabled?"bg-[#f9fafa] dark:bg-blackPrimary  text-[#505a62] dark:text-slate-200":"bg-[#f4f5f6] dark:bg-blackPrimary text-[#1f272e] dark:text-slate-200 ","w-full h-9 pl-3 pr-8 rounded-md border border-gray-300  placeholder:text-gray-300 focus:ring-1 focus:ring-violet-600  text-base font-medium"])},null,34),[[j,d.value]]),i("ul",Q,[x.value.length?(l(!0),n(A,{key:0},D(x.value,(r,p)=>(l(),n("li",{onClick:K=>b(r),key:p,class:f(["text-xs font-normal text-gray-700 dark:text-slate-300 p-2 cursor-pointer hover:bg-secondary hover:text-white transition-all duration-300 rounded-md break-words whitespace-pre-wrap",r[e.show]==c.value?"bg-secondary text-white":""])},V(r[e.show]),11,H))),128)):(l(),n("p",J," No data found "))])])):k("",!0)]),_:1})])]))}};export{X as _,T as r};
