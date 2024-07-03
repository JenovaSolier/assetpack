"use strict";(self.webpackChunk_assetpack_docs=self.webpackChunk_assetpack_docs||[]).push([[32],{8865:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(1085),n=t(1184),r=t(4944);const o={sidebar_position:4},a="Compression",d={id:"guide/pipes/compress",title:"Compression",description:"The compress plugin uses the Sharp library to compress images into different formats, such as JPEG, PNG, WebP, and AVIF. This helps reduce file sizes while maintaining image quality, ensuring faster load times and better performance.",source:"@site/docs/guide/pipes/compress.mdx",sourceDirName:"guide/pipes",slug:"/guide/pipes/compress",permalink:"/assetpack/docs/guide/pipes/compress",draft:!1,unlisted:!1,editUrl:"https://github.com/pixijs/assetpack/tree/main/packages/docs/docs/guide/pipes/compress.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"JSON",permalink:"/assetpack/docs/guide/pipes/json"},next:{title:"Mipmaps",permalink:"/assetpack/docs/guide/pipes/mipmap"}},p={},l=[{value:"API",id:"api",level:2},{value:"Example",id:"example",level:2},{value:"Tags",id:"tags",level:2},{value:"Example",id:"example-1",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"compression",children:"Compression"}),"\n",(0,i.jsx)(s.p,{children:"The compress plugin uses the Sharp library to compress images into different formats, such as JPEG, PNG, WebP, and AVIF. This helps reduce file sizes while maintaining image quality, ensuring faster load times and better performance."}),"\n",(0,i.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Option"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"jpg"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"object | false"})}),(0,i.jsxs)(s.td,{children:["Any settings supported by ",(0,i.jsx)(s.a,{href:"https://sharp.pixelplumbing.com/api-output#jpeg",children:"sharp jpeg"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"png"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"object | false"})}),(0,i.jsxs)(s.td,{children:["Any settings supported by ",(0,i.jsx)(s.a,{href:"https://sharp.pixelplumbing.com/api-output#png",children:"sharp png"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"webp"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"object | false"})}),(0,i.jsxs)(s.td,{children:["Any settings supported by ",(0,i.jsx)(s.a,{href:"https://sharp.pixelplumbing.com/api-output#webp",children:"sharp webp"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"avif"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"object | false"})}),(0,i.jsxs)(s.td,{children:["Any settings supported by ",(0,i.jsx)(s.a,{href:"https://sharp.pixelplumbing.com/api-output#avif",children:"sharp avif"}),". ",(0,i.jsx)("br",{})," Defaults to ",(0,i.jsx)(s.code,{children:"false"}),"."]})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.qH,{image:"compress/compress",height:350}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'import { compress } from "@assetpack/core";\n\nexport default {\n  ...\n  pipes: [\n    ...\n    // these options are the default values, all options shown here are optional\n    compress({\n      jpg: {},\n      png: { quality: 90 },\n      webp: { quality: 80, alphaQuality: 80, },\n      avif: false,\n    }),\n  ]\n};\n'})}),"\n",(0,i.jsx)(s.h2,{id:"tags",children:"Tags"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Tag"}),(0,i.jsx)(s.th,{children:"Folder/File"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"nc"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"both"})}),(0,i.jsx)(s.td,{children:"If present the image(s) will not be compressed."})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(r.qH,{image:"compress/compress-off",height:350})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4944:(e,s,t)=>{t.d(s,{qH:()=>a});var i=t(4041),n=t(1085);const r=e=>{let{toggleImage:s,showImage1:t}=e;return(0,n.jsx)("div",{style:{width:"100%"},children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",padding:"10px"},children:[(0,n.jsx)("p",{style:{margin:"0 10px"},children:t?"Original":"Processed"}),(0,n.jsx)("div",{onClick:s,style:{position:"relative",width:"60px",height:"30px",backgroundColor:"hsl(225 6% 13%)",borderRadius:"15px",cursor:"pointer",transition:"background-color 0.3s",border:"2px solid #696969"},children:(0,n.jsx)("div",{style:{position:"absolute",top:"3px",left:t?"5px":"32px",width:"20px",height:"20px",backgroundColor:t?"var(--ifm-color-secondary)":"var(--ifm-color-primary)",borderRadius:"50%",transition:"left 0.3s"}})})]})})},o=e=>{let{image:s,primaryBoxShadow:t}=e;return(0,n.jsx)("div",{style:{width:"100%",height:"100%",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"},children:(0,n.jsx)("img",{src:s,alt:"Input Image",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:"12px",boxShadow:t?"0 0 20px hsla(340, 70%, 44%, 0.5)":"0 0 20px hsla(192, 84%, 40%, 0.5)"}})})},a=e=>{let{image:s,height:t}=e;const[a,d]=(0,i.useState)(!0);t??=350;const p=`/assetpack/screenshots/${s}.png`,l=`/assetpack/screenshots/${s}-pro.png`;return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",paddingBottom:"24px"},children:[(0,n.jsx)(r,{toggleImage:()=>{d(!a)},showImage1:a}),(0,n.jsxs)("div",{style:{position:"relative",pointerEvents:"none",width:"100%",height:t},children:[(0,n.jsx)("div",{style:{transition:"opacity 0.5s ease-in-out",opacity:a?1:0,position:"absolute",width:"100%",height:"100%"},children:(0,n.jsx)(o,{image:p,primaryBoxShadow:!1})}),(0,n.jsx)("div",{style:{transition:"opacity 0.5s ease-in-out",opacity:a?0:1,position:"absolute",width:"100%",height:"100%"},children:(0,n.jsx)(o,{image:l,primaryBoxShadow:!0})})]})]})}},1184:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var i=t(4041);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);