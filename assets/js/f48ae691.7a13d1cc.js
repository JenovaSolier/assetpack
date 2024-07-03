"use strict";(self.webpackChunk_assetpack_docs=self.webpackChunk_assetpack_docs||[]).push([[467],{1228:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(1085),n=s(1184);const r={sidebar_position:1,title:"Pixi"},d="PixiJS Setup",c={id:"guide/getting-started/pixi",title:"Pixi",description:"While AssetPack can be used with any rendering engine, we have provided an opinionated setup for PixiJS. This setup is not required, but it can help you get started quickly.",source:"@site/docs/guide/getting-started/pixi.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/pixi",permalink:"/assetpack/docs/guide/getting-started/pixi",draft:!1,unlisted:!1,editUrl:"https://github.com/pixijs/assetpack/tree/main/packages/docs/docs/guide/getting-started/pixi.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Pixi"},sidebar:"guide",previous:{title:"Installation",permalink:"/assetpack/docs/guide/getting-started/installation"},next:{title:"CLI",permalink:"/assetpack/docs/guide/getting-started/cli"}},o={},a=[{value:"API",id:"api",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"pixijs-setup",children:"PixiJS Setup"}),"\n",(0,i.jsx)(t.p,{children:"While AssetPack can be used with any rendering engine, we have provided an opinionated setup for PixiJS. This setup is not required, but it can help you get started quickly."}),"\n",(0,i.jsx)(t.p,{children:"This setup also abstracts away some of the more complex features of AssetPack, to ensure that all options are passed to the plugins correctly, and plugins are set up in the correct order."}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cacheBust"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsxs)(t.td,{children:["Whether to append a cache-busting query string to the asset URLs. Defaults to ",(0,i.jsx)(t.code,{children:"true"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"resolutions"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Record<string, number>"})}),(0,i.jsxs)(t.td,{children:["A map of resolution names to scaling factors. Defaults to ",(0,i.jsx)(t.code,{children:"{ default: 1, low: 0.5 }"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"compression"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"CompressOptions"})," | ",(0,i.jsx)(t.code,{children:"false"})]}),(0,i.jsxs)(t.td,{children:["Options for compressing the output files. Defaults to ",(0,i.jsx)(t.code,{children:"{ jpg: true, png: true, webp: true }"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"texturePacker"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TexturePackerOptions"})}),(0,i.jsxs)(t.td,{children:["Options for generating texture atlases. Defaults to ",(0,i.jsx)(t.code,{children:"{{ texturePacker: { nameStyle: 'short' }}}"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"audio"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Partial<FfmpegOptions>"})}),(0,i.jsxs)(t.td,{children:["Options for compressing audio files. Defaults to ",(0,i.jsx)(t.code,{children:"{}"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"manifest"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"PixiManifestOptions"})}),(0,i.jsxs)(t.td,{children:["Options for generating a PixiJS manifest file. Defaults to ",(0,i.jsx)(t.code,{children:"{ createShortcuts: true }"})]})]})]})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/guide/pipes/compress#api",children:"CompressOptions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/guide/pipes/texture-packer#api",children:"TexturePackerOptions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/guide/pipes/manifest#api",children:"PixiManifestOptions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/guide/pipes/mipmap#api",children:"Resolutions"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Please refer to the ",(0,i.jsx)(t.a,{href:"/docs/guide/configuration",children:"API Reference"})," for the full list of options."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'import { pixiPipes } from "@assetpack/core";\n\nexport default {\n  ...\n  pipes: [\n    ...pixiPipes({\n        cacheBust: true,\n        resolutions: { default: 1, low: 0.5 },\n        compression: { jpg: true, png: true, webp: true },\n        texturePacker: { nameStyle: "short" },\n        audio: {},\n        manifest: { createShortcuts: true },\n    }),\n  ],\n};\n'})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1184:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var i=s(4041);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);