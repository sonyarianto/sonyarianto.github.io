var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(){return f(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let h;function p(t){h=t}const g=[],m=[],y=[],$=[],b=Promise.resolve();let _=!1;function x(t){y.push(t)}function w(){const t=new Set;do{for(;g.length;){const t=g.shift();p(t),v(t.$$)}for(;m.length;)m.pop()();for(let n=0;n<y.length;n+=1){const e=y[n];t.has(e)||(e(),t.add(e))}y.length=0}while(g.length);for(;$.length;)$.pop()();_=!1}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const k=new Set;function E(t,n){t&&t.i&&(k.delete(t),t.i(n))}function A(t,n,e,o){if(t&&t.o){if(k.has(t))return;k.add(t),(void 0).c.push(()=>{k.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function C(t){t&&t.c()}function P(t,e,a){const{fragment:l,on_mount:i,on_destroy:c,after_update:u}=t.$$;l&&l.m(e,a),x(()=>{const e=i.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(x)}function B(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function D(n,r,a,l,i,c,u=[-1]){const f=h;p(n);const s=r.props||{},d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:u};let g=!1;d.ctx=a?a(n,s,(t,e,o=e)=>(d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),g&&S(n,t)),e)):[],d.update(),g=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&E(n.$$.fragment),P(n,r.target,r.anchor),w()),p(f)}class T{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function j(t,n,e){const o=t.slice();return o[1]=n[e],o}function H(n){let e,o,r,a,s,h,p,g,m=n[1].label+"";return{c(){e=u("li"),o=u("a"),r=u("span"),a=f(m),d(r,"class","label"),d(o,"title",s=n[1].title),d(o,"href",h=n[1].href),d(o,"target",p=n[1].target),d(o,"class",g=n[1].icon)},m(t,n){i(t,e,n),l(e,o),l(o,r),l(r,a)},p:t,d(t){t&&c(e)}}}function M(n){let e,o,r,a,f,h,p,g=n[0],m=[];for(let t=0;t<g.length;t+=1)m[t]=H(j(n,g,t));return{c(){e=u("header"),o=u("h1"),o.textContent=`${N}`,r=s(),a=u("p"),a.textContent=`${F}`,f=s(),h=u("nav"),p=u("ul");for(let t=0;t<m.length;t+=1)m[t].c();d(e,"id","header")},m(t,n){i(t,e,n),l(e,o),l(e,r),l(e,a),l(e,f),l(e,h),l(h,p);for(let t=0;t<m.length;t+=1)m[t].m(p,null)},p(t,[n]){if(1&n){let e;for(g=t[0],e=0;e<g.length;e+=1){const o=j(t,g,e);m[e]?m[e].p(o,n):(m[e]=H(o),m[e].c(),m[e].m(p,null))}for(;e<m.length;e+=1)m[e].d(1);m.length=g.length}},i:t,o:t,d(t){t&&c(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(m,t)}}}let N="Sony AK",F="Enjoy the Full-Stack Life";function G(t){return[[{title:"GitHub @sonyarianto",href:"https://github.com/sonyarianto",target:"_blank",label:"GitHub",icon:"icon brands fa-github"},{title:"DEV.to @sonyarianto",href:"https://dev.to/sonyarianto",target:"_blank",label:"DEV",icon:"icon brands fa-dev"},{title:"My lovely website called BolaBanget",href:"https://bolabanget.id",target:"_blank",label:"BolaBanget",icon:"icon fa-futbol"},{title:"Twitter @sonyarianto",href:"https://twitter.com/sonyakdotcom",target:"_blank",label:"Twitter",icon:"icon brands fa-twitter"},{title:"PayPal, maybe you want to send me money?",href:"https://paypal.me/sonyarianto",target:"_blank",label:"PayPal",icon:"icon brands fa-paypal"},{title:"E-mail sony@sony-ak.com",href:"mailto:sony@sony-ak.com",target:"_self",label:"E-mail",icon:"icon solid fa-envelope"}]]}class K extends T{constructor(t){super(),D(this,t,G,M,a,{})}}function L(n){let e,o,r,a,h,p,g,m,y;return{c(){e=u("footer"),o=u("span"),r=f("© 2013 - "),a=u("span"),a.textContent=`${n[0]}`,h=s(),p=f(O),g=f(". Design from "),m=u("a"),m.textContent="HTML5 UP",y=f("."),d(a,"id","cy"),d(m,"href","https://html5up.net"),d(o,"class","copyright"),d(e,"id","footer")},m(t,n){i(t,e,n),l(e,o),l(o,r),l(o,a),l(o,h),l(o,p),l(o,g),l(o,m),l(o,y)},p:t,i:t,o:t,d(t){t&&c(e)}}}let O="Sony Arianto Kurniawan";function V(t){return[(new Date).getFullYear()]}class q extends T{constructor(t){super(),D(this,t,V,L,a,{})}}function U(n){let e,o,r,a,f,h,p,g;const m=new K({}),y=new q({});return{c(){e=u("div"),o=u("div"),r=s(),a=u("div"),f=s(),h=u("div"),C(m.$$.fragment),p=s(),C(y.$$.fragment),d(o,"id","bg"),d(a,"id","overlay"),d(h,"id","main"),d(e,"id","wrapper")},m(t,n){i(t,e,n),l(e,o),l(e,r),l(e,a),l(e,f),l(e,h),P(m,h,null),l(h,p),P(y,h,null),g=!0},p:t,i(t){g||(E(m.$$.fragment,t),E(y.$$.fragment,t),g=!0)},o(t){A(m.$$.fragment,t),A(y.$$.fragment,t),g=!1},d(t){t&&c(e),B(m),B(y)}}}return new class extends T{constructor(t){super(),D(this,t,null,U,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
