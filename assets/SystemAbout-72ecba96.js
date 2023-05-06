import{c as h,a as o,b as U,d as R,e as V,i as W,f as Q,g as L,u as X,h as J,j as N,k as I,l as Y,m as Z,n as ee,o as r,p as oe,q as T,r as O,s as y,w,t as B,v as E,x as F,F as G,y as H,_ as te}from"./index-f3513e6e.js";import{g as ne}from"./get-slot-1efb97e5.js";function q(n,b="default",a=[]){const{children:s}=n;if(s!==null&&typeof s=="object"&&!Array.isArray(s)){const d=s[b];if(typeof d=="function")return d()}return a}const K="DESCRIPTION_ITEM_FLAG";function re(n){return typeof n=="object"&&n&&!Array.isArray(n)?n.type&&n.type[K]:!1}const ie=h([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),U("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[h("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),R("left-label-placement",[o("descriptions-table-content",[h("> *",{verticalAlign:"top"})])]),R("left-label-align",[h("th",{textAlign:"left"})]),R("center-label-align",[h("th",{textAlign:"center"})]),R("right-label-align",[h("th",{textAlign:"right"})]),R("bordered",[o("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[o("descriptions-table",[o("descriptions-table-row",[h("&:not(:last-child)",[o("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),o("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-content",[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),o("descriptions-header",`
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
 `,[V("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),V("label",`
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
 `))]),se=Object.assign(Object.assign({},J.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),le=L({name:"Descriptions",props:se,setup(n){const{mergedClsPrefixRef:b,inlineThemeDisabled:a}=X(n),s=J("Descriptions","-descriptions",ie,oe,n,b),d=N(()=>{const{size:i,bordered:p}=n,{common:{cubicBezierEaseInOut:l},self:{titleTextColor:e,thColor:u,thColorModal:v,thColorPopover:f,thTextColor:g,thFontWeight:x,tdTextColor:A,tdColor:t,tdColorModal:z,tdColorPopover:D,borderColor:m,borderColorModal:_,borderColorPopover:C,borderRadius:j,lineHeight:S,[I("fontSize",i)]:$,[I(p?"thPaddingBordered":"thPadding",i)]:k,[I(p?"tdPaddingBordered":"tdPadding",i)]:P}}=s.value;return{"--n-title-text-color":e,"--n-th-padding":k,"--n-td-padding":P,"--n-font-size":$,"--n-bezier":l,"--n-th-font-weight":x,"--n-line-height":S,"--n-th-text-color":g,"--n-td-text-color":A,"--n-th-color":u,"--n-th-color-modal":v,"--n-th-color-popover":f,"--n-td-color":t,"--n-td-color-modal":z,"--n-td-color-popover":D,"--n-border-radius":j,"--n-border-color":m,"--n-border-color-modal":_,"--n-border-color-popover":C}}),c=a?Y("descriptions",N(()=>{let i="";const{size:p,bordered:l}=n;return l&&(i+="a"),i+=p[0],i}),d,n):void 0;return{mergedClsPrefix:b,cssVars:a?void 0:d,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,compitableColumn:Z(n,["columns","column"]),inlineThemeDisabled:a}},render(){const n=this.$slots.default,b=n?ee(n()):[];b.length;const{compitableColumn:a,labelPlacement:s,labelAlign:d,size:c,bordered:i,title:p,cssVars:l,mergedClsPrefix:e,separator:u,onRender:v}=this;v==null||v();const f=b.filter(t=>re(t)),g={span:0,row:[],secondRow:[],rows:[]},A=f.reduce((t,z,D)=>{const m=z.props||{},_=f.length-1===D,C=["label"in m?m.label:q(z,"label")],j=[q(z)],S=m.span||1,$=t.span;t.span+=S;const k=m.labelStyle||m["label-style"]||this.labelStyle,P=m.contentStyle||m["content-style"]||this.contentStyle;if(s==="left")i?t.row.push(r("th",{class:`${e}-descriptions-table-header`,colspan:1,style:k},C),r("td",{class:`${e}-descriptions-table-content`,colspan:_?(a-$)*2+1:S*2-1,style:P},j)):t.row.push(r("td",{class:`${e}-descriptions-table-content`,colspan:_?(a-$)*2:S*2},r("span",{class:`${e}-descriptions-table-content__label`,style:k},[...C,u&&r("span",{class:`${e}-descriptions-separator`},u)]),r("span",{class:`${e}-descriptions-table-content__content`,style:P},j)));else{const M=_?(a-$)*2:S*2;t.row.push(r("th",{class:`${e}-descriptions-table-header`,colspan:M,style:k},C)),t.secondRow.push(r("td",{class:`${e}-descriptions-table-content`,colspan:M,style:P},j))}return(t.span>=a||_)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),s!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},g).rows.map(t=>r("tr",{class:`${e}-descriptions-table-row`},t));return r("div",{style:l,class:[`${e}-descriptions`,this.themeClass,`${e}-descriptions--${s}-label-placement`,`${e}-descriptions--${d}-label-align`,`${e}-descriptions--${c}-size`,i&&`${e}-descriptions--bordered`]},p||this.$slots.header?r("div",{class:`${e}-descriptions-header`},p||ne(this,"header")):null,r("div",{class:`${e}-descriptions-table-wrapper`},r("table",{class:`${e}-descriptions-table`},r("tbody",null,A))))}}),ae={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},ce=L({name:"DescriptionsItem",[K]:!0,props:ae,render(){return null}}),de="vadmire-admin",pe="0.0.0",be="VAdmire Admin 是一款基于 Vue3 + TypeScript + NaiveUI 等技术栈搭建的后台系统",ge={dev:"vite --mode development","build:mock":"vite build --mode development",build:"vite build --mode production",preview:"vite preview",lint:"eslint .","lint:fix":"eslint . --fix",release:"standard-version",prepare:"husky install",commit:"git-cz"},me={"@flypeng/tool":"^5.2.0","@vueuse/core":"^9.13.0","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12",axios:"^1.3.4",colord:"^2.9.3",echarts:"^5.4.2",mockjs:"^1.1.0","naive-ui":"^2.34.3",nprogress:"^0.2.0",pinia:"^2.0.33",swiper:"^9.1.1",vditor:"^3.9.1",vue:"^3.2.47","vue-router":"^4.1.6",xgplayer:"^2.32.2"},he={"@commitlint/cli":"^17.5.0","@commitlint/config-conventional":"^17.4.4","@flypeng/eslint-config":"0.0.11-beta.1","@iconify-json/ant-design":"^1.1.5","@iconify-json/ep":"^1.1.10","@iconify-json/fa":"^1.1.4","@iconify-json/ic":"^1.1.13","@iconify-json/line-md":"^1.1.23","@iconify-json/logos":"^1.1.23","@iconify-json/material-symbols":"^1.1.35","@iconify-json/mdi":"^1.1.50","@iconify-json/mdi-light":"^1.1.6","@iconify-json/noto":"^1.1.11","@iconify-json/openmoji":"^1.1.22","@iconify-json/ri":"^1.1.5","@iconify-json/tabler":"^1.1.68","@iconify-json/uil":"^1.1.4","@iconify-json/vscode-icons":"^1.1.22","@iconify/vue":"^4.1.0","@tailwindcss/typography":"^0.5.9","@types/mockjs":"^1.0.7","@types/node":"^18.15.6","@types/nprogress":"^0.2.0","@vitejs/plugin-vue":"^4.1.0",autoprefixer:"^10.4.14",commitizen:"^4.3.0",eslint:"^8.36.0",husky:"^8.0.3","lint-staged":"^13.2.0",postcss:"^8.4.21",sass:"^1.60.0","standard-version":"^9.5.0",tailwindcss:"^3.2.7",typescript:"^4.9.5","unplugin-auto-import":"^0.14.4","unplugin-icons":"^0.15.3","unplugin-vue-components":"^0.24.1",vite:"^4.2.1","vite-plugin-clear-console":"^0.2.2","vite-plugin-mock":"^2.9.6","vite-plugin-spa-loading":"^1.0.6","vue-tsc":"^1.2.0"},ue={commitizen:{path:"cz-conventional-changelog"}},ve={name:de,version:pe,private:!0,description:be,scripts:ge,dependencies:me,devDependencies:he,"lint-staged":{"src/*":"pnpm run lint:fix"},config:ue},fe={class:"space-y-2"},xe=L({__name:"SystemAbout",setup(n){const{name:b,version:a,description:s,dependencies:d,devDependencies:c}=ve,i=[],p=[];return Object.keys(d).forEach(l=>{const e={name:"",version:""};e.name=l,e.version=d[l],i.push(e)}),Object.keys(c).forEach(l=>{const e={name:"",version:""};e.name=l,e.version=c[l],p.push(e)}),(l,e)=>{const u=te,v=ce,f=le;return T(),O("div",fe,[y(u,{title:F(b),hoverable:""},{default:w(()=>[B(E(F(s)),1)]),_:1},8,["title"]),y(u,{title:"开发环境相关依赖",hoverable:""},{default:w(()=>[y(f,{"label-placement":"left",bordered:""},{default:w(()=>[(T(),O(G,null,H(p,(g,x)=>y(v,{key:x,label:g.name},{default:w(()=>[B(E(g.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),y(u,{title:"生成环境相关依赖",hoverable:""},{default:w(()=>[y(f,{"label-placement":"left",bordered:""},{default:w(()=>[(T(),O(G,null,H(i,(g,x)=>y(v,{key:x,label:g.name},{default:w(()=>[B(E(g.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})])}}});export{xe as default};
