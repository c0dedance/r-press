import{hydrateRoot as H}from"react-dom/client";import d,{createContext as X}from"react";import{jsx as n,jsxs as l,Fragment as h}from"react/jsx-runtime";function V(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var M={exports:{}},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",J=q,z=J;function P(){}function D(){}D.resetWarningCache=P;var W=function(){function r(y,p,s,o,u,A){if(A!==z){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}r.isRequired=r;function e(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:D,resetWarningCache:P};return a.PropTypes=a,a};M.exports=W();var G=M.exports;const c=V(G);var F={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"};Object.keys(F).map(function(r){return F[r]});var g={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.keys(g).reduce(function(r,e){return r[g[e]]=e,r},{});d.createContext({});var U=c.shape({setHelmet:c.func,helmetInstances:c.shape({get:c.func,add:c.func,remove:c.func})});c.shape({helmet:c.shape()}),c.node.isRequired;U.isRequired;c.object,c.object,c.oneOfType([c.arrayOf(c.node),c.node]),c.string,c.bool,c.bool,c.object,c.arrayOf(c.object),c.arrayOf(c.object),c.arrayOf(c.object),c.func,c.arrayOf(c.object),c.arrayOf(c.object),c.string,c.object,c.string,c.bool,c.object;const Y="modulepreload",K=function(r){return"/"+r},N={},t=function(e,a,y){if(!a||a.length===0)return e();const p=document.getElementsByTagName("link");return Promise.all(a.map(s=>{if(s=K(s),s in N)return;N[s]=!0;const o=s.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(!!y)for(let B=p.length-1;B>=0;B--){const m=p[B];if(m.href===s&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${u}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Y,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((B,m)=>{i.addEventListener("load",B),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Q="配置站点",Z=[{id:"创建配置文件",text:"创建配置文件",depth:2},{id:"导航栏配置",text:"导航栏配置",depth:2},{id:"侧边栏配置",text:"侧边栏配置",depth:2}],ee=void 0;function f(r){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",span:"span",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},r.components);return l(h,{children:[l(e.h1,{id:"配置站点",children:[n(e.a,{className:"header-anchor",href:"#配置站点",children:"#"}),"配置站点"]}),`
`,l(e.h2,{id:"创建配置文件",children:[n(e.a,{className:"header-anchor",href:"#创建配置文件",children:"#"}),"创建配置文件"]}),`
`,n(e.p,{children:"如果你使用 脚手架 创建项目，那么你将得到下面的模板目录结构:"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#56B6C2"},children:"."})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"docs"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"article"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"getting-started.md"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"islands-arch.md"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"public"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"logo.png"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"rpress.config.ts"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"index.md"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"package.json"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"pnpm-lock.yaml"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"README.md"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:["模板中已经包含了配置文件了，即 ",n(e.code,{children:"docs/rpress.config.ts"})," 。因此，你也就不需要手动创建配置文件了。你可以跳过这一小节剩下的内容。"]}),`
`,l(e.p,{children:["如果你选择手动初始化项目，在没有任何配置的情况，页面是非常简陋的，没有导航，也没有侧边栏。但是，通过 ",n(e.code,{children:"rpress.config.ts"})," 文件，你可以配置并自定义站点的各种信息。"]}),`
`,n(e.p,{children:"例如，在上一小节你手动创建的初始化项目中，你可以添加配置文件，项目结构如下："}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#56B6C2"},children:"."})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"├─"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"docs"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"  "}),n(e.span,{style:{color:"#98C379"},children:"├─"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"rpress.config.ts"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"  "}),n(e.span,{style:{color:"#98C379"},children:"└─"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"index.md"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"└─"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"package.json"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:["你可以尝试在 ",n(e.code,{children:"config.ts"})," 中添加以下配置代码:"]}),`
`,l(e.div,{className:"language-ts",children:[n(e.span,{className:"lang",children:"ts"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"import"}),n(e.span,{style:{color:"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#E06C75"},children:"defineConfig"}),n(e.span,{style:{color:"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#C678DD"},children:"from"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"'r-press'"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"export"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#C678DD"},children:"default"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#61AFEF"},children:"defineConfig"}),n(e.span,{style:{color:"#ABB2BF"},children:"({"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"  "}),n(e.span,{style:{color:"#E06C75"},children:"title"}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:"'my-site'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"});"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,n(e.p,{children:"另外，关于配置文件有以下两个注意事项:"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[`
`,l(e.ol,{children:[`
`,l(e.li,{children:["Rpress 支持 ",n(e.code,{children:".js"}),"、",n(e.code,{children:".ts"})," 文件作为配置文件。但是推荐使用 TypeScript 配置，因为可以使用",n(e.code,{children:"defineConfig"})," 获取类型提示。"]}),`
`]}),`
`]}),`
`,l(e.li,{children:[`
`,l(e.ol,{start:"2",children:[`
`,l(e.li,{children:["配置文件应该有一个默认导出，即默认导出一个 ",n(e.code,{children:"SiteConfig"})," 对象。"]}),`
`]}),`
`]}),`
`]}),`
`,l(e.p,{children:["在上面的例子中，我们将站点的 ",n(e.code,{children:"title"})," 设置为 ",n(e.code,{children:"my-site"}),"，然后你可以通过 ",n(e.code,{children:"pnpm dev"})," 运行启动开发服务器。你会看到站点的标题已更改为 ",n(e.code,{children:"my-site"}),"。这意味着你已经唤醒了你的第一个站点配置，nice!"]}),`
`,n(e.p,{children:"在下一节中，我们将介绍导航和侧边栏配置，这对于文档站点是相当重要的。"}),`
`,l(e.h2,{id:"导航栏配置",children:[n(e.a,{className:"header-anchor",href:"#导航栏配置",children:"#"}),"导航栏配置"]}),`
`,l(e.p,{children:[n(e.code,{children:"nav"})," 字段用来配置导航栏, 举个 🌰:"]}),`
`,l(e.div,{className:"language-ts",children:[n(e.span,{className:"lang",children:"ts"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"import"}),n(e.span,{style:{color:"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#E06C75"},children:"defineConfig"}),n(e.span,{style:{color:"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#C678DD"},children:"from"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"'r-press'"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"export"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#C678DD"},children:"default"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#61AFEF"},children:"defineConfig"}),n(e.span,{style:{color:"#ABB2BF"},children:"({"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"  "}),n(e.span,{style:{color:"#E06C75"},children:"themeConfig"}),n(e.span,{style:{color:"#ABB2BF"},children:": {"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"    "}),n(e.span,{style:{color:"#E06C75"},children:"nav"}),n(e.span,{style:{color:"#ABB2BF"},children:": ["})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"      {"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"        "}),n(e.span,{style:{color:"#E06C75"},children:"text"}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:"'Home'"}),n(e.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"        "}),n(e.span,{style:{color:"#E06C75"},children:"link"}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:"'/'"}),n(e.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"      }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"    ]"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"});"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"侧边栏配置",children:[n(e.a,{className:"header-anchor",href:"#侧边栏配置",children:"#"}),"侧边栏配置"]}),`
`,l(e.p,{children:[n(e.code,{children:"sidebar"})," 字段可以用来配置侧边栏，举个 🌰:"]}),`
`,l(e.div,{className:"language-ts",children:[n(e.span,{className:"lang",children:"ts"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"import"}),n(e.span,{style:{color:"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#E06C75"},children:"defineConfig"}),n(e.span,{style:{color:"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#C678DD"},children:"from"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"'islandjs'"}),n(e.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"export"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#C678DD"},children:"default"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#61AFEF"},children:"defineConfig"}),n(e.span,{style:{color:"#ABB2BF"},children:"({"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"  "}),n(e.span,{style:{color:"#E06C75"},children:"themeConfig"}),n(e.span,{style:{color:"#ABB2BF"},children:": {"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"    "}),n(e.span,{style:{color:"#E06C75"},children:"sidebar"}),n(e.span,{style:{color:"#ABB2BF"},children:": {"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"      "}),n(e.span,{style:{color:"#98C379"},children:"'/guide/'"}),n(e.span,{style:{color:"#ABB2BF"},children:": ["})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"        {"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"          "}),n(e.span,{style:{color:"#E06C75"},children:"text"}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:"'Guide'"}),n(e.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"          "}),n(e.span,{style:{color:"#E06C75"},children:"items"}),n(e.span,{style:{color:"#ABB2BF"},children:": ["})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"            {"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"              "}),n(e.span,{style:{color:"#E06C75"},children:"text"}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:"'Getting Started'"}),n(e.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"              "}),n(e.span,{style:{color:"#E06C75"},children:"link"}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:"'/guide/getting-started'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"            }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"          ]"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"        }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"      ]"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"    }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"});"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,n(e.p,{children:"对于以上的配置选项，脚手架模板中已经有了一些默认的配置，你可以直接使用。但同时，你也可以根据自己的需求进行修改，使其满足你的需求。"})]})}function j(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(f,r)})):f(r)}const ne=Object.freeze(Object.defineProperty({__proto__:null,default:j,frontmatter:ee,title:Q,toc:Z},Symbol.toStringTag,{value:"Module"})),le="约定式路由",re=[{id:"什么是约定式路由",text:"什么是约定式路由",depth:2},{id:"映射规则",text:"映射规则",depth:2}],ce=void 0;function b(r){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",span:"span",pre:"pre",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},r.components);return l(h,{children:[l(e.h1,{id:"约定式路由",children:[n(e.a,{className:"header-anchor",href:"#约定式路由",children:"#"}),"约定式路由"]}),`
`,l(e.h2,{id:"什么是约定式路由",children:[n(e.a,{className:"header-anchor",href:"#什么是约定式路由",children:"#"}),"什么是约定式路由"]}),`
`,n(e.p,{children:"Rpress 使用的是文件系统路由，页面的文件路径会简单的映射为路由路径，这样会让整个项目的路由非常直观。"}),`
`,l(e.p,{children:["例如，如果在 ",n(e.code,{children:"docs"})," 目录中有一个名为 ",n(e.code,{children:"foo.md"})," 的文件，则该文件的路由路径将是 ",n(e.code,{children:"/foo"}),"。"]}),`
`,l(e.h2,{id:"映射规则",children:[n(e.a,{className:"header-anchor",href:"#映射规则",children:"#"}),"映射规则"]}),`
`,n(e.p,{children:"Island.js 会自动扫描根目录和所有子目录，并将文件路径映射到路由路径。例如，如果你有以下的文件结构："}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#61AFEF"},children:"docs"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"foo"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"bar.md"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"foo.md"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["在之前的入门项目中，启动脚本是 ",n(e.code,{children:"r-press dev docs"}),"，所以根目录是 ",n(e.code,{children:"docs"}),"。"]}),`
`]}),`
`,l(e.p,{children:["那么 ",n(e.code,{children:"bar.md"})," 的路由路径会是 ",n(e.code,{children:"/foo/bar"}),"，",n(e.code,{children:"foo.md"})," 的路由路径会是 ",n(e.code,{children:"/foo"}),"。"]}),`
`,n(e.p,{children:"具体映射规则如下："}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"文件路径"}),n(e.th,{children:"路由路径"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"index.md"})}),n(e.td,{children:n(e.code,{children:"/"})})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"/foo.md"})}),n(e.td,{children:n(e.code,{children:"/foo"})})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"/foo/bar.md"})}),n(e.td,{children:n(e.code,{children:"/foo/bar"})})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"/zoo/index.md"})}),n(e.td,{children:n(e.code,{children:"/zoo"})})]})]})]})]})}function R(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(b,r)})):b(r)}const se=Object.freeze(Object.defineProperty({__proto__:null,default:R,frontmatter:ce,title:le,toc:re},Symbol.toStringTag,{value:"Module"})),ae="快速开始",oe=[{id:"为什么选择-rpress",text:"为什么选择 Rpress?",depth:2},{id:"1-初始化项目",text:"1. 初始化项目",depth:2},{id:"使用-create-rpress-脚手架",text:"使用 create-rpress 脚手架",depth:3},{id:"手动安装",text:"手动安装",depth:3},{id:"2-启动-dev-server",text:"2. 启动 Dev Server",depth:2},{id:"3-生产环境构建",text:"3. 生产环境构建",depth:2},{id:"4-本地预览产物",text:"4. 本地预览产物",depth:2}],ie=void 0;function C(r){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",code:"code",del:"del",h3:"h3",ol:"ol",div:"div",span:"span",pre:"pre"},r.components);return l(h,{children:[l(e.h1,{id:"快速开始",children:[n(e.a,{className:"header-anchor",href:"#快速开始",children:"#"}),"快速开始"]}),`
`,l(e.h2,{id:"为什么选择-rpress",children:[n(e.a,{className:"header-anchor",href:"#为什么选择-rpress",children:"#"}),"为什么选择 Rpress?"]}),`
`,l(e.p,{children:["🏝️ Rpress 是一个基于 Vite、React 和 MDX 的静态站点生成器。它的特点是",n(e.strong,{children:"简单"}),"、",n(e.strong,{children:"强大"}),"且",n(e.strong,{children:"高性能"}),"，旨在帮助你以最少的配置专注于编写和部署静态站点。它主要具有以下功能："]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.strong,{children:"开发体验好"}),": 基于 Vite 进行构建，启动和热更新速度极快。"]}),`
`,l(e.li,{children:[n(e.strong,{children:"语法灵活"}),": 内置 MDX 支持，也就是说你可以在 Markdown 中使用 React 组件。"]}),`
`,l(e.li,{children:[n(e.strong,{children:"高性能"}),": 基于",n(e.a,{href:"https://jasonformat.com/islands-architecture/",children:"孤岛架构"}),", 实现了 Partial Hydration，意味着更少的客户端 JavaScript 和更少的运行时开销。"]}),`
`,l(e.li,{children:[n(e.strong,{children:"功能强大"}),": 默认主题内置了",n(e.code,{children:"夜间模式"}),"、",n(e.code,{children:"Home 主页"}),"等等能力。"]}),`
`]}),`
`,n(e.p,{children:"接下来，我们将从零开始搭建一个基于 Rpress 的文档站点。"}),`
`,l(e.h2,{id:"1-初始化项目",children:[n(e.a,{className:"header-anchor",href:"#1-初始化项目",children:"#"}),"1. 初始化项目"]}),`
`,l(e.p,{children:["Rpress 有如下两种安装方式，你只需要选择一种即可。",l(e.del,{children:["我们推荐使用 ",n(e.code,{children:"create-rpress"})," 脚手架，因为它可以帮助你快速简单地安装 Rpress 并搭建网站框架。"]})]}),`
`,l(e.h3,{id:"使用-create-rpress-脚手架",children:[n(e.a,{className:"header-anchor",href:"#使用-create-rpress-脚手架",children:"#"}),"使用 ",n(e.code,{children:"create-rpress"})," 脚手架"]}),`
`,n(e.p,{children:"敬请期待..."}),`
`,l(e.h3,{id:"手动安装",children:[n(e.a,{className:"header-anchor",href:"#手动安装",children:"#"}),"手动安装"]}),`
`,l(e.ol,{children:[`
`,l(e.li,{children:[`
`,n(e.p,{children:"创建并进入一个新目录"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"$"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"mkdir"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"rpress-docs"}),n(e.span,{style:{color:"#ABB2BF"},children:" && "}),n(e.span,{style:{color:"#56B6C2"},children:"cd"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"rpress-docs"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`]}),`
`,l(e.li,{children:[`
`,n(e.p,{children:"使用包管理器进行初始化"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"$"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"pnpm"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"init"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`]}),`
`,l(e.li,{children:[`
`,n(e.p,{children:"安装依赖"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"$"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"pnpm"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"i"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"r-press"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`]}),`
`,l(e.li,{children:[`
`,n(e.p,{children:"创建你的第一篇文档"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"$"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"mkdir"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"docs"}),n(e.span,{style:{color:"#ABB2BF"},children:" && "}),n(e.span,{style:{color:"#56B6C2"},children:"echo"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"'# Hello Rpress'"}),n(e.span,{style:{color:"#ABB2BF"},children:" > "}),n(e.span,{style:{color:"#98C379"},children:"docs/index.md"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line"})]})})]}),`
`]}),`
`,l(e.li,{children:[`
`,l(e.p,{children:["在 ",n(e.code,{children:"package.json"})," 中添加一些",n(e.code,{children:"scripts"})]}),`
`,n(e.p,{children:"这一步骤是可选的，推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。"}),`
`,l(e.div,{className:"language-json",children:[n(e.span,{className:"lang",children:"json"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"  "}),n(e.span,{style:{color:"#E06C75"},children:'"scripts"'}),n(e.span,{style:{color:"#ABB2BF"},children:": {"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"    "}),n(e.span,{style:{color:"#E06C75"},children:'"dev"'}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:'"r-press dev docs"'}),n(e.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"    "}),n(e.span,{style:{color:"#E06C75"},children:'"build"'}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:'"r-press build docs"'}),n(e.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"    "}),n(e.span,{style:{color:"#E06C75"},children:'"preview"'}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:'"r-press preview docs"'}),n(e.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`]}),`
`]}),`
`,l(e.h2,{id:"2-启动-dev-server",children:[n(e.a,{className:"header-anchor",href:"#2-启动-dev-server",children:"#"}),"2. 启动 Dev Server"]}),`
`,n(e.p,{children:"通过如下命令启动本地开发服务:"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"$"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"pnpm"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"dev"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:["这样 Rpress 将在 ",n(e.a,{href:"http://localhost:5173",children:"http://localhost:5173"})," 启动开发服务。"]}),`
`,n(e.p,{children:l(e.del,{children:["如果你使用了 ",n(e.code,{children:"create-rpress"})," 脚手架创建项目，那么你就能看到一个带有导航栏以及内容的页面（像这个文档一样）。"]})}),`
`,l(e.p,{children:["如果你选择了手动创建项目，那么你将会看到页面上打印的 ",n(e.code,{children:"Hello Rpress"}),"。这表示你已经成功地启动了 Rpress 的开发服务。"]}),`
`,l(e.h2,{id:"3-生产环境构建",children:[n(e.a,{className:"header-anchor",href:"#3-生产环境构建",children:"#"}),"3. 生产环境构建"]}),`
`,n(e.p,{children:"通过如下命令构建生产环境的产物:"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"$"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"pnpm"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"build"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:["默认情况下，Rpress 将会把产物打包到 ",n(e.code,{children:"docs/build"})," 目录。"]}),`
`,l(e.h2,{id:"4-本地预览产物",children:[n(e.a,{className:"header-anchor",href:"#4-本地预览产物",children:"#"}),"4. 本地预览产物"]}),`
`,n(e.p,{children:"通过如下命令启动本地预览服务:"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"$"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"pnpm"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"preview"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:["这样 Rpress 将在 ",n(e.a,{href:"http://localhost:5173",children:"http://localhost:5173"})," 启动预览服务。"]})]})}function O(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(C,r)})):C(r)}const de=Object.freeze(Object.defineProperty({__proto__:null,default:O,frontmatter:ie,title:ae,toc:oe},Symbol.toStringTag,{value:"Module"})),te="Islands architecture",he=[{id:"概念",text:"概念",depth:2},{id:"优势",text:"优势",depth:2},{id:"架构实现",text:"架构实现",depth:2},{id:"孤岛组件的使用",text:"孤岛组件的使用",depth:3},{id:"内部实现细节",text:"内部实现细节",depth:3}],pe=void 0;function _(r){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",img:"img",strong:"strong",h3:"h3",div:"div",span:"span",pre:"pre",ul:"ul",li:"li"},r.components);return l(h,{children:[l(e.h1,{id:"islands-architecture",children:[n(e.a,{className:"header-anchor",href:"#islands-architecture",children:"#"}),"Islands architecture"]}),`
`,l(e.p,{children:[n(e.code,{children:"孤岛架构"}),"的概念最初在 2019 年被 ",n(e.a,{href:"https://twitter.com/ksylor",children:"Katie Sylor-Miller"})," 提出，然后在 2021 年被 Preact 作者 ",n(e.code,{children:"Jason Miller"})," 在 ",n(e.a,{href:"https://jasonformat.com/islands-architecture/",children:"一篇文章"})," 中得到推广。"]}),`
`,n(e.p,{children:"这种架构是为了解决 MPA 应用的 hydration 问题，在上篇文章中已经分析过了。本小节主要侧重介绍孤岛架构的概念以及 Island.js 是如何实现这种架构的。"}),`
`,l(e.h2,{id:"概念",children:[n(e.a,{className:"header-anchor",href:"#概念",children:"#"}),"概念"]}),`
`,n(e.p,{children:"顾名思义，我们可以把整个页面想象成一片静态的海洋，将交互部分想象成孤岛。如下图所示："}),`
`,n(e.p,{children:n(e.img,{src:"https://res.cloudinary.com/wedding-website/image/upload/v1596766231/islands-architecture-1.png",alt:"islands-arch.png"})}),`
`,n(e.p,{children:"然后在 hydration 的过程中，我们只需要对于这些局部的孤岛组件执行 hydration 即可，这样就可以避免整个页面的 hydration，从而提升首屏性能。"}),`
`,l(e.h2,{id:"优势",children:[n(e.a,{className:"header-anchor",href:"#优势",children:"#"}),"优势"]}),`
`,l(e.p,{children:["孤岛架构让",n(e.code,{children:"hydration"}),"的颗粒度由应用降低到组件，我们通过控制组件的注水顺序、非交互组件不注水，让",n(e.strong,{children:"交互优先级较高的组件"}),"优先变得可交互，剩下的低优组件再慢慢",n(e.code,{children:"hydrate"}),"。在页面",n(e.code,{children:"hydrate"}),"完成前，重要的组件已经可交互了，借此就能降低",n(e.code,{children:"TTI"}),"指标。"]}),`
`,l(e.h2,{id:"架构实现",children:[n(e.a,{className:"header-anchor",href:"#架构实现",children:"#"}),"架构实现"]}),`
`,l(e.p,{children:["孤岛架构在 Rpress 中的实现包括三个部分：",n(e.code,{children:"server runtime"}),"、",n(e.code,{children:"build time"})," 和 ",n(e.code,{children:"client runtime"}),"。"]}),`
`,l(e.h3,{id:"孤岛组件的使用",children:[n(e.a,{className:"header-anchor",href:"#孤岛组件的使用",children:"#"}),"孤岛组件的使用"]}),`
`,n(e.p,{children:"在介绍架构的实现之前，我认为有必要先介绍一下孤岛组件的使用。在 Island.js 中，使用方式非常简单，如下面的代码所示："}),`
`,l(e.div,{className:"language-js",children:[n(e.span,{className:"lang",children:"js"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"import"}),n(e.span,{style:{color:"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#E06C75"},children:"Aside"}),n(e.span,{style:{color:"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#C678DD"},children:"from"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"'./Aside.tsx'"}),n(e.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"export"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#C678DD"},children:"function"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#61AFEF"},children:"Layout"}),n(e.span,{style:{color:"#ABB2BF"},children:"() {"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"  "}),n(e.span,{style:{color:"#C678DD"},children:"return"}),n(e.span,{style:{color:"#ABB2BF"},children:" <"}),n(e.span,{style:{color:"#E5C07B"},children:"Aside"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#D19A66",fontStyle:"italic"},children:"__island"}),n(e.span,{style:{color:"#ABB2BF"},children:" />;"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:["使用时只需要在组件中添加一个 ",n(e.code,{children:"__island"})," prop，然后组件就会自动被识别为孤岛组件。Rpress 只会在孤岛组件的客户端脚本和它们的 props 注入在客户端中。"]}),`
`,l(e.h3,{id:"内部实现细节",children:[n(e.a,{className:"header-anchor",href:"#内部实现细节",children:"#"}),"内部实现细节"]}),`
`,l(e.p,{children:[n(e.strong,{children:"1. Server runtime"}),"。服务器运行时负责服务端渲染，也就是组件到 HTML 的转换过程(renderToString)。这个阶段的主要任务是在 ",n(e.code,{children:"renderToString"})," 过程中收集孤岛组件信息。"]}),`
`,l(e.p,{children:["在 Rpress 中，我们使用 ",n(e.code,{children:"react/jsx-runtime"})," 来实现 jsx 的转换，所以我们需要在 ",n(e.code,{children:"react/jsx-runtime"})," 中劫持 jsx 函数，当发现组件中有 ",n(e.code,{children:"__island"})," prop 时，就会收集孤岛组件的信息。"]}),`
`,l(e.p,{children:[n(e.strong,{children:"2. Build time"}),"。构建时负责生成孤岛组件的客户端脚本并注入到 HTML 中。在构建时 Island.js 会生成三个 bundle："]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"Server bundle"}),"，用于服务端渲染。"]}),`
`,l(e.li,{children:[n(e.code,{children:"Client hydration bundle"}),"，用于客户端 hydration。"]}),`
`,l(e.li,{children:[n(e.code,{children:"Islands bundle"}),"，用于注册孤岛组件的客户端脚本，所有孤岛组件将会挂载在 ",n(e.code,{children:"window"})," 对象上。"]}),`
`]}),`
`,n(e.p,{children:"在 Rpress 中，收集完所有的孤岛组件后，会构造一个虚拟模块，作用是将所有的孤岛组件注册到 window 对象上，因此在客户端 hydration bundle 中，我们可以从 window 对象上获取到所有的孤岛组件，然后对其进行 hydration。"}),`
`,l(e.p,{children:[n(e.strong,{children:"3. Client runtime"}),"。客户端运行时主要是负责孤岛组件的 hydration，也就是将孤岛组件变得可以交互。"]}),`
`,n(e.p,{children:"下面是一些相关的实现代码:"}),`
`,l(e.p,{children:[n(e.a,{href:"https://github.com/c0dedance/r-press/blob/master/src/runtime/jsx-runtime.js",children:"jsx-runtime.js"}),": 拦截 jsx 运行时，收集孤岛组件信息。"]}),`
`,l(e.p,{children:[n(e.a,{href:"https://github.com/c0dedance/r-press/blob/master/src/node/babel-plugin-island.ts",children:"babel-plugin-island"}),": 注册孤岛组件文件路径的 babel 插件。"]}),`
`,l(e.p,{children:[n(e.a,{href:"https://github.com/c0dedance/r-press/blob/master/src/node/build.ts",children:"SSGBuilder"}),": 完整的构建时实现。"]}),`
`,l(e.p,{children:[n(e.a,{href:"https://github.com/c0dedance/r-press/blob/master/src/runtime/client-entry.tsx#L50",children:"client-entry"}),": 客户端运行时代码，主要是负责孤岛组件的 hydration。"]})]})}function I(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(_,r)})):_(r)}const Be=Object.freeze(Object.defineProperty({__proto__:null,default:I,frontmatter:pe,title:te,toc:he},Symbol.toStringTag,{value:"Module"})),ye="MPA 和 SPA 对比",me=[{id:"什么是-mpa-和-spa-",text:"什么是 MPA 和 SPA ?",depth:2},{id:"对比",text:"对比",depth:2},{id:"1-性能",text:"1. 性能",depth:3},{id:"2-seo",text:"2. SEO",depth:3},{id:"3-路由",text:"3. 路由",depth:3},{id:"4-状态管理",text:"4. 状态管理",depth:3},{id:"取舍",text:"取舍",depth:2},{id:"islands-架构引入",text:"Islands 架构引入",depth:2},{id:"islands-实现的框架",text:"Islands 实现的框架",depth:2}],ue=void 0;function k(r){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",strong:"strong"},r.components);return l(h,{children:[l(e.h1,{id:"mpa-和-spa-对比",children:[n(e.a,{className:"header-anchor",href:"#mpa-和-spa-对比",children:"#"}),"MPA 和 SPA 对比"]}),`
`,n(e.p,{children:"理解多页应用程序(MPA)和单页应用程序(SPA)的区别和取舍是理解 Islands 架构的关键，这也可以让你更好的使用 Rpress。"}),`
`,l(e.h2,{id:"什么是-mpa-和-spa-",children:[n(e.a,{className:"header-anchor",href:"#什么是-mpa-和-spa-",children:"#"}),"什么是 MPA 和 SPA ?"]}),`
`,n(e.p,{children:"MPA 和 SPA 是构建前端页面常见的两种方式。"}),`
`,n(e.p,{children:"MPA (Multi-page application) 即多页应用，是从服务器加载多个 HTML 页面的应用程序。每个页面都彼此独立，有自己的 URL。当单击 a 标签链接导航到另一个页面时，浏览器将向服务器发送请求并加载新页面。例如，传统的模板技术如 JSP、Python、PHP 等都是基于 MPA 的框架。"}),`
`,n(e.p,{children:"SPA (Single-page application) 即单页应用，它只有一个不包含具体页面内容的 HTML，当浏览器拿到这份 HTML 之后，会请求页面所需的 JavaScript 代码，通过执行 JavaScript 代码完成 DOM 树的构建和 DOM 的事件绑定，从而让页面可以交互。如现在使用的大多数 Vue、React 中后台应用都是 SPA 应用。"}),`
`,l(e.h2,{id:"对比",children:[n(e.a,{className:"header-anchor",href:"#对比",children:"#"}),"对比"]}),`
`,l(e.h3,{id:"1-性能",children:[n(e.a,{className:"header-anchor",href:"#1-性能",children:"#"}),"1. 性能"]}),`
`,n(e.p,{children:"在 MPA 中，服务器将响应完整的 HTML 页面给浏览器，但是 SPA 需要先请求客户端的 JS Bundle 然后执行 JS 以渲染页面。因此，MPA 中的页面的首屏加载性能比 SPA 更好。"}),`
`,n(e.p,{children:"但 SPA 在后续页面加载方面有更好的性能和体验。因为 SPA 在完成首屏加载之后，在访问其它的页面时只需要动态加载页面的一部分组件，而不是整个页面。而且，当页面发生跳转时，SPA 不会重新加载页面，对用户更友好。"}),`
`,l(e.h3,{id:"2-seo",children:[n(e.a,{className:"header-anchor",href:"#2-seo",children:"#"}),"2. SEO"]}),`
`,n(e.p,{children:"MPA 中服务端会针对每个页面返回完整的 HTML 内容，对 SEO 更加友好；而 SPA 的页面内容则需要执行 JS 才能拉取到，不利于 SEO。"}),`
`,l(e.h3,{id:"3-路由",children:[n(e.a,{className:"header-anchor",href:"#3-路由",children:"#"}),"3. 路由"]}),`
`,n(e.p,{children:"MPA 在浏览器侧其实不需要路由，每个页面都在服务端都有一份 URL 地址，浏览器拿到 URL 直接请求服务端即可。"}),`
`,n(e.p,{children:"但 SPA 则不同，它需要 JS 掌管后续所有路由跳转的逻辑，因此会引入一些路由方案来管理前端的路由，比如基于 hashchange 事件或者浏览器 history API 来实现。"}),`
`,l(e.h3,{id:"4-状态管理",children:[n(e.a,{className:"header-anchor",href:"#4-状态管理",children:"#"}),"4. 状态管理"]}),`
`,n(e.p,{children:"除了路由，SPA 另外一个复杂的点在于状态管理。SPA 当中所有路由的状态都是由 JS 进行管理，在不同的路由进行跳转时通过 JS 代码进行一些状态的流转，在页面的规模越来越大的时候，状态管理就变得越来越复杂了。因此，社区也诞生了不少的状态管理方案，如传统的 Redux、社区新秀 Valtio、Zustand 包括字节自研的 Reduck，都是为了解决 SPA 状态管理的问题，一方面降低操作的复杂度、另一方面引入一些规范和限制(比如 Redux 中的 action 机制)来提高项目可维护性。"}),`
`,l(e.h2,{id:"取舍",children:[n(e.a,{className:"header-anchor",href:"#取舍",children:"#"}),"取舍"]}),`
`,n(e.p,{children:"总而言之，MPA 有更好的首屏性能，SPA 在后续页面的访问中有更好的性能和体验，但 SPA 也带来了更高的工程复杂度、略差的首屏性能和 SEO。这样就需要在不同的应用场景中做一些取舍。"}),`
`,n(e.p,{children:"不过，MPA 和 SPA 也并不是完全割裂的，两者也是能够有所结合的，比如 SSR/SSG 同构方案就是一个典型的体现，首先框架侧会在服务端生成完整的 HTML 内容，并且同时注入客户端所需要的 SPA 脚本。这样浏览器会拿到完整的 HTML 内容，然后执行客户端的脚本事件的绑定(这个过程也叫 hydrate)，后续路由的跳转由 JS 来掌管。当下很多的框架都是采用这样的方案，比如 Next.js、Gatsby。"}),`
`,l(e.h2,{id:"islands-架构引入",children:[n(e.a,{className:"header-anchor",href:"#islands-架构引入",children:"#"}),"Islands 架构引入"]}),`
`,n(e.p,{children:"但实际上，把 MPA 和 SPA 结合的方案也并不是完美无缺的，主要的问题在于这类方案仍然会下载全量的客户端 JS 及执行全量的组件 Hydrate 过程，造成页面的首屏 TTI 劣化。"}),`
`,n(e.p,{children:"我们可以试想对于一个文档类型的站点，其实里面的大多数组件是不需要交互的，主要以静态页面的渲染为主，因此直接采用 MPA 方案是一个比 MPA + SPA 更好的一个选择。进一步讲，对于更多的轻交互、重内容的应用场景，MPA 也依然是一个更好的方案。"}),`
`,l(e.p,{children:["由于页面中有时仍然不可避免的需要一些交互的逻辑，那放在 MPA 中如何来完成呢？这就是 Islands 架构所要解决的问题。你可以下一小节",n(e.a,{href:"/guide/islands-arch",children:"孤岛架构"}),"了解更多细节。"]}),`
`,l(e.h2,{id:"islands-实现的框架",children:[n(e.a,{className:"header-anchor",href:"#islands-实现的框架",children:"#"}),"Islands 实现的框架"]}),`
`,l(e.p,{children:["对于",n(e.code,{children:"Astro"}),"，孤岛架构适用的对象是组件。而在",n(e.code,{children:"Qwik"}),"中，孤岛架构最细的粒度是",n(e.strong,{children:"组件中的某个方法"}),"。"]})]})}function T(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(k,r)})):k(r)}const Ae=Object.freeze(Object.defineProperty({__proto__:null,default:T,frontmatter:ue,title:ye,toc:me},Symbol.toStringTag,{value:"Module"})),Fe="静态资源处理",ge=[{id:"公共资源",text:"公共资源",depth:2}],Ne=void 0;function E(r){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",span:"span",pre:"pre"},r.components);return l(h,{children:[l(e.h1,{id:"静态资源处理",children:[n(e.a,{className:"header-anchor",href:"#静态资源处理",children:"#"}),"静态资源处理"]}),`
`,l(e.h2,{id:"公共资源",children:[n(e.a,{className:"header-anchor",href:"#公共资源",children:"#"}),"公共资源"]}),`
`,l(e.p,{children:["在开发环境中，你可以把你的静态资源放在 ",n(e.code,{children:"public"})," 目录中，Rpress 将自动在 ",n(e.code,{children:"public"}),` 目录寻找资源。在生产环境中，
Rpress 会将 `,n(e.code,{children:"public"})," 目录中的所有文件复制到产物目录（",n(e.code,{children:"build"}),"）。"]}),`
`,n(e.p,{children:"比如:"}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#61AFEF"},children:"docs"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"public"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"logo.png"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:["在生产环境构建后，Rpress 将会在 ",n(e.code,{children:"build"})," 目录下生成 ",n(e.code,{children:"logo.png"})," 文件："]}),`
`,l(e.div,{className:"language-bash",children:[n(e.span,{className:"lang",children:"bash"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#61AFEF"},children:"docs"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"public"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"logo.png"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"├──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"build"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"logo.png"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"index.html"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"│"}),n(e.span,{style:{color:"#ABB2BF"},children:"   "}),n(e.span,{style:{color:"#98C379"},children:"└──"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"..."})]}),`
`,n(e.span,{className:"line"})]})})]})]})}function w(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(E,r)})):E(r)}const fe=Object.freeze(Object.defineProperty({__proto__:null,default:w,frontmatter:Ne,title:Fe,toc:ge},Symbol.toStringTag,{value:"Module"})),be="使用 MDX",Ce=[{id:"markdown",text:"Markdown",depth:2},{id:"使用组件",text:"使用组件",depth:2},{id:"front-matter",text:"Front Matter",depth:2}],_e={title:"使用 MDX"};function v(r){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",span:"span",pre:"pre",code:"code",blockquote:"blockquote"},r.components);return l(h,{children:[l(e.h1,{id:"使用-mdx",children:[n(e.a,{className:"header-anchor",href:"#使用-mdx",children:"#"}),"使用 MDX"]}),`
`,l(e.p,{children:["Rpress 支持 ",n(e.a,{href:"https://mdxjs.com/",children:"Mdx"}),"，这是一种功能强大的内容开发方式，你可以在 Markdown 文件中导入和使用 React 组件。"]}),`
`,l(e.h2,{id:"markdown",children:[n(e.a,{className:"header-anchor",href:"#markdown",children:"#"}),"Markdown"]}),`
`,n(e.p,{children:"MDX 是 Markdown 的超集，这意味着可以像往常一样编写 Markdown 文件。例如："}),`
`,l(e.div,{className:"language-md",children:[n(e.span,{className:"lang",children:"md"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#E06C75"},children:"# Hello World"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"使用组件",children:[n(e.a,{className:"header-anchor",href:"#使用组件",children:"#"}),"使用组件"]}),`
`,l(e.p,{children:["当你想在 Markdown 文件中使用 React 组件时，你应该使用 ",n(e.code,{children:".mdx"})," 扩展名来命名你的文件。例如："]}),`
`,l(e.div,{className:"language-mdx",children:[n(e.span,{className:"lang",children:"mdx"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ABB2BF"},children:"// docs/index.mdx"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#C678DD"},children:"import"}),n(e.span,{style:{color:"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#E06C75"},children:"CustomComponent"}),n(e.span,{style:{color:"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#C678DD"},children:"from"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"'./custom'"}),n(e.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"# "}),n(e.span,{style:{color:"#E06C75"},children:"Hello"}),n(e.span,{style:{color:"#ABB2BF"},children:" "}),n(e.span,{style:{color:"#E06C75"},children:"World"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"<"}),n(e.span,{style:{color:"#E5C07B"},children:"CustomComponent"}),n(e.span,{style:{color:"#ABB2BF"},children:" />"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"front-matter",children:[n(e.a,{className:"header-anchor",href:"#front-matter",children:"#"}),"Front Matter"]}),`
`,n(e.p,{children:"你可以在 Markdown 文件的开头添加 Front Matter，它是一个 YAML 格式的对象，用于定义一些元数据。例如："}),`
`,l(e.div,{className:"language-mdx",children:[n(e.span,{className:"lang",children:"mdx"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#98C379"},children:"---"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#E06C75"},children:"title"}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:"Hello World"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#98C379"},children:"---"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:"注意：默认情况下，Rpress 使用 h1 标题作为 html 的标题。"}),`
`]}),`
`,n(e.p,{children:"你还可以在正文中访问 Front Mattter 中定义的属性，例如："}),`
`,l(e.div,{className:"language-mdx",children:[n(e.span,{className:"lang",children:"mdx"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#98C379"},children:"---"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#E06C75"},children:"title"}),n(e.span,{style:{color:"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#98C379"},children:"Hello World"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#98C379"},children:"---"})}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#61AFEF"},children:"#"}),n(e.span,{style:{color:"#E06C75"},children:" "}),n(e.span,{style:{color:"#98C379"},children:"{"}),n(e.span,{style:{color:"#E5C07B"},children:"frontmatter"}),n(e.span,{style:{color:"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#E06C75"},children:"title"}),n(e.span,{style:{color:"#98C379"},children:"}"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:["前面定义的属性将作为 ",n(e.code,{children:"meta"})," 属性传递给组件。所以最终输出将是："]}),`
`,l(e.div,{className:"language-html",children:[n(e.span,{className:"lang",children:"html"}),n(e.pre,{className:"shiki one-dark-pro",style:{backgroundColor:"#282c34"},tabIndex:"0",children:l(e.code,{children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ABB2BF"},children:"<"}),n(e.span,{style:{color:"#E06C75"},children:"h1"}),n(e.span,{style:{color:"#ABB2BF"},children:">Hello World</"}),n(e.span,{style:{color:"#E06C75"},children:"h1"}),n(e.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line"})]})})]})]})}function $(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(v,r)})):v(r)}const ke=Object.freeze(Object.defineProperty({__proto__:null,default:$,frontmatter:_e,title:be,toc:Ce},Symbol.toStringTag,{value:"Module"})),Ee=[],ve={pageType:"home",hero:{name:"Rpress",text:"基于 Vite & MDX 语法的静态站点生成器",tagline:"简单、强大、高性能的现代化 SSG 方案",image:{src:"/island.png",alt:"Rpress"},actions:[{theme:"brand",text:"快速开始",link:"/guide/getting-started"},{theme:"alt",text:"GitHub 地址",link:"https://github.com/c0dedance/r-press"}]},features:[{title:"Vite: 极速的开发响应速度",details:"基于 Vite 构建，开发时的响应速度极快，即时的热更新，带给你极致的开发体验。",icon:"🚀"},{title:"MDX: Markdown & React 组件来写内容",details:"MDX 是一种强大的方式来写内容。你可以在 Markdown 中使用 React 组件。",icon:"📦"},{title:"孤岛架构: 更高的生产性能",details:"采用 Islands 架构，意味着更少的 JavaScript 代码、局部 hydration， 从而带来更好的首屏性能。",icon:"✨"},{title:"功能丰富: 一站式解决方案",details:"对全文搜索、国际化等常见功能可以做到开箱即用。",icon:"🛠️"},{title:"TypeScript: 优秀的类型支持",details:"使用 TypeScript 编写，提供了优秀的类型支持，让你的开发更加顺畅。",icon:"🔑"},{title:"扩展性强: 提供多种自定义能力",details:"通过其扩展机制，你可以轻松的扩展 Island 的主题 UI 和构建能力。",icon:"🎨"}]};function x(r){return n(h,{})}function L(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(x,r)})):x()}const xe=Object.freeze(Object.defineProperty({__proto__:null,default:L,frontmatter:ve,toc:Ee},Symbol.toStringTag,{value:"Module"}));d.createElement(j),d.createElement(R),d.createElement(O),d.createElement(I),d.createElement(T),d.createElement(w),d.createElement($),d.createElement(L);X({});const Se="appearance",Me=(r=!1)=>{const e=document.documentElement.classList;r?e.add("dark"):e.remove("dark")},S=()=>{const r=localStorage.getItem(Se);Me(r==="dark")};typeof window<"u"&&typeof localStorage<"u"&&(S(),window.addEventListener("storage",S));async function Pe(){if(!document.getElementById("root"))throw new Error("#root element not found");{const e=document.querySelectorAll("[__island]");if(!e.length)return;for(const a of e){const[y,p]=a.getAttribute("__island").split(":"),s=window.ISLANDS[y];H(a,n(s,{...window.ISLAND_PROPS[p]}))}}}Pe();
