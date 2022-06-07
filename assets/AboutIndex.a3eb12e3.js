import{_ as y,d as E,j as F,k as w,l as A,o as p,c as u,a as r,w as e,F as h,r as f,p as D,n as k,b as d,q as o,t as n}from"./index.c2ce056c.js";const z="vue-plus-admin",j="0.0.0",B={dev:"vite --mode dev",build:"vite build","build:mock":"vite build --mode prod_mock",preview:"vite preview","preview:mock":"vite preview --mode prod_mock","lint:eslint":'eslint --cache --max-warnings 0 "{src,mock}/**/*.{vue,js,ts,tsx}" --fix',"lint:prettier":'prettier --write  "src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"',"lint:stylelint":'stylelint --cache --fix "src/**/*.{vue,css,less,scss,sass}"',prepare:"husky install",commit:"git-cz"},C={"@element-plus/icons-vue":"^2.0.1","@types/nprogress":"^0.2.0","@vueuse/core":"^8.6.0",axios:"^0.27.2","element-plus":"^2.2.2",lodash:"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0",pinia:"^2.0.14",vue:"^3.2.25","vue-router":"^4.0.15"},I={"@commitlint/cli":"^17.0.1","@commitlint/config-conventional":"^17.0.0","@iconify/vue":"^3.2.1","@types/node":"^17.0.36","@typescript-eslint/eslint-plugin":"^5.26.0","@typescript-eslint/parser":"^5.26.0","@vitejs/plugin-vue":"^2.3.3",eslint:"^7.32.0","eslint-config-airbnb-base":"^15.0.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.26.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^9.0.1",husky:"^7.0.0","lint-staged":"^12.4.2",prettier:"^2.6.2",stylelint:"^14.8.5","stylelint-config-prettier":"^9.0.3","stylelint-config-standard":"^25.0.0",typescript:"^4.7.3","unplugin-auto-import":"^0.8.6","unplugin-icons":"^0.14.3","unplugin-vue-components":"^0.19.6",vite:"^2.9.9","vite-plugin-mock":"^2.9.6","vite-plugin-windicss":"^1.8.4","vue-tsc":"^0.34.7",windicss:"^3.5.4"},S={commitizen:{path:"cz-conventional-changelog"}};var V={name:z,private:!0,version:j,scripts:B,dependencies:C,devDependencies:I,"lint-staged":{"*.{js,jsx,ts,tsx}":["prettier --write","eslint --fix"],"package.json":["prettier --write"],"*.vue":["eslint --fix","prettier --write"],"*.md":["prettier --write"],"*.{css,scss,less,sass}":["stylelint --fix","prettier --write"]},config:S};const c=l=>(D("data-v-3ccfb05d"),l=l(),k(),l),O={class:"p-[1.5rem] pb-[5rem]"},P=c(()=>d("span",{class:"text-[1.2rem] font-medium"},"VPlus Admin \u2728\u2728\u2728",-1)),N=c(()=>d("div",null," VPlus Admin \u662F\u4E00\u6B3E\u57FA\u4E8EVue3 + TypeScript + ElementPlus \u7B49\u6280\u672F\u6808\u642D\u5EFA\u7684\u901A\u7528\u540E\u53F0\u7CFB\u7EDF\u6A21\u677F\u3002\u7ED3\u5408\u4E86\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u6808\uFF0C\u524D\u540E\u7AEF\u6743\u9650\u63A7\u5236\u3001\u7C92\u5B50\u5316\u6743\u9650\u63A7\u5236\u3001\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u4E3B\u9898\u914D\u7F6E\u7B49\u591A\u79CD\u529F\u80FD\u3002\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u7684\u642D\u5EFA\u4E00\u4E2A\u6709\u6A21\u6709\u6837\u7684\u57FA\u7840\u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u5E73\u53F0\u{1F389}\u{1F389}\u{1F389} ",-1)),T=c(()=>d("span",{class:"text-[1.2rem] font-medium"},"\u751F\u6210\u73AF\u5883\u4F9D\u8D56 \u{1F35E}\u{1F35E}\u{1F35E}",-1)),q=c(()=>d("span",{class:"text-[1.2rem] font-medium"},"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56 \u{1F4E6}\uFE0E \u{1F4E6}\uFE0E \u{1F4E6}\uFE0E",-1)),J=E({__name:"AboutIndex",setup(l){const{dependencies:_,devDependencies:b}=V,m=[],g=[];return Object.keys(_).forEach(t=>{const i={name:"",version:""};i.name=t,i.version=_[t],m.push(i)}),Object.keys(b).forEach(t=>{const i={name:"",version:""};i.name=t,i.version=b[t],g.push(i)}),(t,i)=>{const a=F,v=w,x=A;return p(),u("div",O,[r(a,{class:"box-card",header:"","body-style":{fontSize:"15px"},shadow:"hover"},{header:e(()=>[P]),default:e(()=>[N]),_:1}),r(a,{class:"box-card",header:"","body-style":{fontSize:"15px"},shadow:"hover"},{header:e(()=>[T]),default:e(()=>[r(x,{column:3,border:"",size:"large"},{default:e(()=>[(p(),u(h,null,f(m,s=>r(v,{"label-align":"center",align:"center",width:"150px",key:s.name},{label:e(()=>[o(n(s.name),1)]),default:e(()=>[o(" "+n(s.version),1)]),_:2},1024)),64))]),_:1})]),_:1}),r(a,{class:"box-card",header:"","body-style":{fontSize:"15px"},shadow:"hover"},{header:e(()=>[q]),default:e(()=>[r(x,{column:3,border:"",size:"large"},{default:e(()=>[(p(),u(h,null,f(g,s=>r(v,{"label-align":"center",align:"center",width:"150px",key:s.name},{label:e(()=>[o(n(s.name),1)]),default:e(()=>[o(" "+n(s.version),1)]),_:2},1024)),64))]),_:1})]),_:1})])}}});var G=y(J,[["__scopeId","data-v-3ccfb05d"],["__file","/home/runner/work/vue-plus-admin/vue-plus-admin/src/views/system/about/AboutIndex.vue"]]);export{G as default};
