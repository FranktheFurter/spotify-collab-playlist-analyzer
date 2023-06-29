import{h as Te,i as We,o as x,c as C,a as N,t as D,z as re,r as U,A as Ke,B as Ge,C as Xe,D as O,F as pe,E as he,G as Qe}from"./entry.7d0a8797.js";const Ye={key:0,class:"flex flex-col items-center gap-1"},Ze=["src"],et={key:1,class:"w-30px h-30px bg-gray rounded-full"},tt=Te({__name:"UserPanel",props:{userData:Object,count:Number,duration:Number,durationPercent:Number},setup(e){const t=e,n=s=>{if(typeof s!="number")return"00h 00m 00s";const o=Math.floor(s/1e3%60),i=Math.floor(s/(1e3*60)%60),u=Math.floor(s/(1e3*60*60)),d=c=>c<10?`0${c}`:c;return`${d(u)}h ${d(i)}m ${d(o)}s`},r=We(()=>n(t.duration));return(s,o)=>{var i;return e.userData?(x(),C("div",Ye,[e.userData.images&&e.userData.images.length>0?(x(),C("img",{key:0,class:"rounded-full",src:e.userData.images[0].url,alt:"User profile image",width:"30",height:"30"},null,8,Ze)):(x(),C("div",et)),N("div",null,D(e.userData.display_name),1),N("div",null,D(e.count),1),N("div",null,D(r.value),1),N("div",null,D((i=e.durationPercent)==null?void 0:i.toFixed(2))+" % Playtime",1)])):re("",!0)}}});function xe(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:ce}=Object,V=(e=>t=>{const n=nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>V(t)===e),W=e=>t=>typeof t===e,{isArray:k}=Array,L=W("undefined");function rt(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=T("ArrayBuffer");function st(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const ot=W("string"),R=W("function"),Pe=W("number"),K=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,M=e=>{if(V(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=T("Date"),ct=T("File"),ut=T("Blob"),lt=T("FileList"),ft=e=>K(e)&&R(e.pipe),dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=V(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},pt=T("URLSearchParams"),ht=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function _e(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),De=e=>!L(e)&&e!==Ce;function se(){const{caseless:e}=De(this)&&this||{},t={},n=(r,s)=>{const o=e&&_e(t,s)||s;M(t[o])&&M(r)?t[o]=se(t[o],r):M(r)?t[o]=se({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const mt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&R(s)?e[o]=xe(s,n):e[o]=s},{allOwnKeys:r}),e),yt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),wt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Et=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},bt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},St=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Pe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},gt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),Ot=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Rt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},At=T("HTMLFormElement"),Tt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),xt=T("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Nt=e=>{Be(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Pt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},_t=()=>{},Ct=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",ye="0123456789",ke={DIGIT:ye,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+ye},Dt=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const kt=e=>{const t=new Array(10),n=(r,s)=>{if(K(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return I(r,(i,u)=>{const d=n(i,s+1);!L(d)&&(o[u]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Ft=T("AsyncFunction"),Ut=e=>e&&(K(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:k,isArrayBuffer:Ne,isBuffer:rt,isFormData:dt,isArrayBufferView:st,isString:ot,isNumber:Pe,isBoolean:it,isObject:K,isPlainObject:M,isUndefined:L,isDate:at,isFile:ct,isBlob:ut,isRegExp:xt,isFunction:R,isStream:ft,isURLSearchParams:pt,isTypedArray:gt,isFileList:lt,forEach:I,merge:se,extend:mt,trim:ht,stripBOM:yt,inherits:wt,toFlatObject:Et,kindOf:V,kindOfTest:T,endsWith:bt,toArray:St,forEachEntry:Ot,matchAll:Rt,isHTMLForm:At,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:Be,freezeMethods:Nt,toObjectSet:Pt,toCamelCase:Tt,noop:_t,toFiniteNumber:Ct,findKey:_e,global:Ce,isContextDefined:De,ALPHABET:ke,generateString:Dt,isSpecCompliantForm:Bt,toJSONObject:kt,isAsyncFn:Ft,isThenable:Ut};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Fe=y.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ue[e]={value:e}});Object.defineProperties(y,Ue);Object.defineProperty(Fe,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Fe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Lt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function Le(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=Le(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function It(e){return a.isArray(e)&&!e.some(oe)}const jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,b){return!a.isUndefined(b[p])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!d&&a.isBlob(l))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?d&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function f(l,p,b){let S=l;if(l&&!b&&typeof l=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&It(l)||(a.isFileList(l)||a.endsWith(p,"[]"))&&(S=a.toArray(l)))return p=Le(p),S.forEach(function(H,Ve){!(a.isUndefined(H)||H===null)&&t.append(i===!0?we([p],Ve,o):i===null?p:p+"[]",c(H))}),!1}return oe(l)?!0:(t.append(we(b,p,o),c(l)),!1)}const m=[],w=Object.assign(jt,{defaultVisitor:f,convertValue:c,isVisitable:oe});function h(l,p){if(!a.isUndefined(l)){if(m.indexOf(l)!==-1)throw Error("Circular reference detected in "+p.join("."));m.push(l),a.forEach(l,function(S,g){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(g)?g.trim():g,p,w))===!0&&h(S,p?p.concat(g):[g])}),m.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return h(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&G(e,this,t)}const Ie=ue.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ht(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function je(e,t,n){if(!t)return e;const r=n&&n.encode||Ht,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Mt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const be=Mt,He={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:ue,zt=typeof FormData<"u"?FormData:null,$t=typeof Blob<"u"?Blob:null,vt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Jt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:qt,FormData:zt,Blob:$t},isStandardBrowserEnv:vt,isStandardBrowserWebWorkerEnv:Jt,protocols:["http","https","file","blob","url","data"]};function Vt(e,t){return G(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Wt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Kt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Me(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Kt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Wt(r),s,n,0)}),n}return null}const Gt={"Content-Type":void 0};function Xt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const X={transitional:He,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Me(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return G(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Xt(t)):t}],transformResponse:[function(t){const n=this.transitional||X.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?y.from(u,y.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){X.headers[t]={}});a.forEach(["post","put","patch"],function(t){X.headers[t]=a.merge(Gt)});const le=X,Qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Se=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function Zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const en=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function tn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function nn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,d,c){const f=F(d);if(!f)throw new Error("header name must be a non-empty string");const m=a.findKey(s,f);(!m||s[m]===void 0||c===!0||c===void 0&&s[m]!==!1)&&(s[m||d]=q(u))}const i=(u,d)=>a.forEach(u,(c,f)=>o(c,f,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!en(t)?i(Yt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Zt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=F(i),i){const u=a.findKey(r,i);u&&(!n||Z(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const u=t?tn(o):String(o).trim();u!==o&&delete n[o],n[u]=q(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Se]=this[Se]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=F(i);r[u]||(nn(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Q.prototype);a.freezeMethods(Q);const P=Q;function ee(e,t){const n=this||le,r=t||n,s=P.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function qe(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(j,y,{__CANCEL__:!0});function rn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const sn=A.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function on(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function an(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ze(e,t){return e&&!on(t)?an(e,t):t}const cn=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function un(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ln(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),f=r[o];i||(i=c),n[s]=d,r[s]=c;let m=o,w=0;for(;m!==s;)w+=n[m++],m=m%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const h=f&&c-f;return h?Math.round(w*1e3/h):void 0}}function ge(e,t){let n=0;const r=ln(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,d=r(u),c=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const fn=typeof XMLHttpRequest<"u",dn=fn&&function(e){return new Promise(function(n,r){let s=e.data;const o=P.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+l))}const f=ze(e.baseURL,e.url);c.open(e.method.toUpperCase(),je(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function m(){if(!c)return;const h=P.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};rn(function(S){n(S),d()},function(S){r(S),d()},p),c=null}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let l=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||He;e.timeoutErrorMessage&&(l=e.timeoutErrorMessage),r(new y(l,p.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const h=(e.withCredentials||cn(f))&&e.xsrfCookieName&&sn.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(l,p){c.setRequestHeader(p,l)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ge(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=h=>{c&&(r(!h||h.type?new j(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const w=un(f);if(w&&A.protocols.indexOf(w)===-1){r(new y("Unsupported protocol "+w+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:Lt,xhr:dn};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function Oe(e){return te(e),e.headers=P.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),pn.getAdapter(e.adapter||le.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return qe(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const Re=e=>e instanceof P?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(c,f,m){return a.isPlainObject(c)&&a.isPlainObject(f)?a.merge.call({caseless:m},c,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(c,f,m){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c,m)}else return r(c,f,m)}function o(c,f){if(!a.isUndefined(f))return r(void 0,f)}function i(c,f){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function u(c,f,m){if(m in t)return r(c,f);if(m in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,f)=>s(Re(c),Re(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const m=d[f]||s,w=m(e[f],t[f],f);a.isUndefined(w)&&m!==u||(n[f]=w)}),n}const $e="1.4.0",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ae={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+$e+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Ae[i]&&(Ae[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function hn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],d=u===void 0||i(u,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const ie={assertOptions:hn,validators:fe},_=ie.validators;class v{constructor(t){this.defaults=t,this.interceptors={request:new be,response:new be}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete o[l]}),n.headers=P.concat(i,o);const u=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,u.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let f,m=0,w;if(!d){const l=[Oe.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,c),w=l.length,f=Promise.resolve(n);m<w;)f=f.then(l[m++],l[m++]);return f}w=u.length;let h=n;for(m=0;m<w;){const l=u[m++],p=u[m++];try{h=l(h)}catch(b){p.call(this,b);break}}try{f=Oe.call(this,h)}catch(l){return Promise.reject(l)}for(m=0,w=c.length;m<w;)f=f.then(c[m++],c[m++]);return f}getUri(t){t=B(this.defaults,t);const n=ze(t.baseURL,t.url);return je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(B(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}v.prototype[t]=n(),v.prototype[t+"Form"]=n(!0)});const $=v;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new j(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}const mn=de;function yn(e){return function(n){return e.apply(null,n)}}function wn(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});const En=ae;function ve(e){const t=new $(e),n=xe($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ve(B(e,s))},n}const E=ve(le);E.Axios=$;E.CanceledError=j;E.CancelToken=mn;E.isCancel=qe;E.VERSION=$e;E.toFormData=G;E.AxiosError=y;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=yn;E.isAxiosError=wn;E.mergeConfig=B;E.AxiosHeaders=P;E.formToJSON=e=>Me(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=En;E.default=E;const J=E,ne=U(""),Je=()=>{const e=Ke(),t=e.public.spotifyClientId,n=e.public.spotifyClientSecret,r=async()=>{const s={method:"POST",url:"https://accounts.spotify.com/api/token",headers:{Authorization:"Basic "+btoa(t+":"+n),"Content-Type":"application/x-www-form-urlencoded"},data:"grant_type=client_credentials"};try{const o=await J(s);ne.value=o.data.access_token}catch(o){console.error("Error getting access token",o)}};return ne.value===""&&r(),{token:ne,getAccessToken:r}},bn=e=>{const t=U(null),{token:n,getAccessToken:r}=Je(),s=async i=>{const u={method:"get",url:`https://api.spotify.com/v1/users/${e}`,headers:{Authorization:`Bearer ${i}`}};try{const d=await J(u);t.value=d.data}catch(d){console.error("Error getting user data",d)}};return(async()=>{n.value===""&&await r(),s(n.value)})(),{userData:t}},Sn=e=>{const t=U([]),n=U(null),r=U([]),{token:s,getAccessToken:o}=Je(),i=async h=>{let l=0,p=null;const b=[];do{const S={method:"get",url:`https://api.spotify.com/v1/playlists/${e}/tracks?offset=${l}`,headers:{Authorization:`Bearer ${h}`}};try{const g=await J(S);b.push(...g.data.items),p=g.data.total,l+=g.data.items.length}catch(g){console.error("Error getting tracks",g)}}while(l<p);t.value=b},u=async h=>{const l={method:"get",url:`https://api.spotify.com/v1/playlists/${e}`,headers:{Authorization:`Bearer ${h}`}};try{const p=await J(l);n.value=p.data}catch(p){console.error("Error getting playlist information",p)}},d=async()=>{s.value===""&&await o(),await i(s.value),await u(s.value);const h=Array.from(new Set(t.value.map(l=>l.added_by.id)));for(let l of h){const{userData:p}=bn(l);Ge(()=>p.value,b=>{b&&r.value.push(b)},{immediate:!0})}},c=h=>{const l=r.value.find(p=>p.id===h);return l?l.display_name:""},f=h=>t.value.filter(l=>l.added_by.id===h).length,m=h=>t.value.filter(l=>l.added_by.id===h).reduce((l,p)=>l+p.track.duration_ms,0),w=h=>{const l=m(h),p=t.value.reduce((b,S)=>b+S.track.duration_ms,0);return l/p*100};return d(),{playlist:t,playlistInfo:n,usersData:r,getDisplayNameById:c,getTracksCountByUserId:f,getTotalTrackDurationByUserId:m,getTracksDurationInPercentageByUserId:w}},gn={key:0,class:"py-32 flex flex-col items-center"},On=["src"],Rn={class:"flex flex-wrap gap-8"},An={class:"py-4"},Tn=N("h3",{class:""},"Tracklist:",-1),Nn=Te({__name:"[playlistId]",setup(e){const n=Xe().params.playlistId,{playlist:r,playlistInfo:s,usersData:o,getDisplayNameById:i,getTracksCountByUserId:u,getTotalTrackDurationByUserId:d,getTracksDurationInPercentageByUserId:c}=Sn(n);return(f,m)=>{const w=tt;return O(s)?(x(),C("div",gn,[O(s).images&&O(s).images.length>0?(x(),C("img",{key:0,src:O(s).images[0].url,alt:"Playlist cover image",width:"250",height:"250"},null,8,On)):re("",!0),N("h1",null,D(O(s).name),1),N("h2",null,D(O(s).description),1),N("div",Rn,[(x(!0),C(pe,null,he(O(o),(h,l)=>(x(),Qe(w,{key:l,"user-data":h,count:O(u)(h.id),duration:O(d)(h.id),"duration-percent":O(c)(h.id)},null,8,["user-data","count","duration","duration-percent"]))),128))]),N("div",An,[Tn,(x(!0),C(pe,null,he(O(r),(h,l)=>(x(),C("p",{key:l},D(h.track.name)+" by "+D(O(i)(h.added_by.id)),1))),128))])])):re("",!0)}}});export{Nn as default};
