import{ah as r,bd as E,bp as B,E as f,bn as k,F as p,a6 as g,L as u,M as n,bq as V,aG as m,br as x}from"./vendor_1694166525858-3db87f0b.js";const y=()=>{const l=r(""),e=E(),d=r({}),o=r({placeholder:l.value,readOnly:!1}),a=t=>{e.value=t};return B(()=>{const t=e.value;t&&t.destroy()}),{editorInstance:e,toolBarConfig:d,editorConfig:o,setEditor:a}},O={class:"border border-vBorderLight dark:border-vBorderDark dark:bg-black"},W=f({name:"WangEditor",__name:"WangEditor",props:{content:{}},emits:["update:content"],setup(l,{emit:e}){const d=l,{editorInstance:o,toolBarConfig:a,editorConfig:t,setEditor:v}=y(),{content:_}=k(d),c=r(_.value);t.value.placeholder="上传图片、上传视频没有做配置, 请参考wangEditor进行配置",t.value.readOnly=!1,t.value.autoFocus=!0;const b=s=>{v(s)},h=s=>{e("update:content",s.getHtml())};return(s,i)=>(p(),g("div",O,[u(n(V),{editor:n(o),"default-config":n(a),mode:"default"},null,8,["editor","default-config"]),u(n(x),{modelValue:n(c),"onUpdate:modelValue":i[0]||(i[0]=C=>m(c)?c.value=C:null),"default-config":n(t),onOnCreated:b,onOnChange:h},null,8,["modelValue","default-config"])]))}}),U=f({__name:"WangEditor",setup(l){const e=r('<h1 style="text-align: center;">✌️VAdmire Admin✌️</h1>');return(d,o)=>(p(),g("div",null,[u(W,{content:n(e),"onUpdate:content":o[0]||(o[0]=a=>m(e)?e.value=a:null)},null,8,["content"])]))}});export{U as default};
