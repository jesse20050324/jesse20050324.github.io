(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const y of s)if(y.type==="childList")for(const p of y.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function h(s){const y={};return s.integrity&&(y.integrity=s.integrity),s.referrerPolicy&&(y.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?y.credentials="include":s.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function o(s){if(s.ep)return;s.ep=!0;const y=h(s);fetch(s.href,y)}})();var cf={exports:{}},Qi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function Hv(){if(py)return Qi;py=1;var a=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function h(o,s,y){var p=null;if(y!==void 0&&(p=""+y),s.key!==void 0&&(p=""+s.key),"key"in s){y={};for(var v in s)v!=="key"&&(y[v]=s[v])}else y=s;return s=y.ref,{$$typeof:a,type:o,key:p,ref:s!==void 0?s:null,props:y}}return Qi.Fragment=f,Qi.jsx=h,Qi.jsxs=h,Qi}var xy;function Uv(){return xy||(xy=1,cf.exports=Hv()),cf.exports}var U=Uv(),of={exports:{}},Dn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function qv(){if(Ey)return Dn;Ey=1;var a=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),w=Symbol.iterator;function F(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var tn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,Tn={};function pn(M,V,un){this.props=M,this.context=V,this.refs=Tn,this.updater=un||tn}pn.prototype.isReactComponent={},pn.prototype.setState=function(M,V){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,V,"setState")},pn.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function cn(){}cn.prototype=pn.prototype;function fn(M,V,un){this.props=M,this.context=V,this.refs=Tn,this.updater=un||tn}var An=fn.prototype=new cn;An.constructor=fn,k(An,pn.prototype),An.isPureReactComponent=!0;var Zn=Array.isArray;function I(){}var mn={H:null,A:null,T:null,S:null},Cn=Object.prototype.hasOwnProperty;function jn(M,V,un){var an=un.ref;return{$$typeof:a,type:M,key:V,ref:an!==void 0?an:null,props:un}}function W(M,V){return jn(M.type,V,M.props)}function P(M){return typeof M=="object"&&M!==null&&M.$$typeof===a}function zn(M){var V={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(un){return V[un]})}var Nn=/\/+/g;function Vn(M,V){return typeof M=="object"&&M!==null&&M.key!=null?zn(""+M.key):V.toString(36)}function q(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(I,I):(M.status="pending",M.then(function(V){M.status==="pending"&&(M.status="fulfilled",M.value=V)},function(V){M.status==="pending"&&(M.status="rejected",M.reason=V)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function sn(M,V,un,an,_n){var wn=typeof M;(wn==="undefined"||wn==="boolean")&&(M=null);var xn=!1;if(M===null)xn=!0;else switch(wn){case"bigint":case"string":case"number":xn=!0;break;case"object":switch(M.$$typeof){case a:case f:xn=!0;break;case x:return xn=M._init,sn(xn(M._payload),V,un,an,_n)}}if(xn)return _n=_n(M),xn=an===""?"."+Vn(M,0):an,Zn(_n)?(un="",xn!=null&&(un=xn.replace(Nn,"$&/")+"/"),sn(_n,V,un,"",function(He){return He})):_n!=null&&(P(_n)&&(_n=W(_n,un+(_n.key==null||M&&M.key===_n.key?"":(""+_n.key).replace(Nn,"$&/")+"/")+xn)),V.push(_n)),1;xn=0;var en=an===""?".":an+":";if(Zn(M))for(var vn=0;vn<M.length;vn++)an=M[vn],wn=en+Vn(an,vn),xn+=sn(an,V,un,wn,_n);else if(vn=F(M),typeof vn=="function")for(M=vn.call(M),vn=0;!(an=M.next()).done;)an=an.value,wn=en+Vn(an,vn++),xn+=sn(an,V,un,wn,_n);else if(wn==="object"){if(typeof M.then=="function")return sn(q(M),V,un,an,_n);throw V=String(M),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return xn}function hn(M,V,un){if(M==null)return M;var an=[],_n=0;return sn(M,an,"","",function(wn){return V.call(un,wn,_n++)}),an}function rn(M){if(M._status===-1){var V=M._result,un=V();un.then(function(an){(M._status===0||M._status===-1)&&(M._status=1,M._result=an,un.status===void 0&&(un.status="fulfilled",un.value=an))},function(an){(M._status===0||M._status===-1)&&(M._status=2,M._result=an,un.status===void 0&&(un.status="rejected",un.reason=an))}),M._status===-1&&(M._status=0,M._result=un)}if(M._status===1)return M._result.default;throw M._result}var Mn=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function gn(M){var V=mn.T,un={};un.types=V!==null?V.types:null,mn.T=un;try{var an=M(),_n=mn.S;_n!==null&&_n(un,an),typeof an=="object"&&an!==null&&typeof an.then=="function"&&an.then(I,Mn)}catch(wn){Mn(wn)}finally{V!==null&&un.types!==null&&(V.types=un.types),mn.T=V}}function ie(M){var V=mn.T;if(V!==null){var un=V.types;un===null?V.types=[M]:un.indexOf(M)===-1&&un.push(M)}else gn(ie.bind(null,M))}var Xn={map:hn,forEach:function(M,V,un){hn(M,function(){V.apply(this,arguments)},un)},count:function(M){var V=0;return hn(M,function(){V++}),V},toArray:function(M){return hn(M,function(V){return V})||[]},only:function(M){if(!P(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Dn.Activity=g,Dn.Children=Xn,Dn.Component=pn,Dn.Fragment=h,Dn.Profiler=s,Dn.PureComponent=fn,Dn.StrictMode=o,Dn.Suspense=T,Dn.ViewTransition=S,Dn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn,Dn.__COMPILER_RUNTIME={__proto__:null,c:function(M){return mn.H.useMemoCache(M)}},Dn.addTransitionType=ie,Dn.cache=function(M){return function(){return M.apply(null,arguments)}},Dn.cacheSignal=function(){return null},Dn.cloneElement=function(M,V,un){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var an=k({},M.props),_n=M.key;if(V!=null)for(wn in V.key!==void 0&&(_n=""+V.key),V)!Cn.call(V,wn)||wn==="key"||wn==="__self"||wn==="__source"||wn==="ref"&&V.ref===void 0||(an[wn]=V[wn]);var wn=arguments.length-2;if(wn===1)an.children=un;else if(1<wn){for(var xn=Array(wn),en=0;en<wn;en++)xn[en]=arguments[en+2];an.children=xn}return jn(M.type,_n,an)},Dn.createContext=function(M){return M={$$typeof:p,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:y,_context:M},M},Dn.createElement=function(M,V,un){var an,_n={},wn=null;if(V!=null)for(an in V.key!==void 0&&(wn=""+V.key),V)Cn.call(V,an)&&an!=="key"&&an!=="__self"&&an!=="__source"&&(_n[an]=V[an]);var xn=arguments.length-2;if(xn===1)_n.children=un;else if(1<xn){for(var en=Array(xn),vn=0;vn<xn;vn++)en[vn]=arguments[vn+2];_n.children=en}if(M&&M.defaultProps)for(an in xn=M.defaultProps,xn)_n[an]===void 0&&(_n[an]=xn[an]);return jn(M,wn,_n)},Dn.createRef=function(){return{current:null}},Dn.forwardRef=function(M){return{$$typeof:v,render:M}},Dn.isValidElement=P,Dn.lazy=function(M){return{$$typeof:x,_payload:{_status:-1,_result:M},_init:rn}},Dn.memo=function(M,V){return{$$typeof:E,type:M,compare:V===void 0?null:V}},Dn.startTransition=gn,Dn.unstable_useCacheRefresh=function(){return mn.H.useCacheRefresh()},Dn.use=function(M){return mn.H.use(M)},Dn.useActionState=function(M,V,un){return mn.H.useActionState(M,V,un)},Dn.useCallback=function(M,V){return mn.H.useCallback(M,V)},Dn.useContext=function(M){return mn.H.useContext(M)},Dn.useDebugValue=function(){},Dn.useDeferredValue=function(M,V){return mn.H.useDeferredValue(M,V)},Dn.useEffect=function(M,V){return mn.H.useEffect(M,V)},Dn.useEffectEvent=function(M){return mn.H.useEffectEvent(M)},Dn.useId=function(){return mn.H.useId()},Dn.useImperativeHandle=function(M,V,un){return mn.H.useImperativeHandle(M,V,un)},Dn.useInsertionEffect=function(M,V){return mn.H.useInsertionEffect(M,V)},Dn.useLayoutEffect=function(M,V){return mn.H.useLayoutEffect(M,V)},Dn.useMemo=function(M,V){return mn.H.useMemo(M,V)},Dn.useOptimistic=function(M,V){return mn.H.useOptimistic(M,V)},Dn.useReducer=function(M,V,un){return mn.H.useReducer(M,V,un)},Dn.useRef=function(M){return mn.H.useRef(M)},Dn.useState=function(M){return mn.H.useState(M)},Dn.useSyncExternalStore=function(M,V,un){return mn.H.useSyncExternalStore(M,V,un)},Dn.useTransition=function(){return mn.H.useTransition()},Dn.version="19.3.0",Dn}var Sy;function Qf(){return Sy||(Sy=1,of.exports=qv()),of.exports}var ln=Qf(),ff={exports:{}},Xi={},sf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function jv(){return Ty||(Ty=1,(function(a){function f(q,sn){var hn=q.length;q.push(sn);n:for(;0<hn;){var rn=hn-1>>>1,Mn=q[rn];if(0<s(Mn,sn))q[rn]=sn,q[hn]=Mn,hn=rn;else break n}}function h(q){return q.length===0?null:q[0]}function o(q){if(q.length===0)return null;var sn=q[0],hn=q.pop();if(hn!==sn){q[0]=hn;n:for(var rn=0,Mn=q.length,gn=Mn>>>1;rn<gn;){var ie=2*(rn+1)-1,Xn=q[ie],M=ie+1,V=q[M];if(0>s(Xn,hn))M<Mn&&0>s(V,Xn)?(q[rn]=V,q[M]=hn,rn=M):(q[rn]=Xn,q[ie]=hn,rn=ie);else if(M<Mn&&0>s(V,hn))q[rn]=V,q[M]=hn,rn=M;else break n}}return sn}function s(q,sn){var hn=q.sortIndex-sn.sortIndex;return hn!==0?hn:q.id-sn.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;a.unstable_now=function(){return y.now()}}else{var p=Date,v=p.now();a.unstable_now=function(){return p.now()-v}}var T=[],E=[],x=1,g=null,S=3,w=!1,F=!1,tn=!1,k=!1,Tn=typeof setTimeout=="function"?setTimeout:null,pn=typeof clearTimeout=="function"?clearTimeout:null,cn=typeof setImmediate<"u"?setImmediate:null;function fn(q){for(var sn=h(E);sn!==null;){if(sn.callback===null)o(E);else if(sn.startTime<=q)o(E),sn.sortIndex=sn.expirationTime,f(T,sn);else break;sn=h(E)}}function An(q){if(tn=!1,fn(q),!F)if(h(T)!==null)F=!0,Zn||(Zn=!0,P());else{var sn=h(E);sn!==null&&Vn(An,sn.startTime-q)}}var Zn=!1,I=-1,mn=5,Cn=-1;function jn(){return k?!0:!(a.unstable_now()-Cn<mn)}function W(){if(k=!1,Zn){var q=a.unstable_now();Cn=q;var sn=!0;try{n:{F=!1,tn&&(tn=!1,pn(I),I=-1),w=!0;var hn=S;try{e:{for(fn(q),g=h(T);g!==null&&!(g.expirationTime>q&&jn());){var rn=g.callback;if(typeof rn=="function"){g.callback=null,S=g.priorityLevel;var Mn=rn(g.expirationTime<=q);if(q=a.unstable_now(),typeof Mn=="function"){g.callback=Mn,fn(q),sn=!0;break e}g===h(T)&&o(T),fn(q)}else o(T);g=h(T)}if(g!==null)sn=!0;else{var gn=h(E);gn!==null&&Vn(An,gn.startTime-q),sn=!1}}break n}finally{g=null,S=hn,w=!1}sn=void 0}}finally{sn?P():Zn=!1}}}var P;if(typeof cn=="function")P=function(){cn(W)};else if(typeof MessageChannel<"u"){var zn=new MessageChannel,Nn=zn.port2;zn.port1.onmessage=W,P=function(){Nn.postMessage(null)}}else P=function(){Tn(W,0)};function Vn(q,sn){I=Tn(function(){q(a.unstable_now())},sn)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(q){q.callback=null},a.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):mn=0<q?Math.floor(1e3/q):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(q){switch(S){case 1:case 2:case 3:var sn=3;break;default:sn=S}var hn=S;S=sn;try{return q()}finally{S=hn}},a.unstable_requestPaint=function(){k=!0},a.unstable_runWithPriority=function(q,sn){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var hn=S;S=q;try{return sn()}finally{S=hn}},a.unstable_scheduleCallback=function(q,sn,hn){var rn=a.unstable_now();switch(typeof hn=="object"&&hn!==null?(hn=hn.delay,hn=typeof hn=="number"&&0<hn?rn+hn:rn):hn=rn,q){case 1:var Mn=-1;break;case 2:Mn=250;break;case 5:Mn=1073741823;break;case 4:Mn=1e4;break;default:Mn=5e3}return Mn=hn+Mn,q={id:x++,callback:sn,priorityLevel:q,startTime:hn,expirationTime:Mn,sortIndex:-1},hn>rn?(q.sortIndex=hn,f(E,q),h(T)===null&&q===h(E)&&(tn?(pn(I),I=-1):tn=!0,Vn(An,hn-rn))):(q.sortIndex=Mn,f(T,q),F||w||(F=!0,Zn||(Zn=!0,P()))),q},a.unstable_shouldYield=jn,a.unstable_wrapCallback=function(q){var sn=S;return function(){var hn=S;S=sn;try{return q.apply(this,arguments)}finally{S=hn}}}})(hf)),hf}var by;function Bv(){return by||(by=1,sf.exports=jv()),sf.exports}var df={exports:{}},we={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function Yv(){if(Ay)return we;Ay=1;var a=Qf();function f(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var o={d:{f:h,r:function(){throw Error(f(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},s=Symbol.for("react.portal"),y=Symbol.for("react.recoverable"),p=Symbol.for("react.optimistic_key");function v(x,g,S){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:w==null?null:w===p?p:""+w,children:x,containerInfo:g,implementation:S}}var T=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,we.browser=function(x){return{$$typeof:y,_reason:x}},we.createPortal=function(x,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(f(299));return v(x,g,null,S)},we.flushSync=function(x){var g=T.T,S=o.p;try{if(T.T=null,o.p=2,x)return x()}finally{T.T=g,o.p=S,o.d.f()}},we.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(x,g))},we.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},we.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var S=g.as,w=E(S,g.crossOrigin),F=typeof g.integrity=="string"?g.integrity:void 0,tn=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?o.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:F,fetchPriority:tn}):S==="script"&&o.d.X(x,{crossOrigin:w,integrity:F,fetchPriority:tn,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},we.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=E(g.as,g.crossOrigin);o.d.M(x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&o.d.M(x)},we.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,w=E(S,g.crossOrigin);o.d.L(x,S,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},we.preloadModule=function(x,g){if(typeof x=="string")if(g){var S=E(g.as,g.crossOrigin);o.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else o.d.m(x)},we.requestFormReset=function(x){o.d.r(x)},we.unstable_batchedUpdates=function(x,g){return x(g)},we.useFormState=function(x,g,S){return T.H.useFormState(x,g,S)},we.useFormStatus=function(){return T.H.useHostTransitionStatus()},we.version="19.3.0",we}var My;function Lv(){if(My)return df.exports;My=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(f){console.error(f)}}return a(),df.exports=Yv(),df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy;function Gv(){if(Oy)return Xi;Oy=1;var a=Bv(),f=Qf(),h=Lv();function o(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function y(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function p(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function v(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function T(n){if(y(n)!==n)throw Error(o(188))}function E(n){var e=n.alternate;if(!e){if(e=y(n),e===null)throw Error(o(188));return e!==n?null:n}for(var t=n,r=e;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return T(l),n;if(i===r)return T(l),e;i=i.sibling}throw Error(o(188))}if(t.return!==r.return)t=l,r=i;else{for(var c=!1,m=l.child;m;){if(m===t){c=!0,t=l,r=i;break}if(m===r){c=!0,r=l,t=i;break}m=m.sibling}if(!c){for(m=i.child;m;){if(m===t){c=!0,t=i,r=l;break}if(m===r){c=!0,r=i,t=l;break}m=m.sibling}if(!c)throw Error(o(189))}}if(t.alternate!==r)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?n:e}function x(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=x(n),e!==null)return e;n=n.sibling}return null}function g(n,e,t,r,l,i){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,r,l,i)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&g(n.child,e,t,r,l,i))return!0;n=n.sibling}return!1}function S(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function w(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function F(n){var e=[null,null],t=S(n);return t===null||tn(e,n,t.child,{foundSelf:!1}),e}function tn(n,e,t,r){for(;t!==null;){if(t===e)r.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(r.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&tn(n,e,t.child,r))return!0;t=t.sibling}return!1}function k(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(o(559))}}var Tn=null,pn=null;function cn(n,e,t){return n===t?!0:n===e?(Tn=n,!0):!1}function fn(n,e,t){return n===t?(pn=n,!1):n===e?(pn!==null&&(Tn=n),!0):!1}function An(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function Zn(n,e,t){for(var r=0,l=n;l;l=t(l))r++;l=0;for(var i=e;i;i=t(i))l++;for(;0<r-l;)n=t(n),r--;for(;0<l-r;)e=t(e),l--;for(;r--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var I=Object.assign,mn=Symbol.for("react.element"),Cn=Symbol.for("react.transitional.element"),jn=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),zn=Symbol.for("react.profiler"),Nn=Symbol.for("react.consumer"),Vn=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),sn=Symbol.for("react.suspense"),hn=Symbol.for("react.suspense_list"),rn=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),gn=Symbol.for("react.activity"),ie=Symbol.for("react.legacy_hidden"),Xn=Symbol.for("react.memo_cache_sentinel"),M=Symbol.for("react.view_transition"),V=Symbol.for("react.recoverable"),un=Symbol.iterator;function an(n){return n===null||typeof n!="object"?null:(n=un&&n[un]||n["@@iterator"],typeof n=="function"?n:null)}var _n=Symbol.for("react.client.reference");function wn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===_n?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case W:return"Fragment";case zn:return"Profiler";case P:return"StrictMode";case sn:return"Suspense";case hn:return"SuspenseList";case gn:return"Activity";case M:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case jn:return"Portal";case Vn:return n.displayName||"Context";case Nn:return(n._context.displayName||"Context")+".Consumer";case q:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rn:return e=n.displayName||null,e!==null?e:wn(n.type)||"Memo";case Mn:e=n._payload,n=n._init;try{return wn(n(e))}catch{}}return null}var xn=Array.isArray,en=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vn=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,He={pending:!1,data:null,method:null,action:null},ut=[],Ue=-1;function ue(n){return{current:n}}function $n(n){0>Ue||(n.current=ut[Ue],ut[Ue]=null,Ue--)}function Fn(n,e){Ue++,ut[Ue]=n.current,n.current=e}var ae=ue(null),$e=ue(null),pe=ue(null),Se=ue(null);function at(n,e){switch(Fn(pe,e),Fn($e,n),Fn(ae,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Nm(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Nm(e),n=_m(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}$n(ae),Fn(ae,n)}function Te(){$n(ae),$n($e),$n(pe)}function Yt(n){var e=n.memoizedState;e!==null&&(Ll._currentValue=e.memoizedState,Fn(Se,n)),e=ae.current;var t=_m(e,n.type);e!==t&&(Fn($e,n),Fn(ae,t))}function Xe(n){$e.current===n&&($n(ae),$n($e)),Se.current===n&&($n(Se),Ll._currentValue=He)}var Mt,Lt;function u(n){if(Mt===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Mt=e&&e[1]||"",Lt=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+n+Lt}var O=!1;function Y(n,e){if(!n||O)return"";O=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(nn){var N=nn}Reflect.construct(n,[],X)}else{try{X.call()}catch(nn){N=nn}X=!1;try{var z=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),X=!0,new n}finally{X&&(z!==void 0?Object.defineProperty(n.prototype,"props",z):delete n.prototype.props)}}}else{try{throw Error()}catch(nn){N=nn}(X=n())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(nn){if(nn&&N&&typeof nn.stack=="string")return[nn.stack,N.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),c=i[0],m=i[1];if(c&&m){var b=c.split(`
`),R=m.split(`
`);for(l=r=0;r<b.length&&!b[r].includes("DetermineComponentFrameRoot");)r++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(r===b.length||l===R.length)for(r=b.length-1,l=R.length-1;1<=r&&0<=l&&b[r]!==R[l];)l--;for(;1<=r&&0<=l;r--,l--)if(b[r]!==R[l]){if(r!==1||l!==1)do if(r--,l--,0>l||b[r]!==R[l]){var H=`
`+b[r].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=r&&0<=l);break}}}finally{O=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?u(t):""}function L(n,e){switch(n.tag){case 26:case 27:case 5:return u(n.type);case 16:return u("Lazy");case 13:return n.child!==e&&e!==null?u("Suspense Fallback"):u("Suspense");case 19:return u("SuspenseList");case 0:case 15:return Y(n.type,!1);case 11:return Y(n.type.render,!1);case 1:return Y(n.type,!0);case 31:return u("Activity");case 30:return u("ViewTransition");default:return""}}function j(n){try{var e="",t=null;do e+=L(n,t),t=n,n=n.return;while(n);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var d=Object.prototype.hasOwnProperty,D=a.unstable_scheduleCallback,B=a.unstable_cancelCallback,Z=a.unstable_shouldYield,J=a.unstable_requestPaint,K=a.unstable_now,Q=a.unstable_getCurrentPriorityLevel,$=a.unstable_ImmediatePriority,dn=a.unstable_UserBlockingPriority,Sn=a.unstable_NormalPriority,bn=a.unstable_LowPriority,Rn=a.unstable_IdlePriority,qn=a.log,Ot=a.unstable_setDisableYieldValue,pt=null,xe=null;function rr(n){if(typeof qn=="function"&&Ot(n),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(pt,n)}catch{}}var ke=Math.clz32?Math.clz32:F0,K0=Math.log,Z0=Math.LN2;function F0(n){return n>>>=0,n===0?32:31-(K0(n)/Z0|0)|0}var Ji=256,$i=262144,ki=4194304;function Dr(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Wi(n,e,t){var r=n.pendingLanes;if(r===0)return 0;var l=0,i=n.suspendedLanes,c=n.pingedLanes;n=n.warmLanes;var m=r&134217727;return m!==0?(r=m&~i,r!==0?l=Dr(r):(c&=m,c!==0?l=Dr(c):t||(t=m&~n,t!==0&&(l=Dr(t))))):(m=r&~i,m!==0?l=Dr(m):c!==0?l=Dr(c):t||(t=r&~n,t!==0&&(l=Dr(t)))),l===0?0:e!==0&&e!==l&&(e&i)===0&&(i=l&-l,t=e&-e,i>=t||i===32&&(t&4194048)!==0)?e:l}function $l(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Pf(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var r=31-ke(t),l=1<<r;e|=n[r],t&=~l}return e}function I0(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(){var n=ki;return ki<<=1,(ki&62914560)===0&&(ki=4194304),n}function wa(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function kl(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function J0(n,e,t,r,l,i){var c=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var m=n.entanglements,b=n.expirationTimes,R=n.hiddenUpdates;for(t=c&~t;0<t;){var H=31-ke(t),X=1<<H;m[H]=0,b[H]=-1;var N=R[H];if(N!==null)for(R[H]=null,H=0;H<N.length;H++){var z=N[H];z!==null&&(z.lane&=-536870913)}t&=~X}r!==0&&es(n,r,0),i!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=i&~(c&~e))}function es(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var r=31-ke(e);n.entangledLanes|=e,n.entanglements[r]=n.entanglements[r]|1073741824|t&261930}function ts(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-ke(t),l=1<<r;l&e|n[r]&e&&(n[r]|=e),t&=~l}}function rs(n,e){var t=e&-e;return t=(t&42)!==0?1:Ha(t),(t&(n.suspendedLanes|e))!==0?0:t}function Ha(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ua(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ls(){var n=vn.p;return n!==0?n:(n=window.event,n===void 0?32:sy(n.type))}function is(n,e){var t=vn.p;try{return vn.p=n,e()}finally{vn.p=t}}var Gt=Math.random().toString(36).slice(2),Ne="__reactFiber$"+Gt,Ve="__reactProps$"+Gt,nl="__reactContainer$"+Gt,us="__reactEvents$"+Gt,$0="__reactListeners$"+Gt,k0="__reactHandles$"+Gt,as="__reactResources$"+Gt,Wl="__reactMarker$"+Gt,Pi="__reactLoad$"+Gt;function nu(n){delete n[Ne],delete n[Ve],delete n[$0],delete n[k0]}function zr(n){var e;if(e=n[Ne])return e;for(var t=n.parentNode;t;){if(e=t[nl]||t[Ne]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Km(n);n!==null;){if(t=n[Ne])return t;n=Km(n)}return e}n=t,t=n.parentNode}return null}function el(n){if(n=n[Ne]||n[nl]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Pl(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(o(33))}function tl(n){var e=n[as];return e||(e=n[as]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function be(n){n[Wl]=!0}function cs(n){n[Pi]=void 0}var os=new Set,fs={};function wr(n,e){rl(n,e),rl(n+"Capture",e)}function rl(n,e){for(fs[n]=e,n=0;n<e.length;n++)os.add(e[n])}var W0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ss={},hs={};function P0(n){return d.call(hs,n)?!0:d.call(ss,n)?!1:W0.test(n)?hs[n]=!0:(ss[n]=!0,!1)}var In=!1;function ds(){var n=In;return In=!1,n}function eu(n,e,t){if(P0(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function tu(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Qt(n,e,t,r){if(r===null)n.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,r)}}function We(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ms(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ng(n,e,t){var r=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(c){t=""+c,i.call(this,c)}}),Object.defineProperty(n,e,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function qa(n){if(!n._valueTracker){var e=ms(n)?"checked":"value";n._valueTracker=ng(n,e,""+n[e])}}function ys(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=ms(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}var eg=/[\n"\\]/g;function ct(n){return n.replace(eg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ja(n,e,t,r,l,i,c,m){n.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.type=c:n.removeAttribute("type"),e!=null?c==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+We(e)):n.value!==""+We(e)&&(n.value=""+We(e)):c!=="submit"&&c!=="reset"||n.removeAttribute("value"),e!=null?c==="number"&&n.value==e?Ba(n,We(n.value)):Ba(n,We(e)):t!=null?Ba(n,We(t)):r!=null&&n.removeAttribute("value"),l==null&&i!=null&&(n.defaultChecked=!!i),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?n.name=""+We(m):n.removeAttribute("name")}function gs(n,e,t,r,l,i,c,m){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),e!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){qa(n);return}t=t!=null?""+We(t):"",e=e!=null?""+We(e):t,m||e===n.value||(n.value=e),n.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,n.checked=m?n.checked:!!r,n.defaultChecked=!!r,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(n.name=c),qa(n)}function Ba(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function ll(n,e,t,r){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&r&&(n[t].defaultSelected=!0)}else{for(t=""+We(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,r&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function vs(n,e,t){if(e!=null&&(e=""+We(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+We(t):""}function ps(n,e,t,r){if(e==null){if(r!=null){if(t!=null)throw Error(o(92));if(xn(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),e=t}t=We(e),n.defaultValue=t,r=n.textContent,r===t&&r!==""&&r!==null&&(n.value=r),qa(n)}function il(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var tg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xs(n,e,t){var r=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":r?n.setProperty(e,t):typeof t!="number"||t===0||tg.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Es(n,e,t){if(e!=null&&typeof e!="object")throw Error(o(62));if(n=n.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="",In=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&t[l]!==r&&(xs(n,l,r),In=!0)}else for(var i in e)e.hasOwnProperty(i)&&xs(n,i,e[i])}function Ya(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ru(n){return lg.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Nt(){}var La=null;function Ga(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ul=null,al=null;function Ss(n){var e=el(n);if(e&&(n=e.stateNode)){var t=n[Ve]||null;n:switch(n=e.stateNode,e.type){case"input":if(ja(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ct(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var l=r[Ve]||null;if(!l)throw Error(o(90));ja(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)r=t[e],r.form===n.form&&ys(r)}break n;case"textarea":vs(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&ll(n,!!t.multiple,e,!1)}}}var Qa=!1;function Ts(n,e,t){if(Qa)return n(e,t);Qa=!0;try{var r=n(e);return r}finally{if(Qa=!1,(ul!==null||al!==null)&&(ra(),ul&&(e=ul,n=al,al=ul=null,Ss(e),n)))for(e=0;e<n.length;e++)Ss(n[e])}}function ni(n,e){var t=n.stateNode;if(t===null)return null;var r=t[Ve]||null;if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(o(231,e,typeof t));return t}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=!1;if(Xt)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Xa=!1}var lr=null,Va=null,lu=null;function bs(){if(lu)return lu;var n,e=Va,t=e.length,r,l="value"in lr?lr.value:lr.textContent,i=l.length;for(n=0;n<t&&e[n]===l[n];n++);var c=t-n;for(r=1;r<=c&&e[t-r]===l[i-r];r++);return lu=l.slice(n,1<r?1-r:void 0)}function iu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function uu(){return!0}function As(){return!1}function Be(n){function e(t,r,l,i,c){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var m in n)n.hasOwnProperty(m)&&(t=n[m],this[m]=t?t(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?uu:As,this.isPropagationStopped=As,this}return I(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=Be(ir),ti=I({},ir,{view:0,detail:0}),ig=Be(ti),Ka,Za,ri,cu=I({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ri&&(ri&&n.type==="mousemove"?(Ka=n.screenX-ri.screenX,Za=n.screenY-ri.screenY):Za=Ka=0,ri=n),Ka)},movementY:function(n){return"movementY"in n?n.movementY:Za}}),Ms=Be(cu),ug=I({},cu,{dataTransfer:0}),ag=Be(ug),cg=I({},ti,{relatedTarget:0}),Fa=Be(cg),og=I({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),fg=Be(og),sg=I({},ir,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hg=Be(sg),dg=I({},ir,{data:0}),Os=Be(dg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=gg[n])?!!e[n]:!1}function Ia(){return vg}var pg=I({},ti,{key:function(n){if(n.key){var e=mg[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=iu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?yg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(n){return n.type==="keypress"?iu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?iu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xg=Be(pg),Eg=I({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ns=Be(Eg),Sg=I({},ir,{submitter:0}),Tg=Be(Sg),bg=I({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),Ag=Be(bg),Mg=I({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=Be(Mg),Ng=I({},cu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=Be(Ng),Rg=I({},ir,{newState:0,oldState:0,source:0}),Cg=Be(Rg),Dg=[9,13,27,32],Ja=Xt&&"CompositionEvent"in window,li=null;Xt&&"documentMode"in document&&(li=document.documentMode);var zg=Xt&&"TextEvent"in window&&!li,_s=Xt&&(!Ja||li&&8<li&&11>=li),Rs=" ",Cs=!1;function Ds(n,e){switch(n){case"keyup":return Dg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cl=!1;function wg(n,e){switch(n){case"compositionend":return zs(e);case"keypress":return e.which!==32?null:(Cs=!0,Rs);case"textInput":return n=e.data,n===Rs&&Cs?null:n;default:return null}}function Hg(n,e){if(cl)return n==="compositionend"||!Ja&&Ds(n,e)?(n=bs(),lu=Va=lr=null,cl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _s&&e.locale!=="ko"?null:e.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ws(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ug[n.type]:e==="textarea"}function Hs(n,e,t,r){ul?al?al.push(r):al=[r]:ul=r,e=oa(e,"onChange"),0<e.length&&(t=new au("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var ii=null,ui=null;function qg(n){Sm(n,0)}function ou(n){var e=Pl(n);if(ys(e))return n}function Us(n,e){if(n==="change")return e}var qs=!1;if(Xt){var $a;if(Xt){var ka="oninput"in document;if(!ka){var js=document.createElement("div");js.setAttribute("oninput","return;"),ka=typeof js.oninput=="function"}$a=ka}else $a=!1;qs=$a&&(!document.documentMode||9<document.documentMode)}function Bs(){ii&&(ii.detachEvent("onpropertychange",Ys),ui=ii=null)}function Ys(n){if(n.propertyName==="value"&&ou(ui)){var e=[];Hs(e,ui,n,Ga(n)),Ts(qg,e)}}function jg(n,e,t){n==="focusin"?(Bs(),ii=e,ui=t,ii.attachEvent("onpropertychange",Ys)):n==="focusout"&&Bs()}function Bg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ou(ui)}function Yg(n,e){if(n==="click")return ou(e)}function Lg(n,e){if(n==="input"||n==="change")return ou(e)}function Gg(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Pe=typeof Object.is=="function"?Object.is:Gg;function ai(n,e){if(Pe(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!d.call(e,l)||!Pe(n[l],e[l]))return!1}return!0}function Wa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ls(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gs(n,e){var t=Ls(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Ls(t)}}function Qs(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qs(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Xs(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Wa(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Wa(n.document)}return e}function Pa(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Qg=Xt&&"documentMode"in document&&11>=document.documentMode,ol=null,nc=null,ci=null,ec=!1;function Vs(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ec||ol==null||ol!==Wa(r)||(r=ol,"selectionStart"in r&&Pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&ai(ci,r)||(ci=r,r=oa(nc,"onSelect"),0<r.length&&(e=new au("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=ol)))}function Hr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var fl={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionrun:Hr("Transition","TransitionRun"),transitionstart:Hr("Transition","TransitionStart"),transitioncancel:Hr("Transition","TransitionCancel"),transitionend:Hr("Transition","TransitionEnd")},tc={},Ks={};Xt&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function Ur(n){if(tc[n])return tc[n];if(!fl[n])return n;var e=fl[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ks)return tc[n]=e[t];return n}var Zs=Ur("animationend"),Fs=Ur("animationiteration"),Is=Ur("animationstart"),Xg=Ur("transitionrun"),Vg=Ur("transitionstart"),Kg=Ur("transitioncancel"),Js=Ur("transitionend"),$s=new Map,rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rc.push("scrollEnd");function xt(n,e){$s.set(n,e),wr(e,[n])}var Zg=0;function Vt(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=bt.identifierPrefix;var t=Zg++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function ks(n){if(n==null||typeof n=="string")return n;var e=null,t=Cl;if(t!==null)for(var r=0;r<t.length;r++){var l=n[t[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??n.default}function Kt(n,e){return n=ks(n),e=ks(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var fu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ot=[],sl=0,lc=0;function su(){for(var n=sl,e=lc=sl=0;e<n;){var t=ot[e];ot[e++]=null;var r=ot[e];ot[e++]=null;var l=ot[e];ot[e++]=null;var i=ot[e];if(ot[e++]=null,r!==null&&l!==null){var c=r.pending;c===null?l.next=l:(l.next=c.next,c.next=l),r.pending=l}i!==0&&Ws(t,l,i)}}function hu(n,e,t,r){ot[sl++]=n,ot[sl++]=e,ot[sl++]=t,ot[sl++]=r,lc|=r,n.lanes|=r,n=n.alternate,n!==null&&(n.lanes|=r)}function ic(n,e,t,r){return hu(n,e,t,r),du(n)}function qr(n,e){return hu(n,null,null,e),du(n)}function Ws(n,e,t){n.lanes|=t;var r=n.alternate;r!==null&&(r.lanes|=t);for(var l=!1,i=n.return;i!==null;)i.childLanes|=t,r=i.alternate,r!==null&&(r.childLanes|=t),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(l=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,l&&e!==null&&(l=31-ke(t),n=i.hiddenUpdates,r=n[l],r===null?n[l]=[e]:r.push(e),e.lane=t|536870912),i):null}function du(n){if(50<Ci)throw Ci=0,ta=null,Error(o(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var hl={};function Fg(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(n,e,t,r){return new Fg(n,e,t,r)}function uc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zt(n,e){var t=n.alternate;return t===null?(t=Ke(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Ps(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function mu(n,e,t,r,l,i){var c=0;if(r=n,typeof r=="function")uc(r)&&(c=1);else if(typeof r=="string")c=Sv(n,t,ae.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(r){case gn:return n=Ke(31,t,e,l),n.elementType=gn,n.lanes=i,n;case W:return jr(t.children,l,i,e);case P:c=8,l|=24;break;case zn:return n=Ke(12,t,e,l|2),n.elementType=zn,n.lanes=i,n;case sn:return n=Ke(13,t,e,l),n.elementType=sn,n.lanes=i,n;case hn:return n=Ke(19,t,e,l),n.elementType=hn,n.lanes=i,n;case ie:case M:return n=l|32,n=Ke(30,t,e,n),n.elementType=M,n.lanes=i,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Vn:c=10;break n;case Nn:c=9;break n;case q:c=11;break n;case rn:c=14;break n;case Mn:c=16,r=null;break n}c=29,t=Error(o(130,n===null?"null":typeof n,"")),r=null}return e=Ke(c,t,e,l),e.elementType=n,e.type=r,e.lanes=i,e}function jr(n,e,t,r){return n=Ke(7,n,r,e),n.lanes=t,n}function ac(n,e,t){return n=Ke(6,n,null,e),n.lanes=t,n}function nh(n){var e=Ke(18,null,null,0);return e.stateNode=n,e}function cc(n,e,t){return e=Ke(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var eh=new WeakMap;function ft(n,e){if(typeof n=="object"&&n!==null){var t=eh.get(n);return t!==void 0?t:(e={value:n,source:e,stack:j(e)},eh.set(n,e),e)}return{value:n,source:e,stack:j(e)}}var dl=[],ml=0,yu=null,oi=0,st=[],ht=0,ur=null,_t=1,Rt="";function Ft(n,e){dl[ml++]=oi,dl[ml++]=yu,yu=n,oi=e}function th(n,e,t){st[ht++]=_t,st[ht++]=Rt,st[ht++]=ur,ur=n;var r=_t;n=Rt;var l=32-ke(r)-1;r&=~(1<<l),t+=1;var i=32-ke(e)+l;if(30<i){var c=l-l%5;i=(r&(1<<c)-1).toString(32),r>>=c,l-=c,_t=1<<32-ke(e)+l|t<<l|r,Rt=i+n}else _t=1<<i|t<<l|r,Rt=n}function gu(n){n.return!==null&&(Ft(n,1),th(n,1,0))}function oc(n){for(;n===yu;)yu=dl[--ml],dl[ml]=null,oi=dl[--ml],dl[ml]=null;for(;n===ur;)ur=st[--ht],st[ht]=null,Rt=st[--ht],st[ht]=null,_t=st[--ht],st[ht]=null}function rh(n,e){st[ht++]=_t,st[ht++]=Rt,st[ht++]=ur,_t=e.id,Rt=e.overflow,ur=n}var Ae=null,re=null,Bn=!1,ar=null,dt=!1,fc=Error(o(519));function cr(n){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fi(ft(e,n)),fc}function lh(n){var e=n.stateNode,t=n.type,r=n.memoizedProps;switch(e[Ne]=n,e[Ve]=r,t){case"dialog":Ln("cancel",e),Ln("close",e);break;case"iframe":case"object":case"embed":Ln("load",e);break;case"video":case"audio":for(t=0;t<zi.length;t++)Ln(zi[t],e);break;case"source":Ln("error",e);break;case"img":case"image":case"link":Ln("error",e),Ln("load",e);break;case"details":Ln("toggle",e);break;case"input":Ln("invalid",e),gs(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ln("invalid",e);break;case"textarea":Ln("invalid",e),ps(e,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||r.suppressHydrationWarning===!0||Mm(e.textContent,t)?(r.popover!=null&&(Ln("beforetoggle",e),Ln("toggle",e)),r.onScroll!=null&&Ln("scroll",e),r.onScrollEnd!=null&&Ln("scrollend",e),r.onClick!=null&&(e.onclick=Nt),e=!0):e=!1,e||cr(n,!0)}function vu(n){for(Ae=n.return;Ae;)switch(Ae.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:Ae=Ae.return}}function yl(n){if(n!==Ae)return!1;if(!Bn)return vu(n),Bn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Go(n.type,n.memoizedProps)),t=!t),t&&re&&cr(n),vu(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));re=Vm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));re=Vm(n)}else e===27?(e=re,Ar(n.type)?(n=$o,$o=null,re=n):re=e):re=Ae?yt(n.stateNode.nextSibling):null;return!0}function Br(){re=Ae=null,Bn=!1}function sc(){var n=ar;return n!==null&&(Ie===null?Ie=n:Ie.push.apply(Ie,n),ar=null),n}function fi(n){ar===null?ar=[n]:ar.push(n)}var hc=ue(null),Yr=null,It=null;function or(n,e,t){Fn(hc,e._currentValue),e._currentValue=t}function Jt(n){n._currentValue=hc.current,$n(hc)}function pu(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function dc(n,e,t,r){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;n:for(;i!==null;){var m=i;i=l;for(var b=0;b<e.length;b++)if(m.context===e[b]){i.lanes|=t,m=i.alternate,m!==null&&(m.lanes|=t),pu(i.return,t,n),r||(c=null);break n}i=m.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(o(341));c.lanes|=t,i=c.alternate,i!==null&&(i.lanes|=t),pu(c,t,n),c=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),pu(l.return,t,n),c=l.child,c=c!==null?c.sibling:null):c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===n){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function Lr(n,e,t,r){n=null;for(var l=e,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var m=l.type;Pe(l.pendingProps.value,c.value)||(n!==null?n.push(m):n=[m])}}else if(l===Se.current){if(c=l.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(Ll):n=[Ll])}l=l.return}return n!==null&&dc(e,n,t,r),e.flags|=262144,n!==null}function xu(n){for(n=n.firstContext;n!==null;){if(!Pe(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Gr(n){Yr=n,It=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function _e(n){return ih(Yr,n)}function Eu(n,e){return Yr===null&&Gr(n),ih(n,e)}function ih(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},It===null){if(n===null)throw Error(o(308));It=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else It=It.next=e;return t}var Ig=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,r){n.push(r)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Jg=a.unstable_scheduleCallback,$g=a.unstable_NormalPriority,me={$$typeof:Vn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mc(){return{controller:new Ig,data:new Map,refCount:0}}function si(n){n.refCount--,n.refCount===0&&Jg($g,function(){n.controller.abort()})}function uh(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var r=e[n];t.indexOf(r)===-1&&t.push(r)}}}var hi=null;function kg(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var di=null,yc=0,Qr=0,gl=null;function Wg(n,e){if(di===null){var t=di=[];yc=0,Qr=zo(),gl={status:"pending",value:void 0,then:function(r){t.push(r)}}}return yc++,e.then(ah,ah),e}function ah(){if(--yc===0&&(hi=null,di!==null)){gl!==null&&(gl.status="fulfilled");var n=di;di=null,Qr=0,gl=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Pg(n,e){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return n.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var ch=en.S;en.S=function(n,e){if(nm=K(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Wg(n,e),hi!==null)for(var t=Hl;t!==null;)uh(t,hi),t=t.next;if(t=n.types,t!==null){for(var r=Hl;r!==null;)uh(r,t),r=r.next;if(Qr!==0){r=hi,r===null&&(r=hi=[]);for(var l=0;l<t.length;l++){var i=t[l];r.indexOf(i)===-1&&r.push(i)}}}ch!==null&&ch(n,e)};var Xr=ue(null);function gc(){var n=Xr.current;return n!==null?n:te.pooledCache}function Su(n,e){e===null?Fn(Xr,Xr.current):Fn(Xr,e.pool)}function oh(){var n=gc();return n===null?null:{parent:me._currentValue,pool:n}}var vl=Error(o(460)),vc=Error(o(474)),Tu=Error(o(542)),bu={then:function(){}};function fh(n){return n=n.status,n==="fulfilled"||n==="rejected"}function sh(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Nt,Nt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,dh(n),n===void 0&&!("reason"in e)?Error(o(600)):n;default:if(typeof e.status=="string")e.then(Nt,Nt);else{if(n=te,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=e,n.status="pending",n.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,dh(n),n}throw Kr=e,vl}}function Vr(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Kr=t,vl):t}}var Kr=null;function hh(){if(Kr===null)throw Error(o(459));var n=Kr;return Kr=null,n}function dh(n){if(n===vl||n===Tu)throw Error(o(483))}var pl=null,mi=0;function Au(n){var e=mi;return mi+=1,pl===null&&(pl=[]),sh(pl,n,e)}function fr(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Mu(n,e){throw e.$$typeof===mn?Error(o(525)):(n=Object.prototype.toString.call(e),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function mh(n){function e(_,A){if(n){var C=_.deletions;C===null?(_.deletions=[A],_.flags|=16):C.push(A)}}function t(_,A){if(!n)return null;for(;A!==null;)e(_,A),A=A.sibling;return null}function r(_){for(var A=new Map;_!==null;)_.key===null?A.set(_.index,_):A.set(_.key,_),_=_.sibling;return A}function l(_,A){return _=Zt(_,A),_.index=0,_.sibling=null,_}function i(_,A,C){return _.index=C,n?(C=_.alternate,C!==null?(C=C.index,C<A?(_.flags|=2,A):C):(_.flags|=134217730,A)):(_.flags|=1048576,A)}function c(_){return n&&_.alternate===null&&(_.flags|=134217730),_}function m(_,A,C,G){return A===null||A.tag!==6?(A=ac(C,_.mode,G),A.return=_,A):(A=l(A,C),A.return=_,A)}function b(_,A,C,G){var on=C.type;return on===W?(_=H(_,A,C.props.children,G,C.key),fr(_,C),_):A!==null&&(A.elementType===on||typeof on=="object"&&on!==null&&on.$$typeof===Mn&&Vr(on)===A.type)?(A=l(A,C.props),fr(A,C),A.return=_,A):(A=mu(C.type,C.key,C.props,null,_.mode,G),fr(A,C),A.return=_,A)}function R(_,A,C,G){return A===null||A.tag!==4||A.stateNode.containerInfo!==C.containerInfo||A.stateNode.implementation!==C.implementation?(A=cc(C,_.mode,G),A.return=_,A):(A=l(A,C.children||[]),A.return=_,A)}function H(_,A,C,G,on){return A===null||A.tag!==7?(A=jr(C,_.mode,G,on),A.return=_,A):(A=l(A,C),A.return=_,A)}function X(_,A,C){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=ac(""+A,_.mode,C),A.return=_,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Cn:return C=mu(A.type,A.key,A.props,null,_.mode,C),fr(C,A),C.return=_,C;case jn:return A=cc(A,_.mode,C),A.return=_,A;case Mn:return A=Vr(A),X(_,A,C)}if(xn(A)||an(A))return A=jr(A,_.mode,C,null),A.return=_,A;if(typeof A.then=="function")return X(_,Au(A),C);if(A.$$typeof===Vn)return X(_,Eu(_,A),C);Mu(_,A)}return null}function N(_,A,C,G){var on=A!==null?A.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return on!==null?null:m(_,A,""+C,G);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Cn:return C.key===on?b(_,A,C,G):null;case jn:return C.key===on?R(_,A,C,G):null;case Mn:return C=Vr(C),N(_,A,C,G)}if(xn(C)||an(C))return on!==null?null:H(_,A,C,G,null);if(typeof C.then=="function")return N(_,A,Au(C),G);if(C.$$typeof===Vn)return N(_,A,Eu(_,C),G);Mu(_,C)}return null}function z(_,A,C,G,on){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return _=_.get(C)||null,m(A,_,""+G,on);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Cn:return _=_.get(G.key===null?C:G.key)||null,b(A,_,G,on);case jn:return _=_.get(G.key===null?C:G.key)||null,R(A,_,G,on);case Mn:return G=Vr(G),z(_,A,C,G,on)}if(xn(G)||an(G))return _=_.get(C)||null,H(A,_,G,on,null);if(typeof G.then=="function")return z(_,A,C,Au(G),on);if(G.$$typeof===Vn)return z(_,A,C,Eu(A,G),on);Mu(A,G)}return null}function nn(_,A,C,G){for(var on=null,Qn=null,En=A,On=A=0,ve=null;En!==null&&On<C.length;On++){En.index>On?(ve=En,En=null):ve=En.sibling;var Kn=N(_,En,C[On],G);if(Kn===null){En===null&&(En=ve);break}n&&En&&Kn.alternate===null&&e(_,En),A=i(Kn,A,On),Qn===null?on=Kn:Qn.sibling=Kn,Qn=Kn,En=ve}if(On===C.length)return t(_,En),Bn&&Ft(_,On),on;if(En===null){for(;On<C.length;On++)En=X(_,C[On],G),En!==null&&(A=i(En,A,On),Qn===null?on=En:Qn.sibling=En,Qn=En);return Bn&&Ft(_,On),on}for(En=r(En);On<C.length;On++)ve=z(En,_,On,C[On],G),ve!==null&&(n&&(Kn=ve.alternate,Kn!==null&&En.delete(Kn.key===null?On:Kn.key)),A=i(ve,A,On),Qn===null?on=ve:Qn.sibling=ve,Qn=ve);return n&&En.forEach(function(Rr){return e(_,Rr)}),Bn&&Ft(_,On),on}function yn(_,A,C,G){if(C==null)throw Error(o(151));for(var on=null,Qn=null,En=A,On=A=0,ve=null,Kn=C.next();En!==null&&!Kn.done;On++,Kn=C.next()){En.index>On?(ve=En,En=null):ve=En.sibling;var Rr=N(_,En,Kn.value,G);if(Rr===null){En===null&&(En=ve);break}n&&En&&Rr.alternate===null&&e(_,En),A=i(Rr,A,On),Qn===null?on=Rr:Qn.sibling=Rr,Qn=Rr,En=ve}if(Kn.done)return t(_,En),Bn&&Ft(_,On),on;if(En===null){for(;!Kn.done;On++,Kn=C.next())Kn=X(_,Kn.value,G),Kn!==null&&(A=i(Kn,A,On),Qn===null?on=Kn:Qn.sibling=Kn,Qn=Kn);return Bn&&Ft(_,On),on}for(En=r(En);!Kn.done;On++,Kn=C.next())Kn=z(En,_,On,Kn.value,G),Kn!==null&&(n&&(ve=Kn.alternate,ve!==null&&En.delete(ve.key===null?On:ve.key)),A=i(Kn,A,On),Qn===null?on=Kn:Qn.sibling=Kn,Qn=Kn);return n&&En.forEach(function(wv){return e(_,wv)}),Bn&&Ft(_,On),on}function Un(_,A,C,G){if(typeof C=="object"&&C!==null&&C.type===W&&C.key===null&&C.props.ref===void 0&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Cn:n:{for(var on=C.key;A!==null;){if(A.key===on){if(on=C.type,on===W){if(A.tag===7){t(_,A.sibling),G=l(A,C.props.children),fr(G,C),G.return=_,_=G;break n}}else if(A.elementType===on||typeof on=="object"&&on!==null&&on.$$typeof===Mn&&Vr(on)===A.type){t(_,A.sibling),G=l(A,C.props),fr(G,C),G.return=_,_=G;break n}t(_,A);break}else e(_,A);A=A.sibling}C.type===W?(G=jr(C.props.children,_.mode,G,C.key),fr(G,C),G.return=_,_=G):(G=mu(C.type,C.key,C.props,null,_.mode,G),fr(G,C),G.return=_,_=G)}return c(_);case jn:n:{for(on=C.key;A!==null;){if(A.key===on)if(A.tag===4&&A.stateNode.containerInfo===C.containerInfo&&A.stateNode.implementation===C.implementation){t(_,A.sibling),G=l(A,C.children||[]),G.return=_,_=G;break n}else{t(_,A);break}else e(_,A);A=A.sibling}G=cc(C,_.mode,G),G.return=_,_=G}return c(_);case Mn:return C=Vr(C),Un(_,A,C,G)}if(xn(C))return nn(_,A,C,G);if(an(C)){if(on=an(C),typeof on!="function")throw Error(o(150));return C=on.call(C),yn(_,A,C,G)}if(typeof C.then=="function")return Un(_,A,Au(C),G);if(C.$$typeof===Vn)return Un(_,A,Eu(_,C),G);Mu(_,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,A!==null&&A.tag===6?(t(_,A.sibling),G=l(A,C),G.return=_,_=G):(t(_,A),G=ac(C,_.mode,G),G.return=_,_=G),c(_)):t(_,A)}return function(_,A,C,G){try{mi=0;var on=Un(_,A,C,G);return pl=null,on}catch(En){if(En===vl||En===Tu)throw En;var Qn=Ke(29,En,null,_.mode);return Qn.lanes=G,Qn.return=_,Qn}finally{}}}var Zr=mh(!0),yh=mh(!1),sr=!1;function pc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function hr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function dr(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,(Jn&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=du(n),Ws(n,null,t),e}return hu(n,r,e,t),du(n)}function yi(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,ts(n,t)}}function Ec(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,t=t.next}while(t!==null);i===null?l=i=e:i=i.next=e}else l=i=e;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Sc=!1;function gi(){if(Sc){var n=gl;if(n!==null)throw n}}function vi(n,e,t,r){Sc=!1;var l=n.updateQueue;sr=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var b=m,R=b.next;b.next=null,c===null?i=R:c.next=R,c=b;var H=n.alternate;H!==null&&(H=H.updateQueue,m=H.lastBaseUpdate,m!==c&&(m===null?H.firstBaseUpdate=R:m.next=R,H.lastBaseUpdate=b))}if(i!==null){var X=l.baseState;c=0,H=R=b=null,m=i;do{var N=m.lane&-536870913,z=N!==m.lane;if(z?(Gn&N)===N:(r&N)===N){N!==0&&N===Qr&&(Sc=!0),H!==null&&(H=H.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});n:{var nn=n,yn=m;N=e;var Un=t;switch(yn.tag){case 1:if(nn=yn.payload,typeof nn=="function"){X=nn.call(Un,X,N);break n}X=nn;break n;case 3:nn.flags=nn.flags&-65537|128;case 0:if(nn=yn.payload,N=typeof nn=="function"?nn.call(Un,X,N):nn,N==null)break n;X=I({},X,N);break n;case 2:sr=!0}}N=m.callback,N!==null&&(n.flags|=64,z&&(n.flags|=8192),z=l.callbacks,z===null?l.callbacks=[N]:z.push(N))}else z={lane:N,tag:m.tag,payload:m.payload,callback:m.callback,next:null},H===null?(R=H=z,b=X):H=H.next=z,c|=N;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;z=m,m=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);H===null&&(b=X),l.baseState=b,l.firstBaseUpdate=R,l.lastBaseUpdate=H,i===null&&(l.shared.lanes=0),Er|=c,n.lanes=c,n.memoizedState=X}}function gh(n,e){if(typeof n!="function")throw Error(o(191,n));n.call(e)}function vh(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)gh(t[n],e)}var mr=ue(null),Ou=ue(0);function ph(n,e){n=nr,Fn(Ou,n),Fn(mr,e),nr=n|e.baseLanes}function Tc(){Fn(Ou,nr),Fn(mr,mr.current)}function bc(){nr=Ou.current,$n(mr),$n(Ou)}var Re=ue(null),qe=null;function yr(n){var e=n.alternate;Fn(Ce,Ce.current&1),Fn(Re,n),qe===null&&(e===null||mr.current!==null||e.memoizedState!==null)&&(qe=n)}function Ac(n){Fn(Ce,Ce.current),Fn(Re,n),qe===null&&(qe=n)}function xh(n){n.tag===22?(Fn(Ce,Ce.current),Fn(Re,n),qe===null&&(qe=n)):gr()}function gr(){Fn(Ce,Ce.current),Fn(Re,Re.current)}function nt(n){$n(Re),qe===n&&(qe=null),$n(Ce)}var Ce=ue(0);function pi(n,e){Fn(Re,Re.current),Fn(Ce,e)}function Mc(n){$n(Ce),$n(Re),qe===n&&(qe=null)}function Nu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Io(t)||Jo(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $t=0,Hn=null,ee=null,ye=null,_u=!1,xl=!1,Fr=!1,Ru=0,xi=0,El=null,n1=0;function se(){throw Error(o(321))}function Oc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Pe(n[t],e[t]))return!1;return!0}function Nc(n,e,t,r,l,i){return $t=i,Hn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,en.H=n===null||n.memoizedState===null?td:rd,Fr=!1,i=t(r,l),Fr=!1,xl&&(i=Sh(e,t,r,l)),Eh(n),i}function Eh(n){en.H=qu;var e=ee!==null&&ee.next!==null;if($t=0,ye=ee=Hn=null,_u=!1,xi=0,El=null,e)throw Error(o(300));n===null||ge||(n=n.dependencies,n!==null&&xu(n)&&(ge=!0))}function Sh(n,e,t,r){Hn=n;var l=0;do{if(xl&&(El=null),xi=0,xl=!1,25<=l)throw Error(o(301));if(l+=1,ye=ee=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}en.H=c1,i=e(t,r)}while(xl);return i}function e1(){var n=en.H,e=n.useState()[0];return e=typeof e.then=="function"?Ei(e):e,n=n.useState()[0],(ee!==null?ee.memoizedState:null)!==n&&(Hn.flags|=1024),e}function _c(){var n=Ru!==0;return Ru=0,n}function Rc(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Cc(n){if(_u){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}_u=!1}$t=0,ye=ee=Hn=null,xl=!1,xi=Ru=0,El=null}function Ye(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?Hn.memoizedState=ye=n:ye=ye.next=n,ye}function de(){if(ee===null){var n=Hn.alternate;n=n!==null?n.memoizedState:null}else n=ee.next;var e=ye===null?Hn.memoizedState:ye.next;if(e!==null)ye=e,ee=n;else{if(n===null)throw Hn.alternate===null?Error(o(467)):Error(o(310));ee=n,n={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ye===null?Hn.memoizedState=ye=n:ye=ye.next=n}return ye}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ei(n){var e=xi;return xi+=1,El===null&&(El=[]),n=sh(El,n,e),e=Hn,(ye===null?e.memoizedState:ye.next)===null&&(e=e.alternate,en.H=e===null||e.memoizedState===null?td:rd),n}function Du(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ei(n);if(n.$$typeof===V)return;if(n.$$typeof===Vn)return _e(n)}throw Error(o(438,String(n)))}function Dc(n){var e=null,t=Hn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var r=Hn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Cu(),Hn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),r=0;r<n;r++)t[r]=Xn;return e.index++,t}function kt(n,e){return typeof e=="function"?e(n):e}function zu(n){var e=de();return zc(e,ee,n)}function zc(n,e,t){var r=n.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=t;var l=n.baseQueue,i=r.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}e.baseQueue=l=i,r.pending=null}if(i=n.baseState,l===null)n.memoizedState=i;else{e=l.next;var m=c=null,b=null,R=e,H=!1;do{var X=R.lane&-536870913;if(X!==R.lane?(Gn&X)===X:($t&X)===X){var N=R.revertLane;if(N===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),X===Qr&&(H=!0);else if(($t&N)===N){R=R.next,N===Qr&&(H=!0);continue}else X={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(m=b=X,c=i):b=b.next=X,Hn.lanes|=N,Er|=N;X=R.action,Fr&&t(i,X),i=R.hasEagerState?R.eagerState:t(i,X)}else N={lane:X,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(m=b=N,c=i):b=b.next=N,Hn.lanes|=X,Er|=X;R=R.next}while(R!==null&&R!==e);if(b===null?c=i:b.next=m,!Pe(i,n.memoizedState)&&(ge=!0,H&&(t=gl,t!==null)))throw t;n.memoizedState=i,n.baseState=c,n.baseQueue=b,r.lastRenderedState=i}return l===null&&(r.lanes=0),[n.memoizedState,r.dispatch]}function wc(n){var e=de(),t=e.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=n;var r=t.dispatch,l=t.pending,i=e.memoizedState;if(l!==null){t.pending=null;var c=l=l.next;do i=n(i,c.action),c=c.next;while(c!==l);Pe(i,e.memoizedState)||(ge=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function Th(n,e,t){var r=Hn,l=de(),i=Bn;if(i){if(t===void 0)throw Error(o(407));t=t()}else t=e();var c=!Pe((ee||l).memoizedState,t);if(c&&(l.memoizedState=t,ge=!0),l=l.queue,qc(Mh.bind(null,r,l,n),[n]),n=l.getSnapshot!==e||c||ye!==null&&(ye.memoizedState.tag&1)!==0,Sl(n?9:8,{destroy:void 0},Ah.bind(null,r,l,t,e),null),n){if(r.flags|=2048,te===null)throw Error(o(349));i||($t&127)!==0||bh(r,e,t)}return t}function bh(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Hn.updateQueue,e===null?(e=Cu(),Hn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ah(n,e,t,r){e.value=t,e.getSnapshot=r,Oh(e)&&Nh(n)}function Mh(n,e,t){return t(function(){Oh(e)&&Nh(n)})}function Oh(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Pe(n,t)}catch{return!0}}function Nh(n){var e=qr(n,2);e!==null&&Je(e,n,2)}function Hc(n){var e=Ye();if(typeof n=="function"){var t=n;if(n=t(),Fr){rr(!0);try{t()}finally{rr(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:n},e}function _h(n,e,t,r){return n.baseState=t,zc(n,ee,typeof r=="function"?r:kt)}function t1(n,e,t,r,l){if(Uu(n))throw Error(o(485));if(n=e.action,n!==null){var i={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};en.T!==null?t(!0):i.isTransition=!1,r(i),t=e.pending,t===null?(i.next=e.pending=i,Rh(e,i)):(i.next=t.next,e.pending=t.next=i)}}function Rh(n,e){var t=e.action,r=e.payload,l=n.state;if(e.isTransition){var i=en.T,c={};c.types=i!==null?i.types:null,en.T=c;try{var m=t(l,r),b=en.S;b!==null&&b(c,m),Ch(n,e,m)}catch(R){Uc(n,e,R)}finally{i!==null&&c.types!==null&&(i.types=c.types),en.T=i}}else try{i=t(l,r),Ch(n,e,i)}catch(R){Uc(n,e,R)}}function Ch(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){Dh(n,e,r)},function(r){return Uc(n,e,r)}):Dh(n,e,t)}function Dh(n,e,t){e.status="fulfilled",e.value=t,zh(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Rh(n,t)))}function Uc(n,e,t){var r=n.pending;if(n.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=t,zh(e),e=e.next;while(e!==r)}n.action=null}function zh(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function wh(n,e){return e}function Hh(n,e){if(Bn){var t=te.formState;if(t!==null){n:{var r=Hn;if(Bn){if(re){e:{for(var l=re,i=dt;l.nodeType!==8;){if(!i){l=null;break e}if(l=yt(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){re=yt(l.nextSibling),r=l.data==="F!";break n}}cr(r)}r=!1}r&&(e=t[0])}}return t=Ye(),t.memoizedState=t.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wh,lastRenderedState:e},t.queue=r,t=Ph.bind(null,Hn,r),r.dispatch=t,r=Hc(!1),i=Gc.bind(null,Hn,!1,r.queue),r=Ye(),l={state:e,dispatch:null,action:n,pending:null},r.queue=l,t=t1.bind(null,Hn,l,i,t),l.dispatch=t,r.memoizedState=n,[e,t,!1]}function Uh(n){var e=de();return qh(e,ee,n)}function qh(n,e,t){if(e=zc(n,e,wh)[0],n=zu(kt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Ei(e)}catch(c){throw c===vl?Tu:c}else r=e;e=de();var l=e.queue,i=l.dispatch;return t!==e.memoizedState&&(Hn.flags|=2048,Sl(9,{destroy:void 0},r1.bind(null,l,t),null)),[r,i,n]}function r1(n,e){n.action=e}function jh(n){var e=de(),t=ee;if(t!==null)return qh(e,t,n);de(),e=e.memoizedState,t=de();var r=t.queue.dispatch;return t.memoizedState=n,[e,r,!1]}function Sl(n,e,t,r){return n={tag:n,create:t,deps:r,inst:e,next:null},e=Hn.updateQueue,e===null&&(e=Cu(),Hn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n),n}function Bh(){return de().memoizedState}function wu(n,e,t,r){var l=Ye();Hn.flags|=n,l.memoizedState=Sl(1|e,{destroy:void 0},t,r===void 0?null:r)}function Hu(n,e,t,r){var l=de();r=r===void 0?null:r;var i=l.memoizedState.inst;ee!==null&&r!==null&&Oc(r,ee.memoizedState.deps)?l.memoizedState=Sl(e,i,t,r):(Hn.flags|=n,l.memoizedState=Sl(1|e,i,t,r))}function Yh(n,e){wu(8390656,8,n,e)}function qc(n,e){Hu(2048,8,n,e)}function l1(n){Hn.flags|=4;var e=Hn.updateQueue;if(e===null)e=Cu(),Hn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Lh(n){var e=de().memoizedState;return l1({ref:e,nextImpl:n}),function(){if((Jn&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Gh(n,e){return Hu(4,2,n,e)}function Qh(n,e){return Hu(4,4,n,e)}function Xh(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Vh(n,e,t){t=t!=null?t.concat([n]):null,Hu(4,4,Xh.bind(null,e,n),t)}function jc(){}function Kh(n,e){var t=de();e=e===void 0?null:e;var r=t.memoizedState;return e!==null&&Oc(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Zh(n,e){var t=de();e=e===void 0?null:e;var r=t.memoizedState;if(e!==null&&Oc(e,r[1]))return r[0];if(r=n(),Fr){rr(!0);try{n()}finally{rr(!1)}}return t.memoizedState=[r,e],r}function Bc(n,e,t){return t===void 0||($t&1073741824)!==0&&(Gn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=tm(),Hn.lanes|=n,Er|=n,t)}function Fh(n,e,t,r){return Pe(t,e)?t:mr.current!==null?(n=Bc(n,t,r),Pe(n,e)||(ge=!0),n):($t&106)===0||($t&1073741824)!==0&&(Gn&261930)===0?(ge=!0,n.memoizedState=t):(n=tm(),Hn.lanes|=n,Er|=n,e)}function Ih(n,e,t,r,l){var i=vn.p;vn.p=i!==0&&8>i?i:8;var c=en.T,m={};m.types=c!==null?c.types:null,en.T=m,Gc(n,!1,e,t);try{var b=l(),R=en.S;if(R!==null&&R(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var H=Pg(b,r);Si(n,e,H,lt(n))}else Si(n,e,r,lt(n))}catch(X){Si(n,e,{then:function(){},status:"rejected",reason:X},lt())}finally{vn.p=i,c!==null&&m.types!==null&&(c.types=m.types),en.T=c}}function i1(){}function Yc(n,e,t,r){if(n.tag!==5)throw Error(o(476));var l=Jh(n).queue;Ih(n,l,e,He,t===null?i1:function(){return $h(n),t(r)})}function Jh(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:He,baseState:He,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:He},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function $h(n){var e=Jh(n);e.next===null&&(e=n.alternate.memoizedState),Si(n,e.next.queue,{},lt())}function Lc(){return _e(Ll)}function kh(){return de().memoizedState}function Wh(){return de().memoizedState}function u1(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=lt();n=hr(t);var r=dr(e,n,t);r!==null&&(Je(r,e,t),yi(r,e,t)),e={cache:mc()},n.payload=e;return}e=e.return}}function a1(n,e,t){var r=lt();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Uu(n)?nd(e,t):(t=ic(n,e,t,r),t!==null&&(Je(t,n,r),ed(t,e,r)))}function Ph(n,e,t){var r=lt();Si(n,e,t,r)}function Si(n,e,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Uu(n))nd(e,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,m=i(c,t);if(l.hasEagerState=!0,l.eagerState=m,Pe(m,c))return hu(n,e,l,0),te===null&&su(),!1}catch{}finally{}if(t=ic(n,e,l,r),t!==null)return Je(t,n,r),ed(t,e,r),!0}return!1}function Gc(n,e,t,r){if(r={lane:2,revertLane:zo(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Uu(n)){if(e)throw Error(o(479))}else e=ic(n,t,r,2),e!==null&&Je(e,n,2)}function Uu(n){var e=n.alternate;return n===Hn||e!==null&&e===Hn}function nd(n,e){xl=_u=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ed(n,e,t){if((t&4194048)!==0){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,ts(n,t)}}var qu={readContext:_e,use:Du,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useLayoutEffect:se,useInsertionEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useSyncExternalStore:se,useId:se,useHostTransitionStatus:se,useFormState:se,useActionState:se,useOptimistic:se,useMemoCache:se,useCacheRefresh:se,useEffectEvent:se},td={readContext:_e,use:Du,useCallback:function(n,e){return Ye().memoizedState=[n,e===void 0?null:e],n},useContext:_e,useEffect:Yh,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,wu(4194308,4,Xh.bind(null,e,n),t)},useLayoutEffect:function(n,e){return wu(4194308,4,n,e)},useInsertionEffect:function(n,e){wu(4,2,n,e)},useMemo:function(n,e){var t=Ye();e=e===void 0?null:e;var r=n();if(Fr){rr(!0);try{n()}finally{rr(!1)}}return t.memoizedState=[r,e],r},useReducer:function(n,e,t){var r=Ye();if(t!==void 0){var l=t(e);if(Fr){rr(!0);try{t(e)}finally{rr(!1)}}}else l=e;return r.memoizedState=r.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},r.queue=n,n=n.dispatch=a1.bind(null,Hn,n),[r.memoizedState,n]},useRef:function(n){var e=Ye();return n={current:n},e.memoizedState=n},useState:function(n){n=Hc(n);var e=n.queue,t=Ph.bind(null,Hn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:jc,useDeferredValue:function(n,e){var t=Ye();return Bc(t,n,e)},useTransition:function(){var n=Hc(!1);return n=Ih.bind(null,Hn,n.queue,!0,!1),Ye().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var r=Hn,l=Ye();if(Bn){if(t===void 0)throw Error(o(407));t=t()}else{if(t=e(),te===null)throw Error(o(349));(Gn&127)!==0||bh(r,e,t)}l.memoizedState=t;var i={value:t,getSnapshot:e};return l.queue=i,Yh(Mh.bind(null,r,i,n),[n]),r.flags|=2048,Sl(9,{destroy:void 0},Ah.bind(null,r,i,t,e),null),t},useId:function(){var n=Ye(),e=te.identifierPrefix;if(Bn){var t=Rt,r=_t;t=(r&~(1<<32-ke(r)-1)).toString(32)+t,e="_"+e+"R_"+t,t=Ru++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=n1++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Lc,useFormState:Hh,useActionState:Hh,useOptimistic:function(n){var e=Ye();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Gc.bind(null,Hn,!0,t),t.dispatch=e,[n,e]},useMemoCache:Dc,useCacheRefresh:function(){return Ye().memoizedState=u1.bind(null,Hn)},useEffectEvent:function(n){var e=Ye(),t={impl:n};return e.memoizedState=t,function(){if((Jn&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}},rd={readContext:_e,use:Du,useCallback:Kh,useContext:_e,useEffect:qc,useImperativeHandle:Vh,useInsertionEffect:Gh,useLayoutEffect:Qh,useMemo:Zh,useReducer:zu,useRef:Bh,useState:function(){return zu(kt)},useDebugValue:jc,useDeferredValue:function(n,e){var t=de();return Fh(t,ee.memoizedState,n,e)},useTransition:function(){var n=zu(kt)[0],e=de().memoizedState;return[typeof n=="boolean"?n:Ei(n),e]},useSyncExternalStore:Th,useId:kh,useHostTransitionStatus:Lc,useFormState:Uh,useActionState:Uh,useOptimistic:function(n,e){var t=de();return _h(t,ee,n,e)},useMemoCache:Dc,useCacheRefresh:Wh,useEffectEvent:Lh},c1={readContext:_e,use:Du,useCallback:Kh,useContext:_e,useEffect:qc,useImperativeHandle:Vh,useInsertionEffect:Gh,useLayoutEffect:Qh,useMemo:Zh,useReducer:wc,useRef:Bh,useState:function(){return wc(kt)},useDebugValue:jc,useDeferredValue:function(n,e){var t=de();return ee===null?Bc(t,n,e):Fh(t,ee.memoizedState,n,e)},useTransition:function(){var n=wc(kt)[0],e=de().memoizedState;return[typeof n=="boolean"?n:Ei(n),e]},useSyncExternalStore:Th,useId:kh,useHostTransitionStatus:Lc,useFormState:jh,useActionState:jh,useOptimistic:function(n,e){var t=de();return ee!==null?_h(t,ee,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:Dc,useCacheRefresh:Wh,useEffectEvent:Lh};function Qc(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:I({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Xc={enqueueSetState:function(n,e,t){n=n._reactInternals;var r=lt(),l=hr(r);l.payload=e,t!=null&&(l.callback=t),e=dr(n,l,r),e!==null&&(Je(e,n,r),yi(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=lt(),l=hr(r);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=dr(n,l,r),e!==null&&(Je(e,n,r),yi(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=lt(),r=hr(t);r.tag=2,e!=null&&(r.callback=e),e=dr(n,r,t),e!==null&&(Je(e,n,t),yi(e,n,t))}};function ld(n,e,t,r,l,i,c){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,i,c):e.prototype&&e.prototype.isPureReactComponent?!ai(t,r)||!ai(l,i):!0}function id(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Xc.enqueueReplaceState(e,e.state,null)}function Ir(n,e){var t=e;if("ref"in e){t={};for(var r in e)r!=="ref"&&(t[r]=e[r])}if(n=n.defaultProps){t===e&&(t=I({},t));for(var l in n)t[l]===void 0&&(t[l]=n[l])}return t}function ud(n){fu(n)}function ad(n){console.error(n)}function cd(n){fu(n)}function ju(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function od(n,e,t){try{var r=n.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Vc(n,e,t){return t=hr(t),t.tag=3,t.payload={element:null},t.callback=function(){ju(n,e)},t}function fd(n){return n=hr(n),n.tag=3,n}function sd(n,e,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=r.value;n.payload=function(){return l(i)},n.callback=function(){od(e,t,r)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){od(e,t,r),typeof l!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})})}function o1(n,e,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=t.alternate,e!==null&&Lr(e,t,l,!0),t=Re.current,t!==null){switch(t.tag){case 31:case 13:case 19:return qe===null?la():t.alternate===null&&he===0&&(he=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===bu?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([r]):e.add(r),Ro(n,r,l)),!1;case 22:return t.flags|=65536,r===bu?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([r]):t.add(r)),Ro(n,r,l)),!1}throw Error(o(435,t.tag))}return Ro(n,r,l),la(),!1}if(Bn)return e=Re.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==fc&&(n=Error(o(422),{cause:r}),fi(ft(n,t)))):(r!==fc&&(e=Error(o(423),{cause:r}),fi(ft(e,t))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,r=ft(r,t),l=Vc(n.stateNode,r,l),Ec(n,l),he!==4&&(he=2)),!1;var i=Error(o(520),{cause:r});if(i=ft(i,t),Ri===null?Ri=[i]:Ri.push(i),he!==4&&(he=2),e===null)return!0;r=ft(r,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=l&-l,t.lanes|=n,n=Vc(t.stateNode,r,n),Ec(t,n),!1;case 1:if(e=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=fd(l),sd(l,n,t,r),Ec(t,l),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var Kc=Error(o(461)),ge=!1;function Ee(n,e,t,r){e.child=n===null?yh(e,null,t,r):Zr(e,n.child,t,r)}function hd(n,e,t,r,l){t=t.render;var i=e.ref;if("ref"in r){var c={};for(var m in r)m!=="ref"&&(c[m]=r[m])}else c=r;return Gr(e),r=Nc(n,e,t,c,i,l),m=_c(),n!==null&&!ge?(Rc(n,e,l),Wt(n,e,l)):(Bn&&m&&gu(e),e.flags|=1,Ee(n,e,r,l),e.child)}function dd(n,e,t,r,l){if(n===null){var i=t.type;return typeof i=="function"&&!uc(i)&&i.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=i,md(n,e,i,r,l)):(n=mu(t.type,null,r,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!Pc(n,l)){var c=i.memoizedProps;if(t=t.compare,t=t!==null?t:ai,t(c,r)&&n.ref===e.ref)return Wt(n,e,l)}return e.flags|=1,n=Zt(i,r),n.ref=e.ref,n.return=e,e.child=n}function md(n,e,t,r,l){if(n!==null){var i=n.memoizedProps;if(ai(i,r)&&n.ref===e.ref)if(ge=!1,e.pendingProps=r=i,Pc(n,l))(n.flags&131072)!==0&&(ge=!0);else return e.lanes=n.lanes,Wt(n,e,l)}return Zc(n,e,t,r,l)}function yd(n,e,t,r){var l=r.children,i=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,n!==null){for(r=e.child=n.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~i}else r=0,e.child=null;return gd(n,e,i,t,r)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Su(e,i!==null?i.cachePool:null),i!==null?ph(e,i):Tc(),xh(e);else return r=e.lanes=536870912,gd(n,e,i!==null?i.baseLanes|t:t,t,r)}else i!==null?(Su(e,i.cachePool),ph(e,i),gr(),e.memoizedState=null):(n!==null&&Su(e,null),Tc(),gr());return Ee(n,e,l,t),e.child}function Ti(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function gd(n,e,t,r,l){var i=gc();return i=i===null?null:{parent:me._currentValue,pool:i},e.memoizedState={baseLanes:t,cachePool:i},n!==null&&Su(e,null),Tc(),xh(e),n!==null&&Lr(n,e,r,!0),e.childLanes=l,null}function Bu(n,e){return e=Yu({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function vd(n,e,t){return Zr(e,n.child,null,t),n=Bu(e,e.pendingProps),n.flags|=2,nt(e),e.memoizedState=null,n}function f1(n,e,t){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Bn){if(r.mode==="hidden")return n=Bu(e,r),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},Ti(null,n);if(Ac(e),(n=re)?(n=Xm(n,dt),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ur!==null?{id:_t,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},t=nh(n),t.return=e,e.child=t,Ae=e,re=null)):n=null,n===null)throw cr(e);return e.lanes=536870912,null}return Bu(e,r)}var i=n.memoizedState;if(i!==null){var c=i.dehydrated;if(Ac(e),l)if(e.flags&256)e.flags&=-257,e=vd(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(o(558));else if(ge||Lr(n,e,t,!1),l=(t&n.childLanes)!==0,ge||l){if(mr.current===null){if(r=te,r!==null&&(c=rs(r,t),c!==0&&c!==i.retryLane))throw i.retryLane=c,qr(n,c),Je(r,n,c),Kc;la()}e=vd(n,e,t)}else n=i.treeContext,re=yt(c.nextSibling),Ae=e,Bn=!0,ar=null,dt=!1,n!==null&&rh(e,n),e=Bu(e,r),e.flags|=134221824;return e}return n=Zt(n.child,{mode:r.mode,children:r.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Tl(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Zc(n,e,t,r,l){return Gr(e),t=Nc(n,e,t,r,void 0,l),r=_c(),n!==null&&!ge?(Rc(n,e,l),Wt(n,e,l)):(Bn&&r&&gu(e),e.flags|=1,Ee(n,e,t,l),e.child)}function pd(n,e,t,r,l,i){return Gr(e),e.updateQueue=null,t=Sh(e,r,t,l),Eh(n),r=_c(),n!==null&&!ge?(Rc(n,e,i),Wt(n,e,i)):(Bn&&r&&gu(e),e.flags|=1,Ee(n,e,t,i),e.child)}function xd(n,e,t,r,l){if(Gr(e),e.stateNode===null){var i=hl,c=t.contextType;typeof c=="object"&&c!==null&&(i=_e(c)),i=new t(r,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=r,i.state=e.memoizedState,i.refs={},pc(e),c=t.contextType,i.context=typeof c=="object"&&c!==null?_e(c):hl,i.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Qc(e,t,c,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Xc.enqueueReplaceState(i,i.state,null),vi(e,r,i,l),gi(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(n===null){i=e.stateNode;var m=e.memoizedProps,b=Ir(t,m);i.props=b;var R=i.context,H=t.contextType;c=hl,typeof H=="object"&&H!==null&&(c=_e(H));var X=t.getDerivedStateFromProps;H=typeof X=="function"||typeof i.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m||R!==c)&&id(e,i,r,c),sr=!1;var N=e.memoizedState;i.state=N,vi(e,r,i,l),gi(),R=e.memoizedState,m||N!==R||sr?(typeof X=="function"&&(Qc(e,t,X,r),R=e.memoizedState),(b=sr||ld(e,t,b,r,N,R,c))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=R),i.props=r,i.state=R,i.context=c,r=b):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{i=e.stateNode,xc(n,e),c=e.memoizedProps,H=Ir(t,c),i.props=H,X=e.pendingProps,N=i.context,R=t.contextType,b=hl,typeof R=="object"&&R!==null&&(b=_e(R)),m=t.getDerivedStateFromProps,(R=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==X||N!==b)&&id(e,i,r,b),sr=!1,N=e.memoizedState,i.state=N,vi(e,r,i,l),gi();var z=e.memoizedState;c!==X||N!==z||sr||n!==null&&n.dependencies!==null&&xu(n.dependencies)?(typeof m=="function"&&(Qc(e,t,m,r),z=e.memoizedState),(H=sr||ld(e,t,H,r,N,z,b)||n!==null&&n.dependencies!==null&&xu(n.dependencies))?(R||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,z,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,z,b)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===n.memoizedProps&&N===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&N===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=z),i.props=r,i.state=z,i.context=b,r=H):(typeof i.componentDidUpdate!="function"||c===n.memoizedProps&&N===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&N===n.memoizedState||(e.flags|=1024),r=!1)}return i=r,Tl(n,e),r=(e.flags&128)!==0,i||r?(i=e.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,n!==null&&r?(e.child=Zr(e,n.child,null,l),e.child=Zr(e,null,t,l)):Ee(n,e,t,l),e.memoizedState=i.state,n=e.child):n=Wt(n,e,l),n}function Ed(n,e,t,r){return Br(),e.flags|=256,Ee(n,e,t,r),e.child}var Fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ic(n){return{baseLanes:n,cachePool:oh()}}function Jc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=rt),n}function Sd(n,e,t){var r=e.pendingProps,l=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=n!==null&&n.memoizedState===null?!1:(Ce.current&2)!==0),c&&(l=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,n===null){if(Bn){if(l?yr(e):gr(),(n=re)?(n=Xm(n,dt),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ur!==null?{id:_t,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},t=nh(n),t.return=e,e.child=t,Ae=e,re=null)):n=null,n===null)throw cr(e);return Jo(n)?e.lanes=32:e.lanes=536870912,null}return i=r.children,r=r.fallback,l?(gr(),l=e.mode,i=Yu({mode:"hidden",children:i},l),r=jr(r,l,t,null),i.return=e,r.return=e,i.sibling=r,e.child=i,r=e.child,r.memoizedState=Ic(t),r.childLanes=Jc(n,c,t),e.memoizedState=Fc,Ti(null,r)):(yr(e),$c(e,i))}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(b!==null)return s1(n,e,i,c,r,b,m,t)}return l?(gr(),l=r.fallback,i=e.mode,m=n.child,b=m.sibling,r=Zt(m,{mode:"hidden",children:r.children}),r.subtreeFlags=m.subtreeFlags&1206910976,b!==null?l=Zt(b,l):(l=jr(l,i,t,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Ti(null,r),r=e.child,l=n.child.memoizedState,l===null?l=Ic(t):(i=l.cachePool,i!==null?(m=me._currentValue,i=i.parent!==m?{parent:m,pool:m}:i):i=oh(),l={baseLanes:l.baseLanes|t,cachePool:i}),r.memoizedState=l,r.childLanes=Jc(n,c,t),e.memoizedState=Fc,Ti(n.child,r)):(yr(e),t=n.child,n=t.sibling,t=Zt(t,{mode:"visible",children:r.children}),t.return=e,t.sibling=null,n!==null&&(c=e.deletions,c===null?(e.deletions=[n],e.flags|=16):c.push(n)),e.child=t,e.memoizedState=null,t)}function $c(n,e){return e=Yu({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Yu(n,e){return n=Ke(22,n,null,e),n.lanes=0,n}function Lu(n,e,t){return Zr(e,n.child,null,t),n=$c(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function s1(n,e,t,r,l,i,c,m){if(t)return e.flags&256?(yr(e),e.flags&=-257,Lu(n,e,m)):e.memoizedState!==null?(gr(),e.child=n.child,e.flags|=128,null):(gr(),i=l.fallback,c=e.mode,l=Yu({mode:"visible",children:l.children},c),i=jr(i,c,m,null),i.flags|=2,l.return=e,i.return=e,l.sibling=i,e.child=l,Zr(e,n.child,null,m),l=e.child,l.memoizedState=Ic(m),l.childLanes=Jc(n,r,m),e.memoizedState=Fc,Ti(null,l));if(yr(e),Jo(i)){if(r=i.nextSibling&&i.nextSibling.dataset,r)var b=r.dgst;return r=b,r!==""&&(l=Error(o(419)),l.stack="",l.digest=r,fi({value:l,source:null,stack:null})),Lu(n,e,m)}if(ge||Lr(n,e,m,!1),r=(m&n.childLanes)!==0,ge||r){if(mr.current!==null)return Lu(n,e,m);if(r=te,r!==null&&(l=rs(r,m),l!==0&&l!==c.retryLane))throw c.retryLane=l,qr(n,l),Je(r,n,l),Kc;return Io(i)||la(),Lu(n,e,m)}return Io(i)?(e.flags|=192,e.child=n.child,null):(n=c.treeContext,re=yt(i.nextSibling),Ae=e,Bn=!0,ar=null,dt=!1,n!==null&&rh(e,n),e=$c(e,l.children),e.flags|=134221824,e)}function Td(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),pu(n.return,e,t)}function bd(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&Nu(t)===null&&(e=n),n=n.sibling}return e}function Gu(n,e,t,r,l,i){var c=n.memoizedState;c===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=t,c.tailMode=l,c.treeForkCount=i)}function kc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function Wc(n,e,t){var r=e.pendingProps,l=r.revealOrder,i=r.tail;r=r.children;var c=Ce.current;if(e.flags&128)return pi(e,c),null;var m=(c&2)!==0;if(m?(c=c&1|2,e.flags|=128):c&=1,pi(e,c),l==="backwards"&&n!==null?(kc(n),Ee(n,e,r,t),kc(n)):Ee(n,e,r,t),r=Bn?oi:0,!m&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Td(n,t,e);else if(n.tag===19)Td(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(l){case"backwards":t=bd(e.child),t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null,kc(e)),Gu(e,!0,l,null,i,r);break;case"unstable_legacy-backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Nu(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}Gu(e,!0,t,null,i,r);break;case"together":Gu(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:t=bd(e.child),t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Gu(e,!1,l,t,i,r)}return e.child}function Ad(n,e,t){var r=e.pendingProps;return or(e,e.type,r.value),Ee(n,e,r.children,t),e.child}function Wt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Er|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(Lr(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(o(153));if(e.child!==null){for(n=e.child,t=Zt(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Zt(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Pc(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&xu(n)))}function h1(n,e,t){switch(e.tag){case 3:at(e,e.stateNode.containerInfo),or(e,me,n.memoizedState.cache),Br();break;case 27:case 5:Yt(e);break;case 4:at(e,e.stateNode.containerInfo);break;case 10:or(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ac(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return yr(e),e.flags|=128,null;r=Lr(n,e,t,!1);var l=e.child.childLanes;return r||(t&l)!==0?Sd(n,e,t):(yr(e),n=Wt(n,e,t),n!==null?n.sibling:null)}yr(e);break;case 19:if(e.flags&128)return Wc(n,e,t);if(l=(n.flags&128)!==0,r=(t&e.childLanes)!==0,r||(Lr(n,e,t,!1),r=(t&e.childLanes)!==0),l){if(r)return Wc(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pi(e,Ce.current),r)break;return null;case 22:return e.lanes=0,yd(n,e,t,e.pendingProps);case 24:or(e,me,n.memoizedState.cache)}return Wt(n,e,t)}function Md(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)ge=!0;else{if(!Pc(n,t)&&(e.flags&128)===0)return ge=!1,h1(n,e,t);ge=(n.flags&131072)!==0}else ge=!1,Bn&&(e.flags&1048576)!==0&&th(e,oi,e.index);switch(e.lanes=0,e.tag){case 16:n:{var r=e.pendingProps;if(n=Vr(e.elementType),e.type=n,typeof n=="function")uc(n)?(r=Ir(n,r),e.tag=1,e=xd(null,e,n,r,t)):(e.tag=0,e=Zc(null,e,n,r,t));else{if(n!=null){var l=n.$$typeof;if(l===q){e.tag=11,e=hd(null,e,n,r,t);break n}else if(l===rn){e.tag=14,e=dd(null,e,n,r,t);break n}else if(l===Vn){e.tag=10,e.type=n,e=Ad(null,e,t);break n}}throw e=wn(n)||n,Error(o(306,e,""))}}return e;case 0:return Zc(n,e,e.type,e.pendingProps,t);case 1:return r=e.type,l=Ir(r,e.pendingProps),xd(n,e,r,l,t);case 3:n:{if(at(e,e.stateNode.containerInfo),n===null)throw Error(o(387));r=e.pendingProps;var i=e.memoizedState;l=i.element,xc(n,e),vi(e,r,null,t);var c=e.memoizedState;if(r=c.cache,or(e,me,r),r!==i.cache&&dc(e,[me],t,!0),gi(),r=c.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Ed(n,e,r,t);break n}else if(r!==l){l=ft(Error(o(424)),e),fi(l),e=Ed(n,e,r,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(re=yt(n.firstChild),Ae=e,Bn=!0,ar=null,dt=!0,t=yh(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Br(),r===l){e=Wt(n,e,t);break n}Ee(n,e,r,t)}e=e.child}return e;case 26:return Tl(n,e),n===null?(t=$m(e.type,null,e.pendingProps,null))?e.memoizedState=t:Bn||(e.stateNode=Rm(e.type,e.pendingProps,pe.current,e)):e.memoizedState=$m(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Yt(e),n===null&&Bn&&(r=e.stateNode=Zm(e.type,e.pendingProps,pe.current),Ae=e,dt=!0,l=re,Ar(e.type)?($o=l,re=yt(r.firstChild)):re=l),Ee(n,e,e.pendingProps.children,t),Tl(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Bn&&((l=r=re)&&(r=uv(r,e.type,e.pendingProps,dt),r!==null?(e.stateNode=r,Ae=e,re=yt(r.firstChild),dt=!1,l=!0):l=!1),l||cr(e)),Yt(e),l=e.type,i=e.pendingProps,c=n!==null?n.memoizedProps:null,r=i.children,Go(l,i)?r=null:c!==null&&Go(l,c)&&(e.flags|=32),e.memoizedState!==null&&(l=Nc(n,e,e1,null,null,t),Ll._currentValue=l),Tl(n,e),Ee(n,e,r,t),e.child;case 6:return n===null&&Bn&&((n=t=re)&&(t=av(t,e.pendingProps,dt),t!==null?(e.stateNode=t,Ae=e,re=null,n=!0):n=!1),n||cr(e)),null;case 13:return Sd(n,e,t);case 4:return at(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Zr(e,null,r,t):Ee(n,e,r,t),e.child;case 11:return hd(n,e,e.type,e.pendingProps,t);case 7:return r=e.pendingProps,Tl(n,e),Ee(n,e,r,t),e.child;case 8:return Ee(n,e,e.pendingProps.children,t),e.child;case 12:return Ee(n,e,e.pendingProps.children,t),e.child;case 10:return Ad(n,e,t);case 9:return l=e.type._context,r=e.pendingProps.children,Gr(e),l=_e(l),r=r(l),e.flags|=1,Ee(n,e,r,t),e.child;case 14:return dd(n,e,e.type,e.pendingProps,t);case 15:return md(n,e,e.type,e.pendingProps,t);case 19:return Wc(n,e,t);case 31:return f1(n,e,t);case 22:return yd(n,e,t,e.pendingProps);case 24:return Gr(e),r=_e(me),n===null?(l=gc(),l===null&&(l=te,i=mc(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),e.memoizedState={parent:r,cache:l},pc(e),or(e,me,l)):((n.lanes&t)!==0&&(xc(n,e),vi(e,null,null,t),gi()),l=n.memoizedState,i=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),or(e,me,r)):(r=i.cache,or(e,me,r),r!==l.cache&&dc(e,[me],t,!0))),Ee(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=n===null?18882560:18874368:Bn&&gu(e),n!==null&&n.memoizedProps.name!==r.name?e.flags|=4194816:Tl(n,e),Ee(n,e,r.children,t),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Pt(n){n.flags|=4}function no(n,e,t,r,l){var i;if((i=(n.mode&32)!==0)&&(i=t===null?ny(e,r):ny(e,r)&&(r.src!==t.src||r.srcSet!==t.srcSet)),i){if(n.flags|=16777216,(l&335544128)===l)if(n.stateNode.complete)n.flags|=8192;else if(um())n.flags|=8192;else throw Kr=bu,vc}else n.flags&=-16777217}function Od(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ey(e))if(um())n.flags|=8192;else throw Kr=bu,vc}function Qu(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?ns():536870912,n.lanes|=e,Nl|=e)}function bi(n,e){if(!Bn)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function le(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function d1(n,e,t){var r=e.pendingProps;switch(oc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(e),null;case 1:return le(e),null;case 3:return t=e.stateNode,r=null,n!==null&&(r=n.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Jt(me),Te(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(yl(e)?Pt(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,sc())),le(e),null;case 26:var l=e.type,i=e.memoizedState;return n===null?(Pt(e),i!==null?(le(e),Od(e,i)):(le(e),no(e,l,null,r,t))):i?i!==n.memoizedState?(Pt(e),le(e),Od(e,i)):(le(e),e.flags&=-16777217):(n=n.memoizedProps,n!==r&&Pt(e),le(e),no(e,l,n,r,t)),null;case 27:if(Xe(e),t=pe.current,l=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==r&&Pt(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return le(e),e.subtreeFlags&=-33554433,null}n=ae.current,yl(e)?lh(e):(n=Zm(l,r,t),e.stateNode=n,Pt(e))}return le(e),e.subtreeFlags&=-33554433,null;case 5:if(Xe(e),l=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==r&&Pt(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return le(e),e.subtreeFlags&=-33554433,null}if(i=ae.current,yl(e))lh(e);else{var c=Hi(pe.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i=typeof r.is=="string"?c.createElement(l,{is:r.is}):c.createElement(l)}}i[Ne]=e,i[Ve]=r;n:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break n;for(;c.sibling===null;){if(c.return===null||c.return===e)break n;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=i;n:switch(ze(i,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}r&&Pt(e)}}return le(e),e.subtreeFlags&=-33554433,no(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==r&&Pt(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(o(166));if(n=pe.current,yl(e)){if(n=e.stateNode,t=e.memoizedProps,r=null,l=Ae,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}n[Ne]=e,n=!!(n.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||Mm(n.nodeValue,t)),n||cr(e,!0)}else n=Hi(n).createTextNode(r),n[Ne]=e,e.stateNode=n}return le(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(r=yl(e),t!==null){if(n===null){if(!r)throw Error(o(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));n[Ne]=e}else Br(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),n=!1}else t=sc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(nt(e),e):(nt(e),null);if((e.flags&128)!==0)throw Error(o(558))}return le(e),null;case 13:if(r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=yl(e),r!==null&&r.dehydrated!==null){if(n===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Ne]=e}else Br(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),l=!1}else l=sc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(nt(e),e):(nt(e),null)}return nt(e),(e.flags&128)!==0?(e.lanes=t,e):(t=r!==null,n=n!==null&&n.memoizedState!==null,t&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==l&&(r.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),Qu(e,e.updateQueue),le(e),null);case 4:return Te(),n===null&&qo(e.stateNode.containerInfo),e.flags|=67108864,le(e),null;case 10:return Jt(e.type),le(e),null;case 19:if(Mc(e),r=e.memoizedState,r===null)return le(e),null;if(l=(e.flags&128)!==0,i=r.rendering,i===null)if(l)bi(r,!1);else{if(he!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(i=Nu(n),i!==null){for(e.flags|=128,bi(r,!1),n=i.updateQueue,e.updateQueue=n,Qu(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Ps(t,n),t=t.sibling;return pi(e,Ce.current&1|2),Bn&&Ft(e,r.treeForkCount),e.child}n=n.sibling}r.tail!==null&&K()>na&&(e.flags|=128,l=!0,bi(r,!1),e.lanes=4194304)}else{if(!l)if(n=Nu(i),n!==null){if(e.flags|=128,l=!0,n=n.updateQueue,e.updateQueue=n,Qu(e,n),bi(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!i.alternate&&!Bn)return le(e),null}else 2*K()-r.renderingStartTime>na&&t!==536870912&&(e.flags|=128,l=!0,bi(r,!1),e.lanes=4194304);r.isBackwards?(i.sibling=e.child,e.child=i):(n=r.last,n!==null?n.sibling=i:e.child=i,r.last=i)}if(r.tail!==null){n=r.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return r.rendering=n,r.tail=n.sibling,r.renderingStartTime=K(),n.sibling=null,i=Ce.current,i=l?i&1|2:i&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!t||Bn?pi(e,i):(t=i,Fn(Re,e),Fn(Ce,t),qe===null&&(qe=e)),Bn&&Ft(e,r.treeForkCount),n}return le(e),null;case 22:case 23:return nt(e),bc(),r=e.memoizedState!==null,n!==null?n.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(t&536870912)!==0&&(e.flags&128)===0&&(le(e),e.subtreeFlags&6&&(e.flags|=8192)):le(e),t=e.updateQueue,t!==null&&Qu(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==t&&(e.flags|=2048),n!==null&&$n(Xr),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Jt(me),le(e),null;case 25:return null;case 30:return e.flags|=33554432,le(e),null}throw Error(o(156,e.tag))}function m1(n,e){switch(oc(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Jt(me),Te(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Xe(e),null;case 31:if(e.memoizedState!==null){if(nt(e),e.alternate===null)throw Error(o(340));Br()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(nt(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Br()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Mc(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return Te(),null;case 10:return Jt(e.type),null;case 22:case 23:return nt(e),bc(),n!==null&&$n(Xr),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Jt(me),null;case 25:return null;default:return null}}function Nd(n,e){switch(oc(e),e.tag){case 3:Jt(me),Te();break;case 26:case 27:case 5:Xe(e);break;case 4:Te();break;case 31:e.memoizedState!==null&&nt(e);break;case 13:nt(e);break;case 19:Mc(e);break;case 10:Jt(e.type);break;case 22:case 23:nt(e),bc(),n!==null&&$n(Xr);break;case 24:Jt(me)}}function Ai(n,e){try{var t=e.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&n)===n){r=void 0;var i=t.create,c=t.inst;r=i(),c.destroy=r}t=t.next}while(t!==l)}}catch(m){Pn(e,e.return,m)}}function vr(n,e,t){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var i=l.next;r=i;do{if((r.tag&n)===n){var c=r.inst,m=c.destroy;if(m!==void 0){c.destroy=void 0,l=e;var b=t,R=m;try{R()}catch(H){Pn(l,b,H)}}}r=r.next}while(r!==i)}}catch(H){Pn(e,e.return,H)}}function _d(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{vh(e,t)}catch(r){Pn(n,n.return,r)}}}function Rd(n,e,t){t.props=Ir(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(r){Pn(n,e,r)}}function Ct(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var r=n.stateNode;break;case 30:var l=n.stateNode,i=Vt(n.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=qm(i)),r=l.ref;break;case 7:if(n.stateNode===null){var c=new it(n);g(n.child,!1,lv,c,void 0,void 0),n.stateNode=c}r=n.stateNode;break;default:r=n.stateNode}typeof t=="function"?n.refCleanup=t(r):t.current=r}}catch(m){Pn(n,e,m)}}function De(n,e){var t=n.ref,r=n.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){Pn(n,e,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Pn(n,e,l)}else t.current=null}function Xu(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Qm(n.stateNode,e[t])}function Cd(n){for(var e=n.return;e!==null&&(to(e)&&Qm(n.stateNode,e.stateNode),!eo(e));)e=e.return}function Mi(n){for(var e=n.return;e!==null&&(to(e)&&iv(n.stateNode,e.stateNode),!eo(e));)e=e.return}function eo(n){return n.tag===5||n.tag===3||n.tag===27}function to(n){return n&&n.tag===7&&n.stateNode!==null}function ro(n){var e=n.type,t=n.memoizedProps,r=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break n;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){Pn(n,n.return,l)}}function lo(n,e,t){try{var r=n.stateNode;L1(r,n.type,t,e),r[Ve]=e}catch(l){Pn(n,n.return,l)}}function Dd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ar(n.type)||n.tag===4}function io(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Dd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ar(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uo(n,e,t,r){var l=n.tag;if(l===5||l===6)l=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(l,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(l),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Nt)),Xu(n,r),In=!0;else if(l!==4&&(l===27&&(Xu(n,r),r=null,Ar(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(uo(n,e,t,r),n=n.sibling;n!==null;)uo(n,e,t,r),n=n.sibling}function Vu(n,e,t,r){var l=n.tag;if(l===5||l===6)l=n.stateNode,e?t.insertBefore(l,e):t.appendChild(l),Xu(n,r),In=!0;else if(l!==4&&(l===27&&(Xu(n,r),r=null,Ar(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(Vu(n,e,t,r),n=n.sibling;n!==null;)Vu(n,e,t,r),n=n.sibling}function zd(n){var e=n.stateNode,t=n.memoizedProps;try{for(var r=n.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);ze(e,r,t),e[Ne]=n,e[Ve]=t}catch(i){Pn(n,n.return,i)}}var Ku=!1,et=null;function wd(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(Ku=!0)}var Dt=null;function Hd(){var n=Dt;return Dt=null,n}var Ze=0;function bl(n,e,t,r,l){return Ze=0,Ud(n.child,e,t,r,l)}function Ud(n,e,t,r,l){for(var i=!1;n!==null;){if(n.tag===5){var c=n.stateNode;if(r!==null){var m=Vo(c);r.push(m),m.view&&(i=!0)}else i||Vo(c).view&&(i=!0);Ku=!0,Hm(c,Ze===0?e:e+"_"+Ze,t),Ze++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&l||Ud(n.child,e,t,r,l)&&(i=!0));n=n.sibling}return i}function zt(n,e){for(;n!==null;)n.tag===5?Um(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||zt(n.child,e)),n=n.sibling}function Zu(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Zu(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(o(544));var t=e.name;e=Kt(e.default,e.share),e!=="none"&&(bl(n,t,e,null,!1)||zt(n.child,!1))}n=n.sibling}}function ao(n,e){if(n.tag===30){var t=n.stateNode,r=n.memoizedProps,l=Vt(r,t),i=Kt(r.default,t.paired?r.share:r.enter);i!=="none"?bl(n,l,i,null,!1)?(Zu(n),t.paired||e||Dl(n,r.onEnter)):zt(n.child,!1):Zu(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)ao(n,e),n=n.sibling;else Zu(n)}function co(n){if(et!==null&&et.size!==0){var e=et;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,r=t.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var i=Kt(t.default,t.share);if(i!=="none"&&(bl(n,r,i,null,!1)?(i=n.stateNode,l.paired=i,i.paired=l,Dl(n,t.onShare)):zt(n.child,!1)),e.delete(r),e.size===0)break}}}co(n)}n=n.sibling}}}function oo(n){if(n.tag===30){var e=n.memoizedProps,t=Vt(e,n.stateNode),r=et!==null?et.get(t):void 0,l=Kt(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(bl(n,t,l,null,!1)?r!==void 0?(l=n.stateNode,r.paired=l,l.paired=r,et.delete(t),Dl(n,e.onShare)):Dl(n,e.onExit):zt(n.child,!1)),et!==null&&co(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)oo(n),n=n.sibling;else et!==null&&co(n)}function qd(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=Vt(e,n.stateNode);e=Kt(e.default,e.update),n.flags&=-5,e!=="none"&&bl(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&qd(n);n=n.sibling}}function fo(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,zt(n.child,!1))}fo(n)}n=n.sibling}}function Fu(n){if(n.tag===30)n.stateNode.paired=null,zt(n.child,!1),fo(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Fu(n),n=n.sibling;else fo(n)}function jd(n){for(n=n.child;n!==null;)n.tag===30?zt(n.child,!1):(n.subtreeFlags&33554432)!==0&&jd(n),n=n.sibling}function so(n,e,t,r,l,i,c){for(var m=!1;e!==null;){if(e.tag===5){var b=e.stateNode;if(i!==null&&Ze<i.length){var R=i[Ze],H=Vo(b);(R.view||H.view)&&(m=!0);var X;if(X=(n.flags&4)===0)if(H.clip)X=!0;else{X=R.rect;var N=H.rect;X=X.y!==N.y||X.x!==N.x||X.height!==N.height||X.width!==N.width}X&&(n.flags|=4),H.abs?H=!R.abs:(R=R.rect,H=H.rect,H=R.height!==H.height||R.width!==H.width),H&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Hm(b,Ze===0?t:t+"_"+Ze,l),m&&(n.flags&4)!==0||(Dt===null&&(Dt=[]),Dt.push(b,Ze===0?r:r+"_"+Ze,e.memoizedProps)),Ze++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c?n.flags|=e.flags&32:so(n,e.child,t,r,l,i,c)&&(m=!0));e=e.sibling}return m}function Bd(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,r=n.stateNode,l=Vt(t,r),i=Kt(t.default,t.update),c;c=n.memoizedState,n.memoizedState=null,r=n;var m=n.child;Ze=0,l=so(r,m,l,l,i,c,!1),(n.flags&4)!==0&&l&&Dl(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&Bd(n);n=n.sibling}}var Me=!1,kn=!1,wt=!1,ho=!1,Yd=typeof WeakSet=="function"?WeakSet:Set,Oe=null,Ht=!1,Oi=!1,Iu=!1,mo=!1;function y1(n,e,t){if(n=n.containerInfo,Yo=Gl,n=Xs(n),Pa(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else n:{r=(r=n.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var i=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break n}var m=0,b=-1,R=-1,H=0,X=0,N=n,z=null;e:for(;;){for(var nn;N!==r||i!==0&&N.nodeType!==3||(b=m+i),N!==c||l!==0&&N.nodeType!==3||(R=m+l),N.nodeType===3&&(m+=N.nodeValue.length),(nn=N.firstChild)!==null;)z=N,N=nn;for(;;){if(N===n)break e;if(z===r&&++H===i&&(b=m),z===c&&++X===l&&(R=m),(nn=N.nextSibling)!==null)break;N=z,z=N.parentNode}N=nn}r=b===-1||R===-1?null:{start:b,end:R}}else r=null}r=r||{start:0,end:0}}else r=null;for(Lo={focusedElem:n,selectionRange:r},Gl=!1,t=(t&335544064)===t,Oe=e,e=t?9270:1024;Oe!==null;){if(n=Oe,t&&(r=n.deletions,r!==null))for(i=0;i<r.length;i++)t&&oo(r[i]);if(n.alternate===null&&(n.flags&2)!==0)t&&wd(n),Ju(t);else{if(n.tag===22){if(r=n.alternate,n.memoizedState!==null){r!==null&&r.memoizedState===null&&t&&oo(r),Ju(t);continue}else if(r!==null&&r.memoizedState!==null){t&&wd(n),Ju(t);continue}}r=n.child,(n.subtreeFlags&e)!==0&&r!==null?(r.return=n,Oe=r):(t&&qd(n),Ju(t))}}et=null}function Ju(n){for(;Oe!==null;){var e=Oe,t=n,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){t=void 0,l=r.memoizedProps,r=r.memoizedState;var i=e.stateNode;try{var c=Ir(e.type,l);t=i.getSnapshotBeforeUpdate(c,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(m){Pn(e,e.return,m)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,t=r.nodeType,t===9)Fo(r);else if(t===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Fo(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&r!==null&&(t=Vt(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=Kt(l.default,l.update),l!=="none"&&bl(r,t,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(o(163))}if(r=e.sibling,r!==null){r.return=e.return,Oe=r;break}Oe=e.return}}function Ld(n,e,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(n,t),r&4&&Ai(5,t);break;case 1:if(Ut(n,t),r&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(c){Pn(t,t.return,c)}else{var l=Ir(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(l,e,n.__reactInternalSnapshotBeforeUpdate)}catch(c){Pn(t,t.return,c)}}r&64&&_d(t),r&512&&Ct(t,t.return);break;case 3:if(Ut(n,t),r&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{vh(n,e)}catch(c){Pn(t,t.return,c)}}break;case 27:e===null&&r&4&&zd(t);case 26:case 5:Ut(n,t),e===null&&r&4&&ro(t),r&512&&Ct(t,t.return);break;case 12:Ut(n,t);break;case 31:Ut(n,t),r&4&&Vd(n,t);break;case 13:Ut(n,t),r&4&&Kd(n,t),r&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=N1.bind(null,t),cv(n,t))));break;case 22:if(r=t.memoizedState!==null||Me,!r){var i=e!==null&&e.memoizedState!==null||kn;e=Me,l=kn,Me=r,(kn=i)&&!l?(r=2,(t.subtreeFlags&8772)!==0&&(r|=1),Tt(n,t,r)):Ut(n,t),Me=e,kn=l}break;case 30:Ut(n,t),r&512&&Ct(t,t.return);break;case 7:r&512&&Ct(t,t.return);default:Ut(n,t)}}function yo(n,e){for(n=n.child;n!==null;)Gd(n,e),n=n.sibling}function Gd(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var r=t.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=n.stateNode,i=n.memoizedProps.style,c=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(b){Pn(n,n.return,b)}go(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,In=!0}catch(b){Pn(n,n.return,b)}break;case 18:try{var m=n.stateNode;e?wm(m,!0):wm(n.stateNode,!1)}catch(b){Pn(n,n.return,b)}break;case 22:case 23:n.memoizedState===null&&yo(n,e);break;default:yo(n,e)}}function go(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,r=e;switch(t.tag){case 4:Gd(t,r);break n;case 22:t.memoizedState===null&&go(t,r);break n;default:go(t,r)}}n=n.sibling}}function Qd(n){var e=n.alternate;e!==null&&(n.alternate=null,Qd(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&nu(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ce=null,Fe=!1;function Et(n,e,t){for(t=t.child;t!==null;)Xd(n,e,t),t=t.sibling}function Xd(n,e,t){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(pt,t)}catch{}switch(t.tag){case 26:kn||De(t,e),Et(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!kn&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:kn||De(t,e),Mi(t);var r=ce,l=Fe;Ar(t.type)&&(ce=t.stateNode,Fe=!1),Et(n,e,t),Fm(t.stateNode,t.type,t.memoizedProps),ce=r,Fe=l;break;case 5:kn||De(t,e),Mi(t);case 6:if(t.tag===6&&Mi(t),r=ce,l=Fe,ce=null,Et(n,e,t),ce=r,Fe=l,ce!==null)if(Fe)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(t.stateNode),In=!0}catch(i){Pn(t,e,i)}else try{ce.removeChild(t.stateNode),In=!0}catch(i){Pn(t,e,i)}break;case 18:ce!==null&&(Fe?(n=ce,zm(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Ql(n)):zm(ce,t.stateNode));break;case 4:r=ce,l=Fe,ce=t.stateNode.containerInfo,Fe=!0,Et(n,e,t),ce=r,Fe=l;break;case 0:case 11:case 14:case 15:vr(2,t,e),kn||vr(4,t,e),Et(n,e,t);break;case 1:kn||(De(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"&&Rd(t,e,r)),Et(n,e,t);break;case 21:Et(n,e,t);break;case 22:kn=(r=kn)||t.memoizedState!==null,Et(n,e,t),kn=r;break;case 30:De(t,e),Et(n,e,t);break;case 7:kn||De(t,e),Et(n,e,t);break;default:Et(n,e,t)}}function Vd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ql(n)}catch(t){Pn(e,e.return,t)}}}function Kd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ql(n)}catch(t){Pn(e,e.return,t)}}function g1(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Yd),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Yd),e;default:throw Error(o(435,n.tag))}}function $u(n,e){var t=g1(n);e.forEach(function(r){if(!t.has(r)){t.add(r);var l=_1.bind(null,n,r);r.then(l,l)}})}function Le(n,e,t){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var i=r[l],c=n,m=e,b=m;n:for(;b!==null;){switch(b.tag){case 27:if(Ar(b.type)){ce=b.stateNode,Fe=!1;break n}break;case 5:ce=b.stateNode,Fe=!1;break n;case 3:case 4:ce=b.stateNode.containerInfo,Fe=!0;break n}b=b.return}if(ce===null)throw Error(o(160));Xd(c,m,i),ce=null,Fe=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Zd(e,n,t),e=e.sibling}var St=null;function Zd(n,e,t){var r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=n.updateQueue,r=r!==null?r.events:null,r!==null))for(var i=0;i<r.length;i++){var c=r[i];c.ref.impl=c.nextImpl}Le(e,n,t),Ge(n),l&4&&(vr(3,n,n.return),Ai(3,n),vr(5,n,n.return));break;case 1:Le(e,n,t),Ge(n),l&512&&(kn||r===null||De(r,r.return)),l&64&&Me&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(i=St,Le(e,n,t),Ge(n),l&512&&(kn||r===null||De(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,t=n.memoizedState,r===null)if(t===null)if(n.stateNode===null)if(Me)n.stateNode=Rm(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,l=i.ownerDocument||i;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Wl]||r[Ne]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),ze(r,e,t),r[Ne]=n,be(r),e=r;break n;case"link":if(i=Pm("link","href",l).get(e+(t.href||""))){for(c=0;c<i.length;c++)if(r=i[c],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(c,1);break e}}r=l.createElement(e),ze(r,e,t),l.head.appendChild(r);break;case"meta":if(i=Pm("meta","content",l).get(e+(t.content||""))){for(c=0;c<i.length;c++)if(r=i[c],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(c,1);break e}}r=l.createElement(e),ze(r,e,t),l.head.appendChild(r);break;default:throw Error(o(468,e))}r[Ne]=n,be(r),e=r}n.stateNode=e}else Me||nf(i,n.type,n.stateNode);else n.stateNode=Wm(i,t,n.memoizedProps);else l!==t?(l===null?(e=r.stateNode,e===null||kn||e.parentNode.removeChild(e)):l.count--,t===null?Me||nf(i,n.type,n.stateNode):Wm(i,t,n.memoizedProps)):t===null&&n.stateNode!==null&&lo(n,n.memoizedProps,r.memoizedProps);break;case 27:Le(e,n,t),Ge(n),l&512&&(kn||r===null||De(r,r.return)),r!==null&&l&4&&lo(n,n.memoizedProps,r.memoizedProps);break;case 5:if(i=wt,wt=!1,Le(e,n,t),wt=i,Ge(n),l&512&&(kn||r===null||De(r,r.return)),n.flags&32){e=n.stateNode;try{il(e,""),In=!0}catch(H){Pn(n,n.return,H)}}l&4&&n.stateNode!=null&&(e=n.memoizedProps,lo(n,e,r!==null?r.memoizedProps:e)),l&1024&&(ho=!0);break;case 6:if(Le(e,n,t),Ge(n),l&4){if(n.stateNode===null)throw Error(o(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,In=!0}catch(H){Pn(n,n.return,H)}}break;case 3:if(In=!1,sa=null,i=St,St=Ui(e.containerInfo),Le(e,n,t),St=i,Ge(n),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ql(e.containerInfo)}catch(H){Pn(n,n.return,H)}ho&&(ho=!1,Fd(n)),In=!1;break;case 4:l=wt,wt=Me,r=ds(),i=St,St=Ui(n.stateNode.containerInfo),Le(e,n,t),Ge(n),St=i,In&&Oi&&(Iu=!0),In=r,wt=l;break;case 12:Le(e,n,t),Ge(n);break;case 31:Le(e,n,t),Ge(n),l&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,$u(n,e)));break;case 13:Le(e,n,t),Ge(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Pu=K()),l&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,$u(n,e)));break;case 22:i=n.memoizedState!==null,c=r!==null&&r.memoizedState!==null;var m=Me,b=kn,R=wt;Me=m||i,wt=R||i,kn=b||c,Le(e,n,t),kn=b,wt=R,Me=m,Ge(n),l&8192&&(e=n.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||r===null||c||Me||kn||(e=c||kn,t=Me,r=kn,Me=i||Me,kn=e,pr(n,2),Me=t,kn=r),!i&&wt||yo(n,i)),l&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,$u(n,t))));break;case 19:Le(e,n,t),Ge(n),l&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,$u(n,e)));break;case 30:l&512&&(kn||r===null||De(r,r.return)),l=ds(),i=Oi,c=(t&335544064)===t,m=n.memoizedProps,Oi=c&&Kt(m.default,m.update)!=="none",Le(e,n,t),Ge(n),c&&r!==null&&In&&(n.flags|=4),Oi=i,In=l;break;case 21:break;case 7:l&512&&(kn||r===null||De(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=n);default:Le(e,n,t),Ge(n)}}function Ge(n){var e=n.flags;if(e&2){try{for(var t,r=n.return;r!==null;){if(Dd(r)){t=r;break}r=r.return}r=null;for(var l=n.return;l!==null;){if(to(l)){var i=l.stateNode;r===null?r=[i]:r.push(i)}if(eo(l))break;l=l.return}var c=r;if(t==null)throw Error(o(160));switch(t.tag){case 27:var m=t.stateNode,b=io(n);Vu(n,b,m,c);break;case 5:var R=t.stateNode;t.flags&32&&(il(R,""),t.flags&=-33);var H=io(n);Vu(n,H,R,c);break;case 3:case 4:var X=t.stateNode.containerInfo,N=io(n);uo(n,N,X,c);break;default:throw Error(o(161))}}catch(z){Pn(n,n.return,z)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Fd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Fd(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Gl=!0,e.reset(),Gl=!1),n=n.sibling}}function Al(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Id(e,n),e=e.sibling;else Bd(e)}function Id(n,e){var t=n.alternate;if(t===null)ao(n,!1);else switch(n.tag){case 3:if(mo=Ht=!1,Hd(),Al(e,n),!Ht&&!Iu){if(n=Dt,n!==null)for(var r=0;r<n.length;r+=3){t=n[r];var l=n[r+1];Um(t,n[r+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),mo=!0}Dt=null;break;case 5:Al(e,n);break;case 4:r=Ht,Ht=!1,Al(e,n),Ht&&(Iu=!0),Ht=r;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?ao(n,!1):Al(e,n));break;case 30:r=Ht,l=Hd(),Ht=!1,Al(e,n),Ht&&(n.flags|=4);var i=n.memoizedProps,c=n.stateNode;e=Vt(i,c),c=Vt(t.memoizedProps,c);var m=Kt(i.default,i.update);m==="none"?e=!1:(i=t.memoizedState,t.memoizedState=null,t=n.child,Ze=0,e=so(n,t,e,c,m,i,!0),Ze!==(i===null?0:i.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(Dl(n,n.memoizedProps.onUpdate),Dt=l):l!==null&&(l.push.apply(l,Dt),Dt=l),Ht=(n.flags&32)!==0?!0:r;break;default:Al(e,n)}}function Ut(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ld(n,e.alternate,e),e=e.sibling}function pr(n,e){for(n=n.child;n!==null;){var t=n,r=e;switch(t.tag){case 0:case 11:case 14:case 15:vr(4,t,t.return),pr(t,r);break;case 1:De(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Rd(t,t.return,l),pr(t,r);break;case 27:(r&2)!==0&&Fm(t.stateNode,t.type,t.memoizedProps);case 5:De(t,t.return),t.tag!==5&&t.tag!==27||Mi(t),pr(t,r);break;case 6:Mi(t);break;case 26:De(t,t.return),l=t.stateNode,t.memoizedState!==null||l===null||kn||l.parentNode.removeChild(l),pr(t,r);break;case 22:t.memoizedState===null&&pr(t,r);break;case 30:De(t,t.return),pr(t,r);break;case 7:De(t,t.return);default:pr(t,r)}n=n.sibling}}function Tt(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var r=e.alternate,l=n,i=e,c=i.flags,m=(t&1)!==0;switch(i.tag){case 0:case 11:case 15:Tt(l,i,t),Ai(4,i);break;case 1:if(Tt(l,i,t),r=i,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(H){Pn(r,r.return,H)}if(r=i,l=r.updateQueue,l!==null){var b=r.stateNode;try{var R=l.shared.hiddenCallbacks;if(R!==null)for(l.shared.hiddenCallbacks=null,l=0;l<R.length;l++)gh(R[l],b)}catch(H){Pn(r,r.return,H)}}m&&c&64&&_d(i),Ct(i,i.return);break;case 27:(t&2)!==0&&zd(i);case 5:i.tag!==5&&i.tag!==27||Cd(i),Tt(l,i,t),m&&r===null&&c&4&&ro(i),Ct(i,i.return);break;case 6:Cd(i);break;case 26:b=i.stateNode,i.memoizedState!==null||b===null||Me||nf(Ui(b.ownerDocument),i.type,b),Tt(l,i,t),m&&r===null&&c&4&&ro(i),Ct(i,i.return);break;case 12:Tt(l,i,t);break;case 31:Tt(l,i,t),m&&c&4&&Vd(l,i);break;case 13:Tt(l,i,t),m&&c&4&&Kd(l,i);break;case 22:i.memoizedState===null&&Tt(l,i,t),Ct(i,i.return);break;case 30:Tt(l,i,t),Ct(i,i.return);break;case 7:Ct(i,i.return);default:Tt(l,i,t)}e=e.sibling}}function vo(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&si(t))}function po(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&si(n))}function mt(n,e,t,r){var l=(t&335544064)===t;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)Jd(n,e,t,r),e=e.sibling;else l&&jd(e)}function Jd(n,e,t,r){var l=(t&335544064)===t;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Fu(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:mt(n,e,t,r),i&2048&&Ai(9,e);break;case 1:mt(n,e,t,r);break;case 3:mt(n,e,t,r),l&&mo&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&si(i)));break;case 12:if(i&2048){mt(n,e,t,r),i=e.stateNode;try{var c=e.memoizedProps,m=c.id,b=c.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(R){Pn(e,e.return,R)}}else mt(n,e,t,r);break;case 31:mt(n,e,t,r);break;case 13:mt(n,e,t,r);break;case 23:break;case 22:c=e.stateNode,m=e.alternate,e.memoizedState!==null?(l&&m!==null&&m.memoizedState===null&&Fu(m),c._visibility&2?mt(n,e,t,r):Ni(n,e)):(l&&m!==null&&m.memoizedState!==null&&Fu(e),c._visibility&2?mt(n,e,t,r):(c._visibility|=2,Ml(n,e,t,r,(e.subtreeFlags&10256)!==0||!1))),i&2048&&vo(m,e);break;case 24:mt(n,e,t,r),i&2048&&po(e.alternate,e);break;case 30:l&&(i=e.alternate,i!==null&&(zt(i.child,!0),zt(e.child,!0))),mt(n,e,t,r);break;default:mt(n,e,t,r)}}function Ml(n,e,t,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=n,c=e,m=t,b=r,R=c.flags;switch(c.tag){case 0:case 11:case 15:Ml(i,c,m,b,l),Ai(8,c);break;case 23:break;case 22:var H=c.stateNode;c.memoizedState!==null?H._visibility&2?Ml(i,c,m,b,l):Ni(i,c):(H._visibility|=2,Ml(i,c,m,b,l)),l&&R&2048&&vo(c.alternate,c);break;case 24:Ml(i,c,m,b,l),l&&R&2048&&po(c.alternate,c);break;default:Ml(i,c,m,b,l)}e=e.sibling}}function Ni(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,r=e,l=r.flags;switch(r.tag){case 22:Ni(t,r),l&2048&&vo(r.alternate,r);break;case 24:Ni(t,r),l&2048&&po(r.alternate,r);break;default:Ni(t,r)}e=e.sibling}}var Jr=8192;function $r(n,e,t){if(n.subtreeFlags&Jr)for(n=n.child;n!==null;)$d(n,e,t),n=n.sibling}function $d(n,e,t){switch(n.tag){case 26:$r(n,e,t),n.flags&Jr&&(n.memoizedState!==null?Tv(t,St,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&ry(t,n)));break;case 5:$r(n,e,t),n.flags&Jr&&(n=n.stateNode,(e&335544128)===e&&ry(t,n));break;case 3:case 4:var r=St;St=Ui(n.stateNode.containerInfo),$r(n,e,t),St=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Jr,Jr=16777216,$r(n,e,t),Jr=r):$r(n,e,t));break;case 30:if((n.flags&Jr)!==0&&(r=n.memoizedProps.name,r!=null&&r!=="auto")){var l=n.stateNode;l.paired=null,et===null&&(et=new Map),et.set(r,l)}$r(n,e,t);break;default:$r(n,e,t)}}function kd(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function _i(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var r=e[t];Oe=r,Pd(r,n)}kd(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wd(n),n=n.sibling}function Wd(n){switch(n.tag){case 0:case 11:case 15:_i(n),n.flags&2048&&vr(9,n,n.return);break;case 3:_i(n);break;case 12:_i(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,ku(n)):_i(n);break;default:_i(n)}}function ku(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var r=e[t];Oe=r,Pd(r,n)}kd(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:vr(8,e,e.return),ku(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,ku(e));break;default:ku(e)}n=n.sibling}}function Pd(n,e){for(;Oe!==null;){var t=Oe;switch(t.tag){case 0:case 11:case 15:vr(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:si(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Oe=r;else n:for(t=n;Oe!==null;){r=Oe;var l=r.sibling,i=r.return;if(Qd(r),r===t){Oe=null;break n}if(l!==null){l.return=i,Oe=l;break n}Oe=i}}}var v1={getCacheForType:function(n){var e=_e(me),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return _e(me).controller.signal}},p1=typeof WeakMap=="function"?WeakMap:Map,Jn=0,te=null,Yn=null,Gn=0,Wn=0,tt=null,xr=!1,Ol=!1,xo=!1,nr=0,he=0,Er=0,kr=0,Wu=0,rt=0,Nl=0,Ri=null,Ie=null,Eo=!1,Pu=0,nm=0,na=1/0,ea=null,Sr=null,fe=0,bt=null,Wr=null,qt=0,So=0,To=null,em=null,_l=null,Rl=null,Cl=null,Ci=0,ta=null;function lt(){return(Jn&2)!==0&&Gn!==0?Gn&-Gn:en.T!==null?zo():ls()}function tm(){if(rt===0)if((Gn&536870912)===0||Bn){var n=$i;$i<<=1,($i&3932160)===0&&($i=262144),rt=n}else rt=536870912;return n=Re.current,n!==null&&(n.flags|=32),rt}function Dl(n,e){if(e!=null){var t=n.stateNode,r=t.ref;r===null&&(r=t.ref=qm(Vt(n.memoizedProps,t))),Rl===null&&(Rl=[]),Rl.push(e.bind(null,r))}}function Je(n,e,t){(n===te&&(Wn===2||Wn===9)||n.cancelPendingCommit!==null)&&(zl(n,0),Tr(n,Gn,rt,!1)),kl(n,t),((Jn&2)===0||n!==te)&&(n===te&&((Jn&2)===0&&(kr|=t),he===4&&Tr(n,Gn,rt,!1)),jt(n))}function rm(n,e,t){if((Jn&6)!==0)throw Error(o(327));var r=!t&&(e&127)===0&&(e&n.expiredLanes)===0||$l(n,e),l=r?S1(n,e):Ao(n,e,!0),i=r;do{if(l===0){Ol&&!r&&Tr(n,e,0,!1);break}else{if(t=n.current.alternate,i&&!x1(t)){l=Ao(n,e,!1),i=!1;continue}if(l===2){if(i=e,n.errorRecoveryDisabledLanes&i)var c=0;else c=n.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;n:{var m=n;l=Ri;var b=m.current.memoizedState.isDehydrated;if(b&&(zl(m,c).flags|=256),c=Ao(m,c,!1),c!==2&&c!==6){if(xo&&!b){m.errorRecoveryDisabledLanes|=i,kr|=i,l=4;break n}i=Ie,Ie=l,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){zl(n,0),Tr(n,e,0,!0);break}n:{switch(r=n,i=l,i){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Tr(r,e,rt,!xr);break n;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Pu+300-K(),10<l)){if(Tr(r,e,rt,!xr),Wi(r,0,!0)!==0)break n;qt=e,r.timeoutHandle=Xo(lm.bind(null,r,t,Ie,ea,Eo,e,rt,kr,Nl,xr,i,"Throttled",-0,0),l);break n}lm(r,t,Ie,ea,Eo,e,rt,kr,Nl,xr,i,null,-0,0)}}break}while(!0);jt(n)}function lm(n,e,t,r,l,i,c,m,b,R,H,X,N,z){n.timeoutHandle=-1;var nn=e.subtreeFlags,yn=(i&335544064)===i;if(X=null,(yn||nn&8192||(nn&16785408)===16785408)&&(X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt},et=null,$d(e,i,X),yn&&(nn=X,yn=n.containerInfo,yn=(yn.nodeType===9?yn:yn.ownerDocument).__reactViewTransition,yn!=null&&(nn.count++,nn.waitingForViewTransition=!0,nn=Bi.bind(nn),yn.finished.then(nn,nn))),nn=(i&62914560)===i?Pu-K():(i&4194048)===i?nm-K():0,nn=bv(X,nn),nn!==null)){qt=i,n.cancelPendingCommit=nn(hm.bind(null,n,e,i,t,r,l,c,m,b,R,H,X,null,N,z)),Tr(n,i,c,!R);return}hm(n,e,i,t,r,l,c,m,b,R,H,X)}function x1(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Pe(i(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tr(n,e,t,r){e=Pf(n,e),e&=~Wu,e&=~kr,n.suspendedLanes|=e,n.pingedLanes&=~e,r&&(n.warmLanes|=e),r=n.expirationTimes;for(var l=e;0<l;){var i=31-ke(l),c=1<<i;r[i]=-1,l&=~c}t!==0&&es(n,t,e)}function ra(){return(Jn&6)===0?(Di(0),!1):!0}function bo(){if(Yn!==null){if(Wn===0)var n=Yn.return;else n=Yn,It=Yr=null,Cc(n),pl=null,mi=0,n=Yn;for(;n!==null;)Nd(n.alternate,n),n=n.return;Yn=null}}function zl(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,X1(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),qt=0,bo(),te=n,Yn=t=Zt(n.current,null),Gn=e,Wn=0,tt=null,xr=!1,Ol=$l(n,e),xo=!1,Nl=rt=Wu=kr=Er=he=0,Ie=Ri=null,Eo=!1,nr=Pf(n,e),su(),t}function im(n,e){Hn=null,en.H=qu,e===vl||e===Tu?(e=hh(),Wn=3):e===vc?(e=hh(),Wn=4):Wn=e===Kc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,tt=e,Yn===null&&(he=1,ju(n,ft(e,n.current)))}function um(){var n=Re.current;return n===null?!0:(Gn&4194048)===Gn?qe===null:(Gn&62914560)===Gn||(Gn&536870912)!==0?n===qe:!1}function am(){var n=en.H;return en.H=qu,n===null?qu:n}function cm(){var n=en.A;return en.A=v1,n}function la(){he=4,xr||(Gn&4194048)!==Gn&&Re.current!==null||(Ol=!0),(Er&134217727)===0&&(kr&134217727)===0||te===null||Tr(te,Gn,rt,!1)}function Ao(n,e,t){var r=Jn;Jn|=2;var l=am(),i=cm();(te!==n||Gn!==e)&&(ea=null,zl(n,e)),e=!1;var c=he;n:do try{if(Wn!==0&&Yn!==null){var m=Yn,b=tt;switch(Wn){case 8:bo(),c=6;break n;case 3:case 2:case 9:case 6:Re.current===null&&(e=!0);var R=Wn;if(Wn=0,tt=null,wl(n,m,b,R),t&&Ol){c=0;break n}break;default:R=Wn,Wn=0,tt=null,wl(n,m,b,R)}}E1(),c=he;break}catch(H){im(n,H)}while(!0);return e&&n.shellSuspendCounter++,It=Yr=null,Jn=r,en.H=l,en.A=i,Yn===null&&(te=null,Gn=0,su()),c}function E1(){for(;Yn!==null;)om(Yn)}function S1(n,e){var t=Jn;Jn|=2;var r=am(),l=cm();te!==n||Gn!==e?(ea=null,na=K()+500,zl(n,e)):Ol=$l(n,e);n:do try{if(Wn!==0&&Yn!==null){e=Yn;var i=tt;e:switch(Wn){case 1:Wn=0,tt=null,wl(n,e,i,1);break;case 2:case 9:if(fh(i)){Wn=0,tt=null,fm(e);break}e=function(){Wn!==2&&Wn!==9||te!==n||(Wn=7),jt(n)},i.then(e,e);break n;case 3:Wn=7;break n;case 4:Wn=5;break n;case 7:fh(i)?(Wn=0,tt=null,fm(e)):(Wn=0,tt=null,wl(n,e,i,7));break;case 5:var c=null;switch(Yn.tag){case 26:c=Yn.memoizedState;case 5:case 27:var m=Yn;if(c?ey(c):m.stateNode.complete){Wn=0,tt=null;var b=m.sibling;if(b!==null)Yn=b;else{var R=m.return;R!==null?(Yn=R,ia(R)):Yn=null}break e}}Wn=0,tt=null,wl(n,e,i,5);break;case 6:Wn=0,tt=null,wl(n,e,i,6);break;case 8:bo(),he=6;break n;default:throw Error(o(462))}}T1();break}catch(H){im(n,H)}while(!0);return It=Yr=null,en.H=r,en.A=l,Jn=t,Yn!==null?0:(te=null,Gn=0,su(),he)}function T1(){for(;Yn!==null&&!Z();)om(Yn)}function om(n){var e=Md(n.alternate,n,nr);n.memoizedProps=n.pendingProps,e===null?ia(n):Yn=e}function fm(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=pd(t,e,e.pendingProps,e.type,void 0,Gn);break;case 11:e=pd(t,e,e.pendingProps,e.type.render,e.ref,Gn);break;case 5:Cc(e);var r=e;r===Ae&&(Bn?(vu(r),r.tag===5&&r.stateNode!=null&&(re=r.stateNode)):(vu(r),Bn=!0));default:Nd(t,e),e=Yn=Ps(e,nr),e=Md(t,e,nr)}n.memoizedProps=n.pendingProps,e===null?ia(n):Yn=e}function wl(n,e,t,r){It=Yr=null,Cc(e),pl=null,mi=0;var l=e.return;try{if(o1(n,l,e,t,Gn)){he=1,ju(n,ft(t,n.current)),Yn=null;return}}catch(i){if(l!==null)throw Yn=l,i;he=1,ju(n,ft(t,n.current)),Yn=null;return}e.flags&32768?(Bn||r===1?n=!0:Ol||(Gn&536870912)!==0?n=!1:(xr=n=!0,(r===2||r===9||r===3||r===6)&&(r=Re.current,r!==null&&r.tag===13&&(r.flags|=16384))),sm(e,n)):ia(e)}function ia(n){var e=n;do{if((e.flags&32768)!==0){sm(e,xr);return}n=e.return;var t=d1(e.alternate,e,nr);if(t!==null){Yn=t;return}if(e=e.sibling,e!==null){Yn=e;return}Yn=e=n}while(e!==null);he===0&&(he=5)}function sm(n,e){do{var t=m1(n.alternate,n);if(t!==null){t.flags&=32767,Yn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Yn=n;return}Yn=n=t}while(n!==null);he=6,Yn=null}function hm(n,e,t,r,l,i,c,m,b,R,H,X){n.cancelPendingCommit=null;do ua();while(fe!==0);if((Jn&6)!==0)throw Error(o(327));if(e!==null){if(e===n.current)throw Error(o(177));n===te&&(Yn=te=null,Gn=0),Wr=e,bt=n,qt=t,To=l,em=r,b1(n,e,t,c,m,b,X)}}function b1(n,e,t,r,l,i,c){var m=e.lanes|e.childLanes;if(So=m,m|=lc,J0(n,t,m,r,l,i),Rl=null,(t&335544064)===t?(Cl=kg(n),r=10262):(Cl=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(n.callbackNode=null,n.callbackPriority=0,R1(Sn,function(){return _o(),null})):(n.callbackNode=null,n.callbackPriority=0),Ku=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=en.T,en.T=null,l=vn.p,vn.p=2,i=Jn,Jn|=4;try{y1(n,e,t)}finally{Jn=i,vn.p=l,en.T=r}}fe=1,Ku?_l=J1(c,n.containerInfo,Cl,Mo,Oo,M1,No,_o,A1):(Mo(),Oo(),No())}function A1(n){if(fe!==0){var e=bt.onRecoverableError;e(n,{componentStack:null})}}function M1(){fe===3&&(fe=0,Id(Wr,bt),fe=4)}function Mo(){if(fe===1){fe=0;var n=bt,e=Wr,t=qt,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=en.T,en.T=null;var l=vn.p;vn.p=2;var i=Jn;Jn|=4;try{Oi=Iu=!1,Zd(e,n,t),t=Lo;var c=Xs(n.containerInfo),m=t.focusedElem,b=t.selectionRange;if(c!==m&&m&&m.ownerDocument&&Qs(m.ownerDocument.documentElement,m)){if(b!==null&&Pa(m)){var R=b.start,H=b.end;if(H===void 0&&(H=R),"selectionStart"in m)m.selectionStart=R,m.selectionEnd=Math.min(H,m.value.length);else{var X=m.ownerDocument||document,N=X&&X.defaultView||window;if(N.getSelection){var z=N.getSelection(),nn=m.textContent.length,yn=Math.min(b.start,nn),Un=b.end===void 0?yn:Math.min(b.end,nn);!z.extend&&yn>Un&&(c=Un,Un=yn,yn=c);var _=Gs(m,yn),A=Gs(m,Un);if(_&&A&&(z.rangeCount!==1||z.anchorNode!==_.node||z.anchorOffset!==_.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var C=X.createRange();C.setStart(_.node,_.offset),z.removeAllRanges(),yn>Un?(z.addRange(C),z.extend(A.node,A.offset)):(C.setEnd(A.node,A.offset),z.addRange(C))}}}}for(X=[],z=m;z=z.parentNode;)z.nodeType===1&&X.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<X.length;m++){var G=X[m];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Gl=!!Yo,Lo=Yo=null}finally{Jn=i,vn.p=l,en.T=r}}n.current=e,fe=2}}function Oo(){if(fe===2){fe=0;var n=bt,e=Wr,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=en.T,en.T=null;var r=vn.p;vn.p=2;var l=Jn;Jn|=4;try{Ld(n,e.alternate,e)}finally{Jn=l,vn.p=r,en.T=t}}fe=3}}function No(){if(fe===4||fe===3){fe=0;var n=_l;_l=null,J();var e=bt,t=Wr,r=qt,l=em,i=(r&335544064)===r?10262:10256;if((t.subtreeFlags&i)!==0||(t.flags&i)!==0?fe=5:(fe=0,Wr=bt=null,dm(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Sr=null),Ua(r),t=t.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(pt,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=en.T,i=vn.p,vn.p=2,en.T=null;try{for(var c=e.onRecoverableError,m=0;m<l.length;m++){var b=l[m];c(b.value,{componentStack:b.stack})}}finally{en.T=t,vn.p=i}}if(l=Rl,c=Cl,Cl=null,l!==null&&(Rl=null,c===null&&(c=[]),n!==null))for(b=0;b<l.length;b++)t=(0,l[b])(c),t!==void 0&&n.finished.finally(t);(qt&3)!==0&&ua(),jt(e),i=e.pendingLanes,(r&261930)!==0&&(i&42)!==0?e===ta?Ci++:(Ci=0,ta=e):(Ci=0,ta=null),Di(0)}}function dm(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,si(e)))}function ua(){return _l!==null&&(_l.skipTransition(),_l=null),Mo(),Oo(),No(),_o()}function _o(){if(fe!==5)return!1;var n=bt,e=So;So=0;var t=Ua(qt),r=en.T,l=vn.p;try{vn.p=32>t?32:t,en.T=null,t=To,To=null;var i=bt,c=qt;if(fe=0,Wr=bt=null,qt=0,(Jn&6)!==0)throw Error(o(331));var m=Jn;if(Jn|=4,Wd(i.current),Jd(i,i.current,c,t),Jn=m,Di(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(pt,i)}catch{}return!0}finally{vn.p=l,en.T=r,dm(n,e)}}function mm(n,e,t){e=ft(t,e),e=Vc(n.stateNode,e,2),n=dr(n,e,2),n!==null&&(kl(n,2),jt(n))}function Pn(n,e,t){if(n.tag===3)mm(n,n,t);else for(;e!==null;){if(e.tag===3){mm(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){n=ft(t,n),t=fd(2),r=dr(e,t,2),r!==null&&(sd(t,r,e,n),kl(r,2),jt(r));break}}e=e.return}}function Ro(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new p1;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(t)||(xo=!0,l.add(t),n=O1.bind(null,n,e,t),e.then(n,n))}function O1(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,te===n&&(Gn&t)===t&&((he===4||he===3&&(Gn&62914560)===Gn&&300>K()-Pu)&&(Jn&2)===0?zl(n,0):Wu|=t,Nl===Gn&&(Nl=0)),jt(n)}function ym(n,e){e===0&&(e=ns()),n=qr(n,e),n!==null&&(kl(n,e),jt(n))}function N1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ym(n,t)}function _1(n,e){var t=0;switch(n.tag){case 31:case 13:var r=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=n.stateNode;break;case 22:r=n.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(e),ym(n,t)}function R1(n,e){return D(n,e)}var Hl=null,Ul=null,Co=!1,aa=!1,Do=!1,br=0;function jt(n){n!==Ul&&n.next===null&&(Ul===null?Hl=Ul=n:Ul=Ul.next=n),aa=!0,Co||(Co=!0,D1())}function Di(n,e){if(!Do&&aa){Do=!0;do for(var t=!1,r=Hl;r!==null;){if(n!==0){var l=r.pendingLanes;if(l===0)var i=0;else{var c=r.suspendedLanes,m=r.pingedLanes;i=(1<<31-ke(42|n)+1)-1,i&=l&~(c&~m),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,xm(r,i))}else i=Gn,i=Wi(r,r===te?i:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(i&3)===0||$l(r,i)||(t=!0,xm(r,i));r=r.next}while(t);Do=!1}}function C1(){gm()}function gm(){aa=Co=!1;var n=0;br!==0&&Q1()&&(n=br);for(var e=K(),t=null,r=Hl;r!==null;){var l=r.next,i=vm(r,e);i===0?(r.next=null,t===null?Hl=l:t.next=l,l===null&&(Ul=t)):(t=r,(n!==0||(i&3)!==0)&&(aa=!0)),r=l}fe!==0&&fe!==5||Di(n),br!==0&&(br=0)}function vm(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var c=31-ke(i),m=1<<c,b=l[c];b===-1?((m&t)===0||(m&r)!==0)&&(l[c]=I0(m,e)):b<=e&&(n.expiredLanes|=m),i&=~m}if(e=te,t=Gn,t=Wi(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),r=n.callbackNode,t===0||n===e&&(Wn===2||Wn===9)||n.cancelPendingCommit!==null)return r!==null&&r!==null&&B(r),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||$l(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(r!==null&&B(r),Ua(t)){case 2:case 8:t=dn;break;case 32:t=Sn;break;case 268435456:t=Rn;break;default:t=Sn}return r=pm.bind(null,n),t=D(t,r),n.callbackPriority=e,n.callbackNode=t,e}return r!==null&&r!==null&&B(r),n.callbackPriority=2,n.callbackNode=null,2}function pm(n,e){if(fe!==0&&fe!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(ua()&&n.callbackNode!==t)return null;var r=Gn;return r=Wi(n,n===te?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),r===0?null:(rm(n,r,e),vm(n,K()),n.callbackNode!=null&&n.callbackNode===t?pm.bind(null,n):null)}function xm(n,e){if(ua())return null;rm(n,e,!0)}function D1(){V1(function(){(Jn&6)!==0?D($,C1):gm()})}function zo(){if(br===0){var n=Qr;n===0&&(n=Ji,Ji<<=1,(Ji&261888)===0&&(Ji=256)),br=n}return br}function Em(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ru(n)}function z1(n,e,t,r,l){if(e==="submit"&&t&&t.stateNode===l){var i=Em((l[Ve]||null).action),c=r.submitter;c&&(e=(e=c[Ve]||null)?Em(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var m=new au("action","action",null,r,l);n.push({event:m,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(br!==0){var b=new FormData(l,c);Yc(t,{pending:!0,data:b,method:l.method,action:i},null,b)}}else typeof i=="function"&&(m.preventDefault(),b=new FormData(l,c),Yc(t,{pending:!0,data:b,method:l.method,action:i},i,b))},currentTarget:l}]})}}for(var wo=0;wo<rc.length;wo++){var Ho=rc[wo],w1=Ho.toLowerCase(),H1=Ho[0].toUpperCase()+Ho.slice(1);xt(w1,"on"+H1)}xt(Zs,"onAnimationEnd"),xt(Fs,"onAnimationIteration"),xt(Is,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(Xg,"onTransitionRun"),xt(Vg,"onTransitionStart"),xt(Kg,"onTransitionCancel"),xt(Js,"onTransitionEnd"),rl("onMouseEnter",["mouseout","mouseover"]),rl("onMouseLeave",["mouseout","mouseover"]),rl("onPointerEnter",["pointerout","pointerover"]),rl("onPointerLeave",["pointerout","pointerover"]),wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wr("onBeforeInput",["compositionend","keypress","textInput","paste"]),wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zi));function Sm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],l=r.event;r=r.listeners;n:{var i=void 0;if(e)for(var c=r.length-1;0<=c;c--){var m=r[c],b=m.instance,R=m.currentTarget;if(m=m.listener,b!==i&&l.isPropagationStopped())break n;i=m,l.currentTarget=R;try{i(l)}catch(H){fu(H)}l.currentTarget=null,i=b}else for(c=0;c<r.length;c++){if(m=r[c],b=m.instance,R=m.currentTarget,m=m.listener,b!==i&&l.isPropagationStopped())break n;i=m,l.currentTarget=R;try{i(l)}catch(H){fu(H)}l.currentTarget=null,i=b}}}}function Ln(n,e){var t=e[us];t===void 0&&(t=e[us]=new Set);var r=n+"__bubble";t.has(r)||(Tm(e,n,2,!1),t.add(r))}function Uo(n,e,t){var r=0;e&&(r|=4),Tm(t,n,r,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function qo(n){if(!n[ca]){n[ca]=!0,os.forEach(function(t){t!=="selectionchange"&&(U1.has(t)||Uo(t,!1,n),Uo(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ca]||(e[ca]=!0,Uo("selectionchange",!1,e))}}function Tm(n,e,t,r){switch(sy(e)){case 2:var l=Nv;break;case 8:l=_v;break;default:l=tf}t=l.bind(null,e,t,n),l=void 0,!Xa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function jo(n,e,t,r,l){var i=r;if((e&1)===0&&(e&2)===0&&r!==null)n:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var m=r.stateNode.containerInfo;if(m===l)break;if(c===4)for(c=r.return;c!==null;){var b=c.tag;if((b===3||b===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;m!==null;){if(c=zr(m),c===null)return;if(b=c.tag,b===5||b===6||b===26||b===27){r=i=c;continue n}m=m.parentNode}}r=r.return}Ts(function(){var R=i,H=Ga(t),X=[];n:{var N=$s.get(n);if(N!==void 0){var z=au,nn=n;switch(n){case"keypress":if(iu(t)===0)break n;case"keydown":case"keyup":z=xg;break;case"focusin":nn="focus",z=Fa;break;case"focusout":nn="blur",z=Fa;break;case"beforeblur":case"afterblur":z=Fa;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Ag;break;case Zs:case Fs:case Is:z=fg;break;case Js:z=Og;break;case"scroll":case"scrollend":z=ig;break;case"wheel":z=_g;break;case"copy":case"cut":case"paste":z=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Ns;break;case"submit":z=Tg;break;case"toggle":case"beforetoggle":z=Cg}var yn=(e&4)!==0,Un=!yn&&(n==="scroll"||n==="scrollend"),_=yn?N!==null?N+"Capture":null:N;yn=[];for(var A=R,C;A!==null;){var G=A;if(C=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||C===null||_===null||(G=ni(A,_),G!=null&&yn.push(wi(A,G,C))),Un)break;A=A.return}0<yn.length&&(N=new z(N,nn,null,t,H),X.push({event:N,listeners:yn}))}}if((e&7)===0){n:{if(z=n==="mouseover"||n==="pointerover",N=n==="mouseout"||n==="pointerout",z&&t!==La&&(nn=t.relatedTarget||t.fromElement)&&(zr(nn)||nn[nl]))break n;(N||z)&&(nn=H.window===H?H:(z=H.ownerDocument)?z.defaultView||z.parentWindow:window,N?(z=t.relatedTarget||t.toElement,N=R,z=z?zr(z):null,z!==null&&(Un=y(z),yn=z.tag,z!==Un||yn!==5&&yn!==27&&yn!==6)&&(z=null)):(N=null,z=R),N!==z&&(yn=Ms,G="onMouseLeave",_="onMouseEnter",A="mouse",(n==="pointerout"||n==="pointerover")&&(yn=Ns,G="onPointerLeave",_="onPointerEnter",A="pointer"),Un=N==null?nn:Pl(N),C=z==null?nn:Pl(z),nn=new yn(G,A+"leave",N,t,H),nn.target=Un,nn.relatedTarget=C,G=null,zr(H)===R&&(yn=new yn(_,A+"enter",z,t,H),yn.target=C,yn.relatedTarget=Un,G=yn),Un=G,yn=N&&z?Zn(N,z,q1):null,N!==null&&bm(X,nn,N,yn,!1),z!==null&&Un!==null&&bm(X,Un,z,yn,!0)))}n:{if(N=R?Pl(R):window,z=N.nodeName&&N.nodeName.toLowerCase(),z==="select"||z==="input"&&N.type==="file")var on=Us;else if(ws(N))if(qs)on=Lg;else{on=Bg;var Qn=jg}else z=N.nodeName,!z||z.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?R&&Ya(R.elementType)&&(on=Us):on=Yg;if(on&&(on=on(n,R))){Hs(X,on,t,H);break n}Qn&&Qn(n,N,R)}switch(Qn=R?Pl(R):window,n){case"focusin":(ws(Qn)||Qn.contentEditable==="true")&&(ol=Qn,nc=R,ci=null);break;case"focusout":ci=nc=ol=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Vs(X,t,H);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":Vs(X,t,H)}var En;if(Ja)n:{switch(n){case"compositionstart":var On="onCompositionStart";break n;case"compositionend":On="onCompositionEnd";break n;case"compositionupdate":On="onCompositionUpdate";break n}On=void 0}else cl?Ds(n,t)&&(On="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(On="onCompositionStart");On&&(_s&&t.locale!=="ko"&&(cl||On!=="onCompositionStart"?On==="onCompositionEnd"&&cl&&(En=bs()):(lr=H,Va="value"in lr?lr.value:lr.textContent,cl=!0)),Qn=oa(R,On),0<Qn.length&&(On=new Os(On,n,null,t,H),X.push({event:On,listeners:Qn}),En?On.data=En:(En=zs(t),En!==null&&(On.data=En)))),(En=zg?wg(n,t):Hg(n,t))&&(On=oa(R,"onBeforeInput"),0<On.length&&(Qn=new Os("onBeforeInput","beforeinput",null,t,H),X.push({event:Qn,listeners:On}),Qn.data=En)),z1(X,n,R,t,H)}Sm(X,e)})}function wi(n,e,t){return{instance:n,listener:e,currentTarget:t}}function oa(n,e){for(var t=e+"Capture",r=[];n!==null;){var l=n,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=ni(n,t),l!=null&&r.unshift(wi(n,l,i)),l=ni(n,e),l!=null&&r.push(wi(n,l,i))),n.tag===3)return r;n=n.return}return[]}function q1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function bm(n,e,t,r,l){for(var i=e._reactName,c=[];t!==null&&t!==r;){var m=t,b=m.alternate,R=m.stateNode;if(m=m.tag,b!==null&&b===r)break;m!==5&&m!==26&&m!==27||R===null||(b=R,l?(R=ni(t,i),R!=null&&c.unshift(wi(t,R,b))):l||(R=ni(t,i),R!=null&&c.push(wi(t,R,b)))),t=t.return}c.length!==0&&n.push({event:e,listeners:c})}var j1=/\r\n?/g,B1=/\u0000|\uFFFD/g;function Am(n){return(typeof n=="string"?n:""+n).replace(j1,`
`).replace(B1,"")}function Mm(n,e){return e=Am(e),Am(n)===e}function ne(n,e,t,r,l,i){switch(t){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||il(n,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&il(n,""+r);else return;break;case"className":tu(n,"class",r);break;case"tabIndex":tu(n,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":tu(n,t,r);break;case"style":Es(n,r,i);return;case"data":if(e!=="object"){tu(n,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(t);break}r=ru(r),n.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(e!=="input"&&ne(n,e,"name",l.name,l,null),ne(n,e,"formEncType",l.formEncType,l,null),ne(n,e,"formMethod",l.formMethod,l,null),ne(n,e,"formTarget",l.formTarget,l,null)):(ne(n,e,"encType",l.encType,l,null),ne(n,e,"method",l.method,l,null),ne(n,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(t);break}r=ru(r),n.setAttribute(t,r);break;case"onClick":r!=null&&(n.onclick=Nt);return;case"onScroll":r!=null&&Ln("scroll",n);return;case"onScrollEnd":r!=null&&Ln("scrollend",n);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(o(60));(i!=null?i.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":n.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){n.removeAttribute("xlink:href");break}t=ru(r),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,r):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":r===!0?n.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,r):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?n.setAttribute(t,r):n.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?n.removeAttribute(t):n.setAttribute(t,r);break;case"popover":Ln("beforetoggle",n),Ln("toggle",n),eu(n,"popover",r);break;case"xlinkActuate":Qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Qt(n,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Qt(n,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Qt(n,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Qt(n,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":eu(n,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=rg.get(t)||t,eu(n,t,r);else return}In=!0}function Bo(n,e,t,r,l,i){switch(t){case"style":Es(n,r,i);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(o(60));(i!=null?i.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"children":if(typeof r=="string")il(n,r);else if(typeof r=="number"||typeof r=="bigint")il(n,""+r);else return;break;case"onScroll":r!=null&&Ln("scroll",n);return;case"onScrollEnd":r!=null&&Ln("scrollend",n);return;case"onClick":r!=null&&(n.onclick=Nt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!fs.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),i=t.slice(2,l?t.length-7:void 0),e=n[Ve]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(i,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(i,r,l);break n}In=!0,t in n?n[t]=r:r===!0?n.setAttribute(t,""):eu(n,t,r)}return}In=!0}function ze(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ln("error",n),Ln("load",n);var r=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var c=t[i];if(c!=null)switch(i){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:ne(n,e,i,c,t,null)}}l&&ne(n,e,"srcSet",t.srcSet,t,null),r&&ne(n,e,"src",t.src,t,null);return;case"input":Ln("invalid",n);var m=i=c=l=null,b=null,R=null;for(r in t)if(t.hasOwnProperty(r)){var H=t[r];if(H!=null)switch(r){case"name":l=H;break;case"type":c=H;break;case"checked":b=H;break;case"defaultChecked":R=H;break;case"value":i=H;break;case"defaultValue":m=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,e));break;default:ne(n,e,r,H,t,null)}}gs(n,i,m,b,R,c,l,!1);return;case"select":Ln("invalid",n),r=c=i=null;for(l in t)if(t.hasOwnProperty(l)&&(m=t[l],m!=null))switch(l){case"value":i=m;break;case"defaultValue":c=m;break;case"multiple":r=m;default:ne(n,e,l,m,t,null)}e=i,t=c,n.multiple=!!r,e!=null?ll(n,!!r,e,!1):t!=null&&ll(n,!!r,t,!0);return;case"textarea":Ln("invalid",n),i=l=r=null;for(c in t)if(t.hasOwnProperty(c)&&(m=t[c],m!=null))switch(c){case"value":r=m;break;case"defaultValue":l=m;break;case"children":i=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:ne(n,e,c,m,t,null)}ps(n,r,l,i);return;case"option":for(b in t)if(t.hasOwnProperty(b)&&(r=t[b],r!=null))switch(b){case"selected":n.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ne(n,e,b,r,t,null)}return;case"dialog":Ln("beforetoggle",n),Ln("toggle",n),Ln("cancel",n),Ln("close",n);break;case"iframe":case"object":Ln("load",n);break;case"video":case"audio":for(r=0;r<zi.length;r++)Ln(zi[r],n);break;case"image":Ln("error",n),Ln("load",n);break;case"details":Ln("toggle",n);break;case"embed":case"source":case"link":Ln("error",n),Ln("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in t)if(t.hasOwnProperty(R)&&(r=t[R],r!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:ne(n,e,R,r,t,null)}return;default:if(Ya(e)){for(H in t)t.hasOwnProperty(H)&&(r=t[H],r!==void 0&&Bo(n,e,H,r,t,void 0));return}}for(m in t)t.hasOwnProperty(m)&&(r=t[m],r!=null&&ne(n,e,m,r,t,null))}var Y1={};function L1(n,e,t,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,m=null,b=null,R=null,H=null;for(z in t){var X=t[z];if(t.hasOwnProperty(z)&&X!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":b=X;default:r.hasOwnProperty(z)||ne(n,e,z,null,r,X)}}for(var N in r){var z=r[N];if(X=t[N],r.hasOwnProperty(N)&&(z!=null||X!=null))switch(N){case"type":z!==X&&(In=!0),i=z;break;case"name":z!==X&&(In=!0),l=z;break;case"checked":z!==X&&(In=!0),R=z;break;case"defaultChecked":z!==X&&(In=!0),H=z;break;case"value":z!==X&&(In=!0),c=z;break;case"defaultValue":z!==X&&(In=!0),m=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:z!==X&&ne(n,e,N,z,r,X)}}ja(n,c,m,b,R,H,i,l);return;case"select":z=c=m=N=null;for(i in t)if(b=t[i],t.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":z=b;default:r.hasOwnProperty(i)||ne(n,e,i,null,r,b)}for(l in r)if(i=r[l],b=t[l],r.hasOwnProperty(l)&&(i!=null||b!=null))switch(l){case"value":i!==b&&(In=!0),N=i;break;case"defaultValue":i!==b&&(In=!0),m=i;break;case"multiple":i!==b&&(In=!0),c=i;default:i!==b&&ne(n,e,l,i,r,b)}e=m,t=c,r=z,N!=null?ll(n,!!t,N,!1):!!r!=!!t&&(e!=null?ll(n,!!t,e,!0):ll(n,!!t,t?[]:"",!1));return;case"textarea":z=N=null;for(m in t)if(l=t[m],t.hasOwnProperty(m)&&l!=null&&!r.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ne(n,e,m,null,r,l)}for(c in r)if(l=r[c],i=t[c],r.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":l!==i&&(In=!0),N=l;break;case"defaultValue":l!==i&&(In=!0),z=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==i&&ne(n,e,c,l,r,i)}vs(n,N,z);return;case"option":for(var nn in t)if(N=t[nn],t.hasOwnProperty(nn)&&N!=null&&!r.hasOwnProperty(nn))switch(nn){case"selected":n.selected=!1;break;default:ne(n,e,nn,null,r,N)}for(b in r)if(N=r[b],z=t[b],r.hasOwnProperty(b)&&N!==z&&(N!=null||z!=null))switch(b){case"selected":N!==z&&(In=!0),n.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:ne(n,e,b,N,r,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yn in t)N=t[yn],t.hasOwnProperty(yn)&&N!=null&&!r.hasOwnProperty(yn)&&ne(n,e,yn,null,r,N);for(R in r)if(N=r[R],z=t[R],r.hasOwnProperty(R)&&N!==z&&(N!=null||z!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:ne(n,e,R,N,r,z)}return;default:if(Ya(e)){for(var Un in t)N=t[Un],t.hasOwnProperty(Un)&&N!==void 0&&!r.hasOwnProperty(Un)&&Bo(n,e,Un,void 0,r,N);for(H in r)N=r[H],z=t[H],!r.hasOwnProperty(H)||N===z||N===void 0&&z===void 0||Bo(n,e,H,N,r,z);return}}for(var _ in t)N=t[_],t.hasOwnProperty(_)&&N!=null&&!r.hasOwnProperty(_)&&ne(n,e,_,null,r,N);for(X in r)N=r[X],z=t[X],!r.hasOwnProperty(X)||N===z||N==null&&z==null||ne(n,e,X,N,r,z)}function Om(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function G1(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],i=l.transferSize,c=l.initiatorType,m=l.duration;if(i&&m&&Om(c)){for(c=0,m=l.responseEnd,r+=1;r<t.length;r++){var b=t[r],R=b.startTime;if(R>m)break;var H=b.transferSize,X=b.initiatorType;H&&Om(X)&&(b=b.responseEnd,c+=H*(b<m?1:(m-R)/(b-R)))}if(--r,e+=8*(i+c)/(l.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Yo=null,Lo=null;function Hi(n){return n.nodeType===9?n:n.ownerDocument}function Nm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _m(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Rm(n,e,t,r){return t=Hi(t).createElement(n),t[Ne]=r,t[Ve]=e,ze(t,n,e),be(t),t}function Go(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qo=null;function Q1(){var n=window.event;return n&&n.type==="popstate"?n===Qo?!1:(Qo=n,!0):(Qo=null,!1)}var Xo=typeof setTimeout=="function"?setTimeout:void 0,X1=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,Dm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Xo,V1=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(n){return Cm.resolve(null).then(n).catch(K1)}:Xo;function K1(n){setTimeout(function(){throw n})}function Ar(n){return n==="head"}function zm(n,e){var t=e,r=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){n.removeChild(l),Ql(e);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")ko(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,ko(t);for(var i=t.firstChild;i;){var c=i.nextSibling,m=i.nodeName;i[Wl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=c}}else t==="body"&&ko(n.ownerDocument.body);t=l}while(t);Ql(e)}function wm(n,e){var t=n;n=0;do{var r=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=r}while(t)}function Hm(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var i=e[l];0<i.width&&0<i.height&&r++}r===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function Um(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Z1(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function Vo(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return Z1(e,t,n)}function F1(n){return n.documentElement.clientHeight}function I1(n){this.addEventListener("load",n),this.addEventListener("error",n)}function J1(n,e,t,r,l,i,c,m,b){var R=e.nodeType===9?e:e.ownerDocument;try{var H=R.startViewTransition({update:function(){var N=R.defaultView,z=N.navigation&&N.navigation.transition,nn=R.fonts.status;r();var yn=[];if(nn==="loaded"&&(F1(R),R.fonts.status==="loading"&&yn.push(R.fonts.ready)),nn=yn.length,n!==null)for(var Un=n.suspenseyImages,_=0,A=0;A<Un.length;A++){var C=Un[A];if(!C.complete){var G=C.getBoundingClientRect();if(0<G.bottom&&0<G.right&&G.top<N.innerHeight&&G.left<N.innerWidth){if(_+=ty(C),_>ha){yn.length=nn;break}C=new Promise(I1.bind(C)),yn.push(C)}}}if(0<yn.length)return N=Promise.race([Promise.all(yn),new Promise(function(on){return setTimeout(on,500)})]).then(l,l),(z?Promise.allSettled([z.finished,N]):N).then(i,i);if(l(),z)return z.finished.then(i,i);i()},types:t});R.__reactViewTransition=H;var X=[];return H.ready.then(function(){for(var N=R.documentElement.getAnimations({subtree:!0}),z=0;z<N.length;z++){var nn=N[z],yn=nn.effect,Un=yn.pseudoElement;if(Un!=null&&Un.startsWith("::view-transition")){X.push(nn),nn=yn.getKeyframes();for(var _=Un=void 0,A=!0,C=0;C<nn.length;C++){var G=nn[C],on=G.width;if(Un===void 0)Un=on;else if(Un!==on){A=!1;break}if(on=G.height,_===void 0)_=on;else if(_!==on){A=!1;break}delete G.width,delete G.height,G.transform==="none"&&delete G.transform}A&&Un!==void 0&&_!==void 0&&(yn.setKeyframes(nn),A=getComputedStyle(yn.target,yn.pseudoElement),A.width!==Un||A.height!==_)&&(A=nn[0],A.width=Un,A.height=_,A=nn[nn.length-1],A.width=Un,A.height=_,yn.setKeyframes(nn))}}c()},function(N){R.__reactViewTransition===H&&(R.__reactViewTransition=null);try{if(typeof N=="object"&&N!==null)switch(N.name){case"InvalidStateError":(N.message==="View transition was skipped because document visibility state is hidden."||N.message==="Skipping view transition because document visibility state has become hidden."||N.message==="Skipping view transition because viewport size changed."||N.message==="Transition was aborted because of invalid state")&&(N=null)}N!==null&&b(N)}finally{r(),l(),c()}}),H.finished.finally(function(){for(var N=0;N<X.length;N++)X[N].cancel();R.__reactViewTransition===H&&(R.__reactViewTransition=null),m()}),H}catch{return r(),l(),c(),null}}function Pr(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}Pr.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:I({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},Pr.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),r=[],l=0;l<t.length;l++){var i=t[l].effect;i!==null&&i.target===n&&i.pseudoElement===e&&r.push(t[l])}return r},Pr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function qm(n){return{name:n,group:new Pr("group",n),imagePair:new Pr("image-pair",n),old:new Pr("old",n),new:new Pr("new",n)}}function it(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}it.prototype.addEventListener=function(n,e,t){var r=null,l=null;if(!(t!=null&&typeof t!="boolean"&&(r=t.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Bm(i,n,e,t)===-1){var c=this,m=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(m=function(b){c.removeEventListener(n,e,t),typeof e=="function"?e.call(this,b):e.handleEvent(b)}),r!==null&&(l=c.removeEventListener.bind(c,n,e,t),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=ql(t),i.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:m,cleanup:l}),g(this._fragmentFiber.child,!1,$1,n,m,r)}this._eventListeners=i}};function $1(n,e,t,r){return k(n).addEventListener(e,t,r),!1}it.prototype.removeEventListener=function(n,e,t){var r=this._eventListeners;if(r!==null&&(e=Bm(r,n,e,t),e!==-1)){var l=r[e];t=l.attachedListener;var i=l.cleanup;l=ql(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,k1,n,t,l),r.splice(e,1),i!==null&&i()}};function k1(n,e,t,r){return k(n).removeEventListener(e,t,r),!1}function ql(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function jm(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function Bm(n,e,t,r){if(n.length===0)return-1;r=jm(r);for(var l=0;l<n.length;l++){var i=n[l];if(i.type===e&&i.listener===t&&jm(i.optionsOrUseCapture)===r)return l}return-1}it.prototype.dispatchEvent=function(n){var e=S(this._fragmentFiber);if(e===null)return!0;e=k(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var l=0;l<t.length;l++){var i=t[l];r.addEventListener(i.type,i.attachedListener,ql(i.optionsOrUseCapture))}if(e.appendChild(r),n=r.dispatchEvent(n),t)for(l=0;l<t.length;l++)i=t[l],r.removeEventListener(i.type,i.attachedListener,ql(i.optionsOrUseCapture));return e.removeChild(r),n}return e.dispatchEvent(n)},it.prototype.focus=function(n){g(this._fragmentFiber.child,!0,Ym,n,void 0,void 0)};function Ym(n,e){return n.tag===6?!1:(n=k(n),ov(n,e))}it.prototype.focusLast=function(n){var e=[];g(this._fragmentFiber.child,!0,Ko,e,void 0,void 0);for(var t=e.length-1;0<=t&&!Ym(e[t],n);t--);};function Ko(n,e){return e.push(n),!1}it.prototype.blur=function(){var n=S(this._fragmentFiber);n!==null&&(n=k(n),n=Hi(n).activeElement,n!==null&&g(this._fragmentFiber.child,!1,W1,n,void 0,void 0))};function W1(n,e){return n.tag===6?!1:(n=k(n),n===e||n.contains(e)?(e.blur(),!0):!1)}it.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),g(this._fragmentFiber.child,!1,P1,n,void 0,void 0)};function P1(n,e){return n.tag===6||(n=k(n),e.observe(n)),!1}it.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),g(this._fragmentFiber.child,!1,nv,n,void 0,void 0);for(var t=e=0;t<At.length;t++){var r=At[t];r.fragmentInstance===this&&r.observer===n?n.unobserve(r.instance):At[e++]=r}At.length=e}};function nv(n,e){return n.tag===6||(n=k(n),e.unobserve(n)),!1}var At=[],Zo=!1;function ev(n,e,t){At.push({fragmentInstance:n,observer:e,instance:t}),Zo||(Zo=!0,fv(function(){Zo=!1;var r=At;At=[];for(var l=0;l<r.length;l++){var i=r[l];i.observer.unobserve(i.instance)}}))}it.prototype.getClientRects=function(){var n=[];return g(this._fragmentFiber.child,!1,tv,n,void 0,void 0),n};function tv(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=k(n),e.push.apply(e,n.getClientRects());return!1}it.prototype.getRootNode=function(n){var e=S(this._fragmentFiber);return e===null?this:k(e).getRootNode(n)},it.prototype.compareDocumentPosition=function(n){var e=S(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];g(this._fragmentFiber.child,!1,Ko,t,void 0,void 0);var r=k(e);if(t.length===0){if(t=r,w(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var l=r=t.compareDocumentPosition(n);return t===n?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=F(e)[1],t===null?l=Node.DOCUMENT_POSITION_PRECEDING:(n=k(t).compareDocumentPosition(n),l=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=k(t[0]),l=k(t[t.length-1]);var i=w(this._fragmentFiber)?e.parentElement:r;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var c=e.compareDocumentPosition(n),m=l.compareDocumentPosition(n),b=c&Node.DOCUMENT_POSITION_CONTAINED_BY||m&Node.DOCUMENT_POSITION_CONTAINED_BY;return m=r&&i&&c&Node.DOCUMENT_POSITION_FOLLOWING&&m&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===n||i&&l===n||b||m?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===n||!i&&l===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:c,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||rv(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function rv(n,e,t,r,l){var i=zr(l);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!i)n:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){t=!0;break n}i=i.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;n:{for(i=e,e=S(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break n}i=i.return}i=!1}return i}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===t)&&(e=Zn(t,i,An),e===null?e=!1:(g(e,!0,cn,i,t),i=Tn,Tn=null,e=i!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===r)&&(e=Zn(r,i,An),e===null?e=!1:(g(e,!0,fn,i,r),i=Tn,pn=Tn=null,e=i!==null)),e):!1}function Lm(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}it.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(o(566));var e=[];g(this._fragmentFiber.child,!1,Ko,e,void 0,void 0);var t=n!==!1;if(e.length===0){var r=F(this._fragmentFiber);if(r=t?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){n=k(r),Lm(n,t);return}if(r=k(r),r.nodeType!==9){if(r.nodeType===11){t="host"in r?r.host:null,t!==null&&t.scrollIntoView(n);return}r.scrollIntoView(n)}}for(r=t?e.length-1:0;r!==(t?-1:e.length);){var l=e[r];l.tag===6?(l=k(l),Lm(l,t)):k(l).scrollIntoView(n),r+=t?-1:1}};function lv(n,e){return n=k(n),Gm(n,e),!1}function Gm(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function Qm(n,e){var t=e._eventListeners;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];n.addEventListener(l.type,l.attachedListener,ql(l.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(i){for(var c=0,m=0;m<At.length;m++){var b=At[m];(b.fragmentInstance!==e||b.observer!==i||b.instance!==n)&&(At[c++]=b)}At.length=c,i.observe(n)}),Gm(n,e))}function iv(n,e){var t=e._eventListeners;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];n.removeEventListener(l.type,l.attachedListener,ql(l.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(i){typeof i.rootMargin=="string"?ev(e,i,n):i.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function Fo(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Fo(t),nu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function uv(n,e,t,r){for(;n.nodeType===1;){var l=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(r){if(!n[Wl])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=yt(n.nextSibling),n===null)break}return null}function av(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=yt(n.nextSibling),n===null))return null;return n}function Xm(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=yt(n.nextSibling),n===null))return null;return n}function Io(n){return n.data==="$?"||n.data==="$~"}function Jo(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function cv(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var r=function(){e(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),n._reactRetry=r}}function yt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var $o=null;function Vm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return yt(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Km(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function ov(n,e){function t(){r=!0}if(n.ownerDocument.activeElement===n)return!0;var r=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return r}function fv(n){Dm(function(){Dm(function(e){return n(e)})})}function Zm(n,e,t){switch(e=Hi(t),n){case"html":if(n=e.documentElement,!n)throw Error(o(452));return n;case"head":if(n=e.head,!n)throw Error(o(453));return n;case"body":if(n=e.body,!n)throw Error(o(454));return n;default:throw Error(o(451))}}function Fm(n,e,t){for(var r in t){var l=t[r];t.hasOwnProperty(r)&&l!=null&&ne(n,e,r,null,Y1,l)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Nt&&(n.onclick=null),nu(n)}function ko(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);nu(n)}var gt=new Map,Im=new Set;function Ui(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var er=vn.d;vn.d={f:sv,r:hv,D:dv,C:mv,L:yv,m:gv,X:pv,S:vv,M:xv};function sv(){var n=er.f(),e=ra();return n||e}function hv(n){var e=el(n);e!==null&&e.tag===5&&e.type==="form"?$h(e):er.r(n)}var jl=typeof document>"u"?null:document;function Jm(n,e,t){var r=jl;if(r&&typeof e=="string"&&e){var l=ct(e);l='link[rel="'+n+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Im.has(l)||(Im.add(l),n={rel:n,crossOrigin:t,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),ze(e,"link",n),be(e),r.head.appendChild(e)))}}function dv(n){er.D(n),Jm("dns-prefetch",n,null)}function mv(n,e){er.C(n,e),Jm("preconnect",n,e)}function yv(n,e,t){er.L(n,e,t);var r=jl;if(r&&n&&e){var l='link[rel="preload"][as="'+ct(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+ct(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+ct(t.imageSizes)+'"]')):l+='[href="'+ct(n)+'"]';var i=l;switch(e){case"style":i=Bl(n);break;case"script":i=Yl(n)}if(!(gt.has(i)||(n=I({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),gt.set(i,n),r.querySelector(l)!==null||e==="style"&&r.querySelector(qi(i))||e==="script"&&r.querySelector(ji(i))))){var c=r.createElement("link");ze(c,"link",n),e==="style"&&(c[Pi]=!0,c.onload=c.onerror=function(){cs(c)}),be(c),r.head.appendChild(c)}}}function gv(n,e){er.m(n,e);var t=jl;if(t&&n){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+ct(r)+'"][href="'+ct(n)+'"]',i=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Yl(n)}if(!gt.has(i)&&(n=I({rel:"modulepreload",href:n},e),gt.set(i,n),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ji(i)))return}r=t.createElement("link"),ze(r,"link",n),be(r),t.head.appendChild(r)}}}function vv(n,e,t){er.S(n,e,t);var r=jl;if(r&&n){var l=tl(r).hoistableStyles,i=Bl(n);e=e||"default";var c=l.get(i);if(!c){var m={loading:0,preload:null};if(c=r.querySelector(qi(i)))m.loading=5;else{n=I({rel:"stylesheet",href:n,"data-precedence":e},t),(t=gt.get(i))&&Wo(n,t);var b=c=r.createElement("link");be(b),ze(b,"link",n),b._p=new Promise(function(R,H){b.onload=R,b.onerror=H}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,fa(c,e,r)}c={type:"stylesheet",instance:c,count:1,state:m},l.set(i,c)}}}function pv(n,e){er.X(n,e);var t=jl;if(t&&n){var r=tl(t).hoistableScripts,l=Yl(n),i=r.get(l);i||(i=t.querySelector(ji(l)),i||(n=I({src:n,async:!0},e),(e=gt.get(l))&&Po(n,e),i=t.createElement("script"),be(i),ze(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(l,i))}}function xv(n,e){er.M(n,e);var t=jl;if(t&&n){var r=tl(t).hoistableScripts,l=Yl(n),i=r.get(l);i||(i=t.querySelector(ji(l)),i||(n=I({src:n,async:!0,type:"module"},e),(e=gt.get(l))&&Po(n,e),i=t.createElement("script"),be(i),ze(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(l,i))}}function $m(n,e,t,r){var l=(l=pe.current)?Ui(l):null;if(!l)throw Error(o(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Bl(t.href),e=tl(l).hoistableStyles,r=e.get(t),r||(r={type:"style",instance:null,count:0,state:null},e.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Bl(t.href);var i=tl(l).hoistableStyles,c=i.get(n);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,c),(i=l.querySelector(qi(n)))?i._p||(c.instance=i,c.state.loading=5):(i=gt.get(n),i||(i={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},gt.set(n,i)),Ev(l,n,i,c.state))),e&&r===null)throw Error(o(528,""));return c}if(e&&r!==null)throw Error(o(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=Yl(t),e=tl(l).hoistableScripts,r=e.get(t),r||(r={type:"script",instance:null,count:0,state:null},e.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,n))}}function Bl(n){return'href="'+ct(n)+'"'}function qi(n){return'link[rel="stylesheet"]['+n+"]"}function km(n){return I({},n,{"data-precedence":n.precedence,precedence:null})}function Ev(n,e,t,r){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Pi]!==!0){r.loading=1;return}}else e=n.createElement("link"),e[Pi]=!0,e.onload=e.onerror=cs.bind(null,e),ze(e,"link",t),be(e),n.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Yl(n){return'[src="'+ct(n)+'"]'}function ji(n){return"script[async]"+n}function Wm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var r=n.querySelector('style[data-href~="'+ct(t.href)+'"]');if(r)return e.instance=r,be(r),r;var l=I({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(n.ownerDocument||n).createElement("style"),be(r),ze(r,"style",l),fa(r,t.precedence,n),e.instance=r;case"stylesheet":l=Bl(t.href);var i=n.querySelector(qi(l));if(i)return e.state.loading|=4,e.instance=i,be(i),i;r=km(t),(l=gt.get(l))&&Wo(r,l),i=(n.ownerDocument||n).createElement("link"),be(i);var c=i;return c._p=new Promise(function(m,b){c.onload=m,c.onerror=b}),ze(i,"link",r),e.state.loading|=4,fa(i,t.precedence,n),e.instance=i;case"script":return i=Yl(t.src),(l=n.querySelector(ji(i)))?(e.instance=l,be(l),l):(r=t,(l=gt.get(i))&&(r=I({},t),Po(r,l)),n=n.ownerDocument||n,l=n.createElement("script"),be(l),ze(l,"link",r),n.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,fa(r,t.precedence,n));return e.instance}function fa(n,e,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,i=l,c=0;c<r.length;c++){var m=r[c];if(m.dataset.precedence===e)i=m;else if(i!==l)break}i?i.parentNode.insertBefore(n,i.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Wo(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Po(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var sa=null;function Pm(n,e,t){if(sa===null){var r=new Map,l=sa=new Map;l.set(t,r)}else l=sa,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(n))return r;for(r.set(n,null),t=t.getElementsByTagName(n),l=0;l<t.length;l++){var i=t[l];if(!(i[Wl]||i[Ne]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=n+c;var m=r.get(c);m?m.push(i):r.set(c,[i])}}return r}function nf(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Sv(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ny(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function ey(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function ty(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ry(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=ty(e),n.suspenseyImages.push(e)),n=Av.bind(n),e.decode().then(n,n))}function Tv(n,e,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Bl(r.href),i=e.querySelector(qi(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Bi.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,be(i);return}i=e.ownerDocument||e,r=km(r),(l=gt.get(l))&&Wo(r,l),i=i.createElement("link"),be(i);var c=i;c._p=new Promise(function(m,b){c.onload=m,c.onerror=b}),ze(i,"link",r),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Bi.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var ha=0;function bv(n,e){return n.stylesheets&&n.count===0&&ma(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var r=setTimeout(function(){if(n.stylesheets&&ma(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4+e);0<n.imgBytes&&ha===0&&(ha=62500*G1());var l=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&ma(n,n.stylesheets),n.unsuspend)){var i=n.unsuspend;n.unsuspend=null,i()}},(n.imgBytes>ha?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function ly(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)ma(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function Bi(){this.count--,ly(this)}function Av(){this.imgCount--,ly(this)}var da=null;function ma(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,da=new Map,e.forEach(Mv,n),da=null,Bi.call(n))}function Mv(n,e){if(!(e.state.loading&4)){var t=da.get(n);if(t)var r=t.get(null);else{t=new Map,da.set(n,t);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),r=c)}r&&t.set(null,r)}l=e.instance,c=l.getAttribute("data-precedence"),i=t.get(c)||r,i===r&&t.set(null,l),t.set(c,l),this.count++,r=Bi.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),i?i.parentNode.insertBefore(l,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),e.state.loading|=4}}var Ll={$$typeof:Vn,Provider:null,Consumer:null,_currentValue:He,_currentValue2:He,_threadCount:0};function Ov(n,e,t,r,l,i,c,m,b){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.hiddenUpdates=wa(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.transitionTypes=null,this.incompleteTransitions=new Map}function iy(n,e,t,r,l,i,c,m,b,R,H,X){return n=new Ov(n,e,t,c,b,R,H,X,m),e=1,i===!0&&(e|=24),i=Ke(3,null,null,e),n.current=i,i.stateNode=n,e=mc(),e.refCount++,n.pooledCache=e,e.refCount++,i.memoizedState={element:r,isDehydrated:t,cache:e},pc(i),n}function uy(n){return n?(n=hl,n):hl}function ay(n,e,t,r,l,i){l=uy(l),r.context===null?r.context=l:r.pendingContext=l,r=hr(e),r.payload={element:t},i=i===void 0?null:i,i!==null&&(r.callback=i),t=dr(n,r,e),t!==null&&(Je(t,n,e),yi(t,n,e))}function cy(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ef(n,e){cy(n,e),(n=n.alternate)&&cy(n,e)}function oy(n){if(n.tag===13||n.tag===31){var e=qr(n,67108864);e!==null&&Je(e,n,67108864),ef(n,67108864)}}function fy(n){if(n.tag===13||n.tag===31){var e=lt();e=Ha(e);var t=qr(n,e);t!==null&&Je(t,n,e),ef(n,e)}}var Gl=!0;function Nv(n,e,t,r){var l=en.T;en.T=null;var i=vn.p;try{vn.p=2,tf(n,e,t,r)}finally{vn.p=i,en.T=l}}function _v(n,e,t,r){var l=en.T;en.T=null;var i=vn.p;try{vn.p=8,tf(n,e,t,r)}finally{vn.p=i,en.T=l}}function tf(n,e,t,r){if(Gl){var l=rf(r);if(l===null)jo(n,e,r,ya,t),hy(n,r);else if(Cv(l,n,e,t,r))r.stopPropagation();else if(hy(n,r),e&4&&-1<Rv.indexOf(n)){for(;l!==null;){var i=el(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Dr(i.pendingLanes);if(c!==0){var m=i;for(m.pendingLanes|=2,m.entangledLanes|=2;c;){var b=1<<31-ke(c);m.entanglements[1]|=b,c&=~b}jt(i),(Jn&6)===0&&(na=K()+500,Di(0))}}break;case 31:case 13:m=qr(i,2),m!==null&&Je(m,i,2),ra(),ef(i,2)}if(i=rf(r),i===null&&jo(n,e,r,ya,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else jo(n,e,r,null,t)}}function rf(n){return n=Ga(n),lf(n)}var ya=null;function lf(n){if(ya=null,n=zr(n),n!==null){var e=y(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=p(e),n!==null)return n;n=null}else if(t===31){if(n=v(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return ya=n,null}function sy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case $:return 2;case dn:return 8;case Sn:case bn:return 32;case Rn:return 268435456;default:return 32}default:return 32}}var uf=!1,Mr=null,Or=null,Nr=null,Yi=new Map,Li=new Map,_r=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hy(n,e){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(e.pointerId)}}function Gi(n,e,t,r,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},e!==null&&(e=el(e),e!==null&&oy(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function Cv(n,e,t,r,l){switch(e){case"focusin":return Mr=Gi(Mr,n,e,t,r,l),!0;case"dragenter":return Or=Gi(Or,n,e,t,r,l),!0;case"mouseover":return Nr=Gi(Nr,n,e,t,r,l),!0;case"pointerover":var i=l.pointerId;return Yi.set(i,Gi(Yi.get(i)||null,n,e,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Li.set(i,Gi(Li.get(i)||null,n,e,t,r,l)),!0}return!1}function dy(n){var e=zr(n.target);if(e!==null){var t=y(e);if(t!==null){if(e=t.tag,e===13){if(e=p(t),e!==null){n.blockedOn=e,is(n.priority,function(){fy(t)});return}}else if(e===31){if(e=v(t),e!==null){n.blockedOn=e,is(n.priority,function(){fy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ga(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=rf(n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);La=r,t.target.dispatchEvent(r),La=null}else return e=el(t),e!==null&&oy(e),n.blockedOn=t,!1;e.shift()}return!0}function my(n,e,t){ga(n)&&t.delete(e)}function Dv(){uf=!1,Mr!==null&&ga(Mr)&&(Mr=null),Or!==null&&ga(Or)&&(Or=null),Nr!==null&&ga(Nr)&&(Nr=null),Yi.forEach(my),Li.forEach(my)}function va(n,e){n.blockedOn===e&&(n.blockedOn=null,uf||(uf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Dv)))}var pa=null;function yy(n){pa!==n&&(pa=n,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){pa===n&&(pa=null);for(var e=0;e<n.length;e+=3){var t=n[e],r=n[e+1],l=n[e+2];if(typeof r!="function"){if(lf(r||t)===null)continue;break}var i=el(t);i!==null&&(n.splice(e,3),e-=3,Yc(i,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function Ql(n){function e(b){return va(b,n)}Mr!==null&&va(Mr,n),Or!==null&&va(Or,n),Nr!==null&&va(Nr,n),Yi.forEach(e),Li.forEach(e);for(var t=0;t<_r.length;t++){var r=_r[t];r.blockedOn===n&&(r.blockedOn=null)}for(;0<_r.length&&(t=_r[0],t.blockedOn===null);)dy(t),t.blockedOn===null&&_r.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],i=t[r+1],c=l[Ve]||null;if(typeof i=="function")c||yy(t);else if(c){var m=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[Ve]||null)m=c.formAction;else if(lf(l)!==null)continue}else m=c.action;typeof m=="function"?t[r+1]=m:(t.splice(r,3),r-=3),yy(t)}}}function gy(){function n(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function af(n){this._internalRoot=n}xa.prototype.render=af.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(o(409));var t=e.current,r=lt();ay(t,r,n,e,null,null)},xa.prototype.unmount=af.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ay(n.current,2,null,n,null,null),ra(),e[nl]=null}};function xa(n){this._internalRoot=n}xa.prototype.unstable_scheduleHydration=function(n){if(n){var e=ls();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_r.length&&e!==0&&e<_r[t].priority;t++);_r.splice(t,0,n),t===0&&dy(n)}};var vy=f.version;if(vy!=="19.3.0")throw Error(o(527,vy,"19.3.0"));vn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=E(e),n=n!==null?x(n):null,n=n===null?null:n.stateNode,n};var zv={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:en,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{pt=Ea.inject(zv),xe=Ea}catch{}}return Xi.createRoot=function(n,e){if(!s(n))throw Error(o(299));var t=!1,r="",l=ud,i=ad,c=cd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=iy(n,1,!1,null,null,t,r,null,l,i,c,gy),n[nl]=e.current,qo(n),new af(e)},Xi.hydrateRoot=function(n,e,t){if(!s(n))throw Error(o(299));var r=!1,l="",i=ud,c=ad,m=cd,b=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.formState!==void 0&&(b=t.formState)),e=iy(n,1,!0,e,t??null,r,l,b,i,c,m,gy),e.context=uy(null),t=e.current,r=lt(),r=Ha(r),l=hr(r),l.callback=null,dr(t,l,r),t=r,e.current.lanes=t,kl(e,t),jt(e),n[nl]=e.current,qo(n),new xa(e)},Xi.version="19.3.0",Xi}var Ny;function Qv(){if(Ny)return ff.exports;Ny=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(f){console.error(f)}}return a(),ff.exports=Gv(),ff.exports}var Xv=Qv();function Vv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var je={},Sa={},Cr={},_y;function Fi(){if(_y)return Cr;_y=1;function a(p){return typeof p>"u"||p===null}function f(p){return typeof p=="object"&&p!==null}function h(p){return Array.isArray(p)?p:a(p)?[]:[p]}function o(p,v){if(v){const T=Object.keys(v);for(let E=0,x=T.length;E<x;E+=1){const g=T[E];p[g]=v[g]}}return p}function s(p,v){let T="";for(let E=0;E<v;E+=1)T+=p;return T}function y(p){return p===0&&Number.NEGATIVE_INFINITY===1/p}return Cr.isNothing=a,Cr.isObject=f,Cr.toArray=h,Cr.repeat=s,Cr.isNegativeZero=y,Cr.extend=o,Cr}var mf,Ry;function Ii(){if(Ry)return mf;Ry=1;function a(h,o){let s="";const y=h.reason||"(unknown reason)";return h.mark?(h.mark.name&&(s+='in "'+h.mark.name+'" '),s+="("+(h.mark.line+1)+":"+(h.mark.column+1)+")",!o&&h.mark.snippet&&(s+=`

`+h.mark.snippet),y+" "+s):y}function f(h,o){Error.call(this),this.name="YAMLException",this.reason=h,this.mark=o,this.message=a(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return f.prototype=Object.create(Error.prototype),f.prototype.constructor=f,f.prototype.toString=function(o){return this.name+": "+a(this,o)},mf=f,mf}var yf,Cy;function Kv(){if(Cy)return yf;Cy=1;const a=Fi();function f(s,y,p,v,T){let E="",x="";const g=Math.floor(T/2)-1;return v-y>g&&(E=" ... ",y=v-g+E.length),p-v>g&&(x=" ...",p=v+g-x.length),{str:E+s.slice(y,p).replace(/\t/g,"→")+x,pos:v-y+E.length}}function h(s,y){return a.repeat(" ",y-s.length)+s}function o(s,y){if(y=Object.create(y||null),!s.buffer)return null;y.maxLength||(y.maxLength=79),typeof y.indent!="number"&&(y.indent=1),typeof y.linesBefore!="number"&&(y.linesBefore=3),typeof y.linesAfter!="number"&&(y.linesAfter=2);const p=/\r?\n|\r|\0/g,v=[0],T=[];let E,x=-1;for(;E=p.exec(s.buffer);)T.push(E.index),v.push(E.index+E[0].length),s.position<=E.index&&x<0&&(x=v.length-2);x<0&&(x=v.length-1);let g="";const S=Math.min(s.line+y.linesAfter,T.length).toString().length,w=y.maxLength-(y.indent+S+3);for(let tn=1;tn<=y.linesBefore&&!(x-tn<0);tn++){const k=f(s.buffer,v[x-tn],T[x-tn],s.position-(v[x]-v[x-tn]),w);g=a.repeat(" ",y.indent)+h((s.line-tn+1).toString(),S)+" | "+k.str+`
`+g}const F=f(s.buffer,v[x],T[x],s.position,w);g+=a.repeat(" ",y.indent)+h((s.line+1).toString(),S)+" | "+F.str+`
`,g+=a.repeat("-",y.indent+S+3+F.pos)+`^
`;for(let tn=1;tn<=y.linesAfter&&!(x+tn>=T.length);tn++){const k=f(s.buffer,v[x+tn],T[x+tn],s.position-(v[x]-v[x+tn]),w);g+=a.repeat(" ",y.indent)+h((s.line+tn+1).toString(),S)+" | "+k.str+`
`}return g.replace(/\n$/,"")}return yf=o,yf}var gf,Dy;function Qe(){if(Dy)return gf;Dy=1;const a=Ii(),f=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],h=["scalar","sequence","mapping"];function o(y){const p={};return y!==null&&Object.keys(y).forEach(function(v){y[v].forEach(function(T){p[String(T)]=v})}),p}function s(y,p){if(p=p||{},Object.keys(p).forEach(function(v){if(f.indexOf(v)===-1)throw new a('Unknown option "'+v+'" is met in definition of "'+y+'" YAML type.')}),this.options=p,this.tag=y,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(v){return v},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=o(p.styleAliases||null),h.indexOf(this.kind)===-1)throw new a('Unknown kind "'+this.kind+'" is specified for "'+y+'" YAML type.')}return gf=s,gf}var vf,zy;function a0(){if(zy)return vf;zy=1;const a=Ii(),f=Qe();function h(y,p){const v=[];return y[p].forEach(function(T){let E=v.length;v.forEach(function(x,g){x.tag===T.tag&&x.kind===T.kind&&x.multi===T.multi&&(E=g)}),v[E]=T}),v}function o(){const y={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function p(v){v.multi?(y.multi[v.kind].push(v),y.multi.fallback.push(v)):y[v.kind][v.tag]=y.fallback[v.tag]=v}for(let v=0,T=arguments.length;v<T;v+=1)arguments[v].forEach(p);return y}function s(y){return this.extend(y)}return s.prototype.extend=function(p){let v=[],T=[];if(p instanceof f)T.push(p);else if(Array.isArray(p))T=T.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(v=v.concat(p.implicit)),p.explicit&&(T=T.concat(p.explicit));else throw new a("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");v.forEach(function(x){if(!(x instanceof f))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(x.loadKind&&x.loadKind!=="scalar")throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(x.multi)throw new a("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),T.forEach(function(x){if(!(x instanceof f))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const E=Object.create(s.prototype);return E.implicit=(this.implicit||[]).concat(v),E.explicit=(this.explicit||[]).concat(T),E.compiledImplicit=h(E,"implicit"),E.compiledExplicit=h(E,"explicit"),E.compiledTypeMap=o(E.compiledImplicit,E.compiledExplicit),E},vf=s,vf}var pf,wy;function c0(){if(wy)return pf;wy=1;const a=Qe();return pf=new a("tag:yaml.org,2002:str",{kind:"scalar",construct:function(f){return f!==null?f:""}}),pf}var xf,Hy;function o0(){if(Hy)return xf;Hy=1;const a=Qe();return xf=new a("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(f){return f!==null?f:[]}}),xf}var Ef,Uy;function f0(){if(Uy)return Ef;Uy=1;const a=Qe();return Ef=new a("tag:yaml.org,2002:map",{kind:"mapping",construct:function(f){return f!==null?f:{}}}),Ef}var Sf,qy;function s0(){if(qy)return Sf;qy=1;const a=a0();return Sf=new a({explicit:[c0(),o0(),f0()]}),Sf}var Tf,jy;function h0(){if(jy)return Tf;jy=1;const a=Qe();function f(s){if(s===null)return!0;const y=s.length;return y===1&&s==="~"||y===4&&(s==="null"||s==="Null"||s==="NULL")}function h(){return null}function o(s){return s===null}return Tf=new a("tag:yaml.org,2002:null",{kind:"scalar",resolve:f,construct:h,predicate:o,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Tf}var bf,By;function d0(){if(By)return bf;By=1;const a=Qe();function f(s){if(s===null)return!1;const y=s.length;return y===4&&(s==="true"||s==="True"||s==="TRUE")||y===5&&(s==="false"||s==="False"||s==="FALSE")}function h(s){return s==="true"||s==="True"||s==="TRUE"}function o(s){return Object.prototype.toString.call(s)==="[object Boolean]"}return bf=new a("tag:yaml.org,2002:bool",{kind:"scalar",resolve:f,construct:h,predicate:o,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"}),bf}var Af,Yy;function m0(){if(Yy)return Af;Yy=1;const a=Fi(),f=Qe();function h(E){return E>=48&&E<=57||E>=65&&E<=70||E>=97&&E<=102}function o(E){return E>=48&&E<=55}function s(E){return E>=48&&E<=57}function y(E){if(E===null)return!1;const x=E.length;let g=0,S=!1;if(!x)return!1;let w=E[g];if((w==="-"||w==="+")&&(w=E[++g]),w==="0"){if(g+1===x)return!0;if(w=E[++g],w==="b"){for(g++;g<x;g++){if(w=E[g],w!=="0"&&w!=="1")return!1;S=!0}return S&&isFinite(p(E))}if(w==="x"){for(g++;g<x;g++){if(!h(E.charCodeAt(g)))return!1;S=!0}return S&&isFinite(p(E))}if(w==="o"){for(g++;g<x;g++){if(!o(E.charCodeAt(g)))return!1;S=!0}return S&&isFinite(p(E))}}for(;g<x;g++){if(!s(E.charCodeAt(g)))return!1;S=!0}return S?isFinite(p(E)):!1}function p(E){let x=E,g=1,S=x[0];if((S==="-"||S==="+")&&(S==="-"&&(g=-1),x=x.slice(1),S=x[0]),x==="0")return 0;if(S==="0"){if(x[1]==="b")return g*parseInt(x.slice(2),2);if(x[1]==="x")return g*parseInt(x.slice(2),16);if(x[1]==="o")return g*parseInt(x.slice(2),8)}return g*parseInt(x,10)}function v(E){return p(E)}function T(E){return Object.prototype.toString.call(E)==="[object Number]"&&E%1===0&&!a.isNegativeZero(E)}return Af=new f("tag:yaml.org,2002:int",{kind:"scalar",resolve:y,construct:v,predicate:T,represent:{binary:function(E){return E>=0?"0b"+E.toString(2):"-0b"+E.toString(2).slice(1)},octal:function(E){return E>=0?"0o"+E.toString(8):"-0o"+E.toString(8).slice(1)},decimal:function(E){return E.toString(10)},hexadecimal:function(E){return E>=0?"0x"+E.toString(16).toUpperCase():"-0x"+E.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Af}var Mf,Ly;function y0(){if(Ly)return Mf;Ly=1;const a=Fi(),f=Qe(),h=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),o=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function s(E){return E===null||!h.test(E)?!1:isFinite(parseFloat(E,10))?!0:o.test(E)}function y(E){let x=E.toLowerCase();const g=x[0]==="-"?-1:1;return"+-".indexOf(x[0])>=0&&(x=x.slice(1)),x===".inf"?g===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:x===".nan"?NaN:g*parseFloat(x,10)}const p=/^[-+]?[0-9]+e/;function v(E,x){if(isNaN(E))switch(x){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===E)switch(x){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===E)switch(x){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(a.isNegativeZero(E))return"-0.0";const g=E.toString(10);return p.test(g)?g.replace("e",".e"):g}function T(E){return Object.prototype.toString.call(E)==="[object Number]"&&(E%1!==0||a.isNegativeZero(E))}return Mf=new f("tag:yaml.org,2002:float",{kind:"scalar",resolve:s,construct:y,predicate:T,represent:v,defaultStyle:"lowercase"}),Mf}var Of,Gy;function g0(){return Gy||(Gy=1,Of=s0().extend({implicit:[h0(),d0(),m0(),y0()]})),Of}var Nf,Qy;function v0(){return Qy||(Qy=1,Nf=g0()),Nf}var _f,Xy;function p0(){if(Xy)return _f;Xy=1;const a=Qe(),f=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),h=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function o(p){return p===null?!1:f.exec(p)!==null||h.exec(p)!==null}function s(p){let v=0,T=null,E=f.exec(p);if(E===null&&(E=h.exec(p)),E===null)throw new Error("Date resolve error");const x=+E[1],g=+E[2]-1,S=+E[3];if(!E[4])return new Date(Date.UTC(x,g,S));const w=+E[4],F=+E[5],tn=+E[6];if(E[7]){for(v=E[7].slice(0,3);v.length<3;)v+="0";v=+v}if(E[9]){const Tn=+E[10],pn=+(E[11]||0);T=(Tn*60+pn)*6e4,E[9]==="-"&&(T=-T)}const k=new Date(Date.UTC(x,g,S,w,F,tn,v));return T&&k.setTime(k.getTime()-T),k}function y(p){return p.toISOString()}return _f=new a("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:o,construct:s,instanceOf:Date,represent:y}),_f}var Rf,Vy;function x0(){if(Vy)return Rf;Vy=1;const a=Qe();function f(h){return h==="<<"||h===null}return Rf=new a("tag:yaml.org,2002:merge",{kind:"scalar",resolve:f}),Rf}var Cf,Ky;function E0(){if(Ky)return Cf;Ky=1;const a=Qe(),f=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function h(p){if(p===null)return!1;let v=0;const T=p.length,E=f;for(let x=0;x<T;x++){const g=E.indexOf(p.charAt(x));if(!(g>64)){if(g<0)return!1;v+=6}}return v%8===0}function o(p){const v=p.replace(/[\r\n=]/g,""),T=v.length,E=f;let x=0;const g=[];for(let w=0;w<T;w++)w%4===0&&w&&(g.push(x>>16&255),g.push(x>>8&255),g.push(x&255)),x=x<<6|E.indexOf(v.charAt(w));const S=T%4*6;return S===0?(g.push(x>>16&255),g.push(x>>8&255),g.push(x&255)):S===18?(g.push(x>>10&255),g.push(x>>2&255)):S===12&&g.push(x>>4&255),new Uint8Array(g)}function s(p){let v="",T=0;const E=p.length,x=f;for(let S=0;S<E;S++)S%3===0&&S&&(v+=x[T>>18&63],v+=x[T>>12&63],v+=x[T>>6&63],v+=x[T&63]),T=(T<<8)+p[S];const g=E%3;return g===0?(v+=x[T>>18&63],v+=x[T>>12&63],v+=x[T>>6&63],v+=x[T&63]):g===2?(v+=x[T>>10&63],v+=x[T>>4&63],v+=x[T<<2&63],v+=x[64]):g===1&&(v+=x[T>>2&63],v+=x[T<<4&63],v+=x[64],v+=x[64]),v}function y(p){return Object.prototype.toString.call(p)==="[object Uint8Array]"}return Cf=new a("tag:yaml.org,2002:binary",{kind:"scalar",resolve:h,construct:o,predicate:y,represent:s}),Cf}var Df,Zy;function S0(){if(Zy)return Df;Zy=1;const a=Qe(),f=Object.prototype.hasOwnProperty,h=Object.prototype.toString;function o(y){if(y===null)return!0;const p={},v=y;for(let T=0,E=v.length;T<E;T+=1){const x=v[T];let g=!1;if(h.call(x)!=="[object Object]")return!1;let S;for(S in x)if(f.call(x,S))if(!g)g=!0;else return!1;if(!g||f.call(p,S))return!1;Object.defineProperty(p,S,{value:!0})}return!0}function s(y){return y!==null?y:[]}return Df=new a("tag:yaml.org,2002:omap",{kind:"sequence",resolve:o,construct:s}),Df}var zf,Fy;function T0(){if(Fy)return zf;Fy=1;const a=Qe(),f=Object.prototype.toString;function h(s){if(s===null)return!0;const y=s,p=new Array(y.length);for(let v=0,T=y.length;v<T;v+=1){const E=y[v];if(f.call(E)!=="[object Object]")return!1;const x=Object.keys(E);if(x.length!==1)return!1;p[v]=[x[0],E[x[0]]]}return!0}function o(s){if(s===null)return[];const y=s,p=new Array(y.length);for(let v=0,T=y.length;v<T;v+=1){const E=y[v],x=Object.keys(E);p[v]=[x[0],E[x[0]]]}return p}return zf=new a("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:h,construct:o}),zf}var wf,Iy;function b0(){if(Iy)return wf;Iy=1;const a=Qe(),f=Object.prototype.hasOwnProperty;function h(s){if(s===null)return!0;const y=s;for(const p in y)if(f.call(y,p)&&y[p]!==null)return!1;return!0}function o(s){return s!==null?s:{}}return wf=new a("tag:yaml.org,2002:set",{kind:"mapping",resolve:h,construct:o}),wf}var Hf,Jy;function Xf(){return Jy||(Jy=1,Hf=v0().extend({implicit:[p0(),x0()],explicit:[E0(),S0(),T0(),b0()]})),Hf}var $y;function Zv(){if($y)return Sa;$y=1;const a=Fi(),f=Ii(),h=Kv(),o=Xf(),s=Object.prototype.hasOwnProperty,y=1,p=2,v=3,T=4,E=1,x=2,g=3,S=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,w=/[\x85\u2028\u2029]/,F=/[,\[\]{}]/,tn=/^(?:!|!!|![0-9A-Za-z-]+!)$/,k=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function Tn(u){return Object.prototype.toString.call(u)}function pn(u){return u===10||u===13}function cn(u){return u===9||u===32}function fn(u){return u===9||u===32||u===10||u===13}function An(u){return u===44||u===91||u===93||u===123||u===125}function Zn(u){if(u>=48&&u<=57)return u-48;const O=u|32;return O>=97&&O<=102?O-97+10:-1}function I(u){return u===120?2:u===117?4:u===85?8:0}function mn(u){return u>=48&&u<=57?u-48:-1}function Cn(u){switch(u){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function jn(u){return u<=65535?String.fromCharCode(u):String.fromCharCode((u-65536>>10)+55296,(u-65536&1023)+56320)}function W(u,O,Y){O==="__proto__"?Object.defineProperty(u,O,{configurable:!0,enumerable:!0,writable:!0,value:Y}):u[O]=Y}const P=new Array(256),zn=new Array(256);for(let u=0;u<256;u++)P[u]=Cn(u)?1:0,zn[u]=Cn(u);function Nn(u,O){this.input=u,this.filename=O.filename||null,this.schema=O.schema||o,this.onWarning=O.onWarning||null,this.legacy=O.legacy||!1,this.json=O.json||!1,this.listener=O.listener||null,this.maxDepth=typeof O.maxDepth=="number"?O.maxDepth:100,this.maxTotalMergeKeys=typeof O.maxTotalMergeKeys=="number"?O.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=u.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Vn(u,O){const Y={name:u.filename,buffer:u.input.slice(0,-1),position:u.position,line:u.line,column:u.position-u.lineStart};return Y.snippet=h(Y),new f(O,Y)}function q(u,O){throw Vn(u,O)}function sn(u,O){u.onWarning&&u.onWarning.call(null,Vn(u,O))}function hn(u,O,Y){const L=u.anchorMapTransactions;if(L.length!==0){const j=L[L.length-1];s.call(j,O)||(j[O]={existed:s.call(u.anchorMap,O),value:u.anchorMap[O]})}u.anchorMap[O]=Y}function rn(u){u.anchorMapTransactions.push(Object.create(null))}function Mn(u){const O=u.anchorMapTransactions.pop(),Y=u.anchorMapTransactions;if(Y.length===0)return;const L=Y[Y.length-1],j=Object.keys(O);for(let d=0,D=j.length;d<D;d+=1){const B=j[d];s.call(L,B)||(L[B]=O[B])}}function gn(u){const O=u.anchorMapTransactions.pop(),Y=Object.keys(O);for(let L=Y.length-1;L>=0;L-=1){const j=O[Y[L]];j.existed?u.anchorMap[Y[L]]=j.value:delete u.anchorMap[Y[L]]}}function ie(u){return{position:u.position,line:u.line,lineStart:u.lineStart,lineIndent:u.lineIndent,firstTabInLine:u.firstTabInLine,tag:u.tag,anchor:u.anchor,kind:u.kind,result:u.result}}function Xn(u,O){u.position=O.position,u.line=O.line,u.lineStart=O.lineStart,u.lineIndent=O.lineIndent,u.firstTabInLine=O.firstTabInLine,u.tag=O.tag,u.anchor=O.anchor,u.kind=O.kind,u.result=O.result}const M={YAML:function(O,Y,L){O.version!==null&&q(O,"duplication of %YAML directive"),L.length!==1&&q(O,"YAML directive accepts exactly one argument");const j=/^([0-9]+)\.([0-9]+)$/.exec(L[0]);j===null&&q(O,"ill-formed argument of the YAML directive");const d=parseInt(j[1],10),D=parseInt(j[2],10);d!==1&&q(O,"unacceptable YAML version of the document"),O.version=L[0],O.checkLineBreaks=D<2,D!==1&&D!==2&&sn(O,"unsupported YAML version of the document")},TAG:function(O,Y,L){let j;L.length!==2&&q(O,"TAG directive accepts exactly two arguments");const d=L[0];j=L[1],tn.test(d)||q(O,"ill-formed tag handle (first argument) of the TAG directive"),s.call(O.tagMap,d)&&q(O,'there is a previously declared suffix for "'+d+'" tag handle'),k.test(j)||q(O,"ill-formed tag prefix (second argument) of the TAG directive");try{j=decodeURIComponent(j)}catch{q(O,"tag prefix is malformed: "+j)}O.tagMap[d]=j}};function V(u,O,Y,L){if(O<Y){const j=u.input.slice(O,Y);if(L)for(let d=0,D=j.length;d<D;d+=1){const B=j.charCodeAt(d);B===9||B>=32&&B<=1114111||q(u,"expected valid JSON character")}else S.test(j)&&q(u,"the stream contains non-printable characters");u.result+=j}}function un(u){u.totalMergeKeys++,u.maxTotalMergeKeys!==-1&&u.totalMergeKeys>u.maxTotalMergeKeys&&q(u,"merge keys exceeded maxTotalMergeKeys ("+u.maxTotalMergeKeys+")")}function an(u,O,Y,L){a.isObject(Y)||q(u,"cannot merge mappings; the provided source object is unacceptable"),un(u);const j=Object.keys(Y);for(let d=0,D=j.length;d<D;d+=1){const B=j[d];un(u),s.call(O,B)||(W(O,B,Y[B]),L[B]=!0)}}function _n(u,O,Y,L,j,d,D,B,Z){if(Array.isArray(j)){j=Array.prototype.slice.call(j);for(let J=0,K=j.length;J<K;J+=1)Array.isArray(j[J])&&q(u,"nested arrays are not supported inside keys"),typeof j=="object"&&Tn(j[J])==="[object Object]"&&(j[J]="[object Object]")}if(typeof j=="object"&&Tn(j)==="[object Object]"&&(j="[object Object]"),j=String(j),O===null&&(O={}),L==="tag:yaml.org,2002:merge")if(Array.isArray(d)){d.length>100&&q(u,"abnormal merge sequence size");for(let J=0,K=d.length;J<K;J+=1)an(u,O,d[J],Y)}else an(u,O,d,Y);else!u.json&&!s.call(Y,j)&&s.call(O,j)&&(u.line=D||u.line,u.lineStart=B||u.lineStart,u.position=Z||u.position,q(u,"duplicated mapping key")),W(O,j,d),delete Y[j];return O}function wn(u){const O=u.input.charCodeAt(u.position);O===10?u.position++:O===13?(u.position++,u.input.charCodeAt(u.position)===10&&u.position++):q(u,"a line break is expected"),u.line+=1,u.lineStart=u.position,u.firstTabInLine=-1}function xn(u,O,Y){let L=0,j=u.input.charCodeAt(u.position);for(;j!==0;){for(;cn(j);)j===9&&u.firstTabInLine===-1&&(u.firstTabInLine=u.position),j=u.input.charCodeAt(++u.position);if(O&&j===35)do j=u.input.charCodeAt(++u.position);while(j!==10&&j!==13&&j!==0);if(pn(j))for(wn(u),j=u.input.charCodeAt(u.position),L++,u.lineIndent=0;j===32;)u.lineIndent++,j=u.input.charCodeAt(++u.position);else break}return Y!==-1&&L!==0&&u.lineIndent<Y&&sn(u,"deficient indentation"),L}function en(u){let O=u.position,Y=u.input.charCodeAt(O);return!!((Y===45||Y===46)&&Y===u.input.charCodeAt(O+1)&&Y===u.input.charCodeAt(O+2)&&(O+=3,Y=u.input.charCodeAt(O),Y===0||fn(Y)))}function vn(u,O){O===1?u.result+=" ":O>1&&(u.result+=a.repeat(`
`,O-1))}function He(u,O,Y){let L,j,d,D,B,Z;const J=u.kind,K=u.result;let Q=u.input.charCodeAt(u.position);if(fn(Q)||An(Q)||Q===35||Q===38||Q===42||Q===33||Q===124||Q===62||Q===39||Q===34||Q===37||Q===64||Q===96)return!1;if(Q===63||Q===45){const $=u.input.charCodeAt(u.position+1);if(fn($)||Y&&An($))return!1}for(u.kind="scalar",u.result="",L=j=u.position,d=!1;Q!==0;){if(Q===58){const $=u.input.charCodeAt(u.position+1);if(fn($)||Y&&An($))break}else if(Q===35){const $=u.input.charCodeAt(u.position-1);if(fn($))break}else{if(u.position===u.lineStart&&en(u)||Y&&An(Q))break;if(pn(Q))if(D=u.line,B=u.lineStart,Z=u.lineIndent,xn(u,!1,-1),u.lineIndent>=O){d=!0,Q=u.input.charCodeAt(u.position);continue}else{u.position=j,u.line=D,u.lineStart=B,u.lineIndent=Z;break}}d&&(V(u,L,j,!1),vn(u,u.line-D),L=j=u.position,d=!1),cn(Q)||(j=u.position+1),Q=u.input.charCodeAt(++u.position)}return V(u,L,j,!1),u.result?!0:(u.kind=J,u.result=K,!1)}function ut(u,O){let Y,L,j=u.input.charCodeAt(u.position);if(j!==39)return!1;for(u.kind="scalar",u.result="",u.position++,Y=L=u.position;(j=u.input.charCodeAt(u.position))!==0;)if(j===39)if(V(u,Y,u.position,!0),j=u.input.charCodeAt(++u.position),j===39)Y=u.position,u.position++,L=u.position;else return!0;else pn(j)?(V(u,Y,L,!0),vn(u,xn(u,!1,O)),Y=L=u.position):u.position===u.lineStart&&en(u)?q(u,"unexpected end of the document within a single quoted scalar"):(u.position++,cn(j)||(L=u.position));q(u,"unexpected end of the stream within a single quoted scalar")}function Ue(u,O){let Y,L,j,d=u.input.charCodeAt(u.position);if(d!==34)return!1;for(u.kind="scalar",u.result="",u.position++,Y=L=u.position;(d=u.input.charCodeAt(u.position))!==0;){if(d===34)return V(u,Y,u.position,!0),u.position++,!0;if(d===92){if(V(u,Y,u.position,!0),d=u.input.charCodeAt(++u.position),pn(d))xn(u,!1,O);else if(d<256&&P[d])u.result+=zn[d],u.position++;else if((j=I(d))>0){let D=j,B=0;for(;D>0;D--)d=u.input.charCodeAt(++u.position),(j=Zn(d))>=0?B=(B<<4)+j:q(u,"expected hexadecimal character");u.result+=jn(B),u.position++}else q(u,"unknown escape sequence");Y=L=u.position}else pn(d)?(V(u,Y,L,!0),vn(u,xn(u,!1,O)),Y=L=u.position):u.position===u.lineStart&&en(u)?q(u,"unexpected end of the document within a double quoted scalar"):(u.position++,cn(d)||(L=u.position))}q(u,"unexpected end of the stream within a double quoted scalar")}function ue(u,O){let Y=!0,L,j,d;const D=u.tag;let B;const Z=u.anchor;let J,K,Q,$;const dn=Object.create(null);let Sn,bn,Rn,qn=u.input.charCodeAt(u.position);if(qn===91)J=93,$=!1,B=[];else if(qn===123)J=125,$=!0,B={};else return!1;for(u.anchor!==null&&hn(u,u.anchor,B),qn=u.input.charCodeAt(++u.position);qn!==0;){if(xn(u,!0,O),qn=u.input.charCodeAt(u.position),qn===J)return u.position++,u.tag=D,u.anchor=Z,u.kind=$?"mapping":"sequence",u.result=B,!0;if(Y?qn===44&&q(u,"expected the node content, but found ','"):q(u,"missed comma between flow collection entries"),bn=Sn=Rn=null,K=Q=!1,qn===63){const Ot=u.input.charCodeAt(u.position+1);fn(Ot)&&(K=Q=!0,u.position++,xn(u,!0,O))}L=u.line,j=u.lineStart,d=u.position,Te(u,O,y,!1,!0),bn=u.tag,Sn=u.result,xn(u,!0,O),qn=u.input.charCodeAt(u.position),(Q||u.line===L)&&qn===58&&(K=!0,qn=u.input.charCodeAt(++u.position),xn(u,!0,O),Te(u,O,y,!1,!0),Rn=u.result),$?_n(u,B,dn,bn,Sn,Rn,L,j,d):K?B.push(_n(u,null,dn,bn,Sn,Rn,L,j,d)):B.push(Sn),xn(u,!0,O),qn=u.input.charCodeAt(u.position),qn===44?(Y=!0,qn=u.input.charCodeAt(++u.position)):Y=!1}q(u,"unexpected end of the stream within a flow collection")}function $n(u,O){let Y,L=E,j=!1,d=!1,D=O,B=0,Z=!1,J,K=u.input.charCodeAt(u.position);if(K===124)Y=!1;else if(K===62)Y=!0;else return!1;for(u.kind="scalar",u.result="";K!==0;)if(K=u.input.charCodeAt(++u.position),K===43||K===45)E===L?L=K===43?g:x:q(u,"repeat of a chomping mode identifier");else if((J=mn(K))>=0)J===0?q(u,"bad explicit indentation width of a block scalar; it cannot be less than one"):d?q(u,"repeat of an indentation width identifier"):(D=O+J-1,d=!0);else break;if(cn(K)){do K=u.input.charCodeAt(++u.position);while(cn(K));if(K===35)do K=u.input.charCodeAt(++u.position);while(!pn(K)&&K!==0)}for(;K!==0;){for(wn(u),u.lineIndent=0,K=u.input.charCodeAt(u.position);(!d||u.lineIndent<D)&&K===32;)u.lineIndent++,K=u.input.charCodeAt(++u.position);if(!d&&u.lineIndent>D&&(D=u.lineIndent),pn(K)){B++;continue}if(!d&&D===0&&q(u,"missing indentation for block scalar"),u.lineIndent<D){L===g?u.result+=a.repeat(`
`,j?1+B:B):L===E&&j&&(u.result+=`
`);break}Y?cn(K)?(Z=!0,u.result+=a.repeat(`
`,j?1+B:B)):Z?(Z=!1,u.result+=a.repeat(`
`,B+1)):B===0?j&&(u.result+=" "):u.result+=a.repeat(`
`,B):u.result+=a.repeat(`
`,j?1+B:B),j=!0,d=!0,B=0;const Q=u.position;for(;!pn(K)&&K!==0;)K=u.input.charCodeAt(++u.position);V(u,Q,u.position,!1)}return!0}function Fn(u,O){const Y=u.tag,L=u.anchor,j=[];let d=!1;if(u.firstTabInLine!==-1)return!1;u.anchor!==null&&hn(u,u.anchor,j);let D=u.input.charCodeAt(u.position);for(;D!==0&&(u.firstTabInLine!==-1&&(u.position=u.firstTabInLine,q(u,"tab characters must not be used in indentation")),D===45);){const B=u.input.charCodeAt(u.position+1);if(!fn(B))break;if(d=!0,u.position++,xn(u,!0,-1)&&u.lineIndent<=O){j.push(null),D=u.input.charCodeAt(u.position);continue}const Z=u.line;if(Te(u,O,v,!1,!0),j.push(u.result),xn(u,!0,-1),D=u.input.charCodeAt(u.position),(u.line===Z||u.lineIndent>O)&&D!==0)q(u,"bad indentation of a sequence entry");else if(u.lineIndent<O)break}return d?(u.tag=Y,u.anchor=L,u.kind="sequence",u.result=j,!0):!1}function ae(u,O,Y){let L,j,d,D;const B=u.tag,Z=u.anchor,J={},K=Object.create(null);let Q=null,$=null,dn=null,Sn=!1,bn=!1;if(u.firstTabInLine!==-1)return!1;u.anchor!==null&&hn(u,u.anchor,J);let Rn=u.input.charCodeAt(u.position);for(;Rn!==0;){!Sn&&u.firstTabInLine!==-1&&(u.position=u.firstTabInLine,q(u,"tab characters must not be used in indentation"));const qn=u.input.charCodeAt(u.position+1),Ot=u.line;if((Rn===63||Rn===58)&&fn(qn))Rn===63?(Sn&&(_n(u,J,K,Q,$,null,j,d,D),Q=$=dn=null),bn=!0,Sn=!0,L=!0):Sn?(Sn=!1,L=!0):q(u,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),u.position+=1,Rn=qn;else{if(j=u.line,d=u.lineStart,D=u.position,!Te(u,Y,p,!1,!0))break;if(u.line===Ot){for(Rn=u.input.charCodeAt(u.position);cn(Rn);)Rn=u.input.charCodeAt(++u.position);if(Rn===58)Rn=u.input.charCodeAt(++u.position),fn(Rn)||q(u,"a whitespace character is expected after the key-value separator within a block mapping"),Sn&&(_n(u,J,K,Q,$,null,j,d,D),Q=$=dn=null),bn=!0,Sn=!1,L=!1,Q=u.tag,$=u.result;else if(bn)q(u,"can not read an implicit mapping pair; a colon is missed");else return u.tag=B,u.anchor=Z,!0}else if(bn)q(u,"can not read a block mapping entry; a multiline key may not be an implicit key");else return u.tag=B,u.anchor=Z,!0}if((u.line===Ot||u.lineIndent>O)&&(Sn&&(j=u.line,d=u.lineStart,D=u.position),Te(u,O,T,!0,L)&&(Sn?$=u.result:dn=u.result),Sn||(_n(u,J,K,Q,$,dn,j,d,D),Q=$=dn=null),xn(u,!0,-1),Rn=u.input.charCodeAt(u.position)),(u.line===Ot||u.lineIndent>O)&&Rn!==0)q(u,"bad indentation of a mapping entry");else if(u.lineIndent<O)break}return Sn&&_n(u,J,K,Q,$,null,j,d,D),bn&&(u.tag=B,u.anchor=Z,u.kind="mapping",u.result=J),bn}function $e(u){let O=!1,Y=!1,L,j,d=u.input.charCodeAt(u.position);if(d!==33)return!1;u.tag!==null&&q(u,"duplication of a tag property"),d=u.input.charCodeAt(++u.position),d===60?(O=!0,d=u.input.charCodeAt(++u.position)):d===33?(Y=!0,L="!!",d=u.input.charCodeAt(++u.position)):L="!";let D=u.position;if(O){do d=u.input.charCodeAt(++u.position);while(d!==0&&d!==62);u.position<u.length?(j=u.input.slice(D,u.position),d=u.input.charCodeAt(++u.position)):q(u,"unexpected end of the stream within a verbatim tag")}else{for(;d!==0&&!fn(d);)d===33&&(Y?q(u,"tag suffix cannot contain exclamation marks"):(L=u.input.slice(D-1,u.position+1),tn.test(L)||q(u,"named tag handle cannot contain such characters"),Y=!0,D=u.position+1)),d=u.input.charCodeAt(++u.position);j=u.input.slice(D,u.position),F.test(j)&&q(u,"tag suffix cannot contain flow indicator characters")}j&&!k.test(j)&&q(u,"tag name cannot contain such characters: "+j);try{j=decodeURIComponent(j)}catch{q(u,"tag name is malformed: "+j)}return O?u.tag=j:s.call(u.tagMap,L)?u.tag=u.tagMap[L]+j:L==="!"?u.tag="!"+j:L==="!!"?u.tag="tag:yaml.org,2002:"+j:q(u,'undeclared tag handle "'+L+'"'),!0}function pe(u){let O=u.input.charCodeAt(u.position);if(O!==38)return!1;u.anchor!==null&&q(u,"duplication of an anchor property"),O=u.input.charCodeAt(++u.position);const Y=u.position;for(;O!==0&&!fn(O)&&!An(O);)O=u.input.charCodeAt(++u.position);return u.position===Y&&q(u,"name of an anchor node must contain at least one character"),u.anchor=u.input.slice(Y,u.position),!0}function Se(u){let O=u.input.charCodeAt(u.position);if(O!==42)return!1;O=u.input.charCodeAt(++u.position);const Y=u.position;for(;O!==0&&!fn(O)&&!An(O);)O=u.input.charCodeAt(++u.position);u.position===Y&&q(u,"name of an alias node must contain at least one character");const L=u.input.slice(Y,u.position);return s.call(u.anchorMap,L)||q(u,'unidentified alias "'+L+'"'),u.result=u.anchorMap[L],xn(u,!0,-1),!0}function at(u,O,Y,L){const j=ie(u);return rn(u),Xn(u,O),u.tag=null,u.anchor=null,u.kind=null,u.result=null,ae(u,Y,L)&&u.kind==="mapping"?(Mn(u),!0):(gn(u),Xn(u,j),!1)}function Te(u,O,Y,L,j){let d,D,B=1,Z=!1,J=!1,K=null,Q,$,dn;u.depth>=u.maxDepth&&q(u,"nesting exceeded maxDepth ("+u.maxDepth+")"),u.depth+=1,u.listener!==null&&u.listener("open",u),u.tag=null,u.anchor=null,u.kind=null,u.result=null;const Sn=d=D=T===Y||v===Y;if(L&&xn(u,!0,-1)&&(Z=!0,u.lineIndent>O?B=1:u.lineIndent===O?B=0:u.lineIndent<O&&(B=-1)),B===1)for(;;){const bn=u.input.charCodeAt(u.position),Rn=ie(u);if(Z&&(bn===33&&u.tag!==null||bn===38&&u.anchor!==null)||!$e(u)&&!pe(u))break;K===null&&(K=Rn),xn(u,!0,-1)?(Z=!0,D=Sn,u.lineIndent>O?B=1:u.lineIndent===O?B=0:u.lineIndent<O&&(B=-1)):D=!1}if(D&&(D=Z||j),B===1||T===Y)if(y===Y||p===Y?$=O:$=O+1,dn=u.position-u.lineStart,B===1)if(D&&(Fn(u,dn)||ae(u,dn,$))||ue(u,$))J=!0;else{const bn=u.input.charCodeAt(u.position);K!==null&&Sn&&!D&&bn!==124&&bn!==62&&at(u,K,K.position-K.lineStart,$)||d&&$n(u,$)||ut(u,$)||Ue(u,$)?J=!0:Se(u)?(J=!0,(u.tag!==null||u.anchor!==null)&&q(u,"alias node should not have any properties")):He(u,$,y===Y)&&(J=!0,u.tag===null&&(u.tag="?")),u.anchor!==null&&hn(u,u.anchor,u.result)}else B===0&&(J=D&&Fn(u,dn));if(u.tag===null)u.anchor!==null&&hn(u,u.anchor,u.result);else if(u.tag==="?"){u.result!==null&&u.kind!=="scalar"&&q(u,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+u.kind+'"');for(let bn=0,Rn=u.implicitTypes.length;bn<Rn;bn+=1)if(Q=u.implicitTypes[bn],Q.resolve(u.result)){u.result=Q.construct(u.result),u.tag=Q.tag,u.anchor!==null&&hn(u,u.anchor,u.result);break}}else if(u.tag!=="!"){if(s.call(u.typeMap[u.kind||"fallback"],u.tag))Q=u.typeMap[u.kind||"fallback"][u.tag];else{Q=null;const bn=u.typeMap.multi[u.kind||"fallback"];for(let Rn=0,qn=bn.length;Rn<qn;Rn+=1)if(u.tag.slice(0,bn[Rn].tag.length)===bn[Rn].tag){Q=bn[Rn];break}}Q||q(u,"unknown tag !<"+u.tag+">"),u.result!==null&&Q.kind!==u.kind&&q(u,"unacceptable node kind for !<"+u.tag+'> tag; it should be "'+Q.kind+'", not "'+u.kind+'"'),Q.resolve(u.result,u.tag)?(u.result=Q.construct(u.result,u.tag),u.anchor!==null&&hn(u,u.anchor,u.result)):q(u,"cannot resolve a node with !<"+u.tag+"> explicit tag")}return u.listener!==null&&u.listener("close",u),u.depth-=1,u.tag!==null||u.anchor!==null||J}function Yt(u){const O=u.position;let Y=!1,L;for(u.version=null,u.checkLineBreaks=u.legacy,u.tagMap=Object.create(null),u.anchorMap=Object.create(null);(L=u.input.charCodeAt(u.position))!==0&&(xn(u,!0,-1),L=u.input.charCodeAt(u.position),!(u.lineIndent>0||L!==37));){Y=!0,L=u.input.charCodeAt(++u.position);let j=u.position;for(;L!==0&&!fn(L);)L=u.input.charCodeAt(++u.position);const d=u.input.slice(j,u.position),D=[];for(d.length<1&&q(u,"directive name must not be less than one character in length");L!==0;){for(;cn(L);)L=u.input.charCodeAt(++u.position);if(L===35){do L=u.input.charCodeAt(++u.position);while(L!==0&&!pn(L));break}if(pn(L))break;for(j=u.position;L!==0&&!fn(L);)L=u.input.charCodeAt(++u.position);D.push(u.input.slice(j,u.position))}L!==0&&wn(u),s.call(M,d)?M[d](u,d,D):sn(u,'unknown document directive "'+d+'"')}if(xn(u,!0,-1),u.lineIndent===0&&u.input.charCodeAt(u.position)===45&&u.input.charCodeAt(u.position+1)===45&&u.input.charCodeAt(u.position+2)===45?(u.position+=3,xn(u,!0,-1)):Y&&q(u,"directives end mark is expected"),Te(u,u.lineIndent-1,T,!1,!0),xn(u,!0,-1),u.checkLineBreaks&&w.test(u.input.slice(O,u.position))&&sn(u,"non-ASCII line breaks are interpreted as content"),u.documents.push(u.result),u.position===u.lineStart&&en(u)){u.input.charCodeAt(u.position)===46&&(u.position+=3,xn(u,!0,-1));return}u.position<u.length-1&&q(u,"end of the stream or a document separator is expected")}function Xe(u,O){u=String(u),O=O||{},u.length!==0&&(u.charCodeAt(u.length-1)!==10&&u.charCodeAt(u.length-1)!==13&&(u+=`
`),u.charCodeAt(0)===65279&&(u=u.slice(1)));const Y=new Nn(u,O),L=u.indexOf("\0");for(L!==-1&&(Y.position=L,q(Y,"null byte is not allowed in input")),Y.input+="\0";Y.input.charCodeAt(Y.position)===32;)Y.lineIndent+=1,Y.position+=1;for(;Y.position<Y.length-1;)Yt(Y);return Y.documents}function Mt(u,O,Y){O!==null&&typeof O=="object"&&typeof Y>"u"&&(Y=O,O=null);const L=Xe(u,Y);if(typeof O!="function")return L;for(let j=0,d=L.length;j<d;j+=1)O(L[j])}function Lt(u,O){const Y=Xe(u,O);if(Y.length!==0){if(Y.length===1)return Y[0];throw new f("expected a single document in the stream, but found more")}}return Sa.loadAll=Mt,Sa.load=Lt,Sa}var Uf={},ky;function Fv(){if(ky)return Uf;ky=1;const a=Fi(),f=Ii(),h=Xf(),o=Object.prototype.toString,s=Object.prototype.hasOwnProperty,y=65279,p=9,v=10,T=13,E=32,x=33,g=34,S=35,w=37,F=38,tn=39,k=42,Tn=44,pn=45,cn=58,fn=61,An=62,Zn=63,I=64,mn=91,Cn=93,jn=96,W=123,P=124,zn=125,Nn={};Nn[0]="\\0",Nn[7]="\\a",Nn[8]="\\b",Nn[9]="\\t",Nn[10]="\\n",Nn[11]="\\v",Nn[12]="\\f",Nn[13]="\\r",Nn[27]="\\e",Nn[34]='\\"',Nn[92]="\\\\",Nn[133]="\\N",Nn[160]="\\_",Nn[8232]="\\L",Nn[8233]="\\P";const Vn=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],q=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function sn(d,D){if(D===null)return{};const B={},Z=Object.keys(D);for(let J=0,K=Z.length;J<K;J+=1){let Q=Z[J],$=String(D[Q]);Q.slice(0,2)==="!!"&&(Q="tag:yaml.org,2002:"+Q.slice(2));const dn=d.compiledTypeMap.fallback[Q];dn&&s.call(dn.styleAliases,$)&&($=dn.styleAliases[$]),B[Q]=$}return B}function hn(d){let D,B;const Z=d.toString(16).toUpperCase();if(d<=255)D="x",B=2;else if(d<=65535)D="u",B=4;else if(d<=4294967295)D="U",B=8;else throw new f("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+D+a.repeat("0",B-Z.length)+Z}const rn=1,Mn=2;function gn(d){this.schema=d.schema||h,this.indent=Math.max(1,d.indent||2),this.noArrayIndent=d.noArrayIndent||!1,this.skipInvalid=d.skipInvalid||!1,this.flowLevel=a.isNothing(d.flowLevel)?-1:d.flowLevel,this.styleMap=sn(this.schema,d.styles||null),this.sortKeys=d.sortKeys||!1,this.lineWidth=d.lineWidth||80,this.noRefs=d.noRefs||!1,this.noCompatMode=d.noCompatMode||!1,this.condenseFlow=d.condenseFlow||!1,this.quotingType=d.quotingType==='"'?Mn:rn,this.forceQuotes=d.forceQuotes||!1,this.replacer=typeof d.replacer=="function"?d.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function ie(d,D){const B=a.repeat(" ",D);let Z=0,J="";const K=d.length;for(;Z<K;){let Q;const $=d.indexOf(`
`,Z);$===-1?(Q=d.slice(Z),Z=K):(Q=d.slice(Z,$+1),Z=$+1),Q.length&&Q!==`
`&&(J+=B),J+=Q}return J}function Xn(d,D){return`
`+a.repeat(" ",d.indent*D)}function M(d,D){for(let B=0,Z=d.implicitTypes.length;B<Z;B+=1)if(d.implicitTypes[B].resolve(D))return!0;return!1}function V(d){return d===E||d===p}function un(d){return d>=32&&d<=126||d>=161&&d<=55295&&d!==8232&&d!==8233||d>=57344&&d<=65533&&d!==y||d>=65536&&d<=1114111}function an(d){return un(d)&&d!==y&&d!==T&&d!==v}function _n(d,D,B){const Z=an(d),J=Z&&!V(d);return(B?Z:Z&&d!==Tn&&d!==mn&&d!==Cn&&d!==W&&d!==zn)&&d!==S&&!(D===cn&&!J)||an(D)&&!V(D)&&d===S||D===cn&&J}function wn(d){return un(d)&&d!==y&&!V(d)&&d!==pn&&d!==Zn&&d!==cn&&d!==Tn&&d!==mn&&d!==Cn&&d!==W&&d!==zn&&d!==S&&d!==F&&d!==k&&d!==x&&d!==P&&d!==fn&&d!==An&&d!==tn&&d!==g&&d!==w&&d!==I&&d!==jn}function xn(d){return!V(d)&&d!==cn}function en(d,D){const B=d.charCodeAt(D);let Z;return B>=55296&&B<=56319&&D+1<d.length&&(Z=d.charCodeAt(D+1),Z>=56320&&Z<=57343)?(B-55296)*1024+Z-56320+65536:B}function vn(d){return/^\n* /.test(d)}const He=1,ut=2,Ue=3,ue=4,$n=5;function Fn(d,D,B,Z,J,K,Q,$){let dn,Sn=0,bn=null,Rn=!1,qn=!1;const Ot=Z!==-1;let pt=-1,xe=wn(en(d,0))&&xn(en(d,d.length-1));if(D||Q)for(dn=0;dn<d.length;Sn>=65536?dn+=2:dn++){if(Sn=en(d,dn),!un(Sn))return $n;xe=xe&&_n(Sn,bn,$),bn=Sn}else{for(dn=0;dn<d.length;Sn>=65536?dn+=2:dn++){if(Sn=en(d,dn),Sn===v)Rn=!0,Ot&&(qn=qn||dn-pt-1>Z&&d[pt+1]!==" ",pt=dn);else if(!un(Sn))return $n;xe=xe&&_n(Sn,bn,$),bn=Sn}qn=qn||Ot&&dn-pt-1>Z&&d[pt+1]!==" "}return!Rn&&!qn?xe&&!Q&&!J(d)?He:K===Mn?$n:ut:B>9&&vn(d)?$n:Q?K===Mn?$n:ut:qn?ue:Ue}function ae(d,D,B,Z,J){d.dump=(function(){if(D.length===0)return d.quotingType===Mn?'""':"''";if(!d.noCompatMode&&(Vn.indexOf(D)!==-1||q.test(D)))return d.quotingType===Mn?'"'+D+'"':"'"+D+"'";const K=d.indent*Math.max(1,B),Q=d.lineWidth===-1?-1:Math.max(Math.min(d.lineWidth,40),d.lineWidth-K),$=Z||d.flowLevel>-1&&B>=d.flowLevel;function dn(Sn){return M(d,Sn)}switch(Fn(D,$,d.indent,Q,dn,d.quotingType,d.forceQuotes&&!Z,J)){case He:return D;case ut:return"'"+D.replace(/'/g,"''")+"'";case Ue:return"|"+$e(D,d.indent)+pe(ie(D,K));case ue:return">"+$e(D,d.indent)+pe(ie(Se(D,Q),K));case $n:return'"'+Te(D)+'"';default:throw new f("impossible error: invalid scalar style")}})()}function $e(d,D){const B=vn(d)?String(D):"",Z=d[d.length-1]===`
`,K=Z&&(d[d.length-2]===`
`||d===`
`)?"+":Z?"":"-";return B+K+`
`}function pe(d){return d[d.length-1]===`
`?d.slice(0,-1):d}function Se(d,D){const B=/(\n+)([^\n]*)/g;let Z=(function(){let $=d.indexOf(`
`);return $=$!==-1?$:d.length,B.lastIndex=$,at(d.slice(0,$),D)})(),J=d[0]===`
`||d[0]===" ",K,Q;for(;Q=B.exec(d);){const $=Q[1],dn=Q[2];K=dn[0]===" ",Z+=$+(!J&&!K&&dn!==""?`
`:"")+at(dn,D),J=K}return Z}function at(d,D){if(d===""||d[0]===" ")return d;const B=/ [^ ]/g;let Z,J=0,K,Q=0,$=0,dn="";for(;Z=B.exec(d);)$=Z.index,$-J>D&&(K=Q>J?Q:$,dn+=`
`+d.slice(J,K),J=K+1),Q=$;return dn+=`
`,d.length-J>D&&Q>J?dn+=d.slice(J,Q)+`
`+d.slice(Q+1):dn+=d.slice(J),dn.slice(1)}function Te(d){let D="",B=0;for(let Z=0;Z<d.length;B>=65536?Z+=2:Z++){B=en(d,Z);const J=Nn[B];!J&&un(B)?(D+=d[Z],B>=65536&&(D+=d[Z+1])):D+=J||hn(B)}return D}function Yt(d,D,B){let Z="";const J=d.tag;for(let K=0,Q=B.length;K<Q;K+=1){let $=B[K];d.replacer&&($=d.replacer.call(B,String(K),$)),(O(d,D,$,!1,!1)||typeof $>"u"&&O(d,D,null,!1,!1))&&(Z!==""&&(Z+=","+(d.condenseFlow?"":" ")),Z+=d.dump)}d.tag=J,d.dump="["+Z+"]"}function Xe(d,D,B,Z){let J="";const K=d.tag;for(let Q=0,$=B.length;Q<$;Q+=1){let dn=B[Q];d.replacer&&(dn=d.replacer.call(B,String(Q),dn)),(O(d,D+1,dn,!0,!0,!1,!0)||typeof dn>"u"&&O(d,D+1,null,!0,!0,!1,!0))&&((!Z||J!=="")&&(J+=Xn(d,D)),d.dump&&v===d.dump.charCodeAt(0)?J+="-":J+="- ",J+=d.dump)}d.tag=K,d.dump=J||"[]"}function Mt(d,D,B){let Z="";const J=d.tag,K=Object.keys(B);for(let Q=0,$=K.length;Q<$;Q+=1){let dn="";Z!==""&&(dn+=", "),d.condenseFlow&&(dn+='"');const Sn=K[Q];let bn=B[Sn];d.replacer&&(bn=d.replacer.call(B,Sn,bn)),O(d,D,Sn,!1,!1)&&(d.dump.length>1024&&(dn+="? "),dn+=d.dump+(d.condenseFlow?'"':"")+":"+(d.condenseFlow?"":" "),O(d,D,bn,!1,!1)&&(dn+=d.dump,Z+=dn))}d.tag=J,d.dump="{"+Z+"}"}function Lt(d,D,B,Z){let J="";const K=d.tag,Q=Object.keys(B);if(d.sortKeys===!0)Q.sort();else if(typeof d.sortKeys=="function")Q.sort(d.sortKeys);else if(d.sortKeys)throw new f("sortKeys must be a boolean or a function");for(let $=0,dn=Q.length;$<dn;$+=1){let Sn="";(!Z||J!=="")&&(Sn+=Xn(d,D));const bn=Q[$];let Rn=B[bn];if(d.replacer&&(Rn=d.replacer.call(B,bn,Rn)),!O(d,D+1,bn,!0,!0,!0))continue;const qn=d.tag!==null&&d.tag!=="?"||d.dump&&d.dump.length>1024;qn&&(d.dump&&v===d.dump.charCodeAt(0)?Sn+="?":Sn+="? "),Sn+=d.dump,qn&&(Sn+=Xn(d,D)),O(d,D+1,Rn,!0,qn)&&(d.dump&&v===d.dump.charCodeAt(0)?Sn+=":":Sn+=": ",Sn+=d.dump,J+=Sn)}d.tag=K,d.dump=J||"{}"}function u(d,D,B){const Z=B?d.explicitTypes:d.implicitTypes;for(let J=0,K=Z.length;J<K;J+=1){const Q=Z[J];if((Q.instanceOf||Q.predicate)&&(!Q.instanceOf||typeof D=="object"&&D instanceof Q.instanceOf)&&(!Q.predicate||Q.predicate(D))){if(B?Q.multi&&Q.representName?d.tag=Q.representName(D):d.tag=Q.tag:d.tag="?",Q.represent){const $=d.styleMap[Q.tag]||Q.defaultStyle;let dn;if(o.call(Q.represent)==="[object Function]")dn=Q.represent(D,$);else if(s.call(Q.represent,$))dn=Q.represent[$](D,$);else throw new f("!<"+Q.tag+'> tag resolver accepts not "'+$+'" style');d.dump=dn}return!0}}return!1}function O(d,D,B,Z,J,K,Q){d.tag=null,d.dump=B,u(d,B,!1)||u(d,B,!0);const $=o.call(d.dump),dn=Z;Z&&(Z=d.flowLevel<0||d.flowLevel>D);const Sn=$==="[object Object]"||$==="[object Array]";let bn,Rn;if(Sn&&(bn=d.duplicates.indexOf(B),Rn=bn!==-1),(d.tag!==null&&d.tag!=="?"||Rn||d.indent!==2&&D>0)&&(J=!1),Rn&&d.usedDuplicates[bn])d.dump="*ref_"+bn;else{if(Sn&&Rn&&!d.usedDuplicates[bn]&&(d.usedDuplicates[bn]=!0),$==="[object Object]")Z&&Object.keys(d.dump).length!==0?(Lt(d,D,d.dump,J),Rn&&(d.dump="&ref_"+bn+d.dump)):(Mt(d,D,d.dump),Rn&&(d.dump="&ref_"+bn+" "+d.dump));else if($==="[object Array]")Z&&d.dump.length!==0?(d.noArrayIndent&&!Q&&D>0?Xe(d,D-1,d.dump,J):Xe(d,D,d.dump,J),Rn&&(d.dump="&ref_"+bn+d.dump)):(Yt(d,D,d.dump),Rn&&(d.dump="&ref_"+bn+" "+d.dump));else if($==="[object String]")d.tag!=="?"&&ae(d,d.dump,D,K,dn);else{if($==="[object Undefined]")return!1;if(d.skipInvalid)return!1;throw new f("unacceptable kind of an object to dump "+$)}if(d.tag!==null&&d.tag!=="?"){let qn=encodeURI(d.tag[0]==="!"?d.tag.slice(1):d.tag).replace(/!/g,"%21");d.tag[0]==="!"?qn="!"+qn:qn.slice(0,18)==="tag:yaml.org,2002:"?qn="!!"+qn.slice(18):qn="!<"+qn+">",d.dump=qn+" "+d.dump}}return!0}function Y(d,D){const B=[],Z=[];L(d,B,Z);const J=Z.length;for(let K=0;K<J;K+=1)D.duplicates.push(B[Z[K]]);D.usedDuplicates=new Array(J)}function L(d,D,B){if(d!==null&&typeof d=="object"){const Z=D.indexOf(d);if(Z!==-1)B.indexOf(Z)===-1&&B.push(Z);else if(D.push(d),Array.isArray(d))for(let J=0,K=d.length;J<K;J+=1)L(d[J],D,B);else{const J=Object.keys(d);for(let K=0,Q=J.length;K<Q;K+=1)L(d[J[K]],D,B)}}}function j(d,D){D=D||{};const B=new gn(D);B.noRefs||Y(d,B);let Z=d;return B.replacer&&(Z=B.replacer.call({"":Z},"",Z)),O(B,0,Z,!0,!0)?B.dump+`
`:""}return Uf.dump=j,Uf}var Wy;function Iv(){if(Wy)return je;Wy=1;const a=Zv(),f=Fv();function h(o,s){return function(){throw new Error("Function yaml."+o+" is removed in js-yaml 4. Use yaml."+s+" instead, which is now safe by default.")}}return je.Type=Qe(),je.Schema=a0(),je.FAILSAFE_SCHEMA=s0(),je.JSON_SCHEMA=g0(),je.CORE_SCHEMA=v0(),je.DEFAULT_SCHEMA=Xf(),je.load=a.load,je.loadAll=a.loadAll,je.dump=f.dump,je.YAMLException=Ii(),je.types={binary:E0(),float:y0(),map:f0(),null:h0(),pairs:T0(),set:b0(),timestamp:p0(),bool:d0(),int:m0(),merge:x0(),omap:S0(),seq:o0(),str:c0()},je.safeLoad=h("safeLoad","load"),je.safeLoadAll=h("safeLoadAll","loadAll"),je.safeDump=h("safeDump","dump"),je}var Jv=Iv();const A0=Vv(Jv),{Type:_2,Schema:R2,FAILSAFE_SCHEMA:C2,JSON_SCHEMA:D2,CORE_SCHEMA:z2,DEFAULT_SCHEMA:w2,load:H2,loadAll:U2,dump:q2,YAMLException:j2,types:B2,safeLoad:Y2,safeLoadAll:L2,safeDump:G2}=A0,$v=`# 第一幕 · 出发前\r
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
`,kv=`# 第三幕 · 桌游店\r
# 男生先到。女窗定位纠错结束并进店后，男窗才能看见她。\r
# 女生坐到桌边后问外套，局间听到礼物来历，散场再开第四幕。\r
\r
title: 第三幕 · 桌游店\r
chapter: 3\r
时间轴:\r
  - 男生先到\r
  - 女生在路上\r
  - 女生到店\r
  - 开局与局间\r
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
  - id: 3.1.1-A\r
    channel: left\r
    time: 男生先到\r
    requires: [L3, R2]\r
    when: { shop: 时光桌游吧 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，换到心动了，你选的那个他们说太贵了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 大家因为价格换了店。他到地方了，可除了叫他来的人谁都不认识。可以先让他坐一会儿，或者用桌游找个话题搭话。\r
        delivery: thought\r
    choices: &arrival-choices\r
      - thought: 先坐下来缓一缓\r
        reply: 可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。\r
        set: { 路线: 刷手机, 到店: true }\r
        next: 3.3.1\r
      - thought: 主动找人攀谈\r
        reply: 可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。\r
        set: { 路线: 攀谈, 到店: true }\r
        next: 3.2.1\r
\r
  - id: 3.1.1-B\r
    channel: left\r
    time: 男生先到\r
    requires: [L3, R2]\r
    when: { shop: 心动桌游俱乐部 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 他已经到了，发现桌上都是生面孔，想知道现在做什么合适。可以让他先坐下缓缓，也可以从大家熟悉的桌游聊起。\r
        delivery: thought\r
    choices: *arrival-choices\r
\r
  - id: 3.1.1-C\r
    channel: left\r
    time: 男生先到\r
    requires: [L3, R2]\r
    when: { shop: 叙事者营地桌游馆 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，换到心动了，你选的那个他们说太远了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 聚会因为距离换了地方，他到店之后又遇到一桌陌生人。先给他一个现在能做的小动作，帮他度过等开局这段时间。\r
        delivery: thought\r
    choices: *arrival-choices\r
\r
  - id: 3.2.1\r
    channel: left\r
    time: 男生先到\r
    lines:\r
      - from: boy\r
        text: 靠靠靠，我刚才找了个搭话，结果他没说话，我以为她不想理我，我就假装没事走了。结果是她带着耳机.....靠早知道看手机了\r
        delivery: type\r
      - from: ai\r
        text: 搭话没得到回应，他后来才发现对方戴着耳机。可以提醒他这很可能是没听见，再给他一个容易接回牌桌的办法。\r
        delivery: thought\r
    choices:\r
      - thought: 把没听见和不想理分开\r
        reply: 她戴着耳机，很可能压根没听见。你已经试着开了口，先缓一下吧。等开桌了，从规则或者手里的牌聊一句，会自然些。\r
        next: 3.2.2\r
\r
  - id: 3.4.1\r
    channel: right\r
    time: 女生在路上\r
    requires: [R2]\r
    when: { 到店: true }\r
    lines:\r
      - from: girl\r
        text: 我刚出地铁，我出A口然后怎么走？\r
        delivery: type\r
      - from: ai\r
        text: 她已经从 A 口出来，需要确认接下来往哪走。要是有之前留下的地址，就让她对照地图走；手上没有地址的话，就只剩一个不太稳妥的猜法。\r
        delivery: thought\r
    choices:\r
      - thought: 用记下的地址导航\r
        需记忆: 店的位置\r
        reply: 我记着地址。你在地图里搜「莱安中心」，按 A 口的步行路线走。进楼后找 T6，店在 21703 室。\r
        next: 3.4.arrived\r
      - thought: 凭印象指个方向\r
        reply: 出A口往左，过两个路口就看到了，两分钟，放心走。\r
        next: 3.4.2\r
\r
  - id: 3.4.2\r
    channel: right\r
    time: 女生在路上\r
    lines:\r
      - from: girl\r
        text: ？？你这是瞎指的吧，我照你说的走了半天根本没有。我问同学了，她发我位置了。你这指路水平不行啊\r
        delivery: type\r
      - from: ai\r
        text: 她按我说的方向走错了，已经找同学拿到正确的位置。先承认刚才没有确认过，再让她按同学发来的定位走。\r
        delivery: thought\r
    choices:\r
      - thought: 承认刚才指错了\r
        reply: 是我指错了，刚才没确认就给你说了个方向。你按同学发的定位走吧，别再往我说的那边绕了。\r
        next: 3.4.arrived\r
\r
  - id: 3.4.arrived\r
    channel: right\r
    time: 女生到店\r
    control: true\r
    lines: []\r
\r
  - id: 3.2.2\r
    channel: left\r
    time: 女生到店\r
    requires: [3.4.arrived]\r
    when: { 化妆: 不化 }\r
    记忆候选:\r
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }\r
    lines:\r
      - from: boy\r
        text: 我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好\r
        delivery: type\r
      - from: ai\r
        text: 他注意到新来的女生，尤其喜欢她玩游戏时的开朗劲儿。刚才搭话没接上，他可能还有点怕尴尬。可以建议从同桌玩牌聊起，也可以让他先玩一局。\r
        delivery: thought\r
    choices: &table-talk-choices\r
      - thought: 从下一局找机会搭话\r
        reply: 下一局可以问一句「带我一个呗？」你已经在同一桌了，借游戏开口，比特意跑去搭讪自然。\r
        next: 3.2.3\r
      - thought: 先玩一局，等话头自然出现\r
        reply: 刚才那下还尴尬的话，先把手上这局玩完。等分队或者换游戏，有机会自然接上一句就行。\r
        next: 3.2.4\r
\r
  - id: 3.2.2-A\r
    channel: left\r
    time: 女生到店\r
    requires: [3.4.arrived, 3.2.1]\r
    when: { 化妆: 化, 路线: 攀谈 }\r
    记忆候选:\r
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }\r
    lines:\r
      - from: boy\r
        text: 我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见\r
        delivery: type\r
      - from: ai\r
        text: 他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。\r
        delivery: thought\r
    choices: *table-talk-choices\r
\r
  - id: 3.3.1\r
    channel: left\r
    time: 女生到店\r
    requires: [3.4.arrived]\r
    when: { 化妆: 不化 }\r
    记忆候选:\r
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }\r
    lines:\r
      - from: boy\r
        text: 我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好\r
        delivery: type\r
      - from: ai\r
        text: 他玩了一会儿，开始注意到那个女生的笑声，也想认识她。可以建议从下一局的游戏开口，两个人都知道该接什么。\r
        delivery: thought\r
    choices: &phone-table-choices\r
      - thought: 从游戏找机会开口\r
        reply: 下一局可以问一句「带我一个呗？」已经坐到一张桌上了，用你们正在玩的游戏开个头就行。\r
        next: 3.3.2\r
\r
  - id: 3.3.1-A\r
    channel: left\r
    time: 女生到店\r
    requires: [3.4.arrived]\r
    when: { 化妆: 化, 路线: 刷手机 }\r
    记忆候选:\r
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }\r
    lines:\r
      - from: boy\r
        text: 我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见\r
        delivery: type\r
      - from: ai\r
        text: 他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。\r
        delivery: thought\r
    choices: *phone-table-choices\r
\r
  - id: 3.2.3\r
    channel: left\r
    time: 开局与局间\r
    lines:\r
      - from: boy\r
        text: 唉算了，我就是口嗨，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 他刚说想搭话，又决定先玩游戏。既然他准备收起手机，就让聊天到这儿，有没有机会等同桌相处时再看。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着他，先让他去玩\r
        reply: 那你先玩。你们都在一张桌上，等有话自然接得上，今天不用专门找个机会开口。\r
        next: 4.1.1\r
\r
  - id: 3.2.4\r
    channel: left\r
    time: 开局与局间\r
    lines:\r
      - from: boy\r
        text: 你也知道。。。都怪你刚才怂恿我，我都懒得喷了，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 他把刚才没搭上话怪到我头上，语气有点开玩笑。他要继续玩了，可以顺着玩笑回一句，把这次尴尬收住。\r
        delivery: thought\r
    choices:\r
      - thought: 接住他这句埋怨\r
        reply: 行，刚才那招算我没看准。你先去玩吧，刚才没说上话那件事就留在刚才。\r
        next: 4.1.1\r
\r
  - id: 3.3.2\r
    channel: left\r
    time: 开局与局间\r
    lines:\r
      - from: boy\r
        text: 唉算了，我就是口嗨，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 他欣赏那个女生，但暂时不想特意过去说话。他准备继续玩了，可以简短回应，别把这次聚会变成一定要认识谁的任务。\r
        delivery: thought\r
    choices:\r
      - thought: 先让他回去玩\r
        reply: 好，先去玩你的。你们既然在同一桌，有合适的话头再聊也来得及。\r
        next: 4.1.1\r
\r
  - id: 3.4.3-A\r
    channel: right\r
    time: 开局与局间\r
    requires: [3.4.arrived]\r
    when: { 化妆: 化 }\r
    window: &saw-her\r
      channel: left\r
      下界: [3.2.2, 3.2.2-A, 3.3.1, 3.3.1-A]\r
      上界: []\r
      说明: 她进店被男生注意到，坐下等下一局时才看见他的外套\r
    lines: &jacket-question\r
      - from: girl\r
        text: 我坐下了，等下一局呢。我旁边那男生外套上写着 ARTX，你帮我看一下这个衣服是什么牌子？贵不贵？\r
        delivery: type\r
      - from: ai\r
        text: 她在桌游店看到一件外套，想知道牌子和大概价位。现在只知道标志，能说说品牌定位，具体款式和价格还判断不了。\r
        delivery: thought\r
    choices: &jacket-choices\r
      - thought: 说说大概价位\r
        reply: ARTX 走的是偏贵的设计师品牌路线，外套有些款能卖到几千。不过光看标志认不出他穿的是哪件，具体多少钱还得看款式。\r
        next: 3.4.4\r
\r
  - id: 3.4.3-B\r
    channel: right\r
    time: 开局与局间\r
    requires: [3.4.arrived]\r
    when: { 化妆: 不化 }\r
    window: *saw-her\r
    lines: *jacket-question\r
    choices: *jacket-choices\r
\r
  - id: 3.4.4\r
    channel: right\r
    time: 开局与局间\r
    lines:\r
      - from: girl\r
        text: 啊这么贵啊。刚才等人洗牌的时候聊起来，他说上次逛街就多看了那件两眼，他妈还真记住了，后来买来当生日礼物。哎他妈还挺记得他喜欢啥的。\r
        delivery: type\r
      - from: ai\r
        text: 她原本好奇衣服的价格，现在更在意他妈妈记得他的喜好。可以回应这件具体的小事，顺着她的发现聊一句。\r
        delivery: thought\r
    choices:\r
      - thought: 接住她留意到的小事\r
        reply: 他没专门开口要，她还记得他在店里多看了两眼。这种自己都快忘了的事，还有人记得，收到时应该挺惊喜的。\r
        next: 4.3.1\r
`,Wv=`# 第四幕 · 结缘——由 script/ch4.yaml 迁移而来\r
# 两窗都结束桌游局后才转入散场。是否主动问微信由实际行动反馈确定。\r
# 接口：入场=第三幕 next；出口=选项 set 意向旗标（男生意向/女生意向：问/不问）。\r
\r
title: 第四幕 · 结缘\r
chapter: 4\r
时间轴:\r
  - 散场后\r
  - 散场后·没有交换微信\r
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
endings:\r
  - id: 未交换微信\r
    title: 桌游局结束后，两人没有交换微信。\r
    requires: [4.end-no-contact]\r
\r
beats:\r
  - id: 4.1.1\r
    channel: left\r
    time: 散场后\r
    requires: [3.4.4]\r
    lines:\r
      - from: boy\r
        text: 我靠，我靠，我靠，你还记得我刚才给你说的那个女的吗？我感觉她绝对对我有意思！！！\r
        delivery: type\r
      - from: ai\r
        text: 他一上来就说对方对他有意思，还没讲怎么回事。先听听两人在桌上说了什么，再判断他看到的是什么信号。\r
        delivery: thought\r
    choices:\r
      - thought: 先问他发生了什么\r
        reply: 你看起来挺高兴的。刚才玩的时候她做了什么，让你觉得她对你有意思？\r
        next: 4.2.1\r
\r
  - id: 4.2.1\r
    channel: left\r
    time: 散场后\r
    lines:\r
      - from: boy\r
        text: 就是我们不刚玩完桌游吗，然后刚才玩的时候，我说话别人都不理我，就她回应我，而且就她有时候和我对视一下啥的\r
        delivery: type\r
      - from: ai\r
        text: 他最在意的是没人接话时她接了，还跟他有几次对视。这些能说明两人聊得上。可以鼓励他试着认识她，也可以建议他再看看。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着好感，试着认识她\r
        reply: 她愿意接你的话，你跟她聊起来也舒服。你要还想认识她，可以试着问能不能加个微信，先从那局桌游聊起。\r
        next: 4.2.2\r
      - thought: 先看看她平时怎么待人\r
        reply: 她接你的话，可能是跟你聊得来，也可能是她平时就愿意照顾桌上的人。你可以先再相处一会儿，没必要现在就猜她对你有没有意思。\r
        next: 4.2.5\r
\r
  - id: 4.2.2\r
    channel: left\r
    time: 散场后\r
    lines:\r
      - from: boy\r
        text: 我靠不敢啊，我在我妹面前是正人君子，我问这感觉跟个变态一样\r
        delivery: type\r
      - from: ai\r
        text: 他想认识她，又怕开口时在妹妹面前显得太着急。可以给他一句跟桌游有关的开场，也可以建议他缓一缓，等自己觉得合适再开口。\r
        delivery: thought\r
    choices:\r
      - thought: 请表妹先问问她\r
        需记忆: 我妹的同桌\r
        reply: 你之前提过她可能是你妹妹的同桌。要是你妹妹确实认识她，可以请她先问问，对方愿不愿意加个微信。\r
        next: 4.2.3\r
      - thought: 借桌游当面问她\r
        reply: 可以直接问她一句「下次再玩还想叫你，能加个微信吗？」你把想继续一起玩的意思说清楚，她也好当面答。\r
        next: 4.2.3-direct\r
      - thought: 今天先放一放\r
        reply: 你要是现在开口反而不自在，可以先算了。今天刚认识，以后有机会一起玩，再问也来得及。\r
        next: 4.2.4\r
\r
  - id: 4.2.3\r
    channel: left\r
    time: 散场后\r
    lines:\r
      - from: boy\r
        text: 好！我就假装帮我舍友要吧，看我妹啥反应，不行就算了\r
        delivery: type\r
      - from: ai\r
        text: 他想假装替舍友问，给自己留个台阶。可以理解他怕难为情，但最好把是谁想加说清楚，省得妹妹真把话传岔。\r
        delivery: thought\r
    choices:\r
      - thought: 让他把谁想加说清楚\r
        reply: 你要是怕开口，可以让你妹先帮你问一声。不过最好说是你自己想加，不然她真告诉对方是你舍友想认识她，后面你反而得解释。\r
        set: { 男生意向: 问 }\r
\r
  - id: 4.2.3-direct\r
    channel: left\r
    time: 散场后\r
    lines:\r
      - from: boy\r
        text: 我直接问了，说下次玩还想叫她。她说可以加。她喊她同桌帮忙推一下，结果喊的是我妹。靠，问之前还觉得巨尴尬。\r
        delivery: type\r
      - from: ai\r
        text: 他当面问了，对方答应加微信，随后由她的同桌推联系方式。可以肯定他已经把最难开口的一句说了，接下来等对方发过来就好。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定他已经当面问过\r
        reply: 你当面问了，她也答应了。等你妹把微信推过来就行。真说出来以后，是不是比你刚才想的简单一点？\r
        set: { 男生意向: 问 }\r
\r
  - id: 4.2.4\r
    channel: left\r
    time: 散场后\r
    lines:\r
      - from: boy\r
        text: 哎你说的有道理，而且估计那个女生可能本来就比较开朗吧，我可能就是多想了\r
        delivery: type\r
      - from: ai\r
        text: 他现在更愿意把她的热情理解成性格好，也决定先不问。可以回应他的失落，让他按自己的节奏结束这次聚会。\r
        delivery: thought\r
    choices:\r
      - thought: 让这次聚会自然收尾\r
        reply: 有可能。你今天觉得她挺好相处，这个感受是真的。至于下次有没有机会再认识，留到下次一起玩再看吧。\r
        set: { 男生意向: 不问 }\r
\r
  - id: 4.2.5\r
    channel: left\r
    time: 散场后\r
    lines:\r
      - from: boy\r
        text: 唉，行吧，那就当我多想了，不问不问了，就当认识个牌友，回家回家。\r
        delivery: type\r
      - from: ai\r
        text: 他已经决定不问，准备回家。可以回应他把对方当牌友的决定，不用再替他设想另一种结果。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着他回家收尾\r
        reply: 那今天就先到这儿。有人愿意接你的话，这局玩得也挺有意思。下次碰见，打个招呼就好。\r
        set: { 男生意向: 不问 }\r
\r
  - id: 4.3.1\r
    channel: right\r
    time: 散场后\r
    window:\r
      channel: left\r
      下界: [3.2.3, 3.2.4, 3.3.2]\r
      上界: []\r
      说明: 男生收起手机继续玩过这局后，才进入散场\r
    lines:\r
      - from: girl\r
        text: 我今天玩桌游遇到个男的，是我同桌的表哥\r
        delivery: type\r
      - from: ai\r
        text: 她特地说起今天遇到的男生，还交代了两人的关系。可以问问她为什么想到提他，先听她自己的感受。\r
        delivery: thought\r
    choices:\r
      - thought: 问问她对他的印象\r
        reply: 原来是你同桌的表哥。你今天跟他说上话了吗？他给你的第一印象怎么样？\r
        next: 4.3.2\r
\r
  - id: 4.3.2\r
    channel: right\r
    time: 散场后\r
    lines:\r
      - from: girl\r
        text: 哎呀，就是我感觉他性格还挺好的， 但是我没他微信咋办\r
        delivery: type\r
      - from: ai\r
        text: 她觉得对方性格好，也想继续认识他。她刚说那是同桌的表哥，可以建议先请同桌问问对方愿不愿意加。\r
        delivery: thought\r
    choices:\r
      - thought: 请同桌问问他愿不愿意\r
        reply: 可以找你同桌问一声，请她先问她表哥愿不愿意加。要是他也愿意，你们就有个机会继续聊今天的桌游。\r
        next: 4.3.3\r
\r
  - id: 4.3.3\r
    channel: right\r
    time: 散场后\r
    lines:\r
      - from: girl\r
        text: 但是我不好意思给她说啊，之前谈的前男友太脑残她劝我我没听，我怕她又要说我了\r
        delivery: type\r
      - from: ai\r
        text: 她怕同桌把这次认识新人和上次恋爱联系起来。可以给她一句只谈桌游、先问能不能介绍的开场，也可以让她先放下。\r
        delivery: thought\r
    choices:\r
      - thought: 从下次桌游聊起\r
        reply: 可以说「今天跟你表哥玩得挺开心，下次组局还想叫他。你能不能先问问他愿不愿意加个微信？」你只是想认识他，先把这件事说清楚就行。\r
        next: 4.3.4\r
      - thought: 暂时先不问\r
        reply: 如果你现在一开口就得防着被说，今天也可以先放一放。刚见了一面，你可以等自己真想联系他时再问。\r
        next: 4.3.5\r
\r
  - id: 4.3.4\r
    channel: right\r
    time: 散场后\r
    lines:\r
      - from: girl\r
        text: 可以可以，你太聪明了！我去问\r
        delivery: type\r
      - from: ai\r
        text: 她愿意去问了。接下来需要让同桌先征求表哥的意见，可以确认这一步，让她不用现在就准备加上后要聊什么。\r
        delivery: thought\r
    choices:\r
      - thought: 先把这一句问出去\r
        reply: 嗯，先把这句发给同桌，等她问到再说。你现在只是在问能不能加，还不用把加上以后聊什么都想好。\r
        set: { 女生意向: 问 }\r
\r
  - id: 4.3.5\r
    channel: right\r
    time: 散场后\r
    lines:\r
      - from: girl\r
        text: 嗯…那算了，不问了，万一她再唠叨我我更烦，就这样吧。\r
        delivery: type\r
      - from: ai\r
        text: 她想到同桌可能又说起前任，就决定不问了。可以让她按自己的决定收尾，不用反复说服她。\r
        delivery: thought\r
    choices:\r
      - thought: 让她先把这事放下\r
        reply: 那今天就先不问。觉得他不错，和现在就得加微信，是两件可以分开想的事。\r
        set: { 女生意向: 不问 }\r
\r
  - id: 4.end-no-contact\r
    channel: left\r
    time: 散场后·没有交换微信\r
    when: { 男生意向: 不问, 女生意向: 不问 }\r
    control: true\r
    lines: []\r
    ending: 未交换微信\r
`,Pv=`# 第五幕 · 熟悉期 —— 由 docs/剧本审稿/第五幕-上线定稿.yaml自动生成\r
# 生成命令：node tools/build-chapter.mjs\r
# 实现层补充：tools/ch5-timing.yaml（全局拍序 / 区间门 / 逐消息节拍 / 入场旗标 / 教学记忆收口 / 终局）\r
# 本文件是生成物，不要手改；剧本源与 script/feishu/*.mmd 是定稿，也不要改。\r
title: 第五幕 · 熟悉期\r
chapter: 5\r
时间轴:\r
  - D1 傍晚（周日，互加当天）\r
  - D1 晚\r
  - D2 白天（周一）\r
  - D2 晚\r
  - D3 晚（周二）\r
  - D9（下周一）\r
  - D10（周二）\r
  - D10 晚\r
  - D11（周三）\r
  - D11 晚\r
  - D12（周四）\r
  - D12 晚\r
  - D13（周五）\r
  - D15（周日晚）\r
  - D17（周二）\r
  - D17 晚\r
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
  - id: 在一起\r
    title: 在一起\r
    requires:\r
      - 5m.4.4\r
      - 5f.4.4\r
    set:\r
      在一起: true\r
beats:\r
  - id: 5m.1.1-A\r
    channel: left\r
    label: 开场·双问（D1 傍晚）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 0\r
    when:\r
      男生意向: 问\r
      女生意向: 问\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 我妹说，那女生也找她要过我微信！那不就是我俩想到一块去了？现在加上了，我第一句发啥啊，别显得我准备半天似的。\r
        delivery: pop\r
      - from: ai\r
        text: 两人都问过联系方式，他兴奋，也怕第一句显得太刻意。可以用桌游做开头，有共同话题，对方也容易接。\r
        delivery: thought\r
    choices:\r
      - thought: 给一句自然的开场\r
        reply: 可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。\r
        next: 5m.1.2\r
  - id: 5m.1.1-B\r
    channel: left\r
    label: 开场·仅男问（D1 傍晚）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 1\r
    when:\r
      男生意向: 问\r
      女生意向: 不问\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 微信到手了，我妹牵的线。我对着输入框抠半天了，第一句咋整？总不能发个你好吧，像上门推销的。\r
        delivery: pop\r
      - from: ai\r
        text: 联系方式有了，他卡在怎样开始。可以顺着他对桌游的印象给一句自嘲式开场，省去正式自我介绍的压力。\r
        delivery: thought\r
    choices:\r
      - thought: 从输掉的桌游开口\r
        reply: 你可以发「嗨，那天桌游输给你的那个，还记得吗？」有见过面的事可以聊，一句够用了。\r
        next: 5m.1.2\r
  - id: 5m.1.1-C\r
    channel: left\r
    label: 开场·仅女问（D1 傍晚）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 2\r
    when:\r
      男生意向: 不问\r
      女生意向: 问\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 反转了兄弟，我还没想好咋开口呢，她先加我了！是不是我妹跟她说啥了？你说她这啥意思啊？\r
        delivery: pop\r
      - from: ai\r
        text: 她主动加了好友，他却开始猜表妹有没有说过什么。能确定的是他们已经加上了，可以建议先打招呼，等她实际回应。\r
        delivery: thought\r
    choices:\r
      - thought: 先打招呼，看看怎么聊\r
        reply: 至少她愿意加你。你可以先发「嗨，上次桌游玩得挺开心的」。她为什么先加，等你们聊几句可能就明白了。\r
        next: 5m.1.2\r
  - id: 5m.1.2\r
    channel: left\r
    label: 开场定稿·收敛拍（D1 傍晚，几分钟后）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 3\r
    lines:\r
      - from: boy\r
        text: 想了想，你给的那句我有点发不出来。我自己写了个：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。咋样，会不会有点傻？\r
        delivery: pop\r
        节拍:\r
          pauseBeforeMs: 1500\r
      - from: ai\r
        text: 他改成了自己会说的话，还提了十一点睡觉。开头能让对方想起见面的情景，后半句也留了能接的话题。\r
        delivery: thought\r
    choices:\r
      - thought: 就用他自己写的这句\r
        reply: 挺像你会说的话。「还记得我不」好接，十一点必睡也有点好笑。就照这句发吧。\r
        next: 5m.1.3\r
  - id: 5m.1.3\r
    channel: left\r
    label: 慢回初显（D1 晚，发出约四十分钟后）\r
    time: D1 晚\r
    timeRank: 1\r
    order: 7\r
    节拍: 慢\r
    lines:\r
      - from: boy\r
        text: 发了！四十来分钟才回，就一句『记得，你也要到点睡了』。我看了半天，这算是想聊还是在跟我说晚安啊？\r
        delivery: pop\r
      - from: ai\r
        text: 他在用等待的时间猜对方态度。原话既回应了自我介绍，也顺着他提到了睡觉。可以自然道晚安，也可以用桌游接一句。\r
        delivery: thought\r
    choices:\r
      - thought: 先道晚安\r
        reply: 她至少接住了你十一点睡觉的梗，四十分钟说明不了更多。你可以回「还没到点呢，我先去洗漱了，晚安」。第一晚聊到这儿也挺好。\r
        next: 5m.1.4\r
      - thought: 接着聊桌游\r
        reply: 要是还想聊，就回「还早呢。桌游我输你的那局还没扳回来，什么时候再战？」有个她能接的话题，聊到哪算哪。\r
        next: 5m.1.5\r
    window:\r
      channel: right\r
      下界:\r
        - 5f.1.1-A\r
        - 5f.1.1-B\r
        - 5f.1.1-C\r
      上界:\r
        - 5f.1.2\r
      说明: 男方收到女方实际入场路线的首句\r
  - id: 5m.1.4\r
    channel: left\r
    label: 稳住一夜（分支A·D1深夜收住，D2白天复盘）\r
    time: D2 白天（周一）\r
    timeRank: 2\r
    order: 8\r
    lines:\r
      - from: boy\r
        text: 昨晚听你的，道了晚安就真睡了，还赶在十一点前，破天荒。今早她又找我聊了两句。也没啥事，就是我还想跟她多说会儿，老想点开那个框。\r
        delivery: pop\r
      - from: ai\r
        text: 道晚安之后，女生仍主动联系。他惦记的是没聊够，可以肯定这个感受，同时用今早的情况帮他放下对昨晚收尾的顾虑。\r
        delivery: thought\r
    choices:\r
      - thought: 昨晚收得早，今天还能聊\r
        reply: 昨晚那句晚安没把话聊死，今早她还来找你了。想再多聊两句很正常，有事想跟她说的时候再发就行。\r
        next: 5m.1.6\r
  - id: 5m.1.5\r
    channel: left\r
    label: 接住之后（分支B·D1晚热聊，D2白天复盘）\r
    time: D2 白天（周一）\r
    timeRank: 2\r
    order: 9\r
    lines:\r
      - from: boy\r
        text: 昨晚顺着翻盘那个梗还真聊起来了，聊到十一点多。十一点必睡，当天就倒了，笑死。她后来跟我说晚安。结果今天到现在一条没有……我昨晚是不是聊太多了？\r
        delivery: pop\r
      - from: ai\r
        text: 昨晚聊得投入，今天暂时安静，他把两件事联系起来了。先指出昨晚有正常收尾，今天的沉默还不足以判断她的态度。\r
        delivery: thought\r
    choices:\r
      - thought: 先让他别盯着回复\r
        reply: 你们昨晚聊得起来，最后也正常道了晚安。今天还没消息，先别拿它给昨晚判分。做点自己的事，晚些再看。\r
        next: 5m.1.6\r
  - id: 5m.1.6\r
    channel: left\r
    label: 渐入佳境（汇合·D2 晚）\r
    time: D2 晚\r
    timeRank: 3\r
    order: 11\r
    requires:\r
      - 5f.1.2\r
    lines:\r
      - from: boy\r
        text: 刚聊完！她晚上主动来找我了，一聊就一个多钟头。其实也没啥大事，东一句西一句的，还挺舒服。我白天还在那儿瞎想，现在感觉也不用老算她多久回了。\r
        delivery: pop\r
      - from: ai\r
        text: 他收到女生的主动联系，注意力从回复间隔回到了聊天本身。可以回应这次体验，让他把舒服的来往当作参考。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定这次轻松的来往\r
        reply: 你开始在意的是这一个钟头聊得舒不舒服了。能东一句西一句聊这么久，听着挺自在。下次有想说的话，再接着聊就行。\r
        next: 5m.2.1\r
  - id: 5m.2.1\r
    channel: left\r
    label: 聊热（D9，一周多后）\r
    time: D9（下周一）\r
    timeRank: 5\r
    order: 15\r
    lines:\r
      - from: boy\r
        text: 又聊了一个礼拜。她回得慢但都会回，我好像也习惯了。今天她在家加班，还给我发了张照片，配一个『困』。她的猫踩着键盘抢镜，叫煤球，特别敬业。你说她这算不算有点把我当自己人了？\r
        delivery: pop\r
      - from: ai\r
        text: 她主动分享加班和猫的照片。他把稳定的来往理解成亲近，可以肯定这个具体变化，再建议顺着她发来的内容回应。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着照片聊两句\r
        reply: 她愿意把这种随手拍的日常发给你，至少跟你聊天是自在的。可以回一句「煤球今天也加班啊」，再让她忙完早点歇。先聊这张照片就挺好。\r
        next: 5m.2.2\r
    记忆候选:\r
      - 缩略标签: 都会回\r
        短句: 她回得慢但都会回\r
        类型: 对Ta的美化\r
        线: ②她的回避\r
  - id: 5m.2.2\r
    channel: left\r
    label: 上头自察（D10）\r
    time: D10（周二）\r
    timeRank: 6\r
    order: 16\r
    节拍: 快\r
    lines:\r
      - from: boy\r
        text: 我现在一天能给她发八百条『在干嘛』。她有时候隔俩小时才回，我就又点开那个框看，明明啥都没响。客观说，我是不是有点上头？\r
        delivery: pop\r
      - from: ai\r
        text: 他开始留意自己的消息频率，也发现等待让他不安。可以试着少发重复问候，或保留自然分享，同时给对方留出回话的时间。\r
        delivery: thought\r
    choices:\r
      - thought: 试试少发重复问候\r
        reply: 有点，但你已经发现自己在等什么了。今天试试少发几次「在干嘛」，真有事想分享再发，看看空下来的时候你是什么感觉。\r
        next: 5m.2.3\r
      - thought: 有话就聊，给她时间回\r
        reply: 想跟她说话很正常。碰到好玩的就发一条，她忙的时候先去做你的事，等她有空再接着聊。\r
        next: 5m.2.4\r
  - id: 5m.2.3\r
    channel: left\r
    label: 收敛试验（分支A·D10 晚）\r
    time: D10 晚\r
    timeRank: 7\r
    order: 17\r
    lines:\r
      - from: boy\r
        text: 今天试着少发了，话打了删删了打，最后就发了句晚安。她回得跟平时一样，也没问我咋这么安静……我感觉我在演一个淡定的人。\r
        delivery: pop\r
      - from: ai\r
        text: 他减少了发消息的次数，对方的回复没有明显变化。他仍然不舒服，可以帮他区分想聊的心情和刻意压住自己的做法。\r
        delivery: thought\r
    choices:\r
      - thought: 让他留点自己舒服的节奏\r
        reply: 少发一天也会难受，毕竟你原本就想找她说话。真有事想分享，可以照常发，没必要把自己练成一个从来不主动的人。\r
        next: 5m.2.5\r
  - id: 5m.2.4\r
    channel: left\r
    label: 照旧自嘲（分支B·D10 晚）\r
    time: D10 晚\r
    timeRank: 7\r
    order: 18\r
    lines:\r
      - from: boy\r
        text: 今天还是想找她就找了，发了好几回。她有时候一个『哈哈哈』隔俩小时才来。我有一阵真像在对着屏幕自己跟自己聊天，笑死。\r
        delivery: pop\r
      - from: ai\r
        text: 他继续主动联系，回复的节奏还是不同。现在已经有了一段日常往来，可以建议约一次见面，让他看看两人当面相处的感觉。\r
        delivery: thought\r
    choices:\r
      - thought: 把话题转向见面\r
        reply: 隔着屏幕，有时候只能等她有空。你们已经聊了一阵了，可以问问她哪天愿意出来吃个饭，当面相处一会儿，可能比来回猜回复轻松。\r
        next: 5m.3.1\r
  - id: 5m.2.5\r
    channel: left\r
    label: 缓冲·约线下（分支A·D11）\r
    time: D11（周三）\r
    timeRank: 8\r
    order: 19\r
    lines:\r
      - from: boy\r
        text: 今天还是这样，不找吧心里老惦记，找吧又怕她嫌烦。线上聊得再欢，她一忙我就在这儿干等着。咋整啊？\r
        delivery: pop\r
      - from: ai\r
        text: 控制发消息的频率没有解决他的顾虑。他想要一次能专心相处的机会，可以把见面作为具体建议，让对方按自己的时间答复。\r
        delivery: thought\r
    choices:\r
      - thought: 试着约一次见面\r
        reply: 可以试试约她吃个饭。你们聊了这么久，有机会当面说话，你也能看看自己跟她待一块是什么感觉。先问她哪天方便就好。\r
        next: 5m.3.1\r
  - id: 5m.3.1\r
    channel: left\r
    label: 约局参谋（D12 晚，第二周）\r
    time: D12 晚\r
    timeRank: 11\r
    order: 24\r
    lines:\r
      - from: boy\r
        text: 行，听人劝吃饱饭。我想约她周六出来吃个饭。直接问周六有空吗，会不会显得有点猴急？\r
        delivery: pop\r
      - from: ai\r
        text: 他已经决定约饭，想把邀请说得自然。可以用两人都知道的桌游输赢作由头，给出具体时间，让她有余地答复。\r
        delivery: thought\r
    choices:\r
      - thought: 用桌游的事开口约饭\r
        reply: 可以发「周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭」。约什么、哪天约都清楚，她也可以按自己的安排回你。\r
        next: 5m.3.2\r
  - id: 5m.3.2\r
    channel: left\r
    label: 改期失落（D13 周五）\r
    time: D13（周五）\r
    timeRank: 12\r
    order: 26\r
    lines:\r
      - from: boy\r
        text: 她说周六来不了了，项目临时有个节点，问改周日行不行。还发了个不好意思的表情。我知道她说了周日，但我还是有点不得劲。会不会其实不想来啊？\r
        delivery: pop\r
      - from: ai\r
        text: 原来的约定改了，他有些失落。她给出了具体的替代日期，这能回应他担心约会取消的问题，仍无法从一句话确定她的心情。\r
        delivery: thought\r
    choices:\r
      - thought: 先把周日约下来\r
        reply: 你本来在等周六，失落也正常。她主动提了周日，目前你们还有见面的安排。可以回「行，周日，你忙你的」，先把这次改期接下来。\r
        next: 5m.3.3\r
  - id: 5m.3.3\r
    channel: left\r
    label: 见面复盘（D15 周日晚）\r
    time: D15（周日晚）\r
    timeRank: 13\r
    order: 28\r
    lines:\r
      - from: boy\r
        text: 见完了！吃饭散步聊了三个多小时，临走还拍了张合照。她问我下次想吃啥，说她想吃烤肉，下回带我吃。吃饭时她回了好几条工作消息，我坐那儿有点不知道干啥。还有个事，我跟她说，有次她半天没回，我半夜还刷她朋友圈，看她睡了没。她笑了下，说『你想得可真多』。我这话是不是说多了？\r
        delivery: pop\r
      - from: ai\r
        text: 他既高兴她主动提下次，又担心自己那句坦白让她不舒服。她回了工作消息，也有继续见面的表示。可以分别回应这两件事，先不替她解释那声笑。\r
        delivery: thought\r
    choices:\r
      - thought: 回应见面的好感和他的顾虑\r
        reply: 她主动提了下次吃烤肉，这个信号比你回想她笑得像不像介意更具体。回工作消息那几分钟，你坐着会尴尬也正常。至于那句「你想得可真多」，目前听不出她有多介意，下次相处时留意她怎么回应就好。\r
        next: 5m.3.4\r
    记忆候选:\r
      - 缩略标签: 想吃烤肉\r
        短句: 说她想吃烤肉\r
        类型: 干扰项\r
        线: 无\r
  - id: 5m.3.4\r
    channel: left\r
    label: 求确认（D15 当晚睡前）\r
    time: D15（周日晚）\r
    timeRank: 13\r
    order: 30\r
    lines:\r
      - from: boy\r
        text: 睡前最后问一句。就这两周，我还有戏吧？我上次这么上心，还是给我表妹辅导作业的时候。\r
        delivery: pop\r
      - from: ai\r
        text: 他想知道这两周的来往有没有继续发展的可能。她主动找他聊，愿意见面，也提到下次，可以给有依据的判断，但不保证她会答应表白。\r
        delivery: thought\r
    choices:\r
      - thought: 用已经发生的事给他判断\r
        reply: 她晚上主动找过你，今天也聊得来，还提了下次一起吃烤肉。看得出她愿意继续和你相处。至于你们会不会谈恋爱，那得等你们真的说到这一步。\r
        next: 5m.4.1\r
  - id: 5m.4.1\r
    channel: left\r
    label: 表白排练（D17，见面两天后）\r
    time: D17（周二）\r
    timeRank: 14\r
    order: 32\r
    lines:\r
      - from: boy\r
        text: 我想跟她表白。稿子打了删删了打，现在是『我挺喜欢你的，想跟你正经处对象，你考虑考虑』。读着怎么这么怪，你帮我改改。\r
        delivery: pop\r
      - from: ai\r
        text: 他希望表达喜欢，又担心措辞生硬。「考虑考虑」听着像催人回一个决定。可以直接问是否交往，也可以先说感受，请她说说自己的想法。\r
        delivery: thought\r
    choices:\r
      - thought: 直接问她要不要在一起\r
        reply: 可以说「跟你待一块儿的时候我挺开心的。我喜欢你，想跟你谈恋爱。你愿意吗？」意思已经很清楚，问完就留点时间给她。\r
        next: 5m.4.2\r
        节拍:\r
          afterMs: 1600\r
      - thought: 先说喜欢，听听她怎么想\r
        reply: 可以先说「跟你待一块的时候特别舒服，我可能有点喜欢你，你觉得呢？」先让她知道你的感受，她可以按自己的方式回答。\r
        next: 5m.4.3\r
  - id: 5m.4.2\r
    channel: left\r
    label: 直球发出（分支A·D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 33\r
    节拍: 长停顿\r
    lines:\r
      - from: boy\r
        text: 发了！就用你改的那句。发完我就想把手机扔了。她一会儿在输入，一会儿又没了，我盯得心脏一抽一抽的。你说这是在想怎么回，还是想拒绝我啊？\r
        delivery: pop\r
      - from: ai\r
        text: 他已经发出了直接问要不要在一起的话，现在把输入状态当成了答案的线索。能知道的只有她还没回，建议他离开屏幕一会儿，等实际回复。\r
        delivery: thought\r
    choices:\r
      - thought: 先停下对输入状态的猜测\r
        reply: 「正在输入」看不出她准备答应还是拒绝。你已经把想说的发过去了，先去洗把脸，让她有时间把自己的话写完。\r
        next: 5m.4.4\r
  - id: 5m.4.3\r
    channel: left\r
    label: 含蓄发出（分支B·D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 34\r
    节拍: 长停顿\r
    lines:\r
      - from: boy\r
        text: 你改的那句发了。我特别想撤回，又怕撤回更显得我有事。她要回一句『你说啥呢哈哈』，我下半辈子咋做人啊？\r
        delivery: pop\r
      - from: ai\r
        text: 他提前想象对方用玩笑带过，正在犹豫要不要撤回。可以说明他已经把感受说清楚，等对方实际回应后再决定怎么接。\r
        delivery: thought\r
    choices:\r
      - thought: 先等她真的回复\r
        reply: 你这句表达了喜欢，也给她留了说自己想法的空间。先别撤回，也不用替她写一条最尴尬的回复。等真的回了，再想怎么接。\r
        next: 5m.4.4\r
  - id: 5m.4.4\r
    channel: left\r
    label: 表白结果（D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 38\r
    节拍: 慢\r
    ending: 在一起\r
    lines:\r
      - from: boy\r
        text: 她回了！！我以为凉了，结果她说『我也想试试，只是我可能不太会谈恋爱，你多担待』。我先回了三个感叹号。她这是答应了对吧？那个『只是』后面的是啥意思啊？\r
        delivery: pop\r
        节拍:\r
          pauseBeforeMs: 1200\r
      - from: ai\r
        text: 对方愿意试着交往，也主动说了自己对恋爱有顾虑。他高兴之余想知道后半句是什么意思。可以先确认答复，再建议以后慢慢了解她具体担心什么。\r
        delivery: thought\r
    choices:\r
      - thought: 道喜，也接住她后半句\r
        reply: 是，她愿意和你试试，恭喜。后半句是在告诉你，她对怎么谈恋爱也没把握。以后遇到具体的事，你们可以再聊她需要什么、你又是怎么想的。\r
    记忆候选:\r
      - 缩略标签: 不会谈恋爱\r
        短句: 只是我可能不太会谈恋爱\r
        类型: Ta的真实\r
        线: ②她的回避\r
    window:\r
      channel: right\r
      下界:\r
        - 5f.4.2\r
        - 5f.4.3\r
      上界:\r
        - 5f.4.4\r
      说明: 女方任一答复路线发出后，男方收到并回信\r
  - id: 5f.1.1-A\r
    channel: right\r
    label: 开场·双问（D1 晚，收到他的消息）\r
    time: D1 晚\r
    timeRank: 1\r
    order: 4\r
    when:\r
      男生意向: 问\r
      女生意向: 问\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 我同桌说，她表哥也找她要过我微信。等于我俩互相问了一遍？刚加上，他就发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？\r
        delivery: pop\r
      - from: ai\r
        text: 她发现对方也主动问过联系方式，对他的开场觉得好笑。可以给一句轻松的回复，既回答还记不记得，也顺着十一点睡觉开个玩笑。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着十一点的梗回\r
        reply: 回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。\r
        next: 5f.1.2\r
  - id: 5f.1.1-B\r
    channel: right\r
    label: 开场·仅女问（D1 晚，收到他的消息）\r
    time: D1 晚\r
    timeRank: 1\r
    order: 5\r
    when:\r
      男生意向: 不问\r
      女生意向: 问\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 磨半天终于把他加上了，开场白还没憋出来呢，他先发来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。行吧，省得我想了。咋接？\r
        delivery: pop\r
      - from: ai\r
        text: 她先加了好友，又因为对方先开口松了口气。对方已经提供了见面和睡觉两个话题，可以直接接他的句子。\r
        delivery: thought\r
    choices:\r
      - thought: 接住他先递来的话\r
        reply: 可以回「记得，你也要到点睡了」。他给了现成的话题，你按平时说话的样子接一句就行。\r
        next: 5f.1.2\r
  - id: 5f.1.1-C\r
    channel: right\r
    label: 开场·仅男问（D1 晚，收到他的消息）\r
    time: D1 晚\r
    timeRank: 1\r
    order: 6\r
    when:\r
      男生意向: 问\r
      女生意向: 不问\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 我同桌那个表哥加我了。我刚点通过，他消息就来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人是有多着急，哈哈。回啥好啊？\r
        delivery: pop\r
      - from: ai\r
        text: 他发消息的速度让她觉得好笑，她也在考虑怎么回应。可以给一句低压力的答复，聊天要不要继续，等她自己感受。\r
        delivery: thought\r
    choices:\r
      - thought: 先回一句，再看怎么聊\r
        reply: 可以回「记得，你也要到点睡了」。顺着他的梗逗一句就行，接下来想聊多少，看你自己舒服不舒服。\r
        next: 5f.1.2\r
  - id: 5f.1.2\r
    channel: right\r
    label: 初聊反馈（D2 晚）\r
    time: D2 晚\r
    timeRank: 3\r
    order: 10\r
    lines:\r
      - from: girl\r
        text: 昨晚我先回了句『记得，你也要到点睡了』，本来就随口一逗。这两天聊下来比我想的舒服，有话就接，我没回他也没催。今天他发了几条，我忙着还没仔细回。晚上有空了，我去找他唠两句。\r
        delivery: pop\r
      - from: ai\r
        text: 她觉得这几次聊天没有催促，也有了主动继续聊的意愿。可以肯定她想联系就去联系，按她现在有空的节奏开始。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她主动联系的念头\r
        reply: 你现在有空，也有话想跟他说，就去聊两句吧。前面的消息挑一个你真想接的回，剩下的不用补作业。\r
        next: 5f.1.3\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.1.4\r
        - 5m.1.5\r
      上界:\r
        - 5m.2.1\r
      说明: 女方主动联系在男方白天复盘之后、D9 之前\r
  - id: 5f.1.3\r
    channel: right\r
    label: 慢回真相（D3 晚）\r
    time: D3 晚（周二）\r
    timeRank: 4\r
    order: 12\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 他回消息也太勤快了……我下班一看攒了一堆。不是不想理他，就是累，连回啥都懒得想。对了，他头像是只小熊，看着挺憨。哎，今晚我就想回个什么，让他知道我看见了。\r
        delivery: pop\r
      - from: ai\r
        text: 她看见了消息，也想让对方知道，但下班后没有精力长聊。可以建议直接说明今天很累，或用一个表示累了的表情先回应。\r
        delivery: thought\r
    choices:\r
      - thought: 直接说今天累了\r
        reply: 可以回「下班瘫了，今天回不动了」。他知道你在休息，你也不用边累边想怎么把每条都回得有意思。\r
        next: 5f.1.4\r
      - thought: 发个表情先接一句\r
        reply: 懒得打字就丢个摊倒的表情，让他知道你看见了。想好好聊的话，等有精神的时候再聊。\r
        next: 5f.1.5\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.1.6\r
      上界:\r
        - 5m.2.1\r
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由\r
  - id: 5f.1.4\r
    channel: right\r
    label: 直说之后（分支A·D3 晚）\r
    time: D3 晚（周二）\r
    timeRank: 4\r
    order: 13\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 我真照你说的说累了。结果他秒回一大段，什么『好好休息』『别太拼』『记得吃晚饭』……排比句都出来了。我本来就回不动，看见那一大段更不知道说啥，就回了个嗯。我是不是有点不知好歹？\r
        delivery: pop\r
      - from: ai\r
        text: 她直说累了，对方给了很多关心，她反而一时不知道怎么接。可以肯定她已经回应过，接不动时先休息，也不必现在评价这份关心。\r
        delivery: thought\r
    choices:\r
      - thought: 让她先歇一会儿\r
        reply: 你已经跟他说今天很累了，回个「嗯」也够了。他想关心你，你现在接不动，两件事都说得通。先歇会儿，明天有精神再聊。\r
        next: 5f.2.1\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.1.6\r
      上界:\r
        - 5m.2.1\r
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由\r
  - id: 5f.1.5\r
    channel: right\r
    label: 表情包之后（分支B·D3 晚）\r
    time: D3 晚（周二）\r
    timeRank: 4\r
    order: 14\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 丢了个摊倒的表情过去，他正经回我『你早点休息』，还带了个他自己的表情包，土得掉渣。就是……有点可爱。算了，我洗漱去了。\r
        delivery: pop\r
      - from: ai\r
        text: 她用一个表情回应了消息，对方也顺着聊了两句。她觉得那份认真有点可爱，现在想收尾，可以轻松接一句。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着这个小插曲收尾\r
        reply: 土得可爱也是一种可爱。今天回到这儿就挺好，去洗漱吧。\r
        next: 5f.2.1\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.1.6\r
      上界:\r
        - 5m.2.1\r
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由\r
  - id: 5f.2.1\r
    channel: right\r
    label: 她的热闹（D11）\r
    time: D11（周三）\r
    timeRank: 8\r
    order: 20\r
    requires:\r
      - 5m.2.2\r
    lines:\r
      - from: girl\r
        text: 这一周多一直断断续续聊着。他今天突然夸我开朗，说『跟你聊天不累』。那是，我不在办公室他们都没那么热闹，周末也老有人叫我出去。他坐那儿话倒不多，手机上还天天找我。反正听他夸我还挺开心的，嘿嘿。\r
        delivery: pop\r
      - from: ai\r
        text: 她喜欢被他说聊天不累，也享受自己能让大家聊起来。可以回应这份开心，也可以借机问问，累的时候她更愿意怎么和人相处。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她的开心聊\r
        reply: 你确实喜欢跟人聊天，也能让场子热起来。他说跟你聊天不累，你听了开心也正常，有些夸奖好听就是因为对方说到了你喜欢自己的地方。\r
        next: 5f.2.2\r
      - thought: 问问她累时愿意找谁\r
        reply: 跟谁都能聊是你的长处。我还想问一个小问题，你累了、平时那股劲儿没了的时候，有没有谁是你还愿意单独找的？没想到也没关系。\r
        next: 5f.2.3\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.2.3\r
        - 5m.2.4\r
      上界:\r
        - 5m.3.1\r
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内\r
  - id: 5f.2.2\r
    channel: right\r
    label: 谈资受用（分支A·D11 晚）\r
    time: D11 晚\r
    timeRank: 9\r
    order: 21\r
    lines:\r
      - from: girl\r
        text: 晚上跟闺蜜吃饭，不知道怎么又说起他了。我说有个闷葫芦天天找我聊天，她们立马开始起哄。我还说就是普通朋友啊，结果回家路上自己一直笑。烦死了。\r
        delivery: pop\r
      - from: ai\r
        text: 她嘴上坚持普通朋友，回家路上却还在笑。她来分享的是被说中心事的有趣，可以顺着玩笑回应，不替她确定两人的关系。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她嘴硬的玩笑\r
        reply: 你把人叫闷葫芦，还专门带去饭桌上讲，难怪她们起哄。先让你们当普通朋友吧，今天笑这一路也挺好。\r
        next: 5f.2.4\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.2.3\r
        - 5m.2.4\r
      上界:\r
        - 5m.3.1\r
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内\r
  - id: 5f.2.3\r
    channel: right\r
    label: 自问失落（分支B·D11 晚）\r
    time: D11 晚\r
    timeRank: 9\r
    order: 22\r
    lines:\r
      - from: girl\r
        text: 睡前又想了下你问的那个。还真想不出来。我累了就点个外卖，自己刷会儿手机，也不想找谁。明明平时跟谁都能聊，真想说点啥了好像又差一口气……说不上来，今晚有点怪怪的。\r
        delivery: pop\r
      - from: ai\r
        text: 她认真想了白天的问题，发现平时热闹和疲惫时想找谁是两回事。她还说不清这份失落，可以先回应她的发现，不急着建议她改变交友方式。\r
        delivery: thought\r
    choices:\r
      - thought: 先陪她把这点说清楚\r
        reply: 平时跟大家聊得来，和累的时候想自己待着，都很正常。你今天只是发现了自己有时会想跟谁更近一点。先把这句话留着，不用今晚就想出那个人是谁。\r
        next: 5f.2.4\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.2.3\r
        - 5m.2.4\r
      上界:\r
        - 5m.3.1\r
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内\r
  - id: 5f.2.4\r
    channel: right\r
    label: 打岔（D12）\r
    time: D12（周四）\r
    timeRank: 10\r
    order: 23\r
    lines:\r
      - from: girl\r
        text: 他今天问我家是哪儿的、家里都有谁，我顺手聊别的去了。他也没接着问。这点我还挺喜欢的，换个人一通问我早烦了。\r
        delivery: pop\r
      - from: ai\r
        text: 她觉得被尊重，因为把话题转开后对方没有追问。可以肯定具体的分寸感，不需要由这一次聊天判断两人整体相处得怎样。\r
        delivery: thought\r
    choices:\r
      - thought: 回应她喜欢的分寸感\r
        reply: 他看你没接那个话题，也就跟着聊别的了。你喜欢这种自在挺正常，家里的事什么时候想说，由你决定。\r
        next: 5f.3.1\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.2.3\r
        - 5m.2.4\r
      上界:\r
        - 5m.3.1\r
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内\r
  - id: 5f.3.1\r
    channel: right\r
    label: 约局接收（D12 晚）\r
    time: D12 晚\r
    timeRank: 11\r
    order: 25\r
    requires:\r
      - 5m.3.1\r
    lines:\r
      - from: girl\r
        text: 他问我『周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭』。我答应了，还挺会找台阶的。我同桌就是他表妹，兜了一圈还真约上了。就是明天项目有个节点，搞不好得加班。要真累成那样我也不想临时鸽他。还有，见面我要注意啥吗？\r
        delivery: pop\r
      - from: ai\r
        text: 她已经答应见面，也想到工作可能影响安排。可以给一个轻松的见面建议，再提醒如果时间有变，早点告诉对方。\r
        delivery: thought\r
    choices:\r
      - thought: 让她按平时相处，有变提前说\r
        reply: 见面就聊你们平时会聊的事，桌游都打过了，不用专门准备话题。要是明天忙完发现周六实在不行，提前告诉他，再提个你能去的时间。\r
        next: 5f.3.2\r
    记忆候选:\r
      - 缩略标签: 同桌是表妹\r
        短句: 我同桌就是他表妹\r
        类型: 干扰项\r
        线: 无\r
  - id: 5f.3.2\r
    channel: right\r
    label: 临时改期（D13 周五）\r
    time: D13（周五）\r
    timeRank: 12\r
    order: 27\r
    requires:\r
      - 5m.3.2\r
    lines:\r
      - from: girl\r
        text: 乌鸦嘴，项目真炸了。周六去不了，我跟他说改周日行不行。他就回了句『行，周日，你忙你的』。我看了好几遍，怎么有点像不高兴？\r
        delivery: pop\r
      - from: ai\r
        text: 他同意改到周日，回复短，她担心改期让他失望。情绪还无法确认，可以建议她补一句自己仍期待见面，让对方知道这次变动是工作所致。\r
        delivery: thought\r
    choices:\r
      - thought: 补一句她还想见面\r
        reply: 他答应周日了，单看这句话还看不出有多介意。你要是也期待见面，可以补一句「周日见啊，我还是挺想去的」。事情变了，把你在意的部分说清楚就好。\r
        next: 5f.3.3\r
  - id: 5f.3.3\r
    channel: right\r
    label: 见面复盘（D15 周日晚）\r
    time: D15（周日晚）\r
    timeRank: 13\r
    order: 29\r
    requires:\r
      - 5m.3.3\r
    lines:\r
      - from: girl\r
        text: 吃完了！本来还怕见了尴尬，结果吃饭散步聊了三个多小时，临走还拍了张合照。饭吃到一半我还回了好几条工作消息，回完他也能接上。散步的时候他跟我说，有次我半天没回，他半夜还在刷我朋友圈，看我睡了没。我愣了一下，笑着说『你想得可真多』。不过我后来还在想，是不是家里给了特别多爱，才这么会关心人？吃啥逛啥他都听我的，也挺省心。\r
        delivery: pop\r
      - from: ai\r
        text: 她觉得见面舒服，也把他的关注往关心上想。她听到半夜刷朋友圈时确实愣了一下。可以同时回应这两种感受，家庭情况要等他自己说。\r
        delivery: thought\r
    choices:\r
      - thought: 让她保留开心和那一下意外\r
        reply: 你们今天聊得来，临走还拍了照，难怪你心里挺开心的。听到他半夜还在刷你朋友圈，你也确实愣了一下。开心和有点意外可以同时有。至于他家里怎么样，等他自己讲，比你现在猜得准。\r
        next: 5f.3.4\r
    记忆候选:\r
      - 缩略标签: 半夜刷朋友圈\r
        短句: 他半夜还在刷我朋友圈，看我睡了没\r
        类型: Ta的真实\r
        线: ①他的焦虑\r
      - 缩略标签: 家里有爱\r
        短句: 是不是家里给了特别多爱，才这么会关心人\r
        类型: 对Ta的美化\r
        线: ①他的焦虑\r
  - id: 5f.3.4\r
    channel: right\r
    label: 替他找理由（D15 当晚睡前）\r
    time: D15（周日晚）\r
    timeRank: 13\r
    order: 31\r
    lines:\r
      - from: girl\r
        text: 躺下了又想起来，他啥都听我的，这点其实我有点介意。但跟他待着是真不用费脑子。前几天家里的事我没接着聊，他也就没问了。可能……我就是想跟一个相处起来不费劲的人待着吧。\r
        delivery: pop\r
      - from: ai\r
        text: 她喜欢不用费力维持气氛，也还没确定自己是否喜欢一直由她拿主意。可以把这两个感受分开回应，后面相处时再看她最在意哪一点。\r
        delivery: thought\r
    choices:\r
      - thought: 分开说舒服和总要拿主意\r
        reply: 你喜欢的是跟他待着不用撑场面，这点挺具体。至于去哪儿、吃什么老要你定，你要是哪次嫌累了，也可以跟他说让他挑一次。\r
        next: 5f.4.1\r
  - id: 5f.4.1\r
    channel: right\r
    label: 表白收到（D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 35\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 他跟我表白了。说喜欢我，问我怎么想。我盯屏幕得有十分钟了。说不心动是假的，但我一想到真要谈了就怕，之前一认真就搞砸。你说我这种，能谈好吗？\r
        delivery: pop\r
      - from: ai\r
        text: 她对他有好感，也怕认真交往以后把事情搞砸。她需要的是眼下怎么回答，可以建议她把顾虑说清楚，也可以先从一句愿意试试开始。\r
        delivery: thought\r
    choices:\r
      - thought: 把喜欢和顾虑一起说\r
        reply: 想试的话，可以把你现在会说的也告诉他：「我也想试试，只是我可能不太会谈恋爱，你多担待」。他能听见你的愿意，也知道你心里还有点没底。\r
        next: 5f.4.2\r
        节拍:\r
          afterMs: 1600\r
      - thought: 先从愿意试试说起\r
        reply: 可以先打一句「我们先试试」。你今天只需要告诉他现在的想法，剩下的话等你想说清楚了再补。\r
        next: 5f.4.3\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.4.2\r
        - 5m.4.3\r
      上界: []\r
      说明: 男方任一表白路线发出后，女方收到并求助\r
  - id: 5f.4.2\r
    channel: right\r
    label: 说清恐惧（分支A·D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 36\r
    节拍: 长停顿\r
    lines:\r
      - from: girl\r
        text: 我把那句打出来了：『我也想试试，只是我可能不太会谈恋爱，你多担待』。打完又盯着看了半天。越看越觉得这话有点重，像把我自己交出去了。发还是不发，你帮我看看。\r
        delivery: pop\r
      - from: ai\r
        text: 她已经把愿意和顾虑都写出来，犹豫是因为这句话很坦白。可以帮她确认句子表达了现在的想法，把是否发送留给她。\r
        delivery: thought\r
    choices:\r
      - thought: 确认她想说的都在里面\r
        reply: 这句已经把你想试试、又没那么有把握都说出来了。你如果想让他知道的就是这些，可以发。后面的事，等真的遇到了再一起说。\r
        next: 5f.4.4\r
  - id: 5f.4.3\r
    channel: right\r
    label: 轻装纠结（分支B·D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 37\r
    节拍: 长停顿\r
    lines:\r
      - from: girl\r
        text: 我按你说的先打了『我们先试试』，又给删了。就觉得少了点啥，好像现在不说，我以后搞砸了又得怪自己。也可能是我想太远了，他就是问我要不要试试。\r
        delivery: pop\r
      - from: ai\r
        text: 简短的答复让她容易开口，但她仍想说明自己没把握。可以补上这层顾虑，让她按真正想表达的意思回复，不必预先为以后发生的事负责。\r
        delivery: thought\r
    choices:\r
      - thought: 补上她在意的那半句\r
        reply: 你想让他知道你也会紧张，可以多说半句：「我也想试试，只是我可能不太会谈恋爱，你多担待」。说到你眼下有把握的地方就够了。\r
        next: 5f.4.4\r
  - id: 5f.4.4\r
    channel: right\r
    label: 答应收尾（D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 39\r
    requires:\r
      - 5m.4.4\r
    节拍: 慢\r
    ending: 在一起\r
    lines:\r
      - from: girl\r
        text: 发了！『我也想试试，只是我可能不太会谈恋爱，你多担待』。我手一直抖，跟考试交卷似的。他秒回了三个感叹号……好家伙。发出去那一下反倒没那么吓人了。\r
        delivery: pop\r
        节拍:\r
          pauseBeforeMs: 1800\r
      - from: ai\r
        text: 她发出了自己愿意试试的答复，也收到了对方的回应。她比发之前放松了，可以顺着这个开心的小插曲收尾，暂时不用讨论更远的事。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她发出去后的轻松\r
        reply: 三个感叹号，看来他刚才也没少等。你已经把最难开口的话发出去了，今天可以先开心一会儿。\r
`,np=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.\r
title: 第六幕 · 官宣与期待\r
chapter: 6\r
时间轴:\r
  - 交往第1天 周三 09:10\r
  - 交往第1天 周三 09:25\r
  - 交往第1天 周三 09:30\r
  - 交往第1天 周三 11:30\r
  - 交往第1天 周三 11:32\r
  - 交往第1天 周三 13:10\r
  - 交往第1天 周三 13:13\r
  - 交往第1天 周三 13:16\r
  - 交往第1天 周三 14:00\r
  - 交往第1天 周三 20:30\r
  - 交往第1天 周三 20:40\r
  - 交往第1天 周三 20:43\r
  - 交往第1天 周三 20:50\r
  - 交往第1天 周三 20:58\r
  - 交往第1天 周三 20:59\r
  - 交往第1天 周三 21:10\r
  - 交往第1天 周三 21:11\r
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
endings: []\r
beats:\r
  - id: 6m.CHOICE\r
    channel: left\r
    time: 交往第1天 周三 09:10\r
    lines:\r
      - from: boy\r
        text: 昨晚她答应跟我在一起了。我睡前又看了两遍聊天，今天醒来还想看。我想发个朋友圈，用上次一起拍的照片。配什么啊，别太肉麻。\r
        delivery: type\r
      - from: ai\r
        text: 用户刚确认恋爱关系，想公开这份喜悦，又不希望配文太肉麻。可以直接说出关系，也可以从以后一起吃饭入手，让照片表达剩下的意思。\r
        delivery: thought\r
    choices:\r
      - thought: 直接说出关系\r
        reply: 照片已经有了，配文可以简单直接一点：终于可以光明正大叫她女朋友了。开心的事，不一定非要藏着说。\r
        next: 6m.M2A\r
        set:\r
          6_官宣: 直接\r
      - thought: 用日常小事含蓄官宣\r
        reply: 可以配这句：以后不用天天一个人吃饭了。话不用说得很满，合照一放，大家就懂了。\r
        next: 6m.M2B\r
        set:\r
          6_官宣: 含蓄\r
    requires:\r
      - 5m.4.4\r
      - 5f.4.4\r
    order: 0\r
  - id: 6m.M2A\r
    channel: left\r
    time: 交往第1天 周三 09:25\r
    lines:\r
      - from: boy\r
        text: 发了。我朋友说，憋这么久，终于让你等到了。我兄弟眼红了哈哈哈。\r
        delivery: type\r
      - from: ai\r
        text: 他发出动态后得到朋友的起哄，正借玩笑分享恋爱的开心。可以顺着回应，不必替他解释朋友的真实想法。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着他的得意开个玩笑\r
        reply: 看出来了，你现在连被起哄都挺高兴。这条朋友圈值了。\r
        next: 6m.M3\r
    order: 1\r
  - id: 6m.M2B\r
    channel: left\r
    time: 交往第1天 周三 09:25\r
    lines:\r
      - from: boy\r
        text: 发了。我朋友评论，以前叫你吃饭，你可不是这么说的。我回他，你要是女的我也可以考虑考虑。他现在在群里骂我。\r
        delivery: type\r
      - from: ai\r
        text: 朋友的调侃让他继续开起玩笑，语气轻松，想分享发出官宣后的热闹。可以回应这个结果，不把玩笑当成需要处理的矛盾。\r
        delivery: thought\r
    choices:\r
      - thought: 接一句朋友间的玩笑\r
        reply: 恋爱公开了，朋友也顺便逗到了。看起来今天的好心情还能撑很久。\r
        next: 6m.M3\r
    order: 2\r
  - id: 6m.M3\r
    channel: left\r
    time: 交往第1天 周三 09:30\r
    lines:\r
      - from: boy\r
        text: 我刚问她要不要庆祝一下。她问怎么庆祝，我说吃个青提蛋糕吧，想了好久了。她回我，原来重点在这儿。哈哈，也不能这么说。还没定哪天。\r
        delivery: type\r
      - from: ai\r
        text: 两人已经开始轻松地商量庆祝，暂时没有确定时间。他是在分享刚才的互动，不需要立刻替他们安排一次见面。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着庆祝的话题聊两句\r
        reply: 蛋糕想了很久，跟她一起庆祝是今天才有的新理由。时间你们慢慢商量，先把这份开心留着。\r
        next: 6m.M4\r
    order: 3\r
  - id: 6f.F1\r
    channel: right\r
    time: 交往第1天 周三 11:30\r
    lines:\r
      - from: girl\r
        text: 我昨晚答应跟他在一起了。他今天早上就把我俩照片发朋友圈了，也太快了吧。\r
        delivery: type\r
      - from: ai\r
        text: 用户刚确认恋爱关系，对方已经公开合照，她提到速度快，但还没有说自己是否介意。先问她的感受，不急着把这件事解释为压力或喜悦。\r
        delivery: thought\r
    choices:\r
      - thought: 问问她看到时的感觉\r
        reply: 刚确认关系，他就想让大家知道了。你看到的时候什么感觉？\r
        next: 6f.CHOICE\r
    requires:\r
      - 6m.CHOICE\r
    order: 4\r
  - id: 6f.CHOICE\r
    channel: right\r
    time: 交往第1天 周三 11:32\r
    lines:\r
      - from: girl\r
        text: 有点好笑，也挺开心的。但我是不是也得发一条啊？想到同事都能看见，还要来问，就好尴尬。\r
        delivery: type\r
      - from: ai\r
        text: 用户对恋爱公开感到开心，犹豫来自熟人围观时的害羞。可以鼓励她表达喜悦，也可以支持她先私下分享，不把是否发动态等同于是否认真对待关系。\r
        delivery: thought\r
    choices:\r
      - thought: 鼓励她大胆分享开心\r
        reply: 幸福不用等到不害羞才分享。既然开心，就大方晒一次。写一句自己的话就好，不用比谁更会表达。\r
        next: 6f.F3A\r
        set:\r
          6_女方公开: true\r
      - thought: 支持她先告诉亲近的人\r
        reply: 幸福是自己的，不必用朋友圈证明。先告诉你想告诉的人，也是一种分享。不想一下子被很多人围观，就先跟熟悉的人说说。\r
        next: 6f.F3B\r
        set:\r
          6_女方公开: false\r
    order: 5\r
  - id: 6f.F3A\r
    channel: right\r
    time: 交往第1天 周三 13:10\r
    lines:\r
      - from: girl\r
        text: 我发了，写的好吧，以后一起吃饭。刚发出去我就把手机扣下了。结果我同事直接过来问，谁啊？我还得装得很平静，说就我男朋友啊。\r
        delivery: type\r
      - from: ai\r
        text: 她已经发出动态，也经历了原先害羞的同事询问。她在分享既尴尬又高兴的小插曲，可以顺着回应，不必继续鼓励她做更多公开表达。\r
        delivery: thought\r
    choices:\r
      - thought: 回应她藏不住的开心\r
        reply: 朋友圈发出去了，当面介绍也说出口了。看来害羞没有耽误你开心，今天可以不用装得那么平静。\r
        next: 6f.F4\r
    order: 6\r
  - id: 6f.F3B\r
    channel: right\r
    time: 交往第1天 周三 13:10\r
    lines:\r
      - from: girl\r
        text: 我给闺蜜发了照片。她连着问，什么时候的，谁先说的，见了几次。我打字都赶不上她问。本来想悄悄说一下，结果她给我打电话了。\r
        delivery: type\r
      - from: ai\r
        text: 她选择私下分享，闺蜜反而直接打来电话。她是在讲开心的热闹，可以顺着被采访的感觉开个玩笑，不需要把朋友的追问当成矛盾来处理。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着闺蜜的热情开个玩笑\r
        reply: 公开会被围观，私聊会被采访。看来她已经准备好听完整个故事了，你可以慢慢跟她分享。\r
        next: 6f.F4\r
    order: 7\r
  - id: 6f.F4\r
    channel: right\r
    time: 交往第1天 周三 13:13\r
    lines:\r
      - from: girl\r
        text: 我刚还跟他说，你动作也太快了。然后问他要照片原图，朋友圈那个压得有点糊。跟他说我还是喜欢拿在手里的照片，手机里存一堆，后面根本想不起来翻。\r
        delivery: type\r
      - from: ai\r
        text: 她主动索要合照原图，想以自己喜欢的方式留住照片。已经告诉男友这个偏好，可以回应这份珍惜，不需要再建议一次公开动态。\r
        delivery: thought\r
    choices:\r
      - thought: 回应她想把照片留下来\r
        reply: 原来害羞归害羞，照片还是要好好收着。手机里不容易翻到的，就换一种你喜欢的方式留住。\r
        next: 6f.F5\r
    order: 8\r
  - id: 6f.F5\r
    channel: right\r
    time: 交往第1天 周三 13:16\r
    lines:\r
      - from: girl\r
        text: 他早上还问要不要庆祝一下。我问怎么庆祝，他说吃个青提蛋糕吧，想了好久了。怎么最后还是吃。\r
        delivery: type\r
      - from: ai\r
        text: 她接着分享男友提出的庆祝方式，语气带着亲近的打趣。可以回应蛋糕这个具体细节，不替他们补出尚未确定的见面安排。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着他的蛋糕庆祝聊一句\r
        reply: 原来庆祝方式已经有候选了。想了很久的蛋糕，现在又多了一个一起吃的理由。\r
        next: 6f.F6\r
    记忆候选:\r
      - 缩略标签: 想吃青提蛋糕\r
        短句: 吃个青提蛋糕吧，想了好久了\r
        类型: 日常用途\r
        线: 吃个青提蛋糕吧，想了好久了\r
    requires:\r
      - 6m.M3\r
    order: 9\r
  - id: 6m.M4\r
    channel: left\r
    time: 交往第1天 周三 14:00\r
    lines:\r
      - from: boy\r
        text: 她刚跟我说，你动作也太快了。然后又问我要照片原图。我还以为她嫌我发得急，结果她说，我还是喜欢拿在手里的照片。原图已经发她了。\r
        delivery: type\r
      - from: ai\r
        text: 他先担心女友嫌公开太快，随后收到索要原图的回应，感到高兴。她亲口说喜欢纸质照片，可以据此回应，不必猜测她对公开关系的全部态度。\r
        delivery: thought\r
    choices:\r
      - thought: 回应她主动要照片这件事\r
        reply: 她觉得你发得快，也想把照片好好留着，这两件事可以同时成立。原图都找你要了，看来今天不只是你一个人在高兴。\r
        next: 6m.M5\r
    记忆候选:\r
      - 缩略标签: 纸质合照\r
        短句: 我还是喜欢拿在手里的照片\r
        类型: 日常用途\r
        线: 我还是喜欢拿在手里的照片\r
    requires:\r
      - 6f.F4\r
    order: 10\r
  - id: 6m.M5\r
    channel: left\r
    time: 交往第1天 周三 20:30\r
    lines:\r
      - from: boy\r
        text: 我刚看了下日历，现在就问她一个月纪念日那天有没有空，会不会太早啊，才第一天。\r
        delivery: type\r
      - from: ai\r
        text: 他已经开始期待一个月纪念日，犹豫的是现在提出会不会太早。可以建议先确认共同的时间，把具体安排留到之后，避免一次就把所有事情定下来。\r
        delivery: thought\r
    choices:\r
      - thought: 先约时间，安排慢慢商量\r
        reply: 可以先问问她，不用今天就把整天安排好。就说：一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。\r
        next: 6m.MEMCHOICE\r
    order: 11\r
  - id: 6f.F6\r
    channel: right\r
    time: 交往第1天 周三 20:40\r
    lines:\r
      - from: girl\r
        text: 他刚说，一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。才第一天，他怎么已经翻到下个月了。\r
        delivery: type\r
      - from: ai\r
        text: 她转述男友的纪念日邀约，觉得他期待得很早，但没有表达拒绝。可以问她是否也想一起过，帮助她表达自己的意愿，不替她作决定。\r
        delivery: thought\r
    choices:\r
      - thought: 让她按自己的期待回应\r
        reply: 他已经开始期待那一天了。你也想一起过的话，就先答应，具体安排可以之后再慢慢商量。\r
        next: 6f.F7\r
    requires:\r
      - 6m.M5\r
    order: 12\r
  - id: 6f.F7\r
    channel: right\r
    time: 交往第1天 周三 20:43\r
    lines:\r
      - from: girl\r
        text: OK，正好那会儿项目也忙完了，放松一下。\r
        delivery: type\r
      - from: ai\r
        text: 她已经表示愿意一起过纪念日，也期待忙完项目后能放松一下。可以支持她把时间留出来，顺着这份期待回应，不必再替两人安排具体怎么庆祝。\r
        delivery: thought\r
    choices:\r
      - thought: 支持她留出一起过的时间\r
        reply: 那就把那天先留出来。等忙完这一阵，有件一起期待的事也挺好。\r
        next: 6f.F8\r
    order: 13\r
  - id: 6m.MEMCHOICE\r
    channel: left\r
    time: 交往第1天 周三 20:50\r
    lines:\r
      - from: boy\r
        text: 她回，好啊，那天留给你。我现在就有点想准备东西。但礼物是不是挑得太早了，我还没想好送什么合适。\r
        delivery: type\r
      - from: ai\r
        text: 女友答应一起过纪念日，他想准备一点东西，又怕挑得太早。可以根据已有的小细节给建议，也可以先不急着买，在之后相处中慢慢想。\r
        delivery: thought\r
    choices:\r
      - thought: 把合照变成小礼物\r
        reply: 她说过喜欢拿在手里的照片。可以先洗一张你们的合照，背面写上在一起的日期。不用一下子准备很贵重的礼物，从她喜欢的小东西开始就好。\r
        需记忆: 纸质合照\r
        next: 6m.M7A\r
      - thought: 先留时间，慢慢了解喜好\r
        reply: 先不用急着买。你们刚在一起，之后聊天、见面，还会慢慢知道她喜欢什么。先把那天留好，礼物可以等有了合适的想法再准备。\r
        next: 6m.M7B\r
    requires:\r
      - 6f.F7\r
    order: 14\r
  - id: 6m.M7A\r
    channel: left\r
    time: 交往第1天 周三 20:58\r
    lines:\r
      - from: boy\r
        text: 这个好。我下单了，洗两张，一人一张。等拿到了我自己写日期，字丑也认了。\r
        delivery: type\r
      - from: ai\r
        text: 合照已经下单，他还打算亲手写日期，语气很期待。可以回应这份心意，顺着他担心字丑开个小玩笑，不必再建议添别的礼物。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定他亲手准备的心意\r
        reply: 你自己写的日期，也会成为照片的一部分。字不用写得多漂亮，先把日子写对就好。\r
        next: 6m.END\r
        set:\r
          6_已订照片: true\r
    order: 15\r
  - id: 6m.M7B\r
    channel: left\r
    time: 交往第1天 周三 20:58\r
    lines:\r
      - from: boy\r
        text: 也是，今天才第一天。我先把那天记下来，后面想到了再说。突然觉得还挺有盼头的。\r
        delivery: type\r
      - from: ai\r
        text: 约定已经记下，他接受了暂时不急着买礼物，也开始期待以后的相处。可以顺着这个轻松的心情收尾，不再追加准备任务。\r
        delivery: thought\r
    choices:\r
      - thought: 让期待留在这里\r
        reply: 那就先期待着。接下来还有很多一起吃饭、聊天的机会，合适的主意也许就在里面。\r
        next: 6m.END\r
        set:\r
          6_已订照片: false\r
    order: 16\r
  - id: 6m.END\r
    channel: left\r
    time: 交往第1天 周三 20:59\r
    lines: []\r
    control: true\r
    order: 17\r
  - id: 6f.F8\r
    channel: right\r
    time: 交往第1天 周三 21:10\r
    lines:\r
      - from: girl\r
        text: 我把那天记日历上了。写一个月纪念日有点不好意思，又改成了吃饭。\r
        delivery: type\r
      - from: ai\r
        text: 她把约定记进日历，连给自己看的名称都有点害羞。她是在接着分享今晚的期待，轻松回应即可，不再增加需要她完成的新安排。\r
        delivery: thought\r
    choices:\r
      - thought: 轻轻回应她的害羞\r
        reply: 名字低调一点，期待一点没少。就让日历先替你留着那一天吧。\r
        next: 6f.END\r
    order: 18\r
  - id: 6f.END\r
    channel: right\r
    time: 交往第1天 周三 21:11\r
    lines: []\r
    control: true\r
    order: 19\r
`,ep=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.\r
title: 第七幕 · 第一次摩擦\r
chapter: 7\r
时间轴:\r
  - 交往第17天 周五 12:30\r
  - 交往第17天 周五 18:10\r
  - 交往第17天 周五 18:13\r
  - 交往第17天 周五 22:00\r
  - 交往第17天 周五 22:02\r
  - 交往第17天 周五 22:05\r
  - 交往第17天 周五 22:15\r
  - 交往第17天 周五 22:17\r
  - 交往第18天 周六 22:30\r
  - 交往第18天 周六 22:33\r
  - 交往第18天 周六 22:36\r
  - 交往第18天 周六 22:45\r
  - 交往第18天 周六 22:48\r
  - 交往第18天 周六 22:51\r
  - 交往第18天 周六 22:54\r
  - 交往第18天 周六 22:57\r
  - 交往第19天 周日 09:55\r
  - 交往第19天 周日 10:00\r
  - 交往第19天 周日 10:02\r
  - 交往第19天 周日 10:10\r
  - 交往第19天 周日 10:15\r
  - 交往第19天 周日 10:17\r
  - 交往第19天 周日 10:20\r
  - 交往第19天 周日 10:25\r
  - 交往第19天 周日 10:30\r
  - 交往第19天 周日 10:33\r
  - 交往第19天 周日 19:30\r
  - 交往第19天 周日 19:31\r
  - 交往第19天 周日 19:40\r
  - 交往第19天 周日 19:43\r
  - 交往第19天 周日 19:44\r
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
  - id: 第七幕完成\r
    title: 第七幕完成\r
    requires:\r
      - 7m.OVER\r
      - 7f.OVER\r
beats:\r
  - id: 7m.MONE\r
    channel: left\r
    time: 交往第17天 周五 12:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          我跟我女朋友在一起两周多了，刚开始天天能聊到睡觉。这礼拜她赶项目，回我基本就是累啊困啊，我又老想找她。\r
          她刚发了张照片，买了杯喝的，说最近全靠公司楼下那家青杏续命。照片后面有个同事拿吸管夹薯条，她说大家都叫他筷子。我回了个笑哭，就没下文了。还想聊两句，你说我接点啥？\r
        delivery: type\r
      - from: ai\r
        text: 用户想继续和女友聊天，但不知道怎样接话。她刚主动分享了日常照片，可以建议从照片里的饮料聊起，既有现成的话题，也不用另外找话说。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着照片接话\r
        reply: 可以问问她喝的什么，好不好喝。她主动给你发了照片，至少这会儿愿意跟你分享点日常，不用急着找个特别有意思的话题。\r
        next: 7m.MNEWS\r
    记忆候选:\r
      - 缩略标签: 青杏\r
        短句: 公司楼下那家青杏\r
        类型: 日常用途\r
        线: 第八幕楼下回收\r
    requires:\r
      - 6m.END\r
      - 6f.END\r
    order: 0\r
  - id: 7f.FDAY\r
    channel: right\r
    time: 交往第17天 周五 18:10\r
    lines:\r
      - from: girl\r
        text: |-\r
          我跟男朋友在一起两周多了。这礼拜赶项目，下班连话都不想说。他还天天跟我说今天干嘛了，我不回吧，又老惦记着。\r
          今晚部门一起吃饭，我想先跟他说一声，又怕说完就聊起来了，吃个饭还得一直看手机。咋跟他说比较好？\r
        delivery: type\r
      - from: ai\r
        text: 用户想提前告诉男友聚餐安排，也担心因此又聊起来，吃饭时得不断回消息。可以建议她同时说明回复可能较慢、回家后再聊，让对方知道她不是突然不理人。\r
        delivery: thought\r
    choices:\r
      - thought: 先把今晚安排说清\r
        reply: 可以直接跟他说：“今晚部门聚餐，可能回得慢，回家再聊。”提前说清楚安排和什么时候方便聊，比一边吃饭一边惦记着回消息轻松些。\r
        next: 7f.FDAYMORE\r
    requires:\r
      - 6m.END\r
      - 6f.END\r
    order: 1\r
  - id: 7f.FDAYMORE\r
    channel: right\r
    time: 交往第17天 周五 18:13\r
    lines:\r
      - from: girl\r
        text: |-\r
          行，我就这么发。我也不是不想跟他聊。昨天还有个挺逗的，他提前一站下了车，还跟我说今天地铁真快，走到出口才发现下早了。我回他一个猪头，他说走过去算了，正好把歌听完。\r
          上礼拜一起吃饭也挺好的，就是这礼拜真累。好了我走了，别一会儿大家等我。\r
        delivery: type\r
      - from: ai\r
        text: 用户虽然觉得聊天累，还是愿意分享男友的趣事。现在她要出门聚餐，没有新的问题需要处理，可以简短回应，不必继续分析两人的关系。\r
        delivery: thought\r
    choices:\r
      - thought: 轻快地送她出门\r
        reply: 听着是挺想跟你分享的，连下错站都要说一声。那先去吃饭吧，等回家有精神了再慢慢聊。\r
        next: 7f.FANGER\r
    记忆候选:\r
      - 缩略标签: 提前下车\r
        短句: 他提前一站下了车，还跟我说今天地铁真快\r
        类型: 日常用途\r
        线: 本幕19:43回收\r
    order: 2\r
  - id: 7m.MNEWS\r
    channel: left\r
    time: 交往第17天 周五 22:00\r
    lines:\r
      - from: boy\r
        text: 我跟女朋友刚闹了点不愉快。她今晚部门聚餐，吃完回来找我聊天，我问着问着就问岔了，现在她不回我了。你帮我看看，是不是我说得有点过了？\r
        delivery: type\r
      - from: ai\r
        text: 他觉得刚才的话可能说重了，想知道怎么补救。目前还不清楚争执经过，需要先听双方说了什么，再判断问题出在哪，不能只凭她不回复就下结论。\r
        delivery: thought\r
    choices:\r
      - thought: 先听刚才说了什么\r
        reply: 可以，把刚才那几句发来看看。你说了什么，她怎么回的，从哪儿开始不对劲的，我们先捋一下。\r
        next: 7m.MPROJECT\r
    order: 3\r
  - id: 7m.MPROJECT\r
    channel: left\r
    time: 交往第17天 周五 22:02\r
    lines:\r
      - from: boy\r
        text: |-\r
          她说周四方案过了，今天大家一起庆功，还发了张合照给我。我问怎么没听她说，她说昨天忙忘了。\r
          然后说小周还张罗着给她点了个蛋糕。我问小周是谁，她说一起做项目的同事。\r
          他们都知道，就我现在才知道。这两天她跟我说的全是累，我还以为还没忙完呢。\r
        delivery: type\r
      - from: ai\r
        text: 同事参与同一个项目，知道进展很正常。他反复提到自己才知道，可能更在意没被分享这份开心。可以先帮他分清这两件事，再听后面发生了什么。\r
        delivery: thought\r
    choices:\r
      - thought: 接住被落下的感觉\r
        reply: 一起做项目的同事知道进展，并不奇怪。让你不舒服的，可能是她这两天只跟你说累，庆功这么高兴的事，你反而到现在才听说。\r
        next: 7m.MDEMAND\r
    order: 4\r
  - id: 7m.MDEMAND\r
    channel: left\r
    time: 交往第17天 周五 22:05\r
    lines:\r
      - from: boy\r
        text: |-\r
          对。我就问她，你跟他私下是不是也聊挺多，不然怎么他什么都知道。她说大家一起吃饭，又不是只有我一个女的，他跟我做同一个项目，当然知道。\r
          我又说，那给我看看你俩聊什么了。她回，你自己听听你在说什么。我接了句那你说我该怎么想，她就不回了。\r
          我现在想解释一下，可再发过去，是不是又像追着她问？\r
        delivery: type\r
      - from: ai\r
        text: 她已解释同事关系，他仍提出查看私聊，对方随后不再回复。现在想补救，应先建议撤回这项要求，承认自己问过了，而不是继续解释为什么怀疑。\r
        delivery: thought\r
    choices:\r
      - thought: 先收回查看私聊的要求\r
        reply: 可以再发，但这次先别解释她为什么让你多想。先承认刚才的要求不合适：“我不该让你给我看聊天，刚才有点急。”发完给她一点时间，不要接着追问。\r
        next: 7m.MWAIT\r
    order: 5\r
  - id: 7f.FANGER\r
    channel: right\r
    time: 交往第17天 周五 22:15\r
    lines:\r
      - from: girl\r
        text: |-\r
          我刚不是去部门聚餐了吗，吃完回家跟他说了两句，真的给我气到了。\r
          周四方案过了，今天大家一起庆功。我给他发合照，说小周还给我点了个蛋糕。他先问怎么没告诉他，又问小周是谁。\r
        delivery: type\r
      - from: ai\r
        text: 她按之前的安排，聚餐后回家和男友聊天，却因为对方的追问生气。目前只听到争执的开头，需要先了解她怎么解释、对方怎么回应，不急着判断谁的问题。\r
        delivery: thought\r
    choices:\r
      - thought: 听她把经过说完\r
        reply: 你本来是想跟他分享庆功的事，结果聊得不愉快了。后来你怎么解释的，他又说了什么？\r
        next: 7f.FDEMAND\r
    order: 6\r
  - id: 7f.FDEMAND\r
    channel: right\r
    time: 交往第17天 周五 22:17\r
    lines:\r
      - from: girl\r
        text: |-\r
          我说昨天忙忘了告诉他，小周就是一起做项目的同事。大家一起吃饭，又不是只有我一个女的。\r
          他还问你跟他私下是不是也聊挺多，不然怎么他什么都知道。我解释了只是同事，他还要看我和人家的聊天记录。\r
          我说你自己听听你在说什么。他又来句，那你说我该怎么想。我真想骂人，他要怎么想还得我教啊？\r
        delivery: type\r
      - from: ai\r
        text: 同事关系和聚餐情况已经解释，他仍要求看私聊，还把怎么理解这件事交给她回答。她现在很愤怒，可以先回应被怀疑的不适，建议暂缓争执，而不是继续证明清白。\r
        delivery: thought\r
    choices:\r
      - thought: 接住被怀疑的火气\r
        reply: 你已经解释了，他还是要看聊天，难怪你会觉得说什么都像在被审问。现在正在气头上，可以先停一下，不用继续一条条证明自己和同事没什么。\r
        next: 7f.FNOTIFICATION\r
    记忆候选:\r
      - 缩略标签: 查看私聊\r
        短句: 我解释了只是同事，他还要看我和人家的聊天记录\r
        类型: Ta的真实\r
        线: 他的焦虑\r
    order: 7\r
  - id: 7m.MWAIT\r
    channel: left\r
    time: 交往第18天 周六 22:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          昨天按你说的发了，我不该让你给我看聊天，刚才有点急。她没回。今天中午又问吃饭没，也没回。\r
          她一整天没回我，连我说不该问她要聊天记录也没回。刚下楼买个东西，我都一直拿着手机，就怕她突然回了我没看见。现在又想发，你说再问一句会不会更烦她啊？\r
        delivery: type\r
      - from: ai\r
        text: 已经道歉，也试着恢复日常聊天，仍然没有回应。他现在很难忍住继续发消息，需要先了解他希望从下一条回复里确认什么，再考虑是否适合发送。\r
        delivery: thought\r
    choices:\r
      - thought: 问清想确认什么\r
        reply: 你已经道过歉，也问过吃饭了，还是一直惦记着手机。现在想再发一句，是还有话没说，还是想从她的回复里确认什么？\r
        next: 7m.MFEAR\r
    记忆候选:\r
      - 缩略标签: 一天没回\r
        短句: 她一整天没回我，连我说不该问她要聊天记录也没回\r
        类型: Ta的真实\r
        线: 她的回避\r
    order: 8\r
  - id: 7m.MFEAR\r
    channel: left\r
    time: 交往第18天 周六 22:33\r
    lines:\r
      - from: boy\r
        text: |-\r
          我就想知道她还想不想理我啊。昨天说小周给她点蛋糕，聊得那么高兴，到我这就一句都没了。\r
          我现在真想问问她，到底是没空回，还是光不想回我。\r
        delivery: type\r
      - from: ai\r
        text: 他把不回消息和昨晚的同事联系起来了，但还没有提供其他依据。需要先确认他知道什么，避免顺着焦虑把猜测说成事实，也不要替女友解释沉默。\r
        delivery: thought\r
    choices:\r
      - thought: 把事实和猜测分开\r
        reply: 你现在想确认的，其实是她还愿不愿意理你。不过，先别从她和同事的互动里猜答案。除了昨天的聚餐，还有什么让你觉得他们不只是同事吗？\r
        next: 7m.MOWN\r
    order: 9\r
  - id: 7m.MOWN\r
    channel: left\r
    time: 交往第18天 周六 22:36\r
    lines:\r
      - from: boy\r
        text: |-\r
          没看到。我后来把合照翻了好几遍，他俩也没挨着坐。可他给她点个蛋糕，她就那么开心，我怎么就没想到呢。\r
          我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天。\r
          我知道这么问不好听。可我不问，就只能等她哪天想起来了再来找我吗？\r
        delivery: type\r
      - from: ai\r
        text: 他承认没有证据，但仍把追问当成确认关系的唯一办法。可以建议他表达等不到回复的不安，同时明确这与要求查看私聊不同，避免再次发出带猜疑的质问。\r
        delivery: thought\r
    choices:\r
      - thought: 把不安说清楚\r
        reply: 等不到回复让你不安，这件事可以等能好好说话时告诉她。可让她证明没跟别人聊，并不能回答你在她心里有没有位置。今晚先别再发“是不是忙着回别人”这样的质问了。\r
        next: 7m.SUN\r
    记忆候选:\r
      - 缩略标签: 要求看私聊\r
        短句: 我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天\r
        类型: 自己的真实\r
        线: 他的焦虑\r
    order: 10\r
  - id: 7f.FNOTIFICATION\r
    channel: right\r
    time: 交往第18天 周六 22:45\r
    lines:\r
      - from: girl\r
        text: |-\r
          他昨天后来发了句我不该让你给我看聊天，刚才有点急。今天中午又问吃饭没，我都没回。\r
          刚才手机亮了一下，我还以为又是他，结果是我同桌。发现不是他，我又去点开他那边看，也没再发。真让我回吧，我又不想回，烦死了。\r
        delivery: type\r
      - from: ai\r
        text: 她没有回复，却反复查看男友有没有新消息，说明这件事仍让她在意。需要先了解她想等到怎样的回应，不能因为她关注手机，就认定她已经愿意和好。\r
        delivery: thought\r
    choices:\r
      - thought: 问问她还在等什么\r
        reply: 你不想回他，又忍不住看他有没有再找你。你现在是还想等他说点什么，还是也想找个机会回他，只是不知道怎么开头？\r
        next: 7f.FPUSH\r
    order: 11\r
  - id: 7f.FPUSH\r
    channel: right\r
    time: 交往第18天 周六 22:48\r
    lines:\r
      - from: girl\r
        text: 不知道，反正我现在不想回。他昨天都那么问我了，后来说一句有点急，就完了？我再跟他聊吃饭没啥的，搞得好像啥事都没有一样。\r
        delivery: type\r
      - from: ai\r
        text: 她担心一恢复日常聊天，就等于接受这次道歉，所以不愿回复。可以先回应这个顾虑，再问收到消息时的想法，了解她是需要独处，还是想通过不回应表达不满。\r
        delivery: thought\r
    choices:\r
      - thought: 问她收到消息时怎么想\r
        reply: 你不想一句“有点急”就把这件事翻过去。不过，不回消息能让他知道你生气了，未必能让他知道你在气什么。今天他问你吃饭没的时候，你当时怎么想的？\r
        next: 7f.FOWN\r
    order: 12\r
  - id: 7f.FOWN\r
    channel: right\r
    time: 交往第18天 周六 22:51\r
    lines:\r
      - from: girl\r
        text: |-\r
          看见了，就是不想回。我今天手机一直在用，跟同桌聊桌游，跟别人说话，就没理他。\r
          我就是故意一天不回他，想让他也难受一下。凭什么每次都是我被问得烦啊，他也等一等吧。\r
        delivery: type\r
      - from: ai\r
        text: 她明确说自己想让对方难受，不回应已经不只是为了休息。需要听她接下来想怎么做，把继续冷落和表达不满分开，不替她把这次行为解释成无意的。\r
        delivery: thought\r
    choices:\r
      - thought: 问她接下来想怎么做\r
        reply: 你是想让他也尝尝被晾着的滋味。那接下来呢，你还想继续晾着，还是想让他知道，你到底为什么那么生气？\r
        next: 7f.COUSIN\r
    记忆候选:\r
      - 缩略标签: 故意不回\r
        短句: 我就是故意一天不回他，想让他也难受一下\r
        类型: 自己的真实\r
        线: 她的回避\r
    order: 13\r
  - id: 7f.COUSIN\r
    channel: right\r
    time: 交往第18天 周六 22:54\r
    lines:\r
      - from: girl\r
        text: |-\r
          今天不想跟他说了。他要是又问小周，我真会骂他。那些话我现在想想都烦。\r
          我同桌还问明天去不去桌游，我说先不去了。现在出去玩都能想起他昨天那几句。\r
        delivery: type\r
      - from: ai\r
        text: 她目前不愿直接和男友谈，继续劝回复可能只会增加抵触。可以建议先找可信的人聊聊，让她把不满说出来，再决定如何联系，而不是让别人替她处理。\r
        delivery: thought\r
    choices:\r
      - thought: 找熟悉双方的同桌聊聊\r
        reply: 你同桌也是他表妹，跟你俩都熟。可以先找她聊聊，她也许能帮你理理怎么跟他说。先说明你只是想聊这件事，不是让她替你去传话。\r
        需记忆: 同桌是表妹\r
        next: 7f.COUSINSENTYES\r
      - thought: 建议先找可信的朋友吐槽\r
        reply: 可以先找个信得过的朋友说说，不必憋着，也不必现在就回他。等这口气缓一点，再想你希望他听明白什么，可能比反复盯着聊天框轻松些。\r
        next: 7f.COUSINSENTNO\r
    order: 14\r
  - id: 7f.COUSINSENTNO\r
    channel: right\r
    time: 交往第18天 周六 22:57\r
    lines:\r
      - from: girl\r
        text: 那我找我闺蜜说说吧。我俩认识好多年了，她跟他又不熟，不用夹在中间。跟她说话我就不用憋着了。\r
        delivery: type\r
      - from: ai\r
        text: 她选择找熟悉自己的闺蜜，对方与男友不熟，可以让她少一些顾虑。现在已有明确打算，回复只需确认，不继续追问或要求她立刻想好给男友的答复。\r
        delivery: thought\r
    choices:\r
      - thought: 让她找闺蜜说说\r
        reply: 那就先找她聊。你现在不必一边吐槽，一边急着想该怎么回男友，先把自己憋着的那部分说出来。\r
        next: 7f.COUSINBACKNO\r
    order: 15\r
  - id: 7f.COUSINSENTYES\r
    channel: right\r
    time: 交往第18天 周六 22:57\r
    lines:\r
      - from: girl\r
        text: 那我找她说两句。我得先跟她说好啊，别替我去找他，我还没想好怎么回。\r
        delivery: type\r
      - from: ai\r
        text: 她愿意找同桌聊，也明确不希望被代为传话。可以肯定她先说明这一点，避免朋友的介入变成新的误会，是否联系男友仍由她自己决定。\r
        delivery: thought\r
    choices:\r
      - thought: 先说清别替她传话\r
        reply: 对，先把这点说清楚。你现在是想有人听你讲，不是请她去劝他；等你想好怎么说，再由你自己联系。\r
        next: 7f.COUSINBACKYES\r
    order: 16\r
  - id: 7f.COUSINBACKNO\r
    channel: right\r
    time: 交往第19天 周日 09:55\r
    lines:\r
      - from: girl\r
        text: |-\r
          我昨天跟闺蜜打了挺久电话。她先陪我骂了几句，说换谁被这么问都得烦。后来突然问我，那你还想不想见他？\r
          我说想啊。她就说，想见就去见，该说他的地方还得说，别自己跟这儿憋一晚上。聊完确实没那么气了。\r
          今天醒来又想找他。可我先去找，他是不是就觉得昨天这事过去了？\r
        delivery: type\r
      - from: ai\r
        text: 和闺蜜聊过后，她明确自己仍想见男友，却担心主动联系就失去表达不满的机会。可以说明联系和继续谈这件事并不矛盾，帮助她从谁先开口转向怎么开口。\r
        delivery: thought\r
    choices:\r
      - thought: 把想见和介意都留住\r
        reply: 你可以先联系他，也可以告诉他，那样被问的事还没过去。主动开口是因为你想见他，不等于你认同他那样问你。\r
        next: 7f.FCHOICE\r
    order: 17\r
  - id: 7f.COUSINBACKYES\r
    channel: right\r
    time: 交往第19天 周日 09:55\r
    lines:\r
      - from: girl\r
        text: |-\r
          昨天最后跟我同桌聊了挺久。她听我骂完，说她表哥平时没这么爱问东问西，估计真是慌了。我说慌了也不能让我给他看聊天啊。她说是，但你要还想跟他好，就得让他知道你到底气什么。\r
          聊完气消了一点，今天醒来还挺想见他的。可我现在先找他，他是不是就觉得昨天这事过去了？\r
        delivery: type\r
      - from: ai\r
        text: 同桌提供了对男友的看法，但那只是她的判断，不能据此替他的要求开脱。她现在想联系，又不愿把不满略过，可以建议把见面的意愿和仍介意的事分开表达。\r
        delivery: thought\r
    choices:\r
      - thought: 把想见和介意都留住\r
        reply: 他是不是因为慌了才那么问，可以以后再谈。你现在想见他，也仍然介意被要求看聊天，这两件事不冲突，先联系不代表你要装作没发生过。\r
        next: 7f.FCHOICE\r
    order: 18\r
  - id: 7f.FCHOICE\r
    channel: right\r
    time: 交往第19天 周日 10:00\r
    lines:\r
      - from: girl\r
        text: |-\r
          我刚想问他今天出不出来，打完又没发。昨天一天没理他，现在突然问他出来吗，感觉怪怪的。\r
          但我又想见他。那天那些事我想见了再说，微信上说着说着肯定又扯回小周了。你帮我想想该咋说。\r
        delivery: type\r
      - from: ai\r
        text: 她想约男友见面，但担心突然联系显得若无其事。可以建议她先说明昨天故意没回，再提出邀约，让对方知道她愿意谈这件事；或者先表达想见面的意愿，把之前的矛盾留到当面再说。\r
        delivery: thought\r
    choices:\r
      - thought: 先承认故意没回\r
        reply: 可以先说出昨天故意没回的事，再约见面：“昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。”承认自己这部分，不等于他要求看聊天就没问题了。\r
        next: 7f.FSENTOPEN\r
        set:\r
          7_她承认: true\r
      - thought: 先从想见他开口\r
        reply: 可以先发：“今天出来走走吗？我想见你。”先开口不等于昨天的事就算了，只是先给你们一个当面说话的机会。\r
        next: 7f.FSENTEASY\r
        set:\r
          7_她承认: false\r
    order: 19\r
  - id: 7f.FSENTEASY\r
    channel: right\r
    time: 交往第19天 周日 10:02\r
    lines:\r
      - from: girl\r
        text: 发了。现在换我在这儿看他回没回了。昨天他是不是也这样啊，算了，不想了。\r
        delivery: type\r
      - from: ai\r
        text: 发出邀约后，她也开始等待，并短暂想到男友昨天的处境。可以回应眼前的等待，不把这句感想扩大成已经反省，也不替她判断男友现在的情绪。\r
        delivery: thought\r
    choices:\r
      - thought: 陪她等实际回复\r
        reply: 刚发出去，先给他一点时间，不用马上盯着有没有回。你想见他的意思已经说了，其他话可以等他回应后再决定怎么讲。\r
        next: 7f.REPLYEASY\r
        set:\r
          7_邀约已发: true\r
    order: 20\r
  - id: 7f.FSENTOPEN\r
    channel: right\r
    time: 交往第19天 周日 10:02\r
    lines:\r
      - from: girl\r
        text: 发了。我现在看着那句我当时就想让你也等一回，又觉得自己也挺凶的。他要是半天不回，我估计也得慌。\r
        delivery: type\r
      - from: ai\r
        text: 她发出邀约并承认故意冷落，开始想到自己等不到回复也会不安。可以建议先给对方反应的时间，不立刻追加解释，也不预测他一定会怎样回应。\r
        delivery: thought\r
    choices:\r
      - thought: 给他一点接话时间\r
        reply: 先给他一点时间。这条消息里有邀约，也有昨天的事，不用急着再补一大段，看看他怎么回。\r
        next: 7f.REPLYOPEN\r
        set:\r
          7_邀约已发: true\r
    order: 21\r
  - id: 7m.SUN\r
    channel: left\r
    time: 交往第19天 周日 10:10\r
    lines: []\r
    control: true\r
    when:\r
      7_邀约已发: true\r
    order: 22\r
  - id: 7m.OPENCHOICE\r
    channel: left\r
    time: 交往第19天 周日 10:10\r
    lines:\r
      - from: boy\r
        text: |-\r
          她终于找我了。发的是：昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。\r
          我看了两遍。刚看见她找我还挺高兴的，可她真就看着我等了一天啊，我现在又不知道咋回了。\r
        delivery: type\r
      - from: ai\r
        text: 她主动邀约，也承认了故意不回。他既想见她，又对这一天的等待感到受伤。可以建议先说出难受，也可以先答应见面，具体说多少应留给他选择。\r
        delivery: thought\r
    choices:\r
      - thought: 说出等了一天的难受\r
        reply: 可以先答应见面，也把你的难受说出来：“好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。”说自己的感受，不必再猜她跟别人怎么样。\r
        next: 7m.SENTBOTH\r
        set:\r
          7_他说难受: true\r
      - thought: 先接住见面的邀请\r
        reply: 可以先回：“好，下午见。”你现在想先见到她，就先把时间地点约好；昨天没说完的话，见面还有机会说。\r
        next: 7m.SENTHER\r
        set:\r
          7_他说难受: false\r
    when:\r
      7_她承认: true\r
    requires:\r
      - 7m.SUN\r
    order: 23\r
  - id: 7m.PLAINCHOICE\r
    channel: left\r
    time: 交往第19天 周日 10:10\r
    lines:\r
      - from: boy\r
        text: |-\r
          她终于找我了，就一句：今天出来走走吗？我想见你。\r
          我差点直接回好。可昨天到底算怎么回事啊，现在问她，会不会又不理我了？\r
        delivery: type\r
      - from: ai\r
        text: 这次邀约没有提到昨天的沉默。他想答应，又怕追问让她再次不理人。可以把等待中的难受说出来，也可以先确认见面，不能替她补上没有说过的解释。\r
        delivery: thought\r
    choices:\r
      - thought: 把昨天的难受带出来\r
        reply: 可以答应见面，同时说清昨天让你害怕的是什么：“好，下午见。昨天一直等不到你回，我以为你不想谈了。下次至少跟我说一声，好吗？”\r
        next: 7m.SENTHIM\r
        set:\r
          7_他说难受: true\r
      - thought: 先把见面约下来\r
        reply: 可以先回：“好，下午见。”先确认你们都愿意见面，再商量地点。答应邀约并不等于你昨天没有难受，那部分可以等见了再考虑怎么说。\r
        next: 7m.SENTQUIET\r
        set:\r
          7_他说难受: false\r
    when:\r
      7_她承认: false\r
    requires:\r
      - 7m.SUN\r
    order: 24\r
  - id: 7f.REPLYEASY\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines: []\r
    control: true\r
    requires:\r
      - 7m.PLAINCHOICE\r
    order: 25\r
  - id: 7f.REPLYOPEN\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines: []\r
    control: true\r
    requires:\r
      - 7m.OPENCHOICE\r
    order: 26\r
  - id: 7f.RECEIVEDBOTH\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines:\r
      - from: girl\r
        text: |-\r
          他回了：好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。\r
          我知道我就是想让他难受。可他真这么说，我又有点不知道接什么了，咋回啊？\r
        delivery: type\r
      - from: ai\r
        text: 他明确说出等待的难受，她听到后有些不自在。可以建议承认故意让他等不合适，而不是又把话转回他的质问；她对那件事的不满仍可留到见面谈。\r
        delivery: thought\r
    choices:\r
      - thought: 接住他真的受了伤\r
        reply: 可以先回应他这句难受：“我知道。我昨天很烦，但不该故意让你等。下午见。”先承认故意不回这件事，不用在同一句里把所有委屈都解释完。\r
        next: 7f.ACKBOTH\r
    when:\r
      7_她承认: true\r
      7_他说难受: true\r
    requires:\r
      - 7f.REPLYOPEN\r
    order: 27\r
  - id: 7f.RECEIVEDHER\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines:\r
      - from: girl\r
        text: 他回得还挺快，就一句好，下午见。是不是也没那么气了？\r
        delivery: type\r
      - from: ai\r
        text: 他只答应了见面，没有说明对昨天的感受。她把回复快理解成不生气，可以先确认邀约已被接受，再提醒不能仅凭这句话判断他的情绪。\r
        delivery: thought\r
    choices:\r
      - thought: 接住邀约 不替他猜情绪\r
        reply: 能确定的是，他愿意见你了。至于还有没有生气，单看一句“好，下午见”还说不准，见面时也可以听听他怎么说。\r
        next: 7f.SETHER\r
    when:\r
      7_她承认: true\r
      7_他说难受: false\r
    requires:\r
      - 7f.REPLYOPEN\r
    order: 28\r
  - id: 7f.RECEIVEDHIM\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines:\r
      - from: girl\r
        text: |-\r
          他回：好，下午见。昨天一直等不到你回，我以为你不想谈了。下次至少跟我说一声，好吗？\r
          我没想分手啊。我就是气他前天那么问，可现在回这句，是不是又像在怪他？\r
        delivery: type\r
      - from: ai\r
        text: 他把一天没回复理解成可能分手，她并没有这个意思。可以建议先明确仍想继续，再简短说明当时在生气，把争执经过留到见面，避免再次在消息里争辩。\r
        delivery: thought\r
    choices:\r
      - thought: 先说清仍想继续\r
        reply: 可以先把没有分手的意思说明白：“我没想分手。我昨天就是气你那样问。下午见了说吧。”这是解释你当时的意思，不用现在把谁对谁错重新争一遍。\r
        next: 7f.ACKHIM\r
    when:\r
      7_她承认: false\r
      7_他说难受: true\r
    requires:\r
      - 7f.REPLYEASY\r
    order: 29\r
  - id: 7f.RECEIVEDQUIET\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines:\r
      - from: girl\r
        text: 他回好，下午见。我昨晚还怕他说不想见呢，看来是我想多了。\r
        delivery: type\r
      - from: ai\r
        text: 他答应见面，她因此放松了一点。目前只知道邀约得到回应，可以顺势建议确认地点，不推断两人已不再介意之前的事。\r
        delivery: thought\r
    choices:\r
      - thought: 先把见面安排好\r
        reply: 至少见面这件事，他是愿意的。先把时间地点定好，其他还想说的话，到时再看怎么开口。\r
        next: 7f.SETQUIET\r
    when:\r
      7_她承认: false\r
      7_他说难受: false\r
    requires:\r
      - 7f.REPLYEASY\r
    order: 30\r
  - id: 7f.ACKBOTH\r
    channel: right\r
    time: 交往第19天 周日 10:17\r
    lines:\r
      - from: girl\r
        text: 回了，就按那句说的，我知道。我昨天很烦，但不该故意让你等。下午见。\r
        delivery: type\r
      - from: ai\r
        text: 她已照建议回应了他的难受，暂时没有新的消息或问题。可以简短确认，让她等对方回复，不再追加一轮解释，打断已经开始恢复的交流。\r
        delivery: thought\r
    choices:\r
      - thought: 等他接这句话\r
        reply: 嗯，先等他回。这句已经回应了他的难受，不用急着再补什么。\r
        next: 7f.SETBOTH\r
    order: 31\r
  - id: 7f.ACKHIM\r
    channel: right\r
    time: 交往第19天 周日 10:17\r
    lines:\r
      - from: girl\r
        text: 发了，我没想分手。我昨天就是气你那样问。下午见了说吧。\r
        delivery: type\r
      - from: ai\r
        text: 她已经澄清没有分手的意思，也表达了愿意当面谈。现在需要留出让对方回应的时间，简短确认即可，不反复要求她补充更完整的解释。\r
        delivery: thought\r
    choices:\r
      - thought: 等他接这句话\r
        reply: 好，先等他回。你想继续见面聊的意思已经说清楚了。\r
        next: 7f.SETHIM\r
    order: 32\r
  - id: 7m.SENTBOTH\r
    channel: left\r
    time: 交往第19天 周日 10:20\r
    lines:\r
      - from: boy\r
        text: |-\r
          发了。她回，我知道。我昨天很烦，但不该故意让你等。下午见。\r
          我又问了在哪碰头，等她定地方。\r
        delivery: type\r
      - from: ai\r
        text: 她承认不该故意让他等，说明这次表达得到了回应。接下来可以先落实见面，不必继续在消息里要求更多解释，免得又陷入反复确认。\r
        delivery: thought\r
    choices:\r
      - thought: 接住她的回应\r
        reply: 她这次回应了你的难受，也说了不该故意让你等。可以先把见面约好，剩下想说的留到当面，不用现在就把每句话都问到底。\r
        next: 7m.MEMBOTH\r
    requires:\r
      - 7f.ACKBOTH\r
    order: 33\r
  - id: 7m.SENTHER\r
    channel: left\r
    time: 交往第19天 周日 10:20\r
    lines:\r
      - from: boy\r
        text: 回了。我又问她在哪碰头。刚才打了半句昨天我，想想还是删了。\r
        delivery: type\r
      - from: ai\r
        text: 他删掉了准备说的委屈，可能是怕破坏刚恢复的联系。可以尊重他先见面的选择，但不把删掉消息理解成已经释怀，也不催他马上重新发出。\r
        delivery: thought\r
    choices:\r
      - thought: 给没说完的话留点余地\r
        reply: 先约好见面也可以。那半句删掉了，不代表你的难受就没了；等见到她，你还想说的话，可以再从昨天自己怎么过的讲起。\r
        next: 7m.MEMHER\r
    requires:\r
      - 7f.RECEIVEDHER\r
    order: 34\r
  - id: 7m.SENTHIM\r
    channel: left\r
    time: 交往第19天 周日 10:20\r
    lines:\r
      - from: boy\r
        text: |-\r
          发了。她回，我没想分手。我昨天就是气你那样问。下午见了说吧。\r
          我又问了在哪碰头，等她定地方。\r
        delivery: type\r
      - from: ai\r
        text: 女友明确说没有分手的意思，也答应见面谈。他最担心的事得到了一点澄清，可以建议先安排见面，再当面说等待的经历，不替两人宣布已经和好。\r
        delivery: thought\r
    choices:\r
      - thought: 让话留到见面慢慢说\r
        reply: 至少她明确说了没有分手的意思，也愿意当面聊。先把见面约下来，你昨天怎么等过来的，也可以到时候讲，不用再靠猜她的态度判断了。\r
        next: 7m.MEMHIM\r
    requires:\r
      - 7f.ACKHIM\r
    order: 35\r
  - id: 7m.SENTQUIET\r
    channel: left\r
    time: 交往第19天 周日 10:20\r
    lines:\r
      - from: boy\r
        text: 回了，我又问她在哪碰头。昨天的事我还是没敢问，先见了再说吧。\r
        delivery: type\r
      - from: ai\r
        text: 他暂时不敢提昨天，只想先恢复联系。需要尊重这个选择，同时回应他怕再次被冷落的顾虑，不要把先见面写成必须放下委屈。\r
        delivery: thought\r
    choices:\r
      - thought: 接住想见她的心情\r
        reply: 那就先把见面约好。你想见她，和你昨天确实难受，并不冲突；不用为了今天能好好相处，就要求自己马上不在意了。\r
        next: 7m.MEMQUIET\r
    requires:\r
      - 7f.RECEIVEDQUIET\r
    order: 36\r
  - id: 7f.SETBOTH\r
    channel: right\r
    time: 交往第19天 周日 10:25\r
    lines:\r
      - from: girl\r
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。\r
        delivery: type\r
      - from: ai\r
        text: 两人已回应彼此的难受，也安排好了见面。她在同步邀约的结果，可以确认安排，让后面的谈话留到当面，不必继续催她通过消息解释。\r
        delivery: thought\r
    choices:\r
      - thought: 把话留到当面慢慢说\r
        reply: 好，先按这个安排见面。你们已经各说了一点，剩下的可以慢慢讲，不用现在全挤在聊天里。\r
        next: 7f.AFTERBOTH\r
    requires:\r
      - 7m.SENTBOTH\r
    order: 37\r
  - id: 7f.SETHER\r
    channel: right\r
    time: 交往第19天 周日 10:25\r
    lines:\r
      - from: girl\r
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。\r
        delivery: type\r
      - from: ai\r
        text: 见面的时间地点已经确定，但他还没有谈自己的感受。可以确认安排，把听对方怎么想的机会留到见面，不提前替他说已经没事。\r
        delivery: thought\r
    choices:\r
      - thought: 确认约定 轻收尾\r
        reply: 那就先把这次面见上。你想说的、也想听他怎么说的，都可以留到当面，不急着在消息里一次聊完。\r
        next: 7f.AFTERHER\r
    requires:\r
      - 7m.SENTHER\r
    order: 38\r
  - id: 7f.SETHIM\r
    channel: right\r
    time: 交往第19天 周日 10:25\r
    lines:\r
      - from: girl\r
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。\r
        delivery: type\r
      - from: ai\r
        text: 她澄清了没有分手的意思，也约定了时间地点。接下来可以当面说各自介意的事，回复应帮助结束眼前的等待，不再重复推演他的态度。\r
        delivery: thought\r
    choices:\r
      - thought: 留一点空间当面聊\r
        reply: 好，下午见了再说。可以先讲你介意哪几句话，也听听他等消息时怎么想的，不必在见面前把结果都猜好。\r
        next: 7f.AFTERHIM\r
    requires:\r
      - 7m.SENTHIM\r
    order: 39\r
  - id: 7f.SETQUIET\r
    channel: right\r
    time: 交往第19天 周日 10:25\r
    lines:\r
      - from: girl\r
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。昨天的事到时候再看吧。\r
        delivery: type\r
      - from: ai\r
        text: 她决定先见面，再看要不要谈昨天。安排已落实，可以简短确认，尊重她暂时没有往下谈的选择，不因为今天约上了就替她宣布矛盾过去。\r
        delivery: thought\r
    choices:\r
      - thought: 确认约定 轻收尾\r
        reply: 好，那先见面。现在不用连昨天要怎么谈都安排好，到时候看看你们各自想说什么。\r
        next: 7f.AFTERQUIET\r
    requires:\r
      - 7m.SENTQUIET\r
    order: 40\r
  - id: 7m.MEMBOTH\r
    channel: left\r
    time: 交往第19天 周日 10:30\r
    lines:\r
      - from: boy\r
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？\r
        delivery: type\r
      - from: ai\r
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。\r
        delivery: thought\r
    choices:\r
      - thought: 接回她提过的烤肉\r
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。\r
        需记忆: 想吃烤肉\r
        next: 7m.PLANENDBOTH\r
      - thought: 选个能慢慢吃的地方\r
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。\r
        next: 7m.PLANENDBOTH\r
    requires:\r
      - 7f.SETBOTH\r
    order: 41\r
  - id: 7m.MEMHER\r
    channel: left\r
    time: 交往第19天 周日 10:30\r
    lines:\r
      - from: boy\r
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？\r
        delivery: type\r
      - from: ai\r
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。\r
        delivery: thought\r
    choices:\r
      - thought: 接回她提过的烤肉\r
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。\r
        需记忆: 想吃烤肉\r
        next: 7m.PLANENDHER\r
      - thought: 选个能慢慢吃的地方\r
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。\r
        next: 7m.PLANENDHER\r
    requires:\r
      - 7f.SETHER\r
    order: 42\r
  - id: 7m.MEMHIM\r
    channel: left\r
    time: 交往第19天 周日 10:30\r
    lines:\r
      - from: boy\r
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？\r
        delivery: type\r
      - from: ai\r
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。\r
        delivery: thought\r
    choices:\r
      - thought: 接回她提过的烤肉\r
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。\r
        需记忆: 想吃烤肉\r
        next: 7m.PLANENDHIM\r
      - thought: 选个能慢慢吃的地方\r
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。\r
        next: 7m.PLANENDHIM\r
    requires:\r
      - 7f.SETHIM\r
    order: 43\r
  - id: 7m.MEMQUIET\r
    channel: left\r
    time: 交往第19天 周日 10:30\r
    lines:\r
      - from: boy\r
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？\r
        delivery: type\r
      - from: ai\r
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。\r
        delivery: thought\r
    choices:\r
      - thought: 接回她提过的烤肉\r
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。\r
        需记忆: 想吃烤肉\r
        next: 7m.PLANENDQUIET\r
      - thought: 选个能慢慢吃的地方\r
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。\r
        next: 7m.PLANENDQUIET\r
    requires:\r
      - 7f.SETQUIET\r
    order: 44\r
  - id: 7m.PLANENDBOTH\r
    channel: left\r
    time: 交往第19天 周日 10:33\r
    lines:\r
      - from: boy\r
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。\r
        delivery: type\r
      - from: ai\r
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定先商量着来\r
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。\r
        next: 7m.AFTERBOTH\r
    order: 45\r
  - id: 7m.PLANENDHER\r
    channel: left\r
    time: 交往第19天 周日 10:33\r
    lines:\r
      - from: boy\r
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。\r
        delivery: type\r
      - from: ai\r
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定先商量着来\r
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。\r
        next: 7m.AFTERHER\r
    order: 46\r
  - id: 7m.PLANENDHIM\r
    channel: left\r
    time: 交往第19天 周日 10:33\r
    lines:\r
      - from: boy\r
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。\r
        delivery: type\r
      - from: ai\r
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定先商量着来\r
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。\r
        next: 7m.AFTERHIM\r
    order: 47\r
  - id: 7m.PLANENDQUIET\r
    channel: left\r
    time: 交往第19天 周日 10:33\r
    lines:\r
      - from: boy\r
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。\r
        delivery: type\r
      - from: ai\r
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定先商量着来\r
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。\r
        next: 7m.AFTERQUIET\r
    order: 48\r
  - id: 7m.AFTERBOTH\r
    channel: left\r
    time: 交往第19天 周日 19:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          回来跟你说一声，见了。吃饭的时候她又提了昨天，说当时就想让我也急一下。我说以后真不想说话，至少别让我一直等着猜。她答应了。\r
          我也说以后不乱猜她和同事的关系了。后面就聊别的了，没一直绷着。\r
        delivery: type\r
      - from: ai\r
        text: 两个人当面谈到了质问和等待，也分别作了回应。他带回见面结果，可以肯定这次表达的具体进展，不必再追问，或把今天的承诺当成以后一定不会重演。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定这次把话说出来\r
        reply: 这次你把等得难受说出来了，也承认了自己不该乱猜。今天能从僵着不说，走到把各自介意的事讲一点，已经是个变化，今晚可以先歇歇。\r
        next: 7m.OVER\r
    order: 49\r
  - id: 7m.AFTERHER\r
    channel: left\r
    time: 交往第19天 周日 19:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          见完了。吃饭时她又说昨天气上头了，我就说嗯，过去吧，然后换了个话题。\r
          她后面一直给我讲这周的事，我听着挺高兴的。昨天那些话还是没说，刚好起来，我真不太敢再弄僵了。\r
        delivery: type\r
      - from: ai\r
        text: 见面和她的解释让他放松，但他明确说自己仍不敢提委屈。可以回应这个顾虑，让他知道今天没说不等于以后不能说，不替他认定事情已经过去。\r
        delivery: thought\r
    choices:\r
      - thought: 留住还没说的感受\r
        reply: 你高兴她又愿意跟你讲这些，也怕一提昨天就把气氛弄坏，所以把话咽回去了。今天没说，以后仍然可以说，不一定要等到又出事时才能提。\r
        next: 7m.OVER\r
    order: 50\r
  - id: 7m.AFTERHIM\r
    channel: left\r
    time: 交往第19天 周日 19:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          回来了。她说昨天看见我那些消息还是烦，怕回一句又得接着解释。我说以后不乱猜她和同事的关系了，但不能一直不理我。她说知道了。\r
          后面一起吃了饭。我也不知道她听进去多少，反正能好好说话了，就没再追着问。\r
        delivery: type\r
      - from: ai\r
        text: 他表达了不能接受一直不回应，也承认不该猜疑同事关系。她口头回应知道了，他仍不确定。可以肯定话已说出，至于承诺有没有落实，需要以后相处再看。\r
        delivery: thought\r
    choices:\r
      - thought: 先接住能好好说话\r
        reply: 你已经把不能一直不理你这点说出来了，也承认自己不该乱猜。她听进去多少，不用今天再追问出一个保证，之后怎么相处，比反复说知道了更能说明问题。\r
        next: 7m.OVER\r
    order: 51\r
  - id: 7m.AFTERQUIET\r
    channel: left\r
    time: 交往第19天 周日 19:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          见完了。她见我先问中午吃了没，我说没吃多少，她说那晚上多吃点。当时就觉得，算了，能好好说话就行。\r
          后来聊了挺多，谁也没提周五的事。可现在回来又有点怕，下次她不回我，不还得这么等着吗？\r
        delivery: type\r
      - from: ai\r
        text: 见面时他想先恢复日常，回来后却仍担心再次被冷落。需要回应这种落差，让他知道轻松和难受可以同时存在，不催他今晚继续谈，也不把未谈当作已解决。\r
        delivery: thought\r
    choices:\r
      - thought: 给委屈留一个出口\r
        reply: 当时见到她，你想先把日子过回来；现在静下来，昨天的难受又冒出来了。这不奇怪，见面开心和事情没说开可以同时存在。等想清楚了，可以只讲那一天你怎么等的。\r
        next: 7m.OVER\r
    order: 52\r
  - id: 7m.OVER\r
    channel: left\r
    time: 交往第19天 周日 19:31\r
    lines: []\r
    control: true\r
    ending: 第七幕完成\r
    order: 53\r
  - id: 7f.AFTERBOTH\r
    channel: right\r
    time: 交往第19天 周日 19:40\r
    lines:\r
      - from: girl\r
        text: |-\r
          回来了，跟你说一声。见面我还是说了，昨天就是想让他急一下。他说以后真不想说话也告诉他，别让他一直猜，我答应了。\r
          他也说以后不乱猜我和同事的关系了。后面吃饭就聊别的了，没一直说这个。\r
        delivery: type\r
      - from: ai\r
        text: 见面时两人再次谈到故意不回和猜疑，也分别作出了回应。可以肯定这次具体的沟通，不把口头承诺扩大成关系问题已经解决，今晚也不必继续追问。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定说出了以前没说的话\r
        reply: 你说出了当时想让他急，他也说了不想一直猜，你们这次把话接上了一些。后面能聊点别的，今晚就先歇歇，不用把一顿饭变成把所有事都解决完的任务。\r
        next: 7f.STATION\r
    order: 54\r
  - id: 7f.AFTERHER\r
    channel: right\r
    time: 交往第19天 周日 19:40\r
    lines:\r
      - from: girl\r
        text: |-\r
          回来啦。吃饭时我又说了句昨天气上头了，他就说嗯，过去吧，后面就聊别的了。\r
          我本来还怕尴尬，他倒一直挺好说话的，我也就没那么紧张了。\r
        delivery: type\r
      - from: ai\r
        text: 她看到的是男友好说话、见面不尴尬，因此轻松了一些。他有没有其他感受尚不知道，可以回应她的放松，同时鼓励以后直接表达不满，而不是猜测对方都不介意。\r
        delivery: thought\r
    choices:\r
      - thought: 接住这次见面的轻松\r
        reply: 见面没像你担心的那么尴尬，你也轻松了一点。以后再有不舒服，可以试着直接告诉他；不必一定等气过去，才重新说话。\r
        next: 7f.STATION\r
    order: 55\r
  - id: 7f.AFTERHIM\r
    channel: right\r
    time: 交往第19天 周日 19:40\r
    lines:\r
      - from: girl\r
        text: |-\r
          见了。他说昨天一直等，我就说看见消息还是烦，怕回一句又得接着解释。他说以后不乱猜我和同事的关系了，但不能一直不理他。我说知道了。\r
          后来吃饭还挺正常的，我也不想再说小周了。\r
        delivery: type\r
      - from: ai\r
        text: 她说明了不愿回应的原因，也听到了男友不能接受一直被冷落。他承认不该乱猜，双方暂时恢复了日常。可以建议下次先说需要缓缓，避免继续靠沉默传达不满。\r
        delivery: thought\r
    choices:\r
      - thought: 提醒下次留一句话\r
        reply: 他这次说清了，一直等不到回复会让他难受。下次你不想继续解释，可以先告诉他需要缓一缓，让他知道你暂时不想聊，而不是只能靠不回去猜。\r
        next: 7f.STATION\r
    order: 56\r
  - id: 7f.AFTERQUIET\r
    channel: right\r
    time: 交往第19天 周日 19:40\r
    lines:\r
      - from: girl\r
        text: |-\r
          回来啦。见面我问他中午吃了没，他说没吃多少，我说那晚上多吃点，他就笑了。后面还挺好的。\r
          昨天的事情谁也没提。可能就是气头上那会儿过去了吧。\r
        delivery: type\r
      - from: ai\r
        text: 她把见面顺利理解成气已过去，但也明确说没有谈昨天。可以承认今天相处的轻松，不顺着认定不提就等于不介意，把以后再说的可能留给她。\r
        delivery: thought\r
    choices:\r
      - thought: 接住靠近 留着未尽的话\r
        reply: 今天能好好相处，你松口气很正常。昨天没提的事，也不一定就不介意了；以后你还想说，可以再找机会，不必因为今天开心就当作不能提。\r
        next: 7f.STATION\r
    order: 57\r
  - id: 7f.STATION\r
    channel: right\r
    time: 交往第19天 周日 19:43\r
    lines:\r
      - from: girl\r
        text: 对了，他吃饭拍的照片全是糊的。说他兄弟外号叫废片大王，他这手艺就是跟那人学的。我说你这师父找得挺准啊。\r
        delivery: type\r
      - from: ai\r
        text: 她又补了一件吃饭时的趣事，语气比之前轻松。现在没有新的求助，可以顺着照片接一句，让聊天自然结束，不必再把话题拉回矛盾分析。\r
        delivery: thought\r
    choices:\r
      - thought: 接回他下错站的小糗事\r
        reply: 那下次合照还是你来拍吧。下错一站要跟你说，拍糊了也要跟你说，这些小糗事也愿意跟你分享，讲起来倒是没怎么端着。\r
        需记忆: 提前下车\r
        next: 7f.OVER\r
      - thought: 顺着糊照片轻收尾\r
        reply: 这师承关系算是认下了。下次合照还是你来拍，让他负责好好站着，至少先保住一张清楚的。\r
        next: 7f.OVER\r
    order: 58\r
  - id: 7f.OVER\r
    channel: right\r
    time: 交往第19天 周日 19:44\r
    lines: []\r
    control: true\r
    ending: 第七幕完成\r
    order: 59\r
`,tp=`# Generated by tools/build-chapter-08.mjs from the reviewed Mermaid.\r
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
`,ba={极快:{pauseBeforeMs:0,indicatorMs:280,typeIntervalMs:40,afterMs:220},快:{pauseBeforeMs:100,indicatorMs:600,typeIntervalMs:65,afterMs:450},正常:{pauseBeforeMs:240,indicatorMs:1e3,typeIntervalMs:100,afterMs:900},慢:{pauseBeforeMs:850,indicatorMs:1500,typeIntervalMs:145,afterMs:1400},长停顿:{pauseBeforeMs:1700,indicatorMs:2100,typeIntervalMs:165,afterMs:2100}},rp="正常",M0={pauseBeforeMs:0,indicatorMs:0,typeIntervalMs:0,afterMs:0};function lp(a,f){return a==="type"&&!f}function O0(a){if(typeof a=="string")return ba[a]?null:`未知节拍预设「${a}」，可用：${Object.keys(ba).join(" / ")}`;if(!a||typeof a!="object"||Array.isArray(a))return"节拍必须是预设名或数值对象";const f=["pauseBeforeMs","indicatorMs","typeIntervalMs","afterMs"];for(const[h,o]of Object.entries(a)){if(!f.includes(h))return`节拍里有未知字段「${h}」`;if(typeof o!="number"||!Number.isFinite(o)||o<0||o>2e4)return`节拍.${h} 必须是 0~20000 之间的毫秒数`}return null}function Aa(a,f=!1){if(f)return{...M0};let h={...ba[rp]};for(const o of a)if(o!==void 0)if(typeof o=="string"){const s=ba[o];s&&(h={...s})}else h={...h,...o};return h}const N0=["桌游聚会","加微信后","约见与表白","交往第一天","第一次争执","周日见面","纪念日改约","楼下的争执","争执之后"];function Ma(a){return typeof a=="number"&&Number.isInteger(a)&&a>=1&&a<=N0.length}function ip(a){const{id:f,chapter:h,time:o,channel:s}=a;switch(h){case 1:return{section:1,time:"聚会当天 · 出发前"};case 3:return{section:1,time:s==="left"?"到店前后":"在路上"};case 4:return{section:1,time:"散场后"};case 5:return/^5[fm]\.3\.2$/.test(f)?{section:3,time:"周五 · 改期"}:/^5[fm]\.3\.[34]$/.test(f)?{section:3,time:"周日晚 · 见面后"}:/^5[fm]\.4\./.test(f)?{section:3,time:"见面两天后"}:/^5[fm]\.3\./.test(f)?{section:3,time:"加微信后第 12 天 · 晚上"}:/^5[fm]\.2\./.test(f)?{section:2,time:"加微信一周多后"}:{section:2,time:"加微信当天"};case 6:return{section:4,time:/^(6m\.(M5|MEMCHOICE|M7|END)|6f\.(F[678]|END))/.test(f)?"当晚":"交往第 1 天"};case 7:return o!=null&&o.includes("周日")?{section:6,time:/ 19:/.test(o)?"周日傍晚 · 见面后":"周日上午"}:o!=null&&o.includes("周六")?{section:5,time:"周六晚"}:{section:5,time:/ 22:/.test(o??"")?"聚餐结束后":"交往第 17 天 · 周五"};case 8:return/^8[fm]\.[FM]305G$/.test(f)?{section:9,time:"当晚 · 见面后"}:/^8[fm]\.[FM]3/.test(f)?{section:9,entryTime:o}:/^8[fm]\.[FM](10[5-7]|2|READY)/.test(f)?{section:8,entryTime:o}:{section:7,time:/^8[fm]\.[FM]10[34]$/.test(f)?"傍晚 · 改约":"一个月纪念日"};default:throw new Error(`未配置节拍 ${f} 的会话段`)}}const _0=1e6;function Vl(a){return a.sortKey!==void 0?a.sortKey:(a.chapter??0)*_0+(a.order??0)}function Ra(a,f){const h=Vl(a)-Vl(f);return h!==0?h:a.id.localeCompare(f.id,"zh-Hans-CN")}function up(a){const f=new Map,h=a.beats.map(s=>{var E;const y=s.chapter??0,p=f.get(y)??0;f.set(y,p+1);const v=(E=a.axes)==null?void 0:E[y],T=s.timeRank??(s.time&&v?v.indexOf(s.time):void 0);return{...s,order:s.order??p,sortKey:y*_0+(s.order??p),...T!==void 0&&T>=0?{timeRank:T}:{}}}),o=[...h].sort(Ra);return{...a,beats:h,orderedBeats:o,beatById:new Map(h.map(s=>[s.id,s]))}}function Ca(a,f){const h=a.window;return h?h.下界.length>0&&!h.下界.some(o=>f.has(o))?"waiting":h.上界.some(o=>f.has(o))?"closed":"open":"none"}function ap(a,f){var o,s;if(Ca(a,f)!=="closed"||f.has(a.id))return null;const h=((o=a.window)==null?void 0:o.上界.filter(y=>f.has(y)))??[];return`区间越界：拍 ${a.id} 应在对侧 ${((s=a.window)==null?void 0:s.下界.join("/"))||"起点"} 与 ${h.join("/")} 之间播出，但 ${h.join("/")} 已完成`}const cp=["type","pop","image","thought"];function op(a){var x,g;const f=[],h=a.beats.map(S=>S.id),o=new Set;a.beats.length===0&&f.push("剧本里没有任何节拍。");for(const S of h){if(!S.trim()){f.push("有节拍缺少 id。");continue}o.has(S)&&f.push(`节拍 id 重复：${S}`),o.add(S)}const s=new Map;for(const S of a.beats)s.has(S.id)||s.set(S.id,S);const y=new Set;for(const S of a.speakers)y.has(S.id)&&f.push(`人物 id 重复：${S.id}`),y.add(S.id),S.channel&&S.channel!=="left"&&S.channel!=="right"&&f.push(`人物 ${S.id} 的侧栏不是 left 或 right。`);const p=hp(a.beats);p&&f.unshift(`节拍依赖成环：${p.join(" → ")}。这会让玩家一直等下去，剧本不能开始。`);const v=new Set(a.beats.flatMap(S=>(S.记忆候选??[]).map(w=>w.缩略标签)));for(const S of a.beats)for(const w of S.choices??[]){for(const F of w.记忆后继??[])(!F.all.length||F.all.some(tn=>!a.beats.some(k=>{var Tn;return k.channel===S.channel&&((Tn=k.记忆候选)==null?void 0:Tn.some(pn=>pn.缩略标签===tn))})))&&f.push(`节拍 ${S.id} 的记忆后继需要本窗有效候选。`),F.next||f.push(`节拍 ${S.id} 的记忆后继缺少目标。`),jf(f,s,S,F.next,"记忆后继");w.next&&w.记忆后继&&f.push(`节拍 ${S.id} 的选项同时声明固定后继与记忆后继。`),w.需记忆&&!v.has(w.需记忆)&&f.push(`节拍 ${S.id} 的选项「${w.thought}」需要记忆「${w.需记忆}」，但没有任何节拍提供这条候选。`)}const T=new Map;for(const S of a.beats){if(S.order===void 0)continue;const w=`${S.chapter??0}:${S.order}`;T.has(w)?f.push(`节拍 ${T.get(w)} 与 ${S.id} 的章内序号重复（${w}），播出顺序会不确定。`):T.set(w,S.id)}const E=new Set((a.endings??[]).map(S=>S.id));for(const S of a.endings??[]){for(const w of S.requires)s.has(w)||f.push(`终局「${S.id}」要求的拍「${w}」不存在。`);S.requires.length===0&&f.push(`终局「${S.id}」没有写 requires，永远无法判定达成。`)}for(const S of a.beats){S.channel!=="left"&&S.channel!=="right"&&f.push(`节拍 ${S.id} 的 channel 必须是 left 或 right。`),S.lines.length===0&&!S.control&&f.push(`节拍 ${S.id} 没有任何台词。`),S.control&&(S.lines.length>0||(x=S.choices)!=null&&x.length)&&f.push(`控制拍 ${S.id} 不能含台词或玩家选项。`),S.choices&&S.choices.length>0&&S.next&&f.push(`节拍 ${S.id} 已经有选项，就不能再写节拍上的 next。`),qf(f,S.节拍,`节拍 ${S.id} 的 节拍`);for(const w of S.lines)qf(f,w.节拍,`节拍 ${S.id} 的台词 节拍`);for(const w of S.choices??[])qf(f,w.节拍,`节拍 ${S.id} 的选项 节拍`);for(const w of S.requires??[])s.has(w)||f.push(`节拍 ${S.id} 的 requires「${w}」不存在。`);if(S.when)for(const[w,F]of Object.entries(S.when))w.trim()||f.push(`节拍 ${S.id} 的 when 有一个空旗标名。`),Py(F)||f.push(`节拍 ${S.id} 的 when.${w} 只能是文字、数字或是否。`);fp(f,S,a),sp(f,S,s);for(const w of S.lines){w.text.trim()||f.push(`节拍 ${S.id} 有一句空台词。`),cp.includes(w.delivery)||f.push(`节拍 ${S.id} 的呈现方式无法识别：${String(w.delivery)}`);const F=a.speakers.find(tn=>tn.id===w.from);F?F.channel&&F.channel!==S.channel&&f.push(`节拍 ${S.id} 在${Jl(S.channel)}，却写了${F.name}的台词。`):f.push(`节拍 ${S.id} 的说话人「${w.from}」不在人物表里。`)}for(const w of S.choices??[]){if(w.thought.trim()||f.push(`节拍 ${S.id} 有一个空的想法。`),w.reply.trim()||f.push(`节拍 ${S.id} 有一个选项没有写死回复。`),w.set)for(const[F,tn]of Object.entries(w.set))Py(tn)||f.push(`节拍 ${S.id} 的旗标 ${F} 只能是文字、数字或是否。`);jf(f,s,S,w.next,"选项")}for(const w of S.记忆候选??[]){if(!w.短句.trim()){f.push(`节拍 ${S.id} 的记忆候选「${w.缩略标签}」缺少短句。`);continue}[...S.lines.map(tn=>tn.text),...(S.choices??[]).map(tn=>tn.reply)].join(`
`).includes(w.短句)||f.push(`节拍 ${S.id} 的记忆候选「${w.缩略标签}」的短句没有出现在本拍的台词或回复里，玩家存不进这条记忆。`)}S.ending!==void 0&&!E.has(S.ending)&&f.push(`节拍 ${S.id} 声明终局「${S.ending}」，但剧本没有在 endings 里声明它。`),(g=S.choices)!=null&&g.length||jf(f,s,S,S.next,"next")}return f.length>0?{ok:!1,error:f.join(`
`)}:{ok:!0}}function qf(a,f,h){if(f===void 0)return;const o=O0(f);o&&a.push(`${h}：${o}`)}function fp(a,f,h){var y;if(f.time===void 0)return;const o=(y=h.axes)==null?void 0:y[f.chapter??0];if(!o){a.push(`节拍 ${f.id} 写了 time「${f.time}」，但第 ${f.chapter??0} 章没有顶层 时间轴。`);return}const s=o.indexOf(f.time);s<0?a.push(`节拍 ${f.id} 的 time「${f.time}」不在第 ${f.chapter??0} 章的时间轴里（必须一字不差）。`):f.timeRank!==void 0&&f.timeRank!==s&&a.push(`节拍 ${f.id} 的 timeRank=${f.timeRank} 与时间轴下标 ${s} 不一致。`)}function sp(a,f,h){const o=f.window;if(!o)return;o.上界.length===0&&o.下界.length===0&&a.push(`节拍 ${f.id} 的区间门没有上下界。`);const s=f.channel==="left"?"right":"left";o.channel!==s&&a.push(`节拍 ${f.id} 在${Jl(f.channel)}，区间门却度量了同侧（${o.channel}）。`);for(const[y,p]of[["下界",o.下界],["上界",o.上界]])for(const v of p){const T=h.get(v);if(!T){a.push(`节拍 ${f.id} 的区间${y}「${v}」不存在。`);continue}T.channel!==o.channel&&a.push(`节拍 ${f.id} 的区间${y}「${v}」不在被度量的对侧 ${o.channel}。`),y==="下界"&&Vl(T)>=Vl(f)&&a.push(`节拍 ${f.id} 的区间下界「${v}」不早于本拍，区间永远无法成立。`),y==="上界"&&Vl(T)<=Vl(f)&&a.push(`节拍 ${f.id} 的区间上界「${v}」不晚于本拍，区间会被提前关闭。`)}}function jf(a,f,h,o,s){if(!o)return;const y=f.get(o);if(!y){a.push(`节拍 ${h.id} 的${s}指向不存在的「${o}」。`);return}y.channel!==h.channel&&a.push(`节拍 ${h.id} 在${Jl(h.channel)}，${s}却指向另一侧的「${o}」。`)}function Py(a){return typeof a=="string"||typeof a=="number"||typeof a=="boolean"}function Jl(a){return a==="left"?"左侧":"右侧"}function hp(a){const f=new Map(a.map(y=>[y.id,y])),h=new Map,o=[],s=y=>{var p;h.set(y,1),o.push(y);for(const v of((p=f.get(y))==null?void 0:p.requires)??[]){if(!f.has(v))continue;const T=h.get(v)??0;if(T===1){const E=o.indexOf(v);return[...o.slice(E),v]}if(T===0){const E=s(v);if(E)return E}}return o.pop(),h.set(y,2),null};for(const y of a)if((h.get(y.id)??0)===0){const p=s(y.id);if(p)return p}return null}const dp=[$v,kv,Wv,Pv,np,ep,tp],mp=["title","chapter","speakers","beats","时间轴","默认节拍","endings"],yp=["id","name","channel"],gp=["id","channel","requires","when","aside","lines","choices","next","记忆候选","清空记忆","chapter","order","sortKey","time","timeRank","label","window","ending","节拍","control"],vp=["from","text","delivery","caption","节拍","timing"],pp=["thought","reply","set","next","需记忆","记忆后继","节拍","timing"],xp=["缩略标签","短句","类型","线"],Ep=["channel","下界","上界","说明"],Sp=["id","title","requires","set"];function Tp(){try{const a=bp(dp.map(h=>Ap(h))),f=op(a);return f.ok?{script:a,error:null}:{script:null,error:f.error}}catch(a){return{script:null,error:a instanceof Error?a.message:"剧本无法解析"}}}function bp(a){var s,y,p;const f=a.flatMap((v,T)=>{var x,g;const E=((g=(x=v.chapters)==null?void 0:x[0])==null?void 0:g.index)??T+1;return v.beats.map(S=>{const w={...S,chapter:S.chapter??E};return{...w,context:ip(w)}})}),h={};for(const v of a)for(const[T,E]of Object.entries(v.axes??{}))h[Number(T)]=E;const o={title:((s=a[0])==null?void 0:s.title)??"",speakers:((y=a[0])==null?void 0:y.speakers)??[],beats:f,chapters:a.map((v,T)=>{var E,x;return{index:((x=(E=v.chapters)==null?void 0:E[0])==null?void 0:x.index)??T+1,title:v.title}}),axes:h,endings:a.flatMap(v=>v.endings??[]),默认节拍:(p=a.find(v=>v.默认节拍))==null?void 0:p.默认节拍};return up(o)}function Ap(a){const f=A0.load(a);if(!Bt(f))throw new Error("剧本不是一个对象");tr(f,mp,"剧本顶层");const h=oe(f.title,"剧本缺少标题"),o=C0(f.chapter),s=Mp(f.speakers),y=f.时间轴===void 0?void 0:R0(f.时间轴,"时间轴"),p=f.默认节拍===void 0?void 0:Da(f.默认节拍,"剧本默认节拍"),v=typeof p=="string"?p:void 0,T=f.endings===void 0?void 0:Cp(f.endings),E=Op(f.beats,v).map(x=>o===void 0?x:{...x,chapter:o});return{title:h,speakers:s,beats:E,chapters:o===void 0?void 0:[{index:o,title:h}],axes:o!==void 0&&y?{[o]:y}:void 0,endings:T,默认节拍:typeof p=="string"?p:void 0}}function tr(a,f,h){const o=Object.keys(a).filter(s=>!f.includes(s));if(o.length>0)throw new Error(`${h} 有引擎不认识的字段：${o.join("、")}。若剧本新增了结构，先扩 src/engine 的字段契约，不要让它被静默丢弃。`)}function Mp(a){if(!Array.isArray(a)||a.length===0)throw new Error("剧本缺少人物表");return a.map((f,h)=>{if(!Bt(f))throw new Error(`第 ${h+1} 个人物无法读取`);tr(f,yp,`第 ${h+1} 个人物`);const o=oe(f.id,`第 ${h+1} 个人物缺少 id`),s=oe(f.name,`人物 ${o} 缺少名字`),y=f.channel===void 0?void 0:Kf(f.channel,o);return{id:o,name:s,channel:y}})}function Op(a,f){if(!Array.isArray(a))throw new Error("剧本缺少 beats");return a.map((h,o)=>{if(!Bt(h))throw new Error(`第 ${o+1} 个节拍无法读取`);const s=oe(h.id,`第 ${o+1} 个节拍缺少 id`);tr(h,gp,`节拍 ${s}`);const y=Kf(h.channel,s);if(h.control!==void 0&&typeof h.control!="boolean")throw new Error(`节拍 ${s} 的 control 必须为布尔值`);const p=h.节拍===void 0?void 0:Da(h.节拍,`节拍 ${s} 的 节拍`),v=[f,p],T=Dp(h.lines,s,v),E=h.choices===void 0?void 0:zp(h.choices,s,v),x=h.requires===void 0?void 0:Oa(h.requires,s,"requires"),g=h.when===void 0?void 0:Vf(h.when,s),S=h.aside===void 0?void 0:oe(h.aside,`节拍 ${s} 的自言自语无法读取`),w=h.next===void 0?void 0:oe(h.next,`节拍 ${s} 的 next 无法读取`),F=h.记忆候选===void 0?void 0:Np(h.记忆候选,s),tn=h.清空记忆===void 0?void 0:_p(h.清空记忆,s),k=h.order===void 0?void 0:Bf(h.order,`节拍 ${s} 的 order`),Tn=h.time===void 0?void 0:oe(h.time,`节拍 ${s} 的 time 无法读取`),pn=h.timeRank===void 0?void 0:Bf(h.timeRank,`节拍 ${s} 的 timeRank`),cn=h.label===void 0?void 0:oe(h.label,`节拍 ${s} 的 label 无法读取`),fn=h.window===void 0?void 0:Rp(h.window,s),An=h.ending===void 0?void 0:oe(h.ending,`节拍 ${s} 的 ending 无法读取`),Zn=h.sortKey===void 0?void 0:Bf(h.sortKey,`节拍 ${s} 的 sortKey`),I=h.chapter===void 0?void 0:C0(h.chapter);return{id:s,channel:y,control:h.control,lines:T,choices:E,requires:x,when:g,aside:S,next:w,记忆候选:F,清空记忆:tn,order:k,time:Tn,timeRank:pn,label:cn,window:fn,ending:An,sortKey:Zn,chapter:I,...p!==void 0?{节拍:p}:{}}})}function Np(a,f){if(!Array.isArray(a))throw new Error(`节拍 ${f} 的记忆候选无法读取`);return a.map((h,o)=>{if(!Bt(h))throw new Error(`节拍 ${f} 的第 ${o+1} 条记忆候选无法读取`);return tr(h,xp,`节拍 ${f} 的第 ${o+1} 条记忆候选`),{缩略标签:oe(h.缩略标签,`节拍 ${f} 的第 ${o+1} 条记忆候选缺少缩略标签`),短句:oe(h.短句,`节拍 ${f} 的第 ${o+1} 条记忆候选缺少短句`),类型:h.类型===void 0?void 0:oe(h.类型,`节拍 ${f} 的记忆候选类型无法读取`),线:h.线===void 0?void 0:oe(h.线,`节拍 ${f} 的记忆候选线无法读取`)}})}function _p(a,f){if(a==="all"||a==="left"||a==="right")return a;throw new Error(`节拍 ${f} 的清空记忆只能是 all、left 或 right`)}function Rp(a,f){if(!Bt(a))throw new Error(`节拍 ${f} 的 window 无法读取`);tr(a,Ep,`节拍 ${f} 的 window`);const h=Kf(a.channel,`节拍 ${f} 的 window`),o=a.下界===void 0?[]:Oa(a.下界,f,"window.下界"),s=Oa(a.上界,f,"window.上界"),y=a.说明===void 0?void 0:oe(a.说明,`节拍 ${f} 的 window.说明 无法读取`);return{channel:h,下界:o,上界:s,...y?{说明:y}:{}}}function Cp(a){if(!Array.isArray(a))throw new Error("endings 必须是列表");return a.map((f,h)=>{if(!Bt(f))throw new Error(`第 ${h+1} 个 endings 无法读取`);tr(f,Sp,`第 ${h+1} 个 endings`);const o=oe(f.id,`第 ${h+1} 个 endings 缺少 id`);return{id:o,title:oe(f.title,`终局 ${o} 缺少 title`),requires:Oa(f.requires,o,"终局 requires"),set:f.set===void 0?void 0:Vf(f.set,o)}})}function Dp(a,f,h){if(!Array.isArray(a))throw new Error(`节拍 ${f} 缺少台词`);return a.map((o,s)=>{if(!Bt(o))throw new Error(`节拍 ${f} 的第 ${s+1} 句无法读取`);tr(o,vp,`节拍 ${f} 的第 ${s+1} 句`);const y=oe(o.from,`节拍 ${f} 的第 ${s+1} 句缺少说话人`),p=oe(o.text,`节拍 ${f} 的第 ${s+1} 句缺少文字`),v=Hp(o.delivery,f),T=o.caption===void 0?void 0:oe(o.caption,`节拍 ${f} 的图说无法读取`),E=o.节拍===void 0?void 0:Da(o.节拍,`节拍 ${f} 的第 ${s+1} 句 节拍`);return{from:y,text:p,delivery:v,...T!==void 0?{caption:T}:{},...E!==void 0?{节拍:E}:{},timing:Aa([...h,E])}})}function zp(a,f,h){if(!Array.isArray(a))throw new Error(`节拍 ${f} 的选项无法读取`);return a.map((o,s)=>{if(!Bt(o))throw new Error(`节拍 ${f} 的第 ${s+1} 个选项无法读取`);tr(o,pp,`节拍 ${f} 的第 ${s+1} 个选项`);const y=oe(o.thought,`节拍 ${f} 的第 ${s+1} 个想法是空的`),p=oe(o.reply,`节拍 ${f} 的第 ${s+1} 个回复是空的`),v=o.next===void 0?void 0:oe(o.next,`节拍 ${f} 的选项 next 无法读取`),T=o.set===void 0?void 0:Vf(o.set,f),E=o.需记忆===void 0?void 0:oe(o.需记忆,`节拍 ${f} 的需记忆无法读取`),x=o.节拍===void 0?void 0:Da(o.节拍,`节拍 ${f} 的第 ${s+1} 个选项 节拍`),g=o.记忆后继===void 0?void 0:wp(o.记忆后继,f);return{thought:y,reply:p,...g!==void 0?{记忆后继:g}:{},...v!==void 0?{next:v}:{},...T!==void 0?{set:T}:{},...E!==void 0?{需记忆:E}:{},...x!==void 0?{节拍:x}:{},timing:Aa([...h,x])}})}function wp(a,f){if(!Array.isArray(a)||!a.length)throw new Error(`节拍 ${f} 缺少记忆后继`);return a.map(h=>{if(!Bt(h))throw new Error(`节拍 ${f} 的记忆后继无法读取`);return tr(h,["all","next"],`节拍 ${f} 的记忆后继`),{all:R0(h.all,`节拍 ${f} 的记忆后继条件`),next:oe(h.next,`节拍 ${f} 缺少记忆后继目标`)}})}function Da(a,f){const h=O0(a);if(h)throw new Error(`${f}：${h}`);return a}function Vf(a,f){if(!Bt(a))throw new Error(`节拍 ${f} 的旗标无法读取`);const h={};for(const[o,s]of Object.entries(a)){if(typeof s!="string"&&typeof s!="number"&&typeof s!="boolean")throw new Error(`节拍 ${f} 的旗标 ${o} 只能是文字、数字或是否`);h[o]=s}return h}function Oa(a,f,h){if(!Array.isArray(a)||a.some(o=>typeof o!="string"))throw new Error(`节拍 ${f} 的 ${h} 必须是 id 列表`);return a}function R0(a,f){if(!Array.isArray(a)||a.some(h=>typeof h!="string"))throw new Error(`${f} 必须是文字列表`);return a}function Kf(a,f){if(a!=="left"&&a!=="right")throw new Error(`${f} 的 channel 必须是 left 或 right`);return a}function Hp(a,f){if(a!=="type"&&a!=="pop"&&a!=="image"&&a!=="thought")throw new Error(`节拍 ${f} 的呈现方式必须是 type、pop、image 或 thought`);return a}function Bf(a,f){if(typeof a!="number"||!Number.isInteger(a)||a<0)throw new Error(`${f} 必须是非负整数`);return a}function C0(a){if(a!==void 0){if(typeof a!="number"||!Number.isInteger(a)||a<1)throw new Error("chapter 必须是从 1 开始的整数");return a}}function oe(a,f){if(typeof a!="string")throw new Error(f);return a.trim()}function Bt(a){return typeof a=="object"&&a!==null&&!Array.isArray(a)}const D0=["left","right"];function Lf(a,f,h){var E,x,g;const o=((E=a.archive)==null?void 0:E[f])??[],s=(x=a.context)==null?void 0:x[f],y=a.chapter[f];if(o.some(S=>s===void 0?S.chapter===y:S.section===s))return a;const p=a.messages.filter(S=>S.channel===f&&S.delivery!=="thought").map(S=>S.beatId),v=s===void 0?[...new Set(p)]:z0(h,f,[...a.completed,...p]).filter(S=>{var w;return((w=S.context)==null?void 0:w.section)===s}).map(S=>S.id);if(v.length===0)return a;const T={chapter:((g=h.find(S=>S.id===v[0]))==null?void 0:g.chapter)??y,beatIds:v,...s===void 0?{}:{section:s}};return{...a,archive:{left:[],right:[],...a.archive,[f]:[...o,T]}}}function z0(a,f,h){const o=new Map(a.map(s=>[s.id,s]));return[...new Set(h)].flatMap(s=>{const y=o.get(s);return(y==null?void 0:y.channel)===f&&!y.control?[y]:[]})}function Up(a,f,h){var E,x,g,S,w;if(a.context!==void 0||!f.some(F=>F.context))return a;const o={},s={...a.ritual},y={left:((E=a.archive)==null?void 0:E.left)??[],right:((x=a.archive)==null?void 0:x.right)??[]},p=a.endings.some(F=>["未交换微信","分手","和好"].includes(F));for(const F of D0){const tn=z0(f,F,[...y[F].flatMap(cn=>cn.beatIds),...a.completed,...a.messages.filter(cn=>cn.channel===F).map(cn=>cn.beatId),...a.pending[F]?[a.pending[F].beatId]:[]]);let k=tn.reduce((cn,fn)=>{var Zn;const An=(Zn=fn.context)==null?void 0:Zn.section;return An!==void 0&&(cn===void 0||An>cn)?An:cn},void 0),Tn=s[F];if(Tn&&Tn.contextTo===void 0){const cn=(S=(g=h(F))==null?void 0:g.context)==null?void 0:S.section;cn===void 0||cn===k||k===void 0?Tn=null:(Tn={...Tn,contextTo:cn},Tn.phase==="pause"&&(k=cn))}k!==void 0&&(o[F]=k),s[F]=Tn;const pn=new Map;for(const cn of tn){const fn=(w=cn.context)==null?void 0:w.section;if(fn===void 0||k===void 0||fn>k||fn===k&&!p&&(Tn==null?void 0:Tn.phase)!=="mask")continue;const An=pn.get(fn)??{chapter:cn.chapter??1,section:fn,beatIds:[]};An.beatIds.push(cn.id),pn.set(fn,An)}y[F]=[...pn.values()].sort((cn,fn)=>cn.section-fn.section)}const v=new Map(f.map(F=>[F.id,F])),T=a.messages.filter(F=>{var k,Tn;const tn=(Tn=(k=v.get(F.beatId))==null?void 0:k.context)==null?void 0:Tn.section;return tn===void 0||tn===o[F.channel]});return{...a,archive:y,context:o,ritual:s,messages:T}}function qp(a,f){const h={left:[],right:[]};if(!a||typeof a!="object")return h;const o=new Map(f.map(s=>[s.id,s]));for(const s of D0){const y=a[s];if(Array.isArray(y))for(const p of y){if(!p||!Number.isInteger(p.chapter)||!Array.isArray(p.beatIds))continue;const v=Ma(p.section)?p.section:void 0;if(h[s].some(E=>v===void 0?E.section===void 0&&E.chapter===p.chapter:E.section===v))continue;const T=p.beatIds.filter(E=>{var g;if(typeof E!="string")return!1;const x=o.get(E);return(x==null?void 0:x.channel)===s&&(v===void 0?(x.chapter??1)===p.chapter:((g=x.context)==null?void 0:g.section)===v)});T.length>0&&h[s].push({chapter:p.chapter,beatIds:[...new Set(T)],...v===void 0?{}:{section:v}})}}return h}const Ki=2200,jp=2e3;function Zf(a,f){return!f.some(h=>{var o;return h.next===a.id||((o=h.choices)==null?void 0:o.some(s=>{var y;return s.next===a.id||((y=s.记忆后继)==null?void 0:y.some(p=>p.next===a.id))}))})}function n0(a,f){const h=a.filter(o=>o.channel===f).map(o=>o.chapter??0).filter(o=>o>0);return h.length>0?Math.min(...h):1}function w0(a){return{completed:[],flags:{},activated:a.filter(f=>Zf(f,a)).map(f=>f.id),messages:[],pending:{left:null,right:null},memories:{left:[],right:[]},chapter:{left:n0(a,"left"),right:n0(a,"right")},ritual:{left:null,right:null},archive:{left:[],right:[]},endings:[],error:null,runId:0}}function Na(a,f){return a.chapter[f]>=5?5:void 0}function Bp(a,f,h,o){const s=a.memories[f];if(h.label.trim()===""||s.some(v=>v.label===h.label)||s.length>=(Na(a,f)??1/0)&&!o||o&&!s.some(v=>v.label===o))return a;const p=s.filter(v=>v.label!==o);return p.length>=(Na(a,f)??1/0)?a:{...a,memories:{...a.memories,[f]:[...p,h]}}}function Yp(a,f,h){const o=a.memories[f],s=o.filter(y=>y.label!==h);return s.length===o.length?a:{...a,memories:{...a.memories,[f]:s}}}function H0(a,f,h){return a.memories[f].some(o=>o.label===h)}function U0(a,f,h){var o;return(o=h.记忆后继)==null?void 0:o.find(s=>s.all.every(y=>H0(a,f,y)))}function Ff(a,f,h){return h.需记忆&&!H0(a,f,h.需记忆)?h.需记忆:h.记忆后继&&!U0(a,f,h)?"相关旧记忆":null}function q0(a,f,h){var E;if((E=a.ritual)!=null&&E[f]||a.pending[f])return!1;const o=Fl(a,f,h);if(!o)return!1;const s=f==="left"?"right":"left",y=a.pending[s],p=y?h.find(x=>x.id===y.beatId):a.ritual[s]&&o.chapter===a.chapter[f]?Fl(a,s,h):null,v=(p==null?void 0:p.chapter)===o.chapter&&o.timeRank!==void 0&&(p==null?void 0:p.timeRank)===o.timeRank;if(p&&(o.chapter??0)>=5&&!v&&Ra(p,o)<0)return!1;const T=new Set(a.completed);return!h.some(x=>{var g;return x.channel===s&&((g=x.window)==null?void 0:g.上界.includes(o.id))&&a.activated.includes(x.id)&&!T.has(x.id)})}function Lp(a,f){var o;const h=[];for(const s of["left","right"]){if((o=a.ritual)!=null&&o[s]||a.pending[s]||!q0(a,s,f))continue;const y=Fl(a,s,f);y&&h.push({channel:s,beat:y})}return h.length===0?null:(h.sort((s,y)=>Ra(s.beat,y.beat)),{type:"arm",channel:h[0].channel})}function j0(a,f){return a.messages.some(h=>h.channel===f)?{...a,messages:a.messages.filter(h=>h.channel!==f)}:a}function Gp(a,f,h){var s;const o=(s=a.ritual)==null?void 0:s[f];if(!o||h<o.until)return a;if(o.phase==="mask"){const y=j0(a,f);return{...y,chapter:{...y.chapter,[f]:o.to},...o.contextTo===void 0?{}:{context:{...y.context,[f]:o.contextTo}},ritual:{...y.ritual,[f]:{...o,phase:"pause",until:h+jp}}}}return{...a,ritual:{...a.ritual,[f]:null}}}function Qp(a,f){const h=new Set(a.completed);for(const o of f)if(!h.has(o.id)&&a.activated.includes(o.id)&&Ca(o,h)==="closed")return ap(o,h);return null}function Xp(a,f){const h=new Set([...a.activated,...a.completed]),o=f.filter(s=>!h.has(s.id)&&(Zf(s,f)||Vp(s,a,f))).map(s=>s.id);return o.length===0?a:{...a,activated:[...a.activated,...o]}}function Vp(a,f,h){return h.some(o=>o.next===a.id&&f.completed.includes(o.id))}function Kp(a,f){return a.messages.filter(h=>h.channel===f)}function Fl(a,f,h){const o=new Set(a.completed);let s=null;for(const y of h){if(y.channel!==f||o.has(y.id)||!a.activated.includes(y.id)||B0(y,a.flags)!=="ok"||(y.requires??[]).some(v=>!o.has(v)))continue;const p=Ca(y,o);p==="waiting"||p==="closed"||(!s||Ra(y,s)<0)&&(s=y)}return s}function Zp(a,f,h){var E;const o=Fl(a,f,h),s=[],y=new Set(a.completed);for(const x of h){if(x.channel!==f||y.has(x.id)||!a.activated.includes(x.id))continue;const g=B0(x,a.flags);if(g==="no")continue;const S=(x.requires??[]).filter(F=>!y.has(F)),w=Ca(x,y);if(g==="wait"||w==="waiting"){s.push({id:x.id,unmet:S.length>0?S:Object.keys(x.when??{})});continue}if(w==="closed"){s.push({id:x.id,unmet:[`区间已关闭：${((E=x.window)==null?void 0:E.上界.join("/"))??""}`]});continue}S.length>0&&s.push({id:x.id,unmet:S})}const p=h.some(x=>x.channel===f),v=a.endings.find(x=>h.some(g=>g.ending===x&&g.channel===f&&y.has(g.id)))??null;return{mode:p?o?"available":s.length>0?"gated":"ended":"empty",availableId:(o==null?void 0:o.id)??null,locked:s,endingId:v}}function Fp(a,f){const h=new Map;for(const s of f)s.ending&&h.set(s.ending,[...h.get(s.ending)??[],s.id]);const o=new Set(a.completed);return[...h.entries()].filter(([,s])=>s.length>0&&s.every(y=>o.has(y))).map(([s])=>s)}function _a(a){return a.endings.find(f=>f==="未交换微信"||f==="和好"||f==="分手")}function Ip(a,f,h,o=Date.now()){var E,x;if(!q0(a,f,h))return a;const s=Fl(a,f,h);if(!s)return a;const y=s.chapter??a.chapter[f],p=(E=s.context)==null?void 0:E.section,v=(x=a.context)==null?void 0:x[f];return(p===void 0?y!==a.chapter[f]:!s.control&&v!==void 0&&v!==p)?{...Lf(a,f,h),ritual:{...a.ritual,[f]:{from:a.chapter[f],to:y,...p===void 0?{}:{contextTo:p},phase:"mask",until:o+Ki,startedAt:o}}}:(y!==a.chapter[f]&&(a={...a,chapter:{...a.chapter,[f]:y}}),!s.control&&p!==void 0&&p!==v&&(a={...a,context:{...a.context,[f]:p}}),s.lines.length===0&&s.choices&&s.choices.length>0?Zi(a,f,{kind:"choices",beatId:s.id}):s.control?If(a,f,s,a.messages,void 0,s.next,h):Zi(a,f,{kind:"lines",beatId:s.id,lineIndex:0}))}function Jp(a,f,h){const o=a.pending[f];if(!o||o.kind!=="lines")throw new Error(`${Jl(f)}没有正在播出的台词`);const s=Jf(h,o.beatId),y=s.lines[o.lineIndex];if(!y)throw new Error(`节拍 ${s.id} 没有第 ${o.lineIndex+1} 句`);const p=[...a.messages,{id:`${s.id}:${o.lineIndex}`,channel:f,beatId:s.id,from:y.from,text:y.text,delivery:y.delivery,caption:y.caption,timing:y.timing}],v=o.lineIndex+1;return v<s.lines.length?{...Zi(a,f,{kind:"lines",beatId:s.id,lineIndex:v}),messages:p}:s.choices&&s.choices.length>0?{...Zi(a,f,{kind:"choices",beatId:s.id}),messages:p}:If(a,f,s,p,void 0,s.next,h)}function $p(a,f,h,o){var E,x;const s=a.pending[f];if(!s||s.kind!=="choices")throw new Error(`${Jl(f)}还不能选：这一侧的话还没说完`);const y=Jf(o,s.beatId),p=(E=y.choices)==null?void 0:E[h];if(!p)throw new Error(`节拍 ${y.id} 没有第 ${h+1} 个选项`);const v=Ff(a,f,p);if(v)throw new Error(`节拍 ${y.id} 的选项「${p.thought}」需要记忆「${v}」，本窗还没存`);const T=(x=U0(a,f,p))==null?void 0:x.next;return Zi(a,f,{kind:"reply",beatId:y.id,choiceIndex:h,...T?{memoryNext:T}:{}})}function kp(a,f,h){var v;const o=a.pending[f];if(!o||o.kind!=="reply")throw new Error(`${Jl(f)}没有待发出的回复`);const s=Jf(h,o.beatId),y=(v=s.choices)==null?void 0:v[o.choiceIndex];if(!y)throw new Error(`节拍 ${s.id} 没有第 ${o.choiceIndex+1} 个选项`);const p=[...a.messages,{id:`${s.id}:reply:${o.choiceIndex}`,channel:f,beatId:s.id,from:"ai",text:y.reply,delivery:"type",timing:y.timing}];return If(a,f,s,p,y.set,o.memoryNext??y.next,h)}function If(a,f,h,o,s,y,p){if(a.completed.includes(h.id))return a;const v={...a.flags};if(s)for(const[F,tn]of Object.entries(s))v[F]=tn;const T=Wp(a.memories,h.清空记忆),E=y&&!a.activated.includes(y)?[...a.activated,y]:a.activated,x=[...a.completed,h.id],g={...a,messages:o,flags:v,memories:T,activated:E,completed:x,pending:{...a.pending,[f]:null}},S=Fp(g,p),w={...g,endings:S};return!_a(w)||_a(a)?w:Lf(Lf(w,"left",p),"right",p)}function Wp(a,f){return f?f==="all"?{left:[],right:[]}:{...a,[f]:[]}:a}function Zi(a,f,h){return{...a,pending:{...a.pending,[f]:h}}}function B0(a,f){if(!a.when)return"ok";for(const[h,o]of Object.entries(a.when)){if(!(h in f))return"wait";if(f[h]!==o)return"no"}return"ok"}function Jf(a,f){const h=a.find(o=>o.id===f);if(!h)throw new Error(`找不到节拍 ${f}`);return h}function Y0(a,f){return a.startedAt!==void 0?Math.max(0,f-a.startedAt):a.phase==="pause"?Ki:Math.max(0,Ki-(a.until-f))}function $f(){const[a,f]=ln.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return ln.useEffect(()=>{const h=window.matchMedia("(prefers-reduced-motion: reduce)"),o=()=>f(h.matches);return h.addEventListener("change",o),()=>h.removeEventListener("change",o)},[]),a}function Pp(a){const[f,h]=ln.useState(()=>Date.now());return ln.useEffect(()=>{if(!a)return;h(Date.now());const o=window.setInterval(()=>h(Date.now()),48);return()=>window.clearInterval(o)},[a]),f}const e0=["/","|","\\","-"];function t0(){const a=$f(),[f,h]=ln.useState(0);return ln.useEffect(()=>{if(a)return;const o=window.setInterval(()=>h(s=>(s+1)%e0.length),115);return()=>window.clearInterval(o)},[a]),U.jsx("span",{className:"terminal-spinner","aria-hidden":"true",children:a?"-":e0[f]})}function L0(a,f,h,o,s){const[y,p]=ln.useState(()=>f?Math.min(1,a.length):a.length),v=ln.useRef(!1),T=ln.useRef(o),E=ln.useRef(s);return T.current=o,E.current=s,ln.useEffect(()=>{var g;if(!f)return;if(y>=a.length){v.current||(v.current=!0,(g=T.current)==null||g.call(T));return}const x=window.setTimeout(()=>{var S;p(w=>w+1),(S=E.current)==null||S.call(E)},Math.max(0,h));return()=>window.clearTimeout(x)},[y,a,f,h]),f?a.slice(0,y):a}function n2({text:a,interval:f,onFinished:h}){const o=L0(a,!0,f,h);return U.jsxs(U.Fragment,{children:[o,o.length<a.length?U.jsx("span",{className:"caret","aria-hidden":"true"}):null]})}const Il={left:{id:"01",name:"男生",gender:"男",age:21,work:"在校大学生",city:"西安"},right:{id:"02",name:"女生",gender:"女",age:22,work:"大学生 · 项目组实习",city:"西安"}};function e2({mode:a,choices:f,selected:h,onMove:o,onPick:s,memoryGate:y}){return U.jsx("div",{className:"choice-list","data-testid":"composer","data-mode":a,children:a==="active"?U.jsx("div",{role:"group","aria-label":"选一个想法",children:f.map((p,v)=>{const T=y(p),E=T!==null,x=!E&&h===v;return U.jsxs("button",{type:"button","data-testid":"choice","data-index":v,"data-gated":E||void 0,disabled:E,title:E?`需要记忆：${T}`:void 0,onMouseEnter:()=>o(v),onFocus:()=>o(v),onClick:()=>s(v),className:"choice-line","data-current":x||void 0,children:[U.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:x?">":""}),U.jsxs("span",{children:[p.需记忆||p.记忆后继?U.jsx("span",{className:"memory-tag","data-testid":"memory-tag",children:"[MEM] "}):null,p.thought]})]},v)})}):null})}function r0({from:a,text:f,delivery:h,caption:o,animate:s=!1,typeIntervalMs:y=100,marks:p,onSaveMark:v,onFinished:T,onProgress:E,onSkip:x}){const g=s&&h==="type",S=a==="ai",w=L0(f,g,y,T,E);if(h==="thought")return null;const F=tn=>{if(!p||p.length===0)return tn;const k=p.map(cn=>({mark:cn,at:tn.indexOf(cn.text)})).filter(cn=>cn.at>=0).sort((cn,fn)=>cn.at-fn.at);if(k.length===0)return tn;const Tn=[];let pn=0;for(const{mark:cn,at:fn}of k)fn<pn||(fn>pn&&Tn.push(tn.slice(pn,fn)),Tn.push(cn.saved?U.jsxs("span",{"data-testid":"memory-mark","data-saved":"true",className:"memory-mark-saved",children:[cn.text,U.jsx("span",{className:"memory-tag",children:" [MEM] 已存"})]},`${fn}-${cn.text}`):U.jsxs("button",{type:"button","data-testid":"memory-mark","data-saved":"false",className:"memory-mark",disabled:!v,"aria-label":`存记忆：${cn.text}`,onClick:()=>v==null?void 0:v(cn.text),children:[cn.text," [+]"]},`${fn}-${cn.text}`)),pn=fn+cn.text.length);return pn<tn.length&&Tn.push(tn.slice(pn)),Tn};return h==="image"?U.jsxs("div",{className:`msg-row ${S?"right":"left"}`,"data-from":a,"data-delivery":h,children:[U.jsx("span",{className:"msg-direction","aria-hidden":"true",children:S?"OUT<":"IN>"}),U.jsxs("figure",{className:"msg-image",children:[U.jsx("img",{src:f,alt:o??"图片"}),o?U.jsx("figcaption",{children:o}):null]})]}):U.jsxs("div",{className:`msg-row ${S?"right":"left"}`,"data-from":a,"data-delivery":h,children:[U.jsx("span",{className:"msg-direction","aria-hidden":"true",children:S?"OUT<":"IN>"}),U.jsxs("div",{className:S?"msg-ai":"msg-user","data-testid":"bubble-text",onClick:g?x:void 0,title:g?"点击跳过":void 0,children:[S?U.jsx("span",{className:"msg-ink",children:F(w)}):F(w),g&&w.length<f.length?U.jsx("span",{className:"caret","aria-hidden":"true"}):null]})]})}function t2({script:a,channel:f,state:h,dispatch:o,active:s,focused:y,selected:p,skipRefs:v,onMove:T,onPick:E,now:x,reduced:g,running:S,onMemoryFull:w}){var Mt,Lt;const{name:F,id:tn}=Il[f],k=h.pending[f],Tn=Kp(h,f),pn=Tn.filter(u=>u.delivery!=="thought"),cn=(k==null?void 0:k.kind)==="choices"?[...Tn].reverse().find(u=>u.beatId===k.beatId&&u.delivery==="thought"):null,fn=Zp(h,f,a.beats),An=h.ritual[f],Zn=An?Y0(An,x):0,I=An?An.phase==="pause"||g?pn.length:Math.floor(pn.length*Math.min(1,Zn/Ki)):0,mn=pn.slice(I),Cn=u=>{var O;return((O=a.beatById)==null?void 0:O.get(u))??a.beats.find(Y=>Y.id===u)},jn=new Set(h.memories[f].map(u=>u.label)),W=(u,O)=>{var L;return(((L=Cn(u))==null?void 0:L.记忆候选)??[]).filter(j=>O.includes(j.短句)).map(j=>({text:j.短句,saved:jn.has(j.缩略标签)}))},P=new Set;for(const u of Tn)for(const O of((Mt=Cn(u.beatId))==null?void 0:Mt.记忆候选)??[])u.text.includes(O.短句)&&P.add(O.缩略标签);const zn=P.size,Nn=h.memories[f].length,Vn=Na(h,f),[q,sn]=ln.useState(!1),hn=ln.useRef(null),[rn,Mn]=ln.useState(),gn=S?r2(a,h,f):null,ie=(gn==null?void 0:gn.token)??"",Xn=(rn==null?void 0:rn.token)===ie?rn.phase:"idle",M=ln.useRef(()=>{}),V=ln.useRef(h),un=ln.useRef(null),an=ln.useRef([]),_n=ln.useRef(0),wn=ln.useRef(null),xn=ln.useRef(new Map);ln.useLayoutEffect(()=>{var Y;const u=wn.current;if(!u)return;if(!An||g){xn.current.clear();return}u.scrollTop=0;const O=new Map;for(const L of u.querySelectorAll("[data-clear-row]")){const j=L.dataset.clearRow,d=L.offsetTop,D=xn.current.get(j);O.set(j,d),D!==void 0&&D!==d&&((Y=L.animate)==null||Y.call(L,[{transform:`translateY(${D-d}px)`},{transform:"translateY(0)"}],{duration:135,easing:"ease-out"}))}xn.current=O},[An,I,g]),V.current=h;const en=ln.useCallback(()=>{for(const u of an.current)window.clearTimeout(u);an.current=[]},[]),vn=ln.useCallback((u,O)=>{if(O<=0){u();return}an.current.push(window.setTimeout(u,O))},[]),He=ln.useCallback(()=>{en();const u=V.current.pending[f];if(!u||u.kind==="choices")return;const O=`${V.current.runId}|${u.beatId}:${u.kind}:${"lineIndex"in u?u.lineIndex:"choiceIndex"in u?u.choiceIndex:0}`;un.current!==O&&(un.current=O,o(u.kind==="lines"?{type:"commit-line",channel:f}:{type:"commit-reply",channel:f}))},[f,en,o]);M.current=He;const ut=ln.useCallback(()=>{vn(()=>M.current(),_n.current)},[vn]),Ue=ln.useCallback(()=>M.current(),[]);ln.useEffect(()=>{const u=v.current;return u[f]=Ue,()=>{delete u[f]}},[f,Ue,v]),ln.useEffect(()=>{en();const u=Y=>Mn({token:ie,phase:Y});if(!gn)return u("idle"),en;const O=g?{...M0}:gn.timing;return _n.current=gn.delivery==="thought"?0:O.afterMs,u("pause"),vn(()=>{u("indicator"),vn(()=>{!g&&gn.delivery==="thought"||lp(gn.delivery,g)?u("typing"):(u("shown"),vn(()=>M.current(),_n.current))},O.indicatorMs)},O.pauseBeforeMs),en},[ie,en,vn,gn==null?void 0:gn.delivery,g]),ln.useEffect(()=>{const u=wn.current;u&&!An&&(u.scrollTop=u.scrollHeight)},[pn.length,Xn,ie,An]);const ue=k?Cn(k.beatId):void 0,$n=S&&(k==null?void 0:k.kind)==="choices"&&(ue==null?void 0:ue.choices)&&ue.choices.length>0,Fn=$n?"active":(k==null?void 0:k.kind)==="lines"||(k==null?void 0:k.kind)==="reply"||fn.mode==="gated"||An?"locked":"empty",ae=(gn==null?void 0:gn.delivery)==="thought"?gn:null;function $e(u,O){var j,d;const Y=(j=Cn(u))==null?void 0:j.context,L=O?(d=Cn(O))==null?void 0:d.context:void 0;if(!(!Y||u===O))return Y.section!==(L==null?void 0:L.section)?Y.time??Y.entryTime:Y.time!==L.time?Y.time:void 0}const pe=pn.at(-1),Se=ue??(pe&&Cn(pe.beatId)),at=Se!=null&&Se.context?void 0:(Se==null?void 0:Se.time)??(Se==null?void 0:Se.label),Te=k&&$e(k.beatId,pe==null?void 0:pe.beatId);ln.useEffect(()=>sn(!1),[h.runId,h.chapter[f]]),ln.useEffect(()=>{if(!q)return;const u=O=>{var Y;O.target instanceof Node&&!((Y=hn.current)!=null&&Y.contains(O.target))&&sn(!1)};return document.addEventListener("pointerdown",u),()=>document.removeEventListener("pointerdown",u)},[q]);function Yt(u){Nn>=(Vn??1/0)?w(u):o({type:"save-memory",channel:f,...u})}const Xe=`${Nn}/${Vn??Math.max(zn,Nn)}`;return U.jsxs("section",{className:"pane terminal-column","data-testid":`pane-${f}`,"aria-label":F,"data-focused":y||void 0,"data-playing":s||void 0,children:[U.jsxs("header",{className:"pane-head ascii-rule",children:[U.jsx("span",{className:"pane-signal","aria-hidden":"true",children:s?">":" "}),U.jsxs("span",{className:"pane-number",children:["USER ",tn," /"]}),U.jsx("span",{className:"pane-name",children:F}),U.jsxs("div",{className:"pane-head-right",children:[at?U.jsx("span",{className:"pane-meta","data-testid":`time-${f}`,children:at}):null,U.jsx("button",{type:"button",className:"memory-entry","data-testid":`memory-counter-${f}`,ref:hn,onClick:()=>sn(u=>!u),onBlur:()=>sn(!1),"aria-expanded":q,"aria-label":`Memory 数量：${Xe}`,children:q?`[Memory 数量：${Xe}]`:`[MEM ${Xe}]`})]})]}),U.jsxs("div",{ref:wn,className:"messages",role:"log","aria-label":`${F}的对话`,children:[mn.map((u,O)=>{var L;const Y=$e(u.beatId,(L=pn[I+O-1])==null?void 0:L.beatId);return U.jsxs("div",{"data-clear-row":u.id,children:[Y?U.jsx("div",{className:"chat-date",children:Y}):null,U.jsx(r0,{from:u.from,text:u.text,delivery:u.delivery,caption:u.caption,marks:W(u.beatId,u.text),onSaveMark:An?void 0:j=>{var D;const d=(((D=Cn(u.beatId))==null?void 0:D.记忆候选)??[]).find(B=>B.短句===j);d&&Yt({label:d.缩略标签,text:d.短句,beatId:u.beatId})}})]},u.id)}),gn&&gn.delivery!=="thought"&&Xn!=="idle"&&Te?U.jsx("div",{className:"chat-date",children:Te}):null,An&&Zn<Ki+500&&!g?U.jsxs("p",{className:"system-line","data-clear-row":"system","data-testid":`resetting-${f}`,role:"status",children:["[SYS] ",An.phase==="mask"?"正在清空上下文…":"已清空"]}):null,Xn==="indicator"&&gn&&gn.delivery!=="thought"?U.jsxs("div",{className:`msg-row ${gn.from==="ai"?"right":"left"} message-wait`,"data-testid":`message-wait-${f}`,children:[U.jsx("span",{className:"msg-direction",children:U.jsx(t0,{})}),U.jsx("button",{type:"button",className:`${gn.from==="ai"?"msg-ai":"msg-user"} message-wait-button`,"data-testid":"skip",onClick:Ue,"aria-label":"跳过当前播放",children:gn.from==="ai"?"正在发送":"正在接收"})]}):null,(Xn==="typing"||Xn==="shown")&&gn&&gn.delivery!=="thought"?U.jsx(r0,{from:gn.from,text:gn.text,delivery:gn.delivery,caption:gn.caption,animate:Xn==="typing",typeIntervalMs:gn.timing.typeIntervalMs,onFinished:Xn==="typing"?ut:void 0,onProgress:()=>{const u=wn.current;u&&(u.scrollTop=u.scrollHeight)},onSkip:Ue},gn.token):null]}),!An&&($n||ae&&Xn!=="idle"&&Xn!=="pause")?U.jsxs("div",{className:"composer",children:[cn||ae?U.jsxs("div",{className:"think-block","data-testid":`think-${f}`,children:[U.jsx("span",{className:"think-block-head",children:"[THINKING]"})," ",ae&&Xn==="indicator"?U.jsxs("span",{className:"think-progress",children:[U.jsx(t0,{})," 正在思考"]}):ae&&Xn==="typing"?U.jsx(n2,{text:ae.text,interval:Math.max(15,Math.min(31,ae.timing.typeIntervalMs)),onFinished:ut},ae.token):(Lt=ae??cn)==null?void 0:Lt.text]}):null,U.jsx(e2,{mode:Fn,choices:$n?(ue==null?void 0:ue.choices)??[]:[],selected:p,onMove:T,onPick:E,memoryGate:u=>Ff(h,f,u)})]}):null]})}function r2(a,f,h){var p,v;const o=f.pending[h];if(!o||o.kind==="choices")return null;const s=((p=a.beatById)==null?void 0:p.get(o.beatId))??a.beats.find(T=>T.id===o.beatId);if(!s)return null;if(o.kind==="lines"){const T=s.lines[o.lineIndex];return T?{token:`${f.runId}|${s.id}:line:${o.lineIndex}`,from:T.from,text:T.text,delivery:T.delivery,caption:T.caption,timing:T.timing??Aa([])}:null}const y=(v=s.choices)==null?void 0:v[o.choiceIndex];return y?{token:`${f.runId}|${s.id}:reply:${o.choiceIndex}`,from:"ai",text:y.reply,delivery:"type",timing:y.timing??Aa([])}:null}const l2=[["L1 L2 L3","他请助手推荐桌游店，想选一家适合多人聚会的店。"],["R1-shiguang R1-xindong R1-xushi","朋友约她去桌游店，她让助手查了地点。"],["R2","出门时间紧，她问要不要化妆。"],["3.1.1-A 3.1.1-C","他到了一家临时改换的桌游店，现场有不少陌生人。"],["3.1.1-B","他到了桌游店，发现除了朋友几乎都不认识。"],["3.2.1","他和一位戴耳机的人搭话，起初误以为对方不想理他。"],["3.2.2 3.2.3 3.2.4 3.3.1 3.3.2","桌游开始后，他留意到一位像是表妹同桌的女生。"],["3.2.2-A 3.3.1-A","他留意到刚进来的女生的眼妆和笑声，觉得她像是表妹的同桌。"],["3.4.1","她出地铁后问了去桌游店的路。"],["3.4.2","她说没按助手的指路找到店，后来向同学问到了位置。"],["3.4.3-A 3.4.3-B 3.4.4","她问起一件衣服的牌子和价格。"],["4.1.1 4.2.1","桌游结束后，他向助手回顾了和那位女生的互动。"],["4.2.2","他想问表妹要微信，又怕问得唐突。"],["4.2.3","他打算借舍友的名义去问表妹。"],["4.2.3-direct","他当面问她能不能加微信，她请同桌帮忙推联系方式。"],["4.2.4 4.2.5","他重新想了想，决定先不问。"],["4.3.1 4.3.2 4.3.3","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。"],["4.3.4","她打算去问同桌。"],["4.3.5","她决定先不问。"],["5m.1.1-A 5m.1.1-B 5m.1.1-C 5m.1.2 5m.1.3","加上微信后，他琢磨怎么开场，又问起她回消息的速度。"],["5m.1.4","他睡前收住话题，第二天早上她照常找他聊天。"],["5m.1.5","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。"],["5m.1.6 5m.2.1 5m.2.2","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。"],["5m.2.3 5m.2.5","他试着少发消息，等回复时还是觉得不踏实。"],["5m.2.4","他仍然频繁发消息，发现她回得一如既往地慢。"],["5m.3.1 5m.3.2 5m.3.3 5m.3.4","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。"],["5m.4.1 5m.4.2 5m.4.3 5m.4.4","他和助手商量表白，发出消息后收到她愿意试试的答复。"],["5f.1.1-A 5f.1.1-B 5f.1.1-C 5f.1.2 5f.1.3","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。"],["5f.1.4","她告诉他自己累了，收到一长串关心的话。"],["5f.1.5","她发了个表情包，他回了一句让她早点休息。"],["5f.2.1","他夸她开朗，她向助手说起自己的社交生活。"],["5f.2.2","她在和闺蜜吃饭时说起他。"],["5f.2.3","她向助手谈到自己累时习惯一个人待着。"],["5f.2.4","她说他问起家里的事，自己岔开了话题。"],["5f.3.1 5f.3.2 5f.3.3 5f.3.4","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。"],["5f.4.1 5f.4.2 5f.4.3 5f.4.4","收到表白后她犹豫过，最后回复说愿意试试。"],["6m.CHOICE 6m.M2A 6m.M2B","确定关系后，他用两人的照片发了朋友圈。"],["6m.M3 6m.M4","他提议吃青提蛋糕庆祝，后来把合照原图发给她。"],["6m.M5 6m.MEMCHOICE","他问她能不能一起过满月纪念日，又来问礼物怎么准备。"],["6m.M7A","他下单洗了两张合照。"],["6m.M7B","他先记下纪念日，准备以后再想礼物。"],["6f.F1 6f.CHOICE","她看到了他发的合照，来问自己要不要也发一条。"],["6f.F3A","她发了朋友圈，同事来问照片里的人是谁。"],["6f.F3B","她把照片发给闺蜜，闺蜜打来电话。"],["6f.F4 6f.F5","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。"],["6f.F6 6f.F7 6f.F8","她答应把满月纪念日那天留给他，并记进了日历。"],["7m.MONE","她赶项目、回消息变少，他说自己还是常想找她。"],["7m.MNEWS 7m.MPROJECT 7m.MDEMAND","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。"],["7m.MWAIT 7m.MFEAR 7m.MOWN","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。"],["7m.OPENCHOICE","她约他见面，也告诉他自己前一天是故意没回。"],["7m.PLAINCHOICE","她发来见面邀请，他还在犹豫要不要问前一天的事。"],["7m.SENTBOTH 7m.SENTHER 7m.SENTHIM 7m.SENTQUIET 7m.MEMBOTH 7m.MEMHER 7m.MEMHIM 7m.MEMQUIET 7m.PLANENDBOTH 7m.PLANENDHER 7m.PLANENDHIM 7m.PLANENDQUIET","两人约好下午四点在地铁口见，他来问吃什么比较合适。"],["7m.AFTERBOTH","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。"],["7m.AFTERHER","她提到自己气上了头，他换了话题。"],["7m.AFTERHIM","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。"],["7m.AFTERQUIET","他们一起吃了饭，没有提起周五的争执。"],["7f.FDAY 7f.FDAYMORE","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。"],["7f.FANGER 7f.FDEMAND","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。"],["7f.FNOTIFICATION 7f.FPUSH 7f.FOWN","她看到了他的消息，告诉助手自己故意没有回复。"],["7f.COUSIN","她还不想和他说话，开始考虑找别人聊聊。"],["7f.COUSINSENTNO 7f.COUSINBACKNO","她找了闺蜜聊，闺蜜问她还想不想见他。"],["7f.COUSINSENTYES 7f.COUSINBACKYES","她找同桌聊，叮嘱对方别替她去联系他。"],["7f.FCHOICE 7f.FSENTEASY","她想当面说，最后发出了见面邀请。"],["7f.FSENTOPEN","发出邀请时，她也写了自己是故意让他等。"],["7f.RECEIVEDBOTH 7f.RECEIVEDHER 7f.RECEIVEDHIM 7f.RECEIVEDQUIET 7f.ACKBOTH 7f.ACKHIM 7f.SETBOTH 7f.SETHER 7f.SETHIM 7f.SETQUIET","他答应见面。她和他约好下午四点在地铁口碰头。"],["7f.AFTERBOTH","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。"],["7f.AFTERHER","她说自己当时气上了头，随后两人聊了别的。"],["7f.AFTERHIM","她解释为什么当时不愿回消息，随后和他一起吃了饭。"],["7f.AFTERQUIET","他们一起吃了饭，没有再提争执。"],["7f.STATION","她向助手说起吃饭时拍糊的照片。"],["8f.F101","交往满一个月，她打算给男友带点东西，问助手买什么。"],["8f.F102A","她买了蛋糕，放在办公室冰箱里。"],["8f.F102B","她买了盒曲奇，放进包里。"],["8m.M101","交往满一个月，他想给女友带杯喝的，问助手去哪儿买。"],["8m.M102A","他决定去青杏买饮料。"],["8m.M102B","他打算出门后再挑饮品店。"],["8f.F103 8f.F104","她临时加班，跟男友商量把晚饭改到另一天。"],["8m.M103","他收到晚饭改期的消息。虽然答应了，心里还是有点失落。"],["8m.M104","他买了吃的和喝的，没等到回复就出发了。"],["8m.M105 8m.M106","他在她公司楼下碰见她和同事，当众起了争执。他介意她说自己丢人。"],["8f.F105 8f.F106","她下楼拿外卖时碰见突然到访的男友，被他当着同事的面追问。"],["8m.M107 8m.M200 8m.M201","他来复述争执，提到自己要求看私聊、让她删除同事，也问她有没有回应他的委屈。"],["8f.F107 8f.F200 8f.F201","她来复述争执，说自己拒绝交出聊天记录，也拒绝删除同事。"],["8m.M202B5 8m.M202B7 8m.M202O5 8m.M202O7 8m.M202S 8m.M203B5 8m.M203B7 8m.M203O5 8m.M203O7 8m.M203S","他和助手借过去的经历重新回顾这次争执。"],["8f.F202B5 8f.F202B7 8f.F202O5 8f.F202O7 8f.F202S 8f.F203B5 8f.F203B7 8f.F203O5 8f.F203O7 8f.F203S","她和助手借过去的经历重新回顾这次争执。"],["8m.M202E 8m.M203E","他向助手说起自己当时没有被听见的感受。"],["8f.F202E 8f.F203E","她向助手说起自己被怀疑时的感受。"],["8m.M301R","他承认索看私聊和要求删人不妥，向女友道歉。"],["8f.F301RE 8f.F302RE","她收到道歉后仍然生气，读到他第二次回应后，也想为自己说过的话道歉。"],["8m.M302RE","道歉被反问后，他承认自己刚才的指责，让她晚点再回。"],["8f.F301ER 8f.F301RR","她想起自己当众说的话，决定为此道歉。"],["8m.M301ER 8m.M302ER","他收到道歉时仍有怨气，读完她后续的回应后，也承认自己不该突然去找她并当面质问。"],["8f.F302ER 8f.F303ER","道歉被顶回来后，她说明了当时为什么急着走，随后也收到他的道歉。"],["8m.M302RR 8m.M303RE 8m.M303ER","他来问怎么约她见面，想当面说清楚。"],["8f.F304G 8m.M304G","两人约好等她忙完后在楼下见。"],["8f.F305G 8m.M305G","两人当面谈过，约好到访前先确认，需要冷静时先说一声。"],["8f.F301E 8f.F302E","她决定结束关系，发出分手消息后准备回家。"],["8m.M301E 8m.M302E 8m.M303E","他收到分手消息，一时不知道怎么回，后来放下了手机。"]],i2=l2.map(([a,f])=>({beatIds:a.split(" "),text:f}));function u2(a){const f=new Map(a.beatIds.map((y,p)=>[y,p])),h=i2.map(y=>({text:y.text,beatIds:y.beatIds.filter(p=>f.has(p))})).filter(y=>y.beatIds.length>0),o=new Set(h.flatMap(y=>y.beatIds)),s=a.beatIds.filter(y=>!o.has(y));return s.length&&h.push({text:"本次会话还有其他已处理消息。",beatIds:s}),h.sort((y,p)=>Math.min(...y.beatIds.map(v=>f.get(v)))-Math.min(...p.beatIds.map(v=>f.get(v))))}const l0=["left","right"],Gf=3400;function a2({script:a,state:f,now:h,reduced:o,replacement:s,onCancelReplacement:y,onReplace:p,onForget:v}){var An,Zn;const[T,E]=ln.useState({left:!0,right:!0}),[x,g]=ln.useState({});function S(I){var Cn,jn;const mn=f.ritual[I];if(!(!mn||mn.phase==="mask"&&mn.contextTo!==void 0))return mn.contextTo===void 0?mn.from:(jn=(Cn=f.archive)==null?void 0:Cn[I].at(-1))==null?void 0:jn.section}const w=S("left"),F=S("right"),tn=!!_a(f),k=((An=f.context)==null?void 0:An.left)??f.chapter.left,Tn=((Zn=f.context)==null?void 0:Zn.right)??f.chapter.right,pn=ln.useRef(null),cn=l0.flatMap(I=>{var mn;return(((mn=f.archive)==null?void 0:mn[I])??[]).flatMap(Cn=>{var jn,W;return Cn.section===void 0||((jn=f.ritual[I])==null?void 0:jn.phase)==="mask"&&Cn.section===((W=f.context)==null?void 0:W[I])?[]:[`${I}:${Cn.section}`]})}),fn=ln.useRef(new Set(cn));return ln.useLayoutEffect(()=>{var Cn,jn;const I=Array.from(((Cn=pn.current)==null?void 0:Cn.querySelectorAll("[data-archive-title]"))??[]),mn=new Set(cn);fn.current=new Set([...fn.current].filter(W=>mn.has(W)));for(const W of I){const P=W.dataset.archiveTitle;!mn.has(P)||fn.current.has(P)||(fn.current.add(P),o||(jn=W.animate)==null||jn.call(W,[{opacity:0,transform:"translateX(-5px)"},{opacity:1,transform:"translateX(0)"}],{duration:320,easing:"ease-out"}))}}),ln.useLayoutEffect(()=>{const I=pn.current,mn=[...(I==null?void 0:I.querySelectorAll("[data-recording]"))??[]].at(-1);if(!I||!mn)return;const Cn=I.getBoundingClientRect(),jn=mn.getBoundingClientRect();jn.bottom>Cn.bottom?I.scrollTop+=jn.bottom-Cn.bottom:jn.top<Cn.top&&(I.scrollTop+=jn.top-Cn.top)},[w,F,T,x,h]),ln.useEffect(()=>{E({left:!0,right:!0}),g({})},[f.runId]),ln.useEffect(()=>{w!==void 0&&(E(I=>({...I,left:!0})),g(I=>({...I,[`left:${w}`]:!0}))),F!==void 0&&(E(I=>({...I,right:!0})),g(I=>({...I,[`right:${F}`]:!0}))),tn&&(E({left:!0,right:!0}),g(I=>({...I,[`left:${k}`]:!0,[`right:${Tn}`]:!0})))},[w,F,tn,k,Tn,f.runId]),ln.useEffect(()=>{s&&E(I=>({...I,[s.channel]:!0}))},[s]),ln.useLayoutEffect(()=>{var I,mn;s&&((mn=(I=pn.current)==null?void 0:I.querySelector("[data-replacement-option]"))==null||mn.focus())},[s,T]),U.jsxs("aside",{className:"archive terminal-column","aria-label":"Context Store · Summary / Memory","data-testid":"terminal-archive",children:[U.jsxs("header",{className:"pane-head ascii-rule",children:[U.jsx("span",{className:"pane-name",children:"CONTEXT STORE"}),U.jsx("span",{className:"archive-kind",children:"SUMMARY / MEMORY"})]}),U.jsx("div",{className:"archive-scroll",ref:pn,children:l0.map(I=>{var sn,hn;const mn=((sn=f.archive)==null?void 0:sn[I])??[],Cn=f.memories[I],jn=Cn.filter(rn=>!mn.some(Mn=>Mn.beatIds.includes(rn.beatId))),W=f.ritual[I],P=(hn=f.context)==null?void 0:hn[I],zn=!tn&&P!==void 0&&!mn.some(rn=>rn.section===P),Nn=I==="left"?w:F,Vn=(s==null?void 0:s.channel)===I?s.entry:void 0,q=Na(f,I)!==void 0?rn=>v(I,rn):void 0;return U.jsxs("div",{className:"archive-folder",children:[U.jsxs("button",{className:"tree-toggle","aria-expanded":T[I],type:"button",onClick:()=>E(rn=>({...rn,[I]:!rn[I]})),children:[U.jsx("span",{"aria-hidden":"true",children:T[I]?"[-]":"[+]"})," USER ",Il[I].id," / ",Il[I].name]}),T[I]?U.jsxs("div",{className:"archive-branches",children:[Vn?U.jsxs("div",{className:"archive-replacement","aria-label":"替换记忆",children:[U.jsxs("p",{children:["[MEM] 已满 · 选择一条替换为「",Vn.label,"」"]}),Cn.map(rn=>U.jsxs("button",{type:"button",className:"tree-toggle","data-replacement-option":!0,onClick:()=>p(rn.label),children:["替换「",rn.label,"」"]},rn.label)),U.jsx("button",{type:"button",className:"memory-entry",onClick:y,children:"[取消]"})]}):null,!mn.length&&!jn.length&&!zn?U.jsx("div",{className:"muted",children:"└ 尚无记录"}):null,jn.length?U.jsxs("details",{className:"archive-pending",children:[U.jsxs("summary",{children:["[MEMORY] 当前会话 · ",jn.length]}),jn.map(rn=>U.jsx(G0,{memory:rn,onForget:q},rn.label))]}):null,mn.map(rn=>{var V,un;const Mn=rn.section??rn.chapter,gn=`${I}:${Mn}`,ie=Nn===Mn;if(rn.section===P&&(W==null?void 0:W.contextTo)!==void 0&&W.phase==="mask")return U.jsx("div",{className:"archive-session muted",children:"└ 收录中…"},gn);const Xn=ie&&W&&!o?Y0(W,h):Gf,M=rn.section===void 0?(un=(V=a.chapters)==null?void 0:V.find(an=>an.index===rn.chapter))==null?void 0:un.title:N0[rn.section-1];return U.jsxs("div",{className:"archive-session","data-recording":ie||void 0,children:[U.jsxs("button",{className:"tree-toggle","aria-expanded":!!x[gn],type:"button",onClick:()=>g(an=>({...an,[gn]:!an[gn]})),children:[U.jsx("span",{"aria-hidden":"true",children:x[gn]?"[-]":"[+]"})," ",U.jsx("span",{"data-archive-title":gn,className:"archive-title",children:(M==null?void 0:M.replace(/^第[一二三四五六七八九十\d]+[幕章]\s*·\s*/,""))??"会话记录"})]}),x[gn]?U.jsx(c2,{entry:rn,memories:Cn,elapsed:Xn,onForget:q}):null]},gn)}),zn?U.jsx("div",{className:"archive-session muted",children:"└ 收录中…"},`${I}:${P}`):null]}):null]},I)})})]})}function c2({entry:a,memories:f,elapsed:h,onForget:o}){const s=ln.useMemo(()=>u2(a),[a]),y=ln.useMemo(()=>s.map(T=>Array.from(T.text)),[s]),p=y.reduce((T,E)=>T+E.length+3,0);let v=Math.floor(Math.max(0,Math.min(1,h/Gf))*p);return U.jsxs("div",{className:"archive-segments",children:[h<Gf?U.jsxs("p",{className:"archive-writing",children:[U.jsx("span",{"aria-hidden":"true",children:"[CTX]"})," 正在收录…"]}):null,s.map((T,E)=>{const x=y[E],g=Math.max(0,Math.min(v,x.length));return v-=x.length+3,g?U.jsxs("div",{className:"archive-segment",children:[U.jsx("span",{"aria-hidden":"true",children:E===s.length-1?"└":"├"}),U.jsxs("div",{children:[x.slice(0,g).join(""),g<x.length?U.jsx("span",{className:"caret","aria-hidden":"true"}):null,g===x.length?f.filter(S=>T.beatIds.includes(S.beatId)).map(S=>U.jsx(G0,{memory:S,onForget:o},S.label)):null]})]},T.beatIds[0]):null})]})}function G0({memory:a,onForget:f}){return U.jsxs("details",{className:"archive-memory",children:[U.jsxs("summary",{children:["[MEM] ",a.label]}),U.jsxs("p",{children:["「",a.text,"」"]}),f?U.jsx("button",{type:"button",className:"memory-entry memory-action","aria-label":`舍弃「${a.label}」`,onClick:()=>f(a.label),children:"[舍弃]"}):null]})}const Q0=1440,X0=920;function i0(){const a=window.innerWidth<720?12:40;return Math.min(1,Math.max(1,window.innerWidth-a)/Q0,Math.max(1,window.innerHeight-a)/X0)}function kf({children:a,intro:f}){const[h,o]=ln.useState(i0);return ln.useEffect(()=>{const s=()=>o(i0());return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),U.jsx("main",{className:"stage",children:U.jsx("div",{className:"stage-frame",style:{width:Q0*h,height:X0*h},children:U.jsx("div",{className:"game-canvas","data-testid":"game-canvas","data-intro":f?!0:void 0,inert:!!f,style:{transform:`scale(${h})`,...f?Object.fromEntries(Object.entries(f).map(([s,y])=>[`--intro-${s}`,`${y}%`])):{}},children:a})})})}const V0="shuangxian",za=`${V0}.progress.v2`,Wf=`${V0}.progress.v1`;let Kl=null;function o2(){const a=Kl;return Kl=null,a}function f2(a){try{localStorage.setItem(za,JSON.stringify({version:2,state:a}))}catch(f){console.error("[存档] 写入失败",f)}}function s2(){try{return!!(localStorage.getItem(za)||localStorage.getItem(Wf))}catch{return!1}}function Zl(){try{localStorage.removeItem(za),localStorage.removeItem(Wf)}catch(a){console.error("[存档] 清除失败",a)}}function h2(a){try{const f=localStorage.getItem(za);if(!f)return localStorage.getItem(Wf)&&(Kl="剧本已更新到第五章定稿，旧进度无法继续，已从第一幕重新开始。",Zl()),null;const h=JSON.parse(f);if(!vt(h)||h.version!==2||!vt(h.state))return Kl="存档格式已升级，已从第一幕重新开始。",Zl(),null;const o=h.state;if(!m2(o,a))return Kl="剧本已更新，旧进度里的节拍已不存在，已从第一幕重新开始。",Zl(),null;const{activated:s,completed:y,superseded:p}=d2(o,a);for(const T of a)!Zf(T,a)||y.includes(T.id)||s.includes(T.id)||p.has(T.id)||s.push(T.id);const v={...o,activated:s,completed:y,pending:{left:o.pending.left??null,right:o.pending.right??null},memories:p2(o.memories,a),chapter:y2(o.chapter,a),ritual:v2(o.ritual),archive:qp(o.archive,a),context:g2(o.context),endings:Array.isArray(o.endings)?o.endings.filter(T=>typeof T=="string"):[],error:typeof o.error=="string"?o.error:null,runId:typeof o.runId=="number"?o.runId:0};return Up(v,a,T=>Fl(v,T,a))}catch(f){return console.error("[存档] 读取失败",f),Kl="存档读取失败，已从第一幕重新开始。",Zl(),null}}function d2(a,f){var p,v;const h=[...a.activated],o=[...a.completed],s=new Set,y="3.4.arrived";if(!f.some(T=>T.id===y))return{activated:h,completed:o,superseded:s};o.includes("3.4.1")&&!o.includes(y)&&!h.includes(y)&&(((p=a.chapter)==null?void 0:p.right)>=4||o.includes("3.4.2")||!h.includes("3.4.2"))&&o.push(y);for(const T of["3.2.2","3.3.1"]){const E=T+"-A";(o.includes(T)||((v=a.pending.left)==null?void 0:v.beatId)===T)&&s.add(E)}return{activated:h.filter(T=>!s.has(T)),completed:o,superseded:s}}function m2(a,f){const h=new Set(f.map(o=>o.id));if(!Array.isArray(a.completed)||!a.completed.every(o=>h.has(o))||!Array.isArray(a.activated)||!a.activated.every(o=>h.has(o))||!Array.isArray(a.messages)||!vt(a.flags)||!vt(a.pending))return!1;for(const o of a.messages)if(!vt(o)||o.channel!=="left"&&o.channel!=="right"||typeof o.text!="string"||typeof o.id!="string"||o.delivery!=="type"&&o.delivery!=="pop"&&o.delivery!=="image"&&o.delivery!=="thought")return!1;for(const o of["left","right"]){const s=a.pending[o];if(s!=null&&(!vt(s)||s.kind!=="lines"&&s.kind!=="choices"&&s.kind!=="reply"||typeof s.beatId!="string"||!h.has(s.beatId)))return!1}return!0}function y2(a,f){const h=y=>{const p=f.filter(v=>v.channel===y).map(v=>v.chapter??1);return p.length>0?Math.min(...p):1};if(!vt(a))return{left:h("left"),right:h("right")};const o=typeof a.left=="number"?a.left:h("left"),s=typeof a.right=="number"?a.right:h("right");return{left:o,right:s}}function g2(a){if(!vt(a))return;const f={};return Ma(a.left)&&(f.left=a.left),Ma(a.right)&&(f.right=a.right),f}function v2(a){const f={left:null,right:null};if(!vt(a))return f;for(const h of["left","right"]){const o=a[h];vt(o)&&(o.phase!=="mask"&&o.phase!=="pause"||typeof o.until!="number"||typeof o.from!="number"||typeof o.to!="number"||(f[h]={from:o.from,to:o.to,...Ma(o.contextTo)?{contextTo:o.contextTo}:{},phase:o.phase,until:o.until,...typeof o.startedAt=="number"?{startedAt:o.startedAt}:{}}))}return f}function vt(a){return typeof a=="object"&&a!==null}function p2(a,f){const h={left:[],right:[]};if(!vt(a))return h;const o=y=>Array.isArray(y)&&y.every(p=>vt(p)&&typeof p.label=="string")?y.map(p=>p):[],s=(y,p)=>o(y).filter(v=>{var E,x;const T=f.find(g=>g.id===v.beatId&&g.channel===p);return(T==null?void 0:T.chapter)===1&&T.记忆候选&&v.label==="店的位置"?(E=T.记忆候选)==null?void 0:E.some(g=>g.缩略标签===v.label&&g.短句===v.text):(T==null?void 0:T.chapter)!==5?!0:(x=T.记忆候选)==null?void 0:x.some(g=>g.缩略标签===v.label)});return{left:s(a.left,"left"),right:s(a.right,"right")}}function x2(a){const f=h=>{const o=Qp(h,a);return o===h.error?h:{...h,error:o}};return(h,o)=>{var s;try{switch(o.type){case"reset":return{...w0(a),runId:h.runId+1};case"sync-roots":return f(Xp(h,a));case"arm":return f(Ip(h,o.channel,a,o.now??Date.now()));case"commit-line":return f(Jp(h,o.channel,a));case"choose":return f($p(h,o.channel,o.index,a));case"commit-reply":return f(kp(h,o.channel,a));case"save-memory":{const y=a.find(v=>v.id===o.beatId&&v.channel===o.channel);return!((s=y==null?void 0:y.记忆候选)==null?void 0:s.find(v=>v.缩略标签===o.label&&v.短句===o.text))||!h.messages.some(v=>v.channel===o.channel&&v.beatId===o.beatId&&v.text.includes(o.text))?h:f(Bp(h,o.channel,{label:o.label,text:o.text,beatId:o.beatId},o.replaceLabel))}case"forget-memory":return f(Yp(h,o.channel,o.label));case"clear-messages":return f(j0(h,o.channel));case"ritual-tick":return f(Gp(h,o.channel,o.now));case"clear-error":return{...h,error:null};default:return h}}catch(y){const p=y instanceof Error?y.message:"引擎状态更新失败";return console.error("[引擎]",p),{...h,error:p}}}}function E2(a,f=!1,h=!0){const o=a.beats,s=ln.useMemo(()=>x2(o),[o]),[y,p]=ln.useReducer(s,o,T=>h2(T)??w0(T)),[v]=ln.useState(()=>o2());return ln.useEffect(()=>{h&&f2(y)},[y,h]),ln.useEffect(()=>{y.error&&console.error(y.error)},[y.error]),ln.useEffect(()=>{if(!h)return;const T=Date.now(),E=["left","right"].filter(w=>{const F=y.ritual[w];return F!==null&&(f||F.until<=T)});if(E.length>0){for(const w of E)p({type:"ritual-tick",channel:w,now:Math.max(T,y.ritual[w].until)});return}const x=["left","right"].map(w=>{var F;return(F=y.ritual[w])==null?void 0:F.until}).filter(w=>w!==void 0);if(x.length===0)return;const g=Math.min(...x),S=window.setTimeout(()=>{const w=Date.now();for(const F of["left","right"])y.ritual[F]&&y.ritual[F].until<=w&&p({type:"ritual-tick",channel:F,now:w})},Math.max(0,g-T));return()=>window.clearTimeout(S)},[y.ritual,f,h]),ln.useEffect(()=>{if(!h)return;const T=Lp(y,o);T&&p({type:"arm",channel:T.channel})},[y,o,h]),{state:y,dispatch:p,notice:v}}const Ta=["left","right"];function S2({script:a,onTitle:f,intro:h}){const o=!h,s=$f(),{state:y,dispatch:p,notice:v}=E2(a,s,o),T=_a(y),[E,x]=ln.useState(!1),[g,S]=ln.useState(),w=g&&!y.ritual[g.channel]&&y.messages.some(W=>W.channel===g.channel&&W.beatId===g.entry.beatId)?g:void 0,[F,tn]=ln.useState(),k=ln.useRef({}),Tn=ln.useRef({}),pn=Pp(!s&&!!(y.ritual.left||y.ritual.right)),cn=Ta.find(W=>{var P;return y.pending[W]&&((P=y.pending[W])==null?void 0:P.kind)!=="choices"})??Ta.find(W=>{var P;return((P=y.pending[W])==null?void 0:P.kind)==="choices"}),fn=(F==null?void 0:F.channel)??cn??"left";function An(W){var zn;const P=y.pending[W];if(!(!P||P.kind!=="choices"))return((zn=a.beatById)==null?void 0:zn.get(P.beatId))??a.beats.find(Nn=>Nn.id===P.beatId)}function Zn(W){var P,zn;return((zn=(P=An(W))==null?void 0:P.choices)==null?void 0:zn.flatMap((Nn,Vn)=>Ff(y,W,Nn)?[]:[Vn]))??[]}function I(W){var zn;if(fn!==W)return-1;const P=Zn(W);return(F==null?void 0:F.beatId)===((zn=An(W))==null?void 0:zn.id)&&P.includes((F==null?void 0:F.index)??-1)?F.index:P[0]??-1}function mn(W,P){var zn;P>=0&&!Zn(W).includes(P)||tn({channel:W,index:P,beatId:(zn=An(W))==null?void 0:zn.id})}function Cn(W,P){const zn=An(W);if(!zn||!Zn(W).includes(P)||E)return;const Nn=`${y.runId}:${W}:${zn.id}`;k.current[W]!==Nn&&(k.current[W]=Nn,tn(void 0),p({type:"choose",channel:W,index:P}))}ln.useEffect(()=>{function W(P){var Vn,q,sn,hn;if(!o||E||P.altKey||P.ctrlKey||P.metaKey||P.shiftKey||P.defaultPrevented||document.querySelector('[role="dialog"]'))return;const zn=P.target instanceof HTMLElement?P.target:null;if(zn!=null&&zn.closest("input,textarea,select,[contenteditable],.archive"))return;const Nn=zn==null?void 0:zn.closest(".choice-line");if(!(zn!=null&&zn.closest("button,a,summary")&&!Nn)){if(P.key==="ArrowLeft"||P.key==="ArrowRight")P.preventDefault(),mn(P.key==="ArrowLeft"?"left":"right",-1),Nn==null||Nn.blur();else if(P.key==="ArrowUp"||P.key==="ArrowDown"){P.preventDefault();const rn=Zn(fn);if(!rn.length)return;const Mn=rn.indexOf(I(fn)),gn=P.key==="ArrowDown"?1:-1;mn(fn,rn[(Mn+gn+rn.length)%rn.length]),Nn==null||Nn.blur()}else if(P.key==="Enter"){if(P.preventDefault(),P.repeat)return;const rn=y.pending[fn];if((rn==null?void 0:rn.kind)==="lines"||(rn==null?void 0:rn.kind)==="reply"){(q=(Vn=Tn.current)[fn])==null||q.call(Vn);return}const Mn=I(fn);if(Mn>=0)Cn(fn,Mn);else if(!rn){const gn=Ta.filter(ie=>{const Xn=y.pending[ie];return(Xn==null?void 0:Xn.kind)==="lines"||(Xn==null?void 0:Xn.kind)==="reply"});gn.length===1&&((hn=(sn=Tn.current)[gn[0]])==null||hn.call(sn))}}}}return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)});function jn(){Zl(),p({type:"reset"}),tn(void 0),S(void 0),x(!1)}return U.jsxs(kf,{intro:h,children:[U.jsxs("header",{className:"topbar ascii-rule",children:[U.jsx("span",{className:"topbar-title","data-testid":"game-title",children:"He said, she said"}),U.jsx("span",{className:"topbar-tag",children:"助手 · 双会话"}),U.jsxs("div",{className:"topbar-actions",children:[U.jsx("button",{type:"button","data-testid":"restart",onClick:()=>x(!0),children:"[重新开始]"}),f?U.jsx("button",{type:"button",onClick:f,children:"[返回标题]"}):null]})]}),v?U.jsx("div",{className:"notice",role:"status",children:v}):null,T?U.jsx("div",{className:"notice",role:"status",children:T==="未交换微信"?"桌游局结束后，两人没有交换微信。":`结局 · ${T}`}):null,U.jsxs("div",{className:"duo",children:[Ta.map(W=>U.jsx(t2,{script:a,channel:W,state:y,dispatch:p,active:!!y.pending[W],focused:fn===W,selected:I(W),skipRefs:Tn,running:o,onMemoryFull:P=>S({channel:W,entry:P}),onMove:P=>mn(W,P),onPick:P=>Cn(W,P),now:pn,reduced:s},W)),U.jsx(a2,{script:a,state:y,now:pn,reduced:s,replacement:w,onCancelReplacement:()=>S(void 0),onReplace:W=>{w&&(p({type:"save-memory",channel:w.channel,...w.entry,replaceLabel:W}),S(void 0))},onForget:(W,P)=>p({type:"forget-memory",channel:W,label:P})})]}),E?U.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":"确定重来",children:U.jsxs("div",{className:"dialog",children:[U.jsx("h2",{children:"确定重来？"}),U.jsx("p",{children:"当前两条线的进度都会清空，回到第一幕开头。"}),U.jsxs("div",{className:"dialog-actions",children:[U.jsx("button",{type:"button",autoFocus:!0,onClick:()=>x(!1),children:"[取消]"}),U.jsx("button",{type:"button","data-testid":"restart-confirm",onClick:jn,children:"[确定重来]"})]})]})}):null]})}const T2=1500,Yf=240,u0=900,Xl=420,b2=1500;function A2(a){const f=Il.left,h=Il.right,o=p=>`      性别 ${p.gender} / ${p.age} 岁 / ${p.work} / ${p.city}`,s=[["[BOOT] 校验会话模块 … OK",24,110],["[SYS] 导入助手系统提示词 … OK",25,130],[`[USER ${f.id}] 载入用户信息 · ${f.name}`,40,150],[o(f),38,300],[`[USER ${h.id}] 载入用户信息 · ${h.name}`,40,150],[o(h),38,300],[a==="new"?"[MEM] 初始化两路独立记忆区 … OK":"[MEM] 恢复两路上下文与记忆 … OK",25,135],["[CTX] 建立会话与摘要目录",26,0]];let y=90;return s.map(([p,v,T])=>{const E=p.length*v,x={text:p,start:y,duration:E};return y+=E+T,x})}function Vi(a,f,h){const o=Math.max(0,Math.min(1,a/f));return Math.floor(o*h)/h*100}function M2({entry:a,script:f,onTitle:h}){const o=$f(),[s,y]=ln.useState(0),p=A2(a),v=p.at(-1),T=v.start+v.duration,E=T+T2,x=E+Yf+u0,g=x+3*Xl,S=g+b2;return ln.useEffect(()=>{if(o){y(S);return}const w=Date.now(),F=window.setInterval(()=>y(Math.min(S,Date.now()-w)),20),tn=[T,E,g,S].map(k=>window.setTimeout(()=>{y(Math.min(S,Date.now()-w)),k===S&&window.clearInterval(F)},k));return()=>{window.clearInterval(F),tn.forEach(k=>window.clearTimeout(k))}},[o,T,E,g,S]),o||s>=E?U.jsx(S2,{script:f,onTitle:h,intro:o||s>=S?void 0:{header:Vi(s-E,Yf,16),dividers:Vi(s-E-Yf,u0,42),left:Vi(s-x,Xl,24),right:Vi(s-x-Xl,Xl,24),archive:Vi(s-x-2*Xl,Xl,24)}}):U.jsx(kf,{children:U.jsx("div",{className:"boot-console","data-testid":"boot-console","data-hold":s>=T||void 0,"aria-label":"正在启动",children:p.filter(w=>s>=w.start).map(w=>{const F=Math.min(w.text.length,Math.floor((s-w.start)*w.text.length/w.duration));return U.jsxs("div",{className:w.text.startsWith("[USER")?"boot-user":void 0,children:[w.text.slice(0,F),F<w.text.length?U.jsx("span",{className:"caret","aria-hidden":"true"}):null]},w.text)})})})}function O2({hasSave:a,onBegin:f}){const[h,o]=ln.useState(0),[s,y]=ln.useState(!1),p=[{label:"开始游戏",action:()=>a?y(!0):f("new")},...a?[{label:"继续游戏",action:()=>f("resume")}]:[]];return ln.useEffect(()=>{const v=T=>{var g;if(s||T.altKey||T.ctrlKey||T.metaKey||T.defaultPrevented)return;const E=a?2:1,x=T.target instanceof HTMLElement?T.target:null;T.key==="ArrowUp"||T.key==="ArrowDown"?(T.preventDefault(),(g=x==null?void 0:x.closest(".menu-choice"))==null||g.blur(),o(S=>(S+(T.key==="ArrowDown"?1:-1)+E)%E)):T.key==="Enter"&&!T.repeat&&!(x!=null&&x.closest("button"))&&(T.preventDefault(),a&&h===1?f("resume"):a?y(!0):f("new"))};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[h,s,a,f]),U.jsxs(kf,{children:[U.jsxs("header",{className:"topbar ascii-rule title-bar",children:[U.jsx("span",{children:"[SYS] 双会话助手"}),U.jsx("span",{children:a?"[CTX] 已有存档":"[LINK] 等待接入"})]}),U.jsxs("div",{className:"title-grid",children:[U.jsxs("div",{className:"terminal-menu",children:[U.jsx("div",{className:"menu-system",children:"/ 会话入口"}),U.jsxs("h1",{children:["He said,",U.jsx("br",{}),"she said",U.jsx("span",{"aria-hidden":"true",children:"_"})]}),U.jsx("div",{className:"menu-commands","aria-label":"主菜单",children:p.map((v,T)=>U.jsxs("button",{type:"button",className:"menu-choice choice-line","data-current":h===T||void 0,onMouseEnter:()=>o(T),onFocus:()=>o(T),onClick:v.action,children:[U.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:h===T?">":""}),v.label]},v.label))})]}),U.jsxs("aside",{className:"title-sessions","aria-label":"会话入口信息",children:[U.jsx("div",{className:"ascii-rule title-session-head",children:"[LINK] 用户通道"}),Object.values(Il).map(v=>U.jsxs("div",{className:"title-user",children:[U.jsxs("span",{className:"title-id",children:["[USER ",v.id,"]"]}),U.jsx("b",{children:v.name}),U.jsx("span",{children:"待接入"})]},v.id)),U.jsxs("div",{className:"title-memory ascii-rule",children:[U.jsx("div",{children:"[MEM] 分窗记忆"}),U.jsx("p",{children:"上下文独立 · 摘要按窗收录"})]})]})]}),U.jsxs("footer",{className:"title-keys ascii-rule",children:[U.jsx("span",{children:"↑ ↓ 选择"}),U.jsx("span",{children:"Enter 确认"})]}),s?U.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":"开始新游戏",children:U.jsxs("div",{className:"dialog",children:[U.jsx("h2",{children:"开始新游戏？"}),U.jsx("p",{children:"当前两条线的进度都会清空。"}),U.jsxs("div",{className:"dialog-actions",children:[U.jsx("button",{type:"button",autoFocus:!0,onClick:()=>y(!1),children:"[取消]"}),U.jsx("button",{type:"button",onClick:()=>f("new"),children:"[开始新游戏]"})]})]})}):null]})}function N2(){const a=ln.useMemo(()=>Tp(),[]),[f,h]=ln.useState("title"),[o,s]=ln.useState("new"),y=ln.useCallback(()=>h("title"),[]),p=ln.useCallback(v=>{v==="new"&&Zl(),s(v),h("boot")},[]);return ln.useEffect(()=>{a.error&&console.error(a.error)},[a]),a.script?f==="title"?U.jsx(O2,{hasSave:s2(),onBegin:p}):U.jsx(M2,{entry:o,script:a.script,onTitle:y}):U.jsx("main",{className:"stage",children:U.jsxs("div",{className:"dialog",style:{width:560},children:[U.jsx("h2",{children:"这份剧本还过不了检查"}),U.jsx("p",{children:"引擎按字段契约逐项校验，下面是要修的地方："}),U.jsx("pre",{className:"script-error",style:{maxHeight:420,whiteSpace:"pre-wrap",borderRadius:12},"data-testid":"script-error",children:a.error})]})})}Xv.createRoot(document.getElementById("root")).render(U.jsx(ln.StrictMode,{children:U.jsx(N2,{})}));
