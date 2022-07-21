const is=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};is();function Rr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const os="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ss=Rr(os);function Ei(e){return!!e||e===""}function Dr(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?fs(r):Dr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(Q(e))return e}}const ls=/;(?![^(]*\))/g,cs=/:(.+)/;function fs(e){const t={};return e.split(ls).forEach(n=>{if(n){const r=n.split(cs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function jr(e){let t="";if(te(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=jr(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Oa=e=>te(e)?e:e==null?"":$(e)||Q(e)&&(e.toString===Pi||!R(e.toString))?JSON.stringify(e,Ii,2):String(e),Ii=(e,t)=>t&&t.__v_isRef?Ii(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Si(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!$(t)&&!Mi(t)?String(t):t,V={},At=[],Ee=()=>{},us=()=>!1,ds=/^on[^a-z]/,Fn=e=>ds.test(e),Hr=e=>e.startsWith("onUpdate:"),ie=Object.assign,Br=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ms=Object.prototype.hasOwnProperty,H=(e,t)=>ms.call(e,t),$=Array.isArray,Ot=e=>Ln(e)==="[object Map]",Si=e=>Ln(e)==="[object Set]",R=e=>typeof e=="function",te=e=>typeof e=="string",Ur=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Ti=e=>Q(e)&&R(e.then)&&R(e.catch),Pi=Object.prototype.toString,Ln=e=>Pi.call(e),ps=e=>Ln(e).slice(8,-1),Mi=e=>Ln(e)==="[object Object]",Wr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pn=Rr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},hs=/-(\w)/g,Le=$n(e=>e.replace(hs,(t,n)=>n?n.toUpperCase():"")),vs=/\B([A-Z])/g,Pt=$n(e=>e.replace(vs,"-$1").toLowerCase()),zn=$n(e=>e.charAt(0).toUpperCase()+e.slice(1)),tr=$n(e=>e?`on${zn(e)}`:""),xn=(e,t)=>!Object.is(e,t),nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},gs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ea;const bs=()=>Ea||(Ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class ys{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Me&&(this.parent=Me,this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function _s(e,t=Me){t&&t.active&&t.effects.push(e)}const Yr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ni=e=>(e.w&Je)>0,Fi=e=>(e.n&Je)>0,xs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},ws=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ni(a)&&!Fi(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},ur=new WeakMap;let Ht=0,Je=1;const dr=30;let ke;const ut=Symbol(""),mr=Symbol("");class Kr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_s(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=Ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,Ze=!0,Je=1<<++Ht,Ht<=dr?xs(this):Ia(this),this.fn()}finally{Ht<=dr&&ws(this),Je=1<<--Ht,ke=this.parent,Ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(Ia(this),this.onStop&&this.onStop(),this.active=!1)}}function Ia(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ze=!0;const Li=[];function Mt(){Li.push(Ze),Ze=!1}function Nt(){const e=Li.pop();Ze=e===void 0?!0:e}function ge(e,t,n){if(Ze&&ke){let r=ur.get(e);r||ur.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Yr()),$i(a)}}function $i(e,t){let n=!1;Ht<=dr?Fi(e)||(e.n|=Je,n=!Ni(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function De(e,t,n,r,a,i){const o=ur.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?Wr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),Ot(e)&&s.push(o.get(mr)));break;case"delete":$(e)||(s.push(o.get(ut)),Ot(e)&&s.push(o.get(mr)));break;case"set":Ot(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&pr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);pr(Yr(l))}}function pr(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&Sa(r);for(const r of n)r.computed||Sa(r)}function Sa(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ks=Rr("__proto__,__v_isRef,__isVue"),zi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ur)),Cs=Vr(),As=Vr(!1,!0),Os=Vr(!0),Ta=Es();function Es(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=U(this)[t].apply(this,n);return Nt(),r}}),e}function Vr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Us:Bi:t?Hi:ji).get(r))return r;const o=$(r);if(!e&&o&&H(Ta,a))return Reflect.get(Ta,a,i);const s=Reflect.get(r,a,i);return(Ur(a)?zi.has(a):ks(a))||(e||ge(r,"get",a),t)?s:ae(s)?o&&Wr(a)?s:s.value:Q(s)?e?Ui(s):Zr(s):s}}const Is=Ri(),Ss=Ri(!0);function Ri(e=!1){return function(n,r,a,i){let o=n[r];if(Gt(o)&&ae(o)&&!ae(a))return!1;if(!e&&!Gt(a)&&(hr(a)||(a=U(a),o=U(o)),!$(n)&&ae(o)&&!ae(a)))return o.value=a,!0;const s=$(n)&&Wr(r)?Number(r)<n.length:H(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?xn(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Ts(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Ps(e,t){const n=Reflect.has(e,t);return(!Ur(t)||!zi.has(t))&&ge(e,"has",t),n}function Ms(e){return ge(e,"iterate",$(e)?"length":ut),Reflect.ownKeys(e)}const Di={get:Cs,set:Is,deleteProperty:Ts,has:Ps,ownKeys:Ms},Ns={get:Os,set(e,t){return!0},deleteProperty(e,t){return!0}},Fs=ie({},Di,{get:As,set:Ss}),qr=e=>e,Rn=e=>Reflect.getPrototypeOf(e);function sn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ge(a,"get",t),ge(a,"get",i));const{has:o}=Rn(a),s=r?qr:n?Qr:Jr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function ln(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&ge(U(e),"iterate",ut),Reflect.get(e,"size",e)}function Pa(e){e=U(e);const t=U(this);return Rn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Ma(e,t){t=U(t);const n=U(this),{has:r,get:a}=Rn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?xn(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function Na(e){const t=U(this),{has:n,get:r}=Rn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function Fa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function fn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?qr:e?Qr:Jr;return!e&&ge(s,"iterate",ut),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function un(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=Ot(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?qr:t?Qr:Jr;return!t&&ge(i,"iterate",l?mr:ut),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Ls(){const e={get(i){return sn(this,i)},get size(){return cn(this)},has:ln,add:Pa,set:Ma,delete:Na,clear:Fa,forEach:fn(!1,!1)},t={get(i){return sn(this,i,!1,!0)},get size(){return cn(this)},has:ln,add:Pa,set:Ma,delete:Na,clear:Fa,forEach:fn(!1,!0)},n={get(i){return sn(this,i,!0)},get size(){return cn(this,!0)},has(i){return ln.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:fn(!0,!1)},r={get(i){return sn(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return ln.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=un(i,!1,!1),n[i]=un(i,!0,!1),t[i]=un(i,!1,!0),r[i]=un(i,!0,!0)}),[e,n,t,r]}const[$s,zs,Rs,Ds]=Ls();function Xr(e,t){const n=t?e?Ds:Rs:e?zs:$s;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const js={get:Xr(!1,!1)},Hs={get:Xr(!1,!0)},Bs={get:Xr(!0,!1)},ji=new WeakMap,Hi=new WeakMap,Bi=new WeakMap,Us=new WeakMap;function Ws(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ys(e){return e.__v_skip||!Object.isExtensible(e)?0:Ws(ps(e))}function Zr(e){return Gt(e)?e:Gr(e,!1,Di,js,ji)}function Ks(e){return Gr(e,!1,Fs,Hs,Hi)}function Ui(e){return Gr(e,!0,Ns,Bs,Bi)}function Gr(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ys(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Et(e){return Gt(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function Gt(e){return!!(e&&e.__v_isReadonly)}function hr(e){return!!(e&&e.__v_isShallow)}function Wi(e){return Et(e)||Gt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Yi(e){return wn(e,"__v_skip",!0),e}const Jr=e=>Q(e)?Zr(e):e,Qr=e=>Q(e)?Ui(e):e;function Vs(e){Ze&&ke&&(e=U(e),$i(e.dep||(e.dep=Yr())))}function qs(e,t){e=U(e),e.dep&&pr(e.dep)}function ae(e){return!!(e&&e.__v_isRef===!0)}function Xs(e){return ae(e)?e.value:e}const Zs={get:(e,t,n)=>Xs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ae(a)&&!ae(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ki(e){return Et(e)?e:new Proxy(e,Zs)}class Gs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Kr(t,()=>{this._dirty||(this._dirty=!0,qs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Vs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Js(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new Gs(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Dn(i,t,n)}return a}function Ie(e,t,n,r){if(R(e)){const i=Ge(e,t,n,r);return i&&Ti(i)&&i.catch(o=>{Dn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function Dn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}Qs(e,n,a,r)}function Qs(e,t,n,r=!0){console.error(e)}let kn=!1,vr=!1;const he=[];let Re=0;const Wt=[];let Bt=null,_t=0;const Yt=[];let qe=null,xt=0;const Vi=Promise.resolve();let ea=null,gr=null;function el(e){const t=ea||Vi;return e?t.then(this?e.bind(this):e):t}function tl(e){let t=Re+1,n=he.length;for(;t<n;){const r=t+n>>>1;Jt(he[r])<e?t=r+1:n=r}return t}function qi(e){(!he.length||!he.includes(e,kn&&e.allowRecurse?Re+1:Re))&&e!==gr&&(e.id==null?he.push(e):he.splice(tl(e.id),0,e),Xi())}function Xi(){!kn&&!vr&&(vr=!0,ea=Vi.then(Ji))}function nl(e){const t=he.indexOf(e);t>Re&&he.splice(t,1)}function Zi(e,t,n,r){$(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Xi()}function rl(e){Zi(e,Bt,Wt,_t)}function al(e){Zi(e,qe,Yt,xt)}function jn(e,t=null){if(Wt.length){for(gr=t,Bt=[...new Set(Wt)],Wt.length=0,_t=0;_t<Bt.length;_t++)Bt[_t]();Bt=null,_t=0,gr=null,jn(e,t)}}function Gi(e){if(jn(),Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,qe){qe.push(...t);return}for(qe=t,qe.sort((n,r)=>Jt(n)-Jt(r)),xt=0;xt<qe.length;xt++)qe[xt]();qe=null,xt=0}}const Jt=e=>e.id==null?1/0:e.id;function Ji(e){vr=!1,kn=!0,jn(e),he.sort((n,r)=>Jt(n)-Jt(r));const t=Ee;try{for(Re=0;Re<he.length;Re++){const n=he[Re];n&&n.active!==!1&&Ge(n,null,14)}}finally{Re=0,he.length=0,Gi(),kn=!1,ea=null,(he.length||Wt.length||Yt.length)&&Ji(e)}}function il(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||V;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(gs))}let s,l=r[s=tr(t)]||r[s=tr(Le(t))];!l&&i&&(l=r[s=tr(Pt(t))]),l&&Ie(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(u,e,6,a)}}function Qi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=Qi(u,t,!0);d&&(s=!0,ie(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):ie(o,i),r.set(e,o),o)}function Hn(e,t){return!e||!Fn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Pt(t))||H(e,t))}let de=null,Bn=null;function Cn(e){const t=de;return de=e,Bn=e&&e.type.__scopeId||null,t}function nt(e){Bn=e}function rt(){Bn=null}function ve(e,t=de,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Wa(-1);const i=Cn(t),o=e(...a);return Cn(i),r._d&&Wa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:O,ctx:L,inheritAttrs:D}=e;let M,_;const E=Cn(e);try{if(n.shapeFlag&4){const j=a||r;M=Ne(d.call(j,j,m,i,O,b,L)),_=l}else{const j=t;M=Ne(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),_=t.props?l:ol(l)}}catch(j){Vt.length=0,Dn(j,e,1),M=z(Qe)}let N=M;if(_&&D!==!1){const j=Object.keys(_),{shapeFlag:K}=N;j.length&&K&7&&(o&&j.some(Hr)&&(_=sl(_,o)),N=St(N,_))}return n.dirs&&(N=St(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),M=N,Cn(E),M}const ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fn(n))&&((t||(t={}))[n]=e[n]);return t},sl=(e,t)=>{const n={};for(const r in e)(!Hr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ll(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?La(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Hn(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?La(r,o,u):!0:!!o;return!1}function La(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Hn(n,i))return!0}return!1}function cl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const fl=e=>e.__isSuspense;function ul(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):al(e)}function dl(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function ar(e,t,n=!1){const r=ee||de;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const $a={};function hn(e,t,n){return eo(e,t,n)}function eo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){const s=ee;let l,u=!1,d=!1;if(ae(e)?(l=()=>e.value,u=hr(e)):Et(e)?(l=()=>e,r=!0):$(e)?(d=!0,u=e.some(_=>Et(_)||hr(_)),l=()=>e.map(_=>{if(ae(_))return _.value;if(Et(_))return wt(_);if(R(_))return Ge(_,s,2)})):R(e)?t?l=()=>Ge(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ie(e,s,3,[b])}:l=Ee,t&&r){const _=l;l=()=>wt(_())}let m,b=_=>{m=M.onStop=()=>{Ge(_,s,4)}};if(tn)return b=Ee,t?n&&Ie(t,s,3,[l(),d?[]:void 0,b]):l(),Ee;let O=d?[]:$a;const L=()=>{if(!!M.active)if(t){const _=M.run();(r||u||(d?_.some((E,N)=>xn(E,O[N])):xn(_,O)))&&(m&&m(),Ie(t,s,3,[_,O===$a?void 0:O,b]),O=_)}else M.run()};L.allowRecurse=!!t;let D;a==="sync"?D=L:a==="post"?D=()=>fe(L,s&&s.suspense):D=()=>rl(L);const M=new Kr(l,D);return t?n?L():O=M.run():a==="post"?fe(M.run.bind(M),s&&s.suspense):M.run(),()=>{M.stop(),s&&s.scope&&Br(s.scope.effects,M)}}function ml(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?to(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=ee;Tt(this);const s=eo(a,i.bind(r),n);return o?Tt(o):dt(),s}function to(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function wt(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))wt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)wt(e[n],t);else if(Si(e)||Ot(e))e.forEach(n=>{wt(n,t)});else if(Mi(e))for(const n in e)wt(e[n],t);return e}function _e(e){return R(e)?{setup:e,name:e.name}:e}const Kt=e=>!!e.type.__asyncLoader,no=e=>e.type.__isKeepAlive;function pl(e,t){ro(e,"a",t)}function hl(e,t){ro(e,"da",t)}function ro(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Un(t,r,n),n){let a=n.parent;for(;a&&a.parent;)no(a.parent.vnode)&&vl(r,t,n,a),a=a.parent}}function vl(e,t,n,r){const a=Un(t,e,r,!0);ao(()=>{Br(r[t],a)},n)}function Un(e,t,n=ee,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),Tt(n);const s=Ie(t,n,e,o);return dt(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=ee)=>(!tn||e==="sp")&&Un(e,t,n),gl=Ue("bm"),bl=Ue("m"),yl=Ue("bu"),_l=Ue("u"),xl=Ue("bum"),ao=Ue("um"),wl=Ue("sp"),kl=Ue("rtg"),Cl=Ue("rtc");function Al(e,t=ee){Un("ec",e,t)}function ot(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Mt(),Ie(l,n,8,[e.el,s,e,t]),Nt())}}const io="components";function ta(e,t){return El(io,e,!0,t)||e}const Ol=Symbol();function El(e,t,n=!0,r=!1){const a=de||ee;if(a){const i=a.type;if(e===io){const s=ac(i,!1);if(s&&(s===t||s===Le(t)||s===zn(Le(t))))return i}const o=za(a[e]||i[e],t)||za(a.appContext[e],t);return!o&&r?i:o}}function za(e,t){return e&&(e[t]||e[Le(t)]||e[zn(Le(t))])}function Qt(e,t,n={},r,a){if(de.isCE||de.parent&&Kt(de.parent)&&de.parent.isCE)return z("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),J();const o=i&&oo(i(n)),s=Ft(ue,{key:n.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function oo(e){return e.some(t=>En(t)?!(t.type===Qe||t.type===ue&&!oo(t.children)):!0)?e:null}const br=e=>e?yo(e)?ia(e)||e.proxy:br(e.parent):null,An=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>br(e.parent),$root:e=>br(e.root),$emit:e=>e.emit,$options:e=>lo(e),$forceUpdate:e=>e.f||(e.f=()=>qi(e.update)),$nextTick:e=>e.n||(e.n=el.bind(e.proxy)),$watch:e=>ml.bind(e)}),Il={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==V&&H(r,t))return o[t]=1,r[t];if(a!==V&&H(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&H(u,t))return o[t]=3,i[t];if(n!==V&&H(n,t))return o[t]=4,n[t];yr&&(o[t]=0)}}const d=An[t];let m,b;if(d)return t==="$attrs"&&ge(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&H(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,H(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==V&&H(a,t)?(a[t]=n,!0):r!==V&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&H(e,o)||t!==V&&H(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(An,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let yr=!0;function Sl(e){const t=lo(e),n=e.proxy,r=e.ctx;yr=!1,t.beforeCreate&&Ra(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:L,activated:D,deactivated:M,beforeDestroy:_,beforeUnmount:E,destroyed:N,unmounted:j,render:K,renderTracked:ne,renderTriggered:me,errorCaptured:Se,serverPrefetch:se,expose:$t,inheritAttrs:vt,components:zt,directives:an,filters:_a}=t;if(u&&Tl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const q=o[G];R(q)&&(r[G]=q.bind(n))}if(a){const G=a.call(n,n);Q(G)&&(e.data=Zr(G))}if(yr=!0,i)for(const G in i){const q=i[G],$e=R(q)?q.bind(n,n):R(q.get)?q.get.bind(n,n):Ee,Jn=!R(q)&&R(q.set)?q.set.bind(n):Ee,Rt=ye({get:$e,set:Jn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:gt=>Rt.value=gt})}if(s)for(const G in s)so(s[G],r,n,G);if(l){const G=R(l)?l.call(n):l;Reflect.ownKeys(G).forEach(q=>{dl(q,G[q])})}d&&Ra(d,e,"c");function le(G,q){$(q)?q.forEach($e=>G($e.bind(n))):q&&G(q.bind(n))}if(le(gl,m),le(bl,b),le(yl,O),le(_l,L),le(pl,D),le(hl,M),le(Al,Se),le(Cl,ne),le(kl,me),le(xl,E),le(ao,j),le(wl,se),$($t))if($t.length){const G=e.exposed||(e.exposed={});$t.forEach(q=>{Object.defineProperty(G,q,{get:()=>n[q],set:$e=>n[q]=$e})})}else e.exposed||(e.exposed={});K&&e.render===Ee&&(e.render=K),vt!=null&&(e.inheritAttrs=vt),zt&&(e.components=zt),an&&(e.directives=an)}function Tl(e,t,n=Ee,r=!1){$(e)&&(e=_r(e));for(const a in e){const i=e[a];let o;Q(i)?"default"in i?o=ar(i.from||a,i.default,!0):o=ar(i.from||a):o=ar(i),ae(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ra(e,t,n){Ie($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function so(e,t,n,r){const a=r.includes(".")?to(n,r):()=>n[r];if(te(e)){const i=t[e];R(i)&&hn(a,i)}else if(R(e))hn(a,e.bind(n));else if(Q(e))if($(e))e.forEach(i=>so(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&hn(a,i,e)}}function lo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>On(l,u,o,!0)),On(l,t,o)),i.set(t,l),l}function On(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&On(e,i,n,!0),a&&a.forEach(o=>On(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Pl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Pl={data:Da,props:lt,emits:lt,methods:lt,computed:lt,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:lt,directives:lt,watch:Nl,provide:Da,inject:Ml};function Da(e,t){return t?e?function(){return ie(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Ml(e,t){return lt(_r(e),_r(t))}function _r(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function lt(e,t){return e?ie(ie(Object.create(null),e),t):t}function Nl(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function Fl(e,t,n,r=!1){const a={},i={};wn(i,Wn,1),e.propsDefaults=Object.create(null),co(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ks(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ll(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Hn(e.emitsOptions,b))continue;const O=t[b];if(l)if(H(i,b))O!==i[b]&&(i[b]=O,u=!0);else{const L=Le(b);a[L]=xr(l,s,L,O,e,!1)}else O!==i[b]&&(i[b]=O,u=!0)}}}else{co(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=Pt(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=xr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m)&&!0)&&(delete i[m],u=!0)}u&&De(e,"set","$attrs")}function co(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(pn(l))continue;const u=t[l];let d;a&&H(a,d=Le(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Hn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=xr(a,l,m,u[m],e,!H(u,m))}}return o}function xr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Tt(a),r=u[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Pt(n))&&(r=!0))}return r}function fo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[b,O]=fo(m,t,!0);ie(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,At),At;if($(i))for(let d=0;d<i.length;d++){const m=Le(i[d]);ja(m)&&(o[m]=V)}else if(i)for(const d in i){const m=Le(d);if(ja(m)){const b=i[d],O=o[m]=$(b)||R(b)?{type:b}:b;if(O){const L=Ua(Boolean,O.type),D=Ua(String,O.type);O[0]=L>-1,O[1]=D<0||L<D,(L>-1||H(O,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function ja(e){return e[0]!=="$"}function Ha(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ba(e,t){return Ha(e)===Ha(t)}function Ua(e,t){return $(t)?t.findIndex(n=>Ba(n,e)):R(t)&&Ba(t,e)?0:-1}const uo=e=>e[0]==="_"||e==="$stable",na=e=>$(e)?e.map(Ne):[Ne(e)],$l=(e,t,n)=>{if(t._n)return t;const r=ve((...a)=>na(t(...a)),n);return r._c=!1,r},mo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(uo(a))continue;const i=e[a];if(R(i))t[a]=$l(a,i,r);else if(i!=null){const o=na(i);t[a]=()=>o}}},po=(e,t)=>{const n=na(t);e.slots.default=()=>n},zl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),wn(t,"_",n)):mo(t,e.slots={})}else e.slots={},t&&po(e,t);wn(e.slots,Wn,1)},Rl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ie(a,t),!n&&s===1&&delete a._):(i=!t.$stable,mo(t,a)),o=t}else t&&(po(e,t),o={default:1});if(i)for(const s in a)!uo(s)&&!(s in o)&&delete a[s]};function ho(){return{app:null,config:{isNativeTag:us,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dl=0;function jl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!Q(a)&&(a=null);const i=ho(),o=new Set;let s=!1;const l=i.app={_uid:Dl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:oc,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=z(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,ia(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function wr(e,t,n,r,a=!1){if($(e)){e.forEach((b,O)=>wr(b,t&&($(t)?t[O]:t),n,r,a));return}if(Kt(r)&&!a)return;const i=r.shapeFlag&4?ia(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(te(u)?(d[u]=null,H(m,u)&&(m[u]=null)):ae(u)&&(u.value=null)),R(l))Ge(l,s,12,[o,d]);else{const b=te(l),O=ae(l);if(b||O){const L=()=>{if(e.f){const D=b?d[l]:l.value;a?$(D)&&Br(D,i):$(D)?D.includes(i)||D.push(i):b?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,H(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,fe(L,n)):L()}}}const fe=ul;function Hl(e){return Bl(e)}function Bl(e,t){const n=bs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=Ee,cloneNode:L,insertStaticContent:D}=e,M=(c,f,p,v=null,h=null,w=null,C=!1,x=null,k=!!f.dynamicChildren)=>{if(c===f)return;c&&!jt(c,f)&&(v=on(c),Ye(c,h,w,!0),c=null),f.patchFlag===-2&&(k=!1,f.dynamicChildren=null);const{type:g,ref:S,shapeFlag:I}=f;switch(g){case ra:_(c,f,p,v);break;case Qe:E(c,f,p,v);break;case vn:c==null&&N(f,p,v,C);break;case ue:an(c,f,p,v,h,w,C,x,k);break;default:I&1?ne(c,f,p,v,h,w,C,x,k):I&6?_a(c,f,p,v,h,w,C,x,k):(I&64||I&128)&&g.process(c,f,p,v,h,w,C,x,k,bt)}S!=null&&h&&wr(S,c&&c.ref,w,f||c,!f)},_=(c,f,p,v)=>{if(c==null)r(f.el=s(f.children),p,v);else{const h=f.el=c.el;f.children!==c.children&&u(h,f.children)}},E=(c,f,p,v)=>{c==null?r(f.el=l(f.children||""),p,v):f.el=c.el},N=(c,f,p,v)=>{[c.el,c.anchor]=D(c.children,f,p,v,c.el,c.anchor)},j=({el:c,anchor:f},p,v)=>{let h;for(;c&&c!==f;)h=b(c),r(c,p,v),c=h;r(f,p,v)},K=({el:c,anchor:f})=>{let p;for(;c&&c!==f;)p=b(c),a(c),c=p;a(f)},ne=(c,f,p,v,h,w,C,x,k)=>{C=C||f.type==="svg",c==null?me(f,p,v,h,w,C,x,k):$t(c,f,h,w,C,x,k)},me=(c,f,p,v,h,w,C,x)=>{let k,g;const{type:S,props:I,shapeFlag:T,transition:F,patchFlag:B,dirs:W}=c;if(c.el&&L!==void 0&&B===-1)k=c.el=L(c.el);else{if(k=c.el=o(c.type,w,I&&I.is,I),T&8?d(k,c.children):T&16&&se(c.children,k,null,v,h,w&&S!=="foreignObject",C,x),W&&ot(c,null,v,"created"),I){for(const X in I)X!=="value"&&!pn(X)&&i(k,X,null,I[X],w,c.children,v,h,ze);"value"in I&&i(k,"value",null,I.value),(g=I.onVnodeBeforeMount)&&Pe(g,v,c)}Se(k,c,c.scopeId,C,v)}W&&ot(c,null,v,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;Y&&F.beforeEnter(k),r(k,f,p),((g=I&&I.onVnodeMounted)||Y||W)&&fe(()=>{g&&Pe(g,v,c),Y&&F.enter(k),W&&ot(c,null,v,"mounted")},h)},Se=(c,f,p,v,h)=>{if(p&&O(c,p),v)for(let w=0;w<v.length;w++)O(c,v[w]);if(h){let w=h.subTree;if(f===w){const C=h.vnode;Se(c,C,C.scopeId,C.slotScopeIds,h.parent)}}},se=(c,f,p,v,h,w,C,x,k=0)=>{for(let g=k;g<c.length;g++){const S=c[g]=x?Xe(c[g]):Ne(c[g]);M(null,S,f,p,v,h,w,C,x)}},$t=(c,f,p,v,h,w,C)=>{const x=f.el=c.el;let{patchFlag:k,dynamicChildren:g,dirs:S}=f;k|=c.patchFlag&16;const I=c.props||V,T=f.props||V;let F;p&&st(p,!1),(F=T.onVnodeBeforeUpdate)&&Pe(F,p,f,c),S&&ot(f,c,p,"beforeUpdate"),p&&st(p,!0);const B=h&&f.type!=="foreignObject";if(g?vt(c.dynamicChildren,g,x,p,v,B,w):C||$e(c,f,x,null,p,v,B,w,!1),k>0){if(k&16)zt(x,f,I,T,p,v,h);else if(k&2&&I.class!==T.class&&i(x,"class",null,T.class,h),k&4&&i(x,"style",I.style,T.style,h),k&8){const W=f.dynamicProps;for(let Y=0;Y<W.length;Y++){const X=W[Y],we=I[X],yt=T[X];(yt!==we||X==="value")&&i(x,X,we,yt,h,c.children,p,v,ze)}}k&1&&c.children!==f.children&&d(x,f.children)}else!C&&g==null&&zt(x,f,I,T,p,v,h);((F=T.onVnodeUpdated)||S)&&fe(()=>{F&&Pe(F,p,f,c),S&&ot(f,c,p,"updated")},v)},vt=(c,f,p,v,h,w,C)=>{for(let x=0;x<f.length;x++){const k=c[x],g=f[x],S=k.el&&(k.type===ue||!jt(k,g)||k.shapeFlag&70)?m(k.el):p;M(k,g,S,null,v,h,w,C,!0)}},zt=(c,f,p,v,h,w,C)=>{if(p!==v){for(const x in v){if(pn(x))continue;const k=v[x],g=p[x];k!==g&&x!=="value"&&i(c,x,g,k,C,f.children,h,w,ze)}if(p!==V)for(const x in p)!pn(x)&&!(x in v)&&i(c,x,p[x],null,C,f.children,h,w,ze);"value"in v&&i(c,"value",p.value,v.value)}},an=(c,f,p,v,h,w,C,x,k)=>{const g=f.el=c?c.el:s(""),S=f.anchor=c?c.anchor:s("");let{patchFlag:I,dynamicChildren:T,slotScopeIds:F}=f;F&&(x=x?x.concat(F):F),c==null?(r(g,p,v),r(S,p,v),se(f.children,p,S,h,w,C,x,k)):I>0&&I&64&&T&&c.dynamicChildren?(vt(c.dynamicChildren,T,p,h,w,C,x),(f.key!=null||h&&f===h.subTree)&&vo(c,f,!0)):$e(c,f,p,S,h,w,C,x,k)},_a=(c,f,p,v,h,w,C,x,k)=>{f.slotScopeIds=x,c==null?f.shapeFlag&512?h.ctx.activate(f,p,v,C,k):Gn(f,p,v,h,w,C,k):le(c,f,k)},Gn=(c,f,p,v,h,w,C)=>{const x=c.component=Ql(c,v,h);if(no(c)&&(x.ctx.renderer=bt),ec(x),x.asyncDep){if(h&&h.registerDep(x,G),!c.el){const k=x.subTree=z(Qe);E(null,k,f,p)}return}G(x,c,f,p,h,w,C)},le=(c,f,p)=>{const v=f.component=c.component;if(ll(c,f,p))if(v.asyncDep&&!v.asyncResolved){q(v,f,p);return}else v.next=f,nl(v.update),v.update();else f.el=c.el,v.vnode=f},G=(c,f,p,v,h,w,C)=>{const x=()=>{if(c.isMounted){let{next:S,bu:I,u:T,parent:F,vnode:B}=c,W=S,Y;st(c,!1),S?(S.el=B.el,q(c,S,C)):S=B,I&&nr(I),(Y=S.props&&S.props.onVnodeBeforeUpdate)&&Pe(Y,F,S,B),st(c,!0);const X=rr(c),we=c.subTree;c.subTree=X,M(we,X,m(we.el),on(we),c,h,w),S.el=X.el,W===null&&cl(c,X.el),T&&fe(T,h),(Y=S.props&&S.props.onVnodeUpdated)&&fe(()=>Pe(Y,F,S,B),h)}else{let S;const{el:I,props:T}=f,{bm:F,m:B,parent:W}=c,Y=Kt(f);if(st(c,!1),F&&nr(F),!Y&&(S=T&&T.onVnodeBeforeMount)&&Pe(S,W,f),st(c,!0),I&&er){const X=()=>{c.subTree=rr(c),er(I,c.subTree,c,h,null)};Y?f.type.__asyncLoader().then(()=>!c.isUnmounted&&X()):X()}else{const X=c.subTree=rr(c);M(null,X,p,v,c,h,w),f.el=X.el}if(B&&fe(B,h),!Y&&(S=T&&T.onVnodeMounted)){const X=f;fe(()=>Pe(S,W,X),h)}(f.shapeFlag&256||W&&Kt(W.vnode)&&W.vnode.shapeFlag&256)&&c.a&&fe(c.a,h),c.isMounted=!0,f=p=v=null}},k=c.effect=new Kr(x,()=>qi(g),c.scope),g=c.update=()=>k.run();g.id=c.uid,st(c,!0),g()},q=(c,f,p)=>{f.component=c;const v=c.vnode.props;c.vnode=f,c.next=null,Ll(c,f.props,v,p),Rl(c,f.children,p),Mt(),jn(void 0,c.update),Nt()},$e=(c,f,p,v,h,w,C,x,k=!1)=>{const g=c&&c.children,S=c?c.shapeFlag:0,I=f.children,{patchFlag:T,shapeFlag:F}=f;if(T>0){if(T&128){Rt(g,I,p,v,h,w,C,x,k);return}else if(T&256){Jn(g,I,p,v,h,w,C,x,k);return}}F&8?(S&16&&ze(g,h,w),I!==g&&d(p,I)):S&16?F&16?Rt(g,I,p,v,h,w,C,x,k):ze(g,h,w,!0):(S&8&&d(p,""),F&16&&se(I,p,v,h,w,C,x,k))},Jn=(c,f,p,v,h,w,C,x,k)=>{c=c||At,f=f||At;const g=c.length,S=f.length,I=Math.min(g,S);let T;for(T=0;T<I;T++){const F=f[T]=k?Xe(f[T]):Ne(f[T]);M(c[T],F,p,null,h,w,C,x,k)}g>S?ze(c,h,w,!0,!1,I):se(f,p,v,h,w,C,x,k,I)},Rt=(c,f,p,v,h,w,C,x,k)=>{let g=0;const S=f.length;let I=c.length-1,T=S-1;for(;g<=I&&g<=T;){const F=c[g],B=f[g]=k?Xe(f[g]):Ne(f[g]);if(jt(F,B))M(F,B,p,null,h,w,C,x,k);else break;g++}for(;g<=I&&g<=T;){const F=c[I],B=f[T]=k?Xe(f[T]):Ne(f[T]);if(jt(F,B))M(F,B,p,null,h,w,C,x,k);else break;I--,T--}if(g>I){if(g<=T){const F=T+1,B=F<S?f[F].el:v;for(;g<=T;)M(null,f[g]=k?Xe(f[g]):Ne(f[g]),p,B,h,w,C,x,k),g++}}else if(g>T)for(;g<=I;)Ye(c[g],h,w,!0),g++;else{const F=g,B=g,W=new Map;for(g=B;g<=T;g++){const pe=f[g]=k?Xe(f[g]):Ne(f[g]);pe.key!=null&&W.set(pe.key,g)}let Y,X=0;const we=T-B+1;let yt=!1,ka=0;const Dt=new Array(we);for(g=0;g<we;g++)Dt[g]=0;for(g=F;g<=I;g++){const pe=c[g];if(X>=we){Ye(pe,h,w,!0);continue}let Te;if(pe.key!=null)Te=W.get(pe.key);else for(Y=B;Y<=T;Y++)if(Dt[Y-B]===0&&jt(pe,f[Y])){Te=Y;break}Te===void 0?Ye(pe,h,w,!0):(Dt[Te-B]=g+1,Te>=ka?ka=Te:yt=!0,M(pe,f[Te],p,null,h,w,C,x,k),X++)}const Ca=yt?Ul(Dt):At;for(Y=Ca.length-1,g=we-1;g>=0;g--){const pe=B+g,Te=f[pe],Aa=pe+1<S?f[pe+1].el:v;Dt[g]===0?M(null,Te,p,Aa,h,w,C,x,k):yt&&(Y<0||g!==Ca[Y]?gt(Te,p,Aa,2):Y--)}}},gt=(c,f,p,v,h=null)=>{const{el:w,type:C,transition:x,children:k,shapeFlag:g}=c;if(g&6){gt(c.component.subTree,f,p,v);return}if(g&128){c.suspense.move(f,p,v);return}if(g&64){C.move(c,f,p,bt);return}if(C===ue){r(w,f,p);for(let I=0;I<k.length;I++)gt(k[I],f,p,v);r(c.anchor,f,p);return}if(C===vn){j(c,f,p);return}if(v!==2&&g&1&&x)if(v===0)x.beforeEnter(w),r(w,f,p),fe(()=>x.enter(w),h);else{const{leave:I,delayLeave:T,afterLeave:F}=x,B=()=>r(w,f,p),W=()=>{I(w,()=>{B(),F&&F()})};T?T(w,B,W):W()}else r(w,f,p)},Ye=(c,f,p,v=!1,h=!1)=>{const{type:w,props:C,ref:x,children:k,dynamicChildren:g,shapeFlag:S,patchFlag:I,dirs:T}=c;if(x!=null&&wr(x,null,p,c,!0),S&256){f.ctx.deactivate(c);return}const F=S&1&&T,B=!Kt(c);let W;if(B&&(W=C&&C.onVnodeBeforeUnmount)&&Pe(W,f,c),S&6)as(c.component,p,v);else{if(S&128){c.suspense.unmount(p,v);return}F&&ot(c,null,f,"beforeUnmount"),S&64?c.type.remove(c,f,p,h,bt,v):g&&(w!==ue||I>0&&I&64)?ze(g,f,p,!1,!0):(w===ue&&I&384||!h&&S&16)&&ze(k,f,p),v&&xa(c)}(B&&(W=C&&C.onVnodeUnmounted)||F)&&fe(()=>{W&&Pe(W,f,c),F&&ot(c,null,f,"unmounted")},p)},xa=c=>{const{type:f,el:p,anchor:v,transition:h}=c;if(f===ue){rs(p,v);return}if(f===vn){K(c);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:C,delayLeave:x}=h,k=()=>C(p,w);x?x(c.el,w,k):k()}else w()},rs=(c,f)=>{let p;for(;c!==f;)p=b(c),a(c),c=p;a(f)},as=(c,f,p)=>{const{bum:v,scope:h,update:w,subTree:C,um:x}=c;v&&nr(v),h.stop(),w&&(w.active=!1,Ye(C,c,f,p)),x&&fe(x,f),fe(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ze=(c,f,p,v=!1,h=!1,w=0)=>{for(let C=w;C<c.length;C++)Ye(c[C],f,p,v,h)},on=c=>c.shapeFlag&6?on(c.component.subTree):c.shapeFlag&128?c.suspense.next():b(c.anchor||c.el),wa=(c,f,p)=>{c==null?f._vnode&&Ye(f._vnode,null,null,!0):M(f._vnode||null,c,f,null,null,null,p),Gi(),f._vnode=c},bt={p:M,um:Ye,m:gt,r:xa,mt:Gn,mc:se,pc:$e,pbc:vt,n:on,o:e};let Qn,er;return t&&([Qn,er]=t(bt)),{render:wa,hydrate:Qn,createApp:jl(wa,Qn)}}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function vo(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||vo(o,s))}}function Ul(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Wl=e=>e.__isTeleport,ue=Symbol(void 0),ra=Symbol(void 0),Qe=Symbol(void 0),vn=Symbol(void 0),Vt=[];let Ae=null;function J(e=!1){Vt.push(Ae=e?null:[])}function Yl(){Vt.pop(),Ae=Vt[Vt.length-1]||null}let en=1;function Wa(e){en+=e}function go(e){return e.dynamicChildren=en>0?Ae||At:null,Yl(),en>0&&Ae&&Ae.push(e),e}function oe(e,t,n,r,a,i){return go(y(e,t,n,r,a,i,!0))}function Ft(e,t,n,r,a){return go(z(e,t,n,r,a,!0))}function En(e){return e?e.__v_isVNode===!0:!1}function jt(e,t){return e.type===t.type&&e.key===t.key}const Wn="__vInternal",bo=({key:e})=>e!=null?e:null,gn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||ae(e)||R(e)?{i:de,r:e,k:t,f:!!n}:e:null;function y(e,t=null,n=null,r=0,a=null,i=e===ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bo(t),ref:t&&gn(t),scopeId:Bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(aa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),en>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const z=Kl;function Kl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ol)&&(e=Qe),En(e)){const s=St(e,t,!0);return n&&aa(s,n),en>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(ic(e)&&(e=e.__vccOpts),t){t=Vl(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=jr(s)),Q(l)&&(Wi(l)&&!$(l)&&(l=ie({},l)),t.style=Dr(l))}const o=te(e)?1:fl(e)?128:Wl(e)?64:Q(e)?4:R(e)?2:0;return y(e,t,n,r,a,o,i,!0)}function Vl(e){return e?Wi(e)||Wn in e?ie({},e):e:null}function St(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Zl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&bo(s),ref:t&&t.ref?n&&a?$(a)?a.concat(gn(t)):[a,gn(t)]:gn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor}}function at(e=" ",t=0){return z(ra,null,e,t)}function ql(e,t){const n=z(vn,null,e);return n.staticCount=t,n}function Xl(e="",t=!1){return t?(J(),Ft(Qe,null,e)):z(Qe,null,e)}function Ne(e){return e==null||typeof e=="boolean"?z(Qe):$(e)?z(ue,null,e.slice()):typeof e=="object"?Xe(e):z(ra,null,String(e))}function Xe(e){return e.el===null||e.memo?e:St(e)}function aa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),aa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Wn in t)?t._ctx=de:a===3&&de&&(de.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:de},n=32):(t=String(t),r&64?(n=16,t=[at(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=jr([t.class,r.class]));else if(a==="style")t.style=Dr([t.style,r.style]);else if(Fn(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Ie(e,t,7,[n,r])}const Gl=ho();let Jl=0;function Ql(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Gl,i={uid:Jl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ys(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fo(r,a),emitsOptions:Qi(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let ee=null;const Tt=e=>{ee=e,e.scope.on()},dt=()=>{ee&&ee.scope.off(),ee=null};function yo(e){return e.vnode.shapeFlag&4}let tn=!1;function ec(e,t=!1){tn=t;const{props:n,children:r}=e.vnode,a=yo(e);Fl(e,n,a,t),zl(e,r);const i=a?tc(e,t):void 0;return tn=!1,i}function tc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Yi(new Proxy(e.ctx,Il));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?rc(e):null;Tt(e),Mt();const i=Ge(r,e,0,[e.props,a]);if(Nt(),dt(),Ti(i)){if(i.then(dt,dt),t)return i.then(o=>{Ya(e,o,t)}).catch(o=>{Dn(o,e,0)});e.asyncDep=i}else Ya(e,i,t)}else _o(e,t)}function Ya(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Ki(t)),_o(e,n)}let Ka;function _o(e,t,n){const r=e.type;if(!e.render){if(!t&&Ka&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ie(ie({isCustomElement:i,delimiters:s},o),l);r.render=Ka(a,u)}}e.render=r.render||Ee}Tt(e),Mt(),Sl(e),Nt(),dt()}function nc(e){return new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}})}function rc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=nc(e))},slots:e.slots,emit:e.emit,expose:t}}function ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ki(Yi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in An)return An[n](e)}}))}function ac(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function ic(e){return R(e)&&"__vccOpts"in e}const ye=(e,t)=>Js(e,t,tn);function xo(e,t,n){const r=arguments.length;return r===2?Q(t)&&!$(t)?En(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&En(n)&&(n=[n]),z(e,t,n))}const oc="3.2.37",sc="http://www.w3.org/2000/svg",ct=typeof document<"u"?document:null,Va=ct&&ct.createElement("template"),lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ct.createElementNS(sc,e):ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Va.innerHTML=r?`<svg>${e}</svg>`:e;const s=Va.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function cc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function fc(e,t,n){const r=e.style,a=te(n);if(n&&!a){for(const i in n)kr(r,i,n[i]);if(t&&!te(t))for(const i in t)n[i]==null&&kr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const qa=/\s*!important$/;function kr(e,t,n){if($(n))n.forEach(r=>kr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=uc(e,t);qa.test(n)?e.setProperty(Pt(r),n.replace(qa,""),"important"):e[r]=n}}const Xa=["Webkit","Moz","ms"],ir={};function uc(e,t){const n=ir[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return ir[t]=r;r=zn(r);for(let a=0;a<Xa.length;a++){const i=Xa[a]+r;if(i in e)return ir[t]=i}return t}const Za="http://www.w3.org/1999/xlink";function dc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Za,t.slice(6,t.length)):e.setAttributeNS(Za,t,n);else{const i=ss(t);n==null||i&&!Ei(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function mc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ei(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[wo,pc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Cr=0;const hc=Promise.resolve(),vc=()=>{Cr=0},gc=()=>Cr||(hc.then(vc),Cr=wo());function bc(e,t,n,r){e.addEventListener(t,n,r)}function yc(e,t,n,r){e.removeEventListener(t,n,r)}function _c(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=xc(t);if(r){const u=i[t]=wc(r,a);bc(e,s,u,l)}else o&&(yc(e,s,o,l),i[t]=void 0)}}const Ga=/(?:Once|Passive|Capture)$/;function xc(e){let t;if(Ga.test(e)){t={};let n;for(;n=e.match(Ga);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Pt(e.slice(2)),t]}function wc(e,t){const n=r=>{const a=r.timeStamp||wo();(pc||a>=n.attached-1)&&Ie(kc(r,n.value),t,5,[r])};return n.value=e,n.attached=gc(),n}function kc(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ja=/^on[a-z]/,Cc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?cc(e,r,a):t==="style"?fc(e,n,r):Fn(t)?Hr(t)||_c(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ac(e,t,r,a))?mc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),dc(e,t,r,a))};function Ac(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ja.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ja.test(t)&&te(n)?!1:t in e}const Oc=ie({patchProp:Cc},lc);let Qa;function Ec(){return Qa||(Qa=Hl(Oc))}const Ic=(...e)=>{const t=Ec().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Sc(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Sc(e){return te(e)?document.querySelector(e):e}const xe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Tc={},ko=e=>(nt("data-v-d396dd31"),e=e(),rt(),e),Pc=ko(()=>y("svg",{"data-v-423bf9ae":"",viewBox:"0 0 100 99.999977",class:"iconLeft",version:"1.1",id:"svg879","sodipodi:docname":"logo.svg","inkscape:version":"1.1 (c68e22c387, 2021-05-23)",width:"50",height:"50","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},[y("defs",{id:"defs883"},[y("filter",{style:{"color-interpolation-filters":"sRGB"},"inkscape:label":"Blur",id:"filter6938",x:"-0.030016838",y:"-0.025995896",width:"1.0600337",height:"1.0519918"},[y("feGaussianBlur",{stdDeviation:"1 1",result:"blur",id:"feGaussianBlur6936"})])]),y("g",{"inkscape:groupmode":"layer",id:"layer1","inkscape:label":"Logo",style:{display:"inline"},transform:"translate(4.447776,4.7388754)"},[y("g",{"data-v-423bf9ae":"",id:"00048e58-77fb-4fe9-923e-6d8d7af96538",transform:"matrix(1.0128223,0,0,1.0128223,-7.9448352,1.4966716)",stroke:"none",fill:"#ffffff",style:{fill:"#ffffff","fill-opacity":"1"},"inkscape:label":"00048e58-77fb-4fe9-923e-6d8d7af96538"},[y("path",{id:"path868",style:{fill:"#ffffff","fill-opacity":"1","fill-rule":"nonzero","stroke-width":"0.999998"},d:"M 52.818788,-2.3663381 13.348328,20.421547 v 45.577699 l 39.47046,22.787885 39.221698,-22.643255 0.248763,-0.142702 h 0.002 V 20.423475 Z m -0.499455,1.4424421 v 16.900485 l -0.485956,0.279617 C 44.387099,20.554876 36.941229,24.85304 29.494809,29.151407 L 14.835123,20.71852 Z m 1.000839,0 37.48421,21.644344 -14.628831,8.448315 C 68.557101,24.77163 60.939167,20.372779 53.320172,15.976589 Z m -0.501384,22.323141 16.42417,9.483864 -16.383673,9.46458 C 47.373747,37.191167 41.88787,34.033962 36.402332,30.877324 Z m -38.469621,0.19284 14.630759,8.41746 v 26.384348 l -14.630759,8.402032 z m 76.941171,0.002 V 64.799828 L 90.117872,64.126817 76.659579,56.399724 V 52.506288 30.044302 Z M 33.928197,35.166082 c 5.472512,3.147777 10.944553,6.296455 16.416456,9.445296 V 63.59839 L 33.928197,54.120311 Z m 37.781183,0.0058 v 13.061043 5.887401 L 55.292924,63.59839 V 44.655731 c 2.451008,-1.416106 4.901938,-2.832281 7.352984,-4.248261 3.021087,-1.745299 6.042303,-3.490378 9.063472,-5.235603 z M 29.473596,57.263641 c 7.615871,4.395688 15.229351,8.793527 22.845737,13.188317 v 16.89273 L 14.808126,65.684917 Z m 46.692313,0.0058 L 90.827523,65.6869 53.320172,87.344743 V 70.451918 c 7.614546,-4.388289 15.255461,-8.815264 22.845737,-13.182532 z"})])])],-1)),Mc=ko(()=>y("span",{class:"logo"},"DataHub",-1));function Nc(e,t){return J(),oe(ue,null,[Pc,Mc],64)}const Fc=xe(Tc,[["render",Nc],["__scopeId","data-v-d396dd31"]]),Lc={class:"navbar navbar-expand-lg navbar-dark bg-dark"},$c={class:"container-fluid"},zc={class:"navbar-brand",href:"#"},Rc=y("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[y("span",{class:"navbar-toggler-icon"})],-1),Dc=y("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[y("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[y("li",{class:"nav-item"},[y("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")]),y("li",{class:"nav-item"},[y("a",{class:"nav-link",href:"#"},"About")]),y("li",{class:"nav-item"},[y("a",{class:"nav-link",href:"#"},"Documentation")]),y("li",{class:"nav-item dropdown"},[y("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Tools "),y("ul",{class:"dropdown-menu dropdown-menu-dark","aria-labelledby":"navbarDropdown"},[y("li",null,[y("a",{class:"dropdown-item",href:"#"},"DataHub Core Lib")]),y("li",null,[y("hr",{class:"dropdown-divider"})]),y("li",null,[y("a",{class:"dropdown-item",href:"#"},"DataHub CodeGen")]),y("li",null,[y("a",{class:"dropdown-item",href:"#"},"DataHub TestLab")]),y("li",null,[y("a",{class:"dropdown-item",href:"#"},"DataHub Watchtower")])])])]),y("form",{class:"d-flex",role:"search"},[y("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),y("button",{class:"btn btn-outline-success",type:"submit"},"Search")])],-1),jc=_e({__name:"AppBar",setup(e){return(t,n)=>(J(),oe("nav",Lc,[y("div",$c,[y("a",zc,[z(Fc)]),Rc,Dc])]))}});const Hc={class:"card bg-dark text-white shadow"},Bc={class:"card-top card-img-top"},Uc={class:"card-body"},Wc={class:"card-title"},Yc={key:0,class:"card-text"},Kc=_e({__name:"HeroCard",props:{title:String,text:String,icon:{type:String,required:!1}},setup(e){return(t,n)=>{const r=ta("font-awesome-icon");return J(),oe("div",Hc,[y("div",Bc,[z(r,{icon:"fa-solid "+e.icon},null,8,["icon"])]),y("div",Uc,[y("h5",Wc,Oa(e.title),1),e.text?(J(),oe("p",Yc,Oa(e.text),1)):Xl("",!0)])])}}});const dn=xe(Kc,[["__scopeId","data-v-01723445"]]);const Vc={},Co=e=>(nt("data-v-324b5bf2"),e=e(),rt(),e),qc={id:"container"},Xc=Co(()=>y("svg",{id:"visual",preserveAspectRatio:"xMidYMid slice",viewBox:"0 100 900 600",version:"1.1","sodipodi:docname":"layered-waves-haikei2.svg","inkscape:version":"1.1 (c68e22c387, 2021-05-23)","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},[y("defs",{id:"defs7423"}),y("path",{d:"m 0,543.71688 18.8,3.5 c 18.9,3.5 56.5,10.5 94,13 37.5,2.5 74.9,0.5 112.4,-3.2 37.5,-3.6 75.1,-9 112.6,-14.5 37.5,-5.5 74.9,-11.1 112.4,-12.6 37.5,-1.5 75.1,1.1 112.6,9.3 37.5,8.2 74.9,21.8 112.4,26.2 37.5,4.3 75.1,-0.7 112.6,-8.5 37.5,-7.9 74.9,-18.5 93.5,-23.9 l 18.7,-5.3 v -119 h -18.7 c -18.6,0 -56,0 -93.5,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -94,0 H 0 Z",fill:"#7e2e61",id:"path7507"}),y("path",{d:"m 0,554 18.8,-4 c 18.9,-4 56.5,-12 94,-12.8 37.5,-0.9 74.9,5.5 112.4,6.1 37.5,0.7 75.1,-4.3 112.6,-6.6 37.5,-2.4 74.9,-2 112.4,0.8 37.5,2.8 75.1,8.2 112.6,9.3 37.5,1.2 74.9,-1.8 112.4,-6.6 37.5,-4.9 75.1,-11.5 112.6,-11.9 37.5,-0.3 74.9,5.7 93.5,8.7 l 18.7,3 v -94 h -18.7 c -18.6,0 -56,0 -93.5,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -94,0 H 0 Z",fill:"#a03f6d",id:"path7484"}),y("path",{d:"m 0,243 18.8,1.8 c 18.9,1.9 56.5,5.5 94,11.5 37.5,6 74.9,14.4 112.4,13.2 37.5,-1.2 75.1,-11.8 112.6,-11.7 37.5,0.2 74.9,11.2 112.4,14.5 37.5,3.4 75.1,-1 112.6,-1.6 37.5,-0.7 74.9,2.3 112.4,3.6 37.5,1.4 75.1,1 112.6,2.2 37.5,1.2 74.9,3.8 93.5,5.2 L 900,283 v 198 h -18.7 c -18.6,0 -56,0 -93.5,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -94,0 H 0 Z",fill:"#3c1143",id:"path7410"}),y("path",{d:"m 0,298 18.8,3.8 c 18.9,3.9 56.5,11.5 94,6.7 37.5,-4.8 74.9,-22.2 112.4,-28.8 37.5,-6.7 75.1,-2.7 112.6,-3.7 37.5,-1 74.9,-7 112.4,-4 37.5,3 75.1,15 112.6,20.2 37.5,5.1 74.9,3.5 112.4,-0.7 37.5,-4.2 75.1,-10.8 112.6,-12 37.5,-1.2 74.9,3.2 93.5,5.3 L 900,287 v 194 h -18.7 c -18.6,0 -56,0 -93.5,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -94,0 H 0 Z",fill:"#5c1f53",id:"path7412"}),y("path",{d:"m 0,346 18.8,-3.5 c 18.9,-3.5 56.5,-10.5 94,-13 37.5,-2.5 74.9,-0.5 112.4,3.2 37.5,3.6 75.1,9 112.6,14.5 37.5,5.5 74.9,11.1 112.4,12.6 37.5,1.5 75.1,-1.1 112.6,-9.3 37.5,-8.2 74.9,-21.8 112.4,-26.2 37.5,-4.3 75.1,0.7 112.6,8.5 37.5,7.9 74.9,18.5 93.5,23.9 L 900,362 v 119 h -18.7 c -18.6,0 -56,0 -93.5,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -94,0 H 0 Z",fill:"#7e2e61",id:"path7414"}),y("path",{d:"m 0,373 18.8,4 c 18.9,4 56.5,12 94,12.8 37.5,0.9 74.9,-5.5 112.4,-6.1 37.5,-0.7 75.1,4.3 112.6,6.6 37.5,2.4 74.9,2 112.4,-0.8 37.5,-2.8 75.1,-8.2 112.6,-9.3 37.5,-1.2 74.9,1.8 112.4,6.6 37.5,4.9 75.1,11.5 112.6,11.9 37.5,0.3 74.9,-5.7 93.5,-8.7 l 18.7,-3 v 94 h -18.7 c -18.6,0 -56,0 -93.5,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -112.6,0 -37.5,0 -74.9,0 -112.4,0 -37.5,0 -75.1,0 -94,0 H 0 Z",fill:"#a03f6d",id:"path7416"}),y("path",{id:"path7418",d:"m 787.80078,411 c -37.5,0 -75.10156,10.99922 -112.60156,14.69922 -37.5,3.6 -74.89844,0.002 -112.39844,1.60156 -37.5,1.7 -75.10156,8.7 -112.60156,10 -37.5,1.4 -74.89844,-3 -112.39844,-2.5 -37.5,0.5 -75.10156,5.9 -112.60156,2.5 -37.5,-3.3 -74.89844,-15.30156 -112.39844,-14.60156 -37.499999,0.6 -75.099999,14.00156 -93.999999,20.60156 L 0,450 v 25 2 25 l 18.800781,6.69922 c 18.9,6.6 56.5,20.00156 93.999999,20.60156 37.5,0.7 74.89844,-11.30156 112.39844,-14.60156 37.5,-3.4 75.10156,2 112.60156,2.5 37.5,0.5 74.89844,-3.9 112.39844,-2.5 37.5,1.3 75.10156,8.3 112.60156,10 37.5,1.6 74.89844,-1.99844 112.39844,1.60156 37.5,3.7 75.10156,14.69922 112.60156,14.69922 37.5,0 74.9,-11 93.5,-16.5 L 900,519 v -42 -2 -42 l -18.69922,-5.5 c -18.6,-5.5 -56,-16.5 -93.5,-16.5 z",style:{fill:"#c25178","fill-opacity":"1"}})],-1)),Zc=Co(()=>y("div",{id:"fader"},null,-1)),Gc=[Xc,Zc];function Jc(e,t){return J(),oe("div",qc,Gc)}const Qc=xe(Vc,[["render",Jc],["__scopeId","data-v-324b5bf2"]]);const ef={},tf={class:"align-self-center"};function nf(e,t){const n=ta("font-awesome-icon");return J(),oe("div",tf,[z(n,{icon:"fa-solid fa-angles-right"})])}const or=xe(ef,[["render",nf],["__scopeId","data-v-e375f018"]]);const rf={},af=e=>(nt("data-v-97aaa25f"),e=e(),rt(),e),of={class:"card text-white shadow"},sf=af(()=>y("div",{class:"card-header bg-dark"},[y("svg",{viewBox:"0 0 13.169427 3.5553787",version:"1.1",id:"dots",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},[y("defs",{id:"defs11111"}),y("g",{"inkscape:label":"Ebene 1","inkscape:groupmode":"layer",id:"layer1",transform:"translate(-53.39213,-12.766621)"},[y("circle",{style:{fill:"#fa3742","fill-opacity":"1","stroke-width":"0"},id:"path11396",cx:"55.169819",cy:"14.544311",r:"1.5776893"}),y("circle",{style:{fill:"#ffbc14","fill-opacity":"1","stroke-width":"0"},id:"circle11478",cx:"60.050797",cy:"14.544311",r:"1.5776893"}),y("circle",{style:{fill:"#00d639","fill-opacity":"1","stroke-width":"0"},id:"circle11501",cx:"64.783867",cy:"14.544311",r:"1.5776893"})])])],-1)),lf={class:"card-body"};function cf(e,t){return J(),oe("div",of,[sf,y("div",lf,[Qt(e.$slots,"default",{},void 0,!0)])])}const ff=xe(rf,[["render",cf],["__scopeId","data-v-97aaa25f"]]);const uf={},Ao=e=>(nt("data-v-39485781"),e=e(),rt(),e),df=Ao(()=>y("span",{class:"tpref"},"$",-1)),mf=at(),pf=Ao(()=>y("br",null,null,-1));function hf(e,t){return J(),oe(ue,null,[df,mf,Qt(e.$slots,"default",{},void 0,!0),pf],64)}const ei=xe(uf,[["render",hf],["__scopeId","data-v-39485781"]]);const vf={},gf={version:"1.1",id:"dart-logo",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"443px",height:"138.46px",viewBox:"0 0 443 138.46","enable-background":"new 0 0 443 138.46","xml:space":"preserve"},bf=ql(`<g data-v-1a4a012f><path fill="#FFFFFF" d="M209.04,21.15h27.55c9.35,0,17.51,1.93,24.49,5.8c6.97,3.87,12.33,9.25,16.07,16.13
		c3.74,6.89,5.61,14.79,5.61,23.72s-1.87,16.83-5.61,23.72s-9.1,12.26-16.07,16.13s-15.13,5.8-24.49,5.8h-27.55V21.15z
		 M236.59,102.14c10.8,0,19.36-3.1,25.7-9.31c6.33-6.21,9.5-14.88,9.5-26.02s-3.17-19.81-9.5-26.02s-14.9-9.31-25.7-9.31h-16.83
		v70.65h16.83V102.14z" data-v-1a4a012f></path><path fill="#FFFFFF" d="M299.46,111.7c-3.74-1.87-6.63-4.44-8.67-7.72c-2.04-3.27-3.06-6.99-3.06-11.16
		c0-6.89,2.59-12.26,7.78-16.13c5.18-3.87,11.73-5.8,19.64-5.8c3.91,0,7.54,0.43,10.9,1.28s5.93,1.83,7.72,2.93v-3.95
		c0-4.85-1.7-8.74-5.1-11.67s-7.7-4.4-12.88-4.4c-3.66,0-7.01,0.79-10.08,2.36c-3.06,1.57-5.48,3.76-7.27,6.57l-8.16-6.12
		c2.55-3.91,6.06-6.97,10.52-9.18c4.46-2.21,9.42-3.32,14.86-3.32c8.84,0,15.79,2.32,20.85,6.95c5.06,4.64,7.59,10.95,7.59,18.94
		v41.19h-10.34v-9.31h-0.51c-1.87,3.15-4.68,5.82-8.42,8.03c-3.74,2.21-7.95,3.32-12.63,3.32
		C307.45,114.51,303.2,113.57,299.46,111.7z M323.43,102.14c3.14-1.87,5.65-4.38,7.52-7.52s2.81-6.59,2.81-10.33
		c-2.04-1.36-4.55-2.47-7.52-3.32c-2.98-0.85-6.12-1.28-9.44-1.28c-5.95,0-10.44,1.23-13.45,3.7c-3.02,2.47-4.53,5.66-4.53,9.56
		c0,3.57,1.36,6.46,4.08,8.67s6.16,3.32,10.33,3.32C316.89,104.94,320.29,104.01,323.43,102.14z" data-v-1a4a012f></path><path fill="#FFFFFF" d="M355.53,48.45h10.33v10.33h0.51c1.53-3.83,4.12-6.8,7.78-8.93c3.65-2.12,7.65-3.19,11.99-3.19
		c1.87,0,3.44,0.13,4.72,0.38v11.1c-1.45-0.34-3.4-0.51-5.87-0.51c-5.53,0-10.01,1.83-13.45,5.48c-3.44,3.66-5.17,8.42-5.17,14.28
		v36.09h-10.84L355.53,48.45L355.53,48.45z M422.85,113.21c-2.25-0.86-4.14-2.03-5.68-3.51c-1.7-1.64-2.98-3.55-3.83-5.71
		c-0.85-2.16-1.28-4.8-1.28-7.92V57.25h-11.35v-9.82h11.35V29.07h10.84v18.36h15.81v9.82H422.9v36.24c0,3.65,0.68,6.34,2.04,8.08
		c1.61,1.91,3.95,2.87,7.01,2.87c2.46,0,4.85-0.72,7.14-2.17v10.59c-1.28,0.59-2.57,1.02-3.89,1.28s-3,0.38-5.04,0.38
		C427.55,114.51,425.11,114.07,422.85,113.21z" data-v-1a4a012f></path><g data-v-1a4a012f><path fill="#01579B" d="M31.65,109.5L8.38,86.23C5.62,83.4,3.91,79.4,3.91,75.49c0-1.81,1.02-4.64,1.79-6.26l21.48-44.74
			L31.65,109.5z" data-v-1a4a012f></path><path fill="#40C4FF" d="M111.3,28.96L88.03,5.69C86,3.65,81.77,1.22,78.19,1.22c-3.08,0-6.1,0.62-8.05,1.79L27.19,24.49
			L111.3,28.96z" data-v-1a4a012f></path><polygon fill="#40C4FF" points="59.39,137.24 115.77,137.24 115.77,113.08 73.71,99.65 35.23,113.08 		" data-v-1a4a012f></polygon><path fill="#29B6F6" d="M27.18,96.97c0,7.18,0.9,8.94,4.47,12.53l3.58,3.58h80.54L76.4,68.34L27.18,24.49V96.97z" data-v-1a4a012f></path><path fill="#01579B" d="M98.77,24.48H27.18l88.59,88.59h24.16V57.59l-28.64-28.64C107.27,24.92,103.7,24.48,98.77,24.48z" data-v-1a4a012f></path><path opacity="0.2" fill="#FFFFFF" enable-background="new    " d="M32.55,110.39c-3.58-3.59-4.47-7.13-4.47-13.42V25.38
			l-0.89-0.89v72.48C27.18,103.26,27.18,105,32.55,110.39l2.68,2.68l0,0L32.55,110.39z" data-v-1a4a012f></path><polygon opacity="0.2" fill="#263238" enable-background="new    " points="139.04,56.7 139.04,112.18 114.88,112.18 
			115.77,113.08 139.93,113.08 139.93,57.59 		" data-v-1a4a012f></polygon><path opacity="0.2" fill="#FFFFFF" enable-background="new    " d="M111.3,28.96c-4.44-4.44-8.07-4.47-13.42-4.47H27.19l0.89,0.89
			h69.8C100.55,25.38,107.29,24.93,111.3,28.96L111.3,28.96z" data-v-1a4a012f></path><radialGradient id="SVGID_1_" cx="71.915" cy="62.2171" r="68" gradientTransform="matrix(1 0 0 -1 0 131.4443)" gradientUnits="userSpaceOnUse" data-v-1a4a012f><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1;" data-v-1a4a012f></stop><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0;" data-v-1a4a012f></stop></radialGradient><path opacity="0.2" fill="url(#SVGID_1_)" enable-background="new    " d="M139.04,56.7L111.3,28.96L88.03,5.69
			C86,3.65,81.77,1.22,78.19,1.22c-3.08,0-6.1,0.62-8.05,1.79L27.19,24.49L5.71,69.23c-0.77,1.63-1.79,4.46-1.79,6.26
			c0,3.91,1.72,7.9,4.47,10.74l21.44,21.29c0.51,0.63,1.11,1.27,1.82,1.98l0.89,0.89l2.68,2.68l23.27,23.27l0.89,0.89h55.48h0.89
			v-24.16h24.16v-0.06V57.59L139.04,56.7z" data-v-1a4a012f></path></g></g>`,1),yf=[bf];function _f(e,t){return J(),oe("svg",gf,yf)}const xf=xe(vf,[["render",_f],["__scopeId","data-v-1a4a012f"]]),ht=e=>(nt("data-v-bc43c6ba"),e=e(),rt(),e),wf={class:"hero"},kf={class:"hero-content d-flex flex-row align-content-end justify-content-center flex-wrap"},Cf={class:"left"},Af=ht(()=>y("span",{class:"t-1"},"Makes",-1)),Of=ht(()=>y("br",null,null,-1)),Ef=ht(()=>y("br",null,null,-1)),If=ht(()=>y("span",{class:"t-2"},"become",-1)),Sf=ht(()=>y("br",null,null,-1)),Tf=ht(()=>y("span",{class:"t-3"},"Cloud Native",-1)),Pf={class:"right"},Mf=at("dart pub global activate datahub"),Nf=at("dart pub add datahub"),Ff={class:"d-flex flex-row flex-wrap justify-content-center cards"},Lf=ht(()=>y("div",{class:"scroll"},[y("div",{class:"arrow"})],-1)),$f=_e({__name:"MainHero",setup(e){return(t,n)=>(J(),oe("div",wf,[z(Qc),y("div",kf,[y("div",Cf,[Af,Of,z(xf),Ef,If,Sf,Tf]),y("div",Pf,[y("div",null,[z(ff,null,{default:ve(()=>[z(ei,null,{default:ve(()=>[Mf]),_:1}),z(ei,null,{default:ve(()=>[Nf]),_:1})]),_:1})])])]),y("div",Ff,[z(dn,{title:"Build",icon:"fa-diagram-project"}),z(or),z(dn,{title:"Test",icon:"fa-flask"}),z(or),z(dn,{title:"Deploy",icon:"fa-cloud-arrow-up"}),z(or),z(dn,{title:"Scale",icon:"fa-maximize"})]),Lf]))}});const zf=xe($f,[["__scopeId","data-v-bc43c6ba"]]);const Rf={},Df=e=>(nt("data-v-911bae47"),e=e(),rt(),e),jf={class:"main"},Hf=Df(()=>y("div",{class:"line"},null,-1));function Bf(e,t){return J(),oe("div",jf,[Hf,y("div",null,[Qt(e.$slots,"default",{},void 0,!0)])])}const Uf=xe(Rf,[["render",Bf],["__scopeId","data-v-911bae47"]]),Wf={class:"main text-white"},Yf={class:"icon"},Kf={class:"headline"},Vf={class:"section-content"},qf=_e({__name:"Section",props:{icon:{type:String}},setup(e){return(t,n)=>{const r=ta("font-awesome-icon");return J(),oe("div",Wf,[y("h1",null,[y("span",Yf,[z(r,{icon:"fa-solid "+e.icon},null,8,["icon"])]),y("span",Kf,[Qt(t.$slots,"title",{},void 0,!0)])]),y("div",Vf,[Qt(t.$slots,"content",{},void 0,!0)])])}}});const Yn=xe(qf,[["__scopeId","data-v-9c80aa42"]]),Xf=at(" Develop faster than "),Zf=y("i",null,"ever",-1),Gf=y("p",null," Run DataHub inside the DartVM for Development and compile to native maschine code for Deployment. ",-1),Jf=y("p",null," Use HotReload to speed up Debugging. ",-1),Qf=_e({__name:"BuildSection",setup(e){return(t,n)=>(J(),Ft(Yn,{icon:"fa-bolt"},{title:ve(()=>[Xf,Zf]),content:ve(()=>[Gf,Jf]),_:1}))}});const eu={},tu=e=>(nt("data-v-2dde0cae"),e=e(),rt(),e),nu={class:"container text-white"},ru=tu(()=>y("h2",null,"DataHub is a Cloud Development Ecosystem aiming to bring the power of Dart into the Cloud.",-1)),au=[ru];function iu(e,t){return J(),oe("div",nu,au)}const ou=xe(eu,[["render",iu],["__scopeId","data-v-2dde0cae"]]);const su={},lu=e=>(nt("data-v-8d4e57fb"),e=e(),rt(),e),cu={class:"main"},fu=lu(()=>y("div",{class:"line"},null,-1)),uu=[fu];function du(e,t){return J(),oe("div",cu,uu)}const mu=xe(su,[["render",du],["__scopeId","data-v-8d4e57fb"]]),pu=at(" Easy unit- and integration-testing "),hu=y("p",null," Automate emulated testing scenarios for separate services or complex service compositions. ",-1),vu=y("p",null," Simulate high loads, faulty requests or failing infrastructure. ",-1),gu=_e({__name:"TestSection",setup(e){return(t,n)=>(J(),Ft(Yn,{icon:"fa-flask"},{title:ve(()=>[pu]),content:ve(()=>[hu,vu]),_:1}))}}),bu=at(" Deploy fast and with confidence "),yu=y("p",null," Build deployment or debug docker images straight from the command line or from CI. An average debug docker build with DataHub takes ~30 seconds while a production build takes ~1 minute. ",-1),_u=y("p",null," DataHub is native to Docker and Kubernetes. Easily create configuration for production, test stages or development environments. ",-1),xu=_e({__name:"DeploySection",setup(e){return(t,n)=>(J(),Ft(Yn,{icon:"fa-cloud-arrow-up"},{title:ve(()=>[bu]),content:ve(()=>[yu,_u]),_:1}))}}),wu=at(" Scalable throughout the whole process "),ku=y("p",null," DataHub core principles like immutability, statless services and IoC are tailored to scalability. ",-1),Cu=y("p",null," With DataHub not only your services but also testing and CI will feel lightweight through every stage of scaling. ",-1),Au=_e({__name:"ScaleSection",setup(e){return(t,n)=>(J(),Ft(Yn,{icon:"fa-maximize"},{title:ve(()=>[wu]),content:ve(()=>[ku,Cu]),_:1}))}}),Ou=_e({__name:"App",setup(e){return(t,n)=>(J(),oe(ue,null,[y("header",null,[z(jc)]),y("main",null,[z(zf),z(mu),z(Uf,null,{default:ve(()=>[z(ou),z(Qf),z(gu),z(xu),z(Au)]),_:1})])],64))}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ti(Object(n),!0).forEach(function(r){Su(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function In(e){return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(e)}function Eu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ni(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Iu(e,t,n){return t&&ni(e.prototype,t),n&&ni(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Su(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oa(e,t){return Pu(e)||Nu(e,t)||Oo(e,t)||Lu()}function Kn(e){return Tu(e)||Mu(e)||Oo(e)||Fu()}function Tu(e){if(Array.isArray(e))return Ar(e)}function Pu(e){if(Array.isArray(e))return e}function Mu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Oo(e,t){if(!!e){if(typeof e=="string")return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(e,t)}}function Ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ri=function(){},sa={},Eo={},Io=null,So={mark:ri,measure:ri};try{typeof window<"u"&&(sa=window),typeof document<"u"&&(Eo=document),typeof MutationObserver<"u"&&(Io=MutationObserver),typeof performance<"u"&&(So=performance)}catch{}var $u=sa.navigator||{},ai=$u.userAgent,ii=ai===void 0?"":ai,et=sa,Z=Eo,oi=Io,mn=So;et.document;var We=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",To=~ii.indexOf("MSIE")||~ii.indexOf("Trident/"),je="___FONT_AWESOME___",Or=16,Po="fa",Mo="svg-inline--fa",mt="data-fa-i2svg",Er="data-fa-pseudo-element",zu="data-fa-pseudo-element-pending",la="data-prefix",ca="data-icon",si="fontawesome-i2svg",Ru="async",Du=["HTML","HEAD","STYLE","SCRIPT"],No=function(){try{return!0}catch{return!1}}(),fa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Sn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Fo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ju={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Hu=/fa[srltdbk\-\ ]/,Lo="fa-layers-text",Bu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Uu={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},$o=[1,2,3,4,5,6,7,8,9,10],Wu=$o.concat([11,12,13,14,15,16,17,18,19,20]),Yu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ku=[].concat(Kn(Object.keys(Sn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat($o.map(function(e){return"".concat(e,"x")})).concat(Wu.map(function(e){return"w-".concat(e)})),zo=et.FontAwesomeConfig||{};function Vu(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var Xu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xu.forEach(function(e){var t=oa(e,2),n=t[0],r=t[1],a=qu(Vu(n));a!=null&&(zo[r]=a)})}var Zu={familyPrefix:Po,styleDefault:"solid",replacementClass:Mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},qt=A(A({},Zu),zo);qt.autoReplaceSvg||(qt.observeMutations=!1);var P={};Object.keys(qt).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){qt[e]=n,bn.forEach(function(r){return r(P)})},get:function(){return qt[e]}})});et.FontAwesomeConfig=P;var bn=[];function Gu(e){return bn.push(e),function(){bn.splice(bn.indexOf(e),1)}}var Ve=Or,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ju(e){if(!(!e||!We)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Z.head.insertBefore(t,r),e}}var Qu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var e=12,t="";e-- >0;)t+=Qu[Math.random()*62|0];return t}function Lt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ua(e){return e.classList?Lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ro(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function e1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ro(e[n]),'" ')},"").trim()}function Vn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function da(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function t1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function n1(e){var t=e.transform,n=e.width,r=n===void 0?Or:n,a=e.height,i=a===void 0?Or:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&To?l+="translate(".concat(t.x/Ve-r/2,"em, ").concat(t.y/Ve-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):l+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),l+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var r1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Do(){var e=Po,t=Mo,n=P.familyPrefix,r=P.replacementClass,a=r1;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var li=!1;function sr(){P.autoAddCss&&!li&&(Ju(Do()),li=!0)}var a1={mixout:function(){return{dom:{css:Do,insertCss:sr}}},hooks:function(){return{beforeDOMElementCreation:function(){sr()},beforeI2svg:function(){sr()}}}},He=et||{};He[je]||(He[je]={});He[je].styles||(He[je].styles={});He[je].hooks||(He[je].hooks={});He[je].shims||(He[je].shims=[]);var Oe=He[je],jo=[],i1=function e(){Z.removeEventListener("DOMContentLoaded",e),Tn=1,jo.map(function(t){return t()})},Tn=!1;We&&(Tn=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Tn||Z.addEventListener("DOMContentLoaded",i1));function o1(e){!We||(Tn?setTimeout(e,0):jo.push(e))}function rn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ro(e):"<".concat(t," ").concat(e1(r),">").concat(i.map(rn).join(""),"</").concat(t,">")}function ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var s1=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},lr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?s1(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function l1(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ir(e){var t=l1(e);return t.length===1?t[0].toString(16):null}function c1(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Sr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,fi(t)):Oe.styles[e]=A(A({},Oe.styles[e]||{}),i),e==="fas"&&Sr("fa",t)}var Xt=Oe.styles,f1=Oe.shims,u1=Object.values(Fo),ma=null,Ho={},Bo={},Uo={},Wo={},Yo={},d1=Object.keys(fa);function m1(e){return~Ku.indexOf(e)}function p1(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!m1(a)?a:null}var Ko=function(){var t=function(i){return lr(Xt,function(o,s,l){return o[l]=lr(s,i,{}),o},{})};Ho=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Bo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Yo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Xt||P.autoFetchSvg,r=lr(f1,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Uo=r.names,Wo=r.unicodes,ma=qn(P.styleDefault)};Gu(function(e){ma=qn(e.styleDefault)});Ko();function pa(e,t){return(Ho[e]||{})[t]}function h1(e,t){return(Bo[e]||{})[t]}function kt(e,t){return(Yo[e]||{})[t]}function Vo(e){return Uo[e]||{prefix:null,iconName:null}}function v1(e){var t=Wo[e],n=pa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return ma}var ha=function(){return{prefix:null,iconName:null,rest:[]}};function qn(e){var t=fa[e],n=Sn[e]||Sn[t],r=e in Oe.styles?e:null;return n||r||null}function Xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=p1(P.familyPrefix,s);if(Xt[s]?(s=u1.includes(s)?ju[s]:s,a=s,o.prefix=s):d1.indexOf(s)>-1?(a=s,o.prefix=qn(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Vo(o.iconName):{},d=kt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Xt.far&&Xt.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},ha());return(i.prefix==="fa"||a==="fa")&&(i.prefix=tt()||"fas"),i}var g1=function(){function e(){Eu(this,e),this.definitions={}}return Iu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Sr(s,o[s]);var l=Fo[s];l&&Sr(l,o[s]),Ko()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ui=[],Ct={},It={},b1=Object.keys(It);function y1(e,t){var n=t.mixoutsTo;return ui=e,Ct={},Object.keys(It).forEach(function(r){b1.indexOf(r)===-1&&delete It[r]}),ui.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),In(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ct[o]||(Ct[o]=[]),Ct[o].push(i[o])})}r.provides&&r.provides(It)}),n}function Tr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ct[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ct[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return It[e]?It[e].apply(null,t):void 0}function Pr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||tt();if(!!t)return t=kt(n,t)||t,ci(qo.definitions,n,t)||ci(Oe.styles,n,t)}var qo=new g1,_1=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,pt("noAuto")},x1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,o1(function(){k1({autoReplaceSvgRoot:n}),pt("watch",t)})}},w1={icon:function(t){if(t===null)return null;if(In(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=qn(t[0]);return{prefix:r,iconName:kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.familyPrefix,"-"))>-1||t.match(Hu))){var a=Xn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||tt(),iconName:kt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=tt();return{prefix:i,iconName:kt(i,t)||t}}}},be={noAuto:_1,config:P,dom:x1,parse:w1,library:qo,findIconDefinition:Pr,toHtml:rn},k1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(Oe.styles).length>0||P.autoFetchSvg)&&We&&P.autoReplaceSvg&&be.dom.i2svg({node:r})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return rn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!We){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function C1(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(da(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Vn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function A1(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function va(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,L=r.found?r:n,D=L.width,M=L.height,_=a==="fak",E=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(se){return m.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(M)})},j=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(D/M*16*.0625,"em")}:{};O&&(N.attributes[mt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||nn())},children:[l]}),delete N.attributes.title);var K=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},j),m.styles)}),ne=r.found&&n.found?Be("generateAbstractMask",K)||{children:[],attributes:{}}:Be("generateAbstractIcon",K)||{children:[],attributes:{}},me=ne.children,Se=ne.attributes;return K.children=me,K.attributes=Se,s?A1(K):C1(K)}function di(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[mt]="");var d=A({},o.styles);da(a)&&(d.transform=n1({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Vn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function O1(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Vn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var cr=Oe.styles;function Mr(e){var t=e[0],n=e[1],r=e.slice(4),a=oa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var E1={found:!1,width:512,height:512};function I1(e,t){!No&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=tt()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Vo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&cr[t]&&cr[t][e]){var o=cr[t][e];return r(Mr(o))}I1(e,t),r(A(A({},E1),{},{icon:P.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var mi=function(){},Fr=P.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:mi,measure:mi},Ut='FA "6.1.1"',S1=function(t){return Fr.mark("".concat(Ut," ").concat(t," begins")),function(){return Xo(t)}},Xo=function(t){Fr.mark("".concat(Ut," ").concat(t," ends")),Fr.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))},ga={begin:S1,end:Xo},yn=function(){};function pi(e){var t=e.getAttribute?e.getAttribute(mt):null;return typeof t=="string"}function T1(e){var t=e.getAttribute?e.getAttribute(la):null,n=e.getAttribute?e.getAttribute(ca):null;return t&&n}function P1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function M1(){if(P.autoReplaceSvg===!0)return _n.replace;var e=_n[P.autoReplaceSvg];return e||_n.replace}function N1(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function F1(e){return Z.createElement(e)}function Zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?N1:F1:n;if(typeof e=="string")return Z.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Zo(o,{ceFn:r}))}),a}function L1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Zo(a),n)}),n.getAttribute(mt)===null&&P.keepOriginalSource){var r=Z.createComment(L1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ua(n).indexOf(P.replacementClass))return _n.replace(t);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return rn(s)}).join(`
`);n.setAttribute(mt,""),n.innerHTML=o}};function hi(e){e()}function Go(e,t){var n=typeof t=="function"?t:yn;if(e.length===0)n();else{var r=hi;P.mutateApproach===Ru&&(r=et.requestAnimationFrame||hi),r(function(){var a=M1(),i=ga.begin("mutate");e.map(a),i(),n()})}}var ba=!1;function Jo(){ba=!0}function Lr(){ba=!1}var Pn=null;function vi(e){if(!!oi&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?yn:t,r=e.nodeCallback,a=r===void 0?yn:r,i=e.pseudoElementsCallback,o=i===void 0?yn:i,s=e.observeMutationsRoot,l=s===void 0?Z:s;Pn=new oi(function(u){if(!ba){var d=tt();Lt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!pi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&pi(m.target)&&~Yu.indexOf(m.attributeName))if(m.attributeName==="class"&&T1(m.target)){var b=Xn(ua(m.target)),O=b.prefix,L=b.iconName;m.target.setAttribute(la,O||d),L&&m.target.setAttribute(ca,L)}else P1(m.target)&&a(m.target)})}}),We&&Pn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $1(){!Pn||Pn.disconnect()}function z1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function R1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Xn(ua(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=h1(a.prefix,e.innerText)||pa(a.prefix,Ir(e.innerText))),a}function D1(e){var t=Lt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function j1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=R1(e),r=n.iconName,a=n.prefix,i=n.rest,o=D1(e),s=Tr("parseNodeAttributes",{},e),l=t.styleParser?z1(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var H1=Oe.styles;function Qo(e){var t=P.autoReplaceSvg==="nest"?gi(e,{styleParser:!1}):gi(e);return~t.extra.classes.indexOf(Lo)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=Z.documentElement.classList,r=function(m){return n.add("".concat(si,"-").concat(m))},a=function(m){return n.remove("".concat(si,"-").concat(m))},i=P.autoFetchSvg?Object.keys(fa):Object.keys(H1),o=[".".concat(Lo,":not([").concat(mt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(mt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Lt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ga.begin("onTree"),u=s.reduce(function(d,m){try{var b=Qo(m);b&&d.push(b)}catch(O){No||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Go(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function B1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qo(e).then(function(n){n&&Go([n],t)})}function U1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Pr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Pr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var W1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,O=n.titleId,L=O===void 0?null:O,D=n.classes,M=D===void 0?[]:D,_=n.attributes,E=_===void 0?{}:_,N=n.styles,j=N===void 0?{}:N;if(!!t){var K=t.prefix,ne=t.iconName,me=t.icon;return Zn(A({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(b?E["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(L||nn()):(E["aria-hidden"]="true",E.focusable="false")),va({icons:{main:Mr(me),mask:l?Mr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:ne,transform:A(A({},Fe),a),symbol:o,title:b,maskId:d,titleId:L,extra:{attributes:E,styles:j,classes:M}})})}},Y1={mixout:function(){return{icon:U1(W1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=bi,n.nodeCallback=B1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Z:r,i=n.callback,o=i===void 0?function(){}:i;return bi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,L){Promise.all([Nr(a,s),d.iconName?Nr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var M=oa(D,2),_=M[0],E=M[1];O([n,va({icons:{main:_,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Vn(s);l.length>0&&(a.style=l);var u;return da(o)&&(u=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},K1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Zn({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(Kn(i)).join(" ")},children:o}]})}}}},V1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),O1({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(Kn(s))}})})}}}},q1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return Zn({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),di({content:n,transform:A(A({},Fe),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(P.familyPrefix,"-layers-text")].concat(Kn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(To){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,di({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},X1=new RegExp('"',"ug"),yi=[1105920,1112319];function Z1(e){var t=e.replace(X1,""),n=c1(t,0),r=n>=yi[0]&&n<=yi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ir(a?t[0]:t),isSecondary:r||a}}function _i(e,t){var n="".concat(zu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Lt(e.children),o=i.filter(function(ne){return ne.getAttribute(Er)===t})[0],s=et.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Bu),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sn[l[2].toLowerCase()]:Uu[u],O=Z1(m),L=O.value,D=O.isSecondary,M=l[0].startsWith("FontAwesome"),_=pa(b,L),E=_;if(M){var N=v1(L);N.iconName&&N.prefix&&(_=N.iconName,b=N.prefix)}if(_&&!D&&(!o||o.getAttribute(la)!==b||o.getAttribute(ca)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var j=j1(),K=j.extra;K.attributes[Er]=t,Nr(_,b).then(function(ne){var me=va(A(A({},j),{},{icons:{main:ne,mask:ha()},prefix:b,iconName:E,extra:K,watchable:!0})),Se=Z.createElement("svg");t==="::before"?e.insertBefore(Se,e.firstChild):e.appendChild(Se),Se.outerHTML=me.map(function(se){return rn(se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function G1(e){return Promise.all([_i(e,"::before"),_i(e,"::after")])}function J1(e){return e.parentNode!==document.head&&!~Du.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Er)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xi(e){if(!!We)return new Promise(function(t,n){var r=Lt(e.querySelectorAll("*")).filter(J1).map(G1),a=ga.begin("searchPseudoElements");Jo(),Promise.all(r).then(function(){a(),Lr(),t()}).catch(function(){a(),Lr(),n()})})}var Q1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Z:r;P.searchPseudoElements&&xi(a)}}},wi=!1,ed={mixout:function(){return{dom:{unwatch:function(){Jo(),wi=!0}}}},hooks:function(){return{bootstrap:function(){vi(Tr("mutationObserverCallbacks",{}))},noAuto:function(){$1()},watch:function(n){var r=n.observeMutationsRoot;wi?Lr():vi(Tr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ki=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},td={mixout:function(){return{parse:{transform:function(n){return ki(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ki(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},O.outer),children:[{tag:"g",attributes:A({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),O.path)}]}]}}}},fr={x:0,y:0,width:"100%",height:"100%"};function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nd(e){return e.tag==="g"?e.children:[e]}var rd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Xn(a.split(" ").map(function(o){return o.trim()})):ha();return i.prefix||(i.prefix=tt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,O=t1({transform:l,containerWidth:m,iconWidth:u}),L={tag:"rect",attributes:A(A({},fr),{},{fill:"white"})},D=d.children?{children:d.children.map(Ci)}:{},M={tag:"g",attributes:A({},O.inner),children:[Ci(A({tag:d.tag,attributes:A(A({},d.attributes),O.path)},D))]},_={tag:"g",attributes:A({},O.outer),children:[M]},E="mask-".concat(s||nn()),N="clip-".concat(s||nn()),j={tag:"mask",attributes:A(A({},fr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,_]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:nd(b)},j]};return r.push(K,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(E,")")},fr)}),{children:r,attributes:a}}}},ad={provides:function(t){var n=!1;et.matchMedia&&(n=et.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},id={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},od=[a1,Y1,K1,V1,q1,Q1,ed,td,rd,ad,id];y1(od,{mixoutsTo:be});be.noAuto;var es=be.config,it=be.library;be.dom;var Mn=be.parse;be.findIconDefinition;be.toHtml;var sd=be.icon;be.layer;var ld=be.text;be.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var cd={prefix:"fas",iconName:"angles-right",icon:[448,512,[187,"angle-double-right"],"f101","M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"]},fd={prefix:"fas",iconName:"bolt",icon:[384,512,[9889,"zap"],"f0e7","M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"]},ud={prefix:"fas",iconName:"cloud-arrow-up",icon:[640,512,[62338,"cloud-upload","cloud-upload-alt"],"f0ee","M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM223 263C213.7 272.4 213.7 287.6 223 296.1C232.4 306.3 247.6 306.3 256.1 296.1L296 257.9V392C296 405.3 306.7 416 320 416C333.3 416 344 405.3 344 392V257.9L383 296.1C392.4 306.3 407.6 306.3 416.1 296.1C426.3 287.6 426.3 272.4 416.1 263L336.1 183C327.6 173.7 312.4 173.7 303 183L223 263z"]},dd={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},md={prefix:"fas",iconName:"flask",icon:[448,512,[],"f0c3","M437.2 403.5L319.1 215L319.1 64h7.1c13.25 0 23.1-10.75 23.1-24l-.0002-16c0-13.25-10.75-24-23.1-24H120C106.8 0 96.01 10.75 96.01 24l-.0002 16c0 13.25 10.75 24 23.1 24h7.1L128 215l-117.2 188.5C-18.48 450.6 15.27 512 70.89 512h306.2C432.7 512 466.5 450.5 437.2 403.5zM137.1 320l48.15-77.63C189.8 237.3 191.9 230.8 191.9 224l.0651-160h63.99l-.06 160c0 6.875 2.25 13.25 5.875 18.38L309.9 320H137.1z"]},pd={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"]},hd={prefix:"fas",iconName:"hammer",icon:[576,512,[128296],"f6e3","M568.1 196.3l-22.62-22.62c-4.533-4.533-10.56-7.029-16.97-7.029s-12.44 2.496-16.97 7.029l-5.654 5.656l-20.12-20.12c4.596-23.46-2.652-47.9-19.47-64.73l-45.25-45.25C390.2 17.47 347.1 0 303.1 0C258.2 0 216 17.47 184.3 49.21L176.5 57.05L272.5 105.1v13.81c0 18.95 7.688 37.5 21.09 50.91l49.16 49.14c13.44 13.45 31.39 20.86 50.54 20.86c4.758 0 9.512-.4648 14.18-1.387l20.12 20.12l-5.654 5.654c-9.357 9.357-9.357 24.58-.002 33.94l22.62 22.62c4.535 4.533 10.56 7.031 16.97 7.031s12.44-2.498 16.97-7.031l90.53-90.5C578.3 220.8 578.3 205.6 568.1 196.3zM270.9 192.4c-3.846-3.846-7.197-8.113-10.37-12.49l-239.5 209.2c-28.12 28.12-28.16 73.72-.0371 101.8C35.12 505 53.56 512 71.1 512s36.84-7.031 50.91-21.09l209.1-239.4c-4.141-3.061-8.184-6.289-11.89-9.996L270.9 192.4z"]},vd={prefix:"fas",iconName:"maximize",icon:[448,512,["expand-arrows-alt"],"f31e","M447.1 319.1v135.1c0 13.26-10.75 23.1-23.1 23.1h-135.1c-12.94 0-24.61-7.781-29.56-19.75c-4.906-11.1-2.203-25.72 6.937-34.87l30.06-30.06L224 323.9l-71.43 71.44l30.06 30.06c9.156 9.156 11.91 22.91 6.937 34.87C184.6 472.2 172.9 479.1 160 479.1H24c-13.25 0-23.1-10.74-23.1-23.1v-135.1c0-12.94 7.781-24.61 19.75-29.56C23.72 288.8 27.88 288 32 288c8.312 0 16.5 3.242 22.63 9.367l30.06 30.06l71.44-71.44L84.69 184.6L54.63 214.6c-9.156 9.156-22.91 11.91-34.87 6.937C7.798 216.6 .0013 204.9 .0013 191.1v-135.1c0-13.26 10.75-23.1 23.1-23.1h135.1c12.94 0 24.61 7.781 29.56 19.75C191.2 55.72 191.1 59.87 191.1 63.1c0 8.312-3.237 16.5-9.362 22.63L152.6 116.7l71.44 71.44l71.43-71.44l-30.06-30.06c-9.156-9.156-11.91-22.91-6.937-34.87c4.937-11.95 16.62-19.75 29.56-19.75h135.1c13.26 0 23.1 10.75 23.1 23.1v135.1c0 12.94-7.781 24.61-19.75 29.56c-11.1 4.906-25.72 2.203-34.87-6.937l-30.06-30.06l-71.43 71.43l71.44 71.44l30.06-30.06c9.156-9.156 22.91-11.91 34.87-6.937C440.2 295.4 447.1 307.1 447.1 319.1z"]};function Ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ai(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nn(e){return Nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nn(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function bd(e,t){if(e==null)return{};var n=gd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function $r(e){return yd(e)||_d(e)||xd(e)||wd()}function yd(e){if(Array.isArray(e))return zr(e)}function _d(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xd(e,t){if(!!e){if(typeof e=="string")return zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zr(e,t)}}function zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ts={exports:{}};(function(e){(function(t){var n=function(_,E,N){if(!u(E)||m(E)||b(E)||O(E)||l(E))return E;var j,K=0,ne=0;if(d(E))for(j=[],ne=E.length;K<ne;K++)j.push(n(_,E[K],N));else{j={};for(var me in E)Object.prototype.hasOwnProperty.call(E,me)&&(j[_(me,N)]=n(_,E[me],N))}return j},r=function(_,E){E=E||{};var N=E.separator||"_",j=E.split||/(?=[A-Z])/;return _.split(j).join(N)},a=function(_){return L(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(E,N){return N?N.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var E=a(_);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(_,E){return r(_,E).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},u=function(_){return _===Object(_)},d=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},b=function(_){return s.call(_)=="[object RegExp]"},O=function(_){return s.call(_)=="[object Boolean]"},L=function(_){return _=_-0,_===_},D=function(_,E){var N=E&&"process"in E?E.process:E;return typeof N!="function"?_:function(j,K){return N(j,_,K)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,E){return n(D(a,E),_)},decamelizeKeys:function(_,E){return n(D(o,E),_,E)},pascalizeKeys:function(_,E){return n(D(i,E),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(kd)})(ts);var Cd=ts.exports,Ad=["class","style"];function Od(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Cd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ed(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ya(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Ed(d);break;case"style":l.style=Od(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=bd(n,Ad);return xo(e.tag,Ce(Ce(Ce({},t),{},{class:a.class,style:Ce(Ce({},a.style),o)},a.attrs),s),r)}var ns=!1;try{ns=!0}catch{}function Id(){if(!ns&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Zt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function Sd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Oi(e){if(e&&Nn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Mn.icon)return Mn.icon(e);if(e===null)return null;if(Nn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Td=_e({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ye(function(){return Oi(t.icon)}),i=ye(function(){return Zt("classes",Sd(t))}),o=ye(function(){return Zt("transform",typeof t.transform=="string"?Mn.transform(t.transform):t.transform)}),s=ye(function(){return Zt("mask",Oi(t.mask))}),l=ye(function(){return sd(a.value,Ce(Ce(Ce(Ce({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});hn(l,function(d){if(!d)return Id("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ye(function(){return l.value?ya(l.value.abstract[0],{},r):null});return function(){return u.value}}});_e({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=es.familyPrefix,i=ye(function(){return["".concat(a,"-layers")].concat($r(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return xo("div",{class:i.value},r.default?r.default():[])}}});_e({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=es.familyPrefix,i=ye(function(){return Zt("classes",[].concat($r(t.counter?["".concat(a,"-layers-counter")]:[]),$r(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ye(function(){return Zt("transform",typeof t.transform=="string"?Mn.transform(t.transform):t.transform)}),s=ye(function(){var u=ld(t.value.toString(),Ce(Ce({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ye(function(){return ya(s.value,{},r)});return function(){return l.value}}});it.add(dd);it.add(pd);it.add(cd);it.add(hd);it.add(md);it.add(ud);it.add(vd);it.add(fd);Ic(Ou).component("font-awesome-icon",Td).mount("#app");
