if(!self.define){let l,i={};const n=(n,e)=>(n=new URL(n+".js",e).href,i[n]||new Promise((i=>{if("document"in self){const l=document.createElement("script");l.src=n,l.onload=i,document.head.appendChild(l)}else l=n,importScripts(n),i()})).then((()=>{let l=i[n];if(!l)throw new Error(`Module ${n} didn’t register its module`);return l})));self.define=(e,r)=>{const s=l||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=l=>n(l,s),t={module:{uri:s},exports:o,require:u};i[s]=Promise.all(e.map((l=>t[l]||u(l)))).then((l=>(r(...l),o)))}}define(["./workbox-5b385ed2"],(function(l){"use strict";l.setCacheNameDetails({prefix:"alma-soft"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/css/app.b9491b9a.css",revision:null},{url:"/fonts/Inter-Bold.191af3d4.ttf",revision:null},{url:"/fonts/Inter-ExtraBold.9c260c85.ttf",revision:null},{url:"/fonts/Inter-Light.4e3a4b8b.ttf",revision:null},{url:"/fonts/Inter-Medium.dde90d17.ttf",revision:null},{url:"/fonts/Inter-Regular.1b761fdd.ttf",revision:null},{url:"/fonts/Inter-SemiBold.2a2f0a2a.ttf",revision:null},{url:"/fonts/SourceSansPro-Regular.770ca066.ttf",revision:null},{url:"/img/2.08c214df.jpg",revision:null},{url:"/img/3.3268de61.jpg",revision:null},{url:"/img/4.83a72143.jpg",revision:null},{url:"/img/AlmaSoft.4c991a92.png",revision:null},{url:"/img/check.6becff92.svg",revision:null},{url:"/img/facebook.cb7113ab.svg",revision:null},{url:"/img/flag-ukr.b81f6718.svg",revision:null},{url:"/img/in.49d2701d.svg",revision:null},{url:"/img/instagram.3daad6ed.svg",revision:null},{url:"/img/monitor-full.5135d6ec.png",revision:null},{url:"/img/monitor_img_1.fa6e15a2.gif",revision:null},{url:"/img/prev-next.94469052.svg",revision:null},{url:"/img/prometey.ab907554.png",revision:null},{url:"/img/redbini.0000ebb9.png",revision:null},{url:"/img/slesh.97608200.svg",revision:null},{url:"/img/twitter.b93cc33d.svg",revision:null},{url:"/img/uncheck.ee1f3524.svg",revision:null},{url:"/img/vodokanal.41101fe4.png",revision:null},{url:"/img/vodokanal_bot.b790c01e.png",revision:null},{url:"/img/x.135c606b.svg",revision:null},{url:"/index.html",revision:"5c88e1cac1f6f7e57869bcbf72a969c1"},{url:"/js/about.4182ec88.js",revision:null},{url:"/js/app.de75b009.js",revision:null},{url:"/js/chunk-vendors.84a53d85.js",revision:null},{url:"/manifest.json",revision:"7832c862e0ccf5061f3619c4a37f2472"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
