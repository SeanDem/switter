var M=Object.defineProperty;var C=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as v,j as g,k as j,l as b,m as I,p as E,q as O,w as L,x as B,y as P,z as R,A as q}from"./scheduler.b0fd5642.js";let y=!1;function T(){y=!0}function z(){y=!1}function H(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function V(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=l?s+1:H(1,s,h=>t[n[h]].claim_order,l))-1;i[r]=n[u]+1;const f=u+1;n[f]=r,s=Math.max(f,s)}const c=[],a=[];let o=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);o>=r;o--)a.push(t[o]);o--}for(;o>=0;o--)a.push(t[o]);c.reverse(),a.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<a.length;r++){for(;l<c.length&&a[r].claim_order>=c[l].claim_order;)l++;const u=l<c.length?c[l]:null;e.insertBefore(a[r],u)}}function A(e,t){if(y){for(V(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function k(e,t,n){y&&!n?A(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function le(){return x(" ")}function oe(){return x("")}function F(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function G(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return e.dataset.svelteH}function J(e){return Array.from(e.childNodes)}function K(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function D(e,t,n,i,s=!1){K(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const o=e[a];if(t(o)){const r=n(o);return r===void 0?e.splice(a,1):e[a]=r,s||(e.claim_info.last_index=a),o}}for(let a=e.claim_info.last_index-1;a>=0;a--){const o=e[a];if(t(o)){const r=n(o);return r===void 0?e.splice(a,1):e[a]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,o}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function Q(e,t,n,i){return D(e,s=>s.nodeName===t,s=>{const c=[];for(let a=0;a<s.attributes.length;a++){const o=s.attributes[a];n[o.name]||c.push(o.name)}c.forEach(a=>s.removeAttribute(a))},()=>i(t))}function fe(e,t,n){return Q(e,t,n,W)}function U(e,t){return D(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return U(e," ")}function de(e,t){e.value=t??""}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function X(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}const $=new Set;let _;function me(){_={r:0,c:[],p:_}}function he(){_.r||p(_.c),_=_.p}function Y(e,t){e&&e.i&&($.delete(e),e.i(t))}function $e(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),_.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function pe(e){e&&e.c()}function ye(e,t){e&&e.l(t)}function Z(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),b(()=>{const c=e.$$.on_mount.map(B).filter(O);e.$$.on_destroy?e.$$.on_destroy.push(...c):p(c),e.$$.on_mount=[]}),s.forEach(b)}function ee(e,t){const n=e.$$;n.fragment!==null&&(P(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(R.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,s,c,a,o=[-1]){const r=I;E(e);const l=e.$$={fragment:null,ctx:[],props:c,update:v,not_equal:s,bound:g(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:g(),dirty:o,skip_bound:!1,root:t.target||r.$$.root};a&&a(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,h,...w)=>{const S=w.length?w[0]:h;return l.ctx&&s(l.ctx[f],l.ctx[f]=S)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](S),u&&te(e,f)),h}):[],l.update(),u=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){T();const f=J(t.target);l.fragment&&l.fragment.l(f),f.forEach(N)}else l.fragment&&l.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor),z(),j()}E(r)}class ne{constructor(){m(this,"$$");m(this,"$$set")}$destroy(){ee(this,1),this.$destroy=v}$on(t,n){if(!O(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!L(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="4.2.0",re="4";function d(e,t){document.dispatchEvent(X(e,{version:ie,...t},{bubbles:!0}))}function xe(e,t){d("SvelteDOMInsert",{target:e,node:t}),A(e,t)}function we(e,t,n){d("SvelteDOMInsert",{target:e,node:t,anchor:n}),k(e,t,n)}function Se(e){d("SvelteDOMRemove",{node:e}),N(e)}function ge(e,t,n,i,s,c,a){const o=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];s&&o.push("preventDefault"),c&&o.push("stopPropagation"),a&&o.push("stopImmediatePropagation"),d("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:o});const r=F(e,t,n,i);return()=>{d("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:o}),r()}}function be(e,t,n){G(e,t,n),n==null?d("SvelteDOMRemoveAttribute",{node:e,attribute:t}):d("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function Ee(e,t){t=""+t,e.data!==t&&(d("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Oe(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function Ae(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:s}=i;throw typeof s=="string"&&s.indexOf("is not a constructor")!==-1?new Error(n):i}}class Ne extends ne{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();m(this,"$$prop_def");m(this,"$$events_def");m(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{ce as A,de as B,ge as C,Ne as S,we as a,he as b,ue as c,d,oe as e,Y as f,Se as g,Ae as h,ve as i,W as j,fe as k,J as l,be as m,_e as n,x as o,U as p,Ee as q,me as r,le as s,$e as t,pe as u,Oe as v,ye as w,Z as x,ee as y,xe as z};