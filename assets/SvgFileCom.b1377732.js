import{_ as c,d as l,P as o,w as i,x as u,B as m,K as r,Q as _}from"./index.2d9a7835.js";const d=["xlink:href"],v=l({__name:"SvgFileCom",props:{name:{type:String,required:!0},color:{type:String,required:!1,default:""}},setup(n){const e=n,s=o(()=>`#icon-${e.name}`),a=o(()=>e.name?`svg-icon icon-${e.name}`:"svg-icon");return(t,p)=>(i(),u("svg",_({class:r(a)},t.$attrs,{style:{color:n.color}}),[m("use",{"xlink:href":r(s)},null,8,d)],16))}});var f=c(v,[["__scopeId","data-v-41dc7511"],["__file","/home/runner/work/vue-plus-admin/vue-plus-admin/src/components/SvgFileCom.vue"]]);export{f as S};