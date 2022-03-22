(function(){"use strict";var t={2502:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/quote"}},[t._v("Quote")])],1),n("router-view")],1)},u=[],i=n(1001),a={},c=(0,i.Z)(a,o,u,!1,null,null,null),s=c.exports,l=(n(1539),n(8783),n(3948),n(2809)),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"rock logo",src:"/rocky.jpg"}})])}],h={},p=(0,i.Z)(h,f,d,!1,null,null,null),m=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("Quotes From The Great Father Rock")]),n("img",{attrs:{alt:"The rock",src:"/dwayne.png"}}),n("h2",[t._v('"'+t._s(t.quote)+'"')])])},g=[],y={name:"QuoteView",created:function(){var t=Math.floor(Math.random()*this.$root.$data.quotes.length);this.$root.$data.currentQuote=this.$root.$data.quotes[t].quote},computed:{quote:function(){return this.$root.$data.currentQuote}}},b=y,k=(0,i.Z)(b,v,g,!1,null,null,null),w=k.exports;r.Z.use(l.Z);var _=[{path:"/",name:"home",component:m},{path:"/quote",name:"quote",component:w},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,6195))}}],j=new l.Z({mode:"history",base:"/",routes:_}),q=j,C=[{id:0,quote:"What's the key to success? The key is, there is no key. Be humble, hungry, and the hardest worker in any room."},{id:1,quote:"The wall! Your success is on the other side. Can't jump over it or go around it. You know what to do."},{id:2,quote:"Failure's not an option. It's just a step."},{id:3,quote:"When life puts you in tough situations, don't say 'Why me?' just say 'Try me'."},{id:4,quote:"Success at anything will always come down to this: focus and effort. And we control both."}],E=C;r.Z.config.productionTip=!1,new r.Z({router:q,data:{quotes:E,currentQuote:"rocks are cool"},render:function(t){return t(s)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return t[r](u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,u){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],u=t[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}u=u||0;for(var l=t.length;l>0&&t[l-1][2]>u;l--)t[l]=t[l-1];t[l]=[r,o,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about-legacy.fd559a4e.js"}}(),function(){n.miniCssF=function(t){return"css/about.e8b26d10.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="rock:";n.l=function(r,o,u,i){if(t[r])t[r].push(o);else{var a,c;if(void 0!==u)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+u){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+u),a.src=r),t[r]=[o];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)n();else{var i=u&&("load"===u.type?"missing":u.type),a=u&&u.target&&u.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=u,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===t||u===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],u=o.getAttribute("data-href");if(u===t||u===e)return o}},r=function(r){return new Promise((function(o,u){var i=n.miniCssF(r),a=n.p+i;if(e(i,a))return o();t(r,a,o,u)}))},o={143:0};n.f.miniCss=function(t,e){var n={443:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=u);var i=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,u,i=r[0],a=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(e&&e(r);s<i.length;s++)u=i[s],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(l)},r=self["webpackChunkrock"]=self["webpackChunkrock"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2502)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.aaf54024.js.map