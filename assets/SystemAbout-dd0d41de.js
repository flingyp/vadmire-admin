import{c as g,a as o,b as U,d as A,e as M,i as W,f as Q,g as V,u as X,h as J,j as N,k as I,l as Y,m as Z,n as ee,o as r,p as oe,q as T,r as O,s as y,w,t as B,v as E,x as F,F as G,y as H,_ as te}from"./index-6c076a88.js";function ne(n,d="default",i=[]){const l=n.$slots[d];return l===void 0?i:l()}function q(n,d="default",i=[]){const{children:s}=n;if(s!==null&&typeof s=="object"&&!Array.isArray(s)){const l=s[d];if(typeof l=="function")return l()}return i}const K="DESCRIPTION_ITEM_FLAG";function re(n){return typeof n=="object"&&n&&!Array.isArray(n)?n.type&&n.type[K]:!1}const ie=g([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),U("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[g("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),A("left-label-placement",[o("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),A("left-label-align",[g("th",{textAlign:"left"})]),A("center-label-align",[g("th",{textAlign:"center"})]),A("right-label-align",[g("th",{textAlign:"right"})]),A("bordered",[o("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[o("descriptions-table",[o("descriptions-table-row",[g("&:not(:last-child)",[o("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),o("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),o("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),o("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[o("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[o("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[o("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),o("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[M("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),M("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),W(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Q(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),se=Object.assign(Object.assign({},J.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),le=V({name:"Descriptions",props:se,setup(n){const{mergedClsPrefixRef:d,inlineThemeDisabled:i}=X(n),s=J("Descriptions","-descriptions",ie,oe,n,d),l=N(()=>{const{size:c,bordered:b}=n,{common:{cubicBezierEaseInOut:a},self:{titleTextColor:e,thColor:h,thColorModal:f,thColorPopover:v,thTextColor:m,thFontWeight:x,tdTextColor:R,tdColor:t,tdColorModal:z,tdColorPopover:D,borderColor:u,borderColorModal:_,borderColorPopover:C,borderRadius:j,lineHeight:S,[I("fontSize",c)]:$,[I(b?"thPaddingBordered":"thPadding",c)]:k,[I(b?"tdPaddingBordered":"tdPadding",c)]:P}}=s.value;return{"--n-title-text-color":e,"--n-th-padding":k,"--n-td-padding":P,"--n-font-size":$,"--n-bezier":a,"--n-th-font-weight":x,"--n-line-height":S,"--n-th-text-color":m,"--n-td-text-color":R,"--n-th-color":h,"--n-th-color-modal":f,"--n-th-color-popover":v,"--n-td-color":t,"--n-td-color-modal":z,"--n-td-color-popover":D,"--n-border-radius":j,"--n-border-color":u,"--n-border-color-modal":_,"--n-border-color-popover":C}}),p=i?Y("descriptions",N(()=>{let c="";const{size:b,bordered:a}=n;return a&&(c+="a"),c+=b[0],c}),l,n):void 0;return{mergedClsPrefix:d,cssVars:i?void 0:l,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,compitableColumn:Z(n,["columns","column"]),inlineThemeDisabled:i}},render(){const n=this.$slots.default,d=n?ee(n()):[];d.length;const{compitableColumn:i,labelPlacement:s,labelAlign:l,size:p,bordered:c,title:b,cssVars:a,mergedClsPrefix:e,separator:h,onRender:f}=this;f==null||f();const v=d.filter(t=>re(t)),m={span:0,row:[],secondRow:[],rows:[]},R=v.reduce((t,z,D)=>{const u=z.props||{},_=v.length-1===D,C=["label"in u?u.label:q(z,"label")],j=[q(z)],S=u.span||1,$=t.span;t.span+=S;const k=u.labelStyle||u["label-style"]||this.labelStyle,P=u.contentStyle||u["content-style"]||this.contentStyle;if(s==="left")c?t.row.push(r("th",{class:`${e}-descriptions-table-header`,colspan:1,style:k},C),r("td",{class:`${e}-descriptions-table-content`,colspan:_?(i-$)*2+1:S*2-1,style:P},j)):t.row.push(r("td",{class:`${e}-descriptions-table-content`,colspan:_?(i-$)*2:S*2},r("span",{class:`${e}-descriptions-table-content__label`,style:k},[...C,h&&r("span",{class:`${e}-descriptions-separator`},h)]),r("span",{class:`${e}-descriptions-table-content__content`,style:P},j)));else{const L=_?(i-$)*2:S*2;t.row.push(r("th",{class:`${e}-descriptions-table-header`,colspan:L,style:k},C)),t.secondRow.push(r("td",{class:`${e}-descriptions-table-content`,colspan:L,style:P},j))}return(t.span>=i||_)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),s!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},m).rows.map(t=>r("tr",{class:`${e}-descriptions-table-row`},t));return r("div",{style:a,class:[`${e}-descriptions`,this.themeClass,`${e}-descriptions--${s}-label-placement`,`${e}-descriptions--${l}-label-align`,`${e}-descriptions--${p}-size`,c&&`${e}-descriptions--bordered`]},b||this.$slots.header?r("div",{class:`${e}-descriptions-header`},b||ne(this,"header")):null,r("div",{class:`${e}-descriptions-table-wrapper`},r("table",{class:`${e}-descriptions-table`},r("tbody",null,R))))}}),ce={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},ae=V({name:"DescriptionsItem",[K]:!0,props:ce,render(){return null}}),de="VAdmire Admin",pe="0.0.0",be="VAdmire Admin 是一款基于 Vue3 + TypeScript + NaiveUI 等技术栈搭建的后台系统",me={dev:"vite --mode development","build:mock":"vite build --mode development",build:"vite build --mode production",preview:"vite preview",lint:"eslint .","lint:fix":"eslint . --fix",release:"standard-version",prepare:"husky install",commit:"git-cz"},ue={"@flypeng/tool":"^5.1.0","@vueuse/core":"^9.13.0",axios:"^1.3.3",colord:"^2.9.3",mockjs:"^1.1.0","naive-ui":"^2.34.3",nprogress:"^0.2.0",pinia:"^2.0.31",swiper:"^9.0.5",vue:"^3.2.47","vue-router":"^4.1.6","vue3-tabs-chrome":"^0.3.2"},ge={"@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@flypeng/eslint-config":"^0.0.9","@iconify-json/ant-design":"^1.1.5","@iconify-json/ep":"^1.1.9","@iconify-json/fa":"^1.1.4","@iconify-json/ic":"^1.1.13","@iconify-json/line-md":"^1.1.23","@iconify-json/logos":"^1.1.23","@iconify-json/material-symbols":"^1.1.32","@iconify-json/mdi":"^1.1.47","@iconify-json/mdi-light":"^1.1.6","@iconify-json/noto":"^1.1.11","@iconify-json/openmoji":"^1.1.22","@iconify-json/ri":"^1.1.5","@iconify-json/tabler":"^1.1.61","@iconify-json/uil":"^1.1.4","@iconify-json/vscode-icons":"^1.1.22","@iconify/vue":"^4.1.0","@types/mockjs":"^1.0.7","@types/node":"^18.14.0","@types/nprogress":"^0.2.0","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",commitizen:"^4.3.0",eslint:"^8.34.0",husky:"^8.0.3","lint-staged":"^13.1.2",postcss:"^8.4.21",sass:"^1.58.3","standard-version":"^9.5.0",tailwindcss:"^3.2.7",typescript:"^4.9.5","unplugin-auto-import":"^0.14.4","unplugin-icons":"^0.15.3","unplugin-vue-components":"^0.24.0",vite:"^4.1.3","vite-plugin-mock":"^2.9.6","vue-tsc":"^1.1.5"},he={commitizen:{path:"cz-conventional-changelog"}},fe={name:de,version:pe,private:!0,description:be,scripts:me,dependencies:ue,devDependencies:ge,"lint-staged":{"src/*":"pnpm run lint:fix"},config:he},ve={class:"space-y-2"},we=V({__name:"SystemAbout",setup(n){const{name:d,version:i,description:s,dependencies:l,devDependencies:p}=fe,c=[],b=[];return Object.keys(l).forEach(a=>{const e={name:"",version:""};e.name=a,e.version=l[a],c.push(e)}),Object.keys(p).forEach(a=>{const e={name:"",version:""};e.name=a,e.version=p[a],b.push(e)}),(a,e)=>{const h=te,f=ae,v=le;return T(),O("div",ve,[y(h,{title:F(d),hoverable:""},{default:w(()=>[B(E(F(s)),1)]),_:1},8,["title"]),y(h,{title:"开发环境相关依赖",hoverable:""},{default:w(()=>[y(v,{"label-placement":"left",bordered:""},{default:w(()=>[(T(),O(G,null,H(b,(m,x)=>y(f,{key:x,label:m.name},{default:w(()=>[B(E(m.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),y(h,{title:"生成环境相关依赖",hoverable:""},{default:w(()=>[y(v,{"label-placement":"left",bordered:""},{default:w(()=>[(T(),O(G,null,H(c,(m,x)=>y(f,{key:x,label:m.name},{default:w(()=>[B(E(m.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})])}}});export{we as default};
