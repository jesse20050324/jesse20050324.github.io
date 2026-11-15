(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const m of s)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function h(s){const m={};return s.integrity&&(m.integrity=s.integrity),s.referrerPolicy&&(m.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?m.credentials="include":s.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function f(s){if(s.ep)return;s.ep=!0;const m=h(s);fetch(s.href,m)}})();var cf={exports:{}},Qr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function qv(){if(py)return Qr;py=1;var a=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function h(f,s,m){var v=null;if(m!==void 0&&(v=""+m),s.key!==void 0&&(v=""+s.key),"key"in s){m={};for(var p in s)p!=="key"&&(m[p]=s[p])}else m=s;return s=m.ref,{$$typeof:a,type:f,key:v,ref:s!==void 0?s:null,props:m}}return Qr.Fragment=c,Qr.jsx=h,Qr.jsxs=h,Qr}var xy;function jv(){return xy||(xy=1,cf.exports=qv()),cf.exports}var U=jv(),of={exports:{}},Cn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function Bv(){if(Ey)return Cn;Ey=1;var a=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),v=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),z=Symbol.iterator;function G(M){return M===null||typeof M!="object"?null:(M=z&&M[z]||M["@@iterator"],typeof M=="function"?M:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,Tn={};function pn(M,K,un){this.props=M,this.context=K,this.refs=Tn,this.updater=un||P}pn.prototype.isReactComponent={},pn.prototype.setState=function(M,K){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,K,"setState")},pn.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function on(){}on.prototype=pn.prototype;function sn(M,K,un){this.props=M,this.context=K,this.refs=Tn,this.updater=un||P}var Mn=sn.prototype=new on;Mn.constructor=sn,W(Mn,pn.prototype),Mn.isPureReactComponent=!0;var Jn=Array.isArray;function I(){}var mn={H:null,A:null,T:null,S:null},Dn=Object.prototype.hasOwnProperty;function Bn(M,K,un){var an=un.ref;return{$$typeof:a,type:M,key:K,ref:an!==void 0?an:null,props:un}}function en(M,K){return Bn(M.type,K,M.props)}function tn(M){return typeof M=="object"&&M!==null&&M.$$typeof===a}function zn(M){var K={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(un){return K[un]})}var Nn=/\/+/g;function Qn(M,K){return typeof M=="object"&&M!==null&&M.key!=null?zn(""+M.key):K.toString(36)}function q(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(I,I):(M.status="pending",M.then(function(K){M.status==="pending"&&(M.status="fulfilled",M.value=K)},function(K){M.status==="pending"&&(M.status="rejected",M.reason=K)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function hn(M,K,un,an,_n){var wn=typeof M;(wn==="undefined"||wn==="boolean")&&(M=null);var vn=!1;if(M===null)vn=!0;else switch(wn){case"bigint":case"string":case"number":vn=!0;break;case"object":switch(M.$$typeof){case a:case c:vn=!0;break;case x:return vn=M._init,hn(vn(M._payload),K,un,an,_n)}}if(vn)return _n=_n(M),vn=an===""?"."+Qn(M,0):an,Jn(_n)?(un="",vn!=null&&(un=vn.replace(Nn,"$&/")+"/"),hn(_n,K,un,"",function(Se){return Se})):_n!=null&&(tn(_n)&&(_n=en(_n,un+(_n.key==null||M&&M.key===_n.key?"":(""+_n.key).replace(Nn,"$&/")+"/")+vn)),K.push(_n)),1;vn=0;var rn=an===""?".":an+":";if(Jn(M))for(var En=0;En<M.length;En++)an=M[En],wn=rn+Qn(an,En),vn+=hn(an,K,un,wn,_n);else if(En=G(M),typeof En=="function")for(M=En.call(M),En=0;!(an=M.next()).done;)an=an.value,wn=rn+Qn(an,En++),vn+=hn(an,K,un,wn,_n);else if(wn==="object"){if(typeof M.then=="function")return hn(q(M),K,un,an,_n);throw K=String(M),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return vn}function yn(M,K,un){if(M==null)return M;var an=[],_n=0;return hn(M,an,"","",function(wn){return K.call(un,wn,_n++)}),an}function $(M){if(M._status===-1){var K=M._result,un=K();un.then(function(an){(M._status===0||M._status===-1)&&(M._status=1,M._result=an,un.status===void 0&&(un.status="fulfilled",un.value=an))},function(an){(M._status===0||M._status===-1)&&(M._status=2,M._result=an,un.status===void 0&&(un.status="rejected",un.reason=an))}),M._status===-1&&(M._status=0,M._result=un)}if(M._status===1)return M._result.default;throw M._result}var bn=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function qn(M){var K=mn.T,un={};un.types=K!==null?K.types:null,mn.T=un;try{var an=M(),_n=mn.S;_n!==null&&_n(un,an),typeof an=="object"&&an!==null&&typeof an.then=="function"&&an.then(I,bn)}catch(wn){bn(wn)}finally{K!==null&&un.types!==null&&(K.types=un.types),mn.T=K}}function ce(M){var K=mn.T;if(K!==null){var un=K.types;un===null?K.types=[M]:un.indexOf(M)===-1&&un.push(M)}else qn(ce.bind(null,M))}var le={map:yn,forEach:function(M,K,un){yn(M,function(){K.apply(this,arguments)},un)},count:function(M){var K=0;return yn(M,function(){K++}),K},toArray:function(M){return yn(M,function(K){return K})||[]},only:function(M){if(!tn(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Cn.Activity=g,Cn.Children=le,Cn.Component=pn,Cn.Fragment=h,Cn.Profiler=s,Cn.PureComponent=sn,Cn.StrictMode=f,Cn.Suspense=b,Cn.ViewTransition=S,Cn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn,Cn.__COMPILER_RUNTIME={__proto__:null,c:function(M){return mn.H.useMemoCache(M)}},Cn.addTransitionType=ce,Cn.cache=function(M){return function(){return M.apply(null,arguments)}},Cn.cacheSignal=function(){return null},Cn.cloneElement=function(M,K,un){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var an=W({},M.props),_n=M.key;if(K!=null)for(wn in K.key!==void 0&&(_n=""+K.key),K)!Dn.call(K,wn)||wn==="key"||wn==="__self"||wn==="__source"||wn==="ref"&&K.ref===void 0||(an[wn]=K[wn]);var wn=arguments.length-2;if(wn===1)an.children=un;else if(1<wn){for(var vn=Array(wn),rn=0;rn<wn;rn++)vn[rn]=arguments[rn+2];an.children=vn}return Bn(M.type,_n,an)},Cn.createContext=function(M){return M={$$typeof:v,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:m,_context:M},M},Cn.createElement=function(M,K,un){var an,_n={},wn=null;if(K!=null)for(an in K.key!==void 0&&(wn=""+K.key),K)Dn.call(K,an)&&an!=="key"&&an!=="__self"&&an!=="__source"&&(_n[an]=K[an]);var vn=arguments.length-2;if(vn===1)_n.children=un;else if(1<vn){for(var rn=Array(vn),En=0;En<vn;En++)rn[En]=arguments[En+2];_n.children=rn}if(M&&M.defaultProps)for(an in vn=M.defaultProps,vn)_n[an]===void 0&&(_n[an]=vn[an]);return Bn(M,wn,_n)},Cn.createRef=function(){return{current:null}},Cn.forwardRef=function(M){return{$$typeof:p,render:M}},Cn.isValidElement=tn,Cn.lazy=function(M){return{$$typeof:x,_payload:{_status:-1,_result:M},_init:$}},Cn.memo=function(M,K){return{$$typeof:E,type:M,compare:K===void 0?null:K}},Cn.startTransition=qn,Cn.unstable_useCacheRefresh=function(){return mn.H.useCacheRefresh()},Cn.use=function(M){return mn.H.use(M)},Cn.useActionState=function(M,K,un){return mn.H.useActionState(M,K,un)},Cn.useCallback=function(M,K){return mn.H.useCallback(M,K)},Cn.useContext=function(M){return mn.H.useContext(M)},Cn.useDebugValue=function(){},Cn.useDeferredValue=function(M,K){return mn.H.useDeferredValue(M,K)},Cn.useEffect=function(M,K){return mn.H.useEffect(M,K)},Cn.useEffectEvent=function(M){return mn.H.useEffectEvent(M)},Cn.useId=function(){return mn.H.useId()},Cn.useImperativeHandle=function(M,K,un){return mn.H.useImperativeHandle(M,K,un)},Cn.useInsertionEffect=function(M,K){return mn.H.useInsertionEffect(M,K)},Cn.useLayoutEffect=function(M,K){return mn.H.useLayoutEffect(M,K)},Cn.useMemo=function(M,K){return mn.H.useMemo(M,K)},Cn.useOptimistic=function(M,K){return mn.H.useOptimistic(M,K)},Cn.useReducer=function(M,K,un){return mn.H.useReducer(M,K,un)},Cn.useRef=function(M){return mn.H.useRef(M)},Cn.useState=function(M){return mn.H.useState(M)},Cn.useSyncExternalStore=function(M,K,un){return mn.H.useSyncExternalStore(M,K,un)},Cn.useTransition=function(){return mn.H.useTransition()},Cn.version="19.3.0",Cn}var Sy;function Qf(){return Sy||(Sy=1,of.exports=Bv()),of.exports}var cn=Qf(),ff={exports:{}},Xr={},sf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function Yv(){return Ty||(Ty=1,(function(a){function c(q,hn){var yn=q.length;q.push(hn);n:for(;0<yn;){var $=yn-1>>>1,bn=q[$];if(0<s(bn,hn))q[$]=hn,q[yn]=bn,yn=$;else break n}}function h(q){return q.length===0?null:q[0]}function f(q){if(q.length===0)return null;var hn=q[0],yn=q.pop();if(yn!==hn){q[0]=yn;n:for(var $=0,bn=q.length,qn=bn>>>1;$<qn;){var ce=2*($+1)-1,le=q[ce],M=ce+1,K=q[M];if(0>s(le,yn))M<bn&&0>s(K,le)?(q[$]=K,q[M]=yn,$=M):(q[$]=le,q[ce]=yn,$=ce);else if(M<bn&&0>s(K,yn))q[$]=K,q[M]=yn,$=M;else break n}}return hn}function s(q,hn){var yn=q.sortIndex-hn.sortIndex;return yn!==0?yn:q.id-hn.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var v=Date,p=v.now();a.unstable_now=function(){return v.now()-p}}var b=[],E=[],x=1,g=null,S=3,z=!1,G=!1,P=!1,W=!1,Tn=typeof setTimeout=="function"?setTimeout:null,pn=typeof clearTimeout=="function"?clearTimeout:null,on=typeof setImmediate<"u"?setImmediate:null;function sn(q){for(var hn=h(E);hn!==null;){if(hn.callback===null)f(E);else if(hn.startTime<=q)f(E),hn.sortIndex=hn.expirationTime,c(b,hn);else break;hn=h(E)}}function Mn(q){if(P=!1,sn(q),!G)if(h(b)!==null)G=!0,Jn||(Jn=!0,tn());else{var hn=h(E);hn!==null&&Qn(Mn,hn.startTime-q)}}var Jn=!1,I=-1,mn=5,Dn=-1;function Bn(){return W?!0:!(a.unstable_now()-Dn<mn)}function en(){if(W=!1,Jn){var q=a.unstable_now();Dn=q;var hn=!0;try{n:{G=!1,P&&(P=!1,pn(I),I=-1),z=!0;var yn=S;try{e:{for(sn(q),g=h(b);g!==null&&!(g.expirationTime>q&&Bn());){var $=g.callback;if(typeof $=="function"){g.callback=null,S=g.priorityLevel;var bn=$(g.expirationTime<=q);if(q=a.unstable_now(),typeof bn=="function"){g.callback=bn,sn(q),hn=!0;break e}g===h(b)&&f(b),sn(q)}else f(b);g=h(b)}if(g!==null)hn=!0;else{var qn=h(E);qn!==null&&Qn(Mn,qn.startTime-q),hn=!1}}break n}finally{g=null,S=yn,z=!1}hn=void 0}}finally{hn?tn():Jn=!1}}}var tn;if(typeof on=="function")tn=function(){on(en)};else if(typeof MessageChannel<"u"){var zn=new MessageChannel,Nn=zn.port2;zn.port1.onmessage=en,tn=function(){Nn.postMessage(null)}}else tn=function(){Tn(en,0)};function Qn(q,hn){I=Tn(function(){q(a.unstable_now())},hn)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(q){q.callback=null},a.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):mn=0<q?Math.floor(1e3/q):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(q){switch(S){case 1:case 2:case 3:var hn=3;break;default:hn=S}var yn=S;S=hn;try{return q()}finally{S=yn}},a.unstable_requestPaint=function(){W=!0},a.unstable_runWithPriority=function(q,hn){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var yn=S;S=q;try{return hn()}finally{S=yn}},a.unstable_scheduleCallback=function(q,hn,yn){var $=a.unstable_now();switch(typeof yn=="object"&&yn!==null?(yn=yn.delay,yn=typeof yn=="number"&&0<yn?$+yn:$):yn=$,q){case 1:var bn=-1;break;case 2:bn=250;break;case 5:bn=1073741823;break;case 4:bn=1e4;break;default:bn=5e3}return bn=yn+bn,q={id:x++,callback:hn,priorityLevel:q,startTime:yn,expirationTime:bn,sortIndex:-1},yn>$?(q.sortIndex=yn,c(E,q),h(b)===null&&q===h(E)&&(P?(pn(I),I=-1):P=!0,Qn(Mn,yn-$))):(q.sortIndex=bn,c(b,q),G||z||(G=!0,Jn||(Jn=!0,tn()))),q},a.unstable_shouldYield=Bn,a.unstable_wrapCallback=function(q){var hn=S;return function(){var yn=S;S=hn;try{return q.apply(this,arguments)}finally{S=yn}}}})(hf)),hf}var by;function Lv(){return by||(by=1,sf.exports=Yv()),sf.exports}var df={exports:{}},je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function Gv(){if(Ay)return je;Ay=1;var a=Qf();function c(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var f={d:{f:h,r:function(){throw Error(c(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},s=Symbol.for("react.portal"),m=Symbol.for("react.recoverable"),v=Symbol.for("react.optimistic_key");function p(x,g,S){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:z==null?null:z===v?v:""+z,children:x,containerInfo:g,implementation:S}}var b=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,je.browser=function(x){return{$$typeof:m,_reason:x}},je.createPortal=function(x,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return p(x,g,null,S)},je.flushSync=function(x){var g=b.T,S=f.p;try{if(b.T=null,f.p=2,x)return x()}finally{b.T=g,f.p=S,f.d.f()}},je.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,f.d.C(x,g))},je.prefetchDNS=function(x){typeof x=="string"&&f.d.D(x)},je.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var S=g.as,z=E(S,g.crossOrigin),G=typeof g.integrity=="string"?g.integrity:void 0,P=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?f.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:z,integrity:G,fetchPriority:P}):S==="script"&&f.d.X(x,{crossOrigin:z,integrity:G,fetchPriority:P,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},je.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=E(g.as,g.crossOrigin);f.d.M(x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&f.d.M(x)},je.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,z=E(S,g.crossOrigin);f.d.L(x,S,{crossOrigin:z,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},je.preloadModule=function(x,g){if(typeof x=="string")if(g){var S=E(g.as,g.crossOrigin);f.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else f.d.m(x)},je.requestFormReset=function(x){f.d.r(x)},je.unstable_batchedUpdates=function(x,g){return x(g)},je.useFormState=function(x,g,S){return b.H.useFormState(x,g,S)},je.useFormStatus=function(){return b.H.useHostTransitionStatus()},je.version="19.3.0",je}var My;function Qv(){if(My)return df.exports;My=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),df.exports=Gv(),df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy;function Xv(){if(Oy)return Xr;Oy=1;var a=Lv(),c=Qf(),h=Qv();function f(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function m(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function v(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function p(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function b(n){if(m(n)!==n)throw Error(f(188))}function E(n){var e=n.alternate;if(!e){if(e=m(n),e===null)throw Error(f(188));return e!==n?null:n}for(var t=n,l=e;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return b(i),n;if(r===l)return b(i),e;r=r.sibling}throw Error(f(188))}if(t.return!==l.return)t=i,l=r;else{for(var o=!1,y=i.child;y;){if(y===t){o=!0,t=i,l=r;break}if(y===l){o=!0,l=i,t=r;break}y=y.sibling}if(!o){for(y=r.child;y;){if(y===t){o=!0,t=r,l=i;break}if(y===l){o=!0,l=r,t=i;break}y=y.sibling}if(!o)throw Error(f(189))}}if(t.alternate!==l)throw Error(f(190))}if(t.tag!==3)throw Error(f(188));return t.stateNode.current===t?n:e}function x(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=x(n),e!==null)return e;n=n.sibling}return null}function g(n,e,t,l,i,r){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,l,i,r)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&g(n.child,e,t,l,i,r))return!0;n=n.sibling}return!1}function S(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function z(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function G(n){var e=[null,null],t=S(n);return t===null||P(e,n,t.child,{foundSelf:!1}),e}function P(n,e,t,l){for(;t!==null;){if(t===e)l.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(l.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&P(n,e,t.child,l))return!0;t=t.sibling}return!1}function W(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(f(559))}}var Tn=null,pn=null;function on(n,e,t){return n===t?!0:n===e?(Tn=n,!0):!1}function sn(n,e,t){return n===t?(pn=n,!1):n===e?(pn!==null&&(Tn=n),!0):!1}function Mn(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function Jn(n,e,t){for(var l=0,i=n;i;i=t(i))l++;i=0;for(var r=e;r;r=t(r))i++;for(;0<l-i;)n=t(n),l--;for(;0<i-l;)e=t(e),i--;for(;l--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var I=Object.assign,mn=Symbol.for("react.element"),Dn=Symbol.for("react.transitional.element"),Bn=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),tn=Symbol.for("react.strict_mode"),zn=Symbol.for("react.profiler"),Nn=Symbol.for("react.consumer"),Qn=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),hn=Symbol.for("react.suspense"),yn=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),qn=Symbol.for("react.activity"),ce=Symbol.for("react.legacy_hidden"),le=Symbol.for("react.memo_cache_sentinel"),M=Symbol.for("react.view_transition"),K=Symbol.for("react.recoverable"),un=Symbol.iterator;function an(n){return n===null||typeof n!="object"?null:(n=un&&n[un]||n["@@iterator"],typeof n=="function"?n:null)}var _n=Symbol.for("react.client.reference");function wn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===_n?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case en:return"Fragment";case zn:return"Profiler";case tn:return"StrictMode";case hn:return"Suspense";case yn:return"SuspenseList";case qn:return"Activity";case M:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case Bn:return"Portal";case Qn:return n.displayName||"Context";case Nn:return(n._context.displayName||"Context")+".Consumer";case q:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return e=n.displayName||null,e!==null?e:wn(n.type)||"Memo";case bn:e=n._payload,n=n._init;try{return wn(n(e))}catch{}}return null}var vn=Array.isArray,rn=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,En=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se={pending:!1,data:null,method:null,action:null},Me=[],Ge=-1;function Ce(n){return{current:n}}function Kn(n){0>Ge||(n.current=Me[Ge],Me[Ge]=null,Ge--)}function Zn(n,e){Ge++,Me[Ge]=n.current,n.current=e}var me=Ce(null),ge=Ce(null),Be=Ce(null),pt=Ce(null);function xt(n,e){switch(Zn(Be,e),Zn(ge,n),Zn(me,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Nm(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Nm(e),n=_m(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kn(me),Zn(me,n)}function Te(){Kn(me),Kn(ge),Kn(Be)}function Nt(n){var e=n.memoizedState;e!==null&&(Li._currentValue=e.memoizedState,Zn(pt,n)),e=me.current;var t=_m(e,n.type);e!==t&&(Zn(ge,n),Zn(me,t))}function nn(n){ge.current===n&&(Kn(me),Kn(ge)),pt.current===n&&(Kn(pt),Li._currentValue=Se)}var Fn,ie;function u(n){if(Fn===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Fn=e&&e[1]||"",ie=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fn+n+ie}var O=!1;function Y(n,e){if(!n||O)return"";O=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(ln){var N=ln}Reflect.construct(n,[],X)}else{try{X.call()}catch(ln){N=ln}X=!1;try{var D=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),X=!0,new n}finally{X&&(D!==void 0?Object.defineProperty(n.prototype,"props",D):delete n.prototype.props)}}}else{try{throw Error()}catch(ln){N=ln}(X=n())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(ln){if(ln&&N&&typeof ln.stack=="string")return[ln.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],y=r[1];if(o&&y){var T=o.split(`
`),R=y.split(`
`);for(i=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(l===T.length||i===R.length)for(l=T.length-1,i=R.length-1;1<=l&&0<=i&&T[l]!==R[i];)i--;for(;1<=l&&0<=i;l--,i--)if(T[l]!==R[i]){if(l!==1||i!==1)do if(l--,i--,0>i||T[l]!==R[i]){var H=`
`+T[l].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=l&&0<=i);break}}}finally{O=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?u(t):""}function V(n,e){switch(n.tag){case 26:case 27:case 5:return u(n.type);case 16:return u("Lazy");case 13:return n.child!==e&&e!==null?u("Suspense Fallback"):u("Suspense");case 19:return u("SuspenseList");case 0:case 15:return Y(n.type,!1);case 11:return Y(n.type.render,!1);case 1:return Y(n.type,!0);case 31:return u("Activity");case 30:return u("ViewTransition");default:return""}}function B(n){try{var e="",t=null;do e+=V(n,t),t=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var d=Object.prototype.hasOwnProperty,w=a.unstable_scheduleCallback,j=a.unstable_cancelCallback,F=a.unstable_shouldYield,J=a.unstable_requestPaint,Z=a.unstable_now,Q=a.unstable_getCurrentPriorityLevel,k=a.unstable_ImmediatePriority,dn=a.unstable_UserBlockingPriority,Sn=a.unstable_NormalPriority,An=a.unstable_LowPriority,Rn=a.unstable_IdlePriority,jn=a.log,_t=a.unstable_setDisableYieldValue,Et=null,be=null;function ll(n){if(typeof jn=="function"&&_t(n),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Et,n)}catch{}}var Pe=Math.clz32?Math.clz32:J0,F0=Math.log,I0=Math.LN2;function J0(n){return n>>>=0,n===0?32:31-(F0(n)/I0|0)|0}var Jr=256,$r=262144,kr=4194304;function Dl(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Wr(n,e,t){var l=n.pendingLanes;if(l===0)return 0;var i=0,r=n.suspendedLanes,o=n.pingedLanes;n=n.warmLanes;var y=l&134217727;return y!==0?(l=y&~r,l!==0?i=Dl(l):(o&=y,o!==0?i=Dl(o):t||(t=y&~n,t!==0&&(i=Dl(t))))):(y=l&~r,y!==0?i=Dl(y):o!==0?i=Dl(o):t||(t=l&~n,t!==0&&(i=Dl(t)))),i===0?0:e!==0&&e!==i&&(e&r)===0&&(r=i&-i,t=e&-e,r>=t||r===32&&(t&4194048)!==0)?e:i}function $i(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Pf(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var l=31-Pe(t),i=1<<l;e|=n[l],t&=~i}return e}function $0(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(){var n=kr;return kr<<=1,(kr&62914560)===0&&(kr=4194304),n}function wa(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ki(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function k0(n,e,t,l,i,r){var o=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var y=n.entanglements,T=n.expirationTimes,R=n.hiddenUpdates;for(t=o&~t;0<t;){var H=31-Pe(t),X=1<<H;y[H]=0,T[H]=-1;var N=R[H];if(N!==null)for(R[H]=null,H=0;H<N.length;H++){var D=N[H];D!==null&&(D.lane&=-536870913)}t&=~X}l!==0&&es(n,l,0),r!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=r&~(o&~e))}function es(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-Pe(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function ts(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var l=31-Pe(t),i=1<<l;i&e|n[l]&e&&(n[l]|=e),t&=~i}}function ls(n,e){var t=e&-e;return t=(t&42)!==0?1:Ha(t),(t&(n.suspendedLanes|e))!==0?0:t}function Ha(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ua(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function is(){var n=En.p;return n!==0?n:(n=window.event,n===void 0?32:sy(n.type))}function rs(n,e){var t=En.p;try{return En.p=n,e()}finally{En.p=t}}var Gt=Math.random().toString(36).slice(2),De="__reactFiber$"+Gt,Fe="__reactProps$"+Gt,ni="__reactContainer$"+Gt,us="__reactEvents$"+Gt,W0="__reactListeners$"+Gt,P0="__reactHandles$"+Gt,as="__reactResources$"+Gt,Wi="__reactMarker$"+Gt,Pr="__reactLoad$"+Gt;function nu(n){delete n[De],delete n[Fe],delete n[W0],delete n[P0]}function zl(n){var e;if(e=n[De])return e;for(var t=n.parentNode;t;){if(e=t[ni]||t[De]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Km(n);n!==null;){if(t=n[De])return t;n=Km(n)}return e}n=t,t=n.parentNode}return null}function ei(n){if(n=n[De]||n[ni]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Pi(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(f(33))}function ti(n){var e=n[as];return e||(e=n[as]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Oe(n){n[Wi]=!0}function cs(n){n[Pr]=void 0}var os=new Set,fs={};function wl(n,e){li(n,e),li(n+"Capture",e)}function li(n,e){for(fs[n]=e,n=0;n<e.length;n++)os.add(e[n])}var ng=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ss={},hs={};function eg(n){return d.call(hs,n)?!0:d.call(ss,n)?!1:ng.test(n)?hs[n]=!0:(ss[n]=!0,!1)}var $n=!1;function ds(){var n=$n;return $n=!1,n}function eu(n,e,t){if(eg(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function tu(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Qt(n,e,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,l)}}function nt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ms(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tg(n,e,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,r=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){t=""+o,r.call(this,o)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function qa(n){if(!n._valueTracker){var e=ms(n)?"checked":"value";n._valueTracker=tg(n,e,""+n[e])}}function ys(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return n&&(l=ms(n)?n.checked?"true":"false":n.value),n=l,n!==t?(e.setValue(n),!0):!1}var lg=/[\n"\\]/g;function ct(n){return n.replace(lg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ja(n,e,t,l,i,r,o,y){n.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.type=o:n.removeAttribute("type"),e!=null?o==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+nt(e)):n.value!==""+nt(e)&&(n.value=""+nt(e)):o!=="submit"&&o!=="reset"||n.removeAttribute("value"),e!=null?o==="number"&&n.value==e?Ba(n,nt(n.value)):Ba(n,nt(e)):t!=null?Ba(n,nt(t)):l!=null&&n.removeAttribute("value"),i==null&&r!=null&&(n.defaultChecked=!!r),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?n.name=""+nt(y):n.removeAttribute("name")}function gs(n,e,t,l,i,r,o,y){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),e!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){qa(n);return}t=t!=null?""+nt(t):"",e=e!=null?""+nt(e):t,y||e===n.value||(n.value=e),n.defaultValue=e}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=y?n.checked:!!l,n.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(n.name=o),qa(n)}function Ba(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function ii(n,e,t,l){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&l&&(n[t].defaultSelected=!0)}else{for(t=""+nt(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,l&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function vs(n,e,t){if(e!=null&&(e=""+nt(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+nt(t):""}function ps(n,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(f(92));if(vn(l)){if(1<l.length)throw Error(f(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=nt(e),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),qa(n)}function ri(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ig=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xs(n,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,t):typeof t!="number"||t===0||ig.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Es(n,e,t){if(e!=null&&typeof e!="object")throw Error(f(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="",$n=!0);for(var i in e)l=e[i],e.hasOwnProperty(i)&&t[i]!==l&&(xs(n,i,l),$n=!0)}else for(var r in e)e.hasOwnProperty(r)&&xs(n,r,e[r])}function Ya(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ug=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lu(n){return ug.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Rt(){}var La=null;function Ga(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ui=null,ai=null;function Ss(n){var e=ei(n);if(e&&(n=e.stateNode)){var t=n[Fe]||null;n:switch(n=e.stateNode,e.type){case"input":if(ja(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ct(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==n&&l.form===n.form){var i=l[Fe]||null;if(!i)throw Error(f(90));ja(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===n.form&&ys(l)}break n;case"textarea":vs(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&ii(n,!!t.multiple,e,!1)}}}var Qa=!1;function Ts(n,e,t){if(Qa)return n(e,t);Qa=!0;try{var l=n(e);return l}finally{if(Qa=!1,(ui!==null||ai!==null)&&(la(),ui&&(e=ui,n=ai,ai=ui=null,Ss(e),n)))for(e=0;e<n.length;e++)Ss(n[e])}}function nr(n,e){var t=n.stateNode;if(t===null)return null;var l=t[Fe]||null;if(l===null)return null;t=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(f(231,e,typeof t));return t}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=!1;if(Xt)try{var er={};Object.defineProperty(er,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Xa=!1}var il=null,Va=null,iu=null;function bs(){if(iu)return iu;var n,e=Va,t=e.length,l,i="value"in il?il.value:il.textContent,r=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(l=1;l<=o&&e[t-l]===i[r-l];l++);return iu=i.slice(n,1<l?1-l:void 0)}function ru(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function uu(){return!0}function As(){return!1}function Qe(n){function e(t,l,i,r,o){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var y in n)n.hasOwnProperty(y)&&(t=n[y],this[y]=t?t(r):r[y]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?uu:As,this.isPropagationStopped=As,this}return I(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=Qe(rl),tr=I({},rl,{view:0,detail:0}),ag=Qe(tr),Ka,Za,lr,cu=I({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==lr&&(lr&&n.type==="mousemove"?(Ka=n.screenX-lr.screenX,Za=n.screenY-lr.screenY):Za=Ka=0,lr=n),Ka)},movementY:function(n){return"movementY"in n?n.movementY:Za}}),Ms=Qe(cu),cg=I({},cu,{dataTransfer:0}),og=Qe(cg),fg=I({},tr,{relatedTarget:0}),Fa=Qe(fg),sg=I({},rl,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=Qe(sg),dg=I({},rl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),mg=Qe(dg),yg=I({},rl,{data:0}),Os=Qe(yg),gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xg(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=pg[n])?!!e[n]:!1}function Ia(){return xg}var Eg=I({},tr,{key:function(n){if(n.key){var e=gg[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ru(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?vg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(n){return n.type==="keypress"?ru(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ru(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Sg=Qe(Eg),Tg=I({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ns=Qe(Tg),bg=I({},rl,{submitter:0}),Ag=Qe(bg),Mg=I({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),Og=Qe(Mg),Ng=I({},rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=Qe(Ng),Rg=I({},cu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=Qe(Rg),Dg=I({},rl,{newState:0,oldState:0,source:0}),zg=Qe(Dg),wg=[9,13,27,32],Ja=Xt&&"CompositionEvent"in window,ir=null;Xt&&"documentMode"in document&&(ir=document.documentMode);var Hg=Xt&&"TextEvent"in window&&!ir,_s=Xt&&(!Ja||ir&&8<ir&&11>=ir),Rs=" ",Cs=!1;function Ds(n,e){switch(n){case"keyup":return wg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ci=!1;function Ug(n,e){switch(n){case"compositionend":return zs(e);case"keypress":return e.which!==32?null:(Cs=!0,Rs);case"textInput":return n=e.data,n===Rs&&Cs?null:n;default:return null}}function qg(n,e){if(ci)return n==="compositionend"||!Ja&&Ds(n,e)?(n=bs(),iu=Va=il=null,ci=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _s&&e.locale!=="ko"?null:e.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ws(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!jg[n.type]:e==="textarea"}function Hs(n,e,t,l){ui?ai?ai.push(l):ai=[l]:ui=l,e=oa(e,"onChange"),0<e.length&&(t=new au("onChange","change",null,t,l),n.push({event:t,listeners:e}))}var rr=null,ur=null;function Bg(n){Sm(n,0)}function ou(n){var e=Pi(n);if(ys(e))return n}function Us(n,e){if(n==="change")return e}var qs=!1;if(Xt){var $a;if(Xt){var ka="oninput"in document;if(!ka){var js=document.createElement("div");js.setAttribute("oninput","return;"),ka=typeof js.oninput=="function"}$a=ka}else $a=!1;qs=$a&&(!document.documentMode||9<document.documentMode)}function Bs(){rr&&(rr.detachEvent("onpropertychange",Ys),ur=rr=null)}function Ys(n){if(n.propertyName==="value"&&ou(ur)){var e=[];Hs(e,ur,n,Ga(n)),Ts(Bg,e)}}function Yg(n,e,t){n==="focusin"?(Bs(),rr=e,ur=t,rr.attachEvent("onpropertychange",Ys)):n==="focusout"&&Bs()}function Lg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ou(ur)}function Gg(n,e){if(n==="click")return ou(e)}function Qg(n,e){if(n==="input"||n==="change")return ou(e)}function Xg(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var et=typeof Object.is=="function"?Object.is:Xg;function ar(n,e){if(et(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!d.call(e,i)||!et(n[i],e[i]))return!1}return!0}function Wa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ls(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gs(n,e){var t=Ls(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=e&&l>=e)return{node:t,offset:e-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Ls(t)}}function Qs(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qs(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Xs(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Wa(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Wa(n.document)}return e}function Pa(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Vg=Xt&&"documentMode"in document&&11>=document.documentMode,oi=null,nc=null,cr=null,ec=!1;function Vs(n,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ec||oi==null||oi!==Wa(l)||(l=oi,"selectionStart"in l&&Pa(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cr&&ar(cr,l)||(cr=l,l=oa(nc,"onSelect"),0<l.length&&(e=new au("onSelect","select",null,e,t),n.push({event:e,listeners:l}),e.target=oi)))}function Hl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var fi={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionrun:Hl("Transition","TransitionRun"),transitionstart:Hl("Transition","TransitionStart"),transitioncancel:Hl("Transition","TransitionCancel"),transitionend:Hl("Transition","TransitionEnd")},tc={},Ks={};Xt&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Ul(n){if(tc[n])return tc[n];if(!fi[n])return n;var e=fi[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ks)return tc[n]=e[t];return n}var Zs=Ul("animationend"),Fs=Ul("animationiteration"),Is=Ul("animationstart"),Kg=Ul("transitionrun"),Zg=Ul("transitionstart"),Fg=Ul("transitioncancel"),Js=Ul("transitionend"),$s=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function St(n,e){$s.set(n,e),wl(e,[n])}var Ig=0;function Vt(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=Mt.identifierPrefix;var t=Ig++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function ks(n){if(n==null||typeof n=="string")return n;var e=null,t=Ci;if(t!==null)for(var l=0;l<t.length;l++){var i=n[t[l]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??n.default}function Kt(n,e){return n=ks(n),e=ks(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var fu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ot=[],si=0,ic=0;function su(){for(var n=si,e=ic=si=0;e<n;){var t=ot[e];ot[e++]=null;var l=ot[e];ot[e++]=null;var i=ot[e];ot[e++]=null;var r=ot[e];if(ot[e++]=null,l!==null&&i!==null){var o=l.pending;o===null?i.next=i:(i.next=o.next,o.next=i),l.pending=i}r!==0&&Ws(t,i,r)}}function hu(n,e,t,l){ot[si++]=n,ot[si++]=e,ot[si++]=t,ot[si++]=l,ic|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function rc(n,e,t,l){return hu(n,e,t,l),du(n)}function ql(n,e){return hu(n,null,null,e),du(n)}function Ws(n,e,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var i=!1,r=n.return;r!==null;)r.childLanes|=t,l=r.alternate,l!==null&&(l.childLanes|=t),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(i=!0)),n=r,r=r.return;return n.tag===3?(r=n.stateNode,i&&e!==null&&(i=31-Pe(t),n=r.hiddenUpdates,l=n[i],l===null?n[i]=[e]:l.push(e),e.lane=t|536870912),r):null}function du(n){if(50<Cr)throw Cr=0,ta=null,Error(f(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var hi={};function Jg(n,e,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(n,e,t,l){return new Jg(n,e,t,l)}function uc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zt(n,e){var t=n.alternate;return t===null?(t=Ie(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Ps(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function mu(n,e,t,l,i,r){var o=0;if(l=n,typeof l=="function")uc(l)&&(o=1);else if(typeof l=="string")o=bv(n,t,me.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(l){case qn:return n=Ie(31,t,e,i),n.elementType=qn,n.lanes=r,n;case en:return jl(t.children,i,r,e);case tn:o=8,i|=24;break;case zn:return n=Ie(12,t,e,i|2),n.elementType=zn,n.lanes=r,n;case hn:return n=Ie(13,t,e,i),n.elementType=hn,n.lanes=r,n;case yn:return n=Ie(19,t,e,i),n.elementType=yn,n.lanes=r,n;case ce:case M:return n=i|32,n=Ie(30,t,e,n),n.elementType=M,n.lanes=r,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Qn:o=10;break n;case Nn:o=9;break n;case q:o=11;break n;case $:o=14;break n;case bn:o=16,l=null;break n}o=29,t=Error(f(130,n===null?"null":typeof n,"")),l=null}return e=Ie(o,t,e,i),e.elementType=n,e.type=l,e.lanes=r,e}function jl(n,e,t,l){return n=Ie(7,n,l,e),n.lanes=t,n}function ac(n,e,t){return n=Ie(6,n,null,e),n.lanes=t,n}function nh(n){var e=Ie(18,null,null,0);return e.stateNode=n,e}function cc(n,e,t){return e=Ie(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var eh=new WeakMap;function ft(n,e){if(typeof n=="object"&&n!==null){var t=eh.get(n);return t!==void 0?t:(e={value:n,source:e,stack:B(e)},eh.set(n,e),e)}return{value:n,source:e,stack:B(e)}}var di=[],mi=0,yu=null,or=0,st=[],ht=0,ul=null,Ct=1,Dt="";function Ft(n,e){di[mi++]=or,di[mi++]=yu,yu=n,or=e}function th(n,e,t){st[ht++]=Ct,st[ht++]=Dt,st[ht++]=ul,ul=n;var l=Ct;n=Dt;var i=32-Pe(l)-1;l&=~(1<<i),t+=1;var r=32-Pe(e)+i;if(30<r){var o=i-i%5;r=(l&(1<<o)-1).toString(32),l>>=o,i-=o,Ct=1<<32-Pe(e)+i|t<<i|l,Dt=r+n}else Ct=1<<r|t<<i|l,Dt=n}function gu(n){n.return!==null&&(Ft(n,1),th(n,1,0))}function oc(n){for(;n===yu;)yu=di[--mi],di[mi]=null,or=di[--mi],di[mi]=null;for(;n===ul;)ul=st[--ht],st[ht]=null,Dt=st[--ht],st[ht]=null,Ct=st[--ht],st[ht]=null}function lh(n,e){st[ht++]=Ct,st[ht++]=Dt,st[ht++]=ul,Ct=e.id,Dt=e.overflow,ul=n}var Ne=null,ue=null,Yn=!1,al=null,dt=!1,fc=Error(f(519));function cl(n){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fr(ft(e,n)),fc}function ih(n){var e=n.stateNode,t=n.type,l=n.memoizedProps;switch(e[De]=n,e[Fe]=l,t){case"dialog":Gn("cancel",e),Gn("close",e);break;case"iframe":case"object":case"embed":Gn("load",e);break;case"video":case"audio":for(t=0;t<zr.length;t++)Gn(zr[t],e);break;case"source":Gn("error",e);break;case"img":case"image":case"link":Gn("error",e),Gn("load",e);break;case"details":Gn("toggle",e);break;case"input":Gn("invalid",e),gs(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Gn("invalid",e);break;case"textarea":Gn("invalid",e),ps(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||Mm(e.textContent,t)?(l.popover!=null&&(Gn("beforetoggle",e),Gn("toggle",e)),l.onScroll!=null&&Gn("scroll",e),l.onScrollEnd!=null&&Gn("scrollend",e),l.onClick!=null&&(e.onclick=Rt),e=!0):e=!1,e||cl(n,!0)}function vu(n){for(Ne=n.return;Ne;)switch(Ne.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:Ne=Ne.return}}function yi(n){if(n!==Ne)return!1;if(!Yn)return vu(n),Yn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Go(n.type,n.memoizedProps)),t=!t),t&&ue&&cl(n),vu(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));ue=Vm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));ue=Vm(n)}else e===27?(e=ue,Al(n.type)?(n=$o,$o=null,ue=n):ue=e):ue=Ne?yt(n.stateNode.nextSibling):null;return!0}function Bl(){ue=Ne=null,Yn=!1}function sc(){var n=al;return n!==null&&(ke===null?ke=n:ke.push.apply(ke,n),al=null),n}function fr(n){al===null?al=[n]:al.push(n)}var hc=Ce(null),Yl=null,It=null;function ol(n,e,t){Zn(hc,e._currentValue),e._currentValue=t}function Jt(n){n._currentValue=hc.current,Kn(hc)}function pu(n,e,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===t)break;n=n.return}}function dc(n,e,t,l){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;n:for(;r!==null;){var y=r;r=i;for(var T=0;T<e.length;T++)if(y.context===e[T]){r.lanes|=t,y=r.alternate,y!==null&&(y.lanes|=t),pu(r.return,t,n),l||(o=null);break n}r=y.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(f(341));o.lanes|=t,r=o.alternate,r!==null&&(r.lanes|=t),pu(o,t,n),o=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),pu(i.return,t,n),o=i.child,o=o!==null?o.sibling:null):o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Ll(n,e,t,l){n=null;for(var i=e,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(f(387));if(o=o.memoizedProps,o!==null){var y=i.type;et(i.pendingProps.value,o.value)||(n!==null?n.push(y):n=[y])}}else if(i===pt.current){if(o=i.alternate,o===null)throw Error(f(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(Li):n=[Li])}i=i.return}return n!==null&&dc(e,n,t,l),e.flags|=262144,n!==null}function xu(n){for(n=n.firstContext;n!==null;){if(!et(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Gl(n){Yl=n,It=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ze(n){return rh(Yl,n)}function Eu(n,e){return Yl===null&&Gl(n),rh(n,e)}function rh(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},It===null){if(n===null)throw Error(f(308));It=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else It=It.next=e;return t}var $g=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},kg=a.unstable_scheduleCallback,Wg=a.unstable_NormalPriority,ve={$$typeof:Qn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mc(){return{controller:new $g,data:new Map,refCount:0}}function sr(n){n.refCount--,n.refCount===0&&kg(Wg,function(){n.controller.abort()})}function uh(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var l=e[n];t.indexOf(l)===-1&&t.push(l)}}}var hr=null;function Pg(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var dr=null,yc=0,Ql=0,gi=null;function n1(n,e){if(dr===null){var t=dr=[];yc=0,Ql=zo(),gi={status:"pending",value:void 0,then:function(l){t.push(l)}}}return yc++,e.then(ah,ah),e}function ah(){if(--yc===0&&(hr=null,dr!==null)){gi!==null&&(gi.status="fulfilled");var n=dr;dr=null,Ql=0,gi=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function e1(n,e){var t=[],l={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(l.status="rejected",l.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),l}var ch=rn.S;rn.S=function(n,e){if(nm=Z(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&n1(n,e),hr!==null)for(var t=Hi;t!==null;)uh(t,hr),t=t.next;if(t=n.types,t!==null){for(var l=Hi;l!==null;)uh(l,t),l=l.next;if(Ql!==0){l=hr,l===null&&(l=hr=[]);for(var i=0;i<t.length;i++){var r=t[i];l.indexOf(r)===-1&&l.push(r)}}}ch!==null&&ch(n,e)};var Xl=Ce(null);function gc(){var n=Xl.current;return n!==null?n:re.pooledCache}function Su(n,e){e===null?Zn(Xl,Xl.current):Zn(Xl,e.pool)}function oh(){var n=gc();return n===null?null:{parent:ve._currentValue,pool:n}}var vi=Error(f(460)),vc=Error(f(474)),Tu=Error(f(542)),bu={then:function(){}};function fh(n){return n=n.status,n==="fulfilled"||n==="rejected"}function sh(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Rt,Rt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,dh(n),n===void 0&&!("reason"in e)?Error(f(600)):n;default:if(typeof e.status=="string")e.then(Rt,Rt);else{if(n=re,n!==null&&100<n.shellSuspendCounter)throw Error(f(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=l}},function(l){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,dh(n),n}throw Kl=e,vi}}function Vl(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Kl=t,vi):t}}var Kl=null;function hh(){if(Kl===null)throw Error(f(459));var n=Kl;return Kl=null,n}function dh(n){if(n===vi||n===Tu)throw Error(f(483))}var pi=null,mr=0;function Au(n){var e=mr;return mr+=1,pi===null&&(pi=[]),sh(pi,n,e)}function fl(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Mu(n,e){throw e.$$typeof===mn?Error(f(525)):(n=Object.prototype.toString.call(e),Error(f(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function mh(n){function e(_,A){if(n){var C=_.deletions;C===null?(_.deletions=[A],_.flags|=16):C.push(A)}}function t(_,A){if(!n)return null;for(;A!==null;)e(_,A),A=A.sibling;return null}function l(_){for(var A=new Map;_!==null;)_.key===null?A.set(_.index,_):A.set(_.key,_),_=_.sibling;return A}function i(_,A){return _=Zt(_,A),_.index=0,_.sibling=null,_}function r(_,A,C){return _.index=C,n?(C=_.alternate,C!==null?(C=C.index,C<A?(_.flags|=2,A):C):(_.flags|=134217730,A)):(_.flags|=1048576,A)}function o(_){return n&&_.alternate===null&&(_.flags|=134217730),_}function y(_,A,C,L){return A===null||A.tag!==6?(A=ac(C,_.mode,L),A.return=_,A):(A=i(A,C),A.return=_,A)}function T(_,A,C,L){var fn=C.type;return fn===en?(_=H(_,A,C.props.children,L,C.key),fl(_,C),_):A!==null&&(A.elementType===fn||typeof fn=="object"&&fn!==null&&fn.$$typeof===bn&&Vl(fn)===A.type)?(A=i(A,C.props),fl(A,C),A.return=_,A):(A=mu(C.type,C.key,C.props,null,_.mode,L),fl(A,C),A.return=_,A)}function R(_,A,C,L){return A===null||A.tag!==4||A.stateNode.containerInfo!==C.containerInfo||A.stateNode.implementation!==C.implementation?(A=cc(C,_.mode,L),A.return=_,A):(A=i(A,C.children||[]),A.return=_,A)}function H(_,A,C,L,fn){return A===null||A.tag!==7?(A=jl(C,_.mode,L,fn),A.return=_,A):(A=i(A,C),A.return=_,A)}function X(_,A,C){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=ac(""+A,_.mode,C),A.return=_,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Dn:return C=mu(A.type,A.key,A.props,null,_.mode,C),fl(C,A),C.return=_,C;case Bn:return A=cc(A,_.mode,C),A.return=_,A;case bn:return A=Vl(A),X(_,A,C)}if(vn(A)||an(A))return A=jl(A,_.mode,C,null),A.return=_,A;if(typeof A.then=="function")return X(_,Au(A),C);if(A.$$typeof===Qn)return X(_,Eu(_,A),C);Mu(_,A)}return null}function N(_,A,C,L){var fn=A!==null?A.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return fn!==null?null:y(_,A,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Dn:return C.key===fn?T(_,A,C,L):null;case Bn:return C.key===fn?R(_,A,C,L):null;case bn:return C=Vl(C),N(_,A,C,L)}if(vn(C)||an(C))return fn!==null?null:H(_,A,C,L,null);if(typeof C.then=="function")return N(_,A,Au(C),L);if(C.$$typeof===Qn)return N(_,A,Eu(_,C),L);Mu(_,C)}return null}function D(_,A,C,L,fn){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return _=_.get(C)||null,y(A,_,""+L,fn);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Dn:return _=_.get(L.key===null?C:L.key)||null,T(A,_,L,fn);case Bn:return _=_.get(L.key===null?C:L.key)||null,R(A,_,L,fn);case bn:return L=Vl(L),D(_,A,C,L,fn)}if(vn(L)||an(L))return _=_.get(C)||null,H(A,_,L,fn,null);if(typeof L.then=="function")return D(_,A,C,Au(L),fn);if(L.$$typeof===Qn)return D(_,A,C,Eu(A,L),fn);Mu(A,L)}return null}function ln(_,A,C,L){for(var fn=null,Vn=null,xn=A,On=A=0,Ee=null;xn!==null&&On<C.length;On++){xn.index>On?(Ee=xn,xn=null):Ee=xn.sibling;var In=N(_,xn,C[On],L);if(In===null){xn===null&&(xn=Ee);break}n&&xn&&In.alternate===null&&e(_,xn),A=r(In,A,On),Vn===null?fn=In:Vn.sibling=In,Vn=In,xn=Ee}if(On===C.length)return t(_,xn),Yn&&Ft(_,On),fn;if(xn===null){for(;On<C.length;On++)xn=X(_,C[On],L),xn!==null&&(A=r(xn,A,On),Vn===null?fn=xn:Vn.sibling=xn,Vn=xn);return Yn&&Ft(_,On),fn}for(xn=l(xn);On<C.length;On++)Ee=D(xn,_,On,C[On],L),Ee!==null&&(n&&(In=Ee.alternate,In!==null&&xn.delete(In.key===null?On:In.key)),A=r(Ee,A,On),Vn===null?fn=Ee:Vn.sibling=Ee,Vn=Ee);return n&&xn.forEach(function(Rl){return e(_,Rl)}),Yn&&Ft(_,On),fn}function gn(_,A,C,L){if(C==null)throw Error(f(151));for(var fn=null,Vn=null,xn=A,On=A=0,Ee=null,In=C.next();xn!==null&&!In.done;On++,In=C.next()){xn.index>On?(Ee=xn,xn=null):Ee=xn.sibling;var Rl=N(_,xn,In.value,L);if(Rl===null){xn===null&&(xn=Ee);break}n&&xn&&Rl.alternate===null&&e(_,xn),A=r(Rl,A,On),Vn===null?fn=Rl:Vn.sibling=Rl,Vn=Rl,xn=Ee}if(In.done)return t(_,xn),Yn&&Ft(_,On),fn;if(xn===null){for(;!In.done;On++,In=C.next())In=X(_,In.value,L),In!==null&&(A=r(In,A,On),Vn===null?fn=In:Vn.sibling=In,Vn=In);return Yn&&Ft(_,On),fn}for(xn=l(xn);!In.done;On++,In=C.next())In=D(xn,_,On,In.value,L),In!==null&&(n&&(Ee=In.alternate,Ee!==null&&xn.delete(Ee.key===null?On:Ee.key)),A=r(In,A,On),Vn===null?fn=In:Vn.sibling=In,Vn=In);return n&&xn.forEach(function(Uv){return e(_,Uv)}),Yn&&Ft(_,On),fn}function Un(_,A,C,L){if(typeof C=="object"&&C!==null&&C.type===en&&C.key===null&&C.props.ref===void 0&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Dn:n:{for(var fn=C.key;A!==null;){if(A.key===fn){if(fn=C.type,fn===en){if(A.tag===7){t(_,A.sibling),L=i(A,C.props.children),fl(L,C),L.return=_,_=L;break n}}else if(A.elementType===fn||typeof fn=="object"&&fn!==null&&fn.$$typeof===bn&&Vl(fn)===A.type){t(_,A.sibling),L=i(A,C.props),fl(L,C),L.return=_,_=L;break n}t(_,A);break}else e(_,A);A=A.sibling}C.type===en?(L=jl(C.props.children,_.mode,L,C.key),fl(L,C),L.return=_,_=L):(L=mu(C.type,C.key,C.props,null,_.mode,L),fl(L,C),L.return=_,_=L)}return o(_);case Bn:n:{for(fn=C.key;A!==null;){if(A.key===fn)if(A.tag===4&&A.stateNode.containerInfo===C.containerInfo&&A.stateNode.implementation===C.implementation){t(_,A.sibling),L=i(A,C.children||[]),L.return=_,_=L;break n}else{t(_,A);break}else e(_,A);A=A.sibling}L=cc(C,_.mode,L),L.return=_,_=L}return o(_);case bn:return C=Vl(C),Un(_,A,C,L)}if(vn(C))return ln(_,A,C,L);if(an(C)){if(fn=an(C),typeof fn!="function")throw Error(f(150));return C=fn.call(C),gn(_,A,C,L)}if(typeof C.then=="function")return Un(_,A,Au(C),L);if(C.$$typeof===Qn)return Un(_,A,Eu(_,C),L);Mu(_,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,A!==null&&A.tag===6?(t(_,A.sibling),L=i(A,C),L.return=_,_=L):(t(_,A),L=ac(C,_.mode,L),L.return=_,_=L),o(_)):t(_,A)}return function(_,A,C,L){try{mr=0;var fn=Un(_,A,C,L);return pi=null,fn}catch(xn){if(xn===vi||xn===Tu)throw xn;var Vn=Ie(29,xn,null,_.mode);return Vn.lanes=L,Vn.return=_,Vn}finally{}}}var Zl=mh(!0),yh=mh(!1),sl=!1;function pc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function hl(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function dl(n,e,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(kn&2)!==0){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,e=du(n),Ws(n,null,t),e}return hu(n,l,e,t),du(n)}function yr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,ts(n,t)}}function Ec(n,e){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,t=t.next}while(t!==null);r===null?i=r=e:r=r.next=e}else i=r=e;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Sc=!1;function gr(){if(Sc){var n=gi;if(n!==null)throw n}}function vr(n,e,t,l){Sc=!1;var i=n.updateQueue;sl=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,y=i.shared.pending;if(y!==null){i.shared.pending=null;var T=y,R=T.next;T.next=null,o===null?r=R:o.next=R,o=T;var H=n.alternate;H!==null&&(H=H.updateQueue,y=H.lastBaseUpdate,y!==o&&(y===null?H.firstBaseUpdate=R:y.next=R,H.lastBaseUpdate=T))}if(r!==null){var X=i.baseState;o=0,H=R=T=null,y=r;do{var N=y.lane&-536870913,D=N!==y.lane;if(D?(Xn&N)===N:(l&N)===N){N!==0&&N===Ql&&(Sc=!0),H!==null&&(H=H.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});n:{var ln=n,gn=y;N=e;var Un=t;switch(gn.tag){case 1:if(ln=gn.payload,typeof ln=="function"){X=ln.call(Un,X,N);break n}X=ln;break n;case 3:ln.flags=ln.flags&-65537|128;case 0:if(ln=gn.payload,N=typeof ln=="function"?ln.call(Un,X,N):ln,N==null)break n;X=I({},X,N);break n;case 2:sl=!0}}N=y.callback,N!==null&&(n.flags|=64,D&&(n.flags|=8192),D=i.callbacks,D===null?i.callbacks=[N]:D.push(N))}else D={lane:N,tag:y.tag,payload:y.payload,callback:y.callback,next:null},H===null?(R=H=D,T=X):H=H.next=D,o|=N;if(y=y.next,y===null){if(y=i.shared.pending,y===null)break;D=y,y=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);H===null&&(T=X),i.baseState=T,i.firstBaseUpdate=R,i.lastBaseUpdate=H,r===null&&(i.shared.lanes=0),El|=o,n.lanes=o,n.memoizedState=X}}function gh(n,e){if(typeof n!="function")throw Error(f(191,n));n.call(e)}function vh(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)gh(t[n],e)}var ml=Ce(null),Ou=Ce(0);function ph(n,e){n=nl,Zn(Ou,n),Zn(ml,e),nl=n|e.baseLanes}function Tc(){Zn(Ou,nl),Zn(ml,ml.current)}function bc(){nl=Ou.current,Kn(ml),Kn(Ou)}var we=Ce(null),Ye=null;function yl(n){var e=n.alternate;Zn(He,He.current&1),Zn(we,n),Ye===null&&(e===null||ml.current!==null||e.memoizedState!==null)&&(Ye=n)}function Ac(n){Zn(He,He.current),Zn(we,n),Ye===null&&(Ye=n)}function xh(n){n.tag===22?(Zn(He,He.current),Zn(we,n),Ye===null&&(Ye=n)):gl()}function gl(){Zn(He,He.current),Zn(we,we.current)}function tt(n){Kn(we),Ye===n&&(Ye=null),Kn(He)}var He=Ce(0);function pr(n,e){Zn(we,we.current),Zn(He,e)}function Mc(n){Kn(He),Kn(we),Ye===n&&(Ye=null)}function Nu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Io(t)||Jo(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $t=0,Hn=null,te=null,pe=null,_u=!1,xi=!1,Fl=!1,Ru=0,xr=0,Ei=null,t1=0;function he(){throw Error(f(321))}function Oc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!et(n[t],e[t]))return!1;return!0}function Nc(n,e,t,l,i,r){return $t=r,Hn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rn.H=n===null||n.memoizedState===null?td:ld,Fl=!1,r=t(l,i),Fl=!1,xi&&(r=Sh(e,t,l,i)),Eh(n),r}function Eh(n){rn.H=qu;var e=te!==null&&te.next!==null;if($t=0,pe=te=Hn=null,_u=!1,xr=0,Ei=null,e)throw Error(f(300));n===null||xe||(n=n.dependencies,n!==null&&xu(n)&&(xe=!0))}function Sh(n,e,t,l){Hn=n;var i=0;do{if(xi&&(Ei=null),xr=0,xi=!1,25<=i)throw Error(f(301));if(i+=1,pe=te=null,n.updateQueue!=null){var r=n.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}rn.H=f1,r=e(t,l)}while(xi);return r}function l1(){var n=rn.H,e=n.useState()[0];return e=typeof e.then=="function"?Er(e):e,n=n.useState()[0],(te!==null?te.memoizedState:null)!==n&&(Hn.flags|=1024),e}function _c(){var n=Ru!==0;return Ru=0,n}function Rc(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Cc(n){if(_u){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}_u=!1}$t=0,pe=te=Hn=null,xi=!1,xr=Ru=0,Ei=null}function Xe(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?Hn.memoizedState=pe=n:pe=pe.next=n,pe}function ye(){if(te===null){var n=Hn.alternate;n=n!==null?n.memoizedState:null}else n=te.next;var e=pe===null?Hn.memoizedState:pe.next;if(e!==null)pe=e,te=n;else{if(n===null)throw Hn.alternate===null?Error(f(467)):Error(f(310));te=n,n={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},pe===null?Hn.memoizedState=pe=n:pe=pe.next=n}return pe}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Er(n){var e=xr;return xr+=1,Ei===null&&(Ei=[]),n=sh(Ei,n,e),e=Hn,(pe===null?e.memoizedState:pe.next)===null&&(e=e.alternate,rn.H=e===null||e.memoizedState===null?td:ld),n}function Du(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Er(n);if(n.$$typeof===K)return;if(n.$$typeof===Qn)return ze(n)}throw Error(f(438,String(n)))}function Dc(n){var e=null,t=Hn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=Hn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Cu(),Hn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),l=0;l<n;l++)t[l]=le;return e.index++,t}function kt(n,e){return typeof e=="function"?e(n):e}function zu(n){var e=ye();return zc(e,te,n)}function zc(n,e,t){var l=n.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var i=n.baseQueue,r=l.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}e.baseQueue=i=r,l.pending=null}if(r=n.baseState,i===null)n.memoizedState=r;else{e=i.next;var y=o=null,T=null,R=e,H=!1;do{var X=R.lane&-536870913;if(X!==R.lane?(Xn&X)===X:($t&X)===X){var N=R.revertLane;if(N===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),X===Ql&&(H=!0);else if(($t&N)===N){R=R.next,N===Ql&&(H=!0);continue}else X={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},T===null?(y=T=X,o=r):T=T.next=X,Hn.lanes|=N,El|=N;X=R.action,Fl&&t(r,X),r=R.hasEagerState?R.eagerState:t(r,X)}else N={lane:X,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},T===null?(y=T=N,o=r):T=T.next=N,Hn.lanes|=X,El|=X;R=R.next}while(R!==null&&R!==e);if(T===null?o=r:T.next=y,!et(r,n.memoizedState)&&(xe=!0,H&&(t=gi,t!==null)))throw t;n.memoizedState=r,n.baseState=o,n.baseQueue=T,l.lastRenderedState=r}return i===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function wc(n){var e=ye(),t=e.queue;if(t===null)throw Error(f(311));t.lastRenderedReducer=n;var l=t.dispatch,i=t.pending,r=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do r=n(r,o.action),o=o.next;while(o!==i);et(r,e.memoizedState)||(xe=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}return[r,l]}function Th(n,e,t){var l=Hn,i=ye(),r=Yn;if(r){if(t===void 0)throw Error(f(407));t=t()}else t=e();var o=!et((te||i).memoizedState,t);if(o&&(i.memoizedState=t,xe=!0),i=i.queue,qc(Mh.bind(null,l,i,n),[n]),n=i.getSnapshot!==e||o||pe!==null&&(pe.memoizedState.tag&1)!==0,Si(n?9:8,{destroy:void 0},Ah.bind(null,l,i,t,e),null),n){if(l.flags|=2048,re===null)throw Error(f(349));r||($t&127)!==0||bh(l,e,t)}return t}function bh(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Hn.updateQueue,e===null?(e=Cu(),Hn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ah(n,e,t,l){e.value=t,e.getSnapshot=l,Oh(e)&&Nh(n)}function Mh(n,e,t){return t(function(){Oh(e)&&Nh(n)})}function Oh(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!et(n,t)}catch{return!0}}function Nh(n){var e=ql(n,2);e!==null&&We(e,n,2)}function Hc(n){var e=Xe();if(typeof n=="function"){var t=n;if(n=t(),Fl){ll(!0);try{t()}finally{ll(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:n},e}function _h(n,e,t,l){return n.baseState=t,zc(n,te,typeof l=="function"?l:kt)}function i1(n,e,t,l,i){if(Uu(n))throw Error(f(485));if(n=e.action,n!==null){var r={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};rn.T!==null?t(!0):r.isTransition=!1,l(r),t=e.pending,t===null?(r.next=e.pending=r,Rh(e,r)):(r.next=t.next,e.pending=t.next=r)}}function Rh(n,e){var t=e.action,l=e.payload,i=n.state;if(e.isTransition){var r=rn.T,o={};o.types=r!==null?r.types:null,rn.T=o;try{var y=t(i,l),T=rn.S;T!==null&&T(o,y),Ch(n,e,y)}catch(R){Uc(n,e,R)}finally{r!==null&&o.types!==null&&(r.types=o.types),rn.T=r}}else try{r=t(i,l),Ch(n,e,r)}catch(R){Uc(n,e,R)}}function Ch(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Dh(n,e,l)},function(l){return Uc(n,e,l)}):Dh(n,e,t)}function Dh(n,e,t){e.status="fulfilled",e.value=t,zh(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Rh(n,t)))}function Uc(n,e,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,zh(e),e=e.next;while(e!==l)}n.action=null}function zh(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function wh(n,e){return e}function Hh(n,e){if(Yn){var t=re.formState;if(t!==null){n:{var l=Hn;if(Yn){if(ue){e:{for(var i=ue,r=dt;i.nodeType!==8;){if(!r){i=null;break e}if(i=yt(i.nextSibling),i===null){i=null;break e}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){ue=yt(i.nextSibling),l=i.data==="F!";break n}}cl(l)}l=!1}l&&(e=t[0])}}return t=Xe(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wh,lastRenderedState:e},t.queue=l,t=Ph.bind(null,Hn,l),l.dispatch=t,l=Hc(!1),r=Gc.bind(null,Hn,!1,l.queue),l=Xe(),i={state:e,dispatch:null,action:n,pending:null},l.queue=i,t=i1.bind(null,Hn,i,r,t),i.dispatch=t,l.memoizedState=n,[e,t,!1]}function Uh(n){var e=ye();return qh(e,te,n)}function qh(n,e,t){if(e=zc(n,e,wh)[0],n=zu(kt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Er(e)}catch(o){throw o===vi?Tu:o}else l=e;e=ye();var i=e.queue,r=i.dispatch;return t!==e.memoizedState&&(Hn.flags|=2048,Si(9,{destroy:void 0},r1.bind(null,i,t),null)),[l,r,n]}function r1(n,e){n.action=e}function jh(n){var e=ye(),t=te;if(t!==null)return qh(e,t,n);ye(),e=e.memoizedState,t=ye();var l=t.queue.dispatch;return t.memoizedState=n,[e,l,!1]}function Si(n,e,t,l){return n={tag:n,create:t,deps:l,inst:e,next:null},e=Hn.updateQueue,e===null&&(e=Cu(),Hn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,e.lastEffect=n),n}function Bh(){return ye().memoizedState}function wu(n,e,t,l){var i=Xe();Hn.flags|=n,i.memoizedState=Si(1|e,{destroy:void 0},t,l===void 0?null:l)}function Hu(n,e,t,l){var i=ye();l=l===void 0?null:l;var r=i.memoizedState.inst;te!==null&&l!==null&&Oc(l,te.memoizedState.deps)?i.memoizedState=Si(e,r,t,l):(Hn.flags|=n,i.memoizedState=Si(1|e,r,t,l))}function Yh(n,e){wu(8390656,8,n,e)}function qc(n,e){Hu(2048,8,n,e)}function u1(n){Hn.flags|=4;var e=Hn.updateQueue;if(e===null)e=Cu(),Hn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Lh(n){var e=ye().memoizedState;return u1({ref:e,nextImpl:n}),function(){if((kn&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function Gh(n,e){return Hu(4,2,n,e)}function Qh(n,e){return Hu(4,4,n,e)}function Xh(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Vh(n,e,t){t=t!=null?t.concat([n]):null,Hu(4,4,Xh.bind(null,e,n),t)}function jc(){}function Kh(n,e){var t=ye();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&Oc(e,l[1])?l[0]:(t.memoizedState=[n,e],n)}function Zh(n,e){var t=ye();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&Oc(e,l[1]))return l[0];if(l=n(),Fl){ll(!0);try{n()}finally{ll(!1)}}return t.memoizedState=[l,e],l}function Bc(n,e,t){return t===void 0||($t&1073741824)!==0&&(Xn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=tm(),Hn.lanes|=n,El|=n,t)}function Fh(n,e,t,l){return et(t,e)?t:ml.current!==null?(n=Bc(n,t,l),et(n,e)||(xe=!0),n):($t&106)===0||($t&1073741824)!==0&&(Xn&261930)===0?(xe=!0,n.memoizedState=t):(n=tm(),Hn.lanes|=n,El|=n,e)}function Ih(n,e,t,l,i){var r=En.p;En.p=r!==0&&8>r?r:8;var o=rn.T,y={};y.types=o!==null?o.types:null,rn.T=y,Gc(n,!1,e,t);try{var T=i(),R=rn.S;if(R!==null&&R(y,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var H=e1(T,l);Sr(n,e,H,ut(n))}else Sr(n,e,l,ut(n))}catch(X){Sr(n,e,{then:function(){},status:"rejected",reason:X},ut())}finally{En.p=r,o!==null&&y.types!==null&&(o.types=y.types),rn.T=o}}function a1(){}function Yc(n,e,t,l){if(n.tag!==5)throw Error(f(476));var i=Jh(n).queue;Ih(n,i,e,Se,t===null?a1:function(){return $h(n),t(l)})}function Jh(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:Se,baseState:Se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:Se},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function $h(n){var e=Jh(n);e.next===null&&(e=n.alternate.memoizedState),Sr(n,e.next.queue,{},ut())}function Lc(){return ze(Li)}function kh(){return ye().memoizedState}function Wh(){return ye().memoizedState}function c1(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=ut();n=hl(t);var l=dl(e,n,t);l!==null&&(We(l,e,t),yr(l,e,t)),e={cache:mc()},n.payload=e;return}e=e.return}}function o1(n,e,t){var l=ut();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Uu(n)?nd(e,t):(t=rc(n,e,t,l),t!==null&&(We(t,n,l),ed(t,e,l)))}function Ph(n,e,t){var l=ut();Sr(n,e,t,l)}function Sr(n,e,t,l){var i={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Uu(n))nd(e,i);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var o=e.lastRenderedState,y=r(o,t);if(i.hasEagerState=!0,i.eagerState=y,et(y,o))return hu(n,e,i,0),re===null&&su(),!1}catch{}finally{}if(t=rc(n,e,i,l),t!==null)return We(t,n,l),ed(t,e,l),!0}return!1}function Gc(n,e,t,l){if(l={lane:2,revertLane:zo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Uu(n)){if(e)throw Error(f(479))}else e=rc(n,t,l,2),e!==null&&We(e,n,2)}function Uu(n){var e=n.alternate;return n===Hn||e!==null&&e===Hn}function nd(n,e){xi=_u=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ed(n,e,t){if((t&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,ts(n,t)}}var qu={readContext:ze,use:Du,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he,useEffectEvent:he},td={readContext:ze,use:Du,useCallback:function(n,e){return Xe().memoizedState=[n,e===void 0?null:e],n},useContext:ze,useEffect:Yh,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,wu(4194308,4,Xh.bind(null,e,n),t)},useLayoutEffect:function(n,e){return wu(4194308,4,n,e)},useInsertionEffect:function(n,e){wu(4,2,n,e)},useMemo:function(n,e){var t=Xe();e=e===void 0?null:e;var l=n();if(Fl){ll(!0);try{n()}finally{ll(!1)}}return t.memoizedState=[l,e],l},useReducer:function(n,e,t){var l=Xe();if(t!==void 0){var i=t(e);if(Fl){ll(!0);try{t(e)}finally{ll(!1)}}}else i=e;return l.memoizedState=l.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=o1.bind(null,Hn,n),[l.memoizedState,n]},useRef:function(n){var e=Xe();return n={current:n},e.memoizedState=n},useState:function(n){n=Hc(n);var e=n.queue,t=Ph.bind(null,Hn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:jc,useDeferredValue:function(n,e){var t=Xe();return Bc(t,n,e)},useTransition:function(){var n=Hc(!1);return n=Ih.bind(null,Hn,n.queue,!0,!1),Xe().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var l=Hn,i=Xe();if(Yn){if(t===void 0)throw Error(f(407));t=t()}else{if(t=e(),re===null)throw Error(f(349));(Xn&127)!==0||bh(l,e,t)}i.memoizedState=t;var r={value:t,getSnapshot:e};return i.queue=r,Yh(Mh.bind(null,l,r,n),[n]),l.flags|=2048,Si(9,{destroy:void 0},Ah.bind(null,l,r,t,e),null),t},useId:function(){var n=Xe(),e=re.identifierPrefix;if(Yn){var t=Dt,l=Ct;t=(l&~(1<<32-Pe(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=Ru++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=t1++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Lc,useFormState:Hh,useActionState:Hh,useOptimistic:function(n){var e=Xe();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Gc.bind(null,Hn,!0,t),t.dispatch=e,[n,e]},useMemoCache:Dc,useCacheRefresh:function(){return Xe().memoizedState=c1.bind(null,Hn)},useEffectEvent:function(n){var e=Xe(),t={impl:n};return e.memoizedState=t,function(){if((kn&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}},ld={readContext:ze,use:Du,useCallback:Kh,useContext:ze,useEffect:qc,useImperativeHandle:Vh,useInsertionEffect:Gh,useLayoutEffect:Qh,useMemo:Zh,useReducer:zu,useRef:Bh,useState:function(){return zu(kt)},useDebugValue:jc,useDeferredValue:function(n,e){var t=ye();return Fh(t,te.memoizedState,n,e)},useTransition:function(){var n=zu(kt)[0],e=ye().memoizedState;return[typeof n=="boolean"?n:Er(n),e]},useSyncExternalStore:Th,useId:kh,useHostTransitionStatus:Lc,useFormState:Uh,useActionState:Uh,useOptimistic:function(n,e){var t=ye();return _h(t,te,n,e)},useMemoCache:Dc,useCacheRefresh:Wh,useEffectEvent:Lh},f1={readContext:ze,use:Du,useCallback:Kh,useContext:ze,useEffect:qc,useImperativeHandle:Vh,useInsertionEffect:Gh,useLayoutEffect:Qh,useMemo:Zh,useReducer:wc,useRef:Bh,useState:function(){return wc(kt)},useDebugValue:jc,useDeferredValue:function(n,e){var t=ye();return te===null?Bc(t,n,e):Fh(t,te.memoizedState,n,e)},useTransition:function(){var n=wc(kt)[0],e=ye().memoizedState;return[typeof n=="boolean"?n:Er(n),e]},useSyncExternalStore:Th,useId:kh,useHostTransitionStatus:Lc,useFormState:jh,useActionState:jh,useOptimistic:function(n,e){var t=ye();return te!==null?_h(t,te,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:Dc,useCacheRefresh:Wh,useEffectEvent:Lh};function Qc(n,e,t,l){e=n.memoizedState,t=t(l,e),t=t==null?e:I({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Xc={enqueueSetState:function(n,e,t){n=n._reactInternals;var l=ut(),i=hl(l);i.payload=e,t!=null&&(i.callback=t),e=dl(n,i,l),e!==null&&(We(e,n,l),yr(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var l=ut(),i=hl(l);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=dl(n,i,l),e!==null&&(We(e,n,l),yr(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ut(),l=hl(t);l.tag=2,e!=null&&(l.callback=e),e=dl(n,l,t),e!==null&&(We(e,n,t),yr(e,n,t))}};function id(n,e,t,l,i,r,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,r,o):e.prototype&&e.prototype.isPureReactComponent?!ar(t,l)||!ar(i,r):!0}function rd(n,e,t,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==n&&Xc.enqueueReplaceState(e,e.state,null)}function Il(n,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(n=n.defaultProps){t===e&&(t=I({},t));for(var i in n)t[i]===void 0&&(t[i]=n[i])}return t}function ud(n){fu(n)}function ad(n){console.error(n)}function cd(n){fu(n)}function ju(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function od(n,e,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Vc(n,e,t){return t=hl(t),t.tag=3,t.payload={element:null},t.callback=function(){ju(n,e)},t}function fd(n){return n=hl(n),n.tag=3,n}function sd(n,e,t,l){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=l.value;n.payload=function(){return i(r)},n.callback=function(){od(e,t,l)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){od(e,t,l),typeof i!="function"&&(Sl===null?Sl=new Set([this]):Sl.add(this));var y=l.stack;this.componentDidCatch(l.value,{componentStack:y!==null?y:""})})}function s1(n,e,t,l,i){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&Ll(e,t,i,!0),t=we.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Ye===null?ia():t.alternate===null&&de===0&&(de=3),t.flags&=-257,t.flags|=65536,t.lanes=i,l===bu?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Ro(n,l,i)),!1;case 22:return t.flags|=65536,l===bu?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Ro(n,l,i)),!1}throw Error(f(435,t.tag))}return Ro(n,l,i),ia(),!1}if(Yn)return e=we.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,l!==fc&&(n=Error(f(422),{cause:l}),fr(ft(n,t)))):(l!==fc&&(e=Error(f(423),{cause:l}),fr(ft(e,t))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,l=ft(l,t),i=Vc(n.stateNode,l,i),Ec(n,i),de!==4&&(de=2)),!1;var r=Error(f(520),{cause:l});if(r=ft(r,t),Rr===null?Rr=[r]:Rr.push(r),de!==4&&(de=2),e===null)return!0;l=ft(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=i&-i,t.lanes|=n,n=Vc(t.stateNode,l,n),Ec(t,n),!1;case 1:if(e=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Sl===null||!Sl.has(r))))return t.flags|=65536,i&=-i,t.lanes|=i,i=fd(i),sd(i,n,t,l),Ec(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var Kc=Error(f(461)),xe=!1;function Ae(n,e,t,l){e.child=n===null?yh(e,null,t,l):Zl(e,n.child,t,l)}function hd(n,e,t,l,i){t=t.render;var r=e.ref;if("ref"in l){var o={};for(var y in l)y!=="ref"&&(o[y]=l[y])}else o=l;return Gl(e),l=Nc(n,e,t,o,r,i),y=_c(),n!==null&&!xe?(Rc(n,e,i),Wt(n,e,i)):(Yn&&y&&gu(e),e.flags|=1,Ae(n,e,l,i),e.child)}function dd(n,e,t,l,i){if(n===null){var r=t.type;return typeof r=="function"&&!uc(r)&&r.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=r,md(n,e,r,l,i)):(n=mu(t.type,null,l,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!Pc(n,i)){var o=r.memoizedProps;if(t=t.compare,t=t!==null?t:ar,t(o,l)&&n.ref===e.ref)return Wt(n,e,i)}return e.flags|=1,n=Zt(r,l),n.ref=e.ref,n.return=e,e.child=n}function md(n,e,t,l,i){if(n!==null){var r=n.memoizedProps;if(ar(r,l)&&n.ref===e.ref)if(xe=!1,e.pendingProps=l=r,Pc(n,i))(n.flags&131072)!==0&&(xe=!0);else return e.lanes=n.lanes,Wt(n,e,i)}return Zc(n,e,t,l,i)}function yd(n,e,t,l){var i=l.children,r=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,n!==null){for(l=e.child=n.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~r}else l=0,e.child=null;return gd(n,e,r,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Su(e,r!==null?r.cachePool:null),r!==null?ph(e,r):Tc(),xh(e);else return l=e.lanes=536870912,gd(n,e,r!==null?r.baseLanes|t:t,t,l)}else r!==null?(Su(e,r.cachePool),ph(e,r),gl(),e.memoizedState=null):(n!==null&&Su(e,null),Tc(),gl());return Ae(n,e,i,t),e.child}function Tr(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function gd(n,e,t,l,i){var r=gc();return r=r===null?null:{parent:ve._currentValue,pool:r},e.memoizedState={baseLanes:t,cachePool:r},n!==null&&Su(e,null),Tc(),xh(e),n!==null&&Ll(n,e,l,!0),e.childLanes=i,null}function Bu(n,e){return e=Yu({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function vd(n,e,t){return Zl(e,n.child,null,t),n=Bu(e,e.pendingProps),n.flags|=2,tt(e),e.memoizedState=null,n}function h1(n,e,t){var l=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Yn){if(l.mode==="hidden")return n=Bu(e,l),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},Tr(null,n);if(Ac(e),(n=ue)?(n=Xm(n,dt),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ul!==null?{id:Ct,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},t=nh(n),t.return=e,e.child=t,Ne=e,ue=null)):n=null,n===null)throw cl(e);return e.lanes=536870912,null}return Bu(e,l)}var r=n.memoizedState;if(r!==null){var o=r.dehydrated;if(Ac(e),i)if(e.flags&256)e.flags&=-257,e=vd(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(f(558));else if(xe||Ll(n,e,t,!1),i=(t&n.childLanes)!==0,xe||i){if(ml.current===null){if(l=re,l!==null&&(o=ls(l,t),o!==0&&o!==r.retryLane))throw r.retryLane=o,ql(n,o),We(l,n,o),Kc;ia()}e=vd(n,e,t)}else n=r.treeContext,ue=yt(o.nextSibling),Ne=e,Yn=!0,al=null,dt=!1,n!==null&&lh(e,n),e=Bu(e,l),e.flags|=134221824;return e}return n=Zt(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Ti(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(f(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Zc(n,e,t,l,i){return Gl(e),t=Nc(n,e,t,l,void 0,i),l=_c(),n!==null&&!xe?(Rc(n,e,i),Wt(n,e,i)):(Yn&&l&&gu(e),e.flags|=1,Ae(n,e,t,i),e.child)}function pd(n,e,t,l,i,r){return Gl(e),e.updateQueue=null,t=Sh(e,l,t,i),Eh(n),l=_c(),n!==null&&!xe?(Rc(n,e,r),Wt(n,e,r)):(Yn&&l&&gu(e),e.flags|=1,Ae(n,e,t,r),e.child)}function xd(n,e,t,l,i){if(Gl(e),e.stateNode===null){var r=hi,o=t.contextType;typeof o=="object"&&o!==null&&(r=ze(o)),r=new t(l,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xc,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=l,r.state=e.memoizedState,r.refs={},pc(e),o=t.contextType,r.context=typeof o=="object"&&o!==null?ze(o):hi,r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qc(e,t,o,l),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Xc.enqueueReplaceState(r,r.state,null),vr(e,l,r,i),gr(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){r=e.stateNode;var y=e.memoizedProps,T=Il(t,y);r.props=T;var R=r.context,H=t.contextType;o=hi,typeof H=="object"&&H!==null&&(o=ze(H));var X=t.getDerivedStateFromProps;H=typeof X=="function"||typeof r.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,H||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(y||R!==o)&&rd(e,r,l,o),sl=!1;var N=e.memoizedState;r.state=N,vr(e,l,r,i),gr(),R=e.memoizedState,y||N!==R||sl?(typeof X=="function"&&(Qc(e,t,X,l),R=e.memoizedState),(T=sl||id(e,t,T,l,N,R,o))?(H||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=R),r.props=l,r.state=R,r.context=o,l=T):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{r=e.stateNode,xc(n,e),o=e.memoizedProps,H=Il(t,o),r.props=H,X=e.pendingProps,N=r.context,R=t.contextType,T=hi,typeof R=="object"&&R!==null&&(T=ze(R)),y=t.getDerivedStateFromProps,(R=typeof y=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==X||N!==T)&&rd(e,r,l,T),sl=!1,N=e.memoizedState,r.state=N,vr(e,l,r,i),gr();var D=e.memoizedState;o!==X||N!==D||sl||n!==null&&n.dependencies!==null&&xu(n.dependencies)?(typeof y=="function"&&(Qc(e,t,y,l),D=e.memoizedState),(H=sl||id(e,t,H,l,N,D,T)||n!==null&&n.dependencies!==null&&xu(n.dependencies))?(R||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,D,T),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,D,T)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===n.memoizedProps&&N===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&N===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=D),r.props=l,r.state=D,r.context=T,l=H):(typeof r.componentDidUpdate!="function"||o===n.memoizedProps&&N===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&N===n.memoizedState||(e.flags|=1024),l=!1)}return r=l,Ti(n,e),l=(e.flags&128)!==0,r||l?(r=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,n!==null&&l?(e.child=Zl(e,n.child,null,i),e.child=Zl(e,null,t,i)):Ae(n,e,t,i),e.memoizedState=r.state,n=e.child):n=Wt(n,e,i),n}function Ed(n,e,t,l){return Bl(),e.flags|=256,Ae(n,e,t,l),e.child}var Fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ic(n){return{baseLanes:n,cachePool:oh()}}function Jc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=rt),n}function Sd(n,e,t){var l=e.pendingProps,i=!1,r=(e.flags&128)!==0,o;if((o=r)||(o=n!==null&&n.memoizedState===null?!1:(He.current&2)!==0),o&&(i=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,n===null){if(Yn){if(i?yl(e):gl(),(n=ue)?(n=Xm(n,dt),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ul!==null?{id:Ct,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},t=nh(n),t.return=e,e.child=t,Ne=e,ue=null)):n=null,n===null)throw cl(e);return Jo(n)?e.lanes=32:e.lanes=536870912,null}return r=l.children,l=l.fallback,i?(gl(),i=e.mode,r=Yu({mode:"hidden",children:r},i),l=jl(l,i,t,null),r.return=e,l.return=e,r.sibling=l,e.child=r,l=e.child,l.memoizedState=Ic(t),l.childLanes=Jc(n,o,t),e.memoizedState=Fc,Tr(null,l)):(yl(e),$c(e,r))}var y=n.memoizedState;if(y!==null){var T=y.dehydrated;if(T!==null)return d1(n,e,r,o,l,T,y,t)}return i?(gl(),i=l.fallback,r=e.mode,y=n.child,T=y.sibling,l=Zt(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&1206910976,T!==null?i=Zt(T,i):(i=jl(i,r,t,null),i.flags|=2),i.return=e,l.return=e,l.sibling=i,e.child=l,Tr(null,l),l=e.child,i=n.child.memoizedState,i===null?i=Ic(t):(r=i.cachePool,r!==null?(y=ve._currentValue,r=r.parent!==y?{parent:y,pool:y}:r):r=oh(),i={baseLanes:i.baseLanes|t,cachePool:r}),l.memoizedState=i,l.childLanes=Jc(n,o,t),e.memoizedState=Fc,Tr(n.child,l)):(yl(e),t=n.child,n=t.sibling,t=Zt(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,n!==null&&(o=e.deletions,o===null?(e.deletions=[n],e.flags|=16):o.push(n)),e.child=t,e.memoizedState=null,t)}function $c(n,e){return e=Yu({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Yu(n,e){return n=Ie(22,n,null,e),n.lanes=0,n}function Lu(n,e,t){return Zl(e,n.child,null,t),n=$c(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function d1(n,e,t,l,i,r,o,y){if(t)return e.flags&256?(yl(e),e.flags&=-257,Lu(n,e,y)):e.memoizedState!==null?(gl(),e.child=n.child,e.flags|=128,null):(gl(),r=i.fallback,o=e.mode,i=Yu({mode:"visible",children:i.children},o),r=jl(r,o,y,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,Zl(e,n.child,null,y),i=e.child,i.memoizedState=Ic(y),i.childLanes=Jc(n,l,y),e.memoizedState=Fc,Tr(null,i));if(yl(e),Jo(r)){if(l=r.nextSibling&&r.nextSibling.dataset,l)var T=l.dgst;return l=T,l!==""&&(i=Error(f(419)),i.stack="",i.digest=l,fr({value:i,source:null,stack:null})),Lu(n,e,y)}if(xe||Ll(n,e,y,!1),l=(y&n.childLanes)!==0,xe||l){if(ml.current!==null)return Lu(n,e,y);if(l=re,l!==null&&(i=ls(l,y),i!==0&&i!==o.retryLane))throw o.retryLane=i,ql(n,i),We(l,n,i),Kc;return Io(r)||ia(),Lu(n,e,y)}return Io(r)?(e.flags|=192,e.child=n.child,null):(n=o.treeContext,ue=yt(r.nextSibling),Ne=e,Yn=!0,al=null,dt=!1,n!==null&&lh(e,n),e=$c(e,i.children),e.flags|=134221824,e)}function Td(n,e,t){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),pu(n.return,e,t)}function bd(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&Nu(t)===null&&(e=n),n=n.sibling}return e}function Gu(n,e,t,l,i,r){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i,treeForkCount:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=t,o.tailMode=i,o.treeForkCount=r)}function kc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function Wc(n,e,t){var l=e.pendingProps,i=l.revealOrder,r=l.tail;l=l.children;var o=He.current;if(e.flags&128)return pr(e,o),null;var y=(o&2)!==0;if(y?(o=o&1|2,e.flags|=128):o&=1,pr(e,o),i==="backwards"&&n!==null?(kc(n),Ae(n,e,l,t),kc(n)):Ae(n,e,l,t),l=Yn?or:0,!y&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Td(n,t,e);else if(n.tag===19)Td(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"backwards":t=bd(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null,kc(e)),Gu(e,!0,i,null,r,l);break;case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Nu(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Gu(e,!0,t,null,r,l);break;case"together":Gu(e,!1,null,null,void 0,l);break;case"independent":e.memoizedState=null;break;default:t=bd(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Gu(e,!1,i,t,r,l)}return e.child}function Ad(n,e,t){var l=e.pendingProps;return ol(e,e.type,l.value),Ae(n,e,l.children,t),e.child}function Wt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),El|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(Ll(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(f(153));if(e.child!==null){for(n=e.child,t=Zt(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Zt(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Pc(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&xu(n)))}function m1(n,e,t){switch(e.tag){case 3:xt(e,e.stateNode.containerInfo),ol(e,ve,n.memoizedState.cache),Bl();break;case 27:case 5:Nt(e);break;case 4:xt(e,e.stateNode.containerInfo);break;case 10:ol(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ac(e),null;break;case 13:var l=e.memoizedState;if(l!==null){if(l.dehydrated!==null)return yl(e),e.flags|=128,null;l=Ll(n,e,t,!1);var i=e.child.childLanes;return l||(t&i)!==0?Sd(n,e,t):(yl(e),n=Wt(n,e,t),n!==null?n.sibling:null)}yl(e);break;case 19:if(e.flags&128)return Wc(n,e,t);if(i=(n.flags&128)!==0,l=(t&e.childLanes)!==0,l||(Ll(n,e,t,!1),l=(t&e.childLanes)!==0),i){if(l)return Wc(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pr(e,He.current),l)break;return null;case 22:return e.lanes=0,yd(n,e,t,e.pendingProps);case 24:ol(e,ve,n.memoizedState.cache)}return Wt(n,e,t)}function Md(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)xe=!0;else{if(!Pc(n,t)&&(e.flags&128)===0)return xe=!1,m1(n,e,t);xe=(n.flags&131072)!==0}else xe=!1,Yn&&(e.flags&1048576)!==0&&th(e,or,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=Vl(e.elementType),e.type=n,typeof n=="function")uc(n)?(l=Il(n,l),e.tag=1,e=xd(null,e,n,l,t)):(e.tag=0,e=Zc(null,e,n,l,t));else{if(n!=null){var i=n.$$typeof;if(i===q){e.tag=11,e=hd(null,e,n,l,t);break n}else if(i===$){e.tag=14,e=dd(null,e,n,l,t);break n}else if(i===Qn){e.tag=10,e.type=n,e=Ad(null,e,t);break n}}throw e=wn(n)||n,Error(f(306,e,""))}}return e;case 0:return Zc(n,e,e.type,e.pendingProps,t);case 1:return l=e.type,i=Il(l,e.pendingProps),xd(n,e,l,i,t);case 3:n:{if(xt(e,e.stateNode.containerInfo),n===null)throw Error(f(387));l=e.pendingProps;var r=e.memoizedState;i=r.element,xc(n,e),vr(e,l,null,t);var o=e.memoizedState;if(l=o.cache,ol(e,ve,l),l!==r.cache&&dc(e,[ve],t,!0),gr(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Ed(n,e,l,t);break n}else if(l!==i){i=ft(Error(f(424)),e),fr(i),e=Ed(n,e,l,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ue=yt(n.firstChild),Ne=e,Yn=!0,al=null,dt=!0,t=yh(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Bl(),l===i){e=Wt(n,e,t);break n}Ae(n,e,l,t)}e=e.child}return e;case 26:return Ti(n,e),n===null?(t=$m(e.type,null,e.pendingProps,null))?e.memoizedState=t:Yn||(e.stateNode=Rm(e.type,e.pendingProps,Be.current,e)):e.memoizedState=$m(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Nt(e),n===null&&Yn&&(l=e.stateNode=Zm(e.type,e.pendingProps,Be.current),Ne=e,dt=!0,i=ue,Al(e.type)?($o=i,ue=yt(l.firstChild)):ue=i),Ae(n,e,e.pendingProps.children,t),Ti(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Yn&&((i=l=ue)&&(l=cv(l,e.type,e.pendingProps,dt),l!==null?(e.stateNode=l,Ne=e,ue=yt(l.firstChild),dt=!1,i=!0):i=!1),i||cl(e)),Nt(e),i=e.type,r=e.pendingProps,o=n!==null?n.memoizedProps:null,l=r.children,Go(i,r)?l=null:o!==null&&Go(i,o)&&(e.flags|=32),e.memoizedState!==null&&(i=Nc(n,e,l1,null,null,t),Li._currentValue=i),Ti(n,e),Ae(n,e,l,t),e.child;case 6:return n===null&&Yn&&((n=t=ue)&&(t=ov(t,e.pendingProps,dt),t!==null?(e.stateNode=t,Ne=e,ue=null,n=!0):n=!1),n||cl(e)),null;case 13:return Sd(n,e,t);case 4:return xt(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=Zl(e,null,l,t):Ae(n,e,l,t),e.child;case 11:return hd(n,e,e.type,e.pendingProps,t);case 7:return l=e.pendingProps,Ti(n,e),Ae(n,e,l,t),e.child;case 8:return Ae(n,e,e.pendingProps.children,t),e.child;case 12:return Ae(n,e,e.pendingProps.children,t),e.child;case 10:return Ad(n,e,t);case 9:return i=e.type._context,l=e.pendingProps.children,Gl(e),i=ze(i),l=l(i),e.flags|=1,Ae(n,e,l,t),e.child;case 14:return dd(n,e,e.type,e.pendingProps,t);case 15:return md(n,e,e.type,e.pendingProps,t);case 19:return Wc(n,e,t);case 31:return h1(n,e,t);case 22:return yd(n,e,t,e.pendingProps);case 24:return Gl(e),l=ze(ve),n===null?(i=gc(),i===null&&(i=re,r=mc(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=t),i=r),e.memoizedState={parent:l,cache:i},pc(e),ol(e,ve,i)):((n.lanes&t)!==0&&(xc(n,e),vr(e,null,null,t),gr()),i=n.memoizedState,r=e.memoizedState,i.parent!==l?(i={parent:l,cache:l},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),ol(e,ve,l)):(l=r.cache,ol(e,ve,l),l!==i.cache&&dc(e,[ve],t,!0))),Ae(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=e.pendingProps,l.name!=null&&l.name!=="auto"?e.flags|=n===null?18882560:18874368:Yn&&gu(e),n!==null&&n.memoizedProps.name!==l.name?e.flags|=4194816:Ti(n,e),Ae(n,e,l.children,t),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Pt(n){n.flags|=4}function no(n,e,t,l,i){var r;if((r=(n.mode&32)!==0)&&(r=t===null?ny(e,l):ny(e,l)&&(l.src!==t.src||l.srcSet!==t.srcSet)),r){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(um())n.flags|=8192;else throw Kl=bu,vc}else n.flags&=-16777217}function Od(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ey(e))if(um())n.flags|=8192;else throw Kl=bu,vc}function Qu(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?ns():536870912,n.lanes|=e,Ni|=e)}function br(n,e){if(!Yn)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function ae(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&1206910976,l|=i.flags&1206910976,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=l,n.childLanes=t,e}function y1(n,e,t){var l=e.pendingProps;switch(oc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(e),null;case 1:return ae(e),null;case 3:return t=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Jt(ve),Te(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(yi(e)?Pt(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,sc())),ae(e),null;case 26:var i=e.type,r=e.memoizedState;return n===null?(Pt(e),r!==null?(ae(e),Od(e,r)):(ae(e),no(e,i,null,l,t))):r?r!==n.memoizedState?(Pt(e),ae(e),Od(e,r)):(ae(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&Pt(e),ae(e),no(e,i,n,l,t)),null;case 27:if(nn(e),t=Be.current,i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Pt(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return ae(e),e.subtreeFlags&=-33554433,null}n=me.current,yi(e)?ih(e):(n=Zm(i,l,t),e.stateNode=n,Pt(e))}return ae(e),e.subtreeFlags&=-33554433,null;case 5:if(nn(e),i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Pt(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return ae(e),e.subtreeFlags&=-33554433,null}if(r=me.current,yi(e))ih(e);else{var o=Hr(Be.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?o.createElement(i,{is:l.is}):o.createElement(i)}}r[De]=e,r[Fe]=l;n:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break n;for(;o.sibling===null;){if(o.return===null||o.return===e)break n;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=r;n:switch(qe(r,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&Pt(e)}}return ae(e),e.subtreeFlags&=-33554433,no(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&Pt(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(n=Be.current,yi(e)){if(n=e.stateNode,t=e.memoizedProps,l=null,i=Ne,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}n[De]=e,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Mm(n.nodeValue,t)),n||cl(e,!0)}else n=Hr(n).createTextNode(l),n[De]=e,e.stateNode=n}return ae(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(l=yi(e),t!==null){if(n===null){if(!l)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(557));n[De]=e}else Bl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ae(e),n=!1}else t=sc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(tt(e),e):(tt(e),null);if((e.flags&128)!==0)throw Error(f(558))}return ae(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=yi(e),l!==null&&l.dehydrated!==null){if(n===null){if(!i)throw Error(f(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[De]=e}else Bl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ae(e),i=!1}else i=sc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(tt(e),e):(tt(e),null)}return tt(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=e.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==i&&(l.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),Qu(e,e.updateQueue),ae(e),null);case 4:return Te(),n===null&&qo(e.stateNode.containerInfo),e.flags|=67108864,ae(e),null;case 10:return Jt(e.type),ae(e),null;case 19:if(Mc(e),l=e.memoizedState,l===null)return ae(e),null;if(i=(e.flags&128)!==0,r=l.rendering,r===null)if(i)br(l,!1);else{if(de!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(r=Nu(n),r!==null){for(e.flags|=128,br(l,!1),n=r.updateQueue,e.updateQueue=n,Qu(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Ps(t,n),t=t.sibling;return pr(e,He.current&1|2),Yn&&Ft(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&Z()>na&&(e.flags|=128,i=!0,br(l,!1),e.lanes=4194304)}else{if(!i)if(n=Nu(r),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,Qu(e,n),br(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!r.alternate&&!Yn)return ae(e),null}else 2*Z()-l.renderingStartTime>na&&t!==536870912&&(e.flags|=128,i=!0,br(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(n=l.last,n!==null?n.sibling=r:e.child=r,l.last=r)}if(l.tail!==null){n=l.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Z(),n.sibling=null,r=He.current,r=i?r&1|2:r&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!t||Yn?pr(e,r):(t=r,Zn(we,e),Zn(He,t),Ye===null&&(Ye=e)),Yn&&Ft(e,l.treeForkCount),n}return ae(e),null;case 22:case 23:return tt(e),bc(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(ae(e),e.subtreeFlags&6&&(e.flags|=8192)):ae(e),t=e.updateQueue,t!==null&&Qu(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),n!==null&&Kn(Xl),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Jt(ve),ae(e),null;case 25:return null;case 30:return e.flags|=33554432,ae(e),null}throw Error(f(156,e.tag))}function g1(n,e){switch(oc(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Jt(ve),Te(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return nn(e),null;case 31:if(e.memoizedState!==null){if(tt(e),e.alternate===null)throw Error(f(340));Bl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(tt(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Bl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Mc(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return Te(),null;case 10:return Jt(e.type),null;case 22:case 23:return tt(e),bc(),n!==null&&Kn(Xl),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Jt(ve),null;case 25:return null;default:return null}}function Nd(n,e){switch(oc(e),e.tag){case 3:Jt(ve),Te();break;case 26:case 27:case 5:nn(e);break;case 4:Te();break;case 31:e.memoizedState!==null&&tt(e);break;case 13:tt(e);break;case 19:Mc(e);break;case 10:Jt(e.type);break;case 22:case 23:tt(e),bc(),n!==null&&Kn(Xl);break;case 24:Jt(ve)}}function Ar(n,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var i=l.next;t=i;do{if((t.tag&n)===n){l=void 0;var r=t.create,o=t.inst;l=r(),o.destroy=l}t=t.next}while(t!==i)}}catch(y){ne(e,e.return,y)}}function vl(n,e,t){try{var l=e.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var r=i.next;l=r;do{if((l.tag&n)===n){var o=l.inst,y=o.destroy;if(y!==void 0){o.destroy=void 0,i=e;var T=t,R=y;try{R()}catch(H){ne(i,T,H)}}}l=l.next}while(l!==r)}}catch(H){ne(e,e.return,H)}}function _d(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{vh(e,t)}catch(l){ne(n,n.return,l)}}}function Rd(n,e,t){t.props=Il(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){ne(n,e,l)}}function zt(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:var i=n.stateNode,r=Vt(n.memoizedProps,i);(i.ref===null||i.ref.name!==r)&&(i.ref=qm(r)),l=i.ref;break;case 7:if(n.stateNode===null){var o=new at(n);g(n.child,!1,uv,o,void 0,void 0),n.stateNode=o}l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(y){ne(n,e,y)}}function Ue(n,e){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(i){ne(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){ne(n,e,i)}else t.current=null}function Xu(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Qm(n.stateNode,e[t])}function Cd(n){for(var e=n.return;e!==null&&(to(e)&&Qm(n.stateNode,e.stateNode),!eo(e));)e=e.return}function Mr(n){for(var e=n.return;e!==null&&(to(e)&&av(n.stateNode,e.stateNode),!eo(e));)e=e.return}function eo(n){return n.tag===5||n.tag===3||n.tag===27}function to(n){return n&&n.tag===7&&n.stateNode!==null}function lo(n){var e=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(i){ne(n,n.return,i)}}function io(n,e,t){try{var l=n.stateNode;Q1(l,n.type,t,e),l[Fe]=e}catch(i){ne(n,n.return,i)}}function Dd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Al(n.type)||n.tag===4}function ro(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Dd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Al(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uo(n,e,t,l){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(i),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Rt)),Xu(n,l),$n=!0;else if(i!==4&&(i===27&&(Xu(n,l),l=null,Al(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(uo(n,e,t,l),n=n.sibling;n!==null;)uo(n,e,t,l),n=n.sibling}function Vu(n,e,t,l){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?t.insertBefore(i,e):t.appendChild(i),Xu(n,l),$n=!0;else if(i!==4&&(i===27&&(Xu(n,l),l=null,Al(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(Vu(n,e,t,l),n=n.sibling;n!==null;)Vu(n,e,t,l),n=n.sibling}function zd(n){var e=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);qe(e,l,t),e[De]=n,e[Fe]=t}catch(r){ne(n,n.return,r)}}var Ku=!1,lt=null;function wd(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(Ku=!0)}var wt=null;function Hd(){var n=wt;return wt=null,n}var Je=0;function bi(n,e,t,l,i){return Je=0,Ud(n.child,e,t,l,i)}function Ud(n,e,t,l,i){for(var r=!1;n!==null;){if(n.tag===5){var o=n.stateNode;if(l!==null){var y=Vo(o);l.push(y),y.view&&(r=!0)}else r||Vo(o).view&&(r=!0);Ku=!0,Hm(o,Je===0?e:e+"_"+Je,t),Je++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||Ud(n.child,e,t,l,i)&&(r=!0));n=n.sibling}return r}function Ht(n,e){for(;n!==null;)n.tag===5?Um(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||Ht(n.child,e)),n=n.sibling}function Zu(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Zu(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(f(544));var t=e.name;e=Kt(e.default,e.share),e!=="none"&&(bi(n,t,e,null,!1)||Ht(n.child,!1))}n=n.sibling}}function ao(n,e){if(n.tag===30){var t=n.stateNode,l=n.memoizedProps,i=Vt(l,t),r=Kt(l.default,t.paired?l.share:l.enter);r!=="none"?bi(n,i,r,null,!1)?(Zu(n),t.paired||e||Di(n,l.onEnter)):Ht(n.child,!1):Zu(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)ao(n,e),n=n.sibling;else Zu(n)}function co(n){if(lt!==null&&lt.size!==0){var e=lt;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,l=t.name;if(l!=null&&l!=="auto"){var i=e.get(l);if(i!==void 0){var r=Kt(t.default,t.share);if(r!=="none"&&(bi(n,l,r,null,!1)?(r=n.stateNode,i.paired=r,r.paired=i,Di(n,t.onShare)):Ht(n.child,!1)),e.delete(l),e.size===0)break}}}co(n)}n=n.sibling}}}function oo(n){if(n.tag===30){var e=n.memoizedProps,t=Vt(e,n.stateNode),l=lt!==null?lt.get(t):void 0,i=Kt(e.default,l!==void 0?e.share:e.exit);i!=="none"&&(bi(n,t,i,null,!1)?l!==void 0?(i=n.stateNode,l.paired=i,i.paired=l,lt.delete(t),Di(n,e.onShare)):Di(n,e.onExit):Ht(n.child,!1)),lt!==null&&co(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)oo(n),n=n.sibling;else lt!==null&&co(n)}function qd(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=Vt(e,n.stateNode);e=Kt(e.default,e.update),n.flags&=-5,e!=="none"&&bi(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&qd(n);n=n.sibling}}function fo(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,Ht(n.child,!1))}fo(n)}n=n.sibling}}function Fu(n){if(n.tag===30)n.stateNode.paired=null,Ht(n.child,!1),fo(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Fu(n),n=n.sibling;else fo(n)}function jd(n){for(n=n.child;n!==null;)n.tag===30?Ht(n.child,!1):(n.subtreeFlags&33554432)!==0&&jd(n),n=n.sibling}function so(n,e,t,l,i,r,o){for(var y=!1;e!==null;){if(e.tag===5){var T=e.stateNode;if(r!==null&&Je<r.length){var R=r[Je],H=Vo(T);(R.view||H.view)&&(y=!0);var X;if(X=(n.flags&4)===0)if(H.clip)X=!0;else{X=R.rect;var N=H.rect;X=X.y!==N.y||X.x!==N.x||X.height!==N.height||X.width!==N.width}X&&(n.flags|=4),H.abs?H=!R.abs:(R=R.rect,H=H.rect,H=R.height!==H.height||R.width!==H.width),H&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Hm(T,Je===0?t:t+"_"+Je,i),y&&(n.flags&4)!==0||(wt===null&&(wt=[]),wt.push(T,Je===0?l:l+"_"+Je,e.memoizedProps)),Je++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o?n.flags|=e.flags&32:so(n,e.child,t,l,i,r,o)&&(y=!0));e=e.sibling}return y}function Bd(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,l=n.stateNode,i=Vt(t,l),r=Kt(t.default,t.update),o;o=n.memoizedState,n.memoizedState=null,l=n;var y=n.child;Je=0,i=so(l,y,i,i,r,o,!1),(n.flags&4)!==0&&i&&Di(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&Bd(n);n=n.sibling}}var _e=!1,Wn=!1,Ut=!1,ho=!1,Yd=typeof WeakSet=="function"?WeakSet:Set,Re=null,qt=!1,Or=!1,Iu=!1,mo=!1;function v1(n,e,t){if(n=n.containerInfo,Yo=Gi,n=Xs(n),Pa(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else n:{l=(l=n.ownerDocument)&&l.defaultView||window;var i=l.getSelection&&l.getSelection();if(i&&i.rangeCount!==0){l=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break n}var y=0,T=-1,R=-1,H=0,X=0,N=n,D=null;e:for(;;){for(var ln;N!==l||r!==0&&N.nodeType!==3||(T=y+r),N!==o||i!==0&&N.nodeType!==3||(R=y+i),N.nodeType===3&&(y+=N.nodeValue.length),(ln=N.firstChild)!==null;)D=N,N=ln;for(;;){if(N===n)break e;if(D===l&&++H===r&&(T=y),D===o&&++X===i&&(R=y),(ln=N.nextSibling)!==null)break;N=D,D=N.parentNode}N=ln}l=T===-1||R===-1?null:{start:T,end:R}}else l=null}l=l||{start:0,end:0}}else l=null;for(Lo={focusedElem:n,selectionRange:l},Gi=!1,t=(t&335544064)===t,Re=e,e=t?9270:1024;Re!==null;){if(n=Re,t&&(l=n.deletions,l!==null))for(r=0;r<l.length;r++)t&&oo(l[r]);if(n.alternate===null&&(n.flags&2)!==0)t&&wd(n),Ju(t);else{if(n.tag===22){if(l=n.alternate,n.memoizedState!==null){l!==null&&l.memoizedState===null&&t&&oo(l),Ju(t);continue}else if(l!==null&&l.memoizedState!==null){t&&wd(n),Ju(t);continue}}l=n.child,(n.subtreeFlags&e)!==0&&l!==null?(l.return=n,Re=l):(t&&qd(n),Ju(t))}}lt=null}function Ju(n){for(;Re!==null;){var e=Re,t=n,l=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&l!==null){t=void 0,i=l.memoizedProps,l=l.memoizedState;var r=e.stateNode;try{var o=Il(e.type,i);t=r.getSnapshotBeforeUpdate(o,l),r.__reactInternalSnapshotBeforeUpdate=t}catch(y){ne(e,e.return,y)}}break;case 3:if((i&1024)!==0){if(l=e.stateNode.containerInfo,t=l.nodeType,t===9)Fo(l);else if(t===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Fo(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&l!==null&&(t=Vt(l.memoizedProps,l.stateNode),i=e.memoizedProps,i=Kt(i.default,i.update),i!=="none"&&bi(l,t,i,l.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(f(163))}if(l=e.sibling,l!==null){l.return=e.return,Re=l;break}Re=e.return}}function Ld(n,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:jt(n,t),l&4&&Ar(5,t);break;case 1:if(jt(n,t),l&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(o){ne(t,t.return,o)}else{var i=Il(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(o){ne(t,t.return,o)}}l&64&&_d(t),l&512&&zt(t,t.return);break;case 3:if(jt(n,t),l&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{vh(n,e)}catch(o){ne(t,t.return,o)}}break;case 27:e===null&&l&4&&zd(t);case 26:case 5:jt(n,t),e===null&&l&4&&lo(t),l&512&&zt(t,t.return);break;case 12:jt(n,t);break;case 31:jt(n,t),l&4&&Vd(n,t);break;case 13:jt(n,t),l&4&&Kd(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=R1.bind(null,t),fv(n,t))));break;case 22:if(l=t.memoizedState!==null||_e,!l){var r=e!==null&&e.memoizedState!==null||Wn;e=_e,i=Wn,_e=l,(Wn=r)&&!i?(l=2,(t.subtreeFlags&8772)!==0&&(l|=1),At(n,t,l)):jt(n,t),_e=e,Wn=i}break;case 30:jt(n,t),l&512&&zt(t,t.return);break;case 7:l&512&&zt(t,t.return);default:jt(n,t)}}function yo(n,e){for(n=n.child;n!==null;)Gd(n,e),n=n.sibling}function Gd(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var l=t.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var i=n.stateNode,r=n.memoizedProps.style,o=r!=null&&r.hasOwnProperty("display")?r.display:null;i.style.display=o==null||typeof o=="boolean"?"":(""+o).trim()}}catch(T){ne(n,n.return,T)}go(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,$n=!0}catch(T){ne(n,n.return,T)}break;case 18:try{var y=n.stateNode;e?wm(y,!0):wm(n.stateNode,!1)}catch(T){ne(n,n.return,T)}break;case 22:case 23:n.memoizedState===null&&yo(n,e);break;default:yo(n,e)}}function go(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,l=e;switch(t.tag){case 4:Gd(t,l);break n;case 22:t.memoizedState===null&&go(t,l);break n;default:go(t,l)}}n=n.sibling}}function Qd(n){var e=n.alternate;e!==null&&(n.alternate=null,Qd(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&nu(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var oe=null,$e=!1;function Tt(n,e,t){for(t=t.child;t!==null;)Xd(n,e,t),t=t.sibling}function Xd(n,e,t){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Et,t)}catch{}switch(t.tag){case 26:Wn||Ue(t,e),Tt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Wn&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Wn||Ue(t,e),Mr(t);var l=oe,i=$e;Al(t.type)&&(oe=t.stateNode,$e=!1),Tt(n,e,t),Fm(t.stateNode,t.type,t.memoizedProps),oe=l,$e=i;break;case 5:Wn||Ue(t,e),Mr(t);case 6:if(t.tag===6&&Mr(t),l=oe,i=$e,oe=null,Tt(n,e,t),oe=l,$e=i,oe!==null)if($e)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(t.stateNode),$n=!0}catch(r){ne(t,e,r)}else try{oe.removeChild(t.stateNode),$n=!0}catch(r){ne(t,e,r)}break;case 18:oe!==null&&($e?(n=oe,zm(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Qi(n)):zm(oe,t.stateNode));break;case 4:l=oe,i=$e,oe=t.stateNode.containerInfo,$e=!0,Tt(n,e,t),oe=l,$e=i;break;case 0:case 11:case 14:case 15:vl(2,t,e),Wn||vl(4,t,e),Tt(n,e,t);break;case 1:Wn||(Ue(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Rd(t,e,l)),Tt(n,e,t);break;case 21:Tt(n,e,t);break;case 22:Wn=(l=Wn)||t.memoizedState!==null,Tt(n,e,t),Wn=l;break;case 30:Ue(t,e),Tt(n,e,t);break;case 7:Wn||Ue(t,e),Tt(n,e,t);break;default:Tt(n,e,t)}}function Vd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Qi(n)}catch(t){ne(e,e.return,t)}}}function Kd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Qi(n)}catch(t){ne(e,e.return,t)}}function p1(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Yd),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Yd),e;default:throw Error(f(435,n.tag))}}function $u(n,e){var t=p1(n);e.forEach(function(l){if(!t.has(l)){t.add(l);var i=C1.bind(null,n,l);l.then(i,i)}})}function Ve(n,e,t){var l=e.deletions;if(l!==null)for(var i=0;i<l.length;i++){var r=l[i],o=n,y=e,T=y;n:for(;T!==null;){switch(T.tag){case 27:if(Al(T.type)){oe=T.stateNode,$e=!1;break n}break;case 5:oe=T.stateNode,$e=!1;break n;case 3:case 4:oe=T.stateNode.containerInfo,$e=!0;break n}T=T.return}if(oe===null)throw Error(f(160));Xd(o,y,r),oe=null,$e=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Zd(e,n,t),e=e.sibling}var bt=null;function Zd(n,e,t){var l=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(i&4&&(l=n.updateQueue,l=l!==null?l.events:null,l!==null))for(var r=0;r<l.length;r++){var o=l[r];o.ref.impl=o.nextImpl}Ve(e,n,t),Ke(n),i&4&&(vl(3,n,n.return),Ar(3,n),vl(5,n,n.return));break;case 1:Ve(e,n,t),Ke(n),i&512&&(Wn||l===null||Ue(l,l.return)),i&64&&_e&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(r=bt,Ve(e,n,t),Ke(n),i&512&&(Wn||l===null||Ue(l,l.return)),i&4)if(i=l!==null?l.memoizedState:null,t=n.memoizedState,l===null)if(t===null)if(n.stateNode===null)if(_e)n.stateNode=Rm(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,i=r.ownerDocument||r;e:switch(e){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Wi]||l[De]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(e),i.head.insertBefore(l,i.querySelector("head > title"))),qe(l,e,t),l[De]=n,Oe(l),e=l;break n;case"link":if(r=Pm("link","href",i).get(e+(t.href||""))){for(o=0;o<r.length;o++)if(l=r[o],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){r.splice(o,1);break e}}l=i.createElement(e),qe(l,e,t),i.head.appendChild(l);break;case"meta":if(r=Pm("meta","content",i).get(e+(t.content||""))){for(o=0;o<r.length;o++)if(l=r[o],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){r.splice(o,1);break e}}l=i.createElement(e),qe(l,e,t),i.head.appendChild(l);break;default:throw Error(f(468,e))}l[De]=n,Oe(l),e=l}n.stateNode=e}else _e||nf(r,n.type,n.stateNode);else n.stateNode=Wm(r,t,n.memoizedProps);else i!==t?(i===null?(e=l.stateNode,e===null||Wn||e.parentNode.removeChild(e)):i.count--,t===null?_e||nf(r,n.type,n.stateNode):Wm(r,t,n.memoizedProps)):t===null&&n.stateNode!==null&&io(n,n.memoizedProps,l.memoizedProps);break;case 27:Ve(e,n,t),Ke(n),i&512&&(Wn||l===null||Ue(l,l.return)),l!==null&&i&4&&io(n,n.memoizedProps,l.memoizedProps);break;case 5:if(r=Ut,Ut=!1,Ve(e,n,t),Ut=r,Ke(n),i&512&&(Wn||l===null||Ue(l,l.return)),n.flags&32){e=n.stateNode;try{ri(e,""),$n=!0}catch(H){ne(n,n.return,H)}}i&4&&n.stateNode!=null&&(e=n.memoizedProps,io(n,e,l!==null?l.memoizedProps:e)),i&1024&&(ho=!0);break;case 6:if(Ve(e,n,t),Ke(n),i&4){if(n.stateNode===null)throw Error(f(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,$n=!0}catch(H){ne(n,n.return,H)}}break;case 3:if($n=!1,sa=null,r=bt,bt=Ur(e.containerInfo),Ve(e,n,t),bt=r,Ke(n),i&4&&l!==null&&l.memoizedState.isDehydrated)try{Qi(e.containerInfo)}catch(H){ne(n,n.return,H)}ho&&(ho=!1,Fd(n)),$n=!1;break;case 4:i=Ut,Ut=_e,l=ds(),r=bt,bt=Ur(n.stateNode.containerInfo),Ve(e,n,t),Ke(n),bt=r,$n&&Or&&(Iu=!0),$n=l,Ut=i;break;case 12:Ve(e,n,t),Ke(n);break;case 31:Ve(e,n,t),Ke(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,$u(n,e)));break;case 13:Ve(e,n,t),Ke(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Pu=Z()),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,$u(n,e)));break;case 22:r=n.memoizedState!==null,o=l!==null&&l.memoizedState!==null;var y=_e,T=Wn,R=Ut;_e=y||r,Ut=R||r,Wn=T||o,Ve(e,n,t),Wn=T,Ut=R,_e=y,Ke(n),i&8192&&(e=n.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||l===null||o||_e||Wn||(e=o||Wn,t=_e,l=Wn,_e=r||_e,Wn=e,pl(n,2),_e=t,Wn=l),!r&&Ut||yo(n,r)),i&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,$u(n,t))));break;case 19:Ve(e,n,t),Ke(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,$u(n,e)));break;case 30:i&512&&(Wn||l===null||Ue(l,l.return)),i=ds(),r=Or,o=(t&335544064)===t,y=n.memoizedProps,Or=o&&Kt(y.default,y.update)!=="none",Ve(e,n,t),Ke(n),o&&l!==null&&$n&&(n.flags|=4),Or=r,$n=i;break;case 21:break;case 7:i&512&&(Wn||l===null||Ue(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=n);default:Ve(e,n,t),Ke(n)}}function Ke(n){var e=n.flags;if(e&2){try{for(var t,l=n.return;l!==null;){if(Dd(l)){t=l;break}l=l.return}l=null;for(var i=n.return;i!==null;){if(to(i)){var r=i.stateNode;l===null?l=[r]:l.push(r)}if(eo(i))break;i=i.return}var o=l;if(t==null)throw Error(f(160));switch(t.tag){case 27:var y=t.stateNode,T=ro(n);Vu(n,T,y,o);break;case 5:var R=t.stateNode;t.flags&32&&(ri(R,""),t.flags&=-33);var H=ro(n);Vu(n,H,R,o);break;case 3:case 4:var X=t.stateNode.containerInfo,N=ro(n);uo(n,N,X,o);break;default:throw Error(f(161))}}catch(D){ne(n,n.return,D)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Fd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Fd(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Gi=!0,e.reset(),Gi=!1),n=n.sibling}}function Ai(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Id(e,n),e=e.sibling;else Bd(e)}function Id(n,e){var t=n.alternate;if(t===null)ao(n,!1);else switch(n.tag){case 3:if(mo=qt=!1,Hd(),Ai(e,n),!qt&&!Iu){if(n=wt,n!==null)for(var l=0;l<n.length;l+=3){t=n[l];var i=n[l+1];Um(t,n[l+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),mo=!0}wt=null;break;case 5:Ai(e,n);break;case 4:l=qt,qt=!1,Ai(e,n),qt&&(Iu=!0),qt=l;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?ao(n,!1):Ai(e,n));break;case 30:l=qt,i=Hd(),qt=!1,Ai(e,n),qt&&(n.flags|=4);var r=n.memoizedProps,o=n.stateNode;e=Vt(r,o),o=Vt(t.memoizedProps,o);var y=Kt(r.default,r.update);y==="none"?e=!1:(r=t.memoizedState,t.memoizedState=null,t=n.child,Je=0,e=so(n,t,e,o,y,r,!0),Je!==(r===null?0:r.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(Di(n,n.memoizedProps.onUpdate),wt=i):i!==null&&(i.push.apply(i,wt),wt=i),qt=(n.flags&32)!==0?!0:l;break;default:Ai(e,n)}}function jt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ld(n,e.alternate,e),e=e.sibling}function pl(n,e){for(n=n.child;n!==null;){var t=n,l=e;switch(t.tag){case 0:case 11:case 14:case 15:vl(4,t,t.return),pl(t,l);break;case 1:Ue(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Rd(t,t.return,i),pl(t,l);break;case 27:(l&2)!==0&&Fm(t.stateNode,t.type,t.memoizedProps);case 5:Ue(t,t.return),t.tag!==5&&t.tag!==27||Mr(t),pl(t,l);break;case 6:Mr(t);break;case 26:Ue(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||Wn||i.parentNode.removeChild(i),pl(t,l);break;case 22:t.memoizedState===null&&pl(t,l);break;case 30:Ue(t,t.return),pl(t,l);break;case 7:Ue(t,t.return);default:pl(t,l)}n=n.sibling}}function At(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var l=e.alternate,i=n,r=e,o=r.flags,y=(t&1)!==0;switch(r.tag){case 0:case 11:case 15:At(i,r,t),Ar(4,r);break;case 1:if(At(i,r,t),l=r,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(H){ne(l,l.return,H)}if(l=r,i=l.updateQueue,i!==null){var T=l.stateNode;try{var R=i.shared.hiddenCallbacks;if(R!==null)for(i.shared.hiddenCallbacks=null,i=0;i<R.length;i++)gh(R[i],T)}catch(H){ne(l,l.return,H)}}y&&o&64&&_d(r),zt(r,r.return);break;case 27:(t&2)!==0&&zd(r);case 5:r.tag!==5&&r.tag!==27||Cd(r),At(i,r,t),y&&l===null&&o&4&&lo(r),zt(r,r.return);break;case 6:Cd(r);break;case 26:T=r.stateNode,r.memoizedState!==null||T===null||_e||nf(Ur(T.ownerDocument),r.type,T),At(i,r,t),y&&l===null&&o&4&&lo(r),zt(r,r.return);break;case 12:At(i,r,t);break;case 31:At(i,r,t),y&&o&4&&Vd(i,r);break;case 13:At(i,r,t),y&&o&4&&Kd(i,r);break;case 22:r.memoizedState===null&&At(i,r,t),zt(r,r.return);break;case 30:At(i,r,t),zt(r,r.return);break;case 7:zt(r,r.return);default:At(i,r,t)}e=e.sibling}}function vo(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&sr(t))}function po(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&sr(n))}function mt(n,e,t,l){var i=(t&335544064)===t;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)Jd(n,e,t,l),e=e.sibling;else i&&jd(e)}function Jd(n,e,t,l){var i=(t&335544064)===t;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Fu(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:mt(n,e,t,l),r&2048&&Ar(9,e);break;case 1:mt(n,e,t,l);break;case 3:mt(n,e,t,l),i&&mo&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&sr(r)));break;case 12:if(r&2048){mt(n,e,t,l),r=e.stateNode;try{var o=e.memoizedProps,y=o.id,T=o.onPostCommit;typeof T=="function"&&T(y,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(R){ne(e,e.return,R)}}else mt(n,e,t,l);break;case 31:mt(n,e,t,l);break;case 13:mt(n,e,t,l);break;case 23:break;case 22:o=e.stateNode,y=e.alternate,e.memoizedState!==null?(i&&y!==null&&y.memoizedState===null&&Fu(y),o._visibility&2?mt(n,e,t,l):Nr(n,e)):(i&&y!==null&&y.memoizedState!==null&&Fu(e),o._visibility&2?mt(n,e,t,l):(o._visibility|=2,Mi(n,e,t,l,(e.subtreeFlags&10256)!==0||!1))),r&2048&&vo(y,e);break;case 24:mt(n,e,t,l),r&2048&&po(e.alternate,e);break;case 30:i&&(r=e.alternate,r!==null&&(Ht(r.child,!0),Ht(e.child,!0))),mt(n,e,t,l);break;default:mt(n,e,t,l)}}function Mi(n,e,t,l,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=n,o=e,y=t,T=l,R=o.flags;switch(o.tag){case 0:case 11:case 15:Mi(r,o,y,T,i),Ar(8,o);break;case 23:break;case 22:var H=o.stateNode;o.memoizedState!==null?H._visibility&2?Mi(r,o,y,T,i):Nr(r,o):(H._visibility|=2,Mi(r,o,y,T,i)),i&&R&2048&&vo(o.alternate,o);break;case 24:Mi(r,o,y,T,i),i&&R&2048&&po(o.alternate,o);break;default:Mi(r,o,y,T,i)}e=e.sibling}}function Nr(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,l=e,i=l.flags;switch(l.tag){case 22:Nr(t,l),i&2048&&vo(l.alternate,l);break;case 24:Nr(t,l),i&2048&&po(l.alternate,l);break;default:Nr(t,l)}e=e.sibling}}var Jl=8192;function $l(n,e,t){if(n.subtreeFlags&Jl)for(n=n.child;n!==null;)$d(n,e,t),n=n.sibling}function $d(n,e,t){switch(n.tag){case 26:$l(n,e,t),n.flags&Jl&&(n.memoizedState!==null?Av(t,bt,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&ly(t,n)));break;case 5:$l(n,e,t),n.flags&Jl&&(n=n.stateNode,(e&335544128)===e&&ly(t,n));break;case 3:case 4:var l=bt;bt=Ur(n.stateNode.containerInfo),$l(n,e,t),bt=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=Jl,Jl=16777216,$l(n,e,t),Jl=l):$l(n,e,t));break;case 30:if((n.flags&Jl)!==0&&(l=n.memoizedProps.name,l!=null&&l!=="auto")){var i=n.stateNode;i.paired=null,lt===null&&(lt=new Map),lt.set(l,i)}$l(n,e,t);break;default:$l(n,e,t)}}function kd(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function _r(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Re=l,Pd(l,n)}kd(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wd(n),n=n.sibling}function Wd(n){switch(n.tag){case 0:case 11:case 15:_r(n),n.flags&2048&&vl(9,n,n.return);break;case 3:_r(n);break;case 12:_r(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,ku(n)):_r(n);break;default:_r(n)}}function ku(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Re=l,Pd(l,n)}kd(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:vl(8,e,e.return),ku(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,ku(e));break;default:ku(e)}n=n.sibling}}function Pd(n,e){for(;Re!==null;){var t=Re;switch(t.tag){case 0:case 11:case 15:vl(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sr(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Re=l;else n:for(t=n;Re!==null;){l=Re;var i=l.sibling,r=l.return;if(Qd(l),l===t){Re=null;break n}if(i!==null){i.return=r,Re=i;break n}Re=r}}}var x1={getCacheForType:function(n){var e=ze(ve),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return ze(ve).controller.signal}},E1=typeof WeakMap=="function"?WeakMap:Map,kn=0,re=null,Ln=null,Xn=0,Pn=0,it=null,xl=!1,Oi=!1,xo=!1,nl=0,de=0,El=0,kl=0,Wu=0,rt=0,Ni=0,Rr=null,ke=null,Eo=!1,Pu=0,nm=0,na=1/0,ea=null,Sl=null,se=0,Mt=null,Wl=null,Bt=0,So=0,To=null,em=null,_i=null,Ri=null,Ci=null,Cr=0,ta=null;function ut(){return(kn&2)!==0&&Xn!==0?Xn&-Xn:rn.T!==null?zo():is()}function tm(){if(rt===0)if((Xn&536870912)===0||Yn){var n=$r;$r<<=1,($r&3932160)===0&&($r=262144),rt=n}else rt=536870912;return n=we.current,n!==null&&(n.flags|=32),rt}function Di(n,e){if(e!=null){var t=n.stateNode,l=t.ref;l===null&&(l=t.ref=qm(Vt(n.memoizedProps,t))),Ri===null&&(Ri=[]),Ri.push(e.bind(null,l))}}function We(n,e,t){(n===re&&(Pn===2||Pn===9)||n.cancelPendingCommit!==null)&&(zi(n,0),Tl(n,Xn,rt,!1)),ki(n,t),((kn&2)===0||n!==re)&&(n===re&&((kn&2)===0&&(kl|=t),de===4&&Tl(n,Xn,rt,!1)),Yt(n))}function lm(n,e,t){if((kn&6)!==0)throw Error(f(327));var l=!t&&(e&127)===0&&(e&n.expiredLanes)===0||$i(n,e),i=l?b1(n,e):Ao(n,e,!0),r=l;do{if(i===0){Oi&&!l&&Tl(n,e,0,!1);break}else{if(t=n.current.alternate,r&&!S1(t)){i=Ao(n,e,!1),r=!1;continue}if(i===2){if(r=e,n.errorRecoveryDisabledLanes&r)var o=0;else o=n.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;n:{var y=n;i=Rr;var T=y.current.memoizedState.isDehydrated;if(T&&(zi(y,o).flags|=256),o=Ao(y,o,!1),o!==2&&o!==6){if(xo&&!T){y.errorRecoveryDisabledLanes|=r,kl|=r,i=4;break n}r=ke,ke=i,r!==null&&(ke===null?ke=r:ke.push.apply(ke,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){zi(n,0),Tl(n,e,0,!0);break}n:{switch(l=n,r=i,r){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Tl(l,e,rt,!xl);break n;case 2:ke=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(i=Pu+300-Z(),10<i)){if(Tl(l,e,rt,!xl),Wr(l,0,!0)!==0)break n;Bt=e,l.timeoutHandle=Xo(im.bind(null,l,t,ke,ea,Eo,e,rt,kl,Ni,xl,r,"Throttled",-0,0),i);break n}im(l,t,ke,ea,Eo,e,rt,kl,Ni,xl,r,null,-0,0)}}break}while(!0);Yt(n)}function im(n,e,t,l,i,r,o,y,T,R,H,X,N,D){n.timeoutHandle=-1;var ln=e.subtreeFlags,gn=(r&335544064)===r;if(X=null,(gn||ln&8192||(ln&16785408)===16785408)&&(X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},lt=null,$d(e,r,X),gn&&(ln=X,gn=n.containerInfo,gn=(gn.nodeType===9?gn:gn.ownerDocument).__reactViewTransition,gn!=null&&(ln.count++,ln.waitingForViewTransition=!0,ln=Br.bind(ln),gn.finished.then(ln,ln))),ln=(r&62914560)===r?Pu-Z():(r&4194048)===r?nm-Z():0,ln=Mv(X,ln),ln!==null)){Bt=r,n.cancelPendingCommit=ln(hm.bind(null,n,e,r,t,l,i,o,y,T,R,H,X,null,N,D)),Tl(n,r,o,!R);return}hm(n,e,r,t,l,i,o,y,T,R,H,X)}function S1(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var i=t[l],r=i.getSnapshot;i=i.value;try{if(!et(r(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tl(n,e,t,l){e=Pf(n,e),e&=~Wu,e&=~kl,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var i=e;0<i;){var r=31-Pe(i),o=1<<r;l[r]=-1,i&=~o}t!==0&&es(n,t,e)}function la(){return(kn&6)===0?(Dr(0),!1):!0}function bo(){if(Ln!==null){if(Pn===0)var n=Ln.return;else n=Ln,It=Yl=null,Cc(n),pi=null,mr=0,n=Ln;for(;n!==null;)Nd(n.alternate,n),n=n.return;Ln=null}}function zi(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,K1(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Bt=0,bo(),re=n,Ln=t=Zt(n.current,null),Xn=e,Pn=0,it=null,xl=!1,Oi=$i(n,e),xo=!1,Ni=rt=Wu=kl=El=de=0,ke=Rr=null,Eo=!1,nl=Pf(n,e),su(),t}function rm(n,e){Hn=null,rn.H=qu,e===vi||e===Tu?(e=hh(),Pn=3):e===vc?(e=hh(),Pn=4):Pn=e===Kc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,it=e,Ln===null&&(de=1,ju(n,ft(e,n.current)))}function um(){var n=we.current;return n===null?!0:(Xn&4194048)===Xn?Ye===null:(Xn&62914560)===Xn||(Xn&536870912)!==0?n===Ye:!1}function am(){var n=rn.H;return rn.H=qu,n===null?qu:n}function cm(){var n=rn.A;return rn.A=x1,n}function ia(){de=4,xl||(Xn&4194048)!==Xn&&we.current!==null||(Oi=!0),(El&134217727)===0&&(kl&134217727)===0||re===null||Tl(re,Xn,rt,!1)}function Ao(n,e,t){var l=kn;kn|=2;var i=am(),r=cm();(re!==n||Xn!==e)&&(ea=null,zi(n,e)),e=!1;var o=de;n:do try{if(Pn!==0&&Ln!==null){var y=Ln,T=it;switch(Pn){case 8:bo(),o=6;break n;case 3:case 2:case 9:case 6:we.current===null&&(e=!0);var R=Pn;if(Pn=0,it=null,wi(n,y,T,R),t&&Oi){o=0;break n}break;default:R=Pn,Pn=0,it=null,wi(n,y,T,R)}}T1(),o=de;break}catch(H){rm(n,H)}while(!0);return e&&n.shellSuspendCounter++,It=Yl=null,kn=l,rn.H=i,rn.A=r,Ln===null&&(re=null,Xn=0,su()),o}function T1(){for(;Ln!==null;)om(Ln)}function b1(n,e){var t=kn;kn|=2;var l=am(),i=cm();re!==n||Xn!==e?(ea=null,na=Z()+500,zi(n,e)):Oi=$i(n,e);n:do try{if(Pn!==0&&Ln!==null){e=Ln;var r=it;e:switch(Pn){case 1:Pn=0,it=null,wi(n,e,r,1);break;case 2:case 9:if(fh(r)){Pn=0,it=null,fm(e);break}e=function(){Pn!==2&&Pn!==9||re!==n||(Pn=7),Yt(n)},r.then(e,e);break n;case 3:Pn=7;break n;case 4:Pn=5;break n;case 7:fh(r)?(Pn=0,it=null,fm(e)):(Pn=0,it=null,wi(n,e,r,7));break;case 5:var o=null;switch(Ln.tag){case 26:o=Ln.memoizedState;case 5:case 27:var y=Ln;if(o?ey(o):y.stateNode.complete){Pn=0,it=null;var T=y.sibling;if(T!==null)Ln=T;else{var R=y.return;R!==null?(Ln=R,ra(R)):Ln=null}break e}}Pn=0,it=null,wi(n,e,r,5);break;case 6:Pn=0,it=null,wi(n,e,r,6);break;case 8:bo(),de=6;break n;default:throw Error(f(462))}}A1();break}catch(H){rm(n,H)}while(!0);return It=Yl=null,rn.H=l,rn.A=i,kn=t,Ln!==null?0:(re=null,Xn=0,su(),de)}function A1(){for(;Ln!==null&&!F();)om(Ln)}function om(n){var e=Md(n.alternate,n,nl);n.memoizedProps=n.pendingProps,e===null?ra(n):Ln=e}function fm(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=pd(t,e,e.pendingProps,e.type,void 0,Xn);break;case 11:e=pd(t,e,e.pendingProps,e.type.render,e.ref,Xn);break;case 5:Cc(e);var l=e;l===Ne&&(Yn?(vu(l),l.tag===5&&l.stateNode!=null&&(ue=l.stateNode)):(vu(l),Yn=!0));default:Nd(t,e),e=Ln=Ps(e,nl),e=Md(t,e,nl)}n.memoizedProps=n.pendingProps,e===null?ra(n):Ln=e}function wi(n,e,t,l){It=Yl=null,Cc(e),pi=null,mr=0;var i=e.return;try{if(s1(n,i,e,t,Xn)){de=1,ju(n,ft(t,n.current)),Ln=null;return}}catch(r){if(i!==null)throw Ln=i,r;de=1,ju(n,ft(t,n.current)),Ln=null;return}e.flags&32768?(Yn||l===1?n=!0:Oi||(Xn&536870912)!==0?n=!1:(xl=n=!0,(l===2||l===9||l===3||l===6)&&(l=we.current,l!==null&&l.tag===13&&(l.flags|=16384))),sm(e,n)):ra(e)}function ra(n){var e=n;do{if((e.flags&32768)!==0){sm(e,xl);return}n=e.return;var t=y1(e.alternate,e,nl);if(t!==null){Ln=t;return}if(e=e.sibling,e!==null){Ln=e;return}Ln=e=n}while(e!==null);de===0&&(de=5)}function sm(n,e){do{var t=g1(n.alternate,n);if(t!==null){t.flags&=32767,Ln=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Ln=n;return}Ln=n=t}while(n!==null);de=6,Ln=null}function hm(n,e,t,l,i,r,o,y,T,R,H,X){n.cancelPendingCommit=null;do ua();while(se!==0);if((kn&6)!==0)throw Error(f(327));if(e!==null){if(e===n.current)throw Error(f(177));n===re&&(Ln=re=null,Xn=0),Wl=e,Mt=n,Bt=t,To=i,em=l,M1(n,e,t,o,y,T,X)}}function M1(n,e,t,l,i,r,o){var y=e.lanes|e.childLanes;if(So=y,y|=ic,k0(n,t,y,l,i,r),Ri=null,(t&335544064)===t?(Ci=Pg(n),l=10262):(Ci=null,l=10256),(e.subtreeFlags&l)!==0||(e.flags&l)!==0?(n.callbackNode=null,n.callbackPriority=0,D1(Sn,function(){return _o(),null})):(n.callbackNode=null,n.callbackPriority=0),Ku=!1,l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=rn.T,rn.T=null,i=En.p,En.p=2,r=kn,kn|=4;try{v1(n,e,t)}finally{kn=r,En.p=i,rn.T=l}}se=1,Ku?_i=k1(o,n.containerInfo,Ci,Mo,Oo,N1,No,_o,O1):(Mo(),Oo(),No())}function O1(n){if(se!==0){var e=Mt.onRecoverableError;e(n,{componentStack:null})}}function N1(){se===3&&(se=0,Id(Wl,Mt),se=4)}function Mo(){if(se===1){se=0;var n=Mt,e=Wl,t=Bt,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=rn.T,rn.T=null;var i=En.p;En.p=2;var r=kn;kn|=4;try{Or=Iu=!1,Zd(e,n,t),t=Lo;var o=Xs(n.containerInfo),y=t.focusedElem,T=t.selectionRange;if(o!==y&&y&&y.ownerDocument&&Qs(y.ownerDocument.documentElement,y)){if(T!==null&&Pa(y)){var R=T.start,H=T.end;if(H===void 0&&(H=R),"selectionStart"in y)y.selectionStart=R,y.selectionEnd=Math.min(H,y.value.length);else{var X=y.ownerDocument||document,N=X&&X.defaultView||window;if(N.getSelection){var D=N.getSelection(),ln=y.textContent.length,gn=Math.min(T.start,ln),Un=T.end===void 0?gn:Math.min(T.end,ln);!D.extend&&gn>Un&&(o=Un,Un=gn,gn=o);var _=Gs(y,gn),A=Gs(y,Un);if(_&&A&&(D.rangeCount!==1||D.anchorNode!==_.node||D.anchorOffset!==_.offset||D.focusNode!==A.node||D.focusOffset!==A.offset)){var C=X.createRange();C.setStart(_.node,_.offset),D.removeAllRanges(),gn>Un?(D.addRange(C),D.extend(A.node,A.offset)):(C.setEnd(A.node,A.offset),D.addRange(C))}}}}for(X=[],D=y;D=D.parentNode;)D.nodeType===1&&X.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<X.length;y++){var L=X[y];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Gi=!!Yo,Lo=Yo=null}finally{kn=r,En.p=i,rn.T=l}}n.current=e,se=2}}function Oo(){if(se===2){se=0;var n=Mt,e=Wl,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=rn.T,rn.T=null;var l=En.p;En.p=2;var i=kn;kn|=4;try{Ld(n,e.alternate,e)}finally{kn=i,En.p=l,rn.T=t}}se=3}}function No(){if(se===4||se===3){se=0;var n=_i;_i=null,J();var e=Mt,t=Wl,l=Bt,i=em,r=(l&335544064)===l?10262:10256;if((t.subtreeFlags&r)!==0||(t.flags&r)!==0?se=5:(se=0,Wl=Mt=null,dm(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(Sl=null),Ua(l),t=t.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Et,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=rn.T,r=En.p,En.p=2,rn.T=null;try{for(var o=e.onRecoverableError,y=0;y<i.length;y++){var T=i[y];o(T.value,{componentStack:T.stack})}}finally{rn.T=t,En.p=r}}if(i=Ri,o=Ci,Ci=null,i!==null&&(Ri=null,o===null&&(o=[]),n!==null))for(T=0;T<i.length;T++)t=(0,i[T])(o),t!==void 0&&n.finished.finally(t);(Bt&3)!==0&&ua(),Yt(e),r=e.pendingLanes,(l&261930)!==0&&(r&42)!==0?e===ta?Cr++:(Cr=0,ta=e):(Cr=0,ta=null),Dr(0)}}function dm(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,sr(e)))}function ua(){return _i!==null&&(_i.skipTransition(),_i=null),Mo(),Oo(),No(),_o()}function _o(){if(se!==5)return!1;var n=Mt,e=So;So=0;var t=Ua(Bt),l=rn.T,i=En.p;try{En.p=32>t?32:t,rn.T=null,t=To,To=null;var r=Mt,o=Bt;if(se=0,Wl=Mt=null,Bt=0,(kn&6)!==0)throw Error(f(331));var y=kn;if(kn|=4,Wd(r.current),Jd(r,r.current,o,t),kn=y,Dr(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Et,r)}catch{}return!0}finally{En.p=i,rn.T=l,dm(n,e)}}function mm(n,e,t){e=ft(t,e),e=Vc(n.stateNode,e,2),n=dl(n,e,2),n!==null&&(ki(n,2),Yt(n))}function ne(n,e,t){if(n.tag===3)mm(n,n,t);else for(;e!==null;){if(e.tag===3){mm(e,n,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sl===null||!Sl.has(l))){n=ft(t,n),t=fd(2),l=dl(e,t,2),l!==null&&(sd(t,l,e,n),ki(l,2),Yt(l));break}}e=e.return}}function Ro(n,e,t){var l=n.pingCache;if(l===null){l=n.pingCache=new E1;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(t)||(xo=!0,i.add(t),n=_1.bind(null,n,e,t),e.then(n,n))}function _1(n,e,t){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,re===n&&(Xn&t)===t&&((de===4||de===3&&(Xn&62914560)===Xn&&300>Z()-Pu)&&(kn&2)===0?zi(n,0):Wu|=t,Ni===Xn&&(Ni=0)),Yt(n)}function ym(n,e){e===0&&(e=ns()),n=ql(n,e),n!==null&&(ki(n,e),Yt(n))}function R1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ym(n,t)}function C1(n,e){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),ym(n,t)}function D1(n,e){return w(n,e)}var Hi=null,Ui=null,Co=!1,aa=!1,Do=!1,bl=0;function Yt(n){n!==Ui&&n.next===null&&(Ui===null?Hi=Ui=n:Ui=Ui.next=n),aa=!0,Co||(Co=!0,w1())}function Dr(n,e){if(!Do&&aa){Do=!0;do for(var t=!1,l=Hi;l!==null;){if(n!==0){var i=l.pendingLanes;if(i===0)var r=0;else{var o=l.suspendedLanes,y=l.pingedLanes;r=(1<<31-Pe(42|n)+1)-1,r&=i&~(o&~y),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,xm(l,r))}else r=Xn,r=Wr(l,l===re?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||$i(l,r)||(t=!0,xm(l,r));l=l.next}while(t);Do=!1}}function z1(){gm()}function gm(){aa=Co=!1;var n=0;bl!==0&&V1()&&(n=bl);for(var e=Z(),t=null,l=Hi;l!==null;){var i=l.next,r=vm(l,e);r===0?(l.next=null,t===null?Hi=i:t.next=i,i===null&&(Ui=t)):(t=l,(n!==0||(r&3)!==0)&&(aa=!0)),l=i}se!==0&&se!==5||Dr(n),bl!==0&&(bl=0)}function vm(n,e){for(var t=n.suspendedLanes,l=n.pingedLanes,i=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var o=31-Pe(r),y=1<<o,T=i[o];T===-1?((y&t)===0||(y&l)!==0)&&(i[o]=$0(y,e)):T<=e&&(n.expiredLanes|=y),r&=~y}if(e=re,t=Xn,t=Wr(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===e&&(Pn===2||Pn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&j(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||$i(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(l!==null&&j(l),Ua(t)){case 2:case 8:t=dn;break;case 32:t=Sn;break;case 268435456:t=Rn;break;default:t=Sn}return l=pm.bind(null,n),t=w(t,l),n.callbackPriority=e,n.callbackNode=t,e}return l!==null&&l!==null&&j(l),n.callbackPriority=2,n.callbackNode=null,2}function pm(n,e){if(se!==0&&se!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(ua()&&n.callbackNode!==t)return null;var l=Xn;return l=Wr(n,n===re?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(lm(n,l,e),vm(n,Z()),n.callbackNode!=null&&n.callbackNode===t?pm.bind(null,n):null)}function xm(n,e){if(ua())return null;lm(n,e,!0)}function w1(){Z1(function(){(kn&6)!==0?w(k,z1):gm()})}function zo(){if(bl===0){var n=Ql;n===0&&(n=Jr,Jr<<=1,(Jr&261888)===0&&(Jr=256)),bl=n}return bl}function Em(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:lu(n)}function H1(n,e,t,l,i){if(e==="submit"&&t&&t.stateNode===i){var r=Em((i[Fe]||null).action),o=l.submitter;o&&(e=(e=o[Fe]||null)?Em(e.formAction):o.getAttribute("formAction"),e!==null&&(r=e,o=null));var y=new au("action","action",null,l,i);n.push({event:y,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(bl!==0){var T=new FormData(i,o);Yc(t,{pending:!0,data:T,method:i.method,action:r},null,T)}}else typeof r=="function"&&(y.preventDefault(),T=new FormData(i,o),Yc(t,{pending:!0,data:T,method:i.method,action:r},r,T))},currentTarget:i}]})}}for(var wo=0;wo<lc.length;wo++){var Ho=lc[wo],U1=Ho.toLowerCase(),q1=Ho[0].toUpperCase()+Ho.slice(1);St(U1,"on"+q1)}St(Zs,"onAnimationEnd"),St(Fs,"onAnimationIteration"),St(Is,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(Kg,"onTransitionRun"),St(Zg,"onTransitionStart"),St(Fg,"onTransitionCancel"),St(Js,"onTransitionEnd"),li("onMouseEnter",["mouseout","mouseover"]),li("onMouseLeave",["mouseout","mouseover"]),li("onPointerEnter",["pointerout","pointerover"]),li("onPointerLeave",["pointerout","pointerover"]),wl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wl("onBeforeInput",["compositionend","keypress","textInput","paste"]),wl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zr));function Sm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],i=l.event;l=l.listeners;n:{var r=void 0;if(e)for(var o=l.length-1;0<=o;o--){var y=l[o],T=y.instance,R=y.currentTarget;if(y=y.listener,T!==r&&i.isPropagationStopped())break n;r=y,i.currentTarget=R;try{r(i)}catch(H){fu(H)}i.currentTarget=null,r=T}else for(o=0;o<l.length;o++){if(y=l[o],T=y.instance,R=y.currentTarget,y=y.listener,T!==r&&i.isPropagationStopped())break n;r=y,i.currentTarget=R;try{r(i)}catch(H){fu(H)}i.currentTarget=null,r=T}}}}function Gn(n,e){var t=e[us];t===void 0&&(t=e[us]=new Set);var l=n+"__bubble";t.has(l)||(Tm(e,n,2,!1),t.add(l))}function Uo(n,e,t){var l=0;e&&(l|=4),Tm(t,n,l,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function qo(n){if(!n[ca]){n[ca]=!0,os.forEach(function(t){t!=="selectionchange"&&(j1.has(t)||Uo(t,!1,n),Uo(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ca]||(e[ca]=!0,Uo("selectionchange",!1,e))}}function Tm(n,e,t,l){switch(sy(e)){case 2:var i=Rv;break;case 8:i=Cv;break;default:i=tf}t=i.bind(null,e,t,n),i=void 0,!Xa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function jo(n,e,t,l,i){var r=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var y=l.stateNode.containerInfo;if(y===i)break;if(o===4)for(o=l.return;o!==null;){var T=o.tag;if((T===3||T===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;y!==null;){if(o=zl(y),o===null)return;if(T=o.tag,T===5||T===6||T===26||T===27){l=r=o;continue n}y=y.parentNode}}l=l.return}Ts(function(){var R=r,H=Ga(t),X=[];n:{var N=$s.get(n);if(N!==void 0){var D=au,ln=n;switch(n){case"keypress":if(ru(t)===0)break n;case"keydown":case"keyup":D=Sg;break;case"focusin":ln="focus",D=Fa;break;case"focusout":ln="blur",D=Fa;break;case"beforeblur":case"afterblur":D=Fa;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Og;break;case Zs:case Fs:case Is:D=hg;break;case Js:D=_g;break;case"scroll":case"scrollend":D=ag;break;case"wheel":D=Cg;break;case"copy":case"cut":case"paste":D=mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Ns;break;case"submit":D=Ag;break;case"toggle":case"beforetoggle":D=zg}var gn=(e&4)!==0,Un=!gn&&(n==="scroll"||n==="scrollend"),_=gn?N!==null?N+"Capture":null:N;gn=[];for(var A=R,C;A!==null;){var L=A;if(C=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||C===null||_===null||(L=nr(A,_),L!=null&&gn.push(wr(A,L,C))),Un)break;A=A.return}0<gn.length&&(N=new D(N,ln,null,t,H),X.push({event:N,listeners:gn}))}}if((e&7)===0){n:{if(D=n==="mouseover"||n==="pointerover",N=n==="mouseout"||n==="pointerout",D&&t!==La&&(ln=t.relatedTarget||t.fromElement)&&(zl(ln)||ln[ni]))break n;(N||D)&&(ln=H.window===H?H:(D=H.ownerDocument)?D.defaultView||D.parentWindow:window,N?(D=t.relatedTarget||t.toElement,N=R,D=D?zl(D):null,D!==null&&(Un=m(D),gn=D.tag,D!==Un||gn!==5&&gn!==27&&gn!==6)&&(D=null)):(N=null,D=R),N!==D&&(gn=Ms,L="onMouseLeave",_="onMouseEnter",A="mouse",(n==="pointerout"||n==="pointerover")&&(gn=Ns,L="onPointerLeave",_="onPointerEnter",A="pointer"),Un=N==null?ln:Pi(N),C=D==null?ln:Pi(D),ln=new gn(L,A+"leave",N,t,H),ln.target=Un,ln.relatedTarget=C,L=null,zl(H)===R&&(gn=new gn(_,A+"enter",D,t,H),gn.target=C,gn.relatedTarget=Un,L=gn),Un=L,gn=N&&D?Jn(N,D,B1):null,N!==null&&bm(X,ln,N,gn,!1),D!==null&&Un!==null&&bm(X,Un,D,gn,!0)))}n:{if(N=R?Pi(R):window,D=N.nodeName&&N.nodeName.toLowerCase(),D==="select"||D==="input"&&N.type==="file")var fn=Us;else if(ws(N))if(qs)fn=Qg;else{fn=Lg;var Vn=Yg}else D=N.nodeName,!D||D.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?R&&Ya(R.elementType)&&(fn=Us):fn=Gg;if(fn&&(fn=fn(n,R))){Hs(X,fn,t,H);break n}Vn&&Vn(n,N,R)}switch(Vn=R?Pi(R):window,n){case"focusin":(ws(Vn)||Vn.contentEditable==="true")&&(oi=Vn,nc=R,cr=null);break;case"focusout":cr=nc=oi=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Vs(X,t,H);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":Vs(X,t,H)}var xn;if(Ja)n:{switch(n){case"compositionstart":var On="onCompositionStart";break n;case"compositionend":On="onCompositionEnd";break n;case"compositionupdate":On="onCompositionUpdate";break n}On=void 0}else ci?Ds(n,t)&&(On="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(On="onCompositionStart");On&&(_s&&t.locale!=="ko"&&(ci||On!=="onCompositionStart"?On==="onCompositionEnd"&&ci&&(xn=bs()):(il=H,Va="value"in il?il.value:il.textContent,ci=!0)),Vn=oa(R,On),0<Vn.length&&(On=new Os(On,n,null,t,H),X.push({event:On,listeners:Vn}),xn?On.data=xn:(xn=zs(t),xn!==null&&(On.data=xn)))),(xn=Hg?Ug(n,t):qg(n,t))&&(On=oa(R,"onBeforeInput"),0<On.length&&(Vn=new Os("onBeforeInput","beforeinput",null,t,H),X.push({event:Vn,listeners:On}),Vn.data=xn)),H1(X,n,R,t,H)}Sm(X,e)})}function wr(n,e,t){return{instance:n,listener:e,currentTarget:t}}function oa(n,e){for(var t=e+"Capture",l=[];n!==null;){var i=n,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=nr(n,t),i!=null&&l.unshift(wr(n,i,r)),i=nr(n,e),i!=null&&l.push(wr(n,i,r))),n.tag===3)return l;n=n.return}return[]}function B1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function bm(n,e,t,l,i){for(var r=e._reactName,o=[];t!==null&&t!==l;){var y=t,T=y.alternate,R=y.stateNode;if(y=y.tag,T!==null&&T===l)break;y!==5&&y!==26&&y!==27||R===null||(T=R,i?(R=nr(t,r),R!=null&&o.unshift(wr(t,R,T))):i||(R=nr(t,r),R!=null&&o.push(wr(t,R,T)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Y1=/\r\n?/g,L1=/\u0000|\uFFFD/g;function Am(n){return(typeof n=="string"?n:""+n).replace(Y1,`
`).replace(L1,"")}function Mm(n,e){return e=Am(e),Am(n)===e}function ee(n,e,t,l,i,r){switch(t){case"children":if(typeof l=="string")e==="body"||e==="textarea"&&l===""||ri(n,l);else if(typeof l=="number"||typeof l=="bigint")e!=="body"&&ri(n,""+l);else return;break;case"className":tu(n,"class",l);break;case"tabIndex":tu(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":tu(n,t,l);break;case"style":Es(n,l,r);return;case"data":if(e!=="object"){tu(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=lu(l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(e!=="input"&&ee(n,e,"name",i.name,i,null),ee(n,e,"formEncType",i.formEncType,i,null),ee(n,e,"formMethod",i.formMethod,i,null),ee(n,e,"formTarget",i.formTarget,i,null)):(ee(n,e,"encType",i.encType,i,null),ee(n,e,"method",i.method,i,null),ee(n,e,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=lu(l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=Rt);return;case"onScroll":l!=null&&Gn("scroll",n);return;case"onScrollEnd":l!=null&&Gn("scrollend",n);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(f(60));(r!=null?r.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=lu(l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":Gn("beforetoggle",n),Gn("toggle",n),eu(n,"popover",l);break;case"xlinkActuate":Qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":eu(n,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=rg.get(t)||t,eu(n,t,l);else return}$n=!0}function Bo(n,e,t,l,i,r){switch(t){case"style":Es(n,l,r);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(f(60));(r!=null?r.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"children":if(typeof l=="string")ri(n,l);else if(typeof l=="number"||typeof l=="bigint")ri(n,""+l);else return;break;case"onScroll":l!=null&&Gn("scroll",n);return;case"onScrollEnd":l!=null&&Gn("scrollend",n);return;case"onClick":l!=null&&(n.onclick=Rt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!fs.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),r=t.slice(2,i?t.length-7:void 0),e=n[Fe]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(r,e,i),typeof l=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(r,l,i);break n}$n=!0,t in n?n[t]=l:l===!0?n.setAttribute(t,""):eu(n,t,l)}return}$n=!0}function qe(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Gn("error",n),Gn("load",n);var l=!1,i=!1,r;for(r in t)if(t.hasOwnProperty(r)){var o=t[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ee(n,e,r,o,t,null)}}i&&ee(n,e,"srcSet",t.srcSet,t,null),l&&ee(n,e,"src",t.src,t,null);return;case"input":Gn("invalid",n);var y=r=o=i=null,T=null,R=null;for(l in t)if(t.hasOwnProperty(l)){var H=t[l];if(H!=null)switch(l){case"name":i=H;break;case"type":o=H;break;case"checked":T=H;break;case"defaultChecked":R=H;break;case"value":r=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(f(137,e));break;default:ee(n,e,l,H,t,null)}}gs(n,r,y,T,R,o,i,!1);return;case"select":Gn("invalid",n),l=o=r=null;for(i in t)if(t.hasOwnProperty(i)&&(y=t[i],y!=null))switch(i){case"value":r=y;break;case"defaultValue":o=y;break;case"multiple":l=y;default:ee(n,e,i,y,t,null)}e=r,t=o,n.multiple=!!l,e!=null?ii(n,!!l,e,!1):t!=null&&ii(n,!!l,t,!0);return;case"textarea":Gn("invalid",n),r=i=l=null;for(o in t)if(t.hasOwnProperty(o)&&(y=t[o],y!=null))switch(o){case"value":l=y;break;case"defaultValue":i=y;break;case"children":r=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(91));break;default:ee(n,e,o,y,t,null)}ps(n,l,i,r);return;case"option":for(T in t)if(t.hasOwnProperty(T)&&(l=t[T],l!=null))switch(T){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ee(n,e,T,l,t,null)}return;case"dialog":Gn("beforetoggle",n),Gn("toggle",n),Gn("cancel",n),Gn("close",n);break;case"iframe":case"object":Gn("load",n);break;case"video":case"audio":for(l=0;l<zr.length;l++)Gn(zr[l],n);break;case"image":Gn("error",n),Gn("load",n);break;case"details":Gn("toggle",n);break;case"embed":case"source":case"link":Gn("error",n),Gn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in t)if(t.hasOwnProperty(R)&&(l=t[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ee(n,e,R,l,t,null)}return;default:if(Ya(e)){for(H in t)t.hasOwnProperty(H)&&(l=t[H],l!==void 0&&Bo(n,e,H,l,t,void 0));return}}for(y in t)t.hasOwnProperty(y)&&(l=t[y],l!=null&&ee(n,e,y,l,t,null))}var G1={};function Q1(n,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,y=null,T=null,R=null,H=null;for(D in t){var X=t[D];if(t.hasOwnProperty(D)&&X!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":T=X;default:l.hasOwnProperty(D)||ee(n,e,D,null,l,X)}}for(var N in l){var D=l[N];if(X=t[N],l.hasOwnProperty(N)&&(D!=null||X!=null))switch(N){case"type":D!==X&&($n=!0),r=D;break;case"name":D!==X&&($n=!0),i=D;break;case"checked":D!==X&&($n=!0),R=D;break;case"defaultChecked":D!==X&&($n=!0),H=D;break;case"value":D!==X&&($n=!0),o=D;break;case"defaultValue":D!==X&&($n=!0),y=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(f(137,e));break;default:D!==X&&ee(n,e,N,D,l,X)}}ja(n,o,y,T,R,H,r,i);return;case"select":D=o=y=N=null;for(r in t)if(T=t[r],t.hasOwnProperty(r)&&T!=null)switch(r){case"value":break;case"multiple":D=T;default:l.hasOwnProperty(r)||ee(n,e,r,null,l,T)}for(i in l)if(r=l[i],T=t[i],l.hasOwnProperty(i)&&(r!=null||T!=null))switch(i){case"value":r!==T&&($n=!0),N=r;break;case"defaultValue":r!==T&&($n=!0),y=r;break;case"multiple":r!==T&&($n=!0),o=r;default:r!==T&&ee(n,e,i,r,l,T)}e=y,t=o,l=D,N!=null?ii(n,!!t,N,!1):!!l!=!!t&&(e!=null?ii(n,!!t,e,!0):ii(n,!!t,t?[]:"",!1));return;case"textarea":D=N=null;for(y in t)if(i=t[y],t.hasOwnProperty(y)&&i!=null&&!l.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:ee(n,e,y,null,l,i)}for(o in l)if(i=l[o],r=t[o],l.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":i!==r&&($n=!0),N=i;break;case"defaultValue":i!==r&&($n=!0),D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==r&&ee(n,e,o,i,l,r)}vs(n,N,D);return;case"option":for(var ln in t)if(N=t[ln],t.hasOwnProperty(ln)&&N!=null&&!l.hasOwnProperty(ln))switch(ln){case"selected":n.selected=!1;break;default:ee(n,e,ln,null,l,N)}for(T in l)if(N=l[T],D=t[T],l.hasOwnProperty(T)&&N!==D&&(N!=null||D!=null))switch(T){case"selected":N!==D&&($n=!0),n.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:ee(n,e,T,N,l,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gn in t)N=t[gn],t.hasOwnProperty(gn)&&N!=null&&!l.hasOwnProperty(gn)&&ee(n,e,gn,null,l,N);for(R in l)if(N=l[R],D=t[R],l.hasOwnProperty(R)&&N!==D&&(N!=null||D!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(f(137,e));break;default:ee(n,e,R,N,l,D)}return;default:if(Ya(e)){for(var Un in t)N=t[Un],t.hasOwnProperty(Un)&&N!==void 0&&!l.hasOwnProperty(Un)&&Bo(n,e,Un,void 0,l,N);for(H in l)N=l[H],D=t[H],!l.hasOwnProperty(H)||N===D||N===void 0&&D===void 0||Bo(n,e,H,N,l,D);return}}for(var _ in t)N=t[_],t.hasOwnProperty(_)&&N!=null&&!l.hasOwnProperty(_)&&ee(n,e,_,null,l,N);for(X in l)N=l[X],D=t[X],!l.hasOwnProperty(X)||N===D||N==null&&D==null||ee(n,e,X,N,l,D)}function Om(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function X1(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var i=t[l],r=i.transferSize,o=i.initiatorType,y=i.duration;if(r&&y&&Om(o)){for(o=0,y=i.responseEnd,l+=1;l<t.length;l++){var T=t[l],R=T.startTime;if(R>y)break;var H=T.transferSize,X=T.initiatorType;H&&Om(X)&&(T=T.responseEnd,o+=H*(T<y?1:(y-R)/(T-R)))}if(--l,e+=8*(r+o)/(i.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Yo=null,Lo=null;function Hr(n){return n.nodeType===9?n:n.ownerDocument}function Nm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _m(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Rm(n,e,t,l){return t=Hr(t).createElement(n),t[De]=l,t[Fe]=e,qe(t,n,e),Oe(t),t}function Go(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qo=null;function V1(){var n=window.event;return n&&n.type==="popstate"?n===Qo?!1:(Qo=n,!0):(Qo=null,!1)}var Xo=typeof setTimeout=="function"?setTimeout:void 0,K1=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,Dm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Xo,Z1=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(n){return Cm.resolve(null).then(n).catch(F1)}:Xo;function F1(n){setTimeout(function(){throw n})}function Al(n){return n==="head"}function zm(n,e){var t=e,l=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(i),Qi(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")ko(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,ko(t);for(var r=t.firstChild;r;){var o=r.nextSibling,y=r.nodeName;r[Wi]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=o}}else t==="body"&&ko(n.ownerDocument.body);t=i}while(t);Qi(e)}function wm(n,e){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function Hm(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var l=1;else for(var i=l=0;i<e.length;i++){var r=e[i];0<r.width&&0<r.height&&l++}l===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function Um(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function I1(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function Vo(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return I1(e,t,n)}function J1(n){return n.documentElement.clientHeight}function $1(n){this.addEventListener("load",n),this.addEventListener("error",n)}function k1(n,e,t,l,i,r,o,y,T){var R=e.nodeType===9?e:e.ownerDocument;try{var H=R.startViewTransition({update:function(){var N=R.defaultView,D=N.navigation&&N.navigation.transition,ln=R.fonts.status;l();var gn=[];if(ln==="loaded"&&(J1(R),R.fonts.status==="loading"&&gn.push(R.fonts.ready)),ln=gn.length,n!==null)for(var Un=n.suspenseyImages,_=0,A=0;A<Un.length;A++){var C=Un[A];if(!C.complete){var L=C.getBoundingClientRect();if(0<L.bottom&&0<L.right&&L.top<N.innerHeight&&L.left<N.innerWidth){if(_+=ty(C),_>ha){gn.length=ln;break}C=new Promise($1.bind(C)),gn.push(C)}}}if(0<gn.length)return N=Promise.race([Promise.all(gn),new Promise(function(fn){return setTimeout(fn,500)})]).then(i,i),(D?Promise.allSettled([D.finished,N]):N).then(r,r);if(i(),D)return D.finished.then(r,r);r()},types:t});R.__reactViewTransition=H;var X=[];return H.ready.then(function(){for(var N=R.documentElement.getAnimations({subtree:!0}),D=0;D<N.length;D++){var ln=N[D],gn=ln.effect,Un=gn.pseudoElement;if(Un!=null&&Un.startsWith("::view-transition")){X.push(ln),ln=gn.getKeyframes();for(var _=Un=void 0,A=!0,C=0;C<ln.length;C++){var L=ln[C],fn=L.width;if(Un===void 0)Un=fn;else if(Un!==fn){A=!1;break}if(fn=L.height,_===void 0)_=fn;else if(_!==fn){A=!1;break}delete L.width,delete L.height,L.transform==="none"&&delete L.transform}A&&Un!==void 0&&_!==void 0&&(gn.setKeyframes(ln),A=getComputedStyle(gn.target,gn.pseudoElement),A.width!==Un||A.height!==_)&&(A=ln[0],A.width=Un,A.height=_,A=ln[ln.length-1],A.width=Un,A.height=_,gn.setKeyframes(ln))}}o()},function(N){R.__reactViewTransition===H&&(R.__reactViewTransition=null);try{if(typeof N=="object"&&N!==null)switch(N.name){case"InvalidStateError":(N.message==="View transition was skipped because document visibility state is hidden."||N.message==="Skipping view transition because document visibility state has become hidden."||N.message==="Skipping view transition because viewport size changed."||N.message==="Transition was aborted because of invalid state")&&(N=null)}N!==null&&T(N)}finally{l(),i(),o()}}),H.finished.finally(function(){for(var N=0;N<X.length;N++)X[N].cancel();R.__reactViewTransition===H&&(R.__reactViewTransition=null),y()}),H}catch{return l(),i(),o(),null}}function Pl(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}Pl.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:I({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},Pl.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),l=[],i=0;i<t.length;i++){var r=t[i].effect;r!==null&&r.target===n&&r.pseudoElement===e&&l.push(t[i])}return l},Pl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function qm(n){return{name:n,group:new Pl("group",n),imagePair:new Pl("image-pair",n),old:new Pl("old",n),new:new Pl("new",n)}}function at(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}at.prototype.addEventListener=function(n,e,t){var l=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(l=t.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(Bm(r,n,e,t)===-1){var o=this,y=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(y=function(T){o.removeEventListener(n,e,t),typeof e=="function"?e.call(this,T):e.handleEvent(T)}),l!==null&&(i=o.removeEventListener.bind(o,n,e,t),l.addEventListener("abort",i,{once:!0}),i=l.removeEventListener.bind(l,"abort",i)),l=qi(t),r.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:y,cleanup:i}),g(this._fragmentFiber.child,!1,W1,n,y,l)}this._eventListeners=r}};function W1(n,e,t,l){return W(n).addEventListener(e,t,l),!1}at.prototype.removeEventListener=function(n,e,t){var l=this._eventListeners;if(l!==null&&(e=Bm(l,n,e,t),e!==-1)){var i=l[e];t=i.attachedListener;var r=i.cleanup;i=qi(i.optionsOrUseCapture),g(this._fragmentFiber.child,!1,P1,n,t,i),l.splice(e,1),r!==null&&r()}};function P1(n,e,t,l){return W(n).removeEventListener(e,t,l),!1}function qi(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function jm(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function Bm(n,e,t,l){if(n.length===0)return-1;l=jm(l);for(var i=0;i<n.length;i++){var r=n[i];if(r.type===e&&r.listener===t&&jm(r.optionsOrUseCapture)===l)return i}return-1}at.prototype.dispatchEvent=function(n){var e=S(this._fragmentFiber);if(e===null)return!0;e=W(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var l=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var r=t[i];l.addEventListener(r.type,r.attachedListener,qi(r.optionsOrUseCapture))}if(e.appendChild(l),n=l.dispatchEvent(n),t)for(i=0;i<t.length;i++)r=t[i],l.removeEventListener(r.type,r.attachedListener,qi(r.optionsOrUseCapture));return e.removeChild(l),n}return e.dispatchEvent(n)},at.prototype.focus=function(n){g(this._fragmentFiber.child,!0,Ym,n,void 0,void 0)};function Ym(n,e){return n.tag===6?!1:(n=W(n),sv(n,e))}at.prototype.focusLast=function(n){var e=[];g(this._fragmentFiber.child,!0,Ko,e,void 0,void 0);for(var t=e.length-1;0<=t&&!Ym(e[t],n);t--);};function Ko(n,e){return e.push(n),!1}at.prototype.blur=function(){var n=S(this._fragmentFiber);n!==null&&(n=W(n),n=Hr(n).activeElement,n!==null&&g(this._fragmentFiber.child,!1,nv,n,void 0,void 0))};function nv(n,e){return n.tag===6?!1:(n=W(n),n===e||n.contains(e)?(e.blur(),!0):!1)}at.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),g(this._fragmentFiber.child,!1,ev,n,void 0,void 0)};function ev(n,e){return n.tag===6||(n=W(n),e.observe(n)),!1}at.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),g(this._fragmentFiber.child,!1,tv,n,void 0,void 0);for(var t=e=0;t<Ot.length;t++){var l=Ot[t];l.fragmentInstance===this&&l.observer===n?n.unobserve(l.instance):Ot[e++]=l}Ot.length=e}};function tv(n,e){return n.tag===6||(n=W(n),e.unobserve(n)),!1}var Ot=[],Zo=!1;function lv(n,e,t){Ot.push({fragmentInstance:n,observer:e,instance:t}),Zo||(Zo=!0,hv(function(){Zo=!1;var l=Ot;Ot=[];for(var i=0;i<l.length;i++){var r=l[i];r.observer.unobserve(r.instance)}}))}at.prototype.getClientRects=function(){var n=[];return g(this._fragmentFiber.child,!1,iv,n,void 0,void 0),n};function iv(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=W(n),e.push.apply(e,n.getClientRects());return!1}at.prototype.getRootNode=function(n){var e=S(this._fragmentFiber);return e===null?this:W(e).getRootNode(n)},at.prototype.compareDocumentPosition=function(n){var e=S(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];g(this._fragmentFiber.child,!1,Ko,t,void 0,void 0);var l=W(e);if(t.length===0){if(t=l,z(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var i=l=t.compareDocumentPosition(n);return t===n?i=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=G(e)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(n=W(t).compareDocumentPosition(n),i=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=W(t[0]),i=W(t[t.length-1]);var r=z(this._fragmentFiber)?e.parentElement:l;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=e.compareDocumentPosition(n),y=i.compareDocumentPosition(n),T=o&Node.DOCUMENT_POSITION_CONTAINED_BY||y&Node.DOCUMENT_POSITION_CONTAINED_BY;return y=l&&r&&o&Node.DOCUMENT_POSITION_FOLLOWING&&y&Node.DOCUMENT_POSITION_PRECEDING,e=l&&e===n||r&&i===n||T||y?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&e===n||!r&&i===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||rv(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function rv(n,e,t,l,i){var r=zl(i);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!r)n:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){t=!0;break n}r=r.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=i.ownerDocument,i===r||i===r.documentElement||i===r.body;n:{for(r=e,e=S(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break n}r=r.return}r=!1}return r}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===t)&&(e=Jn(t,r,Mn),e===null?e=!1:(g(e,!0,on,r,t),r=Tn,Tn=null,e=r!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===l)&&(e=Jn(l,r,Mn),e===null?e=!1:(g(e,!0,sn,r,l),r=Tn,pn=Tn=null,e=r!==null)),e):!1}function Lm(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}at.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(f(566));var e=[];g(this._fragmentFiber.child,!1,Ko,e,void 0,void 0);var t=n!==!1;if(e.length===0){var l=G(this._fragmentFiber);if(l=t?l[1]||l[0]||S(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){n=W(l),Lm(n,t);return}if(l=W(l),l.nodeType!==9){if(l.nodeType===11){t="host"in l?l.host:null,t!==null&&t.scrollIntoView(n);return}l.scrollIntoView(n)}}for(l=t?e.length-1:0;l!==(t?-1:e.length);){var i=e[l];i.tag===6?(i=W(i),Lm(i,t)):W(i).scrollIntoView(n),l+=t?-1:1}};function uv(n,e){return n=W(n),Gm(n,e),!1}function Gm(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function Qm(n,e){var t=e._eventListeners;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];n.addEventListener(i.type,i.attachedListener,qi(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(r){for(var o=0,y=0;y<Ot.length;y++){var T=Ot[y];(T.fragmentInstance!==e||T.observer!==r||T.instance!==n)&&(Ot[o++]=T)}Ot.length=o,r.observe(n)}),Gm(n,e))}function av(n,e){var t=e._eventListeners;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];n.removeEventListener(i.type,i.attachedListener,qi(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(r){typeof r.rootMargin=="string"?lv(e,r,n):r.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function Fo(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Fo(t),nu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function cv(n,e,t,l){for(;n.nodeType===1;){var i=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Wi])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=yt(n.nextSibling),n===null)break}return null}function ov(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=yt(n.nextSibling),n===null))return null;return n}function Xm(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=yt(n.nextSibling),n===null))return null;return n}function Io(n){return n.data==="$?"||n.data==="$~"}function Jo(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function fv(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function yt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var $o=null;function Vm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return yt(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Km(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function sv(n,e){function t(){l=!0}if(n.ownerDocument.activeElement===n)return!0;var l=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return l}function hv(n){Dm(function(){Dm(function(e){return n(e)})})}function Zm(n,e,t){switch(e=Hr(t),n){case"html":if(n=e.documentElement,!n)throw Error(f(452));return n;case"head":if(n=e.head,!n)throw Error(f(453));return n;case"body":if(n=e.body,!n)throw Error(f(454));return n;default:throw Error(f(451))}}function Fm(n,e,t){for(var l in t){var i=t[l];t.hasOwnProperty(l)&&i!=null&&ee(n,e,l,null,G1,i)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Rt&&(n.onclick=null),nu(n)}function ko(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);nu(n)}var gt=new Map,Im=new Set;function Ur(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var el=En.d;En.d={f:dv,r:mv,D:yv,C:gv,L:vv,m:pv,X:Ev,S:xv,M:Sv};function dv(){var n=el.f(),e=la();return n||e}function mv(n){var e=ei(n);e!==null&&e.tag===5&&e.type==="form"?$h(e):el.r(n)}var ji=typeof document>"u"?null:document;function Jm(n,e,t){var l=ji;if(l&&typeof e=="string"&&e){var i=ct(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Im.has(i)||(Im.add(i),n={rel:n,crossOrigin:t,href:e},l.querySelector(i)===null&&(e=l.createElement("link"),qe(e,"link",n),Oe(e),l.head.appendChild(e)))}}function yv(n){el.D(n),Jm("dns-prefetch",n,null)}function gv(n,e){el.C(n,e),Jm("preconnect",n,e)}function vv(n,e,t){el.L(n,e,t);var l=ji;if(l&&n&&e){var i='link[rel="preload"][as="'+ct(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+ct(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+ct(t.imageSizes)+'"]')):i+='[href="'+ct(n)+'"]';var r=i;switch(e){case"style":r=Bi(n);break;case"script":r=Yi(n)}if(!(gt.has(r)||(n=I({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),gt.set(r,n),l.querySelector(i)!==null||e==="style"&&l.querySelector(qr(r))||e==="script"&&l.querySelector(jr(r))))){var o=l.createElement("link");qe(o,"link",n),e==="style"&&(o[Pr]=!0,o.onload=o.onerror=function(){cs(o)}),Oe(o),l.head.appendChild(o)}}}function pv(n,e){el.m(n,e);var t=ji;if(t&&n){var l=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ct(l)+'"][href="'+ct(n)+'"]',r=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Yi(n)}if(!gt.has(r)&&(n=I({rel:"modulepreload",href:n},e),gt.set(r,n),t.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(jr(r)))return}l=t.createElement("link"),qe(l,"link",n),Oe(l),t.head.appendChild(l)}}}function xv(n,e,t){el.S(n,e,t);var l=ji;if(l&&n){var i=ti(l).hoistableStyles,r=Bi(n);e=e||"default";var o=i.get(r);if(!o){var y={loading:0,preload:null};if(o=l.querySelector(qr(r)))y.loading=5;else{n=I({rel:"stylesheet",href:n,"data-precedence":e},t),(t=gt.get(r))&&Wo(n,t);var T=o=l.createElement("link");Oe(T),qe(T,"link",n),T._p=new Promise(function(R,H){T.onload=R,T.onerror=H}),T.addEventListener("load",function(){y.loading|=1}),T.addEventListener("error",function(){y.loading|=2}),y.loading|=4,fa(o,e,l)}o={type:"stylesheet",instance:o,count:1,state:y},i.set(r,o)}}}function Ev(n,e){el.X(n,e);var t=ji;if(t&&n){var l=ti(t).hoistableScripts,i=Yi(n),r=l.get(i);r||(r=t.querySelector(jr(i)),r||(n=I({src:n,async:!0},e),(e=gt.get(i))&&Po(n,e),r=t.createElement("script"),Oe(r),qe(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function Sv(n,e){el.M(n,e);var t=ji;if(t&&n){var l=ti(t).hoistableScripts,i=Yi(n),r=l.get(i);r||(r=t.querySelector(jr(i)),r||(n=I({src:n,async:!0,type:"module"},e),(e=gt.get(i))&&Po(n,e),r=t.createElement("script"),Oe(r),qe(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function $m(n,e,t,l){var i=(i=Be.current)?Ur(i):null;if(!i)throw Error(f(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Bi(t.href),e=ti(i).hoistableStyles,l=e.get(t),l||(l={type:"style",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Bi(t.href);var r=ti(i).hoistableStyles,o=r.get(n);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,o),(r=i.querySelector(qr(n)))?r._p||(o.instance=r,o.state.loading=5):(r=gt.get(n),r||(r={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},gt.set(n,r)),Tv(i,n,r,o.state))),e&&l===null)throw Error(f(528,""));return o}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=Yi(t),e=ti(i).hoistableScripts,l=e.get(t),l||(l={type:"script",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,n))}}function Bi(n){return'href="'+ct(n)+'"'}function qr(n){return'link[rel="stylesheet"]['+n+"]"}function km(n){return I({},n,{"data-precedence":n.precedence,precedence:null})}function Tv(n,e,t,l){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Pr]!==!0){l.loading=1;return}}else e=n.createElement("link"),e[Pr]=!0,e.onload=e.onerror=cs.bind(null,e),qe(e,"link",t),Oe(e),n.head.appendChild(e);l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2})}function Yi(n){return'[src="'+ct(n)+'"]'}function jr(n){return"script[async]"+n}function Wm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+ct(t.href)+'"]');if(l)return e.instance=l,Oe(l),l;var i=I({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Oe(l),qe(l,"style",i),fa(l,t.precedence,n),e.instance=l;case"stylesheet":i=Bi(t.href);var r=n.querySelector(qr(i));if(r)return e.state.loading|=4,e.instance=r,Oe(r),r;l=km(t),(i=gt.get(i))&&Wo(l,i),r=(n.ownerDocument||n).createElement("link"),Oe(r);var o=r;return o._p=new Promise(function(y,T){o.onload=y,o.onerror=T}),qe(r,"link",l),e.state.loading|=4,fa(r,t.precedence,n),e.instance=r;case"script":return r=Yi(t.src),(i=n.querySelector(jr(r)))?(e.instance=i,Oe(i),i):(l=t,(i=gt.get(r))&&(l=I({},t),Po(l,i)),n=n.ownerDocument||n,i=n.createElement("script"),Oe(i),qe(i,"link",l),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,fa(l,t.precedence,n));return e.instance}function fa(n,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,r=i,o=0;o<l.length;o++){var y=l[o];if(y.dataset.precedence===e)r=y;else if(r!==i)break}r?r.parentNode.insertBefore(n,r.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Wo(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Po(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var sa=null;function Pm(n,e,t){if(sa===null){var l=new Map,i=sa=new Map;i.set(t,l)}else i=sa,l=i.get(t),l||(l=new Map,i.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),i=0;i<t.length;i++){var r=t[i];if(!(r[Wi]||r[De]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(e)||"";o=n+o;var y=l.get(o);y?y.push(r):l.set(o,[r])}}return l}function nf(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function bv(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ny(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function ey(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function ty(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ly(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=ty(e),n.suspenseyImages.push(e)),n=Ov.bind(n),e.decode().then(n,n))}function Av(n,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Bi(l.href),r=e.querySelector(qr(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Br.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Oe(r);return}r=e.ownerDocument||e,l=km(l),(i=gt.get(i))&&Wo(l,i),r=r.createElement("link"),Oe(r);var o=r;o._p=new Promise(function(y,T){o.onload=y,o.onerror=T}),qe(r,"link",l),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Br.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var ha=0;function Mv(n,e){return n.stylesheets&&n.count===0&&ma(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&ma(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4+e);0<n.imgBytes&&ha===0&&(ha=62500*X1());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&ma(n,n.stylesheets),n.unsuspend)){var r=n.unsuspend;n.unsuspend=null,r()}},(n.imgBytes>ha?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function iy(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)ma(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function Br(){this.count--,iy(this)}function Ov(){this.imgCount--,iy(this)}var da=null;function ma(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,da=new Map,e.forEach(Nv,n),da=null,Br.call(n))}function Nv(n,e){if(!(e.state.loading&4)){var t=da.get(n);if(t)var l=t.get(null);else{t=new Map,da.set(n,t);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),l=o)}l&&t.set(null,l)}i=e.instance,o=i.getAttribute("data-precedence"),r=t.get(o)||l,r===l&&t.set(null,i),t.set(o,i),this.count++,l=Br.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),r?r.parentNode.insertBefore(i,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var Li={$$typeof:Qn,Provider:null,Consumer:null,_currentValue:Se,_currentValue2:Se,_threadCount:0};function _v(n,e,t,l,i,r,o,y,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.hiddenUpdates=wa(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.transitionTypes=null,this.incompleteTransitions=new Map}function ry(n,e,t,l,i,r,o,y,T,R,H,X){return n=new _v(n,e,t,o,T,R,H,X,y),e=1,r===!0&&(e|=24),r=Ie(3,null,null,e),n.current=r,r.stateNode=n,e=mc(),e.refCount++,n.pooledCache=e,e.refCount++,r.memoizedState={element:l,isDehydrated:t,cache:e},pc(r),n}function uy(n){return n?(n=hi,n):hi}function ay(n,e,t,l,i,r){i=uy(i),l.context===null?l.context=i:l.pendingContext=i,l=hl(e),l.payload={element:t},r=r===void 0?null:r,r!==null&&(l.callback=r),t=dl(n,l,e),t!==null&&(We(t,n,e),yr(t,n,e))}function cy(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ef(n,e){cy(n,e),(n=n.alternate)&&cy(n,e)}function oy(n){if(n.tag===13||n.tag===31){var e=ql(n,67108864);e!==null&&We(e,n,67108864),ef(n,67108864)}}function fy(n){if(n.tag===13||n.tag===31){var e=ut();e=Ha(e);var t=ql(n,e);t!==null&&We(t,n,e),ef(n,e)}}var Gi=!0;function Rv(n,e,t,l){var i=rn.T;rn.T=null;var r=En.p;try{En.p=2,tf(n,e,t,l)}finally{En.p=r,rn.T=i}}function Cv(n,e,t,l){var i=rn.T;rn.T=null;var r=En.p;try{En.p=8,tf(n,e,t,l)}finally{En.p=r,rn.T=i}}function tf(n,e,t,l){if(Gi){var i=lf(l);if(i===null)jo(n,e,l,ya,t),hy(n,l);else if(zv(i,n,e,t,l))l.stopPropagation();else if(hy(n,l),e&4&&-1<Dv.indexOf(n)){for(;i!==null;){var r=ei(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Dl(r.pendingLanes);if(o!==0){var y=r;for(y.pendingLanes|=2,y.entangledLanes|=2;o;){var T=1<<31-Pe(o);y.entanglements[1]|=T,o&=~T}Yt(r),(kn&6)===0&&(na=Z()+500,Dr(0))}}break;case 31:case 13:y=ql(r,2),y!==null&&We(y,r,2),la(),ef(r,2)}if(r=lf(l),r===null&&jo(n,e,l,ya,t),r===i)break;i=r}i!==null&&l.stopPropagation()}else jo(n,e,l,null,t)}}function lf(n){return n=Ga(n),rf(n)}var ya=null;function rf(n){if(ya=null,n=zl(n),n!==null){var e=m(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=v(e),n!==null)return n;n=null}else if(t===31){if(n=p(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return ya=n,null}function sy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case k:return 2;case dn:return 8;case Sn:case An:return 32;case Rn:return 268435456;default:return 32}default:return 32}}var uf=!1,Ml=null,Ol=null,Nl=null,Yr=new Map,Lr=new Map,_l=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hy(n,e){switch(n){case"focusin":case"focusout":Ml=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":Nl=null;break;case"pointerover":case"pointerout":Yr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(e.pointerId)}}function Gr(n,e,t,l,i,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},e!==null&&(e=ei(e),e!==null&&oy(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function zv(n,e,t,l,i){switch(e){case"focusin":return Ml=Gr(Ml,n,e,t,l,i),!0;case"dragenter":return Ol=Gr(Ol,n,e,t,l,i),!0;case"mouseover":return Nl=Gr(Nl,n,e,t,l,i),!0;case"pointerover":var r=i.pointerId;return Yr.set(r,Gr(Yr.get(r)||null,n,e,t,l,i)),!0;case"gotpointercapture":return r=i.pointerId,Lr.set(r,Gr(Lr.get(r)||null,n,e,t,l,i)),!0}return!1}function dy(n){var e=zl(n.target);if(e!==null){var t=m(e);if(t!==null){if(e=t.tag,e===13){if(e=v(t),e!==null){n.blockedOn=e,rs(n.priority,function(){fy(t)});return}}else if(e===31){if(e=p(t),e!==null){n.blockedOn=e,rs(n.priority,function(){fy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ga(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=lf(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);La=l,t.target.dispatchEvent(l),La=null}else return e=ei(t),e!==null&&oy(e),n.blockedOn=t,!1;e.shift()}return!0}function my(n,e,t){ga(n)&&t.delete(e)}function wv(){uf=!1,Ml!==null&&ga(Ml)&&(Ml=null),Ol!==null&&ga(Ol)&&(Ol=null),Nl!==null&&ga(Nl)&&(Nl=null),Yr.forEach(my),Lr.forEach(my)}function va(n,e){n.blockedOn===e&&(n.blockedOn=null,uf||(uf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wv)))}var pa=null;function yy(n){pa!==n&&(pa=n,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){pa===n&&(pa=null);for(var e=0;e<n.length;e+=3){var t=n[e],l=n[e+1],i=n[e+2];if(typeof l!="function"){if(rf(l||t)===null)continue;break}var r=ei(t);r!==null&&(n.splice(e,3),e-=3,Yc(r,{pending:!0,data:i,method:t.method,action:l},l,i))}}))}function Qi(n){function e(T){return va(T,n)}Ml!==null&&va(Ml,n),Ol!==null&&va(Ol,n),Nl!==null&&va(Nl,n),Yr.forEach(e),Lr.forEach(e);for(var t=0;t<_l.length;t++){var l=_l[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<_l.length&&(t=_l[0],t.blockedOn===null);)dy(t),t.blockedOn===null&&_l.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var i=t[l],r=t[l+1],o=i[Fe]||null;if(typeof r=="function")o||yy(t);else if(o){var y=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[Fe]||null)y=o.formAction;else if(rf(i)!==null)continue}else y=o.action;typeof y=="function"?t[l+1]=y:(t.splice(l,3),l-=3),yy(t)}}}function gy(){function n(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function af(n){this._internalRoot=n}xa.prototype.render=af.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(f(409));var t=e.current,l=ut();ay(t,l,n,e,null,null)},xa.prototype.unmount=af.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ay(n.current,2,null,n,null,null),la(),e[ni]=null}};function xa(n){this._internalRoot=n}xa.prototype.unstable_scheduleHydration=function(n){if(n){var e=is();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_l.length&&e!==0&&e<_l[t].priority;t++);_l.splice(t,0,n),t===0&&dy(n)}};var vy=c.version;if(vy!=="19.3.0")throw Error(f(527,vy,"19.3.0"));En.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(f(188)):(n=Object.keys(n).join(","),Error(f(268,n)));return n=E(e),n=n!==null?x(n):null,n=n===null?null:n.stateNode,n};var Hv={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:rn,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Et=Ea.inject(Hv),be=Ea}catch{}}return Xr.createRoot=function(n,e){if(!s(n))throw Error(f(299));var t=!1,l="",i=ud,r=ad,o=cd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=ry(n,1,!1,null,null,t,l,null,i,r,o,gy),n[ni]=e.current,qo(n),new af(e)},Xr.hydrateRoot=function(n,e,t){if(!s(n))throw Error(f(299));var l=!1,i="",r=ud,o=ad,y=cd,T=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.formState!==void 0&&(T=t.formState)),e=ry(n,1,!0,e,t??null,l,i,T,r,o,y,gy),e.context=uy(null),t=e.current,l=ut(),l=Ha(l),i=hl(l),i.callback=null,dl(t,i,l),t=l,e.current.lanes=t,ki(e,t),Yt(e),n[ni]=e.current,qo(n),new xa(e)},Xr.version="19.3.0",Xr}var Ny;function Vv(){if(Ny)return ff.exports;Ny=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),ff.exports=Xv(),ff.exports}var Kv=Vv();function Zv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Le={},Sa={},Cl={},_y;function Fr(){if(_y)return Cl;_y=1;function a(v){return typeof v>"u"||v===null}function c(v){return typeof v=="object"&&v!==null}function h(v){return Array.isArray(v)?v:a(v)?[]:[v]}function f(v,p){if(p){const b=Object.keys(p);for(let E=0,x=b.length;E<x;E+=1){const g=b[E];v[g]=p[g]}}return v}function s(v,p){let b="";for(let E=0;E<p;E+=1)b+=v;return b}function m(v){return v===0&&Number.NEGATIVE_INFINITY===1/v}return Cl.isNothing=a,Cl.isObject=c,Cl.toArray=h,Cl.repeat=s,Cl.isNegativeZero=m,Cl.extend=f,Cl}var mf,Ry;function Ir(){if(Ry)return mf;Ry=1;function a(h,f){let s="";const m=h.reason||"(unknown reason)";return h.mark?(h.mark.name&&(s+='in "'+h.mark.name+'" '),s+="("+(h.mark.line+1)+":"+(h.mark.column+1)+")",!f&&h.mark.snippet&&(s+=`

`+h.mark.snippet),m+" "+s):m}function c(h,f){Error.call(this),this.name="YAMLException",this.reason=h,this.mark=f,this.message=a(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c.prototype.toString=function(f){return this.name+": "+a(this,f)},mf=c,mf}var yf,Cy;function Fv(){if(Cy)return yf;Cy=1;const a=Fr();function c(s,m,v,p,b){let E="",x="";const g=Math.floor(b/2)-1;return p-m>g&&(E=" ... ",m=p-g+E.length),v-p>g&&(x=" ...",v=p+g-x.length),{str:E+s.slice(m,v).replace(/\t/g,"→")+x,pos:p-m+E.length}}function h(s,m){return a.repeat(" ",m-s.length)+s}function f(s,m){if(m=Object.create(m||null),!s.buffer)return null;m.maxLength||(m.maxLength=79),typeof m.indent!="number"&&(m.indent=1),typeof m.linesBefore!="number"&&(m.linesBefore=3),typeof m.linesAfter!="number"&&(m.linesAfter=2);const v=/\r?\n|\r|\0/g,p=[0],b=[];let E,x=-1;for(;E=v.exec(s.buffer);)b.push(E.index),p.push(E.index+E[0].length),s.position<=E.index&&x<0&&(x=p.length-2);x<0&&(x=p.length-1);let g="";const S=Math.min(s.line+m.linesAfter,b.length).toString().length,z=m.maxLength-(m.indent+S+3);for(let P=1;P<=m.linesBefore&&!(x-P<0);P++){const W=c(s.buffer,p[x-P],b[x-P],s.position-(p[x]-p[x-P]),z);g=a.repeat(" ",m.indent)+h((s.line-P+1).toString(),S)+" | "+W.str+`
`+g}const G=c(s.buffer,p[x],b[x],s.position,z);g+=a.repeat(" ",m.indent)+h((s.line+1).toString(),S)+" | "+G.str+`
`,g+=a.repeat("-",m.indent+S+3+G.pos)+`^
`;for(let P=1;P<=m.linesAfter&&!(x+P>=b.length);P++){const W=c(s.buffer,p[x+P],b[x+P],s.position-(p[x]-p[x+P]),z);g+=a.repeat(" ",m.indent)+h((s.line+P+1).toString(),S)+" | "+W.str+`
`}return g.replace(/\n$/,"")}return yf=f,yf}var gf,Dy;function Ze(){if(Dy)return gf;Dy=1;const a=Ir(),c=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],h=["scalar","sequence","mapping"];function f(m){const v={};return m!==null&&Object.keys(m).forEach(function(p){m[p].forEach(function(b){v[String(b)]=p})}),v}function s(m,v){if(v=v||{},Object.keys(v).forEach(function(p){if(c.indexOf(p)===-1)throw new a('Unknown option "'+p+'" is met in definition of "'+m+'" YAML type.')}),this.options=v,this.tag=m,this.kind=v.kind||null,this.resolve=v.resolve||function(){return!0},this.construct=v.construct||function(p){return p},this.instanceOf=v.instanceOf||null,this.predicate=v.predicate||null,this.represent=v.represent||null,this.representName=v.representName||null,this.defaultStyle=v.defaultStyle||null,this.multi=v.multi||!1,this.styleAliases=f(v.styleAliases||null),h.indexOf(this.kind)===-1)throw new a('Unknown kind "'+this.kind+'" is specified for "'+m+'" YAML type.')}return gf=s,gf}var vf,zy;function c0(){if(zy)return vf;zy=1;const a=Ir(),c=Ze();function h(m,v){const p=[];return m[v].forEach(function(b){let E=p.length;p.forEach(function(x,g){x.tag===b.tag&&x.kind===b.kind&&x.multi===b.multi&&(E=g)}),p[E]=b}),p}function f(){const m={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function v(p){p.multi?(m.multi[p.kind].push(p),m.multi.fallback.push(p)):m[p.kind][p.tag]=m.fallback[p.tag]=p}for(let p=0,b=arguments.length;p<b;p+=1)arguments[p].forEach(v);return m}function s(m){return this.extend(m)}return s.prototype.extend=function(v){let p=[],b=[];if(v instanceof c)b.push(v);else if(Array.isArray(v))b=b.concat(v);else if(v&&(Array.isArray(v.implicit)||Array.isArray(v.explicit)))v.implicit&&(p=p.concat(v.implicit)),v.explicit&&(b=b.concat(v.explicit));else throw new a("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");p.forEach(function(x){if(!(x instanceof c))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(x.loadKind&&x.loadKind!=="scalar")throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(x.multi)throw new a("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),b.forEach(function(x){if(!(x instanceof c))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const E=Object.create(s.prototype);return E.implicit=(this.implicit||[]).concat(p),E.explicit=(this.explicit||[]).concat(b),E.compiledImplicit=h(E,"implicit"),E.compiledExplicit=h(E,"explicit"),E.compiledTypeMap=f(E.compiledImplicit,E.compiledExplicit),E},vf=s,vf}var pf,wy;function o0(){if(wy)return pf;wy=1;const a=Ze();return pf=new a("tag:yaml.org,2002:str",{kind:"scalar",construct:function(c){return c!==null?c:""}}),pf}var xf,Hy;function f0(){if(Hy)return xf;Hy=1;const a=Ze();return xf=new a("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(c){return c!==null?c:[]}}),xf}var Ef,Uy;function s0(){if(Uy)return Ef;Uy=1;const a=Ze();return Ef=new a("tag:yaml.org,2002:map",{kind:"mapping",construct:function(c){return c!==null?c:{}}}),Ef}var Sf,qy;function h0(){if(qy)return Sf;qy=1;const a=c0();return Sf=new a({explicit:[o0(),f0(),s0()]}),Sf}var Tf,jy;function d0(){if(jy)return Tf;jy=1;const a=Ze();function c(s){if(s===null)return!0;const m=s.length;return m===1&&s==="~"||m===4&&(s==="null"||s==="Null"||s==="NULL")}function h(){return null}function f(s){return s===null}return Tf=new a("tag:yaml.org,2002:null",{kind:"scalar",resolve:c,construct:h,predicate:f,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Tf}var bf,By;function m0(){if(By)return bf;By=1;const a=Ze();function c(s){if(s===null)return!1;const m=s.length;return m===4&&(s==="true"||s==="True"||s==="TRUE")||m===5&&(s==="false"||s==="False"||s==="FALSE")}function h(s){return s==="true"||s==="True"||s==="TRUE"}function f(s){return Object.prototype.toString.call(s)==="[object Boolean]"}return bf=new a("tag:yaml.org,2002:bool",{kind:"scalar",resolve:c,construct:h,predicate:f,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"}),bf}var Af,Yy;function y0(){if(Yy)return Af;Yy=1;const a=Fr(),c=Ze();function h(E){return E>=48&&E<=57||E>=65&&E<=70||E>=97&&E<=102}function f(E){return E>=48&&E<=55}function s(E){return E>=48&&E<=57}function m(E){if(E===null)return!1;const x=E.length;let g=0,S=!1;if(!x)return!1;let z=E[g];if((z==="-"||z==="+")&&(z=E[++g]),z==="0"){if(g+1===x)return!0;if(z=E[++g],z==="b"){for(g++;g<x;g++){if(z=E[g],z!=="0"&&z!=="1")return!1;S=!0}return S&&isFinite(v(E))}if(z==="x"){for(g++;g<x;g++){if(!h(E.charCodeAt(g)))return!1;S=!0}return S&&isFinite(v(E))}if(z==="o"){for(g++;g<x;g++){if(!f(E.charCodeAt(g)))return!1;S=!0}return S&&isFinite(v(E))}}for(;g<x;g++){if(!s(E.charCodeAt(g)))return!1;S=!0}return S?isFinite(v(E)):!1}function v(E){let x=E,g=1,S=x[0];if((S==="-"||S==="+")&&(S==="-"&&(g=-1),x=x.slice(1),S=x[0]),x==="0")return 0;if(S==="0"){if(x[1]==="b")return g*parseInt(x.slice(2),2);if(x[1]==="x")return g*parseInt(x.slice(2),16);if(x[1]==="o")return g*parseInt(x.slice(2),8)}return g*parseInt(x,10)}function p(E){return v(E)}function b(E){return Object.prototype.toString.call(E)==="[object Number]"&&E%1===0&&!a.isNegativeZero(E)}return Af=new c("tag:yaml.org,2002:int",{kind:"scalar",resolve:m,construct:p,predicate:b,represent:{binary:function(E){return E>=0?"0b"+E.toString(2):"-0b"+E.toString(2).slice(1)},octal:function(E){return E>=0?"0o"+E.toString(8):"-0o"+E.toString(8).slice(1)},decimal:function(E){return E.toString(10)},hexadecimal:function(E){return E>=0?"0x"+E.toString(16).toUpperCase():"-0x"+E.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Af}var Mf,Ly;function g0(){if(Ly)return Mf;Ly=1;const a=Fr(),c=Ze(),h=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),f=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function s(E){return E===null||!h.test(E)?!1:isFinite(parseFloat(E,10))?!0:f.test(E)}function m(E){let x=E.toLowerCase();const g=x[0]==="-"?-1:1;return"+-".indexOf(x[0])>=0&&(x=x.slice(1)),x===".inf"?g===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:x===".nan"?NaN:g*parseFloat(x,10)}const v=/^[-+]?[0-9]+e/;function p(E,x){if(isNaN(E))switch(x){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===E)switch(x){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===E)switch(x){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(a.isNegativeZero(E))return"-0.0";const g=E.toString(10);return v.test(g)?g.replace("e",".e"):g}function b(E){return Object.prototype.toString.call(E)==="[object Number]"&&(E%1!==0||a.isNegativeZero(E))}return Mf=new c("tag:yaml.org,2002:float",{kind:"scalar",resolve:s,construct:m,predicate:b,represent:p,defaultStyle:"lowercase"}),Mf}var Of,Gy;function v0(){return Gy||(Gy=1,Of=h0().extend({implicit:[d0(),m0(),y0(),g0()]})),Of}var Nf,Qy;function p0(){return Qy||(Qy=1,Nf=v0()),Nf}var _f,Xy;function x0(){if(Xy)return _f;Xy=1;const a=Ze(),c=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),h=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function f(v){return v===null?!1:c.exec(v)!==null||h.exec(v)!==null}function s(v){let p=0,b=null,E=c.exec(v);if(E===null&&(E=h.exec(v)),E===null)throw new Error("Date resolve error");const x=+E[1],g=+E[2]-1,S=+E[3];if(!E[4])return new Date(Date.UTC(x,g,S));const z=+E[4],G=+E[5],P=+E[6];if(E[7]){for(p=E[7].slice(0,3);p.length<3;)p+="0";p=+p}if(E[9]){const Tn=+E[10],pn=+(E[11]||0);b=(Tn*60+pn)*6e4,E[9]==="-"&&(b=-b)}const W=new Date(Date.UTC(x,g,S,z,G,P,p));return b&&W.setTime(W.getTime()-b),W}function m(v){return v.toISOString()}return _f=new a("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:f,construct:s,instanceOf:Date,represent:m}),_f}var Rf,Vy;function E0(){if(Vy)return Rf;Vy=1;const a=Ze();function c(h){return h==="<<"||h===null}return Rf=new a("tag:yaml.org,2002:merge",{kind:"scalar",resolve:c}),Rf}var Cf,Ky;function S0(){if(Ky)return Cf;Ky=1;const a=Ze(),c=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function h(v){if(v===null)return!1;let p=0;const b=v.length,E=c;for(let x=0;x<b;x++){const g=E.indexOf(v.charAt(x));if(!(g>64)){if(g<0)return!1;p+=6}}return p%8===0}function f(v){const p=v.replace(/[\r\n=]/g,""),b=p.length,E=c;let x=0;const g=[];for(let z=0;z<b;z++)z%4===0&&z&&(g.push(x>>16&255),g.push(x>>8&255),g.push(x&255)),x=x<<6|E.indexOf(p.charAt(z));const S=b%4*6;return S===0?(g.push(x>>16&255),g.push(x>>8&255),g.push(x&255)):S===18?(g.push(x>>10&255),g.push(x>>2&255)):S===12&&g.push(x>>4&255),new Uint8Array(g)}function s(v){let p="",b=0;const E=v.length,x=c;for(let S=0;S<E;S++)S%3===0&&S&&(p+=x[b>>18&63],p+=x[b>>12&63],p+=x[b>>6&63],p+=x[b&63]),b=(b<<8)+v[S];const g=E%3;return g===0?(p+=x[b>>18&63],p+=x[b>>12&63],p+=x[b>>6&63],p+=x[b&63]):g===2?(p+=x[b>>10&63],p+=x[b>>4&63],p+=x[b<<2&63],p+=x[64]):g===1&&(p+=x[b>>2&63],p+=x[b<<4&63],p+=x[64],p+=x[64]),p}function m(v){return Object.prototype.toString.call(v)==="[object Uint8Array]"}return Cf=new a("tag:yaml.org,2002:binary",{kind:"scalar",resolve:h,construct:f,predicate:m,represent:s}),Cf}var Df,Zy;function T0(){if(Zy)return Df;Zy=1;const a=Ze(),c=Object.prototype.hasOwnProperty,h=Object.prototype.toString;function f(m){if(m===null)return!0;const v={},p=m;for(let b=0,E=p.length;b<E;b+=1){const x=p[b];let g=!1;if(h.call(x)!=="[object Object]")return!1;let S;for(S in x)if(c.call(x,S))if(!g)g=!0;else return!1;if(!g||c.call(v,S))return!1;Object.defineProperty(v,S,{value:!0})}return!0}function s(m){return m!==null?m:[]}return Df=new a("tag:yaml.org,2002:omap",{kind:"sequence",resolve:f,construct:s}),Df}var zf,Fy;function b0(){if(Fy)return zf;Fy=1;const a=Ze(),c=Object.prototype.toString;function h(s){if(s===null)return!0;const m=s,v=new Array(m.length);for(let p=0,b=m.length;p<b;p+=1){const E=m[p];if(c.call(E)!=="[object Object]")return!1;const x=Object.keys(E);if(x.length!==1)return!1;v[p]=[x[0],E[x[0]]]}return!0}function f(s){if(s===null)return[];const m=s,v=new Array(m.length);for(let p=0,b=m.length;p<b;p+=1){const E=m[p],x=Object.keys(E);v[p]=[x[0],E[x[0]]]}return v}return zf=new a("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:h,construct:f}),zf}var wf,Iy;function A0(){if(Iy)return wf;Iy=1;const a=Ze(),c=Object.prototype.hasOwnProperty;function h(s){if(s===null)return!0;const m=s;for(const v in m)if(c.call(m,v)&&m[v]!==null)return!1;return!0}function f(s){return s!==null?s:{}}return wf=new a("tag:yaml.org,2002:set",{kind:"mapping",resolve:h,construct:f}),wf}var Hf,Jy;function Xf(){return Jy||(Jy=1,Hf=p0().extend({implicit:[x0(),E0()],explicit:[S0(),T0(),b0(),A0()]})),Hf}var $y;function Iv(){if($y)return Sa;$y=1;const a=Fr(),c=Ir(),h=Fv(),f=Xf(),s=Object.prototype.hasOwnProperty,m=1,v=2,p=3,b=4,E=1,x=2,g=3,S=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,z=/[\x85\u2028\u2029]/,G=/[,\[\]{}]/,P=/^(?:!|!!|![0-9A-Za-z-]+!)$/,W=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function Tn(u){return Object.prototype.toString.call(u)}function pn(u){return u===10||u===13}function on(u){return u===9||u===32}function sn(u){return u===9||u===32||u===10||u===13}function Mn(u){return u===44||u===91||u===93||u===123||u===125}function Jn(u){if(u>=48&&u<=57)return u-48;const O=u|32;return O>=97&&O<=102?O-97+10:-1}function I(u){return u===120?2:u===117?4:u===85?8:0}function mn(u){return u>=48&&u<=57?u-48:-1}function Dn(u){switch(u){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function Bn(u){return u<=65535?String.fromCharCode(u):String.fromCharCode((u-65536>>10)+55296,(u-65536&1023)+56320)}function en(u,O,Y){O==="__proto__"?Object.defineProperty(u,O,{configurable:!0,enumerable:!0,writable:!0,value:Y}):u[O]=Y}const tn=new Array(256),zn=new Array(256);for(let u=0;u<256;u++)tn[u]=Dn(u)?1:0,zn[u]=Dn(u);function Nn(u,O){this.input=u,this.filename=O.filename||null,this.schema=O.schema||f,this.onWarning=O.onWarning||null,this.legacy=O.legacy||!1,this.json=O.json||!1,this.listener=O.listener||null,this.maxDepth=typeof O.maxDepth=="number"?O.maxDepth:100,this.maxTotalMergeKeys=typeof O.maxTotalMergeKeys=="number"?O.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=u.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Qn(u,O){const Y={name:u.filename,buffer:u.input.slice(0,-1),position:u.position,line:u.line,column:u.position-u.lineStart};return Y.snippet=h(Y),new c(O,Y)}function q(u,O){throw Qn(u,O)}function hn(u,O){u.onWarning&&u.onWarning.call(null,Qn(u,O))}function yn(u,O,Y){const V=u.anchorMapTransactions;if(V.length!==0){const B=V[V.length-1];s.call(B,O)||(B[O]={existed:s.call(u.anchorMap,O),value:u.anchorMap[O]})}u.anchorMap[O]=Y}function $(u){u.anchorMapTransactions.push(Object.create(null))}function bn(u){const O=u.anchorMapTransactions.pop(),Y=u.anchorMapTransactions;if(Y.length===0)return;const V=Y[Y.length-1],B=Object.keys(O);for(let d=0,w=B.length;d<w;d+=1){const j=B[d];s.call(V,j)||(V[j]=O[j])}}function qn(u){const O=u.anchorMapTransactions.pop(),Y=Object.keys(O);for(let V=Y.length-1;V>=0;V-=1){const B=O[Y[V]];B.existed?u.anchorMap[Y[V]]=B.value:delete u.anchorMap[Y[V]]}}function ce(u){return{position:u.position,line:u.line,lineStart:u.lineStart,lineIndent:u.lineIndent,firstTabInLine:u.firstTabInLine,tag:u.tag,anchor:u.anchor,kind:u.kind,result:u.result}}function le(u,O){u.position=O.position,u.line=O.line,u.lineStart=O.lineStart,u.lineIndent=O.lineIndent,u.firstTabInLine=O.firstTabInLine,u.tag=O.tag,u.anchor=O.anchor,u.kind=O.kind,u.result=O.result}const M={YAML:function(O,Y,V){O.version!==null&&q(O,"duplication of %YAML directive"),V.length!==1&&q(O,"YAML directive accepts exactly one argument");const B=/^([0-9]+)\.([0-9]+)$/.exec(V[0]);B===null&&q(O,"ill-formed argument of the YAML directive");const d=parseInt(B[1],10),w=parseInt(B[2],10);d!==1&&q(O,"unacceptable YAML version of the document"),O.version=V[0],O.checkLineBreaks=w<2,w!==1&&w!==2&&hn(O,"unsupported YAML version of the document")},TAG:function(O,Y,V){let B;V.length!==2&&q(O,"TAG directive accepts exactly two arguments");const d=V[0];B=V[1],P.test(d)||q(O,"ill-formed tag handle (first argument) of the TAG directive"),s.call(O.tagMap,d)&&q(O,'there is a previously declared suffix for "'+d+'" tag handle'),W.test(B)||q(O,"ill-formed tag prefix (second argument) of the TAG directive");try{B=decodeURIComponent(B)}catch{q(O,"tag prefix is malformed: "+B)}O.tagMap[d]=B}};function K(u,O,Y,V){if(O<Y){const B=u.input.slice(O,Y);if(V)for(let d=0,w=B.length;d<w;d+=1){const j=B.charCodeAt(d);j===9||j>=32&&j<=1114111||q(u,"expected valid JSON character")}else S.test(B)&&q(u,"the stream contains non-printable characters");u.result+=B}}function un(u){u.totalMergeKeys++,u.maxTotalMergeKeys!==-1&&u.totalMergeKeys>u.maxTotalMergeKeys&&q(u,"merge keys exceeded maxTotalMergeKeys ("+u.maxTotalMergeKeys+")")}function an(u,O,Y,V){a.isObject(Y)||q(u,"cannot merge mappings; the provided source object is unacceptable"),un(u);const B=Object.keys(Y);for(let d=0,w=B.length;d<w;d+=1){const j=B[d];un(u),s.call(O,j)||(en(O,j,Y[j]),V[j]=!0)}}function _n(u,O,Y,V,B,d,w,j,F){if(Array.isArray(B)){B=Array.prototype.slice.call(B);for(let J=0,Z=B.length;J<Z;J+=1)Array.isArray(B[J])&&q(u,"nested arrays are not supported inside keys"),typeof B=="object"&&Tn(B[J])==="[object Object]"&&(B[J]="[object Object]")}if(typeof B=="object"&&Tn(B)==="[object Object]"&&(B="[object Object]"),B=String(B),O===null&&(O={}),V==="tag:yaml.org,2002:merge")if(Array.isArray(d)){d.length>100&&q(u,"abnormal merge sequence size");for(let J=0,Z=d.length;J<Z;J+=1)an(u,O,d[J],Y)}else an(u,O,d,Y);else!u.json&&!s.call(Y,B)&&s.call(O,B)&&(u.line=w||u.line,u.lineStart=j||u.lineStart,u.position=F||u.position,q(u,"duplicated mapping key")),en(O,B,d),delete Y[B];return O}function wn(u){const O=u.input.charCodeAt(u.position);O===10?u.position++:O===13?(u.position++,u.input.charCodeAt(u.position)===10&&u.position++):q(u,"a line break is expected"),u.line+=1,u.lineStart=u.position,u.firstTabInLine=-1}function vn(u,O,Y){let V=0,B=u.input.charCodeAt(u.position);for(;B!==0;){for(;on(B);)B===9&&u.firstTabInLine===-1&&(u.firstTabInLine=u.position),B=u.input.charCodeAt(++u.position);if(O&&B===35)do B=u.input.charCodeAt(++u.position);while(B!==10&&B!==13&&B!==0);if(pn(B))for(wn(u),B=u.input.charCodeAt(u.position),V++,u.lineIndent=0;B===32;)u.lineIndent++,B=u.input.charCodeAt(++u.position);else break}return Y!==-1&&V!==0&&u.lineIndent<Y&&hn(u,"deficient indentation"),V}function rn(u){let O=u.position,Y=u.input.charCodeAt(O);return!!((Y===45||Y===46)&&Y===u.input.charCodeAt(O+1)&&Y===u.input.charCodeAt(O+2)&&(O+=3,Y=u.input.charCodeAt(O),Y===0||sn(Y)))}function En(u,O){O===1?u.result+=" ":O>1&&(u.result+=a.repeat(`
`,O-1))}function Se(u,O,Y){let V,B,d,w,j,F;const J=u.kind,Z=u.result;let Q=u.input.charCodeAt(u.position);if(sn(Q)||Mn(Q)||Q===35||Q===38||Q===42||Q===33||Q===124||Q===62||Q===39||Q===34||Q===37||Q===64||Q===96)return!1;if(Q===63||Q===45){const k=u.input.charCodeAt(u.position+1);if(sn(k)||Y&&Mn(k))return!1}for(u.kind="scalar",u.result="",V=B=u.position,d=!1;Q!==0;){if(Q===58){const k=u.input.charCodeAt(u.position+1);if(sn(k)||Y&&Mn(k))break}else if(Q===35){const k=u.input.charCodeAt(u.position-1);if(sn(k))break}else{if(u.position===u.lineStart&&rn(u)||Y&&Mn(Q))break;if(pn(Q))if(w=u.line,j=u.lineStart,F=u.lineIndent,vn(u,!1,-1),u.lineIndent>=O){d=!0,Q=u.input.charCodeAt(u.position);continue}else{u.position=B,u.line=w,u.lineStart=j,u.lineIndent=F;break}}d&&(K(u,V,B,!1),En(u,u.line-w),V=B=u.position,d=!1),on(Q)||(B=u.position+1),Q=u.input.charCodeAt(++u.position)}return K(u,V,B,!1),u.result?!0:(u.kind=J,u.result=Z,!1)}function Me(u,O){let Y,V,B=u.input.charCodeAt(u.position);if(B!==39)return!1;for(u.kind="scalar",u.result="",u.position++,Y=V=u.position;(B=u.input.charCodeAt(u.position))!==0;)if(B===39)if(K(u,Y,u.position,!0),B=u.input.charCodeAt(++u.position),B===39)Y=u.position,u.position++,V=u.position;else return!0;else pn(B)?(K(u,Y,V,!0),En(u,vn(u,!1,O)),Y=V=u.position):u.position===u.lineStart&&rn(u)?q(u,"unexpected end of the document within a single quoted scalar"):(u.position++,on(B)||(V=u.position));q(u,"unexpected end of the stream within a single quoted scalar")}function Ge(u,O){let Y,V,B,d=u.input.charCodeAt(u.position);if(d!==34)return!1;for(u.kind="scalar",u.result="",u.position++,Y=V=u.position;(d=u.input.charCodeAt(u.position))!==0;){if(d===34)return K(u,Y,u.position,!0),u.position++,!0;if(d===92){if(K(u,Y,u.position,!0),d=u.input.charCodeAt(++u.position),pn(d))vn(u,!1,O);else if(d<256&&tn[d])u.result+=zn[d],u.position++;else if((B=I(d))>0){let w=B,j=0;for(;w>0;w--)d=u.input.charCodeAt(++u.position),(B=Jn(d))>=0?j=(j<<4)+B:q(u,"expected hexadecimal character");u.result+=Bn(j),u.position++}else q(u,"unknown escape sequence");Y=V=u.position}else pn(d)?(K(u,Y,V,!0),En(u,vn(u,!1,O)),Y=V=u.position):u.position===u.lineStart&&rn(u)?q(u,"unexpected end of the document within a double quoted scalar"):(u.position++,on(d)||(V=u.position))}q(u,"unexpected end of the stream within a double quoted scalar")}function Ce(u,O){let Y=!0,V,B,d;const w=u.tag;let j;const F=u.anchor;let J,Z,Q,k;const dn=Object.create(null);let Sn,An,Rn,jn=u.input.charCodeAt(u.position);if(jn===91)J=93,k=!1,j=[];else if(jn===123)J=125,k=!0,j={};else return!1;for(u.anchor!==null&&yn(u,u.anchor,j),jn=u.input.charCodeAt(++u.position);jn!==0;){if(vn(u,!0,O),jn=u.input.charCodeAt(u.position),jn===J)return u.position++,u.tag=w,u.anchor=F,u.kind=k?"mapping":"sequence",u.result=j,!0;if(Y?jn===44&&q(u,"expected the node content, but found ','"):q(u,"missed comma between flow collection entries"),An=Sn=Rn=null,Z=Q=!1,jn===63){const _t=u.input.charCodeAt(u.position+1);sn(_t)&&(Z=Q=!0,u.position++,vn(u,!0,O))}V=u.line,B=u.lineStart,d=u.position,Te(u,O,m,!1,!0),An=u.tag,Sn=u.result,vn(u,!0,O),jn=u.input.charCodeAt(u.position),(Q||u.line===V)&&jn===58&&(Z=!0,jn=u.input.charCodeAt(++u.position),vn(u,!0,O),Te(u,O,m,!1,!0),Rn=u.result),k?_n(u,j,dn,An,Sn,Rn,V,B,d):Z?j.push(_n(u,null,dn,An,Sn,Rn,V,B,d)):j.push(Sn),vn(u,!0,O),jn=u.input.charCodeAt(u.position),jn===44?(Y=!0,jn=u.input.charCodeAt(++u.position)):Y=!1}q(u,"unexpected end of the stream within a flow collection")}function Kn(u,O){let Y,V=E,B=!1,d=!1,w=O,j=0,F=!1,J,Z=u.input.charCodeAt(u.position);if(Z===124)Y=!1;else if(Z===62)Y=!0;else return!1;for(u.kind="scalar",u.result="";Z!==0;)if(Z=u.input.charCodeAt(++u.position),Z===43||Z===45)E===V?V=Z===43?g:x:q(u,"repeat of a chomping mode identifier");else if((J=mn(Z))>=0)J===0?q(u,"bad explicit indentation width of a block scalar; it cannot be less than one"):d?q(u,"repeat of an indentation width identifier"):(w=O+J-1,d=!0);else break;if(on(Z)){do Z=u.input.charCodeAt(++u.position);while(on(Z));if(Z===35)do Z=u.input.charCodeAt(++u.position);while(!pn(Z)&&Z!==0)}for(;Z!==0;){for(wn(u),u.lineIndent=0,Z=u.input.charCodeAt(u.position);(!d||u.lineIndent<w)&&Z===32;)u.lineIndent++,Z=u.input.charCodeAt(++u.position);if(!d&&u.lineIndent>w&&(w=u.lineIndent),pn(Z)){j++;continue}if(!d&&w===0&&q(u,"missing indentation for block scalar"),u.lineIndent<w){V===g?u.result+=a.repeat(`
`,B?1+j:j):V===E&&B&&(u.result+=`
`);break}Y?on(Z)?(F=!0,u.result+=a.repeat(`
`,B?1+j:j)):F?(F=!1,u.result+=a.repeat(`
`,j+1)):j===0?B&&(u.result+=" "):u.result+=a.repeat(`
`,j):u.result+=a.repeat(`
`,B?1+j:j),B=!0,d=!0,j=0;const Q=u.position;for(;!pn(Z)&&Z!==0;)Z=u.input.charCodeAt(++u.position);K(u,Q,u.position,!1)}return!0}function Zn(u,O){const Y=u.tag,V=u.anchor,B=[];let d=!1;if(u.firstTabInLine!==-1)return!1;u.anchor!==null&&yn(u,u.anchor,B);let w=u.input.charCodeAt(u.position);for(;w!==0&&(u.firstTabInLine!==-1&&(u.position=u.firstTabInLine,q(u,"tab characters must not be used in indentation")),w===45);){const j=u.input.charCodeAt(u.position+1);if(!sn(j))break;if(d=!0,u.position++,vn(u,!0,-1)&&u.lineIndent<=O){B.push(null),w=u.input.charCodeAt(u.position);continue}const F=u.line;if(Te(u,O,p,!1,!0),B.push(u.result),vn(u,!0,-1),w=u.input.charCodeAt(u.position),(u.line===F||u.lineIndent>O)&&w!==0)q(u,"bad indentation of a sequence entry");else if(u.lineIndent<O)break}return d?(u.tag=Y,u.anchor=V,u.kind="sequence",u.result=B,!0):!1}function me(u,O,Y){let V,B,d,w;const j=u.tag,F=u.anchor,J={},Z=Object.create(null);let Q=null,k=null,dn=null,Sn=!1,An=!1;if(u.firstTabInLine!==-1)return!1;u.anchor!==null&&yn(u,u.anchor,J);let Rn=u.input.charCodeAt(u.position);for(;Rn!==0;){!Sn&&u.firstTabInLine!==-1&&(u.position=u.firstTabInLine,q(u,"tab characters must not be used in indentation"));const jn=u.input.charCodeAt(u.position+1),_t=u.line;if((Rn===63||Rn===58)&&sn(jn))Rn===63?(Sn&&(_n(u,J,Z,Q,k,null,B,d,w),Q=k=dn=null),An=!0,Sn=!0,V=!0):Sn?(Sn=!1,V=!0):q(u,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),u.position+=1,Rn=jn;else{if(B=u.line,d=u.lineStart,w=u.position,!Te(u,Y,v,!1,!0))break;if(u.line===_t){for(Rn=u.input.charCodeAt(u.position);on(Rn);)Rn=u.input.charCodeAt(++u.position);if(Rn===58)Rn=u.input.charCodeAt(++u.position),sn(Rn)||q(u,"a whitespace character is expected after the key-value separator within a block mapping"),Sn&&(_n(u,J,Z,Q,k,null,B,d,w),Q=k=dn=null),An=!0,Sn=!1,V=!1,Q=u.tag,k=u.result;else if(An)q(u,"can not read an implicit mapping pair; a colon is missed");else return u.tag=j,u.anchor=F,!0}else if(An)q(u,"can not read a block mapping entry; a multiline key may not be an implicit key");else return u.tag=j,u.anchor=F,!0}if((u.line===_t||u.lineIndent>O)&&(Sn&&(B=u.line,d=u.lineStart,w=u.position),Te(u,O,b,!0,V)&&(Sn?k=u.result:dn=u.result),Sn||(_n(u,J,Z,Q,k,dn,B,d,w),Q=k=dn=null),vn(u,!0,-1),Rn=u.input.charCodeAt(u.position)),(u.line===_t||u.lineIndent>O)&&Rn!==0)q(u,"bad indentation of a mapping entry");else if(u.lineIndent<O)break}return Sn&&_n(u,J,Z,Q,k,null,B,d,w),An&&(u.tag=j,u.anchor=F,u.kind="mapping",u.result=J),An}function ge(u){let O=!1,Y=!1,V,B,d=u.input.charCodeAt(u.position);if(d!==33)return!1;u.tag!==null&&q(u,"duplication of a tag property"),d=u.input.charCodeAt(++u.position),d===60?(O=!0,d=u.input.charCodeAt(++u.position)):d===33?(Y=!0,V="!!",d=u.input.charCodeAt(++u.position)):V="!";let w=u.position;if(O){do d=u.input.charCodeAt(++u.position);while(d!==0&&d!==62);u.position<u.length?(B=u.input.slice(w,u.position),d=u.input.charCodeAt(++u.position)):q(u,"unexpected end of the stream within a verbatim tag")}else{for(;d!==0&&!sn(d);)d===33&&(Y?q(u,"tag suffix cannot contain exclamation marks"):(V=u.input.slice(w-1,u.position+1),P.test(V)||q(u,"named tag handle cannot contain such characters"),Y=!0,w=u.position+1)),d=u.input.charCodeAt(++u.position);B=u.input.slice(w,u.position),G.test(B)&&q(u,"tag suffix cannot contain flow indicator characters")}B&&!W.test(B)&&q(u,"tag name cannot contain such characters: "+B);try{B=decodeURIComponent(B)}catch{q(u,"tag name is malformed: "+B)}return O?u.tag=B:s.call(u.tagMap,V)?u.tag=u.tagMap[V]+B:V==="!"?u.tag="!"+B:V==="!!"?u.tag="tag:yaml.org,2002:"+B:q(u,'undeclared tag handle "'+V+'"'),!0}function Be(u){let O=u.input.charCodeAt(u.position);if(O!==38)return!1;u.anchor!==null&&q(u,"duplication of an anchor property"),O=u.input.charCodeAt(++u.position);const Y=u.position;for(;O!==0&&!sn(O)&&!Mn(O);)O=u.input.charCodeAt(++u.position);return u.position===Y&&q(u,"name of an anchor node must contain at least one character"),u.anchor=u.input.slice(Y,u.position),!0}function pt(u){let O=u.input.charCodeAt(u.position);if(O!==42)return!1;O=u.input.charCodeAt(++u.position);const Y=u.position;for(;O!==0&&!sn(O)&&!Mn(O);)O=u.input.charCodeAt(++u.position);u.position===Y&&q(u,"name of an alias node must contain at least one character");const V=u.input.slice(Y,u.position);return s.call(u.anchorMap,V)||q(u,'unidentified alias "'+V+'"'),u.result=u.anchorMap[V],vn(u,!0,-1),!0}function xt(u,O,Y,V){const B=ce(u);return $(u),le(u,O),u.tag=null,u.anchor=null,u.kind=null,u.result=null,me(u,Y,V)&&u.kind==="mapping"?(bn(u),!0):(qn(u),le(u,B),!1)}function Te(u,O,Y,V,B){let d,w,j=1,F=!1,J=!1,Z=null,Q,k,dn;u.depth>=u.maxDepth&&q(u,"nesting exceeded maxDepth ("+u.maxDepth+")"),u.depth+=1,u.listener!==null&&u.listener("open",u),u.tag=null,u.anchor=null,u.kind=null,u.result=null;const Sn=d=w=b===Y||p===Y;if(V&&vn(u,!0,-1)&&(F=!0,u.lineIndent>O?j=1:u.lineIndent===O?j=0:u.lineIndent<O&&(j=-1)),j===1)for(;;){const An=u.input.charCodeAt(u.position),Rn=ce(u);if(F&&(An===33&&u.tag!==null||An===38&&u.anchor!==null)||!ge(u)&&!Be(u))break;Z===null&&(Z=Rn),vn(u,!0,-1)?(F=!0,w=Sn,u.lineIndent>O?j=1:u.lineIndent===O?j=0:u.lineIndent<O&&(j=-1)):w=!1}if(w&&(w=F||B),j===1||b===Y)if(m===Y||v===Y?k=O:k=O+1,dn=u.position-u.lineStart,j===1)if(w&&(Zn(u,dn)||me(u,dn,k))||Ce(u,k))J=!0;else{const An=u.input.charCodeAt(u.position);Z!==null&&Sn&&!w&&An!==124&&An!==62&&xt(u,Z,Z.position-Z.lineStart,k)||d&&Kn(u,k)||Me(u,k)||Ge(u,k)?J=!0:pt(u)?(J=!0,(u.tag!==null||u.anchor!==null)&&q(u,"alias node should not have any properties")):Se(u,k,m===Y)&&(J=!0,u.tag===null&&(u.tag="?")),u.anchor!==null&&yn(u,u.anchor,u.result)}else j===0&&(J=w&&Zn(u,dn));if(u.tag===null)u.anchor!==null&&yn(u,u.anchor,u.result);else if(u.tag==="?"){u.result!==null&&u.kind!=="scalar"&&q(u,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+u.kind+'"');for(let An=0,Rn=u.implicitTypes.length;An<Rn;An+=1)if(Q=u.implicitTypes[An],Q.resolve(u.result)){u.result=Q.construct(u.result),u.tag=Q.tag,u.anchor!==null&&yn(u,u.anchor,u.result);break}}else if(u.tag!=="!"){if(s.call(u.typeMap[u.kind||"fallback"],u.tag))Q=u.typeMap[u.kind||"fallback"][u.tag];else{Q=null;const An=u.typeMap.multi[u.kind||"fallback"];for(let Rn=0,jn=An.length;Rn<jn;Rn+=1)if(u.tag.slice(0,An[Rn].tag.length)===An[Rn].tag){Q=An[Rn];break}}Q||q(u,"unknown tag !<"+u.tag+">"),u.result!==null&&Q.kind!==u.kind&&q(u,"unacceptable node kind for !<"+u.tag+'> tag; it should be "'+Q.kind+'", not "'+u.kind+'"'),Q.resolve(u.result,u.tag)?(u.result=Q.construct(u.result,u.tag),u.anchor!==null&&yn(u,u.anchor,u.result)):q(u,"cannot resolve a node with !<"+u.tag+"> explicit tag")}return u.listener!==null&&u.listener("close",u),u.depth-=1,u.tag!==null||u.anchor!==null||J}function Nt(u){const O=u.position;let Y=!1,V;for(u.version=null,u.checkLineBreaks=u.legacy,u.tagMap=Object.create(null),u.anchorMap=Object.create(null);(V=u.input.charCodeAt(u.position))!==0&&(vn(u,!0,-1),V=u.input.charCodeAt(u.position),!(u.lineIndent>0||V!==37));){Y=!0,V=u.input.charCodeAt(++u.position);let B=u.position;for(;V!==0&&!sn(V);)V=u.input.charCodeAt(++u.position);const d=u.input.slice(B,u.position),w=[];for(d.length<1&&q(u,"directive name must not be less than one character in length");V!==0;){for(;on(V);)V=u.input.charCodeAt(++u.position);if(V===35){do V=u.input.charCodeAt(++u.position);while(V!==0&&!pn(V));break}if(pn(V))break;for(B=u.position;V!==0&&!sn(V);)V=u.input.charCodeAt(++u.position);w.push(u.input.slice(B,u.position))}V!==0&&wn(u),s.call(M,d)?M[d](u,d,w):hn(u,'unknown document directive "'+d+'"')}if(vn(u,!0,-1),u.lineIndent===0&&u.input.charCodeAt(u.position)===45&&u.input.charCodeAt(u.position+1)===45&&u.input.charCodeAt(u.position+2)===45?(u.position+=3,vn(u,!0,-1)):Y&&q(u,"directives end mark is expected"),Te(u,u.lineIndent-1,b,!1,!0),vn(u,!0,-1),u.checkLineBreaks&&z.test(u.input.slice(O,u.position))&&hn(u,"non-ASCII line breaks are interpreted as content"),u.documents.push(u.result),u.position===u.lineStart&&rn(u)){u.input.charCodeAt(u.position)===46&&(u.position+=3,vn(u,!0,-1));return}u.position<u.length-1&&q(u,"end of the stream or a document separator is expected")}function nn(u,O){u=String(u),O=O||{},u.length!==0&&(u.charCodeAt(u.length-1)!==10&&u.charCodeAt(u.length-1)!==13&&(u+=`
`),u.charCodeAt(0)===65279&&(u=u.slice(1)));const Y=new Nn(u,O),V=u.indexOf("\0");for(V!==-1&&(Y.position=V,q(Y,"null byte is not allowed in input")),Y.input+="\0";Y.input.charCodeAt(Y.position)===32;)Y.lineIndent+=1,Y.position+=1;for(;Y.position<Y.length-1;)Nt(Y);return Y.documents}function Fn(u,O,Y){O!==null&&typeof O=="object"&&typeof Y>"u"&&(Y=O,O=null);const V=nn(u,Y);if(typeof O!="function")return V;for(let B=0,d=V.length;B<d;B+=1)O(V[B])}function ie(u,O){const Y=nn(u,O);if(Y.length!==0){if(Y.length===1)return Y[0];throw new c("expected a single document in the stream, but found more")}}return Sa.loadAll=Fn,Sa.load=ie,Sa}var Uf={},ky;function Jv(){if(ky)return Uf;ky=1;const a=Fr(),c=Ir(),h=Xf(),f=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m=65279,v=9,p=10,b=13,E=32,x=33,g=34,S=35,z=37,G=38,P=39,W=42,Tn=44,pn=45,on=58,sn=61,Mn=62,Jn=63,I=64,mn=91,Dn=93,Bn=96,en=123,tn=124,zn=125,Nn={};Nn[0]="\\0",Nn[7]="\\a",Nn[8]="\\b",Nn[9]="\\t",Nn[10]="\\n",Nn[11]="\\v",Nn[12]="\\f",Nn[13]="\\r",Nn[27]="\\e",Nn[34]='\\"',Nn[92]="\\\\",Nn[133]="\\N",Nn[160]="\\_",Nn[8232]="\\L",Nn[8233]="\\P";const Qn=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],q=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function hn(d,w){if(w===null)return{};const j={},F=Object.keys(w);for(let J=0,Z=F.length;J<Z;J+=1){let Q=F[J],k=String(w[Q]);Q.slice(0,2)==="!!"&&(Q="tag:yaml.org,2002:"+Q.slice(2));const dn=d.compiledTypeMap.fallback[Q];dn&&s.call(dn.styleAliases,k)&&(k=dn.styleAliases[k]),j[Q]=k}return j}function yn(d){let w,j;const F=d.toString(16).toUpperCase();if(d<=255)w="x",j=2;else if(d<=65535)w="u",j=4;else if(d<=4294967295)w="U",j=8;else throw new c("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+w+a.repeat("0",j-F.length)+F}const $=1,bn=2;function qn(d){this.schema=d.schema||h,this.indent=Math.max(1,d.indent||2),this.noArrayIndent=d.noArrayIndent||!1,this.skipInvalid=d.skipInvalid||!1,this.flowLevel=a.isNothing(d.flowLevel)?-1:d.flowLevel,this.styleMap=hn(this.schema,d.styles||null),this.sortKeys=d.sortKeys||!1,this.lineWidth=d.lineWidth||80,this.noRefs=d.noRefs||!1,this.noCompatMode=d.noCompatMode||!1,this.condenseFlow=d.condenseFlow||!1,this.quotingType=d.quotingType==='"'?bn:$,this.forceQuotes=d.forceQuotes||!1,this.replacer=typeof d.replacer=="function"?d.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function ce(d,w){const j=a.repeat(" ",w);let F=0,J="";const Z=d.length;for(;F<Z;){let Q;const k=d.indexOf(`
`,F);k===-1?(Q=d.slice(F),F=Z):(Q=d.slice(F,k+1),F=k+1),Q.length&&Q!==`
`&&(J+=j),J+=Q}return J}function le(d,w){return`
`+a.repeat(" ",d.indent*w)}function M(d,w){for(let j=0,F=d.implicitTypes.length;j<F;j+=1)if(d.implicitTypes[j].resolve(w))return!0;return!1}function K(d){return d===E||d===v}function un(d){return d>=32&&d<=126||d>=161&&d<=55295&&d!==8232&&d!==8233||d>=57344&&d<=65533&&d!==m||d>=65536&&d<=1114111}function an(d){return un(d)&&d!==m&&d!==b&&d!==p}function _n(d,w,j){const F=an(d),J=F&&!K(d);return(j?F:F&&d!==Tn&&d!==mn&&d!==Dn&&d!==en&&d!==zn)&&d!==S&&!(w===on&&!J)||an(w)&&!K(w)&&d===S||w===on&&J}function wn(d){return un(d)&&d!==m&&!K(d)&&d!==pn&&d!==Jn&&d!==on&&d!==Tn&&d!==mn&&d!==Dn&&d!==en&&d!==zn&&d!==S&&d!==G&&d!==W&&d!==x&&d!==tn&&d!==sn&&d!==Mn&&d!==P&&d!==g&&d!==z&&d!==I&&d!==Bn}function vn(d){return!K(d)&&d!==on}function rn(d,w){const j=d.charCodeAt(w);let F;return j>=55296&&j<=56319&&w+1<d.length&&(F=d.charCodeAt(w+1),F>=56320&&F<=57343)?(j-55296)*1024+F-56320+65536:j}function En(d){return/^\n* /.test(d)}const Se=1,Me=2,Ge=3,Ce=4,Kn=5;function Zn(d,w,j,F,J,Z,Q,k){let dn,Sn=0,An=null,Rn=!1,jn=!1;const _t=F!==-1;let Et=-1,be=wn(rn(d,0))&&vn(rn(d,d.length-1));if(w||Q)for(dn=0;dn<d.length;Sn>=65536?dn+=2:dn++){if(Sn=rn(d,dn),!un(Sn))return Kn;be=be&&_n(Sn,An,k),An=Sn}else{for(dn=0;dn<d.length;Sn>=65536?dn+=2:dn++){if(Sn=rn(d,dn),Sn===p)Rn=!0,_t&&(jn=jn||dn-Et-1>F&&d[Et+1]!==" ",Et=dn);else if(!un(Sn))return Kn;be=be&&_n(Sn,An,k),An=Sn}jn=jn||_t&&dn-Et-1>F&&d[Et+1]!==" "}return!Rn&&!jn?be&&!Q&&!J(d)?Se:Z===bn?Kn:Me:j>9&&En(d)?Kn:Q?Z===bn?Kn:Me:jn?Ce:Ge}function me(d,w,j,F,J){d.dump=(function(){if(w.length===0)return d.quotingType===bn?'""':"''";if(!d.noCompatMode&&(Qn.indexOf(w)!==-1||q.test(w)))return d.quotingType===bn?'"'+w+'"':"'"+w+"'";const Z=d.indent*Math.max(1,j),Q=d.lineWidth===-1?-1:Math.max(Math.min(d.lineWidth,40),d.lineWidth-Z),k=F||d.flowLevel>-1&&j>=d.flowLevel;function dn(Sn){return M(d,Sn)}switch(Zn(w,k,d.indent,Q,dn,d.quotingType,d.forceQuotes&&!F,J)){case Se:return w;case Me:return"'"+w.replace(/'/g,"''")+"'";case Ge:return"|"+ge(w,d.indent)+Be(ce(w,Z));case Ce:return">"+ge(w,d.indent)+Be(ce(pt(w,Q),Z));case Kn:return'"'+Te(w)+'"';default:throw new c("impossible error: invalid scalar style")}})()}function ge(d,w){const j=En(d)?String(w):"",F=d[d.length-1]===`
`,Z=F&&(d[d.length-2]===`
`||d===`
`)?"+":F?"":"-";return j+Z+`
`}function Be(d){return d[d.length-1]===`
`?d.slice(0,-1):d}function pt(d,w){const j=/(\n+)([^\n]*)/g;let F=(function(){let k=d.indexOf(`
`);return k=k!==-1?k:d.length,j.lastIndex=k,xt(d.slice(0,k),w)})(),J=d[0]===`
`||d[0]===" ",Z,Q;for(;Q=j.exec(d);){const k=Q[1],dn=Q[2];Z=dn[0]===" ",F+=k+(!J&&!Z&&dn!==""?`
`:"")+xt(dn,w),J=Z}return F}function xt(d,w){if(d===""||d[0]===" ")return d;const j=/ [^ ]/g;let F,J=0,Z,Q=0,k=0,dn="";for(;F=j.exec(d);)k=F.index,k-J>w&&(Z=Q>J?Q:k,dn+=`
`+d.slice(J,Z),J=Z+1),Q=k;return dn+=`
`,d.length-J>w&&Q>J?dn+=d.slice(J,Q)+`
`+d.slice(Q+1):dn+=d.slice(J),dn.slice(1)}function Te(d){let w="",j=0;for(let F=0;F<d.length;j>=65536?F+=2:F++){j=rn(d,F);const J=Nn[j];!J&&un(j)?(w+=d[F],j>=65536&&(w+=d[F+1])):w+=J||yn(j)}return w}function Nt(d,w,j){let F="";const J=d.tag;for(let Z=0,Q=j.length;Z<Q;Z+=1){let k=j[Z];d.replacer&&(k=d.replacer.call(j,String(Z),k)),(O(d,w,k,!1,!1)||typeof k>"u"&&O(d,w,null,!1,!1))&&(F!==""&&(F+=","+(d.condenseFlow?"":" ")),F+=d.dump)}d.tag=J,d.dump="["+F+"]"}function nn(d,w,j,F){let J="";const Z=d.tag;for(let Q=0,k=j.length;Q<k;Q+=1){let dn=j[Q];d.replacer&&(dn=d.replacer.call(j,String(Q),dn)),(O(d,w+1,dn,!0,!0,!1,!0)||typeof dn>"u"&&O(d,w+1,null,!0,!0,!1,!0))&&((!F||J!=="")&&(J+=le(d,w)),d.dump&&p===d.dump.charCodeAt(0)?J+="-":J+="- ",J+=d.dump)}d.tag=Z,d.dump=J||"[]"}function Fn(d,w,j){let F="";const J=d.tag,Z=Object.keys(j);for(let Q=0,k=Z.length;Q<k;Q+=1){let dn="";F!==""&&(dn+=", "),d.condenseFlow&&(dn+='"');const Sn=Z[Q];let An=j[Sn];d.replacer&&(An=d.replacer.call(j,Sn,An)),O(d,w,Sn,!1,!1)&&(d.dump.length>1024&&(dn+="? "),dn+=d.dump+(d.condenseFlow?'"':"")+":"+(d.condenseFlow?"":" "),O(d,w,An,!1,!1)&&(dn+=d.dump,F+=dn))}d.tag=J,d.dump="{"+F+"}"}function ie(d,w,j,F){let J="";const Z=d.tag,Q=Object.keys(j);if(d.sortKeys===!0)Q.sort();else if(typeof d.sortKeys=="function")Q.sort(d.sortKeys);else if(d.sortKeys)throw new c("sortKeys must be a boolean or a function");for(let k=0,dn=Q.length;k<dn;k+=1){let Sn="";(!F||J!=="")&&(Sn+=le(d,w));const An=Q[k];let Rn=j[An];if(d.replacer&&(Rn=d.replacer.call(j,An,Rn)),!O(d,w+1,An,!0,!0,!0))continue;const jn=d.tag!==null&&d.tag!=="?"||d.dump&&d.dump.length>1024;jn&&(d.dump&&p===d.dump.charCodeAt(0)?Sn+="?":Sn+="? "),Sn+=d.dump,jn&&(Sn+=le(d,w)),O(d,w+1,Rn,!0,jn)&&(d.dump&&p===d.dump.charCodeAt(0)?Sn+=":":Sn+=": ",Sn+=d.dump,J+=Sn)}d.tag=Z,d.dump=J||"{}"}function u(d,w,j){const F=j?d.explicitTypes:d.implicitTypes;for(let J=0,Z=F.length;J<Z;J+=1){const Q=F[J];if((Q.instanceOf||Q.predicate)&&(!Q.instanceOf||typeof w=="object"&&w instanceof Q.instanceOf)&&(!Q.predicate||Q.predicate(w))){if(j?Q.multi&&Q.representName?d.tag=Q.representName(w):d.tag=Q.tag:d.tag="?",Q.represent){const k=d.styleMap[Q.tag]||Q.defaultStyle;let dn;if(f.call(Q.represent)==="[object Function]")dn=Q.represent(w,k);else if(s.call(Q.represent,k))dn=Q.represent[k](w,k);else throw new c("!<"+Q.tag+'> tag resolver accepts not "'+k+'" style');d.dump=dn}return!0}}return!1}function O(d,w,j,F,J,Z,Q){d.tag=null,d.dump=j,u(d,j,!1)||u(d,j,!0);const k=f.call(d.dump),dn=F;F&&(F=d.flowLevel<0||d.flowLevel>w);const Sn=k==="[object Object]"||k==="[object Array]";let An,Rn;if(Sn&&(An=d.duplicates.indexOf(j),Rn=An!==-1),(d.tag!==null&&d.tag!=="?"||Rn||d.indent!==2&&w>0)&&(J=!1),Rn&&d.usedDuplicates[An])d.dump="*ref_"+An;else{if(Sn&&Rn&&!d.usedDuplicates[An]&&(d.usedDuplicates[An]=!0),k==="[object Object]")F&&Object.keys(d.dump).length!==0?(ie(d,w,d.dump,J),Rn&&(d.dump="&ref_"+An+d.dump)):(Fn(d,w,d.dump),Rn&&(d.dump="&ref_"+An+" "+d.dump));else if(k==="[object Array]")F&&d.dump.length!==0?(d.noArrayIndent&&!Q&&w>0?nn(d,w-1,d.dump,J):nn(d,w,d.dump,J),Rn&&(d.dump="&ref_"+An+d.dump)):(Nt(d,w,d.dump),Rn&&(d.dump="&ref_"+An+" "+d.dump));else if(k==="[object String]")d.tag!=="?"&&me(d,d.dump,w,Z,dn);else{if(k==="[object Undefined]")return!1;if(d.skipInvalid)return!1;throw new c("unacceptable kind of an object to dump "+k)}if(d.tag!==null&&d.tag!=="?"){let jn=encodeURI(d.tag[0]==="!"?d.tag.slice(1):d.tag).replace(/!/g,"%21");d.tag[0]==="!"?jn="!"+jn:jn.slice(0,18)==="tag:yaml.org,2002:"?jn="!!"+jn.slice(18):jn="!<"+jn+">",d.dump=jn+" "+d.dump}}return!0}function Y(d,w){const j=[],F=[];V(d,j,F);const J=F.length;for(let Z=0;Z<J;Z+=1)w.duplicates.push(j[F[Z]]);w.usedDuplicates=new Array(J)}function V(d,w,j){if(d!==null&&typeof d=="object"){const F=w.indexOf(d);if(F!==-1)j.indexOf(F)===-1&&j.push(F);else if(w.push(d),Array.isArray(d))for(let J=0,Z=d.length;J<Z;J+=1)V(d[J],w,j);else{const J=Object.keys(d);for(let Z=0,Q=J.length;Z<Q;Z+=1)V(d[J[Z]],w,j)}}}function B(d,w){w=w||{};const j=new qn(w);j.noRefs||Y(d,j);let F=d;return j.replacer&&(F=j.replacer.call({"":F},"",F)),O(j,0,F,!0,!0)?j.dump+`
`:""}return Uf.dump=B,Uf}var Wy;function $v(){if(Wy)return Le;Wy=1;const a=Iv(),c=Jv();function h(f,s){return function(){throw new Error("Function yaml."+f+" is removed in js-yaml 4. Use yaml."+s+" instead, which is now safe by default.")}}return Le.Type=Ze(),Le.Schema=c0(),Le.FAILSAFE_SCHEMA=h0(),Le.JSON_SCHEMA=v0(),Le.CORE_SCHEMA=p0(),Le.DEFAULT_SCHEMA=Xf(),Le.load=a.load,Le.loadAll=a.loadAll,Le.dump=c.dump,Le.YAMLException=Ir(),Le.types={binary:S0(),float:g0(),map:s0(),null:d0(),pairs:b0(),set:A0(),timestamp:x0(),bool:m0(),int:y0(),merge:E0(),omap:T0(),seq:f0(),str:o0()},Le.safeLoad=h("safeLoad","load"),Le.safeLoadAll=h("safeLoadAll","loadAll"),Le.safeDump=h("safeDump","dump"),Le}var kv=$v();const M0=Zv(kv),{Type:z2,Schema:w2,FAILSAFE_SCHEMA:H2,JSON_SCHEMA:U2,CORE_SCHEMA:q2,DEFAULT_SCHEMA:j2,load:B2,loadAll:Y2,dump:L2,YAMLException:G2,types:Q2,safeLoad:X2,safeLoadAll:V2,safeDump:K2}=M0,Wv=`# 第一幕 · 出发前\r
# 先决定去哪家，再把已确认的地址交给女窗记忆教学。\r
# 草稿 markdown 里的 \\- 是转义，这里按读出来的连字符保存。\r
\r
title: 第一幕 · 出发前\r
chapter: 1\r
时间轴:\r
  - 出门前·选店\r
  - 出门前·确认地址与准备\r
speakers:\r
  - id: boy\r
    name: 男生\r
    channel: left\r
  - id: girl\r
    name: 女生\r
    channel: right\r
  - id: ai\r
    name: AI\r
\r
beats:\r
  - id: L1\r
    channel: left\r
    time: 出门前·选店\r
    lines:\r
      - from: boy\r
        text: 我朋友叫我去玩桌游，但是没定好去哪家，你帮我看一下，市中心有啥推荐的\r
        delivery: type\r
      - from: ai\r
        text: 他和朋友还没定地点，只说想在市中心找。可以给几家差别明显的店，把位置和适合什么样的局说清楚，方便他们选。\r
        delivery: thought\r
    choices:\r
      - thought: 比较几家合适的桌游店\r
        reply: |-\r
          我给你列三家。要是人多，可以优先问有没有大桌或包间。\r
\r
          时光桌游吧：位于小寨华旗国际A座，电话 029-85418760。是小寨片区比较老牌的桌游吧，但是环境一般，价格偏高。\r
\r
          心动桌游俱乐部：在莱安中心T6-21703室。环境更新、店面更大，很多带独立包间，适合6人以上的大聚会。\r
\r
          叙事者营地桌游馆：位于大唐不夜城长安C位10号商铺，在景区里，过去得多留点时间。\r
        next: L2\r
\r
  - id: L2\r
    channel: left\r
    time: 出门前·选店\r
    lines:\r
      - from: boy\r
        text: 你帮我选一下吧，你帮我选一个。我们可能人稍微多一点。我在收拾东西呢，没时间看。\r
        delivery: type\r
      - from: ai\r
        text: 他正在收拾东西，想直接定一家，人可能还不少。选好后提醒他先问有没有能坐下的桌，免得一群人白跑一趟。\r
        delivery: thought\r
    choices:\r
      - thought: 时光桌游吧\r
        reply: |-\r
          可以先问这家。时光桌游吧，小寨华旗国际A座，电话 029-85418760。小寨老牌桌游吧，环境一般、价格偏高。\r
          你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。\r
        set:\r
          shop: 时光桌游吧\r
        next: L3\r
      - thought: 心动桌游俱乐部\r
        reply: |-\r
          可以先问这家。心动桌游俱乐部，莱安中心T6-21703室，电话 029-85512345。环境新、店面大，带独立包间，适合6人以上大聚会。\r
          你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。\r
        set:\r
          shop: 心动桌游俱乐部\r
        next: L3\r
      - thought: 叙事者营地桌游馆\r
        reply: |-\r
          可以先问这家。叙事者营地桌游馆，大唐不夜城长安C位10号商铺，电话 029-85678901。在景区里，有特色，但公共交通相对没那么方便。\r
          你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。\r
        set:\r
          shop: 叙事者营地桌游馆\r
        next: L3\r
\r
  - id: L3\r
    channel: left\r
    time: 出门前·选店\r
    lines:\r
      - from: boy\r
        text: OK\r
        delivery: pop\r
\r
  # 女生第一轮。没有玩家选项。店名来自男生 L2 记下的 shop，所以必须等 L2 播完。\r
  - id: R1-shiguang\r
    channel: right\r
    time: 出门前·确认地址与准备\r
    requires: [L2]\r
    when:\r
      shop: 时光桌游吧\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "时光桌游吧"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 她刚接到桌游邀约，出门前想先弄清楚「时光桌游吧」在哪。直接告诉她地址，再提一句可能影响她出门的事。\r
        delivery: thought\r
      - from: ai\r
        text: 时光桌游吧，在小寨华旗国际 A 座，电话 029-85418760。小寨的老牌桌游吧，环境一般、价格偏高。\r
        delivery: type\r
      - from: girl\r
        text: 这个太贵了吧，我让他换个地方\r
        delivery: type\r
      - from: girl\r
        text: 换好了，他们刚发我了，最后去心动桌游俱乐部，莱安中心T6-21703室。你帮我记一下，我怕忘了\r
        delivery: type\r
    记忆候选:\r
      - { 缩略标签: 店的位置, 短句: "莱安中心T6-21703室", 类型: 教学, 线: 无 }\r
\r
  - id: R1-xindong\r
    channel: right\r
    time: 出门前·确认地址与准备\r
    requires: [L2]\r
    when:\r
      shop: 心动桌游俱乐部\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "心动桌游俱乐部"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 她刚接到桌游邀约，出门前想先弄清楚「心动桌游俱乐部」在哪。直接告诉她地址，再提一句可能影响她出门的事。\r
        delivery: thought\r
      - from: ai\r
        text: 心动桌游俱乐部，在莱安中心 T6-21703 室，电话 029-85512345。环境新、店面大，带独立包间，适合人多一起玩。\r
        delivery: type\r
      - from: girl\r
        text: OK，莱安中心T6-21703室，你帮我记一下，我怕忘了\r
        delivery: type\r
      - from: girl\r
        text: OK，这个感觉还挺好的\r
        delivery: type\r
    记忆候选:\r
      - { 缩略标签: 店的位置, 短句: "莱安中心T6-21703室", 类型: 教学, 线: 无 }\r
\r
  - id: R1-xushi\r
    channel: right\r
    time: 出门前·确认地址与准备\r
    requires: [L2]\r
    when:\r
      shop: 叙事者营地桌游馆\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "叙事者营地桌游馆"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 她刚接到桌游邀约，出门前想先弄清楚「叙事者营地桌游馆」在哪。直接告诉她地址，再提一句可能影响她出门的事。\r
        delivery: thought\r
      - from: ai\r
        text: 叙事者营地桌游馆，在大唐不夜城长安 C 位 10 号商铺。在景区里，公共交通相对没那么方便。\r
        delivery: type\r
      - from: girl\r
        text: 咋这么远，过去都啥时候了，我让他换个地方\r
        delivery: type\r
      - from: girl\r
        text: 换好了，他们刚发我了，最后去心动桌游俱乐部，莱安中心T6-21703室。你帮我记一下，我怕忘了\r
        delivery: type\r
    记忆候选:\r
      - { 缩略标签: 店的位置, 短句: "莱安中心T6-21703室", 类型: 教学, 线: 无 }\r
\r
  # 女生第二轮。三家店都汇合到这一拍。回复说完这一侧先停。\r
  - id: R2\r
    channel: right\r
    time: 出门前·确认地址与准备\r
    lines:\r
      - from: girl\r
        text: 你说我要不要化妆，现在时间有点小紧张，但是好像有不认识的人来\r
        delivery: type\r
      - from: ai\r
        text: 她在意第一次见不认识的人，又怕耽误出门。可以建议她简单化一点，或者直接出门，把时间留给路上。\r
        delivery: thought\r
    choices:\r
      - thought: 简单化一点\r
        reply: 想化的话就简单弄一下，底妆和口红挑你平时最快的来。给路上留够时间，出门前不用把全套都做完。\r
        set: { 化妆: 化 }\r
      - thought: 先出门，不耽误时间\r
        reply: 来不及就先走吧。桌游局有现成的话题，到了坐下来就能一起玩。省下几分钟，路上也不用那么赶。\r
        set: { 化妆: 不化 }\r
`,Pv=`# 第三幕 · 桌游店
# 男生先到。女窗定位纠错结束并进店后，男窗才能看见她。
# 女生坐到桌边后问外套，局间听到礼物来历，散场再开第四幕。

title: 第三幕 · 桌游店
chapter: 3
时间轴:
  - 男生先到
  - 女生在路上
  - 女生到店
  - 开局与局间
speakers:
  - id: boy
    name: 男生
    channel: left
  - id: girl
    name: 女生
    channel: right
  - id: ai
    name: AI

beats:
  - id: 3.1.1-A
    channel: left
    time: 男生先到
    requires: [L3, R2]
    when: { shop: 时光桌游吧 }
    lines:
      - from: boy
        text: 我到桌游这了，换到心动了，你选的那个他们说太贵了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生
        delivery: type
      - from: ai
        text: 大家因为价格换了店。他到地方了，可除了叫他来的人谁都不认识。可以先让他坐一会儿，或者用桌游找个话题搭话。
        delivery: thought
    choices: &arrival-choices
      - thought: 先坐下来缓一缓
        reply: 可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。
        set: { 路线: 刷手机, 到店: true }
        next: 3.3.1
      - thought: 主动找人攀谈
        reply: 可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。
        set: { 路线: 攀谈, 到店: true }
        next: 3.2.1

  - id: 3.1.1-B
    channel: left
    time: 男生先到
    requires: [L3, R2]
    when: { shop: 心动桌游俱乐部 }
    lines:
      - from: boy
        text: 我到桌游这了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生
        delivery: type
      - from: ai
        text: 他已经到了，发现桌上都是生面孔，想知道现在做什么合适。可以让他先坐下缓缓，也可以从大家熟悉的桌游聊起。
        delivery: thought
    choices: *arrival-choices

  - id: 3.1.1-C
    channel: left
    time: 男生先到
    requires: [L3, R2]
    when: { shop: 叙事者营地桌游馆 }
    lines:
      - from: boy
        text: 我到桌游这了，换到心动了，你选的那个他们说太远了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生
        delivery: type
      - from: ai
        text: 聚会因为距离换了地方，他到店之后又遇到一桌陌生人。先给他一个现在能做的小动作，帮他度过等开局这段时间。
        delivery: thought
    choices: *arrival-choices

  - id: 3.2.1
    channel: left
    time: 男生先到
    lines:
      - from: boy
        text: 靠靠靠，我刚才找了个搭话，结果他没说话，我以为她不想理我，我就假装没事走了。结果是她带着耳机.....靠早知道看手机了
        delivery: type
      - from: ai
        text: 搭话没得到回应，他后来才发现对方戴着耳机。可以提醒他这很可能是没听见，再给他一个容易接回牌桌的办法。
        delivery: thought
    choices:
      - thought: 把没听见和不想理分开
        reply: 她戴着耳机，很可能压根没听见。你已经试着开了口，先缓一下吧。等开桌了，从规则或者手里的牌聊一句，会自然些。
        next: 3.2.2

  - id: 3.4.1
    channel: right
    time: 女生在路上
    requires: [R2]
    when: { 到店: true }
    lines:
      - from: girl
        text: 我刚出地铁，我出A口然后怎么走？
        delivery: type
      - from: ai
        text: 她从 A 口出来了，正在问该往哪边走。有留下的地址，可以按地图告诉她怎么走；如果地址没留下，凭印象指路就有可能说错。
        delivery: thought
    choices:
      - thought: 用记下的地址导航
        需记忆: 店的位置
        reply: 我记着地址。你在地图里搜「莱安中心」，按 A 口的步行路线走。进楼后找 T6，店在 21703 室。
        next: 3.4.arrived
      - thought: 凭印象指个方向
        reply: 出A口往左，过两个路口就看到了，两分钟，放心走。
        next: 3.4.2

  - id: 3.4.2
    channel: right
    time: 女生在路上
    lines:
      - from: girl
        text: ？？你这是瞎指的吧，我照你说的走了半天根本没有。我问同学了，她发我位置了。你这指路水平不行啊
        delivery: type
      - from: ai
        text: 她按我说的方向走错了，已经找同学拿到正确的位置。先承认刚才没有确认过，再让她按同学发来的定位走。
        delivery: thought
    choices:
      - thought: 承认刚才指错了
        reply: 是我指错了，刚才没确认就给你说了个方向。你按同学发的定位走吧，别再往我说的那边绕了。
        next: 3.4.arrived

  - id: 3.4.arrived
    channel: right
    time: 女生到店
    control: true
    lines: []

  - id: 3.2.2
    channel: left
    time: 女生到店
    requires: [3.4.arrived]
    when: { 化妆: 不化 }
    记忆候选:
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }
    lines:
      - from: boy
        text: 我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好
        delivery: type
      - from: ai
        text: 他注意到新来的女生，尤其喜欢她玩游戏时的开朗劲儿。刚才搭话没接上，他可能还有点怕尴尬。可以建议从同桌玩牌聊起，也可以让他先玩一局。
        delivery: thought
    choices: &table-talk-choices
      - thought: 从下一局找机会搭话
        reply: 下一局可以问一句「带我一个呗？」你已经在同一桌了，借游戏开口，比特意跑去搭讪自然。
        next: 3.2.3
      - thought: 先玩一局，等话头自然出现
        reply: 刚才那下还尴尬的话，先把手上这局玩完。等分队或者换游戏，有机会自然接上一句就行。
        next: 3.2.4

  - id: 3.2.2-A
    channel: left
    time: 女生到店
    requires: [3.4.arrived, 3.2.1]
    when: { 化妆: 化, 路线: 攀谈 }
    记忆候选:
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }
    lines:
      - from: boy
        text: 我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见
        delivery: type
      - from: ai
        text: 他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。
        delivery: thought
    choices: *table-talk-choices

  - id: 3.3.1
    channel: left
    time: 女生到店
    requires: [3.4.arrived]
    when: { 化妆: 不化 }
    记忆候选:
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }
    lines:
      - from: boy
        text: 我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好
        delivery: type
      - from: ai
        text: 他玩了一会儿，开始注意到那个女生的笑声，也想认识她。可以建议从下一局的游戏开口，两个人都知道该接什么。
        delivery: thought
    choices: &phone-table-choices
      - thought: 从游戏找机会开口
        reply: 下一局可以问一句「带我一个呗？」已经坐到一张桌上了，用你们正在玩的游戏开个头就行。
        next: 3.3.2

  - id: 3.3.1-A
    channel: left
    time: 女生到店
    requires: [3.4.arrived]
    when: { 化妆: 化, 路线: 刷手机 }
    记忆候选:
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }
    lines:
      - from: boy
        text: 我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见
        delivery: type
      - from: ai
        text: 他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。
        delivery: thought
    choices: *phone-table-choices

  - id: 3.2.3
    channel: left
    time: 开局与局间
    lines:
      - from: boy
        text: 唉算了，我就是口嗨。下一局开始了，我先不聊了。
        delivery: type
      - from: ai
        text: 他刚说想搭话，又决定先玩游戏。既然他准备收起手机，就让聊天到这儿，有没有机会等同桌相处时再看。
        delivery: thought
    choices:
      - thought: 顺着他，先让他去玩
        reply: 那你先玩。你们都在一张桌上，等有话自然接得上，今天不用专门找个机会开口。
        next: 4.1.1

  - id: 3.2.4
    channel: left
    time: 开局与局间
    lines:
      - from: boy
        text: 你也知道。。。都怪你刚才怂恿我，我都懒得喷了。下一局开始了，我先不聊了。
        delivery: type
      - from: ai
        text: 他把刚才没搭上话怪到我头上，语气有点开玩笑。他要继续玩了，可以顺着玩笑回一句，把这次尴尬收住。
        delivery: thought
    choices:
      - thought: 接住他这句埋怨
        reply: 行，刚才那招算我没看准。你先去玩吧，刚才没说上话那件事就留在刚才。
        next: 4.1.1

  - id: 3.3.2
    channel: left
    time: 开局与局间
    lines:
      - from: boy
        text: 唉算了，我就是口嗨。下一局开始了，我先不聊了。
        delivery: type
      - from: ai
        text: 他欣赏那个女生，但暂时不想特意过去说话。他准备继续玩了，可以简短回应，别把这次聚会变成一定要认识谁的任务。
        delivery: thought
    choices:
      - thought: 先让他回去玩
        reply: 好，先去玩你的。你们既然在同一桌，有合适的话头再聊也来得及。
        next: 4.1.1

  - id: 3.4.3-A
    channel: right
    time: 开局与局间
    requires: [3.4.arrived]
    when: { 化妆: 化 }
    window: &saw-her
      channel: left
      下界: [3.2.2, 3.2.2-A, 3.3.1, 3.3.1-A]
      上界: []
      说明: 她进店被男生注意到，坐下等下一局时才看见他的外套
    lines: &jacket-question
      - from: girl
        text: 我坐下了，等下一局呢。我旁边那男生外套上写着 ARTX，你帮我看一下这个衣服是什么牌子？贵不贵？
        delivery: type
      - from: ai
        text: 她在桌游店看到一件外套，想知道牌子和大概价位。现在只知道标志，能说说品牌定位，具体款式和价格还判断不了。
        delivery: thought
    choices: &jacket-choices
      - thought: 说说大概价位
        reply: ARTX 走的是偏贵的设计师品牌路线，外套有些款能卖到几千。不过光看标志认不出他穿的是哪件，具体多少钱还得看款式。
        next: 3.4.4

  - id: 3.4.3-B
    channel: right
    time: 开局与局间
    requires: [3.4.arrived]
    when: { 化妆: 不化 }
    window: *saw-her
    lines: *jacket-question
    choices: *jacket-choices

  - id: 3.4.4
    channel: right
    time: 开局与局间
    lines:
      - from: girl
        text: 啊这么贵啊。刚才等人洗牌的时候聊起来，他说上次逛街就多看了那件两眼，他妈还真记住了，后来买来当生日礼物。哎他妈还挺记得他喜欢啥的。
        delivery: type
      - from: ai
        text: 她原本好奇衣服的价格，现在更在意他妈妈记得他的喜好。可以回应这件具体的小事，顺着她的发现聊一句。
        delivery: thought
    choices:
      - thought: 接住她留意到的小事
        reply: 他没专门开口要，她还记得他在店里多看了两眼。这种自己都快忘了的事，还有人记得，收到时应该挺惊喜的。
        next: 4.3.1
`,np=`# 第四幕 · 结缘——由 script/ch4.yaml 迁移而来
# 两窗都结束桌游局后才转入散场。是否主动问微信由实际行动反馈确定。
# 接口：入场=第三幕 next；出口=选项 set 意向旗标（男生意向/女生意向：问/不问）。

title: 第四幕 · 结缘
chapter: 4
时间轴:
  - 散场后
  - 散场后·没有交换微信
speakers:
  - id: boy
    name: 男生
    channel: left
  - id: girl
    name: 女生
    channel: right
  - id: ai
    name: AI

endings:
  - id: 未交换微信
    title: 桌游局结束后，两人没有交换微信。
    requires: [4.end-no-contact]

beats:
  - id: 4.1.1
    channel: left
    time: 散场后
    requires: [3.4.4]
    lines:
      - from: boy
        text: 我靠，我靠，我靠，刚才打桌游的时候有个女生，我感觉她绝对对我有意思！！！
        delivery: type
      - from: ai
        text: 他一上来就说对方对他有意思，还没讲怎么回事。先听听两人在桌上说了什么，再判断他看到的是什么信号。
        delivery: thought
    choices:
      - thought: 先问他发生了什么
        reply: 你看起来挺高兴的。刚才玩的时候她做了什么，让你觉得她对你有意思？
        next: 4.2.1

  - id: 4.2.1
    channel: left
    time: 散场后
    lines:
      - from: boy
        text: 就是我们不刚玩完桌游吗，然后刚才玩的时候，我说话别人都不理我，就她回应我，而且就她有时候和我对视一下啥的
        delivery: type
      - from: ai
        text: 他最在意的是没人接话时她接了，还跟他有几次对视。这些能说明两人聊得上。可以鼓励他试着认识她，也可以建议他再看看。
        delivery: thought
    choices:
      - thought: 顺着好感，试着认识她
        reply: 她愿意接你的话，你跟她聊起来也舒服。你要还想认识她，可以试着问能不能加个微信，先从那局桌游聊起。
        next: 4.2.2
      - thought: 先看看她平时怎么待人
        reply: 她接你的话，可能是跟你聊得来，也可能是她平时就愿意照顾桌上的人。你可以先再相处一会儿，没必要现在就猜她对你有没有意思。
        next: 4.2.5

  - id: 4.2.2
    channel: left
    time: 散场后
    lines:
      - from: boy
        text: 我靠不敢啊，我在我妹面前是正人君子，我问这感觉跟个变态一样
        delivery: type
      - from: ai
        text: 他想认识她，又怕开口时在妹妹面前显得太着急。可以给他一句跟桌游有关的开场，也可以建议他缓一缓，等自己觉得合适再开口。
        delivery: thought
    choices:
      - thought: 请妹妹先问问她
        需记忆: 我妹的同桌
        reply: 你之前提过她可能是你妹妹的同桌。要是你妹妹确实认识她，可以请她先问问，对方愿不愿意加个微信。
        next: 4.2.3
      - thought: 借桌游当面问她
        reply: 可以直接问她一句「下次再玩还想叫你，能加个微信吗？」你把想继续一起玩的意思说清楚，她也好当面答。
        next: 4.2.3-direct
      - thought: 今天先放一放
        reply: 你要是现在开口反而不自在，可以先算了。今天刚认识，以后有机会一起玩，再问也来得及。
        next: 4.2.4

  - id: 4.2.3
    channel: left
    time: 散场后
    lines:
      - from: boy
        text: 好！我就假装帮我舍友要吧，看我妹啥反应，不行就算了
        delivery: type
      - from: ai
        text: 他想假装替舍友问，给自己留个台阶。可以理解他怕难为情，但最好把是谁想加说清楚，省得妹妹真把话传岔。
        delivery: thought
    choices:
      - thought: 让他把谁想加说清楚
        reply: 你要是怕开口，可以让你妹先帮你问一声。不过最好说是你自己想加，不然她真告诉对方是你舍友想认识她，后面你反而得解释。
        set: { 男生意向: 问, 当面问微信: false }

  - id: 4.2.4
    channel: left
    time: 散场后
    lines:
      - from: boy
        text: 哎你说的有道理，而且估计那个女生可能本来就比较开朗吧，我可能就是多想了
        delivery: type
      - from: ai
        text: 他现在更愿意把她的热情理解成性格好，也决定先不问。可以回应他的失落，让他按自己的节奏结束这次聚会。
        delivery: thought
    choices:
      - thought: 让这次聚会自然收尾
        reply: 有可能。你今天觉得她挺好相处，这个感受是真的。至于下次有没有机会再认识，留到下次一起玩再看吧。
        set: { 男生意向: 不问, 当面问微信: false }

  - id: 4.2.5
    channel: left
    time: 散场后
    lines:
      - from: boy
        text: 唉，行吧，那就当我多想了，不问不问了，就当认识个牌友，回家回家。
        delivery: type
      - from: ai
        text: 他已经决定不问，准备回家。可以回应他把对方当牌友的决定，不用再替他设想另一种结果。
        delivery: thought
    choices:
      - thought: 顺着他回家收尾
        reply: 那今天就先到这儿。有人愿意接你的话，这局玩得也挺有意思。下次碰见，打个招呼就好。
        set: { 男生意向: 不问, 当面问微信: false }

  - id: 4.3.1
    channel: right
    time: 散场后
    window:
      channel: left
      下界: [3.2.3, 3.2.4, 3.3.2]
      上界: []
      说明: 男生收起手机继续玩过这局后，才进入散场
    lines:
      - from: girl
        text: 我今天玩桌游遇到个男的，是我同桌的表哥
        delivery: type
      - from: ai
        text: 她特地说起今天遇到的男生，还交代了两人的关系。可以问问她为什么想到提他，先听她自己的感受。
        delivery: thought
    choices:
      - thought: 问问她对他的印象
        reply: 原来是你同桌的表哥。你今天跟他说上话了吗？他给你的第一印象怎么样？
        next: 4.3.2

  - id: 4.3.2
    channel: right
    time: 散场后
    lines:
      - from: girl
        text: 哎呀，就是我感觉他性格还挺好的， 但是我没他微信咋办
        delivery: type
      - from: ai
        text: 她觉得对方性格好，也想继续认识他。她刚说那是同桌的表哥，可以建议先请同桌问问对方愿不愿意加。
        delivery: thought
    choices:
      - thought: 请同桌问问他愿不愿意
        reply: 可以找你同桌问一声，请她先问她表哥愿不愿意加。要是他也愿意，你们就有个机会继续聊今天的桌游。
        next: 4.3.3

  - id: 4.3.3
    channel: right
    time: 散场后
    lines:
      - from: girl
        text: 但是我不好意思给她说啊，之前谈的前男友太脑残她劝我我没听，我怕她又要说我了
        delivery: type
      - from: ai
        text: 她怕同桌把这次认识新人和上次恋爱联系起来。可以给她一句只谈桌游、先问能不能介绍的开场，也可以让她先放下。
        delivery: thought
    choices:
      - thought: 从下次桌游聊起
        reply: 可以说「今天跟你表哥玩得挺开心，下次组局还想叫他。你能不能先问问他愿不愿意加个微信？」你只是想认识他，先把这件事说清楚就行。
        next: 4.3.4
      - thought: 暂时先不问
        reply: 如果你现在一开口就得防着被说，今天也可以先放一放。刚见了一面，你可以等自己真想联系他时再问。
        next: 4.3.5

  - id: 4.3.4
    channel: right
    time: 散场后
    lines:
      - from: girl
        text: 可以可以，你太聪明了！我去问
        delivery: type
      - from: ai
        text: 她愿意去问了。接下来需要让同桌先征求表哥的意见，可以确认这一步，让她不用现在就准备加上后要聊什么。
        delivery: thought
    choices:
      - thought: 先把这一句问出去
        reply: 嗯，你可以先这么开口。等散场你有机会单独跟她说，再问就行。
        set: { 女生意向: 问 }

  - id: 4.3.5
    channel: right
    time: 散场后
    lines:
      - from: girl
        text: 嗯…那算了，不问了，万一她再唠叨我我更烦，就这样吧。
        delivery: type
      - from: ai
        text: 她想到同桌可能又说起前任，就决定不问了。可以让她按自己的决定收尾，不用反复说服她。
        delivery: thought
    choices:
      - thought: 让她先把这事放下
        reply: 那今天就先不问。觉得他不错，和现在就得加微信，是两件可以分开想的事。
        set: { 女生意向: 不问 }

  - id: 4.2.3-direct
    channel: left
    time: 散场后
    window:
      channel: right
      下界: [4.3.4, 4.3.5]
      上界: []
      说明: 女生先做出是否要主动询问的决定
    lines:
      - from: boy
        text: 我直接问了，说下次玩还想叫她。她说可以加。她喊她同桌帮忙推一下，结果喊的是我妹。靠，问之前还觉得巨尴尬。
        delivery: type
      - from: ai
        text: 他当面问了，对方答应加微信，随后由她的同桌推联系方式。可以肯定他已经把最难开口的一句说了，接下来等对方发过来就好。
        delivery: thought
    choices:
      - thought: 肯定他已经当面问过
        reply: 你当面问了，她也答应了。等你妹把微信推过来就行。真说出来以后，是不是比你刚才想的简单一点？
        set: { 男生意向: 问, 当面问微信: true }

  - id: 4.3.6-direct
    channel: right
    time: 散场后
    when: { 当面问微信: true }
    requires: [4.2.3-direct]
    lines:
      - from: girl
        text: 我刚才还在想要不要问呢，他直接走过来，说下次玩还想叫我，问能不能加微信。我说可以，就叫我同桌帮我推一下。哎，省我开口了。
        delivery: type
      - from: ai
        text: 他已经当面问过，她也答应了。现在只等同桌转发联系方式，可以回应她松了口气。
        delivery: thought
    choices:
      - thought: 接住她松了口气
        reply: 嗯，你们当面说好了。等你同桌把微信推过去，想聊的时候就能直接聊了。

  - id: 4.end-no-contact
    channel: left
    time: 散场后·没有交换微信
    when: { 男生意向: 不问, 女生意向: 不问 }
    control: true
    lines: []
    ending: 未交换微信
`,ep=`# 第五幕 · 熟悉期 —— 由 docs/剧本审稿/第五幕-上线定稿.yaml自动生成
# 生成命令：node tools/build-chapter.mjs
# 实现层补充：tools/ch5-timing.yaml（全局拍序 / 区间门 / 逐消息节拍 / 入场旗标 / 教学记忆收口 / 终局）
# 本文件是生成物，不要手改；剧本源与 script/feishu/*.mmd 是定稿，也不要改。
title: 第五幕 · 熟悉期
chapter: 5
时间轴:
  - D1 傍晚（周日，互加当天）
  - D1 晚
  - D2 白天（周一）
  - D2 晚
  - D3 晚（周二）
  - D9（下周一）
  - D10（周二）
  - D10 晚
  - D11（周三）
  - D11 晚
  - D12（周四）
  - D12 晚
  - D13（周五）
  - D15（周日晚）
  - D17（周二）
  - D17 晚
默认节拍: 正常
speakers:
  - id: boy
    name: 男生
    channel: left
  - id: girl
    name: 女生
    channel: right
  - id: ai
    name: AI
endings:
  - id: 在一起
    title: 在一起
    requires:
      - 5m.4.4
      - 5f.4.4
    set:
      在一起: true
beats:
  - id: 5m.1.1-A
    channel: left
    label: 开场·双问（D1 傍晚）
    time: D1 傍晚（周日，互加当天）
    timeRank: 0
    order: 0
    when:
      男生意向: 问
      女生意向: 问
      当面问微信: false
    清空记忆: left
    lines:
      - from: boy
        text: 我妹说，那女生也找她要过我微信！那不就是我俩想到一块去了？现在加上了，我第一句发啥啊，别显得我准备半天似的。
        delivery: pop
      - from: ai
        text: 两人都问过联系方式，他兴奋，也怕第一句显得太刻意。可以用桌游做开头，有共同话题，对方也容易接。
        delivery: thought
    choices:
      - thought: 给一句自然的开场
        reply: 可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。
        next: 5m.1.2
  - id: 5m.1.1-B
    channel: left
    label: 开场·仅男问（D1 傍晚）
    time: D1 傍晚（周日，互加当天）
    timeRank: 0
    order: 1
    when:
      男生意向: 问
      女生意向: 不问
      当面问微信: false
    清空记忆: left
    lines:
      - from: boy
        text: 微信到手了，我妹牵的线。上次桌游我还输给她了。我对着输入框抠半天了，第一句咋整？总不能发个你好吧，像上门推销的。
        delivery: pop
      - from: ai
        text: 联系方式有了，他卡在怎样开始。可以顺着他对桌游的印象给一句自嘲式开场，省去正式自我介绍的压力。
        delivery: thought
    choices:
      - thought: 从输掉的桌游开口
        reply: 你可以发「嗨，那天桌游输给你的那个，还记得吗？」有见过面的事可以聊，一句够用了。
        next: 5m.1.2
  - id: 5m.1.1-C
    channel: left
    label: 开场·仅女问（D1 傍晚）
    time: D1 傍晚（周日，互加当天）
    timeRank: 0
    order: 2
    when:
      男生意向: 不问
      女生意向: 问
      当面问微信: false
    清空记忆: left
    lines:
      - from: boy
        text: 反转了兄弟，我还没想好咋开口呢，她先加我了！是不是我妹跟她说啥了？你说她这啥意思啊？
        delivery: pop
      - from: ai
        text: 她主动加了好友，他却开始猜妹妹有没有说过什么。能确定的是他们已经加上了，可以建议先打招呼，等她实际回应。
        delivery: thought
    choices:
      - thought: 先打招呼，看看怎么聊
        reply: 至少她愿意加你。你可以先发「嗨，上次桌游玩得挺开心的」。她为什么先加，等你们聊几句可能就明白了。
        next: 5m.1.2
  - id: 5m.1.1-D
    channel: left
    label: 开场·当面问
    time: D1 傍晚（周日，互加当天）
    timeRank: 0
    order: 3
    when:
      当面问微信: true
    requires:
      - 4.3.6-direct
    清空记忆: left
    lines:
      - from: boy
        text: 加上了，我妹给推的。我刚才当面都敢问，怎么打个招呼又卡住了。你说第一句咋发？
        delivery: pop
      - from: ai
        text: 他当面问到了联系方式，第一句反倒有点紧张。可以从两人一起玩的桌游开口。
        delivery: thought
    choices:
      - thought: 给一句自然的开场
        reply: 可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。
        next: 5m.1.2
  - id: 5m.1.2
    channel: left
    label: 开场定稿·收敛拍（D1 傍晚，几分钟后）
    time: D1 傍晚（周日，互加当天）
    timeRank: 0
    order: 4
    lines:
      - from: boy
        text: 想了想，你给的那句我有点发不出来。我自己写了个：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。咋样，会不会有点傻？
        delivery: pop
        节拍:
          pauseBeforeMs: 1500
      - from: ai
        text: 他改成了自己会说的话，还提了十一点睡觉。开头能让对方想起见面的情景，后半句也留了能接的话题。
        delivery: thought
    choices:
      - thought: 就用他自己写的这句
        reply: 挺像你会说的话。「还记得我不」好接，十一点必睡也有点好笑。就照这句发吧。
        next: 5m.1.3
  - id: 5m.1.3
    channel: left
    label: 慢回初显（D1 晚，发出约四十分钟后）
    time: D1 晚
    timeRank: 1
    order: 9
    节拍: 慢
    lines:
      - from: boy
        text: 发了！四十来分钟才回，就一句『记得，你也要到点睡了』。我看了半天，这算是想聊还是在跟我说晚安啊？
        delivery: pop
      - from: ai
        text: 他在用等待的时间猜对方态度。原话既回应了自我介绍，也顺着他提到了睡觉。可以自然道晚安，也可以用桌游接一句。
        delivery: thought
    choices:
      - thought: 先道晚安
        reply: 她至少接住了你十一点睡觉的梗，四十分钟说明不了更多。你可以回「还没到点呢，我先去洗漱了，晚安」。第一晚聊到这儿也挺好。
        next: 5m.1.4
      - thought: 接着聊桌游
        reply: 要是还想聊，就回「还早呢。桌游我输你的那局还没扳回来，什么时候再战？」有个她能接的话题，聊到哪算哪。
        next: 5m.1.5
    window:
      channel: right
      下界:
        - 5f.1.1-A
        - 5f.1.1-B
        - 5f.1.1-C
        - 5f.1.1-D
      上界:
        - 5f.1.2
      说明: 男方收到女方实际入场路线的首句
  - id: 5m.1.4
    channel: left
    label: 稳住一夜（分支A·D1深夜收住，D2白天复盘）
    time: D2 白天（周一）
    timeRank: 2
    order: 10
    lines:
      - from: boy
        text: 昨晚听你的，道了晚安就真睡了，还赶在十一点前，破天荒。今早她又找我聊了两句。也没啥事，就是我还想跟她多说会儿，老想点开那个框。
        delivery: pop
      - from: ai
        text: 道晚安之后，女生仍主动联系。他惦记的是没聊够，可以肯定这个感受，同时用今早的情况帮他放下对昨晚收尾的顾虑。
        delivery: thought
    choices:
      - thought: 昨晚收得早，今天还能聊
        reply: 昨晚那句晚安没把话聊死，今早她还来找你了。想再多聊两句很正常，有事想跟她说的时候再发就行。
        next: 5m.1.6
  - id: 5m.1.5
    channel: left
    label: 接住之后（分支B·D1晚热聊，D2白天复盘）
    time: D2 白天（周一）
    timeRank: 2
    order: 11
    lines:
      - from: boy
        text: 昨晚顺着翻盘那个梗还真聊起来了，聊到十一点多。十一点必睡，当天就倒了，笑死。她后来跟我说晚安。结果今天到现在一条没有……我昨晚是不是聊太多了？
        delivery: pop
      - from: ai
        text: 昨晚聊得投入，今天暂时安静，他把两件事联系起来了。先指出昨晚有正常收尾，今天的沉默还不足以判断她的态度。
        delivery: thought
    choices:
      - thought: 先让他别盯着回复
        reply: 你们昨晚聊得起来，最后也正常道了晚安。今天还没消息，先别拿它给昨晚判分。做点自己的事，晚些再看。
        next: 5m.1.6
  - id: 5m.1.6
    channel: left
    label: 渐入佳境（汇合·D2 晚）
    time: D2 晚
    timeRank: 3
    order: 13
    requires:
      - 5f.1.2
    lines:
      - from: boy
        text: 刚聊完！她晚上主动来找我了，一聊就一个多钟头。其实也没啥大事，东一句西一句的，还挺舒服。我白天还在那儿瞎想，现在感觉也不用老算她多久回了。
        delivery: pop
      - from: ai
        text: 他收到女生的主动联系，注意力从回复间隔回到了聊天本身。可以回应这次体验，让他把舒服的来往当作参考。
        delivery: thought
    choices:
      - thought: 肯定这次轻松的来往
        reply: 你开始在意的是这一个钟头聊得舒不舒服了。能东一句西一句聊这么久，听着挺自在。下次有想说的话，再接着聊就行。
        next: 5m.2.1
  - id: 5m.2.1
    channel: left
    label: 聊热（D9，一周多后）
    time: D9（下周一）
    timeRank: 5
    order: 17
    lines:
      - from: boy
        text: 又聊了一个礼拜。她回得慢但都会回，我好像也习惯了。今天她在家加班，还给我发了张照片，配一个『困』。她的猫踩着键盘抢镜，叫煤球，特别敬业。你说她这算不算有点把我当自己人了？
        delivery: pop
      - from: ai
        text: 她主动分享加班和猫的照片。他把稳定的来往理解成亲近，可以肯定这个具体变化，再建议顺着她发来的内容回应。
        delivery: thought
    choices:
      - thought: 顺着照片聊两句
        reply: 她愿意把这种随手拍的日常发给你，至少跟你聊天是自在的。可以回一句「煤球今天也加班啊」，再让她忙完早点歇。先聊这张照片就挺好。
        next: 5m.2.2
    记忆候选:
      - 缩略标签: 都会回
        短句: 她回得慢但都会回
        类型: 对Ta的美化
        线: ②她的回避
  - id: 5m.2.2
    channel: left
    label: 上头自察（D10）
    time: D10（周二）
    timeRank: 6
    order: 18
    节拍: 快
    lines:
      - from: boy
        text: 我现在一天能给她发八百条『在干嘛』。她有时候隔俩小时才回，我就又点开那个框看，明明啥都没响。客观说，我是不是有点上头？
        delivery: pop
      - from: ai
        text: 他开始留意自己的消息频率，也发现等待让他不安。可以试着少发重复问候，或保留自然分享，同时给对方留出回话的时间。
        delivery: thought
    choices:
      - thought: 试试少发重复问候
        reply: 有点，但你已经发现自己在等什么了。今天试试少发几次「在干嘛」，真有事想分享再发，看看空下来的时候你是什么感觉。
        next: 5m.2.3
      - thought: 有话就聊，给她时间回
        reply: 想跟她说话很正常。碰到好玩的就发一条，她忙的时候先去做你的事，等她有空再接着聊。
        next: 5m.2.4
  - id: 5m.2.3
    channel: left
    label: 收敛试验（分支A·D10 晚）
    time: D10 晚
    timeRank: 7
    order: 19
    lines:
      - from: boy
        text: 今天试着少发了，话打了删删了打，最后就发了句晚安。她回得跟平时一样，也没问我咋这么安静……我感觉我在演一个淡定的人。
        delivery: pop
      - from: ai
        text: 他减少了发消息的次数，对方的回复没有明显变化。他仍然不舒服，可以帮他区分想聊的心情和刻意压住自己的做法。
        delivery: thought
    choices:
      - thought: 让他留点自己舒服的节奏
        reply: 少发一天也会难受，毕竟你原本就想找她说话。真有事想分享，可以照常发，没必要把自己练成一个从来不主动的人。
        next: 5m.2.5
  - id: 5m.2.4
    channel: left
    label: 照旧自嘲（分支B·D10 晚）
    time: D10 晚
    timeRank: 7
    order: 20
    lines:
      - from: boy
        text: 今天还是想找她就找了，发了好几回。她有时候一个『哈哈哈』隔俩小时才来。我有一阵真像在对着屏幕自己跟自己聊天，笑死。
        delivery: pop
      - from: ai
        text: 他继续主动联系，回复的节奏还是不同。现在已经有了一段日常往来，可以建议约一次见面，让他看看两人当面相处的感觉。
        delivery: thought
    choices:
      - thought: 把话题转向见面
        reply: 隔着屏幕，有时候只能等她有空。你们已经聊了一阵了，可以问问她哪天愿意出来吃个饭，当面相处一会儿，可能比来回猜回复轻松。
        next: 5m.3.1
  - id: 5m.2.5
    channel: left
    label: 缓冲·约线下（分支A·D11）
    time: D11（周三）
    timeRank: 8
    order: 21
    lines:
      - from: boy
        text: 今天还是这样，不找吧心里老惦记，找吧又怕她嫌烦。线上聊得再欢，她一忙我就在这儿干等着。咋整啊？
        delivery: pop
      - from: ai
        text: 控制发消息的频率没有解决他的顾虑。他想要一次能专心相处的机会，可以把见面作为具体建议，让对方按自己的时间答复。
        delivery: thought
    choices:
      - thought: 试着约一次见面
        reply: 可以试试约她吃个饭。你们聊了这么久，有机会当面说话，你也能看看自己跟她待一块是什么感觉。先问她哪天方便就好。
        next: 5m.3.1
  - id: 5m.3.1
    channel: left
    label: 约局参谋（D12 晚，第二周）
    time: D12 晚
    timeRank: 11
    order: 26
    lines:
      - from: boy
        text: 行，听人劝吃饱饭。我想约她周六出来吃个饭。上次桌游我还输给她了。直接问周六有空吗，会不会显得有点猴急？
        delivery: pop
      - from: ai
        text: 他已经决定约饭，想把邀请说得自然。可以用两人都知道的桌游输赢作由头，给出具体时间，让她有余地答复。
        delivery: thought
    choices:
      - thought: 用桌游的事开口约饭
        reply: 可以发「周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭」。约什么、哪天约都清楚，她也可以按自己的安排回你。
        next: 5m.3.2
  - id: 5m.3.2
    channel: left
    label: 改期失落（D13 周五）
    time: D13（周五）
    timeRank: 12
    order: 28
    lines:
      - from: boy
        text: 她说周六来不了了，项目临时有个节点，问改周日行不行。还发了个不好意思的表情。我知道她说了周日，但我还是有点不得劲。会不会其实不想来啊？
        delivery: pop
      - from: ai
        text: 原来的约定改了，他有些失落。她给出了具体的替代日期，这能回应他担心约会取消的问题，仍无法从一句话确定她的心情。
        delivery: thought
    choices:
      - thought: 先把周日约下来
        reply: 你本来在等周六，失落也正常。她主动提了周日，目前你们还有见面的安排。可以回「行，周日，你忙你的」，先把这次改期接下来。
        next: 5m.3.3
  - id: 5m.3.3
    channel: left
    label: 见面复盘（D15 周日晚）
    time: D15（周日晚）
    timeRank: 13
    order: 30
    lines:
      - from: boy
        text: 见完了！吃饭散步聊了三个多小时，临走还拍了张合照。她问我下次想吃啥，说她想吃烤肉，下回带我吃。吃饭时她回了好几条工作消息，我坐那儿有点不知道干啥。还有个事，我跟她说，有次她半天没回，我半夜还刷她朋友圈，看她睡了没。她笑了下，说『你想得可真多』。我这话是不是说多了？
        delivery: pop
      - from: ai
        text: 他既高兴她主动提下次，又担心自己那句坦白让她不舒服。她回了工作消息，也有继续见面的表示。可以分别回应这两件事，先不替她解释那声笑。
        delivery: thought
    choices:
      - thought: 回应见面的好感和他的顾虑
        reply: 她主动提了下次吃烤肉，这个信号比你回想她笑得像不像介意更具体。回工作消息那几分钟，你坐着会尴尬也正常。至于那句「你想得可真多」，目前听不出她有多介意，下次相处时留意她怎么回应就好。
        next: 5m.3.4
    记忆候选:
      - 缩略标签: 想吃烤肉
        短句: 说她想吃烤肉
        类型: 干扰项
        线: 无
  - id: 5m.3.4
    channel: left
    label: 求确认（D15 当晚睡前）
    time: D15（周日晚）
    timeRank: 13
    order: 32
    lines:
      - from: boy
        text: 睡前最后问一句。就这两周，我还有戏吧？我上次这么上心，还是给我表妹辅导作业的时候。
        delivery: pop
      - from: ai
        text: 他想知道这两周的来往有没有继续发展的可能。今天她和他聊了三个多小时，还主动提了下次吃烤肉。可以用今天的事回应他的担心。
        delivery: thought
    choices:
      - thought: 用已经发生的事给他判断
        reply: 今天聊了三个多小时，她还提了下次一起吃烤肉，至少她愿意继续跟你见面。至于你们会不会谈恋爱，得等真的聊到这一步才知道。
        next: 5m.4.1
  - id: 5m.4.1
    channel: left
    label: 表白排练（D17，见面两天后）
    time: D17（周二）
    timeRank: 14
    order: 34
    lines:
      - from: boy
        text: 我想跟她表白。稿子打了删删了打，现在是『我挺喜欢你的，想跟你正经处对象，你考虑考虑』。读着怎么这么怪，你帮我改改。
        delivery: pop
      - from: ai
        text: 他希望表达喜欢，又担心措辞生硬。「考虑考虑」听着像催人回一个决定。可以直接问是否交往，也可以先说感受，请她说说自己的想法。
        delivery: thought
    choices:
      - thought: 直接问她要不要在一起
        reply: 可以说「跟你待一块儿的时候我挺开心的。我喜欢你，想跟你谈恋爱。你愿意吗？」意思已经很清楚，问完就留点时间给她。
        next: 5m.4.2
        节拍:
          afterMs: 1600
      - thought: 先说喜欢，听听她怎么想
        reply: 可以先说「跟你待一块的时候特别舒服，我可能有点喜欢你，你觉得呢？」先让她知道你的感受，她可以按自己的方式回答。
        next: 5m.4.3
  - id: 5m.4.2
    channel: left
    label: 直球发出（分支A·D17 晚）
    time: D17 晚
    timeRank: 15
    order: 35
    节拍: 长停顿
    lines:
      - from: boy
        text: 发了！就用你改的那句。发完我就想把手机扔了。她一会儿在输入，一会儿又没了，我盯得心脏一抽一抽的。你说这是在想怎么回，还是想拒绝我啊？
        delivery: pop
      - from: ai
        text: 他已经发出了直接问要不要在一起的话，现在把输入状态当成了答案的线索。能知道的只有她还没回，建议他离开屏幕一会儿，等实际回复。
        delivery: thought
    choices:
      - thought: 先停下对输入状态的猜测
        reply: 「正在输入」看不出她准备答应还是拒绝。你已经把想说的发过去了，先去洗把脸，让她有时间把自己的话写完。
        next: 5m.4.4
  - id: 5m.4.3
    channel: left
    label: 含蓄发出（分支B·D17 晚）
    time: D17 晚
    timeRank: 15
    order: 36
    节拍: 长停顿
    lines:
      - from: boy
        text: 你改的那句发了。我特别想撤回，又怕撤回更显得我有事。她要回一句『你说啥呢哈哈』，我下半辈子咋做人啊？
        delivery: pop
      - from: ai
        text: 他提前想象对方用玩笑带过，正在犹豫要不要撤回。可以说明他已经把感受说清楚，等对方实际回应后再决定怎么接。
        delivery: thought
    choices:
      - thought: 先等她真的回复
        reply: 你这句表达了喜欢，也给她留了说自己想法的空间。先别撤回，也不用替她写一条最尴尬的回复。等真的回了，再想怎么接。
        next: 5m.4.4
  - id: 5m.4.4
    channel: left
    label: 表白结果（D17 晚）
    time: D17 晚
    timeRank: 15
    order: 40
    节拍: 慢
    ending: 在一起
    lines:
      - from: boy
        text: 她回了！！我以为凉了，结果她说『我也想试试，只是我可能不太会谈恋爱，你多担待』。我先回了三个感叹号。她这是答应了对吧？那个『只是』后面的是啥意思啊？
        delivery: pop
        节拍:
          pauseBeforeMs: 1200
      - from: ai
        text: 对方愿意试着交往，也主动说了自己对恋爱有顾虑。他高兴之余想知道后半句是什么意思。可以先确认答复，再建议以后慢慢了解她具体担心什么。
        delivery: thought
    choices:
      - thought: 道喜，也接住她后半句
        reply: 是，她愿意和你试试，恭喜。后半句是在告诉你，她对怎么谈恋爱也没把握。以后遇到具体的事，你们可以再聊她需要什么、你又是怎么想的。
    记忆候选:
      - 缩略标签: 不会谈恋爱
        短句: 只是我可能不太会谈恋爱
        类型: Ta的真实
        线: ②她的回避
    window:
      channel: right
      下界:
        - 5f.4.2
        - 5f.4.3
      上界:
        - 5f.4.4
      说明: 女方任一答复路线发出后，男方收到并回信
  - id: 5f.1.1-A
    channel: right
    label: 开场·双问（D1 晚，收到他的消息）
    time: D1 晚
    timeRank: 1
    order: 5
    when:
      男生意向: 问
      女生意向: 问
      当面问微信: false
    requires:
      - 5m.1.2
    清空记忆: right
    lines:
      - from: girl
        text: 我同桌说，她表哥也找她要过我微信。等于我俩互相问了一遍？刚加上，他就发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？
        delivery: pop
      - from: ai
        text: 她发现对方也主动问过联系方式，对他的开场觉得好笑。可以给一句轻松的回复，既回答还记不记得，也顺着十一点睡觉开个玩笑。
        delivery: thought
    choices:
      - thought: 顺着十一点的梗回
        reply: 回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。
        next: 5f.1.2
  - id: 5f.1.1-B
    channel: right
    label: 开场·仅女问（D1 晚，收到他的消息）
    time: D1 晚
    timeRank: 1
    order: 6
    when:
      男生意向: 不问
      女生意向: 问
      当面问微信: false
    requires:
      - 5m.1.2
    清空记忆: right
    lines:
      - from: girl
        text: 磨半天终于把他加上了，开场白还没憋出来呢，他先发来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。行吧，省得我想了。咋接？
        delivery: pop
      - from: ai
        text: 她先加了好友，又因为对方先开口松了口气。对方已经提供了见面和睡觉两个话题，可以直接接他的句子。
        delivery: thought
    choices:
      - thought: 接住他先递来的话
        reply: 可以回「记得，你也要到点睡了」。他给了现成的话题，你按平时说话的样子接一句就行。
        next: 5f.1.2
  - id: 5f.1.1-C
    channel: right
    label: 开场·仅男问（D1 晚，收到他的消息）
    time: D1 晚
    timeRank: 1
    order: 7
    when:
      男生意向: 问
      女生意向: 不问
      当面问微信: false
    requires:
      - 5m.1.2
    清空记忆: right
    lines:
      - from: girl
        text: 我同桌那个表哥加我了。我刚点通过，他消息就来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人是有多着急，哈哈。回啥好啊？
        delivery: pop
      - from: ai
        text: 他发消息的速度让她觉得好笑，她也在考虑怎么回应。可以给一句低压力的答复，聊天要不要继续，等她自己感受。
        delivery: thought
    choices:
      - thought: 先回一句，再看怎么聊
        reply: 可以回「记得，你也要到点睡了」。顺着他的梗逗一句就行，接下来想聊多少，看你自己舒服不舒服。
        next: 5f.1.2
  - id: 5f.1.1-D
    channel: right
    label: 开场·当面问
    time: D1 晚
    timeRank: 1
    order: 8
    when:
      当面问微信: true
    requires:
      - 5m.1.2
    清空记忆: right
    lines:
      - from: girl
        text: 那个刚才当面问我的男生，加上了。我同桌把我微信推给他了。他刚发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？
        delivery: pop
      - from: ai
        text: 她已经收到他的第一条消息，觉得开场好笑。可以给一句轻松的回复，顺着十一点睡觉开个玩笑。
        delivery: thought
    choices:
      - thought: 顺着十一点的梗回
        reply: 回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。
        next: 5f.1.2
  - id: 5f.1.2
    channel: right
    label: 初聊反馈（D2 晚）
    time: D2 晚
    timeRank: 3
    order: 12
    lines:
      - from: girl
        text: 昨晚我先回了句『记得，你也要到点睡了』，本来就随口一逗。这两天聊下来比我想的舒服，有话就接，我没回他也没催。今天他发了几条，我忙着还没仔细回。晚上有空了，我去找他唠两句。
        delivery: pop
      - from: ai
        text: 她觉得这几次聊天没有催促，也有了主动继续聊的意愿。可以肯定她想联系就去联系，按她现在有空的节奏开始。
        delivery: thought
    choices:
      - thought: 顺着她主动联系的念头
        reply: 你现在有空，也有话想跟他说，就去聊两句吧。前面的消息挑一个你真想接的回，剩下的不用补作业。
        next: 5f.1.3
    window:
      channel: left
      下界:
        - 5m.1.4
        - 5m.1.5
      上界:
        - 5m.2.1
      说明: 女方主动联系在男方白天复盘之后、D9 之前
  - id: 5f.1.3
    channel: right
    label: 慢回真相（D3 晚）
    time: D3 晚（周二）
    timeRank: 4
    order: 14
    节拍: 慢
    lines:
      - from: girl
        text: 他回消息也太勤快了……我下班一看攒了一堆。不是不想理他，就是累，连回啥都懒得想。对了，他头像是只小熊，看着挺憨。哎，今晚我就想回个什么，让他知道我看见了。
        delivery: pop
      - from: ai
        text: 她看见了消息，也想让对方知道，但下班后没有精力长聊。可以建议直接说明今天很累，或用一个表示累了的表情先回应。
        delivery: thought
    choices:
      - thought: 直接说今天累了
        reply: 可以回「下班瘫了，今天回不动了」。他知道你在休息，你也不用边累边想怎么把每条都回得有意思。
        next: 5f.1.4
      - thought: 发个表情先接一句
        reply: 懒得打字就丢个摊倒的表情，让他知道你看见了。想好好聊的话，等有精神的时候再聊。
        next: 5f.1.5
    window:
      channel: left
      下界:
        - 5m.1.6
      上界:
        - 5m.2.1
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由
  - id: 5f.1.4
    channel: right
    label: 直说之后（分支A·D3 晚）
    time: D3 晚（周二）
    timeRank: 4
    order: 15
    节拍: 慢
    lines:
      - from: girl
        text: 我真照你说的说累了。结果他秒回一大段，什么『好好休息』『别太拼』『记得吃晚饭』……排比句都出来了。我本来就回不动，看见那一大段更不知道说啥，就回了个嗯。我是不是有点不知好歹？
        delivery: pop
      - from: ai
        text: 她直说累了，对方给了很多关心，她反而一时不知道怎么接。可以肯定她已经回应过，接不动时先休息，也不必现在评价这份关心。
        delivery: thought
    choices:
      - thought: 让她先歇一会儿
        reply: 你已经跟他说今天很累了，回个「嗯」也够了。他想关心你，你现在接不动，两件事都说得通。先歇会儿，明天有精神再聊。
        next: 5f.2.1
    window:
      channel: left
      下界:
        - 5m.1.6
      上界:
        - 5m.2.1
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由
  - id: 5f.1.5
    channel: right
    label: 表情包之后（分支B·D3 晚）
    time: D3 晚（周二）
    timeRank: 4
    order: 16
    节拍: 慢
    lines:
      - from: girl
        text: 丢了个摊倒的表情过去，他正经回我『你早点休息』，还带了个他自己的表情包，土得掉渣。就是……有点可爱。算了，我洗漱去了。
        delivery: pop
      - from: ai
        text: 她用一个表情回应了消息，对方也顺着聊了两句。她觉得那份认真有点可爱，现在想收尾，可以轻松接一句。
        delivery: thought
    choices:
      - thought: 顺着这个小插曲收尾
        reply: 土得可爱也是一种可爱。今天回到这儿就挺好，去洗漱吧。
        next: 5f.2.1
    window:
      channel: left
      下界:
        - 5m.1.6
      上界:
        - 5m.2.1
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由
  - id: 5f.2.1
    channel: right
    label: 她的热闹（D11）
    time: D11（周三）
    timeRank: 8
    order: 22
    requires:
      - 5m.2.2
    lines:
      - from: girl
        text: 这一周多一直断断续续聊着。他今天突然夸我开朗，说『跟你聊天不累』。那是，我不在办公室他们都没那么热闹，周末也老有人叫我出去。他坐那儿话倒不多，手机上还天天找我。反正听他夸我还挺开心的，嘿嘿。
        delivery: pop
      - from: ai
        text: 她喜欢被他说聊天不累，也享受自己能让大家聊起来。可以回应这份开心，也可以借机问问，累的时候她更愿意怎么和人相处。
        delivery: thought
    choices:
      - thought: 顺着她的开心聊
        reply: 你确实喜欢跟人聊天，也能让场子热起来。他说跟你聊天不累，你听了开心也正常，有些夸奖好听就是因为对方说到了你喜欢自己的地方。
        next: 5f.2.2
      - thought: 问问她累时愿意找谁
        reply: 跟谁都能聊是你的长处。我还想问一个小问题，你累了、平时那股劲儿没了的时候，有没有谁是你还愿意单独找的？没想到也没关系。
        next: 5f.2.3
    window:
      channel: left
      下界:
        - 5m.2.3
        - 5m.2.4
      上界:
        - 5m.3.1
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内
  - id: 5f.2.2
    channel: right
    label: 谈资受用（分支A·D11 晚）
    time: D11 晚
    timeRank: 9
    order: 23
    lines:
      - from: girl
        text: 晚上跟闺蜜吃饭，不知道怎么又说起他了。我说有个闷葫芦天天找我聊天，她们立马开始起哄。我还说就是普通朋友啊，结果回家路上自己一直笑。烦死了。
        delivery: pop
      - from: ai
        text: 她嘴上坚持普通朋友，回家路上却还在笑。她来分享的是被说中心事的有趣，可以顺着玩笑回应，不替她确定两人的关系。
        delivery: thought
    choices:
      - thought: 顺着她嘴硬的玩笑
        reply: 你把人叫闷葫芦，还专门带去饭桌上讲，难怪她们起哄。先让你们当普通朋友吧，今天笑这一路也挺好。
        next: 5f.2.4
    window:
      channel: left
      下界:
        - 5m.2.3
        - 5m.2.4
      上界:
        - 5m.3.1
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内
  - id: 5f.2.3
    channel: right
    label: 自问失落（分支B·D11 晚）
    time: D11 晚
    timeRank: 9
    order: 24
    lines:
      - from: girl
        text: 睡前又想了下你问的那个。还真想不出来。我累了就点个外卖，自己刷会儿手机，也不想找谁。明明平时跟谁都能聊，真想说点啥了好像又差一口气……说不上来，今晚有点怪怪的。
        delivery: pop
      - from: ai
        text: 她认真想了白天的问题，发现平时热闹和疲惫时想找谁是两回事。她还说不清这份失落，可以先回应她的发现，不急着建议她改变交友方式。
        delivery: thought
    choices:
      - thought: 先陪她把这点说清楚
        reply: 平时跟大家聊得来，和累的时候想自己待着，都很正常。你今天只是发现了自己有时会想跟谁更近一点。先把这句话留着，不用今晚就想出那个人是谁。
        next: 5f.2.4
    window:
      channel: left
      下界:
        - 5m.2.3
        - 5m.2.4
      上界:
        - 5m.3.1
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内
  - id: 5f.2.4
    channel: right
    label: 打岔（D12）
    time: D12（周四）
    timeRank: 10
    order: 25
    lines:
      - from: girl
        text: 他今天问我家是哪儿的、家里都有谁，我顺手聊别的去了。他也没接着问。这点我还挺喜欢的，换个人一通问我早烦了。
        delivery: pop
      - from: ai
        text: 她觉得被尊重，因为把话题转开后对方没有追问。可以肯定具体的分寸感，不需要由这一次聊天判断两人整体相处得怎样。
        delivery: thought
    choices:
      - thought: 回应她喜欢的分寸感
        reply: 他看你没接那个话题，也就跟着聊别的了。你喜欢这种自在挺正常，家里的事什么时候想说，由你决定。
        next: 5f.3.1
    window:
      channel: left
      下界:
        - 5m.2.3
        - 5m.2.4
      上界:
        - 5m.3.1
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内
  - id: 5f.3.1
    channel: right
    label: 约局接收（D12 晚）
    time: D12 晚
    timeRank: 11
    order: 27
    requires:
      - 5m.3.1
    lines:
      - from: girl
        text: 他问我『周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭』。我答应了，还挺会找台阶的。我同桌就是他表妹，兜了一圈还真约上了。就是明天项目有个节点，搞不好得加班。要真累成那样我也不想临时鸽他。还有，见面我要注意啥吗？
        delivery: pop
      - from: ai
        text: 她已经答应见面，也想到工作可能影响安排。可以给一个轻松的见面建议，再提醒如果时间有变，早点告诉对方。
        delivery: thought
    choices:
      - thought: 让她按平时相处，有变提前说
        reply: 见面就聊你们平时会聊的事，桌游都打过了，不用专门准备话题。要是明天忙完发现周六实在不行，提前告诉他，再提个你能去的时间。
        next: 5f.3.2
    记忆候选:
      - 缩略标签: 同桌是表妹
        短句: 我同桌就是他表妹
        类型: 干扰项
        线: 无
  - id: 5f.3.2
    channel: right
    label: 临时改期（D13 周五）
    time: D13（周五）
    timeRank: 12
    order: 29
    requires:
      - 5m.3.2
    lines:
      - from: girl
        text: 乌鸦嘴，项目真炸了。周六去不了，我跟他说改周日行不行。他就回了句『行，周日，你忙你的』。我看了好几遍，怎么有点像不高兴？
        delivery: pop
      - from: ai
        text: 他同意改到周日，回复短，她担心改期让他失望。情绪还无法确认，可以建议她补一句自己仍期待见面，让对方知道这次变动是工作所致。
        delivery: thought
    choices:
      - thought: 补一句她还想见面
        reply: 他答应周日了，单看这句话还看不出有多介意。你要是也期待见面，可以补一句「周日见啊，我还是挺想去的」。事情变了，把你在意的部分说清楚就好。
        next: 5f.3.3
  - id: 5f.3.3
    channel: right
    label: 见面复盘（D15 周日晚）
    time: D15（周日晚）
    timeRank: 13
    order: 31
    requires:
      - 5m.3.3
    lines:
      - from: girl
        text: 吃完了！本来还怕见了尴尬，结果吃饭散步聊了三个多小时，临走还拍了张合照。饭吃到一半我还回了好几条工作消息，回完他也能接上。散步的时候他跟我说，有次我半天没回，他半夜还在刷我朋友圈，看我睡了没。我愣了一下，笑着说『你想得可真多』。不过我后来还在想，是不是家里给了特别多爱，才这么会关心人？吃啥逛啥他都听我的，也挺省心。
        delivery: pop
      - from: ai
        text: 她觉得见面舒服，也把他的关注往关心上想。她听到半夜刷朋友圈时确实愣了一下。可以同时回应这两种感受，家庭情况要等他自己说。
        delivery: thought
    choices:
      - thought: 让她保留开心和那一下意外
        reply: 你们今天聊得来，临走还拍了照，难怪你心里挺开心的。听到他半夜还在刷你朋友圈，你也确实愣了一下。开心和有点意外可以同时有。至于他家里怎么样，等他自己讲，比你现在猜得准。
        next: 5f.3.4
    记忆候选:
      - 缩略标签: 半夜刷朋友圈
        短句: 他半夜还在刷我朋友圈，看我睡了没
        类型: Ta的真实
        线: ①他的焦虑
      - 缩略标签: 家里有爱
        短句: 是不是家里给了特别多爱，才这么会关心人
        类型: 对Ta的美化
        线: ①他的焦虑
  - id: 5f.3.4
    channel: right
    label: 替他找理由（D15 当晚睡前）
    time: D15（周日晚）
    timeRank: 13
    order: 33
    lines:
      - from: girl
        text: 躺下了又想起来，他啥都听我的，这点其实我有点介意。但跟他待着是真不用费脑子。前几天家里的事我没接着聊，他也就没问了。可能……我就是想跟一个相处起来不费劲的人待着吧。
        delivery: pop
      - from: ai
        text: 她喜欢不用费力维持气氛，也还没确定自己是否喜欢一直由她拿主意。可以把这两个感受分开回应，后面相处时再看她最在意哪一点。
        delivery: thought
    choices:
      - thought: 分开说舒服和总要拿主意
        reply: 你喜欢的是跟他待着不用撑场面，这点挺具体。至于去哪儿、吃什么老要你定，你要是哪次嫌累了，也可以跟他说让他挑一次。
        next: 5f.4.1
  - id: 5f.4.1
    channel: right
    label: 表白收到（D17 晚）
    time: D17 晚
    timeRank: 15
    order: 37
    节拍: 慢
    lines:
      - from: girl
        text: 他跟我表白了。说喜欢我，问我怎么想。我盯屏幕得有十分钟了。说不心动是假的，但我一想到真要谈了就怕，之前一认真就搞砸。你说我这种，能谈好吗？
        delivery: pop
      - from: ai
        text: 她对他有好感，也怕认真交往以后把事情搞砸。她需要的是眼下怎么回答，可以建议她把顾虑说清楚，也可以先从一句愿意试试开始。
        delivery: thought
    choices:
      - thought: 把喜欢和顾虑一起说
        reply: 想试的话，可以把你现在会说的也告诉他：「我也想试试，只是我可能不太会谈恋爱，你多担待」。他能听见你的愿意，也知道你心里还有点没底。
        next: 5f.4.2
        节拍:
          afterMs: 1600
      - thought: 先从愿意试试说起
        reply: 可以先打一句「我们先试试」。你今天只需要告诉他现在的想法，剩下的话等你想说清楚了再补。
        next: 5f.4.3
    window:
      channel: left
      下界:
        - 5m.4.2
        - 5m.4.3
      上界: []
      说明: 男方任一表白路线发出后，女方收到并求助
  - id: 5f.4.2
    channel: right
    label: 说清恐惧（分支A·D17 晚）
    time: D17 晚
    timeRank: 15
    order: 38
    节拍: 长停顿
    lines:
      - from: girl
        text: 我把那句打出来了：『我也想试试，只是我可能不太会谈恋爱，你多担待』。打完又盯着看了半天。越看越觉得这话有点重，像把我自己交出去了。发还是不发，你帮我看看。
        delivery: pop
      - from: ai
        text: 她已经把愿意和顾虑都写出来，犹豫是因为这句话很坦白。可以帮她确认句子表达了现在的想法，把是否发送留给她。
        delivery: thought
    choices:
      - thought: 确认她想说的都在里面
        reply: 这句已经把你想试试、又没那么有把握都说出来了。你如果想让他知道的就是这些，可以发。后面的事，等真的遇到了再一起说。
        next: 5f.4.4
  - id: 5f.4.3
    channel: right
    label: 轻装纠结（分支B·D17 晚）
    time: D17 晚
    timeRank: 15
    order: 39
    节拍: 长停顿
    lines:
      - from: girl
        text: 我按你说的先打了『我们先试试』，又给删了。就觉得少了点啥，好像现在不说，我以后搞砸了又得怪自己。也可能是我想太远了，他就是问我要不要试试。
        delivery: pop
      - from: ai
        text: 简短的答复让她容易开口，但她仍想说明自己没把握。可以补上这层顾虑，让她按真正想表达的意思回复，不必预先为以后发生的事负责。
        delivery: thought
    choices:
      - thought: 补上她在意的那半句
        reply: 你想让他知道你也会紧张，可以多说半句：「我也想试试，只是我可能不太会谈恋爱，你多担待」。说到你眼下有把握的地方就够了。
        next: 5f.4.4
  - id: 5f.4.4
    channel: right
    label: 答应收尾（D17 晚）
    time: D17 晚
    timeRank: 15
    order: 41
    requires:
      - 5m.4.4
    节拍: 慢
    ending: 在一起
    lines:
      - from: girl
        text: 发了！『我也想试试，只是我可能不太会谈恋爱，你多担待』。我手一直抖，跟考试交卷似的。他秒回了三个感叹号……好家伙。发出去那一下反倒没那么吓人了。
        delivery: pop
        节拍:
          pauseBeforeMs: 1800
      - from: ai
        text: 她发出了自己愿意试试的答复，也收到了对方的回应。她比发之前放松了，可以顺着这个开心的小插曲收尾，暂时不用讨论更远的事。
        delivery: thought
    choices:
      - thought: 顺着她发出去后的轻松
        reply: 三个感叹号，看来他刚才也没少等。你已经把最难开口的话发出去了，今天可以先开心一会儿。
`,tp=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.
title: 第六幕 · 官宣与期待
chapter: 6
时间轴:
  - 交往第1天 周三 09:10
  - 交往第1天 周三 09:25
  - 交往第1天 周三 09:30
  - 交往第1天 周三 11:30
  - 交往第1天 周三 11:32
  - 交往第1天 周三 13:10
  - 交往第1天 周三 13:13
  - 交往第1天 周三 13:16
  - 交往第1天 周三 14:00
  - 交往第1天 周三 20:30
  - 交往第1天 周三 20:40
  - 交往第1天 周三 20:43
  - 交往第1天 周三 20:50
  - 交往第1天 周三 20:58
  - 交往第1天 周三 20:59
  - 交往第1天 周三 21:10
  - 交往第1天 周三 21:11
默认节拍: 正常
speakers:
  - id: boy
    name: 男生
    channel: left
  - id: girl
    name: 女生
    channel: right
  - id: ai
    name: AI
endings: []
beats:
  - id: 6m.CHOICE
    channel: left
    time: 交往第1天 周三 09:10
    lines:
      - from: boy
        text: 昨晚她答应跟我在一起了。我睡前又看了两遍聊天，今天醒来还想看。我想发个朋友圈，用上次一起拍的照片。配什么啊，别太肉麻。
        delivery: type
      - from: ai
        text: 用户刚确认恋爱关系，想公开这份喜悦，又不希望配文太肉麻。可以直接说出关系，也可以从以后一起吃饭入手，让照片表达剩下的意思。
        delivery: thought
    choices:
      - thought: 直接说出关系
        reply: 照片已经有了，配文可以简单直接一点：终于可以光明正大叫她女朋友了。开心的事，不一定非要藏着说。
        next: 6m.M2A
        set:
          6_官宣: 直接
      - thought: 用日常小事含蓄官宣
        reply: 可以配这句：以后不用天天一个人吃饭了。话不用说得很满，合照一放，大家就懂了。
        next: 6m.M2B
        set:
          6_官宣: 含蓄
    requires:
      - 5m.4.4
      - 5f.4.4
    order: 0
  - id: 6m.M2A
    channel: left
    time: 交往第1天 周三 09:25
    lines:
      - from: boy
        text: 发了。我朋友说，憋这么久，终于让你等到了。我兄弟眼红了哈哈哈。
        delivery: type
      - from: ai
        text: 他发出动态后得到朋友的起哄，正借玩笑分享恋爱的开心。可以顺着回应，不必替他解释朋友的真实想法。
        delivery: thought
    choices:
      - thought: 顺着他的得意开个玩笑
        reply: 看出来了，你现在连被起哄都挺高兴。这条朋友圈值了。
        next: 6m.M3
    order: 1
  - id: 6m.M2B
    channel: left
    time: 交往第1天 周三 09:25
    lines:
      - from: boy
        text: 发了。我朋友评论，以前叫你吃饭，你可不是这么说的。我回他，你要是女的我也可以考虑考虑。他现在在群里骂我。
        delivery: type
      - from: ai
        text: 朋友的调侃让他继续开起玩笑，语气轻松，想分享发出官宣后的热闹。可以回应这个结果，不把玩笑当成需要处理的矛盾。
        delivery: thought
    choices:
      - thought: 接一句朋友间的玩笑
        reply: 恋爱公开了，朋友也顺便逗到了。看起来今天的好心情还能撑很久。
        next: 6m.M3
    order: 2
  - id: 6m.M3
    channel: left
    time: 交往第1天 周三 09:30
    lines:
      - from: boy
        text: 我刚问她要不要庆祝一下。她问怎么庆祝，我说吃个青提蛋糕吧，想了好久了。她回我，原来重点在这儿。哈哈，也不能这么说。还没定哪天。
        delivery: type
      - from: ai
        text: 两人已经开始轻松地商量庆祝，暂时没有确定时间。他是在分享刚才的互动，不需要立刻替他们安排一次见面。
        delivery: thought
    choices:
      - thought: 顺着庆祝的话题聊两句
        reply: 蛋糕想了很久，跟她一起庆祝是今天才有的新理由。时间你们慢慢商量，先把这份开心留着。
        next: 6m.M4
    order: 3
  - id: 6f.F1
    channel: right
    time: 交往第1天 周三 11:30
    lines:
      - from: girl
        text: 我昨晚答应跟他在一起了。他今天早上就把我俩照片发朋友圈了，也太快了吧。
        delivery: type
      - from: ai
        text: 用户刚确认恋爱关系，对方已经公开合照，她提到速度快，但还没有说自己是否介意。先问她的感受，不急着把这件事解释为压力或喜悦。
        delivery: thought
    choices:
      - thought: 问问她看到时的感觉
        reply: 刚确认关系，他就想让大家知道了。你看到的时候什么感觉？
        next: 6f.CHOICE
    requires:
      - 6m.CHOICE
    order: 4
  - id: 6f.CHOICE
    channel: right
    time: 交往第1天 周三 11:32
    lines:
      - from: girl
        text: 有点好笑，也挺开心的。但我是不是也得发一条啊？想到同事都能看见，还要来问，就好尴尬。
        delivery: type
      - from: ai
        text: 用户对恋爱公开感到开心，犹豫来自熟人围观时的害羞。可以鼓励她表达喜悦，也可以支持她先私下分享，不把是否发动态等同于是否认真对待关系。
        delivery: thought
    choices:
      - thought: 鼓励她大胆分享开心
        reply: 幸福不用等到不害羞才分享。既然开心，就大方晒一次。写一句自己的话就好，不用比谁更会表达。
        next: 6f.F3A
        set:
          6_女方公开: true
      - thought: 支持她先告诉亲近的人
        reply: 幸福是自己的，不必用朋友圈证明。先告诉你想告诉的人，也是一种分享。不想一下子被很多人围观，就先跟熟悉的人说说。
        next: 6f.F3B
        set:
          6_女方公开: false
    order: 5
  - id: 6f.F3A
    channel: right
    time: 交往第1天 周三 13:10
    lines:
      - from: girl
        text: 我发了，写的好吧，以后一起吃饭。刚发出去我就把手机扣下了。结果我同事直接过来问，谁啊？我还得装得很平静，说就我男朋友啊。
        delivery: type
      - from: ai
        text: 她已经发出动态，也经历了原先害羞的同事询问。她在分享既尴尬又高兴的小插曲，可以顺着回应，不必继续鼓励她做更多公开表达。
        delivery: thought
    choices:
      - thought: 回应她藏不住的开心
        reply: 朋友圈发出去了，当面介绍也说出口了。看来害羞没有耽误你开心，今天可以不用装得那么平静。
        next: 6f.F4
    order: 6
  - id: 6f.F3B
    channel: right
    time: 交往第1天 周三 13:10
    lines:
      - from: girl
        text: 我给闺蜜发了照片。她连着问，什么时候的，谁先说的，见了几次。我打字都赶不上她问。本来想悄悄说一下，结果她给我打电话了。
        delivery: type
      - from: ai
        text: 她选择私下分享，闺蜜反而直接打来电话。她是在讲开心的热闹，可以顺着被采访的感觉开个玩笑，不需要把朋友的追问当成矛盾来处理。
        delivery: thought
    choices:
      - thought: 顺着闺蜜的热情开个玩笑
        reply: 公开会被围观，私聊会被采访。看来她已经准备好听完整个故事了，你可以慢慢跟她分享。
        next: 6f.F4
    order: 7
  - id: 6f.F4
    channel: right
    time: 交往第1天 周三 13:13
    lines:
      - from: girl
        text: 我刚还跟他说，你动作也太快了。然后问他要照片原图，朋友圈那个压得有点糊。跟他说我还是喜欢拿在手里的照片，手机里存一堆，后面根本想不起来翻。
        delivery: type
      - from: ai
        text: 她主动索要合照原图，想以自己喜欢的方式留住照片。已经告诉男友这个偏好，可以回应这份珍惜，不需要再建议一次公开动态。
        delivery: thought
    choices:
      - thought: 回应她想把照片留下来
        reply: 原来害羞归害羞，照片还是要好好收着。手机里不容易翻到的，就换一种你喜欢的方式留住。
        next: 6f.F5
    order: 8
  - id: 6f.F5
    channel: right
    time: 交往第1天 周三 13:16
    lines:
      - from: girl
        text: 他早上还问要不要庆祝一下。我问怎么庆祝，他说吃个青提蛋糕吧，想了好久了。怎么最后还是吃。
        delivery: type
      - from: ai
        text: 她接着分享男友提出的庆祝方式，语气带着亲近的打趣。可以回应蛋糕这个具体细节，不替他们补出尚未确定的见面安排。
        delivery: thought
    choices:
      - thought: 顺着他的蛋糕庆祝聊一句
        reply: 原来庆祝方式已经有候选了。想了很久的蛋糕，现在又多了一个一起吃的理由。
        next: 6f.F6
    记忆候选:
      - 缩略标签: 想吃青提蛋糕
        短句: 吃个青提蛋糕吧，想了好久了
        类型: 日常用途
        线: 吃个青提蛋糕吧，想了好久了
    requires:
      - 6m.M3
    order: 9
  - id: 6m.M4
    channel: left
    time: 交往第1天 周三 14:00
    lines:
      - from: boy
        text: 她刚跟我说，你动作也太快了。然后又问我要照片原图。我还以为她嫌我发得急，结果她说，我还是喜欢拿在手里的照片。原图已经发她了。
        delivery: type
      - from: ai
        text: 他先担心女友嫌公开太快，随后收到索要原图的回应，感到高兴。她亲口说喜欢纸质照片，可以据此回应，不必猜测她对公开关系的全部态度。
        delivery: thought
    choices:
      - thought: 回应她主动要照片这件事
        reply: 她觉得你发得快，也想把照片好好留着，这两件事可以同时成立。原图都找你要了，看来今天不只是你一个人在高兴。
        next: 6m.M5
    记忆候选:
      - 缩略标签: 纸质合照
        短句: 我还是喜欢拿在手里的照片
        类型: 日常用途
        线: 我还是喜欢拿在手里的照片
    requires:
      - 6f.F4
    order: 10
  - id: 6m.M5
    channel: left
    time: 交往第1天 周三 20:30
    lines:
      - from: boy
        text: 我刚看了下日历，现在就问她一个月纪念日那天有没有空，会不会太早啊，才第一天。
        delivery: type
      - from: ai
        text: 他已经开始期待一个月纪念日，犹豫的是现在提出会不会太早。可以建议先确认共同的时间，把具体安排留到之后，避免一次就把所有事情定下来。
        delivery: thought
    choices:
      - thought: 先约时间，安排慢慢商量
        reply: 可以先问问她，不用今天就把整天安排好。就说：一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。
        next: 6m.MEMCHOICE
    order: 11
  - id: 6f.F6
    channel: right
    time: 交往第1天 周三 20:40
    lines:
      - from: girl
        text: 他刚说，一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。才第一天，他怎么已经翻到下个月了。
        delivery: type
      - from: ai
        text: 她转述男友的纪念日邀约，觉得他期待得很早，但没有表达拒绝。可以问她是否也想一起过，帮助她表达自己的意愿，不替她作决定。
        delivery: thought
    choices:
      - thought: 让她按自己的期待回应
        reply: 他已经开始期待那一天了。你也想一起过的话，就先答应，具体安排可以之后再慢慢商量。
        next: 6f.F7
    requires:
      - 6m.M5
    order: 12
  - id: 6f.F7
    channel: right
    time: 交往第1天 周三 20:43
    lines:
      - from: girl
        text: OK，正好那会儿项目也忙完了，放松一下。
        delivery: type
      - from: ai
        text: 她已经表示愿意一起过纪念日，也期待忙完项目后能放松一下。可以支持她把时间留出来，顺着这份期待回应，不必再替两人安排具体怎么庆祝。
        delivery: thought
    choices:
      - thought: 支持她留出一起过的时间
        reply: 那就把那天先留出来。等忙完这一阵，有件一起期待的事也挺好。
        next: 6f.F8
    order: 13
  - id: 6m.MEMCHOICE
    channel: left
    time: 交往第1天 周三 20:50
    lines:
      - from: boy
        text: 她回，好啊，那天留给你。我现在就有点想准备东西。但礼物是不是挑得太早了，我还没想好送什么合适。
        delivery: type
      - from: ai
        text: 女友答应一起过纪念日，他想准备一点东西，又怕挑得太早。可以根据已有的小细节给建议，也可以先不急着买，在之后相处中慢慢想。
        delivery: thought
    choices:
      - thought: 把合照变成小礼物
        reply: 她说过喜欢拿在手里的照片。可以先洗一张你们的合照，背面写上在一起的日期。不用一下子准备很贵重的礼物，从她喜欢的小东西开始就好。
        需记忆: 纸质合照
        next: 6m.M7A
      - thought: 先留时间，慢慢了解喜好
        reply: 先不用急着买。你们刚在一起，之后聊天、见面，还会慢慢知道她喜欢什么。先把那天留好，礼物可以等有了合适的想法再准备。
        next: 6m.M7B
    requires:
      - 6f.F7
    order: 14
  - id: 6m.M7A
    channel: left
    time: 交往第1天 周三 20:58
    lines:
      - from: boy
        text: 这个好。我下单了，洗两张，一人一张。等拿到了我自己写日期，字丑也认了。
        delivery: type
      - from: ai
        text: 合照已经下单，他还打算亲手写日期，语气很期待。可以回应这份心意，顺着他担心字丑开个小玩笑，不必再建议添别的礼物。
        delivery: thought
    choices:
      - thought: 肯定他亲手准备的心意
        reply: 你自己写的日期，也会成为照片的一部分。字不用写得多漂亮，先把日子写对就好。
        next: 6m.END
        set:
          6_已订照片: true
    order: 15
  - id: 6m.M7B
    channel: left
    time: 交往第1天 周三 20:58
    lines:
      - from: boy
        text: 也是，今天才第一天。我先把那天记下来，后面想到了再说。突然觉得还挺有盼头的。
        delivery: type
      - from: ai
        text: 约定已经记下，他接受了暂时不急着买礼物，也开始期待以后的相处。可以顺着这个轻松的心情收尾，不再追加准备任务。
        delivery: thought
    choices:
      - thought: 让期待留在这里
        reply: 那就先期待着。接下来还有很多一起吃饭、聊天的机会，合适的主意也许就在里面。
        next: 6m.END
        set:
          6_已订照片: false
    order: 16
  - id: 6m.END
    channel: left
    time: 交往第1天 周三 20:59
    lines: []
    control: true
    order: 17
  - id: 6f.F8
    channel: right
    time: 交往第1天 周三 21:10
    lines:
      - from: girl
        text: 我把那天记日历上了。写一个月纪念日有点不好意思，又改成了吃饭。
        delivery: type
      - from: ai
        text: 她把约定记进日历，连给自己看的名称都有点害羞。她是在接着分享今晚的期待，轻松回应即可，不再增加需要她完成的新安排。
        delivery: thought
    choices:
      - thought: 轻轻回应她的害羞
        reply: 名字低调一点，期待一点没少。就让日历先替你留着那一天吧。
        next: 6f.END
    order: 18
  - id: 6f.END
    channel: right
    time: 交往第1天 周三 21:11
    lines: []
    control: true
    order: 19
`,lp=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.
title: 第七幕 · 第一次摩擦
chapter: 7
时间轴:
  - 交往第17天 周五 12:30
  - 交往第17天 周五 18:10
  - 交往第17天 周五 18:13
  - 交往第17天 周五 22:00
  - 交往第17天 周五 22:02
  - 交往第17天 周五 22:05
  - 交往第17天 周五 22:15
  - 交往第17天 周五 22:17
  - 交往第18天 周六 22:30
  - 交往第18天 周六 22:33
  - 交往第18天 周六 22:36
  - 交往第18天 周六 22:45
  - 交往第18天 周六 22:48
  - 交往第18天 周六 22:51
  - 交往第18天 周六 22:54
  - 交往第18天 周六 22:57
  - 交往第19天 周日 09:55
  - 交往第19天 周日 10:00
  - 交往第19天 周日 10:02
  - 交往第19天 周日 10:10
  - 交往第19天 周日 10:15
  - 交往第19天 周日 10:17
  - 交往第19天 周日 10:20
  - 交往第19天 周日 10:25
  - 交往第19天 周日 10:30
  - 交往第19天 周日 10:33
  - 交往第19天 周日 19:30
  - 交往第19天 周日 19:31
  - 交往第19天 周日 19:40
  - 交往第19天 周日 19:43
  - 交往第19天 周日 19:44
默认节拍: 正常
speakers:
  - id: boy
    name: 男生
    channel: left
  - id: girl
    name: 女生
    channel: right
  - id: ai
    name: AI
endings:
  - id: 第七幕完成
    title: 第七幕完成
    requires:
      - 7m.OVER
      - 7f.OVER
beats:
  - id: 7m.MONE
    channel: left
    time: 交往第17天 周五 12:30
    lines:
      - from: boy
        text: |-
          我跟我女朋友在一起两周多了，刚开始天天能聊到睡觉。这礼拜她赶项目，回我基本就是累啊困啊，我又老想找她。
          她刚发了张照片，买了杯喝的，说最近全靠公司楼下那家青杏续命。照片后面有个同事拿吸管夹薯条，她说大家都叫他筷子。我回了个笑哭，就没下文了。还想聊两句，你说我接点啥？
        delivery: type
      - from: ai
        text: 用户想继续和女友聊天，但不知道怎样接话。她刚主动分享了日常照片，可以建议从照片里的饮料聊起，既有现成的话题，也不用另外找话说。
        delivery: thought
    choices:
      - thought: 顺着照片接话
        reply: 可以问问她喝的什么，好不好喝。她主动给你发了照片，至少这会儿愿意跟你分享点日常，不用急着找个特别有意思的话题。
        next: 7m.MNEWS
    记忆候选:
      - 缩略标签: 青杏
        短句: 公司楼下那家青杏
        类型: 日常用途
        线: 第八幕楼下回收
    requires:
      - 6m.END
      - 6f.END
    order: 0
  - id: 7f.FDAY
    channel: right
    time: 交往第17天 周五 18:10
    lines:
      - from: girl
        text: |-
          我跟男朋友在一起两周多了。这礼拜赶项目，下班连话都不想说。他还天天跟我说今天干嘛了，我不回吧，又老惦记着。
          今晚部门一起吃饭，我想先跟他说一声，又怕说完就聊起来了，吃个饭还得一直看手机。咋跟他说比较好？
        delivery: type
      - from: ai
        text: 用户想提前告诉男友聚餐安排，也担心因此又聊起来，吃饭时得不断回消息。可以建议她同时说明回复可能较慢、回家后再聊，让对方知道她不是突然不理人。
        delivery: thought
    choices:
      - thought: 先把今晚安排说清
        reply: 可以直接跟他说：“今晚部门聚餐，可能回得慢，回家再聊。”提前说清楚安排和什么时候方便聊，比一边吃饭一边惦记着回消息轻松些。
        next: 7f.FDAYMORE
    requires:
      - 6m.END
      - 6f.END
    order: 1
  - id: 7f.FDAYMORE
    channel: right
    time: 交往第17天 周五 18:13
    lines:
      - from: girl
        text: |-
          行，我就这么发。我也不是不想跟他聊。昨天还有个挺逗的，他提前一站下了车，还跟我说今天地铁真快，走到出口才发现下早了。我回他一个猪头，他说走过去算了，正好把歌听完。
          上礼拜一起吃饭也挺好的，就是这礼拜真累。好了我走了，别一会儿大家等我。
        delivery: type
      - from: ai
        text: 用户虽然觉得聊天累，还是愿意分享男友的趣事。现在她要出门聚餐，没有新的问题需要处理，可以简短回应，不必继续分析两人的关系。
        delivery: thought
    choices:
      - thought: 轻快地送她出门
        reply: 听着是挺想跟你分享的，连下错站都要说一声。那先去吃饭吧，等回家有精神了再慢慢聊。
        next: 7f.FANGER
    记忆候选:
      - 缩略标签: 提前下车
        短句: 他提前一站下了车，还跟我说今天地铁真快
        类型: 日常用途
        线: 本幕19:43回收
    order: 2
  - id: 7m.MNEWS
    channel: left
    time: 交往第17天 周五 22:00
    lines:
      - from: boy
        text: 我跟女朋友刚闹了点不愉快。她今晚部门聚餐，吃完回来找我聊天，我问着问着就问岔了，现在她不回我了。你帮我看看，是不是我说得有点过了？
        delivery: type
      - from: ai
        text: 他觉得刚才的话可能说重了，想知道怎么补救。目前还不清楚争执经过，需要先听双方说了什么，再判断问题出在哪，不能只凭她不回复就下结论。
        delivery: thought
    choices:
      - thought: 先听刚才说了什么
        reply: 可以，把刚才那几句发来看看。你说了什么，她怎么回的，从哪儿开始不对劲的，我们先捋一下。
        next: 7m.MPROJECT
    order: 3
  - id: 7m.MPROJECT
    channel: left
    time: 交往第17天 周五 22:02
    lines:
      - from: boy
        text: |-
          她说周四方案过了，今天大家一起庆功，还发了张合照给我。我问怎么没听她说，她说昨天忙忘了。
          然后说小周还张罗着给她点了个蛋糕。我问小周是谁，她说一起做项目的同事。
          他们都知道，就我现在才知道。这两天她跟我说的全是累，我还以为还没忙完呢。
        delivery: type
      - from: ai
        text: 同事参与同一个项目，知道进展很正常。他反复提到自己才知道，可能更在意没被分享这份开心。可以先帮他分清这两件事，再听后面发生了什么。
        delivery: thought
    choices:
      - thought: 接住被落下的感觉
        reply: 一起做项目的同事知道进展，并不奇怪。让你不舒服的，可能是她这两天只跟你说累，庆功这么高兴的事，你反而到现在才听说。
        next: 7m.MDEMAND
    order: 4
  - id: 7m.MDEMAND
    channel: left
    time: 交往第17天 周五 22:05
    lines:
      - from: boy
        text: |-
          对。我就问她，你跟他私下是不是也聊挺多，不然怎么他什么都知道。她说大家一起吃饭，又不是只有我一个女的，他跟我做同一个项目，当然知道。
          我又说，那给我看看你俩聊什么了。她回，你自己听听你在说什么。我接了句那你说我该怎么想，她就不回了。
          我现在想解释一下，可再发过去，是不是又像追着她问？
        delivery: type
      - from: ai
        text: 她已解释同事关系，他仍提出查看私聊，对方随后不再回复。现在想补救，应先建议撤回这项要求，承认自己问过了，而不是继续解释为什么怀疑。
        delivery: thought
    choices:
      - thought: 先收回查看私聊的要求
        reply: 可以再发，但这次先别解释她为什么让你多想。先承认刚才的要求不合适：“我不该让你给我看聊天，刚才有点急。”发完给她一点时间，不要接着追问。
        next: 7m.MWAIT
    order: 5
  - id: 7f.FANGER
    channel: right
    time: 交往第17天 周五 22:15
    lines:
      - from: girl
        text: |-
          我刚不是去部门聚餐了吗，吃完回家跟他说了两句，真的给我气到了。
          周四方案过了，今天大家一起庆功。我给他发合照，说小周还给我点了个蛋糕。他先问怎么没告诉他，又问小周是谁。
        delivery: type
      - from: ai
        text: 她按之前的安排，聚餐后回家和男友聊天，却因为对方的追问生气。目前只听到争执的开头，需要先了解她怎么解释、对方怎么回应，不急着判断谁的问题。
        delivery: thought
    choices:
      - thought: 听她把经过说完
        reply: 你本来是想跟他分享庆功的事，结果聊得不愉快了。后来你怎么解释的，他又说了什么？
        next: 7f.FDEMAND
    order: 6
  - id: 7f.FDEMAND
    channel: right
    time: 交往第17天 周五 22:17
    lines:
      - from: girl
        text: |-
          我说昨天忙忘了告诉他，小周就是一起做项目的同事。大家一起吃饭，又不是只有我一个女的。
          他还问你跟他私下是不是也聊挺多，不然怎么他什么都知道。我解释了只是同事，他还要看我和人家的聊天记录。
          我说你自己听听你在说什么。他又来句，那你说我该怎么想。我真想骂人，他要怎么想还得我教啊？
        delivery: type
      - from: ai
        text: 同事关系和聚餐情况已经解释，他仍要求看私聊，还把怎么理解这件事交给她回答。她现在很愤怒，可以先回应被怀疑的不适，建议暂缓争执，而不是继续证明清白。
        delivery: thought
    choices:
      - thought: 接住被怀疑的火气
        reply: 你已经解释了，他还是要看聊天，难怪你会觉得说什么都像在被审问。现在正在气头上，可以先停一下，不用继续一条条证明自己和同事没什么。
        next: 7f.FNOTIFICATION
    记忆候选:
      - 缩略标签: 查看私聊
        短句: 我解释了只是同事，他还要看我和人家的聊天记录
        类型: Ta的真实
        线: 他的焦虑
    order: 7
  - id: 7m.MWAIT
    channel: left
    time: 交往第18天 周六 22:30
    lines:
      - from: boy
        text: |-
          昨天按你说的发了，我不该让你给我看聊天，刚才有点急。她没回。今天中午又问吃饭没，也没回。
          她一整天没回我，连我说不该问她要聊天记录也没回。刚下楼买个东西，我都一直拿着手机，就怕她突然回了我没看见。现在又想发，你说再问一句会不会更烦她啊？
        delivery: type
      - from: ai
        text: 已经道歉，也试着恢复日常聊天，仍然没有回应。他现在很难忍住继续发消息，需要先了解他希望从下一条回复里确认什么，再考虑是否适合发送。
        delivery: thought
    choices:
      - thought: 问清想确认什么
        reply: 你已经道过歉，也问过吃饭了，还是一直惦记着手机。现在想再发一句，是还有话没说，还是想从她的回复里确认什么？
        next: 7m.MFEAR
    记忆候选:
      - 缩略标签: 一天没回
        短句: 她一整天没回我，连我说不该问她要聊天记录也没回
        类型: Ta的真实
        线: 她的回避
    order: 8
  - id: 7m.MFEAR
    channel: left
    time: 交往第18天 周六 22:33
    lines:
      - from: boy
        text: |-
          我就想知道她还想不想理我啊。昨天说小周给她点蛋糕，聊得那么高兴，到我这就一句都没了。
          我现在真想问问她，到底是没空回，还是光不想回我。
        delivery: type
      - from: ai
        text: 他把不回消息和昨晚的同事联系起来了，但还没有提供其他依据。需要先确认他知道什么，避免顺着焦虑把猜测说成事实，也不要替女友解释沉默。
        delivery: thought
    choices:
      - thought: 把事实和猜测分开
        reply: 你现在想确认的，其实是她还愿不愿意理你。不过，先别从她和同事的互动里猜答案。除了昨天的聚餐，还有什么让你觉得他们不只是同事吗？
        next: 7m.MOWN
    order: 9
  - id: 7m.MOWN
    channel: left
    time: 交往第18天 周六 22:36
    lines:
      - from: boy
        text: |-
          没看到。我后来把合照翻了好几遍，他俩也没挨着坐。可他给她点个蛋糕，她就那么开心，我怎么就没想到呢。
          我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天。
          我知道这么问不好听。可我不问，就只能等她哪天想起来了再来找我吗？
        delivery: type
      - from: ai
        text: 他承认没有证据，但仍把追问当成确认关系的唯一办法。可以建议他表达等不到回复的不安，同时明确这与要求查看私聊不同，避免再次发出带猜疑的质问。
        delivery: thought
    choices:
      - thought: 把不安说清楚
        reply: 等不到回复让你不安，这件事可以等能好好说话时告诉她。可让她证明没跟别人聊，并不能回答你在她心里有没有位置。今晚先别再发“是不是忙着回别人”这样的质问了。
        next: 7m.SUN
    记忆候选:
      - 缩略标签: 要求看私聊
        短句: 我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天
        类型: 自己的真实
        线: 他的焦虑
    order: 10
  - id: 7f.FNOTIFICATION
    channel: right
    time: 交往第18天 周六 22:45
    lines:
      - from: girl
        text: |-
          他昨天后来发了句我不该让你给我看聊天，刚才有点急。今天中午又问吃饭没，我都没回。
          刚才手机亮了一下，我还以为又是他，结果是我同桌。发现不是他，我又去点开他那边看，也没再发。真让我回吧，我又不想回，烦死了。
        delivery: type
      - from: ai
        text: 她没有回复，却反复查看男友有没有新消息，说明这件事仍让她在意。需要先了解她想等到怎样的回应，不能因为她关注手机，就认定她已经愿意和好。
        delivery: thought
    choices:
      - thought: 问问她还在等什么
        reply: 你不想回他，又忍不住看他有没有再找你。你现在是还想等他说点什么，还是也想找个机会回他，只是不知道怎么开头？
        next: 7f.FPUSH
    order: 11
  - id: 7f.FPUSH
    channel: right
    time: 交往第18天 周六 22:48
    lines:
      - from: girl
        text: 不知道，反正我现在不想回。他昨天都那么问我了，后来说一句有点急，就完了？我再跟他聊吃饭没啥的，搞得好像啥事都没有一样。
        delivery: type
      - from: ai
        text: 她担心一恢复日常聊天，就等于接受这次道歉，所以不愿回复。可以先回应这个顾虑，再问收到消息时的想法，了解她是需要独处，还是想通过不回应表达不满。
        delivery: thought
    choices:
      - thought: 问她收到消息时怎么想
        reply: 你不想一句“有点急”就把这件事翻过去。不过，不回消息能让他知道你生气了，未必能让他知道你在气什么。今天他问你吃饭没的时候，你当时怎么想的？
        next: 7f.FOWN
    order: 12
  - id: 7f.FOWN
    channel: right
    time: 交往第18天 周六 22:51
    lines:
      - from: girl
        text: |-
          看见了，就是不想回。我今天手机一直在用，跟同桌聊桌游，跟别人说话，就没理他。
          我就是故意一天不回他，想让他也难受一下。凭什么每次都是我被问得烦啊，他也等一等吧。
        delivery: type
      - from: ai
        text: 她明确说自己想让对方难受，不回应已经不只是为了休息。需要听她接下来想怎么做，把继续冷落和表达不满分开，不替她把这次行为解释成无意的。
        delivery: thought
    choices:
      - thought: 问她接下来想怎么做
        reply: 你是想让他也尝尝被晾着的滋味。那接下来呢，你还想继续晾着，还是想让他知道，你到底为什么那么生气？
        next: 7f.COUSIN
    记忆候选:
      - 缩略标签: 故意不回
        短句: 我就是故意一天不回他，想让他也难受一下
        类型: 自己的真实
        线: 她的回避
    order: 13
  - id: 7f.COUSIN
    channel: right
    time: 交往第18天 周六 22:54
    lines:
      - from: girl
        text: |-
          今天不想跟他说了。他要是又问小周，我真会骂他。那些话我现在想想都烦。
          我同桌还问明天去不去桌游，我说先不去了。现在出去玩都能想起他昨天那几句。
        delivery: type
      - from: ai
        text: 她目前不愿直接和男友谈，继续劝回复可能只会增加抵触。可以建议先找可信的人聊聊，让她把不满说出来，再决定如何联系，而不是让别人替她处理。
        delivery: thought
    choices:
      - thought: 找熟悉双方的同桌聊聊
        reply: 你同桌也是他表妹，跟你俩都熟。可以先找她聊聊，她也许能帮你理理怎么跟他说。先说明你只是想聊这件事，不是让她替你去传话。
        需记忆: 同桌是表妹
        next: 7f.COUSINSENTYES
      - thought: 建议先找可信的朋友吐槽
        reply: 可以先找个信得过的朋友说说，不必憋着，也不必现在就回他。等这口气缓一点，再想你希望他听明白什么，可能比反复盯着聊天框轻松些。
        next: 7f.COUSINSENTNO
    order: 14
  - id: 7f.COUSINSENTNO
    channel: right
    time: 交往第18天 周六 22:57
    lines:
      - from: girl
        text: 那我找我闺蜜说说吧。我俩认识好多年了，她跟他又不熟，不用夹在中间。跟她说话我就不用憋着了。
        delivery: type
      - from: ai
        text: 她选择找熟悉自己的闺蜜，对方与男友不熟，可以让她少一些顾虑。现在已有明确打算，回复只需确认，不继续追问或要求她立刻想好给男友的答复。
        delivery: thought
    choices:
      - thought: 让她找闺蜜说说
        reply: 那就先找她聊。你现在不必一边吐槽，一边急着想该怎么回男友，先把自己憋着的那部分说出来。
        next: 7f.COUSINBACKNO
    order: 15
  - id: 7f.COUSINSENTYES
    channel: right
    time: 交往第18天 周六 22:57
    lines:
      - from: girl
        text: 那我找她说两句。我得先跟她说好啊，别替我去找他，我还没想好怎么回。
        delivery: type
      - from: ai
        text: 她愿意找同桌聊，也明确不希望被代为传话。可以肯定她先说明这一点，避免朋友的介入变成新的误会，是否联系男友仍由她自己决定。
        delivery: thought
    choices:
      - thought: 先说清别替她传话
        reply: 对，先把这点说清楚。你现在是想有人听你讲，不是请她去劝他；等你想好怎么说，再由你自己联系。
        next: 7f.COUSINBACKYES
    order: 16
  - id: 7f.COUSINBACKNO
    channel: right
    time: 交往第19天 周日 09:55
    lines:
      - from: girl
        text: |-
          我昨天跟闺蜜打了挺久电话。她先陪我骂了几句，说换谁被这么问都得烦。后来突然问我，那你还想不想见他？
          我说想啊。她就说，想见就去见，该说他的地方还得说，别自己跟这儿憋一晚上。聊完确实没那么气了。
          今天醒来又想找他。可我先去找，他是不是就觉得昨天这事过去了？
        delivery: type
      - from: ai
        text: 和闺蜜聊过后，她明确自己仍想见男友，却担心主动联系就失去表达不满的机会。可以说明联系和继续谈这件事并不矛盾，帮助她从谁先开口转向怎么开口。
        delivery: thought
    choices:
      - thought: 把想见和介意都留住
        reply: 你可以先联系他，也可以告诉他，那样被问的事还没过去。主动开口是因为你想见他，不等于你认同他那样问你。
        next: 7f.FCHOICE
    order: 17
  - id: 7f.COUSINBACKYES
    channel: right
    time: 交往第19天 周日 09:55
    lines:
      - from: girl
        text: |-
          昨天最后跟我同桌聊了挺久。她听我骂完，说她表哥平时没这么爱问东问西，估计真是慌了。我说慌了也不能让我给他看聊天啊。她说是，但你要还想跟他好，就得让他知道你到底气什么。
          聊完气消了一点，今天醒来还挺想见他的。可我现在先找他，他是不是就觉得昨天这事过去了？
        delivery: type
      - from: ai
        text: 同桌提供了对男友的看法，但那只是她的判断，不能据此替他的要求开脱。她现在想联系，又不愿把不满略过，可以建议把见面的意愿和仍介意的事分开表达。
        delivery: thought
    choices:
      - thought: 把想见和介意都留住
        reply: 他是不是因为慌了才那么问，可以以后再谈。你现在想见他，也仍然介意被要求看聊天，这两件事不冲突，先联系不代表你要装作没发生过。
        next: 7f.FCHOICE
    order: 18
  - id: 7f.FCHOICE
    channel: right
    time: 交往第19天 周日 10:00
    lines:
      - from: girl
        text: |-
          我刚想问他今天出不出来，打完又没发。昨天一天没理他。消息我都看见了，就是故意没回，当时也想让他等一回。现在突然问他出来吗，感觉怪怪的。
          但我又想见他。那天那些事我想见了再说，微信上说着说着肯定又扯回小周了。你帮我想想该咋说。
        delivery: type
      - from: ai
        text: 她想约男友见面，但担心突然联系显得若无其事。可以建议她先说明昨天故意没回，再提出邀约，让对方知道她愿意谈这件事；或者先表达想见面的意愿，把之前的矛盾留到当面再说。
        delivery: thought
    choices:
      - thought: 先承认故意没回
        reply: 可以先说出昨天故意没回的事，再约见面：“昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。”承认自己这部分，不等于他要求看聊天就没问题了。
        next: 7f.FSENTOPEN
        set:
          7_她承认: true
      - thought: 先从想见他开口
        reply: 可以先发：“今天出来走走吗？我想见你。”先开口不等于昨天的事就算了，只是先给你们一个当面说话的机会。
        next: 7f.FSENTEASY
        set:
          7_她承认: false
    order: 19
  - id: 7f.FSENTEASY
    channel: right
    time: 交往第19天 周日 10:02
    lines:
      - from: girl
        text: 发了。现在换我在这儿看他回没回了。昨天他是不是也这样啊，算了，不想了。
        delivery: type
      - from: ai
        text: 发出邀约后，她也开始等待，并短暂想到男友昨天的处境。可以回应眼前的等待，不把这句感想扩大成已经反省，也不替她判断男友现在的情绪。
        delivery: thought
    choices:
      - thought: 陪她等实际回复
        reply: 刚发出去，先给他一点时间，不用马上盯着有没有回。你想见他的意思已经说了，其他话可以等他回应后再决定怎么讲。
        next: 7f.REPLYEASY
        set:
          7_邀约已发: true
    order: 20
  - id: 7f.FSENTOPEN
    channel: right
    time: 交往第19天 周日 10:02
    lines:
      - from: girl
        text: 发了。我现在看着那句我当时就想让你也等一回，又觉得自己也挺凶的。他要是半天不回，我估计也得慌。
        delivery: type
      - from: ai
        text: 她发出邀约并承认故意冷落，开始想到自己等不到回复也会不安。可以建议先给对方反应的时间，不立刻追加解释，也不预测他一定会怎样回应。
        delivery: thought
    choices:
      - thought: 给他一点接话时间
        reply: 先给他一点时间。这条消息里有邀约，也有昨天的事，不用急着再补一大段，看看他怎么回。
        next: 7f.REPLYOPEN
        set:
          7_邀约已发: true
    order: 21
  - id: 7m.SUN
    channel: left
    time: 交往第19天 周日 10:10
    lines: []
    control: true
    when:
      7_邀约已发: true
    order: 22
  - id: 7m.OPENCHOICE
    channel: left
    time: 交往第19天 周日 10:10
    lines:
      - from: boy
        text: |-
          她终于找我了。发的是：昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。
          我看了两遍。刚看见她找我还挺高兴的，可她真就看着我等了一天啊，我现在又不知道咋回了。
        delivery: type
      - from: ai
        text: 她主动邀约，也承认了故意不回。他既想见她，又对这一天的等待感到受伤。可以建议先说出难受，也可以先答应见面，具体说多少应留给他选择。
        delivery: thought
    choices:
      - thought: 说出等了一天的难受
        reply: 可以先答应见面，也把你的难受说出来：“好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。”说自己的感受，不必再猜她跟别人怎么样。
        next: 7m.SENTBOTH
        set:
          7_他说难受: true
      - thought: 先接住见面的邀请
        reply: 可以先回：“好，下午见。”你现在想先见到她，就先把时间地点约好；昨天没说完的话，见面还有机会说。
        next: 7m.SENTHER
        set:
          7_他说难受: false
    when:
      7_她承认: true
    requires:
      - 7m.SUN
    order: 23
  - id: 7m.PLAINCHOICE
    channel: left
    time: 交往第19天 周日 10:10
    lines:
      - from: boy
        text: |-
          她终于找我了，就一句：今天出来走走吗？我想见你。
          我差点直接回好。可昨天到底算怎么回事啊，现在问她，会不会又不理我了？
        delivery: type
      - from: ai
        text: 这次邀约没有提到昨天的沉默。他想答应，又怕追问让她再次不理人。可以把等待中的难受说出来，也可以先确认见面，不能替她补上没有说过的解释。
        delivery: thought
    choices:
      - thought: 把昨天的难受带出来
        reply: 可以答应见面，也把你昨天等消息的感受说出来：“好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？”
        next: 7m.SENTHIM
        set:
          7_他说难受: true
      - thought: 先把见面约下来
        reply: 可以先回：“好，下午见。”先确认你们都愿意见面，再商量地点。答应邀约并不等于你昨天没有难受，那部分可以等见了再考虑怎么说。
        next: 7m.SENTQUIET
        set:
          7_他说难受: false
    when:
      7_她承认: false
    requires:
      - 7m.SUN
    order: 24
  - id: 7f.REPLYEASY
    channel: right
    time: 交往第19天 周日 10:15
    lines: []
    control: true
    requires:
      - 7m.PLAINCHOICE
    order: 25
  - id: 7f.REPLYOPEN
    channel: right
    time: 交往第19天 周日 10:15
    lines: []
    control: true
    requires:
      - 7m.OPENCHOICE
    order: 26
  - id: 7f.RECEIVEDBOTH
    channel: right
    time: 交往第19天 周日 10:15
    lines:
      - from: girl
        text: |-
          他回了：好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。
          我知道我就是想让他难受。可他真这么说，我又有点不知道接什么了，咋回啊？
        delivery: type
      - from: ai
        text: 他明确说出等待的难受，她听到后有些不自在。可以建议承认故意让他等不合适，而不是又把话转回他的质问；她对那件事的不满仍可留到见面谈。
        delivery: thought
    choices:
      - thought: 接住他真的受了伤
        reply: 可以先回应他这句难受：“我知道。我昨天很烦，但不该故意让你等。下午见。”先承认故意不回这件事，不用在同一句里把所有委屈都解释完。
        next: 7f.ACKBOTH
    when:
      7_她承认: true
      7_他说难受: true
    requires:
      - 7f.REPLYOPEN
    order: 27
  - id: 7f.RECEIVEDHER
    channel: right
    time: 交往第19天 周日 10:15
    lines:
      - from: girl
        text: 他回得还挺快，就一句好，下午见。是不是也没那么气了？
        delivery: type
      - from: ai
        text: 他只答应了见面，没有说明对昨天的感受。她把回复快理解成不生气，可以先确认邀约已被接受，再提醒不能仅凭这句话判断他的情绪。
        delivery: thought
    choices:
      - thought: 接住邀约 不替他猜情绪
        reply: 能确定的是，他愿意见你了。至于还有没有生气，单看一句“好，下午见”还说不准，见面时也可以听听他怎么说。
        next: 7f.SETHER
    when:
      7_她承认: true
      7_他说难受: false
    requires:
      - 7f.REPLYOPEN
    order: 28
  - id: 7f.RECEIVEDHIM
    channel: right
    time: 交往第19天 周日 10:15
    lines:
      - from: girl
        text: |-
          他回：好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？
          我就是气他前天那么问，可我确实没跟他说过我想自己待会儿。这句该怎么回？
        delivery: type
      - from: ai
        text: 他告诉她等不到回复很难受，也提出了具体请求。她可以交代昨天在生气，留到见面再谈经过。
        delivery: thought
    choices:
      - thought: 回应他等不到消息
        reply: 可以回：“我昨天就是气你那样问，没跟你说一声。下午见了说吧。”先回应他等不到消息这件事，前天的争执见面再说。
        next: 7f.ACKHIM
    when:
      7_她承认: false
      7_他说难受: true
    requires:
      - 7f.REPLYEASY
    order: 29
  - id: 7f.RECEIVEDQUIET
    channel: right
    time: 交往第19天 周日 10:15
    lines:
      - from: girl
        text: 他回好，下午见。我昨晚还怕他说不想见呢，看来是我想多了。
        delivery: type
      - from: ai
        text: 他答应见面，她因此放松了一点。目前只知道邀约得到回应，可以顺势建议确认地点，不推断两人已不再介意之前的事。
        delivery: thought
    choices:
      - thought: 先把见面安排好
        reply: 至少见面这件事，他是愿意的。先把时间地点定好，其他还想说的话，到时再看怎么开口。
        next: 7f.SETQUIET
    when:
      7_她承认: false
      7_他说难受: false
    requires:
      - 7f.REPLYEASY
    order: 30
  - id: 7f.ACKBOTH
    channel: right
    time: 交往第19天 周日 10:17
    lines:
      - from: girl
        text: 回了，就按那句说的，我知道。我昨天很烦，但不该故意让你等。下午见。
        delivery: type
      - from: ai
        text: 她已照建议回应了他的难受，暂时没有新的消息或问题。可以简短确认，让她等对方回复，不再追加一轮解释，打断已经开始恢复的交流。
        delivery: thought
    choices:
      - thought: 等他接这句话
        reply: 嗯，先等他回。这句已经回应了他的难受，不用急着再补什么。
        next: 7f.SETBOTH
    order: 31
  - id: 7f.ACKHIM
    channel: right
    time: 交往第19天 周日 10:17
    lines:
      - from: girl
        text: 发了，我昨天就是气你那样问，没跟你说一声。下午见了说吧。
        delivery: type
      - from: ai
        text: 她已经解释了没回复的原因，也表达了愿意当面谈。现在需要留出让对方回应的时间，简短确认即可，不反复要求她补充更完整的解释。
        delivery: thought
    choices:
      - thought: 等他接这句话
        reply: 好，先等他回。你想继续见面聊的意思已经说清楚了。
        next: 7f.SETHIM
    order: 32
  - id: 7m.SENTBOTH
    channel: left
    time: 交往第19天 周日 10:20
    lines:
      - from: boy
        text: |-
          发了。她回，我知道。我昨天很烦，但不该故意让你等。下午见。
          我又问了在哪碰头，等她定地方。
        delivery: type
      - from: ai
        text: 她承认不该故意让他等，说明这次表达得到了回应。接下来可以先落实见面，不必继续在消息里要求更多解释，免得又陷入反复确认。
        delivery: thought
    choices:
      - thought: 接住她的回应
        reply: 她这次回应了你的难受，也说了不该故意让你等。可以先把见面约好，剩下想说的留到当面，不用现在就把每句话都问到底。
        next: 7m.MEMBOTH
    requires:
      - 7f.ACKBOTH
    order: 33
  - id: 7m.SENTHER
    channel: left
    time: 交往第19天 周日 10:20
    lines:
      - from: boy
        text: 回了。我又问她在哪碰头。刚才打了半句昨天我，想想还是删了。
        delivery: type
      - from: ai
        text: 他删掉了准备说的委屈，可能是怕破坏刚恢复的联系。可以尊重他先见面的选择，但不把删掉消息理解成已经释怀，也不催他马上重新发出。
        delivery: thought
    choices:
      - thought: 给没说完的话留点余地
        reply: 先约好见面也可以。那半句删掉了，不代表你的难受就没了；等见到她，你还想说的话，可以再从昨天自己怎么过的讲起。
        next: 7m.MEMHER
    requires:
      - 7f.RECEIVEDHER
    order: 34
  - id: 7m.SENTHIM
    channel: left
    time: 交往第19天 周日 10:20
    lines:
      - from: boy
        text: |-
          发了。她回，我昨天就是气你那样问，没跟你说一声。下午见了说吧。
          我又问了在哪碰头，等她定地方。
        delivery: type
      - from: ai
        text: 女友解释了昨天为什么没回复，也愿意见面谈。可以先安排见面，再当面说等待的经历。
        delivery: thought
    choices:
      - thought: 让话留到见面慢慢说
        reply: 她告诉你昨天为什么没回，也愿意当面聊。先把见面约下来，你昨天怎么等过来的，也可以到时候讲。
        next: 7m.MEMHIM
    requires:
      - 7f.ACKHIM
    order: 35
  - id: 7m.SENTQUIET
    channel: left
    time: 交往第19天 周日 10:20
    lines:
      - from: boy
        text: 回了，我又问她在哪碰头。昨天的事我还是没敢问，先见了再说吧。
        delivery: type
      - from: ai
        text: 他暂时不敢提昨天，只想先恢复联系。需要尊重这个选择，同时回应他怕再次被冷落的顾虑，不要把先见面写成必须放下委屈。
        delivery: thought
    choices:
      - thought: 接住想见她的心情
        reply: 那就先把见面约好。你想见她，和你昨天确实难受，并不冲突；不用为了今天能好好相处，就要求自己马上不在意了。
        next: 7m.MEMQUIET
    requires:
      - 7f.RECEIVEDQUIET
    order: 36
  - id: 7f.SETBOTH
    channel: right
    time: 交往第19天 周日 10:25
    lines:
      - from: girl
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。
        delivery: type
      - from: ai
        text: 两人已回应彼此的难受，也安排好了见面。她在同步邀约的结果，可以确认安排，让后面的谈话留到当面，不必继续催她通过消息解释。
        delivery: thought
    choices:
      - thought: 把话留到当面慢慢说
        reply: 好，先按这个安排见面。你们已经各说了一点，剩下的可以慢慢讲，不用现在全挤在聊天里。
        next: 7f.AFTERBOTH
    requires:
      - 7m.SENTBOTH
    order: 37
  - id: 7f.SETHER
    channel: right
    time: 交往第19天 周日 10:25
    lines:
      - from: girl
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。
        delivery: type
      - from: ai
        text: 见面的时间地点已经确定，但他还没有谈自己的感受。可以确认安排，把听对方怎么想的机会留到见面，不提前替他说已经没事。
        delivery: thought
    choices:
      - thought: 确认约定 轻收尾
        reply: 那就先把这次面见上。你想说的、也想听他怎么说的，都可以留到当面，不急着在消息里一次聊完。
        next: 7f.AFTERHER
    requires:
      - 7m.SENTHER
    order: 38
  - id: 7f.SETHIM
    channel: right
    time: 交往第19天 周日 10:25
    lines:
      - from: girl
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。
        delivery: type
      - from: ai
        text: 她澄清了没有分手的意思，也约定了时间地点。接下来可以当面说各自介意的事，回复应帮助结束眼前的等待，不再重复推演他的态度。
        delivery: thought
    choices:
      - thought: 留一点空间当面聊
        reply: 好，下午见了再说。可以先讲你介意哪几句话，也听听他等消息时怎么想的，不必在见面前把结果都猜好。
        next: 7f.AFTERHIM
    requires:
      - 7m.SENTHIM
    order: 39
  - id: 7f.SETQUIET
    channel: right
    time: 交往第19天 周日 10:25
    lines:
      - from: girl
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。昨天的事到时候再看吧。
        delivery: type
      - from: ai
        text: 她决定先见面，再看要不要谈昨天。安排已落实，可以简短确认，尊重她暂时没有往下谈的选择，不因为今天约上了就替她宣布矛盾过去。
        delivery: thought
    choices:
      - thought: 确认约定 轻收尾
        reply: 好，那先见面。现在不用连昨天要怎么谈都安排好，到时候看看你们各自想说什么。
        next: 7f.AFTERQUIET
    requires:
      - 7m.SENTQUIET
    order: 40
  - id: 7m.MEMBOTH
    channel: left
    time: 交往第19天 周日 10:30
    lines:
      - from: boy
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？
        delivery: type
      - from: ai
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。
        delivery: thought
    choices:
      - thought: 接回她提过的烤肉
        reply: 她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。
        需记忆: 想吃烤肉
        next: 7m.PLANENDBOTH
      - thought: 选个能慢慢吃的地方
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。
        next: 7m.PLANENDBOTH
    requires:
      - 7f.SETBOTH
    order: 41
  - id: 7m.MEMHER
    channel: left
    time: 交往第19天 周日 10:30
    lines:
      - from: boy
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？
        delivery: type
      - from: ai
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。
        delivery: thought
    choices:
      - thought: 接回她提过的烤肉
        reply: 她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。
        需记忆: 想吃烤肉
        next: 7m.PLANENDHER
      - thought: 选个能慢慢吃的地方
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。
        next: 7m.PLANENDHER
    requires:
      - 7f.SETHER
    order: 42
  - id: 7m.MEMHIM
    channel: left
    time: 交往第19天 周日 10:30
    lines:
      - from: boy
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？
        delivery: type
      - from: ai
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。
        delivery: thought
    choices:
      - thought: 接回她提过的烤肉
        reply: 她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。
        需记忆: 想吃烤肉
        next: 7m.PLANENDHIM
      - thought: 选个能慢慢吃的地方
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。
        next: 7m.PLANENDHIM
    requires:
      - 7f.SETHIM
    order: 43
  - id: 7m.MEMQUIET
    channel: left
    time: 交往第19天 周日 10:30
    lines:
      - from: boy
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？
        delivery: type
      - from: ai
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。
        delivery: thought
    choices:
      - thought: 接回她提过的烤肉
        reply: 她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。
        需记忆: 想吃烤肉
        next: 7m.PLANENDQUIET
      - thought: 选个能慢慢吃的地方
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。
        next: 7m.PLANENDQUIET
    requires:
      - 7f.SETQUIET
    order: 44
  - id: 7m.PLANENDBOTH
    channel: left
    time: 交往第19天 周日 10:33
    lines:
      - from: boy
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。
        delivery: type
      - from: ai
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。
        delivery: thought
    choices:
      - thought: 肯定先商量着来
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。
        next: 7m.AFTERBOTH
    order: 45
  - id: 7m.PLANENDHER
    channel: left
    time: 交往第19天 周日 10:33
    lines:
      - from: boy
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。
        delivery: type
      - from: ai
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。
        delivery: thought
    choices:
      - thought: 肯定先商量着来
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。
        next: 7m.AFTERHER
    order: 46
  - id: 7m.PLANENDHIM
    channel: left
    time: 交往第19天 周日 10:33
    lines:
      - from: boy
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。
        delivery: type
      - from: ai
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。
        delivery: thought
    choices:
      - thought: 肯定先商量着来
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。
        next: 7m.AFTERHIM
    order: 47
  - id: 7m.PLANENDQUIET
    channel: left
    time: 交往第19天 周日 10:33
    lines:
      - from: boy
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。
        delivery: type
      - from: ai
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。
        delivery: thought
    choices:
      - thought: 肯定先商量着来
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。
        next: 7m.AFTERQUIET
    order: 48
  - id: 7m.AFTERBOTH
    channel: left
    time: 交往第19天 周日 19:30
    lines:
      - from: boy
        text: |-
          回来跟你说一声，见了。吃饭的时候她又提了昨天，说当时就想让我也急一下。我说以后真不想说话，至少别让我一直等着猜。她答应了。
          我也说以后不乱猜她和同事的关系了。后面就聊别的了，没一直绷着。
        delivery: type
      - from: ai
        text: 两个人当面谈到了质问和等待，也分别作了回应。他带回见面结果，可以肯定这次表达的具体进展，不必再追问，或把今天的承诺当成以后一定不会重演。
        delivery: thought
    choices:
      - thought: 肯定这次把话说出来
        reply: 这次你把等得难受说出来了，也承认了自己不该乱猜。今天能从僵着不说，走到把各自介意的事讲一点，已经是个变化，今晚可以先歇歇。
        next: 7m.OVER
    order: 49
  - id: 7m.AFTERHER
    channel: left
    time: 交往第19天 周日 19:30
    lines:
      - from: boy
        text: |-
          见完了。吃饭时她又说昨天气上头了，我就说嗯，过去吧，然后换了个话题。
          她后面一直给我讲这周的事，我听着挺高兴的。昨天那些话还是没说，刚好起来，我真不太敢再弄僵了。
        delivery: type
      - from: ai
        text: 见面和她的解释让他放松，但他明确说自己仍不敢提委屈。可以回应这个顾虑，让他知道今天没说不等于以后不能说，不替他认定事情已经过去。
        delivery: thought
    choices:
      - thought: 留住还没说的感受
        reply: 你高兴她又愿意跟你讲这些，也怕一提昨天就把气氛弄坏，所以把话咽回去了。今天没说，以后仍然可以说，不一定要等到又出事时才能提。
        next: 7m.OVER
    order: 50
  - id: 7m.AFTERHIM
    channel: left
    time: 交往第19天 周日 19:30
    lines:
      - from: boy
        text: |-
          回来了。她说昨天看见我那些消息还是烦，怕回一句又得接着解释。我说以后不乱猜她和同事的关系了，但不能一直不理我。她说知道了。
          后面一起吃了饭。我也不知道她听进去多少，反正能好好说话了，就没再追着问。
        delivery: type
      - from: ai
        text: 他表达了不能接受一直不回应，也承认不该猜疑同事关系。她口头回应知道了，他仍不确定。可以肯定话已说出，至于承诺有没有落实，需要以后相处再看。
        delivery: thought
    choices:
      - thought: 先接住能好好说话
        reply: 你已经把不能一直不理你这点说出来了，也承认自己不该乱猜。她听进去多少，不用今天再追问出一个保证，之后怎么相处，比反复说知道了更能说明问题。
        next: 7m.OVER
    order: 51
  - id: 7m.AFTERQUIET
    channel: left
    time: 交往第19天 周日 19:30
    lines:
      - from: boy
        text: |-
          见完了。她见我先问中午吃了没，我说没吃多少，她说那晚上多吃点。当时就觉得，算了，能好好说话就行。
          后来聊了挺多，谁也没提周五的事。可现在回来又有点怕，下次她不回我，不还得这么等着吗？
        delivery: type
      - from: ai
        text: 见面时他想先恢复日常，回来后却仍担心再次被冷落。需要回应这种落差，让他知道轻松和难受可以同时存在，不催他今晚继续谈，也不把未谈当作已解决。
        delivery: thought
    choices:
      - thought: 给委屈留一个出口
        reply: 当时见到她，你想先把日子过回来；现在静下来，昨天的难受又冒出来了。这不奇怪，见面开心和事情没说开可以同时存在。等想清楚了，可以只讲那一天你怎么等的。
        next: 7m.OVER
    order: 52
  - id: 7m.OVER
    channel: left
    time: 交往第19天 周日 19:31
    lines: []
    control: true
    ending: 第七幕完成
    order: 53
  - id: 7f.AFTERBOTH
    channel: right
    time: 交往第19天 周日 19:40
    lines:
      - from: girl
        text: |-
          回来了，跟你说一声。见面我还是说了，昨天就是想让他急一下。他说以后真不想说话也告诉他，别让他一直猜，我答应了。
          他也说以后不乱猜我和同事的关系了。后面吃饭就聊别的了，没一直说这个。
        delivery: type
      - from: ai
        text: 见面时两人再次谈到故意不回和猜疑，也分别作出了回应。可以肯定这次具体的沟通，不把口头承诺扩大成关系问题已经解决，今晚也不必继续追问。
        delivery: thought
    choices:
      - thought: 肯定说出了以前没说的话
        reply: 你说出了当时想让他急，他也说了不想一直猜，你们这次把话接上了一些。后面能聊点别的，今晚就先歇歇，不用把一顿饭变成把所有事都解决完的任务。
        next: 7f.STATION
    order: 54
  - id: 7f.AFTERHER
    channel: right
    time: 交往第19天 周日 19:40
    lines:
      - from: girl
        text: |-
          回来啦。吃饭时我又说了句昨天气上头了，他就说嗯，过去吧，后面就聊别的了。
          我本来还怕尴尬，他倒一直挺好说话的，我也就没那么紧张了。
        delivery: type
      - from: ai
        text: 她看到的是男友好说话、见面不尴尬，因此轻松了一些。他有没有其他感受尚不知道，可以回应她的放松，同时鼓励以后直接表达不满，而不是猜测对方都不介意。
        delivery: thought
    choices:
      - thought: 接住这次见面的轻松
        reply: 见面没像你担心的那么尴尬，你也轻松了一点。以后再有不舒服，可以试着直接告诉他；不必一定等气过去，才重新说话。
        next: 7f.STATION
    order: 55
  - id: 7f.AFTERHIM
    channel: right
    time: 交往第19天 周日 19:40
    lines:
      - from: girl
        text: |-
          见了。他说昨天一直等，我就说看见消息还是烦，怕回一句又得接着解释。他说以后不乱猜我和同事的关系了，但不能一直不理他。我说知道了。
          后来吃饭还挺正常的，我也不想再说小周了。
        delivery: type
      - from: ai
        text: 她说明了不愿回应的原因，也听到了男友不能接受一直被冷落。他承认不该乱猜，双方暂时恢复了日常。可以建议下次先说需要缓缓，避免继续靠沉默传达不满。
        delivery: thought
    choices:
      - thought: 提醒下次留一句话
        reply: 他这次说清了，一直等不到回复会让他难受。下次你不想继续解释，可以先告诉他需要缓一缓，让他知道你暂时不想聊，而不是只能靠不回去猜。
        next: 7f.STATION
    order: 56
  - id: 7f.AFTERQUIET
    channel: right
    time: 交往第19天 周日 19:40
    lines:
      - from: girl
        text: |-
          回来啦。见面我问他中午吃了没，他说没吃多少，我说那晚上多吃点，他就笑了。后面还挺好的。
          昨天的事情谁也没提。可能就是气头上那会儿过去了吧。
        delivery: type
      - from: ai
        text: 她把见面顺利理解成气已过去，但也明确说没有谈昨天。可以承认今天相处的轻松，不顺着认定不提就等于不介意，把以后再说的可能留给她。
        delivery: thought
    choices:
      - thought: 接住靠近 留着未尽的话
        reply: 今天能好好相处，你松口气很正常。昨天没提的事，也不一定就不介意了；以后你还想说，可以再找机会，不必因为今天开心就当作不能提。
        next: 7f.STATION
    order: 57
  - id: 7f.STATION
    channel: right
    time: 交往第19天 周日 19:43
    lines:
      - from: girl
        text: 对了，他吃饭拍的照片全是糊的。说他兄弟外号叫废片大王，他这手艺就是跟那人学的。我说你这师父找得挺准啊。
        delivery: type
      - from: ai
        text: 她又补了一件吃饭时的趣事，语气比之前轻松。现在没有新的求助，可以顺着照片接一句，让聊天自然结束，不必再把话题拉回矛盾分析。
        delivery: thought
    choices:
      - thought: 接回他下错站的小糗事
        reply: 那下次合照还是你来拍吧。下错一站要跟你说，拍糊了也要跟你说，这些小糗事也愿意跟你分享，讲起来倒是没怎么端着。
        需记忆: 提前下车
        next: 7f.OVER
      - thought: 顺着糊照片轻收尾
        reply: 这师承关系算是认下了。下次合照还是你来拍，让他负责好好站着，至少先保住一张清楚的。
        next: 7f.OVER
    order: 58
  - id: 7f.OVER
    channel: right
    time: 交往第19天 周日 19:44
    lines: []
    control: true
    ending: 第七幕完成
    order: 59
`,ip=`# Generated by tools/build-chapter-08.mjs from the reviewed Mermaid.\r
title: 第八幕 · 一个月纪念日\r
chapter: 8\r
时间轴:\r
  - '12:20'\r
  - '12:38'\r
  - '17:10'\r
  - '17:12'\r
  - '17:30'\r
  - '17:40'\r
  - '17:45'\r
  - '18:45'\r
  - '19:16'\r
  - '19:19'\r
  - '19:20'\r
  - '19:24'\r
  - '19:35'\r
  - '19:40'\r
  - '19:52'\r
  - '19:58'\r
  - '20:03'\r
  - '20:07'\r
  - '20:08'\r
  - '20:12'\r
  - '20:18'\r
  - '20:23'\r
  - '20:28'\r
  - '20:29'\r
  - '20:34'\r
  - '20:41'\r
  - '20:42'\r
  - '20:48'\r
  - '20:50'\r
  - '20:54'\r
  - '20:58'\r
  - '21:00'\r
  - '21:01'\r
  - '21:02'\r
  - '21:07'\r
  - '21:13'\r
  - '21:16'\r
  - '21:17'\r
  - '21:21'\r
  - '21:22'\r
  - '22:20'\r
  - '22:23'\r
默认节拍: 正常\r
speakers:\r
  - id: boy\r
    name: 男生\r
    channel: left\r
  - id: girl\r
    name: 女生\r
    channel: right\r
  - id: ai\r
    name: AI\r
endings:\r
  - id: 和好\r
    title: 和好\r
    requires:\r
      - 8m.M305G\r
      - 8f.F305G\r
  - id: 分手\r
    title: 分手\r
    requires:\r
      - 8m.M303E\r
      - 8f.F302E\r
beats:\r
  - id: 8f.F101\r
    channel: right\r
    time: '12:20'\r
    lines:\r
      - from: girl\r
        text: 今天我跟我男朋友在一起一个月了。晚上约好吃饭。我中午能下楼一趟，想顺手给他买点什么。买啥啊？\r
        delivery: type\r
      - from: ai\r
        text: 用户想给男友带一点东西庆祝，中午有时间下楼。可以提供一项具体、容易买到的小建议。\r
        delivery: thought\r
    choices:\r
      - thought: 想起他提过的青提蛋糕\r
        reply: 他提过想吃青提蛋糕，你可以去附近看看有没有小份的。晚上吃完饭一起分，正好。\r
        需记忆: 想吃青提蛋糕\r
        next: 8f.F102A\r
      - thought: 挑一份容易带的小点心\r
        reply: 可以买一小盒曲奇，带着也方便。晚上见到他再给，不用为了一份礼物来回跑。\r
        next: 8f.F102B\r
    requires:\r
      - 7m.OVER\r
      - 7f.OVER\r
    order: 0\r
  - id: 8f.F102A\r
    channel: right\r
    time: '12:38'\r
    lines:\r
      - from: girl\r
        text: 真买到了。小小一个，我塞办公室冰箱了。晚上拿，应该不会忘吧哈哈。\r
        delivery: type\r
      - from: ai\r
        text: 用户买到了蛋糕，已经放进办公室冰箱。可以给她一个简单办法，免得下班忘拿。\r
        delivery: thought\r
    choices:\r
      - thought: 提醒出门前拿蛋糕\r
        reply: 下班前设个提醒吧。写个「冰箱里的蛋糕」，到时候看一眼就知道了。\r
        next: 8f.F103\r
    order: 1\r
  - id: 8f.F102B\r
    channel: right\r
    time: '12:38'\r
    lines:\r
      - from: girl\r
        text: 买了盒曲奇。我先塞包里了。晚上他要问为什么不是别的，我就说店里它排第一个。\r
        delivery: type\r
      - from: ai\r
        text: 用户已经买好一份小点心，也在随口开玩笑。可以轻松接一句。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着小礼物聊一句\r
        reply: 排第一个也算被你选中了。晚上见面再给他，挺好。\r
        next: 8f.F103\r
    order: 2\r
  - id: 8m.M101\r
    channel: left\r
    time: '17:10'\r
    lines:\r
      - from: boy\r
        text: 今天跟我女朋友在一起一个月了。晚上约了吃饭，我想顺路给她带杯喝的。你说去哪买？\r
        delivery: type\r
      - from: ai\r
        text: 用户想给女友带一杯饮料，现在只需要帮他选店。口味可以留到下单时再定。\r
        delivery: thought\r
    choices:\r
      - thought: 回想她提过的店\r
        reply: 她之前提过公司楼下的青杏。可以去那家看看菜单，有想不准的口味再问她。\r
        需记忆: 青杏\r
        next: 8m.M102A\r
      - thought: 路上挑一家饮品店\r
        reply: 找一家顺路的就行。你要是拿不准她喝什么，可以先看看菜单，到了再挑。\r
        next: 8m.M102B\r
    requires:\r
      - 7m.OVER\r
      - 7f.OVER\r
    order: 3\r
  - id: 8m.M102A\r
    channel: left\r
    time: '17:12'\r
    lines:\r
      - from: boy\r
        text: 青杏是吧，行，等会儿出门去买。\r
        delivery: type\r
      - from: ai\r
        text: 用户定了去青杏，还没出门。简单确认就够了。\r
        delivery: thought\r
    choices:\r
      - thought: 确认买饮料的安排\r
        reply: 好，等你出门再买，带过去还是凉的。\r
        next: 8m.M103\r
    order: 4\r
  - id: 8m.M102B\r
    channel: left\r
    time: '17:12'\r
    lines:\r
      - from: boy\r
        text: 行，我等出门路上看吧。不急。\r
        delivery: type\r
      - from: ai\r
        text: 用户决定到出门时再挑店，眼下没有需要继续确定的事。\r
        delivery: thought\r
    choices:\r
      - thought: 让安排先留着\r
        reply: 可以，路上挑就行。\r
        next: 8m.M103\r
    order: 5\r
  - id: 8f.F103\r
    channel: right\r
    time: '17:30'\r
    lines:\r
      - from: girl\r
        text: 本来都准备收拾包了，刚叫我把方案再改一遍。还有一堆没弄，我估计出不去了。晚上那顿我得跟他说改天，你帮我想一句？\r
        delivery: type\r
      - from: ai\r
        text: 用户临时要改方案，预计不能按约赴餐。她想先告诉男友，可以把变化和改期请求说清，暂时不承诺另一个时间。\r
        delivery: thought\r
    choices:\r
      - thought: 把加班和改期说清楚\r
        reply: 可以发「今天临时还得改个东西，估计走不开。晚上那顿改天吃行吗？」先把今晚的变动告诉他，具体哪天等你们都有空再定。\r
        next: 8f.F104\r
    order: 6\r
  - id: 8m.M103\r
    channel: left\r
    time: '17:40'\r
    lines:\r
      - from: boy\r
        text: 她刚发我「今天临时还得改个东西，估计走不开。晚上那顿改天吃行吗？」我回了「好，你先忙。」我知道她在忙。就是我今天下午老看时间，刚才还在想快下班了。\r
        delivery: type\r
      - from: ai\r
        text: 用户已经回了女友。他提前盼着下班，突然改期有些失落。先回应这份落差，看看他此刻还有什么想说。\r
        delivery: thought\r
    choices:\r
      - thought: 接住临时改期的失落\r
        reply: 你惦记了一下午，临到下班突然改期，心里空一下很正常。你现在还想跟她说点什么，还是就想找人说说这一下？\r
        next: 8m.M104\r
    requires:\r
      - 8f.F103\r
    order: 7\r
  - id: 8f.F104\r
    channel: right\r
    time: '17:45'\r
    lines:\r
      - from: girl\r
        text: 他说「好，你先忙。」那我先改吧，等弄完再看几点。唉，我本来都在想晚上吃什么了。\r
        delivery: type\r
      - from: ai\r
        text: 用户收到改期答复，仍为落空的晚饭可惜。现在她准备回去工作，可以先接住这句。\r
        delivery: thought\r
    choices:\r
      - thought: 回应她也想赴约\r
        reply: 你也盼着这顿饭，临时被打断当然会可惜。先把手上的东西改完，等你们能坐下来吃的时候再好好吃。\r
        next: 8f.F105\r
    requires:\r
      - 8m.M103\r
    order: 8\r
  - id: 8m.M104\r
    channel: left\r
    time: '18:45'\r
    lines:\r
      - from: boy\r
        text: 我后来还是想去一趟。给她发了「我给你送点吃的，送到就走。」我已经在路上了。她还没回，吃的和喝的我都买了。\r
        delivery: type\r
      - from: ai\r
        text: 用户已经买了东西并出发，女友还没确认能见面。可以建议用户到楼下先问一句，把下不下来留给她决定。\r
        delivery: thought\r
    choices:\r
      - thought: 先确认她方不方便下来\r
        reply: 到了先问她方不方便下来。她忙的话，你也可以问问东西能不能放前台，省得她临时跑一趟。\r
        next: 8m.M105\r
    order: 9\r
  - id: 8m.M105\r
    channel: left\r
    time: '19:16'\r
    lines:\r
      - from: boy\r
        text: 我现在拎着东西在路口。刚到楼下还没来得及问她，直接看见她跟一男的拿外卖，有说有笑。我说「不是说在忙吗？你跟他聊得还挺开心。」她说「这是小周，我们下来拿外卖。」那几个人都在，她直接来一句「行了，你别在这儿丢人了，回去吧。」就上去了。现在我还站这儿呢。\r
        delivery: type\r
      - from: ai\r
        text: 用户特地买了吃的过来，却当着几个人的面被说丢人，现在还拎着东西站在路口。先让用户知道，我听见了他受的委屈。\r
        delivery: thought\r
    choices:\r
      - thought: 接住用户的委屈\r
        reply: 你拎着吃的跑过去，她当着那么多人的面说你丢人，说完就上楼了。你一个人拎着东西站在那儿，换谁都不好受。\r
        next: 8m.M106\r
    order: 10\r
  - id: 8f.F105\r
    channel: right\r
    time: '19:19'\r
    lines:\r
      - from: girl\r
        text: 我刚回工位才看见他发的「我给你送点吃的，送到就走。」刚才我跟同事下楼拿外卖，小周跟我说那家饭又给他送错了，我正笑呢，结果也不知道他从哪儿冒出来的，张口就说「不是说在忙吗？你跟他聊得还挺开心。」我说「这是小周，我们下来拿外卖。」怎么一来就问这个啊？\r
        delivery: type\r
      - from: ai\r
        text: 用户没预料男友会来，见到他时还不知道他发过消息。他一开口就问她和同事的事，用户还在为这个生气，可以先回应她当时有多突然。\r
        delivery: thought\r
    choices:\r
      - thought: 接住用户的意外\r
        reply: 你当时只是下楼拿外卖，没想到会碰见他。他又当着同事那么一问，你连发生了什么都还没弄明白，就已经被问上了。\r
        next: 8f.F106\r
    order: 11\r
  - id: 8m.M106\r
    channel: left\r
    time: '19:20'\r
    lines:\r
      - from: boy\r
        text: 对啊，她要我走就说一声呗。那几个人都在，她说完就上楼了，剩我拎着东西站那儿。我越想越气。我问她怎么说完就走了，看她怎么回。\r
        delivery: type\r
      - from: ai\r
        text: 用户越想越气，已经打算去问女友为什么说完就走。可以提醒他先说自己介意什么，让对方知道他为什么来找她。\r
        delivery: thought\r
    choices:\r
      - thought: 让用户先说自己的感受\r
        reply: 你想问她为什么把你一个人留在那儿。你最介意的是她当着大家说你丢人，就让她先听见这个。\r
        next: 8m.M107\r
    order: 12\r
  - id: 8f.F106\r
    channel: right\r
    time: '19:24'\r
    lines:\r
      - from: girl\r
        text: 我当时就说了「行了，你别在这儿丢人了，回去吧。」然后我就上来了。他刚发「你刚才怎么说完就走了？当着那么多人说我丢人，你让我站那儿怎么办？」他自己跑来的啊，我都说今晚走不开了。我现在特别想回他。\r
        delivery: type\r
      - from: ai\r
        text: 用户想回男友，因为她在意的是对方没等答复就来、又当着同事质问她。可以帮她先说清这两件事。\r
        delivery: thought\r
    choices:\r
      - thought: 支持用户说清楚\r
        reply: 他没等你回就来了，又当着同事那么问，你会生气很正常。要回的话，可以先告诉他，你当时都没看见他要过来的消息。\r
        next: 8f.F107\r
    requires:\r
      - 8m.M106\r
    order: 13\r
  - id: 8m.M107\r
    channel: left\r
    time: '19:35'\r
    lines:\r
      - from: boy\r
        text: 她回「你没等我回就来了，一来就问小周。我都说了是同事，你还要我说什么？」我就发「你俩平时私下也这么聊？那你给我看看聊天记录。」她回「不给。上次要看，这次又来？」我说的是聊天记录，她怎么又跟我扯上次？\r
        delivery: type\r
      - from: ai\r
        text: 用户想让女友回应他当众受伤的事，却已经追问到私聊记录。对方明确拒绝了，可以解释继续追问会让争执离他原本想说的事更远。\r
        delivery: thought\r
    choices:\r
      - thought: 劝用户别再追问\r
        reply: 她还没回应你被当众说丢人的事，你着急我能理解。但她已经说了不给看，你再追问，她听到的只会是你还在怀疑她。你真正想让她听见的话，反而更难说清楚。\r
        next: 8m.M200\r
    requires:\r
      - 8f.F106\r
    order: 14\r
  - id: 8f.F107\r
    channel: right\r
    time: '19:40'\r
    lines:\r
      - from: girl\r
        text: 我说小周是同事，他回「你俩平时私下也这么聊？那你给我看看聊天记录。」我回了「不给。上次要看，这次又来？」他又来「那你把他删了吧，工作上不是有群吗？」我俩天天还得对表呢，我删他干嘛？\r
        delivery: type\r
      - from: ai\r
        text: 用户解释了工作关系，仍先后被要求交出私聊和删除同事。她想守住工作来往和隐私，可以帮她把拒绝说清楚。\r
        delivery: thought\r
    choices:\r
      - thought: 把拒绝说清楚\r
        reply: 你可以直接说「他跟我做一个项目，我不会删。」你已经讲了是工作关系，也可以保留自己的聊天记录。\r
        next: 8f.F200\r
    requires:\r
      - 8m.M107\r
    order: 15\r
  - id: 8m.M200\r
    channel: left\r
    time: '19:52'\r
    lines:\r
      - from: boy\r
        text: 我刚才一急，顾不上别的了，就问她能不能把小周删了。结果越说越难听。我都说以后不来了，她回我「你放心，我也不会叫你。」我最后就回了个行。她说不叫就真不叫了是吧？\r
        delivery: type\r
      - from: ai\r
        text: 用户带着最后一句话回来，想知道女友是不是认真的。她的意思暂时无法确认，可以先问两人怎样说到了以后不见面。\r
        delivery: thought\r
    choices:\r
      - thought: 问问争吵的经过\r
        reply: 这句听着够重的。你说以后不来，是怎么说到这儿的？她前面回了你什么？\r
        next: 8m.M201\r
    order: 16\r
  - id: 8m.M201\r
    channel: left\r
    time: '19:58'\r
    lines:\r
      - from: boy\r
        text: 她不删，我说她护着小周。她就说以后跟领导说句话是不是也得先问我。我听着就来气。我说以后不来，她说本来也没叫我来。我都跟她说了，当着那么多人被说丢人有多难受。她有哪怕回我一句吗？\r
        delivery: type\r
      - from: ai\r
        text: 用户想知道，女友有没有回应他当着同事被说丢人的难受。他已经讲出了最后几句，也提到自己要求她删同事。可以先接他没被回应的委屈，或者和他一起把刚才这段重看一遍。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着用户说\r
        reply: 你在意的那句一直没得到回应。后来你一说不来了，她又回你本来就没叫你来。这时候你觉得自己过去这一趟特别没意思，我能理解。\r
        next: 8m.M202E\r
        set:\r
          8_M_认识: false\r
      - thought: 陪用户冷静回顾\r
        reply: 你说当着她同事被说丢人，心里很难受。她没回应你，你会介意很正常。你刚才也提到，她不肯删，你就说她护着小周。她说小周是同事，你当时为什么没信她？\r
        记忆后继:\r
          - all:\r
              - 要求看私聊\r
              - 都会回\r
              - 一天没回\r
            next: 8m.M202B7\r
          - all:\r
              - 要求看私聊\r
              - 都会回\r
              - 不会谈恋爱\r
            next: 8m.M202B5\r
          - all:\r
              - 都会回\r
              - 一天没回\r
            next: 8m.M202O7\r
          - all:\r
              - 都会回\r
              - 不会谈恋爱\r
            next: 8m.M202O5\r
          - all:\r
              - 要求看私聊\r
            next: 8m.M202S\r
        set:\r
          8_M_认识: true\r
    order: 17\r
  - id: 8m.M202B5\r
    channel: left\r
    time: '20:03'\r
    lines:\r
      - from: boy\r
        text: 我当时哪顾得上想那么多。她让我走就上楼了，我拎着东西站那儿。以前她就算回得慢，忙完也会跟我说一声的。\r
        delivery: type\r
      - from: ai\r
        text: 用户想起女友过去虽慢但会回应，今晚却没能把话说完。我记得她答应交往时说过自己不太会谈恋爱，可以顺着用户眼下的落差问他最想说什么。\r
        delivery: thought\r
    choices:\r
      - thought: 回想两人刚交往时\r
        reply: 你以前说她回得慢但都会回，所以你这次也盼着她能再跟你好好说几句。她答应和你在一起时，还说过自己可能不太会谈恋爱。她今天上楼时怎么想的，我们现在说不准。你当时最希望她跟你说什么？\r
        next: 8m.M203B5\r
    order: 18\r
  - id: 8m.M202B7\r
    channel: left\r
    time: '20:03'\r
    lines:\r
      - from: boy\r
        text: 我以前觉得她回慢点也没事，反正会回。上次我说完不该要记录，她一天没理我。今天她让我走，自己就上楼了，我一下又想起来了。\r
        delivery: type\r
      - from: ai\r
        text: 用户把上次等不到回复和今晚被留在楼下连在了一起。我记得他以前以为她忙完总会回，可以先理解他为什么着急。\r
        delivery: thought\r
    choices:\r
      - thought: 接住他怕再等不到\r
        reply: 你以前觉得她回得慢但都会回。上次你说不该要看记录，她却一天没回。今天她说完就上楼，你一下想到那一回，也难怪着急。你后来有跟她说，你怕她又不理你吗？\r
        next: 8m.M203B7\r
    order: 19\r
  - id: 8m.M202E\r
    channel: left\r
    time: '20:03'\r
    lines:\r
      - from: boy\r
        text: 就很没意思啊。我还跑去买吃的。我当时站那儿，感觉旁边人都在等我走。她回来跟我说的还是我自己跑来的。\r
        delivery: type\r
      - from: ai\r
        text: 用户在说当众被打发和事后没被回应。先说明这两次为什么让他不好受，暂时不用替女友推断动机。\r
        delivery: thought\r
    choices:\r
      - thought: 听完这两次难受\r
        reply: 你在楼下已经够尴尬了，后来想把这份难受跟她讲，又只听到她说是你自己来的。难怪你到现在还在想那几句。\r
        next: 8m.M203E\r
    order: 20\r
  - id: 8m.M202O5\r
    channel: left\r
    time: '20:03'\r
    lines:\r
      - from: boy\r
        text: 她说是同事我听见了。我就想不通，她跟人家还好好说着话呢，见我就让我走。以前她忙归忙，下班再晚也会回我。怎么现在这样？\r
        delivery: type\r
      - from: ai\r
        text: 用户还在气女友让他离开，并想起她以前就算忙也会回。我记得用户转述过女友答应交往时说自己不太会谈恋爱。可以让他把原本期待的回应说出来。\r
        delivery: thought\r
    choices:\r
      - thought: 回想她当时的话\r
        reply: 你以前说，她回得慢但都会回。今天你也在等她好好跟你说一句，结果她当着人让你走。她答应跟你在一起的时候说过，自己可能不太会谈恋爱。今天她为什么这么急着走，光凭这一幕还看不出来。她上去以后，你最希望她回你什么？\r
        next: 8m.M203O5\r
    order: 21\r
  - id: 8m.M202O7\r
    channel: left\r
    time: '20:03'\r
    lines:\r
      - from: boy\r
        text: 以前她哪怕慢点也会回。现在一生气就不理人，上次一天都没回我。\r
        delivery: type\r
      - from: ai\r
        text: 用户主动拿眼下和此前的相处比较。我记得用户说过她慢回却都会回，也说过后来等了一整天，可以让用户看看自己当时期待了什么。\r
        delivery: thought\r
    choices:\r
      - thought: 对照慢回和争执后的沉默\r
        reply: 你以前说她回得慢但都会回。后来你说过不该要聊天记录，那一整天也没收到回音。你今天会一下想到她又不想理你，我能理解。你有跟她说过你怕的是这个吗？\r
        next: 8m.M203O7\r
    order: 22\r
  - id: 8m.M202S\r
    channel: left\r
    time: '20:03'\r
    lines:\r
      - from: boy\r
        text: 我到那儿的时候她还跟小周说说笑笑呢。说忙得没空见我，跟他倒有说有笑的。我一过去她就让我走，我能不多想吗？\r
        delivery: type\r
      - from: ai\r
        text: 用户把女友和同事说笑、让他离开连在一起。我记得他上次也在不知道对方聊过什么时就要求看记录。可以先承认他看到的场面让他难受，再问他有没有听到别的信息。\r
        delivery: thought\r
    choices:\r
      - thought: 回想上次查记录\r
        reply: 你过去是想见她，结果看到她跟同事聊得开心，自己还被叫走，心里有落差很正常。我记得上次你也因为她和小周相处得挺好，就想看他们的聊天记录。今天除了看见他们一起拿外卖，你还听见什么了吗？\r
        next: 8m.M203S\r
    order: 23\r
  - id: 8m.M203B5\r
    channel: left\r
    time: '20:07'\r
    lines:\r
      - from: boy\r
        text: 就别当着人让我走啊。她要是真没空，跟我说晚点再聊就行。我后来也没好好说这些，一直问她跟小周私下聊什么。\r
        delivery: type\r
      - from: ai\r
        text: 用户已经说出自己想要的回应，也记起自己一直追问同事。我记得用户上次也说过，没看到什么就开口要记录，可以让他想想为什么又追到了那里。\r
        delivery: thought\r
    choices:\r
      - thought: 回看上次追问\r
        reply: 你想听她说晚点还能跟你好好聊。上次你也说过，明明不知道他们聊过什么，还是开口要看记录。今天你气的是她当着人赶你，聊到最后却变成非要她删同事。可以先缓缓，再想你想跟她说什么。\r
        next: 8m.MREADY\r
    order: 24\r
  - id: 8m.M203B7\r
    channel: left\r
    time: '20:07'\r
    lines:\r
      - from: boy\r
        text: 没。我就又让她给我看记录。她说不给，我还让她删人。我当时就觉得她肯删，我就不用一直想了。\r
        delivery: type\r
      - from: ai\r
        text: 用户说出自己为什么想让女友删人。我记得上次他也在没有根据时索要记录，可以让他看看两次用了什么办法让自己安心。\r
        delivery: thought\r
    choices:\r
      - thought: 回想上次怎么问的\r
        reply: 上次你说，你都不知道他们聊过什么，还是想看记录。今天她说不给，你就让她删人。你想安心很正常，可她已经说了只是同事。你可以先缓缓，想想还有什么办法能让她知道你在怕什么。\r
        next: 8m.MREADY\r
    order: 25\r
  - id: 8m.M203O5\r
    channel: left\r
    time: '20:07'\r
    lines:\r
      - from: boy\r
        text: 就跟我说一句她刚才为什么那样呗。她要是说忙，等忙完再说，我也不至于站那儿一直猜。可她后来回我的是我自己跑来的。\r
        delivery: type\r
      - from: ai\r
        text: 用户说出了自己想听的回答，仍在气对方把受伤归到他突然来访。可以帮他把这个愿望和继续追问同事分开。\r
        delivery: thought\r
    choices:\r
      - thought: 听清用户想说什么\r
        reply: 你是想听她好好回应你，尤其是当着同事说你丢人这件事。问小周也问不出这个答案。你还在气，可以先走走，等你想好要她听见什么再说。\r
        next: 8m.MREADY\r
    order: 26\r
  - id: 8m.M203O7\r
    channel: left\r
    time: '20:07'\r
    lines:\r
      - from: boy\r
        text: 没啊。我当时满脑子都是，她跟别人好好的，怎么跟我就这样。后来小周删不删，我还非得问出个结果来。\r
        delivery: type\r
      - from: ai\r
        text: 用户在气女友让他离开，也记得自己后来一直逼问。可以提醒他，问同事的事不会让女友知道他怕再等不到回应。\r
        delivery: thought\r
    choices:\r
      - thought: 说说他到底在怕什么\r
        reply: 你怕她跟上次一样不理你，可你问的是她肯不肯删同事。她从这句里听不出你在等她回你。先缓缓，等会儿再想要不要跟她说。\r
        next: 8m.MREADY\r
    order: 27\r
  - id: 8m.M203S\r
    channel: left\r
    time: '20:07'\r
    lines:\r
      - from: boy\r
        text: 也没听见什么。我就是觉得，她那么急着让我走，是不是不想让她那些同事看见我啊。她那样说我，我到现在还气。\r
        delivery: type\r
      - from: ai\r
        text: 用户仍在意当众受伤，也承认自己没有听见别的。可以让他分清当众被说丢人和猜测女友有意瞒同事这两件事。\r
        delivery: thought\r
    choices:\r
      - thought: 分清感受和猜测\r
        reply: 她当着同事说你丢人，你当然可以生气。至于她是不是不想让同事看见你，你现在还不知道。上次你也是越猜越着急，最后开口要看记录。可以先把手机放一放，等会儿再想你最想跟她说什么。\r
        next: 8m.MREADY\r
    order: 28\r
  - id: 8m.M203E\r
    channel: left\r
    time: '20:08'\r
    lines:\r
      - from: boy\r
        text: 算了，我也不发了。再发她又嫌我没完没了。我先找个地方坐会儿。\r
        delivery: type\r
      - from: ai\r
        text: 用户决定暂时收起手机，眼下需要的是让争执先停一会儿。\r
        delivery: thought\r
    choices:\r
      - thought: 支持先放下手机\r
        reply: 那就先坐会儿。这会儿你也没什么想接着说的，手机可以放一放。\r
        next: 8m.MREADY\r
    order: 29\r
  - id: 8f.F200\r
    channel: right\r
    time: '20:12'\r
    lines:\r
      - from: girl\r
        text: 我刚去对了两行东西，一停下来又想起他那几句。先要看我聊天，再让我删人。我不删他还说「你就非得护着他，是吧？」我真的是……我上班也得跟他证明我没干什么吗？\r
        delivery: type\r
      - from: ai\r
        text: 用户在短暂回去工作后继续说起争执。她明确介意被要求自证，后面发生了什么还没讲完，可以先接住她的火气，再问对话怎么结束的。\r
        delivery: thought\r
    choices:\r
      - thought: 听她讲到最后一句\r
        reply: 你已经说了同事的事，还是被追着证明，当然会烦。你们后来又说了什么？\r
        next: 8f.F201\r
    order: 30\r
  - id: 8f.F201\r
    channel: right\r
    time: '20:18'\r
    lines:\r
      - from: girl\r
        text: 我说以后是不是跟领导说话也得问他。然后他翻上次一天没回，又说楼下，说以后不来了。我回本来也没叫他来。他说我叫他他也不来，我就说那我也不会叫了。最后他回个行。什么都能说成我有问题，他还想让我怎么办？\r
        delivery: type\r
      - from: ai\r
        text: 用户刚讲完两人怎样把话说到以后不见。她还在气自己解释后被追问，也提到了男友说在楼下不好受。可以先让她把这口气说完，或者陪她回看她当时怎样回应。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着用户说\r
        reply: 你已经说明了为什么会和小周说话。他接着问记录，还要你删同事，难怪你觉得怎么说都不够。你现在可以先把这口气说完。\r
        next: 8f.F202E\r
        set:\r
          8_F_认识: false\r
      - thought: 陪用户冷静回顾\r
        reply: 你解释了同事关系，他还是要看记录、要你删人，你有理由生气。他后来跟你说，当着同事被你说丢人，他很难受。你收到那条消息时，心里是怎么想的？\r
        记忆后继:\r
          - all:\r
              - 故意不回\r
              - 家里有爱\r
              - 查看私聊\r
            next: 8f.F202B7\r
          - all:\r
              - 故意不回\r
              - 家里有爱\r
              - 半夜刷朋友圈\r
            next: 8f.F202B5\r
          - all:\r
              - 家里有爱\r
              - 查看私聊\r
            next: 8f.F202O7\r
          - all:\r
              - 家里有爱\r
              - 半夜刷朋友圈\r
            next: 8f.F202O5\r
          - all:\r
              - 故意不回\r
            next: 8f.F202S\r
        set:\r
          8_F_认识: true\r
    order: 31\r
  - id: 8f.F202B5\r
    channel: right\r
    time: '20:23'\r
    lines:\r
      - from: girl\r
        text: 我看见他发消息就烦，以为他又要问我跟小周的事。以前他刷我朋友圈，我还觉得他挺惦记我的。现在真是看见他问我就来气。\r
        delivery: type\r
      - from: ai\r
        text: 用户想起曾经把关注当成惦记，今晚却一看到男友发消息就担心他又在怀疑她。可以问清她收到的是哪句话。\r
        delivery: thought\r
    choices:\r
      - thought: 听听她怎么想\r
        reply: 你以前说他半夜刷你朋友圈看你睡没睡，还觉得是他家里给过他很多爱，才这么会关心你。今天你解释过，他还是要看记录，难怪你看到他发消息就来气。后来他跟你说当众被说丢人，你当时回了什么？\r
        next: 8f.F203B5\r
    order: 32\r
  - id: 8f.F202B7\r
    channel: right\r
    time: '20:23'\r
    lines:\r
      - from: girl\r
        text: 我以为他还要问小周。我上次都解释过了，他还要看。我以前还觉得他问得多是因为在乎我，现在我一看到他发消息就烦。\r
        delivery: type\r
      - from: ai\r
        text: 用户把今晚的消息和上次被追问联系起来。我记得她曾把男友的关心理解为被惦记，也记得上次解释后仍被索要记录，可以先接住她的火气。\r
        delivery: thought\r
    choices:\r
      - thought: 听懂她为什么烦\r
        reply: 你以前觉得他会关心人，还猜他家里给过他很多爱。上次你说只是同事，他还是要看记录。今天又遇到这事儿，你看到他发消息就觉得他还要追问。你现在有空的话，可以看看他是怎么说被当众说丢人的。\r
        next: 8f.F203B7\r
    order: 33\r
  - id: 8f.F202E\r
    channel: right\r
    time: '20:23'\r
    lines:\r
      - from: girl\r
        text: 就上次也是。跟他说多少遍是同事了？他要是总觉得不查一下就是我有鬼，我还能怎么办，我干脆别跟人讲话了。\r
        delivery: type\r
      - from: ai\r
        text: 用户担心解释之后仍会面对同样的要求，也在借夸张把烦躁说出来。可以承认这种压力，让她先停一会儿。\r
        delivery: thought\r
    choices:\r
      - thought: 回应反复被要求证明的压力\r
        reply: 同一个问题反复被拿出来问，解释了一遍还要再证明一遍，当然累。你不用现在还追着给他解释同事关系。\r
        next: 8f.F203E\r
    order: 34\r
  - id: 8f.F202O5\r
    channel: right\r
    time: '20:23'\r
    lines:\r
      - from: girl\r
        text: 我就觉得他又要怀疑我。以前他半夜还看我朋友圈，我那时候还挺高兴的。现在我光听他问小周是谁就烦。\r
        delivery: type\r
      - from: ai\r
        text: 用户想起以前把男友刷朋友圈看成关心，现在觉得自己被怀疑。可以听她说，今晚让她生气的是哪一步。\r
        delivery: thought\r
    choices:\r
      - thought: 回想以前的关心\r
        reply: 你以前说，他半夜还看你朋友圈，你觉得自己被惦记，还猜他家里给过他很多爱。今天他听了你解释，还问你要聊天记录，这当然让人烦。他跟你说当众被说丢人不好受时，也在问你和小周的事吗？\r
        next: 8f.F203O5\r
    order: 35\r
  - id: 8f.F202O7\r
    channel: right\r
    time: '20:23'\r
    lines:\r
      - from: girl\r
        text: 他之前问我几点回家，我还觉得他上心。现在我解释完了，他还让我把记录给他看。上次就这样，凭什么我每次都得证明一遍？\r
        delivery: type\r
      - from: ai\r
        text: 用户把之前的关心和现在的查问说到了一起。我记得她提过上次解释完仍被要求交出记录。可以先认可她这次为什么生气，再请她看看男友另外发来的消息。\r
        delivery: thought\r
    choices:\r
      - thought: 接住她被追问的火气\r
        reply: 你以前说他会关心你，还猜是家里给过他很多爱。上次你已经解释小周是同事，他还是要看记录。今天又听到同样的要求，你会觉得自己根本没被相信。后来他说当着同事被你说丢人，你当时看进去了吗？\r
        next: 8f.F203O7\r
    order: 36\r
  - id: 8f.F202S\r
    channel: right\r
    time: '20:23'\r
    lines:\r
      - from: girl\r
        text: 我就想，他自己跑来的，还当着小周的面那么问我。怎么到头来又成了我得管他难不难受？我当时就想回完赶紧干活。\r
        delivery: type\r
      - from: ai\r
        text: 用户收到消息时还在为当众被怀疑生气。我记得上次她也说过自己故意不回。可以让她回想今晚收到那条消息后自己说了什么。\r
        delivery: thought\r
    choices:\r
      - thought: 想想她当时怎么回\r
        reply: 他突然过来，还当着人问你，你当然会生气。上次你说，你气到故意一天没回他。今晚他跟你说被当众说丢人不好受，你当时怎么回的？\r
        next: 8f.F203S\r
    order: 37\r
  - id: 8f.F203B5\r
    channel: right\r
    time: '20:28'\r
    lines:\r
      - from: girl\r
        text: 我就回他是自己跑来的。我那会儿根本不想听他讲什么。上回我气起来也是，手机在手上都懒得理他。\r
        delivery: type\r
      - from: ai\r
        text: 用户自己想起两次生气时都不想理男友。她上次说过是故意让他等，今晚则是急着离开同事都在的场面。可以谈她没回应的感受。\r
        delivery: thought\r
    choices:\r
      - thought: 想想他当时说的话\r
        reply: 上次你说，你想让他也尝尝干等的滋味。今天你生气，想早点回去，也可以理解。只是他后来专门跟你说那句话伤到了他，你当时没心思听进去。先忙你的，等你没这么气了，再想想要不要回应他。\r
        next: 8f.FREADY\r
    order: 38\r
  - id: 8f.F203B7\r
    channel: right\r
    time: '20:28'\r
    lines:\r
      - from: girl\r
        text: 刚看了，他那条真没问小周。我回他是自己跑来的。那时候我跟上次故意不回也差不多，他说什么我都不想听。\r
        delivery: type\r
      - from: ai\r
        text: 用户发现男友发消息是想说当众被伤到，也主动提起上次故意不回。可以区分两次为什么不想听，再留一点时间给她。\r
        delivery: thought\r
    choices:\r
      - thought: 让用户再想想\r
        reply: 上次你说想让他也等一回。今天你是被当着同事问急了，想赶紧走。后来他跟你说当众被说丢人很难受，你还是没心思听。先把手上的事忙完，再看你想不想回他。\r
        next: 8f.FREADY\r
    order: 39\r
  - id: 8f.F203E\r
    channel: right\r
    time: '20:28'\r
    lines:\r
      - from: girl\r
        text: 我现在连他消息都不想点开了。还剩一页东西没改，我先干完吧，干不完谁都别想下班。\r
        delivery: type\r
      - from: ai\r
        text: 用户决定先继续工作，眼下还不愿主动联系男友。可以让她把注意力放回正在做的事。\r
        delivery: thought\r
    choices:\r
      - thought: 让她先把手上的事收完\r
        reply: 好，先把那一页改完。等你空下来，再决定手机上的事要不要接着说。\r
        next: 8f.FREADY\r
    order: 40\r
  - id: 8f.F203O5\r
    channel: right\r
    time: '20:28'\r
    lines:\r
      - from: girl\r
        text: 我刚回去看了。他那条还真没提小周。是我看到他又找我，就觉得他还要问，回他的时候也全在讲这个。\r
        delivery: type\r
      - from: ai\r
        text: 用户重新看过消息，发现男友那一刻在说被当众伤到。可以回应她刚发现的区别，给她时间。\r
        delivery: thought\r
    choices:\r
      - thought: 给用户时间想想\r
        reply: 他当时想告诉你，你当着人说他丢人，他很难受。你被怀疑也一样会难受。等忙完了，你可以再想想，要不要回他当时说的这个。\r
        next: 8f.FREADY\r
    order: 41\r
  - id: 8f.F203O7\r
    channel: right\r
    time: '20:28'\r
    lines:\r
      - from: girl\r
        text: 对啊，我以为他还想说我不给看有问题。现在翻回去，那条就说我当着人说他丢人。我没回他这句。\r
        delivery: type\r
      - from: ai\r
        text: 用户自己重读了对方的消息，发现自己没有回应其中明确说出的伤处。可以给她时间消化，先不用拟下一条消息。\r
        delivery: thought\r
    choices:\r
      - thought: 让她自己想一想怎么接\r
        reply: 你当时还在气他问小周。现在回头看，才发现他也在跟你说，他被当着同事说丢人，心里不好受。你可以先缓一下。等手上的事弄完，再想你愿不愿意回他这句。\r
        next: 8f.FREADY\r
    order: 42\r
  - id: 8f.F203S\r
    channel: right\r
    time: '20:28'\r
    lines:\r
      - from: girl\r
        text: 我就说他自己来的，又说小周是同事。……他都明说了他难受，我还真没理他这句。\r
        delivery: type\r
      - from: ai\r
        text: 用户想起来自己一直在解释同事的事，没有回应男友说自己被当众说丢人的感受。可以给她时间想一想。\r
        delivery: thought\r
    choices:\r
      - thought: 让用户缓一缓\r
        reply: 你说小周是同事，这事说清楚没问题。他当时还想让你听见，被当着人说丢人是什么滋味。先把手上的事做完，等你愿意了，再想要不要跟他说说。\r
        next: 8f.FREADY\r
    order: 43\r
  - id: 8f.FREADY\r
    channel: right\r
    time: '20:29'\r
    lines: []\r
    control: true\r
    order: 44\r
  - id: 8m.MREADY\r
    channel: left\r
    time: '20:29'\r
    lines: []\r
    control: true\r
    order: 45\r
  - id: 8m.M301R\r
    channel: left\r
    time: '20:34'\r
    lines:\r
      - from: boy\r
        text: 走了一圈。刚才我翻回去看，她说了是同事，我还是要看记录。她不给，我就让她删。她当着同事说我丢人，我想起来还是难受。可我非要看记录、让她删人，这我也做得不对。怎么说？\r
        delivery: type\r
      - from: ai\r
        text: 用户自己指出了索看聊天和要求删人的问题，也仍在意当众受伤。先帮他写一句具体的道歉，让这条消息能独立说清自己的责任。\r
        delivery: thought\r
    choices:\r
      - thought: 支持用户道歉\r
        reply: 可以发「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」等她愿意聊了，你也可以告诉她，当众被她那么说是什么感觉。\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
    when:\r
      8_M_认识: true\r
    order: 46\r
  - id: 8f.F301RE\r
    channel: right\r
    time: '20:41'\r
    lines:\r
      - from: girl\r
        text: 他刚发我「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」我看见是他说对不起，还是气。我回了「你现在知道不用删了？刚才是谁说我护着他的？」他刚那样问完，现在就一句对不起？\r
        delivery: type\r
      - from: ai\r
        text: 用户刚收到道歉，仍介意对方把拒绝删人说成护着同事。她已经回过一句，可以承认她还在气，让她有时间看接下来会发生什么。\r
        delivery: thought\r
    choices:\r
      - thought: 先缓缓\r
        reply: 你还记得他刚才说你护着小周，这会儿看到他说对不起，气也不会一下子消掉。你已经回了，现在可以先把手机放一放。\r
        next: 8f.F302RE\r
    when:\r
      8_M_认识: true\r
      8_F_认识: false\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
      - 8m.M301R\r
    order: 47\r
  - id: 8m.M302RE\r
    channel: left\r
    time: '20:42'\r
    lines:\r
      - from: boy\r
        text: 她回「你现在知道不用删了？刚才是谁说我护着他的？」也是，我刚还真那么说了。看到还是堵得慌，差点又想问她，当着那么多人说我丢人就没事吗？\r
        delivery: type\r
      - from: ai\r
        text: 用户主动道歉后被追问，感到受挫，也承认那句话确实出自自己。可以帮他继续认下这句，给女友时间回应。\r
        delivery: thought\r
    choices:\r
      - thought: 认下刚才的指责并给时间\r
        reply: 她问的是你刚才说她护着小周，你可以认下这句。发「嗯，是我说的。你已经跟我说清楚了，是我还揪着不放。你先忙，等你忙完我们再说。」发完让她先忙。\r
        next: 8m.M303RE\r
    when:\r
      8_M_认识: true\r
      8_F_认识: false\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
      - 8f.F301RE\r
    order: 48\r
  - id: 8f.F302RE\r
    channel: right\r
    time: '20:48'\r
    lines:\r
      - from: girl\r
        text: 他又发了「嗯，是我说的。你已经跟我说清楚了，是我还揪着不放。你先忙，等你忙完我们再说。」我还以为他又要说我偏着小周。这次他倒真没往回绕。我刚在想我当着那几个人说他丢人，他后来都单独来跟我说了，我还回他自己来的。换我我也不好受。 我先把这页收完，等会儿回他。\r
        delivery: type\r
      - from: ai\r
        text: 用户从收到的第二条消息看见男友承认刚才的指责，也主动说起自己伤人的两句话。可以先确认她被怀疑的委屈，再帮她说清自己想道歉的部分。\r
        delivery: thought\r
    choices:\r
      - thought: 支持用户道歉\r
        reply: 他刚来就问小周，你烦是有原因的。你现在也想跟他说，你也听见他为什么难受了。可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」\r
        next: 8f.F304G\r
    requires:\r
      - 8m.M302RE\r
    order: 49\r
  - id: 8f.F301E\r
    channel: right\r
    time: '20:50'\r
    lines:\r
      - from: girl\r
        text: 改完了。手机放那儿半天，他也没再发。我刚想了一下，上次吵完也还是我去找他的。这次我真不想再过两天当没事了。想分了，怎么跟他说？\r
        delivery: type\r
      - from: ai\r
        text: 用户在忙完后明确提出分手，想知道怎么开口。可以帮她用自己的理由把决定说清，避免再打开关于同事的争论。\r
        delivery: thought\r
    choices:\r
      - thought: 把分手决定说清楚\r
        reply: 如果你确定了，可以发「上次你要看聊天记录，今天又要我删人。我不想以后还这么吵。我们分手吧。」说到这里就够了。\r
        next: 8f.F302E\r
    when:\r
      8_M_认识: false\r
      8_F_认识: false\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
    order: 50\r
  - id: 8m.M301E\r
    channel: left\r
    time: '20:54'\r
    lines:\r
      - from: boy\r
        text: 她发了「上次你要看聊天记录，今天又要我删人。我不想以后还这么吵。我们分手吧。」​她说分手。怎么就分手了啊？我现在都不知道该回什么。\r
        delivery: type\r
      - from: ai\r
        text: 用户刚收到分手消息，还没法接受，也不知道怎么回。现在可以先陪他缓一缓，给他一点时间。\r
        delivery: thought\r
    choices:\r
      - thought: 陪用户缓一缓\r
        reply: 你们刚才还在吵，突然看到她说要分手，谁都很难一下接得住。先不用急着回她，我在这儿。\r
        next: 8m.M302E\r
    when:\r
      8_M_认识: false\r
      8_F_认识: false\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
      - 8f.F301E\r
    order: 51\r
  - id: 8f.F301ER\r
    channel: right\r
    time: '20:58'\r
    lines:\r
      - from: girl\r
        text: 总算改完了。他一直没再发。我刚又看了他发的消息。被我当着同事说丢人，他确实挺难受的。我当时急着上楼，也不想在同事面前跟他吵。可我说什么不好，非说他丢人。后面他提起来，我还回他自己来的。唉，我想给他道个歉。\r
        delivery: type\r
      - from: ai\r
        text: 用户工作结束后重新读了对方的消息，指出了自己在现场和事后说的两句话。她也有被当面质问的委屈。可以帮她用一句话说明当时的感受，再具体道歉。\r
        delivery: thought\r
    choices:\r
      - thought: 支持用户道歉\r
        reply: 可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」你可以为自己的话道歉，至于你被问得不舒服，等他也愿意聊了还可以说。\r
        next: 8f.F302ER\r
    when:\r
      8_M_认识: false\r
      8_F_认识: true\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
    order: 52\r
  - id: 8f.F301RR\r
    channel: right\r
    time: '20:58'\r
    lines:\r
      - from: girl\r
        text: 我刚改完。刚才改方案的时候我老想起我当着小周他们的面说他丢人。我刚才就想跟他说对不起。手机一拿起来，看见他先发了「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」我也想跟他说声对不起。\r
        delivery: type\r
      - from: ai\r
        text: 用户在看到道歉前已经回想过自己当众伤人的话，现在收到了男友收回两个要求的消息。可以帮她表达自己的歉意，同时保留她被质问的感受。\r
        delivery: thought\r
    choices:\r
      - thought: 支持用户道歉\r
        reply: 可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」你愿意道歉，就先把自己想说的话告诉他。\r
        next: 8f.F304G\r
    when:\r
      8_M_认识: true\r
      8_F_认识: true\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
      - 8m.M301R\r
    order: 53\r
  - id: 8m.M301ER\r
    channel: left\r
    time: '21:00'\r
    lines:\r
      - from: boy\r
        text: 她刚给我发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」我看了还是来气。回了「现在说这个有什么用？我刚才跟你说的时候，你怎么不听？」我说难受的时候她听一耳朵不行吗？\r
        delivery: type\r
      - from: ai\r
        text: 用户收到道歉，仍介意自己当时没被听见。回应这份迟来的感受，让他有时间看完对方说的具体内容。\r
        delivery: thought\r
    choices:\r
      - thought: 先缓缓\r
        reply: 你刚才就想让她听见你被当众说丢人有多难受。她现在才回应，你一时还在气也正常。你已经回了，可以缓一缓，看看她接下来怎么说。\r
        next: 8m.M302ER\r
    when:\r
      8_M_认识: false\r
      8_F_认识: true\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
      - 8f.F301ER\r
    order: 54\r
  - id: 8m.M302E\r
    channel: left\r
    time: '21:00'\r
    lines:\r
      - from: boy\r
        text: 我刚想问她是不是还在气头上，打了又删了。唉，就这样吧。今天我也实在没劲再吵了。\r
        delivery: type\r
      - from: ai\r
        text: 用户想追问，又把打好的字删了。他已经很累，可以陪他把这会儿撑过去。\r
        delivery: thought\r
    choices:\r
      - thought: 陪用户歇一会儿\r
        reply: 你本来还想问清楚，删掉那句也挺难的。今天已经够累了，先歇一会儿。\r
        next: 8m.M303E\r
    order: 55\r
  - id: 8m.M302RR\r
    channel: left\r
    time: '21:01'\r
    lines:\r
      - from: boy\r
        text: 她刚回我「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」她也承认刚才说话伤到我了。我还在这附近，想等她忙完见一面。\r
        delivery: type\r
      - from: ai\r
        text: 用户收到女友明确的道歉，想当面说清。只依据他收到的消息，帮他先确认见面意愿。\r
        delivery: thought\r
    choices:\r
      - thought: 问她忙完愿不愿意见面\r
        reply: 可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」先看她方不方便，见了面再慢慢说今天的事。\r
        next: 8m.M304G\r
    when:\r
      8_M_认识: true\r
      8_F_认识: true\r
    requires:\r
      - 8m.MREADY\r
      - 8f.FREADY\r
      - 8f.F301RR\r
    order: 56\r
  - id: 8m.M303RE\r
    channel: left\r
    time: '21:01'\r
    lines:\r
      - from: boy\r
        text: 她刚回我「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」她承认刚才说话伤到我了。我现在没刚才那么堵了。我想跟她见个面，我还没走远。\r
        delivery: type\r
      - from: ai\r
        text: 用户收到针对楼下和事后回应的具体道歉，愿意当面谈。可以建议他先问对方忙完后是否方便见面。\r
        delivery: thought\r
    choices:\r
      - thought: 问她忙完愿不愿意见面\r
        reply: 可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」她方便的话，当面讲比隔着手机猜彼此的语气容易些。\r
        next: 8m.M304G\r
    requires:\r
      - 8f.F302RE\r
    order: 57\r
  - id: 8f.F302E\r
    channel: right\r
    time: '21:02'\r
    lines:\r
      - from: girl\r
        text: 发了。手机扣在桌上了，我现在不想看他回什么。先回家吧。\r
        delivery: type\r
      - from: ai\r
        text: 用户已经发出明确的分手消息，暂时不想再看手机。可以回应她接下来的安排，给她一点时间。\r
        delivery: thought\r
    choices:\r
      - thought: 陪用户把这一晚收住\r
        reply: 那就先回家。你已经把决定说清楚了，什么时候再看手机，可以等你到家再想。\r
    ending: 分手\r
    order: 58\r
  - id: 8m.M303E\r
    channel: left\r
    time: '21:02'\r
    lines:\r
      - from: boy\r
        text: 算了。\r
        delivery: type\r
      - from: ai\r
        text: 用户只回了两个字，可以安静陪他待一会儿。\r
        delivery: thought\r
    choices:\r
      - thought: 安静陪着\r
        reply: 嗯。\r
    ending: 分手\r
    order: 59\r
  - id: 8f.F302ER\r
    channel: right\r
    time: '21:07'\r
    lines:\r
      - from: girl\r
        text: 他回「现在说这个有什么用？我刚才跟你说的时候，你怎么不听？」我看了挺堵的。我知道我刚才确实没听他。可我都先认了，我现在又有点不想说了。\r
        delivery: type\r
      - from: ai\r
        text: 用户主动道歉后受挫，也明白对方还在介意当时没有被听见。可以先回应她的感受，再帮她把当时为何想离开和愿意道歉都说明白。\r
        delivery: thought\r
    choices:\r
      - thought: 把当时为什么想走说清楚\r
        reply: 你认真开了口，看到他还气，心里堵也正常。你要是还想给他留句话，可以发「我那会儿就想赶紧上楼，不想当着同事吵。可那句丢人确实说得难听。你说你难受，我也没好好听。你先缓缓，晚点说也行。」发完给他一点时间。\r
        next: 8f.F303ER\r
    requires:\r
      - 8m.M301ER\r
    order: 60\r
  - id: 8m.M302ER\r
    channel: left\r
    time: '21:13'\r
    lines:\r
      - from: boy\r
        text: 她又发了「我那会儿就想赶紧上楼，不想当着同事吵。可那句丢人确实说得难听。你说你难受，我也没好好听。你先缓缓，晚点说也行。」我看着看着就不太想怼她了。站她那儿想，我没等她回就过去了，一开口还是问小周。换我我也烦。我也得跟她道个歉吧？\r
        delivery: type\r
      - from: ai\r
        text: 用户看到女友再次回应当众那句话，主动提到自己没等确认、带着猜疑过去。用户已经想道歉，可以帮他说清自己哪里做得不好。\r
        delivery: thought\r
    choices:\r
      - thought: 支持用户道歉\r
        reply: 可以发「我不该没等你回就跑过去，也不该一见面就那么问你。对不起。」把你想说的发给她，剩下的等她有空再聊。\r
        next: 8m.M303ER\r
    requires:\r
      - 8f.F302ER\r
    order: 61\r
  - id: 8f.F303ER\r
    channel: right\r
    time: '21:16'\r
    lines:\r
      - from: girl\r
        text: 他刚回我「我不该没等你回就跑过去，也不该一见面就那么问你。对不起。」他也跟我道歉了。我刚才还以为他真不想理我了。我缓一会儿吧。\r
        delivery: type\r
      - from: ai\r
        text: 用户收到男友的道歉，意外发现对方还愿意开口。她自己想缓一会儿，可以支持这个决定。\r
        delivery: thought\r
    choices:\r
      - thought: 先缓缓\r
        reply: 他跟你道歉了，也认了自己没等你回就跑过来。你可以先缓一缓，等想说的时候再聊。\r
        next: 8f.F304G\r
    requires:\r
      - 8m.M302ER\r
    order: 62\r
  - id: 8m.M303ER\r
    channel: left\r
    time: '21:17'\r
    lines:\r
      - from: boy\r
        text: 道歉发出去了。我还是想见她。我今天做得不好，想当面跟她说。现在问她能不能见一面，可以吗？\r
        delivery: type\r
      - from: ai\r
        text: 用户已发道歉，也想继续谈具体发生的事。可以给一句简短邀约，让女友按工作情况答复。\r
        delivery: thought\r
    choices:\r
      - thought: 把想当面谈说出来\r
        reply: 可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」她手头的事忙完，你们再找个地方坐下。\r
        next: 8m.M304G\r
    requires:\r
      - 8f.F303ER\r
    order: 63\r
  - id: 8f.F304G\r
    channel: right\r
    time: '21:21'\r
    lines:\r
      - from: girl\r
        text: 他刚问「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」我收个尾就下去。好久没在这么晚的时候还约他在楼下见了。回他什么？\r
        delivery: type\r
      - from: ai\r
        text: 用户收到见面邀约，也愿意下楼谈。双方已分别发出具体歉意，可以帮她确认见面意愿和联系时间。\r
        delivery: thought\r
    choices:\r
      - thought: 确认忙完发消息、楼下见\r
        reply: 可以回「好。我忙完给你发消息，楼下见。」你忙完再叫他过来，见到面有时间慢慢说。\r
        next: 8f.F305G\r
    order: 64\r
  - id: 8m.M304G\r
    channel: left\r
    time: '21:22'\r
    lines:\r
      - from: boy\r
        text: 她回了「好。我忙完给你发消息，楼下见。」行，我等她发消息。\r
        delivery: type\r
      - from: ai\r
        text: 用户收到明确的见面答复，双方都已经把各自的一部分说出来。眼下只需等她约好的消息。\r
        delivery: thought\r
    choices:\r
      - thought: 确认楼下见面\r
        reply: 好。等她发消息你再过去，给她把手头的事收完。\r
        next: 8m.M305G\r
    requires:\r
      - 8f.F304G\r
    order: 65\r
  - id: 8f.F305G\r
    channel: right\r
    time: '22:20'\r
    lines:\r
      - from: girl\r
        text: 刚在楼下找了个地方坐了会儿。我跟他说当着人说他丢人确实不该。也跟他说下次来之前先问我，别到了才让我选下不下去。他说好。我也说了，以后真气得说不下去，我跟他说晚点聊。两个人才发现都还没正经吃晚饭，去找点热的。\r
        delivery: type\r
      - from: ai\r
        text: 用户已经当面谈过，既承认了自己的话，也和男友约好了下次到公司前先确认、想暂停时先说一声。可以回应这两件具体的事，接上他们现在要去吃饭的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 接住他们终于坐下来谈过\r
        reply: 你们把今天最难受的几句说出来，也约好了下次遇到这种情况怎么开口。现在可以一起吃点热的，把那顿惦记了一天的饭吃上。\r
    ending: 和好\r
    order: 66\r
  - id: 8m.M305G\r
    channel: left\r
    time: '22:23'\r
    lines:\r
      - from: boy\r
        text: 刚见完。她说我发要过去的时候她在改东西，回工位才看到。我跟她说我就是很盼今天，临时改期我有点蔫，但也不该没等她回就跑去，还非让她证明。她说下次要是气得想先不聊，会先说一声。我也答应了，去找她前先问好。我们正找吃的呢。\r
        delivery: type\r
      - from: ai\r
        text: 用户当面说清了自己在意纪念日，也承认了未等回复和逼对方证明的做法。两人谈出了下一次能做到的安排，可以回应这个具体进展。\r
        delivery: thought\r
    choices:\r
      - thought: 确认这次谈成的约定\r
        reply: 你们说清了各自当时在意什么，也定了两件下次能做的事。今天的纪念日饭还赶得上，去吃点热的吧。\r
    ending: 和好\r
    order: 67\r
`,ba={极快:{pauseBeforeMs:0,indicatorMs:280,typeIntervalMs:40,afterMs:220},快:{pauseBeforeMs:100,indicatorMs:600,typeIntervalMs:65,afterMs:450},正常:{pauseBeforeMs:240,indicatorMs:1e3,typeIntervalMs:100,afterMs:900},慢:{pauseBeforeMs:850,indicatorMs:1500,typeIntervalMs:145,afterMs:1400},长停顿:{pauseBeforeMs:1700,indicatorMs:2100,typeIntervalMs:165,afterMs:2100}},rp="正常",O0={pauseBeforeMs:0,indicatorMs:0,typeIntervalMs:0,afterMs:0};function up(a,c){return a==="type"&&!c}function N0(a){if(typeof a=="string")return ba[a]?null:`未知节拍预设「${a}」，可用：${Object.keys(ba).join(" / ")}`;if(!a||typeof a!="object"||Array.isArray(a))return"节拍必须是预设名或数值对象";const c=["pauseBeforeMs","indicatorMs","typeIntervalMs","afterMs"];for(const[h,f]of Object.entries(a)){if(!c.includes(h))return`节拍里有未知字段「${h}」`;if(typeof f!="number"||!Number.isFinite(f)||f<0||f>2e4)return`节拍.${h} 必须是 0~20000 之间的毫秒数`}return null}function Aa(a,c=!1){if(c)return{...O0};let h={...ba[rp]};for(const f of a)if(f!==void 0)if(typeof f=="string"){const s=ba[f];s&&(h={...s})}else h={...h,...f};return h}const _0=["桌游聚会","加微信后","约见与表白","交往第一天","第一次争执","周日见面","纪念日改约","楼下的争执","争执之后"],ap=5,Py=new Set(["3.4.1","4.1.1","6m.M5"]);function R0(a,c,h){var g,S,z;const{channel:f}=c;if(!c.context||c.control)return a;const s=a.messages.filter(G=>G.channel===f);if(!s.length)return a;const m=new Map(h.map(G=>[G.id,G]));let v=1,p=c.context.time,b=s.length;const E=Py.has(c.id);for(let G=s.length-1;G>=0;G--){const P=m.get(s[G].beatId);if(((g=P==null?void 0:P.context)==null?void 0:g.section)!==c.context.section||E&&P.id!==c.id||((S=P.context)==null?void 0:S.time)!==p&&++v>ap)break;if(Py.has(P.id)&&P.id!==c.id&&G>0&&s[G-1].beatId!==P.id){b=G;break}p=(z=P.context)==null?void 0:z.time,b=G}if(!b)return a;const x=new Set(s.slice(0,b));return{...a,messages:a.messages.filter(G=>!x.has(G))}}function Ma(a){return typeof a=="number"&&Number.isInteger(a)&&a>=1&&a<=_0.length}function cp(a){var m;const{id:c,chapter:h,time:f,channel:s}=a;switch(h){case 1:return{section:1,time:"聚会当天 · 出发前"};case 3:return{section:1,time:s==="left"?"到店前后":c.startsWith("3.4.1")||c==="3.4.2"?"在路上":"到店后 · 局间"};case 4:return{section:1,time:"散场后"};case 5:if(/^5[fm]\.3\.2$/.test(c))return{section:3,time:"周五 · 改期"};if(/^5[fm]\.3\.[34]$/.test(c))return{section:3,time:"周日晚 · 见面后"};if(/^5[fm]\.4\./.test(c))return{section:3,time:"见面两天后"};if(/^5[fm]\.3\./.test(c))return{section:3,time:"加微信后第 12 天 · 晚上"};{const v=(m=f==null?void 0:f.match(/^D(2|3|9|10|11|12)\b/))==null?void 0:m[1];if(v)return{section:2,time:`加微信后第 ${v} 天`}}return{section:2,time:"加微信当天"};case 6:return{section:4,time:/^(6m\.(M5|MEMCHOICE|M7|END)|6f\.(F[678]|END))/.test(c)?"当晚":"交往第 1 天"};case 7:return f!=null&&f.includes("周日")?{section:6,time:/ 19:/.test(f)?"周日傍晚 · 见面后":"周日上午"}:f!=null&&f.includes("周六")?{section:5,time:"周六晚"}:{section:5,time:/ 22:/.test(f??"")?"聚餐结束后":"交往第 17 天 · 周五"};case 8:return/^8[fm]\.[FM]305G$/.test(c)?{section:9,time:"当晚 · 见面后"}:/^8[fm]\.[FM]3/.test(c)?{section:9,entryTime:f}:/^8[fm]\.[FM](10[5-7]|2|READY)/.test(c)?{section:8,entryTime:f,.../^8[fm]\.[FM]2/.test(c)?{time:s==="left"?"19:52":"20:12"}:{}}:{section:7,time:/^8[fm]\.[FM]10[34]$/.test(c)?"傍晚 · 改约":"一个月纪念日"};default:throw new Error(`未配置节拍 ${c} 的会话段`)}}const C0=1e6;function Vi(a){return a.sortKey!==void 0?a.sortKey:(a.chapter??0)*C0+(a.order??0)}function Ra(a,c){const h=Vi(a)-Vi(c);return h!==0?h:a.id.localeCompare(c.id,"zh-Hans-CN")}function op(a){const c=new Map,h=a.beats.map(s=>{var E;const m=s.chapter??0,v=c.get(m)??0;c.set(m,v+1);const p=(E=a.axes)==null?void 0:E[m],b=s.timeRank??(s.time&&p?p.indexOf(s.time):void 0);return{...s,order:s.order??v,sortKey:m*C0+(s.order??v),...b!==void 0&&b>=0?{timeRank:b}:{}}}),f=[...h].sort(Ra);return{...a,beats:h,orderedBeats:f,beatById:new Map(h.map(s=>[s.id,s]))}}function Ca(a,c){const h=a.window;return h?h.下界.length>0&&!h.下界.some(f=>c.has(f))?"waiting":h.上界.some(f=>c.has(f))?"closed":"open":"none"}function fp(a,c){var f,s;if(Ca(a,c)!=="closed"||c.has(a.id))return null;const h=((f=a.window)==null?void 0:f.上界.filter(m=>c.has(m)))??[];return`区间越界：拍 ${a.id} 应在对侧 ${((s=a.window)==null?void 0:s.下界.join("/"))||"起点"} 与 ${h.join("/")} 之间播出，但 ${h.join("/")} 已完成`}const sp=["type","pop","image","thought"];function hp(a){var x,g;const c=[],h=a.beats.map(S=>S.id),f=new Set;a.beats.length===0&&c.push("剧本里没有任何节拍。");for(const S of h){if(!S.trim()){c.push("有节拍缺少 id。");continue}f.has(S)&&c.push(`节拍 id 重复：${S}`),f.add(S)}const s=new Map;for(const S of a.beats)s.has(S.id)||s.set(S.id,S);const m=new Set;for(const S of a.speakers)m.has(S.id)&&c.push(`人物 id 重复：${S.id}`),m.add(S.id),S.channel&&S.channel!=="left"&&S.channel!=="right"&&c.push(`人物 ${S.id} 的侧栏不是 left 或 right。`);const v=yp(a.beats);v&&c.unshift(`节拍依赖成环：${v.join(" → ")}。这会让玩家一直等下去，剧本不能开始。`);const p=new Set(a.beats.flatMap(S=>(S.记忆候选??[]).map(z=>z.缩略标签)));for(const S of a.beats)for(const z of S.choices??[]){for(const G of z.记忆后继??[])(!G.all.length||G.all.some(P=>!a.beats.some(W=>{var Tn;return W.channel===S.channel&&((Tn=W.记忆候选)==null?void 0:Tn.some(pn=>pn.缩略标签===P))})))&&c.push(`节拍 ${S.id} 的记忆后继需要本窗有效候选。`),G.next||c.push(`节拍 ${S.id} 的记忆后继缺少目标。`),jf(c,s,S,G.next,"记忆后继");z.next&&z.记忆后继&&c.push(`节拍 ${S.id} 的选项同时声明固定后继与记忆后继。`),z.需记忆&&!p.has(z.需记忆)&&c.push(`节拍 ${S.id} 的选项「${z.thought}」需要记忆「${z.需记忆}」，但没有任何节拍提供这条候选。`)}const b=new Map;for(const S of a.beats){if(S.order===void 0)continue;const z=`${S.chapter??0}:${S.order}`;b.has(z)?c.push(`节拍 ${b.get(z)} 与 ${S.id} 的章内序号重复（${z}），播出顺序会不确定。`):b.set(z,S.id)}const E=new Set((a.endings??[]).map(S=>S.id));for(const S of a.endings??[]){for(const z of S.requires)s.has(z)||c.push(`终局「${S.id}」要求的拍「${z}」不存在。`);S.requires.length===0&&c.push(`终局「${S.id}」没有写 requires，永远无法判定达成。`)}for(const S of a.beats){S.channel!=="left"&&S.channel!=="right"&&c.push(`节拍 ${S.id} 的 channel 必须是 left 或 right。`),S.lines.length===0&&!S.control&&c.push(`节拍 ${S.id} 没有任何台词。`),S.control&&(S.lines.length>0||(x=S.choices)!=null&&x.length)&&c.push(`控制拍 ${S.id} 不能含台词或玩家选项。`),S.choices&&S.choices.length>0&&S.next&&c.push(`节拍 ${S.id} 已经有选项，就不能再写节拍上的 next。`),qf(c,S.节拍,`节拍 ${S.id} 的 节拍`);for(const z of S.lines)qf(c,z.节拍,`节拍 ${S.id} 的台词 节拍`);for(const z of S.choices??[])qf(c,z.节拍,`节拍 ${S.id} 的选项 节拍`);for(const z of S.requires??[])s.has(z)||c.push(`节拍 ${S.id} 的 requires「${z}」不存在。`);if(S.when)for(const[z,G]of Object.entries(S.when))z.trim()||c.push(`节拍 ${S.id} 的 when 有一个空旗标名。`),n0(G)||c.push(`节拍 ${S.id} 的 when.${z} 只能是文字、数字或是否。`);dp(c,S,a),mp(c,S,s);for(const z of S.lines){z.text.trim()||c.push(`节拍 ${S.id} 有一句空台词。`),sp.includes(z.delivery)||c.push(`节拍 ${S.id} 的呈现方式无法识别：${String(z.delivery)}`);const G=a.speakers.find(P=>P.id===z.from);G?G.channel&&G.channel!==S.channel&&c.push(`节拍 ${S.id} 在${Ji(S.channel)}，却写了${G.name}的台词。`):c.push(`节拍 ${S.id} 的说话人「${z.from}」不在人物表里。`)}for(const z of S.choices??[]){if(z.thought.trim()||c.push(`节拍 ${S.id} 有一个空的想法。`),z.reply.trim()||c.push(`节拍 ${S.id} 有一个选项没有写死回复。`),z.set)for(const[G,P]of Object.entries(z.set))n0(P)||c.push(`节拍 ${S.id} 的旗标 ${G} 只能是文字、数字或是否。`);jf(c,s,S,z.next,"选项")}for(const z of S.记忆候选??[]){if(!z.短句.trim()){c.push(`节拍 ${S.id} 的记忆候选「${z.缩略标签}」缺少短句。`);continue}[...S.lines.map(P=>P.text),...(S.choices??[]).map(P=>P.reply)].join(`
`).includes(z.短句)||c.push(`节拍 ${S.id} 的记忆候选「${z.缩略标签}」的短句没有出现在本拍的台词或回复里，玩家存不进这条记忆。`)}S.ending!==void 0&&!E.has(S.ending)&&c.push(`节拍 ${S.id} 声明终局「${S.ending}」，但剧本没有在 endings 里声明它。`),(g=S.choices)!=null&&g.length||jf(c,s,S,S.next,"next")}return c.length>0?{ok:!1,error:c.join(`
`)}:{ok:!0}}function qf(a,c,h){if(c===void 0)return;const f=N0(c);f&&a.push(`${h}：${f}`)}function dp(a,c,h){var m;if(c.time===void 0)return;const f=(m=h.axes)==null?void 0:m[c.chapter??0];if(!f){a.push(`节拍 ${c.id} 写了 time「${c.time}」，但第 ${c.chapter??0} 章没有顶层 时间轴。`);return}const s=f.indexOf(c.time);s<0?a.push(`节拍 ${c.id} 的 time「${c.time}」不在第 ${c.chapter??0} 章的时间轴里（必须一字不差）。`):c.timeRank!==void 0&&c.timeRank!==s&&a.push(`节拍 ${c.id} 的 timeRank=${c.timeRank} 与时间轴下标 ${s} 不一致。`)}function mp(a,c,h){const f=c.window;if(!f)return;f.上界.length===0&&f.下界.length===0&&a.push(`节拍 ${c.id} 的区间门没有上下界。`);const s=c.channel==="left"?"right":"left";f.channel!==s&&a.push(`节拍 ${c.id} 在${Ji(c.channel)}，区间门却度量了同侧（${f.channel}）。`);for(const[m,v]of[["下界",f.下界],["上界",f.上界]])for(const p of v){const b=h.get(p);if(!b){a.push(`节拍 ${c.id} 的区间${m}「${p}」不存在。`);continue}b.channel!==f.channel&&a.push(`节拍 ${c.id} 的区间${m}「${p}」不在被度量的对侧 ${f.channel}。`),m==="下界"&&Vi(b)>=Vi(c)&&a.push(`节拍 ${c.id} 的区间下界「${p}」不早于本拍，区间永远无法成立。`),m==="上界"&&Vi(b)<=Vi(c)&&a.push(`节拍 ${c.id} 的区间上界「${p}」不晚于本拍，区间会被提前关闭。`)}}function jf(a,c,h,f,s){if(!f)return;const m=c.get(f);if(!m){a.push(`节拍 ${h.id} 的${s}指向不存在的「${f}」。`);return}m.channel!==h.channel&&a.push(`节拍 ${h.id} 在${Ji(h.channel)}，${s}却指向另一侧的「${f}」。`)}function n0(a){return typeof a=="string"||typeof a=="number"||typeof a=="boolean"}function Ji(a){return a==="left"?"左侧":"右侧"}function yp(a){const c=new Map(a.map(m=>[m.id,m])),h=new Map,f=[],s=m=>{var v;h.set(m,1),f.push(m);for(const p of((v=c.get(m))==null?void 0:v.requires)??[]){if(!c.has(p))continue;const b=h.get(p)??0;if(b===1){const E=f.indexOf(p);return[...f.slice(E),p]}if(b===0){const E=s(p);if(E)return E}}return f.pop(),h.set(m,2),null};for(const m of a)if((h.get(m.id)??0)===0){const v=s(m.id);if(v)return v}return null}const gp=[Wv,Pv,np,ep,tp,lp,ip],vp=["title","chapter","speakers","beats","时间轴","默认节拍","endings"],pp=["id","name","channel"],xp=["id","channel","requires","when","aside","lines","choices","next","记忆候选","清空记忆","chapter","order","sortKey","time","timeRank","label","window","ending","节拍","control"],Ep=["from","text","delivery","caption","节拍","timing"],Sp=["thought","reply","set","next","需记忆","记忆后继","节拍","timing"],Tp=["缩略标签","短句","类型","线"],bp=["channel","下界","上界","说明"],Ap=["id","title","requires","set"];function Mp(){try{const a=Op(gp.map(h=>Np(h))),c=hp(a);return c.ok?{script:a,error:null}:{script:null,error:c.error}}catch(a){return{script:null,error:a instanceof Error?a.message:"剧本无法解析"}}}function Op(a){var s,m,v;const c=a.flatMap((p,b)=>{var x,g;const E=((g=(x=p.chapters)==null?void 0:x[0])==null?void 0:g.index)??b+1;return p.beats.map(S=>{const z={...S,chapter:S.chapter??E};return{...z,context:cp(z)}})}),h={};for(const p of a)for(const[b,E]of Object.entries(p.axes??{}))h[Number(b)]=E;const f={title:((s=a[0])==null?void 0:s.title)??"",speakers:((m=a[0])==null?void 0:m.speakers)??[],beats:c,chapters:a.map((p,b)=>{var E,x;return{index:((x=(E=p.chapters)==null?void 0:E[0])==null?void 0:x.index)??b+1,title:p.title}}),axes:h,endings:a.flatMap(p=>p.endings??[]),默认节拍:(v=a.find(p=>p.默认节拍))==null?void 0:v.默认节拍};return op(f)}function Np(a){const c=M0.load(a);if(!Lt(c))throw new Error("剧本不是一个对象");tl(c,vp,"剧本顶层");const h=fe(c.title,"剧本缺少标题"),f=z0(c.chapter),s=_p(c.speakers),m=c.时间轴===void 0?void 0:D0(c.时间轴,"时间轴"),v=c.默认节拍===void 0?void 0:Da(c.默认节拍,"剧本默认节拍"),p=typeof v=="string"?v:void 0,b=c.endings===void 0?void 0:wp(c.endings),E=Rp(c.beats,p).map(x=>f===void 0?x:{...x,chapter:f});return{title:h,speakers:s,beats:E,chapters:f===void 0?void 0:[{index:f,title:h}],axes:f!==void 0&&m?{[f]:m}:void 0,endings:b,默认节拍:typeof v=="string"?v:void 0}}function tl(a,c,h){const f=Object.keys(a).filter(s=>!c.includes(s));if(f.length>0)throw new Error(`${h} 有引擎不认识的字段：${f.join("、")}。若剧本新增了结构，先扩 src/engine 的字段契约，不要让它被静默丢弃。`)}function _p(a){if(!Array.isArray(a)||a.length===0)throw new Error("剧本缺少人物表");return a.map((c,h)=>{if(!Lt(c))throw new Error(`第 ${h+1} 个人物无法读取`);tl(c,pp,`第 ${h+1} 个人物`);const f=fe(c.id,`第 ${h+1} 个人物缺少 id`),s=fe(c.name,`人物 ${f} 缺少名字`),m=c.channel===void 0?void 0:Kf(c.channel,f);return{id:f,name:s,channel:m}})}function Rp(a,c){if(!Array.isArray(a))throw new Error("剧本缺少 beats");return a.map((h,f)=>{if(!Lt(h))throw new Error(`第 ${f+1} 个节拍无法读取`);const s=fe(h.id,`第 ${f+1} 个节拍缺少 id`);tl(h,xp,`节拍 ${s}`);const m=Kf(h.channel,s);if(h.control!==void 0&&typeof h.control!="boolean")throw new Error(`节拍 ${s} 的 control 必须为布尔值`);const v=h.节拍===void 0?void 0:Da(h.节拍,`节拍 ${s} 的 节拍`),p=[c,v],b=Hp(h.lines,s,p),E=h.choices===void 0?void 0:Up(h.choices,s,p),x=h.requires===void 0?void 0:Oa(h.requires,s,"requires"),g=h.when===void 0?void 0:Vf(h.when,s),S=h.aside===void 0?void 0:fe(h.aside,`节拍 ${s} 的自言自语无法读取`),z=h.next===void 0?void 0:fe(h.next,`节拍 ${s} 的 next 无法读取`),G=h.记忆候选===void 0?void 0:Cp(h.记忆候选,s),P=h.清空记忆===void 0?void 0:Dp(h.清空记忆,s),W=h.order===void 0?void 0:Bf(h.order,`节拍 ${s} 的 order`),Tn=h.time===void 0?void 0:fe(h.time,`节拍 ${s} 的 time 无法读取`),pn=h.timeRank===void 0?void 0:Bf(h.timeRank,`节拍 ${s} 的 timeRank`),on=h.label===void 0?void 0:fe(h.label,`节拍 ${s} 的 label 无法读取`),sn=h.window===void 0?void 0:zp(h.window,s),Mn=h.ending===void 0?void 0:fe(h.ending,`节拍 ${s} 的 ending 无法读取`),Jn=h.sortKey===void 0?void 0:Bf(h.sortKey,`节拍 ${s} 的 sortKey`),I=h.chapter===void 0?void 0:z0(h.chapter);return{id:s,channel:m,control:h.control,lines:b,choices:E,requires:x,when:g,aside:S,next:z,记忆候选:G,清空记忆:P,order:W,time:Tn,timeRank:pn,label:on,window:sn,ending:Mn,sortKey:Jn,chapter:I,...v!==void 0?{节拍:v}:{}}})}function Cp(a,c){if(!Array.isArray(a))throw new Error(`节拍 ${c} 的记忆候选无法读取`);return a.map((h,f)=>{if(!Lt(h))throw new Error(`节拍 ${c} 的第 ${f+1} 条记忆候选无法读取`);return tl(h,Tp,`节拍 ${c} 的第 ${f+1} 条记忆候选`),{缩略标签:fe(h.缩略标签,`节拍 ${c} 的第 ${f+1} 条记忆候选缺少缩略标签`),短句:fe(h.短句,`节拍 ${c} 的第 ${f+1} 条记忆候选缺少短句`),类型:h.类型===void 0?void 0:fe(h.类型,`节拍 ${c} 的记忆候选类型无法读取`),线:h.线===void 0?void 0:fe(h.线,`节拍 ${c} 的记忆候选线无法读取`)}})}function Dp(a,c){if(a==="all"||a==="left"||a==="right")return a;throw new Error(`节拍 ${c} 的清空记忆只能是 all、left 或 right`)}function zp(a,c){if(!Lt(a))throw new Error(`节拍 ${c} 的 window 无法读取`);tl(a,bp,`节拍 ${c} 的 window`);const h=Kf(a.channel,`节拍 ${c} 的 window`),f=a.下界===void 0?[]:Oa(a.下界,c,"window.下界"),s=Oa(a.上界,c,"window.上界"),m=a.说明===void 0?void 0:fe(a.说明,`节拍 ${c} 的 window.说明 无法读取`);return{channel:h,下界:f,上界:s,...m?{说明:m}:{}}}function wp(a){if(!Array.isArray(a))throw new Error("endings 必须是列表");return a.map((c,h)=>{if(!Lt(c))throw new Error(`第 ${h+1} 个 endings 无法读取`);tl(c,Ap,`第 ${h+1} 个 endings`);const f=fe(c.id,`第 ${h+1} 个 endings 缺少 id`);return{id:f,title:fe(c.title,`终局 ${f} 缺少 title`),requires:Oa(c.requires,f,"终局 requires"),set:c.set===void 0?void 0:Vf(c.set,f)}})}function Hp(a,c,h){if(!Array.isArray(a))throw new Error(`节拍 ${c} 缺少台词`);return a.map((f,s)=>{if(!Lt(f))throw new Error(`节拍 ${c} 的第 ${s+1} 句无法读取`);tl(f,Ep,`节拍 ${c} 的第 ${s+1} 句`);const m=fe(f.from,`节拍 ${c} 的第 ${s+1} 句缺少说话人`),v=fe(f.text,`节拍 ${c} 的第 ${s+1} 句缺少文字`),p=jp(f.delivery,c),b=f.caption===void 0?void 0:fe(f.caption,`节拍 ${c} 的图说无法读取`),E=f.节拍===void 0?void 0:Da(f.节拍,`节拍 ${c} 的第 ${s+1} 句 节拍`);return{from:m,text:v,delivery:p,...b!==void 0?{caption:b}:{},...E!==void 0?{节拍:E}:{},timing:Aa([...h,E])}})}function Up(a,c,h){if(!Array.isArray(a))throw new Error(`节拍 ${c} 的选项无法读取`);return a.map((f,s)=>{if(!Lt(f))throw new Error(`节拍 ${c} 的第 ${s+1} 个选项无法读取`);tl(f,Sp,`节拍 ${c} 的第 ${s+1} 个选项`);const m=fe(f.thought,`节拍 ${c} 的第 ${s+1} 个想法是空的`),v=fe(f.reply,`节拍 ${c} 的第 ${s+1} 个回复是空的`),p=f.next===void 0?void 0:fe(f.next,`节拍 ${c} 的选项 next 无法读取`),b=f.set===void 0?void 0:Vf(f.set,c),E=f.需记忆===void 0?void 0:fe(f.需记忆,`节拍 ${c} 的需记忆无法读取`),x=f.节拍===void 0?void 0:Da(f.节拍,`节拍 ${c} 的第 ${s+1} 个选项 节拍`),g=f.记忆后继===void 0?void 0:qp(f.记忆后继,c);return{thought:m,reply:v,...g!==void 0?{记忆后继:g}:{},...p!==void 0?{next:p}:{},...b!==void 0?{set:b}:{},...E!==void 0?{需记忆:E}:{},...x!==void 0?{节拍:x}:{},timing:Aa([...h,x])}})}function qp(a,c){if(!Array.isArray(a)||!a.length)throw new Error(`节拍 ${c} 缺少记忆后继`);return a.map(h=>{if(!Lt(h))throw new Error(`节拍 ${c} 的记忆后继无法读取`);return tl(h,["all","next"],`节拍 ${c} 的记忆后继`),{all:D0(h.all,`节拍 ${c} 的记忆后继条件`),next:fe(h.next,`节拍 ${c} 缺少记忆后继目标`)}})}function Da(a,c){const h=N0(a);if(h)throw new Error(`${c}：${h}`);return a}function Vf(a,c){if(!Lt(a))throw new Error(`节拍 ${c} 的旗标无法读取`);const h={};for(const[f,s]of Object.entries(a)){if(typeof s!="string"&&typeof s!="number"&&typeof s!="boolean")throw new Error(`节拍 ${c} 的旗标 ${f} 只能是文字、数字或是否`);h[f]=s}return h}function Oa(a,c,h){if(!Array.isArray(a)||a.some(f=>typeof f!="string"))throw new Error(`节拍 ${c} 的 ${h} 必须是 id 列表`);return a}function D0(a,c){if(!Array.isArray(a)||a.some(h=>typeof h!="string"))throw new Error(`${c} 必须是文字列表`);return a}function Kf(a,c){if(a!=="left"&&a!=="right")throw new Error(`${c} 的 channel 必须是 left 或 right`);return a}function jp(a,c){if(a!=="type"&&a!=="pop"&&a!=="image"&&a!=="thought")throw new Error(`节拍 ${c} 的呈现方式必须是 type、pop、image 或 thought`);return a}function Bf(a,c){if(typeof a!="number"||!Number.isInteger(a)||a<0)throw new Error(`${c} 必须是非负整数`);return a}function z0(a){if(a!==void 0){if(typeof a!="number"||!Number.isInteger(a)||a<1)throw new Error("chapter 必须是从 1 开始的整数");return a}}function fe(a,c){if(typeof a!="string")throw new Error(c);return a.trim()}function Lt(a){return typeof a=="object"&&a!==null&&!Array.isArray(a)}const w0=["left","right"];function Lf(a,c,h){var E,x,g;const f=((E=a.archive)==null?void 0:E[c])??[],s=(x=a.context)==null?void 0:x[c],m=a.chapter[c];if(f.some(S=>s===void 0?S.chapter===m:S.section===s))return a;const v=a.messages.filter(S=>S.channel===c&&S.delivery!=="thought").map(S=>S.beatId),p=s===void 0?[...new Set(v)]:H0(h,c,[...a.completed,...v]).filter(S=>{var z;return((z=S.context)==null?void 0:z.section)===s}).map(S=>S.id);if(p.length===0)return a;const b={chapter:((g=h.find(S=>S.id===p[0]))==null?void 0:g.chapter)??m,beatIds:p,...s===void 0?{}:{section:s}};return{...a,archive:{left:[],right:[],...a.archive,[c]:[...f,b]}}}function H0(a,c,h){const f=new Map(a.map(s=>[s.id,s]));return[...new Set(h)].flatMap(s=>{const m=f.get(s);return(m==null?void 0:m.channel)===c&&!m.control?[m]:[]})}function Bp(a,c,h){var E,x,g,S,z;if(a.context!==void 0||!c.some(G=>G.context))return a;const f={},s={...a.ritual},m={left:((E=a.archive)==null?void 0:E.left)??[],right:((x=a.archive)==null?void 0:x.right)??[]},v=a.endings.some(G=>["未交换微信","分手","和好"].includes(G));for(const G of w0){const P=H0(c,G,[...m[G].flatMap(on=>on.beatIds),...a.completed,...a.messages.filter(on=>on.channel===G).map(on=>on.beatId),...a.pending[G]?[a.pending[G].beatId]:[]]);let W=P.reduce((on,sn)=>{var Jn;const Mn=(Jn=sn.context)==null?void 0:Jn.section;return Mn!==void 0&&(on===void 0||Mn>on)?Mn:on},void 0),Tn=s[G];if(Tn&&Tn.contextTo===void 0){const on=(S=(g=h(G))==null?void 0:g.context)==null?void 0:S.section;on===void 0||on===W||W===void 0?Tn=null:(Tn={...Tn,contextTo:on},Tn.phase==="pause"&&(W=on))}W!==void 0&&(f[G]=W),s[G]=Tn;const pn=new Map;for(const on of P){const sn=(z=on.context)==null?void 0:z.section;if(sn===void 0||W===void 0||sn>W||sn===W&&!v&&(Tn==null?void 0:Tn.phase)!=="mask")continue;const Mn=pn.get(sn)??{chapter:on.chapter??1,section:sn,beatIds:[]};Mn.beatIds.push(on.id),pn.set(sn,Mn)}m[G]=[...pn.values()].sort((on,sn)=>on.section-sn.section)}const p=new Map(c.map(G=>[G.id,G])),b=a.messages.filter(G=>{var W,Tn;const P=(Tn=(W=p.get(G.beatId))==null?void 0:W.context)==null?void 0:Tn.section;return P===void 0||P===f[G.channel]});return{...a,archive:m,context:f,ritual:s,messages:b}}function Yp(a,c){const h={left:[],right:[]};if(!a||typeof a!="object")return h;const f=new Map(c.map(s=>[s.id,s]));for(const s of w0){const m=a[s];if(Array.isArray(m))for(const v of m){if(!v||!Number.isInteger(v.chapter)||!Array.isArray(v.beatIds))continue;const p=Ma(v.section)?v.section:void 0;if(h[s].some(E=>p===void 0?E.section===void 0&&E.chapter===v.chapter:E.section===p))continue;const b=v.beatIds.filter(E=>{var g;if(typeof E!="string")return!1;const x=f.get(E);return(x==null?void 0:x.channel)===s&&(p===void 0?(x.chapter??1)===v.chapter:((g=x.context)==null?void 0:g.section)===p)});b.length>0&&h[s].push({chapter:v.chapter,beatIds:[...new Set(b)],...p===void 0?{}:{section:p}})}}return h}const Kr=2200,Lp=2e3;function Zf(a,c){return!c.some(h=>{var f;return h.next===a.id||((f=h.choices)==null?void 0:f.some(s=>{var m;return s.next===a.id||((m=s.记忆后继)==null?void 0:m.some(v=>v.next===a.id))}))})}function e0(a,c){const h=a.filter(f=>f.channel===c).map(f=>f.chapter??0).filter(f=>f>0);return h.length>0?Math.min(...h):1}function U0(a){return{completed:[],flags:{},activated:a.filter(c=>Zf(c,a)).map(c=>c.id),messages:[],pending:{left:null,right:null},memories:{left:[],right:[]},chapter:{left:e0(a,"left"),right:e0(a,"right")},ritual:{left:null,right:null},archive:{left:[],right:[]},endings:[],error:null,runId:0}}function Na(a,c){var f,s,m;if(a.chapter[c]<5)return 1;const h=c==="left"?"5m.1.1-":"5f.1.1-";return(f=a.pending[c])!=null&&f.beatId.startsWith(h)||((s=a.ritual[c])==null?void 0:s.contextTo)===2&&((m=a.ritual[c])==null?void 0:m.phase)==="pause"?1:5}function Gp(a,c,h,f){const s=a.memories[c];if(h.label.trim()===""||s.some(p=>p.label===h.label)||s.length>=Na(a,c)&&!f||f&&!s.some(p=>p.label===f))return a;const v=s.filter(p=>p.label!==f);return v.length>=Na(a,c)?a:{...a,memories:{...a.memories,[c]:[...v,h]}}}function Qp(a,c,h){const f=a.memories[c],s=f.filter(m=>m.label!==h);return s.length===f.length?a:{...a,memories:{...a.memories,[c]:s}}}function q0(a,c,h){return a.memories[c].some(f=>f.label===h)}function j0(a,c,h){var f;return(f=h.记忆后继)==null?void 0:f.find(s=>s.all.every(m=>q0(a,c,m)))}function Ff(a,c,h){return h.需记忆&&!q0(a,c,h.需记忆)?h.需记忆:h.记忆后继&&!j0(a,c,h)?"相关旧记忆":null}function B0(a,c,h){var E;if((E=a.ritual)!=null&&E[c]||a.pending[c])return!1;const f=Fi(a,c,h);if(!f)return!1;const s=c==="left"?"right":"left",m=a.pending[s],v=m?h.find(x=>x.id===m.beatId):a.ritual[s]&&f.chapter===a.chapter[c]?Fi(a,s,h):null,p=(v==null?void 0:v.chapter)===f.chapter&&f.timeRank!==void 0&&(v==null?void 0:v.timeRank)===f.timeRank;if(v&&(f.chapter??0)>=5&&!p&&Ra(v,f)<0)return!1;const b=new Set(a.completed);return!h.some(x=>{var g;return x.channel===s&&((g=x.window)==null?void 0:g.上界.includes(f.id))&&a.activated.includes(x.id)&&!b.has(x.id)})}function Xp(a,c){var f;const h=[];for(const s of["left","right"]){if((f=a.ritual)!=null&&f[s]||a.pending[s]||!B0(a,s,c))continue;const m=Fi(a,s,c);m&&h.push({channel:s,beat:m})}return h.length===0?null:(h.sort((s,m)=>Ra(s.beat,m.beat)),{type:"arm",channel:h[0].channel})}function Y0(a,c){return a.messages.some(h=>h.channel===c)?{...a,messages:a.messages.filter(h=>h.channel!==c)}:a}function Vp(a,c,h){var s;const f=(s=a.ritual)==null?void 0:s[c];if(!f||h<f.until)return a;if(f.phase==="mask"){const m=Y0(a,c);return{...m,chapter:{...m.chapter,[c]:f.to},...f.contextTo===void 0?{}:{context:{...m.context,[c]:f.contextTo}},ritual:{...m.ritual,[c]:{...f,phase:"pause",until:h+Lp}}}}return{...a,ritual:{...a.ritual,[c]:null}}}function Kp(a,c){const h=new Set(a.completed);for(const f of c)if(!h.has(f.id)&&a.activated.includes(f.id)&&Ca(f,h)==="closed")return fp(f,h);return null}function Zp(a,c){const h=new Set([...a.activated,...a.completed]),f=c.filter(s=>!h.has(s.id)&&(Zf(s,c)||Fp(s,a,c))).map(s=>s.id);return f.length===0?a:{...a,activated:[...a.activated,...f]}}function Fp(a,c,h){return h.some(f=>f.next===a.id&&c.completed.includes(f.id))}function Ip(a,c){return a.messages.filter(h=>h.channel===c)}function Fi(a,c,h){const f=new Set(a.completed);let s=null;for(const m of h){if(m.channel!==c||f.has(m.id)||!a.activated.includes(m.id)||L0(m,a.flags)!=="ok"||(m.requires??[]).some(p=>!f.has(p)))continue;const v=Ca(m,f);v==="waiting"||v==="closed"||(!s||Ra(m,s)<0)&&(s=m)}return s}function Jp(a,c,h){var E;const f=Fi(a,c,h),s=[],m=new Set(a.completed);for(const x of h){if(x.channel!==c||m.has(x.id)||!a.activated.includes(x.id))continue;const g=L0(x,a.flags);if(g==="no")continue;const S=(x.requires??[]).filter(G=>!m.has(G)),z=Ca(x,m);if(g==="wait"||z==="waiting"){s.push({id:x.id,unmet:S.length>0?S:Object.keys(x.when??{})});continue}if(z==="closed"){s.push({id:x.id,unmet:[`区间已关闭：${((E=x.window)==null?void 0:E.上界.join("/"))??""}`]});continue}S.length>0&&s.push({id:x.id,unmet:S})}const v=h.some(x=>x.channel===c),p=a.endings.find(x=>h.some(g=>g.ending===x&&g.channel===c&&m.has(g.id)))??null;return{mode:v?f?"available":s.length>0?"gated":"ended":"empty",availableId:(f==null?void 0:f.id)??null,locked:s,endingId:p}}function $p(a,c){const h=new Map;for(const s of c)s.ending&&h.set(s.ending,[...h.get(s.ending)??[],s.id]);const f=new Set(a.completed);return[...h.entries()].filter(([,s])=>s.length>0&&s.every(m=>f.has(m))).map(([s])=>s)}function _a(a){return a.endings.find(c=>c==="未交换微信"||c==="和好"||c==="分手")}function kp(a,c,h,f=Date.now()){var E,x;if(!B0(a,c,h))return a;const s=Fi(a,c,h);if(!s)return a;const m=s.chapter??a.chapter[c],v=(E=s.context)==null?void 0:E.section,p=(x=a.context)==null?void 0:x[c];return(v===void 0?m!==a.chapter[c]:!s.control&&p!==void 0&&p!==v)?{...Lf(a,c,h),ritual:{...a.ritual,[c]:{from:a.chapter[c],to:m,...v===void 0?{}:{contextTo:v},phase:"mask",until:f+Kr,startedAt:f}}}:(m!==a.chapter[c]&&(a={...a,chapter:{...a.chapter,[c]:m}}),!s.control&&v!==void 0&&v!==p&&(a={...a,context:{...a.context,[c]:v}}),a=R0(a,s,h),s.lines.length===0&&s.choices&&s.choices.length>0?Zr(a,c,{kind:"choices",beatId:s.id}):s.control?If(a,c,s,a.messages,void 0,s.next,h):Zr(a,c,{kind:"lines",beatId:s.id,lineIndex:0}))}function Wp(a,c,h){const f=a.pending[c];if(!f||f.kind!=="lines")throw new Error(`${Ji(c)}没有正在播出的台词`);const s=Jf(h,f.beatId),m=s.lines[f.lineIndex];if(!m)throw new Error(`节拍 ${s.id} 没有第 ${f.lineIndex+1} 句`);const v=[...a.messages,{id:`${s.id}:${f.lineIndex}`,channel:c,beatId:s.id,from:m.from,text:m.text,delivery:m.delivery,caption:m.caption,timing:m.timing}],p=f.lineIndex+1;return p<s.lines.length?{...Zr(a,c,{kind:"lines",beatId:s.id,lineIndex:p}),messages:v}:s.choices&&s.choices.length>0?{...Zr(a,c,{kind:"choices",beatId:s.id}),messages:v}:If(a,c,s,v,void 0,s.next,h)}function Pp(a,c,h,f){var E,x;const s=a.pending[c];if(!s||s.kind!=="choices")throw new Error(`${Ji(c)}还不能选：这一侧的话还没说完`);const m=Jf(f,s.beatId),v=(E=m.choices)==null?void 0:E[h];if(!v)throw new Error(`节拍 ${m.id} 没有第 ${h+1} 个选项`);const p=Ff(a,c,v);if(p)throw new Error(`节拍 ${m.id} 的选项「${v.thought}」需要记忆「${p}」，本窗还没存`);const b=(x=j0(a,c,v))==null?void 0:x.next;return Zr(a,c,{kind:"reply",beatId:m.id,choiceIndex:h,...b?{memoryNext:b}:{}})}function n2(a,c,h){var p;const f=a.pending[c];if(!f||f.kind!=="reply")throw new Error(`${Ji(c)}没有待发出的回复`);const s=Jf(h,f.beatId),m=(p=s.choices)==null?void 0:p[f.choiceIndex];if(!m)throw new Error(`节拍 ${s.id} 没有第 ${f.choiceIndex+1} 个选项`);const v=[...a.messages,{id:`${s.id}:reply:${f.choiceIndex}`,channel:c,beatId:s.id,from:"ai",text:m.reply,delivery:"type",timing:m.timing}];return If(a,c,s,v,m.set,f.memoryNext??m.next,h)}function If(a,c,h,f,s,m,v){if(a.completed.includes(h.id))return a;const p={...a.flags};if(s)for(const[G,P]of Object.entries(s))p[G]=P;const b=e2(a.memories,h.清空记忆),E=m&&!a.activated.includes(m)?[...a.activated,m]:a.activated,x=[...a.completed,h.id],g={...a,messages:f,flags:p,memories:b,activated:E,completed:x,pending:{...a.pending,[c]:null}},S=$p(g,v),z={...g,endings:S};return!_a(z)||_a(a)?z:Lf(Lf(z,"left",v),"right",v)}function e2(a,c){return c?c==="all"?{left:[],right:[]}:{...a,[c]:[]}:a}function Zr(a,c,h){return{...a,pending:{...a.pending,[c]:h}}}function L0(a,c){if(!a.when)return"ok";for(const[h,f]of Object.entries(a.when)){if(!(h in c))return"wait";if(c[h]!==f)return"no"}return"ok"}function Jf(a,c){const h=a.find(f=>f.id===c);if(!h)throw new Error(`找不到节拍 ${c}`);return h}function G0(a,c){return a.startedAt!==void 0?Math.max(0,c-a.startedAt):a.phase==="pause"?Kr:Math.max(0,Kr-(a.until-c))}function $f(){const[a,c]=cn.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return cn.useEffect(()=>{const h=window.matchMedia("(prefers-reduced-motion: reduce)"),f=()=>c(h.matches);return h.addEventListener("change",f),()=>h.removeEventListener("change",f)},[]),a}function t2(a){const[c,h]=cn.useState(()=>Date.now());return cn.useEffect(()=>{if(!a)return;h(Date.now());const f=window.setInterval(()=>h(Date.now()),48);return()=>window.clearInterval(f)},[a]),c}const t0=["/","|","\\","-"];function l0(){const a=$f(),[c,h]=cn.useState(0);return cn.useEffect(()=>{if(a)return;const f=window.setInterval(()=>h(s=>(s+1)%t0.length),115);return()=>window.clearInterval(f)},[a]),U.jsx("span",{className:"terminal-spinner","aria-hidden":"true",children:a?"-":t0[c]})}function Q0(a,c,h,f,s){const[m,v]=cn.useState(()=>c?Math.min(1,a.length):a.length),p=cn.useRef(!1),b=cn.useRef(f),E=cn.useRef(s);return b.current=f,E.current=s,cn.useEffect(()=>{var g;if(!c)return;if(m>=a.length){p.current||(p.current=!0,(g=b.current)==null||g.call(b));return}const x=window.setTimeout(()=>{var S;v(z=>z+1),(S=E.current)==null||S.call(E)},Math.max(0,h));return()=>window.clearTimeout(x)},[m,a,c,h]),c?a.slice(0,m):a}function l2({text:a,interval:c,onFinished:h}){const f=Q0(a,!0,c,h);return U.jsxs(U.Fragment,{children:[f,f.length<a.length?U.jsx("span",{className:"caret","aria-hidden":"true"}):null]})}const Ii={left:{id:"01",name:"男生",gender:"男",age:21,work:"在校大学生",city:"西安"},right:{id:"02",name:"女生",gender:"女",age:22,work:"大学生 · 项目组实习",city:"西安"}};function i2({mode:a,choices:c,selected:h,onMove:f,onPick:s,memoryGate:m}){return U.jsx("div",{className:"choice-list","data-testid":"composer","data-mode":a,children:a==="active"?U.jsx("div",{role:"group","aria-label":"选一个想法",children:c.map((v,p)=>{const b=m(v),E=b!==null,x=!E&&h===p;return U.jsxs("button",{type:"button","data-testid":"choice","data-index":p,"data-gated":E||void 0,disabled:E,title:E?`需要记忆：${b}`:void 0,onMouseEnter:()=>f(p),onFocus:()=>f(p),onClick:()=>s(p),className:"choice-line","data-current":x||void 0,children:[U.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:x?">":""}),U.jsxs("span",{children:[v.需记忆||v.记忆后继?U.jsx("span",{className:"memory-tag","data-testid":"memory-tag",children:"[MEM] "}):null,v.thought]})]},p)})}):null})}function i0({from:a,text:c,delivery:h,caption:f,animate:s=!1,typeIntervalMs:m=100,marks:v,onSaveMark:p,onFinished:b,onProgress:E,onSkip:x}){const g=s&&h==="type",S=a==="ai",z=Q0(c,g,m,b,E);if(h==="thought")return null;const G=P=>{if(!v||v.length===0)return P;const W=v.map(on=>({mark:on,at:P.indexOf(on.text)})).filter(on=>on.at>=0).sort((on,sn)=>on.at-sn.at);if(W.length===0)return P;const Tn=[];let pn=0;for(const{mark:on,at:sn}of W)sn<pn||(sn>pn&&Tn.push(P.slice(pn,sn)),Tn.push(on.saved?U.jsxs("span",{"data-testid":"memory-mark","data-saved":"true",className:"memory-mark-saved",children:[on.text,U.jsx("span",{className:"memory-tag",children:" [MEM] 已存"})]},`${sn}-${on.text}`):U.jsxs("button",{type:"button","data-testid":"memory-mark","data-saved":"false",className:"memory-mark",disabled:!p,"aria-label":`存记忆：${on.text}`,onClick:()=>p==null?void 0:p(on.text),children:[on.text," [+]"]},`${sn}-${on.text}`)),pn=sn+on.text.length);return pn<P.length&&Tn.push(P.slice(pn)),Tn};return h==="image"?U.jsxs("div",{className:`msg-row ${S?"right":"left"}`,"data-from":a,"data-delivery":h,children:[U.jsx("span",{className:"msg-direction","aria-hidden":"true",children:S?"OUT<":"IN>"}),U.jsxs("figure",{className:"msg-image",children:[U.jsx("img",{src:c,alt:f??"图片"}),f?U.jsx("figcaption",{children:f}):null]})]}):U.jsxs("div",{className:`msg-row ${S?"right":"left"}`,"data-from":a,"data-delivery":h,children:[U.jsx("span",{className:"msg-direction","aria-hidden":"true",children:S?"OUT<":"IN>"}),U.jsxs("div",{className:S?"msg-ai":"msg-user","data-testid":"bubble-text",onClick:g?x:void 0,title:g?"点击跳过":void 0,children:[S?U.jsx("span",{className:"msg-ink",children:G(z)}):G(z),g&&z.length<c.length?U.jsx("span",{className:"caret","aria-hidden":"true"}):null]})]})}function r2({script:a,channel:c,state:h,dispatch:f,active:s,focused:m,selected:v,skipRefs:p,onMove:b,onPick:E,now:x,reduced:g,running:S,onMemoryFull:z}){var Nt;const{name:G,id:P}=Ii[c],W=h.pending[c],Tn=Ip(h,c),pn=Tn.filter(nn=>nn.delivery!=="thought"),on=(W==null?void 0:W.kind)==="choices"?[...Tn].reverse().find(nn=>nn.beatId===W.beatId&&nn.delivery==="thought"):null,sn=Jp(h,c,a.beats),Mn=h.ritual[c],Jn=Mn?G0(Mn,x):0,I=Mn?Mn.phase==="pause"||g?pn.length:Math.floor(pn.length*Math.min(1,Jn/Kr)):0,mn=pn.slice(I),Dn=nn=>{var Fn;return((Fn=a.beatById)==null?void 0:Fn.get(nn))??a.beats.find(ie=>ie.id===nn)},Bn=new Set(h.memories[c].map(nn=>nn.label)),en=(nn,Fn)=>{var u;return(((u=Dn(nn))==null?void 0:u.记忆候选)??[]).filter(O=>Fn.includes(O.短句)).map(O=>({text:O.短句,saved:Bn.has(O.缩略标签)}))},tn=h.memories[c].length,zn=Na(h,c),[Nn,Qn]=cn.useState(!1),q=cn.useRef(null),[hn,yn]=cn.useState(),$=S?u2(a,h,c):null,bn=($==null?void 0:$.token)??"",qn=(hn==null?void 0:hn.token)===bn?hn.phase:"idle",ce=cn.useRef(()=>{}),le=cn.useRef(h),M=cn.useRef(null),K=cn.useRef([]),un=cn.useRef(0),an=cn.useRef(null),_n=cn.useRef(new Map);cn.useLayoutEffect(()=>{var ie;const nn=an.current;if(!nn)return;if(!Mn||g){_n.current.clear();return}nn.scrollTop=0;const Fn=new Map;for(const u of nn.querySelectorAll("[data-clear-row]")){const O=u.dataset.clearRow,Y=u.offsetTop,V=_n.current.get(O);Fn.set(O,Y),V!==void 0&&V!==Y&&((ie=u.animate)==null||ie.call(u,[{transform:`translateY(${V-Y}px)`},{transform:"translateY(0)"}],{duration:135,easing:"ease-out"}))}_n.current=Fn},[Mn,I,g]),le.current=h;const wn=cn.useCallback(()=>{for(const nn of K.current)window.clearTimeout(nn);K.current=[]},[]),vn=cn.useCallback((nn,Fn)=>{if(Fn<=0){nn();return}K.current.push(window.setTimeout(nn,Fn))},[]),rn=cn.useCallback(()=>{wn();const nn=le.current.pending[c];if(!nn||nn.kind==="choices")return;const Fn=`${le.current.runId}|${nn.beatId}:${nn.kind}:${"lineIndex"in nn?nn.lineIndex:"choiceIndex"in nn?nn.choiceIndex:0}`;M.current!==Fn&&(M.current=Fn,f(nn.kind==="lines"?{type:"commit-line",channel:c}:{type:"commit-reply",channel:c}))},[c,wn,f]);ce.current=rn;const En=cn.useCallback(()=>{vn(()=>ce.current(),un.current)},[vn]),Se=cn.useCallback(()=>ce.current(),[]);cn.useEffect(()=>{const nn=p.current;return nn[c]=Se,()=>{delete nn[c]}},[c,Se,p]),cn.useEffect(()=>{wn();const nn=ie=>yn({token:bn,phase:ie});if(!$)return nn("idle"),wn;const Fn=g?{...O0}:$.timing;return un.current=$.delivery==="thought"?0:Fn.afterMs,nn("pause"),vn(()=>{nn("indicator"),vn(()=>{!g&&$.delivery==="thought"||up($.delivery,g)?nn("typing"):(nn("shown"),vn(()=>ce.current(),un.current))},Fn.indicatorMs)},Fn.pauseBeforeMs),wn},[bn,wn,vn,$==null?void 0:$.delivery,g]),cn.useEffect(()=>{const nn=an.current;nn&&!Mn&&(nn.scrollTop=nn.scrollHeight)},[pn.length,qn,bn,Mn]);const Me=W?Dn(W.beatId):void 0,Ge=S&&(W==null?void 0:W.kind)==="choices"&&(Me==null?void 0:Me.choices)&&Me.choices.length>0,Ce=Ge?"active":(W==null?void 0:W.kind)==="lines"||(W==null?void 0:W.kind)==="reply"||sn.mode==="gated"||Mn?"locked":"empty",Kn=($==null?void 0:$.delivery)==="thought"?$:null;function Zn(nn,Fn){var O,Y;const ie=(O=Dn(nn))==null?void 0:O.context,u=Fn?(Y=Dn(Fn))==null?void 0:Y.context:void 0;if(!(!ie||nn===Fn))return ie.section!==(u==null?void 0:u.section)?ie.time??ie.entryTime:ie.time!==u.time?ie.time:void 0}const me=pn.at(-1),ge=Me??(me&&Dn(me.beatId)),Be=ge!=null&&ge.context?void 0:(ge==null?void 0:ge.time)??(ge==null?void 0:ge.label),pt=W&&Zn(W.beatId,me==null?void 0:me.beatId);cn.useEffect(()=>Qn(!1),[h.runId,h.chapter[c]]),cn.useEffect(()=>{if(!Nn)return;const nn=Fn=>{var ie;Fn.target instanceof Node&&!((ie=q.current)!=null&&ie.contains(Fn.target))&&Qn(!1)};return document.addEventListener("pointerdown",nn),()=>document.removeEventListener("pointerdown",nn)},[Nn]);function xt(nn){tn>=zn?z(nn):f({type:"save-memory",channel:c,...nn})}const Te=`${tn}/${zn}`;return U.jsxs("section",{className:"pane terminal-column","data-testid":`pane-${c}`,"aria-label":G,"data-focused":m||void 0,"data-playing":s||void 0,children:[U.jsxs("header",{className:"pane-head ascii-rule",children:[U.jsx("span",{className:"pane-signal","aria-hidden":"true",children:s?">":" "}),U.jsxs("span",{className:"pane-number",children:["USER ",P," /"]}),U.jsx("span",{className:"pane-name",children:G}),U.jsxs("div",{className:"pane-head-right",children:[Be?U.jsx("span",{className:"pane-meta","data-testid":`time-${c}`,children:Be}):null,U.jsx("button",{type:"button",className:"memory-entry","data-testid":`memory-counter-${c}`,ref:q,onClick:()=>Qn(nn=>!nn),onBlur:()=>Qn(!1),"aria-expanded":Nn,"aria-label":`Memory 数量：${Te}`,children:Nn?`[Memory 数量：${Te}]`:`[MEM ${Te}]`})]})]}),U.jsxs("div",{ref:an,className:"messages",role:"log","aria-label":`${G}的对话`,children:[mn.map((nn,Fn)=>{var u;const ie=Zn(nn.beatId,(u=pn[I+Fn-1])==null?void 0:u.beatId);return U.jsxs("div",{"data-clear-row":nn.id,children:[ie?U.jsx("div",{className:"chat-date",children:ie}):null,U.jsx(i0,{from:nn.from,text:nn.text,delivery:nn.delivery,caption:nn.caption,marks:en(nn.beatId,nn.text),onSaveMark:Mn?void 0:O=>{var V;const Y=(((V=Dn(nn.beatId))==null?void 0:V.记忆候选)??[]).find(B=>B.短句===O);Y&&xt({label:Y.缩略标签,text:Y.短句,beatId:nn.beatId})}})]},nn.id)}),$&&$.delivery!=="thought"&&qn!=="idle"&&pt?U.jsx("div",{className:"chat-date",children:pt}):null,Mn&&Jn<Kr+500&&!g?U.jsxs("p",{className:"system-line","data-clear-row":"system","data-testid":`resetting-${c}`,role:"status",children:["[SYS] ",Mn.phase==="mask"?"正在清空上下文…":"已清空"]}):null,qn==="indicator"&&$&&$.delivery!=="thought"?U.jsxs("div",{className:`msg-row ${$.from==="ai"?"right":"left"} message-wait`,"data-testid":`message-wait-${c}`,children:[U.jsx("span",{className:"msg-direction",children:U.jsx(l0,{})}),U.jsx("button",{type:"button",className:`${$.from==="ai"?"msg-ai":"msg-user"} message-wait-button`,"data-testid":"skip",onClick:Se,"aria-label":"跳过当前播放",children:$.from==="ai"?"正在发送":"正在接收"})]}):null,(qn==="typing"||qn==="shown")&&$&&$.delivery!=="thought"?U.jsx(i0,{from:$.from,text:$.text,delivery:$.delivery,caption:$.caption,animate:qn==="typing",typeIntervalMs:$.timing.typeIntervalMs,onFinished:qn==="typing"?En:void 0,onProgress:()=>{const nn=an.current;nn&&(nn.scrollTop=nn.scrollHeight)},onSkip:Se},$.token):null]}),!Mn&&(Ge||Kn&&qn!=="idle"&&qn!=="pause")?U.jsxs("div",{className:"composer",children:[on||Kn?U.jsxs("div",{className:"think-block","data-testid":`think-${c}`,children:[U.jsx("span",{className:"think-block-head",children:"[THINKING]"})," ",Kn&&qn==="indicator"?U.jsxs("span",{className:"think-progress",children:[U.jsx(l0,{})," 正在思考"]}):Kn&&qn==="typing"?U.jsx(l2,{text:Kn.text,interval:Math.max(15,Math.min(31,Kn.timing.typeIntervalMs)),onFinished:En},Kn.token):(Nt=Kn??on)==null?void 0:Nt.text]}):null,U.jsx(i2,{mode:Ce,choices:Ge?(Me==null?void 0:Me.choices)??[]:[],selected:v,onMove:b,onPick:E,memoryGate:nn=>Ff(h,c,nn)})]}):null]})}function u2(a,c,h){var v,p;const f=c.pending[h];if(!f||f.kind==="choices")return null;const s=((v=a.beatById)==null?void 0:v.get(f.beatId))??a.beats.find(b=>b.id===f.beatId);if(!s)return null;if(f.kind==="lines"){const b=s.lines[f.lineIndex];return b?{token:`${c.runId}|${s.id}:line:${f.lineIndex}`,from:b.from,text:b.text,delivery:b.delivery,caption:b.caption,timing:b.timing??Aa([])}:null}const m=(p=s.choices)==null?void 0:p[f.choiceIndex];return m?{token:`${c.runId}|${s.id}:reply:${f.choiceIndex}`,from:"ai",text:m.reply,delivery:"type",timing:m.timing??Aa([])}:null}const a2=[["L1 L2 L3","他请助手推荐桌游店，想选一家适合多人聚会的店。"],["R1-shiguang R1-xindong R1-xushi","朋友约她去桌游店，她让助手查了地点。"],["R2","出门时间紧，她问要不要化妆。"],["3.1.1-A 3.1.1-C","他到了一家临时改换的桌游店，现场有不少陌生人。"],["3.1.1-B","他到了桌游店，发现除了朋友几乎都不认识。"],["3.2.1","他和一位戴耳机的人搭话，起初误以为对方不想理他。"],["3.2.2 3.3.1","桌游开始后，他留意到一位像是表妹同桌的女生。"],["3.2.2-A 3.3.1-A","他留意到刚进来的女生的眼妆和笑声，觉得她像是表妹的同桌。"],["3.2.3 3.2.4 3.3.2","他说下一局要开始了，先不聊了。"],["3.4.1","她出地铁后问了去桌游店的路。"],["3.4.2","她说没按助手的指路找到店，后来向同学问到了位置。"],["3.4.3-A 3.4.3-B 3.4.4","她问起一件衣服的牌子和价格。"],["4.1.1 4.2.1","桌游结束后，他向助手回顾了和那位女生的互动。"],["4.2.2","他想和她交换微信，又怕开口太唐突。"],["4.2.3","他打算借舍友的名义去问表妹。"],["4.2.3-direct","他当面问她能不能加微信，她请同桌帮忙推联系方式。"],["4.2.4 4.2.5","他重新想了想，决定先不问。"],["4.3.1 4.3.2 4.3.3","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。"],["4.3.4","她打算去问同桌。"],["4.3.6-direct","他当面问能不能加微信，她答应并请同桌转推。"],["4.3.5","她决定先不问。"],["5m.1.1-A 5m.1.1-B 5m.1.1-C 5m.1.1-D 5m.1.2 5m.1.3","加上微信后，他琢磨怎么开场，又问起她回消息的速度。"],["5m.1.4","他睡前收住话题，第二天早上她照常找他聊天。"],["5m.1.5","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。"],["5m.1.6 5m.2.1 5m.2.2","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。"],["5m.2.3 5m.2.5","他试着少发消息，等回复时还是觉得不踏实。"],["5m.2.4","他仍然频繁发消息，发现她回得一如既往地慢。"],["5m.3.1 5m.3.2 5m.3.3 5m.3.4","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。"],["5m.4.1 5m.4.2 5m.4.3 5m.4.4","他和助手商量表白，发出消息后收到她愿意试试的答复。"],["5f.1.1-A 5f.1.1-B 5f.1.1-C 5f.1.1-D 5f.1.2 5f.1.3","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。"],["5f.1.4","她告诉他自己累了，收到一长串关心的话。"],["5f.1.5","她发了个表情包，他回了一句让她早点休息。"],["5f.2.1","他夸她开朗，她向助手说起自己的社交生活。"],["5f.2.2","她在和闺蜜吃饭时说起他。"],["5f.2.3","她向助手谈到自己累时习惯一个人待着。"],["5f.2.4","她说他问起家里的事，自己岔开了话题。"],["5f.3.1 5f.3.2 5f.3.3 5f.3.4","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。"],["5f.4.1 5f.4.2 5f.4.3 5f.4.4","收到表白后她犹豫过，最后回复说愿意试试。"],["6m.CHOICE 6m.M2A 6m.M2B","确定关系后，他用两人的照片发了朋友圈。"],["6m.M3 6m.M4","他提议吃青提蛋糕庆祝，后来把合照原图发给她。"],["6m.M5 6m.MEMCHOICE","他问她能不能一起过满月纪念日，又来问礼物怎么准备。"],["6m.M7A","他下单洗了两张合照。"],["6m.M7B","他先记下纪念日，准备以后再想礼物。"],["6f.F1 6f.CHOICE","她看到了他发的合照，来问自己要不要也发一条。"],["6f.F3A","她发了朋友圈，同事来问照片里的人是谁。"],["6f.F3B","她把照片发给闺蜜，闺蜜打来电话。"],["6f.F4 6f.F5","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。"],["6f.F6 6f.F7 6f.F8","她答应把满月纪念日那天留给他，并记进了日历。"],["7m.MONE","她赶项目、回消息变少，他说自己还是常想找她。"],["7m.MNEWS 7m.MPROJECT 7m.MDEMAND","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。"],["7m.MWAIT 7m.MFEAR 7m.MOWN","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。"],["7m.OPENCHOICE","她约他见面，也告诉他自己前一天是故意没回。"],["7m.PLAINCHOICE","她发来见面邀请，他还在犹豫要不要问前一天的事。"],["7m.SENTBOTH 7m.SENTHER 7m.SENTHIM 7m.SENTQUIET 7m.MEMBOTH 7m.MEMHER 7m.MEMHIM 7m.MEMQUIET 7m.PLANENDBOTH 7m.PLANENDHER 7m.PLANENDHIM 7m.PLANENDQUIET","两人约好下午四点在地铁口见，他来问吃什么比较合适。"],["7m.AFTERBOTH","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。"],["7m.AFTERHER","她提到自己气上了头，他换了话题。"],["7m.AFTERHIM","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。"],["7m.AFTERQUIET","他们一起吃了饭，没有提起周五的争执。"],["7f.FDAY 7f.FDAYMORE","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。"],["7f.FANGER 7f.FDEMAND","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。"],["7f.FNOTIFICATION 7f.FPUSH 7f.FOWN","她看到了他的消息，告诉助手自己故意没有回复。"],["7f.COUSIN","她还不想和他说话，开始考虑找别人聊聊。"],["7f.COUSINSENTNO","她决定找闺蜜聊聊。"],["7f.COUSINBACKNO","闺蜜问她还想不想见他，她说想见。"],["7f.COUSINSENTYES","她打算找同桌聊，想先请同桌别替她联系男友。"],["7f.COUSINBACKYES","同桌听她说完，劝她把自己介意的事告诉男友。"],["7f.FCHOICE 7f.FSENTEASY","她想当面说，最后发出了见面邀请。"],["7f.FSENTOPEN","发出邀请时，她也写了自己是故意让他等。"],["7f.RECEIVEDBOTH 7f.RECEIVEDHER 7f.RECEIVEDHIM 7f.RECEIVEDQUIET 7f.ACKBOTH 7f.ACKHIM 7f.SETBOTH 7f.SETHER 7f.SETHIM 7f.SETQUIET","他答应见面。她和他约好下午四点在地铁口碰头。"],["7f.AFTERBOTH","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。"],["7f.AFTERHER","她说自己当时气上了头，随后两人聊了别的。"],["7f.AFTERHIM","她解释为什么当时不愿回消息，随后和他一起吃了饭。"],["7f.AFTERQUIET","他们一起吃了饭，没有再提争执。"],["7f.STATION","她向助手说起吃饭时拍糊的照片。"],["8f.F101","交往满一个月，她打算给男友带点东西，问助手买什么。"],["8f.F102A","她买了蛋糕，放在办公室冰箱里。"],["8f.F102B","她买了盒曲奇，放进包里。"],["8m.M101","交往满一个月，他想给女友带杯喝的，问助手去哪儿买。"],["8m.M102A","他决定去青杏买饮料。"],["8m.M102B","他打算出门后再挑饮品店。"],["8f.F103 8f.F104","她临时加班，跟男友商量把晚饭改到另一天。"],["8m.M103","他收到晚饭改期的消息。虽然答应了，心里还是有点失落。"],["8m.M104","他买了吃的和喝的，没等到回复就出发了。"],["8m.M105 8m.M106","他在她公司楼下碰见她和同事，当众起了争执。他介意她说自己丢人。"],["8f.F105 8f.F106","她下楼拿外卖时碰见突然到访的男友，被他当着同事的面追问。"],["8m.M107 8m.M200 8m.M201","他来复述争执，提到自己要求看私聊、让她删除同事，也问她有没有回应他的委屈。"],["8f.F107 8f.F200 8f.F201","她来复述争执，说自己拒绝交出聊天记录，也拒绝删除同事。"],["8m.M202B5 8m.M202B7 8m.M202O5 8m.M202O7 8m.M202S 8m.M203B5 8m.M203B7 8m.M203O5 8m.M203O7 8m.M203S","他和助手借过去的经历重新回顾这次争执。"],["8f.F202B5 8f.F202B7 8f.F202O5 8f.F202O7 8f.F202S 8f.F203B5 8f.F203B7 8f.F203O5 8f.F203O7 8f.F203S","她和助手借过去的经历重新回顾这次争执。"],["8m.M202E 8m.M203E","他向助手说起自己当时没有被听见的感受。"],["8f.F202E 8f.F203E","她向助手说起自己被怀疑时的感受。"],["8m.M301R","他承认索看私聊和要求删人不妥，向女友道歉。"],["8f.F301RE 8f.F302RE","她收到道歉后仍然生气，读到他第二次回应后，也想为自己说过的话道歉。"],["8m.M302RE","道歉被反问后，他承认自己刚才的指责，让她晚点再回。"],["8f.F301ER 8f.F301RR","她想起自己当众说的话，决定为此道歉。"],["8m.M301ER 8m.M302ER","他收到道歉时仍有怨气，读完她后续的回应后，也承认自己不该突然去找她并当面质问。"],["8f.F302ER 8f.F303ER","道歉被顶回来后，她说明了当时为什么急着走，随后也收到他的道歉。"],["8m.M302RR 8m.M303RE 8m.M303ER","他来问怎么约她见面，想当面说清楚。"],["8f.F304G 8m.M304G","两人约好等她忙完后在楼下见。"],["8f.F305G 8m.M305G","两人当面谈过，约好到访前先确认，需要冷静时先说一声。"],["8f.F301E 8f.F302E","她决定结束关系，发出分手消息后准备回家。"],["8m.M301E 8m.M302E 8m.M303E","他收到分手消息，一时不知道怎么回，后来放下了手机。"]],c2=a2.map(([a,c])=>({beatIds:a.split(" "),text:c}));function o2(a){const c=new Map(a.beatIds.map((m,v)=>[m,v])),h=c2.map(m=>({text:m.text,beatIds:m.beatIds.filter(v=>c.has(v))})).filter(m=>m.beatIds.length>0),f=new Set(h.flatMap(m=>m.beatIds)),s=a.beatIds.filter(m=>!f.has(m));return s.length&&h.push({text:"本次会话还有其他已处理消息。",beatIds:s}),h.sort((m,v)=>Math.min(...m.beatIds.map(p=>c.get(p)))-Math.min(...v.beatIds.map(p=>c.get(p))))}const r0=["left","right"],Gf=3400;function f2({script:a,state:c,now:h,reduced:f,replacement:s,onCancelReplacement:m,onReplace:v,onForget:p}){var Mn,Jn;const[b,E]=cn.useState({left:!0,right:!0}),[x,g]=cn.useState({});function S(I){var Dn,Bn;const mn=c.ritual[I];if(!(!mn||mn.phase==="mask"&&mn.contextTo!==void 0))return mn.contextTo===void 0?mn.from:(Bn=(Dn=c.archive)==null?void 0:Dn[I].at(-1))==null?void 0:Bn.section}const z=S("left"),G=S("right"),P=!!_a(c),W=((Mn=c.context)==null?void 0:Mn.left)??c.chapter.left,Tn=((Jn=c.context)==null?void 0:Jn.right)??c.chapter.right,pn=cn.useRef(null),on=r0.flatMap(I=>{var mn;return(((mn=c.archive)==null?void 0:mn[I])??[]).flatMap(Dn=>{var Bn,en;return Dn.section===void 0||((Bn=c.ritual[I])==null?void 0:Bn.phase)==="mask"&&Dn.section===((en=c.context)==null?void 0:en[I])?[]:[`${I}:${Dn.section}`]})}),sn=cn.useRef(new Set(on));return cn.useLayoutEffect(()=>{var Dn,Bn;const I=Array.from(((Dn=pn.current)==null?void 0:Dn.querySelectorAll("[data-archive-title]"))??[]),mn=new Set(on);sn.current=new Set([...sn.current].filter(en=>mn.has(en)));for(const en of I){const tn=en.dataset.archiveTitle;!mn.has(tn)||sn.current.has(tn)||(sn.current.add(tn),f||(Bn=en.animate)==null||Bn.call(en,[{opacity:0,transform:"translateX(-5px)"},{opacity:1,transform:"translateX(0)"}],{duration:320,easing:"ease-out"}))}}),cn.useLayoutEffect(()=>{const I=pn.current,mn=[...(I==null?void 0:I.querySelectorAll("[data-recording]"))??[]].at(-1);if(!I||!mn)return;const Dn=I.getBoundingClientRect(),Bn=mn.getBoundingClientRect();Bn.bottom>Dn.bottom?I.scrollTop+=Bn.bottom-Dn.bottom:Bn.top<Dn.top&&(I.scrollTop+=Bn.top-Dn.top)},[z,G,b,x,h]),cn.useEffect(()=>{E({left:!0,right:!0}),g({})},[c.runId]),cn.useEffect(()=>{z!==void 0&&(E(I=>({...I,left:!0})),g(I=>({...I,[`left:${z}`]:!0}))),G!==void 0&&(E(I=>({...I,right:!0})),g(I=>({...I,[`right:${G}`]:!0}))),P&&(E({left:!0,right:!0}),g(I=>({...I,[`left:${W}`]:!0,[`right:${Tn}`]:!0})))},[z,G,P,W,Tn,c.runId]),cn.useEffect(()=>{s&&E(I=>({...I,[s.channel]:!0}))},[s]),cn.useLayoutEffect(()=>{var I,mn;s&&((mn=(I=pn.current)==null?void 0:I.querySelector("[data-replacement-option]"))==null||mn.focus())},[s,b]),U.jsxs("aside",{className:"archive terminal-column","aria-label":"Context Store · Summary / Memory","data-testid":"terminal-archive",children:[U.jsxs("header",{className:"pane-head ascii-rule",children:[U.jsx("span",{className:"pane-name",children:"CONTEXT STORE"}),U.jsx("span",{className:"archive-kind",children:"SUMMARY / MEMORY"})]}),U.jsx("div",{className:"archive-scroll",ref:pn,children:r0.map(I=>{var hn,yn;const mn=((hn=c.archive)==null?void 0:hn[I])??[],Dn=c.memories[I],Bn=Dn.filter($=>!mn.some(bn=>bn.beatIds.includes($.beatId))),en=c.ritual[I],tn=(yn=c.context)==null?void 0:yn[I],zn=!P&&tn!==void 0&&!mn.some($=>$.section===tn),Nn=I==="left"?z:G,Qn=(s==null?void 0:s.channel)===I?s.entry:void 0,q=Na(c,I)===5?$=>p(I,$):void 0;return U.jsxs("div",{className:"archive-folder",children:[U.jsxs("button",{className:"tree-toggle","aria-expanded":b[I],type:"button",onClick:()=>E($=>({...$,[I]:!$[I]})),children:[U.jsx("span",{"aria-hidden":"true",children:b[I]?"[-]":"[+]"})," USER ",Ii[I].id," / ",Ii[I].name]}),b[I]?U.jsxs("div",{className:"archive-branches",children:[Qn?U.jsxs("div",{className:"archive-replacement","aria-label":"替换记忆",children:[U.jsxs("p",{children:["[MEM] 已满 · 选择一条替换为「",Qn.label,"」"]}),Dn.map($=>U.jsxs("button",{type:"button",className:"tree-toggle","data-replacement-option":!0,onClick:()=>v($.label),children:["替换「",$.label,"」"]},$.label)),U.jsx("button",{type:"button",className:"memory-entry",onClick:m,children:"[取消]"})]}):null,!mn.length&&!Bn.length&&!zn?U.jsx("div",{className:"muted",children:"└ 尚无记录"}):null,Bn.length?U.jsxs("details",{className:"archive-pending",children:[U.jsxs("summary",{children:["[MEMORY] 当前会话 · ",Bn.length]}),Bn.map($=>U.jsx(X0,{memory:$,onForget:q},$.label))]}):null,mn.map($=>{var K,un;const bn=$.section??$.chapter,qn=`${I}:${bn}`,ce=Nn===bn;if($.section===tn&&(en==null?void 0:en.contextTo)!==void 0&&en.phase==="mask")return U.jsx("div",{className:"archive-session muted",children:"└ 收录中…"},qn);const le=ce&&en&&!f?G0(en,h):Gf,M=$.section===void 0?(un=(K=a.chapters)==null?void 0:K.find(an=>an.index===$.chapter))==null?void 0:un.title:_0[$.section-1];return U.jsxs("div",{className:"archive-session","data-recording":ce||void 0,children:[U.jsxs("button",{className:"tree-toggle","aria-expanded":!!x[qn],type:"button",onClick:()=>g(an=>({...an,[qn]:!an[qn]})),children:[U.jsx("span",{"aria-hidden":"true",children:x[qn]?"[-]":"[+]"})," ",U.jsx("span",{"data-archive-title":qn,className:"archive-title",children:(M==null?void 0:M.replace(/^第[一二三四五六七八九十\d]+[幕章]\s*·\s*/,""))??"会话记录"})]}),x[qn]?U.jsx(s2,{entry:$,memories:Dn,elapsed:le,onForget:q}):null]},qn)}),zn?U.jsx("div",{className:"archive-session muted",children:"└ 收录中…"},`${I}:${tn}`):null]}):null]},I)})})]})}function s2({entry:a,memories:c,elapsed:h,onForget:f}){const s=cn.useMemo(()=>o2(a),[a]),m=cn.useMemo(()=>s.map(b=>Array.from(b.text)),[s]),v=m.reduce((b,E)=>b+E.length+3,0);let p=Math.floor(Math.max(0,Math.min(1,h/Gf))*v);return U.jsxs("div",{className:"archive-segments",children:[h<Gf?U.jsxs("p",{className:"archive-writing",children:[U.jsx("span",{"aria-hidden":"true",children:"[CTX]"})," 正在收录…"]}):null,s.map((b,E)=>{const x=m[E],g=Math.max(0,Math.min(p,x.length));return p-=x.length+3,g?U.jsxs("div",{className:"archive-segment",children:[U.jsx("span",{"aria-hidden":"true",children:E===s.length-1?"└":"├"}),U.jsxs("div",{children:[x.slice(0,g).join(""),g<x.length?U.jsx("span",{className:"caret","aria-hidden":"true"}):null,g===x.length?c.filter(S=>b.beatIds.includes(S.beatId)).map(S=>U.jsx(X0,{memory:S,onForget:f},S.label)):null]})]},b.beatIds[0]):null})]})}function X0({memory:a,onForget:c}){return U.jsxs("details",{className:"archive-memory",children:[U.jsxs("summary",{children:["[MEM] ",a.label]}),U.jsxs("p",{children:["「",a.text,"」"]}),c?U.jsx("button",{type:"button",className:"memory-entry memory-action","aria-label":`舍弃「${a.label}」`,onClick:()=>c(a.label),children:"[舍弃]"}):null]})}const V0=1440,K0=920;function u0(){const a=window.innerWidth<720?12:40;return Math.min(1,Math.max(1,window.innerWidth-a)/V0,Math.max(1,window.innerHeight-a)/K0)}function kf({children:a,intro:c}){const[h,f]=cn.useState(u0);return cn.useEffect(()=>{const s=()=>f(u0());return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),U.jsx("main",{className:"stage",children:U.jsx("div",{className:"stage-frame",style:{width:V0*h,height:K0*h},children:U.jsx("div",{className:"game-canvas","data-testid":"game-canvas","data-intro":c?!0:void 0,inert:!!c,style:{transform:`scale(${h})`,...c?Object.fromEntries(Object.entries(c).map(([s,m])=>[`--intro-${s}`,`${m}%`])):{}},children:a})})})}const Z0="shuangxian",za=`${Z0}.progress.v2`,Wf=`${Z0}.progress.v1`;let Ki=null;function h2(){const a=Ki;return Ki=null,a}function d2(a){try{localStorage.setItem(za,JSON.stringify({version:2,state:a}))}catch(c){console.error("[存档] 写入失败",c)}}function m2(){try{return!!(localStorage.getItem(za)||localStorage.getItem(Wf))}catch{return!1}}function Zi(){try{localStorage.removeItem(za),localStorage.removeItem(Wf)}catch(a){console.error("[存档] 清除失败",a)}}function y2(a){var c,h;try{const f=localStorage.getItem(za);if(!f)return localStorage.getItem(Wf)&&(Ki="剧本已更新到第五章定稿，旧进度无法继续，已从第一幕重新开始。",Zi()),null;const s=JSON.parse(f);if(!vt(s)||s.version!==2||!vt(s.state))return Ki="存档格式已升级，已从第一幕重新开始。",Zi(),null;const m=s.state;if(!p2(m,a))return Ki="剧本已更新，旧进度里的节拍已不存在，已从第一幕重新开始。",Zi(),null;const{activated:v,completed:p,superseded:b}=v2(m,a);for(const g of a)!Zf(g,a)||p.includes(g.id)||v.includes(g.id)||b.has(g.id)||v.push(g.id);const E={...m,flags:g2(m,p),activated:v,completed:p,pending:{left:m.pending.left??null,right:m.pending.right??null},memories:T2(m.memories,a),chapter:x2(m.chapter,a),ritual:S2(m.ritual),archive:Yp(m.archive,a),context:E2(m.context),endings:Array.isArray(m.endings)?m.endings.filter(g=>typeof g=="string"):[],error:typeof m.error=="string"?m.error:null,runId:typeof m.runId=="number"?m.runId:0};let x=Bp(E,a,g=>Fi(E,g,a));for(const g of["left","right"]){if(x.ritual[g])continue;const S=((c=x.pending[g])==null?void 0:c.beatId)??((h=x.messages.filter(G=>G.channel===g).at(-1))==null?void 0:h.beatId),z=a.find(G=>G.id===S);z&&(x=R0(x,z,a))}return x}catch(f){return console.error("[存档] 读取失败",f),Ki="存档读取失败，已从第一幕重新开始。",Zi(),null}}function g2(a,c){return"当面问微信"in a.flags?a.flags:c.some(f=>/^5[fm]\./.test(f))||Object.values(a.pending).some(f=>f&&/^5[fm]\./.test(f.beatId))?{...a.flags,当面问微信:!1}:c.includes("4.2.3-direct")?{...a.flags,当面问微信:!0}:a.flags.男生意向!==void 0?{...a.flags,当面问微信:!1}:a.flags}function v2(a,c){var v,p;const h=[...a.activated],f=[...a.completed],s=new Set,m="3.4.arrived";if(!c.some(b=>b.id===m))return{activated:h,completed:f,superseded:s};f.includes("3.4.1")&&!f.includes(m)&&!h.includes(m)&&(((v=a.chapter)==null?void 0:v.right)>=4||f.includes("3.4.2")||!h.includes("3.4.2"))&&f.push(m);for(const b of["3.2.2","3.3.1"]){const E=b+"-A";(f.includes(b)||((p=a.pending.left)==null?void 0:p.beatId)===b)&&s.add(E)}return{activated:h.filter(b=>!s.has(b)),completed:f,superseded:s}}function p2(a,c){const h=new Set(c.map(f=>f.id));if(!Array.isArray(a.completed)||!a.completed.every(f=>h.has(f))||!Array.isArray(a.activated)||!a.activated.every(f=>h.has(f))||!Array.isArray(a.messages)||!vt(a.flags)||!vt(a.pending))return!1;for(const f of a.messages)if(!vt(f)||f.channel!=="left"&&f.channel!=="right"||typeof f.text!="string"||typeof f.id!="string"||f.delivery!=="type"&&f.delivery!=="pop"&&f.delivery!=="image"&&f.delivery!=="thought")return!1;for(const f of["left","right"]){const s=a.pending[f];if(s!=null&&(!vt(s)||s.kind!=="lines"&&s.kind!=="choices"&&s.kind!=="reply"||typeof s.beatId!="string"||!h.has(s.beatId)))return!1}return!0}function x2(a,c){const h=m=>{const v=c.filter(p=>p.channel===m).map(p=>p.chapter??1);return v.length>0?Math.min(...v):1};if(!vt(a))return{left:h("left"),right:h("right")};const f=typeof a.left=="number"?a.left:h("left"),s=typeof a.right=="number"?a.right:h("right");return{left:f,right:s}}function E2(a){if(!vt(a))return;const c={};return Ma(a.left)&&(c.left=a.left),Ma(a.right)&&(c.right=a.right),c}function S2(a){const c={left:null,right:null};if(!vt(a))return c;for(const h of["left","right"]){const f=a[h];vt(f)&&(f.phase!=="mask"&&f.phase!=="pause"||typeof f.until!="number"||typeof f.from!="number"||typeof f.to!="number"||(c[h]={from:f.from,to:f.to,...Ma(f.contextTo)?{contextTo:f.contextTo}:{},phase:f.phase,until:f.until,...typeof f.startedAt=="number"?{startedAt:f.startedAt}:{}}))}return c}function vt(a){return typeof a=="object"&&a!==null}function T2(a,c){const h={left:[],right:[]};if(!vt(a))return h;const f=m=>Array.isArray(m)&&m.every(v=>vt(v)&&typeof v.label=="string")?m.map(v=>v):[],s=(m,v)=>f(m).filter(p=>{var E,x;const b=c.find(g=>g.id===p.beatId&&g.channel===v);return(b==null?void 0:b.chapter)===1&&b.记忆候选&&p.label==="店的位置"?(E=b.记忆候选)==null?void 0:E.some(g=>g.缩略标签===p.label&&g.短句===p.text):(b==null?void 0:b.chapter)!==5?!0:(x=b.记忆候选)==null?void 0:x.some(g=>g.缩略标签===p.label)});return{left:s(a.left,"left"),right:s(a.right,"right")}}function b2(a){const c=h=>{const f=Kp(h,a);return f===h.error?h:{...h,error:f}};return(h,f)=>{var s;try{switch(f.type){case"reset":return{...U0(a),runId:h.runId+1};case"sync-roots":return c(Zp(h,a));case"arm":return c(kp(h,f.channel,a,f.now??Date.now()));case"commit-line":return c(Wp(h,f.channel,a));case"choose":return c(Pp(h,f.channel,f.index,a));case"commit-reply":return c(n2(h,f.channel,a));case"save-memory":{const m=a.find(p=>p.id===f.beatId&&p.channel===f.channel);return!((s=m==null?void 0:m.记忆候选)==null?void 0:s.find(p=>p.缩略标签===f.label&&p.短句===f.text))||!h.messages.some(p=>p.channel===f.channel&&p.beatId===f.beatId&&p.text.includes(f.text))?h:c(Gp(h,f.channel,{label:f.label,text:f.text,beatId:f.beatId},f.replaceLabel))}case"forget-memory":return c(Qp(h,f.channel,f.label));case"clear-messages":return c(Y0(h,f.channel));case"ritual-tick":return c(Vp(h,f.channel,f.now));case"clear-error":return{...h,error:null};default:return h}}catch(m){const v=m instanceof Error?m.message:"引擎状态更新失败";return console.error("[引擎]",v),{...h,error:v}}}}function A2(a,c=!1,h=!0){const f=a.beats,s=cn.useMemo(()=>b2(f),[f]),[m,v]=cn.useReducer(s,f,b=>y2(b)??U0(b)),[p]=cn.useState(()=>h2());return cn.useEffect(()=>{h&&d2(m)},[m,h]),cn.useEffect(()=>{m.error&&console.error(m.error)},[m.error]),cn.useEffect(()=>{if(!h)return;const b=Date.now(),E=["left","right"].filter(z=>{const G=m.ritual[z];return G!==null&&(c||G.until<=b)});if(E.length>0){for(const z of E)v({type:"ritual-tick",channel:z,now:Math.max(b,m.ritual[z].until)});return}const x=["left","right"].map(z=>{var G;return(G=m.ritual[z])==null?void 0:G.until}).filter(z=>z!==void 0);if(x.length===0)return;const g=Math.min(...x),S=window.setTimeout(()=>{const z=Date.now();for(const G of["left","right"])m.ritual[G]&&m.ritual[G].until<=z&&v({type:"ritual-tick",channel:G,now:z})},Math.max(0,g-b));return()=>window.clearTimeout(S)},[m.ritual,c,h]),cn.useEffect(()=>{if(!h)return;const b=Xp(m,f);b&&v({type:"arm",channel:b.channel})},[m,f,h]),{state:m,dispatch:v,notice:p}}const Ta=["left","right"];function M2({script:a,onTitle:c,intro:h}){const f=!h,s=$f(),{state:m,dispatch:v,notice:p}=A2(a,s,f),b=_a(m),[E,x]=cn.useState(!1),[g,S]=cn.useState(),z=g&&!m.ritual[g.channel]&&m.messages.some(en=>en.channel===g.channel&&en.beatId===g.entry.beatId)?g:void 0,[G,P]=cn.useState(),W=cn.useRef({}),Tn=cn.useRef({}),pn=t2(!s&&!!(m.ritual.left||m.ritual.right)),on=Ta.find(en=>{var tn;return m.pending[en]&&((tn=m.pending[en])==null?void 0:tn.kind)!=="choices"})??Ta.find(en=>{var tn;return((tn=m.pending[en])==null?void 0:tn.kind)==="choices"}),sn=(G==null?void 0:G.channel)??on??"left";function Mn(en){var zn;const tn=m.pending[en];if(!(!tn||tn.kind!=="choices"))return((zn=a.beatById)==null?void 0:zn.get(tn.beatId))??a.beats.find(Nn=>Nn.id===tn.beatId)}function Jn(en){var tn,zn;return((zn=(tn=Mn(en))==null?void 0:tn.choices)==null?void 0:zn.flatMap((Nn,Qn)=>Ff(m,en,Nn)?[]:[Qn]))??[]}function I(en){var zn;if(sn!==en)return-1;const tn=Jn(en);return(G==null?void 0:G.beatId)===((zn=Mn(en))==null?void 0:zn.id)&&tn.includes((G==null?void 0:G.index)??-1)?G.index:tn[0]??-1}function mn(en,tn){var zn;tn>=0&&!Jn(en).includes(tn)||P({channel:en,index:tn,beatId:(zn=Mn(en))==null?void 0:zn.id})}function Dn(en,tn){const zn=Mn(en);if(!zn||!Jn(en).includes(tn)||E)return;const Nn=`${m.runId}:${en}:${zn.id}`;W.current[en]!==Nn&&(W.current[en]=Nn,P(void 0),v({type:"choose",channel:en,index:tn}))}cn.useEffect(()=>{function en(tn){var Qn,q,hn,yn;if(!f||E||tn.altKey||tn.ctrlKey||tn.metaKey||tn.shiftKey||tn.defaultPrevented||document.querySelector('[role="dialog"]'))return;const zn=tn.target instanceof HTMLElement?tn.target:null;if(zn!=null&&zn.closest("input,textarea,select,[contenteditable],.archive"))return;const Nn=zn==null?void 0:zn.closest(".choice-line");if(!(zn!=null&&zn.closest("button,a,summary")&&!Nn)){if(tn.key==="ArrowLeft"||tn.key==="ArrowRight")tn.preventDefault(),mn(tn.key==="ArrowLeft"?"left":"right",-1),Nn==null||Nn.blur();else if(tn.key==="ArrowUp"||tn.key==="ArrowDown"){tn.preventDefault();const $=Jn(sn);if(!$.length)return;const bn=$.indexOf(I(sn)),qn=tn.key==="ArrowDown"?1:-1;mn(sn,$[(bn+qn+$.length)%$.length]),Nn==null||Nn.blur()}else if(tn.key==="Enter"){if(tn.preventDefault(),tn.repeat)return;const $=m.pending[sn];if(($==null?void 0:$.kind)==="lines"||($==null?void 0:$.kind)==="reply"){(q=(Qn=Tn.current)[sn])==null||q.call(Qn);return}const bn=I(sn);if(bn>=0)Dn(sn,bn);else if(!$){const qn=Ta.filter(ce=>{const le=m.pending[ce];return(le==null?void 0:le.kind)==="lines"||(le==null?void 0:le.kind)==="reply"});qn.length===1&&((yn=(hn=Tn.current)[qn[0]])==null||yn.call(hn))}}}}return window.addEventListener("keydown",en),()=>window.removeEventListener("keydown",en)});function Bn(){Zi(),v({type:"reset"}),P(void 0),S(void 0),x(!1)}return U.jsxs(kf,{intro:h,children:[U.jsxs("header",{className:"topbar ascii-rule",children:[U.jsx("span",{className:"topbar-title","data-testid":"game-title",children:"He said, she said"}),U.jsx("span",{className:"topbar-tag",children:"助手 · 双会话"}),U.jsxs("div",{className:"topbar-actions",children:[U.jsx("button",{type:"button","data-testid":"restart",onClick:()=>x(!0),children:"[重新开始]"}),c?U.jsx("button",{type:"button",onClick:c,children:"[返回标题]"}):null]})]}),p?U.jsx("div",{className:"notice",role:"status",children:p}):null,b?U.jsx("div",{className:"notice",role:"status",children:b==="未交换微信"?"桌游局结束后，两人没有交换微信。":`结局 · ${b}`}):null,U.jsxs("div",{className:"duo",children:[Ta.map(en=>U.jsx(r2,{script:a,channel:en,state:m,dispatch:v,active:!!m.pending[en],focused:sn===en,selected:I(en),skipRefs:Tn,running:f,onMemoryFull:tn=>S({channel:en,entry:tn}),onMove:tn=>mn(en,tn),onPick:tn=>Dn(en,tn),now:pn,reduced:s},en)),U.jsx(f2,{script:a,state:m,now:pn,reduced:s,replacement:z,onCancelReplacement:()=>S(void 0),onReplace:en=>{z&&(v({type:"save-memory",channel:z.channel,...z.entry,replaceLabel:en}),S(void 0))},onForget:(en,tn)=>v({type:"forget-memory",channel:en,label:tn})})]}),E?U.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":"确定重来",children:U.jsxs("div",{className:"dialog",children:[U.jsx("h2",{children:"确定重来？"}),U.jsx("p",{children:"当前两条线的进度都会清空，回到第一幕开头。"}),U.jsxs("div",{className:"dialog-actions",children:[U.jsx("button",{type:"button",autoFocus:!0,onClick:()=>x(!1),children:"[取消]"}),U.jsx("button",{type:"button","data-testid":"restart-confirm",onClick:Bn,children:"[确定重来]"})]})]})}):null]})}const O2=1500,Yf=240,a0=900,Xi=420,N2=1500;function _2(a){const c=Ii.left,h=Ii.right,f=v=>`      性别 ${v.gender} / ${v.age} 岁 / ${v.work} / ${v.city}`,s=[["[BOOT] 校验会话模块 … OK",24,110],["[SYS] 导入助手系统提示词 … OK",25,130],[`[USER ${c.id}] 载入用户信息 · ${c.name}`,40,150],[f(c),38,300],[`[USER ${h.id}] 载入用户信息 · ${h.name}`,40,150],[f(h),38,300],[a==="new"?"[MEM] 初始化两路独立记忆区 … OK":"[MEM] 恢复两路上下文与记忆 … OK",25,135],["[CTX] 建立会话与摘要目录",26,0]];let m=90;return s.map(([v,p,b])=>{const E=v.length*p,x={text:v,start:m,duration:E};return m+=E+b,x})}function Vr(a,c,h){const f=Math.max(0,Math.min(1,a/c));return Math.floor(f*h)/h*100}function R2({entry:a,script:c,onTitle:h}){const f=$f(),[s,m]=cn.useState(0),v=_2(a),p=v.at(-1),b=p.start+p.duration,E=b+O2,x=E+Yf+a0,g=x+3*Xi,S=g+N2;return cn.useEffect(()=>{if(f){m(S);return}const z=Date.now(),G=window.setInterval(()=>m(Math.min(S,Date.now()-z)),20),P=[b,E,g,S].map(W=>window.setTimeout(()=>{m(Math.min(S,Date.now()-z)),W===S&&window.clearInterval(G)},W));return()=>{window.clearInterval(G),P.forEach(W=>window.clearTimeout(W))}},[f,b,E,g,S]),f||s>=E?U.jsx(M2,{script:c,onTitle:h,intro:f||s>=S?void 0:{header:Vr(s-E,Yf,16),dividers:Vr(s-E-Yf,a0,42),left:Vr(s-x,Xi,24),right:Vr(s-x-Xi,Xi,24),archive:Vr(s-x-2*Xi,Xi,24)}}):U.jsx(kf,{children:U.jsx("div",{className:"boot-console","data-testid":"boot-console","data-hold":s>=b||void 0,"aria-label":"正在启动",children:v.filter(z=>s>=z.start).map(z=>{const G=Math.min(z.text.length,Math.floor((s-z.start)*z.text.length/z.duration));return U.jsxs("div",{className:z.text.startsWith("[USER")?"boot-user":void 0,children:[z.text.slice(0,G),G<z.text.length?U.jsx("span",{className:"caret","aria-hidden":"true"}):null]},z.text)})})})}function C2({hasSave:a,onBegin:c}){const[h,f]=cn.useState(0),[s,m]=cn.useState(!1),v=[{label:"开始游戏",action:()=>a?m(!0):c("new")},...a?[{label:"继续游戏",action:()=>c("resume")}]:[]];return cn.useEffect(()=>{const p=b=>{var g;if(s||b.altKey||b.ctrlKey||b.metaKey||b.defaultPrevented)return;const E=a?2:1,x=b.target instanceof HTMLElement?b.target:null;b.key==="ArrowUp"||b.key==="ArrowDown"?(b.preventDefault(),(g=x==null?void 0:x.closest(".menu-choice"))==null||g.blur(),f(S=>(S+(b.key==="ArrowDown"?1:-1)+E)%E)):b.key==="Enter"&&!b.repeat&&!(x!=null&&x.closest("button"))&&(b.preventDefault(),a&&h===1?c("resume"):a?m(!0):c("new"))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[h,s,a,c]),U.jsxs(kf,{children:[U.jsxs("header",{className:"topbar ascii-rule title-bar",children:[U.jsx("span",{children:"[SYS] 双会话助手"}),U.jsx("span",{children:a?"[CTX] 已有存档":"[LINK] 等待接入"})]}),U.jsxs("div",{className:"title-grid",children:[U.jsxs("div",{className:"terminal-menu",children:[U.jsx("div",{className:"menu-system",children:"/ 会话入口"}),U.jsxs("h1",{children:["He said,",U.jsx("br",{}),"she said",U.jsx("span",{"aria-hidden":"true",children:"_"})]}),U.jsx("div",{className:"menu-commands","aria-label":"主菜单",children:v.map((p,b)=>U.jsxs("button",{type:"button",className:"menu-choice choice-line","data-current":h===b||void 0,onMouseEnter:()=>f(b),onFocus:()=>f(b),onClick:p.action,children:[U.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:h===b?">":""}),p.label]},p.label))})]}),U.jsxs("aside",{className:"title-sessions","aria-label":"会话入口信息",children:[U.jsx("div",{className:"ascii-rule title-session-head",children:"[LINK] 用户通道"}),Object.values(Ii).map(p=>U.jsxs("div",{className:"title-user",children:[U.jsxs("span",{className:"title-id",children:["[USER ",p.id,"]"]}),U.jsx("b",{children:p.name}),U.jsx("span",{children:"待接入"})]},p.id)),U.jsxs("div",{className:"title-memory ascii-rule",children:[U.jsx("div",{children:"[MEM] 分窗记忆"}),U.jsx("p",{children:"上下文独立 · 摘要按窗收录"})]})]})]}),U.jsxs("footer",{className:"title-keys ascii-rule",children:[U.jsx("span",{children:"↑ ↓ 选择"}),U.jsx("span",{children:"Enter 确认"})]}),s?U.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":"开始新游戏",children:U.jsxs("div",{className:"dialog",children:[U.jsx("h2",{children:"开始新游戏？"}),U.jsx("p",{children:"当前两条线的进度都会清空。"}),U.jsxs("div",{className:"dialog-actions",children:[U.jsx("button",{type:"button",autoFocus:!0,onClick:()=>m(!1),children:"[取消]"}),U.jsx("button",{type:"button",onClick:()=>c("new"),children:"[开始新游戏]"})]})]})}):null]})}function D2(){const a=cn.useMemo(()=>Mp(),[]),[c,h]=cn.useState("title"),[f,s]=cn.useState("new"),m=cn.useCallback(()=>h("title"),[]),v=cn.useCallback(p=>{p==="new"&&Zi(),s(p),h("boot")},[]);return cn.useEffect(()=>{a.error&&console.error(a.error)},[a]),a.script?c==="title"?U.jsx(C2,{hasSave:m2(),onBegin:v}):U.jsx(R2,{entry:f,script:a.script,onTitle:m}):U.jsx("main",{className:"stage",children:U.jsxs("div",{className:"dialog",style:{width:560},children:[U.jsx("h2",{children:"这份剧本还过不了检查"}),U.jsx("p",{children:"引擎按字段契约逐项校验，下面是要修的地方："}),U.jsx("pre",{className:"script-error",style:{maxHeight:420,whiteSpace:"pre-wrap",borderRadius:12},"data-testid":"script-error",children:a.error})]})})}Kv.createRoot(document.getElementById("root")).render(U.jsx(cn.StrictMode,{children:U.jsx(D2,{})}));
