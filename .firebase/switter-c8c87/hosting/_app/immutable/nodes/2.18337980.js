import{s as Fo,d as de,i as jo,n as Vi,r as Bo}from"../chunks/scheduler.b0fd5642.js";import{S as Vo,i as Ho,d as Fr,v as $o,j as fe,s as St,o as zo,k as pe,A as Hi,c as Ct,l as $i,p as Wo,g as ge,m as Oe,n as zi,a as Ge,z as me,B as Rt,C as Pt}from"../chunks/index.dd9404fa.js";const Go=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ko=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],c=t[n++],a=((r&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,c=o?t[r+1]:0,a=r+2<t.length,h=a?t[r+2]:0,u=s>>2,p=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,g=h&63;a||(g=64,o||(_=64)),i.push(n[u],n[p],n[_],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ko(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||c==null||h==null||p==null)throw new qo;const _=s<<2|c>>4;if(i.push(_),h!==64){const g=c<<4&240|h>>2;if(i.push(g),p!==64){const T=h<<6&192|p;i.push(T)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xo=function(t){const e=jr(t);return Br.encodeByteArray(e,!0)},Ft=function(t){return Xo(t).replace(/\./g,"")},Vr=function(t){try{return Br.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=()=>Jo().__FIREBASE_DEFAULTS__,Qo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vr(t[1]);return e&&JSON.parse(e)},ei=()=>{try{return Yo()||Qo()||Zo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hr=t=>{var e,n;return(n=(e=ei())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ea=t=>{const e=Hr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},$r=()=>{var t;return(t=ei())===null||t===void 0?void 0:t.config},zr=t=>{var e;return(e=ei())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Ft(JSON.stringify(n)),Ft(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ia(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())}function ra(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oa(){const t=N();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aa(){try{return typeof indexedDB=="object"}catch{return!1}}function ca(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="FirebaseError";class te extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ha,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ut.prototype.create)}}class ut{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?la(s,i):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new te(r,c,i)}}function la(t,e){return t.replace(ua,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const ua=/\{\$([^}]+)}/g;function da(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Wi(s)&&Wi(o)){if(!jt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Wi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fa(t,e){const n=new pa(t,e);return n.subscribe.bind(n)}class pa{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ga(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=In),r.error===void 0&&(r.error=In),r.complete===void 0&&(r.complete=In);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ga(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function In(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Ae{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ta;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(va(e))try{this.getOrInitializeService({instanceIdentifier:ve})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ve){return this.instances.has(e)}getOptions(e=ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);i===c&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_a(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ve){return this.component?this.component.multipleInstances?e:ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _a(t){return t===ve?void 0:t}function va(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ma(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));const Ia={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},Ea=v.INFO,wa={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},Ta=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=wa[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ti{constructor(e){this.name=e,this._logLevel=Ea,this._logHandler=Ta,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ia[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}const Aa=(t,e)=>e.some(n=>t instanceof n);let Gi,Ki;function Sa(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ca(){return Ki||(Ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wr=new WeakMap,Ln=new WeakMap,Gr=new WeakMap,En=new WeakMap,ni=new WeakMap;function Ra(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(oe(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wr.set(n,t)}).catch(()=>{}),ni.set(e,t),e}function Pa(t){if(Ln.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ln.set(t,e)}let Mn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ln.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ka(t){Mn=t(Mn)}function Oa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(wn(this),e,...n);return Gr.set(i,e.sort?e.sort():[e]),oe(i)}:Ca().includes(t)?function(...e){return t.apply(wn(this),e),oe(Wr.get(this))}:function(...e){return oe(t.apply(wn(this),e))}}function ba(t){return typeof t=="function"?Oa(t):(t instanceof IDBTransaction&&Pa(t),Aa(t,Sa())?new Proxy(t,Mn):t)}function oe(t){if(t instanceof IDBRequest)return Ra(t);if(En.has(t))return En.get(t);const e=ba(t);return e!==t&&(En.set(t,e),ni.set(e,t)),e}const wn=t=>ni.get(t);function Da(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),c=oe(o);return i&&o.addEventListener("upgradeneeded",a=>{i(oe(o.result),a.oldVersion,a.newVersion,oe(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),r&&a.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Na=["get","getKey","getAll","getAllKeys","count"],La=["put","add","delete","clear"],Tn=new Map;function qi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tn.get(e))return Tn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=La.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Na.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let h=a.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),r&&a.done]))[0]};return Tn.set(e,s),s}ka(t=>({...t,get:(e,n,i)=>qi(e,n)||t.get(e,n,i),has:(e,n)=>!!qi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ua(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ua(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Un="@firebase/app",Xi="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new ti("@firebase/app"),xa="@firebase/app-compat",Fa="@firebase/analytics-compat",ja="@firebase/analytics",Ba="@firebase/app-check-compat",Va="@firebase/app-check",Ha="@firebase/auth",$a="@firebase/auth-compat",za="@firebase/database",Wa="@firebase/database-compat",Ga="@firebase/functions",Ka="@firebase/functions-compat",qa="@firebase/installations",Xa="@firebase/installations-compat",Ja="@firebase/messaging",Ya="@firebase/messaging-compat",Qa="@firebase/performance",Za="@firebase/performance-compat",ec="@firebase/remote-config",tc="@firebase/remote-config-compat",nc="@firebase/storage",ic="@firebase/storage-compat",rc="@firebase/firestore",sc="@firebase/firestore-compat",oc="firebase",ac="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]",cc={[Un]:"fire-core",[xa]:"fire-core-compat",[ja]:"fire-analytics",[Fa]:"fire-analytics-compat",[Va]:"fire-app-check",[Ba]:"fire-app-check-compat",[Ha]:"fire-auth",[$a]:"fire-auth-compat",[za]:"fire-rtdb",[Wa]:"fire-rtdb-compat",[Ga]:"fire-fn",[Ka]:"fire-fn-compat",[qa]:"fire-iid",[Xa]:"fire-iid-compat",[Ja]:"fire-fcm",[Ya]:"fire-fcm-compat",[Qa]:"fire-perf",[Za]:"fire-perf-compat",[ec]:"fire-rc",[tc]:"fire-rc-compat",[nc]:"fire-gcs",[ic]:"fire-gcs-compat",[rc]:"fire-fst",[sc]:"fire-fst-compat","fire-js":"fire-js",[oc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Map,Fn=new Map;function hc(t,e){try{t.container.addComponent(e)}catch(n){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xe(t){const e=t.name;if(Fn.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;Fn.set(e,t);for(const n of Bt.values())hc(n,t);return!0}function ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ae=new ut("app","Firebase",lc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=ac;function Kr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:xn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ae.create("bad-app-name",{appName:String(r)});if(n||(n=$r()),!n)throw ae.create("no-options");const s=Bt.get(r);if(s){if(jt(n,s.options)&&jt(i,s.config))return s;throw ae.create("duplicate-app",{appName:r})}const o=new ya(r);for(const a of Fn.values())o.addComponent(a);const c=new uc(n,i,o);return Bt.set(r,c),c}function qr(t=xn){const e=Bt.get(t);if(!e&&t===xn&&$r())return Kr();if(!e)throw ae.create("no-app",{appName:t});return e}function ce(t,e,n){var i;let r=(i=cc[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(c.join(" "));return}xe(new Ae(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="firebase-heartbeat-database",fc=1,Ze="firebase-heartbeat-store";let An=null;function Xr(){return An||(An=Da(dc,fc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ze)}}}).catch(t=>{throw ae.create("idb-open",{originalErrorMessage:t.message})})),An}async function pc(t){try{return await(await Xr()).transaction(Ze).objectStore(Ze).get(Jr(t))}catch(e){if(e instanceof te)Se.warn(e.message);else{const n=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Se.warn(n.message)}}}async function Ji(t,e){try{const i=(await Xr()).transaction(Ze,"readwrite");await i.objectStore(Ze).put(e,Jr(t)),await i.done}catch(n){if(n instanceof te)Se.warn(n.message);else{const i=ae.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Se.warn(i.message)}}}function Jr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=1024,mc=30*24*60*60*1e3;class _c{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yc(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=mc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yi(),{heartbeatsToSend:n,unsentEntries:i}=vc(this._heartbeatsCache.heartbeats),r=Ft(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yi(){return new Date().toISOString().substring(0,10)}function vc(t,e=gc){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Qi(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qi(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class yc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aa()?ca().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qi(t){return Ft(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){xe(new Ae("platform-logger",e=>new Ma(e),"PRIVATE")),xe(new Ae("heartbeat",e=>new _c(e),"PRIVATE")),ce(Un,Xi,t),ce(Un,Xi,"esm2017"),ce("fire-js","")}Ic("");var Ec="firebase",wc="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ce(Ec,wc,"app");function ri(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Zi(t){return t!==void 0&&t.enterprise!==void 0}class Tc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Yr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ac=Yr,Qr=new ut("auth","Firebase",Yr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new ti("@firebase/auth");function Sc(t,...e){Vt.logLevel<=v.WARN&&Vt.warn(`Auth (${je}): ${t}`,...e)}function Lt(t,...e){Vt.logLevel<=v.ERROR&&Vt.error(`Auth (${je}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,...e){throw si(t,...e)}function z(t,...e){return si(t,...e)}function Zr(t,e,n){const i=Object.assign(Object.assign({},Ac()),{[e]:n});return new ut("auth","Firebase",i).create(e,{appName:t.name})}function Cc(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&G(t,"argument-error"),Zr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function si(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Qr.create(t,...e)}function f(t,e,...n){if(!t)throw si(e,...n)}function J(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lt(e),new Error(e)}function Z(t,e){t||J(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Rc(){return er()==="http:"||er()==="https:"}function er(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rc()||ra()||"connection"in navigator)?navigator.onLine:!0}function kc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.shortDelay=e,this.longDelay=n,Z(n>e,"Short delay should be less than long delay!"),this.isMobile=ia()||sa()}get(){return Pc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){Z(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;J("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;J("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;J("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new ft(3e4,6e4);function en(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,i,r={}){return ts(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const c=dt(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),es.fetch()(is(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function ts(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Oc),e);try{const r=new Dc(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,h]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw kt(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw kt(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw kt(t,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zr(t,u,h);G(t,u)}}catch(r){if(r instanceof te)throw r;G(t,"network-request-failed",{message:String(r)})}}async function ns(t,e,n,i,r={}){const s=await Be(t,e,n,i,r);return"mfaPendingCredential"in s&&G(t,"multi-factor-auth-required",{_serverResponse:s}),s}function is(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?oi(t.config,r):`${t.config.apiScheme}://${r}`}class Dc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(z(this.auth,"network-request-failed")),bc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kt(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=z(t,e,i);return r.customData._tokenResponse=n,r}async function Nc(t,e){return Be(t,"GET","/v2/recaptchaConfig",en(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(t,e){return Be(t,"POST","/v1/accounts:delete",e)}async function Mc(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uc(t,e=!1){const n=Pe(t),i=await n.getIdToken(e),r=ai(i);f(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ye(Sn(r.auth_time)),issuedAtTime:Ye(Sn(r.iat)),expirationTime:Ye(Sn(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sn(t){return Number(t)*1e3}function ai(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Lt("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vr(n);return r?JSON.parse(r):(Lt("Failed to decode base64 JWT payload"),null)}catch(r){return Lt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function xc(t){const e=ai(t);return f(e,"internal-error"),f(typeof e.exp<"u","internal-error"),f(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof te&&Fc(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Fc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ye(this.lastLoginAt),this.creationTime=Ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(t){var e;const n=t.auth,i=await t.getIdToken(),r=await et(t,Mc(n,{idToken:i}));f(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Hc(s.providerUserInfo):[],c=Vc(t.providerData,o),a=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),u=a?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new rs(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function Bc(t){const e=Pe(t);await Ht(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vc(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Hc(t){return t.map(e=>{var{providerId:n}=e,i=ri(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(t,e){const n=await ts(t,{},async()=>{const i=dt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=is(t,r,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",es.fetch()(o,{method:"POST",headers:c,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken<"u","internal-error"),f(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return f(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await $c(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new tt;return i&&(f(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(f(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(f(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return J("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e){f(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class we{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rs(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await et(this,this.stsTokenManager.getToken(this.auth,e));return f(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Uc(this,e)}reload(){return Bc(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new we(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ht(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await et(this,Lc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,c,a,h,u;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,_=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,q=(c=n.tenantId)!==null&&c!==void 0?c:void 0,ue=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,ze=(h=n.createdAt)!==null&&h!==void 0?h:void 0,We=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:X,emailVerified:E,isAnonymous:L,providerData:j,stsTokenManager:Bi}=n;f(X&&Bi,e,"internal-error");const Uo=tt.fromJSON(this.name,Bi);f(typeof X=="string",e,"internal-error"),ne(p,e.name),ne(_,e.name),f(typeof E=="boolean",e,"internal-error"),f(typeof L=="boolean",e,"internal-error"),ne(g,e.name),ne(T,e.name),ne(q,e.name),ne(ue,e.name),ne(ze,e.name),ne(We,e.name);const yn=new we({uid:X,auth:e,email:_,emailVerified:E,displayName:p,isAnonymous:L,photoURL:T,phoneNumber:g,tenantId:q,stsTokenManager:Uo,createdAt:ze,lastLoginAt:We});return j&&Array.isArray(j)&&(yn.providerData=j.map(xo=>Object.assign({},xo))),ue&&(yn._redirectEventId=ue),yn}static async _fromIdTokenResponse(e,n,i=!1){const r=new tt;r.updateFromServerResponse(n);const s=new we({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ht(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Map;function Y(t){Z(t instanceof Function,"Expected a class definition");let e=tr.get(t);return e?(Z(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ss.type="NONE";const nr=ss;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ne{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Mt(this.userKey,r.apiKey,s),this.fullPersistenceKey=Mt("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?we._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ne(Y(nr),e,i);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=r[0]||Y(nr);const o=Mt(i,e.config.apiKey,e.name);let c=null;for(const h of n)try{const u=await h._get(o);if(u){const p=we._fromJSON(e,u);h!==s&&(c=p),s=h;break}}catch{}const a=r.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ne(s,e,i):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ne(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(os(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ls(e))return"Blackberry";if(us(e))return"Webos";if(ci(e))return"Safari";if((e.includes("chrome/")||as(e))&&!e.includes("edge/"))return"Chrome";if(hs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function os(t=N()){return/firefox\//i.test(t)}function ci(t=N()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function as(t=N()){return/crios\//i.test(t)}function cs(t=N()){return/iemobile/i.test(t)}function hs(t=N()){return/android/i.test(t)}function ls(t=N()){return/blackberry/i.test(t)}function us(t=N()){return/webos/i.test(t)}function tn(t=N()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zc(t=N()){var e;return tn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wc(){return oa()&&document.documentMode===10}function ds(t=N()){return tn(t)||hs(t)||us(t)||ls(t)||/windows phone/i.test(t)||cs(t)}function Gc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t,e=[]){let n;switch(t){case"Browser":n=ir(N());break;case"Worker":n=`${ir(N())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${je}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(t,e={}){return Be(t,"GET","/v2/passwordPolicy",en(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=6;class Jc{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Xc,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rr(this),this.idTokenSubscription=new rr(this),this.beforeStateQueue=new Kc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Y(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ne.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ht(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&f(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Y(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qc(this),n=new Jc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ut("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Y(e)||this._popupRedirectResolver;f(n,this,"argument-error"),this.redirectPersistenceManager=await Ne.create(this,[Y(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(f(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,i,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ke(t){return Pe(t)}class rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=fa(n=>this.observer=n)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ps(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=z("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Qc().appendChild(i)})}function Zc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eh="https://www.google.com/recaptcha/enterprise.js?render=",th="recaptcha-enterprise",nh="NO_RECAPTCHA";class ih{constructor(e){this.type=th,this.auth=ke(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Nc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Tc(a);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(a=>{c(a)})})}function r(s,o,c){const a=window.grecaptcha;Zi(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(nh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(c=>{if(!n&&Zi(window.grecaptcha))r(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ps(eh+c).then(()=>{r(c,s,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function sr(t,e,n,i=!1){const r=new ih(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e){const n=ii(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(jt(s,e??{}))return r;G(r,"already-initialized")}return n.initialize({options:e})}function sh(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Y);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gs(t,e,n){const i=ke(t);f(i._canInitEmulator,i,"emulator-config-failed"),f(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=ms(e),{host:o,port:c}=oh(e),a=c===null?"":`:${c}`;i.config.emulator={url:`${s}//${o}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ah()}function ms(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oh(t){const e=ms(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:or(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:or(o)}}}function or(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ah(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return J("not implemented")}_getIdTokenResponse(e){return J("not implemented")}_linkToIdToken(e,n){return J("not implemented")}_getReauthenticationResolver(e){return J("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e){return ns(t,"POST","/v1/accounts:signInWithIdp",en(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="http://localhost";class Ce extends _s{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):G("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=ri(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ce(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Le(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Le(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Le(e,n)}buildRequest(){const e={requestUri:ch,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends hi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends pt{constructor(){super("facebook.com")}static credential(e){return Ce._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ie.credential(e.oauthAccessToken)}catch{return null}}}ie.FACEBOOK_SIGN_IN_METHOD="facebook.com";ie.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ce._fromParams({providerId:B.PROVIDER_ID,signInMethod:B.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return B.credentialFromTaggedObject(e)}static credentialFromError(e){return B.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return B.credential(n,i)}catch{return null}}}B.GOOGLE_SIGN_IN_METHOD="google.com";B.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends pt{constructor(){super("github.com")}static credential(e){return Ce._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return re.credential(e.oauthAccessToken)}catch{return null}}}re.GITHUB_SIGN_IN_METHOD="github.com";re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends pt{constructor(){super("twitter.com")}static credential(e,n){return Ce._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return se.credential(n,i)}catch{return null}}}se.TWITTER_SIGN_IN_METHOD="twitter.com";se.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t,e){return ns(t,"POST","/v1/accounts:signUp",en(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await we._fromIdTokenResponse(e,i,r),o=ar(i);return new Re({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=ar(i);return new Re({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function ar(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends te{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,$t.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new $t(e,n,i,r)}}function vs(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$t._fromErrorAndOperation(t,s,e,i):s})}async function hh(t,e,n=!1){const i=await et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Re._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await et(t,vs(i,r,e,t),n);f(s.idToken,i,"internal-error");const o=ai(s.idToken);f(o,i,"internal-error");const{sub:c}=o;return f(t.uid===c,i,"user-mismatch"),Re._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&G(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(t,e,n=!1){const i="signIn",r=await vs(t,i,e),s=await Re._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(t){const e=ke(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cr(t,e,n){var i;const r=ke(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const h=await sr(r,s,"signUpPassword");o=Cn(r,h)}else o=Cn(r,s).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await sr(r,s,"signUpPassword");return Cn(r,u)}throw h});const c=await o.catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&dh(t),h}),a=await Re._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(a.user),a}function fh(t,e,n,i){return Pe(t).onIdTokenChanged(e,n,i)}function ph(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function hr(t,e,n,i){return Pe(t).onAuthStateChanged(e,n,i)}const zt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zt,"1"),this.storage.removeItem(zt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(){const t=N();return ci(t)||tn(t)}const mh=1e3,_h=10;class Is extends ys{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gh()&&Gc(),this.fallbackToPolling=ds(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Wc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_h):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},mh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Is.type="LOCAL";const vh=Is;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends ys{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Es.type="SESSION";const ws=Es;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new nn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(o).map(async h=>h(n.origin,s)),a=await yh(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const h=li("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(){return window}function Eh(t){W().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(){return typeof W().WorkerGlobalScope<"u"&&typeof W().importScripts=="function"}async function wh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Th(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ah(){return Ts()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="firebaseLocalStorageDb",Sh=1,Wt="firebaseLocalStorage",Ss="fbase_key";class gt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rn(t,e){return t.transaction([Wt],e?"readwrite":"readonly").objectStore(Wt)}function Ch(){const t=indexedDB.deleteDatabase(As);return new gt(t).toPromise()}function Bn(){const t=indexedDB.open(As,Sh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Wt,{keyPath:Ss})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Wt)?e(i):(i.close(),await Ch(),e(await Bn()))})})}async function lr(t,e,n){const i=rn(t,!0).put({[Ss]:e,value:n});return new gt(i).toPromise()}async function Rh(t,e){const n=rn(t,!1).get(e),i=await new gt(n).toPromise();return i===void 0?null:i.value}function ur(t,e){const n=rn(t,!0).delete(e);return new gt(n).toPromise()}const Ph=800,kh=3;class Cs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>kh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ts()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nn._getInstance(Ah()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wh(),!this.activeServiceWorker)return;this.sender=new Ih(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Th()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bn();return await lr(e,zt,"1"),await ur(e,zt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>lr(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Rh(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ur(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=rn(r,!1).getAll();return new gt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ph)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cs.type="LOCAL";const Oh=Cs;new ft(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t,e){return e?Y(e):(f(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends _s{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Le(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bh(t){return uh(t.auth,new ui(t),t.bypassAuthState)}function Dh(t){const{auth:e,user:n}=t;return f(n,e,"internal-error"),lh(n,new ui(t),t.bypassAuthState)}async function Nh(t){const{auth:e,user:n}=t;return f(n,e,"internal-error"),hh(n,new ui(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bh;case"linkViaPopup":case"linkViaRedirect":return Nh;case"reauthViaPopup":case"reauthViaRedirect":return Dh;default:G(this.auth,"internal-error")}}resolve(e){Z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new ft(2e3,1e4);async function dr(t,e,n){const i=ke(t);Cc(t,e,hi);const r=Rs(i,n);return new ye(i,"signInViaPopup",e,r).executeNotNull()}class ye extends Ps{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ye.currentPopupAction&&ye.currentPopupAction.cancel(),ye.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return f(e,this.auth,"internal-error"),e}async onExecution(){Z(this.filter.length===1,"Popup operations only handle one event");const e=li();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(z(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(z(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ye.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(z(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lh.get())};e()}}ye.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="pendingRedirect",Ut=new Map;class Uh extends Ps{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Ut.get(this.auth._key());if(!e){try{const i=await xh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Ut.set(this.auth._key(),e)}return this.bypassAuthState||Ut.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xh(t,e){const n=Bh(e),i=jh(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Fh(t,e){Ut.set(t._key(),e)}function jh(t){return Y(t._redirectPersistence)}function Bh(t){return Mt(Mh,t.config.apiKey,t.name)}async function Vh(t,e,n=!1){const i=ke(t),r=Rs(i,e),o=await new Uh(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=10*60*1e3;class $h{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ks(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(z(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hh&&this.cachedEventUids.clear(),this.cachedEventUids.has(fr(e))}saveEventToCache(e){this.cachedEventUids.add(fr(e)),this.lastProcessedEventTime=Date.now()}}function fr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ks({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ks(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(t,e={}){return Be(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kh=/^https?/;async function qh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wh(t);for(const n of e)try{if(Xh(n))return}catch{}G(t,"unauthorized-domain")}function Xh(t){const e=jn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Kh.test(n))return!1;if(Gh.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new ft(3e4,6e4);function pr(){const t=W().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Yh(t){return new Promise((e,n)=>{var i,r,s;function o(){pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pr(),n(z(t,"network-request-failed"))},timeout:Jh.get()})}if(!((r=(i=W().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=W().gapi)===null||s===void 0)&&s.load)o();else{const c=Zc("iframefcb");return W()[c]=()=>{gapi.load?o():n(z(t,"network-request-failed"))},ps(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw xt=null,e})}let xt=null;function Qh(t){return xt=xt||Yh(t),xt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new ft(5e3,15e3),el="__/auth/iframe",tl="emulator/auth/iframe",nl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},il=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rl(t){const e=t.config;f(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oi(e,tl):`https://${t.config.authDomain}/${el}`,i={apiKey:e.apiKey,appName:t.name,v:je},r=il.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${dt(i).slice(1)}`}async function sl(t){const e=await Qh(t),n=W().gapi;return f(n,t,"internal-error"),e.open({where:document.body,url:rl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nl,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=z(t,"network-request-failed"),c=W().setTimeout(()=>{s(o)},Zh.get());function a(){W().clearTimeout(c),r(i)}i.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},al=500,cl=600,hl="_blank",ll="http://localhost";class gr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ul(t,e,n,i=al,r=cl){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const a=Object.assign(Object.assign({},ol),{width:i.toString(),height:r.toString(),top:s,left:o}),h=N().toLowerCase();n&&(c=as(h)?hl:n),os(h)&&(e=e||ll,a.scrollbars="yes");const u=Object.entries(a).reduce((_,[g,T])=>`${_}${g}=${T},`,"");if(zc(h)&&c!=="_self")return dl(e||"",c),new gr(null);const p=window.open(e||"",c,u);f(p,t,"popup-blocked");try{p.focus()}catch{}return new gr(p)}function dl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="__/auth/handler",pl="emulator/auth/handler",gl=encodeURIComponent("fac");async function mr(t,e,n,i,r,s){f(t.config.authDomain,t,"auth-domain-config-required"),f(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:je,eventId:r};if(e instanceof hi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",da(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(s||{}))o[u]=p}if(e instanceof pt){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),h=a?`#${gl}=${encodeURIComponent(a)}`:"";return`${ml(t)}?${dt(c).slice(1)}${h}`}function ml({config:t}){return t.emulator?oi(t,pl):`https://${t.authDomain}/${fl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="webStorageSupport";class _l{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ws,this._completeRedirectFn=Vh,this._overrideRedirectResult=Fh}async _openPopup(e,n,i,r){var s;Z((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mr(e,n,i,jn(),r);return ul(e,o,li())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await mr(e,n,i,jn(),r);return Eh(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Z(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await sl(e),i=new $h(e);return n.register("authEvent",r=>(f(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rn,{type:Rn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Rn];o!==void 0&&n(!!o),G(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ds()||ci()||tn()}}const vl=_l;var _r="@firebase/auth",vr="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function El(t){xe(new Ae("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;f(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fs(t)},h=new Yc(i,r,s,a);return sh(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),xe(new Ae("auth-internal",e=>{const n=ke(e.getProvider("auth").getImmediate());return(i=>new yl(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ce(_r,vr,Il(t)),ce(_r,vr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=5*60,Tl=zr("authIdTokenMaxAge")||wl;let yr=null;const Al=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Tl)return;const r=n==null?void 0:n.token;yr!==r&&(yr=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Vn(t=qr()){const e=ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rh(t,{popupRedirectResolver:vl,persistence:[Oh,vh,ws]}),i=zr("authTokenSyncURL");if(i){const s=Al(i);ph(n,s,()=>s(n.currentUser)),fh(n,o=>s(o))}const r=Hr("auth");return r&&gs(n,`http://${r}`),n}El("Browser");var Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l,di=di||{},d=Sl||self;function sn(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Cl(t){return Object.prototype.hasOwnProperty.call(t,Pn)&&t[Pn]||(t[Pn]=++Rl)}var Pn="closure_uid_"+(1e9*Math.random()>>>0),Rl=0;function Pl(t,e,n){return t.call.apply(t.bind,arguments)}function kl(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b=Pl:b=kl,b.apply(null,arguments)}function Ot(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function S(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),c=2;c<arguments.length;c++)o[c-2]=arguments[c];return e.prototype[r].apply(i,o)}}function he(){this.s=this.s,this.o=this.o}var Ol=0;he.prototype.s=!1;he.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ol!=0)&&Cl(this)};he.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Os=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fi(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ir(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(sn(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function D(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var bl=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{d.addEventListener("test",()=>{},e),d.removeEventListener("test",()=>{},e)}catch{}return t}();function nt(t){return/^[\s\xa0]*$/.test(t)}function on(){var t=d.navigator;return t&&(t=t.userAgent)?t:""}function V(t){return on().indexOf(t)!=-1}function pi(t){return pi[" "](t),t}pi[" "]=function(){};function Dl(t,e){var n=Su;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Nl=V("Opera"),it=V("Trident")||V("MSIE"),bs=V("Edge"),Hn=bs||it,Ds=V("Gecko")&&!(on().toLowerCase().indexOf("webkit")!=-1&&!V("Edge"))&&!(V("Trident")||V("MSIE"))&&!V("Edge"),Ll=on().toLowerCase().indexOf("webkit")!=-1&&!V("Edge");function Ns(){var t=d.document;return t?t.documentMode:void 0}e:{var Er="",kn=function(){var t=on();if(Ds)return/rv:([^\);]+)(\)|;)/.exec(t);if(bs)return/Edge\/([\d\.]+)/.exec(t);if(it)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ll)return/WebKit\/(\S+)/.exec(t);if(Nl)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kn&&(Er=kn?kn[1]:""),it){var wr=Ns();if(wr!=null&&wr>parseFloat(Er))break e}}d.document&&it&&Ns();function rt(t,e){if(D.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ds){e:{try{pi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ml[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.$.h.call(this)}}S(rt,D);var Ml={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Ul=0;function xl(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Ul,this.fa=this.ia=!1}function an(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gi(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Fl(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ls(t){const e={};for(const n in t)e[n]=t[n];return e}const Tr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ms(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Tr.length;s++)n=Tr[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function cn(t){this.src=t,this.g={},this.h=0}cn.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zn(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xl(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function $n(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Os(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(an(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zn(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var mi="closure_lm_"+(1e6*Math.random()|0),On={};function Us(t,e,n,i,r){if(i&&i.once)return Fs(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Us(t,e[s],n,i,r);return null}return n=yi(n),t&&t[_t]?t.O(e,n,mt(i)?!!i.capture:!!i,r):xs(t,e,n,!1,i,r)}function xs(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=mt(r)?!!r.capture:!!r,c=vi(t);if(c||(t[mi]=c=new cn(t)),n=c.add(e,n,i,o,s),n.proxy)return n;if(i=jl(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)bl||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Bs(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jl(){function t(n){return e.call(t.src,t.listener,n)}const e=Bl;return t}function Fs(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Fs(t,e[s],n,i,r);return null}return n=yi(n),t&&t[_t]?t.P(e,n,mt(i)?!!i.capture:!!i,r):xs(t,e,n,!0,i,r)}function js(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)js(t,e[s],n,i,r);else i=mt(i)?!!i.capture:!!i,n=yi(n),t&&t[_t]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zn(s,n,i,r),-1<n&&(an(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=vi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zn(e,n,i,r)),(n=-1<t?e[t]:null)&&_i(n))}function _i(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_t])$n(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Bs(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=vi(e))?($n(n,t),n.h==0&&(n.src=null,e[mi]=null)):an(t)}}}function Bs(t){return t in On?On[t]:On[t]="on"+t}function Bl(t,e){if(t.fa)t=!0;else{e=new rt(e,this);var n=t.listener,i=t.la||t.src;t.ia&&_i(t),t=n.call(i,e)}return t}function vi(t){return t=t[mi],t instanceof cn?t:null}var bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function yi(t){return typeof t=="function"?t:(t[bn]||(t[bn]=function(e){return t.handleEvent(e)}),t[bn])}function A(){he.call(this),this.i=new cn(this),this.S=this,this.J=null}S(A,he);A.prototype[_t]=!0;A.prototype.removeEventListener=function(t,e,n,i){js(this,t,e,n,i)};function R(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new D(e,t);else if(e instanceof D)e.target=e.target||t;else{var r=e;e=new D(i,t),Ms(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=bt(o,i,!0,e)&&r}if(o=e.g=t,r=bt(o,i,!0,e)&&r,r=bt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=bt(o,i,!1,e)&&r}A.prototype.N=function(){if(A.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)an(n[i]);delete t.g[e],t.h--}}this.J=null};A.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};A.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function bt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var c=o.listener,a=o.la||o.src;o.ia&&$n(t.i,o),r=c.call(a,i)!==!1&&r}}return r&&!i.defaultPrevented}var Ii=d.JSON.stringify;class Vl{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Hl(){var t=Ei;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $l{constructor(){this.h=this.g=null}add(e,n){const i=Vs.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Vs=new Vl(()=>new zl,t=>t.reset());class zl{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wl(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Gl(t){d.setTimeout(()=>{throw t},0)}let st,ot=!1,Ei=new $l,Hs=()=>{const t=d.Promise.resolve(void 0);st=()=>{t.then(Kl)}};var Kl=()=>{for(var t;t=Hl();){try{t.h.call(t.g)}catch(n){Gl(n)}var e=Vs;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ot=!1};function hn(t,e){A.call(this),this.h=t||1,this.g=e||d,this.j=b(this.qb,this),this.l=Date.now()}S(hn,A);l=hn.prototype;l.ga=!1;l.T=null;l.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),R(this,"tick"),this.ga&&(wi(this),this.start()))}};l.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wi(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}l.N=function(){hn.$.N.call(this),wi(this),delete this.g};function Ti(t,e,n){if(typeof t=="function")n&&(t=b(t,n));else if(t&&typeof t.handleEvent=="function")t=b(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:d.setTimeout(t,e||0)}function $s(t){t.g=Ti(()=>{t.g=null,t.i&&(t.i=!1,$s(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ql extends he{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$s(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(t){he.call(this),this.h=t,this.g={}}S(at,he);var Ar=[];function zs(t,e,n,i){Array.isArray(n)||(n&&(Ar[0]=n.toString()),n=Ar);for(var r=0;r<n.length;r++){var s=Us(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ws(t){gi(t.g,function(e,n){this.g.hasOwnProperty(n)&&_i(e)},t),t.g={}}at.prototype.N=function(){at.$.N.call(this),Ws(this)};at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ln(){this.g=!0}ln.prototype.Ea=function(){this.g=!1};function Xl(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",c=s.split("&"),a=0;a<c.length;a++){var h=c[a].split("=");if(1<h.length){var u=h[0];h=h[1];var p=u.split("_");o=2<=p.length&&p[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Jl(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function De(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ql(t,n)+(i?" "+i:"")})}function Yl(t,e){t.info(function(){return"TIMEOUT: "+e})}ln.prototype.info=function(){};function Ql(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ii(n)}catch{return e}}var Ve={},Sr=null;function Ai(){return Sr=Sr||new A}Ve.Ta="serverreachability";function Gs(t){D.call(this,Ve.Ta,t)}S(Gs,D);function ct(t){const e=Ai();R(e,new Gs(e))}Ve.STAT_EVENT="statevent";function Ks(t,e){D.call(this,Ve.STAT_EVENT,t),this.stat=e}S(Ks,D);function M(t){const e=Ai();R(e,new Ks(e,t))}Ve.Ua="timingevent";function qs(t,e){D.call(this,Ve.Ua,t),this.size=e}S(qs,D);function vt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){t()},e)}var Si={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Zl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ci(){}Ci.prototype.h=null;function Cr(t){return t.h||(t.h=t.i())}function eu(){}var yt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ri(){D.call(this,"d")}S(Ri,D);function Pi(){D.call(this,"c")}S(Pi,D);var Wn;function un(){}S(un,Ci);un.prototype.g=function(){return new XMLHttpRequest};un.prototype.i=function(){return{}};Wn=new un;function It(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new at(this),this.P=tu,t=Hn?125:void 0,this.V=new hn(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Xs}function Xs(){this.i=null,this.g="",this.h=!1}var tu=45e3,Gn={},Gt={};l=It.prototype;l.setTimeout=function(t){this.P=t};function Kn(t,e,n){t.L=1,t.v=fn(ee(e)),t.s=n,t.S=!0,Js(t,null)}function Js(t,e){t.G=Date.now(),Et(t),t.A=ee(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),ro(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Xs,t.g=Co(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ql(b(t.Pa,t,t.g),t.O)),zs(t.U,t.g,"readystatechange",t.nb),e=t.I?Ls(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ct(),Xl(t.j,t.u,t.A,t.m,t.W,t.s)}l.nb=function(t){t=t.target;const e=this.M;e&&H(t)==3?e.l():this.Pa(t)};l.Pa=function(t){try{if(t==this.g)e:{const u=H(this.g);var e=this.g.Ia();const p=this.g.da();if(!(3>u)&&(u!=3||Hn||this.g&&(this.h.h||this.g.ja()||Or(this.g)))){this.J||u!=4||e==7||(e==8||0>=p?ct(3):ct(2)),dn(this);var n=this.g.da();this.ca=n;t:if(Ys(this)){var i=Or(this.g);t="";var r=i.length,s=H(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ie(this),Qe(this);var o="";break t}this.h.i=new d.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Jl(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var c,a=this.g;if((c=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nt(c)){var h=c;break t}}h=null}if(n=h)De(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qn(this,n);else{this.i=!1,this.o=3,M(12),Ie(this),Qe(this);break e}}this.S?(Qs(this,u,o),Hn&&this.i&&u==3&&(zs(this.U,this.V,"tick",this.mb),this.V.start())):(De(this.j,this.m,o,null),qn(this,o)),u==4&&Ie(this),this.i&&!this.J&&(u==4?wo(this.l,this):(this.i=!1,Et(this)))}else wu(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,M(12)):(this.o=0,M(13)),Ie(this),Qe(this)}}}catch{}finally{}};function Ys(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Qs(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=nu(t,n),r==Gt){e==4&&(t.o=4,M(14),i=!1),De(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Gn){t.o=4,M(15),De(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else De(t.j,t.m,r,null),qn(t,r);Ys(t)&&r!=Gt&&r!=Gn&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,M(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Li(e),e.M=!0,M(11))):(De(t.j,t.m,n,"[Invalid Chunked Response]"),Ie(t),Qe(t))}l.mb=function(){if(this.g){var t=H(this.g),e=this.g.ja();this.C<e.length&&(dn(this),Qs(this,t,e),this.i&&t!=4&&Et(this))}};function nu(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Gt:(n=Number(e.substring(n,i)),isNaN(n)?Gn:(i+=1,i+n>e.length?Gt:(e=e.slice(i,i+n),t.C=i+n,e)))}l.cancel=function(){this.J=!0,Ie(this)};function Et(t){t.Y=Date.now()+t.P,Zs(t,t.P)}function Zs(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vt(b(t.lb,t),e)}function dn(t){t.B&&(d.clearTimeout(t.B),t.B=null)}l.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Yl(this.j,this.A),this.L!=2&&(ct(),M(17)),Ie(this),this.o=2,Qe(this)):Zs(this,this.Y-t)};function Qe(t){t.l.H==0||t.J||wo(t.l,t)}function Ie(t){dn(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,wi(t.V),Ws(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function qn(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Xn(n.i,t))){if(!t.K&&Xn(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xt(n),_n(n);else break e;Ni(n),M(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=vt(b(n.ib,n),6e3));if(1>=ao(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ee(n,11)}else if((t.K||n.g==t)&&Xt(n),!nt(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let h=r[e];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const u=h[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const p=h[4];p!=null&&(n.Ga=p,n.l.info("SVER="+n.Ga));const _=h[5];_!=null&&typeof _=="number"&&0<_&&(i=1.5*_,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const T=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var s=i.i;s.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ki(s,s.h),s.h=null))}if(i.F){const q=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;q&&(i.Da=q,I(i.I,i.F,q))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=So(i,i.J?i.pa:null,i.Y),o.K){co(i.i,o);var c=o,a=i.L;a&&c.setTimeout(a),c.B&&(dn(c),Et(c)),i.g=o}else Io(i);0<n.j.length&&vn(n)}else h[0]!="stop"&&h[0]!="close"||Ee(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Ee(n,7):Di(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}ct(4)}catch{}}function iu(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(sn(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ru(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(sn(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function eo(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(sn(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ru(t),i=iu(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function su(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Te(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Te){this.h=t.h,Kt(this,t.j),this.s=t.s,this.g=t.g,qt(this,t.m),this.l=t.l;var e=t.i,n=new ht;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rr(this,n),this.o=t.o}else t&&(e=String(t).match(to))?(this.h=!1,Kt(this,e[1]||"",!0),this.s=Xe(e[2]||""),this.g=Xe(e[3]||"",!0),qt(this,e[4]),this.l=Xe(e[5]||"",!0),Rr(this,e[6]||"",!0),this.o=Xe(e[7]||"")):(this.h=!1,this.i=new ht(null,this.h))}Te.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Je(e,Pr,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Je(e,Pr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Je(n,n.charAt(0)=="/"?cu:au,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Je(n,lu)),t.join("")};function ee(t){return new Te(t)}function Kt(t,e,n){t.j=n?Xe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rr(t,e,n){e instanceof ht?(t.i=e,uu(t.i,t.h)):(n||(e=Je(e,hu)),t.i=new ht(e,t.h))}function I(t,e,n){t.i.set(e,n)}function fn(t){return I(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Je(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ou),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ou(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pr=/[#\/\?@]/g,au=/[#\?:]/g,cu=/[#\?]/g,hu=/[#\?@]/g,lu=/#/g;function ht(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function le(t){t.g||(t.g=new Map,t.h=0,t.i&&su(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}l=ht.prototype;l.add=function(t,e){le(this),this.i=null,t=He(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function no(t,e){le(t),e=He(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function io(t,e){return le(t),e=He(t,e),t.g.has(e)}l.forEach=function(t,e){le(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};l.ta=function(){le(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};l.Z=function(t){le(this);let e=[];if(typeof t=="string")io(this,t)&&(e=e.concat(this.g.get(He(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};l.set=function(t,e){return le(this),this.i=null,t=He(this,t),io(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};l.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ro(t,e,n){no(t,e),0<n.length&&(t.i=null,t.g.set(He(t,e),fi(n)),t.h+=n.length)}l.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function He(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uu(t,e){e&&!t.j&&(le(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(no(this,i),ro(this,r,n))},t)),t.j=e}var du=class{constructor(t,e){this.g=t,this.map=e}};function so(t){this.l=t||fu,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fu=10;function oo(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ao(t){return t.h?1:t.g?t.g.size:0}function Xn(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ki(t,e){t.g?t.g.add(e):t.h=e}function co(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}so.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ho(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return fi(t.i)}var pu=class{stringify(t){return d.JSON.stringify(t,void 0)}parse(t){return d.JSON.parse(t,void 0)}};function gu(){this.g=new pu}function mu(t,e,n){const i=n||"";try{eo(t,function(r,s){let o=r;mt(r)&&(o=Ii(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function _u(t,e){const n=new ln;if(d.Image){const i=new Image;i.onload=Ot(Dt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ot(Dt,n,i,"TestLoadImage: error",!1,e),i.onabort=Ot(Dt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ot(Dt,n,i,"TestLoadImage: timeout",!1,e),d.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Dt(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function pn(t){this.l=t.fc||null,this.j=t.ob||!1}S(pn,Ci);pn.prototype.g=function(){return new gn(this.l,this.j)};pn.prototype.i=function(t){return function(){return t}}({});function gn(t,e){A.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Oi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}S(gn,A);var Oi=0;l=gn.prototype;l.open=function(t,e){if(this.readyState!=Oi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,lt(this)};l.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||d).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wt(this)),this.readyState=Oi};l.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,lt(this)),this.g&&(this.readyState=3,lt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lo(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function lo(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}l.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wt(this):lt(this),this.readyState==3&&lo(this)}};l.Za=function(t){this.g&&(this.response=this.responseText=t,wt(this))};l.Ya=function(t){this.g&&(this.response=t,wt(this))};l.ka=function(){this.g&&wt(this)};function wt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,lt(t)}l.setRequestHeader=function(t,e){this.v.append(t,e)};l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};l.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function lt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vu=d.JSON.parse;function w(t){A.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=uo,this.L=this.M=!1}S(w,A);var uo="",yu=/^https?$/i,Iu=["POST","PUT"];l=w.prototype;l.Oa=function(t){this.M=t};l.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wn.g(),this.C=this.u?Cr(this.u):Cr(Wn),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){kr(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=d.FormData&&t instanceof d.FormData,!(0<=Os(Iu,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{go(this),0<this.B&&((this.L=Eu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Ti(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){kr(this,s)}};function Eu(t){return it&&typeof t.timeout=="number"&&t.ontimeout!==void 0}l.ua=function(){typeof di<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,R(this,"timeout"),this.abort(8))};function kr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fo(t),mn(t)}function fo(t){t.F||(t.F=!0,R(t,"complete"),R(t,"error"))}l.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,R(this,"complete"),R(this,"abort"),mn(this))};l.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mn(this,!0)),w.$.N.call(this)};l.La=function(){this.s||(this.G||this.v||this.l?po(this):this.kb())};l.kb=function(){po(this)};function po(t){if(t.h&&typeof di<"u"&&(!t.C[1]||H(t)!=4||t.da()!=2)){if(t.v&&H(t)==4)Ti(t.La,0,t);else if(R(t,"readystatechange"),H(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(to)[1]||null;!r&&d.self&&d.self.location&&(r=d.self.location.protocol.slice(0,-1)),i=!yu.test(r?r.toLowerCase():"")}n=i}if(n)R(t,"complete"),R(t,"success");else{t.m=6;try{var s=2<H(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",fo(t)}}finally{mn(t)}}}}function mn(t,e){if(t.g){go(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||R(t,"ready");try{n.onreadystatechange=i}catch{}}}function go(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(d.clearTimeout(t.A),t.A=null)}l.isActive=function(){return!!this.g};function H(t){return t.g?t.g.readyState:0}l.da=function(){try{return 2<H(this)?this.g.status:-1}catch{return-1}};l.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};l.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vu(e)}};function Or(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case uo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wu(t){const e={};t=(t.g&&2<=H(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(nt(t[i]))continue;var n=Wl(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}Fl(e,function(i){return i.join(", ")})}l.Ia=function(){return this.m};l.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mo(t){let e="";return gi(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function bi(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=mo(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):I(t,e,n))}function Ke(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _o(t){this.Ga=0,this.j=[],this.l=new ln,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ke("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ke("baseRetryDelayMs",5e3,t),this.hb=Ke("retryDelaySeedMs",1e4,t),this.eb=Ke("forwardChannelMaxRetries",2,t),this.xa=Ke("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new so(t&&t.concurrentRequestLimit),this.Ja=new gu,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}l=_o.prototype;l.ra=8;l.H=1;function Di(t){if(vo(t),t.H==3){var e=t.W++,n=ee(t.I);if(I(n,"SID",t.K),I(n,"RID",e),I(n,"TYPE","terminate"),Tt(t,n),e=new It(t,t.l,e),e.L=2,e.v=fn(ee(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&d.Image&&(new Image().src=e.v,n=!0),n||(e.g=Co(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Et(e)}Ao(t)}function _n(t){t.g&&(Li(t),t.g.cancel(),t.g=null)}function vo(t){_n(t),t.u&&(d.clearTimeout(t.u),t.u=null),Xt(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&d.clearTimeout(t.m),t.m=null)}function vn(t){if(!oo(t.i)&&!t.m){t.m=!0;var e=t.Na;st||Hs(),ot||(st(),ot=!0),Ei.add(e,t),t.C=0}}function Tu(t,e){return ao(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=vt(b(t.Na,t,e),To(t,t.C)),t.C++,!0)}l.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new It(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Ls(s),Ms(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=yo(this,r,e),n=ee(this.I),I(n,"RID",t),I(n,"CVER",22),this.F&&I(n,"X-HTTP-Session-Id",this.F),Tt(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(mo(s)))+"&"+e:this.o&&bi(n,this.o,s)),ki(this.i,r),this.bb&&I(n,"TYPE","init"),this.P?(I(n,"$req",e),I(n,"SID","null"),r.aa=!0,Kn(r,n,null)):Kn(r,n,e),this.H=2}}else this.H==3&&(t?br(this,t):this.j.length==0||oo(this.i)||br(this))};function br(t,e){var n;e?n=e.m:n=t.W++;const i=ee(t.I);I(i,"SID",t.K),I(i,"RID",n),I(i,"AID",t.V),Tt(t,i),t.o&&t.s&&bi(i,t.o,t.s),n=new It(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=yo(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ki(t.i,n),Kn(n,i,e)}function Tt(t,e){t.na&&gi(t.na,function(n,i){I(e,i,n)}),t.h&&eo({},function(n,i){I(e,i,n)})}function yo(t,e,n){n=Math.min(t.j.length,n);var i=t.h?b(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let c=!0;for(let a=0;a<n;a++){let h=r[a].g;const u=r[a].map;if(h-=s,0>h)s=Math.max(0,r[a].g-100),c=!1;else try{mu(u,o,"req"+h+"_")}catch{i&&i(u)}}if(c){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Io(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;st||Hs(),ot||(st(),ot=!0),Ei.add(e,t),t.A=0}}function Ni(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=vt(b(t.Ma,t),To(t,t.A)),t.A++,!0)}l.Ma=function(){if(this.u=null,Eo(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=vt(b(this.jb,this),t)}};l.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,M(10),_n(this),Eo(this))};function Li(t){t.B!=null&&(d.clearTimeout(t.B),t.B=null)}function Eo(t){t.g=new It(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ee(t.wa);I(e,"RID","rpc"),I(e,"SID",t.K),I(e,"AID",t.V),I(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&I(e,"TO",t.qa),I(e,"TYPE","xmlhttp"),Tt(t,e),t.o&&t.s&&bi(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=fn(ee(e)),n.s=null,n.S=!0,Js(n,t)}l.ib=function(){this.v!=null&&(this.v=null,_n(this),Ni(this),M(19))};function Xt(t){t.v!=null&&(d.clearTimeout(t.v),t.v=null)}function wo(t,e){var n=null;if(t.g==e){Xt(t),Li(t),t.g=null;var i=2}else if(Xn(t.i,e))n=e.F,co(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=Ai(),R(i,new qs(i,n)),vn(t)}else Io(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&Tu(t,e)||i==2&&Ni(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ee(t,5);break;case 4:Ee(t,10);break;case 3:Ee(t,6);break;default:Ee(t,2)}}}function To(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ee(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=b(t.pb,t);n||(n=new Te("//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Kt(n,"https"),fn(n)),_u(n.toString(),i)}else M(2);t.H=0,t.h&&t.h.za(e),Ao(t),vo(t)}l.pb=function(t){t?(this.l.info("Successfully pinged google.com"),M(2)):(this.l.info("Failed to ping google.com"),M(1))};function Ao(t){if(t.H=0,t.ma=[],t.h){const e=ho(t.i);(e.length!=0||t.j.length!=0)&&(Ir(t.ma,e),Ir(t.ma,t.j),t.i.i.length=0,fi(t.j),t.j.length=0),t.h.ya()}}function So(t,e,n){var i=n instanceof Te?ee(n):new Te(n);if(i.g!="")e&&(i.g=e+"."+i.g),qt(i,i.m);else{var r=d.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Te(null);i&&Kt(s,i),e&&(s.g=e),r&&qt(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&I(i,n,e),I(i,"VER",t.ra),Tt(t,i),i}function Co(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new w(new pn({ob:!0})):new w(t.va),e.Oa(t.J),e}l.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ro(){}l=Ro.prototype;l.Ba=function(){};l.Aa=function(){};l.za=function(){};l.ya=function(){};l.isActive=function(){return!0};l.Va=function(){};function F(t,e){A.call(this),this.g=new _o(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!nt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!nt(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $e(this)}S(F,A);F.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;M(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=So(t,null,t.Y),vn(t)};F.prototype.close=function(){Di(this.g)};F.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ii(t),t=n);e.j.push(new du(e.fb++,t)),e.H==3&&vn(e)};F.prototype.N=function(){this.g.h=null,delete this.j,Di(this.g),delete this.g,F.$.N.call(this)};function Po(t){Ri.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}S(Po,Ri);function ko(){Pi.call(this),this.status=1}S(ko,Pi);function $e(t){this.g=t}S($e,Ro);$e.prototype.Ba=function(){R(this.g,"a")};$e.prototype.Aa=function(t){R(this.g,new Po(t))};$e.prototype.za=function(t){R(this.g,new ko)};$e.prototype.ya=function(){R(this.g,"b")};function Au(){this.blockSize=-1}function K(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}S(K,Au);K.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Dn(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}K.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)Dn(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Dn(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Dn(this,i),r=0;break}}this.h=r,this.i+=e};K.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function y(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var Su={};function Mi(t){return-128<=t&&128>t?Dl(t,function(e){return new y([e|0],0>e?-1:0)}):new y([t|0],0>t?-1:0)}function $(t){if(isNaN(t)||!isFinite(t))return Me;if(0>t)return C($(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Jn;return new y(e,0)}function Oo(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return C(Oo(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=$(Math.pow(e,8)),i=Me,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=$(Math.pow(e,s)),i=i.R(s).add($(o))):(i=i.R(n),i=i.add($(o)))}return i}var Jn=4294967296,Me=Mi(0),Yn=Mi(1),Dr=Mi(16777216);l=y.prototype;l.ea=function(){if(x(this))return-C(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Jn+i)*e,e*=Jn}return t};l.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Q(this))return"0";if(x(this))return"-"+C(this).toString(t);for(var e=$(Math.pow(t,6)),n=this,i="";;){var r=Yt(n,e).g;n=Jt(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Q(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};l.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Q(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function x(t){return t.h==-1}l.X=function(t){return t=Jt(this,t),x(t)?-1:Q(t)?0:1};function C(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new y(n,~t.h).add(Yn)}l.abs=function(){return x(this)?C(this):this};l.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new y(n,n[n.length-1]&-2147483648?-1:0)};function Jt(t,e){return t.add(C(e))}l.R=function(t){if(Q(this)||Q(t))return Me;if(x(this))return x(t)?C(this).R(C(t)):C(C(this).R(t));if(x(t))return C(this.R(C(t)));if(0>this.X(Dr)&&0>t.X(Dr))return $(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,c=t.D(r)>>>16,a=t.D(r)&65535;n[2*i+2*r]+=o*a,Nt(n,2*i+2*r),n[2*i+2*r+1]+=s*a,Nt(n,2*i+2*r+1),n[2*i+2*r+1]+=o*c,Nt(n,2*i+2*r+1),n[2*i+2*r+2]+=s*c,Nt(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new y(n,0)};function Nt(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qe(t,e){this.g=t,this.h=e}function Yt(t,e){if(Q(e))throw Error("division by zero");if(Q(t))return new qe(Me,Me);if(x(t))return e=Yt(C(t),e),new qe(C(e.g),C(e.h));if(x(e))return e=Yt(t,C(e)),new qe(C(e.g),e.h);if(30<t.g.length){if(x(t)||x(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Yn,i=e;0>=i.X(t);)n=Nr(n),i=Nr(i);var r=be(n,1),s=be(i,1);for(i=be(i,2),n=be(n,2);!Q(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=be(i,1),n=be(n,1)}return e=Jt(t,r.R(e)),new qe(r,e)}for(r=Me;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=$(n),o=s.R(e);x(o)||0<o.X(t);)n-=i,s=$(n),o=s.R(e);Q(s)&&(s=Yn),r=r.add(s),t=Jt(t,o)}return new qe(r,t)}l.gb=function(t){return Yt(this,t).h};l.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new y(n,this.h&t.h)};l.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new y(n,this.h|t.h)};l.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new y(n,this.h^t.h)};function Nr(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new y(n,t.h)}function be(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new y(r,t.h)}F.prototype.send=F.prototype.u;F.prototype.open=F.prototype.m;F.prototype.close=F.prototype.close;Si.NO_ERROR=0;Si.TIMEOUT=8;Si.HTTP_ERROR=6;Zl.COMPLETE="complete";eu.EventType=yt;yt.OPEN="a";yt.CLOSE="b";yt.ERROR="c";yt.MESSAGE="d";A.prototype.listen=A.prototype.O;w.prototype.listenOnce=w.prototype.P;w.prototype.getLastError=w.prototype.Sa;w.prototype.getLastErrorCode=w.prototype.Ia;w.prototype.getStatus=w.prototype.da;w.prototype.getResponseJson=w.prototype.Wa;w.prototype.getResponseText=w.prototype.ja;w.prototype.send=w.prototype.ha;w.prototype.setWithCredentials=w.prototype.Oa;K.prototype.digest=K.prototype.l;K.prototype.reset=K.prototype.reset;K.prototype.update=K.prototype.j;y.prototype.add=y.prototype.add;y.prototype.multiply=y.prototype.R;y.prototype.modulo=y.prototype.gb;y.prototype.compare=y.prototype.X;y.prototype.toNumber=y.prototype.ea;y.prototype.toString=y.prototype.toString;y.prototype.getBits=y.prototype.D;y.fromNumber=$;y.fromString=Oo;var Cu=y;const Lr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}P.UNAUTHENTICATED=new P(null),P.GOOGLE_CREDENTIALS=new P("google-credentials-uid"),P.FIRST_PARTY=new P("first-party-uid"),P.MOCK_USER=new P("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new ti("@firebase/firestore");function U(t,...e){if(Fe.logLevel<=v.DEBUG){const n=e.map(xi);Fe.debug(`Firestore (${At}): ${t}`,...n)}}function Ui(t,...e){if(Fe.logLevel<=v.ERROR){const n=e.map(xi);Fe.error(`Firestore (${At}): ${t}`,...n)}}function Ru(t,...e){if(Fe.logLevel<=v.WARN){const n=e.map(xi);Fe.warn(`Firestore (${At}): ${t}`,...n)}}function xi(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t="Unexpected state"){const e=`FIRESTORE (${At}) INTERNAL ASSERTION FAILED: `+t;throw Ui(e),new Error(e)}function Qn(t,e){t||Fi()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends te{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(P.UNAUTHENTICATED))}shutdown(){}}class ku{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ou{constructor(e){this.t=e,this.currentUser=P.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let s=new Ue;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ue,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await r(this.currentUser)})},c=a=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>c(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?c(a):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ue)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Qn(typeof i.accessToken=="string"),new bo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qn(e===null||typeof e=="string"),new P(e)}}class bu{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=P.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Du{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new bu(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(P.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lu{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qn(typeof n.token=="string"),this.R=n.token,new Nu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Mu(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Do(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,i,r,s,o,c,a,h){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=a,this.useFetchStreams=h}}class Qt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mr,m;(m=Mr||(Mr={}))[m.OK=0]="OK",m[m.CANCELLED=1]="CANCELLED",m[m.UNKNOWN=2]="UNKNOWN",m[m.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m[m.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m[m.NOT_FOUND=5]="NOT_FOUND",m[m.ALREADY_EXISTS=6]="ALREADY_EXISTS",m[m.PERMISSION_DENIED=7]="PERMISSION_DENIED",m[m.UNAUTHENTICATED=16]="UNAUTHENTICATED",m[m.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m[m.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m[m.ABORTED=10]="ABORTED",m[m.OUT_OF_RANGE=11]="OUT_OF_RANGE",m[m.UNIMPLEMENTED=12]="UNIMPLEMENTED",m[m.INTERNAL=13]="INTERNAL",m[m.UNAVAILABLE=14]="UNAVAILABLE",m[m.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Cu([4294967295,4294967295],0);function Nn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,i=1e3,r=1.5,s=6e4){this.si=e,this.timerId=n,this.bo=i,this.Do=r,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(e){this.cancel();const n=Math.floor(this.Co+this.No()),i=Math.max(0,Date.now()-this.Mo),r=Math.max(0,n-i);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Mo=Date.now(),e())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,c=new ji(e,n,o,r,s);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ju(t,e){if(Ui("AsyncQueue",`${e}: ${t}`),Do(t))return new O(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=P.UNAUTHENTICATED,this.clientId=Uu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=ju(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Map;function Vu(t,e,n,i){if(e===!0&&i===!0)throw new O(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Fi()}function $u(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hu(t);throw new O(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new O(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=No((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lo{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xr(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Pu;switch(i.type){case"firstParty":return new Du(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Ur.get(n);i&&(U("ComponentProvider","Removing Datastore"),Ur.delete(n),i.terminate())}(this),Promise.resolve()}}function Mo(t,e,n,i={}){var r;const s=(t=$u(t,Lo))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ru("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let c,a;if(typeof i.mockUserToken=="string")c=i.mockUserToken,a=P.MOCK_USER;else{c=na(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new O(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new P(h)}t._authCredentials=new ku(new bo(c,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new Fu(this,"async_queue_retry"),this.eu=()=>{const n=Nn();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const e=Nn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.tu(),this.nu(e)}enterRestrictedMode(e){if(!this.ja){this.ja=!0,this.Za=e||!1;const n=Nn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(e){if(this.tu(),this.ja)return new Promise(()=>{});const n=new Ue;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.za.push(e),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(e){if(!Do(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(e){const n=this.Ga.then(()=>(this.Ya=!0,e().catch(i=>{this.Ja=i,this.Ya=!1;const r=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(i);throw Ui("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ya=!1,i))));return this.Ga=n,n}enqueueAfterDelay(e,n,i){this.tu(),this.Xa.indexOf(e)>-1&&(n=0);const r=ji.createAndSchedule(this,e,n,i,s=>this.iu(s));return this.Ha.push(r),r}tu(){this.Ja&&Fi()}verifyOperationInProgress(){}async su(){let e;do e=this.Ga,await e;while(e!==this.Ga)}ou(e){for(const n of this.Ha)if(n.timerId===e)return!0;return!1}_u(e){return this.su().then(()=>{this.Ha.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.su()})}au(e){this.Xa.push(e)}iu(e){const n=this.Ha.indexOf(e);this.Ha.splice(n,1)}}class Wu extends Lo{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new zu}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ku(this),this._firestoreClient.terminate()}}function Gu(t,e){const n=typeof t=="object"?t:qr(),i=typeof t=="string"?t:e||"(default)",r=ii(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=ea("firestore");s&&Mo(r,...s)}return r}function Ku(t){var e,n,i;const r=t._freezeSettings(),s=function(c,a,h,u){return new xu(c,a,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,No(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Bu(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}(function(e,n=!0){(function(r){At=r})(je),xe(new Ae("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),c=new Wu(new Ou(i.getProvider("auth-internal")),new Lu(i.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qt(h.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),ce(Lr,"4.1.1",e),ce(Lr,"4.1.1","esm2017")})();const qu={apiKey:"AIzaSyDyxYCVc7Q9iS0f7udYiscLrGbcjxA4ccg",authDomain:"switter-c8c87.firebaseapp.com",projectId:"switter-c8c87",storageBucket:"switter-c8c87.appspot.com",messagingSenderId:"865202535032",appId:"1:865202535032:web:5cb519334a835bff940b8d",measurementId:"G-W3D2KDNHQ3"},Zt=Kr(qu),Xu=Gu(Zt),Ju=Vn(Zt);typeof window<"u"&&window.location.hostname==="localhost"&&(Mo(Xu,"localhost",8080),gs(Ju,"http://localhost:9099"));const{console:Yu}=Go,_e="src/routes/+page.svelte";function Zn(t){let e,n="Sign Up",i,r,s,o,c,a,h,u,p,_,g,T,q="Sign up with Email",ue,ze;const We={c:function(){e=fe("h2"),e.textContent=n,i=St(),r=fe("button"),s=fe("img"),c=zo(" Sign up with Google"),a=St(),h=fe("div"),u=fe("input"),p=St(),_=fe("input"),g=St(),T=fe("button"),T.textContent=q,this.h()},l:function(E){e=pe(E,"H2",{"data-svelte-h":!0}),Hi(e)!=="svelte-1xeorxw"&&(e.textContent=n),i=Ct(E),r=pe(E,"BUTTON",{});var L=$i(r);s=pe(L,"IMG",{src:!0,alt:!0,style:!0}),c=Wo(L," Sign up with Google"),L.forEach(ge),a=Ct(E),h=pe(E,"DIV",{});var j=$i(h);u=pe(j,"INPUT",{placeholder:!0,type:!0}),p=Ct(j),_=pe(j,"INPUT",{placeholder:!0,type:!0}),g=Ct(j),T=pe(j,"BUTTON",{"data-svelte-h":!0}),Hi(T)!=="svelte-731n54"&&(T.textContent=q),j.forEach(ge),this.h()},h:function(){de(e,_e,31,0,569),jo(s.src,o="https://developers.google.com/identity/images/g-logo.png")||Oe(s,"src",o),Oe(s,"alt","Google Logo"),zi(s,"height","20px"),zi(s,"vertical-align","middle"),de(s,_e,33,1,624),de(r,_e,32,0,586),Oe(u,"placeholder","Email"),Oe(u,"type","email"),de(u,_e,41,1,804),Oe(_,"placeholder","Password"),Oe(_,"type","password"),de(_,_e,42,1,867),de(T,_e,43,1,939),de(h,_e,40,0,797)},m:function(E,L){Ge(E,e,L),Ge(E,i,L),Ge(E,r,L),me(r,s),me(r,c),Ge(E,a,L),Ge(E,h,L),me(h,u),Rt(u,t[0]),me(h,p),me(h,_),Rt(_,t[1]),me(h,g),me(h,T),ue||(ze=[Pt(r,"click",t[2],!1,!1,!1,!1),Pt(u,"input",t[4]),Pt(_,"input",t[5]),Pt(T,"click",t[3],!1,!1,!1,!1)],ue=!0)},p:function(E,[L]){L&1&&u.value!==E[0]&&Rt(u,E[0]),L&2&&_.value!==E[1]&&Rt(_,E[1])},i:Vi,o:Vi,d:function(E){E&&(ge(e),ge(i),ge(r),ge(a),ge(h)),ue=!1,Bo(ze)}};return Fr("SvelteRegisterBlock",{block:We,id:Zn.name,type:"component",source:"",ctx:t}),We}function Qu(t,e,n){let{$$slots:i={},$$scope:r}=e;$o("Page",i,[]);let s="",o="";const c=Vn(Zt);function a(){const g=new B;dr(c,g)}function h(){cr(c,s,o)}hr(c,g=>{g&&console.log("User signed up:",g)});const u=[];Object.keys(e).forEach(g=>{!~u.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&Yu.warn(`<Page> was created with unknown prop '${g}'`)});function p(){s=this.value,n(0,s)}function _(){o=this.value,n(1,o)}return t.$capture_state=()=>({app:Zt,GoogleAuthProvider:B,signInWithPopup:dr,createUserWithEmailAndPassword:cr,onAuthStateChanged:hr,getAuth:Vn,email:s,password:o,auth:c,signUpWithGoogle:a,signUpWithEmail:h}),t.$inject_state=g=>{"email"in g&&n(0,s=g.email),"password"in g&&n(1,o=g.password)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s,o,a,h,p,_]}class td extends Vo{constructor(e){super(e),Ho(this,e,Qu,Zn,Fo,{}),Fr("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Zn.name})}}export{td as component};
