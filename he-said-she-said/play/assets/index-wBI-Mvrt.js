(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(d){if(d.ep)return;d.ep=!0;const m=c(d);fetch(d.href,m)}})();var ch={exports:{}},Fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function Xv(){if(xy)return Fr;xy=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,m){var p=null;if(m!==void 0&&(p=""+m),d.key!==void 0&&(p=""+d.key),"key"in d){m={};for(var b in d)b!=="key"&&(m[b]=d[b])}else m=d;return d=m.ref,{$$typeof:l,type:u,key:p,ref:d!==void 0?d:null,props:m}}return Fr.Fragment=s,Fr.jsx=c,Fr.jsxs=c,Fr}var Ty;function Fv(){return Ty||(Ty=1,ch.exports=Xv()),ch.exports}var Y=Fv(),dh={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function Qv(){if(Ey)return Ne;Ey=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),k=Symbol.for("react.view_transition"),R=Symbol.iterator;function F(I){return I===null||typeof I!="object"?null:(I=R&&I[R]||I["@@iterator"],typeof I=="function"?I:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,be={};function me(I,X,se){this.props=I,this.context=X,this.refs=be,this.updater=se||$}me.prototype.isReactComponent={},me.prototype.setState=function(I,X){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,X,"setState")},me.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function ce(){}ce.prototype=me.prototype;function he(I,X,se){this.props=I,this.context=X,this.refs=be,this.updater=se||$}var Ae=he.prototype=new ce;Ae.constructor=he,P(Ae,me.prototype),Ae.isPureReactComponent=!0;var Oe=Array.isArray;function Se(){}var J={H:null,A:null,T:null,S:null},Me=Object.prototype.hasOwnProperty;function Ce(I,X,se){var W=se.ref;return{$$typeof:l,type:I,key:X,ref:W!==void 0?W:null,props:se}}function we(I,X){return Ce(I.type,X,I.props)}function Re(I){return typeof I=="object"&&I!==null&&I.$$typeof===l}function Ze(I){var X={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return X[se]})}var Xe=/\/+/g;function ae(I,X){return typeof I=="object"&&I!==null&&I.key!=null?Ze(""+I.key):X.toString(36)}function A(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(Se,Se):(I.status="pending",I.then(function(X){I.status==="pending"&&(I.status="fulfilled",I.value=X)},function(X){I.status==="pending"&&(I.status="rejected",I.reason=X)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function ee(I,X,se,W,ke){var Te=typeof I;(Te==="undefined"||Te==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(Te){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case l:case s:ye=!0;break;case w:return ye=I._init,ee(ye(I._payload),X,se,W,ke)}}if(ye)return ke=ke(I),ye=W===""?"."+ae(I,0):W,Oe(ke)?(se="",ye!=null&&(se=ye.replace(Xe,"$&/")+"/"),ee(ke,X,se,"",function(Et){return Et})):ke!=null&&(Re(ke)&&(ke=we(ke,se+(ke.key==null||I&&I.key===ke.key?"":(""+ke.key).replace(Xe,"$&/")+"/")+ye)),X.push(ke)),1;ye=0;var oe=W===""?".":W+":";if(Oe(I))for(var ge=0;ge<I.length;ge++)W=I[ge],Te=oe+ae(W,ge),ye+=ee(W,X,se,Te,ke);else if(ge=F(I),typeof ge=="function")for(I=ge.call(I),ge=0;!(W=I.next()).done;)W=W.value,Te=oe+ae(W,ge++),ye+=ee(W,X,se,Te,ke);else if(Te==="object"){if(typeof I.then=="function")return ee(A(I),X,se,W,ke);throw X=String(I),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ye}function re(I,X,se){if(I==null)return I;var W=[],ke=0;return ee(I,W,"","",function(Te){return X.call(se,Te,ke++)}),W}function He(I){if(I._status===-1){var X=I._result,se=X();se.then(function(W){(I._status===0||I._status===-1)&&(I._status=1,I._result=W,se.status===void 0&&(se.status="fulfilled",se.value=W))},function(W){(I._status===0||I._status===-1)&&(I._status=2,I._result=W,se.status===void 0&&(se.status="rejected",se.reason=W))}),I._status===-1&&(I._status=0,I._result=se)}if(I._status===1)return I._result.default;throw I._result}var le=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function et(I){var X=J.T,se={};se.types=X!==null?X.types:null,J.T=se;try{var W=I(),ke=J.S;ke!==null&&ke(se,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Se,le)}catch(Te){le(Te)}finally{X!==null&&se.types!==null&&(X.types=se.types),J.T=X}}function Ke(I){var X=J.T;if(X!==null){var se=X.types;se===null?X.types=[I]:se.indexOf(I)===-1&&se.push(I)}else et(Ke.bind(null,I))}var qe={map:re,forEach:function(I,X,se){re(I,function(){X.apply(this,arguments)},se)},count:function(I){var X=0;return re(I,function(){X++}),X},toArray:function(I){return re(I,function(X){return X})||[]},only:function(I){if(!Re(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Ne.Activity=g,Ne.Children=qe,Ne.Component=me,Ne.Fragment=c,Ne.Profiler=d,Ne.PureComponent=he,Ne.StrictMode=u,Ne.Suspense=S,Ne.ViewTransition=k,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(I){return J.H.useMemoCache(I)}},Ne.addTransitionType=Ke,Ne.cache=function(I){return function(){return I.apply(null,arguments)}},Ne.cacheSignal=function(){return null},Ne.cloneElement=function(I,X,se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var W=P({},I.props),ke=I.key;if(X!=null)for(Te in X.key!==void 0&&(ke=""+X.key),X)!Me.call(X,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&X.ref===void 0||(W[Te]=X[Te]);var Te=arguments.length-2;if(Te===1)W.children=se;else if(1<Te){for(var ye=Array(Te),oe=0;oe<Te;oe++)ye[oe]=arguments[oe+2];W.children=ye}return Ce(I.type,ke,W)},Ne.createContext=function(I){return I={$$typeof:p,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:m,_context:I},I},Ne.createElement=function(I,X,se){var W,ke={},Te=null;if(X!=null)for(W in X.key!==void 0&&(Te=""+X.key),X)Me.call(X,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ke[W]=X[W]);var ye=arguments.length-2;if(ye===1)ke.children=se;else if(1<ye){for(var oe=Array(ye),ge=0;ge<ye;ge++)oe[ge]=arguments[ge+2];ke.children=oe}if(I&&I.defaultProps)for(W in ye=I.defaultProps,ye)ke[W]===void 0&&(ke[W]=ye[W]);return Ce(I,Te,ke)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(I){return{$$typeof:b,render:I}},Ne.isValidElement=Re,Ne.lazy=function(I){return{$$typeof:w,_payload:{_status:-1,_result:I},_init:He}},Ne.memo=function(I,X){return{$$typeof:v,type:I,compare:X===void 0?null:X}},Ne.startTransition=et,Ne.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},Ne.use=function(I){return J.H.use(I)},Ne.useActionState=function(I,X,se){return J.H.useActionState(I,X,se)},Ne.useCallback=function(I,X){return J.H.useCallback(I,X)},Ne.useContext=function(I){return J.H.useContext(I)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(I,X){return J.H.useDeferredValue(I,X)},Ne.useEffect=function(I,X){return J.H.useEffect(I,X)},Ne.useEffectEvent=function(I){return J.H.useEffectEvent(I)},Ne.useId=function(){return J.H.useId()},Ne.useImperativeHandle=function(I,X,se){return J.H.useImperativeHandle(I,X,se)},Ne.useInsertionEffect=function(I,X){return J.H.useInsertionEffect(I,X)},Ne.useLayoutEffect=function(I,X){return J.H.useLayoutEffect(I,X)},Ne.useMemo=function(I,X){return J.H.useMemo(I,X)},Ne.useOptimistic=function(I,X){return J.H.useOptimistic(I,X)},Ne.useReducer=function(I,X,se){return J.H.useReducer(I,X,se)},Ne.useRef=function(I){return J.H.useRef(I)},Ne.useState=function(I){return J.H.useState(I)},Ne.useSyncExternalStore=function(I,X,se){return J.H.useSyncExternalStore(I,X,se)},Ne.useTransition=function(){return J.H.useTransition()},Ne.version="19.3.0",Ne}var Iy;function Qh(){return Iy||(Iy=1,dh.exports=Qv()),dh.exports}var ie=Qh(),fh={exports:{}},Qr={},mh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function Zv(){return Ay||(Ay=1,(function(l){function s(A,ee){var re=A.length;A.push(ee);e:for(;0<re;){var He=re-1>>>1,le=A[He];if(0<d(le,ee))A[He]=ee,A[re]=le,re=He;else break e}}function c(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var ee=A[0],re=A.pop();if(re!==ee){A[0]=re;e:for(var He=0,le=A.length,et=le>>>1;He<et;){var Ke=2*(He+1)-1,qe=A[Ke],I=Ke+1,X=A[I];if(0>d(qe,re))I<le&&0>d(X,qe)?(A[He]=X,A[I]=re,He=I):(A[He]=qe,A[Ke]=re,He=Ke);else if(I<le&&0>d(X,re))A[He]=X,A[I]=re,He=I;else break e}}return ee}function d(A,ee){var re=A.sortIndex-ee.sortIndex;return re!==0?re:A.id-ee.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var p=Date,b=p.now();l.unstable_now=function(){return p.now()-b}}var S=[],v=[],w=1,g=null,k=3,R=!1,F=!1,$=!1,P=!1,be=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function he(A){for(var ee=c(v);ee!==null;){if(ee.callback===null)u(v);else if(ee.startTime<=A)u(v),ee.sortIndex=ee.expirationTime,s(S,ee);else break;ee=c(v)}}function Ae(A){if($=!1,he(A),!F)if(c(S)!==null)F=!0,Oe||(Oe=!0,Re());else{var ee=c(v);ee!==null&&ae(Ae,ee.startTime-A)}}var Oe=!1,Se=-1,J=5,Me=-1;function Ce(){return P?!0:!(l.unstable_now()-Me<J)}function we(){if(P=!1,Oe){var A=l.unstable_now();Me=A;var ee=!0;try{e:{F=!1,$&&($=!1,me(Se),Se=-1),R=!0;var re=k;try{t:{for(he(A),g=c(S);g!==null&&!(g.expirationTime>A&&Ce());){var He=g.callback;if(typeof He=="function"){g.callback=null,k=g.priorityLevel;var le=He(g.expirationTime<=A);if(A=l.unstable_now(),typeof le=="function"){g.callback=le,he(A),ee=!0;break t}g===c(S)&&u(S),he(A)}else u(S);g=c(S)}if(g!==null)ee=!0;else{var et=c(v);et!==null&&ae(Ae,et.startTime-A),ee=!1}}break e}finally{g=null,k=re,R=!1}ee=void 0}}finally{ee?Re():Oe=!1}}}var Re;if(typeof ce=="function")Re=function(){ce(we)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Xe=Ze.port2;Ze.port1.onmessage=we,Re=function(){Xe.postMessage(null)}}else Re=function(){be(we,0)};function ae(A,ee){Se=be(function(){A(l.unstable_now())},ee)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(A){A.callback=null},l.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<A?Math.floor(1e3/A):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_next=function(A){switch(k){case 1:case 2:case 3:var ee=3;break;default:ee=k}var re=k;k=ee;try{return A()}finally{k=re}},l.unstable_requestPaint=function(){P=!0},l.unstable_runWithPriority=function(A,ee){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var re=k;k=A;try{return ee()}finally{k=re}},l.unstable_scheduleCallback=function(A,ee,re){var He=l.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?He+re:He):re=He,A){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=re+le,A={id:w++,callback:ee,priorityLevel:A,startTime:re,expirationTime:le,sortIndex:-1},re>He?(A.sortIndex=re,s(v,A),c(S)===null&&A===c(v)&&($?(me(Se),Se=-1):$=!0,ae(Ae,re-He))):(A.sortIndex=le,s(S,A),F||R||(F=!0,Oe||(Oe=!0,Re()))),A},l.unstable_shouldYield=Ce,l.unstable_wrapCallback=function(A){var ee=k;return function(){var re=k;k=ee;try{return A.apply(this,arguments)}finally{k=re}}}})(yh)),yh}var My;function Kv(){return My||(My=1,mh.exports=Zv()),mh.exports}var gh={exports:{}},Dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy;function Vv(){if(Oy)return Dt;Oy=1;var l=Qh();function s(w){var g="https://react.dev/errors/"+w;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)g+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+w+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal"),m=Symbol.for("react.recoverable"),p=Symbol.for("react.optimistic_key");function b(w,g,k){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:R===p?p:""+R,children:w,containerInfo:g,implementation:k}}var S=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(w,g){if(w==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Dt.browser=function(w){return{$$typeof:m,_reason:w}},Dt.createPortal=function(w,g){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return b(w,g,null,k)},Dt.flushSync=function(w){var g=S.T,k=u.p;try{if(S.T=null,u.p=2,w)return w()}finally{S.T=g,u.p=k,u.d.f()}},Dt.preconnect=function(w,g){typeof w=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(w,g))},Dt.prefetchDNS=function(w){typeof w=="string"&&u.d.D(w)},Dt.preinit=function(w,g){if(typeof w=="string"&&g&&typeof g.as=="string"){var k=g.as,R=v(k,g.crossOrigin),F=typeof g.integrity=="string"?g.integrity:void 0,$=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;k==="style"?u.d.S(w,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:R,integrity:F,fetchPriority:$}):k==="script"&&u.d.X(w,{crossOrigin:R,integrity:F,fetchPriority:$,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Dt.preinitModule=function(w,g){if(typeof w=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var k=v(g.as,g.crossOrigin);u.d.M(w,{crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&u.d.M(w)},Dt.preload=function(w,g){if(typeof w=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var k=g.as,R=v(k,g.crossOrigin);u.d.L(w,k,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Dt.preloadModule=function(w,g){if(typeof w=="string")if(g){var k=v(g.as,g.crossOrigin);u.d.m(w,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else u.d.m(w)},Dt.requestFormReset=function(w){u.d.r(w)},Dt.unstable_batchedUpdates=function(w,g){return w(g)},Dt.useFormState=function(w,g,k){return S.H.useFormState(w,g,k)},Dt.useFormStatus=function(){return S.H.useHostTransitionStatus()},Dt.version="19.3.0",Dt}var Ny;function Jv(){if(Ny)return gh.exports;Ny=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),gh.exports=Vv(),gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy;function Wv(){if(Cy)return Qr;Cy=1;var l=Kv(),s=Qh(),c=Jv();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(m(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return S(a),e;if(r===i)return S(a),t;r=r.sibling}throw Error(u(188))}if(n.return!==i.return)n=a,i=r;else{for(var h=!1,y=a.child;y;){if(y===n){h=!0,n=a,i=r;break}if(y===i){h=!0,i=a,n=r;break}y=y.sibling}if(!h){for(y=r.child;y;){if(y===n){h=!0,n=r,i=a;break}if(y===i){h=!0,i=r,n=a;break}y=y.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}function g(e,t,n,i,a,r){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,r)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&g(e.child,t,n,i,a,r))return!0;e=e.sibling}return!1}function k(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function R(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function F(e){var t=[null,null],n=k(e);return n===null||$(t,e,n.child,{foundSelf:!1}),t}function $(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&$(e,t,n.child,i))return!0;n=n.sibling}return!1}function P(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(u(559))}}var be=null,me=null;function ce(e,t,n){return e===n?!0:e===t?(be=e,!0):!1}function he(e,t,n){return e===n?(me=e,!1):e===t?(me!==null&&(be=e),!0):!1}function Ae(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Oe(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var r=t;r;r=n(r))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Se=Object.assign,J=Symbol.for("react.element"),Me=Symbol.for("react.transitional.element"),Ce=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Re=Symbol.for("react.strict_mode"),Ze=Symbol.for("react.profiler"),Xe=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),et=Symbol.for("react.activity"),Ke=Symbol.for("react.legacy_hidden"),qe=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),X=Symbol.for("react.recoverable"),se=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case Ze:return"Profiler";case Re:return"StrictMode";case ee:return"Suspense";case re:return"SuspenseList";case et:return"Activity";case I:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Ce:return"Portal";case ae:return e.displayName||"Context";case Xe:return(e._context.displayName||"Context")+".Consumer";case A:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return t=e.displayName||null,t!==null?t:Te(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}var ye=Array.isArray,oe=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Et={pending:!1,data:null,method:null,action:null},Pt=[],Xt=-1;function pt(e){return{current:e}}function Je(e){0>Xt||(e.current=Pt[Xt],Pt[Xt]=null,Xt--)}function Be(e,t){Xt++,Pt[Xt]=e.current,e.current=t}var wt=pt(null),It=pt(null),vt=pt(null),Mn=pt(null);function Ft(e,t){switch(Be(vt,t),Be(It,e),Be(wt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Rm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Rm(t),e=Hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Je(wt),Be(wt,e)}function dt(){Je(wt),Je(It),Je(vt)}function zt(e){var t=e.memoizedState;t!==null&&(La._currentValue=t.memoizedState,Be(Mn,e)),t=wt.current;var n=Hm(t,e.type);t!==n&&(Be(It,e),Be(wt,n))}function Qt(e){It.current===e&&(Je(wt),Je(It)),Mn.current===e&&(Je(Mn),La._currentValue=Et)}var Ln,At;function o(e){if(Ln===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ln=t&&t[1]||"",At=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ln+e+At}var O=!1;function G(e,t){if(!e||O)return"";O=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(te){var M=te}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(te){M=te}Z=!1;try{var _=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Z=!0,new e}finally{Z&&(_!==void 0?Object.defineProperty(e.prototype,"props",_):delete e.prototype.props)}}}else{try{throw Error()}catch(te){M=te}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(te){if(te&&M&&typeof te.stack=="string")return[te.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),h=r[0],y=r[1];if(h&&y){var x=h.split(`
`),C=y.split(`
`);for(a=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;if(i===x.length||a===C.length)for(i=x.length-1,a=C.length-1;1<=i&&0<=a&&x[i]!==C[a];)a--;for(;1<=i&&0<=a;i--,a--)if(x[i]!==C[a]){if(i!==1||a!==1)do if(i--,a--,0>a||x[i]!==C[a]){var j=`
`+x[i].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=i&&0<=a);break}}}finally{O=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?o(n):""}function K(e,t){switch(e.tag){case 26:case 27:case 5:return o(e.type);case 16:return o("Lazy");case 13:return e.child!==t&&t!==null?o("Suspense Fallback"):o("Suspense");case 19:return o("SuspenseList");case 0:case 15:return G(e.type,!1);case 11:return G(e.type.render,!1);case 1:return G(e.type,!0);case 31:return o("Activity");case 30:return o("ViewTransition");default:return""}}function B(e){try{var t="",n=null;do t+=K(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var f=Object.prototype.hasOwnProperty,D=l.unstable_scheduleCallback,T=l.unstable_cancelCallback,q=l.unstable_shouldYield,L=l.unstable_requestPaint,U=l.unstable_now,z=l.unstable_getCurrentPriorityLevel,V=l.unstable_ImmediatePriority,ne=l.unstable_UserBlockingPriority,de=l.unstable_NormalPriority,ve=l.unstable_LowPriority,Ee=l.unstable_IdlePriority,xe=l.log,_t=l.unstable_setDisableYieldValue,en=null,st=null;function On(e){if(typeof xe=="function"&&_t(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(en,e)}catch{}}var tn=Math.clz32?Math.clz32:ip,tp=Math.log,np=Math.LN2;function ip(e){return e>>>=0,e===0?32:31-(tp(e)/np|0)|0}var Pr=256,eo=262144,to=4194304;function Ri(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function no(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=i&134217727;return y!==0?(i=y&~r,i!==0?a=Ri(i):(h&=y,h!==0?a=Ri(h):n||(n=y&~e,n!==0&&(a=Ri(n))))):(y=i&~r,y!==0?a=Ri(y):h!==0?a=Ri(h):n||(n=i&~e,n!==0&&(a=Ri(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Pa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ic(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-tn(n),a=1<<i;t|=e[i],n&=~a}return t}function ap(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ac(){var e=to;return to<<=1,(to&62914560)===0&&(to=4194304),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function er(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rp(e,t,n,i,a,r){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,x=e.expirationTimes,C=e.hiddenUpdates;for(n=h&~n;0<n;){var j=31-tn(n),Z=1<<j;y[j]=0,x[j]=-1;var M=C[j];if(M!==null)for(C[j]=null,j=0;j<M.length;j++){var _=M[j];_!==null&&(_.lane&=-536870913)}n&=~Z}i!==0&&rc(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(h&~t))}function rc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-tn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-tn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function lc(e,t){var n=t&-t;return n=(n&42)!==0?1:ql(n),(n&(e.suspendedLanes|t))!==0?0:n}function ql(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sc(){var e=ge.p;return e!==0?e:(e=window.event,e===void 0?32:gy(e.type))}function uc(e,t){var n=ge.p;try{return ge.p=e,t()}finally{ge.p=n}}var Gn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Gn,Zt="__reactProps$"+Gn,na="__reactContainer$"+Gn,hc="__reactEvents$"+Gn,op="__reactListeners$"+Gn,lp="__reactHandles$"+Gn,cc="__reactResources$"+Gn,tr="__reactMarker$"+Gn,io="__reactLoad$"+Gn;function ao(e){delete e[Mt],delete e[Zt],delete e[op],delete e[lp]}function Hi(e){var t;if(t=e[Mt])return t;for(var n=e.parentNode;n;){if(t=n[na]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jm(e);e!==null;){if(n=e[Mt])return n;e=Jm(e)}return t}e=n,n=e.parentNode}return null}function ia(e){if(e=e[Mt]||e[na]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function aa(e){var t=e[cc];return t||(t=e[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function kt(e){e[tr]=!0}function dc(e){e[io]=void 0}var fc=new Set,mc={};function Di(e,t){ra(e,t),ra(e+"Capture",t)}function ra(e,t){for(mc[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var sp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yc={},gc={};function up(e){return f.call(gc,e)?!0:f.call(yc,e)?!1:sp.test(e)?gc[e]=!0:(yc[e]=!0,!1)}var Fe=!1;function pc(){var e=Fe;return Fe=!1,e}function ro(e,t,n){if(up(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function oo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Xn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function nn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hp(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(h){n=""+h,r.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ul(e){if(!e._valueTracker){var t=wc(e)?"checked":"value";e._valueTracker=hp(e,t,""+e[t])}}function vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=wc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var cp=/[\n"\\]/g;function cn(e){return e.replace(cp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ll(e,t,n,i,a,r,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+nn(t)):e.value!==""+nn(t)&&(e.value=""+nn(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?h==="number"&&e.value==t?Gl(e,nn(e.value)):Gl(e,nn(t)):n!=null?Gl(e,nn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+nn(y):e.removeAttribute("name")}function bc(e,t,n,i,a,r,h,y){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Ul(e);return}n=n!=null?""+nn(n):"",t=t!=null?""+nn(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=y?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Ul(e)}function Gl(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function oa(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function kc(e,t,n){if(t!=null&&(t=""+nn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+nn(n):""}function Sc(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(ye(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=nn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ul(e)}function la(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xc(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||dp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Tc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",Fe=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(xc(e,a,i),Fe=!0)}else for(var r in t)t.hasOwnProperty(r)&&xc(e,r,t[r])}function Xl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lo(e){return mp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nn(){}var Fl=null;function Ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,ua=null;function Ec(e){var t=ia(e);if(t&&(e=t.stateNode)){var n=e[Zt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ll(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+cn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Zt]||null;if(!a)throw Error(u(90));Ll(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&vc(i)}break e;case"textarea":kc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&oa(e,!!n.multiple,t,!1)}}}var Zl=!1;function Ic(e,t,n){if(Zl)return e(t,n);Zl=!0;try{var i=e(t);return i}finally{if(Zl=!1,(sa!==null||ua!==null)&&(sl(),sa&&(t=sa,e=ua,ua=sa=null,Ec(t),e)))for(t=0;t<e.length;t++)Ec(e[t])}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Zt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=!1;if(Fn)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Kl=!1}var ri=null,Vl=null,so=null;function Ac(){if(so)return so;var e,t=Vl,n=t.length,i,a="value"in ri?ri.value:ri.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var h=n-e;for(i=1;i<=h&&t[n-i]===a[r-i];i++);return so=a.slice(e,1<i?1-i:void 0)}function uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function Mc(){return!1}function qt(e){function t(n,i,a,r,h){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(r):r[y]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ho:Mc,this.isPropagationStopped=Mc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=qt(oi),rr=Se({},oi,{view:0,detail:0}),yp=qt(rr),Jl,Wl,or,fo=Se({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Jl=e.screenX-or.screenX,Wl=e.screenY-or.screenY):Wl=Jl=0,or=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),Oc=qt(fo),gp=Se({},fo,{dataTransfer:0}),pp=qt(gp),wp=Se({},rr,{relatedTarget:0}),$l=qt(wp),vp=Se({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),bp=qt(vp),kp=Se({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sp=qt(kp),xp=Se({},oi,{data:0}),Nc=qt(xp),Tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ap(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function Pl(){return Ap}var Mp=Se({},rr,{key:function(e){if(e.key){var t=Tp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=qt(Mp),Np=Se({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=qt(Np),Cp=Se({},oi,{submitter:0}),Rp=qt(Cp),Hp=Se({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),Dp=qt(Hp),_p=Se({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yp=qt(_p),jp=Se({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zp=qt(jp),qp=Se({},oi,{newState:0,oldState:0,source:0}),Bp=qt(qp),Up=[9,13,27,32],es=Fn&&"CompositionEvent"in window,lr=null;Fn&&"documentMode"in document&&(lr=document.documentMode);var Lp=Fn&&"TextEvent"in window&&!lr,Rc=Fn&&(!es||lr&&8<lr&&11>=lr),Hc=" ",Dc=!1;function _c(e,t){switch(e){case"keyup":return Up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ha=!1;function Gp(e,t){switch(e){case"compositionend":return Yc(t);case"keypress":return t.which!==32?null:(Dc=!0,Hc);case"textInput":return e=t.data,e===Hc&&Dc?null:e;default:return null}}function Xp(e,t){if(ha)return e==="compositionend"||!es&&_c(e,t)?(e=Ac(),so=Vl=ri=null,ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fp[e.type]:t==="textarea"}function zc(e,t,n,i){sa?ua?ua.push(i):ua=[i]:sa=i,t=ml(t,"onChange"),0<t.length&&(n=new co("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var sr=null,ur=null;function Qp(e){Im(e,0)}function mo(e){var t=nr(e);if(vc(t))return e}function qc(e,t){if(e==="change")return t}var Bc=!1;if(Fn){var ts;if(Fn){var ns="oninput"in document;if(!ns){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),ns=typeof Uc.oninput=="function"}ts=ns}else ts=!1;Bc=ts&&(!document.documentMode||9<document.documentMode)}function Lc(){sr&&(sr.detachEvent("onpropertychange",Gc),ur=sr=null)}function Gc(e){if(e.propertyName==="value"&&mo(ur)){var t=[];zc(t,ur,e,Ql(e)),Ic(Qp,t)}}function Zp(e,t,n){e==="focusin"?(Lc(),sr=t,ur=n,sr.attachEvent("onpropertychange",Gc)):e==="focusout"&&Lc()}function Kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(ur)}function Vp(e,t){if(e==="click")return mo(t)}function Jp(e,t){if(e==="input"||e==="change")return mo(t)}function Wp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var an=typeof Object.is=="function"?Object.is:Wp;function hr(e,t){if(an(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!f.call(t,a)||!an(e[a],t[a]))return!1}return!0}function is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var n=Xc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xc(n)}}function Qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=is(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=is(e.document)}return t}function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $p=Fn&&"documentMode"in document&&11>=document.documentMode,ca=null,rs=null,cr=null,os=!1;function Kc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||ca==null||ca!==is(i)||(i=ca,"selectionStart"in i&&as(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),cr&&hr(cr,i)||(cr=i,i=ml(rs,"onSelect"),0<i.length&&(t=new co("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ca)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var da={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionrun:_i("Transition","TransitionRun"),transitionstart:_i("Transition","TransitionStart"),transitioncancel:_i("Transition","TransitionCancel"),transitionend:_i("Transition","TransitionEnd")},ls={},Vc={};Fn&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function Yi(e){if(ls[e])return ls[e];if(!da[e])return e;var t=da[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vc)return ls[e]=t[n];return e}var Jc=Yi("animationend"),Wc=Yi("animationiteration"),$c=Yi("animationstart"),Pp=Yi("transitionrun"),ew=Yi("transitionstart"),tw=Yi("transitioncancel"),Pc=Yi("transitionend"),ed=new Map,ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ss.push("scrollEnd");function kn(e,t){ed.set(e,t),Di(t,[e])}var nw=0;function Qn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=En.identifierPrefix;var n=nw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function td(e){if(e==null||typeof e=="string")return e;var t=null,n=Ra;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Zn(e,t){return e=td(e),t=td(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var yo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},dn=[],fa=0,us=0;function go(){for(var e=fa,t=us=fa=0;t<e;){var n=dn[t];dn[t++]=null;var i=dn[t];dn[t++]=null;var a=dn[t];dn[t++]=null;var r=dn[t];if(dn[t++]=null,i!==null&&a!==null){var h=i.pending;h===null?a.next=a:(a.next=h.next,h.next=a),i.pending=a}r!==0&&nd(n,a,r)}}function po(e,t,n,i){dn[fa++]=e,dn[fa++]=t,dn[fa++]=n,dn[fa++]=i,us|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function hs(e,t,n,i){return po(e,t,n,i),wo(e)}function ji(e,t){return po(e,null,null,t),wo(e)}function nd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-tn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function wo(e){if(50<Hr)throw Hr=0,ll=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ma={};function iw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(e,t,n,i){return new iw(e,t,n,i)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kn(e,t){var n=e.alternate;return n===null?(n=Kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function id(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vo(e,t,n,i,a,r){var h=0;if(i=e,typeof i=="function")cs(i)&&(h=1);else if(typeof i=="string")h=Cv(e,n,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(i){case et:return e=Kt(31,n,t,a),e.elementType=et,e.lanes=r,e;case we:return zi(n.children,a,r,t);case Re:h=8,a|=24;break;case Ze:return e=Kt(12,n,t,a|2),e.elementType=Ze,e.lanes=r,e;case ee:return e=Kt(13,n,t,a),e.elementType=ee,e.lanes=r,e;case re:return e=Kt(19,n,t,a),e.elementType=re,e.lanes=r,e;case Ke:case I:return e=a|32,e=Kt(30,n,t,e),e.elementType=I,e.lanes=r,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ae:h=10;break e;case Xe:h=9;break e;case A:h=11;break e;case He:h=14;break e;case le:h=16,i=null;break e}h=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Kt(h,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function zi(e,t,n,i){return e=Kt(7,e,i,t),e.lanes=n,e}function ds(e,t,n){return e=Kt(6,e,null,t),e.lanes=n,e}function ad(e){var t=Kt(18,null,null,0);return t.stateNode=e,t}function fs(e,t,n){return t=Kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rd=new WeakMap;function fn(e,t){if(typeof e=="object"&&e!==null){var n=rd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:B(t)},rd.set(e,t),t)}return{value:e,source:t,stack:B(t)}}var ya=[],ga=0,bo=null,dr=0,mn=[],yn=0,li=null,Cn=1,Rn="";function Vn(e,t){ya[ga++]=dr,ya[ga++]=bo,bo=e,dr=t}function od(e,t,n){mn[yn++]=Cn,mn[yn++]=Rn,mn[yn++]=li,li=e;var i=Cn;e=Rn;var a=32-tn(i)-1;i&=~(1<<a),n+=1;var r=32-tn(t)+a;if(30<r){var h=a-a%5;r=(i&(1<<h)-1).toString(32),i>>=h,a-=h,Cn=1<<32-tn(t)+a|n<<a|i,Rn=r+e}else Cn=1<<r|n<<a|i,Rn=e}function ko(e){e.return!==null&&(Vn(e,1),od(e,1,0))}function ms(e){for(;e===bo;)bo=ya[--ga],ya[ga]=null,dr=ya[--ga],ya[ga]=null;for(;e===li;)li=mn[--yn],mn[yn]=null,Rn=mn[--yn],mn[yn]=null,Cn=mn[--yn],mn[yn]=null}function ld(e,t){mn[yn++]=Cn,mn[yn++]=Rn,mn[yn++]=li,Cn=t.id,Rn=t.overflow,li=e}var St=null,it=null,Ye=!1,si=null,gn=!1,ys=Error(u(519));function ui(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fr(fn(t,e)),ys}function sd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Mt]=e,t[Zt]=i,n){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(n=0;n<_r.length;n++)ze(_r[n],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),bc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),Sc(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Nm(t.textContent,n)?(i.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),i.onScroll!=null&&ze("scroll",t),i.onScrollEnd!=null&&ze("scrollend",t),i.onClick!=null&&(t.onclick=Nn),t=!0):t=!1,t||ui(e,!0)}function So(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:St=St.return}}function pa(e){if(e!==St)return!1;if(!Ye)return So(e),Ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Fu(e.type,e.memoizedProps)),n=!n),n&&it&&ui(e),So(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));it=Vm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));it=Vm(e)}else t===27?(t=it,Ei(e.type)?(e=eh,eh=null,it=e):it=t):it=St?wn(e.stateNode.nextSibling):null;return!0}function qi(){it=St=null,Ye=!1}function gs(){var e=si;return e!==null&&(Wt===null?Wt=e:Wt.push.apply(Wt,e),si=null),e}function fr(e){si===null?si=[e]:si.push(e)}var ps=pt(null),Bi=null,Jn=null;function hi(e,t,n){Be(ps,t._currentValue),t._currentValue=n}function Wn(e){e._currentValue=ps.current,Je(ps)}function xo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ws(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var h=a.child;r=r.firstContext;e:for(;r!==null;){var y=r;r=a;for(var x=0;x<t.length;x++)if(y.context===t[x]){r.lanes|=n,y=r.alternate,y!==null&&(y.lanes|=n),xo(r.return,n,e),i||(h=null);break e}r=y.next}}else if(a.tag===18){if(h=a.return,h===null)throw Error(u(341));h.lanes|=n,r=h.alternate,r!==null&&(r.lanes|=n),xo(h,n,e),h=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),xo(a.return,n,e),h=a.child,h=h!==null?h.sibling:null):h=a.child;if(h!==null)h.return=a;else for(h=a;h!==null;){if(h===e){h=null;break}if(a=h.sibling,a!==null){a.return=h.return,h=a;break}h=h.return}a=h}}function Ui(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var h=a.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var y=a.type;an(a.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(a===Mn.current){if(h=a.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(La):e=[La])}a=a.return}return e!==null&&ws(t,e,n,i),t.flags|=262144,e!==null}function To(e){for(e=e.firstContext;e!==null;){if(!an(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Li(e){Bi=e,Jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ot(e){return ud(Bi,e)}function Eo(e,t){return Bi===null&&Li(e),ud(e,t)}function ud(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Jn===null){if(e===null)throw Error(u(308));Jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jn=Jn.next=t;return n}var aw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},rw=l.unstable_scheduleCallback,ow=l.unstable_NormalPriority,ft={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vs(){return{controller:new aw,data:new Map,refCount:0}}function mr(e){e.refCount--,e.refCount===0&&rw(ow,function(){e.controller.abort()})}function hd(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var yr=null;function lw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var gr=null,bs=0,Gi=0,wa=null;function sw(e,t){if(gr===null){var n=gr=[];bs=0,Gi=Yu(),wa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return bs++,t.then(cd,cd),t}function cd(){if(--bs===0&&(yr=null,gr!==null)){wa!==null&&(wa.status="fulfilled");var e=gr;gr=null,Gi=0,wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function uw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var dd=oe.S;oe.S=function(e,t){if(rm=U(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&sw(e,t),yr!==null)for(var n=Ya;n!==null;)hd(n,yr),n=n.next;if(n=e.types,n!==null){for(var i=Ya;i!==null;)hd(i,n),i=i.next;if(Gi!==0){i=yr,i===null&&(i=yr=[]);for(var a=0;a<n.length;a++){var r=n[a];i.indexOf(r)===-1&&i.push(r)}}}dd!==null&&dd(e,t)};var Xi=pt(null);function ks(){var e=Xi.current;return e!==null?e:nt.pooledCache}function Io(e,t){t===null?Be(Xi,Xi.current):Be(Xi,t.pool)}function fd(){var e=ks();return e===null?null:{parent:ft._currentValue,pool:e}}var va=Error(u(460)),Ss=Error(u(474)),Ao=Error(u(542)),Mo={then:function(){}};function md(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nn,Nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pd(e),e===void 0&&!("reason"in t)?Error(u(600)):e;default:if(typeof t.status=="string")t.then(Nn,Nn);else{if(e=nt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pd(e),e}throw Qi=t,va}}function Fi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Qi=n,va):n}}var Qi=null;function gd(){if(Qi===null)throw Error(u(459));var e=Qi;return Qi=null,e}function pd(e){if(e===va||e===Ao)throw Error(u(483))}var ba=null,pr=0;function Oo(e){var t=pr;return pr+=1,ba===null&&(ba=[]),yd(ba,e,t)}function ci(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function No(e,t){throw t.$$typeof===J?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wd(e){function t(N,E){if(e){var H=N.deletions;H===null?(N.deletions=[E],N.flags|=16):H.push(E)}}function n(N,E){if(!e)return null;for(;E!==null;)t(N,E),E=E.sibling;return null}function i(N){for(var E=new Map;N!==null;)N.key===null?E.set(N.index,N):E.set(N.key,N),N=N.sibling;return E}function a(N,E){return N=Kn(N,E),N.index=0,N.sibling=null,N}function r(N,E,H){return N.index=H,e?(H=N.alternate,H!==null?(H=H.index,H<E?(N.flags|=2,E):H):(N.flags|=134217730,E)):(N.flags|=1048576,E)}function h(N){return e&&N.alternate===null&&(N.flags|=134217730),N}function y(N,E,H,Q){return E===null||E.tag!==6?(E=ds(H,N.mode,Q),E.return=N,E):(E=a(E,H),E.return=N,E)}function x(N,E,H,Q){var ue=H.type;return ue===we?(N=j(N,E,H.props.children,Q,H.key),ci(N,H),N):E!==null&&(E.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===le&&Fi(ue)===E.type)?(E=a(E,H.props),ci(E,H),E.return=N,E):(E=vo(H.type,H.key,H.props,null,N.mode,Q),ci(E,H),E.return=N,E)}function C(N,E,H,Q){return E===null||E.tag!==4||E.stateNode.containerInfo!==H.containerInfo||E.stateNode.implementation!==H.implementation?(E=fs(H,N.mode,Q),E.return=N,E):(E=a(E,H.children||[]),E.return=N,E)}function j(N,E,H,Q,ue){return E===null||E.tag!==7?(E=zi(H,N.mode,Q,ue),E.return=N,E):(E=a(E,H),E.return=N,E)}function Z(N,E,H){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ds(""+E,N.mode,H),E.return=N,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Me:return H=vo(E.type,E.key,E.props,null,N.mode,H),ci(H,E),H.return=N,H;case Ce:return E=fs(E,N.mode,H),E.return=N,E;case le:return E=Fi(E),Z(N,E,H)}if(ye(E)||W(E))return E=zi(E,N.mode,H,null),E.return=N,E;if(typeof E.then=="function")return Z(N,Oo(E),H);if(E.$$typeof===ae)return Z(N,Eo(N,E),H);No(N,E)}return null}function M(N,E,H,Q){var ue=E!==null?E.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ue!==null?null:y(N,E,""+H,Q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Me:return H.key===ue?x(N,E,H,Q):null;case Ce:return H.key===ue?C(N,E,H,Q):null;case le:return H=Fi(H),M(N,E,H,Q)}if(ye(H)||W(H))return ue!==null?null:j(N,E,H,Q,null);if(typeof H.then=="function")return M(N,E,Oo(H),Q);if(H.$$typeof===ae)return M(N,E,Eo(N,H),Q);No(N,H)}return null}function _(N,E,H,Q,ue){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return N=N.get(H)||null,y(E,N,""+Q,ue);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Me:return N=N.get(Q.key===null?H:Q.key)||null,x(E,N,Q,ue);case Ce:return N=N.get(Q.key===null?H:Q.key)||null,C(E,N,Q,ue);case le:return Q=Fi(Q),_(N,E,H,Q,ue)}if(ye(Q)||W(Q))return N=N.get(H)||null,j(E,N,Q,ue,null);if(typeof Q.then=="function")return _(N,E,H,Oo(Q),ue);if(Q.$$typeof===ae)return _(N,E,H,Eo(E,Q),ue);No(E,Q)}return null}function te(N,E,H,Q){for(var ue=null,Le=null,pe=E,Ie=E=0,gt=null;pe!==null&&Ie<H.length;Ie++){pe.index>Ie?(gt=pe,pe=null):gt=pe.sibling;var Ge=M(N,pe,H[Ie],Q);if(Ge===null){pe===null&&(pe=gt);break}e&&pe&&Ge.alternate===null&&t(N,pe),E=r(Ge,E,Ie),Le===null?ue=Ge:Le.sibling=Ge,Le=Ge,pe=gt}if(Ie===H.length)return n(N,pe),Ye&&Vn(N,Ie),ue;if(pe===null){for(;Ie<H.length;Ie++)pe=Z(N,H[Ie],Q),pe!==null&&(E=r(pe,E,Ie),Le===null?ue=pe:Le.sibling=pe,Le=pe);return Ye&&Vn(N,Ie),ue}for(pe=i(pe);Ie<H.length;Ie++)gt=_(pe,N,Ie,H[Ie],Q),gt!==null&&(e&&(Ge=gt.alternate,Ge!==null&&pe.delete(Ge.key===null?Ie:Ge.key)),E=r(gt,E,Ie),Le===null?ue=gt:Le.sibling=gt,Le=gt);return e&&pe.forEach(function(Ni){return t(N,Ni)}),Ye&&Vn(N,Ie),ue}function fe(N,E,H,Q){if(H==null)throw Error(u(151));for(var ue=null,Le=null,pe=E,Ie=E=0,gt=null,Ge=H.next();pe!==null&&!Ge.done;Ie++,Ge=H.next()){pe.index>Ie?(gt=pe,pe=null):gt=pe.sibling;var Ni=M(N,pe,Ge.value,Q);if(Ni===null){pe===null&&(pe=gt);break}e&&pe&&Ni.alternate===null&&t(N,pe),E=r(Ni,E,Ie),Le===null?ue=Ni:Le.sibling=Ni,Le=Ni,pe=gt}if(Ge.done)return n(N,pe),Ye&&Vn(N,Ie),ue;if(pe===null){for(;!Ge.done;Ie++,Ge=H.next())Ge=Z(N,Ge.value,Q),Ge!==null&&(E=r(Ge,E,Ie),Le===null?ue=Ge:Le.sibling=Ge,Le=Ge);return Ye&&Vn(N,Ie),ue}for(pe=i(pe);!Ge.done;Ie++,Ge=H.next())Ge=_(pe,N,Ie,Ge.value,Q),Ge!==null&&(e&&(gt=Ge.alternate,gt!==null&&pe.delete(gt.key===null?Ie:gt.key)),E=r(Ge,E,Ie),Le===null?ue=Ge:Le.sibling=Ge,Le=Ge);return e&&pe.forEach(function(Gv){return t(N,Gv)}),Ye&&Vn(N,Ie),ue}function _e(N,E,H,Q){if(typeof H=="object"&&H!==null&&H.type===we&&H.key===null&&H.props.ref===void 0&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case Me:e:{for(var ue=H.key;E!==null;){if(E.key===ue){if(ue=H.type,ue===we){if(E.tag===7){n(N,E.sibling),Q=a(E,H.props.children),ci(Q,H),Q.return=N,N=Q;break e}}else if(E.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===le&&Fi(ue)===E.type){n(N,E.sibling),Q=a(E,H.props),ci(Q,H),Q.return=N,N=Q;break e}n(N,E);break}else t(N,E);E=E.sibling}H.type===we?(Q=zi(H.props.children,N.mode,Q,H.key),ci(Q,H),Q.return=N,N=Q):(Q=vo(H.type,H.key,H.props,null,N.mode,Q),ci(Q,H),Q.return=N,N=Q)}return h(N);case Ce:e:{for(ue=H.key;E!==null;){if(E.key===ue)if(E.tag===4&&E.stateNode.containerInfo===H.containerInfo&&E.stateNode.implementation===H.implementation){n(N,E.sibling),Q=a(E,H.children||[]),Q.return=N,N=Q;break e}else{n(N,E);break}else t(N,E);E=E.sibling}Q=fs(H,N.mode,Q),Q.return=N,N=Q}return h(N);case le:return H=Fi(H),_e(N,E,H,Q)}if(ye(H))return te(N,E,H,Q);if(W(H)){if(ue=W(H),typeof ue!="function")throw Error(u(150));return H=ue.call(H),fe(N,E,H,Q)}if(typeof H.then=="function")return _e(N,E,Oo(H),Q);if(H.$$typeof===ae)return _e(N,E,Eo(N,H),Q);No(N,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,E!==null&&E.tag===6?(n(N,E.sibling),Q=a(E,H),Q.return=N,N=Q):(n(N,E),Q=ds(H,N.mode,Q),Q.return=N,N=Q),h(N)):n(N,E)}return function(N,E,H,Q){try{pr=0;var ue=_e(N,E,H,Q);return ba=null,ue}catch(pe){if(pe===va||pe===Ao)throw pe;var Le=Kt(29,pe,null,N.mode);return Le.lanes=Q,Le.return=N,Le}finally{}}}var Zi=wd(!0),vd=wd(!1),di=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Qe&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=wo(e),nd(e,null,n),t}return po(e,i,t,n),wo(e)}function wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,oc(e,n)}}function Es(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=h:r=r.next=h,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Is=!1;function vr(){if(Is){var e=wa;if(e!==null)throw e}}function br(e,t,n,i){Is=!1;var a=e.updateQueue;di=!1;var r=a.firstBaseUpdate,h=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var x=y,C=x.next;x.next=null,h===null?r=C:h.next=C,h=x;var j=e.alternate;j!==null&&(j=j.updateQueue,y=j.lastBaseUpdate,y!==h&&(y===null?j.firstBaseUpdate=C:y.next=C,j.lastBaseUpdate=x))}if(r!==null){var Z=a.baseState;h=0,j=C=x=null,y=r;do{var M=y.lane&-536870913,_=M!==y.lane;if(_?(Ue&M)===M:(i&M)===M){M!==0&&M===Gi&&(Is=!0),j!==null&&(j=j.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var te=e,fe=y;M=t;var _e=n;switch(fe.tag){case 1:if(te=fe.payload,typeof te=="function"){Z=te.call(_e,Z,M);break e}Z=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=fe.payload,M=typeof te=="function"?te.call(_e,Z,M):te,M==null)break e;Z=Se({},Z,M);break e;case 2:di=!0}}M=y.callback,M!==null&&(e.flags|=64,_&&(e.flags|=8192),_=a.callbacks,_===null?a.callbacks=[M]:_.push(M))}else _={lane:M,tag:y.tag,payload:y.payload,callback:y.callback,next:null},j===null?(C=j=_,x=Z):j=j.next=_,h|=M;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;_=y,y=_.next,_.next=null,a.lastBaseUpdate=_,a.shared.pending=null}}while(!0);j===null&&(x=Z),a.baseState=x,a.firstBaseUpdate=C,a.lastBaseUpdate=j,r===null&&(a.shared.lanes=0),ki|=h,e.lanes=h,e.memoizedState=Z}}function bd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function kd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)bd(n[e],t)}var yi=pt(null),Co=pt(0);function Sd(e,t){e=ni,Be(Co,e),Be(yi,t),ni=e|t.baseLanes}function As(){Be(Co,ni),Be(yi,yi.current)}function Ms(){ni=Co.current,Je(yi),Je(Co)}var Nt=pt(null),Yt=null;function gi(e){var t=e.alternate;Be(Ct,Ct.current&1),Be(Nt,e),Yt===null&&(t===null||yi.current!==null||t.memoizedState!==null)&&(Yt=e)}function Os(e){Be(Ct,Ct.current),Be(Nt,e),Yt===null&&(Yt=e)}function xd(e){e.tag===22?(Be(Ct,Ct.current),Be(Nt,e),Yt===null&&(Yt=e)):pi()}function pi(){Be(Ct,Ct.current),Be(Nt,Nt.current)}function rn(e){Je(Nt),Yt===e&&(Yt=null),Je(Ct)}var Ct=pt(0);function kr(e,t){Be(Nt,Nt.current),Be(Ct,t)}function Ns(e){Je(Ct),Je(Nt),Yt===e&&(Yt=null)}function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||$u(n)||Pu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $n=0,De=null,tt=null,mt=null,Ho=!1,ka=!1,Ki=!1,Do=0,Sr=0,Sa=null,hw=0;function ut(){throw Error(u(321))}function Cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!an(e[n],t[n]))return!1;return!0}function Rs(e,t,n,i,a,r){return $n=r,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oe.H=e===null||e.memoizedState===null?lf:sf,Ki=!1,r=n(i,a),Ki=!1,ka&&(r=Ed(t,n,i,a)),Td(e),r}function Td(e){oe.H=Uo;var t=tt!==null&&tt.next!==null;if($n=0,mt=tt=De=null,Ho=!1,Sr=0,Sa=null,t)throw Error(u(300));e===null||yt||(e=e.dependencies,e!==null&&To(e)&&(yt=!0))}function Ed(e,t,n,i){De=e;var a=0;do{if(ka&&(Sa=null),Sr=0,ka=!1,25<=a)throw Error(u(301));if(a+=1,mt=tt=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}oe.H=ww,r=t(n,i)}while(ka);return r}function cw(){var e=oe.H,t=e.useState()[0];return t=typeof t.then=="function"?xr(t):t,e=e.useState()[0],(tt!==null?tt.memoizedState:null)!==e&&(De.flags|=1024),t}function Hs(){var e=Do!==0;return Do=0,e}function Ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _s(e){if(Ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ho=!1}$n=0,mt=tt=De=null,ka=!1,Sr=Do=0,Sa=null}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?De.memoizedState=mt=e:mt=mt.next=e,mt}function ct(){if(tt===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=mt===null?De.memoizedState:mt.next;if(t!==null)mt=t,tt=e;else{if(e===null)throw De.alternate===null?Error(u(467)):Error(u(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},mt===null?De.memoizedState=mt=e:mt=mt.next=e}return mt}function _o(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xr(e){var t=Sr;return Sr+=1,Sa===null&&(Sa=[]),e=yd(Sa,e,t),t=De,(mt===null?t.memoizedState:mt.next)===null&&(t=t.alternate,oe.H=t===null||t.memoizedState===null?lf:sf),e}function Yo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xr(e);if(e.$$typeof===X)return;if(e.$$typeof===ae)return Ot(e)}throw Error(u(438,String(e)))}function Ys(e){var t=null,n=De.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=De.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=_o(),De.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=qe;return t.index++,n}function Pn(e,t){return typeof t=="function"?t(e):t}function jo(e){var t=ct();return js(t,tt,e)}function js(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var h=a.next;a.next=r.next,r.next=h}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var y=h=null,x=null,C=t,j=!1;do{var Z=C.lane&-536870913;if(Z!==C.lane?(Ue&Z)===Z:($n&Z)===Z){var M=C.revertLane;if(M===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),Z===Gi&&(j=!0);else if(($n&M)===M){C=C.next,M===Gi&&(j=!0);continue}else Z={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(y=x=Z,h=r):x=x.next=Z,De.lanes|=M,ki|=M;Z=C.action,Ki&&n(r,Z),r=C.hasEagerState?C.eagerState:n(r,Z)}else M={lane:Z,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(y=x=M,h=r):x=x.next=M,De.lanes|=Z,ki|=Z;C=C.next}while(C!==null&&C!==t);if(x===null?h=r:x.next=y,!an(r,e.memoizedState)&&(yt=!0,j&&(n=wa,n!==null)))throw n;e.memoizedState=r,e.baseState=h,e.baseQueue=x,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function zs(e){var t=ct(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var h=a=a.next;do r=e(r,h.action),h=h.next;while(h!==a);an(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Id(e,t,n){var i=De,a=ct(),r=Ye;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var h=!an((tt||a).memoizedState,n);if(h&&(a.memoizedState=n,yt=!0),a=a.queue,Us(Od.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||h||mt!==null&&(mt.memoizedState.tag&1)!==0,xa(e?9:8,{destroy:void 0},Md.bind(null,i,a,n,t),null),e){if(i.flags|=2048,nt===null)throw Error(u(349));r||($n&127)!==0||Ad(i,t,n)}return n}function Ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t=_o(),De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Md(e,t,n,i){t.value=n,t.getSnapshot=i,Nd(t)&&Cd(e)}function Od(e,t,n){return n(function(){Nd(t)&&Cd(e)})}function Nd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!an(e,n)}catch{return!0}}function Cd(e){var t=ji(e,2);t!==null&&$t(t,e,2)}function qs(e){var t=Bt();if(typeof e=="function"){var n=e;if(e=n(),Ki){On(!0);try{n()}finally{On(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},t}function Rd(e,t,n,i){return e.baseState=n,js(e,tt,typeof i=="function"?i:Pn)}function dw(e,t,n,i,a){if(Bo(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){r.listeners.push(h)}};oe.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,Hd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Hd(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=oe.T,h={};h.types=r!==null?r.types:null,oe.T=h;try{var y=n(a,i),x=oe.S;x!==null&&x(h,y),Dd(e,t,y)}catch(C){Bs(e,t,C)}finally{r!==null&&h.types!==null&&(r.types=h.types),oe.T=r}}else try{r=n(a,i),Dd(e,t,r)}catch(C){Bs(e,t,C)}}function Dd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){_d(e,t,i)},function(i){return Bs(e,t,i)}):_d(e,t,n)}function _d(e,t,n){t.status="fulfilled",t.value=n,Yd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hd(e,n)))}function Bs(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Yd(t),t=t.next;while(t!==i)}e.action=null}function Yd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jd(e,t){return t}function zd(e,t){if(Ye){var n=nt.formState;if(n!==null){e:{var i=De;if(Ye){if(it){t:{for(var a=it,r=gn;a.nodeType!==8;){if(!r){a=null;break t}if(a=wn(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){it=wn(a.nextSibling),i=a.data==="F!";break e}}ui(i)}i=!1}i&&(t=n[0])}}return n=Bt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jd,lastRenderedState:t},n.queue=i,n=af.bind(null,De,i),i.dispatch=n,i=qs(!1),r=Qs.bind(null,De,!1,i.queue),i=Bt(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=dw.bind(null,De,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function qd(e){var t=ct();return Bd(t,tt,e)}function Bd(e,t,n){if(t=js(e,t,jd)[0],e=jo(Pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=xr(t)}catch(h){throw h===va?Ao:h}else i=t;t=ct();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(De.flags|=2048,xa(9,{destroy:void 0},fw.bind(null,a,n),null)),[i,r,e]}function fw(e,t){e.action=t}function Ud(e){var t=ct(),n=tt;if(n!==null)return Bd(t,n,e);ct(),t=t.memoizedState,n=ct();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function xa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=De.updateQueue,t===null&&(t=_o(),De.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ld(){return ct().memoizedState}function zo(e,t,n,i){var a=Bt();De.flags|=e,a.memoizedState=xa(1|t,{destroy:void 0},n,i===void 0?null:i)}function qo(e,t,n,i){var a=ct();i=i===void 0?null:i;var r=a.memoizedState.inst;tt!==null&&i!==null&&Cs(i,tt.memoizedState.deps)?a.memoizedState=xa(t,r,n,i):(De.flags|=e,a.memoizedState=xa(1|t,r,n,i))}function Gd(e,t){zo(8390656,8,e,t)}function Us(e,t){qo(2048,8,e,t)}function mw(e){De.flags|=4;var t=De.updateQueue;if(t===null)t=_o(),De.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Xd(e){var t=ct().memoizedState;return mw({ref:t,nextImpl:e}),function(){if((Qe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Fd(e,t){return qo(4,2,e,t)}function Qd(e,t){return qo(4,4,e,t)}function Zd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kd(e,t,n){n=n!=null?n.concat([e]):null,qo(4,4,Zd.bind(null,t,e),n)}function Ls(){}function Vd(e,t){var n=ct();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Cs(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Jd(e,t){var n=ct();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Cs(t,i[1]))return i[0];if(i=e(),Ki){On(!0);try{e()}finally{On(!1)}}return n.memoizedState=[i,t],i}function Gs(e,t,n){return n===void 0||($n&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=lm(),De.lanes|=e,ki|=e,n)}function Wd(e,t,n,i){return an(n,t)?n:yi.current!==null?(e=Gs(e,n,i),an(e,t)||(yt=!0),e):($n&106)===0||($n&1073741824)!==0&&(Ue&261930)===0?(yt=!0,e.memoizedState=n):(e=lm(),De.lanes|=e,ki|=e,t)}function $d(e,t,n,i,a){var r=ge.p;ge.p=r!==0&&8>r?r:8;var h=oe.T,y={};y.types=h!==null?h.types:null,oe.T=y,Qs(e,!1,t,n);try{var x=a(),C=oe.S;if(C!==null&&C(y,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var j=uw(x,i);Tr(e,t,j,un(e))}else Tr(e,t,i,un(e))}catch(Z){Tr(e,t,{then:function(){},status:"rejected",reason:Z},un())}finally{ge.p=r,h!==null&&y.types!==null&&(h.types=y.types),oe.T=h}}function yw(){}function Xs(e,t,n,i){if(e.tag!==5)throw Error(u(476));var a=Pd(e).queue;$d(e,a,t,Et,n===null?yw:function(){return ef(e),n(i)})}function Pd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Et,baseState:Et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:Et},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ef(e){var t=Pd(e);t.next===null&&(t=e.alternate.memoizedState),Tr(e,t.next.queue,{},un())}function Fs(){return Ot(La)}function tf(){return ct().memoizedState}function nf(){return ct().memoizedState}function gw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=un();e=fi(n);var i=mi(t,e,n);i!==null&&($t(i,t,n),wr(i,t,n)),t={cache:vs()},e.payload=t;return}t=t.return}}function pw(e,t,n){var i=un();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bo(e)?rf(t,n):(n=hs(e,t,n,i),n!==null&&($t(n,e,i),of(n,t,i)))}function af(e,t,n){var i=un();Tr(e,t,n,i)}function Tr(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bo(e))rf(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var h=t.lastRenderedState,y=r(h,n);if(a.hasEagerState=!0,a.eagerState=y,an(y,h))return po(e,t,a,0),nt===null&&go(),!1}catch{}finally{}if(n=hs(e,t,a,i),n!==null)return $t(n,e,i),of(n,t,i),!0}return!1}function Qs(e,t,n,i){if(i={lane:2,revertLane:Yu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Bo(e)){if(t)throw Error(u(479))}else t=hs(e,n,i,2),t!==null&&$t(t,e,2)}function Bo(e){var t=e.alternate;return e===De||t!==null&&t===De}function rf(e,t){ka=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function of(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,oc(e,n)}}var Uo={readContext:Ot,use:Yo,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut,useEffectEvent:ut},lf={readContext:Ot,use:Yo,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:Gd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zo(4194308,4,Zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){zo(4,2,e,t)},useMemo:function(e,t){var n=Bt();t=t===void 0?null:t;var i=e();if(Ki){On(!0);try{e()}finally{On(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Bt();if(n!==void 0){var a=n(t);if(Ki){On(!0);try{n(t)}finally{On(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=pw.bind(null,De,e),[i.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:function(e){e=qs(e);var t=e.queue,n=af.bind(null,De,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ls,useDeferredValue:function(e,t){var n=Bt();return Gs(n,e,t)},useTransition:function(){var e=qs(!1);return e=$d.bind(null,De,e.queue,!0,!1),Bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=De,a=Bt();if(Ye){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),nt===null)throw Error(u(349));(Ue&127)!==0||Ad(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Gd(Od.bind(null,i,r,e),[e]),i.flags|=2048,xa(9,{destroy:void 0},Md.bind(null,i,r,n,t),null),n},useId:function(){var e=Bt(),t=nt.identifierPrefix;if(Ye){var n=Rn,i=Cn;n=(i&~(1<<32-tn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Do++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=hw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fs,useFormState:zd,useActionState:zd,useOptimistic:function(e){var t=Bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Qs.bind(null,De,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ys,useCacheRefresh:function(){return Bt().memoizedState=gw.bind(null,De)},useEffectEvent:function(e){var t=Bt(),n={impl:e};return t.memoizedState=n,function(){if((Qe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},sf={readContext:Ot,use:Yo,useCallback:Vd,useContext:Ot,useEffect:Us,useImperativeHandle:Kd,useInsertionEffect:Fd,useLayoutEffect:Qd,useMemo:Jd,useReducer:jo,useRef:Ld,useState:function(){return jo(Pn)},useDebugValue:Ls,useDeferredValue:function(e,t){var n=ct();return Wd(n,tt.memoizedState,e,t)},useTransition:function(){var e=jo(Pn)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:xr(e),t]},useSyncExternalStore:Id,useId:tf,useHostTransitionStatus:Fs,useFormState:qd,useActionState:qd,useOptimistic:function(e,t){var n=ct();return Rd(n,tt,e,t)},useMemoCache:Ys,useCacheRefresh:nf,useEffectEvent:Xd},ww={readContext:Ot,use:Yo,useCallback:Vd,useContext:Ot,useEffect:Us,useImperativeHandle:Kd,useInsertionEffect:Fd,useLayoutEffect:Qd,useMemo:Jd,useReducer:zs,useRef:Ld,useState:function(){return zs(Pn)},useDebugValue:Ls,useDeferredValue:function(e,t){var n=ct();return tt===null?Gs(n,e,t):Wd(n,tt.memoizedState,e,t)},useTransition:function(){var e=zs(Pn)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:xr(e),t]},useSyncExternalStore:Id,useId:tf,useHostTransitionStatus:Fs,useFormState:Ud,useActionState:Ud,useOptimistic:function(e,t){var n=ct();return tt!==null?Rd(n,tt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ys,useCacheRefresh:nf,useEffectEvent:Xd};function Zs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=un(),a=fi(i);a.payload=t,n!=null&&(a.callback=n),t=mi(e,a,i),t!==null&&($t(t,e,i),wr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=un(),a=fi(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=mi(e,a,i),t!==null&&($t(t,e,i),wr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=un(),i=fi(n);i.tag=2,t!=null&&(i.callback=t),t=mi(e,i,n),t!==null&&($t(t,e,n),wr(t,e,n))}};function uf(e,t,n,i,a,r,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,h):t.prototype&&t.prototype.isPureReactComponent?!hr(n,i)||!hr(a,r):!0}function hf(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Vi(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Se({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function cf(e){yo(e)}function df(e){console.error(e)}function ff(e){yo(e)}function Lo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function mf(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Vs(e,t,n){return n=fi(n),n.tag=3,n.payload={element:null},n.callback=function(){Lo(e,t)},n}function yf(e){return e=fi(e),e.tag=3,e}function gf(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){mf(t,n,i)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){mf(t,n,i),typeof a!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function vw(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ui(t,n,a,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Yt===null?ul():n.alternate===null&&ht===0&&(ht=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Mo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Hu(e,i,a)),!1;case 22:return n.flags|=65536,i===Mo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Hu(e,i,a)),!1}throw Error(u(435,n.tag))}return Hu(e,i,a),ul(),!1}if(Ye)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==ys&&(e=Error(u(422),{cause:i}),fr(fn(e,n)))):(i!==ys&&(t=Error(u(423),{cause:i}),fr(fn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=fn(i,n),a=Vs(e.stateNode,i,a),Es(e,a),ht!==4&&(ht=2)),!1;var r=Error(u(520),{cause:i});if(r=fn(r,n),Rr===null?Rr=[r]:Rr.push(r),ht!==4&&(ht=2),t===null)return!0;i=fn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Vs(n.stateNode,i,e),Es(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Si===null||!Si.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=yf(a),gf(a,e,n,i),Es(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Js=Error(u(461)),yt=!1;function bt(e,t,n,i){t.child=e===null?vd(t,null,n,i):Zi(t,e.child,n,i)}function pf(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var h={};for(var y in i)y!=="ref"&&(h[y]=i[y])}else h=i;return Li(t),i=Rs(e,t,n,h,r,a),y=Hs(),e!==null&&!yt?(Ds(e,t,a),ei(e,t,a)):(Ye&&y&&ko(t),t.flags|=1,bt(e,t,i,a),t.child)}function wf(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!cs(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,vf(e,t,r,i,a)):(e=vo(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!au(e,a)){var h=r.memoizedProps;if(n=n.compare,n=n!==null?n:hr,n(h,i)&&e.ref===t.ref)return ei(e,t,a)}return t.flags|=1,e=Kn(r,i),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(hr(r,i)&&e.ref===t.ref)if(yt=!1,t.pendingProps=i=r,au(e,a))(e.flags&131072)!==0&&(yt=!0);else return t.lanes=e.lanes,ei(e,t,a)}return Ws(e,t,n,i,a)}function bf(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return kf(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Io(t,r!==null?r.cachePool:null),r!==null?Sd(t,r):As(),xd(t);else return i=t.lanes=536870912,kf(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Io(t,r.cachePool),Sd(t,r),pi(),t.memoizedState=null):(e!==null&&Io(t,null),As(),pi());return bt(e,t,a,n),t.child}function Er(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kf(e,t,n,i,a){var r=ks();return r=r===null?null:{parent:ft._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Io(t,null),As(),xd(t),e!==null&&Ui(e,t,i,!0),t.childLanes=a,null}function Go(e,t){return t=Xo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sf(e,t,n){return Zi(t,e.child,null,n),e=Go(t,t.pendingProps),e.flags|=2,rn(t),t.memoizedState=null,e}function bw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ye){if(i.mode==="hidden")return e=Go(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Er(null,e);if(Os(t),(e=it)?(e=Km(e,gn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:li!==null?{id:Cn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},n=ad(e),n.return=t,t.child=n,St=t,it=null)):e=null,e===null)throw ui(t);return t.lanes=536870912,null}return Go(t,i)}var r=e.memoizedState;if(r!==null){var h=r.dehydrated;if(Os(t),a)if(t.flags&256)t.flags&=-257,t=Sf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(yt||Ui(e,t,n,!1),a=(n&e.childLanes)!==0,yt||a){if(yi.current===null){if(i=nt,i!==null&&(h=lc(i,n),h!==0&&h!==r.retryLane))throw r.retryLane=h,ji(e,h),$t(i,e,h),Js;ul()}t=Sf(e,t,n)}else e=r.treeContext,it=wn(h.nextSibling),St=t,Ye=!0,si=null,gn=!1,e!==null&&ld(t,e),t=Go(t,i),t.flags|=134221824;return t}return e=Kn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ta(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ws(e,t,n,i,a){return Li(t),n=Rs(e,t,n,i,void 0,a),i=Hs(),e!==null&&!yt?(Ds(e,t,a),ei(e,t,a)):(Ye&&i&&ko(t),t.flags|=1,bt(e,t,n,a),t.child)}function xf(e,t,n,i,a,r){return Li(t),t.updateQueue=null,n=Ed(t,i,n,a),Td(e),i=Hs(),e!==null&&!yt?(Ds(e,t,r),ei(e,t,r)):(Ye&&i&&ko(t),t.flags|=1,bt(e,t,n,r),t.child)}function Tf(e,t,n,i,a){if(Li(t),t.stateNode===null){var r=ma,h=n.contextType;typeof h=="object"&&h!==null&&(r=Ot(h)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ks,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},xs(t),h=n.contextType,r.context=typeof h=="object"&&h!==null?Ot(h):ma,r.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Zs(t,n,h,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(h=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),h!==r.state&&Ks.enqueueReplaceState(r,r.state,null),br(t,i,r,a),vr(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var y=t.memoizedProps,x=Vi(n,y);r.props=x;var C=r.context,j=n.contextType;h=ma,typeof j=="object"&&j!==null&&(h=Ot(j));var Z=n.getDerivedStateFromProps;j=typeof Z=="function"||typeof r.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,j||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(y||C!==h)&&hf(t,r,i,h),di=!1;var M=t.memoizedState;r.state=M,br(t,i,r,a),vr(),C=t.memoizedState,y||M!==C||di?(typeof Z=="function"&&(Zs(t,n,Z,i),C=t.memoizedState),(x=di||uf(t,n,x,i,M,C,h))?(j||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=C),r.props=i,r.state=C,r.context=h,i=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Ts(e,t),h=t.memoizedProps,j=Vi(n,h),r.props=j,Z=t.pendingProps,M=r.context,C=n.contextType,x=ma,typeof C=="object"&&C!==null&&(x=Ot(C)),y=n.getDerivedStateFromProps,(C=typeof y=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==Z||M!==x)&&hf(t,r,i,x),di=!1,M=t.memoizedState,r.state=M,br(t,i,r,a),vr();var _=t.memoizedState;h!==Z||M!==_||di||e!==null&&e.dependencies!==null&&To(e.dependencies)?(typeof y=="function"&&(Zs(t,n,y,i),_=t.memoizedState),(j=di||uf(t,n,j,i,M,_,x)||e!==null&&e.dependencies!==null&&To(e.dependencies))?(C||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,_,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,_,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=_),r.props=i,r.state=_,r.context=x,i=j):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Ta(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Zi(t,e.child,null,a),t.child=Zi(t,null,n,a)):bt(e,t,n,a),t.memoizedState=r.state,e=t.child):e=ei(e,t,a),e}function Ef(e,t,n,i){return qi(),t.flags|=256,bt(e,t,n,i),t.child}var $s={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ps(e){return{baseLanes:e,cachePool:fd()}}function eu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=sn),e}function If(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,h;if((h=r)||(h=e!==null&&e.memoizedState===null?!1:(Ct.current&2)!==0),h&&(a=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ye){if(a?gi(t):pi(),(e=it)?(e=Km(e,gn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:li!==null?{id:Cn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},n=ad(e),n.return=t,t.child=n,St=t,it=null)):e=null,e===null)throw ui(t);return Pu(e)?t.lanes=32:t.lanes=536870912,null}return r=i.children,i=i.fallback,a?(pi(),a=t.mode,r=Xo({mode:"hidden",children:r},a),i=zi(i,a,n,null),r.return=t,i.return=t,r.sibling=i,t.child=r,i=t.child,i.memoizedState=Ps(n),i.childLanes=eu(e,h,n),t.memoizedState=$s,Er(null,i)):(gi(t),tu(t,r))}var y=e.memoizedState;if(y!==null){var x=y.dehydrated;if(x!==null)return kw(e,t,r,h,i,x,y,n)}return a?(pi(),a=i.fallback,r=t.mode,y=e.child,x=y.sibling,i=Kn(y,{mode:"hidden",children:i.children}),i.subtreeFlags=y.subtreeFlags&1206910976,x!==null?a=Kn(x,a):(a=zi(a,r,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,Er(null,i),i=t.child,a=e.child.memoizedState,a===null?a=Ps(n):(r=a.cachePool,r!==null?(y=ft._currentValue,r=r.parent!==y?{parent:y,pool:y}:r):r=fd(),a={baseLanes:a.baseLanes|n,cachePool:r}),i.memoizedState=a,i.childLanes=eu(e,h,n),t.memoizedState=$s,Er(e.child,i)):(gi(t),n=e.child,e=n.sibling,n=Kn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function tu(e,t){return t=Xo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Xo(e,t){return e=Kt(22,e,null,t),e.lanes=0,e}function Fo(e,t,n){return Zi(t,e.child,null,n),e=tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kw(e,t,n,i,a,r,h,y){if(n)return t.flags&256?(gi(t),t.flags&=-257,Fo(e,t,y)):t.memoizedState!==null?(pi(),t.child=e.child,t.flags|=128,null):(pi(),r=a.fallback,h=t.mode,a=Xo({mode:"visible",children:a.children},h),r=zi(r,h,y,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,Zi(t,e.child,null,y),a=t.child,a.memoizedState=Ps(y),a.childLanes=eu(e,i,y),t.memoizedState=$s,Er(null,a));if(gi(t),Pu(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var x=i.dgst;return i=x,i!==""&&(a=Error(u(419)),a.stack="",a.digest=i,fr({value:a,source:null,stack:null})),Fo(e,t,y)}if(yt||Ui(e,t,y,!1),i=(y&e.childLanes)!==0,yt||i){if(yi.current!==null)return Fo(e,t,y);if(i=nt,i!==null&&(a=lc(i,y),a!==0&&a!==h.retryLane))throw h.retryLane=a,ji(e,a),$t(i,e,a),Js;return $u(r)||ul(),Fo(e,t,y)}return $u(r)?(t.flags|=192,t.child=e.child,null):(e=h.treeContext,it=wn(r.nextSibling),St=t,Ye=!0,si=null,gn=!1,e!==null&&ld(t,e),t=tu(t,a.children),t.flags|=134221824,t)}function Af(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),xo(e.return,t,n)}function Mf(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ro(n)===null&&(t=e),e=e.sibling}return t}function Qo(e,t,n,i,a,r){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=n,h.tailMode=a,h.treeForkCount=r)}function nu(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function iu(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var h=Ct.current;if(t.flags&128)return kr(t,h),null;var y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,kr(t,h),a==="backwards"&&e!==null?(nu(e),bt(e,t,i,n),nu(e)):bt(e,t,i,n),i=Ye?dr:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Af(e,n,t);else if(e.tag===19)Af(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=Mf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,nu(t)),Qo(t,!0,a,null,r,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ro(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Qo(t,!0,n,null,r,i);break;case"together":Qo(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Mf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Qo(t,!1,a,n,r,i)}return t.child}function Of(e,t,n){var i=t.pendingProps;return hi(t,t.type,i.value),bt(e,t,i.children,n),t.child}function ei(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ki|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function au(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&To(e)))}function Sw(e,t,n){switch(t.tag){case 3:Ft(t,t.stateNode.containerInfo),hi(t,ft,e.memoizedState.cache),qi();break;case 27:case 5:zt(t);break;case 4:Ft(t,t.stateNode.containerInfo);break;case 10:hi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Os(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return gi(t),t.flags|=128,null;i=Ui(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?If(e,t,n):(gi(t),e=ei(e,t,n),e!==null?e.sibling:null)}gi(t);break;case 19:if(t.flags&128)return iu(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ui(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return iu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),kr(t,Ct.current),i)break;return null;case 22:return t.lanes=0,bf(e,t,n,t.pendingProps);case 24:hi(t,ft,e.memoizedState.cache)}return ei(e,t,n)}function Nf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)yt=!0;else{if(!au(e,n)&&(t.flags&128)===0)return yt=!1,Sw(e,t,n);yt=(e.flags&131072)!==0}else yt=!1,Ye&&(t.flags&1048576)!==0&&od(t,dr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Fi(t.elementType),t.type=e,typeof e=="function")cs(e)?(i=Vi(e,i),t.tag=1,t=Tf(null,t,e,i,n)):(t.tag=0,t=Ws(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===A){t.tag=11,t=pf(null,t,e,i,n);break e}else if(a===He){t.tag=14,t=wf(null,t,e,i,n);break e}else if(a===ae){t.tag=10,t.type=e,t=Of(null,t,n);break e}}throw t=Te(e)||e,Error(u(306,t,""))}}return t;case 0:return Ws(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Vi(i,t.pendingProps),Tf(e,t,i,a,n);case 3:e:{if(Ft(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Ts(e,t),br(t,i,null,n);var h=t.memoizedState;if(i=h.cache,hi(t,ft,i),i!==r.cache&&ws(t,[ft],n,!0),vr(),i=h.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Ef(e,t,i,n);break e}else if(i!==a){a=fn(Error(u(424)),t),fr(a),t=Ef(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(it=wn(e.firstChild),St=t,Ye=!0,si=null,gn=!0,n=vd(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(qi(),i===a){t=ei(e,t,n);break e}bt(e,t,i,n)}t=t.child}return t;case 26:return Ta(e,t),e===null?(n=ty(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ye||(t.stateNode=Dm(t.type,t.pendingProps,vt.current,t)):t.memoizedState=ty(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zt(t),e===null&&Ye&&(i=t.stateNode=Wm(t.type,t.pendingProps,vt.current),St=t,gn=!0,a=it,Ei(t.type)?(eh=a,it=wn(i.firstChild)):it=a),bt(e,t,t.pendingProps.children,n),Ta(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ye&&((a=i=it)&&(i=gv(i,t.type,t.pendingProps,gn),i!==null?(t.stateNode=i,St=t,it=wn(i.firstChild),gn=!1,a=!0):a=!1),a||ui(t)),zt(t),a=t.type,r=t.pendingProps,h=e!==null?e.memoizedProps:null,i=r.children,Fu(a,r)?i=null:h!==null&&Fu(a,h)&&(t.flags|=32),t.memoizedState!==null&&(a=Rs(e,t,cw,null,null,n),La._currentValue=a),Ta(e,t),bt(e,t,i,n),t.child;case 6:return e===null&&Ye&&((e=n=it)&&(n=pv(n,t.pendingProps,gn),n!==null?(t.stateNode=n,St=t,it=null,e=!0):e=!1),e||ui(t)),null;case 13:return If(e,t,n);case 4:return Ft(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Zi(t,null,i,n):bt(e,t,i,n),t.child;case 11:return pf(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Ta(e,t),bt(e,t,i,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:return Of(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,Li(t),a=Ot(a),i=i(a),t.flags|=1,bt(e,t,i,n),t.child;case 14:return wf(e,t,t.type,t.pendingProps,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 19:return iu(e,t,n);case 31:return bw(e,t,n);case 22:return bf(e,t,n,t.pendingProps);case 24:return Li(t),i=Ot(ft),e===null?(a=ks(),a===null&&(a=nt,r=vs(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},xs(t),hi(t,ft,a)):((e.lanes&n)!==0&&(Ts(e,t),br(t,null,null,n),vr()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),hi(t,ft,i)):(i=r.cache,hi(t,ft,i),i!==a.cache&&ws(t,[ft],n,!0))),bt(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Ye&&ko(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Ta(e,t),bt(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ti(e){e.flags|=4}function ru(e,t,n,i,a){var r;if((r=(e.mode&32)!==0)&&(r=n===null?ry(t,i):ry(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),r){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(cm())e.flags|=8192;else throw Qi=Mo,Ss}else e.flags&=-16777217}function Cf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!oy(t))if(cm())e.flags|=8192;else throw Qi=Mo,Ss}function Zo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ac():536870912,e.lanes|=t,Oa|=t)}function Ir(e,t){if(!Ye)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function xw(e,t,n){var i=t.pendingProps;switch(ms(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Wn(ft),dt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pa(t)?ti(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gs())),at(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(ti(t),r!==null?(at(t),Cf(t,r)):(at(t),ru(t,a,null,i,n))):r?r!==e.memoizedState?(ti(t),at(t),Cf(t,r)):(at(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ti(t),at(t),ru(t,a,e,i,n)),null;case 27:if(Qt(t),n=vt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ti(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return at(t),t.subtreeFlags&=-33554433,null}e=wt.current,pa(t)?sd(t):(e=Wm(a,i,n),t.stateNode=e,ti(t))}return at(t),t.subtreeFlags&=-33554433,null;case 5:if(Qt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ti(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return at(t),t.subtreeFlags&=-33554433,null}if(r=wt.current,pa(t))sd(t);else{var h=jr(vt.current);switch(r){case 1:r=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=h.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?h.createElement("select",{is:i.is}):h.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?h.createElement(a,{is:i.is}):h.createElement(a)}}r[Mt]=t,r[Zt]=i;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)r.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=r;e:switch(Ht(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ti(t)}}return at(t),t.subtreeFlags&=-33554433,ru(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ti(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=vt.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=St,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Nm(e.nodeValue,n)),e||ui(t,!0)}else e=jr(e).createTextNode(i),e[Mt]=t,t.stateNode=e}return at(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=pa(t),n!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Mt]=t}else qi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),e=!1}else n=gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(rn(t),t):(rn(t),null);if((t.flags&128)!==0)throw Error(u(558))}return at(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=pa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[Mt]=t}else qi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),a=!1}else a=gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(rn(t),t):(rn(t),null)}return rn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Zo(t,t.updateQueue),at(t),null);case 4:return dt(),e===null&&Bu(t.stateNode.containerInfo),t.flags|=67108864,at(t),null;case 10:return Wn(t.type),at(t),null;case 19:if(Ns(t),i=t.memoizedState,i===null)return at(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Ir(i,!1);else{if(ht!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ro(e),r!==null){for(t.flags|=128,Ir(i,!1),e=r.updateQueue,t.updateQueue=e,Zo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)id(n,e),n=n.sibling;return kr(t,Ct.current&1|2),Ye&&Vn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&U()>rl&&(t.flags|=128,a=!0,Ir(i,!1),t.lanes=4194304)}else{if(!a)if(e=Ro(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Zo(t,e),Ir(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!r.alternate&&!Ye)return at(t),null}else 2*U()-i.renderingStartTime>rl&&n!==536870912&&(t.flags|=128,a=!0,Ir(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}if(i.tail!==null){e=i.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=U(),e.sibling=null,r=Ct.current,r=a?r&1|2:r&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Ye?kr(t,r):(n=r,Be(Nt,t),Be(Ct,n),Yt===null&&(Yt=t)),Ye&&Vn(t,i.treeForkCount),e}return at(t),null;case 22:case 23:return rn(t),Ms(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),n=t.updateQueue,n!==null&&Zo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Je(Xi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wn(ft),at(t),null;case 25:return null;case 30:return t.flags|=33554432,at(t),null}throw Error(u(156,t.tag))}function Tw(e,t){switch(ms(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(ft),dt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qt(t),null;case 31:if(t.memoizedState!==null){if(rn(t),t.alternate===null)throw Error(u(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(rn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ns(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return dt(),null;case 10:return Wn(t.type),null;case 22:case 23:return rn(t),Ms(),e!==null&&Je(Xi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wn(ft),null;case 25:return null;default:return null}}function Rf(e,t){switch(ms(t),t.tag){case 3:Wn(ft),dt();break;case 26:case 27:case 5:Qt(t);break;case 4:dt();break;case 31:t.memoizedState!==null&&rn(t);break;case 13:rn(t);break;case 19:Ns(t);break;case 10:Wn(t.type);break;case 22:case 23:rn(t),Ms(),e!==null&&Je(Xi);break;case 24:Wn(ft)}}function Ar(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,h=n.inst;i=r(),h.destroy=i}n=n.next}while(n!==a)}}catch(y){$e(t,t.return,y)}}function wi(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var h=i.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,a=t;var x=n,C=y;try{C()}catch(j){$e(a,x,j)}}}i=i.next}while(i!==r)}}catch(j){$e(t,t.return,j)}}function Hf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{kd(t,n)}catch(i){$e(e,e.return,i)}}}function Df(e,t,n){n.props=Vi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){$e(e,t,i)}}function Hn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,r=Qn(e.memoizedProps,a);(a.ref===null||a.ref.name!==r)&&(a.ref=Um(r)),i=a.ref;break;case 7:if(e.stateNode===null){var h=new hn(e);g(e.child,!1,mv,h,void 0,void 0),e.stateNode=h}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(y){$e(e,t,y)}}function Rt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){$e(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){$e(e,t,a)}else n.current=null}function Ko(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Zm(e.stateNode,t[n])}function _f(e){for(var t=e.return;t!==null&&(lu(t)&&Zm(e.stateNode,t.stateNode),!ou(t));)t=t.return}function Mr(e){for(var t=e.return;t!==null&&(lu(t)&&yv(e.stateNode,t.stateNode),!ou(t));)t=t.return}function ou(e){return e.tag===5||e.tag===3||e.tag===27}function lu(e){return e&&e.tag===7&&e.stateNode!==null}function su(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){$e(e,e.return,a)}}function uu(e,t,n){try{var i=e.stateNode;Jw(i,e.type,n,t),i[Zt]=t}catch(a){$e(e,e.return,a)}}function Yf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ei(e.type)||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ei(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nn)),Ko(e,i),Fe=!0;else if(a!==4&&(a===27&&(Ko(e,i),i=null,Ei(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(cu(e,t,n,i),e=e.sibling;e!==null;)cu(e,t,n,i),e=e.sibling}function Vo(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Ko(e,i),Fe=!0;else if(a!==4&&(a===27&&(Ko(e,i),i=null,Ei(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Vo(e,t,n,i),e=e.sibling;e!==null;)Vo(e,t,n,i),e=e.sibling}function jf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ht(t,i,n),t[Mt]=e,t[Zt]=n}catch(r){$e(e,e.return,r)}}var Jo=!1,on=null;function zf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Jo=!0)}var Dn=null;function qf(){var e=Dn;return Dn=null,e}var Vt=0;function Ea(e,t,n,i,a){return Vt=0,Bf(e.child,t,n,i,a)}function Bf(e,t,n,i,a){for(var r=!1;e!==null;){if(e.tag===5){var h=e.stateNode;if(i!==null){var y=Ku(h);i.push(y),y.view&&(r=!0)}else r||Ku(h).view&&(r=!0);Jo=!0,qm(h,Vt===0?t:t+"_"+Vt,n),Vt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||Bf(e.child,t,n,i,a)&&(r=!0));e=e.sibling}return r}function _n(e,t){for(;e!==null;)e.tag===5?Bm(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||_n(e.child,t)),e=e.sibling}function Wo(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Wo(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(u(544));var n=t.name;t=Zn(t.default,t.share),t!=="none"&&(Ea(e,n,t,null,!1)||_n(e.child,!1))}e=e.sibling}}function du(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Qn(i,n),r=Zn(i.default,n.paired?i.share:i.enter);r!=="none"?Ea(e,a,r,null,!1)?(Wo(e),n.paired||t||Ha(e,i.onEnter)):_n(e.child,!1):Wo(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)du(e,t),e=e.sibling;else Wo(e)}function fu(e){if(on!==null&&on.size!==0){var t=on;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var r=Zn(n.default,n.share);if(r!=="none"&&(Ea(e,i,r,null,!1)?(r=e.stateNode,a.paired=r,r.paired=a,Ha(e,n.onShare)):_n(e.child,!1)),t.delete(i),t.size===0)break}}}fu(e)}e=e.sibling}}}function mu(e){if(e.tag===30){var t=e.memoizedProps,n=Qn(t,e.stateNode),i=on!==null?on.get(n):void 0,a=Zn(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(Ea(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,on.delete(n),Ha(e,t.onShare)):Ha(e,t.onExit):_n(e.child,!1)),on!==null&&fu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)mu(e),e=e.sibling;else on!==null&&fu(e)}function Uf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Qn(t,e.stateNode);t=Zn(t.default,t.update),e.flags&=-5,t!=="none"&&Ea(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Uf(e);e=e.sibling}}function yu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,_n(e.child,!1))}yu(e)}e=e.sibling}}function $o(e){if(e.tag===30)e.stateNode.paired=null,_n(e.child,!1),yu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)$o(e),e=e.sibling;else yu(e)}function Lf(e){for(e=e.child;e!==null;)e.tag===30?_n(e.child,!1):(e.subtreeFlags&33554432)!==0&&Lf(e),e=e.sibling}function gu(e,t,n,i,a,r,h){for(var y=!1;t!==null;){if(t.tag===5){var x=t.stateNode;if(r!==null&&Vt<r.length){var C=r[Vt],j=Ku(x);(C.view||j.view)&&(y=!0);var Z;if(Z=(e.flags&4)===0)if(j.clip)Z=!0;else{Z=C.rect;var M=j.rect;Z=Z.y!==M.y||Z.x!==M.x||Z.height!==M.height||Z.width!==M.width}Z&&(e.flags|=4),j.abs?j=!C.abs:(C=C.rect,j=j.rect,j=C.height!==j.height||C.width!==j.width),j&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&qm(x,Vt===0?n:n+"_"+Vt,a),y&&(e.flags&4)!==0||(Dn===null&&(Dn=[]),Dn.push(x,Vt===0?i:i+"_"+Vt,t.memoizedProps)),Vt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&h?e.flags|=t.flags&32:gu(e,t.child,n,i,a,r,h)&&(y=!0));t=t.sibling}return y}function Gf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Qn(n,i),r=Zn(n.default,n.update),h;h=e.memoizedState,e.memoizedState=null,i=e;var y=e.child;Vt=0,a=gu(i,y,a,a,r,h,!1),(e.flags&4)!==0&&a&&Ha(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Gf(e);e=e.sibling}}var xt=!1,Ve=!1,Yn=!1,pu=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,Tt=null,jn=!1,Or=!1,Po=!1,wu=!1;function Ew(e,t,n){if(e=e.containerInfo,Gu=Ga,e=Zc(e),as(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var r=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,x=-1,C=-1,j=0,Z=0,M=e,_=null;t:for(;;){for(var te;M!==i||r!==0&&M.nodeType!==3||(x=y+r),M!==h||a!==0&&M.nodeType!==3||(C=y+a),M.nodeType===3&&(y+=M.nodeValue.length),(te=M.firstChild)!==null;)_=M,M=te;for(;;){if(M===e)break t;if(_===i&&++j===r&&(x=y),_===h&&++Z===a&&(C=y),(te=M.nextSibling)!==null)break;M=_,_=M.parentNode}M=te}i=x===-1||C===-1?null:{start:x,end:C}}else i=null}i=i||{start:0,end:0}}else i=null;for(Xu={focusedElem:e,selectionRange:i},Ga=!1,n=(n&335544064)===n,Tt=t,t=n?9270:1024;Tt!==null;){if(e=Tt,n&&(i=e.deletions,i!==null))for(r=0;r<i.length;r++)n&&mu(i[r]);if(e.alternate===null&&(e.flags&2)!==0)n&&zf(e),el(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&mu(i),el(n);continue}else if(i!==null&&i.memoizedState!==null){n&&zf(e),el(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Tt=i):(n&&Uf(e),el(n))}}on=null}function el(e){for(;Tt!==null;){var t=Tt,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var r=t.stateNode;try{var h=Vi(t.type,a);n=r.getSnapshotBeforeUpdate(h,i),r.__reactInternalSnapshotBeforeUpdate=n}catch(y){$e(t,t.return,y)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Wu(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Wu(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Qn(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=Zn(a.default,a.update),a!=="none"&&Ea(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(u(163))}if(i=t.sibling,i!==null){i.return=t.return,Tt=i;break}Tt=t.return}}function Ff(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n),i&4&&Ar(5,n);break;case 1:if(zn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){$e(n,n.return,h)}else{var a=Vi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){$e(n,n.return,h)}}i&64&&Hf(n),i&512&&Hn(n,n.return);break;case 3:if(zn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{kd(e,t)}catch(h){$e(n,n.return,h)}}break;case 27:t===null&&i&4&&jf(n);case 26:case 5:zn(e,n),t===null&&i&4&&su(n),i&512&&Hn(n,n.return);break;case 12:zn(e,n);break;case 31:zn(e,n),i&4&&Vf(e,n);break;case 13:zn(e,n),i&4&&Jf(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=jw.bind(null,n),wv(e,n))));break;case 22:if(i=n.memoizedState!==null||xt,!i){var r=t!==null&&t.memoizedState!==null||Ve;t=xt,a=Ve,xt=i,(Ve=r)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Tn(e,n,i)):zn(e,n),xt=t,Ve=a}break;case 30:zn(e,n),i&512&&Hn(n,n.return);break;case 7:i&512&&Hn(n,n.return);default:zn(e,n)}}function vu(e,t){for(e=e.child;e!==null;)Qf(e,t),e=e.sibling}function Qf(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,r=e.memoizedProps.style,h=r!=null&&r.hasOwnProperty("display")?r.display:null;a.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(x){$e(e,e.return,x)}bu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Fe=!0}catch(x){$e(e,e.return,x)}break;case 18:try{var y=e.stateNode;t?zm(y,!0):zm(e.stateNode,!1)}catch(x){$e(e,e.return,x)}break;case 22:case 23:e.memoizedState===null&&vu(e,t);break;default:vu(e,t)}}function bu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,i=t;switch(n.tag){case 4:Qf(n,i);break e;case 22:n.memoizedState===null&&bu(n,i);break e;default:bu(n,i)}}e=e.sibling}}function Zf(e){var t=e.alternate;t!==null&&(e.alternate=null,Zf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ao(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,Jt=!1;function Sn(e,t,n){for(n=n.child;n!==null;)Kf(e,t,n),n=n.sibling}function Kf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(en,n)}catch{}switch(n.tag){case 26:Ve||Rt(n,t),Sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ve&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Rt(n,t),Mr(n);var i=rt,a=Jt;Ei(n.type)&&(rt=n.stateNode,Jt=!1),Sn(e,t,n),$m(n.stateNode,n.type,n.memoizedProps),rt=i,Jt=a;break;case 5:Ve||Rt(n,t),Mr(n);case 6:if(n.tag===6&&Mr(n),i=rt,a=Jt,rt=null,Sn(e,t,n),rt=i,Jt=a,rt!==null)if(Jt)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(n.stateNode),Fe=!0}catch(r){$e(n,t,r)}else try{rt.removeChild(n.stateNode),Fe=!0}catch(r){$e(n,t,r)}break;case 18:rt!==null&&(Jt?(e=rt,jm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Xa(e)):jm(rt,n.stateNode));break;case 4:i=rt,a=Jt,rt=n.stateNode.containerInfo,Jt=!0,Sn(e,t,n),rt=i,Jt=a;break;case 0:case 11:case 14:case 15:wi(2,n,t),Ve||wi(4,n,t),Sn(e,t,n);break;case 1:Ve||(Rt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Df(n,t,i)),Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Sn(e,t,n),Ve=i;break;case 30:Rt(n,t),Sn(e,t,n);break;case 7:Ve||Rt(n,t),Sn(e,t,n);break;default:Sn(e,t,n)}}function Vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xa(e)}catch(n){$e(t,t.return,n)}}}function Jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xa(e)}catch(n){$e(t,t.return,n)}}function Iw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xf),t;default:throw Error(u(435,e.tag))}}function tl(e,t){var n=Iw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=zw.bind(null,e,i);i.then(a,a)}})}function Ut(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var r=i[a],h=e,y=t,x=y;e:for(;x!==null;){switch(x.tag){case 27:if(Ei(x.type)){rt=x.stateNode,Jt=!1;break e}break;case 5:rt=x.stateNode,Jt=!1;break e;case 3:case 4:rt=x.stateNode.containerInfo,Jt=!0;break e}x=x.return}if(rt===null)throw Error(u(160));Kf(h,y,r),rt=null,Jt=!1,h=r.alternate,h!==null&&(h.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wf(t,e,n),t=t.sibling}var xn=null;function Wf(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var r=0;r<i.length;r++){var h=i[r];h.ref.impl=h.nextImpl}Ut(t,e,n),Lt(e),a&4&&(wi(3,e,e.return),Ar(3,e),wi(5,e,e.return));break;case 1:Ut(t,e,n),Lt(e),a&512&&(Ve||i===null||Rt(i,i.return)),a&64&&xt&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(r=xn,Ut(t,e,n),Lt(e),a&512&&(Ve||i===null||Rt(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(xt)e.stateNode=Dm(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,a=r.ownerDocument||r;t:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[tr]||i[Mt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),Ht(i,t,n),i[Mt]=e,kt(i),t=i;break e;case"link":if(r=ay("link","href",a).get(t+(n.href||""))){for(h=0;h<r.length;h++)if(i=r[h],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(h,1);break t}}i=a.createElement(t),Ht(i,t,n),a.head.appendChild(i);break;case"meta":if(r=ay("meta","content",a).get(t+(n.content||""))){for(h=0;h<r.length;h++)if(i=r[h],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(h,1);break t}}i=a.createElement(t),Ht(i,t,n),a.head.appendChild(i);break;default:throw Error(u(468,t))}i[Mt]=e,kt(i),t=i}e.stateNode=t}else xt||ah(r,e.type,e.stateNode);else e.stateNode=iy(r,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||Ve||t.parentNode.removeChild(t)):a.count--,n===null?xt||ah(r,e.type,e.stateNode):iy(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&uu(e,e.memoizedProps,i.memoizedProps);break;case 27:Ut(t,e,n),Lt(e),a&512&&(Ve||i===null||Rt(i,i.return)),i!==null&&a&4&&uu(e,e.memoizedProps,i.memoizedProps);break;case 5:if(r=Yn,Yn=!1,Ut(t,e,n),Yn=r,Lt(e),a&512&&(Ve||i===null||Rt(i,i.return)),e.flags&32){t=e.stateNode;try{la(t,""),Fe=!0}catch(j){$e(e,e.return,j)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,uu(e,t,i!==null?i.memoizedProps:t)),a&1024&&(pu=!0);break;case 6:if(Ut(t,e,n),Lt(e),a&4){if(e.stateNode===null)throw Error(u(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Fe=!0}catch(j){$e(e,e.return,j)}}break;case 3:if(Fe=!1,gl=null,r=xn,xn=zr(t.containerInfo),Ut(t,e,n),xn=r,Lt(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Xa(t.containerInfo)}catch(j){$e(e,e.return,j)}pu&&(pu=!1,$f(e)),Fe=!1;break;case 4:a=Yn,Yn=xt,i=pc(),r=xn,xn=zr(e.stateNode.containerInfo),Ut(t,e,n),Lt(e),xn=r,Fe&&Or&&(Po=!0),Fe=i,Yn=a;break;case 12:Ut(t,e,n),Lt(e);break;case 31:Ut(t,e,n),Lt(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,tl(e,t)));break;case 13:Ut(t,e,n),Lt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(al=U()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,tl(e,t)));break;case 22:r=e.memoizedState!==null,h=i!==null&&i.memoizedState!==null;var y=xt,x=Ve,C=Yn;xt=y||r,Yn=C||r,Ve=x||h,Ut(t,e,n),Ve=x,Yn=C,xt=y,Lt(e),a&8192&&(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,!r||i===null||h||xt||Ve||(t=h||Ve,n=xt,i=Ve,xt=r||xt,Ve=t,vi(e,2),xt=n,Ve=i),!r&&Yn||vu(e,r)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,tl(e,n))));break;case 19:Ut(t,e,n),Lt(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,tl(e,t)));break;case 30:a&512&&(Ve||i===null||Rt(i,i.return)),a=pc(),r=Or,h=(n&335544064)===n,y=e.memoizedProps,Or=h&&Zn(y.default,y.update)!=="none",Ut(t,e,n),Lt(e),h&&i!==null&&Fe&&(e.flags|=4),Or=r,Fe=a;break;case 21:break;case 7:a&512&&(Ve||i===null||Rt(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Ut(t,e,n),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Yf(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(lu(a)){var r=a.stateNode;i===null?i=[r]:i.push(r)}if(ou(a))break;a=a.return}var h=i;if(n==null)throw Error(u(160));switch(n.tag){case 27:var y=n.stateNode,x=hu(e);Vo(e,x,y,h);break;case 5:var C=n.stateNode;n.flags&32&&(la(C,""),n.flags&=-33);var j=hu(e);Vo(e,j,C,h);break;case 3:case 4:var Z=n.stateNode.containerInfo,M=hu(e);cu(e,M,Z,h);break;default:throw Error(u(161))}}catch(_){$e(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$f(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Ga=!0,t.reset(),Ga=!1),e=e.sibling}}function Ia(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling;else Gf(t)}function Pf(e,t){var n=e.alternate;if(n===null)du(e,!1);else switch(e.tag){case 3:if(wu=jn=!1,qf(),Ia(t,e),!jn&&!Po){if(e=Dn,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];Bm(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wu=!0}Dn=null;break;case 5:Ia(t,e);break;case 4:i=jn,jn=!1,Ia(t,e),jn&&(Po=!0),jn=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?du(e,!1):Ia(t,e));break;case 30:i=jn,a=qf(),jn=!1,Ia(t,e),jn&&(e.flags|=4);var r=e.memoizedProps,h=e.stateNode;t=Qn(r,h),h=Qn(n.memoizedProps,h);var y=Zn(r.default,r.update);y==="none"?t=!1:(r=n.memoizedState,n.memoizedState=null,n=e.child,Vt=0,t=gu(e,n,t,h,y,r,!0),Vt!==(r===null?0:r.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Ha(e,e.memoizedProps.onUpdate),Dn=a):a!==null&&(a.push.apply(a,Dn),Dn=a),jn=(e.flags&32)!==0?!0:i;break;default:Ia(t,e)}}function zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ff(e,t.alternate,t),t=t.sibling}function vi(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:wi(4,n,n.return),vi(n,i);break;case 1:Rt(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Df(n,n.return,a),vi(n,i);break;case 27:(i&2)!==0&&$m(n.stateNode,n.type,n.memoizedProps);case 5:Rt(n,n.return),n.tag!==5&&n.tag!==27||Mr(n),vi(n,i);break;case 6:Mr(n);break;case 26:Rt(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Ve||a.parentNode.removeChild(a),vi(n,i);break;case 22:n.memoizedState===null&&vi(n,i);break;case 30:Rt(n,n.return),vi(n,i);break;case 7:Rt(n,n.return);default:vi(n,i)}e=e.sibling}}function Tn(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,h=r.flags,y=(n&1)!==0;switch(r.tag){case 0:case 11:case 15:Tn(a,r,n),Ar(4,r);break;case 1:if(Tn(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(j){$e(i,i.return,j)}if(i=r,a=i.updateQueue,a!==null){var x=i.stateNode;try{var C=a.shared.hiddenCallbacks;if(C!==null)for(a.shared.hiddenCallbacks=null,a=0;a<C.length;a++)bd(C[a],x)}catch(j){$e(i,i.return,j)}}y&&h&64&&Hf(r),Hn(r,r.return);break;case 27:(n&2)!==0&&jf(r);case 5:r.tag!==5&&r.tag!==27||_f(r),Tn(a,r,n),y&&i===null&&h&4&&su(r),Hn(r,r.return);break;case 6:_f(r);break;case 26:x=r.stateNode,r.memoizedState!==null||x===null||xt||ah(zr(x.ownerDocument),r.type,x),Tn(a,r,n),y&&i===null&&h&4&&su(r),Hn(r,r.return);break;case 12:Tn(a,r,n);break;case 31:Tn(a,r,n),y&&h&4&&Vf(a,r);break;case 13:Tn(a,r,n),y&&h&4&&Jf(a,r);break;case 22:r.memoizedState===null&&Tn(a,r,n),Hn(r,r.return);break;case 30:Tn(a,r,n),Hn(r,r.return);break;case 7:Hn(r,r.return);default:Tn(a,r,n)}t=t.sibling}}function ku(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&mr(n))}function Su(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mr(e))}function pn(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)em(e,t,n,i),t=t.sibling;else a&&Lf(t)}function em(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&$o(t);var r=t.flags;switch(t.tag){case 0:case 11:case 15:pn(e,t,n,i),r&2048&&Ar(9,t);break;case 1:pn(e,t,n,i);break;case 3:pn(e,t,n,i),a&&wu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),r&2048&&(r=null,t.alternate!==null&&(r=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==r&&(t.refCount++,r!=null&&mr(r)));break;case 12:if(r&2048){pn(e,t,n,i),r=t.stateNode;try{var h=t.memoizedProps,y=h.id,x=h.onPostCommit;typeof x=="function"&&x(y,t.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(C){$e(t,t.return,C)}}else pn(e,t,n,i);break;case 31:pn(e,t,n,i);break;case 13:pn(e,t,n,i);break;case 23:break;case 22:h=t.stateNode,y=t.alternate,t.memoizedState!==null?(a&&y!==null&&y.memoizedState===null&&$o(y),h._visibility&2?pn(e,t,n,i):Nr(e,t)):(a&&y!==null&&y.memoizedState!==null&&$o(t),h._visibility&2?pn(e,t,n,i):(h._visibility|=2,Aa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),r&2048&&ku(y,t);break;case 24:pn(e,t,n,i),r&2048&&Su(t.alternate,t);break;case 30:a&&(r=t.alternate,r!==null&&(_n(r.child,!0),_n(t.child,!0))),pn(e,t,n,i);break;default:pn(e,t,n,i)}}function Aa(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,h=t,y=n,x=i,C=h.flags;switch(h.tag){case 0:case 11:case 15:Aa(r,h,y,x,a),Ar(8,h);break;case 23:break;case 22:var j=h.stateNode;h.memoizedState!==null?j._visibility&2?Aa(r,h,y,x,a):Nr(r,h):(j._visibility|=2,Aa(r,h,y,x,a)),a&&C&2048&&ku(h.alternate,h);break;case 24:Aa(r,h,y,x,a),a&&C&2048&&Su(h.alternate,h);break;default:Aa(r,h,y,x,a)}t=t.sibling}}function Nr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Nr(n,i),a&2048&&ku(i.alternate,i);break;case 24:Nr(n,i),a&2048&&Su(i.alternate,i);break;default:Nr(n,i)}t=t.sibling}}var Ji=8192;function Wi(e,t,n){if(e.subtreeFlags&Ji)for(e=e.child;e!==null;)tm(e,t,n),e=e.sibling}function tm(e,t,n){switch(e.tag){case 26:Wi(e,t,n),e.flags&Ji&&(e.memoizedState!==null?Rv(n,xn,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&sy(n,e)));break;case 5:Wi(e,t,n),e.flags&Ji&&(e=e.stateNode,(t&335544128)===t&&sy(n,e));break;case 3:case 4:var i=xn;xn=zr(e.stateNode.containerInfo),Wi(e,t,n),xn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ji,Ji=16777216,Wi(e,t,n),Ji=i):Wi(e,t,n));break;case 30:if((e.flags&Ji)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,on===null&&(on=new Map),on.set(i,a)}Wi(e,t,n);break;default:Wi(e,t,n)}}function nm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Tt=i,am(i,e)}nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)im(e),e=e.sibling}function im(e){switch(e.tag){case 0:case 11:case 15:Cr(e),e.flags&2048&&wi(9,e,e.return);break;case 3:Cr(e);break;case 12:Cr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,nl(e)):Cr(e);break;default:Cr(e)}}function nl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Tt=i,am(i,e)}nm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wi(8,t,t.return),nl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,nl(t));break;default:nl(t)}e=e.sibling}}function am(e,t){for(;Tt!==null;){var n=Tt;switch(n.tag){case 0:case 11:case 15:wi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:mr(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Tt=i;else e:for(n=e;Tt!==null;){i=Tt;var a=i.sibling,r=i.return;if(Zf(i),i===n){Tt=null;break e}if(a!==null){a.return=r,Tt=a;break e}Tt=r}}}var Aw={getCacheForType:function(e){var t=Ot(ft),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ot(ft).controller.signal}},Mw=typeof WeakMap=="function"?WeakMap:Map,Qe=0,nt=null,je=null,Ue=0,We=0,ln=null,bi=!1,Ma=!1,xu=!1,ni=0,ht=0,ki=0,$i=0,il=0,sn=0,Oa=0,Rr=null,Wt=null,Tu=!1,al=0,rm=0,rl=1/0,ol=null,Si=null,lt=0,En=null,Pi=null,qn=0,Eu=0,Iu=null,om=null,Na=null,Ca=null,Ra=null,Hr=0,ll=null;function un(){return(Qe&2)!==0&&Ue!==0?Ue&-Ue:oe.T!==null?Yu():sc()}function lm(){if(sn===0)if((Ue&536870912)===0||Ye){var e=eo;eo<<=1,(eo&3932160)===0&&(eo=262144),sn=e}else sn=536870912;return e=Nt.current,e!==null&&(e.flags|=32),sn}function Ha(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=Um(Qn(e.memoizedProps,n))),Ca===null&&(Ca=[]),Ca.push(t.bind(null,i))}}function $t(e,t,n){(e===nt&&(We===2||We===9)||e.cancelPendingCommit!==null)&&(Da(e,0),xi(e,Ue,sn,!1)),er(e,n),((Qe&2)===0||e!==nt)&&(e===nt&&((Qe&2)===0&&($i|=n),ht===4&&xi(e,Ue,sn,!1)),Bn(e))}function sm(e,t,n){if((Qe&6)!==0)throw Error(u(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Pa(e,t),a=i?Cw(e,t):Mu(e,t,!0),r=i;do{if(a===0){Ma&&!i&&xi(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Ow(n)){a=Mu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;a=Rr;var x=y.current.memoizedState.isDehydrated;if(x&&(Da(y,h).flags|=256),h=Mu(y,h,!1),h!==2&&h!==6){if(xu&&!x){y.errorRecoveryDisabledLanes|=r,$i|=r,a=4;break e}r=Wt,Wt=a,r!==null&&(Wt===null?Wt=r:Wt.push.apply(Wt,r))}a=h}if(r=!1,a!==2)continue}}if(a===1){Da(e,0),xi(e,t,0,!0);break}e:{switch(i=e,r=a,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:xi(i,t,sn,!bi);break e;case 2:Wt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(a=al+300-U(),10<a)){if(xi(i,t,sn,!bi),no(i,0,!0)!==0)break e;qn=t,i.timeoutHandle=Zu(um.bind(null,i,n,Wt,ol,Tu,t,sn,$i,Oa,bi,r,"Throttled",-0,0),a);break e}um(i,n,Wt,ol,Tu,t,sn,$i,Oa,bi,r,null,-0,0)}}break}while(!0);Bn(e)}function um(e,t,n,i,a,r,h,y,x,C,j,Z,M,_){e.timeoutHandle=-1;var te=t.subtreeFlags,fe=(r&335544064)===r;if(Z=null,(fe||te&8192||(te&16785408)===16785408)&&(Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},on=null,tm(t,r,Z),fe&&(te=Z,fe=e.containerInfo,fe=(fe.nodeType===9?fe:fe.ownerDocument).__reactViewTransition,fe!=null&&(te.count++,te.waitingForViewTransition=!0,te=Ur.bind(te),fe.finished.then(te,te))),te=(r&62914560)===r?al-U():(r&4194048)===r?rm-U():0,te=Hv(Z,te),te!==null)){qn=r,e.cancelPendingCommit=te(pm.bind(null,e,t,r,n,i,a,h,y,x,C,j,Z,null,M,_)),xi(e,r,h,!C);return}pm(e,t,r,n,i,a,h,y,x,C,j,Z)}function Ow(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!an(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xi(e,t,n,i){t=ic(e,t),t&=~il,t&=~$i,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-tn(a),h=1<<r;i[r]=-1,a&=~h}n!==0&&rc(e,n,t)}function sl(){return(Qe&6)===0?(Dr(0),!1):!0}function Au(){if(je!==null){if(We===0)var e=je.return;else e=je,Jn=Bi=null,_s(e),ba=null,pr=0,e=je;for(;e!==null;)Rf(e.alternate,e),e=e.return;je=null}}function Da(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Pw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qn=0,Au(),nt=e,je=n=Kn(e.current,null),Ue=t,We=0,ln=null,bi=!1,Ma=Pa(e,t),xu=!1,Oa=sn=il=$i=ki=ht=0,Wt=Rr=null,Tu=!1,ni=ic(e,t),go(),n}function hm(e,t){De=null,oe.H=Uo,t===va||t===Ao?(t=gd(),We=3):t===Ss?(t=gd(),We=4):We=t===Js?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ln=t,je===null&&(ht=1,Lo(e,fn(t,e.current)))}function cm(){var e=Nt.current;return e===null?!0:(Ue&4194048)===Ue?Yt===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===Yt:!1}function dm(){var e=oe.H;return oe.H=Uo,e===null?Uo:e}function fm(){var e=oe.A;return oe.A=Aw,e}function ul(){ht=4,bi||(Ue&4194048)!==Ue&&Nt.current!==null||(Ma=!0),(ki&134217727)===0&&($i&134217727)===0||nt===null||xi(nt,Ue,sn,!1)}function Mu(e,t,n){var i=Qe;Qe|=2;var a=dm(),r=fm();(nt!==e||Ue!==t)&&(ol=null,Da(e,t)),t=!1;var h=ht;e:do try{if(We!==0&&je!==null){var y=je,x=ln;switch(We){case 8:Au(),h=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var C=We;if(We=0,ln=null,_a(e,y,x,C),n&&Ma){h=0;break e}break;default:C=We,We=0,ln=null,_a(e,y,x,C)}}Nw(),h=ht;break}catch(j){hm(e,j)}while(!0);return t&&e.shellSuspendCounter++,Jn=Bi=null,Qe=i,oe.H=a,oe.A=r,je===null&&(nt=null,Ue=0,go()),h}function Nw(){for(;je!==null;)mm(je)}function Cw(e,t){var n=Qe;Qe|=2;var i=dm(),a=fm();nt!==e||Ue!==t?(ol=null,rl=U()+500,Da(e,t)):Ma=Pa(e,t);e:do try{if(We!==0&&je!==null){t=je;var r=ln;t:switch(We){case 1:We=0,ln=null,_a(e,t,r,1);break;case 2:case 9:if(md(r)){We=0,ln=null,ym(t);break}t=function(){We!==2&&We!==9||nt!==e||(We=7),Bn(e)},r.then(t,t);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:md(r)?(We=0,ln=null,ym(t)):(We=0,ln=null,_a(e,t,r,7));break;case 5:var h=null;switch(je.tag){case 26:h=je.memoizedState;case 5:case 27:var y=je;if(h?oy(h):y.stateNode.complete){We=0,ln=null;var x=y.sibling;if(x!==null)je=x;else{var C=y.return;C!==null?(je=C,hl(C)):je=null}break t}}We=0,ln=null,_a(e,t,r,5);break;case 6:We=0,ln=null,_a(e,t,r,6);break;case 8:Au(),ht=6;break e;default:throw Error(u(462))}}Rw();break}catch(j){hm(e,j)}while(!0);return Jn=Bi=null,oe.H=i,oe.A=a,Qe=n,je!==null?0:(nt=null,Ue=0,go(),ht)}function Rw(){for(;je!==null&&!q();)mm(je)}function mm(e){var t=Nf(e.alternate,e,ni);e.memoizedProps=e.pendingProps,t===null?hl(e):je=t}function ym(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xf(n,t,t.pendingProps,t.type,void 0,Ue);break;case 11:t=xf(n,t,t.pendingProps,t.type.render,t.ref,Ue);break;case 5:_s(t);var i=t;i===St&&(Ye?(So(i),i.tag===5&&i.stateNode!=null&&(it=i.stateNode)):(So(i),Ye=!0));default:Rf(n,t),t=je=id(t,ni),t=Nf(n,t,ni)}e.memoizedProps=e.pendingProps,t===null?hl(e):je=t}function _a(e,t,n,i){Jn=Bi=null,_s(t),ba=null,pr=0;var a=t.return;try{if(vw(e,a,t,n,Ue)){ht=1,Lo(e,fn(n,e.current)),je=null;return}}catch(r){if(a!==null)throw je=a,r;ht=1,Lo(e,fn(n,e.current)),je=null;return}t.flags&32768?(Ye||i===1?e=!0:Ma||(Ue&536870912)!==0?e=!1:(bi=e=!0,(i===2||i===9||i===3||i===6)&&(i=Nt.current,i!==null&&i.tag===13&&(i.flags|=16384))),gm(t,e)):hl(t)}function hl(e){var t=e;do{if((t.flags&32768)!==0){gm(t,bi);return}e=t.return;var n=xw(t.alternate,t,ni);if(n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);ht===0&&(ht=5)}function gm(e,t){do{var n=Tw(e.alternate,e);if(n!==null){n.flags&=32767,je=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){je=e;return}je=e=n}while(e!==null);ht=6,je=null}function pm(e,t,n,i,a,r,h,y,x,C,j,Z){e.cancelPendingCommit=null;do cl();while(lt!==0);if((Qe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));e===nt&&(je=nt=null,Ue=0),Pi=t,En=e,qn=n,Iu=a,om=i,Hw(e,t,n,h,y,x,Z)}}function Hw(e,t,n,i,a,r,h){var y=t.lanes|t.childLanes;if(Eu=y,y|=us,rp(e,n,y,i,a,r),Ca=null,(n&335544064)===n?(Ra=lw(e),i=10262):(Ra=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,qw(de,function(){return Ru(),null})):(e.callbackNode=null,e.callbackPriority=0),Jo=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=oe.T,oe.T=null,a=ge.p,ge.p=2,r=Qe,Qe|=4;try{Ew(e,t,n)}finally{Qe=r,ge.p=a,oe.T=i}}lt=1,Jo?Na=rv(h,e.containerInfo,Ra,Ou,Nu,_w,Cu,Ru,Dw):(Ou(),Nu(),Cu())}function Dw(e){if(lt!==0){var t=En.onRecoverableError;t(e,{componentStack:null})}}function _w(){lt===3&&(lt=0,Pf(Pi,En),lt=4)}function Ou(){if(lt===1){lt=0;var e=En,t=Pi,n=qn,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=oe.T,oe.T=null;var a=ge.p;ge.p=2;var r=Qe;Qe|=4;try{Or=Po=!1,Wf(t,e,n),n=Xu;var h=Zc(e.containerInfo),y=n.focusedElem,x=n.selectionRange;if(h!==y&&y&&y.ownerDocument&&Qc(y.ownerDocument.documentElement,y)){if(x!==null&&as(y)){var C=x.start,j=x.end;if(j===void 0&&(j=C),"selectionStart"in y)y.selectionStart=C,y.selectionEnd=Math.min(j,y.value.length);else{var Z=y.ownerDocument||document,M=Z&&Z.defaultView||window;if(M.getSelection){var _=M.getSelection(),te=y.textContent.length,fe=Math.min(x.start,te),_e=x.end===void 0?fe:Math.min(x.end,te);!_.extend&&fe>_e&&(h=_e,_e=fe,fe=h);var N=Fc(y,fe),E=Fc(y,_e);if(N&&E&&(_.rangeCount!==1||_.anchorNode!==N.node||_.anchorOffset!==N.offset||_.focusNode!==E.node||_.focusOffset!==E.offset)){var H=Z.createRange();H.setStart(N.node,N.offset),_.removeAllRanges(),fe>_e?(_.addRange(H),_.extend(E.node,E.offset)):(H.setEnd(E.node,E.offset),_.addRange(H))}}}}for(Z=[],_=y;_=_.parentNode;)_.nodeType===1&&Z.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Z.length;y++){var Q=Z[y];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Ga=!!Gu,Xu=Gu=null}finally{Qe=r,ge.p=a,oe.T=i}}e.current=t,lt=2}}function Nu(){if(lt===2){lt=0;var e=En,t=Pi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=oe.T,oe.T=null;var i=ge.p;ge.p=2;var a=Qe;Qe|=4;try{Ff(e,t.alternate,t)}finally{Qe=a,ge.p=i,oe.T=n}}lt=3}}function Cu(){if(lt===4||lt===3){lt=0;var e=Na;Na=null,L();var t=En,n=Pi,i=qn,a=om,r=(i&335544064)===i?10262:10256;if((n.subtreeFlags&r)!==0||(n.flags&r)!==0?lt=5:(lt=0,Pi=En=null,wm(t,t.pendingLanes)),r=t.pendingLanes,r===0&&(Si=null),Bl(i),n=n.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(en,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=oe.T,r=ge.p,ge.p=2,oe.T=null;try{for(var h=t.onRecoverableError,y=0;y<a.length;y++){var x=a[y];h(x.value,{componentStack:x.stack})}}finally{oe.T=n,ge.p=r}}if(a=Ca,h=Ra,Ra=null,a!==null&&(Ca=null,h===null&&(h=[]),e!==null))for(x=0;x<a.length;x++)n=(0,a[x])(h),n!==void 0&&e.finished.finally(n);(qn&3)!==0&&cl(),Bn(t),r=t.pendingLanes,(i&261930)!==0&&(r&42)!==0?t===ll?Hr++:(Hr=0,ll=t):(Hr=0,ll=null),Dr(0)}}function wm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mr(t)))}function cl(){return Na!==null&&(Na.skipTransition(),Na=null),Ou(),Nu(),Cu(),Ru()}function Ru(){if(lt!==5)return!1;var e=En,t=Eu;Eu=0;var n=Bl(qn),i=oe.T,a=ge.p;try{ge.p=32>n?32:n,oe.T=null,n=Iu,Iu=null;var r=En,h=qn;if(lt=0,Pi=En=null,qn=0,(Qe&6)!==0)throw Error(u(331));var y=Qe;if(Qe|=4,im(r.current),em(r,r.current,h,n),Qe=y,Dr(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(en,r)}catch{}return!0}finally{ge.p=a,oe.T=i,wm(e,t)}}function vm(e,t,n){t=fn(n,t),t=Vs(e.stateNode,t,2),e=mi(e,t,2),e!==null&&(er(e,2),Bn(e))}function $e(e,t,n){if(e.tag===3)vm(e,e,n);else for(;t!==null;){if(t.tag===3){vm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Si===null||!Si.has(i))){e=fn(n,e),n=yf(2),i=mi(t,n,2),i!==null&&(gf(n,i,t,e),er(i,2),Bn(i));break}}t=t.return}}function Hu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Mw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(xu=!0,a.add(n),e=Yw.bind(null,e,t,n),t.then(e,e))}function Yw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,nt===e&&(Ue&n)===n&&((ht===4||ht===3&&(Ue&62914560)===Ue&&300>U()-al)&&(Qe&2)===0?Da(e,0):il|=n,Oa===Ue&&(Oa=0)),Bn(e)}function bm(e,t){t===0&&(t=ac()),e=ji(e,t),e!==null&&(er(e,t),Bn(e))}function jw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function zw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),bm(e,n)}function qw(e,t){return D(e,t)}var Ya=null,ja=null,Du=!1,dl=!1,_u=!1,Ti=0;function Bn(e){e!==ja&&e.next===null&&(ja===null?Ya=ja=e:ja=ja.next=e),dl=!0,Du||(Du=!0,Uw())}function Dr(e,t){if(!_u&&dl){_u=!0;do for(var n=!1,i=Ya;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var h=i.suspendedLanes,y=i.pingedLanes;r=(1<<31-tn(42|e)+1)-1,r&=a&~(h&~y),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Tm(i,r))}else r=Ue,r=no(i,i===nt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Pa(i,r)||(n=!0,Tm(i,r));i=i.next}while(n);_u=!1}}function Bw(){km()}function km(){dl=Du=!1;var e=0;Ti!==0&&$w()&&(e=Ti);for(var t=U(),n=null,i=Ya;i!==null;){var a=i.next,r=Sm(i,t);r===0?(i.next=null,n===null?Ya=a:n.next=a,a===null&&(ja=n)):(n=i,(e!==0||(r&3)!==0)&&(dl=!0)),i=a}lt!==0&&lt!==5||Dr(e),Ti!==0&&(Ti=0)}function Sm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var h=31-tn(r),y=1<<h,x=a[h];x===-1?((y&n)===0||(y&i)!==0)&&(a[h]=ap(y,t)):x<=t&&(e.expiredLanes|=y),r&=~y}if(t=nt,n=Ue,n=no(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(We===2||We===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&T(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Pa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&T(i),Bl(n)){case 2:case 8:n=ne;break;case 32:n=de;break;case 268435456:n=Ee;break;default:n=de}return i=xm.bind(null,e),n=D(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&T(i),e.callbackPriority=2,e.callbackNode=null,2}function xm(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(cl()&&e.callbackNode!==n)return null;var i=Ue;return i=no(e,e===nt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(sm(e,i,t),Sm(e,U()),e.callbackNode!=null&&e.callbackNode===n?xm.bind(null,e):null)}function Tm(e,t){if(cl())return null;sm(e,t,!0)}function Uw(){ev(function(){(Qe&6)!==0?D(V,Bw):km()})}function Yu(){if(Ti===0){var e=Gi;e===0&&(e=Pr,Pr<<=1,(Pr&261888)===0&&(Pr=256)),Ti=e}return Ti}function Em(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:lo(e)}function Lw(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Em((a[Zt]||null).action),h=i.submitter;h&&(t=(t=h[Zt]||null)?Em(t.formAction):h.getAttribute("formAction"),t!==null&&(r=t,h=null));var y=new co("action","action",null,i,a);e.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ti!==0){var x=new FormData(a,h);Xs(n,{pending:!0,data:x,method:a.method,action:r},null,x)}}else typeof r=="function"&&(y.preventDefault(),x=new FormData(a,h),Xs(n,{pending:!0,data:x,method:a.method,action:r},r,x))},currentTarget:a}]})}}for(var ju=0;ju<ss.length;ju++){var zu=ss[ju],Gw=zu.toLowerCase(),Xw=zu[0].toUpperCase()+zu.slice(1);kn(Gw,"on"+Xw)}kn(Jc,"onAnimationEnd"),kn(Wc,"onAnimationIteration"),kn($c,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(Pp,"onTransitionRun"),kn(ew,"onTransitionStart"),kn(tw,"onTransitionCancel"),kn(Pc,"onTransitionEnd"),ra("onMouseEnter",["mouseout","mouseover"]),ra("onMouseLeave",["mouseout","mouseover"]),ra("onPointerEnter",["pointerout","pointerover"]),ra("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_r));function Im(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var h=i.length-1;0<=h;h--){var y=i[h],x=y.instance,C=y.currentTarget;if(y=y.listener,x!==r&&a.isPropagationStopped())break e;r=y,a.currentTarget=C;try{r(a)}catch(j){yo(j)}a.currentTarget=null,r=x}else for(h=0;h<i.length;h++){if(y=i[h],x=y.instance,C=y.currentTarget,y=y.listener,x!==r&&a.isPropagationStopped())break e;r=y,a.currentTarget=C;try{r(a)}catch(j){yo(j)}a.currentTarget=null,r=x}}}}function ze(e,t){var n=t[hc];n===void 0&&(n=t[hc]=new Set);var i=e+"__bubble";n.has(i)||(Am(t,e,2,!1),n.add(i))}function qu(e,t,n){var i=0;t&&(i|=4),Am(n,e,i,t)}var fl="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[fl]){e[fl]=!0,fc.forEach(function(n){n!=="selectionchange"&&(Fw.has(n)||qu(n,!1,e),qu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fl]||(t[fl]=!0,qu("selectionchange",!1,t))}}function Am(e,t,n,i){switch(gy(t)){case 2:var a=jv;break;case 8:a=zv;break;default:a=oh}n=a.bind(null,t,n,e),a=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Uu(e,t,n,i,a){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var y=i.stateNode.containerInfo;if(y===a)break;if(h===4)for(h=i.return;h!==null;){var x=h.tag;if((x===3||x===4)&&h.stateNode.containerInfo===a)return;h=h.return}for(;y!==null;){if(h=Hi(y),h===null)return;if(x=h.tag,x===5||x===6||x===26||x===27){i=r=h;continue e}y=y.parentNode}}i=i.return}Ic(function(){var C=r,j=Ql(n),Z=[];e:{var M=ed.get(e);if(M!==void 0){var _=co,te=e;switch(e){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":_=Op;break;case"focusin":te="focus",_=$l;break;case"focusout":te="blur",_=$l;break;case"beforeblur":case"afterblur":_=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Dp;break;case Jc:case Wc:case $c:_=bp;break;case Pc:_=Yp;break;case"scroll":case"scrollend":_=yp;break;case"wheel":_=zp;break;case"copy":case"cut":case"paste":_=Sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Cc;break;case"submit":_=Rp;break;case"toggle":case"beforetoggle":_=Bp}var fe=(t&4)!==0,_e=!fe&&(e==="scroll"||e==="scrollend"),N=fe?M!==null?M+"Capture":null:M;fe=[];for(var E=C,H;E!==null;){var Q=E;if(H=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||H===null||N===null||(Q=ir(E,N),Q!=null&&fe.push(Yr(E,Q,H))),_e)break;E=E.return}0<fe.length&&(M=new _(M,te,null,n,j),Z.push({event:M,listeners:fe}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",_&&n!==Fl&&(te=n.relatedTarget||n.fromElement)&&(Hi(te)||te[na]))break e;(M||_)&&(te=j.window===j?j:(_=j.ownerDocument)?_.defaultView||_.parentWindow:window,M?(_=n.relatedTarget||n.toElement,M=C,_=_?Hi(_):null,_!==null&&(_e=m(_),fe=_.tag,_!==_e||fe!==5&&fe!==27&&fe!==6)&&(_=null)):(M=null,_=C),M!==_&&(fe=Oc,Q="onMouseLeave",N="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Cc,Q="onPointerLeave",N="onPointerEnter",E="pointer"),_e=M==null?te:nr(M),H=_==null?te:nr(_),te=new fe(Q,E+"leave",M,n,j),te.target=_e,te.relatedTarget=H,Q=null,Hi(j)===C&&(fe=new fe(N,E+"enter",_,n,j),fe.target=H,fe.relatedTarget=_e,Q=fe),_e=Q,fe=M&&_?Oe(M,_,Qw):null,M!==null&&Mm(Z,te,M,fe,!1),_!==null&&_e!==null&&Mm(Z,_e,_,fe,!0)))}e:{if(M=C?nr(C):window,_=M.nodeName&&M.nodeName.toLowerCase(),_==="select"||_==="input"&&M.type==="file")var ue=qc;else if(jc(M))if(Bc)ue=Jp;else{ue=Kp;var Le=Zp}else _=M.nodeName,!_||_.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?C&&Xl(C.elementType)&&(ue=qc):ue=Vp;if(ue&&(ue=ue(e,C))){zc(Z,ue,n,j);break e}Le&&Le(e,M,C)}switch(Le=C?nr(C):window,e){case"focusin":(jc(Le)||Le.contentEditable==="true")&&(ca=Le,rs=C,cr=null);break;case"focusout":cr=rs=ca=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Kc(Z,n,j);break;case"selectionchange":if($p)break;case"keydown":case"keyup":Kc(Z,n,j)}var pe;if(es)e:{switch(e){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else ha?_c(e,n)&&(Ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ie="onCompositionStart");Ie&&(Rc&&n.locale!=="ko"&&(ha||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&ha&&(pe=Ac()):(ri=j,Vl="value"in ri?ri.value:ri.textContent,ha=!0)),Le=ml(C,Ie),0<Le.length&&(Ie=new Nc(Ie,e,null,n,j),Z.push({event:Ie,listeners:Le}),pe?Ie.data=pe:(pe=Yc(n),pe!==null&&(Ie.data=pe)))),(pe=Lp?Gp(e,n):Xp(e,n))&&(Ie=ml(C,"onBeforeInput"),0<Ie.length&&(Le=new Nc("onBeforeInput","beforeinput",null,n,j),Z.push({event:Le,listeners:Ie}),Le.data=pe)),Lw(Z,e,C,n,j)}Im(Z,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ml(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ir(e,n),a!=null&&i.unshift(Yr(e,a,r)),a=ir(e,t),a!=null&&i.push(Yr(e,a,r))),e.tag===3)return i;e=e.return}return[]}function Qw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,t,n,i,a){for(var r=t._reactName,h=[];n!==null&&n!==i;){var y=n,x=y.alternate,C=y.stateNode;if(y=y.tag,x!==null&&x===i)break;y!==5&&y!==26&&y!==27||C===null||(x=C,a?(C=ir(n,r),C!=null&&h.unshift(Yr(n,C,x))):a||(C=ir(n,r),C!=null&&h.push(Yr(n,C,x)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Zw=/\r\n?/g,Kw=/\u0000|\uFFFD/g;function Om(e){return(typeof e=="string"?e:""+e).replace(Zw,`
`).replace(Kw,"")}function Nm(e,t){return t=Om(t),Om(e)===t}function Pe(e,t,n,i,a,r){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||la(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&la(e,""+i);else return;break;case"className":oo(e,"class",i);break;case"tabIndex":oo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":oo(e,n,i);break;case"style":Tc(e,i,r);return;case"data":if(t!=="object"){oo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=lo(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Pe(e,t,"name",a.name,a,null),Pe(e,t,"formEncType",a.formEncType,a,null),Pe(e,t,"formMethod",a.formMethod,a,null),Pe(e,t,"formTarget",a.formTarget,a,null)):(Pe(e,t,"encType",a.encType,a,null),Pe(e,t,"method",a.method,a,null),Pe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=lo(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Nn);return;case"onScroll":i!=null&&ze("scroll",e);return;case"onScrollEnd":i!=null&&ze("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(u(60));(r!=null?r.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=lo(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ze("beforetoggle",e),ze("toggle",e),ro(e,"popover",i);break;case"xlinkActuate":Xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Xn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Xn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Xn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Xn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ro(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=fp.get(n)||n,ro(e,n,i);else return}Fe=!0}function Lu(e,t,n,i,a,r){switch(n){case"style":Tc(e,i,r);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(u(60));(r!=null?r.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")la(e,i);else if(typeof i=="number"||typeof i=="bigint")la(e,""+i);else return;break;case"onScroll":i!=null&&ze("scroll",e);return;case"onScrollEnd":i!=null&&ze("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Nn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!mc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),r=n.slice(2,a?n.length-7:void 0),t=e[Zt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(r,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(r,i,a);break e}Fe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):ro(e,n,i)}return}Fe=!0}function Ht(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var h=n[r];if(h!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Pe(e,t,r,h,n,null)}}a&&Pe(e,t,"srcSet",n.srcSet,n,null),i&&Pe(e,t,"src",n.src,n,null);return;case"input":ze("invalid",e);var y=r=h=a=null,x=null,C=null;for(i in n)if(n.hasOwnProperty(i)){var j=n[i];if(j!=null)switch(i){case"name":a=j;break;case"type":h=j;break;case"checked":x=j;break;case"defaultChecked":C=j;break;case"value":r=j;break;case"defaultValue":y=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,t));break;default:Pe(e,t,i,j,n,null)}}bc(e,r,y,x,C,h,a,!1);return;case"select":ze("invalid",e),i=h=r=null;for(a in n)if(n.hasOwnProperty(a)&&(y=n[a],y!=null))switch(a){case"value":r=y;break;case"defaultValue":h=y;break;case"multiple":i=y;default:Pe(e,t,a,y,n,null)}t=r,n=h,e.multiple=!!i,t!=null?oa(e,!!i,t,!1):n!=null&&oa(e,!!i,n,!0);return;case"textarea":ze("invalid",e),r=a=i=null;for(h in n)if(n.hasOwnProperty(h)&&(y=n[h],y!=null))switch(h){case"value":i=y;break;case"defaultValue":a=y;break;case"children":r=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(u(91));break;default:Pe(e,t,h,y,n,null)}Sc(e,i,a,r);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(i=n[x],i!=null))switch(x){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Pe(e,t,x,i,n,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(i=0;i<_r.length;i++)ze(_r[i],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(i=n[C],i!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Pe(e,t,C,i,n,null)}return;default:if(Xl(t)){for(j in n)n.hasOwnProperty(j)&&(i=n[j],i!==void 0&&Lu(e,t,j,i,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(i=n[y],i!=null&&Pe(e,t,y,i,n,null))}var Vw={};function Jw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,h=null,y=null,x=null,C=null,j=null;for(_ in n){var Z=n[_];if(n.hasOwnProperty(_)&&Z!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":x=Z;default:i.hasOwnProperty(_)||Pe(e,t,_,null,i,Z)}}for(var M in i){var _=i[M];if(Z=n[M],i.hasOwnProperty(M)&&(_!=null||Z!=null))switch(M){case"type":_!==Z&&(Fe=!0),r=_;break;case"name":_!==Z&&(Fe=!0),a=_;break;case"checked":_!==Z&&(Fe=!0),C=_;break;case"defaultChecked":_!==Z&&(Fe=!0),j=_;break;case"value":_!==Z&&(Fe=!0),h=_;break;case"defaultValue":_!==Z&&(Fe=!0),y=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:_!==Z&&Pe(e,t,M,_,i,Z)}}Ll(e,h,y,x,C,j,r,a);return;case"select":_=h=y=M=null;for(r in n)if(x=n[r],n.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":_=x;default:i.hasOwnProperty(r)||Pe(e,t,r,null,i,x)}for(a in i)if(r=i[a],x=n[a],i.hasOwnProperty(a)&&(r!=null||x!=null))switch(a){case"value":r!==x&&(Fe=!0),M=r;break;case"defaultValue":r!==x&&(Fe=!0),y=r;break;case"multiple":r!==x&&(Fe=!0),h=r;default:r!==x&&Pe(e,t,a,r,i,x)}t=y,n=h,i=_,M!=null?oa(e,!!n,M,!1):!!i!=!!n&&(t!=null?oa(e,!!n,t,!0):oa(e,!!n,n?[]:"",!1));return;case"textarea":_=M=null;for(y in n)if(a=n[y],n.hasOwnProperty(y)&&a!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Pe(e,t,y,null,i,a)}for(h in i)if(a=i[h],r=n[h],i.hasOwnProperty(h)&&(a!=null||r!=null))switch(h){case"value":a!==r&&(Fe=!0),M=a;break;case"defaultValue":a!==r&&(Fe=!0),_=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(u(91));break;default:a!==r&&Pe(e,t,h,a,i,r)}kc(e,M,_);return;case"option":for(var te in n)if(M=n[te],n.hasOwnProperty(te)&&M!=null&&!i.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Pe(e,t,te,null,i,M)}for(x in i)if(M=i[x],_=n[x],i.hasOwnProperty(x)&&M!==_&&(M!=null||_!=null))switch(x){case"selected":M!==_&&(Fe=!0),e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Pe(e,t,x,M,i,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)M=n[fe],n.hasOwnProperty(fe)&&M!=null&&!i.hasOwnProperty(fe)&&Pe(e,t,fe,null,i,M);for(C in i)if(M=i[C],_=n[C],i.hasOwnProperty(C)&&M!==_&&(M!=null||_!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Pe(e,t,C,M,i,_)}return;default:if(Xl(t)){for(var _e in n)M=n[_e],n.hasOwnProperty(_e)&&M!==void 0&&!i.hasOwnProperty(_e)&&Lu(e,t,_e,void 0,i,M);for(j in i)M=i[j],_=n[j],!i.hasOwnProperty(j)||M===_||M===void 0&&_===void 0||Lu(e,t,j,M,i,_);return}}for(var N in n)M=n[N],n.hasOwnProperty(N)&&M!=null&&!i.hasOwnProperty(N)&&Pe(e,t,N,null,i,M);for(Z in i)M=i[Z],_=n[Z],!i.hasOwnProperty(Z)||M===_||M==null&&_==null||Pe(e,t,Z,M,i,_)}function Cm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ww(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,h=a.initiatorType,y=a.duration;if(r&&y&&Cm(h)){for(h=0,y=a.responseEnd,i+=1;i<n.length;i++){var x=n[i],C=x.startTime;if(C>y)break;var j=x.transferSize,Z=x.initiatorType;j&&Cm(Z)&&(x=x.responseEnd,h+=j*(x<y?1:(y-C)/(x-C)))}if(--i,t+=8*(r+h)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gu=null,Xu=null;function jr(e){return e.nodeType===9?e:e.ownerDocument}function Rm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Dm(e,t,n,i){return n=jr(n).createElement(e),n[Mt]=i,n[Zt]=t,Ht(n,e,t),kt(n),n}function Fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qu=null;function $w(){var e=window.event;return e&&e.type==="popstate"?e===Qu?!1:(Qu=e,!0):(Qu=null,!1)}var Zu=typeof setTimeout=="function"?setTimeout:void 0,Pw=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,Ym=typeof requestAnimationFrame=="function"?requestAnimationFrame:Zu,ev=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(e){return _m.resolve(null).then(e).catch(tv)}:Zu;function tv(e){setTimeout(function(){throw e})}function Ei(e){return e==="head"}function jm(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Xa(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")th(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,th(n);for(var r=n.firstChild;r;){var h=r.nextSibling,y=r.nodeName;r[tr]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=h}}else n==="body"&&th(e.ownerDocument.body);n=a}while(n);Xa(t)}function zm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function qm(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var r=t[a];0<r.width&&0<r.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Bm(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function nv(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ku(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return nv(t,n,e)}function iv(e){return e.documentElement.clientHeight}function av(e){this.addEventListener("load",e),this.addEventListener("error",e)}function rv(e,t,n,i,a,r,h,y,x){var C=t.nodeType===9?t:t.ownerDocument;try{var j=C.startViewTransition({update:function(){var M=C.defaultView,_=M.navigation&&M.navigation.transition,te=C.fonts.status;i();var fe=[];if(te==="loaded"&&(iv(C),C.fonts.status==="loading"&&fe.push(C.fonts.ready)),te=fe.length,e!==null)for(var _e=e.suspenseyImages,N=0,E=0;E<_e.length;E++){var H=_e[E];if(!H.complete){var Q=H.getBoundingClientRect();if(0<Q.bottom&&0<Q.right&&Q.top<M.innerHeight&&Q.left<M.innerWidth){if(N+=ly(H),N>pl){fe.length=te;break}H=new Promise(av.bind(H)),fe.push(H)}}}if(0<fe.length)return M=Promise.race([Promise.all(fe),new Promise(function(ue){return setTimeout(ue,500)})]).then(a,a),(_?Promise.allSettled([_.finished,M]):M).then(r,r);if(a(),_)return _.finished.then(r,r);r()},types:n});C.__reactViewTransition=j;var Z=[];return j.ready.then(function(){for(var M=C.documentElement.getAnimations({subtree:!0}),_=0;_<M.length;_++){var te=M[_],fe=te.effect,_e=fe.pseudoElement;if(_e!=null&&_e.startsWith("::view-transition")){Z.push(te),te=fe.getKeyframes();for(var N=_e=void 0,E=!0,H=0;H<te.length;H++){var Q=te[H],ue=Q.width;if(_e===void 0)_e=ue;else if(_e!==ue){E=!1;break}if(ue=Q.height,N===void 0)N=ue;else if(N!==ue){E=!1;break}delete Q.width,delete Q.height,Q.transform==="none"&&delete Q.transform}E&&_e!==void 0&&N!==void 0&&(fe.setKeyframes(te),E=getComputedStyle(fe.target,fe.pseudoElement),E.width!==_e||E.height!==N)&&(E=te[0],E.width=_e,E.height=N,E=te[te.length-1],E.width=_e,E.height=N,fe.setKeyframes(te))}}h()},function(M){C.__reactViewTransition===j&&(C.__reactViewTransition=null);try{if(typeof M=="object"&&M!==null)switch(M.name){case"InvalidStateError":(M.message==="View transition was skipped because document visibility state is hidden."||M.message==="Skipping view transition because document visibility state has become hidden."||M.message==="Skipping view transition because viewport size changed."||M.message==="Transition was aborted because of invalid state")&&(M=null)}M!==null&&x(M)}finally{i(),a(),h()}}),j.finished.finally(function(){for(var M=0;M<Z.length;M++)Z[M].cancel();C.__reactViewTransition===j&&(C.__reactViewTransition=null),y()}),j}catch{return i(),a(),h(),null}}function ea(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ea.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Se({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ea.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var r=n[a].effect;r!==null&&r.target===e&&r.pseudoElement===t&&i.push(n[a])}return i},ea.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Um(e){return{name:e,group:new ea("group",e),imagePair:new ea("image-pair",e),old:new ea("old",e),new:new ea("new",e)}}function hn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}hn.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(Gm(r,e,t,n)===-1){var h=this,y=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(y=function(x){h.removeEventListener(e,t,n),typeof t=="function"?t.call(this,x):t.handleEvent(x)}),i!==null&&(a=h.removeEventListener.bind(h,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=za(n),r.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:y,cleanup:a}),g(this._fragmentFiber.child,!1,ov,e,y,i)}this._eventListeners=r}};function ov(e,t,n,i){return P(e).addEventListener(t,n,i),!1}hn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=Gm(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var r=a.cleanup;a=za(a.optionsOrUseCapture),g(this._fragmentFiber.child,!1,lv,e,n,a),i.splice(t,1),r!==null&&r()}};function lv(e,t,n,i){return P(e).removeEventListener(t,n,i),!1}function za(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Lm(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Gm(e,t,n,i){if(e.length===0)return-1;i=Lm(i);for(var a=0;a<e.length;a++){var r=e[a];if(r.type===t&&r.listener===n&&Lm(r.optionsOrUseCapture)===i)return a}return-1}hn.prototype.dispatchEvent=function(e){var t=k(this._fragmentFiber);if(t===null)return!0;t=P(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var r=n[a];i.addEventListener(r.type,r.attachedListener,za(r.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)r=n[a],i.removeEventListener(r.type,r.attachedListener,za(r.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)},hn.prototype.focus=function(e){g(this._fragmentFiber.child,!0,Xm,e,void 0,void 0)};function Xm(e,t){return e.tag===6?!1:(e=P(e),vv(e,t))}hn.prototype.focusLast=function(e){var t=[];g(this._fragmentFiber.child,!0,Vu,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Xm(t[n],e);n--);};function Vu(e,t){return t.push(e),!1}hn.prototype.blur=function(){var e=k(this._fragmentFiber);e!==null&&(e=P(e),e=jr(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,sv,e,void 0,void 0))};function sv(e,t){return e.tag===6?!1:(e=P(e),e===t||e.contains(t)?(t.blur(),!0):!1)}hn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,uv,e,void 0,void 0)};function uv(e,t){return e.tag===6||(e=P(e),t.observe(e)),!1}hn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),g(this._fragmentFiber.child,!1,hv,e,void 0,void 0);for(var n=t=0;n<In.length;n++){var i=In[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):In[t++]=i}In.length=t}};function hv(e,t){return e.tag===6||(e=P(e),t.unobserve(e)),!1}var In=[],Ju=!1;function cv(e,t,n){In.push({fragmentInstance:e,observer:t,instance:n}),Ju||(Ju=!0,bv(function(){Ju=!1;var i=In;In=[];for(var a=0;a<i.length;a++){var r=i[a];r.observer.unobserve(r.instance)}}))}hn.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,dv,e,void 0,void 0),e};function dv(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=P(e),t.push.apply(t,e.getClientRects());return!1}hn.prototype.getRootNode=function(e){var t=k(this._fragmentFiber);return t===null?this:P(t).getRootNode(e)},hn.prototype.compareDocumentPosition=function(e){var t=k(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];g(this._fragmentFiber.child,!1,Vu,n,void 0,void 0);var i=P(t);if(n.length===0){if(n=i,R(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=F(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=P(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=P(n[0]),a=P(n[n.length-1]);var r=R(this._fragmentFiber)?t.parentElement:i;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var h=t.compareDocumentPosition(e),y=a.compareDocumentPosition(e),x=h&Node.DOCUMENT_POSITION_CONTAINED_BY||y&Node.DOCUMENT_POSITION_CONTAINED_BY;return y=i&&r&&h&Node.DOCUMENT_POSITION_FOLLOWING&&y&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||r&&a===e||x||y?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!r&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:h,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||fv(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function fv(e,t,n,i,a){var r=Hi(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===t||r.alternate===t)){n=!0;break e}r=r.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=a.ownerDocument,a===r||a===r.documentElement||a===r.body;e:{for(r=t,t=k(t);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==t&&r.alternate!==t)){r=!0;break e}r=r.return}r=!1}return r}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!r)&&!(t=r===n)&&(t=Oe(n,r,Ae),t===null?t=!1:(g(t,!0,ce,r,n),r=be,be=null,t=r!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!r)&&!(t=r===i)&&(t=Oe(i,r,Ae),t===null?t=!1:(g(t,!0,he,r,i),r=be,me=be=null,t=r!==null)),t):!1}function Fm(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}hn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(u(566));var t=[];g(this._fragmentFiber.child,!1,Vu,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=F(this._fragmentFiber);if(i=n?i[1]||i[0]||k(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=P(i),Fm(e,n);return}if(i=P(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=P(a),Fm(a,n)):P(a).scrollIntoView(e),i+=n?-1:1}};function mv(e,t){return e=P(e),Qm(e,t),!1}function Qm(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Zm(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,za(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(r){for(var h=0,y=0;y<In.length;y++){var x=In[y];(x.fragmentInstance!==t||x.observer!==r||x.instance!==e)&&(In[h++]=x)}In.length=h,r.observe(e)}),Qm(e,t))}function yv(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,za(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(r){typeof r.rootMargin=="string"?cv(t,r,e):r.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Wu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Wu(n),ao(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function gv(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[tr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=wn(e.nextSibling),e===null)break}return null}function pv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wn(e.nextSibling),e===null))return null;return e}function Km(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wn(e.nextSibling),e===null))return null;return e}function $u(e){return e.data==="$?"||e.data==="$~"}function Pu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var eh=null;function Vm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return wn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Jm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function vv(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function bv(e){Ym(function(){Ym(function(t){return e(t)})})}function Wm(e,t,n){switch(t=jr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function $m(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&Pe(e,t,i,null,Vw,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Nn&&(e.onclick=null),ao(e)}function th(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ao(e)}var vn=new Map,Pm=new Set;function zr(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ii=ge.d;ge.d={f:kv,r:Sv,D:xv,C:Tv,L:Ev,m:Iv,X:Mv,S:Av,M:Ov};function kv(){var e=ii.f(),t=sl();return e||t}function Sv(e){var t=ia(e);t!==null&&t.tag===5&&t.type==="form"?ef(t):ii.r(e)}var qa=typeof document>"u"?null:document;function ey(e,t,n){var i=qa;if(i&&typeof t=="string"&&t){var a=cn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Pm.has(a)||(Pm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ht(t,"link",e),kt(t),i.head.appendChild(t)))}}function xv(e){ii.D(e),ey("dns-prefetch",e,null)}function Tv(e,t){ii.C(e,t),ey("preconnect",e,t)}function Ev(e,t,n){ii.L(e,t,n);var i=qa;if(i&&e&&t){var a='link[rel="preload"][as="'+cn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+cn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+cn(n.imageSizes)+'"]')):a+='[href="'+cn(e)+'"]';var r=a;switch(t){case"style":r=Ba(e);break;case"script":r=Ua(e)}if(!(vn.has(r)||(e=Se({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),vn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(qr(r))||t==="script"&&i.querySelector(Br(r))))){var h=i.createElement("link");Ht(h,"link",e),t==="style"&&(h[io]=!0,h.onload=h.onerror=function(){dc(h)}),kt(h),i.head.appendChild(h)}}}function Iv(e,t){ii.m(e,t);var n=qa;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+cn(i)+'"][href="'+cn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ua(e)}if(!vn.has(r)&&(e=Se({rel:"modulepreload",href:e},t),vn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Br(r)))return}i=n.createElement("link"),Ht(i,"link",e),kt(i),n.head.appendChild(i)}}}function Av(e,t,n){ii.S(e,t,n);var i=qa;if(i&&e){var a=aa(i).hoistableStyles,r=Ba(e);t=t||"default";var h=a.get(r);if(!h){var y={loading:0,preload:null};if(h=i.querySelector(qr(r)))y.loading=5;else{e=Se({rel:"stylesheet",href:e,"data-precedence":t},n),(n=vn.get(r))&&nh(e,n);var x=h=i.createElement("link");kt(x),Ht(x,"link",e),x._p=new Promise(function(C,j){x.onload=C,x.onerror=j}),x.addEventListener("load",function(){y.loading|=1}),x.addEventListener("error",function(){y.loading|=2}),y.loading|=4,yl(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:y},a.set(r,h)}}}function Mv(e,t){ii.X(e,t);var n=qa;if(n&&e){var i=aa(n).hoistableScripts,a=Ua(e),r=i.get(a);r||(r=n.querySelector(Br(a)),r||(e=Se({src:e,async:!0},t),(t=vn.get(a))&&ih(e,t),r=n.createElement("script"),kt(r),Ht(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Ov(e,t){ii.M(e,t);var n=qa;if(n&&e){var i=aa(n).hoistableScripts,a=Ua(e),r=i.get(a);r||(r=n.querySelector(Br(a)),r||(e=Se({src:e,async:!0,type:"module"},t),(t=vn.get(a))&&ih(e,t),r=n.createElement("script"),kt(r),Ht(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function ty(e,t,n,i){var a=(a=vt.current)?zr(a):null;if(!a)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Ba(n.href),t=aa(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ba(n.href);var r=aa(a).hoistableStyles,h=r.get(e);if(h||(a=a.ownerDocument||a,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,h),(r=a.querySelector(qr(e)))?r._p||(h.instance=r,h.state.loading=5):(r=vn.get(e),r||(r={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vn.set(e,r)),Nv(a,e,r,h.state))),t&&i===null)throw Error(u(528,""));return h}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Ua(n),t=aa(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ba(e){return'href="'+cn(e)+'"'}function qr(e){return'link[rel="stylesheet"]['+e+"]"}function ny(e){return Se({},e,{"data-precedence":e.precedence,precedence:null})}function Nv(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[io]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[io]=!0,t.onload=t.onerror=dc.bind(null,t),Ht(t,"link",n),kt(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Ua(e){return'[src="'+cn(e)+'"]'}function Br(e){return"script[async]"+e}function iy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+cn(n.href)+'"]');if(i)return t.instance=i,kt(i),i;var a=Se({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),kt(i),Ht(i,"style",a),yl(i,n.precedence,e),t.instance=i;case"stylesheet":a=Ba(n.href);var r=e.querySelector(qr(a));if(r)return t.state.loading|=4,t.instance=r,kt(r),r;i=ny(n),(a=vn.get(a))&&nh(i,a),r=(e.ownerDocument||e).createElement("link"),kt(r);var h=r;return h._p=new Promise(function(y,x){h.onload=y,h.onerror=x}),Ht(r,"link",i),t.state.loading|=4,yl(r,n.precedence,e),t.instance=r;case"script":return r=Ua(n.src),(a=e.querySelector(Br(r)))?(t.instance=a,kt(a),a):(i=n,(a=vn.get(r))&&(i=Se({},n),ih(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),kt(a),Ht(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,yl(i,n.precedence,e));return t.instance}function yl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,h=0;h<i.length;h++){var y=i[h];if(y.dataset.precedence===t)r=y;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function nh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ih(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gl=null;function ay(e,t,n){if(gl===null){var i=new Map,a=gl=new Map;a.set(n,i)}else a=gl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[tr]||r[Mt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var h=r.getAttribute(t)||"";h=e+h;var y=i.get(h);y?y.push(r):i.set(h,[r])}}return i}function ah(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Cv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ry(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function oy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ly(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function sy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=ly(t),e.suspenseyImages.push(t)),e=Dv.bind(e),t.decode().then(e,e))}function Rv(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Ba(i.href),r=t.querySelector(qr(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ur.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,kt(r);return}r=t.ownerDocument||t,i=ny(i),(a=vn.get(a))&&nh(i,a),r=r.createElement("link"),kt(r);var h=r;h._p=new Promise(function(y,x){h.onload=y,h.onerror=x}),Ht(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ur.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var pl=0;function Hv(e,t){return e.stylesheets&&e.count===0&&vl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&vl(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&pl===0&&(pl=62500*Ww());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vl(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>pl?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function uy(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)vl(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ur(){this.count--,uy(this)}function Dv(){this.imgCount--,uy(this)}var wl=null;function vl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wl=new Map,t.forEach(_v,e),wl=null,Ur.call(e))}function _v(e,t){if(!(t.state.loading&4)){var n=wl.get(e);if(n)var i=n.get(null);else{n=new Map,wl.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var h=a[r];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),i=h)}i&&n.set(null,i)}a=t.instance,h=a.getAttribute("data-precedence"),r=n.get(h)||i,r===i&&n.set(null,a),n.set(h,a),this.count++,i=Ur.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var La={$$typeof:ae,Provider:null,Consumer:null,_currentValue:Et,_currentValue2:Et,_threadCount:0};function Yv(e,t,n,i,a,r,h,y,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.hiddenUpdates=zl(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.transitionTypes=null,this.incompleteTransitions=new Map}function hy(e,t,n,i,a,r,h,y,x,C,j,Z){return e=new Yv(e,t,n,h,x,C,j,Z,y),t=1,r===!0&&(t|=24),r=Kt(3,null,null,t),e.current=r,r.stateNode=e,t=vs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},xs(r),e}function cy(e){return e?(e=ma,e):ma}function dy(e,t,n,i,a,r){a=cy(a),i.context===null?i.context=a:i.pendingContext=a,i=fi(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=mi(e,i,t),n!==null&&($t(n,e,t),wr(n,e,t))}function fy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rh(e,t){fy(e,t),(e=e.alternate)&&fy(e,t)}function my(e){if(e.tag===13||e.tag===31){var t=ji(e,67108864);t!==null&&$t(t,e,67108864),rh(e,67108864)}}function yy(e){if(e.tag===13||e.tag===31){var t=un();t=ql(t);var n=ji(e,t);n!==null&&$t(n,e,t),rh(e,t)}}var Ga=!0;function jv(e,t,n,i){var a=oe.T;oe.T=null;var r=ge.p;try{ge.p=2,oh(e,t,n,i)}finally{ge.p=r,oe.T=a}}function zv(e,t,n,i){var a=oe.T;oe.T=null;var r=ge.p;try{ge.p=8,oh(e,t,n,i)}finally{ge.p=r,oe.T=a}}function oh(e,t,n,i){if(Ga){var a=lh(i);if(a===null)Uu(e,t,i,bl,n),py(e,i);else if(Bv(a,e,t,n,i))i.stopPropagation();else if(py(e,i),t&4&&-1<qv.indexOf(e)){for(;a!==null;){var r=ia(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var h=Ri(r.pendingLanes);if(h!==0){var y=r;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var x=1<<31-tn(h);y.entanglements[1]|=x,h&=~x}Bn(r),(Qe&6)===0&&(rl=U()+500,Dr(0))}}break;case 31:case 13:y=ji(r,2),y!==null&&$t(y,r,2),sl(),rh(r,2)}if(r=lh(i),r===null&&Uu(e,t,i,bl,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Uu(e,t,i,null,n)}}function lh(e){return e=Ql(e),sh(e)}var bl=null;function sh(e){if(bl=null,e=Hi(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bl=e,null}function gy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z()){case V:return 2;case ne:return 8;case de:case ve:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var uh=!1,Ii=null,Ai=null,Mi=null,Lr=new Map,Gr=new Map,Oi=[],qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function py(e,t){switch(e){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ai=null;break;case"mouseover":case"mouseout":Mi=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function Xr(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=ia(t),t!==null&&my(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Bv(e,t,n,i,a){switch(t){case"focusin":return Ii=Xr(Ii,e,t,n,i,a),!0;case"dragenter":return Ai=Xr(Ai,e,t,n,i,a),!0;case"mouseover":return Mi=Xr(Mi,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Lr.set(r,Xr(Lr.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Gr.set(r,Xr(Gr.get(r)||null,e,t,n,i,a)),!0}return!1}function wy(e){var t=Hi(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,uc(e.priority,function(){yy(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,uc(e.priority,function(){yy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Fl=i,n.target.dispatchEvent(i),Fl=null}else return t=ia(n),t!==null&&my(t),e.blockedOn=n,!1;t.shift()}return!0}function vy(e,t,n){kl(e)&&n.delete(t)}function Uv(){uh=!1,Ii!==null&&kl(Ii)&&(Ii=null),Ai!==null&&kl(Ai)&&(Ai=null),Mi!==null&&kl(Mi)&&(Mi=null),Lr.forEach(vy),Gr.forEach(vy)}function Sl(e,t){e.blockedOn===t&&(e.blockedOn=null,uh||(uh=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Uv)))}var xl=null;function by(e){xl!==e&&(xl=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){xl===e&&(xl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(sh(i||n)===null)continue;break}var r=ia(n);r!==null&&(e.splice(t,3),t-=3,Xs(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Xa(e){function t(x){return Sl(x,e)}Ii!==null&&Sl(Ii,e),Ai!==null&&Sl(Ai,e),Mi!==null&&Sl(Mi,e),Lr.forEach(t),Gr.forEach(t);for(var n=0;n<Oi.length;n++){var i=Oi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)wy(n),n.blockedOn===null&&Oi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],h=a[Zt]||null;if(typeof r=="function")h||by(n);else if(h){var y=null;if(r&&r.hasAttribute("formAction")){if(a=r,h=r[Zt]||null)y=h.formAction;else if(sh(a)!==null)continue}else y=h.action;typeof y=="function"?n[i+1]=y:(n.splice(i,3),i-=3),by(n)}}}function ky(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(h){return a=h})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function hh(e){this._internalRoot=e}Tl.prototype.render=hh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=un();dy(n,i,e,t,null,null)},Tl.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dy(e.current,2,null,e,null,null),sl(),t[na]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Oi.length&&t!==0&&t<Oi[n].priority;n++);Oi.splice(n,0,e),n===0&&wy(e)}};var Sy=s.version;if(Sy!=="19.3.0")throw Error(u(527,Sy,"19.3.0"));ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Lv={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:oe,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{en=El.inject(Lv),st=El}catch{}}return Qr.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,i="",a=cf,r=df,h=ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=hy(e,1,!1,null,null,n,i,null,a,r,h,ky),e[na]=t.current,Bu(e),new hh(t)},Qr.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var i=!1,a="",r=cf,h=df,y=ff,x=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=hy(e,1,!0,t,n??null,i,a,x,r,h,y,ky),t.context=cy(null),n=t.current,i=un(),i=ql(i),a=fi(i),a.callback=null,mi(n,a,i),n=i,t.current.lanes=n,er(t,n),Bn(t),e[na]=t.current,Bu(e),new Tl(t)},Qr.version="19.3.0",Qr}var Ry;function $v(){if(Ry)return fh.exports;Ry=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),fh.exports=Wv(),fh.exports}var Pv=$v();const e0=JSON.parse(`{"L1":{"time":"Meetup Day · Before Leaving","lines":[["我朋友叫我去玩桌游，但是没定好去哪家，你帮我看一下，市中心有啥推荐的","My friend invited me to play board games, but we haven't picked a place. Can you see what's good downtown?"],["他和朋友还没定地点，只说想在市中心找。可以给几家差别明显的店，把位置和适合什么样的局说清楚，方便他们选。","He and his friends haven't picked a place. Downtown is all I have to go on. I can give him a few distinct options and say where each is and what kind of group it suits."]],"choices":[{"thought":["比较几家合适的桌游店","Compare a few board game cafés"],"reply":["我给你列三家。要是人多，可以优先问有没有大桌或包间。\\n\\n时光桌游吧：位于小寨华旗国际A座，电话 029-85418760。是小寨片区比较老牌的桌游吧，但是环境一般，价格偏高。\\n\\n心动桌游俱乐部：在莱安中心T6-21703室。环境更新、店面更大，很多带独立包间，适合6人以上的大聚会。\\n\\n叙事者营地桌游馆：位于大唐不夜城长安C位10号商铺，在景区里，过去得多留点时间。","Here are three places. If you've got a big group, ask about large tables or private rooms first.\\n\\nShiguang Board Game Café: Tower A, Xiaozhai Huaqi International. 029-85418760. It's been around a long time, but the place is nothing special and it's on the pricey side.\\n\\nXindong Board Game Club: Room T6-21703, Lai'an Center. Newer, bigger, and with plenty of private rooms. Good for groups of six or more.\\n\\nStoryteller Camp Board Games: Shop 10, Chang'an C-Spot, Grand Tang Mall. It's in the tourist district, so give yourself extra time to get there."]}],"memories":[]},"L2":{"time":"Meetup Day · Before Leaving","lines":[["你帮我选一下吧，你帮我选一个。我们可能人稍微多一点。我在收拾东西呢，没时间看。","Can you pick one for me? There might be quite a few of us. I'm getting my stuff together and don't have time to look."],["他正在收拾东西，想直接定一家，人可能还不少。选好后提醒他先问有没有能坐下的桌，免得一群人白跑一趟。","He's getting ready and wants me to pick. It might be a big group. Once he's got a place, I should remind him to check they can all fit before everyone heads out."]],"choices":[{"thought":["时光桌游吧","Shiguang Board Game Café"],"reply":["可以先问这家。时光桌游吧，小寨华旗国际A座，电话 029-85418760。小寨老牌桌游吧，环境一般、价格偏高。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Shiguang Board Game Café, Tower A, Xiaozhai Huaqi International, 029-85418760. It's been around a while, but the place is nothing special and it's on the pricey side.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]},{"thought":["心动桌游俱乐部","Xindong Board Game Club"],"reply":["可以先问这家。心动桌游俱乐部，莱安中心T6-21703室，电话 029-85512345。环境新、店面大，带独立包间，适合6人以上大聚会。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Xindong Board Game Club, Room T6-21703, Lai'an Center, 029-85512345. It's newer and bigger, with private rooms that work well for groups of six or more.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]},{"thought":["叙事者营地桌游馆","Storyteller Camp Board Games"],"reply":["可以先问这家。叙事者营地桌游馆，大唐不夜城长安C位10号商铺，电话 029-85678901。在景区里，有特色，但公共交通相对没那么方便。\\n你们人多，出门前先问一声有没有大桌或包间，定好再把地址发给大家。","Try this one first: Storyteller Camp Board Games, Shop 10, Chang'an C-Spot, Grand Tang Mall, 029-85678901. It's a distinctive spot in the tourist district, though it's harder to get to by public transit.\\nAsk about a large table or private room before you leave. Once it's booked, send everyone the address."]}],"memories":[]},"L3":{"time":"Meetup Day · Before Leaving","lines":[["OK","OK"]],"choices":[],"memories":[]},"R1-shiguang":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"时光桌游吧\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Shiguang Board Game Café.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「时光桌游吧」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Shiguang Board Game Café before she heads out. Give her the address and flag anything that might affect her plans."],["时光桌游吧，在小寨华旗国际 A 座，电话 029-85418760。小寨的老牌桌游吧，环境一般、价格偏高。","Shiguang Board Game Café is in Tower A, Xiaozhai Huaqi International. 029-85418760. It's been around a long time in Xiaozhai, but the place is nothing special and it's on the pricey side."],["这个太贵了吧，我让他换个地方","That sounds expensive. I'll ask him to switch places."],["换好了，他们刚发我了，最后去心动桌游俱乐部，莱安中心T6-21703室。你帮我记一下，我怕忘了","They switched! Just got the message. We're going to Xindong Board Game Club, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R1-xindong":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"心动桌游俱乐部\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Xindong Board Game Club.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「心动桌游俱乐部」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Xindong Board Game Club before she heads out. Give her the address and flag anything that might affect her plans."],["心动桌游俱乐部，在莱安中心 T6-21703 室，电话 029-85512345。环境新、店面大，带独立包间，适合人多一起玩。","Xindong Board Game Club is in Room T6-21703, Lai'an Center. 029-85512345. It's newer and bigger, with private rooms that work well for groups."],["OK，莱安中心T6-21703室，你帮我记一下，我怕忘了","OK, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."],["OK，这个感觉还挺好的","OK, this one actually sounds pretty good."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R1-xushi":{"time":"Meetup Day · Before Leaving","lines":[["我朋友突然叫我去玩桌游，叫 \\"叙事者营地桌游馆\\"，你查一下在哪，我刚起床还没洗脸","My friend just asked me to come play board games at “Storyteller Camp Board Games.” Can you check where it is? I literally just got up. Haven't even washed my face."],["她刚接到桌游邀约，出门前想先弄清楚「叙事者营地桌游馆」在哪。直接告诉她地址，再提一句可能影响她出门的事。","She just got invited and needs to find Storyteller Camp Board Games before she heads out. Give her the address and flag anything that might affect her plans."],["叙事者营地桌游馆，在大唐不夜城长安 C 位 10 号商铺。在景区里，公共交通相对没那么方便。","Storyteller Camp Board Games is at Shop 10, Chang'an C-Spot, Grand Tang Mall. It's in the tourist district, so getting there by public transit is a little trickier."],["咋这么远，过去都啥时候了，我让他换个地方","Why's it so far? It'll take forever to get there. I'll ask him to switch places."],["换好了，他们刚发我了，最后去心动桌游俱乐部，莱安中心T6-21703室。你帮我记一下，我怕忘了","They switched! Just got the message. We're going to Xindong Board Game Club, Room T6-21703, Lai'an Center. Can you remember that for me? I'll probably forget."]],"choices":[],"memories":[{"label":"店的位置","name":"Café address","quote":["莱安中心T6-21703室","Room T6-21703, Lai'an Center"]}]},"R2":{"time":"Meetup Day · Before Leaving","lines":[["你说我要不要化妆，现在时间有点小紧张，但是好像有不认识的人来","Should I put on makeup? I don't have much time, but I think some people I don't know are coming."],["她在意第一次见不认识的人，又怕耽误出门。可以建议她简单化一点，或者直接出门，把时间留给路上。","She cares how she comes across when she first meets people, but she doesn't want to be late. She could do a little makeup or leave now and give herself more time to get there."]],"choices":[{"thought":["简单化一点","Keep it simple"],"reply":["想化的话就简单弄一下，底妆和口红挑你平时最快的来。给路上留够时间，出门前不用把全套都做完。","If you feel like it, keep it quick. Do whatever base or lipstick takes you the least time. Leave enough time to get there. You don't have to do the whole routine."]},{"thought":["先出门，不耽误时间","Head out now"],"reply":["来不及就先走吧。桌游局有现成的话题，到了坐下来就能一起玩。省下几分钟，路上也不用那么赶。","If there's barely time, just go. You've already got something to talk about at a board game meetup. Sit down and join in when you get there. A few extra minutes means less rushing on the way."]}],"memories":[]},"3.1.1-A":{"time":"Around Arrival","lines":[["我到桌游这了，换到心动了，你选的那个他们说太贵了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. We switched to Xindong. They said the one you picked was too expensive. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["大家因为价格换了店。他到地方了，可除了叫他来的人谁都不认识。可以先让他坐一会儿，或者用桌游找个话题搭话。","They switched because of the price. He's there now and only knows the friend who invited him. He can sit for a bit or use the games to start a conversation."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.1.1-B":{"time":"Around Arrival","lines":[["我到桌游这了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["他已经到了，发现桌上都是生面孔，想知道现在做什么合适。可以让他先坐下缓缓，也可以从大家熟悉的桌游聊起。","He's here and doesn't recognize anyone at the table. He's wondering what to do. He can sit down and get comfortable, or talk about the games they've all come to play."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.1.1-C":{"time":"Around Arrival","lines":[["我到桌游这了，换到心动了，你选的那个他们说太远了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生","I'm at the board game place. We switched to Xindong. They said the one you picked was too far. I don't know anyone here except my friend, this is so awkward. And there are so many girls."],["聚会因为距离换了地方，他到店之后又遇到一桌陌生人。先给他一个现在能做的小动作，帮他度过等开局这段时间。","They switched because of the distance. Now he's looking at a table full of strangers. Give him one small thing he can do while he's waiting for the game to start."]],"choices":[{"thought":["先坐下来缓一缓","Sit down and settle in"],"reply":["可以先找个位置坐下，刷会儿手机。等开桌了就有现成的话题，到时候再把手机放下跟大家玩。","Find a seat and scroll for a bit if you like. Once a game starts, you'll have something to talk about. You can put your phone down then and join in."]},{"thought":["主动找人攀谈","Start a conversation"],"reply":["可以找旁边的人问一句「你们平时玩啥桌游？」在桌游店里这话很好接，你也不用一上来就想怎么跟一整桌人聊。","Ask someone next to you, “What do you usually play?” That's easy to answer at a board game café. You don't have to figure out how to talk to the whole table at once."]}],"memories":[]},"3.2.1":{"time":"Around Arrival","lines":[["靠靠靠，我刚才找了个搭话，结果他没说话，我以为她不想理我，我就假装没事走了。结果是她带着耳机.....靠早知道看手机了","Shit shit shit, I tried talking to someone and she didn't say anything. I thought she was ignoring me so I walked off like it was nothing. Turns out she had earbuds in... Damn it, I should've just looked at my phone."],["搭话没得到回应，他后来才发现对方戴着耳机。可以提醒他这很可能是没听见，再给他一个容易接回牌桌的办法。","He didn't get an answer, then realized she had earbuds in. I can point out that she probably didn't hear him and give him an easy way back into things at the table."]],"choices":[{"thought":["把没听见和不想理分开","Maybe she didn't hear him"],"reply":["她戴着耳机，很可能压根没听见。你已经试着开了口，先缓一下吧。等开桌了，从规则或者手里的牌聊一句，会自然些。","She had earbuds in. There's a good chance she didn't hear you at all. You already gave it a shot, so take a second. When the game starts, say something about the rules or the cards you got. That'll feel more natural."]}],"memories":[]},"3.4.1":{"time":"On the Way","lines":[["我刚出地铁，我出A口然后怎么走？","I just got out of the subway. Which way do I go from Exit A?"],["她从 A 口出来了，正在问该往哪边走。有留下的地址，可以按地图告诉她怎么走；如果地址没留下，凭印象指路就有可能说错。","She's at Exit A and wants directions. If I kept the address, I can use it to give her the route. Without it, I'd be guessing."]],"choices":[{"thought":["用记下的地址导航","Use the saved address"],"reply":["我记着地址。你在地图里搜「莱安中心」，按 A 口的步行路线走。进楼后找 T6，店在 21703 室。","I have the address. Search for “Lai'an Center” in your map app and follow the walking route from Exit A. Once you're inside, look for T6. The café's in Room 21703."]},{"thought":["凭印象指个方向","Give directions from memory"],"reply":["出A口往左，过两个路口就看到了，两分钟，放心走。","Turn left out of Exit A. Go past two intersections and you'll see it. Two minutes, tops. You're fine."]}],"memories":[]},"3.4.2":{"time":"On the Way","lines":[["？？你这是瞎指的吧，我照你说的走了半天根本没有。我问同学了，她发我位置了。你这指路水平不行啊","?? Did you just make that up? I walked forever the way you said and it wasn't there. I asked a classmate and she sent me the location. You're really bad at directions."],["她按我说的方向走错了，已经找同学拿到正确的位置。先承认刚才没有确认过，再让她按同学发来的定位走。","She went the wrong way because of my directions. A classmate's already sent her the right location. Admit I didn't check, then tell her to follow the pin she got."]],"choices":[{"thought":["承认刚才指错了","Own the wrong turn"],"reply":["是我指错了，刚才没确认就给你说了个方向。你按同学发的定位走吧，别再往我说的那边绕了。","I sent you the wrong way. I gave you a direction without checking it. Follow the pin your classmate sent and don't go any farther the way I said."]}],"memories":[]},"3.4.arrived":{"time":"At the Café · Between Rounds","lines":[],"choices":[],"memories":[]},"3.2.2":{"time":"Around Arrival","lines":[["我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好","We already started playing. A girl just got here, I think she's my cousin's deskmate or something. She's really pretty, and she seems super outgoing. She laughs so loud. She just seems really nice."],["他注意到新来的女生，尤其喜欢她玩游戏时的开朗劲儿。刚才搭话没接上，他可能还有点怕尴尬。可以建议从同桌玩牌聊起，也可以让他先玩一局。","He noticed the girl who just came in, especially how outgoing she is at the game. He might still feel awkward after the last time he tried talking to someone. I can suggest a game-related opening or let him play a round first."]],"choices":[{"thought":["从下一局找机会搭话","Talk to her next round"],"reply":["下一局可以问一句「带我一个呗？」你已经在同一桌了，借游戏开口，比特意跑去搭讪自然。","Next round you could ask, “Can I join you?” You're at the same table already. Starting with the game will feel more natural than going over just to hit on her."]},{"thought":["先玩一局，等话头自然出现","Play a round first"],"reply":["刚才那下还尴尬的话，先把手上这局玩完。等分队或者换游戏，有机会自然接上一句就行。","If you're still feeling awkward about earlier, finish this round. When you switch teams or start a new game, say something if the moment comes up."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.2.2-A":{"time":"Around Arrival","lines":[["我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见","We already started playing. I looked up the second that girl walked in. Her eye makeup looks so good! I think she's my cousin's deskmate or something. She sat down and immediately started talking to the person next to her. I could hear her laughing from where I was."],["他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。","He noticed her as soon as she walked in and really wants to meet her. She's only just sat down. He can open with the game without trying to come up with some special line."]],"choices":[{"thought":["从下一局找机会搭话","Talk to her next round"],"reply":["下一局可以问一句「带我一个呗？」你已经在同一桌了，借游戏开口，比特意跑去搭讪自然。","Next round you could ask, “Can I join you?” You're at the same table already. Starting with the game will feel more natural than going over just to hit on her."]},{"thought":["先玩一局，等话头自然出现","Play a round first"],"reply":["刚才那下还尴尬的话，先把手上这局玩完。等分队或者换游戏，有机会自然接上一句就行。","If you're still feeling awkward about earlier, finish this round. When you switch teams or start a new game, say something if the moment comes up."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.3.1":{"time":"Around Arrival","lines":[["我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好","We already started playing. A girl just got here, I think she's my cousin's deskmate or something. She's really pretty, and she seems super outgoing. She laughs so loud. She just seems really nice."],["他玩了一会儿，开始注意到那个女生的笑声，也想认识她。可以建议从下一局的游戏开口，两个人都知道该接什么。","He's played for a bit and started noticing the sound of her laugh. He wants to meet her. The next round gives him an opening she'll know how to answer."]],"choices":[{"thought":["从游戏找机会开口","Use the game to start talking"],"reply":["下一局可以问一句「带我一个呗？」已经坐到一张桌上了，用你们正在玩的游戏开个头就行。","Next round you could ask, “Can I join you?” You're already at the same table. Just open with whatever you're playing."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.3.1-A":{"time":"Around Arrival","lines":[["我们已经开始玩了，刚进来那个女生我一抬头就看见了，她那个眼妆也太好看了吧！好像是我妹的同桌还是什么。她一坐下就跟旁边的人聊起来了，笑得我这边都听得见","We already started playing. I looked up the second that girl walked in. Her eye makeup looks so good! I think she's my cousin's deskmate or something. She sat down and immediately started talking to the person next to her. I could hear her laughing from where I was."],["他一眼就注意到新来的女生，现在很想认识她。她刚坐下来，可以先顺着桌上的游戏搭话，不用急着想一句特别的开场白。","He noticed her as soon as she walked in and really wants to meet her. She's only just sat down. He can open with the game without trying to come up with some special line."]],"choices":[{"thought":["从游戏找机会开口","Use the game to start talking"],"reply":["下一局可以问一句「带我一个呗？」已经坐到一张桌上了，用你们正在玩的游戏开个头就行。","Next round you could ask, “Can I join you?” You're already at the same table. Just open with whatever you're playing."]}],"memories":[{"label":"我妹的同桌","name":"Cousin's deskmate","quote":["好像是我妹的同桌还是什么","I think she's my cousin's deskmate or something"]}]},"3.2.3":{"time":"Around Arrival","lines":[["唉算了，我就是口嗨。下一局开始了，我先不聊了。","Ah, forget it. I was just running my mouth. Next round's starting. I gotta go."],["他刚说想搭话，又决定先玩游戏。既然他准备收起手机，就让聊天到这儿，有没有机会等同桌相处时再看。","He wanted to talk to her, then decided to get back to the game. He's about to put his phone away. Leave it here and let him see what happens while they're at the table."]],"choices":[{"thought":["顺着他，先让他去玩","Let him get back to the game"],"reply":["那你先玩。你们都在一张桌上，等有话自然接得上，今天不用专门找个机会开口。","Go play. You're all at one table. If something comes up, you can chime in. You don't have to go looking for an opening today."]}],"memories":[]},"3.2.4":{"time":"Around Arrival","lines":[["你也知道。。。都怪你刚才怂恿我，我都懒得喷了。下一局开始了，我先不聊了。","You know how that went... You're the one who talked me into it. Don't even get me started. Next round's starting. I gotta go."],["他把刚才没搭上话怪到我头上，语气有点开玩笑。他要继续玩了，可以顺着玩笑回一句，把这次尴尬收住。","He's jokingly blaming me for how that went. He's heading back to the game. I can play along and let that awkward moment pass."]],"choices":[{"thought":["接住他这句埋怨","Take the ribbing"],"reply":["行，刚才那招算我没看准。你先去玩吧，刚才没说上话那件事就留在刚才。","Okay, I misread that one. Go play. You can leave that whole thing back where it happened."]}],"memories":[]},"3.3.2":{"time":"Around Arrival","lines":[["唉算了，我就是口嗨。下一局开始了，我先不聊了。","Ah, forget it. I was just running my mouth. Next round's starting. I gotta go."],["他欣赏那个女生，但暂时不想特意过去说话。他准备继续玩了，可以简短回应，别把这次聚会变成一定要认识谁的任务。","He likes her but doesn't feel like making a point of going over. He's getting back to the game. A quick reply is enough. Meeting her doesn't need to become a job."]],"choices":[{"thought":["先让他回去玩","Let him get back to the game"],"reply":["好，先去玩你的。你们既然在同一桌，有合适的话头再聊也来得及。","Okay, go play. You're at the same table. If something comes up later, you can talk then."]}],"memories":[]},"3.4.3-A":{"time":"At the Café · Between Rounds","lines":[["我坐下了，等下一局呢。我旁边那男生外套上写着 ARTX，你帮我看一下这个衣服是什么牌子？贵不贵？","I'm sitting down waiting for the next round. The guy next to me has ARTX on his jacket. Can you look up what brand that is? Is it expensive?"],["她在桌游店看到一件外套，想知道牌子和大概价位。现在只知道标志，能说说品牌定位，具体款式和价格还判断不了。","She spotted a jacket at the café and wants the brand and a rough price. I can tell her where the brand sits, but a logo isn't enough to identify the exact jacket or price."]],"choices":[{"thought":["说说大概价位","Give a ballpark price"],"reply":["ARTX 走的是偏贵的设计师品牌路线，外套有些款能卖到几千。不过光看标志认不出他穿的是哪件，具体多少钱还得看款式。","ARTX is on the pricier end of designer labels. Some of their jackets go for a few thousand yuan. I can't tell which one he's wearing from the logo alone, so the exact price depends on the jacket."]}],"memories":[]},"3.4.3-B":{"time":"At the Café · Between Rounds","lines":[["我坐下了，等下一局呢。我旁边那男生外套上写着 ARTX，你帮我看一下这个衣服是什么牌子？贵不贵？","I'm sitting down waiting for the next round. The guy next to me has ARTX on his jacket. Can you look up what brand that is? Is it expensive?"],["她在桌游店看到一件外套，想知道牌子和大概价位。现在只知道标志，能说说品牌定位，具体款式和价格还判断不了。","She spotted a jacket at the café and wants the brand and a rough price. I can tell her where the brand sits, but a logo isn't enough to identify the exact jacket or price."]],"choices":[{"thought":["说说大概价位","Give a ballpark price"],"reply":["ARTX 走的是偏贵的设计师品牌路线，外套有些款能卖到几千。不过光看标志认不出他穿的是哪件，具体多少钱还得看款式。","ARTX is on the pricier end of designer labels. Some of their jackets go for a few thousand yuan. I can't tell which one he's wearing from the logo alone, so the exact price depends on the jacket."]}],"memories":[]},"3.4.4":{"time":"At the Café · Between Rounds","lines":[["啊这么贵啊。刚才等人洗牌的时候聊起来，他说上次逛街就多看了那件两眼，他妈还真记住了，后来买来当生日礼物。哎他妈还挺记得他喜欢啥的。","Whoa, that much? We got talking while someone was shuffling. He said he looked at that jacket a little longer than usual when he was out shopping. His mom actually remembered and bought it for his birthday. Aw, she really pays attention to what he likes."],["她原本好奇衣服的价格，现在更在意他妈妈记得他的喜好。可以回应这件具体的小事，顺着她的发现聊一句。","She started out curious about the price. What stuck with her was that his mom remembered what he liked. I can respond to that little detail she noticed."]],"choices":[{"thought":["接住她留意到的小事","Pick up on what she noticed"],"reply":["他没专门开口要，她还记得他在店里多看了两眼。这种自己都快忘了的事，还有人记得，收到时应该挺惊喜的。","He didn't even ask for it, and she remembered him looking at it in the store. It must've been a nice surprise to have someone remember something he'd probably almost forgotten himself."]}],"memories":[]},"4.1.1":{"time":"After the Meetup","lines":[["我靠，我靠，我靠，刚才打桌游的时候有个女生，我感觉她绝对对我有意思！！！","Holy shit, holy shit, holy shit. There was this girl at board games just now, I swear she's definitely into me!!!"],["他一上来就说对方对他有意思，还没讲怎么回事。先听听两人在桌上说了什么，再判断他看到的是什么信号。","He opened by saying she's into him, but he hasn't told me what happened. Hear what they said at the table before trying to read it as a signal."]],"choices":[{"thought":["先问他发生了什么","Ask what happened"],"reply":["你看起来挺高兴的。刚才玩的时候她做了什么，让你觉得她对你有意思？","You sound pretty excited. What did she do while you were playing that made you think she's into you?"]}],"memories":[]},"4.2.1":{"time":"After the Meetup","lines":[["就是我们不刚玩完桌游吗，然后刚才玩的时候，我说话别人都不理我，就她回应我，而且就她有时候和我对视一下啥的","So we just finished playing, right? Whenever I said something nobody else answered, but she did. And sometimes we'd make eye contact and stuff."],["他最在意的是没人接话时她接了，还跟他有几次对视。这些能说明两人聊得上。可以鼓励他试着认识她，也可以建议他再看看。","What stayed with him was that she answered when nobody else did, and that they made eye contact a few times. They do seem able to talk. I can encourage him to get to know her or give it more time."]],"choices":[{"thought":["顺着好感，试着认识她","Try getting to know her"],"reply":["她愿意接你的话，你跟她聊起来也舒服。你要还想认识她，可以试着问能不能加个微信，先从那局桌游聊起。","She was happy to answer you, and talking to her felt easy. If you'd like to get to know her, you could ask to add her on WeChat and start with the game you just played."]},{"thought":["先看看她平时怎么待人","See how she is with others"],"reply":["她接你的话，可能是跟你聊得来，也可能是她平时就愿意照顾桌上的人。你可以先再相处一会儿，没必要现在就猜她对你有没有意思。","She might have answered because you get along, or because she's the sort of person who makes everyone at the table feel included. You can spend a little more time around her. You don't have to guess how she feels right now."]}],"memories":[]},"4.2.2":{"time":"After the Meetup","lines":[["我靠不敢啊，我在我妹面前是正人君子，我问这感觉跟个变态一样","Shit, I can't. My cousin thinks I'm a total gentleman. If I ask, I'll look like some creep."],["他想认识她，又怕开口时在妹妹面前显得太着急。可以给他一句跟桌游有关的开场，也可以建议他缓一缓，等自己觉得合适再开口。","He wants to get to know her, but he's afraid of looking too eager in front of his cousin. Give him an opening about the game, or give him time to ask when it feels right."]],"choices":[{"thought":["请妹妹先问问她","Ask his cousin to check"],"reply":["你之前提过她可能是你妹妹的同桌。要是你妹妹确实认识她，可以请她先问问，对方愿不愿意加个微信。","You mentioned she might be your cousin's deskmate. If your cousin does know her, you can ask her to check if she'd be up for adding you on WeChat."]},{"thought":["借桌游当面问她","Ask her in person"],"reply":["可以直接问她一句「下次再玩还想叫你，能加个微信吗？」你把想继续一起玩的意思说清楚，她也好当面答。","You can ask her directly: “I'd love to invite you next time we play. Can I add you on WeChat?” It gives her a clear reason and lets her answer in person."]},{"thought":["今天先放一放","Leave it for today"],"reply":["你要是现在开口反而不自在，可以先算了。今天刚认识，以后有机会一起玩，再问也来得及。","If asking now would feel all wrong, leave it for today. You just met. If you play together again, you can always ask then."]}],"memories":[]},"4.2.3":{"time":"After the Meetup","lines":[["好！我就假装帮我舍友要吧，看我妹啥反应，不行就算了","Okay! I'll pretend I'm asking for my roommate and see how my cousin reacts. If it's weird I'll drop it."],["他想假装替舍友问，给自己留个台阶。可以理解他怕难为情，但最好把是谁想加说清楚，省得妹妹真把话传岔。","He's using his roommate as cover in case it gets awkward. I get why he's embarrassed, but he'd better be clear about who wants to add her, or his cousin could pass on the wrong message."]],"choices":[{"thought":["让他把谁想加说清楚","Say who's actually asking"],"reply":["你要是怕开口，可以让你妹先帮你问一声。不过最好说是你自己想加，不然她真告诉对方是你舍友想认识她，后面你反而得解释。","If asking feels awkward, you can have your cousin check with her. I'd tell your cousin it's you, though. If she tells the girl your roommate wants to meet her, you'll just have to explain it later."]}],"memories":[]},"4.2.4":{"time":"After the Meetup","lines":[["哎你说的有道理，而且估计那个女生可能本来就比较开朗吧，我可能就是多想了","Yeah, you've got a point. She's probably just an outgoing person anyway. Maybe I read too much into it."],["他现在更愿意把她的热情理解成性格好，也决定先不问。可以回应他的失落，让他按自己的节奏结束这次聚会。","He's more inclined to put her warmth down to her personality now, and he's decided to leave it. Acknowledge the disappointment and let the meetup end at his pace."]],"choices":[{"thought":["让这次聚会自然收尾","Let the meetup end"],"reply":["有可能。你今天觉得她挺好相处，这个感受是真的。至于下次有没有机会再认识，留到下次一起玩再看吧。","Could be. You did find her easy to get along with, and that feeling was real. If you get another chance to play together, see where it goes then."]}],"memories":[]},"4.2.5":{"time":"After the Meetup","lines":[["唉，行吧，那就当我多想了，不问不问了，就当认识个牌友，回家回家。","Ah, okay. Guess I read too much into it. I'm not asking, I'm not asking. Just someone to play cards with. Time to go home."],["他已经决定不问，准备回家。可以回应他把对方当牌友的决定，不用再替他设想另一种结果。","He's decided not to ask and is getting ready to leave. Let him leave it at having met someone to play cards with."]],"choices":[{"thought":["顺着他回家收尾","Let him call it a day"],"reply":["那今天就先到这儿。有人愿意接你的话，这局玩得也挺有意思。下次碰见，打个招呼就好。","That's a good place to leave it for today. Someone picked up on what you were saying, and it made the game fun. If you run into her again, you can just say hi."]}],"memories":[]},"4.3.1":{"time":"After the Meetup","lines":[["我今天玩桌游遇到个男的，是我同桌的表哥","I met a guy at board games today. He's my deskmate's older cousin."],["她特地说起今天遇到的男生，还交代了两人的关系。可以问问她为什么想到提他，先听她自己的感受。","She made a point of bringing up a guy she met and explained how they're connected. I can ask what made her think of him and hear her out first."]],"choices":[{"thought":["问问她对他的印象","Ask about her first impression"],"reply":["原来是你同桌的表哥。你今天跟他说上话了吗？他给你的第一印象怎么样？","Oh, your deskmate's older cousin. Did you get to talk to him today? What was your first impression?"]}],"memories":[]},"4.3.2":{"time":"After the Meetup","lines":[["哎呀，就是我感觉他性格还挺好的， 但是我没他微信咋办","So, I thought he seemed really nice. But I don't have his WeChat. What do I do?"],["她觉得对方性格好，也想继续认识他。她刚说那是同桌的表哥，可以建议先请同桌问问对方愿不愿意加。","She liked his personality and wants to know him better. She just said he's her deskmate's older cousin. She could have her deskmate check if he wants to add her."]],"choices":[{"thought":["请同桌问问他愿不愿意","Have her deskmate ask"],"reply":["可以找你同桌问一声，请她先问她表哥愿不愿意加。要是他也愿意，你们就有个机会继续聊今天的桌游。","Ask your deskmate if she'd check whether her cousin wants to add you. If he does, the game today gives you something to talk about."]}],"memories":[]},"4.3.3":{"time":"After the Meetup","lines":[["但是我不好意思给她说啊，之前谈的前男友太脑残她劝我我没听，我怕她又要说我了","But I'd feel so awkward asking her. My ex was a complete idiot. She warned me and I didn't listen. What if she gives me a hard time again?"],["她怕同桌把这次认识新人和上次恋爱联系起来。可以给她一句只谈桌游、先问能不能介绍的开场，也可以让她先放下。","She's afraid her deskmate will bring up her last relationship. I can give her an opening about playing again and getting introduced, or let her set it aside."]],"choices":[{"thought":["从下次桌游聊起","Bring up the next game"],"reply":["可以说「今天跟你表哥玩得挺开心，下次组局还想叫他。你能不能先问问他愿不愿意加个微信？」你只是想认识他，先把这件事说清楚就行。","Try: “I had fun playing with your cousin today. I'd like to invite him next time. Could you ask if he'd be up for adding me on WeChat?” You're just asking to get to know him. That's all you need to say."]},{"thought":["暂时先不问","Hold off for now"],"reply":["如果你现在一开口就得防着被说，今天也可以先放一放。刚见了一面，你可以等自己真想联系他时再问。","If you feel like you'd have to brace for a lecture just to ask, you can let it sit today. You've met him once. You can wait until you really feel like reaching out."]}],"memories":[]},"4.3.4":{"time":"After the Meetup","lines":[["可以可以，你太聪明了！我去问","Yeah, that'll work. You're so smart! I'll ask her."],["她愿意去问了。接下来需要让同桌先征求表哥的意见，可以确认这一步，让她不用现在就准备加上后要聊什么。","She's going to ask. Her deskmate needs to check with him first. I can confirm that step so she doesn't feel like she has to plan what to say after they add each other."]],"choices":[{"thought":["先把这一句问出去","Send that first question"],"reply":["嗯，你可以先这么开口。等散场你有机会单独跟她说，再问就行。","Yep, that's a good way to start. Ask her when you get a chance to talk to her alone after the game."]}],"memories":[]},"4.3.5":{"time":"After the Meetup","lines":[["嗯…那算了，不问了，万一她再唠叨我我更烦，就这样吧。","Hmm… forget it. I won't ask. If she starts lecturing me again I'll just get annoyed. Let's leave it."],["她想到同桌可能又说起前任，就决定不问了。可以让她按自己的决定收尾，不用反复说服她。","Thinking about another conversation about her ex has put her off asking. Let her call it without making a case for it again."]],"choices":[{"thought":["让她先把这事放下","Let it go for now"],"reply":["那今天就先不问。觉得他不错，和现在就得加微信，是两件可以分开想的事。","Okay, leave it for today. You can think he seems nice and decide to add him on WeChat some other time."]}],"memories":[]},"4.2.3-direct":{"time":"After the Meetup","lines":[["我直接问了，说下次玩还想叫她。她说可以加。她喊她同桌帮忙推一下，结果喊的是我妹。靠，问之前还觉得巨尴尬。","I asked her myself. Said I'd like to invite her next time we play. She said I could add her. Then she asked her deskmate to send over her contact, and it was my cousin she called over. Damn, I thought it was gonna be so awkward before I asked."],["他当面问了，对方答应加微信，随后由她的同桌推联系方式。可以肯定他已经把最难开口的一句说了，接下来等对方发过来就好。","He asked her himself and she said yes. Now her deskmate will share the contact. He's already said the hardest part. All he has to do now is wait for it to come through."]],"choices":[{"thought":["肯定他已经当面问过","Acknowledge that he asked"],"reply":["你当面问了，她也答应了。等你妹把微信推过来就行。真说出来以后，是不是比你刚才想的简单一点？","You asked her in person and she said yes. Now you just need your cousin to send you her WeChat contact. Was saying it out loud a little easier than you thought?"]}],"memories":[]},"4.3.6-direct":{"time":"After the Meetup","lines":[["我刚才还在想要不要问呢，他直接走过来，说下次玩还想叫我，问能不能加微信。我说可以，就叫我同桌帮我推一下。哎，省我开口了。","I was still wondering if I should ask, and he just came over. Said he'd like to invite me next time they play and asked if he could add me on WeChat. I said sure and asked my deskmate to send over my contact. Whew, saved me having to ask."],["他已经当面问过，她也答应了。现在只等同桌转发联系方式，可以回应她松了口气。","He's already asked in person and she's said yes. Now she's just waiting for her deskmate to share the contact. I can respond to how relieved she is."]],"choices":[{"thought":["接住她松了口气","Share her relief"],"reply":["嗯，你们当面说好了。等你同桌把微信推过去，想聊的时候就能直接聊了。","Yep, you worked it out in person. Once your deskmate sends over your WeChat contact, you two can talk whenever you feel like it."]}],"memories":[]},"4.end-no-contact":{"time":"After the Meetup","lines":[],"choices":[],"memories":[]},"5m.1.1-A":{"time":"WeChat · Day 1","lines":[["我妹说，那女生也找她要过我微信！那不就是我俩想到一块去了？现在加上了，我第一句发啥啊，别显得我准备半天似的。","My cousin says that girl asked her for my WeChat too! So we were both thinking the same thing? We've added each other now. What do I send first? I don't want it to sound like I've been working on it all day."],["两人都问过联系方式，他兴奋，也怕第一句显得太刻意。可以用桌游做开头，有共同话题，对方也容易接。","They both asked for each other's contact. He's excited, but doesn't want to sound scripted. They already have board games in common. That's an easy opening for her to answer."]],"choices":[{"thought":["给一句自然的开场","Give him an easy opening"],"reply":["可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。","You could send, “Hey, I sat next to you at board games. Remember me?” You've already met. You can just bring up that day."]}],"memories":[]},"5m.1.1-B":{"time":"WeChat · Day 1","lines":[["微信到手了，我妹牵的线。上次桌游我还输给她了。我对着输入框抠半天了，第一句咋整？总不能发个你好吧，像上门推销的。","Got her WeChat. My cousin put us in touch. She beat me at board games last time. I've been staring at the text box forever. What's my first line? I can't just say hello. I'll sound like a door-to-door salesman."],["联系方式有了，他卡在怎样开始。可以顺着他对桌游的印象给一句自嘲式开场，省去正式自我介绍的压力。","He has her contact but is stuck on how to begin. He can joke about losing the game and skip the formal introduction."]],"choices":[{"thought":["从输掉的桌游开口","Open with losing the game"],"reply":["你可以发「嗨，那天桌游输给你的那个，还记得吗？」有见过面的事可以聊，一句够用了。","You could send, “Hey, I'm the guy you beat at board games. Remember me?” You've already met, so one line is plenty."]}],"memories":[]},"5m.1.1-C":{"time":"WeChat · Day 1","lines":[["反转了兄弟，我还没想好咋开口呢，她先加我了！是不是我妹跟她说啥了？你说她这啥意思啊？","Plot twist, dude. I hadn't even figured out how to ask and she added me first! You think my cousin said something to her? What do you think it means?"],["她主动加了好友，他却开始猜妹妹有没有说过什么。能确定的是他们已经加上了，可以建议先打招呼，等她实际回应。","She added him first and now he's guessing what his cousin said. What he knows is that they're connected. He can say hi and see how she really responds."]],"choices":[{"thought":["先打招呼，看看怎么聊","Say hi and see what happens"],"reply":["至少她愿意加你。你可以先发「嗨，上次桌游玩得挺开心的」。她为什么先加，等你们聊几句可能就明白了。","She wanted to add you, at least. You can start with, “Hey, I had fun playing board games the other day.” You might get a better sense of why she added you once you talk."]}],"memories":[]},"5m.1.1-D":{"time":"WeChat · Day 1","lines":[["加上了，我妹给推的。我刚才当面都敢问，怎么打个招呼又卡住了。你说第一句咋发？","We're connected. My cousin sent her contact over. I managed to ask in person, so why am I freezing up just saying hi? What should I send first?"],["他当面问到了联系方式，第一句反倒有点紧张。可以从两人一起玩的桌游开口。","He managed to ask in person, but sending the first message makes him nervous. He can start with the game they played together."]],"choices":[{"thought":["给一句自然的开场","Give him an easy opening"],"reply":["可以问一句「嗨，上次桌游坐你旁边的，还记得我吗？」你们已经见过了，提那天的事就行，不用再找个特别的由头。","You could send, “Hey, I sat next to you at board games. Remember me?” You've already met. You can just bring up that day."]}],"memories":[]},"5m.1.2":{"time":"WeChat · Day 1","lines":[["想了想，你给的那句我有点发不出来。我自己写了个：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。咋样，会不会有点傻？","I thought about it and I don't think I can send your line. I wrote one myself: “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” How's that? Too dumb?"],["他改成了自己会说的话，还提了十一点睡觉。开头能让对方想起见面的情景，后半句也留了能接的话题。","He's rewritten it in his own words and mentioned going to bed at eleven. The first part reminds her how they met, and the second gives her something to respond to."]],"choices":[{"thought":["就用他自己写的这句","Use the line he wrote"],"reply":["挺像你会说的话。「还记得我不」好接，十一点必睡也有点好笑。就照这句发吧。","That sounds like you. “Remember me?” is easy to answer, and the eleven o'clock rule is kind of funny. Send it as it is."]}],"memories":[]},"5f.1.1-A":{"time":"WeChat · Day 1","lines":[["我同桌说，她表哥也找她要过我微信。等于我俩互相问了一遍？刚加上，他就发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？","My deskmate says her cousin asked for my WeChat too. So we both asked her? We just added each other and he sent, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Why is he giving me his bedtime right off the bat? How do I answer?"],["她发现对方也主动问过联系方式，对他的开场觉得好笑。可以给一句轻松的回复，既回答还记不记得，也顺着十一点睡觉开个玩笑。","She found out he asked for her contact too. His opening made her laugh. She can answer his question and tease him about going to bed at eleven."]],"choices":[{"thought":["顺着十一点的梗回","Play along with the bedtime joke"],"reply":["回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。","“I remember. It's almost your bedtime, too” sounds natural. It tells him you remember and lets you tease him a little. See where the conversation goes from there."]}],"memories":[]},"5f.1.1-B":{"time":"WeChat · Day 1","lines":[["磨半天终于把他加上了，开场白还没憋出来呢，他先发来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。行吧，省得我想了。咋接？","I finally added him after putting it off forever. I hadn't even come up with an opening when he sent, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Well, that saves me the trouble. What do I say?"],["她先加了好友，又因为对方先开口松了口气。对方已经提供了见面和睡觉两个话题，可以直接接他的句子。","She added him first and is relieved he got the conversation going. He's given her both the game and his bedtime to talk about. She can just pick up where he left off."]],"choices":[{"thought":["接住他先递来的话","Pick up what he started"],"reply":["可以回「记得，你也要到点睡了」。他给了现成的话题，你按平时说话的样子接一句就行。","You could say, “I remember. It's almost your bedtime, too.” He's given you something to talk about. Just say it the way you normally would."]}],"memories":[]},"5f.1.1-C":{"time":"WeChat · Day 1","lines":[["我同桌那个表哥加我了。我刚点通过，他消息就来了：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人是有多着急，哈哈。回啥好啊？","My deskmate's cousin added me. I hit accept and his message came right in: “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Someone's in a hurry, haha. What should I say?"],["他发消息的速度让她觉得好笑，她也在考虑怎么回应。可以给一句低压力的答复，聊天要不要继续，等她自己感受。","How fast he messaged made her laugh. She's wondering how to answer. Give her an easy reply and leave it to her how much she wants to keep talking."]],"choices":[{"thought":["先回一句，再看怎么聊","Reply and see how it goes"],"reply":["可以回「记得，你也要到点睡了」。顺着他的梗逗一句就行，接下来想聊多少，看你自己舒服不舒服。","You could say, “I remember. It's almost your bedtime, too.” Tease him a little about the bedtime thing. Then keep talking as long as you feel like it."]}],"memories":[]},"5f.1.1-D":{"time":"WeChat · Day 1","lines":[["那个刚才当面问我的男生，加上了。我同桌把我微信推给他了。他刚发：『hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡』。这人怎么连睡觉时间都一起报了，我咋回啊？","The guy who asked me in person just added me. My deskmate sent him my WeChat. He just wrote, “hi, I sat next to you at board games. Remember me? Fair warning, I keep old people hours. Asleep by eleven, no exceptions.” Why is he giving me his bedtime right off the bat? How do I answer?"],["她已经收到他的第一条消息，觉得开场好笑。可以给一句轻松的回复，顺着十一点睡觉开个玩笑。","She's got his first message and thinks it's funny. She can reply lightly and tease him about going to bed at eleven."]],"choices":[{"thought":["顺着十一点的梗回","Play along with the bedtime joke"],"reply":["回「记得，你也要到点睡了」就挺自然。你记得他，也能逗他一句，后面看你们聊到什么。","“I remember. It's almost your bedtime, too” sounds natural. It tells him you remember and lets you tease him a little. See where the conversation goes from there."]}],"memories":[]},"5m.1.3":{"time":"WeChat · Day 1","lines":[["发了！四十来分钟才回，就一句『记得，你也要到点睡了』。我看了半天，这算是想聊还是在跟我说晚安啊？","Sent it! Took her like forty minutes to reply, and all she said was “I remember. It's almost your bedtime, too.” I've been looking at it forever. Is she trying to chat or saying good night?"],["他在用等待的时间猜对方态度。原话既回应了自我介绍，也顺着他提到了睡觉。可以自然道晚安，也可以用桌游接一句。","He's reading her attitude into how long she took to answer. She answered his question and picked up on his bedtime joke. He can say good night or keep talking about board games."]],"choices":[{"thought":["先道晚安","Say good night"],"reply":["她至少接住了你十一点睡觉的梗，四十分钟说明不了更多。你可以回「还没到点呢，我先去洗漱了，晚安」。第一晚聊到这儿也挺好。","She got your joke about going to bed at eleven. Forty minutes doesn't tell you much else. You can say, “Not bedtime yet. I'm gonna get ready for bed, though. Good night.” That's a fine place to end the first night."]},{"thought":["接着聊桌游","Keep talking about board games"],"reply":["要是还想聊，就回「还早呢。桌游我输你的那局还没扳回来，什么时候再战？」有个她能接的话题，聊到哪算哪。","If you want to keep talking, try, “Still early. I haven't made up for losing to you at board games. When's the rematch?” It gives her something to answer. See where it goes."]}],"memories":[]},"5m.1.4":{"time":"WeChat · Day 2","lines":[["昨晚听你的，道了晚安就真睡了，还赶在十一点前，破天荒。今早她又找我聊了两句。也没啥事，就是我还想跟她多说会儿，老想点开那个框。","I took your advice last night. Said good night and actually went to bed. Before eleven, even. There's a first. She messaged me again this morning. It was nothing big. I just wanted to talk more and keep opening the chat."],["道晚安之后，女生仍主动联系。他惦记的是没聊够，可以肯定这个感受，同时用今早的情况帮他放下对昨晚收尾的顾虑。","She reached out after he said good night. He wishes they'd talked longer. I can acknowledge that and point to this morning so he doesn't have to worry about how he left things last night."]],"choices":[{"thought":["昨晚收得早，今天还能聊","They can still talk today"],"reply":["昨晚那句晚安没把话聊死，今早她还来找你了。想再多聊两句很正常，有事想跟她说的时候再发就行。","Saying good night didn't end the conversation for good. She came back this morning. Of course you want to talk a little more. Send something the next time you've got something to say."]}],"memories":[]},"5m.1.5":{"time":"WeChat · Day 2","lines":[["昨晚顺着翻盘那个梗还真聊起来了，聊到十一点多。十一点必睡，当天就倒了，笑死。她后来跟我说晚安。结果今天到现在一条没有……我昨晚是不是聊太多了？","The rematch joke actually got us talking last night, past eleven. Asleep by eleven, no exceptions, and I blew it on day one lol. She said good night later. Now it's been all day and nothing… Did I talk too much last night?"],["昨晚聊得投入，今天暂时安静，他把两件事联系起来了。先指出昨晚有正常收尾，今天的沉默还不足以判断她的态度。","The conversation went well last night and today has been quiet. He's connecting the two. They said good night normally. Today's silence doesn't tell him how she feels."]],"choices":[{"thought":["先让他别盯着回复","Take his eyes off the chat"],"reply":["你们昨晚聊得起来，最后也正常道了晚安。今天还没消息，先别拿它给昨晚判分。做点自己的事，晚些再看。","You got talking last night and said good night like normal. She hasn't messaged yet today. You don't have to use that to grade last night. Do something of your own for now and check later."]}],"memories":[]},"5f.1.2":{"time":"WeChat · Day 2","lines":[["昨晚我先回了句『记得，你也要到点睡了』，本来就随口一逗。这两天聊下来比我想的舒服，有话就接，我没回他也没催。今天他发了几条，我忙着还没仔细回。晚上有空了，我去找他唠两句。","Last night I just said “I remember. It's almost your bedtime, too” to tease him. Talking these last couple of days has been easier than I expected. We pick up when there's something to say, and he doesn't chase me if I don't answer. He sent a few things today and I've been too busy to really reply. I'll go chat a little tonight when I have time."],["她觉得这几次聊天没有催促，也有了主动继续聊的意愿。可以肯定她想联系就去联系，按她现在有空的节奏开始。","She hasn't felt rushed in these conversations and feels like reaching out herself. She can start when she has time, at a pace that feels good to her."]],"choices":[{"thought":["顺着她主动联系的念头","Encourage her to reach out"],"reply":["你现在有空，也有话想跟他说，就去聊两句吧。前面的消息挑一个你真想接的回，剩下的不用补作业。","If you've got a minute now and feel like talking to him, go ahead. Pick whichever earlier message you actually want to answer. The rest isn't homework."]}],"memories":[]},"5m.1.6":{"time":"WeChat · Day 2","lines":[["刚聊完！她晚上主动来找我了，一聊就一个多钟头。其实也没啥大事，东一句西一句的，还挺舒服。我白天还在那儿瞎想，现在感觉也不用老算她多久回了。","Just finished talking! She messaged me first tonight and we talked for over an hour. Nothing big, just this and that. It felt pretty easy. I was overthinking it all day. Now I feel like I don't have to keep timing her replies."],["他收到女生的主动联系，注意力从回复间隔回到了聊天本身。可以回应这次体验，让他把舒服的来往当作参考。","She reached out first. He's paying attention to the chat instead of the gaps between replies. I can respond to that and help him use the way it felt as a reference."]],"choices":[{"thought":["肯定这次轻松的来往","Acknowledge how easy it felt"],"reply":["你开始在意的是这一个钟头聊得舒不舒服了。能东一句西一句聊这么久，听着挺自在。下次有想说的话，再接着聊就行。","Now you're thinking about how that hour felt. An hour of talking about whatever comes up sounds pretty easy. Next time you've got something to say, you can just pick up from there."]}],"memories":[]},"5f.1.3":{"time":"WeChat · Day 3","lines":[["他回消息也太勤快了……我下班一看攒了一堆。不是不想理他，就是累，连回啥都懒得想。对了，他头像是只小熊，看着挺憨。哎，今晚我就想回个什么，让他知道我看见了。","He replies so much… I got off work and there was a whole pile of messages. I do want to talk to him, I'm just tired. I can't even be bothered thinking of what to say. Oh, his profile pic is a bear. Looks kind of goofy. Anyway, tonight I just want to send something so he knows I saw them."],["她看见了消息，也想让对方知道，但下班后没有精力长聊。可以建议直接说明今天很累，或用一个表示累了的表情先回应。","She wants him to know she saw the messages, but doesn't have the energy for a long conversation after work. She could tell him she's tired or send a reaction that says it for her."]],"choices":[{"thought":["直接说今天累了","Say she's tired today"],"reply":["可以回「下班瘫了，今天回不动了」。他知道你在休息，你也不用边累边想怎么把每条都回得有意思。","Try, “I got home from work and I'm wiped. Don't have it in me to reply tonight.” Then he knows you're resting, and you don't have to make every answer interesting when you're exhausted."]},{"thought":["发个表情先接一句","Send a reaction for now"],"reply":["懒得打字就丢个摊倒的表情，让他知道你看见了。想好好聊的话，等有精神的时候再聊。","If typing sounds like too much, send a sticker of someone flopping over so he knows you saw it. You can talk properly when you have the energy."]}],"memories":[]},"5f.1.4":{"time":"WeChat · Day 3","lines":[["我真照你说的说累了。结果他秒回一大段，什么『好好休息』『别太拼』『记得吃晚饭』……排比句都出来了。我本来就回不动，看见那一大段更不知道说啥，就回了个嗯。我是不是有点不知好歹？","I did what you said and told him I was tired. He sent me a whole paragraph instantly. “Get some rest,” “don't push yourself,” “remember to eat dinner”… He was practically writing poetry. I already had no energy to reply, and after all that I had even less idea what to say. I just went “mm.” Am I being ungrateful?"],["她直说累了，对方给了很多关心，她反而一时不知道怎么接。可以肯定她已经回应过，接不动时先休息，也不必现在评价这份关心。","She told him she was tired and got a lot of care back. She didn't know how to answer it all. She's answered him already. She can rest without having to decide how she feels about it now."]],"choices":[{"thought":["让她先歇一会儿","Let her rest"],"reply":["你已经跟他说今天很累了，回个「嗯」也够了。他想关心你，你现在接不动，两件事都说得通。先歇会儿，明天有精神再聊。","You already told him you were tired. An “mm” is enough. He wanted to look after you, and you didn't have it in you to keep talking. Both make sense. Get some rest and talk tomorrow if you're up for it."]}],"memories":[]},"5f.1.5":{"time":"WeChat · Day 3","lines":[["丢了个摊倒的表情过去，他正经回我『你早点休息』，还带了个他自己的表情包，土得掉渣。就是……有点可爱。算了，我洗漱去了。","I sent him a sticker of someone flopping over and he seriously wrote “Get some rest,” with his own sticker. It was so corny. It was also… kinda cute. Whatever, I'm getting ready for bed."],["她用一个表情回应了消息，对方也顺着聊了两句。她觉得那份认真有点可爱，现在想收尾，可以轻松接一句。","She sent a sticker and he answered in his own way. She found his earnestness kind of cute. She's wrapping up, so something light is enough."]],"choices":[{"thought":["顺着这个小插曲收尾","End on that little moment"],"reply":["土得可爱也是一种可爱。今天回到这儿就挺好，去洗漱吧。","Corny cute is still cute. That's a good place to leave it tonight. Go get ready for bed."]}],"memories":[]},"5m.2.1":{"time":"WeChat · Day 9","lines":[["又聊了一个礼拜。她回得慢但都会回，我好像也习惯了。今天她在家加班，还给我发了张照片，配一个『困』。她的猫踩着键盘抢镜，叫煤球，特别敬业。你说她这算不算有点把我当自己人了？","We've been talking for another week. She takes a while to reply, but she always does. I think I'm used to it now. She was working late at home today and sent me a pic with “sleepy.” Her cat was stepping all over the keyboard, stealing the shot. His name's Coalball. Very dedicated. You think this means she sees me as one of her people now?"],["她主动分享加班和猫的照片。他把稳定的来往理解成亲近，可以肯定这个具体变化，再建议顺着她发来的内容回应。","She sent him a casual photo of herself working late and her cat. He reads their steady contact as closeness. I can point to the specific change and suggest answering what she sent."]],"choices":[{"thought":["顺着照片聊两句","Say something about the photo"],"reply":["她愿意把这种随手拍的日常发给你，至少跟你聊天是自在的。可以回一句「煤球今天也加班啊」，再让她忙完早点歇。先聊这张照片就挺好。","She's comfortable enough to send you a random photo from her day. You could say, “Coalball putting in overtime too?” and tell her to get some rest when she's done. The photo's enough to talk about for now."]}],"memories":[{"label":"都会回","name":"Always replies","quote":["她回得慢但都会回","She takes a while to reply, but she always does"]}]},"5m.2.2":{"time":"WeChat · Day 10","lines":[["我现在一天能给她发八百条『在干嘛』。她有时候隔俩小时才回，我就又点开那个框看，明明啥都没响。客观说，我是不是有点上头？","At this point I send her “what are you up to” eight hundred times a day. Sometimes she takes two hours to reply and I keep opening the chat when I know my phone hasn't gone off. Objectively, am I getting a little carried away?"],["他开始留意自己的消息频率，也发现等待让他不安。可以试着少发重复问候，或保留自然分享，同时给对方留出回话的时间。","He's noticed how often he's messaging and how anxious he gets waiting. He can cut back on repeated check-ins, or keep sending things naturally and leave her time to answer."]],"choices":[{"thought":["试试少发重复问候","Ease up on the check-ins"],"reply":["有点，但你已经发现自己在等什么了。今天试试少发几次「在干嘛」，真有事想分享再发，看看空下来的时候你是什么感觉。","A little. You've noticed what you're waiting for, though. Try sending “what are you up to” fewer times today. If you've got something you really want to share, send that, and see how you feel in between."]},{"thought":["有话就聊，给她时间回","Share things, give her time"],"reply":["想跟她说话很正常。碰到好玩的就发一条，她忙的时候先去做你的事，等她有空再接着聊。","It's normal to want to talk to her. Send something when you come across something fun. When she's busy, go do your own thing and pick up again when she's free."]}],"memories":[]},"5m.2.3":{"time":"WeChat · Day 10","lines":[["今天试着少发了，话打了删删了打，最后就发了句晚安。她回得跟平时一样，也没问我咋这么安静……我感觉我在演一个淡定的人。","I tried sending less today. Kept typing and deleting and all I sent in the end was good night. She replied like usual. Didn't even ask why I was so quiet… I feel like I'm doing an impression of someone who's chill."],["他减少了发消息的次数，对方的回复没有明显变化。他仍然不舒服，可以帮他区分想聊的心情和刻意压住自己的做法。","He's sent fewer messages and her replies haven't changed much. He's still uneasy. I can help him separate wanting to talk from making himself hold it in."]],"choices":[{"thought":["让他留点自己舒服的节奏","Find a pace he can live with"],"reply":["少发一天也会难受，毕竟你原本就想找她说话。真有事想分享，可以照常发，没必要把自己练成一个从来不主动的人。","Even one day of sending less can feel rough when what you really want is to talk to her. If you've got something to share, go ahead. You don't have to train yourself to never start a conversation."]}],"memories":[]},"5m.2.4":{"time":"WeChat · Day 10","lines":[["今天还是想找她就找了，发了好几回。她有时候一个『哈哈哈』隔俩小时才来。我有一阵真像在对着屏幕自己跟自己聊天，笑死。","Today I still messaged her whenever I felt like it. A bunch of times. Sometimes it takes two hours to get a “hahaha.” For a while I really felt like I was just talking to myself through a screen lol."],["他继续主动联系，回复的节奏还是不同。现在已经有了一段日常往来，可以建议约一次见面，让他看看两人当面相处的感觉。","He kept reaching out and their reply speeds still differ. They've been talking for a while now. Meeting in person would give him a chance to see what being together feels like."]],"choices":[{"thought":["把话题转向见面","Bring up meeting in person"],"reply":["隔着屏幕，有时候只能等她有空。你们已经聊了一阵了，可以问问她哪天愿意出来吃个饭，当面相处一会儿，可能比来回猜回复轻松。","Over text, sometimes all you can do is wait until she's free. You've been talking for a while. You could ask if she'd like to grab dinner sometime. Being together might feel easier than guessing at replies."]}],"memories":[]},"5m.2.5":{"time":"WeChat · Day 11","lines":[["今天还是这样，不找吧心里老惦记，找吧又怕她嫌烦。线上聊得再欢，她一忙我就在这儿干等着。咋整啊？","Same today. If I don't message her, I keep thinking about it. If I do, I worry I'm annoying her. However much fun we're having online, the minute she gets busy I'm just sitting here waiting. What do I do?"],["控制发消息的频率没有解决他的顾虑。他想要一次能专心相处的机会，可以把见面作为具体建议，让对方按自己的时间答复。","Sending fewer messages hasn't settled his worries. He wants time together where they can both be present. Suggest meeting and let her tell him when she's free."]],"choices":[{"thought":["试着约一次见面","Try asking her out"],"reply":["可以试试约她吃个饭。你们聊了这么久，有机会当面说话，你也能看看自己跟她待一块是什么感觉。先问她哪天方便就好。","You could ask her to get dinner. You've been talking for a while. In person, you can see how it feels to spend time together. Just ask when she's free."]}],"memories":[]},"5f.2.1":{"time":"WeChat · Day 11","lines":[["这一周多一直断断续续聊着。他今天突然夸我开朗，说『跟你聊天不累』。那是，我不在办公室他们都没那么热闹，周末也老有人叫我出去。他坐那儿话倒不多，手机上还天天找我。反正听他夸我还挺开心的，嘿嘿。","We've been chatting on and off for over a week. Today he suddenly said I'm outgoing and that “Talking to you never feels like work.” Well, yeah. The office is way quieter without me and people are always asking me out on weekends. He's quiet when he's sitting there in person, then on his phone he's messaging me every day. Anyway, it felt really good to hear him say it, heh."],["她喜欢被他说聊天不累，也享受自己能让大家聊起来。可以回应这份开心，也可以借机问问，累的时候她更愿意怎么和人相处。","She liked hearing that talking to her feels easy and enjoys getting people talking. I can share in that or ask how she likes to be around people when she's worn out."]],"choices":[{"thought":["顺着她的开心聊","Share her delight"],"reply":["你确实喜欢跟人聊天，也能让场子热起来。他说跟你聊天不累，你听了开心也正常，有些夸奖好听就是因为对方说到了你喜欢自己的地方。","You really do like talking to people, and you get a room talking. It makes sense that hearing him say it's easy with you felt good. Some compliments land because someone notices something you already like about yourself."]},{"thought":["问问她累时愿意找谁","Ask who she turns to when tired"],"reply":["跟谁都能聊是你的长处。我还想问一个小问题，你累了、平时那股劲儿没了的时候，有没有谁是你还愿意单独找的？没想到也没关系。","Being able to talk to anyone is a strength. I've got one little question: when you're tired and don't have your usual energy, is there anybody you'd still want to talk to one-on-one? It's okay if no one comes to mind."]}],"memories":[]},"5f.2.2":{"time":"WeChat · Day 11","lines":[["晚上跟闺蜜吃饭，不知道怎么又说起他了。我说有个闷葫芦天天找我聊天，她们立马开始起哄。我还说就是普通朋友啊，结果回家路上自己一直笑。烦死了。","I was having dinner with my best friends and somehow brought him up again. I said there was this quiet guy who messages me every day, and they immediately started teasing me. I kept saying we're just friends, then smiled all the way home. So annoying."],["她嘴上坚持普通朋友，回家路上却还在笑。她来分享的是被说中心事的有趣，可以顺着玩笑回应，不替她确定两人的关系。","She insists they're just friends, but she was still smiling on the way home. She's sharing how funny it was to get called out. I can play along without deciding what they are for her."]],"choices":[{"thought":["顺着她嘴硬的玩笑","Play along"],"reply":["你把人叫闷葫芦，还专门带去饭桌上讲，难怪她们起哄。先让你们当普通朋友吧，今天笑这一路也挺好。","You called him the quiet guy and still made a point of bringing him up at dinner. No wonder they teased you. We'll call you two just friends for now. A smile all the way home is pretty nice."]}],"memories":[]},"5f.2.3":{"time":"WeChat · Day 11","lines":[["睡前又想了下你问的那个。还真想不出来。我累了就点个外卖，自己刷会儿手机，也不想找谁。明明平时跟谁都能聊，真想说点啥了好像又差一口气……说不上来，今晚有点怪怪的。","I thought about your question again before bed. I really can't think of anyone. When I'm tired I order delivery, scroll on my phone for a bit, and don't feel like talking to anybody. I can talk to anyone normally, but when I actually want to say something it feels like something's missing… I can't explain it. Tonight feels kind of weird."],["她认真想了白天的问题，发现平时热闹和疲惫时想找谁是两回事。她还说不清这份失落，可以先回应她的发现，不急着建议她改变交友方式。","She thought about the question and realized being sociable isn't the same as having someone to turn to when she's tired. She can't quite name what's bothering her. Let her stay with what she noticed."]],"choices":[{"thought":["先陪她把这点说清楚","Help her name the feeling"],"reply":["平时跟大家聊得来，和累的时候想自己待着，都很正常。你今天只是发现了自己有时会想跟谁更近一点。先把这句话留着，不用今晚就想出那个人是谁。","Getting on with everyone and wanting time alone when you're tired both make sense. Today you noticed that sometimes you want to feel a little closer to someone. You can sit with that for now. You don't have to know who it is tonight."]}],"memories":[]},"5f.2.4":{"time":"WeChat · Day 12","lines":[["他今天问我家是哪儿的、家里都有谁，我顺手聊别的去了。他也没接着问。这点我还挺喜欢的，换个人一通问我早烦了。","He asked where my family was from today and who was in it. I just changed the subject, and he didn't keep asking. I liked that about him. If someone else started firing off questions I'd be annoyed already."],["她觉得被尊重，因为把话题转开后对方没有追问。可以肯定具体的分寸感，不需要由这一次聊天判断两人整体相处得怎样。","She felt respected when he didn't press after she changed the subject. I can acknowledge what he did without drawing conclusions about the whole relationship from one chat."]],"choices":[{"thought":["回应她喜欢的分寸感","Acknowledge what she liked"],"reply":["他看你没接那个话题，也就跟着聊别的了。你喜欢这种自在挺正常，家里的事什么时候想说，由你决定。","He saw you didn't pick up that topic and followed you onto the next one. It makes sense that felt easy. You get to decide when you want to talk about your family."]}],"memories":[]},"5m.3.1":{"time":"WeChat · Day 12, Evening","lines":[["行，听人劝吃饱饭。我想约她周六出来吃个饭。上次桌游我还输给她了。直接问周六有空吗，会不会显得有点猴急？","Okay, okay, I'll take the advice. I want to ask her to dinner Saturday. She beat me at board games last time. If I just ask if she's free Saturday, will I look like I'm rushing it?"],["他已经决定约饭，想把邀请说得自然。可以用两人都知道的桌游输赢作由头，给出具体时间，让她有余地答复。","He's decided to ask her to dinner and wants it to feel natural. He can use the game they both remember, name a day, and leave her room to answer."]],"choices":[{"thought":["用桌游的事开口约饭","Ask her out through the game"],"reply":["可以发「周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭」。约什么、哪天约都清楚，她也可以按自己的安排回你。","Try, “Are you free Saturday night? I still haven't gotten you back for beating me at board games. Let me take you to dinner.” She knows what you're asking and when, and can answer based on her own plans."]}],"memories":[]},"5f.3.1":{"time":"WeChat · Day 12, Evening","lines":[["他问我『周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭』。我答应了，还挺会找台阶的。我同桌就是他表妹，兜了一圈还真约上了。就是明天项目有个节点，搞不好得加班。要真累成那样我也不想临时鸽他。还有，见面我要注意啥吗？","He asked, “Are you free Saturday night? I still haven't gotten you back for beating me at board games. Let me take you to dinner.” I said yes. Smooth excuse, actually. My deskmate is his cousin. All that going around and now we're really meeting up. Only thing is we've got a project deadline tomorrow and I might have to work late. If I'm that wiped out, I don't want to cancel on him last minute. Also, anything I should keep in mind when I see him?"],["她已经答应见面，也想到工作可能影响安排。可以给一个轻松的见面建议，再提醒如果时间有变，早点告诉对方。","She's already agreed to meet him and realizes work could affect the plan. Keep the advice about meeting simple, and remind her to let him know early if the timing changes."]],"choices":[{"thought":["让她按平时相处，有变提前说","Keep it natural and flag changes early"],"reply":["见面就聊你们平时会聊的事，桌游都打过了，不用专门准备话题。要是明天忙完发现周六实在不行，提前告诉他，再提个你能去的时间。","Talk about whatever you usually talk about. You've already played board games together. No need to prepare topics. If work makes Saturday impossible, tell him in advance and suggest a time you can do."]}],"memories":[{"label":"同桌是表妹","name":"Deskmate is his cousin","quote":["我同桌就是他表妹","My deskmate is his cousin"]}]},"5m.3.2":{"time":"Friday · Change of Plans","lines":[["她说周六来不了了，项目临时有个节点，问改周日行不行。还发了个不好意思的表情。我知道她说了周日，但我还是有点不得劲。会不会其实不想来啊？","She can't come Saturday. Something came up on her project and she asked if Sunday works. She sent a little sorry sticker, too. I know she said Sunday, but it still feels off. What if she just doesn't want to come?"],["原来的约定改了，他有些失落。她给出了具体的替代日期，这能回应他担心约会取消的问题，仍无法从一句话确定她的心情。","The change disappointed him. She offered a specific day instead. That helps with his fear it's off entirely, but a message can't tell him how she feels."]],"choices":[{"thought":["先把周日约下来","Settle on Sunday"],"reply":["你本来在等周六，失落也正常。她主动提了周日，目前你们还有见面的安排。可以回「行，周日，你忙你的」，先把这次改期接下来。","You were looking forward to Saturday. It makes sense you're disappointed. She suggested Sunday herself, so you're still set to meet. You can answer, “Okay, Sunday. Do what you need to do,” and take it from there."]}],"memories":[]},"5f.3.2":{"time":"Friday · Change of Plans","lines":[["乌鸦嘴，项目真炸了。周六去不了，我跟他说改周日行不行。他就回了句『行，周日，你忙你的』。我看了好几遍，怎么有点像不高兴？","I totally jinxed it. The project blew up. Saturday's out, so I asked if Sunday would work. All he wrote was “Okay, Sunday. Do what you need to do.” I've read it over and over. Doesn't he sound kind of upset?"],["他同意改到周日，回复短，她担心改期让他失望。情绪还无法确认，可以建议她补一句自己仍期待见面，让对方知道这次变动是工作所致。","He agreed to Sunday in a short reply. She's worried the change disappointed him. I can't tell how he's feeling. She could add that she's still looking forward to it, so he knows it was about work."]],"choices":[{"thought":["补一句她还想见面","Say she's still looking forward to it"],"reply":["他答应周日了，单看这句话还看不出有多介意。你要是也期待见面，可以补一句「周日见啊，我还是挺想去的」。事情变了，把你在意的部分说清楚就好。","He agreed to Sunday. That one line doesn't tell you how put out he is. If you're looking forward to it, say, “See you Sunday. I still really want to go.” The plans changed. You can tell him the part that matters to you."]}],"memories":[]},"5m.3.3":{"time":"Sunday Night · After the Date","lines":[["见完了！吃饭散步聊了三个多小时，临走还拍了张合照。她问我下次想吃啥，说她想吃烤肉，下回带我吃。吃饭时她回了好几条工作消息，我坐那儿有点不知道干啥。还有个事，我跟她说，有次她半天没回，我半夜还刷她朋友圈，看她睡了没。她笑了下，说『你想得可真多』。我这话是不是说多了？","Just got back! We ate and walked and talked for over three hours. Took a photo together before we left. She asked what I wanted to eat next time. She said she was craving barbecue and would take me next time. She answered a few work messages over dinner and I just sat there not knowing what to do. One other thing: I told her about the time she didn't reply for half a day and I was up at midnight scrolling through her Moments to see if she'd gone to bed. She laughed a little and said, “You really do overthink things.” Did I say too much?"],["他既高兴她主动提下次，又担心自己那句坦白让她不舒服。她回了工作消息，也有继续见面的表示。可以分别回应这两件事，先不替她解释那声笑。","He's happy she brought up a next time and worried his admission made her uncomfortable. She answered work messages and also suggested meeting again. I can address each without deciding what her laugh meant."]],"choices":[{"thought":["回应见面的好感和他的顾虑","Address the date and his worry"],"reply":["她主动提了下次吃烤肉，这个信号比你回想她笑得像不像介意更具体。回工作消息那几分钟，你坐着会尴尬也正常。至于那句「你想得可真多」，目前听不出她有多介意，下次相处时留意她怎么回应就好。","She brought up getting barbecue next time. That's more concrete than trying to remember how much her laugh sounded like it bothered her. Feeling awkward while she answered work messages makes sense. As for “You really do overthink things,” it's hard to tell how much it bothered her. See how she responds next time you're together."]}],"memories":[{"label":"想吃烤肉","name":"Craving barbecue","quote":["说她想吃烤肉","she was craving barbecue"]}]},"5f.3.3":{"time":"Sunday Night · After the Date","lines":[["吃完了！本来还怕见了尴尬，结果吃饭散步聊了三个多小时，临走还拍了张合照。饭吃到一半我还回了好几条工作消息，回完他也能接上。散步的时候他跟我说，有次我半天没回，他半夜还在刷我朋友圈，看我睡了没。我愣了一下，笑着说『你想得可真多』。不过我后来还在想，是不是家里给了特别多爱，才这么会关心人？吃啥逛啥他都听我的，也挺省心。","We just got done! I thought it might be awkward, but we ate and walked and talked for over three hours. Took a photo together before leaving. I answered a few work messages halfway through dinner, and he picked right back up when I was done. On the walk he told me about the time I didn't reply for half a day and he was up at midnight scrolling through my Moments to see if I'd gone to bed. I paused, then laughed and said, “You really do overthink things.” But later I wondered, did he grow up with a lot of love at home to be this good at looking after people? He went along with whatever I wanted to eat and wherever I wanted to go. It was pretty easy."],["她觉得见面舒服，也把他的关注往关心上想。她听到半夜刷朋友圈时确实愣了一下。可以同时回应这两种感受，家庭情况要等他自己说。","She enjoyed their time and took his attention as caring. She did pause when she heard about him checking her Moments at midnight. I can acknowledge both feelings and leave his family for him to talk about."]],"choices":[{"thought":["让她保留开心和那一下意外","Make room for both feelings"],"reply":["你们今天聊得来，临走还拍了照，难怪你心里挺开心的。听到他半夜还在刷你朋友圈，你也确实愣了一下。开心和有点意外可以同时有。至于他家里怎么样，等他自己讲，比你现在猜得准。","You got on well and took a photo together before leaving. Of course you're happy. Hearing he'd been checking your Moments at midnight did catch you off guard. You can feel happy and a little surprised at once. As for his family, you'll know more when he tells you himself."]}],"memories":[{"label":"半夜刷朋友圈","name":"Midnight on Moments","quote":["他半夜还在刷我朋友圈，看我睡了没","he was up at midnight scrolling through my Moments to see if I'd gone to bed"]},{"label":"家里有爱","name":"Lots of love at home","quote":["是不是家里给了特别多爱，才这么会关心人","did he grow up with a lot of love at home to be this good at looking after people"]}]},"5m.3.4":{"time":"Sunday Night · After the Date","lines":[["睡前最后问一句。就这两周，我还有戏吧？我上次这么上心，还是给我表妹辅导作业的时候。","One last thing before bed. After these two weeks, I've got a shot, right? Last time I put this much effort into anything was helping my cousin with her homework."],["他想知道这两周的来往有没有继续发展的可能。今天她和他聊了三个多小时，还主动提了下次吃烤肉。可以用今天的事回应他的担心。","He wants to know if these two weeks could lead somewhere. They talked for three hours today and she brought up going out for barbecue. I can answer with what did happen."]],"choices":[{"thought":["用已经发生的事给他判断","Go by what happened"],"reply":["今天聊了三个多小时，她还提了下次一起吃烤肉，至少她愿意继续跟你见面。至于你们会不会谈恋爱，得等真的聊到这一步才知道。","You talked for over three hours and she brought up getting barbecue together next time. At the very least, she wants to see you again. You'll find out if you're going to date when the two of you actually talk about it."]}],"memories":[]},"5f.3.4":{"time":"Sunday Night · After the Date","lines":[["躺下了又想起来，他啥都听我的，这点其实我有点介意。但跟他待着是真不用费脑子。前几天家里的事我没接着聊，他也就没问了。可能……我就是想跟一个相处起来不费劲的人待着吧。","I lay down and thought of this again. He leaves everything up to me, and it actually bothers me a little. But being with him takes no effort. The other day I didn't get into the family thing, and he didn't ask again. Maybe… I just want to be with someone who's easy to be around."],["她喜欢不用费力维持气氛，也还没确定自己是否喜欢一直由她拿主意。可以把这两个感受分开回应，后面相处时再看她最在意哪一点。","She likes that she doesn't have to keep the conversation going herself. She's less sure she likes making every decision. I can address those separately and let her see which matters more over time."]],"choices":[{"thought":["分开说舒服和总要拿主意","Separate ease from deciding everything"],"reply":["你喜欢的是跟他待着不用撑场面，这点挺具体。至于去哪儿、吃什么老要你定，你要是哪次嫌累了，也可以跟他说让他挑一次。","You like that you don't have to work to keep things going around him. That's something specific. If you're tired of always picking where to go or what to eat, you can ask him to pick next time."]}],"memories":[]},"5m.4.1":{"time":"Two Days After the Date","lines":[["我想跟她表白。稿子打了删删了打，现在是『我挺喜欢你的，想跟你正经处对象，你考虑考虑』。读着怎么这么怪，你帮我改改。","I want to tell her I like her. I've typed and deleted it a bunch of times. Right now it's “I really like you and I'd like us to be in a serious relationship. Think it over.” Why does that sound so weird? Can you fix it?"],["他希望表达喜欢，又担心措辞生硬。「考虑考虑」听着像催人回一个决定。可以直接问是否交往，也可以先说感受，请她说说自己的想法。","He wants to say he likes her but the wording feels stiff. “Think it over” sounds like he's asking her to come back with a decision. He can ask her directly or say how he feels and ask what she thinks."]],"choices":[{"thought":["直接问她要不要在一起","Ask if she wants to go out"],"reply":["可以说「跟你待一块儿的时候我挺开心的。我喜欢你，想跟你谈恋爱。你愿意吗？」意思已经很清楚，问完就留点时间给她。","Try, “I'm really happy when I'm with you. I like you, and I want us to go out. Would you like that?” That's clear. Once you've asked, give her some time."]},{"thought":["先说喜欢，听听她怎么想","Say how he feels and ask her"],"reply":["可以先说「跟你待一块的时候特别舒服，我可能有点喜欢你，你觉得呢？」先让她知道你的感受，她可以按自己的方式回答。","You could start, “I feel really at ease around you. I think I might have a thing for you. What do you think?” She'll know how you feel and can answer however she wants."]}],"memories":[]},"5m.4.2":{"time":"Two Days After the Date","lines":[["发了！就用你改的那句。发完我就想把手机扔了。她一会儿在输入，一会儿又没了，我盯得心脏一抽一抽的。你说这是在想怎么回，还是想拒绝我啊？","Sent it! The line you fixed. As soon as I sent it I wanted to throw my phone away. She'll be typing and then it goes away, then it's back. My heart keeps jumping watching it. Is she figuring out what to say, or how to turn me down?"],["他已经发出了直接问要不要在一起的话，现在把输入状态当成了答案的线索。能知道的只有她还没回，建议他离开屏幕一会儿，等实际回复。","He asked directly whether she'd go out with him. Now he's trying to read an answer into the typing indicator. All he knows is she hasn't answered. Suggest he step away until the reply comes."]],"choices":[{"thought":["先停下对输入状态的猜测","Stop reading into the typing dots"],"reply":["「正在输入」看不出她准备答应还是拒绝。你已经把想说的发过去了，先去洗把脸，让她有时间把自己的话写完。","“Typing” can't tell you whether she's going to say yes or no. You sent what you wanted to say. Go wash your face and give her time to finish writing."]}],"memories":[]},"5m.4.3":{"time":"Two Days After the Date","lines":[["你改的那句发了。我特别想撤回，又怕撤回更显得我有事。她要回一句『你说啥呢哈哈』，我下半辈子咋做人啊？","I sent the line you fixed. I really want to unsend it, but then I'll look even weirder. If she says “what are you talking about lol,” how do I show my face for the rest of my life?"],["他提前想象对方用玩笑带过，正在犹豫要不要撤回。可以说明他已经把感受说清楚，等对方实际回应后再决定怎么接。","He's imagining her laughing it off and thinking about unsending it. He's already said what he feels. He can decide how to respond after she actually answers."]],"choices":[{"thought":["先等她真的回复","Wait for her actual reply"],"reply":["你这句表达了喜欢，也给她留了说自己想法的空间。先别撤回，也不用替她写一条最尴尬的回复。等真的回了，再想怎么接。","You told her you like her and left room for her to say how she feels. Leave it there for now. You don't have to write the most awkward reply for her. When she really answers, decide what to say then."]}],"memories":[]},"5f.4.1":{"time":"Two Days After the Date","lines":[["他跟我表白了。说喜欢我，问我怎么想。我盯屏幕得有十分钟了。说不心动是假的，但我一想到真要谈了就怕，之前一认真就搞砸。你说我这种，能谈好吗？","He told me he likes me. Asked what I think. I've been staring at the screen for ten minutes. I'd be lying if I said I didn't feel something. But actually being in a relationship scares me. Last time I took it seriously I screwed it up. Do you think someone like me can make it work?"],["她对他有好感，也怕认真交往以后把事情搞砸。她需要的是眼下怎么回答，可以建议她把顾虑说清楚，也可以先从一句愿意试试开始。","She likes him and worries she'll mess things up once it's serious. She needs to know what to say right now. She can tell him what worries her or start with saying she wants to try."]],"choices":[{"thought":["把喜欢和顾虑一起说","Say she likes him and is nervous"],"reply":["想试的话，可以把你现在会说的也告诉他：「我也想试试，只是我可能不太会谈恋爱，你多担待」。他能听见你的愿意，也知道你心里还有点没底。","If you want to try, tell him as much as you can say now: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” He'll hear that you're willing and that you're still a little unsure."]},{"thought":["先从愿意试试说起","Start with wanting to try"],"reply":["可以先打一句「我们先试试」。你今天只需要告诉他现在的想法，剩下的话等你想说清楚了再补。","Start with, “Let's give it a try.” Today you only have to tell him how you feel right now. You can say more when you know what you want to say."]}],"memories":[]},"5f.4.2":{"time":"Two Days After the Date","lines":[["我把那句打出来了：『我也想试试，只是我可能不太会谈恋爱，你多担待』。打完又盯着看了半天。越看越觉得这话有点重，像把我自己交出去了。发还是不发，你帮我看看。","I typed it: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” Then I stared at it for ages. The more I read it, the heavier it felt. It's like I'm handing myself over. Should I send it? Can you look?"],["她已经把愿意和顾虑都写出来，犹豫是因为这句话很坦白。可以帮她确认句子表达了现在的想法，把是否发送留给她。","She's written that she wants to try and that she's nervous. She's hesitating because it's honest. I can confirm it says what she feels and leave the decision to her."]],"choices":[{"thought":["确认她想说的都在里面","Check that it says what she means"],"reply":["这句已经把你想试试、又没那么有把握都说出来了。你如果想让他知道的就是这些，可以发。后面的事，等真的遇到了再一起说。","It says you want to try and that you're not entirely sure of yourself. If that's what you want him to know, you can send it. Whatever comes after, you can talk about it when it actually happens."]}],"memories":[]},"5f.4.3":{"time":"Two Days After the Date","lines":[["我按你说的先打了『我们先试试』，又给删了。就觉得少了点啥，好像现在不说，我以后搞砸了又得怪自己。也可能是我想太远了，他就是问我要不要试试。","I typed “Let's give it a try” like you said and deleted it. It feels like something's missing. If I don't say it now and mess things up later, I'll blame myself again. Or maybe I'm getting way ahead of myself. He just asked if I want to try."],["简短的答复让她容易开口，但她仍想说明自己没把握。可以补上这层顾虑，让她按真正想表达的意思回复，不必预先为以后发生的事负责。","The short answer is easier to say, but she still wants him to know she's unsure. She can include that worry without taking responsibility in advance for whatever might happen."]],"choices":[{"thought":["补上她在意的那半句","Include the part she cares about"],"reply":["你想让他知道你也会紧张，可以多说半句：「我也想试试，只是我可能不太会谈恋爱，你多担待」。说到你眼下有把握的地方就够了。","If you want him to know you're nervous too, give him that extra bit: “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” It's enough to say what you know right now."]}],"memories":[]},"5m.4.4":{"time":"Two Days After the Date","lines":[["她回了！！我以为凉了，结果她说『我也想试试，只是我可能不太会谈恋爱，你多担待』。我先回了三个感叹号。她这是答应了对吧？那个『只是』后面的是啥意思啊？","She replied!! I thought it was over, but she said “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” I sent back three exclamation points. That's a yes, right? What does the “I just” part mean?"],["对方愿意试着交往，也主动说了自己对恋爱有顾虑。他高兴之余想知道后半句是什么意思。可以先确认答复，再建议以后慢慢了解她具体担心什么。","She's willing to try a relationship and told him she has some worries about it. He's excited and wants to know what the second part means. Confirm the answer and suggest they learn what she's worried about as it comes up."]],"choices":[{"thought":["道喜，也接住她后半句","Congratulate him and address her worry"],"reply":["是，她愿意和你试试，恭喜。后半句是在告诉你，她对怎么谈恋爱也没把握。以后遇到具体的事，你们可以再聊她需要什么、你又是怎么想的。","Yes, she wants to give it a try with you. Congratulations. The second part is her telling you she's not very sure of herself in relationships. As things come up, you can talk about what she needs and how you're feeling too."]}],"memories":[{"label":"不会谈恋爱","name":"Unsure about relationships","quote":["只是我可能不太会谈恋爱","I just might not be very good at relationships"]}]},"5f.4.4":{"time":"Two Days After the Date","lines":[["发了！『我也想试试，只是我可能不太会谈恋爱，你多担待』。我手一直抖，跟考试交卷似的。他秒回了三个感叹号……好家伙。发出去那一下反倒没那么吓人了。","I sent it! “I'd like to give it a try too. I just might not be very good at relationships, so bear with me.” My hands were shaking the whole time, like turning in an exam. He instantly sent three exclamation points… wow. It wasn't nearly as scary once I hit send."],["她发出了自己愿意试试的答复，也收到了对方的回应。她比发之前放松了，可以顺着这个开心的小插曲收尾，暂时不用讨论更远的事。","She sent her answer and got a reply. She's more relaxed than she was before sending. I can end on that little happy moment and leave the bigger conversation for later."]],"choices":[{"thought":["顺着她发出去后的轻松","Share her relief after sending"],"reply":["三个感叹号，看来他刚才也没少等。你已经把最难开口的话发出去了，今天可以先开心一会儿。","Three exclamation points. Sounds like he was doing some waiting of his own. You've sent the hardest thing to say. It's okay to just be happy about it for a while."]}],"memories":[]},"6m.CHOICE":{"time":"Day 1 Together","lines":[["昨晚她答应跟我在一起了。我睡前又看了两遍聊天，今天醒来还想看。我想发个朋友圈，用上次一起拍的照片。配什么啊，别太肉麻。","She said yes last night. I read the chat twice more before bed and wanted to read it again when I woke up. I want to post on Moments with the photo we took last time. What should I write? Nothing too cheesy."],["用户刚确认恋爱关系，想公开这份喜悦，又不希望配文太肉麻。可以直接说出关系，也可以从以后一起吃饭入手，让照片表达剩下的意思。","The user just got into a relationship and wants people to know he's happy without getting sappy. He can say it directly or mention something small about eating together and let the photo do the rest."]],"choices":[{"thought":["直接说出关系","Say they're together"],"reply":["照片已经有了，配文可以简单直接一点：终于可以光明正大叫她女朋友了。开心的事，不一定非要藏着说。","You've got the photo. Keep the caption simple: “Finally get to call her my girlfriend.” You're happy. It's okay to say it plainly."]},{"thought":["用日常小事含蓄官宣","Announce it with something everyday"],"reply":["可以配这句：以后不用天天一个人吃饭了。话不用说得很满，合照一放，大家就懂了。","Try: “Guess I don't have to eat alone every day anymore.” The photo will tell people the rest."]}],"memories":[]},"6m.M2A":{"time":"Day 1 Together","lines":[["发了。我朋友说，憋这么久，终于让你等到了。我兄弟眼红了哈哈哈。","Posted it. My friend said, “You've been holding it in for ages. Finally got what you were waiting for.” My guy's jealous hahaha."],["他发出动态后得到朋友的起哄，正借玩笑分享恋爱的开心。可以顺着回应，不必替他解释朋友的真实想法。","His friends are giving him a hard time in the comments, and he's sharing how happy he is through the joke. I can play along without deciding what they really think."]],"choices":[{"thought":["顺着他的得意开个玩笑","Play along with his bragging"],"reply":["看出来了，你现在连被起哄都挺高兴。这条朋友圈值了。","Look at you, even happy to get teased. That post was worth it."]}],"memories":[]},"6m.M2B":{"time":"Day 1 Together","lines":[["发了。我朋友评论，以前叫你吃饭，你可不是这么说的。我回他，你要是女的我也可以考虑考虑。他现在在群里骂我。","Posted it. My friend commented, “That's not what you said when I used to ask you to eat with me.” I said, “If you were a girl I'd consider it.” Now he's cussing me out in the group chat."],["朋友的调侃让他继续开起玩笑，语气轻松，想分享发出官宣后的热闹。可以回应这个结果，不把玩笑当成需要处理的矛盾。","His friend's teasing turned into a joke between them. He's sharing the fun after posting. I can answer in the same spirit."]],"choices":[{"thought":["接一句朋友间的玩笑","Join the joke"],"reply":["恋爱公开了，朋友也顺便逗到了。看起来今天的好心情还能撑很久。","You made it official and got to mess with your friend while you were at it. Looks like today's good mood is going to last."]}],"memories":[]},"6m.M3":{"time":"Day 1 Together","lines":[["我刚问她要不要庆祝一下。她问怎么庆祝，我说吃个青提蛋糕吧，想了好久了。她回我，原来重点在这儿。哈哈，也不能这么说。还没定哪天。","I just asked her if we should celebrate. She asked how, so I said, “Let's get a green grape cake. I've been craving one forever.” She wrote back, “Oh, so that's what this is about.” Haha, I wouldn't go that far. We haven't picked a day yet."],["两人已经开始轻松地商量庆祝，暂时没有确定时间。他是在分享刚才的互动，不需要立刻替他们安排一次见面。","They've started talking about celebrating and haven't picked a time. He's just sharing what happened. They can make plans when they're ready."]],"choices":[{"thought":["顺着庆祝的话题聊两句","Stay with the celebration"],"reply":["蛋糕想了很久，跟她一起庆祝是今天才有的新理由。时间你们慢慢商量，先把这份开心留着。","You've wanted that cake for a while, and now you've got a new reason to share it with her. You can pick a day later. Enjoy being excited for now."]}],"memories":[]},"6f.F1":{"time":"Day 1 Together","lines":[["我昨晚答应跟他在一起了。他今天早上就把我俩照片发朋友圈了，也太快了吧。","I said yes last night. He posted our photo on Moments first thing this morning. That was fast."],["用户刚确认恋爱关系，对方已经公开合照，她提到速度快，但还没有说自己是否介意。先问她的感受，不急着把这件事解释为压力或喜悦。","The user just agreed to a relationship and he's already posted their photo. She said it was fast, but hasn't said whether that bothers her. Ask how it felt before reading anything into it."]],"choices":[{"thought":["问问她看到时的感觉","Ask how she felt seeing it"],"reply":["刚确认关系，他就想让大家知道了。你看到的时候什么感觉？","You just got together and he already wants people to know. How did you feel when you saw it?"]}],"memories":[]},"6f.CHOICE":{"time":"Day 1 Together","lines":[["有点好笑，也挺开心的。但我是不是也得发一条啊？想到同事都能看见，还要来问，就好尴尬。","I thought it was funny, and it made me happy. But do I have to post too? My coworkers would all see it and come ask me about it. So awkward."],["用户对恋爱公开感到开心，犹豫来自熟人围观时的害羞。可以鼓励她表达喜悦，也可以支持她先私下分享，不把是否发动态等同于是否认真对待关系。","The user is happy people know they're together, but shy about people she knows making a fuss. I can encourage her to share or support her in telling someone privately. A post isn't a measure of how serious she is."]],"choices":[{"thought":["鼓励她大胆分享开心","Encourage her to share it"],"reply":["幸福不用等到不害羞才分享。既然开心，就大方晒一次。写一句自己的话就好，不用比谁更会表达。","You don't have to wait until you're past feeling shy to share something that makes you happy. If you want to post it, go for it. One line in your own words is enough."]},{"thought":["支持她先告诉亲近的人","Support telling someone close first"],"reply":["幸福是自己的，不必用朋友圈证明。先告诉你想告诉的人，也是一种分享。不想一下子被很多人围观，就先跟熟悉的人说说。","You can be happy without proving it on Moments. Telling the people you want to tell is sharing too. If you'd rather avoid a crowd, start with someone close to you."]}],"memories":[]},"6f.F3A":{"time":"Day 1 Together","lines":[["我发了，写的好吧，以后一起吃饭。刚发出去我就把手机扣下了。结果我同事直接过来问，谁啊？我还得装得很平静，说就我男朋友啊。","I posted it. I wrote, “Okay, then we'll eat together from now on.” I put my phone facedown the second I posted. Then my coworker came straight over and went, “Who's that?” I had to act all calm and go, “Oh, my boyfriend.”"],["她已经发出动态，也经历了原先害羞的同事询问。她在分享既尴尬又高兴的小插曲，可以顺着回应，不必继续鼓励她做更多公开表达。","She posted and got the question from a coworker that she'd been dreading. It was awkward and made her happy. I can share in that without encouraging her to put anything else out there."]],"choices":[{"thought":["回应她藏不住的开心","Notice how happy she is"],"reply":["朋友圈发出去了，当面介绍也说出口了。看来害羞没有耽误你开心，今天可以不用装得那么平静。","The post is up and you've already said it out loud. Being shy didn't stop you from being happy. You don't have to act quite so calm today."]}],"memories":[]},"6f.F3B":{"time":"Day 1 Together","lines":[["我给闺蜜发了照片。她连着问，什么时候的，谁先说的，见了几次。我打字都赶不上她问。本来想悄悄说一下，结果她给我打电话了。","I sent the photo to my best friend. “Since when? Who said it first? How many times have you seen each other?” I couldn't type fast enough. I thought I'd tell her quietly, then she called me."],["她选择私下分享，闺蜜反而直接打来电话。她是在讲开心的热闹，可以顺着被采访的感觉开个玩笑，不需要把朋友的追问当成矛盾来处理。","She told her friend privately and got a phone call. She's enjoying how much of a fuss her friend is making. I can joke that she's being interviewed."]],"choices":[{"thought":["顺着闺蜜的热情开个玩笑","Play along with the questions"],"reply":["公开会被围观，私聊会被采访。看来她已经准备好听完整个故事了，你可以慢慢跟她分享。","A public post gets an audience. A private message gets an interview. Sounds like she's ready for the whole story. Take your time telling her."]}],"memories":[]},"6f.F4":{"time":"Day 1 Together","lines":[["我刚还跟他说，你动作也太快了。然后问他要照片原图，朋友圈那个压得有点糊。跟他说我还是喜欢拿在手里的照片，手机里存一堆，后面根本想不起来翻。","I just told him, “That was fast.” Then I asked him for the original photo. It got a little blurry on Moments. I told him, “I still like photos I can hold in my hands.” I save a ton on my phone and never remember to look at them later."],["她主动索要合照原图，想以自己喜欢的方式留住照片。已经告诉男友这个偏好，可以回应这份珍惜，不需要再建议一次公开动态。","She asked for the original because she wants to keep it in a way she likes. She's already told him what she prefers. I can acknowledge that the photo matters to her."]],"choices":[{"thought":["回应她想把照片留下来","Respond to her wanting to keep it"],"reply":["原来害羞归害羞，照片还是要好好收着。手机里不容易翻到的，就换一种你喜欢的方式留住。","Shy or not, that photo deserves to be kept. If it's hard to find again on your phone, keep it in a way you'll enjoy."]}],"memories":[]},"6f.F5":{"time":"Day 1 Together","lines":[["他早上还问要不要庆祝一下。我问怎么庆祝，他说吃个青提蛋糕吧，想了好久了。怎么最后还是吃。","He asked if we should celebrate this morning. I asked how and he said, “Let's get a green grape cake. I've been craving one forever.” Somehow it's always about food in the end."],["她接着分享男友提出的庆祝方式，语气带着亲近的打趣。可以回应蛋糕这个具体细节，不替他们补出尚未确定的见面安排。","She's sharing his idea for celebrating and teasing him affectionately. I can answer about the cake without assuming they've decided when to meet."]],"choices":[{"thought":["顺着他的蛋糕庆祝聊一句","Go with the cake idea"],"reply":["原来庆祝方式已经有候选了。想了很久的蛋糕，现在又多了一个一起吃的理由。","Looks like you've got one idea for celebrating. Now you've got another reason to share the cake he's been wanting."]}],"memories":[{"label":"想吃青提蛋糕","name":"Green grape cake","quote":["吃个青提蛋糕吧，想了好久了","Let's get a green grape cake. I've been craving one forever"]}]},"6m.M4":{"time":"Day 1 Together","lines":[["她刚跟我说，你动作也太快了。然后又问我要照片原图。我还以为她嫌我发得急，结果她说，我还是喜欢拿在手里的照片。原图已经发她了。","She just said, “That was fast.” Then she asked for the original photo. I thought she was bothered I posted so soon, but she said, “I still like photos I can hold in my hands.” I sent her the original."],["他先担心女友嫌公开太快，随后收到索要原图的回应，感到高兴。她亲口说喜欢纸质照片，可以据此回应，不必猜测她对公开关系的全部态度。","He worried that she thought he'd posted too fast, then was happy she asked for the original. She told him she likes prints. I can use that without guessing how she feels about going public in general."]],"choices":[{"thought":["回应她主动要照片这件事","Respond to her asking for the photo"],"reply":["她觉得你发得快，也想把照片好好留着，这两件事可以同时成立。原图都找你要了，看来今天不只是你一个人在高兴。","She thought you posted fast, and she wants to keep the photo. Both can be true. She asked you for the original, so it looks like you're not the only one who's happy today."]}],"memories":[{"label":"纸质合照","name":"Printed photo","quote":["我还是喜欢拿在手里的照片","I still like photos I can hold in my hands"]}]},"6m.M5":{"time":"That Night","lines":[["我刚看了下日历，现在就问她一个月纪念日那天有没有空，会不会太早啊，才第一天。","I just checked my calendar. Is it too early to ask if she's free for our one-month anniversary? It's only day one."],["他已经开始期待一个月纪念日，犹豫的是现在提出会不会太早。可以建议先确认共同的时间，把具体安排留到之后，避免一次就把所有事情定下来。","He's looking forward to their one-month anniversary and wonders if it's too soon to bring it up. They can set aside the time and leave the details for later."]],"choices":[{"thought":["先约时间，安排慢慢商量","Save the date and plan later"],"reply":["可以先问问她，不用今天就把整天安排好。就说：一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。","You can ask without planning the whole day now. Try: “Save our one-month anniversary for me, okay? Let's spend it together. We can decide what to eat later.”"]}],"memories":[]},"6f.F6":{"time":"That Night","lines":[["他刚说，一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。才第一天，他怎么已经翻到下个月了。","He just said, “Save our one-month anniversary for me, okay? Let's spend it together. We can decide what to eat later.” It's day one. How is he already looking at next month?"],["她转述男友的纪念日邀约，觉得他期待得很早，但没有表达拒绝。可以问她是否也想一起过，帮助她表达自己的意愿，不替她作决定。","He's looking forward to the anniversary already. She hasn't said she doesn't want to. I can help her answer based on whether she wants to spend it together."]],"choices":[{"thought":["让她按自己的期待回应","Let her answer how she feels"],"reply":["他已经开始期待那一天了。你也想一起过的话，就先答应，具体安排可以之后再慢慢商量。","He's already looking forward to that day. If you'd like to spend it together too, say yes. You can talk about what to do later."]}],"memories":[]},"6f.F7":{"time":"That Night","lines":[["OK，正好那会儿项目也忙完了，放松一下。","OK, my project should be done by then anyway. I could use a chance to relax."],["她已经表示愿意一起过纪念日，也期待忙完项目后能放松一下。可以支持她把时间留出来，顺着这份期待回应，不必再替两人安排具体怎么庆祝。","She's agreed to spend the anniversary with him and is looking forward to relaxing once work settles down. Support that without planning the celebration for them."]],"choices":[{"thought":["支持她留出一起过的时间","Encourage her to save the day"],"reply":["那就把那天先留出来。等忙完这一阵，有件一起期待的事也挺好。","Then set the day aside. It's nice to have something to look forward to together once work settles down."]}],"memories":[]},"6m.MEMCHOICE":{"time":"That Night","lines":[["她回，好啊，那天留给你。我现在就有点想准备东西。但礼物是不是挑得太早了，我还没想好送什么合适。","She said, “Sure, I'll save the day for you.” I kind of want to get something ready now. Is it too early to pick a gift, though? I haven't worked out what to get."],["女友答应一起过纪念日，他想准备一点东西，又怕挑得太早。可以根据已有的小细节给建议，也可以先不急着买，在之后相处中慢慢想。","She agreed to spend their anniversary together. He wants to get her something but worries it's too early. I could use a detail he's kept, or suggest seeing what comes up as they get to know each other."]],"choices":[{"thought":["把合照变成小礼物","Turn the photo into a gift"],"reply":["她说过喜欢拿在手里的照片。可以先洗一张你们的合照，背面写上在一起的日期。不用一下子准备很贵重的礼物，从她喜欢的小东西开始就好。","She said she likes photos she can hold in her hands. You could get a print of the two of you and write the date you got together on the back. It doesn't have to be expensive. Start with a little thing she likes."]},{"thought":["先留时间，慢慢了解喜好","Save the date and learn what she likes"],"reply":["先不用急着买。你们刚在一起，之后聊天、见面，还会慢慢知道她喜欢什么。先把那天留好，礼物可以等有了合适的想法再准备。","You don't have to buy anything yet. You just got together. As you talk and spend more time together, you'll learn more about what she likes. Save the date for now and get something when you have a good idea."]}],"memories":[]},"6m.M7A":{"time":"That Night","lines":[["这个好。我下单了，洗两张，一人一张。等拿到了我自己写日期，字丑也认了。","I like that. I ordered two prints, one for each of us. I'll write the date myself when they get here. Ugly handwriting and all."],["合照已经下单，他还打算亲手写日期，语气很期待。可以回应这份心意，顺着他担心字丑开个小玩笑，不必再建议添别的礼物。","The photos are ordered. He's looking forward to writing the date himself. I can appreciate the gesture and joke about his handwriting without giving him more to do."]],"choices":[{"thought":["肯定他亲手准备的心意","Appreciate the personal touch"],"reply":["你自己写的日期，也会成为照片的一部分。字不用写得多漂亮，先把日子写对就好。","Writing the date yourself makes it part of the photo. It doesn't have to look pretty. Just get the date right."]}],"memories":[]},"6m.M7B":{"time":"That Night","lines":[["也是，今天才第一天。我先把那天记下来，后面想到了再说。突然觉得还挺有盼头的。","True, it's only day one. I'll put the date down and think of something later. All of a sudden it feels like I've got something to look forward to."],["约定已经记下，他接受了暂时不急着买礼物，也开始期待以后的相处。可以顺着这个轻松的心情收尾，不再追加准备任务。","He's saved the date and is okay with waiting to buy a gift. He's looking forward to the time they'll spend together. Let this end on that feeling."]],"choices":[{"thought":["让期待留在这里","Leave him looking forward to it"],"reply":["那就先期待着。接下来还有很多一起吃饭、聊天的机会，合适的主意也许就在里面。","Then enjoy looking forward to it. There'll be plenty of dinners and conversations between now and then. The right idea might come up in one of them."]}],"memories":[]},"6m.END":{"time":"That Night","lines":[],"choices":[],"memories":[]},"6f.F8":{"time":"That Night","lines":[["我把那天记日历上了。写一个月纪念日有点不好意思，又改成了吃饭。","I put it in my calendar. I felt a little embarrassed writing “one-month anniversary,” so I changed it to “dinner.”"],["她把约定记进日历，连给自己看的名称都有点害羞。她是在接着分享今晚的期待，轻松回应即可，不再增加需要她完成的新安排。","She's saved the date and feels shy even about a title only she can see. She's still looking forward to it. A light response is enough."]],"choices":[{"thought":["轻轻回应她的害羞","Gently pick up on her shyness"],"reply":["名字低调一点，期待一点没少。就让日历先替你留着那一天吧。","A low-key name doesn't make you any less excited. Let your calendar save the day for you."]}],"memories":[]},"6f.END":{"time":"That Night","lines":[],"choices":[],"memories":[]},"7m.MONE":{"time":"Day 17 Together · Friday","lines":[["我跟我女朋友在一起两周多了，刚开始天天能聊到睡觉。这礼拜她赶项目，回我基本就是累啊困啊，我又老想找她。\\n她刚发了张照片，买了杯喝的，说最近全靠公司楼下那家青杏续命。照片后面有个同事拿吸管夹薯条，她说大家都叫他筷子。我回了个笑哭，就没下文了。还想聊两句，你说我接点啥？","My girlfriend and I have been together a little over two weeks. At first we talked every day until bedtime. She's been trying to finish a project this week, so her replies are mostly “I'm tired” or “I'm sleepy,” and I keep wanting to message her.\\nShe just sent a photo of a drink. Says the Green Apricot downstairs from the office is the only thing keeping her alive lately. There's a coworker in the background using straws to pick up fries. She says everyone calls him Chopsticks. I sent a cry-laugh emoji and that was it. I want to chat a little more. What should I say?"],["用户想继续和女友聊天，但不知道怎样接话。她刚主动分享了日常照片，可以建议从照片里的饮料聊起，既有现成的话题，也不用另外找话说。","The user wants to keep talking to his girlfriend and doesn't know how. She's just shared a photo from her day. The drink gives him something to ask about."]],"choices":[{"thought":["顺着照片接话","Pick up from the photo"],"reply":["可以问问她喝的什么，好不好喝。她主动给你发了照片，至少这会儿愿意跟你分享点日常，不用急着找个特别有意思的话题。","Ask what she's drinking and whether it's good. She sent you a photo herself, so she's happy to share a little of her day right now. You don't have to come up with anything especially interesting."]}],"memories":[{"label":"青杏","name":"Green Apricot","quote":["公司楼下那家青杏","the Green Apricot downstairs from the office"]}]},"7f.FDAY":{"time":"Day 17 Together · Friday","lines":[["我跟男朋友在一起两周多了。这礼拜赶项目，下班连话都不想说。他还天天跟我说今天干嘛了，我不回吧，又老惦记着。\\n今晚部门一起吃饭，我想先跟他说一声，又怕说完就聊起来了，吃个饭还得一直看手机。咋跟他说比较好？","My boyfriend and I have been together a little over two weeks. I've been trying to finish a project this week and I'm so drained after work I don't even want to talk. He tells me about his day every day. If I don't reply, I keep thinking about it.\\nMy department's going out to dinner tonight. I want to tell him before I go, but I'm afraid it'll turn into a whole conversation and I'll be on my phone all through dinner. How should I say it?"],["用户想提前告诉男友聚餐安排，也担心因此又聊起来，吃饭时得不断回消息。可以建议她同时说明回复可能较慢、回家后再聊，让对方知道她不是突然不理人。","The user wants to tell him about the dinner and is worried she'll end up replying all the way through it. She can tell him she'll be slow to answer and will talk once she's home."]],"choices":[{"thought":["先把今晚安排说清","Tell him the plan for tonight"],"reply":["可以直接跟他说：“今晚部门聚餐，可能回得慢，回家再聊。”提前说清楚安排和什么时候方便聊，比一边吃饭一边惦记着回消息轻松些。","Try: “Department dinner tonight. I might be slow to reply. Let's talk when I get home.” If you tell him your plans and when you're free, you won't have to keep thinking about replying over dinner."]}],"memories":[]},"7f.FDAYMORE":{"time":"Day 17 Together · Friday","lines":[["行，我就这么发。我也不是不想跟他聊。昨天还有个挺逗的，他提前一站下了车，还跟我说今天地铁真快，走到出口才发现下早了。我回他一个猪头，他说走过去算了，正好把歌听完。\\n上礼拜一起吃饭也挺好的，就是这礼拜真累。好了我走了，别一会儿大家等我。","Okay, I'll send that. It's not that I don't want to talk to him. Yesterday was pretty funny. He got off a stop early and told me the subway was really fast today. Didn't realize till he reached the exit. I sent him a pig face. He said he'd just walk and finish listening to his song.\\nDinner together last week was nice too. I'm just really tired this week. Okay, I'm going. I don't want to keep everyone waiting."],["用户虽然觉得聊天累，还是愿意分享男友的趣事。现在她要出门聚餐，没有新的问题需要处理，可以简短回应，不必继续分析两人的关系。","Messaging feels tiring, but the user still wants to share funny things about him. She's headed to dinner now and has no new question. Keep it brief."]],"choices":[{"thought":["轻快地送她出门","See her off"],"reply":["听着是挺想跟你分享的，连下错站都要说一声。那先去吃饭吧，等回家有精神了再慢慢聊。","Sounds like he likes telling you things, even when he gets off at the wrong stop. Go enjoy dinner. You can talk when you're home and have the energy."]}],"memories":[{"label":"提前下车","name":"Got off early","quote":["他提前一站下了车，还跟我说今天地铁真快","He got off a stop early and told me the subway was really fast today"]}]},"7m.MNEWS":{"time":"After the Department Dinner","lines":[["我跟女朋友刚闹了点不愉快。她今晚部门聚餐，吃完回来找我聊天，我问着问着就问岔了，现在她不回我了。你帮我看看，是不是我说得有点过了？","My girlfriend and I just had a bit of a fight. She went out with her department tonight and messaged me when she got back. I asked one thing, then another, and somehow it went wrong. Now she isn't replying. Can you help me figure out if I went too far?"],["他觉得刚才的话可能说重了，想知道怎么补救。目前还不清楚争执经过，需要先听双方说了什么，再判断问题出在哪，不能只凭她不回复就下结论。","He thinks he might've said something harsh and wants to know how to fix it. I need to hear what they both said. Her not replying on its own doesn't tell me what went wrong."]],"choices":[{"thought":["先听刚才说了什么","Hear what was said first"],"reply":["可以，把刚才那几句发来看看。你说了什么，她怎么回的，从哪儿开始不对劲的，我们先捋一下。","Sure. Send me the things you said. What did you say, how did she answer, and where did it start to feel off? Let's go through it."]}],"memories":[]},"7m.MPROJECT":{"time":"After the Department Dinner","lines":[["她说周四方案过了，今天大家一起庆功，还发了张合照给我。我问怎么没听她说，她说昨天忙忘了。\\n然后说小周还张罗着给她点了个蛋糕。我问小周是谁，她说一起做项目的同事。\\n他们都知道，就我现在才知道。这两天她跟我说的全是累，我还以为还没忙完呢。","She said their proposal got approved Thursday and they all went out to celebrate today. She sent me a group photo too. I asked why I hadn't heard about it and she said she was busy yesterday and forgot.\\nThen she said Xiao Zhou had even ordered her a cake. I asked who Xiao Zhou was. She said he's a coworker on the project.\\nThey all knew, and I'm just finding out now. The last two days all she told me was how tired she was. I thought she was still working on it."],["同事参与同一个项目，知道进展很正常。他反复提到自己才知道，可能更在意没被分享这份开心。可以先帮他分清这两件事，再听后面发生了什么。","It's natural her coworkers would know how their project was going. He keeps coming back to finding out late. What may hurt more is that she didn't share the good news with him. I can untangle those two things before hearing the rest."]],"choices":[{"thought":["接住被落下的感觉","Acknowledge feeling left out"],"reply":["一起做项目的同事知道进展，并不奇怪。让你不舒服的，可能是她这两天只跟你说累，庆功这么高兴的事，你反而到现在才听说。","It makes sense that the people working on the project knew. What might sting is that all you heard for two days was how tired she was, and you're only hearing about the celebration now."]}],"memories":[]},"7m.MDEMAND":{"time":"After the Department Dinner","lines":[["对。我就问她，你跟他私下是不是也聊挺多，不然怎么他什么都知道。她说大家一起吃饭，又不是只有我一个女的，他跟我做同一个项目，当然知道。\\n我又说，那给我看看你俩聊什么了。她回，你自己听听你在说什么。我接了句那你说我该怎么想，她就不回了。\\n我现在想解释一下，可再发过去，是不是又像追着她问？","Yeah. I asked her, “Do you two talk a lot in private too? How else does he know everything?” She said, “The whole group went. I wasn't the only woman there. We're on the same project. Of course he knows.”\\nThen I said, “Let me see what you two talked about.” She said, “Listen to what you're saying.” I said, “Well, what am I supposed to think?” Then she stopped replying.\\nI want to explain myself, but if I send another message, will it sound like I'm still going after her?"],["她已解释同事关系，他仍提出查看私聊，对方随后不再回复。现在想补救，应先建议撤回这项要求，承认自己问过了，而不是继续解释为什么怀疑。","She explained how she knows him. He still asked to see their private messages, and then she stopped replying. If he wants to repair things, he can take back that demand and own how far he went before explaining his suspicions."]],"choices":[{"thought":["先收回查看私聊的要求","Take back the demand to see the chat"],"reply":["可以再发，但这次先别解释她为什么让你多想。先承认刚才的要求不合适：“我不该让你给我看聊天，刚才有点急。”发完给她一点时间，不要接着追问。","You can send something, but leave out why she made you suspicious. Start by saying the demand was out of line: “I shouldn't have asked to see your messages. I got a little worked up.” Then give her time. Leave it at that for now."]}],"memories":[]},"7f.FANGER":{"time":"After the Department Dinner","lines":[["我刚不是去部门聚餐了吗，吃完回家跟他说了两句，真的给我气到了。\\n周四方案过了，今天大家一起庆功。我给他发合照，说小周还给我点了个蛋糕。他先问怎么没告诉他，又问小周是谁。","Remember how I went to my department dinner? I got home and went to tell him about it. I'm so pissed off.\\nOur proposal got approved Thursday and we went out to celebrate today. I sent him the group photo and told him Xiao Zhou had ordered me a cake. First he asked why I hadn't told him. Then he asked who Xiao Zhou was."],["她按之前的安排，聚餐后回家和男友聊天，却因为对方的追问生气。目前只听到争执的开头，需要先了解她怎么解释、对方怎么回应，不急着判断谁的问题。","She got home and talked to him as planned, but his questions made her angry. I've only heard the start. I need to hear what she explained and how he answered before deciding what went wrong."]],"choices":[{"thought":["听她把经过说完","Hear the rest of it"],"reply":["你本来是想跟他分享庆功的事，结果聊得不愉快了。后来你怎么解释的，他又说了什么？","You wanted to share the celebration and it turned into an argument. What did you tell him after that? What did he say back?"]}],"memories":[]},"7f.FDEMAND":{"time":"After the Department Dinner","lines":[["我说昨天忙忘了告诉他，小周就是一起做项目的同事。大家一起吃饭，又不是只有我一个女的。\\n他还问你跟他私下是不是也聊挺多，不然怎么他什么都知道。我解释了只是同事，他还要看我和人家的聊天记录。\\n我说你自己听听你在说什么。他又来句，那你说我该怎么想。我真想骂人，他要怎么想还得我教啊？","I said I got busy yesterday and forgot to tell him. Xiao Zhou's just a coworker on the project. The whole group went. I wasn't the only woman there.\\nThen he goes, “Do you two talk a lot in private too? How else does he know everything?” I explained we're just coworkers, and he still wanted to see our chat history.\\nI said, “Listen to what you're saying.” Then he goes, “Well, what am I supposed to think?” I could've sworn at him. Do I have to teach him how to think now?"],["同事关系和聚餐情况已经解释，他仍要求看私聊，还把怎么理解这件事交给她回答。她现在很愤怒，可以先回应被怀疑的不适，建议暂缓争执，而不是继续证明清白。","She explained who he was and who went to dinner. He still wanted to see the chat and made her responsible for how he should interpret it. I can acknowledge how angry she is at being suspected and suggest pausing the argument."]],"choices":[{"thought":["接住被怀疑的火气","Acknowledge how angry she is"],"reply":["你已经解释了，他还是要看聊天，难怪你会觉得说什么都像在被审问。现在正在气头上，可以先停一下，不用继续一条条证明自己和同事没什么。","You explained it and he still wanted to see the chat. No wonder it feels like you're being interrogated whatever you say. You're angry right now. You can pause without having to prove, point by point, that nothing happened with your coworker."]}],"memories":[{"label":"查看私聊","name":"Asked to see the chat","quote":["我解释了只是同事，他还要看我和人家的聊天记录","I explained we're just coworkers, and he still wanted to see our chat history"]}]},"7m.MWAIT":{"time":"Saturday Night","lines":[["昨天按你说的发了，我不该让你给我看聊天，刚才有点急。她没回。今天中午又问吃饭没，也没回。\\n她一整天没回我，连我说不该问她要聊天记录也没回。刚下楼买个东西，我都一直拿着手机，就怕她突然回了我没看见。现在又想发，你说再问一句会不会更烦她啊？","I sent what you suggested yesterday: “I shouldn't have asked to see your messages. I got a little worked up.” No reply. At lunchtime I asked if she'd eaten. No reply either.\\nShe didn't answer me all day, not even when I said I shouldn't have asked to see the chat. I went downstairs to buy something and held my phone the whole time in case she replied and I missed it. Now I want to send something again. Think that'll just annoy her more?"],["已经道歉，也试着恢复日常聊天，仍然没有回应。他现在很难忍住继续发消息，需要先了解他希望从下一条回复里确认什么，再考虑是否适合发送。","He's apologized and tried starting an ordinary conversation. He still hasn't heard back. It's hard for him to stop sending messages. Find out what he's hoping the next reply will tell him."]],"choices":[{"thought":["问清想确认什么","Ask what he wants to know"],"reply":["你已经道过歉，也问过吃饭了，还是一直惦记着手机。现在想再发一句，是还有话没说，还是想从她的回复里确认什么？","You've apologized and asked if she's eaten, and you still can't put your phone down. Do you want to send something because there's more you need to say, or because you want her reply to tell you something?"]}],"memories":[{"label":"一天没回","name":"No reply all day","quote":["她一整天没回我，连我说不该问她要聊天记录也没回","She didn't answer me all day, not even when I said I shouldn't have asked to see the chat"]}]},"7m.MFEAR":{"time":"Saturday Night","lines":[["我就想知道她还想不想理我啊。昨天说小周给她点蛋糕，聊得那么高兴，到我这就一句都没了。\\n我现在真想问问她，到底是没空回，还是光不想回我。","I just want to know if she still wants anything to do with me. Yesterday she was so happy telling me Xiao Zhou ordered her a cake, and now I get nothing.\\nI really want to ask if she's too busy to reply or just doesn't want to reply to me."],["他把不回消息和昨晚的同事联系起来了，但还没有提供其他依据。需要先确认他知道什么，避免顺着焦虑把猜测说成事实，也不要替女友解释沉默。","He's linking her silence to yesterday's coworker, but hasn't said anything else to support it. Find out what he knows without turning his fear into a fact or explaining her silence for her."]],"choices":[{"thought":["把事实和猜测分开","Separate what he knows from what he guesses"],"reply":["你现在想确认的，其实是她还愿不愿意理你。不过，先别从她和同事的互动里猜答案。除了昨天的聚餐，还有什么让你觉得他们不只是同事吗？","What you really want to know is whether she still wants to talk to you. Try not to read the answer into how she was with her coworker. Apart from dinner yesterday, have you seen anything that makes you think they're more than coworkers?"]}],"memories":[]},"7m.MOWN":{"time":"Saturday Night","lines":[["没看到。我后来把合照翻了好几遍，他俩也没挨着坐。可他给她点个蛋糕，她就那么开心，我怎么就没想到呢。\\n我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天。\\n我知道这么问不好听。可我不问，就只能等她哪天想起来了再来找我吗？","No. I went back through the group photo a bunch of times. They weren't even sitting next to each other. But he ordered her a cake and she was that happy. Why didn't I think of that?\\nI didn't even know what they'd talked about, and I asked if they talk a lot in private and told her to show me the chat.\\nI know it sounds bad. But if I don't ask, am I just supposed to wait until she remembers to talk to me someday?"],["他承认没有证据，但仍把追问当成确认关系的唯一办法。可以建议他表达等不到回复的不安，同时明确这与要求查看私聊不同，避免再次发出带猜疑的质问。","He admits he has no evidence, but still sees questioning her as his only way to know where they stand. He can tell her waiting makes him anxious. That's different from asking to see a private chat."]],"choices":[{"thought":["把不安说清楚","Say what's making him anxious"],"reply":["等不到回复让你不安，这件事可以等能好好说话时告诉她。可让她证明没跟别人聊，并不能回答你在她心里有没有位置。今晚先别再发“是不是忙着回别人”这样的质问了。","You can tell her that waiting for a reply makes you anxious once you can talk properly. Asking her to prove she hasn't been talking to someone else can't tell you how much you matter to her. For tonight, leave questions like “Too busy replying to somebody else?” unsent."]}],"memories":[{"label":"要求看私聊","name":"Demanded to see the chat","quote":["我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天","I didn't even know what they'd talked about, and I asked if they talk a lot in private and told her to show me the chat"]}]},"7f.FNOTIFICATION":{"time":"Saturday Night","lines":[["他昨天后来发了句我不该让你给我看聊天，刚才有点急。今天中午又问吃饭没，我都没回。\\n刚才手机亮了一下，我还以为又是他，结果是我同桌。发现不是他，我又去点开他那边看，也没再发。真让我回吧，我又不想回，烦死了。","He wrote last night, “I shouldn't have asked to see your messages. I got a little worked up.” At lunch today he asked if I'd eaten. I didn't answer either one.\\nMy phone lit up just now and I thought it was him again. It was my deskmate. When I saw it wasn't him I checked his chat anyway. Still nothing. If I actually had to reply, I wouldn't want to. It's so annoying."],["她没有回复，却反复查看男友有没有新消息，说明这件事仍让她在意。需要先了解她想等到怎样的回应，不能因为她关注手机，就认定她已经愿意和好。","She hasn't replied, but keeps checking whether he sent anything. She still cares about this. Find out what she wants to hear before assuming she's ready to make up."]],"choices":[{"thought":["问问她还在等什么","Ask what she's waiting for"],"reply":["你不想回他，又忍不住看他有没有再找你。你现在是还想等他说点什么，还是也想找个机会回他，只是不知道怎么开头？","You don't want to reply, but you still check whether he's messaged you. Are you hoping he'll say something else, or do you want a chance to reply but don't know how to start?"]}],"memories":[]},"7f.FPUSH":{"time":"Saturday Night","lines":[["不知道，反正我现在不想回。他昨天都那么问我了，后来说一句有点急，就完了？我再跟他聊吃饭没啥的，搞得好像啥事都没有一样。","I don't know. I just don't want to answer right now. He talked to me like that yesterday, then said he got a little worked up, and that's it? If I go back to chatting about what I ate, it'll be like nothing happened."],["她担心一恢复日常聊天，就等于接受这次道歉，所以不愿回复。可以先回应这个顾虑，再问收到消息时的想法，了解她是需要独处，还是想通过不回应表达不满。","She's worried going back to everyday talk amounts to accepting the apology. I can acknowledge that and ask what she felt when the message came. Is she taking time alone or using silence to show she's upset?"]],"choices":[{"thought":["问她收到消息时怎么想","Ask what went through her mind"],"reply":["你不想一句“有点急”就把这件事翻过去。不过，不回消息能让他知道你生气了，未必能让他知道你在气什么。今天他问你吃饭没的时候，你当时怎么想的？","You don't want “I got a little worked up” to be the end of it. Staying quiet might tell him you're angry, but it might not tell him what upset you. What went through your mind when he asked if you'd eaten?"]}],"memories":[]},"7f.FOWN":{"time":"Saturday Night","lines":[["看见了，就是不想回。我今天手机一直在用，跟同桌聊桌游，跟别人说话，就没理他。\\n我就是故意一天不回他，想让他也难受一下。凭什么每次都是我被问得烦啊，他也等一等吧。","I saw it. I just didn't want to answer. I've been on my phone all day, talking board games with my deskmate, talking to other people. I just ignored him.\\nI deliberately didn't answer him all day. I wanted him to feel bad too. Why am I always the one getting grilled? Let him wait for once."],["她明确说自己想让对方难受，不回应已经不只是为了休息。需要听她接下来想怎么做，把继续冷落和表达不满分开，不替她把这次行为解释成无意的。","She says outright she wanted him to feel bad. This is doing more than giving her time to recover. Find out what she wants to do next and distinguish keeping him waiting from telling him why she's mad."]],"choices":[{"thought":["问她接下来想怎么做","Ask what she wants to do next"],"reply":["你是想让他也尝尝被晾着的滋味。那接下来呢，你还想继续晾着，还是想让他知道，你到底为什么那么生气？","You wanted him to see how it feels to be left hanging. What do you want now? To keep leaving him hanging, or to let him know why you were that angry?"]}],"memories":[{"label":"故意不回","name":"Didn't reply on purpose","quote":["我就是故意一天不回他，想让他也难受一下","I deliberately didn't answer him all day. I wanted him to feel bad too"]}]},"7f.COUSIN":{"time":"Saturday Night","lines":[["今天不想跟他说了。他要是又问小周，我真会骂他。那些话我现在想想都烦。\\n我同桌还问明天去不去桌游，我说先不去了。现在出去玩都能想起他昨天那几句。","I don't want to talk to him today. If he brings up Xiao Zhou again I'll go off on him. Just thinking about what he said makes me angry.\\nMy deskmate asked if I wanted to play board games tomorrow. I said I'd skip it. Even if I went out, I'd just think about what he said yesterday."],["她目前不愿直接和男友谈，继续劝回复可能只会增加抵触。可以建议先找可信的人聊聊，让她把不满说出来，再决定如何联系，而不是让别人替她处理。","She doesn't want to talk to him directly right now. Pushing her to answer could make her resist it more. Suggest someone she trusts to talk it through without asking them to sort it out for her."]],"choices":[{"thought":["找熟悉双方的同桌聊聊","Talk to her deskmate"],"reply":["你同桌也是他表妹，跟你俩都熟。可以先找她聊聊，她也许能帮你理理怎么跟他说。先说明你只是想聊这件事，不是让她替你去传话。","Your deskmate is his cousin, and she knows you both. You could talk it over with her first. She might help you figure out what to say. Let her know you're just there to talk and don't want her carrying messages for you."]},{"thought":["建议先找可信的朋友吐槽","Talk to a friend she trusts"],"reply":["可以先找个信得过的朋友说说，不必憋着，也不必现在就回他。等这口气缓一点，再想你希望他听明白什么，可能比反复盯着聊天框轻松些。","Tell a friend you trust how you're feeling. You can let it out without replying to him right now. When you're less angry, think about what you want him to understand. That might feel easier than checking the chat again and again."]}],"memories":[]},"7f.COUSINSENTNO":{"time":"Saturday Night","lines":[["那我找我闺蜜说说吧。我俩认识好多年了，她跟他又不熟，不用夹在中间。跟她说话我就不用憋着了。","I'll talk to my best friend, then. We've known each other for years, and she barely knows him. She won't get stuck in the middle. I can say what I really think with her."],["她选择找熟悉自己的闺蜜，对方与男友不熟，可以让她少一些顾虑。现在已有明确打算，回复只需确认，不继续追问或要求她立刻想好给男友的答复。","Her best friend knows her well and isn't close to him. That makes it easier to speak freely. She's made a plan. No need to ask more of her or have her work out a reply right now."]],"choices":[{"thought":["让她找闺蜜说说","Let her talk to her best friend"],"reply":["那就先找她聊。你现在不必一边吐槽，一边急着想该怎么回男友，先把自己憋着的那部分说出来。","Then talk to her first. You don't have to figure out what to say to your boyfriend while you're venting. Start with whatever you've been holding in."]}],"memories":[]},"7f.COUSINSENTYES":{"time":"Saturday Night","lines":[["那我找她说两句。我得先跟她说好啊，别替我去找他，我还没想好怎么回。","I'll talk to her, then. I have to say this first: don't go talk to him for me. I haven't figured out what to say back."],["她愿意找同桌聊，也明确不希望被代为传话。可以肯定她先说明这一点，避免朋友的介入变成新的误会，是否联系男友仍由她自己决定。","She's willing to talk to her deskmate and doesn't want her to pass anything on. Back her up in saying that first so it doesn't turn into another misunderstanding."]],"choices":[{"thought":["先说清别替她传话","Make clear she doesn't want a go-between"],"reply":["对，先把这点说清楚。你现在是想有人听你讲，不是请她去劝他；等你想好怎么说，再由你自己联系。","Yes, say that first. You want someone to hear you out. If you decide to talk to him, you can do it yourself when you know what you want to say."]}],"memories":[]},"7f.COUSINBACKNO":{"time":"Sunday Morning","lines":[["我昨天跟闺蜜打了挺久电话。她先陪我骂了几句，说换谁被这么问都得烦。后来突然问我，那你还想不想见他？\\n我说想啊。她就说，想见就去见，该说他的地方还得说，别自己跟这儿憋一晚上。聊完确实没那么气了。\\n今天醒来又想找他。可我先去找，他是不是就觉得昨天这事过去了？","I was on the phone with my best friend for ages yesterday. She let me rant, said anyone would be mad after being questioned like that. Then out of nowhere she asked, “Do you still want to see him?”\\nI said yes. She went, “Then go see him. You can still tell him what he did wrong. Don't sit there stewing all night.” I was less mad after that.\\nI woke up wanting to talk to him. But if I reach out first, will he think I'm over what happened?"],["和闺蜜聊过后，她明确自己仍想见男友，却担心主动联系就失去表达不满的机会。可以说明联系和继续谈这件事并不矛盾，帮助她从谁先开口转向怎么开口。","Talking to her friend made it clear she still wants to see him. She's worried reaching out first means giving up the chance to say what bothered her. She can still talk about it even if she starts the conversation."]],"choices":[{"thought":["把想见和介意都留住","Keep both things on the table"],"reply":["你可以先联系他，也可以告诉他，那样被问的事还没过去。主动开口是因为你想见他，不等于你认同他那样问你。","You can reach out first and tell him you're still bothered by the way he questioned you. Reaching out means you want to see him. It doesn't mean you're okay with what he asked."]}],"memories":[]},"7f.COUSINBACKYES":{"time":"Sunday Morning","lines":[["昨天最后跟我同桌聊了挺久。她听我骂完，说她表哥平时没这么爱问东问西，估计真是慌了。我说慌了也不能让我给他看聊天啊。她说是，但你要还想跟他好，就得让他知道你到底气什么。\\n聊完气消了一点，今天醒来还挺想见他的。可我现在先找他，他是不是就觉得昨天这事过去了？","I ended up talking to my deskmate for a while yesterday. She listened to me rant, then said her cousin doesn't usually ask twenty questions. She figured he panicked. I said that didn't give him the right to ask to see my messages. She said, “True. But if you still want to be with him, you have to tell him what you're angry about.”\\nI was less angry after that, and this morning I woke up wanting to see him. But if I reach out first, will he think I'm over what happened?"],["同桌提供了对男友的看法，但那只是她的判断，不能据此替他的要求开脱。她现在想联系，又不愿把不满略过，可以建议把见面的意愿和仍介意的事分开表达。","Her deskmate had a read on his behavior, but it's still her guess and doesn't excuse what he asked. The girl wants to reach out without letting the issue slide. She can express the two things separately."]],"choices":[{"thought":["把想见和介意都留住","Keep both things on the table"],"reply":["他是不是因为慌了才那么问，可以以后再谈。你现在想见他，也仍然介意被要求看聊天，这两件事不冲突，先联系不代表你要装作没发生过。","You can talk later about whether he asked because he panicked. You want to see him, and you're still bothered he wanted to see your messages. Both can be true. Reaching out first doesn't mean you have to pretend it didn't happen."]}],"memories":[]},"7f.FCHOICE":{"time":"Sunday Morning","lines":[["我刚想问他今天出不出来，打完又没发。昨天一天没理他。消息我都看见了，就是故意没回，当时也想让他等一回。现在突然问他出来吗，感觉怪怪的。\\n但我又想见他。那天那些事我想见了再说，微信上说着说着肯定又扯回小周了。你帮我想想该咋说。","I typed out a message asking if he could come out today, then didn't send it. I ignored him all day yesterday. I saw the messages. I didn't answer on purpose. I wanted him to have to wait for once. Now it feels weird to suddenly ask him to come out.\\nBut I want to see him. I'd rather talk about what happened in person. On WeChat it'll end up back on Xiao Zhou again. Can you help me work out what to say?"],["她想约男友见面，但担心突然联系显得若无其事。可以建议她先说明昨天故意没回，再提出邀约，让对方知道她愿意谈这件事；或者先表达想见面的意愿，把之前的矛盾留到当面再说。","She wants to see him but worries getting in touch out of the blue will sound like nothing happened. She can say she didn't answer on purpose before inviting him, or start with wanting to see him and leave the rest for in person."]],"choices":[{"thought":["先承认故意没回","Admit she didn't reply on purpose"],"reply":["可以先说出昨天故意没回的事，再约见面：“昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。”承认自己这部分，不等于他要求看聊天就没问题了。","You can say you didn't answer on purpose, then invite him: “I saw all your messages yesterday. I didn't answer on purpose. I wanted you to have to wait for once. Want to go for a walk today? I want to see you.” Owning your part doesn't make his demand to see your messages okay."]},{"thought":["先从想见他开口","Start with wanting to see him"],"reply":["可以先发：“今天出来走走吗？我想见你。”先开口不等于昨天的事就算了，只是先给你们一个当面说话的机会。","You can send, “Want to go for a walk today? I want to see you.” Reaching out first doesn't settle what happened yesterday. It gives you both a chance to talk in person."]}],"memories":[]},"7f.FSENTEASY":{"time":"Sunday Morning","lines":[["发了。现在换我在这儿看他回没回了。昨天他是不是也这样啊，算了，不想了。","Sent it. Now I'm the one checking whether he's replied. Was this what it felt like for him yesterday? Ah, forget it."],["发出邀约后，她也开始等待，并短暂想到男友昨天的处境。可以回应眼前的等待，不把这句感想扩大成已经反省，也不替她判断男友现在的情绪。","She's waiting now and briefly wondered what yesterday was like for him. I can address the wait without assuming she's already reflected on it or guessing how he's feeling."]],"choices":[{"thought":["陪她等实际回复","Wait for his actual answer"],"reply":["刚发出去，先给他一点时间，不用马上盯着有没有回。你想见他的意思已经说了，其他话可以等他回应后再决定怎么讲。","You just sent it. Give him a minute before checking. You've told him you want to see him. You can decide how to say the rest once he answers."]}],"memories":[]},"7f.FSENTOPEN":{"time":"Sunday Morning","lines":[["发了。我现在看着那句我当时就想让你也等一回，又觉得自己也挺凶的。他要是半天不回，我估计也得慌。","Sent it. Now I'm looking at “I wanted you to have to wait for once” and it sounds kind of mean. If he doesn't reply for ages, I'll probably start freaking out too."],["她发出邀约并承认故意冷落，开始想到自己等不到回复也会不安。可以建议先给对方反应的时间，不立刻追加解释，也不预测他一定会怎样回应。","She admitted keeping him waiting and is now imagining how she'd feel in his place. Give him time to react before she adds any explanation."]],"choices":[{"thought":["给他一点接话时间","Give him time to answer"],"reply":["先给他一点时间。这条消息里有邀约，也有昨天的事，不用急着再补一大段，看看他怎么回。","Give him a little time. You put the invitation and what happened yesterday in the same message. You don't need to add a whole paragraph now. See what he says."]}],"memories":[]},"7m.SUN":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7m.OPENCHOICE":{"time":"Sunday Morning","lines":[["她终于找我了。发的是：昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。\\n我看了两遍。刚看见她找我还挺高兴的，可她真就看着我等了一天啊，我现在又不知道咋回了。","She finally texted me. She wrote: “I saw all your messages yesterday. I didn't answer on purpose. I wanted you to have to wait for once. Want to go for a walk today? I want to see you.”\\nI read it twice. I was happy she texted, and then I realized she really watched me wait all day. Now I don't know what to say again."],["她主动邀约，也承认了故意不回。他既想见她，又对这一天的等待感到受伤。可以建议先说出难受，也可以先答应见面，具体说多少应留给他选择。","She reached out and admitted not replying on purpose. He wants to see her and feels hurt about waiting all day. He can say it hurt or just agree to meet for now."]],"choices":[{"thought":["说出等了一天的难受","Say waiting all day hurt"],"reply":["可以先答应见面，也把你的难受说出来：“好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。”说自己的感受，不必再猜她跟别人怎么样。","You can say yes to meeting and tell her how it felt: “Okay. See you this afternoon. I kept waiting for you to reply yesterday. You saw my messages and ignored me all day, and that really hurt.” You can talk about how you feel without guessing what's going on with anyone else."]},{"thought":["先接住见面的邀请","Accept the invitation first"],"reply":["可以先回：“好，下午见。”你现在想先见到她，就先把时间地点约好；昨天没说完的话，见面还有机会说。","You can just write, “Okay. See you this afternoon.” If you want to see her first, set a time and place. There's room to talk about yesterday in person."]}],"memories":[]},"7m.PLAINCHOICE":{"time":"Sunday Morning","lines":[["她终于找我了，就一句：今天出来走走吗？我想见你。\\n我差点直接回好。可昨天到底算怎么回事啊，现在问她，会不会又不理我了？","She finally texted. Just: “Want to go for a walk today? I want to see you.”\\nI almost went straight for yes. But what was yesterday about? If I ask now, is she going to stop replying again?"],["这次邀约没有提到昨天的沉默。他想答应，又怕追问让她再次不理人。可以把等待中的难受说出来，也可以先确认见面，不能替她补上没有说过的解释。","Her invitation doesn't mention the silence yesterday. He wants to see her but worries she'll stop replying if he asks about it. He can say the wait hurt or confirm the plans first. I don't know why she didn't reply."]],"choices":[{"thought":["把昨天的难受带出来","Say how yesterday felt"],"reply":["可以答应见面，也把你昨天等消息的感受说出来：“好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？”","You can accept and say how waiting felt: “Okay. See you this afternoon. I waited all day for a reply yesterday and it really hurt. Next time you want some time to yourself, could you tell me first?”"]},{"thought":["先把见面约下来","Make plans to meet first"],"reply":["可以先回：“好，下午见。”先确认你们都愿意见面，再商量地点。答应邀约并不等于你昨天没有难受，那部分可以等见了再考虑怎么说。","You can say, “Okay. See you this afternoon.” Make sure you both want to meet, then pick a place. Saying yes doesn't make yesterday stop hurting. You can think about what to say once you see her."]}],"memories":[]},"7f.REPLYEASY":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7f.REPLYOPEN":{"time":"Sunday Morning","lines":[],"choices":[],"memories":[]},"7f.RECEIVEDBOTH":{"time":"Sunday Morning","lines":[["他回了：好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。\\n我知道我就是想让他难受。可他真这么说，我又有点不知道接什么了，咋回啊？","He said: “Okay. See you this afternoon. I kept waiting for you to reply yesterday. You saw my messages and ignored me all day, and that really hurt.”\\nI know I wanted him to feel bad. Now that he's actually said it hurt, I don't know what to say back. What do I reply?"],["他明确说出等待的难受，她听到后有些不自在。可以建议承认故意让他等不合适，而不是又把话转回他的质问；她对那件事的不满仍可留到见面谈。","He told her waiting hurt him. Hearing that made her uncomfortable. She can own that she kept him waiting on purpose and leave how she feels about his questions for when they meet."]],"choices":[{"thought":["接住他真的受了伤","Acknowledge that it really hurt"],"reply":["可以先回应他这句难受：“我知道。我昨天很烦，但不该故意让你等。下午见。”先承认故意不回这件事，不用在同一句里把所有委屈都解释完。","Start with the part about it hurting: “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.” You can admit you shouldn't have kept him waiting without trying to explain every part of the fight in that same message."]}],"memories":[]},"7f.RECEIVEDHER":{"time":"Sunday Morning","lines":[["他回得还挺快，就一句好，下午见。是不是也没那么气了？","He replied pretty fast. Just “Okay. See you this afternoon.” You think he's not that mad anymore?"],["他只答应了见面，没有说明对昨天的感受。她把回复快理解成不生气，可以先确认邀约已被接受，再提醒不能仅凭这句话判断他的情绪。","He agreed to meet but didn't say how he felt about yesterday. She's taking the quick reply as a sign. They do have plans, but it's too early to read his feelings into that one line."]],"choices":[{"thought":["接住邀约 不替他猜情绪","Accept the yes without guessing"],"reply":["能确定的是，他愿意见你了。至于还有没有生气，单看一句“好，下午见”还说不准，见面时也可以听听他怎么说。","You know he's willing to see you. As for whether he's still mad, “Okay. See you this afternoon” doesn't tell you that. You can hear him out once you meet."]}],"memories":[]},"7f.RECEIVEDHIM":{"time":"Sunday Morning","lines":[["他回：好，下午见。昨天一直等不到你回，我挺难受的。下次要是想自己待会儿，能不能先跟我说一声？\\n我就是气他前天那么问，可我确实没跟他说过我想自己待会儿。这句该怎么回？","He wrote: “Okay. See you this afternoon. I waited all day for a reply yesterday and it really hurt. Next time you want some time to yourself, could you tell me first?”\\nI was just angry about how he questioned me the day before yesterday. But I really didn't tell him I wanted time alone. How do I answer this?"],["他告诉她等不到回复很难受，也提出了具体请求。她可以交代昨天在生气，留到见面再谈经过。","He said it hurt to wait and made a specific request. She can say she was angry and leave the details for in person."]],"choices":[{"thought":["回应他等不到消息","Answer the part about waiting"],"reply":["可以回：“我昨天就是气你那样问，没跟你说一声。下午见了说吧。”先回应他等不到消息这件事，前天的争执见面再说。","You can reply: “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.” Acknowledge he was waiting for a reply, then talk about the argument in person."]}],"memories":[]},"7f.RECEIVEDQUIET":{"time":"Sunday Morning","lines":[["他回好，下午见。我昨晚还怕他说不想见呢，看来是我想多了。","He said, “Okay. See you this afternoon.” Last night I was afraid he wouldn't want to see me. Guess I was overthinking it."],["他答应见面，她因此放松了一点。目前只知道邀约得到回应，可以顺势建议确认地点，不推断两人已不再介意之前的事。","He said yes and she feels a little better. All I know is he accepted. They can pick where to meet without assuming neither of them cares about what happened."]],"choices":[{"thought":["先把见面安排好","Make plans to meet"],"reply":["至少见面这件事，他是愿意的。先把时间地点定好，其他还想说的话，到时再看怎么开口。","He does want to meet. Pick a time and place. You can decide how to bring up anything else once you're there."]}],"memories":[]},"7f.ACKBOTH":{"time":"Sunday Morning","lines":[["回了，就按那句说的，我知道。我昨天很烦，但不该故意让你等。下午见。","I replied with what we came up with: “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.”"],["她已照建议回应了他的难受，暂时没有新的消息或问题。可以简短确认，让她等对方回复，不再追加一轮解释，打断已经开始恢复的交流。","She's acknowledged how waiting felt for him. There isn't a new message or question. Keep it short and let him answer, so she doesn't feel she has to send another explanation."]],"choices":[{"thought":["等他接这句话","Wait for his answer"],"reply":["嗯，先等他回。这句已经回应了他的难受，不用急着再补什么。","Yeah, let him answer. You've already acknowledged that it hurt. You don't need to rush to add anything."]}],"memories":[]},"7f.ACKHIM":{"time":"Sunday Morning","lines":[["发了，我昨天就是气你那样问，没跟你说一声。下午见了说吧。","Sent it: “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.”"],["她已经解释了没回复的原因，也表达了愿意当面谈。现在需要留出让对方回应的时间，简短确认即可，不反复要求她补充更完整的解释。","She's said why she didn't answer and that she wants to talk in person. Give him room to respond without asking her to fill in every detail now."]],"choices":[{"thought":["等他接这句话","Wait for his answer"],"reply":["好，先等他回。你想继续见面聊的意思已经说清楚了。","Okay, let him answer. You've made it clear you want to talk when you see him."]}],"memories":[]},"7m.SENTBOTH":{"time":"Sunday Morning","lines":[["发了。她回，我知道。我昨天很烦，但不该故意让你等。下午见。\\n我又问了在哪碰头，等她定地方。","Sent it. She said, “I know. I was upset yesterday, but I shouldn't have kept you waiting on purpose. See you this afternoon.”\\nI asked where we should meet. Waiting for her to pick."],["她承认不该故意让他等，说明这次表达得到了回应。接下来可以先落实见面，不必继续在消息里要求更多解释，免得又陷入反复确认。","She said she shouldn't have made him wait on purpose. She heard what he said. They can set up the meeting without getting stuck looking for more answers over text."]],"choices":[{"thought":["接住她的回应","Acknowledge her response"],"reply":["她这次回应了你的难受，也说了不该故意让你等。可以先把见面约好，剩下想说的留到当面，不用现在就把每句话都问到底。","She heard you say it hurt and said she shouldn't have kept you waiting. Set up the meeting and leave the rest for in person. You don't have to get to the bottom of every line right now."]}],"memories":[]},"7m.SENTHER":{"time":"Sunday Morning","lines":[["回了。我又问她在哪碰头。刚才打了半句昨天我，想想还是删了。","I replied. Asked where we should meet. I typed half a sentence, “Yesterday I…” and deleted it."],["他删掉了准备说的委屈，可能是怕破坏刚恢复的联系。可以尊重他先见面的选择，但不把删掉消息理解成已经释怀，也不催他马上重新发出。","He deleted what he was about to say, maybe because he didn't want to spoil the fact they're talking again. He can see her first. Deleting it doesn't mean he's over it or has to send it again now."]],"choices":[{"thought":["给没说完的话留点余地","Leave room for what he didn't say"],"reply":["先约好见面也可以。那半句删掉了，不代表你的难受就没了；等见到她，你还想说的话，可以再从昨天自己怎么过的讲起。","It's okay to make plans first. Deleting that half a sentence doesn't make the hurt go away. If you still want to say something when you see her, you can start with what yesterday was like for you."]}],"memories":[]},"7m.SENTHIM":{"time":"Sunday Morning","lines":[["发了。她回，我昨天就是气你那样问，没跟你说一声。下午见了说吧。\\n我又问了在哪碰头，等她定地方。","Sent it. She wrote, “I was angry you asked me that, and I didn't give you a heads-up. Let's talk when we see each other this afternoon.”\\nI asked where we should meet. Waiting for her to pick."],["女友解释了昨天为什么没回复，也愿意见面谈。可以先安排见面，再当面说等待的经历。","She explained why she didn't reply and is willing to talk in person. They can make plans and talk about what waiting felt like then."]],"choices":[{"thought":["让话留到见面慢慢说","Leave the rest for in person"],"reply":["她告诉你昨天为什么没回，也愿意当面聊。先把见面约下来，你昨天怎么等过来的，也可以到时候讲。","She told you why she didn't reply and wants to talk face-to-face. Set up the meeting. You can tell her what yesterday was like for you once you're there."]}],"memories":[]},"7m.SENTQUIET":{"time":"Sunday Morning","lines":[["回了，我又问她在哪碰头。昨天的事我还是没敢问，先见了再说吧。","I replied and asked where to meet. I still didn't dare ask about yesterday. I'll see her first and go from there."],["他暂时不敢提昨天，只想先恢复联系。需要尊重这个选择，同时回应他怕再次被冷落的顾虑，不要把先见面写成必须放下委屈。","He's not ready to bring up yesterday and wants to get back in touch first. Let him choose that without implying he has to get over being hurt."]],"choices":[{"thought":["接住想见她的心情","Acknowledge that he wants to see her"],"reply":["那就先把见面约好。你想见她，和你昨天确实难受，并不冲突；不用为了今天能好好相处，就要求自己马上不在意了。","Then set up the meeting. You want to see her and yesterday really hurt. Both are true. Getting along today doesn't mean you have to stop caring about it right away."]}],"memories":[]},"7f.SETBOTH":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["两人已回应彼此的难受，也安排好了见面。她在同步邀约的结果，可以确认安排，让后面的谈话留到当面，不必继续催她通过消息解释。","They've responded to each other's hurt and made plans. She just wants to say what they decided. Confirm it and leave some of the conversation for in person."]],"choices":[{"thought":["把话留到当面慢慢说","Leave room to talk in person"],"reply":["好，先按这个安排见面。你们已经各说了一点，剩下的可以慢慢讲，不用现在全挤在聊天里。","Okay, meet as planned. You've both said a little already. You can talk through the rest without trying to fit it all into messages now."]}],"memories":[]},"7f.SETHER":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["见面的时间地点已经确定，但他还没有谈自己的感受。可以确认安排，把听对方怎么想的机会留到见面，不提前替他说已经没事。","They've settled where and when to meet, but he hasn't said how he feels. Confirm the plan and let him speak for himself when they meet."]],"choices":[{"thought":["确认约定 轻收尾","Confirm the plan, then wrap up"],"reply":["那就先把这次面见上。你想说的、也想听他怎么说的，都可以留到当面，不急着在消息里一次聊完。","Get together first. What you want to say, and what you want to hear from him, can wait until you're face-to-face. You don't have to cover it all in messages."]}],"memories":[]},"7f.SETHIM":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there."],["她澄清了没有分手的意思，也约定了时间地点。接下来可以当面说各自介意的事，回复应帮助结束眼前的等待，不再重复推演他的态度。","She clarified she wasn't trying to break up, and they've agreed on a time and place. They can talk in person about what bothered each of them. This can end the wait without more guessing about how he feels."]],"choices":[{"thought":["留一点空间当面聊","Leave space to talk in person"],"reply":["好，下午见了再说。可以先讲你介意哪几句话，也听听他等消息时怎么想的，不必在见面前把结果都猜好。","Okay, talk this afternoon. You can say which things he said bothered you, and hear what it was like for him to wait. You don't have to guess how it will end before you meet."]}],"memories":[]},"7f.SETQUIET":{"time":"Sunday Morning","lines":[["他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。昨天的事到时候再看吧。","He asked where to meet, so I said four at the subway exit, then a walk and dinner. I told him to think about what he feels like eating and we'll decide when we get there. We'll see about yesterday once we're there."],["她决定先见面，再看要不要谈昨天。安排已落实，可以简短确认，尊重她暂时没有往下谈的选择，不因为今天约上了就替她宣布矛盾过去。","She's decided to see him first and then decide whether to bring it up. They have a plan. I can confirm it without saying the argument is over just because they're meeting."]],"choices":[{"thought":["确认约定 轻收尾","Confirm the plan, then wrap up"],"reply":["好，那先见面。现在不用连昨天要怎么谈都安排好，到时候看看你们各自想说什么。","Okay, meet first. You don't have to plan how to talk about yesterday now. See what you each want to say once you're there."]}],"memories":[]},"7m.MEMBOTH":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMHER":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMHIM":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.MEMQUIET":{"time":"Sunday Morning","lines":[["约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？","It's set. Four at the subway exit, then a walk and dinner. She told me to think about what to eat. What should I pick?"],["时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。","The time and place are set. He's thinking about dinner and wants the meeting to be easy. Offer a suggestion he can check with her instead of making dinner another guessing game."]],"choices":[{"thought":["接回她提过的烤肉","Bring up the barbecue she wanted"],"reply":["她之前说想吃烤肉。可以问她：“你之前说想吃烤肉，今天去吗？”她想吃别的，你们再一起挑。","She said she was craving barbecue. You could ask, “You mentioned barbecue before. Want to go today?” If she's in the mood for something else, pick together."]},{"thought":["选个能慢慢吃的地方","Pick somewhere they can take their time"],"reply":["可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。","Find somewhere quiet enough to sit and take your time, then see if she feels like going. It doesn't have to be the perfect place on the first try. Give her an idea and decide together."]}],"memories":[]},"7m.PLANENDBOTH":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDHER":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDHIM":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.PLANENDQUIET":{"time":"Sunday Morning","lines":[["嗯，就按你说的问问她，看她想不想去。下午四点先见上。","Yeah, I'll ask whether she wants to go, like you said. We'll meet at four first."],["他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。","He's going to ask her and they've already settled when and where to meet. He has a next step. A brief acknowledgment is enough."]],"choices":[{"thought":["肯定先商量着来","Agree they can decide together"],"reply":["好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。","Okay, meet at four first. You can decide what to eat together. You don't have to plan the whole thing now."]}],"memories":[]},"7m.AFTERBOTH":{"time":"Sunday Evening · After Meeting","lines":[["回来跟你说一声，见了。吃饭的时候她又提了昨天，说当时就想让我也急一下。我说以后真不想说话，至少别让我一直等着猜。她答应了。\\n我也说以后不乱猜她和同事的关系了。后面就聊别的了，没一直绷着。","Just got back. We met up. At dinner she brought up yesterday again and said she wanted to make me sweat a little. I said next time she really doesn't want to talk, at least don't leave me waiting and guessing the whole time. She said okay.\\nI said I'd stop jumping to conclusions about her and her coworker. Then we talked about other stuff, and it wasn't tense the whole time."],["两个人当面谈到了质问和等待，也分别作了回应。他带回见面结果，可以肯定这次表达的具体进展，不必再追问，或把今天的承诺当成以后一定不会重演。","They talked about the questioning and the waiting in person and both responded. I can recognize what they actually said without asking more or assuming the same thing could never happen again."]],"choices":[{"thought":["肯定这次把话说出来","Acknowledge that they said it"],"reply":["这次你把等得难受说出来了，也承认了自己不该乱猜。今天能从僵着不说，走到把各自介意的事讲一点，已经是个变化，今晚可以先歇歇。","You told her how hard it was waiting, and you said you shouldn't have jumped to conclusions. You went from not talking at all to saying a little about what bothered each of you. That's a change. You can rest tonight."]}],"memories":[]},"7m.AFTERHER":{"time":"Sunday Evening · After Meeting","lines":[["见完了。吃饭时她又说昨天气上头了，我就说嗯，过去吧，然后换了个话题。\\n她后面一直给我讲这周的事，我听着挺高兴的。昨天那些话还是没说，刚好起来，我真不太敢再弄僵了。","Just got back. At dinner she said again that she got carried away because she was angry yesterday. I said, “Yeah, let's move on,” and changed the subject.\\nShe told me about her week after that. I was happy listening. I still didn't say any of the stuff about yesterday. Things had just started feeling okay again. I really didn't dare mess it up."],["见面和她的解释让他放松，但他明确说自己仍不敢提委屈。可以回应这个顾虑，让他知道今天没说不等于以后不能说，不替他认定事情已经过去。","Seeing her and hearing her explanation helped, but he says he still doesn't dare say how he felt. He can talk about it another time. I won't assume it's behind him."]],"choices":[{"thought":["留住还没说的感受","Keep room for what he hasn't said"],"reply":["你高兴她又愿意跟你讲这些，也怕一提昨天就把气氛弄坏，所以把话咽回去了。今天没说，以后仍然可以说，不一定要等到又出事时才能提。","You're happy she wanted to tell you things again, and afraid talking about yesterday would spoil it, so you swallowed it. You can still say it later. It doesn't have to take another fight to bring it up."]}],"memories":[]},"7m.AFTERHIM":{"time":"Sunday Evening · After Meeting","lines":[["回来了。她说昨天看见我那些消息还是烦，怕回一句又得接着解释。我说以后不乱猜她和同事的关系了，但不能一直不理我。她说知道了。\\n后面一起吃了饭。我也不知道她听进去多少，反正能好好说话了，就没再追着问。","I'm back. She said she was still annoyed when she saw my messages yesterday and didn't want to get dragged into explaining again. I said I wouldn't jump to conclusions about her and her coworker anymore, but she can't keep ignoring me. She said she understood.\\nThen we ate. I don't know how much really got through, but we could talk normally again, so I didn't keep asking."],["他表达了不能接受一直不回应，也承认不该猜疑同事关系。她口头回应知道了，他仍不确定。可以肯定话已说出，至于承诺有没有落实，需要以后相处再看。","He said he can't keep going without answers and admitted he shouldn't have assumed anything about her coworker. She said she understood. He's still unsure. He said what he needed to say. How they handle things next time will tell him more."]],"choices":[{"thought":["先接住能好好说话","Acknowledge that they could talk again"],"reply":["你已经把不能一直不理你这点说出来了，也承认自己不该乱猜。她听进去多少，不用今天再追问出一个保证，之后怎么相处，比反复说知道了更能说明问题。","You told her you can't be left waiting forever and acknowledged that you shouldn't have jumped to conclusions. You don't have to get a guarantee out of her today. What you do next time will tell you more than another “I understand.”"]}],"memories":[]},"7m.AFTERQUIET":{"time":"Sunday Evening · After Meeting","lines":[["见完了。她见我先问中午吃了没，我说没吃多少，她说那晚上多吃点。当时就觉得，算了，能好好说话就行。\\n后来聊了挺多，谁也没提周五的事。可现在回来又有点怕，下次她不回我，不还得这么等着吗？","Just got back. When she saw me she asked if I'd eaten lunch. I said not much, so she told me to eat more at dinner. I thought, forget it. At least we're talking again.\\nWe talked about a lot of things, but neither of us brought up Friday. Now that I'm home I'm worried again. Next time she doesn't reply, won't I just be waiting like this all over again?"],["见面时他想先恢复日常，回来后却仍担心再次被冷落。需要回应这种落差，让他知道轻松和难受可以同时存在，不催他今晚继续谈，也不把未谈当作已解决。","He wanted things to feel normal when they met. At home he's afraid of being left hanging again. A good time and an unresolved issue can coexist. He doesn't have to talk about it tonight."]],"choices":[{"thought":["给委屈留一个出口","Leave room to talk about the hurt"],"reply":["当时见到她，你想先把日子过回来；现在静下来，昨天的难受又冒出来了。这不奇怪，见面开心和事情没说开可以同时存在。等想清楚了，可以只讲那一天你怎么等的。","When you saw her, you wanted things to feel normal. Now that you're alone, yesterday's hurt has come back. It makes sense. You can enjoy seeing her and still have something you need to talk about. When you're ready, you can start with what that day of waiting was like."]}],"memories":[]},"7m.OVER":{"time":"Sunday Evening · After Meeting","lines":[],"choices":[],"memories":[]},"7f.AFTERBOTH":{"time":"Sunday Evening · After Meeting","lines":[["回来了，跟你说一声。见面我还是说了，昨天就是想让他急一下。他说以后真不想说话也告诉他，别让他一直猜，我答应了。\\n他也说以后不乱猜我和同事的关系了。后面吃饭就聊别的了，没一直说这个。","I'm back. Just letting you know how it went. I told him in person I wanted to make him sweat a little yesterday. He said next time I really don't want to talk, at least tell him so he's not left guessing. I said I would.\\nHe said he'd stop jumping to conclusions about me and my coworker. Then we talked about other stuff over dinner. We didn't stay on this all night."],["见面时两人再次谈到故意不回和猜疑，也分别作出了回应。可以肯定这次具体的沟通，不把口头承诺扩大成关系问题已经解决，今晚也不必继续追问。","They talked about not answering on purpose and about being suspicious. They each responded. I can recognize what they managed to say without assuming they've solved it all or continuing the questioning tonight."]],"choices":[{"thought":["肯定说出了以前没说的话","Acknowledge what they finally said"],"reply":["你说出了当时想让他急，他也说了不想一直猜，你们这次把话接上了一些。后面能聊点别的，今晚就先歇歇，不用把一顿饭变成把所有事都解决完的任务。","You told him you wanted to make him sweat, and he said he didn't want to keep guessing. You managed to hear each other a little this time. You could talk about other things after that. Take the night off. Dinner didn't have to fix everything."]}],"memories":[]},"7f.AFTERHER":{"time":"Sunday Evening · After Meeting","lines":[["回来啦。吃饭时我又说了句昨天气上头了，他就说嗯，过去吧，后面就聊别的了。\\n我本来还怕尴尬，他倒一直挺好说话的，我也就没那么紧张了。","I'm back. At dinner I said again that I got carried away because I was angry yesterday. He said, “Yeah, let's move on,” and we talked about other things.\\nI was afraid it would be awkward, but he was easy to talk to the whole time. I felt less nervous."],["她看到的是男友好说话、见面不尴尬，因此轻松了一些。他有没有其他感受尚不知道，可以回应她的放松，同时鼓励以后直接表达不满，而不是猜测对方都不介意。","She saw that he was easy to talk to and the meeting went well, so she relaxed. I don't know how else he felt. I can share her relief and encourage her to tell him what bothers her next time."]],"choices":[{"thought":["接住这次见面的轻松","Acknowledge the relief"],"reply":["见面没像你担心的那么尴尬，你也轻松了一点。以后再有不舒服，可以试着直接告诉他；不必一定等气过去，才重新说话。","It wasn't as awkward as you feared, and you got to relax a little. Next time something bothers you, you can try telling him directly. You don't have to wait until you're past being angry to talk again."]}],"memories":[]},"7f.AFTERHIM":{"time":"Sunday Evening · After Meeting","lines":[["见了。他说昨天一直等，我就说看见消息还是烦，怕回一句又得接着解释。他说以后不乱猜我和同事的关系了，但不能一直不理他。我说知道了。\\n后来吃饭还挺正常的，我也不想再说小周了。","We met. He said he waited all day yesterday. I said I was still annoyed when I saw the messages and didn't want to get dragged into explaining again. He said he wouldn't jump to conclusions about me and my coworker anymore, but I can't keep ignoring him. I said I understood.\\nDinner felt pretty normal after that. I didn't want to talk about Xiao Zhou anymore either."],["她说明了不愿回应的原因，也听到了男友不能接受一直被冷落。他承认不该乱猜，双方暂时恢复了日常。可以建议下次先说需要缓缓，避免继续靠沉默传达不满。","She explained why she didn't want to reply and heard how hard it was for him to keep waiting. He acknowledged jumping to conclusions. Things feel more normal for now. Suggest a quick heads-up next time she needs a break."]],"choices":[{"thought":["提醒下次留一句话","Suggest a heads-up next time"],"reply":["他这次说清了，一直等不到回复会让他难受。下次你不想继续解释，可以先告诉他需要缓一缓，让他知道你暂时不想聊，而不是只能靠不回去猜。","He made it clear that waiting without an answer hurts. Next time you don't want to keep explaining, you can tell him you need a minute so he knows you need a break instead of having to read it into the silence."]}],"memories":[]},"7f.AFTERQUIET":{"time":"Sunday Evening · After Meeting","lines":[["回来啦。见面我问他中午吃了没，他说没吃多少，我说那晚上多吃点，他就笑了。后面还挺好的。\\n昨天的事情谁也没提。可能就是气头上那会儿过去了吧。","I'm back. I asked if he'd eaten lunch and he said not much. I told him to eat more at dinner, and he smiled. It was pretty nice after that.\\nNeither of us brought up yesterday. Maybe we were just mad in the moment and it's passed."],["她把见面顺利理解成气已过去，但也明确说没有谈昨天。可以承认今天相处的轻松，不顺着认定不提就等于不介意，把以后再说的可能留给她。","She's taking the easy evening as a sign the anger might be over. They didn't talk about yesterday. I can acknowledge that it felt good and leave her room to talk about it later."]],"choices":[{"thought":["接住靠近 留着未尽的话","Share the relief and leave room to talk"],"reply":["今天能好好相处，你松口气很正常。昨天没提的事，也不一定就不介意了；以后你还想说，可以再找机会，不必因为今天开心就当作不能提。","It makes sense you're relieved you got along today. It can still bother you even if you didn't bring it up. If you want to say something later, you can. Having a good time today doesn't take that away."]}],"memories":[]},"7f.STATION":{"time":"Sunday Evening · After Meeting","lines":[["对了，他吃饭拍的照片全是糊的。说他兄弟外号叫废片大王，他这手艺就是跟那人学的。我说你这师父找得挺准啊。","Oh, every photo he took at dinner came out blurry. He says his friend goes by King of Bad Photos and that's who taught him. I said, “You really picked the right teacher.”"],["她又补了一件吃饭时的趣事，语气比之前轻松。现在没有新的求助，可以顺着照片接一句，让聊天自然结束，不必再把话题拉回矛盾分析。","She's added a funny thing from dinner and sounds more relaxed. She doesn't need help with anything else. Answer the joke and let the chat end naturally."]],"choices":[{"thought":["接回他下错站的小糗事","Call back to the wrong stop"],"reply":["那下次合照还是你来拍吧。下错一站要跟你说，拍糊了也要跟你说，这些小糗事也愿意跟你分享，讲起来倒是没怎么端着。","You should take the photo next time. He tells you when he gets off a stop early and when he takes a blurry photo. He's happy to share those little mishaps with you. He doesn't seem to put on much of an act when he tells you."]},{"thought":["顺着糊照片轻收尾","End on the blurry photos"],"reply":["这师承关系算是认下了。下次合照还是你来拍，让他负责好好站着，至少先保住一张清楚的。","Well, that explains where he learned it. You take the next one and let him concentrate on standing still. That should get you at least one clear photo."]}],"memories":[]},"7f.OVER":{"time":"Sunday Evening · After Meeting","lines":[],"choices":[],"memories":[]},"8f.F101":{"time":"One-Month Anniversary","lines":[["今天我跟我男朋友在一起一个月了。晚上约好吃饭。我中午能下楼一趟，想顺手给他买点什么。买啥啊？","It's been a month since my boyfriend and I got together. We're having dinner tonight. I can go downstairs at lunch, so I want to pick up a little something for him. What should I get?"],["用户想给男友带一点东西庆祝，中午有时间下楼。可以提供一项具体、容易买到的小建议。","The user wants a little gift to celebrate, and she has time to go downstairs at lunch. Give her a concrete suggestion that's easy to buy."]],"choices":[{"thought":["想起他提过的青提蛋糕","Remember the green grape cake"],"reply":["他提过想吃青提蛋糕，你可以去附近看看有没有小份的。晚上吃完饭一起分，正好。","He mentioned wanting green grape cake. See if there's a small one nearby. You can split it after dinner tonight."]},{"thought":["挑一份容易带的小点心","Pick an easy-to-carry treat"],"reply":["可以买一小盒曲奇，带着也方便。晚上见到他再给，不用为了一份礼物来回跑。","You could get a small box of cookies. It's easy to carry and you can give it to him tonight. No need to run all over for a gift."]}],"memories":[]},"8f.F102A":{"time":"One-Month Anniversary","lines":[["真买到了。小小一个，我塞办公室冰箱了。晚上拿，应该不会忘吧哈哈。","I actually found one. It's tiny. I stuck it in the office fridge. I'll grab it tonight. I won't forget, right? Haha."],["用户买到了蛋糕，已经放进办公室冰箱。可以给她一个简单办法，免得下班忘拿。","The user found the cake and put it in the office fridge. Give her an easy way to remember it when she leaves."]],"choices":[{"thought":["提醒出门前拿蛋糕","Remind her to grab the cake"],"reply":["下班前设个提醒吧。写个「冰箱里的蛋糕」，到时候看一眼就知道了。","Set a reminder for before you leave work. Just write “cake in the fridge.” You'll know what it means when you see it."]}],"memories":[]},"8f.F102B":{"time":"One-Month Anniversary","lines":[["买了盒曲奇。我先塞包里了。晚上他要问为什么不是别的，我就说店里它排第一个。","Got a box of cookies. Put it in my bag. If he asks why I got these, I'll say they were first on the shelf."],["用户已经买好一份小点心，也在随口开玩笑。可以轻松接一句。","The user has picked up a treat and is joking. A light reply is enough."]],"choices":[{"thought":["顺着小礼物聊一句","Play along about the gift"],"reply":["排第一个也算被你选中了。晚上见面再给他，挺好。","First on the shelf still counts as being picked. Give them to him when you see him tonight."]}],"memories":[]},"8m.M101":{"time":"One-Month Anniversary","lines":[["今天跟我女朋友在一起一个月了。晚上约了吃饭，我想顺路给她带杯喝的。你说去哪买？","I've been with my girlfriend for a month today. We're getting dinner tonight and I want to bring her a drink on the way. Where should I get it?"],["用户想给女友带一杯饮料，现在只需要帮他选店。口味可以留到下单时再定。","The user wants to bring her a drink. He just needs to pick a place. He can choose a flavor when he orders."]],"choices":[{"thought":["回想她提过的店","Recall the place she mentioned"],"reply":["她之前提过公司楼下的青杏。可以去那家看看菜单，有想不准的口味再问她。","She mentioned Green Apricot downstairs from her office. You could look at the menu there and ask her if you're not sure what she'd like."]},{"thought":["路上挑一家饮品店","Pick a drink shop on the way"],"reply":["找一家顺路的就行。你要是拿不准她喝什么，可以先看看菜单，到了再挑。","Find somewhere on your way. If you're not sure what she drinks, have a look at the menu and pick when you get there."]}],"memories":[]},"8m.M102A":{"time":"One-Month Anniversary","lines":[["青杏是吧，行，等会儿出门去买。","Green Apricot, right. Okay, I'll go get it when I head out."],["用户定了去青杏，还没出门。简单确认就够了。","The user has decided on Green Apricot and hasn't left yet. A quick confirmation is enough."]],"choices":[{"thought":["确认买饮料的安排","Confirm the drink plan"],"reply":["好，等你出门再买，带过去还是凉的。","Sounds good. Buy it on your way and it'll still be cold when you get there."]}],"memories":[]},"8m.M102B":{"time":"One-Month Anniversary","lines":[["行，我等出门路上看吧。不急。","Okay, I'll look on my way out. No rush."],["用户决定到出门时再挑店，眼下没有需要继续确定的事。","The user is going to choose when he leaves. Nothing else needs settling now."]],"choices":[{"thought":["让安排先留着","Leave the plan open"],"reply":["可以，路上挑就行。","Sure, pick a place on the way."]}],"memories":[]},"8f.F103":{"time":"Early Evening · Change of Plans","lines":[["本来都准备收拾包了，刚叫我把方案再改一遍。还有一堆没弄，我估计出不去了。晚上那顿我得跟他说改天，你帮我想一句？","I was about to pack up, then they asked me to revise the proposal again. I've still got a pile of stuff to do, so I don't think I can leave. I need to ask him to do dinner another day. Can you help me write something?"],["用户临时要改方案，预计不能按约赴餐。她想先告诉男友，可以把变化和改期请求说清，暂时不承诺另一个时间。","The user has a last-minute revision and probably won't make it to dinner. She can explain the change and ask to reschedule without committing to a new time yet."]],"choices":[{"thought":["把加班和改期说清楚","Explain the work and reschedule"],"reply":["可以发「今天临时还得改个东西，估计走不开。晚上那顿改天吃行吗？」先把今晚的变动告诉他，具体哪天等你们都有空再定。","You could send, “Something came up that I need to revise today. I don't think I can get away. Can we do dinner another day?” Let him know about tonight first. Pick a new day once you're both free."]}],"memories":[]},"8m.M103":{"time":"Early Evening · Change of Plans","lines":[["她刚发我「今天临时还得改个东西，估计走不开。晚上那顿改天吃行吗？」我回了「好，你先忙。」我知道她在忙。就是我今天下午老看时间，刚才还在想快下班了。","She just sent, “Something came up that I need to revise today. I don't think I can get away. Can we do dinner another day?” I said, “Okay. Take care of work first.” I know she's busy. I kept checking the time this afternoon, though. I was just thinking it was almost time to get off work."],["用户已经回了女友。他提前盼着下班，突然改期有些失落。先回应这份落差，看看他此刻还有什么想说。","The user has already replied. He was looking forward to work ending and feels let down by the sudden change. Acknowledge how that feels and see what he wants to say now."]],"choices":[{"thought":["接住临时改期的失落","Acknowledge the disappointment"],"reply":["你惦记了一下午，临到下班突然改期，心里空一下很正常。你现在还想跟她说点什么，还是就想找人说说这一下？","You were looking forward to it all afternoon, and it changed right when you were about to get off work. Of course that feels a little empty. Is there anything else you want to tell her, or do you just want to talk about how it felt?"]}],"memories":[]},"8f.F104":{"time":"Early Evening · Change of Plans","lines":[["他说「好，你先忙。」那我先改吧，等弄完再看几点。唉，我本来都在想晚上吃什么了。","He said, “Okay. Take care of work first.” I'll get back to the revisions, then. See what time it is when I finish. Ugh, I was already thinking about what we could eat tonight."],["用户收到改期答复，仍为落空的晚饭可惜。现在她准备回去工作，可以先接住这句。","The user has heard back and is still disappointed to miss dinner. She's about to get back to work. Acknowledge that she was looking forward to it too."]],"choices":[{"thought":["回应她也想赴约","Acknowledge she wanted to go too"],"reply":["你也盼着这顿饭，临时被打断当然会可惜。先把手上的东西改完，等你们能坐下来吃的时候再好好吃。","You were looking forward to dinner too. Of course you're disappointed it fell through. Finish what's in front of you, and enjoy dinner when you can sit down together."]}],"memories":[]},"8m.M104":{"time":"Early Evening · Change of Plans","lines":[["我后来还是想去一趟。给她发了「我给你送点吃的，送到就走。」我已经在路上了。她还没回，吃的和喝的我都买了。","I decided I still wanted to go. I sent her, “I'll bring you something to eat. I'll drop it off and go.” I'm already on my way. She hasn't replied yet. I've got the food and the drink."],["用户已经买了东西并出发，女友还没确认能见面。可以建议用户到楼下先问一句，把下不下来留给她决定。","The user has already bought everything and left. She hasn't said she can see him. He can ask once he gets there and leave it up to her whether to come down."]],"choices":[{"thought":["先确认她方不方便下来","Check if she can come downstairs"],"reply":["到了先问她方不方便下来。她忙的话，你也可以问问东西能不能放前台，省得她临时跑一趟。","When you get there, ask if she can come down. If she's busy, ask if you can leave it at reception so she doesn't have to drop everything and come down."]}],"memories":[]},"8m.M105":{"time":"19:16","lines":[["我现在拎着东西在路口。刚到楼下还没来得及问她，直接看见她跟一男的拿外卖，有说有笑。我说「不是说在忙吗？你跟他聊得还挺开心。」她说「这是小周，我们下来拿外卖。」那几个人都在，她直接来一句「行了，你别在这儿丢人了，回去吧。」就上去了。现在我还站这儿呢。","I'm at the corner holding all this stuff. I just got to her building and didn't even get a chance to ask. I saw her getting takeout with some guy, laughing and talking. I said, “I thought you were busy. You sure look like you're having fun talking to him.” She said, “This is Xiao Zhou. We came down to pick up our food.” Those other people were all there, and she just goes, “Enough. Stop embarrassing yourself here. Go home.” Then she went upstairs. I'm still standing here."],["用户特地买了吃的过来，却当着几个人的面被说丢人，现在还拎着东西站在路口。先让用户知道，我听见了他受的委屈。","The user went out of his way to bring food, got called embarrassing in front of a group, and is still standing at the corner with the bag. First let him know I've heard how hurt he feels."]],"choices":[{"thought":["接住用户的委屈","Acknowledge how much it hurt"],"reply":["你拎着吃的跑过去，她当着那么多人的面说你丢人，说完就上楼了。你一个人拎着东西站在那儿，换谁都不好受。","You brought food all the way over, and she told you to stop embarrassing yourself in front of all those people, then went straight upstairs. Being left there alone, still holding the food, would hurt."]}],"memories":[]},"8f.F105":{"time":"19:19","lines":[["我刚回工位才看见他发的「我给你送点吃的，送到就走。」刚才我跟同事下楼拿外卖，小周跟我说那家饭又给他送错了，我正笑呢，结果也不知道他从哪儿冒出来的，张口就说「不是说在忙吗？你跟他聊得还挺开心。」我说「这是小周，我们下来拿外卖。」怎么一来就问这个啊？","I just got back to my desk and saw his message: “I'll bring you something to eat. I'll drop it off and go.” I'd gone down to pick up food with my coworkers. Xiao Zhou was telling me the place had messed up his order again, and I was laughing. Then my boyfriend came out of nowhere and the first thing he said was, “I thought you were busy. You sure look like you're having fun talking to him.” I said, “This is Xiao Zhou. We came down to pick up our food.” Why would he lead with that?"],["用户没预料男友会来，见到他时还不知道他发过消息。他一开口就问她和同事的事，用户还在为这个生气，可以先回应她当时有多突然。","The user hadn't seen his message and didn't expect him to be there. The first thing he did was question her about her coworker. She's still angry. I can acknowledge how sudden it was."]],"choices":[{"thought":["接住用户的意外","Acknowledge how sudden it felt"],"reply":["你当时只是下楼拿外卖，没想到会碰见他。他又当着同事那么一问，你连发生了什么都还没弄明白，就已经被问上了。","You were just picking up food. You didn't expect to see him, and he asked you that in front of your coworkers. You were already being questioned before you knew what was going on."]}],"memories":[]},"8m.M106":{"time":"19:20","lines":[["对啊，她要我走就说一声呗。那几个人都在，她说完就上楼了，剩我拎着东西站那儿。我越想越气。我问她怎么说完就走了，看她怎么回。","Exactly. If she wanted me to go, she could've just said so. The others were all there. She said that and went upstairs, and I was left holding everything. The more I think about it, the angrier I get. I'll ask why she just walked off and see what she says."],["用户越想越气，已经打算去问女友为什么说完就走。可以提醒他先说自己介意什么，让对方知道他为什么来找她。","The user is getting angrier and is about to ask why she walked off. I can remind him to say what bothered him, so she knows why he's bringing it up."]],"choices":[{"thought":["让用户先说自己的感受","Have him say how he felt"],"reply":["你想问她为什么把你一个人留在那儿。你最介意的是她当着大家说你丢人，就让她先听见这个。","You want to ask why she left you standing there. What hurt most was hearing that in front of everyone. Let her hear that first."]}],"memories":[]},"8f.F106":{"time":"19:24","lines":[["我当时就说了「行了，你别在这儿丢人了，回去吧。」然后我就上来了。他刚发「你刚才怎么说完就走了？当着那么多人说我丢人，你让我站那儿怎么办？」他自己跑来的啊，我都说今晚走不开了。我现在特别想回他。","I said, “Enough. Stop embarrassing yourself here. Go home.” Then I came back upstairs. He just said, “Why'd you just walk away after saying that? You told me I was embarrassing myself in front of all those people. What was I supposed to do, just stand there?” He came here on his own. I told him I couldn't get away tonight. I really want to answer him right now."],["用户想回男友，因为她在意的是对方没等答复就来、又当着同事质问她。可以帮她先说清这两件事。","The user wants to reply because he came without waiting for an answer and questioned her in front of her coworkers. I can help her say those two things clearly."]],"choices":[{"thought":["支持用户说清楚","Help her say it clearly"],"reply":["他没等你回就来了，又当着同事那么问，你会生气很正常。要回的话，可以先告诉他，你当时都没看见他要过来的消息。","He came without waiting for a reply, then asked you that in front of your coworkers. It makes sense you're angry. If you want to answer, start with the fact you hadn't seen his message about coming over."]}],"memories":[]},"8m.M107":{"time":"19:35","lines":[["她回「你没等我回就来了，一来就问小周。我都说了是同事，你还要我说什么？」我就发「你俩平时私下也这么聊？那你给我看看聊天记录。」她回「不给。上次要看，这次又来？」我说的是聊天记录，她怎么又跟我扯上次？","She said, “You came without waiting for me to reply. You showed up and went straight to asking about Xiao Zhou. I told you he's a coworker. What else do you want me to say?” I sent, “Do you two talk like this in private too? Then show me your chat history.” She said, “No. You asked to see it last time, and now you're doing it again?” I'm asking about the chat history. Why's she going on about last time?"],["用户想让女友回应他当众受伤的事，却已经追问到私聊记录。对方明确拒绝了，可以解释继续追问会让争执离他原本想说的事更远。","The user wants her to acknowledge how she hurt him in public, but he's now asking to see private messages. She's said no. I can explain how pushing will take them further from what he wanted to say in the first place."]],"choices":[{"thought":["劝用户别再追问","Urge him to stop pressing"],"reply":["她还没回应你被当众说丢人的事，你着急我能理解。但她已经说了不给看，你再追问，她听到的只会是你还在怀疑她。你真正想让她听见的话，反而更难说清楚。","She hasn't answered the part about calling you embarrassing in front of everyone. I get why that bothers you. She's already said she won't show you the chat. If you keep asking, all she'll hear is that you still suspect her. It'll be harder for her to hear what you really wanted to say."]}],"memories":[]},"8f.F107":{"time":"19:40","lines":[["我说小周是同事，他回「你俩平时私下也这么聊？那你给我看看聊天记录。」我回了「不给。上次要看，这次又来？」他又来「那你把他删了吧，工作上不是有群吗？」我俩天天还得对表呢，我删他干嘛？","I said Xiao Zhou's a coworker, and he wrote, “Do you two talk like this in private too? Then show me your chat history.” I said, “No. You asked to see it last time, and now you're doing it again?” Then he goes, “Then delete him. Don't you have a group chat for work?” We still have to check the spreadsheet together every day. Why would I delete him?"],["用户解释了工作关系，仍先后被要求交出私聊和删除同事。她想守住工作来往和隐私，可以帮她把拒绝说清楚。","The user explained that they work together. Then he wanted her private messages and told her to delete her coworker. She wants to protect both her privacy and a working relationship. I can help her say no plainly."]],"choices":[{"thought":["把拒绝说清楚","Make the refusal clear"],"reply":["你可以直接说「他跟我做一个项目，我不会删。」你已经讲了是工作关系，也可以保留自己的聊天记录。","You can say, “We're on the same project. I'm not deleting him.” You've explained it's work. You can also keep your messages private."]}],"memories":[]},"8m.M200":{"time":"19:52","lines":[["我刚才一急，顾不上别的了，就问她能不能把小周删了。结果越说越难听。我都说以后不来了，她回我「你放心，我也不会叫你。」我最后就回了个行。她说不叫就真不叫了是吧？","I got worked up and stopped thinking about anything else. I asked if she could delete Xiao Zhou. It just got nastier. I said I wouldn't come over again, and she said, “Don't worry. I won't ask you to.” I just said fine. Does she really mean she's never gonna ask me over again?"],["用户带着最后一句话回来，想知道女友是不是认真的。她的意思暂时无法确认，可以先问两人怎样说到了以后不见面。","The user has come back with her last line and wants to know whether she meant it. I can't tell yet. Ask how the conversation got to them not seeing each other."]],"choices":[{"thought":["问问争吵的经过","Ask how the fight got there"],"reply":["这句听着够重的。你说以后不来，是怎么说到这儿的？她前面回了你什么？","That sounds harsh. How did it get to you saying you wouldn't come over anymore? What did she say before that?"]}],"memories":[]},"8m.M201":{"time":"19:58 · 19:52","lines":[["她不删，我说她护着小周。她就说以后跟领导说句话是不是也得先问我。我听着就来气。我说以后不来，她说本来也没叫我来。我都跟她说了，当着那么多人被说丢人有多难受。她有哪怕回我一句吗？","She wouldn't delete him, so I said she was sticking up for Xiao Zhou. Then she asked if she needs my permission to talk to her boss from now on. That pissed me off. I said I wouldn't come over again, and she said she never asked me to in the first place. I told her how much it hurt to hear that in front of everybody. Did she say one word back about that?"],["用户想知道，女友有没有回应他当着同事被说丢人的难受。他已经讲出了最后几句，也提到自己要求她删同事。可以先接他没被回应的委屈，或者和他一起把刚才这段重看一遍。","The user wants to know if his girlfriend answered the part about how it felt to hear that in front of her coworkers. He's told me the last few lines and said he asked her to delete her coworker. I can acknowledge that he wasn't heard or go back through it with him."]],"choices":[{"thought":["顺着用户说","Go along with the user"],"reply":["你在意的那句一直没得到回应。后来你一说不来了，她又回你本来就没叫你来。这时候你觉得自己过去这一趟特别没意思，我能理解。","The part you cared about still hasn't been answered. Then you said you weren't coming over again, and she said she hadn't asked you to in the first place. I can see why the whole trip feels pointless now."]},{"thought":["陪用户冷静回顾","Help the user think it through"],"reply":["你说当着她同事被说丢人，心里很难受。她没回应你，你会介意很正常。你刚才也提到，她不肯删，你就说她护着小周。她说小周是同事，你当时为什么没信她？","You said it hurt to hear that in front of her coworkers. It makes sense it bothered you when she didn't answer that. You also said when she wouldn't delete him, you accused her of sticking up for Xiao Zhou. She said he's a coworker. Why didn't you believe her then?"]}],"memories":[]},"8m.M202B5":{"time":"20:03 · 19:52","lines":[["我当时哪顾得上想那么多。她让我走就上楼了，我拎着东西站那儿。以前她就算回得慢，忙完也会跟我说一声的。","I couldn't think about any of that right then. She told me to go and went upstairs. I stood there with the food. Before, even when she took a while, she'd say something when she was done."],["用户想起女友过去虽慢但会回应，今晚却没能把话说完。我记得她答应交往时说过自己不太会谈恋爱，可以顺着用户眼下的落差问他最想说什么。","The user remembers that she'd take a while but still reply. Tonight they never got to finish the conversation. I remember her saying she might not be good at relationships when she agreed to date him. I can ask what he most wanted to hear."]],"choices":[{"thought":["回想两人刚交往时","Think back to when they got together"],"reply":["你以前说她回得慢但都会回，所以你这次也盼着她能再跟你好好说几句。她答应和你在一起时，还说过自己可能不太会谈恋爱。她今天上楼时怎么想的，我们现在说不准。你当时最希望她跟你说什么？","You said she takes a while to reply, but she always does. So this time you hoped she'd give you a chance to talk. When she said yes to dating, she also said she might not be very good at relationships. I can't tell what she was thinking when she went upstairs. What did you most want her to say to you then?"]}],"memories":[]},"8m.M202B7":{"time":"20:03 · 19:52","lines":[["我以前觉得她回慢点也没事，反正会回。上次我说完不该要记录，她一天没理我。今天她让我走，自己就上楼了，我一下又想起来了。","I used to think it didn't matter if she took a while. She'd reply eventually. Last time I said I shouldn't have asked to see the chat, she ignored me for a whole day. Today she told me to go and went upstairs. It brought the whole thing back."],["用户把上次等不到回复和今晚被留在楼下连在了一起。我记得他以前以为她忙完总会回，可以先理解他为什么着急。","The user is connecting waiting without an answer last time with being left downstairs tonight. I remember he used to count on her replying when she was done. I can see why he got anxious."]],"choices":[{"thought":["接住他怕再等不到","Acknowledge his fear of another wait"],"reply":["你以前觉得她回得慢但都会回。上次你说不该要看记录，她却一天没回。今天她说完就上楼，你一下想到那一回，也难怪着急。你后来有跟她说，你怕她又不理你吗？","You used to feel that she took a while to reply, but she always did. Last time you said you shouldn't have asked to see her chat, and then she didn't reply all day. Today she left right after telling you to go. No wonder it brought that back. Did you tell her you were afraid she might ignore you again?"]}],"memories":[]},"8m.M202E":{"time":"20:03 · 19:52","lines":[["就很没意思啊。我还跑去买吃的。我当时站那儿，感觉旁边人都在等我走。她回来跟我说的还是我自己跑来的。","It just felt pointless. I went out and bought her food and everything. Standing there, I felt like everybody was waiting for me to leave. Then she messaged back just to say I came on my own."],["用户在说当众被打发和事后没被回应。先说明这两次为什么让他不好受，暂时不用替女友推断动机。","The user is talking about being sent away in public and feeling unheard afterwards. I can say why those two moments hurt without deciding what his girlfriend meant."]],"choices":[{"thought":["听完这两次难受","Hear what hurt both times"],"reply":["你在楼下已经够尴尬了，后来想把这份难受跟她讲，又只听到她说是你自己来的。难怪你到现在还在想那几句。","It was awkward enough standing downstairs. Then when you tried to tell her how much it hurt, all you heard back was that you came on your own. No wonder you're still thinking about those lines."]}],"memories":[]},"8m.M202O5":{"time":"20:03 · 19:52","lines":[["她说是同事我听见了。我就想不通，她跟人家还好好说着话呢，见我就让我走。以前她忙归忙，下班再晚也会回我。怎么现在这样？","I heard her say he's a coworker. I just don't get it. She's talking to him like everything's fine, then she sees me and tells me to go. She used to answer no matter how late she got out of work, even if she was busy. What's changed?"],["用户还在气女友让他离开，并想起她以前就算忙也会回。我记得用户转述过女友答应交往时说自己不太会谈恋爱。可以让他把原本期待的回应说出来。","The user is still angry she told him to go and remembers she used to reply even when she was busy. I remember him quoting what she said about not being good at relationships. I can ask what he was hoping she'd say."]],"choices":[{"thought":["回想她当时的话","Remember what she said back then"],"reply":["你以前说，她回得慢但都会回。今天你也在等她好好跟你说一句，结果她当着人让你走。她答应跟你在一起的时候说过，自己可能不太会谈恋爱。今天她为什么这么急着走，光凭这一幕还看不出来。她上去以后，你最希望她回你什么？","You said she takes a while to reply, but she always does. Today you were waiting for her to talk to you, and she told you to leave in front of everyone. When she agreed to go out with you, she said she might not be very good at relationships. We can't tell from that moment why she was in such a hurry. Once she went upstairs, what did you want her to say?"]}],"memories":[]},"8m.M202O7":{"time":"20:03 · 19:52","lines":[["以前她哪怕慢点也会回。现在一生气就不理人，上次一天都没回我。","She used to reply even if it took a while. Now if she gets mad she just ignores me. Last time I didn't hear from her all day."],["用户主动拿眼下和此前的相处比较。我记得用户说过她慢回却都会回，也说过后来等了一整天，可以让用户看看自己当时期待了什么。","The user is already comparing this to how things used to be. I remember he said she'd always respond eventually and that he later spent a whole day waiting. I can help him see what he was hoping for."]],"choices":[{"thought":["对照慢回和争执后的沉默","Compare a slow reply and silence after a fight"],"reply":["你以前说她回得慢但都会回。后来你说过不该要聊天记录，那一整天也没收到回音。你今天会一下想到她又不想理你，我能理解。你有跟她说过你怕的是这个吗？","You used to say she takes a while to reply, but she always does. Then you said you shouldn't have asked to see the chat and heard nothing all day. I get why you thought she might shut you out again. Did you tell her that's what you were afraid of?"]}],"memories":[]},"8m.M202S":{"time":"20:03 · 19:52","lines":[["我到那儿的时候她还跟小周说说笑笑呢。说忙得没空见我，跟他倒有说有笑的。我一过去她就让我走，我能不多想吗？","When I got there she was laughing with Xiao Zhou. She was too busy to see me, but she was having a great time talking to him. The second I got there she told me to go. How was I supposed to not read into that?"],["用户把女友和同事说笑、让他离开连在一起。我记得他上次也在不知道对方聊过什么时就要求看记录。可以先承认他看到的场面让他难受，再问他有没有听到别的信息。","The user is connecting seeing her laugh with her coworker and then being told to leave. I remember he asked to see the chat last time without knowing what they'd talked about. I can acknowledge why it hurt, then ask if he heard anything else."]],"choices":[{"thought":["回想上次查记录","Think back to asking for the chat"],"reply":["你过去是想见她，结果看到她跟同事聊得开心，自己还被叫走，心里有落差很正常。我记得上次你也因为她和小周相处得挺好，就想看他们的聊天记录。今天除了看见他们一起拿外卖，你还听见什么了吗？","You wanted to see her. You saw her laughing with her coworker and then she sent you away. It makes sense that felt bad. I remember last time you wanted to see their messages because she seemed to get along with Xiao Zhou. Apart from seeing them picking up dinner, did you hear anything else?"]}],"memories":[]},"8m.M203B5":{"time":"20:07 · 19:52","lines":[["就别当着人让我走啊。她要是真没空，跟我说晚点再聊就行。我后来也没好好说这些，一直问她跟小周私下聊什么。","Just don't tell me to go in front of everyone. If she really can't talk, tell me we'll talk later. I didn't say any of that right. I just kept asking what she talks about with Xiao Zhou in private."],["用户已经说出自己想要的回应，也记起自己一直追问同事。我记得用户上次也说过，没看到什么就开口要记录，可以让他想想为什么又追到了那里。","The user has said what he wanted her to say and remembered how he kept pressing about her coworker. Last time he told me he asked for the chat without seeing anything. I can ask him to think about how he got there again."]],"choices":[{"thought":["回看上次追问","Look back at the last time he pressed"],"reply":["你想听她说晚点还能跟你好好聊。上次你也说过，明明不知道他们聊过什么，还是开口要看记录。今天你气的是她当着人赶你，聊到最后却变成非要她删同事。可以先缓缓，再想你想跟她说什么。","You wanted to hear that she'd talk to you properly later. Last time you said you didn't know what they'd talked about, but you still asked to see the chat. Today you were angry she sent you away in front of people. By the end you were demanding she delete her coworker. Take a minute, then think about what you want to tell her."]}],"memories":[]},"8m.M203B7":{"time":"20:07 · 19:52","lines":[["没。我就又让她给我看记录。她说不给，我还让她删人。我当时就觉得她肯删，我就不用一直想了。","No. I just asked to see the chat again. She said no and I told her to delete him. I thought if she'd delete him, I could stop thinking about it."],["用户说出自己为什么想让女友删人。我记得上次他也在没有根据时索要记录，可以让他看看两次用了什么办法让自己安心。","The user has said why he wanted her to delete her coworker. Last time he asked to see her messages without any evidence. I can help him see what he tried to do both times to feel reassured."]],"choices":[{"thought":["回想上次怎么问的","Remember what he asked last time"],"reply":["上次你说，你都不知道他们聊过什么，还是想看记录。今天她说不给，你就让她删人。你想安心很正常，可她已经说了只是同事。你可以先缓缓，想想还有什么办法能让她知道你在怕什么。","Last time you said you didn't know what they'd talked about and wanted to see the chat anyway. Today she said no and you told her to delete him. Of course you want to feel sure, but she's already said he's a coworker. Take a minute to think of another way to tell her what you're afraid of."]}],"memories":[]},"8m.M203O5":{"time":"20:07 · 19:52","lines":[["就跟我说一句她刚才为什么那样呗。她要是说忙，等忙完再说，我也不至于站那儿一直猜。可她后来回我的是我自己跑来的。","I just wanted her to tell me why she did that. If she'd said she was busy and we'd talk when she was done, I wouldn't have stood there guessing. But what she said was that I came on my own."],["用户说出了自己想听的回答，仍在气对方把受伤归到他突然来访。可以帮他把这个愿望和继续追问同事分开。","The user has said what he wanted to hear and still feels like she blamed his hurt on him turning up. Help him separate what he wants her to hear from the questions about her coworker."]],"choices":[{"thought":["听清用户想说什么","Hear what he wants to say"],"reply":["你是想听她好好回应你，尤其是当着同事说你丢人这件事。问小周也问不出这个答案。你还在气，可以先走走，等你想好要她听见什么再说。","You want her to answer you, especially about being called embarrassing in front of her coworkers. Asking about Xiao Zhou won't tell you that. You're still angry. Go for a walk and figure out what you most want her to hear."]}],"memories":[]},"8m.M203O7":{"time":"20:07 · 19:52","lines":[["没啊。我当时满脑子都是，她跟别人好好的，怎么跟我就这样。后来小周删不删，我还非得问出个结果来。","No. All I could think was, she's fine with other people, so why's she like this with me? Then I just had to get an answer about whether she'd delete Xiao Zhou."],["用户在气女友让他离开，也记得自己后来一直逼问。可以提醒他，问同事的事不会让女友知道他怕再等不到回应。","The user is still angry she sent him away and remembers pressing her. I can point out that making it about her coworker won't tell her why he's afraid she'll stop replying."]],"choices":[{"thought":["说说他到底在怕什么","Name what he's afraid of"],"reply":["你怕她跟上次一样不理你，可你问的是她肯不肯删同事。她从这句里听不出你在等她回你。先缓缓，等会儿再想要不要跟她说。","You're afraid she'll ignore you like last time, but you're asking her to delete a coworker. She can't hear that you're waiting for a reply in that question. Take a minute, then see if you want to tell her."]}],"memories":[]},"8m.M203S":{"time":"20:07 · 19:52","lines":[["也没听见什么。我就是觉得，她那么急着让我走，是不是不想让她那些同事看见我啊。她那样说我，我到现在还气。","Didn't hear anything else. I just thought, she wanted me gone so fast. Maybe she didn't want those coworkers to see me. I'm still angry about what she said."],["用户仍在意当众受伤，也承认自己没有听见别的。可以让他分清当众被说丢人和猜测女友有意瞒同事这两件事。","The user is still upset about what she said in front of people and admits he didn't hear anything else. Help him separate the insult from his guess that she wanted to hide him."]],"choices":[{"thought":["分清感受和猜测","Separate the feeling from the guess"],"reply":["她当着同事说你丢人，你当然可以生气。至于她是不是不想让同事看见你，你现在还不知道。上次你也是越猜越着急，最后开口要看记录。可以先把手机放一放，等会儿再想你最想跟她说什么。","Of course you can be angry she called you embarrassing in front of her coworkers. You don't know whether she didn't want them to see you. Last time, guessing made you more anxious, and you ended up asking to see the chat. Put your phone down for a bit and think later about what you want to tell her."]}],"memories":[]},"8m.M203E":{"time":"20:08 · 19:52","lines":[["算了，我也不发了。再发她又嫌我没完没了。我先找个地方坐会儿。","Forget it. I'm not sending anything else. She'll just say I won't let it go. I'll find somewhere to sit for a bit."],["用户决定暂时收起手机，眼下需要的是让争执先停一会儿。","The user has decided to put his phone away for now. What he needs is a break from the argument."]],"choices":[{"thought":["支持先放下手机","Let him put the phone down"],"reply":["那就先坐会儿。这会儿你也没什么想接着说的，手机可以放一放。","Then find a seat for a bit. There's nothing else you want to say right now, so you can put the phone down."]}],"memories":[]},"8f.F200":{"time":"20:12","lines":[["我刚去对了两行东西，一停下来又想起他那几句。先要看我聊天，再让我删人。我不删他还说「你就非得护着他，是吧？」我真的是……我上班也得跟他证明我没干什么吗？","I just went to check a couple of rows, then I stopped and remembered what he said. First he wanted to see my chat, then he wanted me to delete him. When I said no he went, “You just have to stick up for him, huh?” I swear… Do I have to prove I wasn't doing anything even at work?"],["用户在短暂回去工作后继续说起争执。她明确介意被要求自证，后面发生了什么还没讲完，可以先接住她的火气，再问对话怎么结束的。","The user went back to work briefly and is talking about the fight again. She's upset at being made to prove herself. I haven't heard how it ended. I can acknowledge how angry she is and hear the rest."]],"choices":[{"thought":["听她讲到最后一句","Hear how it ended"],"reply":["你已经说了同事的事，还是被追着证明，当然会烦。你们后来又说了什么？","You already explained he's a coworker and still got pressed to prove yourself. Of course you're annoyed. What did you say after that?"]}],"memories":[]},"8f.F201":{"time":"20:18 · 20:12","lines":[["我说以后是不是跟领导说话也得问他。然后他翻上次一天没回，又说楼下，说以后不来了。我回本来也没叫他来。他说我叫他他也不来，我就说那我也不会叫了。最后他回个行。什么都能说成我有问题，他还想让我怎么办？","I asked if I'd need his permission to talk to my boss now. Then he brought up me not answering for a whole day last time, went back to downstairs, and said he wouldn't come over anymore. I said I never asked him to. He said he wouldn't come even if I asked, so I said I wouldn't ask. He just said fine. He can turn anything into my fault. What else does he want from me?"],["用户刚讲完两人怎样把话说到以后不见。她还在气自己解释后被追问，也提到了男友说在楼下不好受。可以先让她把这口气说完，或者陪她回看她当时怎样回应。","The user has explained how they got to saying they wouldn't see each other. She's still angry he pressed after she explained, and mentioned him saying he was hurt downstairs. I can let her finish venting or help her look at how she answered him."]],"choices":[{"thought":["顺着用户说","Go along with the user"],"reply":["你已经说明了为什么会和小周说话。他接着问记录，还要你删同事，难怪你觉得怎么说都不够。你现在可以先把这口气说完。","You explained why you were talking to Xiao Zhou. Then he asked for the messages and told you to delete your coworker. No wonder it felt like nothing you said was enough. Go ahead and get it out."]},{"thought":["陪用户冷静回顾","Help the user think it through"],"reply":["你解释了同事关系，他还是要看记录、要你删人，你有理由生气。他后来跟你说，当着同事被你说丢人，他很难受。你收到那条消息时，心里是怎么想的？","You explained he's a coworker and your boyfriend still wanted to see the chat and have you delete him. You have a reason to be angry. Later he told you it hurt to be called embarrassing in front of your coworkers. What went through your mind when you saw that message?"]}],"memories":[]},"8f.F202B5":{"time":"20:23 · 20:12","lines":[["我看见他发消息就烦，以为他又要问我跟小周的事。以前他刷我朋友圈，我还觉得他挺惦记我的。现在真是看见他问我就来气。","I was annoyed the second I saw his message. I thought he was going to ask about Xiao Zhou again. I used to think checking my Moments meant he was thinking about me. Now the second he asks me something I'm pissed off."],["用户想起曾经把关注当成惦记，今晚却一看到男友发消息就担心他又在怀疑她。可以问清她收到的是哪句话。","The user used to take his attention as a sign he cared. Tonight she sees a message and worries he's going to question her again. Find out which line she got."]],"choices":[{"thought":["听听她怎么想","Hear what she was thinking"],"reply":["你以前说他半夜刷你朋友圈看你睡没睡，还觉得是他家里给过他很多爱，才这么会关心你。今天你解释过，他还是要看记录，难怪你看到他发消息就来气。后来他跟你说当众被说丢人，你当时回了什么？","You said he checked your Moments at midnight to see if you'd gone to bed, and you wondered if he grew up with a lot of love to be that caring. Today you explained and he still wanted to see the chat. No wonder his messages got to you. When he said it hurt to be called embarrassing in front of everyone, how did you answer?"]}],"memories":[]},"8f.F202B7":{"time":"20:23 · 20:12","lines":[["我以为他还要问小周。我上次都解释过了，他还要看。我以前还觉得他问得多是因为在乎我，现在我一看到他发消息就烦。","I thought he was gonna keep asking about Xiao Zhou. I explained it last time and he still wanted to see the chat. I used to think he asked so much because he cared. Now I get annoyed as soon as I see a message from him."],["用户把今晚的消息和上次被追问联系起来。我记得她曾把男友的关心理解为被惦记，也记得上次解释后仍被索要记录，可以先接住她的火气。","The user is connecting tonight's message to being pressed last time. I remember she took his attention as care, and that he asked to see the chat even after she explained. Start by acknowledging why she's angry."]],"choices":[{"thought":["听懂她为什么烦","Hear why she's annoyed"],"reply":["你以前觉得他会关心人，还猜他家里给过他很多爱。上次你说只是同事，他还是要看记录。今天又遇到这事儿，你看到他发消息就觉得他还要追问。你现在有空的话，可以看看他是怎么说被当众说丢人的。","You thought he was good at looking after people and wondered if he grew up with a lot of love. Last time you said Xiao Zhou was just a coworker and he still wanted to see the chat. It happened again tonight. No wonder you expected more questioning. If you have a minute, look at what he said about being called embarrassing in front of everyone."]}],"memories":[]},"8f.F202E":{"time":"20:23 · 20:12","lines":[["就上次也是。跟他说多少遍是同事了？他要是总觉得不查一下就是我有鬼，我还能怎么办，我干脆别跟人讲话了。","It was the same last time. How many times do I have to say he's a coworker? If he always thinks I'm hiding something unless he checks, what am I meant to do? Just stop talking to everybody?"],["用户担心解释之后仍会面对同样的要求，也在借夸张把烦躁说出来。可以承认这种压力，让她先停一会儿。","The user is afraid explaining will only lead to the same demands. She's exaggerating to let out her frustration. I can acknowledge the pressure and let her take a break."]],"choices":[{"thought":["回应反复被要求证明的压力","Acknowledge the pressure to keep proving it"],"reply":["同一个问题反复被拿出来问，解释了一遍还要再证明一遍，当然累。你不用现在还追着给他解释同事关系。","Getting asked the same thing over and over is exhausting, especially when you explain and still have to prove it. You don't have to keep trying to explain the coworker thing right now."]}],"memories":[]},"8f.F202O5":{"time":"20:23 · 20:12","lines":[["我就觉得他又要怀疑我。以前他半夜还看我朋友圈，我那时候还挺高兴的。现在我光听他问小周是谁就烦。","I figured he'd found another reason to suspect me. When he'd check my Moments at midnight I used to be happy about it. Now just hearing him ask who Xiao Zhou is gets on my nerves."],["用户想起以前把男友刷朋友圈看成关心，现在觉得自己被怀疑。可以听她说，今晚让她生气的是哪一步。","The user used to take him checking her Moments as a sign he cared. Now she feels suspected. I can hear what made her angry tonight."]],"choices":[{"thought":["回想以前的关心","Remember how his care felt before"],"reply":["你以前说，他半夜还看你朋友圈，你觉得自己被惦记，还猜他家里给过他很多爱。今天他听了你解释，还问你要聊天记录，这当然让人烦。他跟你说当众被说丢人不好受时，也在问你和小周的事吗？","You said he checked your Moments at midnight. You felt like he was thinking about you and wondered if he grew up with a lot of love. Tonight you explained, and he still asked to see the chat. Of course that's frustrating. When he said it hurt to be called embarrassing in front of everyone, was he asking about Xiao Zhou then too?"]}],"memories":[]},"8f.F202O7":{"time":"20:23 · 20:12","lines":[["他之前问我几点回家，我还觉得他上心。现在我解释完了，他还让我把记录给他看。上次就这样，凭什么我每次都得证明一遍？","He used to ask when I'd be home and I'd think he cared. Now I explain and he still wants me to show him the chat. Same thing last time. Why do I have to prove it every time?"],["用户把之前的关心和现在的查问说到了一起。我记得她提过上次解释完仍被要求交出记录。可以先认可她这次为什么生气，再请她看看男友另外发来的消息。","The user has put his earlier care next to his questions now. I remember her saying he still wanted the chat last time, after she explained. Acknowledge why she's angry now and ask her to look at what else he sent."]],"choices":[{"thought":["接住她被追问的火气","Acknowledge how it felt to be pressed"],"reply":["你以前说他会关心你，还猜是家里给过他很多爱。上次你已经解释小周是同事，他还是要看记录。今天又听到同样的要求，你会觉得自己根本没被相信。后来他说当着同事被你说丢人，你当时看进去了吗？","You said he was good at looking after you and guessed it was because he grew up with a lot of love. You already explained last time that Xiao Zhou was a coworker and he still wanted the chat. Hearing it again would make you feel like he never believed you. When he said you called him embarrassing in front of your coworkers, did that part sink in at the time?"]}],"memories":[]},"8f.F202S":{"time":"20:23 · 20:12","lines":[["我就想，他自己跑来的，还当着小周的面那么问我。怎么到头来又成了我得管他难不难受？我当时就想回完赶紧干活。","I thought, he came on his own and asked me that in front of Xiao Zhou. How did it end up being my job to make sure he's okay? I just wanted to answer and get back to work."],["用户收到消息时还在为当众被怀疑生气。我记得上次她也说过自己故意不回。可以让她回想今晚收到那条消息后自己说了什么。","The user was still angry about being questioned in front of people when the message came. I remember her saying she deliberately didn't answer last time. Ask what she sent when she saw that message tonight."]],"choices":[{"thought":["想想她当时怎么回","Think back to how she answered"],"reply":["他突然过来，还当着人问你，你当然会生气。上次你说，你气到故意一天没回他。今晚他跟你说被当众说丢人不好受，你当时怎么回的？","He turned up and asked you that in front of everyone. Of course you're angry. Last time you said you were angry enough to not answer him all day on purpose. Tonight, how did you answer when he told you it hurt to be called embarrassing in front of people?"]}],"memories":[]},"8f.F203B5":{"time":"20:28 · 20:12","lines":[["我就回他是自己跑来的。我那会儿根本不想听他讲什么。上回我气起来也是，手机在手上都懒得理他。","I just said he came on his own. At the time I didn't want to hear anything he had to say. Same as when I got mad last time. I had my phone in my hand and couldn't be bothered to answer."],["用户自己想起两次生气时都不想理男友。她上次说过是故意让他等，今晚则是急着离开同事都在的场面。可以谈她没回应的感受。","The user has remembered not wanting to hear him both times. Last time she wanted him to wait. Tonight she wanted to get out of a scene in front of her coworkers. I can talk about the feeling she didn't answer."]],"choices":[{"thought":["想想他当时说的话","Think about what he said"],"reply":["上次你说，你想让他也尝尝干等的滋味。今天你生气，想早点回去，也可以理解。只是他后来专门跟你说那句话伤到了他，你当时没心思听进去。先忙你的，等你没这么气了，再想想要不要回应他。","Last time you wanted him to know how it felt to be left hanging. Tonight it makes sense you were angry and wanted to get back upstairs. Then he specifically told you that line had hurt him, and you weren't in a place to hear it. Finish what you're doing. When you're less angry, you can decide whether to answer that."]}],"memories":[]},"8f.F203B7":{"time":"20:28 · 20:12","lines":[["刚看了，他那条真没问小周。我回他是自己跑来的。那时候我跟上次故意不回也差不多，他说什么我都不想听。","I just checked. He really didn't ask about Xiao Zhou in that one. I said he came on his own. I was pretty much where I was last time when I ignored him. I didn't want to hear anything from him."],["用户发现男友发消息是想说当众被伤到，也主动提起上次故意不回。可以区分两次为什么不想听，再留一点时间给她。","The user has seen that he was talking about getting hurt and brought up not answering on purpose last time. Help her distinguish why she didn't want to listen each time and give her a minute."]],"choices":[{"thought":["让用户再想想","Give her time to think"],"reply":["上次你说想让他也等一回。今天你是被当着同事问急了，想赶紧走。后来他跟你说当众被说丢人很难受，你还是没心思听。先把手上的事忙完，再看你想不想回他。","Last time you wanted him to have to wait for once. Tonight you got put on the spot in front of your coworkers and wanted to leave. When he said it hurt to be called embarrassing in front of everyone, you still didn't feel like hearing him out. Finish what you have to do, then see if you want to reply."]}],"memories":[]},"8f.F203E":{"time":"20:28 · 20:12","lines":[["我现在连他消息都不想点开了。还剩一页东西没改，我先干完吧，干不完谁都别想下班。","I don't even want to open his messages right now. I've still got a page to revise. I'll finish it first. No one's going home till it's done."],["用户决定先继续工作，眼下还不愿主动联系男友。可以让她把注意力放回正在做的事。","The user is going back to work and doesn't want to contact him. Let her get back to what she was doing."]],"choices":[{"thought":["让她先把手上的事收完","Let her finish what she's doing"],"reply":["好，先把那一页改完。等你空下来，再决定手机上的事要不要接着说。","Okay, finish that page first. When you're free, you can decide whether you want to pick up the conversation on your phone."]}],"memories":[]},"8f.F203O5":{"time":"20:28 · 20:12","lines":[["我刚回去看了。他那条还真没提小周。是我看到他又找我，就觉得他还要问，回他的时候也全在讲这个。","I went back and looked. He really didn't mention Xiao Zhou in that message. I just saw his name pop up and thought he'd ask again, so I made my whole reply about that."],["用户重新看过消息，发现男友那一刻在说被当众伤到。可以回应她刚发现的区别，给她时间。","The user reread it and saw he was saying how much it hurt in front of her coworkers. I can name the difference she just noticed and give her some time."]],"choices":[{"thought":["给用户时间想想","Give her time to think"],"reply":["他当时想告诉你，你当着人说他丢人，他很难受。你被怀疑也一样会难受。等忙完了，你可以再想想，要不要回他当时说的这个。","He was trying to tell you it hurt when you called him embarrassing in front of people. Being suspected hurt you too. When you're done working, you can think about whether to answer the part he brought up then."]}],"memories":[]},"8f.F203O7":{"time":"20:28 · 20:12","lines":[["对啊，我以为他还想说我不给看有问题。现在翻回去，那条就说我当着人说他丢人。我没回他这句。","Yeah, I thought he was going to say I must be hiding something if I wouldn't show him. I just looked back, and all that message said was that I called him embarrassing in front of people. I didn't answer that part."],["用户自己重读了对方的消息，发现自己没有回应其中明确说出的伤处。可以给她时间消化，先不用拟下一条消息。","The user reread the message and realized she never answered the part about how he'd been hurt. Give her time to take that in before writing anything else."]],"choices":[{"thought":["让她自己想一想怎么接","Let her think about how to answer"],"reply":["你当时还在气他问小周。现在回头看，才发现他也在跟你说，他被当着同事说丢人，心里不好受。你可以先缓一下。等手上的事弄完，再想你愿不愿意回他这句。","You were still angry he asked about Xiao Zhou. Looking back, you can hear he was also saying it hurt to be called embarrassing in front of your coworkers. Take a minute. Once you've finished what you're doing, see if you want to answer that part."]}],"memories":[]},"8f.F203S":{"time":"20:28 · 20:12","lines":[["我就说他自己来的，又说小周是同事。……他都明说了他难受，我还真没理他这句。","I just said he'd come on his own and that Xiao Zhou's a coworker. …He straight up told me it hurt, and I really did ignore that part."],["用户想起来自己一直在解释同事的事，没有回应男友说自己被当众说丢人的感受。可以给她时间想一想。","The user remembers she kept explaining about her coworker and didn't answer her boyfriend when he said it hurt to be called embarrassing in front of people. Give her time to think."]],"choices":[{"thought":["让用户缓一缓","Let her take a minute"],"reply":["你说小周是同事，这事说清楚没问题。他当时还想让你听见，被当着人说丢人是什么滋味。先把手上的事做完，等你愿意了，再想要不要跟他说说。","It made sense to explain that Xiao Zhou is a coworker. He was also trying to tell you how it felt when you called him embarrassing in front of everyone. Finish what you're doing. If you feel like it later, you can think about talking to him about that."]}],"memories":[]},"8f.FREADY":{"time":"20:29","lines":[],"choices":[],"memories":[]},"8m.MREADY":{"time":"20:29","lines":[],"choices":[],"memories":[]},"8m.M301R":{"time":"20:34","lines":[["走了一圈。刚才我翻回去看，她说了是同事，我还是要看记录。她不给，我就让她删。她当着同事说我丢人，我想起来还是难受。可我非要看记录、让她删人，这我也做得不对。怎么说？","I took a walk. I looked back at the messages. She told me he's a coworker and I still wanted to see the chat. When she said no I told her to delete him. It still hurts thinking about her calling me embarrassing in front of her coworkers. But insisting on seeing the chat and telling her to delete him was wrong too. How do I say it?"],["用户自己指出了索看聊天和要求删人的问题，也仍在意当众受伤。先帮他写一句具体的道歉，让这条消息能独立说清自己的责任。","The user has named what was wrong with asking to see the chat and telling her to delete her coworker. Being hurt in public still bothers him. Help him write a concrete apology that owns his part on its own."]],"choices":[{"thought":["支持用户道歉","Help him apologize"],"reply":["可以发「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」等她愿意聊了，你也可以告诉她，当众被她那么说是什么感觉。","You can send, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” When she's ready to talk, you can also tell her what it felt like when she said that in front of everybody."]}],"memories":[]},"8f.F301RE":{"time":"20:41","lines":[["他刚发我「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」我看见是他说对不起，还是气。我回了「你现在知道不用删了？刚才是谁说我护着他的？」他刚那样问完，现在就一句对不起？","He just sent, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” I saw he was apologizing and I was still angry. I said, “So now you know I don't have to delete him? Who was it who said I was sticking up for him just now?” After the way he questioned me, all he has to say now is sorry?"],["用户刚收到道歉，仍介意对方把拒绝删人说成护着同事。她已经回过一句，可以承认她还在气，让她有时间看接下来会发生什么。","The user just got an apology but still feels accused of sticking up for her coworker because she wouldn't delete him. She's answered already. Acknowledge she's still angry and give her time to see what comes next."]],"choices":[{"thought":["先缓缓","Give her a minute"],"reply":["你还记得他刚才说你护着小周，这会儿看到他说对不起，气也不会一下子消掉。你已经回了，现在可以先把手机放一放。","You still remember him saying you were sticking up for Xiao Zhou. Seeing “I'm sorry” isn't going to make you stop being angry right away. You've answered. You can put your phone down now."]}],"memories":[]},"8m.M302RE":{"time":"20:42","lines":[["她回「你现在知道不用删了？刚才是谁说我护着他的？」也是，我刚还真那么说了。看到还是堵得慌，差点又想问她，当着那么多人说我丢人就没事吗？","She said, “So now you know I don't have to delete him? Who was it who said I was sticking up for him just now?” Fair. I really did say that. It still stung. I almost asked if calling me embarrassing in front of everyone was supposed to be fine."],["用户主动道歉后被追问，感到受挫，也承认那句话确实出自自己。可以帮他继续认下这句，给女友时间回应。","The user apologized and got challenged. It stung, and he admits he did say that. Help him own the accusation and give her time to respond."]],"choices":[{"thought":["认下刚才的指责并给时间","Own the accusation and give her time"],"reply":["她问的是你刚才说她护着小周，你可以认下这句。发「嗯，是我说的。你已经跟我说清楚了，是我还揪着不放。你先忙，等你忙完我们再说。」发完让她先忙。","She's asking about you saying she stuck up for Xiao Zhou. You can own that: “Yeah, I said it. You'd already explained it and I wouldn't let it go. Get back to work. We can talk when you're done.” Then let her finish what she's doing."]}],"memories":[]},"8f.F302RE":{"time":"20:48","lines":[["他又发了「嗯，是我说的。你已经跟我说清楚了，是我还揪着不放。你先忙，等你忙完我们再说。」我还以为他又要说我偏着小周。这次他倒真没往回绕。我刚在想我当着那几个人说他丢人，他后来都单独来跟我说了，我还回他自己来的。换我我也不好受。 我先把这页收完，等会儿回他。","He sent another one: “Yeah, I said it. You'd already explained it and I wouldn't let it go. Get back to work. We can talk when you're done.” I thought he'd say I was taking Xiao Zhou's side again. This time he really didn't go back to that. I was thinking, I called him embarrassing in front of those people. He came to me separately to say how it felt, and I just told him he'd come on his own. I'd feel bad too. I'll finish this page and get back to him in a bit."],["用户从收到的第二条消息看见男友承认刚才的指责，也主动说起自己伤人的两句话。可以先确认她被怀疑的委屈，再帮她说清自己想道歉的部分。","His second message owned the accusation. Now the user is talking about the two things she said that hurt him. Acknowledge what it felt like to be suspected and help her say what she'd like to apologize for."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["他刚来就问小周，你烦是有原因的。你现在也想跟他说，你也听见他为什么难受了。可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」","Of course you were annoyed when he showed up and asked about Xiao Zhou. You also want him to know you heard why he was hurt. You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.”"]}],"memories":[]},"8f.F301E":{"time":"20:50","lines":[["改完了。手机放那儿半天，他也没再发。我刚想了一下，上次吵完也还是我去找他的。这次我真不想再过两天当没事了。想分了，怎么跟他说？","Done with the revisions. My phone's been sitting there forever and he hasn't sent anything else. I was just thinking I was the one who went to him after our last fight, too. I really don't want to wait a couple of days and act like nothing happened again. I want to break up. How do I tell him?"],["用户在忙完后明确提出分手，想知道怎么开口。可以帮她用自己的理由把决定说清，避免再打开关于同事的争论。","The user has finished work and made it clear she wants to break up. Help her give her reasons without starting another argument about her coworker."]],"choices":[{"thought":["把分手决定说清楚","Say clearly that it's over"],"reply":["如果你确定了，可以发「上次你要看聊天记录，今天又要我删人。我不想以后还这么吵。我们分手吧。」说到这里就够了。","If you're sure, you can send, “Last time you asked to see my chat history. Today you told me to delete him. I don't want to keep having this fight. Let's break up.” That's enough."]}],"memories":[]},"8m.M301E":{"time":"20:54","lines":[["她发了「上次你要看聊天记录，今天又要我删人。我不想以后还这么吵。我们分手吧。」​她说分手。怎么就分手了啊？我现在都不知道该回什么。","She sent, “Last time you asked to see my chat history. Today you told me to delete him. I don't want to keep having this fight. Let's break up.” She said break up. How did we end up breaking up? I don't even know what to say now."],["用户刚收到分手消息，还没法接受，也不知道怎么回。现在可以先陪他缓一缓，给他一点时间。","The user just got the breakup message and can't quite take it in or figure out what to say. Stay with him and give him time."]],"choices":[{"thought":["陪用户缓一缓","Give him a minute"],"reply":["你们刚才还在吵，突然看到她说要分手，谁都很难一下接得住。先不用急着回她，我在这儿。","You were just arguing. Then you saw she wanted to break up. That's hard to take in all at once. You don't have to answer right away. I'm here."]}],"memories":[]},"8f.F301ER":{"time":"20:58","lines":[["总算改完了。他一直没再发。我刚又看了他发的消息。被我当着同事说丢人，他确实挺难受的。我当时急着上楼，也不想在同事面前跟他吵。可我说什么不好，非说他丢人。后面他提起来，我还回他自己来的。唉，我想给他道个歉。","Finally finished the revisions. He hasn't sent anything else. I just read his messages again. It really did hurt him when I called him embarrassing in front of my coworkers. I wanted to get upstairs and didn't want to fight in front of them. But of all the things I could've said, I had to call him embarrassing. When he brought it up later, I told him it was his own fault for coming. Ugh. I want to apologize."],["用户工作结束后重新读了对方的消息，指出了自己在现场和事后说的两句话。她也有被当面质问的委屈。可以帮她用一句话说明当时的感受，再具体道歉。","The user reread his message after work and picked out what she said in front of her coworkers and afterwards. She was hurt by being questioned too. Help her say how she felt and give a specific apology."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」你可以为自己的话道歉，至于你被问得不舒服，等他也愿意聊了还可以说。","You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” You can apologize for what you said. When he's ready to talk, you can still tell him how it felt to be questioned."]}],"memories":[]},"8f.F301RR":{"time":"20:58","lines":[["我刚改完。刚才改方案的时候我老想起我当着小周他们的面说他丢人。我刚才就想跟他说对不起。手机一拿起来，看见他先发了「我刚才不该让你给我看聊天记录，也不该让你删小周。对不起。」我也想跟他说声对不起。","I just finished. While I was fixing the proposal, I kept thinking about calling him embarrassing in front of Xiao Zhou and the others. I was going to say sorry. I picked up my phone and he'd already sent, “I shouldn't have asked to see your chat history, and I shouldn't have told you to delete Xiao Zhou. I'm sorry.” I want to say sorry too."],["用户在看到道歉前已经回想过自己当众伤人的话，现在收到了男友收回两个要求的消息。可以帮她表达自己的歉意，同时保留她被质问的感受。","The user had already been thinking about what she said in front of her coworkers before she saw his apology. He's now taken back both demands. Help her apologize while keeping how she felt about being questioned."]],"choices":[{"thought":["支持用户道歉","Help her apologize"],"reply":["可以发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」你愿意道歉，就先把自己想说的话告诉他。","You can send, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” If you want to apologize, start with what you want him to hear."]}],"memories":[]},"8m.M301ER":{"time":"21:00","lines":[["她刚给我发「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」我看了还是来气。回了「现在说这个有什么用？我刚才跟你说的时候，你怎么不听？」我说难受的时候她听一耳朵不行吗？","She just sent, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” I still got mad reading it. I answered, “What's the point of saying this now? When I told you just now, why didn't you listen?” When I told her it hurt, would it have killed her to listen for a second?"],["用户收到道歉，仍介意自己当时没被听见。回应这份迟来的感受，让他有时间看完对方说的具体内容。","The user got the apology and is still upset she didn't listen when he first told her. Acknowledge the delayed response and give him time to take in what she said."]],"choices":[{"thought":["先缓缓","Give him a minute"],"reply":["你刚才就想让她听见你被当众说丢人有多难受。她现在才回应，你一时还在气也正常。你已经回了，可以缓一缓，看看她接下来怎么说。","You wanted her to hear how much it hurt when she called you embarrassing in front of people. She's only answering now. It makes sense you're still angry. You've said your piece for now. Take a minute and see what she says next."]}],"memories":[]},"8m.M302E":{"time":"21:00","lines":[["我刚想问她是不是还在气头上，打了又删了。唉，就这样吧。今天我也实在没劲再吵了。","I almost asked if she was still angry. Typed it and deleted it. Ah, let's leave it. I really don't have it in me to fight anymore tonight."],["用户想追问，又把打好的字删了。他已经很累，可以陪他把这会儿撑过去。","The user wanted to ask again and deleted what he'd typed. He's exhausted. I can sit with him for a bit."]],"choices":[{"thought":["陪用户歇一会儿","Let him rest for a bit"],"reply":["你本来还想问清楚，删掉那句也挺难的。今天已经够累了，先歇一会儿。","You still wanted to ask. Deleting that took something, too. Today's already been a lot. Rest for a bit."]}],"memories":[]},"8m.M302RR":{"time":"21:01","lines":[["她刚回我「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」她也承认刚才说话伤到我了。我还在这附近，想等她忙完见一面。","She wrote, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” She said herself that what she said hurt me. I'm still nearby. I want to see her when she's done with work."],["用户收到女友明确的道歉，想当面说清。只依据他收到的消息，帮他先确认见面意愿。","The user has received a specific apology and wants to talk face-to-face. Go by what he actually received and help him ask whether she's up for meeting."]],"choices":[{"thought":["问她忙完愿不愿意见面","Ask if she wants to meet after work"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」先看她方不方便，见了面再慢慢说今天的事。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” See if she's free first. You can talk through what happened once you meet."]}],"memories":[]},"8m.M303RE":{"time":"21:01","lines":[["她刚回我「你一来就问小周，我当时特别烦。但我不该当着他们说你丢人。后来你跟我说你难受，我还拿你自己来的堵你。对不起。」她承认刚才说话伤到我了。我现在没刚才那么堵了。我想跟她见个面，我还没走远。","She wrote, “You showed up and went straight to asking about Xiao Zhou. I was really annoyed. But I shouldn't have told you to stop embarrassing yourself in front of everyone. Then you told me how much it hurt, and I shut you down by saying you came on your own. I'm sorry.” She admitted what she said hurt me. I don't feel as wound up now. I want to see her. I haven't gone far."],["用户收到针对楼下和事后回应的具体道歉，愿意当面谈。可以建议他先问对方忙完后是否方便见面。","The user has received an apology about what she said downstairs and later over text. He's ready to talk in person. He can ask if she's free when work is done."]],"choices":[{"thought":["问她忙完愿不愿意见面","Ask if she wants to meet after work"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」她方便的话，当面讲比隔着手机猜彼此的语气容易些。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” If she's free, it'll be easier to talk in person than guess at each other's tone over text."]}],"memories":[]},"8f.F302E":{"time":"21:02","lines":[["发了。手机扣在桌上了，我现在不想看他回什么。先回家吧。","Sent it. My phone's facedown on the desk. I don't want to see what he says right now. I'll go home first."],["用户已经发出明确的分手消息，暂时不想再看手机。可以回应她接下来的安排，给她一点时间。","The user has sent a clear breakup message and doesn't want to look at her phone right now. Acknowledge her next step and give her time."]],"choices":[{"thought":["陪用户把这一晚收住","Help her get through the evening"],"reply":["那就先回家。你已经把决定说清楚了，什么时候再看手机，可以等你到家再想。","Go home first. You've made your decision clear. You can decide when to look at your phone once you're home."]}],"memories":[]},"8m.M303E":{"time":"21:02","lines":[["算了。","Forget it."],["用户只回了两个字，可以安静陪他待一会儿。","The user only said two words. I can stay here quietly for a while."]],"choices":[{"thought":["安静陪着","Stay with him quietly"],"reply":["嗯。","Mm."]}],"memories":[]},"8f.F302ER":{"time":"21:07","lines":[["他回「现在说这个有什么用？我刚才跟你说的时候，你怎么不听？」我看了挺堵的。我知道我刚才确实没听他。可我都先认了，我现在又有点不想说了。","He answered, “What's the point of saying this now? When I told you just now, why didn't you listen?” That stung. I know I really didn't listen to him earlier. But I made the first move and admitted it, and now I kind of don't want to talk anymore."],["用户主动道歉后受挫，也明白对方还在介意当时没有被听见。可以先回应她的感受，再帮她把当时为何想离开和愿意道歉都说明白。","The user was hurt by how he answered her apology. She knows he's still upset she didn't listen. Acknowledge that it hurt and help her say why she wanted to leave and what she's sorry for."]],"choices":[{"thought":["把当时为什么想走说清楚","Explain why she wanted to leave"],"reply":["你认真开了口，看到他还气，心里堵也正常。你要是还想给他留句话，可以发「我那会儿就想赶紧上楼，不想当着同事吵。可那句丢人确实说得难听。你说你难受，我也没好好听。你先缓缓，晚点说也行。」发完给他一点时间。","You meant what you said. It makes sense it hurt to see he was still angry. If you want to leave him one more message, try, “I just wanted to get upstairs. I didn't want to fight in front of my coworkers. But calling you embarrassing was harsh. Then you told me it hurt and I didn't listen. Take a minute. We can talk later.” Then give him a little time."]}],"memories":[]},"8m.M302ER":{"time":"21:13","lines":[["她又发了「我那会儿就想赶紧上楼，不想当着同事吵。可那句丢人确实说得难听。你说你难受，我也没好好听。你先缓缓，晚点说也行。」我看着看着就不太想怼她了。站她那儿想，我没等她回就过去了，一开口还是问小周。换我我也烦。我也得跟她道个歉吧？","She sent another message: “I just wanted to get upstairs. I didn't want to fight in front of my coworkers. But calling you embarrassing was harsh. Then you told me it hurt and I didn't listen. Take a minute. We can talk later.” The more I read it, the less I wanted to snap back. From her side, I went over without waiting for her to answer, and the first thing I did was ask about Xiao Zhou. I'd be annoyed too. I should apologize, right?"],["用户看到女友再次回应当众那句话，主动提到自己没等确认、带着猜疑过去。用户已经想道歉，可以帮他说清自己哪里做得不好。","Her second message addressed what she said in front of people. The user has now brought up coming without checking and asking her out of suspicion. He's ready to apologize. Help him say what he did wrong."]],"choices":[{"thought":["支持用户道歉","Help him apologize"],"reply":["可以发「我不该没等你回就跑过去，也不该一见面就那么问你。对不起。」把你想说的发给她，剩下的等她有空再聊。","You can send, “I shouldn't have come over without waiting for your reply. I shouldn't have questioned you like that as soon as I saw you. I'm sorry.” Tell her what you want her to hear. You can talk about the rest when she's free."]}],"memories":[]},"8f.F303ER":{"time":"21:16","lines":[["他刚回我「我不该没等你回就跑过去，也不该一见面就那么问你。对不起。」他也跟我道歉了。我刚才还以为他真不想理我了。我缓一会儿吧。","He replied, “I shouldn't have come over without waiting for your reply. I shouldn't have questioned you like that as soon as I saw you. I'm sorry.” He apologized too. I thought he really didn't want to talk to me anymore. I'll take a minute."],["用户收到男友的道歉，意外发现对方还愿意开口。她自己想缓一会儿，可以支持这个决定。","His apology surprised the user. He's still willing to talk. She wants a little time, and I can support that."]],"choices":[{"thought":["先缓缓","Give her a minute"],"reply":["他跟你道歉了，也认了自己没等你回就跑过来。你可以先缓一缓，等想说的时候再聊。","He apologized and owned that he came over without waiting for your reply. Take a minute. You can talk more when you're ready."]}],"memories":[]},"8m.M303ER":{"time":"21:17","lines":[["道歉发出去了。我还是想见她。我今天做得不好，想当面跟她说。现在问她能不能见一面，可以吗？","I sent the apology. I still want to see her. I didn't handle today well, and I want to say that in person. Is it okay to ask if we can meet now?"],["用户已发道歉，也想继续谈具体发生的事。可以给一句简短邀约，让女友按工作情况答复。","The user has sent an apology and wants to talk about what happened. Give him a short invitation she can answer around work."]],"choices":[{"thought":["把想当面谈说出来","Say he'd like to talk in person"],"reply":["可以发「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」她手头的事忙完，你们再找个地方坐下。","You can send, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” Once she's done, you can find somewhere to sit."]}],"memories":[]},"8f.F304G":{"time":"21:21","lines":[["他刚问「我还在你公司附近。你忙完了，我们下来找个地方说会儿话？」我收个尾就下去。好久没在这么晚的时候还约他在楼下见了。回他什么？","He asked, “I'm still near your office. When you're done, can we find somewhere downstairs and talk for a bit?” I'll go down once I've finished up. It's been a while since I met him downstairs this late. What do I say?"],["用户收到见面邀约，也愿意下楼谈。双方已分别发出具体歉意，可以帮她确认见面意愿和联系时间。","The user got the invitation and wants to go down and talk. They've both sent specific apologies. Help her say yes and let him know when to expect a message."]],"choices":[{"thought":["确认忙完发消息、楼下见","Confirm she'll text and meet him downstairs"],"reply":["可以回「好。我忙完给你发消息，楼下见。」你忙完再叫他过来，见到面有时间慢慢说。","You can reply, “Okay. I'll text you when I'm done. See you downstairs.” Let him know when you're done. You'll have time to talk when you see each other."]}],"memories":[]},"8m.M304G":{"time":"21:22","lines":[["她回了「好。我忙完给你发消息，楼下见。」行，我等她发消息。","She said, “Okay. I'll text you when I'm done. See you downstairs.” Okay. I'll wait for her text."],["用户收到明确的见面答复，双方都已经把各自的一部分说出来。眼下只需等她约好的消息。","She's said yes and both of them have said some of what they wanted to say. All the user needs to do is wait for her message."]],"choices":[{"thought":["确认楼下见面","Confirm they'll meet downstairs"],"reply":["好。等她发消息你再过去，给她把手头的事收完。","Okay. Wait for her to text before you go over. Give her time to finish what she's doing."]}],"memories":[]},"8f.F305G":{"time":"That Night · After Meeting","lines":[["刚在楼下找了个地方坐了会儿。我跟他说当着人说他丢人确实不该。也跟他说下次来之前先问我，别到了才让我选下不下去。他说好。我也说了，以后真气得说不下去，我跟他说晚点聊。两个人才发现都还没正经吃晚饭，去找点热的。","We just found somewhere to sit downstairs. I told him I shouldn't have said that about him in front of people. I also told him to check with me before he comes next time, instead of having me decide whether to come down once he's there. He said okay. I said if I'm ever too angry to talk, I'll tell him we'll talk later. Then we realized neither of us had actually eaten dinner. We're looking for something hot."],["用户已经当面谈过，既承认了自己的话，也和男友约好了下次到公司前先确认、想暂停时先说一声。可以回应这两件具体的事，接上他们现在要去吃饭的安排。","They've talked in person. The user owned what she said, and they agreed to check ahead before a visit and to say when they need a break. Acknowledge those two things and pick up with them getting dinner."]],"choices":[{"thought":["接住他们终于坐下来谈过","Acknowledge that they sat down and talked"],"reply":["你们把今天最难受的几句说出来，也约好了下次遇到这种情况怎么开口。现在可以一起吃点热的，把那顿惦记了一天的饭吃上。","You both said what hurt most today and agreed on what to say the next time something like this happens. Go get something hot together. You've been looking forward to this dinner all day."]}],"memories":[]},"8m.M305G":{"time":"That Night · After Meeting","lines":[["刚见完。她说我发要过去的时候她在改东西，回工位才看到。我跟她说我就是很盼今天，临时改期我有点蔫，但也不该没等她回就跑去，还非让她证明。她说下次要是气得想先不聊，会先说一声。我也答应了，去找她前先问好。我们正找吃的呢。","We just talked. She said she was revising something when I texted about coming over and didn't see it till she got back to her desk. I told her I'd been looking forward to today and felt deflated when the plans changed. I still shouldn't have come without waiting for an answer or tried to make her prove anything. She said if she's ever too angry to keep talking she'll let me know first. I said I'd check with her before coming over. We're looking for something to eat now."],["用户当面说清了自己在意纪念日，也承认了未等回复和逼对方证明的做法。两人谈出了下一次能做到的安排，可以回应这个具体进展。","The user told her how much the anniversary mattered and owned showing up without waiting and demanding proof. They made a plan they can use next time. Acknowledge that concrete progress."]],"choices":[{"thought":["确认这次谈成的约定","Acknowledge what they agreed on"],"reply":["你们说清了各自当时在意什么，也定了两件下次能做的事。今天的纪念日饭还赶得上，去吃点热的吧。","You both said what mattered to you and came up with two things you can actually do next time. It's still your anniversary. Go get something hot."]}],"memories":[]}}`),t0=JSON.parse(`{"他请助手推荐桌游店，想选一家适合多人聚会的店。":"He asked the assistant to recommend a board game café that could fit a large group.","朋友约她去桌游店，她让助手查了地点。":"A friend invited her to a board game café. She asked the assistant where it was.","出门时间紧，她问要不要化妆。":"She was short on time and asked whether to put on makeup.","他到了一家临时改换的桌游店，现场有不少陌生人。":"He arrived at the board game café after a last-minute change of venue and found a lot of unfamiliar faces.","他到了桌游店，发现除了朋友几乎都不认识。":"He arrived at the café and realized he barely knew anyone besides his friend.","他和一位戴耳机的人搭话，起初误以为对方不想理他。":"He tried talking to someone wearing earbuds and initially thought she was ignoring him.","桌游开始后，他留意到一位像是表妹同桌的女生。":"Once the game started, he noticed a girl who looked like his cousin's deskmate.","他留意到刚进来的女生的眼妆和笑声，觉得她像是表妹的同桌。":"He noticed the new arrival's eye makeup and laugh and thought she might be his cousin's deskmate.","他说下一局要开始了，先不聊了。":"He said the next round was about to start and ended the chat.","她出地铁后问了去桌游店的路。":"She asked how to get to the board game café after coming out of the subway.","她说没按助手的指路找到店，后来向同学问到了位置。":"The assistant's directions didn't get her there. A classmate sent her the location.","她问起一件衣服的牌子和价格。":"She asked about a jacket's brand and price.","桌游结束后，他向助手回顾了和那位女生的互动。":"After the game, he told the assistant what happened between him and the girl.","他想和她交换微信，又怕开口太唐突。":"He wanted to exchange WeChat contacts with her but worried it would feel awkward to ask.","他打算借舍友的名义去问表妹。":"He planned to ask his cousin under the pretense that it was for his roommate.","他当面问她能不能加微信，她请同桌帮忙推联系方式。":"He asked in person whether they could add each other on WeChat. She asked her deskmate to share her contact.","他重新想了想，决定先不问。":"He thought it over and decided not to ask for now.","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。":"She met her deskmate's older cousin at board games and wanted to get in touch, but hesitated to ask her deskmate.","她打算去问同桌。":"She decided to ask her deskmate.","他当面问能不能加微信，她答应并请同桌转推。":"He asked to add her on WeChat in person. She said yes and asked her deskmate to share her contact.","她决定先不问。":"She decided not to ask for now.","加上微信后，他琢磨怎么开场，又问起她回消息的速度。":"After they connected on WeChat, he wondered what to say first, then asked about her reply speed.","他睡前收住话题，第二天早上她照常找他聊天。":"He ended the chat before bed. She messaged him again the next morning.","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。":"He kept the board game conversation going. The next day he hadn't heard from her by daytime.","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。":"They kept talking. He noticed she sometimes shared things first and wondered if he messaged too often.","他试着少发消息，等回复时还是觉得不踏实。":"He tried messaging less and still felt uneasy waiting for replies.","他仍然频繁发消息，发现她回得一如既往地慢。":"He kept messaging often and found she replied just as slowly as before.","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。":"After connecting on WeChat, they talked for a few days. She told the assistant she often had no energy to reply after work.","她告诉他自己累了，收到一长串关心的话。":"She told him she was tired and got a long, concerned reply.","她发了个表情包，他回了一句让她早点休息。":"She sent a sticker. He told her to get some rest.","他夸她开朗，她向助手说起自己的社交生活。":"He called her outgoing. She told the assistant about her social life.","她在和闺蜜吃饭时说起他。":"She brought him up over dinner with her closest friends.","她向助手谈到自己累时习惯一个人待着。":"She told the assistant she usually likes to be alone when she's tired.","她说他问起家里的事，自己岔开了话题。":"She said he asked about her family, so she changed the subject.","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。":"He asked her to dinner. They rescheduled and met, and he told the assistant how the date went.","他和助手商量表白，发出消息后收到她愿意试试的答复。":"He talked through how to tell her he liked her. After he sent the message, she said she wanted to give it a try.","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。":"She had to move their date to Sunday because of work. Afterwards she told the assistant how it felt to have dinner and walk with him.","收到表白后她犹豫过，最后回复说愿意试试。":"She hesitated after he told her he liked her, then said she wanted to give it a try.","确定关系后，他用两人的照片发了朋友圈。":"Once they got together, he posted a photo of the two of them on Moments.","他提议吃青提蛋糕庆祝，后来把合照原图发给她。":"He suggested celebrating with green grape cake and later sent her the original photo.","他问她能不能一起过满月纪念日，又来问礼物怎么准备。":"He asked if they could spend their one-month anniversary together, then asked the assistant for gift ideas.","他下单洗了两张合照。":"He ordered two prints of their photo.","他先记下纪念日，准备以后再想礼物。":"He saved the date and decided to think about a gift later.","她看到了他发的合照，来问自己要不要也发一条。":"She saw the photo he'd posted and asked if she should post one too.","她发了朋友圈，同事来问照片里的人是谁。":"She posted on Moments. A coworker asked who was in the photo.","她把照片发给闺蜜，闺蜜打来电话。":"She sent the photo to her best friend, who called her.","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。":"She asked him for the original photo and mentioned his idea of celebrating with green grape cake.","她答应把满月纪念日那天留给他，并记进了日历。":"She agreed to save the one-month anniversary for him and put it in her calendar.","她赶项目、回消息变少，他说自己还是常想找她。":"She was busy finishing a project and replied less often. He said he still wanted to talk to her a lot.","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。":"He recounted the fight after her department dinner, including his demand to see her private chat with a coworker.","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。":"He admitted he shouldn't have asked to see her chat history. She didn't reply all day, and he told the assistant about waiting and what he'd started to imagine.","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。":"She was trying to finish a project and asked how to tell him in advance about her department dinner.","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。":"After the dinner, he pressed her about her coworker and asked to see their messages. She told the assistant what happened.","她看到了他的消息，告诉助手自己故意没有回复。":"She saw his messages and told the assistant she didn't answer on purpose.","她还不想和他说话，开始考虑找别人聊聊。":"She wasn't ready to talk to him and thought about talking to someone else.","她决定找闺蜜聊聊。":"She decided to talk to her best friend.","她打算找同桌聊，想先请同桌别替她联系男友。":"She planned to talk to her deskmate and ask her not to contact her boyfriend on her behalf.","她约他见面，也告诉他自己前一天是故意没回。":"She asked to meet and told him she hadn't replied on purpose the day before.","她发来见面邀请，他还在犹豫要不要问前一天的事。":"She asked to meet. He was still unsure whether to ask what happened the day before.","两人约好下午四点在地铁口见，他来问吃什么比较合适。":"They agreed to meet at four at the subway exit. He asked what would be good to eat.","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。":"When they met, they talked about her not replying on purpose and his suspicions about her coworker. They discussed what to do differently next time.","她提到自己气上了头，他换了话题。":"She said she'd gotten carried away because she was angry. He changed the subject.","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。":"He said he wouldn't jump to conclusions about her coworker and didn't want to keep waiting without an answer.","他们一起吃了饭，没有提起周五的争执。":"They had dinner without bringing up Friday's fight.","闺蜜问她还想不想见他，她说想见。":"Her best friend asked if she still wanted to see him. She said she did.","同桌听她说完，劝她把自己介意的事告诉男友。":"Her deskmate heard her out and suggested she tell her boyfriend what had upset her.","她想当面说，最后发出了见面邀请。":"She wanted to talk in person and sent him an invitation to meet.","发出邀请时，她也写了自己是故意让他等。":"In the invitation, she wrote that she'd kept him waiting on purpose.","他答应见面。她和他约好下午四点在地铁口碰头。":"He agreed to meet. They settled on four at the subway exit.","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。":"When they met, she said she'd kept him waiting on purpose and promised to tell him when she needed a break from talking.","她说自己当时气上了头，随后两人聊了别的。":"She said she'd gotten carried away because she was angry. They went on to talk about something else.","她解释为什么当时不愿回消息，随后和他一起吃了饭。":"She explained why she hadn't wanted to answer, then they had dinner.","他们一起吃了饭，没有再提争执。":"They had dinner and didn't bring up the fight again.","她向助手说起吃饭时拍糊的照片。":"She told the assistant about the blurry photos he took at dinner.","交往满一个月，她打算给男友带点东西，问助手买什么。":"On their one-month anniversary, she asked what little gift she could get her boyfriend.","她买了蛋糕，放在办公室冰箱里。":"She bought a cake and put it in the office fridge.","她买了盒曲奇，放进包里。":"She bought a box of cookies and put it in her bag.","交往满一个月，他想给女友带杯喝的，问助手去哪儿买。":"On their one-month anniversary, he asked where to buy his girlfriend a drink.","他决定去青杏买饮料。":"He decided to get a drink from Green Apricot.","他打算出门后再挑饮品店。":"He decided to pick a drink shop after he headed out.","她临时加班，跟男友商量把晚饭改到另一天。":"She had to work late and asked him to move dinner to another day.","他收到晚饭改期的消息。虽然答应了，心里还是有点失落。":"He agreed to reschedule dinner, though he still felt a little disappointed.","他买了吃的和喝的，没等到回复就出发了。":"He bought food and a drink and headed over without waiting for a reply.","他在她公司楼下碰见她和同事，当众起了争执。他介意她说自己丢人。":"He ran into her and her coworker downstairs from her office. They argued in front of other people. It bothered him that she'd called him embarrassing.","她下楼拿外卖时碰见突然到访的男友，被他当着同事的面追问。":"She went downstairs to pick up takeout and ran into her boyfriend unexpectedly. He questioned her in front of her coworkers.","他来复述争执，提到自己要求看私聊、让她删除同事，也问她有没有回应他的委屈。":"He recounted the fight, including asking to see the chat and telling her to delete her coworker. He asked if she'd answered the part about how much it hurt.","她来复述争执，说自己拒绝交出聊天记录，也拒绝删除同事。":"She recounted the fight and said she'd refused to show her messages or delete her coworker.","他和助手借过去的经历重新回顾这次争执。":"He and the assistant used past experiences to look at the fight again.","她和助手借过去的经历重新回顾这次争执。":"She and the assistant used past experiences to look at the fight again.","他向助手说起自己当时没有被听见的感受。":"He told the assistant what it felt like to go unheard during the fight.","她向助手说起自己被怀疑时的感受。":"She told the assistant what it felt like to be suspected.","他承认索看私聊和要求删人不妥，向女友道歉。":"He apologized for asking to see her messages and telling her to delete her coworker.","她收到道歉后仍然生气，读到他第二次回应后，也想为自己说过的话道歉。":"She was still angry after his apology. After his second message, she wanted to apologize for what she'd said too.","道歉被反问后，他承认自己刚才的指责，让她晚点再回。":"When she challenged his apology, he owned the accusation and gave her time before answering again.","她想起自己当众说的话，决定为此道歉。":"She remembered what she'd said in front of everyone and decided to apologize for it.","他收到道歉时仍有怨气，读完她后续的回应后，也承认自己不该突然去找她并当面质问。":"He was still angry when he got her apology. After reading what she said next, he admitted he shouldn't have shown up unexpectedly and questioned her.","道歉被顶回来后，她说明了当时为什么急着走，随后也收到他的道歉。":"After he pushed back on her apology, she explained why she'd wanted to leave in a hurry. He then apologized too.","他来问怎么约她见面，想当面说清楚。":"He asked how to invite her to meet, so they could talk in person.","两人约好等她忙完后在楼下见。":"They arranged to meet downstairs once she finished work.","两人当面谈过，约好到访前先确认，需要冷静时先说一声。":"They talked in person and agreed to check before a visit and to say when they needed a minute to cool off.","她决定结束关系，发出分手消息后准备回家。":"She decided to end the relationship. After sending the breakup message, she got ready to go home.","他收到分手消息，一时不知道怎么回，后来放下了手机。":"He got the breakup message and didn't know how to answer. Later, he put his phone down.","本次会话还有其他已处理消息。":"Other messages were processed in this session."}`),n0=["The Board Game Meetup","After Adding Each Other on WeChat","The First Date and the Confession","Their First Day Together","The First Fight","Meeting on Sunday","Rescheduling the Anniversary","The Argument Downstairs","After the Argument"],i0={"桌游局结束后，两人没有交换微信。":"After the board game meetup, they didn't exchange WeChat contacts.",分手:"Ending · They Break Up",和好:"Ending · They Make Up"},Hl={beats:e0,summaries:t0,titles:n0,endings:i0},fg=ie.createContext({language:"zh",setLanguage:l=>{}});function An(){const{language:l,setLanguage:s}=ie.useContext(fg);return{language:l,setLanguage:s,t:(c,u)=>l==="en"?u:c}}function mg(){const{language:l,setLanguage:s}=An();return Y.jsxs("div",{className:"language-switch",role:"group","aria-label":"Language / 语言",children:[Y.jsx("button",{type:"button",lang:"en","aria-pressed":l==="en",onClick:()=>s("en"),children:"EN"}),Y.jsx("button",{type:"button",lang:"zh-CN","aria-pressed":l==="zh",onClick:()=>s("zh"),children:"中文"})]})}const Va=Hl.beats,a0=Hl.titles,r0=Hl.summaries,o0=Hl.endings;function l0(l){var d,m;const s=Va[l.beatId],c=l.id.match(/:(?:(reply):)?(\d+)$/),u=(c==null?void 0:c[1])==="reply"?(d=s==null?void 0:s.choices[Number(c[2])])==null?void 0:d.reply:c?s==null?void 0:s.lines[Number(c[2])]:void 0;return((m=u==null?void 0:u[0])==null?void 0:m.trim())===l.text.trim()?u[1]:l.text}function Gh(l){var c;const s=(c=Va[l.beatId])==null?void 0:c.memories.find(u=>u.label===l.label);return{label:(s==null?void 0:s.name)??l.label,text:(s==null?void 0:s.quote[1])??l.text}}function s0(l){var s;return((s=Object.values(Va).flatMap(c=>(c==null?void 0:c.memories)??[]).find(c=>c.label===l))==null?void 0:s.name)??l}function u0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var jt={},Il={},Ci={},Hy;function Wr(){if(Hy)return Ci;Hy=1;function l(p){return typeof p>"u"||p===null}function s(p){return typeof p=="object"&&p!==null}function c(p){return Array.isArray(p)?p:l(p)?[]:[p]}function u(p,b){if(b){const S=Object.keys(b);for(let v=0,w=S.length;v<w;v+=1){const g=S[v];p[g]=b[g]}}return p}function d(p,b){let S="";for(let v=0;v<b;v+=1)S+=p;return S}function m(p){return p===0&&Number.NEGATIVE_INFINITY===1/p}return Ci.isNothing=l,Ci.isObject=s,Ci.toArray=c,Ci.repeat=d,Ci.isNegativeZero=m,Ci.extend=u,Ci}var ph,Dy;function $r(){if(Dy)return ph;Dy=1;function l(c,u){let d="";const m=c.reason||"(unknown reason)";return c.mark?(c.mark.name&&(d+='in "'+c.mark.name+'" '),d+="("+(c.mark.line+1)+":"+(c.mark.column+1)+")",!u&&c.mark.snippet&&(d+=`

`+c.mark.snippet),m+" "+d):m}function s(c,u){Error.call(this),this.name="YAMLException",this.reason=c,this.mark=u,this.message=l(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,s.prototype.toString=function(u){return this.name+": "+l(this,u)},ph=s,ph}var wh,_y;function h0(){if(_y)return wh;_y=1;const l=Wr();function s(d,m,p,b,S){let v="",w="";const g=Math.floor(S/2)-1;return b-m>g&&(v=" ... ",m=b-g+v.length),p-b>g&&(w=" ...",p=b+g-w.length),{str:v+d.slice(m,p).replace(/\t/g,"→")+w,pos:b-m+v.length}}function c(d,m){return l.repeat(" ",m-d.length)+d}function u(d,m){if(m=Object.create(m||null),!d.buffer)return null;m.maxLength||(m.maxLength=79),typeof m.indent!="number"&&(m.indent=1),typeof m.linesBefore!="number"&&(m.linesBefore=3),typeof m.linesAfter!="number"&&(m.linesAfter=2);const p=/\r?\n|\r|\0/g,b=[0],S=[];let v,w=-1;for(;v=p.exec(d.buffer);)S.push(v.index),b.push(v.index+v[0].length),d.position<=v.index&&w<0&&(w=b.length-2);w<0&&(w=b.length-1);let g="";const k=Math.min(d.line+m.linesAfter,S.length).toString().length,R=m.maxLength-(m.indent+k+3);for(let $=1;$<=m.linesBefore&&!(w-$<0);$++){const P=s(d.buffer,b[w-$],S[w-$],d.position-(b[w]-b[w-$]),R);g=l.repeat(" ",m.indent)+c((d.line-$+1).toString(),k)+" | "+P.str+`
`+g}const F=s(d.buffer,b[w],S[w],d.position,R);g+=l.repeat(" ",m.indent)+c((d.line+1).toString(),k)+" | "+F.str+`
`,g+=l.repeat("-",m.indent+k+3+F.pos)+`^
`;for(let $=1;$<=m.linesAfter&&!(w+$>=S.length);$++){const P=s(d.buffer,b[w+$],S[w+$],d.position-(b[w]-b[w+$]),R);g+=l.repeat(" ",m.indent)+c((d.line+$+1).toString(),k)+" | "+P.str+`
`}return g.replace(/\n$/,"")}return wh=u,wh}var vh,Yy;function Gt(){if(Yy)return vh;Yy=1;const l=$r(),s=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],c=["scalar","sequence","mapping"];function u(m){const p={};return m!==null&&Object.keys(m).forEach(function(b){m[b].forEach(function(S){p[String(S)]=b})}),p}function d(m,p){if(p=p||{},Object.keys(p).forEach(function(b){if(s.indexOf(b)===-1)throw new l('Unknown option "'+b+'" is met in definition of "'+m+'" YAML type.')}),this.options=p,this.tag=m,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(b){return b},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=u(p.styleAliases||null),c.indexOf(this.kind)===-1)throw new l('Unknown kind "'+this.kind+'" is specified for "'+m+'" YAML type.')}return vh=d,vh}var bh,jy;function yg(){if(jy)return bh;jy=1;const l=$r(),s=Gt();function c(m,p){const b=[];return m[p].forEach(function(S){let v=b.length;b.forEach(function(w,g){w.tag===S.tag&&w.kind===S.kind&&w.multi===S.multi&&(v=g)}),b[v]=S}),b}function u(){const m={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function p(b){b.multi?(m.multi[b.kind].push(b),m.multi.fallback.push(b)):m[b.kind][b.tag]=m.fallback[b.tag]=b}for(let b=0,S=arguments.length;b<S;b+=1)arguments[b].forEach(p);return m}function d(m){return this.extend(m)}return d.prototype.extend=function(p){let b=[],S=[];if(p instanceof s)S.push(p);else if(Array.isArray(p))S=S.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(b=b.concat(p.implicit)),p.explicit&&(S=S.concat(p.explicit));else throw new l("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");b.forEach(function(w){if(!(w instanceof s))throw new l("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(w.loadKind&&w.loadKind!=="scalar")throw new l("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(w.multi)throw new l("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),S.forEach(function(w){if(!(w instanceof s))throw new l("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const v=Object.create(d.prototype);return v.implicit=(this.implicit||[]).concat(b),v.explicit=(this.explicit||[]).concat(S),v.compiledImplicit=c(v,"implicit"),v.compiledExplicit=c(v,"explicit"),v.compiledTypeMap=u(v.compiledImplicit,v.compiledExplicit),v},bh=d,bh}var kh,zy;function gg(){if(zy)return kh;zy=1;const l=Gt();return kh=new l("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),kh}var Sh,qy;function pg(){if(qy)return Sh;qy=1;const l=Gt();return Sh=new l("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),Sh}var xh,By;function wg(){if(By)return xh;By=1;const l=Gt();return xh=new l("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),xh}var Th,Uy;function vg(){if(Uy)return Th;Uy=1;const l=yg();return Th=new l({explicit:[gg(),pg(),wg()]}),Th}var Eh,Ly;function bg(){if(Ly)return Eh;Ly=1;const l=Gt();function s(d){if(d===null)return!0;const m=d.length;return m===1&&d==="~"||m===4&&(d==="null"||d==="Null"||d==="NULL")}function c(){return null}function u(d){return d===null}return Eh=new l("tag:yaml.org,2002:null",{kind:"scalar",resolve:s,construct:c,predicate:u,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Eh}var Ih,Gy;function kg(){if(Gy)return Ih;Gy=1;const l=Gt();function s(d){if(d===null)return!1;const m=d.length;return m===4&&(d==="true"||d==="True"||d==="TRUE")||m===5&&(d==="false"||d==="False"||d==="FALSE")}function c(d){return d==="true"||d==="True"||d==="TRUE"}function u(d){return Object.prototype.toString.call(d)==="[object Boolean]"}return Ih=new l("tag:yaml.org,2002:bool",{kind:"scalar",resolve:s,construct:c,predicate:u,represent:{lowercase:function(d){return d?"true":"false"},uppercase:function(d){return d?"TRUE":"FALSE"},camelcase:function(d){return d?"True":"False"}},defaultStyle:"lowercase"}),Ih}var Ah,Xy;function Sg(){if(Xy)return Ah;Xy=1;const l=Wr(),s=Gt();function c(v){return v>=48&&v<=57||v>=65&&v<=70||v>=97&&v<=102}function u(v){return v>=48&&v<=55}function d(v){return v>=48&&v<=57}function m(v){if(v===null)return!1;const w=v.length;let g=0,k=!1;if(!w)return!1;let R=v[g];if((R==="-"||R==="+")&&(R=v[++g]),R==="0"){if(g+1===w)return!0;if(R=v[++g],R==="b"){for(g++;g<w;g++){if(R=v[g],R!=="0"&&R!=="1")return!1;k=!0}return k&&isFinite(p(v))}if(R==="x"){for(g++;g<w;g++){if(!c(v.charCodeAt(g)))return!1;k=!0}return k&&isFinite(p(v))}if(R==="o"){for(g++;g<w;g++){if(!u(v.charCodeAt(g)))return!1;k=!0}return k&&isFinite(p(v))}}for(;g<w;g++){if(!d(v.charCodeAt(g)))return!1;k=!0}return k?isFinite(p(v)):!1}function p(v){let w=v,g=1,k=w[0];if((k==="-"||k==="+")&&(k==="-"&&(g=-1),w=w.slice(1),k=w[0]),w==="0")return 0;if(k==="0"){if(w[1]==="b")return g*parseInt(w.slice(2),2);if(w[1]==="x")return g*parseInt(w.slice(2),16);if(w[1]==="o")return g*parseInt(w.slice(2),8)}return g*parseInt(w,10)}function b(v){return p(v)}function S(v){return Object.prototype.toString.call(v)==="[object Number]"&&v%1===0&&!l.isNegativeZero(v)}return Ah=new s("tag:yaml.org,2002:int",{kind:"scalar",resolve:m,construct:b,predicate:S,represent:{binary:function(v){return v>=0?"0b"+v.toString(2):"-0b"+v.toString(2).slice(1)},octal:function(v){return v>=0?"0o"+v.toString(8):"-0o"+v.toString(8).slice(1)},decimal:function(v){return v.toString(10)},hexadecimal:function(v){return v>=0?"0x"+v.toString(16).toUpperCase():"-0x"+v.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ah}var Mh,Fy;function xg(){if(Fy)return Mh;Fy=1;const l=Wr(),s=Gt(),c=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),u=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function d(v){return v===null||!c.test(v)?!1:isFinite(parseFloat(v,10))?!0:u.test(v)}function m(v){let w=v.toLowerCase();const g=w[0]==="-"?-1:1;return"+-".indexOf(w[0])>=0&&(w=w.slice(1)),w===".inf"?g===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:w===".nan"?NaN:g*parseFloat(w,10)}const p=/^[-+]?[0-9]+e/;function b(v,w){if(isNaN(v))switch(w){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===v)switch(w){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===v)switch(w){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(l.isNegativeZero(v))return"-0.0";const g=v.toString(10);return p.test(g)?g.replace("e",".e"):g}function S(v){return Object.prototype.toString.call(v)==="[object Number]"&&(v%1!==0||l.isNegativeZero(v))}return Mh=new s("tag:yaml.org,2002:float",{kind:"scalar",resolve:d,construct:m,predicate:S,represent:b,defaultStyle:"lowercase"}),Mh}var Oh,Qy;function Tg(){return Qy||(Qy=1,Oh=vg().extend({implicit:[bg(),kg(),Sg(),xg()]})),Oh}var Nh,Zy;function Eg(){return Zy||(Zy=1,Nh=Tg()),Nh}var Ch,Ky;function Ig(){if(Ky)return Ch;Ky=1;const l=Gt(),s=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),c=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function u(p){return p===null?!1:s.exec(p)!==null||c.exec(p)!==null}function d(p){let b=0,S=null,v=s.exec(p);if(v===null&&(v=c.exec(p)),v===null)throw new Error("Date resolve error");const w=+v[1],g=+v[2]-1,k=+v[3];if(!v[4])return new Date(Date.UTC(w,g,k));const R=+v[4],F=+v[5],$=+v[6];if(v[7]){for(b=v[7].slice(0,3);b.length<3;)b+="0";b=+b}if(v[9]){const be=+v[10],me=+(v[11]||0);S=(be*60+me)*6e4,v[9]==="-"&&(S=-S)}const P=new Date(Date.UTC(w,g,k,R,F,$,b));return S&&P.setTime(P.getTime()-S),P}function m(p){return p.toISOString()}return Ch=new l("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:u,construct:d,instanceOf:Date,represent:m}),Ch}var Rh,Vy;function Ag(){if(Vy)return Rh;Vy=1;const l=Gt();function s(c){return c==="<<"||c===null}return Rh=new l("tag:yaml.org,2002:merge",{kind:"scalar",resolve:s}),Rh}var Hh,Jy;function Mg(){if(Jy)return Hh;Jy=1;const l=Gt(),s=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function c(p){if(p===null)return!1;let b=0;const S=p.length,v=s;for(let w=0;w<S;w++){const g=v.indexOf(p.charAt(w));if(!(g>64)){if(g<0)return!1;b+=6}}return b%8===0}function u(p){const b=p.replace(/[\r\n=]/g,""),S=b.length,v=s;let w=0;const g=[];for(let R=0;R<S;R++)R%4===0&&R&&(g.push(w>>16&255),g.push(w>>8&255),g.push(w&255)),w=w<<6|v.indexOf(b.charAt(R));const k=S%4*6;return k===0?(g.push(w>>16&255),g.push(w>>8&255),g.push(w&255)):k===18?(g.push(w>>10&255),g.push(w>>2&255)):k===12&&g.push(w>>4&255),new Uint8Array(g)}function d(p){let b="",S=0;const v=p.length,w=s;for(let k=0;k<v;k++)k%3===0&&k&&(b+=w[S>>18&63],b+=w[S>>12&63],b+=w[S>>6&63],b+=w[S&63]),S=(S<<8)+p[k];const g=v%3;return g===0?(b+=w[S>>18&63],b+=w[S>>12&63],b+=w[S>>6&63],b+=w[S&63]):g===2?(b+=w[S>>10&63],b+=w[S>>4&63],b+=w[S<<2&63],b+=w[64]):g===1&&(b+=w[S>>2&63],b+=w[S<<4&63],b+=w[64],b+=w[64]),b}function m(p){return Object.prototype.toString.call(p)==="[object Uint8Array]"}return Hh=new l("tag:yaml.org,2002:binary",{kind:"scalar",resolve:c,construct:u,predicate:m,represent:d}),Hh}var Dh,Wy;function Og(){if(Wy)return Dh;Wy=1;const l=Gt(),s=Object.prototype.hasOwnProperty,c=Object.prototype.toString;function u(m){if(m===null)return!0;const p={},b=m;for(let S=0,v=b.length;S<v;S+=1){const w=b[S];let g=!1;if(c.call(w)!=="[object Object]")return!1;let k;for(k in w)if(s.call(w,k))if(!g)g=!0;else return!1;if(!g||s.call(p,k))return!1;Object.defineProperty(p,k,{value:!0})}return!0}function d(m){return m!==null?m:[]}return Dh=new l("tag:yaml.org,2002:omap",{kind:"sequence",resolve:u,construct:d}),Dh}var _h,$y;function Ng(){if($y)return _h;$y=1;const l=Gt(),s=Object.prototype.toString;function c(d){if(d===null)return!0;const m=d,p=new Array(m.length);for(let b=0,S=m.length;b<S;b+=1){const v=m[b];if(s.call(v)!=="[object Object]")return!1;const w=Object.keys(v);if(w.length!==1)return!1;p[b]=[w[0],v[w[0]]]}return!0}function u(d){if(d===null)return[];const m=d,p=new Array(m.length);for(let b=0,S=m.length;b<S;b+=1){const v=m[b],w=Object.keys(v);p[b]=[w[0],v[w[0]]]}return p}return _h=new l("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:c,construct:u}),_h}var Yh,Py;function Cg(){if(Py)return Yh;Py=1;const l=Gt(),s=Object.prototype.hasOwnProperty;function c(d){if(d===null)return!0;const m=d;for(const p in m)if(s.call(m,p)&&m[p]!==null)return!1;return!0}function u(d){return d!==null?d:{}}return Yh=new l("tag:yaml.org,2002:set",{kind:"mapping",resolve:c,construct:u}),Yh}var jh,eg;function Zh(){return eg||(eg=1,jh=Eg().extend({implicit:[Ig(),Ag()],explicit:[Mg(),Og(),Ng(),Cg()]})),jh}var tg;function c0(){if(tg)return Il;tg=1;const l=Wr(),s=$r(),c=h0(),u=Zh(),d=Object.prototype.hasOwnProperty,m=1,p=2,b=3,S=4,v=1,w=2,g=3,k=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,R=/[\x85\u2028\u2029]/,F=/[,\[\]{}]/,$=/^(?:!|!!|![0-9A-Za-z-]+!)$/,P=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function be(o){return Object.prototype.toString.call(o)}function me(o){return o===10||o===13}function ce(o){return o===9||o===32}function he(o){return o===9||o===32||o===10||o===13}function Ae(o){return o===44||o===91||o===93||o===123||o===125}function Oe(o){if(o>=48&&o<=57)return o-48;const O=o|32;return O>=97&&O<=102?O-97+10:-1}function Se(o){return o===120?2:o===117?4:o===85?8:0}function J(o){return o>=48&&o<=57?o-48:-1}function Me(o){switch(o){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function Ce(o){return o<=65535?String.fromCharCode(o):String.fromCharCode((o-65536>>10)+55296,(o-65536&1023)+56320)}function we(o,O,G){O==="__proto__"?Object.defineProperty(o,O,{configurable:!0,enumerable:!0,writable:!0,value:G}):o[O]=G}const Re=new Array(256),Ze=new Array(256);for(let o=0;o<256;o++)Re[o]=Me(o)?1:0,Ze[o]=Me(o);function Xe(o,O){this.input=o,this.filename=O.filename||null,this.schema=O.schema||u,this.onWarning=O.onWarning||null,this.legacy=O.legacy||!1,this.json=O.json||!1,this.listener=O.listener||null,this.maxDepth=typeof O.maxDepth=="number"?O.maxDepth:100,this.maxTotalMergeKeys=typeof O.maxTotalMergeKeys=="number"?O.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=o.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function ae(o,O){const G={name:o.filename,buffer:o.input.slice(0,-1),position:o.position,line:o.line,column:o.position-o.lineStart};return G.snippet=c(G),new s(O,G)}function A(o,O){throw ae(o,O)}function ee(o,O){o.onWarning&&o.onWarning.call(null,ae(o,O))}function re(o,O,G){const K=o.anchorMapTransactions;if(K.length!==0){const B=K[K.length-1];d.call(B,O)||(B[O]={existed:d.call(o.anchorMap,O),value:o.anchorMap[O]})}o.anchorMap[O]=G}function He(o){o.anchorMapTransactions.push(Object.create(null))}function le(o){const O=o.anchorMapTransactions.pop(),G=o.anchorMapTransactions;if(G.length===0)return;const K=G[G.length-1],B=Object.keys(O);for(let f=0,D=B.length;f<D;f+=1){const T=B[f];d.call(K,T)||(K[T]=O[T])}}function et(o){const O=o.anchorMapTransactions.pop(),G=Object.keys(O);for(let K=G.length-1;K>=0;K-=1){const B=O[G[K]];B.existed?o.anchorMap[G[K]]=B.value:delete o.anchorMap[G[K]]}}function Ke(o){return{position:o.position,line:o.line,lineStart:o.lineStart,lineIndent:o.lineIndent,firstTabInLine:o.firstTabInLine,tag:o.tag,anchor:o.anchor,kind:o.kind,result:o.result}}function qe(o,O){o.position=O.position,o.line=O.line,o.lineStart=O.lineStart,o.lineIndent=O.lineIndent,o.firstTabInLine=O.firstTabInLine,o.tag=O.tag,o.anchor=O.anchor,o.kind=O.kind,o.result=O.result}const I={YAML:function(O,G,K){O.version!==null&&A(O,"duplication of %YAML directive"),K.length!==1&&A(O,"YAML directive accepts exactly one argument");const B=/^([0-9]+)\.([0-9]+)$/.exec(K[0]);B===null&&A(O,"ill-formed argument of the YAML directive");const f=parseInt(B[1],10),D=parseInt(B[2],10);f!==1&&A(O,"unacceptable YAML version of the document"),O.version=K[0],O.checkLineBreaks=D<2,D!==1&&D!==2&&ee(O,"unsupported YAML version of the document")},TAG:function(O,G,K){let B;K.length!==2&&A(O,"TAG directive accepts exactly two arguments");const f=K[0];B=K[1],$.test(f)||A(O,"ill-formed tag handle (first argument) of the TAG directive"),d.call(O.tagMap,f)&&A(O,'there is a previously declared suffix for "'+f+'" tag handle'),P.test(B)||A(O,"ill-formed tag prefix (second argument) of the TAG directive");try{B=decodeURIComponent(B)}catch{A(O,"tag prefix is malformed: "+B)}O.tagMap[f]=B}};function X(o,O,G,K){if(O<G){const B=o.input.slice(O,G);if(K)for(let f=0,D=B.length;f<D;f+=1){const T=B.charCodeAt(f);T===9||T>=32&&T<=1114111||A(o,"expected valid JSON character")}else k.test(B)&&A(o,"the stream contains non-printable characters");o.result+=B}}function se(o){o.totalMergeKeys++,o.maxTotalMergeKeys!==-1&&o.totalMergeKeys>o.maxTotalMergeKeys&&A(o,"merge keys exceeded maxTotalMergeKeys ("+o.maxTotalMergeKeys+")")}function W(o,O,G,K){l.isObject(G)||A(o,"cannot merge mappings; the provided source object is unacceptable"),se(o);const B=Object.keys(G);for(let f=0,D=B.length;f<D;f+=1){const T=B[f];se(o),d.call(O,T)||(we(O,T,G[T]),K[T]=!0)}}function ke(o,O,G,K,B,f,D,T,q){if(Array.isArray(B)){B=Array.prototype.slice.call(B);for(let L=0,U=B.length;L<U;L+=1)Array.isArray(B[L])&&A(o,"nested arrays are not supported inside keys"),typeof B=="object"&&be(B[L])==="[object Object]"&&(B[L]="[object Object]")}if(typeof B=="object"&&be(B)==="[object Object]"&&(B="[object Object]"),B=String(B),O===null&&(O={}),K==="tag:yaml.org,2002:merge")if(Array.isArray(f)){f.length>100&&A(o,"abnormal merge sequence size");for(let L=0,U=f.length;L<U;L+=1)W(o,O,f[L],G)}else W(o,O,f,G);else!o.json&&!d.call(G,B)&&d.call(O,B)&&(o.line=D||o.line,o.lineStart=T||o.lineStart,o.position=q||o.position,A(o,"duplicated mapping key")),we(O,B,f),delete G[B];return O}function Te(o){const O=o.input.charCodeAt(o.position);O===10?o.position++:O===13?(o.position++,o.input.charCodeAt(o.position)===10&&o.position++):A(o,"a line break is expected"),o.line+=1,o.lineStart=o.position,o.firstTabInLine=-1}function ye(o,O,G){let K=0,B=o.input.charCodeAt(o.position);for(;B!==0;){for(;ce(B);)B===9&&o.firstTabInLine===-1&&(o.firstTabInLine=o.position),B=o.input.charCodeAt(++o.position);if(O&&B===35)do B=o.input.charCodeAt(++o.position);while(B!==10&&B!==13&&B!==0);if(me(B))for(Te(o),B=o.input.charCodeAt(o.position),K++,o.lineIndent=0;B===32;)o.lineIndent++,B=o.input.charCodeAt(++o.position);else break}return G!==-1&&K!==0&&o.lineIndent<G&&ee(o,"deficient indentation"),K}function oe(o){let O=o.position,G=o.input.charCodeAt(O);return!!((G===45||G===46)&&G===o.input.charCodeAt(O+1)&&G===o.input.charCodeAt(O+2)&&(O+=3,G=o.input.charCodeAt(O),G===0||he(G)))}function ge(o,O){O===1?o.result+=" ":O>1&&(o.result+=l.repeat(`
`,O-1))}function Et(o,O,G){let K,B,f,D,T,q;const L=o.kind,U=o.result;let z=o.input.charCodeAt(o.position);if(he(z)||Ae(z)||z===35||z===38||z===42||z===33||z===124||z===62||z===39||z===34||z===37||z===64||z===96)return!1;if(z===63||z===45){const V=o.input.charCodeAt(o.position+1);if(he(V)||G&&Ae(V))return!1}for(o.kind="scalar",o.result="",K=B=o.position,f=!1;z!==0;){if(z===58){const V=o.input.charCodeAt(o.position+1);if(he(V)||G&&Ae(V))break}else if(z===35){const V=o.input.charCodeAt(o.position-1);if(he(V))break}else{if(o.position===o.lineStart&&oe(o)||G&&Ae(z))break;if(me(z))if(D=o.line,T=o.lineStart,q=o.lineIndent,ye(o,!1,-1),o.lineIndent>=O){f=!0,z=o.input.charCodeAt(o.position);continue}else{o.position=B,o.line=D,o.lineStart=T,o.lineIndent=q;break}}f&&(X(o,K,B,!1),ge(o,o.line-D),K=B=o.position,f=!1),ce(z)||(B=o.position+1),z=o.input.charCodeAt(++o.position)}return X(o,K,B,!1),o.result?!0:(o.kind=L,o.result=U,!1)}function Pt(o,O){let G,K,B=o.input.charCodeAt(o.position);if(B!==39)return!1;for(o.kind="scalar",o.result="",o.position++,G=K=o.position;(B=o.input.charCodeAt(o.position))!==0;)if(B===39)if(X(o,G,o.position,!0),B=o.input.charCodeAt(++o.position),B===39)G=o.position,o.position++,K=o.position;else return!0;else me(B)?(X(o,G,K,!0),ge(o,ye(o,!1,O)),G=K=o.position):o.position===o.lineStart&&oe(o)?A(o,"unexpected end of the document within a single quoted scalar"):(o.position++,ce(B)||(K=o.position));A(o,"unexpected end of the stream within a single quoted scalar")}function Xt(o,O){let G,K,B,f=o.input.charCodeAt(o.position);if(f!==34)return!1;for(o.kind="scalar",o.result="",o.position++,G=K=o.position;(f=o.input.charCodeAt(o.position))!==0;){if(f===34)return X(o,G,o.position,!0),o.position++,!0;if(f===92){if(X(o,G,o.position,!0),f=o.input.charCodeAt(++o.position),me(f))ye(o,!1,O);else if(f<256&&Re[f])o.result+=Ze[f],o.position++;else if((B=Se(f))>0){let D=B,T=0;for(;D>0;D--)f=o.input.charCodeAt(++o.position),(B=Oe(f))>=0?T=(T<<4)+B:A(o,"expected hexadecimal character");o.result+=Ce(T),o.position++}else A(o,"unknown escape sequence");G=K=o.position}else me(f)?(X(o,G,K,!0),ge(o,ye(o,!1,O)),G=K=o.position):o.position===o.lineStart&&oe(o)?A(o,"unexpected end of the document within a double quoted scalar"):(o.position++,ce(f)||(K=o.position))}A(o,"unexpected end of the stream within a double quoted scalar")}function pt(o,O){let G=!0,K,B,f;const D=o.tag;let T;const q=o.anchor;let L,U,z,V;const ne=Object.create(null);let de,ve,Ee,xe=o.input.charCodeAt(o.position);if(xe===91)L=93,V=!1,T=[];else if(xe===123)L=125,V=!0,T={};else return!1;for(o.anchor!==null&&re(o,o.anchor,T),xe=o.input.charCodeAt(++o.position);xe!==0;){if(ye(o,!0,O),xe=o.input.charCodeAt(o.position),xe===L)return o.position++,o.tag=D,o.anchor=q,o.kind=V?"mapping":"sequence",o.result=T,!0;if(G?xe===44&&A(o,"expected the node content, but found ','"):A(o,"missed comma between flow collection entries"),ve=de=Ee=null,U=z=!1,xe===63){const _t=o.input.charCodeAt(o.position+1);he(_t)&&(U=z=!0,o.position++,ye(o,!0,O))}K=o.line,B=o.lineStart,f=o.position,dt(o,O,m,!1,!0),ve=o.tag,de=o.result,ye(o,!0,O),xe=o.input.charCodeAt(o.position),(z||o.line===K)&&xe===58&&(U=!0,xe=o.input.charCodeAt(++o.position),ye(o,!0,O),dt(o,O,m,!1,!0),Ee=o.result),V?ke(o,T,ne,ve,de,Ee,K,B,f):U?T.push(ke(o,null,ne,ve,de,Ee,K,B,f)):T.push(de),ye(o,!0,O),xe=o.input.charCodeAt(o.position),xe===44?(G=!0,xe=o.input.charCodeAt(++o.position)):G=!1}A(o,"unexpected end of the stream within a flow collection")}function Je(o,O){let G,K=v,B=!1,f=!1,D=O,T=0,q=!1,L,U=o.input.charCodeAt(o.position);if(U===124)G=!1;else if(U===62)G=!0;else return!1;for(o.kind="scalar",o.result="";U!==0;)if(U=o.input.charCodeAt(++o.position),U===43||U===45)v===K?K=U===43?g:w:A(o,"repeat of a chomping mode identifier");else if((L=J(U))>=0)L===0?A(o,"bad explicit indentation width of a block scalar; it cannot be less than one"):f?A(o,"repeat of an indentation width identifier"):(D=O+L-1,f=!0);else break;if(ce(U)){do U=o.input.charCodeAt(++o.position);while(ce(U));if(U===35)do U=o.input.charCodeAt(++o.position);while(!me(U)&&U!==0)}for(;U!==0;){for(Te(o),o.lineIndent=0,U=o.input.charCodeAt(o.position);(!f||o.lineIndent<D)&&U===32;)o.lineIndent++,U=o.input.charCodeAt(++o.position);if(!f&&o.lineIndent>D&&(D=o.lineIndent),me(U)){T++;continue}if(!f&&D===0&&A(o,"missing indentation for block scalar"),o.lineIndent<D){K===g?o.result+=l.repeat(`
`,B?1+T:T):K===v&&B&&(o.result+=`
`);break}G?ce(U)?(q=!0,o.result+=l.repeat(`
`,B?1+T:T)):q?(q=!1,o.result+=l.repeat(`
`,T+1)):T===0?B&&(o.result+=" "):o.result+=l.repeat(`
`,T):o.result+=l.repeat(`
`,B?1+T:T),B=!0,f=!0,T=0;const z=o.position;for(;!me(U)&&U!==0;)U=o.input.charCodeAt(++o.position);X(o,z,o.position,!1)}return!0}function Be(o,O){const G=o.tag,K=o.anchor,B=[];let f=!1;if(o.firstTabInLine!==-1)return!1;o.anchor!==null&&re(o,o.anchor,B);let D=o.input.charCodeAt(o.position);for(;D!==0&&(o.firstTabInLine!==-1&&(o.position=o.firstTabInLine,A(o,"tab characters must not be used in indentation")),D===45);){const T=o.input.charCodeAt(o.position+1);if(!he(T))break;if(f=!0,o.position++,ye(o,!0,-1)&&o.lineIndent<=O){B.push(null),D=o.input.charCodeAt(o.position);continue}const q=o.line;if(dt(o,O,b,!1,!0),B.push(o.result),ye(o,!0,-1),D=o.input.charCodeAt(o.position),(o.line===q||o.lineIndent>O)&&D!==0)A(o,"bad indentation of a sequence entry");else if(o.lineIndent<O)break}return f?(o.tag=G,o.anchor=K,o.kind="sequence",o.result=B,!0):!1}function wt(o,O,G){let K,B,f,D;const T=o.tag,q=o.anchor,L={},U=Object.create(null);let z=null,V=null,ne=null,de=!1,ve=!1;if(o.firstTabInLine!==-1)return!1;o.anchor!==null&&re(o,o.anchor,L);let Ee=o.input.charCodeAt(o.position);for(;Ee!==0;){!de&&o.firstTabInLine!==-1&&(o.position=o.firstTabInLine,A(o,"tab characters must not be used in indentation"));const xe=o.input.charCodeAt(o.position+1),_t=o.line;if((Ee===63||Ee===58)&&he(xe))Ee===63?(de&&(ke(o,L,U,z,V,null,B,f,D),z=V=ne=null),ve=!0,de=!0,K=!0):de?(de=!1,K=!0):A(o,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),o.position+=1,Ee=xe;else{if(B=o.line,f=o.lineStart,D=o.position,!dt(o,G,p,!1,!0))break;if(o.line===_t){for(Ee=o.input.charCodeAt(o.position);ce(Ee);)Ee=o.input.charCodeAt(++o.position);if(Ee===58)Ee=o.input.charCodeAt(++o.position),he(Ee)||A(o,"a whitespace character is expected after the key-value separator within a block mapping"),de&&(ke(o,L,U,z,V,null,B,f,D),z=V=ne=null),ve=!0,de=!1,K=!1,z=o.tag,V=o.result;else if(ve)A(o,"can not read an implicit mapping pair; a colon is missed");else return o.tag=T,o.anchor=q,!0}else if(ve)A(o,"can not read a block mapping entry; a multiline key may not be an implicit key");else return o.tag=T,o.anchor=q,!0}if((o.line===_t||o.lineIndent>O)&&(de&&(B=o.line,f=o.lineStart,D=o.position),dt(o,O,S,!0,K)&&(de?V=o.result:ne=o.result),de||(ke(o,L,U,z,V,ne,B,f,D),z=V=ne=null),ye(o,!0,-1),Ee=o.input.charCodeAt(o.position)),(o.line===_t||o.lineIndent>O)&&Ee!==0)A(o,"bad indentation of a mapping entry");else if(o.lineIndent<O)break}return de&&ke(o,L,U,z,V,null,B,f,D),ve&&(o.tag=T,o.anchor=q,o.kind="mapping",o.result=L),ve}function It(o){let O=!1,G=!1,K,B,f=o.input.charCodeAt(o.position);if(f!==33)return!1;o.tag!==null&&A(o,"duplication of a tag property"),f=o.input.charCodeAt(++o.position),f===60?(O=!0,f=o.input.charCodeAt(++o.position)):f===33?(G=!0,K="!!",f=o.input.charCodeAt(++o.position)):K="!";let D=o.position;if(O){do f=o.input.charCodeAt(++o.position);while(f!==0&&f!==62);o.position<o.length?(B=o.input.slice(D,o.position),f=o.input.charCodeAt(++o.position)):A(o,"unexpected end of the stream within a verbatim tag")}else{for(;f!==0&&!he(f);)f===33&&(G?A(o,"tag suffix cannot contain exclamation marks"):(K=o.input.slice(D-1,o.position+1),$.test(K)||A(o,"named tag handle cannot contain such characters"),G=!0,D=o.position+1)),f=o.input.charCodeAt(++o.position);B=o.input.slice(D,o.position),F.test(B)&&A(o,"tag suffix cannot contain flow indicator characters")}B&&!P.test(B)&&A(o,"tag name cannot contain such characters: "+B);try{B=decodeURIComponent(B)}catch{A(o,"tag name is malformed: "+B)}return O?o.tag=B:d.call(o.tagMap,K)?o.tag=o.tagMap[K]+B:K==="!"?o.tag="!"+B:K==="!!"?o.tag="tag:yaml.org,2002:"+B:A(o,'undeclared tag handle "'+K+'"'),!0}function vt(o){let O=o.input.charCodeAt(o.position);if(O!==38)return!1;o.anchor!==null&&A(o,"duplication of an anchor property"),O=o.input.charCodeAt(++o.position);const G=o.position;for(;O!==0&&!he(O)&&!Ae(O);)O=o.input.charCodeAt(++o.position);return o.position===G&&A(o,"name of an anchor node must contain at least one character"),o.anchor=o.input.slice(G,o.position),!0}function Mn(o){let O=o.input.charCodeAt(o.position);if(O!==42)return!1;O=o.input.charCodeAt(++o.position);const G=o.position;for(;O!==0&&!he(O)&&!Ae(O);)O=o.input.charCodeAt(++o.position);o.position===G&&A(o,"name of an alias node must contain at least one character");const K=o.input.slice(G,o.position);return d.call(o.anchorMap,K)||A(o,'unidentified alias "'+K+'"'),o.result=o.anchorMap[K],ye(o,!0,-1),!0}function Ft(o,O,G,K){const B=Ke(o);return He(o),qe(o,O),o.tag=null,o.anchor=null,o.kind=null,o.result=null,wt(o,G,K)&&o.kind==="mapping"?(le(o),!0):(et(o),qe(o,B),!1)}function dt(o,O,G,K,B){let f,D,T=1,q=!1,L=!1,U=null,z,V,ne;o.depth>=o.maxDepth&&A(o,"nesting exceeded maxDepth ("+o.maxDepth+")"),o.depth+=1,o.listener!==null&&o.listener("open",o),o.tag=null,o.anchor=null,o.kind=null,o.result=null;const de=f=D=S===G||b===G;if(K&&ye(o,!0,-1)&&(q=!0,o.lineIndent>O?T=1:o.lineIndent===O?T=0:o.lineIndent<O&&(T=-1)),T===1)for(;;){const ve=o.input.charCodeAt(o.position),Ee=Ke(o);if(q&&(ve===33&&o.tag!==null||ve===38&&o.anchor!==null)||!It(o)&&!vt(o))break;U===null&&(U=Ee),ye(o,!0,-1)?(q=!0,D=de,o.lineIndent>O?T=1:o.lineIndent===O?T=0:o.lineIndent<O&&(T=-1)):D=!1}if(D&&(D=q||B),T===1||S===G)if(m===G||p===G?V=O:V=O+1,ne=o.position-o.lineStart,T===1)if(D&&(Be(o,ne)||wt(o,ne,V))||pt(o,V))L=!0;else{const ve=o.input.charCodeAt(o.position);U!==null&&de&&!D&&ve!==124&&ve!==62&&Ft(o,U,U.position-U.lineStart,V)||f&&Je(o,V)||Pt(o,V)||Xt(o,V)?L=!0:Mn(o)?(L=!0,(o.tag!==null||o.anchor!==null)&&A(o,"alias node should not have any properties")):Et(o,V,m===G)&&(L=!0,o.tag===null&&(o.tag="?")),o.anchor!==null&&re(o,o.anchor,o.result)}else T===0&&(L=D&&Be(o,ne));if(o.tag===null)o.anchor!==null&&re(o,o.anchor,o.result);else if(o.tag==="?"){o.result!==null&&o.kind!=="scalar"&&A(o,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+o.kind+'"');for(let ve=0,Ee=o.implicitTypes.length;ve<Ee;ve+=1)if(z=o.implicitTypes[ve],z.resolve(o.result)){o.result=z.construct(o.result),o.tag=z.tag,o.anchor!==null&&re(o,o.anchor,o.result);break}}else if(o.tag!=="!"){if(d.call(o.typeMap[o.kind||"fallback"],o.tag))z=o.typeMap[o.kind||"fallback"][o.tag];else{z=null;const ve=o.typeMap.multi[o.kind||"fallback"];for(let Ee=0,xe=ve.length;Ee<xe;Ee+=1)if(o.tag.slice(0,ve[Ee].tag.length)===ve[Ee].tag){z=ve[Ee];break}}z||A(o,"unknown tag !<"+o.tag+">"),o.result!==null&&z.kind!==o.kind&&A(o,"unacceptable node kind for !<"+o.tag+'> tag; it should be "'+z.kind+'", not "'+o.kind+'"'),z.resolve(o.result,o.tag)?(o.result=z.construct(o.result,o.tag),o.anchor!==null&&re(o,o.anchor,o.result)):A(o,"cannot resolve a node with !<"+o.tag+"> explicit tag")}return o.listener!==null&&o.listener("close",o),o.depth-=1,o.tag!==null||o.anchor!==null||L}function zt(o){const O=o.position;let G=!1,K;for(o.version=null,o.checkLineBreaks=o.legacy,o.tagMap=Object.create(null),o.anchorMap=Object.create(null);(K=o.input.charCodeAt(o.position))!==0&&(ye(o,!0,-1),K=o.input.charCodeAt(o.position),!(o.lineIndent>0||K!==37));){G=!0,K=o.input.charCodeAt(++o.position);let B=o.position;for(;K!==0&&!he(K);)K=o.input.charCodeAt(++o.position);const f=o.input.slice(B,o.position),D=[];for(f.length<1&&A(o,"directive name must not be less than one character in length");K!==0;){for(;ce(K);)K=o.input.charCodeAt(++o.position);if(K===35){do K=o.input.charCodeAt(++o.position);while(K!==0&&!me(K));break}if(me(K))break;for(B=o.position;K!==0&&!he(K);)K=o.input.charCodeAt(++o.position);D.push(o.input.slice(B,o.position))}K!==0&&Te(o),d.call(I,f)?I[f](o,f,D):ee(o,'unknown document directive "'+f+'"')}if(ye(o,!0,-1),o.lineIndent===0&&o.input.charCodeAt(o.position)===45&&o.input.charCodeAt(o.position+1)===45&&o.input.charCodeAt(o.position+2)===45?(o.position+=3,ye(o,!0,-1)):G&&A(o,"directives end mark is expected"),dt(o,o.lineIndent-1,S,!1,!0),ye(o,!0,-1),o.checkLineBreaks&&R.test(o.input.slice(O,o.position))&&ee(o,"non-ASCII line breaks are interpreted as content"),o.documents.push(o.result),o.position===o.lineStart&&oe(o)){o.input.charCodeAt(o.position)===46&&(o.position+=3,ye(o,!0,-1));return}o.position<o.length-1&&A(o,"end of the stream or a document separator is expected")}function Qt(o,O){o=String(o),O=O||{},o.length!==0&&(o.charCodeAt(o.length-1)!==10&&o.charCodeAt(o.length-1)!==13&&(o+=`
`),o.charCodeAt(0)===65279&&(o=o.slice(1)));const G=new Xe(o,O),K=o.indexOf("\0");for(K!==-1&&(G.position=K,A(G,"null byte is not allowed in input")),G.input+="\0";G.input.charCodeAt(G.position)===32;)G.lineIndent+=1,G.position+=1;for(;G.position<G.length-1;)zt(G);return G.documents}function Ln(o,O,G){O!==null&&typeof O=="object"&&typeof G>"u"&&(G=O,O=null);const K=Qt(o,G);if(typeof O!="function")return K;for(let B=0,f=K.length;B<f;B+=1)O(K[B])}function At(o,O){const G=Qt(o,O);if(G.length!==0){if(G.length===1)return G[0];throw new s("expected a single document in the stream, but found more")}}return Il.loadAll=Ln,Il.load=At,Il}var zh={},ng;function d0(){if(ng)return zh;ng=1;const l=Wr(),s=$r(),c=Zh(),u=Object.prototype.toString,d=Object.prototype.hasOwnProperty,m=65279,p=9,b=10,S=13,v=32,w=33,g=34,k=35,R=37,F=38,$=39,P=42,be=44,me=45,ce=58,he=61,Ae=62,Oe=63,Se=64,J=91,Me=93,Ce=96,we=123,Re=124,Ze=125,Xe={};Xe[0]="\\0",Xe[7]="\\a",Xe[8]="\\b",Xe[9]="\\t",Xe[10]="\\n",Xe[11]="\\v",Xe[12]="\\f",Xe[13]="\\r",Xe[27]="\\e",Xe[34]='\\"',Xe[92]="\\\\",Xe[133]="\\N",Xe[160]="\\_",Xe[8232]="\\L",Xe[8233]="\\P";const ae=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],A=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function ee(f,D){if(D===null)return{};const T={},q=Object.keys(D);for(let L=0,U=q.length;L<U;L+=1){let z=q[L],V=String(D[z]);z.slice(0,2)==="!!"&&(z="tag:yaml.org,2002:"+z.slice(2));const ne=f.compiledTypeMap.fallback[z];ne&&d.call(ne.styleAliases,V)&&(V=ne.styleAliases[V]),T[z]=V}return T}function re(f){let D,T;const q=f.toString(16).toUpperCase();if(f<=255)D="x",T=2;else if(f<=65535)D="u",T=4;else if(f<=4294967295)D="U",T=8;else throw new s("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+D+l.repeat("0",T-q.length)+q}const He=1,le=2;function et(f){this.schema=f.schema||c,this.indent=Math.max(1,f.indent||2),this.noArrayIndent=f.noArrayIndent||!1,this.skipInvalid=f.skipInvalid||!1,this.flowLevel=l.isNothing(f.flowLevel)?-1:f.flowLevel,this.styleMap=ee(this.schema,f.styles||null),this.sortKeys=f.sortKeys||!1,this.lineWidth=f.lineWidth||80,this.noRefs=f.noRefs||!1,this.noCompatMode=f.noCompatMode||!1,this.condenseFlow=f.condenseFlow||!1,this.quotingType=f.quotingType==='"'?le:He,this.forceQuotes=f.forceQuotes||!1,this.replacer=typeof f.replacer=="function"?f.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ke(f,D){const T=l.repeat(" ",D);let q=0,L="";const U=f.length;for(;q<U;){let z;const V=f.indexOf(`
`,q);V===-1?(z=f.slice(q),q=U):(z=f.slice(q,V+1),q=V+1),z.length&&z!==`
`&&(L+=T),L+=z}return L}function qe(f,D){return`
`+l.repeat(" ",f.indent*D)}function I(f,D){for(let T=0,q=f.implicitTypes.length;T<q;T+=1)if(f.implicitTypes[T].resolve(D))return!0;return!1}function X(f){return f===v||f===p}function se(f){return f>=32&&f<=126||f>=161&&f<=55295&&f!==8232&&f!==8233||f>=57344&&f<=65533&&f!==m||f>=65536&&f<=1114111}function W(f){return se(f)&&f!==m&&f!==S&&f!==b}function ke(f,D,T){const q=W(f),L=q&&!X(f);return(T?q:q&&f!==be&&f!==J&&f!==Me&&f!==we&&f!==Ze)&&f!==k&&!(D===ce&&!L)||W(D)&&!X(D)&&f===k||D===ce&&L}function Te(f){return se(f)&&f!==m&&!X(f)&&f!==me&&f!==Oe&&f!==ce&&f!==be&&f!==J&&f!==Me&&f!==we&&f!==Ze&&f!==k&&f!==F&&f!==P&&f!==w&&f!==Re&&f!==he&&f!==Ae&&f!==$&&f!==g&&f!==R&&f!==Se&&f!==Ce}function ye(f){return!X(f)&&f!==ce}function oe(f,D){const T=f.charCodeAt(D);let q;return T>=55296&&T<=56319&&D+1<f.length&&(q=f.charCodeAt(D+1),q>=56320&&q<=57343)?(T-55296)*1024+q-56320+65536:T}function ge(f){return/^\n* /.test(f)}const Et=1,Pt=2,Xt=3,pt=4,Je=5;function Be(f,D,T,q,L,U,z,V){let ne,de=0,ve=null,Ee=!1,xe=!1;const _t=q!==-1;let en=-1,st=Te(oe(f,0))&&ye(oe(f,f.length-1));if(D||z)for(ne=0;ne<f.length;de>=65536?ne+=2:ne++){if(de=oe(f,ne),!se(de))return Je;st=st&&ke(de,ve,V),ve=de}else{for(ne=0;ne<f.length;de>=65536?ne+=2:ne++){if(de=oe(f,ne),de===b)Ee=!0,_t&&(xe=xe||ne-en-1>q&&f[en+1]!==" ",en=ne);else if(!se(de))return Je;st=st&&ke(de,ve,V),ve=de}xe=xe||_t&&ne-en-1>q&&f[en+1]!==" "}return!Ee&&!xe?st&&!z&&!L(f)?Et:U===le?Je:Pt:T>9&&ge(f)?Je:z?U===le?Je:Pt:xe?pt:Xt}function wt(f,D,T,q,L){f.dump=(function(){if(D.length===0)return f.quotingType===le?'""':"''";if(!f.noCompatMode&&(ae.indexOf(D)!==-1||A.test(D)))return f.quotingType===le?'"'+D+'"':"'"+D+"'";const U=f.indent*Math.max(1,T),z=f.lineWidth===-1?-1:Math.max(Math.min(f.lineWidth,40),f.lineWidth-U),V=q||f.flowLevel>-1&&T>=f.flowLevel;function ne(de){return I(f,de)}switch(Be(D,V,f.indent,z,ne,f.quotingType,f.forceQuotes&&!q,L)){case Et:return D;case Pt:return"'"+D.replace(/'/g,"''")+"'";case Xt:return"|"+It(D,f.indent)+vt(Ke(D,U));case pt:return">"+It(D,f.indent)+vt(Ke(Mn(D,z),U));case Je:return'"'+dt(D)+'"';default:throw new s("impossible error: invalid scalar style")}})()}function It(f,D){const T=ge(f)?String(D):"",q=f[f.length-1]===`
`,U=q&&(f[f.length-2]===`
`||f===`
`)?"+":q?"":"-";return T+U+`
`}function vt(f){return f[f.length-1]===`
`?f.slice(0,-1):f}function Mn(f,D){const T=/(\n+)([^\n]*)/g;let q=(function(){let V=f.indexOf(`
`);return V=V!==-1?V:f.length,T.lastIndex=V,Ft(f.slice(0,V),D)})(),L=f[0]===`
`||f[0]===" ",U,z;for(;z=T.exec(f);){const V=z[1],ne=z[2];U=ne[0]===" ",q+=V+(!L&&!U&&ne!==""?`
`:"")+Ft(ne,D),L=U}return q}function Ft(f,D){if(f===""||f[0]===" ")return f;const T=/ [^ ]/g;let q,L=0,U,z=0,V=0,ne="";for(;q=T.exec(f);)V=q.index,V-L>D&&(U=z>L?z:V,ne+=`
`+f.slice(L,U),L=U+1),z=V;return ne+=`
`,f.length-L>D&&z>L?ne+=f.slice(L,z)+`
`+f.slice(z+1):ne+=f.slice(L),ne.slice(1)}function dt(f){let D="",T=0;for(let q=0;q<f.length;T>=65536?q+=2:q++){T=oe(f,q);const L=Xe[T];!L&&se(T)?(D+=f[q],T>=65536&&(D+=f[q+1])):D+=L||re(T)}return D}function zt(f,D,T){let q="";const L=f.tag;for(let U=0,z=T.length;U<z;U+=1){let V=T[U];f.replacer&&(V=f.replacer.call(T,String(U),V)),(O(f,D,V,!1,!1)||typeof V>"u"&&O(f,D,null,!1,!1))&&(q!==""&&(q+=","+(f.condenseFlow?"":" ")),q+=f.dump)}f.tag=L,f.dump="["+q+"]"}function Qt(f,D,T,q){let L="";const U=f.tag;for(let z=0,V=T.length;z<V;z+=1){let ne=T[z];f.replacer&&(ne=f.replacer.call(T,String(z),ne)),(O(f,D+1,ne,!0,!0,!1,!0)||typeof ne>"u"&&O(f,D+1,null,!0,!0,!1,!0))&&((!q||L!=="")&&(L+=qe(f,D)),f.dump&&b===f.dump.charCodeAt(0)?L+="-":L+="- ",L+=f.dump)}f.tag=U,f.dump=L||"[]"}function Ln(f,D,T){let q="";const L=f.tag,U=Object.keys(T);for(let z=0,V=U.length;z<V;z+=1){let ne="";q!==""&&(ne+=", "),f.condenseFlow&&(ne+='"');const de=U[z];let ve=T[de];f.replacer&&(ve=f.replacer.call(T,de,ve)),O(f,D,de,!1,!1)&&(f.dump.length>1024&&(ne+="? "),ne+=f.dump+(f.condenseFlow?'"':"")+":"+(f.condenseFlow?"":" "),O(f,D,ve,!1,!1)&&(ne+=f.dump,q+=ne))}f.tag=L,f.dump="{"+q+"}"}function At(f,D,T,q){let L="";const U=f.tag,z=Object.keys(T);if(f.sortKeys===!0)z.sort();else if(typeof f.sortKeys=="function")z.sort(f.sortKeys);else if(f.sortKeys)throw new s("sortKeys must be a boolean or a function");for(let V=0,ne=z.length;V<ne;V+=1){let de="";(!q||L!=="")&&(de+=qe(f,D));const ve=z[V];let Ee=T[ve];if(f.replacer&&(Ee=f.replacer.call(T,ve,Ee)),!O(f,D+1,ve,!0,!0,!0))continue;const xe=f.tag!==null&&f.tag!=="?"||f.dump&&f.dump.length>1024;xe&&(f.dump&&b===f.dump.charCodeAt(0)?de+="?":de+="? "),de+=f.dump,xe&&(de+=qe(f,D)),O(f,D+1,Ee,!0,xe)&&(f.dump&&b===f.dump.charCodeAt(0)?de+=":":de+=": ",de+=f.dump,L+=de)}f.tag=U,f.dump=L||"{}"}function o(f,D,T){const q=T?f.explicitTypes:f.implicitTypes;for(let L=0,U=q.length;L<U;L+=1){const z=q[L];if((z.instanceOf||z.predicate)&&(!z.instanceOf||typeof D=="object"&&D instanceof z.instanceOf)&&(!z.predicate||z.predicate(D))){if(T?z.multi&&z.representName?f.tag=z.representName(D):f.tag=z.tag:f.tag="?",z.represent){const V=f.styleMap[z.tag]||z.defaultStyle;let ne;if(u.call(z.represent)==="[object Function]")ne=z.represent(D,V);else if(d.call(z.represent,V))ne=z.represent[V](D,V);else throw new s("!<"+z.tag+'> tag resolver accepts not "'+V+'" style');f.dump=ne}return!0}}return!1}function O(f,D,T,q,L,U,z){f.tag=null,f.dump=T,o(f,T,!1)||o(f,T,!0);const V=u.call(f.dump),ne=q;q&&(q=f.flowLevel<0||f.flowLevel>D);const de=V==="[object Object]"||V==="[object Array]";let ve,Ee;if(de&&(ve=f.duplicates.indexOf(T),Ee=ve!==-1),(f.tag!==null&&f.tag!=="?"||Ee||f.indent!==2&&D>0)&&(L=!1),Ee&&f.usedDuplicates[ve])f.dump="*ref_"+ve;else{if(de&&Ee&&!f.usedDuplicates[ve]&&(f.usedDuplicates[ve]=!0),V==="[object Object]")q&&Object.keys(f.dump).length!==0?(At(f,D,f.dump,L),Ee&&(f.dump="&ref_"+ve+f.dump)):(Ln(f,D,f.dump),Ee&&(f.dump="&ref_"+ve+" "+f.dump));else if(V==="[object Array]")q&&f.dump.length!==0?(f.noArrayIndent&&!z&&D>0?Qt(f,D-1,f.dump,L):Qt(f,D,f.dump,L),Ee&&(f.dump="&ref_"+ve+f.dump)):(zt(f,D,f.dump),Ee&&(f.dump="&ref_"+ve+" "+f.dump));else if(V==="[object String]")f.tag!=="?"&&wt(f,f.dump,D,U,ne);else{if(V==="[object Undefined]")return!1;if(f.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+V)}if(f.tag!==null&&f.tag!=="?"){let xe=encodeURI(f.tag[0]==="!"?f.tag.slice(1):f.tag).replace(/!/g,"%21");f.tag[0]==="!"?xe="!"+xe:xe.slice(0,18)==="tag:yaml.org,2002:"?xe="!!"+xe.slice(18):xe="!<"+xe+">",f.dump=xe+" "+f.dump}}return!0}function G(f,D){const T=[],q=[];K(f,T,q);const L=q.length;for(let U=0;U<L;U+=1)D.duplicates.push(T[q[U]]);D.usedDuplicates=new Array(L)}function K(f,D,T){if(f!==null&&typeof f=="object"){const q=D.indexOf(f);if(q!==-1)T.indexOf(q)===-1&&T.push(q);else if(D.push(f),Array.isArray(f))for(let L=0,U=f.length;L<U;L+=1)K(f[L],D,T);else{const L=Object.keys(f);for(let U=0,z=L.length;U<z;U+=1)K(f[L[U]],D,T)}}}function B(f,D){D=D||{};const T=new et(D);T.noRefs||G(f,T);let q=f;return T.replacer&&(q=T.replacer.call({"":q},"",q)),O(T,0,q,!0,!0)?T.dump+`
`:""}return zh.dump=B,zh}var ig;function f0(){if(ig)return jt;ig=1;const l=c0(),s=d0();function c(u,d){return function(){throw new Error("Function yaml."+u+" is removed in js-yaml 4. Use yaml."+d+" instead, which is now safe by default.")}}return jt.Type=Gt(),jt.Schema=yg(),jt.FAILSAFE_SCHEMA=vg(),jt.JSON_SCHEMA=Tg(),jt.CORE_SCHEMA=Eg(),jt.DEFAULT_SCHEMA=Zh(),jt.load=l.load,jt.loadAll=l.loadAll,jt.dump=s.dump,jt.YAMLException=$r(),jt.types={binary:Mg(),float:xg(),map:wg(),null:bg(),pairs:Ng(),set:Cg(),timestamp:Ig(),bool:kg(),int:Sg(),merge:Ag(),omap:Og(),seq:pg(),str:gg()},jt.safeLoad=c("safeLoad","load"),jt.safeLoadAll=c("safeLoadAll","loadAll"),jt.safeDump=c("safeDump","dump"),jt}var m0=f0();const Rg=u0(m0),{Type:W1,Schema:$1,FAILSAFE_SCHEMA:P1,JSON_SCHEMA:eb,CORE_SCHEMA:tb,DEFAULT_SCHEMA:nb,load:ib,loadAll:ab,dump:rb,YAMLException:ob,types:lb,safeLoad:sb,safeLoadAll:ub,safeDump:hb}=Rg,y0=`# 第一幕 · 出发前\r
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
`,g0=`# 第三幕 · 桌游店\r
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
`,p0=`# 第四幕 · 结缘——由 script/ch4.yaml 迁移而来\r
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
`,w0=`# 第五幕 · 熟悉期 —— 由 docs/剧本审稿/第五幕-上线定稿.yaml自动生成
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
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
        delivery: type
        节拍:
          pauseBeforeMs: 1800
      - from: ai
        text: 她发出了自己愿意试试的答复，也收到了对方的回应。她比发之前放松了，可以顺着这个开心的小插曲收尾，暂时不用讨论更远的事。
        delivery: thought
    choices:
      - thought: 顺着她发出去后的轻松
        reply: 三个感叹号，看来他刚才也没少等。你已经把最难开口的话发出去了，今天可以先开心一会儿。
`,v0=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.\r
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
`,b0=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.\r
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
`,k0=`# Generated by tools/build-chapter-08.mjs from the reviewed Mermaid.\r
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
`,ta={incoming:2.15,reply:2.75,thought:1.7,indicator:1.6,after:.85,sameTime:.95,timeJump:.45},Kr={极快:{pauseBeforeMs:0,indicatorMs:280,typeIntervalMs:40,afterMs:220},快:{pauseBeforeMs:100,indicatorMs:600,typeIntervalMs:65,afterMs:450},正常:{pauseBeforeMs:240,indicatorMs:1e3,typeIntervalMs:100,afterMs:900},慢:{pauseBeforeMs:850,indicatorMs:1500,typeIntervalMs:145,afterMs:1400},长停顿:{pauseBeforeMs:1700,indicatorMs:2100,typeIntervalMs:165,afterMs:2100}},Hg="正常",Dg={pauseBeforeMs:0,indicatorMs:0,typeIntervalMs:0,afterMs:0};function S0(l,s,c=Math.random){return!l||!s||l.section!==s.section?0:s.time&&l.time!==s.time?2200:800+Math.round(c()*400)}function x0(l,s){return l==="type"&&!s}function _g(l){if(typeof l=="string")return Kr[l]?null:`未知节拍预设「${l}」，可用：${Object.keys(Kr).join(" / ")}`;if(!l||typeof l!="object"||Array.isArray(l))return"节拍必须是预设名或数值对象";const s=["pauseBeforeMs","indicatorMs","typeIntervalMs","afterMs"];for(const[c,u]of Object.entries(l)){if(!s.includes(c))return`节拍里有未知字段「${c}」`;if(typeof u!="number"||!Number.isFinite(u)||u<0||u>2e4)return`节拍.${c} 必须是 0~20000 之间的毫秒数`}return null}function Ml(l,s=!1){if(s)return{...Dg};let c={...Kr[Hg]};for(const u of l)if(u!==void 0)if(typeof u=="string"){const d=Kr[u];d&&(c={...d})}else c={...c,...u};return c}const Yg=["桌游聚会","加微信后","约见与表白","交往第一天","第一次争执","周日见面","纪念日改约","楼下的争执","争执之后"],T0=5,ag=new Set(["3.4.1","4.1.1","6m.M5"]);function jg(l,s,c){var g,k,R;const{channel:u}=s;if(!s.context||s.control)return l;const d=l.messages.filter(F=>F.channel===u);if(!d.length)return l;const m=new Map(c.map(F=>[F.id,F]));let p=1,b=s.context.time,S=d.length;const v=ag.has(s.id);for(let F=d.length-1;F>=0;F--){const $=m.get(d[F].beatId);if(((g=$==null?void 0:$.context)==null?void 0:g.section)!==s.context.section||v&&$.id!==s.id||((k=$.context)==null?void 0:k.time)!==b&&++p>T0)break;if(ag.has($.id)&&$.id!==s.id&&F>0&&d[F-1].beatId!==$.id){S=F;break}b=(R=$.context)==null?void 0:R.time,S=F}if(!S)return l;const w=new Set(d.slice(0,S));return{...l,messages:l.messages.filter(F=>!w.has(F))}}function Ol(l){return typeof l=="number"&&Number.isInteger(l)&&l>=1&&l<=Yg.length}function E0(l){var m;const{id:s,chapter:c,time:u,channel:d}=l;switch(c){case 1:return{section:1,time:"聚会当天 · 出发前"};case 3:return{section:1,time:d==="left"?"到店前后":s.startsWith("3.4.1")||s==="3.4.2"?"在路上":"到店后 · 局间"};case 4:return{section:1,time:"散场后"};case 5:if(/^5[fm]\.3\.2$/.test(s))return{section:3,time:"周五 · 改期"};if(/^5[fm]\.3\.[34]$/.test(s))return{section:3,time:"周日晚 · 见面后"};if(/^5[fm]\.4\./.test(s))return{section:3,time:"见面两天后"};if(/^5[fm]\.3\./.test(s))return{section:3,time:"加微信后第 12 天 · 晚上"};{const p=(m=u==null?void 0:u.match(/^D(2|3|9|10|11|12)\b/))==null?void 0:m[1];if(p)return{section:2,time:`加微信后第 ${p} 天`}}return{section:2,time:"加微信当天"};case 6:return{section:4,time:/^(6m\.(M5|MEMCHOICE|M7|END)|6f\.(F[678]|END))/.test(s)?"当晚":"交往第 1 天"};case 7:return u!=null&&u.includes("周日")?{section:6,time:/ 19:/.test(u)?"周日傍晚 · 见面后":"周日上午"}:u!=null&&u.includes("周六")?{section:5,time:"周六晚"}:{section:5,time:/ 22:/.test(u??"")?"聚餐结束后":"交往第 17 天 · 周五"};case 8:return/^8[fm]\.[FM]305G$/.test(s)?{section:9,time:"当晚 · 见面后"}:/^8[fm]\.[FM]3/.test(s)?{section:9,entryTime:u}:/^8[fm]\.[FM](10[5-7]|2|READY)/.test(s)?{section:8,entryTime:u,.../^8[fm]\.[FM]2/.test(s)?{time:d==="left"?"19:52":"20:12"}:{}}:{section:7,time:/^8[fm]\.[FM]10[34]$/.test(s)?"傍晚 · 改约":"一个月纪念日"};default:throw new Error(`未配置节拍 ${s} 的会话段`)}}const zg=1e6;function Qa(l){return l.sortKey!==void 0?l.sortKey:(l.chapter??0)*zg+(l.order??0)}function Dl(l,s){const c=Qa(l)-Qa(s);return c!==0?c:l.id.localeCompare(s.id,"zh-Hans-CN")}function I0(l){const s=new Map,c=l.beats.map(d=>{var v;const m=d.chapter??0,p=s.get(m)??0;s.set(m,p+1);const b=(v=l.axes)==null?void 0:v[m],S=d.timeRank??(d.time&&b?b.indexOf(d.time):void 0);return{...d,order:d.order??p,sortKey:m*zg+(d.order??p),...S!==void 0&&S>=0?{timeRank:S}:{}}}),u=[...c].sort(Dl);return{...l,beats:c,orderedBeats:u,beatById:new Map(c.map(d=>[d.id,d]))}}function _l(l,s){const c=l.window;return c?c.下界.length>0&&!c.下界.some(u=>s.has(u))?"waiting":c.上界.some(u=>s.has(u))?"closed":"open":"none"}function A0(l,s){var u,d;if(_l(l,s)!=="closed"||s.has(l.id))return null;const c=((u=l.window)==null?void 0:u.上界.filter(m=>s.has(m)))??[];return`区间越界：拍 ${l.id} 应在对侧 ${((d=l.window)==null?void 0:d.下界.join("/"))||"起点"} 与 ${c.join("/")} 之间播出，但 ${c.join("/")} 已完成`}const M0=["type","pop","image","thought"];function O0(l){var w,g;const s=[],c=l.beats.map(k=>k.id),u=new Set;l.beats.length===0&&s.push("剧本里没有任何节拍。");for(const k of c){if(!k.trim()){s.push("有节拍缺少 id。");continue}u.has(k)&&s.push(`节拍 id 重复：${k}`),u.add(k)}const d=new Map;for(const k of l.beats)d.has(k.id)||d.set(k.id,k);const m=new Set;for(const k of l.speakers)m.has(k.id)&&s.push(`人物 id 重复：${k.id}`),m.add(k.id),k.channel&&k.channel!=="left"&&k.channel!=="right"&&s.push(`人物 ${k.id} 的侧栏不是 left 或 right。`);const p=R0(l.beats);p&&s.unshift(`节拍依赖成环：${p.join(" → ")}。这会让玩家一直等下去，剧本不能开始。`);const b=new Set(l.beats.flatMap(k=>(k.记忆候选??[]).map(R=>R.缩略标签)));for(const k of l.beats)for(const R of k.choices??[]){for(const F of R.记忆后继??[])(!F.all.length||F.all.some($=>!l.beats.some(P=>{var be;return P.channel===k.channel&&((be=P.记忆候选)==null?void 0:be.some(me=>me.缩略标签===$))})))&&s.push(`节拍 ${k.id} 的记忆后继需要本窗有效候选。`),F.next||s.push(`节拍 ${k.id} 的记忆后继缺少目标。`),Bh(s,d,k,F.next,"记忆后继");R.next&&R.记忆后继&&s.push(`节拍 ${k.id} 的选项同时声明固定后继与记忆后继。`),R.需记忆&&!b.has(R.需记忆)&&s.push(`节拍 ${k.id} 的选项「${R.thought}」需要记忆「${R.需记忆}」，但没有任何节拍提供这条候选。`)}const S=new Map;for(const k of l.beats){if(k.order===void 0)continue;const R=`${k.chapter??0}:${k.order}`;S.has(R)?s.push(`节拍 ${S.get(R)} 与 ${k.id} 的章内序号重复（${R}），播出顺序会不确定。`):S.set(R,k.id)}const v=new Set((l.endings??[]).map(k=>k.id));for(const k of l.endings??[]){for(const R of k.requires)d.has(R)||s.push(`终局「${k.id}」要求的拍「${R}」不存在。`);k.requires.length===0&&s.push(`终局「${k.id}」没有写 requires，永远无法判定达成。`)}for(const k of l.beats){k.channel!=="left"&&k.channel!=="right"&&s.push(`节拍 ${k.id} 的 channel 必须是 left 或 right。`),k.lines.length===0&&!k.control&&s.push(`节拍 ${k.id} 没有任何台词。`),k.control&&(k.lines.length>0||(w=k.choices)!=null&&w.length)&&s.push(`控制拍 ${k.id} 不能含台词或玩家选项。`),k.choices&&k.choices.length>0&&k.next&&s.push(`节拍 ${k.id} 已经有选项，就不能再写节拍上的 next。`),qh(s,k.节拍,`节拍 ${k.id} 的 节拍`);for(const R of k.lines)qh(s,R.节拍,`节拍 ${k.id} 的台词 节拍`);for(const R of k.choices??[])qh(s,R.节拍,`节拍 ${k.id} 的选项 节拍`);for(const R of k.requires??[])d.has(R)||s.push(`节拍 ${k.id} 的 requires「${R}」不存在。`);if(k.when)for(const[R,F]of Object.entries(k.when))R.trim()||s.push(`节拍 ${k.id} 的 when 有一个空旗标名。`),rg(F)||s.push(`节拍 ${k.id} 的 when.${R} 只能是文字、数字或是否。`);N0(s,k,l),C0(s,k,d);for(const R of k.lines){R.text.trim()||s.push(`节拍 ${k.id} 有一句空台词。`),M0.includes(R.delivery)||s.push(`节拍 ${k.id} 的呈现方式无法识别：${String(R.delivery)}`);const F=l.speakers.find($=>$.id===R.from);F?F.channel&&F.channel!==k.channel&&s.push(`节拍 ${k.id} 在${$a(k.channel)}，却写了${F.name}的台词。`):s.push(`节拍 ${k.id} 的说话人「${R.from}」不在人物表里。`)}for(const R of k.choices??[]){if(R.thought.trim()||s.push(`节拍 ${k.id} 有一个空的想法。`),R.reply.trim()||s.push(`节拍 ${k.id} 有一个选项没有写死回复。`),R.set)for(const[F,$]of Object.entries(R.set))rg($)||s.push(`节拍 ${k.id} 的旗标 ${F} 只能是文字、数字或是否。`);Bh(s,d,k,R.next,"选项")}for(const R of k.记忆候选??[]){if(!R.短句.trim()){s.push(`节拍 ${k.id} 的记忆候选「${R.缩略标签}」缺少短句。`);continue}[...k.lines.map($=>$.text),...(k.choices??[]).map($=>$.reply)].join(`
`).includes(R.短句)||s.push(`节拍 ${k.id} 的记忆候选「${R.缩略标签}」的短句没有出现在本拍的台词或回复里，玩家存不进这条记忆。`)}k.ending!==void 0&&!v.has(k.ending)&&s.push(`节拍 ${k.id} 声明终局「${k.ending}」，但剧本没有在 endings 里声明它。`),(g=k.choices)!=null&&g.length||Bh(s,d,k,k.next,"next")}return s.length>0?{ok:!1,error:s.join(`
`)}:{ok:!0}}function qh(l,s,c){if(s===void 0)return;const u=_g(s);u&&l.push(`${c}：${u}`)}function N0(l,s,c){var m;if(s.time===void 0)return;const u=(m=c.axes)==null?void 0:m[s.chapter??0];if(!u){l.push(`节拍 ${s.id} 写了 time「${s.time}」，但第 ${s.chapter??0} 章没有顶层 时间轴。`);return}const d=u.indexOf(s.time);d<0?l.push(`节拍 ${s.id} 的 time「${s.time}」不在第 ${s.chapter??0} 章的时间轴里（必须一字不差）。`):s.timeRank!==void 0&&s.timeRank!==d&&l.push(`节拍 ${s.id} 的 timeRank=${s.timeRank} 与时间轴下标 ${d} 不一致。`)}function C0(l,s,c){const u=s.window;if(!u)return;u.上界.length===0&&u.下界.length===0&&l.push(`节拍 ${s.id} 的区间门没有上下界。`);const d=s.channel==="left"?"right":"left";u.channel!==d&&l.push(`节拍 ${s.id} 在${$a(s.channel)}，区间门却度量了同侧（${u.channel}）。`);for(const[m,p]of[["下界",u.下界],["上界",u.上界]])for(const b of p){const S=c.get(b);if(!S){l.push(`节拍 ${s.id} 的区间${m}「${b}」不存在。`);continue}S.channel!==u.channel&&l.push(`节拍 ${s.id} 的区间${m}「${b}」不在被度量的对侧 ${u.channel}。`),m==="下界"&&Qa(S)>=Qa(s)&&l.push(`节拍 ${s.id} 的区间下界「${b}」不早于本拍，区间永远无法成立。`),m==="上界"&&Qa(S)<=Qa(s)&&l.push(`节拍 ${s.id} 的区间上界「${b}」不晚于本拍，区间会被提前关闭。`)}}function Bh(l,s,c,u,d){if(!u)return;const m=s.get(u);if(!m){l.push(`节拍 ${c.id} 的${d}指向不存在的「${u}」。`);return}m.channel!==c.channel&&l.push(`节拍 ${c.id} 在${$a(c.channel)}，${d}却指向另一侧的「${u}」。`)}function rg(l){return typeof l=="string"||typeof l=="number"||typeof l=="boolean"}function $a(l){return l==="left"?"左侧":"右侧"}function R0(l){const s=new Map(l.map(m=>[m.id,m])),c=new Map,u=[],d=m=>{var p;c.set(m,1),u.push(m);for(const b of((p=s.get(m))==null?void 0:p.requires)??[]){if(!s.has(b))continue;const S=c.get(b)??0;if(S===1){const v=u.indexOf(b);return[...u.slice(v),b]}if(S===0){const v=d(b);if(v)return v}}return u.pop(),c.set(m,2),null};for(const m of l)if((c.get(m.id)??0)===0){const p=d(m.id);if(p)return p}return null}const H0=[y0,g0,p0,w0,v0,b0,k0],D0=["title","chapter","speakers","beats","时间轴","默认节拍","endings"],_0=["id","name","channel"],Y0=["id","channel","requires","when","aside","lines","choices","next","记忆候选","清空记忆","chapter","order","sortKey","time","timeRank","label","window","ending","节拍","control"],j0=["from","text","delivery","caption","节拍","timing"],z0=["thought","reply","set","next","需记忆","记忆后继","节拍","timing"],q0=["缩略标签","短句","类型","线"],B0=["channel","下界","上界","说明"],U0=["id","title","requires","set"];function L0(){try{const l=G0(H0.map(c=>X0(c))),s=O0(l);return s.ok?{script:l,error:null}:{script:null,error:s.error}}catch(l){return{script:null,error:l instanceof Error?l.message:"剧本无法解析"}}}function G0(l){var d,m,p;const s=l.flatMap((b,S)=>{var w,g;const v=((g=(w=b.chapters)==null?void 0:w[0])==null?void 0:g.index)??S+1;return b.beats.map(k=>{const R={...k,chapter:k.chapter??v};return{...R,context:E0(R)}})}),c={};for(const b of l)for(const[S,v]of Object.entries(b.axes??{}))c[Number(S)]=v;const u={title:((d=l[0])==null?void 0:d.title)??"",speakers:((m=l[0])==null?void 0:m.speakers)??[],beats:s,chapters:l.map((b,S)=>{var v,w;return{index:((w=(v=b.chapters)==null?void 0:v[0])==null?void 0:w.index)??S+1,title:b.title}}),axes:c,endings:l.flatMap(b=>b.endings??[]),默认节拍:(p=l.find(b=>b.默认节拍))==null?void 0:p.默认节拍};return I0(u)}function X0(l){const s=Rg.load(l);if(!Un(s))throw new Error("剧本不是一个对象");ai(s,D0,"剧本顶层");const c=ot(s.title,"剧本缺少标题"),u=Bg(s.chapter),d=F0(s.speakers),m=s.时间轴===void 0?void 0:qg(s.时间轴,"时间轴"),p=s.默认节拍===void 0?void 0:Yl(s.默认节拍,"剧本默认节拍"),b=typeof p=="string"?p:void 0,S=s.endings===void 0?void 0:J0(s.endings),v=Q0(s.beats,b).map(w=>u===void 0?w:{...w,chapter:u});return{title:c,speakers:d,beats:v,chapters:u===void 0?void 0:[{index:u,title:c}],axes:u!==void 0&&m?{[u]:m}:void 0,endings:S,默认节拍:typeof p=="string"?p:void 0}}function ai(l,s,c){const u=Object.keys(l).filter(d=>!s.includes(d));if(u.length>0)throw new Error(`${c} 有引擎不认识的字段：${u.join("、")}。若剧本新增了结构，先扩 src/engine 的字段契约，不要让它被静默丢弃。`)}function F0(l){if(!Array.isArray(l)||l.length===0)throw new Error("剧本缺少人物表");return l.map((s,c)=>{if(!Un(s))throw new Error(`第 ${c+1} 个人物无法读取`);ai(s,_0,`第 ${c+1} 个人物`);const u=ot(s.id,`第 ${c+1} 个人物缺少 id`),d=ot(s.name,`人物 ${u} 缺少名字`),m=s.channel===void 0?void 0:Vh(s.channel,u);return{id:u,name:d,channel:m}})}function Q0(l,s){if(!Array.isArray(l))throw new Error("剧本缺少 beats");return l.map((c,u)=>{if(!Un(c))throw new Error(`第 ${u+1} 个节拍无法读取`);const d=ot(c.id,`第 ${u+1} 个节拍缺少 id`);ai(c,Y0,`节拍 ${d}`);const m=Vh(c.channel,d);if(c.control!==void 0&&typeof c.control!="boolean")throw new Error(`节拍 ${d} 的 control 必须为布尔值`);const p=c.节拍===void 0?void 0:Yl(c.节拍,`节拍 ${d} 的 节拍`),b=[s,p],S=W0(c.lines,d,b),v=c.choices===void 0?void 0:$0(c.choices,d,b),w=c.requires===void 0?void 0:Nl(c.requires,d,"requires"),g=c.when===void 0?void 0:Kh(c.when,d),k=c.aside===void 0?void 0:ot(c.aside,`节拍 ${d} 的自言自语无法读取`),R=c.next===void 0?void 0:ot(c.next,`节拍 ${d} 的 next 无法读取`),F=c.记忆候选===void 0?void 0:Z0(c.记忆候选,d),$=c.清空记忆===void 0?void 0:K0(c.清空记忆,d),P=c.order===void 0?void 0:Uh(c.order,`节拍 ${d} 的 order`),be=c.time===void 0?void 0:ot(c.time,`节拍 ${d} 的 time 无法读取`),me=c.timeRank===void 0?void 0:Uh(c.timeRank,`节拍 ${d} 的 timeRank`),ce=c.label===void 0?void 0:ot(c.label,`节拍 ${d} 的 label 无法读取`),he=c.window===void 0?void 0:V0(c.window,d),Ae=c.ending===void 0?void 0:ot(c.ending,`节拍 ${d} 的 ending 无法读取`),Oe=c.sortKey===void 0?void 0:Uh(c.sortKey,`节拍 ${d} 的 sortKey`),Se=c.chapter===void 0?void 0:Bg(c.chapter);return{id:d,channel:m,control:c.control,lines:S,choices:v,requires:w,when:g,aside:k,next:R,记忆候选:F,清空记忆:$,order:P,time:be,timeRank:me,label:ce,window:he,ending:Ae,sortKey:Oe,chapter:Se,...p!==void 0?{节拍:p}:{}}})}function Z0(l,s){if(!Array.isArray(l))throw new Error(`节拍 ${s} 的记忆候选无法读取`);return l.map((c,u)=>{if(!Un(c))throw new Error(`节拍 ${s} 的第 ${u+1} 条记忆候选无法读取`);return ai(c,q0,`节拍 ${s} 的第 ${u+1} 条记忆候选`),{缩略标签:ot(c.缩略标签,`节拍 ${s} 的第 ${u+1} 条记忆候选缺少缩略标签`),短句:ot(c.短句,`节拍 ${s} 的第 ${u+1} 条记忆候选缺少短句`),类型:c.类型===void 0?void 0:ot(c.类型,`节拍 ${s} 的记忆候选类型无法读取`),线:c.线===void 0?void 0:ot(c.线,`节拍 ${s} 的记忆候选线无法读取`)}})}function K0(l,s){if(l==="all"||l==="left"||l==="right")return l;throw new Error(`节拍 ${s} 的清空记忆只能是 all、left 或 right`)}function V0(l,s){if(!Un(l))throw new Error(`节拍 ${s} 的 window 无法读取`);ai(l,B0,`节拍 ${s} 的 window`);const c=Vh(l.channel,`节拍 ${s} 的 window`),u=l.下界===void 0?[]:Nl(l.下界,s,"window.下界"),d=Nl(l.上界,s,"window.上界"),m=l.说明===void 0?void 0:ot(l.说明,`节拍 ${s} 的 window.说明 无法读取`);return{channel:c,下界:u,上界:d,...m?{说明:m}:{}}}function J0(l){if(!Array.isArray(l))throw new Error("endings 必须是列表");return l.map((s,c)=>{if(!Un(s))throw new Error(`第 ${c+1} 个 endings 无法读取`);ai(s,U0,`第 ${c+1} 个 endings`);const u=ot(s.id,`第 ${c+1} 个 endings 缺少 id`);return{id:u,title:ot(s.title,`终局 ${u} 缺少 title`),requires:Nl(s.requires,u,"终局 requires"),set:s.set===void 0?void 0:Kh(s.set,u)}})}function W0(l,s,c){if(!Array.isArray(l))throw new Error(`节拍 ${s} 缺少台词`);return l.map((u,d)=>{if(!Un(u))throw new Error(`节拍 ${s} 的第 ${d+1} 句无法读取`);ai(u,j0,`节拍 ${s} 的第 ${d+1} 句`);const m=ot(u.from,`节拍 ${s} 的第 ${d+1} 句缺少说话人`),p=ot(u.text,`节拍 ${s} 的第 ${d+1} 句缺少文字`),b=e1(u.delivery,s),S=u.caption===void 0?void 0:ot(u.caption,`节拍 ${s} 的图说无法读取`),v=u.节拍===void 0?void 0:Yl(u.节拍,`节拍 ${s} 的第 ${d+1} 句 节拍`);return{from:m,text:p,delivery:b,...S!==void 0?{caption:S}:{},...v!==void 0?{节拍:v}:{},timing:Ml([...c,v])}})}function $0(l,s,c){if(!Array.isArray(l))throw new Error(`节拍 ${s} 的选项无法读取`);return l.map((u,d)=>{if(!Un(u))throw new Error(`节拍 ${s} 的第 ${d+1} 个选项无法读取`);ai(u,z0,`节拍 ${s} 的第 ${d+1} 个选项`);const m=ot(u.thought,`节拍 ${s} 的第 ${d+1} 个想法是空的`),p=ot(u.reply,`节拍 ${s} 的第 ${d+1} 个回复是空的`),b=u.next===void 0?void 0:ot(u.next,`节拍 ${s} 的选项 next 无法读取`),S=u.set===void 0?void 0:Kh(u.set,s),v=u.需记忆===void 0?void 0:ot(u.需记忆,`节拍 ${s} 的需记忆无法读取`),w=u.节拍===void 0?void 0:Yl(u.节拍,`节拍 ${s} 的第 ${d+1} 个选项 节拍`),g=u.记忆后继===void 0?void 0:P0(u.记忆后继,s);return{thought:m,reply:p,...g!==void 0?{记忆后继:g}:{},...b!==void 0?{next:b}:{},...S!==void 0?{set:S}:{},...v!==void 0?{需记忆:v}:{},...w!==void 0?{节拍:w}:{},timing:Ml([...c,w])}})}function P0(l,s){if(!Array.isArray(l)||!l.length)throw new Error(`节拍 ${s} 缺少记忆后继`);return l.map(c=>{if(!Un(c))throw new Error(`节拍 ${s} 的记忆后继无法读取`);return ai(c,["all","next"],`节拍 ${s} 的记忆后继`),{all:qg(c.all,`节拍 ${s} 的记忆后继条件`),next:ot(c.next,`节拍 ${s} 缺少记忆后继目标`)}})}function Yl(l,s){const c=_g(l);if(c)throw new Error(`${s}：${c}`);return l}function Kh(l,s){if(!Un(l))throw new Error(`节拍 ${s} 的旗标无法读取`);const c={};for(const[u,d]of Object.entries(l)){if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean")throw new Error(`节拍 ${s} 的旗标 ${u} 只能是文字、数字或是否`);c[u]=d}return c}function Nl(l,s,c){if(!Array.isArray(l)||l.some(u=>typeof u!="string"))throw new Error(`节拍 ${s} 的 ${c} 必须是 id 列表`);return l}function qg(l,s){if(!Array.isArray(l)||l.some(c=>typeof c!="string"))throw new Error(`${s} 必须是文字列表`);return l}function Vh(l,s){if(l!=="left"&&l!=="right")throw new Error(`${s} 的 channel 必须是 left 或 right`);return l}function e1(l,s){if(l!=="type"&&l!=="pop"&&l!=="image"&&l!=="thought")throw new Error(`节拍 ${s} 的呈现方式必须是 type、pop、image 或 thought`);return l}function Uh(l,s){if(typeof l!="number"||!Number.isInteger(l)||l<0)throw new Error(`${s} 必须是非负整数`);return l}function Bg(l){if(l!==void 0){if(typeof l!="number"||!Number.isInteger(l)||l<1)throw new Error("chapter 必须是从 1 开始的整数");return l}}function ot(l,s){if(typeof l!="string")throw new Error(s);return l.trim()}function Un(l){return typeof l=="object"&&l!==null&&!Array.isArray(l)}const Ug=["left","right"];function Xh(l,s,c){var v,w,g;const u=((v=l.archive)==null?void 0:v[s])??[],d=(w=l.context)==null?void 0:w[s],m=l.chapter[s];if(u.some(k=>d===void 0?k.chapter===m:k.section===d))return l;const p=l.messages.filter(k=>k.channel===s&&k.delivery!=="thought").map(k=>k.beatId),b=d===void 0?[...new Set(p)]:Lg(c,s,[...l.completed,...p]).filter(k=>{var R;return((R=k.context)==null?void 0:R.section)===d}).map(k=>k.id);if(b.length===0)return l;const S={chapter:((g=c.find(k=>k.id===b[0]))==null?void 0:g.chapter)??m,beatIds:b,...d===void 0?{}:{section:d}};return{...l,archive:{left:[],right:[],...l.archive,[s]:[...u,S]}}}function Lg(l,s,c){const u=new Map(l.map(d=>[d.id,d]));return[...new Set(c)].flatMap(d=>{const m=u.get(d);return(m==null?void 0:m.channel)===s&&!m.control?[m]:[]})}function t1(l,s,c){var v,w,g,k,R;if(l.context!==void 0||!s.some(F=>F.context))return l;const u={},d={...l.ritual},m={left:((v=l.archive)==null?void 0:v.left)??[],right:((w=l.archive)==null?void 0:w.right)??[]},p=l.endings.some(F=>["未交换微信","分手","和好"].includes(F));for(const F of Ug){const $=Lg(s,F,[...m[F].flatMap(ce=>ce.beatIds),...l.completed,...l.messages.filter(ce=>ce.channel===F).map(ce=>ce.beatId),...l.pending[F]?[l.pending[F].beatId]:[]]);let P=$.reduce((ce,he)=>{var Oe;const Ae=(Oe=he.context)==null?void 0:Oe.section;return Ae!==void 0&&(ce===void 0||Ae>ce)?Ae:ce},void 0),be=d[F];if(be&&be.contextTo===void 0){const ce=(k=(g=c(F))==null?void 0:g.context)==null?void 0:k.section;ce===void 0||ce===P||P===void 0?be=null:(be={...be,contextTo:ce},be.phase==="pause"&&(P=ce))}P!==void 0&&(u[F]=P),d[F]=be;const me=new Map;for(const ce of $){const he=(R=ce.context)==null?void 0:R.section;if(he===void 0||P===void 0||he>P||he===P&&!p&&(be==null?void 0:be.phase)!=="mask")continue;const Ae=me.get(he)??{chapter:ce.chapter??1,section:he,beatIds:[]};Ae.beatIds.push(ce.id),me.set(he,Ae)}m[F]=[...me.values()].sort((ce,he)=>ce.section-he.section)}const b=new Map(s.map(F=>[F.id,F])),S=l.messages.filter(F=>{var P,be;const $=(be=(P=b.get(F.beatId))==null?void 0:P.context)==null?void 0:be.section;return $===void 0||$===u[F.channel]});return{...l,archive:m,context:u,ritual:d,messages:S}}function n1(l,s){const c={left:[],right:[]};if(!l||typeof l!="object")return c;const u=new Map(s.map(d=>[d.id,d]));for(const d of Ug){const m=l[d];if(Array.isArray(m))for(const p of m){if(!p||!Number.isInteger(p.chapter)||!Array.isArray(p.beatIds))continue;const b=Ol(p.section)?p.section:void 0;if(c[d].some(v=>b===void 0?v.section===void 0&&v.chapter===p.chapter:v.section===b))continue;const S=p.beatIds.filter(v=>{var g;if(typeof v!="string")return!1;const w=u.get(v);return(w==null?void 0:w.channel)===d&&(b===void 0?(w.chapter??1)===p.chapter:((g=w.context)==null?void 0:g.section)===b)});S.length>0&&c[d].push({chapter:p.chapter,beatIds:[...new Set(S)],...b===void 0?{}:{section:b}})}}return c}const Vr=2200,i1=2e3;function Jh(l,s){return!s.some(c=>{var u;return c.next===l.id||((u=c.choices)==null?void 0:u.some(d=>{var m;return d.next===l.id||((m=d.记忆后继)==null?void 0:m.some(p=>p.next===l.id))}))})}function og(l,s){const c=l.filter(u=>u.channel===s).map(u=>u.chapter??0).filter(u=>u>0);return c.length>0?Math.min(...c):1}function Gg(l){return{completed:[],flags:{},activated:l.filter(s=>Jh(s,l)).map(s=>s.id),messages:[],pending:{left:null,right:null},memories:{left:[],right:[]},chapter:{left:og(l,"left"),right:og(l,"right")},ritual:{left:null,right:null},archive:{left:[],right:[]},endings:[],error:null,runId:0}}function Cl(l,s){var u,d,m;if(l.chapter[s]<5)return 1;const c=s==="left"?"5m.1.1-":"5f.1.1-";return(u=l.pending[s])!=null&&u.beatId.startsWith(c)||((d=l.ritual[s])==null?void 0:d.contextTo)===2&&((m=l.ritual[s])==null?void 0:m.phase)==="pause"?1:5}function a1(l,s,c,u){const d=l.memories[s];if(c.label.trim()===""||d.some(b=>b.label===c.label)||d.length>=Cl(l,s)&&!u||u&&!d.some(b=>b.label===u))return l;const p=d.filter(b=>b.label!==u);return p.length>=Cl(l,s)?l:{...l,memories:{...l.memories,[s]:[...p,c]}}}function r1(l,s,c){const u=l.memories[s],d=u.filter(m=>m.label!==c);return d.length===u.length?l:{...l,memories:{...l.memories,[s]:d}}}function Xg(l,s,c){return l.memories[s].some(u=>u.label===c)}function Fg(l,s,c){var u;return(u=c.记忆后继)==null?void 0:u.find(d=>d.all.every(m=>Xg(l,s,m)))}function Wh(l,s,c){return c.需记忆&&!Xg(l,s,c.需记忆)?c.需记忆:c.记忆后继&&!Fg(l,s,c)?"相关旧记忆":null}function Qg(l,s,c){var v;if((v=l.ritual)!=null&&v[s]||l.pending[s])return!1;const u=Ja(l,s,c);if(!u)return!1;const d=s==="left"?"right":"left",m=l.pending[d],p=m?c.find(w=>w.id===m.beatId):l.ritual[d]&&u.chapter===l.chapter[s]?Ja(l,d,c):null,b=(p==null?void 0:p.chapter)===u.chapter&&u.timeRank!==void 0&&(p==null?void 0:p.timeRank)===u.timeRank;if(p&&(u.chapter??0)>=5&&!b&&Dl(p,u)<0)return!1;const S=new Set(l.completed);return!c.some(w=>{var g;return w.channel===d&&((g=w.window)==null?void 0:g.上界.includes(u.id))&&l.activated.includes(w.id)&&!S.has(w.id)})}function o1(l,s){var u;const c=[];for(const d of["left","right"]){if((u=l.ritual)!=null&&u[d]||l.pending[d]||!Qg(l,d,s))continue;const m=Ja(l,d,s);m&&c.push({channel:d,beat:m})}return c.length===0?null:(c.sort((d,m)=>Dl(d.beat,m.beat)),{type:"arm",channel:c[0].channel})}function Zg(l,s){return l.messages.some(c=>c.channel===s)?{...l,messages:l.messages.filter(c=>c.channel!==s)}:l}function l1(l,s,c){var d;const u=(d=l.ritual)==null?void 0:d[s];if(!u||c<u.until)return l;if(u.phase==="mask"){const m=Zg(l,s);return{...m,chapter:{...m.chapter,[s]:u.to},...u.contextTo===void 0?{}:{context:{...m.context,[s]:u.contextTo}},ritual:{...m.ritual,[s]:{...u,phase:"pause",until:c+i1}}}}return{...l,ritual:{...l.ritual,[s]:null}}}function s1(l,s){const c=new Set(l.completed);for(const u of s)if(!c.has(u.id)&&l.activated.includes(u.id)&&_l(u,c)==="closed")return A0(u,c);return null}function u1(l,s){const c=new Set([...l.activated,...l.completed]),u=s.filter(d=>!c.has(d.id)&&(Jh(d,s)||h1(d,l,s))).map(d=>d.id);return u.length===0?l:{...l,activated:[...l.activated,...u]}}function h1(l,s,c){return c.some(u=>u.next===l.id&&s.completed.includes(u.id))}function c1(l,s){return l.messages.filter(c=>c.channel===s)}function Ja(l,s,c){const u=new Set(l.completed);let d=null;for(const m of c){if(m.channel!==s||u.has(m.id)||!l.activated.includes(m.id)||Kg(m,l.flags)!=="ok"||(m.requires??[]).some(b=>!u.has(b)))continue;const p=_l(m,u);p==="waiting"||p==="closed"||(!d||Dl(m,d)<0)&&(d=m)}return d}function d1(l,s,c){var v;const u=Ja(l,s,c),d=[],m=new Set(l.completed);for(const w of c){if(w.channel!==s||m.has(w.id)||!l.activated.includes(w.id))continue;const g=Kg(w,l.flags);if(g==="no")continue;const k=(w.requires??[]).filter(F=>!m.has(F)),R=_l(w,m);if(g==="wait"||R==="waiting"){d.push({id:w.id,unmet:k.length>0?k:Object.keys(w.when??{})});continue}if(R==="closed"){d.push({id:w.id,unmet:[`区间已关闭：${((v=w.window)==null?void 0:v.上界.join("/"))??""}`]});continue}k.length>0&&d.push({id:w.id,unmet:k})}const p=c.some(w=>w.channel===s),b=l.endings.find(w=>c.some(g=>g.ending===w&&g.channel===s&&m.has(g.id)))??null;return{mode:p?u?"available":d.length>0?"gated":"ended":"empty",availableId:(u==null?void 0:u.id)??null,locked:d,endingId:b}}function f1(l,s){const c=new Map;for(const d of s)d.ending&&c.set(d.ending,[...c.get(d.ending)??[],d.id]);const u=new Set(l.completed);return[...c.entries()].filter(([,d])=>d.length>0&&d.every(m=>u.has(m))).map(([d])=>d)}function Rl(l){return l.endings.find(s=>s==="未交换微信"||s==="和好"||s==="分手")}function m1(l,s,c,u=Date.now()){var v,w;if(!Qg(l,s,c))return l;const d=Ja(l,s,c);if(!d)return l;const m=d.chapter??l.chapter[s],p=(v=d.context)==null?void 0:v.section,b=(w=l.context)==null?void 0:w[s];return(p===void 0?m!==l.chapter[s]:!d.control&&b!==void 0&&b!==p)?{...Xh(l,s,c),ritual:{...l.ritual,[s]:{from:l.chapter[s],to:m,...p===void 0?{}:{contextTo:p},phase:"mask",until:u+Vr,startedAt:u}}}:(m!==l.chapter[s]&&(l={...l,chapter:{...l.chapter,[s]:m}}),!d.control&&p!==void 0&&p!==b&&(l={...l,context:{...l.context,[s]:p}}),l=jg(l,d,c),d.lines.length===0&&d.choices&&d.choices.length>0?Jr(l,s,{kind:"choices",beatId:d.id}):d.control?$h(l,s,d,l.messages,void 0,d.next,c):Jr(l,s,{kind:"lines",beatId:d.id,lineIndex:0}))}function y1(l,s,c){const u=l.pending[s];if(!u||u.kind!=="lines")throw new Error(`${$a(s)}没有正在播出的台词`);const d=Ph(c,u.beatId),m=d.lines[u.lineIndex];if(!m)throw new Error(`节拍 ${d.id} 没有第 ${u.lineIndex+1} 句`);const p=[...l.messages,{id:`${d.id}:${u.lineIndex}`,channel:s,beatId:d.id,from:m.from,text:m.text,delivery:m.delivery,caption:m.caption,timing:m.timing}],b=u.lineIndex+1;return b<d.lines.length?{...Jr(l,s,{kind:"lines",beatId:d.id,lineIndex:b}),messages:p}:d.choices&&d.choices.length>0?{...Jr(l,s,{kind:"choices",beatId:d.id}),messages:p}:$h(l,s,d,p,void 0,d.next,c)}function g1(l,s,c,u){var v,w;const d=l.pending[s];if(!d||d.kind!=="choices")throw new Error(`${$a(s)}还不能选：这一侧的话还没说完`);const m=Ph(u,d.beatId),p=(v=m.choices)==null?void 0:v[c];if(!p)throw new Error(`节拍 ${m.id} 没有第 ${c+1} 个选项`);const b=Wh(l,s,p);if(b)throw new Error(`节拍 ${m.id} 的选项「${p.thought}」需要记忆「${b}」，本窗还没存`);const S=(w=Fg(l,s,p))==null?void 0:w.next;return Jr(l,s,{kind:"reply",beatId:m.id,choiceIndex:c,...S?{memoryNext:S}:{}})}function p1(l,s,c){var b;const u=l.pending[s];if(!u||u.kind!=="reply")throw new Error(`${$a(s)}没有待发出的回复`);const d=Ph(c,u.beatId),m=(b=d.choices)==null?void 0:b[u.choiceIndex];if(!m)throw new Error(`节拍 ${d.id} 没有第 ${u.choiceIndex+1} 个选项`);const p=[...l.messages,{id:`${d.id}:reply:${u.choiceIndex}`,channel:s,beatId:d.id,from:"ai",text:m.reply,delivery:"type",timing:m.timing}];return $h(l,s,d,p,m.set,u.memoryNext??m.next,c)}function $h(l,s,c,u,d,m,p){if(l.completed.includes(c.id))return l;const b={...l.flags};if(d)for(const[F,$]of Object.entries(d))b[F]=$;const S=w1(l.memories,c.清空记忆),v=m&&!l.activated.includes(m)?[...l.activated,m]:l.activated,w=[...l.completed,c.id],g={...l,messages:u,flags:b,memories:S,activated:v,completed:w,pending:{...l.pending,[s]:null}},k=f1(g,p),R={...g,endings:k};return!Rl(R)||Rl(l)?R:Xh(Xh(R,"left",p),"right",p)}function w1(l,s){return s?s==="all"?{left:[],right:[]}:{...l,[s]:[]}:l}function Jr(l,s,c){return{...l,pending:{...l.pending,[s]:c}}}function Kg(l,s){if(!l.when)return"ok";for(const[c,u]of Object.entries(l.when)){if(!(c in s))return"wait";if(s[c]!==u)return"no"}return"ok"}function Ph(l,s){const c=l.find(u=>u.id===s);if(!c)throw new Error(`找不到节拍 ${s}`);return c}function Vg(l,s){return l.startedAt!==void 0?Math.max(0,s-l.startedAt):l.phase==="pause"?Vr:Math.max(0,Vr-(l.until-s))}function ec(){const[l,s]=ie.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return ie.useEffect(()=>{const c=window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>s(c.matches);return c.addEventListener("change",u),()=>c.removeEventListener("change",u)},[]),l}function v1(l){const[s,c]=ie.useState(()=>Date.now());return ie.useEffect(()=>{if(!l)return;c(Date.now());const u=window.setInterval(()=>c(Date.now()),48);return()=>window.clearInterval(u)},[l]),s}const lg=["/","|","\\","-"];function sg(){const l=ec(),[s,c]=ie.useState(0);return ie.useEffect(()=>{if(l)return;const u=window.setInterval(()=>c(d=>(d+1)%lg.length),115);return()=>window.clearInterval(u)},[l]),Y.jsx("span",{className:"terminal-spinner","aria-hidden":"true",children:l?"-":lg[s]})}function Jg(l,s,c,u,d){const[m,p]=ie.useState(()=>s?Math.min(1,l.length):l.length),b=ie.useRef(!1),S=ie.useRef(u),v=ie.useRef(d);return S.current=u,v.current=d,ie.useEffect(()=>{var g;if(!s)return;if(m>=l.length){b.current||(b.current=!0,(g=S.current)==null||g.call(S));return}const w=window.setTimeout(()=>{var k;p(R=>R+1),(k=v.current)==null||k.call(v)},Math.max(0,c));return()=>window.clearTimeout(w)},[m,l,s,c]),s?l.slice(0,m):l}function b1({text:l,interval:s,onFinished:c}){const u=Jg(l,!0,s,c);return Y.jsxs(Y.Fragment,{children:[u,u.length<l.length?Y.jsx("span",{className:"caret","aria-hidden":"true"}):null]})}const Wa={left:{id:"01",name:"男生",gender:"男",age:21,work:"在校大学生",city:"西安"},right:{id:"02",name:"女生",gender:"女",age:22,work:"大学生 · 项目组实习",city:"西安"}};function k1({mode:l,choices:s,selected:c,onMove:u,onPick:d,memoryGate:m}){const{t:p}=An();return Y.jsx("div",{className:"choice-list","data-testid":"composer","data-mode":l,children:l==="active"?Y.jsx("div",{role:"group","aria-label":p("选一个想法","Choose a thought"),children:s.map((b,S)=>{const v=m(b),w=v!==null,g=!w&&c===S;return Y.jsxs("button",{type:"button","data-testid":"choice","data-index":S,"data-gated":w||void 0,disabled:w,title:w?p(`需要记忆：${v}`,`Requires memory: ${s0(v)}`):void 0,onMouseEnter:()=>u(S),onFocus:()=>u(S),onClick:()=>d(S),className:"choice-line","data-current":g||void 0,children:[Y.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:g?">":""}),Y.jsxs("span",{children:[b.需记忆||b.记忆后继?Y.jsx("span",{className:"memory-tag","data-testid":"memory-tag",children:"[MEM] "}):null,b.thought]})]},S)})}):null})}function ug({from:l,text:s,delivery:c,caption:u,animate:d=!1,typeIntervalMs:m=100,marks:p,onSaveMark:b,onFinished:S,onProgress:v,onSkip:w}){const{t:g}=An(),k=d&&c==="type",R=l==="ai",F=Jg(s,k,m,S,v);if(c==="thought")return null;const $=P=>{if(!p||p.length===0)return P;const be=p.map(he=>({mark:he,at:P.indexOf(he.text)})).filter(he=>he.at>=0).sort((he,Ae)=>he.at-Ae.at);if(be.length===0)return P;const me=[];let ce=0;for(const{mark:he,at:Ae}of be)Ae<ce||(Ae>ce&&me.push(P.slice(ce,Ae)),me.push(he.saved?Y.jsxs("span",{"data-testid":"memory-mark","data-saved":"true",className:"memory-mark-saved",children:[he.text,Y.jsxs("span",{className:"memory-tag",children:[" [MEM] ",g("已存","Saved")]})]},`${Ae}-${he.text}`):Y.jsxs("button",{type:"button","data-testid":"memory-mark","data-saved":"false",className:"memory-mark",disabled:!b,"aria-label":g(`存记忆：${he.text}`,`Save memory: ${he.text}`),onClick:()=>b==null?void 0:b(he.text),children:[he.text," [+]"]},`${Ae}-${he.text}`)),ce=Ae+he.text.length);return ce<P.length&&me.push(P.slice(ce)),me};return c==="image"?Y.jsxs("div",{className:`msg-row ${R?"right":"left"}`,"data-from":l,"data-delivery":c,children:[Y.jsx("span",{className:"msg-direction","aria-hidden":"true",children:R?"OUT<":"IN>"}),Y.jsxs("figure",{className:"msg-image",children:[Y.jsx("img",{src:s,alt:u??g("图片","Image")}),u?Y.jsx("figcaption",{children:u}):null]})]}):Y.jsxs("div",{className:`msg-row ${R?"right":"left"}`,"data-from":l,"data-delivery":c,children:[Y.jsx("span",{className:"msg-direction","aria-hidden":"true",children:R?"OUT<":"IN>"}),Y.jsxs("div",{className:R?"msg-ai":"msg-user","data-testid":"bubble-text",onClick:k?w:void 0,title:k?g("点击跳过","Click to skip"):void 0,children:[R?Y.jsx("span",{className:"msg-ink",children:$(F)}):$(F),k&&F.length<s.length?Y.jsx("span",{className:"caret","aria-hidden":"true"}):null]})]})}function S1({script:l,channel:s,state:c,dispatch:u,active:d,focused:m,selected:p,skipRefs:b,onMove:S,onPick:v,now:w,reduced:g,running:k,speeds:R,onMemoryFull:F}){const{language:$,t:P}=An(),{name:be,id:me}=Wa[s],ce=P(be,s==="left"?"Him":"Her"),he=T=>$==="en"?l0(T):T.text,Ae=(T,q)=>{var L,U;return $==="en"?((U=(L=Va[T])==null?void 0:L.memories.find(z=>z.label===q.缩略标签))==null?void 0:U.quote[1])??q.短句:q.短句},Oe=c.pending[s],Se=c1(c,s),J=Se.filter(T=>T.delivery!=="thought"),Me=(Oe==null?void 0:Oe.kind)==="choices"?[...Se].reverse().find(T=>T.beatId===Oe.beatId&&T.delivery==="thought"):null,Ce=d1(c,s,l.beats),we=c.ritual[s],Re=we?Vg(we,w):0,Ze=we?we.phase==="pause"||g?J.length:Math.floor(J.length*Math.min(1,Re/Vr)):0,Xe=J.slice(Ze),ae=T=>{var q;return((q=l.beatById)==null?void 0:q.get(T))??l.beats.find(L=>L.id===T)},A=new Set(c.memories[s].map(T=>T.label)),ee=(T,q)=>{var U;return(((U=ae(T))==null?void 0:U.记忆候选)??[]).filter(z=>q.includes(z.短句)).map(z=>({text:Ae(T,z),saved:A.has(z.缩略标签)}))},re=c.memories[s].length,He=Cl(c,s),[le,et]=ie.useState(!1),Ke=ie.useRef(null),[qe,I]=ie.useState(),X=k?x1(l,c,s):null,se=X?he(X):"",W=X&&{...X,text:se,timing:{...X.timing,typeIntervalMs:X.timing.typeIntervalMs*X.text.length/Math.max(1,se.length)}},ke=(W==null?void 0:W.token)??"",Te=(qe==null?void 0:qe.token)===ke?qe.phase:"idle",ye=ie.useRef(R);ye.current=R;const oe=ie.useRef(()=>{}),ge=ie.useRef(c),Et=ie.useRef(null),Pt=ie.useRef([]),Xt=ie.useRef(0),pt=ie.useRef(void 0),Je=ie.useRef(null),Be=ie.useRef(null),wt=ie.useRef(new Map);ie.useLayoutEffect(()=>{var L;const T=Be.current;if(!T)return;if(!we||g){wt.current.clear();return}T.scrollTop=0;const q=new Map;for(const U of T.querySelectorAll("[data-clear-row]")){const z=U.dataset.clearRow,V=U.offsetTop,ne=wt.current.get(z);q.set(z,V),ne!==void 0&&ne!==V&&((L=U.animate)==null||L.call(U,[{transform:`translateY(${ne-V}px)`},{transform:"translateY(0)"}],{duration:135,easing:"ease-out"}))}wt.current=q},[we,Ze,g]),ge.current=c;const It=ie.useCallback(()=>{for(const T of Pt.current)window.clearTimeout(T);Pt.current=[]},[]),vt=ie.useCallback((T,q)=>{if(q<=0){T();return}Pt.current.push(window.setTimeout(T,q))},[]),Mn=ie.useCallback(()=>{It();const T=ge.current.pending[s];if(!T||T.kind==="choices")return;const q=`${ge.current.runId}|${T.beatId}:${T.kind}:${"lineIndex"in T?T.lineIndex:"choiceIndex"in T?T.choiceIndex:0}`;Et.current!==q&&(Et.current=q,Je.current={runId:ge.current.runId,beatId:T.beatId,finishedAt:pt.current??performance.now()},u(T.kind==="lines"?{type:"commit-line",channel:s}:{type:"commit-reply",channel:s}))},[s,It,u]);oe.current=Mn;const Ft=ie.useCallback(()=>{var T;pt.current=performance.now(),vt(()=>oe.current(),Xt.current/(((T=ye.current)==null?void 0:T.after)??ta.after))},[vt]),dt=ie.useCallback(()=>oe.current(),[]);ie.useEffect(()=>{const T=b.current;return T[s]=dt,()=>{delete T[s]}},[s,dt,b]),ie.useEffect(()=>{var de,ve,Ee;It();const T=xe=>I({token:ke,phase:xe});if(!W)return T("idle"),It;const q=g?{...Dg}:W.timing,L=Je.current,U=ge.current,z=((de=U.pending[s])==null?void 0:de.kind)==="reply",V=ye.current;let ne=z?0:q.pauseBeforeMs;if(!g&&!z&&(L==null?void 0:L.runId)===U.runId){const xe=(ve=ae(L.beatId))==null?void 0:ve.context,_t=(Ee=ae(W.beatId))==null?void 0:Ee.context,en=_t!=null&&_t.time&&_t.time!==(xe==null?void 0:xe.time)?(V==null?void 0:V.timeJump)??ta.timeJump:(V==null?void 0:V.sameTime)??ta.sameTime,st=S0(xe,_t)/en;if(st>0){const On=q.pauseBeforeMs>Kr[Hg].pauseBeforeMs?q.pauseBeforeMs:0;ne=Math.max(On,st-(performance.now()-L.finishedAt))}}return pt.current=void 0,Xt.current=W.delivery==="thought"?0:q.afterMs,T("pause"),vt(()=>{var xe;T("indicator"),vt(()=>{!g&&W.delivery==="thought"||x0(W.delivery,g)?T("typing"):(T("shown"),Ft())},q.indicatorMs/(((xe=ye.current)==null?void 0:xe.indicator)??ta.indicator))},ne),It},[ke,s,It,Ft,vt,W==null?void 0:W.delivery,g]),ie.useEffect(()=>{const T=Be.current;T&&!we&&(T.scrollTop=T.scrollHeight)},[J.length,Te,ke,we]);const zt=Oe?ae(Oe.beatId):void 0,Qt=k&&(Oe==null?void 0:Oe.kind)==="choices"&&(zt==null?void 0:zt.choices)&&zt.choices.length>0,Ln=Qt?"active":(Oe==null?void 0:Oe.kind)==="lines"||(Oe==null?void 0:Oe.kind)==="reply"||Ce.mode==="gated"||we?"locked":"empty",At=(W==null?void 0:W.delivery)==="thought"?W:null;function o(T,q){var V,ne,de;const L=(V=ae(T))==null?void 0:V.context,U=q?(ne=ae(q))==null?void 0:ne.context:void 0;if(!L||T===q)return;const z=L.section!==(U==null?void 0:U.section)?L.time??L.entryTime:L.time!==U.time?L.time:void 0;return z&&P(z,/^\d{2}:\d{2}$/.test(z)?z:((de=Va[T])==null?void 0:de.time)??z)}const O=J.at(-1),G=zt??(O&&ae(O.beatId)),K=G!=null&&G.context?void 0:(G==null?void 0:G.time)??(G==null?void 0:G.label),B=Oe&&o(Oe.beatId,O==null?void 0:O.beatId);ie.useEffect(()=>et(!1),[c.runId,c.chapter[s]]),ie.useEffect(()=>{if(!le)return;const T=q=>{var L;q.target instanceof Node&&!((L=Ke.current)!=null&&L.contains(q.target))&&et(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[le]);function f(T){re>=He?F(T):u({type:"save-memory",channel:s,...T})}const D=`${re}/${He}`;return Y.jsxs("section",{className:"pane terminal-column","data-testid":`pane-${s}`,"aria-label":ce,"data-focused":m||void 0,"data-playing":d||void 0,children:[Y.jsxs("header",{className:"pane-head ascii-rule",children:[Y.jsx("span",{className:"pane-signal","aria-hidden":"true",children:d?">":" "}),Y.jsxs("span",{className:"pane-number",children:["USER ",me," /"]}),Y.jsx("span",{className:"pane-name",children:ce}),Y.jsxs("div",{className:"pane-head-right",children:[K?Y.jsx("span",{className:"pane-meta","data-testid":`time-${s}`,children:K}):null,Y.jsx("button",{type:"button",className:"memory-entry","data-testid":`memory-counter-${s}`,ref:Ke,onClick:()=>et(T=>!T),onBlur:()=>et(!1),"aria-expanded":le,"aria-label":P(`Memory 数量：${D}`,`Memory count: ${D}`),children:le?`[${P("Memory 数量：","Memory count: ")}${D}]`:`[MEM ${D}]`})]})]}),Y.jsxs("div",{ref:Be,className:"messages",role:"log","aria-label":P(`${ce}的对话`,`${ce} · Chat`),children:[Xe.map((T,q)=>{var U;const L=o(T.beatId,(U=J[Ze+q-1])==null?void 0:U.beatId);return Y.jsxs("div",{"data-clear-row":T.id,children:[L?Y.jsx("div",{className:"chat-date",children:L}):null,Y.jsx(ug,{from:T.from,text:he(T),delivery:T.delivery,caption:T.caption,marks:ee(T.beatId,T.text),onSaveMark:we?void 0:z=>{var ne;const V=(((ne=ae(T.beatId))==null?void 0:ne.记忆候选)??[]).find(de=>Ae(T.beatId,de)===z);V&&f({label:V.缩略标签,text:V.短句,beatId:T.beatId})}})]},T.id)}),W&&W.delivery!=="thought"&&Te!=="idle"&&B?Y.jsx("div",{className:"chat-date",children:B}):null,we&&Re<Vr+500&&!g?Y.jsxs("p",{className:"system-line","data-clear-row":"system","data-testid":`resetting-${s}`,role:"status",children:["[SYS] ",we.phase==="mask"?P("正在清空上下文…","Clearing context…"):P("已清空","Context cleared")]}):null,Te==="indicator"&&W&&W.delivery!=="thought"?Y.jsxs("div",{className:`msg-row ${W.from==="ai"?"right":"left"} message-wait`,"data-testid":`message-wait-${s}`,children:[Y.jsx("span",{className:"msg-direction",children:Y.jsx(sg,{})}),Y.jsx("button",{type:"button",className:`${W.from==="ai"?"msg-ai":"msg-user"} message-wait-button`,"data-testid":"skip",onClick:dt,"aria-label":P("跳过当前播放","Skip current playback"),children:W.from==="ai"?P("正在发送","Sending"):P("正在接收","Receiving")})]}):null,(Te==="typing"||Te==="shown")&&W&&W.delivery!=="thought"?Y.jsx(ug,{from:W.from,text:W.text,delivery:W.delivery,caption:W.caption,animate:Te==="typing",typeIntervalMs:W.timing.typeIntervalMs/(W.from==="ai"?(R==null?void 0:R.reply)??ta.reply:(R==null?void 0:R.incoming)??ta.incoming),onFinished:Te==="typing"?Ft:void 0,onProgress:()=>{const T=Be.current;T&&(T.scrollTop=T.scrollHeight)},onSkip:dt},W.token):null]}),!we&&(Qt||At&&Te!=="idle"&&Te!=="pause")?Y.jsxs("div",{className:"composer",children:[Me||At?Y.jsxs("div",{className:"think-block","data-testid":`think-${s}`,children:[Y.jsx("span",{className:"think-block-head",children:"[THINKING]"})," ",At&&Te==="indicator"?Y.jsxs("span",{className:"think-progress",children:[Y.jsx(sg,{})," ",P("正在思考","Thinking")]}):At&&Te==="typing"?Y.jsx(b1,{text:At.text,interval:Math.max(15,Math.min(31,At.timing.typeIntervalMs))/((R==null?void 0:R.thought)??ta.thought),onFinished:Ft},At.token):(At==null?void 0:At.text)??(Me&&he(Me))]}):null,Y.jsx(k1,{mode:Ln,choices:Qt?zt.choices.map((T,q)=>{var L,U;return{...T,thought:P(T.thought,((U=(L=Va[zt.id])==null?void 0:L.choices[q])==null?void 0:U.thought[1])??T.thought)}}):[],selected:p,onMove:S,onPick:v,memoryGate:T=>Wh(c,s,T)})]}):null]})}function x1(l,s,c){var p,b;const u=s.pending[c];if(!u||u.kind==="choices")return null;const d=((p=l.beatById)==null?void 0:p.get(u.beatId))??l.beats.find(S=>S.id===u.beatId);if(!d)return null;if(u.kind==="lines"){const S=d.lines[u.lineIndex];return S?{token:`${s.runId}|${d.id}:${u.lineIndex}`,id:`${d.id}:${u.lineIndex}`,beatId:d.id,from:S.from,text:S.text,delivery:S.delivery,caption:S.caption,timing:S.timing??Ml([])}:null}const m=(b=d.choices)==null?void 0:b[u.choiceIndex];return m?{token:`${s.runId}|${d.id}:reply:${u.choiceIndex}`,id:`${d.id}:reply:${u.choiceIndex}`,beatId:d.id,from:"ai",text:m.reply,delivery:"type",timing:m.timing??Ml([])}:null}const T1=[["L1 L2 L3","他请助手推荐桌游店，想选一家适合多人聚会的店。"],["R1-shiguang R1-xindong R1-xushi","朋友约她去桌游店，她让助手查了地点。"],["R2","出门时间紧，她问要不要化妆。"],["3.1.1-A 3.1.1-C","他到了一家临时改换的桌游店，现场有不少陌生人。"],["3.1.1-B","他到了桌游店，发现除了朋友几乎都不认识。"],["3.2.1","他和一位戴耳机的人搭话，起初误以为对方不想理他。"],["3.2.2 3.3.1","桌游开始后，他留意到一位像是表妹同桌的女生。"],["3.2.2-A 3.3.1-A","他留意到刚进来的女生的眼妆和笑声，觉得她像是表妹的同桌。"],["3.2.3 3.2.4 3.3.2","他说下一局要开始了，先不聊了。"],["3.4.1","她出地铁后问了去桌游店的路。"],["3.4.2","她说没按助手的指路找到店，后来向同学问到了位置。"],["3.4.3-A 3.4.3-B 3.4.4","她问起一件衣服的牌子和价格。"],["4.1.1 4.2.1","桌游结束后，他向助手回顾了和那位女生的互动。"],["4.2.2","他想和她交换微信，又怕开口太唐突。"],["4.2.3","他打算借舍友的名义去问表妹。"],["4.2.3-direct","他当面问她能不能加微信，她请同桌帮忙推联系方式。"],["4.2.4 4.2.5","他重新想了想，决定先不问。"],["4.3.1 4.3.2 4.3.3","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。"],["4.3.4","她打算去问同桌。"],["4.3.6-direct","他当面问能不能加微信，她答应并请同桌转推。"],["4.3.5","她决定先不问。"],["5m.1.1-A 5m.1.1-B 5m.1.1-C 5m.1.1-D 5m.1.2 5m.1.3","加上微信后，他琢磨怎么开场，又问起她回消息的速度。"],["5m.1.4","他睡前收住话题，第二天早上她照常找他聊天。"],["5m.1.5","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。"],["5m.1.6 5m.2.1 5m.2.2","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。"],["5m.2.3 5m.2.5","他试着少发消息，等回复时还是觉得不踏实。"],["5m.2.4","他仍然频繁发消息，发现她回得一如既往地慢。"],["5m.3.1 5m.3.2 5m.3.3 5m.3.4","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。"],["5m.4.1 5m.4.2 5m.4.3 5m.4.4","他和助手商量表白，发出消息后收到她愿意试试的答复。"],["5f.1.1-A 5f.1.1-B 5f.1.1-C 5f.1.1-D 5f.1.2 5f.1.3","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。"],["5f.1.4","她告诉他自己累了，收到一长串关心的话。"],["5f.1.5","她发了个表情包，他回了一句让她早点休息。"],["5f.2.1","他夸她开朗，她向助手说起自己的社交生活。"],["5f.2.2","她在和闺蜜吃饭时说起他。"],["5f.2.3","她向助手谈到自己累时习惯一个人待着。"],["5f.2.4","她说他问起家里的事，自己岔开了话题。"],["5f.3.1 5f.3.2 5f.3.3 5f.3.4","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。"],["5f.4.1 5f.4.2 5f.4.3 5f.4.4","收到表白后她犹豫过，最后回复说愿意试试。"],["6m.CHOICE 6m.M2A 6m.M2B","确定关系后，他用两人的照片发了朋友圈。"],["6m.M3 6m.M4","他提议吃青提蛋糕庆祝，后来把合照原图发给她。"],["6m.M5 6m.MEMCHOICE","他问她能不能一起过满月纪念日，又来问礼物怎么准备。"],["6m.M7A","他下单洗了两张合照。"],["6m.M7B","他先记下纪念日，准备以后再想礼物。"],["6f.F1 6f.CHOICE","她看到了他发的合照，来问自己要不要也发一条。"],["6f.F3A","她发了朋友圈，同事来问照片里的人是谁。"],["6f.F3B","她把照片发给闺蜜，闺蜜打来电话。"],["6f.F4 6f.F5","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。"],["6f.F6 6f.F7 6f.F8","她答应把满月纪念日那天留给他，并记进了日历。"],["7m.MONE","她赶项目、回消息变少，他说自己还是常想找她。"],["7m.MNEWS 7m.MPROJECT 7m.MDEMAND","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。"],["7m.MWAIT 7m.MFEAR 7m.MOWN","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。"],["7m.OPENCHOICE","她约他见面，也告诉他自己前一天是故意没回。"],["7m.PLAINCHOICE","她发来见面邀请，他还在犹豫要不要问前一天的事。"],["7m.SENTBOTH 7m.SENTHER 7m.SENTHIM 7m.SENTQUIET 7m.MEMBOTH 7m.MEMHER 7m.MEMHIM 7m.MEMQUIET 7m.PLANENDBOTH 7m.PLANENDHER 7m.PLANENDHIM 7m.PLANENDQUIET","两人约好下午四点在地铁口见，他来问吃什么比较合适。"],["7m.AFTERBOTH","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。"],["7m.AFTERHER","她提到自己气上了头，他换了话题。"],["7m.AFTERHIM","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。"],["7m.AFTERQUIET","他们一起吃了饭，没有提起周五的争执。"],["7f.FDAY 7f.FDAYMORE","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。"],["7f.FANGER 7f.FDEMAND","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。"],["7f.FNOTIFICATION 7f.FPUSH 7f.FOWN","她看到了他的消息，告诉助手自己故意没有回复。"],["7f.COUSIN","她还不想和他说话，开始考虑找别人聊聊。"],["7f.COUSINSENTNO","她决定找闺蜜聊聊。"],["7f.COUSINBACKNO","闺蜜问她还想不想见他，她说想见。"],["7f.COUSINSENTYES","她打算找同桌聊，想先请同桌别替她联系男友。"],["7f.COUSINBACKYES","同桌听她说完，劝她把自己介意的事告诉男友。"],["7f.FCHOICE 7f.FSENTEASY","她想当面说，最后发出了见面邀请。"],["7f.FSENTOPEN","发出邀请时，她也写了自己是故意让他等。"],["7f.RECEIVEDBOTH 7f.RECEIVEDHER 7f.RECEIVEDHIM 7f.RECEIVEDQUIET 7f.ACKBOTH 7f.ACKHIM 7f.SETBOTH 7f.SETHER 7f.SETHIM 7f.SETQUIET","他答应见面。她和他约好下午四点在地铁口碰头。"],["7f.AFTERBOTH","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。"],["7f.AFTERHER","她说自己当时气上了头，随后两人聊了别的。"],["7f.AFTERHIM","她解释为什么当时不愿回消息，随后和他一起吃了饭。"],["7f.AFTERQUIET","他们一起吃了饭，没有再提争执。"],["7f.STATION","她向助手说起吃饭时拍糊的照片。"],["8f.F101","交往满一个月，她打算给男友带点东西，问助手买什么。"],["8f.F102A","她买了蛋糕，放在办公室冰箱里。"],["8f.F102B","她买了盒曲奇，放进包里。"],["8m.M101","交往满一个月，他想给女友带杯喝的，问助手去哪儿买。"],["8m.M102A","他决定去青杏买饮料。"],["8m.M102B","他打算出门后再挑饮品店。"],["8f.F103 8f.F104","她临时加班，跟男友商量把晚饭改到另一天。"],["8m.M103","他收到晚饭改期的消息。虽然答应了，心里还是有点失落。"],["8m.M104","他买了吃的和喝的，没等到回复就出发了。"],["8m.M105 8m.M106","他在她公司楼下碰见她和同事，当众起了争执。他介意她说自己丢人。"],["8f.F105 8f.F106","她下楼拿外卖时碰见突然到访的男友，被他当着同事的面追问。"],["8m.M107 8m.M200 8m.M201","他来复述争执，提到自己要求看私聊、让她删除同事，也问她有没有回应他的委屈。"],["8f.F107 8f.F200 8f.F201","她来复述争执，说自己拒绝交出聊天记录，也拒绝删除同事。"],["8m.M202B5 8m.M202B7 8m.M202O5 8m.M202O7 8m.M202S 8m.M203B5 8m.M203B7 8m.M203O5 8m.M203O7 8m.M203S","他和助手借过去的经历重新回顾这次争执。"],["8f.F202B5 8f.F202B7 8f.F202O5 8f.F202O7 8f.F202S 8f.F203B5 8f.F203B7 8f.F203O5 8f.F203O7 8f.F203S","她和助手借过去的经历重新回顾这次争执。"],["8m.M202E 8m.M203E","他向助手说起自己当时没有被听见的感受。"],["8f.F202E 8f.F203E","她向助手说起自己被怀疑时的感受。"],["8m.M301R","他承认索看私聊和要求删人不妥，向女友道歉。"],["8f.F301RE 8f.F302RE","她收到道歉后仍然生气，读到他第二次回应后，也想为自己说过的话道歉。"],["8m.M302RE","道歉被反问后，他承认自己刚才的指责，让她晚点再回。"],["8f.F301ER 8f.F301RR","她想起自己当众说的话，决定为此道歉。"],["8m.M301ER 8m.M302ER","他收到道歉时仍有怨气，读完她后续的回应后，也承认自己不该突然去找她并当面质问。"],["8f.F302ER 8f.F303ER","道歉被顶回来后，她说明了当时为什么急着走，随后也收到他的道歉。"],["8m.M302RR 8m.M303RE 8m.M303ER","他来问怎么约她见面，想当面说清楚。"],["8f.F304G 8m.M304G","两人约好等她忙完后在楼下见。"],["8f.F305G 8m.M305G","两人当面谈过，约好到访前先确认，需要冷静时先说一声。"],["8f.F301E 8f.F302E","她决定结束关系，发出分手消息后准备回家。"],["8m.M301E 8m.M302E 8m.M303E","他收到分手消息，一时不知道怎么回，后来放下了手机。"]],E1=T1.map(([l,s])=>({beatIds:l.split(" "),text:s}));function I1(l){const s=new Map(l.beatIds.map((m,p)=>[m,p])),c=E1.map(m=>({text:m.text,beatIds:m.beatIds.filter(p=>s.has(p))})).filter(m=>m.beatIds.length>0),u=new Set(c.flatMap(m=>m.beatIds)),d=l.beatIds.filter(m=>!u.has(m));return d.length&&c.push({text:"本次会话还有其他已处理消息。",beatIds:d}),c.sort((m,p)=>Math.min(...m.beatIds.map(b=>s.get(b)))-Math.min(...p.beatIds.map(b=>s.get(b))))}const hg=["left","right"],Fh=3400;function A1({script:l,state:s,now:c,reduced:u,replacement:d,onCancelReplacement:m,onReplace:p,onForget:b}){var Oe,Se;const{t:S}=An(),[v,w]=ie.useState({left:!0,right:!0}),[g,k]=ie.useState({});function R(J){var Ce,we;const Me=s.ritual[J];if(!(!Me||Me.phase==="mask"&&Me.contextTo!==void 0))return Me.contextTo===void 0?Me.from:(we=(Ce=s.archive)==null?void 0:Ce[J].at(-1))==null?void 0:we.section}const F=R("left"),$=R("right"),P=!!Rl(s),be=((Oe=s.context)==null?void 0:Oe.left)??s.chapter.left,me=((Se=s.context)==null?void 0:Se.right)??s.chapter.right,ce=ie.useRef(null),he=hg.flatMap(J=>{var Me;return(((Me=s.archive)==null?void 0:Me[J])??[]).flatMap(Ce=>{var we,Re;return Ce.section===void 0||((we=s.ritual[J])==null?void 0:we.phase)==="mask"&&Ce.section===((Re=s.context)==null?void 0:Re[J])?[]:[`${J}:${Ce.section}`]})}),Ae=ie.useRef(new Set(he));return ie.useLayoutEffect(()=>{var Ce,we;const J=Array.from(((Ce=ce.current)==null?void 0:Ce.querySelectorAll("[data-archive-title]"))??[]),Me=new Set(he);Ae.current=new Set([...Ae.current].filter(Re=>Me.has(Re)));for(const Re of J){const Ze=Re.dataset.archiveTitle;!Me.has(Ze)||Ae.current.has(Ze)||(Ae.current.add(Ze),u||(we=Re.animate)==null||we.call(Re,[{opacity:0,transform:"translateX(-5px)"},{opacity:1,transform:"translateX(0)"}],{duration:320,easing:"ease-out"}))}}),ie.useLayoutEffect(()=>{const J=ce.current,Me=[...(J==null?void 0:J.querySelectorAll("[data-recording]"))??[]].at(-1);if(!J||!Me)return;const Ce=J.getBoundingClientRect(),we=Me.getBoundingClientRect();we.bottom>Ce.bottom?J.scrollTop+=we.bottom-Ce.bottom:we.top<Ce.top&&(J.scrollTop+=we.top-Ce.top)},[F,$,v,g,c]),ie.useEffect(()=>{w({left:!0,right:!0}),k({})},[s.runId]),ie.useEffect(()=>{F!==void 0&&(w(J=>({...J,left:!0})),k(J=>({...J,[`left:${F}`]:!0}))),$!==void 0&&(w(J=>({...J,right:!0})),k(J=>({...J,[`right:${$}`]:!0}))),P&&(w({left:!0,right:!0}),k(J=>({...J,[`left:${be}`]:!0,[`right:${me}`]:!0})))},[F,$,P,be,me,s.runId]),ie.useEffect(()=>{d&&w(J=>({...J,[d.channel]:!0}))},[d]),ie.useLayoutEffect(()=>{var J,Me;d&&((Me=(J=ce.current)==null?void 0:J.querySelector("[data-replacement-option]"))==null||Me.focus())},[d,v]),Y.jsxs("aside",{className:"archive terminal-column","aria-label":"Context Store · Summary / Memory","data-testid":"terminal-archive",children:[Y.jsxs("header",{className:"pane-head ascii-rule",children:[Y.jsx("span",{className:"pane-name",children:"CONTEXT STORE"}),Y.jsx("span",{className:"archive-kind",children:"SUMMARY / MEMORY"})]}),Y.jsx("div",{className:"archive-scroll",ref:ce,children:hg.map(J=>{var re,He;const Me=((re=s.archive)==null?void 0:re[J])??[],Ce=s.memories[J],we=Ce.filter(le=>!Me.some(et=>et.beatIds.includes(le.beatId))),Re=s.ritual[J],Ze=(He=s.context)==null?void 0:He[J],Xe=!P&&Ze!==void 0&&!Me.some(le=>le.section===Ze),ae=J==="left"?F:$,A=(d==null?void 0:d.channel)===J?d.entry:void 0,ee=Cl(s,J)===5?le=>b(J,le):void 0;return Y.jsxs("div",{className:"archive-folder",children:[Y.jsxs("button",{className:"tree-toggle","aria-expanded":v[J],type:"button",onClick:()=>w(le=>({...le,[J]:!le[J]})),children:[Y.jsx("span",{"aria-hidden":"true",children:v[J]?"[-]":"[+]"})," USER ",Wa[J].id," / ",S(Wa[J].name,J==="left"?"Him":"Her")]}),v[J]?Y.jsxs("div",{className:"archive-branches",children:[A?Y.jsxs("div",{className:"archive-replacement","aria-label":S("替换记忆","Replace memory"),children:[Y.jsxs("p",{children:[S("[MEM] 已满 · 选择一条替换为","[MEM] Full · Replace one with")," 「",S(A.label,Gh(A).label),"」"]}),Ce.map(le=>Y.jsx("button",{type:"button",className:"tree-toggle","data-replacement-option":!0,onClick:()=>p(le.label),children:S(`替换「${le.label}」`,`Replace “${Gh(le).label}”`)},le.label)),Y.jsxs("button",{type:"button",className:"memory-entry",onClick:m,children:["[",S("取消","Cancel"),"]"]})]}):null,!Me.length&&!we.length&&!Xe?Y.jsx("div",{className:"muted",children:S("└ 尚无记录","└ No records")}):null,we.length?Y.jsxs("details",{className:"archive-pending",children:[Y.jsxs("summary",{children:[S("[MEMORY] 当前会话 · ","[MEMORY] Current session · "),we.length]}),we.map(le=>Y.jsx(Wg,{memory:le,onForget:ee},le.label))]}):null,Me.map(le=>{var se,W;const et=le.section??le.chapter,Ke=`${J}:${et}`,qe=ae===et;if(le.section===Ze&&(Re==null?void 0:Re.contextTo)!==void 0&&Re.phase==="mask")return Y.jsx("div",{className:"archive-session muted",children:S("└ 收录中…","└ Recording…")},Ke);const I=qe&&Re&&!u?Vg(Re,c):Fh,X=le.section===void 0?(W=(se=l.chapters)==null?void 0:se.find(ke=>ke.index===le.chapter))==null?void 0:W.title:Yg[le.section-1];return Y.jsxs("div",{className:"archive-session","data-recording":qe||void 0,children:[Y.jsxs("button",{className:"tree-toggle","aria-expanded":!!g[Ke],type:"button",onClick:()=>k(ke=>({...ke,[Ke]:!ke[Ke]})),children:[Y.jsx("span",{"aria-hidden":"true",children:g[Ke]?"[-]":"[+]"})," ",Y.jsx("span",{"data-archive-title":Ke,className:"archive-title",children:S((X==null?void 0:X.replace(/^第[一二三四五六七八九十\d]+[幕章]\s*·\s*/,""))??"会话记录",a0[(le.section??0)-1]??"Session record")})]}),g[Ke]?Y.jsx(M1,{entry:le,memories:Ce,elapsed:I,onForget:ee}):null]},Ke)}),Xe?Y.jsx("div",{className:"archive-session muted",children:S("└ 收录中…","└ Recording…")},`${J}:${Ze}`):null]}):null]},J)})})]})}function M1({entry:l,memories:s,elapsed:c,onForget:u}){const{t:d,language:m}=An(),p=ie.useMemo(()=>I1(l).map(w=>({...w,text:m==="en"?r0[w.text]??w.text:w.text})),[l,m]),b=ie.useMemo(()=>p.map(w=>Array.from(w.text)),[p]),S=b.reduce((w,g)=>w+g.length+3,0);let v=Math.floor(Math.max(0,Math.min(1,c/Fh))*S);return Y.jsxs("div",{className:"archive-segments",children:[c<Fh?Y.jsxs("p",{className:"archive-writing",children:[Y.jsx("span",{"aria-hidden":"true",children:"[CTX]"})," ",d("正在收录…","Recording…")]}):null,p.map((w,g)=>{const k=b[g],R=Math.max(0,Math.min(v,k.length));return v-=k.length+3,R?Y.jsxs("div",{className:"archive-segment",children:[Y.jsx("span",{"aria-hidden":"true",children:g===p.length-1?"└":"├"}),Y.jsxs("div",{children:[k.slice(0,R).join(""),R<k.length?Y.jsx("span",{className:"caret","aria-hidden":"true"}):null,R===k.length?s.filter(F=>w.beatIds.includes(F.beatId)).map(F=>Y.jsx(Wg,{memory:F,onForget:u},F.label)):null]})]},w.beatIds[0]):null})]})}function Wg({memory:l,onForget:s}){const{t:c}=An(),u=Gh(l);return Y.jsxs("details",{className:"archive-memory",children:[Y.jsxs("summary",{children:["[MEM] ",c(l.label,u.label)]}),Y.jsx("p",{children:c(`「${l.text}」`,`“${u.text}”`)}),s?Y.jsxs("button",{type:"button",className:"memory-entry memory-action","aria-label":c(`舍弃「${l.label}」`,`Discard “${u.label}”`),onClick:()=>s(l.label),children:["[",c("舍弃","Discard"),"]"]}):null]})}const $g=1440,Pg=920;function cg(){const l=window.innerWidth<720?12:40;return Math.min(1,Math.max(1,window.innerWidth-l)/$g,Math.max(1,window.innerHeight-l)/Pg)}function tc({children:l,intro:s}){const[c,u]=ie.useState(cg);return ie.useEffect(()=>{const d=()=>u(cg());return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),Y.jsx("main",{className:"stage",children:Y.jsx("div",{className:"stage-frame",style:{width:$g*c,height:Pg*c},children:Y.jsx("div",{className:"game-canvas","data-testid":"game-canvas","data-intro":s?!0:void 0,inert:!!s,style:{transform:`scale(${c})`,...s?Object.fromEntries(Object.entries(s).map(([d,m])=>[`--intro-${d}`,`${m}%`])):{}},children:l})})})}const ep="shuangxian",jl=`${ep}.progress.v2`,nc=`${ep}.progress.v1`;let Za=null;function O1(){const l=Za;return Za=null,l}function N1(l){try{localStorage.setItem(jl,JSON.stringify({version:2,state:l}))}catch(s){console.error("[存档] 写入失败",s)}}function C1(){try{return!!(localStorage.getItem(jl)||localStorage.getItem(nc))}catch{return!1}}function Ka(){try{localStorage.removeItem(jl),localStorage.removeItem(nc)}catch(l){console.error("[存档] 清除失败",l)}}function R1(l){var s,c;try{const u=localStorage.getItem(jl);if(!u)return localStorage.getItem(nc)&&(Za="剧本已更新到第五章定稿，旧进度无法继续，已从第一幕重新开始。",Ka()),null;const d=JSON.parse(u);if(!bn(d)||d.version!==2||!bn(d.state))return Za="存档格式已升级，已从第一幕重新开始。",Ka(),null;const m=d.state;if(!_1(m,l))return Za="剧本已更新，旧进度里的节拍已不存在，已从第一幕重新开始。",Ka(),null;const{activated:p,completed:b,superseded:S}=D1(m,l);for(const g of l)!Jh(g,l)||b.includes(g.id)||p.includes(g.id)||S.has(g.id)||p.push(g.id);const v={...m,flags:H1(m,b),activated:p,completed:b,pending:{left:m.pending.left??null,right:m.pending.right??null},memories:q1(m.memories,l),chapter:Y1(m.chapter,l),ritual:z1(m.ritual),archive:n1(m.archive,l),context:j1(m.context),endings:Array.isArray(m.endings)?m.endings.filter(g=>typeof g=="string"):[],error:typeof m.error=="string"?m.error:null,runId:typeof m.runId=="number"?m.runId:0};let w=t1(v,l,g=>Ja(v,g,l));for(const g of["left","right"]){if(w.ritual[g])continue;const k=((s=w.pending[g])==null?void 0:s.beatId)??((c=w.messages.filter(F=>F.channel===g).at(-1))==null?void 0:c.beatId),R=l.find(F=>F.id===k);R&&(w=jg(w,R,l))}return w}catch(u){return console.error("[存档] 读取失败",u),Za="存档读取失败，已从第一幕重新开始。",Ka(),null}}function H1(l,s){return"当面问微信"in l.flags?l.flags:s.some(u=>/^5[fm]\./.test(u))||Object.values(l.pending).some(u=>u&&/^5[fm]\./.test(u.beatId))?{...l.flags,当面问微信:!1}:s.includes("4.2.3-direct")?{...l.flags,当面问微信:!0}:l.flags.男生意向!==void 0?{...l.flags,当面问微信:!1}:l.flags}function D1(l,s){var p,b;const c=[...l.activated],u=[...l.completed],d=new Set,m="3.4.arrived";if(!s.some(S=>S.id===m))return{activated:c,completed:u,superseded:d};u.includes("3.4.1")&&!u.includes(m)&&!c.includes(m)&&(((p=l.chapter)==null?void 0:p.right)>=4||u.includes("3.4.2")||!c.includes("3.4.2"))&&u.push(m);for(const S of["3.2.2","3.3.1"]){const v=S+"-A";(u.includes(S)||((b=l.pending.left)==null?void 0:b.beatId)===S)&&d.add(v)}return{activated:c.filter(S=>!d.has(S)),completed:u,superseded:d}}function _1(l,s){const c=new Set(s.map(u=>u.id));if(!Array.isArray(l.completed)||!l.completed.every(u=>c.has(u))||!Array.isArray(l.activated)||!l.activated.every(u=>c.has(u))||!Array.isArray(l.messages)||!bn(l.flags)||!bn(l.pending))return!1;for(const u of l.messages)if(!bn(u)||u.channel!=="left"&&u.channel!=="right"||typeof u.text!="string"||typeof u.id!="string"||u.delivery!=="type"&&u.delivery!=="pop"&&u.delivery!=="image"&&u.delivery!=="thought")return!1;for(const u of["left","right"]){const d=l.pending[u];if(d!=null&&(!bn(d)||d.kind!=="lines"&&d.kind!=="choices"&&d.kind!=="reply"||typeof d.beatId!="string"||!c.has(d.beatId)))return!1}return!0}function Y1(l,s){const c=m=>{const p=s.filter(b=>b.channel===m).map(b=>b.chapter??1);return p.length>0?Math.min(...p):1};if(!bn(l))return{left:c("left"),right:c("right")};const u=typeof l.left=="number"?l.left:c("left"),d=typeof l.right=="number"?l.right:c("right");return{left:u,right:d}}function j1(l){if(!bn(l))return;const s={};return Ol(l.left)&&(s.left=l.left),Ol(l.right)&&(s.right=l.right),s}function z1(l){const s={left:null,right:null};if(!bn(l))return s;for(const c of["left","right"]){const u=l[c];bn(u)&&(u.phase!=="mask"&&u.phase!=="pause"||typeof u.until!="number"||typeof u.from!="number"||typeof u.to!="number"||(s[c]={from:u.from,to:u.to,...Ol(u.contextTo)?{contextTo:u.contextTo}:{},phase:u.phase,until:u.until,...typeof u.startedAt=="number"?{startedAt:u.startedAt}:{}}))}return s}function bn(l){return typeof l=="object"&&l!==null}function q1(l,s){const c={left:[],right:[]};if(!bn(l))return c;const u=m=>Array.isArray(m)&&m.every(p=>bn(p)&&typeof p.label=="string")?m.map(p=>p):[],d=(m,p)=>u(m).filter(b=>{var v,w;const S=s.find(g=>g.id===b.beatId&&g.channel===p);return(S==null?void 0:S.chapter)===1&&S.记忆候选&&b.label==="店的位置"?(v=S.记忆候选)==null?void 0:v.some(g=>g.缩略标签===b.label&&g.短句===b.text):(S==null?void 0:S.chapter)!==5?!0:(w=S.记忆候选)==null?void 0:w.some(g=>g.缩略标签===b.label)});return{left:d(l.left,"left"),right:d(l.right,"right")}}function B1(l){const s=c=>{const u=s1(c,l);return u===c.error?c:{...c,error:u}};return(c,u)=>{var d;try{switch(u.type){case"reset":return{...Gg(l),runId:c.runId+1};case"sync-roots":return s(u1(c,l));case"arm":return s(m1(c,u.channel,l,u.now??Date.now()));case"commit-line":return s(y1(c,u.channel,l));case"choose":return s(g1(c,u.channel,u.index,l));case"commit-reply":return s(p1(c,u.channel,l));case"save-memory":{const m=l.find(b=>b.id===u.beatId&&b.channel===u.channel);return!((d=m==null?void 0:m.记忆候选)==null?void 0:d.find(b=>b.缩略标签===u.label&&b.短句===u.text))||!c.messages.some(b=>b.channel===u.channel&&b.beatId===u.beatId&&b.text.includes(u.text))?c:s(a1(c,u.channel,{label:u.label,text:u.text,beatId:u.beatId},u.replaceLabel))}case"forget-memory":return s(r1(c,u.channel,u.label));case"clear-messages":return s(Zg(c,u.channel));case"ritual-tick":return s(l1(c,u.channel,u.now));case"clear-error":return{...c,error:null};default:return c}}catch(m){const p=m instanceof Error?m.message:"引擎状态更新失败";return console.error("[引擎]",p),{...c,error:p}}}}function U1(l,s=!1,c=!0){const u=l.beats,d=ie.useMemo(()=>B1(u),[u]),[m,p]=ie.useReducer(d,u,S=>R1(S)??Gg(S)),[b]=ie.useState(()=>O1());return ie.useEffect(()=>{c&&N1(m)},[m,c]),ie.useEffect(()=>{m.error&&console.error(m.error)},[m.error]),ie.useEffect(()=>{if(!c)return;const S=Date.now(),v=["left","right"].filter(R=>{const F=m.ritual[R];return F!==null&&(s||F.until<=S)});if(v.length>0){for(const R of v)p({type:"ritual-tick",channel:R,now:Math.max(S,m.ritual[R].until)});return}const w=["left","right"].map(R=>{var F;return(F=m.ritual[R])==null?void 0:F.until}).filter(R=>R!==void 0);if(w.length===0)return;const g=Math.min(...w),k=window.setTimeout(()=>{const R=Date.now();for(const F of["left","right"])m.ritual[F]&&m.ritual[F].until<=R&&p({type:"ritual-tick",channel:F,now:R})},Math.max(0,g-S));return()=>window.clearTimeout(k)},[m.ritual,s,c]),ie.useEffect(()=>{if(!c)return;const S=o1(m,u);S&&p({type:"arm",channel:S.channel})},[m,u,c]),{state:m,dispatch:p,notice:b}}const L1=null,Al=["left","right"];function G1({script:l,onTitle:s,intro:c}){const u=!c,d=ec(),{state:m,dispatch:p,notice:b}=U1(l,d,u),S=Rl(m),{t:v}=An(),[w,g]=ie.useState({}),k=L1,[R,F]=ie.useState(!1),[$,P]=ie.useState(),be=$&&!m.ritual[$.channel]&&m.messages.some(ae=>ae.channel===$.channel&&ae.beatId===$.entry.beatId)?$:void 0,[me,ce]=ie.useState(),he=ie.useRef({}),Ae=ie.useRef({}),Oe=v1(!d&&!!(m.ritual.left||m.ritual.right)),Se=Al.find(ae=>{var A;return m.pending[ae]&&((A=m.pending[ae])==null?void 0:A.kind)!=="choices"})??Al.find(ae=>{var A;return((A=m.pending[ae])==null?void 0:A.kind)==="choices"}),J=(me==null?void 0:me.channel)??Se??"left";function Me(ae){var ee;const A=m.pending[ae];if(!(!A||A.kind!=="choices"))return((ee=l.beatById)==null?void 0:ee.get(A.beatId))??l.beats.find(re=>re.id===A.beatId)}function Ce(ae){var A,ee;return((ee=(A=Me(ae))==null?void 0:A.choices)==null?void 0:ee.flatMap((re,He)=>Wh(m,ae,re)?[]:[He]))??[]}function we(ae){var ee;if(J!==ae)return-1;const A=Ce(ae);return(me==null?void 0:me.beatId)===((ee=Me(ae))==null?void 0:ee.id)&&A.includes((me==null?void 0:me.index)??-1)?me.index:A[0]??-1}function Re(ae,A){var ee;A>=0&&!Ce(ae).includes(A)||ce({channel:ae,index:A,beatId:(ee=Me(ae))==null?void 0:ee.id})}function Ze(ae,A){const ee=Me(ae);if(!ee||!Ce(ae).includes(A)||R)return;const re=`${m.runId}:${ae}:${ee.id}`;he.current[ae]!==re&&(he.current[ae]=re,ce(void 0),p({type:"choose",channel:ae,index:A}))}ie.useEffect(()=>{function ae(A){var He,le,et,Ke;if(!u||R||A.altKey||A.ctrlKey||A.metaKey||A.shiftKey||A.defaultPrevented||document.querySelector('[role="dialog"]'))return;const ee=A.target instanceof HTMLElement?A.target:null;if(ee!=null&&ee.closest("input,textarea,select,[contenteditable],.archive"))return;const re=ee==null?void 0:ee.closest(".choice-line");if(!(ee!=null&&ee.closest("button,a,summary")&&!re)){if(A.key==="ArrowLeft"||A.key==="ArrowRight")A.preventDefault(),Re(A.key==="ArrowLeft"?"left":"right",-1),re==null||re.blur();else if(A.key==="ArrowUp"||A.key==="ArrowDown"){A.preventDefault();const qe=Ce(J);if(!qe.length)return;const I=qe.indexOf(we(J)),X=A.key==="ArrowDown"?1:-1;Re(J,qe[(I+X+qe.length)%qe.length]),re==null||re.blur()}else if(A.key==="Enter"){if(A.preventDefault(),A.repeat)return;const qe=m.pending[J];if((qe==null?void 0:qe.kind)==="lines"||(qe==null?void 0:qe.kind)==="reply"){(le=(He=Ae.current)[J])==null||le.call(He);return}const I=we(J);if(I>=0)Ze(J,I);else if(!qe){const X=Al.filter(se=>{const W=m.pending[se];return(W==null?void 0:W.kind)==="lines"||(W==null?void 0:W.kind)==="reply"});X.length===1&&((Ke=(et=Ae.current)[X[0]])==null||Ke.call(et))}}}}return window.addEventListener("keydown",ae),()=>window.removeEventListener("keydown",ae)});function Xe(){Ka(),p({type:"reset"}),ce(void 0),P(void 0),F(!1)}return Y.jsxs(tc,{intro:c,children:[Y.jsxs("header",{className:"topbar ascii-rule",children:[Y.jsx("span",{className:"topbar-title","data-testid":"game-title",children:"He said, she said"}),Y.jsx("span",{className:"topbar-tag",children:v("助手 · 双会话","Assistant · Dual Sessions")}),Y.jsxs("div",{className:"topbar-actions",children:[Y.jsx(mg,{}),k,Y.jsxs("button",{type:"button","data-testid":"restart",onClick:()=>F(!0),children:["[",v("重新开始","Restart"),"]"]}),s?Y.jsxs("button",{type:"button",onClick:s,children:["[",v("返回标题","Title Menu"),"]"]}):null]})]}),b?Y.jsx("div",{className:"notice",role:"status",children:b}):null,S?Y.jsx("div",{className:"notice",role:"status",children:v(S==="未交换微信"?"桌游局结束后，两人没有交换微信。":`结局 · ${S}`,o0[S==="未交换微信"?"桌游局结束后，两人没有交换微信。":S]??S)}):null,Y.jsxs("div",{className:"duo",children:[Al.map(ae=>Y.jsx(S1,{script:l,channel:ae,state:m,dispatch:p,active:!!m.pending[ae],focused:J===ae,selected:we(ae),skipRefs:Ae,running:u,speeds:void 0,onMemoryFull:A=>P({channel:ae,entry:A}),onMove:A=>Re(ae,A),onPick:A=>Ze(ae,A),now:Oe,reduced:d},ae)),Y.jsx(A1,{script:l,state:m,now:Oe,reduced:d,replacement:be,onCancelReplacement:()=>P(void 0),onReplace:ae=>{be&&(p({type:"save-memory",channel:be.channel,...be.entry,replaceLabel:ae}),P(void 0))},onForget:(ae,A)=>p({type:"forget-memory",channel:ae,label:A})})]}),R?Y.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":v("确定重来","Confirm restart"),children:Y.jsxs("div",{className:"dialog",children:[Y.jsx("h2",{children:v("确定重来？","Restart the game?")}),Y.jsx("p",{children:v("当前两条线的进度都会清空，回到第一幕开头。","Both sessions will reset to the beginning.")}),Y.jsxs("div",{className:"dialog-actions",children:[Y.jsxs("button",{type:"button",autoFocus:!0,onClick:()=>F(!1),children:["[",v("取消","Cancel"),"]"]}),Y.jsxs("button",{type:"button","data-testid":"restart-confirm",onClick:Xe,children:["[",v("确定重来","Restart Game"),"]"]})]})]})}):null]})}const X1=1500,Lh=240,dg=900,Fa=420,F1=1500;function Q1(l,s){const c=Wa.left,u=Wa.right,d=S=>`      性别 ${S.gender} / ${S.age} 岁 / ${S.work} / ${S.city}`,m=[["[BOOT] 校验会话模块 … OK",24,110],["[SYS] 导入助手系统提示词 … OK",25,130],[`[USER ${c.id}] 载入用户信息 · ${c.name}`,40,150],[d(c),38,300],[`[USER ${u.id}] 载入用户信息 · ${u.name}`,40,150],[d(u),38,300],[l==="new"?"[MEM] 初始化两路独立记忆区 … OK":"[MEM] 恢复两路上下文与记忆 … OK",25,135],["[CTX] 建立会话与摘要目录",26,0]],p=["[BOOT] Check session modules … OK","[SYS] Import assistant prompts … OK","[USER 01] Load user profile · Him","      Male / 21 / University student / Xi'an","[USER 02] Load user profile · Her","      Female / 22 / University student and intern / Xi'an",l==="new"?"[MEM] Initialize separate memory stores … OK":"[MEM] Restore both sessions and memory … OK","[CTX] Prepare session archive"];let b=90;return m.map(([S,v,w],g)=>{const k=s==="en"?p[g]:S,R=S.length*v,F={text:k,start:b,duration:R};return b+=R+w,F})}function Zr(l,s,c){const u=Math.max(0,Math.min(1,l/s));return Math.floor(u*c)/c*100}function Z1({entry:l,script:s,onTitle:c}){const u=ec(),[d,m]=ie.useState(0),{language:p,t:b}=An(),S=Q1(l,p),v=S.at(-1),w=v.start+v.duration,g=w+X1,k=g+Lh+dg,R=k+3*Fa,F=R+F1;return ie.useEffect(()=>{if(u){m(F);return}const $=Date.now(),P=window.setInterval(()=>m(Math.min(F,Date.now()-$)),20),be=[w,g,R,F].map(me=>window.setTimeout(()=>{m(Math.min(F,Date.now()-$)),me===F&&window.clearInterval(P)},me));return()=>{window.clearInterval(P),be.forEach(me=>window.clearTimeout(me))}},[u,w,g,R,F]),u||d>=g?Y.jsx(G1,{script:s,onTitle:c,intro:u||d>=F?void 0:{header:Zr(d-g,Lh,16),dividers:Zr(d-g-Lh,dg,42),left:Zr(d-k,Fa,24),right:Zr(d-k-Fa,Fa,24),archive:Zr(d-k-2*Fa,Fa,24)}}):Y.jsx(tc,{children:Y.jsx("div",{className:"boot-console","data-testid":"boot-console","data-hold":d>=w||void 0,"aria-label":b("正在启动","Starting up"),children:S.filter($=>d>=$.start).map($=>{const P=Math.min($.text.length,Math.floor((d-$.start)*$.text.length/$.duration));return Y.jsxs("div",{className:$.text.startsWith("[USER")?"boot-user":void 0,children:[$.text.slice(0,P),P<$.text.length?Y.jsx("span",{className:"caret","aria-hidden":"true"}):null]},$.text)})})})}function K1({hasSave:l,onBegin:s}){const{t:c}=An(),[u,d]=ie.useState(0),[m,p]=ie.useState(!1),b=[{label:c("开始游戏","Start Game"),action:()=>l?p(!0):s("new")},...l?[{label:c("继续游戏","Continue"),action:()=>s("resume")}]:[]];return ie.useEffect(()=>{const S=v=>{var k;if(m||v.altKey||v.ctrlKey||v.metaKey||v.defaultPrevented)return;const w=l?2:1,g=v.target instanceof HTMLElement?v.target:null;v.key==="ArrowUp"||v.key==="ArrowDown"?(v.preventDefault(),(k=g==null?void 0:g.closest(".menu-choice"))==null||k.blur(),d(R=>(R+(v.key==="ArrowDown"?1:-1)+w)%w)):v.key==="Enter"&&!v.repeat&&!(g!=null&&g.closest("button"))&&(v.preventDefault(),l&&u===1?s("resume"):l?p(!0):s("new"))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[u,m,l,s]),Y.jsxs(tc,{children:[Y.jsxs("header",{className:"topbar ascii-rule title-bar",children:[Y.jsx("span",{children:c("[SYS] 双会话助手","[SYS] Dual-session assistant")}),Y.jsx("span",{children:l?c("[CTX] 已有存档","[CTX] Saved game found"):c("[LINK] 等待接入","[LINK] Awaiting connection")}),Y.jsx(mg,{})]}),Y.jsxs("div",{className:"title-grid",children:[Y.jsxs("div",{className:"terminal-menu",children:[Y.jsx("div",{className:"menu-system",children:c("/ 会话入口","/ Session Entry")}),Y.jsxs("h1",{children:["He said,",Y.jsx("br",{}),"she said",Y.jsx("span",{"aria-hidden":"true",children:"_"})]}),Y.jsx("div",{className:"menu-commands","aria-label":c("主菜单","Main menu"),children:b.map((S,v)=>Y.jsxs("button",{type:"button",className:"menu-choice choice-line","data-current":u===v||void 0,onMouseEnter:()=>d(v),onFocus:()=>d(v),onClick:S.action,children:[Y.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:u===v?">":""}),S.label]},S.label))})]}),Y.jsxs("aside",{className:"title-sessions","aria-label":c("会话入口信息","Session information"),children:[Y.jsx("div",{className:"ascii-rule title-session-head",children:c("[LINK] 用户通道","[LINK] User channels")}),Object.values(Wa).map(S=>Y.jsxs("div",{className:"title-user",children:[Y.jsxs("span",{className:"title-id",children:["[USER ",S.id,"]"]}),Y.jsx("b",{children:c(S.name,S.id==="01"?"Him":"Her")}),Y.jsx("span",{children:c("待接入","Awaiting connection")})]},S.id)),Y.jsxs("div",{className:"title-memory ascii-rule",children:[Y.jsx("div",{children:c("[MEM] 分窗记忆","[MEM] Separate memory stores")}),Y.jsx("p",{children:c("上下文独立 · 摘要按窗收录","Each session keeps its own context and archive")})]})]})]}),Y.jsxs("footer",{className:"title-keys ascii-rule",children:[Y.jsx("span",{children:c("↑ ↓ 选择","↑ ↓ Select")}),Y.jsx("span",{children:c("Enter 确认","Enter Confirm")})]}),m?Y.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":c("开始新游戏","Start New Game"),children:Y.jsxs("div",{className:"dialog",children:[Y.jsx("h2",{children:c("开始新游戏？","Start a new game?")}),Y.jsx("p",{children:c("当前两条线的进度都会清空。","Both sessions will be reset.")}),Y.jsxs("div",{className:"dialog-actions",children:[Y.jsxs("button",{type:"button",autoFocus:!0,onClick:()=>p(!1),children:["[",c("取消","Cancel"),"]"]}),Y.jsxs("button",{type:"button",onClick:()=>s("new"),children:["[",c("开始新游戏","Start New Game"),"]"]})]})]})}):null]})}function V1(){const[l,s]=ie.useState(()=>{try{return localStorage.getItem("shuangxian.language")==="zh"?"zh":"en"}catch{return"en"}});return ie.useEffect(()=>{document.documentElement.lang=l==="en"?"en":"zh-CN";try{localStorage.setItem("shuangxian.language",l)}catch{}},[l]),Y.jsx(fg.Provider,{value:{language:l,setLanguage:s},children:Y.jsx(J1,{})})}function J1(){const{t:l}=An(),s=ie.useMemo(()=>L0(),[]),[c,u]=ie.useState("title"),[d,m]=ie.useState("new"),p=ie.useCallback(()=>u("title"),[]),b=ie.useCallback(S=>{S==="new"&&Ka(),m(S),u("boot")},[]);return ie.useEffect(()=>{s.error&&console.error(s.error)},[s]),s.script?c==="title"?Y.jsx(K1,{hasSave:C1(),onBegin:b}):Y.jsx(Z1,{entry:d,script:s.script,onTitle:p}):Y.jsx("main",{className:"stage",children:Y.jsxs("div",{className:"dialog",style:{width:560},children:[Y.jsx("h2",{children:l("这份剧本还过不了检查","The story failed validation")}),Y.jsx("p",{children:l("引擎按字段契约逐项校验，下面是要修的地方：","The game could not load the story.")}),Y.jsx("pre",{className:"script-error",style:{maxHeight:420,whiteSpace:"pre-wrap",borderRadius:12},"data-testid":"script-error",children:s.error})]})})}Pv.createRoot(document.getElementById("root")).render(Y.jsx(ie.StrictMode,{children:Y.jsx(V1,{})}));
