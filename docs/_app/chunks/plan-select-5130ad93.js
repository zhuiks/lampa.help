import{P as v,D as p,S as C,i as G,s as H,e as f,t as g,c as _,a as h,h as k,d as o,b as d,g as m,J as u,j as P,l as E,k as D,m as N,K as w,Q as J,M as b}from"./vendor-c7eddb47.js";const q=p({}),A=p(null),K=v([q,A],([n,e])=>n&&e?n[e]:null),M=p(!1);v([K,M],([n,e])=>e&&e.section?n.sections.find(a=>!!a[e.section])[e.section]:"");const Q=p("en"),R=v(Q,n=>`/?lang=${n}`);function S(n,e,a){const l=n.slice();return l[4]=e[a][0],l[5]=e[a][1],l}function j(n){let e,a,l=n[2][n[1]].name+"",r;return{c(){e=f("li"),a=f("h1"),r=g(l),this.h()},l(t){e=_(t,"LI",{class:!0});var s=h(e);a=_(s,"H1",{});var i=h(a);r=k(i,l),i.forEach(o),s.forEach(o),this.h()},h(){d(e,"class","plans__item svelte-bwrrbu")},m(t,s){m(t,e,s),u(e,a),u(a,r)},p(t,s){s&6&&l!==(l=t[2][t[1]].name+"")&&P(r,l)},d(t){t&&o(e)}}}function L(n){let e,a;function l(s,i){return s[4]==s[1]?U:T}let r=l(n),t=r(n);return{c(){e=f("li"),t.c(),a=D(),this.h()},l(s){e=_(s,"LI",{class:!0});var i=h(e);t.l(i),a=N(i),i.forEach(o),this.h()},h(){d(e,"class","plans__item svelte-bwrrbu")},m(s,i){m(s,e,i),t.m(e,null),u(e,a)},p(s,i){r===(r=l(s))&&t?t.p(s,i):(t.d(1),t=r(s),t&&(t.c(),t.m(e,a)))},d(s){s&&o(e),t.d()}}}function T(n){let e,a=n[5].name+"",l,r;return{c(){e=f("a"),l=g(a),this.h()},l(t){e=_(t,"A",{href:!0});var s=h(e);l=k(s,a),s.forEach(o),this.h()},h(){d(e,"href",r="/"+n[4]+"-plan"+n[3])},m(t,s){m(t,e,s),u(e,l)},p(t,s){s&4&&a!==(a=t[5].name+"")&&P(l,a),s&12&&r!==(r="/"+t[4]+"-plan"+t[3])&&d(e,"href",r)},d(t){t&&o(e)}}}function U(n){let e,a=n[5].name+"",l;return{c(){e=f("strong"),l=g(a)},l(r){e=_(r,"STRONG",{});var t=h(e);l=k(t,a),t.forEach(o)},m(r,t){m(r,e,t),u(e,l)},p(r,t){t&4&&a!==(a=r[5].name+"")&&P(l,a)},d(r){r&&o(e)}}}function O(n){let e,a=(!n[0]||n[0]&&n[4]!=n[1])&&L(n);return{c(){a&&a.c(),e=E()},l(l){a&&a.l(l),e=E()},m(l,r){a&&a.m(l,r),m(l,e,r)},p(l,r){!l[0]||l[0]&&l[4]!=l[1]?a?a.p(l,r):(a=L(l),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(l){a&&a.d(l),l&&o(e)}}}function z(n){let e,a,l=n[0]&&n[1]&&j(n),r=Object.entries(n[2]),t=[];for(let s=0;s<r.length;s+=1)t[s]=O(S(n,r,s));return{c(){e=f("ul"),l&&l.c(),a=D();for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=_(s,"UL",{class:!0});var i=h(e);l&&l.l(i),a=N(i);for(let c=0;c<t.length;c+=1)t[c].l(i);i.forEach(o),this.h()},h(){d(e,"class","plans svelte-bwrrbu")},m(s,i){m(s,e,i),l&&l.m(e,null),u(e,a);for(let c=0;c<t.length;c+=1)t[c].m(e,null)},p(s,[i]){if(s[0]&&s[1]?l?l.p(s,i):(l=j(s),l.c(),l.m(e,a)):l&&(l.d(1),l=null),i&15){r=Object.entries(s[2]);let c;for(c=0;c<r.length;c+=1){const y=S(s,r,c);t[c]?t[c].p(y,i):(t[c]=O(y),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=r.length}},i:w,o:w,d(s){s&&o(e),l&&l.d(),J(t,s)}}}function B(n,e,a){let l,r,t;b(n,A,i=>a(1,l=i)),b(n,q,i=>a(2,r=i)),b(n,R,i=>a(3,t=i));let{header:s=!1}=e;return n.$$set=i=>{"header"in i&&a(0,s=i.header)},[s,l,r,t]}class I extends C{constructor(e){super();G(this,e,B,z,H,{header:0})}}export{I as P,M as a,K as b,A as c,Q as l,q as p,R as u};