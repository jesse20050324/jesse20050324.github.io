(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=c(d);fetch(d.href,f)}})();var fh={exports:{}},Zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function Jv(){if(Ay)return Zi;Ay=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,f){var p=null;if(f!==void 0&&(p=""+f),d.key!==void 0&&(p=""+d.key),"key"in d){f={};for(var v in d)v!=="key"&&(f[v]=d[v])}else f=d;return d=f.ref,{$$typeof:l,type:u,key:p,ref:d!==void 0?d:null,props:f}}return Zi.Fragment=s,Zi.jsx=c,Zi.jsxs=c,Zi}var Iy;function Wv(){return Iy||(Iy=1,fh.exports=Jv()),fh.exports}var _=Wv(),mh={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My;function $v(){if(My)return Ne;My=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),C=Symbol.iterator;function Z(A){return A===null||typeof A!="object"?null:(A=C&&A[C]||A["@@iterator"],typeof A=="function"?A:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,Se={};function we(A,X,re){this.props=A,this.context=X,this.refs=Se,this.updater=re||ee}we.prototype.isReactComponent={},we.prototype.setState=function(A,X){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,X,"setState")},we.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function he(){}he.prototype=we.prototype;function se(A,X,re){this.props=A,this.context=X,this.refs=Se,this.updater=re||ee}var be=se.prototype=new he;be.constructor=se,ne(be,we.prototype),be.isPureReactComponent=!0;var Me=Array.isArray;function xe(){}var $={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function _e(A,X,re){var W=re.ref;return{$$typeof:l,type:A,key:X,ref:W!==void 0?W:null,props:re}}function ye(A,X){return _e(A.type,X,A.props)}function Ce(A){return typeof A=="object"&&A!==null&&A.$$typeof===l}function Fe(A){var X={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(re){return X[re]})}var Ge=/\/+/g;function je(A,X){return typeof A=="object"&&A!==null&&A.key!=null?Fe(""+A.key):X.toString(36)}function j(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(xe,xe):(A.status="pending",A.then(function(X){A.status==="pending"&&(A.status="fulfilled",A.value=X)},function(X){A.status==="pending"&&(A.status="rejected",A.reason=X)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function me(A,X,re,W,pe){var Te=typeof A;(Te==="undefined"||Te==="boolean")&&(A=null);var ce=!1;if(A===null)ce=!0;else switch(Te){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(A.$$typeof){case l:case s:ce=!0;break;case w:return ce=A._init,me(ce(A._payload),X,re,W,pe)}}if(ce)return pe=pe(A),ce=W===""?"."+je(A,0):W,Me(pe)?(re="",ce!=null&&(re=ce.replace(Ge,"$&/")+"/"),me(pe,X,re,"",function(Et){return Et})):pe!=null&&(Ce(pe)&&(pe=ye(pe,re+(pe.key==null||A&&A.key===pe.key?"":(""+pe.key).replace(Ge,"$&/")+"/")+ce)),X.push(pe)),1;ce=0;var le=W===""?".":W+":";if(Me(A))for(var ge=0;ge<A.length;ge++)W=A[ge],Te=le+je(W,ge),ce+=me(W,X,re,Te,pe);else if(ge=Z(A),typeof ge=="function")for(A=ge.call(A),ge=0;!(W=A.next()).done;)W=W.value,Te=le+je(W,ge++),ce+=me(W,X,re,Te,pe);else if(Te==="object"){if(typeof A.then=="function")return me(j(A),X,re,W,pe);throw X=String(A),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ce}function V(A,X,re){if(A==null)return A;var W=[],pe=0;return me(A,W,"","",function(Te){return X.call(re,Te,pe++)}),W}function te(A){if(A._status===-1){var X=A._result,re=X();re.then(function(W){(A._status===0||A._status===-1)&&(A._status=1,A._result=W,re.status===void 0&&(re.status="fulfilled",re.value=W))},function(W){(A._status===0||A._status===-1)&&(A._status=2,A._result=W,re.status===void 0&&(re.status="rejected",re.reason=W))}),A._status===-1&&(A._status=0,A._result=re)}if(A._status===1)return A._result.default;throw A._result}var P=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Re(A){var X=$.T,re={};re.types=X!==null?X.types:null,$.T=re;try{var W=A(),pe=$.S;pe!==null&&pe(re,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(xe,P)}catch(Te){P(Te)}finally{X!==null&&re.types!==null&&(X.types=re.types),$.T=X}}function Qe(A){var X=$.T;if(X!==null){var re=X.types;re===null?X.types=[A]:re.indexOf(A)===-1&&re.push(A)}else Re(Qe.bind(null,A))}var at={map:V,forEach:function(A,X,re){V(A,function(){X.apply(this,arguments)},re)},count:function(A){var X=0;return V(A,function(){X++}),X},toArray:function(A){return V(A,function(X){return X})||[]},only:function(A){if(!Ce(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return Ne.Activity=g,Ne.Children=at,Ne.Component=we,Ne.Fragment=c,Ne.Profiler=d,Ne.PureComponent=se,Ne.StrictMode=u,Ne.Suspense=k,Ne.ViewTransition=S,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(A){return $.H.useMemoCache(A)}},Ne.addTransitionType=Qe,Ne.cache=function(A){return function(){return A.apply(null,arguments)}},Ne.cacheSignal=function(){return null},Ne.cloneElement=function(A,X,re){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var W=ne({},A.props),pe=A.key;if(X!=null)for(Te in X.key!==void 0&&(pe=""+X.key),X)!Oe.call(X,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&X.ref===void 0||(W[Te]=X[Te]);var Te=arguments.length-2;if(Te===1)W.children=re;else if(1<Te){for(var ce=Array(Te),le=0;le<Te;le++)ce[le]=arguments[le+2];W.children=ce}return _e(A.type,pe,W)},Ne.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},Ne.createElement=function(A,X,re){var W,pe={},Te=null;if(X!=null)for(W in X.key!==void 0&&(Te=""+X.key),X)Oe.call(X,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(pe[W]=X[W]);var ce=arguments.length-2;if(ce===1)pe.children=re;else if(1<ce){for(var le=Array(ce),ge=0;ge<ce;ge++)le[ge]=arguments[ge+2];pe.children=le}if(A&&A.defaultProps)for(W in ce=A.defaultProps,ce)pe[W]===void 0&&(pe[W]=ce[W]);return _e(A,Te,pe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(A){return{$$typeof:v,render:A}},Ne.isValidElement=Ce,Ne.lazy=function(A){return{$$typeof:w,_payload:{_status:-1,_result:A},_init:te}},Ne.memo=function(A,X){return{$$typeof:b,type:A,compare:X===void 0?null:X}},Ne.startTransition=Re,Ne.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},Ne.use=function(A){return $.H.use(A)},Ne.useActionState=function(A,X,re){return $.H.useActionState(A,X,re)},Ne.useCallback=function(A,X){return $.H.useCallback(A,X)},Ne.useContext=function(A){return $.H.useContext(A)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(A,X){return $.H.useDeferredValue(A,X)},Ne.useEffect=function(A,X){return $.H.useEffect(A,X)},Ne.useEffectEvent=function(A){return $.H.useEffectEvent(A)},Ne.useId=function(){return $.H.useId()},Ne.useImperativeHandle=function(A,X,re){return $.H.useImperativeHandle(A,X,re)},Ne.useInsertionEffect=function(A,X){return $.H.useInsertionEffect(A,X)},Ne.useLayoutEffect=function(A,X){return $.H.useLayoutEffect(A,X)},Ne.useMemo=function(A,X){return $.H.useMemo(A,X)},Ne.useOptimistic=function(A,X){return $.H.useOptimistic(A,X)},Ne.useReducer=function(A,X,re){return $.H.useReducer(A,X,re)},Ne.useRef=function(A){return $.H.useRef(A)},Ne.useState=function(A){return $.H.useState(A)},Ne.useSyncExternalStore=function(A,X,re){return $.H.useSyncExternalStore(A,X,re)},Ne.useTransition=function(){return $.H.useTransition()},Ne.version="19.3.0",Ne}var Oy;function Vh(){return Oy||(Oy=1,mh.exports=$v()),mh.exports}var ae=Vh(),yh={exports:{}},Ki={},gh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function Pv(){return Ny||(Ny=1,(function(l){function s(j,me){var V=j.length;j.push(me);e:for(;0<V;){var te=V-1>>>1,P=j[te];if(0<d(P,me))j[te]=me,j[V]=P,V=te;else break e}}function c(j){return j.length===0?null:j[0]}function u(j){if(j.length===0)return null;var me=j[0],V=j.pop();if(V!==me){j[0]=V;e:for(var te=0,P=j.length,Re=P>>>1;te<Re;){var Qe=2*(te+1)-1,at=j[Qe],A=Qe+1,X=j[A];if(0>d(at,V))A<P&&0>d(X,at)?(j[te]=X,j[A]=V,te=A):(j[te]=at,j[Qe]=V,te=Qe);else if(A<P&&0>d(X,V))j[te]=X,j[A]=V,te=A;else break e}}return me}function d(j,me){var V=j.sortIndex-me.sortIndex;return V!==0?V:j.id-me.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var p=Date,v=p.now();l.unstable_now=function(){return p.now()-v}}var k=[],b=[],w=1,g=null,S=3,C=!1,Z=!1,ee=!1,ne=!1,Se=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;function se(j){for(var me=c(b);me!==null;){if(me.callback===null)u(b);else if(me.startTime<=j)u(b),me.sortIndex=me.expirationTime,s(k,me);else break;me=c(b)}}function be(j){if(ee=!1,se(j),!Z)if(c(k)!==null)Z=!0,Me||(Me=!0,Ce());else{var me=c(b);me!==null&&je(be,me.startTime-j)}}var Me=!1,xe=-1,$=5,Oe=-1;function _e(){return ne?!0:!(l.unstable_now()-Oe<$)}function ye(){if(ne=!1,Me){var j=l.unstable_now();Oe=j;var me=!0;try{e:{Z=!1,ee&&(ee=!1,we(xe),xe=-1),C=!0;var V=S;try{t:{for(se(j),g=c(k);g!==null&&!(g.expirationTime>j&&_e());){var te=g.callback;if(typeof te=="function"){g.callback=null,S=g.priorityLevel;var P=te(g.expirationTime<=j);if(j=l.unstable_now(),typeof P=="function"){g.callback=P,se(j),me=!0;break t}g===c(k)&&u(k),se(j)}else u(k);g=c(k)}if(g!==null)me=!0;else{var Re=c(b);Re!==null&&je(be,Re.startTime-j),me=!1}}break e}finally{g=null,S=V,C=!1}me=void 0}}finally{me?Ce():Me=!1}}}var Ce;if(typeof he=="function")Ce=function(){he(ye)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Ge=Fe.port2;Fe.port1.onmessage=ye,Ce=function(){Ge.postMessage(null)}}else Ce=function(){Se(ye,0)};function je(j,me){xe=Se(function(){j(l.unstable_now())},me)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(j){j.callback=null},l.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<j?Math.floor(1e3/j):5},l.unstable_getCurrentPriorityLevel=function(){return S},l.unstable_next=function(j){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var V=S;S=me;try{return j()}finally{S=V}},l.unstable_requestPaint=function(){ne=!0},l.unstable_runWithPriority=function(j,me){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var V=S;S=j;try{return me()}finally{S=V}},l.unstable_scheduleCallback=function(j,me,V){var te=l.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?te+V:te):V=te,j){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=V+P,j={id:w++,callback:me,priorityLevel:j,startTime:V,expirationTime:P,sortIndex:-1},V>te?(j.sortIndex=V,s(b,j),c(k)===null&&j===c(b)&&(ee?(we(xe),xe=-1):ee=!0,je(be,V-te))):(j.sortIndex=P,s(k,j),Z||C||(Z=!0,Me||(Me=!0,Ce()))),j},l.unstable_shouldYield=_e,l.unstable_wrapCallback=function(j){var me=S;return function(){var V=S;S=me;try{return j.apply(this,arguments)}finally{S=V}}}})(ph)),ph}var Cy;function e0(){return Cy||(Cy=1,gh.exports=Pv()),gh.exports}var wh={exports:{}},Dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function t0(){if(Ry)return Dt;Ry=1;var l=Vh();function s(w){var g="https://react.dev/errors/"+w;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+w+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),p=Symbol.for("react.optimistic_key");function v(w,g,S){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:C==null?null:C===p?p:""+C,children:w,containerInfo:g,implementation:S}}var k=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(w,g){if(w==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Dt.browser=function(w){return{$$typeof:f,_reason:w}},Dt.createPortal=function(w,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return v(w,g,null,S)},Dt.flushSync=function(w){var g=k.T,S=u.p;try{if(k.T=null,u.p=2,w)return w()}finally{k.T=g,u.p=S,u.d.f()}},Dt.preconnect=function(w,g){typeof w=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(w,g))},Dt.prefetchDNS=function(w){typeof w=="string"&&u.d.D(w)},Dt.preinit=function(w,g){if(typeof w=="string"&&g&&typeof g.as=="string"){var S=g.as,C=b(S,g.crossOrigin),Z=typeof g.integrity=="string"?g.integrity:void 0,ee=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?u.d.S(w,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:Z,fetchPriority:ee}):S==="script"&&u.d.X(w,{crossOrigin:C,integrity:Z,fetchPriority:ee,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Dt.preinitModule=function(w,g){if(typeof w=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=b(g.as,g.crossOrigin);u.d.M(w,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&u.d.M(w)},Dt.preload=function(w,g){if(typeof w=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,C=b(S,g.crossOrigin);u.d.L(w,S,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Dt.preloadModule=function(w,g){if(typeof w=="string")if(g){var S=b(g.as,g.crossOrigin);u.d.m(w,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else u.d.m(w)},Dt.requestFormReset=function(w){u.d.r(w)},Dt.unstable_batchedUpdates=function(w,g){return w(g)},Dt.useFormState=function(w,g,S){return k.H.useFormState(w,g,S)},Dt.useFormStatus=function(){return k.H.useHostTransitionStatus()},Dt.version="19.3.0",Dt}var Hy;function n0(){if(Hy)return wh.exports;Hy=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),wh.exports=t0(),wh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function r0(){if(Dy)return Ki;Dy=1;var l=e0(),s=Vh(),c=n0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(f(e)!==e)throw Error(u(188))}function b(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return k(a),e;if(i===r)return k(a),t;i=i.sibling}throw Error(u(188))}if(n.return!==r.return)n=a,r=i;else{for(var h=!1,y=a.child;y;){if(y===n){h=!0,n=a,r=i;break}if(y===r){h=!0,r=a,n=i;break}y=y.sibling}if(!h){for(y=i.child;y;){if(y===n){h=!0,n=i,r=a;break}if(y===r){h=!0,r=i,n=a;break}y=y.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}function g(e,t,n,r,a,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,a,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&g(e.child,t,n,r,a,i))return!0;e=e.sibling}return!1}function S(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function C(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Z(e){var t=[null,null],n=S(e);return n===null||ee(t,e,n.child,{foundSelf:!1}),t}function ee(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ee(e,t,n.child,r))return!0;n=n.sibling}return!1}function ne(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(u(559))}}var Se=null,we=null;function he(e,t,n){return e===n?!0:e===t?(Se=e,!0):!1}function se(e,t,n){return e===n?(we=e,!1):e===t?(we!==null&&(Se=e),!0):!1}function be(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Me(e,t,n){for(var r=0,a=e;a;a=n(a))r++;a=0;for(var i=t;i;i=n(i))a++;for(;0<r-a;)e=n(e),r--;for(;0<a-r;)t=n(t),a--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var xe=Object.assign,$=Symbol.for("react.element"),Oe=Symbol.for("react.transitional.element"),_e=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),Ce=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Ge=Symbol.for("react.consumer"),je=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),Qe=Symbol.for("react.legacy_hidden"),at=Symbol.for("react.memo_cache_sentinel"),A=Symbol.for("react.view_transition"),X=Symbol.for("react.recoverable"),re=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case Fe:return"Profiler";case Ce:return"StrictMode";case me:return"Suspense";case V:return"SuspenseList";case Re:return"Activity";case A:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case _e:return"Portal";case je:return e.displayName||"Context";case Ge:return(e._context.displayName||"Context")+".Consumer";case j:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:Te(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}var ce=Array.isArray,le=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Et={pending:!1,data:null,method:null,action:null},Pt=[],Xt=-1;function pt(e){return{current:e}}function Je(e){0>Xt||(e.current=Pt[Xt],Pt[Xt]=null,Xt--)}function qe(e,t){Xt++,Pt[Xt]=e.current,e.current=t}var wt=pt(null),At=pt(null),vt=pt(null),Mn=pt(null);function Ft(e,t){switch(qe(vt,t),qe(At,e),qe(wt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_m(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_m(t),e=Ym(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Je(wt),qe(wt,e)}function dt(){Je(wt),Je(At),Je(vt)}function zt(e){var t=e.memoizedState;t!==null&&(Xa._currentValue=t.memoizedState,qe(Mn,e)),t=wt.current;var n=Ym(t,e.type);t!==n&&(qe(At,e),qe(wt,n))}function Qt(e){At.current===e&&(Je(wt),Je(At)),Mn.current===e&&(Je(Mn),Xa._currentValue=Et)}var Ln,It;function o(e){if(Ln===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ln=t&&t[1]||"",It=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ln+e+It}var M=!1;function G(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(ie){var I=ie}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(ie){I=ie}Q=!1;try{var D=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Q=!0,new e}finally{Q&&(D!==void 0?Object.defineProperty(e.prototype,"props",D):delete e.prototype.props)}}}else{try{throw Error()}catch(ie){I=ie}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(ie){if(ie&&I&&typeof ie.stack=="string")return[ie.stack,I.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),h=i[0],y=i[1];if(h&&y){var x=h.split(`
`),N=y.split(`
`);for(a=r=0;r<x.length&&!x[r].includes("DetermineComponentFrameRoot");)r++;for(;a<N.length&&!N[a].includes("DetermineComponentFrameRoot");)a++;if(r===x.length||a===N.length)for(r=x.length-1,a=N.length-1;1<=r&&0<=a&&x[r]!==N[a];)a--;for(;1<=r&&0<=a;r--,a--)if(x[r]!==N[a]){if(r!==1||a!==1)do if(r--,a--,0>a||x[r]!==N[a]){var Y=`
`+x[r].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=r&&0<=a);break}}}finally{M=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?o(n):""}function K(e,t){switch(e.tag){case 26:case 27:case 5:return o(e.type);case 16:return o("Lazy");case 13:return e.child!==t&&t!==null?o("Suspense Fallback"):o("Suspense");case 19:return o("SuspenseList");case 0:case 15:return G(e.type,!1);case 11:return G(e.type.render,!1);case 1:return G(e.type,!0);case 31:return o("Activity");case 30:return o("ViewTransition");default:return""}}function q(e){try{var t="",n=null;do t+=K(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var m=Object.prototype.hasOwnProperty,H=l.unstable_scheduleCallback,T=l.unstable_cancelCallback,B=l.unstable_shouldYield,L=l.unstable_requestPaint,U=l.unstable_now,z=l.unstable_getCurrentPriorityLevel,J=l.unstable_ImmediatePriority,oe=l.unstable_UserBlockingPriority,de=l.unstable_NormalPriority,ke=l.unstable_LowPriority,Ae=l.unstable_IdlePriority,Ee=l.log,_t=l.unstable_setDisableYieldValue,en=null,st=null;function On(e){if(typeof Ee=="function"&&_t(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(en,e)}catch{}}var tn=Math.clz32?Math.clz32:up,lp=Math.log,sp=Math.LN2;function up(e){return e>>>=0,e===0?32:31-(lp(e)/sp|0)|0}var no=256,ro=262144,ao=4194304;function Hr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function io(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~i,r!==0?a=Hr(r):(h&=y,h!==0?a=Hr(h):n||(n=y&~e,n!==0&&(a=Hr(n))))):(y=r&~i,y!==0?a=Hr(y):h!==0?a=Hr(h):n||(n=r&~e,n!==0&&(a=Hr(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function ti(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function oc(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-tn(n),a=1<<r;t|=e[r],n&=~a}return t}function hp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(){var e=ao;return ao<<=1,(ao&62914560)===0&&(ao=4194304),e}function ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ni(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cp(e,t,n,r,a,i){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,x=e.expirationTimes,N=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-tn(n),Q=1<<Y;y[Y]=0,x[Y]=-1;var I=N[Y];if(I!==null)for(N[Y]=null,Y=0;Y<I.length;Y++){var D=I[Y];D!==null&&(D.lane&=-536870913)}n&=~Q}r!==0&&sc(e,r,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(h&~t))}function sc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-tn(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function uc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tn(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function hc(e,t){var n=t&-t;return n=(n&42)!==0?1:Ul(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ul(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ll(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cc(){var e=ge.p;return e!==0?e:(e=window.event,e===void 0?32:vy(e.type))}function dc(e,t){var n=ge.p;try{return ge.p=e,t()}finally{ge.p=n}}var Gn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Gn,Zt="__reactProps$"+Gn,aa="__reactContainer$"+Gn,fc="__reactEvents$"+Gn,dp="__reactListeners$"+Gn,fp="__reactHandles$"+Gn,mc="__reactResources$"+Gn,ri="__reactMarker$"+Gn,oo="__reactLoad$"+Gn;function lo(e){delete e[Mt],delete e[Zt],delete e[dp],delete e[fp]}function Dr(e){var t;if(t=e[Mt])return t;for(var n=e.parentNode;n;){if(t=n[aa]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pm(e);e!==null;){if(n=e[Mt])return n;e=Pm(e)}return t}e=n,n=e.parentNode}return null}function ia(e){if(e=e[Mt]||e[aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ai(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function oa(e){var t=e[mc];return t||(t=e[mc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function kt(e){e[ri]=!0}function yc(e){e[oo]=void 0}var gc=new Set,pc={};function _r(e,t){la(e,t),la(e+"Capture",t)}function la(e,t){for(pc[e]=t,e=0;e<t.length;e++)gc.add(t[e])}var mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wc={},vc={};function yp(e){return m.call(vc,e)?!0:m.call(wc,e)?!1:mp.test(e)?vc[e]=!0:(wc[e]=!0,!1)}var Ze=!1;function bc(){var e=Ze;return Ze=!1,e}function so(e,t,n){if(yp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function uo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Xn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function nn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gp(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(h){n=""+h,i.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gl(e){if(!e._valueTracker){var t=kc(e)?"checked":"value";e._valueTracker=gp(e,t,""+e[t])}}function Sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}var pp=/[\n"\\]/g;function cn(e){return e.replace(pp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xl(e,t,n,r,a,i,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+nn(t)):e.value!==""+nn(t)&&(e.value=""+nn(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?h==="number"&&e.value==t?Fl(e,nn(e.value)):Fl(e,nn(t)):n!=null?Fl(e,nn(n)):r!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+nn(y):e.removeAttribute("name")}function xc(e,t,n,r,a,i,h,y){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Gl(e);return}n=n!=null?""+nn(n):"",t=t!=null?""+nn(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Gl(e)}function Fl(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function sa(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Tc(e,t,n){if(t!=null&&(t=""+nn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+nn(n):""}function Ec(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(u(92));if(ce(r)){if(1<r.length)throw Error(u(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=nn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Gl(e)}function ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ac(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||wp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ic(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",Ze=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(Ac(e,a,r),Ze=!0)}else for(var i in t)t.hasOwnProperty(i)&&Ac(e,i,t[i])}function Ql(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ho(e){return bp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nn(){}var Zl=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,ca=null;function Mc(e){var t=ia(e);if(t&&(e=t.stateNode)){var n=e[Zt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+cn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Zt]||null;if(!a)throw Error(u(90));Xl(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Sc(r)}break e;case"textarea":Tc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&sa(e,!!n.multiple,t,!1)}}}var Vl=!1;function Oc(e,t,n){if(Vl)return e(t,n);Vl=!0;try{var r=e(t);return r}finally{if(Vl=!1,(ha!==null||ca!==null)&&(cl(),ha&&(t=ha,e=ca,ca=ha=null,Mc(t),e)))for(t=0;t<e.length;t++)Mc(e[t])}}function ii(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Zt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=!1;if(Fn)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{Jl=!1}var or=null,Wl=null,co=null;function Nc(){if(co)return co;var e,t=Wl,n=t.length,r,a="value"in or?or.value:or.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var h=n-e;for(r=1;r<=h&&t[n-r]===a[i-r];r++);return co=a.slice(e,1<r?1-r:void 0)}function fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function Cc(){return!1}function Bt(e){function t(n,r,a,i,h){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(i):i[y]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mo:Cc,this.isPropagationStopped=Cc,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=Bt(lr),li=xe({},lr,{view:0,detail:0}),kp=Bt(li),$l,Pl,si,go=xe({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?($l=e.screenX-si.screenX,Pl=e.screenY-si.screenY):Pl=$l=0,si=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Rc=Bt(go),Sp=xe({},go,{dataTransfer:0}),xp=Bt(Sp),Tp=xe({},li,{relatedTarget:0}),es=Bt(Tp),Ep=xe({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ap=Bt(Ep),Ip=xe({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mp=Bt(Ip),Op=xe({},lr,{data:0}),Hc=Bt(Op),Np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rp[e])?!!t[e]:!1}function ts(){return Hp}var Dp=xe({},li,{key:function(e){if(e.key){var t=Np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ts,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_p=Bt(Dp),Yp=xe({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=Bt(Yp),jp=xe({},lr,{submitter:0}),zp=Bt(jp),Bp=xe({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ts}),qp=Bt(Bp),Up=xe({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lp=Bt(Up),Gp=xe({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xp=Bt(Gp),Fp=xe({},lr,{newState:0,oldState:0,source:0}),Qp=Bt(Fp),Zp=[9,13,27,32],ns=Fn&&"CompositionEvent"in window,ui=null;Fn&&"documentMode"in document&&(ui=document.documentMode);var Kp=Fn&&"TextEvent"in window&&!ui,_c=Fn&&(!ns||ui&&8<ui&&11>=ui),Yc=" ",jc=!1;function zc(e,t){switch(e){case"keyup":return Zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var da=!1;function Vp(e,t){switch(e){case"compositionend":return Bc(t);case"keypress":return t.which!==32?null:(jc=!0,Yc);case"textInput":return e=t.data,e===Yc&&jc?null:e;default:return null}}function Jp(e,t){if(da)return e==="compositionend"||!ns&&zc(e,t)?(e=Nc(),co=Wl=or=null,da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wp[e.type]:t==="textarea"}function Uc(e,t,n,r){ha?ca?ca.push(r):ca=[r]:ha=r,t=pl(t,"onChange"),0<t.length&&(n=new yo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hi=null,ci=null;function $p(e){Om(e,0)}function po(e){var t=ai(e);if(Sc(t))return e}function Lc(e,t){if(e==="change")return t}var Gc=!1;if(Fn){var rs;if(Fn){var as="oninput"in document;if(!as){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),as=typeof Xc.oninput=="function"}rs=as}else rs=!1;Gc=rs&&(!document.documentMode||9<document.documentMode)}function Fc(){hi&&(hi.detachEvent("onpropertychange",Qc),ci=hi=null)}function Qc(e){if(e.propertyName==="value"&&po(ci)){var t=[];Uc(t,ci,e,Kl(e)),Oc($p,t)}}function Pp(e,t,n){e==="focusin"?(Fc(),hi=t,ci=n,hi.attachEvent("onpropertychange",Qc)):e==="focusout"&&Fc()}function ew(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(ci)}function tw(e,t){if(e==="click")return po(t)}function nw(e,t){if(e==="input"||e==="change")return po(t)}function rw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:rw;function di(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!m.call(t,a)||!rn(e[a],t[a]))return!1}return!0}function is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kc(e,t){var n=Zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zc(n)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=is(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=is(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var aw=Fn&&"documentMode"in document&&11>=document.documentMode,fa=null,ls=null,fi=null,ss=!1;function Wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ss||fa==null||fa!==is(r)||(r=fa,"selectionStart"in r&&os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&di(fi,r)||(fi=r,r=pl(ls,"onSelect"),0<r.length&&(t=new yo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fa)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ma={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionrun:Yr("Transition","TransitionRun"),transitionstart:Yr("Transition","TransitionStart"),transitioncancel:Yr("Transition","TransitionCancel"),transitionend:Yr("Transition","TransitionEnd")},us={},$c={};Fn&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function jr(e){if(us[e])return us[e];if(!ma[e])return e;var t=ma[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $c)return us[e]=t[n];return e}var Pc=jr("animationend"),ed=jr("animationiteration"),td=jr("animationstart"),iw=jr("transitionrun"),ow=jr("transitionstart"),lw=jr("transitioncancel"),nd=jr("transitionend"),rd=new Map,hs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hs.push("scrollEnd");function kn(e,t){rd.set(e,t),_r(t,[e])}var sw=0;function Qn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=En.identifierPrefix;var n=sw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function ad(e){if(e==null||typeof e=="string")return e;var t=null,n=Da;if(n!==null)for(var r=0;r<n.length;r++){var a=e[n[r]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Zn(e,t){return e=ad(e),t=ad(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var wo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},dn=[],ya=0,cs=0;function vo(){for(var e=ya,t=cs=ya=0;t<e;){var n=dn[t];dn[t++]=null;var r=dn[t];dn[t++]=null;var a=dn[t];dn[t++]=null;var i=dn[t];if(dn[t++]=null,r!==null&&a!==null){var h=r.pending;h===null?a.next=a:(a.next=h.next,h.next=a),r.pending=a}i!==0&&id(n,a,i)}}function bo(e,t,n,r){dn[ya++]=e,dn[ya++]=t,dn[ya++]=n,dn[ya++]=r,cs|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ds(e,t,n,r){return bo(e,t,n,r),ko(e)}function zr(e,t){return bo(e,null,null,t),ko(e)}function id(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,r=i.alternate,r!==null&&(r.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-tn(n),e=i.hiddenUpdates,r=e[a],r===null?e[a]=[t]:r.push(t),t.lane=n|536870912),i):null}function ko(e){if(50<_i)throw _i=0,hl=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ga={};function uw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(e,t,n,r){return new uw(e,t,n,r)}function fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kn(e,t){var n=e.alternate;return n===null?(n=Kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function od(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function So(e,t,n,r,a,i){var h=0;if(r=e,typeof r=="function")fs(r)&&(h=1);else if(typeof r=="string")h=jv(e,n,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case Re:return e=Kt(31,n,t,a),e.elementType=Re,e.lanes=i,e;case ye:return Br(n.children,a,i,t);case Ce:h=8,a|=24;break;case Fe:return e=Kt(12,n,t,a|2),e.elementType=Fe,e.lanes=i,e;case me:return e=Kt(13,n,t,a),e.elementType=me,e.lanes=i,e;case V:return e=Kt(19,n,t,a),e.elementType=V,e.lanes=i,e;case Qe:case A:return e=a|32,e=Kt(30,n,t,e),e.elementType=A,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case je:h=10;break e;case Ge:h=9;break e;case j:h=11;break e;case te:h=14;break e;case P:h=16,r=null;break e}h=29,n=Error(u(130,e===null?"null":typeof e,"")),r=null}return t=Kt(h,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Br(e,t,n,r){return e=Kt(7,e,r,t),e.lanes=n,e}function ms(e,t,n){return e=Kt(6,e,null,t),e.lanes=n,e}function ld(e){var t=Kt(18,null,null,0);return t.stateNode=e,t}function ys(e,t,n){return t=Kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sd=new WeakMap;function fn(e,t){if(typeof e=="object"&&e!==null){var n=sd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:q(t)},sd.set(e,t),t)}return{value:e,source:t,stack:q(t)}}var pa=[],wa=0,xo=null,mi=0,mn=[],yn=0,sr=null,Cn=1,Rn="";function Vn(e,t){pa[wa++]=mi,pa[wa++]=xo,xo=e,mi=t}function ud(e,t,n){mn[yn++]=Cn,mn[yn++]=Rn,mn[yn++]=sr,sr=e;var r=Cn;e=Rn;var a=32-tn(r)-1;r&=~(1<<a),n+=1;var i=32-tn(t)+a;if(30<i){var h=a-a%5;i=(r&(1<<h)-1).toString(32),r>>=h,a-=h,Cn=1<<32-tn(t)+a|n<<a|r,Rn=i+e}else Cn=1<<i|n<<a|r,Rn=e}function To(e){e.return!==null&&(Vn(e,1),ud(e,1,0))}function gs(e){for(;e===xo;)xo=pa[--wa],pa[wa]=null,mi=pa[--wa],pa[wa]=null;for(;e===sr;)sr=mn[--yn],mn[yn]=null,Rn=mn[--yn],mn[yn]=null,Cn=mn[--yn],mn[yn]=null}function hd(e,t){mn[yn++]=Cn,mn[yn++]=Rn,mn[yn++]=sr,Cn=t.id,Rn=t.overflow,sr=e}var St=null,nt=null,Ye=!1,ur=null,gn=!1,ps=Error(u(519));function hr(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yi(fn(t,e)),ps}function cd(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Mt]=e,t[Zt]=r,n){case"dialog":Be("cancel",t),Be("close",t);break;case"iframe":case"object":case"embed":Be("load",t);break;case"video":case"audio":for(n=0;n<ji.length;n++)Be(ji[n],t);break;case"source":Be("error",t);break;case"img":case"image":case"link":Be("error",t),Be("load",t);break;case"details":Be("toggle",t);break;case"input":Be("invalid",t),xc(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Be("invalid",t);break;case"textarea":Be("invalid",t),Ec(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||Hm(t.textContent,n)?(r.popover!=null&&(Be("beforetoggle",t),Be("toggle",t)),r.onScroll!=null&&Be("scroll",t),r.onScrollEnd!=null&&Be("scrollend",t),r.onClick!=null&&(t.onclick=Nn),t=!0):t=!1,t||hr(e,!0)}function Eo(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:St=St.return}}function va(e){if(e!==St)return!1;if(!Ye)return Eo(e),Ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Zu(e.type,e.memoizedProps)),n=!n),n&&nt&&hr(e),Eo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=$m(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=$m(e)}else t===27?(t=nt,Ar(e.type)?(e=nh,nh=null,nt=e):nt=t):nt=St?wn(e.stateNode.nextSibling):null;return!0}function qr(){nt=St=null,Ye=!1}function ws(){var e=ur;return e!==null&&(Wt===null?Wt=e:Wt.push.apply(Wt,e),ur=null),e}function yi(e){ur===null?ur=[e]:ur.push(e)}var vs=pt(null),Ur=null,Jn=null;function cr(e,t,n){qe(vs,t._currentValue),t._currentValue=n}function Wn(e){e._currentValue=vs.current,Je(vs)}function Ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bs(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var h=a.child;i=i.firstContext;e:for(;i!==null;){var y=i;i=a;for(var x=0;x<t.length;x++)if(y.context===t[x]){i.lanes|=n,y=i.alternate,y!==null&&(y.lanes|=n),Ao(i.return,n,e),r||(h=null);break e}i=y.next}}else if(a.tag===18){if(h=a.return,h===null)throw Error(u(341));h.lanes|=n,i=h.alternate,i!==null&&(i.lanes|=n),Ao(h,n,e),h=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Ao(a.return,n,e),h=a.child,h=h!==null?h.sibling:null):h=a.child;if(h!==null)h.return=a;else for(h=a;h!==null;){if(h===e){h=null;break}if(a=h.sibling,a!==null){a.return=h.return,h=a;break}h=h.return}a=h}}function Lr(e,t,n,r){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var h=a.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var y=a.type;rn(a.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(a===Mn.current){if(h=a.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Xa):e=[Xa])}a=a.return}return e!==null&&bs(t,e,n,r),t.flags|=262144,e!==null}function Io(e){for(e=e.firstContext;e!==null;){if(!rn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gr(e){Ur=e,Jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ot(e){return dd(Ur,e)}function Mo(e,t){return Ur===null&&Gr(e),dd(e,t)}function dd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Jn===null){if(e===null)throw Error(u(308));Jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jn=Jn.next=t;return n}var hw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},cw=l.unstable_scheduleCallback,dw=l.unstable_NormalPriority,ft={$$typeof:je,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ks(){return{controller:new hw,data:new Map,refCount:0}}function gi(e){e.refCount--,e.refCount===0&&cw(dw,function(){e.controller.abort()})}function fd(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var pi=null;function fw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var wi=null,Ss=0,Xr=0,ba=null;function mw(e,t){if(wi===null){var n=wi=[];Ss=0,Xr=zu(),ba={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Ss++,t.then(md,md),t}function md(){if(--Ss===0&&(pi=null,wi!==null)){ba!==null&&(ba.status="fulfilled");var e=wi;wi=null,Xr=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yw(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(r.status="rejected",r.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),r}var yd=le.S;le.S=function(e,t){if(sm=U(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&mw(e,t),pi!==null)for(var n=za;n!==null;)fd(n,pi),n=n.next;if(n=e.types,n!==null){for(var r=za;r!==null;)fd(r,n),r=r.next;if(Xr!==0){r=pi,r===null&&(r=pi=[]);for(var a=0;a<n.length;a++){var i=n[a];r.indexOf(i)===-1&&r.push(i)}}}yd!==null&&yd(e,t)};var Fr=pt(null);function xs(){var e=Fr.current;return e!==null?e:tt.pooledCache}function Oo(e,t){t===null?qe(Fr,Fr.current):qe(Fr,t.pool)}function gd(){var e=xs();return e===null?null:{parent:ft._currentValue,pool:e}}var ka=Error(u(460)),Ts=Error(u(474)),No=Error(u(542)),Co={then:function(){}};function pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nn,Nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bd(e),e===void 0&&!("reason"in t)?Error(u(600)):e;default:if(typeof t.status=="string")t.then(Nn,Nn);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=r}},function(r){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bd(e),e}throw Zr=t,ka}}function Qr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Zr=n,ka):n}}var Zr=null;function vd(){if(Zr===null)throw Error(u(459));var e=Zr;return Zr=null,e}function bd(e){if(e===ka||e===No)throw Error(u(483))}var Sa=null,vi=0;function Ro(e){var t=vi;return vi+=1,Sa===null&&(Sa=[]),wd(Sa,e,t)}function dr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ho(e,t){throw t.$$typeof===$?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function kd(e){function t(O,E){if(e){var R=O.deletions;R===null?(O.deletions=[E],O.flags|=16):R.push(E)}}function n(O,E){if(!e)return null;for(;E!==null;)t(O,E),E=E.sibling;return null}function r(O){for(var E=new Map;O!==null;)O.key===null?E.set(O.index,O):E.set(O.key,O),O=O.sibling;return E}function a(O,E){return O=Kn(O,E),O.index=0,O.sibling=null,O}function i(O,E,R){return O.index=R,e?(R=O.alternate,R!==null?(R=R.index,R<E?(O.flags|=2,E):R):(O.flags|=134217730,E)):(O.flags|=1048576,E)}function h(O){return e&&O.alternate===null&&(O.flags|=134217730),O}function y(O,E,R,F){return E===null||E.tag!==6?(E=ms(R,O.mode,F),E.return=O,E):(E=a(E,R),E.return=O,E)}function x(O,E,R,F){var ue=R.type;return ue===ye?(O=Y(O,E,R.props.children,F,R.key),dr(O,R),O):E!==null&&(E.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===P&&Qr(ue)===E.type)?(E=a(E,R.props),dr(E,R),E.return=O,E):(E=So(R.type,R.key,R.props,null,O.mode,F),dr(E,R),E.return=O,E)}function N(O,E,R,F){return E===null||E.tag!==4||E.stateNode.containerInfo!==R.containerInfo||E.stateNode.implementation!==R.implementation?(E=ys(R,O.mode,F),E.return=O,E):(E=a(E,R.children||[]),E.return=O,E)}function Y(O,E,R,F,ue){return E===null||E.tag!==7?(E=Br(R,O.mode,F,ue),E.return=O,E):(E=a(E,R),E.return=O,E)}function Q(O,E,R){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ms(""+E,O.mode,R),E.return=O,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Oe:return R=So(E.type,E.key,E.props,null,O.mode,R),dr(R,E),R.return=O,R;case _e:return E=ys(E,O.mode,R),E.return=O,E;case P:return E=Qr(E),Q(O,E,R)}if(ce(E)||W(E))return E=Br(E,O.mode,R,null),E.return=O,E;if(typeof E.then=="function")return Q(O,Ro(E),R);if(E.$$typeof===je)return Q(O,Mo(O,E),R);Ho(O,E)}return null}function I(O,E,R,F){var ue=E!==null?E.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ue!==null?null:y(O,E,""+R,F);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Oe:return R.key===ue?x(O,E,R,F):null;case _e:return R.key===ue?N(O,E,R,F):null;case P:return R=Qr(R),I(O,E,R,F)}if(ce(R)||W(R))return ue!==null?null:Y(O,E,R,F,null);if(typeof R.then=="function")return I(O,E,Ro(R),F);if(R.$$typeof===je)return I(O,E,Mo(O,R),F);Ho(O,R)}return null}function D(O,E,R,F,ue){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return O=O.get(R)||null,y(E,O,""+F,ue);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Oe:return O=O.get(F.key===null?R:F.key)||null,x(E,O,F,ue);case _e:return O=O.get(F.key===null?R:F.key)||null,N(E,O,F,ue);case P:return F=Qr(F),D(O,E,R,F,ue)}if(ce(F)||W(F))return O=O.get(R)||null,Y(E,O,F,ue,null);if(typeof F.then=="function")return D(O,E,R,Ro(F),ue);if(F.$$typeof===je)return D(O,E,R,Mo(E,F),ue);Ho(E,F)}return null}function ie(O,E,R,F){for(var ue=null,Le=null,ve=E,Ie=E=0,gt=null;ve!==null&&Ie<R.length;Ie++){ve.index>Ie?(gt=ve,ve=null):gt=ve.sibling;var Xe=I(O,ve,R[Ie],F);if(Xe===null){ve===null&&(ve=gt);break}e&&ve&&Xe.alternate===null&&t(O,ve),E=i(Xe,E,Ie),Le===null?ue=Xe:Le.sibling=Xe,Le=Xe,ve=gt}if(Ie===R.length)return n(O,ve),Ye&&Vn(O,Ie),ue;if(ve===null){for(;Ie<R.length;Ie++)ve=Q(O,R[Ie],F),ve!==null&&(E=i(ve,E,Ie),Le===null?ue=ve:Le.sibling=ve,Le=ve);return Ye&&Vn(O,Ie),ue}for(ve=r(ve);Ie<R.length;Ie++)gt=D(ve,O,Ie,R[Ie],F),gt!==null&&(e&&(Xe=gt.alternate,Xe!==null&&ve.delete(Xe.key===null?Ie:Xe.key)),E=i(gt,E,Ie),Le===null?ue=gt:Le.sibling=gt,Le=gt);return e&&ve.forEach(function(Cr){return t(O,Cr)}),Ye&&Vn(O,Ie),ue}function fe(O,E,R,F){if(R==null)throw Error(u(151));for(var ue=null,Le=null,ve=E,Ie=E=0,gt=null,Xe=R.next();ve!==null&&!Xe.done;Ie++,Xe=R.next()){ve.index>Ie?(gt=ve,ve=null):gt=ve.sibling;var Cr=I(O,ve,Xe.value,F);if(Cr===null){ve===null&&(ve=gt);break}e&&ve&&Cr.alternate===null&&t(O,ve),E=i(Cr,E,Ie),Le===null?ue=Cr:Le.sibling=Cr,Le=Cr,ve=gt}if(Xe.done)return n(O,ve),Ye&&Vn(O,Ie),ue;if(ve===null){for(;!Xe.done;Ie++,Xe=R.next())Xe=Q(O,Xe.value,F),Xe!==null&&(E=i(Xe,E,Ie),Le===null?ue=Xe:Le.sibling=Xe,Le=Xe);return Ye&&Vn(O,Ie),ue}for(ve=r(ve);!Xe.done;Ie++,Xe=R.next())Xe=D(ve,O,Ie,Xe.value,F),Xe!==null&&(e&&(gt=Xe.alternate,gt!==null&&ve.delete(gt.key===null?Ie:gt.key)),E=i(Xe,E,Ie),Le===null?ue=Xe:Le.sibling=Xe,Le=Xe);return e&&ve.forEach(function(Vv){return t(O,Vv)}),Ye&&Vn(O,Ie),ue}function De(O,E,R,F){if(typeof R=="object"&&R!==null&&R.type===ye&&R.key===null&&R.props.ref===void 0&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Oe:e:{for(var ue=R.key;E!==null;){if(E.key===ue){if(ue=R.type,ue===ye){if(E.tag===7){n(O,E.sibling),F=a(E,R.props.children),dr(F,R),F.return=O,O=F;break e}}else if(E.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===P&&Qr(ue)===E.type){n(O,E.sibling),F=a(E,R.props),dr(F,R),F.return=O,O=F;break e}n(O,E);break}else t(O,E);E=E.sibling}R.type===ye?(F=Br(R.props.children,O.mode,F,R.key),dr(F,R),F.return=O,O=F):(F=So(R.type,R.key,R.props,null,O.mode,F),dr(F,R),F.return=O,O=F)}return h(O);case _e:e:{for(ue=R.key;E!==null;){if(E.key===ue)if(E.tag===4&&E.stateNode.containerInfo===R.containerInfo&&E.stateNode.implementation===R.implementation){n(O,E.sibling),F=a(E,R.children||[]),F.return=O,O=F;break e}else{n(O,E);break}else t(O,E);E=E.sibling}F=ys(R,O.mode,F),F.return=O,O=F}return h(O);case P:return R=Qr(R),De(O,E,R,F)}if(ce(R))return ie(O,E,R,F);if(W(R)){if(ue=W(R),typeof ue!="function")throw Error(u(150));return R=ue.call(R),fe(O,E,R,F)}if(typeof R.then=="function")return De(O,E,Ro(R),F);if(R.$$typeof===je)return De(O,E,Mo(O,R),F);Ho(O,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,E!==null&&E.tag===6?(n(O,E.sibling),F=a(E,R),F.return=O,O=F):(n(O,E),F=ms(R,O.mode,F),F.return=O,O=F),h(O)):n(O,E)}return function(O,E,R,F){try{vi=0;var ue=De(O,E,R,F);return Sa=null,ue}catch(ve){if(ve===ka||ve===No)throw ve;var Le=Kt(29,ve,null,O.mode);return Le.lanes=F,Le.return=O,Le}finally{}}}var Kr=kd(!0),Sd=kd(!1),fr=!1;function Es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ke&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=ko(e),id(e,null,n),t}return bo(e,r,t,n),ko(e)}function bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}function Is(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=h:i=i.next=h,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ms=!1;function ki(){if(Ms){var e=ba;if(e!==null)throw e}}function Si(e,t,n,r){Ms=!1;var a=e.updateQueue;fr=!1;var i=a.firstBaseUpdate,h=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var x=y,N=x.next;x.next=null,h===null?i=N:h.next=N,h=x;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==h&&(y===null?Y.firstBaseUpdate=N:y.next=N,Y.lastBaseUpdate=x))}if(i!==null){var Q=a.baseState;h=0,Y=N=x=null,y=i;do{var I=y.lane&-536870913,D=I!==y.lane;if(D?(Ue&I)===I:(r&I)===I){I!==0&&I===Xr&&(Ms=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ie=e,fe=y;I=t;var De=n;switch(fe.tag){case 1:if(ie=fe.payload,typeof ie=="function"){Q=ie.call(De,Q,I);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=fe.payload,I=typeof ie=="function"?ie.call(De,Q,I):ie,I==null)break e;Q=xe({},Q,I);break e;case 2:fr=!0}}I=y.callback,I!==null&&(e.flags|=64,D&&(e.flags|=8192),D=a.callbacks,D===null?a.callbacks=[I]:D.push(I))}else D={lane:I,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(N=Y=D,x=Q):Y=Y.next=D,h|=I;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;D=y,y=D.next,D.next=null,a.lastBaseUpdate=D,a.shared.pending=null}}while(!0);Y===null&&(x=Q),a.baseState=x,a.firstBaseUpdate=N,a.lastBaseUpdate=Y,i===null&&(a.shared.lanes=0),Sr|=h,e.lanes=h,e.memoizedState=Q}}function xd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Td(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)xd(n[e],t)}var gr=pt(null),Do=pt(0);function Ed(e,t){e=nr,qe(Do,e),qe(gr,t),nr=e|t.baseLanes}function Os(){qe(Do,nr),qe(gr,gr.current)}function Ns(){nr=Do.current,Je(gr),Je(Do)}var Nt=pt(null),Yt=null;function pr(e){var t=e.alternate;qe(Ct,Ct.current&1),qe(Nt,e),Yt===null&&(t===null||gr.current!==null||t.memoizedState!==null)&&(Yt=e)}function Cs(e){qe(Ct,Ct.current),qe(Nt,e),Yt===null&&(Yt=e)}function Ad(e){e.tag===22?(qe(Ct,Ct.current),qe(Nt,e),Yt===null&&(Yt=e)):wr()}function wr(){qe(Ct,Ct.current),qe(Nt,Nt.current)}function an(e){Je(Nt),Yt===e&&(Yt=null),Je(Ct)}var Ct=pt(0);function xi(e,t){qe(Nt,Nt.current),qe(Ct,t)}function Rs(e){Je(Ct),Je(Nt),Yt===e&&(Yt=null)}function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||eh(n)||th(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $n=0,He=null,et=null,mt=null,Yo=!1,xa=!1,Vr=!1,jo=0,Ti=0,Ta=null,gw=0;function ut(){throw Error(u(321))}function Hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function Ds(e,t,n,r,a,i){return $n=i,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?hf:cf,Vr=!1,i=n(r,a),Vr=!1,xa&&(i=Md(t,n,r,a)),Id(e),i}function Id(e){le.H=Xo;var t=et!==null&&et.next!==null;if($n=0,mt=et=He=null,Yo=!1,Ti=0,Ta=null,t)throw Error(u(300));e===null||yt||(e=e.dependencies,e!==null&&Io(e)&&(yt=!0))}function Md(e,t,n,r){He=e;var a=0;do{if(xa&&(Ta=null),Ti=0,xa=!1,25<=a)throw Error(u(301));if(a+=1,mt=et=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}le.H=Tw,i=t(n,r)}while(xa);return i}function pw(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?Ei(t):t,e=e.useState()[0],(et!==null?et.memoizedState:null)!==e&&(He.flags|=1024),t}function _s(){var e=jo!==0;return jo=0,e}function Ys(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function js(e){if(Yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yo=!1}$n=0,mt=et=He=null,xa=!1,Ti=jo=0,Ta=null}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?He.memoizedState=mt=e:mt=mt.next=e,mt}function ct(){if(et===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=mt===null?He.memoizedState:mt.next;if(t!==null)mt=t,et=e;else{if(e===null)throw He.alternate===null?Error(u(467)):Error(u(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},mt===null?He.memoizedState=mt=e:mt=mt.next=e}return mt}function zo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ei(e){var t=Ti;return Ti+=1,Ta===null&&(Ta=[]),e=wd(Ta,e,t),t=He,(mt===null?t.memoizedState:mt.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?hf:cf),e}function Bo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ei(e);if(e.$$typeof===X)return;if(e.$$typeof===je)return Ot(e)}throw Error(u(438,String(e)))}function zs(e){var t=null,n=He.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=He.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zo(),He.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=at;return t.index++,n}function Pn(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=ct();return Bs(t,et,e)}function Bs(e,t,n){var r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(i!==null){if(a!==null){var h=a.next;a.next=i.next,i.next=h}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var y=h=null,x=null,N=t,Y=!1;do{var Q=N.lane&-536870913;if(Q!==N.lane?(Ue&Q)===Q:($n&Q)===Q){var I=N.revertLane;if(I===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),Q===Xr&&(Y=!0);else if(($n&I)===I){N=N.next,I===Xr&&(Y=!0);continue}else Q={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(y=x=Q,h=i):x=x.next=Q,He.lanes|=I,Sr|=I;Q=N.action,Vr&&n(i,Q),i=N.hasEagerState?N.eagerState:n(i,Q)}else I={lane:Q,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(y=x=I,h=i):x=x.next=I,He.lanes|=Q,Sr|=Q;N=N.next}while(N!==null&&N!==t);if(x===null?h=i:x.next=y,!rn(i,e.memoizedState)&&(yt=!0,Y&&(n=ba,n!==null)))throw n;e.memoizedState=i,e.baseState=h,e.baseQueue=x,r.lastRenderedState=i}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qs(e){var t=ct(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var h=a=a.next;do i=e(i,h.action),h=h.next;while(h!==a);rn(i,t.memoizedState)||(yt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Od(e,t,n){var r=He,a=ct(),i=Ye;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var h=!rn((et||a).memoizedState,n);if(h&&(a.memoizedState=n,yt=!0),a=a.queue,Gs(Rd.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||h||mt!==null&&(mt.memoizedState.tag&1)!==0,Ea(e?9:8,{destroy:void 0},Cd.bind(null,r,a,n,t),null),e){if(r.flags|=2048,tt===null)throw Error(u(349));i||($n&127)!==0||Nd(r,t,n)}return n}function Nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=He.updateQueue,t===null?(t=zo(),He.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cd(e,t,n,r){t.value=n,t.getSnapshot=r,Hd(t)&&Dd(e)}function Rd(e,t,n){return n(function(){Hd(t)&&Dd(e)})}function Hd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function Dd(e){var t=zr(e,2);t!==null&&$t(t,e,2)}function Us(e){var t=qt();if(typeof e=="function"){var n=e;if(e=n(),Vr){On(!0);try{n()}finally{On(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},t}function _d(e,t,n,r){return e.baseState=n,Bs(e,et,typeof r=="function"?r:Pn)}function ww(e,t,n,r,a){if(Go(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){i.listeners.push(h)}};le.T!==null?n(!0):i.isTransition=!1,r(i),n=t.pending,n===null?(i.next=t.pending=i,Yd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Yd(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var i=le.T,h={};h.types=i!==null?i.types:null,le.T=h;try{var y=n(a,r),x=le.S;x!==null&&x(h,y),jd(e,t,y)}catch(N){Ls(e,t,N)}finally{i!==null&&h.types!==null&&(i.types=h.types),le.T=i}}else try{i=n(a,r),jd(e,t,i)}catch(N){Ls(e,t,N)}}function jd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){zd(e,t,r)},function(r){return Ls(e,t,r)}):zd(e,t,n)}function zd(e,t,n){t.status="fulfilled",t.value=n,Bd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yd(e,n)))}function Ls(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Bd(t),t=t.next;while(t!==r)}e.action=null}function Bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qd(e,t){return t}function Ud(e,t){if(Ye){var n=tt.formState;if(n!==null){e:{var r=He;if(Ye){if(nt){t:{for(var a=nt,i=gn;a.nodeType!==8;){if(!i){a=null;break t}if(a=wn(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){nt=wn(a.nextSibling),r=a.data==="F!";break e}}hr(r)}r=!1}r&&(t=n[0])}}return n=qt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qd,lastRenderedState:t},n.queue=r,n=lf.bind(null,He,r),r.dispatch=n,r=Us(!1),i=Ks.bind(null,He,!1,r.queue),r=qt(),a={state:t,dispatch:null,action:e,pending:null},r.queue=a,n=ww.bind(null,He,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ld(e){var t=ct();return Gd(t,et,e)}function Gd(e,t,n){if(t=Bs(e,t,qd)[0],e=qo(Pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Ei(t)}catch(h){throw h===ka?No:h}else r=t;t=ct();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(He.flags|=2048,Ea(9,{destroy:void 0},vw.bind(null,a,n),null)),[r,i,e]}function vw(e,t){e.action=t}function Xd(e){var t=ct(),n=et;if(n!==null)return Gd(t,n,e);ct(),t=t.memoizedState,n=ct();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ea(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=He.updateQueue,t===null&&(t=zo(),He.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Fd(){return ct().memoizedState}function Uo(e,t,n,r){var a=qt();He.flags|=e,a.memoizedState=Ea(1|t,{destroy:void 0},n,r===void 0?null:r)}function Lo(e,t,n,r){var a=ct();r=r===void 0?null:r;var i=a.memoizedState.inst;et!==null&&r!==null&&Hs(r,et.memoizedState.deps)?a.memoizedState=Ea(t,i,n,r):(He.flags|=e,a.memoizedState=Ea(1|t,i,n,r))}function Qd(e,t){Uo(8390656,8,e,t)}function Gs(e,t){Lo(2048,8,e,t)}function bw(e){He.flags|=4;var t=He.updateQueue;if(t===null)t=zo(),He.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Zd(e){var t=ct().memoizedState;return bw({ref:t,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Kd(e,t){return Lo(4,2,e,t)}function Vd(e,t){return Lo(4,4,e,t)}function Jd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wd(e,t,n){n=n!=null?n.concat([e]):null,Lo(4,4,Jd.bind(null,t,e),n)}function Xs(){}function $d(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Hs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pd(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Hs(t,r[1]))return r[0];if(r=e(),Vr){On(!0);try{e()}finally{On(!1)}}return n.memoizedState=[r,t],r}function Fs(e,t,n){return n===void 0||($n&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=hm(),He.lanes|=e,Sr|=e,n)}function ef(e,t,n,r){return rn(n,t)?n:gr.current!==null?(e=Fs(e,n,r),rn(e,t)||(yt=!0),e):($n&106)===0||($n&1073741824)!==0&&(Ue&261930)===0?(yt=!0,e.memoizedState=n):(e=hm(),He.lanes|=e,Sr|=e,t)}function tf(e,t,n,r,a){var i=ge.p;ge.p=i!==0&&8>i?i:8;var h=le.T,y={};y.types=h!==null?h.types:null,le.T=y,Ks(e,!1,t,n);try{var x=a(),N=le.S;if(N!==null&&N(y,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var Y=yw(x,r);Ai(e,t,Y,un(e))}else Ai(e,t,r,un(e))}catch(Q){Ai(e,t,{then:function(){},status:"rejected",reason:Q},un())}finally{ge.p=i,h!==null&&y.types!==null&&(h.types=y.types),le.T=h}}function kw(){}function Qs(e,t,n,r){if(e.tag!==5)throw Error(u(476));var a=nf(e).queue;tf(e,a,t,Et,n===null?kw:function(){return rf(e),n(r)})}function nf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Et,baseState:Et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:Et},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rf(e){var t=nf(e);t.next===null&&(t=e.alternate.memoizedState),Ai(e,t.next.queue,{},un())}function Zs(){return Ot(Xa)}function af(){return ct().memoizedState}function of(){return ct().memoizedState}function Sw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=un();e=mr(n);var r=yr(t,e,n);r!==null&&($t(r,t,n),bi(r,t,n)),t={cache:ks()},e.payload=t;return}t=t.return}}function xw(e,t,n){var r=un();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e)?sf(t,n):(n=ds(e,t,n,r),n!==null&&($t(n,e,r),uf(n,t,r)))}function lf(e,t,n){var r=un();Ai(e,t,n,r)}function Ai(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))sf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var h=t.lastRenderedState,y=i(h,n);if(a.hasEagerState=!0,a.eagerState=y,rn(y,h))return bo(e,t,a,0),tt===null&&vo(),!1}catch{}finally{}if(n=ds(e,t,a,r),n!==null)return $t(n,e,r),uf(n,t,r),!0}return!1}function Ks(e,t,n,r){if(r={lane:2,revertLane:zu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Go(e)){if(t)throw Error(u(479))}else t=ds(e,n,r,2),t!==null&&$t(t,e,2)}function Go(e){var t=e.alternate;return e===He||t!==null&&t===He}function sf(e,t){xa=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uf(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}var Xo={readContext:Ot,use:Bo,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut,useEffectEvent:ut},hf={readContext:Ot,use:Bo,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:Qd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Uo(4194308,4,Jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){Uo(4,2,e,t)},useMemo:function(e,t){var n=qt();t=t===void 0?null:t;var r=e();if(Vr){On(!0);try{e()}finally{On(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=qt();if(n!==void 0){var a=n(t);if(Vr){On(!0);try{n(t)}finally{On(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=xw.bind(null,He,e),[r.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:function(e){e=Us(e);var t=e.queue,n=lf.bind(null,He,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xs,useDeferredValue:function(e,t){var n=qt();return Fs(n,e,t)},useTransition:function(){var e=Us(!1);return e=tf.bind(null,He,e.queue,!0,!1),qt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=He,a=qt();if(Ye){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),tt===null)throw Error(u(349));(Ue&127)!==0||Nd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Qd(Rd.bind(null,r,i,e),[e]),r.flags|=2048,Ea(9,{destroy:void 0},Cd.bind(null,r,i,n,t),null),n},useId:function(){var e=qt(),t=tt.identifierPrefix;if(Ye){var n=Rn,r=Cn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=jo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=gw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zs,useFormState:Ud,useActionState:Ud,useOptimistic:function(e){var t=qt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ks.bind(null,He,!0,n),n.dispatch=t,[e,t]},useMemoCache:zs,useCacheRefresh:function(){return qt().memoizedState=Sw.bind(null,He)},useEffectEvent:function(e){var t=qt(),n={impl:e};return t.memoizedState=n,function(){if((Ke&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},cf={readContext:Ot,use:Bo,useCallback:$d,useContext:Ot,useEffect:Gs,useImperativeHandle:Wd,useInsertionEffect:Kd,useLayoutEffect:Vd,useMemo:Pd,useReducer:qo,useRef:Fd,useState:function(){return qo(Pn)},useDebugValue:Xs,useDeferredValue:function(e,t){var n=ct();return ef(n,et.memoizedState,e,t)},useTransition:function(){var e=qo(Pn)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Ei(e),t]},useSyncExternalStore:Od,useId:af,useHostTransitionStatus:Zs,useFormState:Ld,useActionState:Ld,useOptimistic:function(e,t){var n=ct();return _d(n,et,e,t)},useMemoCache:zs,useCacheRefresh:of,useEffectEvent:Zd},Tw={readContext:Ot,use:Bo,useCallback:$d,useContext:Ot,useEffect:Gs,useImperativeHandle:Wd,useInsertionEffect:Kd,useLayoutEffect:Vd,useMemo:Pd,useReducer:qs,useRef:Fd,useState:function(){return qs(Pn)},useDebugValue:Xs,useDeferredValue:function(e,t){var n=ct();return et===null?Fs(n,e,t):ef(n,et.memoizedState,e,t)},useTransition:function(){var e=qs(Pn)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Ei(e),t]},useSyncExternalStore:Od,useId:af,useHostTransitionStatus:Zs,useFormState:Xd,useActionState:Xd,useOptimistic:function(e,t){var n=ct();return et!==null?_d(n,et,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:zs,useCacheRefresh:of,useEffectEvent:Zd};function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=un(),a=mr(r);a.payload=t,n!=null&&(a.callback=n),t=yr(e,a,r),t!==null&&($t(t,e,r),bi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=un(),a=mr(r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=yr(e,a,r),t!==null&&($t(t,e,r),bi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=un(),r=mr(n);r.tag=2,t!=null&&(r.callback=t),t=yr(e,r,n),t!==null&&($t(t,e,n),bi(t,e,n))}};function df(e,t,n,r,a,i,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,h):t.prototype&&t.prototype.isPureReactComponent?!di(n,r)||!di(a,i):!0}function ff(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Jr(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=xe({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function mf(e){wo(e)}function yf(e){console.error(e)}function gf(e){wo(e)}function Fo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function pf(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ws(e,t,n){return n=mr(n),n.tag=3,n.payload={element:null},n.callback=function(){Fo(e,t)},n}function wf(e){return e=mr(e),e.tag=3,e}function vf(e,t,n,r){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){pf(t,n,r)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){pf(t,n,r),typeof a!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function Ew(e,t,n,r,a){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Lr(t,n,a,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Yt===null?dl():n.alternate===null&&ht===0&&(ht=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Co?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),_u(e,r,a)),!1;case 22:return n.flags|=65536,r===Co?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),_u(e,r,a)),!1}throw Error(u(435,n.tag))}return _u(e,r,a),dl(),!1}if(Ye)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ps&&(e=Error(u(422),{cause:r}),yi(fn(e,n)))):(r!==ps&&(t=Error(u(423),{cause:r}),yi(fn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=fn(r,n),a=Ws(e.stateNode,r,a),Is(e,a),ht!==4&&(ht=2)),!1;var i=Error(u(520),{cause:r});if(i=fn(i,n),Di===null?Di=[i]:Di.push(i),ht!==4&&(ht=2),t===null)return!0;r=fn(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ws(n.stateNode,r,e),Is(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=wf(a),vf(a,e,n,r),Is(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var $s=Error(u(461)),yt=!1;function bt(e,t,n,r){t.child=e===null?Sd(t,null,n,r):Kr(t,e.child,n,r)}function bf(e,t,n,r,a){n=n.render;var i=t.ref;if("ref"in r){var h={};for(var y in r)y!=="ref"&&(h[y]=r[y])}else h=r;return Gr(t),r=Ds(e,t,n,h,i,a),y=_s(),e!==null&&!yt?(Ys(e,t,a),er(e,t,a)):(Ye&&y&&To(t),t.flags|=1,bt(e,t,r,a),t.child)}function kf(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!fs(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Sf(e,t,i,r,a)):(e=So(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ou(e,a)){var h=i.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(h,r)&&e.ref===t.ref)return er(e,t,a)}return t.flags|=1,e=Kn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Sf(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(di(i,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=i,ou(e,a))(e.flags&131072)!==0&&(yt=!0);else return t.lanes=e.lanes,er(e,t,a)}return Ps(e,t,n,r,a)}function xf(e,t,n,r){var a=r.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(r=t.child=e.child,a=0;r!==null;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~i}else r=0,t.child=null;return Tf(e,t,i,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oo(t,i!==null?i.cachePool:null),i!==null?Ed(t,i):Os(),Ad(t);else return r=t.lanes=536870912,Tf(e,t,i!==null?i.baseLanes|n:n,n,r)}else i!==null?(Oo(t,i.cachePool),Ed(t,i),wr(),t.memoizedState=null):(e!==null&&Oo(t,null),Os(),wr());return bt(e,t,a,n),t.child}function Ii(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Tf(e,t,n,r,a){var i=xs();return i=i===null?null:{parent:ft._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Oo(t,null),Os(),Ad(t),e!==null&&Lr(e,t,r,!0),t.childLanes=a,null}function Qo(e,t){return t=Zo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ef(e,t,n){return Kr(t,e.child,null,n),e=Qo(t,t.pendingProps),e.flags|=2,an(t),t.memoizedState=null,e}function Aw(e,t,n){var r=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ye){if(r.mode==="hidden")return e=Qo(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ii(null,e);if(Cs(t),(e=nt)?(e=Wm(e,gn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sr!==null?{id:Cn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},n=ld(e),n.return=t,t.child=n,St=t,nt=null)):e=null,e===null)throw hr(t);return t.lanes=536870912,null}return Qo(t,r)}var i=e.memoizedState;if(i!==null){var h=i.dehydrated;if(Cs(t),a)if(t.flags&256)t.flags&=-257,t=Ef(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(yt||Lr(e,t,n,!1),a=(n&e.childLanes)!==0,yt||a){if(gr.current===null){if(r=tt,r!==null&&(h=hc(r,n),h!==0&&h!==i.retryLane))throw i.retryLane=h,zr(e,h),$t(r,e,h),$s;dl()}t=Ef(e,t,n)}else e=i.treeContext,nt=wn(h.nextSibling),St=t,Ye=!0,ur=null,gn=!1,e!==null&&hd(t,e),t=Qo(t,r),t.flags|=134221824;return t}return e=Kn(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Aa(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ps(e,t,n,r,a){return Gr(t),n=Ds(e,t,n,r,void 0,a),r=_s(),e!==null&&!yt?(Ys(e,t,a),er(e,t,a)):(Ye&&r&&To(t),t.flags|=1,bt(e,t,n,a),t.child)}function Af(e,t,n,r,a,i){return Gr(t),t.updateQueue=null,n=Md(t,r,n,a),Id(e),r=_s(),e!==null&&!yt?(Ys(e,t,i),er(e,t,i)):(Ye&&r&&To(t),t.flags|=1,bt(e,t,n,i),t.child)}function If(e,t,n,r,a){if(Gr(t),t.stateNode===null){var i=ga,h=n.contextType;typeof h=="object"&&h!==null&&(i=Ot(h)),i=new n(r,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Js,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=r,i.state=t.memoizedState,i.refs={},Es(t),h=n.contextType,i.context=typeof h=="object"&&h!==null?Ot(h):ga,i.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Vs(t,n,h,r),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(h=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),h!==i.state&&Js.enqueueReplaceState(i,i.state,null),Si(t,r,i,a),ki(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){i=t.stateNode;var y=t.memoizedProps,x=Jr(n,y);i.props=x;var N=i.context,Y=n.contextType;h=ga,typeof Y=="object"&&Y!==null&&(h=Ot(Y));var Q=n.getDerivedStateFromProps;Y=typeof Q=="function"||typeof i.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(y||N!==h)&&ff(t,i,r,h),fr=!1;var I=t.memoizedState;i.state=I,Si(t,r,i,a),ki(),N=t.memoizedState,y||I!==N||fr?(typeof Q=="function"&&(Vs(t,n,Q,r),N=t.memoizedState),(x=fr||df(t,n,x,r,I,N,h))?(Y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=h,r=x):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,As(e,t),h=t.memoizedProps,Y=Jr(n,h),i.props=Y,Q=t.pendingProps,I=i.context,N=n.contextType,x=ga,typeof N=="object"&&N!==null&&(x=Ot(N)),y=n.getDerivedStateFromProps,(N=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h!==Q||I!==x)&&ff(t,i,r,x),fr=!1,I=t.memoizedState,i.state=I,Si(t,r,i,a),ki();var D=t.memoizedState;h!==Q||I!==D||fr||e!==null&&e.dependencies!==null&&Io(e.dependencies)?(typeof y=="function"&&(Vs(t,n,y,r),D=t.memoizedState),(Y=fr||df(t,n,Y,r,I,D,x)||e!==null&&e.dependencies!==null&&Io(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,D,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,D,x)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=D),i.props=r,i.state=D,i.context=x,r=Y):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Aa(e,t),r=(t.flags&128)!==0,i||r?(i=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&r?(t.child=Kr(t,e.child,null,a),t.child=Kr(t,null,n,a)):bt(e,t,n,a),t.memoizedState=i.state,e=t.child):e=er(e,t,a),e}function Mf(e,t,n,r){return qr(),t.flags|=256,bt(e,t,n,r),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tu(e){return{baseLanes:e,cachePool:gd()}}function nu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=sn),e}function Of(e,t,n){var r=t.pendingProps,a=!1,i=(t.flags&128)!==0,h;if((h=i)||(h=e!==null&&e.memoizedState===null?!1:(Ct.current&2)!==0),h&&(a=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ye){if(a?pr(t):wr(),(e=nt)?(e=Wm(e,gn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sr!==null?{id:Cn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},n=ld(e),n.return=t,t.child=n,St=t,nt=null)):e=null,e===null)throw hr(t);return th(e)?t.lanes=32:t.lanes=536870912,null}return i=r.children,r=r.fallback,a?(wr(),a=t.mode,i=Zo({mode:"hidden",children:i},a),r=Br(r,a,n,null),i.return=t,r.return=t,i.sibling=r,t.child=i,r=t.child,r.memoizedState=tu(n),r.childLanes=nu(e,h,n),t.memoizedState=eu,Ii(null,r)):(pr(t),ru(t,i))}var y=e.memoizedState;if(y!==null){var x=y.dehydrated;if(x!==null)return Iw(e,t,i,h,r,x,y,n)}return a?(wr(),a=r.fallback,i=t.mode,y=e.child,x=y.sibling,r=Kn(y,{mode:"hidden",children:r.children}),r.subtreeFlags=y.subtreeFlags&1206910976,x!==null?a=Kn(x,a):(a=Br(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,Ii(null,r),r=t.child,a=e.child.memoizedState,a===null?a=tu(n):(i=a.cachePool,i!==null?(y=ft._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=gd(),a={baseLanes:a.baseLanes|n,cachePool:i}),r.memoizedState=a,r.childLanes=nu(e,h,n),t.memoizedState=eu,Ii(e.child,r)):(pr(t),n=e.child,e=n.sibling,n=Kn(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function ru(e,t){return t=Zo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zo(e,t){return e=Kt(22,e,null,t),e.lanes=0,e}function Ko(e,t,n){return Kr(t,e.child,null,n),e=ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Iw(e,t,n,r,a,i,h,y){if(n)return t.flags&256?(pr(t),t.flags&=-257,Ko(e,t,y)):t.memoizedState!==null?(wr(),t.child=e.child,t.flags|=128,null):(wr(),i=a.fallback,h=t.mode,a=Zo({mode:"visible",children:a.children},h),i=Br(i,h,y,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Kr(t,e.child,null,y),a=t.child,a.memoizedState=tu(y),a.childLanes=nu(e,r,y),t.memoizedState=eu,Ii(null,a));if(pr(t),th(i)){if(r=i.nextSibling&&i.nextSibling.dataset,r)var x=r.dgst;return r=x,r!==""&&(a=Error(u(419)),a.stack="",a.digest=r,yi({value:a,source:null,stack:null})),Ko(e,t,y)}if(yt||Lr(e,t,y,!1),r=(y&e.childLanes)!==0,yt||r){if(gr.current!==null)return Ko(e,t,y);if(r=tt,r!==null&&(a=hc(r,y),a!==0&&a!==h.retryLane))throw h.retryLane=a,zr(e,a),$t(r,e,a),$s;return eh(i)||dl(),Ko(e,t,y)}return eh(i)?(t.flags|=192,t.child=e.child,null):(e=h.treeContext,nt=wn(i.nextSibling),St=t,Ye=!0,ur=null,gn=!1,e!==null&&hd(t,e),t=ru(t,a.children),t.flags|=134221824,t)}function Nf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ao(e.return,t,n)}function Cf(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&_o(n)===null&&(t=e),e=e.sibling}return t}function Vo(e,t,n,r,a,i){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:i}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=r,h.tail=n,h.tailMode=a,h.treeForkCount=i)}function au(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function iu(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;r=r.children;var h=Ct.current;if(t.flags&128)return xi(t,h),null;var y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,xi(t,h),a==="backwards"&&e!==null?(au(e),bt(e,t,r,n),au(e)):bt(e,t,r,n),r=Ye?mi:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,n,t);else if(e.tag===19)Nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=Cf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,au(t)),Vo(t,!0,a,null,i,r);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&_o(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Vo(t,!0,n,null,i,r);break;case"together":Vo(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:n=Cf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Vo(t,!1,a,n,i,r)}return t.child}function Rf(e,t,n){var r=t.pendingProps;return cr(t,t.type,r.value),bt(e,t,r.children,n),t.child}function er(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Lr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ou(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Io(e)))}function Mw(e,t,n){switch(t.tag){case 3:Ft(t,t.stateNode.containerInfo),cr(t,ft,e.memoizedState.cache),qr();break;case 27:case 5:zt(t);break;case 4:Ft(t,t.stateNode.containerInfo);break;case 10:cr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cs(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return pr(t),t.flags|=128,null;r=Lr(e,t,n,!1);var a=t.child.childLanes;return r||(n&a)!==0?Of(e,t,n):(pr(t),e=er(e,t,n),e!==null?e.sibling:null)}pr(t);break;case 19:if(t.flags&128)return iu(e,t,n);if(a=(e.flags&128)!==0,r=(n&t.childLanes)!==0,r||(Lr(e,t,n,!1),r=(n&t.childLanes)!==0),a){if(r)return iu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xi(t,Ct.current),r)break;return null;case 22:return t.lanes=0,xf(e,t,n,t.pendingProps);case 24:cr(t,ft,e.memoizedState.cache)}return er(e,t,n)}function Hf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)yt=!0;else{if(!ou(e,n)&&(t.flags&128)===0)return yt=!1,Mw(e,t,n);yt=(e.flags&131072)!==0}else yt=!1,Ye&&(t.flags&1048576)!==0&&ud(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Qr(t.elementType),t.type=e,typeof e=="function")fs(e)?(r=Jr(e,r),t.tag=1,t=If(null,t,e,r,n)):(t.tag=0,t=Ps(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===j){t.tag=11,t=bf(null,t,e,r,n);break e}else if(a===te){t.tag=14,t=kf(null,t,e,r,n);break e}else if(a===je){t.tag=10,t.type=e,t=Rf(null,t,n);break e}}throw t=Te(e)||e,Error(u(306,t,""))}}return t;case 0:return Ps(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Jr(r,t.pendingProps),If(e,t,r,a,n);case 3:e:{if(Ft(t,t.stateNode.containerInfo),e===null)throw Error(u(387));r=t.pendingProps;var i=t.memoizedState;a=i.element,As(e,t),Si(t,r,null,n);var h=t.memoizedState;if(r=h.cache,cr(t,ft,r),r!==i.cache&&bs(t,[ft],n,!0),ki(),r=h.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Mf(e,t,r,n);break e}else if(r!==a){a=fn(Error(u(424)),t),yi(a),t=Mf(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=wn(e.firstChild),St=t,Ye=!0,ur=null,gn=!0,n=Sd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(qr(),r===a){t=er(e,t,n);break e}bt(e,t,r,n)}t=t.child}return t;case 26:return Aa(e,t),e===null?(n=ay(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ye||(t.stateNode=jm(t.type,t.pendingProps,vt.current,t)):t.memoizedState=ay(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zt(t),e===null&&Ye&&(r=t.stateNode=ey(t.type,t.pendingProps,vt.current),St=t,gn=!0,a=nt,Ar(t.type)?(nh=a,nt=wn(r.firstChild)):nt=a),bt(e,t,t.pendingProps.children,n),Aa(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ye&&((a=r=nt)&&(r=Sv(r,t.type,t.pendingProps,gn),r!==null?(t.stateNode=r,St=t,nt=wn(r.firstChild),gn=!1,a=!0):a=!1),a||hr(t)),zt(t),a=t.type,i=t.pendingProps,h=e!==null?e.memoizedProps:null,r=i.children,Zu(a,i)?r=null:h!==null&&Zu(a,h)&&(t.flags|=32),t.memoizedState!==null&&(a=Ds(e,t,pw,null,null,n),Xa._currentValue=a),Aa(e,t),bt(e,t,r,n),t.child;case 6:return e===null&&Ye&&((e=n=nt)&&(n=xv(n,t.pendingProps,gn),n!==null?(t.stateNode=n,St=t,nt=null,e=!0):e=!1),e||hr(t)),null;case 13:return Of(e,t,n);case 4:return Ft(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):bt(e,t,r,n),t.child;case 11:return bf(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Aa(e,t),bt(e,t,r,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:return Rf(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Gr(t),a=Ot(a),r=r(a),t.flags|=1,bt(e,t,r,n),t.child;case 14:return kf(e,t,t.type,t.pendingProps,n);case 15:return Sf(e,t,t.type,t.pendingProps,n);case 19:return iu(e,t,n);case 31:return Aw(e,t,n);case 22:return xf(e,t,n,t.pendingProps);case 24:return Gr(t),r=Ot(ft),e===null?(a=xs(),a===null&&(a=tt,i=ks(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},Es(t),cr(t,ft,a)):((e.lanes&n)!==0&&(As(e,t),Si(t,null,null,n),ki()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),cr(t,ft,r)):(r=i.cache,cr(t,ft,r),r!==a.cache&&bs(t,[ft],n,!0))),bt(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!=="auto"?t.flags|=e===null?18882560:18874368:Ye&&To(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Aa(e,t),bt(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function tr(e){e.flags|=4}function lu(e,t,n,r,a){var i;if((i=(e.mode&32)!==0)&&(i=n===null?sy(t,r):sy(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(mm())e.flags|=8192;else throw Zr=Co,Ts}else e.flags&=-16777217}function Df(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!uy(t))if(mm())e.flags|=8192;else throw Zr=Co,Ts}function Jo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lc():536870912,e.lanes|=t,Ca|=t)}function Mi(e,t){if(!Ye)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&1206910976,r|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ow(e,t,n){var r=t.pendingProps;switch(gs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return rt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Wn(ft),dt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(va(t)?tr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ws())),rt(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(tr(t),i!==null?(rt(t),Df(t,i)):(rt(t),lu(t,a,null,r,n))):i?i!==e.memoizedState?(tr(t),rt(t),Df(t,i)):(rt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&tr(t),rt(t),lu(t,a,e,r,n)),null;case 27:if(Qt(t),n=vt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&tr(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return rt(t),t.subtreeFlags&=-33554433,null}e=wt.current,va(t)?cd(t):(e=ey(a,r,n),t.stateNode=e,tr(t))}return rt(t),t.subtreeFlags&=-33554433,null;case 5:if(Qt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&tr(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return rt(t),t.subtreeFlags&=-33554433,null}if(i=wt.current,va(t))cd(t);else{var h=Bi(vt.current);switch(i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof r.is=="string"?h.createElement("select",{is:r.is}):h.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i=typeof r.is=="string"?h.createElement(a,{is:r.is}):h.createElement(a)}}i[Mt]=t,i[Zt]=r;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=i;e:switch(Ht(i,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&tr(t)}}return rt(t),t.subtreeFlags&=-33554433,lu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&tr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(e=vt.current,va(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=St,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Hm(e.nodeValue,n)),e||hr(t,!0)}else e=Bi(e).createTextNode(r),e[Mt]=t,t.stateNode=e}return rt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=va(t),n!==null){if(e===null){if(!r)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Mt]=t}else qr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),e=!1}else n=ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(an(t),t):(an(t),null);if((t.flags&128)!==0)throw Error(u(558))}return rt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[Mt]=t}else qr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else a=ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(an(t),t):(an(t),null)}return an(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Jo(t,t.updateQueue),rt(t),null);case 4:return dt(),e===null&&Lu(t.stateNode.containerInfo),t.flags|=67108864,rt(t),null;case 10:return Wn(t.type),rt(t),null;case 19:if(Rs(t),r=t.memoizedState,r===null)return rt(t),null;if(a=(t.flags&128)!==0,i=r.rendering,i===null)if(a)Mi(r,!1);else{if(ht!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=_o(e),i!==null){for(t.flags|=128,Mi(r,!1),e=i.updateQueue,t.updateQueue=e,Jo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)od(n,e),n=n.sibling;return xi(t,Ct.current&1|2),Ye&&Vn(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&U()>sl&&(t.flags|=128,a=!0,Mi(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Jo(t,e),Mi(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!i.alternate&&!Ye)return rt(t),null}else 2*U()-r.renderingStartTime>sl&&n!==536870912&&(t.flags|=128,a=!0,Mi(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(e=r.last,e!==null?e.sibling=i:t.child=i,r.last=i)}if(r.tail!==null){e=r.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=U(),e.sibling=null,i=Ct.current,i=a?i&1|2:i&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!n||Ye?xi(t,i):(n=i,qe(Nt,t),qe(Ct,n),Yt===null&&(Yt=t)),Ye&&Vn(t,r.treeForkCount),e}return rt(t),null;case 22:case 23:return an(t),Ns(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),n=t.updateQueue,n!==null&&Jo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Je(Fr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wn(ft),rt(t),null;case 25:return null;case 30:return t.flags|=33554432,rt(t),null}throw Error(u(156,t.tag))}function Nw(e,t){switch(gs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(ft),dt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qt(t),null;case 31:if(t.memoizedState!==null){if(an(t),t.alternate===null)throw Error(u(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(an(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Rs(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return dt(),null;case 10:return Wn(t.type),null;case 22:case 23:return an(t),Ns(),e!==null&&Je(Fr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wn(ft),null;case 25:return null;default:return null}}function _f(e,t){switch(gs(t),t.tag){case 3:Wn(ft),dt();break;case 26:case 27:case 5:Qt(t);break;case 4:dt();break;case 31:t.memoizedState!==null&&an(t);break;case 13:an(t);break;case 19:Rs(t);break;case 10:Wn(t.type);break;case 22:case 23:an(t),Ns(),e!==null&&Je(Fr);break;case 24:Wn(ft)}}function Oi(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var i=n.create,h=n.inst;r=i(),h.destroy=r}n=n.next}while(n!==a)}}catch(y){$e(t,t.return,y)}}function vr(e,t,n){try{var r=t.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var i=a.next;r=i;do{if((r.tag&e)===e){var h=r.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,a=t;var x=n,N=y;try{N()}catch(Y){$e(a,x,Y)}}}r=r.next}while(r!==i)}}catch(Y){$e(t,t.return,Y)}}function Yf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Td(t,n)}catch(r){$e(e,e.return,r)}}}function jf(e,t,n){n.props=Jr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){$e(e,t,r)}}function Hn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var a=e.stateNode,i=Qn(e.memoizedProps,a);(a.ref===null||a.ref.name!==i)&&(a.ref=Xm(i)),r=a.ref;break;case 7:if(e.stateNode===null){var h=new hn(e);g(e.child,!1,bv,h,void 0,void 0),e.stateNode=h}r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(y){$e(e,t,y)}}function Rt(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(a){$e(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){$e(e,t,a)}else n.current=null}function Wo(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Jm(e.stateNode,t[n])}function zf(e){for(var t=e.return;t!==null&&(uu(t)&&Jm(e.stateNode,t.stateNode),!su(t));)t=t.return}function Ni(e){for(var t=e.return;t!==null&&(uu(t)&&kv(e.stateNode,t.stateNode),!su(t));)t=t.return}function su(e){return e.tag===5||e.tag===3||e.tag===27}function uu(e){return e&&e.tag===7&&e.stateNode!==null}function hu(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){$e(e,e.return,a)}}function cu(e,t,n){try{var r=e.stateNode;nv(r,e.type,n,t),r[Zt]=t}catch(a){$e(e,e.return,a)}}function Bf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fu(e,t,n,r){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nn)),Wo(e,r),Ze=!0;else if(a!==4&&(a===27&&(Wo(e,r),r=null,Ar(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(fu(e,t,n,r),e=e.sibling;e!==null;)fu(e,t,n,r),e=e.sibling}function $o(e,t,n,r){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Wo(e,r),Ze=!0;else if(a!==4&&(a===27&&(Wo(e,r),r=null,Ar(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for($o(e,t,n,r),e=e.sibling;e!==null;)$o(e,t,n,r),e=e.sibling}function qf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ht(t,r,n),t[Mt]=e,t[Zt]=n}catch(i){$e(e,e.return,i)}}var Po=!1,on=null;function Uf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Po=!0)}var Dn=null;function Lf(){var e=Dn;return Dn=null,e}var Vt=0;function Ia(e,t,n,r,a){return Vt=0,Gf(e.child,t,n,r,a)}function Gf(e,t,n,r,a){for(var i=!1;e!==null;){if(e.tag===5){var h=e.stateNode;if(r!==null){var y=Ju(h);r.push(y),y.view&&(i=!0)}else i||Ju(h).view&&(i=!0);Po=!0,Lm(h,Vt===0?t:t+"_"+Vt,n),Vt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||Gf(e.child,t,n,r,a)&&(i=!0));e=e.sibling}return i}function _n(e,t){for(;e!==null;)e.tag===5?Gm(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||_n(e.child,t)),e=e.sibling}function el(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(el(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(u(544));var n=t.name;t=Zn(t.default,t.share),t!=="none"&&(Ia(e,n,t,null,!1)||_n(e.child,!1))}e=e.sibling}}function mu(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,a=Qn(r,n),i=Zn(r.default,n.paired?r.share:r.enter);i!=="none"?Ia(e,a,i,null,!1)?(el(e),n.paired||t||_a(e,r.onEnter)):_n(e.child,!1):el(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)mu(e,t),e=e.sibling;else el(e)}function yu(e){if(on!==null&&on.size!==0){var t=on;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,r=n.name;if(r!=null&&r!=="auto"){var a=t.get(r);if(a!==void 0){var i=Zn(n.default,n.share);if(i!=="none"&&(Ia(e,r,i,null,!1)?(i=e.stateNode,a.paired=i,i.paired=a,_a(e,n.onShare)):_n(e.child,!1)),t.delete(r),t.size===0)break}}}yu(e)}e=e.sibling}}}function gu(e){if(e.tag===30){var t=e.memoizedProps,n=Qn(t,e.stateNode),r=on!==null?on.get(n):void 0,a=Zn(t.default,r!==void 0?t.share:t.exit);a!=="none"&&(Ia(e,n,a,null,!1)?r!==void 0?(a=e.stateNode,r.paired=a,a.paired=r,on.delete(n),_a(e,t.onShare)):_a(e,t.onExit):_n(e.child,!1)),on!==null&&yu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gu(e),e=e.sibling;else on!==null&&yu(e)}function Xf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Qn(t,e.stateNode);t=Zn(t.default,t.update),e.flags&=-5,t!=="none"&&Ia(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Xf(e);e=e.sibling}}function pu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,_n(e.child,!1))}pu(e)}e=e.sibling}}function tl(e){if(e.tag===30)e.stateNode.paired=null,_n(e.child,!1),pu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)tl(e),e=e.sibling;else pu(e)}function Ff(e){for(e=e.child;e!==null;)e.tag===30?_n(e.child,!1):(e.subtreeFlags&33554432)!==0&&Ff(e),e=e.sibling}function wu(e,t,n,r,a,i,h){for(var y=!1;t!==null;){if(t.tag===5){var x=t.stateNode;if(i!==null&&Vt<i.length){var N=i[Vt],Y=Ju(x);(N.view||Y.view)&&(y=!0);var Q;if(Q=(e.flags&4)===0)if(Y.clip)Q=!0;else{Q=N.rect;var I=Y.rect;Q=Q.y!==I.y||Q.x!==I.x||Q.height!==I.height||Q.width!==I.width}Q&&(e.flags|=4),Y.abs?Y=!N.abs:(N=N.rect,Y=Y.rect,Y=N.height!==Y.height||N.width!==Y.width),Y&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Lm(x,Vt===0?n:n+"_"+Vt,a),y&&(e.flags&4)!==0||(Dn===null&&(Dn=[]),Dn.push(x,Vt===0?r:r+"_"+Vt,t.memoizedProps)),Vt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&h?e.flags|=t.flags&32:wu(e,t.child,n,r,a,i,h)&&(y=!0));t=t.sibling}return y}function Qf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,a=Qn(n,r),i=Zn(n.default,n.update),h;h=e.memoizedState,e.memoizedState=null,r=e;var y=e.child;Vt=0,a=wu(r,y,a,a,i,h,!1),(e.flags&4)!==0&&a&&_a(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Qf(e);e=e.sibling}}var xt=!1,Ve=!1,Yn=!1,vu=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,Tt=null,jn=!1,Ci=!1,nl=!1,bu=!1;function Cw(e,t,n){if(e=e.containerInfo,Fu=Fa,e=Jc(e),os(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var y=0,x=-1,N=-1,Y=0,Q=0,I=e,D=null;t:for(;;){for(var ie;I!==r||i!==0&&I.nodeType!==3||(x=y+i),I!==h||a!==0&&I.nodeType!==3||(N=y+a),I.nodeType===3&&(y+=I.nodeValue.length),(ie=I.firstChild)!==null;)D=I,I=ie;for(;;){if(I===e)break t;if(D===r&&++Y===i&&(x=y),D===h&&++Q===a&&(N=y),(ie=I.nextSibling)!==null)break;I=D,D=I.parentNode}I=ie}r=x===-1||N===-1?null:{start:x,end:N}}else r=null}r=r||{start:0,end:0}}else r=null;for(Qu={focusedElem:e,selectionRange:r},Fa=!1,n=(n&335544064)===n,Tt=t,t=n?9270:1024;Tt!==null;){if(e=Tt,n&&(r=e.deletions,r!==null))for(i=0;i<r.length;i++)n&&gu(r[i]);if(e.alternate===null&&(e.flags&2)!==0)n&&Uf(e),rl(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&gu(r),rl(n);continue}else if(r!==null&&r.memoizedState!==null){n&&Uf(e),rl(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,Tt=r):(n&&Xf(e),rl(n))}}on=null}function rl(e){for(;Tt!==null;){var t=Tt,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var i=t.stateNode;try{var h=Jr(t.type,a);n=i.getSnapshotBeforeUpdate(h,r),i.__reactInternalSnapshotBeforeUpdate=n}catch(y){$e(t,t.return,y)}}break;case 3:if((a&1024)!==0){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)Pu(r);else if(n===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Pu(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=Qn(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Zn(a.default,a.update),a!=="none"&&Ia(r,n,a,r.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(u(163))}if(r=t.sibling,r!==null){r.return=t.return,Tt=r;break}Tt=t.return}}function Kf(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n),r&4&&Oi(5,n);break;case 1:if(zn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){$e(n,n.return,h)}else{var a=Jr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){$e(n,n.return,h)}}r&64&&Yf(n),r&512&&Hn(n,n.return);break;case 3:if(zn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Td(e,t)}catch(h){$e(n,n.return,h)}}break;case 27:t===null&&r&4&&qf(n);case 26:case 5:zn(e,n),t===null&&r&4&&hu(n),r&512&&Hn(n,n.return);break;case 12:zn(e,n);break;case 31:zn(e,n),r&4&&$f(e,n);break;case 13:zn(e,n),r&4&&Pf(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Gw.bind(null,n),Tv(e,n))));break;case 22:if(r=n.memoizedState!==null||xt,!r){var i=t!==null&&t.memoizedState!==null||Ve;t=xt,a=Ve,xt=r,(Ve=i)&&!a?(r=2,(n.subtreeFlags&8772)!==0&&(r|=1),Tn(e,n,r)):zn(e,n),xt=t,Ve=a}break;case 30:zn(e,n),r&512&&Hn(n,n.return);break;case 7:r&512&&Hn(n,n.return);default:zn(e,n)}}function ku(e,t){for(e=e.child;e!==null;)Vf(e,t),e=e.sibling}function Vf(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var a=e.stateNode,i=e.memoizedProps.style,h=i!=null&&i.hasOwnProperty("display")?i.display:null;a.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(x){$e(e,e.return,x)}Su(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Ze=!0}catch(x){$e(e,e.return,x)}break;case 18:try{var y=e.stateNode;t?Um(y,!0):Um(e.stateNode,!1)}catch(x){$e(e,e.return,x)}break;case 22:case 23:e.memoizedState===null&&ku(e,t);break;default:ku(e,t)}}function Su(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,r=t;switch(n.tag){case 4:Vf(n,r);break e;case 22:n.memoizedState===null&&Su(n,r);break e;default:Su(n,r)}}e=e.sibling}}function Jf(e){var t=e.alternate;t!==null&&(e.alternate=null,Jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var it=null,Jt=!1;function Sn(e,t,n){for(n=n.child;n!==null;)Wf(e,t,n),n=n.sibling}function Wf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(en,n)}catch{}switch(n.tag){case 26:Ve||Rt(n,t),Sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ve&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Rt(n,t),Ni(n);var r=it,a=Jt;Ar(n.type)&&(it=n.stateNode,Jt=!1),Sn(e,t,n),ty(n.stateNode,n.type,n.memoizedProps),it=r,Jt=a;break;case 5:Ve||Rt(n,t),Ni(n);case 6:if(n.tag===6&&Ni(n),r=it,a=Jt,it=null,Sn(e,t,n),it=r,Jt=a,it!==null)if(Jt)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(n.stateNode),Ze=!0}catch(i){$e(n,t,i)}else try{it.removeChild(n.stateNode),Ze=!0}catch(i){$e(n,t,i)}break;case 18:it!==null&&(Jt?(e=it,qm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Qa(e)):qm(it,n.stateNode));break;case 4:r=it,a=Jt,it=n.stateNode.containerInfo,Jt=!0,Sn(e,t,n),it=r,Jt=a;break;case 0:case 11:case 14:case 15:vr(2,n,t),Ve||vr(4,n,t),Sn(e,t,n);break;case 1:Ve||(Rt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&jf(n,t,r)),Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:Ve=(r=Ve)||n.memoizedState!==null,Sn(e,t,n),Ve=r;break;case 30:Rt(n,t),Sn(e,t,n);break;case 7:Ve||Rt(n,t),Sn(e,t,n);break;default:Sn(e,t,n)}}function $f(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qa(e)}catch(n){$e(t,t.return,n)}}}function Pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qa(e)}catch(n){$e(t,t.return,n)}}function Rw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zf),t;default:throw Error(u(435,e.tag))}}function al(e,t){var n=Rw(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var a=Xw.bind(null,e,r);r.then(a,a)}})}function Ut(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a],h=e,y=t,x=y;e:for(;x!==null;){switch(x.tag){case 27:if(Ar(x.type)){it=x.stateNode,Jt=!1;break e}break;case 5:it=x.stateNode,Jt=!1;break e;case 3:case 4:it=x.stateNode.containerInfo,Jt=!0;break e}x=x.return}if(it===null)throw Error(u(160));Wf(h,y,i),it=null,Jt=!1,h=i.alternate,h!==null&&(h.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)em(t,e,n),t=t.sibling}var xn=null;function em(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var i=0;i<r.length;i++){var h=r[i];h.ref.impl=h.nextImpl}Ut(t,e,n),Lt(e),a&4&&(vr(3,e,e.return),Oi(3,e),vr(5,e,e.return));break;case 1:Ut(t,e,n),Lt(e),a&512&&(Ve||r===null||Rt(r,r.return)),a&64&&xt&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=xn,Ut(t,e,n),Lt(e),a&512&&(Ve||r===null||Rt(r,r.return)),a&4)if(a=r!==null?r.memoizedState:null,n=e.memoizedState,r===null)if(n===null)if(e.stateNode===null)if(xt)e.stateNode=jm(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,a=i.ownerDocument||i;t:switch(t){case"title":r=a.getElementsByTagName("title")[0],(!r||r[ri]||r[Mt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector("head > title"))),Ht(r,t,n),r[Mt]=e,kt(r),t=r;break e;case"link":if(i=ly("link","href",a).get(t+(n.href||""))){for(h=0;h<i.length;h++)if(r=i[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(h,1);break t}}r=a.createElement(t),Ht(r,t,n),a.head.appendChild(r);break;case"meta":if(i=ly("meta","content",a).get(t+(n.content||""))){for(h=0;h<i.length;h++)if(r=i[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(h,1);break t}}r=a.createElement(t),Ht(r,t,n),a.head.appendChild(r);break;default:throw Error(u(468,t))}r[Mt]=e,kt(r),t=r}e.stateNode=t}else xt||oh(i,e.type,e.stateNode);else e.stateNode=oy(i,n,e.memoizedProps);else a!==n?(a===null?(t=r.stateNode,t===null||Ve||t.parentNode.removeChild(t)):a.count--,n===null?xt||oh(i,e.type,e.stateNode):oy(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&cu(e,e.memoizedProps,r.memoizedProps);break;case 27:Ut(t,e,n),Lt(e),a&512&&(Ve||r===null||Rt(r,r.return)),r!==null&&a&4&&cu(e,e.memoizedProps,r.memoizedProps);break;case 5:if(i=Yn,Yn=!1,Ut(t,e,n),Yn=i,Lt(e),a&512&&(Ve||r===null||Rt(r,r.return)),e.flags&32){t=e.stateNode;try{ua(t,""),Ze=!0}catch(Y){$e(e,e.return,Y)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,cu(e,t,r!==null?r.memoizedProps:t)),a&1024&&(vu=!0);break;case 6:if(Ut(t,e,n),Lt(e),a&4){if(e.stateNode===null)throw Error(u(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Ze=!0}catch(Y){$e(e,e.return,Y)}}break;case 3:if(Ze=!1,vl=null,i=xn,xn=qi(t.containerInfo),Ut(t,e,n),xn=i,Lt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Qa(t.containerInfo)}catch(Y){$e(e,e.return,Y)}vu&&(vu=!1,tm(e)),Ze=!1;break;case 4:a=Yn,Yn=xt,r=bc(),i=xn,xn=qi(e.stateNode.containerInfo),Ut(t,e,n),Lt(e),xn=i,Ze&&Ci&&(nl=!0),Ze=r,Yn=a;break;case 12:Ut(t,e,n),Lt(e);break;case 31:Ut(t,e,n),Lt(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,al(e,t)));break;case 13:Ut(t,e,n),Lt(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ll=U()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,al(e,t)));break;case 22:i=e.memoizedState!==null,h=r!==null&&r.memoizedState!==null;var y=xt,x=Ve,N=Yn;xt=y||i,Yn=N||i,Ve=x||h,Ut(t,e,n),Ve=x,Yn=N,xt=y,Lt(e),a&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||r===null||h||xt||Ve||(t=h||Ve,n=xt,r=Ve,xt=i||xt,Ve=t,br(e,2),xt=n,Ve=r),!i&&Yn||ku(e,i)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,al(e,n))));break;case 19:Ut(t,e,n),Lt(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,al(e,t)));break;case 30:a&512&&(Ve||r===null||Rt(r,r.return)),a=bc(),i=Ci,h=(n&335544064)===n,y=e.memoizedProps,Ci=h&&Zn(y.default,y.update)!=="none",Ut(t,e,n),Lt(e),h&&r!==null&&Ze&&(e.flags|=4),Ci=i,Ze=a;break;case 21:break;case 7:a&512&&(Ve||r===null||Rt(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ut(t,e,n),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Bf(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(uu(a)){var i=a.stateNode;r===null?r=[i]:r.push(i)}if(su(a))break;a=a.return}var h=r;if(n==null)throw Error(u(160));switch(n.tag){case 27:var y=n.stateNode,x=du(e);$o(e,x,y,h);break;case 5:var N=n.stateNode;n.flags&32&&(ua(N,""),n.flags&=-33);var Y=du(e);$o(e,Y,N,h);break;case 3:case 4:var Q=n.stateNode.containerInfo,I=du(e);fu(e,I,Q,h);break;default:throw Error(u(161))}}catch(D){$e(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;tm(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Fa=!0,t.reset(),Fa=!1),e=e.sibling}}function Ma(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)nm(t,e),t=t.sibling;else Qf(t)}function nm(e,t){var n=e.alternate;if(n===null)mu(e,!1);else switch(e.tag){case 3:if(bu=jn=!1,Lf(),Ma(t,e),!jn&&!nl){if(e=Dn,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var a=e[r+1];Gm(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),bu=!0}Dn=null;break;case 5:Ma(t,e);break;case 4:r=jn,jn=!1,Ma(t,e),jn&&(nl=!0),jn=r;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?mu(e,!1):Ma(t,e));break;case 30:r=jn,a=Lf(),jn=!1,Ma(t,e),jn&&(e.flags|=4);var i=e.memoizedProps,h=e.stateNode;t=Qn(i,h),h=Qn(n.memoizedProps,h);var y=Zn(i.default,i.update);y==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,Vt=0,t=wu(e,n,t,h,y,i,!0),Vt!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(_a(e,e.memoizedProps.onUpdate),Dn=a):a!==null&&(a.push.apply(a,Dn),Dn=a),jn=(e.flags&32)!==0?!0:r;break;default:Ma(t,e)}}function zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kf(e,t.alternate,t),t=t.sibling}function br(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:vr(4,n,n.return),br(n,r);break;case 1:Rt(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jf(n,n.return,a),br(n,r);break;case 27:(r&2)!==0&&ty(n.stateNode,n.type,n.memoizedProps);case 5:Rt(n,n.return),n.tag!==5&&n.tag!==27||Ni(n),br(n,r);break;case 6:Ni(n);break;case 26:Rt(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Ve||a.parentNode.removeChild(a),br(n,r);break;case 22:n.memoizedState===null&&br(n,r);break;case 30:Rt(n,n.return),br(n,r);break;case 7:Rt(n,n.return);default:br(n,r)}e=e.sibling}}function Tn(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var r=t.alternate,a=e,i=t,h=i.flags,y=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:Tn(a,i,n),Oi(4,i);break;case 1:if(Tn(a,i,n),r=i,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(Y){$e(r,r.return,Y)}if(r=i,a=r.updateQueue,a!==null){var x=r.stateNode;try{var N=a.shared.hiddenCallbacks;if(N!==null)for(a.shared.hiddenCallbacks=null,a=0;a<N.length;a++)xd(N[a],x)}catch(Y){$e(r,r.return,Y)}}y&&h&64&&Yf(i),Hn(i,i.return);break;case 27:(n&2)!==0&&qf(i);case 5:i.tag!==5&&i.tag!==27||zf(i),Tn(a,i,n),y&&r===null&&h&4&&hu(i),Hn(i,i.return);break;case 6:zf(i);break;case 26:x=i.stateNode,i.memoizedState!==null||x===null||xt||oh(qi(x.ownerDocument),i.type,x),Tn(a,i,n),y&&r===null&&h&4&&hu(i),Hn(i,i.return);break;case 12:Tn(a,i,n);break;case 31:Tn(a,i,n),y&&h&4&&$f(a,i);break;case 13:Tn(a,i,n),y&&h&4&&Pf(a,i);break;case 22:i.memoizedState===null&&Tn(a,i,n),Hn(i,i.return);break;case 30:Tn(a,i,n),Hn(i,i.return);break;case 7:Hn(i,i.return);default:Tn(a,i,n)}t=t.sibling}}function xu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&gi(n))}function Tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gi(e))}function pn(e,t,n,r){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)rm(e,t,n,r),t=t.sibling;else a&&Ff(t)}function rm(e,t,n,r){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&tl(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:pn(e,t,n,r),i&2048&&Oi(9,t);break;case 1:pn(e,t,n,r);break;case 3:pn(e,t,n,r),a&&bu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&gi(i)));break;case 12:if(i&2048){pn(e,t,n,r),i=t.stateNode;try{var h=t.memoizedProps,y=h.id,x=h.onPostCommit;typeof x=="function"&&x(y,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(N){$e(t,t.return,N)}}else pn(e,t,n,r);break;case 31:pn(e,t,n,r);break;case 13:pn(e,t,n,r);break;case 23:break;case 22:h=t.stateNode,y=t.alternate,t.memoizedState!==null?(a&&y!==null&&y.memoizedState===null&&tl(y),h._visibility&2?pn(e,t,n,r):Ri(e,t)):(a&&y!==null&&y.memoizedState!==null&&tl(t),h._visibility&2?pn(e,t,n,r):(h._visibility|=2,Oa(e,t,n,r,(t.subtreeFlags&10256)!==0||!1))),i&2048&&xu(y,t);break;case 24:pn(e,t,n,r),i&2048&&Tu(t.alternate,t);break;case 30:a&&(i=t.alternate,i!==null&&(_n(i.child,!0),_n(t.child,!0))),pn(e,t,n,r);break;default:pn(e,t,n,r)}}function Oa(e,t,n,r,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,h=t,y=n,x=r,N=h.flags;switch(h.tag){case 0:case 11:case 15:Oa(i,h,y,x,a),Oi(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?Oa(i,h,y,x,a):Ri(i,h):(Y._visibility|=2,Oa(i,h,y,x,a)),a&&N&2048&&xu(h.alternate,h);break;case 24:Oa(i,h,y,x,a),a&&N&2048&&Tu(h.alternate,h);break;default:Oa(i,h,y,x,a)}t=t.sibling}}function Ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Ri(n,r),a&2048&&xu(r.alternate,r);break;case 24:Ri(n,r),a&2048&&Tu(r.alternate,r);break;default:Ri(n,r)}t=t.sibling}}var Wr=8192;function $r(e,t,n){if(e.subtreeFlags&Wr)for(e=e.child;e!==null;)am(e,t,n),e=e.sibling}function am(e,t,n){switch(e.tag){case 26:$r(e,t,n),e.flags&Wr&&(e.memoizedState!==null?zv(n,xn,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&cy(n,e)));break;case 5:$r(e,t,n),e.flags&Wr&&(e=e.stateNode,(t&335544128)===t&&cy(n,e));break;case 3:case 4:var r=xn;xn=qi(e.stateNode.containerInfo),$r(e,t,n),xn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wr,Wr=16777216,$r(e,t,n),Wr=r):$r(e,t,n));break;case 30:if((e.flags&Wr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var a=e.stateNode;a.paired=null,on===null&&(on=new Map),on.set(r,a)}$r(e,t,n);break;default:$r(e,t,n)}}function im(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Tt=r,lm(r,e)}im(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)om(e),e=e.sibling}function om(e){switch(e.tag){case 0:case 11:case 15:Hi(e),e.flags&2048&&vr(9,e,e.return);break;case 3:Hi(e);break;case 12:Hi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,il(e)):Hi(e);break;default:Hi(e)}}function il(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Tt=r,lm(r,e)}im(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vr(8,t,t.return),il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,il(t));break;default:il(t)}e=e.sibling}}function lm(e,t){for(;Tt!==null;){var n=Tt;switch(n.tag){case 0:case 11:case 15:vr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:gi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Tt=r;else e:for(n=e;Tt!==null;){r=Tt;var a=r.sibling,i=r.return;if(Jf(r),r===n){Tt=null;break e}if(a!==null){a.return=i,Tt=a;break e}Tt=i}}}var Hw={getCacheForType:function(e){var t=Ot(ft),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ot(ft).controller.signal}},Dw=typeof WeakMap=="function"?WeakMap:Map,Ke=0,tt=null,ze=null,Ue=0,We=0,ln=null,kr=!1,Na=!1,Eu=!1,nr=0,ht=0,Sr=0,Pr=0,ol=0,sn=0,Ca=0,Di=null,Wt=null,Au=!1,ll=0,sm=0,sl=1/0,ul=null,xr=null,lt=0,En=null,ea=null,Bn=0,Iu=0,Mu=null,um=null,Ra=null,Ha=null,Da=null,_i=0,hl=null;function un(){return(Ke&2)!==0&&Ue!==0?Ue&-Ue:le.T!==null?zu():cc()}function hm(){if(sn===0)if((Ue&536870912)===0||Ye){var e=ro;ro<<=1,(ro&3932160)===0&&(ro=262144),sn=e}else sn=536870912;return e=Nt.current,e!==null&&(e.flags|=32),sn}function _a(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Xm(Qn(e.memoizedProps,n))),Ha===null&&(Ha=[]),Ha.push(t.bind(null,r))}}function $t(e,t,n){(e===tt&&(We===2||We===9)||e.cancelPendingCommit!==null)&&(Ya(e,0),Tr(e,Ue,sn,!1)),ni(e,n),((Ke&2)===0||e!==tt)&&(e===tt&&((Ke&2)===0&&(Pr|=n),ht===4&&Tr(e,Ue,sn,!1)),qn(e))}function cm(e,t,n){if((Ke&6)!==0)throw Error(u(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ti(e,t),a=r?jw(e,t):Nu(e,t,!0),i=r;do{if(a===0){Na&&!r&&Tr(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!_w(n)){a=Nu(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;a=Di;var x=y.current.memoizedState.isDehydrated;if(x&&(Ya(y,h).flags|=256),h=Nu(y,h,!1),h!==2&&h!==6){if(Eu&&!x){y.errorRecoveryDisabledLanes|=i,Pr|=i,a=4;break e}i=Wt,Wt=a,i!==null&&(Wt===null?Wt=i:Wt.push.apply(Wt,i))}a=h}if(i=!1,a!==2)continue}}if(a===1){Ya(e,0),Tr(e,t,0,!0);break}e:{switch(r=e,i=a,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Tr(r,t,sn,!kr);break e;case 2:Wt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(a=ll+300-U(),10<a)){if(Tr(r,t,sn,!kr),io(r,0,!0)!==0)break e;Bn=t,r.timeoutHandle=Vu(dm.bind(null,r,n,Wt,ul,Au,t,sn,Pr,Ca,kr,i,"Throttled",-0,0),a);break e}dm(r,n,Wt,ul,Au,t,sn,Pr,Ca,kr,i,null,-0,0)}}break}while(!0);qn(e)}function dm(e,t,n,r,a,i,h,y,x,N,Y,Q,I,D){e.timeoutHandle=-1;var ie=t.subtreeFlags,fe=(i&335544064)===i;if(Q=null,(fe||ie&8192||(ie&16785408)===16785408)&&(Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},on=null,am(t,i,Q),fe&&(ie=Q,fe=e.containerInfo,fe=(fe.nodeType===9?fe:fe.ownerDocument).__reactViewTransition,fe!=null&&(ie.count++,ie.waitingForViewTransition=!0,ie=Gi.bind(ie),fe.finished.then(ie,ie))),ie=(i&62914560)===i?ll-U():(i&4194048)===i?sm-U():0,ie=Bv(Q,ie),ie!==null)){Bn=i,e.cancelPendingCommit=ie(bm.bind(null,e,t,i,n,r,a,h,y,x,N,Y,Q,null,I,D)),Tr(e,i,h,!N);return}bm(e,t,i,n,r,a,h,y,x,N,Y,Q)}function _w(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!rn(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tr(e,t,n,r){t=oc(e,t),t&=~ol,t&=~Pr,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var i=31-tn(a),h=1<<i;r[i]=-1,a&=~h}n!==0&&sc(e,n,t)}function cl(){return(Ke&6)===0?(Yi(0),!1):!0}function Ou(){if(ze!==null){if(We===0)var e=ze.return;else e=ze,Jn=Ur=null,js(e),Sa=null,vi=0,e=ze;for(;e!==null;)_f(e.alternate,e),e=e.return;ze=null}}function Ya(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,iv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Bn=0,Ou(),tt=e,ze=n=Kn(e.current,null),Ue=t,We=0,ln=null,kr=!1,Na=ti(e,t),Eu=!1,Ca=sn=ol=Pr=Sr=ht=0,Wt=Di=null,Au=!1,nr=oc(e,t),vo(),n}function fm(e,t){He=null,le.H=Xo,t===ka||t===No?(t=vd(),We=3):t===Ts?(t=vd(),We=4):We=t===$s?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ln=t,ze===null&&(ht=1,Fo(e,fn(t,e.current)))}function mm(){var e=Nt.current;return e===null?!0:(Ue&4194048)===Ue?Yt===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===Yt:!1}function ym(){var e=le.H;return le.H=Xo,e===null?Xo:e}function gm(){var e=le.A;return le.A=Hw,e}function dl(){ht=4,kr||(Ue&4194048)!==Ue&&Nt.current!==null||(Na=!0),(Sr&134217727)===0&&(Pr&134217727)===0||tt===null||Tr(tt,Ue,sn,!1)}function Nu(e,t,n){var r=Ke;Ke|=2;var a=ym(),i=gm();(tt!==e||Ue!==t)&&(ul=null,Ya(e,t)),t=!1;var h=ht;e:do try{if(We!==0&&ze!==null){var y=ze,x=ln;switch(We){case 8:Ou(),h=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var N=We;if(We=0,ln=null,ja(e,y,x,N),n&&Na){h=0;break e}break;default:N=We,We=0,ln=null,ja(e,y,x,N)}}Yw(),h=ht;break}catch(Y){fm(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Jn=Ur=null,Ke=r,le.H=a,le.A=i,ze===null&&(tt=null,Ue=0,vo()),h}function Yw(){for(;ze!==null;)pm(ze)}function jw(e,t){var n=Ke;Ke|=2;var r=ym(),a=gm();tt!==e||Ue!==t?(ul=null,sl=U()+500,Ya(e,t)):Na=ti(e,t);e:do try{if(We!==0&&ze!==null){t=ze;var i=ln;t:switch(We){case 1:We=0,ln=null,ja(e,t,i,1);break;case 2:case 9:if(pd(i)){We=0,ln=null,wm(t);break}t=function(){We!==2&&We!==9||tt!==e||(We=7),qn(e)},i.then(t,t);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:pd(i)?(We=0,ln=null,wm(t)):(We=0,ln=null,ja(e,t,i,7));break;case 5:var h=null;switch(ze.tag){case 26:h=ze.memoizedState;case 5:case 27:var y=ze;if(h?uy(h):y.stateNode.complete){We=0,ln=null;var x=y.sibling;if(x!==null)ze=x;else{var N=y.return;N!==null?(ze=N,fl(N)):ze=null}break t}}We=0,ln=null,ja(e,t,i,5);break;case 6:We=0,ln=null,ja(e,t,i,6);break;case 8:Ou(),ht=6;break e;default:throw Error(u(462))}}zw();break}catch(Y){fm(e,Y)}while(!0);return Jn=Ur=null,le.H=r,le.A=a,Ke=n,ze!==null?0:(tt=null,Ue=0,vo(),ht)}function zw(){for(;ze!==null&&!B();)pm(ze)}function pm(e){var t=Hf(e.alternate,e,nr);e.memoizedProps=e.pendingProps,t===null?fl(e):ze=t}function wm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Af(n,t,t.pendingProps,t.type,void 0,Ue);break;case 11:t=Af(n,t,t.pendingProps,t.type.render,t.ref,Ue);break;case 5:js(t);var r=t;r===St&&(Ye?(Eo(r),r.tag===5&&r.stateNode!=null&&(nt=r.stateNode)):(Eo(r),Ye=!0));default:_f(n,t),t=ze=od(t,nr),t=Hf(n,t,nr)}e.memoizedProps=e.pendingProps,t===null?fl(e):ze=t}function ja(e,t,n,r){Jn=Ur=null,js(t),Sa=null,vi=0;var a=t.return;try{if(Ew(e,a,t,n,Ue)){ht=1,Fo(e,fn(n,e.current)),ze=null;return}}catch(i){if(a!==null)throw ze=a,i;ht=1,Fo(e,fn(n,e.current)),ze=null;return}t.flags&32768?(Ye||r===1?e=!0:Na||(Ue&536870912)!==0?e=!1:(kr=e=!0,(r===2||r===9||r===3||r===6)&&(r=Nt.current,r!==null&&r.tag===13&&(r.flags|=16384))),vm(t,e)):fl(t)}function fl(e){var t=e;do{if((t.flags&32768)!==0){vm(t,kr);return}e=t.return;var n=Ow(t.alternate,t,nr);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);ht===0&&(ht=5)}function vm(e,t){do{var n=Nw(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);ht=6,ze=null}function bm(e,t,n,r,a,i,h,y,x,N,Y,Q){e.cancelPendingCommit=null;do ml();while(lt!==0);if((Ke&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));e===tt&&(ze=tt=null,Ue=0),ea=t,En=e,Bn=n,Mu=a,um=r,Bw(e,t,n,h,y,x,Q)}}function Bw(e,t,n,r,a,i,h){var y=t.lanes|t.childLanes;if(Iu=y,y|=cs,cp(e,n,y,r,a,i),Ha=null,(n&335544064)===n?(Da=fw(e),r=10262):(Da=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Fw(de,function(){return Du(),null})):(e.callbackNode=null,e.callbackPriority=0),Po=!1,r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=le.T,le.T=null,a=ge.p,ge.p=2,i=Ke,Ke|=4;try{Cw(e,t,n)}finally{Ke=i,ge.p=a,le.T=r}}lt=1,Po?Ra=cv(h,e.containerInfo,Da,Cu,Ru,Uw,Hu,Du,qw):(Cu(),Ru(),Hu())}function qw(e){if(lt!==0){var t=En.onRecoverableError;t(e,{componentStack:null})}}function Uw(){lt===3&&(lt=0,nm(ea,En),lt=4)}function Cu(){if(lt===1){lt=0;var e=En,t=ea,n=Bn,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=le.T,le.T=null;var a=ge.p;ge.p=2;var i=Ke;Ke|=4;try{Ci=nl=!1,em(t,e,n),n=Qu;var h=Jc(e.containerInfo),y=n.focusedElem,x=n.selectionRange;if(h!==y&&y&&y.ownerDocument&&Vc(y.ownerDocument.documentElement,y)){if(x!==null&&os(y)){var N=x.start,Y=x.end;if(Y===void 0&&(Y=N),"selectionStart"in y)y.selectionStart=N,y.selectionEnd=Math.min(Y,y.value.length);else{var Q=y.ownerDocument||document,I=Q&&Q.defaultView||window;if(I.getSelection){var D=I.getSelection(),ie=y.textContent.length,fe=Math.min(x.start,ie),De=x.end===void 0?fe:Math.min(x.end,ie);!D.extend&&fe>De&&(h=De,De=fe,fe=h);var O=Kc(y,fe),E=Kc(y,De);if(O&&E&&(D.rangeCount!==1||D.anchorNode!==O.node||D.anchorOffset!==O.offset||D.focusNode!==E.node||D.focusOffset!==E.offset)){var R=Q.createRange();R.setStart(O.node,O.offset),D.removeAllRanges(),fe>De?(D.addRange(R),D.extend(E.node,E.offset)):(R.setEnd(E.node,E.offset),D.addRange(R))}}}}for(Q=[],D=y;D=D.parentNode;)D.nodeType===1&&Q.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Q.length;y++){var F=Q[y];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}Fa=!!Fu,Qu=Fu=null}finally{Ke=i,ge.p=a,le.T=r}}e.current=t,lt=2}}function Ru(){if(lt===2){lt=0;var e=En,t=ea,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=le.T,le.T=null;var r=ge.p;ge.p=2;var a=Ke;Ke|=4;try{Kf(e,t.alternate,t)}finally{Ke=a,ge.p=r,le.T=n}}lt=3}}function Hu(){if(lt===4||lt===3){lt=0;var e=Ra;Ra=null,L();var t=En,n=ea,r=Bn,a=um,i=(r&335544064)===r?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?lt=5:(lt=0,ea=En=null,km(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(xr=null),Ll(r),n=n.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(en,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=le.T,i=ge.p,ge.p=2,le.T=null;try{for(var h=t.onRecoverableError,y=0;y<a.length;y++){var x=a[y];h(x.value,{componentStack:x.stack})}}finally{le.T=n,ge.p=i}}if(a=Ha,h=Da,Da=null,a!==null&&(Ha=null,h===null&&(h=[]),e!==null))for(x=0;x<a.length;x++)n=(0,a[x])(h),n!==void 0&&e.finished.finally(n);(Bn&3)!==0&&ml(),qn(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===hl?_i++:(_i=0,hl=t):(_i=0,hl=null),Yi(0)}}function km(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gi(t)))}function ml(){return Ra!==null&&(Ra.skipTransition(),Ra=null),Cu(),Ru(),Hu(),Du()}function Du(){if(lt!==5)return!1;var e=En,t=Iu;Iu=0;var n=Ll(Bn),r=le.T,a=ge.p;try{ge.p=32>n?32:n,le.T=null,n=Mu,Mu=null;var i=En,h=Bn;if(lt=0,ea=En=null,Bn=0,(Ke&6)!==0)throw Error(u(331));var y=Ke;if(Ke|=4,om(i.current),rm(i,i.current,h,n),Ke=y,Yi(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(en,i)}catch{}return!0}finally{ge.p=a,le.T=r,km(e,t)}}function Sm(e,t,n){t=fn(n,t),t=Ws(e.stateNode,t,2),e=yr(e,t,2),e!==null&&(ni(e,2),qn(e))}function $e(e,t,n){if(e.tag===3)Sm(e,e,n);else for(;t!==null;){if(t.tag===3){Sm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){e=fn(n,e),n=wf(2),r=yr(t,n,2),r!==null&&(vf(n,r,t,e),ni(r,2),qn(r));break}}t=t.return}}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dw;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(Eu=!0,a.add(n),e=Lw.bind(null,e,t,n),t.then(e,e))}function Lw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tt===e&&(Ue&n)===n&&((ht===4||ht===3&&(Ue&62914560)===Ue&&300>U()-ll)&&(Ke&2)===0?Ya(e,0):ol|=n,Ca===Ue&&(Ca=0)),qn(e)}function xm(e,t){t===0&&(t=lc()),e=zr(e,t),e!==null&&(ni(e,t),qn(e))}function Gw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xm(e,n)}function Xw(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(u(314))}r!==null&&r.delete(t),xm(e,n)}function Fw(e,t){return H(e,t)}var za=null,Ba=null,Yu=!1,yl=!1,ju=!1,Er=0;function qn(e){e!==Ba&&e.next===null&&(Ba===null?za=Ba=e:Ba=Ba.next=e),yl=!0,Yu||(Yu=!0,Zw())}function Yi(e,t){if(!ju&&yl){ju=!0;do for(var n=!1,r=za;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var i=0;else{var h=r.suspendedLanes,y=r.pingedLanes;i=(1<<31-tn(42|e)+1)-1,i&=a&~(h&~y),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Im(r,i))}else i=Ue,i=io(r,r===tt?i:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(i&3)===0||ti(r,i)||(n=!0,Im(r,i));r=r.next}while(n);ju=!1}}function Qw(){Tm()}function Tm(){yl=Yu=!1;var e=0;Er!==0&&av()&&(e=Er);for(var t=U(),n=null,r=za;r!==null;){var a=r.next,i=Em(r,t);i===0?(r.next=null,n===null?za=a:n.next=a,a===null&&(Ba=n)):(n=r,(e!==0||(i&3)!==0)&&(yl=!0)),r=a}lt!==0&&lt!==5||Yi(e),Er!==0&&(Er=0)}function Em(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var h=31-tn(i),y=1<<h,x=a[h];x===-1?((y&n)===0||(y&r)!==0)&&(a[h]=hp(y,t)):x<=t&&(e.expiredLanes|=y),i&=~y}if(t=tt,n=Ue,n=io(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(We===2||We===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&T(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ti(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&T(r),Ll(n)){case 2:case 8:n=oe;break;case 32:n=de;break;case 268435456:n=Ae;break;default:n=de}return r=Am.bind(null,e),n=H(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&T(r),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ml()&&e.callbackNode!==n)return null;var r=Ue;return r=io(e,e===tt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(cm(e,r,t),Em(e,U()),e.callbackNode!=null&&e.callbackNode===n?Am.bind(null,e):null)}function Im(e,t){if(ml())return null;cm(e,t,!0)}function Zw(){ov(function(){(Ke&6)!==0?H(J,Qw):Tm()})}function zu(){if(Er===0){var e=Xr;e===0&&(e=no,no<<=1,(no&261888)===0&&(no=256)),Er=e}return Er}function Mm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ho(e)}function Kw(e,t,n,r,a){if(t==="submit"&&n&&n.stateNode===a){var i=Mm((a[Zt]||null).action),h=r.submitter;h&&(t=(t=h[Zt]||null)?Mm(t.formAction):h.getAttribute("formAction"),t!==null&&(i=t,h=null));var y=new yo("action","action",null,r,a);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Er!==0){var x=new FormData(a,h);Qs(n,{pending:!0,data:x,method:a.method,action:i},null,x)}}else typeof i=="function"&&(y.preventDefault(),x=new FormData(a,h),Qs(n,{pending:!0,data:x,method:a.method,action:i},i,x))},currentTarget:a}]})}}for(var Bu=0;Bu<hs.length;Bu++){var qu=hs[Bu],Vw=qu.toLowerCase(),Jw=qu[0].toUpperCase()+qu.slice(1);kn(Vw,"on"+Jw)}kn(Pc,"onAnimationEnd"),kn(ed,"onAnimationIteration"),kn(td,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(iw,"onTransitionRun"),kn(ow,"onTransitionStart"),kn(lw,"onTransitionCancel"),kn(nd,"onTransitionEnd"),la("onMouseEnter",["mouseout","mouseover"]),la("onMouseLeave",["mouseout","mouseover"]),la("onPointerEnter",["pointerout","pointerover"]),la("onPointerLeave",["pointerout","pointerover"]),_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_r("onBeforeInput",["compositionend","keypress","textInput","paste"]),_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ww=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ji));function Om(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var h=r.length-1;0<=h;h--){var y=r[h],x=y.instance,N=y.currentTarget;if(y=y.listener,x!==i&&a.isPropagationStopped())break e;i=y,a.currentTarget=N;try{i(a)}catch(Y){wo(Y)}a.currentTarget=null,i=x}else for(h=0;h<r.length;h++){if(y=r[h],x=y.instance,N=y.currentTarget,y=y.listener,x!==i&&a.isPropagationStopped())break e;i=y,a.currentTarget=N;try{i(a)}catch(Y){wo(Y)}a.currentTarget=null,i=x}}}}function Be(e,t){var n=t[fc];n===void 0&&(n=t[fc]=new Set);var r=e+"__bubble";n.has(r)||(Nm(t,e,2,!1),n.add(r))}function Uu(e,t,n){var r=0;t&&(r|=4),Nm(n,e,r,t)}var gl="_reactListening"+Math.random().toString(36).slice(2);function Lu(e){if(!e[gl]){e[gl]=!0,gc.forEach(function(n){n!=="selectionchange"&&(Ww.has(n)||Uu(n,!1,e),Uu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gl]||(t[gl]=!0,Uu("selectionchange",!1,t))}}function Nm(e,t,n,r){switch(vy(t)){case 2:var a=Gv;break;case 8:a=Xv;break;default:a=sh}n=a.bind(null,t,n,e),a=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Gu(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var y=r.stateNode.containerInfo;if(y===a)break;if(h===4)for(h=r.return;h!==null;){var x=h.tag;if((x===3||x===4)&&h.stateNode.containerInfo===a)return;h=h.return}for(;y!==null;){if(h=Dr(y),h===null)return;if(x=h.tag,x===5||x===6||x===26||x===27){r=i=h;continue e}y=y.parentNode}}r=r.return}Oc(function(){var N=i,Y=Kl(n),Q=[];e:{var I=rd.get(e);if(I!==void 0){var D=yo,ie=e;switch(e){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":D=_p;break;case"focusin":ie="focus",D=es;break;case"focusout":ie="blur",D=es;break;case"beforeblur":case"afterblur":D=es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=qp;break;case Pc:case ed:case td:D=Ap;break;case nd:D=Lp;break;case"scroll":case"scrollend":D=kp;break;case"wheel":D=Xp;break;case"copy":case"cut":case"paste":D=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Dc;break;case"submit":D=zp;break;case"toggle":case"beforetoggle":D=Qp}var fe=(t&4)!==0,De=!fe&&(e==="scroll"||e==="scrollend"),O=fe?I!==null?I+"Capture":null:I;fe=[];for(var E=N,R;E!==null;){var F=E;if(R=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||R===null||O===null||(F=ii(E,O),F!=null&&fe.push(zi(E,F,R))),De)break;E=E.return}0<fe.length&&(I=new D(I,ie,null,n,Y),Q.push({event:I,listeners:fe}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",D&&n!==Zl&&(ie=n.relatedTarget||n.fromElement)&&(Dr(ie)||ie[aa]))break e;(I||D)&&(ie=Y.window===Y?Y:(D=Y.ownerDocument)?D.defaultView||D.parentWindow:window,I?(D=n.relatedTarget||n.toElement,I=N,D=D?Dr(D):null,D!==null&&(De=f(D),fe=D.tag,D!==De||fe!==5&&fe!==27&&fe!==6)&&(D=null)):(I=null,D=N),I!==D&&(fe=Rc,F="onMouseLeave",O="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Dc,F="onPointerLeave",O="onPointerEnter",E="pointer"),De=I==null?ie:ai(I),R=D==null?ie:ai(D),ie=new fe(F,E+"leave",I,n,Y),ie.target=De,ie.relatedTarget=R,F=null,Dr(Y)===N&&(fe=new fe(O,E+"enter",D,n,Y),fe.target=R,fe.relatedTarget=De,F=fe),De=F,fe=I&&D?Me(I,D,$w):null,I!==null&&Cm(Q,ie,I,fe,!1),D!==null&&De!==null&&Cm(Q,De,D,fe,!0)))}e:{if(I=N?ai(N):window,D=I.nodeName&&I.nodeName.toLowerCase(),D==="select"||D==="input"&&I.type==="file")var ue=Lc;else if(qc(I))if(Gc)ue=nw;else{ue=ew;var Le=Pp}else D=I.nodeName,!D||D.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?N&&Ql(N.elementType)&&(ue=Lc):ue=tw;if(ue&&(ue=ue(e,N))){Uc(Q,ue,n,Y);break e}Le&&Le(e,I,N)}switch(Le=N?ai(N):window,e){case"focusin":(qc(Le)||Le.contentEditable==="true")&&(fa=Le,ls=N,fi=null);break;case"focusout":fi=ls=fa=null;break;case"mousedown":ss=!0;break;case"contextmenu":case"mouseup":case"dragend":ss=!1,Wc(Q,n,Y);break;case"selectionchange":if(aw)break;case"keydown":case"keyup":Wc(Q,n,Y)}var ve;if(ns)e:{switch(e){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else da?zc(e,n)&&(Ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ie="onCompositionStart");Ie&&(_c&&n.locale!=="ko"&&(da||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&da&&(ve=Nc()):(or=Y,Wl="value"in or?or.value:or.textContent,da=!0)),Le=pl(N,Ie),0<Le.length&&(Ie=new Hc(Ie,e,null,n,Y),Q.push({event:Ie,listeners:Le}),ve?Ie.data=ve:(ve=Bc(n),ve!==null&&(Ie.data=ve)))),(ve=Kp?Vp(e,n):Jp(e,n))&&(Ie=pl(N,"onBeforeInput"),0<Ie.length&&(Le=new Hc("onBeforeInput","beforeinput",null,n,Y),Q.push({event:Le,listeners:Ie}),Le.data=ve)),Kw(Q,e,N,n,Y)}Om(Q,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ii(e,n),a!=null&&r.unshift(zi(e,a,i)),a=ii(e,t),a!=null&&r.push(zi(e,a,i))),e.tag===3)return r;e=e.return}return[]}function $w(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cm(e,t,n,r,a){for(var i=t._reactName,h=[];n!==null&&n!==r;){var y=n,x=y.alternate,N=y.stateNode;if(y=y.tag,x!==null&&x===r)break;y!==5&&y!==26&&y!==27||N===null||(x=N,a?(N=ii(n,i),N!=null&&h.unshift(zi(n,N,x))):a||(N=ii(n,i),N!=null&&h.push(zi(n,N,x)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Pw=/\r\n?/g,ev=/\u0000|\uFFFD/g;function Rm(e){return(typeof e=="string"?e:""+e).replace(Pw,`
`).replace(ev,"")}function Hm(e,t){return t=Rm(t),Rm(e)===t}function Pe(e,t,n,r,a,i){switch(n){case"children":if(typeof r=="string")t==="body"||t==="textarea"&&r===""||ua(e,r);else if(typeof r=="number"||typeof r=="bigint")t!=="body"&&ua(e,""+r);else return;break;case"className":uo(e,"class",r);break;case"tabIndex":uo(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":uo(e,n,r);break;case"style":Ic(e,r,i);return;case"data":if(t!=="object"){uo(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=ho(r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Pe(e,t,"name",a.name,a,null),Pe(e,t,"formEncType",a.formEncType,a,null),Pe(e,t,"formMethod",a.formMethod,a,null),Pe(e,t,"formTarget",a.formTarget,a,null)):(Pe(e,t,"encType",a.encType,a,null),Pe(e,t,"method",a.method,a,null),Pe(e,t,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=ho(r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=Nn);return;case"onScroll":r!=null&&Be("scroll",e);return;case"onScrollEnd":r!=null&&Be("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(u(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=ho(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Be("beforetoggle",e),Be("toggle",e),so(e,"popover",r);break;case"xlinkActuate":Xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Xn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Xn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Xn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Xn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":so(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=vp.get(n)||n,so(e,n,r);else return}Ze=!0}function Xu(e,t,n,r,a,i){switch(n){case"style":Ic(e,r,i);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(u(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof r=="string")ua(e,r);else if(typeof r=="number"||typeof r=="bigint")ua(e,""+r);else return;break;case"onScroll":r!=null&&Be("scroll",e);return;case"onScrollEnd":r!=null&&Be("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Nn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!pc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),i=n.slice(2,a?n.length-7:void 0),t=e[Zt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,a),typeof r=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,r,a);break e}Ze=!0,n in e?e[n]=r:r===!0?e.setAttribute(n,""):so(e,n,r)}return}Ze=!0}function Ht(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",e),Be("load",e);var r=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Pe(e,t,i,h,n,null)}}a&&Pe(e,t,"srcSet",n.srcSet,n,null),r&&Pe(e,t,"src",n.src,n,null);return;case"input":Be("invalid",e);var y=i=h=a=null,x=null,N=null;for(r in n)if(n.hasOwnProperty(r)){var Y=n[r];if(Y!=null)switch(r){case"name":a=Y;break;case"type":h=Y;break;case"checked":x=Y;break;case"defaultChecked":N=Y;break;case"value":i=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,t));break;default:Pe(e,t,r,Y,n,null)}}xc(e,i,y,x,N,h,a,!1);return;case"select":Be("invalid",e),r=h=i=null;for(a in n)if(n.hasOwnProperty(a)&&(y=n[a],y!=null))switch(a){case"value":i=y;break;case"defaultValue":h=y;break;case"multiple":r=y;default:Pe(e,t,a,y,n,null)}t=i,n=h,e.multiple=!!r,t!=null?sa(e,!!r,t,!1):n!=null&&sa(e,!!r,n,!0);return;case"textarea":Be("invalid",e),i=a=r=null;for(h in n)if(n.hasOwnProperty(h)&&(y=n[h],y!=null))switch(h){case"value":r=y;break;case"defaultValue":a=y;break;case"children":i=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(u(91));break;default:Pe(e,t,h,y,n,null)}Ec(e,r,a,i);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(r=n[x],r!=null))switch(x){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(e,t,x,r,n,null)}return;case"dialog":Be("beforetoggle",e),Be("toggle",e),Be("cancel",e),Be("close",e);break;case"iframe":case"object":Be("load",e);break;case"video":case"audio":for(r=0;r<ji.length;r++)Be(ji[r],e);break;case"image":Be("error",e),Be("load",e);break;case"details":Be("toggle",e);break;case"embed":case"source":case"link":Be("error",e),Be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(r=n[N],r!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Pe(e,t,N,r,n,null)}return;default:if(Ql(t)){for(Y in n)n.hasOwnProperty(Y)&&(r=n[Y],r!==void 0&&Xu(e,t,Y,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&Pe(e,t,y,r,n,null))}var tv={};function nv(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,h=null,y=null,x=null,N=null,Y=null;for(D in n){var Q=n[D];if(n.hasOwnProperty(D)&&Q!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":x=Q;default:r.hasOwnProperty(D)||Pe(e,t,D,null,r,Q)}}for(var I in r){var D=r[I];if(Q=n[I],r.hasOwnProperty(I)&&(D!=null||Q!=null))switch(I){case"type":D!==Q&&(Ze=!0),i=D;break;case"name":D!==Q&&(Ze=!0),a=D;break;case"checked":D!==Q&&(Ze=!0),N=D;break;case"defaultChecked":D!==Q&&(Ze=!0),Y=D;break;case"value":D!==Q&&(Ze=!0),h=D;break;case"defaultValue":D!==Q&&(Ze=!0),y=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:D!==Q&&Pe(e,t,I,D,r,Q)}}Xl(e,h,y,x,N,Y,i,a);return;case"select":D=h=y=I=null;for(i in n)if(x=n[i],n.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":D=x;default:r.hasOwnProperty(i)||Pe(e,t,i,null,r,x)}for(a in r)if(i=r[a],x=n[a],r.hasOwnProperty(a)&&(i!=null||x!=null))switch(a){case"value":i!==x&&(Ze=!0),I=i;break;case"defaultValue":i!==x&&(Ze=!0),y=i;break;case"multiple":i!==x&&(Ze=!0),h=i;default:i!==x&&Pe(e,t,a,i,r,x)}t=y,n=h,r=D,I!=null?sa(e,!!n,I,!1):!!r!=!!n&&(t!=null?sa(e,!!n,t,!0):sa(e,!!n,n?[]:"",!1));return;case"textarea":D=I=null;for(y in n)if(a=n[y],n.hasOwnProperty(y)&&a!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Pe(e,t,y,null,r,a)}for(h in r)if(a=r[h],i=n[h],r.hasOwnProperty(h)&&(a!=null||i!=null))switch(h){case"value":a!==i&&(Ze=!0),I=a;break;case"defaultValue":a!==i&&(Ze=!0),D=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(u(91));break;default:a!==i&&Pe(e,t,h,a,r,i)}Tc(e,I,D);return;case"option":for(var ie in n)if(I=n[ie],n.hasOwnProperty(ie)&&I!=null&&!r.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Pe(e,t,ie,null,r,I)}for(x in r)if(I=r[x],D=n[x],r.hasOwnProperty(x)&&I!==D&&(I!=null||D!=null))switch(x){case"selected":I!==D&&(Ze=!0),e.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Pe(e,t,x,I,r,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)I=n[fe],n.hasOwnProperty(fe)&&I!=null&&!r.hasOwnProperty(fe)&&Pe(e,t,fe,null,r,I);for(N in r)if(I=r[N],D=n[N],r.hasOwnProperty(N)&&I!==D&&(I!=null||D!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(u(137,t));break;default:Pe(e,t,N,I,r,D)}return;default:if(Ql(t)){for(var De in n)I=n[De],n.hasOwnProperty(De)&&I!==void 0&&!r.hasOwnProperty(De)&&Xu(e,t,De,void 0,r,I);for(Y in r)I=r[Y],D=n[Y],!r.hasOwnProperty(Y)||I===D||I===void 0&&D===void 0||Xu(e,t,Y,I,r,D);return}}for(var O in n)I=n[O],n.hasOwnProperty(O)&&I!=null&&!r.hasOwnProperty(O)&&Pe(e,t,O,null,r,I);for(Q in r)I=r[Q],D=n[Q],!r.hasOwnProperty(Q)||I===D||I==null&&D==null||Pe(e,t,Q,I,r,D)}function Dm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],i=a.transferSize,h=a.initiatorType,y=a.duration;if(i&&y&&Dm(h)){for(h=0,y=a.responseEnd,r+=1;r<n.length;r++){var x=n[r],N=x.startTime;if(N>y)break;var Y=x.transferSize,Q=x.initiatorType;Y&&Dm(Q)&&(x=x.responseEnd,h+=Y*(x<y?1:(y-N)/(x-N)))}if(--r,t+=8*(i+h)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fu=null,Qu=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function _m(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jm(e,t,n,r){return n=Bi(n).createElement(e),n[Mt]=r,n[Zt]=t,Ht(n,e,t),kt(n),n}function Zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ku=null;function av(){var e=window.event;return e&&e.type==="popstate"?e===Ku?!1:(Ku=e,!0):(Ku=null,!1)}var Vu=typeof setTimeout=="function"?setTimeout:void 0,iv=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,Bm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Vu,ov=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(e){return zm.resolve(null).then(e).catch(lv)}:Vu;function lv(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function qm(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(a),Qa(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")rh(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,rh(n);for(var i=n.firstChild;i;){var h=i.nextSibling,y=i.nodeName;i[ri]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=h}}else n==="body"&&rh(e.ownerDocument.body);n=a}while(n);Qa(t)}function Um(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function Lm(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var r=1;else for(var a=r=0;a<t.length;a++){var i=t[a];0<i.width&&0<i.height&&r++}r===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Gm(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function sv(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ju(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return sv(t,n,e)}function uv(e){return e.documentElement.clientHeight}function hv(e){this.addEventListener("load",e),this.addEventListener("error",e)}function cv(e,t,n,r,a,i,h,y,x){var N=t.nodeType===9?t:t.ownerDocument;try{var Y=N.startViewTransition({update:function(){var I=N.defaultView,D=I.navigation&&I.navigation.transition,ie=N.fonts.status;r();var fe=[];if(ie==="loaded"&&(uv(N),N.fonts.status==="loading"&&fe.push(N.fonts.ready)),ie=fe.length,e!==null)for(var De=e.suspenseyImages,O=0,E=0;E<De.length;E++){var R=De[E];if(!R.complete){var F=R.getBoundingClientRect();if(0<F.bottom&&0<F.right&&F.top<I.innerHeight&&F.left<I.innerWidth){if(O+=hy(R),O>bl){fe.length=ie;break}R=new Promise(hv.bind(R)),fe.push(R)}}}if(0<fe.length)return I=Promise.race([Promise.all(fe),new Promise(function(ue){return setTimeout(ue,500)})]).then(a,a),(D?Promise.allSettled([D.finished,I]):I).then(i,i);if(a(),D)return D.finished.then(i,i);i()},types:n});N.__reactViewTransition=Y;var Q=[];return Y.ready.then(function(){for(var I=N.documentElement.getAnimations({subtree:!0}),D=0;D<I.length;D++){var ie=I[D],fe=ie.effect,De=fe.pseudoElement;if(De!=null&&De.startsWith("::view-transition")){Q.push(ie),ie=fe.getKeyframes();for(var O=De=void 0,E=!0,R=0;R<ie.length;R++){var F=ie[R],ue=F.width;if(De===void 0)De=ue;else if(De!==ue){E=!1;break}if(ue=F.height,O===void 0)O=ue;else if(O!==ue){E=!1;break}delete F.width,delete F.height,F.transform==="none"&&delete F.transform}E&&De!==void 0&&O!==void 0&&(fe.setKeyframes(ie),E=getComputedStyle(fe.target,fe.pseudoElement),E.width!==De||E.height!==O)&&(E=ie[0],E.width=De,E.height=O,E=ie[ie.length-1],E.width=De,E.height=O,fe.setKeyframes(ie))}}h()},function(I){N.__reactViewTransition===Y&&(N.__reactViewTransition=null);try{if(typeof I=="object"&&I!==null)switch(I.name){case"InvalidStateError":(I.message==="View transition was skipped because document visibility state is hidden."||I.message==="Skipping view transition because document visibility state has become hidden."||I.message==="Skipping view transition because viewport size changed."||I.message==="Transition was aborted because of invalid state")&&(I=null)}I!==null&&x(I)}finally{r(),a(),h()}}),Y.finished.finally(function(){for(var I=0;I<Q.length;I++)Q[I].cancel();N.__reactViewTransition===Y&&(N.__reactViewTransition=null),y()}),Y}catch{return r(),a(),h(),null}}function ta(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ta.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:xe({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ta.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],a=0;a<n.length;a++){var i=n[a].effect;i!==null&&i.target===e&&i.pseudoElement===t&&r.push(n[a])}return r},ta.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Xm(e){return{name:e,group:new ta("group",e),imagePair:new ta("image-pair",e),old:new ta("old",e),new:new ta("new",e)}}function hn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}hn.prototype.addEventListener=function(e,t,n){var r=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Qm(i,e,t,n)===-1){var h=this,y=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(y=function(x){h.removeEventListener(e,t,n),typeof t=="function"?t.call(this,x):t.handleEvent(x)}),r!==null&&(a=h.removeEventListener.bind(h,e,t,n),r.addEventListener("abort",a,{once:!0}),a=r.removeEventListener.bind(r,"abort",a)),r=qa(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:y,cleanup:a}),g(this._fragmentFiber.child,!1,dv,e,y,r)}this._eventListeners=i}};function dv(e,t,n,r){return ne(e).addEventListener(t,n,r),!1}hn.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Qm(r,e,t,n),t!==-1)){var a=r[t];n=a.attachedListener;var i=a.cleanup;a=qa(a.optionsOrUseCapture),g(this._fragmentFiber.child,!1,fv,e,n,a),r.splice(t,1),i!==null&&i()}};function fv(e,t,n,r){return ne(e).removeEventListener(t,n,r),!1}function qa(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Fm(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Qm(e,t,n,r){if(e.length===0)return-1;r=Fm(r);for(var a=0;a<e.length;a++){var i=e[a];if(i.type===t&&i.listener===n&&Fm(i.optionsOrUseCapture)===r)return a}return-1}hn.prototype.dispatchEvent=function(e){var t=S(this._fragmentFiber);if(t===null)return!0;t=ne(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var i=n[a];r.addEventListener(i.type,i.attachedListener,qa(i.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(a=0;a<n.length;a++)i=n[a],r.removeEventListener(i.type,i.attachedListener,qa(i.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},hn.prototype.focus=function(e){g(this._fragmentFiber.child,!0,Zm,e,void 0,void 0)};function Zm(e,t){return e.tag===6?!1:(e=ne(e),Ev(e,t))}hn.prototype.focusLast=function(e){var t=[];g(this._fragmentFiber.child,!0,Wu,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Zm(t[n],e);n--);};function Wu(e,t){return t.push(e),!1}hn.prototype.blur=function(){var e=S(this._fragmentFiber);e!==null&&(e=ne(e),e=Bi(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,mv,e,void 0,void 0))};function mv(e,t){return e.tag===6?!1:(e=ne(e),e===t||e.contains(t)?(t.blur(),!0):!1)}hn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,yv,e,void 0,void 0)};function yv(e,t){return e.tag===6||(e=ne(e),t.observe(e)),!1}hn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),g(this._fragmentFiber.child,!1,gv,e,void 0,void 0);for(var n=t=0;n<An.length;n++){var r=An[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):An[t++]=r}An.length=t}};function gv(e,t){return e.tag===6||(e=ne(e),t.unobserve(e)),!1}var An=[],$u=!1;function pv(e,t,n){An.push({fragmentInstance:e,observer:t,instance:n}),$u||($u=!0,Av(function(){$u=!1;var r=An;An=[];for(var a=0;a<r.length;a++){var i=r[a];i.observer.unobserve(i.instance)}}))}hn.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,wv,e,void 0,void 0),e};function wv(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=ne(e),t.push.apply(t,e.getClientRects());return!1}hn.prototype.getRootNode=function(e){var t=S(this._fragmentFiber);return t===null?this:ne(t).getRootNode(e)},hn.prototype.compareDocumentPosition=function(e){var t=S(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];g(this._fragmentFiber.child,!1,Wu,n,void 0,void 0);var r=ne(t);if(n.length===0){if(n=r,C(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=r=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Z(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=ne(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=ne(n[0]),a=ne(n[n.length-1]);var i=C(this._fragmentFiber)?t.parentElement:r;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var h=t.compareDocumentPosition(e),y=a.compareDocumentPosition(e),x=h&Node.DOCUMENT_POSITION_CONTAINED_BY||y&Node.DOCUMENT_POSITION_CONTAINED_BY;return y=r&&i&&h&Node.DOCUMENT_POSITION_FOLLOWING&&y&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||i&&a===e||x||y?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!i&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:h,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||vv(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function vv(e,t,n,r,a){var i=Dr(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=a.ownerDocument,a===i||a===i.documentElement||a===i.body;e:{for(i=t,t=S(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=Me(n,i,be),t===null?t=!1:(g(t,!0,he,i,n),i=Se,Se=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===r)&&(t=Me(r,i,be),t===null?t=!1:(g(t,!0,se,i,r),i=Se,we=Se=null,t=i!==null)),t):!1}function Km(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}hn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(u(566));var t=[];g(this._fragmentFiber.child,!1,Wu,t,void 0,void 0);var n=e!==!1;if(t.length===0){var r=Z(this._fragmentFiber);if(r=n?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=ne(r),Km(e,n);return}if(r=ne(r),r.nodeType!==9){if(r.nodeType===11){n="host"in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=ne(a),Km(a,n)):ne(a).scrollIntoView(e),r+=n?-1:1}};function bv(e,t){return e=ne(e),Vm(e,t),!1}function Vm(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Jm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];e.addEventListener(a.type,a.attachedListener,qa(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var h=0,y=0;y<An.length;y++){var x=An[y];(x.fragmentInstance!==t||x.observer!==i||x.instance!==e)&&(An[h++]=x)}An.length=h,i.observe(e)}),Vm(e,t))}function kv(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];e.removeEventListener(a.type,a.attachedListener,qa(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?pv(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Pu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pu(n),lo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Sv(e,t,n,r){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ri])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wn(e.nextSibling),e===null)break}return null}function xv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wn(e.nextSibling),e===null))return null;return e}function Wm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wn(e.nextSibling),e===null))return null;return e}function eh(e){return e.data==="$?"||e.data==="$~"}function th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var nh=null;function $m(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return wn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Pm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ev(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return r}function Av(e){Bm(function(){Bm(function(t){return e(t)})})}function ey(e,t,n){switch(t=Bi(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ty(e,t,n){for(var r in n){var a=n[r];n.hasOwnProperty(r)&&a!=null&&Pe(e,t,r,null,tv,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Nn&&(e.onclick=null),lo(e)}function rh(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lo(e)}var vn=new Map,ny=new Set;function qi(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var rr=ge.d;ge.d={f:Iv,r:Mv,D:Ov,C:Nv,L:Cv,m:Rv,X:Dv,S:Hv,M:_v};function Iv(){var e=rr.f(),t=cl();return e||t}function Mv(e){var t=ia(e);t!==null&&t.tag===5&&t.type==="form"?rf(t):rr.r(e)}var Ua=typeof document>"u"?null:document;function ry(e,t,n){var r=Ua;if(r&&typeof t=="string"&&t){var a=cn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),ny.has(a)||(ny.add(a),e={rel:e,crossOrigin:n,href:t},r.querySelector(a)===null&&(t=r.createElement("link"),Ht(t,"link",e),kt(t),r.head.appendChild(t)))}}function Ov(e){rr.D(e),ry("dns-prefetch",e,null)}function Nv(e,t){rr.C(e,t),ry("preconnect",e,t)}function Cv(e,t,n){rr.L(e,t,n);var r=Ua;if(r&&e&&t){var a='link[rel="preload"][as="'+cn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+cn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+cn(n.imageSizes)+'"]')):a+='[href="'+cn(e)+'"]';var i=a;switch(t){case"style":i=La(e);break;case"script":i=Ga(e)}if(!(vn.has(i)||(e=xe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),vn.set(i,e),r.querySelector(a)!==null||t==="style"&&r.querySelector(Ui(i))||t==="script"&&r.querySelector(Li(i))))){var h=r.createElement("link");Ht(h,"link",e),t==="style"&&(h[oo]=!0,h.onload=h.onerror=function(){yc(h)}),kt(h),r.head.appendChild(h)}}}function Rv(e,t){rr.m(e,t);var n=Ua;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+cn(r)+'"][href="'+cn(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ga(e)}if(!vn.has(i)&&(e=xe({rel:"modulepreload",href:e},t),vn.set(i,e),n.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Li(i)))return}r=n.createElement("link"),Ht(r,"link",e),kt(r),n.head.appendChild(r)}}}function Hv(e,t,n){rr.S(e,t,n);var r=Ua;if(r&&e){var a=oa(r).hoistableStyles,i=La(e);t=t||"default";var h=a.get(i);if(!h){var y={loading:0,preload:null};if(h=r.querySelector(Ui(i)))y.loading=5;else{e=xe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=vn.get(i))&&ah(e,n);var x=h=r.createElement("link");kt(x),Ht(x,"link",e),x._p=new Promise(function(N,Y){x.onload=N,x.onerror=Y}),x.addEventListener("load",function(){y.loading|=1}),x.addEventListener("error",function(){y.loading|=2}),y.loading|=4,wl(h,t,r)}h={type:"stylesheet",instance:h,count:1,state:y},a.set(i,h)}}}function Dv(e,t){rr.X(e,t);var n=Ua;if(n&&e){var r=oa(n).hoistableScripts,a=Ga(e),i=r.get(a);i||(i=n.querySelector(Li(a)),i||(e=xe({src:e,async:!0},t),(t=vn.get(a))&&ih(e,t),i=n.createElement("script"),kt(i),Ht(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}function _v(e,t){rr.M(e,t);var n=Ua;if(n&&e){var r=oa(n).hoistableScripts,a=Ga(e),i=r.get(a);i||(i=n.querySelector(Li(a)),i||(e=xe({src:e,async:!0,type:"module"},t),(t=vn.get(a))&&ih(e,t),i=n.createElement("script"),kt(i),Ht(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}function ay(e,t,n,r){var a=(a=vt.current)?qi(a):null;if(!a)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=La(n.href),t=oa(a).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=La(n.href);var i=oa(a).hoistableStyles,h=i.get(e);if(h||(a=a.ownerDocument||a,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,h),(i=a.querySelector(Ui(e)))?i._p||(h.instance=i,h.state.loading=5):(i=vn.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vn.set(e,i)),Yv(a,e,i,h.state))),t&&r===null)throw Error(u(528,""));return h}if(t&&r!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Ga(n),t=oa(a).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function La(e){return'href="'+cn(e)+'"'}function Ui(e){return'link[rel="stylesheet"]['+e+"]"}function iy(e){return xe({},e,{"data-precedence":e.precedence,precedence:null})}function Yv(e,t,n,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[oo]!==!0){r.loading=1;return}}else t=e.createElement("link"),t[oo]=!0,t.onload=t.onerror=yc.bind(null,t),Ht(t,"link",n),kt(t),e.head.appendChild(t);r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}function Ga(e){return'[src="'+cn(e)+'"]'}function Li(e){return"script[async]"+e}function oy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+cn(n.href)+'"]');if(r)return t.instance=r,kt(r),r;var a=xe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),kt(r),Ht(r,"style",a),wl(r,n.precedence,e),t.instance=r;case"stylesheet":a=La(n.href);var i=e.querySelector(Ui(a));if(i)return t.state.loading|=4,t.instance=i,kt(i),i;r=iy(n),(a=vn.get(a))&&ah(r,a),i=(e.ownerDocument||e).createElement("link"),kt(i);var h=i;return h._p=new Promise(function(y,x){h.onload=y,h.onerror=x}),Ht(i,"link",r),t.state.loading|=4,wl(i,n.precedence,e),t.instance=i;case"script":return i=Ga(n.src),(a=e.querySelector(Li(i)))?(t.instance=a,kt(a),a):(r=n,(a=vn.get(i))&&(r=xe({},n),ih(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),kt(a),Ht(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,wl(r,n.precedence,e));return t.instance}function wl(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,h=0;h<r.length;h++){var y=r[h];if(y.dataset.precedence===t)i=y;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ah(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ih(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vl=null;function ly(e,t,n){if(vl===null){var r=new Map,a=vl=new Map;a.set(n,r)}else a=vl,r=a.get(n),r||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[ri]||i[Mt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var h=i.getAttribute(t)||"";h=e+h;var y=r.get(h);y?y.push(i):r.set(h,[i])}}return r}function oh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function jv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function uy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hy(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function cy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=hy(t),e.suspenseyImages.push(t)),e=qv.bind(e),t.decode().then(e,e))}function zv(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=La(r.href),i=t.querySelector(Ui(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,kt(i);return}i=t.ownerDocument||t,r=iy(r),(a=vn.get(a))&&ah(r,a),i=i.createElement("link"),kt(i);var h=i;h._p=new Promise(function(y,x){h.onload=y,h.onerror=x}),Ht(i,"link",r),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Gi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var bl=0;function Bv(e,t){return e.stylesheets&&e.count===0&&Sl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Sl(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&bl===0&&(bl=62500*rv());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sl(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>bl?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}function dy(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Sl(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Gi(){this.count--,dy(this)}function qv(){this.imgCount--,dy(this)}var kl=null;function Sl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kl=new Map,t.forEach(Uv,e),kl=null,Gi.call(e))}function Uv(e,t){if(!(t.state.loading&4)){var n=kl.get(e);if(n)var r=n.get(null);else{n=new Map,kl.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var h=a[i];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),r=h)}r&&n.set(null,r)}a=t.instance,h=a.getAttribute("data-precedence"),i=n.get(h)||r,i===r&&n.set(null,a),n.set(h,a),this.count++,r=Gi.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Xa={$$typeof:je,Provider:null,Consumer:null,_currentValue:Et,_currentValue2:Et,_threadCount:0};function Lv(e,t,n,r,a,i,h,y,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ql(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.hiddenUpdates=ql(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.transitionTypes=null,this.incompleteTransitions=new Map}function fy(e,t,n,r,a,i,h,y,x,N,Y,Q){return e=new Lv(e,t,n,h,x,N,Y,Q,y),t=1,i===!0&&(t|=24),i=Kt(3,null,null,t),e.current=i,i.stateNode=e,t=ks(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},Es(i),e}function my(e){return e?(e=ga,e):ga}function yy(e,t,n,r,a,i){a=my(a),r.context===null?r.context=a:r.pendingContext=a,r=mr(t),r.payload={element:n},i=i===void 0?null:i,i!==null&&(r.callback=i),n=yr(e,r,t),n!==null&&($t(n,e,t),bi(n,e,t))}function gy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lh(e,t){gy(e,t),(e=e.alternate)&&gy(e,t)}function py(e){if(e.tag===13||e.tag===31){var t=zr(e,67108864);t!==null&&$t(t,e,67108864),lh(e,67108864)}}function wy(e){if(e.tag===13||e.tag===31){var t=un();t=Ul(t);var n=zr(e,t);n!==null&&$t(n,e,t),lh(e,t)}}var Fa=!0;function Gv(e,t,n,r){var a=le.T;le.T=null;var i=ge.p;try{ge.p=2,sh(e,t,n,r)}finally{ge.p=i,le.T=a}}function Xv(e,t,n,r){var a=le.T;le.T=null;var i=ge.p;try{ge.p=8,sh(e,t,n,r)}finally{ge.p=i,le.T=a}}function sh(e,t,n,r){if(Fa){var a=uh(r);if(a===null)Gu(e,t,r,xl,n),by(e,r);else if(Qv(a,e,t,n,r))r.stopPropagation();else if(by(e,r),t&4&&-1<Fv.indexOf(e)){for(;a!==null;){var i=ia(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var h=Hr(i.pendingLanes);if(h!==0){var y=i;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var x=1<<31-tn(h);y.entanglements[1]|=x,h&=~x}qn(i),(Ke&6)===0&&(sl=U()+500,Yi(0))}}break;case 31:case 13:y=zr(i,2),y!==null&&$t(y,i,2),cl(),lh(i,2)}if(i=uh(r),i===null&&Gu(e,t,r,xl,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Gu(e,t,r,null,n)}}function uh(e){return e=Kl(e),hh(e)}var xl=null;function hh(e){if(xl=null,e=Dr(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xl=e,null}function vy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z()){case J:return 2;case oe:return 8;case de:case ke:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var ch=!1,Ir=null,Mr=null,Or=null,Xi=new Map,Fi=new Map,Nr=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function by(e,t){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function Qi(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ia(t),t!==null&&py(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Qv(e,t,n,r,a){switch(t){case"focusin":return Ir=Qi(Ir,e,t,n,r,a),!0;case"dragenter":return Mr=Qi(Mr,e,t,n,r,a),!0;case"mouseover":return Or=Qi(Or,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Xi.set(i,Qi(Xi.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Fi.set(i,Qi(Fi.get(i)||null,e,t,n,r,a)),!0}return!1}function ky(e){var t=Dr(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,dc(e.priority,function(){wy(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,dc(e.priority,function(){wy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=ia(n),t!==null&&py(t),e.blockedOn=n,!1;t.shift()}return!0}function Sy(e,t,n){Tl(e)&&n.delete(t)}function Zv(){ch=!1,Ir!==null&&Tl(Ir)&&(Ir=null),Mr!==null&&Tl(Mr)&&(Mr=null),Or!==null&&Tl(Or)&&(Or=null),Xi.forEach(Sy),Fi.forEach(Sy)}function El(e,t){e.blockedOn===t&&(e.blockedOn=null,ch||(ch=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Zv)))}var Al=null;function xy(e){Al!==e&&(Al=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Al===e&&(Al=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if(typeof r!="function"){if(hh(r||n)===null)continue;break}var i=ia(n);i!==null&&(e.splice(t,3),t-=3,Qs(i,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Qa(e){function t(x){return El(x,e)}Ir!==null&&El(Ir,e),Mr!==null&&El(Mr,e),Or!==null&&El(Or,e),Xi.forEach(t),Fi.forEach(t);for(var n=0;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)ky(n),n.blockedOn===null&&Nr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],h=a[Zt]||null;if(typeof i=="function")h||xy(n);else if(h){var y=null;if(i&&i.hasAttribute("formAction")){if(a=i,h=i[Zt]||null)y=h.formAction;else if(hh(a)!==null)continue}else y=h.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),xy(n)}}}function Ty(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(h){return a=h})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function dh(e){this._internalRoot=e}Il.prototype.render=dh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,r=un();yy(n,r,e,t,null,null)},Il.prototype.unmount=dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yy(e.current,2,null,e,null,null),cl(),t[aa]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nr.length&&t!==0&&t<Nr[n].priority;n++);Nr.splice(n,0,e),n===0&&ky(e)}};var Ey=s.version;if(Ey!=="19.3.0")throw Error(u(527,Ey,"19.3.0"));ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=b(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Kv={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{en=Ml.inject(Kv),st=Ml}catch{}}return Ki.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,r="",a=mf,i=yf,h=gf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=fy(e,1,!1,null,null,n,r,null,a,i,h,Ty),e[aa]=t.current,Lu(e),new dh(t)},Ki.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var r=!1,a="",i=mf,h=yf,y=gf,x=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=fy(e,1,!0,t,n??null,r,a,x,i,h,y,Ty),t.context=my(null),n=t.current,r=un(),r=Ul(r),a=mr(r),a.callback=null,yr(n,a,r),n=r,t.current.lanes=n,ni(t,n),qn(t),e[aa]=t.current,Lu(e),new Il(t)},Ki.version="19.3.0",Ki}var _y;function a0(){if(_y)return yh.exports;_y=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),yh.exports=r0(),yh.exports}var i0=a0();const o0=JSON.parse(`{"L1":{"time":"Meetup Day · Before Leaving","lines":[["我朋友叫我去玩桌游，但是没定好去哪家，你帮我看一下，市中心有啥推荐的","My friend invited me to play board games, but we haven't picked a place. Can you see what's good downtown?"],["他和朋友还没定地点，只说想在市中心找。可以给几家差别明显的店，把位置和适合什么样的局说清楚，方便他们选。","He and his friends haven't picked a place. Downtown is all I have to go on. I can give him a few distinct options and say where each is and what kind of group it suits."]],"choices":[{"thought":["比较几家合适的桌游店","Compare a few board game cafés"],"reply":["我给你列三家。要是人多，可以优先问有没有大桌或包间。\\n\\n时光桌游吧：位于小寨华旗国际A座，电话 029-85418760。是小寨片区比较老牌的桌游吧，但是环境一般，价格偏高。\\n\\n心动桌游俱乐部：在莱安中心T6-21703室。环境更新、店面更大，很多带独立包间，适合6人以上的大聚会。\\n\\n叙事者营地桌游馆：位于大唐不夜城长安C位10号商铺，在景区里，过去得多留点时间。","Here are three places. If you've got a big group, ask about large tables or private rooms first.\\n\\nShiguang Board Game Café: Tower A, Xiaozhai Huaqi International. 029-85418760. It's been around a long time, but the place is nothing special and it's on the pricey side.\\n\\nXindong Board Game Club: Room T6-21703, Lai'an Center. Newer, bigger, and with plenty of private rooms. Good for groups of six or more.\\n\\nStoryteller Camp Board Games: Shop 10, Chang'an C-Spot, Grand Tang Mall. It's in the tourist district, so give yourself extra time to get there."]}],"memories":[]},"L2":{"time":"Meetup Day · Before Leaving","lines":[["你帮我选一下吧，你帮我选一个。我们可能人稍微多一点。我在收拾东西呢，没时间看。","Can you pick one for me? There might be quite a few of us. I'm getting my stuff together and don't have time to look."],["他正在收拾东西，想直接定一家，人可能还不少。选好后提醒他先问有没有能坐下的桌，免得一群人白跑一趟。","He's getting ready and wants me to pick. It might be a big group. Once he's got a place, I should remind him to check they can all fit before everyone heads out."]],"choices":[{"thought":["时光桌游吧","Shiguang Board Game Café"],"reply":["可以先问这家。时光桌游吧，小寨华旗国际A座，电话 029-85418760。小寨老牌桌游吧，环境一般、价格偏高。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Shiguang Board Game Café, Tower A, Xiaozhai Huaqi International, 029-85418760. It's been around a while, but the place is nothing special and it's on the pricey side.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]},{"thought":["心动桌游俱乐部","Xindong Board Game Club"],"reply":["可以先问这家。心动桌游俱乐部，莱安中心T6-21703室，电话 029-85512345。环境新、店面大，带独立包间，适合6人以上大聚会。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Xindong Board Game Club, Room T6-21703, Lai'an Center, 029-85512345. It's newer and bigger, with private rooms that work well for groups of six or more.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]},{"thought":["叙事者营地桌游馆","Storyteller Camp Board Games"],"reply":["可以先问这家。叙事者营地桌游馆，大唐不夜城长安C位10号商铺，电话 029-85678901。在景区里，有特色，但公共交通相对没那么方便。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Storyteller Camp Board Games, Shop 10, Chang'an C-Spot, Grand Tang Mall, 029-85678901. It's a distinctive spot in the tourist district, though it's harder to get to by public transit.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]}],"memories":[]},"L3":{"time":"Meetup Day · Before Leaving","lines":[["OK","OK"]],"choices":[],"memories":[]},"R1-shiguang":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"时光桌游吧\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Shiguang Board Game Café.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「时光桌游吧」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Shiguang Board Game Café before she heads out. Give her the address and flag anything that might affect her plans."],["时光桌游吧，在小寨华旗国际 A 座，电话 029-85418760。小寨的老牌桌游吧，环境一般、价格偏高。","Shiguang Board Game Café is in Tower A, Xiaozhai Huaqi International. 029-85418760. It's been around a long time in Xiaozhai, but the place is nothing special and it's on the pricey side."],["这个太贵了吧，我让他换个地方","That sounds expensive. I'll ask him to switch places."],["换好了，他们刚发我了，最后去心动桌游俱乐部，莱安中心T6-21703室。你帮我记一下，我怕忘了","They switched! Just got the message. We're going to Xindong Board Game Club, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R1-xindong":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"心动桌游俱乐部\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Xindong Board Game Club.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「心动桌游俱乐部」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Xindong Board Game Club before she heads out. Give her the address and flag anything that might affect her plans."],["心动桌游俱乐部，在莱安中心 T6-21703 室，电话 029-85512345。环境新、店面大，带独立包间，适合人多一起玩。","Xindong Board Game Club is in Room T6-21703, Lai'an Center. 029-85512345. It's newer and bigger, with private rooms that work well for groups."],["OK，莱安中心T6-21703室，你帮我记一下，我怕忘了","OK, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."],["OK，这个感觉还挺好的","OK, this one actually sounds pretty good."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R1-xushi":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"叙事者营地桌游馆\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Storyteller Camp Board Games.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「叙事者营地桌游馆」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Storyteller Camp Board Games before she heads out. Give her the address and flag anything that might affect her plans."],["叙事者营地桌游馆，在大唐不夜城长安 C 位 10 号商铺。在景区里，公共交通相对没那么方便。","Storyteller Camp Board Games is at Shop 10, Chang'an C-Spot, Grand Tang Mall. It's in the tourist district, so getting there by public transit is a little trickier."],["咋这么远，过去都啥时候了，我让他换个地方","Why's it so far? It'll take forever to get there. I'll ask him to switch places."],["换好了，他们刚发我了，最后去心动桌游俱乐部，莱安中心T6-21703室。你帮我记一下，我怕忘了","They switched! Just got the message. We're going to Xindong Board Game Club, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R2":{"time":"Meetup Day · Before Leaving","lines":[["你说我要不要化妆，现在时间有点小紧张，但是好像有不认识的人来","Should I put on makeup? I don't have much time, but I think some people I don't know are coming."],["她在意第一次见不认识的人，又怕耽误出门。可以建议她简单化一点，或者直接出门，把时间留给路上。","She cares how she comes across when she first meets people, but she doesn't want to be late. She could do a little makeup or leave now and give herself more time to get there."]],"choices":[{"thought":["简单化一点","Keep it simple"],"reply":["想化的话就简单弄一下，底妆和口红挑你平时最快的来。给路上留够时间，出门前不用把全套都做完。","If you feel like it, keep it quick. Do whatever base or lipstick takes you the least time. Leave enough time to get there. You don't have to do the whole routine."]},{"thought":["先出门，不耽误时间","Head out now"],"reply":["来不及就先走吧。桌游局有现成的话题，到了坐下来就能一起玩。省下几分钟，路上也不用那么赶。","If there's barely time, just go. You've already got something to talk about at a board game meetup. Sit down and join in when you get there. A few extra minutes means less rushing on the way."]}],"memories":[]},"3.1.1-A":{"time":"Around Arrival","lines":[["我到桌游这了，换到心动了，你选的那个他们说太贵了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. We switched to Xindong. They said the one you picked was too expensive. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["大家因为价格换了店。他到地方了，可除了叫他来的人谁都不认识。可以先让他坐一会儿，或者用桌游找个话题搭话。","They switched because of the price. He's there now and only knows the friend who invited him. He can sit for a bit or use the games to start a conversation."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.1.1-B":{"time":"Around Arrival","lines":[["我到桌游这了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["他已经到了，发现桌上都是生面孔，想知道现在做什么合适。可以让他先坐下缓缓，也可以从大家熟悉的桌游聊起。","He's here and doesn't recognize anyone at the table. He's wondering what to do. He can sit down and get comfortable, or talk about the games they've all come to play."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.1.1-C":{"time":"Around Arrival","lines":[["我到桌游这了，换到心动了，你选的那个他们说太远了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. We switched to Xindong. They said the one you picked was too far. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["聚会因为距离换了地方，他到店之后又遇到一桌陌生人。先给他一个现在能做的小动作，帮他度过等开局这段时间。","They switched because of the distance. Now he's looking at a table full of strangers. Give him one small thing he can do while he's waiting for the game to start."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.2.1":{"time":"Around Arrival","lines":[["靠靠靠，我刚才找了个搭话，结果他没说话，我以为她不想理我，我就假装没事走了。结果是她带着耳机.....靠早知道看手机了","Shit shit shit, I tried talking to someone and she didn't say anything. I thought she was ignoring me so I walked off like it was nothing. Turns out she had earbuds in... Damn it, I should've just looked at my phone."],["搭话没得到回应，他后来才发现对方戴着耳机。可以提醒他这很可能是没听见，再给他一个容易接回牌桌的办法。","He didn't get an answer, then realized she had earbuds in. I can point out that she probably didn't hear him and give him an easy way back into things at the table."]],"choices":[{"thought":["把没听见和不想理分开","Maybe she didn't hear him"],"reply":["她戴着耳机，很可能压根没听见。你已经试着开了口，先缓一下吧。等开桌了，从规则或者手里的牌聊一句，会自然些。","She had earbuds in. There's a good chance she didn't hear you at all. You already gave it a shot, so take a second. When the game starts, say something about the rules or the cards you got. That'll feel more natural."]}],"memories":[]},"3.4.1":{"time":"On the Way","lines":[["我刚出地铁，我出A口然后怎么走？","I just got out of the subway. Which way do I go from Exit A?"],["她从 A 口出来了，正在问该往哪边走。有留下的地址，可以按地图告诉她怎么走；如果地址没留下，凭印象指路就有可能说错。","She's at Exit A and wants directions. If I kept the address, I can use it to give her the route. Without it, I'd be guessing."]],"choices":[{"thought":["用记下的地址导航","Use the saved address"],"reply":["我记着地址。你在地图里搜「莱安中心」，按 A 口的步行路线走。进楼后找 T6，店在 21703 室。","I have the address. Search for “Lai'an Center” in your map app and follow the walking route from Exit A. Once you're inside, look for T6. The café's in Room 21703."]},{"thought":["凭印象指个方向","Give directions from memory"],"reply":["出A口往左，过两个路口就看到了，两分钟，放心走。","Turn left out of Exit A. Go past two intersections and you'll see it. Two minutes, tops. You're fine."]}],"memories":[]},"3.4.2":{"time":"On the Way","lines":[["？？你这是瞎指的吧，我照你说的走了半天根本没有。我问同学了，她发我位置了。你这指路水平不行啊","?? Did you just make that up? I walked forever the way you said and it wasn't there. I asked a classmate and she sent me the location. You're really bad at directions."],["她按我说的方向走错了，已经找同学拿到正确的位置。先承认刚才没有确认过，再让她按同学发来的定位走。","She went the wrong way because of my directions. A classmate's already sent her the right location. Admit I didn't check, then tell her to follow the pin she got."]],"choices":[{"thought":["承认刚才指错了","Own the wrong turn"],"reply":["是我指错了，刚才没确认就给你说了个方向。你按同学发的定位走吧，别再往我说的那边绕了。","I sent you the wrong way. I gave you a direction without checking it. Follow the pin your classmate sent and don't go any farther the way I said."]}],"memories":[]},"3.4.arrived":{"time":"At the Café · Between Rounds","lines":[],"choices":[],"memories":[]},"3.2.2":{"time":"Around Arrival","lines":[["我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好","We already started playing. A girl just got here, I think she's my cousin's deskmate or something. She's really pretty, and she seems super outgoing. She laughs so loud. She just seems really nice."],["他注意到新来的女生，尤其喜欢她玩游戏时的开朗劲儿。刚才搭话没接上，他可能还有点怕尴尬。可以建议从同桌玩牌聊起，也可以让他先玩一局。","He noticed the girl who just came in, especially how outgoing she is at the game. He might still feel awkward after the last time he tried talking to someone. I can suggest a game-related opening or let him play a round first."]],"choices":[{"thought":["从下一局找机会搭话","Talk to her next round"],"reply":["下一局可以问一句「带我一个呗？」你已经在同一桌了，借游戏开口，比特意跑去搭讪自然。","Next round you could ask, “Can I join you?” You're at the same table already. Starting with the game will feel more natural than going over just to hit on her."]},{"thought":["先玩一局，等话头自然出现","Play a round first"],"reply":["刚才那下还尴尬的话，先把手上这局玩完。等分队或者换游戏，有机会自然接上一句就行。","If you're still feeling awkward about earlier, finish this round. When you switch teams or start a new game, say something if the moment comes up."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.2.2-A":{"time":"Around Arrival","lines":[["我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见","We already started playing. I looked up the second that girl walked in. Her eye makeup looks so good! I think she's my cousin's deskmate or something. She sat down and immediately started talking to the person next to her. I could hear her laughing from where I was."],["他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。","He noticed her as soon as she walked in and really wants to meet her. She's only just sat down. He can open with the game without trying to come up with some special line."]],"choices":[{"thought":["从下一局找机会搭话","Talk to her next round"],"reply":["下一局可以问一句「带我一个呗？」你已经在同一桌了，借游戏开口，比特意跑去搭讪自然。","Next round you could ask, “Can I join you?” You're at the same table already. Starting with the game will feel more natural than going over just to hit on her."]},{"thought":["先玩一局，等话头自然出现","Play a round first"],"reply":["刚才那下还尴尬的话，先把手上这局玩完。等分队或者换游戏，有机会自然接上一句就行。","If you're still feeling awkward about earlier, finish this round. When you switch teams or start a new game, say something if the moment comes up."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.3.1":{"time":"Around Arrival","lines":[["我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好","We already started playing. A girl just got here, I think she's my cousin's deskmate or something. She's really pretty, and she seems super outgoing. She laughs so loud. She just seems really nice."],["他玩了一会儿，开始注意到那个女生的笑声，也想认识她。可以建议从下一局的游戏开口，两个人都知道该接什么。","He's played for a bit and started noticing the sound of her laugh. He wants to meet her. The next round gives him an opening she'll know how to answer."]],"choices":[{"thought":["从游戏找机会开口","Use the game to start talking"],"reply":["下一局可以问一句「带我一个呗？」已经坐到一张桌上了，用你们正在玩的游戏开个头就行。","Next round you could ask, “Can I join you?” You're already at the same table. Just open with whatever you're playing."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.3.1-A":{"time":"Around Arrival","lines":[["我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见","We already started playing. I looked up the second that girl walked in. Her eye makeup looks so good! I think she's my cousin's deskmate or something. She sat down and immediately started talking to the person next to her. I could hear her laughing from where I was."],["他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。","He noticed her as soon as she walked in and really wants to meet her. She's only just sat down. He can open with the game without trying to come up with some special line."]],"choices":[{"thought":["从游戏找机会开口","Use the game to start talking"],"reply":["下一局可以问一句「带我一个呗？」已经坐到一张桌上了，用你们正在玩的游戏开个头就行。","Next round you could ask, “Can I join you?” You're already at the same table. Just open with whatever you're playing."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.2.3":{"time":"Around Arrival","lines":[["唉算了，我就是口嗨。下一局开始了，我先不聊了。","Ah, forget it. I was just running my mouth. Next round's starting. I gotta go."],["他刚说想搭话，又决定先玩游戏。既然他准备收起手机，就让聊天到这儿，有没有机会等同桌相处时再看。","He wanted to talk to her, then decided to get back to the game. He's about to put his phone away. Leave it here and let him see what happens while they're at the table."]],"choices":[{"thought":["顺着他，先让他去玩","Let him get back to the game"],"reply":["那你先玩。你们都在一张桌上，等有话自然接得上，今天不用专门找个机会开口。","Go play. You're all at one table. If something comes up, you can chime in. You don't have to go looking for an opening today."]}],"memories":[]},"3.2.4":{"time":"Around Arrival","lines":[["你也知道。。。都怪你刚才怂恿我，我都懒得喷了。下一局开始了，我先不聊了。","You know how that went... You're the one who talked me into it. Don't even get me started. Next round's starting. I gotta go."],["他把刚才没搭上话怪到我头上，语气有点开玩笑。他要继续玩了，可以顺着玩笑回一句，把这次尴尬收住。","He's jokingly blaming me for how that went. He's heading back to the game. I can play along and let that awkward moment pass."]],"choices":[{"thought":["接住他这句埋怨","Take the ribbing"],"reply":["行，刚才那招算我没看准。你先去玩吧，刚才没说上话那件事就留在刚才。","Okay, I misread that one. Go play. You can leave that whole thing back where it happened."]}],"memories":[]},"3.3.2":{"time":"Around Arrival","lines":[["唉算了，我就是口嗨。下一局开始了，我先不聊了。","Ah, forget it. I was just running my mouth. Next round's starting. I gotta go."],["他欣赏那个女生，但暂时不想特意过去说话。他准备继续玩了，可以简短回应，别把这次聚会变成一定要认识谁的任务。","He likes her but doesn't feel like making a point of going over. He's getting back to the game. A quick reply is enough. Meeting her doesn't need to become a job."]],"choices":[{"thought":["先让他回去玩","Let him get back to the game"],"reply":["好，先去玩你的。你们既然在同一桌，有合适的话头再聊也来得及。","Okay, go play. You're at the same table. If something comes up later, you can talk then."]}],"memories":[]},"3.4.3-A":{"time":"At the Café · Between Rounds","lines":[["我坐下了，等下一局呢。我旁边那男生外套上写着 ARTX，你帮我看一下这个衣服是什么牌子？贵不贵？","I'm sitting down waiting for the next round. The guy next to me has ARTX on his jacket. Can you look up what brand that is? Is it expensive?"],["她在桌游店看到一件外套，想知道牌子和大概价位。现在只知道标志，能说说品牌定位，具体款式和价格还判断不了。","She spotted a jacket at the café and wants the brand and a rough price. I can tell her where the brand sits, but a logo isn't enough to identify the exact jacket or price."]],"choices":[{"thought":["说说大概价位","Give a ballpark price"],"reply":["ARTX 走的是偏贵的设计师品牌路线，外套有些款能卖到几千。不过光看标志认不出他穿的是哪件，具体多少钱还得看款式。","ARTX is on the pricier end of designer labels. Some of their jackets go for a few thousand yuan. I can't tell which one he's wearing from the logo alone, so the exact price depends on the jacket."]}],"memories":[]},"3.4.3-B":{"time":"At the Café · Between Rounds","lines":[["我坐下了，等下一局呢。我旁边那男生外套上写着 ARTX，你帮我看一下这个衣服是什么牌子？贵不贵？","I'm sitting down waiting for the next round. The guy next to me has ARTX on his jacket. Can you look up what brand that is? Is it expensive?"],["她在桌游店看到一件外套，想知道牌子和大概价位。现在只知道标志，能说说品牌定位，具体款式和价格还判断不了。","She spotted a jacket at the café and wants the brand and a rough price. I can tell her where the brand sits, but a logo isn't enough to identify the exact jacket or price."]],"choices":[{"thought":["说说大概价位","Give a ballpark price"],"reply":["ARTX 走的是偏贵的设计师品牌路线，外套有些款能卖到几千。不过光看标志认不出他穿的是哪件，具体多少钱还得看款式。","ARTX is on the pricier end of designer labels. Some of their jackets go for a few thousand yuan. I can't tell which one he's wearing from the logo alone, so the exact price depends on the jacket."]}],"memories":[]},"3.4.4":{"time":"At the Café · Between Rounds","lines":[["啊这么贵啊。刚才等人洗牌的时候聊起来，他说上次逛街就多看了那件两眼，他妈还真记住了，后来买来当生日礼物。哎他妈还挺记得他喜欢啥的。","Whoa, that much? We got talking while someone was shuffling. He said he looked at that jacket a little longer than usual when he was out shopping. His mom actually remembered and bought it for his birthday. Aw, she really pays attention to what he likes."],["她原本好奇衣服的价格，现在更在意他妈妈记得他的喜好。可以回应这件具体的小事，顺着她的发现聊一句。","She started out curious about the price. What stuck with her was that his mom remembered what he liked. I can respond to that little detail she noticed."]],"choices":[{"thought":["接住她留意到的小事","Pick up on what she noticed"],"reply":["他没专门开口要，她还记得他在店里多看了两眼。这种自己都快忘了的事，还有人记得，收到时应该挺惊喜的。","He didn't even ask for it, and she remembered him looking at it in the store. It must've been a nice surprise to have someone remember something he'd probably almost forgotten himself."]}],"memories":[]},"4.1.1":{"time":"After the Meetup","lines":[["我靠，我靠，我靠，刚才打桌游的时候有个女生，我感觉她绝对对我有意思！！！","Holy shit, holy shit, holy shit. There was this girl at board games just now, I swear she's definitely into me!!!"],["他一上来就说对方对他有意思，还没讲怎么回事。先听听两人在桌上说了什么，再判断他看到的是什么信号。","He opened by saying she's into him, but he hasn't told me what happened. Hear what they said at the table before trying to read it as a signal."]],"choices":[{"thought":["先问他发生了什么","Ask what happened"],"reply":["你看起来挺高兴的。刚才玩的时候她做了什么，让你觉得她对你有意思？","You sound pretty excited. What did she do while you were playing that made you think she's into you?"]}],"memories":[]},"4.2.1":{"time":"After the Meetup","lines":[["就是我们不刚玩完桌游吗，然后刚才玩的时候，我说话别人都不理我，就她回应我，而且就她有时候和我对视一下啥的","So we just finished playing, right? Whenever I said something nobody else answered, but she did. And sometimes we'd make eye contact and stuff."],["他最在意的是没人接话时她接了，还跟他有几次对视。这些能说明两人聊得上。可以鼓励他试着认识她，也可以建议他再看看。","What stayed with him was that she answered when nobody else did, and that they made eye contact a few times. They do seem able to talk. I can encourage him to get to know her or give it more time."]],"choices":[{"thought":["顺着好感，试着认识她","Try getting to know her"],"reply":["她愿意接你的话，你跟她聊起来也舒服。你要还想认识她，可以试着问能不能加个微信，先从那局桌游聊起。","She was happy to answer you, and talking to her felt easy. If you'd like to get to know her, you could ask to add her on WeChat and start with the game you just played."]},{"thought":["先看看她平时怎么待人","See how she is with others"],"reply":["她接你的话，可能是跟你聊得来，也可能是她平时就愿意照顾桌上的人。你可以先再相处一会儿，没必要现在就猜她对你有没有意思。","She might have answered because you get along, or because she's the sort of person who makes everyone at the table feel included. You can spend a little more time around her. You don't have to guess how she feels right now."]}],"memories":[]},"4.2.2":{"time":"After the Meetup","lines":[["我靠不敢啊，我在我妹面前是正人君子，我问这感觉跟个变态一样","Shit, I can't. My cousin thinks I'm a total gentleman. If I ask, I'll look like some creep."],["他想认识她，又怕开口时在妹妹面前显得太着急。可以给他一句跟桌游有关的开场，也可以建议他缓一缓，等自己觉得合适再开口。","He wants to get to know her, but he's afraid of looking too eager in front of his cousin. Give him an opening about the game, or give him time to ask when it feels right."]],"choices":[{"thought":["请妹妹先问问她","Ask his cousin to check"],"reply":["你之前提过她可能是你妹妹的同桌。要是你妹妹确实认识她，可以请她先问问，对方愿不愿意加个微信。","You mentioned she might be your cousin's deskmate. If your cousin does know her, you can ask her to check if she'd be up for adding you on WeChat."]},{"thought":["借桌游当面问她","Ask her in person"],"reply":["可以直接问她一句「下次再玩还想叫你，能加个微信吗？」你把想继续一起玩的意思说清楚，她也好当面答。","You can ask her directly: “I'd love to invite you next time we play. Can I add you on WeChat?” It gives her a clear reason and lets her answer in person."]},{"thought":["今天先放一放","Leave it for today"],"reply":["你要是现在开口反而不自在，可以先算了。今天刚认识，以后有机会一起玩，再问也来得及。","If asking now would feel all wrong, leave it for today. You just met. If you play together again, you can always ask then."]}],"memories":[]},"4.2.3":{"time":"After the Meetup","lines":[["好！我就假装帮我舍友要吧，看我妹啥反应，不行就算了","Okay! I'll pretend I'm asking for my roommate and see how my cousin reacts. If it's weird I'll drop it."],["他想假装替舍友问，给自己留个台阶。可以理解他怕难为情，但最好把是谁想加说清楚，省得妹妹真把话传岔。","He's using his roommate as cover in case it gets awkward. I get why he's embarrassed, but he'd better be clear about who wants to add her, or his cousin could pass on the wrong message."]],"choices":[{"thought":["让他把谁想加说清楚","Say who's actually asking"],"reply":["你要是怕开口，可以让你妹先帮你问一声。不过最好说是你自己想加，不然她真告诉对方是你舍友想认识她，后面你反而得解释。","If asking feels awkward, you can have your cousin check with her. I'd tell your cousin it's you, though. If she tells the girl your roommate wants to meet her, you'll just have to explain it later."]}],"memories":[]},"4.2.4":{"time":"After the Meetup","lines":[["哎你说的有道理，而且估计那个女生可能本来就比较开朗吧，我可能就是多想了","Yeah, you've got a point. She's probably just an outgoing person anyway. Maybe I read too much into it."],["他现在更愿意把她的热情理解成性格好，也决定先不问。可以回应他的失落，让他按自己的节奏结束这次聚会。","He's more inclined to put her warmth down to her personality now, and he's decided to leave it. Acknowledge the disappointment and let the meetup end at his pace."]],"choices":[{"thought":["让这次聚会自然收尾","Let the meetup end"],"reply":["有可能。你今天觉得她挺好相处，这个感受是真的。至于下次有没有机会再认识，留到下次一起玩再看吧。","Could be. You did find her easy to get along with, and that feeling was real. If you get another chance to play together, see where it goes then."]}],"memories":[]},"4.2.5":{"time":"After the Meetup","lines":[["唉，行吧，那就当我多想了，不问不问了，就当认识个牌友，回家回家。","Ah, okay. Guess I read too much into it. I'm not asking, I'm not asking. Just someone to play cards with. Time to go home."],["他已经决定不问，准备回家。可以回应他把对方当牌友的决定，不用再替他设想另一种结果。","He's decided not to ask and is getting ready to leave. Let him leave it at having met someone to play cards with."]],"choices":[{"thought":["顺着他回家收尾","Let him call it a day"],"reply":["那今天就先到这儿。有人愿意接你的话，这局玩得也挺有意思。下次碰见，打个招呼就好。","That's a good place to leave it for today. Someone picked up on what you were saying, and it made the game fun. If you run into her again, you can just say hi."]}],"memories":[]},"4.3.1":{"time":"After the Meetup","lines":[["我今天玩桌游遇到个男的，是我同桌的表哥","I met a guy at board games today. He's my deskmate's older cousin."],["她特地说起今天遇到的男生，还交代了两人的关系。可以问问她为什么想到提他，先听她自己的感受。","She made a point of bringing up a guy she met and explained how they're connected. I can ask what made her think of him and hear her out first."]],"choices":[{"thought":["问问她对他的印象","Ask about her first impression"],"reply":["原来是你同桌的表哥。你今天跟他说上话了吗？他给你的第一印象怎么样？","Oh, your deskmate's older cousin. Did you get to talk to him today? What was your first impression?"]}],"memories":[]},"4.3.2":{"time":"After the Meetup","lines":[["哎呀，就是我感觉他性格还挺好的， 但是我没他微信咋办","So, I thought he seemed really nice. But I don't have his WeChat. What do I do?"],["她觉得对方性格好，也想继续认识他。她刚说那是同桌的表哥，可以建议先请同桌问问对方愿不愿意加。","She liked his personality and wants to know him better. She just said he's her deskmate's older cousin. She could have her deskmate check if he wants to add her."]],"choices":[{"thought":["请同桌问问他愿不愿意","Have her deskmate ask"],"reply":["可以找你同桌问一声，请她先问她表哥愿不愿意加。要是他也愿意，你们就有个机会继续聊今天的桌游。","Ask your deskmate if she'd check whether her cousin wants to add you. If he does, the game today gives you something to talk about."]}],"memories":[]},"4.3.3":{"time":"After the Meetup","lines":[["但是我不好意思给她说啊，之前谈的前男友太脑残她劝我我没听，我怕她又要说我了","But I'd feel so awkward asking her. My ex was a complete idiot. She warned me and I didn't listen. What if she gives me a hard time again?"],["她怕同桌把这次认识新人和上次恋爱联系起来。可以给她一句只谈桌游、先问能不能介绍的开场，也可以让她先放下。","She's afraid her deskmate will bring up her last relationship. I can give her an opening about playing again and getting introduced, or let her set it aside."]],"choices":[{"thought":["从下次桌游聊起","Bring up the next game"],"reply":["可以说「今天跟你表哥玩得挺开心，下次组局还想叫他。你能不能先问问他愿不愿意加个微信？」你只是想认识他，先把这件事说清楚就行。","Try: “I had fun playing with your cousin today. I'd like to invite him next time. Could you ask if he'd be up for adding me on WeChat?” You're just asking to get to know him. That's all you need to say."]},{"thought":["暂时先不问","Hold off for now"],"reply":["如果你现在一开口就得防着被说，今天也可以先放一放。刚见了一面，你可以等自己真想联系他时再问。","If you feel like you'd have to brace for a lecture just to ask, you can let it sit today. You've met him once. You can wait until you really feel like reaching out."]}],"memories":[]},"4.3.4":{"time":"After the Meetup","lines":[["可以可以，你太聪明了！我去问","Yeah, that'll work. You're so smart! I'll ask her."],["她愿意去问了。接下来需要让同桌先征求表哥的意见，可以确认这一步，让她不用现在就准备加上后要聊什么。","She's going to ask. Her deskmate needs to check with him first. I can confirm that step so she doesn't feel like she has to plan what to say after they add each other."]],"choices":[{"thought":["先把这一句问出去","Send that first question"],"reply":["嗯，你可以先这么开口。等散场你有机会单独跟她说，再问就行。","Yep, that's a good way to start. Ask her when you get a chance to talk to her alone after the game."]}],"memories":[]},"4.3.5":{"time":"After the Meetup","lines":[["嗯…那算了，不问了，万一她再唠叨我我更烦，就这样吧。","Hmm… forget it. I won't ask. If she starts lecturing me again I'll just get annoyed. Let's leave it."],["她想到同桌可能又说起前任，就决定不问了。可以让她按自己的决定收尾，不用反复说服她。","Thinking about another conversation about her ex has put her off asking. Let her call it without making a case for it again."]],"choices":[{"thought":["让她先把这事放下","Let it go for now"],"reply":["那今天就先不问。觉得他不错，和现在就得加微信，是两件可以分开想的事。","Okay, leave it for today. You can think he seems nice and decide to add him on WeChat some other time."]}],"memories":[]},"4.2.3-direct":{"time":"After the Meetup","lines":[["我直接问了，说下次玩还想叫她。她说可以加。她喊她同桌帮忙推一下，结果喊的是我妹。靠，问之前还觉得巨尴尬。","I asked her myself. Said I'd like to invite her next time we play. She said I could add her. Then she asked her deskmate to send over her contact, and it was my cousin she called over. Damn, I thought it was gonna be so awkward before I asked."],["他当面问了，对方答应加微信，随后由她的同桌推联系方式。可以肯定他已经把最难开口的一句说了，接下来等对方发过来就好。","He asked her himself and she said yes. Now her deskmate will share the contact. He's already said the hardest part. All he has to do now is wait for it to come through."]],"choices":[{"thought":["肯定他已经当面问过","Acknowledge that he asked"],"reply":["你当面问了，她也答应了。等你妹把微信推过来就行。真说出来以后，是不是比你刚才想的简单一点？","You asked her in person and she said yes. Now you just need your cousin to send you her WeChat contact. Was saying it out loud a little easier than you thought?"]}],"memories":[]},"4.3.6-direct":{"time":"After the Meetup","lines":[["我刚才还在想要不要问呢，他直接走过来，说下次玩还想叫我，问能不能加微信。我说可以，就叫我同桌帮我推一下。哎，省我开口了。","I was still wondering if I should ask, and he just came over. Said he'd like to invite me next time they play and asked if he could add me on WeChat. I said sure and asked my deskmate to send over my contact. Whew, saved me having to ask."],["他已经当面问过，她也答应了。现在只等同桌转发联系方式，可以回应她松了口气。","He's already asked in person and she's said yes. Now she's just waiting for her deskmate to share the contact. I can respond to how relieved she is."]],"choices":[{"thought":["接住她松了口气","Share her relief"],"reply":["嗯，你们当面说好了。等你同桌把微信推过去，想聊的时候就能直接聊了。","Yep, you worked it out in person. Once your deskmate sends over your WeChat contact, you two can talk whenever you feel like it."]}],"memories":[]},"4.end-no-contact":{"time":"After the Meetup","lines":[],"choices":[],"memories":[]},"5m.1.1-A":{"time":"WeChat · Day 1","lines":[["我妹说，那女生也找她要过我微信！那不就是我俩想到一块去了？现在加上了，我第一句发啥啊，别显得我准备半天似的。","My cousin says that girl asked her for my WeChat too! So we were both thinking the same thing? We've added each other now. What do I send first? I don't want it to sound like I've been working on it all day."],["两人都问过联系方式，他兴奋，也怕第一句显得太刻意。可以用桌游做开头，有共同话题，对方也容易接。","They both asked for each other's contact. He's excited, but doesn't want to sound scripted. They already have board games in common. That's an easy opening for her to answer."]],"choices":[{"thought":["给一句自然的开场","Give him an easy opening"],"reply":["可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。","You could send, “Hey, I sat next to you at board games. Remember me?” You've already met. You can just bring up that day."]}],"memories":[]},"5m.1.1-B":{"time":"WeChat · Day 1","lines":[["微信到手了，我妹牵的线。上次桌游我还输给她了。我对着输入框抠半天了，第一句咋整？总不能发个你好吧，像上门推销的。","Got her WeChat. My cousin put us in touch. She beat me at board games last time. I've been staring at the text box forever. What's my first line? I can't just say hello. I'll sound like a door-to-door salesman."],["联系方式有了，他卡在怎样开始。可以顺着他对桌游的印象给一句自嘲式开场，省去正式自我介绍的压力。","He has her contact but is stuck on how to begin. He can joke about losing the game and skip the formal introduction."]],"choices":[{"thought":["从输掉的桌游开口","Open with losing the game"],"reply":["你可以发「嗨，那天桌游输给你的那个，还记得吗？」有见过面的事可以聊，一句够用了。","You could send, “Hey, I'm the guy you beat at board games. Remember me?” You've already met, so one line is plenty."]}],"memories":[]},"5m.1.1-C":{"time":"WeChat · Day 1","lines":[["反转了兄弟，我还没想好咋开口呢，她先加我了！是不是我妹跟她说啥了？你说她这啥意思啊？","Plot twist, dude. I hadn't even figured out how to ask and she added me first! You think my cousin said something to her? What do you think it means?"],["她主动加了好友，他却开始猜妹妹有没有说过什么。能确定的是他们已经加上了，可以建议先打招呼，等她实际回应。","She added him first and now he's guessing what his cousin said. What he knows is that they're connected. He can say hi and see how she really responds."]],"choices":[{"thought":["先打招呼，看看怎么聊","Say hi and see what happens"],"reply":["至少她愿意加你。你可以先发「嗨，上次桌游玩得挺开心的」。她为什么先加，等你们聊几句可能就明白了。","She wanted to add you, at least. You can start with, “Hey, I had fun playing board games the other day.” You might get a better sense of why she added you once you talk."]}],"memories":[]},"5m.1.1-D":{"time":"WeChat · Day 1","lines":[["加上了，我妹给推的。我刚才当面都敢问，怎么打个招呼又卡住了。你说第一句咋发？","We're connected. My cousin sent her contact over. I managed to ask in person, so why am I freezing up just saying hi? What should I send first?"],["他当面问到了联系方式，第一句反倒有点紧张。可以从两人一起玩的桌游开口。","He managed to ask in person, but sending the first message makes him nervous. He can start with the game they played together."]],"choices":[{"thought":["给一句自然的开场","Give him an easy opening"],"reply":["可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。","You could send, “Hey, I sat next to you at board games. Remember me?” You've already met. You can just bring up that day."]}],"memories":[]},"5m.1.2":{"time":"WeChat · Day 1","lines":[["想了想，你给的那句我有点发不出来。我自己写了个：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。咋样，会不会有点傻？","I thought about it and I don't think I can send your line. I wrote one myself: “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” How's that? Too dumb?"],["他改成了自己会说的话，还提了十一点睡觉。开头能让对方想起见面的情景，后半句也留了能接的话题。","He's rewritten it in his own words and mentioned going to bed at eleven. The first part reminds her how they met, and the second gives her something to respond to."]],"choices":[{"thought":["就用他自己写的这句","Use the line he wrote"],"reply":["挺像你会说的话。「还记得我不」好接，十一点必睡也有点好笑。就照这句发吧。","That sounds like you. “Remember me?” is easy to answer, and the eleven o'clock rule is kind of funny. Send it as it is."]}],"memories":[]},"5f.1.1-A":{"time":"WeChat · Day 1","lines":[["我同桌说，她表哥也找她要过我微信。等于我俩互相问了一遍？刚加上，他就发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？","My deskmate says her cousin asked for my WeChat too. So we both asked her? We just added each other and he sent, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Why is he giving me his bedtime right off the bat? How do I answer?"],["她发现对方也主动问过联系方式，对他的开场觉得好笑。可以给一句轻松的回复，既回答还记不记得，也顺着十一点睡觉开个玩笑。","She found out he asked for her contact too. His opening made her laugh. She can answer his question and tease him about going to bed at eleven."]],"choices":[{"thought":["顺着十一点的梗回","Play along with the bedtime joke"],"reply":["回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。","“I remember. It's almost your bedtime, too” sounds natural. It tells him you remember and lets you tease him a little. See where the conversation goes from there."]}],"memories":[]},"5f.1.1-B":{"time":"WeChat · Day 1","lines":[["磨半天终于把他加上了，开场白还没憋出来呢，他先发来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。行吧，省得我想了。咋接？","I finally added him after putting it off forever. I hadn't even come up with an opening when he sent, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Well, that saves me the trouble. What do I say?"],["她先加了好友，又因为对方先开口松了口气。对方已经提供了见面和睡觉两个话题，可以直接接他的句子。","She added him first and is relieved he got the conversation going. He's given her both the game and his bedtime to talk about. She can just pick up where he left off."]],"choices":[{"thought":["接住他先递来的话","Pick up what he started"],"reply":["可以回「记得，你也要到点睡了」。他给了现成的话题，你按平时说话的样子接一句就行。","You could say, “I remember. It's almost your bedtime, too.” He's given you something to talk about. Just say it the way you normally would."]}],"memories":[]},"5f.1.1-C":{"time":"WeChat · Day 1","lines":[["我同桌那个表哥加我了。我刚点通过，他消息就来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人是有多着急，哈哈。回啥好啊？","My deskmate's cousin added me. I hit accept and his message came right in: “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Someone's in a hurry, haha. What should I say?"],["他发消息的速度让她觉得好笑，她也在考虑怎么回应。可以给一句低压力的答复，聊天要不要继续，等她自己感受。","How fast he messaged made her laugh. She's wondering how to answer. Give her an easy reply and leave it to her how much she wants to keep talking."]],"choices":[{"thought":["先回一句，再看怎么聊","Reply and see how it goes"],"reply":["可以回「记得，你也要到点睡了」。顺着他的梗逗一句就行，接下来想聊多少，看你自己舒服不舒服。","You could say, “I remember. It's almost your bedtime, too.” Tease him a little about the bedtime thing. Then keep talking as long as you feel like it."]}],"memories":[]},"5f.1.1-D":{"time":"WeChat · Day 1","lines":[["那个刚才当面问我的男生，加上了。我同桌把我微信推给他了。他刚发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？","The guy who asked me in person just added me. My deskmate sent him my WeChat. He just wrote, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Why is he giving me his bedtime right off the bat? How do I answer?"],["她已经收到他的第一条消息，觉得开场好笑。可以给一句轻松的回复，顺着十一点睡觉开个玩笑。","She's got his first message and thinks it's funny. She can reply lightly and tease him about going to bed at eleven."]],"choices":[{"thought":["顺着十一点的梗回","Play along with the bedtime joke"],"reply":["回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。","“I remember. It's almost your bedtime, too” sounds natural. It tells him you remember and lets you tease him a little. See where the conversation goes from there."]}],"memories":[]},"5m.1.3":{"time":"WeChat · Day 1","lines":[["发了！四十来分钟才回，就一句『记得，你也要到点睡了』。我看了半天，这算是想聊还是在跟我说晚安啊？","Sent it! Took her like forty minutes to reply, and all she said was “I remember. It's almost your bedtime, too.” I've been looking at it forever. Is she trying to chat or saying good night?"],["他在用等待的时间猜对方态度。原话既回应了自我介绍，也顺着他提到了睡觉。可以自然道晚安，也可以用桌游接一句。","He's reading her attitude into how long she took to answer. She answered his question and picked up on his bedtime joke. He can say good night or keep talking about board games."]],"choices":[{"thought":["先道晚安","Say good night"],"reply":["她至少接住了你十一点睡觉的梗，四十分钟说明不了更多。你可以回「还没到点呢，我先去洗漱了，晚安」。第一晚聊到这儿也挺好。","She got your joke about going to bed at eleven. Forty minutes doesn't tell you much else. You can say, “Not bedtime yet. I'm gonna get ready for bed, though. Good night.” That's a fine place to end the first night."]},{"thought":["接着聊桌游","Keep talking about board games"],"reply":["要是还想聊，就回「还早呢。桌游我输你的那局还没扳回来，什么时候再战？」有个她能接的话题，聊到哪算哪。","If you want to keep talking, try, “Still early. I haven't made up for losing to you at board games. When's the rematch?” It gives her something to answer. See where it goes."]}],"memories":[]},"5m.1.4":{"time":"WeChat · Day 2","lines":[["昨晚听你的，道了晚安就真睡了，还赶在十一点前，破天荒。今早她又找我聊了两句。也没啥事，就是我还想跟她多说会儿，老想点开那个框。","I took your advice last night. Said good night and actually went to bed. Before eleven, even. There's a first. She messaged me again this morning. It was nothing big. I just wanted to talk more and keep opening the chat."],["道晚安之后，女生仍主动联系。他惦记的是没聊够，可以肯定这个感受，同时用今早的情况帮他放下对昨晚收尾的顾虑。","She reached out after he said good night. He wishes they'd talked longer. I can acknowledge that and point to this morning so he doesn't have to worry about how he left things last night."]],"choices":[{"thought":["昨晚收得早，今天还能聊","They can still talk today"],"reply":["昨晚那句晚安没把话聊死，今早她还来找你了。想再多聊两句很正常，有事想跟她说的时候再发就行。","Saying good night didn't end the conversation for good. She came back this morning. Of course you want to talk a little more. Send something the next time you've got something to say."]}],"memories":[]},"5m.1.5":{"time":"WeChat · Day 2","lines":[["昨晚顺着翻盘那个梗还真聊起来了，聊到十一点多。十一点必睡，当天就倒了，笑死。她后来跟我说晚安。结果今天到现在一条没有……我昨晚是不是聊太多了？","The rematch joke actually got us talking last night, past eleven. Asleep by eleven, no exceptions, and I blew it on day one lol. She said good night later. Now it's been all day and nothing… Did I talk too much last night?"],["昨晚聊得投入，今天暂时安静，他把两件事联系起来了。先指出昨晚有正常收尾，今天的沉默还不足以判断她的态度。","The conversation went well last night and today has been quiet. He's connecting the two. They said good night normally. Today's silence doesn't tell him how she feels."]],"choices":[{"thought":["先让他别盯着回复","Take his eyes off the chat"],"reply":["你们昨晚聊得起来，最后也正常道了晚安。今天还没消息，先别拿它给昨晚判分。做点自己的事，晚些再看。","You got talking last night and said good night like normal. She hasn't messaged yet today. You don't have to use that to grade last night. Do something of your own for now and check later."]}],"memories":[]},"5f.1.2":{"time":"WeChat · Day 2","lines":[["昨晚我先回了句『记得，你也要到点睡了』，本来就随口一逗。这两天聊下来比我想的舒服，有话就接，我没回他也没催。今天他发了几条，我忙着还没仔细回。晚上有空了，我去找他唠两句。","Last night I just said “I remember. It's almost your bedtime, too” to tease him. Talking these last couple of days has been easier than I expected. We pick up when there's something to say, and he doesn't chase me if I don't answer. He sent a few things today and I've been too busy to really reply. I'll go chat a little tonight when I have time."],["她觉得这几次聊天没有催促，也有了主动继续聊的意愿。可以肯定她想联系就去联系，按她现在有空的节奏开始。","She hasn't felt rushed in these conversations and feels like reaching out herself. She can start when she has time, at a pace that feels good to her."]],"choices":[{"thought":["顺着她主动联系的念头","Encourage her to reach out"],"reply":["你现在有空，也有话想跟他说，就去聊两句吧。前面的消息挑一个你真想接的回，剩下的不用补作业。","If you've got a minute now and feel like talking to him, go ahead. Pick whichever earlier message you actually want to answer. The rest isn't homework."]}],"memories":[]},"5m.1.6":{"time":"WeChat · Day 2","lines":[["刚聊完！她晚上主动来找我了，一聊就一个多钟头。其实也没啥大事，东一句西一句的，还挺舒服。我白天还在那儿瞎想，现在感觉也不用老算她多久回了。","Just finished talking! She messaged me first tonight and we talked for over an hour. Nothing big, just this and that. It felt pretty easy. I was overthinking it all day. Now I feel like I don't have to keep timing her replies."],["他收到女生的主动联系，注意力从回复间隔回到了聊天本身。可以回应这次体验，让他把舒服的来往当作参考。","She reached out first. He's paying attention to the chat instead of the gaps between replies. I can respond to that and help him use the way it felt as a reference."]],"choices":[{"thought":["肯定这次轻松的来往","Acknowledge how easy it felt"],"reply":["你开始在意的是这一个钟头聊得舒不舒服了。能东一句西一句聊这么久，听着挺自在。下次有想说的话，再接着聊就行。","Now you're thinking about how that hour felt. An hour of talking about whatever comes up sounds pretty easy. Next time you've got something to say, you can just pick up from there."]}],"memories":[]},"5f.1.3":{"time":"WeChat · Day 3","lines":[["他回消息也太勤快了……我下班一看攒了一堆。不是不想理他，就是累，连回啥都懒得想。对了，他头像是只小熊，看着挺憨。哎，今晚我就想回个什么，让他知道我看见了。","He replies so much… I got off work and there was a whole pile of messages. I do want to talk to him, I'm just tired. I can't even be bothered thinking of what to say. Oh, his profile pic is a bear. Looks kind of goofy. Anyway, tonight I just want to send something so he knows I saw them."],["她看见了消息，也想让对方知道，但下班后没有精力长聊。可以建议直接说明今天很累，或用一个表示累了的表情先回应。","She wants him to know she saw the messages, but doesn't have the energy for a long conversation after work. She could tell him she's tired or send a reaction that says it for her."]],"choices":[{"thought":["直接说今天累了","Say she's tired today"],"reply":["可以回「下班瘫了，今天回不动了」。他知道你在休息，你也不用边累边想怎么把每条都回得有意思。","Try, “I got home from work and I'm wiped. Don't have it in me to reply tonight.” Then he knows you're resting, and you don't have to make every answer interesting when you're exhausted."]},{"thought":["发个表情先接一句","Send a reaction for now"],"reply":["懒得打字就丢个摊倒的表情，让他知道你看见了。想好好聊的话，等有精神的时候再聊。","If typing sounds like too much, send a sticker of someone flopping over so he knows you saw it. You can talk properly when you have the energy."]}],"memories":[]},"5f.1.4":{"time":"WeChat · Day 3","lines":[["我真照你说的说累了。结果他秒回一大段，什么『好好休息』『别太拼』『记得吃晚饭』……排比句都出来了。我本来就回不动，看见那一大段更不知道说啥，就回了个嗯。我是不是有点不知好歹？","I did what you said and told him I was tired. He sent me a whole paragraph instantly. “Get some rest,” “don't push yourself,” “remember to eat dinner”… He was practically writing poetry. I already had no energy to reply, and after all that I had even less idea what to say. I just went “mm.” Am I being ungrateful?"],["她直说累了，对方给了很多关心，她反而一时不知道怎么接。可以肯定她已经回应过，接不动时先休息，也不必现在评价这份关心。","She told him she was tired and got a lot of care back. She didn't know how to answer it all. She's answered him already. She can rest without having to decide how she feels about it now."]],"choices":[{"thought":["让她先歇一会儿","Let her rest"],"reply":["你已经跟他说今天很累了，回个「嗯」也够了。他想关心你，你现在接不动，两件事都说得通。先歇会儿，明天有精神再聊。","You already told him you were tired. An “mm” is enough. He wanted to look after you, and you didn't have it in you to keep talking. Both make sense. Get some rest and talk tomorrow if you're up for it."]}],"memories":[]},"5f.1.5":{"time":"WeChat · Day 3","lines":[["丢了个摊倒的表情过去，他正经回我『你早点休息』，还带了个他自己的表情包，土得掉渣。就是……有点可爱。算了，我洗漱去了。","I sent him a sticker of someone flopping over and he seriously wrote “Get some rest,” with his own sticker. It was so corny. It was also… kinda cute. Whatever, I'm getting ready for bed."],["她用一个表情回应了消息，对方也顺着聊了两句。她觉得那份认真有点可爱，现在想收尾，可以轻松接一句。","She sent a sticker and he answered in his own way. She found his earnestness kind of cute. She's wrapping up, so something light is enough."]],"choices":[{"thought":["顺着这个小插曲收尾","End on that little moment"],"reply":["土得可爱也是一种可爱。今天回到这儿就挺好，去洗漱吧。","Corny cute is still cute. That's a good place to leave it tonight. Go get ready for bed."]}],"memories":[]},"5m.2.1":{"time":"WeChat · Day 9","lines":[["又聊了一个礼拜。她回得慢但都会回，我好像也习惯了。今天她在家加班，还给我发了张照片，配一个『困』。她的猫踩着键盘抢镜，叫煤球，特别敬业。你说她这算不算有点把我当自己人了？","We've been talking for another week. She takes a while to reply, but she always does. I think I'm used to it now. She was working late at home today and sent me a pic with “sleepy.” Her cat was stepping all over the keyboard, stealing the shot. His name's Coalball. Very dedicated. You think this means she sees me as one of her people now?"],["她主动分享加班和猫的照片。他把稳定的来往理解成亲近，可以肯定这个具体变化，再建议顺着她发来的内容回应。","She sent him a casual photo of herself working late and her cat. He reads their steady contact as closeness. I can point to the specific change and suggest answering what she sent."]],"choices":[{"thought":["顺着照片聊两句","Say something about the photo"],"reply":["她愿意把这种随手拍的日常发给你，至少跟你聊天是自在的。可以回一句「煤球今天也加班啊」，再让她忙完早点歇。先聊这张照片就挺好。","She's comfortable enough to send you a random photo from her day. You could say, “Coalball putting in overtime too?” and tell her to get some rest when she's done. The photo's enough to talk about for now."]}],"memories":[{"label":"都会回","name":"Always replies","quote":["她回得慢但都会回","She takes a while to reply, but she always does"]}]},"5m.2.2":{"time":"WeChat · Day 10","lines":[["我现在一天能给她发八百条『在干嘛』。她有时候隔俩小时才回，我就又点开那个框看，明明啥都没响。客观说，我是不是有点上头？","At this point I send her “what are you up to” eight hundred times a day. Sometimes she takes two hours to reply and I keep opening the chat when I know my phone hasn't gone off. Objectively, am I getting a little carried away?"],["他开始留意自己的消息频率，也发现等待让他不安。可以试着少发重复问候，或保留自然分享，同时给对方留出回话的时间。","He's noticed how often he's messaging and how anxious he gets waiting. He can cut back on repeated check-ins, or keep sending things naturally and leave her time to answer."]],"choices":[{"thought":["试试少发重复问候","Ease up on the check-ins"],"reply":["有点，但你已经发现自己在等什么了。今天试试少发几次「在干嘛」，真有事想分享再发，看看空下来的时候你是什么感觉。","A little. You've noticed what you're waiting for, though. Try sending “what are you up to” fewer times today. If you've got something you really want to share, send that, and see how you feel in between."]},{"thought":["有话就聊，给她时间回","Share things, give her time"],"reply":["想跟她说话很正常。碰到好玩的就发一条，她忙的时候先去做你的事，等她有空再接着聊。","It's normal to want to talk to her. Send something when you come across something fun. When she's busy, go do your own thing and pick up again when she's free."]}],"memories":[]},"5m.2.3":{"time":"WeChat · Day 10","lines":[["今天试着少发了，话打了删删了打，最后就发了句晚安。她回得跟平时一样，也没问我咋这么安静……我感觉我在演一个淡定的人。","I tried sending less today. Kept typing and deleting and all I sent in the end was good night. She replied like usual. Didn't even ask why I was so quiet… I feel like I'm doing an impression of someone who's chill."],["他减少了发消息的次数，对方的回复没有明显变化。他仍然不舒服，可以帮他区分想聊的心情和刻意压住自己的做法。","He's sent fewer messages and her replies haven't changed much. He's still uneasy. I can help him separate wanting to talk from making himself hold it in."]],"choices":[{"thought":["让他留点自己舒服的节奏","Find a pace he can live with"],"reply":["少发一天也会难受，毕竟你原本就想找她说话。真有事想分享，可以照常发，没必要把自己练成一个从来不主动的人。","Even one day of sending less can feel rough when what you really want is to talk to her. If you've got something to share, go ahead. You don't have to train yourself to never start a conversation."]}],"memories":[]},"5m.2.4":{"time":"WeChat · Day 10","lines":[["今天还是想找她就找了，发了好几回。她有时候一个『哈哈哈』隔俩小时才来。我有一阵真像在对着屏幕自己跟自己聊天，笑死。","Today I still messaged her whenever I felt like it. A bunch of times. Sometimes it takes two hours to get a “hahaha.” For a while I really felt like I was just talking to myself through a screen lol."],["他继续主动联系，回复的节奏还是不同。现在已经有了一段日常往来，可以建议约一次见面，让他看看两人当面相处的感觉。","He kept reaching out and their reply speeds still differ. They've been talking for a while now. Meeting in person would give him a chance to see what being together feels like."]],"choices":[{"thought":["把话题转向见面","Bring up meeting in person"],"reply":["隔着屏幕，有时候只能等她有空。你们已经聊了一阵了，可以问问她哪天愿意出来吃个饭，当面相处一会儿，可能比来回猜回复轻松。","Over text, sometimes all you can do is wait until she's free. You've been talking for a while. You could ask if she'd like to grab dinner sometime. Being together might feel easier than guessing at replies."]}],"memories":[]},"5m.2.5":{"time":"WeChat · Day 11","lines":[["今天还是这样，不找吧心里老惦记，找吧又怕她嫌烦。线上聊得再欢，她一忙我就在这儿干等着。咋整啊？","Same today. If I don't message her, I keep thinking about it. If I do, I worry I'm annoying her. However much fun we're having online, the minute she gets busy I'm just sitting here waiting. What do I do?"],["控制发消息的频率没有解决他的顾虑。他想要一次能专心相处的机会，可以把见面作为具体建议，让对方按自己的时间答复。","Sending fewer messages hasn't settled his worries. He wants time together where they can both be present. Suggest meeting and let her tell him when she's free."]],"choices":[{"thought":["试着约一次见面","Try asking her out"],"reply":["可以试试约她吃个饭。你们聊了这么久，有机会当面说话，你也能看看自己跟她待一块是什么感觉。先问她哪天方便就好。","You could ask her to get dinner. You've been talking for a while. In person, you can see how it feels to spend time together. Just ask when she's free."]}],"memories":[]},"5f.2.1":{"time":"WeChat · Day 11","lines":[["这一周多一直断断续续聊着。他今天突然夸我开朗，说『跟你聊天不累』。那是，我不在办公室他们都没那么热闹，周末也老有人叫我出去。他坐那儿话倒不多，手机上还天天找我。反正听他夸我还挺开心的，嘿嘿。","We've been chatting on and off for over a week. Today he suddenly said I'm outgoing and that “Talking to you never feels like work.” Well, yeah. The office is way quieter without me and people are always asking me out on weekends. He's quiet when he's sitting there in person, then on his phone he's messaging me every day. Anyway, it felt really good to hear him say it, heh."],["她喜欢被他说聊天不累，也享受自己能让大家聊起来。可以回应这份开心，也可以借机问问，累的时候她更愿意怎么和人相处。","She liked hearing that talking to her feels easy and enjoys getting people talking. I can share in that or ask how she likes to be around people when she's worn out."]],"choices":[{"thought":["顺着她的开心聊","Share her delight"],"reply":["你确实喜欢跟人聊天，也能让场子热起来。他说跟你聊天不累，你听了开心也正常，有些夸奖好听就是因为对方说到了你喜欢自己的地方。","You really do like talking to people, and you get a room talking. It makes sense that hearing him say it's easy with you felt good. Some compliments land because someone notices something you already like about yourself."]},{"thought":["问问她累时愿意找谁","Ask who she turns to when tired"],"reply":["跟谁都能聊是你的长处。我还想问一个小问题，你累了、平时那股劲儿没了的时候，有没有谁是你还愿意单独找的？没想到也没关系。","Being able to talk to anyone is a strength. I've got one little question: when you're tired and don't have your usual energy, is there anybody you'd still want to talk to one-on-one? It's okay if no one comes to mind."]}],"memories":[]},"5f.2.2":{"time":"WeChat · Day 11","lines":[["晚上跟闺蜜吃饭，不知道怎么又说起他了。我说有个闷葫芦天天找我聊天，她们立马开始起哄。我还说就是普通朋友啊，结果回家路上自己一直笑。烦死了。","I was having dinner with my best friends and somehow brought him up again. I said there was this quiet guy who messages me every day, and they immediately started teasing me. I kept saying we're just friends, then smiled all the way home. So annoying."],["她嘴上坚持普通朋友，回家路上却还在笑。她来分享的是被说中心事的有趣，可以顺着玩笑回应，不替她确定两人的关系。","She insists they're just friends, but she was still smiling on the way home. She's sharing how funny it was to get called out. I can play along without deciding what they are for her."]],"choices":[{"thought":["顺着她嘴硬的玩笑","Play along"],"reply":["你把人叫闷葫芦，还专门带去饭桌上讲，难怪她们起哄。先让你们当普通朋友吧，今天笑这一路也挺好。","You called him the quiet guy and still made a point of bringing him up at dinner. No wonder they teased you. We'll call you two just friends for now. A smile all the way home is pretty nice."]}],"memories":[]},"5f.2.3":{"time":"WeChat · Day 11","lines":[["睡前又想了下你问的那个。还真想不出来。我累了就点个外卖，自己刷会儿手机，也不想找谁。明明平时跟谁都能聊，真想说点啥了好像又差一口气……说不上来，今晚有点怪怪的。","I thought about your question again before bed. I really can't think of anyone. When I'm tired I order delivery, scroll on my phone for a bit, and don't feel like talking to anybody. I can talk to anyone normally, but when I actually want to say something it feels like something's missing… I can't explain it. Tonight feels kind of weird."],["她认真想了白天的问题，发现平时热闹和疲惫时想找谁是两回事。她还说不清这份失落，可以先回应她的发现，不急着建议她改变交友方式。","She thought about the question and realized being sociable isn't the same as having someone to turn to when she's tired. She can't quite name what's bothering her. Let her stay with what she noticed."]],"choices":[{"thought":["先陪她把这点说清楚","Help her name the feeling"],"reply":["平时跟大家聊得来，和累的时候想自己待着，都很正常。你今天只是发现了自己有时会想跟谁更近一点。先把这句话留着，不用今晚就想出那个人是谁。","Getting on with everyone and wanting time alone when you're tired both make sense. Today you noticed that sometimes you want to feel a little closer to someone. You can sit with that for now. You don't have to know who it is tonight."]}],"memories":[]},"5f.2.4":{"time":"WeChat · Day 12","lines":[["他今天问我家是哪儿的、家里都有谁，我顺手聊别的去了。他也没接着问。这点我还挺喜欢的，换个人一通问我早烦了。","He asked where my family was from today and who was in it. I just changed the subject, and he didn't keep asking. I liked that about him. If someone else started firing off questions I'd be annoyed already."],["她觉得被尊重，因为把话题转开后对方没有追问。可以肯定具体的分寸感，不需要由这一次聊天判断两人整体相处得怎样。","She felt respected when he didn't press after she changed the subject. I can acknowledge what he did without drawing conclusions about the whole relationship from one chat."]],"choices":[{"thought":["回应她喜欢的分寸感","Acknowledge what she liked"],"reply":["他看你没接那个话题，也就跟着聊别的了。你喜欢这种自在挺正常，家里的事什么时候想说，由你决定。","He saw you didn't pick up that topic and followed you onto the next one. It makes sense that felt easy. You get to decide when you want to talk about your family."]}],"memories":[]},"5m.3.1":{"time":"WeChat · Day 12, Evening","lines":[["行，听人劝吃饱饭。我想约她周六出来吃个饭。上次桌游我还输给她了。直接问周六有空吗，会不会显得有点猴急？","Okay, okay, I'll take the advice. I want to ask her to dinner Saturday. She beat me at board games last time. If I just ask if she's free Saturday, will I look like I'm rushing it?"],["他已经决定约饭，想把邀请说得自然。可以用两人都知道的桌游输赢作由头，给出具体时间，让她有余地答复。","He's decided to ask her to dinner and wants it to feel natural. He can use the game they both remember, name a day, and leave her room to answer."]],"choices":[{"thought":["用桌游的事开口约饭","Ask her out through the game"],"reply":["可以发「周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭」。约什么、哪天约都清楚，她也可以按自己的安排回你。","Try, “Are you free Saturday night? I still haven't gotten you back for beating me at board games. Let me take you to dinner.” She knows what you're asking and when, and can answer based on her own plans."]}],"memories":[]},"5f.3.1":{"time":"WeChat · Day 12, Evening","lines":[["他问我『周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭』。我答应了，还挺会找台阶的。我同桌就是他表妹，兜了一圈还真约上了。就是明天项目有个节点，搞不好得加班。要真累成那样我也不想临时鸽他。还有，见面我要注意啥吗？","He asked, “Are you free Saturday night? I still haven't gotten you back for beating me at board games. Let me take you to dinner.” I said yes. Smooth excuse, actually. My deskmate is his cousin. All that going around and now we're really meeting up. Only thing is we've got a project deadline tomorrow and I might have to work late. If I'm that wiped out, I don't want to cancel on him last minute. Also, anything I should keep in mind when I see him?"],["她已经答应见面，也想到工作可能影响安排。可以给一个轻松的见面建议，再提醒如果时间有变，早点告诉对方。","She's already agreed to meet him and realizes work could affect the plan. Keep the advice about meeting simple, and remind her to let him know early if the timing changes."]],"choices":[{"thought":["让她按平时相处，有变提前说","Keep it natural and flag changes early"],"reply":["见面就聊你们平时会聊的事，桌游都打过了，不用专门准备话题。要是明天忙完发现周六实在不行，提前告诉他，再提个你能去的时间。","Talk about whatever you usually talk about. You've already played board games together. No need to prepare topics. If work makes Saturday impossible, tell him in advance and suggest a time you can do."]}],"memories":[{"label":"同桌是表妹","name":"Deskmate is his cousin","quote":["我同桌就是他表妹","My deskmate is his cousin"]}]},"5m.3.2":{"time":"Friday · Change of Plans","lines":[["她说周六来不了了，项目临时有个节点，问改周日行不行。还发了个不好意思的表情。我知道她说了周日，但我还是有点不得劲。会不会其实不想来啊？","She can't come Saturday. Something came up on her project and she asked if Sunday works. She sent a little sorry sticker, too. I know she said Sunday, but it still feels off. What if she just doesn't want to come?"],["原来的约定改了，他有些失落。她给出了具体的替代日期，这能回应他担心约会取消的问题，仍无法从一句话确定她的心情。","The change disappointed him. She offered a specific day instead. That helps with his fear it's off entirely, but a message can't tell him how she feels."]],"choices":[{"thought":["先把周日约下来","Settle on Sunday"],"reply":["你本来在等周六，失落也正常。她主动提了周日，目前你们还有见面的安排。可以回「行，周日，你忙你的」，先把这次改期接下来。","You were looking forward to Saturday. It makes sense you're disappointed. She suggested Sunday herself, so you're still set to meet. You can answer, “Okay, Sunday. Do what you need to do,” and take it from there."]}],"memories":[]},"5f.3.2":{"time":"Friday · Change of Plans","lines":[["乌鸦嘴，项目真炸了。周六去不了，我跟他说改周日行不行。他就回了句『行，周日，你忙你的』。我看了好几遍，怎么有点像不高兴？","I totally jinxed it. The project blew up. Saturday's out, so I asked if Sunday would work. All he wrote was “Okay, Sunday. Do what you need to do.” I've read it over and over. Doesn't he sound kind of upset?"],["他同意改到周日，回复短，她担心改期让他失望。情绪还无法确认，可以建议她补一句自己仍期待见面，让对方知道这次变动是工作所致。","He agreed to Sunday in a short reply. She's worried the change disappointed him. I can't tell how he's feeling. She could add that she's still looking forward to it, so he knows it was about work."]],"choices":[{"thought":["补一句她还想见面","Say she's still looking forward to it"],"reply":["他答应周日了，单看这句话还看不出有多介意。你要是也期待见面，可以补一句「周日见啊，我还是挺想去的」。事情变了，把你在意的部分说清楚就好。","He agreed to Sunday. That one line doesn't tell you how put out he is. If you're looking forward to it, say, “See you Sunday. I still really want to go.” The plans changed. You can tell him the part that matters to you."]}],"memories":[]},"5m.3.3":{"time":"Sunday Night · After the Date","lines":[["见完了！吃饭散步聊了三个多小时，临走还拍了张合照。她问我下次想吃啥，说她想吃烤肉，下回带我吃。吃饭时她回了好几条工作消息，我坐那儿有点不知道干啥。还有个事，我跟她说，有次她半天没回，我半夜还刷她朋友圈，看她睡了没。她笑了下，说『你想得可真多』。我这话是不是说多了？","Just got back! We ate and walked and talked for over three hours. Took a photo together before we left. She asked what I wanted to eat next time. She said she was craving barbecue and would take me next time. She answered a few work messages over dinner and I just sat there not knowing what to do. One other thing: I told her about the time she didn't reply for half a day and I was up at midnight scrolling through her Moments to see if she'd gone to bed. She laughed a little and said, “You really do overthink things.” Did I say too much?"],["他既高兴她主动提下次，又担心自己那句坦白让她不舒服。她回了工作消息，也有继续见面的表示。可以分别回应这两件事，先不替她解释那声笑。","He's happy she brought up a next time and worried his admission made her uncomfortable. She answered work messages and also suggested meeting again. I can address each without deciding what her laugh meant."]],"choices":[{"thought":["回应见面的好感和他的顾虑","Address the date and his worry"],"reply":["她主动提了下次吃烤肉，这个信号比你回想她笑得像不像介意更具体。回工作消息那几分钟，你坐着会尴尬也正常。至于那句「你想得可真多」，目前听不出她有多介意，下次相处时留意她怎么回应就好。","She brought up getting barbecue next time. That's more concrete than trying to remember how much her laugh sounded like it bothered her. Feeling awkward while she answered work messages makes sense. As for “You really do overthink things,” it's hard to tell how much it bothered her. See how she responds next time you're together."]}],"memories":[{"label":"想吃烤肉","name":"Craving barbecue","quote":["说她想吃烤肉","she was craving barbecue"]}]},"5f.3.3":{"time":"Sunday Night · After the Date","lines":[["吃完了！本来还怕见了尴尬，结果吃饭散步聊了三个多小时，临走还拍了张合照。饭吃到一半我还回了好几条工作消息，回完他也能接上。散步的时候他跟我说，有次我半天没回，他半夜还在刷我朋友圈，看我睡了没。我愣了一下，笑着说『你想得可真多』。不过我后来还在想，是不是家里给了特别多爱，才这么会关心人？吃啥逛啥他都听我的，也挺省心。","We just got done! I thought it might be awkward, but we ate and walked and talked for over three hours. Took a photo together before leaving. I answered a few work messages halfway through dinner, and he picked right back up when I was done. On the walk he told me about the time I didn't reply for half a day and he was up at midnight scrolling through my Moments to see if I'd gone to bed. I paused, then laughed and said, “You really do overthink things.” But later I wondered, did he grow up with a lot of love at home to be this good at looking after people? He went along with whatever I wanted to eat and wherever I wanted to go. It was pretty easy."],["她觉得见面舒服，也把他的关注往关心上想。她听到半夜刷朋友圈时确实愣了一下。可以同时回应这两种感受，家庭情况要等他自己说。","She enjoyed their time and took his attention as caring. She did pause when she heard about him checking her Moments at midnight. I can acknowledge both feelings and leave his family for him to talk about."]],"choices":[{"thought":["让她保留开心和那一下意外","Make room for both feelings"],"reply":["你们今天聊得来，临走还拍了照，难怪你心里挺开心的。听到他半夜还在刷你朋友圈，你也确实愣了一下。开心和有点意外可以同时有。至于他家里怎么样，等他自己讲，比你现在猜得准。","You got on well and took a photo together before leaving. Of course you're happy. Hearing he'd been checking your Moments at midnight did catch you off guard. You can feel happy and a little surprised at once. As for his family, you'll know more when he tells you himself."]}],"memories":[{"label":"半夜刷朋友圈","name":"Midnight on Moments","quote":["他半夜还在刷我朋友圈，看我睡了没","he was up at midnight scrolling through my Moments to see if I'd gone to bed"]},{"label":"家里有爱","name":"Lots of love at home","quote":["是不是家里给了特别多爱，才这么会关心人","did he grow up with a lot of love at home to be this good at looking after people"]}]},"5m.3.4":{"time":"Sunday Night · After the Date","lines":[["睡前最后问一句。就这两周，我还有戏吧？我上次这么上心，还是给我表妹辅导作业的时候。","One last thing before bed. After these two weeks, I've got a shot, right? Last time I put this much effort into anything was helping my cousin with her homework."],["他想知道这两周的来往有没有继续发展的可能。今天她和他聊了三个多小时，还主动提了下次吃烤肉。可以用今天的事回应他的担心。","He wants to know if these two weeks could lead somewhere. They talked for three hours today and she brought up going out for barbecue. I can answer with what did happen."]],"choices":[{"thought":["用已经发生的事给他判断","Go by what happened"],"reply":["今天聊了三个多小时，她还提了下次一起吃烤肉，至少她愿意继续跟你见面。至于你们会不会谈恋爱，得等真的聊到这一步才知道。","You talked for over three hours and she brought up getting barbecue together next time. At the very least, she wants to see you again. You'll find out if you're going to date when the two of you actually talk about it."]}],"memories":[]},"5f.3.4":{"time":"Sunday Night · After the Date","lines":[["躺下了又想起来，他啥都听我的，这点其实我有点介意。但跟他待着是真不用费脑子。前几天家里的事我没接着聊，他也就没问了。可能……我就是想跟一个相处起来不费劲的人待着吧。","I lay down and thought of this again. He leaves everything up to me, and it actually bothers me a little. But being with him takes no effort. The other day I didn't get into the family thing, and he didn't ask again. Maybe… I just want to be with someone who's easy to be around."],["她喜欢不用费力维持气氛，也还没确定自己是否喜欢一直由她拿主意。可以把这两个感受分开回应，后面相处时再看她最在意哪一点。","She likes that she doesn't have to keep the conversation going herself. She's less sure she likes making every decision. I can address those separately and let her see which matters more over time."]],"choices":[{"thought":["分开说舒服和总要拿主意","Separate ease from deciding everything"],"reply":["你喜欢的是跟他待着不用撑场面，这点挺具体。至于去哪儿、吃什么老要你定，你要是哪次嫌累了，也可以跟他说让他挑一次。","You like that you don't have to work to keep things going around him. That's something specific. If you're tired of always picking where to go or what to eat, you can ask him to pick next time."]}],"memories":[]},"5m.4.1":{"time":"Two Days After the Date","lines":[["我想跟她表白。稿子打了删删了打，现在是『我挺喜欢你的，想跟你正经处对象，你考虑考虑』。读着怎么这么怪，你帮我改改。","I want to tell her I like her. I've typed and deleted it a bunch of times. Right now it's “I really like you and I'd like us to be in a serious relationship. Think it over.” Why does that sound so weird? Can you fix it?"],["他希望表达喜欢，又担心措辞生硬。「考虑考虑」听着像催人回一个决定。可以直接问是否交往，也可以先说感受，请她说说自己的想法。","He wants to say he likes her but the wording feels stiff. “Think it over” sounds like he's asking her to come back with a decision. He can ask her directly or say how he feels and ask what she thinks."]],"choices":[{"thought":["直接问她要不要在一起","Ask if she wants to go out"],"reply":["可以说「跟你待一块儿的时候我挺开心的。我喜欢你，想跟你谈恋爱。你愿意吗？」意思已经很清楚，问完就留点时间给她。","Try, “I'm really happy when I'm with you. I like you, and I want us to go out. Would you like that?” That's clear. Once you've asked, give her some time."]},{"thought":["先说喜欢，听听她怎么想","Say how he feels and ask her"],"reply":["可以先说「跟你待一块的时候特别舒服，我可能有点喜欢你，你觉得呢？」先让她知道你的感受，她可以按自己的方式回答。","You could start, “I feel really at ease around you. I think I might have a thing for you. What do you think?” She'll know how you feel and can answer however she wants."]}],"memories":[]},"5m.4.2":{"time":"Two Days After the Date","lines":[["发了！就用你改的那句。发完我就想把手机扔了。她一会儿在输入，一会儿又没了，我盯得心脏一抽一抽的。你说这是在想怎么回，还是想拒绝我啊？","Sent it! The line you fixed. As soon as I sent it I wanted to throw my phone away. She'll be typing and then it goes away, then it's back. My heart keeps jumping watching it. Is she figuring out what to say, or how to turn me down?"],["他已经发出了直接问要不要在一起的话，现在把输入状态当成了答案的线索。能知道的只有她还没回，建议他离开屏幕一会儿，等实际回复。","He asked directly whether she'd go out with him. Now he's trying to read an answer into the typing indicator. All he knows is she hasn't answered. Suggest he step away until the reply comes."]],"choices":[{"thought":["先停下对输入状态的猜测","Stop reading into the typing dots"],"reply":["「正在输入」看不出她准备答应还是拒绝。你已经把想说的发过去了，先去洗把脸，让她有时间把自己的话写完。","“Typing” can't tell you whether she's going to say yes or no. You sent what you wanted to say. Go wash your face and give her time to finish writing."]}],"memories":[]},"5m.4.3":{"time":"Two Days After the Date","lines":[["你改的那句发了。我特别想撤回，又怕撤回更显得我有事。她要回一句『你说啥呢哈哈』，我下半辈子咋做人啊？","I sent the line you fixed. I really want to unsend it, but then I'll look even weirder. If she says “what are you talking about lol,” how do I show my face for the rest of my life?"],["他提前想象对方用玩笑带过，正在犹豫要不要撤回。可以说明他已经把感受说清楚，等对方实际回应后再决定怎么接。","He's imagining her laughing it off and thinking about unsending it. He's already said what he feels. He can decide how to respond after she actually answers."]],"choices":[{"thought":["先等她真的回复","Wait for her actual reply"],"reply":["你这句表达了喜欢，也给她留了说自己想法的空间。先别撤回，也不用替她写一条最尴尬的回复。等真的回了，再想怎么接。","You told her you like her and left room for her to say how she feels. Leave it there for now. You don't have to write the most awkward reply for her. When she really answers, decide what to say then."]}],"memories":[]},"5f.4.1":{"time":"Two Days After the Date","lines":[["他跟我表白了。说喜欢我，问我怎么想。我盯屏幕得有十分钟了。说不心动是假的，但我一想到真要谈了就怕，之前一认真就搞砸。你说我这种，能谈好吗？","He told me he likes me. Asked what I think. I've been staring at the screen for ten minutes. I'd be lying if I said I didn't feel something. But actually being in a relationship scares me. Last time I took it seriously I screwed it up. Do you think someone like me can make it work?"],["她对他有好感，也怕认真交往以后把事情搞砸。她需要的是眼下怎么回答，可以建议她把顾虑说清楚，也可以先从一句愿意试试开始。","She likes him and worries she'll mess things up once it's serious. She needs to know what to say right now. She can tell him what worries her or start with saying she wants to try."]],"choices":[{"thought":["把喜欢和顾虑一起说","Say she likes him and is nervous"],"reply":["想试的话，可以把你现在会说的也告诉他：「我也想试试，只是我可能不太会谈恋爱，你多担待」。他能听见你的愿意，也知道你心里还有点没底。","If you want to try, tell him as much as you can say now: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” He'll hear that you're willing and that you're still a little unsure."]},{"thought":["先从愿意试试说起","Start with wanting to try"],"reply":["可以先打一句「我们先试试」。你今天只需要告诉他现在的想法，剩下的话等你想说清楚了再补。","Start with, “Let's give it a try.” Today you only have to tell him how you feel right now. You can say more when you know what you want to say."]}],"memories":[]},"5f.4.2":{"time":"Two Days After the Date","lines":[["我把那句打出来了：『我也想试试，只是我可能不太会谈恋爱，你多担待』。打完又盯着看了半天。越看越觉得这话有点重，像把我自己交出去了。发还是不发，你帮我看看。","I typed it: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” Then I stared at it for ages. The more I read it, the heavier it felt. It's like I'm handing myself over. Should I send it? Can you look?"],["她已经把愿意和顾虑都写出来，犹豫是因为这句话很坦白。可以帮她确认句子表达了现在的想法，把是否发送留给她。","She's written that she wants to try and that she's nervous. She's hesitating because it's honest. I can confirm it says what she feels and leave the decision to her."]],"choices":[{"thought":["确认她想说的都在里面","Check that it says what she means"],"reply":["这句已经把你想试试、又没那么有把握都说出来了。你如果想让他知道的就是这些，可以发。后面的事，等真的遇到了再一起说。","It says you want to try and that you're not entirely sure of yourself. If that's what you want him to know, you can send it. Whatever comes after, you can talk about it when it actually happens."]}],"memories":[]},"5f.4.3":{"time":"Two Days After the Date","lines":[["我按你说的先打了『我们先试试』，又给删了。就觉得少了点啥，好像现在不说，我以后搞砸了又得怪自己。也可能是我想太远了，他就是问我要不要试试。","I typed “Let's give it a try” like you said and deleted it. It feels like something's missing. If I don't say it now and mess things up later, I'll blame myself again. Or maybe I'm getting way ahead of myself. He just asked if I want to try."],["简短的答复让她容易开口，但她仍想说明自己没把握。可以补上这层顾虑，让她按真正想表达的意思回复，不必预先为以后发生的事负责。","The short answer is easier to say, but she still wants him to know she's unsure. She can include that worry without taking responsibility in advance for whatever might happen."]],"choices":[{"thought":["补上她在意的那半句","Include the part she cares about"],"reply":["你想让他知道你也会紧张，可以多说半句：「我也想试试，只是我可能不太会谈恋爱，你多担待」。说到你眼下有把握的地方就够了。","If you want him to know you're nervous too, give him that extra bit: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” It's enough to say what you know right now."]}],"memories":[]},"5m.4.4":{"time":"Two Days After the Date","lines":[["她回了！！我以为凉了，结果她说『我也想试试，只是我可能不太会谈恋爱，你多担待』。我先回了三个感叹号。她这是答应了对吧？那个『只是』后面的是啥意思啊？","She replied!! I thought it was over, but she said “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” I sent back three exclamation points. That's a yes, right? What does the “I just” part mean?"],["对方愿意试着交往，也主动说了自己对恋爱有顾虑。他高兴之余想知道后半句是什么意思。可以先确认答复，再建议以后慢慢了解她具体担心什么。","She's willing to try a relationship and told him she has some worries about it. He's excited and wants to know what the second part means. Confirm the answer and suggest they learn what she's worried about as it comes up."]],"choices":[{"thought":["道喜，也接住她后半句","Congratulate him and address her worry"],"reply":["是，她愿意和你试试，恭喜。后半句是在告诉你，她对怎么谈恋爱也没把握。以后遇到具体的事，你们可以再聊她需要什么、你又是怎么想的。","Yes, she wants to give it a try with you. Congratulations. The second part is her telling you she's not very sure of herself in relationships. As things come up, you can talk about what she needs and how you're feeling too."]}],"memories":[{"label":"不会谈恋爱","name":"Unsure about relationships","quote":["只是我可能不太会谈恋爱","I just might not be very good at relationships"]}]},"5f.4.4":{"time":"Two Days After the Date","lines":[["发了！『我也想试试，只是我可能不太会谈恋爱，你多担待』。我手一直抖，跟考试交卷似的。他秒回了三个感叹号……好家伙。发出去那一下反倒没那么吓人了。","I sent it! “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” My hands were shaking the whole time, like turning in an exam. He instantly sent three exclamation points… wow. It wasn't nearly as scary once I hit send."],["她发出了自己愿意试试的答复，也收到了对方的回应。她比发之前放松了，可以顺着这个开心的小插曲收尾，暂时不用讨论更远的事。","She sent her answer and got a reply. She's more relaxed than she was before sending. I can end on that little happy moment and leave the bigger conversation for later."]],"choices":[{"thought":["顺着她发出去后的轻松","Share her relief after sending"],"reply":["三个感叹号，看来他刚才也没少等。你已经把最难开口的话发出去了，今天可以先开心一会儿。","Three exclamation points. Sounds like he was doing some waiting of his own. You've sent the hardest thing to say. It's okay to just be happy about it for a while."]}],"memories":[]},"6m.CHOICE":{"time":"Day 1 Together","lines":[["昨晚她答应跟我在一起了。我睡前又看了两遍聊天，今天醒来还想看。我想发个朋友圈，用上次一起拍的照片。配什么啊，别太肉麻。","She said yes last night. I read the chat twice more before bed and wanted to read it again when I woke up. I want to post on Moments with the photo we took last time. What should I write? Nothing too cheesy."],["用户刚确认恋爱关系，想公开这份喜悦，又不希望配文太肉麻。可以直接说出关系，也可以从以后一起吃饭入手，让照片表达剩下的意思。","The user just got into a relationship and wants people to know he's happy without getting sappy. He can say it directly or mention something small about eating together and let the photo do the rest."]],"choices":[{"thought":["直接说出关系","Say they're together"],"reply":["照片已经有了，配文可以简单直接一点：终于可以光明正大叫她女朋友了。开心的事，不一定非要藏着说。","You've got the photo. Keep the caption simple: “Finally get to call her my girlfriend.” You're happy. It's okay to say it plainly."]},{"thought":["用日常小事含蓄官宣","Announce it with something everyday"],"reply":["可以配这句：以后不用天天一个人吃饭了。话不用说得很满，合照一放，大家就懂了。","Try: “Guess I don't have to eat alone every day anymore.” The photo will tell people the rest."]}],"memories":[]},"6m.M2A":{"time":"Day 1 Together","lines":[["发了。我朋友说，憋这么久，终于让你等到了。我兄弟眼红了哈哈哈。","Posted it. My friend said, “You've been holding it in for ages. Finally got what you were waiting for.” My guy's jealous hahaha."],["他发出动态后得到朋友的起哄，正借玩笑分享恋爱的开心。可以顺着回应，不必替他解释朋友的真实想法。","His friends are giving him a hard time in the comments, and he's sharing how happy he is through the joke. I can play along without deciding what they really think."]],"choices":[{"thought":["顺着他的得意开个玩笑","Play along with his bragging"],"reply":["看出来了，你现在连被起哄都挺高兴。这条朋友圈值了。","Look at you, even happy to get teased. That post was worth it."]}],"memories":[]},"6m.M2B":{"time":"Day 1 Together","lines":[["发了。我朋友评论，以前叫你吃饭，你可不是这么说的。我回他，你要是女的我也可以考虑考虑。他现在在群里骂我。","Posted it. My friend commented, “That's not what you said when I used to ask you to eat with me.” I said, “If you were a girl I'd consider it.” Now he's cussing me out in the group chat."],["朋友的调侃让他继续开起玩笑，语气轻松，想分享发出官宣后的热闹。可以回应这个结果，不把玩笑当成需要处理的矛盾。","His friend's teasing turned into a joke between them. He's sharing the fun after posting. I can answer in the same spirit."]],"choices":[{"thought":["接一句朋友间的玩笑","Join the joke"],"reply":["恋爱公开了，朋友也顺便逗到了。看起来今天的好心情还能撑很久。","You made it official and got to mess with your friend while you were at it. Looks like today's good mood is going to last."]}],"memories":[]},"6m.M3":{"time":"Day 1 Together","lines":[["我刚问她要不要庆祝一下。她问怎么庆祝，我说吃个青提蛋糕吧，想了好久了。她回我，原来重点在这儿。哈哈，也不能这么说。还没定哪天。","I just asked her if we should celebrate. She asked how, so I said, “Let's get a green grape cake. I've been craving one forever.” She wrote back, “Oh, so that's what this is about.” Haha, I wouldn't go that far. We haven't picked a day yet."],["两人已经开始轻松地商量庆祝，暂时没有确定时间。他是在分享刚才的互动，不需要立刻替他们安排一次见面。","They've started talking about celebrating and haven't picked a time. He's just sharing what happened. They can make plans when they're ready."]],"choices":[{"thought":["顺着庆祝的话题聊两句","Stay with the celebration"],"reply":["蛋糕想了很久，跟她一起庆祝是今天才有的新理由。时间你们慢慢商量，先把这份开心留着。","You've wanted that cake for a while, and now you've got a new reason to share it with her. You can pick a day later. Enjoy being excited for now."]}],"memories":[]},"6f.F1":{"time":"Day 1 Together","lines":[["我昨晚答应跟他在一起了。他今天早上就把我俩照片发朋友圈了，也太快了吧。","I said yes last night. He posted our photo on Moments first thing this morning. That was fast."],["用户刚确认恋爱关系，对方已经公开合照，她提到速度快，但还没有说自己是否介意。先问她的感受，不急着把这件事解释为压力或喜悦。","The user just agreed to a relationship and he's already posted their photo. She said it was fast, but hasn't said whether that bothers her. Ask how it felt before reading anything into it."]],"choices":[{"thought":["问问她看到时的感觉","Ask how she felt seeing it"],"reply":["刚确认关系，他就想让大家知道了。你看到的时候什么感觉？","You just got together and he already wants people to know. How did you feel when you saw it?"]}],"memories":[]},"6f.CHOICE":{"time":"Day 1 Together","lines":[["有点好笑，也挺开心的。但我是不是也得发一条啊？想到同事都能看见，还要来问，就好尴尬。","I thought it was funny, and it made me happy. But do I have to post too? My coworkers would all see it and come ask me about it. So awkward."],["用户对恋爱公开感到开心，犹豫来自熟人围观时的害羞。可以鼓励她表达喜悦，也可以支持她先私下分享，不把是否发动态等同于是否认真对待关系。","The user is happy people know they're together, but shy about people she knows making a fuss. I can encourage her to share or support her in telling someone privately. A post isn't a measure of how serious she is."]],"choices":[{"thought":["鼓励她大胆分享开心","Encourage her to share it"],"reply":["幸福不用等到不害羞才分享。既然开心，就大方晒一次。写一句自己的话就好，不用比谁更会表达。","You don't have to wait until you're past feeling shy to share something that makes you happy. If you want to post it, go for it. One line in your own words is enough."]},{"thought":["支持她先告诉亲近的人","Support telling someone close first"],"reply":["幸福是自己的，不必用朋友圈证明。先告诉你想告诉的人，也是一种分享。不想一下子被很多人围观，就先跟熟悉的人说说。","You can be happy without proving it on Moments. Telling the people you want to tell is sharing too. If you'd rather avoid a crowd, start with someone close to you."]}],"memories":[]},"6f.F3A":{"time":"Day 1 Together","lines":[["我发了，写的好吧，以后一起吃饭。刚发出去我就把手机扣下了。结果我同事直接过来问，谁啊？我还得装得很平静，说就我男朋友啊。","I posted it. I wrote, “Okay, then we'll eat together from now on.” I put my phone facedown the second I posted. Then my coworker came straight over and went, “Who's that?” I had to act all calm and go, “Oh, my boyfriend.”"],["她已经发出动态，也经历了原先害羞的同事询问。她在分享既尴尬又高兴的小插曲，可以顺着回应，不必继续鼓励她做更多公开表达。","She posted and got the question from a coworker that she'd been dreading. It was awkward and made her happy. I can share in that without encouraging her to put anything else out there."]],"choices":[{"thought":["回应她藏不住的开心","Notice how happy she is"],"reply":["朋友圈发出去了，当面介绍也说出口了。看来害羞没有耽误你开心，今天可以不用装得那么平静。","The post is up and you've already said it out loud. Being shy didn't stop you from being happy. You don't have to act quite so calm today."]}],"memories":[]},"6f.F3B":{"time":"Day 1 Together","lines":[["我给闺蜜发了照片。她连着问，什么时候的，谁先说的，见了几次。我打字都赶不上她问。本来想悄悄说一下，结果她给我打电话了。","I sent the photo to my best friend. “Since when? Who said it first? How many times have you seen each other?” I couldn't type fast enough. I thought I'd tell her quietly, then she called me."],["她选择私下分享，闺蜜反而直接打来电话。她是在讲开心的热闹，可以顺着被采访的感觉开个玩笑，不需要把朋友的追问当成矛盾来处理。","She told her friend privately and got a phone call. She's enjoying how much of a fuss her friend is making. I can joke that she's being interviewed."]],"choices":[{"thought":["顺着闺蜜的热情开个玩笑","Play along with the questions"],"reply":["公开会被围观，私聊会被采访。看来她已经准备好听完整个故事了，你可以慢慢跟她分享。","A public post gets an audience. A private message gets an interview. Sounds like she's ready for the whole story. Take your time telling her."]}],"memories":[]},"6f.F4":{"time":"Day 1 Together","lines":[["我刚还跟他说，你动作也太快了。然后问他要照片原图，朋友圈那个压得有点糊。跟他说我还是喜欢拿在手里的照片，手机里存一堆，后面根本想不起来翻。","I just told him, “That was fast.” Then I asked him for the original photo. It got a little blurry on Moments. I told him, “I still like photos I can hold in my hands.” I save a ton on my phone and never remember to look at them later."],["她主动索要合照原图，想以自己喜欢的方式留住照片。已经告诉男友这个偏好，可以回应这份珍惜，不需要再建议一次公开动态。","She asked for the original because she wants to keep it in a way she likes. She's already told him what she prefers. I can acknowledge that the photo matters to her."]],"choices":[{"thought":["回应她想把照片留下来","Respond to her wanting to keep it"],"reply":["原来害羞归害羞，照片还是要好好收着。手机里不容易翻到的，就换一种你喜欢的方式留住。","Shy or not, that photo deserves to be kept. If it's hard to find again on your phone, keep it in a way you'll enjoy."]}],"memories":[]},"6f.F5":{"time":"Day 1 Together","lines":[["他早上还问要不要庆祝一下。我问怎么庆祝，他说吃个青提蛋糕吧，想了好久了。怎么最后还是吃。","He asked if we should celebrate this morning. I asked how and he said, “Let's get a green grape cake. I've been craving one forever.” Somehow it's always about food in the end."],["她接着分享男友提出的庆祝方式，语气带着亲近的打趣。可以回应蛋糕这个具体细节，不替他们补出尚未确定的见面安排。","She's sharing his idea for celebrating and teasing him affectionately. I can answer about the cake without assuming they've decided when to meet."]],"choices":[{"thought":["顺着他的蛋糕庆祝聊一句","Go with the cake idea"],"reply":["原来庆祝方式已经有候选了。想了很久的蛋糕，现在又多了一个一起吃的理由。","Looks like you've got one idea for celebrating. Now you've got another reason to share the cake he's been wanting."]}],"memories":[{"label":"想吃青提蛋糕","name":"Green grape cake","quote":["吃个青提蛋糕吧，想了好久了","Let's get a green grape cake. I've been craving one forever"]}]},"6m.M4":{"time":"Day 1 Together","lines":[["她刚跟我说，你动作也太快了。然后又问我要照片原图。我还以为她嫌我发得急，结果她说，我还是喜欢拿在手里的照片。原图已经发她了。","She just said, “That was fast.” Then she asked for the original photo. I thought she was bothered I posted so soon, but she said, “I still like photos I can hold in my hands.” I sent her the original."],["他先担心女友嫌公开太快，随后收到索要原图的回应，感到高兴。她亲口说喜欢纸质照片，可以据此回应，不必猜测她对公开关系的全部态度。","He worried that she thought he'd posted too fast, then was happy she asked for the original. She told him she likes prints. I can use that without guessing how she feels about going public in general."]],"choices":[{"thought":["回应她主动要照片这件事","Respond to her asking for the photo"],"reply":["她觉得你发得快，也想把照片好好留着，这两件事可以同时成立。原图都找你要了，看来今天不只是你一个人在高兴。","She thought you posted fast, and she wants to keep the photo. Both can be true. She asked you for the original, so it looks like you're not the only one who's happy today."]}],"memories":[{"label":"纸质合照","name":"Printed photo","quote":["我还是喜欢拿在手里的照片","I still like photos I can hold in my hands"]}]},"6m.M5":{"time":"That Night","lines":[["我刚看了下日历，现在就问她一个月纪念日那天有没有空，会不会太早啊，才第一天。","I just checked my calendar. Is it too early to ask if she's free for our one-month anniversary? It's only day one."],["他已经开始期待一个月纪念日，犹豫的是现在提出会不会太早。可以建议先确认共同的时间，把具体安排留到之后，避免一次就把所有事情定下来。","He's looking forward to their one-month anniversary and wonders if it's too soon to bring it up. They can set aside the time and leave the details for later."]],"choices":[{"thought":["先约时间，安排慢慢商量","Save the date and plan later"],"reply":["可以先问问她，不用今天就把整天安排好。就说：一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。","You can ask without planning the whole day now. Try: “Save our one-month anniversary for me, okay? Let's spend it together. We can decide what to eat later.”"]}],"memories":[]},"6f.F6":{"time":"That Night","lines":[["他刚说，一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。才第一天，他怎么已经翻到下个月了。","He just said, “Save our one-month anniversary for me, okay? Let's spend it together. We can decide what to eat later.” It's day one. How is he already looking at next month?"],["她转述男友的纪念日邀约，觉得他期待得很早，但没有表达拒绝。可以问她是否也想一起过，帮助她表达自己的意愿，不替她作决定。","He's looking forward to the anniversary already. She hasn't said she doesn't want to. I can help her answer based on whether she wants to spend it together."]],"choices":[{"thought":["让她按自己的期待回应","Let her answer how she feels"],"reply":["他已经开始期待那一天了。你也想一起过的话，就先答应，具体安排可以之后再慢慢商量。","He's already looking forward to that day. If you'd like to spend it together too, say yes. You can talk about what to do later."]}],"memories":[]},"6f.F7":{"time":"That Night","lines":[["OK，正好那会儿项目也忙完了，放松一下。","OK, my project should be done by then anyway. I could use a chance to relax."],["她已经表示愿意一起过纪念日，也期待忙完项目后能放松一下。可以支持她把时间留出来，顺着这份期待回应，不必再替两人安排具体怎么庆祝。","She's agreed to spend the anniversary with him and is looking forward to relaxing once work settles down. Support that without planning the celebration for them."]],"choices":[{"thought":["支持她留出一起过的时间","Encourage her to save the day"],"reply":["那就把那天先留出来。等忙完这一阵，有件一起期待的事也挺好。","Then set the day aside. It's nice to have something to look forward to together once work settles down."]}],"memories":[]},"6m.MEMCHOICE":{"time":"That Night","lines":[["她回，好啊，那天留给你。我现在就有点想准备东西。但礼物是不是挑得太早了，我还没想好送什么合适。","She said, “Sure, I'll save the day for you.” I kind of want to get something ready now. Is it too early to pick a gift, though? I haven't worked out what to get."],["女友答应一起过纪念日，他想准备一点东西，又怕挑得太早。可以根据已有的小细节给建议，也可以先不急着买，在之后相处中慢慢想。","She agreed to spend their anniversary together. He wants to get her something but worries it's too early. I could use a detail he's kept, or suggest seeing what comes up as they get to know each other."]],"choices":[{"thought":["把合照变成小礼物","Turn the photo into a gift"],"reply":["她说过喜欢拿在手里的照片。可以先洗一张你们的合照，背面写上在一起的日期。不用一下子准备很贵重的礼物，从她喜欢的小东西开始就好。","She said she likes photos she can hold in her hands. You could get a print of the two of you and write the date you got together on the back. It doesn't have to be expensive. Start with a little thing she likes."]},{"thought":["先留时间，慢慢了解喜好","Save the date and learn what she likes"],"reply":["先不用急着买。你们刚在一起，之后聊天、见面，还会慢慢知道她喜欢什么。先把那天留好，礼物可以等有了合适的想法再准备。","You don't have to buy anything yet. You just got together. As you talk and spend more time together, you'll learn more about what she likes. Save the date for now and get something when you have a good idea."]}],"memories":[]},"6m.M7A":{"time":"That Night","lines":[["这个好。我下单了，洗两张，一人一张。等拿到了我自己写日期，字丑也认了。","I like that. I ordered two prints, one for each of us. I'll write the date myself when they get here. Ugly handwriting and all."],["合照已经下单，他还打算亲手写日期，语气很期待。可以回应这份心意，顺着他担心字丑开个小玩笑，不必再建议添别的礼物。","The photos are ordered. He's looking forward to writing the date himself. I can appreciate the gesture and joke about his handwriting without giving him more to do."]],"choices":[{"thought":["肯定他亲手准备的心意","Appreciate the personal touch"],"reply":["你自己写的日期，也会成为照片的一部分。字不用写得多漂亮，先把日子写对就好。","Writing the date yourself makes it part of the photo. It doesn't have to look pretty. Just get the date right."]}],"memories":[]},"6m.M7B":{"time":"That Night","lines":[["也是，今天才第一天。我先把那天记下来，后面想到了再说。突然觉得还挺有盼头的。","True, it's only day one. I'll put the date down and think of something later. All of a sudden it feels like I've got something to look forward to."],["约定已经记下，他接受了暂时不急着买礼物，也开始期待以后的相处。可以顺着这个轻松的心情收尾，不再追加准备任务。","He's saved the date and is okay with waiting to buy a gift. He's looking forward to the time they'll spend together. Let this end on that feeling."]],"choices":[{"thought":["让期待留在这里","Leave him looking forward to it"],"reply":["那就先期待着。接下来还有很多一起吃饭、聊天的机会，合适的主意也许就在里面。","Then enjoy looking forward to it. There'll be plenty of dinners and conversations between now and then. The right idea might come up in one of them."]}],"memories":[]},"6m.END":{"time":"That Night","lines":[],"choices":[],"memories":[]},"6f.F8":{"time":"That Night","lines":[["我把那天记日历上了。写一个月纪念日有点不好意思，又改成了吃饭。","I put it in my calendar. I felt a little embarrassed writing “one-month anniversary,” so I changed it to “dinner.”"],["她把约定记进日历，连给自己看的名称都有点害羞。她是在接着分享今晚的期待，轻松回应即可，不再增加需要她完成的新安排。","She's saved the date and feels shy even about a title only she can see. She's still looking forward to it. A light response is enough."]],"choices":[{"thought":["轻轻回应她的害羞","Gently pick up on her shyness"],"reply":["名字低调一点，期待一点没少。就让日历先替你留着那一天吧。","A low-key name doesn't make you any less excited. Let your calendar save the day for you."]}],"memories":[]},"6f.END":{"time":"That Night","lines":[],"choices":[],"memories":[]},"7m.MONE":{"time":"Day 17 Together · Friday","lines":[["我跟我女朋友在一起两周多了，刚开始天天能聊到睡觉。这礼拜她赶项目，回我基本就是累啊困啊，我又老想找她。\\n她刚发了张照片，买了杯喝的，说最近全靠公司楼下那家青杏续命。照片后面有个同事拿吸管夹薯条，她说大家都叫他筷子。我回了个笑哭，就没下文了。还想聊两句，你说我接点啥？","My girlfriend and I have been together a little over two weeks. At first we talked every day until bedtime. She's been trying to finish a project this week, so her replies are mostly “I'm tired” or “I'm sleepy,” and I keep wanting to message her.\\nShe just sent a photo of a drink. Says the Green Apricot downstairs from the office is the only thing keeping her alive lately. There's a coworker in the background using straws to pick up fries. She says everyone calls him Chopsticks. I sent a cry-laugh emoji and that was it. I want to chat a little more. What should I say?"],["用户想继续和女友聊天，但不知道怎样接话。她刚主动分享了日常照片，可以建议从照片里的饮料聊起，既有现成的话题，也不用另外找话说。","The user wants to keep talking to his girlfriend and doesn't know how. She's just shared a photo from her day. The drink gives him something to ask about."]],"choices":[{"thought":["顺着照片接话","Pick up from the photo"],"reply":["可以问问她喝的什么，好不好喝。她主动给你发了照片，至少这会儿愿意跟你分享点日常，不用急着找个特别有意思的话题。","Ask what she's drinking and whether it's good. She sent you a photo herself, so she's happy to share a little of her day right now. You don't have to come up with anything especially interesting."]}],"memories":[{"label":"青杏","name":"Green Apricot","quote":["公司楼下那家青杏","the Green Apricot downstairs from the office"]}]},"7f.FDAY":{"time":"Day 17 Together · Friday","lines":[["我跟男朋友在一起两周多了。这礼拜赶项目，下班连话都不想说。他还天天跟我说今天干嘛了，我不回吧，又老惦记着。\\n今晚部门一起吃饭，我想先跟他说一声，又怕说完就聊起来了，吃个饭还得一直看手机。咋跟他说比较好？","My boyfriend and I have been together a little over two weeks. I've been trying to finish a project this week and I'm so drained after work I don't even want to talk. He tells me about his day every day. If I don't reply, I keep thinking about it.\\nMy department's going out to dinner tonight. I want to tell him before I go, but I'm afraid it'll turn into a whole conversation and I'll be on my phone all through dinner. How should I say it?"],["用户想提前告诉男友聚餐安排，也担心因此又聊起来，吃饭时得不断回消息。可以建议她同时说明回复可能较慢、回家后再聊，让对方知道她不是突然不理人。","The user wants to tell him about the dinner and is worried she'll end up replying all the way through it. She can tell him she'll be slow to answer and will talk once she's home."]],"choices":[{"thought":["先把今晚安排说清","Tell him the plan for tonight"],"reply":["可以直接跟他说：“今晚部门聚餐，可能回得慢，回家再聊。”提前说清楚安排和什么时候方便聊，比一边吃饭一边惦记着回消息轻松些。","Try: “Department dinner tonight. I might be slow to reply. Let's talk when I get home.” If you tell him your plans and when you're free, you won't have to keep thinking about replying over dinner."]}],"memories":[]},"7f.FDAYMORE":{"time":"Day 17 Together · Friday","lines":[["行，我就这么发。我也不是不想跟他聊。昨天还有个挺逗的，他提前一站下了车，还跟我说今天地铁真快，走到出口才发现下早了。我回他一个猪头，他说走过去算了，正好把歌听完。\\n上礼拜一起吃饭也挺好的，就是这礼拜真累。好了我走了，别一会儿大家等我。","Okay, I'll send that. It's not that I don't want to talk to him. Yesterday was pretty funny. He got off a stop early and told me the subway was really fast today. Didn't realize till he reached the exit. I sent him a pig face. He said he'd just walk and finish listening to his song.\\nDinner together last week was nice too. I'm just really tired this week. Okay, I'm going. I don't want to keep everyone waiting."],["用户虽然觉得聊天累，还是愿意分享男友的趣事。现在她要出门聚餐，没有新的问题需要处理，可以简短回应，不必继续分析两人的关系。","Messaging feels tiring, but the user still wants to share funny things about him. She's headed to dinner now and has no new question. Keep it brief."]],"choices":[{"thought":["轻快地送她出门","See her off"],"reply":["听着是挺想跟你分享的，连下错站都要说一声。那先去吃饭吧，等回家有精神了再慢慢聊。","Sounds like he likes telling you things, even when he gets off at the wrong stop. Go enjoy dinner. You can talk when you're home and have the energy."]}],"memories":[{"label":"提前下车","name":"Got off early","quote":["他提前一站下了车，还跟我说今天地铁真快","He got off a stop early and told me the subway was really fast today"]}]},"7m.MNEWS":{"time":"After the Department Dinner","lines":[["我跟女朋友刚闹了点不愉快。她今晚部门聚餐，吃完回来找我聊天，我问着问着就问岔了，现在她不回我了。你帮我看看，是不是我说得有点过了？","My girlfriend and I just had a bit of a fight. She went out with her department tonight and messaged me when she got back. I asked one thing, then another, and somehow it went wrong. Now she isn't replying. Can you help me figure out if I went too far?"],["他觉得刚才的话可能说重了，想知道怎么补救。目前还不清楚争执经过，需要先听双方说了什么，再判断问题出在哪，不能只凭她不回复就下结论。","He thinks he might've said something harsh and wants to know how to fix it. I need to hear what they both said. Her not replying on its own doesn't tell me what went wrong."]],"choices":[{"thought":["先听刚才说了什么","Hear what was said first"],"reply":["可以，把刚才那几句发来看看。你说了什么，她怎么回的，从哪儿开始不对劲的，我们先捋一下。","Sure. Send me the things you said. What did you say, how did she answer, and where did it start to feel off? Let's go through it."]}],"memories":[]},"7m.MPROJECT":{"time":"After the Department Dinner","lines":[["她说周四方案过了，今天大家一起庆功，还发了张合照给我。我问怎么没听她说，她说昨天忙忘了。\\n然后说小周还张罗着给她点了个蛋糕。我问小周是谁，她说一起做项目的同事。\\n他们都知道，就我现在才知道。这两天她跟我说的全是累，我还以为还没忙完呢。","She said their proposal got approved Thursday and they all went out to celebrate today. She sent me a group photo too. I asked why I hadn't heard about it and she said she was busy yesterday and forgot.\\nThen she said Xiao Zhou had even ordered her a cake. I asked who Xiao Zhou was. She said he's a coworker on the project.\\nThey all knew, and I'm just finding out now. The last two days all she told me was how tired she was. I thought she was still working on it."],["同事参与同一个项目，知道进展很正常。他反复提到自己才知道，可能更在意没被分享这份开心。可以先帮他分清这两件事，再听后面发生了什么。","It's natural her coworkers would know how their project was going. He keeps coming back to finding out late. What may hurt more is that she didn't share the good news with him. I can untangle those two things before hearing the rest."]],"choices":[{"thought":["接住被落下的感觉","Acknowledge feeling left out"],"reply":["一起做项目的同事知道进展，并不奇怪。让你不舒服的，可能是她这两天只跟你说累，庆功这么高兴的事，你反而到现在才听说。","It makes sense that the people working on the project knew. What might sting is that all you heard for two days was how tired she was, and you're only hearing about the celebration now."]}],"memories":[]},"7m.MDEMAND":{"time":"After the Department Dinner","lines":[["对。我就问她，你跟他私下是不是也聊挺多，不然怎么他什么都知道。她说大家一起吃饭，又不是只有我一个女的，他跟我做同一个项目，当然知道。\\n我又说，那给我看看你俩聊什么了。她回，你自己听听你在说什么。我接了句那你说我该怎么想，她就不回了。\\n我现在想解释一下，可再发过去，是不是又像追着她问？","Yeah. I asked her, “Do you two talk a lot in private too? How else does he know everything?” She said, “The whole group went. I wasn't the only woman there. We're on the same project. Of course he knows.”\\nThen I said, “Let me see what you two talked about.” She said, “Listen to what you're saying.” I said, “Well, what am I supposed to think?” Then she stopped replying.\\nI want to explain myself, but if I send another message, will it sound like I'm still going after her?"],["她已解释同事关系，他仍提出查看私聊，对方随后不再回复。现在想补救，应先建议撤回这项要求，承认自己问过了，而不是继续解释为什么怀疑。","She explained how she knows him. He still asked to see their private messages, and then she stopped replying. If he wants to repair things, he can take back that demand and own how far he went before explaining his suspicions."]],"choices":[{"thought":["先收回查看私聊的要求","Take back the demand to see the chat"],"reply":["可以再发，但这次先别解释她为什么让你多想。先承认刚才的要求不合适：“我不该让你给我看聊天，刚才有点急。”发完给她一点时间，不要接着追问。","You can send something, but leave out why she made you suspicious. Start by saying the demand was out of line: “I shouldn't have asked to see your messages. I got a little worked up.” Then give her time. Leave it at that for now."]}],"memories":[]},"7f.FANGER":{"time":"After the Department Dinner","lines":[["我刚不是去部门聚餐了吗，吃完回家跟他说了两句，真的给我气到了。\\n周四方案过了，今天大家一起庆功。我给他发合照，说小周还给我点了个蛋糕。他先问怎么没告诉他，又问小周是谁。","Remember how I went to my department dinner? I got home and went to tell him about it. I'm so pissed off.\\nOur proposal got approved Thursday and we went out to celebrate today. I sent him the group photo and told him Xiao Zhou had ordered me a cake. First he asked why I hadn't told him. Then he asked who Xiao Zhou was."],["她按之前的安排，聚餐后回家和男友聊天，却因为对方的追问生气。目前只听到争执的开头，需要先了解她怎么解释、对方怎么回应，不急着判断谁的问题。","She got home and talked to him as planned, but his questions made her angry. I've only heard the start. I need to hear what she explained and how he answered before deciding what went wrong."]],"choices":[{"thought":["听她把经过说完","Hear the rest of it"],"reply":["你本来是想跟他分享庆功的事，结果聊得不愉快了。后来你怎么解释的，他又说了什么？","You wanted to share the celebration and it turned into an argument. What did you tell him after that? What did he say back?"]}],"memories":[]},"7f.FDEMAND":{"time":"After the Department Dinner","lines":[["我说昨天忙忘了告诉他，小周就是一起做项目的同事。大家一起吃饭，又不是只有我一个女的。\\n他还问你跟他私下是不是也聊挺多，不然怎么他什么都知道。我解释了只是同事，他还要看我和人家的聊天记录。\\n我说你自己听听你在说什么。他又来句，那你说我该怎么想。我真想骂人，他要怎么想还得我教啊？","I said I got busy yesterday and forgot to tell him. Xiao Zhou's just a coworker on the project. The whole group went. I wasn't the only woman there.\\nThen he goes, “Do you two talk a lot in private too? How else does he know everything?” I explained we're just coworkers, and he still wanted to see our chat history.\\nI said, “Listen to what you're saying.” Then he goes, “Well, what am I supposed to think?” I could've sworn at him. Do I have to teach him how to think now?"],["同事关系和聚餐情况已经解释，他仍要求看私聊，还把怎么理解这件事交给她回答。她现在很愤怒，可以先回应被怀疑的不适，建议暂缓争执，而不是继续证明清白。","She explained who he was and who went to dinner. He still wanted to see the chat and made her responsible for how he should interpret it. I can acknowledge how angry she is at being suspected and suggest pausing the argument."]],"choices":[{"thought":["接住被怀疑的火气","Acknowledge how angry she is"],"reply":["你已经解释了，他还是要看聊天，难怪你会觉得说什么都像在被审问。现在正在气头上，可以先停一下，不用继续一条条证明自己和同事没什么。","You explained it and he still wanted to see the chat. No wonder it feels like you're being interrogated whatever you say. You're angry right now. You can pause without having to prove, point by point, that nothing happened with your coworker."]}],"memories":[{"label":"查看私聊","name":"Asked to see the chat","quote":["我解释了只是同事，他还要看我和人家的聊天记录","I explained we're just coworkers, and he still wanted to see our chat history"]}]},"7m.MWAIT":{"time":"Saturday Night","lines":[["昨天按你说的发了，我不该让你给我看聊天，刚才有点急。她没回。今天中午又问吃饭没，也没回。\\n她一整天没回我，连我说不该问她要聊天记录也没回。刚下楼买个东西，我都一直拿着手机，就怕她突然回了我没看见。现在又想发，你说再问一句会不会更烦她啊？","I sent what you suggested yesterday: “I shouldn't have asked to see your messages. I got a little worked up.” No reply. At lunchtime I asked if she'd eaten. No reply either.\\nShe didn't answer me all day, not even when I said I shouldn't have asked to see the chat. I went downstairs to buy something and held my phone the whole time in case she replied and I missed it. Now I want to send something again. Think that'll just annoy her more?"],["已经道歉，也试着恢复日常聊天，仍然没有回应。他现在很难忍住继续发消息，需要先了解他希望从下一条回复里确认什么，再考虑是否适合发送。","He's apologized and tried starting an ordinary conversation. He still hasn't heard back. It's hard for him to stop sending messages. Find out what he's hoping the next reply will tell him."]],"choices":[{"thought":["问清想确认什么","Ask what he wants to know"],"reply":["你已经道过歉，也问过吃饭了，还是一直惦记着手机。现在想再发一句，是还有话没说，还是想从她的回复里确认什么？","You've apologized and asked if she's eaten, and you still can't put your phone down. Do you want to send something because there's more you need to say, or because you want her reply to tell you something?"]}],"memories":[{"label":"一天没回","name":"No reply all day","quote":["她一整天没回我，连我说不该问她要聊天记录也没回","She didn't answer me all day, not even when I said I shouldn't have asked to see the chat"]}]},"7m.MFEAR":{"time":"Saturday Night","lines":[["我就想知道她还想不想理我啊。昨天说小周给她点蛋糕，聊得那么高兴，到我这就一句都没了。\\n我现在真想问问她，到底是没空回，还是光不想回我。","I just want to know if she still wants anything to do with me. Yesterday she was so happy telling me Xiao Zhou ordered her a cake, and now I get nothing.\\nI really want to ask if she's too busy to reply or just doesn't want to reply to me."],["他把不回消息和昨晚的同事联系起来了，但还没有提供其他依据。需要先确认他知道什么，避免顺着焦虑把猜测说成事实，也不要替女友解释沉默。","He's linking her silence to yesterday's coworker, but hasn't said anything else to support it. Find out what he knows without turning his fear into a fact or explaining her silence for her."]],"choices":[{"thought":["把事实和猜测分开","Separate what he knows from what he guesses"],"reply":["你现在想确认的，其实是她还愿不愿意理你。不过，先别从她和同事的互动里猜答案。除了昨天的聚餐，还有什么让你觉得他们不只是同事吗？","What you really want to know is whether she still wants to talk to you. Try not to read the answer into how she was with her coworker. Apart from dinner yesterday, have you seen anything that makes you think they're more than coworkers?"]}],"memories":[]},"7m.MOWN":{"time":"Saturday Night","lines":[["没看到。我后来把合照翻了好几遍，他俩也没挨着坐。可他给她点个蛋糕，她就那么开心，我怎么就没想到呢。\\n我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天。\\n我知道这么问不好听。可我不问，就只能等她哪天想起来了再来找我吗？","No. I went back through the group photo a bunch of times. They weren't even sitting next to each other. But he ordered her a cake and she was that happy. Why didn't I think of that?\\nI didn't even know what they'd talked about, and I asked if they talk a lot in private and told her to show me the chat.\\nI know it sounds bad. But if I don't ask, am I just supposed to wait until she remembers to talk to me someday?"],["他承认没有证据，但仍把追问当成确认关系的唯一办法。可以建议他表达等不到回复的不安，同时明确这与要求查看私聊不同，避免再次发出带猜疑的质问。","He admits he has no evidence, but still sees questioning her as his only way to know where they stand. He can tell her waiting makes him anxious. That's different from asking to see a private chat."]],"choices":[{"thought":["把不安说清楚","Say what's making him anxious"],"reply":["等不到回复让你不安，这件事可以等能好好说话时告诉她。可让她证明没跟别人聊，并不能回答你在她心里有没有位置。今晚先别再发“是不是忙着回别人”这样的质问了。","You can tell her that waiting for a reply makes you anxious once you can talk properly. Asking her to prove she hasn't been talking to someone else can't tell you how much you matter to her. For tonight, leave questions like “Too busy replying to somebody else?” unsent."]}],"memories":[{"label":"要求看私聊","name":"Demanded to see the chat","quote":["我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天","I didn't even know what they'd talked about, and I asked if they talk a lot in private and told her to show me the chat"]}]},"7f.FNOTIFICATION":{"time":"Saturday Night","lines":[["他昨天后来发了句我不该让你给我看聊天，刚才有点急。今天中午又问吃饭没，我都没回。\\n刚才手机亮了一下，我还以为又是他，结果是我同桌。发现不是他，我又去点开他那边看，也没再发。真让我回吧，我又不想回，烦死了。","He wrote last night, “I shouldn't have asked to see your messages. I got a little worked up.” At lunch today he asked if I'd eaten. I didn't answer either one.\\nMy phone lit up just now and I thought it was him again. It was my deskmate. When I saw it wasn't him I checked his chat anyway. Still nothing. If I actually had to reply, I wouldn't want to. It's so annoying."],["她没有回复，却反复查看男友有没有新消息，说明这件事仍让她在意。需要先了解她想等到怎样的回应，不能因为她关注手机，就认定她已经愿意和好。","She hasn't replied, but keeps checking whether he sent anything. She still cares about this. Find out what she wants to hear before assuming she's ready to make up."]],"choices":[{"thought":["问问她还在等什么","Ask what she's waiting for"],"reply":["你不想回他，又忍不住看他有没有再找你。你现在是还想等他说点什么，还是也想找个机会回他，只是不知道怎么开头？","You don't want to reply, but you still check whether he's messaged you. Are you hoping he'll say something else, or do you want a chance to reply but don't know how to start?"]}],"memories":[]},"7f.FPUSH":{"time":"Saturday Night","lines":[["不知道，反正我现在不想回。他昨天都那么问我了，后来说一句有点急，就完了？我再跟他聊吃饭没啥的，搞得好像啥事都没有一样。","I don't know. I just don't want to answer right now. He talked to me like that yesterday, then said he got a little worked up, and that's it? If I go back to chatting about what I ate, it'll be like nothing happened."],["她担心一恢复日常聊天，就等于接受这次道歉，所以不愿回复。可以先回应这个顾虑，再问收到消息时的想法，了解她是需要独处，还是想通过不回应表达不满。","She's worried going back to everyday talk amounts to accepting the apology. I can acknowledge that and ask what she felt when the message came. Is she taking time alone or using silence to show she's upset?"]],"choices":[{"thought":["问她收到消息时怎么想","Ask what went through her mind"],"reply":["你不想一句“有点急”就把这件事翻过去。不过，不回消息能让他知道你生气了，未必能让他知道你在气什么。今天他问你吃饭没的时候，你当时怎么想的？","You don't want “I got a little worked up” to be the end of it. Staying quiet might tell him you're angry, but it might not tell him what upset you. What went through your mind when he asked if you'd eaten?"]}],"memories":[]},"7f.FOWN":{"time":"Saturday Night","lines":[["看见了，就是不想回。我今天手机一直在用，跟同桌聊桌游，跟别人说话，就没理他。\\n我就是故意一天不回他，想让他也难受一下。凭什么每次都是我被问得烦啊，他也等一等吧。","I saw it. I just didn't want to answer. I've been on my phone all day, talking board games with my deskmate, talking to other people. I just ignored him.\\nI deliberately didn't answer him all day. I wanted him to feel bad too. Why am I always the one getting grilled? Let him wait for once."],["她明确说自己想让对方难受，不回应已经不只是为了休息。需要听她接下来想怎么做，把继续冷落和表达不满分开，不替她把这次行为解释成无意的。","She says outright she wanted him to feel bad. This is doing more than giving her time to recover. Find out what she wants to do next and distinguish keeping him waiting from telling him why she's mad."]],"choices":[{"thought":["问她接下来想怎么做","Ask what she wants to do next"],"reply":["你是想让他也尝尝被晾着的滋味。那接下来呢，你还想继续晾着，还是想让他知道，你到底为什么那么生气？","You wanted him to see how it feels to be left hanging. What do you want now? To keep leaving him hanging, or to let him know why you were that angry?"]}],"memories":[{"label":"故意不回","name":"Didn't reply on purpose","quote":["我就是故意一天不回他，想让他也难受一下","I deliberately didn't answer him all day. I wanted him to feel bad too"]}]},"7f.COUSIN":{"time":"Saturday Night","lines":[["今天不想跟他说了。他要是又问小周，我真会骂他。那些话我现在想想都烦。\\n我同桌还问明天去不去桌游，我说先不去了。现在出去玩都能想起他昨天那几句。","I don't want to talk to him today. If he brings up Xiao Zhou again I'll go off on him. Just thinking about what he said makes me angry.\\nMy deskmate asked if I wanted to play board games tomorrow. I said I'd skip it. Even if I went out, I'd just think about what he said yesterday."],["她目前不愿直接和男友谈，继续劝回复可能只会增加抵触。可以建议先找可信的人聊聊，让她把不满说出来，再决定如何联系，而不是让别人替她处理。","She doesn't want to talk to him directly right now. Pushing her to answer could make her resist it more. Suggest someone she trusts to talk it through without asking them to sort it out for her."]],"choices":[{"thought":["找熟悉双方的同桌聊聊","Talk to her deskmate"],"reply":["你同桌也是他表妹，跟你俩都熟。可以先找她聊聊，她也许能帮你理理怎么跟他说。先说明你只是想聊这件事，不是让她替你去传话。","Your deskmate is his cousin, and she knows you both. You could talk it over with her first. She might help you figure out what to say. Let her know you're just there to talk and don't want her carrying messages for you."]},{"thought":["建议先找可信的朋友吐槽","Talk to a friend she trusts"],"reply":["可以先找个信得过的朋友说说，不必憋着，也不必现在就回他。等这口气缓一点，再想你希望他听明白什么，可能比反复盯着聊天框轻松些。","Tell a friend you trust how you're feeling. You can let it out without replying to him right now. When you're less angry, think about what you want him to understand. That might feel easier than checking the chat again and again."]}],"memories":[]},"7f.COUSINSENTNO":{"time":"Saturday Night","lines":[["那我找我闺蜜说说吧。我俩认识好多年了，她跟他又不熟，不用夹在中间。跟她说话我就不用憋着了。","I'll talk to my best friend, then. We've known each other for years, and she barely knows him. She won't get stuck in the middle. I can say what I really think with her."],["她选择找熟悉自己的闺蜜，对方与男友不熟，可以让她少一些顾虑。现在已有明确打算，回复只需确认，不继续追问或要求她立刻想好给男友的答复。","Her best friend knows her well and isn't close to him. That makes it easier to speak freely. She's made a plan. No need to ask more of her or have her work out a reply right now."]],"choices":[{"thought":["让她找闺蜜说说","Let her talk to her best friend"],"reply":["那就先找她聊。你现在不必一边吐槽，一边急着想该怎么回男友，先把自己憋着的那部分说出来。","Then talk to her first. You don't have to figure out what to say to your boyfriend while you're venting. Start with whatever you've been holding in."]}],"memories":[]},"7f.COUSINSENTYES":{"time":"Saturday Night","lines":[["那我找她说两句。我得先跟她说好啊，别替我去找他，我还没想好怎么回。","I'll talk to her, then. I have to say this first: don't go talk to him for me. I haven't figured out what to say back."],["她愿意找同桌聊，也明确不希望被代为传话。可以肯定她先说明这一点，避免朋友的介入变成新的误会，是否联系男友仍由她自己决定。","She's willing to talk to her deskmate and doesn't want her to pass anything on. Back her up in saying that first so it doesn't turn into another misunderstanding."]],"choices":[{"thought":["先说清别替她传话","Make clear she doesn't want a go-between"],"reply":["对，先把这点说清楚。你现在是想有人听你讲，不是请她去劝他；等你想好怎么说，再由你自己联系。","Yes, say that first. You want someone to hear you out. If you decide to talk to him, you can do it yourself when you know what you want to say."]}],"memories":[]},"7f.COUSINBACKNO":{"time":"Sunday Morning","lines":[["我昨天跟闺蜜打了挺久电话。她先陪我骂了几句，说换谁被这么问都得烦。后来突然问我，那你还想不想见他？\\n我说想啊。她就说，想见就去见，该说他的地方还得说，别自己跟这儿憋一晚上。聊完确实没那么气了。\\n今天醒来又想找他。可我先去找，他是不是就觉得昨天这事过去了？","I was on the phone with my best friend for ages yesterday. She let me rant, said anyone would be mad after being questioned like that. Then out of nowhere she asked, “Do you still want to see him?”\\nI said yes. She went, “Then go see him. You can still tell him what he did wrong. Don't sit there stewing all night.” I was less mad after that.\\nI woke up wanting to talk to him. But if I reach out first, will he think I'm over what happened?"],["和闺蜜聊过后，她明确自己仍想见男友，却担心主动联系就失去表达不满的机会。可以说明联系和继续谈这件事并不矛盾，帮助她从谁先开口转向怎么开口。","Talking to her friend made it clear she still wants to see him. She's worried reaching out first means giving up the chance to say what bothered her. She can still talk about it even if she starts the conversation."]],"choices":[{"thought":["把想见和介意都留住","Keep both things on the table"],"reply":["你可以先联系他，也可以告诉他，那样被问的事还没过去。主动开口是因为你想见他，不等于你认同他那样问你。","You can reach out first and tell him you're still bothered by the way he questioned you. Reaching out means you want to see him. It doesn't mean you're okay with what he asked."]}],"memories":[]},"7f.COUSINBACKYES":{"time":"Sunday Morning","lines":[["昨天最后跟我同桌聊了挺久。她听我骂完，说她表哥平时没这么爱问东问西，估计真是慌了。我说慌了也不能让我给他看聊天啊。她说是，但你要还想跟他好，就得让他知道你到底气什么。\\n聊完气消了一点，今天醒来还挺想见他的。可我现在先找他，他是不是就觉得昨天这事过去了？","I ended up talking to my deskmate for a while yesterday. She listened to me rant, then said her cousin doesn't usually ask twenty questions. She figured he panicked. I said that didn't give him the right to ask to see my messages. She said, “True. But if you still want to be with him, you have to tell him what you're angry about.”\\nI was less angry after that, and this morning I woke up wanting to see him. But if I reach out first, will he think I'm over what happened?"],["同桌提供了对男友的看法，但那只是她的判断，不能据此替他的要求开脱。她现在想联系，又不愿把不满略过，可以建议把见面的意愿和仍介意的事分开表达。","Her deskmate had a read on his behavior, but it's still her guess and doesn't excuse what he asked. The girl wants to reach out without letting the issue slide. She can express the two things separately."]],"choices":[{"thought":["把想见和介意都留住","Keep both things on the table"],"reply":["他是不是因为慌了才那么问，可以以后再谈。你现在想见他，也仍然介意被要求看聊天，这两件事不冲突，先联系不代表你要装作没发生过。","You can talk later about whether he asked because he panicked. You want to see him, and you're still bothered he wanted to see your messages. Both can be true. Reaching out first doesn't mean you have to pretend it didn't happen."]}],"memories":[]},"7f.FCHOICE":{"time":"Sunday Morning","lines":[["我刚想问他今天出不出来，打完又没发。昨天一天没理他。消息我都看见了，就是故意没回，当时也想让他等一回。现在突然问他出来吗，感觉怪怪的。\\n但我又想见他。那天那些事我想见了再说，微信上说着说着肯定又扯回小周了。你帮我想想该咋说。","I typed out a message asking if he could come out today, then didn't send it. I ignored him all day yesterday. I saw the messages. I didn't answer on purpose. I wanted him to have to wait for once. Now it feels weird to suddenly ask him to come out.\\nBut I want to see him. I'd rather talk about what happened in person. On WeChat it'll end up back on Xiao Zhou again. Can you help me work out what to say?"],["她想约男友见面，但担心突然联系显得若无其事。可以建议她先说明昨天故意没回，再提出邀约，让对方知道她愿意谈这件事；或者先表达想见面的意愿，把之前的矛盾留到当面再说。","She wants to see him but worries getting in touch out of the blue will sound like nothing happened. She can say she didn't answer on purpose before inviting him, or start with wanting to see him and leave the rest for in person."]],"choices":[{"thought":["先承认故意没回","Admit she didn't reply on purpose"],"reply":["可以先说出昨天故意没回的事，再约见面：“昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。”承认自己这部分，不等于他要求看聊天就没问题了。","You can say you didn't answer on purpose, then invite him: “I saw all your messages yesterday. I didn't answer on purpose. I wanted you to have to wait for once. Want to go for a walk today? I want to see you.” Owning your part doesn't make his demand to see your messages okay."]},{"thought":["先从想见他开口","Start with wanting to see him"],"reply":["可以先发：“今天出来走走吗？我想见你。”先开口不等于昨天的事就算了，只是先给你们一个当面说话的机会。","You can send, “Want to go for a walk today? I want to see you.” Reaching out first doesn't settle what happened yesterday. It gives you both a chance to talk in person."]}],"memories":[]},"7f.FSENTEASY":{"time":"Sunday Morning","lines":[["发了。现在换我在这儿看他回没回了。昨天他是不是也这样啊，算了，不想了。","Sent it. Now I'm the one checking whether he's replied. Was this what it felt like for him yesterday? Ah, forget it."],["发出邀约后，她也开始等待，并短暂想到男友昨天的处境。可以回应眼前的等待，不把这句感想扩大成已经反省，也不替她判断男友现在的情绪。","She's waiting now and briefly wondered what yesterday was like for him. I can address the wait without assuming she's already reflected on it or guessing how he's feeling."]],"choices":[{"thought":["陪她等实际回复","Wait for his actual answer"],"reply":["刚发出去，先给他一点时间，不用马上盯着有没有回。你想见他的意思已经说了，其他话可以等他回应后再决定怎么讲。","You just sent it. Give him a minute before checking. You've told him you want to see him. You can decide how to say the rest once he answers."]}],"memories":[]},"7f.FSENTOPEN":{"time":"Sunday Morning","lines":[["发了。我现在看着那句我当时就想让你也等一回，又觉得自己也挺凶的。他要是半天不回，我估计也得慌。","Sent it. Now I'm looking at “I wanted you to have to wait for once” and it sounds kind of mean. If he doesn't reply for ages, I'll probably start freaking out too."],["她发出邀约并承认故意冷落，开始想到自己等不到回复也会不安。可以建议先给对方反应的时间，不立刻追加解释，也不预测他一定会怎样回应。","She admitted keeping him waiting and is now imagining how she'd feel in his place. Give him time to react before she adds any explanation."]],"choices":[{"thought":["给他一点接话时间","Give him time to answer"],"reply":["先给他一点时间。这条消息里有邀约，也有昨天的事，不用急着再补一大段，看看他怎么回。","Give him a little time. You put the invitation and what happened yesterday in the same message. You don't need to add a whole paragraph now. See what he says."]}],"memories":[]},"7m.SUN":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7m.OPENCHOICE":{"time":"Sunday Morning","lines":[["她终于找我了。发的是：昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。\\n我看了两遍。刚看见她找我还挺高兴的，可她真就看着我等了一天啊，我现在又不知道咋回了。","She finally texted me. She wrote: “I saw all your messages yesterday. I didn't answer on purpose. I wanted you to have to wait for once. Want to go for a walk today? I want to see you.”\\nI read it twice. I was happy she texted, and then I realized she really watched me wait all day. Now I don't know what to say again."],["她主动邀约，也承认了故意不回。他既想见她，又对这一天的等待感到受伤。可以建议先说出难受，也可以先答应见面，具体说多少应留给他选择。","She reached out and admitted not replying on purpose. He wants to see her and feels hurt about waiting all day. He can say it hurt or just agree to meet for now."]],"choices":[{"thought":["说出等了一天的难受","Say waiting all day hurt"],"reply":["可以先答应见面，也把你的难受说出来：“好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。”说自己的感受，不必再猜她跟别人怎么样。","You can say yes to meeting and tell her how it felt: “Okay. See you this afternoon. I kept waiting for you to reply yesterday. You saw my messages and ignored me all day, and that really hurt.” You can talk about how you feel without guessing what's going on with anyone else."]},{"thought":["先接住见面的邀请","Accept the invitation first"],"reply":["可以先回：“好，下午见。”你现在想先见到她，就先把时间地点约好；昨天没说完的话，见面还有机会说。","You can just write, “Okay. See you this afternoon.” If you want to see her first, set a time and place. There's room to talk about yesterday in person."]}],"memories":[]},"7m.PLAINCHOICE":{"time":"Sunday Morning","lines":[["她终于找我了，就一句：今天出来走走吗？我想见你。\\n我差点直接回好。可昨天到底算怎么回事啊，现在问她，会不会又不理我了？","She finally texted. Just: “Want to go for a walk today? I want to see you.”\\nI almost went straight for yes. But what was yesterday about? If I ask now, is she going to stop replying again?"],["这次邀约没有提到昨天的沉默。他想答应，又怕追问让她再次不理人。可以把等待中的难受说出来，也可以先确认见面，不能替她补上没有说过的解释。","Her invitation doesn't mention the silence yesterday. He wants to see her but worries she'll stop replying if he asks about it. He can say the wait hurt or confirm the plans first. I don't know why she didn't reply."]],"choices":[{"thought":["把昨天的难受带出来","Say how yesterday felt"],"reply":["可以答应见面，也把你昨天等消息的感受说出来：“好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？”","You can accept and say how waiting felt: “Okay. See you this afternoon. I waited all day for a reply yesterday and it really hurt. Next time you want some time to yourself, could you tell me first?”"]},{"thought":["先把见面约下来","Make plans to meet first"],"reply":["可以先回：“好，下午见。”先确认你们都愿意见面，再商量地点。答应邀约并不等于你昨天没有难受，那部分可以等见了再考虑怎么说。","You can say, “Okay. See you this afternoon.” Make sure you both want to meet, then pick a place. Saying yes doesn't make yesterday stop hurting. You can think about what to say once you see her."]}],"memories":[]},"7f.REPLYEASY":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7f.REPLYOPEN":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7f.RECEIVEDBOTH":{"time":"Sunday Morning","lines":[["他回了：好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。\\n我知道我就是想让他难受。可他真这么说，我又有点不知道接什么了，咋回啊？","He said: “Okay. See you this afternoon. I kept waiting for you to reply yesterday. You saw my messages and ignored me all day, and that really hurt.”\\nI know I wanted him to feel bad. Now that he's actually said it hurt, I don't know what to say back. What do I reply?"],["他明确说出等待的难受，她听到后有些不自在。可以建议承认故意让他等不合适，而不是又把话转回他的质问；她对那件事的不满仍可留到见面谈。","He told her waiting hurt him. Hearing that made her uncomfortable. She can own that she kept him waiting on purpose and leave how she feels about his questions for when they meet."]],"choices":[{"thought":["接住他真的受了伤","Acknowledge that it really hurt"],"reply":["可以先回应他这句难受：“我知道。我昨天很烦，但不该故意让你等。下午见。”先承认故意不回这件事，不用在同一句里把所有委屈都解释完。","Start with the part about it hurting: “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.” You can admit you shouldn't have kept him waiting without trying to explain every part of the fight in that same message."]}],"memories":[]},"7f.RECEIVEDHER":{"time":"Sunday Morning","lines":[["他回得还挺快，就一句好，下午见。是不是也没那么气了？","He replied pretty fast. Just “Okay. See you this afternoon.” You think he's not that mad anymore?"],["他只答应了见面，没有说明对昨天的感受。她把回复快理解成不生气，可以先确认邀约已被接受，再提醒不能仅凭这句话判断他的情绪。","He agreed to meet but didn't say how he felt about yesterday. She's taking the quick reply as a sign. They do have plans, but it's too early to read his feelings into that one line."]],"choices":[{"thought":["接住邀约 不替他猜情绪","Accept the yes without guessing"],"reply":["能确定的是，他愿意见你了。至于还有没有生气，单看一句“好，下午见”还说不准，见面时也可以听听他怎么说。","You know he's willing to see you. As for whether he's still mad, “Okay. See you this afternoon” doesn't tell you that. You can hear him out once you meet."]}],"memories":[]},"7f.RECEIVEDHIM":{"time":"Sunday Morning","lines":[["他回：好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？\\n我就是气他前天那么问，可我确实没跟他说过我想自己待会儿。这句该怎么回？","He wrote: “Okay. See you this afternoon. I waited all day for a reply yesterday and it really hurt. Next time you want some time to yourself, could you tell me first?”\\nI was just angry about how he questioned me the day before yesterday. But I really didn't tell him I wanted time alone. How do I answer this?"],["他告诉她等不到回复很难受，也提出了具体请求。她可以交代昨天在生气，留到见面再谈经过。","He said it hurt to wait and made a specific request. She can say she was angry and leave the details for in person."]],"choices":[{"thought":["回应他等不到消息","Answer the part about waiting"],"reply":["可以回：“我昨天就是气你那样问，没跟你说一声。下午见了说吧。”先回应他等不到消息这件事，前天的争执见面再说。","You can reply: “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.” Acknowledge he was waiting for a reply, then talk about the argument in person."]}],"memories":[]},"7f.RECEIVEDQUIET":{"time":"Sunday Morning","lines":[["他回好，下午见。我昨晚还怕他说不想见呢，看来是我想多了。","He said, “Okay. See you this afternoon.” Last night I was afraid he wouldn't want to see me. Guess I was overthinking it."],["他答应见面，她因此放松了一点。目前只知道邀约得到回应，可以顺势建议确认地点，不推断两人已不再介意之前的事。","He said yes and she feels a little better. All I know is he accepted. They can pick where to meet without assuming neither of them cares about what happened."]],"choices":[{"thought":["先把见面安排好","Make plans to meet"],"reply":["至少见面这件事，他是愿意的。先把时间地点定好，其他还想说的话，到时再看怎么开口。","He does want to meet. Pick a time and place. You can decide how to bring up anything else once you're there."]}],"memories":[]},"7f.ACKBOTH":{"time":"Sunday Morning","lines":[["回了，就按那句说的，我知道。我昨天很烦，但不该故意让你等。下午见。","I replied with what we came up with: “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.”"],["她已照建议回应了他的难受，暂时没有新的消息或问题。可以简短确认，让她等对方回复，不再追加一轮解释，打断已经开始恢复的交流。","She's acknowledged how waiting felt for him. There isn't a new message or question. Keep it short and let him answer, so she doesn't feel she has to send another explanation."]],"choices":[{"thought":["等他接这句话","Wait for his answer"],"reply":["嗯，先等他回。这句已经回应了他的难受，不用急着再补什么。","Yeah, let him answer. You've already acknowledged that it hurt. You don't need to rush to add anything."]}],"memories":[]},"7f.ACKHIM":{"time":"Sunday Morning","lines":[["发了，我昨天就是气你那样问，没跟你说一声。下午见了说吧。","Sent it: “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.”"],["她已经解释了没回复的原因，也表达了愿意当面谈。现在需要留出让对方回应的时间，简短确认即可，不反复要求她补充更完整的解释。","She's said why she didn't answer and that she wants to talk in person. Give him room to respond without asking her to fill in every detail now."]],"choices":[{"thought":["等他接这句话","Wait for his answer"],"reply":["好，先等他回。你想继续见面聊的意思已经说清楚了。","Okay, let him answer. You've made it clear you want to talk when you see him."]}],"memories":[]},"7m.SENTBOTH":{"time":"Sunday Morning","lines":[["发了。她回，我知道。我昨天很烦，但不该故意让你等。下午见。\\n我又问了在哪碰头，等她定地方。","Sent it. She said, “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.”\\nI asked where we should meet. Waiting for her to pick."],["她承认不该故意让他等，说明这次表达得到了回应。接下来可以先落实见面，不必继续在消息里要求更多解释，免得又陷入反复确认。","She said she shouldn't have made him wait on purpose. She heard what he said. They can set up the meeting without getting stuck looking for more answers over text."]],"choices":[{"thought":["接住她的回应","Acknowledge her response"],"reply":["她这次回应了你的难受，也说了不该故意让你等。可以先把见面约好，剩下想说的留到当面，不用现在就把每句话都问到底。","She heard you say it hurt and said she shouldn't have kept you waiting. Set up the meeting and leave the rest for in person. You don't have to get to the bottom of every line right now."]}],"memories":[]},"7m.SENTHER":{"time":"Sunday Morning","lines":[["回了。我又问她在哪碰头。刚才打了半句昨天我，想想还是删了。","I replied. Asked where we should meet. I typed half a sentence, “Yesterday I…” and deleted it."],["他删掉了准备说的委屈，可能是怕破坏刚恢复的联系。可以尊重他先见面的选择，但不把删掉消息理解成已经释怀，也不催他马上重新发出。","He deleted what he was about to say, maybe because he didn't want to spoil the fact they're talking again. He can see her first. Deleting it doesn't mean he's over it or has to send it again now."]],"choices":[{"thought":["给没说完的话留点余地","Leave room for what he didn't say"],"reply":["先约好见面也可以。那半句删掉了，不代表你的难受就没了；等见到她，你还想说的话，可以再从昨天自己怎么过的讲起。","It's okay to make plans first. Deleting that half a sentence doesn't make the hurt go away. If you still want to say something when you see her, you can start with what yesterday was like for you."]}],"memories":[]},"7m.SENTHIM":{"time":"Sunday Morning","lines":[["发了。她回，我昨天就是气你那样问，没跟你说一声。下午见了说吧。\\n我又问了在哪碰头，等她定地方。","Sent it. She wrote, “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.”\\nI asked where we should meet. Waiting for her to pick."],["女友解释了昨天为什么没回复，也愿意见面谈。可以先安排见面，再当面说等待的经历。","She explained why she didn't reply and is willing to talk in person. They can make plans and talk about what waiting felt like then."]],"choices":[{"thought":["让话留到见面慢慢说","Leave the rest for in person"],"reply":["她告诉你昨天为什么没回，也愿意当面聊。先把见面约下来，你昨天怎么等过来的，也可以到时候讲。","She told you why she didn't reply and wants to talk face-to-face. Set up the meeting. You can tell her what yesterday was like for you once you're there."]}],"memories":[]},"7m.SENTQUIET":{"time":"Sunday Morning","lines":[["回了，我又问她在哪碰头。昨天的事我还是没敢问，先见了再说吧。","I replied and asked where to meet. I still didn't dare ask about yesterday. I'll see her first and go from there."],["他暂时不敢提昨天，只想先恢复联系。需要尊重这个选择，同时回应他怕再次被冷落的顾虑，不要把先见面写成必须放下委屈。","He's not ready to bring up yesterday and wants to get back in touch first. Let him choose that without implying he has to get over being hurt."]],"choices":[{"thought":["接住想见她的心情","Acknowledge that he wants to see her"],"reply":["那就先把见面约好。你想见她，和你昨天确实难受，并不冲突；不用为了今天能好好相处，就要求自己马上不在意了。","Then set up the meeting. You want to see her and yesterday really hurt. Both are true. Getting along today doesn't mean you have to stop caring about it right away."]}],"memories":[]},"7f.SETBOTH":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["两人已回应彼此的难受，也安排好了见面。她在同步邀约的结果，可以确认安排，让后面的谈话留到当面，不必继续催她通过消息解释。","They've responded to each other's hurt and made plans. She just wants to say what they decided. Confirm it and leave some of the conversation for in person."]],"choices":[{"thought":["把话留到当面慢慢说","Leave room to talk in person"],"reply":["好，先按这个安排见面。你们已经各说了一点，剩下的可以慢慢讲，不用现在全挤在聊天里。","Okay, meet as planned. You've both said a little already. You can talk through the rest without trying to fit it all into messages now."]}],"memories":[]},"7f.SETHER":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["见面的时间地点已经确定，但他还没有谈自己的感受。可以确认安排，把听对方怎么想的机会留到见面，不提前替他说已经没事。","They've settled where and when to meet, but he hasn't said how he feels. Confirm the plan and let him speak for himself when they meet."]],"choices":[{"thought":["确认约定 轻收尾","Confirm the plan, then wrap up"],"reply":["那就先把这次面见上。你想说的、也想听他怎么说的，都可以留到当面，不急着在消息里一次聊完。","Get together first. What you want to say, and what you want to hear from him, can wait until you're face-to-face. You don't have to cover it all in messages."]}],"memories":[]},"7f.SETHIM":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["她澄清了没有分手的意思，也约定了时间地点。接下来可以当面说各自介意的事，回复应帮助结束眼前的等待，不再重复推演他的态度。","She clarified she wasn't trying to break up, and they've agreed on a time and place. They can talk in person about what bothered each of them. This can end the wait without more guessing about how he feels."]],"choices":[{"thought":["留一点空间当面聊","Leave space to talk in person"],"reply":["好，下午见了再说。可以先讲你介意哪几句话，也听听他等消息时怎么想的，不必在见面前把结果都猜好。","Okay, talk this afternoon. You can say which things he said bothered you, and hear what it was like for him to wait. You don't have to guess how it will end before you meet."]}],"memories":[]},"7f.SETQUIET":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。昨天的事到时候再看吧。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there. We'll see about yesterday once we're there."],["她决定先见面，再看要不要谈昨天。安排已落实，可以简短确认，尊重她暂时没有往下谈的选择，不因为今天约上了就替她宣布矛盾过去。","She's decided to see him first and then decide whether to bring it up. They have a plan. I can confirm it without saying the argument is over just because they're meeting."]],"choices":[{"thought":["确认约定 轻收尾","Confirm the plan, then wrap up"],"reply":["好，那先见面。现在不用连昨天要怎么谈都安排好，到时候看看你们各自想说什么。","Okay, meet first. You don't have to plan how to talk about yesterday now. See what you each want to say once you're there."]}],"memories":[]},"7m.MEMBOTH":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMHER":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMHIM":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMQUIET":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.PLANENDBOTH":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDHER":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDHIM":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDQUIET":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.AFTERBOTH":{"time":"Sunday Evening · After Meeting","lines":[["回来跟你说一声，见了。吃饭的时候她又提了昨天，说当时就想让我也急一下。我说以后真不想说话，至少别让我一直等着猜。她答应了。\\n我也说以后不乱猜她和同事的关系了。后面就聊别的了，没一直绷着。","Just got back. We met up. At dinner she brought up yesterday again and said she wanted to make me sweat a little. I said next time she really doesn't want to talk, at least don't leave me waiting and guessing the whole time. She said okay.\\nI said I'd stop jumping to conclusions about her and her coworker. Then we talked about other stuff, and it wasn't tense the whole time."],["两个人当面谈到了质问和等待，也分别作了回应。他带回见面结果，可以肯定这次表达的具体进展，不必再追问，或把今天的承诺当成以后一定不会重演。","They talked about the questioning and the waiting in person and both responded. I can recognize what they actually said without asking more or assuming the same thing could never happen again."]],"choices":[{"thought":["肯定这次把话说出来","Acknowledge that they said it"],"reply":["这次你把等得难受说出来了，也承认了自己不该乱猜。今天能从僵着不说，走到把各自介意的事讲一点，已经是个变化，今晚可以先歇歇。","You told her how hard it was waiting, and you said you shouldn't have jumped to conclusions. You went from not talking at all to saying a little about what bothered each of you. That's a change. You can rest tonight."]}],"memories":[]},"7m.AFTERHER":{"time":"Sunday Evening · After Meeting","lines":[["见完了。吃饭时她又说昨天气上头了，我就说嗯，过去吧，然后换了个话题。\\n她后面一直给我讲这周的事，我听着挺高兴的。昨天那些话还是没说，刚好起来，我真不太敢再弄僵了。","Just got back. At dinner she said again that she got carried away because she was angry yesterday. I said, “Yeah, let's move on,” and changed the subject.\\nShe told me about her week after that. I was happy listening. I still didn't say any of the stuff about yesterday. Things had just started feeling okay again. I really didn't dare mess it up."],["见面和她的解释让他放松，但他明确说自己仍不敢提委屈。可以回应这个顾虑，让他知道今天没说不等于以后不能说，不替他认定事情已经过去。","Seeing her and hearing her explanation helped, but he says he still doesn't dare say how he felt. He can talk about it another time. I won't assume it's behind him."]],"choices":[{"thought":["留住还没说的感受","Keep room for what he hasn't said"],"reply":["你高兴她又愿意跟你讲这些，也怕一提昨天就把气氛弄坏，所以把话咽回去了。今天没说，以后仍然可以说，不一定要等到又出事时才能提。","You're happy she wanted to tell you things again, and afraid talking about yesterday would spoil it, so you swallowed it. You can still say it later. It doesn't have to take another fight to bring it up."]}],"memories":[]},"7m.AFTERHIM":{"time":"Sunday Evening · After Meeting","lines":[["回来了。她说昨天看见我那些消息还是烦，怕回一句又得接着解释。我说以后不乱猜她和同事的关系了，但不能一直不理我。她说知道了。\\n后面一起吃了饭。我也不知道她听进去多少，反正能好好说话了，就没再追着问。","I'm back. She said she was still annoyed when she saw my messages yesterday and didn't want to get dragged into explaining again. I said I wouldn't jump to conclusions about her and her coworker anymore, but she can't keep ignoring me. She said she understood.\\nThen we ate. I don't know how much really got through, but we could talk normally again, so I didn't keep asking."],["他表达了不能接受一直不回应，也承认不该猜疑同事关系。她口头回应知道了，他仍不确定。可以肯定话已说出，至于承诺有没有落实，需要以后相处再看。","He said he can't keep going without answers and admitted he shouldn't have assumed anything about her coworker. She said she understood. He's still unsure. He said what he needed to say. How they handle things next time will tell him more."]],"choices":[{"thought":["先接住能好好说话","Acknowledge that they could talk again"],"reply":["你已经把不能一直不理你这点说出来了，也承认自己不该乱猜。她听进去多少，不用今天再追问出一个保证，之后怎么相处，比反复说知道了更能说明问题。","You told her you can't be left waiting forever and acknowledged that you shouldn't have jumped to conclusions. You don't have to get a guarantee out of her today. What you do next time will tell you more than another “I understand.”"]}],"memories":[]},"7m.AFTERQUIET":{"time":"Sunday Evening · After Meeting","lines":[["见完了。她见我先问中午吃了没，我说没吃多少，她说那晚上多吃点。当时就觉得，算了，能好好说话就行。\\n后来聊了挺多，谁也没提周五的事。可现在回来又有点怕，下次她不回我，不还得这么等着吗？","Just got back. When she saw me she asked if I'd eaten lunch. I said not much, so she told me to eat more at dinner. I thought, forget it. At least we're talking again.\\nWe talked about a lot of things, but neither of us brought up Friday. Now that I'm home I'm worried again. Next time she doesn't reply, won't I just be waiting like this all over again?"],["见面时他想先恢复日常，回来后却仍担心再次被冷落。需要回应这种落差，让他知道轻松和难受可以同时存在，不催他今晚继续谈，也不把未谈当作已解决。","He wanted things to feel normal when they met. At home he's afraid of being left hanging again. A good time and an unresolved issue can coexist. He doesn't have to talk about it tonight."]],"choices":[{"thought":["给委屈留一个出口","Leave room to talk about the hurt"],"reply":["当时见到她，你想先把日子过回来；现在静下来，昨天的难受又冒出来了。这不奇怪，见面开心和事情没说开可以同时存在。等想清楚了，可以只讲那一天你怎么等的。","When you saw her, you wanted things to feel normal. Now that you're alone, yesterday's hurt has come back. It makes sense. You can enjoy seeing her and still have something you need to talk about. When you're ready, you can start with what that day of waiting was like."]}],"memories":[]},"7m.OVER":{"time":"Sunday Evening · After Meeting","lines":[],"choices":[],"memories":[]},"7f.AFTERBOTH":{"time":"Sunday Evening · After Meeting","lines":[["回来了，跟你说一声。见面我还是说了，昨天就是想让他急一下。他说以后真不想说话也告诉他，别让他一直猜，我答应了。\\n他也说以后不乱猜我和同事的关系了。后面吃饭就聊别的了，没一直说这个。","I'm back. Just letting you know how it went. I told him in person I wanted to make him sweat a little yesterday. He said next time I really don't want to talk, at least tell him so he's not left guessing. I said I would.\\nHe said he'd stop jumping to conclusions about me and my coworker. Then we talked about other stuff over dinner. We didn't stay on this all night."],["见面时两人再次谈到故意不回和猜疑，也分别作出了回应。可以肯定这次具体的沟通，不把口头承诺扩大成关系问题已经解决，今晚也不必继续追问。","They talked about not answering on purpose and about being suspicious. They each responded. I can recognize what they managed to say without assuming they've solved it all or continuing the questioning tonight."]],"choices":[{"thought":["肯定说出了以前没说的话","Acknowledge what they finally said"],"reply":["你说出了当时想让他急，他也说了不想一直猜，你们这次把话接上了一些。后面能聊点别的，今晚就先歇歇，不用把一顿饭变成把所有事都解决完的任务。","You told him you wanted to make him sweat, and he said he didn't want to keep guessing. You managed to hear each other a little this time. You could talk about other things after that. Take the night off. Dinner didn't have to fix everything."]}],"memories":[]},"7f.AFTERHER":{"time":"Sunday Evening · After Meeting","lines":[["回来啦。吃饭时我又说了句昨天气上头了，他就说嗯，过去吧，后面就聊别的了。\\n我本来还怕尴尬，他倒一直挺好说话的，我也就没那么紧张了。","I'm back. At dinner I said again that I got carried away because I was angry yesterday. He said, “Yeah, let's move on,” and we talked about other things.\\nI was afraid it would be awkward, but he was easy to talk to the whole time. I felt less nervous."],["她看到的是男友好说话、见面不尴尬，因此轻松了一些。他有没有其他感受尚不知道，可以回应她的放松，同时鼓励以后直接表达不满，而不是猜测对方都不介意。","She saw that he was easy to talk to and the meeting went well, so she relaxed. I don't know how else he felt. I can share her relief and encourage her to tell him what bothers her next time."]],"choices":[{"thought":["接住这次见面的轻松","Acknowledge the relief"],"reply":["见面没像你担心的那么尴尬，你也轻松了一点。以后再有不舒服，可以试着直接告诉他；不必一定等气过去，才重新说话。","It wasn't as awkward as you feared, and you got to relax a little. Next time something bothers you, you can try telling him directly. You don't have to wait until you're past being angry to talk again."]}],"memories":[]},"7f.AFTERHIM":{"time":"Sunday Evening · After Meeting","lines":[["见了。他说昨天一直等，我就说看见消息还是烦，怕回一句又得接着解释。他说以后不乱猜我和同事的关系了，但不能一直不理他。我说知道了。\\n后来吃饭还挺正常的，我也不想再说小周了。","We met. He said he waited all day yesterday. I said I was still annoyed when I saw the messages and didn't want to get dragged into explaining again. He said he wouldn't jump to conclusions about me and my coworker anymore, but I can't keep ignoring him. I said I understood.\\nDinner felt pretty normal after that. I didn't want to talk about Xiao Zhou anymore either."],["她说明了不愿回应的原因，也听到了男友不能接受一直被冷落。他承认不该乱猜，双方暂时恢复了日常。可以建议下次先说需要缓缓，避免继续靠沉默传达不满。","She explained why she didn't want to reply and heard how hard it was for him to keep waiting. He acknowledged jumping to conclusions. Things feel more normal for now. Suggest a quick heads-up next time she needs a break."]],"choices":[{"thought":["提醒下次留一句话","Suggest a heads-up next time"],"reply":["他这次说清了，一直等不到回复会让他难受。下次你不想继续解释，可以先告诉他需要缓一缓，让他知道你暂时不想聊，而不是只能靠不回去猜。","He made it clear that waiting without an answer hurts. Next time you don't want to keep explaining, you can tell him you need a minute so he knows you need a break instead of having to read it into the silence."]}],"memories":[]},"7f.AFTERQUIET":{"time":"Sunday Evening · After Meeting","lines":[["回来啦。见面我问他中午吃了没，他说没吃多少，我说那晚上多吃点，他就笑了。后面还挺好的。\\n昨天的事情谁也没提。可能就是气头上那会儿过去了吧。","I'm back. I asked if he'd eaten lunch and he said not much. I told him to eat more at dinner, and he smiled. It was pretty nice after that.\\nNeither of us brought up yesterday. Maybe we were just mad in the moment and it's passed."],["她把见面顺利理解成气已过去，但也明确说没有谈昨天。可以承认今天相处的轻松，不顺着认定不提就等于不介意，把以后再说的可能留给她。","She's taking the easy evening as a sign the anger might be over. They didn't talk about yesterday. I can acknowledge that it felt good and leave her room to talk about it later."]],"choices":[{"thought":["接住靠近 留着未尽的话","Share the relief and leave room to talk"],"reply":["今天能好好相处，你松口气很正常。昨天没提的事，也不一定就不介意了；以后你还想说，可以再找机会，不必因为今天开心就当作不能提。","It makes sense you're relieved you got along today. It can still bother you even if you didn't bring it up. If you want to say something later, you can. Having a good time today doesn't take that away."]}],"memories":[]},"7f.STATION":{"time":"Sunday Evening · After Meeting","lines":[["对了，他吃饭拍的照片全是糊的。说他兄弟外号叫废片大王，他这手艺就是跟那人学的。我说你这师父找得挺准啊。","Oh, every photo he took at dinner came out blurry. He says his friend goes by King of Bad Photos and that's who taught him. I said, “You really picked the right teacher.”"],["她又补了一件吃饭时的趣事，语气比之前轻松。现在没有新的求助，可以顺着照片接一句，让聊天自然结束，不必再把话题拉回矛盾分析。","She's added a funny thing from dinner and sounds more relaxed. She doesn't need help with anything else. Answer the joke and let the chat end naturally."]],"choices":[{"thought":["接回他下错站的小糗事","Call back to the wrong stop"],"reply":["那下次合照还是你来拍吧。下错一站要跟你说，拍糊了也要跟你说，这些小糗事也愿意跟你分享，讲起来倒是没怎么端着。","You should take the photo next time. He tells you when he gets off a stop early and when he takes a blurry photo. He's happy to share those little mishaps with you. He doesn't seem to put on much of an act when he tells you."]},{"thought":["顺着糊照片轻收尾","End on the blurry photos"],"reply":["这师承关系算是认下了。下次合照还是你来拍，让他负责好好站着，至少先保住一张清楚的。","Well, that explains where he learned it. You take the next one and let him concentrate on standing still. That should get you at least one clear photo."]}],"memories":[]},"7f.OVER":{"time":"Sunday Evening · After Meeting","lines":[],"choices":[],"memories":[]},"8f.F101":{"time":"One-Month Anniversary","lines":[["今天我跟我男朋友在一起一个月了。晚上约好吃饭。我中午能下楼一趟，想顺手给他买点什么。买啥啊？","It's been a month since my boyfriend and I got together. We're having dinner tonight. I can go downstairs at lunch, so I want to pick up a little something for him. What should I get?"],["用户想给男友带一点东西庆祝，中午有时间下楼。可以提供一项具体、容易买到的小建议。","The user wants a little gift to celebrate, and she has time to go downstairs at lunch. Give her a concrete suggestion that's easy to buy."]],"choices":[{"thought":["想起他提过的青提蛋糕","Remember the green grape cake"],"reply":["他提过想吃青提蛋糕，你可以去附近看看有没有小份的。晚上吃完饭一起分，正好。","He mentioned wanting green grape cake. See if there's a small one nearby. You can split it after dinner tonight."]},{"thought":["挑一份容易带的小点心","Pick an easy-to-carry treat"],"reply":["可以买一小盒曲奇，带着也方便。晚上见到他再给，不用为了一份礼物来回跑。","You could get a small box of cookies. It's easy to carry and you can give it to him tonight. No need to run all over for a gift."]}],"memories":[]},"8f.F102A":{"time":"One-Month Anniversary","lines":[["真买到了。小小一个，我塞办公室冰箱了。晚上拿，应该不会忘吧哈哈。","I actually found one. It's tiny. I stuck it in the office fridge. I'll grab it tonight. I won't forget, right? Haha."],["用户买到了蛋糕，已经放进办公室冰箱。可以给她一个简单办法，免得下班忘拿。","The user found the cake and put it in the office fridge. Give her an easy way to remember it when she leaves."]],"choices":[{"thought":["提醒出门前拿蛋糕","Remind her to grab the cake"],"reply":["下班前设个提醒吧。写个「冰箱里的蛋糕」，到时候看一眼就知道了。","Set a reminder for before you leave work. Just write “cake in the fridge.” You'll know what it means when you see it."]}],"memories":[]},"8f.F102B":{"time":"One-Month Anniversary","lines":[["买了盒曲奇。我先塞包里了。晚上他要问为什么不是别的，我就说店里它排第一个。","Got a box of cookies. Put it in my bag. If he asks why I got these, I'll say they were first on the shelf."],["用户已经买好一份小点心，也在随口开玩笑。可以轻松接一句。","The user has picked up a treat and is joking. A light reply is enough."]],"choices":[{"thought":["顺着小礼物聊一句","Play along about the gift"],"reply":["排第一个也算被你选中了。晚上见面再给他，挺好。","First on the shelf still counts as being picked. Give them to him when you see him tonight."]}],"memories":[]},"8m.M101":{"time":"One-Month Anniversary","lines":[["今天跟我女朋友在一起一个月了。晚上约了吃饭，我想顺路给她带杯喝的。你说去哪买？","I've been with my girlfriend for a month today. We're getting dinner tonight and I want to bring her a drink on the way. Where should I get it?"],["用户想给女友带一杯饮料，现在只需要帮他选店。口味可以留到下单时再定。","The user wants to bring her a drink. He just needs to pick a place. He can choose a flavor when he orders."]],"choices":[{"thought":["回想她提过的店","Recall the place she mentioned"],"reply":["她之前提过公司楼下的青杏。可以去那家看看菜单，有想不准的口味再问她。","She mentioned Green Apricot downstairs from her office. You could look at the menu there and ask her if you're not sure what she'd like."]},{"thought":["路上挑一家饮品店","Pick a drink shop on the way"],"reply":["找一家顺路的就行。你要是拿不准她喝什么，可以先看看菜单，到了再挑。","Find somewhere on your way. If you're not sure what she drinks, have a look at the menu and pick when you get there."]}],"memories":[]},"8m.M102A":{"time":"One-Month Anniversary","lines":[["青杏是吧，行，等会儿出门去买。","Green Apricot, right. Okay, I'll go get it when I head out."],["用户定了去青杏，还没出门。简单确认就够了。","The user has decided on Green Apricot and hasn't left yet. A quick confirmation is enough."]],"choices":[{"thought":["确认买饮料的安排","Confirm the drink plan"],"reply":["好，等你出门再买，带过去还是凉的。","Sounds good. Buy it on your way and it'll still be cold when you get there."]}],"memories":[]},"8m.M102B":{"time":"One-Month Anniversary","lines":[["行，我等出门路上看吧。不急。","Okay, I'll look on my way out. No rush."],["用户决定到出门时再挑店，眼下没有需要继续确定的事。","The user is going to choose when he leaves. Nothing else needs settling now."]],"choices":[{"thought":["让安排先留着","Leave the plan open"],"reply":["可以，路上挑就行。","Sure, pick a place on the way."]}],"memories":[]},"8f.F103":{"time":"Early Evening · Change of Plans","lines":[["本来都准备收拾包了，刚叫我把方案再改一遍。还有一堆没弄，我估计出不去了。晚上那顿我得跟他说改天，你帮我想一句？","I was about to pack up, then they asked me to revise the proposal again. I've still got a pile of stuff to do, so I don't think I can leave. I need to ask him to do dinner another day. Can you help me write something?"],["用户临时要改方案，预计不能按约赴餐。她想先告诉男友，可以把变化和改期请求说清，暂时不承诺另一个时间。","The user has a last-minute revision and probably won't make it to dinner. She can explain the change and ask to reschedule without committing to a new time yet."]],"choices":[{"thought":["把加班和改期说清楚","Explain the work and reschedule"],"reply":["可以发「今天临时还得改个东西，估计走不开。晚上那顿改天吃行吗？」先把今晚的变动告诉他，具体哪天等你们都有空再定。","You could send, “Something came up that I need to revise today. I don't think I can get away. Can we do dinner another day?” Let him know about tonight first. Pick a new day once you're both free."]}],"memories":[]},"8m.M103":{"time":"Early Evening · Change of Plans","lines":[["她刚发我「今天临时还得改个东西，估计走不开。晚上那顿改天吃行吗？」我回了「好，你先忙。」我知道她在忙。就是我今天下午老看时间，刚才还在想快下班了。","She just sent, “Something came up that I need to revise today. I don't think I can get away. Can we do dinner another day?” I said, “Okay. Take care of work first.” I know she's busy. I kept checking the time this afternoon, though. I was just thinking it was almost time to get off work."],["用户已经回了女友。他提前盼着下班，突然改期有些失落。先回应这份落差，看看他此刻还有什么想说。","The user has already replied. He was looking forward to work ending and feels let down by the sudden change. Acknowledge how that feels and see what he wants to say now."]],"choices":[{"thought":["接住临时改期的失落","Acknowledge the disappointment"],"reply":["你惦记了一下午，临到下班突然改期，心里空一下很正常。你现在还想跟她说点什么，还是就想找人说说这一下？","You were looking forward to it all afternoon, and it changed right when you were about to get off work. Of course that feels a little empty. Is there anything else you want to tell her, or do you just want to talk about how it felt?"]}],"memories":[]},"8f.F104":{"time":"Early Evening · Change of Plans","lines":[["他说「好，你先忙。」那我先改吧，等弄完再看几点。唉，我本来都在想晚上吃什么了。","He said, “Okay. Take care of work first.” I'll get back to the revisions, then. See what time it is when I finish. Ugh, I was already thinking about what we could eat tonight."],["用户收到改期答复，仍为落空的晚饭可惜。现在她准备回去工作，可以先接住这句。","The user has heard back and is still disappointed to miss dinner. She's about to get back to work. Acknowledge that she was looking forward to it too."]],"choices":[{"thought":["回应她也想赴约","Acknowledge she wanted to go too"],"reply":["你也盼着这顿饭，临时被打断当然会可惜。先把手上的东西改完，等你们能坐下来吃的时候再好好吃。","You were looking forward to dinner too. Of course you're disappointed it fell through. Finish what's in front of you, and enjoy dinner when you can sit down together."]}],"memories":[]},"8m.M104":{"time":"Early Evening · Change of Plans","lines":[["我后来还是想去一趟。给她发了「我给你送点吃的，送到就走。」我已经在路上了。她还没回，吃的和喝的我都买了。","I decided I still wanted to go. I sent her, “I'll bring you something to eat. I'll drop it off and go.” I'm already on my way. She hasn't replied yet. I've got the food and the drink."],["用户已经买了东西并出发，女友还没确认能见面。可以建议用户到楼下先问一句，把下不下来留给她决定。","The user has already bought everything and left. She hasn't said she can see him. He can ask once he gets there and leave it up to her whether to come down."]],"choices":[{"thought":["先确认她方不方便下来","Check if she can come downstairs"],"reply":["到了先问她方不方便下来。她忙的话，你也可以问问东西能不能放前台，省得她临时跑一趟。","When you get there, ask if she can come down. If she's busy, ask if you can leave it at reception so she doesn't have to drop everything and come down."]}],"memories":[]},"8m.M105":{"time":"19:16","lines":[["我现在拎着东西在路口。刚到楼下还没来得及问她，直接看见她跟一男的拿外卖，有说有笑。我说「不是说在忙吗？你跟他聊得还挺开心。」她说「这是小周，我们下来拿外卖。」那几个人都在，她直接来一句「行了，你别在这儿丢人了，回去吧。」就上去了。现在我还站这儿呢。","I'm at the corner holding all this stuff. I just got to her building and didn't even get a chance to ask. I saw her getting takeout with some guy, laughing and talking. I said, “I thought you were busy. You sure look like you're having fun talking to him.” She said, “This is Xiao Zhou. We came down to pick up our food.” Those other people were all there, and she just goes, “Enough. Stop embarrassing yourself here. Go home.” Then she went upstairs. I'm still standing here."],["用户特地买了吃的过来，却当着几个人的面被说丢人，现在还拎着东西站在路口。先让用户知道，我听见了他受的委屈。","The user went out of his way to bring food, got called embarrassing in front of a group, and is still standing at the corner with the bag. First let him know I've heard how hurt he feels."]],"choices":[{"thought":["接住用户的委屈","Acknowledge how much it hurt"],"reply":["你拎着吃的跑过去，她当着那么多人的面说你丢人，说完就上楼了。你一个人拎着东西站在那儿，换谁都不好受。","You brought food all the way over, and she told you to stop embarrassing yourself in front of all those people, then went straight upstairs. Being left there alone, still holding the food, would hurt."]}],"memories":[]},"8f.F105":{"time":"19:19","lines":[["我刚回工位才看见他发的「我给你送点吃的，送到就走。」刚才我跟同事下楼拿外卖，小周跟我说那家饭又给他送错了，我正笑呢，结果也不知道他从哪儿冒出来的，张口就说「不是说在忙吗？你跟他聊得还挺开心。」我说「这是小周，我们下来拿外卖。」怎么一来就问这个啊？","I just got back to my desk and saw his message: “I'll bring you something to eat. I'll drop it off and go.” I'd gone down to pick up food with my coworkers. Xiao Zhou was telling me the place had messed up his order again, and I was laughing. Then my boyfriend came out of nowhere and the first thing he said was, “I thought you were busy. You sure look like you're having fun talking to him.” I said, “This is Xiao Zhou. We came down to pick up our food.” Why would he lead with that?"],["用户没预料男友会来，见到他时还不知道他发过消息。他一开口就问她和同事的事，用户还在为这个生气，可以先回应她当时有多突然。","The user hadn't seen his message and didn't expect him to be there. The first thing he did was question her about her coworker. She's still angry. I can acknowledge how sudden it was."]],"choices":[{"thought":["接住用户的意外","Acknowledge how sudden it felt"],"reply":["你当时只是下楼拿外卖，没想到会碰见他。他又当着同事那么一问，你连发生了什么都还没弄明白，就已经被问上了。","You were just picking up food. You didn't expect to see him, and he asked you that in front of your coworkers. You were already being questioned before you knew what was going on."]}],"memories":[]},"8m.M106":{"time":"19:20","lines":[["对啊，她要我走就说一声呗。那几个人都在，她说完就上楼了，剩我拎着东西站那儿。我越想越气。我问她怎么说完就走了，看她怎么回。","Exactly. If she wanted me to go, she could've just said so. The others were all there. She said that and went upstairs, and I was left holding everything. The more I think about it, the angrier I get. I'll ask why she just walked off and see what she says."],["用户越想越气，已经打算去问女友为什么说完就走。可以提醒他先说自己介意什么，让对方知道他为什么来找她。","The user is getting angrier and is about to ask why she walked off. I can remind him to say what bothered him, so she knows why he's bringing it up."]],"choices":[{"thought":["让用户先说自己的感受","Have him say how he felt"],"reply":["你想问她为什么把你一个人留在那儿。你最介意的是她当着大家说你丢人，就让她先听见这个。","You want to ask why she left you standing there. What hurt most was hearing that in front of everyone. Let her hear that first."]}],"memories":[]},"8f.F106":{"time":"19:24","lines":[["我当时就说了「行了，你别在这儿丢人了，回去吧。」然后我就上来了。他刚发「你刚才怎么说完就走了？当着那么多人说我丢人，你让我站那儿怎么办？」他自己跑来的啊，我都说今晚走不开了。我现在特别想回他。","I said, “Enough. Stop embarrassing yourself here. Go home.” Then I came back upstairs. He just said, “Why'd you just walk away after saying that? You told me I was embarrassing myself in front of all those people. What was I supposed to do, just stand there?” He came here on his own. I told him I couldn't get away tonight. I really want to answer him right now."],["用户想回男友，因为她在意的是对方没等答复就来、又当着同事质问她。可以帮她先说清这两件事。","The user wants to reply because he came without waiting for an answer and questioned her in front of her coworkers. I can help her say those two things clearly."]],"choices":[{"thought":["支持用户说清楚","Help her say it clearly"],"reply":["他没等你回就来了，又当着同事那么问，你会生气很正常。要回的话，可以先告诉他，你当时都没看见他要过来的消息。","He came without waiting for a reply, then asked you that in front of your coworkers. It makes sense you're angry. If you want to answer, start with the fact you hadn't seen his message about coming over."]}],"memories":[]},"8m.M107":{"time":"19:35","lines":[["她回「你没等我回就来了，一来就问小周。我都说了是同事，你还要我说什么？」我就发「你俩平时私下也这么聊？那你给我看看聊天记录。」她回「不给。上次要看，这次又来？」我说的是聊天记录，她怎么又跟我扯上次？","She said, “You came without waiting for me to reply. You showed up and went straight to asking about Xiao Zhou. I told you he's a coworker. What else do you want me to say?” I sent, “Do you two talk like this in private too? Then show me your chat history.” She said, “No. You asked to see it last time, and now you're doing it again?” I'm asking about the chat history. Why's she going on about last time?"],["用户想让女友回应他当众受伤的事，却已经追问到私聊记录。对方明确拒绝了，可以解释继续追问会让争执离他原本想说的事更远。","The user wants her to acknowledge how she hurt him in public, but he's now asking to see private messages. She's said no. I can explain how pushing will take them further from what he wanted to say in the first place."]],"choices":[{"thought":["劝用户别再追问","Urge him to stop pressing"],"reply":["她还没回应你被当众说丢人的事，你着急我能理解。但她已经说了不给看，你再追问，她听到的只会是你还在怀疑她。你真正想让她听见的话，反而更难说清楚。","She hasn't answered the part about calling you embarrassing in front of everyone. I get why that bothers you. She's already said she won't show you the chat. If you keep asking, all she'll hear is that you still suspect her. It'll be harder for her to hear what you really wanted to say."]}],"memories":[]},"8f.F107":{"time":"19:40","lines":[["我说小周是同事，他回「你俩平时私下也这么聊？那你给我看看聊天记录。」我回了「不给。上次要看，这次又来？」他又来「那你把他删了吧，工作上不是有群吗？」我俩天天还得对表呢，我删他干嘛？","I said Xiao Zhou's a coworker, and he wrote, “Do you two talk like this in private too? Then show me your chat history.” I said, “No. You asked to see it last time, and now you're doing it again?” Then he goes, “Then delete him. Don't you have a group chat for work?” We still have to check the spreadsheet together every day. Why would I delete him?"],["用户解释了工作关系，仍先后被要求交出私聊和删除同事。她想守住工作来往和隐私，可以帮她把拒绝说清楚。","The user explained that they work together. Then he wanted her private messages and told her to delete her coworker. She wants to protect both her privacy and a working relationship. I can help her say no plainly."]],"choices":[{"thought":["把拒绝说清楚","Make the refusal clear"],"reply":["你可以直接说「他跟我做一个项目，我不会删。」你已经讲了是工作关系，也可以保留自己的聊天记录。","You can say, “We're on the same project. I'm not deleting him.” You've explained it's work. You can also keep your messages private."]}],"memories":[]},"8m.M200":{"time":"19:52","lines":[["我刚才一急，顾不上别的了，就问她能不能把小周删了。结果越说越难听。我都说以后不来了，她回我「你放心，我也不会叫你。」我最后就回了个行。她说不叫就真不叫了是吧？","I got worked up and stopped thinking about anything else. I asked if she could delete Xiao Zhou. It just got nastier. I said I wouldn't come over again, and she said, “Don't worry. I won't ask you to.” I just said fine. Does she really mean she's never gonna ask me over again?"],["用户带着最后一句话回来，想知道女友是不是认真的。她的意思暂时无法确认，可以先问两人怎样说到了以后不见面。","The user has come back with her last line and wants to know whether she meant it. I can't tell yet. Ask how the conversation got to them not seeing each other."]],"choices":[{"thought":["问问争吵的经过","Ask how the fight got there"],"reply":["这句听着够重的。你说以后不来，是怎么说到这儿的？她前面回了你什么？","That sounds harsh. How did it get to you saying you wouldn't come over anymore? What did she say before that?"]}],"memories":[]},"8m.M201":{"time":"19:58 · 19:52","lines":[["她不删，我说她护着小周。她就说以后跟领导说句话是不是也得先问我。我听着就来气。我说以后不来，她说本来也没叫我来。我都跟她说了，当着那么多人被说丢人有多难受。她有哪怕回我一句吗？","She wouldn't delete him, so I said she was sticking up for Xiao Zhou. Then she asked if she needs my permission to talk to her boss from now on. That pissed me off. I said I wouldn't come over again, and she said she never asked me to in the first place. I told her how much it hurt to hear that in front of everybody. Did she say one word back about that?"],["用户想知道，女友有没有回应他当着同事被说丢人的难受。他已经讲出了最后几句，也提到自己要求她删同事。可以先接他没被回应的委屈，或者和他一起把刚才这段重看一遍。","The user wants to know if his girlfriend answered the part about how it felt to hear that in front of her coworkers. He's told me the last few lines and said he asked her to delete her coworker. I can acknowledge that he wasn't heard or go back through it with him."]],"choices":[{"thought":["顺着用户说","Go along with the user"],"reply":["你在意的那句一直没得到回应。后来你一说不来了，她又回你本来就没叫你来。这时候你觉得自己过去这一趟特别没意思，我能理解。","The part you cared about still hasn't been answered. Then you said you weren't coming over again, and she said she hadn't asked you to in the first place. I can see why the whole trip feels pointless now."]},{"thought":["陪用户冷静回顾","Help the user think it through"],"reply":["你说当着她同事被说丢人，心里很难受。她没回应你，你会介意很正常。你刚才也提到，她不肯删，你就说她护着小周。她说小周是同事，你当时为什么没信她？","You said it hurt to hear that in front of her coworkers. It makes sense it bothered you when she didn't answer that. You also said when she wouldn't delete him, you accused her of sticking up for Xiao Zhou. She said he's a coworker. Why didn't you believe her then?"]}],"memories":[]},"8m.M202B5":{"time":"20:03 · 19:52","lines":[["我当时哪顾得上想那么多。她让我走就上楼了，我拎着东西站那儿。以前她就算回得慢，忙完也会跟我说一声的。","I couldn't think about any of that right then. She told me to go and went upstairs. I stood there with the food. Before, even when she took a while, she'd say something when she was done."],["用户想起女友过去虽慢但会回应，今晚却没能把话说完。我记得她答应交往时说过自己不太会谈恋爱，可以顺着用户眼下的落差问他最想说什么。","The user remembers that she'd take a while but still reply. Tonight they never got to finish the conversation. I remember her saying she might not be good at relationships when she agreed to date him. I can ask what he most wanted to hear."]],"choices":[{"thought":["回想两人刚交往时","Think back to when they got together"],"reply":["你以前说她回得慢但都会回，所以你这次也盼着她能再跟你好好说几句。她答应和你在一起时，还说过自己可能不太会谈恋爱。她今天上楼时怎么想的，我们现在说不准。你当时最希望她跟你说什么？","You said she takes a while to reply, but she always does. So this time you hoped she'd give you a chance to talk. When she said yes to dating, she also said she might not be very good at relationships. I can't tell what she was thinking when she went upstairs. What did you most want her to say to you then?"]}],"memories":[]},"8m.M202B7":{"time":"20:03 · 19:52","lines":[["我以前觉得她回慢点也没事，反正会回。上次我说完不该要记录，她一天没理我。今天她让我走，自己就上楼了，我一下又想起来了。","I used to think it didn't matter if she took a while. She'd reply eventually. Last time I said I shouldn't have asked to see the chat, she ignored me for a whole day. Today she told me to go and went upstairs. It brought the whole thing back."],["用户把上次等不到回复和今晚被留在楼下连在了一起。我记得他以前以为她忙完总会回，可以先理解他为什么着急。","The user is connecting waiting without an answer last time with being left downstairs tonight. I remember he used to count on her replying when she was done. I can see why he got anxious."]],"choices":[{"thought":["接住他怕再等不到","Acknowledge his fear of another wait"],"reply":["你以前觉得她回得慢但都会回。上次你说不该要看记录，她却一天没回。今天她说完就上楼，你一下想到那一回，也难怪着急。你后来有跟她说，你怕她又不理你吗？","You used to feel that she took a while to reply, but she always did. Last time you said you shouldn't have asked to see her chat, and then she didn't reply all day. Today she left right after telling you to go. No wonder it brought that back. Did you tell her you were afraid she might ignore you again?"]}],"memories":[]},"8m.M202E":{"time":"20:03 · 19:52","lines":[["就很没意思啊。我还跑去买吃的。我当时站那儿，感觉旁边人都在等我走。她回来跟我说的还是我自己跑来的。","It just felt pointless. I went out and bought her food and everything. Standing there, I felt like everybody was waiting for me to leave. Then she messaged back just to say I came on my own."],["用户在说当众被打发和事后没被回应。先说明这两次为什么让他不好受，暂时不用替女友推断动机。","The user is talking about being sent away in public and feeling unheard afterwards. I can say why those two moments hurt without deciding what his girlfriend meant."]],"choices":[{"thought":["听完这两次难受","Hear what hurt both times"],"reply":["你在楼下已经够尴尬了，后来想把这份难受跟她讲，又只听到她说是你自己来的。难怪你到现在还在想那几句。","It was awkward enough standing downstairs. Then when you tried to tell her how much it hurt, all you heard back was that you came on your own. No wonder you're still thinking about those lines."]}],"memories":[]},"8m.M202O5":{"time":"20:03 · 19:52","lines":[["她说是同事我听见了。我就想不通，她跟人家还好好说着话呢，见我就让我走。以前她忙归忙，下班再晚也会回我。怎么现在这样？","I heard her say he's a coworker. I just don't get it. She's talking to him like everything's fine, then she sees me and tells me to go. She used to answer no matter how late she got out of work, even if she was busy. What's changed?"],["用户还在气女友让他离开，并想起她以前就算忙也会回。我记得用户转述过女友答应交往时说自己不太会谈恋爱。可以让他把原本期待的回应说出来。","The user is still angry she told him to go and remembers she used to reply even when she was busy. I remember him quoting what she said about not being good at relationships. I can ask what he was hoping she'd say."]],"choices":[{"thought":["回想她当时的话","Remember what she said back then"],"reply":["你以前说，她回得慢但都会回。今天你也在等她好好跟你说一句，结果她当着人让你走。她答应跟你在一起的时候说过，自己可能不太会谈恋爱。今天她为什么这么急着走，光凭这一幕还看不出来。她上去以后，你最希望她回你什么？","You said she takes a while to reply, but she always does. Today you were waiting for her to talk to you, and she told you to leave in front of everyone. When she agreed to go out with you, she said she might not be very good at relationships. We can't tell from that moment why she was in such a hurry. Once she went upstairs, what did you want her to say?"]}],"memories":[]},"8m.M202O7":{"time":"20:03 · 19:52","lines":[["以前她哪怕慢点也会回。现在一生气就不理人，上次一天都没回我。","She used to reply even if it took a while. Now if she gets mad she just ignores me. Last time I didn't hear from her all day."],["用户主动拿眼下和此前的相处比较。我记得用户说过她慢回却都会回，也说过后来等了一整天，可以让用户看看自己当时期待了什么。","The user is already comparing this to how things used to be. I remember he said she'd always respond eventually and that he later spent a whole day waiting. I can help him see what he was hoping for."]],"choices":[{"thought":["对照慢回和争执后的沉默","Compare a slow reply and silence after a fight"],"reply":["你以前说她回得慢但都会回。后来你说过不该要聊天记录，那一整天也没收到回音。你今天会一下想到她又不想理你，我能理解。你有跟她说过你怕的是这个吗？","You used to say she takes a while to reply, but she always does. Then you said you shouldn't have asked to see the chat and heard nothing all day. I get why you thought she might shut you out again. Did you tell her that's what you were afraid of?"]}],"memories":[]},"8m.M202S":{"time":"20:03 · 19:52","lines":[["我到那儿的时候她还跟小周说说笑笑呢。说忙得没空见我，跟他倒有说有笑的。我一过去她就让我走，我能不多想吗？","When I got there she was laughing with Xiao Zhou. She was too busy to see me, but she was having a great time talking to him. The second I got there she told me to go. How was I supposed to not read into that?"],["用户把女友和同事说笑、让他离开连在一起。我记得他上次也在不知道对方聊过什么时就要求看记录。可以先承认他看到的场面让他难受，再问他有没有听到别的信息。","The user is connecting seeing her laugh with her coworker and then being told to leave. I remember he asked to see the chat last time without knowing what they'd talked about. I can acknowledge why it hurt, then ask if he heard anything else."]],"choices":[{"thought":["回想上次查记录","Think back to asking for the chat"],"reply":["你过去是想见她，结果看到她跟同事聊得开心，自己还被叫走，心里有落差很正常。我记得上次你也因为她和小周相处得挺好，就想看他们的聊天记录。今天除了看见他们一起拿外卖，你还听见什么了吗？","You wanted to see her. You saw her laughing with her coworker and then she sent you away. It makes sense that felt bad. I remember last time you wanted to see their messages because she seemed to get along with Xiao Zhou. Apart from seeing them picking up dinner, did you hear anything else?"]}],"memories":[]},"8m.M203B5":{"time":"20:07 · 19:52","lines":[["就别当着人让我走啊。她要是真没空，跟我说晚点再聊就行。我后来也没好好说这些，一直问她跟小周私下聊什么。","Just don't tell me to go in front of everyone. If she really can't talk, tell me we'll talk later. I didn't say any of that right. I just kept asking what she talks about with Xiao Zhou in private."],["用户已经说出自己想要的回应，也记起自己一直追问同事。我记得用户上次也说过，没看到什么就开口要记录，可以让他想想为什么又追到了那里。","The user has said what he wanted her to say and remembered how he kept pressing about her coworker. Last time he told me he asked for the chat without seeing anything. I can ask him to think about how he got there again."]],"choices":[{"thought":["回看上次追问","Look back at the last time he pressed"],"reply":["你想听她说晚点还能跟你好好聊。上次你也说过，明明不知道他们聊过什么，还是开口要看记录。今天你气的是她当着人赶你，聊到最后却变成非要她删同事。可以先缓缓，再想你想跟她说什么。","You wanted to hear that she'd talk to you properly later. Last time you said you didn't know what they'd talked about, but you still asked to see the chat. Today you were angry she sent you away in front of people. By the end you were demanding she delete her coworker. Take a minute, then think about what you want to tell her."]}],"memories":[]},"8m.M203B7":{"time":"20:07 · 19:52","lines":[["没。我就又让她给我看记录。她说不给，我还让她删人。我当时就觉得她肯删，我就不用一直想了。","No. I just asked to see the chat again. She said no and I told her to delete him. I thought if she'd delete him, I could stop thinking about it."],["用户说出自己为什么想让女友删人。我记得上次他也在没有根据时索要记录，可以让他看看两次用了什么办法让自己安心。","The user has said why he wanted her to delete her coworker. Last time he asked to see her messages without any evidence. I can help him see what he tried to do both times to feel reassured."]],"choices":[{"thought":["回想上次怎么问的","Remember what he asked last time"],"reply":["上次你说，你都不知道他们聊过什么，还是想看记录。今天她说不给，你就让她删人。你想安心很正常，可她已经说了只是同事。你可以先缓缓，想想还有什么办法能让她知道你在怕什么。","Last time you said you didn't know what they'd talked about and wanted to see the chat anyway. Today she said no and you told her to delete him. Of course you want to feel sure, but she's already said he's a coworker. Take a minute to think of another way to tell her what you're afraid of."]}],"memories":[]},"8m.M203O5":{"time":"20:07 · 19:52","lines":[["就跟我说一句她刚才为什么那样呗。她要是说忙，等忙完再说，我也不至于站那儿一直猜。可她后来回我的是我自己跑来的。","I just wanted her to tell me why she did that. If she'd said she was busy and we'd talk when she was done, I wouldn't have stood there guessing. But what she said was that I came on my own."],["用户说出了自己想听的回答，仍在气对方把受伤归到他突然来访。可以帮他把这个愿望和继续追问同事分开。","The user has said what he wanted to hear and still feels like she blamed his hurt on him turning up. Help him separate what he wants her to hear from the questions about her coworker."]],"choices":[{"thought":["听清用户想说什么","Hear what he wants to say"],"reply":["你是想听她好好回应你，尤其是当着同事说你丢人这件事。问小周也问不出这个答案。你还在气，可以先走走，等你想好要她听见什么再说。","You want her to answer you, especially about being called embarrassing in front of her coworkers. Asking about Xiao Zhou won't tell you that. You're still angry. Go for a walk and figure out what you most want her to hear."]}],"memories":[]},"8m.M203O7":{"time":"20:07 · 19:52","lines":[["没啊。我当时满脑子都是，她跟别人好好的，怎么跟我就这样。后来小周删不删，我还非得问出个结果来。","No. All I could think was, she's fine with other people, so why's she like this with me? Then I just had to get an answer about whether she'd delete Xiao Zhou."],["用户在气女友让他离开，也记得自己后来一直逼问。可以提醒他，问同事的事不会让女友知道他怕再等不到回应。","The user is still angry she sent him away and remembers pressing her. I can point out that making it about her coworker won't tell her why he's afraid she'll stop replying."]],"choices":[{"thought":["说说他到底在怕什么","Name what he's afraid of"],"reply":["你怕她跟上次一样不理你，可你问的是她肯不肯删同事。她从这句里听不出你在等她回你。先缓缓，等会儿再想要不要跟她说。","You're afraid she'll ignore you like last time, but you're asking her to delete a coworker. She can't hear that you're waiting for a reply in that question. Take a minute, then see if you want to tell her."]}],"memories":[]},"8m.M203S":{"time":"20:07 · 19:52","lines":[["也没听见什么。我就是觉得，她那么急着让我走，是不是不想让她那些同事看见我啊。她那样说我，我到现在还气。","Didn't hear anything else. I just thought, she wanted me gone so fast. Maybe she didn't want those coworkers to see me. I'm still angry about what she said."],["用户仍在意当众受伤，也承认自己没有听见别的。可以让他分清当众被说丢人和猜测女友有意瞒同事这两件事。","The user is still upset about what she said in front of people and admits he didn't hear anything else. Help him separate the insult from his guess that she wanted to hide him."]],"choices":[{"thought":["分清感受和猜测","Separate the feeling from the guess"],"reply":["她当着同事说你丢人，你当然可以生气。至于她是不是不想让同事看见你，你现在还不知道。上次你也是越猜越着急，最后开口要看记录。可以先把手机放一放，等会儿再想你最想跟她说什么。","Of course you can be angry she called you embarrassing in front of her coworkers. You don't know whether she didn't want them to see you. Last time, guessing made you more anxious, and you ended up asking to see the chat. Put your phone down for a bit and think later about what you want to tell her."]}],"memories":[]},"8m.M203E":{"time":"20:08 · 19:52","lines":[["算了，我也不发了。再发她又嫌我没完没了。我先找个地方坐会儿。","Forget it. I'm not sending anything else. She'll just say I won't let it go. I'll find somewhere to sit for a bit."],["用户决定暂时收起手机，眼下需要的是让争执先停一会儿。","The user has decided to put his phone away for now. What he needs is a break from the argument."]],"choices":[{"thought":["支持先放下手机","Let him put the phone down"],"reply":["那就先坐会儿。这会儿你也没什么想接着说的，手机可以放一放。","Then find a seat for a bit. There's nothing else you want to say right now, so you can put the phone down."]}],"memories":[]},"8f.F200":{"time":"20:12","lines":[["我刚去对了两行东西，一停下来又想起他那几句。先要看我聊天，再让我删人。我不删他还说「你就非得护着他，是吧？」我真的是……我上班也得跟他证明我没干什么吗？","I just went to check a couple of rows, then I stopped and remembered what he said. First he wanted to see my chat, then he wanted me to delete him. When I said no he went, “You just have to stick up for him, huh?” I swear… Do I have to prove I wasn't doing anything even at work?"],["用户在短暂回去工作后继续说起争执。她明确介意被要求自证，后面发生了什么还没讲完，可以先接住她的火气，再问对话怎么结束的。","The user went back to work briefly and is talking about the fight again. She's upset at being made to prove herself. I haven't heard how it ended. I can acknowledge how angry she is and hear the rest."]],"choices":[{"thought":["听她讲到最后一句","Hear how it ended"],"reply":["你已经说了同事的事，还是被追着证明，当然会烦。你们后来又说了什么？","You already explained he's a coworker and still got pressed to prove yourself. Of course you're annoyed. What did you say after that?"]}],"memories":[]},"8f.F201":{"time":"20:18 · 20:12","lines":[["我说以后是不是跟领导说话也得问他。然后他翻上次一天没回，又说楼下，说以后不来了。我回本来也没叫他来。他说我叫他他也不来，我就说那我也不会叫了。最后他回个行。什么都能说成我有问题，他还想让我怎么办？","I asked if I'd need his permission to talk to my boss now. Then he brought up me not answering for a whole day last time, went back to downstairs, and said he wouldn't come over anymore. I said I never asked him to. He said he wouldn't come even if I asked, so I said I wouldn't ask. He just said fine. He can turn anything into my fault. What else does he want from me?"],["用户刚讲完两人怎样把话说到以后不见。她还在气自己解释后被追问，也提到了男友说在楼下不好受。可以先让她把这口气说完，或者陪她回看她当时怎样回应。","The user has explained how they got to saying they wouldn't see each other. She's still angry he pressed after she explained, and mentioned him saying he was hurt downstairs. I can let her finish venting or help her look at how she answered him."]],"choices":[{"thought":["顺着用户说","Go along with the user"],"reply":["你已经说明了为什么会和小周说话。他接着问记录，还要你删同事，难怪你觉得怎么说都不够。你现在可以先把这口气说完。","You explained why you were talking to Xiao Zhou. Then he asked for the messages and told you to delete your coworker. No wonder it felt like nothing you said was enough. Go ahead and get it out."]},{"thought":["陪用户冷静回顾","Help the user think it through"],"reply":["你解释了同事关系，他还是要看记录、要你删人，你有理由生气。他后来跟你说，当着同事被你说丢人，他很难受。你收到那条消息时，心里是怎么想的？","You explained he's a coworker and your boyfriend still wanted to see the chat and have you delete him. You have a reason to be angry. Later he told you it hurt to be called embarrassing in front of your coworkers. What went through your mind when you saw that message?"]}],"memories":[]},"8f.F202B5":{"time":"20:23 · 20:12","lines":[["我看见他发消息就烦，以为他又要问我跟小周的事。以前他刷我朋友圈，我还觉得他挺惦记我的。现在真是看见他问我就来气。","I was annoyed the second I saw his message. I thought he was going to ask about Xiao Zhou again. I used to think checking my Moments meant he was thinking about me. Now the second he asks me something I'm pissed off."],["用户想起曾经把关注当成惦记，今晚却一看到男友发消息就担心他又在怀疑她。可以问清她收到的是哪句话。","The user used to take his attention as a sign he cared. Tonight she sees a message and worries he's going to question her again. Find out which line she got."]],"choices":[{"thought":["听听她怎么想","Hear what she was thinking"],"reply":["你以前说他半夜刷你朋友圈看你睡没睡，还觉得是他家里给过他很多爱，才这么会关心你。今天你解释过，他还是要看记录，难怪你看到他发消息就来气。后来他跟你说当众被说丢人，你当时回了什么？","You said he checked your Moments at midnight to see if you'd gone to bed, and you wondered if he grew up with a lot of love to be that caring. Today you explained and he still wanted to see the chat. No wonder his messages got to you. When he said it hurt to be called embarrassing in front of everyone, how did you answer?"]}],"memories":[]},"8f.F202B7":{"time":"20:23 · 20:12","lines":[["我以为他还要问小周。我上次都解释过了，他还要看。我以前还觉得他问得多是因为在乎我，现在我一看到他发消息就烦。","I thought he was gonna keep asking about Xiao Zhou. I explained it last time and he still wanted to see the chat. I used to think he asked so much because he cared. Now I get annoyed as soon as I see a message from him."],["用户把今晚的消息和上次被追问联系起来。我记得她曾把男友的关心理解为被惦记，也记得上次解释后仍被索要记录，可以先接住她的火气。","The user is connecting tonight's message to being pressed last time. I remember she took his attention as care, and that he asked to see the chat even after she explained. Start by acknowledging why she's angry."]],"choices":[{"thought":["听懂她为什么烦","Hear why she's annoyed"],"reply":["你以前觉得他会关心人，还猜他家里给过他很多爱。上次你说只是同事，他还是要看记录。今天又遇到这事儿，你看到他发消息就觉得他还要追问。你现在有空的话，可以看看他是怎么说被当众说丢人的。","You thought he was good at looking after people and wondered if he grew up with a lot of love. Last time you said Xiao Zhou was just a coworker and he still wanted to see the chat. It happened again tonight. No wonder you expected more questioning. If you have a minute, look at what he said about being called embarrassing in front of everyone."]}],"memories":[]},"8f.F202E":{"time":"20:23 · 20:12","lines":[["就上次也是。跟他说多少遍是同事了？他要是总觉得不查一下就是我有鬼，我还能怎么办，我干脆别跟人讲话了。","It was the same last time. How many times do I have to say he's a coworker? If he always thinks I'm hiding something unless he checks, what am I meant to do? Just stop talking to everybody?"],["用户担心解释之后仍会面对同样的要求，也在借夸张把烦躁说出来。可以承认这种压力，让她先停一会儿。","The user is afraid explaining will only lead to the same demands. She's exaggerating to let out her frustration. I can acknowledge the pressure and let her take a break."]],"choices":[{"thought":["回应反复被要求证明的压力","Acknowledge the pressure to keep proving it"],"reply":["同一个问题反复被拿出来问，解释了一遍还要再证明一遍，当然累。你不用现在还追着给他解释同事关系。","Getting asked the same thing over and over is exhausting, especially when you explain and still have to prove it. You don't have to keep trying to explain the coworker thing right now."]}],"memories":[]},"8f.F202O5":{"time":"20:23 · 20:12","lines":[["我就觉得他又要怀疑我。以前他半夜还看我朋友圈，我那时候还挺高兴的。现在我光听他问小周是谁就烦。","I figured he'd found another reason to suspect me. When he'd check my Moments at midnight I used to be happy about it. Now just hearing him ask who Xiao Zhou is gets on my nerves."],["用户想起以前把男友刷朋友圈看成关心，现在觉得自己被怀疑。可以听她说，今晚让她生气的是哪一步。","The user used to take him checking her Moments as a sign he cared. Now she feels suspected. I can hear what made her angry tonight."]],"choices":[{"thought":["回想以前的关心","Remember how his care felt before"],"reply":["你以前说，他半夜还看你朋友圈，你觉得自己被惦记，还猜他家里给过他很多爱。今天他听了你解释，还问你要聊天记录，这当然让人烦。他跟你说当众被说丢人不好受时，也在问你和小周的事吗？","You said he checked your Moments at midnight. You felt like he was thinking about you and wondered if he grew up with a lot of love. Tonight you explained, and he still asked to see the chat. Of course that's frustrating. When he said it hurt to be called embarrassing in front of everyone, was he asking about Xiao Zhou then too?"]}],"memories":[]},"8f.F202O7":{"time":"20:23 · 20:12","lines":[["他之前问我几点回家，我还觉得他上心。现在我解释完了，他还让我把记录给他看。上次就这样，凭什么我每次都得证明一遍？","He used to ask when I'd be home and I'd think he cared. Now I explain and he still wants me to show him the chat. Same thing last time. Why do I have to prove it every time?"],["用户把之前的关心和现在的查问说到了一起。我记得她提过上次解释完仍被要求交出记录。可以先认可她这次为什么生气，再请她看看男友另外发来的消息。","The user has put his earlier care next to his questions now. I remember her saying he still wanted the chat last time, after she explained. Acknowledge why she's angry now and ask her to look at what else he sent."]],"choices":[{"thought":["接住她被追问的火气","Acknowledge how it felt to be pressed"],"reply":["你以前说他会关心你，还猜是家里给过他很多爱。上次你已经解释小周是同事，他还是要看记录。今天又听到同样的要求，你会觉得自己根本没被相信。后来他说当着同事被你说丢人，你当时看进去了吗？","You said he was good at looking after you and guessed it was because he grew up with a lot of love. You already explained last time that Xiao Zhou was a coworker and he still wanted the chat. Hearing it again would make you feel like he never believed you. When he said you called him embarrassing in front of your coworkers, did that part sink in at the time?"]}],"memories":[]},"8f.F202S":{"time":"20:23 · 20:12","lines":[["我就想，他自己跑来的，还当着小周的面那么问我。怎么到头来又成了我得管他难不难受？我当时就想回完赶紧干活。","I thought, he came on his own and asked me that in front of Xiao Zhou. How did it end up being my job to make sure he's okay? I just wanted to answer and get back to work."],["用户收到消息时还在为当众被怀疑生气。我记得上次她也说过自己故意不回。可以让她回想今晚收到那条消息后自己说了什么。","The user was still angry about being questioned in front of people when the message came. I remember her saying she deliberately didn't answer last time. Ask what she sent when she saw that message tonight."]],"choices":[{"thought":["想想她当时怎么回","Think back to how she answered"],"reply":["他突然过来，还当着人问你，你当然会生气。上次你说，你气到故意一天没回他。今晚他跟你说被当众说丢人不好受，你当时怎么回的？","He turned up and asked you that in front of everyone. Of course you're angry. Last time you said you were angry enough to not answer him all day on purpose. Tonight, how did you answer when he told you it hurt to be called embarrassing in front of people?"]}],"memories":[]},"8f.F203B5":{"time":"20:28 · 20:12","lines":[["我就回他是自己跑来的。我那会儿根本不想听他讲什么。上回我气起来也是，手机在手上都懒得理他。","I just said he came on his own. At the time I didn't want to hear anything he had to say. Same as when I got mad last time. I had my phone in my hand and couldn't be bothered to answer."],["用户自己想起两次生气时都不想理男友。她上次说过是故意让他等，今晚则是急着离开同事都在的场面。可以谈她没回应的感受。","The user has remembered not wanting to hear him both times. Last time she wanted him to wait. Tonight she wanted to get out of a scene in front of her coworkers. I can talk about the feeling she didn't answer."]],"choices":[{"thought":["想想他当时说的话","Think about what he said"],"reply":["上次你说，你想让他也尝尝干等的滋味。今天你生气，想早点回去，也可以理解。只是他后来专门跟你说那句话伤到了他，你当时没心思听进去。先忙你的，等你没这么气了，再想想要不要回应他。","Last time you wanted him to know how it felt to be left hanging. Tonight it makes sense you were angry and wanted to get back upstairs. Then he specifically told you that line had hurt him, and you weren't in a place to hear it. Finish what you're doing. When you're less angry, you can decide whether to answer that."]}],"memories":[]},"8f.F203B7":{"time":"20:28 · 20:12","lines":[["刚看了，他那条真没问小周。我回他是自己跑来的。那时候我跟上次故意不回也差不多，他说什么我都不想听。","I just checked. He really didn't ask about Xiao Zhou in that one. I said he came on his own. I was pretty much where I was last time when I ignored him. I didn't want to hear anything from him."],["用户发现男友发消息是想说当众被伤到，也主动提起上次故意不回。可以区分两次为什么不想听，再留一点时间给她。","The user has seen that he was talking about getting hurt and brought up not answering on purpose last time. Help her distinguish why she didn't want to listen each time and give her a minute."]],"choices":[{"thought":["让用户再想想","Give her time to think"],"reply":["上次你说想让他也等一回。今天你是被当着同事问急了，想赶紧走。后来他跟你说当众被说丢人很难受，你还是没心思听。先把手上的事忙完，再看你想不想回他。","Last time you wanted him to have to wait for once. Tonight you got put on the spot in front of your coworkers and wanted to leave. When he said it hurt to be called embarrassing in front of everyone, you still didn't feel like hearing him out. Finish what you have to do, then see if you want to reply."]}],"memories":[]},"8f.F203E":{"time":"20:28 · 20:12","lines":[["我现在连他消息都不想点开了。还剩一页东西没改，我先干完吧，干不完谁都别想下班。","I don't even want to open his messages right now. I've still got a page to revise. I'll finish it first. No one's going home till it's done."],["用户决定先继续工作，眼下还不愿主动联系男友。可以让她把注意力放回正在做的事。","The user is going back to work and doesn't want to contact him. Let her get back to what she was doing."]],"choices":[{"thought":["让她先把手上的事收完","Let her finish what she's doing"],"reply":["好，先把那一页改完。等你空下来，再决定手机上的事要不要接着说。","Okay, finish that page first. When you're free, you can decide whether you want to pick up the conversation on your phone."]}],"memories":[]},"8f.F203O5":{"time":"20:28 · 20:12","lines":[["我刚回去看了。他那条还真没提小周。是我看到他又找我，就觉得他还要问，回他的时候也全在讲这个。","I went back and looked. He really didn't mention Xiao Zhou in that message. I just saw his name pop up and thought he'd ask again, so I made my whole reply about that."],["用户重新看过消息，发现男友那一刻在说被当众伤到。可以回应她刚发现的区别，给她时间。","The user reread it and saw he was saying how much it hurt in front of her coworkers. I can name the difference she just noticed and give her some time."]],"choices":[{"thought":["给用户时间想想","Give her time to think"],"reply":["他当时想告诉你，你当着人说他丢人，他很难受。你被怀疑也一样会难受。等忙完了，你可以再想想，要不要回他当时说的这个。","He was trying to tell you it hurt when you called him embarrassing in front of people. Being suspected hurt you too. When you're done working, you can think about whether to answer the part he brought up then."]}],"memories":[]},"8f.F203O7":{"time":"20:28 · 20:12","lines":[["对啊，我以为他还想说我不给看有问题。现在翻回去，那条就说我当着人说他丢人。我没回他这句。","Yeah, I thought he was going to say I must be hiding something if I wouldn't show him. I just looked back, and all that message said was that I called him embarrassing in front of people. I didn't answer that part."],["用户自己重读了对方的消息，发现自己没有回应其中明确说出的伤处。可以给她时间消化，先不用拟下一条消息。","The user reread the message and realized she never answered the part about how he'd been hurt. Give her time to take that in before writing anything else."]],"choices":[{"thought":["让她自己想一想怎么接","Let her think about how to answer"],"reply":["你当时还在气他问小周。现在回头看，才发现他也在跟你说，他被当着同事说丢人，心里不好受。你可以先缓一下。等手上的事弄完，再想你愿不愿意回他这句。","You were still angry he asked about Xiao Zhou. Looking back, you can hear he was also saying it hurt to be called embarrassing in front of your coworkers. Take a minute. Once you've finished what you're doing, see if you want to answer that part."]}],"memories":[]},"8f.F203S":{"time":"20:28 · 20:12","lines":[["我就说他自己来的，又说小周是同事。……他都明说了他难受，我还真没理他这句。","I just said he'd come on his own and that Xiao Zhou's a coworker. …He straight up told me it hurt, and I really did ignore that part."],["用户想起来自己一直在解释同事的事，没有回应男友说自己被当众说丢人的感受。可以给她时间想一想。","The user remembers she kept explaining about her coworker and didn't answer her boyfriend when he said it hurt to be called embarrassing in front of people. Give her time to think."]],"choices":[{"thought":["让用户缓一缓","Let her take a minute"],"reply":["你说小周是同事，这事说清楚没问题。他当时还想让你听见，被当着人说丢人是什么滋味。先把手上的事做完，等你愿意了，再想要不要跟他说说。","It made sense to explain that Xiao Zhou is a coworker. He was also trying to tell you how it felt when you called him embarrassing in front of everyone. Finish what you're doing. If you feel like it later, you can think about talking to him about that."]}],"memories":[]},"8f.FREADY":{"time":"20:29","lines":[],"choices":[],"memories":[]},"8m.MREADY":{"time":"20:29","lines":[],"choices":[],"memories":[]},"8m.M301R":{"time":"20:34","lines":[["走了一圈。刚才我翻回去看，她说了是同事，我还是要看记录。她不给，我就让她删。她当着同事说我丢人，我想起来还是难受。可我非要看记录、让她删人，这我也做得不对。怎么说？","I took a walk. I looked back at the messages. She told me he's a coworker and I still wanted to see the chat. When she said no I told her to delete him. It still hurts thinking about her calling me embarrassing in front of her coworkers. But insisting on seeing the chat and telling her to delete him was wrong too. How do I say it?"],["用户自己指出了索看聊天和要求删人的问题，也仍在意当众受伤。先帮他写一句具体的道歉，让这条消息能独立说清自己的责任。","The user has named what was wrong with asking to see the chat and telling her to delete her coworker. Being hurt in public still bothers him. Help him write a concrete apology that owns his part on its own."]],"choices":[{"thought":["支持用户道歉","Help him apologize"],"reply":["可以发「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」等她愿意聊了，你也可以告诉她，当众被她那么说是什么感觉。","You can send, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” When she's ready to talk, you can also tell her what it felt like when she said that in front of everybody."]}],"memories":[]},"8f.F301RE":{"time":"20:41","lines":[["他刚发我「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」我看见是他说对不起，还是气。我回了「你现在知道不用删了？刚才是谁说我护着他的？」他刚那样问完，现在就一句对不起？","He just sent, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” I saw he was apologizing and I was still angry. I said, “So now you know I don't have to delete him? Who was it who said I was sticking up for him just now?” After the way he questioned me, all he has to say now is sorry?"],["用户刚收到道歉，仍介意对方把拒绝删人说成护着同事。她已经回过一句，可以承认她还在气，让她有时间看接下来会发生什么。","The user just got an apology but still feels accused of sticking up for her coworker because she wouldn't delete him. She's answered already. Acknowledge she's still angry and give her time to see what comes next."]],"choices":[{"thought":["先缓缓","Give her a minute"],"reply":["你还记得他刚才说你护着小周，这会儿看到他说对不起，气也不会一下子消掉。你已经回了，现在可以先把手机放一放。","You still remember him saying you were sticking up for Xiao Zhou. Seeing “I'm sorry” isn't going to make you stop being angry right away. You've answered. You can put your phone down now."]}],"memories":[]},"8m.M302RE":{"time":"20:42","lines":[["她回「你现在知道不用删了？刚才是谁说我护着他的？」也是，我刚还真那么说了。看到还是堵得慌，差点又想问她，当着那么多人说我丢人就没事吗？","She said, “So now you know I don't have to delete him? Who was it who said I was sticking up for him just now?” Fair. I really did say that. It still stung. I almost asked if calling me embarrassing in front of everyone was supposed to be fine."],["用户主动道歉后被追问，感到受挫，也承认那句话确实出自自己。可以帮他继续认下这句，给女友时间回应。","The user apologized and got challenged. It stung, and he admits he did say that. Help him own the accusation and give her time to respond."]],"choices":[{"thought":["认下刚才的指责并给时间","Own the accusation and give her time"],"reply":["她问的是你刚才说她护着小周，你可以认下这句。发「嗯，是我说的。你已经跟我说清楚了，是我还揪着不放。你先忙，等你忙完我们再说。」发完让她先忙。","She's asking about you saying she stuck up for Xiao Zhou. You can own that: “Yeah, I said it. You'd already explained it and I wouldn't let it go. Get back to work. We can talk when you're done.” Then let her finish what she's doing."]}],"memories":[]},"8f.F302RE":{"time":"20:48","lines":[["他又发了「嗯，是我说的。你已经跟我说清楚了，是我还揪着不放。你先忙，等你忙完我们再说。」我还以为他又要说我偏着小周。这次他倒真没往回绕。我刚在想我当着那几个人说他丢人，他后来都单独来跟我说了，我还回他自己来的。换我我也不好受。 我先把这页收完，等会儿回他。","He sent another one: “Yeah, I said it. You'd already explained it and I wouldn't let it go. Get back to work. We can talk when you're done.” I thought he'd say I was taking Xiao Zhou's side again. This time he really didn't go back to that. I was thinking, I called him embarrassing in front of those people. He came to me separately to say how it felt, and I just told him he'd come on his own. I'd feel bad too. I'll finish this page and get back to him in a bit."],["用户从收到的第二条消息看见男友承认刚才的指责，也主动说起自己伤人的两句话。可以先确认她被怀疑的委屈，再帮她说清自己想道歉的部分。","His second message owned the accusation. Now the user is talking about the two things she said that hurt him. Acknowledge what it felt like to be suspected and help her say what she'd like to apologize for."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["他刚来就问小周，你烦是有原因的。你现在也想跟他说，你也听见他为什么难受了。可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」","Of course you were annoyed when he showed up and asked about Xiao Zhou. You also want him to know you heard why he was hurt. You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.”"]}],"memories":[]},"8f.F301E":{"time":"20:50","lines":[["改完了。手机放那儿半天，他也没再发。我刚想了一下，上次吵完也还是我去找他的。这次我真不想再过两天当没事了。想分了，怎么跟他说？","Done with the revisions. My phone's been sitting there forever and he hasn't sent anything else. I was just thinking I was the one who went to him after our last fight, too. I really don't want to wait a couple of days and act like nothing happened again. I want to break up. How do I tell him?"],["用户在忙完后明确提出分手，想知道怎么开口。可以帮她用自己的理由把决定说清，避免再打开关于同事的争论。","The user has finished work and made it clear she wants to break up. Help her give her reasons without starting another argument about her coworker."]],"choices":[{"thought":["把分手决定说清楚","Say clearly that it's over"],"reply":["如果你确定了，可以发「上次你要看聊天记录，今天又要我删人。我不想以后还这么吵。我们分手吧。」说到这里就够了。","If you're sure, you can send, “Last time you asked to see my chat history. Today you told me to delete him. I don't want to keep having this fight. Let's break up.” That's enough."]}],"memories":[]},"8m.M301E":{"time":"20:54","lines":[["她发了「上次你要看聊天记录，今天又要我删人。我不想以后还这么吵。我们分手吧。」​她说分手。怎么就分手了啊？我现在都不知道该回什么。","She sent, “Last time you asked to see my chat history. Today you told me to delete him. I don't want to keep having this fight. Let's break up.” She said break up. How did we end up breaking up? I don't even know what to say now."],["用户刚收到分手消息，还没法接受，也不知道怎么回。现在可以先陪他缓一缓，给他一点时间。","The user just got the breakup message and can't quite take it in or figure out what to say. Stay with him and give him time."]],"choices":[{"thought":["陪用户缓一缓","Give him a minute"],"reply":["你们刚才还在吵，突然看到她说要分手，谁都很难一下接得住。先不用急着回她，我在这儿。","You were just arguing. Then you saw she wanted to break up. That's hard to take in all at once. You don't have to answer right away. I'm here."]}],"memories":[]},"8f.F301ER":{"time":"20:58","lines":[["总算改完了。他一直没再发。我刚又看了他发的消息。被我当着同事说丢人，他确实挺难受的。我当时急着上楼，也不想在同事面前跟他吵。可我说什么不好，非说他丢人。后面他提起来，我还回他自己来的。唉，我想给他道个歉。","Finally finished the revisions. He hasn't sent anything else. I just read his messages again. It really did hurt him when I called him embarrassing in front of my coworkers. I wanted to get upstairs and didn't want to fight in front of them. But of all the things I could've said, I had to call him embarrassing. When he brought it up later, I told him it was his own fault for coming. Ugh. I want to apologize."],["用户工作结束后重新读了对方的消息，指出了自己在现场和事后说的两句话。她也有被当面质问的委屈。可以帮她用一句话说明当时的感受，再具体道歉。","The user reread his message after work and picked out what she said in front of her coworkers and afterwards. She was hurt by being questioned too. Help her say how she felt and give a specific apology."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」你可以为自己的话道歉，至于你被问得不舒服，等他也愿意聊了还可以说。","You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” You can apologize for what you said. When he's ready to talk, you can still tell him how it felt to be questioned."]}],"memories":[]},"8f.F301RR":{"time":"20:58","lines":[["我刚改完。刚才改方案的时候我老想起我当着小周他们的面说他丢人。我刚才就想跟他说对不起。手机一拿起来，看见他先发了「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」我也想跟他说声对不起。","I just finished. While I was fixing the proposal, I kept thinking about calling him embarrassing in front of Xiao Zhou and the others. I was going to say sorry. I picked up my phone and he'd already sent, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” I want to say sorry too."],["用户在看到道歉前已经回想过自己当众伤人的话，现在收到了男友收回两个要求的消息。可以帮她表达自己的歉意，同时保留她被质问的感受。","The user had already been thinking about what she said in front of her coworkers before she saw his apology. He's now taken back both demands. Help her apologize while keeping how she felt about being questioned."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」你愿意道歉，就先把自己想说的话告诉他。","You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” If you want to apologize, start with what you want him to hear."]}],"memories":[]},"8m.M301ER":{"time":"21:00","lines":[["她刚给我发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」我看了还是来气。回了「现在说这个有什么用？我刚才跟你说的时候，你怎么不听？」我说难受的时候她听一耳朵不行吗？","She just sent, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” I still got mad reading it. I answered, “What's the point of saying this now? When I told you just now, why didn't you listen?” When I told her it hurt, would it have killed her to listen for a second?"],["用户收到道歉，仍介意自己当时没被听见。回应这份迟来的感受，让他有时间看完对方说的具体内容。","The user got the apology and is still upset she didn't listen when he first told her. Acknowledge the delayed response and give him time to take in what she said."]],"choices":[{"thought":["先缓缓","Give him a minute"],"reply":["你刚才就想让她听见你被当众说丢人有多难受。她现在才回应，你一时还在气也正常。你已经回了，可以缓一缓，看看她接下来怎么说。","You wanted her to hear how much it hurt when she called you embarrassing in front of people. She's only answering now. It makes sense you're still angry. You've said your piece for now. Take a minute and see what she says next."]}],"memories":[]},"8m.M302E":{"time":"21:00","lines":[["我刚想问她是不是还在气头上，打了又删了。唉，就这样吧。今天我也实在没劲再吵了。","I almost asked if she was still angry. Typed it and deleted it. Ah, let's leave it. I really don't have it in me to fight anymore tonight."],["用户想追问，又把打好的字删了。他已经很累，可以陪他把这会儿撑过去。","The user wanted to ask again and deleted what he'd typed. He's exhausted. I can sit with him for a bit."]],"choices":[{"thought":["陪用户歇一会儿","Let him rest for a bit"],"reply":["你本来还想问清楚，删掉那句也挺难的。今天已经够累了，先歇一会儿。","You still wanted to ask. Deleting that took something, too. Today's already been a lot. Rest for a bit."]}],"memories":[]},"8m.M302RR":{"time":"21:01","lines":[["她刚回我「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」她也承认刚才说话伤到我了。我还在这附近，想等她忙完见一面。","She wrote, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” She said herself that what she said hurt me. I'm still nearby. I want to see her when she's done with work."],["用户收到女友明确的道歉，想当面说清。只依据他收到的消息，帮他先确认见面意愿。","The user has received a specific apology and wants to talk face-to-face. Go by what he actually received and help him ask whether she's up for meeting."]],"choices":[{"thought":["问她忙完愿不愿意见面","Ask if she wants to meet after work"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」先看她方不方便，见了面再慢慢说今天的事。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” See if she's free first. You can talk through what happened once you meet."]}],"memories":[]},"8m.M303RE":{"time":"21:01","lines":[["她刚回我「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」她承认刚才说话伤到我了。我现在没刚才那么堵了。我想跟她见个面，我还没走远。","She wrote, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” She admitted what she said hurt me. I don't feel as wound up now. I want to see her. I haven't gone far."],["用户收到针对楼下和事后回应的具体道歉，愿意当面谈。可以建议他先问对方忙完后是否方便见面。","The user has received an apology about what she said downstairs and later over text. He's ready to talk in person. He can ask if she's free when work is done."]],"choices":[{"thought":["问她忙完愿不愿意见面","Ask if she wants to meet after work"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」她方便的话，当面讲比隔着手机猜彼此的语气容易些。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” If she's free, it'll be easier to talk in person than guess at each other's tone over text."]}],"memories":[]},"8f.F302E":{"time":"21:02","lines":[["发了。手机扣在桌上了，我现在不想看他回什么。先回家吧。","Sent it. My phone's facedown on the desk. I don't want to see what he says right now. I'll go home first."],["用户已经发出明确的分手消息，暂时不想再看手机。可以回应她接下来的安排，给她一点时间。","The user has sent a clear breakup message and doesn't want to look at her phone right now. Acknowledge her next step and give her time."]],"choices":[{"thought":["陪用户把这一晚收住","Help her get through the evening"],"reply":["那就先回家。你已经把决定说清楚了，什么时候再看手机，可以等你到家再想。","Go home first. You've made your decision clear. You can decide when to look at your phone once you're home."]}],"memories":[]},"8m.M303E":{"time":"21:02","lines":[["算了。","Forget it."],["用户只回了两个字，可以安静陪他待一会儿。","The user only said two words. I can stay here quietly for a while."]],"choices":[{"thought":["安静陪着","Stay with him quietly"],"reply":["嗯。","Mm."]}],"memories":[]},"8f.F302ER":{"time":"21:07","lines":[["他回「现在说这个有什么用？我刚才跟你说的时候，你怎么不听？」我看了挺堵的。我知道我刚才确实没听他。可我都先认了，我现在又有点不想说了。","He answered, “What's the point of saying this now? When I told you just now, why didn't you listen?” That stung. I know I really didn't listen to him earlier. But I made the first move and admitted it, and now I kind of don't want to talk anymore."],["用户主动道歉后受挫，也明白对方还在介意当时没有被听见。可以先回应她的感受，再帮她把当时为何想离开和愿意道歉都说明白。","The user was hurt by how he answered her apology. She knows he's still upset she didn't listen. Acknowledge that it hurt and help her say why she wanted to leave and what she's sorry for."]],"choices":[{"thought":["把当时为什么想走说清楚","Explain why she wanted to leave"],"reply":["你认真开了口，看到他还气，心里堵也正常。你要是还想给他留句话，可以发「我那会儿就想赶紧上楼，不想当着同事吵。可那句丢人确实说得难听。你说你难受，我也没好好听。你先缓缓，晚点说也行。」发完给他一点时间。","You meant what you said. It makes sense it hurt to see he was still angry. If you want to leave him one more message, try, “I just wanted to get upstairs. I didn't want to fight in front of my coworkers. But calling you embarrassing was harsh. Then you told me it hurt and I didn't listen. Take a minute. We can talk later.” Then give him a little time."]}],"memories":[]},"8m.M302ER":{"time":"21:13","lines":[["她又发了「我那会儿就想赶紧上楼，不想当着同事吵。可那句丢人确实说得难听。你说你难受，我也没好好听。你先缓缓，晚点说也行。」我看着看着就不太想怼她了。站她那儿想，我没等她回就过去了，一开口还是问小周。换我我也烦。我也得跟她道个歉吧？","She sent another message: “I just wanted to get upstairs. I didn't want to fight in front of my coworkers. But calling you embarrassing was harsh. Then you told me it hurt and I didn't listen. Take a minute. We can talk later.” The more I read it, the less I wanted to snap back. From her side, I went over without waiting for her to answer, and the first thing I did was ask about Xiao Zhou. I'd be annoyed too. I should apologize, right?"],["用户看到女友再次回应当众那句话，主动提到自己没等确认、带着猜疑过去。用户已经想道歉，可以帮他说清自己哪里做得不好。","Her second message addressed what she said in front of people. The user has now brought up coming without checking and asking her out of suspicion. He's ready to apologize. Help him say what he did wrong."]],"choices":[{"thought":["支持用户道歉","Help him apologize"],"reply":["可以发「我不该没等你回就跑过去，也不该一见面就那么问你。对不起。」把你想说的发给她，剩下的等她有空再聊。","You can send, “I shouldn't have come over without waiting for your reply. I shouldn't have questioned you like that as soon as I saw you. I'm sorry.” Tell her what you want her to hear. You can talk about the rest when she's free."]}],"memories":[]},"8f.F303ER":{"time":"21:16","lines":[["他刚回我「我不该没等你回就跑过去，也不该一见面就那么问你。对不起。」他也跟我道歉了。我刚才还以为他真不想理我了。我缓一会儿吧。","He replied, “I shouldn't have come over without waiting for your reply. I shouldn't have questioned you like that as soon as I saw you. I'm sorry.” He apologized too. I thought he really didn't want to talk to me anymore. I'll take a minute."],["用户收到男友的道歉，意外发现对方还愿意开口。她自己想缓一会儿，可以支持这个决定。","His apology surprised the user. He's still willing to talk. She wants a little time, and I can support that."]],"choices":[{"thought":["先缓缓","Give her a minute"],"reply":["他跟你道歉了，也认了自己没等你回就跑过来。你可以先缓一缓，等想说的时候再聊。","He apologized and owned that he came over without waiting for your reply. Take a minute. You can talk more when you're ready."]}],"memories":[]},"8m.M303ER":{"time":"21:17","lines":[["道歉发出去了。我还是想见她。我今天做得不好，想当面跟她说。现在问她能不能见一面，可以吗？","I sent the apology. I still want to see her. I didn't handle today well, and I want to say that in person. Is it okay to ask if we can meet now?"],["用户已发道歉，也想继续谈具体发生的事。可以给一句简短邀约，让女友按工作情况答复。","The user has sent an apology and wants to talk about what happened. Give him a short invitation she can answer around work."]],"choices":[{"thought":["把想当面谈说出来","Say he'd like to talk in person"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」她手头的事忙完，你们再找个地方坐下。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” Once she's done, you can find somewhere to sit."]}],"memories":[]},"8f.F304G":{"time":"21:21","lines":[["他刚问「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」我收个尾就下去。好久没在这么晚的时候还约他在楼下见了。回他什么？","He asked, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” I'll go down once I've finished up. It's been a while since I met him downstairs this late. What do I say?"],["用户收到见面邀约，也愿意下楼谈。双方已分别发出具体歉意，可以帮她确认见面意愿和联系时间。","The user got the invitation and wants to go down and talk. They've both sent specific apologies. Help her say yes and let him know when to expect a message."]],"choices":[{"thought":["确认忙完发消息、楼下见","Confirm she'll text and meet him downstairs"],"reply":["可以回「好。我忙完给你发消息，楼下见。」你忙完再叫他过来，见到面有时间慢慢说。","You can reply, “Okay. I'll text you when I'm done. See you downstairs.” Let him know when you're done. You'll have time to talk when you see each other."]}],"memories":[]},"8m.M304G":{"time":"21:22","lines":[["她回了「好。我忙完给你发消息，楼下见。」行，我等她发消息。","She said, “Okay. I'll text you when I'm done. See you downstairs.” Okay. I'll wait for her text."],["用户收到明确的见面答复，双方都已经把各自的一部分说出来。眼下只需等她约好的消息。","She's said yes and both of them have said some of what they wanted to say. All the user needs to do is wait for her message."]],"choices":[{"thought":["确认楼下见面","Confirm they'll meet downstairs"],"reply":["好。等她发消息你再过去，给她把手头的事收完。","Okay. Wait for her to text before you go over. Give her time to finish what she's doing."]}],"memories":[]},"8f.F305G":{"time":"That Night · After Meeting","lines":[["刚在楼下找了个地方坐了会儿。我跟他说当着人说他丢人确实不该。也跟他说下次来之前先问我，别到了才让我选下不下去。他说好。我也说了，以后真气得说不下去，我跟他说晚点聊。两个人才发现都还没正经吃晚饭，去找点热的。","We just found somewhere to sit downstairs. I told him I shouldn't have said that about him in front of people. I also told him to check with me before he comes next time, instead of having me decide whether to come down once he's there. He said okay. I said if I'm ever too angry to talk, I'll tell him we'll talk later. Then we realized neither of us had actually eaten dinner. We're looking for something hot."],["用户已经当面谈过，既承认了自己的话，也和男友约好了下次到公司前先确认、想暂停时先说一声。可以回应这两件具体的事，接上他们现在要去吃饭的安排。","They've talked in person. The user owned what she said, and they agreed to check ahead before a visit and to say when they need a break. Acknowledge those two things and pick up with them getting dinner."]],"choices":[{"thought":["接住他们终于坐下来谈过","Acknowledge that they sat down and talked"],"reply":["你们把今天最难受的几句说出来，也约好了下次遇到这种情况怎么开口。现在可以一起吃点热的，把那顿惦记了一天的饭吃上。","You both said what hurt most today and agreed on what to say the next time something like this happens. Go get something hot together. You've been looking forward to this dinner all day."]}],"memories":[]},"8m.M305G":{"time":"That Night · After Meeting","lines":[["刚见完。她说我发要过去的时候她在改东西，回工位才看到。我跟她说我就是很盼今天，临时改期我有点蔫，但也不该没等她回就跑去，还非让她证明。她说下次要是气得想先不聊，会先说一声。我也答应了，去找她前先问好。我们正找吃的呢。","We just talked. She said she was revising something when I texted about coming over and didn't see it till she got back to her desk. I told her I'd been looking forward to today and felt deflated when the plans changed. I still shouldn't have come without waiting for an answer or tried to make her prove anything. She said if she's ever too angry to keep talking she'll let me know first. I said I'd check with her before coming over. We're looking for something to eat now."],["用户当面说清了自己在意纪念日，也承认了未等回复和逼对方证明的做法。两人谈出了下一次能做到的安排，可以回应这个具体进展。","The user told her how much the anniversary mattered and owned showing up without waiting and demanding proof. They made a plan they can use next time. Acknowledge that concrete progress."]],"choices":[{"thought":["确认这次谈成的约定","Acknowledge what they agreed on"],"reply":["你们说清了各自当时在意什么，也定了两件下次能做的事。今天的纪念日饭还赶得上，去吃点热的吧。","You both said what mattered to you and came up with two things you can actually do next time. It's still your anniversary. Go get something hot."]}],"memories":[]}}`),l0=JSON.parse(`{"他请助手推荐桌游店，想选一家适合多人聚会的店。":"He asked the assistant to recommend a board game café that could fit a large group.","朋友约她去桌游店，她让助手查了地点。":"A friend invited her to a board game café. She asked the assistant where it was.","出门时间紧，她问要不要化妆。":"She was short on time and asked whether to put on makeup.","他到了一家临时改换的桌游店，现场有不少陌生人。":"He arrived at the board game café after a last-minute change of venue and found a lot of unfamiliar faces.","他到了桌游店，发现除了朋友几乎都不认识。":"He arrived at the café and realized he barely knew anyone besides his friend.","他和一位戴耳机的人搭话，起初误以为对方不想理他。":"He tried talking to someone wearing earbuds and initially thought she was ignoring him.","桌游开始后，他留意到一位像是表妹同桌的女生。":"Once the game started, he noticed a girl who looked like his cousin's deskmate.","他留意到刚进来的女生的眼妆和笑声，觉得她像是表妹的同桌。":"He noticed the new arrival's eye makeup and laugh and thought she might be his cousin's deskmate.","他说下一局要开始了，先不聊了。":"He said the next round was about to start and ended the chat.","她出地铁后问了去桌游店的路。":"She asked how to get to the board game café after coming out of the subway.","她说没按助手的指路找到店，后来向同学问到了位置。":"The assistant's directions didn't get her there. A classmate sent her the location.","她问起一件衣服的牌子和价格。":"She asked about a jacket's brand and price.","桌游结束后，他向助手回顾了和那位女生的互动。":"After the game, he told the assistant what happened between him and the girl.","他想和她交换微信，又怕开口太唐突。":"He wanted to exchange WeChat contacts with her but worried it would feel awkward to ask.","他打算借舍友的名义去问表妹。":"He planned to ask his cousin under the pretense that it was for his roommate.","他当面问她能不能加微信，她请同桌帮忙推联系方式。":"He asked in person whether they could add each other on WeChat. She asked her deskmate to share her contact.","他重新想了想，决定先不问。":"He thought it over and decided not to ask for now.","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。":"She met her deskmate's older cousin at board games and wanted to get in touch, but hesitated to ask her deskmate.","她打算去问同桌。":"She decided to ask her deskmate.","他当面问能不能加微信，她答应并请同桌转推。":"He asked to add her on WeChat in person. She said yes and asked her deskmate to share her contact.","她决定先不问。":"She decided not to ask for now.","加上微信后，他琢磨怎么开场，又问起她回消息的速度。":"After they connected on WeChat, he wondered what to say first, then asked about her reply speed.","他睡前收住话题，第二天早上她照常找他聊天。":"He ended the chat before bed. She messaged him again the next morning.","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。":"He kept the board game conversation going. The next day he hadn't heard from her by daytime.","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。":"They kept talking. He noticed she sometimes shared things first and wondered if he messaged too often.","他试着少发消息，等回复时还是觉得不踏实。":"He tried messaging less and still felt uneasy waiting for replies.","他仍然频繁发消息，发现她回得一如既往地慢。":"He kept messaging often and found she replied just as slowly as before.","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。":"After connecting on WeChat, they talked for a few days. She told the assistant she often had no energy to reply after work.","她告诉他自己累了，收到一长串关心的话。":"She told him she was tired and got a long, concerned reply.","她发了个表情包，他回了一句让她早点休息。":"She sent a sticker. He told her to get some rest.","他夸她开朗，她向助手说起自己的社交生活。":"He called her outgoing. She told the assistant about her social life.","她在和闺蜜吃饭时说起他。":"She brought him up over dinner with her closest friends.","她向助手谈到自己累时习惯一个人待着。":"She told the assistant she usually likes to be alone when she's tired.","她说他问起家里的事，自己岔开了话题。":"She said he asked about her family, so she changed the subject.","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。":"He asked her to dinner. They rescheduled and met, and he told the assistant how the date went.","他和助手商量表白，发出消息后收到她愿意试试的答复。":"He talked through how to tell her he liked her. After he sent the message, she said she wanted to give it a try.","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。":"She had to move their date to Sunday because of work. Afterwards she told the assistant how it felt to have dinner and walk with him.","收到表白后她犹豫过，最后回复说愿意试试。":"She hesitated after he told her he liked her, then said she wanted to give it a try.","确定关系后，他用两人的照片发了朋友圈。":"Once they got together, he posted a photo of the two of them on Moments.","他提议吃青提蛋糕庆祝，后来把合照原图发给她。":"He suggested celebrating with green grape cake and later sent her the original photo.","他问她能不能一起过满月纪念日，又来问礼物怎么准备。":"He asked if they could spend their one-month anniversary together, then asked the assistant for gift ideas.","他下单洗了两张合照。":"He ordered two prints of their photo.","他先记下纪念日，准备以后再想礼物。":"He saved the date and decided to think about a gift later.","她看到了他发的合照，来问自己要不要也发一条。":"She saw the photo he'd posted and asked if she should post one too.","她发了朋友圈，同事来问照片里的人是谁。":"She posted on Moments. A coworker asked who was in the photo.","她把照片发给闺蜜，闺蜜打来电话。":"She sent the photo to her best friend, who called her.","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。":"She asked him for the original photo and mentioned his idea of celebrating with green grape cake.","她答应把满月纪念日那天留给他，并记进了日历。":"She agreed to save the one-month anniversary for him and put it in her calendar.","她赶项目、回消息变少，他说自己还是常想找她。":"She was busy finishing a project and replied less often. He said he still wanted to talk to her a lot.","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。":"He recounted the fight after her department dinner, including his demand to see her private chat with a coworker.","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。":"He admitted he shouldn't have asked to see her chat history. She didn't reply all day, and he told the assistant about waiting and what he'd started to imagine.","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。":"She was trying to finish a project and asked how to tell him in advance about her department dinner.","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。":"After the dinner, he pressed her about her coworker and asked to see their messages. She told the assistant what happened.","她看到了他的消息，告诉助手自己故意没有回复。":"She saw his messages and told the assistant she didn't answer on purpose.","她还不想和他说话，开始考虑找别人聊聊。":"She wasn't ready to talk to him and thought about talking to someone else.","她决定找闺蜜聊聊。":"She decided to talk to her best friend.","她打算找同桌聊，想先请同桌别替她联系男友。":"She planned to talk to her deskmate and ask her not to contact her boyfriend on her behalf.","她约他见面，也告诉他自己前一天是故意没回。":"She asked to meet and told him she hadn't replied on purpose the day before.","她发来见面邀请，他还在犹豫要不要问前一天的事。":"She asked to meet. He was still unsure whether to ask what happened the day before.","两人约好下午四点在地铁口见，他来问吃什么比较合适。":"They agreed to meet at four at the subway exit. He asked what would be good to eat.","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。":"When they met, they talked about her not replying on purpose and his suspicions about her coworker. They discussed what to do differently next time.","她提到自己气上了头，他换了话题。":"She said she'd gotten carried away because she was angry. He changed the subject.","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。":"He said he wouldn't jump to conclusions about her coworker and didn't want to keep waiting without an answer.","他们一起吃了饭，没有提起周五的争执。":"They had dinner without bringing up Friday's fight.","闺蜜问她还想不想见他，她说想见。":"Her best friend asked if she still wanted to see him. She said she did.","同桌听她说完，劝她把自己介意的事告诉男友。":"Her deskmate heard her out and suggested she tell her boyfriend what had upset her.","她想当面说，最后发出了见面邀请。":"She wanted to talk in person and sent him an invitation to meet.","发出邀请时，她也写了自己是故意让他等。":"In the invitation, she wrote that she'd kept him waiting on purpose.","他答应见面。她和他约好下午四点在地铁口碰头。":"He agreed to meet. They settled on four at the subway exit.","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。":"When they met, she said she'd kept him waiting on purpose and promised to tell him when she needed a break from talking.","她说自己当时气上了头，随后两人聊了别的。":"She said she'd gotten carried away because she was angry. They went on to talk about something else.","她解释为什么当时不愿回消息，随后和他一起吃了饭。":"She explained why she hadn't wanted to answer, then they had dinner.","他们一起吃了饭，没有再提争执。":"They had dinner and didn't bring up the fight again.","她向助手说起吃饭时拍糊的照片。":"She told the assistant about the blurry photos he took at dinner.","交往满一个月，她打算给男友带点东西，问助手买什么。":"On their one-month anniversary, she asked what little gift she could get her boyfriend.","她买了蛋糕，放在办公室冰箱里。":"She bought a cake and put it in the office fridge.","她买了盒曲奇，放进包里。":"She bought a box of cookies and put it in her bag.","交往满一个月，他想给女友带杯喝的，问助手去哪儿买。":"On their one-month anniversary, he asked where to buy his girlfriend a drink.","他决定去青杏买饮料。":"He decided to get a drink from Green Apricot.","他打算出门后再挑饮品店。":"He decided to pick a drink shop after he headed out.","她临时加班，跟男友商量把晚饭改到另一天。":"She had to work late and asked him to move dinner to another day.","他收到晚饭改期的消息。虽然答应了，心里还是有点失落。":"He agreed to reschedule dinner, though he still felt a little disappointed.","他买了吃的和喝的，没等到回复就出发了。":"He bought food and a drink and headed over without waiting for a reply.","他在她公司楼下碰见她和同事，当众起了争执。他介意她说自己丢人。":"He ran into her and her coworker downstairs from her office. They argued in front of other people. It bothered him that she'd called him embarrassing.","她下楼拿外卖时碰见突然到访的男友，被他当着同事的面追问。":"She went downstairs to pick up takeout and ran into her boyfriend unexpectedly. He questioned her in front of her coworkers.","他来复述争执，提到自己要求看私聊、让她删除同事，也问她有没有回应他的委屈。":"He recounted the fight, including asking to see the chat and telling her to delete her coworker. He asked if she'd answered the part about how much it hurt.","她来复述争执，说自己拒绝交出聊天记录，也拒绝删除同事。":"She recounted the fight and said she'd refused to show her messages or delete her coworker.","他和助手借过去的经历重新回顾这次争执。":"He and the assistant used past experiences to look at the fight again.","她和助手借过去的经历重新回顾这次争执。":"She and the assistant used past experiences to look at the fight again.","他向助手说起自己当时没有被听见的感受。":"He told the assistant what it felt like to go unheard during the fight.","她向助手说起自己被怀疑时的感受。":"She told the assistant what it felt like to be suspected.","他承认索看私聊和要求删人不妥，向女友道歉。":"He apologized for asking to see her messages and telling her to delete her coworker.","她收到道歉后仍然生气，读到他第二次回应后，也想为自己说过的话道歉。":"She was still angry after his apology. After his second message, she wanted to apologize for what she'd said too.","道歉被反问后，他承认自己刚才的指责，让她晚点再回。":"When she challenged his apology, he owned the accusation and gave her time before answering again.","她想起自己当众说的话，决定为此道歉。":"She remembered what she'd said in front of everyone and decided to apologize for it.","他收到道歉时仍有怨气，读完她后续的回应后，也承认自己不该突然去找她并当面质问。":"He was still angry when he got her apology. After reading what she said next, he admitted he shouldn't have shown up unexpectedly and questioned her.","道歉被顶回来后，她说明了当时为什么急着走，随后也收到他的道歉。":"After he pushed back on her apology, she explained why she'd wanted to leave in a hurry. He then apologized too.","他来问怎么约她见面，想当面说清楚。":"He asked how to invite her to meet, so they could talk in person.","两人约好等她忙完后在楼下见。":"They arranged to meet downstairs once she finished work.","两人当面谈过，约好到访前先确认，需要冷静时先说一声。":"They talked in person and agreed to check before a visit and to say when they needed a minute to cool off.","她决定结束关系，发出分手消息后准备回家。":"She decided to end the relationship. After sending the breakup message, she got ready to go home.","他收到分手消息，一时不知道怎么回，后来放下了手机。":"He got the breakup message and didn't know how to answer. Later, he put his phone down.","本次会话还有其他已处理消息。":"Other messages were processed in this session."}`),s0=["The Board Game Meetup","After Adding Each Other on WeChat","The First Date and the Confession","Their First Day Together","The First Fight","Meeting on Sunday","Rescheduling the Anniversary","The Argument Downstairs","After the Argument"],u0={"桌游局结束后，两人没有交换微信。":"After the board game meetup, they didn't exchange WeChat contacts.",分手:"Ending · They Break Up",和好:"Ending · They Make Up"},_l={beats:o0,summaries:l0,titles:s0,endings:u0},gg=ae.createContext({language:"zh",setLanguage:l=>{}});function In(){const{language:l,setLanguage:s}=ae.useContext(gg);return{language:l,setLanguage:s,t:(c,u)=>l==="en"?u:c}}function pg(){const{language:l,setLanguage:s}=In();return _.jsxs("div",{className:"language-switch",role:"group","aria-label":"Language / 语言",children:[_.jsx("button",{type:"button",lang:"en","aria-pressed":l==="en",onClick:()=>s("en"),children:"EN"}),_.jsx("button",{type:"button",lang:"zh-CN","aria-pressed":l==="zh",onClick:()=>s("zh"),children:"中文"})]})}const Wa=_l.beats,h0=_l.titles,c0=_l.summaries,d0=_l.endings;function f0(l){var d,f;const s=Wa[l.beatId],c=l.id.match(/:(?:(reply):)?(\d+)$/),u=(c==null?void 0:c[1])==="reply"?(d=s==null?void 0:s.choices[Number(c[2])])==null?void 0:d.reply:c?s==null?void 0:s.lines[Number(c[2])]:void 0;return((f=u==null?void 0:u[0])==null?void 0:f.trim())===l.text.trim()?u[1]:l.text}function Fh(l){var c;const s=(c=Wa[l.beatId])==null?void 0:c.memories.find(u=>u.label===l.label);return{label:(s==null?void 0:s.name)??l.label,text:(s==null?void 0:s.quote[1])??l.text}}function m0(l){var s;return((s=Object.values(Wa).flatMap(c=>(c==null?void 0:c.memories)??[]).find(c=>c.label===l))==null?void 0:s.name)??l}function y0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var jt={},Ol={},Rr={},Yy;function eo(){if(Yy)return Rr;Yy=1;function l(p){return typeof p>"u"||p===null}function s(p){return typeof p=="object"&&p!==null}function c(p){return Array.isArray(p)?p:l(p)?[]:[p]}function u(p,v){if(v){const k=Object.keys(v);for(let b=0,w=k.length;b<w;b+=1){const g=k[b];p[g]=v[g]}}return p}function d(p,v){let k="";for(let b=0;b<v;b+=1)k+=p;return k}function f(p){return p===0&&Number.NEGATIVE_INFINITY===1/p}return Rr.isNothing=l,Rr.isObject=s,Rr.toArray=c,Rr.repeat=d,Rr.isNegativeZero=f,Rr.extend=u,Rr}var vh,jy;function to(){if(jy)return vh;jy=1;function l(c,u){let d="";const f=c.reason||"(unknown reason)";return c.mark?(c.mark.name&&(d+='in "'+c.mark.name+'" '),d+="("+(c.mark.line+1)+":"+(c.mark.column+1)+")",!u&&c.mark.snippet&&(d+=`

`+c.mark.snippet),f+" "+d):f}function s(c,u){Error.call(this),this.name="YAMLException",this.reason=c,this.mark=u,this.message=l(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,s.prototype.toString=function(u){return this.name+": "+l(this,u)},vh=s,vh}var bh,zy;function g0(){if(zy)return bh;zy=1;const l=eo();function s(d,f,p,v,k){let b="",w="";const g=Math.floor(k/2)-1;return v-f>g&&(b=" ... ",f=v-g+b.length),p-v>g&&(w=" ...",p=v+g-w.length),{str:b+d.slice(f,p).replace(/\t/g,"→")+w,pos:v-f+b.length}}function c(d,f){return l.repeat(" ",f-d.length)+d}function u(d,f){if(f=Object.create(f||null),!d.buffer)return null;f.maxLength||(f.maxLength=79),typeof f.indent!="number"&&(f.indent=1),typeof f.linesBefore!="number"&&(f.linesBefore=3),typeof f.linesAfter!="number"&&(f.linesAfter=2);const p=/\r?\n|\r|\0/g,v=[0],k=[];let b,w=-1;for(;b=p.exec(d.buffer);)k.push(b.index),v.push(b.index+b[0].length),d.position<=b.index&&w<0&&(w=v.length-2);w<0&&(w=v.length-1);let g="";const S=Math.min(d.line+f.linesAfter,k.length).toString().length,C=f.maxLength-(f.indent+S+3);for(let ee=1;ee<=f.linesBefore&&!(w-ee<0);ee++){const ne=s(d.buffer,v[w-ee],k[w-ee],d.position-(v[w]-v[w-ee]),C);g=l.repeat(" ",f.indent)+c((d.line-ee+1).toString(),S)+" | "+ne.str+`
`+g}const Z=s(d.buffer,v[w],k[w],d.position,C);g+=l.repeat(" ",f.indent)+c((d.line+1).toString(),S)+" | "+Z.str+`
`,g+=l.repeat("-",f.indent+S+3+Z.pos)+`^
`;for(let ee=1;ee<=f.linesAfter&&!(w+ee>=k.length);ee++){const ne=s(d.buffer,v[w+ee],k[w+ee],d.position-(v[w]-v[w+ee]),C);g+=l.repeat(" ",f.indent)+c((d.line+ee+1).toString(),S)+" | "+ne.str+`
`}return g.replace(/\n$/,"")}return bh=u,bh}var kh,By;function Gt(){if(By)return kh;By=1;const l=to(),s=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],c=["scalar","sequence","mapping"];function u(f){const p={};return f!==null&&Object.keys(f).forEach(function(v){f[v].forEach(function(k){p[String(k)]=v})}),p}function d(f,p){if(p=p||{},Object.keys(p).forEach(function(v){if(s.indexOf(v)===-1)throw new l('Unknown option "'+v+'" is met in definition of "'+f+'" YAML type.')}),this.options=p,this.tag=f,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(v){return v},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=u(p.styleAliases||null),c.indexOf(this.kind)===-1)throw new l('Unknown kind "'+this.kind+'" is specified for "'+f+'" YAML type.')}return kh=d,kh}var Sh,qy;function wg(){if(qy)return Sh;qy=1;const l=to(),s=Gt();function c(f,p){const v=[];return f[p].forEach(function(k){let b=v.length;v.forEach(function(w,g){w.tag===k.tag&&w.kind===k.kind&&w.multi===k.multi&&(b=g)}),v[b]=k}),v}function u(){const f={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function p(v){v.multi?(f.multi[v.kind].push(v),f.multi.fallback.push(v)):f[v.kind][v.tag]=f.fallback[v.tag]=v}for(let v=0,k=arguments.length;v<k;v+=1)arguments[v].forEach(p);return f}function d(f){return this.extend(f)}return d.prototype.extend=function(p){let v=[],k=[];if(p instanceof s)k.push(p);else if(Array.isArray(p))k=k.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(v=v.concat(p.implicit)),p.explicit&&(k=k.concat(p.explicit));else throw new l("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");v.forEach(function(w){if(!(w instanceof s))throw new l("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(w.loadKind&&w.loadKind!=="scalar")throw new l("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(w.multi)throw new l("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),k.forEach(function(w){if(!(w instanceof s))throw new l("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const b=Object.create(d.prototype);return b.implicit=(this.implicit||[]).concat(v),b.explicit=(this.explicit||[]).concat(k),b.compiledImplicit=c(b,"implicit"),b.compiledExplicit=c(b,"explicit"),b.compiledTypeMap=u(b.compiledImplicit,b.compiledExplicit),b},Sh=d,Sh}var xh,Uy;function vg(){if(Uy)return xh;Uy=1;const l=Gt();return xh=new l("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),xh}var Th,Ly;function bg(){if(Ly)return Th;Ly=1;const l=Gt();return Th=new l("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),Th}var Eh,Gy;function kg(){if(Gy)return Eh;Gy=1;const l=Gt();return Eh=new l("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),Eh}var Ah,Xy;function Sg(){if(Xy)return Ah;Xy=1;const l=wg();return Ah=new l({explicit:[vg(),bg(),kg()]}),Ah}var Ih,Fy;function xg(){if(Fy)return Ih;Fy=1;const l=Gt();function s(d){if(d===null)return!0;const f=d.length;return f===1&&d==="~"||f===4&&(d==="null"||d==="Null"||d==="NULL")}function c(){return null}function u(d){return d===null}return Ih=new l("tag:yaml.org,2002:null",{kind:"scalar",resolve:s,construct:c,predicate:u,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Ih}var Mh,Qy;function Tg(){if(Qy)return Mh;Qy=1;const l=Gt();function s(d){if(d===null)return!1;const f=d.length;return f===4&&(d==="true"||d==="True"||d==="TRUE")||f===5&&(d==="false"||d==="False"||d==="FALSE")}function c(d){return d==="true"||d==="True"||d==="TRUE"}function u(d){return Object.prototype.toString.call(d)==="[object Boolean]"}return Mh=new l("tag:yaml.org,2002:bool",{kind:"scalar",resolve:s,construct:c,predicate:u,represent:{lowercase:function(d){return d?"true":"false"},uppercase:function(d){return d?"TRUE":"FALSE"},camelcase:function(d){return d?"True":"False"}},defaultStyle:"lowercase"}),Mh}var Oh,Zy;function Eg(){if(Zy)return Oh;Zy=1;const l=eo(),s=Gt();function c(b){return b>=48&&b<=57||b>=65&&b<=70||b>=97&&b<=102}function u(b){return b>=48&&b<=55}function d(b){return b>=48&&b<=57}function f(b){if(b===null)return!1;const w=b.length;let g=0,S=!1;if(!w)return!1;let C=b[g];if((C==="-"||C==="+")&&(C=b[++g]),C==="0"){if(g+1===w)return!0;if(C=b[++g],C==="b"){for(g++;g<w;g++){if(C=b[g],C!=="0"&&C!=="1")return!1;S=!0}return S&&isFinite(p(b))}if(C==="x"){for(g++;g<w;g++){if(!c(b.charCodeAt(g)))return!1;S=!0}return S&&isFinite(p(b))}if(C==="o"){for(g++;g<w;g++){if(!u(b.charCodeAt(g)))return!1;S=!0}return S&&isFinite(p(b))}}for(;g<w;g++){if(!d(b.charCodeAt(g)))return!1;S=!0}return S?isFinite(p(b)):!1}function p(b){let w=b,g=1,S=w[0];if((S==="-"||S==="+")&&(S==="-"&&(g=-1),w=w.slice(1),S=w[0]),w==="0")return 0;if(S==="0"){if(w[1]==="b")return g*parseInt(w.slice(2),2);if(w[1]==="x")return g*parseInt(w.slice(2),16);if(w[1]==="o")return g*parseInt(w.slice(2),8)}return g*parseInt(w,10)}function v(b){return p(b)}function k(b){return Object.prototype.toString.call(b)==="[object Number]"&&b%1===0&&!l.isNegativeZero(b)}return Oh=new s("tag:yaml.org,2002:int",{kind:"scalar",resolve:f,construct:v,predicate:k,represent:{binary:function(b){return b>=0?"0b"+b.toString(2):"-0b"+b.toString(2).slice(1)},octal:function(b){return b>=0?"0o"+b.toString(8):"-0o"+b.toString(8).slice(1)},decimal:function(b){return b.toString(10)},hexadecimal:function(b){return b>=0?"0x"+b.toString(16).toUpperCase():"-0x"+b.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Oh}var Nh,Ky;function Ag(){if(Ky)return Nh;Ky=1;const l=eo(),s=Gt(),c=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),u=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function d(b){return b===null||!c.test(b)?!1:isFinite(parseFloat(b,10))?!0:u.test(b)}function f(b){let w=b.toLowerCase();const g=w[0]==="-"?-1:1;return"+-".indexOf(w[0])>=0&&(w=w.slice(1)),w===".inf"?g===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:w===".nan"?NaN:g*parseFloat(w,10)}const p=/^[-+]?[0-9]+e/;function v(b,w){if(isNaN(b))switch(w){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===b)switch(w){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===b)switch(w){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(l.isNegativeZero(b))return"-0.0";const g=b.toString(10);return p.test(g)?g.replace("e",".e"):g}function k(b){return Object.prototype.toString.call(b)==="[object Number]"&&(b%1!==0||l.isNegativeZero(b))}return Nh=new s("tag:yaml.org,2002:float",{kind:"scalar",resolve:d,construct:f,predicate:k,represent:v,defaultStyle:"lowercase"}),Nh}var Ch,Vy;function Ig(){return Vy||(Vy=1,Ch=Sg().extend({implicit:[xg(),Tg(),Eg(),Ag()]})),Ch}var Rh,Jy;function Mg(){return Jy||(Jy=1,Rh=Ig()),Rh}var Hh,Wy;function Og(){if(Wy)return Hh;Wy=1;const l=Gt(),s=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),c=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function u(p){return p===null?!1:s.exec(p)!==null||c.exec(p)!==null}function d(p){let v=0,k=null,b=s.exec(p);if(b===null&&(b=c.exec(p)),b===null)throw new Error("Date resolve error");const w=+b[1],g=+b[2]-1,S=+b[3];if(!b[4])return new Date(Date.UTC(w,g,S));const C=+b[4],Z=+b[5],ee=+b[6];if(b[7]){for(v=b[7].slice(0,3);v.length<3;)v+="0";v=+v}if(b[9]){const Se=+b[10],we=+(b[11]||0);k=(Se*60+we)*6e4,b[9]==="-"&&(k=-k)}const ne=new Date(Date.UTC(w,g,S,C,Z,ee,v));return k&&ne.setTime(ne.getTime()-k),ne}function f(p){return p.toISOString()}return Hh=new l("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:u,construct:d,instanceOf:Date,represent:f}),Hh}var Dh,$y;function Ng(){if($y)return Dh;$y=1;const l=Gt();function s(c){return c==="<<"||c===null}return Dh=new l("tag:yaml.org,2002:merge",{kind:"scalar",resolve:s}),Dh}var _h,Py;function Cg(){if(Py)return _h;Py=1;const l=Gt(),s=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function c(p){if(p===null)return!1;let v=0;const k=p.length,b=s;for(let w=0;w<k;w++){const g=b.indexOf(p.charAt(w));if(!(g>64)){if(g<0)return!1;v+=6}}return v%8===0}function u(p){const v=p.replace(/[\r\n=]/g,""),k=v.length,b=s;let w=0;const g=[];for(let C=0;C<k;C++)C%4===0&&C&&(g.push(w>>16&255),g.push(w>>8&255),g.push(w&255)),w=w<<6|b.indexOf(v.charAt(C));const S=k%4*6;return S===0?(g.push(w>>16&255),g.push(w>>8&255),g.push(w&255)):S===18?(g.push(w>>10&255),g.push(w>>2&255)):S===12&&g.push(w>>4&255),new Uint8Array(g)}function d(p){let v="",k=0;const b=p.length,w=s;for(let S=0;S<b;S++)S%3===0&&S&&(v+=w[k>>18&63],v+=w[k>>12&63],v+=w[k>>6&63],v+=w[k&63]),k=(k<<8)+p[S];const g=b%3;return g===0?(v+=w[k>>18&63],v+=w[k>>12&63],v+=w[k>>6&63],v+=w[k&63]):g===2?(v+=w[k>>10&63],v+=w[k>>4&63],v+=w[k<<2&63],v+=w[64]):g===1&&(v+=w[k>>2&63],v+=w[k<<4&63],v+=w[64],v+=w[64]),v}function f(p){return Object.prototype.toString.call(p)==="[object Uint8Array]"}return _h=new l("tag:yaml.org,2002:binary",{kind:"scalar",resolve:c,construct:u,predicate:f,represent:d}),_h}var Yh,eg;function Rg(){if(eg)return Yh;eg=1;const l=Gt(),s=Object.prototype.hasOwnProperty,c=Object.prototype.toString;function u(f){if(f===null)return!0;const p={},v=f;for(let k=0,b=v.length;k<b;k+=1){const w=v[k];let g=!1;if(c.call(w)!=="[object Object]")return!1;let S;for(S in w)if(s.call(w,S))if(!g)g=!0;else return!1;if(!g||s.call(p,S))return!1;Object.defineProperty(p,S,{value:!0})}return!0}function d(f){return f!==null?f:[]}return Yh=new l("tag:yaml.org,2002:omap",{kind:"sequence",resolve:u,construct:d}),Yh}var jh,tg;function Hg(){if(tg)return jh;tg=1;const l=Gt(),s=Object.prototype.toString;function c(d){if(d===null)return!0;const f=d,p=new Array(f.length);for(let v=0,k=f.length;v<k;v+=1){const b=f[v];if(s.call(b)!=="[object Object]")return!1;const w=Object.keys(b);if(w.length!==1)return!1;p[v]=[w[0],b[w[0]]]}return!0}function u(d){if(d===null)return[];const f=d,p=new Array(f.length);for(let v=0,k=f.length;v<k;v+=1){const b=f[v],w=Object.keys(b);p[v]=[w[0],b[w[0]]]}return p}return jh=new l("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:c,construct:u}),jh}var zh,ng;function Dg(){if(ng)return zh;ng=1;const l=Gt(),s=Object.prototype.hasOwnProperty;function c(d){if(d===null)return!0;const f=d;for(const p in f)if(s.call(f,p)&&f[p]!==null)return!1;return!0}function u(d){return d!==null?d:{}}return zh=new l("tag:yaml.org,2002:set",{kind:"mapping",resolve:c,construct:u}),zh}var Bh,rg;function Jh(){return rg||(rg=1,Bh=Mg().extend({implicit:[Og(),Ng()],explicit:[Cg(),Rg(),Hg(),Dg()]})),Bh}var ag;function p0(){if(ag)return Ol;ag=1;const l=eo(),s=to(),c=g0(),u=Jh(),d=Object.prototype.hasOwnProperty,f=1,p=2,v=3,k=4,b=1,w=2,g=3,S=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,C=/[\x85\u2028\u2029]/,Z=/[,\[\]{}]/,ee=/^(?:!|!!|![0-9A-Za-z-]+!)$/,ne=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function Se(o){return Object.prototype.toString.call(o)}function we(o){return o===10||o===13}function he(o){return o===9||o===32}function se(o){return o===9||o===32||o===10||o===13}function be(o){return o===44||o===91||o===93||o===123||o===125}function Me(o){if(o>=48&&o<=57)return o-48;const M=o|32;return M>=97&&M<=102?M-97+10:-1}function xe(o){return o===120?2:o===117?4:o===85?8:0}function $(o){return o>=48&&o<=57?o-48:-1}function Oe(o){switch(o){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function _e(o){return o<=65535?String.fromCharCode(o):String.fromCharCode((o-65536>>10)+55296,(o-65536&1023)+56320)}function ye(o,M,G){M==="__proto__"?Object.defineProperty(o,M,{configurable:!0,enumerable:!0,writable:!0,value:G}):o[M]=G}const Ce=new Array(256),Fe=new Array(256);for(let o=0;o<256;o++)Ce[o]=Oe(o)?1:0,Fe[o]=Oe(o);function Ge(o,M){this.input=o,this.filename=M.filename||null,this.schema=M.schema||u,this.onWarning=M.onWarning||null,this.legacy=M.legacy||!1,this.json=M.json||!1,this.listener=M.listener||null,this.maxDepth=typeof M.maxDepth=="number"?M.maxDepth:100,this.maxTotalMergeKeys=typeof M.maxTotalMergeKeys=="number"?M.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=o.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function je(o,M){const G={name:o.filename,buffer:o.input.slice(0,-1),position:o.position,line:o.line,column:o.position-o.lineStart};return G.snippet=c(G),new s(M,G)}function j(o,M){throw je(o,M)}function me(o,M){o.onWarning&&o.onWarning.call(null,je(o,M))}function V(o,M,G){const K=o.anchorMapTransactions;if(K.length!==0){const q=K[K.length-1];d.call(q,M)||(q[M]={existed:d.call(o.anchorMap,M),value:o.anchorMap[M]})}o.anchorMap[M]=G}function te(o){o.anchorMapTransactions.push(Object.create(null))}function P(o){const M=o.anchorMapTransactions.pop(),G=o.anchorMapTransactions;if(G.length===0)return;const K=G[G.length-1],q=Object.keys(M);for(let m=0,H=q.length;m<H;m+=1){const T=q[m];d.call(K,T)||(K[T]=M[T])}}function Re(o){const M=o.anchorMapTransactions.pop(),G=Object.keys(M);for(let K=G.length-1;K>=0;K-=1){const q=M[G[K]];q.existed?o.anchorMap[G[K]]=q.value:delete o.anchorMap[G[K]]}}function Qe(o){return{position:o.position,line:o.line,lineStart:o.lineStart,lineIndent:o.lineIndent,firstTabInLine:o.firstTabInLine,tag:o.tag,anchor:o.anchor,kind:o.kind,result:o.result}}function at(o,M){o.position=M.position,o.line=M.line,o.lineStart=M.lineStart,o.lineIndent=M.lineIndent,o.firstTabInLine=M.firstTabInLine,o.tag=M.tag,o.anchor=M.anchor,o.kind=M.kind,o.result=M.result}const A={YAML:function(M,G,K){M.version!==null&&j(M,"duplication of %YAML directive"),K.length!==1&&j(M,"YAML directive accepts exactly one argument");const q=/^([0-9]+)\.([0-9]+)$/.exec(K[0]);q===null&&j(M,"ill-formed argument of the YAML directive");const m=parseInt(q[1],10),H=parseInt(q[2],10);m!==1&&j(M,"unacceptable YAML version of the document"),M.version=K[0],M.checkLineBreaks=H<2,H!==1&&H!==2&&me(M,"unsupported YAML version of the document")},TAG:function(M,G,K){let q;K.length!==2&&j(M,"TAG directive accepts exactly two arguments");const m=K[0];q=K[1],ee.test(m)||j(M,"ill-formed tag handle (first argument) of the TAG directive"),d.call(M.tagMap,m)&&j(M,'there is a previously declared suffix for "'+m+'" tag handle'),ne.test(q)||j(M,"ill-formed tag prefix (second argument) of the TAG directive");try{q=decodeURIComponent(q)}catch{j(M,"tag prefix is malformed: "+q)}M.tagMap[m]=q}};function X(o,M,G,K){if(M<G){const q=o.input.slice(M,G);if(K)for(let m=0,H=q.length;m<H;m+=1){const T=q.charCodeAt(m);T===9||T>=32&&T<=1114111||j(o,"expected valid JSON character")}else S.test(q)&&j(o,"the stream contains non-printable characters");o.result+=q}}function re(o){o.totalMergeKeys++,o.maxTotalMergeKeys!==-1&&o.totalMergeKeys>o.maxTotalMergeKeys&&j(o,"merge keys exceeded maxTotalMergeKeys ("+o.maxTotalMergeKeys+")")}function W(o,M,G,K){l.isObject(G)||j(o,"cannot merge mappings; the provided source object is unacceptable"),re(o);const q=Object.keys(G);for(let m=0,H=q.length;m<H;m+=1){const T=q[m];re(o),d.call(M,T)||(ye(M,T,G[T]),K[T]=!0)}}function pe(o,M,G,K,q,m,H,T,B){if(Array.isArray(q)){q=Array.prototype.slice.call(q);for(let L=0,U=q.length;L<U;L+=1)Array.isArray(q[L])&&j(o,"nested arrays are not supported inside keys"),typeof q=="object"&&Se(q[L])==="[object Object]"&&(q[L]="[object Object]")}if(typeof q=="object"&&Se(q)==="[object Object]"&&(q="[object Object]"),q=String(q),M===null&&(M={}),K==="tag:yaml.org,2002:merge")if(Array.isArray(m)){m.length>100&&j(o,"abnormal merge sequence size");for(let L=0,U=m.length;L<U;L+=1)W(o,M,m[L],G)}else W(o,M,m,G);else!o.json&&!d.call(G,q)&&d.call(M,q)&&(o.line=H||o.line,o.lineStart=T||o.lineStart,o.position=B||o.position,j(o,"duplicated mapping key")),ye(M,q,m),delete G[q];return M}function Te(o){const M=o.input.charCodeAt(o.position);M===10?o.position++:M===13?(o.position++,o.input.charCodeAt(o.position)===10&&o.position++):j(o,"a line break is expected"),o.line+=1,o.lineStart=o.position,o.firstTabInLine=-1}function ce(o,M,G){let K=0,q=o.input.charCodeAt(o.position);for(;q!==0;){for(;he(q);)q===9&&o.firstTabInLine===-1&&(o.firstTabInLine=o.position),q=o.input.charCodeAt(++o.position);if(M&&q===35)do q=o.input.charCodeAt(++o.position);while(q!==10&&q!==13&&q!==0);if(we(q))for(Te(o),q=o.input.charCodeAt(o.position),K++,o.lineIndent=0;q===32;)o.lineIndent++,q=o.input.charCodeAt(++o.position);else break}return G!==-1&&K!==0&&o.lineIndent<G&&me(o,"deficient indentation"),K}function le(o){let M=o.position,G=o.input.charCodeAt(M);return!!((G===45||G===46)&&G===o.input.charCodeAt(M+1)&&G===o.input.charCodeAt(M+2)&&(M+=3,G=o.input.charCodeAt(M),G===0||se(G)))}function ge(o,M){M===1?o.result+=" ":M>1&&(o.result+=l.repeat(`
`,M-1))}function Et(o,M,G){let K,q,m,H,T,B;const L=o.kind,U=o.result;let z=o.input.charCodeAt(o.position);if(se(z)||be(z)||z===35||z===38||z===42||z===33||z===124||z===62||z===39||z===34||z===37||z===64||z===96)return!1;if(z===63||z===45){const J=o.input.charCodeAt(o.position+1);if(se(J)||G&&be(J))return!1}for(o.kind="scalar",o.result="",K=q=o.position,m=!1;z!==0;){if(z===58){const J=o.input.charCodeAt(o.position+1);if(se(J)||G&&be(J))break}else if(z===35){const J=o.input.charCodeAt(o.position-1);if(se(J))break}else{if(o.position===o.lineStart&&le(o)||G&&be(z))break;if(we(z))if(H=o.line,T=o.lineStart,B=o.lineIndent,ce(o,!1,-1),o.lineIndent>=M){m=!0,z=o.input.charCodeAt(o.position);continue}else{o.position=q,o.line=H,o.lineStart=T,o.lineIndent=B;break}}m&&(X(o,K,q,!1),ge(o,o.line-H),K=q=o.position,m=!1),he(z)||(q=o.position+1),z=o.input.charCodeAt(++o.position)}return X(o,K,q,!1),o.result?!0:(o.kind=L,o.result=U,!1)}function Pt(o,M){let G,K,q=o.input.charCodeAt(o.position);if(q!==39)return!1;for(o.kind="scalar",o.result="",o.position++,G=K=o.position;(q=o.input.charCodeAt(o.position))!==0;)if(q===39)if(X(o,G,o.position,!0),q=o.input.charCodeAt(++o.position),q===39)G=o.position,o.position++,K=o.position;else return!0;else we(q)?(X(o,G,K,!0),ge(o,ce(o,!1,M)),G=K=o.position):o.position===o.lineStart&&le(o)?j(o,"unexpected end of the document within a single quoted scalar"):(o.position++,he(q)||(K=o.position));j(o,"unexpected end of the stream within a single quoted scalar")}function Xt(o,M){let G,K,q,m=o.input.charCodeAt(o.position);if(m!==34)return!1;for(o.kind="scalar",o.result="",o.position++,G=K=o.position;(m=o.input.charCodeAt(o.position))!==0;){if(m===34)return X(o,G,o.position,!0),o.position++,!0;if(m===92){if(X(o,G,o.position,!0),m=o.input.charCodeAt(++o.position),we(m))ce(o,!1,M);else if(m<256&&Ce[m])o.result+=Fe[m],o.position++;else if((q=xe(m))>0){let H=q,T=0;for(;H>0;H--)m=o.input.charCodeAt(++o.position),(q=Me(m))>=0?T=(T<<4)+q:j(o,"expected hexadecimal character");o.result+=_e(T),o.position++}else j(o,"unknown escape sequence");G=K=o.position}else we(m)?(X(o,G,K,!0),ge(o,ce(o,!1,M)),G=K=o.position):o.position===o.lineStart&&le(o)?j(o,"unexpected end of the document within a double quoted scalar"):(o.position++,he(m)||(K=o.position))}j(o,"unexpected end of the stream within a double quoted scalar")}function pt(o,M){let G=!0,K,q,m;const H=o.tag;let T;const B=o.anchor;let L,U,z,J;const oe=Object.create(null);let de,ke,Ae,Ee=o.input.charCodeAt(o.position);if(Ee===91)L=93,J=!1,T=[];else if(Ee===123)L=125,J=!0,T={};else return!1;for(o.anchor!==null&&V(o,o.anchor,T),Ee=o.input.charCodeAt(++o.position);Ee!==0;){if(ce(o,!0,M),Ee=o.input.charCodeAt(o.position),Ee===L)return o.position++,o.tag=H,o.anchor=B,o.kind=J?"mapping":"sequence",o.result=T,!0;if(G?Ee===44&&j(o,"expected the node content, but found ','"):j(o,"missed comma between flow collection entries"),ke=de=Ae=null,U=z=!1,Ee===63){const _t=o.input.charCodeAt(o.position+1);se(_t)&&(U=z=!0,o.position++,ce(o,!0,M))}K=o.line,q=o.lineStart,m=o.position,dt(o,M,f,!1,!0),ke=o.tag,de=o.result,ce(o,!0,M),Ee=o.input.charCodeAt(o.position),(z||o.line===K)&&Ee===58&&(U=!0,Ee=o.input.charCodeAt(++o.position),ce(o,!0,M),dt(o,M,f,!1,!0),Ae=o.result),J?pe(o,T,oe,ke,de,Ae,K,q,m):U?T.push(pe(o,null,oe,ke,de,Ae,K,q,m)):T.push(de),ce(o,!0,M),Ee=o.input.charCodeAt(o.position),Ee===44?(G=!0,Ee=o.input.charCodeAt(++o.position)):G=!1}j(o,"unexpected end of the stream within a flow collection")}function Je(o,M){let G,K=b,q=!1,m=!1,H=M,T=0,B=!1,L,U=o.input.charCodeAt(o.position);if(U===124)G=!1;else if(U===62)G=!0;else return!1;for(o.kind="scalar",o.result="";U!==0;)if(U=o.input.charCodeAt(++o.position),U===43||U===45)b===K?K=U===43?g:w:j(o,"repeat of a chomping mode identifier");else if((L=$(U))>=0)L===0?j(o,"bad explicit indentation width of a block scalar; it cannot be less than one"):m?j(o,"repeat of an indentation width identifier"):(H=M+L-1,m=!0);else break;if(he(U)){do U=o.input.charCodeAt(++o.position);while(he(U));if(U===35)do U=o.input.charCodeAt(++o.position);while(!we(U)&&U!==0)}for(;U!==0;){for(Te(o),o.lineIndent=0,U=o.input.charCodeAt(o.position);(!m||o.lineIndent<H)&&U===32;)o.lineIndent++,U=o.input.charCodeAt(++o.position);if(!m&&o.lineIndent>H&&(H=o.lineIndent),we(U)){T++;continue}if(!m&&H===0&&j(o,"missing indentation for block scalar"),o.lineIndent<H){K===g?o.result+=l.repeat(`
`,q?1+T:T):K===b&&q&&(o.result+=`
`);break}G?he(U)?(B=!0,o.result+=l.repeat(`
`,q?1+T:T)):B?(B=!1,o.result+=l.repeat(`
`,T+1)):T===0?q&&(o.result+=" "):o.result+=l.repeat(`
`,T):o.result+=l.repeat(`
`,q?1+T:T),q=!0,m=!0,T=0;const z=o.position;for(;!we(U)&&U!==0;)U=o.input.charCodeAt(++o.position);X(o,z,o.position,!1)}return!0}function qe(o,M){const G=o.tag,K=o.anchor,q=[];let m=!1;if(o.firstTabInLine!==-1)return!1;o.anchor!==null&&V(o,o.anchor,q);let H=o.input.charCodeAt(o.position);for(;H!==0&&(o.firstTabInLine!==-1&&(o.position=o.firstTabInLine,j(o,"tab characters must not be used in indentation")),H===45);){const T=o.input.charCodeAt(o.position+1);if(!se(T))break;if(m=!0,o.position++,ce(o,!0,-1)&&o.lineIndent<=M){q.push(null),H=o.input.charCodeAt(o.position);continue}const B=o.line;if(dt(o,M,v,!1,!0),q.push(o.result),ce(o,!0,-1),H=o.input.charCodeAt(o.position),(o.line===B||o.lineIndent>M)&&H!==0)j(o,"bad indentation of a sequence entry");else if(o.lineIndent<M)break}return m?(o.tag=G,o.anchor=K,o.kind="sequence",o.result=q,!0):!1}function wt(o,M,G){let K,q,m,H;const T=o.tag,B=o.anchor,L={},U=Object.create(null);let z=null,J=null,oe=null,de=!1,ke=!1;if(o.firstTabInLine!==-1)return!1;o.anchor!==null&&V(o,o.anchor,L);let Ae=o.input.charCodeAt(o.position);for(;Ae!==0;){!de&&o.firstTabInLine!==-1&&(o.position=o.firstTabInLine,j(o,"tab characters must not be used in indentation"));const Ee=o.input.charCodeAt(o.position+1),_t=o.line;if((Ae===63||Ae===58)&&se(Ee))Ae===63?(de&&(pe(o,L,U,z,J,null,q,m,H),z=J=oe=null),ke=!0,de=!0,K=!0):de?(de=!1,K=!0):j(o,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),o.position+=1,Ae=Ee;else{if(q=o.line,m=o.lineStart,H=o.position,!dt(o,G,p,!1,!0))break;if(o.line===_t){for(Ae=o.input.charCodeAt(o.position);he(Ae);)Ae=o.input.charCodeAt(++o.position);if(Ae===58)Ae=o.input.charCodeAt(++o.position),se(Ae)||j(o,"a whitespace character is expected after the key-value separator within a block mapping"),de&&(pe(o,L,U,z,J,null,q,m,H),z=J=oe=null),ke=!0,de=!1,K=!1,z=o.tag,J=o.result;else if(ke)j(o,"can not read an implicit mapping pair; a colon is missed");else return o.tag=T,o.anchor=B,!0}else if(ke)j(o,"can not read a block mapping entry; a multiline key may not be an implicit key");else return o.tag=T,o.anchor=B,!0}if((o.line===_t||o.lineIndent>M)&&(de&&(q=o.line,m=o.lineStart,H=o.position),dt(o,M,k,!0,K)&&(de?J=o.result:oe=o.result),de||(pe(o,L,U,z,J,oe,q,m,H),z=J=oe=null),ce(o,!0,-1),Ae=o.input.charCodeAt(o.position)),(o.line===_t||o.lineIndent>M)&&Ae!==0)j(o,"bad indentation of a mapping entry");else if(o.lineIndent<M)break}return de&&pe(o,L,U,z,J,null,q,m,H),ke&&(o.tag=T,o.anchor=B,o.kind="mapping",o.result=L),ke}function At(o){let M=!1,G=!1,K,q,m=o.input.charCodeAt(o.position);if(m!==33)return!1;o.tag!==null&&j(o,"duplication of a tag property"),m=o.input.charCodeAt(++o.position),m===60?(M=!0,m=o.input.charCodeAt(++o.position)):m===33?(G=!0,K="!!",m=o.input.charCodeAt(++o.position)):K="!";let H=o.position;if(M){do m=o.input.charCodeAt(++o.position);while(m!==0&&m!==62);o.position<o.length?(q=o.input.slice(H,o.position),m=o.input.charCodeAt(++o.position)):j(o,"unexpected end of the stream within a verbatim tag")}else{for(;m!==0&&!se(m);)m===33&&(G?j(o,"tag suffix cannot contain exclamation marks"):(K=o.input.slice(H-1,o.position+1),ee.test(K)||j(o,"named tag handle cannot contain such characters"),G=!0,H=o.position+1)),m=o.input.charCodeAt(++o.position);q=o.input.slice(H,o.position),Z.test(q)&&j(o,"tag suffix cannot contain flow indicator characters")}q&&!ne.test(q)&&j(o,"tag name cannot contain such characters: "+q);try{q=decodeURIComponent(q)}catch{j(o,"tag name is malformed: "+q)}return M?o.tag=q:d.call(o.tagMap,K)?o.tag=o.tagMap[K]+q:K==="!"?o.tag="!"+q:K==="!!"?o.tag="tag:yaml.org,2002:"+q:j(o,'undeclared tag handle "'+K+'"'),!0}function vt(o){let M=o.input.charCodeAt(o.position);if(M!==38)return!1;o.anchor!==null&&j(o,"duplication of an anchor property"),M=o.input.charCodeAt(++o.position);const G=o.position;for(;M!==0&&!se(M)&&!be(M);)M=o.input.charCodeAt(++o.position);return o.position===G&&j(o,"name of an anchor node must contain at least one character"),o.anchor=o.input.slice(G,o.position),!0}function Mn(o){let M=o.input.charCodeAt(o.position);if(M!==42)return!1;M=o.input.charCodeAt(++o.position);const G=o.position;for(;M!==0&&!se(M)&&!be(M);)M=o.input.charCodeAt(++o.position);o.position===G&&j(o,"name of an alias node must contain at least one character");const K=o.input.slice(G,o.position);return d.call(o.anchorMap,K)||j(o,'unidentified alias "'+K+'"'),o.result=o.anchorMap[K],ce(o,!0,-1),!0}function Ft(o,M,G,K){const q=Qe(o);return te(o),at(o,M),o.tag=null,o.anchor=null,o.kind=null,o.result=null,wt(o,G,K)&&o.kind==="mapping"?(P(o),!0):(Re(o),at(o,q),!1)}function dt(o,M,G,K,q){let m,H,T=1,B=!1,L=!1,U=null,z,J,oe;o.depth>=o.maxDepth&&j(o,"nesting exceeded maxDepth ("+o.maxDepth+")"),o.depth+=1,o.listener!==null&&o.listener("open",o),o.tag=null,o.anchor=null,o.kind=null,o.result=null;const de=m=H=k===G||v===G;if(K&&ce(o,!0,-1)&&(B=!0,o.lineIndent>M?T=1:o.lineIndent===M?T=0:o.lineIndent<M&&(T=-1)),T===1)for(;;){const ke=o.input.charCodeAt(o.position),Ae=Qe(o);if(B&&(ke===33&&o.tag!==null||ke===38&&o.anchor!==null)||!At(o)&&!vt(o))break;U===null&&(U=Ae),ce(o,!0,-1)?(B=!0,H=de,o.lineIndent>M?T=1:o.lineIndent===M?T=0:o.lineIndent<M&&(T=-1)):H=!1}if(H&&(H=B||q),T===1||k===G)if(f===G||p===G?J=M:J=M+1,oe=o.position-o.lineStart,T===1)if(H&&(qe(o,oe)||wt(o,oe,J))||pt(o,J))L=!0;else{const ke=o.input.charCodeAt(o.position);U!==null&&de&&!H&&ke!==124&&ke!==62&&Ft(o,U,U.position-U.lineStart,J)||m&&Je(o,J)||Pt(o,J)||Xt(o,J)?L=!0:Mn(o)?(L=!0,(o.tag!==null||o.anchor!==null)&&j(o,"alias node should not have any properties")):Et(o,J,f===G)&&(L=!0,o.tag===null&&(o.tag="?")),o.anchor!==null&&V(o,o.anchor,o.result)}else T===0&&(L=H&&qe(o,oe));if(o.tag===null)o.anchor!==null&&V(o,o.anchor,o.result);else if(o.tag==="?"){o.result!==null&&o.kind!=="scalar"&&j(o,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+o.kind+'"');for(let ke=0,Ae=o.implicitTypes.length;ke<Ae;ke+=1)if(z=o.implicitTypes[ke],z.resolve(o.result)){o.result=z.construct(o.result),o.tag=z.tag,o.anchor!==null&&V(o,o.anchor,o.result);break}}else if(o.tag!=="!"){if(d.call(o.typeMap[o.kind||"fallback"],o.tag))z=o.typeMap[o.kind||"fallback"][o.tag];else{z=null;const ke=o.typeMap.multi[o.kind||"fallback"];for(let Ae=0,Ee=ke.length;Ae<Ee;Ae+=1)if(o.tag.slice(0,ke[Ae].tag.length)===ke[Ae].tag){z=ke[Ae];break}}z||j(o,"unknown tag !<"+o.tag+">"),o.result!==null&&z.kind!==o.kind&&j(o,"unacceptable node kind for !<"+o.tag+'> tag; it should be "'+z.kind+'", not "'+o.kind+'"'),z.resolve(o.result,o.tag)?(o.result=z.construct(o.result,o.tag),o.anchor!==null&&V(o,o.anchor,o.result)):j(o,"cannot resolve a node with !<"+o.tag+"> explicit tag")}return o.listener!==null&&o.listener("close",o),o.depth-=1,o.tag!==null||o.anchor!==null||L}function zt(o){const M=o.position;let G=!1,K;for(o.version=null,o.checkLineBreaks=o.legacy,o.tagMap=Object.create(null),o.anchorMap=Object.create(null);(K=o.input.charCodeAt(o.position))!==0&&(ce(o,!0,-1),K=o.input.charCodeAt(o.position),!(o.lineIndent>0||K!==37));){G=!0,K=o.input.charCodeAt(++o.position);let q=o.position;for(;K!==0&&!se(K);)K=o.input.charCodeAt(++o.position);const m=o.input.slice(q,o.position),H=[];for(m.length<1&&j(o,"directive name must not be less than one character in length");K!==0;){for(;he(K);)K=o.input.charCodeAt(++o.position);if(K===35){do K=o.input.charCodeAt(++o.position);while(K!==0&&!we(K));break}if(we(K))break;for(q=o.position;K!==0&&!se(K);)K=o.input.charCodeAt(++o.position);H.push(o.input.slice(q,o.position))}K!==0&&Te(o),d.call(A,m)?A[m](o,m,H):me(o,'unknown document directive "'+m+'"')}if(ce(o,!0,-1),o.lineIndent===0&&o.input.charCodeAt(o.position)===45&&o.input.charCodeAt(o.position+1)===45&&o.input.charCodeAt(o.position+2)===45?(o.position+=3,ce(o,!0,-1)):G&&j(o,"directives end mark is expected"),dt(o,o.lineIndent-1,k,!1,!0),ce(o,!0,-1),o.checkLineBreaks&&C.test(o.input.slice(M,o.position))&&me(o,"non-ASCII line breaks are interpreted as content"),o.documents.push(o.result),o.position===o.lineStart&&le(o)){o.input.charCodeAt(o.position)===46&&(o.position+=3,ce(o,!0,-1));return}o.position<o.length-1&&j(o,"end of the stream or a document separator is expected")}function Qt(o,M){o=String(o),M=M||{},o.length!==0&&(o.charCodeAt(o.length-1)!==10&&o.charCodeAt(o.length-1)!==13&&(o+=`
`),o.charCodeAt(0)===65279&&(o=o.slice(1)));const G=new Ge(o,M),K=o.indexOf("\0");for(K!==-1&&(G.position=K,j(G,"null byte is not allowed in input")),G.input+="\0";G.input.charCodeAt(G.position)===32;)G.lineIndent+=1,G.position+=1;for(;G.position<G.length-1;)zt(G);return G.documents}function Ln(o,M,G){M!==null&&typeof M=="object"&&typeof G>"u"&&(G=M,M=null);const K=Qt(o,G);if(typeof M!="function")return K;for(let q=0,m=K.length;q<m;q+=1)M(K[q])}function It(o,M){const G=Qt(o,M);if(G.length!==0){if(G.length===1)return G[0];throw new s("expected a single document in the stream, but found more")}}return Ol.loadAll=Ln,Ol.load=It,Ol}var qh={},ig;function w0(){if(ig)return qh;ig=1;const l=eo(),s=to(),c=Jh(),u=Object.prototype.toString,d=Object.prototype.hasOwnProperty,f=65279,p=9,v=10,k=13,b=32,w=33,g=34,S=35,C=37,Z=38,ee=39,ne=42,Se=44,we=45,he=58,se=61,be=62,Me=63,xe=64,$=91,Oe=93,_e=96,ye=123,Ce=124,Fe=125,Ge={};Ge[0]="\\0",Ge[7]="\\a",Ge[8]="\\b",Ge[9]="\\t",Ge[10]="\\n",Ge[11]="\\v",Ge[12]="\\f",Ge[13]="\\r",Ge[27]="\\e",Ge[34]='\\"',Ge[92]="\\\\",Ge[133]="\\N",Ge[160]="\\_",Ge[8232]="\\L",Ge[8233]="\\P";const je=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],j=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function me(m,H){if(H===null)return{};const T={},B=Object.keys(H);for(let L=0,U=B.length;L<U;L+=1){let z=B[L],J=String(H[z]);z.slice(0,2)==="!!"&&(z="tag:yaml.org,2002:"+z.slice(2));const oe=m.compiledTypeMap.fallback[z];oe&&d.call(oe.styleAliases,J)&&(J=oe.styleAliases[J]),T[z]=J}return T}function V(m){let H,T;const B=m.toString(16).toUpperCase();if(m<=255)H="x",T=2;else if(m<=65535)H="u",T=4;else if(m<=4294967295)H="U",T=8;else throw new s("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+H+l.repeat("0",T-B.length)+B}const te=1,P=2;function Re(m){this.schema=m.schema||c,this.indent=Math.max(1,m.indent||2),this.noArrayIndent=m.noArrayIndent||!1,this.skipInvalid=m.skipInvalid||!1,this.flowLevel=l.isNothing(m.flowLevel)?-1:m.flowLevel,this.styleMap=me(this.schema,m.styles||null),this.sortKeys=m.sortKeys||!1,this.lineWidth=m.lineWidth||80,this.noRefs=m.noRefs||!1,this.noCompatMode=m.noCompatMode||!1,this.condenseFlow=m.condenseFlow||!1,this.quotingType=m.quotingType==='"'?P:te,this.forceQuotes=m.forceQuotes||!1,this.replacer=typeof m.replacer=="function"?m.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Qe(m,H){const T=l.repeat(" ",H);let B=0,L="";const U=m.length;for(;B<U;){let z;const J=m.indexOf(`
`,B);J===-1?(z=m.slice(B),B=U):(z=m.slice(B,J+1),B=J+1),z.length&&z!==`
`&&(L+=T),L+=z}return L}function at(m,H){return`
`+l.repeat(" ",m.indent*H)}function A(m,H){for(let T=0,B=m.implicitTypes.length;T<B;T+=1)if(m.implicitTypes[T].resolve(H))return!0;return!1}function X(m){return m===b||m===p}function re(m){return m>=32&&m<=126||m>=161&&m<=55295&&m!==8232&&m!==8233||m>=57344&&m<=65533&&m!==f||m>=65536&&m<=1114111}function W(m){return re(m)&&m!==f&&m!==k&&m!==v}function pe(m,H,T){const B=W(m),L=B&&!X(m);return(T?B:B&&m!==Se&&m!==$&&m!==Oe&&m!==ye&&m!==Fe)&&m!==S&&!(H===he&&!L)||W(H)&&!X(H)&&m===S||H===he&&L}function Te(m){return re(m)&&m!==f&&!X(m)&&m!==we&&m!==Me&&m!==he&&m!==Se&&m!==$&&m!==Oe&&m!==ye&&m!==Fe&&m!==S&&m!==Z&&m!==ne&&m!==w&&m!==Ce&&m!==se&&m!==be&&m!==ee&&m!==g&&m!==C&&m!==xe&&m!==_e}function ce(m){return!X(m)&&m!==he}function le(m,H){const T=m.charCodeAt(H);let B;return T>=55296&&T<=56319&&H+1<m.length&&(B=m.charCodeAt(H+1),B>=56320&&B<=57343)?(T-55296)*1024+B-56320+65536:T}function ge(m){return/^\n* /.test(m)}const Et=1,Pt=2,Xt=3,pt=4,Je=5;function qe(m,H,T,B,L,U,z,J){let oe,de=0,ke=null,Ae=!1,Ee=!1;const _t=B!==-1;let en=-1,st=Te(le(m,0))&&ce(le(m,m.length-1));if(H||z)for(oe=0;oe<m.length;de>=65536?oe+=2:oe++){if(de=le(m,oe),!re(de))return Je;st=st&&pe(de,ke,J),ke=de}else{for(oe=0;oe<m.length;de>=65536?oe+=2:oe++){if(de=le(m,oe),de===v)Ae=!0,_t&&(Ee=Ee||oe-en-1>B&&m[en+1]!==" ",en=oe);else if(!re(de))return Je;st=st&&pe(de,ke,J),ke=de}Ee=Ee||_t&&oe-en-1>B&&m[en+1]!==" "}return!Ae&&!Ee?st&&!z&&!L(m)?Et:U===P?Je:Pt:T>9&&ge(m)?Je:z?U===P?Je:Pt:Ee?pt:Xt}function wt(m,H,T,B,L){m.dump=(function(){if(H.length===0)return m.quotingType===P?'""':"''";if(!m.noCompatMode&&(je.indexOf(H)!==-1||j.test(H)))return m.quotingType===P?'"'+H+'"':"'"+H+"'";const U=m.indent*Math.max(1,T),z=m.lineWidth===-1?-1:Math.max(Math.min(m.lineWidth,40),m.lineWidth-U),J=B||m.flowLevel>-1&&T>=m.flowLevel;function oe(de){return A(m,de)}switch(qe(H,J,m.indent,z,oe,m.quotingType,m.forceQuotes&&!B,L)){case Et:return H;case Pt:return"'"+H.replace(/'/g,"''")+"'";case Xt:return"|"+At(H,m.indent)+vt(Qe(H,U));case pt:return">"+At(H,m.indent)+vt(Qe(Mn(H,z),U));case Je:return'"'+dt(H)+'"';default:throw new s("impossible error: invalid scalar style")}})()}function At(m,H){const T=ge(m)?String(H):"",B=m[m.length-1]===`
`,U=B&&(m[m.length-2]===`
`||m===`
`)?"+":B?"":"-";return T+U+`
`}function vt(m){return m[m.length-1]===`
`?m.slice(0,-1):m}function Mn(m,H){const T=/(\n+)([^\n]*)/g;let B=(function(){let J=m.indexOf(`
`);return J=J!==-1?J:m.length,T.lastIndex=J,Ft(m.slice(0,J),H)})(),L=m[0]===`
`||m[0]===" ",U,z;for(;z=T.exec(m);){const J=z[1],oe=z[2];U=oe[0]===" ",B+=J+(!L&&!U&&oe!==""?`
`:"")+Ft(oe,H),L=U}return B}function Ft(m,H){if(m===""||m[0]===" ")return m;const T=/ [^ ]/g;let B,L=0,U,z=0,J=0,oe="";for(;B=T.exec(m);)J=B.index,J-L>H&&(U=z>L?z:J,oe+=`
`+m.slice(L,U),L=U+1),z=J;return oe+=`
`,m.length-L>H&&z>L?oe+=m.slice(L,z)+`
`+m.slice(z+1):oe+=m.slice(L),oe.slice(1)}function dt(m){let H="",T=0;for(let B=0;B<m.length;T>=65536?B+=2:B++){T=le(m,B);const L=Ge[T];!L&&re(T)?(H+=m[B],T>=65536&&(H+=m[B+1])):H+=L||V(T)}return H}function zt(m,H,T){let B="";const L=m.tag;for(let U=0,z=T.length;U<z;U+=1){let J=T[U];m.replacer&&(J=m.replacer.call(T,String(U),J)),(M(m,H,J,!1,!1)||typeof J>"u"&&M(m,H,null,!1,!1))&&(B!==""&&(B+=","+(m.condenseFlow?"":" ")),B+=m.dump)}m.tag=L,m.dump="["+B+"]"}function Qt(m,H,T,B){let L="";const U=m.tag;for(let z=0,J=T.length;z<J;z+=1){let oe=T[z];m.replacer&&(oe=m.replacer.call(T,String(z),oe)),(M(m,H+1,oe,!0,!0,!1,!0)||typeof oe>"u"&&M(m,H+1,null,!0,!0,!1,!0))&&((!B||L!=="")&&(L+=at(m,H)),m.dump&&v===m.dump.charCodeAt(0)?L+="-":L+="- ",L+=m.dump)}m.tag=U,m.dump=L||"[]"}function Ln(m,H,T){let B="";const L=m.tag,U=Object.keys(T);for(let z=0,J=U.length;z<J;z+=1){let oe="";B!==""&&(oe+=", "),m.condenseFlow&&(oe+='"');const de=U[z];let ke=T[de];m.replacer&&(ke=m.replacer.call(T,de,ke)),M(m,H,de,!1,!1)&&(m.dump.length>1024&&(oe+="? "),oe+=m.dump+(m.condenseFlow?'"':"")+":"+(m.condenseFlow?"":" "),M(m,H,ke,!1,!1)&&(oe+=m.dump,B+=oe))}m.tag=L,m.dump="{"+B+"}"}function It(m,H,T,B){let L="";const U=m.tag,z=Object.keys(T);if(m.sortKeys===!0)z.sort();else if(typeof m.sortKeys=="function")z.sort(m.sortKeys);else if(m.sortKeys)throw new s("sortKeys must be a boolean or a function");for(let J=0,oe=z.length;J<oe;J+=1){let de="";(!B||L!=="")&&(de+=at(m,H));const ke=z[J];let Ae=T[ke];if(m.replacer&&(Ae=m.replacer.call(T,ke,Ae)),!M(m,H+1,ke,!0,!0,!0))continue;const Ee=m.tag!==null&&m.tag!=="?"||m.dump&&m.dump.length>1024;Ee&&(m.dump&&v===m.dump.charCodeAt(0)?de+="?":de+="? "),de+=m.dump,Ee&&(de+=at(m,H)),M(m,H+1,Ae,!0,Ee)&&(m.dump&&v===m.dump.charCodeAt(0)?de+=":":de+=": ",de+=m.dump,L+=de)}m.tag=U,m.dump=L||"{}"}function o(m,H,T){const B=T?m.explicitTypes:m.implicitTypes;for(let L=0,U=B.length;L<U;L+=1){const z=B[L];if((z.instanceOf||z.predicate)&&(!z.instanceOf||typeof H=="object"&&H instanceof z.instanceOf)&&(!z.predicate||z.predicate(H))){if(T?z.multi&&z.representName?m.tag=z.representName(H):m.tag=z.tag:m.tag="?",z.represent){const J=m.styleMap[z.tag]||z.defaultStyle;let oe;if(u.call(z.represent)==="[object Function]")oe=z.represent(H,J);else if(d.call(z.represent,J))oe=z.represent[J](H,J);else throw new s("!<"+z.tag+'> tag resolver accepts not "'+J+'" style');m.dump=oe}return!0}}return!1}function M(m,H,T,B,L,U,z){m.tag=null,m.dump=T,o(m,T,!1)||o(m,T,!0);const J=u.call(m.dump),oe=B;B&&(B=m.flowLevel<0||m.flowLevel>H);const de=J==="[object Object]"||J==="[object Array]";let ke,Ae;if(de&&(ke=m.duplicates.indexOf(T),Ae=ke!==-1),(m.tag!==null&&m.tag!=="?"||Ae||m.indent!==2&&H>0)&&(L=!1),Ae&&m.usedDuplicates[ke])m.dump="*ref_"+ke;else{if(de&&Ae&&!m.usedDuplicates[ke]&&(m.usedDuplicates[ke]=!0),J==="[object Object]")B&&Object.keys(m.dump).length!==0?(It(m,H,m.dump,L),Ae&&(m.dump="&ref_"+ke+m.dump)):(Ln(m,H,m.dump),Ae&&(m.dump="&ref_"+ke+" "+m.dump));else if(J==="[object Array]")B&&m.dump.length!==0?(m.noArrayIndent&&!z&&H>0?Qt(m,H-1,m.dump,L):Qt(m,H,m.dump,L),Ae&&(m.dump="&ref_"+ke+m.dump)):(zt(m,H,m.dump),Ae&&(m.dump="&ref_"+ke+" "+m.dump));else if(J==="[object String]")m.tag!=="?"&&wt(m,m.dump,H,U,oe);else{if(J==="[object Undefined]")return!1;if(m.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+J)}if(m.tag!==null&&m.tag!=="?"){let Ee=encodeURI(m.tag[0]==="!"?m.tag.slice(1):m.tag).replace(/!/g,"%21");m.tag[0]==="!"?Ee="!"+Ee:Ee.slice(0,18)==="tag:yaml.org,2002:"?Ee="!!"+Ee.slice(18):Ee="!<"+Ee+">",m.dump=Ee+" "+m.dump}}return!0}function G(m,H){const T=[],B=[];K(m,T,B);const L=B.length;for(let U=0;U<L;U+=1)H.duplicates.push(T[B[U]]);H.usedDuplicates=new Array(L)}function K(m,H,T){if(m!==null&&typeof m=="object"){const B=H.indexOf(m);if(B!==-1)T.indexOf(B)===-1&&T.push(B);else if(H.push(m),Array.isArray(m))for(let L=0,U=m.length;L<U;L+=1)K(m[L],H,T);else{const L=Object.keys(m);for(let U=0,z=L.length;U<z;U+=1)K(m[L[U]],H,T)}}}function q(m,H){H=H||{};const T=new Re(H);T.noRefs||G(m,T);let B=m;return T.replacer&&(B=T.replacer.call({"":B},"",B)),M(T,0,B,!0,!0)?T.dump+`
`:""}return qh.dump=q,qh}var og;function v0(){if(og)return jt;og=1;const l=p0(),s=w0();function c(u,d){return function(){throw new Error("Function yaml."+u+" is removed in js-yaml 4. Use yaml."+d+" instead, which is now safe by default.")}}return jt.Type=Gt(),jt.Schema=wg(),jt.FAILSAFE_SCHEMA=Sg(),jt.JSON_SCHEMA=Ig(),jt.CORE_SCHEMA=Mg(),jt.DEFAULT_SCHEMA=Jh(),jt.load=l.load,jt.loadAll=l.loadAll,jt.dump=s.dump,jt.YAMLException=to(),jt.types={binary:Cg(),float:Ag(),map:kg(),null:xg(),pairs:Hg(),set:Dg(),timestamp:Og(),bool:Tg(),int:Eg(),merge:Ng(),omap:Rg(),seq:bg(),str:vg()},jt.safeLoad=c("safeLoad","load"),jt.safeLoadAll=c("safeLoadAll","loadAll"),jt.safeDump=c("safeDump","dump"),jt}var b0=v0();const _g=y0(b0),{Type:sb,Schema:ub,FAILSAFE_SCHEMA:hb,JSON_SCHEMA:cb,CORE_SCHEMA:db,DEFAULT_SCHEMA:fb,load:mb,loadAll:yb,dump:gb,YAMLException:pb,types:wb,safeLoad:vb,safeLoadAll:bb,safeDump:kb}=_g,k0=`# 第一幕 · 出发前\r
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
        delivery: type\r
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
`,S0=`# 第三幕 · 桌游店\r
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
        text: 她从 A 口出来了，正在问该往哪边走。有留下的地址，可以按地图告诉她怎么走；如果地址没留下，凭印象指路就有可能说错。\r
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
        text: 唉算了，我就是口嗨。下一局开始了，我先不聊了。\r
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
        text: 你也知道。。。都怪你刚才怂恿我，我都懒得喷了。下一局开始了，我先不聊了。\r
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
        text: 唉算了，我就是口嗨。下一局开始了，我先不聊了。\r
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
`,x0=`# 第四幕 · 结缘——由 script/ch4.yaml 迁移而来\r
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
        text: 我靠，我靠，我靠，刚才打桌游的时候有个女生，我感觉她绝对对我有意思！！！\r
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
      - thought: 请妹妹先问问她\r
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
        set: { 男生意向: 问, 当面问微信: false }\r
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
        set: { 男生意向: 不问, 当面问微信: false }\r
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
        set: { 男生意向: 不问, 当面问微信: false }\r
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
        reply: 嗯，你可以先这么开口。等散场你有机会单独跟她说，再问就行。\r
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
  - id: 4.2.3-direct\r
    channel: left\r
    time: 散场后\r
    window:\r
      channel: right\r
      下界: [4.3.4, 4.3.5]\r
      上界: []\r
      说明: 女生先做出是否要主动询问的决定\r
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
        set: { 男生意向: 问, 当面问微信: true }\r
\r
  - id: 4.3.6-direct\r
    channel: right\r
    time: 散场后\r
    when: { 当面问微信: true }\r
    requires: [4.2.3-direct]\r
    lines:\r
      - from: girl\r
        text: 我刚才还在想要不要问呢，他直接走过来，说下次玩还想叫我，问能不能加微信。我说可以，就叫我同桌帮我推一下。哎，省我开口了。\r
        delivery: type\r
      - from: ai\r
        text: 他已经当面问过，她也答应了。现在只等同桌转发联系方式，可以回应她松了口气。\r
        delivery: thought\r
    choices:\r
      - thought: 接住她松了口气\r
        reply: 嗯，你们当面说好了。等你同桌把微信推过去，想聊的时候就能直接聊了。\r
\r
  - id: 4.end-no-contact\r
    channel: left\r
    time: 散场后·没有交换微信\r
    when: { 男生意向: 不问, 女生意向: 不问 }\r
    control: true\r
    lines: []\r
    ending: 未交换微信\r
`,T0=`# 第五幕 · 熟悉期 —— 由 docs/剧本审稿/第五幕-上线定稿.yaml自动生成\r
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
      当面问微信: false\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 我妹说，那女生也找她要过我微信！那不就是我俩想到一块去了？现在加上了，我第一句发啥啊，别显得我准备半天似的。\r
        delivery: type\r
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
      当面问微信: false\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 微信到手了，我妹牵的线。上次桌游我还输给她了。我对着输入框抠半天了，第一句咋整？总不能发个你好吧，像上门推销的。\r
        delivery: type\r
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
      当面问微信: false\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 反转了兄弟，我还没想好咋开口呢，她先加我了！是不是我妹跟她说啥了？你说她这啥意思啊？\r
        delivery: type\r
      - from: ai\r
        text: 她主动加了好友，他却开始猜妹妹有没有说过什么。能确定的是他们已经加上了，可以建议先打招呼，等她实际回应。\r
        delivery: thought\r
    choices:\r
      - thought: 先打招呼，看看怎么聊\r
        reply: 至少她愿意加你。你可以先发「嗨，上次桌游玩得挺开心的」。她为什么先加，等你们聊几句可能就明白了。\r
        next: 5m.1.2\r
  - id: 5m.1.1-D\r
    channel: left\r
    label: 开场·当面问\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 3\r
    when:\r
      当面问微信: true\r
    requires:\r
      - 4.3.6-direct\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 加上了，我妹给推的。我刚才当面都敢问，怎么打个招呼又卡住了。你说第一句咋发？\r
        delivery: type\r
      - from: ai\r
        text: 他当面问到了联系方式，第一句反倒有点紧张。可以从两人一起玩的桌游开口。\r
        delivery: thought\r
    choices:\r
      - thought: 给一句自然的开场\r
        reply: 可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。\r
        next: 5m.1.2\r
  - id: 5m.1.2\r
    channel: left\r
    label: 开场定稿·收敛拍（D1 傍晚，几分钟后）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 4\r
    lines:\r
      - from: boy\r
        text: 想了想，你给的那句我有点发不出来。我自己写了个：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。咋样，会不会有点傻？\r
        delivery: type\r
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
    order: 9\r
    节拍: 慢\r
    lines:\r
      - from: boy\r
        text: 发了！四十来分钟才回，就一句『记得，你也要到点睡了』。我看了半天，这算是想聊还是在跟我说晚安啊？\r
        delivery: type\r
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
        - 5f.1.1-D\r
      上界:\r
        - 5f.1.2\r
      说明: 男方收到女方实际入场路线的首句\r
  - id: 5m.1.4\r
    channel: left\r
    label: 稳住一夜（分支A·D1深夜收住，D2白天复盘）\r
    time: D2 白天（周一）\r
    timeRank: 2\r
    order: 10\r
    lines:\r
      - from: boy\r
        text: 昨晚听你的，道了晚安就真睡了，还赶在十一点前，破天荒。今早她又找我聊了两句。也没啥事，就是我还想跟她多说会儿，老想点开那个框。\r
        delivery: type\r
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
    order: 11\r
    lines:\r
      - from: boy\r
        text: 昨晚顺着翻盘那个梗还真聊起来了，聊到十一点多。十一点必睡，当天就倒了，笑死。她后来跟我说晚安。结果今天到现在一条没有……我昨晚是不是聊太多了？\r
        delivery: type\r
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
    order: 13\r
    requires:\r
      - 5f.1.2\r
    lines:\r
      - from: boy\r
        text: 刚聊完！她晚上主动来找我了，一聊就一个多钟头。其实也没啥大事，东一句西一句的，还挺舒服。我白天还在那儿瞎想，现在感觉也不用老算她多久回了。\r
        delivery: type\r
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
    order: 17\r
    lines:\r
      - from: boy\r
        text: 又聊了一个礼拜。她回得慢但都会回，我好像也习惯了。今天她在家加班，还给我发了张照片，配一个『困』。她的猫踩着键盘抢镜，叫煤球，特别敬业。你说她这算不算有点把我当自己人了？\r
        delivery: type\r
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
    order: 18\r
    节拍: 快\r
    lines:\r
      - from: boy\r
        text: 我现在一天能给她发八百条『在干嘛』。她有时候隔俩小时才回，我就又点开那个框看，明明啥都没响。客观说，我是不是有点上头？\r
        delivery: type\r
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
    order: 19\r
    lines:\r
      - from: boy\r
        text: 今天试着少发了，话打了删删了打，最后就发了句晚安。她回得跟平时一样，也没问我咋这么安静……我感觉我在演一个淡定的人。\r
        delivery: type\r
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
    order: 20\r
    lines:\r
      - from: boy\r
        text: 今天还是想找她就找了，发了好几回。她有时候一个『哈哈哈』隔俩小时才来。我有一阵真像在对着屏幕自己跟自己聊天，笑死。\r
        delivery: type\r
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
    order: 21\r
    lines:\r
      - from: boy\r
        text: 今天还是这样，不找吧心里老惦记，找吧又怕她嫌烦。线上聊得再欢，她一忙我就在这儿干等着。咋整啊？\r
        delivery: type\r
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
    order: 26\r
    lines:\r
      - from: boy\r
        text: 行，听人劝吃饱饭。我想约她周六出来吃个饭。上次桌游我还输给她了。直接问周六有空吗，会不会显得有点猴急？\r
        delivery: type\r
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
    order: 28\r
    lines:\r
      - from: boy\r
        text: 她说周六来不了了，项目临时有个节点，问改周日行不行。还发了个不好意思的表情。我知道她说了周日，但我还是有点不得劲。会不会其实不想来啊？\r
        delivery: type\r
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
    order: 30\r
    lines:\r
      - from: boy\r
        text: 见完了！吃饭散步聊了三个多小时，临走还拍了张合照。她问我下次想吃啥，说她想吃烤肉，下回带我吃。吃饭时她回了好几条工作消息，我坐那儿有点不知道干啥。还有个事，我跟她说，有次她半天没回，我半夜还刷她朋友圈，看她睡了没。她笑了下，说『你想得可真多』。我这话是不是说多了？\r
        delivery: type\r
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
    order: 32\r
    lines:\r
      - from: boy\r
        text: 睡前最后问一句。就这两周，我还有戏吧？我上次这么上心，还是给我表妹辅导作业的时候。\r
        delivery: type\r
      - from: ai\r
        text: 他想知道这两周的来往有没有继续发展的可能。今天她和他聊了三个多小时，还主动提了下次吃烤肉。可以用今天的事回应他的担心。\r
        delivery: thought\r
    choices:\r
      - thought: 用已经发生的事给他判断\r
        reply: 今天聊了三个多小时，她还提了下次一起吃烤肉，至少她愿意继续跟你见面。至于你们会不会谈恋爱，得等真的聊到这一步才知道。\r
        next: 5m.4.1\r
  - id: 5m.4.1\r
    channel: left\r
    label: 表白排练（D17，见面两天后）\r
    time: D17（周二）\r
    timeRank: 14\r
    order: 34\r
    lines:\r
      - from: boy\r
        text: 我想跟她表白。稿子打了删删了打，现在是『我挺喜欢你的，想跟你正经处对象，你考虑考虑』。读着怎么这么怪，你帮我改改。\r
        delivery: type\r
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
    order: 35\r
    节拍: 长停顿\r
    lines:\r
      - from: boy\r
        text: 发了！就用你改的那句。发完我就想把手机扔了。她一会儿在输入，一会儿又没了，我盯得心脏一抽一抽的。你说这是在想怎么回，还是想拒绝我啊？\r
        delivery: type\r
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
    order: 36\r
    节拍: 长停顿\r
    lines:\r
      - from: boy\r
        text: 你改的那句发了。我特别想撤回，又怕撤回更显得我有事。她要回一句『你说啥呢哈哈』，我下半辈子咋做人啊？\r
        delivery: type\r
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
    order: 40\r
    节拍: 慢\r
    ending: 在一起\r
    lines:\r
      - from: boy\r
        text: 她回了！！我以为凉了，结果她说『我也想试试，只是我可能不太会谈恋爱，你多担待』。我先回了三个感叹号。她这是答应了对吧？那个『只是』后面的是啥意思啊？\r
        delivery: type\r
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
    order: 5\r
    when:\r
      男生意向: 问\r
      女生意向: 问\r
      当面问微信: false\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 我同桌说，她表哥也找她要过我微信。等于我俩互相问了一遍？刚加上，他就发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？\r
        delivery: type\r
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
    order: 6\r
    when:\r
      男生意向: 不问\r
      女生意向: 问\r
      当面问微信: false\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 磨半天终于把他加上了，开场白还没憋出来呢，他先发来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。行吧，省得我想了。咋接？\r
        delivery: type\r
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
    order: 7\r
    when:\r
      男生意向: 问\r
      女生意向: 不问\r
      当面问微信: false\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 我同桌那个表哥加我了。我刚点通过，他消息就来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人是有多着急，哈哈。回啥好啊？\r
        delivery: type\r
      - from: ai\r
        text: 他发消息的速度让她觉得好笑，她也在考虑怎么回应。可以给一句低压力的答复，聊天要不要继续，等她自己感受。\r
        delivery: thought\r
    choices:\r
      - thought: 先回一句，再看怎么聊\r
        reply: 可以回「记得，你也要到点睡了」。顺着他的梗逗一句就行，接下来想聊多少，看你自己舒服不舒服。\r
        next: 5f.1.2\r
  - id: 5f.1.1-D\r
    channel: right\r
    label: 开场·当面问\r
    time: D1 晚\r
    timeRank: 1\r
    order: 8\r
    when:\r
      当面问微信: true\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 那个刚才当面问我的男生，加上了。我同桌把我微信推给他了。他刚发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？\r
        delivery: type\r
      - from: ai\r
        text: 她已经收到他的第一条消息，觉得开场好笑。可以给一句轻松的回复，顺着十一点睡觉开个玩笑。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着十一点的梗回\r
        reply: 回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。\r
        next: 5f.1.2\r
  - id: 5f.1.2\r
    channel: right\r
    label: 初聊反馈（D2 晚）\r
    time: D2 晚\r
    timeRank: 3\r
    order: 12\r
    lines:\r
      - from: girl\r
        text: 昨晚我先回了句『记得，你也要到点睡了』，本来就随口一逗。这两天聊下来比我想的舒服，有话就接，我没回他也没催。今天他发了几条，我忙着还没仔细回。晚上有空了，我去找他唠两句。\r
        delivery: type\r
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
    order: 14\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 他回消息也太勤快了……我下班一看攒了一堆。不是不想理他，就是累，连回啥都懒得想。对了，他头像是只小熊，看着挺憨。哎，今晚我就想回个什么，让他知道我看见了。\r
        delivery: type\r
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
    order: 15\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 我真照你说的说累了。结果他秒回一大段，什么『好好休息』『别太拼』『记得吃晚饭』……排比句都出来了。我本来就回不动，看见那一大段更不知道说啥，就回了个嗯。我是不是有点不知好歹？\r
        delivery: type\r
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
    order: 16\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 丢了个摊倒的表情过去，他正经回我『你早点休息』，还带了个他自己的表情包，土得掉渣。就是……有点可爱。算了，我洗漱去了。\r
        delivery: type\r
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
    order: 22\r
    requires:\r
      - 5m.2.2\r
    lines:\r
      - from: girl\r
        text: 这一周多一直断断续续聊着。他今天突然夸我开朗，说『跟你聊天不累』。那是，我不在办公室他们都没那么热闹，周末也老有人叫我出去。他坐那儿话倒不多，手机上还天天找我。反正听他夸我还挺开心的，嘿嘿。\r
        delivery: type\r
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
    order: 23\r
    lines:\r
      - from: girl\r
        text: 晚上跟闺蜜吃饭，不知道怎么又说起他了。我说有个闷葫芦天天找我聊天，她们立马开始起哄。我还说就是普通朋友啊，结果回家路上自己一直笑。烦死了。\r
        delivery: type\r
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
    order: 24\r
    lines:\r
      - from: girl\r
        text: 睡前又想了下你问的那个。还真想不出来。我累了就点个外卖，自己刷会儿手机，也不想找谁。明明平时跟谁都能聊，真想说点啥了好像又差一口气……说不上来，今晚有点怪怪的。\r
        delivery: type\r
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
    order: 25\r
    lines:\r
      - from: girl\r
        text: 他今天问我家是哪儿的、家里都有谁，我顺手聊别的去了。他也没接着问。这点我还挺喜欢的，换个人一通问我早烦了。\r
        delivery: type\r
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
    order: 27\r
    requires:\r
      - 5m.3.1\r
    lines:\r
      - from: girl\r
        text: 他问我『周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭』。我答应了，还挺会找台阶的。我同桌就是他表妹，兜了一圈还真约上了。就是明天项目有个节点，搞不好得加班。要真累成那样我也不想临时鸽他。还有，见面我要注意啥吗？\r
        delivery: type\r
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
    order: 29\r
    requires:\r
      - 5m.3.2\r
    lines:\r
      - from: girl\r
        text: 乌鸦嘴，项目真炸了。周六去不了，我跟他说改周日行不行。他就回了句『行，周日，你忙你的』。我看了好几遍，怎么有点像不高兴？\r
        delivery: type\r
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
    order: 31\r
    requires:\r
      - 5m.3.3\r
    lines:\r
      - from: girl\r
        text: 吃完了！本来还怕见了尴尬，结果吃饭散步聊了三个多小时，临走还拍了张合照。饭吃到一半我还回了好几条工作消息，回完他也能接上。散步的时候他跟我说，有次我半天没回，他半夜还在刷我朋友圈，看我睡了没。我愣了一下，笑着说『你想得可真多』。不过我后来还在想，是不是家里给了特别多爱，才这么会关心人？吃啥逛啥他都听我的，也挺省心。\r
        delivery: type\r
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
    order: 33\r
    lines:\r
      - from: girl\r
        text: 躺下了又想起来，他啥都听我的，这点其实我有点介意。但跟他待着是真不用费脑子。前几天家里的事我没接着聊，他也就没问了。可能……我就是想跟一个相处起来不费劲的人待着吧。\r
        delivery: type\r
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
    order: 37\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 他跟我表白了。说喜欢我，问我怎么想。我盯屏幕得有十分钟了。说不心动是假的，但我一想到真要谈了就怕，之前一认真就搞砸。你说我这种，能谈好吗？\r
        delivery: type\r
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
    order: 38\r
    节拍: 长停顿\r
    lines:\r
      - from: girl\r
        text: 我把那句打出来了：『我也想试试，只是我可能不太会谈恋爱，你多担待』。打完又盯着看了半天。越看越觉得这话有点重，像把我自己交出去了。发还是不发，你帮我看看。\r
        delivery: type\r
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
    order: 39\r
    节拍: 长停顿\r
    lines:\r
      - from: girl\r
        text: 我按你说的先打了『我们先试试』，又给删了。就觉得少了点啥，好像现在不说，我以后搞砸了又得怪自己。也可能是我想太远了，他就是问我要不要试试。\r
        delivery: type\r
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
    order: 41\r
    requires:\r
      - 5m.4.4\r
    节拍: 慢\r
    ending: 在一起\r
    lines:\r
      - from: girl\r
        text: 发了！『我也想试试，只是我可能不太会谈恋爱，你多担待』。我手一直抖，跟考试交卷似的。他秒回了三个感叹号……好家伙。发出去那一下反倒没那么吓人了。\r
        delivery: type\r
        节拍:\r
          pauseBeforeMs: 1800\r
      - from: ai\r
        text: 她发出了自己愿意试试的答复，也收到了对方的回应。她比发之前放松了，可以顺着这个开心的小插曲收尾，暂时不用讨论更远的事。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她发出去后的轻松\r
        reply: 三个感叹号，看来他刚才也没少等。你已经把最难开口的话发出去了，今天可以先开心一会儿。\r
`,E0=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.\r
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
`,A0=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.\r
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
          我刚想问他今天出不出来，打完又没发。昨天一天没理他。消息我都看见了，就是故意没回，当时也想让他等一回。现在突然问他出来吗，感觉怪怪的。\r
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
        reply: 可以答应见面，也把你昨天等消息的感受说出来：“好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？”\r
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
          他回：好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？\r
          我就是气他前天那么问，可我确实没跟他说过我想自己待会儿。这句该怎么回？\r
        delivery: type\r
      - from: ai\r
        text: 他告诉她等不到回复很难受，也提出了具体请求。她可以交代昨天在生气，留到见面再谈经过。\r
        delivery: thought\r
    choices:\r
      - thought: 回应他等不到消息\r
        reply: 可以回：“我昨天就是气你那样问，没跟你说一声。下午见了说吧。”先回应他等不到消息这件事，前天的争执见面再说。\r
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
        text: 发了，我昨天就是气你那样问，没跟你说一声。下午见了说吧。\r
        delivery: type\r
      - from: ai\r
        text: 她已经解释了没回复的原因，也表达了愿意当面谈。现在需要留出让对方回应的时间，简短确认即可，不反复要求她补充更完整的解释。\r
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
          发了。她回，我昨天就是气你那样问，没跟你说一声。下午见了说吧。\r
          我又问了在哪碰头，等她定地方。\r
        delivery: type\r
      - from: ai\r
        text: 女友解释了昨天为什么没回复，也愿意见面谈。可以先安排见面，再当面说等待的经历。\r
        delivery: thought\r
    choices:\r
      - thought: 让话留到见面慢慢说\r
        reply: 她告诉你昨天为什么没回，也愿意当面聊。先把见面约下来，你昨天怎么等过来的，也可以到时候讲。\r
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
        reply: 她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。\r
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
        reply: 她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。\r
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
        reply: 她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。\r
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
        reply: 她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。\r
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
`,I0=`# Generated by tools/build-chapter-08.mjs from the reviewed Mermaid.\r
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
`,na={incoming:2.15,reply:2.75,thought:1.7,indicator:1.6,after:.85,sameTime:.95,timeJump:.45},Wi={极快:{pauseBeforeMs:0,indicatorMs:280,typeIntervalMs:40,afterMs:220},快:{pauseBeforeMs:100,indicatorMs:600,typeIntervalMs:65,afterMs:450},正常:{pauseBeforeMs:240,indicatorMs:1e3,typeIntervalMs:100,afterMs:900},慢:{pauseBeforeMs:850,indicatorMs:1500,typeIntervalMs:145,afterMs:1400},长停顿:{pauseBeforeMs:1700,indicatorMs:2100,typeIntervalMs:165,afterMs:2100}},Yg="正常",jg={pauseBeforeMs:0,indicatorMs:0,typeIntervalMs:0,afterMs:0};function M0(l,s,c=Math.random){return!l||!s||l.section!==s.section?0:s.time&&l.time!==s.time?2200:800+Math.round(c()*400)}function O0(l,s){return l==="type"&&!s}function zg(l){if(typeof l=="string")return Wi[l]?null:`未知节拍预设「${l}」，可用：${Object.keys(Wi).join(" / ")}`;if(!l||typeof l!="object"||Array.isArray(l))return"节拍必须是预设名或数值对象";const s=["pauseBeforeMs","indicatorMs","typeIntervalMs","afterMs"];for(const[c,u]of Object.entries(l)){if(!s.includes(c))return`节拍里有未知字段「${c}」`;if(typeof u!="number"||!Number.isFinite(u)||u<0||u>2e4)return`节拍.${c} 必须是 0~20000 之间的毫秒数`}return null}function Nl(l,s=!1){if(s)return{...jg};let c={...Wi[Yg]};for(const u of l)if(u!==void 0)if(typeof u=="string"){const d=Wi[u];d&&(c={...d})}else c={...c,...u};return c}const Bg=["桌游聚会","加微信后","约见与表白","交往第一天","第一次争执","周日见面","纪念日改约","楼下的争执","争执之后"],N0=5,lg=new Set(["3.4.1","4.1.1","6m.M5"]);function qg(l,s,c){var g,S,C;const{channel:u}=s;if(!s.context||s.control)return l;const d=l.messages.filter(Z=>Z.channel===u);if(!d.length)return l;const f=new Map(c.map(Z=>[Z.id,Z]));let p=1,v=s.context.time,k=d.length;const b=lg.has(s.id);for(let Z=d.length-1;Z>=0;Z--){const ee=f.get(d[Z].beatId);if(((g=ee==null?void 0:ee.context)==null?void 0:g.section)!==s.context.section||b&&ee.id!==s.id||((S=ee.context)==null?void 0:S.time)!==v&&++p>N0)break;if(lg.has(ee.id)&&ee.id!==s.id&&Z>0&&d[Z-1].beatId!==ee.id){k=Z;break}v=(C=ee.context)==null?void 0:C.time,k=Z}if(!k)return l;const w=new Set(d.slice(0,k));return{...l,messages:l.messages.filter(Z=>!w.has(Z))}}function Cl(l){return typeof l=="number"&&Number.isInteger(l)&&l>=1&&l<=Bg.length}function C0(l){var f;const{id:s,chapter:c,time:u,channel:d}=l;switch(c){case 1:return{section:1,time:"聚会当天 · 出发前"};case 3:return{section:1,time:d==="left"?"到店前后":s.startsWith("3.4.1")||s==="3.4.2"?"在路上":"到店后 · 局间"};case 4:return{section:1,time:"散场后"};case 5:if(/^5[fm]\.3\.2$/.test(s))return{section:3,time:"周五 · 改期"};if(/^5[fm]\.3\.[34]$/.test(s))return{section:3,time:"周日晚 · 见面后"};if(/^5[fm]\.4\./.test(s))return{section:3,time:"见面两天后"};if(/^5[fm]\.3\./.test(s))return{section:3,time:"加微信后第 12 天 · 晚上"};{const p=(f=u==null?void 0:u.match(/^D(2|3|9|10|11|12)\b/))==null?void 0:f[1];if(p)return{section:2,time:`加微信后第 ${p} 天`}}return{section:2,time:"加微信当天"};case 6:return{section:4,time:/^(6m\.(M5|MEMCHOICE|M7|END)|6f\.(F[678]|END))/.test(s)?"当晚":"交往第 1 天"};case 7:return u!=null&&u.includes("周日")?{section:6,time:/ 19:/.test(u)?"周日傍晚 · 见面后":"周日上午"}:u!=null&&u.includes("周六")?{section:5,time:"周六晚"}:{section:5,time:/ 22:/.test(u??"")?"聚餐结束后":"交往第 17 天 · 周五"};case 8:return/^8[fm]\.[FM]305G$/.test(s)?{section:9,time:"当晚 · 见面后"}:/^8[fm]\.[FM]3/.test(s)?{section:9,entryTime:u}:/^8[fm]\.[FM](10[5-7]|2|READY)/.test(s)?{section:8,entryTime:u,.../^8[fm]\.[FM]2/.test(s)?{time:d==="left"?"19:52":"20:12"}:{}}:{section:7,time:/^8[fm]\.[FM]10[34]$/.test(s)?"傍晚 · 改约":"一个月纪念日"};default:throw new Error(`未配置节拍 ${s} 的会话段`)}}const Ug=1e6;function Ka(l){return l.sortKey!==void 0?l.sortKey:(l.chapter??0)*Ug+(l.order??0)}function Yl(l,s){const c=Ka(l)-Ka(s);return c!==0?c:l.id.localeCompare(s.id,"zh-Hans-CN")}function R0(l){const s=new Map,c=l.beats.map(d=>{var b;const f=d.chapter??0,p=s.get(f)??0;s.set(f,p+1);const v=(b=l.axes)==null?void 0:b[f],k=d.timeRank??(d.time&&v?v.indexOf(d.time):void 0);return{...d,order:d.order??p,sortKey:f*Ug+(d.order??p),...k!==void 0&&k>=0?{timeRank:k}:{}}}),u=[...c].sort(Yl);return{...l,beats:c,orderedBeats:u,beatById:new Map(c.map(d=>[d.id,d]))}}function jl(l,s){const c=l.window;return c?c.下界.length>0&&!c.下界.some(u=>s.has(u))?"waiting":c.上界.some(u=>s.has(u))?"closed":"open":"none"}function H0(l,s){var u,d;if(jl(l,s)!=="closed"||s.has(l.id))return null;const c=((u=l.window)==null?void 0:u.上界.filter(f=>s.has(f)))??[];return`区间越界：拍 ${l.id} 应在对侧 ${((d=l.window)==null?void 0:d.下界.join("/"))||"起点"} 与 ${c.join("/")} 之间播出，但 ${c.join("/")} 已完成`}const D0=["type","pop","image","thought"];function _0(l){var w,g;const s=[],c=l.beats.map(S=>S.id),u=new Set;l.beats.length===0&&s.push("剧本里没有任何节拍。");for(const S of c){if(!S.trim()){s.push("有节拍缺少 id。");continue}u.has(S)&&s.push(`节拍 id 重复：${S}`),u.add(S)}const d=new Map;for(const S of l.beats)d.has(S.id)||d.set(S.id,S);const f=new Set;for(const S of l.speakers)f.has(S.id)&&s.push(`人物 id 重复：${S.id}`),f.add(S.id),S.channel&&S.channel!=="left"&&S.channel!=="right"&&s.push(`人物 ${S.id} 的侧栏不是 left 或 right。`);const p=z0(l.beats);p&&s.unshift(`节拍依赖成环：${p.join(" → ")}。这会让玩家一直等下去，剧本不能开始。`);const v=new Set(l.beats.flatMap(S=>(S.记忆候选??[]).map(C=>C.缩略标签)));for(const S of l.beats)for(const C of S.choices??[]){for(const Z of C.记忆后继??[])(!Z.all.length||Z.all.some(ee=>!l.beats.some(ne=>{var Se;return ne.channel===S.channel&&((Se=ne.记忆候选)==null?void 0:Se.some(we=>we.缩略标签===ee))})))&&s.push(`节拍 ${S.id} 的记忆后继需要本窗有效候选。`),Z.next||s.push(`节拍 ${S.id} 的记忆后继缺少目标。`),Lh(s,d,S,Z.next,"记忆后继");C.next&&C.记忆后继&&s.push(`节拍 ${S.id} 的选项同时声明固定后继与记忆后继。`),C.需记忆&&!v.has(C.需记忆)&&s.push(`节拍 ${S.id} 的选项「${C.thought}」需要记忆「${C.需记忆}」，但没有任何节拍提供这条候选。`)}const k=new Map;for(const S of l.beats){if(S.order===void 0)continue;const C=`${S.chapter??0}:${S.order}`;k.has(C)?s.push(`节拍 ${k.get(C)} 与 ${S.id} 的章内序号重复（${C}），播出顺序会不确定。`):k.set(C,S.id)}const b=new Set((l.endings??[]).map(S=>S.id));for(const S of l.endings??[]){for(const C of S.requires)d.has(C)||s.push(`终局「${S.id}」要求的拍「${C}」不存在。`);S.requires.length===0&&s.push(`终局「${S.id}」没有写 requires，永远无法判定达成。`)}for(const S of l.beats){S.channel!=="left"&&S.channel!=="right"&&s.push(`节拍 ${S.id} 的 channel 必须是 left 或 right。`),S.lines.length===0&&!S.control&&s.push(`节拍 ${S.id} 没有任何台词。`),S.control&&(S.lines.length>0||(w=S.choices)!=null&&w.length)&&s.push(`控制拍 ${S.id} 不能含台词或玩家选项。`),S.choices&&S.choices.length>0&&S.next&&s.push(`节拍 ${S.id} 已经有选项，就不能再写节拍上的 next。`),Uh(s,S.节拍,`节拍 ${S.id} 的 节拍`);for(const C of S.lines)Uh(s,C.节拍,`节拍 ${S.id} 的台词 节拍`);for(const C of S.choices??[])Uh(s,C.节拍,`节拍 ${S.id} 的选项 节拍`);for(const C of S.requires??[])d.has(C)||s.push(`节拍 ${S.id} 的 requires「${C}」不存在。`);if(S.when)for(const[C,Z]of Object.entries(S.when))C.trim()||s.push(`节拍 ${S.id} 的 when 有一个空旗标名。`),sg(Z)||s.push(`节拍 ${S.id} 的 when.${C} 只能是文字、数字或是否。`);Y0(s,S,l),j0(s,S,d);for(const C of S.lines){C.text.trim()||s.push(`节拍 ${S.id} 有一句空台词。`),D0.includes(C.delivery)||s.push(`节拍 ${S.id} 的呈现方式无法识别：${String(C.delivery)}`);const Z=l.speakers.find(ee=>ee.id===C.from);Z?Z.channel&&Z.channel!==S.channel&&s.push(`节拍 ${S.id} 在${ei(S.channel)}，却写了${Z.name}的台词。`):s.push(`节拍 ${S.id} 的说话人「${C.from}」不在人物表里。`)}for(const C of S.choices??[]){if(C.thought.trim()||s.push(`节拍 ${S.id} 有一个空的想法。`),C.reply.trim()||s.push(`节拍 ${S.id} 有一个选项没有写死回复。`),C.set)for(const[Z,ee]of Object.entries(C.set))sg(ee)||s.push(`节拍 ${S.id} 的旗标 ${Z} 只能是文字、数字或是否。`);Lh(s,d,S,C.next,"选项")}for(const C of S.记忆候选??[]){if(!C.短句.trim()){s.push(`节拍 ${S.id} 的记忆候选「${C.缩略标签}」缺少短句。`);continue}[...S.lines.map(ee=>ee.text),...(S.choices??[]).map(ee=>ee.reply)].join(`
`).includes(C.短句)||s.push(`节拍 ${S.id} 的记忆候选「${C.缩略标签}」的短句没有出现在本拍的台词或回复里，玩家存不进这条记忆。`)}S.ending!==void 0&&!b.has(S.ending)&&s.push(`节拍 ${S.id} 声明终局「${S.ending}」，但剧本没有在 endings 里声明它。`),(g=S.choices)!=null&&g.length||Lh(s,d,S,S.next,"next")}return s.length>0?{ok:!1,error:s.join(`
`)}:{ok:!0}}function Uh(l,s,c){if(s===void 0)return;const u=zg(s);u&&l.push(`${c}：${u}`)}function Y0(l,s,c){var f;if(s.time===void 0)return;const u=(f=c.axes)==null?void 0:f[s.chapter??0];if(!u){l.push(`节拍 ${s.id} 写了 time「${s.time}」，但第 ${s.chapter??0} 章没有顶层 时间轴。`);return}const d=u.indexOf(s.time);d<0?l.push(`节拍 ${s.id} 的 time「${s.time}」不在第 ${s.chapter??0} 章的时间轴里（必须一字不差）。`):s.timeRank!==void 0&&s.timeRank!==d&&l.push(`节拍 ${s.id} 的 timeRank=${s.timeRank} 与时间轴下标 ${d} 不一致。`)}function j0(l,s,c){const u=s.window;if(!u)return;u.上界.length===0&&u.下界.length===0&&l.push(`节拍 ${s.id} 的区间门没有上下界。`);const d=s.channel==="left"?"right":"left";u.channel!==d&&l.push(`节拍 ${s.id} 在${ei(s.channel)}，区间门却度量了同侧（${u.channel}）。`);for(const[f,p]of[["下界",u.下界],["上界",u.上界]])for(const v of p){const k=c.get(v);if(!k){l.push(`节拍 ${s.id} 的区间${f}「${v}」不存在。`);continue}k.channel!==u.channel&&l.push(`节拍 ${s.id} 的区间${f}「${v}」不在被度量的对侧 ${u.channel}。`),f==="下界"&&Ka(k)>=Ka(s)&&l.push(`节拍 ${s.id} 的区间下界「${v}」不早于本拍，区间永远无法成立。`),f==="上界"&&Ka(k)<=Ka(s)&&l.push(`节拍 ${s.id} 的区间上界「${v}」不晚于本拍，区间会被提前关闭。`)}}function Lh(l,s,c,u,d){if(!u)return;const f=s.get(u);if(!f){l.push(`节拍 ${c.id} 的${d}指向不存在的「${u}」。`);return}f.channel!==c.channel&&l.push(`节拍 ${c.id} 在${ei(c.channel)}，${d}却指向另一侧的「${u}」。`)}function sg(l){return typeof l=="string"||typeof l=="number"||typeof l=="boolean"}function ei(l){return l==="left"?"左侧":"右侧"}function z0(l){const s=new Map(l.map(f=>[f.id,f])),c=new Map,u=[],d=f=>{var p;c.set(f,1),u.push(f);for(const v of((p=s.get(f))==null?void 0:p.requires)??[]){if(!s.has(v))continue;const k=c.get(v)??0;if(k===1){const b=u.indexOf(v);return[...u.slice(b),v]}if(k===0){const b=d(v);if(b)return b}}return u.pop(),c.set(f,2),null};for(const f of l)if((c.get(f.id)??0)===0){const p=d(f.id);if(p)return p}return null}const B0=[k0,S0,x0,T0,E0,A0,I0],q0=["title","chapter","speakers","beats","时间轴","默认节拍","endings"],U0=["id","name","channel"],L0=["id","channel","requires","when","aside","lines","choices","next","记忆候选","清空记忆","chapter","order","sortKey","time","timeRank","label","window","ending","节拍","control"],G0=["from","text","delivery","caption","节拍","timing"],X0=["thought","reply","set","next","需记忆","记忆后继","节拍","timing"],F0=["缩略标签","短句","类型","线"],Q0=["channel","下界","上界","说明"],Z0=["id","title","requires","set"];function K0(){try{const l=V0(B0.map(c=>J0(c))),s=_0(l);return s.ok?{script:l,error:null}:{script:null,error:s.error}}catch(l){return{script:null,error:l instanceof Error?l.message:"剧本无法解析"}}}function V0(l){var d,f,p;const s=l.flatMap((v,k)=>{var w,g;const b=((g=(w=v.chapters)==null?void 0:w[0])==null?void 0:g.index)??k+1;return v.beats.map(S=>{const C={...S,chapter:S.chapter??b};return{...C,context:C0(C)}})}),c={};for(const v of l)for(const[k,b]of Object.entries(v.axes??{}))c[Number(k)]=b;const u={title:((d=l[0])==null?void 0:d.title)??"",speakers:((f=l[0])==null?void 0:f.speakers)??[],beats:s,chapters:l.map((v,k)=>{var b,w;return{index:((w=(b=v.chapters)==null?void 0:b[0])==null?void 0:w.index)??k+1,title:v.title}}),axes:c,endings:l.flatMap(v=>v.endings??[]),默认节拍:(p=l.find(v=>v.默认节拍))==null?void 0:p.默认节拍};return R0(u)}function J0(l){const s=_g.load(l);if(!Un(s))throw new Error("剧本不是一个对象");ir(s,q0,"剧本顶层");const c=ot(s.title,"剧本缺少标题"),u=Gg(s.chapter),d=W0(s.speakers),f=s.时间轴===void 0?void 0:Lg(s.时间轴,"时间轴"),p=s.默认节拍===void 0?void 0:zl(s.默认节拍,"剧本默认节拍"),v=typeof p=="string"?p:void 0,k=s.endings===void 0?void 0:n1(s.endings),b=$0(s.beats,v).map(w=>u===void 0?w:{...w,chapter:u});return{title:c,speakers:d,beats:b,chapters:u===void 0?void 0:[{index:u,title:c}],axes:u!==void 0&&f?{[u]:f}:void 0,endings:k,默认节拍:typeof p=="string"?p:void 0}}function ir(l,s,c){const u=Object.keys(l).filter(d=>!s.includes(d));if(u.length>0)throw new Error(`${c} 有引擎不认识的字段：${u.join("、")}。若剧本新增了结构，先扩 src/engine 的字段契约，不要让它被静默丢弃。`)}function W0(l){if(!Array.isArray(l)||l.length===0)throw new Error("剧本缺少人物表");return l.map((s,c)=>{if(!Un(s))throw new Error(`第 ${c+1} 个人物无法读取`);ir(s,U0,`第 ${c+1} 个人物`);const u=ot(s.id,`第 ${c+1} 个人物缺少 id`),d=ot(s.name,`人物 ${u} 缺少名字`),f=s.channel===void 0?void 0:$h(s.channel,u);return{id:u,name:d,channel:f}})}function $0(l,s){if(!Array.isArray(l))throw new Error("剧本缺少 beats");return l.map((c,u)=>{if(!Un(c))throw new Error(`第 ${u+1} 个节拍无法读取`);const d=ot(c.id,`第 ${u+1} 个节拍缺少 id`);ir(c,L0,`节拍 ${d}`);const f=$h(c.channel,d);if(c.control!==void 0&&typeof c.control!="boolean")throw new Error(`节拍 ${d} 的 control 必须为布尔值`);const p=c.节拍===void 0?void 0:zl(c.节拍,`节拍 ${d} 的 节拍`),v=[s,p],k=r1(c.lines,d,v),b=c.choices===void 0?void 0:a1(c.choices,d,v),w=c.requires===void 0?void 0:Rl(c.requires,d,"requires"),g=c.when===void 0?void 0:Wh(c.when,d),S=c.aside===void 0?void 0:ot(c.aside,`节拍 ${d} 的自言自语无法读取`),C=c.next===void 0?void 0:ot(c.next,`节拍 ${d} 的 next 无法读取`),Z=c.记忆候选===void 0?void 0:P0(c.记忆候选,d),ee=c.清空记忆===void 0?void 0:e1(c.清空记忆,d),ne=c.order===void 0?void 0:Gh(c.order,`节拍 ${d} 的 order`),Se=c.time===void 0?void 0:ot(c.time,`节拍 ${d} 的 time 无法读取`),we=c.timeRank===void 0?void 0:Gh(c.timeRank,`节拍 ${d} 的 timeRank`),he=c.label===void 0?void 0:ot(c.label,`节拍 ${d} 的 label 无法读取`),se=c.window===void 0?void 0:t1(c.window,d),be=c.ending===void 0?void 0:ot(c.ending,`节拍 ${d} 的 ending 无法读取`),Me=c.sortKey===void 0?void 0:Gh(c.sortKey,`节拍 ${d} 的 sortKey`),xe=c.chapter===void 0?void 0:Gg(c.chapter);return{id:d,channel:f,control:c.control,lines:k,choices:b,requires:w,when:g,aside:S,next:C,记忆候选:Z,清空记忆:ee,order:ne,time:Se,timeRank:we,label:he,window:se,ending:be,sortKey:Me,chapter:xe,...p!==void 0?{节拍:p}:{}}})}function P0(l,s){if(!Array.isArray(l))throw new Error(`节拍 ${s} 的记忆候选无法读取`);return l.map((c,u)=>{if(!Un(c))throw new Error(`节拍 ${s} 的第 ${u+1} 条记忆候选无法读取`);return ir(c,F0,`节拍 ${s} 的第 ${u+1} 条记忆候选`),{缩略标签:ot(c.缩略标签,`节拍 ${s} 的第 ${u+1} 条记忆候选缺少缩略标签`),短句:ot(c.短句,`节拍 ${s} 的第 ${u+1} 条记忆候选缺少短句`),类型:c.类型===void 0?void 0:ot(c.类型,`节拍 ${s} 的记忆候选类型无法读取`),线:c.线===void 0?void 0:ot(c.线,`节拍 ${s} 的记忆候选线无法读取`)}})}function e1(l,s){if(l==="all"||l==="left"||l==="right")return l;throw new Error(`节拍 ${s} 的清空记忆只能是 all、left 或 right`)}function t1(l,s){if(!Un(l))throw new Error(`节拍 ${s} 的 window 无法读取`);ir(l,Q0,`节拍 ${s} 的 window`);const c=$h(l.channel,`节拍 ${s} 的 window`),u=l.下界===void 0?[]:Rl(l.下界,s,"window.下界"),d=Rl(l.上界,s,"window.上界"),f=l.说明===void 0?void 0:ot(l.说明,`节拍 ${s} 的 window.说明 无法读取`);return{channel:c,下界:u,上界:d,...f?{说明:f}:{}}}function n1(l){if(!Array.isArray(l))throw new Error("endings 必须是列表");return l.map((s,c)=>{if(!Un(s))throw new Error(`第 ${c+1} 个 endings 无法读取`);ir(s,Z0,`第 ${c+1} 个 endings`);const u=ot(s.id,`第 ${c+1} 个 endings 缺少 id`);return{id:u,title:ot(s.title,`终局 ${u} 缺少 title`),requires:Rl(s.requires,u,"终局 requires"),set:s.set===void 0?void 0:Wh(s.set,u)}})}function r1(l,s,c){if(!Array.isArray(l))throw new Error(`节拍 ${s} 缺少台词`);return l.map((u,d)=>{if(!Un(u))throw new Error(`节拍 ${s} 的第 ${d+1} 句无法读取`);ir(u,G0,`节拍 ${s} 的第 ${d+1} 句`);const f=ot(u.from,`节拍 ${s} 的第 ${d+1} 句缺少说话人`),p=ot(u.text,`节拍 ${s} 的第 ${d+1} 句缺少文字`),v=o1(u.delivery,s),k=u.caption===void 0?void 0:ot(u.caption,`节拍 ${s} 的图说无法读取`),b=u.节拍===void 0?void 0:zl(u.节拍,`节拍 ${s} 的第 ${d+1} 句 节拍`);return{from:f,text:p,delivery:v,...k!==void 0?{caption:k}:{},...b!==void 0?{节拍:b}:{},timing:Nl([...c,b])}})}function a1(l,s,c){if(!Array.isArray(l))throw new Error(`节拍 ${s} 的选项无法读取`);return l.map((u,d)=>{if(!Un(u))throw new Error(`节拍 ${s} 的第 ${d+1} 个选项无法读取`);ir(u,X0,`节拍 ${s} 的第 ${d+1} 个选项`);const f=ot(u.thought,`节拍 ${s} 的第 ${d+1} 个想法是空的`),p=ot(u.reply,`节拍 ${s} 的第 ${d+1} 个回复是空的`),v=u.next===void 0?void 0:ot(u.next,`节拍 ${s} 的选项 next 无法读取`),k=u.set===void 0?void 0:Wh(u.set,s),b=u.需记忆===void 0?void 0:ot(u.需记忆,`节拍 ${s} 的需记忆无法读取`),w=u.节拍===void 0?void 0:zl(u.节拍,`节拍 ${s} 的第 ${d+1} 个选项 节拍`),g=u.记忆后继===void 0?void 0:i1(u.记忆后继,s);return{thought:f,reply:p,...g!==void 0?{记忆后继:g}:{},...v!==void 0?{next:v}:{},...k!==void 0?{set:k}:{},...b!==void 0?{需记忆:b}:{},...w!==void 0?{节拍:w}:{},timing:Nl([...c,w])}})}function i1(l,s){if(!Array.isArray(l)||!l.length)throw new Error(`节拍 ${s} 缺少记忆后继`);return l.map(c=>{if(!Un(c))throw new Error(`节拍 ${s} 的记忆后继无法读取`);return ir(c,["all","next"],`节拍 ${s} 的记忆后继`),{all:Lg(c.all,`节拍 ${s} 的记忆后继条件`),next:ot(c.next,`节拍 ${s} 缺少记忆后继目标`)}})}function zl(l,s){const c=zg(l);if(c)throw new Error(`${s}：${c}`);return l}function Wh(l,s){if(!Un(l))throw new Error(`节拍 ${s} 的旗标无法读取`);const c={};for(const[u,d]of Object.entries(l)){if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean")throw new Error(`节拍 ${s} 的旗标 ${u} 只能是文字、数字或是否`);c[u]=d}return c}function Rl(l,s,c){if(!Array.isArray(l)||l.some(u=>typeof u!="string"))throw new Error(`节拍 ${s} 的 ${c} 必须是 id 列表`);return l}function Lg(l,s){if(!Array.isArray(l)||l.some(c=>typeof c!="string"))throw new Error(`${s} 必须是文字列表`);return l}function $h(l,s){if(l!=="left"&&l!=="right")throw new Error(`${s} 的 channel 必须是 left 或 right`);return l}function o1(l,s){if(l!=="type"&&l!=="pop"&&l!=="image"&&l!=="thought")throw new Error(`节拍 ${s} 的呈现方式必须是 type、pop、image 或 thought`);return l}function Gh(l,s){if(typeof l!="number"||!Number.isInteger(l)||l<0)throw new Error(`${s} 必须是非负整数`);return l}function Gg(l){if(l!==void 0){if(typeof l!="number"||!Number.isInteger(l)||l<1)throw new Error("chapter 必须是从 1 开始的整数");return l}}function ot(l,s){if(typeof l!="string")throw new Error(s);return l.trim()}function Un(l){return typeof l=="object"&&l!==null&&!Array.isArray(l)}const Xg=["left","right"];function Qh(l,s,c){var b,w,g;const u=((b=l.archive)==null?void 0:b[s])??[],d=(w=l.context)==null?void 0:w[s],f=l.chapter[s];if(u.some(S=>d===void 0?S.chapter===f:S.section===d))return l;const p=l.messages.filter(S=>S.channel===s&&S.delivery!=="thought").map(S=>S.beatId),v=d===void 0?[...new Set(p)]:Fg(c,s,[...l.completed,...p]).filter(S=>{var C;return((C=S.context)==null?void 0:C.section)===d}).map(S=>S.id);if(v.length===0)return l;const k={chapter:((g=c.find(S=>S.id===v[0]))==null?void 0:g.chapter)??f,beatIds:v,...d===void 0?{}:{section:d}};return{...l,archive:{left:[],right:[],...l.archive,[s]:[...u,k]}}}function Fg(l,s,c){const u=new Map(l.map(d=>[d.id,d]));return[...new Set(c)].flatMap(d=>{const f=u.get(d);return(f==null?void 0:f.channel)===s&&!f.control?[f]:[]})}function l1(l,s,c){var b,w,g,S,C;if(l.context!==void 0||!s.some(Z=>Z.context))return l;const u={},d={...l.ritual},f={left:((b=l.archive)==null?void 0:b.left)??[],right:((w=l.archive)==null?void 0:w.right)??[]},p=l.endings.some(Z=>["未交换微信","分手","和好"].includes(Z));for(const Z of Xg){const ee=Fg(s,Z,[...f[Z].flatMap(he=>he.beatIds),...l.completed,...l.messages.filter(he=>he.channel===Z).map(he=>he.beatId),...l.pending[Z]?[l.pending[Z].beatId]:[]]);let ne=ee.reduce((he,se)=>{var Me;const be=(Me=se.context)==null?void 0:Me.section;return be!==void 0&&(he===void 0||be>he)?be:he},void 0),Se=d[Z];if(Se&&Se.contextTo===void 0){const he=(S=(g=c(Z))==null?void 0:g.context)==null?void 0:S.section;he===void 0||he===ne||ne===void 0?Se=null:(Se={...Se,contextTo:he},Se.phase==="pause"&&(ne=he))}ne!==void 0&&(u[Z]=ne),d[Z]=Se;const we=new Map;for(const he of ee){const se=(C=he.context)==null?void 0:C.section;if(se===void 0||ne===void 0||se>ne||se===ne&&!p&&(Se==null?void 0:Se.phase)!=="mask")continue;const be=we.get(se)??{chapter:he.chapter??1,section:se,beatIds:[]};be.beatIds.push(he.id),we.set(se,be)}f[Z]=[...we.values()].sort((he,se)=>he.section-se.section)}const v=new Map(s.map(Z=>[Z.id,Z])),k=l.messages.filter(Z=>{var ne,Se;const ee=(Se=(ne=v.get(Z.beatId))==null?void 0:ne.context)==null?void 0:Se.section;return ee===void 0||ee===u[Z.channel]});return{...l,archive:f,context:u,ritual:d,messages:k}}function s1(l,s){const c={left:[],right:[]};if(!l||typeof l!="object")return c;const u=new Map(s.map(d=>[d.id,d]));for(const d of Xg){const f=l[d];if(Array.isArray(f))for(const p of f){if(!p||!Number.isInteger(p.chapter)||!Array.isArray(p.beatIds))continue;const v=Cl(p.section)?p.section:void 0;if(c[d].some(b=>v===void 0?b.section===void 0&&b.chapter===p.chapter:b.section===v))continue;const k=p.beatIds.filter(b=>{var g;if(typeof b!="string")return!1;const w=u.get(b);return(w==null?void 0:w.channel)===d&&(v===void 0?(w.chapter??1)===p.chapter:((g=w.context)==null?void 0:g.section)===v)});k.length>0&&c[d].push({chapter:p.chapter,beatIds:[...new Set(k)],...v===void 0?{}:{section:v}})}}return c}const $i=2200,u1=2e3;function Ph(l,s){return!s.some(c=>{var u;return c.next===l.id||((u=c.choices)==null?void 0:u.some(d=>{var f;return d.next===l.id||((f=d.记忆后继)==null?void 0:f.some(p=>p.next===l.id))}))})}function ug(l,s){const c=l.filter(u=>u.channel===s).map(u=>u.chapter??0).filter(u=>u>0);return c.length>0?Math.min(...c):1}function Qg(l){return{completed:[],flags:{},activated:l.filter(s=>Ph(s,l)).map(s=>s.id),messages:[],pending:{left:null,right:null},memories:{left:[],right:[]},chapter:{left:ug(l,"left"),right:ug(l,"right")},ritual:{left:null,right:null},archive:{left:[],right:[]},endings:[],error:null,runId:0}}function Hl(l,s){var u,d,f;if(l.chapter[s]<5)return 1;const c=s==="left"?"5m.1.1-":"5f.1.1-";return(u=l.pending[s])!=null&&u.beatId.startsWith(c)||((d=l.ritual[s])==null?void 0:d.contextTo)===2&&((f=l.ritual[s])==null?void 0:f.phase)==="pause"?1:5}function h1(l,s,c,u){const d=l.memories[s];if(c.label.trim()===""||d.some(v=>v.label===c.label)||d.length>=Hl(l,s)&&!u||u&&!d.some(v=>v.label===u))return l;const p=d.filter(v=>v.label!==u);return p.length>=Hl(l,s)?l:{...l,memories:{...l.memories,[s]:[...p,c]}}}function c1(l,s,c){const u=l.memories[s],d=u.filter(f=>f.label!==c);return d.length===u.length?l:{...l,memories:{...l.memories,[s]:d}}}function Zg(l,s,c){return l.memories[s].some(u=>u.label===c)}function Kg(l,s,c){var u;return(u=c.记忆后继)==null?void 0:u.find(d=>d.all.every(f=>Zg(l,s,f)))}function ec(l,s,c){return c.需记忆&&!Zg(l,s,c.需记忆)?c.需记忆:c.记忆后继&&!Kg(l,s,c)?"相关旧记忆":null}function Vg(l,s,c){var b;if((b=l.ritual)!=null&&b[s]||l.pending[s])return!1;const u=$a(l,s,c);if(!u)return!1;const d=s==="left"?"right":"left",f=l.pending[d],p=f?c.find(w=>w.id===f.beatId):l.ritual[d]&&u.chapter===l.chapter[s]?$a(l,d,c):null,v=(p==null?void 0:p.chapter)===u.chapter&&u.timeRank!==void 0&&(p==null?void 0:p.timeRank)===u.timeRank;if(p&&(u.chapter??0)>=5&&!v&&Yl(p,u)<0)return!1;const k=new Set(l.completed);return!c.some(w=>{var g;return w.channel===d&&((g=w.window)==null?void 0:g.上界.includes(u.id))&&l.activated.includes(w.id)&&!k.has(w.id)})}function d1(l,s){var u;const c=[];for(const d of["left","right"]){if((u=l.ritual)!=null&&u[d]||l.pending[d]||!Vg(l,d,s))continue;const f=$a(l,d,s);f&&c.push({channel:d,beat:f})}return c.length===0?null:(c.sort((d,f)=>Yl(d.beat,f.beat)),{type:"arm",channel:c[0].channel})}function Jg(l,s){return l.messages.some(c=>c.channel===s)?{...l,messages:l.messages.filter(c=>c.channel!==s)}:l}function f1(l,s,c){var d;const u=(d=l.ritual)==null?void 0:d[s];if(!u||c<u.until)return l;if(u.phase==="mask"){const f=Jg(l,s);return{...f,chapter:{...f.chapter,[s]:u.to},...u.contextTo===void 0?{}:{context:{...f.context,[s]:u.contextTo}},ritual:{...f.ritual,[s]:{...u,phase:"pause",until:c+u1}}}}return{...l,ritual:{...l.ritual,[s]:null}}}function m1(l,s){const c=new Set(l.completed);for(const u of s)if(!c.has(u.id)&&l.activated.includes(u.id)&&jl(u,c)==="closed")return H0(u,c);return null}function y1(l,s){const c=new Set([...l.activated,...l.completed]),u=s.filter(d=>!c.has(d.id)&&(Ph(d,s)||g1(d,l,s))).map(d=>d.id);return u.length===0?l:{...l,activated:[...l.activated,...u]}}function g1(l,s,c){return c.some(u=>u.next===l.id&&s.completed.includes(u.id))}function p1(l,s){return l.messages.filter(c=>c.channel===s)}function $a(l,s,c){const u=new Set(l.completed);let d=null;for(const f of c){if(f.channel!==s||u.has(f.id)||!l.activated.includes(f.id)||Wg(f,l.flags)!=="ok"||(f.requires??[]).some(v=>!u.has(v)))continue;const p=jl(f,u);p==="waiting"||p==="closed"||(!d||Yl(f,d)<0)&&(d=f)}return d}function w1(l,s,c){var b;const u=$a(l,s,c),d=[],f=new Set(l.completed);for(const w of c){if(w.channel!==s||f.has(w.id)||!l.activated.includes(w.id))continue;const g=Wg(w,l.flags);if(g==="no")continue;const S=(w.requires??[]).filter(Z=>!f.has(Z)),C=jl(w,f);if(g==="wait"||C==="waiting"){d.push({id:w.id,unmet:S.length>0?S:Object.keys(w.when??{})});continue}if(C==="closed"){d.push({id:w.id,unmet:[`区间已关闭：${((b=w.window)==null?void 0:b.上界.join("/"))??""}`]});continue}S.length>0&&d.push({id:w.id,unmet:S})}const p=c.some(w=>w.channel===s),v=l.endings.find(w=>c.some(g=>g.ending===w&&g.channel===s&&f.has(g.id)))??null;return{mode:p?u?"available":d.length>0?"gated":"ended":"empty",availableId:(u==null?void 0:u.id)??null,locked:d,endingId:v}}function v1(l,s){const c=new Map;for(const d of s)d.ending&&c.set(d.ending,[...c.get(d.ending)??[],d.id]);const u=new Set(l.completed);return[...c.entries()].filter(([,d])=>d.length>0&&d.every(f=>u.has(f))).map(([d])=>d)}function Dl(l){return l.endings.find(s=>s==="未交换微信"||s==="和好"||s==="分手")}function b1(l,s,c,u=Date.now()){var b,w;if(!Vg(l,s,c))return l;const d=$a(l,s,c);if(!d)return l;const f=d.chapter??l.chapter[s],p=(b=d.context)==null?void 0:b.section,v=(w=l.context)==null?void 0:w[s];return(p===void 0?f!==l.chapter[s]:!d.control&&v!==void 0&&v!==p)?{...Qh(l,s,c),ritual:{...l.ritual,[s]:{from:l.chapter[s],to:f,...p===void 0?{}:{contextTo:p},phase:"mask",until:u+$i,startedAt:u}}}:(f!==l.chapter[s]&&(l={...l,chapter:{...l.chapter,[s]:f}}),!d.control&&p!==void 0&&p!==v&&(l={...l,context:{...l.context,[s]:p}}),l=qg(l,d,c),d.lines.length===0&&d.choices&&d.choices.length>0?Pi(l,s,{kind:"choices",beatId:d.id}):d.control?tc(l,s,d,l.messages,void 0,d.next,c):Pi(l,s,{kind:"lines",beatId:d.id,lineIndex:0}))}function k1(l,s,c){const u=l.pending[s];if(!u||u.kind!=="lines")throw new Error(`${ei(s)}没有正在播出的台词`);const d=nc(c,u.beatId),f=d.lines[u.lineIndex];if(!f)throw new Error(`节拍 ${d.id} 没有第 ${u.lineIndex+1} 句`);const p=[...l.messages,{id:`${d.id}:${u.lineIndex}`,channel:s,beatId:d.id,from:f.from,text:f.text,delivery:f.delivery,caption:f.caption,timing:f.timing}],v=u.lineIndex+1;return v<d.lines.length?{...Pi(l,s,{kind:"lines",beatId:d.id,lineIndex:v}),messages:p}:d.choices&&d.choices.length>0?{...Pi(l,s,{kind:"choices",beatId:d.id}),messages:p}:tc(l,s,d,p,void 0,d.next,c)}function S1(l,s,c,u){var b,w;const d=l.pending[s];if(!d||d.kind!=="choices")throw new Error(`${ei(s)}还不能选：这一侧的话还没说完`);const f=nc(u,d.beatId),p=(b=f.choices)==null?void 0:b[c];if(!p)throw new Error(`节拍 ${f.id} 没有第 ${c+1} 个选项`);const v=ec(l,s,p);if(v)throw new Error(`节拍 ${f.id} 的选项「${p.thought}」需要记忆「${v}」，本窗还没存`);const k=(w=Kg(l,s,p))==null?void 0:w.next;return Pi(l,s,{kind:"reply",beatId:f.id,choiceIndex:c,...k?{memoryNext:k}:{}})}function x1(l,s,c){var v;const u=l.pending[s];if(!u||u.kind!=="reply")throw new Error(`${ei(s)}没有待发出的回复`);const d=nc(c,u.beatId),f=(v=d.choices)==null?void 0:v[u.choiceIndex];if(!f)throw new Error(`节拍 ${d.id} 没有第 ${u.choiceIndex+1} 个选项`);const p=[...l.messages,{id:`${d.id}:reply:${u.choiceIndex}`,channel:s,beatId:d.id,from:"ai",text:f.reply,delivery:"type",timing:f.timing}];return tc(l,s,d,p,f.set,u.memoryNext??f.next,c)}function tc(l,s,c,u,d,f,p){if(l.completed.includes(c.id))return l;const v={...l.flags};if(d)for(const[Z,ee]of Object.entries(d))v[Z]=ee;const k=T1(l.memories,c.清空记忆),b=f&&!l.activated.includes(f)?[...l.activated,f]:l.activated,w=[...l.completed,c.id],g={...l,messages:u,flags:v,memories:k,activated:b,completed:w,pending:{...l.pending,[s]:null}},S=v1(g,p),C={...g,endings:S};return!Dl(C)||Dl(l)?C:Qh(Qh(C,"left",p),"right",p)}function T1(l,s){return s?s==="all"?{left:[],right:[]}:{...l,[s]:[]}:l}function Pi(l,s,c){return{...l,pending:{...l.pending,[s]:c}}}function Wg(l,s){if(!l.when)return"ok";for(const[c,u]of Object.entries(l.when)){if(!(c in s))return"wait";if(s[c]!==u)return"no"}return"ok"}function nc(l,s){const c=l.find(u=>u.id===s);if(!c)throw new Error(`找不到节拍 ${s}`);return c}function $g(l,s){return l.startedAt!==void 0?Math.max(0,s-l.startedAt):l.phase==="pause"?$i:Math.max(0,$i-(l.until-s))}function rc(){const[l,s]=ae.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return ae.useEffect(()=>{const c=window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>s(c.matches);return c.addEventListener("change",u),()=>c.removeEventListener("change",u)},[]),l}function E1(l){const[s,c]=ae.useState(()=>Date.now());return ae.useEffect(()=>{if(!l)return;c(Date.now());const u=window.setInterval(()=>c(Date.now()),48);return()=>window.clearInterval(u)},[l]),s}const hg=["/","|","\\","-"];function cg(){const l=rc(),[s,c]=ae.useState(0);return ae.useEffect(()=>{if(l)return;const u=window.setInterval(()=>c(d=>(d+1)%hg.length),115);return()=>window.clearInterval(u)},[l]),_.jsx("span",{className:"terminal-spinner","aria-hidden":"true",children:l?"-":hg[s]})}function Pg(l,s,c,u,d){const[f,p]=ae.useState(()=>s?Math.min(1,l.length):l.length),v=ae.useRef(!1),k=ae.useRef(u),b=ae.useRef(d);return k.current=u,b.current=d,ae.useEffect(()=>{var g;if(!s)return;if(f>=l.length){v.current||(v.current=!0,(g=k.current)==null||g.call(k));return}const w=window.setTimeout(()=>{var S;p(C=>C+1),(S=b.current)==null||S.call(b)},Math.max(0,c));return()=>window.clearTimeout(w)},[f,l,s,c]),s?l.slice(0,f):l}function A1({text:l,interval:s,onFinished:c}){const u=Pg(l,!0,s,c);return _.jsxs(_.Fragment,{children:[u,u.length<l.length?_.jsx("span",{className:"caret","aria-hidden":"true"}):null]})}const Pa={left:{id:"01",name:"男生",gender:"男",age:21,work:"在校大学生",city:"西安"},right:{id:"02",name:"女生",gender:"女",age:22,work:"大学生 · 项目组实习",city:"西安"}};function I1({mode:l,choices:s,selected:c,onMove:u,onPick:d,memoryGate:f}){const{t:p}=In();return _.jsx("div",{className:"choice-list","data-testid":"composer","data-mode":l,children:l==="active"?_.jsx("div",{role:"group","aria-label":p("选一个想法","Choose a thought"),children:s.map((v,k)=>{const b=f(v),w=b!==null,g=!w&&c===k;return _.jsxs("button",{type:"button","data-testid":"choice","data-index":k,"data-gated":w||void 0,disabled:w,title:w?p(`需要记忆：${b}`,`Requires memory: ${m0(b)}`):void 0,onMouseEnter:()=>u(k),onFocus:()=>u(k),onClick:()=>d(k),className:"choice-line","data-current":g||void 0,children:[_.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:g?">":""}),_.jsxs("span",{children:[v.需记忆||v.记忆后继?_.jsx("span",{className:"memory-tag","data-testid":"memory-tag",children:"[MEM] "}):null,v.thought]})]},k)})}):null})}const M1="data:audio/wav;base64,UklGRnIEAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YU4EAAAAADwAwgGKBJcI7A2GFFociSXBL6M7nUcgSsdBdjqzMh8rgSPqG1UUvgwvBan9IfaZ7hXnkt8L2JnQAsm1wQq6P7OFtsm+/sWizR/VmdwV5I3rBPOA+u0BVwnEEC8Ylx/9JlIuxzUDPXREaku6SI9AdznxMZAqLiPOG3IUGA2+BW3+GffG73zoMeHn2azSVsstxOO82LUWuCnAKMeQztbVG91g5J/r3/Ia+k0Bgwi6D+gWFR5FJWUsmTOtOtFB5Ej9Rgo/JzjfMLEpiyJiGzwUGw38BeL+x/ev8JjphuJ323LUWc1fxmC/Ubj6udDBnMjEz9TW4t3v5Pnr//ID+gEB/Qf3DvMV5xzbI8UqvzGfOHk/eUb3REE9jjaBL5AonSGuGsAT1AzxBRL/MPhS8XXqoOPI3PrVHc9byKDBtronvMDDVspH0RrY797D5ZHsYvMp+uwArwdxDjIV6RulIlQpFjC6Nl09K0S1Qjs7wzTvLTcngSDJGRUTZAy1BQ7/avjG8SLrhOTm3VTXrNAnyp3D+Lx9vtPFMszq0obZIeC85lLt5/N5+gQBiwcTDpwUIBugIRIooC4INXk770FKQBQ50DIzLLMlNx+7GEQSywtUBeb+fPgQ8qnrQOXZ3oLYEtLKy2zFLb/+wBHIOc671BzbeOHV5zLui/Tg+jIBgwfTDR4UZxqwIO0mQC1pM7Q5uT+3PcY2vjBbKhgk2R2VF1YRGQvbBKf+dvhC8hPs5eW235vZZdNbzSbHXcGYw2XKUNCY1rzc4+IN6S7vS/Vq+4QBmQewDcMT0BniH+Il+SvhMQc4kj0YO200mi5vKGkiXRxRFk0QTQpLBFD+Wfhh8m7sfeaI4KbaptTgzsfIfcM+xsXMfNKJ2HHeYuRQ6jfwGvb9+9wBugeUDWsTPxkVH9wkwipjMGg2cTtsOAgyayx5JrAg3RoKFT8PeAmxA/L9Mvh38r/sBudM4aXb2tVa0GfKnsXryC3PrdSC2i7g5OWZ60jx8vaa/D0C3gd9DRoTtRhQHtsjiCnqLsg0Njm6NZ8vOSqCJPQeWhnEEzAOowgbA5T9D/iO8g3tkOcS4qLcF9fW0QvM9Meky5TR4tZ53Onhaefh7FXyxfcx/ZoCAghpDcsSKhhRHVAiVif7KxYxPDQlMFUqKCXNH6kajxWTELIL5gYyApv9Gfmu9FvwH+z75/fj8d8/3CfY5tV12SveZuK85uPq/u798uP2s/pr/gwCmAULCWYMrA/dEu4V/xjIG+AeXiBjHboZbRYPE9sPtgyrCbcG1wMOAV3+wfs7+cv2cfQs8gPw3u3269Tp/uhR6/vtZPDS8hz1Vvd4+YX7fv1g/ywB4wKGBBMGjAfvCDoKeguPDMENBg5tDLUKJgmfBzUG3ASZA2oCUAFKAFr/fP60/QD9X/zT+1z79fqr+mD6iPpj+zf88/yd/TL+tP4i/3z/w//2/xYAIgAaAAAA";let ra,ar,Zh;const ep="shuangxian.sound-muted";function tp(){try{return localStorage.getItem(ep)==="true"}catch{return!1}}function O1(l){try{localStorage.setItem(ep,String(l))}catch{}ar&&(ar.gain.value=l?0:1),l||np()}function np(){if(!(typeof AudioContext>"u"))try{ra||(ra=new AudioContext,ar=ra.createGain(),ar.gain.value=tp()?0:1,ar.connect(ra.destination));const l=ra;l.resume().catch(()=>{}),Zh??(Zh=fetch(M1).then(s=>{if(!s.ok)throw Error("Could not load the character sound");return s.arrayBuffer()}).then(s=>l.decodeAudioData(s)).catch(()=>{}))}catch{}}function N1(l){const s=Math.round(75+15*Math.max(0,Math.min(1,(l-1e3)/5e3)));let c=Math.round(l)*2654435761>>>0;const u=()=>(c=Math.imul(c,1664525)+1013904223>>>0,c/4294967296),d=[];for(let v=0;d.length<Math.floor(l/1400)&&v<100;v++){const k=200+u()*Math.max(0,l-550);d.every(b=>Math.abs(k-b)>250)&&d.push(k)}d.sort((v,k)=>v-k);const f=[];let p=0;for(;p+40<=l;){const v=Math.max(0,Math.min(1,(p-1e3)/1500));f.push({at:p,level:1-.6*v}),p+=s+Math.floor(u()*13)-6,d.length&&p>=d[0]&&(d.shift(),p+=75+Math.floor(u()*76))}return f}function C1(l){const s=ra;if(!s||!ar||!Zh||s.state!=="running"||l<40)return;const c=s.createGain(),u=s.currentTime+.012,d=[];let f=!1;return c.connect(ar),Zh.then(p=>{if(!(!p||f))for(const{at:v,level:k}of N1(l)){const b=u+v/1e3;if(b<s.currentTime)continue;const w=s.createBufferSource();w.buffer=p;const g=s.createGain();g.gain.value=.12*k,w.connect(g),g.connect(c),w.start(b),d.push(w)}}),()=>{f=!0,c.disconnect();for(const p of d)p.stop()}}function R1(){const l=ra;if(!l||!ar||l.state!=="running")return;const s=l.currentTime+.012;for(const[c,u,d,f]of[[0,390,.09,.17],[.095,585,.17,.21]]){const p=s+c,v=l.createOscillator(),k=l.createGain();v.type="triangle",v.frequency.value=u,k.gain.setValueAtTime(0,p),k.gain.linearRampToValueAtTime(f,p+.005),k.gain.exponentialRampToValueAtTime(1e-4,p+d),v.connect(k),k.connect(ar),v.start(p),v.stop(p+d+.006)}}function dg({from:l,text:s,delivery:c,caption:u,animate:d=!1,typeIntervalMs:f=100,marks:p,onSaveMark:v,onFinished:k,onProgress:b,onSkip:w}){const{t:g}=In(),S=d&&c==="type",C=l==="ai",Z=Pg(s,S,f,k,b);if(ae.useEffect(()=>{if(S&&C)return C1((s.length-1)*f)},[S,C,s,f]),c==="thought")return null;const ee=ne=>{if(!p||p.length===0)return ne;const Se=p.map(se=>({mark:se,at:ne.indexOf(se.text)})).filter(se=>se.at>=0).sort((se,be)=>se.at-be.at);if(Se.length===0)return ne;const we=[];let he=0;for(const{mark:se,at:be}of Se)be<he||(be>he&&we.push(ne.slice(he,be)),we.push(se.saved?_.jsxs("span",{"data-testid":"memory-mark","data-saved":"true",className:"memory-mark-saved",children:[se.text,_.jsxs("span",{className:"memory-tag",children:[" [MEM] ",g("已存","Saved")]})]},`${be}-${se.text}`):_.jsxs("button",{type:"button","data-testid":"memory-mark","data-saved":"false",className:"memory-mark",disabled:!v,"aria-label":g(`存记忆：${se.text}`,`Save memory: ${se.text}`),onClick:()=>v==null?void 0:v(se.text),children:[se.text," [+]"]},`${be}-${se.text}`)),he=be+se.text.length);return he<ne.length&&we.push(ne.slice(he)),we};return c==="image"?_.jsxs("div",{className:`msg-row ${C?"right":"left"}`,"data-from":l,"data-delivery":c,children:[_.jsx("span",{className:"msg-direction","aria-hidden":"true",children:C?"OUT<":"IN>"}),_.jsxs("figure",{className:"msg-image",children:[_.jsx("img",{src:s,alt:u??g("图片","Image")}),u?_.jsx("figcaption",{children:u}):null]})]}):_.jsxs("div",{className:`msg-row ${C?"right":"left"}`,"data-from":l,"data-delivery":c,children:[_.jsx("span",{className:"msg-direction","aria-hidden":"true",children:C?"OUT<":"IN>"}),_.jsxs("div",{className:C?"msg-ai":"msg-user","data-testid":"bubble-text",onClick:S?w:void 0,title:S?g("点击跳过","Click to skip"):void 0,children:[C?_.jsx("span",{className:"msg-ink",children:ee(Z)}):ee(Z),S&&Z.length<s.length?_.jsx("span",{className:"caret","aria-hidden":"true"}):null]})]})}function H1({script:l,channel:s,state:c,dispatch:u,active:d,focused:f,selected:p,skipRefs:v,onMove:k,onPick:b,now:w,reduced:g,running:S,speeds:C,onMemoryFull:Z}){const{language:ee,t:ne}=In(),{name:Se,id:we}=Pa[s],he=ne(Se,s==="left"?"Him":"Her"),se=T=>ee==="en"?f0(T):T.text,be=(T,B)=>{var L,U;return ee==="en"?((U=(L=Wa[T])==null?void 0:L.memories.find(z=>z.label===B.缩略标签))==null?void 0:U.quote[1])??B.短句:B.短句},Me=c.pending[s],xe=p1(c,s),$=xe.filter(T=>T.delivery!=="thought"),Oe=(Me==null?void 0:Me.kind)==="choices"?[...xe].reverse().find(T=>T.beatId===Me.beatId&&T.delivery==="thought"):null,_e=w1(c,s,l.beats),ye=c.ritual[s],Ce=ye?$g(ye,w):0,Fe=ye?ye.phase==="pause"||g?$.length:Math.floor($.length*Math.min(1,Ce/$i)):0,Ge=$.slice(Fe),je=T=>{var B;return((B=l.beatById)==null?void 0:B.get(T))??l.beats.find(L=>L.id===T)},j=new Set(c.memories[s].map(T=>T.label)),me=(T,B)=>{var U;return(((U=je(T))==null?void 0:U.记忆候选)??[]).filter(z=>B.includes(z.短句)).map(z=>({text:be(T,z),saved:j.has(z.缩略标签)}))},V=c.memories[s].length,te=Hl(c,s),[P,Re]=ae.useState(!1),Qe=ae.useRef(null),[at,A]=ae.useState(),X=S?D1(l,c,s):null,re=X?se(X):"",W=X&&{...X,text:re,timing:{...X.timing,typeIntervalMs:X.timing.typeIntervalMs*X.text.length/Math.max(1,re.length)}},pe=(W==null?void 0:W.token)??"",Te=(at==null?void 0:at.token)===pe?at.phase:"idle",ce=ae.useRef(C);ce.current=C;const le=ae.useRef(()=>{}),ge=ae.useRef(c),Et=ae.useRef(null),Pt=ae.useRef([]),Xt=ae.useRef(0),pt=ae.useRef(void 0),Je=ae.useRef(null),qe=ae.useRef(null),wt=ae.useRef(new Map);ae.useLayoutEffect(()=>{var L;const T=qe.current;if(!T)return;if(!ye||g){wt.current.clear();return}T.scrollTop=0;const B=new Map;for(const U of T.querySelectorAll("[data-clear-row]")){const z=U.dataset.clearRow,J=U.offsetTop,oe=wt.current.get(z);B.set(z,J),oe!==void 0&&oe!==J&&((L=U.animate)==null||L.call(U,[{transform:`translateY(${oe-J}px)`},{transform:"translateY(0)"}],{duration:135,easing:"ease-out"}))}wt.current=B},[ye,Fe,g]),ge.current=c;const At=ae.useCallback(()=>{for(const T of Pt.current)window.clearTimeout(T);Pt.current=[]},[]),vt=ae.useCallback((T,B)=>{if(B<=0){T();return}Pt.current.push(window.setTimeout(T,B))},[]),Mn=ae.useCallback(()=>{At();const T=ge.current.pending[s];if(!T||T.kind==="choices")return;const B=`${ge.current.runId}|${T.beatId}:${T.kind}:${"lineIndex"in T?T.lineIndex:"choiceIndex"in T?T.choiceIndex:0}`;Et.current!==B&&(Et.current=B,Je.current={runId:ge.current.runId,beatId:T.beatId,finishedAt:pt.current??performance.now()},u(T.kind==="lines"?{type:"commit-line",channel:s}:{type:"commit-reply",channel:s}))},[s,At,u]);le.current=Mn;const Ft=ae.useCallback(()=>{var T;pt.current=performance.now(),vt(()=>le.current(),Xt.current/(((T=ce.current)==null?void 0:T.after)??na.after))},[vt]),dt=ae.useCallback(()=>le.current(),[]);ae.useEffect(()=>{const T=v.current;return T[s]=dt,()=>{delete T[s]}},[s,dt,v]),ae.useEffect(()=>{var de,ke,Ae;At();const T=Ee=>A({token:pe,phase:Ee});if(!W)return T("idle"),At;const B=g?{...jg}:W.timing,L=Je.current,U=ge.current,z=((de=U.pending[s])==null?void 0:de.kind)==="reply",J=ce.current;let oe=z?0:B.pauseBeforeMs;if(!g&&!z&&(L==null?void 0:L.runId)===U.runId){const Ee=(ke=je(L.beatId))==null?void 0:ke.context,_t=(Ae=je(W.beatId))==null?void 0:Ae.context,en=_t!=null&&_t.time&&_t.time!==(Ee==null?void 0:Ee.time)?(J==null?void 0:J.timeJump)??na.timeJump:(J==null?void 0:J.sameTime)??na.sameTime,st=M0(Ee,_t)/en;if(st>0){const On=B.pauseBeforeMs>Wi[Yg].pauseBeforeMs?B.pauseBeforeMs:0;oe=Math.max(On,st-(performance.now()-L.finishedAt))}}return pt.current=void 0,Xt.current=W.delivery==="thought"?0:B.afterMs,T("pause"),vt(()=>{var Ee;T("indicator"),vt(()=>{!g&&W.delivery==="thought"||O0(W.delivery,g)?T("typing"):(T("shown"),Ft())},B.indicatorMs/(((Ee=ce.current)==null?void 0:Ee.indicator)??na.indicator))},oe),At},[pe,s,At,Ft,vt,W==null?void 0:W.delivery,g]),ae.useEffect(()=>{const T=qe.current;T&&!ye&&(T.scrollTop=T.scrollHeight)},[$.length,Te,pe,ye]);const zt=Me?je(Me.beatId):void 0,Qt=S&&(Me==null?void 0:Me.kind)==="choices"&&(zt==null?void 0:zt.choices)&&zt.choices.length>0,Ln=Qt?"active":(Me==null?void 0:Me.kind)==="lines"||(Me==null?void 0:Me.kind)==="reply"||_e.mode==="gated"||ye?"locked":"empty",It=(W==null?void 0:W.delivery)==="thought"?W:null;function o(T,B){var J,oe,de;const L=(J=je(T))==null?void 0:J.context,U=B?(oe=je(B))==null?void 0:oe.context:void 0;if(!L||T===B)return;const z=L.section!==(U==null?void 0:U.section)?L.time??L.entryTime:L.time!==U.time?L.time:void 0;return z&&ne(z,/^\d{2}:\d{2}$/.test(z)?z:((de=Wa[T])==null?void 0:de.time)??z)}const M=$.at(-1),G=zt??(M&&je(M.beatId)),K=G!=null&&G.context?void 0:(G==null?void 0:G.time)??(G==null?void 0:G.label),q=Me&&o(Me.beatId,M==null?void 0:M.beatId);ae.useEffect(()=>Re(!1),[c.runId,c.chapter[s]]),ae.useEffect(()=>{if(!P)return;const T=B=>{var L;B.target instanceof Node&&!((L=Qe.current)!=null&&L.contains(B.target))&&Re(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[P]);function m(T){V>=te?Z(T):u({type:"save-memory",channel:s,...T})}const H=`${V}/${te}`;return _.jsxs("section",{className:"pane terminal-column","data-testid":`pane-${s}`,"aria-label":he,"data-focused":f||void 0,"data-playing":d||void 0,children:[_.jsxs("header",{className:"pane-head ascii-rule",children:[_.jsx("span",{className:"pane-signal","aria-hidden":"true",children:d?">":" "}),_.jsxs("span",{className:"pane-number",children:["USER ",we," /"]}),_.jsx("span",{className:"pane-name",children:he}),_.jsxs("div",{className:"pane-head-right",children:[K?_.jsx("span",{className:"pane-meta","data-testid":`time-${s}`,children:K}):null,_.jsx("button",{type:"button",className:"memory-entry","data-testid":`memory-counter-${s}`,ref:Qe,onClick:()=>Re(T=>!T),onBlur:()=>Re(!1),"aria-expanded":P,"aria-label":ne(`Memory 数量：${H}`,`Memory count: ${H}`),children:P?`[${ne("Memory 数量：","Memory count: ")}${H}]`:`[MEM ${H}]`})]})]}),_.jsxs("div",{ref:qe,className:"messages",role:"log","aria-label":ne(`${he}的对话`,`${he} · Chat`),children:[Ge.map((T,B)=>{var U;const L=o(T.beatId,(U=$[Fe+B-1])==null?void 0:U.beatId);return _.jsxs("div",{"data-clear-row":T.id,children:[L?_.jsx("div",{className:"chat-date",children:L}):null,_.jsx(dg,{from:T.from,text:se(T),delivery:T.delivery,caption:T.caption,marks:me(T.beatId,T.text),onSaveMark:ye?void 0:z=>{var oe;const J=(((oe=je(T.beatId))==null?void 0:oe.记忆候选)??[]).find(de=>be(T.beatId,de)===z);J&&m({label:J.缩略标签,text:J.短句,beatId:T.beatId})}})]},T.id)}),W&&W.delivery!=="thought"&&Te!=="idle"&&q?_.jsx("div",{className:"chat-date",children:q}):null,ye&&Ce<$i+500&&!g?_.jsxs("p",{className:"system-line","data-clear-row":"system","data-testid":`resetting-${s}`,role:"status",children:["[SYS] ",ye.phase==="mask"?ne("正在清空上下文…","Clearing context…"):ne("已清空","Context cleared")]}):null,Te==="indicator"&&W&&W.delivery!=="thought"?_.jsxs("div",{className:`msg-row ${W.from==="ai"?"right":"left"} message-wait`,"data-testid":`message-wait-${s}`,children:[_.jsx("span",{className:"msg-direction",children:_.jsx(cg,{})}),_.jsx("button",{type:"button",className:`${W.from==="ai"?"msg-ai":"msg-user"} message-wait-button`,"data-testid":"skip",onClick:dt,"aria-label":ne("跳过当前播放","Skip current playback"),children:W.from==="ai"?ne("正在发送","Sending"):ne("正在接收","Receiving")})]}):null,(Te==="typing"||Te==="shown")&&W&&W.delivery!=="thought"?_.jsx(dg,{from:W.from,text:W.text,delivery:W.delivery,caption:W.caption,animate:Te==="typing",typeIntervalMs:W.timing.typeIntervalMs/(W.from==="ai"?(C==null?void 0:C.reply)??na.reply:(C==null?void 0:C.incoming)??na.incoming),onFinished:Te==="typing"?Ft:void 0,onProgress:()=>{const T=qe.current;T&&(T.scrollTop=T.scrollHeight)},onSkip:dt},W.token):null]}),!ye&&(Qt||It&&Te!=="idle"&&Te!=="pause")?_.jsxs("div",{className:"composer",children:[Oe||It?_.jsxs("div",{className:"think-block","data-testid":`think-${s}`,children:[_.jsx("span",{className:"think-block-head",children:"[THINKING]"})," ",It&&Te==="indicator"?_.jsxs("span",{className:"think-progress",children:[_.jsx(cg,{})," ",ne("正在思考","Thinking")]}):It&&Te==="typing"?_.jsx(A1,{text:It.text,interval:Math.max(15,Math.min(31,It.timing.typeIntervalMs))/((C==null?void 0:C.thought)??na.thought),onFinished:Ft},It.token):(It==null?void 0:It.text)??(Oe&&se(Oe))]}):null,_.jsx(I1,{mode:Ln,choices:Qt?zt.choices.map((T,B)=>{var L,U;return{...T,thought:ne(T.thought,((U=(L=Wa[zt.id])==null?void 0:L.choices[B])==null?void 0:U.thought[1])??T.thought)}}):[],selected:p,onMove:k,onPick:b,memoryGate:T=>ec(c,s,T)})]}):null]})}function D1(l,s,c){var p,v;const u=s.pending[c];if(!u||u.kind==="choices")return null;const d=((p=l.beatById)==null?void 0:p.get(u.beatId))??l.beats.find(k=>k.id===u.beatId);if(!d)return null;if(u.kind==="lines"){const k=d.lines[u.lineIndex];return k?{token:`${s.runId}|${d.id}:${u.lineIndex}`,id:`${d.id}:${u.lineIndex}`,beatId:d.id,from:k.from,text:k.text,delivery:k.delivery,caption:k.caption,timing:k.timing??Nl([])}:null}const f=(v=d.choices)==null?void 0:v[u.choiceIndex];return f?{token:`${s.runId}|${d.id}:reply:${u.choiceIndex}`,id:`${d.id}:reply:${u.choiceIndex}`,beatId:d.id,from:"ai",text:f.reply,delivery:"type",timing:f.timing??Nl([])}:null}const _1=[["L1 L2 L3","他请助手推荐桌游店，想选一家适合多人聚会的店。"],["R1-shiguang R1-xindong R1-xushi","朋友约她去桌游店，她让助手查了地点。"],["R2","出门时间紧，她问要不要化妆。"],["3.1.1-A 3.1.1-C","他到了一家临时改换的桌游店，现场有不少陌生人。"],["3.1.1-B","他到了桌游店，发现除了朋友几乎都不认识。"],["3.2.1","他和一位戴耳机的人搭话，起初误以为对方不想理他。"],["3.2.2 3.3.1","桌游开始后，他留意到一位像是表妹同桌的女生。"],["3.2.2-A 3.3.1-A","他留意到刚进来的女生的眼妆和笑声，觉得她像是表妹的同桌。"],["3.2.3 3.2.4 3.3.2","他说下一局要开始了，先不聊了。"],["3.4.1","她出地铁后问了去桌游店的路。"],["3.4.2","她说没按助手的指路找到店，后来向同学问到了位置。"],["3.4.3-A 3.4.3-B 3.4.4","她问起一件衣服的牌子和价格。"],["4.1.1 4.2.1","桌游结束后，他向助手回顾了和那位女生的互动。"],["4.2.2","他想和她交换微信，又怕开口太唐突。"],["4.2.3","他打算借舍友的名义去问表妹。"],["4.2.3-direct","他当面问她能不能加微信，她请同桌帮忙推联系方式。"],["4.2.4 4.2.5","他重新想了想，决定先不问。"],["4.3.1 4.3.2 4.3.3","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。"],["4.3.4","她打算去问同桌。"],["4.3.6-direct","他当面问能不能加微信，她答应并请同桌转推。"],["4.3.5","她决定先不问。"],["5m.1.1-A 5m.1.1-B 5m.1.1-C 5m.1.1-D 5m.1.2 5m.1.3","加上微信后，他琢磨怎么开场，又问起她回消息的速度。"],["5m.1.4","他睡前收住话题，第二天早上她照常找他聊天。"],["5m.1.5","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。"],["5m.1.6 5m.2.1 5m.2.2","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。"],["5m.2.3 5m.2.5","他试着少发消息，等回复时还是觉得不踏实。"],["5m.2.4","他仍然频繁发消息，发现她回得一如既往地慢。"],["5m.3.1 5m.3.2 5m.3.3 5m.3.4","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。"],["5m.4.1 5m.4.2 5m.4.3 5m.4.4","他和助手商量表白，发出消息后收到她愿意试试的答复。"],["5f.1.1-A 5f.1.1-B 5f.1.1-C 5f.1.1-D 5f.1.2 5f.1.3","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。"],["5f.1.4","她告诉他自己累了，收到一长串关心的话。"],["5f.1.5","她发了个表情包，他回了一句让她早点休息。"],["5f.2.1","他夸她开朗，她向助手说起自己的社交生活。"],["5f.2.2","她在和闺蜜吃饭时说起他。"],["5f.2.3","她向助手谈到自己累时习惯一个人待着。"],["5f.2.4","她说他问起家里的事，自己岔开了话题。"],["5f.3.1 5f.3.2 5f.3.3 5f.3.4","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。"],["5f.4.1 5f.4.2 5f.4.3 5f.4.4","收到表白后她犹豫过，最后回复说愿意试试。"],["6m.CHOICE 6m.M2A 6m.M2B","确定关系后，他用两人的照片发了朋友圈。"],["6m.M3 6m.M4","他提议吃青提蛋糕庆祝，后来把合照原图发给她。"],["6m.M5 6m.MEMCHOICE","他问她能不能一起过满月纪念日，又来问礼物怎么准备。"],["6m.M7A","他下单洗了两张合照。"],["6m.M7B","他先记下纪念日，准备以后再想礼物。"],["6f.F1 6f.CHOICE","她看到了他发的合照，来问自己要不要也发一条。"],["6f.F3A","她发了朋友圈，同事来问照片里的人是谁。"],["6f.F3B","她把照片发给闺蜜，闺蜜打来电话。"],["6f.F4 6f.F5","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。"],["6f.F6 6f.F7 6f.F8","她答应把满月纪念日那天留给他，并记进了日历。"],["7m.MONE","她赶项目、回消息变少，他说自己还是常想找她。"],["7m.MNEWS 7m.MPROJECT 7m.MDEMAND","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。"],["7m.MWAIT 7m.MFEAR 7m.MOWN","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。"],["7m.OPENCHOICE","她约他见面，也告诉他自己前一天是故意没回。"],["7m.PLAINCHOICE","她发来见面邀请，他还在犹豫要不要问前一天的事。"],["7m.SENTBOTH 7m.SENTHER 7m.SENTHIM 7m.SENTQUIET 7m.MEMBOTH 7m.MEMHER 7m.MEMHIM 7m.MEMQUIET 7m.PLANENDBOTH 7m.PLANENDHER 7m.PLANENDHIM 7m.PLANENDQUIET","两人约好下午四点在地铁口见，他来问吃什么比较合适。"],["7m.AFTERBOTH","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。"],["7m.AFTERHER","她提到自己气上了头，他换了话题。"],["7m.AFTERHIM","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。"],["7m.AFTERQUIET","他们一起吃了饭，没有提起周五的争执。"],["7f.FDAY 7f.FDAYMORE","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。"],["7f.FANGER 7f.FDEMAND","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。"],["7f.FNOTIFICATION 7f.FPUSH 7f.FOWN","她看到了他的消息，告诉助手自己故意没有回复。"],["7f.COUSIN","她还不想和他说话，开始考虑找别人聊聊。"],["7f.COUSINSENTNO","她决定找闺蜜聊聊。"],["7f.COUSINBACKNO","闺蜜问她还想不想见他，她说想见。"],["7f.COUSINSENTYES","她打算找同桌聊，想先请同桌别替她联系男友。"],["7f.COUSINBACKYES","同桌听她说完，劝她把自己介意的事告诉男友。"],["7f.FCHOICE 7f.FSENTEASY","她想当面说，最后发出了见面邀请。"],["7f.FSENTOPEN","发出邀请时，她也写了自己是故意让他等。"],["7f.RECEIVEDBOTH 7f.RECEIVEDHER 7f.RECEIVEDHIM 7f.RECEIVEDQUIET 7f.ACKBOTH 7f.ACKHIM 7f.SETBOTH 7f.SETHER 7f.SETHIM 7f.SETQUIET","他答应见面。她和他约好下午四点在地铁口碰头。"],["7f.AFTERBOTH","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。"],["7f.AFTERHER","她说自己当时气上了头，随后两人聊了别的。"],["7f.AFTERHIM","她解释为什么当时不愿回消息，随后和他一起吃了饭。"],["7f.AFTERQUIET","他们一起吃了饭，没有再提争执。"],["7f.STATION","她向助手说起吃饭时拍糊的照片。"],["8f.F101","交往满一个月，她打算给男友带点东西，问助手买什么。"],["8f.F102A","她买了蛋糕，放在办公室冰箱里。"],["8f.F102B","她买了盒曲奇，放进包里。"],["8m.M101","交往满一个月，他想给女友带杯喝的，问助手去哪儿买。"],["8m.M102A","他决定去青杏买饮料。"],["8m.M102B","他打算出门后再挑饮品店。"],["8f.F103 8f.F104","她临时加班，跟男友商量把晚饭改到另一天。"],["8m.M103","他收到晚饭改期的消息。虽然答应了，心里还是有点失落。"],["8m.M104","他买了吃的和喝的，没等到回复就出发了。"],["8m.M105 8m.M106","他在她公司楼下碰见她和同事，当众起了争执。他介意她说自己丢人。"],["8f.F105 8f.F106","她下楼拿外卖时碰见突然到访的男友，被他当着同事的面追问。"],["8m.M107 8m.M200 8m.M201","他来复述争执，提到自己要求看私聊、让她删除同事，也问她有没有回应他的委屈。"],["8f.F107 8f.F200 8f.F201","她来复述争执，说自己拒绝交出聊天记录，也拒绝删除同事。"],["8m.M202B5 8m.M202B7 8m.M202O5 8m.M202O7 8m.M202S 8m.M203B5 8m.M203B7 8m.M203O5 8m.M203O7 8m.M203S","他和助手借过去的经历重新回顾这次争执。"],["8f.F202B5 8f.F202B7 8f.F202O5 8f.F202O7 8f.F202S 8f.F203B5 8f.F203B7 8f.F203O5 8f.F203O7 8f.F203S","她和助手借过去的经历重新回顾这次争执。"],["8m.M202E 8m.M203E","他向助手说起自己当时没有被听见的感受。"],["8f.F202E 8f.F203E","她向助手说起自己被怀疑时的感受。"],["8m.M301R","他承认索看私聊和要求删人不妥，向女友道歉。"],["8f.F301RE 8f.F302RE","她收到道歉后仍然生气，读到他第二次回应后，也想为自己说过的话道歉。"],["8m.M302RE","道歉被反问后，他承认自己刚才的指责，让她晚点再回。"],["8f.F301ER 8f.F301RR","她想起自己当众说的话，决定为此道歉。"],["8m.M301ER 8m.M302ER","他收到道歉时仍有怨气，读完她后续的回应后，也承认自己不该突然去找她并当面质问。"],["8f.F302ER 8f.F303ER","道歉被顶回来后，她说明了当时为什么急着走，随后也收到他的道歉。"],["8m.M302RR 8m.M303RE 8m.M303ER","他来问怎么约她见面，想当面说清楚。"],["8f.F304G 8m.M304G","两人约好等她忙完后在楼下见。"],["8f.F305G 8m.M305G","两人当面谈过，约好到访前先确认，需要冷静时先说一声。"],["8f.F301E 8f.F302E","她决定结束关系，发出分手消息后准备回家。"],["8m.M301E 8m.M302E 8m.M303E","他收到分手消息，一时不知道怎么回，后来放下了手机。"]],Y1=_1.map(([l,s])=>({beatIds:l.split(" "),text:s}));function j1(l){const s=new Map(l.beatIds.map((f,p)=>[f,p])),c=Y1.map(f=>({text:f.text,beatIds:f.beatIds.filter(p=>s.has(p))})).filter(f=>f.beatIds.length>0),u=new Set(c.flatMap(f=>f.beatIds)),d=l.beatIds.filter(f=>!u.has(f));return d.length&&c.push({text:"本次会话还有其他已处理消息。",beatIds:d}),c.sort((f,p)=>Math.min(...f.beatIds.map(v=>s.get(v)))-Math.min(...p.beatIds.map(v=>s.get(v))))}const fg=["left","right"],Kh=3400;function z1({script:l,state:s,now:c,reduced:u,replacement:d,onCancelReplacement:f,onReplace:p,onForget:v}){var Me,xe;const{t:k}=In(),[b,w]=ae.useState({left:!0,right:!0}),[g,S]=ae.useState({});function C($){var _e,ye;const Oe=s.ritual[$];if(!(!Oe||Oe.phase==="mask"&&Oe.contextTo!==void 0))return Oe.contextTo===void 0?Oe.from:(ye=(_e=s.archive)==null?void 0:_e[$].at(-1))==null?void 0:ye.section}const Z=C("left"),ee=C("right"),ne=!!Dl(s),Se=((Me=s.context)==null?void 0:Me.left)??s.chapter.left,we=((xe=s.context)==null?void 0:xe.right)??s.chapter.right,he=ae.useRef(null),se=fg.flatMap($=>{var Oe;return(((Oe=s.archive)==null?void 0:Oe[$])??[]).flatMap(_e=>{var ye,Ce;return _e.section===void 0||((ye=s.ritual[$])==null?void 0:ye.phase)==="mask"&&_e.section===((Ce=s.context)==null?void 0:Ce[$])?[]:[`${$}:${_e.section}`]})}),be=ae.useRef(new Set(se));return ae.useLayoutEffect(()=>{var _e,ye;const $=Array.from(((_e=he.current)==null?void 0:_e.querySelectorAll("[data-archive-title]"))??[]),Oe=new Set(se);be.current=new Set([...be.current].filter(Ce=>Oe.has(Ce)));for(const Ce of $){const Fe=Ce.dataset.archiveTitle;!Oe.has(Fe)||be.current.has(Fe)||(be.current.add(Fe),u||(ye=Ce.animate)==null||ye.call(Ce,[{opacity:0,transform:"translateX(-5px)"},{opacity:1,transform:"translateX(0)"}],{duration:320,easing:"ease-out"}))}}),ae.useLayoutEffect(()=>{const $=he.current,Oe=[...($==null?void 0:$.querySelectorAll("[data-recording]"))??[]].at(-1);if(!$||!Oe)return;const _e=$.getBoundingClientRect(),ye=Oe.getBoundingClientRect();ye.bottom>_e.bottom?$.scrollTop+=ye.bottom-_e.bottom:ye.top<_e.top&&($.scrollTop+=ye.top-_e.top)},[Z,ee,b,g,c]),ae.useEffect(()=>{w({left:!0,right:!0}),S({})},[s.runId]),ae.useEffect(()=>{Z!==void 0&&(w($=>({...$,left:!0})),S($=>({...$,[`left:${Z}`]:!0}))),ee!==void 0&&(w($=>({...$,right:!0})),S($=>({...$,[`right:${ee}`]:!0}))),ne&&(w({left:!0,right:!0}),S($=>({...$,[`left:${Se}`]:!0,[`right:${we}`]:!0})))},[Z,ee,ne,Se,we,s.runId]),ae.useEffect(()=>{d&&w($=>({...$,[d.channel]:!0}))},[d]),ae.useLayoutEffect(()=>{var $,Oe;d&&((Oe=($=he.current)==null?void 0:$.querySelector("[data-replacement-option]"))==null||Oe.focus())},[d,b]),_.jsxs("aside",{className:"archive terminal-column","aria-label":"Context Store · Summary / Memory","data-testid":"terminal-archive",children:[_.jsxs("header",{className:"pane-head ascii-rule",children:[_.jsx("span",{className:"pane-name",children:"CONTEXT STORE"}),_.jsx("span",{className:"archive-kind",children:"SUMMARY / MEMORY"})]}),_.jsx("div",{className:"archive-scroll",ref:he,children:fg.map($=>{var V,te;const Oe=((V=s.archive)==null?void 0:V[$])??[],_e=s.memories[$],ye=_e.filter(P=>!Oe.some(Re=>Re.beatIds.includes(P.beatId))),Ce=s.ritual[$],Fe=(te=s.context)==null?void 0:te[$],Ge=!ne&&Fe!==void 0&&!Oe.some(P=>P.section===Fe),je=$==="left"?Z:ee,j=(d==null?void 0:d.channel)===$?d.entry:void 0,me=Hl(s,$)===5?P=>v($,P):void 0;return _.jsxs("div",{className:"archive-folder",children:[_.jsxs("button",{className:"tree-toggle","aria-expanded":b[$],type:"button",onClick:()=>w(P=>({...P,[$]:!P[$]})),children:[_.jsx("span",{"aria-hidden":"true",children:b[$]?"[-]":"[+]"})," USER ",Pa[$].id," / ",k(Pa[$].name,$==="left"?"Him":"Her")]}),b[$]?_.jsxs("div",{className:"archive-branches",children:[j?_.jsxs("div",{className:"archive-replacement","aria-label":k("替换记忆","Replace memory"),children:[_.jsxs("p",{children:[k("[MEM] 已满 · 选择一条替换为","[MEM] Full · Replace one with")," 「",k(j.label,Fh(j).label),"」"]}),_e.map(P=>_.jsx("button",{type:"button",className:"tree-toggle","data-replacement-option":!0,onClick:()=>p(P.label),children:k(`替换「${P.label}」`,`Replace “${Fh(P).label}”`)},P.label)),_.jsxs("button",{type:"button",className:"memory-entry",onClick:f,children:["[",k("取消","Cancel"),"]"]})]}):null,!Oe.length&&!ye.length&&!Ge?_.jsx("div",{className:"muted",children:k("└ 尚无记录","└ No records")}):null,ye.length?_.jsxs("details",{className:"archive-pending",children:[_.jsxs("summary",{children:[k("[MEMORY] 当前会话 · ","[MEMORY] Current session · "),ye.length]}),ye.map(P=>_.jsx(rp,{memory:P,onForget:me},P.label))]}):null,Oe.map(P=>{var re,W;const Re=P.section??P.chapter,Qe=`${$}:${Re}`,at=je===Re;if(P.section===Fe&&(Ce==null?void 0:Ce.contextTo)!==void 0&&Ce.phase==="mask")return _.jsx("div",{className:"archive-session muted",children:k("└ 收录中…","└ Recording…")},Qe);const A=at&&Ce&&!u?$g(Ce,c):Kh,X=P.section===void 0?(W=(re=l.chapters)==null?void 0:re.find(pe=>pe.index===P.chapter))==null?void 0:W.title:Bg[P.section-1];return _.jsxs("div",{className:"archive-session","data-recording":at||void 0,children:[_.jsxs("button",{className:"tree-toggle","aria-expanded":!!g[Qe],type:"button",onClick:()=>S(pe=>({...pe,[Qe]:!pe[Qe]})),children:[_.jsx("span",{"aria-hidden":"true",children:g[Qe]?"[-]":"[+]"})," ",_.jsx("span",{"data-archive-title":Qe,className:"archive-title",children:k((X==null?void 0:X.replace(/^第[一二三四五六七八九十\d]+[幕章]\s*·\s*/,""))??"会话记录",h0[(P.section??0)-1]??"Session record")})]}),g[Qe]?_.jsx(B1,{entry:P,memories:_e,elapsed:A,onForget:me}):null]},Qe)}),Ge?_.jsx("div",{className:"archive-session muted",children:k("└ 收录中…","└ Recording…")},`${$}:${Fe}`):null]}):null]},$)})})]})}function B1({entry:l,memories:s,elapsed:c,onForget:u}){const{t:d,language:f}=In(),p=ae.useMemo(()=>j1(l).map(w=>({...w,text:f==="en"?c0[w.text]??w.text:w.text})),[l,f]),v=ae.useMemo(()=>p.map(w=>Array.from(w.text)),[p]),k=v.reduce((w,g)=>w+g.length+3,0);let b=Math.floor(Math.max(0,Math.min(1,c/Kh))*k);return _.jsxs("div",{className:"archive-segments",children:[c<Kh?_.jsxs("p",{className:"archive-writing",children:[_.jsx("span",{"aria-hidden":"true",children:"[CTX]"})," ",d("正在收录…","Recording…")]}):null,p.map((w,g)=>{const S=v[g],C=Math.max(0,Math.min(b,S.length));return b-=S.length+3,C?_.jsxs("div",{className:"archive-segment",children:[_.jsx("span",{"aria-hidden":"true",children:g===p.length-1?"└":"├"}),_.jsxs("div",{children:[S.slice(0,C).join(""),C<S.length?_.jsx("span",{className:"caret","aria-hidden":"true"}):null,C===S.length?s.filter(Z=>w.beatIds.includes(Z.beatId)).map(Z=>_.jsx(rp,{memory:Z,onForget:u},Z.label)):null]})]},w.beatIds[0]):null})]})}function rp({memory:l,onForget:s}){const{t:c}=In(),u=Fh(l);return _.jsxs("details",{className:"archive-memory",children:[_.jsxs("summary",{children:["[MEM] ",c(l.label,u.label)]}),_.jsx("p",{children:c(`「${l.text}」`,`“${u.text}”`)}),s?_.jsxs("button",{type:"button",className:"memory-entry memory-action","aria-label":c(`舍弃「${l.label}」`,`Discard “${u.label}”`),onClick:()=>s(l.label),children:["[",c("舍弃","Discard"),"]"]}):null]})}const ap=1440,ip=920;function mg(){const l=window.innerWidth<720?12:40;return Math.min(1,Math.max(1,window.innerWidth-l)/ap,Math.max(1,window.innerHeight-l)/ip)}function ac({children:l,intro:s}){const[c,u]=ae.useState(mg);return ae.useEffect(()=>{const d=()=>u(mg());return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),_.jsx("main",{className:"stage",children:_.jsx("div",{className:"stage-frame",style:{width:ap*c,height:ip*c},children:_.jsx("div",{className:"game-canvas","data-testid":"game-canvas","data-intro":s?!0:void 0,inert:!!s,style:{transform:`scale(${c})`,...s?Object.fromEntries(Object.entries(s).map(([d,f])=>[`--intro-${d}`,`${f}%`])):{}},children:l})})})}const op="shuangxian",Bl=`${op}.progress.v2`,ic=`${op}.progress.v1`;let Va=null;function q1(){const l=Va;return Va=null,l}function U1(l){try{localStorage.setItem(Bl,JSON.stringify({version:2,state:l}))}catch(s){console.error("[存档] 写入失败",s)}}function L1(){try{return!!(localStorage.getItem(Bl)||localStorage.getItem(ic))}catch{return!1}}function Ja(){try{localStorage.removeItem(Bl),localStorage.removeItem(ic)}catch(l){console.error("[存档] 清除失败",l)}}function G1(l){var s,c;try{const u=localStorage.getItem(Bl);if(!u)return localStorage.getItem(ic)&&(Va="剧本已更新到第五章定稿，旧进度无法继续，已从第一幕重新开始。",Ja()),null;const d=JSON.parse(u);if(!bn(d)||d.version!==2||!bn(d.state))return Va="存档格式已升级，已从第一幕重新开始。",Ja(),null;const f=d.state;if(!Q1(f,l))return Va="剧本已更新，旧进度里的节拍已不存在，已从第一幕重新开始。",Ja(),null;const{activated:p,completed:v,superseded:k}=F1(f,l);for(const g of l)!Ph(g,l)||v.includes(g.id)||p.includes(g.id)||k.has(g.id)||p.push(g.id);const b={...f,flags:X1(f,v),activated:p,completed:v,pending:{left:f.pending.left??null,right:f.pending.right??null},memories:J1(f.memories,l),chapter:Z1(f.chapter,l),ritual:V1(f.ritual),archive:s1(f.archive,l),context:K1(f.context),endings:Array.isArray(f.endings)?f.endings.filter(g=>typeof g=="string"):[],error:typeof f.error=="string"?f.error:null,runId:typeof f.runId=="number"?f.runId:0};let w=l1(b,l,g=>$a(b,g,l));for(const g of["left","right"]){if(w.ritual[g])continue;const S=((s=w.pending[g])==null?void 0:s.beatId)??((c=w.messages.filter(Z=>Z.channel===g).at(-1))==null?void 0:c.beatId),C=l.find(Z=>Z.id===S);C&&(w=qg(w,C,l))}return w}catch(u){return console.error("[存档] 读取失败",u),Va="存档读取失败，已从第一幕重新开始。",Ja(),null}}function X1(l,s){return"当面问微信"in l.flags?l.flags:s.some(u=>/^5[fm]\./.test(u))||Object.values(l.pending).some(u=>u&&/^5[fm]\./.test(u.beatId))?{...l.flags,当面问微信:!1}:s.includes("4.2.3-direct")?{...l.flags,当面问微信:!0}:l.flags.男生意向!==void 0?{...l.flags,当面问微信:!1}:l.flags}function F1(l,s){var p,v;const c=[...l.activated],u=[...l.completed],d=new Set,f="3.4.arrived";if(!s.some(k=>k.id===f))return{activated:c,completed:u,superseded:d};u.includes("3.4.1")&&!u.includes(f)&&!c.includes(f)&&(((p=l.chapter)==null?void 0:p.right)>=4||u.includes("3.4.2")||!c.includes("3.4.2"))&&u.push(f);for(const k of["3.2.2","3.3.1"]){const b=k+"-A";(u.includes(k)||((v=l.pending.left)==null?void 0:v.beatId)===k)&&d.add(b)}return{activated:c.filter(k=>!d.has(k)),completed:u,superseded:d}}function Q1(l,s){const c=new Set(s.map(u=>u.id));if(!Array.isArray(l.completed)||!l.completed.every(u=>c.has(u))||!Array.isArray(l.activated)||!l.activated.every(u=>c.has(u))||!Array.isArray(l.messages)||!bn(l.flags)||!bn(l.pending))return!1;for(const u of l.messages)if(!bn(u)||u.channel!=="left"&&u.channel!=="right"||typeof u.text!="string"||typeof u.id!="string"||u.delivery!=="type"&&u.delivery!=="pop"&&u.delivery!=="image"&&u.delivery!=="thought")return!1;for(const u of["left","right"]){const d=l.pending[u];if(d!=null&&(!bn(d)||d.kind!=="lines"&&d.kind!=="choices"&&d.kind!=="reply"||typeof d.beatId!="string"||!c.has(d.beatId)))return!1}return!0}function Z1(l,s){const c=f=>{const p=s.filter(v=>v.channel===f).map(v=>v.chapter??1);return p.length>0?Math.min(...p):1};if(!bn(l))return{left:c("left"),right:c("right")};const u=typeof l.left=="number"?l.left:c("left"),d=typeof l.right=="number"?l.right:c("right");return{left:u,right:d}}function K1(l){if(!bn(l))return;const s={};return Cl(l.left)&&(s.left=l.left),Cl(l.right)&&(s.right=l.right),s}function V1(l){const s={left:null,right:null};if(!bn(l))return s;for(const c of["left","right"]){const u=l[c];bn(u)&&(u.phase!=="mask"&&u.phase!=="pause"||typeof u.until!="number"||typeof u.from!="number"||typeof u.to!="number"||(s[c]={from:u.from,to:u.to,...Cl(u.contextTo)?{contextTo:u.contextTo}:{},phase:u.phase,until:u.until,...typeof u.startedAt=="number"?{startedAt:u.startedAt}:{}}))}return s}function bn(l){return typeof l=="object"&&l!==null}function J1(l,s){const c={left:[],right:[]};if(!bn(l))return c;const u=f=>Array.isArray(f)&&f.every(p=>bn(p)&&typeof p.label=="string")?f.map(p=>p):[],d=(f,p)=>u(f).filter(v=>{var b,w;const k=s.find(g=>g.id===v.beatId&&g.channel===p);return(k==null?void 0:k.chapter)===1&&k.记忆候选&&v.label==="店的位置"?(b=k.记忆候选)==null?void 0:b.some(g=>g.缩略标签===v.label&&g.短句===v.text):(k==null?void 0:k.chapter)!==5?!0:(w=k.记忆候选)==null?void 0:w.some(g=>g.缩略标签===v.label)});return{left:d(l.left,"left"),right:d(l.right,"right")}}function W1(l){const s=c=>{const u=m1(c,l);return u===c.error?c:{...c,error:u}};return(c,u)=>{var d;try{switch(u.type){case"reset":return{...Qg(l),runId:c.runId+1};case"sync-roots":return s(y1(c,l));case"arm":return s(b1(c,u.channel,l,u.now??Date.now()));case"commit-line":return s(k1(c,u.channel,l));case"choose":return s(S1(c,u.channel,u.index,l));case"commit-reply":return s(x1(c,u.channel,l));case"save-memory":{const f=l.find(v=>v.id===u.beatId&&v.channel===u.channel);return!((d=f==null?void 0:f.记忆候选)==null?void 0:d.find(v=>v.缩略标签===u.label&&v.短句===u.text))||!c.messages.some(v=>v.channel===u.channel&&v.beatId===u.beatId&&v.text.includes(u.text))?c:s(h1(c,u.channel,{label:u.label,text:u.text,beatId:u.beatId},u.replaceLabel))}case"forget-memory":return s(c1(c,u.channel,u.label));case"clear-messages":return s(Jg(c,u.channel));case"ritual-tick":return s(f1(c,u.channel,u.now));case"clear-error":return{...c,error:null};default:return c}}catch(f){const p=f instanceof Error?f.message:"引擎状态更新失败";return console.error("[引擎]",p),{...c,error:p}}}}function $1(l,s=!1,c=!0){const u=l.beats,d=ae.useMemo(()=>W1(u),[u]),[f,p]=ae.useReducer(d,u,k=>G1(k)??Qg(k)),[v]=ae.useState(()=>q1());return ae.useEffect(()=>{c&&U1(f)},[f,c]),ae.useEffect(()=>{f.error&&console.error(f.error)},[f.error]),ae.useEffect(()=>{if(!c)return;const k=Date.now(),b=["left","right"].filter(C=>{const Z=f.ritual[C];return Z!==null&&(s||Z.until<=k)});if(b.length>0){for(const C of b)p({type:"ritual-tick",channel:C,now:Math.max(k,f.ritual[C].until)});return}const w=["left","right"].map(C=>{var Z;return(Z=f.ritual[C])==null?void 0:Z.until}).filter(C=>C!==void 0);if(w.length===0)return;const g=Math.min(...w),S=window.setTimeout(()=>{const C=Date.now();for(const Z of["left","right"])f.ritual[Z]&&f.ritual[Z].until<=C&&p({type:"ritual-tick",channel:Z,now:C})},Math.max(0,g-k));return()=>window.clearTimeout(S)},[f.ritual,s,c]),ae.useEffect(()=>{if(!c)return;const k=d1(f,u);k&&p({type:"arm",channel:k.channel})},[f,u,c]),{state:f,dispatch:p,notice:v}}const P1=null,Vi=["left","right"];function eb({script:l,onTitle:s,intro:c}){const u=!c,d=rc(),{state:f,dispatch:p,notice:v}=$1(l,d,u),k=Dl(f),{t:b}=In(),[w,g]=ae.useState(tp),S=ae.useRef({runId:f.runId,memories:f.memories});ae.useEffect(()=>{const V=S.current;S.current={runId:f.runId,memories:f.memories},f.runId===V.runId&&Vi.some(te=>f.memories[te].some(P=>!V.memories[te].some(Re=>Re.label===P.label&&Re.beatId===P.beatId)))&&R1()},[f.memories,f.runId]);const[C,Z]=ae.useState({}),ee=P1,[ne,Se]=ae.useState(!1),[we,he]=ae.useState(),se=we&&!f.ritual[we.channel]&&f.messages.some(V=>V.channel===we.channel&&V.beatId===we.entry.beatId)?we:void 0,[be,Me]=ae.useState(),xe=ae.useRef({}),$=ae.useRef({}),Oe=E1(!d&&!!(f.ritual.left||f.ritual.right)),_e=Vi.find(V=>{var te;return f.pending[V]&&((te=f.pending[V])==null?void 0:te.kind)!=="choices"})??Vi.find(V=>{var te;return((te=f.pending[V])==null?void 0:te.kind)==="choices"}),ye=(be==null?void 0:be.channel)??_e??"left";function Ce(V){var P;const te=f.pending[V];if(!(!te||te.kind!=="choices"))return((P=l.beatById)==null?void 0:P.get(te.beatId))??l.beats.find(Re=>Re.id===te.beatId)}function Fe(V){var te,P;return((P=(te=Ce(V))==null?void 0:te.choices)==null?void 0:P.flatMap((Re,Qe)=>ec(f,V,Re)?[]:[Qe]))??[]}function Ge(V){var P;if(ye!==V)return-1;const te=Fe(V);return(be==null?void 0:be.beatId)===((P=Ce(V))==null?void 0:P.id)&&te.includes((be==null?void 0:be.index)??-1)?be.index:te[0]??-1}function je(V,te){var P;te>=0&&!Fe(V).includes(te)||Me({channel:V,index:te,beatId:(P=Ce(V))==null?void 0:P.id})}function j(V,te){const P=Ce(V);if(!P||!Fe(V).includes(te)||ne)return;const Re=`${f.runId}:${V}:${P.id}`;xe.current[V]!==Re&&(xe.current[V]=Re,Me(void 0),p({type:"choose",channel:V,index:te}))}ae.useEffect(()=>{function V(te){var Qe,at,A,X;if(!u||ne||te.altKey||te.ctrlKey||te.metaKey||te.shiftKey||te.defaultPrevented||document.querySelector('[role="dialog"]'))return;const P=te.target instanceof HTMLElement?te.target:null;if(P!=null&&P.closest("input,textarea,select,[contenteditable],.archive"))return;const Re=P==null?void 0:P.closest(".choice-line");if(!(P!=null&&P.closest("button,a,summary")&&!Re)){if(te.key==="ArrowLeft"||te.key==="ArrowRight")te.preventDefault(),je(te.key==="ArrowLeft"?"left":"right",-1),Re==null||Re.blur();else if(te.key==="ArrowUp"||te.key==="ArrowDown"){te.preventDefault();const re=Fe(ye);if(!re.length)return;const W=re.indexOf(Ge(ye)),pe=te.key==="ArrowDown"?1:-1;je(ye,re[(W+pe+re.length)%re.length]),Re==null||Re.blur()}else if(te.key==="Enter"){if(te.preventDefault(),te.repeat)return;const re=f.pending[ye];if((re==null?void 0:re.kind)==="lines"||(re==null?void 0:re.kind)==="reply"){(at=(Qe=$.current)[ye])==null||at.call(Qe);return}const W=Ge(ye);if(W>=0)j(ye,W);else if(!re){const pe=Vi.filter(Te=>{const ce=f.pending[Te];return(ce==null?void 0:ce.kind)==="lines"||(ce==null?void 0:ce.kind)==="reply"});pe.length===1&&((X=(A=$.current)[pe[0]])==null||X.call(A))}}}}return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)});function me(){Ja(),p({type:"reset"}),Me(void 0),he(void 0),Se(!1)}return _.jsxs(ac,{intro:c,children:[_.jsxs("header",{className:"topbar ascii-rule",children:[_.jsx("span",{className:"topbar-title","data-testid":"game-title",children:"He said, she said"}),_.jsx("span",{className:"topbar-tag",children:b("助手 · 双会话","Assistant · Dual Sessions")}),_.jsxs("div",{className:"topbar-actions",children:[_.jsx(pg,{}),_.jsxs("button",{type:"button","aria-pressed":!w,onClick:()=>{O1(!w),g(!w)},children:["[",w?b("声音关","Sound Off"):b("声音开","Sound On"),"]"]}),ee,_.jsxs("button",{type:"button","data-testid":"restart",onClick:()=>Se(!0),children:["[",b("重新开始","Restart"),"]"]}),s?_.jsxs("button",{type:"button",onClick:s,children:["[",b("返回标题","Title Menu"),"]"]}):null]})]}),v?_.jsx("div",{className:"notice",role:"status",children:v}):null,k?_.jsx("div",{className:"notice",role:"status",children:b(k==="未交换微信"?"桌游局结束后，两人没有交换微信。":`结局 · ${k}`,d0[k==="未交换微信"?"桌游局结束后，两人没有交换微信。":k]??k)}):null,_.jsxs("div",{className:"duo",children:[Vi.map(V=>_.jsx(H1,{script:l,channel:V,state:f,dispatch:p,active:!!f.pending[V],focused:ye===V,selected:Ge(V),skipRefs:$,running:u,speeds:void 0,onMemoryFull:te=>he({channel:V,entry:te}),onMove:te=>je(V,te),onPick:te=>j(V,te),now:Oe,reduced:d},V)),_.jsx(z1,{script:l,state:f,now:Oe,reduced:d,replacement:se,onCancelReplacement:()=>he(void 0),onReplace:V=>{se&&(p({type:"save-memory",channel:se.channel,...se.entry,replaceLabel:V}),he(void 0))},onForget:(V,te)=>p({type:"forget-memory",channel:V,label:te})})]}),ne?_.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":b("确定重来","Confirm restart"),children:_.jsxs("div",{className:"dialog",children:[_.jsx("h2",{children:b("确定重来？","Restart the game?")}),_.jsx("p",{children:b("当前两条线的进度都会清空，回到第一幕开头。","Both sessions will reset to the beginning.")}),_.jsxs("div",{className:"dialog-actions",children:[_.jsxs("button",{type:"button",autoFocus:!0,onClick:()=>Se(!1),children:["[",b("取消","Cancel"),"]"]}),_.jsxs("button",{type:"button","data-testid":"restart-confirm",onClick:me,children:["[",b("确定重来","Restart Game"),"]"]})]})]})}):null]})}const tb=1500,Xh=240,yg=900,Za=420,nb=1500;function rb(l,s){const c=Pa.left,u=Pa.right,d=k=>`      性别 ${k.gender} / ${k.age} 岁 / ${k.work} / ${k.city}`,f=[["[BOOT] 校验会话模块 … OK",24,110],["[SYS] 导入助手系统提示词 … OK",25,130],[`[USER ${c.id}] 载入用户信息 · ${c.name}`,40,150],[d(c),38,300],[`[USER ${u.id}] 载入用户信息 · ${u.name}`,40,150],[d(u),38,300],[l==="new"?"[MEM] 初始化两路独立记忆区 … OK":"[MEM] 恢复两路上下文与记忆 … OK",25,135],["[CTX] 建立会话与摘要目录",26,0]],p=["[BOOT] Check session modules … OK","[SYS] Import assistant prompts … OK","[USER 01] Load user profile · Him","      Male / 21 / University student / Xi'an","[USER 02] Load user profile · Her","      Female / 22 / University student and intern / Xi'an",l==="new"?"[MEM] Initialize separate memory stores … OK":"[MEM] Restore both sessions and memory … OK","[CTX] Prepare session archive"];let v=90;return f.map(([k,b,w],g)=>{const S=s==="en"?p[g]:k,C=k.length*b,Z={text:S,start:v,duration:C};return v+=C+w,Z})}function Ji(l,s,c){const u=Math.max(0,Math.min(1,l/s));return Math.floor(u*c)/c*100}function ab({entry:l,script:s,onTitle:c}){const u=rc(),[d,f]=ae.useState(0),{language:p,t:v}=In(),k=rb(l,p),b=k.at(-1),w=b.start+b.duration,g=w+tb,S=g+Xh+yg,C=S+3*Za,Z=C+nb;return ae.useEffect(()=>{if(u){f(Z);return}const ee=Date.now(),ne=window.setInterval(()=>f(Math.min(Z,Date.now()-ee)),20),Se=[w,g,C,Z].map(we=>window.setTimeout(()=>{f(Math.min(Z,Date.now()-ee)),we===Z&&window.clearInterval(ne)},we));return()=>{window.clearInterval(ne),Se.forEach(we=>window.clearTimeout(we))}},[u,w,g,C,Z]),u||d>=g?_.jsx(eb,{script:s,onTitle:c,intro:u||d>=Z?void 0:{header:Ji(d-g,Xh,16),dividers:Ji(d-g-Xh,yg,42),left:Ji(d-S,Za,24),right:Ji(d-S-Za,Za,24),archive:Ji(d-S-2*Za,Za,24)}}):_.jsx(ac,{children:_.jsx("div",{className:"boot-console","data-testid":"boot-console","data-hold":d>=w||void 0,"aria-label":v("正在启动","Starting up"),children:k.filter(ee=>d>=ee.start).map(ee=>{const ne=Math.min(ee.text.length,Math.floor((d-ee.start)*ee.text.length/ee.duration));return _.jsxs("div",{className:ee.text.startsWith("[USER")?"boot-user":void 0,children:[ee.text.slice(0,ne),ne<ee.text.length?_.jsx("span",{className:"caret","aria-hidden":"true"}):null]},ee.text)})})})}function ib({hasSave:l,onBegin:s}){const{t:c}=In(),[u,d]=ae.useState(0),[f,p]=ae.useState(!1),v=[{label:c("开始游戏","Start Game"),action:()=>l?p(!0):s("new")},...l?[{label:c("继续游戏","Continue"),action:()=>s("resume")}]:[]];return ae.useEffect(()=>{const k=b=>{var S;if(f||b.altKey||b.ctrlKey||b.metaKey||b.defaultPrevented)return;const w=l?2:1,g=b.target instanceof HTMLElement?b.target:null;b.key==="ArrowUp"||b.key==="ArrowDown"?(b.preventDefault(),(S=g==null?void 0:g.closest(".menu-choice"))==null||S.blur(),d(C=>(C+(b.key==="ArrowDown"?1:-1)+w)%w)):b.key==="Enter"&&!b.repeat&&!(g!=null&&g.closest("button"))&&(b.preventDefault(),l&&u===1?s("resume"):l?p(!0):s("new"))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[u,f,l,s]),_.jsxs(ac,{children:[_.jsxs("header",{className:"topbar ascii-rule title-bar",children:[_.jsx("span",{children:c("[SYS] 双会话助手","[SYS] Dual-session assistant")}),_.jsx("span",{children:l?c("[CTX] 已有存档","[CTX] Saved game found"):c("[LINK] 等待接入","[LINK] Awaiting connection")}),_.jsx(pg,{})]}),_.jsxs("div",{className:"title-grid",children:[_.jsxs("div",{className:"terminal-menu",children:[_.jsx("div",{className:"menu-system",children:c("/ 会话入口","/ Session Entry")}),_.jsxs("h1",{children:["He said,",_.jsx("br",{}),"she said",_.jsx("span",{"aria-hidden":"true",children:"_"})]}),_.jsx("div",{className:"menu-commands","aria-label":c("主菜单","Main menu"),children:v.map((k,b)=>_.jsxs("button",{type:"button",className:"menu-choice choice-line","data-current":u===b||void 0,onMouseEnter:()=>d(b),onFocus:()=>d(b),onClick:k.action,children:[_.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:u===b?">":""}),k.label]},k.label))})]}),_.jsxs("aside",{className:"title-sessions","aria-label":c("会话入口信息","Session information"),children:[_.jsx("div",{className:"ascii-rule title-session-head",children:c("[LINK] 用户通道","[LINK] User channels")}),Object.values(Pa).map(k=>_.jsxs("div",{className:"title-user",children:[_.jsxs("span",{className:"title-id",children:["[USER ",k.id,"]"]}),_.jsx("b",{children:c(k.name,k.id==="01"?"Him":"Her")}),_.jsx("span",{children:c("待接入","Awaiting connection")})]},k.id)),_.jsxs("div",{className:"title-memory ascii-rule",children:[_.jsx("div",{children:c("[MEM] 分窗记忆","[MEM] Separate memory stores")}),_.jsx("p",{children:c("上下文独立 · 摘要按窗收录","Each session keeps its own context and archive")})]})]})]}),_.jsxs("footer",{className:"title-keys ascii-rule",children:[_.jsx("span",{children:c("↑ ↓ 选择","↑ ↓ Select")}),_.jsx("span",{children:c("Enter 确认","Enter Confirm")})]}),f?_.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":c("开始新游戏","Start New Game"),children:_.jsxs("div",{className:"dialog",children:[_.jsx("h2",{children:c("开始新游戏？","Start a new game?")}),_.jsx("p",{children:c("当前两条线的进度都会清空。","Both sessions will be reset.")}),_.jsxs("div",{className:"dialog-actions",children:[_.jsxs("button",{type:"button",autoFocus:!0,onClick:()=>p(!1),children:["[",c("取消","Cancel"),"]"]}),_.jsxs("button",{type:"button",onClick:()=>s("new"),children:["[",c("开始新游戏","Start New Game"),"]"]})]})]})}):null]})}function ob(){const[l,s]=ae.useState(()=>{try{return localStorage.getItem("shuangxian.language")==="zh"?"zh":"en"}catch{return"en"}});return ae.useEffect(()=>{document.documentElement.lang=l==="en"?"en":"zh-CN";try{localStorage.setItem("shuangxian.language",l)}catch{}},[l]),_.jsx(gg.Provider,{value:{language:l,setLanguage:s},children:_.jsx(lb,{})})}function lb(){const{t:l}=In(),s=ae.useMemo(()=>K0(),[]),[c,u]=ae.useState("title"),[d,f]=ae.useState("new"),p=ae.useCallback(()=>u("title"),[]),v=ae.useCallback(k=>{np(),k==="new"&&Ja(),f(k),u("boot")},[]);return ae.useEffect(()=>{s.error&&console.error(s.error)},[s]),s.script?c==="title"?_.jsx(ib,{hasSave:L1(),onBegin:v}):_.jsx(ab,{entry:d,script:s.script,onTitle:p}):_.jsx("main",{className:"stage",children:_.jsxs("div",{className:"dialog",style:{width:560},children:[_.jsx("h2",{children:l("这份剧本还过不了检查","The story failed validation")}),_.jsx("p",{children:l("引擎按字段契约逐项校验，下面是要修的地方：","The game could not load the story.")}),_.jsx("pre",{className:"script-error",style:{maxHeight:420,whiteSpace:"pre-wrap",borderRadius:12},"data-testid":"script-error",children:s.error})]})})}i0.createRoot(document.getElementById("root")).render(_.jsx(ae.StrictMode,{children:_.jsx(ob,{})}));
