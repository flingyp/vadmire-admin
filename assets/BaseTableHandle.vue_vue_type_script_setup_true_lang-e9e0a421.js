import{E as p,F as r,a8 as d,a4 as i,L as a,H as n,ab as o,aa as m}from"./vendor_1695692953124-9b949746.js";const u={class:"w-full flex items-center justify-between"},_={class:"space-x-2"},y=p({name:"BaseTableHandle",__name:"BaseTableHandle",props:{value:{default:""}},emits:["add","into","export"],setup(c){return(t,e)=>{const s=m;return r(),d("div",u,[i("div",null,[a(s,{type:"primary",size:"small",class:"px-6 py-2",onClick:e[0]||(e[0]=l=>t.$emit("add"))},{default:n(()=>[o(" 新增 ")]),_:1})]),i("div",_,[a(s,{type:"primary",size:"small",class:"px-6 py-2",onClick:e[1]||(e[1]=l=>t.$emit("into"))},{default:n(()=>[o(" 导入 ")]),_:1}),a(s,{type:"info",size:"small",ghost:"",class:"px-6 py-2",onClick:e[2]||(e[2]=l=>t.$emit("export"))},{default:n(()=>[o(" 导出 ")]),_:1})])])}}});export{y as _};
