import{E as i,an as t,F as m,ac as b,M as u,H as c,a9 as g,au as d,N as o,aL as p,bs as f}from"./vendor_1698644854046-89bb1d9d.js";const _={class:"p-4 mb-4 last:mb-0 cursor-grab rounded border border-vBorderLight dark:border-vBorderDark"},B=i({__name:"Draggable",setup(v){const l=t(!1),a=t([{id:1,label:"Item 1"},{id:2,label:"Item 2"},{id:3,label:"Item 3"},{id:4,label:"Item 4"},{id:5,label:"Item 5"},{id:6,label:"Item 6"},{id:7,label:"Item 7"}]),s=()=>{l.value=!0},n=()=>{l.value=!1};return(I,r)=>(m(),b("div",null,[u(o(f),{modelValue:o(a),"onUpdate:modelValue":r[0]||(r[0]=e=>p(a)?a.value=e:null),"item-key":"id",group:"people",onStart:s,onEnd:n},{item:c(({element:e})=>[g("div",_,d(e.id)+" - "+d(e.label),1)]),_:1},8,["modelValue"])]))}});export{B as default};