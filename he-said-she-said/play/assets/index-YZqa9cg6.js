(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const w of m.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function c(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=c(f);fetch(f.href,m)}})();var hh={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy;function Gv(){if(Sy)return Fo;Sy=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,f,m){var w=null;if(m!==void 0&&(w=""+m),f.key!==void 0&&(w=""+f.key),"key"in f){m={};for(var b in f)b!=="key"&&(m[b]=f[b])}else m=f;return f=m.ref,{$$typeof:r,type:u,key:w,ref:f!==void 0?f:null,props:m}}return Fo.Fragment=s,Fo.jsx=c,Fo.jsxs=c,Fo}var xy;function Xv(){return xy||(xy=1,hh.exports=Gv()),hh.exports}var _=Xv(),ch={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function Fv(){if(Ty)return Me;Ty=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),w=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),k=Symbol.for("react.view_transition"),D=Symbol.iterator;function U(T){return T===null||typeof T!="object"?null:(T=D&&T[D]||T["@@iterator"],typeof T=="function"?T:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,Te={};function ve(T,Z,J){this.props=T,this.context=Z,this.refs=Te,this.updater=J||V}ve.prototype.isReactComponent={},ve.prototype.setState=function(T,Z){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Z,"setState")},ve.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function de(){}de.prototype=ve.prototype;function ce(T,Z,J){this.props=T,this.context=Z,this.refs=Te,this.updater=J||V}var le=ce.prototype=new de;le.constructor=ce,ne(le,ve.prototype),le.isPureReactComponent=!0;var Fe=Array.isArray;function be(){}var W={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function Ee(T,Z,J){var re=J.ref;return{$$typeof:r,type:T,key:Z,ref:re!==void 0?re:null,props:J}}function Ne(T,Z){return Ee(T.type,Z,T.props)}function P(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function ae(T){var Z={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(J){return Z[J]})}var ye=/\/+/g;function Ce(T,Z){return typeof T=="object"&&T!==null&&T.key!=null?ae(""+T.key):Z.toString(36)}function j(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(be,be):(T.status="pending",T.then(function(Z){T.status==="pending"&&(T.status="fulfilled",T.value=Z)},function(Z){T.status==="pending"&&(T.status="rejected",T.reason=Z)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function fe(T,Z,J,re,pe){var Re=typeof T;(Re==="undefined"||Re==="boolean")&&(T=null);var we=!1;if(T===null)we=!0;else switch(Re){case"bigint":case"string":case"number":we=!0;break;case"object":switch(T.$$typeof){case r:case s:we=!0;break;case p:return we=T._init,fe(we(T._payload),Z,J,re,pe)}}if(we)return pe=pe(T),we=re===""?"."+Ce(T,0):re,Fe(pe)?(J="",we!=null&&(J=we.replace(ye,"$&/")+"/"),fe(pe,Z,J,"",function(It){return It})):pe!=null&&(P(pe)&&(pe=Ne(pe,J+(pe.key==null||T&&T.key===pe.key?"":(""+pe.key).replace(ye,"$&/")+"/")+we)),Z.push(pe)),1;we=0;var oe=re===""?".":re+":";if(Fe(T))for(var ke=0;ke<T.length;ke++)re=T[ke],Re=oe+Ce(re,ke),we+=fe(re,Z,J,Re,pe);else if(ke=U(T),typeof ke=="function")for(T=ke.call(T),ke=0;!(re=T.next()).done;)re=re.value,Re=oe+Ce(re,ke++),we+=fe(re,Z,J,Re,pe);else if(Re==="object"){if(typeof T.then=="function")return fe(j(T),Z,J,re,pe);throw Z=String(T),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return we}function he(T,Z,J){if(T==null)return T;var re=[],pe=0;return fe(T,re,"","",function(Re){return Z.call(J,Re,pe++)}),re}function He(T){if(T._status===-1){var Z=T._result,J=Z();J.then(function(re){(T._status===0||T._status===-1)&&(T._status=1,T._result=re,J.status===void 0&&(J.status="fulfilled",J.value=re))},function(re){(T._status===0||T._status===-1)&&(T._status=2,T._result=re,J.status===void 0&&(J.status="rejected",J.reason=re))}),T._status===-1&&(T._status=0,T._result=J)}if(T._status===1)return T._result.default;throw T._result}var ee=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function Pe(T){var Z=W.T,J={};J.types=Z!==null?Z.types:null,W.T=J;try{var re=T(),pe=W.S;pe!==null&&pe(J,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(be,ee)}catch(Re){ee(Re)}finally{Z!==null&&J.types!==null&&(Z.types=J.types),W.T=Z}}function Ge(T){var Z=W.T;if(Z!==null){var J=Z.types;J===null?Z.types=[T]:J.indexOf(T)===-1&&J.push(T)}else Pe(Ge.bind(null,T))}var ut={map:he,forEach:function(T,Z,J){he(T,function(){Z.apply(this,arguments)},J)},count:function(T){var Z=0;return he(T,function(){Z++}),Z},toArray:function(T){return he(T,function(Z){return Z})||[]},only:function(T){if(!P(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return Me.Activity=g,Me.Children=ut,Me.Component=ve,Me.Fragment=c,Me.Profiler=f,Me.PureComponent=ce,Me.StrictMode=u,Me.Suspense=S,Me.ViewTransition=k,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Me.__COMPILER_RUNTIME={__proto__:null,c:function(T){return W.H.useMemoCache(T)}},Me.addTransitionType=Ge,Me.cache=function(T){return function(){return T.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(T,Z,J){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var re=ne({},T.props),pe=T.key;if(Z!=null)for(Re in Z.key!==void 0&&(pe=""+Z.key),Z)!Oe.call(Z,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&Z.ref===void 0||(re[Re]=Z[Re]);var Re=arguments.length-2;if(Re===1)re.children=J;else if(1<Re){for(var we=Array(Re),oe=0;oe<Re;oe++)we[oe]=arguments[oe+2];re.children=we}return Ee(T.type,pe,re)},Me.createContext=function(T){return T={$$typeof:w,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:m,_context:T},T},Me.createElement=function(T,Z,J){var re,pe={},Re=null;if(Z!=null)for(re in Z.key!==void 0&&(Re=""+Z.key),Z)Oe.call(Z,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(pe[re]=Z[re]);var we=arguments.length-2;if(we===1)pe.children=J;else if(1<we){for(var oe=Array(we),ke=0;ke<we;ke++)oe[ke]=arguments[ke+2];pe.children=oe}if(T&&T.defaultProps)for(re in we=T.defaultProps,we)pe[re]===void 0&&(pe[re]=we[re]);return Ee(T,Re,pe)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(T){return{$$typeof:b,render:T}},Me.isValidElement=P,Me.lazy=function(T){return{$$typeof:p,_payload:{_status:-1,_result:T},_init:He}},Me.memo=function(T,Z){return{$$typeof:v,type:T,compare:Z===void 0?null:Z}},Me.startTransition=Pe,Me.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Me.use=function(T){return W.H.use(T)},Me.useActionState=function(T,Z,J){return W.H.useActionState(T,Z,J)},Me.useCallback=function(T,Z){return W.H.useCallback(T,Z)},Me.useContext=function(T){return W.H.useContext(T)},Me.useDebugValue=function(){},Me.useDeferredValue=function(T,Z){return W.H.useDeferredValue(T,Z)},Me.useEffect=function(T,Z){return W.H.useEffect(T,Z)},Me.useEffectEvent=function(T){return W.H.useEffectEvent(T)},Me.useId=function(){return W.H.useId()},Me.useImperativeHandle=function(T,Z,J){return W.H.useImperativeHandle(T,Z,J)},Me.useInsertionEffect=function(T,Z){return W.H.useInsertionEffect(T,Z)},Me.useLayoutEffect=function(T,Z){return W.H.useLayoutEffect(T,Z)},Me.useMemo=function(T,Z){return W.H.useMemo(T,Z)},Me.useOptimistic=function(T,Z){return W.H.useOptimistic(T,Z)},Me.useReducer=function(T,Z,J){return W.H.useReducer(T,Z,J)},Me.useRef=function(T){return W.H.useRef(T)},Me.useState=function(T){return W.H.useState(T)},Me.useSyncExternalStore=function(T,Z,J){return W.H.useSyncExternalStore(T,Z,J)},Me.useTransition=function(){return W.H.useTransition()},Me.version="19.3.0",Me}var Ey;function Fh(){return Ey||(Ey=1,ch.exports=Fv()),ch.exports}var ie=Fh(),dh={exports:{}},Qo={},fh={exports:{}},mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy;function Qv(){return Iy||(Iy=1,(function(r){function s(j,fe){var he=j.length;j.push(fe);e:for(;0<he;){var He=he-1>>>1,ee=j[He];if(0<f(ee,fe))j[He]=fe,j[he]=ee,he=He;else break e}}function c(j){return j.length===0?null:j[0]}function u(j){if(j.length===0)return null;var fe=j[0],he=j.pop();if(he!==fe){j[0]=he;e:for(var He=0,ee=j.length,Pe=ee>>>1;He<Pe;){var Ge=2*(He+1)-1,ut=j[Ge],T=Ge+1,Z=j[T];if(0>f(ut,he))T<ee&&0>f(Z,ut)?(j[He]=Z,j[T]=he,He=T):(j[He]=ut,j[Ge]=he,He=Ge);else if(T<ee&&0>f(Z,he))j[He]=Z,j[T]=he,He=T;else break e}}return fe}function f(j,fe){var he=j.sortIndex-fe.sortIndex;return he!==0?he:j.id-fe.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var w=Date,b=w.now();r.unstable_now=function(){return w.now()-b}}var S=[],v=[],p=1,g=null,k=3,D=!1,U=!1,V=!1,ne=!1,Te=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function ce(j){for(var fe=c(v);fe!==null;){if(fe.callback===null)u(v);else if(fe.startTime<=j)u(v),fe.sortIndex=fe.expirationTime,s(S,fe);else break;fe=c(v)}}function le(j){if(V=!1,ce(j),!U)if(c(S)!==null)U=!0,Fe||(Fe=!0,P());else{var fe=c(v);fe!==null&&Ce(le,fe.startTime-j)}}var Fe=!1,be=-1,W=5,Oe=-1;function Ee(){return ne?!0:!(r.unstable_now()-Oe<W)}function Ne(){if(ne=!1,Fe){var j=r.unstable_now();Oe=j;var fe=!0;try{e:{U=!1,V&&(V=!1,ve(be),be=-1),D=!0;var he=k;try{t:{for(ce(j),g=c(S);g!==null&&!(g.expirationTime>j&&Ee());){var He=g.callback;if(typeof He=="function"){g.callback=null,k=g.priorityLevel;var ee=He(g.expirationTime<=j);if(j=r.unstable_now(),typeof ee=="function"){g.callback=ee,ce(j),fe=!0;break t}g===c(S)&&u(S),ce(j)}else u(S);g=c(S)}if(g!==null)fe=!0;else{var Pe=c(v);Pe!==null&&Ce(le,Pe.startTime-j),fe=!1}}break e}finally{g=null,k=he,D=!1}fe=void 0}}finally{fe?P():Fe=!1}}}var P;if(typeof de=="function")P=function(){de(Ne)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ye=ae.port2;ae.port1.onmessage=Ne,P=function(){ye.postMessage(null)}}else P=function(){Te(Ne,0)};function Ce(j,fe){be=Te(function(){j(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(j){switch(k){case 1:case 2:case 3:var fe=3;break;default:fe=k}var he=k;k=fe;try{return j()}finally{k=he}},r.unstable_requestPaint=function(){ne=!0},r.unstable_runWithPriority=function(j,fe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var he=k;k=j;try{return fe()}finally{k=he}},r.unstable_scheduleCallback=function(j,fe,he){var He=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?He+he:He):he=He,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=he+ee,j={id:p++,callback:fe,priorityLevel:j,startTime:he,expirationTime:ee,sortIndex:-1},he>He?(j.sortIndex=he,s(v,j),c(S)===null&&j===c(v)&&(V?(ve(be),be=-1):V=!0,Ce(le,he-He))):(j.sortIndex=ee,s(S,j),U||D||(U=!0,Fe||(Fe=!0,P()))),j},r.unstable_shouldYield=Ee,r.unstable_wrapCallback=function(j){var fe=k;return function(){var he=k;k=fe;try{return j.apply(this,arguments)}finally{k=he}}}})(mh)),mh}var Ay;function Zv(){return Ay||(Ay=1,fh.exports=Qv()),fh.exports}var yh={exports:{}},Dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My;function Kv(){if(My)return Dt;My=1;var r=Fh();function s(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)g+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal"),m=Symbol.for("react.recoverable"),w=Symbol.for("react.optimistic_key");function b(p,g,k){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:D==null?null:D===w?w:""+D,children:p,containerInfo:g,implementation:k}}var S=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Dt.browser=function(p){return{$$typeof:m,_reason:p}},Dt.createPortal=function(p,g){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return b(p,g,null,k)},Dt.flushSync=function(p){var g=S.T,k=u.p;try{if(S.T=null,u.p=2,p)return p()}finally{S.T=g,u.p=k,u.d.f()}},Dt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(p,g))},Dt.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},Dt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var k=g.as,D=v(k,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;k==="style"?u.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:D,integrity:U,fetchPriority:V}):k==="script"&&u.d.X(p,{crossOrigin:D,integrity:U,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Dt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var k=v(g.as,g.crossOrigin);u.d.M(p,{crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&u.d.M(p)},Dt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var k=g.as,D=v(k,g.crossOrigin);u.d.L(p,k,{crossOrigin:D,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Dt.preloadModule=function(p,g){if(typeof p=="string")if(g){var k=v(g.as,g.crossOrigin);u.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else u.d.m(p)},Dt.requestFormReset=function(p){u.d.r(p)},Dt.unstable_batchedUpdates=function(p,g){return p(g)},Dt.useFormState=function(p,g,k){return S.H.useFormState(p,g,k)},Dt.useFormStatus=function(){return S.H.useHostTransitionStatus()},Dt.version="19.3.0",Dt}var Oy;function Vv(){if(Oy)return yh.exports;Oy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),yh.exports=Kv(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function Jv(){if(Ny)return Qo;Ny=1;var r=Zv(),s=Fh(),c=Vv();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(m(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return S(a),e;if(o===i)return S(a),t;o=o.sibling}throw Error(u(188))}if(n.return!==i.return)n=a,i=o;else{for(var h=!1,y=a.child;y;){if(y===n){h=!0,n=a,i=o;break}if(y===i){h=!0,i=a,n=o;break}y=y.sibling}if(!h){for(y=o.child;y;){if(y===n){h=!0,n=o,i=a;break}if(y===i){h=!0,i=o,n=a;break}y=y.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function g(e,t,n,i,a,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,o)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&g(e.child,t,n,i,a,o))return!0;e=e.sibling}return!1}function k(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function D(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function U(e){var t=[null,null],n=k(e);return n===null||V(t,e,n.child,{foundSelf:!1}),t}function V(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&V(e,t,n.child,i))return!0;n=n.sibling}return!1}function ne(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(u(559))}}var Te=null,ve=null;function de(e,t,n){return e===n?!0:e===t?(Te=e,!0):!1}function ce(e,t,n){return e===n?(ve=e,!1):e===t?(ve!==null&&(Te=e),!0):!1}function le(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Fe(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var o=t;o;o=n(o))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var be=Object.assign,W=Symbol.for("react.element"),Oe=Symbol.for("react.transitional.element"),Ee=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),ye=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Pe=Symbol.for("react.activity"),Ge=Symbol.for("react.legacy_hidden"),ut=Symbol.for("react.memo_cache_sentinel"),T=Symbol.for("react.view_transition"),Z=Symbol.for("react.recoverable"),J=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case ae:return"Profiler";case P:return"StrictMode";case fe:return"Suspense";case he:return"SuspenseList";case Pe:return"Activity";case T:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Ee:return"Portal";case Ce:return e.displayName||"Context";case ye:return(e._context.displayName||"Context")+".Consumer";case j:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var we=Array.isArray,oe=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ke=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,It={pending:!1,data:null,method:null,action:null},Vt=[],Lt=-1;function ft(e){return{current:e}}function Ke(e){0>Lt||(e.current=Vt[Lt],Vt[Lt]=null,Lt--)}function ze(e,t){Lt++,Vt[Lt]=e.current,e.current=t}var ht=ft(null),rn=ft(null),kt=ft(null),Jt=ft(null);function At(e,t){switch(ze(kt,t),ze(rn,e),ze(ht,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cm(t),e=Hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ke(ht),ze(ht,e)}function wt(){Ke(ht),Ke(rn),Ke(kt)}function Un(e){var t=e.memoizedState;t!==null&&(Ua._currentValue=t.memoizedState,ze(Jt,e)),t=ht.current;var n=Hm(t,e.type);t!==n&&(ze(rn,e),ze(ht,n))}function ct(e){rn.current===e&&(Ke(ht),Ke(rn)),Jt.current===e&&(Ke(Jt),Ua._currentValue=It)}var An,sn;function l(e){if(An===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);An=t&&t[1]||"",sn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+An+e+sn}var N=!1;function Q(e,t){if(!e||N)return"";N=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(te){var A=te}Reflect.construct(e,[],F)}else{try{F.call()}catch(te){A=te}F=!1;try{var R=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),F=!0,new e}finally{F&&(R!==void 0?Object.defineProperty(e.prototype,"props",R):delete e.prototype.props)}}}else{try{throw Error()}catch(te){A=te}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(te){if(te&&A&&typeof te.stack=="string")return[te.stack,A.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),h=o[0],y=o[1];if(h&&y){var x=h.split(`
`),O=y.split(`
`);for(a=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;a<O.length&&!O[a].includes("DetermineComponentFrameRoot");)a++;if(i===x.length||a===O.length)for(i=x.length-1,a=O.length-1;1<=i&&0<=a&&x[i]!==O[a];)a--;for(;1<=i&&0<=a;i--,a--)if(x[i]!==O[a]){if(i!==1||a!==1)do if(i--,a--,0>a||x[i]!==O[a]){var Y=`
`+x[i].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=i&&0<=a);break}}}finally{N=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?l(n):""}function K(e,t){switch(e.tag){case 26:case 27:case 5:return l(e.type);case 16:return l("Lazy");case 13:return e.child!==t&&t!==null?l("Suspense Fallback"):l("Suspense");case 19:return l("SuspenseList");case 0:case 15:return Q(e.type,!1);case 11:return Q(e.type.render,!1);case 1:return Q(e.type,!0);case 31:return l("Activity");case 30:return l("ViewTransition");default:return""}}function z(e){try{var t="",n=null;do t+=K(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var d=Object.prototype.hasOwnProperty,I=r.unstable_scheduleCallback,C=r.unstable_cancelCallback,B=r.unstable_shouldYield,G=r.unstable_requestPaint,X=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,$=r.unstable_ImmediatePriority,se=r.unstable_UserBlockingPriority,ge=r.unstable_NormalPriority,xe=r.unstable_LowPriority,Ae=r.unstable_IdlePriority,Ye=r.log,Mn=r.unstable_setDisableYieldValue,vn=null,vt=null;function ai(e){if(typeof Ye=="function"&&Mn(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(vn,e)}catch{}}var Wt=Math.clz32?Math.clz32:np,ep=Math.log,tp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ep(e)/tp|0)|0}var Po=256,el=262144,tl=4194304;function Hi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nl(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,o=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=i&134217727;return y!==0?(i=y&~o,i!==0?a=Hi(i):(h&=y,h!==0?a=Hi(h):n||(n=y&~e,n!==0&&(a=Hi(n))))):(y=i&~o,y!==0?a=Hi(y):h!==0?a=Hi(h):n||(n=i&~e,n!==0&&(a=Hi(n)))),a===0?0:t!==0&&t!==a&&(t&o)===0&&(o=a&-a,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:a}function $a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nc(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Wt(n),a=1<<i;t|=e[i],n&=~a}return t}function ip(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ic(){var e=tl;return tl<<=1,(tl&62914560)===0&&(tl=4194304),e}function jr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ap(e,t,n,i,a,o){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,x=e.expirationTimes,O=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-Wt(n),F=1<<Y;y[Y]=0,x[Y]=-1;var A=O[Y];if(A!==null)for(O[Y]=null,Y=0;Y<A.length;Y++){var R=A[Y];R!==null&&(R.lane&=-536870913)}n&=~F}i!==0&&ac(e,i,0),o!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=o&~(h&~t))}function ac(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Wt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Wt(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function lc(e,t){var n=t&-t;return n=(n&42)!==0?1:zr(n),(n&(e.suspendedLanes|t))!==0?0:n}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rc(){var e=ke.p;return e!==0?e:(e=window.event,e===void 0?32:yy(e.type))}function sc(e,t){var n=ke.p;try{return ke.p=e,t()}finally{ke.p=n}}var Ln=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ln,Gt="__reactProps$"+Ln,ta="__reactContainer$"+Ln,uc="__reactEvents$"+Ln,op="__reactListeners$"+Ln,lp="__reactHandles$"+Ln,hc="__reactResources$"+Ln,eo="__reactMarker$"+Ln,il="__reactLoad$"+Ln;function al(e){delete e[Mt],delete e[Gt],delete e[op],delete e[lp]}function Ri(e){var t;if(t=e[Mt])return t;for(var n=e.parentNode;n;){if(t=n[ta]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vm(e);e!==null;){if(n=e[Mt])return n;e=Vm(e)}return t}e=n,n=e.parentNode}return null}function na(e){if(e=e[Mt]||e[ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function to(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function ia(e){var t=e[hc];return t||(t=e[hc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function St(e){e[eo]=!0}function cc(e){e[il]=void 0}var dc=new Set,fc={};function Di(e,t){aa(e,t),aa(e+"Capture",t)}function aa(e,t){for(fc[e]=t,e=0;e<t.length;e++)dc.add(t[e])}var rp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},yc={};function sp(e){return d.call(yc,e)?!0:d.call(mc,e)?!1:rp.test(e)?yc[e]=!0:(mc[e]=!0,!1)}var Qe=!1;function gc(){var e=Qe;return Qe=!1,e}function ol(e,t,n){if(sp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function ll(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Gn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function up(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,o=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(h){n=""+h,o.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){if(!e._valueTracker){var t=pc(e)?"checked":"value";e._valueTracker=up(e,t,""+e[t])}}function wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=pc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var hp=/[\n"\\]/g;function un(e){return e.replace(hp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ur(e,t,n,i,a,o,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?h==="number"&&e.value==t?Lr(e,$t(e.value)):Lr(e,$t(t)):n!=null?Lr(e,$t(n)):i!=null&&e.removeAttribute("value"),a==null&&o!=null&&(e.defaultChecked=!!o),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+$t(y):e.removeAttribute("name")}function vc(e,t,n,i,a,o,h,y){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Br(e);return}n=n!=null?""+$t(n):"",t=t!=null?""+$t(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=y?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Br(e)}function Lr(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function oa(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function bc(e,t,n){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$t(n):""}function kc(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(we(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$t(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Br(e)}function la(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sc(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||cp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",Qe=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(Sc(e,a,i),Qe=!0)}else for(var o in t)t.hasOwnProperty(o)&&Sc(e,o,t[o])}function Gr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return fp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function On(){}var Xr=null;function Fr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ra=null,sa=null;function Tc(e){var t=na(e);if(t&&(e=t.stateNode)){var n=e[Gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ur(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+un(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Gt]||null;if(!a)throw Error(u(90));Ur(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&wc(i)}break e;case"textarea":bc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&oa(e,!!n.multiple,t,!1)}}}var Qr=!1;function Ec(e,t,n){if(Qr)return e(t,n);Qr=!0;try{var i=e(t);return i}finally{if(Qr=!1,(ra!==null||sa!==null)&&(rr(),ra&&(t=ra,e=sa,sa=ra=null,Tc(t),e)))for(t=0;t<e.length;t++)Tc(e[t])}}function no(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Gt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zr=!1;if(Xn)try{var io={};Object.defineProperty(io,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Zr=!1}var oi=null,Kr=null,sl=null;function Ic(){if(sl)return sl;var e,t=Kr,n=t.length,i,a="value"in oi?oi.value:oi.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var h=n-e;for(i=1;i<=h&&t[n-i]===a[o-i];i++);return sl=a.slice(e,1<i?1-i:void 0)}function ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function Ac(){return!1}function jt(e){function t(n,i,a,o,h){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=o,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(o):o[y]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hl:Ac,this.isPropagationStopped=Ac,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=jt(li),ao=be({},li,{view:0,detail:0}),mp=jt(ao),Vr,Jr,oo,dl=be({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$r,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Vr=e.screenX-oo.screenX,Jr=e.screenY-oo.screenY):Jr=Vr=0,oo=e),Vr)},movementY:function(e){return"movementY"in e?e.movementY:Jr}}),Mc=jt(dl),yp=be({},dl,{dataTransfer:0}),gp=jt(yp),pp=be({},ao,{relatedTarget:0}),Wr=jt(pp),wp=be({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=jt(wp),bp=be({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=jt(bp),Sp=be({},li,{data:0}),Oc=jt(Sp),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ep[e])?!!t[e]:!1}function $r(){return Ip}var Ap=be({},ao,{key:function(e){if(e.key){var t=xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$r,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mp=jt(Ap),Op=be({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=jt(Op),Np=be({},li,{submitter:0}),Cp=jt(Np),Hp=be({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$r}),Rp=jt(Hp),Dp=be({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),_p=jt(Dp),Yp=be({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=jt(Yp),zp=be({},li,{newState:0,oldState:0,source:0}),qp=jt(zp),Bp=[9,13,27,32],Pr=Xn&&"CompositionEvent"in window,lo=null;Xn&&"documentMode"in document&&(lo=document.documentMode);var Up=Xn&&"TextEvent"in window&&!lo,Cc=Xn&&(!Pr||lo&&8<lo&&11>=lo),Hc=" ",Rc=!1;function Dc(e,t){switch(e){case"keyup":return Bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ua=!1;function Lp(e,t){switch(e){case"compositionend":return _c(t);case"keypress":return t.which!==32?null:(Rc=!0,Hc);case"textInput":return e=t.data,e===Hc&&Rc?null:e;default:return null}}function Gp(e,t){if(ua)return e==="compositionend"||!Pr&&Dc(e,t)?(e=Ic(),sl=Kr=oi=null,ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xp[e.type]:t==="textarea"}function jc(e,t,n,i){ra?sa?sa.push(i):sa=[i]:ra=i,t=fr(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ro=null,so=null;function Fp(e){Em(e,0)}function fl(e){var t=to(e);if(wc(t))return e}function zc(e,t){if(e==="change")return t}var qc=!1;if(Xn){var es;if(Xn){var ts="oninput"in document;if(!ts){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),ts=typeof Bc.oninput=="function"}es=ts}else es=!1;qc=es&&(!document.documentMode||9<document.documentMode)}function Uc(){ro&&(ro.detachEvent("onpropertychange",Lc),so=ro=null)}function Lc(e){if(e.propertyName==="value"&&fl(so)){var t=[];jc(t,so,e,Fr(e)),Ec(Fp,t)}}function Qp(e,t,n){e==="focusin"?(Uc(),ro=t,so=n,ro.attachEvent("onpropertychange",Lc)):e==="focusout"&&Uc()}function Zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(so)}function Kp(e,t){if(e==="click")return fl(t)}function Vp(e,t){if(e==="input"||e==="change")return fl(t)}function Jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:Jp;function uo(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!d.call(t,a)||!Pt(e[a],t[a]))return!1}return!0}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var n=Gc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gc(n)}}function Fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ns(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ns(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Wp=Xn&&"documentMode"in document&&11>=document.documentMode,ha=null,as=null,ho=null,os=!1;function Zc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||ha==null||ha!==ns(i)||(i=ha,"selectionStart"in i&&is(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&uo(ho,i)||(ho=i,i=fr(as,"onSelect"),0<i.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ha)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ca={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionrun:_i("Transition","TransitionRun"),transitionstart:_i("Transition","TransitionStart"),transitioncancel:_i("Transition","TransitionCancel"),transitionend:_i("Transition","TransitionEnd")},ls={},Kc={};Xn&&(Kc=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function Yi(e){if(ls[e])return ls[e];if(!ca[e])return e;var t=ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kc)return ls[e]=t[n];return e}var Vc=Yi("animationend"),Jc=Yi("animationiteration"),Wc=Yi("animationstart"),$p=Yi("transitionrun"),Pp=Yi("transitionstart"),ew=Yi("transitioncancel"),$c=Yi("transitionend"),Pc=new Map,rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rs.push("scrollEnd");function bn(e,t){Pc.set(e,t),Di(t,[e])}var tw=0;function Fn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Tn.identifierPrefix;var n=tw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function ed(e){if(e==null||typeof e=="string")return e;var t=null,n=Ca;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Qn(e,t){return e=ed(e),t=ed(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hn=[],da=0,ss=0;function yl(){for(var e=da,t=ss=da=0;t<e;){var n=hn[t];hn[t++]=null;var i=hn[t];hn[t++]=null;var a=hn[t];hn[t++]=null;var o=hn[t];if(hn[t++]=null,i!==null&&a!==null){var h=i.pending;h===null?a.next=a:(a.next=h.next,h.next=a),i.pending=a}o!==0&&td(n,a,o)}}function gl(e,t,n,i){hn[da++]=e,hn[da++]=t,hn[da++]=n,hn[da++]=i,ss|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function us(e,t,n,i){return gl(e,t,n,i),pl(e)}function ji(e,t){return gl(e,null,null,t),pl(e)}function td(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,o=e.return;o!==null;)o.childLanes|=n,i=o.alternate,i!==null&&(i.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(a=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,a&&t!==null&&(a=31-Wt(n),e=o.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),o):null}function pl(e){if(50<Ro)throw Ro=0,lr=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fa={};function nw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,i){return new nw(e,t,n,i)}function hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zn(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function nd(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wl(e,t,n,i,a,o){var h=0;if(i=e,typeof i=="function")hs(i)&&(h=1);else if(typeof i=="string")h=Nv(e,n,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(i){case Pe:return e=Xt(31,n,t,a),e.elementType=Pe,e.lanes=o,e;case Ne:return zi(n.children,a,o,t);case P:h=8,a|=24;break;case ae:return e=Xt(12,n,t,a|2),e.elementType=ae,e.lanes=o,e;case fe:return e=Xt(13,n,t,a),e.elementType=fe,e.lanes=o,e;case he:return e=Xt(19,n,t,a),e.elementType=he,e.lanes=o,e;case Ge:case T:return e=a|32,e=Xt(30,n,t,e),e.elementType=T,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ce:h=10;break e;case ye:h=9;break e;case j:h=11;break e;case He:h=14;break e;case ee:h=16,i=null;break e}h=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Xt(h,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function zi(e,t,n,i){return e=Xt(7,e,i,t),e.lanes=n,e}function cs(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function id(e){var t=Xt(18,null,null,0);return t.stateNode=e,t}function ds(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ad=new WeakMap;function cn(e,t){if(typeof e=="object"&&e!==null){var n=ad.get(e);return n!==void 0?n:(t={value:e,source:t,stack:z(t)},ad.set(e,t),t)}return{value:e,source:t,stack:z(t)}}var ma=[],ya=0,vl=null,co=0,dn=[],fn=0,ri=null,Nn=1,Cn="";function Kn(e,t){ma[ya++]=co,ma[ya++]=vl,vl=e,co=t}function od(e,t,n){dn[fn++]=Nn,dn[fn++]=Cn,dn[fn++]=ri,ri=e;var i=Nn;e=Cn;var a=32-Wt(i)-1;i&=~(1<<a),n+=1;var o=32-Wt(t)+a;if(30<o){var h=a-a%5;o=(i&(1<<h)-1).toString(32),i>>=h,a-=h,Nn=1<<32-Wt(t)+a|n<<a|i,Cn=o+e}else Nn=1<<o|n<<a|i,Cn=e}function bl(e){e.return!==null&&(Kn(e,1),od(e,1,0))}function fs(e){for(;e===vl;)vl=ma[--ya],ma[ya]=null,co=ma[--ya],ma[ya]=null;for(;e===ri;)ri=dn[--fn],dn[fn]=null,Cn=dn[--fn],dn[fn]=null,Nn=dn[--fn],dn[fn]=null}function ld(e,t){dn[fn++]=Nn,dn[fn++]=Cn,dn[fn++]=ri,Nn=t.id,Cn=t.overflow,ri=e}var xt=null,nt=null,je=!1,si=null,mn=!1,ms=Error(u(519));function ui(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(cn(t,e)),ms}function rd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Mt]=e,t[Gt]=i,n){case"dialog":Be("cancel",t),Be("close",t);break;case"iframe":case"object":case"embed":Be("load",t);break;case"video":case"audio":for(n=0;n<_o.length;n++)Be(_o[n],t);break;case"source":Be("error",t);break;case"img":case"image":case"link":Be("error",t),Be("load",t);break;case"details":Be("toggle",t);break;case"input":Be("invalid",t),vc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Be("invalid",t);break;case"textarea":Be("invalid",t),kc(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Om(t.textContent,n)?(i.popover!=null&&(Be("beforetoggle",t),Be("toggle",t)),i.onScroll!=null&&Be("scroll",t),i.onScrollEnd!=null&&Be("scrollend",t),i.onClick!=null&&(t.onclick=On),t=!0):t=!1,t||ui(e,!0)}function kl(e){for(xt=e.return;xt;)switch(xt.tag){case 5:case 31:case 13:mn=!1;return;case 27:case 3:mn=!0;return;default:xt=xt.return}}function ga(e){if(e!==xt)return!1;if(!je)return kl(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Xu(e.type,e.memoizedProps)),n=!n),n&&nt&&ui(e),kl(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=Km(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=Km(e)}else t===27?(t=nt,Ei(e.type)?(e=Pu,Pu=null,nt=e):nt=t):nt=xt?gn(e.stateNode.nextSibling):null;return!0}function qi(){nt=xt=null,je=!1}function ys(){var e=si;return e!==null&&(Zt===null?Zt=e:Zt.push.apply(Zt,e),si=null),e}function fo(e){si===null?si=[e]:si.push(e)}var gs=ft(null),Bi=null,Vn=null;function hi(e,t,n){ze(gs,t._currentValue),t._currentValue=n}function Jn(e){e._currentValue=gs.current,Ke(gs)}function Sl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ps(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var h=a.child;o=o.firstContext;e:for(;o!==null;){var y=o;o=a;for(var x=0;x<t.length;x++)if(y.context===t[x]){o.lanes|=n,y=o.alternate,y!==null&&(y.lanes|=n),Sl(o.return,n,e),i||(h=null);break e}o=y.next}}else if(a.tag===18){if(h=a.return,h===null)throw Error(u(341));h.lanes|=n,o=h.alternate,o!==null&&(o.lanes|=n),Sl(h,n,e),h=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Sl(a.return,n,e),h=a.child,h=h!==null?h.sibling:null):h=a.child;if(h!==null)h.return=a;else for(h=a;h!==null;){if(h===e){h=null;break}if(a=h.sibling,a!==null){a.return=h.return,h=a;break}h=h.return}a=h}}function Ui(e,t,n,i){e=null;for(var a=t,o=!1;a!==null;){if(!o){if((a.flags&524288)!==0)o=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var h=a.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var y=a.type;Pt(a.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(a===Jt.current){if(h=a.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ua):e=[Ua])}a=a.return}return e!==null&&ps(t,e,n,i),t.flags|=262144,e!==null}function xl(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Li(e){Bi=e,Vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ot(e){return sd(Bi,e)}function Tl(e,t){return Bi===null&&Li(e),sd(e,t)}function sd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vn===null){if(e===null)throw Error(u(308));Vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vn=Vn.next=t;return n}var iw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},aw=r.unstable_scheduleCallback,ow=r.unstable_NormalPriority,mt={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ws(){return{controller:new iw,data:new Map,refCount:0}}function mo(e){e.refCount--,e.refCount===0&&aw(ow,function(){e.controller.abort()})}function ud(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var yo=null;function lw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var go=null,vs=0,Gi=0,pa=null;function rw(e,t){if(go===null){var n=go=[];vs=0,Gi=_u(),pa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return vs++,t.then(hd,hd),t}function hd(){if(--vs===0&&(yo=null,go!==null)){pa!==null&&(pa.status="fulfilled");var e=go;go=null,Gi=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var cd=oe.S;oe.S=function(e,t){if(am=X(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&rw(e,t),yo!==null)for(var n=_a;n!==null;)ud(n,yo),n=n.next;if(n=e.types,n!==null){for(var i=_a;i!==null;)ud(i,n),i=i.next;if(Gi!==0){i=yo,i===null&&(i=yo=[]);for(var a=0;a<n.length;a++){var o=n[a];i.indexOf(o)===-1&&i.push(o)}}}cd!==null&&cd(e,t)};var Xi=ft(null);function bs(){var e=Xi.current;return e!==null?e:tt.pooledCache}function El(e,t){t===null?ze(Xi,Xi.current):ze(Xi,t.pool)}function dd(){var e=bs();return e===null?null:{parent:mt._currentValue,pool:e}}var wa=Error(u(460)),ks=Error(u(474)),Il=Error(u(542)),Al={then:function(){}};function fd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function md(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(On,On),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e===void 0&&!("reason"in t)?Error(u(600)):e;default:if(typeof t.status=="string")t.then(On,On);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e}throw Qi=t,wa}}function Fi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Qi=n,wa):n}}var Qi=null;function yd(){if(Qi===null)throw Error(u(459));var e=Qi;return Qi=null,e}function gd(e){if(e===wa||e===Il)throw Error(u(483))}var va=null,po=0;function Ml(e){var t=po;return po+=1,va===null&&(va=[]),md(va,e,t)}function ci(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ol(e,t){throw t.$$typeof===W?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function pd(e){function t(M,E){if(e){var H=M.deletions;H===null?(M.deletions=[E],M.flags|=16):H.push(E)}}function n(M,E){if(!e)return null;for(;E!==null;)t(M,E),E=E.sibling;return null}function i(M){for(var E=new Map;M!==null;)M.key===null?E.set(M.index,M):E.set(M.key,M),M=M.sibling;return E}function a(M,E){return M=Zn(M,E),M.index=0,M.sibling=null,M}function o(M,E,H){return M.index=H,e?(H=M.alternate,H!==null?(H=H.index,H<E?(M.flags|=2,E):H):(M.flags|=134217730,E)):(M.flags|=1048576,E)}function h(M){return e&&M.alternate===null&&(M.flags|=134217730),M}function y(M,E,H,L){return E===null||E.tag!==6?(E=cs(H,M.mode,L),E.return=M,E):(E=a(E,H),E.return=M,E)}function x(M,E,H,L){var ue=H.type;return ue===Ne?(M=Y(M,E,H.props.children,L,H.key),ci(M,H),M):E!==null&&(E.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ee&&Fi(ue)===E.type)?(E=a(E,H.props),ci(E,H),E.return=M,E):(E=wl(H.type,H.key,H.props,null,M.mode,L),ci(E,H),E.return=M,E)}function O(M,E,H,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==H.containerInfo||E.stateNode.implementation!==H.implementation?(E=ds(H,M.mode,L),E.return=M,E):(E=a(E,H.children||[]),E.return=M,E)}function Y(M,E,H,L,ue){return E===null||E.tag!==7?(E=zi(H,M.mode,L,ue),E.return=M,E):(E=a(E,H),E.return=M,E)}function F(M,E,H){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=cs(""+E,M.mode,H),E.return=M,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Oe:return H=wl(E.type,E.key,E.props,null,M.mode,H),ci(H,E),H.return=M,H;case Ee:return E=ds(E,M.mode,H),E.return=M,E;case ee:return E=Fi(E),F(M,E,H)}if(we(E)||re(E))return E=zi(E,M.mode,H,null),E.return=M,E;if(typeof E.then=="function")return F(M,Ml(E),H);if(E.$$typeof===Ce)return F(M,Tl(M,E),H);Ol(M,E)}return null}function A(M,E,H,L){var ue=E!==null?E.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ue!==null?null:y(M,E,""+H,L);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Oe:return H.key===ue?x(M,E,H,L):null;case Ee:return H.key===ue?O(M,E,H,L):null;case ee:return H=Fi(H),A(M,E,H,L)}if(we(H)||re(H))return ue!==null?null:Y(M,E,H,L,null);if(typeof H.then=="function")return A(M,E,Ml(H),L);if(H.$$typeof===Ce)return A(M,E,Tl(M,H),L);Ol(M,H)}return null}function R(M,E,H,L,ue){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return M=M.get(H)||null,y(E,M,""+L,ue);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Oe:return M=M.get(L.key===null?H:L.key)||null,x(E,M,L,ue);case Ee:return M=M.get(L.key===null?H:L.key)||null,O(E,M,L,ue);case ee:return L=Fi(L),R(M,E,H,L,ue)}if(we(L)||re(L))return M=M.get(H)||null,Y(E,M,L,ue,null);if(typeof L.then=="function")return R(M,E,H,Ml(L),ue);if(L.$$typeof===Ce)return R(M,E,H,Tl(E,L),ue);Ol(E,L)}return null}function te(M,E,H,L){for(var ue=null,Le=null,Se=E,Ie=E=0,pt=null;Se!==null&&Ie<H.length;Ie++){Se.index>Ie?(pt=Se,Se=null):pt=Se.sibling;var Xe=A(M,Se,H[Ie],L);if(Xe===null){Se===null&&(Se=pt);break}e&&Se&&Xe.alternate===null&&t(M,Se),E=o(Xe,E,Ie),Le===null?ue=Xe:Le.sibling=Xe,Le=Xe,Se=pt}if(Ie===H.length)return n(M,Se),je&&Kn(M,Ie),ue;if(Se===null){for(;Ie<H.length;Ie++)Se=F(M,H[Ie],L),Se!==null&&(E=o(Se,E,Ie),Le===null?ue=Se:Le.sibling=Se,Le=Se);return je&&Kn(M,Ie),ue}for(Se=i(Se);Ie<H.length;Ie++)pt=R(Se,M,Ie,H[Ie],L),pt!==null&&(e&&(Xe=pt.alternate,Xe!==null&&Se.delete(Xe.key===null?Ie:Xe.key)),E=o(pt,E,Ie),Le===null?ue=pt:Le.sibling=pt,Le=pt);return e&&Se.forEach(function(Ni){return t(M,Ni)}),je&&Kn(M,Ie),ue}function me(M,E,H,L){if(H==null)throw Error(u(151));for(var ue=null,Le=null,Se=E,Ie=E=0,pt=null,Xe=H.next();Se!==null&&!Xe.done;Ie++,Xe=H.next()){Se.index>Ie?(pt=Se,Se=null):pt=Se.sibling;var Ni=A(M,Se,Xe.value,L);if(Ni===null){Se===null&&(Se=pt);break}e&&Se&&Ni.alternate===null&&t(M,Se),E=o(Ni,E,Ie),Le===null?ue=Ni:Le.sibling=Ni,Le=Ni,Se=pt}if(Xe.done)return n(M,Se),je&&Kn(M,Ie),ue;if(Se===null){for(;!Xe.done;Ie++,Xe=H.next())Xe=F(M,Xe.value,L),Xe!==null&&(E=o(Xe,E,Ie),Le===null?ue=Xe:Le.sibling=Xe,Le=Xe);return je&&Kn(M,Ie),ue}for(Se=i(Se);!Xe.done;Ie++,Xe=H.next())Xe=R(Se,M,Ie,Xe.value,L),Xe!==null&&(e&&(pt=Xe.alternate,pt!==null&&Se.delete(pt.key===null?Ie:pt.key)),E=o(Xe,E,Ie),Le===null?ue=Xe:Le.sibling=Xe,Le=Xe);return e&&Se.forEach(function(Lv){return t(M,Lv)}),je&&Kn(M,Ie),ue}function _e(M,E,H,L){if(typeof H=="object"&&H!==null&&H.type===Ne&&H.key===null&&H.props.ref===void 0&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case Oe:e:{for(var ue=H.key;E!==null;){if(E.key===ue){if(ue=H.type,ue===Ne){if(E.tag===7){n(M,E.sibling),L=a(E,H.props.children),ci(L,H),L.return=M,M=L;break e}}else if(E.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ee&&Fi(ue)===E.type){n(M,E.sibling),L=a(E,H.props),ci(L,H),L.return=M,M=L;break e}n(M,E);break}else t(M,E);E=E.sibling}H.type===Ne?(L=zi(H.props.children,M.mode,L,H.key),ci(L,H),L.return=M,M=L):(L=wl(H.type,H.key,H.props,null,M.mode,L),ci(L,H),L.return=M,M=L)}return h(M);case Ee:e:{for(ue=H.key;E!==null;){if(E.key===ue)if(E.tag===4&&E.stateNode.containerInfo===H.containerInfo&&E.stateNode.implementation===H.implementation){n(M,E.sibling),L=a(E,H.children||[]),L.return=M,M=L;break e}else{n(M,E);break}else t(M,E);E=E.sibling}L=ds(H,M.mode,L),L.return=M,M=L}return h(M);case ee:return H=Fi(H),_e(M,E,H,L)}if(we(H))return te(M,E,H,L);if(re(H)){if(ue=re(H),typeof ue!="function")throw Error(u(150));return H=ue.call(H),me(M,E,H,L)}if(typeof H.then=="function")return _e(M,E,Ml(H),L);if(H.$$typeof===Ce)return _e(M,E,Tl(M,H),L);Ol(M,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,E!==null&&E.tag===6?(n(M,E.sibling),L=a(E,H),L.return=M,M=L):(n(M,E),L=cs(H,M.mode,L),L.return=M,M=L),h(M)):n(M,E)}return function(M,E,H,L){try{po=0;var ue=_e(M,E,H,L);return va=null,ue}catch(Se){if(Se===wa||Se===Il)throw Se;var Le=Xt(29,Se,null,M.mode);return Le.lanes=L,Le.return=M,Le}finally{}}}var Zi=pd(!0),wd=pd(!1),di=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ze&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=pl(e),td(e,null,n),t}return gl(e,i,t,n),pl(e)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,oc(e,n)}}function Ts(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?a=o=h:o=o.next=h,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Es=!1;function vo(){if(Es){var e=pa;if(e!==null)throw e}}function bo(e,t,n,i){Es=!1;var a=e.updateQueue;di=!1;var o=a.firstBaseUpdate,h=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var x=y,O=x.next;x.next=null,h===null?o=O:h.next=O,h=x;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==h&&(y===null?Y.firstBaseUpdate=O:y.next=O,Y.lastBaseUpdate=x))}if(o!==null){var F=a.baseState;h=0,Y=O=x=null,y=o;do{var A=y.lane&-536870913,R=A!==y.lane;if(R?(Ue&A)===A:(i&A)===A){A!==0&&A===Gi&&(Es=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var te=e,me=y;A=t;var _e=n;switch(me.tag){case 1:if(te=me.payload,typeof te=="function"){F=te.call(_e,F,A);break e}F=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=me.payload,A=typeof te=="function"?te.call(_e,F,A):te,A==null)break e;F=be({},F,A);break e;case 2:di=!0}}A=y.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=a.callbacks,R===null?a.callbacks=[A]:R.push(A))}else R={lane:A,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(O=Y=R,x=F):Y=Y.next=R,h|=A;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;R=y,y=R.next,R.next=null,a.lastBaseUpdate=R,a.shared.pending=null}}while(!0);Y===null&&(x=F),a.baseState=x,a.firstBaseUpdate=O,a.lastBaseUpdate=Y,o===null&&(a.shared.lanes=0),ki|=h,e.lanes=h,e.memoizedState=F}}function vd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function bd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vd(n[e],t)}var yi=ft(null),Nl=ft(0);function kd(e,t){e=ti,ze(Nl,e),ze(yi,t),ti=e|t.baseLanes}function Is(){ze(Nl,ti),ze(yi,yi.current)}function As(){ti=Nl.current,Ke(yi),Ke(Nl)}var Nt=ft(null),_t=null;function gi(e){var t=e.alternate;ze(Ct,Ct.current&1),ze(Nt,e),_t===null&&(t===null||yi.current!==null||t.memoizedState!==null)&&(_t=e)}function Ms(e){ze(Ct,Ct.current),ze(Nt,e),_t===null&&(_t=e)}function Sd(e){e.tag===22?(ze(Ct,Ct.current),ze(Nt,e),_t===null&&(_t=e)):pi()}function pi(){ze(Ct,Ct.current),ze(Nt,Nt.current)}function en(e){Ke(Nt),_t===e&&(_t=null),Ke(Ct)}var Ct=ft(0);function ko(e,t){ze(Nt,Nt.current),ze(Ct,t)}function Os(e){Ke(Ct),Ke(Nt),_t===e&&(_t=null)}function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Wu(n)||$u(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wn=0,De=null,et=null,yt=null,Hl=!1,ba=!1,Ki=!1,Rl=0,So=0,ka=null,uw=0;function rt(){throw Error(u(321))}function Ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function Cs(e,t,n,i,a,o){return Wn=o,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oe.H=e===null||e.memoizedState===null?lf:rf,Ki=!1,o=n(i,a),Ki=!1,ba&&(o=Td(t,n,i,a)),xd(e),o}function xd(e){oe.H=Bl;var t=et!==null&&et.next!==null;if(Wn=0,yt=et=De=null,Hl=!1,So=0,ka=null,t)throw Error(u(300));e===null||gt||(e=e.dependencies,e!==null&&xl(e)&&(gt=!0))}function Td(e,t,n,i){De=e;var a=0;do{if(ba&&(ka=null),So=0,ba=!1,25<=a)throw Error(u(301));if(a+=1,yt=et=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}oe.H=pw,o=t(n,i)}while(ba);return o}function hw(){var e=oe.H,t=e.useState()[0];return t=typeof t.then=="function"?xo(t):t,e=e.useState()[0],(et!==null?et.memoizedState:null)!==e&&(De.flags|=1024),t}function Hs(){var e=Rl!==0;return Rl=0,e}function Rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ds(e){if(Hl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hl=!1}Wn=0,yt=et=De=null,ba=!1,So=Rl=0,ka=null}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?De.memoizedState=yt=e:yt=yt.next=e,yt}function dt(){if(et===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=yt===null?De.memoizedState:yt.next;if(t!==null)yt=t,et=e;else{if(e===null)throw De.alternate===null?Error(u(467)):Error(u(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},yt===null?De.memoizedState=yt=e:yt=yt.next=e}return yt}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var t=So;return So+=1,ka===null&&(ka=[]),e=md(ka,e,t),t=De,(yt===null?t.memoizedState:yt.next)===null&&(t=t.alternate,oe.H=t===null||t.memoizedState===null?lf:rf),e}function _l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===Z)return;if(e.$$typeof===Ce)return Ot(e)}throw Error(u(438,String(e)))}function _s(e){var t=null,n=De.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=De.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Dl(),De.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ut;return t.index++,n}function $n(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=dt();return Ys(t,et,e)}function Ys(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var a=e.baseQueue,o=i.pending;if(o!==null){if(a!==null){var h=a.next;a.next=o.next,o.next=h}t.baseQueue=a=o,i.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var y=h=null,x=null,O=t,Y=!1;do{var F=O.lane&-536870913;if(F!==O.lane?(Ue&F)===F:(Wn&F)===F){var A=O.revertLane;if(A===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),F===Gi&&(Y=!0);else if((Wn&A)===A){O=O.next,A===Gi&&(Y=!0);continue}else F={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},x===null?(y=x=F,h=o):x=x.next=F,De.lanes|=A,ki|=A;F=O.action,Ki&&n(o,F),o=O.hasEagerState?O.eagerState:n(o,F)}else A={lane:F,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},x===null?(y=x=A,h=o):x=x.next=A,De.lanes|=F,ki|=F;O=O.next}while(O!==null&&O!==t);if(x===null?h=o:x.next=y,!Pt(o,e.memoizedState)&&(gt=!0,Y&&(n=pa,n!==null)))throw n;e.memoizedState=o,e.baseState=h,e.baseQueue=x,i.lastRenderedState=o}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function js(e){var t=dt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var h=a=a.next;do o=e(o,h.action),h=h.next;while(h!==a);Pt(o,t.memoizedState)||(gt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Ed(e,t,n){var i=De,a=dt(),o=je;if(o){if(n===void 0)throw Error(u(407));n=n()}else n=t();var h=!Pt((et||a).memoizedState,n);if(h&&(a.memoizedState=n,gt=!0),a=a.queue,Bs(Md.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||h||yt!==null&&(yt.memoizedState.tag&1)!==0,Sa(e?9:8,{destroy:void 0},Ad.bind(null,i,a,n,t),null),e){if(i.flags|=2048,tt===null)throw Error(u(349));o||(Wn&127)!==0||Id(i,t,n)}return n}function Id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t=Dl(),De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ad(e,t,n,i){t.value=n,t.getSnapshot=i,Od(t)&&Nd(e)}function Md(e,t,n){return n(function(){Od(t)&&Nd(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function Nd(e){var t=ji(e,2);t!==null&&Kt(t,e,2)}function zs(e){var t=zt();if(typeof e=="function"){var n=e;if(e=n(),Ki){ai(!0);try{n()}finally{ai(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t}function Cd(e,t,n,i){return e.baseState=n,Ys(e,et,typeof i=="function"?i:$n)}function cw(e,t,n,i,a){if(ql(e))throw Error(u(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){o.listeners.push(h)}};oe.T!==null?n(!0):o.isTransition=!1,i(o),n=t.pending,n===null?(o.next=t.pending=o,Hd(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Hd(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var o=oe.T,h={};h.types=o!==null?o.types:null,oe.T=h;try{var y=n(a,i),x=oe.S;x!==null&&x(h,y),Rd(e,t,y)}catch(O){qs(e,t,O)}finally{o!==null&&h.types!==null&&(o.types=h.types),oe.T=o}}else try{o=n(a,i),Rd(e,t,o)}catch(O){qs(e,t,O)}}function Rd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Dd(e,t,i)},function(i){return qs(e,t,i)}):Dd(e,t,n)}function Dd(e,t,n){t.status="fulfilled",t.value=n,_d(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hd(e,n)))}function qs(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,_d(t),t=t.next;while(t!==i)}e.action=null}function _d(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yd(e,t){return t}function jd(e,t){if(je){var n=tt.formState;if(n!==null){e:{var i=De;if(je){if(nt){t:{for(var a=nt,o=mn;a.nodeType!==8;){if(!o){a=null;break t}if(a=gn(a.nextSibling),a===null){a=null;break t}}o=a.data,a=o==="F!"||o==="F"?a:null}if(a){nt=gn(a.nextSibling),i=a.data==="F!";break e}}ui(i)}i=!1}i&&(t=n[0])}}return n=zt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:t},n.queue=i,n=nf.bind(null,De,i),i.dispatch=n,i=zs(!1),o=Fs.bind(null,De,!1,i.queue),i=zt(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=cw.bind(null,De,a,o,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function zd(e){var t=dt();return qd(t,et,e)}function qd(e,t,n){if(t=Ys(e,t,Yd)[0],e=Yl($n)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=xo(t)}catch(h){throw h===wa?Il:h}else i=t;t=dt();var a=t.queue,o=a.dispatch;return n!==t.memoizedState&&(De.flags|=2048,Sa(9,{destroy:void 0},dw.bind(null,a,n),null)),[i,o,e]}function dw(e,t){e.action=t}function Bd(e){var t=dt(),n=et;if(n!==null)return qd(t,n,e);dt(),t=t.memoizedState,n=dt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Sa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=De.updateQueue,t===null&&(t=Dl(),De.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ud(){return dt().memoizedState}function jl(e,t,n,i){var a=zt();De.flags|=e,a.memoizedState=Sa(1|t,{destroy:void 0},n,i===void 0?null:i)}function zl(e,t,n,i){var a=dt();i=i===void 0?null:i;var o=a.memoizedState.inst;et!==null&&i!==null&&Ns(i,et.memoizedState.deps)?a.memoizedState=Sa(t,o,n,i):(De.flags|=e,a.memoizedState=Sa(1|t,o,n,i))}function Ld(e,t){jl(8390656,8,e,t)}function Bs(e,t){zl(2048,8,e,t)}function fw(e){De.flags|=4;var t=De.updateQueue;if(t===null)t=Dl(),De.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gd(e){var t=dt().memoizedState;return fw({ref:t,nextImpl:e}),function(){if((Ze&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Xd(e,t){return zl(4,2,e,t)}function Fd(e,t){return zl(4,4,e,t)}function Qd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,n){n=n!=null?n.concat([e]):null,zl(4,4,Qd.bind(null,t,e),n)}function Us(){}function Kd(e,t){var n=dt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Ns(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Vd(e,t){var n=dt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Ns(t,i[1]))return i[0];if(i=e(),Ki){ai(!0);try{e()}finally{ai(!1)}}return n.memoizedState=[i,t],i}function Ls(e,t,n){return n===void 0||(Wn&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=lm(),De.lanes|=e,ki|=e,n)}function Jd(e,t,n,i){return Pt(n,t)?n:yi.current!==null?(e=Ls(e,n,i),Pt(e,t)||(gt=!0),e):(Wn&106)===0||(Wn&1073741824)!==0&&(Ue&261930)===0?(gt=!0,e.memoizedState=n):(e=lm(),De.lanes|=e,ki|=e,t)}function Wd(e,t,n,i,a){var o=ke.p;ke.p=o!==0&&8>o?o:8;var h=oe.T,y={};y.types=h!==null?h.types:null,oe.T=y,Fs(e,!1,t,n);try{var x=a(),O=oe.S;if(O!==null&&O(y,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var Y=sw(x,i);To(e,t,Y,on(e))}else To(e,t,i,on(e))}catch(F){To(e,t,{then:function(){},status:"rejected",reason:F},on())}finally{ke.p=o,h!==null&&y.types!==null&&(h.types=y.types),oe.T=h}}function mw(){}function Gs(e,t,n,i){if(e.tag!==5)throw Error(u(476));var a=$d(e).queue;Wd(e,a,t,It,n===null?mw:function(){return Pd(e),n(i)})}function $d(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:It,baseState:It,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:It},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pd(e){var t=$d(e);t.next===null&&(t=e.alternate.memoizedState),To(e,t.next.queue,{},on())}function Xs(){return Ot(Ua)}function ef(){return dt().memoizedState}function tf(){return dt().memoizedState}function yw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=on();e=fi(n);var i=mi(t,e,n);i!==null&&(Kt(i,t,n),wo(i,t,n)),t={cache:ws()},e.payload=t;return}t=t.return}}function gw(e,t,n){var i=on();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ql(e)?af(t,n):(n=us(e,t,n,i),n!==null&&(Kt(n,e,i),of(n,t,i)))}function nf(e,t,n){var i=on();To(e,t,n,i)}function To(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ql(e))af(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var h=t.lastRenderedState,y=o(h,n);if(a.hasEagerState=!0,a.eagerState=y,Pt(y,h))return gl(e,t,a,0),tt===null&&yl(),!1}catch{}finally{}if(n=us(e,t,a,i),n!==null)return Kt(n,e,i),of(n,t,i),!0}return!1}function Fs(e,t,n,i){if(i={lane:2,revertLane:_u(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(t)throw Error(u(479))}else t=us(e,n,i,2),t!==null&&Kt(t,e,2)}function ql(e){var t=e.alternate;return e===De||t!==null&&t===De}function af(e,t){ba=Hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function of(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,oc(e,n)}}var Bl={readContext:Ot,use:_l,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt,useEffectEvent:rt},lf={readContext:Ot,use:_l,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:Ld,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,jl(4194308,4,Qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jl(4194308,4,e,t)},useInsertionEffect:function(e,t){jl(4,2,e,t)},useMemo:function(e,t){var n=zt();t=t===void 0?null:t;var i=e();if(Ki){ai(!0);try{e()}finally{ai(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=zt();if(n!==void 0){var a=n(t);if(Ki){ai(!0);try{n(t)}finally{ai(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=gw.bind(null,De,e),[i.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:function(e){e=zs(e);var t=e.queue,n=nf.bind(null,De,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Us,useDeferredValue:function(e,t){var n=zt();return Ls(n,e,t)},useTransition:function(){var e=zs(!1);return e=Wd.bind(null,De,e.queue,!0,!1),zt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=De,a=zt();if(je){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),tt===null)throw Error(u(349));(Ue&127)!==0||Id(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ld(Md.bind(null,i,o,e),[e]),i.flags|=2048,Sa(9,{destroy:void 0},Ad.bind(null,i,o,n,t),null),n},useId:function(){var e=zt(),t=tt.identifierPrefix;if(je){var n=Cn,i=Nn;n=(i&~(1<<32-Wt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Rl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=uw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xs,useFormState:jd,useActionState:jd,useOptimistic:function(e){var t=zt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,De,!0,n),n.dispatch=t,[e,t]},useMemoCache:_s,useCacheRefresh:function(){return zt().memoizedState=yw.bind(null,De)},useEffectEvent:function(e){var t=zt(),n={impl:e};return t.memoizedState=n,function(){if((Ze&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},rf={readContext:Ot,use:_l,useCallback:Kd,useContext:Ot,useEffect:Bs,useImperativeHandle:Zd,useInsertionEffect:Xd,useLayoutEffect:Fd,useMemo:Vd,useReducer:Yl,useRef:Ud,useState:function(){return Yl($n)},useDebugValue:Us,useDeferredValue:function(e,t){var n=dt();return Jd(n,et.memoizedState,e,t)},useTransition:function(){var e=Yl($n)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:xo(e),t]},useSyncExternalStore:Ed,useId:ef,useHostTransitionStatus:Xs,useFormState:zd,useActionState:zd,useOptimistic:function(e,t){var n=dt();return Cd(n,et,e,t)},useMemoCache:_s,useCacheRefresh:tf,useEffectEvent:Gd},pw={readContext:Ot,use:_l,useCallback:Kd,useContext:Ot,useEffect:Bs,useImperativeHandle:Zd,useInsertionEffect:Xd,useLayoutEffect:Fd,useMemo:Vd,useReducer:js,useRef:Ud,useState:function(){return js($n)},useDebugValue:Us,useDeferredValue:function(e,t){var n=dt();return et===null?Ls(n,e,t):Jd(n,et.memoizedState,e,t)},useTransition:function(){var e=js($n)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:xo(e),t]},useSyncExternalStore:Ed,useId:ef,useHostTransitionStatus:Xs,useFormState:Bd,useActionState:Bd,useOptimistic:function(e,t){var n=dt();return et!==null?Cd(n,et,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:_s,useCacheRefresh:tf,useEffectEvent:Gd};function Qs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zs={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=on(),a=fi(i);a.payload=t,n!=null&&(a.callback=n),t=mi(e,a,i),t!==null&&(Kt(t,e,i),wo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=on(),a=fi(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=mi(e,a,i),t!==null&&(Kt(t,e,i),wo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=on(),i=fi(n);i.tag=2,t!=null&&(i.callback=t),t=mi(e,i,n),t!==null&&(Kt(t,e,n),wo(t,e,n))}};function sf(e,t,n,i,a,o,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,h):t.prototype&&t.prototype.isPureReactComponent?!uo(n,i)||!uo(a,o):!0}function uf(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Zs.enqueueReplaceState(t,t.state,null)}function Vi(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=be({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function hf(e){ml(e)}function cf(e){console.error(e)}function df(e){ml(e)}function Ul(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ff(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ks(e,t,n){return n=fi(n),n.tag=3,n.payload={element:null},n.callback=function(){Ul(e,t)},n}function mf(e){return e=fi(e),e.tag=3,e}function yf(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var o=i.value;e.payload=function(){return a(o)},e.callback=function(){ff(t,n,i)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){ff(t,n,i),typeof a!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function ww(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ui(t,n,a,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _t===null?sr():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Al?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Hu(e,i,a)),!1;case 22:return n.flags|=65536,i===Al?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Hu(e,i,a)),!1}throw Error(u(435,n.tag))}return Hu(e,i,a),sr(),!1}if(je)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==ms&&(e=Error(u(422),{cause:i}),fo(cn(e,n)))):(i!==ms&&(t=Error(u(423),{cause:i}),fo(cn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=cn(i,n),a=Ks(e.stateNode,i,a),Ts(e,a),st!==4&&(st=2)),!1;var o=Error(u(520),{cause:i});if(o=cn(o,n),Ho===null?Ho=[o]:Ho.push(o),st!==4&&(st=2),t===null)return!0;i=cn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ks(n.stateNode,i,e),Ts(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Si===null||!Si.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=mf(a),yf(a,e,n,i),Ts(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Vs=Error(u(461)),gt=!1;function bt(e,t,n,i){t.child=e===null?wd(t,null,n,i):Zi(t,e.child,n,i)}function gf(e,t,n,i,a){n=n.render;var o=t.ref;if("ref"in i){var h={};for(var y in i)y!=="ref"&&(h[y]=i[y])}else h=i;return Li(t),i=Cs(e,t,n,h,o,a),y=Hs(),e!==null&&!gt?(Rs(e,t,a),Pn(e,t,a)):(je&&y&&bl(t),t.flags|=1,bt(e,t,i,a),t.child)}function pf(e,t,n,i,a){if(e===null){var o=n.type;return typeof o=="function"&&!hs(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,wf(e,t,o,i,a)):(e=wl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!iu(e,a)){var h=o.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(h,i)&&e.ref===t.ref)return Pn(e,t,a)}return t.flags|=1,e=Zn(o,i),e.ref=t.ref,e.return=t,t.child=e}function wf(e,t,n,i,a){if(e!==null){var o=e.memoizedProps;if(uo(o,i)&&e.ref===t.ref)if(gt=!1,t.pendingProps=i=o,iu(e,a))(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,Pn(e,t,a)}return Js(e,t,n,i,a)}function vf(e,t,n,i){var a=i.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~o}else i=0,t.child=null;return bf(e,t,o,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(t,o!==null?o.cachePool:null),o!==null?kd(t,o):Is(),Sd(t);else return i=t.lanes=536870912,bf(e,t,o!==null?o.baseLanes|n:n,n,i)}else o!==null?(El(t,o.cachePool),kd(t,o),pi(),t.memoizedState=null):(e!==null&&El(t,null),Is(),pi());return bt(e,t,a,n),t.child}function Eo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bf(e,t,n,i,a){var o=bs();return o=o===null?null:{parent:mt._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&El(t,null),Is(),Sd(t),e!==null&&Ui(e,t,i,!0),t.childLanes=a,null}function Ll(e,t){return t=Gl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kf(e,t,n){return Zi(t,e.child,null,n),e=Ll(t,t.pendingProps),e.flags|=2,en(t),t.memoizedState=null,e}function vw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(i.mode==="hidden")return e=Ll(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Eo(null,e);if(Ms(t),(e=nt)?(e=Zm(e,mn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ri!==null?{id:Nn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},n=id(e),n.return=t,t.child=n,xt=t,nt=null)):e=null,e===null)throw ui(t);return t.lanes=536870912,null}return Ll(t,i)}var o=e.memoizedState;if(o!==null){var h=o.dehydrated;if(Ms(t),a)if(t.flags&256)t.flags&=-257,t=kf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(gt||Ui(e,t,n,!1),a=(n&e.childLanes)!==0,gt||a){if(yi.current===null){if(i=tt,i!==null&&(h=lc(i,n),h!==0&&h!==o.retryLane))throw o.retryLane=h,ji(e,h),Kt(i,e,h),Vs;sr()}t=kf(e,t,n)}else e=o.treeContext,nt=gn(h.nextSibling),xt=t,je=!0,si=null,mn=!1,e!==null&&ld(t,e),t=Ll(t,i),t.flags|=134221824;return t}return e=Zn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xa(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Js(e,t,n,i,a){return Li(t),n=Cs(e,t,n,i,void 0,a),i=Hs(),e!==null&&!gt?(Rs(e,t,a),Pn(e,t,a)):(je&&i&&bl(t),t.flags|=1,bt(e,t,n,a),t.child)}function Sf(e,t,n,i,a,o){return Li(t),t.updateQueue=null,n=Td(t,i,n,a),xd(e),i=Hs(),e!==null&&!gt?(Rs(e,t,o),Pn(e,t,o)):(je&&i&&bl(t),t.flags|=1,bt(e,t,n,o),t.child)}function xf(e,t,n,i,a){if(Li(t),t.stateNode===null){var o=fa,h=n.contextType;typeof h=="object"&&h!==null&&(o=Ot(h)),o=new n(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Zs,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},Ss(t),h=n.contextType,o.context=typeof h=="object"&&h!==null?Ot(h):fa,o.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Qs(t,n,h,i),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(h=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),h!==o.state&&Zs.enqueueReplaceState(o,o.state,null),bo(t,i,o,a),vo(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var y=t.memoizedProps,x=Vi(n,y);o.props=x;var O=o.context,Y=n.contextType;h=fa,typeof Y=="object"&&Y!==null&&(h=Ot(Y));var F=n.getDerivedStateFromProps;Y=typeof F=="function"||typeof o.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(y||O!==h)&&uf(t,o,i,h),di=!1;var A=t.memoizedState;o.state=A,bo(t,i,o,a),vo(),O=t.memoizedState,y||A!==O||di?(typeof F=="function"&&(Qs(t,n,F,i),O=t.memoizedState),(x=di||sf(t,n,x,i,A,O,h))?(Y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=O),o.props=i,o.state=O,o.context=h,i=x):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,xs(e,t),h=t.memoizedProps,Y=Vi(n,h),o.props=Y,F=t.pendingProps,A=o.context,O=n.contextType,x=fa,typeof O=="object"&&O!==null&&(x=Ot(O)),y=n.getDerivedStateFromProps,(O=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h!==F||A!==x)&&uf(t,o,i,x),di=!1,A=t.memoizedState,o.state=A,bo(t,i,o,a),vo();var R=t.memoizedState;h!==F||A!==R||di||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof y=="function"&&(Qs(t,n,y,i),R=t.memoizedState),(Y=di||sf(t,n,Y,i,A,R,x)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?(O||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,R,x),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,R,x)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=R),o.props=i,o.state=R,o.context=x,i=Y):(typeof o.componentDidUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,xa(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=Zi(t,e.child,null,a),t.child=Zi(t,null,n,a)):bt(e,t,n,a),t.memoizedState=o.state,e=t.child):e=Pn(e,t,a),e}function Tf(e,t,n,i){return qi(),t.flags|=256,bt(e,t,n,i),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $s(e){return{baseLanes:e,cachePool:dd()}}function Ps(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=an),e}function Ef(e,t,n){var i=t.pendingProps,a=!1,o=(t.flags&128)!==0,h;if((h=o)||(h=e!==null&&e.memoizedState===null?!1:(Ct.current&2)!==0),h&&(a=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(a?gi(t):pi(),(e=nt)?(e=Zm(e,mn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ri!==null?{id:Nn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},n=id(e),n.return=t,t.child=n,xt=t,nt=null)):e=null,e===null)throw ui(t);return $u(e)?t.lanes=32:t.lanes=536870912,null}return o=i.children,i=i.fallback,a?(pi(),a=t.mode,o=Gl({mode:"hidden",children:o},a),i=zi(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=$s(n),i.childLanes=Ps(e,h,n),t.memoizedState=Ws,Eo(null,i)):(gi(t),eu(t,o))}var y=e.memoizedState;if(y!==null){var x=y.dehydrated;if(x!==null)return bw(e,t,o,h,i,x,y,n)}return a?(pi(),a=i.fallback,o=t.mode,y=e.child,x=y.sibling,i=Zn(y,{mode:"hidden",children:i.children}),i.subtreeFlags=y.subtreeFlags&1206910976,x!==null?a=Zn(x,a):(a=zi(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,Eo(null,i),i=t.child,a=e.child.memoizedState,a===null?a=$s(n):(o=a.cachePool,o!==null?(y=mt._currentValue,o=o.parent!==y?{parent:y,pool:y}:o):o=dd(),a={baseLanes:a.baseLanes|n,cachePool:o}),i.memoizedState=a,i.childLanes=Ps(e,h,n),t.memoizedState=Ws,Eo(e.child,i)):(gi(t),n=e.child,e=n.sibling,n=Zn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function eu(e,t){return t=Gl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gl(e,t){return e=Xt(22,e,null,t),e.lanes=0,e}function Xl(e,t,n){return Zi(t,e.child,null,n),e=eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bw(e,t,n,i,a,o,h,y){if(n)return t.flags&256?(gi(t),t.flags&=-257,Xl(e,t,y)):t.memoizedState!==null?(pi(),t.child=e.child,t.flags|=128,null):(pi(),o=a.fallback,h=t.mode,a=Gl({mode:"visible",children:a.children},h),o=zi(o,h,y,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,Zi(t,e.child,null,y),a=t.child,a.memoizedState=$s(y),a.childLanes=Ps(e,i,y),t.memoizedState=Ws,Eo(null,a));if(gi(t),$u(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var x=i.dgst;return i=x,i!==""&&(a=Error(u(419)),a.stack="",a.digest=i,fo({value:a,source:null,stack:null})),Xl(e,t,y)}if(gt||Ui(e,t,y,!1),i=(y&e.childLanes)!==0,gt||i){if(yi.current!==null)return Xl(e,t,y);if(i=tt,i!==null&&(a=lc(i,y),a!==0&&a!==h.retryLane))throw h.retryLane=a,ji(e,a),Kt(i,e,a),Vs;return Wu(o)||sr(),Xl(e,t,y)}return Wu(o)?(t.flags|=192,t.child=e.child,null):(e=h.treeContext,nt=gn(o.nextSibling),xt=t,je=!0,si=null,mn=!1,e!==null&&ld(t,e),t=eu(t,a.children),t.flags|=134221824,t)}function If(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Sl(e.return,t,n)}function Af(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Cl(n)===null&&(t=e),e=e.sibling}return t}function Fl(e,t,n,i,a,o){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:o}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=n,h.tailMode=a,h.treeForkCount=o)}function tu(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function nu(e,t,n){var i=t.pendingProps,a=i.revealOrder,o=i.tail;i=i.children;var h=Ct.current;if(t.flags&128)return ko(t,h),null;var y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,ko(t,h),a==="backwards"&&e!==null?(tu(e),bt(e,t,i,n),tu(e)):bt(e,t,i,n),i=je?co:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&If(e,n,t);else if(e.tag===19)If(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=Af(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,tu(t)),Fl(t,!0,a,null,o,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Cl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Fl(t,!0,n,null,o,i);break;case"together":Fl(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Af(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Fl(t,!1,a,n,o,i)}return t.child}function Mf(e,t,n){var i=t.pendingProps;return hi(t,t.type,i.value),bt(e,t,i.children,n),t.child}function Pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ki|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function kw(e,t,n){switch(t.tag){case 3:At(t,t.stateNode.containerInfo),hi(t,mt,e.memoizedState.cache),qi();break;case 27:case 5:Un(t);break;case 4:At(t,t.stateNode.containerInfo);break;case 10:hi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ms(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return gi(t),t.flags|=128,null;i=Ui(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?Ef(e,t,n):(gi(t),e=Pn(e,t,n),e!==null?e.sibling:null)}gi(t);break;case 19:if(t.flags&128)return nu(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ui(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return nu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ko(t,Ct.current),i)break;return null;case 22:return t.lanes=0,vf(e,t,n,t.pendingProps);case 24:hi(t,mt,e.memoizedState.cache)}return Pn(e,t,n)}function Of(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)gt=!0;else{if(!iu(e,n)&&(t.flags&128)===0)return gt=!1,kw(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,je&&(t.flags&1048576)!==0&&od(t,co,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Fi(t.elementType),t.type=e,typeof e=="function")hs(e)?(i=Vi(e,i),t.tag=1,t=xf(null,t,e,i,n)):(t.tag=0,t=Js(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===j){t.tag=11,t=gf(null,t,e,i,n);break e}else if(a===He){t.tag=14,t=pf(null,t,e,i,n);break e}else if(a===Ce){t.tag=10,t.type=e,t=Mf(null,t,n);break e}}throw t=Re(e)||e,Error(u(306,t,""))}}return t;case 0:return Js(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Vi(i,t.pendingProps),xf(e,t,i,a,n);case 3:e:{if(At(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var o=t.memoizedState;a=o.element,xs(e,t),bo(t,i,null,n);var h=t.memoizedState;if(i=h.cache,hi(t,mt,i),i!==o.cache&&ps(t,[mt],n,!0),vo(),i=h.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Tf(e,t,i,n);break e}else if(i!==a){a=cn(Error(u(424)),t),fo(a),t=Tf(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=gn(e.firstChild),xt=t,je=!0,si=null,mn=!0,n=wd(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(qi(),i===a){t=Pn(e,t,n);break e}bt(e,t,i,n)}t=t.child}return t;case 26:return xa(e,t),e===null?(n=ey(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(t.stateNode=Rm(t.type,t.pendingProps,kt.current,t)):t.memoizedState=ey(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Un(t),e===null&&je&&(i=t.stateNode=Jm(t.type,t.pendingProps,kt.current),xt=t,mn=!0,a=nt,Ei(t.type)?(Pu=a,nt=gn(i.firstChild)):nt=a),bt(e,t,t.pendingProps.children,n),xa(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((a=i=nt)&&(i=yv(i,t.type,t.pendingProps,mn),i!==null?(t.stateNode=i,xt=t,nt=gn(i.firstChild),mn=!1,a=!0):a=!1),a||ui(t)),Un(t),a=t.type,o=t.pendingProps,h=e!==null?e.memoizedProps:null,i=o.children,Xu(a,o)?i=null:h!==null&&Xu(a,h)&&(t.flags|=32),t.memoizedState!==null&&(a=Cs(e,t,hw,null,null,n),Ua._currentValue=a),xa(e,t),bt(e,t,i,n),t.child;case 6:return e===null&&je&&((e=n=nt)&&(n=gv(n,t.pendingProps,mn),n!==null?(t.stateNode=n,xt=t,nt=null,e=!0):e=!1),e||ui(t)),null;case 13:return Ef(e,t,n);case 4:return At(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Zi(t,null,i,n):bt(e,t,i,n),t.child;case 11:return gf(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,xa(e,t),bt(e,t,i,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:return Mf(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,Li(t),a=Ot(a),i=i(a),t.flags|=1,bt(e,t,i,n),t.child;case 14:return pf(e,t,t.type,t.pendingProps,n);case 15:return wf(e,t,t.type,t.pendingProps,n);case 19:return nu(e,t,n);case 31:return vw(e,t,n);case 22:return vf(e,t,n,t.pendingProps);case 24:return Li(t),i=Ot(mt),e===null?(a=bs(),a===null&&(a=tt,o=ws(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:i,cache:a},Ss(t),hi(t,mt,a)):((e.lanes&n)!==0&&(xs(e,t),bo(t,null,null,n),vo()),a=e.memoizedState,o=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),hi(t,mt,i)):(i=o.cache,hi(t,mt,i),i!==a.cache&&ps(t,[mt],n,!0))),bt(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:je&&bl(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:xa(e,t),bt(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ei(e){e.flags|=4}function au(e,t,n,i,a){var o;if((o=(e.mode&32)!==0)&&(o=n===null?ay(t,i):ay(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),o){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(hm())e.flags|=8192;else throw Qi=Al,ks}else e.flags&=-16777217}function Nf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!oy(t))if(hm())e.flags|=8192;else throw Qi=Al,ks}function Ql(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ic():536870912,e.lanes|=t,Ma|=t)}function Io(e,t){if(!je)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Sw(e,t,n){var i=t.pendingProps;switch(fs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return it(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Jn(mt),wt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ga(t)?ei(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ys())),it(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ei(t),o!==null?(it(t),Nf(t,o)):(it(t),au(t,a,null,i,n))):o?o!==e.memoizedState?(ei(t),it(t),Nf(t,o)):(it(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ei(t),it(t),au(t,a,e,i,n)),null;case 27:if(ct(t),n=kt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ei(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return it(t),t.subtreeFlags&=-33554433,null}e=ht.current,ga(t)?rd(t):(e=Jm(a,i,n),t.stateNode=e,ei(t))}return it(t),t.subtreeFlags&=-33554433,null;case 5:if(ct(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ei(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return it(t),t.subtreeFlags&=-33554433,null}if(o=ht.current,ga(t))rd(t);else{var h=jo(kt.current);switch(o){case 1:o=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":o=h.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof i.is=="string"?h.createElement("select",{is:i.is}):h.createElement("select"),i.multiple?o.multiple=!0:i.size&&(o.size=i.size);break;default:o=typeof i.is=="string"?h.createElement(a,{is:i.is}):h.createElement(a)}}o[Mt]=t,o[Gt]=i;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)o.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=o;e:switch(Rt(o,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ei(t)}}return it(t),t.subtreeFlags&=-33554433,au(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ei(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=kt.current,ga(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=xt,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Om(e.nodeValue,n)),e||ui(t,!0)}else e=jo(e).createTextNode(i),e[Mt]=t,t.stateNode=e}return it(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ga(t),n!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Mt]=t}else qi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),e=!1}else n=ys(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(en(t),t):(en(t),null);if((t.flags&128)!==0)throw Error(u(558))}return it(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ga(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[Mt]=t}else qi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),a=!1}else a=ys(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(en(t),t):(en(t),null)}return en(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ql(t,t.updateQueue),it(t),null);case 4:return wt(),e===null&&qu(t.stateNode.containerInfo),t.flags|=67108864,it(t),null;case 10:return Jn(t.type),it(t),null;case 19:if(Os(t),i=t.memoizedState,i===null)return it(t),null;if(a=(t.flags&128)!==0,o=i.rendering,o===null)if(a)Io(i,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Cl(e),o!==null){for(t.flags|=128,Io(i,!1),e=o.updateQueue,t.updateQueue=e,Ql(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)nd(n,e),n=n.sibling;return ko(t,Ct.current&1|2),je&&Kn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&X()>ar&&(t.flags|=128,a=!0,Io(i,!1),t.lanes=4194304)}else{if(!a)if(e=Cl(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ql(t,e),Io(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!o.alternate&&!je)return it(t),null}else 2*X()-i.renderingStartTime>ar&&n!==536870912&&(t.flags|=128,a=!0,Io(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}if(i.tail!==null){e=i.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=X(),e.sibling=null,o=Ct.current,o=a?o&1|2:o&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||je?ko(t,o):(n=o,ze(Nt,t),ze(Ct,n),_t===null&&(_t=t)),je&&Kn(t,i.treeForkCount),e}return it(t),null;case 22:case 23:return en(t),As(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),n=t.updateQueue,n!==null&&Ql(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ke(Xi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Jn(mt),it(t),null;case 25:return null;case 30:return t.flags|=33554432,it(t),null}throw Error(u(156,t.tag))}function xw(e,t){switch(fs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(mt),wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ct(t),null;case 31:if(t.memoizedState!==null){if(en(t),t.alternate===null)throw Error(u(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(en(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Os(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return wt(),null;case 10:return Jn(t.type),null;case 22:case 23:return en(t),As(),e!==null&&Ke(Xi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jn(mt),null;case 25:return null;default:return null}}function Cf(e,t){switch(fs(t),t.tag){case 3:Jn(mt),wt();break;case 26:case 27:case 5:ct(t);break;case 4:wt();break;case 31:t.memoizedState!==null&&en(t);break;case 13:en(t);break;case 19:Os(t);break;case 10:Jn(t.type);break;case 22:case 23:en(t),As(),e!==null&&Ke(Xi);break;case 24:Jn(mt)}}function Ao(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var o=n.create,h=n.inst;i=o(),h.destroy=i}n=n.next}while(n!==a)}}catch(y){We(t,t.return,y)}}function wi(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var o=a.next;i=o;do{if((i.tag&e)===e){var h=i.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,a=t;var x=n,O=y;try{O()}catch(Y){We(a,x,Y)}}}i=i.next}while(i!==o)}}catch(Y){We(t,t.return,Y)}}function Hf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{bd(t,n)}catch(i){We(e,e.return,i)}}}function Rf(e,t,n){n.props=Vi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){We(e,t,i)}}function Hn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,o=Fn(e.memoizedProps,a);(a.ref===null||a.ref.name!==o)&&(a.ref=Bm(o)),i=a.ref;break;case 7:if(e.stateNode===null){var h=new ln(e);g(e.child,!1,fv,h,void 0,void 0),e.stateNode=h}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(y){We(e,t,y)}}function Ht(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){We(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){We(e,t,a)}else n.current=null}function Zl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Qm(e.stateNode,t[n])}function Df(e){for(var t=e.return;t!==null&&(lu(t)&&Qm(e.stateNode,t.stateNode),!ou(t));)t=t.return}function Mo(e){for(var t=e.return;t!==null&&(lu(t)&&mv(e.stateNode,t.stateNode),!ou(t));)t=t.return}function ou(e){return e.tag===5||e.tag===3||e.tag===27}function lu(e){return e&&e.tag===7&&e.stateNode!==null}function ru(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){We(e,e.return,a)}}function su(e,t,n){try{var i=e.stateNode;Vw(i,e.type,n,t),i[Gt]=t}catch(a){We(e,e.return,a)}}function _f(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ei(e.type)||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ei(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hu(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=On)),Zl(e,i),Qe=!0;else if(a!==4&&(a===27&&(Zl(e,i),i=null,Ei(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(hu(e,t,n,i),e=e.sibling;e!==null;)hu(e,t,n,i),e=e.sibling}function Kl(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Zl(e,i),Qe=!0;else if(a!==4&&(a===27&&(Zl(e,i),i=null,Ei(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Kl(e,t,n,i),e=e.sibling;e!==null;)Kl(e,t,n,i),e=e.sibling}function Yf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Rt(t,i,n),t[Mt]=e,t[Gt]=n}catch(o){We(e,e.return,o)}}var Vl=!1,tn=null;function jf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Vl=!0)}var Rn=null;function zf(){var e=Rn;return Rn=null,e}var Ft=0;function Ta(e,t,n,i,a){return Ft=0,qf(e.child,t,n,i,a)}function qf(e,t,n,i,a){for(var o=!1;e!==null;){if(e.tag===5){var h=e.stateNode;if(i!==null){var y=Zu(h);i.push(y),y.view&&(o=!0)}else o||Zu(h).view&&(o=!0);Vl=!0,zm(h,Ft===0?t:t+"_"+Ft,n),Ft++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||qf(e.child,t,n,i,a)&&(o=!0));e=e.sibling}return o}function Dn(e,t){for(;e!==null;)e.tag===5?qm(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Dn(e.child,t)),e=e.sibling}function Jl(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jl(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(u(544));var n=t.name;t=Qn(t.default,t.share),t!=="none"&&(Ta(e,n,t,null,!1)||Dn(e.child,!1))}e=e.sibling}}function cu(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Fn(i,n),o=Qn(i.default,n.paired?i.share:i.enter);o!=="none"?Ta(e,a,o,null,!1)?(Jl(e),n.paired||t||Ha(e,i.onEnter)):Dn(e.child,!1):Jl(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)cu(e,t),e=e.sibling;else Jl(e)}function du(e){if(tn!==null&&tn.size!==0){var t=tn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var o=Qn(n.default,n.share);if(o!=="none"&&(Ta(e,i,o,null,!1)?(o=e.stateNode,a.paired=o,o.paired=a,Ha(e,n.onShare)):Dn(e.child,!1)),t.delete(i),t.size===0)break}}}du(e)}e=e.sibling}}}function fu(e){if(e.tag===30){var t=e.memoizedProps,n=Fn(t,e.stateNode),i=tn!==null?tn.get(n):void 0,a=Qn(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(Ta(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,tn.delete(n),Ha(e,t.onShare)):Ha(e,t.onExit):Dn(e.child,!1)),tn!==null&&du(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)fu(e),e=e.sibling;else tn!==null&&du(e)}function Bf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Fn(t,e.stateNode);t=Qn(t.default,t.update),e.flags&=-5,t!=="none"&&Ta(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Bf(e);e=e.sibling}}function mu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Dn(e.child,!1))}mu(e)}e=e.sibling}}function Wl(e){if(e.tag===30)e.stateNode.paired=null,Dn(e.child,!1),mu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Wl(e),e=e.sibling;else mu(e)}function Uf(e){for(e=e.child;e!==null;)e.tag===30?Dn(e.child,!1):(e.subtreeFlags&33554432)!==0&&Uf(e),e=e.sibling}function yu(e,t,n,i,a,o,h){for(var y=!1;t!==null;){if(t.tag===5){var x=t.stateNode;if(o!==null&&Ft<o.length){var O=o[Ft],Y=Zu(x);(O.view||Y.view)&&(y=!0);var F;if(F=(e.flags&4)===0)if(Y.clip)F=!0;else{F=O.rect;var A=Y.rect;F=F.y!==A.y||F.x!==A.x||F.height!==A.height||F.width!==A.width}F&&(e.flags|=4),Y.abs?Y=!O.abs:(O=O.rect,Y=Y.rect,Y=O.height!==Y.height||O.width!==Y.width),Y&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&zm(x,Ft===0?n:n+"_"+Ft,a),y&&(e.flags&4)!==0||(Rn===null&&(Rn=[]),Rn.push(x,Ft===0?i:i+"_"+Ft,t.memoizedProps)),Ft++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&h?e.flags|=t.flags&32:yu(e,t.child,n,i,a,o,h)&&(y=!0));t=t.sibling}return y}function Lf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Fn(n,i),o=Qn(n.default,n.update),h;h=e.memoizedState,e.memoizedState=null,i=e;var y=e.child;Ft=0,a=yu(i,y,a,a,o,h,!1),(e.flags&4)!==0&&a&&Ha(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Lf(e);e=e.sibling}}var Tt=!1,Ve=!1,_n=!1,gu=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,Et=null,Yn=!1,Oo=!1,$l=!1,pu=!1;function Tw(e,t,n){if(e=e.containerInfo,Lu=La,e=Qc(e),is(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var o=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,x=-1,O=-1,Y=0,F=0,A=e,R=null;t:for(;;){for(var te;A!==i||o!==0&&A.nodeType!==3||(x=y+o),A!==h||a!==0&&A.nodeType!==3||(O=y+a),A.nodeType===3&&(y+=A.nodeValue.length),(te=A.firstChild)!==null;)R=A,A=te;for(;;){if(A===e)break t;if(R===i&&++Y===o&&(x=y),R===h&&++F===a&&(O=y),(te=A.nextSibling)!==null)break;A=R,R=A.parentNode}A=te}i=x===-1||O===-1?null:{start:x,end:O}}else i=null}i=i||{start:0,end:0}}else i=null;for(Gu={focusedElem:e,selectionRange:i},La=!1,n=(n&335544064)===n,Et=t,t=n?9270:1024;Et!==null;){if(e=Et,n&&(i=e.deletions,i!==null))for(o=0;o<i.length;o++)n&&fu(i[o]);if(e.alternate===null&&(e.flags&2)!==0)n&&jf(e),Pl(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&fu(i),Pl(n);continue}else if(i!==null&&i.memoizedState!==null){n&&jf(e),Pl(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Et=i):(n&&Bf(e),Pl(n))}}tn=null}function Pl(e){for(;Et!==null;){var t=Et,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var o=t.stateNode;try{var h=Vi(t.type,a);n=o.getSnapshotBeforeUpdate(h,i),o.__reactInternalSnapshotBeforeUpdate=n}catch(y){We(t,t.return,y)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Ju(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Ju(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Fn(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=Qn(a.default,a.update),a!=="none"&&Ta(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(u(163))}if(i=t.sibling,i!==null){i.return=t.return,Et=i;break}Et=t.return}}function Xf(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:jn(e,n),i&4&&Ao(5,n);break;case 1:if(jn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){We(n,n.return,h)}else{var a=Vi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){We(n,n.return,h)}}i&64&&Hf(n),i&512&&Hn(n,n.return);break;case 3:if(jn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{bd(e,t)}catch(h){We(n,n.return,h)}}break;case 27:t===null&&i&4&&Yf(n);case 26:case 5:jn(e,n),t===null&&i&4&&ru(n),i&512&&Hn(n,n.return);break;case 12:jn(e,n);break;case 31:jn(e,n),i&4&&Kf(e,n);break;case 13:jn(e,n),i&4&&Vf(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yw.bind(null,n),pv(e,n))));break;case 22:if(i=n.memoizedState!==null||Tt,!i){var o=t!==null&&t.memoizedState!==null||Ve;t=Tt,a=Ve,Tt=i,(Ve=o)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),xn(e,n,i)):jn(e,n),Tt=t,Ve=a}break;case 30:jn(e,n),i&512&&Hn(n,n.return);break;case 7:i&512&&Hn(n,n.return);default:jn(e,n)}}function wu(e,t){for(e=e.child;e!==null;)Ff(e,t),e=e.sibling}function Ff(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,o=e.memoizedProps.style,h=o!=null&&o.hasOwnProperty("display")?o.display:null;a.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(x){We(e,e.return,x)}vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Qe=!0}catch(x){We(e,e.return,x)}break;case 18:try{var y=e.stateNode;t?jm(y,!0):jm(e.stateNode,!1)}catch(x){We(e,e.return,x)}break;case 22:case 23:e.memoizedState===null&&wu(e,t);break;default:wu(e,t)}}function vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,i=t;switch(n.tag){case 4:Ff(n,i);break e;case 22:n.memoizedState===null&&vu(n,i);break e;default:vu(n,i)}}e=e.sibling}}function Qf(e){var t=e.alternate;t!==null&&(e.alternate=null,Qf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&al(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,Qt=!1;function kn(e,t,n){for(n=n.child;n!==null;)Zf(e,t,n),n=n.sibling}function Zf(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(vn,n)}catch{}switch(n.tag){case 26:Ve||Ht(n,t),kn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ve&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ht(n,t),Mo(n);var i=at,a=Qt;Ei(n.type)&&(at=n.stateNode,Qt=!1),kn(e,t,n),Wm(n.stateNode,n.type,n.memoizedProps),at=i,Qt=a;break;case 5:Ve||Ht(n,t),Mo(n);case 6:if(n.tag===6&&Mo(n),i=at,a=Qt,at=null,kn(e,t,n),at=i,Qt=a,at!==null)if(Qt)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode),Qe=!0}catch(o){We(n,t,o)}else try{at.removeChild(n.stateNode),Qe=!0}catch(o){We(n,t,o)}break;case 18:at!==null&&(Qt?(e=at,Ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ga(e)):Ym(at,n.stateNode));break;case 4:i=at,a=Qt,at=n.stateNode.containerInfo,Qt=!0,kn(e,t,n),at=i,Qt=a;break;case 0:case 11:case 14:case 15:wi(2,n,t),Ve||wi(4,n,t),kn(e,t,n);break;case 1:Ve||(Ht(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Rf(n,t,i)),kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,kn(e,t,n),Ve=i;break;case 30:Ht(n,t),kn(e,t,n);break;case 7:Ve||Ht(n,t),kn(e,t,n);break;default:kn(e,t,n)}}function Kf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ga(e)}catch(n){We(t,t.return,n)}}}function Vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ga(e)}catch(n){We(t,t.return,n)}}function Ew(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Gf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Gf),t;default:throw Error(u(435,e.tag))}}function er(e,t){var n=Ew(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=jw.bind(null,e,i);i.then(a,a)}})}function qt(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var o=i[a],h=e,y=t,x=y;e:for(;x!==null;){switch(x.tag){case 27:if(Ei(x.type)){at=x.stateNode,Qt=!1;break e}break;case 5:at=x.stateNode,Qt=!1;break e;case 3:case 4:at=x.stateNode.containerInfo,Qt=!0;break e}x=x.return}if(at===null)throw Error(u(160));Zf(h,y,o),at=null,Qt=!1,h=o.alternate,h!==null&&(h.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Jf(t,e,n),t=t.sibling}var Sn=null;function Jf(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var o=0;o<i.length;o++){var h=i[o];h.ref.impl=h.nextImpl}qt(t,e,n),Bt(e),a&4&&(wi(3,e,e.return),Ao(3,e),wi(5,e,e.return));break;case 1:qt(t,e,n),Bt(e),a&512&&(Ve||i===null||Ht(i,i.return)),a&64&&Tt&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Sn,qt(t,e,n),Bt(e),a&512&&(Ve||i===null||Ht(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Tt)e.stateNode=Rm(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;t:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[eo]||i[Mt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),Rt(i,t,n),i[Mt]=e,St(i),t=i;break e;case"link":if(o=iy("link","href",a).get(t+(n.href||""))){for(h=0;h<o.length;h++)if(i=o[h],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(h,1);break t}}i=a.createElement(t),Rt(i,t,n),a.head.appendChild(i);break;case"meta":if(o=iy("meta","content",a).get(t+(n.content||""))){for(h=0;h<o.length;h++)if(i=o[h],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(h,1);break t}}i=a.createElement(t),Rt(i,t,n),a.head.appendChild(i);break;default:throw Error(u(468,t))}i[Mt]=e,St(i),t=i}e.stateNode=t}else Tt||ih(o,e.type,e.stateNode);else e.stateNode=ny(o,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||Ve||t.parentNode.removeChild(t)):a.count--,n===null?Tt||ih(o,e.type,e.stateNode):ny(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&su(e,e.memoizedProps,i.memoizedProps);break;case 27:qt(t,e,n),Bt(e),a&512&&(Ve||i===null||Ht(i,i.return)),i!==null&&a&4&&su(e,e.memoizedProps,i.memoizedProps);break;case 5:if(o=_n,_n=!1,qt(t,e,n),_n=o,Bt(e),a&512&&(Ve||i===null||Ht(i,i.return)),e.flags&32){t=e.stateNode;try{la(t,""),Qe=!0}catch(Y){We(e,e.return,Y)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,su(e,t,i!==null?i.memoizedProps:t)),a&1024&&(gu=!0);break;case 6:if(qt(t,e,n),Bt(e),a&4){if(e.stateNode===null)throw Error(u(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Qe=!0}catch(Y){We(e,e.return,Y)}}break;case 3:if(Qe=!1,yr=null,o=Sn,Sn=zo(t.containerInfo),qt(t,e,n),Sn=o,Bt(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(Y){We(e,e.return,Y)}gu&&(gu=!1,Wf(e)),Qe=!1;break;case 4:a=_n,_n=Tt,i=gc(),o=Sn,Sn=zo(e.stateNode.containerInfo),qt(t,e,n),Bt(e),Sn=o,Qe&&Oo&&($l=!0),Qe=i,_n=a;break;case 12:qt(t,e,n),Bt(e);break;case 31:qt(t,e,n),Bt(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,er(e,t)));break;case 13:qt(t,e,n),Bt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(ir=X()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,er(e,t)));break;case 22:o=e.memoizedState!==null,h=i!==null&&i.memoizedState!==null;var y=Tt,x=Ve,O=_n;Tt=y||o,_n=O||o,Ve=x||h,qt(t,e,n),Ve=x,_n=O,Tt=y,Bt(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||i===null||h||Tt||Ve||(t=h||Ve,n=Tt,i=Ve,Tt=o||Tt,Ve=t,vi(e,2),Tt=n,Ve=i),!o&&_n||wu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,er(e,n))));break;case 19:qt(t,e,n),Bt(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,er(e,t)));break;case 30:a&512&&(Ve||i===null||Ht(i,i.return)),a=gc(),o=Oo,h=(n&335544064)===n,y=e.memoizedProps,Oo=h&&Qn(y.default,y.update)!=="none",qt(t,e,n),Bt(e),h&&i!==null&&Qe&&(e.flags|=4),Oo=o,Qe=a;break;case 21:break;case 7:a&512&&(Ve||i===null||Ht(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:qt(t,e,n),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_f(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(lu(a)){var o=a.stateNode;i===null?i=[o]:i.push(o)}if(ou(a))break;a=a.return}var h=i;if(n==null)throw Error(u(160));switch(n.tag){case 27:var y=n.stateNode,x=uu(e);Kl(e,x,y,h);break;case 5:var O=n.stateNode;n.flags&32&&(la(O,""),n.flags&=-33);var Y=uu(e);Kl(e,Y,O,h);break;case 3:case 4:var F=n.stateNode.containerInfo,A=uu(e);hu(e,A,F,h);break;default:throw Error(u(161))}}catch(R){We(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wf(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,La=!0,t.reset(),La=!1),e=e.sibling}}function Ea(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)$f(t,e),t=t.sibling;else Lf(t)}function $f(e,t){var n=e.alternate;if(n===null)cu(e,!1);else switch(e.tag){case 3:if(pu=Yn=!1,zf(),Ea(t,e),!Yn&&!$l){if(e=Rn,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];qm(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),pu=!0}Rn=null;break;case 5:Ea(t,e);break;case 4:i=Yn,Yn=!1,Ea(t,e),Yn&&($l=!0),Yn=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?cu(e,!1):Ea(t,e));break;case 30:i=Yn,a=zf(),Yn=!1,Ea(t,e),Yn&&(e.flags|=4);var o=e.memoizedProps,h=e.stateNode;t=Fn(o,h),h=Fn(n.memoizedProps,h);var y=Qn(o.default,o.update);y==="none"?t=!1:(o=n.memoizedState,n.memoizedState=null,n=e.child,Ft=0,t=yu(e,n,t,h,y,o,!0),Ft!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Ha(e,e.memoizedProps.onUpdate),Rn=a):a!==null&&(a.push.apply(a,Rn),Rn=a),Yn=(e.flags&32)!==0?!0:i;break;default:Ea(t,e)}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xf(e,t.alternate,t),t=t.sibling}function vi(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:wi(4,n,n.return),vi(n,i);break;case 1:Ht(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rf(n,n.return,a),vi(n,i);break;case 27:(i&2)!==0&&Wm(n.stateNode,n.type,n.memoizedProps);case 5:Ht(n,n.return),n.tag!==5&&n.tag!==27||Mo(n),vi(n,i);break;case 6:Mo(n);break;case 26:Ht(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Ve||a.parentNode.removeChild(a),vi(n,i);break;case 22:n.memoizedState===null&&vi(n,i);break;case 30:Ht(n,n.return),vi(n,i);break;case 7:Ht(n,n.return);default:vi(n,i)}e=e.sibling}}function xn(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,o=t,h=o.flags,y=(n&1)!==0;switch(o.tag){case 0:case 11:case 15:xn(a,o,n),Ao(4,o);break;case 1:if(xn(a,o,n),i=o,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(Y){We(i,i.return,Y)}if(i=o,a=i.updateQueue,a!==null){var x=i.stateNode;try{var O=a.shared.hiddenCallbacks;if(O!==null)for(a.shared.hiddenCallbacks=null,a=0;a<O.length;a++)vd(O[a],x)}catch(Y){We(i,i.return,Y)}}y&&h&64&&Hf(o),Hn(o,o.return);break;case 27:(n&2)!==0&&Yf(o);case 5:o.tag!==5&&o.tag!==27||Df(o),xn(a,o,n),y&&i===null&&h&4&&ru(o),Hn(o,o.return);break;case 6:Df(o);break;case 26:x=o.stateNode,o.memoizedState!==null||x===null||Tt||ih(zo(x.ownerDocument),o.type,x),xn(a,o,n),y&&i===null&&h&4&&ru(o),Hn(o,o.return);break;case 12:xn(a,o,n);break;case 31:xn(a,o,n),y&&h&4&&Kf(a,o);break;case 13:xn(a,o,n),y&&h&4&&Vf(a,o);break;case 22:o.memoizedState===null&&xn(a,o,n),Hn(o,o.return);break;case 30:xn(a,o,n),Hn(o,o.return);break;case 7:Hn(o,o.return);default:xn(a,o,n)}t=t.sibling}}function bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&mo(n))}function ku(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mo(e))}function yn(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)Pf(e,t,n,i),t=t.sibling;else a&&Uf(t)}function Pf(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Wl(t);var o=t.flags;switch(t.tag){case 0:case 11:case 15:yn(e,t,n,i),o&2048&&Ao(9,t);break;case 1:yn(e,t,n,i);break;case 3:yn(e,t,n,i),a&&pu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,t.alternate!==null&&(o=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==o&&(t.refCount++,o!=null&&mo(o)));break;case 12:if(o&2048){yn(e,t,n,i),o=t.stateNode;try{var h=t.memoizedProps,y=h.id,x=h.onPostCommit;typeof x=="function"&&x(y,t.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(O){We(t,t.return,O)}}else yn(e,t,n,i);break;case 31:yn(e,t,n,i);break;case 13:yn(e,t,n,i);break;case 23:break;case 22:h=t.stateNode,y=t.alternate,t.memoizedState!==null?(a&&y!==null&&y.memoizedState===null&&Wl(y),h._visibility&2?yn(e,t,n,i):No(e,t)):(a&&y!==null&&y.memoizedState!==null&&Wl(t),h._visibility&2?yn(e,t,n,i):(h._visibility|=2,Ia(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),o&2048&&bu(y,t);break;case 24:yn(e,t,n,i),o&2048&&ku(t.alternate,t);break;case 30:a&&(o=t.alternate,o!==null&&(Dn(o.child,!0),Dn(t.child,!0))),yn(e,t,n,i);break;default:yn(e,t,n,i)}}function Ia(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,h=t,y=n,x=i,O=h.flags;switch(h.tag){case 0:case 11:case 15:Ia(o,h,y,x,a),Ao(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?Ia(o,h,y,x,a):No(o,h):(Y._visibility|=2,Ia(o,h,y,x,a)),a&&O&2048&&bu(h.alternate,h);break;case 24:Ia(o,h,y,x,a),a&&O&2048&&ku(h.alternate,h);break;default:Ia(o,h,y,x,a)}t=t.sibling}}function No(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:No(n,i),a&2048&&bu(i.alternate,i);break;case 24:No(n,i),a&2048&&ku(i.alternate,i);break;default:No(n,i)}t=t.sibling}}var Ji=8192;function Wi(e,t,n){if(e.subtreeFlags&Ji)for(e=e.child;e!==null;)em(e,t,n),e=e.sibling}function em(e,t,n){switch(e.tag){case 26:Wi(e,t,n),e.flags&Ji&&(e.memoizedState!==null?Cv(n,Sn,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&ry(n,e)));break;case 5:Wi(e,t,n),e.flags&Ji&&(e=e.stateNode,(t&335544128)===t&&ry(n,e));break;case 3:case 4:var i=Sn;Sn=zo(e.stateNode.containerInfo),Wi(e,t,n),Sn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ji,Ji=16777216,Wi(e,t,n),Ji=i):Wi(e,t,n));break;case 30:if((e.flags&Ji)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,tn===null&&(tn=new Map),tn.set(i,a)}Wi(e,t,n);break;default:Wi(e,t,n)}}function tm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Co(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Et=i,im(i,e)}tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nm(e),e=e.sibling}function nm(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&wi(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,tr(e)):Co(e);break;default:Co(e)}}function tr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Et=i,im(i,e)}tm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wi(8,t,t.return),tr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,tr(t));break;default:tr(t)}e=e.sibling}}function im(e,t){for(;Et!==null;){var n=Et;switch(n.tag){case 0:case 11:case 15:wi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:mo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Et=i;else e:for(n=e;Et!==null;){i=Et;var a=i.sibling,o=i.return;if(Qf(i),i===n){Et=null;break e}if(a!==null){a.return=o,Et=a;break e}Et=o}}}var Iw={getCacheForType:function(e){var t=Ot(mt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ot(mt).controller.signal}},Aw=typeof WeakMap=="function"?WeakMap:Map,Ze=0,tt=null,qe=null,Ue=0,Je=0,nn=null,bi=!1,Aa=!1,Su=!1,ti=0,st=0,ki=0,$i=0,nr=0,an=0,Ma=0,Ho=null,Zt=null,xu=!1,ir=0,am=0,ar=1/0,or=null,Si=null,lt=0,Tn=null,Pi=null,zn=0,Tu=0,Eu=null,om=null,Oa=null,Na=null,Ca=null,Ro=0,lr=null;function on(){return(Ze&2)!==0&&Ue!==0?Ue&-Ue:oe.T!==null?_u():rc()}function lm(){if(an===0)if((Ue&536870912)===0||je){var e=el;el<<=1,(el&3932160)===0&&(el=262144),an=e}else an=536870912;return e=Nt.current,e!==null&&(e.flags|=32),an}function Ha(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=Bm(Fn(e.memoizedProps,n))),Na===null&&(Na=[]),Na.push(t.bind(null,i))}}function Kt(e,t,n){(e===tt&&(Je===2||Je===9)||e.cancelPendingCommit!==null)&&(Ra(e,0),xi(e,Ue,an,!1)),Pa(e,n),((Ze&2)===0||e!==tt)&&(e===tt&&((Ze&2)===0&&($i|=n),st===4&&xi(e,Ue,an,!1)),qn(e))}function rm(e,t,n){if((Ze&6)!==0)throw Error(u(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||$a(e,t),a=i?Nw(e,t):Au(e,t,!0),o=i;do{if(a===0){Aa&&!i&&xi(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Mw(n)){a=Au(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;a=Ho;var x=y.current.memoizedState.isDehydrated;if(x&&(Ra(y,h).flags|=256),h=Au(y,h,!1),h!==2&&h!==6){if(Su&&!x){y.errorRecoveryDisabledLanes|=o,$i|=o,a=4;break e}o=Zt,Zt=a,o!==null&&(Zt===null?Zt=o:Zt.push.apply(Zt,o))}a=h}if(o=!1,a!==2)continue}}if(a===1){Ra(e,0),xi(e,t,0,!0);break}e:{switch(i=e,o=a,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:xi(i,t,an,!bi);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(a=ir+300-X(),10<a)){if(xi(i,t,an,!bi),nl(i,0,!0)!==0)break e;zn=t,i.timeoutHandle=Qu(sm.bind(null,i,n,Zt,or,xu,t,an,$i,Ma,bi,o,"Throttled",-0,0),a);break e}sm(i,n,Zt,or,xu,t,an,$i,Ma,bi,o,null,-0,0)}}break}while(!0);qn(e)}function sm(e,t,n,i,a,o,h,y,x,O,Y,F,A,R){e.timeoutHandle=-1;var te=t.subtreeFlags,me=(o&335544064)===o;if(F=null,(me||te&8192||(te&16785408)===16785408)&&(F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:On},tn=null,em(t,o,F),me&&(te=F,me=e.containerInfo,me=(me.nodeType===9?me:me.ownerDocument).__reactViewTransition,me!=null&&(te.count++,te.waitingForViewTransition=!0,te=Uo.bind(te),me.finished.then(te,te))),te=(o&62914560)===o?ir-X():(o&4194048)===o?am-X():0,te=Hv(F,te),te!==null)){zn=o,e.cancelPendingCommit=te(gm.bind(null,e,t,o,n,i,a,h,y,x,O,Y,F,null,A,R)),xi(e,o,h,!O);return}gm(e,t,o,n,i,a,h,y,x,O,Y,F)}function Mw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],o=a.getSnapshot;a=a.value;try{if(!Pt(o(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xi(e,t,n,i){t=nc(e,t),t&=~nr,t&=~$i,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var o=31-Wt(a),h=1<<o;i[o]=-1,a&=~h}n!==0&&ac(e,n,t)}function rr(){return(Ze&6)===0?(Do(0),!1):!0}function Iu(){if(qe!==null){if(Je===0)var e=qe.return;else e=qe,Vn=Bi=null,Ds(e),va=null,po=0,e=qe;for(;e!==null;)Cf(e.alternate,e),e=e.return;qe=null}}function Ra(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,$w(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),zn=0,Iu(),tt=e,qe=n=Zn(e.current,null),Ue=t,Je=0,nn=null,bi=!1,Aa=$a(e,t),Su=!1,Ma=an=nr=$i=ki=st=0,Zt=Ho=null,xu=!1,ti=nc(e,t),yl(),n}function um(e,t){De=null,oe.H=Bl,t===wa||t===Il?(t=yd(),Je=3):t===ks?(t=yd(),Je=4):Je=t===Vs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nn=t,qe===null&&(st=1,Ul(e,cn(t,e.current)))}function hm(){var e=Nt.current;return e===null?!0:(Ue&4194048)===Ue?_t===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===_t:!1}function cm(){var e=oe.H;return oe.H=Bl,e===null?Bl:e}function dm(){var e=oe.A;return oe.A=Iw,e}function sr(){st=4,bi||(Ue&4194048)!==Ue&&Nt.current!==null||(Aa=!0),(ki&134217727)===0&&($i&134217727)===0||tt===null||xi(tt,Ue,an,!1)}function Au(e,t,n){var i=Ze;Ze|=2;var a=cm(),o=dm();(tt!==e||Ue!==t)&&(or=null,Ra(e,t)),t=!1;var h=st;e:do try{if(Je!==0&&qe!==null){var y=qe,x=nn;switch(Je){case 8:Iu(),h=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var O=Je;if(Je=0,nn=null,Da(e,y,x,O),n&&Aa){h=0;break e}break;default:O=Je,Je=0,nn=null,Da(e,y,x,O)}}Ow(),h=st;break}catch(Y){um(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Vn=Bi=null,Ze=i,oe.H=a,oe.A=o,qe===null&&(tt=null,Ue=0,yl()),h}function Ow(){for(;qe!==null;)fm(qe)}function Nw(e,t){var n=Ze;Ze|=2;var i=cm(),a=dm();tt!==e||Ue!==t?(or=null,ar=X()+500,Ra(e,t)):Aa=$a(e,t);e:do try{if(Je!==0&&qe!==null){t=qe;var o=nn;t:switch(Je){case 1:Je=0,nn=null,Da(e,t,o,1);break;case 2:case 9:if(fd(o)){Je=0,nn=null,mm(t);break}t=function(){Je!==2&&Je!==9||tt!==e||(Je=7),qn(e)},o.then(t,t);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:fd(o)?(Je=0,nn=null,mm(t)):(Je=0,nn=null,Da(e,t,o,7));break;case 5:var h=null;switch(qe.tag){case 26:h=qe.memoizedState;case 5:case 27:var y=qe;if(h?oy(h):y.stateNode.complete){Je=0,nn=null;var x=y.sibling;if(x!==null)qe=x;else{var O=y.return;O!==null?(qe=O,ur(O)):qe=null}break t}}Je=0,nn=null,Da(e,t,o,5);break;case 6:Je=0,nn=null,Da(e,t,o,6);break;case 8:Iu(),st=6;break e;default:throw Error(u(462))}}Cw();break}catch(Y){um(e,Y)}while(!0);return Vn=Bi=null,oe.H=i,oe.A=a,Ze=n,qe!==null?0:(tt=null,Ue=0,yl(),st)}function Cw(){for(;qe!==null&&!B();)fm(qe)}function fm(e){var t=Of(e.alternate,e,ti);e.memoizedProps=e.pendingProps,t===null?ur(e):qe=t}function mm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Sf(n,t,t.pendingProps,t.type,void 0,Ue);break;case 11:t=Sf(n,t,t.pendingProps,t.type.render,t.ref,Ue);break;case 5:Ds(t);var i=t;i===xt&&(je?(kl(i),i.tag===5&&i.stateNode!=null&&(nt=i.stateNode)):(kl(i),je=!0));default:Cf(n,t),t=qe=nd(t,ti),t=Of(n,t,ti)}e.memoizedProps=e.pendingProps,t===null?ur(e):qe=t}function Da(e,t,n,i){Vn=Bi=null,Ds(t),va=null,po=0;var a=t.return;try{if(ww(e,a,t,n,Ue)){st=1,Ul(e,cn(n,e.current)),qe=null;return}}catch(o){if(a!==null)throw qe=a,o;st=1,Ul(e,cn(n,e.current)),qe=null;return}t.flags&32768?(je||i===1?e=!0:Aa||(Ue&536870912)!==0?e=!1:(bi=e=!0,(i===2||i===9||i===3||i===6)&&(i=Nt.current,i!==null&&i.tag===13&&(i.flags|=16384))),ym(t,e)):ur(t)}function ur(e){var t=e;do{if((t.flags&32768)!==0){ym(t,bi);return}e=t.return;var n=Sw(t.alternate,t,ti);if(n!==null){qe=n;return}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);st===0&&(st=5)}function ym(e,t){do{var n=xw(e.alternate,e);if(n!==null){n.flags&=32767,qe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qe=e;return}qe=e=n}while(e!==null);st=6,qe=null}function gm(e,t,n,i,a,o,h,y,x,O,Y,F){e.cancelPendingCommit=null;do hr();while(lt!==0);if((Ze&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));e===tt&&(qe=tt=null,Ue=0),Pi=t,Tn=e,zn=n,Eu=a,om=i,Hw(e,t,n,h,y,x,F)}}function Hw(e,t,n,i,a,o,h){var y=t.lanes|t.childLanes;if(Tu=y,y|=ss,ap(e,n,y,i,a,o),Na=null,(n&335544064)===n?(Ca=lw(e),i=10262):(Ca=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,zw(ge,function(){return Cu(),null})):(e.callbackNode=null,e.callbackPriority=0),Vl=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=oe.T,oe.T=null,a=ke.p,ke.p=2,o=Ze,Ze|=4;try{Tw(e,t,n)}finally{Ze=o,ke.p=a,oe.T=i}}lt=1,Vl?Oa=av(h,e.containerInfo,Ca,Mu,Ou,Dw,Nu,Cu,Rw):(Mu(),Ou(),Nu())}function Rw(e){if(lt!==0){var t=Tn.onRecoverableError;t(e,{componentStack:null})}}function Dw(){lt===3&&(lt=0,$f(Pi,Tn),lt=4)}function Mu(){if(lt===1){lt=0;var e=Tn,t=Pi,n=zn,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=oe.T,oe.T=null;var a=ke.p;ke.p=2;var o=Ze;Ze|=4;try{Oo=$l=!1,Jf(t,e,n),n=Gu;var h=Qc(e.containerInfo),y=n.focusedElem,x=n.selectionRange;if(h!==y&&y&&y.ownerDocument&&Fc(y.ownerDocument.documentElement,y)){if(x!==null&&is(y)){var O=x.start,Y=x.end;if(Y===void 0&&(Y=O),"selectionStart"in y)y.selectionStart=O,y.selectionEnd=Math.min(Y,y.value.length);else{var F=y.ownerDocument||document,A=F&&F.defaultView||window;if(A.getSelection){var R=A.getSelection(),te=y.textContent.length,me=Math.min(x.start,te),_e=x.end===void 0?me:Math.min(x.end,te);!R.extend&&me>_e&&(h=_e,_e=me,me=h);var M=Xc(y,me),E=Xc(y,_e);if(M&&E&&(R.rangeCount!==1||R.anchorNode!==M.node||R.anchorOffset!==M.offset||R.focusNode!==E.node||R.focusOffset!==E.offset)){var H=F.createRange();H.setStart(M.node,M.offset),R.removeAllRanges(),me>_e?(R.addRange(H),R.extend(E.node,E.offset)):(H.setEnd(E.node,E.offset),R.addRange(H))}}}}for(F=[],R=y;R=R.parentNode;)R.nodeType===1&&F.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<F.length;y++){var L=F[y];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}La=!!Lu,Gu=Lu=null}finally{Ze=o,ke.p=a,oe.T=i}}e.current=t,lt=2}}function Ou(){if(lt===2){lt=0;var e=Tn,t=Pi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=oe.T,oe.T=null;var i=ke.p;ke.p=2;var a=Ze;Ze|=4;try{Xf(e,t.alternate,t)}finally{Ze=a,ke.p=i,oe.T=n}}lt=3}}function Nu(){if(lt===4||lt===3){lt=0;var e=Oa;Oa=null,G();var t=Tn,n=Pi,i=zn,a=om,o=(i&335544064)===i?10262:10256;if((n.subtreeFlags&o)!==0||(n.flags&o)!==0?lt=5:(lt=0,Pi=Tn=null,pm(t,t.pendingLanes)),o=t.pendingLanes,o===0&&(Si=null),qr(i),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(vn,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=oe.T,o=ke.p,ke.p=2,oe.T=null;try{for(var h=t.onRecoverableError,y=0;y<a.length;y++){var x=a[y];h(x.value,{componentStack:x.stack})}}finally{oe.T=n,ke.p=o}}if(a=Na,h=Ca,Ca=null,a!==null&&(Na=null,h===null&&(h=[]),e!==null))for(x=0;x<a.length;x++)n=(0,a[x])(h),n!==void 0&&e.finished.finally(n);(zn&3)!==0&&hr(),qn(t),o=t.pendingLanes,(i&261930)!==0&&(o&42)!==0?t===lr?Ro++:(Ro=0,lr=t):(Ro=0,lr=null),Do(0)}}function pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mo(t)))}function hr(){return Oa!==null&&(Oa.skipTransition(),Oa=null),Mu(),Ou(),Nu(),Cu()}function Cu(){if(lt!==5)return!1;var e=Tn,t=Tu;Tu=0;var n=qr(zn),i=oe.T,a=ke.p;try{ke.p=32>n?32:n,oe.T=null,n=Eu,Eu=null;var o=Tn,h=zn;if(lt=0,Pi=Tn=null,zn=0,(Ze&6)!==0)throw Error(u(331));var y=Ze;if(Ze|=4,nm(o.current),Pf(o,o.current,h,n),Ze=y,Do(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(vn,o)}catch{}return!0}finally{ke.p=a,oe.T=i,pm(e,t)}}function wm(e,t,n){t=cn(n,t),t=Ks(e.stateNode,t,2),e=mi(e,t,2),e!==null&&(Pa(e,2),qn(e))}function We(e,t,n){if(e.tag===3)wm(e,e,n);else for(;t!==null;){if(t.tag===3){wm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Si===null||!Si.has(i))){e=cn(n,e),n=mf(2),i=mi(t,n,2),i!==null&&(yf(n,i,t,e),Pa(i,2),qn(i));break}}t=t.return}}function Hu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Aw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Su=!0,a.add(n),e=_w.bind(null,e,t,n),t.then(e,e))}function _w(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tt===e&&(Ue&n)===n&&((st===4||st===3&&(Ue&62914560)===Ue&&300>X()-ir)&&(Ze&2)===0?Ra(e,0):nr|=n,Ma===Ue&&(Ma=0)),qn(e)}function vm(e,t){t===0&&(t=ic()),e=ji(e,t),e!==null&&(Pa(e,t),qn(e))}function Yw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vm(e,n)}function jw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),vm(e,n)}function zw(e,t){return I(e,t)}var _a=null,Ya=null,Ru=!1,cr=!1,Du=!1,Ti=0;function qn(e){e!==Ya&&e.next===null&&(Ya===null?_a=Ya=e:Ya=Ya.next=e),cr=!0,Ru||(Ru=!0,Bw())}function Do(e,t){if(!Du&&cr){Du=!0;do for(var n=!1,i=_a;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var o=0;else{var h=i.suspendedLanes,y=i.pingedLanes;o=(1<<31-Wt(42|e)+1)-1,o&=a&~(h&~y),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,xm(i,o))}else o=Ue,o=nl(i,i===tt?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||$a(i,o)||(n=!0,xm(i,o));i=i.next}while(n);Du=!1}}function qw(){bm()}function bm(){cr=Ru=!1;var e=0;Ti!==0&&Ww()&&(e=Ti);for(var t=X(),n=null,i=_a;i!==null;){var a=i.next,o=km(i,t);o===0?(i.next=null,n===null?_a=a:n.next=a,a===null&&(Ya=n)):(n=i,(e!==0||(o&3)!==0)&&(cr=!0)),i=a}lt!==0&&lt!==5||Do(e),Ti!==0&&(Ti=0)}function km(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var h=31-Wt(o),y=1<<h,x=a[h];x===-1?((y&n)===0||(y&i)!==0)&&(a[h]=ip(y,t)):x<=t&&(e.expiredLanes|=y),o&=~y}if(t=tt,n=Ue,n=nl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Je===2||Je===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&C(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||$a(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&C(i),qr(n)){case 2:case 8:n=se;break;case 32:n=ge;break;case 268435456:n=Ae;break;default:n=ge}return i=Sm.bind(null,e),n=I(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&C(i),e.callbackPriority=2,e.callbackNode=null,2}function Sm(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var i=Ue;return i=nl(e,e===tt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(rm(e,i,t),km(e,X()),e.callbackNode!=null&&e.callbackNode===n?Sm.bind(null,e):null)}function xm(e,t){if(hr())return null;rm(e,t,!0)}function Bw(){Pw(function(){(Ze&6)!==0?I($,qw):bm()})}function _u(){if(Ti===0){var e=Gi;e===0&&(e=Po,Po<<=1,(Po&261888)===0&&(Po=256)),Ti=e}return Ti}function Tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(e)}function Uw(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var o=Tm((a[Gt]||null).action),h=i.submitter;h&&(t=(t=h[Gt]||null)?Tm(t.formAction):h.getAttribute("formAction"),t!==null&&(o=t,h=null));var y=new cl("action","action",null,i,a);e.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ti!==0){var x=new FormData(a,h);Gs(n,{pending:!0,data:x,method:a.method,action:o},null,x)}}else typeof o=="function"&&(y.preventDefault(),x=new FormData(a,h),Gs(n,{pending:!0,data:x,method:a.method,action:o},o,x))},currentTarget:a}]})}}for(var Yu=0;Yu<rs.length;Yu++){var ju=rs[Yu],Lw=ju.toLowerCase(),Gw=ju[0].toUpperCase()+ju.slice(1);bn(Lw,"on"+Gw)}bn(Vc,"onAnimationEnd"),bn(Jc,"onAnimationIteration"),bn(Wc,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn($p,"onTransitionRun"),bn(Pp,"onTransitionStart"),bn(ew,"onTransitionCancel"),bn($c,"onTransitionEnd"),aa("onMouseEnter",["mouseout","mouseover"]),aa("onMouseLeave",["mouseout","mouseover"]),aa("onPointerEnter",["pointerout","pointerover"]),aa("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Em(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var h=i.length-1;0<=h;h--){var y=i[h],x=y.instance,O=y.currentTarget;if(y=y.listener,x!==o&&a.isPropagationStopped())break e;o=y,a.currentTarget=O;try{o(a)}catch(Y){ml(Y)}a.currentTarget=null,o=x}else for(h=0;h<i.length;h++){if(y=i[h],x=y.instance,O=y.currentTarget,y=y.listener,x!==o&&a.isPropagationStopped())break e;o=y,a.currentTarget=O;try{o(a)}catch(Y){ml(Y)}a.currentTarget=null,o=x}}}}function Be(e,t){var n=t[uc];n===void 0&&(n=t[uc]=new Set);var i=e+"__bubble";n.has(i)||(Im(t,e,2,!1),n.add(i))}function zu(e,t,n){var i=0;t&&(i|=4),Im(n,e,i,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function qu(e){if(!e[dr]){e[dr]=!0,dc.forEach(function(n){n!=="selectionchange"&&(Xw.has(n)||zu(n,!1,e),zu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,zu("selectionchange",!1,t))}}function Im(e,t,n,i){switch(yy(t)){case 2:var a=Yv;break;case 8:a=jv;break;default:a=oh}n=a.bind(null,t,n,e),a=void 0,!Zr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Bu(e,t,n,i,a){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var y=i.stateNode.containerInfo;if(y===a)break;if(h===4)for(h=i.return;h!==null;){var x=h.tag;if((x===3||x===4)&&h.stateNode.containerInfo===a)return;h=h.return}for(;y!==null;){if(h=Ri(y),h===null)return;if(x=h.tag,x===5||x===6||x===26||x===27){i=o=h;continue e}y=y.parentNode}}i=i.return}Ec(function(){var O=o,Y=Fr(n),F=[];e:{var A=Pc.get(e);if(A!==void 0){var R=cl,te=e;switch(e){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":R=Mp;break;case"focusin":te="focus",R=Wr;break;case"focusout":te="blur",R=Wr;break;case"beforeblur":case"afterblur":R=Wr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Rp;break;case Vc:case Jc:case Wc:R=vp;break;case $c:R=_p;break;case"scroll":case"scrollend":R=mp;break;case"wheel":R=jp;break;case"copy":case"cut":case"paste":R=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Nc;break;case"submit":R=Cp;break;case"toggle":case"beforetoggle":R=qp}var me=(t&4)!==0,_e=!me&&(e==="scroll"||e==="scrollend"),M=me?A!==null?A+"Capture":null:A;me=[];for(var E=O,H;E!==null;){var L=E;if(H=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||H===null||M===null||(L=no(E,M),L!=null&&me.push(Yo(E,L,H))),_e)break;E=E.return}0<me.length&&(A=new R(A,te,null,n,Y),F.push({event:A,listeners:me}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",R&&n!==Xr&&(te=n.relatedTarget||n.fromElement)&&(Ri(te)||te[ta]))break e;(A||R)&&(te=Y.window===Y?Y:(R=Y.ownerDocument)?R.defaultView||R.parentWindow:window,A?(R=n.relatedTarget||n.toElement,A=O,R=R?Ri(R):null,R!==null&&(_e=m(R),me=R.tag,R!==_e||me!==5&&me!==27&&me!==6)&&(R=null)):(A=null,R=O),A!==R&&(me=Mc,L="onMouseLeave",M="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(me=Nc,L="onPointerLeave",M="onPointerEnter",E="pointer"),_e=A==null?te:to(A),H=R==null?te:to(R),te=new me(L,E+"leave",A,n,Y),te.target=_e,te.relatedTarget=H,L=null,Ri(Y)===O&&(me=new me(M,E+"enter",R,n,Y),me.target=H,me.relatedTarget=_e,L=me),_e=L,me=A&&R?Fe(A,R,Fw):null,A!==null&&Am(F,te,A,me,!1),R!==null&&_e!==null&&Am(F,_e,R,me,!0)))}e:{if(A=O?to(O):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var ue=zc;else if(Yc(A))if(qc)ue=Vp;else{ue=Zp;var Le=Qp}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?O&&Gr(O.elementType)&&(ue=zc):ue=Kp;if(ue&&(ue=ue(e,O))){jc(F,ue,n,Y);break e}Le&&Le(e,A,O)}switch(Le=O?to(O):window,e){case"focusin":(Yc(Le)||Le.contentEditable==="true")&&(ha=Le,as=O,ho=null);break;case"focusout":ho=as=ha=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Zc(F,n,Y);break;case"selectionchange":if(Wp)break;case"keydown":case"keyup":Zc(F,n,Y)}var Se;if(Pr)e:{switch(e){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else ua?Dc(e,n)&&(Ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ie="onCompositionStart");Ie&&(Cc&&n.locale!=="ko"&&(ua||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&ua&&(Se=Ic()):(oi=Y,Kr="value"in oi?oi.value:oi.textContent,ua=!0)),Le=fr(O,Ie),0<Le.length&&(Ie=new Oc(Ie,e,null,n,Y),F.push({event:Ie,listeners:Le}),Se?Ie.data=Se:(Se=_c(n),Se!==null&&(Ie.data=Se)))),(Se=Up?Lp(e,n):Gp(e,n))&&(Ie=fr(O,"onBeforeInput"),0<Ie.length&&(Le=new Oc("onBeforeInput","beforeinput",null,n,Y),F.push({event:Le,listeners:Ie}),Le.data=Se)),Uw(F,e,O,n,Y)}Em(F,t)})}function Yo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fr(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,o=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||o===null||(a=no(e,n),a!=null&&i.unshift(Yo(e,a,o)),a=no(e,t),a!=null&&i.push(Yo(e,a,o))),e.tag===3)return i;e=e.return}return[]}function Fw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Am(e,t,n,i,a){for(var o=t._reactName,h=[];n!==null&&n!==i;){var y=n,x=y.alternate,O=y.stateNode;if(y=y.tag,x!==null&&x===i)break;y!==5&&y!==26&&y!==27||O===null||(x=O,a?(O=no(n,o),O!=null&&h.unshift(Yo(n,O,x))):a||(O=no(n,o),O!=null&&h.push(Yo(n,O,x)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Qw=/\r\n?/g,Zw=/\u0000|\uFFFD/g;function Mm(e){return(typeof e=="string"?e:""+e).replace(Qw,`
`).replace(Zw,"")}function Om(e,t){return t=Mm(t),Mm(e)===t}function $e(e,t,n,i,a,o){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||la(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&la(e,""+i);else return;break;case"className":ll(e,"class",i);break;case"tabIndex":ll(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ll(e,n,i);break;case"style":xc(e,i,o);return;case"data":if(t!=="object"){ll(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rl(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&$e(e,t,"name",a.name,a,null),$e(e,t,"formEncType",a.formEncType,a,null),$e(e,t,"formMethod",a.formMethod,a,null),$e(e,t,"formTarget",a.formTarget,a,null)):($e(e,t,"encType",a.encType,a,null),$e(e,t,"method",a.method,a,null),$e(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rl(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=On);return;case"onScroll":i!=null&&Be("scroll",e);return;case"onScrollEnd":i!=null&&Be("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(u(60));(o!=null?o.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=rl(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Be("beforetoggle",e),Be("toggle",e),ol(e,"popover",i);break;case"xlinkActuate":Gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Gn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Gn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Gn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Gn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ol(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=dp.get(n)||n,ol(e,n,i);else return}Qe=!0}function Uu(e,t,n,i,a,o){switch(n){case"style":xc(e,i,o);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(u(60));(o!=null?o.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")la(e,i);else if(typeof i=="number"||typeof i=="bigint")la(e,""+i);else return;break;case"onScroll":i!=null&&Be("scroll",e);return;case"onScrollEnd":i!=null&&Be("scrollend",e);return;case"onClick":i!=null&&(e.onclick=On);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!fc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),o=n.slice(2,a?n.length-7:void 0),t=e[Gt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(o,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,i,a);break e}Qe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):ol(e,n,i)}return}Qe=!0}function Rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",e),Be("load",e);var i=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var h=n[o];if(h!=null)switch(o){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:$e(e,t,o,h,n,null)}}a&&$e(e,t,"srcSet",n.srcSet,n,null),i&&$e(e,t,"src",n.src,n,null);return;case"input":Be("invalid",e);var y=o=h=a=null,x=null,O=null;for(i in n)if(n.hasOwnProperty(i)){var Y=n[i];if(Y!=null)switch(i){case"name":a=Y;break;case"type":h=Y;break;case"checked":x=Y;break;case"defaultChecked":O=Y;break;case"value":o=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,t));break;default:$e(e,t,i,Y,n,null)}}vc(e,o,y,x,O,h,a,!1);return;case"select":Be("invalid",e),i=h=o=null;for(a in n)if(n.hasOwnProperty(a)&&(y=n[a],y!=null))switch(a){case"value":o=y;break;case"defaultValue":h=y;break;case"multiple":i=y;default:$e(e,t,a,y,n,null)}t=o,n=h,e.multiple=!!i,t!=null?oa(e,!!i,t,!1):n!=null&&oa(e,!!i,n,!0);return;case"textarea":Be("invalid",e),o=a=i=null;for(h in n)if(n.hasOwnProperty(h)&&(y=n[h],y!=null))switch(h){case"value":i=y;break;case"defaultValue":a=y;break;case"children":o=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(u(91));break;default:$e(e,t,h,y,n,null)}kc(e,i,a,o);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(i=n[x],i!=null))switch(x){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:$e(e,t,x,i,n,null)}return;case"dialog":Be("beforetoggle",e),Be("toggle",e),Be("cancel",e),Be("close",e);break;case"iframe":case"object":Be("load",e);break;case"video":case"audio":for(i=0;i<_o.length;i++)Be(_o[i],e);break;case"image":Be("error",e),Be("load",e);break;case"details":Be("toggle",e);break;case"embed":case"source":case"link":Be("error",e),Be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(i=n[O],i!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:$e(e,t,O,i,n,null)}return;default:if(Gr(t)){for(Y in n)n.hasOwnProperty(Y)&&(i=n[Y],i!==void 0&&Uu(e,t,Y,i,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(i=n[y],i!=null&&$e(e,t,y,i,n,null))}var Kw={};function Vw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,h=null,y=null,x=null,O=null,Y=null;for(R in n){var F=n[R];if(n.hasOwnProperty(R)&&F!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":x=F;default:i.hasOwnProperty(R)||$e(e,t,R,null,i,F)}}for(var A in i){var R=i[A];if(F=n[A],i.hasOwnProperty(A)&&(R!=null||F!=null))switch(A){case"type":R!==F&&(Qe=!0),o=R;break;case"name":R!==F&&(Qe=!0),a=R;break;case"checked":R!==F&&(Qe=!0),O=R;break;case"defaultChecked":R!==F&&(Qe=!0),Y=R;break;case"value":R!==F&&(Qe=!0),h=R;break;case"defaultValue":R!==F&&(Qe=!0),y=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:R!==F&&$e(e,t,A,R,i,F)}}Ur(e,h,y,x,O,Y,o,a);return;case"select":R=h=y=A=null;for(o in n)if(x=n[o],n.hasOwnProperty(o)&&x!=null)switch(o){case"value":break;case"multiple":R=x;default:i.hasOwnProperty(o)||$e(e,t,o,null,i,x)}for(a in i)if(o=i[a],x=n[a],i.hasOwnProperty(a)&&(o!=null||x!=null))switch(a){case"value":o!==x&&(Qe=!0),A=o;break;case"defaultValue":o!==x&&(Qe=!0),y=o;break;case"multiple":o!==x&&(Qe=!0),h=o;default:o!==x&&$e(e,t,a,o,i,x)}t=y,n=h,i=R,A!=null?oa(e,!!n,A,!1):!!i!=!!n&&(t!=null?oa(e,!!n,t,!0):oa(e,!!n,n?[]:"",!1));return;case"textarea":R=A=null;for(y in n)if(a=n[y],n.hasOwnProperty(y)&&a!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:$e(e,t,y,null,i,a)}for(h in i)if(a=i[h],o=n[h],i.hasOwnProperty(h)&&(a!=null||o!=null))switch(h){case"value":a!==o&&(Qe=!0),A=a;break;case"defaultValue":a!==o&&(Qe=!0),R=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(u(91));break;default:a!==o&&$e(e,t,h,a,i,o)}bc(e,A,R);return;case"option":for(var te in n)if(A=n[te],n.hasOwnProperty(te)&&A!=null&&!i.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:$e(e,t,te,null,i,A)}for(x in i)if(A=i[x],R=n[x],i.hasOwnProperty(x)&&A!==R&&(A!=null||R!=null))switch(x){case"selected":A!==R&&(Qe=!0),e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:$e(e,t,x,A,i,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in n)A=n[me],n.hasOwnProperty(me)&&A!=null&&!i.hasOwnProperty(me)&&$e(e,t,me,null,i,A);for(O in i)if(A=i[O],R=n[O],i.hasOwnProperty(O)&&A!==R&&(A!=null||R!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:$e(e,t,O,A,i,R)}return;default:if(Gr(t)){for(var _e in n)A=n[_e],n.hasOwnProperty(_e)&&A!==void 0&&!i.hasOwnProperty(_e)&&Uu(e,t,_e,void 0,i,A);for(Y in i)A=i[Y],R=n[Y],!i.hasOwnProperty(Y)||A===R||A===void 0&&R===void 0||Uu(e,t,Y,A,i,R);return}}for(var M in n)A=n[M],n.hasOwnProperty(M)&&A!=null&&!i.hasOwnProperty(M)&&$e(e,t,M,null,i,A);for(F in i)A=i[F],R=n[F],!i.hasOwnProperty(F)||A===R||A==null&&R==null||$e(e,t,F,A,i,R)}function Nm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],o=a.transferSize,h=a.initiatorType,y=a.duration;if(o&&y&&Nm(h)){for(h=0,y=a.responseEnd,i+=1;i<n.length;i++){var x=n[i],O=x.startTime;if(O>y)break;var Y=x.transferSize,F=x.initiatorType;Y&&Nm(F)&&(x=x.responseEnd,h+=Y*(x<y?1:(y-O)/(x-O)))}if(--i,t+=8*(o+h)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lu=null,Gu=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function Cm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rm(e,t,n,i){return n=jo(n).createElement(e),n[Mt]=i,n[Gt]=t,Rt(n,e,t),St(n),n}function Xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fu=null;function Ww(){var e=window.event;return e&&e.type==="popstate"?e===Fu?!1:(Fu=e,!0):(Fu=null,!1)}var Qu=typeof setTimeout=="function"?setTimeout:void 0,$w=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,_m=typeof requestAnimationFrame=="function"?requestAnimationFrame:Qu,Pw=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(e){return Dm.resolve(null).then(e).catch(ev)}:Qu;function ev(e){setTimeout(function(){throw e})}function Ei(e){return e==="head"}function Ym(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Ga(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")eh(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,eh(n);for(var o=n.firstChild;o;){var h=o.nextSibling,y=o.nodeName;o[eo]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=h}}else n==="body"&&eh(e.ownerDocument.body);n=a}while(n);Ga(t)}function jm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function zm(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var o=t[a];0<o.width&&0<o.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function qm(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function tv(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Zu(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return tv(t,n,e)}function nv(e){return e.documentElement.clientHeight}function iv(e){this.addEventListener("load",e),this.addEventListener("error",e)}function av(e,t,n,i,a,o,h,y,x){var O=t.nodeType===9?t:t.ownerDocument;try{var Y=O.startViewTransition({update:function(){var A=O.defaultView,R=A.navigation&&A.navigation.transition,te=O.fonts.status;i();var me=[];if(te==="loaded"&&(nv(O),O.fonts.status==="loading"&&me.push(O.fonts.ready)),te=me.length,e!==null)for(var _e=e.suspenseyImages,M=0,E=0;E<_e.length;E++){var H=_e[E];if(!H.complete){var L=H.getBoundingClientRect();if(0<L.bottom&&0<L.right&&L.top<A.innerHeight&&L.left<A.innerWidth){if(M+=ly(H),M>gr){me.length=te;break}H=new Promise(iv.bind(H)),me.push(H)}}}if(0<me.length)return A=Promise.race([Promise.all(me),new Promise(function(ue){return setTimeout(ue,500)})]).then(a,a),(R?Promise.allSettled([R.finished,A]):A).then(o,o);if(a(),R)return R.finished.then(o,o);o()},types:n});O.__reactViewTransition=Y;var F=[];return Y.ready.then(function(){for(var A=O.documentElement.getAnimations({subtree:!0}),R=0;R<A.length;R++){var te=A[R],me=te.effect,_e=me.pseudoElement;if(_e!=null&&_e.startsWith("::view-transition")){F.push(te),te=me.getKeyframes();for(var M=_e=void 0,E=!0,H=0;H<te.length;H++){var L=te[H],ue=L.width;if(_e===void 0)_e=ue;else if(_e!==ue){E=!1;break}if(ue=L.height,M===void 0)M=ue;else if(M!==ue){E=!1;break}delete L.width,delete L.height,L.transform==="none"&&delete L.transform}E&&_e!==void 0&&M!==void 0&&(me.setKeyframes(te),E=getComputedStyle(me.target,me.pseudoElement),E.width!==_e||E.height!==M)&&(E=te[0],E.width=_e,E.height=M,E=te[te.length-1],E.width=_e,E.height=M,me.setKeyframes(te))}}h()},function(A){O.__reactViewTransition===Y&&(O.__reactViewTransition=null);try{if(typeof A=="object"&&A!==null)switch(A.name){case"InvalidStateError":(A.message==="View transition was skipped because document visibility state is hidden."||A.message==="Skipping view transition because document visibility state has become hidden."||A.message==="Skipping view transition because viewport size changed."||A.message==="Transition was aborted because of invalid state")&&(A=null)}A!==null&&x(A)}finally{i(),a(),h()}}),Y.finished.finally(function(){for(var A=0;A<F.length;A++)F[A].cancel();O.__reactViewTransition===Y&&(O.__reactViewTransition=null),y()}),Y}catch{return i(),a(),h(),null}}function ea(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ea.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:be({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ea.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var o=n[a].effect;o!==null&&o.target===e&&o.pseudoElement===t&&i.push(n[a])}return i},ea.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Bm(e){return{name:e,group:new ea("group",e),imagePair:new ea("image-pair",e),old:new ea("old",e),new:new ea("new",e)}}function ln(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ln.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(Lm(o,e,t,n)===-1){var h=this,y=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(y=function(x){h.removeEventListener(e,t,n),typeof t=="function"?t.call(this,x):t.handleEvent(x)}),i!==null&&(a=h.removeEventListener.bind(h,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=ja(n),o.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:y,cleanup:a}),g(this._fragmentFiber.child,!1,ov,e,y,i)}this._eventListeners=o}};function ov(e,t,n,i){return ne(e).addEventListener(t,n,i),!1}ln.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=Lm(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var o=a.cleanup;a=ja(a.optionsOrUseCapture),g(this._fragmentFiber.child,!1,lv,e,n,a),i.splice(t,1),o!==null&&o()}};function lv(e,t,n,i){return ne(e).removeEventListener(t,n,i),!1}function ja(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Um(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Lm(e,t,n,i){if(e.length===0)return-1;i=Um(i);for(var a=0;a<e.length;a++){var o=e[a];if(o.type===t&&o.listener===n&&Um(o.optionsOrUseCapture)===i)return a}return-1}ln.prototype.dispatchEvent=function(e){var t=k(this._fragmentFiber);if(t===null)return!0;t=ne(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var o=n[a];i.addEventListener(o.type,o.attachedListener,ja(o.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)o=n[a],i.removeEventListener(o.type,o.attachedListener,ja(o.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)},ln.prototype.focus=function(e){g(this._fragmentFiber.child,!0,Gm,e,void 0,void 0)};function Gm(e,t){return e.tag===6?!1:(e=ne(e),wv(e,t))}ln.prototype.focusLast=function(e){var t=[];g(this._fragmentFiber.child,!0,Ku,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Gm(t[n],e);n--);};function Ku(e,t){return t.push(e),!1}ln.prototype.blur=function(){var e=k(this._fragmentFiber);e!==null&&(e=ne(e),e=jo(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,rv,e,void 0,void 0))};function rv(e,t){return e.tag===6?!1:(e=ne(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ln.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,sv,e,void 0,void 0)};function sv(e,t){return e.tag===6||(e=ne(e),t.observe(e)),!1}ln.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),g(this._fragmentFiber.child,!1,uv,e,void 0,void 0);for(var n=t=0;n<En.length;n++){var i=En[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):En[t++]=i}En.length=t}};function uv(e,t){return e.tag===6||(e=ne(e),t.unobserve(e)),!1}var En=[],Vu=!1;function hv(e,t,n){En.push({fragmentInstance:e,observer:t,instance:n}),Vu||(Vu=!0,vv(function(){Vu=!1;var i=En;En=[];for(var a=0;a<i.length;a++){var o=i[a];o.observer.unobserve(o.instance)}}))}ln.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,cv,e,void 0,void 0),e};function cv(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=ne(e),t.push.apply(t,e.getClientRects());return!1}ln.prototype.getRootNode=function(e){var t=k(this._fragmentFiber);return t===null?this:ne(t).getRootNode(e)},ln.prototype.compareDocumentPosition=function(e){var t=k(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];g(this._fragmentFiber.child,!1,Ku,n,void 0,void 0);var i=ne(t);if(n.length===0){if(n=i,D(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=U(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=ne(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=ne(n[0]),a=ne(n[n.length-1]);var o=D(this._fragmentFiber)?t.parentElement:i;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=o.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var h=t.compareDocumentPosition(e),y=a.compareDocumentPosition(e),x=h&Node.DOCUMENT_POSITION_CONTAINED_BY||y&Node.DOCUMENT_POSITION_CONTAINED_BY;return y=i&&o&&h&Node.DOCUMENT_POSITION_FOLLOWING&&y&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||o&&a===e||x||y?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!o&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:h,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||dv(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function dv(e,t,n,i,a){var o=Ri(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===t||o.alternate===t)){n=!0;break e}o=o.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=a.ownerDocument,a===o||a===o.documentElement||a===o.body;e:{for(o=t,t=k(t);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==t&&o.alternate!==t)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!o)&&!(t=o===n)&&(t=Fe(n,o,le),t===null?t=!1:(g(t,!0,de,o,n),o=Te,Te=null,t=o!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!o)&&!(t=o===i)&&(t=Fe(i,o,le),t===null?t=!1:(g(t,!0,ce,o,i),o=Te,ve=Te=null,t=o!==null)),t):!1}function Xm(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ln.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(u(566));var t=[];g(this._fragmentFiber.child,!1,Ku,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=U(this._fragmentFiber);if(i=n?i[1]||i[0]||k(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=ne(i),Xm(e,n);return}if(i=ne(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=ne(a),Xm(a,n)):ne(a).scrollIntoView(e),i+=n?-1:1}};function fv(e,t){return e=ne(e),Fm(e,t),!1}function Fm(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Qm(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,ja(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(o){for(var h=0,y=0;y<En.length;y++){var x=En[y];(x.fragmentInstance!==t||x.observer!==o||x.instance!==e)&&(En[h++]=x)}En.length=h,o.observe(e)}),Fm(e,t))}function mv(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,ja(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(o){typeof o.rootMargin=="string"?hv(t,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Ju(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ju(n),al(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yv(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[eo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=gn(e.nextSibling),e===null)break}return null}function gv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gn(e.nextSibling),e===null))return null;return e}function Zm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gn(e.nextSibling),e===null))return null;return e}function Wu(e){return e.data==="$?"||e.data==="$~"}function $u(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Pu=null;function Km(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return gn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Vm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function wv(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function vv(e){_m(function(){_m(function(t){return e(t)})})}function Jm(e,t,n){switch(t=jo(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Wm(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&$e(e,t,i,null,Kw,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===On&&(e.onclick=null),al(e)}function eh(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);al(e)}var pn=new Map,$m=new Set;function zo(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ni=ke.d;ke.d={f:bv,r:kv,D:Sv,C:xv,L:Tv,m:Ev,X:Av,S:Iv,M:Mv};function bv(){var e=ni.f(),t=rr();return e||t}function kv(e){var t=na(e);t!==null&&t.tag===5&&t.type==="form"?Pd(t):ni.r(e)}var za=typeof document>"u"?null:document;function Pm(e,t,n){var i=za;if(i&&typeof t=="string"&&t){var a=un(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),$m.has(a)||($m.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Rt(t,"link",e),St(t),i.head.appendChild(t)))}}function Sv(e){ni.D(e),Pm("dns-prefetch",e,null)}function xv(e,t){ni.C(e,t),Pm("preconnect",e,t)}function Tv(e,t,n){ni.L(e,t,n);var i=za;if(i&&e&&t){var a='link[rel="preload"][as="'+un(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+un(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+un(n.imageSizes)+'"]')):a+='[href="'+un(e)+'"]';var o=a;switch(t){case"style":o=qa(e);break;case"script":o=Ba(e)}if(!(pn.has(o)||(e=be({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),pn.set(o,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(qo(o))||t==="script"&&i.querySelector(Bo(o))))){var h=i.createElement("link");Rt(h,"link",e),t==="style"&&(h[il]=!0,h.onload=h.onerror=function(){cc(h)}),St(h),i.head.appendChild(h)}}}function Ev(e,t){ni.m(e,t);var n=za;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+un(i)+'"][href="'+un(e)+'"]',o=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ba(e)}if(!pn.has(o)&&(e=be({rel:"modulepreload",href:e},t),pn.set(o,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bo(o)))return}i=n.createElement("link"),Rt(i,"link",e),St(i),n.head.appendChild(i)}}}function Iv(e,t,n){ni.S(e,t,n);var i=za;if(i&&e){var a=ia(i).hoistableStyles,o=qa(e);t=t||"default";var h=a.get(o);if(!h){var y={loading:0,preload:null};if(h=i.querySelector(qo(o)))y.loading=5;else{e=be({rel:"stylesheet",href:e,"data-precedence":t},n),(n=pn.get(o))&&th(e,n);var x=h=i.createElement("link");St(x),Rt(x,"link",e),x._p=new Promise(function(O,Y){x.onload=O,x.onerror=Y}),x.addEventListener("load",function(){y.loading|=1}),x.addEventListener("error",function(){y.loading|=2}),y.loading|=4,mr(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:y},a.set(o,h)}}}function Av(e,t){ni.X(e,t);var n=za;if(n&&e){var i=ia(n).hoistableScripts,a=Ba(e),o=i.get(a);o||(o=n.querySelector(Bo(a)),o||(e=be({src:e,async:!0},t),(t=pn.get(a))&&nh(e,t),o=n.createElement("script"),St(o),Rt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(a,o))}}function Mv(e,t){ni.M(e,t);var n=za;if(n&&e){var i=ia(n).hoistableScripts,a=Ba(e),o=i.get(a);o||(o=n.querySelector(Bo(a)),o||(e=be({src:e,async:!0,type:"module"},t),(t=pn.get(a))&&nh(e,t),o=n.createElement("script"),St(o),Rt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(a,o))}}function ey(e,t,n,i){var a=(a=kt.current)?zo(a):null;if(!a)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=qa(n.href),t=ia(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=qa(n.href);var o=ia(a).hoistableStyles,h=o.get(e);if(h||(a=a.ownerDocument||a,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,h),(o=a.querySelector(qo(e)))?o._p||(h.instance=o,h.state.loading=5):(o=pn.get(e),o||(o={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pn.set(e,o)),Ov(a,e,o,h.state))),t&&i===null)throw Error(u(528,""));return h}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Ba(n),t=ia(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function qa(e){return'href="'+un(e)+'"'}function qo(e){return'link[rel="stylesheet"]['+e+"]"}function ty(e){return be({},e,{"data-precedence":e.precedence,precedence:null})}function Ov(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[il]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[il]=!0,t.onload=t.onerror=cc.bind(null,t),Rt(t,"link",n),St(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Ba(e){return'[src="'+un(e)+'"]'}function Bo(e){return"script[async]"+e}function ny(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+un(n.href)+'"]');if(i)return t.instance=i,St(i),i;var a=be({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),St(i),Rt(i,"style",a),mr(i,n.precedence,e),t.instance=i;case"stylesheet":a=qa(n.href);var o=e.querySelector(qo(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;i=ty(n),(a=pn.get(a))&&th(i,a),o=(e.ownerDocument||e).createElement("link"),St(o);var h=o;return h._p=new Promise(function(y,x){h.onload=y,h.onerror=x}),Rt(o,"link",i),t.state.loading|=4,mr(o,n.precedence,e),t.instance=o;case"script":return o=Ba(n.src),(a=e.querySelector(Bo(o)))?(t.instance=a,St(a),a):(i=n,(a=pn.get(o))&&(i=be({},n),nh(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),St(a),Rt(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,mr(i,n.precedence,e));return t.instance}function mr(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,o=a,h=0;h<i.length;h++){var y=i[h];if(y.dataset.precedence===t)o=y;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function th(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function nh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yr=null;function iy(e,t,n){if(yr===null){var i=new Map,a=yr=new Map;a.set(n,i)}else a=yr,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[eo]||o[Mt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var h=o.getAttribute(t)||"";h=e+h;var y=i.get(h);y?y.push(o):i.set(h,[o])}}return i}function ih(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Nv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ay(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function oy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ly(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ry(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=ly(t),e.suspenseyImages.push(t)),e=Rv.bind(e),t.decode().then(e,e))}function Cv(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=qa(i.href),o=t.querySelector(qo(a));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Uo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,St(o);return}o=t.ownerDocument||t,i=ty(i),(a=pn.get(a))&&th(i,a),o=o.createElement("link"),St(o);var h=o;h._p=new Promise(function(y,x){h.onload=y,h.onerror=x}),Rt(o,"link",i),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Uo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var gr=0;function Hv(e,t){return e.stylesheets&&e.count===0&&wr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&wr(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&gr===0&&(gr=62500*Jw());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wr(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>gr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function sy(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)wr(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Uo(){this.count--,sy(this)}function Rv(){this.imgCount--,sy(this)}var pr=null;function wr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pr=new Map,t.forEach(Dv,e),pr=null,Uo.call(e))}function Dv(e,t){if(!(t.state.loading&4)){var n=pr.get(e);if(n)var i=n.get(null);else{n=new Map,pr.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var h=a[o];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),i=h)}i&&n.set(null,i)}a=t.instance,h=a.getAttribute("data-precedence"),o=n.get(h)||i,o===i&&n.set(null,a),n.set(h,a),this.count++,i=Uo.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),o?o.parentNode.insertBefore(a,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ua={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:It,_currentValue2:It,_threadCount:0};function _v(e,t,n,i,a,o,h,y,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.hiddenUpdates=jr(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.transitionTypes=null,this.incompleteTransitions=new Map}function uy(e,t,n,i,a,o,h,y,x,O,Y,F){return e=new _v(e,t,n,h,x,O,Y,F,y),t=1,o===!0&&(t|=24),o=Xt(3,null,null,t),e.current=o,o.stateNode=e,t=ws(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:n,cache:t},Ss(o),e}function hy(e){return e?(e=fa,e):fa}function cy(e,t,n,i,a,o){a=hy(a),i.context===null?i.context=a:i.pendingContext=a,i=fi(t),i.payload={element:n},o=o===void 0?null:o,o!==null&&(i.callback=o),n=mi(e,i,t),n!==null&&(Kt(n,e,t),wo(n,e,t))}function dy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ah(e,t){dy(e,t),(e=e.alternate)&&dy(e,t)}function fy(e){if(e.tag===13||e.tag===31){var t=ji(e,67108864);t!==null&&Kt(t,e,67108864),ah(e,67108864)}}function my(e){if(e.tag===13||e.tag===31){var t=on();t=zr(t);var n=ji(e,t);n!==null&&Kt(n,e,t),ah(e,t)}}var La=!0;function Yv(e,t,n,i){var a=oe.T;oe.T=null;var o=ke.p;try{ke.p=2,oh(e,t,n,i)}finally{ke.p=o,oe.T=a}}function jv(e,t,n,i){var a=oe.T;oe.T=null;var o=ke.p;try{ke.p=8,oh(e,t,n,i)}finally{ke.p=o,oe.T=a}}function oh(e,t,n,i){if(La){var a=lh(i);if(a===null)Bu(e,t,i,vr,n),gy(e,i);else if(qv(a,e,t,n,i))i.stopPropagation();else if(gy(e,i),t&4&&-1<zv.indexOf(e)){for(;a!==null;){var o=na(a);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var h=Hi(o.pendingLanes);if(h!==0){var y=o;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var x=1<<31-Wt(h);y.entanglements[1]|=x,h&=~x}qn(o),(Ze&6)===0&&(ar=X()+500,Do(0))}}break;case 31:case 13:y=ji(o,2),y!==null&&Kt(y,o,2),rr(),ah(o,2)}if(o=lh(i),o===null&&Bu(e,t,i,vr,n),o===a)break;a=o}a!==null&&i.stopPropagation()}else Bu(e,t,i,null,n)}}function lh(e){return e=Fr(e),rh(e)}var vr=null;function rh(e){if(vr=null,e=Ri(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=w(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vr=e,null}function yy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case $:return 2;case se:return 8;case ge:case xe:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var sh=!1,Ii=null,Ai=null,Mi=null,Lo=new Map,Go=new Map,Oi=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gy(e,t){switch(e){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ai=null;break;case"mouseover":case"mouseout":Mi=null;break;case"pointerover":case"pointerout":Lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function Xo(e,t,n,i,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[a]},t!==null&&(t=na(t),t!==null&&fy(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function qv(e,t,n,i,a){switch(t){case"focusin":return Ii=Xo(Ii,e,t,n,i,a),!0;case"dragenter":return Ai=Xo(Ai,e,t,n,i,a),!0;case"mouseover":return Mi=Xo(Mi,e,t,n,i,a),!0;case"pointerover":var o=a.pointerId;return Lo.set(o,Xo(Lo.get(o)||null,e,t,n,i,a)),!0;case"gotpointercapture":return o=a.pointerId,Go.set(o,Xo(Go.get(o)||null,e,t,n,i,a)),!0}return!1}function py(e){var t=Ri(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=w(n),t!==null){e.blockedOn=t,sc(e.priority,function(){my(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,sc(e.priority,function(){my(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Xr=i,n.target.dispatchEvent(i),Xr=null}else return t=na(n),t!==null&&fy(t),e.blockedOn=n,!1;t.shift()}return!0}function wy(e,t,n){br(e)&&n.delete(t)}function Bv(){sh=!1,Ii!==null&&br(Ii)&&(Ii=null),Ai!==null&&br(Ai)&&(Ai=null),Mi!==null&&br(Mi)&&(Mi=null),Lo.forEach(wy),Go.forEach(wy)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,sh||(sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Bv)))}var Sr=null;function vy(e){Sr!==e&&(Sr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sr===e&&(Sr=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(rh(i||n)===null)continue;break}var o=na(n);o!==null&&(e.splice(t,3),t-=3,Gs(o,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ga(e){function t(x){return kr(x,e)}Ii!==null&&kr(Ii,e),Ai!==null&&kr(Ai,e),Mi!==null&&kr(Mi,e),Lo.forEach(t),Go.forEach(t);for(var n=0;n<Oi.length;n++){var i=Oi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)py(n),n.blockedOn===null&&Oi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],o=n[i+1],h=a[Gt]||null;if(typeof o=="function")h||vy(n);else if(h){var y=null;if(o&&o.hasAttribute("formAction")){if(a=o,h=o[Gt]||null)y=h.formAction;else if(rh(a)!==null)continue}else y=h.action;typeof y=="function"?n[i+1]=y:(n.splice(i,3),i-=3),vy(n)}}}function by(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(h){return a=h})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function uh(e){this._internalRoot=e}xr.prototype.render=uh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=on();cy(n,i,e,t,null,null)},xr.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cy(e.current,2,null,e,null,null),rr(),t[ta]=null}};function xr(e){this._internalRoot=e}xr.prototype.unstable_scheduleHydration=function(e){if(e){var t=rc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Oi.length&&t!==0&&t<Oi[n].priority;n++);Oi.splice(n,0,e),n===0&&py(e)}};var ky=s.version;if(ky!=="19.3.0")throw Error(u(527,ky,"19.3.0"));ke.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Uv={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:oe,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{vn=Tr.inject(Uv),vt=Tr}catch{}}return Qo.createRoot=function(e,t){if(!f(e))throw Error(u(299));var n=!1,i="",a=hf,o=cf,h=df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=uy(e,1,!1,null,null,n,i,null,a,o,h,by),e[ta]=t.current,qu(e),new uh(t)},Qo.hydrateRoot=function(e,t,n){if(!f(e))throw Error(u(299));var i=!1,a="",o=hf,h=cf,y=df,x=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=uy(e,1,!0,t,n??null,i,a,x,o,h,y,by),t.context=hy(null),n=t.current,i=on(),i=zr(i),a=fi(i),a.callback=null,mi(n,a,i),n=i,t.current.lanes=n,Pa(t,n),qn(t),e[ta]=t.current,qu(e),new xr(t)},Qo.version="19.3.0",Qo}var Cy;function Wv(){if(Cy)return dh.exports;Cy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),dh.exports=Jv(),dh.exports}var $v=Wv();const Pv=JSON.parse(`{"L1":{"time":"Meetup Day · Before Leaving","lines":[["我朋友叫我去玩桌游，但是没定好去哪家，你帮我看一下，市中心有啥推荐的","My friend invited me to play board games, but we haven't picked a place. Can you see what's good downtown?"],["他和朋友还没定地点，只说想在市中心找。可以给几家差别明显的店，把位置和适合什么样的局说清楚，方便他们选。","He and his friends haven't picked a place. Downtown is all I have to go on. I can give him a few distinct options and say where each is and what kind of group it suits."]],"choices":[{"thought":["比较几家合适的桌游店","Compare a few board game cafés"],"reply":["我给你列三家。要是人多，可以优先问有没有大桌或包间。\\n\\n时光桌游吧：位于小寨华旗国际A座，电话 029-85418760。是小寨片区比较老牌的桌游吧，但是环境一般，价格偏高。\\n\\n心动桌游俱乐部：在莱安中心T6-21703室。环境更新、店面更大，很多带独立包间，适合6人以上的大聚会。\\n\\n叙事者营地桌游馆：位于大唐不夜城长安C位10号商铺，在景区里，过去得多留点时间。","Here are three places. If you've got a big group, ask about large tables or private rooms first.\\n\\nShiguang Board Game Café: Tower A, Xiaozhai Huaqi International. 029-85418760. It's been around a long time, but the place is nothing special and it's on the pricey side.\\n\\nXindong Board Game Club: Room T6-21703, Lai'an Center. Newer, bigger, and with plenty of private rooms. Good for groups of six or more.\\n\\nStoryteller Camp Board Games: Shop 10, Chang'an C-Spot, Grand Tang Mall. It's in the tourist district, so give yourself extra time to get there."]}],"memories":[]},"L2":{"time":"Meetup Day · Before Leaving","lines":[["你帮我选一下吧，你帮我选一个。我们可能人稍微多一点。我在收拾东西呢，没时间看。","Can you pick one for me? There might be quite a few of us. I'm getting my stuff together and don't have time to look."],["他正在收拾东西，想直接定一家，人可能还不少。选好后提醒他先问有没有能坐下的桌，免得一群人白跑一趟。","He's getting ready and wants me to pick. It might be a big group. Once he's got a place, I should remind him to check they can all fit before everyone heads out."]],"choices":[{"thought":["时光桌游吧","Shiguang Board Game Café"],"reply":["可以先问这家。时光桌游吧，小寨华旗国际A座，电话 029-85418760。小寨老牌桌游吧，环境一般、价格偏高。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Shiguang Board Game Café, Tower A, Xiaozhai Huaqi International, 029-85418760. It's been around a while, but the place is nothing special and it's on the pricey side.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]},{"thought":["心动桌游俱乐部","Xindong Board Game Club"],"reply":["可以先问这家。心动桌游俱乐部，莱安中心T6-21703室，电话 029-85512345。环境新、店面大，带独立包间，适合6人以上大聚会。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Xindong Board Game Club, Room T6-21703, Lai'an Center, 029-85512345. It's newer and bigger, with private rooms that work well for groups of six or more.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]},{"thought":["叙事者营地桌游馆","Storyteller Camp Board Games"],"reply":["可以先问这家。叙事者营地桌游馆，大唐不夜城长安C位10号商铺，电话 029-85678901。在景区里，有特色，但公共交通相对没那么方便。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Storyteller Camp Board Games, Shop 10, Chang'an C-Spot, Grand Tang Mall, 029-85678901. It's a distinctive spot in the tourist district, though it's harder to get to by public transit.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]}],"memories":[]},"L3":{"time":"Meetup Day · Before Leaving","lines":[["OK","OK"]],"choices":[],"memories":[]},"R1-shiguang":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"时光桌游吧\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Shiguang Board Game Café.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「时光桌游吧」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Shiguang Board Game Café before she heads out. Give her the address and flag anything that might affect her plans."],["时光桌游吧，在小寨华旗国际 A 座，电话 029-85418760。小寨的老牌桌游吧，环境一般、价格偏高。","Shiguang Board Game Café is in Tower A, Xiaozhai Huaqi International. 029-85418760. It's been around a long time in Xiaozhai, but the place is nothing special and it's on the pricey side."],["这个太贵了吧，我让他换个地方","That sounds expensive. I'll ask him to switch places."],["换好了，他们刚发我了，最后去心动桌游俱乐部，莱安中心T6-21703室。你帮我记一下，我怕忘了","They switched! Just got the message. We're going to Xindong Board Game Club, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R1-xindong":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"心动桌游俱乐部\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Xindong Board Game Club.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「心动桌游俱乐部」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Xindong Board Game Club before she heads out. Give her the address and flag anything that might affect her plans."],["心动桌游俱乐部，在莱安中心 T6-21703 室，电话 029-85512345。环境新、店面大，带独立包间，适合人多一起玩。","Xindong Board Game Club is in Room T6-21703, Lai'an Center. 029-85512345. It's newer and bigger, with private rooms that work well for groups."],["OK，莱安中心T6-21703室，你帮我记一下，我怕忘了","OK, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."],["OK，这个感觉还挺好的","OK, this one actually sounds pretty good."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R1-xushi":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"叙事者营地桌游馆\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Storyteller Camp Board Games.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「叙事者营地桌游馆」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Storyteller Camp Board Games before she heads out. Give her the address and flag anything that might affect her plans."],["叙事者营地桌游馆，在大唐不夜城长安 C 位 10 号商铺。在景区里，公共交通相对没那么方便。","Storyteller Camp Board Games is at Shop 10, Chang'an C-Spot, Grand Tang Mall. It's in the tourist district, so getting there by public transit is a little trickier."],["咋这么远，过去都啥时候了，我让他换个地方","Why's it so far? It'll take forever to get there. I'll ask him to switch places."],["换好了，他们刚发我了，最后去心动桌游俱乐部，莱安中心T6-21703室。你帮我记一下，我怕忘了","They switched! Just got the message. We're going to Xindong Board Game Club, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R2":{"time":"Meetup Day · Before Leaving","lines":[["你说我要不要化妆，现在时间有点小紧张，但是好像有不认识的人来","Should I put on makeup? I don't have much time, but I think some people I don't know are coming."],["她在意第一次见不认识的人，又怕耽误出门。可以建议她简单化一点，或者直接出门，把时间留给路上。","She cares how she comes across when she first meets people, but she doesn't want to be late. She could do a little makeup or leave now and give herself more time to get there."]],"choices":[{"thought":["简单化一点","Keep it simple"],"reply":["想化的话就简单弄一下，底妆和口红挑你平时最快的来。给路上留够时间，出门前不用把全套都做完。","If you feel like it, keep it quick. Do whatever base or lipstick takes you the least time. Leave enough time to get there. You don't have to do the whole routine."]},{"thought":["先出门，不耽误时间","Head out now"],"reply":["来不及就先走吧。桌游局有现成的话题，到了坐下来就能一起玩。省下几分钟，路上也不用那么赶。","If there's barely time, just go. You've already got something to talk about at a board game meetup. Sit down and join in when you get there. A few extra minutes means less rushing on the way."]}],"memories":[]},"3.1.1-A":{"time":"Around Arrival","lines":[["我到桌游这了，换到心动了，你选的那个他们说太贵了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. We switched to Xindong. They said the one you picked was too expensive. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["大家因为价格换了店。他到地方了，可除了叫他来的人谁都不认识。可以先让他坐一会儿，或者用桌游找个话题搭话。","They switched because of the price. He's there now and only knows the friend who invited him. He can sit for a bit or use the games to start a conversation."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.1.1-B":{"time":"Around Arrival","lines":[["我到桌游这了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["他已经到了，发现桌上都是生面孔，想知道现在做什么合适。可以让他先坐下缓缓，也可以从大家熟悉的桌游聊起。","He's here and doesn't recognize anyone at the table. He's wondering what to do. He can sit down and get comfortable, or talk about the games they've all come to play."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.1.1-C":{"time":"Around Arrival","lines":[["我到桌游这了，换到心动了，你选的那个他们说太远了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. We switched to Xindong. They said the one you picked was too far. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["聚会因为距离换了地方，他到店之后又遇到一桌陌生人。先给他一个现在能做的小动作，帮他度过等开局这段时间。","They switched because of the distance. Now he's looking at a table full of strangers. Give him one small thing he can do while he's waiting for the game to start."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.2.1":{"time":"Around Arrival","lines":[["靠靠靠，我刚才找了个搭话，结果他没说话，我以为她不想理我，我就假装没事走了。结果是她带着耳机.....靠早知道看手机了","Shit shit shit, I tried talking to someone and she didn't say anything. I thought she was ignoring me so I walked off like it was nothing. Turns out she had earbuds in... Damn it, I should've just looked at my phone."],["搭话没得到回应，他后来才发现对方戴着耳机。可以提醒他这很可能是没听见，再给他一个容易接回牌桌的办法。","He didn't get an answer, then realized she had earbuds in. I can point out that she probably didn't hear him and give him an easy way back into things at the table."]],"choices":[{"thought":["把没听见和不想理分开","Maybe she didn't hear him"],"reply":["她戴着耳机，很可能压根没听见。你已经试着开了口，先缓一下吧。等开桌了，从规则或者手里的牌聊一句，会自然些。","She had earbuds in. There's a good chance she didn't hear you at all. You already gave it a shot, so take a second. When the game starts, say something about the rules or the cards you got. That'll feel more natural."]}],"memories":[]},"3.4.1":{"time":"On the Way","lines":[["我刚出地铁，我出A口然后怎么走？","I just got out of the subway. Which way do I go from Exit A?"],["她从 A 口出来了，正在问该往哪边走。有留下的地址，可以按地图告诉她怎么走；如果地址没留下，凭印象指路就有可能说错。","She's at Exit A and wants directions. If I kept the address, I can use it to give her the route. Without it, I'd be guessing."]],"choices":[{"thought":["用记下的地址导航","Use the saved address"],"reply":["我记着地址。你在地图里搜「莱安中心」，按 A 口的步行路线走。进楼后找 T6，店在 21703 室。","I have the address. Search for “Lai'an Center” in your map app and follow the walking route from Exit A. Once you're inside, look for T6. The café's in Room 21703."]},{"thought":["凭印象指个方向","Give directions from memory"],"reply":["出A口往左，过两个路口就看到了，两分钟，放心走。","Turn left out of Exit A. Go past two intersections and you'll see it. Two minutes, tops. You're fine."]}],"memories":[]},"3.4.2":{"time":"On the Way","lines":[["？？你这是瞎指的吧，我照你说的走了半天根本没有。我问同学了，她发我位置了。你这指路水平不行啊","?? Did you just make that up? I walked forever the way you said and it wasn't there. I asked a classmate and she sent me the location. You're really bad at directions."],["她按我说的方向走错了，已经找同学拿到正确的位置。先承认刚才没有确认过，再让她按同学发来的定位走。","She went the wrong way because of my directions. A classmate's already sent her the right location. Admit I didn't check, then tell her to follow the pin she got."]],"choices":[{"thought":["承认刚才指错了","Own the wrong turn"],"reply":["是我指错了，刚才没确认就给你说了个方向。你按同学发的定位走吧，别再往我说的那边绕了。","I sent you the wrong way. I gave you a direction without checking it. Follow the pin your classmate sent and don't go any farther the way I said."]}],"memories":[]},"3.4.arrived":{"time":"At the Café · Between Rounds","lines":[],"choices":[],"memories":[]},"3.2.2":{"time":"Around Arrival","lines":[["我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好","We already started playing. A girl just got here, I think she's my cousin's deskmate or something. She's really pretty, and she seems super outgoing. She laughs so loud. She just seems really nice."],["他注意到新来的女生，尤其喜欢她玩游戏时的开朗劲儿。刚才搭话没接上，他可能还有点怕尴尬。可以建议从同桌玩牌聊起，也可以让他先玩一局。","He noticed the girl who just came in, especially how outgoing she is at the game. He might still feel awkward after the last time he tried talking to someone. I can suggest a game-related opening or let him play a round first."]],"choices":[{"thought":["从下一局找机会搭话","Talk to her next round"],"reply":["下一局可以问一句「带我一个呗？」你已经在同一桌了，借游戏开口，比特意跑去搭讪自然。","Next round you could ask, “Can I join you?” You're at the same table already. Starting with the game will feel more natural than going over just to hit on her."]},{"thought":["先玩一局，等话头自然出现","Play a round first"],"reply":["刚才那下还尴尬的话，先把手上这局玩完。等分队或者换游戏，有机会自然接上一句就行。","If you're still feeling awkward about earlier, finish this round. When you switch teams or start a new game, say something if the moment comes up."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.2.2-A":{"time":"Around Arrival","lines":[["我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见","We already started playing. I looked up the second that girl walked in. Her eye makeup looks so good! I think she's my cousin's deskmate or something. She sat down and immediately started talking to the person next to her. I could hear her laughing from where I was."],["他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。","He noticed her as soon as she walked in and really wants to meet her. She's only just sat down. He can open with the game without trying to come up with some special line."]],"choices":[{"thought":["从下一局找机会搭话","Talk to her next round"],"reply":["下一局可以问一句「带我一个呗？」你已经在同一桌了，借游戏开口，比特意跑去搭讪自然。","Next round you could ask, “Can I join you?” You're at the same table already. Starting with the game will feel more natural than going over just to hit on her."]},{"thought":["先玩一局，等话头自然出现","Play a round first"],"reply":["刚才那下还尴尬的话，先把手上这局玩完。等分队或者换游戏，有机会自然接上一句就行。","If you're still feeling awkward about earlier, finish this round. When you switch teams or start a new game, say something if the moment comes up."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.3.1":{"time":"Around Arrival","lines":[["我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好","We already started playing. A girl just got here, I think she's my cousin's deskmate or something. She's really pretty, and she seems super outgoing. She laughs so loud. She just seems really nice."],["他玩了一会儿，开始注意到那个女生的笑声，也想认识她。可以建议从下一局的游戏开口，两个人都知道该接什么。","He's played for a bit and started noticing the sound of her laugh. He wants to meet her. The next round gives him an opening she'll know how to answer."]],"choices":[{"thought":["从游戏找机会开口","Use the game to start talking"],"reply":["下一局可以问一句「带我一个呗？」已经坐到一张桌上了，用你们正在玩的游戏开个头就行。","Next round you could ask, “Can I join you?” You're already at the same table. Just open with whatever you're playing."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.3.1-A":{"time":"Around Arrival","lines":[["我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见","We already started playing. I looked up the second that girl walked in. Her eye makeup looks so good! I think she's my cousin's deskmate or something. She sat down and immediately started talking to the person next to her. I could hear her laughing from where I was."],["他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。","He noticed her as soon as she walked in and really wants to meet her. She's only just sat down. He can open with the game without trying to come up with some special line."]],"choices":[{"thought":["从游戏找机会开口","Use the game to start talking"],"reply":["下一局可以问一句「带我一个呗？」已经坐到一张桌上了，用你们正在玩的游戏开个头就行。","Next round you could ask, “Can I join you?” You're already at the same table. Just open with whatever you're playing."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.2.3":{"time":"Around Arrival","lines":[["唉算了，我就是口嗨。下一局开始了，我先不聊了。","Ah, forget it. I was just running my mouth. Next round's starting. I gotta go."],["他刚说想搭话，又决定先玩游戏。既然他准备收起手机，就让聊天到这儿，有没有机会等同桌相处时再看。","He wanted to talk to her, then decided to get back to the game. He's about to put his phone away. Leave it here and let him see what happens while they're at the table."]],"choices":[{"thought":["顺着他，先让他去玩","Let him get back to the game"],"reply":["那你先玩。你们都在一张桌上，等有话自然接得上，今天不用专门找个机会开口。","Go play. You're all at one table. If something comes up, you can chime in. You don't have to go looking for an opening today."]}],"memories":[]},"3.2.4":{"time":"Around Arrival","lines":[["你也知道。。。都怪你刚才怂恿我，我都懒得喷了。下一局开始了，我先不聊了。","You know how that went... You're the one who talked me into it. Don't even get me started. Next round's starting. I gotta go."],["他把刚才没搭上话怪到我头上，语气有点开玩笑。他要继续玩了，可以顺着玩笑回一句，把这次尴尬收住。","He's jokingly blaming me for how that went. He's heading back to the game. I can play along and let that awkward moment pass."]],"choices":[{"thought":["接住他这句埋怨","Take the ribbing"],"reply":["行，刚才那招算我没看准。你先去玩吧，刚才没说上话那件事就留在刚才。","Okay, I misread that one. Go play. You can leave that whole thing back where it happened."]}],"memories":[]},"3.3.2":{"time":"Around Arrival","lines":[["唉算了，我就是口嗨。下一局开始了，我先不聊了。","Ah, forget it. I was just running my mouth. Next round's starting. I gotta go."],["他欣赏那个女生，但暂时不想特意过去说话。他准备继续玩了，可以简短回应，别把这次聚会变成一定要认识谁的任务。","He likes her but doesn't feel like making a point of going over. He's getting back to the game. A quick reply is enough. Meeting her doesn't need to become a job."]],"choices":[{"thought":["先让他回去玩","Let him get back to the game"],"reply":["好，先去玩你的。你们既然在同一桌，有合适的话头再聊也来得及。","Okay, go play. You're at the same table. If something comes up later, you can talk then."]}],"memories":[]},"3.4.3-A":{"time":"At the Café · Between Rounds","lines":[["我坐下了，等下一局呢。我旁边那男生外套上写着 ARTX，你帮我看一下这个衣服是什么牌子？贵不贵？","I'm sitting down waiting for the next round. The guy next to me has ARTX on his jacket. Can you look up what brand that is? Is it expensive?"],["她在桌游店看到一件外套，想知道牌子和大概价位。现在只知道标志，能说说品牌定位，具体款式和价格还判断不了。","She spotted a jacket at the café and wants the brand and a rough price. I can tell her where the brand sits, but a logo isn't enough to identify the exact jacket or price."]],"choices":[{"thought":["说说大概价位","Give a ballpark price"],"reply":["ARTX 走的是偏贵的设计师品牌路线，外套有些款能卖到几千。不过光看标志认不出他穿的是哪件，具体多少钱还得看款式。","ARTX is on the pricier end of designer labels. Some of their jackets go for a few thousand yuan. I can't tell which one he's wearing from the logo alone, so the exact price depends on the jacket."]}],"memories":[]},"3.4.3-B":{"time":"At the Café · Between Rounds","lines":[["我坐下了，等下一局呢。我旁边那男生外套上写着 ARTX，你帮我看一下这个衣服是什么牌子？贵不贵？","I'm sitting down waiting for the next round. The guy next to me has ARTX on his jacket. Can you look up what brand that is? Is it expensive?"],["她在桌游店看到一件外套，想知道牌子和大概价位。现在只知道标志，能说说品牌定位，具体款式和价格还判断不了。","She spotted a jacket at the café and wants the brand and a rough price. I can tell her where the brand sits, but a logo isn't enough to identify the exact jacket or price."]],"choices":[{"thought":["说说大概价位","Give a ballpark price"],"reply":["ARTX 走的是偏贵的设计师品牌路线，外套有些款能卖到几千。不过光看标志认不出他穿的是哪件，具体多少钱还得看款式。","ARTX is on the pricier end of designer labels. Some of their jackets go for a few thousand yuan. I can't tell which one he's wearing from the logo alone, so the exact price depends on the jacket."]}],"memories":[]},"3.4.4":{"time":"At the Café · Between Rounds","lines":[["啊这么贵啊。刚才等人洗牌的时候聊起来，他说上次逛街就多看了那件两眼，他妈还真记住了，后来买来当生日礼物。哎他妈还挺记得他喜欢啥的。","Whoa, that much? We got talking while someone was shuffling. He said he looked at that jacket a little longer than usual when he was out shopping. His mom actually remembered and bought it for his birthday. Aw, she really pays attention to what he likes."],["她原本好奇衣服的价格，现在更在意他妈妈记得他的喜好。可以回应这件具体的小事，顺着她的发现聊一句。","She started out curious about the price. What stuck with her was that his mom remembered what he liked. I can respond to that little detail she noticed."]],"choices":[{"thought":["接住她留意到的小事","Pick up on what she noticed"],"reply":["他没专门开口要，她还记得他在店里多看了两眼。这种自己都快忘了的事，还有人记得，收到时应该挺惊喜的。","He didn't even ask for it, and she remembered him looking at it in the store. It must've been a nice surprise to have someone remember something he'd probably almost forgotten himself."]}],"memories":[]},"4.1.1":{"time":"After the Meetup","lines":[["我靠，我靠，我靠，刚才打桌游的时候有个女生，我感觉她绝对对我有意思！！！","Holy shit, holy shit, holy shit. There was this girl at board games just now, I swear she's definitely into me!!!"],["他一上来就说对方对他有意思，还没讲怎么回事。先听听两人在桌上说了什么，再判断他看到的是什么信号。","He opened by saying she's into him, but he hasn't told me what happened. Hear what they said at the table before trying to read it as a signal."]],"choices":[{"thought":["先问他发生了什么","Ask what happened"],"reply":["你看起来挺高兴的。刚才玩的时候她做了什么，让你觉得她对你有意思？","You sound pretty excited. What did she do while you were playing that made you think she's into you?"]}],"memories":[]},"4.2.1":{"time":"After the Meetup","lines":[["就是我们不刚玩完桌游吗，然后刚才玩的时候，我说话别人都不理我，就她回应我，而且就她有时候和我对视一下啥的","So we just finished playing, right? Whenever I said something nobody else answered, but she did. And sometimes we'd make eye contact and stuff."],["他最在意的是没人接话时她接了，还跟他有几次对视。这些能说明两人聊得上。可以鼓励他试着认识她，也可以建议他再看看。","What stayed with him was that she answered when nobody else did, and that they made eye contact a few times. They do seem able to talk. I can encourage him to get to know her or give it more time."]],"choices":[{"thought":["顺着好感，试着认识她","Try getting to know her"],"reply":["她愿意接你的话，你跟她聊起来也舒服。你要还想认识她，可以试着问能不能加个微信，先从那局桌游聊起。","She was happy to answer you, and talking to her felt easy. If you'd like to get to know her, you could ask to add her on WeChat and start with the game you just played."]},{"thought":["先看看她平时怎么待人","See how she is with others"],"reply":["她接你的话，可能是跟你聊得来，也可能是她平时就愿意照顾桌上的人。你可以先再相处一会儿，没必要现在就猜她对你有没有意思。","She might have answered because you get along, or because she's the sort of person who makes everyone at the table feel included. You can spend a little more time around her. You don't have to guess how she feels right now."]}],"memories":[]},"4.2.2":{"time":"After the Meetup","lines":[["我靠不敢啊，我在我妹面前是正人君子，我问这感觉跟个变态一样","Shit, I can't. My cousin thinks I'm a total gentleman. If I ask, I'll look like some creep."],["他想认识她，又怕开口时在妹妹面前显得太着急。可以给他一句跟桌游有关的开场，也可以建议他缓一缓，等自己觉得合适再开口。","He wants to get to know her, but he's afraid of looking too eager in front of his cousin. Give him an opening about the game, or give him time to ask when it feels right."]],"choices":[{"thought":["请妹妹先问问她","Ask his cousin to check"],"reply":["你之前提过她可能是你妹妹的同桌。要是你妹妹确实认识她，可以请她先问问，对方愿不愿意加个微信。","You mentioned she might be your cousin's deskmate. If your cousin does know her, you can ask her to check if she'd be up for adding you on WeChat."]},{"thought":["借桌游当面问她","Ask her in person"],"reply":["可以直接问她一句「下次再玩还想叫你，能加个微信吗？」你把想继续一起玩的意思说清楚，她也好当面答。","You can ask her directly: “I'd love to invite you next time we play. Can I add you on WeChat?” It gives her a clear reason and lets her answer in person."]},{"thought":["今天先放一放","Leave it for today"],"reply":["你要是现在开口反而不自在，可以先算了。今天刚认识，以后有机会一起玩，再问也来得及。","If asking now would feel all wrong, leave it for today. You just met. If you play together again, you can always ask then."]}],"memories":[]},"4.2.3":{"time":"After the Meetup","lines":[["好！我就假装帮我舍友要吧，看我妹啥反应，不行就算了","Okay! I'll pretend I'm asking for my roommate and see how my cousin reacts. If it's weird I'll drop it."],["他想假装替舍友问，给自己留个台阶。可以理解他怕难为情，但最好把是谁想加说清楚，省得妹妹真把话传岔。","He's using his roommate as cover in case it gets awkward. I get why he's embarrassed, but he'd better be clear about who wants to add her, or his cousin could pass on the wrong message."]],"choices":[{"thought":["让他把谁想加说清楚","Say who's actually asking"],"reply":["你要是怕开口，可以让你妹先帮你问一声。不过最好说是你自己想加，不然她真告诉对方是你舍友想认识她，后面你反而得解释。","If asking feels awkward, you can have your cousin check with her. I'd tell your cousin it's you, though. If she tells the girl your roommate wants to meet her, you'll just have to explain it later."]}],"memories":[]},"4.2.4":{"time":"After the Meetup","lines":[["哎你说的有道理，而且估计那个女生可能本来就比较开朗吧，我可能就是多想了","Yeah, you've got a point. She's probably just an outgoing person anyway. Maybe I read too much into it."],["他现在更愿意把她的热情理解成性格好，也决定先不问。可以回应他的失落，让他按自己的节奏结束这次聚会。","He's more inclined to put her warmth down to her personality now, and he's decided to leave it. Acknowledge the disappointment and let the meetup end at his pace."]],"choices":[{"thought":["让这次聚会自然收尾","Let the meetup end"],"reply":["有可能。你今天觉得她挺好相处，这个感受是真的。至于下次有没有机会再认识，留到下次一起玩再看吧。","Could be. You did find her easy to get along with, and that feeling was real. If you get another chance to play together, see where it goes then."]}],"memories":[]},"4.2.5":{"time":"After the Meetup","lines":[["唉，行吧，那就当我多想了，不问不问了，就当认识个牌友，回家回家。","Ah, okay. Guess I read too much into it. I'm not asking, I'm not asking. Just someone to play cards with. Time to go home."],["他已经决定不问，准备回家。可以回应他把对方当牌友的决定，不用再替他设想另一种结果。","He's decided not to ask and is getting ready to leave. Let him leave it at having met someone to play cards with."]],"choices":[{"thought":["顺着他回家收尾","Let him call it a day"],"reply":["那今天就先到这儿。有人愿意接你的话，这局玩得也挺有意思。下次碰见，打个招呼就好。","That's a good place to leave it for today. Someone picked up on what you were saying, and it made the game fun. If you run into her again, you can just say hi."]}],"memories":[]},"4.3.1":{"time":"After the Meetup","lines":[["我今天玩桌游遇到个男的，是我同桌的表哥","I met a guy at board games today. He's my deskmate's older cousin."],["她特地说起今天遇到的男生，还交代了两人的关系。可以问问她为什么想到提他，先听她自己的感受。","She made a point of bringing up a guy she met and explained how they're connected. I can ask what made her think of him and hear her out first."]],"choices":[{"thought":["问问她对他的印象","Ask about her first impression"],"reply":["原来是你同桌的表哥。你今天跟他说上话了吗？他给你的第一印象怎么样？","Oh, your deskmate's older cousin. Did you get to talk to him today? What was your first impression?"]}],"memories":[]},"4.3.2":{"time":"After the Meetup","lines":[["哎呀，就是我感觉他性格还挺好的， 但是我没他微信咋办","So, I thought he seemed really nice. But I don't have his WeChat. What do I do?"],["她觉得对方性格好，也想继续认识他。她刚说那是同桌的表哥，可以建议先请同桌问问对方愿不愿意加。","She liked his personality and wants to know him better. She just said he's her deskmate's older cousin. She could have her deskmate check if he wants to add her."]],"choices":[{"thought":["请同桌问问他愿不愿意","Have her deskmate ask"],"reply":["可以找你同桌问一声，请她先问她表哥愿不愿意加。要是他也愿意，你们就有个机会继续聊今天的桌游。","Ask your deskmate if she'd check whether her cousin wants to add you. If he does, the game today gives you something to talk about."]}],"memories":[]},"4.3.3":{"time":"After the Meetup","lines":[["但是我不好意思给她说啊，之前谈的前男友太脑残她劝我我没听，我怕她又要说我了","But I'd feel so awkward asking her. My ex was a complete idiot. She warned me and I didn't listen. What if she gives me a hard time again?"],["她怕同桌把这次认识新人和上次恋爱联系起来。可以给她一句只谈桌游、先问能不能介绍的开场，也可以让她先放下。","She's afraid her deskmate will bring up her last relationship. I can give her an opening about playing again and getting introduced, or let her set it aside."]],"choices":[{"thought":["从下次桌游聊起","Bring up the next game"],"reply":["可以说「今天跟你表哥玩得挺开心，下次组局还想叫他。你能不能先问问他愿不愿意加个微信？」你只是想认识他，先把这件事说清楚就行。","Try: “I had fun playing with your cousin today. I'd like to invite him next time. Could you ask if he'd be up for adding me on WeChat?” You're just asking to get to know him. That's all you need to say."]},{"thought":["暂时先不问","Hold off for now"],"reply":["如果你现在一开口就得防着被说，今天也可以先放一放。刚见了一面，你可以等自己真想联系他时再问。","If you feel like you'd have to brace for a lecture just to ask, you can let it sit today. You've met him once. You can wait until you really feel like reaching out."]}],"memories":[]},"4.3.4":{"time":"After the Meetup","lines":[["可以可以，你太聪明了！我去问","Yeah, that'll work. You're so smart! I'll ask her."],["她愿意去问了。接下来需要让同桌先征求表哥的意见，可以确认这一步，让她不用现在就准备加上后要聊什么。","She's going to ask. Her deskmate needs to check with him first. I can confirm that step so she doesn't feel like she has to plan what to say after they add each other."]],"choices":[{"thought":["先把这一句问出去","Send that first question"],"reply":["嗯，你可以先这么开口。等散场你有机会单独跟她说，再问就行。","Yep, that's a good way to start. Ask her when you get a chance to talk to her alone after the game."]}],"memories":[]},"4.3.5":{"time":"After the Meetup","lines":[["嗯…那算了，不问了，万一她再唠叨我我更烦，就这样吧。","Hmm… forget it. I won't ask. If she starts lecturing me again I'll just get annoyed. Let's leave it."],["她想到同桌可能又说起前任，就决定不问了。可以让她按自己的决定收尾，不用反复说服她。","Thinking about another conversation about her ex has put her off asking. Let her call it without making a case for it again."]],"choices":[{"thought":["让她先把这事放下","Let it go for now"],"reply":["那今天就先不问。觉得他不错，和现在就得加微信，是两件可以分开想的事。","Okay, leave it for today. You can think he seems nice and decide to add him on WeChat some other time."]}],"memories":[]},"4.2.3-direct":{"time":"After the Meetup","lines":[["我直接问了，说下次玩还想叫她。她说可以加。她喊她同桌帮忙推一下，结果喊的是我妹。靠，问之前还觉得巨尴尬。","I asked her myself. Said I'd like to invite her next time we play. She said I could add her. Then she asked her deskmate to send over her contact, and it was my cousin she called over. Damn, I thought it was gonna be so awkward before I asked."],["他当面问了，对方答应加微信，随后由她的同桌推联系方式。可以肯定他已经把最难开口的一句说了，接下来等对方发过来就好。","He asked her himself and she said yes. Now her deskmate will share the contact. He's already said the hardest part. All he has to do now is wait for it to come through."]],"choices":[{"thought":["肯定他已经当面问过","Acknowledge that he asked"],"reply":["你当面问了，她也答应了。等你妹把微信推过来就行。真说出来以后，是不是比你刚才想的简单一点？","You asked her in person and she said yes. Now you just need your cousin to send you her WeChat contact. Was saying it out loud a little easier than you thought?"]}],"memories":[]},"4.3.6-direct":{"time":"After the Meetup","lines":[["我刚才还在想要不要问呢，他直接走过来，说下次玩还想叫我，问能不能加微信。我说可以，就叫我同桌帮我推一下。哎，省我开口了。","I was still wondering if I should ask, and he just came over. Said he'd like to invite me next time they play and asked if he could add me on WeChat. I said sure and asked my deskmate to send over my contact. Whew, saved me having to ask."],["他已经当面问过，她也答应了。现在只等同桌转发联系方式，可以回应她松了口气。","He's already asked in person and she's said yes. Now she's just waiting for her deskmate to share the contact. I can respond to how relieved she is."]],"choices":[{"thought":["接住她松了口气","Share her relief"],"reply":["嗯，你们当面说好了。等你同桌把微信推过去，想聊的时候就能直接聊了。","Yep, you worked it out in person. Once your deskmate sends over your WeChat contact, you two can talk whenever you feel like it."]}],"memories":[]},"4.end-no-contact":{"time":"After the Meetup","lines":[],"choices":[],"memories":[]},"5m.1.1-A":{"time":"WeChat · Day 1","lines":[["我妹说，那女生也找她要过我微信！那不就是我俩想到一块去了？现在加上了，我第一句发啥啊，别显得我准备半天似的。","My cousin says that girl asked her for my WeChat too! So we were both thinking the same thing? We've added each other now. What do I send first? I don't want it to sound like I've been working on it all day."],["两人都问过联系方式，他兴奋，也怕第一句显得太刻意。可以用桌游做开头，有共同话题，对方也容易接。","They both asked for each other's contact. He's excited, but doesn't want to sound scripted. They already have board games in common. That's an easy opening for her to answer."]],"choices":[{"thought":["给一句自然的开场","Give him an easy opening"],"reply":["可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。","You could send, “Hey, I sat next to you at board games. Remember me?” You've already met. You can just bring up that day."]}],"memories":[]},"5m.1.1-B":{"time":"WeChat · Day 1","lines":[["微信到手了，我妹牵的线。上次桌游我还输给她了。我对着输入框抠半天了，第一句咋整？总不能发个你好吧，像上门推销的。","Got her WeChat. My cousin put us in touch. She beat me at board games last time. I've been staring at the text box forever. What's my first line? I can't just say hello. I'll sound like a door-to-door salesman."],["联系方式有了，他卡在怎样开始。可以顺着他对桌游的印象给一句自嘲式开场，省去正式自我介绍的压力。","He has her contact but is stuck on how to begin. He can joke about losing the game and skip the formal introduction."]],"choices":[{"thought":["从输掉的桌游开口","Open with losing the game"],"reply":["你可以发「嗨，那天桌游输给你的那个，还记得吗？」有见过面的事可以聊，一句够用了。","You could send, “Hey, I'm the guy you beat at board games. Remember me?” You've already met, so one line is plenty."]}],"memories":[]},"5m.1.1-C":{"time":"WeChat · Day 1","lines":[["反转了兄弟，我还没想好咋开口呢，她先加我了！是不是我妹跟她说啥了？你说她这啥意思啊？","Plot twist, dude. I hadn't even figured out how to ask and she added me first! You think my cousin said something to her? What do you think it means?"],["她主动加了好友，他却开始猜妹妹有没有说过什么。能确定的是他们已经加上了，可以建议先打招呼，等她实际回应。","She added him first and now he's guessing what his cousin said. What he knows is that they're connected. He can say hi and see how she really responds."]],"choices":[{"thought":["先打招呼，看看怎么聊","Say hi and see what happens"],"reply":["至少她愿意加你。你可以先发「嗨，上次桌游玩得挺开心的」。她为什么先加，等你们聊几句可能就明白了。","She wanted to add you, at least. You can start with, “Hey, I had fun playing board games the other day.” You might get a better sense of why she added you once you talk."]}],"memories":[]},"5m.1.1-D":{"time":"WeChat · Day 1","lines":[["加上了，我妹给推的。我刚才当面都敢问，怎么打个招呼又卡住了。你说第一句咋发？","We're connected. My cousin sent her contact over. I managed to ask in person, so why am I freezing up just saying hi? What should I send first?"],["他当面问到了联系方式，第一句反倒有点紧张。可以从两人一起玩的桌游开口。","He managed to ask in person, but sending the first message makes him nervous. He can start with the game they played together."]],"choices":[{"thought":["给一句自然的开场","Give him an easy opening"],"reply":["可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。","You could send, “Hey, I sat next to you at board games. Remember me?” You've already met. You can just bring up that day."]}],"memories":[]},"5m.1.2":{"time":"WeChat · Day 1","lines":[["想了想，你给的那句我有点发不出来。我自己写了个：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。咋样，会不会有点傻？","I thought about it and I don't think I can send your line. I wrote one myself: “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” How's that? Too dumb?"],["他改成了自己会说的话，还提了十一点睡觉。开头能让对方想起见面的情景，后半句也留了能接的话题。","He's rewritten it in his own words and mentioned going to bed at eleven. The first part reminds her how they met, and the second gives her something to respond to."]],"choices":[{"thought":["就用他自己写的这句","Use the line he wrote"],"reply":["挺像你会说的话。「还记得我不」好接，十一点必睡也有点好笑。就照这句发吧。","That sounds like you. “Remember me?” is easy to answer, and the eleven o'clock rule is kind of funny. Send it as it is."]}],"memories":[]},"5f.1.1-A":{"time":"WeChat · Day 1","lines":[["我同桌说，她表哥也找她要过我微信。等于我俩互相问了一遍？刚加上，他就发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？","My deskmate says her cousin asked for my WeChat too. So we both asked her? We just added each other and he sent, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Why is he giving me his bedtime right off the bat? How do I answer?"],["她发现对方也主动问过联系方式，对他的开场觉得好笑。可以给一句轻松的回复，既回答还记不记得，也顺着十一点睡觉开个玩笑。","She found out he asked for her contact too. His opening made her laugh. She can answer his question and tease him about going to bed at eleven."]],"choices":[{"thought":["顺着十一点的梗回","Play along with the bedtime joke"],"reply":["回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。","“I remember. It's almost your bedtime, too” sounds natural. It tells him you remember and lets you tease him a little. See where the conversation goes from there."]}],"memories":[]},"5f.1.1-B":{"time":"WeChat · Day 1","lines":[["磨半天终于把他加上了，开场白还没憋出来呢，他先发来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。行吧，省得我想了。咋接？","I finally added him after putting it off forever. I hadn't even come up with an opening when he sent, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Well, that saves me the trouble. What do I say?"],["她先加了好友，又因为对方先开口松了口气。对方已经提供了见面和睡觉两个话题，可以直接接他的句子。","She added him first and is relieved he got the conversation going. He's given her both the game and his bedtime to talk about. She can just pick up where he left off."]],"choices":[{"thought":["接住他先递来的话","Pick up what he started"],"reply":["可以回「记得，你也要到点睡了」。他给了现成的话题，你按平时说话的样子接一句就行。","You could say, “I remember. It's almost your bedtime, too.” He's given you something to talk about. Just say it the way you normally would."]}],"memories":[]},"5f.1.1-C":{"time":"WeChat · Day 1","lines":[["我同桌那个表哥加我了。我刚点通过，他消息就来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人是有多着急，哈哈。回啥好啊？","My deskmate's cousin added me. I hit accept and his message came right in: “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Someone's in a hurry, haha. What should I say?"],["他发消息的速度让她觉得好笑，她也在考虑怎么回应。可以给一句低压力的答复，聊天要不要继续，等她自己感受。","How fast he messaged made her laugh. She's wondering how to answer. Give her an easy reply and leave it to her how much she wants to keep talking."]],"choices":[{"thought":["先回一句，再看怎么聊","Reply and see how it goes"],"reply":["可以回「记得，你也要到点睡了」。顺着他的梗逗一句就行，接下来想聊多少，看你自己舒服不舒服。","You could say, “I remember. It's almost your bedtime, too.” Tease him a little about the bedtime thing. Then keep talking as long as you feel like it."]}],"memories":[]},"5f.1.1-D":{"time":"WeChat · Day 1","lines":[["那个刚才当面问我的男生，加上了。我同桌把我微信推给他了。他刚发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？","The guy who asked me in person just added me. My deskmate sent him my WeChat. He just wrote, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Why is he giving me his bedtime right off the bat? How do I answer?"],["她已经收到他的第一条消息，觉得开场好笑。可以给一句轻松的回复，顺着十一点睡觉开个玩笑。","She's got his first message and thinks it's funny. She can reply lightly and tease him about going to bed at eleven."]],"choices":[{"thought":["顺着十一点的梗回","Play along with the bedtime joke"],"reply":["回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。","“I remember. It's almost your bedtime, too” sounds natural. It tells him you remember and lets you tease him a little. See where the conversation goes from there."]}],"memories":[]},"5m.1.3":{"time":"WeChat · Day 1","lines":[["发了！四十来分钟才回，就一句『记得，你也要到点睡了』。我看了半天，这算是想聊还是在跟我说晚安啊？","Sent it! Took her like forty minutes to reply, and all she said was “I remember. It's almost your bedtime, too.” I've been looking at it forever. Is she trying to chat or saying good night?"],["他在用等待的时间猜对方态度。原话既回应了自我介绍，也顺着他提到了睡觉。可以自然道晚安，也可以用桌游接一句。","He's reading her attitude into how long she took to answer. She answered his question and picked up on his bedtime joke. He can say good night or keep talking about board games."]],"choices":[{"thought":["先道晚安","Say good night"],"reply":["她至少接住了你十一点睡觉的梗，四十分钟说明不了更多。你可以回「还没到点呢，我先去洗漱了，晚安」。第一晚聊到这儿也挺好。","She got your joke about going to bed at eleven. Forty minutes doesn't tell you much else. You can say, “Not bedtime yet. I'm gonna get ready for bed, though. Good night.” That's a fine place to end the first night."]},{"thought":["接着聊桌游","Keep talking about board games"],"reply":["要是还想聊，就回「还早呢。桌游我输你的那局还没扳回来，什么时候再战？」有个她能接的话题，聊到哪算哪。","If you want to keep talking, try, “Still early. I haven't made up for losing to you at board games. When's the rematch?” It gives her something to answer. See where it goes."]}],"memories":[]},"5m.1.4":{"time":"WeChat · Day 2","lines":[["昨晚听你的，道了晚安就真睡了，还赶在十一点前，破天荒。今早她又找我聊了两句。也没啥事，就是我还想跟她多说会儿，老想点开那个框。","I took your advice last night. Said good night and actually went to bed. Before eleven, even. There's a first. She messaged me again this morning. It was nothing big. I just wanted to talk more and keep opening the chat."],["道晚安之后，女生仍主动联系。他惦记的是没聊够，可以肯定这个感受，同时用今早的情况帮他放下对昨晚收尾的顾虑。","She reached out after he said good night. He wishes they'd talked longer. I can acknowledge that and point to this morning so he doesn't have to worry about how he left things last night."]],"choices":[{"thought":["昨晚收得早，今天还能聊","They can still talk today"],"reply":["昨晚那句晚安没把话聊死，今早她还来找你了。想再多聊两句很正常，有事想跟她说的时候再发就行。","Saying good night didn't end the conversation for good. She came back this morning. Of course you want to talk a little more. Send something the next time you've got something to say."]}],"memories":[]},"5m.1.5":{"time":"WeChat · Day 2","lines":[["昨晚顺着翻盘那个梗还真聊起来了，聊到十一点多。十一点必睡，当天就倒了，笑死。她后来跟我说晚安。结果今天到现在一条没有……我昨晚是不是聊太多了？","The rematch joke actually got us talking last night, past eleven. Asleep by eleven, no exceptions, and I blew it on day one lol. She said good night later. Now it's been all day and nothing… Did I talk too much last night?"],["昨晚聊得投入，今天暂时安静，他把两件事联系起来了。先指出昨晚有正常收尾，今天的沉默还不足以判断她的态度。","The conversation went well last night and today has been quiet. He's connecting the two. They said good night normally. Today's silence doesn't tell him how she feels."]],"choices":[{"thought":["先让他别盯着回复","Take his eyes off the chat"],"reply":["你们昨晚聊得起来，最后也正常道了晚安。今天还没消息，先别拿它给昨晚判分。做点自己的事，晚些再看。","You got talking last night and said good night like normal. She hasn't messaged yet today. You don't have to use that to grade last night. Do something of your own for now and check later."]}],"memories":[]},"5f.1.2":{"time":"WeChat · Day 2","lines":[["昨晚我先回了句『记得，你也要到点睡了』，本来就随口一逗。这两天聊下来比我想的舒服，有话就接，我没回他也没催。今天他发了几条，我忙着还没仔细回。晚上有空了，我去找他唠两句。","Last night I just said “I remember. It's almost your bedtime, too” to tease him. Talking these last couple of days has been easier than I expected. We pick up when there's something to say, and he doesn't chase me if I don't answer. He sent a few things today and I've been too busy to really reply. I'll go chat a little tonight when I have time."],["她觉得这几次聊天没有催促，也有了主动继续聊的意愿。可以肯定她想联系就去联系，按她现在有空的节奏开始。","She hasn't felt rushed in these conversations and feels like reaching out herself. She can start when she has time, at a pace that feels good to her."]],"choices":[{"thought":["顺着她主动联系的念头","Encourage her to reach out"],"reply":["你现在有空，也有话想跟他说，就去聊两句吧。前面的消息挑一个你真想接的回，剩下的不用补作业。","If you've got a minute now and feel like talking to him, go ahead. Pick whichever earlier message you actually want to answer. The rest isn't homework."]}],"memories":[]},"5m.1.6":{"time":"WeChat · Day 2","lines":[["刚聊完！她晚上主动来找我了，一聊就一个多钟头。其实也没啥大事，东一句西一句的，还挺舒服。我白天还在那儿瞎想，现在感觉也不用老算她多久回了。","Just finished talking! She messaged me first tonight and we talked for over an hour. Nothing big, just this and that. It felt pretty easy. I was overthinking it all day. Now I feel like I don't have to keep timing her replies."],["他收到女生的主动联系，注意力从回复间隔回到了聊天本身。可以回应这次体验，让他把舒服的来往当作参考。","She reached out first. He's paying attention to the chat instead of the gaps between replies. I can respond to that and help him use the way it felt as a reference."]],"choices":[{"thought":["肯定这次轻松的来往","Acknowledge how easy it felt"],"reply":["你开始在意的是这一个钟头聊得舒不舒服了。能东一句西一句聊这么久，听着挺自在。下次有想说的话，再接着聊就行。","Now you're thinking about how that hour felt. An hour of talking about whatever comes up sounds pretty easy. Next time you've got something to say, you can just pick up from there."]}],"memories":[]},"5f.1.3":{"time":"WeChat · Day 3","lines":[["他回消息也太勤快了……我下班一看攒了一堆。不是不想理他，就是累，连回啥都懒得想。对了，他头像是只小熊，看着挺憨。哎，今晚我就想回个什么，让他知道我看见了。","He replies so much… I got off work and there was a whole pile of messages. I do want to talk to him, I'm just tired. I can't even be bothered thinking of what to say. Oh, his profile pic is a bear. Looks kind of goofy. Anyway, tonight I just want to send something so he knows I saw them."],["她看见了消息，也想让对方知道，但下班后没有精力长聊。可以建议直接说明今天很累，或用一个表示累了的表情先回应。","She wants him to know she saw the messages, but doesn't have the energy for a long conversation after work. She could tell him she's tired or send a reaction that says it for her."]],"choices":[{"thought":["直接说今天累了","Say she's tired today"],"reply":["可以回「下班瘫了，今天回不动了」。他知道你在休息，你也不用边累边想怎么把每条都回得有意思。","Try, “I got home from work and I'm wiped. Don't have it in me to reply tonight.” Then he knows you're resting, and you don't have to make every answer interesting when you're exhausted."]},{"thought":["发个表情先接一句","Send a reaction for now"],"reply":["懒得打字就丢个摊倒的表情，让他知道你看见了。想好好聊的话，等有精神的时候再聊。","If typing sounds like too much, send a sticker of someone flopping over so he knows you saw it. You can talk properly when you have the energy."]}],"memories":[]},"5f.1.4":{"time":"WeChat · Day 3","lines":[["我真照你说的说累了。结果他秒回一大段，什么『好好休息』『别太拼』『记得吃晚饭』……排比句都出来了。我本来就回不动，看见那一大段更不知道说啥，就回了个嗯。我是不是有点不知好歹？","I did what you said and told him I was tired. He sent me a whole paragraph instantly. “Get some rest,” “don't push yourself,” “remember to eat dinner”… He was practically writing poetry. I already had no energy to reply, and after all that I had even less idea what to say. I just went “mm.” Am I being ungrateful?"],["她直说累了，对方给了很多关心，她反而一时不知道怎么接。可以肯定她已经回应过，接不动时先休息，也不必现在评价这份关心。","She told him she was tired and got a lot of care back. She didn't know how to answer it all. She's answered him already. She can rest without having to decide how she feels about it now."]],"choices":[{"thought":["让她先歇一会儿","Let her rest"],"reply":["你已经跟他说今天很累了，回个「嗯」也够了。他想关心你，你现在接不动，两件事都说得通。先歇会儿，明天有精神再聊。","You already told him you were tired. An “mm” is enough. He wanted to look after you, and you didn't have it in you to keep talking. Both make sense. Get some rest and talk tomorrow if you're up for it."]}],"memories":[]},"5f.1.5":{"time":"WeChat · Day 3","lines":[["丢了个摊倒的表情过去，他正经回我『你早点休息』，还带了个他自己的表情包，土得掉渣。就是……有点可爱。算了，我洗漱去了。","I sent him a sticker of someone flopping over and he seriously wrote “Get some rest,” with his own sticker. It was so corny. It was also… kinda cute. Whatever, I'm getting ready for bed."],["她用一个表情回应了消息，对方也顺着聊了两句。她觉得那份认真有点可爱，现在想收尾，可以轻松接一句。","She sent a sticker and he answered in his own way. She found his earnestness kind of cute. She's wrapping up, so something light is enough."]],"choices":[{"thought":["顺着这个小插曲收尾","End on that little moment"],"reply":["土得可爱也是一种可爱。今天回到这儿就挺好，去洗漱吧。","Corny cute is still cute. That's a good place to leave it tonight. Go get ready for bed."]}],"memories":[]},"5m.2.1":{"time":"WeChat · Day 9","lines":[["又聊了一个礼拜。她回得慢但都会回，我好像也习惯了。今天她在家加班，还给我发了张照片，配一个『困』。她的猫踩着键盘抢镜，叫煤球，特别敬业。你说她这算不算有点把我当自己人了？","We've been talking for another week. She takes a while to reply, but she always does. I think I'm used to it now. She was working late at home today and sent me a pic with “sleepy.” Her cat was stepping all over the keyboard, stealing the shot. His name's Coalball. Very dedicated. You think this means she sees me as one of her people now?"],["她主动分享加班和猫的照片。他把稳定的来往理解成亲近，可以肯定这个具体变化，再建议顺着她发来的内容回应。","She sent him a casual photo of herself working late and her cat. He reads their steady contact as closeness. I can point to the specific change and suggest answering what she sent."]],"choices":[{"thought":["顺着照片聊两句","Say something about the photo"],"reply":["她愿意把这种随手拍的日常发给你，至少跟你聊天是自在的。可以回一句「煤球今天也加班啊」，再让她忙完早点歇。先聊这张照片就挺好。","She's comfortable enough to send you a random photo from her day. You could say, “Coalball putting in overtime too?” and tell her to get some rest when she's done. The photo's enough to talk about for now."]}],"memories":[{"label":"都会回","name":"Always replies","quote":["她回得慢但都会回","She takes a while to reply, but she always does"]}]},"5m.2.2":{"time":"WeChat · Day 10","lines":[["我现在一天能给她发八百条『在干嘛』。她有时候隔俩小时才回，我就又点开那个框看，明明啥都没响。客观说，我是不是有点上头？","At this point I send her “what are you up to” eight hundred times a day. Sometimes she takes two hours to reply and I keep opening the chat when I know my phone hasn't gone off. Objectively, am I getting a little carried away?"],["他开始留意自己的消息频率，也发现等待让他不安。可以试着少发重复问候，或保留自然分享，同时给对方留出回话的时间。","He's noticed how often he's messaging and how anxious he gets waiting. He can cut back on repeated check-ins, or keep sending things naturally and leave her time to answer."]],"choices":[{"thought":["试试少发重复问候","Ease up on the check-ins"],"reply":["有点，但你已经发现自己在等什么了。今天试试少发几次「在干嘛」，真有事想分享再发，看看空下来的时候你是什么感觉。","A little. You've noticed what you're waiting for, though. Try sending “what are you up to” fewer times today. If you've got something you really want to share, send that, and see how you feel in between."]},{"thought":["有话就聊，给她时间回","Share things, give her time"],"reply":["想跟她说话很正常。碰到好玩的就发一条，她忙的时候先去做你的事，等她有空再接着聊。","It's normal to want to talk to her. Send something when you come across something fun. When she's busy, go do your own thing and pick up again when she's free."]}],"memories":[]},"5m.2.3":{"time":"WeChat · Day 10","lines":[["今天试着少发了，话打了删删了打，最后就发了句晚安。她回得跟平时一样，也没问我咋这么安静……我感觉我在演一个淡定的人。","I tried sending less today. Kept typing and deleting and all I sent in the end was good night. She replied like usual. Didn't even ask why I was so quiet… I feel like I'm doing an impression of someone who's chill."],["他减少了发消息的次数，对方的回复没有明显变化。他仍然不舒服，可以帮他区分想聊的心情和刻意压住自己的做法。","He's sent fewer messages and her replies haven't changed much. He's still uneasy. I can help him separate wanting to talk from making himself hold it in."]],"choices":[{"thought":["让他留点自己舒服的节奏","Find a pace he can live with"],"reply":["少发一天也会难受，毕竟你原本就想找她说话。真有事想分享，可以照常发，没必要把自己练成一个从来不主动的人。","Even one day of sending less can feel rough when what you really want is to talk to her. If you've got something to share, go ahead. You don't have to train yourself to never start a conversation."]}],"memories":[]},"5m.2.4":{"time":"WeChat · Day 10","lines":[["今天还是想找她就找了，发了好几回。她有时候一个『哈哈哈』隔俩小时才来。我有一阵真像在对着屏幕自己跟自己聊天，笑死。","Today I still messaged her whenever I felt like it. A bunch of times. Sometimes it takes two hours to get a “hahaha.” For a while I really felt like I was just talking to myself through a screen lol."],["他继续主动联系，回复的节奏还是不同。现在已经有了一段日常往来，可以建议约一次见面，让他看看两人当面相处的感觉。","He kept reaching out and their reply speeds still differ. They've been talking for a while now. Meeting in person would give him a chance to see what being together feels like."]],"choices":[{"thought":["把话题转向见面","Bring up meeting in person"],"reply":["隔着屏幕，有时候只能等她有空。你们已经聊了一阵了，可以问问她哪天愿意出来吃个饭，当面相处一会儿，可能比来回猜回复轻松。","Over text, sometimes all you can do is wait until she's free. You've been talking for a while. You could ask if she'd like to grab dinner sometime. Being together might feel easier than guessing at replies."]}],"memories":[]},"5m.2.5":{"time":"WeChat · Day 11","lines":[["今天还是这样，不找吧心里老惦记，找吧又怕她嫌烦。线上聊得再欢，她一忙我就在这儿干等着。咋整啊？","Same today. If I don't message her, I keep thinking about it. If I do, I worry I'm annoying her. However much fun we're having online, the minute she gets busy I'm just sitting here waiting. What do I do?"],["控制发消息的频率没有解决他的顾虑。他想要一次能专心相处的机会，可以把见面作为具体建议，让对方按自己的时间答复。","Sending fewer messages hasn't settled his worries. He wants time together where they can both be present. Suggest meeting and let her tell him when she's free."]],"choices":[{"thought":["试着约一次见面","Try asking her out"],"reply":["可以试试约她吃个饭。你们聊了这么久，有机会当面说话，你也能看看自己跟她待一块是什么感觉。先问她哪天方便就好。","You could ask her to get dinner. You've been talking for a while. In person, you can see how it feels to spend time together. Just ask when she's free."]}],"memories":[]},"5f.2.1":{"time":"WeChat · Day 11","lines":[["这一周多一直断断续续聊着。他今天突然夸我开朗，说『跟你聊天不累』。那是，我不在办公室他们都没那么热闹，周末也老有人叫我出去。他坐那儿话倒不多，手机上还天天找我。反正听他夸我还挺开心的，嘿嘿。","We've been chatting on and off for over a week. Today he suddenly said I'm outgoing and that “Talking to you never feels like work.” Well, yeah. The office is way quieter without me and people are always asking me out on weekends. He's quiet when he's sitting there in person, then on his phone he's messaging me every day. Anyway, it felt really good to hear him say it, heh."],["她喜欢被他说聊天不累，也享受自己能让大家聊起来。可以回应这份开心，也可以借机问问，累的时候她更愿意怎么和人相处。","She liked hearing that talking to her feels easy and enjoys getting people talking. I can share in that or ask how she likes to be around people when she's worn out."]],"choices":[{"thought":["顺着她的开心聊","Share her delight"],"reply":["你确实喜欢跟人聊天，也能让场子热起来。他说跟你聊天不累，你听了开心也正常，有些夸奖好听就是因为对方说到了你喜欢自己的地方。","You really do like talking to people, and you get a room talking. It makes sense that hearing him say it's easy with you felt good. Some compliments land because someone notices something you already like about yourself."]},{"thought":["问问她累时愿意找谁","Ask who she turns to when tired"],"reply":["跟谁都能聊是你的长处。我还想问一个小问题，你累了、平时那股劲儿没了的时候，有没有谁是你还愿意单独找的？没想到也没关系。","Being able to talk to anyone is a strength. I've got one little question: when you're tired and don't have your usual energy, is there anybody you'd still want to talk to one-on-one? It's okay if no one comes to mind."]}],"memories":[]},"5f.2.2":{"time":"WeChat · Day 11","lines":[["晚上跟闺蜜吃饭，不知道怎么又说起他了。我说有个闷葫芦天天找我聊天，她们立马开始起哄。我还说就是普通朋友啊，结果回家路上自己一直笑。烦死了。","I was having dinner with my best friends and somehow brought him up again. I said there was this quiet guy who messages me every day, and they immediately started teasing me. I kept saying we're just friends, then smiled all the way home. So annoying."],["她嘴上坚持普通朋友，回家路上却还在笑。她来分享的是被说中心事的有趣，可以顺着玩笑回应，不替她确定两人的关系。","She insists they're just friends, but she was still smiling on the way home. She's sharing how funny it was to get called out. I can play along without deciding what they are for her."]],"choices":[{"thought":["顺着她嘴硬的玩笑","Play along"],"reply":["你把人叫闷葫芦，还专门带去饭桌上讲，难怪她们起哄。先让你们当普通朋友吧，今天笑这一路也挺好。","You called him the quiet guy and still made a point of bringing him up at dinner. No wonder they teased you. We'll call you two just friends for now. A smile all the way home is pretty nice."]}],"memories":[]},"5f.2.3":{"time":"WeChat · Day 11","lines":[["睡前又想了下你问的那个。还真想不出来。我累了就点个外卖，自己刷会儿手机，也不想找谁。明明平时跟谁都能聊，真想说点啥了好像又差一口气……说不上来，今晚有点怪怪的。","I thought about your question again before bed. I really can't think of anyone. When I'm tired I order delivery, scroll on my phone for a bit, and don't feel like talking to anybody. I can talk to anyone normally, but when I actually want to say something it feels like something's missing… I can't explain it. Tonight feels kind of weird."],["她认真想了白天的问题，发现平时热闹和疲惫时想找谁是两回事。她还说不清这份失落，可以先回应她的发现，不急着建议她改变交友方式。","She thought about the question and realized being sociable isn't the same as having someone to turn to when she's tired. She can't quite name what's bothering her. Let her stay with what she noticed."]],"choices":[{"thought":["先陪她把这点说清楚","Help her name the feeling"],"reply":["平时跟大家聊得来，和累的时候想自己待着，都很正常。你今天只是发现了自己有时会想跟谁更近一点。先把这句话留着，不用今晚就想出那个人是谁。","Getting on with everyone and wanting time alone when you're tired both make sense. Today you noticed that sometimes you want to feel a little closer to someone. You can sit with that for now. You don't have to know who it is tonight."]}],"memories":[]},"5f.2.4":{"time":"WeChat · Day 12","lines":[["他今天问我家是哪儿的、家里都有谁，我顺手聊别的去了。他也没接着问。这点我还挺喜欢的，换个人一通问我早烦了。","He asked where my family was from today and who was in it. I just changed the subject, and he didn't keep asking. I liked that about him. If someone else started firing off questions I'd be annoyed already."],["她觉得被尊重，因为把话题转开后对方没有追问。可以肯定具体的分寸感，不需要由这一次聊天判断两人整体相处得怎样。","She felt respected when he didn't press after she changed the subject. I can acknowledge what he did without drawing conclusions about the whole relationship from one chat."]],"choices":[{"thought":["回应她喜欢的分寸感","Acknowledge what she liked"],"reply":["他看你没接那个话题，也就跟着聊别的了。你喜欢这种自在挺正常，家里的事什么时候想说，由你决定。","He saw you didn't pick up that topic and followed you onto the next one. It makes sense that felt easy. You get to decide when you want to talk about your family."]}],"memories":[]},"5m.3.1":{"time":"WeChat · Day 12, Evening","lines":[["行，听人劝吃饱饭。我想约她周六出来吃个饭。上次桌游我还输给她了。直接问周六有空吗，会不会显得有点猴急？","Okay, okay, I'll take the advice. I want to ask her to dinner Saturday. She beat me at board games last time. If I just ask if she's free Saturday, will I look like I'm rushing it?"],["他已经决定约饭，想把邀请说得自然。可以用两人都知道的桌游输赢作由头，给出具体时间，让她有余地答复。","He's decided to ask her to dinner and wants it to feel natural. He can use the game they both remember, name a day, and leave her room to answer."]],"choices":[{"thought":["用桌游的事开口约饭","Ask her out through the game"],"reply":["可以发「周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭」。约什么、哪天约都清楚，她也可以按自己的安排回你。","Try, “Are you free Saturday night? I still haven't gotten you back for beating me at board games. Let me take you to dinner.” She knows what you're asking and when, and can answer based on her own plans."]}],"memories":[]},"5f.3.1":{"time":"WeChat · Day 12, Evening","lines":[["他问我『周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭』。我答应了，还挺会找台阶的。我同桌就是他表妹，兜了一圈还真约上了。就是明天项目有个节点，搞不好得加班。要真累成那样我也不想临时鸽他。还有，见面我要注意啥吗？","He asked, “Are you free Saturday night? I still haven't gotten you back for beating me at board games. Let me take you to dinner.” I said yes. Smooth excuse, actually. My deskmate is his cousin. All that going around and now we're really meeting up. Only thing is we've got a project deadline tomorrow and I might have to work late. If I'm that wiped out, I don't want to cancel on him last minute. Also, anything I should keep in mind when I see him?"],["她已经答应见面，也想到工作可能影响安排。可以给一个轻松的见面建议，再提醒如果时间有变，早点告诉对方。","She's already agreed to meet him and realizes work could affect the plan. Keep the advice about meeting simple, and remind her to let him know early if the timing changes."]],"choices":[{"thought":["让她按平时相处，有变提前说","Keep it natural and flag changes early"],"reply":["见面就聊你们平时会聊的事，桌游都打过了，不用专门准备话题。要是明天忙完发现周六实在不行，提前告诉他，再提个你能去的时间。","Talk about whatever you usually talk about. You've already played board games together. No need to prepare topics. If work makes Saturday impossible, tell him in advance and suggest a time you can do."]}],"memories":[{"label":"同桌是表妹","name":"Deskmate is his cousin","quote":["我同桌就是他表妹","My deskmate is his cousin"]}]},"5m.3.2":{"time":"Friday · Change of Plans","lines":[["她说周六来不了了，项目临时有个节点，问改周日行不行。还发了个不好意思的表情。我知道她说了周日，但我还是有点不得劲。会不会其实不想来啊？","She can't come Saturday. Something came up on her project and she asked if Sunday works. She sent a little sorry sticker, too. I know she said Sunday, but it still feels off. What if she just doesn't want to come?"],["原来的约定改了，他有些失落。她给出了具体的替代日期，这能回应他担心约会取消的问题，仍无法从一句话确定她的心情。","The change disappointed him. She offered a specific day instead. That helps with his fear it's off entirely, but a message can't tell him how she feels."]],"choices":[{"thought":["先把周日约下来","Settle on Sunday"],"reply":["你本来在等周六，失落也正常。她主动提了周日，目前你们还有见面的安排。可以回「行，周日，你忙你的」，先把这次改期接下来。","You were looking forward to Saturday. It makes sense you're disappointed. She suggested Sunday herself, so you're still set to meet. You can answer, “Okay, Sunday. Do what you need to do,” and take it from there."]}],"memories":[]},"5f.3.2":{"time":"Friday · Change of Plans","lines":[["乌鸦嘴，项目真炸了。周六去不了，我跟他说改周日行不行。他就回了句『行，周日，你忙你的』。我看了好几遍，怎么有点像不高兴？","I totally jinxed it. The project blew up. Saturday's out, so I asked if Sunday would work. All he wrote was “Okay, Sunday. Do what you need to do.” I've read it over and over. Doesn't he sound kind of upset?"],["他同意改到周日，回复短，她担心改期让他失望。情绪还无法确认，可以建议她补一句自己仍期待见面，让对方知道这次变动是工作所致。","He agreed to Sunday in a short reply. She's worried the change disappointed him. I can't tell how he's feeling. She could add that she's still looking forward to it, so he knows it was about work."]],"choices":[{"thought":["补一句她还想见面","Say she's still looking forward to it"],"reply":["他答应周日了，单看这句话还看不出有多介意。你要是也期待见面，可以补一句「周日见啊，我还是挺想去的」。事情变了，把你在意的部分说清楚就好。","He agreed to Sunday. That one line doesn't tell you how put out he is. If you're looking forward to it, say, “See you Sunday. I still really want to go.” The plans changed. You can tell him the part that matters to you."]}],"memories":[]},"5m.3.3":{"time":"Sunday Night · After the Date","lines":[["见完了！吃饭散步聊了三个多小时，临走还拍了张合照。她问我下次想吃啥，说她想吃烤肉，下回带我吃。吃饭时她回了好几条工作消息，我坐那儿有点不知道干啥。还有个事，我跟她说，有次她半天没回，我半夜还刷她朋友圈，看她睡了没。她笑了下，说『你想得可真多』。我这话是不是说多了？","Just got back! We ate and walked and talked for over three hours. Took a photo together before we left. She asked what I wanted to eat next time. She said she was craving barbecue and would take me next time. She answered a few work messages over dinner and I just sat there not knowing what to do. One other thing: I told her about the time she didn't reply for half a day and I was up at midnight scrolling through her Moments to see if she'd gone to bed. She laughed a little and said, “You really do overthink things.” Did I say too much?"],["他既高兴她主动提下次，又担心自己那句坦白让她不舒服。她回了工作消息，也有继续见面的表示。可以分别回应这两件事，先不替她解释那声笑。","He's happy she brought up a next time and worried his admission made her uncomfortable. She answered work messages and also suggested meeting again. I can address each without deciding what her laugh meant."]],"choices":[{"thought":["回应见面的好感和他的顾虑","Address the date and his worry"],"reply":["她主动提了下次吃烤肉，这个信号比你回想她笑得像不像介意更具体。回工作消息那几分钟，你坐着会尴尬也正常。至于那句「你想得可真多」，目前听不出她有多介意，下次相处时留意她怎么回应就好。","She brought up getting barbecue next time. That's more concrete than trying to remember how much her laugh sounded like it bothered her. Feeling awkward while she answered work messages makes sense. As for “You really do overthink things,” it's hard to tell how much it bothered her. See how she responds next time you're together."]}],"memories":[{"label":"想吃烤肉","name":"Craving barbecue","quote":["说她想吃烤肉","she was craving barbecue"]}]},"5f.3.3":{"time":"Sunday Night · After the Date","lines":[["吃完了！本来还怕见了尴尬，结果吃饭散步聊了三个多小时，临走还拍了张合照。饭吃到一半我还回了好几条工作消息，回完他也能接上。散步的时候他跟我说，有次我半天没回，他半夜还在刷我朋友圈，看我睡了没。我愣了一下，笑着说『你想得可真多』。不过我后来还在想，是不是家里给了特别多爱，才这么会关心人？吃啥逛啥他都听我的，也挺省心。","We just got done! I thought it might be awkward, but we ate and walked and talked for over three hours. Took a photo together before leaving. I answered a few work messages halfway through dinner, and he picked right back up when I was done. On the walk he told me about the time I didn't reply for half a day and he was up at midnight scrolling through my Moments to see if I'd gone to bed. I paused, then laughed and said, “You really do overthink things.” But later I wondered, did he grow up with a lot of love at home to be this good at looking after people? He went along with whatever I wanted to eat and wherever I wanted to go. It was pretty easy."],["她觉得见面舒服，也把他的关注往关心上想。她听到半夜刷朋友圈时确实愣了一下。可以同时回应这两种感受，家庭情况要等他自己说。","She enjoyed their time and took his attention as caring. She did pause when she heard about him checking her Moments at midnight. I can acknowledge both feelings and leave his family for him to talk about."]],"choices":[{"thought":["让她保留开心和那一下意外","Make room for both feelings"],"reply":["你们今天聊得来，临走还拍了照，难怪你心里挺开心的。听到他半夜还在刷你朋友圈，你也确实愣了一下。开心和有点意外可以同时有。至于他家里怎么样，等他自己讲，比你现在猜得准。","You got on well and took a photo together before leaving. Of course you're happy. Hearing he'd been checking your Moments at midnight did catch you off guard. You can feel happy and a little surprised at once. As for his family, you'll know more when he tells you himself."]}],"memories":[{"label":"半夜刷朋友圈","name":"Midnight on Moments","quote":["他半夜还在刷我朋友圈，看我睡了没","he was up at midnight scrolling through my Moments to see if I'd gone to bed"]},{"label":"家里有爱","name":"Lots of love at home","quote":["是不是家里给了特别多爱，才这么会关心人","did he grow up with a lot of love at home to be this good at looking after people"]}]},"5m.3.4":{"time":"Sunday Night · After the Date","lines":[["睡前最后问一句。就这两周，我还有戏吧？我上次这么上心，还是给我表妹辅导作业的时候。","One last thing before bed. After these two weeks, I've got a shot, right? Last time I put this much effort into anything was helping my cousin with her homework."],["他想知道这两周的来往有没有继续发展的可能。今天她和他聊了三个多小时，还主动提了下次吃烤肉。可以用今天的事回应他的担心。","He wants to know if these two weeks could lead somewhere. They talked for three hours today and she brought up going out for barbecue. I can answer with what did happen."]],"choices":[{"thought":["用已经发生的事给他判断","Go by what happened"],"reply":["今天聊了三个多小时，她还提了下次一起吃烤肉，至少她愿意继续跟你见面。至于你们会不会谈恋爱，得等真的聊到这一步才知道。","You talked for over three hours and she brought up getting barbecue together next time. At the very least, she wants to see you again. You'll find out if you're going to date when the two of you actually talk about it."]}],"memories":[]},"5f.3.4":{"time":"Sunday Night · After the Date","lines":[["躺下了又想起来，他啥都听我的，这点其实我有点介意。但跟他待着是真不用费脑子。前几天家里的事我没接着聊，他也就没问了。可能……我就是想跟一个相处起来不费劲的人待着吧。","I lay down and thought of this again. He leaves everything up to me, and it actually bothers me a little. But being with him takes no effort. The other day I didn't get into the family thing, and he didn't ask again. Maybe… I just want to be with someone who's easy to be around."],["她喜欢不用费力维持气氛，也还没确定自己是否喜欢一直由她拿主意。可以把这两个感受分开回应，后面相处时再看她最在意哪一点。","She likes that she doesn't have to keep the conversation going herself. She's less sure she likes making every decision. I can address those separately and let her see which matters more over time."]],"choices":[{"thought":["分开说舒服和总要拿主意","Separate ease from deciding everything"],"reply":["你喜欢的是跟他待着不用撑场面，这点挺具体。至于去哪儿、吃什么老要你定，你要是哪次嫌累了，也可以跟他说让他挑一次。","You like that you don't have to work to keep things going around him. That's something specific. If you're tired of always picking where to go or what to eat, you can ask him to pick next time."]}],"memories":[]},"5m.4.1":{"time":"Two Days After the Date","lines":[["我想跟她表白。稿子打了删删了打，现在是『我挺喜欢你的，想跟你正经处对象，你考虑考虑』。读着怎么这么怪，你帮我改改。","I want to tell her I like her. I've typed and deleted it a bunch of times. Right now it's “I really like you and I'd like us to be in a serious relationship. Think it over.” Why does that sound so weird? Can you fix it?"],["他希望表达喜欢，又担心措辞生硬。「考虑考虑」听着像催人回一个决定。可以直接问是否交往，也可以先说感受，请她说说自己的想法。","He wants to say he likes her but the wording feels stiff. “Think it over” sounds like he's asking her to come back with a decision. He can ask her directly or say how he feels and ask what she thinks."]],"choices":[{"thought":["直接问她要不要在一起","Ask if she wants to go out"],"reply":["可以说「跟你待一块儿的时候我挺开心的。我喜欢你，想跟你谈恋爱。你愿意吗？」意思已经很清楚，问完就留点时间给她。","Try, “I'm really happy when I'm with you. I like you, and I want us to go out. Would you like that?” That's clear. Once you've asked, give her some time."]},{"thought":["先说喜欢，听听她怎么想","Say how he feels and ask her"],"reply":["可以先说「跟你待一块的时候特别舒服，我可能有点喜欢你，你觉得呢？」先让她知道你的感受，她可以按自己的方式回答。","You could start, “I feel really at ease around you. I think I might have a thing for you. What do you think?” She'll know how you feel and can answer however she wants."]}],"memories":[]},"5m.4.2":{"time":"Two Days After the Date","lines":[["发了！就用你改的那句。发完我就想把手机扔了。她一会儿在输入，一会儿又没了，我盯得心脏一抽一抽的。你说这是在想怎么回，还是想拒绝我啊？","Sent it! The line you fixed. As soon as I sent it I wanted to throw my phone away. She'll be typing and then it goes away, then it's back. My heart keeps jumping watching it. Is she figuring out what to say, or how to turn me down?"],["他已经发出了直接问要不要在一起的话，现在把输入状态当成了答案的线索。能知道的只有她还没回，建议他离开屏幕一会儿，等实际回复。","He asked directly whether she'd go out with him. Now he's trying to read an answer into the typing indicator. All he knows is she hasn't answered. Suggest he step away until the reply comes."]],"choices":[{"thought":["先停下对输入状态的猜测","Stop reading into the typing dots"],"reply":["「正在输入」看不出她准备答应还是拒绝。你已经把想说的发过去了，先去洗把脸，让她有时间把自己的话写完。","“Typing” can't tell you whether she's going to say yes or no. You sent what you wanted to say. Go wash your face and give her time to finish writing."]}],"memories":[]},"5m.4.3":{"time":"Two Days After the Date","lines":[["你改的那句发了。我特别想撤回，又怕撤回更显得我有事。她要回一句『你说啥呢哈哈』，我下半辈子咋做人啊？","I sent the line you fixed. I really want to unsend it, but then I'll look even weirder. If she says “what are you talking about lol,” how do I show my face for the rest of my life?"],["他提前想象对方用玩笑带过，正在犹豫要不要撤回。可以说明他已经把感受说清楚，等对方实际回应后再决定怎么接。","He's imagining her laughing it off and thinking about unsending it. He's already said what he feels. He can decide how to respond after she actually answers."]],"choices":[{"thought":["先等她真的回复","Wait for her actual reply"],"reply":["你这句表达了喜欢，也给她留了说自己想法的空间。先别撤回，也不用替她写一条最尴尬的回复。等真的回了，再想怎么接。","You told her you like her and left room for her to say how she feels. Leave it there for now. You don't have to write the most awkward reply for her. When she really answers, decide what to say then."]}],"memories":[]},"5f.4.1":{"time":"Two Days After the Date","lines":[["他跟我表白了。说喜欢我，问我怎么想。我盯屏幕得有十分钟了。说不心动是假的，但我一想到真要谈了就怕，之前一认真就搞砸。你说我这种，能谈好吗？","He told me he likes me. Asked what I think. I've been staring at the screen for ten minutes. I'd be lying if I said I didn't feel something. But actually being in a relationship scares me. Last time I took it seriously I screwed it up. Do you think someone like me can make it work?"],["她对他有好感，也怕认真交往以后把事情搞砸。她需要的是眼下怎么回答，可以建议她把顾虑说清楚，也可以先从一句愿意试试开始。","She likes him and worries she'll mess things up once it's serious. She needs to know what to say right now. She can tell him what worries her or start with saying she wants to try."]],"choices":[{"thought":["把喜欢和顾虑一起说","Say she likes him and is nervous"],"reply":["想试的话，可以把你现在会说的也告诉他：「我也想试试，只是我可能不太会谈恋爱，你多担待」。他能听见你的愿意，也知道你心里还有点没底。","If you want to try, tell him as much as you can say now: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” He'll hear that you're willing and that you're still a little unsure."]},{"thought":["先从愿意试试说起","Start with wanting to try"],"reply":["可以先打一句「我们先试试」。你今天只需要告诉他现在的想法，剩下的话等你想说清楚了再补。","Start with, “Let's give it a try.” Today you only have to tell him how you feel right now. You can say more when you know what you want to say."]}],"memories":[]},"5f.4.2":{"time":"Two Days After the Date","lines":[["我把那句打出来了：『我也想试试，只是我可能不太会谈恋爱，你多担待』。打完又盯着看了半天。越看越觉得这话有点重，像把我自己交出去了。发还是不发，你帮我看看。","I typed it: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” Then I stared at it for ages. The more I read it, the heavier it felt. It's like I'm handing myself over. Should I send it? Can you look?"],["她已经把愿意和顾虑都写出来，犹豫是因为这句话很坦白。可以帮她确认句子表达了现在的想法，把是否发送留给她。","She's written that she wants to try and that she's nervous. She's hesitating because it's honest. I can confirm it says what she feels and leave the decision to her."]],"choices":[{"thought":["确认她想说的都在里面","Check that it says what she means"],"reply":["这句已经把你想试试、又没那么有把握都说出来了。你如果想让他知道的就是这些，可以发。后面的事，等真的遇到了再一起说。","It says you want to try and that you're not entirely sure of yourself. If that's what you want him to know, you can send it. Whatever comes after, you can talk about it when it actually happens."]}],"memories":[]},"5f.4.3":{"time":"Two Days After the Date","lines":[["我按你说的先打了『我们先试试』，又给删了。就觉得少了点啥，好像现在不说，我以后搞砸了又得怪自己。也可能是我想太远了，他就是问我要不要试试。","I typed “Let's give it a try” like you said and deleted it. It feels like something's missing. If I don't say it now and mess things up later, I'll blame myself again. Or maybe I'm getting way ahead of myself. He just asked if I want to try."],["简短的答复让她容易开口，但她仍想说明自己没把握。可以补上这层顾虑，让她按真正想表达的意思回复，不必预先为以后发生的事负责。","The short answer is easier to say, but she still wants him to know she's unsure. She can include that worry without taking responsibility in advance for whatever might happen."]],"choices":[{"thought":["补上她在意的那半句","Include the part she cares about"],"reply":["你想让他知道你也会紧张，可以多说半句：「我也想试试，只是我可能不太会谈恋爱，你多担待」。说到你眼下有把握的地方就够了。","If you want him to know you're nervous too, give him that extra bit: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” It's enough to say what you know right now."]}],"memories":[]},"5m.4.4":{"time":"Two Days After the Date","lines":[["她回了！！我以为凉了，结果她说『我也想试试，只是我可能不太会谈恋爱，你多担待』。我先回了三个感叹号。她这是答应了对吧？那个『只是』后面的是啥意思啊？","She replied!! I thought it was over, but she said “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” I sent back three exclamation points. That's a yes, right? What does the “I just” part mean?"],["对方愿意试着交往，也主动说了自己对恋爱有顾虑。他高兴之余想知道后半句是什么意思。可以先确认答复，再建议以后慢慢了解她具体担心什么。","She's willing to try a relationship and told him she has some worries about it. He's excited and wants to know what the second part means. Confirm the answer and suggest they learn what she's worried about as it comes up."]],"choices":[{"thought":["道喜，也接住她后半句","Congratulate him and address her worry"],"reply":["是，她愿意和你试试，恭喜。后半句是在告诉你，她对怎么谈恋爱也没把握。以后遇到具体的事，你们可以再聊她需要什么、你又是怎么想的。","Yes, she wants to give it a try with you. Congratulations. The second part is her telling you she's not very sure of herself in relationships. As things come up, you can talk about what she needs and how you're feeling too."]}],"memories":[{"label":"不会谈恋爱","name":"Unsure about relationships","quote":["只是我可能不太会谈恋爱","I just might not be very good at relationships"]}]},"5f.4.4":{"time":"Two Days After the Date","lines":[["发了！『我也想试试，只是我可能不太会谈恋爱，你多担待』。我手一直抖，跟考试交卷似的。他秒回了三个感叹号……好家伙。发出去那一下反倒没那么吓人了。","I sent it! “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” My hands were shaking the whole time, like turning in an exam. He instantly sent three exclamation points… wow. It wasn't nearly as scary once I hit send."],["她发出了自己愿意试试的答复，也收到了对方的回应。她比发之前放松了，可以顺着这个开心的小插曲收尾，暂时不用讨论更远的事。","She sent her answer and got a reply. She's more relaxed than she was before sending. I can end on that little happy moment and leave the bigger conversation for later."]],"choices":[{"thought":["顺着她发出去后的轻松","Share her relief after sending"],"reply":["三个感叹号，看来他刚才也没少等。你已经把最难开口的话发出去了，今天可以先开心一会儿。","Three exclamation points. Sounds like he was doing some waiting of his own. You've sent the hardest thing to say. It's okay to just be happy about it for a while."]}],"memories":[]},"6m.CHOICE":{"time":"Day 1 Together","lines":[["昨晚她答应跟我在一起了。我睡前又看了两遍聊天，今天醒来还想看。我想发个朋友圈，用上次一起拍的照片。配什么啊，别太肉麻。","She said yes last night. I read the chat twice more before bed and wanted to read it again when I woke up. I want to post on Moments with the photo we took last time. What should I write? Nothing too cheesy."],["用户刚确认恋爱关系，想公开这份喜悦，又不希望配文太肉麻。可以直接说出关系，也可以从以后一起吃饭入手，让照片表达剩下的意思。","He just got into a relationship and wants people to know he's happy without getting sappy. He can say it directly or mention something small about eating together and let the photo do the rest."]],"choices":[{"thought":["直接说出关系","Say they're together"],"reply":["照片已经有了，配文可以简单直接一点：终于可以光明正大叫她女朋友了。开心的事，不一定非要藏着说。","You've got the photo. Keep the caption simple: “Finally get to call her my girlfriend.” You're happy. It's okay to say it plainly."]},{"thought":["用日常小事含蓄官宣","Announce it with something everyday"],"reply":["可以配这句：以后不用天天一个人吃饭了。话不用说得很满，合照一放，大家就懂了。","Try: “Guess I don't have to eat alone every day anymore.” The photo will tell people the rest."]}],"memories":[]},"6m.M2A":{"time":"Day 1 Together","lines":[["发了。我朋友说，憋这么久，终于让你等到了。我兄弟眼红了哈哈哈。","Posted it. My friend said, “You've been holding it in for ages. Finally got what you were waiting for.” My guy's jealous hahaha."],["他发出动态后得到朋友的起哄，正借玩笑分享恋爱的开心。可以顺着回应，不必替他解释朋友的真实想法。","His friends are giving him a hard time in the comments, and he's sharing how happy he is through the joke. I can play along without deciding what they really think."]],"choices":[{"thought":["顺着他的得意开个玩笑","Play along with his bragging"],"reply":["看出来了，你现在连被起哄都挺高兴。这条朋友圈值了。","Look at you, even happy to get teased. That post was worth it."]}],"memories":[]},"6m.M2B":{"time":"Day 1 Together","lines":[["发了。我朋友评论，以前叫你吃饭，你可不是这么说的。我回他，你要是女的我也可以考虑考虑。他现在在群里骂我。","Posted it. My friend commented, “That's not what you said when I used to ask you to eat with me.” I said, “If you were a girl I'd consider it.” Now he's cussing me out in the group chat."],["朋友的调侃让他继续开起玩笑，语气轻松，想分享发出官宣后的热闹。可以回应这个结果，不把玩笑当成需要处理的矛盾。","His friend's teasing turned into a joke between them. He's sharing the fun after posting. I can answer in the same spirit."]],"choices":[{"thought":["接一句朋友间的玩笑","Join the joke"],"reply":["恋爱公开了，朋友也顺便逗到了。看起来今天的好心情还能撑很久。","You made it official and got to mess with your friend while you were at it. Looks like today's good mood is going to last."]}],"memories":[]},"6m.M3":{"time":"Day 1 Together","lines":[["我刚问她要不要庆祝一下。她问怎么庆祝，我说吃个青提蛋糕吧，想了好久了。她回我，原来重点在这儿。哈哈，也不能这么说。还没定哪天。","I just asked her if we should celebrate. She asked how, so I said, “Let's get a green grape cake. I've been craving one forever.” She wrote back, “Oh, so that's what this is about.” Haha, I wouldn't go that far. We haven't picked a day yet."],["两人已经开始轻松地商量庆祝，暂时没有确定时间。他是在分享刚才的互动，不需要立刻替他们安排一次见面。","They've started talking about celebrating and haven't picked a time. He's just sharing what happened. They can make plans when they're ready."]],"choices":[{"thought":["顺着庆祝的话题聊两句","Stay with the celebration"],"reply":["蛋糕想了很久，跟她一起庆祝是今天才有的新理由。时间你们慢慢商量，先把这份开心留着。","You've wanted that cake for a while, and now you've got a new reason to share it with her. You can pick a day later. Enjoy being excited for now."]}],"memories":[]},"6f.F1":{"time":"Day 1 Together","lines":[["我昨晚答应跟他在一起了。他今天早上就把我俩照片发朋友圈了，也太快了吧。","I said yes last night. He posted our photo on Moments first thing this morning. That was fast."],["用户刚确认恋爱关系，对方已经公开合照，她提到速度快，但还没有说自己是否介意。先问她的感受，不急着把这件事解释为压力或喜悦。","She just agreed to a relationship and he's already posted their photo. She said it was fast, but hasn't said whether that bothers her. Ask how it felt before reading anything into it."]],"choices":[{"thought":["问问她看到时的感觉","Ask how she felt seeing it"],"reply":["刚确认关系，他就想让大家知道了。你看到的时候什么感觉？","You just got together and he already wants people to know. How did you feel when you saw it?"]}],"memories":[]},"6f.CHOICE":{"time":"Day 1 Together","lines":[["有点好笑，也挺开心的。但我是不是也得发一条啊？想到同事都能看见，还要来问，就好尴尬。","I thought it was funny, and it made me happy. But do I have to post too? My coworkers would all see it and come ask me about it. So awkward."],["用户对恋爱公开感到开心，犹豫来自熟人围观时的害羞。可以鼓励她表达喜悦，也可以支持她先私下分享，不把是否发动态等同于是否认真对待关系。","She's happy people know they're together, but shy about people she knows making a fuss. I can encourage her to share or support her in telling someone privately. A post isn't a measure of how serious she is."]],"choices":[{"thought":["鼓励她大胆分享开心","Encourage her to share it"],"reply":["幸福不用等到不害羞才分享。既然开心，就大方晒一次。写一句自己的话就好，不用比谁更会表达。","You don't have to wait until you're past feeling shy to share something that makes you happy. If you want to post it, go for it. One line in your own words is enough."]},{"thought":["支持她先告诉亲近的人","Support telling someone close first"],"reply":["幸福是自己的，不必用朋友圈证明。先告诉你想告诉的人，也是一种分享。不想一下子被很多人围观，就先跟熟悉的人说说。","You can be happy without proving it on Moments. Telling the people you want to tell is sharing too. If you'd rather avoid a crowd, start with someone close to you."]}],"memories":[]},"6f.F3A":{"time":"Day 1 Together","lines":[["我发了，写的好吧，以后一起吃饭。刚发出去我就把手机扣下了。结果我同事直接过来问，谁啊？我还得装得很平静，说就我男朋友啊。","I posted it. I wrote, “Okay, then we'll eat together from now on.” I put my phone facedown the second I posted. Then my coworker came straight over and went, “Who's that?” I had to act all calm and go, “Oh, my boyfriend.”"],["她已经发出动态，也经历了原先害羞的同事询问。她在分享既尴尬又高兴的小插曲，可以顺着回应，不必继续鼓励她做更多公开表达。","She posted and got the question from a coworker that she'd been dreading. It was awkward and made her happy. I can share in that without encouraging her to put anything else out there."]],"choices":[{"thought":["回应她藏不住的开心","Notice how happy she is"],"reply":["朋友圈发出去了，当面介绍也说出口了。看来害羞没有耽误你开心，今天可以不用装得那么平静。","The post is up and you've already said it out loud. Being shy didn't stop you from being happy. You don't have to act quite so calm today."]}],"memories":[]},"6f.F3B":{"time":"Day 1 Together","lines":[["我给闺蜜发了照片。她连着问，什么时候的，谁先说的，见了几次。我打字都赶不上她问。本来想悄悄说一下，结果她给我打电话了。","I sent the photo to my best friend. “Since when? Who said it first? How many times have you seen each other?” I couldn't type fast enough. I thought I'd tell her quietly, then she called me."],["她选择私下分享，闺蜜反而直接打来电话。她是在讲开心的热闹，可以顺着被采访的感觉开个玩笑，不需要把朋友的追问当成矛盾来处理。","She told her friend privately and got a phone call. She's enjoying how much of a fuss her friend is making. I can joke that she's being interviewed."]],"choices":[{"thought":["顺着闺蜜的热情开个玩笑","Play along with the questions"],"reply":["公开会被围观，私聊会被采访。看来她已经准备好听完整个故事了，你可以慢慢跟她分享。","A public post gets an audience. A private message gets an interview. Sounds like she's ready for the whole story. Take your time telling her."]}],"memories":[]},"6f.F4":{"time":"Day 1 Together","lines":[["我刚还跟他说，你动作也太快了。然后问他要照片原图，朋友圈那个压得有点糊。跟他说我还是喜欢拿在手里的照片，手机里存一堆，后面根本想不起来翻。","I just told him, “That was fast.” Then I asked him for the original photo. It got a little blurry on Moments. I told him, “I still like photos I can hold in my hands.” I save a ton on my phone and never remember to look at them later."],["她主动索要合照原图，想以自己喜欢的方式留住照片。已经告诉男友这个偏好，可以回应这份珍惜，不需要再建议一次公开动态。","She asked for the original because she wants to keep it in a way she likes. She's already told him what she prefers. I can acknowledge that the photo matters to her."]],"choices":[{"thought":["回应她想把照片留下来","Respond to her wanting to keep it"],"reply":["原来害羞归害羞，照片还是要好好收着。手机里不容易翻到的，就换一种你喜欢的方式留住。","Shy or not, that photo deserves to be kept. If it's hard to find again on your phone, keep it in a way you'll enjoy."]}],"memories":[]},"6f.F5":{"time":"Day 1 Together","lines":[["他早上还问要不要庆祝一下。我问怎么庆祝，他说吃个青提蛋糕吧，想了好久了。怎么最后还是吃。","He asked if we should celebrate this morning. I asked how and he said, “Let's get a green grape cake. I've been craving one forever.” Somehow it's always about food in the end."],["她接着分享男友提出的庆祝方式，语气带着亲近的打趣。可以回应蛋糕这个具体细节，不替他们补出尚未确定的见面安排。","She's sharing his idea for celebrating and teasing him affectionately. I can answer about the cake without assuming they've decided when to meet."]],"choices":[{"thought":["顺着他的蛋糕庆祝聊一句","Go with the cake idea"],"reply":["原来庆祝方式已经有候选了。想了很久的蛋糕，现在又多了一个一起吃的理由。","Looks like you've got one idea for celebrating. Now you've got another reason to share the cake he's been wanting."]}],"memories":[{"label":"想吃青提蛋糕","name":"Green grape cake","quote":["吃个青提蛋糕吧，想了好久了","Let's get a green grape cake. I've been craving one forever"]}]},"6m.M4":{"time":"Day 1 Together","lines":[["她刚跟我说，你动作也太快了。然后又问我要照片原图。我还以为她嫌我发得急，结果她说，我还是喜欢拿在手里的照片。原图已经发她了。","She just said, “That was fast.” Then she asked for the original photo. I thought she was bothered I posted so soon, but she said, “I still like photos I can hold in my hands.” I sent her the original."],["他先担心女友嫌公开太快，随后收到索要原图的回应，感到高兴。她亲口说喜欢纸质照片，可以据此回应，不必猜测她对公开关系的全部态度。","He worried that she thought he'd posted too fast, then was happy she asked for the original. She told him she likes prints. I can use that without guessing how she feels about going public in general."]],"choices":[{"thought":["回应她主动要照片这件事","Respond to her asking for the photo"],"reply":["她觉得你发得快，也想把照片好好留着，这两件事可以同时成立。原图都找你要了，看来今天不只是你一个人在高兴。","She thought you posted fast, and she wants to keep the photo. Both can be true. She asked you for the original, so it looks like you're not the only one who's happy today."]}],"memories":[{"label":"纸质合照","name":"Printed photo","quote":["我还是喜欢拿在手里的照片","I still like photos I can hold in my hands"]}]},"6m.M5":{"time":"That Night","lines":[["我刚看了下日历，现在就问她一个月纪念日那天有没有空，会不会太早啊，才第一天。","I just checked my calendar. Is it too early to ask if she's free for our one-month anniversary? It's only day one."],["他已经开始期待一个月纪念日，犹豫的是现在提出会不会太早。可以建议先确认共同的时间，把具体安排留到之后，避免一次就把所有事情定下来。","He's looking forward to their one-month anniversary and wonders if it's too soon to bring it up. They can set aside the time and leave the details for later."]],"choices":[{"thought":["先约时间，安排慢慢商量","Save the date and plan later"],"reply":["可以先问问她，不用今天就把整天安排好。就说：一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。","You can ask without planning the whole day now. Try: “Save our one-month anniversary for me, okay? Let's spend it together. We can decide what to eat later.”"]}],"memories":[]},"6f.F6":{"time":"That Night","lines":[["他刚说，一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。才第一天，他怎么已经翻到下个月了。","He just said, “Save our one-month anniversary for me, okay? Let's spend it together. We can decide what to eat later.” It's day one. How is he already looking at next month?"],["她转述男友的纪念日邀约，觉得他期待得很早，但没有表达拒绝。可以问她是否也想一起过，帮助她表达自己的意愿，不替她作决定。","He's looking forward to the anniversary already. She hasn't said she doesn't want to. I can help her answer based on whether she wants to spend it together."]],"choices":[{"thought":["让她按自己的期待回应","Let her answer how she feels"],"reply":["他已经开始期待那一天了。你也想一起过的话，就先答应，具体安排可以之后再慢慢商量。","He's already looking forward to that day. If you'd like to spend it together too, say yes. You can talk about what to do later."]}],"memories":[]},"6f.F7":{"time":"That Night","lines":[["OK，正好那会儿项目也忙完了，放松一下。","OK, my project should be done by then anyway. I could use a chance to relax."],["她已经表示愿意一起过纪念日，也期待忙完项目后能放松一下。可以支持她把时间留出来，顺着这份期待回应，不必再替两人安排具体怎么庆祝。","She's agreed to spend the anniversary with him and is looking forward to relaxing once work settles down. Support that without planning the celebration for them."]],"choices":[{"thought":["支持她留出一起过的时间","Encourage her to save the day"],"reply":["那就把那天先留出来。等忙完这一阵，有件一起期待的事也挺好。","Then set the day aside. It's nice to have something to look forward to together once work settles down."]}],"memories":[]},"6m.MEMCHOICE":{"time":"That Night","lines":[["她回，好啊，那天留给你。我现在就有点想准备东西。但礼物是不是挑得太早了，我还没想好送什么合适。","She said, “Sure, I'll save the day for you.” I kind of want to get something ready now. Is it too early to pick a gift, though? I haven't worked out what to get."],["女友答应一起过纪念日，他想准备一点东西，又怕挑得太早。可以根据已有的小细节给建议，也可以先不急着买，在之后相处中慢慢想。","She agreed to spend their anniversary together. He wants to get her something but worries it's too early. I could use a detail he's kept, or suggest seeing what comes up as they get to know each other."]],"choices":[{"thought":["把合照变成小礼物","Turn the photo into a gift"],"reply":["她说过喜欢拿在手里的照片。可以先洗一张你们的合照，背面写上在一起的日期。不用一下子准备很贵重的礼物，从她喜欢的小东西开始就好。","She said she likes photos she can hold in her hands. You could get a print of the two of you and write the date you got together on the back. It doesn't have to be expensive. Start with a little thing she likes."]},{"thought":["先留时间，慢慢了解喜好","Save the date and learn what she likes"],"reply":["先不用急着买。你们刚在一起，之后聊天、见面，还会慢慢知道她喜欢什么。先把那天留好，礼物可以等有了合适的想法再准备。","You don't have to buy anything yet. You just got together. As you talk and spend more time together, you'll learn more about what she likes. Save the date for now and get something when you have a good idea."]}],"memories":[]},"6m.M7A":{"time":"That Night","lines":[["这个好。我下单了，洗两张，一人一张。等拿到了我自己写日期，字丑也认了。","I like that. I ordered two prints, one for each of us. I'll write the date myself when they get here. Ugly handwriting and all."],["合照已经下单，他还打算亲手写日期，语气很期待。可以回应这份心意，顺着他担心字丑开个小玩笑，不必再建议添别的礼物。","The photos are ordered. He's looking forward to writing the date himself. I can appreciate the gesture and joke about his handwriting without giving him more to do."]],"choices":[{"thought":["肯定他亲手准备的心意","Appreciate the personal touch"],"reply":["你自己写的日期，也会成为照片的一部分。字不用写得多漂亮，先把日子写对就好。","Writing the date yourself makes it part of the photo. It doesn't have to look pretty. Just get the date right."]}],"memories":[]},"6m.M7B":{"time":"That Night","lines":[["也是，今天才第一天。我先把那天记下来，后面想到了再说。突然觉得还挺有盼头的。","True, it's only day one. I'll put the date down and think of something later. All of a sudden it feels like I've got something to look forward to."],["约定已经记下，他接受了暂时不急着买礼物，也开始期待以后的相处。可以顺着这个轻松的心情收尾，不再追加准备任务。","He's saved the date and is okay with waiting to buy a gift. He's looking forward to the time they'll spend together. Let this end on that feeling."]],"choices":[{"thought":["让期待留在这里","Leave him looking forward to it"],"reply":["那就先期待着。接下来还有很多一起吃饭、聊天的机会，合适的主意也许就在里面。","Then enjoy looking forward to it. There'll be plenty of dinners and conversations between now and then. The right idea might come up in one of them."]}],"memories":[]},"6m.END":{"time":"That Night","lines":[],"choices":[],"memories":[]},"6f.F8":{"time":"That Night","lines":[["我把那天记日历上了。写一个月纪念日有点不好意思，又改成了吃饭。","I put it in my calendar. I felt a little embarrassed writing “one-month anniversary,” so I changed it to “dinner.”"],["她把约定记进日历，连给自己看的名称都有点害羞。她是在接着分享今晚的期待，轻松回应即可，不再增加需要她完成的新安排。","She's saved the date and feels shy even about a title only she can see. She's still looking forward to it. A light response is enough."]],"choices":[{"thought":["轻轻回应她的害羞","Gently pick up on her shyness"],"reply":["名字低调一点，期待一点没少。就让日历先替你留着那一天吧。","A low-key name doesn't make you any less excited. Let your calendar save the day for you."]}],"memories":[]},"6f.END":{"time":"That Night","lines":[],"choices":[],"memories":[]},"7m.MONE":{"time":"Day 17 Together · Friday","lines":[["我跟我女朋友在一起两周多了，刚开始天天能聊到睡觉。这礼拜她赶项目，回我基本就是累啊困啊，我又老想找她。\\n她刚发了张照片，买了杯喝的，说最近全靠公司楼下那家青杏续命。照片后面有个同事拿吸管夹薯条，她说大家都叫他筷子。我回了个笑哭，就没下文了。还想聊两句，你说我接点啥？","My girlfriend and I have been together a little over two weeks. At first we talked every day until bedtime. She's been trying to finish a project this week, so her replies are mostly “I'm tired” or “I'm sleepy,” and I keep wanting to message her.\\nShe just sent a photo of a drink. Says the Green Apricot downstairs from the office is the only thing keeping her alive lately. There's a coworker in the background using straws to pick up fries. She says everyone calls him Chopsticks. I sent a cry-laugh emoji and that was it. I want to chat a little more. What should I say?"],["用户想继续和女友聊天，但不知道怎样接话。她刚主动分享了日常照片，可以建议从照片里的饮料聊起，既有现成的话题，也不用另外找话说。","He wants to keep talking to his girlfriend and doesn't know how. She's just shared a photo from her day. The drink gives him something to ask about."]],"choices":[{"thought":["顺着照片接话","Pick up from the photo"],"reply":["可以问问她喝的什么，好不好喝。她主动给你发了照片，至少这会儿愿意跟你分享点日常，不用急着找个特别有意思的话题。","Ask what she's drinking and whether it's good. She sent you a photo herself, so she's happy to share a little of her day right now. You don't have to come up with anything especially interesting."]}],"memories":[{"label":"青杏","name":"Green Apricot","quote":["公司楼下那家青杏","the Green Apricot downstairs from the office"]}]},"7f.FDAY":{"time":"Day 17 Together · Friday","lines":[["我跟男朋友在一起两周多了。这礼拜赶项目，下班连话都不想说。他还天天跟我说今天干嘛了，我不回吧，又老惦记着。\\n今晚部门一起吃饭，我想先跟他说一声，又怕说完就聊起来了，吃个饭还得一直看手机。咋跟他说比较好？","My boyfriend and I have been together a little over two weeks. I've been trying to finish a project this week and I'm so drained after work I don't even want to talk. He tells me about his day every day. If I don't reply, I keep thinking about it.\\nMy department's going out to dinner tonight. I want to tell him before I go, but I'm afraid it'll turn into a whole conversation and I'll be on my phone all through dinner. How should I say it?"],["用户想提前告诉男友聚餐安排，也担心因此又聊起来，吃饭时得不断回消息。可以建议她同时说明回复可能较慢、回家后再聊，让对方知道她不是突然不理人。","She wants to tell him about the dinner and is worried she'll end up replying all the way through it. She can tell him she'll be slow to answer and will talk once she's home."]],"choices":[{"thought":["先把今晚安排说清","Tell him the plan for tonight"],"reply":["可以直接跟他说：“今晚部门聚餐，可能回得慢，回家再聊。”提前说清楚安排和什么时候方便聊，比一边吃饭一边惦记着回消息轻松些。","Try: “Department dinner tonight. I might be slow to reply. Let's talk when I get home.” If you tell him your plans and when you're free, you won't have to keep thinking about replying over dinner."]}],"memories":[]},"7f.FDAYMORE":{"time":"Day 17 Together · Friday","lines":[["行，我就这么发。我也不是不想跟他聊。昨天还有个挺逗的，他提前一站下了车，还跟我说今天地铁真快，走到出口才发现下早了。我回他一个猪头，他说走过去算了，正好把歌听完。\\n上礼拜一起吃饭也挺好的，就是这礼拜真累。好了我走了，别一会儿大家等我。","Okay, I'll send that. It's not that I don't want to talk to him. Yesterday was pretty funny. He got off a stop early and told me the subway was really fast today. Didn't realize till he reached the exit. I sent him a pig face. He said he'd just walk and finish listening to his song.\\nDinner together last week was nice too. I'm just really tired this week. Okay, I'm going. I don't want to keep everyone waiting."],["用户虽然觉得聊天累，还是愿意分享男友的趣事。现在她要出门聚餐，没有新的问题需要处理，可以简短回应，不必继续分析两人的关系。","Messaging feels tiring, but she still wants to share funny things about him. She's headed to dinner now and has no new question. Keep it brief."]],"choices":[{"thought":["轻快地送她出门","See her off"],"reply":["听着是挺想跟你分享的，连下错站都要说一声。那先去吃饭吧，等回家有精神了再慢慢聊。","Sounds like he likes telling you things, even when he gets off at the wrong stop. Go enjoy dinner. You can talk when you're home and have the energy."]}],"memories":[{"label":"提前下车","name":"Got off early","quote":["他提前一站下了车，还跟我说今天地铁真快","He got off a stop early and told me the subway was really fast today"]}]},"7m.MNEWS":{"time":"After the Department Dinner","lines":[["我跟女朋友刚闹了点不愉快。她今晚部门聚餐，吃完回来找我聊天，我问着问着就问岔了，现在她不回我了。你帮我看看，是不是我说得有点过了？","My girlfriend and I just had a bit of a fight. She went out with her department tonight and messaged me when she got back. I asked one thing, then another, and somehow it went wrong. Now she isn't replying. Can you help me figure out if I went too far?"],["他觉得刚才的话可能说重了，想知道怎么补救。目前还不清楚争执经过，需要先听双方说了什么，再判断问题出在哪，不能只凭她不回复就下结论。","He thinks he might've said something harsh and wants to know how to fix it. I need to hear what they both said. Her not replying on its own doesn't tell me what went wrong."]],"choices":[{"thought":["先听刚才说了什么","Hear what was said first"],"reply":["可以，把刚才那几句发来看看。你说了什么，她怎么回的，从哪儿开始不对劲的，我们先捋一下。","Sure. Send me the things you said. What did you say, how did she answer, and where did it start to feel off? Let's go through it."]}],"memories":[]},"7m.MPROJECT":{"time":"After the Department Dinner","lines":[["她说周四方案过了，今天大家一起庆功，还发了张合照给我。我问怎么没听她说，她说昨天忙忘了。\\n然后说小周还张罗着给她点了个蛋糕。我问小周是谁，她说一起做项目的同事。\\n他们都知道，就我现在才知道。这两天她跟我说的全是累，我还以为还没忙完呢。","She said their proposal got approved Thursday and they all went out to celebrate today. She sent me a group photo too. I asked why I hadn't heard about it and she said she was busy yesterday and forgot.\\nThen she said Xiao Zhou had even ordered her a cake. I asked who Xiao Zhou was. She said he's a coworker on the project.\\nThey all knew, and I'm just finding out now. The last two days all she told me was how tired she was. I thought she was still working on it."],["同事参与同一个项目，知道进展很正常。他反复提到自己才知道，可能更在意没被分享这份开心。可以先帮他分清这两件事，再听后面发生了什么。","It's natural her coworkers would know how their project was going. He keeps coming back to finding out late. What may hurt more is that she didn't share the good news with him. I can untangle those two things before hearing the rest."]],"choices":[{"thought":["接住被落下的感觉","Acknowledge feeling left out"],"reply":["一起做项目的同事知道进展，并不奇怪。让你不舒服的，可能是她这两天只跟你说累，庆功这么高兴的事，你反而到现在才听说。","It makes sense that the people working on the project knew. What might sting is that all you heard for two days was how tired she was, and you're only hearing about the celebration now."]}],"memories":[]},"7m.MDEMAND":{"time":"After the Department Dinner","lines":[["对。我就问她，你跟他私下是不是也聊挺多，不然怎么他什么都知道。她说大家一起吃饭，又不是只有我一个女的，他跟我做同一个项目，当然知道。\\n我又说，那给我看看你俩聊什么了。她回，你自己听听你在说什么。我接了句那你说我该怎么想，她就不回了。\\n我现在想解释一下，可再发过去，是不是又像追着她问？","Yeah. I asked her, “Do you two talk a lot in private too? How else does he know everything?” She said, “The whole group went. I wasn't the only woman there. We're on the same project. Of course he knows.”\\nThen I said, “Let me see what you two talked about.” She said, “Listen to what you're saying.” I said, “Well, what am I supposed to think?” Then she stopped replying.\\nI want to explain myself, but if I send another message, will it sound like I'm still going after her?"],["她已解释同事关系，他仍提出查看私聊，对方随后不再回复。现在想补救，应先建议撤回这项要求，承认自己问过了，而不是继续解释为什么怀疑。","She explained how she knows him. He still asked to see their private messages, and then she stopped replying. If he wants to repair things, he can take back that demand and own how far he went before explaining his suspicions."]],"choices":[{"thought":["先收回查看私聊的要求","Take back the demand to see the chat"],"reply":["可以再发，但这次先别解释她为什么让你多想。先承认刚才的要求不合适：“我不该让你给我看聊天，刚才有点急。”发完给她一点时间，不要接着追问。","You can send something, but leave out why she made you suspicious. Start by saying the demand was out of line: “I shouldn't have asked to see your messages. I got a little worked up.” Then give her time. Leave it at that for now."]}],"memories":[]},"7f.FANGER":{"time":"After the Department Dinner","lines":[["我刚不是去部门聚餐了吗，吃完回家跟他说了两句，真的给我气到了。\\n周四方案过了，今天大家一起庆功。我给他发合照，说小周还给我点了个蛋糕。他先问怎么没告诉他，又问小周是谁。","Remember how I went to my department dinner? I got home and went to tell him about it. I'm so pissed off.\\nOur proposal got approved Thursday and we went out to celebrate today. I sent him the group photo and told him Xiao Zhou had ordered me a cake. First he asked why I hadn't told him. Then he asked who Xiao Zhou was."],["她按之前的安排，聚餐后回家和男友聊天，却因为对方的追问生气。目前只听到争执的开头，需要先了解她怎么解释、对方怎么回应，不急着判断谁的问题。","She got home and talked to him as planned, but his questions made her angry. I've only heard the start. I need to hear what she explained and how he answered before deciding what went wrong."]],"choices":[{"thought":["听她把经过说完","Hear the rest of it"],"reply":["你本来是想跟他分享庆功的事，结果聊得不愉快了。后来你怎么解释的，他又说了什么？","You wanted to share the celebration and it turned into an argument. What did you tell him after that? What did he say back?"]}],"memories":[]},"7f.FDEMAND":{"time":"After the Department Dinner","lines":[["我说昨天忙忘了告诉他，小周就是一起做项目的同事。大家一起吃饭，又不是只有我一个女的。\\n他还问你跟他私下是不是也聊挺多，不然怎么他什么都知道。我解释了只是同事，他还要看我和人家的聊天记录。\\n我说你自己听听你在说什么。他又来句，那你说我该怎么想。我真想骂人，他要怎么想还得我教啊？","I said I got busy yesterday and forgot to tell him. Xiao Zhou's just a coworker on the project. The whole group went. I wasn't the only woman there.\\nThen he goes, “Do you two talk a lot in private too? How else does he know everything?” I explained we're just coworkers, and he still wanted to see our chat history.\\nI said, “Listen to what you're saying.” Then he goes, “Well, what am I supposed to think?” I could've sworn at him. Do I have to teach him how to think now?"],["同事关系和聚餐情况已经解释，他仍要求看私聊，还把怎么理解这件事交给她回答。她现在很愤怒，可以先回应被怀疑的不适，建议暂缓争执，而不是继续证明清白。","She explained who he was and who went to dinner. He still wanted to see the chat and made her responsible for how he should interpret it. I can acknowledge how angry she is at being suspected and suggest pausing the argument."]],"choices":[{"thought":["接住被怀疑的火气","Acknowledge how angry she is"],"reply":["你已经解释了，他还是要看聊天，难怪你会觉得说什么都像在被审问。现在正在气头上，可以先停一下，不用继续一条条证明自己和同事没什么。","You explained it and he still wanted to see the chat. No wonder it feels like you're being interrogated whatever you say. You're angry right now. You can pause without having to prove, point by point, that nothing happened with your coworker."]}],"memories":[{"label":"查看私聊","name":"Asked to see the chat","quote":["我解释了只是同事，他还要看我和人家的聊天记录","I explained we're just coworkers, and he still wanted to see our chat history"]}]},"7m.MWAIT":{"time":"Saturday Night","lines":[["昨天按你说的发了，我不该让你给我看聊天，刚才有点急。她没回。今天中午又问吃饭没，也没回。\\n她一整天没回我，连我说不该问她要聊天记录也没回。刚下楼买个东西，我都一直拿着手机，就怕她突然回了我没看见。现在又想发，你说再问一句会不会更烦她啊？","I sent what you suggested yesterday: “I shouldn't have asked to see your messages. I got a little worked up.” No reply. At lunchtime I asked if she'd eaten. No reply either.\\nShe didn't answer me all day, not even when I said I shouldn't have asked to see the chat. I went downstairs to buy something and held my phone the whole time in case she replied and I missed it. Now I want to send something again. Think that'll just annoy her more?"],["已经道歉，也试着恢复日常聊天，仍然没有回应。他现在很难忍住继续发消息，需要先了解他希望从下一条回复里确认什么，再考虑是否适合发送。","He's apologized and tried starting an ordinary conversation. He still hasn't heard back. It's hard for him to stop sending messages. Find out what he's hoping the next reply will tell him."]],"choices":[{"thought":["问清想确认什么","Ask what he wants to know"],"reply":["你已经道过歉，也问过吃饭了，还是一直惦记着手机。现在想再发一句，是还有话没说，还是想从她的回复里确认什么？","You've apologized and asked if she's eaten, and you still can't put your phone down. Do you want to send something because there's more you need to say, or because you want her reply to tell you something?"]}],"memories":[{"label":"一天没回","name":"No reply all day","quote":["她一整天没回我，连我说不该问她要聊天记录也没回","She didn't answer me all day, not even when I said I shouldn't have asked to see the chat"]}]},"7m.MFEAR":{"time":"Saturday Night","lines":[["我就想知道她还想不想理我啊。昨天说小周给她点蛋糕，聊得那么高兴，到我这就一句都没了。\\n我现在真想问问她，到底是没空回，还是光不想回我。","I just want to know if she still wants anything to do with me. Yesterday she was so happy telling me Xiao Zhou ordered her a cake, and now I get nothing.\\nI really want to ask if she's too busy to reply or just doesn't want to reply to me."],["他把不回消息和昨晚的同事联系起来了，但还没有提供其他依据。需要先确认他知道什么，避免顺着焦虑把猜测说成事实，也不要替女友解释沉默。","He's linking her silence to yesterday's coworker, but hasn't said anything else to support it. Find out what he knows without turning his fear into a fact or explaining her silence for her."]],"choices":[{"thought":["把事实和猜测分开","Separate what he knows from what he guesses"],"reply":["你现在想确认的，其实是她还愿不愿意理你。不过，先别从她和同事的互动里猜答案。除了昨天的聚餐，还有什么让你觉得他们不只是同事吗？","What you really want to know is whether she still wants to talk to you. Try not to read the answer into how she was with her coworker. Apart from dinner yesterday, have you seen anything that makes you think they're more than coworkers?"]}],"memories":[]},"7m.MOWN":{"time":"Saturday Night","lines":[["没看到。我后来把合照翻了好几遍，他俩也没挨着坐。可他给她点个蛋糕，她就那么开心，我怎么就没想到呢。\\n我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天。\\n我知道这么问不好听。可我不问，就只能等她哪天想起来了再来找我吗？","No. I went back through the group photo a bunch of times. They weren't even sitting next to each other. But he ordered her a cake and she was that happy. Why didn't I think of that?\\nI didn't even know what they'd talked about, and I asked if they talk a lot in private and told her to show me the chat.\\nI know it sounds bad. But if I don't ask, am I just supposed to wait until she remembers to talk to me someday?"],["他承认没有证据，但仍把追问当成确认关系的唯一办法。可以建议他表达等不到回复的不安，同时明确这与要求查看私聊不同，避免再次发出带猜疑的质问。","He admits he has no evidence, but still sees questioning her as his only way to know where they stand. He can tell her waiting makes him anxious. That's different from asking to see a private chat."]],"choices":[{"thought":["把不安说清楚","Say what's making him anxious"],"reply":["等不到回复让你不安，这件事可以等能好好说话时告诉她。可让她证明没跟别人聊，并不能回答你在她心里有没有位置。今晚先别再发“是不是忙着回别人”这样的质问了。","You can tell her that waiting for a reply makes you anxious once you can talk properly. Asking her to prove she hasn't been talking to someone else can't tell you how much you matter to her. For tonight, leave questions like “Too busy replying to somebody else?” unsent."]}],"memories":[{"label":"要求看私聊","name":"Demanded to see the chat","quote":["我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天","I didn't even know what they'd talked about, and I asked if they talk a lot in private and told her to show me the chat"]}]},"7f.FNOTIFICATION":{"time":"Saturday Night","lines":[["他昨天后来发了句我不该让你给我看聊天，刚才有点急。今天中午又问吃饭没，我都没回。\\n刚才手机亮了一下，我还以为又是他，结果是我同桌。发现不是他，我又去点开他那边看，也没再发。真让我回吧，我又不想回，烦死了。","He wrote last night, “I shouldn't have asked to see your messages. I got a little worked up.” At lunch today he asked if I'd eaten. I didn't answer either one.\\nMy phone lit up just now and I thought it was him again. It was my deskmate. When I saw it wasn't him I checked his chat anyway. Still nothing. If I actually had to reply, I wouldn't want to. It's so annoying."],["她没有回复，却反复查看男友有没有新消息，说明这件事仍让她在意。需要先了解她想等到怎样的回应，不能因为她关注手机，就认定她已经愿意和好。","She hasn't replied, but keeps checking whether he sent anything. She still cares about this. Find out what she wants to hear before assuming she's ready to make up."]],"choices":[{"thought":["问问她还在等什么","Ask what she's waiting for"],"reply":["你不想回他，又忍不住看他有没有再找你。你现在是还想等他说点什么，还是也想找个机会回他，只是不知道怎么开头？","You don't want to reply, but you still check whether he's messaged you. Are you hoping he'll say something else, or do you want a chance to reply but don't know how to start?"]}],"memories":[]},"7f.FPUSH":{"time":"Saturday Night","lines":[["不知道，反正我现在不想回。他昨天都那么问我了，后来说一句有点急，就完了？我再跟他聊吃饭没啥的，搞得好像啥事都没有一样。","I don't know. I just don't want to answer right now. He talked to me like that yesterday, then said he got a little worked up, and that's it? If I go back to chatting about what I ate, it'll be like nothing happened."],["她担心一恢复日常聊天，就等于接受这次道歉，所以不愿回复。可以先回应这个顾虑，再问收到消息时的想法，了解她是需要独处，还是想通过不回应表达不满。","She's worried going back to everyday talk amounts to accepting the apology. I can acknowledge that and ask what she felt when the message came. Is she taking time alone or using silence to show she's upset?"]],"choices":[{"thought":["问她收到消息时怎么想","Ask what went through her mind"],"reply":["你不想一句“有点急”就把这件事翻过去。不过，不回消息能让他知道你生气了，未必能让他知道你在气什么。今天他问你吃饭没的时候，你当时怎么想的？","You don't want “I got a little worked up” to be the end of it. Staying quiet might tell him you're angry, but it might not tell him what upset you. What went through your mind when he asked if you'd eaten?"]}],"memories":[]},"7f.FOWN":{"time":"Saturday Night","lines":[["看见了，就是不想回。我今天手机一直在用，跟同桌聊桌游，跟别人说话，就没理他。\\n我就是故意一天不回他，想让他也难受一下。凭什么每次都是我被问得烦啊，他也等一等吧。","I saw it. I just didn't want to answer. I've been on my phone all day, talking board games with my deskmate, talking to other people. I just ignored him.\\nI deliberately didn't answer him all day. I wanted him to feel bad too. Why am I always the one getting grilled? Let him wait for once."],["她明确说自己想让对方难受，不回应已经不只是为了休息。需要听她接下来想怎么做，把继续冷落和表达不满分开，不替她把这次行为解释成无意的。","She says outright she wanted him to feel bad. This is doing more than giving her time to recover. Find out what she wants to do next and distinguish keeping him waiting from telling him why she's mad."]],"choices":[{"thought":["问她接下来想怎么做","Ask what she wants to do next"],"reply":["你是想让他也尝尝被晾着的滋味。那接下来呢，你还想继续晾着，还是想让他知道，你到底为什么那么生气？","You wanted him to see how it feels to be left hanging. What do you want now? To keep leaving him hanging, or to let him know why you were that angry?"]}],"memories":[{"label":"故意不回","name":"Didn't reply on purpose","quote":["我就是故意一天不回他，想让他也难受一下","I deliberately didn't answer him all day. I wanted him to feel bad too"]}]},"7f.COUSIN":{"time":"Saturday Night","lines":[["今天不想跟他说了。他要是又问小周，我真会骂他。那些话我现在想想都烦。\\n我同桌还问明天去不去桌游，我说先不去了。现在出去玩都能想起他昨天那几句。","I don't want to talk to him today. If he brings up Xiao Zhou again I'll go off on him. Just thinking about what he said makes me angry.\\nMy deskmate asked if I wanted to play board games tomorrow. I said I'd skip it. Even if I went out, I'd just think about what he said yesterday."],["她目前不愿直接和男友谈，继续劝回复可能只会增加抵触。可以建议先找可信的人聊聊，让她把不满说出来，再决定如何联系，而不是让别人替她处理。","She doesn't want to talk to him directly right now. Pushing her to answer could make her resist it more. Suggest someone she trusts to talk it through without asking them to sort it out for her."]],"choices":[{"thought":["找熟悉双方的同桌聊聊","Talk to her deskmate"],"reply":["你同桌也是他表妹，跟你俩都熟。可以先找她聊聊，她也许能帮你理理怎么跟他说。先说明你只是想聊这件事，不是让她替你去传话。","Your deskmate is his cousin, and she knows you both. You could talk it over with her first. She might help you figure out what to say. Let her know you're just there to talk and don't want her carrying messages for you."]},{"thought":["建议先找可信的朋友吐槽","Talk to a friend she trusts"],"reply":["可以先找个信得过的朋友说说，不必憋着，也不必现在就回他。等这口气缓一点，再想你希望他听明白什么，可能比反复盯着聊天框轻松些。","Tell a friend you trust how you're feeling. You can let it out without replying to him right now. When you're less angry, think about what you want him to understand. That might feel easier than checking the chat again and again."]}],"memories":[]},"7f.COUSINSENTNO":{"time":"Saturday Night","lines":[["那我找我闺蜜说说吧。我俩认识好多年了，她跟他又不熟，不用夹在中间。跟她说话我就不用憋着了。","I'll talk to my best friend, then. We've known each other for years, and she barely knows him. She won't get stuck in the middle. I can say what I really think with her."],["她选择找熟悉自己的闺蜜，对方与男友不熟，可以让她少一些顾虑。现在已有明确打算，回复只需确认，不继续追问或要求她立刻想好给男友的答复。","Her best friend knows her well and isn't close to him. That makes it easier to speak freely. She's made a plan. No need to ask more of her or have her work out a reply right now."]],"choices":[{"thought":["让她找闺蜜说说","Let her talk to her best friend"],"reply":["那就先找她聊。你现在不必一边吐槽，一边急着想该怎么回男友，先把自己憋着的那部分说出来。","Then talk to her first. You don't have to figure out what to say to your boyfriend while you're venting. Start with whatever you've been holding in."]}],"memories":[]},"7f.COUSINSENTYES":{"time":"Saturday Night","lines":[["那我找她说两句。我得先跟她说好啊，别替我去找他，我还没想好怎么回。","I'll talk to her, then. I have to say this first: don't go talk to him for me. I haven't figured out what to say back."],["她愿意找同桌聊，也明确不希望被代为传话。可以肯定她先说明这一点，避免朋友的介入变成新的误会，是否联系男友仍由她自己决定。","She's willing to talk to her deskmate and doesn't want her to pass anything on. Back her up in saying that first so it doesn't turn into another misunderstanding."]],"choices":[{"thought":["先说清别替她传话","Make clear she doesn't want a go-between"],"reply":["对，先把这点说清楚。你现在是想有人听你讲，不是请她去劝他；等你想好怎么说，再由你自己联系。","Yes, say that first. You want someone to hear you out. If you decide to talk to him, you can do it yourself when you know what you want to say."]}],"memories":[]},"7f.COUSINBACKNO":{"time":"Sunday Morning","lines":[["我昨天跟闺蜜打了挺久电话。她先陪我骂了几句，说换谁被这么问都得烦。后来突然问我，那你还想不想见他？\\n我说想啊。她就说，想见就去见，该说他的地方还得说，别自己跟这儿憋一晚上。聊完确实没那么气了。\\n今天醒来又想找他。可我先去找，他是不是就觉得昨天这事过去了？","I was on the phone with my best friend for ages yesterday. She let me rant, said anyone would be mad after being questioned like that. Then out of nowhere she asked, “Do you still want to see him?”\\nI said yes. She went, “Then go see him. You can still tell him what he did wrong. Don't sit there stewing all night.” I was less mad after that.\\nI woke up wanting to talk to him. But if I reach out first, will he think I'm over what happened?"],["和闺蜜聊过后，她明确自己仍想见男友，却担心主动联系就失去表达不满的机会。可以说明联系和继续谈这件事并不矛盾，帮助她从谁先开口转向怎么开口。","Talking to her friend made it clear she still wants to see him. She's worried reaching out first means giving up the chance to say what bothered her. She can still talk about it even if she starts the conversation."]],"choices":[{"thought":["把想见和介意都留住","Keep both things on the table"],"reply":["你可以先联系他，也可以告诉他，那样被问的事还没过去。主动开口是因为你想见他，不等于你认同他那样问你。","You can reach out first and tell him you're still bothered by the way he questioned you. Reaching out means you want to see him. It doesn't mean you're okay with what he asked."]}],"memories":[]},"7f.COUSINBACKYES":{"time":"Sunday Morning","lines":[["昨天最后跟我同桌聊了挺久。她听我骂完，说她表哥平时没这么爱问东问西，估计真是慌了。我说慌了也不能让我给他看聊天啊。她说是，但你要还想跟他好，就得让他知道你到底气什么。\\n聊完气消了一点，今天醒来还挺想见他的。可我现在先找他，他是不是就觉得昨天这事过去了？","I ended up talking to my deskmate for a while yesterday. She listened to me rant, then said her cousin doesn't usually ask twenty questions. She figured he panicked. I said that didn't give him the right to ask to see my messages. She said, “True. But if you still want to be with him, you have to tell him what you're angry about.”\\nI was less angry after that, and this morning I woke up wanting to see him. But if I reach out first, will he think I'm over what happened?"],["同桌提供了对男友的看法，但那只是她的判断，不能据此替他的要求开脱。她现在想联系，又不愿把不满略过，可以建议把见面的意愿和仍介意的事分开表达。","Her deskmate had a read on his behavior, but it's still her guess and doesn't excuse what he asked. The girl wants to reach out without letting the issue slide. She can express the two things separately."]],"choices":[{"thought":["把想见和介意都留住","Keep both things on the table"],"reply":["他是不是因为慌了才那么问，可以以后再谈。你现在想见他，也仍然介意被要求看聊天，这两件事不冲突，先联系不代表你要装作没发生过。","You can talk later about whether he asked because he panicked. You want to see him, and you're still bothered he wanted to see your messages. Both can be true. Reaching out first doesn't mean you have to pretend it didn't happen."]}],"memories":[]},"7f.FCHOICE":{"time":"Sunday Morning","lines":[["我刚想问他今天出不出来，打完又没发。昨天一天没理他。消息我都看见了，就是故意没回，当时也想让他等一回。现在突然问他出来吗，感觉怪怪的。\\n但我又想见他。那天那些事我想见了再说，微信上说着说着肯定又扯回小周了。你帮我想想该咋说。","I typed out a message asking if he could come out today, then didn't send it. I ignored him all day yesterday. I saw the messages. I didn't answer on purpose. I wanted him to have to wait for once. Now it feels weird to suddenly ask him to come out.\\nBut I want to see him. I'd rather talk about what happened in person. On WeChat it'll end up back on Xiao Zhou again. Can you help me work out what to say?"],["她想约男友见面，但担心突然联系显得若无其事。可以建议她先说明昨天故意没回，再提出邀约，让对方知道她愿意谈这件事；或者先表达想见面的意愿，把之前的矛盾留到当面再说。","She wants to see him but worries getting in touch out of the blue will sound like nothing happened. She can say she didn't answer on purpose before inviting him, or start with wanting to see him and leave the rest for in person."]],"choices":[{"thought":["先承认故意没回","Admit she didn't reply on purpose"],"reply":["可以先说出昨天故意没回的事，再约见面：“昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。”承认自己这部分，不等于他要求看聊天就没问题了。","You can say you didn't answer on purpose, then invite him: “I saw all your messages yesterday. I didn't answer on purpose. I wanted you to have to wait for once. Want to go for a walk today? I want to see you.” Owning your part doesn't make his demand to see your messages okay."]},{"thought":["先从想见他开口","Start with wanting to see him"],"reply":["可以先发：“今天出来走走吗？我想见你。”先开口不等于昨天的事就算了，只是先给你们一个当面说话的机会。","You can send, “Want to go for a walk today? I want to see you.” Reaching out first doesn't settle what happened yesterday. It gives you both a chance to talk in person."]}],"memories":[]},"7f.FSENTEASY":{"time":"Sunday Morning","lines":[["发了。现在换我在这儿看他回没回了。昨天他是不是也这样啊，算了，不想了。","Sent it. Now I'm the one checking whether he's replied. Was this what it felt like for him yesterday? Ah, forget it."],["发出邀约后，她也开始等待，并短暂想到男友昨天的处境。可以回应眼前的等待，不把这句感想扩大成已经反省，也不替她判断男友现在的情绪。","She's waiting now and briefly wondered what yesterday was like for him. I can address the wait without assuming she's already reflected on it or guessing how he's feeling."]],"choices":[{"thought":["陪她等实际回复","Wait for his actual answer"],"reply":["刚发出去，先给他一点时间，不用马上盯着有没有回。你想见他的意思已经说了，其他话可以等他回应后再决定怎么讲。","You just sent it. Give him a minute before checking. You've told him you want to see him. You can decide how to say the rest once he answers."]}],"memories":[]},"7f.FSENTOPEN":{"time":"Sunday Morning","lines":[["发了。我现在看着那句我当时就想让你也等一回，又觉得自己也挺凶的。他要是半天不回，我估计也得慌。","Sent it. Now I'm looking at “I wanted you to have to wait for once” and it sounds kind of mean. If he doesn't reply for ages, I'll probably start freaking out too."],["她发出邀约并承认故意冷落，开始想到自己等不到回复也会不安。可以建议先给对方反应的时间，不立刻追加解释，也不预测他一定会怎样回应。","She admitted keeping him waiting and is now imagining how she'd feel in his place. Give him time to react before she adds any explanation."]],"choices":[{"thought":["给他一点接话时间","Give him time to answer"],"reply":["先给他一点时间。这条消息里有邀约，也有昨天的事，不用急着再补一大段，看看他怎么回。","Give him a little time. You put the invitation and what happened yesterday in the same message. You don't need to add a whole paragraph now. See what he says."]}],"memories":[]},"7m.SUN":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7m.OPENCHOICE":{"time":"Sunday Morning","lines":[["她终于找我了。发的是：昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。\\n我看了两遍。刚看见她找我还挺高兴的，可她真就看着我等了一天啊，我现在又不知道咋回了。","She finally texted me. She wrote: “I saw all your messages yesterday. I didn't answer on purpose. I wanted you to have to wait for once. Want to go for a walk today? I want to see you.”\\nI read it twice. I was happy she texted, and then I realized she really watched me wait all day. Now I don't know what to say again."],["她主动邀约，也承认了故意不回。他既想见她，又对这一天的等待感到受伤。可以建议先说出难受，也可以先答应见面，具体说多少应留给他选择。","She reached out and admitted not replying on purpose. He wants to see her and feels hurt about waiting all day. He can say it hurt or just agree to meet for now."]],"choices":[{"thought":["说出等了一天的难受","Say waiting all day hurt"],"reply":["可以先答应见面，也把你的难受说出来：“好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。”说自己的感受，不必再猜她跟别人怎么样。","You can say yes to meeting and tell her how it felt: “Okay. See you this afternoon. I kept waiting for you to reply yesterday. You saw my messages and ignored me all day, and that really hurt.” You can talk about how you feel without guessing what's going on with anyone else."]},{"thought":["先接住见面的邀请","Accept the invitation first"],"reply":["可以先回：“好，下午见。”你现在想先见到她，就先把时间地点约好；昨天没说完的话，见面还有机会说。","You can just write, “Okay. See you this afternoon.” If you want to see her first, set a time and place. There's room to talk about yesterday in person."]}],"memories":[]},"7m.PLAINCHOICE":{"time":"Sunday Morning","lines":[["她终于找我了，就一句：今天出来走走吗？我想见你。\\n我差点直接回好。可昨天到底算怎么回事啊，现在问她，会不会又不理我了？","She finally texted. Just: “Want to go for a walk today? I want to see you.”\\nI almost went straight for yes. But what was yesterday about? If I ask now, is she going to stop replying again?"],["这次邀约没有提到昨天的沉默。他想答应，又怕追问让她再次不理人。可以把等待中的难受说出来，也可以先确认见面，不能替她补上没有说过的解释。","Her invitation doesn't mention the silence yesterday. He wants to see her but worries she'll stop replying if he asks about it. He can say the wait hurt or confirm the plans first. I don't know why she didn't reply."]],"choices":[{"thought":["把昨天的难受带出来","Say how yesterday felt"],"reply":["可以答应见面，也把你昨天等消息的感受说出来：“好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？”","You can accept and say how waiting felt: “Okay. See you this afternoon. I waited all day for a reply yesterday and it really hurt. Next time you want some time to yourself, could you tell me first?”"]},{"thought":["先把见面约下来","Make plans to meet first"],"reply":["可以先回：“好，下午见。”先确认你们都愿意见面，再商量地点。答应邀约并不等于你昨天没有难受，那部分可以等见了再考虑怎么说。","You can say, “Okay. See you this afternoon.” Make sure you both want to meet, then pick a place. Saying yes doesn't make yesterday stop hurting. You can think about what to say once you see her."]}],"memories":[]},"7f.REPLYEASY":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7f.REPLYOPEN":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7f.RECEIVEDBOTH":{"time":"Sunday Morning","lines":[["他回了：好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。\\n我知道我就是想让他难受。可他真这么说，我又有点不知道接什么了，咋回啊？","He said: “Okay. See you this afternoon. I kept waiting for you to reply yesterday. You saw my messages and ignored me all day, and that really hurt.”\\nI know I wanted him to feel bad. Now that he's actually said it hurt, I don't know what to say back. What do I reply?"],["他明确说出等待的难受，她听到后有些不自在。可以建议承认故意让他等不合适，而不是又把话转回他的质问；她对那件事的不满仍可留到见面谈。","He told her waiting hurt him. Hearing that made her uncomfortable. She can own that she kept him waiting on purpose and leave how she feels about his questions for when they meet."]],"choices":[{"thought":["接住他真的受了伤","Acknowledge that it really hurt"],"reply":["可以先回应他这句难受：“我知道。我昨天很烦，但不该故意让你等。下午见。”先承认故意不回这件事，不用在同一句里把所有委屈都解释完。","Start with the part about it hurting: “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.” You can admit you shouldn't have kept him waiting without trying to explain every part of the fight in that same message."]}],"memories":[]},"7f.RECEIVEDHER":{"time":"Sunday Morning","lines":[["他回得还挺快，就一句好，下午见。是不是也没那么气了？","He replied pretty fast. Just “Okay. See you this afternoon.” You think he's not that mad anymore?"],["他只答应了见面，没有说明对昨天的感受。她把回复快理解成不生气，可以先确认邀约已被接受，再提醒不能仅凭这句话判断他的情绪。","He agreed to meet but didn't say how he felt about yesterday. She's taking the quick reply as a sign. They do have plans, but it's too early to read his feelings into that one line."]],"choices":[{"thought":["接住邀约 不替他猜情绪","Accept the yes without guessing"],"reply":["能确定的是，他愿意见你了。至于还有没有生气，单看一句“好，下午见”还说不准，见面时也可以听听他怎么说。","You know he's willing to see you. As for whether he's still mad, “Okay. See you this afternoon” doesn't tell you that. You can hear him out once you meet."]}],"memories":[]},"7f.RECEIVEDHIM":{"time":"Sunday Morning","lines":[["他回：好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？\\n我就是气他前天那么问，可我确实没跟他说过我想自己待会儿。这句该怎么回？","He wrote: “Okay. See you this afternoon. I waited all day for a reply yesterday and it really hurt. Next time you want some time to yourself, could you tell me first?”\\nI was just angry about how he questioned me the day before yesterday. But I really didn't tell him I wanted time alone. How do I answer this?"],["他告诉她等不到回复很难受，也提出了具体请求。她可以交代昨天在生气，留到见面再谈经过。","He said it hurt to wait and made a specific request. She can say she was angry and leave the details for in person."]],"choices":[{"thought":["回应他等不到消息","Answer the part about waiting"],"reply":["可以回：“我昨天就是气你那样问，没跟你说一声。下午见了说吧。”先回应他等不到消息这件事，前天的争执见面再说。","You can reply: “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.” Acknowledge he was waiting for a reply, then talk about the argument in person."]}],"memories":[]},"7f.RECEIVEDQUIET":{"time":"Sunday Morning","lines":[["他回好，下午见。我昨晚还怕他说不想见呢，看来是我想多了。","He said, “Okay. See you this afternoon.” Last night I was afraid he wouldn't want to see me. Guess I was overthinking it."],["他答应见面，她因此放松了一点。目前只知道邀约得到回应，可以顺势建议确认地点，不推断两人已不再介意之前的事。","He said yes and she feels a little better. All I know is he accepted. They can pick where to meet without assuming neither of them cares about what happened."]],"choices":[{"thought":["先把见面安排好","Make plans to meet"],"reply":["至少见面这件事，他是愿意的。先把时间地点定好，其他还想说的话，到时再看怎么开口。","He does want to meet. Pick a time and place. You can decide how to bring up anything else once you're there."]}],"memories":[]},"7f.ACKBOTH":{"time":"Sunday Morning","lines":[["回了，就按那句说的，我知道。我昨天很烦，但不该故意让你等。下午见。","I replied with what we came up with: “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.”"],["她已照建议回应了他的难受，暂时没有新的消息或问题。可以简短确认，让她等对方回复，不再追加一轮解释，打断已经开始恢复的交流。","She's acknowledged how waiting felt for him. There isn't a new message or question. Keep it short and let him answer, so she doesn't feel she has to send another explanation."]],"choices":[{"thought":["等他接这句话","Wait for his answer"],"reply":["嗯，先等他回。这句已经回应了他的难受，不用急着再补什么。","Yeah, let him answer. You've already acknowledged that it hurt. You don't need to rush to add anything."]}],"memories":[]},"7f.ACKHIM":{"time":"Sunday Morning","lines":[["发了，我昨天就是气你那样问，没跟你说一声。下午见了说吧。","Sent it: “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.”"],["她已经解释了没回复的原因，也表达了愿意当面谈。现在需要留出让对方回应的时间，简短确认即可，不反复要求她补充更完整的解释。","She's said why she didn't answer and that she wants to talk in person. Give him room to respond without asking her to fill in every detail now."]],"choices":[{"thought":["等他接这句话","Wait for his answer"],"reply":["好，先等他回。你想继续见面聊的意思已经说清楚了。","Okay, let him answer. You've made it clear you want to talk when you see him."]}],"memories":[]},"7m.SENTBOTH":{"time":"Sunday Morning","lines":[["发了。她回，我知道。我昨天很烦，但不该故意让你等。下午见。\\n我又问了在哪碰头，等她定地方。","Sent it. She said, “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.”\\nI asked where we should meet. Waiting for her to pick."],["她承认不该故意让他等，说明这次表达得到了回应。接下来可以先落实见面，不必继续在消息里要求更多解释，免得又陷入反复确认。","She said she shouldn't have made him wait on purpose. She heard what he said. They can set up the meeting without getting stuck looking for more answers over text."]],"choices":[{"thought":["接住她的回应","Acknowledge her response"],"reply":["她这次回应了你的难受，也说了不该故意让你等。可以先把见面约好，剩下想说的留到当面，不用现在就把每句话都问到底。","She heard you say it hurt and said she shouldn't have kept you waiting. Set up the meeting and leave the rest for in person. You don't have to get to the bottom of every line right now."]}],"memories":[]},"7m.SENTHER":{"time":"Sunday Morning","lines":[["回了。我又问她在哪碰头。刚才打了半句昨天我，想想还是删了。","I replied. Asked where we should meet. I typed half a sentence, “Yesterday I…” and deleted it."],["他删掉了准备说的委屈，可能是怕破坏刚恢复的联系。可以尊重他先见面的选择，但不把删掉消息理解成已经释怀，也不催他马上重新发出。","He deleted what he was about to say, maybe because he didn't want to spoil the fact they're talking again. He can see her first. Deleting it doesn't mean he's over it or has to send it again now."]],"choices":[{"thought":["给没说完的话留点余地","Leave room for what he didn't say"],"reply":["先约好见面也可以。那半句删掉了，不代表你的难受就没了；等见到她，你还想说的话，可以再从昨天自己怎么过的讲起。","It's okay to make plans first. Deleting that half a sentence doesn't make the hurt go away. If you still want to say something when you see her, you can start with what yesterday was like for you."]}],"memories":[]},"7m.SENTHIM":{"time":"Sunday Morning","lines":[["发了。她回，我昨天就是气你那样问，没跟你说一声。下午见了说吧。\\n我又问了在哪碰头，等她定地方。","Sent it. She wrote, “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.”\\nI asked where we should meet. Waiting for her to pick."],["女友解释了昨天为什么没回复，也愿意见面谈。可以先安排见面，再当面说等待的经历。","She explained why she didn't reply and is willing to talk in person. They can make plans and talk about what waiting felt like then."]],"choices":[{"thought":["让话留到见面慢慢说","Leave the rest for in person"],"reply":["她告诉你昨天为什么没回，也愿意当面聊。先把见面约下来，你昨天怎么等过来的，也可以到时候讲。","She told you why she didn't reply and wants to talk face-to-face. Set up the meeting. You can tell her what yesterday was like for you once you're there."]}],"memories":[]},"7m.SENTQUIET":{"time":"Sunday Morning","lines":[["回了，我又问她在哪碰头。昨天的事我还是没敢问，先见了再说吧。","I replied and asked where to meet. I still didn't dare ask about yesterday. I'll see her first and go from there."],["他暂时不敢提昨天，只想先恢复联系。需要尊重这个选择，同时回应他怕再次被冷落的顾虑，不要把先见面写成必须放下委屈。","He's not ready to bring up yesterday and wants to get back in touch first. Let him choose that without implying he has to get over being hurt."]],"choices":[{"thought":["接住想见她的心情","Acknowledge that he wants to see her"],"reply":["那就先把见面约好。你想见她，和你昨天确实难受，并不冲突；不用为了今天能好好相处，就要求自己马上不在意了。","Then set up the meeting. You want to see her and yesterday really hurt. Both are true. Getting along today doesn't mean you have to stop caring about it right away."]}],"memories":[]},"7f.SETBOTH":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["两人已回应彼此的难受，也安排好了见面。她在同步邀约的结果，可以确认安排，让后面的谈话留到当面，不必继续催她通过消息解释。","They've responded to each other's hurt and made plans. She just wants to say what they decided. Confirm it and leave some of the conversation for in person."]],"choices":[{"thought":["把话留到当面慢慢说","Leave room to talk in person"],"reply":["好，先按这个安排见面。你们已经各说了一点，剩下的可以慢慢讲，不用现在全挤在聊天里。","Okay, meet as planned. You've both said a little already. You can talk through the rest without trying to fit it all into messages now."]}],"memories":[]},"7f.SETHER":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["见面的时间地点已经确定，但他还没有谈自己的感受。可以确认安排，把听对方怎么想的机会留到见面，不提前替他说已经没事。","They've settled where and when to meet, but he hasn't said how he feels. Confirm the plan and let him speak for himself when they meet."]],"choices":[{"thought":["确认约定 轻收尾","Confirm the plan, then wrap up"],"reply":["那就先把这次面见上。你想说的、也想听他怎么说的，都可以留到当面，不急着在消息里一次聊完。","Get together first. What you want to say, and what you want to hear from him, can wait until you're face-to-face. You don't have to cover it all in messages."]}],"memories":[]},"7f.SETHIM":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["她澄清了没有分手的意思，也约定了时间地点。接下来可以当面说各自介意的事，回复应帮助结束眼前的等待，不再重复推演他的态度。","She clarified she wasn't trying to break up, and they've agreed on a time and place. They can talk in person about what bothered each of them. This can end the wait without more guessing about how he feels."]],"choices":[{"thought":["留一点空间当面聊","Leave space to talk in person"],"reply":["好，下午见了再说。可以先讲你介意哪几句话，也听听他等消息时怎么想的，不必在见面前把结果都猜好。","Okay, talk this afternoon. You can say which things he said bothered you, and hear what it was like for him to wait. You don't have to guess how it will end before you meet."]}],"memories":[]},"7f.SETQUIET":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。昨天的事到时候再看吧。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there. We'll see about yesterday once we're there."],["她决定先见面，再看要不要谈昨天。安排已落实，可以简短确认，尊重她暂时没有往下谈的选择，不因为今天约上了就替她宣布矛盾过去。","She's decided to see him first and then decide whether to bring it up. They have a plan. I can confirm it without saying the argument is over just because they're meeting."]],"choices":[{"thought":["确认约定 轻收尾","Confirm the plan, then wrap up"],"reply":["好，那先见面。现在不用连昨天要怎么谈都安排好，到时候看看你们各自想说什么。","Okay, meet first. You don't have to plan how to talk about yesterday now. See what you each want to say once you're there."]}],"memories":[]},"7m.MEMBOTH":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMHER":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMHIM":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMQUIET":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.PLANENDBOTH":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDHER":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDHIM":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDQUIET":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.AFTERBOTH":{"time":"Sunday Evening · After Meeting","lines":[["回来跟你说一声，见了。吃饭的时候她又提了昨天，说当时就想让我也急一下。我说以后真不想说话，至少别让我一直等着猜。她答应了。\\n我也说以后不乱猜她和同事的关系了。后面就聊别的了，没一直绷着。","Just got back. We met up. At dinner she brought up yesterday again and said she wanted to make me sweat a little. I said next time she really doesn't want to talk, at least don't leave me waiting and guessing the whole time. She said okay.\\nI said I'd stop jumping to conclusions about her and her coworker. Then we talked about other stuff, and it wasn't tense the whole time."],["两个人当面谈到了质问和等待，也分别作了回应。他带回见面结果，可以肯定这次表达的具体进展，不必再追问，或把今天的承诺当成以后一定不会重演。","They talked about the questioning and the waiting in person and both responded. I can recognize what they actually said without asking more or assuming the same thing could never happen again."]],"choices":[{"thought":["肯定这次把话说出来","Acknowledge that they said it"],"reply":["这次你把等得难受说出来了，也承认了自己不该乱猜。今天能从僵着不说，走到把各自介意的事讲一点，已经是个变化，今晚可以先歇歇。","You told her how hard it was waiting, and you said you shouldn't have jumped to conclusions. You went from not talking at all to saying a little about what bothered each of you. That's a change. You can rest tonight."]}],"memories":[]},"7m.AFTERHER":{"time":"Sunday Evening · After Meeting","lines":[["见完了。吃饭时她又说昨天气上头了，我就说嗯，过去吧，然后换了个话题。\\n她后面一直给我讲这周的事，我听着挺高兴的。昨天那些话还是没说，刚好起来，我真不太敢再弄僵了。","Just got back. At dinner she said again that she got carried away because she was angry yesterday. I said, “Yeah, let's move on,” and changed the subject.\\nShe told me about her week after that. I was happy listening. I still didn't say any of the stuff about yesterday. Things had just started feeling okay again. I really didn't dare mess it up."],["见面和她的解释让他放松，但他明确说自己仍不敢提委屈。可以回应这个顾虑，让他知道今天没说不等于以后不能说，不替他认定事情已经过去。","Seeing her and hearing her explanation helped, but he says he still doesn't dare say how he felt. He can talk about it another time. I won't assume it's behind him."]],"choices":[{"thought":["留住还没说的感受","Keep room for what he hasn't said"],"reply":["你高兴她又愿意跟你讲这些，也怕一提昨天就把气氛弄坏，所以把话咽回去了。今天没说，以后仍然可以说，不一定要等到又出事时才能提。","You're happy she wanted to tell you things again, and afraid talking about yesterday would spoil it, so you swallowed it. You can still say it later. It doesn't have to take another fight to bring it up."]}],"memories":[]},"7m.AFTERHIM":{"time":"Sunday Evening · After Meeting","lines":[["回来了。她说昨天看见我那些消息还是烦，怕回一句又得接着解释。我说以后不乱猜她和同事的关系了，但不能一直不理我。她说知道了。\\n后面一起吃了饭。我也不知道她听进去多少，反正能好好说话了，就没再追着问。","I'm back. She said she was still annoyed when she saw my messages yesterday and didn't want to get dragged into explaining again. I said I wouldn't jump to conclusions about her and her coworker anymore, but she can't keep ignoring me. She said she understood.\\nThen we ate. I don't know how much really got through, but we could talk normally again, so I didn't keep asking."],["他表达了不能接受一直不回应，也承认不该猜疑同事关系。她口头回应知道了，他仍不确定。可以肯定话已说出，至于承诺有没有落实，需要以后相处再看。","He said he can't keep going without answers and admitted he shouldn't have assumed anything about her coworker. She said she understood. He's still unsure. He said what he needed to say. How they handle things next time will tell him more."]],"choices":[{"thought":["先接住能好好说话","Acknowledge that they could talk again"],"reply":["你已经把不能一直不理你这点说出来了，也承认自己不该乱猜。她听进去多少，不用今天再追问出一个保证，之后怎么相处，比反复说知道了更能说明问题。","You told her you can't be left waiting forever and acknowledged that you shouldn't have jumped to conclusions. You don't have to get a guarantee out of her today. What you do next time will tell you more than another “I understand.”"]}],"memories":[]},"7m.AFTERQUIET":{"time":"Sunday Evening · After Meeting","lines":[["见完了。她见我先问中午吃了没，我说没吃多少，她说那晚上多吃点。当时就觉得，算了，能好好说话就行。\\n后来聊了挺多，谁也没提周五的事。可现在回来又有点怕，下次她不回我，不还得这么等着吗？","Just got back. When she saw me she asked if I'd eaten lunch. I said not much, so she told me to eat more at dinner. I thought, forget it. At least we're talking again.\\nWe talked about a lot of things, but neither of us brought up Friday. Now that I'm home I'm worried again. Next time she doesn't reply, won't I just be waiting like this all over again?"],["见面时他想先恢复日常，回来后却仍担心再次被冷落。需要回应这种落差，让他知道轻松和难受可以同时存在，不催他今晚继续谈，也不把未谈当作已解决。","He wanted things to feel normal when they met. At home he's afraid of being left hanging again. A good time and an unresolved issue can coexist. He doesn't have to talk about it tonight."]],"choices":[{"thought":["给委屈留一个出口","Leave room to talk about the hurt"],"reply":["当时见到她，你想先把日子过回来；现在静下来，昨天的难受又冒出来了。这不奇怪，见面开心和事情没说开可以同时存在。等想清楚了，可以只讲那一天你怎么等的。","When you saw her, you wanted things to feel normal. Now that you're alone, yesterday's hurt has come back. It makes sense. You can enjoy seeing her and still have something you need to talk about. When you're ready, you can start with what that day of waiting was like."]}],"memories":[]},"7m.OVER":{"time":"Sunday Evening · After Meeting","lines":[],"choices":[],"memories":[]},"7f.AFTERBOTH":{"time":"Sunday Evening · After Meeting","lines":[["回来了，跟你说一声。见面我还是说了，昨天就是想让他急一下。他说以后真不想说话也告诉他，别让他一直猜，我答应了。\\n他也说以后不乱猜我和同事的关系了。后面吃饭就聊别的了，没一直说这个。","I'm back. Just letting you know how it went. I told him in person I wanted to make him sweat a little yesterday. He said next time I really don't want to talk, at least tell him so he's not left guessing. I said I would.\\nHe said he'd stop jumping to conclusions about me and my coworker. Then we talked about other stuff over dinner. We didn't stay on this all night."],["见面时两人再次谈到故意不回和猜疑，也分别作出了回应。可以肯定这次具体的沟通，不把口头承诺扩大成关系问题已经解决，今晚也不必继续追问。","They talked about not answering on purpose and about being suspicious. They each responded. I can recognize what they managed to say without assuming they've solved it all or continuing the questioning tonight."]],"choices":[{"thought":["肯定说出了以前没说的话","Acknowledge what they finally said"],"reply":["你说出了当时想让他急，他也说了不想一直猜，你们这次把话接上了一些。后面能聊点别的，今晚就先歇歇，不用把一顿饭变成把所有事都解决完的任务。","You told him you wanted to make him sweat, and he said he didn't want to keep guessing. You managed to hear each other a little this time. You could talk about other things after that. Take the night off. Dinner didn't have to fix everything."]}],"memories":[]},"7f.AFTERHER":{"time":"Sunday Evening · After Meeting","lines":[["回来啦。吃饭时我又说了句昨天气上头了，他就说嗯，过去吧，后面就聊别的了。\\n我本来还怕尴尬，他倒一直挺好说话的，我也就没那么紧张了。","I'm back. At dinner I said again that I got carried away because I was angry yesterday. He said, “Yeah, let's move on,” and we talked about other things.\\nI was afraid it would be awkward, but he was easy to talk to the whole time. I felt less nervous."],["她看到的是男友好说话、见面不尴尬，因此轻松了一些。他有没有其他感受尚不知道，可以回应她的放松，同时鼓励以后直接表达不满，而不是猜测对方都不介意。","She saw that he was easy to talk to and the meeting went well, so she relaxed. I don't know how else he felt. I can share her relief and encourage her to tell him what bothers her next time."]],"choices":[{"thought":["接住这次见面的轻松","Acknowledge the relief"],"reply":["见面没像你担心的那么尴尬，你也轻松了一点。以后再有不舒服，可以试着直接告诉他；不必一定等气过去，才重新说话。","It wasn't as awkward as you feared, and you got to relax a little. Next time something bothers you, you can try telling him directly. You don't have to wait until you're past being angry to talk again."]}],"memories":[]},"7f.AFTERHIM":{"time":"Sunday Evening · After Meeting","lines":[["见了。他说昨天一直等，我就说看见消息还是烦，怕回一句又得接着解释。他说以后不乱猜我和同事的关系了，但不能一直不理他。我说知道了。\\n后来吃饭还挺正常的，我也不想再说小周了。","We met. He said he waited all day yesterday. I said I was still annoyed when I saw the messages and didn't want to get dragged into explaining again. He said he wouldn't jump to conclusions about me and my coworker anymore, but I can't keep ignoring him. I said I understood.\\nDinner felt pretty normal after that. I didn't want to talk about Xiao Zhou anymore either."],["她说明了不愿回应的原因，也听到了男友不能接受一直被冷落。他承认不该乱猜，双方暂时恢复了日常。可以建议下次先说需要缓缓，避免继续靠沉默传达不满。","She explained why she didn't want to reply and heard how hard it was for him to keep waiting. He acknowledged jumping to conclusions. Things feel more normal for now. Suggest a quick heads-up next time she needs a break."]],"choices":[{"thought":["提醒下次留一句话","Suggest a heads-up next time"],"reply":["他这次说清了，一直等不到回复会让他难受。下次你不想继续解释，可以先告诉他需要缓一缓，让他知道你暂时不想聊，而不是只能靠不回去猜。","He made it clear that waiting without an answer hurts. Next time you don't want to keep explaining, you can tell him you need a minute so he knows you need a break instead of having to read it into the silence."]}],"memories":[]},"7f.AFTERQUIET":{"time":"Sunday Evening · After Meeting","lines":[["回来啦。见面我问他中午吃了没，他说没吃多少，我说那晚上多吃点，他就笑了。后面还挺好的。\\n昨天的事情谁也没提。可能就是气头上那会儿过去了吧。","I'm back. I asked if he'd eaten lunch and he said not much. I told him to eat more at dinner, and he smiled. It was pretty nice after that.\\nNeither of us brought up yesterday. Maybe we were just mad in the moment and it's passed."],["她把见面顺利理解成气已过去，但也明确说没有谈昨天。可以承认今天相处的轻松，不顺着认定不提就等于不介意，把以后再说的可能留给她。","She's taking the easy evening as a sign the anger might be over. They didn't talk about yesterday. I can acknowledge that it felt good and leave her room to talk about it later."]],"choices":[{"thought":["接住靠近 留着未尽的话","Share the relief and leave room to talk"],"reply":["今天能好好相处，你松口气很正常。昨天没提的事，也不一定就不介意了；以后你还想说，可以再找机会，不必因为今天开心就当作不能提。","It makes sense you're relieved you got along today. It can still bother you even if you didn't bring it up. If you want to say something later, you can. Having a good time today doesn't take that away."]}],"memories":[]},"7f.STATION":{"time":"Sunday Evening · After Meeting","lines":[["对了，他吃饭拍的照片全是糊的。说他兄弟外号叫废片大王，他这手艺就是跟那人学的。我说你这师父找得挺准啊。","Oh, every photo he took at dinner came out blurry. He says his friend goes by King of Bad Photos and that's who taught him. I said, “You really picked the right teacher.”"],["她又补了一件吃饭时的趣事，语气比之前轻松。现在没有新的求助，可以顺着照片接一句，让聊天自然结束，不必再把话题拉回矛盾分析。","She's added a funny thing from dinner and sounds more relaxed. She doesn't need help with anything else. Answer the joke and let the chat end naturally."]],"choices":[{"thought":["接回他下错站的小糗事","Call back to the wrong stop"],"reply":["那下次合照还是你来拍吧。下错一站要跟你说，拍糊了也要跟你说，这些小糗事也愿意跟你分享，讲起来倒是没怎么端着。","You should take the photo next time. He tells you when he gets off a stop early and when he takes a blurry photo. He's happy to share those little mishaps with you. He doesn't seem to put on much of an act when he tells you."]},{"thought":["顺着糊照片轻收尾","End on the blurry photos"],"reply":["这师承关系算是认下了。下次合照还是你来拍，让他负责好好站着，至少先保住一张清楚的。","Well, that explains where he learned it. You take the next one and let him concentrate on standing still. That should get you at least one clear photo."]}],"memories":[]},"7f.OVER":{"time":"Sunday Evening · After Meeting","lines":[],"choices":[],"memories":[]},"8f.F101":{"time":"One-Month Anniversary","lines":[["今天我跟我男朋友在一起一个月了。晚上约好吃饭。我中午能下楼一趟，想顺手给他买点什么。买啥啊？","It's been a month since my boyfriend and I got together. We're having dinner tonight. I can go downstairs at lunch, so I want to pick up a little something for him. What should I get?"],["用户想给男友带一点东西庆祝，中午有时间下楼。可以提供一项具体、容易买到的小建议。","She wants a little gift to celebrate, and she has time to go downstairs at lunch. Give her a concrete suggestion that's easy to buy."]],"choices":[{"thought":["想起他提过的青提蛋糕","Remember the green grape cake"],"reply":["他提过想吃青提蛋糕，你可以去附近看看有没有小份的。晚上吃完饭一起分，正好。","He mentioned wanting green grape cake. See if there's a small one nearby. You can split it after dinner tonight."]},{"thought":["挑一份容易带的小点心","Pick an easy-to-carry treat"],"reply":["可以买一小盒曲奇，带着也方便。晚上见到他再给，不用为了一份礼物来回跑。","You could get a small box of cookies. It's easy to carry and you can give it to him tonight. No need to run all over for a gift."]}],"memories":[]},"8f.F102A":{"time":"One-Month Anniversary","lines":[["真买到了。小小一个，我塞办公室冰箱了。晚上拿，应该不会忘吧哈哈。","I actually found one. It's tiny. I stuck it in the office fridge. I'll grab it tonight. I won't forget, right? Haha."],["用户买到了蛋糕，已经放进办公室冰箱。可以给她一个简单办法，免得下班忘拿。","She found the cake and put it in the office fridge. Give her an easy way to remember it when she leaves."]],"choices":[{"thought":["提醒出门前拿蛋糕","Remind her to grab the cake"],"reply":["下班前设个提醒吧。写个「冰箱里的蛋糕」，到时候看一眼就知道了。","Set a reminder for before you leave work. Just write “cake in the fridge.” You'll know what it means when you see it."]}],"memories":[]},"8f.F102B":{"time":"One-Month Anniversary","lines":[["买了盒曲奇。我先塞包里了。晚上他要问为什么不是别的，我就说店里它排第一个。","Got a box of cookies. Put it in my bag. If he asks why I got these, I'll say they were first on the shelf."],["用户已经买好一份小点心，也在随口开玩笑。可以轻松接一句。","She's picked up a treat and is joking. A light reply is enough."]],"choices":[{"thought":["顺着小礼物聊一句","Play along about the gift"],"reply":["排第一个也算被你选中了。晚上见面再给他，挺好。","First on the shelf still counts as being picked. Give them to him when you see him tonight."]}],"memories":[]},"8m.M101":{"time":"One-Month Anniversary","lines":[["今天跟我女朋友在一起一个月了。晚上约了吃饭，我想顺路给她带杯喝的。你说去哪买？","I've been with my girlfriend for a month today. We're getting dinner tonight and I want to bring her a drink on the way. Where should I get it?"],["用户想给女友带一杯饮料，现在只需要帮他选店。口味可以留到下单时再定。","He wants to bring her a drink. He just needs to pick a place. He can choose a flavor when he orders."]],"choices":[{"thought":["回想她提过的店","Recall the place she mentioned"],"reply":["她之前提过公司楼下的青杏。可以去那家看看菜单，有想不准的口味再问她。","She mentioned Green Apricot downstairs from her office. You could look at the menu there and ask her if you're not sure what she'd like."]},{"thought":["路上挑一家饮品店","Pick a drink shop on the way"],"reply":["找一家顺路的就行。你要是拿不准她喝什么，可以先看看菜单，到了再挑。","Find somewhere on your way. If you're not sure what she drinks, have a look at the menu and pick when you get there."]}],"memories":[]},"8m.M102A":{"time":"One-Month Anniversary","lines":[["青杏是吧，行，等会儿出门去买。","Green Apricot, right. Okay, I'll go get it when I head out."],["用户定了去青杏，还没出门。简单确认就够了。","He's decided on Green Apricot and hasn't left yet. A quick confirmation is enough."]],"choices":[{"thought":["确认买饮料的安排","Confirm the drink plan"],"reply":["好，等你出门再买，带过去还是凉的。","Sounds good. Buy it on your way and it'll still be cold when you get there."]}],"memories":[]},"8m.M102B":{"time":"One-Month Anniversary","lines":[["行，我等出门路上看吧。不急。","Okay, I'll look on my way out. No rush."],["用户决定到出门时再挑店，眼下没有需要继续确定的事。","He's going to choose when he leaves. Nothing else needs settling now."]],"choices":[{"thought":["让安排先留着","Leave the plan open"],"reply":["可以，路上挑就行。","Sure, pick a place on the way."]}],"memories":[]},"8f.F103":{"time":"Early Evening · Change of Plans","lines":[["本来都准备收拾包了，刚叫我把方案再改一遍。还有一堆没弄，我估计出不去了。晚上那顿我得跟他说改天，你帮我想一句？","I was about to pack up, then they asked me to revise the proposal again. I've still got a pile of stuff to do, so I don't think I can leave. I need to ask him to do dinner another day. Can you help me write something?"],["用户临时要改方案，预计不能按约赴餐。她想先告诉男友，可以把变化和改期请求说清，暂时不承诺另一个时间。","She has a last-minute revision and probably won't make it to dinner. She can explain the change and ask to reschedule without committing to a new time yet."]],"choices":[{"thought":["把加班和改期说清楚","Explain the work and reschedule"],"reply":["可以发「今天临时还得改个东西，估计走不开。晚上那顿改天吃行吗？」先把今晚的变动告诉他，具体哪天等你们都有空再定。","You could send, “Something came up that I need to revise today. I don't think I can get away. Can we do dinner another day?” Let him know about tonight first. Pick a new day once you're both free."]}],"memories":[]},"8m.M103":{"time":"Early Evening · Change of Plans","lines":[["她刚发我「今天临时还得改个东西，估计走不开。晚上那顿改天吃行吗？」我回了「好，你先忙。」我知道她在忙。就是我今天下午老看时间，刚才还在想快下班了。","She just sent, “Something came up that I need to revise today. I don't think I can get away. Can we do dinner another day?” I said, “Okay. Take care of work first.” I know she's busy. I kept checking the time this afternoon, though. I was just thinking it was almost time to get off work."],["用户已经回了女友。他提前盼着下班，突然改期有些失落。先回应这份落差，看看他此刻还有什么想说。","He's already replied. He was looking forward to work ending and feels let down by the sudden change. Acknowledge how that feels and see what he wants to say now."]],"choices":[{"thought":["接住临时改期的失落","Acknowledge the disappointment"],"reply":["你惦记了一下午，临到下班突然改期，心里空一下很正常。你现在还想跟她说点什么，还是就想找人说说这一下？","You were looking forward to it all afternoon, and it changed right when you were about to get off work. Of course that feels a little empty. Is there anything else you want to tell her, or do you just want to talk about how it felt?"]}],"memories":[]},"8f.F104":{"time":"Early Evening · Change of Plans","lines":[["他说「好，你先忙。」那我先改吧，等弄完再看几点。唉，我本来都在想晚上吃什么了。","He said, “Okay. Take care of work first.” I'll get back to the revisions, then. See what time it is when I finish. Ugh, I was already thinking about what we could eat tonight."],["用户收到改期答复，仍为落空的晚饭可惜。现在她准备回去工作，可以先接住这句。","She's heard back and is still disappointed to miss dinner. She's about to get back to work. Acknowledge that she was looking forward to it too."]],"choices":[{"thought":["回应她也想赴约","Acknowledge she wanted to go too"],"reply":["你也盼着这顿饭，临时被打断当然会可惜。先把手上的东西改完，等你们能坐下来吃的时候再好好吃。","You were looking forward to dinner too. Of course you're disappointed it fell through. Finish what's in front of you, and enjoy dinner when you can sit down together."]}],"memories":[]},"8m.M104":{"time":"Early Evening · Change of Plans","lines":[["我后来还是想去一趟。给她发了「我给你送点吃的，送到就走。」我已经在路上了。她还没回，吃的和喝的我都买了。","I decided I still wanted to go. I sent her, “I'll bring you something to eat. I'll drop it off and go.” I'm already on my way. She hasn't replied yet. I've got the food and the drink."],["用户已经买了东西并出发，女友还没确认能见面。可以建议用户到楼下先问一句，把下不下来留给她决定。","He's already bought everything and left. She hasn't said she can see him. He can ask once he gets there and leave it up to her whether to come down."]],"choices":[{"thought":["先确认她方不方便下来","Check if she can come downstairs"],"reply":["到了先问她方不方便下来。她忙的话，你也可以问问东西能不能放前台，省得她临时跑一趟。","When you get there, ask if she can come down. If she's busy, ask if you can leave it at reception so she doesn't have to drop everything and come down."]}],"memories":[]},"8m.M105":{"time":"19:16","lines":[["我现在拎着东西在路口。刚到楼下还没来得及问她，直接看见她跟一男的拿外卖，有说有笑。我说「不是说在忙吗？你跟他聊得还挺开心。」她说「这是小周，我们下来拿外卖。」那几个人都在，她直接来一句「行了，你别在这儿丢人了，回去吧。」就上去了。现在我还站这儿呢。","I'm at the corner holding all this stuff. I just got to her building and didn't even get a chance to ask. I saw her getting takeout with some guy, laughing and talking. I said, “I thought you were busy. You sure look like you're having fun talking to him.” She said, “This is Xiao Zhou. We came down to pick up our food.” Those other people were all there, and she just goes, “Enough. Stop embarrassing yourself here. Go home.” Then she went upstairs. I'm still standing here."],["用户特地买了吃的过来，却当着几个人的面被说丢人，现在还拎着东西站在路口。先让用户知道，我听见了他受的委屈。","He went out of his way to bring food, got called embarrassing in front of a group, and is still standing at the corner with the bag. First let him know I've heard how hurt he feels."]],"choices":[{"thought":["接住用户的委屈","Acknowledge how much it hurt"],"reply":["你拎着吃的跑过去，她当着那么多人的面说你丢人，说完就上楼了。你一个人拎着东西站在那儿，换谁都不好受。","You brought food all the way over, and she told you to stop embarrassing yourself in front of all those people, then went straight upstairs. Being left there alone, still holding the food, would hurt."]}],"memories":[]},"8f.F105":{"time":"19:19","lines":[["我刚回工位才看见他发的「我给你送点吃的，送到就走。」刚才我跟同事下楼拿外卖，小周跟我说那家饭又给他送错了，我正笑呢，结果也不知道他从哪儿冒出来的，张口就说「不是说在忙吗？你跟他聊得还挺开心。」我说「这是小周，我们下来拿外卖。」怎么一来就问这个啊？","I just got back to my desk and saw his message: “I'll bring you something to eat. I'll drop it off and go.” I'd gone down to pick up food with my coworkers. Xiao Zhou was telling me the place had messed up his order again, and I was laughing. Then my boyfriend came out of nowhere and the first thing he said was, “I thought you were busy. You sure look like you're having fun talking to him.” I said, “This is Xiao Zhou. We came down to pick up our food.” Why would he lead with that?"],["用户没预料男友会来，见到他时还不知道他发过消息。他一开口就问她和同事的事，用户还在为这个生气，可以先回应她当时有多突然。","She hadn't seen his message and didn't expect him to be there. The first thing he did was question her about her coworker. She's still angry. I can acknowledge how sudden it was."]],"choices":[{"thought":["接住用户的意外","Acknowledge how sudden it felt"],"reply":["你当时只是下楼拿外卖，没想到会碰见他。他又当着同事那么一问，你连发生了什么都还没弄明白，就已经被问上了。","You were just picking up food. You didn't expect to see him, and he asked you that in front of your coworkers. You were already being questioned before you knew what was going on."]}],"memories":[]},"8m.M106":{"time":"19:20","lines":[["对啊，她要我走就说一声呗。那几个人都在，她说完就上楼了，剩我拎着东西站那儿。我越想越气。我问她怎么说完就走了，看她怎么回。","Exactly. If she wanted me to go, she could've just said so. The others were all there. She said that and went upstairs, and I was left holding everything. The more I think about it, the angrier I get. I'll ask why she just walked off and see what she says."],["用户越想越气，已经打算去问女友为什么说完就走。可以提醒他先说自己介意什么，让对方知道他为什么来找她。","He's getting angrier and is about to ask why she walked off. I can remind him to say what bothered him, so she knows why he's bringing it up."]],"choices":[{"thought":["让用户先说自己的感受","Have him say how he felt"],"reply":["你想问她为什么把你一个人留在那儿。你最介意的是她当着大家说你丢人，就让她先听见这个。","You want to ask why she left you standing there. What hurt most was hearing that in front of everyone. Let her hear that first."]}],"memories":[]},"8f.F106":{"time":"19:24","lines":[["我当时就说了「行了，你别在这儿丢人了，回去吧。」然后我就上来了。他刚发「你刚才怎么说完就走了？当着那么多人说我丢人，你让我站那儿怎么办？」他自己跑来的啊，我都说今晚走不开了。我现在特别想回他。","I said, “Enough. Stop embarrassing yourself here. Go home.” Then I came back upstairs. He just said, “Why'd you just walk away after saying that? You told me I was embarrassing myself in front of all those people. What was I supposed to do, just stand there?” He came here on his own. I told him I couldn't get away tonight. I really want to answer him right now."],["用户想回男友，因为她在意的是对方没等答复就来、又当着同事质问她。可以帮她先说清这两件事。","She wants to reply because he came without waiting for an answer and questioned her in front of her coworkers. I can help her say those two things clearly."]],"choices":[{"thought":["支持用户说清楚","Help her say it clearly"],"reply":["他没等你回就来了，又当着同事那么问，你会生气很正常。要回的话，可以先告诉他，你当时都没看见他要过来的消息。","He came without waiting for a reply, then asked you that in front of your coworkers. It makes sense you're angry. If you want to answer, start with the fact you hadn't seen his message about coming over."]}],"memories":[]},"8m.M107":{"time":"19:35","lines":[["她回「你没等我回就来了，一来就问小周。我都说了是同事，你还要我说什么？」我就发「你俩平时私下也这么聊？那你给我看看聊天记录。」她回「不给。上次要看，这次又来？」我说的是聊天记录，她怎么又跟我扯上次？","She said, “You came without waiting for me to reply. You showed up and went straight to asking about Xiao Zhou. I told you he's a coworker. What else do you want me to say?” I sent, “Do you two talk like this in private too? Then show me your chat history.” She said, “No. You asked to see it last time, and now you're doing it again?” I'm asking about the chat history. Why's she going on about last time?"],["用户想让女友回应他当众受伤的事，却已经追问到私聊记录。对方明确拒绝了，可以解释继续追问会让争执离他原本想说的事更远。","He wants her to acknowledge how she hurt him in public, but he's now asking to see private messages. She's said no. I can explain how pushing will take them further from what he wanted to say in the first place."]],"choices":[{"thought":["劝用户别再追问","Urge him to stop pressing"],"reply":["她还没回应你被当众说丢人的事，你着急我能理解。但她已经说了不给看，你再追问，她听到的只会是你还在怀疑她。你真正想让她听见的话，反而更难说清楚。","She hasn't answered the part about calling you embarrassing in front of everyone. I get why that bothers you. She's already said she won't show you the chat. If you keep asking, all she'll hear is that you still suspect her. It'll be harder for her to hear what you really wanted to say."]}],"memories":[]},"8f.F107":{"time":"19:40","lines":[["我说小周是同事，他回「你俩平时私下也这么聊？那你给我看看聊天记录。」我回了「不给。上次要看，这次又来？」他又来「那你把他删了吧，工作上不是有群吗？」我俩天天还得对表呢，我删他干嘛？","I said Xiao Zhou's a coworker, and he wrote, “Do you two talk like this in private too? Then show me your chat history.” I said, “No. You asked to see it last time, and now you're doing it again?” Then he goes, “Then delete him. Don't you have a group chat for work?” We still have to check the spreadsheet together every day. Why would I delete him?"],["用户解释了工作关系，仍先后被要求交出私聊和删除同事。她想守住工作来往和隐私，可以帮她把拒绝说清楚。","She explained that they work together. Then he wanted her private messages and told her to delete her coworker. She wants to protect both her privacy and a working relationship. I can help her say no plainly."]],"choices":[{"thought":["把拒绝说清楚","Make the refusal clear"],"reply":["你可以直接说「他跟我做一个项目，我不会删。」你已经讲了是工作关系，也可以保留自己的聊天记录。","You can say, “We're on the same project. I'm not deleting him.” You've explained it's work. You can also keep your messages private."]}],"memories":[]},"8m.M200":{"time":"19:52","lines":[["我刚才一急，顾不上别的了，就问她能不能把小周删了。结果越说越难听。我都说以后不来了，她回我「你放心，我也不会叫你。」我最后就回了个行。她说不叫就真不叫了是吧？","I got worked up and stopped thinking about anything else. I asked if she could delete Xiao Zhou. It just got nastier. I said I wouldn't come over again, and she said, “Don't worry. I won't ask you to.” I just said fine. Does she really mean she's never gonna ask me over again?"],["用户带着最后一句话回来，想知道女友是不是认真的。她的意思暂时无法确认，可以先问两人怎样说到了以后不见面。","He's come back with her last line and wants to know whether she meant it. I can't tell yet. Ask how the conversation got to them not seeing each other."]],"choices":[{"thought":["问问争吵的经过","Ask how the fight got there"],"reply":["这句听着够重的。你说以后不来，是怎么说到这儿的？她前面回了你什么？","That sounds harsh. How did it get to you saying you wouldn't come over anymore? What did she say before that?"]}],"memories":[]},"8m.M201":{"time":"19:58 · 19:52","lines":[["她不删，我说她护着小周。她就说以后跟领导说句话是不是也得先问我。我听着就来气。我说以后不来，她说本来也没叫我来。我都跟她说了，当着那么多人被说丢人有多难受。她有哪怕回我一句吗？","She wouldn't delete him, so I said she was sticking up for Xiao Zhou. Then she asked if she needs my permission to talk to her boss from now on. That pissed me off. I said I wouldn't come over again, and she said she never asked me to in the first place. I told her how much it hurt to hear that in front of everybody. Did she say one word back about that?"],["用户想知道，女友有没有回应他当着同事被说丢人的难受。他已经讲出了最后几句，也提到自己要求她删同事。可以先接他没被回应的委屈，或者和他一起把刚才这段重看一遍。","He wants to know if his girlfriend answered the part about how it felt to hear that in front of her coworkers. He's told me the last few lines and said he asked her to delete her coworker. I can acknowledge that he wasn't heard or go back through it with him."]],"choices":[{"thought":["顺着用户说","Go along with them"],"reply":["你在意的那句一直没得到回应。后来你一说不来了，她又回你本来就没叫你来。这时候你觉得自己过去这一趟特别没意思，我能理解。","The part you cared about still hasn't been answered. Then you said you weren't coming over again, and she said she hadn't asked you to in the first place. I can see why the whole trip feels pointless now."]},{"thought":["陪用户冷静回顾","Help them think it through"],"reply":["你说当着她同事被说丢人，心里很难受。她没回应你，你会介意很正常。你刚才也提到，她不肯删，你就说她护着小周。她说小周是同事，你当时为什么没信她？","You said it hurt to hear that in front of her coworkers. It makes sense it bothered you when she didn't answer that. You also said when she wouldn't delete him, you accused her of sticking up for Xiao Zhou. She said he's a coworker. Why didn't you believe her then?"]}],"memories":[]},"8m.M202B5":{"time":"20:03 · 19:52","lines":[["我当时哪顾得上想那么多。她让我走就上楼了，我拎着东西站那儿。以前她就算回得慢，忙完也会跟我说一声的。","I couldn't think about any of that right then. She told me to go and went upstairs. I stood there with the food. Before, even when she took a while, she'd say something when she was done."],["用户想起女友过去虽慢但会回应，今晚却没能把话说完。我记得她答应交往时说过自己不太会谈恋爱，可以顺着用户眼下的落差问他最想说什么。","He remembers that she'd take a while but still reply. Tonight they never got to finish the conversation. I remember her saying she might not be good at relationships when she agreed to date him. I can ask what he most wanted to hear."]],"choices":[{"thought":["回想两人刚交往时","Think back to when they got together"],"reply":["你以前说她回得慢但都会回，所以你这次也盼着她能再跟你好好说几句。她答应和你在一起时，还说过自己可能不太会谈恋爱。她今天上楼时怎么想的，我们现在说不准。你当时最希望她跟你说什么？","You said she takes a while to reply, but she always does. So this time you hoped she'd give you a chance to talk. When she said yes to dating, she also said she might not be very good at relationships. I can't tell what she was thinking when she went upstairs. What did you most want her to say to you then?"]}],"memories":[]},"8m.M202B7":{"time":"20:03 · 19:52","lines":[["我以前觉得她回慢点也没事，反正会回。上次我说完不该要记录，她一天没理我。今天她让我走，自己就上楼了，我一下又想起来了。","I used to think it didn't matter if she took a while. She'd reply eventually. Last time I said I shouldn't have asked to see the chat, she ignored me for a whole day. Today she told me to go and went upstairs. It brought the whole thing back."],["用户把上次等不到回复和今晚被留在楼下连在了一起。我记得他以前以为她忙完总会回，可以先理解他为什么着急。","He's connecting waiting without an answer last time with being left downstairs tonight. I remember he used to count on her replying when she was done. I can see why he got anxious."]],"choices":[{"thought":["接住他怕再等不到","Acknowledge his fear of another wait"],"reply":["你以前觉得她回得慢但都会回。上次你说不该要看记录，她却一天没回。今天她说完就上楼，你一下想到那一回，也难怪着急。你后来有跟她说，你怕她又不理你吗？","You used to feel that she took a while to reply, but she always did. Last time you said you shouldn't have asked to see her chat, and then she didn't reply all day. Today she left right after telling you to go. No wonder it brought that back. Did you tell her you were afraid she might ignore you again?"]}],"memories":[]},"8m.M202E":{"time":"20:03 · 19:52","lines":[["就很没意思啊。我还跑去买吃的。我当时站那儿，感觉旁边人都在等我走。她回来跟我说的还是我自己跑来的。","It just felt pointless. I went out and bought her food and everything. Standing there, I felt like everybody was waiting for me to leave. Then she messaged back just to say I came on my own."],["用户在说当众被打发和事后没被回应。先说明这两次为什么让他不好受，暂时不用替女友推断动机。","He's talking about being sent away in public and feeling unheard afterwards. I can say why those two moments hurt without deciding what his girlfriend meant."]],"choices":[{"thought":["听完这两次难受","Hear what hurt both times"],"reply":["你在楼下已经够尴尬了，后来想把这份难受跟她讲，又只听到她说是你自己来的。难怪你到现在还在想那几句。","It was awkward enough standing downstairs. Then when you tried to tell her how much it hurt, all you heard back was that you came on your own. No wonder you're still thinking about those lines."]}],"memories":[]},"8m.M202O5":{"time":"20:03 · 19:52","lines":[["她说是同事我听见了。我就想不通，她跟人家还好好说着话呢，见我就让我走。以前她忙归忙，下班再晚也会回我。怎么现在这样？","I heard her say he's a coworker. I just don't get it. She's talking to him like everything's fine, then she sees me and tells me to go. She used to answer no matter how late she got out of work, even if she was busy. What's changed?"],["用户还在气女友让他离开，并想起她以前就算忙也会回。我记得用户转述过女友答应交往时说自己不太会谈恋爱。可以让他把原本期待的回应说出来。","He's still angry she told him to go and remembers she used to reply even when she was busy. I remember him quoting what she said about not being good at relationships. I can ask what he was hoping she'd say."]],"choices":[{"thought":["回想她当时的话","Remember what she said back then"],"reply":["你以前说，她回得慢但都会回。今天你也在等她好好跟你说一句，结果她当着人让你走。她答应跟你在一起的时候说过，自己可能不太会谈恋爱。今天她为什么这么急着走，光凭这一幕还看不出来。她上去以后，你最希望她回你什么？","You said she takes a while to reply, but she always does. Today you were waiting for her to talk to you, and she told you to leave in front of everyone. When she agreed to go out with you, she said she might not be very good at relationships. We can't tell from that moment why she was in such a hurry. Once she went upstairs, what did you want her to say?"]}],"memories":[]},"8m.M202O7":{"time":"20:03 · 19:52","lines":[["以前她哪怕慢点也会回。现在一生气就不理人，上次一天都没回我。","She used to reply even if it took a while. Now if she gets mad she just ignores me. Last time I didn't hear from her all day."],["用户主动拿眼下和此前的相处比较。我记得用户说过她慢回却都会回，也说过后来等了一整天，可以让用户看看自己当时期待了什么。","He's already comparing this to how things used to be. I remember he said she'd always respond eventually and that he later spent a whole day waiting. I can help him see what he was hoping for."]],"choices":[{"thought":["对照慢回和争执后的沉默","Compare a slow reply and silence after a fight"],"reply":["你以前说她回得慢但都会回。后来你说过不该要聊天记录，那一整天也没收到回音。你今天会一下想到她又不想理你，我能理解。你有跟她说过你怕的是这个吗？","You used to say she takes a while to reply, but she always does. Then you said you shouldn't have asked to see the chat and heard nothing all day. I get why you thought she might shut you out again. Did you tell her that's what you were afraid of?"]}],"memories":[]},"8m.M202S":{"time":"20:03 · 19:52","lines":[["我到那儿的时候她还跟小周说说笑笑呢。说忙得没空见我，跟他倒有说有笑的。我一过去她就让我走，我能不多想吗？","When I got there she was laughing with Xiao Zhou. She was too busy to see me, but she was having a great time talking to him. The second I got there she told me to go. How was I supposed to not read into that?"],["用户把女友和同事说笑、让他离开连在一起。我记得他上次也在不知道对方聊过什么时就要求看记录。可以先承认他看到的场面让他难受，再问他有没有听到别的信息。","He's connecting seeing her laugh with her coworker and then being told to leave. I remember he asked to see the chat last time without knowing what they'd talked about. I can acknowledge why it hurt, then ask if he heard anything else."]],"choices":[{"thought":["回想上次查记录","Think back to asking for the chat"],"reply":["你过去是想见她，结果看到她跟同事聊得开心，自己还被叫走，心里有落差很正常。我记得上次你也因为她和小周相处得挺好，就想看他们的聊天记录。今天除了看见他们一起拿外卖，你还听见什么了吗？","You wanted to see her. You saw her laughing with her coworker and then she sent you away. It makes sense that felt bad. I remember last time you wanted to see their messages because she seemed to get along with Xiao Zhou. Apart from seeing them picking up dinner, did you hear anything else?"]}],"memories":[]},"8m.M203B5":{"time":"20:07 · 19:52","lines":[["就别当着人让我走啊。她要是真没空，跟我说晚点再聊就行。我后来也没好好说这些，一直问她跟小周私下聊什么。","Just don't tell me to go in front of everyone. If she really can't talk, tell me we'll talk later. I didn't say any of that right. I just kept asking what she talks about with Xiao Zhou in private."],["用户已经说出自己想要的回应，也记起自己一直追问同事。我记得用户上次也说过，没看到什么就开口要记录，可以让他想想为什么又追到了那里。","He's said what he wanted her to say and remembered how he kept pressing about her coworker. Last time he told me he asked for the chat without seeing anything. I can ask him to think about how he got there again."]],"choices":[{"thought":["回看上次追问","Look back at the last time he pressed"],"reply":["你想听她说晚点还能跟你好好聊。上次你也说过，明明不知道他们聊过什么，还是开口要看记录。今天你气的是她当着人赶你，聊到最后却变成非要她删同事。可以先缓缓，再想你想跟她说什么。","You wanted to hear that she'd talk to you properly later. Last time you said you didn't know what they'd talked about, but you still asked to see the chat. Today you were angry she sent you away in front of people. By the end you were demanding she delete her coworker. Take a minute, then think about what you want to tell her."]}],"memories":[]},"8m.M203B7":{"time":"20:07 · 19:52","lines":[["没。我就又让她给我看记录。她说不给，我还让她删人。我当时就觉得她肯删，我就不用一直想了。","No. I just asked to see the chat again. She said no and I told her to delete him. I thought if she'd delete him, I could stop thinking about it."],["用户说出自己为什么想让女友删人。我记得上次他也在没有根据时索要记录，可以让他看看两次用了什么办法让自己安心。","He's said why he wanted her to delete her coworker. Last time he asked to see her messages without any evidence. I can help him see what he tried to do both times to feel reassured."]],"choices":[{"thought":["回想上次怎么问的","Remember what he asked last time"],"reply":["上次你说，你都不知道他们聊过什么，还是想看记录。今天她说不给，你就让她删人。你想安心很正常，可她已经说了只是同事。你可以先缓缓，想想还有什么办法能让她知道你在怕什么。","Last time you said you didn't know what they'd talked about and wanted to see the chat anyway. Today she said no and you told her to delete him. Of course you want to feel sure, but she's already said he's a coworker. Take a minute to think of another way to tell her what you're afraid of."]}],"memories":[]},"8m.M203O5":{"time":"20:07 · 19:52","lines":[["就跟我说一句她刚才为什么那样呗。她要是说忙，等忙完再说，我也不至于站那儿一直猜。可她后来回我的是我自己跑来的。","I just wanted her to tell me why she did that. If she'd said she was busy and we'd talk when she was done, I wouldn't have stood there guessing. But what she said was that I came on my own."],["用户说出了自己想听的回答，仍在气对方把受伤归到他突然来访。可以帮他把这个愿望和继续追问同事分开。","He's said what he wanted to hear and still feels like she blamed his hurt on him turning up. Help him separate what he wants her to hear from the questions about her coworker."]],"choices":[{"thought":["听清用户想说什么","Hear what he wants to say"],"reply":["你是想听她好好回应你，尤其是当着同事说你丢人这件事。问小周也问不出这个答案。你还在气，可以先走走，等你想好要她听见什么再说。","You want her to answer you, especially about being called embarrassing in front of her coworkers. Asking about Xiao Zhou won't tell you that. You're still angry. Go for a walk and figure out what you most want her to hear."]}],"memories":[]},"8m.M203O7":{"time":"20:07 · 19:52","lines":[["没啊。我当时满脑子都是，她跟别人好好的，怎么跟我就这样。后来小周删不删，我还非得问出个结果来。","No. All I could think was, she's fine with other people, so why's she like this with me? Then I just had to get an answer about whether she'd delete Xiao Zhou."],["用户在气女友让他离开，也记得自己后来一直逼问。可以提醒他，问同事的事不会让女友知道他怕再等不到回应。","He's still angry she sent him away and remembers pressing her. I can point out that making it about her coworker won't tell her why he's afraid she'll stop replying."]],"choices":[{"thought":["说说他到底在怕什么","Name what he's afraid of"],"reply":["你怕她跟上次一样不理你，可你问的是她肯不肯删同事。她从这句里听不出你在等她回你。先缓缓，等会儿再想要不要跟她说。","You're afraid she'll ignore you like last time, but you're asking her to delete a coworker. She can't hear that you're waiting for a reply in that question. Take a minute, then see if you want to tell her."]}],"memories":[]},"8m.M203S":{"time":"20:07 · 19:52","lines":[["也没听见什么。我就是觉得，她那么急着让我走，是不是不想让她那些同事看见我啊。她那样说我，我到现在还气。","Didn't hear anything else. I just thought, she wanted me gone so fast. Maybe she didn't want those coworkers to see me. I'm still angry about what she said."],["用户仍在意当众受伤，也承认自己没有听见别的。可以让他分清当众被说丢人和猜测女友有意瞒同事这两件事。","He's still upset about what she said in front of people and admits he didn't hear anything else. Help him separate the insult from his guess that she wanted to hide him."]],"choices":[{"thought":["分清感受和猜测","Separate the feeling from the guess"],"reply":["她当着同事说你丢人，你当然可以生气。至于她是不是不想让同事看见你，你现在还不知道。上次你也是越猜越着急，最后开口要看记录。可以先把手机放一放，等会儿再想你最想跟她说什么。","Of course you can be angry she called you embarrassing in front of her coworkers. You don't know whether she didn't want them to see you. Last time, guessing made you more anxious, and you ended up asking to see the chat. Put your phone down for a bit and think later about what you want to tell her."]}],"memories":[]},"8m.M203E":{"time":"20:08 · 19:52","lines":[["算了，我也不发了。再发她又嫌我没完没了。我先找个地方坐会儿。","Forget it. I'm not sending anything else. She'll just say I won't let it go. I'll find somewhere to sit for a bit."],["用户决定暂时收起手机，眼下需要的是让争执先停一会儿。","He's decided to put his phone away for now. What he needs is a break from the argument."]],"choices":[{"thought":["支持先放下手机","Let him put the phone down"],"reply":["那就先坐会儿。这会儿你也没什么想接着说的，手机可以放一放。","Then find a seat for a bit. There's nothing else you want to say right now, so you can put the phone down."]}],"memories":[]},"8f.F200":{"time":"20:12","lines":[["我刚去对了两行东西，一停下来又想起他那几句。先要看我聊天，再让我删人。我不删他还说「你就非得护着他，是吧？」我真的是……我上班也得跟他证明我没干什么吗？","I just went to check a couple of rows, then I stopped and remembered what he said. First he wanted to see my chat, then he wanted me to delete him. When I said no he went, “You just have to stick up for him, huh?” I swear… Do I have to prove I wasn't doing anything even at work?"],["用户在短暂回去工作后继续说起争执。她明确介意被要求自证，后面发生了什么还没讲完，可以先接住她的火气，再问对话怎么结束的。","She went back to work briefly and is talking about the fight again. She's upset at being made to prove herself. I haven't heard how it ended. I can acknowledge how angry she is and hear the rest."]],"choices":[{"thought":["听她讲到最后一句","Hear how it ended"],"reply":["你已经说了同事的事，还是被追着证明，当然会烦。你们后来又说了什么？","You already explained he's a coworker and still got pressed to prove yourself. Of course you're annoyed. What did you say after that?"]}],"memories":[]},"8f.F201":{"time":"20:18 · 20:12","lines":[["我说以后是不是跟领导说话也得问他。然后他翻上次一天没回，又说楼下，说以后不来了。我回本来也没叫他来。他说我叫他他也不来，我就说那我也不会叫了。最后他回个行。什么都能说成我有问题，他还想让我怎么办？","I asked if I'd need his permission to talk to my boss now. Then he brought up me not answering for a whole day last time, went back to downstairs, and said he wouldn't come over anymore. I said I never asked him to. He said he wouldn't come even if I asked, so I said I wouldn't ask. He just said fine. He can turn anything into my fault. What else does he want from me?"],["用户刚讲完两人怎样把话说到以后不见。她还在气自己解释后被追问，也提到了男友说在楼下不好受。可以先让她把这口气说完，或者陪她回看她当时怎样回应。","She's explained how they got to saying they wouldn't see each other. She's still angry he pressed after she explained, and mentioned him saying he was hurt downstairs. I can let her finish venting or help her look at how she answered him."]],"choices":[{"thought":["顺着用户说","Go along with them"],"reply":["你已经说明了为什么会和小周说话。他接着问记录，还要你删同事，难怪你觉得怎么说都不够。你现在可以先把这口气说完。","You explained why you were talking to Xiao Zhou. Then he asked for the messages and told you to delete your coworker. No wonder it felt like nothing you said was enough. Go ahead and get it out."]},{"thought":["陪用户冷静回顾","Help them think it through"],"reply":["你解释了同事关系，他还是要看记录、要你删人，你有理由生气。他后来跟你说，当着同事被你说丢人，他很难受。你收到那条消息时，心里是怎么想的？","You explained he's a coworker and your boyfriend still wanted to see the chat and have you delete him. You have a reason to be angry. Later he told you it hurt to be called embarrassing in front of your coworkers. What went through your mind when you saw that message?"]}],"memories":[]},"8f.F202B5":{"time":"20:23 · 20:12","lines":[["我看见他发消息就烦，以为他又要问我跟小周的事。以前他刷我朋友圈，我还觉得他挺惦记我的。现在真是看见他问我就来气。","I was annoyed the second I saw his message. I thought he was going to ask about Xiao Zhou again. I used to think checking my Moments meant he was thinking about me. Now the second he asks me something I'm pissed off."],["用户想起曾经把关注当成惦记，今晚却一看到男友发消息就担心他又在怀疑她。可以问清她收到的是哪句话。","She used to take his attention as a sign he cared. Tonight she sees a message and worries he's going to question her again. Find out which line she got."]],"choices":[{"thought":["听听她怎么想","Hear what she was thinking"],"reply":["你以前说他半夜刷你朋友圈看你睡没睡，还觉得是他家里给过他很多爱，才这么会关心你。今天你解释过，他还是要看记录，难怪你看到他发消息就来气。后来他跟你说当众被说丢人，你当时回了什么？","You said he checked your Moments at midnight to see if you'd gone to bed, and you wondered if he grew up with a lot of love to be that caring. Today you explained and he still wanted to see the chat. No wonder his messages got to you. When he said it hurt to be called embarrassing in front of everyone, how did you answer?"]}],"memories":[]},"8f.F202B7":{"time":"20:23 · 20:12","lines":[["我以为他还要问小周。我上次都解释过了，他还要看。我以前还觉得他问得多是因为在乎我，现在我一看到他发消息就烦。","I thought he was gonna keep asking about Xiao Zhou. I explained it last time and he still wanted to see the chat. I used to think he asked so much because he cared. Now I get annoyed as soon as I see a message from him."],["用户把今晚的消息和上次被追问联系起来。我记得她曾把男友的关心理解为被惦记，也记得上次解释后仍被索要记录，可以先接住她的火气。","She's connecting tonight's message to being pressed last time. I remember she took his attention as care, and that he asked to see the chat even after she explained. Start by acknowledging why she's angry."]],"choices":[{"thought":["听懂她为什么烦","Hear why she's annoyed"],"reply":["你以前觉得他会关心人，还猜他家里给过他很多爱。上次你说只是同事，他还是要看记录。今天又遇到这事儿，你看到他发消息就觉得他还要追问。你现在有空的话，可以看看他是怎么说被当众说丢人的。","You thought he was good at looking after people and wondered if he grew up with a lot of love. Last time you said Xiao Zhou was just a coworker and he still wanted to see the chat. It happened again tonight. No wonder you expected more questioning. If you have a minute, look at what he said about being called embarrassing in front of everyone."]}],"memories":[]},"8f.F202E":{"time":"20:23 · 20:12","lines":[["就上次也是。跟他说多少遍是同事了？他要是总觉得不查一下就是我有鬼，我还能怎么办，我干脆别跟人讲话了。","It was the same last time. How many times do I have to say he's a coworker? If he always thinks I'm hiding something unless he checks, what am I meant to do? Just stop talking to everybody?"],["用户担心解释之后仍会面对同样的要求，也在借夸张把烦躁说出来。可以承认这种压力，让她先停一会儿。","She's afraid explaining will only lead to the same demands. She's exaggerating to let out her frustration. I can acknowledge the pressure and let her take a break."]],"choices":[{"thought":["回应反复被要求证明的压力","Acknowledge the pressure to keep proving it"],"reply":["同一个问题反复被拿出来问，解释了一遍还要再证明一遍，当然累。你不用现在还追着给他解释同事关系。","Getting asked the same thing over and over is exhausting, especially when you explain and still have to prove it. You don't have to keep trying to explain the coworker thing right now."]}],"memories":[]},"8f.F202O5":{"time":"20:23 · 20:12","lines":[["我就觉得他又要怀疑我。以前他半夜还看我朋友圈，我那时候还挺高兴的。现在我光听他问小周是谁就烦。","I figured he'd found another reason to suspect me. When he'd check my Moments at midnight I used to be happy about it. Now just hearing him ask who Xiao Zhou is gets on my nerves."],["用户想起以前把男友刷朋友圈看成关心，现在觉得自己被怀疑。可以听她说，今晚让她生气的是哪一步。","She used to take him checking her Moments as a sign he cared. Now she feels suspected. I can hear what made her angry tonight."]],"choices":[{"thought":["回想以前的关心","Remember how his care felt before"],"reply":["你以前说，他半夜还看你朋友圈，你觉得自己被惦记，还猜他家里给过他很多爱。今天他听了你解释，还问你要聊天记录，这当然让人烦。他跟你说当众被说丢人不好受时，也在问你和小周的事吗？","You said he checked your Moments at midnight. You felt like he was thinking about you and wondered if he grew up with a lot of love. Tonight you explained, and he still asked to see the chat. Of course that's frustrating. When he said it hurt to be called embarrassing in front of everyone, was he asking about Xiao Zhou then too?"]}],"memories":[]},"8f.F202O7":{"time":"20:23 · 20:12","lines":[["他之前问我几点回家，我还觉得他上心。现在我解释完了，他还让我把记录给他看。上次就这样，凭什么我每次都得证明一遍？","He used to ask when I'd be home and I'd think he cared. Now I explain and he still wants me to show him the chat. Same thing last time. Why do I have to prove it every time?"],["用户把之前的关心和现在的查问说到了一起。我记得她提过上次解释完仍被要求交出记录。可以先认可她这次为什么生气，再请她看看男友另外发来的消息。","She's put his earlier care next to his questions now. I remember her saying he still wanted the chat last time, after she explained. Acknowledge why she's angry now and ask her to look at what else he sent."]],"choices":[{"thought":["接住她被追问的火气","Acknowledge how it felt to be pressed"],"reply":["你以前说他会关心你，还猜是家里给过他很多爱。上次你已经解释小周是同事，他还是要看记录。今天又听到同样的要求，你会觉得自己根本没被相信。后来他说当着同事被你说丢人，你当时看进去了吗？","You said he was good at looking after you and guessed it was because he grew up with a lot of love. You already explained last time that Xiao Zhou was a coworker and he still wanted the chat. Hearing it again would make you feel like he never believed you. When he said you called him embarrassing in front of your coworkers, did that part sink in at the time?"]}],"memories":[]},"8f.F202S":{"time":"20:23 · 20:12","lines":[["我就想，他自己跑来的，还当着小周的面那么问我。怎么到头来又成了我得管他难不难受？我当时就想回完赶紧干活。","I thought, he came on his own and asked me that in front of Xiao Zhou. How did it end up being my job to make sure he's okay? I just wanted to answer and get back to work."],["用户收到消息时还在为当众被怀疑生气。我记得上次她也说过自己故意不回。可以让她回想今晚收到那条消息后自己说了什么。","She was still angry about being questioned in front of people when the message came. I remember her saying she deliberately didn't answer last time. Ask what she sent when she saw that message tonight."]],"choices":[{"thought":["想想她当时怎么回","Think back to how she answered"],"reply":["他突然过来，还当着人问你，你当然会生气。上次你说，你气到故意一天没回他。今晚他跟你说被当众说丢人不好受，你当时怎么回的？","He turned up and asked you that in front of everyone. Of course you're angry. Last time you said you were angry enough to not answer him all day on purpose. Tonight, how did you answer when he told you it hurt to be called embarrassing in front of people?"]}],"memories":[]},"8f.F203B5":{"time":"20:28 · 20:12","lines":[["我就回他是自己跑来的。我那会儿根本不想听他讲什么。上回我气起来也是，手机在手上都懒得理他。","I just said he came on his own. At the time I didn't want to hear anything he had to say. Same as when I got mad last time. I had my phone in my hand and couldn't be bothered to answer."],["用户自己想起两次生气时都不想理男友。她上次说过是故意让他等，今晚则是急着离开同事都在的场面。可以谈她没回应的感受。","She's remembered not wanting to hear him both times. Last time she wanted him to wait. Tonight she wanted to get out of a scene in front of her coworkers. I can talk about the feeling she didn't answer."]],"choices":[{"thought":["想想他当时说的话","Think about what he said"],"reply":["上次你说，你想让他也尝尝干等的滋味。今天你生气，想早点回去，也可以理解。只是他后来专门跟你说那句话伤到了他，你当时没心思听进去。先忙你的，等你没这么气了，再想想要不要回应他。","Last time you wanted him to know how it felt to be left hanging. Tonight it makes sense you were angry and wanted to get back upstairs. Then he specifically told you that line had hurt him, and you weren't in a place to hear it. Finish what you're doing. When you're less angry, you can decide whether to answer that."]}],"memories":[]},"8f.F203B7":{"time":"20:28 · 20:12","lines":[["刚看了，他那条真没问小周。我回他是自己跑来的。那时候我跟上次故意不回也差不多，他说什么我都不想听。","I just checked. He really didn't ask about Xiao Zhou in that one. I said he came on his own. I was pretty much where I was last time when I ignored him. I didn't want to hear anything from him."],["用户发现男友发消息是想说当众被伤到，也主动提起上次故意不回。可以区分两次为什么不想听，再留一点时间给她。","She's seen that he was talking about getting hurt and brought up not answering on purpose last time. Help her distinguish why she didn't want to listen each time and give her a minute."]],"choices":[{"thought":["让用户再想想","Give her time to think"],"reply":["上次你说想让他也等一回。今天你是被当着同事问急了，想赶紧走。后来他跟你说当众被说丢人很难受，你还是没心思听。先把手上的事忙完，再看你想不想回他。","Last time you wanted him to have to wait for once. Tonight you got put on the spot in front of your coworkers and wanted to leave. When he said it hurt to be called embarrassing in front of everyone, you still didn't feel like hearing him out. Finish what you have to do, then see if you want to reply."]}],"memories":[]},"8f.F203E":{"time":"20:28 · 20:12","lines":[["我现在连他消息都不想点开了。还剩一页东西没改，我先干完吧，干不完谁都别想下班。","I don't even want to open his messages right now. I've still got a page to revise. I'll finish it first. No one's going home till it's done."],["用户决定先继续工作，眼下还不愿主动联系男友。可以让她把注意力放回正在做的事。","She's going back to work and doesn't want to contact him. Let her get back to what she was doing."]],"choices":[{"thought":["让她先把手上的事收完","Let her finish what she's doing"],"reply":["好，先把那一页改完。等你空下来，再决定手机上的事要不要接着说。","Okay, finish that page first. When you're free, you can decide whether you want to pick up the conversation on your phone."]}],"memories":[]},"8f.F203O5":{"time":"20:28 · 20:12","lines":[["我刚回去看了。他那条还真没提小周。是我看到他又找我，就觉得他还要问，回他的时候也全在讲这个。","I went back and looked. He really didn't mention Xiao Zhou in that message. I just saw his name pop up and thought he'd ask again, so I made my whole reply about that."],["用户重新看过消息，发现男友那一刻在说被当众伤到。可以回应她刚发现的区别，给她时间。","She reread it and saw he was saying how much it hurt in front of her coworkers. I can name the difference she just noticed and give her some time."]],"choices":[{"thought":["给用户时间想想","Give her time to think"],"reply":["他当时想告诉你，你当着人说他丢人，他很难受。你被怀疑也一样会难受。等忙完了，你可以再想想，要不要回他当时说的这个。","He was trying to tell you it hurt when you called him embarrassing in front of people. Being suspected hurt you too. When you're done working, you can think about whether to answer the part he brought up then."]}],"memories":[]},"8f.F203O7":{"time":"20:28 · 20:12","lines":[["对啊，我以为他还想说我不给看有问题。现在翻回去，那条就说我当着人说他丢人。我没回他这句。","Yeah, I thought he was going to say I must be hiding something if I wouldn't show him. I just looked back, and all that message said was that I called him embarrassing in front of people. I didn't answer that part."],["用户自己重读了对方的消息，发现自己没有回应其中明确说出的伤处。可以给她时间消化，先不用拟下一条消息。","She reread the message and realized she never answered the part about how he'd been hurt. Give her time to take that in before writing anything else."]],"choices":[{"thought":["让她自己想一想怎么接","Let her think about how to answer"],"reply":["你当时还在气他问小周。现在回头看，才发现他也在跟你说，他被当着同事说丢人，心里不好受。你可以先缓一下。等手上的事弄完，再想你愿不愿意回他这句。","You were still angry he asked about Xiao Zhou. Looking back, you can hear he was also saying it hurt to be called embarrassing in front of your coworkers. Take a minute. Once you've finished what you're doing, see if you want to answer that part."]}],"memories":[]},"8f.F203S":{"time":"20:28 · 20:12","lines":[["我就说他自己来的，又说小周是同事。……他都明说了他难受，我还真没理他这句。","I just said he'd come on his own and that Xiao Zhou's a coworker. …He straight up told me it hurt, and I really did ignore that part."],["用户想起来自己一直在解释同事的事，没有回应男友说自己被当众说丢人的感受。可以给她时间想一想。","She remembers she kept explaining about her coworker and didn't answer her boyfriend when he said it hurt to be called embarrassing in front of people. Give her time to think."]],"choices":[{"thought":["让用户缓一缓","Let her take a minute"],"reply":["你说小周是同事，这事说清楚没问题。他当时还想让你听见，被当着人说丢人是什么滋味。先把手上的事做完，等你愿意了，再想要不要跟他说说。","It made sense to explain that Xiao Zhou is a coworker. He was also trying to tell you how it felt when you called him embarrassing in front of everyone. Finish what you're doing. If you feel like it later, you can think about talking to him about that."]}],"memories":[]},"8f.FREADY":{"time":"20:29","lines":[],"choices":[],"memories":[]},"8m.MREADY":{"time":"20:29","lines":[],"choices":[],"memories":[]},"8m.M301R":{"time":"20:34","lines":[["走了一圈。刚才我翻回去看，她说了是同事，我还是要看记录。她不给，我就让她删。她当着同事说我丢人，我想起来还是难受。可我非要看记录、让她删人，这我也做得不对。怎么说？","I took a walk. I looked back at the messages. She told me he's a coworker and I still wanted to see the chat. When she said no I told her to delete him. It still hurts thinking about her calling me embarrassing in front of her coworkers. But insisting on seeing the chat and telling her to delete him was wrong too. How do I say it?"],["用户自己指出了索看聊天和要求删人的问题，也仍在意当众受伤。先帮他写一句具体的道歉，让这条消息能独立说清自己的责任。","He's named what was wrong with asking to see the chat and telling her to delete her coworker. Being hurt in public still bothers him. Help him write a concrete apology that owns his part on its own."]],"choices":[{"thought":["支持用户道歉","Help him apologize"],"reply":["可以发「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」等她愿意聊了，你也可以告诉她，当众被她那么说是什么感觉。","You can send, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” When she's ready to talk, you can also tell her what it felt like when she said that in front of everybody."]}],"memories":[]},"8f.F301RE":{"time":"20:41","lines":[["他刚发我「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」我看见是他说对不起，还是气。我回了「你现在知道不用删了？刚才是谁说我护着他的？」他刚那样问完，现在就一句对不起？","He just sent, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” I saw he was apologizing and I was still angry. I said, “So now you know I don't have to delete him? Who was it who said I was sticking up for him just now?” After the way he questioned me, all he has to say now is sorry?"],["用户刚收到道歉，仍介意对方把拒绝删人说成护着同事。她已经回过一句，可以承认她还在气，让她有时间看接下来会发生什么。","She just got an apology but still feels accused of sticking up for her coworker because she wouldn't delete him. She's answered already. Acknowledge she's still angry and give her time to see what comes next."]],"choices":[{"thought":["先缓缓","Give her a minute"],"reply":["你还记得他刚才说你护着小周，这会儿看到他说对不起，气也不会一下子消掉。你已经回了，现在可以先把手机放一放。","You still remember him saying you were sticking up for Xiao Zhou. Seeing “I'm sorry” isn't going to make you stop being angry right away. You've answered. You can put your phone down now."]}],"memories":[]},"8m.M302RE":{"time":"20:42","lines":[["她回「你现在知道不用删了？刚才是谁说我护着他的？」也是，我刚还真那么说了。看到还是堵得慌，差点又想问她，当着那么多人说我丢人就没事吗？","She said, “So now you know I don't have to delete him? Who was it who said I was sticking up for him just now?” Fair. I really did say that. It still stung. I almost asked if calling me embarrassing in front of everyone was supposed to be fine."],["用户主动道歉后被追问，感到受挫，也承认那句话确实出自自己。可以帮他继续认下这句，给女友时间回应。","He apologized and got challenged. It stung, and he admits he did say that. Help him own the accusation and give her time to respond."]],"choices":[{"thought":["认下刚才的指责并给时间","Own the accusation and give her time"],"reply":["她问的是你刚才说她护着小周，你可以认下这句。发「嗯，是我说的。你已经跟我说清楚了，是我还揪着不放。你先忙，等你忙完我们再说。」发完让她先忙。","She's asking about you saying she stuck up for Xiao Zhou. You can own that: “Yeah, I said it. You'd already explained it and I wouldn't let it go. Get back to work. We can talk when you're done.” Then let her finish what she's doing."]}],"memories":[]},"8f.F302RE":{"time":"20:48","lines":[["他又发了「嗯，是我说的。你已经跟我说清楚了，是我还揪着不放。你先忙，等你忙完我们再说。」我还以为他又要说我偏着小周。这次他倒真没往回绕。我刚在想我当着那几个人说他丢人，他后来都单独来跟我说了，我还回他自己来的。换我我也不好受。 我先把这页收完，等会儿回他。","He sent another one: “Yeah, I said it. You'd already explained it and I wouldn't let it go. Get back to work. We can talk when you're done.” I thought he'd say I was taking Xiao Zhou's side again. This time he really didn't go back to that. I was thinking, I called him embarrassing in front of those people. He came to me separately to say how it felt, and I just told him he'd come on his own. I'd feel bad too. I'll finish this page and get back to him in a bit."],["用户从收到的第二条消息看见男友承认刚才的指责，也主动说起自己伤人的两句话。可以先确认她被怀疑的委屈，再帮她说清自己想道歉的部分。","His second message owned the accusation. Now she's talking about the two things she said that hurt him. Acknowledge what it felt like to be suspected and help her say what she'd like to apologize for."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["他刚来就问小周，你烦是有原因的。你现在也想跟他说，你也听见他为什么难受了。可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」","Of course you were annoyed when he showed up and asked about Xiao Zhou. You also want him to know you heard why he was hurt. You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.”"]}],"memories":[]},"8f.F301E":{"time":"20:50","lines":[["改完了。手机放那儿半天，他也没再发。我刚想了一下，上次吵完也还是我去找他的。这次我真不想再过两天当没事了。想分了，怎么跟他说？","Done with the revisions. My phone's been sitting there forever and he hasn't sent anything else. I was just thinking I was the one who went to him after our last fight, too. I really don't want to wait a couple of days and act like nothing happened again. I want to break up. How do I tell him?"],["用户在忙完后明确提出分手，想知道怎么开口。可以帮她用自己的理由把决定说清，避免再打开关于同事的争论。","She's finished work and made it clear she wants to break up. Help her give her reasons without starting another argument about her coworker."]],"choices":[{"thought":["把分手决定说清楚","Say clearly that it's over"],"reply":["如果你确定了，可以发「上次你要看聊天记录，今天又要我删人。我不想以后还这么吵。我们分手吧。」说到这里就够了。","If you're sure, you can send, “Last time you asked to see my chat history. Today you told me to delete him. I don't want to keep having this fight. Let's break up.” That's enough."]}],"memories":[]},"8m.M301E":{"time":"20:54","lines":[["她发了「上次你要看聊天记录，今天又要我删人。我不想以后还这么吵。我们分手吧。」​她说分手。怎么就分手了啊？我现在都不知道该回什么。","She sent, “Last time you asked to see my chat history. Today you told me to delete him. I don't want to keep having this fight. Let's break up.” She said break up. How did we end up breaking up? I don't even know what to say now."],["用户刚收到分手消息，还没法接受，也不知道怎么回。现在可以先陪他缓一缓，给他一点时间。","He just got the breakup message and can't quite take it in or figure out what to say. Stay with him and give him time."]],"choices":[{"thought":["陪用户缓一缓","Give him a minute"],"reply":["你们刚才还在吵，突然看到她说要分手，谁都很难一下接得住。先不用急着回她，我在这儿。","You were just arguing. Then you saw she wanted to break up. That's hard to take in all at once. You don't have to answer right away. I'm here."]}],"memories":[]},"8f.F301ER":{"time":"20:58","lines":[["总算改完了。他一直没再发。我刚又看了他发的消息。被我当着同事说丢人，他确实挺难受的。我当时急着上楼，也不想在同事面前跟他吵。可我说什么不好，非说他丢人。后面他提起来，我还回他自己来的。唉，我想给他道个歉。","Finally finished the revisions. He hasn't sent anything else. I just read his messages again. It really did hurt him when I called him embarrassing in front of my coworkers. I wanted to get upstairs and didn't want to fight in front of them. But of all the things I could've said, I had to call him embarrassing. When he brought it up later, I told him it was his own fault for coming. Ugh. I want to apologize."],["用户工作结束后重新读了对方的消息，指出了自己在现场和事后说的两句话。她也有被当面质问的委屈。可以帮她用一句话说明当时的感受，再具体道歉。","She reread his message after work and picked out what she said in front of her coworkers and afterwards. She was hurt by being questioned too. Help her say how she felt and give a specific apology."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」你可以为自己的话道歉，至于你被问得不舒服，等他也愿意聊了还可以说。","You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” You can apologize for what you said. When he's ready to talk, you can still tell him how it felt to be questioned."]}],"memories":[]},"8f.F301RR":{"time":"20:58","lines":[["我刚改完。刚才改方案的时候我老想起我当着小周他们的面说他丢人。我刚才就想跟他说对不起。手机一拿起来，看见他先发了「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」我也想跟他说声对不起。","I just finished. While I was fixing the proposal, I kept thinking about calling him embarrassing in front of Xiao Zhou and the others. I was going to say sorry. I picked up my phone and he'd already sent, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” I want to say sorry too."],["用户在看到道歉前已经回想过自己当众伤人的话，现在收到了男友收回两个要求的消息。可以帮她表达自己的歉意，同时保留她被质问的感受。","She'd already been thinking about what she said in front of her coworkers before she saw his apology. He's now taken back both demands. Help her apologize while keeping how she felt about being questioned."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」你愿意道歉，就先把自己想说的话告诉他。","You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” If you want to apologize, start with what you want him to hear."]}],"memories":[]},"8m.M301ER":{"time":"21:00","lines":[["她刚给我发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」我看了还是来气。回了「现在说这个有什么用？我刚才跟你说的时候，你怎么不听？」我说难受的时候她听一耳朵不行吗？","She just sent, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” I still got mad reading it. I answered, “What's the point of saying this now? When I told you just now, why didn't you listen?” When I told her it hurt, would it have killed her to listen for a second?"],["用户收到道歉，仍介意自己当时没被听见。回应这份迟来的感受，让他有时间看完对方说的具体内容。","He got the apology and is still upset she didn't listen when he first told her. Acknowledge the delayed response and give him time to take in what she said."]],"choices":[{"thought":["先缓缓","Give him a minute"],"reply":["你刚才就想让她听见你被当众说丢人有多难受。她现在才回应，你一时还在气也正常。你已经回了，可以缓一缓，看看她接下来怎么说。","You wanted her to hear how much it hurt when she called you embarrassing in front of people. She's only answering now. It makes sense you're still angry. You've said your piece for now. Take a minute and see what she says next."]}],"memories":[]},"8m.M302E":{"time":"21:00","lines":[["我刚想问她是不是还在气头上，打了又删了。唉，就这样吧。今天我也实在没劲再吵了。","I almost asked if she was still angry. Typed it and deleted it. Ah, let's leave it. I really don't have it in me to fight anymore tonight."],["用户想追问，又把打好的字删了。他已经很累，可以陪他把这会儿撑过去。","He wanted to ask again and deleted what he'd typed. He's exhausted. I can sit with him for a bit."]],"choices":[{"thought":["陪用户歇一会儿","Let him rest for a bit"],"reply":["你本来还想问清楚，删掉那句也挺难的。今天已经够累了，先歇一会儿。","You still wanted to ask. Deleting that took something, too. Today's already been a lot. Rest for a bit."]}],"memories":[]},"8m.M302RR":{"time":"21:01","lines":[["她刚回我「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」她也承认刚才说话伤到我了。我还在这附近，想等她忙完见一面。","She wrote, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” She said herself that what she said hurt me. I'm still nearby. I want to see her when she's done with work."],["用户收到女友明确的道歉，想当面说清。只依据他收到的消息，帮他先确认见面意愿。","He's received a specific apology and wants to talk face-to-face. Go by what he actually received and help him ask whether she's up for meeting."]],"choices":[{"thought":["问她忙完愿不愿意见面","Ask if she wants to meet after work"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」先看她方不方便，见了面再慢慢说今天的事。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” See if she's free first. You can talk through what happened once you meet."]}],"memories":[]},"8m.M303RE":{"time":"21:01","lines":[["她刚回我「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」她承认刚才说话伤到我了。我现在没刚才那么堵了。我想跟她见个面，我还没走远。","She wrote, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” She admitted what she said hurt me. I don't feel as wound up now. I want to see her. I haven't gone far."],["用户收到针对楼下和事后回应的具体道歉，愿意当面谈。可以建议他先问对方忙完后是否方便见面。","He's received an apology about what she said downstairs and later over text. He's ready to talk in person. He can ask if she's free when work is done."]],"choices":[{"thought":["问她忙完愿不愿意见面","Ask if she wants to meet after work"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」她方便的话，当面讲比隔着手机猜彼此的语气容易些。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” If she's free, it'll be easier to talk in person than guess at each other's tone over text."]}],"memories":[]},"8f.F302E":{"time":"21:02","lines":[["发了。手机扣在桌上了，我现在不想看他回什么。先回家吧。","Sent it. My phone's facedown on the desk. I don't want to see what he says right now. I'll go home first."],["用户已经发出明确的分手消息，暂时不想再看手机。可以回应她接下来的安排，给她一点时间。","She's sent a clear breakup message and doesn't want to look at her phone right now. Acknowledge her next step and give her time."]],"choices":[{"thought":["陪用户把这一晚收住","Help her get through the evening"],"reply":["那就先回家。你已经把决定说清楚了，什么时候再看手机，可以等你到家再想。","Go home first. You've made your decision clear. You can decide when to look at your phone once you're home."]}],"memories":[]},"8m.M303E":{"time":"21:02","lines":[["算了。","Forget it."],["用户只回了两个字，可以安静陪他待一会儿。","He only said two words. I can stay here quietly for a while."]],"choices":[{"thought":["安静陪着","Stay with him quietly"],"reply":["嗯。","Mm."]}],"memories":[]},"8f.F302ER":{"time":"21:07","lines":[["他回「现在说这个有什么用？我刚才跟你说的时候，你怎么不听？」我看了挺堵的。我知道我刚才确实没听他。可我都先认了，我现在又有点不想说了。","He answered, “What's the point of saying this now? When I told you just now, why didn't you listen?” That stung. I know I really didn't listen to him earlier. But I made the first move and admitted it, and now I kind of don't want to talk anymore."],["用户主动道歉后受挫，也明白对方还在介意当时没有被听见。可以先回应她的感受，再帮她把当时为何想离开和愿意道歉都说明白。","It hurt to have her apology answered that way. She knows he's still upset she didn't listen. Acknowledge that it hurt and help her say why she wanted to leave and what she's sorry for."]],"choices":[{"thought":["把当时为什么想走说清楚","Explain why she wanted to leave"],"reply":["你认真开了口，看到他还气，心里堵也正常。你要是还想给他留句话，可以发「我那会儿就想赶紧上楼，不想当着同事吵。可那句丢人确实说得难听。你说你难受，我也没好好听。你先缓缓，晚点说也行。」发完给他一点时间。","You meant what you said. It makes sense it hurt to see he was still angry. If you want to leave him one more message, try, “I just wanted to get upstairs. I didn't want to fight in front of my coworkers. But calling you embarrassing was harsh. Then you told me it hurt and I didn't listen. Take a minute. We can talk later.” Then give him a little time."]}],"memories":[]},"8m.M302ER":{"time":"21:13","lines":[["她又发了「我那会儿就想赶紧上楼，不想当着同事吵。可那句丢人确实说得难听。你说你难受，我也没好好听。你先缓缓，晚点说也行。」我看着看着就不太想怼她了。站她那儿想，我没等她回就过去了，一开口还是问小周。换我我也烦。我也得跟她道个歉吧？","She sent another message: “I just wanted to get upstairs. I didn't want to fight in front of my coworkers. But calling you embarrassing was harsh. Then you told me it hurt and I didn't listen. Take a minute. We can talk later.” The more I read it, the less I wanted to snap back. From her side, I went over without waiting for her to answer, and the first thing I did was ask about Xiao Zhou. I'd be annoyed too. I should apologize, right?"],["用户看到女友再次回应当众那句话，主动提到自己没等确认、带着猜疑过去。用户已经想道歉，可以帮他说清自己哪里做得不好。","Her second message addressed what she said in front of people. He's now brought up coming without checking and asking her out of suspicion. He's ready to apologize. Help him say what he did wrong."]],"choices":[{"thought":["支持用户道歉","Help him apologize"],"reply":["可以发「我不该没等你回就跑过去，也不该一见面就那么问你。对不起。」把你想说的发给她，剩下的等她有空再聊。","You can send, “I shouldn't have come over without waiting for your reply. I shouldn't have questioned you like that as soon as I saw you. I'm sorry.” Tell her what you want her to hear. You can talk about the rest when she's free."]}],"memories":[]},"8f.F303ER":{"time":"21:16","lines":[["他刚回我「我不该没等你回就跑过去，也不该一见面就那么问你。对不起。」他也跟我道歉了。我刚才还以为他真不想理我了。我缓一会儿吧。","He replied, “I shouldn't have come over without waiting for your reply. I shouldn't have questioned you like that as soon as I saw you. I'm sorry.” He apologized too. I thought he really didn't want to talk to me anymore. I'll take a minute."],["用户收到男友的道歉，意外发现对方还愿意开口。她自己想缓一会儿，可以支持这个决定。","His apology surprised her. He's still willing to talk. She wants a little time, and I can support that."]],"choices":[{"thought":["先缓缓","Give her a minute"],"reply":["他跟你道歉了，也认了自己没等你回就跑过来。你可以先缓一缓，等想说的时候再聊。","He apologized and owned that he came over without waiting for your reply. Take a minute. You can talk more when you're ready."]}],"memories":[]},"8m.M303ER":{"time":"21:17","lines":[["道歉发出去了。我还是想见她。我今天做得不好，想当面跟她说。现在问她能不能见一面，可以吗？","I sent the apology. I still want to see her. I didn't handle today well, and I want to say that in person. Is it okay to ask if we can meet now?"],["用户已发道歉，也想继续谈具体发生的事。可以给一句简短邀约，让女友按工作情况答复。","He's sent an apology and wants to talk about what happened. Give him a short invitation she can answer around work."]],"choices":[{"thought":["把想当面谈说出来","Say he'd like to talk in person"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」她手头的事忙完，你们再找个地方坐下。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” Once she's done, you can find somewhere to sit."]}],"memories":[]},"8f.F304G":{"time":"21:21","lines":[["他刚问「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」我收个尾就下去。好久没在这么晚的时候还约他在楼下见了。回他什么？","He asked, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” I'll go down once I've finished up. It's been a while since I met him downstairs this late. What do I say?"],["用户收到见面邀约，也愿意下楼谈。双方已分别发出具体歉意，可以帮她确认见面意愿和联系时间。","She got the invitation and wants to go down and talk. They've both sent specific apologies. Help her say yes and let him know when to expect a message."]],"choices":[{"thought":["确认忙完发消息、楼下见","Confirm she'll text and meet him downstairs"],"reply":["可以回「好。我忙完给你发消息，楼下见。」你忙完再叫他过来，见到面有时间慢慢说。","You can reply, “Okay. I'll text you when I'm done. See you downstairs.” Let him know when you're done. You'll have time to talk when you see each other."]}],"memories":[]},"8m.M304G":{"time":"21:22","lines":[["她回了「好。我忙完给你发消息，楼下见。」行，我等她发消息。","She said, “Okay. I'll text you when I'm done. See you downstairs.” Okay. I'll wait for her text."],["用户收到明确的见面答复，双方都已经把各自的一部分说出来。眼下只需等她约好的消息。","She's said yes and both of them have said some of what they wanted to say. All he needs to do is wait for her message."]],"choices":[{"thought":["确认楼下见面","Confirm they'll meet downstairs"],"reply":["好。等她发消息你再过去，给她把手头的事收完。","Okay. Wait for her to text before you go over. Give her time to finish what she's doing."]}],"memories":[]},"8f.F305G":{"time":"That Night · After Meeting","lines":[["刚在楼下找了个地方坐了会儿。我跟他说当着人说他丢人确实不该。也跟他说下次来之前先问我，别到了才让我选下不下去。他说好。我也说了，以后真气得说不下去，我跟他说晚点聊。两个人才发现都还没正经吃晚饭，去找点热的。","We just found somewhere to sit downstairs. I told him I shouldn't have said that about him in front of people. I also told him to check with me before he comes next time, instead of having me decide whether to come down once he's there. He said okay. I said if I'm ever too angry to talk, I'll tell him we'll talk later. Then we realized neither of us had actually eaten dinner. We're looking for something hot."],["用户已经当面谈过，既承认了自己的话，也和男友约好了下次到公司前先确认、想暂停时先说一声。可以回应这两件具体的事，接上他们现在要去吃饭的安排。","They've talked in person. She owned what she said, and they agreed to check ahead before a visit and to say when they need a break. Acknowledge those two things and pick up with them getting dinner."]],"choices":[{"thought":["接住他们终于坐下来谈过","Acknowledge that they sat down and talked"],"reply":["你们把今天最难受的几句说出来，也约好了下次遇到这种情况怎么开口。现在可以一起吃点热的，把那顿惦记了一天的饭吃上。","You both said what hurt most today and agreed on what to say the next time something like this happens. Go get something hot together. You've been looking forward to this dinner all day."]}],"memories":[]},"8m.M305G":{"time":"That Night · After Meeting","lines":[["刚见完。她说我发要过去的时候她在改东西，回工位才看到。我跟她说我就是很盼今天，临时改期我有点蔫，但也不该没等她回就跑去，还非让她证明。她说下次要是气得想先不聊，会先说一声。我也答应了，去找她前先问好。我们正找吃的呢。","We just talked. She said she was revising something when I texted about coming over and didn't see it till she got back to her desk. I told her I'd been looking forward to today and felt deflated when the plans changed. I still shouldn't have come without waiting for an answer or tried to make her prove anything. She said if she's ever too angry to keep talking she'll let me know first. I said I'd check with her before coming over. We're looking for something to eat now."],["用户当面说清了自己在意纪念日，也承认了未等回复和逼对方证明的做法。两人谈出了下一次能做到的安排，可以回应这个具体进展。","He told her how much the anniversary mattered and owned showing up without waiting and demanding proof. They made a plan they can use next time. Acknowledge that concrete progress."]],"choices":[{"thought":["确认这次谈成的约定","Acknowledge what they agreed on"],"reply":["你们说清了各自当时在意什么，也定了两件下次能做的事。今天的纪念日饭还赶得上，去吃点热的吧。","You both said what mattered to you and came up with two things you can actually do next time. It's still your anniversary. Go get something hot."]}],"memories":[]}}`),e0=JSON.parse(`{"他请助手推荐桌游店，想选一家适合多人聚会的店。":"He asked the assistant to recommend a board game café that could fit a large group.","朋友约她去桌游店，她让助手查了地点。":"A friend invited her to a board game café. She asked the assistant where it was.","出门时间紧，她问要不要化妆。":"She was short on time and asked whether to put on makeup.","他到了一家临时改换的桌游店，现场有不少陌生人。":"He arrived at the board game café after a last-minute change of venue and found a lot of unfamiliar faces.","他到了桌游店，发现除了朋友几乎都不认识。":"He arrived at the café and realized he barely knew anyone besides his friend.","他和一位戴耳机的人搭话，起初误以为对方不想理他。":"He tried talking to someone wearing earbuds and initially thought she was ignoring him.","桌游开始后，他留意到一位像是表妹同桌的女生。":"Once the game started, he noticed a girl who looked like his cousin's deskmate.","他留意到刚进来的女生的眼妆和笑声，觉得她像是表妹的同桌。":"He noticed the new arrival's eye makeup and laugh and thought she might be his cousin's deskmate.","他说下一局要开始了，先不聊了。":"He said the next round was about to start and ended the chat.","她出地铁后问了去桌游店的路。":"She asked how to get to the board game café after coming out of the subway.","她说没按助手的指路找到店，后来向同学问到了位置。":"The assistant's directions didn't get her there. A classmate sent her the location.","她问起一件衣服的牌子和价格。":"She asked about a jacket's brand and price.","桌游结束后，他向助手回顾了和那位女生的互动。":"After the game, he told the assistant what happened between him and the girl.","他想和她交换微信，又怕开口太唐突。":"He wanted to exchange WeChat contacts with her but worried it would feel awkward to ask.","他打算借舍友的名义去问表妹。":"He planned to ask his cousin under the pretense that it was for his roommate.","他当面问她能不能加微信，她请同桌帮忙推联系方式。":"He asked in person whether they could add each other on WeChat. She asked her deskmate to share her contact.","他重新想了想，决定先不问。":"He thought it over and decided not to ask for now.","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。":"She met her deskmate's older cousin at board games and wanted to get in touch, but hesitated to ask her deskmate.","她打算去问同桌。":"She decided to ask her deskmate.","他当面问能不能加微信，她答应并请同桌转推。":"He asked to add her on WeChat in person. She said yes and asked her deskmate to share her contact.","她决定先不问。":"She decided not to ask for now.","加上微信后，他琢磨怎么开场，又问起她回消息的速度。":"After they connected on WeChat, he wondered what to say first, then asked about her reply speed.","他睡前收住话题，第二天早上她照常找他聊天。":"He ended the chat before bed. She messaged him again the next morning.","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。":"He kept the board game conversation going. The next day he hadn't heard from her by daytime.","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。":"They kept talking. He noticed she sometimes shared things first and wondered if he messaged too often.","他试着少发消息，等回复时还是觉得不踏实。":"He tried messaging less and still felt uneasy waiting for replies.","他仍然频繁发消息，发现她回得一如既往地慢。":"He kept messaging often and found she replied just as slowly as before.","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。":"After connecting on WeChat, they talked for a few days. She told the assistant she often had no energy to reply after work.","她告诉他自己累了，收到一长串关心的话。":"She told him she was tired and got a long, concerned reply.","她发了个表情包，他回了一句让她早点休息。":"She sent a sticker. He told her to get some rest.","他夸她开朗，她向助手说起自己的社交生活。":"He called her outgoing. She told the assistant about her social life.","她在和闺蜜吃饭时说起他。":"She brought him up over dinner with her closest friends.","她向助手谈到自己累时习惯一个人待着。":"She told the assistant she usually likes to be alone when she's tired.","她说他问起家里的事，自己岔开了话题。":"She said he asked about her family, so she changed the subject.","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。":"He asked her to dinner. They rescheduled and met, and he told the assistant how the date went.","他和助手商量表白，发出消息后收到她愿意试试的答复。":"He talked through how to tell her he liked her. After he sent the message, she said she wanted to give it a try.","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。":"She had to move their date to Sunday because of work. Afterwards she told the assistant how it felt to have dinner and walk with him.","收到表白后她犹豫过，最后回复说愿意试试。":"She hesitated after he told her he liked her, then said she wanted to give it a try.","确定关系后，他用两人的照片发了朋友圈。":"Once they got together, he posted a photo of the two of them on Moments.","他提议吃青提蛋糕庆祝，后来把合照原图发给她。":"He suggested celebrating with green grape cake and later sent her the original photo.","他问她能不能一起过满月纪念日，又来问礼物怎么准备。":"He asked if they could spend their one-month anniversary together, then asked the assistant for gift ideas.","他下单洗了两张合照。":"He ordered two prints of their photo.","他先记下纪念日，准备以后再想礼物。":"He saved the date and decided to think about a gift later.","她看到了他发的合照，来问自己要不要也发一条。":"She saw the photo he'd posted and asked if she should post one too.","她发了朋友圈，同事来问照片里的人是谁。":"She posted on Moments. A coworker asked who was in the photo.","她把照片发给闺蜜，闺蜜打来电话。":"She sent the photo to her best friend, who called her.","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。":"She asked him for the original photo and mentioned his idea of celebrating with green grape cake.","她答应把满月纪念日那天留给他，并记进了日历。":"She agreed to save the one-month anniversary for him and put it in her calendar.","她赶项目、回消息变少，他说自己还是常想找她。":"She was busy finishing a project and replied less often. He said he still wanted to talk to her a lot.","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。":"He recounted the fight after her department dinner, including his demand to see her private chat with a coworker.","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。":"He admitted he shouldn't have asked to see her chat history. She didn't reply all day, and he told the assistant about waiting and what he'd started to imagine.","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。":"She was trying to finish a project and asked how to tell him in advance about her department dinner.","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。":"After the dinner, he pressed her about her coworker and asked to see their messages. She told the assistant what happened.","她看到了他的消息，告诉助手自己故意没有回复。":"She saw his messages and told the assistant she didn't answer on purpose.","她还不想和他说话，开始考虑找别人聊聊。":"She wasn't ready to talk to him and thought about talking to someone else.","她决定找闺蜜聊聊。":"She decided to talk to her best friend.","她打算找同桌聊，想先请同桌别替她联系男友。":"She planned to talk to her deskmate and ask her not to contact her boyfriend on her behalf.","她约他见面，也告诉他自己前一天是故意没回。":"She asked to meet and told him she hadn't replied on purpose the day before.","她发来见面邀请，他还在犹豫要不要问前一天的事。":"She asked to meet. He was still unsure whether to ask what happened the day before.","两人约好下午四点在地铁口见，他来问吃什么比较合适。":"They agreed to meet at four at the subway exit. He asked what would be good to eat.","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。":"When they met, they talked about her not replying on purpose and his suspicions about her coworker. They discussed what to do differently next time.","她提到自己气上了头，他换了话题。":"She said she'd gotten carried away because she was angry. He changed the subject.","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。":"He said he wouldn't jump to conclusions about her coworker and didn't want to keep waiting without an answer.","他们一起吃了饭，没有提起周五的争执。":"They had dinner without bringing up Friday's fight.","闺蜜问她还想不想见他，她说想见。":"Her best friend asked if she still wanted to see him. She said she did.","同桌听她说完，劝她把自己介意的事告诉男友。":"Her deskmate heard her out and suggested she tell her boyfriend what had upset her.","她想当面说，最后发出了见面邀请。":"She wanted to talk in person and sent him an invitation to meet.","发出邀请时，她也写了自己是故意让他等。":"In the invitation, she wrote that she'd kept him waiting on purpose.","他答应见面。她和他约好下午四点在地铁口碰头。":"He agreed to meet. They settled on four at the subway exit.","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。":"When they met, she said she'd kept him waiting on purpose and promised to tell him when she needed a break from talking.","她说自己当时气上了头，随后两人聊了别的。":"She said she'd gotten carried away because she was angry. They went on to talk about something else.","她解释为什么当时不愿回消息，随后和他一起吃了饭。":"She explained why she hadn't wanted to answer, then they had dinner.","他们一起吃了饭，没有再提争执。":"They had dinner and didn't bring up the fight again.","她向助手说起吃饭时拍糊的照片。":"She told the assistant about the blurry photos he took at dinner.","交往满一个月，她打算给男友带点东西，问助手买什么。":"On their one-month anniversary, she asked what little gift she could get her boyfriend.","她买了蛋糕，放在办公室冰箱里。":"She bought a cake and put it in the office fridge.","她买了盒曲奇，放进包里。":"She bought a box of cookies and put it in her bag.","交往满一个月，他想给女友带杯喝的，问助手去哪儿买。":"On their one-month anniversary, he asked where to buy his girlfriend a drink.","他决定去青杏买饮料。":"He decided to get a drink from Green Apricot.","他打算出门后再挑饮品店。":"He decided to pick a drink shop after he headed out.","她临时加班，跟男友商量把晚饭改到另一天。":"She had to work late and asked him to move dinner to another day.","他收到晚饭改期的消息。虽然答应了，心里还是有点失落。":"He agreed to reschedule dinner, though he still felt a little disappointed.","他买了吃的和喝的，没等到回复就出发了。":"He bought food and a drink and headed over without waiting for a reply.","他在她公司楼下碰见她和同事，当众起了争执。他介意她说自己丢人。":"He ran into her and her coworker downstairs from her office. They argued in front of other people. It bothered him that she'd called him embarrassing.","她下楼拿外卖时碰见突然到访的男友，被他当着同事的面追问。":"She went downstairs to pick up takeout and ran into her boyfriend unexpectedly. He questioned her in front of her coworkers.","他来复述争执，提到自己要求看私聊、让她删除同事，也问她有没有回应他的委屈。":"He recounted the fight, including asking to see the chat and telling her to delete her coworker. He asked if she'd answered the part about how much it hurt.","她来复述争执，说自己拒绝交出聊天记录，也拒绝删除同事。":"She recounted the fight and said she'd refused to show her messages or delete her coworker.","他和助手借过去的经历重新回顾这次争执。":"He and the assistant used past experiences to look at the fight again.","她和助手借过去的经历重新回顾这次争执。":"She and the assistant used past experiences to look at the fight again.","他向助手说起自己当时没有被听见的感受。":"He told the assistant what it felt like to go unheard during the fight.","她向助手说起自己被怀疑时的感受。":"She told the assistant what it felt like to be suspected.","他承认索看私聊和要求删人不妥，向女友道歉。":"He apologized for asking to see her messages and telling her to delete her coworker.","她收到道歉后仍然生气，读到他第二次回应后，也想为自己说过的话道歉。":"She was still angry after his apology. After his second message, she wanted to apologize for what she'd said too.","道歉被反问后，他承认自己刚才的指责，让她晚点再回。":"When she challenged his apology, he owned the accusation and gave her time before answering again.","她想起自己当众说的话，决定为此道歉。":"She remembered what she'd said in front of everyone and decided to apologize for it.","他收到道歉时仍有怨气，读完她后续的回应后，也承认自己不该突然去找她并当面质问。":"He was still angry when he got her apology. After reading what she said next, he admitted he shouldn't have shown up unexpectedly and questioned her.","道歉被顶回来后，她说明了当时为什么急着走，随后也收到他的道歉。":"After he pushed back on her apology, she explained why she'd wanted to leave in a hurry. He then apologized too.","他来问怎么约她见面，想当面说清楚。":"He asked how to invite her to meet, so they could talk in person.","两人约好等她忙完后在楼下见。":"They arranged to meet downstairs once she finished work.","两人当面谈过，约好到访前先确认，需要冷静时先说一声。":"They talked in person and agreed to check before a visit and to say when they needed a minute to cool off.","她决定结束关系，发出分手消息后准备回家。":"She decided to end the relationship. After sending the breakup message, she got ready to go home.","他收到分手消息，一时不知道怎么回，后来放下了手机。":"He got the breakup message and didn't know how to answer. Later, he put his phone down.","本次会话还有其他已处理消息。":"Other messages were processed in this session."}`),t0=["The Board Game Meetup","After Adding Each Other on WeChat","The First Date and the Confession","Their First Day Together","The First Fight","Meeting on Sunday","Rescheduling the Anniversary","The Argument Downstairs","After the Argument"],n0={"桌游局结束后，两人没有交换微信。":"After the board game meetup, they didn't exchange WeChat contacts.",分手:"Ending · They Break Up",和好:"Ending · They Make Up"},Hr={beats:Pv,summaries:e0,titles:t0,endings:n0},dg=ie.createContext({language:"zh",setLanguage:r=>{}});function In(){const{language:r,setLanguage:s}=ie.useContext(dg);return{language:r,setLanguage:s,t:(c,u)=>r==="en"?u:c}}function fg(){const{language:r,setLanguage:s}=In();return _.jsxs("div",{className:"language-switch",role:"group","aria-label":"Language / 语言",children:[_.jsx("button",{type:"button",lang:"en","aria-pressed":r==="en",onClick:()=>s("en"),children:"EN"}),_.jsx("button",{type:"button",lang:"zh-CN","aria-pressed":r==="zh",onClick:()=>s("zh"),children:"中文"})]})}const Ka=Hr.beats,i0=Hr.titles,a0=Hr.summaries,o0=Hr.endings;function l0(r){var f,m;const s=Ka[r.beatId],c=r.id.match(/:(?:(reply):)?(\d+)$/),u=(c==null?void 0:c[1])==="reply"?(f=s==null?void 0:s.choices[Number(c[2])])==null?void 0:f.reply:c?s==null?void 0:s.lines[Number(c[2])]:void 0;return((m=u==null?void 0:u[0])==null?void 0:m.trim())===r.text.trim()?u[1]:r.text}function Lh(r){var c;const s=(c=Ka[r.beatId])==null?void 0:c.memories.find(u=>u.label===r.label);return{label:(s==null?void 0:s.name)??r.label,text:(s==null?void 0:s.quote[1])??r.text}}function r0(r){var s;return((s=Object.values(Ka).flatMap(c=>(c==null?void 0:c.memories)??[]).find(c=>c.label===r))==null?void 0:s.name)??r}function s0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Yt={},Er={},Ci={},Hy;function Wo(){if(Hy)return Ci;Hy=1;function r(w){return typeof w>"u"||w===null}function s(w){return typeof w=="object"&&w!==null}function c(w){return Array.isArray(w)?w:r(w)?[]:[w]}function u(w,b){if(b){const S=Object.keys(b);for(let v=0,p=S.length;v<p;v+=1){const g=S[v];w[g]=b[g]}}return w}function f(w,b){let S="";for(let v=0;v<b;v+=1)S+=w;return S}function m(w){return w===0&&Number.NEGATIVE_INFINITY===1/w}return Ci.isNothing=r,Ci.isObject=s,Ci.toArray=c,Ci.repeat=f,Ci.isNegativeZero=m,Ci.extend=u,Ci}var gh,Ry;function $o(){if(Ry)return gh;Ry=1;function r(c,u){let f="";const m=c.reason||"(unknown reason)";return c.mark?(c.mark.name&&(f+='in "'+c.mark.name+'" '),f+="("+(c.mark.line+1)+":"+(c.mark.column+1)+")",!u&&c.mark.snippet&&(f+=`

`+c.mark.snippet),m+" "+f):m}function s(c,u){Error.call(this),this.name="YAMLException",this.reason=c,this.mark=u,this.message=r(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,s.prototype.toString=function(u){return this.name+": "+r(this,u)},gh=s,gh}var ph,Dy;function u0(){if(Dy)return ph;Dy=1;const r=Wo();function s(f,m,w,b,S){let v="",p="";const g=Math.floor(S/2)-1;return b-m>g&&(v=" ... ",m=b-g+v.length),w-b>g&&(p=" ...",w=b+g-p.length),{str:v+f.slice(m,w).replace(/\t/g,"→")+p,pos:b-m+v.length}}function c(f,m){return r.repeat(" ",m-f.length)+f}function u(f,m){if(m=Object.create(m||null),!f.buffer)return null;m.maxLength||(m.maxLength=79),typeof m.indent!="number"&&(m.indent=1),typeof m.linesBefore!="number"&&(m.linesBefore=3),typeof m.linesAfter!="number"&&(m.linesAfter=2);const w=/\r?\n|\r|\0/g,b=[0],S=[];let v,p=-1;for(;v=w.exec(f.buffer);)S.push(v.index),b.push(v.index+v[0].length),f.position<=v.index&&p<0&&(p=b.length-2);p<0&&(p=b.length-1);let g="";const k=Math.min(f.line+m.linesAfter,S.length).toString().length,D=m.maxLength-(m.indent+k+3);for(let V=1;V<=m.linesBefore&&!(p-V<0);V++){const ne=s(f.buffer,b[p-V],S[p-V],f.position-(b[p]-b[p-V]),D);g=r.repeat(" ",m.indent)+c((f.line-V+1).toString(),k)+" | "+ne.str+`
`+g}const U=s(f.buffer,b[p],S[p],f.position,D);g+=r.repeat(" ",m.indent)+c((f.line+1).toString(),k)+" | "+U.str+`
`,g+=r.repeat("-",m.indent+k+3+U.pos)+`^
`;for(let V=1;V<=m.linesAfter&&!(p+V>=S.length);V++){const ne=s(f.buffer,b[p+V],S[p+V],f.position-(b[p]-b[p+V]),D);g+=r.repeat(" ",m.indent)+c((f.line+V+1).toString(),k)+" | "+ne.str+`
`}return g.replace(/\n$/,"")}return ph=u,ph}var wh,_y;function Ut(){if(_y)return wh;_y=1;const r=$o(),s=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],c=["scalar","sequence","mapping"];function u(m){const w={};return m!==null&&Object.keys(m).forEach(function(b){m[b].forEach(function(S){w[String(S)]=b})}),w}function f(m,w){if(w=w||{},Object.keys(w).forEach(function(b){if(s.indexOf(b)===-1)throw new r('Unknown option "'+b+'" is met in definition of "'+m+'" YAML type.')}),this.options=w,this.tag=m,this.kind=w.kind||null,this.resolve=w.resolve||function(){return!0},this.construct=w.construct||function(b){return b},this.instanceOf=w.instanceOf||null,this.predicate=w.predicate||null,this.represent=w.represent||null,this.representName=w.representName||null,this.defaultStyle=w.defaultStyle||null,this.multi=w.multi||!1,this.styleAliases=u(w.styleAliases||null),c.indexOf(this.kind)===-1)throw new r('Unknown kind "'+this.kind+'" is specified for "'+m+'" YAML type.')}return wh=f,wh}var vh,Yy;function mg(){if(Yy)return vh;Yy=1;const r=$o(),s=Ut();function c(m,w){const b=[];return m[w].forEach(function(S){let v=b.length;b.forEach(function(p,g){p.tag===S.tag&&p.kind===S.kind&&p.multi===S.multi&&(v=g)}),b[v]=S}),b}function u(){const m={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function w(b){b.multi?(m.multi[b.kind].push(b),m.multi.fallback.push(b)):m[b.kind][b.tag]=m.fallback[b.tag]=b}for(let b=0,S=arguments.length;b<S;b+=1)arguments[b].forEach(w);return m}function f(m){return this.extend(m)}return f.prototype.extend=function(w){let b=[],S=[];if(w instanceof s)S.push(w);else if(Array.isArray(w))S=S.concat(w);else if(w&&(Array.isArray(w.implicit)||Array.isArray(w.explicit)))w.implicit&&(b=b.concat(w.implicit)),w.explicit&&(S=S.concat(w.explicit));else throw new r("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");b.forEach(function(p){if(!(p instanceof s))throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(p.loadKind&&p.loadKind!=="scalar")throw new r("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(p.multi)throw new r("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),S.forEach(function(p){if(!(p instanceof s))throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const v=Object.create(f.prototype);return v.implicit=(this.implicit||[]).concat(b),v.explicit=(this.explicit||[]).concat(S),v.compiledImplicit=c(v,"implicit"),v.compiledExplicit=c(v,"explicit"),v.compiledTypeMap=u(v.compiledImplicit,v.compiledExplicit),v},vh=f,vh}var bh,jy;function yg(){if(jy)return bh;jy=1;const r=Ut();return bh=new r("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),bh}var kh,zy;function gg(){if(zy)return kh;zy=1;const r=Ut();return kh=new r("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),kh}var Sh,qy;function pg(){if(qy)return Sh;qy=1;const r=Ut();return Sh=new r("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),Sh}var xh,By;function wg(){if(By)return xh;By=1;const r=mg();return xh=new r({explicit:[yg(),gg(),pg()]}),xh}var Th,Uy;function vg(){if(Uy)return Th;Uy=1;const r=Ut();function s(f){if(f===null)return!0;const m=f.length;return m===1&&f==="~"||m===4&&(f==="null"||f==="Null"||f==="NULL")}function c(){return null}function u(f){return f===null}return Th=new r("tag:yaml.org,2002:null",{kind:"scalar",resolve:s,construct:c,predicate:u,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Th}var Eh,Ly;function bg(){if(Ly)return Eh;Ly=1;const r=Ut();function s(f){if(f===null)return!1;const m=f.length;return m===4&&(f==="true"||f==="True"||f==="TRUE")||m===5&&(f==="false"||f==="False"||f==="FALSE")}function c(f){return f==="true"||f==="True"||f==="TRUE"}function u(f){return Object.prototype.toString.call(f)==="[object Boolean]"}return Eh=new r("tag:yaml.org,2002:bool",{kind:"scalar",resolve:s,construct:c,predicate:u,represent:{lowercase:function(f){return f?"true":"false"},uppercase:function(f){return f?"TRUE":"FALSE"},camelcase:function(f){return f?"True":"False"}},defaultStyle:"lowercase"}),Eh}var Ih,Gy;function kg(){if(Gy)return Ih;Gy=1;const r=Wo(),s=Ut();function c(v){return v>=48&&v<=57||v>=65&&v<=70||v>=97&&v<=102}function u(v){return v>=48&&v<=55}function f(v){return v>=48&&v<=57}function m(v){if(v===null)return!1;const p=v.length;let g=0,k=!1;if(!p)return!1;let D=v[g];if((D==="-"||D==="+")&&(D=v[++g]),D==="0"){if(g+1===p)return!0;if(D=v[++g],D==="b"){for(g++;g<p;g++){if(D=v[g],D!=="0"&&D!=="1")return!1;k=!0}return k&&isFinite(w(v))}if(D==="x"){for(g++;g<p;g++){if(!c(v.charCodeAt(g)))return!1;k=!0}return k&&isFinite(w(v))}if(D==="o"){for(g++;g<p;g++){if(!u(v.charCodeAt(g)))return!1;k=!0}return k&&isFinite(w(v))}}for(;g<p;g++){if(!f(v.charCodeAt(g)))return!1;k=!0}return k?isFinite(w(v)):!1}function w(v){let p=v,g=1,k=p[0];if((k==="-"||k==="+")&&(k==="-"&&(g=-1),p=p.slice(1),k=p[0]),p==="0")return 0;if(k==="0"){if(p[1]==="b")return g*parseInt(p.slice(2),2);if(p[1]==="x")return g*parseInt(p.slice(2),16);if(p[1]==="o")return g*parseInt(p.slice(2),8)}return g*parseInt(p,10)}function b(v){return w(v)}function S(v){return Object.prototype.toString.call(v)==="[object Number]"&&v%1===0&&!r.isNegativeZero(v)}return Ih=new s("tag:yaml.org,2002:int",{kind:"scalar",resolve:m,construct:b,predicate:S,represent:{binary:function(v){return v>=0?"0b"+v.toString(2):"-0b"+v.toString(2).slice(1)},octal:function(v){return v>=0?"0o"+v.toString(8):"-0o"+v.toString(8).slice(1)},decimal:function(v){return v.toString(10)},hexadecimal:function(v){return v>=0?"0x"+v.toString(16).toUpperCase():"-0x"+v.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ih}var Ah,Xy;function Sg(){if(Xy)return Ah;Xy=1;const r=Wo(),s=Ut(),c=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),u=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function f(v){return v===null||!c.test(v)?!1:isFinite(parseFloat(v,10))?!0:u.test(v)}function m(v){let p=v.toLowerCase();const g=p[0]==="-"?-1:1;return"+-".indexOf(p[0])>=0&&(p=p.slice(1)),p===".inf"?g===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:p===".nan"?NaN:g*parseFloat(p,10)}const w=/^[-+]?[0-9]+e/;function b(v,p){if(isNaN(v))switch(p){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===v)switch(p){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===v)switch(p){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(r.isNegativeZero(v))return"-0.0";const g=v.toString(10);return w.test(g)?g.replace("e",".e"):g}function S(v){return Object.prototype.toString.call(v)==="[object Number]"&&(v%1!==0||r.isNegativeZero(v))}return Ah=new s("tag:yaml.org,2002:float",{kind:"scalar",resolve:f,construct:m,predicate:S,represent:b,defaultStyle:"lowercase"}),Ah}var Mh,Fy;function xg(){return Fy||(Fy=1,Mh=wg().extend({implicit:[vg(),bg(),kg(),Sg()]})),Mh}var Oh,Qy;function Tg(){return Qy||(Qy=1,Oh=xg()),Oh}var Nh,Zy;function Eg(){if(Zy)return Nh;Zy=1;const r=Ut(),s=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),c=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function u(w){return w===null?!1:s.exec(w)!==null||c.exec(w)!==null}function f(w){let b=0,S=null,v=s.exec(w);if(v===null&&(v=c.exec(w)),v===null)throw new Error("Date resolve error");const p=+v[1],g=+v[2]-1,k=+v[3];if(!v[4])return new Date(Date.UTC(p,g,k));const D=+v[4],U=+v[5],V=+v[6];if(v[7]){for(b=v[7].slice(0,3);b.length<3;)b+="0";b=+b}if(v[9]){const Te=+v[10],ve=+(v[11]||0);S=(Te*60+ve)*6e4,v[9]==="-"&&(S=-S)}const ne=new Date(Date.UTC(p,g,k,D,U,V,b));return S&&ne.setTime(ne.getTime()-S),ne}function m(w){return w.toISOString()}return Nh=new r("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:u,construct:f,instanceOf:Date,represent:m}),Nh}var Ch,Ky;function Ig(){if(Ky)return Ch;Ky=1;const r=Ut();function s(c){return c==="<<"||c===null}return Ch=new r("tag:yaml.org,2002:merge",{kind:"scalar",resolve:s}),Ch}var Hh,Vy;function Ag(){if(Vy)return Hh;Vy=1;const r=Ut(),s=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function c(w){if(w===null)return!1;let b=0;const S=w.length,v=s;for(let p=0;p<S;p++){const g=v.indexOf(w.charAt(p));if(!(g>64)){if(g<0)return!1;b+=6}}return b%8===0}function u(w){const b=w.replace(/[\r\n=]/g,""),S=b.length,v=s;let p=0;const g=[];for(let D=0;D<S;D++)D%4===0&&D&&(g.push(p>>16&255),g.push(p>>8&255),g.push(p&255)),p=p<<6|v.indexOf(b.charAt(D));const k=S%4*6;return k===0?(g.push(p>>16&255),g.push(p>>8&255),g.push(p&255)):k===18?(g.push(p>>10&255),g.push(p>>2&255)):k===12&&g.push(p>>4&255),new Uint8Array(g)}function f(w){let b="",S=0;const v=w.length,p=s;for(let k=0;k<v;k++)k%3===0&&k&&(b+=p[S>>18&63],b+=p[S>>12&63],b+=p[S>>6&63],b+=p[S&63]),S=(S<<8)+w[k];const g=v%3;return g===0?(b+=p[S>>18&63],b+=p[S>>12&63],b+=p[S>>6&63],b+=p[S&63]):g===2?(b+=p[S>>10&63],b+=p[S>>4&63],b+=p[S<<2&63],b+=p[64]):g===1&&(b+=p[S>>2&63],b+=p[S<<4&63],b+=p[64],b+=p[64]),b}function m(w){return Object.prototype.toString.call(w)==="[object Uint8Array]"}return Hh=new r("tag:yaml.org,2002:binary",{kind:"scalar",resolve:c,construct:u,predicate:m,represent:f}),Hh}var Rh,Jy;function Mg(){if(Jy)return Rh;Jy=1;const r=Ut(),s=Object.prototype.hasOwnProperty,c=Object.prototype.toString;function u(m){if(m===null)return!0;const w={},b=m;for(let S=0,v=b.length;S<v;S+=1){const p=b[S];let g=!1;if(c.call(p)!=="[object Object]")return!1;let k;for(k in p)if(s.call(p,k))if(!g)g=!0;else return!1;if(!g||s.call(w,k))return!1;Object.defineProperty(w,k,{value:!0})}return!0}function f(m){return m!==null?m:[]}return Rh=new r("tag:yaml.org,2002:omap",{kind:"sequence",resolve:u,construct:f}),Rh}var Dh,Wy;function Og(){if(Wy)return Dh;Wy=1;const r=Ut(),s=Object.prototype.toString;function c(f){if(f===null)return!0;const m=f,w=new Array(m.length);for(let b=0,S=m.length;b<S;b+=1){const v=m[b];if(s.call(v)!=="[object Object]")return!1;const p=Object.keys(v);if(p.length!==1)return!1;w[b]=[p[0],v[p[0]]]}return!0}function u(f){if(f===null)return[];const m=f,w=new Array(m.length);for(let b=0,S=m.length;b<S;b+=1){const v=m[b],p=Object.keys(v);w[b]=[p[0],v[p[0]]]}return w}return Dh=new r("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:c,construct:u}),Dh}var _h,$y;function Ng(){if($y)return _h;$y=1;const r=Ut(),s=Object.prototype.hasOwnProperty;function c(f){if(f===null)return!0;const m=f;for(const w in m)if(s.call(m,w)&&m[w]!==null)return!1;return!0}function u(f){return f!==null?f:{}}return _h=new r("tag:yaml.org,2002:set",{kind:"mapping",resolve:c,construct:u}),_h}var Yh,Py;function Qh(){return Py||(Py=1,Yh=Tg().extend({implicit:[Eg(),Ig()],explicit:[Ag(),Mg(),Og(),Ng()]})),Yh}var eg;function h0(){if(eg)return Er;eg=1;const r=Wo(),s=$o(),c=u0(),u=Qh(),f=Object.prototype.hasOwnProperty,m=1,w=2,b=3,S=4,v=1,p=2,g=3,k=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,D=/[\x85\u2028\u2029]/,U=/[,\[\]{}]/,V=/^(?:!|!!|![0-9A-Za-z-]+!)$/,ne=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function Te(l){return Object.prototype.toString.call(l)}function ve(l){return l===10||l===13}function de(l){return l===9||l===32}function ce(l){return l===9||l===32||l===10||l===13}function le(l){return l===44||l===91||l===93||l===123||l===125}function Fe(l){if(l>=48&&l<=57)return l-48;const N=l|32;return N>=97&&N<=102?N-97+10:-1}function be(l){return l===120?2:l===117?4:l===85?8:0}function W(l){return l>=48&&l<=57?l-48:-1}function Oe(l){switch(l){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function Ee(l){return l<=65535?String.fromCharCode(l):String.fromCharCode((l-65536>>10)+55296,(l-65536&1023)+56320)}function Ne(l,N,Q){N==="__proto__"?Object.defineProperty(l,N,{configurable:!0,enumerable:!0,writable:!0,value:Q}):l[N]=Q}const P=new Array(256),ae=new Array(256);for(let l=0;l<256;l++)P[l]=Oe(l)?1:0,ae[l]=Oe(l);function ye(l,N){this.input=l,this.filename=N.filename||null,this.schema=N.schema||u,this.onWarning=N.onWarning||null,this.legacy=N.legacy||!1,this.json=N.json||!1,this.listener=N.listener||null,this.maxDepth=typeof N.maxDepth=="number"?N.maxDepth:100,this.maxTotalMergeKeys=typeof N.maxTotalMergeKeys=="number"?N.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=l.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Ce(l,N){const Q={name:l.filename,buffer:l.input.slice(0,-1),position:l.position,line:l.line,column:l.position-l.lineStart};return Q.snippet=c(Q),new s(N,Q)}function j(l,N){throw Ce(l,N)}function fe(l,N){l.onWarning&&l.onWarning.call(null,Ce(l,N))}function he(l,N,Q){const K=l.anchorMapTransactions;if(K.length!==0){const z=K[K.length-1];f.call(z,N)||(z[N]={existed:f.call(l.anchorMap,N),value:l.anchorMap[N]})}l.anchorMap[N]=Q}function He(l){l.anchorMapTransactions.push(Object.create(null))}function ee(l){const N=l.anchorMapTransactions.pop(),Q=l.anchorMapTransactions;if(Q.length===0)return;const K=Q[Q.length-1],z=Object.keys(N);for(let d=0,I=z.length;d<I;d+=1){const C=z[d];f.call(K,C)||(K[C]=N[C])}}function Pe(l){const N=l.anchorMapTransactions.pop(),Q=Object.keys(N);for(let K=Q.length-1;K>=0;K-=1){const z=N[Q[K]];z.existed?l.anchorMap[Q[K]]=z.value:delete l.anchorMap[Q[K]]}}function Ge(l){return{position:l.position,line:l.line,lineStart:l.lineStart,lineIndent:l.lineIndent,firstTabInLine:l.firstTabInLine,tag:l.tag,anchor:l.anchor,kind:l.kind,result:l.result}}function ut(l,N){l.position=N.position,l.line=N.line,l.lineStart=N.lineStart,l.lineIndent=N.lineIndent,l.firstTabInLine=N.firstTabInLine,l.tag=N.tag,l.anchor=N.anchor,l.kind=N.kind,l.result=N.result}const T={YAML:function(N,Q,K){N.version!==null&&j(N,"duplication of %YAML directive"),K.length!==1&&j(N,"YAML directive accepts exactly one argument");const z=/^([0-9]+)\.([0-9]+)$/.exec(K[0]);z===null&&j(N,"ill-formed argument of the YAML directive");const d=parseInt(z[1],10),I=parseInt(z[2],10);d!==1&&j(N,"unacceptable YAML version of the document"),N.version=K[0],N.checkLineBreaks=I<2,I!==1&&I!==2&&fe(N,"unsupported YAML version of the document")},TAG:function(N,Q,K){let z;K.length!==2&&j(N,"TAG directive accepts exactly two arguments");const d=K[0];z=K[1],V.test(d)||j(N,"ill-formed tag handle (first argument) of the TAG directive"),f.call(N.tagMap,d)&&j(N,'there is a previously declared suffix for "'+d+'" tag handle'),ne.test(z)||j(N,"ill-formed tag prefix (second argument) of the TAG directive");try{z=decodeURIComponent(z)}catch{j(N,"tag prefix is malformed: "+z)}N.tagMap[d]=z}};function Z(l,N,Q,K){if(N<Q){const z=l.input.slice(N,Q);if(K)for(let d=0,I=z.length;d<I;d+=1){const C=z.charCodeAt(d);C===9||C>=32&&C<=1114111||j(l,"expected valid JSON character")}else k.test(z)&&j(l,"the stream contains non-printable characters");l.result+=z}}function J(l){l.totalMergeKeys++,l.maxTotalMergeKeys!==-1&&l.totalMergeKeys>l.maxTotalMergeKeys&&j(l,"merge keys exceeded maxTotalMergeKeys ("+l.maxTotalMergeKeys+")")}function re(l,N,Q,K){r.isObject(Q)||j(l,"cannot merge mappings; the provided source object is unacceptable"),J(l);const z=Object.keys(Q);for(let d=0,I=z.length;d<I;d+=1){const C=z[d];J(l),f.call(N,C)||(Ne(N,C,Q[C]),K[C]=!0)}}function pe(l,N,Q,K,z,d,I,C,B){if(Array.isArray(z)){z=Array.prototype.slice.call(z);for(let G=0,X=z.length;G<X;G+=1)Array.isArray(z[G])&&j(l,"nested arrays are not supported inside keys"),typeof z=="object"&&Te(z[G])==="[object Object]"&&(z[G]="[object Object]")}if(typeof z=="object"&&Te(z)==="[object Object]"&&(z="[object Object]"),z=String(z),N===null&&(N={}),K==="tag:yaml.org,2002:merge")if(Array.isArray(d)){d.length>100&&j(l,"abnormal merge sequence size");for(let G=0,X=d.length;G<X;G+=1)re(l,N,d[G],Q)}else re(l,N,d,Q);else!l.json&&!f.call(Q,z)&&f.call(N,z)&&(l.line=I||l.line,l.lineStart=C||l.lineStart,l.position=B||l.position,j(l,"duplicated mapping key")),Ne(N,z,d),delete Q[z];return N}function Re(l){const N=l.input.charCodeAt(l.position);N===10?l.position++:N===13?(l.position++,l.input.charCodeAt(l.position)===10&&l.position++):j(l,"a line break is expected"),l.line+=1,l.lineStart=l.position,l.firstTabInLine=-1}function we(l,N,Q){let K=0,z=l.input.charCodeAt(l.position);for(;z!==0;){for(;de(z);)z===9&&l.firstTabInLine===-1&&(l.firstTabInLine=l.position),z=l.input.charCodeAt(++l.position);if(N&&z===35)do z=l.input.charCodeAt(++l.position);while(z!==10&&z!==13&&z!==0);if(ve(z))for(Re(l),z=l.input.charCodeAt(l.position),K++,l.lineIndent=0;z===32;)l.lineIndent++,z=l.input.charCodeAt(++l.position);else break}return Q!==-1&&K!==0&&l.lineIndent<Q&&fe(l,"deficient indentation"),K}function oe(l){let N=l.position,Q=l.input.charCodeAt(N);return!!((Q===45||Q===46)&&Q===l.input.charCodeAt(N+1)&&Q===l.input.charCodeAt(N+2)&&(N+=3,Q=l.input.charCodeAt(N),Q===0||ce(Q)))}function ke(l,N){N===1?l.result+=" ":N>1&&(l.result+=r.repeat(`
`,N-1))}function It(l,N,Q){let K,z,d,I,C,B;const G=l.kind,X=l.result;let q=l.input.charCodeAt(l.position);if(ce(q)||le(q)||q===35||q===38||q===42||q===33||q===124||q===62||q===39||q===34||q===37||q===64||q===96)return!1;if(q===63||q===45){const $=l.input.charCodeAt(l.position+1);if(ce($)||Q&&le($))return!1}for(l.kind="scalar",l.result="",K=z=l.position,d=!1;q!==0;){if(q===58){const $=l.input.charCodeAt(l.position+1);if(ce($)||Q&&le($))break}else if(q===35){const $=l.input.charCodeAt(l.position-1);if(ce($))break}else{if(l.position===l.lineStart&&oe(l)||Q&&le(q))break;if(ve(q))if(I=l.line,C=l.lineStart,B=l.lineIndent,we(l,!1,-1),l.lineIndent>=N){d=!0,q=l.input.charCodeAt(l.position);continue}else{l.position=z,l.line=I,l.lineStart=C,l.lineIndent=B;break}}d&&(Z(l,K,z,!1),ke(l,l.line-I),K=z=l.position,d=!1),de(q)||(z=l.position+1),q=l.input.charCodeAt(++l.position)}return Z(l,K,z,!1),l.result?!0:(l.kind=G,l.result=X,!1)}function Vt(l,N){let Q,K,z=l.input.charCodeAt(l.position);if(z!==39)return!1;for(l.kind="scalar",l.result="",l.position++,Q=K=l.position;(z=l.input.charCodeAt(l.position))!==0;)if(z===39)if(Z(l,Q,l.position,!0),z=l.input.charCodeAt(++l.position),z===39)Q=l.position,l.position++,K=l.position;else return!0;else ve(z)?(Z(l,Q,K,!0),ke(l,we(l,!1,N)),Q=K=l.position):l.position===l.lineStart&&oe(l)?j(l,"unexpected end of the document within a single quoted scalar"):(l.position++,de(z)||(K=l.position));j(l,"unexpected end of the stream within a single quoted scalar")}function Lt(l,N){let Q,K,z,d=l.input.charCodeAt(l.position);if(d!==34)return!1;for(l.kind="scalar",l.result="",l.position++,Q=K=l.position;(d=l.input.charCodeAt(l.position))!==0;){if(d===34)return Z(l,Q,l.position,!0),l.position++,!0;if(d===92){if(Z(l,Q,l.position,!0),d=l.input.charCodeAt(++l.position),ve(d))we(l,!1,N);else if(d<256&&P[d])l.result+=ae[d],l.position++;else if((z=be(d))>0){let I=z,C=0;for(;I>0;I--)d=l.input.charCodeAt(++l.position),(z=Fe(d))>=0?C=(C<<4)+z:j(l,"expected hexadecimal character");l.result+=Ee(C),l.position++}else j(l,"unknown escape sequence");Q=K=l.position}else ve(d)?(Z(l,Q,K,!0),ke(l,we(l,!1,N)),Q=K=l.position):l.position===l.lineStart&&oe(l)?j(l,"unexpected end of the document within a double quoted scalar"):(l.position++,de(d)||(K=l.position))}j(l,"unexpected end of the stream within a double quoted scalar")}function ft(l,N){let Q=!0,K,z,d;const I=l.tag;let C;const B=l.anchor;let G,X,q,$;const se=Object.create(null);let ge,xe,Ae,Ye=l.input.charCodeAt(l.position);if(Ye===91)G=93,$=!1,C=[];else if(Ye===123)G=125,$=!0,C={};else return!1;for(l.anchor!==null&&he(l,l.anchor,C),Ye=l.input.charCodeAt(++l.position);Ye!==0;){if(we(l,!0,N),Ye=l.input.charCodeAt(l.position),Ye===G)return l.position++,l.tag=I,l.anchor=B,l.kind=$?"mapping":"sequence",l.result=C,!0;if(Q?Ye===44&&j(l,"expected the node content, but found ','"):j(l,"missed comma between flow collection entries"),xe=ge=Ae=null,X=q=!1,Ye===63){const Mn=l.input.charCodeAt(l.position+1);ce(Mn)&&(X=q=!0,l.position++,we(l,!0,N))}K=l.line,z=l.lineStart,d=l.position,wt(l,N,m,!1,!0),xe=l.tag,ge=l.result,we(l,!0,N),Ye=l.input.charCodeAt(l.position),(q||l.line===K)&&Ye===58&&(X=!0,Ye=l.input.charCodeAt(++l.position),we(l,!0,N),wt(l,N,m,!1,!0),Ae=l.result),$?pe(l,C,se,xe,ge,Ae,K,z,d):X?C.push(pe(l,null,se,xe,ge,Ae,K,z,d)):C.push(ge),we(l,!0,N),Ye=l.input.charCodeAt(l.position),Ye===44?(Q=!0,Ye=l.input.charCodeAt(++l.position)):Q=!1}j(l,"unexpected end of the stream within a flow collection")}function Ke(l,N){let Q,K=v,z=!1,d=!1,I=N,C=0,B=!1,G,X=l.input.charCodeAt(l.position);if(X===124)Q=!1;else if(X===62)Q=!0;else return!1;for(l.kind="scalar",l.result="";X!==0;)if(X=l.input.charCodeAt(++l.position),X===43||X===45)v===K?K=X===43?g:p:j(l,"repeat of a chomping mode identifier");else if((G=W(X))>=0)G===0?j(l,"bad explicit indentation width of a block scalar; it cannot be less than one"):d?j(l,"repeat of an indentation width identifier"):(I=N+G-1,d=!0);else break;if(de(X)){do X=l.input.charCodeAt(++l.position);while(de(X));if(X===35)do X=l.input.charCodeAt(++l.position);while(!ve(X)&&X!==0)}for(;X!==0;){for(Re(l),l.lineIndent=0,X=l.input.charCodeAt(l.position);(!d||l.lineIndent<I)&&X===32;)l.lineIndent++,X=l.input.charCodeAt(++l.position);if(!d&&l.lineIndent>I&&(I=l.lineIndent),ve(X)){C++;continue}if(!d&&I===0&&j(l,"missing indentation for block scalar"),l.lineIndent<I){K===g?l.result+=r.repeat(`
`,z?1+C:C):K===v&&z&&(l.result+=`
`);break}Q?de(X)?(B=!0,l.result+=r.repeat(`
`,z?1+C:C)):B?(B=!1,l.result+=r.repeat(`
`,C+1)):C===0?z&&(l.result+=" "):l.result+=r.repeat(`
`,C):l.result+=r.repeat(`
`,z?1+C:C),z=!0,d=!0,C=0;const q=l.position;for(;!ve(X)&&X!==0;)X=l.input.charCodeAt(++l.position);Z(l,q,l.position,!1)}return!0}function ze(l,N){const Q=l.tag,K=l.anchor,z=[];let d=!1;if(l.firstTabInLine!==-1)return!1;l.anchor!==null&&he(l,l.anchor,z);let I=l.input.charCodeAt(l.position);for(;I!==0&&(l.firstTabInLine!==-1&&(l.position=l.firstTabInLine,j(l,"tab characters must not be used in indentation")),I===45);){const C=l.input.charCodeAt(l.position+1);if(!ce(C))break;if(d=!0,l.position++,we(l,!0,-1)&&l.lineIndent<=N){z.push(null),I=l.input.charCodeAt(l.position);continue}const B=l.line;if(wt(l,N,b,!1,!0),z.push(l.result),we(l,!0,-1),I=l.input.charCodeAt(l.position),(l.line===B||l.lineIndent>N)&&I!==0)j(l,"bad indentation of a sequence entry");else if(l.lineIndent<N)break}return d?(l.tag=Q,l.anchor=K,l.kind="sequence",l.result=z,!0):!1}function ht(l,N,Q){let K,z,d,I;const C=l.tag,B=l.anchor,G={},X=Object.create(null);let q=null,$=null,se=null,ge=!1,xe=!1;if(l.firstTabInLine!==-1)return!1;l.anchor!==null&&he(l,l.anchor,G);let Ae=l.input.charCodeAt(l.position);for(;Ae!==0;){!ge&&l.firstTabInLine!==-1&&(l.position=l.firstTabInLine,j(l,"tab characters must not be used in indentation"));const Ye=l.input.charCodeAt(l.position+1),Mn=l.line;if((Ae===63||Ae===58)&&ce(Ye))Ae===63?(ge&&(pe(l,G,X,q,$,null,z,d,I),q=$=se=null),xe=!0,ge=!0,K=!0):ge?(ge=!1,K=!0):j(l,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),l.position+=1,Ae=Ye;else{if(z=l.line,d=l.lineStart,I=l.position,!wt(l,Q,w,!1,!0))break;if(l.line===Mn){for(Ae=l.input.charCodeAt(l.position);de(Ae);)Ae=l.input.charCodeAt(++l.position);if(Ae===58)Ae=l.input.charCodeAt(++l.position),ce(Ae)||j(l,"a whitespace character is expected after the key-value separator within a block mapping"),ge&&(pe(l,G,X,q,$,null,z,d,I),q=$=se=null),xe=!0,ge=!1,K=!1,q=l.tag,$=l.result;else if(xe)j(l,"can not read an implicit mapping pair; a colon is missed");else return l.tag=C,l.anchor=B,!0}else if(xe)j(l,"can not read a block mapping entry; a multiline key may not be an implicit key");else return l.tag=C,l.anchor=B,!0}if((l.line===Mn||l.lineIndent>N)&&(ge&&(z=l.line,d=l.lineStart,I=l.position),wt(l,N,S,!0,K)&&(ge?$=l.result:se=l.result),ge||(pe(l,G,X,q,$,se,z,d,I),q=$=se=null),we(l,!0,-1),Ae=l.input.charCodeAt(l.position)),(l.line===Mn||l.lineIndent>N)&&Ae!==0)j(l,"bad indentation of a mapping entry");else if(l.lineIndent<N)break}return ge&&pe(l,G,X,q,$,null,z,d,I),xe&&(l.tag=C,l.anchor=B,l.kind="mapping",l.result=G),xe}function rn(l){let N=!1,Q=!1,K,z,d=l.input.charCodeAt(l.position);if(d!==33)return!1;l.tag!==null&&j(l,"duplication of a tag property"),d=l.input.charCodeAt(++l.position),d===60?(N=!0,d=l.input.charCodeAt(++l.position)):d===33?(Q=!0,K="!!",d=l.input.charCodeAt(++l.position)):K="!";let I=l.position;if(N){do d=l.input.charCodeAt(++l.position);while(d!==0&&d!==62);l.position<l.length?(z=l.input.slice(I,l.position),d=l.input.charCodeAt(++l.position)):j(l,"unexpected end of the stream within a verbatim tag")}else{for(;d!==0&&!ce(d);)d===33&&(Q?j(l,"tag suffix cannot contain exclamation marks"):(K=l.input.slice(I-1,l.position+1),V.test(K)||j(l,"named tag handle cannot contain such characters"),Q=!0,I=l.position+1)),d=l.input.charCodeAt(++l.position);z=l.input.slice(I,l.position),U.test(z)&&j(l,"tag suffix cannot contain flow indicator characters")}z&&!ne.test(z)&&j(l,"tag name cannot contain such characters: "+z);try{z=decodeURIComponent(z)}catch{j(l,"tag name is malformed: "+z)}return N?l.tag=z:f.call(l.tagMap,K)?l.tag=l.tagMap[K]+z:K==="!"?l.tag="!"+z:K==="!!"?l.tag="tag:yaml.org,2002:"+z:j(l,'undeclared tag handle "'+K+'"'),!0}function kt(l){let N=l.input.charCodeAt(l.position);if(N!==38)return!1;l.anchor!==null&&j(l,"duplication of an anchor property"),N=l.input.charCodeAt(++l.position);const Q=l.position;for(;N!==0&&!ce(N)&&!le(N);)N=l.input.charCodeAt(++l.position);return l.position===Q&&j(l,"name of an anchor node must contain at least one character"),l.anchor=l.input.slice(Q,l.position),!0}function Jt(l){let N=l.input.charCodeAt(l.position);if(N!==42)return!1;N=l.input.charCodeAt(++l.position);const Q=l.position;for(;N!==0&&!ce(N)&&!le(N);)N=l.input.charCodeAt(++l.position);l.position===Q&&j(l,"name of an alias node must contain at least one character");const K=l.input.slice(Q,l.position);return f.call(l.anchorMap,K)||j(l,'unidentified alias "'+K+'"'),l.result=l.anchorMap[K],we(l,!0,-1),!0}function At(l,N,Q,K){const z=Ge(l);return He(l),ut(l,N),l.tag=null,l.anchor=null,l.kind=null,l.result=null,ht(l,Q,K)&&l.kind==="mapping"?(ee(l),!0):(Pe(l),ut(l,z),!1)}function wt(l,N,Q,K,z){let d,I,C=1,B=!1,G=!1,X=null,q,$,se;l.depth>=l.maxDepth&&j(l,"nesting exceeded maxDepth ("+l.maxDepth+")"),l.depth+=1,l.listener!==null&&l.listener("open",l),l.tag=null,l.anchor=null,l.kind=null,l.result=null;const ge=d=I=S===Q||b===Q;if(K&&we(l,!0,-1)&&(B=!0,l.lineIndent>N?C=1:l.lineIndent===N?C=0:l.lineIndent<N&&(C=-1)),C===1)for(;;){const xe=l.input.charCodeAt(l.position),Ae=Ge(l);if(B&&(xe===33&&l.tag!==null||xe===38&&l.anchor!==null)||!rn(l)&&!kt(l))break;X===null&&(X=Ae),we(l,!0,-1)?(B=!0,I=ge,l.lineIndent>N?C=1:l.lineIndent===N?C=0:l.lineIndent<N&&(C=-1)):I=!1}if(I&&(I=B||z),C===1||S===Q)if(m===Q||w===Q?$=N:$=N+1,se=l.position-l.lineStart,C===1)if(I&&(ze(l,se)||ht(l,se,$))||ft(l,$))G=!0;else{const xe=l.input.charCodeAt(l.position);X!==null&&ge&&!I&&xe!==124&&xe!==62&&At(l,X,X.position-X.lineStart,$)||d&&Ke(l,$)||Vt(l,$)||Lt(l,$)?G=!0:Jt(l)?(G=!0,(l.tag!==null||l.anchor!==null)&&j(l,"alias node should not have any properties")):It(l,$,m===Q)&&(G=!0,l.tag===null&&(l.tag="?")),l.anchor!==null&&he(l,l.anchor,l.result)}else C===0&&(G=I&&ze(l,se));if(l.tag===null)l.anchor!==null&&he(l,l.anchor,l.result);else if(l.tag==="?"){l.result!==null&&l.kind!=="scalar"&&j(l,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+l.kind+'"');for(let xe=0,Ae=l.implicitTypes.length;xe<Ae;xe+=1)if(q=l.implicitTypes[xe],q.resolve(l.result)){l.result=q.construct(l.result),l.tag=q.tag,l.anchor!==null&&he(l,l.anchor,l.result);break}}else if(l.tag!=="!"){if(f.call(l.typeMap[l.kind||"fallback"],l.tag))q=l.typeMap[l.kind||"fallback"][l.tag];else{q=null;const xe=l.typeMap.multi[l.kind||"fallback"];for(let Ae=0,Ye=xe.length;Ae<Ye;Ae+=1)if(l.tag.slice(0,xe[Ae].tag.length)===xe[Ae].tag){q=xe[Ae];break}}q||j(l,"unknown tag !<"+l.tag+">"),l.result!==null&&q.kind!==l.kind&&j(l,"unacceptable node kind for !<"+l.tag+'> tag; it should be "'+q.kind+'", not "'+l.kind+'"'),q.resolve(l.result,l.tag)?(l.result=q.construct(l.result,l.tag),l.anchor!==null&&he(l,l.anchor,l.result)):j(l,"cannot resolve a node with !<"+l.tag+"> explicit tag")}return l.listener!==null&&l.listener("close",l),l.depth-=1,l.tag!==null||l.anchor!==null||G}function Un(l){const N=l.position;let Q=!1,K;for(l.version=null,l.checkLineBreaks=l.legacy,l.tagMap=Object.create(null),l.anchorMap=Object.create(null);(K=l.input.charCodeAt(l.position))!==0&&(we(l,!0,-1),K=l.input.charCodeAt(l.position),!(l.lineIndent>0||K!==37));){Q=!0,K=l.input.charCodeAt(++l.position);let z=l.position;for(;K!==0&&!ce(K);)K=l.input.charCodeAt(++l.position);const d=l.input.slice(z,l.position),I=[];for(d.length<1&&j(l,"directive name must not be less than one character in length");K!==0;){for(;de(K);)K=l.input.charCodeAt(++l.position);if(K===35){do K=l.input.charCodeAt(++l.position);while(K!==0&&!ve(K));break}if(ve(K))break;for(z=l.position;K!==0&&!ce(K);)K=l.input.charCodeAt(++l.position);I.push(l.input.slice(z,l.position))}K!==0&&Re(l),f.call(T,d)?T[d](l,d,I):fe(l,'unknown document directive "'+d+'"')}if(we(l,!0,-1),l.lineIndent===0&&l.input.charCodeAt(l.position)===45&&l.input.charCodeAt(l.position+1)===45&&l.input.charCodeAt(l.position+2)===45?(l.position+=3,we(l,!0,-1)):Q&&j(l,"directives end mark is expected"),wt(l,l.lineIndent-1,S,!1,!0),we(l,!0,-1),l.checkLineBreaks&&D.test(l.input.slice(N,l.position))&&fe(l,"non-ASCII line breaks are interpreted as content"),l.documents.push(l.result),l.position===l.lineStart&&oe(l)){l.input.charCodeAt(l.position)===46&&(l.position+=3,we(l,!0,-1));return}l.position<l.length-1&&j(l,"end of the stream or a document separator is expected")}function ct(l,N){l=String(l),N=N||{},l.length!==0&&(l.charCodeAt(l.length-1)!==10&&l.charCodeAt(l.length-1)!==13&&(l+=`
`),l.charCodeAt(0)===65279&&(l=l.slice(1)));const Q=new ye(l,N),K=l.indexOf("\0");for(K!==-1&&(Q.position=K,j(Q,"null byte is not allowed in input")),Q.input+="\0";Q.input.charCodeAt(Q.position)===32;)Q.lineIndent+=1,Q.position+=1;for(;Q.position<Q.length-1;)Un(Q);return Q.documents}function An(l,N,Q){N!==null&&typeof N=="object"&&typeof Q>"u"&&(Q=N,N=null);const K=ct(l,Q);if(typeof N!="function")return K;for(let z=0,d=K.length;z<d;z+=1)N(K[z])}function sn(l,N){const Q=ct(l,N);if(Q.length!==0){if(Q.length===1)return Q[0];throw new s("expected a single document in the stream, but found more")}}return Er.loadAll=An,Er.load=sn,Er}var jh={},tg;function c0(){if(tg)return jh;tg=1;const r=Wo(),s=$o(),c=Qh(),u=Object.prototype.toString,f=Object.prototype.hasOwnProperty,m=65279,w=9,b=10,S=13,v=32,p=33,g=34,k=35,D=37,U=38,V=39,ne=42,Te=44,ve=45,de=58,ce=61,le=62,Fe=63,be=64,W=91,Oe=93,Ee=96,Ne=123,P=124,ae=125,ye={};ye[0]="\\0",ye[7]="\\a",ye[8]="\\b",ye[9]="\\t",ye[10]="\\n",ye[11]="\\v",ye[12]="\\f",ye[13]="\\r",ye[27]="\\e",ye[34]='\\"',ye[92]="\\\\",ye[133]="\\N",ye[160]="\\_",ye[8232]="\\L",ye[8233]="\\P";const Ce=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],j=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function fe(d,I){if(I===null)return{};const C={},B=Object.keys(I);for(let G=0,X=B.length;G<X;G+=1){let q=B[G],$=String(I[q]);q.slice(0,2)==="!!"&&(q="tag:yaml.org,2002:"+q.slice(2));const se=d.compiledTypeMap.fallback[q];se&&f.call(se.styleAliases,$)&&($=se.styleAliases[$]),C[q]=$}return C}function he(d){let I,C;const B=d.toString(16).toUpperCase();if(d<=255)I="x",C=2;else if(d<=65535)I="u",C=4;else if(d<=4294967295)I="U",C=8;else throw new s("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+I+r.repeat("0",C-B.length)+B}const He=1,ee=2;function Pe(d){this.schema=d.schema||c,this.indent=Math.max(1,d.indent||2),this.noArrayIndent=d.noArrayIndent||!1,this.skipInvalid=d.skipInvalid||!1,this.flowLevel=r.isNothing(d.flowLevel)?-1:d.flowLevel,this.styleMap=fe(this.schema,d.styles||null),this.sortKeys=d.sortKeys||!1,this.lineWidth=d.lineWidth||80,this.noRefs=d.noRefs||!1,this.noCompatMode=d.noCompatMode||!1,this.condenseFlow=d.condenseFlow||!1,this.quotingType=d.quotingType==='"'?ee:He,this.forceQuotes=d.forceQuotes||!1,this.replacer=typeof d.replacer=="function"?d.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ge(d,I){const C=r.repeat(" ",I);let B=0,G="";const X=d.length;for(;B<X;){let q;const $=d.indexOf(`
`,B);$===-1?(q=d.slice(B),B=X):(q=d.slice(B,$+1),B=$+1),q.length&&q!==`
`&&(G+=C),G+=q}return G}function ut(d,I){return`
`+r.repeat(" ",d.indent*I)}function T(d,I){for(let C=0,B=d.implicitTypes.length;C<B;C+=1)if(d.implicitTypes[C].resolve(I))return!0;return!1}function Z(d){return d===v||d===w}function J(d){return d>=32&&d<=126||d>=161&&d<=55295&&d!==8232&&d!==8233||d>=57344&&d<=65533&&d!==m||d>=65536&&d<=1114111}function re(d){return J(d)&&d!==m&&d!==S&&d!==b}function pe(d,I,C){const B=re(d),G=B&&!Z(d);return(C?B:B&&d!==Te&&d!==W&&d!==Oe&&d!==Ne&&d!==ae)&&d!==k&&!(I===de&&!G)||re(I)&&!Z(I)&&d===k||I===de&&G}function Re(d){return J(d)&&d!==m&&!Z(d)&&d!==ve&&d!==Fe&&d!==de&&d!==Te&&d!==W&&d!==Oe&&d!==Ne&&d!==ae&&d!==k&&d!==U&&d!==ne&&d!==p&&d!==P&&d!==ce&&d!==le&&d!==V&&d!==g&&d!==D&&d!==be&&d!==Ee}function we(d){return!Z(d)&&d!==de}function oe(d,I){const C=d.charCodeAt(I);let B;return C>=55296&&C<=56319&&I+1<d.length&&(B=d.charCodeAt(I+1),B>=56320&&B<=57343)?(C-55296)*1024+B-56320+65536:C}function ke(d){return/^\n* /.test(d)}const It=1,Vt=2,Lt=3,ft=4,Ke=5;function ze(d,I,C,B,G,X,q,$){let se,ge=0,xe=null,Ae=!1,Ye=!1;const Mn=B!==-1;let vn=-1,vt=Re(oe(d,0))&&we(oe(d,d.length-1));if(I||q)for(se=0;se<d.length;ge>=65536?se+=2:se++){if(ge=oe(d,se),!J(ge))return Ke;vt=vt&&pe(ge,xe,$),xe=ge}else{for(se=0;se<d.length;ge>=65536?se+=2:se++){if(ge=oe(d,se),ge===b)Ae=!0,Mn&&(Ye=Ye||se-vn-1>B&&d[vn+1]!==" ",vn=se);else if(!J(ge))return Ke;vt=vt&&pe(ge,xe,$),xe=ge}Ye=Ye||Mn&&se-vn-1>B&&d[vn+1]!==" "}return!Ae&&!Ye?vt&&!q&&!G(d)?It:X===ee?Ke:Vt:C>9&&ke(d)?Ke:q?X===ee?Ke:Vt:Ye?ft:Lt}function ht(d,I,C,B,G){d.dump=(function(){if(I.length===0)return d.quotingType===ee?'""':"''";if(!d.noCompatMode&&(Ce.indexOf(I)!==-1||j.test(I)))return d.quotingType===ee?'"'+I+'"':"'"+I+"'";const X=d.indent*Math.max(1,C),q=d.lineWidth===-1?-1:Math.max(Math.min(d.lineWidth,40),d.lineWidth-X),$=B||d.flowLevel>-1&&C>=d.flowLevel;function se(ge){return T(d,ge)}switch(ze(I,$,d.indent,q,se,d.quotingType,d.forceQuotes&&!B,G)){case It:return I;case Vt:return"'"+I.replace(/'/g,"''")+"'";case Lt:return"|"+rn(I,d.indent)+kt(Ge(I,X));case ft:return">"+rn(I,d.indent)+kt(Ge(Jt(I,q),X));case Ke:return'"'+wt(I)+'"';default:throw new s("impossible error: invalid scalar style")}})()}function rn(d,I){const C=ke(d)?String(I):"",B=d[d.length-1]===`
`,X=B&&(d[d.length-2]===`
`||d===`
`)?"+":B?"":"-";return C+X+`
`}function kt(d){return d[d.length-1]===`
`?d.slice(0,-1):d}function Jt(d,I){const C=/(\n+)([^\n]*)/g;let B=(function(){let $=d.indexOf(`
`);return $=$!==-1?$:d.length,C.lastIndex=$,At(d.slice(0,$),I)})(),G=d[0]===`
`||d[0]===" ",X,q;for(;q=C.exec(d);){const $=q[1],se=q[2];X=se[0]===" ",B+=$+(!G&&!X&&se!==""?`
`:"")+At(se,I),G=X}return B}function At(d,I){if(d===""||d[0]===" ")return d;const C=/ [^ ]/g;let B,G=0,X,q=0,$=0,se="";for(;B=C.exec(d);)$=B.index,$-G>I&&(X=q>G?q:$,se+=`
`+d.slice(G,X),G=X+1),q=$;return se+=`
`,d.length-G>I&&q>G?se+=d.slice(G,q)+`
`+d.slice(q+1):se+=d.slice(G),se.slice(1)}function wt(d){let I="",C=0;for(let B=0;B<d.length;C>=65536?B+=2:B++){C=oe(d,B);const G=ye[C];!G&&J(C)?(I+=d[B],C>=65536&&(I+=d[B+1])):I+=G||he(C)}return I}function Un(d,I,C){let B="";const G=d.tag;for(let X=0,q=C.length;X<q;X+=1){let $=C[X];d.replacer&&($=d.replacer.call(C,String(X),$)),(N(d,I,$,!1,!1)||typeof $>"u"&&N(d,I,null,!1,!1))&&(B!==""&&(B+=","+(d.condenseFlow?"":" ")),B+=d.dump)}d.tag=G,d.dump="["+B+"]"}function ct(d,I,C,B){let G="";const X=d.tag;for(let q=0,$=C.length;q<$;q+=1){let se=C[q];d.replacer&&(se=d.replacer.call(C,String(q),se)),(N(d,I+1,se,!0,!0,!1,!0)||typeof se>"u"&&N(d,I+1,null,!0,!0,!1,!0))&&((!B||G!=="")&&(G+=ut(d,I)),d.dump&&b===d.dump.charCodeAt(0)?G+="-":G+="- ",G+=d.dump)}d.tag=X,d.dump=G||"[]"}function An(d,I,C){let B="";const G=d.tag,X=Object.keys(C);for(let q=0,$=X.length;q<$;q+=1){let se="";B!==""&&(se+=", "),d.condenseFlow&&(se+='"');const ge=X[q];let xe=C[ge];d.replacer&&(xe=d.replacer.call(C,ge,xe)),N(d,I,ge,!1,!1)&&(d.dump.length>1024&&(se+="? "),se+=d.dump+(d.condenseFlow?'"':"")+":"+(d.condenseFlow?"":" "),N(d,I,xe,!1,!1)&&(se+=d.dump,B+=se))}d.tag=G,d.dump="{"+B+"}"}function sn(d,I,C,B){let G="";const X=d.tag,q=Object.keys(C);if(d.sortKeys===!0)q.sort();else if(typeof d.sortKeys=="function")q.sort(d.sortKeys);else if(d.sortKeys)throw new s("sortKeys must be a boolean or a function");for(let $=0,se=q.length;$<se;$+=1){let ge="";(!B||G!=="")&&(ge+=ut(d,I));const xe=q[$];let Ae=C[xe];if(d.replacer&&(Ae=d.replacer.call(C,xe,Ae)),!N(d,I+1,xe,!0,!0,!0))continue;const Ye=d.tag!==null&&d.tag!=="?"||d.dump&&d.dump.length>1024;Ye&&(d.dump&&b===d.dump.charCodeAt(0)?ge+="?":ge+="? "),ge+=d.dump,Ye&&(ge+=ut(d,I)),N(d,I+1,Ae,!0,Ye)&&(d.dump&&b===d.dump.charCodeAt(0)?ge+=":":ge+=": ",ge+=d.dump,G+=ge)}d.tag=X,d.dump=G||"{}"}function l(d,I,C){const B=C?d.explicitTypes:d.implicitTypes;for(let G=0,X=B.length;G<X;G+=1){const q=B[G];if((q.instanceOf||q.predicate)&&(!q.instanceOf||typeof I=="object"&&I instanceof q.instanceOf)&&(!q.predicate||q.predicate(I))){if(C?q.multi&&q.representName?d.tag=q.representName(I):d.tag=q.tag:d.tag="?",q.represent){const $=d.styleMap[q.tag]||q.defaultStyle;let se;if(u.call(q.represent)==="[object Function]")se=q.represent(I,$);else if(f.call(q.represent,$))se=q.represent[$](I,$);else throw new s("!<"+q.tag+'> tag resolver accepts not "'+$+'" style');d.dump=se}return!0}}return!1}function N(d,I,C,B,G,X,q){d.tag=null,d.dump=C,l(d,C,!1)||l(d,C,!0);const $=u.call(d.dump),se=B;B&&(B=d.flowLevel<0||d.flowLevel>I);const ge=$==="[object Object]"||$==="[object Array]";let xe,Ae;if(ge&&(xe=d.duplicates.indexOf(C),Ae=xe!==-1),(d.tag!==null&&d.tag!=="?"||Ae||d.indent!==2&&I>0)&&(G=!1),Ae&&d.usedDuplicates[xe])d.dump="*ref_"+xe;else{if(ge&&Ae&&!d.usedDuplicates[xe]&&(d.usedDuplicates[xe]=!0),$==="[object Object]")B&&Object.keys(d.dump).length!==0?(sn(d,I,d.dump,G),Ae&&(d.dump="&ref_"+xe+d.dump)):(An(d,I,d.dump),Ae&&(d.dump="&ref_"+xe+" "+d.dump));else if($==="[object Array]")B&&d.dump.length!==0?(d.noArrayIndent&&!q&&I>0?ct(d,I-1,d.dump,G):ct(d,I,d.dump,G),Ae&&(d.dump="&ref_"+xe+d.dump)):(Un(d,I,d.dump),Ae&&(d.dump="&ref_"+xe+" "+d.dump));else if($==="[object String]")d.tag!=="?"&&ht(d,d.dump,I,X,se);else{if($==="[object Undefined]")return!1;if(d.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+$)}if(d.tag!==null&&d.tag!=="?"){let Ye=encodeURI(d.tag[0]==="!"?d.tag.slice(1):d.tag).replace(/!/g,"%21");d.tag[0]==="!"?Ye="!"+Ye:Ye.slice(0,18)==="tag:yaml.org,2002:"?Ye="!!"+Ye.slice(18):Ye="!<"+Ye+">",d.dump=Ye+" "+d.dump}}return!0}function Q(d,I){const C=[],B=[];K(d,C,B);const G=B.length;for(let X=0;X<G;X+=1)I.duplicates.push(C[B[X]]);I.usedDuplicates=new Array(G)}function K(d,I,C){if(d!==null&&typeof d=="object"){const B=I.indexOf(d);if(B!==-1)C.indexOf(B)===-1&&C.push(B);else if(I.push(d),Array.isArray(d))for(let G=0,X=d.length;G<X;G+=1)K(d[G],I,C);else{const G=Object.keys(d);for(let X=0,q=G.length;X<q;X+=1)K(d[G[X]],I,C)}}}function z(d,I){I=I||{};const C=new Pe(I);C.noRefs||Q(d,C);let B=d;return C.replacer&&(B=C.replacer.call({"":B},"",B)),N(C,0,B,!0,!0)?C.dump+`
`:""}return jh.dump=z,jh}var ng;function d0(){if(ng)return Yt;ng=1;const r=h0(),s=c0();function c(u,f){return function(){throw new Error("Function yaml."+u+" is removed in js-yaml 4. Use yaml."+f+" instead, which is now safe by default.")}}return Yt.Type=Ut(),Yt.Schema=mg(),Yt.FAILSAFE_SCHEMA=wg(),Yt.JSON_SCHEMA=xg(),Yt.CORE_SCHEMA=Tg(),Yt.DEFAULT_SCHEMA=Qh(),Yt.load=r.load,Yt.loadAll=r.loadAll,Yt.dump=s.dump,Yt.YAMLException=$o(),Yt.types={binary:Ag(),float:Sg(),map:pg(),null:vg(),pairs:Og(),set:Ng(),timestamp:Eg(),bool:bg(),int:kg(),merge:Ig(),omap:Mg(),seq:gg(),str:yg()},Yt.safeLoad=c("safeLoad","load"),Yt.safeLoadAll=c("safeLoadAll","loadAll"),Yt.safeDump=c("safeDump","dump"),Yt}var f0=d0();const Cg=s0(f0),{Type:V1,Schema:J1,FAILSAFE_SCHEMA:W1,JSON_SCHEMA:$1,CORE_SCHEMA:P1,DEFAULT_SCHEMA:eb,load:tb,loadAll:nb,dump:ib,YAMLException:ab,types:ob,safeLoad:lb,safeLoadAll:rb,safeDump:sb}=Cg,m0=`# 第一幕 · 出发前\r
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
`,y0=`# 第三幕 · 桌游店
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
`,g0=`# 第四幕 · 结缘——由 script/ch4.yaml 迁移而来
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
`,p0=`# 第五幕 · 熟悉期 —— 由 docs/剧本审稿/第五幕-上线定稿.yaml自动生成
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
`,w0=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.
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
`,v0=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.
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
`,b0=`# Generated by tools/build-chapter-08.mjs from the reviewed Mermaid.\r
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
`,Ko={极快:{pauseBeforeMs:0,indicatorMs:280,typeIntervalMs:40,afterMs:220},快:{pauseBeforeMs:100,indicatorMs:600,typeIntervalMs:65,afterMs:450},正常:{pauseBeforeMs:240,indicatorMs:1e3,typeIntervalMs:100,afterMs:900},慢:{pauseBeforeMs:850,indicatorMs:1500,typeIntervalMs:145,afterMs:1400},长停顿:{pauseBeforeMs:1700,indicatorMs:2100,typeIntervalMs:165,afterMs:2100}},Hg="正常",Rg={pauseBeforeMs:0,indicatorMs:0,typeIntervalMs:0,afterMs:0};function k0(r,s,c=Math.random){return!r||!s||r.section!==s.section?0:s.time&&r.time!==s.time?2200:800+Math.round(c()*400)}function S0(r,s){return r==="type"&&!s}function Dg(r){if(typeof r=="string")return Ko[r]?null:`未知节拍预设「${r}」，可用：${Object.keys(Ko).join(" / ")}`;if(!r||typeof r!="object"||Array.isArray(r))return"节拍必须是预设名或数值对象";const s=["pauseBeforeMs","indicatorMs","typeIntervalMs","afterMs"];for(const[c,u]of Object.entries(r)){if(!s.includes(c))return`节拍里有未知字段「${c}」`;if(typeof u!="number"||!Number.isFinite(u)||u<0||u>2e4)return`节拍.${c} 必须是 0~20000 之间的毫秒数`}return null}function Ar(r,s=!1){if(s)return{...Rg};let c={...Ko[Hg]};for(const u of r)if(u!==void 0)if(typeof u=="string"){const f=Ko[u];f&&(c={...f})}else c={...c,...u};return c}const _g=["桌游聚会","加微信后","约见与表白","交往第一天","第一次争执","周日见面","纪念日改约","楼下的争执","争执之后"],x0=5,ig=new Set(["3.4.1","4.1.1","6m.M5"]);function Yg(r,s,c){var g,k,D;const{channel:u}=s;if(!s.context||s.control)return r;const f=r.messages.filter(U=>U.channel===u);if(!f.length)return r;const m=new Map(c.map(U=>[U.id,U]));let w=1,b=s.context.time,S=f.length;const v=ig.has(s.id);for(let U=f.length-1;U>=0;U--){const V=m.get(f[U].beatId);if(((g=V==null?void 0:V.context)==null?void 0:g.section)!==s.context.section||v&&V.id!==s.id||((k=V.context)==null?void 0:k.time)!==b&&++w>x0)break;if(ig.has(V.id)&&V.id!==s.id&&U>0&&f[U-1].beatId!==V.id){S=U;break}b=(D=V.context)==null?void 0:D.time,S=U}if(!S)return r;const p=new Set(f.slice(0,S));return{...r,messages:r.messages.filter(U=>!p.has(U))}}function Mr(r){return typeof r=="number"&&Number.isInteger(r)&&r>=1&&r<=_g.length}function T0(r){var m;const{id:s,chapter:c,time:u,channel:f}=r;switch(c){case 1:return{section:1,time:"聚会当天 · 出发前"};case 3:return{section:1,time:f==="left"?"到店前后":s.startsWith("3.4.1")||s==="3.4.2"?"在路上":"到店后 · 局间"};case 4:return{section:1,time:"散场后"};case 5:if(/^5[fm]\.3\.2$/.test(s))return{section:3,time:"周五 · 改期"};if(/^5[fm]\.3\.[34]$/.test(s))return{section:3,time:"周日晚 · 见面后"};if(/^5[fm]\.4\./.test(s))return{section:3,time:"见面两天后"};if(/^5[fm]\.3\./.test(s))return{section:3,time:"加微信后第 12 天 · 晚上"};{const w=(m=u==null?void 0:u.match(/^D(2|3|9|10|11|12)\b/))==null?void 0:m[1];if(w)return{section:2,time:`加微信后第 ${w} 天`}}return{section:2,time:"加微信当天"};case 6:return{section:4,time:/^(6m\.(M5|MEMCHOICE|M7|END)|6f\.(F[678]|END))/.test(s)?"当晚":"交往第 1 天"};case 7:return u!=null&&u.includes("周日")?{section:6,time:/ 19:/.test(u)?"周日傍晚 · 见面后":"周日上午"}:u!=null&&u.includes("周六")?{section:5,time:"周六晚"}:{section:5,time:/ 22:/.test(u??"")?"聚餐结束后":"交往第 17 天 · 周五"};case 8:return/^8[fm]\.[FM]305G$/.test(s)?{section:9,time:"当晚 · 见面后"}:/^8[fm]\.[FM]3/.test(s)?{section:9,entryTime:u}:/^8[fm]\.[FM](10[5-7]|2|READY)/.test(s)?{section:8,entryTime:u,.../^8[fm]\.[FM]2/.test(s)?{time:f==="left"?"19:52":"20:12"}:{}}:{section:7,time:/^8[fm]\.[FM]10[34]$/.test(s)?"傍晚 · 改约":"一个月纪念日"};default:throw new Error(`未配置节拍 ${s} 的会话段`)}}const jg=1e6;function Fa(r){return r.sortKey!==void 0?r.sortKey:(r.chapter??0)*jg+(r.order??0)}function Rr(r,s){const c=Fa(r)-Fa(s);return c!==0?c:r.id.localeCompare(s.id,"zh-Hans-CN")}function E0(r){const s=new Map,c=r.beats.map(f=>{var v;const m=f.chapter??0,w=s.get(m)??0;s.set(m,w+1);const b=(v=r.axes)==null?void 0:v[m],S=f.timeRank??(f.time&&b?b.indexOf(f.time):void 0);return{...f,order:f.order??w,sortKey:m*jg+(f.order??w),...S!==void 0&&S>=0?{timeRank:S}:{}}}),u=[...c].sort(Rr);return{...r,beats:c,orderedBeats:u,beatById:new Map(c.map(f=>[f.id,f]))}}function Dr(r,s){const c=r.window;return c?c.下界.length>0&&!c.下界.some(u=>s.has(u))?"waiting":c.上界.some(u=>s.has(u))?"closed":"open":"none"}function I0(r,s){var u,f;if(Dr(r,s)!=="closed"||s.has(r.id))return null;const c=((u=r.window)==null?void 0:u.上界.filter(m=>s.has(m)))??[];return`区间越界：拍 ${r.id} 应在对侧 ${((f=r.window)==null?void 0:f.下界.join("/"))||"起点"} 与 ${c.join("/")} 之间播出，但 ${c.join("/")} 已完成`}const A0=["type","pop","image","thought"];function M0(r){var p,g;const s=[],c=r.beats.map(k=>k.id),u=new Set;r.beats.length===0&&s.push("剧本里没有任何节拍。");for(const k of c){if(!k.trim()){s.push("有节拍缺少 id。");continue}u.has(k)&&s.push(`节拍 id 重复：${k}`),u.add(k)}const f=new Map;for(const k of r.beats)f.has(k.id)||f.set(k.id,k);const m=new Set;for(const k of r.speakers)m.has(k.id)&&s.push(`人物 id 重复：${k.id}`),m.add(k.id),k.channel&&k.channel!=="left"&&k.channel!=="right"&&s.push(`人物 ${k.id} 的侧栏不是 left 或 right。`);const w=C0(r.beats);w&&s.unshift(`节拍依赖成环：${w.join(" → ")}。这会让玩家一直等下去，剧本不能开始。`);const b=new Set(r.beats.flatMap(k=>(k.记忆候选??[]).map(D=>D.缩略标签)));for(const k of r.beats)for(const D of k.choices??[]){for(const U of D.记忆后继??[])(!U.all.length||U.all.some(V=>!r.beats.some(ne=>{var Te;return ne.channel===k.channel&&((Te=ne.记忆候选)==null?void 0:Te.some(ve=>ve.缩略标签===V))})))&&s.push(`节拍 ${k.id} 的记忆后继需要本窗有效候选。`),U.next||s.push(`节拍 ${k.id} 的记忆后继缺少目标。`),qh(s,f,k,U.next,"记忆后继");D.next&&D.记忆后继&&s.push(`节拍 ${k.id} 的选项同时声明固定后继与记忆后继。`),D.需记忆&&!b.has(D.需记忆)&&s.push(`节拍 ${k.id} 的选项「${D.thought}」需要记忆「${D.需记忆}」，但没有任何节拍提供这条候选。`)}const S=new Map;for(const k of r.beats){if(k.order===void 0)continue;const D=`${k.chapter??0}:${k.order}`;S.has(D)?s.push(`节拍 ${S.get(D)} 与 ${k.id} 的章内序号重复（${D}），播出顺序会不确定。`):S.set(D,k.id)}const v=new Set((r.endings??[]).map(k=>k.id));for(const k of r.endings??[]){for(const D of k.requires)f.has(D)||s.push(`终局「${k.id}」要求的拍「${D}」不存在。`);k.requires.length===0&&s.push(`终局「${k.id}」没有写 requires，永远无法判定达成。`)}for(const k of r.beats){k.channel!=="left"&&k.channel!=="right"&&s.push(`节拍 ${k.id} 的 channel 必须是 left 或 right。`),k.lines.length===0&&!k.control&&s.push(`节拍 ${k.id} 没有任何台词。`),k.control&&(k.lines.length>0||(p=k.choices)!=null&&p.length)&&s.push(`控制拍 ${k.id} 不能含台词或玩家选项。`),k.choices&&k.choices.length>0&&k.next&&s.push(`节拍 ${k.id} 已经有选项，就不能再写节拍上的 next。`),zh(s,k.节拍,`节拍 ${k.id} 的 节拍`);for(const D of k.lines)zh(s,D.节拍,`节拍 ${k.id} 的台词 节拍`);for(const D of k.choices??[])zh(s,D.节拍,`节拍 ${k.id} 的选项 节拍`);for(const D of k.requires??[])f.has(D)||s.push(`节拍 ${k.id} 的 requires「${D}」不存在。`);if(k.when)for(const[D,U]of Object.entries(k.when))D.trim()||s.push(`节拍 ${k.id} 的 when 有一个空旗标名。`),ag(U)||s.push(`节拍 ${k.id} 的 when.${D} 只能是文字、数字或是否。`);O0(s,k,r),N0(s,k,f);for(const D of k.lines){D.text.trim()||s.push(`节拍 ${k.id} 有一句空台词。`),A0.includes(D.delivery)||s.push(`节拍 ${k.id} 的呈现方式无法识别：${String(D.delivery)}`);const U=r.speakers.find(V=>V.id===D.from);U?U.channel&&U.channel!==k.channel&&s.push(`节拍 ${k.id} 在${Wa(k.channel)}，却写了${U.name}的台词。`):s.push(`节拍 ${k.id} 的说话人「${D.from}」不在人物表里。`)}for(const D of k.choices??[]){if(D.thought.trim()||s.push(`节拍 ${k.id} 有一个空的想法。`),D.reply.trim()||s.push(`节拍 ${k.id} 有一个选项没有写死回复。`),D.set)for(const[U,V]of Object.entries(D.set))ag(V)||s.push(`节拍 ${k.id} 的旗标 ${U} 只能是文字、数字或是否。`);qh(s,f,k,D.next,"选项")}for(const D of k.记忆候选??[]){if(!D.短句.trim()){s.push(`节拍 ${k.id} 的记忆候选「${D.缩略标签}」缺少短句。`);continue}[...k.lines.map(V=>V.text),...(k.choices??[]).map(V=>V.reply)].join(`
`).includes(D.短句)||s.push(`节拍 ${k.id} 的记忆候选「${D.缩略标签}」的短句没有出现在本拍的台词或回复里，玩家存不进这条记忆。`)}k.ending!==void 0&&!v.has(k.ending)&&s.push(`节拍 ${k.id} 声明终局「${k.ending}」，但剧本没有在 endings 里声明它。`),(g=k.choices)!=null&&g.length||qh(s,f,k,k.next,"next")}return s.length>0?{ok:!1,error:s.join(`
`)}:{ok:!0}}function zh(r,s,c){if(s===void 0)return;const u=Dg(s);u&&r.push(`${c}：${u}`)}function O0(r,s,c){var m;if(s.time===void 0)return;const u=(m=c.axes)==null?void 0:m[s.chapter??0];if(!u){r.push(`节拍 ${s.id} 写了 time「${s.time}」，但第 ${s.chapter??0} 章没有顶层 时间轴。`);return}const f=u.indexOf(s.time);f<0?r.push(`节拍 ${s.id} 的 time「${s.time}」不在第 ${s.chapter??0} 章的时间轴里（必须一字不差）。`):s.timeRank!==void 0&&s.timeRank!==f&&r.push(`节拍 ${s.id} 的 timeRank=${s.timeRank} 与时间轴下标 ${f} 不一致。`)}function N0(r,s,c){const u=s.window;if(!u)return;u.上界.length===0&&u.下界.length===0&&r.push(`节拍 ${s.id} 的区间门没有上下界。`);const f=s.channel==="left"?"right":"left";u.channel!==f&&r.push(`节拍 ${s.id} 在${Wa(s.channel)}，区间门却度量了同侧（${u.channel}）。`);for(const[m,w]of[["下界",u.下界],["上界",u.上界]])for(const b of w){const S=c.get(b);if(!S){r.push(`节拍 ${s.id} 的区间${m}「${b}」不存在。`);continue}S.channel!==u.channel&&r.push(`节拍 ${s.id} 的区间${m}「${b}」不在被度量的对侧 ${u.channel}。`),m==="下界"&&Fa(S)>=Fa(s)&&r.push(`节拍 ${s.id} 的区间下界「${b}」不早于本拍，区间永远无法成立。`),m==="上界"&&Fa(S)<=Fa(s)&&r.push(`节拍 ${s.id} 的区间上界「${b}」不晚于本拍，区间会被提前关闭。`)}}function qh(r,s,c,u,f){if(!u)return;const m=s.get(u);if(!m){r.push(`节拍 ${c.id} 的${f}指向不存在的「${u}」。`);return}m.channel!==c.channel&&r.push(`节拍 ${c.id} 在${Wa(c.channel)}，${f}却指向另一侧的「${u}」。`)}function ag(r){return typeof r=="string"||typeof r=="number"||typeof r=="boolean"}function Wa(r){return r==="left"?"左侧":"右侧"}function C0(r){const s=new Map(r.map(m=>[m.id,m])),c=new Map,u=[],f=m=>{var w;c.set(m,1),u.push(m);for(const b of((w=s.get(m))==null?void 0:w.requires)??[]){if(!s.has(b))continue;const S=c.get(b)??0;if(S===1){const v=u.indexOf(b);return[...u.slice(v),b]}if(S===0){const v=f(b);if(v)return v}}return u.pop(),c.set(m,2),null};for(const m of r)if((c.get(m.id)??0)===0){const w=f(m.id);if(w)return w}return null}const H0=[m0,y0,g0,p0,w0,v0,b0],R0=["title","chapter","speakers","beats","时间轴","默认节拍","endings"],D0=["id","name","channel"],_0=["id","channel","requires","when","aside","lines","choices","next","记忆候选","清空记忆","chapter","order","sortKey","time","timeRank","label","window","ending","节拍","control"],Y0=["from","text","delivery","caption","节拍","timing"],j0=["thought","reply","set","next","需记忆","记忆后继","节拍","timing"],z0=["缩略标签","短句","类型","线"],q0=["channel","下界","上界","说明"],B0=["id","title","requires","set"];function U0(){try{const r=L0(H0.map(c=>G0(c))),s=M0(r);return s.ok?{script:r,error:null}:{script:null,error:s.error}}catch(r){return{script:null,error:r instanceof Error?r.message:"剧本无法解析"}}}function L0(r){var f,m,w;const s=r.flatMap((b,S)=>{var p,g;const v=((g=(p=b.chapters)==null?void 0:p[0])==null?void 0:g.index)??S+1;return b.beats.map(k=>{const D={...k,chapter:k.chapter??v};return{...D,context:T0(D)}})}),c={};for(const b of r)for(const[S,v]of Object.entries(b.axes??{}))c[Number(S)]=v;const u={title:((f=r[0])==null?void 0:f.title)??"",speakers:((m=r[0])==null?void 0:m.speakers)??[],beats:s,chapters:r.map((b,S)=>{var v,p;return{index:((p=(v=b.chapters)==null?void 0:v[0])==null?void 0:p.index)??S+1,title:b.title}}),axes:c,endings:r.flatMap(b=>b.endings??[]),默认节拍:(w=r.find(b=>b.默认节拍))==null?void 0:w.默认节拍};return E0(u)}function G0(r){const s=Cg.load(r);if(!Bn(s))throw new Error("剧本不是一个对象");ii(s,R0,"剧本顶层");const c=ot(s.title,"剧本缺少标题"),u=qg(s.chapter),f=X0(s.speakers),m=s.时间轴===void 0?void 0:zg(s.时间轴,"时间轴"),w=s.默认节拍===void 0?void 0:_r(s.默认节拍,"剧本默认节拍"),b=typeof w=="string"?w:void 0,S=s.endings===void 0?void 0:V0(s.endings),v=F0(s.beats,b).map(p=>u===void 0?p:{...p,chapter:u});return{title:c,speakers:f,beats:v,chapters:u===void 0?void 0:[{index:u,title:c}],axes:u!==void 0&&m?{[u]:m}:void 0,endings:S,默认节拍:typeof w=="string"?w:void 0}}function ii(r,s,c){const u=Object.keys(r).filter(f=>!s.includes(f));if(u.length>0)throw new Error(`${c} 有引擎不认识的字段：${u.join("、")}。若剧本新增了结构，先扩 src/engine 的字段契约，不要让它被静默丢弃。`)}function X0(r){if(!Array.isArray(r)||r.length===0)throw new Error("剧本缺少人物表");return r.map((s,c)=>{if(!Bn(s))throw new Error(`第 ${c+1} 个人物无法读取`);ii(s,D0,`第 ${c+1} 个人物`);const u=ot(s.id,`第 ${c+1} 个人物缺少 id`),f=ot(s.name,`人物 ${u} 缺少名字`),m=s.channel===void 0?void 0:Kh(s.channel,u);return{id:u,name:f,channel:m}})}function F0(r,s){if(!Array.isArray(r))throw new Error("剧本缺少 beats");return r.map((c,u)=>{if(!Bn(c))throw new Error(`第 ${u+1} 个节拍无法读取`);const f=ot(c.id,`第 ${u+1} 个节拍缺少 id`);ii(c,_0,`节拍 ${f}`);const m=Kh(c.channel,f);if(c.control!==void 0&&typeof c.control!="boolean")throw new Error(`节拍 ${f} 的 control 必须为布尔值`);const w=c.节拍===void 0?void 0:_r(c.节拍,`节拍 ${f} 的 节拍`),b=[s,w],S=J0(c.lines,f,b),v=c.choices===void 0?void 0:W0(c.choices,f,b),p=c.requires===void 0?void 0:Or(c.requires,f,"requires"),g=c.when===void 0?void 0:Zh(c.when,f),k=c.aside===void 0?void 0:ot(c.aside,`节拍 ${f} 的自言自语无法读取`),D=c.next===void 0?void 0:ot(c.next,`节拍 ${f} 的 next 无法读取`),U=c.记忆候选===void 0?void 0:Q0(c.记忆候选,f),V=c.清空记忆===void 0?void 0:Z0(c.清空记忆,f),ne=c.order===void 0?void 0:Bh(c.order,`节拍 ${f} 的 order`),Te=c.time===void 0?void 0:ot(c.time,`节拍 ${f} 的 time 无法读取`),ve=c.timeRank===void 0?void 0:Bh(c.timeRank,`节拍 ${f} 的 timeRank`),de=c.label===void 0?void 0:ot(c.label,`节拍 ${f} 的 label 无法读取`),ce=c.window===void 0?void 0:K0(c.window,f),le=c.ending===void 0?void 0:ot(c.ending,`节拍 ${f} 的 ending 无法读取`),Fe=c.sortKey===void 0?void 0:Bh(c.sortKey,`节拍 ${f} 的 sortKey`),be=c.chapter===void 0?void 0:qg(c.chapter);return{id:f,channel:m,control:c.control,lines:S,choices:v,requires:p,when:g,aside:k,next:D,记忆候选:U,清空记忆:V,order:ne,time:Te,timeRank:ve,label:de,window:ce,ending:le,sortKey:Fe,chapter:be,...w!==void 0?{节拍:w}:{}}})}function Q0(r,s){if(!Array.isArray(r))throw new Error(`节拍 ${s} 的记忆候选无法读取`);return r.map((c,u)=>{if(!Bn(c))throw new Error(`节拍 ${s} 的第 ${u+1} 条记忆候选无法读取`);return ii(c,z0,`节拍 ${s} 的第 ${u+1} 条记忆候选`),{缩略标签:ot(c.缩略标签,`节拍 ${s} 的第 ${u+1} 条记忆候选缺少缩略标签`),短句:ot(c.短句,`节拍 ${s} 的第 ${u+1} 条记忆候选缺少短句`),类型:c.类型===void 0?void 0:ot(c.类型,`节拍 ${s} 的记忆候选类型无法读取`),线:c.线===void 0?void 0:ot(c.线,`节拍 ${s} 的记忆候选线无法读取`)}})}function Z0(r,s){if(r==="all"||r==="left"||r==="right")return r;throw new Error(`节拍 ${s} 的清空记忆只能是 all、left 或 right`)}function K0(r,s){if(!Bn(r))throw new Error(`节拍 ${s} 的 window 无法读取`);ii(r,q0,`节拍 ${s} 的 window`);const c=Kh(r.channel,`节拍 ${s} 的 window`),u=r.下界===void 0?[]:Or(r.下界,s,"window.下界"),f=Or(r.上界,s,"window.上界"),m=r.说明===void 0?void 0:ot(r.说明,`节拍 ${s} 的 window.说明 无法读取`);return{channel:c,下界:u,上界:f,...m?{说明:m}:{}}}function V0(r){if(!Array.isArray(r))throw new Error("endings 必须是列表");return r.map((s,c)=>{if(!Bn(s))throw new Error(`第 ${c+1} 个 endings 无法读取`);ii(s,B0,`第 ${c+1} 个 endings`);const u=ot(s.id,`第 ${c+1} 个 endings 缺少 id`);return{id:u,title:ot(s.title,`终局 ${u} 缺少 title`),requires:Or(s.requires,u,"终局 requires"),set:s.set===void 0?void 0:Zh(s.set,u)}})}function J0(r,s,c){if(!Array.isArray(r))throw new Error(`节拍 ${s} 缺少台词`);return r.map((u,f)=>{if(!Bn(u))throw new Error(`节拍 ${s} 的第 ${f+1} 句无法读取`);ii(u,Y0,`节拍 ${s} 的第 ${f+1} 句`);const m=ot(u.from,`节拍 ${s} 的第 ${f+1} 句缺少说话人`),w=ot(u.text,`节拍 ${s} 的第 ${f+1} 句缺少文字`),b=P0(u.delivery,s),S=u.caption===void 0?void 0:ot(u.caption,`节拍 ${s} 的图说无法读取`),v=u.节拍===void 0?void 0:_r(u.节拍,`节拍 ${s} 的第 ${f+1} 句 节拍`);return{from:m,text:w,delivery:b,...S!==void 0?{caption:S}:{},...v!==void 0?{节拍:v}:{},timing:Ar([...c,v])}})}function W0(r,s,c){if(!Array.isArray(r))throw new Error(`节拍 ${s} 的选项无法读取`);return r.map((u,f)=>{if(!Bn(u))throw new Error(`节拍 ${s} 的第 ${f+1} 个选项无法读取`);ii(u,j0,`节拍 ${s} 的第 ${f+1} 个选项`);const m=ot(u.thought,`节拍 ${s} 的第 ${f+1} 个想法是空的`),w=ot(u.reply,`节拍 ${s} 的第 ${f+1} 个回复是空的`),b=u.next===void 0?void 0:ot(u.next,`节拍 ${s} 的选项 next 无法读取`),S=u.set===void 0?void 0:Zh(u.set,s),v=u.需记忆===void 0?void 0:ot(u.需记忆,`节拍 ${s} 的需记忆无法读取`),p=u.节拍===void 0?void 0:_r(u.节拍,`节拍 ${s} 的第 ${f+1} 个选项 节拍`),g=u.记忆后继===void 0?void 0:$0(u.记忆后继,s);return{thought:m,reply:w,...g!==void 0?{记忆后继:g}:{},...b!==void 0?{next:b}:{},...S!==void 0?{set:S}:{},...v!==void 0?{需记忆:v}:{},...p!==void 0?{节拍:p}:{},timing:Ar([...c,p])}})}function $0(r,s){if(!Array.isArray(r)||!r.length)throw new Error(`节拍 ${s} 缺少记忆后继`);return r.map(c=>{if(!Bn(c))throw new Error(`节拍 ${s} 的记忆后继无法读取`);return ii(c,["all","next"],`节拍 ${s} 的记忆后继`),{all:zg(c.all,`节拍 ${s} 的记忆后继条件`),next:ot(c.next,`节拍 ${s} 缺少记忆后继目标`)}})}function _r(r,s){const c=Dg(r);if(c)throw new Error(`${s}：${c}`);return r}function Zh(r,s){if(!Bn(r))throw new Error(`节拍 ${s} 的旗标无法读取`);const c={};for(const[u,f]of Object.entries(r)){if(typeof f!="string"&&typeof f!="number"&&typeof f!="boolean")throw new Error(`节拍 ${s} 的旗标 ${u} 只能是文字、数字或是否`);c[u]=f}return c}function Or(r,s,c){if(!Array.isArray(r)||r.some(u=>typeof u!="string"))throw new Error(`节拍 ${s} 的 ${c} 必须是 id 列表`);return r}function zg(r,s){if(!Array.isArray(r)||r.some(c=>typeof c!="string"))throw new Error(`${s} 必须是文字列表`);return r}function Kh(r,s){if(r!=="left"&&r!=="right")throw new Error(`${s} 的 channel 必须是 left 或 right`);return r}function P0(r,s){if(r!=="type"&&r!=="pop"&&r!=="image"&&r!=="thought")throw new Error(`节拍 ${s} 的呈现方式必须是 type、pop、image 或 thought`);return r}function Bh(r,s){if(typeof r!="number"||!Number.isInteger(r)||r<0)throw new Error(`${s} 必须是非负整数`);return r}function qg(r){if(r!==void 0){if(typeof r!="number"||!Number.isInteger(r)||r<1)throw new Error("chapter 必须是从 1 开始的整数");return r}}function ot(r,s){if(typeof r!="string")throw new Error(s);return r.trim()}function Bn(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}const Bg=["left","right"];function Gh(r,s,c){var v,p,g;const u=((v=r.archive)==null?void 0:v[s])??[],f=(p=r.context)==null?void 0:p[s],m=r.chapter[s];if(u.some(k=>f===void 0?k.chapter===m:k.section===f))return r;const w=r.messages.filter(k=>k.channel===s&&k.delivery!=="thought").map(k=>k.beatId),b=f===void 0?[...new Set(w)]:Ug(c,s,[...r.completed,...w]).filter(k=>{var D;return((D=k.context)==null?void 0:D.section)===f}).map(k=>k.id);if(b.length===0)return r;const S={chapter:((g=c.find(k=>k.id===b[0]))==null?void 0:g.chapter)??m,beatIds:b,...f===void 0?{}:{section:f}};return{...r,archive:{left:[],right:[],...r.archive,[s]:[...u,S]}}}function Ug(r,s,c){const u=new Map(r.map(f=>[f.id,f]));return[...new Set(c)].flatMap(f=>{const m=u.get(f);return(m==null?void 0:m.channel)===s&&!m.control?[m]:[]})}function e1(r,s,c){var v,p,g,k,D;if(r.context!==void 0||!s.some(U=>U.context))return r;const u={},f={...r.ritual},m={left:((v=r.archive)==null?void 0:v.left)??[],right:((p=r.archive)==null?void 0:p.right)??[]},w=r.endings.some(U=>["未交换微信","分手","和好"].includes(U));for(const U of Bg){const V=Ug(s,U,[...m[U].flatMap(de=>de.beatIds),...r.completed,...r.messages.filter(de=>de.channel===U).map(de=>de.beatId),...r.pending[U]?[r.pending[U].beatId]:[]]);let ne=V.reduce((de,ce)=>{var Fe;const le=(Fe=ce.context)==null?void 0:Fe.section;return le!==void 0&&(de===void 0||le>de)?le:de},void 0),Te=f[U];if(Te&&Te.contextTo===void 0){const de=(k=(g=c(U))==null?void 0:g.context)==null?void 0:k.section;de===void 0||de===ne||ne===void 0?Te=null:(Te={...Te,contextTo:de},Te.phase==="pause"&&(ne=de))}ne!==void 0&&(u[U]=ne),f[U]=Te;const ve=new Map;for(const de of V){const ce=(D=de.context)==null?void 0:D.section;if(ce===void 0||ne===void 0||ce>ne||ce===ne&&!w&&(Te==null?void 0:Te.phase)!=="mask")continue;const le=ve.get(ce)??{chapter:de.chapter??1,section:ce,beatIds:[]};le.beatIds.push(de.id),ve.set(ce,le)}m[U]=[...ve.values()].sort((de,ce)=>de.section-ce.section)}const b=new Map(s.map(U=>[U.id,U])),S=r.messages.filter(U=>{var ne,Te;const V=(Te=(ne=b.get(U.beatId))==null?void 0:ne.context)==null?void 0:Te.section;return V===void 0||V===u[U.channel]});return{...r,archive:m,context:u,ritual:f,messages:S}}function t1(r,s){const c={left:[],right:[]};if(!r||typeof r!="object")return c;const u=new Map(s.map(f=>[f.id,f]));for(const f of Bg){const m=r[f];if(Array.isArray(m))for(const w of m){if(!w||!Number.isInteger(w.chapter)||!Array.isArray(w.beatIds))continue;const b=Mr(w.section)?w.section:void 0;if(c[f].some(v=>b===void 0?v.section===void 0&&v.chapter===w.chapter:v.section===b))continue;const S=w.beatIds.filter(v=>{var g;if(typeof v!="string")return!1;const p=u.get(v);return(p==null?void 0:p.channel)===f&&(b===void 0?(p.chapter??1)===w.chapter:((g=p.context)==null?void 0:g.section)===b)});S.length>0&&c[f].push({chapter:w.chapter,beatIds:[...new Set(S)],...b===void 0?{}:{section:b}})}}return c}const Vo=2200,n1=2e3;function Vh(r,s){return!s.some(c=>{var u;return c.next===r.id||((u=c.choices)==null?void 0:u.some(f=>{var m;return f.next===r.id||((m=f.记忆后继)==null?void 0:m.some(w=>w.next===r.id))}))})}function og(r,s){const c=r.filter(u=>u.channel===s).map(u=>u.chapter??0).filter(u=>u>0);return c.length>0?Math.min(...c):1}function Lg(r){return{completed:[],flags:{},activated:r.filter(s=>Vh(s,r)).map(s=>s.id),messages:[],pending:{left:null,right:null},memories:{left:[],right:[]},chapter:{left:og(r,"left"),right:og(r,"right")},ritual:{left:null,right:null},archive:{left:[],right:[]},endings:[],error:null,runId:0}}function Nr(r,s){var u,f,m;if(r.chapter[s]<5)return 1;const c=s==="left"?"5m.1.1-":"5f.1.1-";return(u=r.pending[s])!=null&&u.beatId.startsWith(c)||((f=r.ritual[s])==null?void 0:f.contextTo)===2&&((m=r.ritual[s])==null?void 0:m.phase)==="pause"?1:5}function i1(r,s,c,u){const f=r.memories[s];if(c.label.trim()===""||f.some(b=>b.label===c.label)||f.length>=Nr(r,s)&&!u||u&&!f.some(b=>b.label===u))return r;const w=f.filter(b=>b.label!==u);return w.length>=Nr(r,s)?r:{...r,memories:{...r.memories,[s]:[...w,c]}}}function a1(r,s,c){const u=r.memories[s],f=u.filter(m=>m.label!==c);return f.length===u.length?r:{...r,memories:{...r.memories,[s]:f}}}function Gg(r,s,c){return r.memories[s].some(u=>u.label===c)}function Xg(r,s,c){var u;return(u=c.记忆后继)==null?void 0:u.find(f=>f.all.every(m=>Gg(r,s,m)))}function Jh(r,s,c){return c.需记忆&&!Gg(r,s,c.需记忆)?c.需记忆:c.记忆后继&&!Xg(r,s,c)?"相关旧记忆":null}function Fg(r,s,c){var v;if((v=r.ritual)!=null&&v[s]||r.pending[s])return!1;const u=Va(r,s,c);if(!u)return!1;const f=s==="left"?"right":"left",m=r.pending[f],w=m?c.find(p=>p.id===m.beatId):r.ritual[f]&&u.chapter===r.chapter[s]?Va(r,f,c):null,b=(w==null?void 0:w.chapter)===u.chapter&&u.timeRank!==void 0&&(w==null?void 0:w.timeRank)===u.timeRank;if(w&&(u.chapter??0)>=5&&!b&&Rr(w,u)<0)return!1;const S=new Set(r.completed);return!c.some(p=>{var g;return p.channel===f&&((g=p.window)==null?void 0:g.上界.includes(u.id))&&r.activated.includes(p.id)&&!S.has(p.id)})}function o1(r,s){var u;const c=[];for(const f of["left","right"]){if((u=r.ritual)!=null&&u[f]||r.pending[f]||!Fg(r,f,s))continue;const m=Va(r,f,s);m&&c.push({channel:f,beat:m})}return c.length===0?null:(c.sort((f,m)=>Rr(f.beat,m.beat)),{type:"arm",channel:c[0].channel})}function Qg(r,s){return r.messages.some(c=>c.channel===s)?{...r,messages:r.messages.filter(c=>c.channel!==s)}:r}function l1(r,s,c){var f;const u=(f=r.ritual)==null?void 0:f[s];if(!u||c<u.until)return r;if(u.phase==="mask"){const m=Qg(r,s);return{...m,chapter:{...m.chapter,[s]:u.to},...u.contextTo===void 0?{}:{context:{...m.context,[s]:u.contextTo}},ritual:{...m.ritual,[s]:{...u,phase:"pause",until:c+n1}}}}return{...r,ritual:{...r.ritual,[s]:null}}}function r1(r,s){const c=new Set(r.completed);for(const u of s)if(!c.has(u.id)&&r.activated.includes(u.id)&&Dr(u,c)==="closed")return I0(u,c);return null}function s1(r,s){const c=new Set([...r.activated,...r.completed]),u=s.filter(f=>!c.has(f.id)&&(Vh(f,s)||u1(f,r,s))).map(f=>f.id);return u.length===0?r:{...r,activated:[...r.activated,...u]}}function u1(r,s,c){return c.some(u=>u.next===r.id&&s.completed.includes(u.id))}function h1(r,s){return r.messages.filter(c=>c.channel===s)}function Va(r,s,c){const u=new Set(r.completed);let f=null;for(const m of c){if(m.channel!==s||u.has(m.id)||!r.activated.includes(m.id)||Zg(m,r.flags)!=="ok"||(m.requires??[]).some(b=>!u.has(b)))continue;const w=Dr(m,u);w==="waiting"||w==="closed"||(!f||Rr(m,f)<0)&&(f=m)}return f}function c1(r,s,c){var v;const u=Va(r,s,c),f=[],m=new Set(r.completed);for(const p of c){if(p.channel!==s||m.has(p.id)||!r.activated.includes(p.id))continue;const g=Zg(p,r.flags);if(g==="no")continue;const k=(p.requires??[]).filter(U=>!m.has(U)),D=Dr(p,m);if(g==="wait"||D==="waiting"){f.push({id:p.id,unmet:k.length>0?k:Object.keys(p.when??{})});continue}if(D==="closed"){f.push({id:p.id,unmet:[`区间已关闭：${((v=p.window)==null?void 0:v.上界.join("/"))??""}`]});continue}k.length>0&&f.push({id:p.id,unmet:k})}const w=c.some(p=>p.channel===s),b=r.endings.find(p=>c.some(g=>g.ending===p&&g.channel===s&&m.has(g.id)))??null;return{mode:w?u?"available":f.length>0?"gated":"ended":"empty",availableId:(u==null?void 0:u.id)??null,locked:f,endingId:b}}function d1(r,s){const c=new Map;for(const f of s)f.ending&&c.set(f.ending,[...c.get(f.ending)??[],f.id]);const u=new Set(r.completed);return[...c.entries()].filter(([,f])=>f.length>0&&f.every(m=>u.has(m))).map(([f])=>f)}function Cr(r){return r.endings.find(s=>s==="未交换微信"||s==="和好"||s==="分手")}function f1(r,s,c,u=Date.now()){var v,p;if(!Fg(r,s,c))return r;const f=Va(r,s,c);if(!f)return r;const m=f.chapter??r.chapter[s],w=(v=f.context)==null?void 0:v.section,b=(p=r.context)==null?void 0:p[s];return(w===void 0?m!==r.chapter[s]:!f.control&&b!==void 0&&b!==w)?{...Gh(r,s,c),ritual:{...r.ritual,[s]:{from:r.chapter[s],to:m,...w===void 0?{}:{contextTo:w},phase:"mask",until:u+Vo,startedAt:u}}}:(m!==r.chapter[s]&&(r={...r,chapter:{...r.chapter,[s]:m}}),!f.control&&w!==void 0&&w!==b&&(r={...r,context:{...r.context,[s]:w}}),r=Yg(r,f,c),f.lines.length===0&&f.choices&&f.choices.length>0?Jo(r,s,{kind:"choices",beatId:f.id}):f.control?Wh(r,s,f,r.messages,void 0,f.next,c):Jo(r,s,{kind:"lines",beatId:f.id,lineIndex:0}))}function m1(r,s,c){const u=r.pending[s];if(!u||u.kind!=="lines")throw new Error(`${Wa(s)}没有正在播出的台词`);const f=$h(c,u.beatId),m=f.lines[u.lineIndex];if(!m)throw new Error(`节拍 ${f.id} 没有第 ${u.lineIndex+1} 句`);const w=[...r.messages,{id:`${f.id}:${u.lineIndex}`,channel:s,beatId:f.id,from:m.from,text:m.text,delivery:m.delivery,caption:m.caption,timing:m.timing}],b=u.lineIndex+1;return b<f.lines.length?{...Jo(r,s,{kind:"lines",beatId:f.id,lineIndex:b}),messages:w}:f.choices&&f.choices.length>0?{...Jo(r,s,{kind:"choices",beatId:f.id}),messages:w}:Wh(r,s,f,w,void 0,f.next,c)}function y1(r,s,c,u){var v,p;const f=r.pending[s];if(!f||f.kind!=="choices")throw new Error(`${Wa(s)}还不能选：这一侧的话还没说完`);const m=$h(u,f.beatId),w=(v=m.choices)==null?void 0:v[c];if(!w)throw new Error(`节拍 ${m.id} 没有第 ${c+1} 个选项`);const b=Jh(r,s,w);if(b)throw new Error(`节拍 ${m.id} 的选项「${w.thought}」需要记忆「${b}」，本窗还没存`);const S=(p=Xg(r,s,w))==null?void 0:p.next;return Jo(r,s,{kind:"reply",beatId:m.id,choiceIndex:c,...S?{memoryNext:S}:{}})}function g1(r,s,c){var b;const u=r.pending[s];if(!u||u.kind!=="reply")throw new Error(`${Wa(s)}没有待发出的回复`);const f=$h(c,u.beatId),m=(b=f.choices)==null?void 0:b[u.choiceIndex];if(!m)throw new Error(`节拍 ${f.id} 没有第 ${u.choiceIndex+1} 个选项`);const w=[...r.messages,{id:`${f.id}:reply:${u.choiceIndex}`,channel:s,beatId:f.id,from:"ai",text:m.reply,delivery:"type",timing:m.timing}];return Wh(r,s,f,w,m.set,u.memoryNext??m.next,c)}function Wh(r,s,c,u,f,m,w){if(r.completed.includes(c.id))return r;const b={...r.flags};if(f)for(const[U,V]of Object.entries(f))b[U]=V;const S=p1(r.memories,c.清空记忆),v=m&&!r.activated.includes(m)?[...r.activated,m]:r.activated,p=[...r.completed,c.id],g={...r,messages:u,flags:b,memories:S,activated:v,completed:p,pending:{...r.pending,[s]:null}},k=d1(g,w),D={...g,endings:k};return!Cr(D)||Cr(r)?D:Gh(Gh(D,"left",w),"right",w)}function p1(r,s){return s?s==="all"?{left:[],right:[]}:{...r,[s]:[]}:r}function Jo(r,s,c){return{...r,pending:{...r.pending,[s]:c}}}function Zg(r,s){if(!r.when)return"ok";for(const[c,u]of Object.entries(r.when)){if(!(c in s))return"wait";if(s[c]!==u)return"no"}return"ok"}function $h(r,s){const c=r.find(u=>u.id===s);if(!c)throw new Error(`找不到节拍 ${s}`);return c}function Kg(r,s){return r.startedAt!==void 0?Math.max(0,s-r.startedAt):r.phase==="pause"?Vo:Math.max(0,Vo-(r.until-s))}function Ph(){const[r,s]=ie.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return ie.useEffect(()=>{const c=window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>s(c.matches);return c.addEventListener("change",u),()=>c.removeEventListener("change",u)},[]),r}function w1(r){const[s,c]=ie.useState(()=>Date.now());return ie.useEffect(()=>{if(!r)return;c(Date.now());const u=window.setInterval(()=>c(Date.now()),48);return()=>window.clearInterval(u)},[r]),s}const lg=["/","|","\\","-"];function rg(){const r=Ph(),[s,c]=ie.useState(0);return ie.useEffect(()=>{if(r)return;const u=window.setInterval(()=>c(f=>(f+1)%lg.length),115);return()=>window.clearInterval(u)},[r]),_.jsx("span",{className:"terminal-spinner","aria-hidden":"true",children:r?"-":lg[s]})}function Vg(r,s,c,u,f){const[m,w]=ie.useState(()=>s?Math.min(1,r.length):r.length),b=ie.useRef(!1),S=ie.useRef(u),v=ie.useRef(f);return S.current=u,v.current=f,ie.useEffect(()=>{var g;if(!s)return;if(m>=r.length){b.current||(b.current=!0,(g=S.current)==null||g.call(S));return}const p=window.setTimeout(()=>{var k;w(D=>D+1),(k=v.current)==null||k.call(v)},Math.max(0,c));return()=>window.clearTimeout(p)},[m,r,s,c]),s?r.slice(0,m):r}function v1({text:r,interval:s,onFinished:c}){const u=Vg(r,!0,s,c);return _.jsxs(_.Fragment,{children:[u,u.length<r.length?_.jsx("span",{className:"caret","aria-hidden":"true"}):null]})}const Ja={left:{id:"01",name:"男生",gender:"男",age:21,work:"在校大学生",city:"西安"},right:{id:"02",name:"女生",gender:"女",age:22,work:"大学生 · 项目组实习",city:"西安"}};function b1({mode:r,choices:s,selected:c,onMove:u,onPick:f,memoryGate:m}){const{t:w}=In();return _.jsx("div",{className:"choice-list","data-testid":"composer","data-mode":r,children:r==="active"?_.jsx("div",{role:"group","aria-label":w("选一个想法","Choose a thought"),children:s.map((b,S)=>{const v=m(b),p=v!==null,g=!p&&c===S;return _.jsxs("button",{type:"button","data-testid":"choice","data-index":S,"data-gated":p||void 0,disabled:p,title:p?w(`需要记忆：${v}`,`Requires memory: ${r0(v)}`):void 0,onMouseEnter:()=>u(S),onFocus:()=>u(S),onClick:()=>f(S),className:"choice-line","data-current":g||void 0,children:[_.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:g?">":""}),_.jsxs("span",{children:[b.需记忆||b.记忆后继?_.jsx("span",{className:"memory-tag","data-testid":"memory-tag",children:"[MEM] "}):null,b.thought]})]},S)})}):null})}function sg({from:r,text:s,delivery:c,caption:u,animate:f=!1,typeIntervalMs:m=100,marks:w,onSaveMark:b,onFinished:S,onProgress:v,onSkip:p}){const{t:g}=In(),k=f&&c==="type",D=r==="ai",U=Vg(s,k,m,S,v);if(c==="thought")return null;const V=ne=>{if(!w||w.length===0)return ne;const Te=w.map(ce=>({mark:ce,at:ne.indexOf(ce.text)})).filter(ce=>ce.at>=0).sort((ce,le)=>ce.at-le.at);if(Te.length===0)return ne;const ve=[];let de=0;for(const{mark:ce,at:le}of Te)le<de||(le>de&&ve.push(ne.slice(de,le)),ve.push(ce.saved?_.jsxs("span",{"data-testid":"memory-mark","data-saved":"true",className:"memory-mark-saved",children:[ce.text,_.jsxs("span",{className:"memory-tag",children:[" [MEM] ",g("已存","Saved")]})]},`${le}-${ce.text}`):_.jsxs("button",{type:"button","data-testid":"memory-mark","data-saved":"false",className:"memory-mark",disabled:!b,"aria-label":g(`存记忆：${ce.text}`,`Save memory: ${ce.text}`),onClick:()=>b==null?void 0:b(ce.text),children:[ce.text," [+]"]},`${le}-${ce.text}`)),de=le+ce.text.length);return de<ne.length&&ve.push(ne.slice(de)),ve};return c==="image"?_.jsxs("div",{className:`msg-row ${D?"right":"left"}`,"data-from":r,"data-delivery":c,children:[_.jsx("span",{className:"msg-direction","aria-hidden":"true",children:D?"OUT<":"IN>"}),_.jsxs("figure",{className:"msg-image",children:[_.jsx("img",{src:s,alt:u??g("图片","Image")}),u?_.jsx("figcaption",{children:u}):null]})]}):_.jsxs("div",{className:`msg-row ${D?"right":"left"}`,"data-from":r,"data-delivery":c,children:[_.jsx("span",{className:"msg-direction","aria-hidden":"true",children:D?"OUT<":"IN>"}),_.jsxs("div",{className:D?"msg-ai":"msg-user","data-testid":"bubble-text",onClick:k?p:void 0,title:k?g("点击跳过","Click to skip"):void 0,children:[D?_.jsx("span",{className:"msg-ink",children:V(U)}):V(U),k&&U.length<s.length?_.jsx("span",{className:"caret","aria-hidden":"true"}):null]})]})}function k1({script:r,channel:s,state:c,dispatch:u,active:f,focused:m,selected:w,skipRefs:b,onMove:S,onPick:v,now:p,reduced:g,running:k,onMemoryFull:D}){const{language:U,t:V}=In(),{name:ne,id:Te}=Ja[s],ve=V(ne,s==="left"?"Him":"Her"),de=d=>U==="en"?l0(d):d.text,ce=(d,I)=>{var C,B;return U==="en"?((B=(C=Ka[d])==null?void 0:C.memories.find(G=>G.label===I.缩略标签))==null?void 0:B.quote[1])??I.短句:I.短句},le=c.pending[s],Fe=h1(c,s),be=Fe.filter(d=>d.delivery!=="thought"),W=(le==null?void 0:le.kind)==="choices"?[...Fe].reverse().find(d=>d.beatId===le.beatId&&d.delivery==="thought"):null,Oe=c1(c,s,r.beats),Ee=c.ritual[s],Ne=Ee?Kg(Ee,p):0,P=Ee?Ee.phase==="pause"||g?be.length:Math.floor(be.length*Math.min(1,Ne/Vo)):0,ae=be.slice(P),ye=d=>{var I;return((I=r.beatById)==null?void 0:I.get(d))??r.beats.find(C=>C.id===d)},Ce=new Set(c.memories[s].map(d=>d.label)),j=(d,I)=>{var B;return(((B=ye(d))==null?void 0:B.记忆候选)??[]).filter(G=>I.includes(G.短句)).map(G=>({text:ce(d,G),saved:Ce.has(G.缩略标签)}))},fe=c.memories[s].length,he=Nr(c,s),[He,ee]=ie.useState(!1),Pe=ie.useRef(null),[Ge,ut]=ie.useState(),T=k?S1(r,c,s):null,Z=T?de(T):"",J=T&&{...T,text:Z,timing:{...T.timing,typeIntervalMs:T.timing.typeIntervalMs*T.text.length/Math.max(1,Z.length)}},re=(J==null?void 0:J.token)??"",pe=(Ge==null?void 0:Ge.token)===re?Ge.phase:"idle",Re=ie.useRef(()=>{}),we=ie.useRef(c),oe=ie.useRef(null),ke=ie.useRef([]),It=ie.useRef(0),Vt=ie.useRef(void 0),Lt=ie.useRef(null),ft=ie.useRef(null),Ke=ie.useRef(new Map);ie.useLayoutEffect(()=>{var C;const d=ft.current;if(!d)return;if(!Ee||g){Ke.current.clear();return}d.scrollTop=0;const I=new Map;for(const B of d.querySelectorAll("[data-clear-row]")){const G=B.dataset.clearRow,X=B.offsetTop,q=Ke.current.get(G);I.set(G,X),q!==void 0&&q!==X&&((C=B.animate)==null||C.call(B,[{transform:`translateY(${q-X}px)`},{transform:"translateY(0)"}],{duration:135,easing:"ease-out"}))}Ke.current=I},[Ee,P,g]),we.current=c;const ze=ie.useCallback(()=>{for(const d of ke.current)window.clearTimeout(d);ke.current=[]},[]),ht=ie.useCallback((d,I)=>{if(I<=0){d();return}ke.current.push(window.setTimeout(d,I))},[]),rn=ie.useCallback(()=>{ze();const d=we.current.pending[s];if(!d||d.kind==="choices")return;const I=`${we.current.runId}|${d.beatId}:${d.kind}:${"lineIndex"in d?d.lineIndex:"choiceIndex"in d?d.choiceIndex:0}`;oe.current!==I&&(oe.current=I,Lt.current={runId:we.current.runId,beatId:d.beatId,finishedAt:Vt.current??performance.now()},u(d.kind==="lines"?{type:"commit-line",channel:s}:{type:"commit-reply",channel:s}))},[s,ze,u]);Re.current=rn;const kt=ie.useCallback(()=>{Vt.current=performance.now(),ht(()=>Re.current(),It.current)},[ht]),Jt=ie.useCallback(()=>Re.current(),[]);ie.useEffect(()=>{const d=b.current;return d[s]=Jt,()=>{delete d[s]}},[s,Jt,b]),ie.useEffect(()=>{var q,$,se;ze();const d=ge=>ut({token:re,phase:ge});if(!J)return d("idle"),ze;const I=g?{...Rg}:J.timing,C=Lt.current,B=we.current,G=((q=B.pending[s])==null?void 0:q.kind)==="reply";let X=G?0:I.pauseBeforeMs;if(!g&&!G&&(C==null?void 0:C.runId)===B.runId){const ge=k0(($=ye(C.beatId))==null?void 0:$.context,(se=ye(J.beatId))==null?void 0:se.context);if(ge>0){const xe=I.pauseBeforeMs>Ko[Hg].pauseBeforeMs?I.pauseBeforeMs:0;X=Math.max(xe,ge-(performance.now()-C.finishedAt))}}return Vt.current=void 0,It.current=J.delivery==="thought"?0:I.afterMs,d("pause"),ht(()=>{d("indicator"),ht(()=>{!g&&J.delivery==="thought"||S0(J.delivery,g)?d("typing"):(d("shown"),kt())},I.indicatorMs)},X),ze},[re,s,ze,kt,ht,J==null?void 0:J.delivery,g]),ie.useEffect(()=>{const d=ft.current;d&&!Ee&&(d.scrollTop=d.scrollHeight)},[be.length,pe,re,Ee]);const At=le?ye(le.beatId):void 0,wt=k&&(le==null?void 0:le.kind)==="choices"&&(At==null?void 0:At.choices)&&At.choices.length>0,Un=wt?"active":(le==null?void 0:le.kind)==="lines"||(le==null?void 0:le.kind)==="reply"||Oe.mode==="gated"||Ee?"locked":"empty",ct=(J==null?void 0:J.delivery)==="thought"?J:null;function An(d,I){var X,q,$;const C=(X=ye(d))==null?void 0:X.context,B=I?(q=ye(I))==null?void 0:q.context:void 0;if(!C||d===I)return;const G=C.section!==(B==null?void 0:B.section)?C.time??C.entryTime:C.time!==B.time?C.time:void 0;return G&&V(G,/^\d{2}:\d{2}$/.test(G)?G:(($=Ka[d])==null?void 0:$.time)??G)}const sn=be.at(-1),l=At??(sn&&ye(sn.beatId)),N=l!=null&&l.context?void 0:(l==null?void 0:l.time)??(l==null?void 0:l.label),Q=le&&An(le.beatId,sn==null?void 0:sn.beatId);ie.useEffect(()=>ee(!1),[c.runId,c.chapter[s]]),ie.useEffect(()=>{if(!He)return;const d=I=>{var C;I.target instanceof Node&&!((C=Pe.current)!=null&&C.contains(I.target))&&ee(!1)};return document.addEventListener("pointerdown",d),()=>document.removeEventListener("pointerdown",d)},[He]);function K(d){fe>=he?D(d):u({type:"save-memory",channel:s,...d})}const z=`${fe}/${he}`;return _.jsxs("section",{className:"pane terminal-column","data-testid":`pane-${s}`,"aria-label":ve,"data-focused":m||void 0,"data-playing":f||void 0,children:[_.jsxs("header",{className:"pane-head ascii-rule",children:[_.jsx("span",{className:"pane-signal","aria-hidden":"true",children:f?">":" "}),_.jsxs("span",{className:"pane-number",children:["USER ",Te," /"]}),_.jsx("span",{className:"pane-name",children:ve}),_.jsxs("div",{className:"pane-head-right",children:[N?_.jsx("span",{className:"pane-meta","data-testid":`time-${s}`,children:N}):null,_.jsx("button",{type:"button",className:"memory-entry","data-testid":`memory-counter-${s}`,ref:Pe,onClick:()=>ee(d=>!d),onBlur:()=>ee(!1),"aria-expanded":He,"aria-label":V(`Memory 数量：${z}`,`Memory count: ${z}`),children:He?`[${V("Memory 数量：","Memory count: ")}${z}]`:`[MEM ${z}]`})]})]}),_.jsxs("div",{ref:ft,className:"messages",role:"log","aria-label":V(`${ve}的对话`,`${ve} · Chat`),children:[ae.map((d,I)=>{var B;const C=An(d.beatId,(B=be[P+I-1])==null?void 0:B.beatId);return _.jsxs("div",{"data-clear-row":d.id,children:[C?_.jsx("div",{className:"chat-date",children:C}):null,_.jsx(sg,{from:d.from,text:de(d),delivery:d.delivery,caption:d.caption,marks:j(d.beatId,d.text),onSaveMark:Ee?void 0:G=>{var q;const X=(((q=ye(d.beatId))==null?void 0:q.记忆候选)??[]).find($=>ce(d.beatId,$)===G);X&&K({label:X.缩略标签,text:X.短句,beatId:d.beatId})}})]},d.id)}),J&&J.delivery!=="thought"&&pe!=="idle"&&Q?_.jsx("div",{className:"chat-date",children:Q}):null,Ee&&Ne<Vo+500&&!g?_.jsxs("p",{className:"system-line","data-clear-row":"system","data-testid":`resetting-${s}`,role:"status",children:["[SYS] ",Ee.phase==="mask"?V("正在清空上下文…","Clearing context…"):V("已清空","Context cleared")]}):null,pe==="indicator"&&J&&J.delivery!=="thought"?_.jsxs("div",{className:`msg-row ${J.from==="ai"?"right":"left"} message-wait`,"data-testid":`message-wait-${s}`,children:[_.jsx("span",{className:"msg-direction",children:_.jsx(rg,{})}),_.jsx("button",{type:"button",className:`${J.from==="ai"?"msg-ai":"msg-user"} message-wait-button`,"data-testid":"skip",onClick:Jt,"aria-label":V("跳过当前播放","Skip current playback"),children:J.from==="ai"?V("正在发送","Sending"):V("正在接收","Receiving")})]}):null,(pe==="typing"||pe==="shown")&&J&&J.delivery!=="thought"?_.jsx(sg,{from:J.from,text:J.text,delivery:J.delivery,caption:J.caption,animate:pe==="typing",typeIntervalMs:J.timing.typeIntervalMs,onFinished:pe==="typing"?kt:void 0,onProgress:()=>{const d=ft.current;d&&(d.scrollTop=d.scrollHeight)},onSkip:Jt},J.token):null]}),!Ee&&(wt||ct&&pe!=="idle"&&pe!=="pause")?_.jsxs("div",{className:"composer",children:[W||ct?_.jsxs("div",{className:"think-block","data-testid":`think-${s}`,children:[_.jsx("span",{className:"think-block-head",children:"[THINKING]"})," ",ct&&pe==="indicator"?_.jsxs("span",{className:"think-progress",children:[_.jsx(rg,{})," ",V("正在思考","Thinking")]}):ct&&pe==="typing"?_.jsx(v1,{text:ct.text,interval:Math.max(15,Math.min(31,ct.timing.typeIntervalMs)),onFinished:kt},ct.token):(ct==null?void 0:ct.text)??(W&&de(W))]}):null,_.jsx(b1,{mode:Un,choices:wt?At.choices.map((d,I)=>{var C,B;return{...d,thought:V(d.thought,((B=(C=Ka[At.id])==null?void 0:C.choices[I])==null?void 0:B.thought[1])??d.thought)}}):[],selected:w,onMove:S,onPick:v,memoryGate:d=>Jh(c,s,d)})]}):null]})}function S1(r,s,c){var w,b;const u=s.pending[c];if(!u||u.kind==="choices")return null;const f=((w=r.beatById)==null?void 0:w.get(u.beatId))??r.beats.find(S=>S.id===u.beatId);if(!f)return null;if(u.kind==="lines"){const S=f.lines[u.lineIndex];return S?{token:`${s.runId}|${f.id}:${u.lineIndex}`,id:`${f.id}:${u.lineIndex}`,beatId:f.id,from:S.from,text:S.text,delivery:S.delivery,caption:S.caption,timing:S.timing??Ar([])}:null}const m=(b=f.choices)==null?void 0:b[u.choiceIndex];return m?{token:`${s.runId}|${f.id}:reply:${u.choiceIndex}`,id:`${f.id}:reply:${u.choiceIndex}`,beatId:f.id,from:"ai",text:m.reply,delivery:"type",timing:m.timing??Ar([])}:null}const x1=[["L1 L2 L3","他请助手推荐桌游店，想选一家适合多人聚会的店。"],["R1-shiguang R1-xindong R1-xushi","朋友约她去桌游店，她让助手查了地点。"],["R2","出门时间紧，她问要不要化妆。"],["3.1.1-A 3.1.1-C","他到了一家临时改换的桌游店，现场有不少陌生人。"],["3.1.1-B","他到了桌游店，发现除了朋友几乎都不认识。"],["3.2.1","他和一位戴耳机的人搭话，起初误以为对方不想理他。"],["3.2.2 3.3.1","桌游开始后，他留意到一位像是表妹同桌的女生。"],["3.2.2-A 3.3.1-A","他留意到刚进来的女生的眼妆和笑声，觉得她像是表妹的同桌。"],["3.2.3 3.2.4 3.3.2","他说下一局要开始了，先不聊了。"],["3.4.1","她出地铁后问了去桌游店的路。"],["3.4.2","她说没按助手的指路找到店，后来向同学问到了位置。"],["3.4.3-A 3.4.3-B 3.4.4","她问起一件衣服的牌子和价格。"],["4.1.1 4.2.1","桌游结束后，他向助手回顾了和那位女生的互动。"],["4.2.2","他想和她交换微信，又怕开口太唐突。"],["4.2.3","他打算借舍友的名义去问表妹。"],["4.2.3-direct","他当面问她能不能加微信，她请同桌帮忙推联系方式。"],["4.2.4 4.2.5","他重新想了想，决定先不问。"],["4.3.1 4.3.2 4.3.3","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。"],["4.3.4","她打算去问同桌。"],["4.3.6-direct","他当面问能不能加微信，她答应并请同桌转推。"],["4.3.5","她决定先不问。"],["5m.1.1-A 5m.1.1-B 5m.1.1-C 5m.1.1-D 5m.1.2 5m.1.3","加上微信后，他琢磨怎么开场，又问起她回消息的速度。"],["5m.1.4","他睡前收住话题，第二天早上她照常找他聊天。"],["5m.1.5","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。"],["5m.1.6 5m.2.1 5m.2.2","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。"],["5m.2.3 5m.2.5","他试着少发消息，等回复时还是觉得不踏实。"],["5m.2.4","他仍然频繁发消息，发现她回得一如既往地慢。"],["5m.3.1 5m.3.2 5m.3.3 5m.3.4","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。"],["5m.4.1 5m.4.2 5m.4.3 5m.4.4","他和助手商量表白，发出消息后收到她愿意试试的答复。"],["5f.1.1-A 5f.1.1-B 5f.1.1-C 5f.1.1-D 5f.1.2 5f.1.3","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。"],["5f.1.4","她告诉他自己累了，收到一长串关心的话。"],["5f.1.5","她发了个表情包，他回了一句让她早点休息。"],["5f.2.1","他夸她开朗，她向助手说起自己的社交生活。"],["5f.2.2","她在和闺蜜吃饭时说起他。"],["5f.2.3","她向助手谈到自己累时习惯一个人待着。"],["5f.2.4","她说他问起家里的事，自己岔开了话题。"],["5f.3.1 5f.3.2 5f.3.3 5f.3.4","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。"],["5f.4.1 5f.4.2 5f.4.3 5f.4.4","收到表白后她犹豫过，最后回复说愿意试试。"],["6m.CHOICE 6m.M2A 6m.M2B","确定关系后，他用两人的照片发了朋友圈。"],["6m.M3 6m.M4","他提议吃青提蛋糕庆祝，后来把合照原图发给她。"],["6m.M5 6m.MEMCHOICE","他问她能不能一起过满月纪念日，又来问礼物怎么准备。"],["6m.M7A","他下单洗了两张合照。"],["6m.M7B","他先记下纪念日，准备以后再想礼物。"],["6f.F1 6f.CHOICE","她看到了他发的合照，来问自己要不要也发一条。"],["6f.F3A","她发了朋友圈，同事来问照片里的人是谁。"],["6f.F3B","她把照片发给闺蜜，闺蜜打来电话。"],["6f.F4 6f.F5","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。"],["6f.F6 6f.F7 6f.F8","她答应把满月纪念日那天留给他，并记进了日历。"],["7m.MONE","她赶项目、回消息变少，他说自己还是常想找她。"],["7m.MNEWS 7m.MPROJECT 7m.MDEMAND","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。"],["7m.MWAIT 7m.MFEAR 7m.MOWN","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。"],["7m.OPENCHOICE","她约他见面，也告诉他自己前一天是故意没回。"],["7m.PLAINCHOICE","她发来见面邀请，他还在犹豫要不要问前一天的事。"],["7m.SENTBOTH 7m.SENTHER 7m.SENTHIM 7m.SENTQUIET 7m.MEMBOTH 7m.MEMHER 7m.MEMHIM 7m.MEMQUIET 7m.PLANENDBOTH 7m.PLANENDHER 7m.PLANENDHIM 7m.PLANENDQUIET","两人约好下午四点在地铁口见，他来问吃什么比较合适。"],["7m.AFTERBOTH","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。"],["7m.AFTERHER","她提到自己气上了头，他换了话题。"],["7m.AFTERHIM","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。"],["7m.AFTERQUIET","他们一起吃了饭，没有提起周五的争执。"],["7f.FDAY 7f.FDAYMORE","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。"],["7f.FANGER 7f.FDEMAND","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。"],["7f.FNOTIFICATION 7f.FPUSH 7f.FOWN","她看到了他的消息，告诉助手自己故意没有回复。"],["7f.COUSIN","她还不想和他说话，开始考虑找别人聊聊。"],["7f.COUSINSENTNO","她决定找闺蜜聊聊。"],["7f.COUSINBACKNO","闺蜜问她还想不想见他，她说想见。"],["7f.COUSINSENTYES","她打算找同桌聊，想先请同桌别替她联系男友。"],["7f.COUSINBACKYES","同桌听她说完，劝她把自己介意的事告诉男友。"],["7f.FCHOICE 7f.FSENTEASY","她想当面说，最后发出了见面邀请。"],["7f.FSENTOPEN","发出邀请时，她也写了自己是故意让他等。"],["7f.RECEIVEDBOTH 7f.RECEIVEDHER 7f.RECEIVEDHIM 7f.RECEIVEDQUIET 7f.ACKBOTH 7f.ACKHIM 7f.SETBOTH 7f.SETHER 7f.SETHIM 7f.SETQUIET","他答应见面。她和他约好下午四点在地铁口碰头。"],["7f.AFTERBOTH","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。"],["7f.AFTERHER","她说自己当时气上了头，随后两人聊了别的。"],["7f.AFTERHIM","她解释为什么当时不愿回消息，随后和他一起吃了饭。"],["7f.AFTERQUIET","他们一起吃了饭，没有再提争执。"],["7f.STATION","她向助手说起吃饭时拍糊的照片。"],["8f.F101","交往满一个月，她打算给男友带点东西，问助手买什么。"],["8f.F102A","她买了蛋糕，放在办公室冰箱里。"],["8f.F102B","她买了盒曲奇，放进包里。"],["8m.M101","交往满一个月，他想给女友带杯喝的，问助手去哪儿买。"],["8m.M102A","他决定去青杏买饮料。"],["8m.M102B","他打算出门后再挑饮品店。"],["8f.F103 8f.F104","她临时加班，跟男友商量把晚饭改到另一天。"],["8m.M103","他收到晚饭改期的消息。虽然答应了，心里还是有点失落。"],["8m.M104","他买了吃的和喝的，没等到回复就出发了。"],["8m.M105 8m.M106","他在她公司楼下碰见她和同事，当众起了争执。他介意她说自己丢人。"],["8f.F105 8f.F106","她下楼拿外卖时碰见突然到访的男友，被他当着同事的面追问。"],["8m.M107 8m.M200 8m.M201","他来复述争执，提到自己要求看私聊、让她删除同事，也问她有没有回应他的委屈。"],["8f.F107 8f.F200 8f.F201","她来复述争执，说自己拒绝交出聊天记录，也拒绝删除同事。"],["8m.M202B5 8m.M202B7 8m.M202O5 8m.M202O7 8m.M202S 8m.M203B5 8m.M203B7 8m.M203O5 8m.M203O7 8m.M203S","他和助手借过去的经历重新回顾这次争执。"],["8f.F202B5 8f.F202B7 8f.F202O5 8f.F202O7 8f.F202S 8f.F203B5 8f.F203B7 8f.F203O5 8f.F203O7 8f.F203S","她和助手借过去的经历重新回顾这次争执。"],["8m.M202E 8m.M203E","他向助手说起自己当时没有被听见的感受。"],["8f.F202E 8f.F203E","她向助手说起自己被怀疑时的感受。"],["8m.M301R","他承认索看私聊和要求删人不妥，向女友道歉。"],["8f.F301RE 8f.F302RE","她收到道歉后仍然生气，读到他第二次回应后，也想为自己说过的话道歉。"],["8m.M302RE","道歉被反问后，他承认自己刚才的指责，让她晚点再回。"],["8f.F301ER 8f.F301RR","她想起自己当众说的话，决定为此道歉。"],["8m.M301ER 8m.M302ER","他收到道歉时仍有怨气，读完她后续的回应后，也承认自己不该突然去找她并当面质问。"],["8f.F302ER 8f.F303ER","道歉被顶回来后，她说明了当时为什么急着走，随后也收到他的道歉。"],["8m.M302RR 8m.M303RE 8m.M303ER","他来问怎么约她见面，想当面说清楚。"],["8f.F304G 8m.M304G","两人约好等她忙完后在楼下见。"],["8f.F305G 8m.M305G","两人当面谈过，约好到访前先确认，需要冷静时先说一声。"],["8f.F301E 8f.F302E","她决定结束关系，发出分手消息后准备回家。"],["8m.M301E 8m.M302E 8m.M303E","他收到分手消息，一时不知道怎么回，后来放下了手机。"]],T1=x1.map(([r,s])=>({beatIds:r.split(" "),text:s}));function E1(r){const s=new Map(r.beatIds.map((m,w)=>[m,w])),c=T1.map(m=>({text:m.text,beatIds:m.beatIds.filter(w=>s.has(w))})).filter(m=>m.beatIds.length>0),u=new Set(c.flatMap(m=>m.beatIds)),f=r.beatIds.filter(m=>!u.has(m));return f.length&&c.push({text:"本次会话还有其他已处理消息。",beatIds:f}),c.sort((m,w)=>Math.min(...m.beatIds.map(b=>s.get(b)))-Math.min(...w.beatIds.map(b=>s.get(b))))}const ug=["left","right"],Xh=3400;function I1({script:r,state:s,now:c,reduced:u,replacement:f,onCancelReplacement:m,onReplace:w,onForget:b}){var Fe,be;const{t:S}=In(),[v,p]=ie.useState({left:!0,right:!0}),[g,k]=ie.useState({});function D(W){var Ee,Ne;const Oe=s.ritual[W];if(!(!Oe||Oe.phase==="mask"&&Oe.contextTo!==void 0))return Oe.contextTo===void 0?Oe.from:(Ne=(Ee=s.archive)==null?void 0:Ee[W].at(-1))==null?void 0:Ne.section}const U=D("left"),V=D("right"),ne=!!Cr(s),Te=((Fe=s.context)==null?void 0:Fe.left)??s.chapter.left,ve=((be=s.context)==null?void 0:be.right)??s.chapter.right,de=ie.useRef(null),ce=ug.flatMap(W=>{var Oe;return(((Oe=s.archive)==null?void 0:Oe[W])??[]).flatMap(Ee=>{var Ne,P;return Ee.section===void 0||((Ne=s.ritual[W])==null?void 0:Ne.phase)==="mask"&&Ee.section===((P=s.context)==null?void 0:P[W])?[]:[`${W}:${Ee.section}`]})}),le=ie.useRef(new Set(ce));return ie.useLayoutEffect(()=>{var Ee,Ne;const W=Array.from(((Ee=de.current)==null?void 0:Ee.querySelectorAll("[data-archive-title]"))??[]),Oe=new Set(ce);le.current=new Set([...le.current].filter(P=>Oe.has(P)));for(const P of W){const ae=P.dataset.archiveTitle;!Oe.has(ae)||le.current.has(ae)||(le.current.add(ae),u||(Ne=P.animate)==null||Ne.call(P,[{opacity:0,transform:"translateX(-5px)"},{opacity:1,transform:"translateX(0)"}],{duration:320,easing:"ease-out"}))}}),ie.useLayoutEffect(()=>{const W=de.current,Oe=[...(W==null?void 0:W.querySelectorAll("[data-recording]"))??[]].at(-1);if(!W||!Oe)return;const Ee=W.getBoundingClientRect(),Ne=Oe.getBoundingClientRect();Ne.bottom>Ee.bottom?W.scrollTop+=Ne.bottom-Ee.bottom:Ne.top<Ee.top&&(W.scrollTop+=Ne.top-Ee.top)},[U,V,v,g,c]),ie.useEffect(()=>{p({left:!0,right:!0}),k({})},[s.runId]),ie.useEffect(()=>{U!==void 0&&(p(W=>({...W,left:!0})),k(W=>({...W,[`left:${U}`]:!0}))),V!==void 0&&(p(W=>({...W,right:!0})),k(W=>({...W,[`right:${V}`]:!0}))),ne&&(p({left:!0,right:!0}),k(W=>({...W,[`left:${Te}`]:!0,[`right:${ve}`]:!0})))},[U,V,ne,Te,ve,s.runId]),ie.useEffect(()=>{f&&p(W=>({...W,[f.channel]:!0}))},[f]),ie.useLayoutEffect(()=>{var W,Oe;f&&((Oe=(W=de.current)==null?void 0:W.querySelector("[data-replacement-option]"))==null||Oe.focus())},[f,v]),_.jsxs("aside",{className:"archive terminal-column","aria-label":"Context Store · Summary / Memory","data-testid":"terminal-archive",children:[_.jsxs("header",{className:"pane-head ascii-rule",children:[_.jsx("span",{className:"pane-name",children:"CONTEXT STORE"}),_.jsx("span",{className:"archive-kind",children:"SUMMARY / MEMORY"})]}),_.jsx("div",{className:"archive-scroll",ref:de,children:ug.map(W=>{var he,He;const Oe=((he=s.archive)==null?void 0:he[W])??[],Ee=s.memories[W],Ne=Ee.filter(ee=>!Oe.some(Pe=>Pe.beatIds.includes(ee.beatId))),P=s.ritual[W],ae=(He=s.context)==null?void 0:He[W],ye=!ne&&ae!==void 0&&!Oe.some(ee=>ee.section===ae),Ce=W==="left"?U:V,j=(f==null?void 0:f.channel)===W?f.entry:void 0,fe=Nr(s,W)===5?ee=>b(W,ee):void 0;return _.jsxs("div",{className:"archive-folder",children:[_.jsxs("button",{className:"tree-toggle","aria-expanded":v[W],type:"button",onClick:()=>p(ee=>({...ee,[W]:!ee[W]})),children:[_.jsx("span",{"aria-hidden":"true",children:v[W]?"[-]":"[+]"})," USER ",Ja[W].id," / ",S(Ja[W].name,W==="left"?"Him":"Her")]}),v[W]?_.jsxs("div",{className:"archive-branches",children:[j?_.jsxs("div",{className:"archive-replacement","aria-label":S("替换记忆","Replace memory"),children:[_.jsxs("p",{children:[S("[MEM] 已满 · 选择一条替换为","[MEM] Full · Replace one with")," 「",S(j.label,Lh(j).label),"」"]}),Ee.map(ee=>_.jsx("button",{type:"button",className:"tree-toggle","data-replacement-option":!0,onClick:()=>w(ee.label),children:S(`替换「${ee.label}」`,`Replace “${Lh(ee).label}”`)},ee.label)),_.jsxs("button",{type:"button",className:"memory-entry",onClick:m,children:["[",S("取消","Cancel"),"]"]})]}):null,!Oe.length&&!Ne.length&&!ye?_.jsx("div",{className:"muted",children:S("└ 尚无记录","└ No records")}):null,Ne.length?_.jsxs("details",{className:"archive-pending",children:[_.jsxs("summary",{children:[S("[MEMORY] 当前会话 · ","[MEMORY] Current session · "),Ne.length]}),Ne.map(ee=>_.jsx(Jg,{memory:ee,onForget:fe},ee.label))]}):null,Oe.map(ee=>{var J,re;const Pe=ee.section??ee.chapter,Ge=`${W}:${Pe}`,ut=Ce===Pe;if(ee.section===ae&&(P==null?void 0:P.contextTo)!==void 0&&P.phase==="mask")return _.jsx("div",{className:"archive-session muted",children:S("└ 收录中…","└ Recording…")},Ge);const T=ut&&P&&!u?Kg(P,c):Xh,Z=ee.section===void 0?(re=(J=r.chapters)==null?void 0:J.find(pe=>pe.index===ee.chapter))==null?void 0:re.title:_g[ee.section-1];return _.jsxs("div",{className:"archive-session","data-recording":ut||void 0,children:[_.jsxs("button",{className:"tree-toggle","aria-expanded":!!g[Ge],type:"button",onClick:()=>k(pe=>({...pe,[Ge]:!pe[Ge]})),children:[_.jsx("span",{"aria-hidden":"true",children:g[Ge]?"[-]":"[+]"})," ",_.jsx("span",{"data-archive-title":Ge,className:"archive-title",children:S((Z==null?void 0:Z.replace(/^第[一二三四五六七八九十\d]+[幕章]\s*·\s*/,""))??"会话记录",i0[(ee.section??0)-1]??"Session record")})]}),g[Ge]?_.jsx(A1,{entry:ee,memories:Ee,elapsed:T,onForget:fe}):null]},Ge)}),ye?_.jsx("div",{className:"archive-session muted",children:S("└ 收录中…","└ Recording…")},`${W}:${ae}`):null]}):null]},W)})})]})}function A1({entry:r,memories:s,elapsed:c,onForget:u}){const{t:f,language:m}=In(),w=ie.useMemo(()=>E1(r).map(p=>({...p,text:m==="en"?a0[p.text]??p.text:p.text})),[r,m]),b=ie.useMemo(()=>w.map(p=>Array.from(p.text)),[w]),S=b.reduce((p,g)=>p+g.length+3,0);let v=Math.floor(Math.max(0,Math.min(1,c/Xh))*S);return _.jsxs("div",{className:"archive-segments",children:[c<Xh?_.jsxs("p",{className:"archive-writing",children:[_.jsx("span",{"aria-hidden":"true",children:"[CTX]"})," ",f("正在收录…","Recording…")]}):null,w.map((p,g)=>{const k=b[g],D=Math.max(0,Math.min(v,k.length));return v-=k.length+3,D?_.jsxs("div",{className:"archive-segment",children:[_.jsx("span",{"aria-hidden":"true",children:g===w.length-1?"└":"├"}),_.jsxs("div",{children:[k.slice(0,D).join(""),D<k.length?_.jsx("span",{className:"caret","aria-hidden":"true"}):null,D===k.length?s.filter(U=>p.beatIds.includes(U.beatId)).map(U=>_.jsx(Jg,{memory:U,onForget:u},U.label)):null]})]},p.beatIds[0]):null})]})}function Jg({memory:r,onForget:s}){const{t:c}=In(),u=Lh(r);return _.jsxs("details",{className:"archive-memory",children:[_.jsxs("summary",{children:["[MEM] ",c(r.label,u.label)]}),_.jsx("p",{children:c(`「${r.text}」`,`“${u.text}”`)}),s?_.jsxs("button",{type:"button",className:"memory-entry memory-action","aria-label":c(`舍弃「${r.label}」`,`Discard “${u.label}”`),onClick:()=>s(r.label),children:["[",c("舍弃","Discard"),"]"]}):null]})}const Wg=1440,$g=920;function hg(){const r=window.innerWidth<720?12:40;return Math.min(1,Math.max(1,window.innerWidth-r)/Wg,Math.max(1,window.innerHeight-r)/$g)}function ec({children:r,intro:s}){const[c,u]=ie.useState(hg);return ie.useEffect(()=>{const f=()=>u(hg());return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),_.jsx("main",{className:"stage",children:_.jsx("div",{className:"stage-frame",style:{width:Wg*c,height:$g*c},children:_.jsx("div",{className:"game-canvas","data-testid":"game-canvas","data-intro":s?!0:void 0,inert:!!s,style:{transform:`scale(${c})`,...s?Object.fromEntries(Object.entries(s).map(([f,m])=>[`--intro-${f}`,`${m}%`])):{}},children:r})})})}const Pg="shuangxian",Yr=`${Pg}.progress.v2`,tc=`${Pg}.progress.v1`;let Qa=null;function M1(){const r=Qa;return Qa=null,r}function O1(r){try{localStorage.setItem(Yr,JSON.stringify({version:2,state:r}))}catch(s){console.error("[存档] 写入失败",s)}}function N1(){try{return!!(localStorage.getItem(Yr)||localStorage.getItem(tc))}catch{return!1}}function Za(){try{localStorage.removeItem(Yr),localStorage.removeItem(tc)}catch(r){console.error("[存档] 清除失败",r)}}function C1(r){var s,c;try{const u=localStorage.getItem(Yr);if(!u)return localStorage.getItem(tc)&&(Qa="剧本已更新到第五章定稿，旧进度无法继续，已从第一幕重新开始。",Za()),null;const f=JSON.parse(u);if(!wn(f)||f.version!==2||!wn(f.state))return Qa="存档格式已升级，已从第一幕重新开始。",Za(),null;const m=f.state;if(!D1(m,r))return Qa="剧本已更新，旧进度里的节拍已不存在，已从第一幕重新开始。",Za(),null;const{activated:w,completed:b,superseded:S}=R1(m,r);for(const g of r)!Vh(g,r)||b.includes(g.id)||w.includes(g.id)||S.has(g.id)||w.push(g.id);const v={...m,flags:H1(m,b),activated:w,completed:b,pending:{left:m.pending.left??null,right:m.pending.right??null},memories:z1(m.memories,r),chapter:_1(m.chapter,r),ritual:j1(m.ritual),archive:t1(m.archive,r),context:Y1(m.context),endings:Array.isArray(m.endings)?m.endings.filter(g=>typeof g=="string"):[],error:typeof m.error=="string"?m.error:null,runId:typeof m.runId=="number"?m.runId:0};let p=e1(v,r,g=>Va(v,g,r));for(const g of["left","right"]){if(p.ritual[g])continue;const k=((s=p.pending[g])==null?void 0:s.beatId)??((c=p.messages.filter(U=>U.channel===g).at(-1))==null?void 0:c.beatId),D=r.find(U=>U.id===k);D&&(p=Yg(p,D,r))}return p}catch(u){return console.error("[存档] 读取失败",u),Qa="存档读取失败，已从第一幕重新开始。",Za(),null}}function H1(r,s){return"当面问微信"in r.flags?r.flags:s.some(u=>/^5[fm]\./.test(u))||Object.values(r.pending).some(u=>u&&/^5[fm]\./.test(u.beatId))?{...r.flags,当面问微信:!1}:s.includes("4.2.3-direct")?{...r.flags,当面问微信:!0}:r.flags.男生意向!==void 0?{...r.flags,当面问微信:!1}:r.flags}function R1(r,s){var w,b;const c=[...r.activated],u=[...r.completed],f=new Set,m="3.4.arrived";if(!s.some(S=>S.id===m))return{activated:c,completed:u,superseded:f};u.includes("3.4.1")&&!u.includes(m)&&!c.includes(m)&&(((w=r.chapter)==null?void 0:w.right)>=4||u.includes("3.4.2")||!c.includes("3.4.2"))&&u.push(m);for(const S of["3.2.2","3.3.1"]){const v=S+"-A";(u.includes(S)||((b=r.pending.left)==null?void 0:b.beatId)===S)&&f.add(v)}return{activated:c.filter(S=>!f.has(S)),completed:u,superseded:f}}function D1(r,s){const c=new Set(s.map(u=>u.id));if(!Array.isArray(r.completed)||!r.completed.every(u=>c.has(u))||!Array.isArray(r.activated)||!r.activated.every(u=>c.has(u))||!Array.isArray(r.messages)||!wn(r.flags)||!wn(r.pending))return!1;for(const u of r.messages)if(!wn(u)||u.channel!=="left"&&u.channel!=="right"||typeof u.text!="string"||typeof u.id!="string"||u.delivery!=="type"&&u.delivery!=="pop"&&u.delivery!=="image"&&u.delivery!=="thought")return!1;for(const u of["left","right"]){const f=r.pending[u];if(f!=null&&(!wn(f)||f.kind!=="lines"&&f.kind!=="choices"&&f.kind!=="reply"||typeof f.beatId!="string"||!c.has(f.beatId)))return!1}return!0}function _1(r,s){const c=m=>{const w=s.filter(b=>b.channel===m).map(b=>b.chapter??1);return w.length>0?Math.min(...w):1};if(!wn(r))return{left:c("left"),right:c("right")};const u=typeof r.left=="number"?r.left:c("left"),f=typeof r.right=="number"?r.right:c("right");return{left:u,right:f}}function Y1(r){if(!wn(r))return;const s={};return Mr(r.left)&&(s.left=r.left),Mr(r.right)&&(s.right=r.right),s}function j1(r){const s={left:null,right:null};if(!wn(r))return s;for(const c of["left","right"]){const u=r[c];wn(u)&&(u.phase!=="mask"&&u.phase!=="pause"||typeof u.until!="number"||typeof u.from!="number"||typeof u.to!="number"||(s[c]={from:u.from,to:u.to,...Mr(u.contextTo)?{contextTo:u.contextTo}:{},phase:u.phase,until:u.until,...typeof u.startedAt=="number"?{startedAt:u.startedAt}:{}}))}return s}function wn(r){return typeof r=="object"&&r!==null}function z1(r,s){const c={left:[],right:[]};if(!wn(r))return c;const u=m=>Array.isArray(m)&&m.every(w=>wn(w)&&typeof w.label=="string")?m.map(w=>w):[],f=(m,w)=>u(m).filter(b=>{var v,p;const S=s.find(g=>g.id===b.beatId&&g.channel===w);return(S==null?void 0:S.chapter)===1&&S.记忆候选&&b.label==="店的位置"?(v=S.记忆候选)==null?void 0:v.some(g=>g.缩略标签===b.label&&g.短句===b.text):(S==null?void 0:S.chapter)!==5?!0:(p=S.记忆候选)==null?void 0:p.some(g=>g.缩略标签===b.label)});return{left:f(r.left,"left"),right:f(r.right,"right")}}function q1(r){const s=c=>{const u=r1(c,r);return u===c.error?c:{...c,error:u}};return(c,u)=>{var f;try{switch(u.type){case"reset":return{...Lg(r),runId:c.runId+1};case"sync-roots":return s(s1(c,r));case"arm":return s(f1(c,u.channel,r,u.now??Date.now()));case"commit-line":return s(m1(c,u.channel,r));case"choose":return s(y1(c,u.channel,u.index,r));case"commit-reply":return s(g1(c,u.channel,r));case"save-memory":{const m=r.find(b=>b.id===u.beatId&&b.channel===u.channel);return!((f=m==null?void 0:m.记忆候选)==null?void 0:f.find(b=>b.缩略标签===u.label&&b.短句===u.text))||!c.messages.some(b=>b.channel===u.channel&&b.beatId===u.beatId&&b.text.includes(u.text))?c:s(i1(c,u.channel,{label:u.label,text:u.text,beatId:u.beatId},u.replaceLabel))}case"forget-memory":return s(a1(c,u.channel,u.label));case"clear-messages":return s(Qg(c,u.channel));case"ritual-tick":return s(l1(c,u.channel,u.now));case"clear-error":return{...c,error:null};default:return c}}catch(m){const w=m instanceof Error?m.message:"引擎状态更新失败";return console.error("[引擎]",w),{...c,error:w}}}}function B1(r,s=!1,c=!0){const u=r.beats,f=ie.useMemo(()=>q1(u),[u]),[m,w]=ie.useReducer(f,u,S=>C1(S)??Lg(S)),[b]=ie.useState(()=>M1());return ie.useEffect(()=>{c&&O1(m)},[m,c]),ie.useEffect(()=>{m.error&&console.error(m.error)},[m.error]),ie.useEffect(()=>{if(!c)return;const S=Date.now(),v=["left","right"].filter(D=>{const U=m.ritual[D];return U!==null&&(s||U.until<=S)});if(v.length>0){for(const D of v)w({type:"ritual-tick",channel:D,now:Math.max(S,m.ritual[D].until)});return}const p=["left","right"].map(D=>{var U;return(U=m.ritual[D])==null?void 0:U.until}).filter(D=>D!==void 0);if(p.length===0)return;const g=Math.min(...p),k=window.setTimeout(()=>{const D=Date.now();for(const U of["left","right"])m.ritual[U]&&m.ritual[U].until<=D&&w({type:"ritual-tick",channel:U,now:D})},Math.max(0,g-S));return()=>window.clearTimeout(k)},[m.ritual,s,c]),ie.useEffect(()=>{if(!c)return;const S=o1(m,u);S&&w({type:"arm",channel:S.channel})},[m,u,c]),{state:m,dispatch:w,notice:b}}const Ir=["left","right"];function U1({script:r,onTitle:s,intro:c}){const u=!c,f=Ph(),{state:m,dispatch:w,notice:b}=B1(r,f,u),S=Cr(m),{t:v}=In(),[p,g]=ie.useState(!1),[k,D]=ie.useState(),U=k&&!m.ritual[k.channel]&&m.messages.some(P=>P.channel===k.channel&&P.beatId===k.entry.beatId)?k:void 0,[V,ne]=ie.useState(),Te=ie.useRef({}),ve=ie.useRef({}),de=w1(!f&&!!(m.ritual.left||m.ritual.right)),ce=Ir.find(P=>{var ae;return m.pending[P]&&((ae=m.pending[P])==null?void 0:ae.kind)!=="choices"})??Ir.find(P=>{var ae;return((ae=m.pending[P])==null?void 0:ae.kind)==="choices"}),le=(V==null?void 0:V.channel)??ce??"left";function Fe(P){var ye;const ae=m.pending[P];if(!(!ae||ae.kind!=="choices"))return((ye=r.beatById)==null?void 0:ye.get(ae.beatId))??r.beats.find(Ce=>Ce.id===ae.beatId)}function be(P){var ae,ye;return((ye=(ae=Fe(P))==null?void 0:ae.choices)==null?void 0:ye.flatMap((Ce,j)=>Jh(m,P,Ce)?[]:[j]))??[]}function W(P){var ye;if(le!==P)return-1;const ae=be(P);return(V==null?void 0:V.beatId)===((ye=Fe(P))==null?void 0:ye.id)&&ae.includes((V==null?void 0:V.index)??-1)?V.index:ae[0]??-1}function Oe(P,ae){var ye;ae>=0&&!be(P).includes(ae)||ne({channel:P,index:ae,beatId:(ye=Fe(P))==null?void 0:ye.id})}function Ee(P,ae){const ye=Fe(P);if(!ye||!be(P).includes(ae)||p)return;const Ce=`${m.runId}:${P}:${ye.id}`;Te.current[P]!==Ce&&(Te.current[P]=Ce,ne(void 0),w({type:"choose",channel:P,index:ae}))}ie.useEffect(()=>{function P(ae){var j,fe,he,He;if(!u||p||ae.altKey||ae.ctrlKey||ae.metaKey||ae.shiftKey||ae.defaultPrevented||document.querySelector('[role="dialog"]'))return;const ye=ae.target instanceof HTMLElement?ae.target:null;if(ye!=null&&ye.closest("input,textarea,select,[contenteditable],.archive"))return;const Ce=ye==null?void 0:ye.closest(".choice-line");if(!(ye!=null&&ye.closest("button,a,summary")&&!Ce)){if(ae.key==="ArrowLeft"||ae.key==="ArrowRight")ae.preventDefault(),Oe(ae.key==="ArrowLeft"?"left":"right",-1),Ce==null||Ce.blur();else if(ae.key==="ArrowUp"||ae.key==="ArrowDown"){ae.preventDefault();const ee=be(le);if(!ee.length)return;const Pe=ee.indexOf(W(le)),Ge=ae.key==="ArrowDown"?1:-1;Oe(le,ee[(Pe+Ge+ee.length)%ee.length]),Ce==null||Ce.blur()}else if(ae.key==="Enter"){if(ae.preventDefault(),ae.repeat)return;const ee=m.pending[le];if((ee==null?void 0:ee.kind)==="lines"||(ee==null?void 0:ee.kind)==="reply"){(fe=(j=ve.current)[le])==null||fe.call(j);return}const Pe=W(le);if(Pe>=0)Ee(le,Pe);else if(!ee){const Ge=Ir.filter(ut=>{const T=m.pending[ut];return(T==null?void 0:T.kind)==="lines"||(T==null?void 0:T.kind)==="reply"});Ge.length===1&&((He=(he=ve.current)[Ge[0]])==null||He.call(he))}}}}return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)});function Ne(){Za(),w({type:"reset"}),ne(void 0),D(void 0),g(!1)}return _.jsxs(ec,{intro:c,children:[_.jsxs("header",{className:"topbar ascii-rule",children:[_.jsx("span",{className:"topbar-title","data-testid":"game-title",children:"He said, she said"}),_.jsx("span",{className:"topbar-tag",children:v("助手 · 双会话","Assistant · Dual Sessions")}),_.jsxs("div",{className:"topbar-actions",children:[_.jsx(fg,{}),_.jsxs("button",{type:"button","data-testid":"restart",onClick:()=>g(!0),children:["[",v("重新开始","Restart"),"]"]}),s?_.jsxs("button",{type:"button",onClick:s,children:["[",v("返回标题","Title Menu"),"]"]}):null]})]}),b?_.jsx("div",{className:"notice",role:"status",children:b}):null,S?_.jsx("div",{className:"notice",role:"status",children:v(S==="未交换微信"?"桌游局结束后，两人没有交换微信。":`结局 · ${S}`,o0[S==="未交换微信"?"桌游局结束后，两人没有交换微信。":S]??S)}):null,_.jsxs("div",{className:"duo",children:[Ir.map(P=>_.jsx(k1,{script:r,channel:P,state:m,dispatch:w,active:!!m.pending[P],focused:le===P,selected:W(P),skipRefs:ve,running:u,onMemoryFull:ae=>D({channel:P,entry:ae}),onMove:ae=>Oe(P,ae),onPick:ae=>Ee(P,ae),now:de,reduced:f},P)),_.jsx(I1,{script:r,state:m,now:de,reduced:f,replacement:U,onCancelReplacement:()=>D(void 0),onReplace:P=>{U&&(w({type:"save-memory",channel:U.channel,...U.entry,replaceLabel:P}),D(void 0))},onForget:(P,ae)=>w({type:"forget-memory",channel:P,label:ae})})]}),p?_.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":v("确定重来","Confirm restart"),children:_.jsxs("div",{className:"dialog",children:[_.jsx("h2",{children:v("确定重来？","Restart the game?")}),_.jsx("p",{children:v("当前两条线的进度都会清空，回到第一幕开头。","Both sessions will reset to the beginning.")}),_.jsxs("div",{className:"dialog-actions",children:[_.jsxs("button",{type:"button",autoFocus:!0,onClick:()=>g(!1),children:["[",v("取消","Cancel"),"]"]}),_.jsxs("button",{type:"button","data-testid":"restart-confirm",onClick:Ne,children:["[",v("确定重来","Restart Game"),"]"]})]})]})}):null]})}const L1=1500,Uh=240,cg=900,Xa=420,G1=1500;function X1(r,s){const c=Ja.left,u=Ja.right,f=S=>`      性别 ${S.gender} / ${S.age} 岁 / ${S.work} / ${S.city}`,m=[["[BOOT] 校验会话模块 … OK",24,110],["[SYS] 导入助手系统提示词 … OK",25,130],[`[USER ${c.id}] 载入用户信息 · ${c.name}`,40,150],[f(c),38,300],[`[USER ${u.id}] 载入用户信息 · ${u.name}`,40,150],[f(u),38,300],[r==="new"?"[MEM] 初始化两路独立记忆区 … OK":"[MEM] 恢复两路上下文与记忆 … OK",25,135],["[CTX] 建立会话与摘要目录",26,0]],w=["[BOOT] Check session modules … OK","[SYS] Import assistant prompts … OK","[USER 01] Load user profile · Him","      Male / 21 / University student / Xi'an","[USER 02] Load user profile · Her","      Female / 22 / University student and intern / Xi'an",r==="new"?"[MEM] Initialize separate memory stores … OK":"[MEM] Restore both sessions and memory … OK","[CTX] Prepare session archive"];let b=90;return m.map(([S,v,p],g)=>{const k=s==="en"?w[g]:S,D=S.length*v,U={text:k,start:b,duration:D};return b+=D+p,U})}function Zo(r,s,c){const u=Math.max(0,Math.min(1,r/s));return Math.floor(u*c)/c*100}function F1({entry:r,script:s,onTitle:c}){const u=Ph(),[f,m]=ie.useState(0),{language:w,t:b}=In(),S=X1(r,w),v=S.at(-1),p=v.start+v.duration,g=p+L1,k=g+Uh+cg,D=k+3*Xa,U=D+G1;return ie.useEffect(()=>{if(u){m(U);return}const V=Date.now(),ne=window.setInterval(()=>m(Math.min(U,Date.now()-V)),20),Te=[p,g,D,U].map(ve=>window.setTimeout(()=>{m(Math.min(U,Date.now()-V)),ve===U&&window.clearInterval(ne)},ve));return()=>{window.clearInterval(ne),Te.forEach(ve=>window.clearTimeout(ve))}},[u,p,g,D,U]),u||f>=g?_.jsx(U1,{script:s,onTitle:c,intro:u||f>=U?void 0:{header:Zo(f-g,Uh,16),dividers:Zo(f-g-Uh,cg,42),left:Zo(f-k,Xa,24),right:Zo(f-k-Xa,Xa,24),archive:Zo(f-k-2*Xa,Xa,24)}}):_.jsx(ec,{children:_.jsx("div",{className:"boot-console","data-testid":"boot-console","data-hold":f>=p||void 0,"aria-label":b("正在启动","Starting up"),children:S.filter(V=>f>=V.start).map(V=>{const ne=Math.min(V.text.length,Math.floor((f-V.start)*V.text.length/V.duration));return _.jsxs("div",{className:V.text.startsWith("[USER")?"boot-user":void 0,children:[V.text.slice(0,ne),ne<V.text.length?_.jsx("span",{className:"caret","aria-hidden":"true"}):null]},V.text)})})})}function Q1({hasSave:r,onBegin:s}){const{t:c}=In(),[u,f]=ie.useState(0),[m,w]=ie.useState(!1),b=[{label:c("开始游戏","Start Game"),action:()=>r?w(!0):s("new")},...r?[{label:c("继续游戏","Continue"),action:()=>s("resume")}]:[]];return ie.useEffect(()=>{const S=v=>{var k;if(m||v.altKey||v.ctrlKey||v.metaKey||v.defaultPrevented)return;const p=r?2:1,g=v.target instanceof HTMLElement?v.target:null;v.key==="ArrowUp"||v.key==="ArrowDown"?(v.preventDefault(),(k=g==null?void 0:g.closest(".menu-choice"))==null||k.blur(),f(D=>(D+(v.key==="ArrowDown"?1:-1)+p)%p)):v.key==="Enter"&&!v.repeat&&!(g!=null&&g.closest("button"))&&(v.preventDefault(),r&&u===1?s("resume"):r?w(!0):s("new"))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[u,m,r,s]),_.jsxs(ec,{children:[_.jsxs("header",{className:"topbar ascii-rule title-bar",children:[_.jsx("span",{children:c("[SYS] 双会话助手","[SYS] Dual-session assistant")}),_.jsx("span",{children:r?c("[CTX] 已有存档","[CTX] Saved game found"):c("[LINK] 等待接入","[LINK] Awaiting connection")}),_.jsx(fg,{})]}),_.jsxs("div",{className:"title-grid",children:[_.jsxs("div",{className:"terminal-menu",children:[_.jsx("div",{className:"menu-system",children:c("/ 会话入口","/ Session Entry")}),_.jsxs("h1",{children:["He said,",_.jsx("br",{}),"she said",_.jsx("span",{"aria-hidden":"true",children:"_"})]}),_.jsx("div",{className:"menu-commands","aria-label":c("主菜单","Main menu"),children:b.map((S,v)=>_.jsxs("button",{type:"button",className:"menu-choice choice-line","data-current":u===v||void 0,onMouseEnter:()=>f(v),onFocus:()=>f(v),onClick:S.action,children:[_.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:u===v?">":""}),S.label]},S.label))})]}),_.jsxs("aside",{className:"title-sessions","aria-label":c("会话入口信息","Session information"),children:[_.jsx("div",{className:"ascii-rule title-session-head",children:c("[LINK] 用户通道","[LINK] User channels")}),Object.values(Ja).map(S=>_.jsxs("div",{className:"title-user",children:[_.jsxs("span",{className:"title-id",children:["[USER ",S.id,"]"]}),_.jsx("b",{children:c(S.name,S.id==="01"?"Him":"Her")}),_.jsx("span",{children:c("待接入","Awaiting connection")})]},S.id)),_.jsxs("div",{className:"title-memory ascii-rule",children:[_.jsx("div",{children:c("[MEM] 分窗记忆","[MEM] Separate memory stores")}),_.jsx("p",{children:c("上下文独立 · 摘要按窗收录","Each session keeps its own context and archive")})]})]})]}),_.jsxs("footer",{className:"title-keys ascii-rule",children:[_.jsx("span",{children:c("↑ ↓ 选择","↑ ↓ Select")}),_.jsx("span",{children:c("Enter 确认","Enter Confirm")})]}),m?_.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":c("开始新游戏","Start New Game"),children:_.jsxs("div",{className:"dialog",children:[_.jsx("h2",{children:c("开始新游戏？","Start a new game?")}),_.jsx("p",{children:c("当前两条线的进度都会清空。","Both sessions will be reset.")}),_.jsxs("div",{className:"dialog-actions",children:[_.jsxs("button",{type:"button",autoFocus:!0,onClick:()=>w(!1),children:["[",c("取消","Cancel"),"]"]}),_.jsxs("button",{type:"button",onClick:()=>s("new"),children:["[",c("开始新游戏","Start New Game"),"]"]})]})]})}):null]})}function Z1(){const[r,s]=ie.useState(()=>{try{return localStorage.getItem("shuangxian.language")==="zh"?"zh":"en"}catch{return"en"}});return ie.useEffect(()=>{document.documentElement.lang=r==="en"?"en":"zh-CN";try{localStorage.setItem("shuangxian.language",r)}catch{}},[r]),_.jsx(dg.Provider,{value:{language:r,setLanguage:s},children:_.jsx(K1,{})})}function K1(){const{t:r}=In(),s=ie.useMemo(()=>U0(),[]),[c,u]=ie.useState("title"),[f,m]=ie.useState("new"),w=ie.useCallback(()=>u("title"),[]),b=ie.useCallback(S=>{S==="new"&&Za(),m(S),u("boot")},[]);return ie.useEffect(()=>{s.error&&console.error(s.error)},[s]),s.script?c==="title"?_.jsx(Q1,{hasSave:N1(),onBegin:b}):_.jsx(F1,{entry:f,script:s.script,onTitle:w}):_.jsx("main",{className:"stage",children:_.jsxs("div",{className:"dialog",style:{width:560},children:[_.jsx("h2",{children:r("这份剧本还过不了检查","The story failed validation")}),_.jsx("p",{children:r("引擎按字段契约逐项校验，下面是要修的地方：","The game could not load the story.")}),_.jsx("pre",{className:"script-error",style:{maxHeight:420,whiteSpace:"pre-wrap",borderRadius:12},"data-testid":"script-error",children:s.error})]})})}$v.createRoot(document.getElementById("root")).render(_.jsx(ie.StrictMode,{children:_.jsx(Z1,{})}));
