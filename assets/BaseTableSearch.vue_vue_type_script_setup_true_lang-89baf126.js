import{E as N,bc as F,aj as g,X as B,F as t,G as o,H as l,a8 as L,al as U,M as h,ak as V,L as s,a4 as $,ab as c,bd as x,aa as C,be as w,ae as S,aL as T,aU as E,bf as I}from"./vendor_1695692953124-9b949746.js";const j={class:"space-x-2"},D=N({name:"BaseTableSearch",__name:"BaseTableSearch",props:{searchFormList:{type:Array,default:()=>[]}},emits:["update:searchFormList","search","reset"],setup(d,{emit:m}){const i=d,{searchFormList:v}=F(i),u=g(v.value);return B(u,n=>{m("update:searchFormList",n)},{deep:!0}),(n,p)=>{const f=T,y=E,b=I,r=x,_=C,k=w;return t(),o(k,{"label-placement":"left","label-width":"auto"},{default:l(()=>[(t(!0),L(V,null,U(h(u),e=>(t(),o(r,{key:e.key,label:e.label},{default:l(()=>[e.type==="input"?(t(),o(f,{key:0,value:e.value,"onUpdate:value":a=>e.value=a,placeholder:e.placeholder},null,8,["value","onUpdate:value","placeholder"])):e.type==="select"?(t(),o(y,{key:1,value:e.value,"onUpdate:value":a=>e.value=a,placeholder:e.placeholder,options:e.options},null,8,["value","onUpdate:value","placeholder","options"])):e.type==="date"?(t(),o(b,{key:2,"formatted-value":e.value,"onUpdate:formattedValue":a=>e.value=a,type:"date",class:"w-full",placeholder:e.placeholder},null,8,["formatted-value","onUpdate:formattedValue","placeholder"])):S("",!0)]),_:2},1032,["label"]))),128)),s(r,null,{default:l(()=>[$("div",j,[s(_,{type:"primary",class:"px-6",onClick:p[0]||(p[0]=e=>n.$emit("search"))},{default:l(()=>[c(" 搜索 ")]),_:1}),s(_,{type:"primary",class:"px-6",ghost:"",onClick:p[1]||(p[1]=e=>n.$emit("reset"))},{default:l(()=>[c(" 重置 ")]),_:1})])]),_:1})]),_:1})}}});export{D as _};
