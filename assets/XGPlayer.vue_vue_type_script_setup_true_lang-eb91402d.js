import{E as p,aj as o,b5 as t,aN as r,bj as u,F as s,a8 as d,M as i}from"./vendor_1695692953124-9b949746.js";const c=["id"],_=p({name:"XGPlayer",__name:"XGPlayer",props:{url:{},volume:{default:.6},autoplay:{type:Boolean,default:!1},videoInit:{type:Boolean,default:!1},poster:{default:void 0},pip:{type:Boolean,default:!0}},setup(l){const e=l,n=o(),a=o(`${t(6)}_XGPlayer_${t(6)}`);return r(()=>{n.value=new u({id:a.value,url:e.url,lang:"zh-cn",volume:e.volume,autoplay:e.autoplay,videoInit:e.videoInit,poster:e.poster??"",playbackRate:[.5,.75,1,1.5,2],defaultPlaybackRate:1,download:!0,pip:e.pip})}),(f,y)=>(s(),d("div",{id:i(a)},null,8,c))}});export{_};
