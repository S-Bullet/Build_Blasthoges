(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{63618:function(e,t,s){Promise.resolve().then(s.bind(s,71195))},71195:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(28995),l=s(55758),n=s.n(l),i=s(34061),r=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":60,"w":512,"h":512,"ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.52],"y":[1]},"o":{"x":[0.17],"y":[0.17]},"t":20,"s":[0]},{"i":{"x":[0.99],"y":[0.3]},"o":{"x":[0.48],"y":[0]},"t":40,"s":[100]},{"t":60,"s":[0]}]},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.18,"y":1},"o":{"x":0.17,"y":0.17},"t":20,"s":[256,278.62,0],"to":[0,0.56,0],"ti":[0,-0.56,0]},{"t":40,"s":[256,295.68,0]}]},"a":{"a":0,"k":[-164.86,371.65,0]},"s":{"a":0,"k":[498.55,512,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-185.64,367.9],[-174.69,375.4],[-163.86,367.9]],"c":false}}},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":4},"lc":2,"lj":2,"bm":0},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[94.34,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}],"bm":0}],"ip":0,"op":61,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.52],"y":[1]},"o":{"x":[0.17],"y":[0.17]},"t":0,"s":[0]},{"i":{"x":[0.99],"y":[0.16]},"o":{"x":[0.48],"y":[0]},"t":20,"s":[100]},{"t":44,"s":[0]}]},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.17,"y":1},"o":{"x":0.17,"y":0.17},"t":0,"s":[256,182.18,0],"to":[0,1.11,0],"ti":[0,-1.11,0]},{"t":20,"s":[256,216.32,0]}]},"a":{"a":0,"k":[-164.86,371.65,0]},"s":{"a":0,"k":[498.55,512,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-185.64,367.9],[-174.69,375.4],[-163.86,367.9]],"c":false}}},{"ty":"st","c":{"a":0,"k":[0.2901960784313726,0.2901960784313726,0.2901960784313726,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":4},"lc":2,"lj":2,"bm":0},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[94.34,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}],"bm":0}],"ip":0,"op":61,"st":0,"bm":0}],"markers":[]}'),o=s.t(r,2);function c(){return(0,a.jsx)("div",{style:{transform:"scale(2)"},children:(0,a.jsx)(i.Z,{options:{loop:!0,autoplay:!0,animationData:o},height:25,width:25})})}var d=s(11927),x=s.n(d);function f(){return(0,a.jsx)(x(),{fs:"\n// pinwheel inspired by https://www.shadertoy.com/view/MlSXWm\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord) {\n  vec2 uv = (2.0*fragCoord.xy-iResolution.xy) / iResolution.y;\n  vec2 center = vec2(0.0);\n  float period = 4.0;\n  float rotation = iTime * 6.0;\n  float rotation1 = rotation + 3.;\n      \n  vec3 bg = vec3(1., 1., 1.);\n  vec3 fg1 = vec3(0.506,0.553,0.973);\n  vec3 fg2 = vec3(0.259,0.22,0.792);\n  \n  vec2 shift = uv - center;\n  float shiftLen = length(shift);\n  float shiftAtan = atan(shift.x, shift.y);\n  \n  float pct1 = smoothstep(0.1, 1.0, shiftLen);\n  float pct2 = smoothstep(0.1 + .65*(sin(iTime*2.)), 1.0, shiftLen);\n  \n  vec3 fade1 = mix(fg1, bg, pct1);\n  vec3 fade2 = mix(fg2, bg, pct2);\n  \n  float offset = rotation + shiftLen / 10.0;\n  float x = sin(offset + shiftAtan * period);\n  float val = smoothstep(0.1, 0.6, x);\n\n  vec3 color = mix(bg, fade1, val);\n  offset = rotation1 + shiftLen / 10.0;\n  x = sin(offset + shiftAtan * period);\n  val = smoothstep(0.4, 0.6, x);\n  \n  color = mix(color, fade2, val);\n  fragColor = vec4(color, 1.0);\n}\n"})}var h=s(18302),m=s(52335);function u(){return(0,a.jsxs)("main",{className:"w-full flex-1 flex flex-col justify-center shrink-0 px-8 relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 right-0 z-30",children:(0,a.jsx)(h.default,{})}),(0,a.jsxs)("div",{className:"hidden sm:absolute sm:flex bottom-8 left-8 flex flex-col gap-2 z-30 select-none",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h3",{children:"An experiment by"})}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"cursor-pointer rounded-full shadow w-11 h-11 z-30",children:(0,a.jsx)("a",{href:"https://twitter.com/0xWiz_",target:"_blank",children:(0,a.jsx)("img",{alt:"wiz",className:"object-cover rounded-full w-full h-full",src:"/static/pfps/wiz.png"})})}),(0,a.jsx)("div",{className:"cursor-pointer rounded-full w-11 h-11 -left-4 relative hover:z-30 hover:shadow",children:(0,a.jsx)("a",{href:"https://twitter.com/TM0B1L",target:"_blank",children:(0,a.jsx)("img",{alt:"tm0b1l",className:"object-cover rounded-full w-full h-full",src:"/static/pfps/tmobil.jpeg"})})})]})]}),(0,a.jsxs)("div",{className:"absolute bottom-8 left-4 right-4 sm:left-auto sm:right-8 flex gap-3 p-3 rounded-lg bg-gray-100 items-center z-30 border-b-1 border-l-1 select-none",children:[(0,a.jsx)("div",{className:"rounded-lg",children:(0,a.jsx)("img",{width:"50px",className:"aspect-square rounded-lg",src:"/ex.svg"})}),(0,a.jsxs)("div",{className:"flex flex-col sm:mr-12 relative top-1",children:[(0,a.jsx)("div",{className:"uppercase text-xs",children:"an introduction"}),(0,a.jsx)("h2",{children:"All about Blasthoges"})]}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("a",{target:"_blank",className:"px-3 py-3 bg-black text-white cursor-pointer rounded-lg transition-all hover:bg-opacity-80 text-sm sm:text-base float-right bg-indigo-600 hover:bg-indigo-500 text-white font-semibold",href:"https://mirror.xyz/tm0b1l.eth/URgZgA36Hhceg34yXbBOuwwcBRzV_416QATHX1pFu3k",children:"Learn more"})})]}),(0,a.jsx)("div",{className:"absolute w-full h-full -top-16 left-1",style:{opacity:"0.09",transform:"scale(1.4)"},children:(0,a.jsx)(f,{})}),(0,a.jsxs)("div",{className:"-translate-y-5 sm:-translate-y-10 flex flex-col gap-6 prose",children:[(0,a.jsxs)("div",{className:"flex flex-col mx-auto max-w-xl",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1 mx-auto my-1 z-30 select-none text-sm",children:["Exclusively on",(0,a.jsx)("a",{href:"https://blast.io/en",target:"_blank",className:"border-b border-dashed border-transparent hover:border-black relative",style:{top:"1px"},children:(0,a.jsx)("img",{src:"/static/bob.svg",width:70})})]}),(0,a.jsxs)("div",{className:"relative w-full text-center left-2 select-none",children:[(0,a.jsx)("h1",{className:"text-4xl sm:text-5xl z-20 font-semibold text-indigo-400 w-full relative ".concat(n().className),children:"Blasthoges"}),(0,a.jsx)("h1",{className:"text-4xl sm:text-5xl font-semibold text-indigo-700 w-full absolute top-1 ".concat(n().className),children:"Blasthoges"})]}),(0,a.jsx)("p",{className:"mt-5 sm:mt-6 text-xl sm:text-2xl text-center leading-relaxed",children:"A crypto cat collective"})]}),(0,a.jsx)("div",{className:"flex gap-4 mx-auto",children:(0,a.jsx)(m.default,{className:"rounded-full bg-black hover:bg-opacity-80 text-white px-12 py-4 font-semibold text-xl flex gap-2 items-center transition block w-full",href:"/mint",children:"Mint Now"})}),(0,a.jsxs)("div",{className:"text-center select-none",children:[(0,a.jsx)("span",{className:"relative font-semibold",children:"WTF?"}),(0,a.jsx)(c,{})]})]})]})}},18302:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var a=s(28995),l=s(52335),n=s(69246);let i=()=>(0,a.jsx)(n.NL.Custom,{children:e=>{let{account:t,chain:s,openAccountModal:l,openChainModal:n,openConnectModal:i,mounted:r}=e;return(0,a.jsx)("div",{children:r&&t&&s?s.unsupported?(0,a.jsx)("button",{onClick:n,type:"button",className:"rounded-lg bg-gray-100 hover:bg-opacity-80 px-6 py-3 items-center transition min-w-36",children:"Wrong network"}):(0,a.jsx)("button",{onClick:l,type:"button",className:"rounded-lg bg-gray-100 hover:bg-opacity-80 px-2 py-3 items-center transition min-w-36",children:t.displayName}):(0,a.jsx)("button",{onClick:i,type:"button",className:"rounded-lg bg-gray-100 hover:bg-opacity-80 px-6 py-3 items-center transition min-w-36",children:"Connect"})})}});var r=s(53491),o=s(43969),c=s(79115),d=s(41281),x=s(29155);function f(){let{data:e}=(0,r.K)({address:"0x9E2DF1c35c50d68f1b1F8BBfFa68E6620Bb7DFEA"}),t=(0,x.usePathname)();return(0,a.jsxs)("header",{className:"justify-start flex items-center p-6 px-4 sm:px-6 w-full bg-transparent",children:[(0,a.jsxs)("div",{className:"w-full flex gap-6 items-center",children:[(0,a.jsx)(l.default,{href:"/",className:"logo",children:(0,a.jsx)("img",{alt:"Blasthoges Logo",src:"/static/logo/green_pc.svg",width:"48",height:"auto",style:{transform:"scale(1.16)"}})}),(0,a.jsxs)("a",{className:"hover:underline hidden sm:block",href:"".concat(d.Y,"address/").concat("0x9E2DF1c35c50d68f1b1F8BBfFa68E6620Bb7DFEA"),target:"_blank",children:["Reserve: ",(0,a.jsx)("text",{className:"text-sm",children:"Ξ"}),o.WU(o.Dp((0,c.d)((null==e?void 0:e.value)||BigInt(0))),{digits:3})]})]}),(0,a.jsx)("div",{className:"flex-1 flex items-center float-right justify-end min-w-[50%]",children:(0,a.jsx)("nav",{className:"w-full",children:(0,a.jsx)("ul",{className:"flex space-x-8 float-right items-center",children:"/mint"===t?(0,a.jsx)("li",{children:(0,a.jsx)(i,{})}):null})})})]})}},41281:function(e,t,s){"use strict";s.d(t,{Y:function(){return a}});let a="https://testnet.blastscan.io/"}},function(e){e.O(0,[7569,7983,7825,2734,4154,5993,7625,1744],function(){return e(e.s=63618)}),_N_E=e.O()}]);