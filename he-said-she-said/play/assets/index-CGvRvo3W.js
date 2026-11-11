(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))f(d);new MutationObserver(d=>{for(const y of d)if(y.type==="childList")for(const p of y.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&f(p)}).observe(document,{childList:!0,subtree:!0});function m(d){const y={};return d.integrity&&(y.integrity=d.integrity),d.referrerPolicy&&(y.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?y.credentials="include":d.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function f(d){if(d.ep)return;d.ep=!0;const y=m(d);fetch(d.href,y)}})();var $f={exports:{}},_u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function cv(){if(ly)return _u;ly=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function m(f,d,y){var p=null;if(y!==void 0&&(p=""+y),d.key!==void 0&&(p=""+d.key),"key"in d){y={};for(var A in d)A!=="key"&&(y[A]=d[A])}else y=d;return d=y.ref,{$$typeof:c,type:f,key:p,ref:d!==void 0?d:null,props:y}}return _u.Fragment=o,_u.jsx=m,_u.jsxs=m,_u}var iy;function fv(){return iy||(iy=1,$f.exports=cv()),$f.exports}var J=fv(),Pf={exports:{}},En={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function ov(){if(uy)return En;uy=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),p=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.for("react.view_transition"),I=Symbol.iterator;function Nn(b){return b===null||typeof b!="object"?null:(b=I&&b[I]||b["@@iterator"],typeof b=="function"?b:null)}var hn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gn=Object.assign,Gn={};function Rn(b,q,$){this.props=b,this.context=q,this.refs=Gn,this.updater=$||hn}Rn.prototype.isReactComponent={},Rn.prototype.setState=function(b,q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,q,"setState")},Rn.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function kn(){}kn.prototype=Rn.prototype;function Tn(b,q,$){this.props=b,this.context=q,this.refs=Gn,this.updater=$||hn}var Bn=Tn.prototype=new kn;Bn.constructor=Tn,gn(Bn,Rn.prototype),Bn.isPureReactComponent=!0;var qn=Array.isArray;function ln(){}var rn={H:null,A:null,T:null,S:null},mn=Object.prototype.hasOwnProperty;function ye(b,q,$){var un=$.ref;return{$$typeof:c,type:b,key:q,ref:un!==void 0?un:null,props:$}}function ie(b,q){return ye(b.type,q,b.props)}function re(b){return typeof b=="object"&&b!==null&&b.$$typeof===c}function Ne(b){var q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function($){return q[$]})}var Qn=/\/+/g;function Pn(b,q){return typeof b=="object"&&b!==null&&b.key!=null?Ne(""+b.key):q.toString(36)}function w(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ln,ln):(b.status="pending",b.then(function(q){b.status==="pending"&&(b.status="fulfilled",b.value=q)},function(q){b.status==="pending"&&(b.status="rejected",b.reason=q)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function an(b,q,$,un,An){var Sn=typeof b;(Sn==="undefined"||Sn==="boolean")&&(b=null);var cn=!1;if(b===null)cn=!0;else switch(Sn){case"bigint":case"string":case"number":cn=!0;break;case"object":switch(b.$$typeof){case c:case o:cn=!0;break;case T:return cn=b._init,an(cn(b._payload),q,$,un,An)}}if(cn)return An=An(b),cn=un===""?"."+Pn(b,0):un,qn(An)?($="",cn!=null&&($=cn.replace(Qn,"$&/")+"/"),an(An,q,$,"",function(He){return He})):An!=null&&(re(An)&&(An=ie(An,$+(An.key==null||b&&b.key===An.key?"":(""+An.key).replace(Qn,"$&/")+"/")+cn)),q.push(An)),1;cn=0;var W=un===""?".":un+":";if(qn(b))for(var fn=0;fn<b.length;fn++)un=b[fn],Sn=W+Pn(un,fn),cn+=an(un,q,$,Sn,An);else if(fn=Nn(b),typeof fn=="function")for(b=fn.call(b),fn=0;!(un=b.next()).done;)un=un.value,Sn=W+Pn(un,fn++),cn+=an(un,q,$,Sn,An);else if(Sn==="object"){if(typeof b.then=="function")return an(w(b),q,$,un,An);throw q=String(b),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return cn}function en(b,q,$){if(b==null)return b;var un=[],An=0;return an(b,un,"","",function(Sn){return q.call($,Sn,An++)}),un}function _n(b){if(b._status===-1){var q=b._result,$=q();$.then(function(un){(b._status===0||b._status===-1)&&(b._status=1,b._result=un,$.status===void 0&&($.status="fulfilled",$.value=un))},function(un){(b._status===0||b._status===-1)&&(b._status=2,b._result=un,$.status===void 0&&($.status="rejected",$.reason=un))}),b._status===-1&&(b._status=0,b._result=$)}if(b._status===1)return b._result.default;throw b._result}var On=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function ge(b){var q=rn.T,$={};$.types=q!==null?q.types:null,rn.T=$;try{var un=b(),An=rn.S;An!==null&&An($,un),typeof un=="object"&&un!==null&&typeof un.then=="function"&&un.then(ln,On)}catch(Sn){On(Sn)}finally{q!==null&&$.types!==null&&(q.types=$.types),rn.T=q}}function wn(b){var q=rn.T;if(q!==null){var $=q.types;$===null?q.types=[b]:$.indexOf(b)===-1&&$.push(b)}else ge(wn.bind(null,b))}var Me={map:en,forEach:function(b,q,$){en(b,function(){q.apply(this,arguments)},$)},count:function(b){var q=0;return en(b,function(){q++}),q},toArray:function(b){return en(b,function(q){return q})||[]},only:function(b){if(!re(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return En.Activity=v,En.Children=Me,En.Component=Rn,En.Fragment=m,En.Profiler=d,En.PureComponent=Tn,En.StrictMode=f,En.Suspense=z,En.ViewTransition=E,En.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=rn,En.__COMPILER_RUNTIME={__proto__:null,c:function(b){return rn.H.useMemoCache(b)}},En.addTransitionType=wn,En.cache=function(b){return function(){return b.apply(null,arguments)}},En.cacheSignal=function(){return null},En.cloneElement=function(b,q,$){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var un=gn({},b.props),An=b.key;if(q!=null)for(Sn in q.key!==void 0&&(An=""+q.key),q)!mn.call(q,Sn)||Sn==="key"||Sn==="__self"||Sn==="__source"||Sn==="ref"&&q.ref===void 0||(un[Sn]=q[Sn]);var Sn=arguments.length-2;if(Sn===1)un.children=$;else if(1<Sn){for(var cn=Array(Sn),W=0;W<Sn;W++)cn[W]=arguments[W+2];un.children=cn}return ye(b.type,An,un)},En.createContext=function(b){return b={$$typeof:p,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:y,_context:b},b},En.createElement=function(b,q,$){var un,An={},Sn=null;if(q!=null)for(un in q.key!==void 0&&(Sn=""+q.key),q)mn.call(q,un)&&un!=="key"&&un!=="__self"&&un!=="__source"&&(An[un]=q[un]);var cn=arguments.length-2;if(cn===1)An.children=$;else if(1<cn){for(var W=Array(cn),fn=0;fn<cn;fn++)W[fn]=arguments[fn+2];An.children=W}if(b&&b.defaultProps)for(un in cn=b.defaultProps,cn)An[un]===void 0&&(An[un]=cn[un]);return ye(b,Sn,An)},En.createRef=function(){return{current:null}},En.forwardRef=function(b){return{$$typeof:A,render:b}},En.isValidElement=re,En.lazy=function(b){return{$$typeof:T,_payload:{_status:-1,_result:b},_init:_n}},En.memo=function(b,q){return{$$typeof:x,type:b,compare:q===void 0?null:q}},En.startTransition=ge,En.unstable_useCacheRefresh=function(){return rn.H.useCacheRefresh()},En.use=function(b){return rn.H.use(b)},En.useActionState=function(b,q,$){return rn.H.useActionState(b,q,$)},En.useCallback=function(b,q){return rn.H.useCallback(b,q)},En.useContext=function(b){return rn.H.useContext(b)},En.useDebugValue=function(){},En.useDeferredValue=function(b,q){return rn.H.useDeferredValue(b,q)},En.useEffect=function(b,q){return rn.H.useEffect(b,q)},En.useEffectEvent=function(b){return rn.H.useEffectEvent(b)},En.useId=function(){return rn.H.useId()},En.useImperativeHandle=function(b,q,$){return rn.H.useImperativeHandle(b,q,$)},En.useInsertionEffect=function(b,q){return rn.H.useInsertionEffect(b,q)},En.useLayoutEffect=function(b,q){return rn.H.useLayoutEffect(b,q)},En.useMemo=function(b,q){return rn.H.useMemo(b,q)},En.useOptimistic=function(b,q){return rn.H.useOptimistic(b,q)},En.useReducer=function(b,q,$){return rn.H.useReducer(b,q,$)},En.useRef=function(b){return rn.H.useRef(b)},En.useState=function(b){return rn.H.useState(b)},En.useSyncExternalStore=function(b,q,$){return rn.H.useSyncExternalStore(b,q,$)},En.useTransition=function(){return rn.H.useTransition()},En.version="19.3.0",En}var ay;function Do(){return ay||(ay=1,Pf.exports=ov()),Pf.exports}var Hn=Do(),no={exports:{}},Lu={},eo={exports:{}},to={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function sv(){return ry||(ry=1,(function(c){function o(w,an){var en=w.length;w.push(an);n:for(;0<en;){var _n=en-1>>>1,On=w[_n];if(0<d(On,an))w[_n]=an,w[en]=On,en=_n;else break n}}function m(w){return w.length===0?null:w[0]}function f(w){if(w.length===0)return null;var an=w[0],en=w.pop();if(en!==an){w[0]=en;n:for(var _n=0,On=w.length,ge=On>>>1;_n<ge;){var wn=2*(_n+1)-1,Me=w[wn],b=wn+1,q=w[b];if(0>d(Me,en))b<On&&0>d(q,Me)?(w[_n]=q,w[b]=en,_n=b):(w[_n]=Me,w[wn]=en,_n=wn);else if(b<On&&0>d(q,en))w[_n]=q,w[b]=en,_n=b;else break n}}return an}function d(w,an){var en=w.sortIndex-an.sortIndex;return en!==0?en:w.id-an.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;c.unstable_now=function(){return y.now()}}else{var p=Date,A=p.now();c.unstable_now=function(){return p.now()-A}}var z=[],x=[],T=1,v=null,E=3,I=!1,Nn=!1,hn=!1,gn=!1,Gn=typeof setTimeout=="function"?setTimeout:null,Rn=typeof clearTimeout=="function"?clearTimeout:null,kn=typeof setImmediate<"u"?setImmediate:null;function Tn(w){for(var an=m(x);an!==null;){if(an.callback===null)f(x);else if(an.startTime<=w)f(x),an.sortIndex=an.expirationTime,o(z,an);else break;an=m(x)}}function Bn(w){if(hn=!1,Tn(w),!Nn)if(m(z)!==null)Nn=!0,qn||(qn=!0,re());else{var an=m(x);an!==null&&Pn(Bn,an.startTime-w)}}var qn=!1,ln=-1,rn=5,mn=-1;function ye(){return gn?!0:!(c.unstable_now()-mn<rn)}function ie(){if(gn=!1,qn){var w=c.unstable_now();mn=w;var an=!0;try{n:{Nn=!1,hn&&(hn=!1,Rn(ln),ln=-1),I=!0;var en=E;try{e:{for(Tn(w),v=m(z);v!==null&&!(v.expirationTime>w&&ye());){var _n=v.callback;if(typeof _n=="function"){v.callback=null,E=v.priorityLevel;var On=_n(v.expirationTime<=w);if(w=c.unstable_now(),typeof On=="function"){v.callback=On,Tn(w),an=!0;break e}v===m(z)&&f(z),Tn(w)}else f(z);v=m(z)}if(v!==null)an=!0;else{var ge=m(x);ge!==null&&Pn(Bn,ge.startTime-w),an=!1}}break n}finally{v=null,E=en,I=!1}an=void 0}}finally{an?re():qn=!1}}}var re;if(typeof kn=="function")re=function(){kn(ie)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Qn=Ne.port2;Ne.port1.onmessage=ie,re=function(){Qn.postMessage(null)}}else re=function(){Gn(ie,0)};function Pn(w,an){ln=Gn(function(){w(c.unstable_now())},an)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(w){w.callback=null},c.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rn=0<w?Math.floor(1e3/w):5},c.unstable_getCurrentPriorityLevel=function(){return E},c.unstable_next=function(w){switch(E){case 1:case 2:case 3:var an=3;break;default:an=E}var en=E;E=an;try{return w()}finally{E=en}},c.unstable_requestPaint=function(){gn=!0},c.unstable_runWithPriority=function(w,an){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var en=E;E=w;try{return an()}finally{E=en}},c.unstable_scheduleCallback=function(w,an,en){var _n=c.unstable_now();switch(typeof en=="object"&&en!==null?(en=en.delay,en=typeof en=="number"&&0<en?_n+en:_n):en=_n,w){case 1:var On=-1;break;case 2:On=250;break;case 5:On=1073741823;break;case 4:On=1e4;break;default:On=5e3}return On=en+On,w={id:T++,callback:an,priorityLevel:w,startTime:en,expirationTime:On,sortIndex:-1},en>_n?(w.sortIndex=en,o(x,w),m(z)===null&&w===m(x)&&(hn?(Rn(ln),ln=-1):hn=!0,Pn(Bn,en-_n))):(w.sortIndex=On,o(z,w),Nn||I||(Nn=!0,qn||(qn=!0,re()))),w},c.unstable_shouldYield=ye,c.unstable_wrapCallback=function(w){var an=E;return function(){var en=E;E=an;try{return w.apply(this,arguments)}finally{E=en}}}})(to)),to}var cy;function hv(){return cy||(cy=1,eo.exports=sv()),eo.exports}var lo={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function dv(){if(fy)return Ye;fy=1;var c=Do();function o(T){var v="https://react.dev/errors/"+T;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)v+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+T+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var f={d:{f:m,r:function(){throw Error(o(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},d=Symbol.for("react.portal"),y=Symbol.for("react.recoverable"),p=Symbol.for("react.optimistic_key");function A(T,v,E){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:I==null?null:I===p?p:""+I,children:T,containerInfo:v,implementation:E}}var z=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(T,v){if(T==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Ye.browser=function(T){return{$$typeof:y,_reason:T}},Ye.createPortal=function(T,v){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(o(299));return A(T,v,null,E)},Ye.flushSync=function(T){var v=z.T,E=f.p;try{if(z.T=null,f.p=2,T)return T()}finally{z.T=v,f.p=E,f.d.f()}},Ye.preconnect=function(T,v){typeof T=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,f.d.C(T,v))},Ye.prefetchDNS=function(T){typeof T=="string"&&f.d.D(T)},Ye.preinit=function(T,v){if(typeof T=="string"&&v&&typeof v.as=="string"){var E=v.as,I=x(E,v.crossOrigin),Nn=typeof v.integrity=="string"?v.integrity:void 0,hn=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;E==="style"?f.d.S(T,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:I,integrity:Nn,fetchPriority:hn}):E==="script"&&f.d.X(T,{crossOrigin:I,integrity:Nn,fetchPriority:hn,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ye.preinitModule=function(T,v){if(typeof T=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var E=x(v.as,v.crossOrigin);f.d.M(T,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&f.d.M(T)},Ye.preload=function(T,v){if(typeof T=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var E=v.as,I=x(E,v.crossOrigin);f.d.L(T,E,{crossOrigin:I,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ye.preloadModule=function(T,v){if(typeof T=="string")if(v){var E=x(v.as,v.crossOrigin);f.d.m(T,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else f.d.m(T)},Ye.requestFormReset=function(T){f.d.r(T)},Ye.unstable_batchedUpdates=function(T,v){return T(v)},Ye.useFormState=function(T,v,E){return z.H.useFormState(T,v,E)},Ye.useFormStatus=function(){return z.H.useHostTransitionStatus()},Ye.version="19.3.0",Ye}var oy;function mv(){if(oy)return lo.exports;oy=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),lo.exports=dv(),lo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function yv(){if(sy)return Lu;sy=1;var c=hv(),o=Do(),m=mv();function f(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function y(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function p(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function A(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function z(n){if(y(n)!==n)throw Error(f(188))}function x(n){var e=n.alternate;if(!e){if(e=y(n),e===null)throw Error(f(188));return e!==n?null:n}for(var t=n,l=e;;){var i=t.return;if(i===null)break;var u=i.alternate;if(u===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===t)return z(i),n;if(u===l)return z(i),e;u=u.sibling}throw Error(f(188))}if(t.return!==l.return)t=i,l=u;else{for(var r=!1,h=i.child;h;){if(h===t){r=!0,t=i,l=u;break}if(h===l){r=!0,l=i,t=u;break}h=h.sibling}if(!r){for(h=u.child;h;){if(h===t){r=!0,t=u,l=i;break}if(h===l){r=!0,l=u,t=i;break}h=h.sibling}if(!r)throw Error(f(189))}}if(t.alternate!==l)throw Error(f(190))}if(t.tag!==3)throw Error(f(188));return t.stateNode.current===t?n:e}function T(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=T(n),e!==null)return e;n=n.sibling}return null}function v(n,e,t,l,i,u){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,l,i,u)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&v(n.child,e,t,l,i,u))return!0;n=n.sibling}return!1}function E(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function I(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function Nn(n){var e=[null,null],t=E(n);return t===null||hn(e,n,t.child,{foundSelf:!1}),e}function hn(n,e,t,l){for(;t!==null;){if(t===e)l.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(l.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&hn(n,e,t.child,l))return!0;t=t.sibling}return!1}function gn(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(f(559))}}var Gn=null,Rn=null;function kn(n,e,t){return n===t?!0:n===e?(Gn=n,!0):!1}function Tn(n,e,t){return n===t?(Rn=n,!1):n===e?(Rn!==null&&(Gn=n),!0):!1}function Bn(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function qn(n,e,t){for(var l=0,i=n;i;i=t(i))l++;i=0;for(var u=e;u;u=t(u))i++;for(;0<l-i;)n=t(n),l--;for(;0<i-l;)e=t(e),i--;for(;l--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var ln=Object.assign,rn=Symbol.for("react.element"),mn=Symbol.for("react.transitional.element"),ye=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),Qn=Symbol.for("react.consumer"),Pn=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),an=Symbol.for("react.suspense"),en=Symbol.for("react.suspense_list"),_n=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),wn=Symbol.for("react.legacy_hidden"),Me=Symbol.for("react.memo_cache_sentinel"),b=Symbol.for("react.view_transition"),q=Symbol.for("react.recoverable"),$=Symbol.iterator;function un(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var An=Symbol.for("react.client.reference");function Sn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===An?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ie:return"Fragment";case Ne:return"Profiler";case re:return"StrictMode";case an:return"Suspense";case en:return"SuspenseList";case ge:return"Activity";case b:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case ye:return"Portal";case Pn:return n.displayName||"Context";case Qn:return(n._context.displayName||"Context")+".Consumer";case w:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _n:return e=n.displayName||null,e!==null?e:Sn(n.type)||"Memo";case On:e=n._payload,n=n._init;try{return Sn(n(e))}catch{}}return null}var cn=Array.isArray,W=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fn=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,He={pending:!1,data:null,method:null,action:null},at=[],Qe=-1;function Ae(n){return{current:n}}function Xn(n){0>Qe||(n.current=at[Qe],at[Qe]=null,Qe--)}function X(n,e){Qe++,at[Qe]=n.current,n.current=e}var vn=Ae(null),ne=Ae(null),Fn=Ae(null),Ue=Ae(null);function Fe(n,e){switch(X(Fn,e),X(ne,n),X(vn,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?hm(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=hm(e),n=dm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Xn(vn),X(vn,n)}function Ee(){Xn(vn),Xn(ne),Xn(Fn)}function Ut(n){var e=n.memoizedState;e!==null&&(Gi._currentValue=e.memoizedState,X(Ue,n)),e=vn.current;var t=dm(e,n.type);e!==t&&(X(ne,n),X(vn,t))}function bt(n){ne.current===n&&(Xn(vn),Xn(ne)),Ue.current===n&&(Xn(Ue),Gi._currentValue=He)}var zl,Pl;function a(n){if(zl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||"",Pl=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zl+n+Pl}var C=!1;function G(n,e){if(!n||C)return"";C=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(F){var N=F}Reflect.construct(n,[],L)}else{try{L.call()}catch(F){N=F}L=!1;try{var R=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),L=!0,new n}finally{L&&(R!==void 0?Object.defineProperty(n.prototype,"props",R):delete n.prototype.props)}}}else{try{throw Error()}catch(F){N=F}(L=n())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(F){if(F&&N&&typeof F.stack=="string")return[F.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),r=u[0],h=u[1];if(r&&h){var g=r.split(`
`),O=h.split(`
`);for(i=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;i<O.length&&!O[i].includes("DetermineComponentFrameRoot");)i++;if(l===g.length||i===O.length)for(l=g.length-1,i=O.length-1;1<=l&&0<=i&&g[l]!==O[i];)i--;for(;1<=l&&0<=i;l--,i--)if(g[l]!==O[i]){if(l!==1||i!==1)do if(l--,i--,0>i||g[l]!==O[i]){var Y=`
`+g[l].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=l&&0<=i);break}}}finally{C=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?a(t):""}function Z(n,e){switch(n.tag){case 26:case 27:case 5:return a(n.type);case 16:return a("Lazy");case 13:return n.child!==e&&e!==null?a("Suspense Fallback"):a("Suspense");case 19:return a("SuspenseList");case 0:case 15:return G(n.type,!1);case 11:return G(n.type.render,!1);case 1:return G(n.type,!0);case 31:return a("Activity");case 30:return a("ViewTransition");default:return""}}function B(n){try{var e="",t=null;do e+=Z(n,t),t=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var s=Object.prototype.hasOwnProperty,j=c.unstable_scheduleCallback,H=c.unstable_cancelCallback,V=c.unstable_shouldYield,K=c.unstable_requestPaint,Q=c.unstable_now,_=c.unstable_getCurrentPriorityLevel,k=c.unstable_ImmediatePriority,nn=c.unstable_UserBlockingPriority,sn=c.unstable_NormalPriority,dn=c.unstable_LowPriority,pn=c.unstable_IdlePriority,Mn=c.log,Nt=c.unstable_setDisableYieldValue,gt=null,ve=null;function nl(n){if(typeof Mn=="function"&&Nt(n),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(gt,n)}catch{}}var We=Math.clz32?Math.clz32:Tg,Ag=Math.log,Eg=Math.LN2;function Tg(n){return n>>>=0,n===0?32:31-(Ag(n)/Eg|0)|0}var Ku=256,Iu=262144,Ju=4194304;function Dl(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ku(n,e,t){var l=n.pendingLanes;if(l===0)return 0;var i=0,u=n.suspendedLanes,r=n.pingedLanes;n=n.warmLanes;var h=l&134217727;return h!==0?(l=h&~u,l!==0?i=Dl(l):(r&=h,r!==0?i=Dl(r):t||(t=h&~n,t!==0&&(i=Dl(t))))):(h=l&~u,h!==0?i=Dl(h):r!==0?i=Dl(r):t||(t=l&~n,t!==0&&(i=Dl(t)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,t=e&-e,u>=t||u===32&&(t&4194048)!==0)?e:i}function Ki(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function _o(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var l=31-We(t),i=1<<l;e|=n[l],t&=~i}return e}function Sg(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lo(){var n=Ju;return Ju<<=1,(Ju&62914560)===0&&(Ju=4194304),n}function br(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ii(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function xg(n,e,t,l,i,u){var r=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var h=n.entanglements,g=n.expirationTimes,O=n.hiddenUpdates;for(t=r&~t;0<t;){var Y=31-We(t),L=1<<Y;h[Y]=0,g[Y]=-1;var N=O[Y];if(N!==null)for(O[Y]=null,Y=0;Y<N.length;Y++){var R=N[Y];R!==null&&(R.lane&=-536870913)}t&=~L}l!==0&&Go(n,l,0),u!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=u&~(r&~e))}function Go(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-We(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function qo(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var l=31-We(t),i=1<<l;i&e|n[l]&e&&(n[l]|=e),t&=~i}}function Zo(n,e){var t=e&-e;return t=(t&42)!==0?1:Nr(t),(t&(n.suspendedLanes|e))!==0?0:t}function Nr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Mr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Qo(){var n=fn.p;return n!==0?n:(n=window.event,n===void 0?32:Fm(n.type))}function Vo(n,e){var t=fn.p;try{return fn.p=n,e()}finally{fn.p=t}}var _t=Math.random().toString(36).slice(2),Oe="__reactFiber$"+_t,Ve="__reactProps$"+_t,ni="__reactContainer$"+_t,Xo="__reactEvents$"+_t,bg="__reactListeners$"+_t,Ng="__reactHandles$"+_t,Ko="__reactResources$"+_t,Ji="__reactMarker$"+_t,Fu="__reactLoad$"+_t;function Wu(n){delete n[Oe],delete n[Ve],delete n[bg],delete n[Ng]}function Rl(n){var e;if(e=n[Oe])return e;for(var t=n.parentNode;t;){if(e=t[ni]||t[Oe]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Dm(n);n!==null;){if(t=n[Oe])return t;n=Dm(n)}return e}n=t,t=n.parentNode}return null}function ei(n){if(n=n[Oe]||n[ni]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function ki(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(f(33))}function ti(n){var e=n[Ko];return e||(e=n[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Te(n){n[Ji]=!0}function Io(n){n[Fu]=void 0}var Jo=new Set,ko={};function jl(n,e){li(n,e),li(n+"Capture",e)}function li(n,e){for(ko[n]=e,n=0;n<e.length;n++)Jo.add(e[n])}var Mg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fo={},Wo={};function Og(n){return s.call(Wo,n)?!0:s.call(Fo,n)?!1:Mg.test(n)?Wo[n]=!0:(Fo[n]=!0,!1)}var Ln=!1;function $o(){var n=Ln;return Ln=!1,n}function $u(n,e,t){if(Og(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function Pu(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Lt(n,e,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,l)}}function $e(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Po(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cg(n,e,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,u=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){t=""+r,u.call(this,r)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Or(n){if(!n._valueTracker){var e=Po(n)?"checked":"value";n._valueTracker=Cg(n,e,""+n[e])}}function ns(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return n&&(l=Po(n)?n.checked?"true":"false":n.value),n=l,n!==t?(e.setValue(n),!0):!1}var zg=/[\n"\\]/g;function rt(n){return n.replace(zg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Cr(n,e,t,l,i,u,r,h){n.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.type=r:n.removeAttribute("type"),e!=null?r==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+$e(e)):n.value!==""+$e(e)&&(n.value=""+$e(e)):r!=="submit"&&r!=="reset"||n.removeAttribute("value"),e!=null?r==="number"&&n.value==e?zr(n,$e(n.value)):zr(n,$e(e)):t!=null?zr(n,$e(t)):l!=null&&n.removeAttribute("value"),i==null&&u!=null&&(n.defaultChecked=!!u),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?n.name=""+$e(h):n.removeAttribute("name")}function es(n,e,t,l,i,u,r,h){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.type=u),e!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Or(n);return}t=t!=null?""+$e(t):"",e=e!=null?""+$e(e):t,h||e===n.value||(n.value=e),n.defaultValue=e}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=h?n.checked:!!l,n.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.name=r),Or(n)}function zr(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function ii(n,e,t,l){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&l&&(n[t].defaultSelected=!0)}else{for(t=""+$e(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,l&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function ts(n,e,t){if(e!=null&&(e=""+$e(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+$e(t):""}function ls(n,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(f(92));if(cn(l)){if(1<l.length)throw Error(f(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=$e(e),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),Or(n)}function ui(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Dg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function is(n,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,t):typeof t!="number"||t===0||Dg.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function us(n,e,t){if(e!=null&&typeof e!="object")throw Error(f(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="",Ln=!0);for(var i in e)l=e[i],e.hasOwnProperty(i)&&t[i]!==l&&(is(n,i,l),Ln=!0)}else for(var u in e)e.hasOwnProperty(u)&&is(n,u,e[u])}function Dr(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(n){return jg.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Mt(){}var Rr=null;function jr(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ai=null,ri=null;function as(n){var e=ei(n);if(e&&(n=e.stateNode)){var t=n[Ve]||null;n:switch(n=e.stateNode,e.type){case"input":if(Cr(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+rt(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==n&&l.form===n.form){var i=l[Ve]||null;if(!i)throw Error(f(90));Cr(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===n.form&&ns(l)}break n;case"textarea":ts(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&ii(n,!!t.multiple,e,!1)}}}var Yr=!1;function rs(n,e,t){if(Yr)return n(e,t);Yr=!0;try{var l=n(e);return l}finally{if(Yr=!1,(ai!==null||ri!==null)&&(nr(),ai&&(e=ai,n=ri,ri=ai=null,as(e),n)))for(e=0;e<n.length;e++)as(n[e])}}function Fi(n,e){var t=n.stateNode;if(t===null)return null;var l=t[Ve]||null;if(l===null)return null;t=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(f(231,e,typeof t));return t}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=!1;if(Gt)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Hr=!1}var el=null,wr=null,ea=null;function cs(){if(ea)return ea;var n,e=wr,t=e.length,l,i="value"in el?el.value:el.textContent,u=i.length;for(n=0;n<t&&e[n]===i[n];n++);var r=t-n;for(l=1;l<=r&&e[t-l]===i[u-l];l++);return ea=i.slice(n,1<l?1-l:void 0)}function ta(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function la(){return!0}function fs(){return!1}function _e(n){function e(t,l,i,u,r){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=u,this.target=r,this.currentTarget=null;for(var h in n)n.hasOwnProperty(h)&&(t=n[h],this[h]=t?t(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?la:fs,this.isPropagationStopped=fs,this}return ln(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=_e(tl),$i=ln({},tl,{view:0,detail:0}),Yg=_e($i),Br,Ur,Pi,ua=ln({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pi&&(Pi&&n.type==="mousemove"?(Br=n.screenX-Pi.screenX,Ur=n.screenY-Pi.screenY):Ur=Br=0,Pi=n),Br)},movementY:function(n){return"movementY"in n?n.movementY:Ur}}),os=_e(ua),Hg=ln({},ua,{dataTransfer:0}),wg=_e(Hg),Bg=ln({},$i,{relatedTarget:0}),_r=_e(Bg),Ug=ln({},tl,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=_e(Ug),Lg=ln({},tl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gg=_e(Lg),qg=ln({},tl,{data:0}),ss=_e(qg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Vg[n])?!!e[n]:!1}function Lr(){return Xg}var Kg=ln({},$i,{key:function(n){if(n.key){var e=Zg[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ta(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lr,charCode:function(n){return n.type==="keypress"?ta(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ta(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ig=_e(Kg),Jg=ln({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=_e(Jg),kg=ln({},tl,{submitter:0}),Fg=_e(kg),Wg=ln({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lr}),$g=_e(Wg),Pg=ln({},tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=_e(Pg),e0=ln({},ua,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=_e(e0),l0=ln({},tl,{newState:0,oldState:0,source:0}),i0=_e(l0),u0=[9,13,27,32],Gr=Gt&&"CompositionEvent"in window,nu=null;Gt&&"documentMode"in document&&(nu=document.documentMode);var a0=Gt&&"TextEvent"in window&&!nu,ds=Gt&&(!Gr||nu&&8<nu&&11>=nu),ms=" ",ys=!1;function gs(n,e){switch(n){case"keyup":return u0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ci=!1;function r0(n,e){switch(n){case"compositionend":return vs(e);case"keypress":return e.which!==32?null:(ys=!0,ms);case"textInput":return n=e.data,n===ms&&ys?null:n;default:return null}}function c0(n,e){if(ci)return n==="compositionend"||!Gr&&gs(n,e)?(n=cs(),ea=wr=el=null,ci=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ds&&e.locale!=="ko"?null:e.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ps(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!f0[n.type]:e==="textarea"}function As(n,e,t,l){ai?ri?ri.push(l):ri=[l]:ai=l,e=ar(e,"onChange"),0<e.length&&(t=new ia("onChange","change",null,t,l),n.push({event:t,listeners:e}))}var eu=null,tu=null;function o0(n){am(n,0)}function aa(n){var e=ki(n);if(ns(e))return n}function Es(n,e){if(n==="change")return e}var Ts=!1;if(Gt){var qr;if(Gt){var Zr="oninput"in document;if(!Zr){var Ss=document.createElement("div");Ss.setAttribute("oninput","return;"),Zr=typeof Ss.oninput=="function"}qr=Zr}else qr=!1;Ts=qr&&(!document.documentMode||9<document.documentMode)}function xs(){eu&&(eu.detachEvent("onpropertychange",bs),tu=eu=null)}function bs(n){if(n.propertyName==="value"&&aa(tu)){var e=[];As(e,tu,n,jr(n)),rs(o0,e)}}function s0(n,e,t){n==="focusin"?(xs(),eu=e,tu=t,eu.attachEvent("onpropertychange",bs)):n==="focusout"&&xs()}function h0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return aa(tu)}function d0(n,e){if(n==="click")return aa(e)}function m0(n,e){if(n==="input"||n==="change")return aa(e)}function y0(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Pe=typeof Object.is=="function"?Object.is:y0;function lu(n,e){if(Pe(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!s.call(e,i)||!Pe(n[i],e[i]))return!1}return!0}function Qr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ns(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ms(n,e){var t=Ns(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=e&&l>=e)return{node:t,offset:e-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Ns(t)}}function Os(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Os(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Cs(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Qr(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Qr(n.document)}return e}function Vr(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var g0=Gt&&"documentMode"in document&&11>=document.documentMode,fi=null,Xr=null,iu=null,Kr=!1;function zs(n,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Kr||fi==null||fi!==Qr(l)||(l=fi,"selectionStart"in l&&Vr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),iu&&lu(iu,l)||(iu=l,l=ar(Xr,"onSelect"),0<l.length&&(e=new ia("onSelect","select",null,e,t),n.push({event:e,listeners:l}),e.target=fi)))}function Yl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var oi={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionrun:Yl("Transition","TransitionRun"),transitionstart:Yl("Transition","TransitionStart"),transitioncancel:Yl("Transition","TransitionCancel"),transitionend:Yl("Transition","TransitionEnd")},Ir={},Ds={};Gt&&(Ds=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Hl(n){if(Ir[n])return Ir[n];if(!oi[n])return n;var e=oi[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ds)return Ir[n]=e[t];return n}var Rs=Hl("animationend"),js=Hl("animationiteration"),Ys=Hl("animationstart"),v0=Hl("transitionrun"),p0=Hl("transitionstart"),A0=Hl("transitioncancel"),Hs=Hl("transitionend"),ws=new Map,Jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jr.push("scrollEnd");function vt(n,e){ws.set(n,e),jl(e,[n])}var E0=0;function qt(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=Tt.identifierPrefix;var t=E0++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function Bs(n){if(n==null||typeof n=="string")return n;var e=null,t=Di;if(t!==null)for(var l=0;l<t.length;l++){var i=n[t[l]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??n.default}function Zt(n,e){return n=Bs(n),e=Bs(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var ra=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ct=[],si=0,kr=0;function ca(){for(var n=si,e=kr=si=0;e<n;){var t=ct[e];ct[e++]=null;var l=ct[e];ct[e++]=null;var i=ct[e];ct[e++]=null;var u=ct[e];if(ct[e++]=null,l!==null&&i!==null){var r=l.pending;r===null?i.next=i:(i.next=r.next,r.next=i),l.pending=i}u!==0&&Us(t,i,u)}}function fa(n,e,t,l){ct[si++]=n,ct[si++]=e,ct[si++]=t,ct[si++]=l,kr|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Fr(n,e,t,l){return fa(n,e,t,l),oa(n)}function wl(n,e){return fa(n,null,null,e),oa(n)}function Us(n,e,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var i=!1,u=n.return;u!==null;)u.childLanes|=t,l=u.alternate,l!==null&&(l.childLanes|=t),u.tag===22&&(n=u.stateNode,n===null||n._visibility&1||(i=!0)),n=u,u=u.return;return n.tag===3?(u=n.stateNode,i&&e!==null&&(i=31-We(t),n=u.hiddenUpdates,l=n[i],l===null?n[i]=[e]:l.push(e),e.lane=t|536870912),u):null}function oa(n){if(50<Mu)throw Mu=0,Pa=null,Error(f(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var hi={};function T0(n,e,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(n,e,t,l){return new T0(n,e,t,l)}function Wr(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Qt(n,e){var t=n.alternate;return t===null?(t=Xe(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function _s(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function sa(n,e,t,l,i,u){var r=0;if(l=n,typeof l=="function")Wr(l)&&(r=1);else if(typeof l=="string")r=k1(n,t,vn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(l){case ge:return n=Xe(31,t,e,i),n.elementType=ge,n.lanes=u,n;case ie:return Bl(t.children,i,u,e);case re:r=8,i|=24;break;case Ne:return n=Xe(12,t,e,i|2),n.elementType=Ne,n.lanes=u,n;case an:return n=Xe(13,t,e,i),n.elementType=an,n.lanes=u,n;case en:return n=Xe(19,t,e,i),n.elementType=en,n.lanes=u,n;case wn:case b:return n=i|32,n=Xe(30,t,e,n),n.elementType=b,n.lanes=u,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Pn:r=10;break n;case Qn:r=9;break n;case w:r=11;break n;case _n:r=14;break n;case On:r=16,l=null;break n}r=29,t=Error(f(130,n===null?"null":typeof n,"")),l=null}return e=Xe(r,t,e,i),e.elementType=n,e.type=l,e.lanes=u,e}function Bl(n,e,t,l){return n=Xe(7,n,l,e),n.lanes=t,n}function $r(n,e,t){return n=Xe(6,n,null,e),n.lanes=t,n}function Ls(n){var e=Xe(18,null,null,0);return e.stateNode=n,e}function Pr(n,e,t){return e=Xe(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Gs=new WeakMap;function ft(n,e){if(typeof n=="object"&&n!==null){var t=Gs.get(n);return t!==void 0?t:(e={value:n,source:e,stack:B(e)},Gs.set(n,e),e)}return{value:n,source:e,stack:B(e)}}var di=[],mi=0,ha=null,uu=0,ot=[],st=0,ll=null,Ot=1,Ct="";function Vt(n,e){di[mi++]=uu,di[mi++]=ha,ha=n,uu=e}function qs(n,e,t){ot[st++]=Ot,ot[st++]=Ct,ot[st++]=ll,ll=n;var l=Ot;n=Ct;var i=32-We(l)-1;l&=~(1<<i),t+=1;var u=32-We(e)+i;if(30<u){var r=i-i%5;u=(l&(1<<r)-1).toString(32),l>>=r,i-=r,Ot=1<<32-We(e)+i|t<<i|l,Ct=u+n}else Ot=1<<u|t<<i|l,Ct=n}function da(n){n.return!==null&&(Vt(n,1),qs(n,1,0))}function nc(n){for(;n===ha;)ha=di[--mi],di[mi]=null,uu=di[--mi],di[mi]=null;for(;n===ll;)ll=ot[--st],ot[st]=null,Ct=ot[--st],ot[st]=null,Ot=ot[--st],ot[st]=null}function Zs(n,e){ot[st++]=Ot,ot[st++]=Ct,ot[st++]=ll,Ot=e.id,Ct=e.overflow,ll=n}var Se=null,ee=null,Cn=!1,il=null,ht=!1,ec=Error(f(519));function ul(n){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw au(ft(e,n)),ec}function Qs(n){var e=n.stateNode,t=n.type,l=n.memoizedProps;switch(e[Oe]=n,e[Ve]=l,t){case"dialog":Dn("cancel",e),Dn("close",e);break;case"iframe":case"object":case"embed":Dn("load",e);break;case"video":case"audio":for(t=0;t<Cu.length;t++)Dn(Cu[t],e);break;case"source":Dn("error",e);break;case"img":case"image":case"link":Dn("error",e),Dn("load",e);break;case"details":Dn("toggle",e);break;case"input":Dn("invalid",e),es(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Dn("invalid",e);break;case"textarea":Dn("invalid",e),ls(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||om(e.textContent,t)?(l.popover!=null&&(Dn("beforetoggle",e),Dn("toggle",e)),l.onScroll!=null&&Dn("scroll",e),l.onScrollEnd!=null&&Dn("scrollend",e),l.onClick!=null&&(e.onclick=Mt),e=!0):e=!1,e||ul(n,!0)}function ma(n){for(Se=n.return;Se;)switch(Se.tag){case 5:case 31:case 13:ht=!1;return;case 27:case 3:ht=!0;return;default:Se=Se.return}}function yi(n){if(n!==Se)return!1;if(!Cn)return ma(n),Cn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||jf(n.type,n.memoizedProps)),t=!t),t&&ee&&ul(n),ma(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));ee=zm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));ee=zm(n)}else e===27?(e=ee,Tl(n.type)?(n=qf,qf=null,ee=n):ee=e):ee=Se?mt(n.stateNode.nextSibling):null;return!0}function Ul(){ee=Se=null,Cn=!1}function tc(){var n=il;return n!==null&&(Je===null?Je=n:Je.push.apply(Je,n),il=null),n}function au(n){il===null?il=[n]:il.push(n)}var lc=Ae(null),_l=null,Xt=null;function al(n,e,t){X(lc,e._currentValue),e._currentValue=t}function Kt(n){n._currentValue=lc.current,Xn(lc)}function ya(n,e,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===t)break;n=n.return}}function ic(n,e,t,l){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){var r=i.child;u=u.firstContext;n:for(;u!==null;){var h=u;u=i;for(var g=0;g<e.length;g++)if(h.context===e[g]){u.lanes|=t,h=u.alternate,h!==null&&(h.lanes|=t),ya(u.return,t,n),l||(r=null);break n}u=h.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(f(341));r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),ya(r,t,n),r=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),ya(i.return,t,n),r=i.child,r=r!==null?r.sibling:null):r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===n){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Ll(n,e,t,l){n=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(f(387));if(r=r.memoizedProps,r!==null){var h=i.type;Pe(i.pendingProps.value,r.value)||(n!==null?n.push(h):n=[h])}}else if(i===Ue.current){if(r=i.alternate,r===null)throw Error(f(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(Gi):n=[Gi])}i=i.return}return n!==null&&ic(e,n,t,l),e.flags|=262144,n!==null}function ga(n){for(n=n.firstContext;n!==null;){if(!Pe(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Gl(n){_l=n,Xt=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ce(n){return Vs(_l,n)}function va(n,e){return _l===null&&Gl(n),Vs(n,e)}function Vs(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Xt===null){if(n===null)throw Error(f(308));Xt=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Xt=Xt.next=e;return t}var S0=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},x0=c.unstable_scheduleCallback,b0=c.unstable_NormalPriority,se={$$typeof:Pn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uc(){return{controller:new S0,data:new Map,refCount:0}}function ru(n){n.refCount--,n.refCount===0&&x0(b0,function(){n.controller.abort()})}function Xs(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var l=e[n];t.indexOf(l)===-1&&t.push(l)}}}var cu=null;function N0(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var fu=null,ac=0,ql=0,gi=null;function M0(n,e){if(fu===null){var t=fu=[];ac=0,ql=xf(),gi={status:"pending",value:void 0,then:function(l){t.push(l)}}}return ac++,e.then(Ks,Ks),e}function Ks(){if(--ac===0&&(cu=null,fu!==null)){gi!==null&&(gi.status="fulfilled");var n=fu;fu=null,ql=0,gi=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function O0(n,e){var t=[],l={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(l.status="rejected",l.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),l}var Is=W.S;W.S=function(n,e){if(Ld=Q(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&M0(n,e),cu!==null)for(var t=Hi;t!==null;)Xs(t,cu),t=t.next;if(t=n.types,t!==null){for(var l=Hi;l!==null;)Xs(l,t),l=l.next;if(ql!==0){l=cu,l===null&&(l=cu=[]);for(var i=0;i<t.length;i++){var u=t[i];l.indexOf(u)===-1&&l.push(u)}}}Is!==null&&Is(n,e)};var Zl=Ae(null);function rc(){var n=Zl.current;return n!==null?n:$n.pooledCache}function pa(n,e){e===null?X(Zl,Zl.current):X(Zl,e.pool)}function Js(){var n=rc();return n===null?null:{parent:se._currentValue,pool:n}}var vi=Error(f(460)),cc=Error(f(474)),Aa=Error(f(542)),Ea={then:function(){}};function ks(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Fs(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Mt,Mt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,$s(n),n===void 0&&!("reason"in e)?Error(f(600)):n;default:if(typeof e.status=="string")e.then(Mt,Mt);else{if(n=$n,n!==null&&100<n.shellSuspendCounter)throw Error(f(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=l}},function(l){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,$s(n),n}throw Vl=e,vi}}function Ql(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Vl=t,vi):t}}var Vl=null;function Ws(){if(Vl===null)throw Error(f(459));var n=Vl;return Vl=null,n}function $s(n){if(n===vi||n===Aa)throw Error(f(483))}var pi=null,ou=0;function Ta(n){var e=ou;return ou+=1,pi===null&&(pi=[]),Fs(pi,n,e)}function rl(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Sa(n,e){throw e.$$typeof===rn?Error(f(525)):(n=Object.prototype.toString.call(e),Error(f(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Ps(n){function e(M,S){if(n){var D=M.deletions;D===null?(M.deletions=[S],M.flags|=16):D.push(S)}}function t(M,S){if(!n)return null;for(;S!==null;)e(M,S),S=S.sibling;return null}function l(M){for(var S=new Map;M!==null;)M.key===null?S.set(M.index,M):S.set(M.key,M),M=M.sibling;return S}function i(M,S){return M=Qt(M,S),M.index=0,M.sibling=null,M}function u(M,S,D){return M.index=D,n?(D=M.alternate,D!==null?(D=D.index,D<S?(M.flags|=2,S):D):(M.flags|=134217730,S)):(M.flags|=1048576,S)}function r(M){return n&&M.alternate===null&&(M.flags|=134217730),M}function h(M,S,D,U){return S===null||S.tag!==6?(S=$r(D,M.mode,U),S.return=M,S):(S=i(S,D),S.return=M,S)}function g(M,S,D,U){var P=D.type;return P===ie?(M=Y(M,S,D.props.children,U,D.key),rl(M,D),M):S!==null&&(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===On&&Ql(P)===S.type)?(S=i(S,D.props),rl(S,D),S.return=M,S):(S=sa(D.type,D.key,D.props,null,M.mode,U),rl(S,D),S.return=M,S)}function O(M,S,D,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==D.containerInfo||S.stateNode.implementation!==D.implementation?(S=Pr(D,M.mode,U),S.return=M,S):(S=i(S,D.children||[]),S.return=M,S)}function Y(M,S,D,U,P){return S===null||S.tag!==7?(S=Bl(D,M.mode,U,P),S.return=M,S):(S=i(S,D),S.return=M,S)}function L(M,S,D){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=$r(""+S,M.mode,D),S.return=M,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case mn:return D=sa(S.type,S.key,S.props,null,M.mode,D),rl(D,S),D.return=M,D;case ye:return S=Pr(S,M.mode,D),S.return=M,S;case On:return S=Ql(S),L(M,S,D)}if(cn(S)||un(S))return S=Bl(S,M.mode,D,null),S.return=M,S;if(typeof S.then=="function")return L(M,Ta(S),D);if(S.$$typeof===Pn)return L(M,va(M,S),D);Sa(M,S)}return null}function N(M,S,D,U){var P=S!==null?S.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return P!==null?null:h(M,S,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case mn:return D.key===P?g(M,S,D,U):null;case ye:return D.key===P?O(M,S,D,U):null;case On:return D=Ql(D),N(M,S,D,U)}if(cn(D)||un(D))return P!==null?null:Y(M,S,D,U,null);if(typeof D.then=="function")return N(M,S,Ta(D),U);if(D.$$typeof===Pn)return N(M,S,va(M,D),U);Sa(M,D)}return null}function R(M,S,D,U,P){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return M=M.get(D)||null,h(S,M,""+U,P);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case mn:return M=M.get(U.key===null?D:U.key)||null,g(S,M,U,P);case ye:return M=M.get(U.key===null?D:U.key)||null,O(S,M,U,P);case On:return U=Ql(U),R(M,S,D,U,P)}if(cn(U)||un(U))return M=M.get(D)||null,Y(S,M,U,P,null);if(typeof U.then=="function")return R(M,S,D,Ta(U),P);if(U.$$typeof===Pn)return R(M,S,D,va(S,U),P);Sa(S,U)}return null}function F(M,S,D,U){for(var P=null,Yn=null,on=S,yn=S=0,me=null;on!==null&&yn<D.length;yn++){on.index>yn?(me=on,on=null):me=on.sibling;var Un=N(M,on,D[yn],U);if(Un===null){on===null&&(on=me);break}n&&on&&Un.alternate===null&&e(M,on),S=u(Un,S,yn),Yn===null?P=Un:Yn.sibling=Un,Yn=Un,on=me}if(yn===D.length)return t(M,on),Cn&&Vt(M,yn),P;if(on===null){for(;yn<D.length;yn++)on=L(M,D[yn],U),on!==null&&(S=u(on,S,yn),Yn===null?P=on:Yn.sibling=on,Yn=on);return Cn&&Vt(M,yn),P}for(on=l(on);yn<D.length;yn++)me=R(on,M,yn,D[yn],U),me!==null&&(n&&(Un=me.alternate,Un!==null&&on.delete(Un.key===null?yn:Un.key)),S=u(me,S,yn),Yn===null?P=me:Yn.sibling=me,Yn=me);return n&&on.forEach(function(Ml){return e(M,Ml)}),Cn&&Vt(M,yn),P}function tn(M,S,D,U){if(D==null)throw Error(f(151));for(var P=null,Yn=null,on=S,yn=S=0,me=null,Un=D.next();on!==null&&!Un.done;yn++,Un=D.next()){on.index>yn?(me=on,on=null):me=on.sibling;var Ml=N(M,on,Un.value,U);if(Ml===null){on===null&&(on=me);break}n&&on&&Ml.alternate===null&&e(M,on),S=u(Ml,S,yn),Yn===null?P=Ml:Yn.sibling=Ml,Yn=Ml,on=me}if(Un.done)return t(M,on),Cn&&Vt(M,yn),P;if(on===null){for(;!Un.done;yn++,Un=D.next())Un=L(M,Un.value,U),Un!==null&&(S=u(Un,S,yn),Yn===null?P=Un:Yn.sibling=Un,Yn=Un);return Cn&&Vt(M,yn),P}for(on=l(on);!Un.done;yn++,Un=D.next())Un=R(on,M,yn,Un.value,U),Un!==null&&(n&&(me=Un.alternate,me!==null&&on.delete(me.key===null?yn:me.key)),S=u(Un,S,yn),Yn===null?P=Un:Yn.sibling=Un,Yn=Un);return n&&on.forEach(function(rv){return e(M,rv)}),Cn&&Vt(M,yn),P}function bn(M,S,D,U){if(typeof D=="object"&&D!==null&&D.type===ie&&D.key===null&&D.props.ref===void 0&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case mn:n:{for(var P=D.key;S!==null;){if(S.key===P){if(P=D.type,P===ie){if(S.tag===7){t(M,S.sibling),U=i(S,D.props.children),rl(U,D),U.return=M,M=U;break n}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===On&&Ql(P)===S.type){t(M,S.sibling),U=i(S,D.props),rl(U,D),U.return=M,M=U;break n}t(M,S);break}else e(M,S);S=S.sibling}D.type===ie?(U=Bl(D.props.children,M.mode,U,D.key),rl(U,D),U.return=M,M=U):(U=sa(D.type,D.key,D.props,null,M.mode,U),rl(U,D),U.return=M,M=U)}return r(M);case ye:n:{for(P=D.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===D.containerInfo&&S.stateNode.implementation===D.implementation){t(M,S.sibling),U=i(S,D.children||[]),U.return=M,M=U;break n}else{t(M,S);break}else e(M,S);S=S.sibling}U=Pr(D,M.mode,U),U.return=M,M=U}return r(M);case On:return D=Ql(D),bn(M,S,D,U)}if(cn(D))return F(M,S,D,U);if(un(D)){if(P=un(D),typeof P!="function")throw Error(f(150));return D=P.call(D),tn(M,S,D,U)}if(typeof D.then=="function")return bn(M,S,Ta(D),U);if(D.$$typeof===Pn)return bn(M,S,va(M,D),U);Sa(M,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,S!==null&&S.tag===6?(t(M,S.sibling),U=i(S,D),U.return=M,M=U):(t(M,S),U=$r(D,M.mode,U),U.return=M,M=U),r(M)):t(M,S)}return function(M,S,D,U){try{ou=0;var P=bn(M,S,D,U);return pi=null,P}catch(on){if(on===vi||on===Aa)throw on;var Yn=Xe(29,on,null,M.mode);return Yn.lanes=U,Yn.return=M,Yn}finally{}}}var Xl=Ps(!0),nh=Ps(!1),cl=!1;function fc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function fl(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ol(n,e,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Zn&2)!==0){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,e=oa(n),Us(n,null,t),e}return fa(n,l,e,t),oa(n)}function su(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,qo(n,t)}}function sc(n,e){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?i=u=r:u=u.next=r,t=t.next}while(t!==null);u===null?i=u=e:u=u.next=e}else i=u=e;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var hc=!1;function hu(){if(hc){var n=gi;if(n!==null)throw n}}function du(n,e,t,l){hc=!1;var i=n.updateQueue;cl=!1;var u=i.firstBaseUpdate,r=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var g=h,O=g.next;g.next=null,r===null?u=O:r.next=O,r=g;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,h=Y.lastBaseUpdate,h!==r&&(h===null?Y.firstBaseUpdate=O:h.next=O,Y.lastBaseUpdate=g))}if(u!==null){var L=i.baseState;r=0,Y=O=g=null,h=u;do{var N=h.lane&-536870913,R=N!==h.lane;if(R?(jn&N)===N:(l&N)===N){N!==0&&N===ql&&(hc=!0),Y!==null&&(Y=Y.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});n:{var F=n,tn=h;N=e;var bn=t;switch(tn.tag){case 1:if(F=tn.payload,typeof F=="function"){L=F.call(bn,L,N);break n}L=F;break n;case 3:F.flags=F.flags&-65537|128;case 0:if(F=tn.payload,N=typeof F=="function"?F.call(bn,L,N):F,N==null)break n;L=ln({},L,N);break n;case 2:cl=!0}}N=h.callback,N!==null&&(n.flags|=64,R&&(n.flags|=8192),R=i.callbacks,R===null?i.callbacks=[N]:R.push(N))}else R={lane:N,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Y===null?(O=Y=R,g=L):Y=Y.next=R,r|=N;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;R=h,h=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);Y===null&&(g=L),i.baseState=g,i.firstBaseUpdate=O,i.lastBaseUpdate=Y,u===null&&(i.shared.lanes=0),vl|=r,n.lanes=r,n.memoizedState=L}}function eh(n,e){if(typeof n!="function")throw Error(f(191,n));n.call(e)}function th(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)eh(t[n],e)}var sl=Ae(null),xa=Ae(0);function lh(n,e){n=Wt,X(xa,n),X(sl,e),Wt=n|e.baseLanes}function dc(){X(xa,Wt),X(sl,sl.current)}function mc(){Wt=xa.current,Xn(sl),Xn(xa)}var ze=Ae(null),we=null;function hl(n){var e=n.alternate;X(De,De.current&1),X(ze,n),we===null&&(e===null||sl.current!==null||e.memoizedState!==null)&&(we=n)}function yc(n){X(De,De.current),X(ze,n),we===null&&(we=n)}function ih(n){n.tag===22?(X(De,De.current),X(ze,n),we===null&&(we=n)):dl()}function dl(){X(De,De.current),X(ze,ze.current)}function nt(n){Xn(ze),we===n&&(we=null),Xn(De)}var De=Ae(0);function mu(n,e){X(ze,ze.current),X(De,e)}function gc(n){Xn(De),Xn(ze),we===n&&(we=null)}function ba(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Lf(t)||Gf(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var It=0,xn=null,Wn=null,he=null,Na=!1,Ai=!1,Kl=!1,Ma=0,yu=0,Ei=null,C0=0;function ce(){throw Error(f(321))}function vc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Pe(n[t],e[t]))return!1;return!0}function pc(n,e,t,l,i,u){return It=u,xn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,W.H=n===null||n.memoizedState===null?qh:Zh,Kl=!1,u=t(l,i),Kl=!1,Ai&&(u=ah(e,t,l,i)),uh(n),u}function uh(n){W.H=Ya;var e=Wn!==null&&Wn.next!==null;if(It=0,he=Wn=xn=null,Na=!1,yu=0,Ei=null,e)throw Error(f(300));n===null||de||(n=n.dependencies,n!==null&&ga(n)&&(de=!0))}function ah(n,e,t,l){xn=n;var i=0;do{if(Ai&&(Ei=null),yu=0,Ai=!1,25<=i)throw Error(f(301));if(i+=1,he=Wn=null,n.updateQueue!=null){var u=n.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}W.H=B0,u=e(t,l)}while(Ai);return u}function z0(){var n=W.H,e=n.useState()[0];return e=typeof e.then=="function"?gu(e):e,n=n.useState()[0],(Wn!==null?Wn.memoizedState:null)!==n&&(xn.flags|=1024),e}function Ac(){var n=Ma!==0;return Ma=0,n}function Ec(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Tc(n){if(Na){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Na=!1}It=0,he=Wn=xn=null,Ai=!1,yu=Ma=0,Ei=null}function Le(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?xn.memoizedState=he=n:he=he.next=n,he}function oe(){if(Wn===null){var n=xn.alternate;n=n!==null?n.memoizedState:null}else n=Wn.next;var e=he===null?xn.memoizedState:he.next;if(e!==null)he=e,Wn=n;else{if(n===null)throw xn.alternate===null?Error(f(467)):Error(f(310));Wn=n,n={memoizedState:Wn.memoizedState,baseState:Wn.baseState,baseQueue:Wn.baseQueue,queue:Wn.queue,next:null},he===null?xn.memoizedState=he=n:he=he.next=n}return he}function Oa(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gu(n){var e=yu;return yu+=1,Ei===null&&(Ei=[]),n=Fs(Ei,n,e),e=xn,(he===null?e.memoizedState:he.next)===null&&(e=e.alternate,W.H=e===null||e.memoizedState===null?qh:Zh),n}function Ca(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return gu(n);if(n.$$typeof===q)return;if(n.$$typeof===Pn)return Ce(n)}throw Error(f(438,String(n)))}function Sc(n){var e=null,t=xn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=xn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Oa(),xn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),l=0;l<n;l++)t[l]=Me;return e.index++,t}function Jt(n,e){return typeof e=="function"?e(n):e}function za(n){var e=oe();return xc(e,Wn,n)}function xc(n,e,t){var l=n.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var i=n.baseQueue,u=l.pending;if(u!==null){if(i!==null){var r=i.next;i.next=u.next,u.next=r}e.baseQueue=i=u,l.pending=null}if(u=n.baseState,i===null)n.memoizedState=u;else{e=i.next;var h=r=null,g=null,O=e,Y=!1;do{var L=O.lane&-536870913;if(L!==O.lane?(jn&L)===L:(It&L)===L){var N=O.revertLane;if(N===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),L===ql&&(Y=!0);else if((It&N)===N){O=O.next,N===ql&&(Y=!0);continue}else L={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},g===null?(h=g=L,r=u):g=g.next=L,xn.lanes|=N,vl|=N;L=O.action,Kl&&t(u,L),u=O.hasEagerState?O.eagerState:t(u,L)}else N={lane:L,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},g===null?(h=g=N,r=u):g=g.next=N,xn.lanes|=L,vl|=L;O=O.next}while(O!==null&&O!==e);if(g===null?r=u:g.next=h,!Pe(u,n.memoizedState)&&(de=!0,Y&&(t=gi,t!==null)))throw t;n.memoizedState=u,n.baseState=r,n.baseQueue=g,l.lastRenderedState=u}return i===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function bc(n){var e=oe(),t=e.queue;if(t===null)throw Error(f(311));t.lastRenderedReducer=n;var l=t.dispatch,i=t.pending,u=e.memoizedState;if(i!==null){t.pending=null;var r=i=i.next;do u=n(u,r.action),r=r.next;while(r!==i);Pe(u,e.memoizedState)||(de=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),t.lastRenderedState=u}return[u,l]}function rh(n,e,t){var l=xn,i=oe(),u=Cn;if(u){if(t===void 0)throw Error(f(407));t=t()}else t=e();var r=!Pe((Wn||i).memoizedState,t);if(r&&(i.memoizedState=t,de=!0),i=i.queue,Oc(oh.bind(null,l,i,n),[n]),n=i.getSnapshot!==e||r||he!==null&&(he.memoizedState.tag&1)!==0,Ti(n?9:8,{destroy:void 0},fh.bind(null,l,i,t,e),null),n){if(l.flags|=2048,$n===null)throw Error(f(349));u||(It&127)!==0||ch(l,e,t)}return t}function ch(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=xn.updateQueue,e===null?(e=Oa(),xn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function fh(n,e,t,l){e.value=t,e.getSnapshot=l,sh(e)&&hh(n)}function oh(n,e,t){return t(function(){sh(e)&&hh(n)})}function sh(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Pe(n,t)}catch{return!0}}function hh(n){var e=wl(n,2);e!==null&&ke(e,n,2)}function Nc(n){var e=Le();if(typeof n=="function"){var t=n;if(n=t(),Kl){nl(!0);try{t()}finally{nl(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:n},e}function dh(n,e,t,l){return n.baseState=t,xc(n,Wn,typeof l=="function"?l:Jt)}function D0(n,e,t,l,i){if(ja(n))throw Error(f(485));if(n=e.action,n!==null){var u={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){u.listeners.push(r)}};W.T!==null?t(!0):u.isTransition=!1,l(u),t=e.pending,t===null?(u.next=e.pending=u,mh(e,u)):(u.next=t.next,e.pending=t.next=u)}}function mh(n,e){var t=e.action,l=e.payload,i=n.state;if(e.isTransition){var u=W.T,r={};r.types=u!==null?u.types:null,W.T=r;try{var h=t(i,l),g=W.S;g!==null&&g(r,h),yh(n,e,h)}catch(O){Mc(n,e,O)}finally{u!==null&&r.types!==null&&(u.types=r.types),W.T=u}}else try{u=t(i,l),yh(n,e,u)}catch(O){Mc(n,e,O)}}function yh(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){gh(n,e,l)},function(l){return Mc(n,e,l)}):gh(n,e,t)}function gh(n,e,t){e.status="fulfilled",e.value=t,vh(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,mh(n,t)))}function Mc(n,e,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,vh(e),e=e.next;while(e!==l)}n.action=null}function vh(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function ph(n,e){return e}function Ah(n,e){if(Cn){var t=$n.formState;if(t!==null){n:{var l=xn;if(Cn){if(ee){e:{for(var i=ee,u=ht;i.nodeType!==8;){if(!u){i=null;break e}if(i=mt(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){ee=mt(i.nextSibling),l=i.data==="F!";break n}}ul(l)}l=!1}l&&(e=t[0])}}return t=Le(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ph,lastRenderedState:e},t.queue=l,t=_h.bind(null,xn,l),l.dispatch=t,l=Nc(!1),u=jc.bind(null,xn,!1,l.queue),l=Le(),i={state:e,dispatch:null,action:n,pending:null},l.queue=i,t=D0.bind(null,xn,i,u,t),i.dispatch=t,l.memoizedState=n,[e,t,!1]}function Eh(n){var e=oe();return Th(e,Wn,n)}function Th(n,e,t){if(e=xc(n,e,ph)[0],n=za(Jt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=gu(e)}catch(r){throw r===vi?Aa:r}else l=e;e=oe();var i=e.queue,u=i.dispatch;return t!==e.memoizedState&&(xn.flags|=2048,Ti(9,{destroy:void 0},R0.bind(null,i,t),null)),[l,u,n]}function R0(n,e){n.action=e}function Sh(n){var e=oe(),t=Wn;if(t!==null)return Th(e,t,n);oe(),e=e.memoizedState,t=oe();var l=t.queue.dispatch;return t.memoizedState=n,[e,l,!1]}function Ti(n,e,t,l){return n={tag:n,create:t,deps:l,inst:e,next:null},e=xn.updateQueue,e===null&&(e=Oa(),xn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,e.lastEffect=n),n}function xh(){return oe().memoizedState}function Da(n,e,t,l){var i=Le();xn.flags|=n,i.memoizedState=Ti(1|e,{destroy:void 0},t,l===void 0?null:l)}function Ra(n,e,t,l){var i=oe();l=l===void 0?null:l;var u=i.memoizedState.inst;Wn!==null&&l!==null&&vc(l,Wn.memoizedState.deps)?i.memoizedState=Ti(e,u,t,l):(xn.flags|=n,i.memoizedState=Ti(1|e,u,t,l))}function bh(n,e){Da(8390656,8,n,e)}function Oc(n,e){Ra(2048,8,n,e)}function j0(n){xn.flags|=4;var e=xn.updateQueue;if(e===null)e=Oa(),xn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Nh(n){var e=oe().memoizedState;return j0({ref:e,nextImpl:n}),function(){if((Zn&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function Mh(n,e){return Ra(4,2,n,e)}function Oh(n,e){return Ra(4,4,n,e)}function Ch(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function zh(n,e,t){t=t!=null?t.concat([n]):null,Ra(4,4,Ch.bind(null,e,n),t)}function Cc(){}function Dh(n,e){var t=oe();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&vc(e,l[1])?l[0]:(t.memoizedState=[n,e],n)}function Rh(n,e){var t=oe();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&vc(e,l[1]))return l[0];if(l=n(),Kl){nl(!0);try{n()}finally{nl(!1)}}return t.memoizedState=[l,e],l}function zc(n,e,t){return t===void 0||(It&1073741824)!==0&&(jn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=qd(),xn.lanes|=n,vl|=n,t)}function jh(n,e,t,l){return Pe(t,e)?t:sl.current!==null?(n=zc(n,t,l),Pe(n,e)||(de=!0),n):(It&106)===0||(It&1073741824)!==0&&(jn&261930)===0?(de=!0,n.memoizedState=t):(n=qd(),xn.lanes|=n,vl|=n,e)}function Yh(n,e,t,l,i){var u=fn.p;fn.p=u!==0&&8>u?u:8;var r=W.T,h={};h.types=r!==null?r.types:null,W.T=h,jc(n,!1,e,t);try{var g=i(),O=W.S;if(O!==null&&O(h,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var Y=O0(g,l);vu(n,e,Y,it(n))}else vu(n,e,l,it(n))}catch(L){vu(n,e,{then:function(){},status:"rejected",reason:L},it())}finally{fn.p=u,r!==null&&h.types!==null&&(r.types=h.types),W.T=r}}function Y0(){}function Dc(n,e,t,l){if(n.tag!==5)throw Error(f(476));var i=Hh(n).queue;Yh(n,i,e,He,t===null?Y0:function(){return wh(n),t(l)})}function Hh(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:He,baseState:He,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:He},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function wh(n){var e=Hh(n);e.next===null&&(e=n.alternate.memoizedState),vu(n,e.next.queue,{},it())}function Rc(){return Ce(Gi)}function Bh(){return oe().memoizedState}function Uh(){return oe().memoizedState}function H0(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=it();n=fl(t);var l=ol(e,n,t);l!==null&&(ke(l,e,t),su(l,e,t)),e={cache:uc()},n.payload=e;return}e=e.return}}function w0(n,e,t){var l=it();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ja(n)?Lh(e,t):(t=Fr(n,e,t,l),t!==null&&(ke(t,n,l),Gh(t,e,l)))}function _h(n,e,t){var l=it();vu(n,e,t,l)}function vu(n,e,t,l){var i={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ja(n))Lh(e,i);else{var u=n.alternate;if(n.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var r=e.lastRenderedState,h=u(r,t);if(i.hasEagerState=!0,i.eagerState=h,Pe(h,r))return fa(n,e,i,0),$n===null&&ca(),!1}catch{}finally{}if(t=Fr(n,e,i,l),t!==null)return ke(t,n,l),Gh(t,e,l),!0}return!1}function jc(n,e,t,l){if(l={lane:2,revertLane:xf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ja(n)){if(e)throw Error(f(479))}else e=Fr(n,t,l,2),e!==null&&ke(e,n,2)}function ja(n){var e=n.alternate;return n===xn||e!==null&&e===xn}function Lh(n,e){Ai=Na=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Gh(n,e,t){if((t&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,qo(n,t)}}var Ya={readContext:Ce,use:Ca,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce,useEffectEvent:ce},qh={readContext:Ce,use:Ca,useCallback:function(n,e){return Le().memoizedState=[n,e===void 0?null:e],n},useContext:Ce,useEffect:bh,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,Da(4194308,4,Ch.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Da(4194308,4,n,e)},useInsertionEffect:function(n,e){Da(4,2,n,e)},useMemo:function(n,e){var t=Le();e=e===void 0?null:e;var l=n();if(Kl){nl(!0);try{n()}finally{nl(!1)}}return t.memoizedState=[l,e],l},useReducer:function(n,e,t){var l=Le();if(t!==void 0){var i=t(e);if(Kl){nl(!0);try{t(e)}finally{nl(!1)}}}else i=e;return l.memoizedState=l.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=w0.bind(null,xn,n),[l.memoizedState,n]},useRef:function(n){var e=Le();return n={current:n},e.memoizedState=n},useState:function(n){n=Nc(n);var e=n.queue,t=_h.bind(null,xn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:Cc,useDeferredValue:function(n,e){var t=Le();return zc(t,n,e)},useTransition:function(){var n=Nc(!1);return n=Yh.bind(null,xn,n.queue,!0,!1),Le().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var l=xn,i=Le();if(Cn){if(t===void 0)throw Error(f(407));t=t()}else{if(t=e(),$n===null)throw Error(f(349));(jn&127)!==0||ch(l,e,t)}i.memoizedState=t;var u={value:t,getSnapshot:e};return i.queue=u,bh(oh.bind(null,l,u,n),[n]),l.flags|=2048,Ti(9,{destroy:void 0},fh.bind(null,l,u,t,e),null),t},useId:function(){var n=Le(),e=$n.identifierPrefix;if(Cn){var t=Ct,l=Ot;t=(l&~(1<<32-We(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=Ma++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=C0++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Rc,useFormState:Ah,useActionState:Ah,useOptimistic:function(n){var e=Le();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=jc.bind(null,xn,!0,t),t.dispatch=e,[n,e]},useMemoCache:Sc,useCacheRefresh:function(){return Le().memoizedState=H0.bind(null,xn)},useEffectEvent:function(n){var e=Le(),t={impl:n};return e.memoizedState=t,function(){if((Zn&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}},Zh={readContext:Ce,use:Ca,useCallback:Dh,useContext:Ce,useEffect:Oc,useImperativeHandle:zh,useInsertionEffect:Mh,useLayoutEffect:Oh,useMemo:Rh,useReducer:za,useRef:xh,useState:function(){return za(Jt)},useDebugValue:Cc,useDeferredValue:function(n,e){var t=oe();return jh(t,Wn.memoizedState,n,e)},useTransition:function(){var n=za(Jt)[0],e=oe().memoizedState;return[typeof n=="boolean"?n:gu(n),e]},useSyncExternalStore:rh,useId:Bh,useHostTransitionStatus:Rc,useFormState:Eh,useActionState:Eh,useOptimistic:function(n,e){var t=oe();return dh(t,Wn,n,e)},useMemoCache:Sc,useCacheRefresh:Uh,useEffectEvent:Nh},B0={readContext:Ce,use:Ca,useCallback:Dh,useContext:Ce,useEffect:Oc,useImperativeHandle:zh,useInsertionEffect:Mh,useLayoutEffect:Oh,useMemo:Rh,useReducer:bc,useRef:xh,useState:function(){return bc(Jt)},useDebugValue:Cc,useDeferredValue:function(n,e){var t=oe();return Wn===null?zc(t,n,e):jh(t,Wn.memoizedState,n,e)},useTransition:function(){var n=bc(Jt)[0],e=oe().memoizedState;return[typeof n=="boolean"?n:gu(n),e]},useSyncExternalStore:rh,useId:Bh,useHostTransitionStatus:Rc,useFormState:Sh,useActionState:Sh,useOptimistic:function(n,e){var t=oe();return Wn!==null?dh(t,Wn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:Sc,useCacheRefresh:Uh,useEffectEvent:Nh};function Yc(n,e,t,l){e=n.memoizedState,t=t(l,e),t=t==null?e:ln({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Hc={enqueueSetState:function(n,e,t){n=n._reactInternals;var l=it(),i=fl(l);i.payload=e,t!=null&&(i.callback=t),e=ol(n,i,l),e!==null&&(ke(e,n,l),su(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var l=it(),i=fl(l);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=ol(n,i,l),e!==null&&(ke(e,n,l),su(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=it(),l=fl(t);l.tag=2,e!=null&&(l.callback=e),e=ol(n,l,t),e!==null&&(ke(e,n,t),su(e,n,t))}};function Qh(n,e,t,l,i,u,r){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,u,r):e.prototype&&e.prototype.isPureReactComponent?!lu(t,l)||!lu(i,u):!0}function Vh(n,e,t,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==n&&Hc.enqueueReplaceState(e,e.state,null)}function Il(n,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(n=n.defaultProps){t===e&&(t=ln({},t));for(var i in n)t[i]===void 0&&(t[i]=n[i])}return t}function Xh(n){ra(n)}function Kh(n){console.error(n)}function Ih(n){ra(n)}function Ha(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Jh(n,e,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function wc(n,e,t){return t=fl(t),t.tag=3,t.payload={element:null},t.callback=function(){Ha(n,e)},t}function kh(n){return n=fl(n),n.tag=3,n}function Fh(n,e,t,l){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var u=l.value;n.payload=function(){return i(u)},n.callback=function(){Jh(e,t,l)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Jh(e,t,l),typeof i!="function"&&(pl===null?pl=new Set([this]):pl.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function U0(n,e,t,l,i){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&Ll(e,t,i,!0),t=ze.current,t!==null){switch(t.tag){case 31:case 13:case 19:return we===null?er():t.alternate===null&&fe===0&&(fe=3),t.flags&=-257,t.flags|=65536,t.lanes=i,l===Ea?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Ef(n,l,i)),!1;case 22:return t.flags|=65536,l===Ea?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Ef(n,l,i)),!1}throw Error(f(435,t.tag))}return Ef(n,l,i),er(),!1}if(Cn)return e=ze.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,l!==ec&&(n=Error(f(422),{cause:l}),au(ft(n,t)))):(l!==ec&&(e=Error(f(423),{cause:l}),au(ft(e,t))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,l=ft(l,t),i=wc(n.stateNode,l,i),sc(n,i),fe!==4&&(fe=2)),!1;var u=Error(f(520),{cause:l});if(u=ft(u,t),Nu===null?Nu=[u]:Nu.push(u),fe!==4&&(fe=2),e===null)return!0;l=ft(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=i&-i,t.lanes|=n,n=wc(t.stateNode,l,n),sc(t,n),!1;case 1:if(e=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(pl===null||!pl.has(u))))return t.flags|=65536,i&=-i,t.lanes|=i,i=kh(i),Fh(i,n,t,l),sc(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var Bc=Error(f(461)),de=!1;function pe(n,e,t,l){e.child=n===null?nh(e,null,t,l):Xl(e,n.child,t,l)}function Wh(n,e,t,l,i){t=t.render;var u=e.ref;if("ref"in l){var r={};for(var h in l)h!=="ref"&&(r[h]=l[h])}else r=l;return Gl(e),l=pc(n,e,t,r,u,i),h=Ac(),n!==null&&!de?(Ec(n,e,i),kt(n,e,i)):(Cn&&h&&da(e),e.flags|=1,pe(n,e,l,i),e.child)}function $h(n,e,t,l,i){if(n===null){var u=t.type;return typeof u=="function"&&!Wr(u)&&u.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=u,Ph(n,e,u,l,i)):(n=sa(t.type,null,l,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(u=n.child,!Vc(n,i)){var r=u.memoizedProps;if(t=t.compare,t=t!==null?t:lu,t(r,l)&&n.ref===e.ref)return kt(n,e,i)}return e.flags|=1,n=Qt(u,l),n.ref=e.ref,n.return=e,e.child=n}function Ph(n,e,t,l,i){if(n!==null){var u=n.memoizedProps;if(lu(u,l)&&n.ref===e.ref)if(de=!1,e.pendingProps=l=u,Vc(n,i))(n.flags&131072)!==0&&(de=!0);else return e.lanes=n.lanes,kt(n,e,i)}return Uc(n,e,t,l,i)}function nd(n,e,t,l){var i=l.children,u=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,n!==null){for(l=e.child=n.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~u}else l=0,e.child=null;return ed(n,e,u,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&pa(e,u!==null?u.cachePool:null),u!==null?lh(e,u):dc(),ih(e);else return l=e.lanes=536870912,ed(n,e,u!==null?u.baseLanes|t:t,t,l)}else u!==null?(pa(e,u.cachePool),lh(e,u),dl(),e.memoizedState=null):(n!==null&&pa(e,null),dc(),dl());return pe(n,e,i,t),e.child}function pu(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ed(n,e,t,l,i){var u=rc();return u=u===null?null:{parent:se._currentValue,pool:u},e.memoizedState={baseLanes:t,cachePool:u},n!==null&&pa(e,null),dc(),ih(e),n!==null&&Ll(n,e,l,!0),e.childLanes=i,null}function wa(n,e){return e=Ba({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function td(n,e,t){return Xl(e,n.child,null,t),n=wa(e,e.pendingProps),n.flags|=2,nt(e),e.memoizedState=null,n}function _0(n,e,t){var l=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Cn){if(l.mode==="hidden")return n=wa(e,l),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},pu(null,n);if(yc(e),(n=ee)?(n=Cm(n,ht),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ll!==null?{id:Ot,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},t=Ls(n),t.return=e,e.child=t,Se=e,ee=null)):n=null,n===null)throw ul(e);return e.lanes=536870912,null}return wa(e,l)}var u=n.memoizedState;if(u!==null){var r=u.dehydrated;if(yc(e),i)if(e.flags&256)e.flags&=-257,e=td(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(f(558));else if(de||Ll(n,e,t,!1),i=(t&n.childLanes)!==0,de||i){if(sl.current===null){if(l=$n,l!==null&&(r=Zo(l,t),r!==0&&r!==u.retryLane))throw u.retryLane=r,wl(n,r),ke(l,n,r),Bc;er()}e=td(n,e,t)}else n=u.treeContext,ee=mt(r.nextSibling),Se=e,Cn=!0,il=null,ht=!1,n!==null&&Zs(e,n),e=wa(e,l),e.flags|=134221824;return e}return n=Qt(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Si(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(f(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Uc(n,e,t,l,i){return Gl(e),t=pc(n,e,t,l,void 0,i),l=Ac(),n!==null&&!de?(Ec(n,e,i),kt(n,e,i)):(Cn&&l&&da(e),e.flags|=1,pe(n,e,t,i),e.child)}function ld(n,e,t,l,i,u){return Gl(e),e.updateQueue=null,t=ah(e,l,t,i),uh(n),l=Ac(),n!==null&&!de?(Ec(n,e,u),kt(n,e,u)):(Cn&&l&&da(e),e.flags|=1,pe(n,e,t,u),e.child)}function id(n,e,t,l,i){if(Gl(e),e.stateNode===null){var u=hi,r=t.contextType;typeof r=="object"&&r!==null&&(u=Ce(r)),u=new t(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Hc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={},fc(e),r=t.contextType,u.context=typeof r=="object"&&r!==null?Ce(r):hi,u.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Yc(e,t,r,l),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Hc.enqueueReplaceState(u,u.state,null),du(e,l,u,i),hu(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){u=e.stateNode;var h=e.memoizedProps,g=Il(t,h);u.props=g;var O=u.context,Y=t.contextType;r=hi,typeof Y=="object"&&Y!==null&&(r=Ce(Y));var L=t.getDerivedStateFromProps;Y=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,Y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h||O!==r)&&Vh(e,u,l,r),cl=!1;var N=e.memoizedState;u.state=N,du(e,l,u,i),hu(),O=e.memoizedState,h||N!==O||cl?(typeof L=="function"&&(Yc(e,t,L,l),O=e.memoizedState),(g=cl||Qh(e,t,g,l,N,O,r))?(Y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=O),u.props=l,u.state=O,u.context=r,l=g):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{u=e.stateNode,oc(n,e),r=e.memoizedProps,Y=Il(t,r),u.props=Y,L=e.pendingProps,N=u.context,O=t.contextType,g=hi,typeof O=="object"&&O!==null&&(g=Ce(O)),h=t.getDerivedStateFromProps,(O=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(r!==L||N!==g)&&Vh(e,u,l,g),cl=!1,N=e.memoizedState,u.state=N,du(e,l,u,i),hu();var R=e.memoizedState;r!==L||N!==R||cl||n!==null&&n.dependencies!==null&&ga(n.dependencies)?(typeof h=="function"&&(Yc(e,t,h,l),R=e.memoizedState),(Y=cl||Qh(e,t,Y,l,N,R,g)||n!==null&&n.dependencies!==null&&ga(n.dependencies))?(O||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,R,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,R,g)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||r===n.memoizedProps&&N===n.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&N===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=R),u.props=l,u.state=R,u.context=g,l=Y):(typeof u.componentDidUpdate!="function"||r===n.memoizedProps&&N===n.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&N===n.memoizedState||(e.flags|=1024),l=!1)}return u=l,Si(n,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,n!==null&&l?(e.child=Xl(e,n.child,null,i),e.child=Xl(e,null,t,i)):pe(n,e,t,i),e.memoizedState=u.state,n=e.child):n=kt(n,e,i),n}function ud(n,e,t,l){return Ul(),e.flags|=256,pe(n,e,t,l),e.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lc(n){return{baseLanes:n,cachePool:Js()}}function Gc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=lt),n}function ad(n,e,t){var l=e.pendingProps,i=!1,u=(e.flags&128)!==0,r;if((r=u)||(r=n!==null&&n.memoizedState===null?!1:(De.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,n===null){if(Cn){if(i?hl(e):dl(),(n=ee)?(n=Cm(n,ht),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ll!==null?{id:Ot,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},t=Ls(n),t.return=e,e.child=t,Se=e,ee=null)):n=null,n===null)throw ul(e);return Gf(n)?e.lanes=32:e.lanes=536870912,null}return u=l.children,l=l.fallback,i?(dl(),i=e.mode,u=Ba({mode:"hidden",children:u},i),l=Bl(l,i,t,null),u.return=e,l.return=e,u.sibling=l,e.child=u,l=e.child,l.memoizedState=Lc(t),l.childLanes=Gc(n,r,t),e.memoizedState=_c,pu(null,l)):(hl(e),qc(e,u))}var h=n.memoizedState;if(h!==null){var g=h.dehydrated;if(g!==null)return L0(n,e,u,r,l,g,h,t)}return i?(dl(),i=l.fallback,u=e.mode,h=n.child,g=h.sibling,l=Qt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&1206910976,g!==null?i=Qt(g,i):(i=Bl(i,u,t,null),i.flags|=2),i.return=e,l.return=e,l.sibling=i,e.child=l,pu(null,l),l=e.child,i=n.child.memoizedState,i===null?i=Lc(t):(u=i.cachePool,u!==null?(h=se._currentValue,u=u.parent!==h?{parent:h,pool:h}:u):u=Js(),i={baseLanes:i.baseLanes|t,cachePool:u}),l.memoizedState=i,l.childLanes=Gc(n,r,t),e.memoizedState=_c,pu(n.child,l)):(hl(e),t=n.child,n=t.sibling,t=Qt(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,n!==null&&(r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)),e.child=t,e.memoizedState=null,t)}function qc(n,e){return e=Ba({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Ba(n,e){return n=Xe(22,n,null,e),n.lanes=0,n}function Ua(n,e,t){return Xl(e,n.child,null,t),n=qc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function L0(n,e,t,l,i,u,r,h){if(t)return e.flags&256?(hl(e),e.flags&=-257,Ua(n,e,h)):e.memoizedState!==null?(dl(),e.child=n.child,e.flags|=128,null):(dl(),u=i.fallback,r=e.mode,i=Ba({mode:"visible",children:i.children},r),u=Bl(u,r,h,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,Xl(e,n.child,null,h),i=e.child,i.memoizedState=Lc(h),i.childLanes=Gc(n,l,h),e.memoizedState=_c,pu(null,i));if(hl(e),Gf(u)){if(l=u.nextSibling&&u.nextSibling.dataset,l)var g=l.dgst;return l=g,l!==""&&(i=Error(f(419)),i.stack="",i.digest=l,au({value:i,source:null,stack:null})),Ua(n,e,h)}if(de||Ll(n,e,h,!1),l=(h&n.childLanes)!==0,de||l){if(sl.current!==null)return Ua(n,e,h);if(l=$n,l!==null&&(i=Zo(l,h),i!==0&&i!==r.retryLane))throw r.retryLane=i,wl(n,i),ke(l,n,i),Bc;return Lf(u)||er(),Ua(n,e,h)}return Lf(u)?(e.flags|=192,e.child=n.child,null):(n=r.treeContext,ee=mt(u.nextSibling),Se=e,Cn=!0,il=null,ht=!1,n!==null&&Zs(e,n),e=qc(e,i.children),e.flags|=134221824,e)}function rd(n,e,t){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),ya(n.return,e,t)}function cd(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&ba(t)===null&&(e=n),n=n.sibling}return e}function _a(n,e,t,l,i,u){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i,treeForkCount:u}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=t,r.tailMode=i,r.treeForkCount=u)}function Zc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function Qc(n,e,t){var l=e.pendingProps,i=l.revealOrder,u=l.tail;l=l.children;var r=De.current;if(e.flags&128)return mu(e,r),null;var h=(r&2)!==0;if(h?(r=r&1|2,e.flags|=128):r&=1,mu(e,r),i==="backwards"&&n!==null?(Zc(n),pe(n,e,l,t),Zc(n)):pe(n,e,l,t),l=Cn?uu:0,!h&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rd(n,t,e);else if(n.tag===19)rd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"backwards":t=cd(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null,Zc(e)),_a(e,!0,i,null,u,l);break;case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&ba(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}_a(e,!0,t,null,u,l);break;case"together":_a(e,!1,null,null,void 0,l);break;case"independent":e.memoizedState=null;break;default:t=cd(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),_a(e,!1,i,t,u,l)}return e.child}function fd(n,e,t){var l=e.pendingProps;return al(e,e.type,l.value),pe(n,e,l.children,t),e.child}function kt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),vl|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(Ll(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(f(153));if(e.child!==null){for(n=e.child,t=Qt(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Qt(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Vc(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&ga(n)))}function G0(n,e,t){switch(e.tag){case 3:Fe(e,e.stateNode.containerInfo),al(e,se,n.memoizedState.cache),Ul();break;case 27:case 5:Ut(e);break;case 4:Fe(e,e.stateNode.containerInfo);break;case 10:al(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,yc(e),null;break;case 13:var l=e.memoizedState;if(l!==null){if(l.dehydrated!==null)return hl(e),e.flags|=128,null;l=Ll(n,e,t,!1);var i=e.child.childLanes;return l||(t&i)!==0?ad(n,e,t):(hl(e),n=kt(n,e,t),n!==null?n.sibling:null)}hl(e);break;case 19:if(e.flags&128)return Qc(n,e,t);if(i=(n.flags&128)!==0,l=(t&e.childLanes)!==0,l||(Ll(n,e,t,!1),l=(t&e.childLanes)!==0),i){if(l)return Qc(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),mu(e,De.current),l)break;return null;case 22:return e.lanes=0,nd(n,e,t,e.pendingProps);case 24:al(e,se,n.memoizedState.cache)}return kt(n,e,t)}function od(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)de=!0;else{if(!Vc(n,t)&&(e.flags&128)===0)return de=!1,G0(n,e,t);de=(n.flags&131072)!==0}else de=!1,Cn&&(e.flags&1048576)!==0&&qs(e,uu,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=Ql(e.elementType),e.type=n,typeof n=="function")Wr(n)?(l=Il(n,l),e.tag=1,e=id(null,e,n,l,t)):(e.tag=0,e=Uc(null,e,n,l,t));else{if(n!=null){var i=n.$$typeof;if(i===w){e.tag=11,e=Wh(null,e,n,l,t);break n}else if(i===_n){e.tag=14,e=$h(null,e,n,l,t);break n}else if(i===Pn){e.tag=10,e.type=n,e=fd(null,e,t);break n}}throw e=Sn(n)||n,Error(f(306,e,""))}}return e;case 0:return Uc(n,e,e.type,e.pendingProps,t);case 1:return l=e.type,i=Il(l,e.pendingProps),id(n,e,l,i,t);case 3:n:{if(Fe(e,e.stateNode.containerInfo),n===null)throw Error(f(387));l=e.pendingProps;var u=e.memoizedState;i=u.element,oc(n,e),du(e,l,null,t);var r=e.memoizedState;if(l=r.cache,al(e,se,l),l!==u.cache&&ic(e,[se],t,!0),hu(),l=r.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=ud(n,e,l,t);break n}else if(l!==i){i=ft(Error(f(424)),e),au(i),e=ud(n,e,l,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ee=mt(n.firstChild),Se=e,Cn=!0,il=null,ht=!0,t=nh(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Ul(),l===i){e=kt(n,e,t);break n}pe(n,e,l,t)}e=e.child}return e;case 26:return Si(n,e),n===null?(t=wm(e.type,null,e.pendingProps,null))?e.memoizedState=t:Cn||(e.stateNode=mm(e.type,e.pendingProps,Fn.current,e)):e.memoizedState=wm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ut(e),n===null&&Cn&&(l=e.stateNode=Rm(e.type,e.pendingProps,Fn.current),Se=e,ht=!0,i=ee,Tl(e.type)?(qf=i,ee=mt(l.firstChild)):ee=i),pe(n,e,e.pendingProps.children,t),Si(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Cn&&((i=l=ee)&&(l=H1(l,e.type,e.pendingProps,ht),l!==null?(e.stateNode=l,Se=e,ee=mt(l.firstChild),ht=!1,i=!0):i=!1),i||ul(e)),Ut(e),i=e.type,u=e.pendingProps,r=n!==null?n.memoizedProps:null,l=u.children,jf(i,u)?l=null:r!==null&&jf(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=pc(n,e,z0,null,null,t),Gi._currentValue=i),Si(n,e),pe(n,e,l,t),e.child;case 6:return n===null&&Cn&&((n=t=ee)&&(t=w1(t,e.pendingProps,ht),t!==null?(e.stateNode=t,Se=e,ee=null,n=!0):n=!1),n||ul(e)),null;case 13:return ad(n,e,t);case 4:return Fe(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=Xl(e,null,l,t):pe(n,e,l,t),e.child;case 11:return Wh(n,e,e.type,e.pendingProps,t);case 7:return l=e.pendingProps,Si(n,e),pe(n,e,l,t),e.child;case 8:return pe(n,e,e.pendingProps.children,t),e.child;case 12:return pe(n,e,e.pendingProps.children,t),e.child;case 10:return fd(n,e,t);case 9:return i=e.type._context,l=e.pendingProps.children,Gl(e),i=Ce(i),l=l(i),e.flags|=1,pe(n,e,l,t),e.child;case 14:return $h(n,e,e.type,e.pendingProps,t);case 15:return Ph(n,e,e.type,e.pendingProps,t);case 19:return Qc(n,e,t);case 31:return _0(n,e,t);case 22:return nd(n,e,t,e.pendingProps);case 24:return Gl(e),l=Ce(se),n===null?(i=rc(),i===null&&(i=$n,u=uc(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=t),i=u),e.memoizedState={parent:l,cache:i},fc(e),al(e,se,i)):((n.lanes&t)!==0&&(oc(n,e),du(e,null,null,t),hu()),i=n.memoizedState,u=e.memoizedState,i.parent!==l?(i={parent:l,cache:l},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),al(e,se,l)):(l=u.cache,al(e,se,l),l!==i.cache&&ic(e,[se],t,!0))),pe(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=e.pendingProps,l.name!=null&&l.name!=="auto"?e.flags|=n===null?18882560:18874368:Cn&&da(e),n!==null&&n.memoizedProps.name!==l.name?e.flags|=4194816:Si(n,e),pe(n,e,l.children,t),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Ft(n){n.flags|=4}function Xc(n,e,t,l,i){var u;if((u=(n.mode&32)!==0)&&(u=t===null?Lm(e,l):Lm(e,l)&&(l.src!==t.src||l.srcSet!==t.srcSet)),u){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(Xd())n.flags|=8192;else throw Vl=Ea,cc}else n.flags&=-16777217}function sd(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Gm(e))if(Xd())n.flags|=8192;else throw Vl=Ea,cc}function La(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Lo():536870912,n.lanes|=e,Oi|=e)}function Au(n,e){if(!Cn)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function te(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&1206910976,l|=i.flags&1206910976,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=l,n.childLanes=t,e}function q0(n,e,t){var l=e.pendingProps;switch(nc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(e),null;case 1:return te(e),null;case 3:return t=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Kt(se),Ee(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(yi(e)?Ft(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,tc())),te(e),null;case 26:var i=e.type,u=e.memoizedState;return n===null?(Ft(e),u!==null?(te(e),sd(e,u)):(te(e),Xc(e,i,null,l,t))):u?u!==n.memoizedState?(Ft(e),te(e),sd(e,u)):(te(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&Ft(e),te(e),Xc(e,i,n,l,t)),null;case 27:if(bt(e),t=Fn.current,i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Ft(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return te(e),e.subtreeFlags&=-33554433,null}n=vn.current,yi(e)?Qs(e):(n=Rm(i,l,t),e.stateNode=n,Ft(e))}return te(e),e.subtreeFlags&=-33554433,null;case 5:if(bt(e),i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Ft(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return te(e),e.subtreeFlags&=-33554433,null}if(u=vn.current,yi(e))Qs(e);else{var r=Du(Fn.current);switch(u){case 1:u=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:u=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":u=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":u=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":u=r.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?r.createElement(i,{is:l.is}):r.createElement(i)}}u[Oe]=e,u[Ve]=l;n:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)u.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break n;for(;r.sibling===null;){if(r.return===null||r.return===e)break n;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=u;n:switch(je(u,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&Ft(e)}}return te(e),e.subtreeFlags&=-33554433,Xc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&Ft(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(n=Fn.current,yi(e)){if(n=e.stateNode,t=e.memoizedProps,l=null,i=Se,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}n[Oe]=e,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||om(n.nodeValue,t)),n||ul(e,!0)}else n=Du(n).createTextNode(l),n[Oe]=e,e.stateNode=n}return te(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(l=yi(e),t!==null){if(n===null){if(!l)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(557));n[Oe]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;te(e),n=!1}else t=tc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(nt(e),e):(nt(e),null);if((e.flags&128)!==0)throw Error(f(558))}return te(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=yi(e),l!==null&&l.dehydrated!==null){if(n===null){if(!i)throw Error(f(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[Oe]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;te(e),i=!1}else i=tc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(nt(e),e):(nt(e),null)}return nt(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=e.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==i&&(l.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),La(e,e.updateQueue),te(e),null);case 4:return Ee(),n===null&&Of(e.stateNode.containerInfo),e.flags|=67108864,te(e),null;case 10:return Kt(e.type),te(e),null;case 19:if(gc(e),l=e.memoizedState,l===null)return te(e),null;if(i=(e.flags&128)!==0,u=l.rendering,u===null)if(i)Au(l,!1);else{if(fe!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(u=ba(n),u!==null){for(e.flags|=128,Au(l,!1),n=u.updateQueue,e.updateQueue=n,La(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)_s(t,n),t=t.sibling;return mu(e,De.current&1|2),Cn&&Vt(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&Q()>Wa&&(e.flags|=128,i=!0,Au(l,!1),e.lanes=4194304)}else{if(!i)if(n=ba(u),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,La(e,n),Au(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!u.alternate&&!Cn)return te(e),null}else 2*Q()-l.renderingStartTime>Wa&&t!==536870912&&(e.flags|=128,i=!0,Au(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(n=l.last,n!==null?n.sibling=u:e.child=u,l.last=u)}if(l.tail!==null){n=l.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Q(),n.sibling=null,u=De.current,u=i?u&1|2:u&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!t||Cn?mu(e,u):(t=u,X(ze,e),X(De,t),we===null&&(we=e)),Cn&&Vt(e,l.treeForkCount),n}return te(e),null;case 22:case 23:return nt(e),mc(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(te(e),e.subtreeFlags&6&&(e.flags|=8192)):te(e),t=e.updateQueue,t!==null&&La(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),n!==null&&Xn(Zl),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Kt(se),te(e),null;case 25:return null;case 30:return e.flags|=33554432,te(e),null}throw Error(f(156,e.tag))}function Z0(n,e){switch(nc(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Kt(se),Ee(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return bt(e),null;case 31:if(e.memoizedState!==null){if(nt(e),e.alternate===null)throw Error(f(340));Ul()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(nt(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Ul()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return gc(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return Ee(),null;case 10:return Kt(e.type),null;case 22:case 23:return nt(e),mc(),n!==null&&Xn(Zl),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Kt(se),null;case 25:return null;default:return null}}function hd(n,e){switch(nc(e),e.tag){case 3:Kt(se),Ee();break;case 26:case 27:case 5:bt(e);break;case 4:Ee();break;case 31:e.memoizedState!==null&&nt(e);break;case 13:nt(e);break;case 19:gc(e);break;case 10:Kt(e.type);break;case 22:case 23:nt(e),mc(),n!==null&&Xn(Zl);break;case 24:Kt(se)}}function Eu(n,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var i=l.next;t=i;do{if((t.tag&n)===n){l=void 0;var u=t.create,r=t.inst;l=u(),r.destroy=l}t=t.next}while(t!==i)}}catch(h){In(e,e.return,h)}}function ml(n,e,t){try{var l=e.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var u=i.next;l=u;do{if((l.tag&n)===n){var r=l.inst,h=r.destroy;if(h!==void 0){r.destroy=void 0,i=e;var g=t,O=h;try{O()}catch(Y){In(i,g,Y)}}}l=l.next}while(l!==u)}}catch(Y){In(e,e.return,Y)}}function dd(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{th(e,t)}catch(l){In(n,n.return,l)}}}function md(n,e,t){t.props=Il(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){In(n,e,l)}}function zt(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:var i=n.stateNode,u=qt(n.memoizedProps,i);(i.ref===null||i.ref.name!==u)&&(i.ref=Tm(u)),l=i.ref;break;case 7:if(n.stateNode===null){var r=new ut(n);v(n.child,!1,j1,r,void 0,void 0),n.stateNode=r}l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(h){In(n,e,h)}}function Re(n,e){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(i){In(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){In(n,e,i)}else t.current=null}function Ga(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Om(n.stateNode,e[t])}function yd(n){for(var e=n.return;e!==null&&(Ic(e)&&Om(n.stateNode,e.stateNode),!Kc(e));)e=e.return}function Tu(n){for(var e=n.return;e!==null&&(Ic(e)&&Y1(n.stateNode,e.stateNode),!Kc(e));)e=e.return}function Kc(n){return n.tag===5||n.tag===3||n.tag===27}function Ic(n){return n&&n.tag===7&&n.stateNode!==null}function Jc(n){var e=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(i){In(n,n.return,i)}}function kc(n,e,t){try{var l=n.stateNode;m1(l,n.type,t,e),l[Ve]=e}catch(i){In(n,n.return,i)}}function gd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Tl(n.type)||n.tag===4}function Fc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||gd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Tl(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wc(n,e,t,l){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(i),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Mt)),Ga(n,l),Ln=!0;else if(i!==4&&(i===27&&(Ga(n,l),l=null,Tl(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(Wc(n,e,t,l),n=n.sibling;n!==null;)Wc(n,e,t,l),n=n.sibling}function qa(n,e,t,l){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?t.insertBefore(i,e):t.appendChild(i),Ga(n,l),Ln=!0;else if(i!==4&&(i===27&&(Ga(n,l),l=null,Tl(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(qa(n,e,t,l),n=n.sibling;n!==null;)qa(n,e,t,l),n=n.sibling}function vd(n){var e=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);je(e,l,t),e[Oe]=n,e[Ve]=t}catch(u){In(n,n.return,u)}}var Za=!1,et=null;function pd(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(Za=!0)}var Dt=null;function Ad(){var n=Dt;return Dt=null,n}var Ke=0;function xi(n,e,t,l,i){return Ke=0,Ed(n.child,e,t,l,i)}function Ed(n,e,t,l,i){for(var u=!1;n!==null;){if(n.tag===5){var r=n.stateNode;if(l!==null){var h=wf(r);l.push(h),h.view&&(u=!0)}else u||wf(r).view&&(u=!0);Za=!0,Am(r,Ke===0?e:e+"_"+Ke,t),Ke++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||Ed(n.child,e,t,l,i)&&(u=!0));n=n.sibling}return u}function Rt(n,e){for(;n!==null;)n.tag===5?Em(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||Rt(n.child,e)),n=n.sibling}function Qa(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Qa(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(f(544));var t=e.name;e=Zt(e.default,e.share),e!=="none"&&(xi(n,t,e,null,!1)||Rt(n.child,!1))}n=n.sibling}}function $c(n,e){if(n.tag===30){var t=n.stateNode,l=n.memoizedProps,i=qt(l,t),u=Zt(l.default,t.paired?l.share:l.enter);u!=="none"?xi(n,i,u,null,!1)?(Qa(n),t.paired||e||Ri(n,l.onEnter)):Rt(n.child,!1):Qa(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)$c(n,e),n=n.sibling;else Qa(n)}function Pc(n){if(et!==null&&et.size!==0){var e=et;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,l=t.name;if(l!=null&&l!=="auto"){var i=e.get(l);if(i!==void 0){var u=Zt(t.default,t.share);if(u!=="none"&&(xi(n,l,u,null,!1)?(u=n.stateNode,i.paired=u,u.paired=i,Ri(n,t.onShare)):Rt(n.child,!1)),e.delete(l),e.size===0)break}}}Pc(n)}n=n.sibling}}}function nf(n){if(n.tag===30){var e=n.memoizedProps,t=qt(e,n.stateNode),l=et!==null?et.get(t):void 0,i=Zt(e.default,l!==void 0?e.share:e.exit);i!=="none"&&(xi(n,t,i,null,!1)?l!==void 0?(i=n.stateNode,l.paired=i,i.paired=l,et.delete(t),Ri(n,e.onShare)):Ri(n,e.onExit):Rt(n.child,!1)),et!==null&&Pc(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)nf(n),n=n.sibling;else et!==null&&Pc(n)}function Td(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=qt(e,n.stateNode);e=Zt(e.default,e.update),n.flags&=-5,e!=="none"&&xi(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&Td(n);n=n.sibling}}function ef(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,Rt(n.child,!1))}ef(n)}n=n.sibling}}function Va(n){if(n.tag===30)n.stateNode.paired=null,Rt(n.child,!1),ef(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Va(n),n=n.sibling;else ef(n)}function Sd(n){for(n=n.child;n!==null;)n.tag===30?Rt(n.child,!1):(n.subtreeFlags&33554432)!==0&&Sd(n),n=n.sibling}function tf(n,e,t,l,i,u,r){for(var h=!1;e!==null;){if(e.tag===5){var g=e.stateNode;if(u!==null&&Ke<u.length){var O=u[Ke],Y=wf(g);(O.view||Y.view)&&(h=!0);var L;if(L=(n.flags&4)===0)if(Y.clip)L=!0;else{L=O.rect;var N=Y.rect;L=L.y!==N.y||L.x!==N.x||L.height!==N.height||L.width!==N.width}L&&(n.flags|=4),Y.abs?Y=!O.abs:(O=O.rect,Y=Y.rect,Y=O.height!==Y.height||O.width!==Y.width),Y&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Am(g,Ke===0?t:t+"_"+Ke,i),h&&(n.flags&4)!==0||(Dt===null&&(Dt=[]),Dt.push(g,Ke===0?l:l+"_"+Ke,e.memoizedProps)),Ke++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?n.flags|=e.flags&32:tf(n,e.child,t,l,i,u,r)&&(h=!0));e=e.sibling}return h}function xd(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,l=n.stateNode,i=qt(t,l),u=Zt(t.default,t.update),r;r=n.memoizedState,n.memoizedState=null,l=n;var h=n.child;Ke=0,i=tf(l,h,i,i,u,r,!1),(n.flags&4)!==0&&i&&Ri(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&xd(n);n=n.sibling}}var xe=!1,Vn=!1,jt=!1,lf=!1,bd=typeof WeakSet=="function"?WeakSet:Set,be=null,Yt=!1,Su=!1,Xa=!1,uf=!1;function Q0(n,e,t){if(n=n.containerInfo,Df=qi,n=Cs(n),Vr(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else n:{l=(l=n.ownerDocument)&&l.defaultView||window;var i=l.getSelection&&l.getSelection();if(i&&i.rangeCount!==0){l=i.anchorNode;var u=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break n}var h=0,g=-1,O=-1,Y=0,L=0,N=n,R=null;e:for(;;){for(var F;N!==l||u!==0&&N.nodeType!==3||(g=h+u),N!==r||i!==0&&N.nodeType!==3||(O=h+i),N.nodeType===3&&(h+=N.nodeValue.length),(F=N.firstChild)!==null;)R=N,N=F;for(;;){if(N===n)break e;if(R===l&&++Y===u&&(g=h),R===r&&++L===i&&(O=h),(F=N.nextSibling)!==null)break;N=R,R=N.parentNode}N=F}l=g===-1||O===-1?null:{start:g,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(Rf={focusedElem:n,selectionRange:l},qi=!1,t=(t&335544064)===t,be=e,e=t?9270:1024;be!==null;){if(n=be,t&&(l=n.deletions,l!==null))for(u=0;u<l.length;u++)t&&nf(l[u]);if(n.alternate===null&&(n.flags&2)!==0)t&&pd(n),Ka(t);else{if(n.tag===22){if(l=n.alternate,n.memoizedState!==null){l!==null&&l.memoizedState===null&&t&&nf(l),Ka(t);continue}else if(l!==null&&l.memoizedState!==null){t&&pd(n),Ka(t);continue}}l=n.child,(n.subtreeFlags&e)!==0&&l!==null?(l.return=n,be=l):(t&&Td(n),Ka(t))}}et=null}function Ka(n){for(;be!==null;){var e=be,t=n,l=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&l!==null){t=void 0,i=l.memoizedProps,l=l.memoizedState;var u=e.stateNode;try{var r=Il(e.type,i);t=u.getSnapshotBeforeUpdate(r,l),u.__reactInternalSnapshotBeforeUpdate=t}catch(h){In(e,e.return,h)}}break;case 3:if((i&1024)!==0){if(l=e.stateNode.containerInfo,t=l.nodeType,t===9)_f(l);else if(t===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":_f(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&l!==null&&(t=qt(l.memoizedProps,l.stateNode),i=e.memoizedProps,i=Zt(i.default,i.update),i!=="none"&&xi(l,t,i,l.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(f(163))}if(l=e.sibling,l!==null){l.return=e.return,be=l;break}be=e.return}}function Nd(n,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(n,t),l&4&&Eu(5,t);break;case 1:if(Ht(n,t),l&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(r){In(t,t.return,r)}else{var i=Il(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(r){In(t,t.return,r)}}l&64&&dd(t),l&512&&zt(t,t.return);break;case 3:if(Ht(n,t),l&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{th(n,e)}catch(r){In(t,t.return,r)}}break;case 27:e===null&&l&4&&vd(t);case 26:case 5:Ht(n,t),e===null&&l&4&&Jc(t),l&512&&zt(t,t.return);break;case 12:Ht(n,t);break;case 31:Ht(n,t),l&4&&zd(n,t);break;case 13:Ht(n,t),l&4&&Dd(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=e1.bind(null,t),B1(n,t))));break;case 22:if(l=t.memoizedState!==null||xe,!l){var u=e!==null&&e.memoizedState!==null||Vn;e=xe,i=Vn,xe=l,(Vn=u)&&!i?(l=2,(t.subtreeFlags&8772)!==0&&(l|=1),Et(n,t,l)):Ht(n,t),xe=e,Vn=i}break;case 30:Ht(n,t),l&512&&zt(t,t.return);break;case 7:l&512&&zt(t,t.return);default:Ht(n,t)}}function af(n,e){for(n=n.child;n!==null;)Md(n,e),n=n.sibling}function Md(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var l=t.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var i=n.stateNode,u=n.memoizedProps.style,r=u!=null&&u.hasOwnProperty("display")?u.display:null;i.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(g){In(n,n.return,g)}rf(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,Ln=!0}catch(g){In(n,n.return,g)}break;case 18:try{var h=n.stateNode;e?pm(h,!0):pm(n.stateNode,!1)}catch(g){In(n,n.return,g)}break;case 22:case 23:n.memoizedState===null&&af(n,e);break;default:af(n,e)}}function rf(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,l=e;switch(t.tag){case 4:Md(t,l);break n;case 22:t.memoizedState===null&&rf(t,l);break n;default:rf(t,l)}}n=n.sibling}}function Od(n){var e=n.alternate;e!==null&&(n.alternate=null,Od(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Wu(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var le=null,Ie=!1;function pt(n,e,t){for(t=t.child;t!==null;)Cd(n,e,t),t=t.sibling}function Cd(n,e,t){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(gt,t)}catch{}switch(t.tag){case 26:Vn||Re(t,e),pt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Vn&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Vn||Re(t,e),Tu(t);var l=le,i=Ie;Tl(t.type)&&(le=t.stateNode,Ie=!1),pt(n,e,t),jm(t.stateNode,t.type,t.memoizedProps),le=l,Ie=i;break;case 5:Vn||Re(t,e),Tu(t);case 6:if(t.tag===6&&Tu(t),l=le,i=Ie,le=null,pt(n,e,t),le=l,Ie=i,le!==null)if(Ie)try{(le.nodeType===9?le.body:le.nodeName==="HTML"?le.ownerDocument.body:le).removeChild(t.stateNode),Ln=!0}catch(u){In(t,e,u)}else try{le.removeChild(t.stateNode),Ln=!0}catch(u){In(t,e,u)}break;case 18:le!==null&&(Ie?(n=le,vm(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Zi(n)):vm(le,t.stateNode));break;case 4:l=le,i=Ie,le=t.stateNode.containerInfo,Ie=!0,pt(n,e,t),le=l,Ie=i;break;case 0:case 11:case 14:case 15:ml(2,t,e),Vn||ml(4,t,e),pt(n,e,t);break;case 1:Vn||(Re(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&md(t,e,l)),pt(n,e,t);break;case 21:pt(n,e,t);break;case 22:Vn=(l=Vn)||t.memoizedState!==null,pt(n,e,t),Vn=l;break;case 30:Re(t,e),pt(n,e,t);break;case 7:Vn||Re(t,e),pt(n,e,t);break;default:pt(n,e,t)}}function zd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Zi(n)}catch(t){In(e,e.return,t)}}}function Dd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Zi(n)}catch(t){In(e,e.return,t)}}function V0(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new bd),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new bd),e;default:throw Error(f(435,n.tag))}}function Ia(n,e){var t=V0(n);e.forEach(function(l){if(!t.has(l)){t.add(l);var i=t1.bind(null,n,l);l.then(i,i)}})}function Ge(n,e,t){var l=e.deletions;if(l!==null)for(var i=0;i<l.length;i++){var u=l[i],r=n,h=e,g=h;n:for(;g!==null;){switch(g.tag){case 27:if(Tl(g.type)){le=g.stateNode,Ie=!1;break n}break;case 5:le=g.stateNode,Ie=!1;break n;case 3:case 4:le=g.stateNode.containerInfo,Ie=!0;break n}g=g.return}if(le===null)throw Error(f(160));Cd(r,h,u),le=null,Ie=!1,r=u.alternate,r!==null&&(r.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Rd(e,n,t),e=e.sibling}var At=null;function Rd(n,e,t){var l=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(i&4&&(l=n.updateQueue,l=l!==null?l.events:null,l!==null))for(var u=0;u<l.length;u++){var r=l[u];r.ref.impl=r.nextImpl}Ge(e,n,t),qe(n),i&4&&(ml(3,n,n.return),Eu(3,n),ml(5,n,n.return));break;case 1:Ge(e,n,t),qe(n),i&512&&(Vn||l===null||Re(l,l.return)),i&64&&xe&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(u=At,Ge(e,n,t),qe(n),i&512&&(Vn||l===null||Re(l,l.return)),i&4)if(i=l!==null?l.memoizedState:null,t=n.memoizedState,l===null)if(t===null)if(n.stateNode===null)if(xe)n.stateNode=mm(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,i=u.ownerDocument||u;e:switch(e){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Ji]||l[Oe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(e),i.head.insertBefore(l,i.querySelector("head > title"))),je(l,e,t),l[Oe]=n,Te(l),e=l;break n;case"link":if(u=_m("link","href",i).get(e+(t.href||""))){for(r=0;r<u.length;r++)if(l=u[r],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(r,1);break e}}l=i.createElement(e),je(l,e,t),i.head.appendChild(l);break;case"meta":if(u=_m("meta","content",i).get(e+(t.content||""))){for(r=0;r<u.length;r++)if(l=u[r],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(r,1);break e}}l=i.createElement(e),je(l,e,t),i.head.appendChild(l);break;default:throw Error(f(468,e))}l[Oe]=n,Te(l),e=l}n.stateNode=e}else xe||Xf(u,n.type,n.stateNode);else n.stateNode=Um(u,t,n.memoizedProps);else i!==t?(i===null?(e=l.stateNode,e===null||Vn||e.parentNode.removeChild(e)):i.count--,t===null?xe||Xf(u,n.type,n.stateNode):Um(u,t,n.memoizedProps)):t===null&&n.stateNode!==null&&kc(n,n.memoizedProps,l.memoizedProps);break;case 27:Ge(e,n,t),qe(n),i&512&&(Vn||l===null||Re(l,l.return)),l!==null&&i&4&&kc(n,n.memoizedProps,l.memoizedProps);break;case 5:if(u=jt,jt=!1,Ge(e,n,t),jt=u,qe(n),i&512&&(Vn||l===null||Re(l,l.return)),n.flags&32){e=n.stateNode;try{ui(e,""),Ln=!0}catch(Y){In(n,n.return,Y)}}i&4&&n.stateNode!=null&&(e=n.memoizedProps,kc(n,e,l!==null?l.memoizedProps:e)),i&1024&&(lf=!0);break;case 6:if(Ge(e,n,t),qe(n),i&4){if(n.stateNode===null)throw Error(f(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,Ln=!0}catch(Y){In(n,n.return,Y)}}break;case 3:if(Ln=!1,cr=null,u=At,At=Ru(e.containerInfo),Ge(e,n,t),At=u,qe(n),i&4&&l!==null&&l.memoizedState.isDehydrated)try{Zi(e.containerInfo)}catch(Y){In(n,n.return,Y)}lf&&(lf=!1,jd(n)),Ln=!1;break;case 4:i=jt,jt=xe,l=$o(),u=At,At=Ru(n.stateNode.containerInfo),Ge(e,n,t),qe(n),At=u,Ln&&Su&&(Xa=!0),Ln=l,jt=i;break;case 12:Ge(e,n,t),qe(n);break;case 31:Ge(e,n,t),qe(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ia(n,e)));break;case 13:Ge(e,n,t),qe(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Fa=Q()),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ia(n,e)));break;case 22:u=n.memoizedState!==null,r=l!==null&&l.memoizedState!==null;var h=xe,g=Vn,O=jt;xe=h||u,jt=O||u,Vn=g||r,Ge(e,n,t),Vn=g,jt=O,xe=h,qe(n),i&8192&&(e=n.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,!u||l===null||r||xe||Vn||(e=r||Vn,t=xe,l=Vn,xe=u||xe,Vn=e,yl(n,2),xe=t,Vn=l),!u&&jt||af(n,u)),i&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,Ia(n,t))));break;case 19:Ge(e,n,t),qe(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ia(n,e)));break;case 30:i&512&&(Vn||l===null||Re(l,l.return)),i=$o(),u=Su,r=(t&335544064)===t,h=n.memoizedProps,Su=r&&Zt(h.default,h.update)!=="none",Ge(e,n,t),qe(n),r&&l!==null&&Ln&&(n.flags|=4),Su=u,Ln=i;break;case 21:break;case 7:i&512&&(Vn||l===null||Re(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=n);default:Ge(e,n,t),qe(n)}}function qe(n){var e=n.flags;if(e&2){try{for(var t,l=n.return;l!==null;){if(gd(l)){t=l;break}l=l.return}l=null;for(var i=n.return;i!==null;){if(Ic(i)){var u=i.stateNode;l===null?l=[u]:l.push(u)}if(Kc(i))break;i=i.return}var r=l;if(t==null)throw Error(f(160));switch(t.tag){case 27:var h=t.stateNode,g=Fc(n);qa(n,g,h,r);break;case 5:var O=t.stateNode;t.flags&32&&(ui(O,""),t.flags&=-33);var Y=Fc(n);qa(n,Y,O,r);break;case 3:case 4:var L=t.stateNode.containerInfo,N=Fc(n);Wc(n,N,L,r);break;default:throw Error(f(161))}}catch(R){In(n,n.return,R)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function jd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;jd(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,qi=!0,e.reset(),qi=!1),n=n.sibling}}function bi(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Yd(e,n),e=e.sibling;else xd(e)}function Yd(n,e){var t=n.alternate;if(t===null)$c(n,!1);else switch(n.tag){case 3:if(uf=Yt=!1,Ad(),bi(e,n),!Yt&&!Xa){if(n=Dt,n!==null)for(var l=0;l<n.length;l+=3){t=n[l];var i=n[l+1];Em(t,n[l+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),uf=!0}Dt=null;break;case 5:bi(e,n);break;case 4:l=Yt,Yt=!1,bi(e,n),Yt&&(Xa=!0),Yt=l;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?$c(n,!1):bi(e,n));break;case 30:l=Yt,i=Ad(),Yt=!1,bi(e,n),Yt&&(n.flags|=4);var u=n.memoizedProps,r=n.stateNode;e=qt(u,r),r=qt(t.memoizedProps,r);var h=Zt(u.default,u.update);h==="none"?e=!1:(u=t.memoizedState,t.memoizedState=null,t=n.child,Ke=0,e=tf(n,t,e,r,h,u,!0),Ke!==(u===null?0:u.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(Ri(n,n.memoizedProps.onUpdate),Dt=i):i!==null&&(i.push.apply(i,Dt),Dt=i),Yt=(n.flags&32)!==0?!0:l;break;default:bi(e,n)}}function Ht(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Nd(n,e.alternate,e),e=e.sibling}function yl(n,e){for(n=n.child;n!==null;){var t=n,l=e;switch(t.tag){case 0:case 11:case 14:case 15:ml(4,t,t.return),yl(t,l);break;case 1:Re(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&md(t,t.return,i),yl(t,l);break;case 27:(l&2)!==0&&jm(t.stateNode,t.type,t.memoizedProps);case 5:Re(t,t.return),t.tag!==5&&t.tag!==27||Tu(t),yl(t,l);break;case 6:Tu(t);break;case 26:Re(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||Vn||i.parentNode.removeChild(i),yl(t,l);break;case 22:t.memoizedState===null&&yl(t,l);break;case 30:Re(t,t.return),yl(t,l);break;case 7:Re(t,t.return);default:yl(t,l)}n=n.sibling}}function Et(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var l=e.alternate,i=n,u=e,r=u.flags,h=(t&1)!==0;switch(u.tag){case 0:case 11:case 15:Et(i,u,t),Eu(4,u);break;case 1:if(Et(i,u,t),l=u,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(Y){In(l,l.return,Y)}if(l=u,i=l.updateQueue,i!==null){var g=l.stateNode;try{var O=i.shared.hiddenCallbacks;if(O!==null)for(i.shared.hiddenCallbacks=null,i=0;i<O.length;i++)eh(O[i],g)}catch(Y){In(l,l.return,Y)}}h&&r&64&&dd(u),zt(u,u.return);break;case 27:(t&2)!==0&&vd(u);case 5:u.tag!==5&&u.tag!==27||yd(u),Et(i,u,t),h&&l===null&&r&4&&Jc(u),zt(u,u.return);break;case 6:yd(u);break;case 26:g=u.stateNode,u.memoizedState!==null||g===null||xe||Xf(Ru(g.ownerDocument),u.type,g),Et(i,u,t),h&&l===null&&r&4&&Jc(u),zt(u,u.return);break;case 12:Et(i,u,t);break;case 31:Et(i,u,t),h&&r&4&&zd(i,u);break;case 13:Et(i,u,t),h&&r&4&&Dd(i,u);break;case 22:u.memoizedState===null&&Et(i,u,t),zt(u,u.return);break;case 30:Et(i,u,t),zt(u,u.return);break;case 7:zt(u,u.return);default:Et(i,u,t)}e=e.sibling}}function cf(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&ru(t))}function ff(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ru(n))}function dt(n,e,t,l){var i=(t&335544064)===t;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)Hd(n,e,t,l),e=e.sibling;else i&&Sd(e)}function Hd(n,e,t,l){var i=(t&335544064)===t;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Va(e);var u=e.flags;switch(e.tag){case 0:case 11:case 15:dt(n,e,t,l),u&2048&&Eu(9,e);break;case 1:dt(n,e,t,l);break;case 3:dt(n,e,t,l),i&&uf&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),u&2048&&(u=null,e.alternate!==null&&(u=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==u&&(e.refCount++,u!=null&&ru(u)));break;case 12:if(u&2048){dt(n,e,t,l),u=e.stateNode;try{var r=e.memoizedProps,h=r.id,g=r.onPostCommit;typeof g=="function"&&g(h,e.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(O){In(e,e.return,O)}}else dt(n,e,t,l);break;case 31:dt(n,e,t,l);break;case 13:dt(n,e,t,l);break;case 23:break;case 22:r=e.stateNode,h=e.alternate,e.memoizedState!==null?(i&&h!==null&&h.memoizedState===null&&Va(h),r._visibility&2?dt(n,e,t,l):xu(n,e)):(i&&h!==null&&h.memoizedState!==null&&Va(e),r._visibility&2?dt(n,e,t,l):(r._visibility|=2,Ni(n,e,t,l,(e.subtreeFlags&10256)!==0||!1))),u&2048&&cf(h,e);break;case 24:dt(n,e,t,l),u&2048&&ff(e.alternate,e);break;case 30:i&&(u=e.alternate,u!==null&&(Rt(u.child,!0),Rt(e.child,!0))),dt(n,e,t,l);break;default:dt(n,e,t,l)}}function Ni(n,e,t,l,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=n,r=e,h=t,g=l,O=r.flags;switch(r.tag){case 0:case 11:case 15:Ni(u,r,h,g,i),Eu(8,r);break;case 23:break;case 22:var Y=r.stateNode;r.memoizedState!==null?Y._visibility&2?Ni(u,r,h,g,i):xu(u,r):(Y._visibility|=2,Ni(u,r,h,g,i)),i&&O&2048&&cf(r.alternate,r);break;case 24:Ni(u,r,h,g,i),i&&O&2048&&ff(r.alternate,r);break;default:Ni(u,r,h,g,i)}e=e.sibling}}function xu(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,l=e,i=l.flags;switch(l.tag){case 22:xu(t,l),i&2048&&cf(l.alternate,l);break;case 24:xu(t,l),i&2048&&ff(l.alternate,l);break;default:xu(t,l)}e=e.sibling}}var Jl=8192;function kl(n,e,t){if(n.subtreeFlags&Jl)for(n=n.child;n!==null;)wd(n,e,t),n=n.sibling}function wd(n,e,t){switch(n.tag){case 26:kl(n,e,t),n.flags&Jl&&(n.memoizedState!==null?F1(t,At,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&Zm(t,n)));break;case 5:kl(n,e,t),n.flags&Jl&&(n=n.stateNode,(e&335544128)===e&&Zm(t,n));break;case 3:case 4:var l=At;At=Ru(n.stateNode.containerInfo),kl(n,e,t),At=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=Jl,Jl=16777216,kl(n,e,t),Jl=l):kl(n,e,t));break;case 30:if((n.flags&Jl)!==0&&(l=n.memoizedProps.name,l!=null&&l!=="auto")){var i=n.stateNode;i.paired=null,et===null&&(et=new Map),et.set(l,i)}kl(n,e,t);break;default:kl(n,e,t)}}function Bd(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function bu(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];be=l,_d(l,n)}Bd(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ud(n),n=n.sibling}function Ud(n){switch(n.tag){case 0:case 11:case 15:bu(n),n.flags&2048&&ml(9,n,n.return);break;case 3:bu(n);break;case 12:bu(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Ja(n)):bu(n);break;default:bu(n)}}function Ja(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];be=l,_d(l,n)}Bd(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:ml(8,e,e.return),Ja(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Ja(e));break;default:Ja(e)}n=n.sibling}}function _d(n,e){for(;be!==null;){var t=be;switch(t.tag){case 0:case 11:case 15:ml(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ru(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,be=l;else n:for(t=n;be!==null;){l=be;var i=l.sibling,u=l.return;if(Od(l),l===t){be=null;break n}if(i!==null){i.return=u,be=i;break n}be=u}}}var X0={getCacheForType:function(n){var e=Ce(se),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Ce(se).controller.signal}},K0=typeof WeakMap=="function"?WeakMap:Map,Zn=0,$n=null,zn=null,jn=0,Kn=0,tt=null,gl=!1,Mi=!1,of=!1,Wt=0,fe=0,vl=0,Fl=0,ka=0,lt=0,Oi=0,Nu=null,Je=null,sf=!1,Fa=0,Ld=0,Wa=1/0,$a=null,pl=null,ue=0,Tt=null,Wl=null,wt=0,hf=0,df=null,Gd=null,Ci=null,zi=null,Di=null,Mu=0,Pa=null;function it(){return(Zn&2)!==0&&jn!==0?jn&-jn:W.T!==null?xf():Qo()}function qd(){if(lt===0)if((jn&536870912)===0||Cn){var n=Iu;Iu<<=1,(Iu&3932160)===0&&(Iu=262144),lt=n}else lt=536870912;return n=ze.current,n!==null&&(n.flags|=32),lt}function Ri(n,e){if(e!=null){var t=n.stateNode,l=t.ref;l===null&&(l=t.ref=Tm(qt(n.memoizedProps,t))),zi===null&&(zi=[]),zi.push(e.bind(null,l))}}function ke(n,e,t){(n===$n&&(Kn===2||Kn===9)||n.cancelPendingCommit!==null)&&(ji(n,0),Al(n,jn,lt,!1)),Ii(n,t),((Zn&2)===0||n!==$n)&&(n===$n&&((Zn&2)===0&&(Fl|=t),fe===4&&Al(n,jn,lt,!1)),Bt(n))}function Zd(n,e,t){if((Zn&6)!==0)throw Error(f(327));var l=!t&&(e&127)===0&&(e&n.expiredLanes)===0||Ki(n,e),i=l?k0(n,e):yf(n,e,!0),u=l;do{if(i===0){Mi&&!l&&Al(n,e,0,!1);break}else{if(t=n.current.alternate,u&&!I0(t)){i=yf(n,e,!1),u=!1;continue}if(i===2){if(u=e,n.errorRecoveryDisabledLanes&u)var r=0;else r=n.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;n:{var h=n;i=Nu;var g=h.current.memoizedState.isDehydrated;if(g&&(ji(h,r).flags|=256),r=yf(h,r,!1),r!==2&&r!==6){if(of&&!g){h.errorRecoveryDisabledLanes|=u,Fl|=u,i=4;break n}u=Je,Je=i,u!==null&&(Je===null?Je=u:Je.push.apply(Je,u))}i=r}if(u=!1,i!==2)continue}}if(i===1){ji(n,0),Al(n,e,0,!0);break}n:{switch(l=n,u=i,u){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Al(l,e,lt,!gl);break n;case 2:Je=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(i=Fa+300-Q(),10<i)){if(Al(l,e,lt,!gl),ku(l,0,!0)!==0)break n;wt=e,l.timeoutHandle=Hf(Qd.bind(null,l,t,Je,$a,sf,e,lt,Fl,Oi,gl,u,"Throttled",-0,0),i);break n}Qd(l,t,Je,$a,sf,e,lt,Fl,Oi,gl,u,null,-0,0)}}break}while(!0);Bt(n)}function Qd(n,e,t,l,i,u,r,h,g,O,Y,L,N,R){n.timeoutHandle=-1;var F=e.subtreeFlags,tn=(u&335544064)===u;if(L=null,(tn||F&8192||(F&16785408)===16785408)&&(L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mt},et=null,wd(e,u,L),tn&&(F=L,tn=n.containerInfo,tn=(tn.nodeType===9?tn:tn.ownerDocument).__reactViewTransition,tn!=null&&(F.count++,F.waitingForViewTransition=!0,F=Hu.bind(F),tn.finished.then(F,F))),F=(u&62914560)===u?Fa-Q():(u&4194048)===u?Ld-Q():0,F=W1(L,F),F!==null)){wt=u,n.cancelPendingCommit=F(Wd.bind(null,n,e,u,t,l,i,r,h,g,O,Y,L,null,N,R)),Al(n,u,r,!O);return}Wd(n,e,u,t,l,i,r,h,g,O,Y,L)}function I0(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var i=t[l],u=i.getSnapshot;i=i.value;try{if(!Pe(u(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Al(n,e,t,l){e=_o(n,e),e&=~ka,e&=~Fl,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var i=e;0<i;){var u=31-We(i),r=1<<u;l[u]=-1,i&=~r}t!==0&&Go(n,t,e)}function nr(){return(Zn&6)===0?(Ou(0),!1):!0}function mf(){if(zn!==null){if(Kn===0)var n=zn.return;else n=zn,Xt=_l=null,Tc(n),pi=null,ou=0,n=zn;for(;n!==null;)hd(n.alternate,n),n=n.return;zn=null}}function ji(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,v1(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),wt=0,mf(),$n=n,zn=t=Qt(n.current,null),jn=e,Kn=0,tt=null,gl=!1,Mi=Ki(n,e),of=!1,Oi=lt=ka=Fl=vl=fe=0,Je=Nu=null,sf=!1,Wt=_o(n,e),ca(),t}function Vd(n,e){xn=null,W.H=Ya,e===vi||e===Aa?(e=Ws(),Kn=3):e===cc?(e=Ws(),Kn=4):Kn=e===Bc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,tt=e,zn===null&&(fe=1,Ha(n,ft(e,n.current)))}function Xd(){var n=ze.current;return n===null?!0:(jn&4194048)===jn?we===null:(jn&62914560)===jn||(jn&536870912)!==0?n===we:!1}function Kd(){var n=W.H;return W.H=Ya,n===null?Ya:n}function Id(){var n=W.A;return W.A=X0,n}function er(){fe=4,gl||(jn&4194048)!==jn&&ze.current!==null||(Mi=!0),(vl&134217727)===0&&(Fl&134217727)===0||$n===null||Al($n,jn,lt,!1)}function yf(n,e,t){var l=Zn;Zn|=2;var i=Kd(),u=Id();($n!==n||jn!==e)&&($a=null,ji(n,e)),e=!1;var r=fe;n:do try{if(Kn!==0&&zn!==null){var h=zn,g=tt;switch(Kn){case 8:mf(),r=6;break n;case 3:case 2:case 9:case 6:ze.current===null&&(e=!0);var O=Kn;if(Kn=0,tt=null,Yi(n,h,g,O),t&&Mi){r=0;break n}break;default:O=Kn,Kn=0,tt=null,Yi(n,h,g,O)}}J0(),r=fe;break}catch(Y){Vd(n,Y)}while(!0);return e&&n.shellSuspendCounter++,Xt=_l=null,Zn=l,W.H=i,W.A=u,zn===null&&($n=null,jn=0,ca()),r}function J0(){for(;zn!==null;)Jd(zn)}function k0(n,e){var t=Zn;Zn|=2;var l=Kd(),i=Id();$n!==n||jn!==e?($a=null,Wa=Q()+500,ji(n,e)):Mi=Ki(n,e);n:do try{if(Kn!==0&&zn!==null){e=zn;var u=tt;e:switch(Kn){case 1:Kn=0,tt=null,Yi(n,e,u,1);break;case 2:case 9:if(ks(u)){Kn=0,tt=null,kd(e);break}e=function(){Kn!==2&&Kn!==9||$n!==n||(Kn=7),Bt(n)},u.then(e,e);break n;case 3:Kn=7;break n;case 4:Kn=5;break n;case 7:ks(u)?(Kn=0,tt=null,kd(e)):(Kn=0,tt=null,Yi(n,e,u,7));break;case 5:var r=null;switch(zn.tag){case 26:r=zn.memoizedState;case 5:case 27:var h=zn;if(r?Gm(r):h.stateNode.complete){Kn=0,tt=null;var g=h.sibling;if(g!==null)zn=g;else{var O=h.return;O!==null?(zn=O,tr(O)):zn=null}break e}}Kn=0,tt=null,Yi(n,e,u,5);break;case 6:Kn=0,tt=null,Yi(n,e,u,6);break;case 8:mf(),fe=6;break n;default:throw Error(f(462))}}F0();break}catch(Y){Vd(n,Y)}while(!0);return Xt=_l=null,W.H=l,W.A=i,Zn=t,zn!==null?0:($n=null,jn=0,ca(),fe)}function F0(){for(;zn!==null&&!V();)Jd(zn)}function Jd(n){var e=od(n.alternate,n,Wt);n.memoizedProps=n.pendingProps,e===null?tr(n):zn=e}function kd(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=ld(t,e,e.pendingProps,e.type,void 0,jn);break;case 11:e=ld(t,e,e.pendingProps,e.type.render,e.ref,jn);break;case 5:Tc(e);var l=e;l===Se&&(Cn?(ma(l),l.tag===5&&l.stateNode!=null&&(ee=l.stateNode)):(ma(l),Cn=!0));default:hd(t,e),e=zn=_s(e,Wt),e=od(t,e,Wt)}n.memoizedProps=n.pendingProps,e===null?tr(n):zn=e}function Yi(n,e,t,l){Xt=_l=null,Tc(e),pi=null,ou=0;var i=e.return;try{if(U0(n,i,e,t,jn)){fe=1,Ha(n,ft(t,n.current)),zn=null;return}}catch(u){if(i!==null)throw zn=i,u;fe=1,Ha(n,ft(t,n.current)),zn=null;return}e.flags&32768?(Cn||l===1?n=!0:Mi||(jn&536870912)!==0?n=!1:(gl=n=!0,(l===2||l===9||l===3||l===6)&&(l=ze.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fd(e,n)):tr(e)}function tr(n){var e=n;do{if((e.flags&32768)!==0){Fd(e,gl);return}n=e.return;var t=q0(e.alternate,e,Wt);if(t!==null){zn=t;return}if(e=e.sibling,e!==null){zn=e;return}zn=e=n}while(e!==null);fe===0&&(fe=5)}function Fd(n,e){do{var t=Z0(n.alternate,n);if(t!==null){t.flags&=32767,zn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){zn=n;return}zn=n=t}while(n!==null);fe=6,zn=null}function Wd(n,e,t,l,i,u,r,h,g,O,Y,L){n.cancelPendingCommit=null;do lr();while(ue!==0);if((Zn&6)!==0)throw Error(f(327));if(e!==null){if(e===n.current)throw Error(f(177));n===$n&&(zn=$n=null,jn=0),Wl=e,Tt=n,wt=t,df=i,Gd=l,W0(n,e,t,r,h,g,L)}}function W0(n,e,t,l,i,u,r){var h=e.lanes|e.childLanes;if(hf=h,h|=kr,xg(n,t,h,l,i,u),zi=null,(t&335544064)===t?(Di=N0(n),l=10262):(Di=null,l=10256),(e.subtreeFlags&l)!==0||(e.flags&l)!==0?(n.callbackNode=null,n.callbackPriority=0,l1(sn,function(){return Af(),null})):(n.callbackNode=null,n.callbackPriority=0),Za=!1,l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=W.T,W.T=null,i=fn.p,fn.p=2,u=Zn,Zn|=4;try{Q0(n,e,t)}finally{Zn=u,fn.p=i,W.T=l}}ue=1,Za?Ci=x1(r,n.containerInfo,Di,gf,vf,P0,pf,Af,$0):(gf(),vf(),pf())}function $0(n){if(ue!==0){var e=Tt.onRecoverableError;e(n,{componentStack:null})}}function P0(){ue===3&&(ue=0,Yd(Wl,Tt),ue=4)}function gf(){if(ue===1){ue=0;var n=Tt,e=Wl,t=wt,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=W.T,W.T=null;var i=fn.p;fn.p=2;var u=Zn;Zn|=4;try{Su=Xa=!1,Rd(e,n,t),t=Rf;var r=Cs(n.containerInfo),h=t.focusedElem,g=t.selectionRange;if(r!==h&&h&&h.ownerDocument&&Os(h.ownerDocument.documentElement,h)){if(g!==null&&Vr(h)){var O=g.start,Y=g.end;if(Y===void 0&&(Y=O),"selectionStart"in h)h.selectionStart=O,h.selectionEnd=Math.min(Y,h.value.length);else{var L=h.ownerDocument||document,N=L&&L.defaultView||window;if(N.getSelection){var R=N.getSelection(),F=h.textContent.length,tn=Math.min(g.start,F),bn=g.end===void 0?tn:Math.min(g.end,F);!R.extend&&tn>bn&&(r=bn,bn=tn,tn=r);var M=Ms(h,tn),S=Ms(h,bn);if(M&&S&&(R.rangeCount!==1||R.anchorNode!==M.node||R.anchorOffset!==M.offset||R.focusNode!==S.node||R.focusOffset!==S.offset)){var D=L.createRange();D.setStart(M.node,M.offset),R.removeAllRanges(),tn>bn?(R.addRange(D),R.extend(S.node,S.offset)):(D.setEnd(S.node,S.offset),R.addRange(D))}}}}for(L=[],R=h;R=R.parentNode;)R.nodeType===1&&L.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<L.length;h++){var U=L[h];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}qi=!!Df,Rf=Df=null}finally{Zn=u,fn.p=i,W.T=l}}n.current=e,ue=2}}function vf(){if(ue===2){ue=0;var n=Tt,e=Wl,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=W.T,W.T=null;var l=fn.p;fn.p=2;var i=Zn;Zn|=4;try{Nd(n,e.alternate,e)}finally{Zn=i,fn.p=l,W.T=t}}ue=3}}function pf(){if(ue===4||ue===3){ue=0;var n=Ci;Ci=null,K();var e=Tt,t=Wl,l=wt,i=Gd,u=(l&335544064)===l?10262:10256;if((t.subtreeFlags&u)!==0||(t.flags&u)!==0?ue=5:(ue=0,Wl=Tt=null,$d(e,e.pendingLanes)),u=e.pendingLanes,u===0&&(pl=null),Mr(l),t=t.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(gt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=W.T,u=fn.p,fn.p=2,W.T=null;try{for(var r=e.onRecoverableError,h=0;h<i.length;h++){var g=i[h];r(g.value,{componentStack:g.stack})}}finally{W.T=t,fn.p=u}}if(i=zi,r=Di,Di=null,i!==null&&(zi=null,r===null&&(r=[]),n!==null))for(g=0;g<i.length;g++)t=(0,i[g])(r),t!==void 0&&n.finished.finally(t);(wt&3)!==0&&lr(),Bt(e),u=e.pendingLanes,(l&261930)!==0&&(u&42)!==0?e===Pa?Mu++:(Mu=0,Pa=e):(Mu=0,Pa=null),Ou(0)}}function $d(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,ru(e)))}function lr(){return Ci!==null&&(Ci.skipTransition(),Ci=null),gf(),vf(),pf(),Af()}function Af(){if(ue!==5)return!1;var n=Tt,e=hf;hf=0;var t=Mr(wt),l=W.T,i=fn.p;try{fn.p=32>t?32:t,W.T=null,t=df,df=null;var u=Tt,r=wt;if(ue=0,Wl=Tt=null,wt=0,(Zn&6)!==0)throw Error(f(331));var h=Zn;if(Zn|=4,Ud(u.current),Hd(u,u.current,r,t),Zn=h,Ou(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(gt,u)}catch{}return!0}finally{fn.p=i,W.T=l,$d(n,e)}}function Pd(n,e,t){e=ft(t,e),e=wc(n.stateNode,e,2),n=ol(n,e,2),n!==null&&(Ii(n,2),Bt(n))}function In(n,e,t){if(n.tag===3)Pd(n,n,t);else for(;e!==null;){if(e.tag===3){Pd(e,n,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pl===null||!pl.has(l))){n=ft(t,n),t=kh(2),l=ol(e,t,2),l!==null&&(Fh(t,l,e,n),Ii(l,2),Bt(l));break}}e=e.return}}function Ef(n,e,t){var l=n.pingCache;if(l===null){l=n.pingCache=new K0;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(t)||(of=!0,i.add(t),n=n1.bind(null,n,e,t),e.then(n,n))}function n1(n,e,t){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,$n===n&&(jn&t)===t&&((fe===4||fe===3&&(jn&62914560)===jn&&300>Q()-Fa)&&(Zn&2)===0?ji(n,0):ka|=t,Oi===jn&&(Oi=0)),Bt(n)}function nm(n,e){e===0&&(e=Lo()),n=wl(n,e),n!==null&&(Ii(n,e),Bt(n))}function e1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),nm(n,t)}function t1(n,e){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),nm(n,t)}function l1(n,e){return j(n,e)}var Hi=null,wi=null,Tf=!1,ir=!1,Sf=!1,El=0;function Bt(n){n!==wi&&n.next===null&&(wi===null?Hi=wi=n:wi=wi.next=n),ir=!0,Tf||(Tf=!0,u1())}function Ou(n,e){if(!Sf&&ir){Sf=!0;do for(var t=!1,l=Hi;l!==null;){if(n!==0){var i=l.pendingLanes;if(i===0)var u=0;else{var r=l.suspendedLanes,h=l.pingedLanes;u=(1<<31-We(42|n)+1)-1,u&=i&~(r&~h),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,im(l,u))}else u=jn,u=ku(l,l===$n?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Ki(l,u)||(t=!0,im(l,u));l=l.next}while(t);Sf=!1}}function i1(){em()}function em(){ir=Tf=!1;var n=0;El!==0&&g1()&&(n=El);for(var e=Q(),t=null,l=Hi;l!==null;){var i=l.next,u=tm(l,e);u===0?(l.next=null,t===null?Hi=i:t.next=i,i===null&&(wi=t)):(t=l,(n!==0||(u&3)!==0)&&(ir=!0)),l=i}ue!==0&&ue!==5||Ou(n),El!==0&&(El=0)}function tm(n,e){for(var t=n.suspendedLanes,l=n.pingedLanes,i=n.expirationTimes,u=n.pendingLanes&-62914561;0<u;){var r=31-We(u),h=1<<r,g=i[r];g===-1?((h&t)===0||(h&l)!==0)&&(i[r]=Sg(h,e)):g<=e&&(n.expiredLanes|=h),u&=~h}if(e=$n,t=jn,t=ku(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===e&&(Kn===2||Kn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&H(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Ki(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(l!==null&&H(l),Mr(t)){case 2:case 8:t=nn;break;case 32:t=sn;break;case 268435456:t=pn;break;default:t=sn}return l=lm.bind(null,n),t=j(t,l),n.callbackPriority=e,n.callbackNode=t,e}return l!==null&&l!==null&&H(l),n.callbackPriority=2,n.callbackNode=null,2}function lm(n,e){if(ue!==0&&ue!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(lr()&&n.callbackNode!==t)return null;var l=jn;return l=ku(n,n===$n?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Zd(n,l,e),tm(n,Q()),n.callbackNode!=null&&n.callbackNode===t?lm.bind(null,n):null)}function im(n,e){if(lr())return null;Zd(n,e,!0)}function u1(){p1(function(){(Zn&6)!==0?j(k,i1):em()})}function xf(){if(El===0){var n=ql;n===0&&(n=Ku,Ku<<=1,(Ku&261888)===0&&(Ku=256)),El=n}return El}function um(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:na(n)}function a1(n,e,t,l,i){if(e==="submit"&&t&&t.stateNode===i){var u=um((i[Ve]||null).action),r=l.submitter;r&&(e=(e=r[Ve]||null)?um(e.formAction):r.getAttribute("formAction"),e!==null&&(u=e,r=null));var h=new ia("action","action",null,l,i);n.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(El!==0){var g=new FormData(i,r);Dc(t,{pending:!0,data:g,method:i.method,action:u},null,g)}}else typeof u=="function"&&(h.preventDefault(),g=new FormData(i,r),Dc(t,{pending:!0,data:g,method:i.method,action:u},u,g))},currentTarget:i}]})}}for(var bf=0;bf<Jr.length;bf++){var Nf=Jr[bf],r1=Nf.toLowerCase(),c1=Nf[0].toUpperCase()+Nf.slice(1);vt(r1,"on"+c1)}vt(Rs,"onAnimationEnd"),vt(js,"onAnimationIteration"),vt(Ys,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(v0,"onTransitionRun"),vt(p0,"onTransitionStart"),vt(A0,"onTransitionCancel"),vt(Hs,"onTransitionEnd"),li("onMouseEnter",["mouseout","mouseover"]),li("onMouseLeave",["mouseout","mouseover"]),li("onPointerEnter",["pointerout","pointerover"]),li("onPointerLeave",["pointerout","pointerover"]),jl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jl("onBeforeInput",["compositionend","keypress","textInput","paste"]),jl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cu));function am(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],i=l.event;l=l.listeners;n:{var u=void 0;if(e)for(var r=l.length-1;0<=r;r--){var h=l[r],g=h.instance,O=h.currentTarget;if(h=h.listener,g!==u&&i.isPropagationStopped())break n;u=h,i.currentTarget=O;try{u(i)}catch(Y){ra(Y)}i.currentTarget=null,u=g}else for(r=0;r<l.length;r++){if(h=l[r],g=h.instance,O=h.currentTarget,h=h.listener,g!==u&&i.isPropagationStopped())break n;u=h,i.currentTarget=O;try{u(i)}catch(Y){ra(Y)}i.currentTarget=null,u=g}}}}function Dn(n,e){var t=e[Xo];t===void 0&&(t=e[Xo]=new Set);var l=n+"__bubble";t.has(l)||(rm(e,n,2,!1),t.add(l))}function Mf(n,e,t){var l=0;e&&(l|=4),rm(t,n,l,e)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Of(n){if(!n[ur]){n[ur]=!0,Jo.forEach(function(t){t!=="selectionchange"&&(f1.has(t)||Mf(t,!1,n),Mf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ur]||(e[ur]=!0,Mf("selectionchange",!1,e))}}function rm(n,e,t,l){switch(Fm(e)){case 2:var i=ev;break;case 8:i=tv;break;default:i=If}t=i.bind(null,e,t,n),i=void 0,!Hr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function Cf(n,e,t,l,i){var u=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var h=l.stateNode.containerInfo;if(h===i)break;if(r===4)for(r=l.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;h!==null;){if(r=Rl(h),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){l=u=r;continue n}h=h.parentNode}}l=l.return}rs(function(){var O=u,Y=jr(t),L=[];n:{var N=ws.get(n);if(N!==void 0){var R=ia,F=n;switch(n){case"keypress":if(ta(t)===0)break n;case"keydown":case"keyup":R=Ig;break;case"focusin":F="focus",R=_r;break;case"focusout":F="blur",R=_r;break;case"beforeblur":case"afterblur":R=_r;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=$g;break;case Rs:case js:case Ys:R=_g;break;case Hs:R=n0;break;case"scroll":case"scrollend":R=Yg;break;case"wheel":R=t0;break;case"copy":case"cut":case"paste":R=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=hs;break;case"submit":R=Fg;break;case"toggle":case"beforetoggle":R=i0}var tn=(e&4)!==0,bn=!tn&&(n==="scroll"||n==="scrollend"),M=tn?N!==null?N+"Capture":null:N;tn=[];for(var S=O,D;S!==null;){var U=S;if(D=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||D===null||M===null||(U=Fi(S,M),U!=null&&tn.push(zu(S,U,D))),bn)break;S=S.return}0<tn.length&&(N=new R(N,F,null,t,Y),L.push({event:N,listeners:tn}))}}if((e&7)===0){n:{if(R=n==="mouseover"||n==="pointerover",N=n==="mouseout"||n==="pointerout",R&&t!==Rr&&(F=t.relatedTarget||t.fromElement)&&(Rl(F)||F[ni]))break n;(N||R)&&(F=Y.window===Y?Y:(R=Y.ownerDocument)?R.defaultView||R.parentWindow:window,N?(R=t.relatedTarget||t.toElement,N=O,R=R?Rl(R):null,R!==null&&(bn=y(R),tn=R.tag,R!==bn||tn!==5&&tn!==27&&tn!==6)&&(R=null)):(N=null,R=O),N!==R&&(tn=os,U="onMouseLeave",M="onMouseEnter",S="mouse",(n==="pointerout"||n==="pointerover")&&(tn=hs,U="onPointerLeave",M="onPointerEnter",S="pointer"),bn=N==null?F:ki(N),D=R==null?F:ki(R),F=new tn(U,S+"leave",N,t,Y),F.target=bn,F.relatedTarget=D,U=null,Rl(Y)===O&&(tn=new tn(M,S+"enter",R,t,Y),tn.target=D,tn.relatedTarget=bn,U=tn),bn=U,tn=N&&R?qn(N,R,o1):null,N!==null&&cm(L,F,N,tn,!1),R!==null&&bn!==null&&cm(L,bn,R,tn,!0)))}n:{if(N=O?ki(O):window,R=N.nodeName&&N.nodeName.toLowerCase(),R==="select"||R==="input"&&N.type==="file")var P=Es;else if(ps(N))if(Ts)P=m0;else{P=h0;var Yn=s0}else R=N.nodeName,!R||R.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?O&&Dr(O.elementType)&&(P=Es):P=d0;if(P&&(P=P(n,O))){As(L,P,t,Y);break n}Yn&&Yn(n,N,O)}switch(Yn=O?ki(O):window,n){case"focusin":(ps(Yn)||Yn.contentEditable==="true")&&(fi=Yn,Xr=O,iu=null);break;case"focusout":iu=Xr=fi=null;break;case"mousedown":Kr=!0;break;case"contextmenu":case"mouseup":case"dragend":Kr=!1,zs(L,t,Y);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":zs(L,t,Y)}var on;if(Gr)n:{switch(n){case"compositionstart":var yn="onCompositionStart";break n;case"compositionend":yn="onCompositionEnd";break n;case"compositionupdate":yn="onCompositionUpdate";break n}yn=void 0}else ci?gs(n,t)&&(yn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(yn="onCompositionStart");yn&&(ds&&t.locale!=="ko"&&(ci||yn!=="onCompositionStart"?yn==="onCompositionEnd"&&ci&&(on=cs()):(el=Y,wr="value"in el?el.value:el.textContent,ci=!0)),Yn=ar(O,yn),0<Yn.length&&(yn=new ss(yn,n,null,t,Y),L.push({event:yn,listeners:Yn}),on?yn.data=on:(on=vs(t),on!==null&&(yn.data=on)))),(on=a0?r0(n,t):c0(n,t))&&(yn=ar(O,"onBeforeInput"),0<yn.length&&(Yn=new ss("onBeforeInput","beforeinput",null,t,Y),L.push({event:Yn,listeners:yn}),Yn.data=on)),a1(L,n,O,t,Y)}am(L,e)})}function zu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ar(n,e){for(var t=e+"Capture",l=[];n!==null;){var i=n,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=Fi(n,t),i!=null&&l.unshift(zu(n,i,u)),i=Fi(n,e),i!=null&&l.push(zu(n,i,u))),n.tag===3)return l;n=n.return}return[]}function o1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function cm(n,e,t,l,i){for(var u=e._reactName,r=[];t!==null&&t!==l;){var h=t,g=h.alternate,O=h.stateNode;if(h=h.tag,g!==null&&g===l)break;h!==5&&h!==26&&h!==27||O===null||(g=O,i?(O=Fi(t,u),O!=null&&r.unshift(zu(t,O,g))):i||(O=Fi(t,u),O!=null&&r.push(zu(t,O,g)))),t=t.return}r.length!==0&&n.push({event:e,listeners:r})}var s1=/\r\n?/g,h1=/\u0000|\uFFFD/g;function fm(n){return(typeof n=="string"?n:""+n).replace(s1,`
`).replace(h1,"")}function om(n,e){return e=fm(e),fm(n)===e}function Jn(n,e,t,l,i,u){switch(t){case"children":if(typeof l=="string")e==="body"||e==="textarea"&&l===""||ui(n,l);else if(typeof l=="number"||typeof l=="bigint")e!=="body"&&ui(n,""+l);else return;break;case"className":Pu(n,"class",l);break;case"tabIndex":Pu(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pu(n,t,l);break;case"style":us(n,l,u);return;case"data":if(e!=="object"){Pu(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=na(l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(e!=="input"&&Jn(n,e,"name",i.name,i,null),Jn(n,e,"formEncType",i.formEncType,i,null),Jn(n,e,"formMethod",i.formMethod,i,null),Jn(n,e,"formTarget",i.formTarget,i,null)):(Jn(n,e,"encType",i.encType,i,null),Jn(n,e,"method",i.method,i,null),Jn(n,e,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=na(l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=Mt);return;case"onScroll":l!=null&&Dn("scroll",n);return;case"onScrollEnd":l!=null&&Dn("scrollend",n);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(f(60));(u!=null?u.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=na(l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":Dn("beforetoggle",n),Dn("toggle",n),$u(n,"popover",l);break;case"xlinkActuate":Lt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Lt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Lt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Lt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Lt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Lt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Lt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Lt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Lt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$u(n,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=Rg.get(t)||t,$u(n,t,l);else return}Ln=!0}function zf(n,e,t,l,i,u){switch(t){case"style":us(n,l,u);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(f(60));(u!=null?u.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"children":if(typeof l=="string")ui(n,l);else if(typeof l=="number"||typeof l=="bigint")ui(n,""+l);else return;break;case"onScroll":l!=null&&Dn("scroll",n);return;case"onScrollEnd":l!=null&&Dn("scrollend",n);return;case"onClick":l!=null&&(n.onclick=Mt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ko.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),u=t.slice(2,i?t.length-7:void 0),e=n[Ve]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(u,e,i),typeof l=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(u,l,i);break n}Ln=!0,t in n?n[t]=l:l===!0?n.setAttribute(t,""):$u(n,t,l)}return}Ln=!0}function je(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dn("error",n),Dn("load",n);var l=!1,i=!1,u;for(u in t)if(t.hasOwnProperty(u)){var r=t[u];if(r!=null)switch(u){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:Jn(n,e,u,r,t,null)}}i&&Jn(n,e,"srcSet",t.srcSet,t,null),l&&Jn(n,e,"src",t.src,t,null);return;case"input":Dn("invalid",n);var h=u=r=i=null,g=null,O=null;for(l in t)if(t.hasOwnProperty(l)){var Y=t[l];if(Y!=null)switch(l){case"name":i=Y;break;case"type":r=Y;break;case"checked":g=Y;break;case"defaultChecked":O=Y;break;case"value":u=Y;break;case"defaultValue":h=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(f(137,e));break;default:Jn(n,e,l,Y,t,null)}}es(n,u,h,g,O,r,i,!1);return;case"select":Dn("invalid",n),l=r=u=null;for(i in t)if(t.hasOwnProperty(i)&&(h=t[i],h!=null))switch(i){case"value":u=h;break;case"defaultValue":r=h;break;case"multiple":l=h;default:Jn(n,e,i,h,t,null)}e=u,t=r,n.multiple=!!l,e!=null?ii(n,!!l,e,!1):t!=null&&ii(n,!!l,t,!0);return;case"textarea":Dn("invalid",n),u=i=l=null;for(r in t)if(t.hasOwnProperty(r)&&(h=t[r],h!=null))switch(r){case"value":l=h;break;case"defaultValue":i=h;break;case"children":u=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(f(91));break;default:Jn(n,e,r,h,t,null)}ls(n,l,i,u);return;case"option":for(g in t)if(t.hasOwnProperty(g)&&(l=t[g],l!=null))switch(g){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jn(n,e,g,l,t,null)}return;case"dialog":Dn("beforetoggle",n),Dn("toggle",n),Dn("cancel",n),Dn("close",n);break;case"iframe":case"object":Dn("load",n);break;case"video":case"audio":for(l=0;l<Cu.length;l++)Dn(Cu[l],n);break;case"image":Dn("error",n),Dn("load",n);break;case"details":Dn("toggle",n);break;case"embed":case"source":case"link":Dn("error",n),Dn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in t)if(t.hasOwnProperty(O)&&(l=t[O],l!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:Jn(n,e,O,l,t,null)}return;default:if(Dr(e)){for(Y in t)t.hasOwnProperty(Y)&&(l=t[Y],l!==void 0&&zf(n,e,Y,l,t,void 0));return}}for(h in t)t.hasOwnProperty(h)&&(l=t[h],l!=null&&Jn(n,e,h,l,t,null))}var d1={};function m1(n,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,r=null,h=null,g=null,O=null,Y=null;for(R in t){var L=t[R];if(t.hasOwnProperty(R)&&L!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=L;default:l.hasOwnProperty(R)||Jn(n,e,R,null,l,L)}}for(var N in l){var R=l[N];if(L=t[N],l.hasOwnProperty(N)&&(R!=null||L!=null))switch(N){case"type":R!==L&&(Ln=!0),u=R;break;case"name":R!==L&&(Ln=!0),i=R;break;case"checked":R!==L&&(Ln=!0),O=R;break;case"defaultChecked":R!==L&&(Ln=!0),Y=R;break;case"value":R!==L&&(Ln=!0),r=R;break;case"defaultValue":R!==L&&(Ln=!0),h=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(f(137,e));break;default:R!==L&&Jn(n,e,N,R,l,L)}}Cr(n,r,h,g,O,Y,u,i);return;case"select":R=r=h=N=null;for(u in t)if(g=t[u],t.hasOwnProperty(u)&&g!=null)switch(u){case"value":break;case"multiple":R=g;default:l.hasOwnProperty(u)||Jn(n,e,u,null,l,g)}for(i in l)if(u=l[i],g=t[i],l.hasOwnProperty(i)&&(u!=null||g!=null))switch(i){case"value":u!==g&&(Ln=!0),N=u;break;case"defaultValue":u!==g&&(Ln=!0),h=u;break;case"multiple":u!==g&&(Ln=!0),r=u;default:u!==g&&Jn(n,e,i,u,l,g)}e=h,t=r,l=R,N!=null?ii(n,!!t,N,!1):!!l!=!!t&&(e!=null?ii(n,!!t,e,!0):ii(n,!!t,t?[]:"",!1));return;case"textarea":R=N=null;for(h in t)if(i=t[h],t.hasOwnProperty(h)&&i!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Jn(n,e,h,null,l,i)}for(r in l)if(i=l[r],u=t[r],l.hasOwnProperty(r)&&(i!=null||u!=null))switch(r){case"value":i!==u&&(Ln=!0),N=i;break;case"defaultValue":i!==u&&(Ln=!0),R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==u&&Jn(n,e,r,i,l,u)}ts(n,N,R);return;case"option":for(var F in t)if(N=t[F],t.hasOwnProperty(F)&&N!=null&&!l.hasOwnProperty(F))switch(F){case"selected":n.selected=!1;break;default:Jn(n,e,F,null,l,N)}for(g in l)if(N=l[g],R=t[g],l.hasOwnProperty(g)&&N!==R&&(N!=null||R!=null))switch(g){case"selected":N!==R&&(Ln=!0),n.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Jn(n,e,g,N,l,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tn in t)N=t[tn],t.hasOwnProperty(tn)&&N!=null&&!l.hasOwnProperty(tn)&&Jn(n,e,tn,null,l,N);for(O in l)if(N=l[O],R=t[O],l.hasOwnProperty(O)&&N!==R&&(N!=null||R!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(f(137,e));break;default:Jn(n,e,O,N,l,R)}return;default:if(Dr(e)){for(var bn in t)N=t[bn],t.hasOwnProperty(bn)&&N!==void 0&&!l.hasOwnProperty(bn)&&zf(n,e,bn,void 0,l,N);for(Y in l)N=l[Y],R=t[Y],!l.hasOwnProperty(Y)||N===R||N===void 0&&R===void 0||zf(n,e,Y,N,l,R);return}}for(var M in t)N=t[M],t.hasOwnProperty(M)&&N!=null&&!l.hasOwnProperty(M)&&Jn(n,e,M,null,l,N);for(L in l)N=l[L],R=t[L],!l.hasOwnProperty(L)||N===R||N==null&&R==null||Jn(n,e,L,N,l,R)}function sm(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function y1(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var i=t[l],u=i.transferSize,r=i.initiatorType,h=i.duration;if(u&&h&&sm(r)){for(r=0,h=i.responseEnd,l+=1;l<t.length;l++){var g=t[l],O=g.startTime;if(O>h)break;var Y=g.transferSize,L=g.initiatorType;Y&&sm(L)&&(g=g.responseEnd,r+=Y*(g<h?1:(h-O)/(g-O)))}if(--l,e+=8*(u+r)/(i.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Df=null,Rf=null;function Du(n){return n.nodeType===9?n:n.ownerDocument}function hm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dm(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function mm(n,e,t,l){return t=Du(t).createElement(n),t[Oe]=l,t[Ve]=e,je(t,n,e),Te(t),t}function jf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=null;function g1(){var n=window.event;return n&&n.type==="popstate"?n===Yf?!1:(Yf=n,!0):(Yf=null,!1)}var Hf=typeof setTimeout=="function"?setTimeout:void 0,v1=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,gm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Hf,p1=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(n){return ym.resolve(null).then(n).catch(A1)}:Hf;function A1(n){setTimeout(function(){throw n})}function Tl(n){return n==="head"}function vm(n,e){var t=e,l=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(i),Zi(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Zf(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,Zf(t);for(var u=t.firstChild;u;){var r=u.nextSibling,h=u.nodeName;u[Ji]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=r}}else t==="body"&&Zf(n.ownerDocument.body);t=i}while(t);Zi(e)}function pm(n,e){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function Am(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var l=1;else for(var i=l=0;i<e.length;i++){var u=e[i];0<u.width&&0<u.height&&l++}l===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function Em(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function E1(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function wf(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return E1(e,t,n)}function T1(n){return n.documentElement.clientHeight}function S1(n){this.addEventListener("load",n),this.addEventListener("error",n)}function x1(n,e,t,l,i,u,r,h,g){var O=e.nodeType===9?e:e.ownerDocument;try{var Y=O.startViewTransition({update:function(){var N=O.defaultView,R=N.navigation&&N.navigation.transition,F=O.fonts.status;l();var tn=[];if(F==="loaded"&&(T1(O),O.fonts.status==="loading"&&tn.push(O.fonts.ready)),F=tn.length,n!==null)for(var bn=n.suspenseyImages,M=0,S=0;S<bn.length;S++){var D=bn[S];if(!D.complete){var U=D.getBoundingClientRect();if(0<U.bottom&&0<U.right&&U.top<N.innerHeight&&U.left<N.innerWidth){if(M+=qm(D),M>fr){tn.length=F;break}D=new Promise(S1.bind(D)),tn.push(D)}}}if(0<tn.length)return N=Promise.race([Promise.all(tn),new Promise(function(P){return setTimeout(P,500)})]).then(i,i),(R?Promise.allSettled([R.finished,N]):N).then(u,u);if(i(),R)return R.finished.then(u,u);u()},types:t});O.__reactViewTransition=Y;var L=[];return Y.ready.then(function(){for(var N=O.documentElement.getAnimations({subtree:!0}),R=0;R<N.length;R++){var F=N[R],tn=F.effect,bn=tn.pseudoElement;if(bn!=null&&bn.startsWith("::view-transition")){L.push(F),F=tn.getKeyframes();for(var M=bn=void 0,S=!0,D=0;D<F.length;D++){var U=F[D],P=U.width;if(bn===void 0)bn=P;else if(bn!==P){S=!1;break}if(P=U.height,M===void 0)M=P;else if(M!==P){S=!1;break}delete U.width,delete U.height,U.transform==="none"&&delete U.transform}S&&bn!==void 0&&M!==void 0&&(tn.setKeyframes(F),S=getComputedStyle(tn.target,tn.pseudoElement),S.width!==bn||S.height!==M)&&(S=F[0],S.width=bn,S.height=M,S=F[F.length-1],S.width=bn,S.height=M,tn.setKeyframes(F))}}r()},function(N){O.__reactViewTransition===Y&&(O.__reactViewTransition=null);try{if(typeof N=="object"&&N!==null)switch(N.name){case"InvalidStateError":(N.message==="View transition was skipped because document visibility state is hidden."||N.message==="Skipping view transition because document visibility state has become hidden."||N.message==="Skipping view transition because viewport size changed."||N.message==="Transition was aborted because of invalid state")&&(N=null)}N!==null&&g(N)}finally{l(),i(),r()}}),Y.finished.finally(function(){for(var N=0;N<L.length;N++)L[N].cancel();O.__reactViewTransition===Y&&(O.__reactViewTransition=null),h()}),Y}catch{return l(),i(),r(),null}}function $l(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}$l.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:ln({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},$l.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),l=[],i=0;i<t.length;i++){var u=t[i].effect;u!==null&&u.target===n&&u.pseudoElement===e&&l.push(t[i])}return l},$l.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Tm(n){return{name:n,group:new $l("group",n),imagePair:new $l("image-pair",n),old:new $l("old",n),new:new $l("new",n)}}function ut(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}ut.prototype.addEventListener=function(n,e,t){var l=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(l=t.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(xm(u,n,e,t)===-1){var r=this,h=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(h=function(g){r.removeEventListener(n,e,t),typeof e=="function"?e.call(this,g):e.handleEvent(g)}),l!==null&&(i=r.removeEventListener.bind(r,n,e,t),l.addEventListener("abort",i,{once:!0}),i=l.removeEventListener.bind(l,"abort",i)),l=Bi(t),u.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:h,cleanup:i}),v(this._fragmentFiber.child,!1,b1,n,h,l)}this._eventListeners=u}};function b1(n,e,t,l){return gn(n).addEventListener(e,t,l),!1}ut.prototype.removeEventListener=function(n,e,t){var l=this._eventListeners;if(l!==null&&(e=xm(l,n,e,t),e!==-1)){var i=l[e];t=i.attachedListener;var u=i.cleanup;i=Bi(i.optionsOrUseCapture),v(this._fragmentFiber.child,!1,N1,n,t,i),l.splice(e,1),u!==null&&u()}};function N1(n,e,t,l){return gn(n).removeEventListener(e,t,l),!1}function Bi(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function Sm(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function xm(n,e,t,l){if(n.length===0)return-1;l=Sm(l);for(var i=0;i<n.length;i++){var u=n[i];if(u.type===e&&u.listener===t&&Sm(u.optionsOrUseCapture)===l)return i}return-1}ut.prototype.dispatchEvent=function(n){var e=E(this._fragmentFiber);if(e===null)return!0;e=gn(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var l=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var u=t[i];l.addEventListener(u.type,u.attachedListener,Bi(u.optionsOrUseCapture))}if(e.appendChild(l),n=l.dispatchEvent(n),t)for(i=0;i<t.length;i++)u=t[i],l.removeEventListener(u.type,u.attachedListener,Bi(u.optionsOrUseCapture));return e.removeChild(l),n}return e.dispatchEvent(n)},ut.prototype.focus=function(n){v(this._fragmentFiber.child,!0,bm,n,void 0,void 0)};function bm(n,e){return n.tag===6?!1:(n=gn(n),U1(n,e))}ut.prototype.focusLast=function(n){var e=[];v(this._fragmentFiber.child,!0,Bf,e,void 0,void 0);for(var t=e.length-1;0<=t&&!bm(e[t],n);t--);};function Bf(n,e){return e.push(n),!1}ut.prototype.blur=function(){var n=E(this._fragmentFiber);n!==null&&(n=gn(n),n=Du(n).activeElement,n!==null&&v(this._fragmentFiber.child,!1,M1,n,void 0,void 0))};function M1(n,e){return n.tag===6?!1:(n=gn(n),n===e||n.contains(e)?(e.blur(),!0):!1)}ut.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),v(this._fragmentFiber.child,!1,O1,n,void 0,void 0)};function O1(n,e){return n.tag===6||(n=gn(n),e.observe(n)),!1}ut.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),v(this._fragmentFiber.child,!1,C1,n,void 0,void 0);for(var t=e=0;t<St.length;t++){var l=St[t];l.fragmentInstance===this&&l.observer===n?n.unobserve(l.instance):St[e++]=l}St.length=e}};function C1(n,e){return n.tag===6||(n=gn(n),e.unobserve(n)),!1}var St=[],Uf=!1;function z1(n,e,t){St.push({fragmentInstance:n,observer:e,instance:t}),Uf||(Uf=!0,_1(function(){Uf=!1;var l=St;St=[];for(var i=0;i<l.length;i++){var u=l[i];u.observer.unobserve(u.instance)}}))}ut.prototype.getClientRects=function(){var n=[];return v(this._fragmentFiber.child,!1,D1,n,void 0,void 0),n};function D1(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=gn(n),e.push.apply(e,n.getClientRects());return!1}ut.prototype.getRootNode=function(n){var e=E(this._fragmentFiber);return e===null?this:gn(e).getRootNode(n)},ut.prototype.compareDocumentPosition=function(n){var e=E(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];v(this._fragmentFiber.child,!1,Bf,t,void 0,void 0);var l=gn(e);if(t.length===0){if(t=l,I(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var i=l=t.compareDocumentPosition(n);return t===n?i=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=Nn(e)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(n=gn(t).compareDocumentPosition(n),i=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=gn(t[0]),i=gn(t[t.length-1]);var u=I(this._fragmentFiber)?e.parentElement:l;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=u.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(n),h=i.compareDocumentPosition(n),g=r&Node.DOCUMENT_POSITION_CONTAINED_BY||h&Node.DOCUMENT_POSITION_CONTAINED_BY;return h=l&&u&&r&Node.DOCUMENT_POSITION_FOLLOWING&&h&Node.DOCUMENT_POSITION_PRECEDING,e=l&&e===n||u&&i===n||g||h?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&e===n||!u&&i===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||R1(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function R1(n,e,t,l,i){var u=Rl(i);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!u)n:{for(;u!==null;){if(u.tag===7&&(u===e||u.alternate===e)){t=!0;break n}u=u.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=i.ownerDocument,i===u||i===u.documentElement||i===u.body;n:{for(u=e,e=E(e);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==e&&u.alternate!==e)){u=!0;break n}u=u.return}u=!1}return u}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!u)&&!(e=u===t)&&(e=qn(t,u,Bn),e===null?e=!1:(v(e,!0,kn,u,t),u=Gn,Gn=null,e=u!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!u)&&!(e=u===l)&&(e=qn(l,u,Bn),e===null?e=!1:(v(e,!0,Tn,u,l),u=Gn,Rn=Gn=null,e=u!==null)),e):!1}function Nm(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}ut.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(f(566));var e=[];v(this._fragmentFiber.child,!1,Bf,e,void 0,void 0);var t=n!==!1;if(e.length===0){var l=Nn(this._fragmentFiber);if(l=t?l[1]||l[0]||E(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){n=gn(l),Nm(n,t);return}if(l=gn(l),l.nodeType!==9){if(l.nodeType===11){t="host"in l?l.host:null,t!==null&&t.scrollIntoView(n);return}l.scrollIntoView(n)}}for(l=t?e.length-1:0;l!==(t?-1:e.length);){var i=e[l];i.tag===6?(i=gn(i),Nm(i,t)):gn(i).scrollIntoView(n),l+=t?-1:1}};function j1(n,e){return n=gn(n),Mm(n,e),!1}function Mm(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function Om(n,e){var t=e._eventListeners;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];n.addEventListener(i.type,i.attachedListener,Bi(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(u){for(var r=0,h=0;h<St.length;h++){var g=St[h];(g.fragmentInstance!==e||g.observer!==u||g.instance!==n)&&(St[r++]=g)}St.length=r,u.observe(n)}),Mm(n,e))}function Y1(n,e){var t=e._eventListeners;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];n.removeEventListener(i.type,i.attachedListener,Bi(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(u){typeof u.rootMargin=="string"?z1(e,u,n):u.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function _f(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":_f(t),Wu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function H1(n,e,t,l){for(;n.nodeType===1;){var i=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ji])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(u=n.getAttribute("rel"),u==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(u!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(u=n.getAttribute("src"),(u!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===u)return n}else return n;if(n=mt(n.nextSibling),n===null)break}return null}function w1(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=mt(n.nextSibling),n===null))return null;return n}function Cm(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=mt(n.nextSibling),n===null))return null;return n}function Lf(n){return n.data==="$?"||n.data==="$~"}function Gf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function B1(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function mt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var qf=null;function zm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return mt(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Dm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function U1(n,e){function t(){l=!0}if(n.ownerDocument.activeElement===n)return!0;var l=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return l}function _1(n){gm(function(){gm(function(e){return n(e)})})}function Rm(n,e,t){switch(e=Du(t),n){case"html":if(n=e.documentElement,!n)throw Error(f(452));return n;case"head":if(n=e.head,!n)throw Error(f(453));return n;case"body":if(n=e.body,!n)throw Error(f(454));return n;default:throw Error(f(451))}}function jm(n,e,t){for(var l in t){var i=t[l];t.hasOwnProperty(l)&&i!=null&&Jn(n,e,l,null,d1,i)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Mt&&(n.onclick=null),Wu(n)}function Zf(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Wu(n)}var yt=new Map,Ym=new Set;function Ru(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var $t=fn.d;fn.d={f:L1,r:G1,D:q1,C:Z1,L:Q1,m:V1,X:K1,S:X1,M:I1};function L1(){var n=$t.f(),e=nr();return n||e}function G1(n){var e=ei(n);e!==null&&e.tag===5&&e.type==="form"?wh(e):$t.r(n)}var Ui=typeof document>"u"?null:document;function Hm(n,e,t){var l=Ui;if(l&&typeof e=="string"&&e){var i=rt(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Ym.has(i)||(Ym.add(i),n={rel:n,crossOrigin:t,href:e},l.querySelector(i)===null&&(e=l.createElement("link"),je(e,"link",n),Te(e),l.head.appendChild(e)))}}function q1(n){$t.D(n),Hm("dns-prefetch",n,null)}function Z1(n,e){$t.C(n,e),Hm("preconnect",n,e)}function Q1(n,e,t){$t.L(n,e,t);var l=Ui;if(l&&n&&e){var i='link[rel="preload"][as="'+rt(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+rt(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+rt(t.imageSizes)+'"]')):i+='[href="'+rt(n)+'"]';var u=i;switch(e){case"style":u=_i(n);break;case"script":u=Li(n)}if(!(yt.has(u)||(n=ln({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),yt.set(u,n),l.querySelector(i)!==null||e==="style"&&l.querySelector(ju(u))||e==="script"&&l.querySelector(Yu(u))))){var r=l.createElement("link");je(r,"link",n),e==="style"&&(r[Fu]=!0,r.onload=r.onerror=function(){Io(r)}),Te(r),l.head.appendChild(r)}}}function V1(n,e){$t.m(n,e);var t=Ui;if(t&&n){var l=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+rt(l)+'"][href="'+rt(n)+'"]',u=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Li(n)}if(!yt.has(u)&&(n=ln({rel:"modulepreload",href:n},e),yt.set(u,n),t.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Yu(u)))return}l=t.createElement("link"),je(l,"link",n),Te(l),t.head.appendChild(l)}}}function X1(n,e,t){$t.S(n,e,t);var l=Ui;if(l&&n){var i=ti(l).hoistableStyles,u=_i(n);e=e||"default";var r=i.get(u);if(!r){var h={loading:0,preload:null};if(r=l.querySelector(ju(u)))h.loading=5;else{n=ln({rel:"stylesheet",href:n,"data-precedence":e},t),(t=yt.get(u))&&Qf(n,t);var g=r=l.createElement("link");Te(g),je(g,"link",n),g._p=new Promise(function(O,Y){g.onload=O,g.onerror=Y}),g.addEventListener("load",function(){h.loading|=1}),g.addEventListener("error",function(){h.loading|=2}),h.loading|=4,rr(r,e,l)}r={type:"stylesheet",instance:r,count:1,state:h},i.set(u,r)}}}function K1(n,e){$t.X(n,e);var t=Ui;if(t&&n){var l=ti(t).hoistableScripts,i=Li(n),u=l.get(i);u||(u=t.querySelector(Yu(i)),u||(n=ln({src:n,async:!0},e),(e=yt.get(i))&&Vf(n,e),u=t.createElement("script"),Te(u),je(u,"link",n),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function I1(n,e){$t.M(n,e);var t=Ui;if(t&&n){var l=ti(t).hoistableScripts,i=Li(n),u=l.get(i);u||(u=t.querySelector(Yu(i)),u||(n=ln({src:n,async:!0,type:"module"},e),(e=yt.get(i))&&Vf(n,e),u=t.createElement("script"),Te(u),je(u,"link",n),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function wm(n,e,t,l){var i=(i=Fn.current)?Ru(i):null;if(!i)throw Error(f(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=_i(t.href),e=ti(i).hoistableStyles,l=e.get(t),l||(l={type:"style",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=_i(t.href);var u=ti(i).hoistableStyles,r=u.get(n);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(n,r),(u=i.querySelector(ju(n)))?u._p||(r.instance=u,r.state.loading=5):(u=yt.get(n),u||(u={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},yt.set(n,u)),J1(i,n,u,r.state))),e&&l===null)throw Error(f(528,""));return r}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=Li(t),e=ti(i).hoistableScripts,l=e.get(t),l||(l={type:"script",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,n))}}function _i(n){return'href="'+rt(n)+'"'}function ju(n){return'link[rel="stylesheet"]['+n+"]"}function Bm(n){return ln({},n,{"data-precedence":n.precedence,precedence:null})}function J1(n,e,t,l){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Fu]!==!0){l.loading=1;return}}else e=n.createElement("link"),e[Fu]=!0,e.onload=e.onerror=Io.bind(null,e),je(e,"link",t),Te(e),n.head.appendChild(e);l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2})}function Li(n){return'[src="'+rt(n)+'"]'}function Yu(n){return"script[async]"+n}function Um(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+rt(t.href)+'"]');if(l)return e.instance=l,Te(l),l;var i=ln({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Te(l),je(l,"style",i),rr(l,t.precedence,n),e.instance=l;case"stylesheet":i=_i(t.href);var u=n.querySelector(ju(i));if(u)return e.state.loading|=4,e.instance=u,Te(u),u;l=Bm(t),(i=yt.get(i))&&Qf(l,i),u=(n.ownerDocument||n).createElement("link"),Te(u);var r=u;return r._p=new Promise(function(h,g){r.onload=h,r.onerror=g}),je(u,"link",l),e.state.loading|=4,rr(u,t.precedence,n),e.instance=u;case"script":return u=Li(t.src),(i=n.querySelector(Yu(u)))?(e.instance=i,Te(i),i):(l=t,(i=yt.get(u))&&(l=ln({},t),Vf(l,i)),n=n.ownerDocument||n,i=n.createElement("script"),Te(i),je(i,"link",l),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,rr(l,t.precedence,n));return e.instance}function rr(n,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,u=i,r=0;r<l.length;r++){var h=l[r];if(h.dataset.precedence===e)u=h;else if(u!==i)break}u?u.parentNode.insertBefore(n,u.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Qf(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Vf(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var cr=null;function _m(n,e,t){if(cr===null){var l=new Map,i=cr=new Map;i.set(t,l)}else i=cr,l=i.get(t),l||(l=new Map,i.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),i=0;i<t.length;i++){var u=t[i];if(!(u[Ji]||u[Oe]||n==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var r=u.getAttribute(e)||"";r=n+r;var h=l.get(r);h?h.push(u):l.set(r,[u])}}return l}function Xf(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function k1(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Lm(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Gm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function qm(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Zm(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=qm(e),n.suspenseyImages.push(e)),n=$1.bind(n),e.decode().then(n,n))}function F1(n,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=_i(l.href),u=e.querySelector(ju(i));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Hu.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=u,Te(u);return}u=e.ownerDocument||e,l=Bm(l),(i=yt.get(i))&&Qf(l,i),u=u.createElement("link"),Te(u);var r=u;r._p=new Promise(function(h,g){r.onload=h,r.onerror=g}),je(u,"link",l),t.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Hu.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var fr=0;function W1(n,e){return n.stylesheets&&n.count===0&&sr(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&sr(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4+e);0<n.imgBytes&&fr===0&&(fr=62500*y1());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&sr(n,n.stylesheets),n.unsuspend)){var u=n.unsuspend;n.unsuspend=null,u()}},(n.imgBytes>fr?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Qm(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)sr(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function Hu(){this.count--,Qm(this)}function $1(){this.imgCount--,Qm(this)}var or=null;function sr(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,or=new Map,e.forEach(P1,n),or=null,Hu.call(n))}function P1(n,e){if(!(e.state.loading&4)){var t=or.get(n);if(t)var l=t.get(null);else{t=new Map,or.set(n,t);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var r=i[u];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),l=r)}l&&t.set(null,l)}i=e.instance,r=i.getAttribute("data-precedence"),u=t.get(r)||l,u===l&&t.set(null,i),t.set(r,i),this.count++,l=Hu.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),u?u.parentNode.insertBefore(i,u.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var Gi={$$typeof:Pn,Provider:null,Consumer:null,_currentValue:He,_currentValue2:He,_threadCount:0};function nv(n,e,t,l,i,u,r,h,g){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.hiddenUpdates=br(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.transitionTypes=null,this.incompleteTransitions=new Map}function Vm(n,e,t,l,i,u,r,h,g,O,Y,L){return n=new nv(n,e,t,r,g,O,Y,L,h),e=1,u===!0&&(e|=24),u=Xe(3,null,null,e),n.current=u,u.stateNode=n,e=uc(),e.refCount++,n.pooledCache=e,e.refCount++,u.memoizedState={element:l,isDehydrated:t,cache:e},fc(u),n}function Xm(n){return n?(n=hi,n):hi}function Km(n,e,t,l,i,u){i=Xm(i),l.context===null?l.context=i:l.pendingContext=i,l=fl(e),l.payload={element:t},u=u===void 0?null:u,u!==null&&(l.callback=u),t=ol(n,l,e),t!==null&&(ke(t,n,e),su(t,n,e))}function Im(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Kf(n,e){Im(n,e),(n=n.alternate)&&Im(n,e)}function Jm(n){if(n.tag===13||n.tag===31){var e=wl(n,67108864);e!==null&&ke(e,n,67108864),Kf(n,67108864)}}function km(n){if(n.tag===13||n.tag===31){var e=it();e=Nr(e);var t=wl(n,e);t!==null&&ke(t,n,e),Kf(n,e)}}var qi=!0;function ev(n,e,t,l){var i=W.T;W.T=null;var u=fn.p;try{fn.p=2,If(n,e,t,l)}finally{fn.p=u,W.T=i}}function tv(n,e,t,l){var i=W.T;W.T=null;var u=fn.p;try{fn.p=8,If(n,e,t,l)}finally{fn.p=u,W.T=i}}function If(n,e,t,l){if(qi){var i=Jf(l);if(i===null)Cf(n,e,l,hr,t),Wm(n,l);else if(iv(i,n,e,t,l))l.stopPropagation();else if(Wm(n,l),e&4&&-1<lv.indexOf(n)){for(;i!==null;){var u=ei(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var r=Dl(u.pendingLanes);if(r!==0){var h=u;for(h.pendingLanes|=2,h.entangledLanes|=2;r;){var g=1<<31-We(r);h.entanglements[1]|=g,r&=~g}Bt(u),(Zn&6)===0&&(Wa=Q()+500,Ou(0))}}break;case 31:case 13:h=wl(u,2),h!==null&&ke(h,u,2),nr(),Kf(u,2)}if(u=Jf(l),u===null&&Cf(n,e,l,hr,t),u===i)break;i=u}i!==null&&l.stopPropagation()}else Cf(n,e,l,null,t)}}function Jf(n){return n=jr(n),kf(n)}var hr=null;function kf(n){if(hr=null,n=Rl(n),n!==null){var e=y(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=p(e),n!==null)return n;n=null}else if(t===31){if(n=A(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return hr=n,null}function Fm(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_()){case k:return 2;case nn:return 8;case sn:case dn:return 32;case pn:return 268435456;default:return 32}default:return 32}}var Ff=!1,Sl=null,xl=null,bl=null,wu=new Map,Bu=new Map,Nl=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wm(n,e){switch(n){case"focusin":case"focusout":Sl=null;break;case"dragenter":case"dragleave":xl=null;break;case"mouseover":case"mouseout":bl=null;break;case"pointerover":case"pointerout":wu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bu.delete(e.pointerId)}}function Uu(n,e,t,l,i,u){return n===null||n.nativeEvent!==u?(n={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:u,targetContainers:[i]},e!==null&&(e=ei(e),e!==null&&Jm(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function iv(n,e,t,l,i){switch(e){case"focusin":return Sl=Uu(Sl,n,e,t,l,i),!0;case"dragenter":return xl=Uu(xl,n,e,t,l,i),!0;case"mouseover":return bl=Uu(bl,n,e,t,l,i),!0;case"pointerover":var u=i.pointerId;return wu.set(u,Uu(wu.get(u)||null,n,e,t,l,i)),!0;case"gotpointercapture":return u=i.pointerId,Bu.set(u,Uu(Bu.get(u)||null,n,e,t,l,i)),!0}return!1}function $m(n){var e=Rl(n.target);if(e!==null){var t=y(e);if(t!==null){if(e=t.tag,e===13){if(e=p(t),e!==null){n.blockedOn=e,Vo(n.priority,function(){km(t)});return}}else if(e===31){if(e=A(t),e!==null){n.blockedOn=e,Vo(n.priority,function(){km(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function dr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Jf(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);Rr=l,t.target.dispatchEvent(l),Rr=null}else return e=ei(t),e!==null&&Jm(e),n.blockedOn=t,!1;e.shift()}return!0}function Pm(n,e,t){dr(n)&&t.delete(e)}function uv(){Ff=!1,Sl!==null&&dr(Sl)&&(Sl=null),xl!==null&&dr(xl)&&(xl=null),bl!==null&&dr(bl)&&(bl=null),wu.forEach(Pm),Bu.forEach(Pm)}function mr(n,e){n.blockedOn===e&&(n.blockedOn=null,Ff||(Ff=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,uv)))}var yr=null;function ny(n){yr!==n&&(yr=n,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){yr===n&&(yr=null);for(var e=0;e<n.length;e+=3){var t=n[e],l=n[e+1],i=n[e+2];if(typeof l!="function"){if(kf(l||t)===null)continue;break}var u=ei(t);u!==null&&(n.splice(e,3),e-=3,Dc(u,{pending:!0,data:i,method:t.method,action:l},l,i))}}))}function Zi(n){function e(g){return mr(g,n)}Sl!==null&&mr(Sl,n),xl!==null&&mr(xl,n),bl!==null&&mr(bl,n),wu.forEach(e),Bu.forEach(e);for(var t=0;t<Nl.length;t++){var l=Nl[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Nl.length&&(t=Nl[0],t.blockedOn===null);)$m(t),t.blockedOn===null&&Nl.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var i=t[l],u=t[l+1],r=i[Ve]||null;if(typeof u=="function")r||ny(t);else if(r){var h=null;if(u&&u.hasAttribute("formAction")){if(i=u,r=u[Ve]||null)h=r.formAction;else if(kf(i)!==null)continue}else h=r.action;typeof h=="function"?t[l+1]=h:(t.splice(l,3),l-=3),ny(t)}}}function ey(){function n(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Wf(n){this._internalRoot=n}gr.prototype.render=Wf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(f(409));var t=e.current,l=it();Km(t,l,n,e,null,null)},gr.prototype.unmount=Wf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Km(n.current,2,null,n,null,null),nr(),e[ni]=null}};function gr(n){this._internalRoot=n}gr.prototype.unstable_scheduleHydration=function(n){if(n){var e=Qo();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Nl.length&&e!==0&&e<Nl[t].priority;t++);Nl.splice(t,0,n),t===0&&$m(n)}};var ty=o.version;if(ty!=="19.3.0")throw Error(f(527,ty,"19.3.0"));fn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(f(188)):(n=Object.keys(n).join(","),Error(f(268,n)));return n=x(e),n=n!==null?T(n):null,n=n===null?null:n.stateNode,n};var av={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{gt=vr.inject(av),ve=vr}catch{}}return Lu.createRoot=function(n,e){if(!d(n))throw Error(f(299));var t=!1,l="",i=Xh,u=Kh,r=Ih;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vm(n,1,!1,null,null,t,l,null,i,u,r,ey),n[ni]=e.current,Of(n),new Wf(e)},Lu.hydrateRoot=function(n,e,t){if(!d(n))throw Error(f(299));var l=!1,i="",u=Xh,r=Kh,h=Ih,g=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.formState!==void 0&&(g=t.formState)),e=Vm(n,1,!0,e,t??null,l,i,g,u,r,h,ey),e.context=Xm(null),t=e.current,l=it(),l=Nr(l),i=fl(l),i.callback=null,ol(t,i,l),t=l,e.current.lanes=t,Ii(e,t),Bt(e),n[ni]=e.current,Of(n),new gr(e)},Lu.version="19.3.0",Lu}var hy;function gv(){if(hy)return no.exports;hy=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),no.exports=yv(),no.exports}var vv=gv();function pv(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Be={},pr={},Ol={},dy;function Vu(){if(dy)return Ol;dy=1;function c(p){return typeof p>"u"||p===null}function o(p){return typeof p=="object"&&p!==null}function m(p){return Array.isArray(p)?p:c(p)?[]:[p]}function f(p,A){if(A){const z=Object.keys(A);for(let x=0,T=z.length;x<T;x+=1){const v=z[x];p[v]=A[v]}}return p}function d(p,A){let z="";for(let x=0;x<A;x+=1)z+=p;return z}function y(p){return p===0&&Number.NEGATIVE_INFINITY===1/p}return Ol.isNothing=c,Ol.isObject=o,Ol.toArray=m,Ol.repeat=d,Ol.isNegativeZero=y,Ol.extend=f,Ol}var io,my;function Xu(){if(my)return io;my=1;function c(m,f){let d="";const y=m.reason||"(unknown reason)";return m.mark?(m.mark.name&&(d+='in "'+m.mark.name+'" '),d+="("+(m.mark.line+1)+":"+(m.mark.column+1)+")",!f&&m.mark.snippet&&(d+=`

`+m.mark.snippet),y+" "+d):y}function o(m,f){Error.call(this),this.name="YAMLException",this.reason=m,this.mark=f,this.message=c(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return o.prototype=Object.create(Error.prototype),o.prototype.constructor=o,o.prototype.toString=function(f){return this.name+": "+c(this,f)},io=o,io}var uo,yy;function Av(){if(yy)return uo;yy=1;const c=Vu();function o(d,y,p,A,z){let x="",T="";const v=Math.floor(z/2)-1;return A-y>v&&(x=" ... ",y=A-v+x.length),p-A>v&&(T=" ...",p=A+v-T.length),{str:x+d.slice(y,p).replace(/\t/g,"→")+T,pos:A-y+x.length}}function m(d,y){return c.repeat(" ",y-d.length)+d}function f(d,y){if(y=Object.create(y||null),!d.buffer)return null;y.maxLength||(y.maxLength=79),typeof y.indent!="number"&&(y.indent=1),typeof y.linesBefore!="number"&&(y.linesBefore=3),typeof y.linesAfter!="number"&&(y.linesAfter=2);const p=/\r?\n|\r|\0/g,A=[0],z=[];let x,T=-1;for(;x=p.exec(d.buffer);)z.push(x.index),A.push(x.index+x[0].length),d.position<=x.index&&T<0&&(T=A.length-2);T<0&&(T=A.length-1);let v="";const E=Math.min(d.line+y.linesAfter,z.length).toString().length,I=y.maxLength-(y.indent+E+3);for(let hn=1;hn<=y.linesBefore&&!(T-hn<0);hn++){const gn=o(d.buffer,A[T-hn],z[T-hn],d.position-(A[T]-A[T-hn]),I);v=c.repeat(" ",y.indent)+m((d.line-hn+1).toString(),E)+" | "+gn.str+`
`+v}const Nn=o(d.buffer,A[T],z[T],d.position,I);v+=c.repeat(" ",y.indent)+m((d.line+1).toString(),E)+" | "+Nn.str+`
`,v+=c.repeat("-",y.indent+E+3+Nn.pos)+`^
`;for(let hn=1;hn<=y.linesAfter&&!(T+hn>=z.length);hn++){const gn=o(d.buffer,A[T+hn],z[T+hn],d.position-(A[T]-A[T+hn]),I);v+=c.repeat(" ",y.indent)+m((d.line+hn+1).toString(),E)+" | "+gn.str+`
`}return v.replace(/\n$/,"")}return uo=f,uo}var ao,gy;function Ze(){if(gy)return ao;gy=1;const c=Xu(),o=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],m=["scalar","sequence","mapping"];function f(y){const p={};return y!==null&&Object.keys(y).forEach(function(A){y[A].forEach(function(z){p[String(z)]=A})}),p}function d(y,p){if(p=p||{},Object.keys(p).forEach(function(A){if(o.indexOf(A)===-1)throw new c('Unknown option "'+A+'" is met in definition of "'+y+'" YAML type.')}),this.options=p,this.tag=y,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(A){return A},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=f(p.styleAliases||null),m.indexOf(this.kind)===-1)throw new c('Unknown kind "'+this.kind+'" is specified for "'+y+'" YAML type.')}return ao=d,ao}var ro,vy;function Vy(){if(vy)return ro;vy=1;const c=Xu(),o=Ze();function m(y,p){const A=[];return y[p].forEach(function(z){let x=A.length;A.forEach(function(T,v){T.tag===z.tag&&T.kind===z.kind&&T.multi===z.multi&&(x=v)}),A[x]=z}),A}function f(){const y={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function p(A){A.multi?(y.multi[A.kind].push(A),y.multi.fallback.push(A)):y[A.kind][A.tag]=y.fallback[A.tag]=A}for(let A=0,z=arguments.length;A<z;A+=1)arguments[A].forEach(p);return y}function d(y){return this.extend(y)}return d.prototype.extend=function(p){let A=[],z=[];if(p instanceof o)z.push(p);else if(Array.isArray(p))z=z.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(A=A.concat(p.implicit)),p.explicit&&(z=z.concat(p.explicit));else throw new c("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");A.forEach(function(T){if(!(T instanceof o))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(T.loadKind&&T.loadKind!=="scalar")throw new c("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(T.multi)throw new c("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),z.forEach(function(T){if(!(T instanceof o))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const x=Object.create(d.prototype);return x.implicit=(this.implicit||[]).concat(A),x.explicit=(this.explicit||[]).concat(z),x.compiledImplicit=m(x,"implicit"),x.compiledExplicit=m(x,"explicit"),x.compiledTypeMap=f(x.compiledImplicit,x.compiledExplicit),x},ro=d,ro}var co,py;function Xy(){if(py)return co;py=1;const c=Ze();return co=new c("tag:yaml.org,2002:str",{kind:"scalar",construct:function(o){return o!==null?o:""}}),co}var fo,Ay;function Ky(){if(Ay)return fo;Ay=1;const c=Ze();return fo=new c("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(o){return o!==null?o:[]}}),fo}var oo,Ey;function Iy(){if(Ey)return oo;Ey=1;const c=Ze();return oo=new c("tag:yaml.org,2002:map",{kind:"mapping",construct:function(o){return o!==null?o:{}}}),oo}var so,Ty;function Jy(){if(Ty)return so;Ty=1;const c=Vy();return so=new c({explicit:[Xy(),Ky(),Iy()]}),so}var ho,Sy;function ky(){if(Sy)return ho;Sy=1;const c=Ze();function o(d){if(d===null)return!0;const y=d.length;return y===1&&d==="~"||y===4&&(d==="null"||d==="Null"||d==="NULL")}function m(){return null}function f(d){return d===null}return ho=new c("tag:yaml.org,2002:null",{kind:"scalar",resolve:o,construct:m,predicate:f,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),ho}var mo,xy;function Fy(){if(xy)return mo;xy=1;const c=Ze();function o(d){if(d===null)return!1;const y=d.length;return y===4&&(d==="true"||d==="True"||d==="TRUE")||y===5&&(d==="false"||d==="False"||d==="FALSE")}function m(d){return d==="true"||d==="True"||d==="TRUE"}function f(d){return Object.prototype.toString.call(d)==="[object Boolean]"}return mo=new c("tag:yaml.org,2002:bool",{kind:"scalar",resolve:o,construct:m,predicate:f,represent:{lowercase:function(d){return d?"true":"false"},uppercase:function(d){return d?"TRUE":"FALSE"},camelcase:function(d){return d?"True":"False"}},defaultStyle:"lowercase"}),mo}var yo,by;function Wy(){if(by)return yo;by=1;const c=Vu(),o=Ze();function m(x){return x>=48&&x<=57||x>=65&&x<=70||x>=97&&x<=102}function f(x){return x>=48&&x<=55}function d(x){return x>=48&&x<=57}function y(x){if(x===null)return!1;const T=x.length;let v=0,E=!1;if(!T)return!1;let I=x[v];if((I==="-"||I==="+")&&(I=x[++v]),I==="0"){if(v+1===T)return!0;if(I=x[++v],I==="b"){for(v++;v<T;v++){if(I=x[v],I!=="0"&&I!=="1")return!1;E=!0}return E&&isFinite(p(x))}if(I==="x"){for(v++;v<T;v++){if(!m(x.charCodeAt(v)))return!1;E=!0}return E&&isFinite(p(x))}if(I==="o"){for(v++;v<T;v++){if(!f(x.charCodeAt(v)))return!1;E=!0}return E&&isFinite(p(x))}}for(;v<T;v++){if(!d(x.charCodeAt(v)))return!1;E=!0}return E?isFinite(p(x)):!1}function p(x){let T=x,v=1,E=T[0];if((E==="-"||E==="+")&&(E==="-"&&(v=-1),T=T.slice(1),E=T[0]),T==="0")return 0;if(E==="0"){if(T[1]==="b")return v*parseInt(T.slice(2),2);if(T[1]==="x")return v*parseInt(T.slice(2),16);if(T[1]==="o")return v*parseInt(T.slice(2),8)}return v*parseInt(T,10)}function A(x){return p(x)}function z(x){return Object.prototype.toString.call(x)==="[object Number]"&&x%1===0&&!c.isNegativeZero(x)}return yo=new o("tag:yaml.org,2002:int",{kind:"scalar",resolve:y,construct:A,predicate:z,represent:{binary:function(x){return x>=0?"0b"+x.toString(2):"-0b"+x.toString(2).slice(1)},octal:function(x){return x>=0?"0o"+x.toString(8):"-0o"+x.toString(8).slice(1)},decimal:function(x){return x.toString(10)},hexadecimal:function(x){return x>=0?"0x"+x.toString(16).toUpperCase():"-0x"+x.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo}var go,Ny;function $y(){if(Ny)return go;Ny=1;const c=Vu(),o=Ze(),m=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),f=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function d(x){return x===null||!m.test(x)?!1:isFinite(parseFloat(x,10))?!0:f.test(x)}function y(x){let T=x.toLowerCase();const v=T[0]==="-"?-1:1;return"+-".indexOf(T[0])>=0&&(T=T.slice(1)),T===".inf"?v===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:T===".nan"?NaN:v*parseFloat(T,10)}const p=/^[-+]?[0-9]+e/;function A(x,T){if(isNaN(x))switch(T){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===x)switch(T){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===x)switch(T){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(c.isNegativeZero(x))return"-0.0";const v=x.toString(10);return p.test(v)?v.replace("e",".e"):v}function z(x){return Object.prototype.toString.call(x)==="[object Number]"&&(x%1!==0||c.isNegativeZero(x))}return go=new o("tag:yaml.org,2002:float",{kind:"scalar",resolve:d,construct:y,predicate:z,represent:A,defaultStyle:"lowercase"}),go}var vo,My;function Py(){return My||(My=1,vo=Jy().extend({implicit:[ky(),Fy(),Wy(),$y()]})),vo}var po,Oy;function ng(){return Oy||(Oy=1,po=Py()),po}var Ao,Cy;function eg(){if(Cy)return Ao;Cy=1;const c=Ze(),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),m=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function f(p){return p===null?!1:o.exec(p)!==null||m.exec(p)!==null}function d(p){let A=0,z=null,x=o.exec(p);if(x===null&&(x=m.exec(p)),x===null)throw new Error("Date resolve error");const T=+x[1],v=+x[2]-1,E=+x[3];if(!x[4])return new Date(Date.UTC(T,v,E));const I=+x[4],Nn=+x[5],hn=+x[6];if(x[7]){for(A=x[7].slice(0,3);A.length<3;)A+="0";A=+A}if(x[9]){const Gn=+x[10],Rn=+(x[11]||0);z=(Gn*60+Rn)*6e4,x[9]==="-"&&(z=-z)}const gn=new Date(Date.UTC(T,v,E,I,Nn,hn,A));return z&&gn.setTime(gn.getTime()-z),gn}function y(p){return p.toISOString()}return Ao=new c("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:f,construct:d,instanceOf:Date,represent:y}),Ao}var Eo,zy;function tg(){if(zy)return Eo;zy=1;const c=Ze();function o(m){return m==="<<"||m===null}return Eo=new c("tag:yaml.org,2002:merge",{kind:"scalar",resolve:o}),Eo}var To,Dy;function lg(){if(Dy)return To;Dy=1;const c=Ze(),o=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function m(p){if(p===null)return!1;let A=0;const z=p.length,x=o;for(let T=0;T<z;T++){const v=x.indexOf(p.charAt(T));if(!(v>64)){if(v<0)return!1;A+=6}}return A%8===0}function f(p){const A=p.replace(/[\r\n=]/g,""),z=A.length,x=o;let T=0;const v=[];for(let I=0;I<z;I++)I%4===0&&I&&(v.push(T>>16&255),v.push(T>>8&255),v.push(T&255)),T=T<<6|x.indexOf(A.charAt(I));const E=z%4*6;return E===0?(v.push(T>>16&255),v.push(T>>8&255),v.push(T&255)):E===18?(v.push(T>>10&255),v.push(T>>2&255)):E===12&&v.push(T>>4&255),new Uint8Array(v)}function d(p){let A="",z=0;const x=p.length,T=o;for(let E=0;E<x;E++)E%3===0&&E&&(A+=T[z>>18&63],A+=T[z>>12&63],A+=T[z>>6&63],A+=T[z&63]),z=(z<<8)+p[E];const v=x%3;return v===0?(A+=T[z>>18&63],A+=T[z>>12&63],A+=T[z>>6&63],A+=T[z&63]):v===2?(A+=T[z>>10&63],A+=T[z>>4&63],A+=T[z<<2&63],A+=T[64]):v===1&&(A+=T[z>>2&63],A+=T[z<<4&63],A+=T[64],A+=T[64]),A}function y(p){return Object.prototype.toString.call(p)==="[object Uint8Array]"}return To=new c("tag:yaml.org,2002:binary",{kind:"scalar",resolve:m,construct:f,predicate:y,represent:d}),To}var So,Ry;function ig(){if(Ry)return So;Ry=1;const c=Ze(),o=Object.prototype.hasOwnProperty,m=Object.prototype.toString;function f(y){if(y===null)return!0;const p={},A=y;for(let z=0,x=A.length;z<x;z+=1){const T=A[z];let v=!1;if(m.call(T)!=="[object Object]")return!1;let E;for(E in T)if(o.call(T,E))if(!v)v=!0;else return!1;if(!v||o.call(p,E))return!1;Object.defineProperty(p,E,{value:!0})}return!0}function d(y){return y!==null?y:[]}return So=new c("tag:yaml.org,2002:omap",{kind:"sequence",resolve:f,construct:d}),So}var xo,jy;function ug(){if(jy)return xo;jy=1;const c=Ze(),o=Object.prototype.toString;function m(d){if(d===null)return!0;const y=d,p=new Array(y.length);for(let A=0,z=y.length;A<z;A+=1){const x=y[A];if(o.call(x)!=="[object Object]")return!1;const T=Object.keys(x);if(T.length!==1)return!1;p[A]=[T[0],x[T[0]]]}return!0}function f(d){if(d===null)return[];const y=d,p=new Array(y.length);for(let A=0,z=y.length;A<z;A+=1){const x=y[A],T=Object.keys(x);p[A]=[T[0],x[T[0]]]}return p}return xo=new c("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:m,construct:f}),xo}var bo,Yy;function ag(){if(Yy)return bo;Yy=1;const c=Ze(),o=Object.prototype.hasOwnProperty;function m(d){if(d===null)return!0;const y=d;for(const p in y)if(o.call(y,p)&&y[p]!==null)return!1;return!0}function f(d){return d!==null?d:{}}return bo=new c("tag:yaml.org,2002:set",{kind:"mapping",resolve:m,construct:f}),bo}var No,Hy;function Ro(){return Hy||(Hy=1,No=ng().extend({implicit:[eg(),tg()],explicit:[lg(),ig(),ug(),ag()]})),No}var wy;function Ev(){if(wy)return pr;wy=1;const c=Vu(),o=Xu(),m=Av(),f=Ro(),d=Object.prototype.hasOwnProperty,y=1,p=2,A=3,z=4,x=1,T=2,v=3,E=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,I=/[\x85\u2028\u2029]/,Nn=/[,\[\]{}]/,hn=/^(?:!|!!|![0-9A-Za-z-]+!)$/,gn=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function Gn(a){return Object.prototype.toString.call(a)}function Rn(a){return a===10||a===13}function kn(a){return a===9||a===32}function Tn(a){return a===9||a===32||a===10||a===13}function Bn(a){return a===44||a===91||a===93||a===123||a===125}function qn(a){if(a>=48&&a<=57)return a-48;const C=a|32;return C>=97&&C<=102?C-97+10:-1}function ln(a){return a===120?2:a===117?4:a===85?8:0}function rn(a){return a>=48&&a<=57?a-48:-1}function mn(a){switch(a){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function ye(a){return a<=65535?String.fromCharCode(a):String.fromCharCode((a-65536>>10)+55296,(a-65536&1023)+56320)}function ie(a,C,G){C==="__proto__"?Object.defineProperty(a,C,{configurable:!0,enumerable:!0,writable:!0,value:G}):a[C]=G}const re=new Array(256),Ne=new Array(256);for(let a=0;a<256;a++)re[a]=mn(a)?1:0,Ne[a]=mn(a);function Qn(a,C){this.input=a,this.filename=C.filename||null,this.schema=C.schema||f,this.onWarning=C.onWarning||null,this.legacy=C.legacy||!1,this.json=C.json||!1,this.listener=C.listener||null,this.maxDepth=typeof C.maxDepth=="number"?C.maxDepth:100,this.maxTotalMergeKeys=typeof C.maxTotalMergeKeys=="number"?C.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=a.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Pn(a,C){const G={name:a.filename,buffer:a.input.slice(0,-1),position:a.position,line:a.line,column:a.position-a.lineStart};return G.snippet=m(G),new o(C,G)}function w(a,C){throw Pn(a,C)}function an(a,C){a.onWarning&&a.onWarning.call(null,Pn(a,C))}function en(a,C,G){const Z=a.anchorMapTransactions;if(Z.length!==0){const B=Z[Z.length-1];d.call(B,C)||(B[C]={existed:d.call(a.anchorMap,C),value:a.anchorMap[C]})}a.anchorMap[C]=G}function _n(a){a.anchorMapTransactions.push(Object.create(null))}function On(a){const C=a.anchorMapTransactions.pop(),G=a.anchorMapTransactions;if(G.length===0)return;const Z=G[G.length-1],B=Object.keys(C);for(let s=0,j=B.length;s<j;s+=1){const H=B[s];d.call(Z,H)||(Z[H]=C[H])}}function ge(a){const C=a.anchorMapTransactions.pop(),G=Object.keys(C);for(let Z=G.length-1;Z>=0;Z-=1){const B=C[G[Z]];B.existed?a.anchorMap[G[Z]]=B.value:delete a.anchorMap[G[Z]]}}function wn(a){return{position:a.position,line:a.line,lineStart:a.lineStart,lineIndent:a.lineIndent,firstTabInLine:a.firstTabInLine,tag:a.tag,anchor:a.anchor,kind:a.kind,result:a.result}}function Me(a,C){a.position=C.position,a.line=C.line,a.lineStart=C.lineStart,a.lineIndent=C.lineIndent,a.firstTabInLine=C.firstTabInLine,a.tag=C.tag,a.anchor=C.anchor,a.kind=C.kind,a.result=C.result}const b={YAML:function(C,G,Z){C.version!==null&&w(C,"duplication of %YAML directive"),Z.length!==1&&w(C,"YAML directive accepts exactly one argument");const B=/^([0-9]+)\.([0-9]+)$/.exec(Z[0]);B===null&&w(C,"ill-formed argument of the YAML directive");const s=parseInt(B[1],10),j=parseInt(B[2],10);s!==1&&w(C,"unacceptable YAML version of the document"),C.version=Z[0],C.checkLineBreaks=j<2,j!==1&&j!==2&&an(C,"unsupported YAML version of the document")},TAG:function(C,G,Z){let B;Z.length!==2&&w(C,"TAG directive accepts exactly two arguments");const s=Z[0];B=Z[1],hn.test(s)||w(C,"ill-formed tag handle (first argument) of the TAG directive"),d.call(C.tagMap,s)&&w(C,'there is a previously declared suffix for "'+s+'" tag handle'),gn.test(B)||w(C,"ill-formed tag prefix (second argument) of the TAG directive");try{B=decodeURIComponent(B)}catch{w(C,"tag prefix is malformed: "+B)}C.tagMap[s]=B}};function q(a,C,G,Z){if(C<G){const B=a.input.slice(C,G);if(Z)for(let s=0,j=B.length;s<j;s+=1){const H=B.charCodeAt(s);H===9||H>=32&&H<=1114111||w(a,"expected valid JSON character")}else E.test(B)&&w(a,"the stream contains non-printable characters");a.result+=B}}function $(a){a.totalMergeKeys++,a.maxTotalMergeKeys!==-1&&a.totalMergeKeys>a.maxTotalMergeKeys&&w(a,"merge keys exceeded maxTotalMergeKeys ("+a.maxTotalMergeKeys+")")}function un(a,C,G,Z){c.isObject(G)||w(a,"cannot merge mappings; the provided source object is unacceptable"),$(a);const B=Object.keys(G);for(let s=0,j=B.length;s<j;s+=1){const H=B[s];$(a),d.call(C,H)||(ie(C,H,G[H]),Z[H]=!0)}}function An(a,C,G,Z,B,s,j,H,V){if(Array.isArray(B)){B=Array.prototype.slice.call(B);for(let K=0,Q=B.length;K<Q;K+=1)Array.isArray(B[K])&&w(a,"nested arrays are not supported inside keys"),typeof B=="object"&&Gn(B[K])==="[object Object]"&&(B[K]="[object Object]")}if(typeof B=="object"&&Gn(B)==="[object Object]"&&(B="[object Object]"),B=String(B),C===null&&(C={}),Z==="tag:yaml.org,2002:merge")if(Array.isArray(s)){s.length>100&&w(a,"abnormal merge sequence size");for(let K=0,Q=s.length;K<Q;K+=1)un(a,C,s[K],G)}else un(a,C,s,G);else!a.json&&!d.call(G,B)&&d.call(C,B)&&(a.line=j||a.line,a.lineStart=H||a.lineStart,a.position=V||a.position,w(a,"duplicated mapping key")),ie(C,B,s),delete G[B];return C}function Sn(a){const C=a.input.charCodeAt(a.position);C===10?a.position++:C===13?(a.position++,a.input.charCodeAt(a.position)===10&&a.position++):w(a,"a line break is expected"),a.line+=1,a.lineStart=a.position,a.firstTabInLine=-1}function cn(a,C,G){let Z=0,B=a.input.charCodeAt(a.position);for(;B!==0;){for(;kn(B);)B===9&&a.firstTabInLine===-1&&(a.firstTabInLine=a.position),B=a.input.charCodeAt(++a.position);if(C&&B===35)do B=a.input.charCodeAt(++a.position);while(B!==10&&B!==13&&B!==0);if(Rn(B))for(Sn(a),B=a.input.charCodeAt(a.position),Z++,a.lineIndent=0;B===32;)a.lineIndent++,B=a.input.charCodeAt(++a.position);else break}return G!==-1&&Z!==0&&a.lineIndent<G&&an(a,"deficient indentation"),Z}function W(a){let C=a.position,G=a.input.charCodeAt(C);return!!((G===45||G===46)&&G===a.input.charCodeAt(C+1)&&G===a.input.charCodeAt(C+2)&&(C+=3,G=a.input.charCodeAt(C),G===0||Tn(G)))}function fn(a,C){C===1?a.result+=" ":C>1&&(a.result+=c.repeat(`
`,C-1))}function He(a,C,G){let Z,B,s,j,H,V;const K=a.kind,Q=a.result;let _=a.input.charCodeAt(a.position);if(Tn(_)||Bn(_)||_===35||_===38||_===42||_===33||_===124||_===62||_===39||_===34||_===37||_===64||_===96)return!1;if(_===63||_===45){const k=a.input.charCodeAt(a.position+1);if(Tn(k)||G&&Bn(k))return!1}for(a.kind="scalar",a.result="",Z=B=a.position,s=!1;_!==0;){if(_===58){const k=a.input.charCodeAt(a.position+1);if(Tn(k)||G&&Bn(k))break}else if(_===35){const k=a.input.charCodeAt(a.position-1);if(Tn(k))break}else{if(a.position===a.lineStart&&W(a)||G&&Bn(_))break;if(Rn(_))if(j=a.line,H=a.lineStart,V=a.lineIndent,cn(a,!1,-1),a.lineIndent>=C){s=!0,_=a.input.charCodeAt(a.position);continue}else{a.position=B,a.line=j,a.lineStart=H,a.lineIndent=V;break}}s&&(q(a,Z,B,!1),fn(a,a.line-j),Z=B=a.position,s=!1),kn(_)||(B=a.position+1),_=a.input.charCodeAt(++a.position)}return q(a,Z,B,!1),a.result?!0:(a.kind=K,a.result=Q,!1)}function at(a,C){let G,Z,B=a.input.charCodeAt(a.position);if(B!==39)return!1;for(a.kind="scalar",a.result="",a.position++,G=Z=a.position;(B=a.input.charCodeAt(a.position))!==0;)if(B===39)if(q(a,G,a.position,!0),B=a.input.charCodeAt(++a.position),B===39)G=a.position,a.position++,Z=a.position;else return!0;else Rn(B)?(q(a,G,Z,!0),fn(a,cn(a,!1,C)),G=Z=a.position):a.position===a.lineStart&&W(a)?w(a,"unexpected end of the document within a single quoted scalar"):(a.position++,kn(B)||(Z=a.position));w(a,"unexpected end of the stream within a single quoted scalar")}function Qe(a,C){let G,Z,B,s=a.input.charCodeAt(a.position);if(s!==34)return!1;for(a.kind="scalar",a.result="",a.position++,G=Z=a.position;(s=a.input.charCodeAt(a.position))!==0;){if(s===34)return q(a,G,a.position,!0),a.position++,!0;if(s===92){if(q(a,G,a.position,!0),s=a.input.charCodeAt(++a.position),Rn(s))cn(a,!1,C);else if(s<256&&re[s])a.result+=Ne[s],a.position++;else if((B=ln(s))>0){let j=B,H=0;for(;j>0;j--)s=a.input.charCodeAt(++a.position),(B=qn(s))>=0?H=(H<<4)+B:w(a,"expected hexadecimal character");a.result+=ye(H),a.position++}else w(a,"unknown escape sequence");G=Z=a.position}else Rn(s)?(q(a,G,Z,!0),fn(a,cn(a,!1,C)),G=Z=a.position):a.position===a.lineStart&&W(a)?w(a,"unexpected end of the document within a double quoted scalar"):(a.position++,kn(s)||(Z=a.position))}w(a,"unexpected end of the stream within a double quoted scalar")}function Ae(a,C){let G=!0,Z,B,s;const j=a.tag;let H;const V=a.anchor;let K,Q,_,k;const nn=Object.create(null);let sn,dn,pn,Mn=a.input.charCodeAt(a.position);if(Mn===91)K=93,k=!1,H=[];else if(Mn===123)K=125,k=!0,H={};else return!1;for(a.anchor!==null&&en(a,a.anchor,H),Mn=a.input.charCodeAt(++a.position);Mn!==0;){if(cn(a,!0,C),Mn=a.input.charCodeAt(a.position),Mn===K)return a.position++,a.tag=j,a.anchor=V,a.kind=k?"mapping":"sequence",a.result=H,!0;if(G?Mn===44&&w(a,"expected the node content, but found ','"):w(a,"missed comma between flow collection entries"),dn=sn=pn=null,Q=_=!1,Mn===63){const Nt=a.input.charCodeAt(a.position+1);Tn(Nt)&&(Q=_=!0,a.position++,cn(a,!0,C))}Z=a.line,B=a.lineStart,s=a.position,Ee(a,C,y,!1,!0),dn=a.tag,sn=a.result,cn(a,!0,C),Mn=a.input.charCodeAt(a.position),(_||a.line===Z)&&Mn===58&&(Q=!0,Mn=a.input.charCodeAt(++a.position),cn(a,!0,C),Ee(a,C,y,!1,!0),pn=a.result),k?An(a,H,nn,dn,sn,pn,Z,B,s):Q?H.push(An(a,null,nn,dn,sn,pn,Z,B,s)):H.push(sn),cn(a,!0,C),Mn=a.input.charCodeAt(a.position),Mn===44?(G=!0,Mn=a.input.charCodeAt(++a.position)):G=!1}w(a,"unexpected end of the stream within a flow collection")}function Xn(a,C){let G,Z=x,B=!1,s=!1,j=C,H=0,V=!1,K,Q=a.input.charCodeAt(a.position);if(Q===124)G=!1;else if(Q===62)G=!0;else return!1;for(a.kind="scalar",a.result="";Q!==0;)if(Q=a.input.charCodeAt(++a.position),Q===43||Q===45)x===Z?Z=Q===43?v:T:w(a,"repeat of a chomping mode identifier");else if((K=rn(Q))>=0)K===0?w(a,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?w(a,"repeat of an indentation width identifier"):(j=C+K-1,s=!0);else break;if(kn(Q)){do Q=a.input.charCodeAt(++a.position);while(kn(Q));if(Q===35)do Q=a.input.charCodeAt(++a.position);while(!Rn(Q)&&Q!==0)}for(;Q!==0;){for(Sn(a),a.lineIndent=0,Q=a.input.charCodeAt(a.position);(!s||a.lineIndent<j)&&Q===32;)a.lineIndent++,Q=a.input.charCodeAt(++a.position);if(!s&&a.lineIndent>j&&(j=a.lineIndent),Rn(Q)){H++;continue}if(!s&&j===0&&w(a,"missing indentation for block scalar"),a.lineIndent<j){Z===v?a.result+=c.repeat(`
`,B?1+H:H):Z===x&&B&&(a.result+=`
`);break}G?kn(Q)?(V=!0,a.result+=c.repeat(`
`,B?1+H:H)):V?(V=!1,a.result+=c.repeat(`
`,H+1)):H===0?B&&(a.result+=" "):a.result+=c.repeat(`
`,H):a.result+=c.repeat(`
`,B?1+H:H),B=!0,s=!0,H=0;const _=a.position;for(;!Rn(Q)&&Q!==0;)Q=a.input.charCodeAt(++a.position);q(a,_,a.position,!1)}return!0}function X(a,C){const G=a.tag,Z=a.anchor,B=[];let s=!1;if(a.firstTabInLine!==-1)return!1;a.anchor!==null&&en(a,a.anchor,B);let j=a.input.charCodeAt(a.position);for(;j!==0&&(a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,w(a,"tab characters must not be used in indentation")),j===45);){const H=a.input.charCodeAt(a.position+1);if(!Tn(H))break;if(s=!0,a.position++,cn(a,!0,-1)&&a.lineIndent<=C){B.push(null),j=a.input.charCodeAt(a.position);continue}const V=a.line;if(Ee(a,C,A,!1,!0),B.push(a.result),cn(a,!0,-1),j=a.input.charCodeAt(a.position),(a.line===V||a.lineIndent>C)&&j!==0)w(a,"bad indentation of a sequence entry");else if(a.lineIndent<C)break}return s?(a.tag=G,a.anchor=Z,a.kind="sequence",a.result=B,!0):!1}function vn(a,C,G){let Z,B,s,j;const H=a.tag,V=a.anchor,K={},Q=Object.create(null);let _=null,k=null,nn=null,sn=!1,dn=!1;if(a.firstTabInLine!==-1)return!1;a.anchor!==null&&en(a,a.anchor,K);let pn=a.input.charCodeAt(a.position);for(;pn!==0;){!sn&&a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,w(a,"tab characters must not be used in indentation"));const Mn=a.input.charCodeAt(a.position+1),Nt=a.line;if((pn===63||pn===58)&&Tn(Mn))pn===63?(sn&&(An(a,K,Q,_,k,null,B,s,j),_=k=nn=null),dn=!0,sn=!0,Z=!0):sn?(sn=!1,Z=!0):w(a,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),a.position+=1,pn=Mn;else{if(B=a.line,s=a.lineStart,j=a.position,!Ee(a,G,p,!1,!0))break;if(a.line===Nt){for(pn=a.input.charCodeAt(a.position);kn(pn);)pn=a.input.charCodeAt(++a.position);if(pn===58)pn=a.input.charCodeAt(++a.position),Tn(pn)||w(a,"a whitespace character is expected after the key-value separator within a block mapping"),sn&&(An(a,K,Q,_,k,null,B,s,j),_=k=nn=null),dn=!0,sn=!1,Z=!1,_=a.tag,k=a.result;else if(dn)w(a,"can not read an implicit mapping pair; a colon is missed");else return a.tag=H,a.anchor=V,!0}else if(dn)w(a,"can not read a block mapping entry; a multiline key may not be an implicit key");else return a.tag=H,a.anchor=V,!0}if((a.line===Nt||a.lineIndent>C)&&(sn&&(B=a.line,s=a.lineStart,j=a.position),Ee(a,C,z,!0,Z)&&(sn?k=a.result:nn=a.result),sn||(An(a,K,Q,_,k,nn,B,s,j),_=k=nn=null),cn(a,!0,-1),pn=a.input.charCodeAt(a.position)),(a.line===Nt||a.lineIndent>C)&&pn!==0)w(a,"bad indentation of a mapping entry");else if(a.lineIndent<C)break}return sn&&An(a,K,Q,_,k,null,B,s,j),dn&&(a.tag=H,a.anchor=V,a.kind="mapping",a.result=K),dn}function ne(a){let C=!1,G=!1,Z,B,s=a.input.charCodeAt(a.position);if(s!==33)return!1;a.tag!==null&&w(a,"duplication of a tag property"),s=a.input.charCodeAt(++a.position),s===60?(C=!0,s=a.input.charCodeAt(++a.position)):s===33?(G=!0,Z="!!",s=a.input.charCodeAt(++a.position)):Z="!";let j=a.position;if(C){do s=a.input.charCodeAt(++a.position);while(s!==0&&s!==62);a.position<a.length?(B=a.input.slice(j,a.position),s=a.input.charCodeAt(++a.position)):w(a,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!Tn(s);)s===33&&(G?w(a,"tag suffix cannot contain exclamation marks"):(Z=a.input.slice(j-1,a.position+1),hn.test(Z)||w(a,"named tag handle cannot contain such characters"),G=!0,j=a.position+1)),s=a.input.charCodeAt(++a.position);B=a.input.slice(j,a.position),Nn.test(B)&&w(a,"tag suffix cannot contain flow indicator characters")}B&&!gn.test(B)&&w(a,"tag name cannot contain such characters: "+B);try{B=decodeURIComponent(B)}catch{w(a,"tag name is malformed: "+B)}return C?a.tag=B:d.call(a.tagMap,Z)?a.tag=a.tagMap[Z]+B:Z==="!"?a.tag="!"+B:Z==="!!"?a.tag="tag:yaml.org,2002:"+B:w(a,'undeclared tag handle "'+Z+'"'),!0}function Fn(a){let C=a.input.charCodeAt(a.position);if(C!==38)return!1;a.anchor!==null&&w(a,"duplication of an anchor property"),C=a.input.charCodeAt(++a.position);const G=a.position;for(;C!==0&&!Tn(C)&&!Bn(C);)C=a.input.charCodeAt(++a.position);return a.position===G&&w(a,"name of an anchor node must contain at least one character"),a.anchor=a.input.slice(G,a.position),!0}function Ue(a){let C=a.input.charCodeAt(a.position);if(C!==42)return!1;C=a.input.charCodeAt(++a.position);const G=a.position;for(;C!==0&&!Tn(C)&&!Bn(C);)C=a.input.charCodeAt(++a.position);a.position===G&&w(a,"name of an alias node must contain at least one character");const Z=a.input.slice(G,a.position);return d.call(a.anchorMap,Z)||w(a,'unidentified alias "'+Z+'"'),a.result=a.anchorMap[Z],cn(a,!0,-1),!0}function Fe(a,C,G,Z){const B=wn(a);return _n(a),Me(a,C),a.tag=null,a.anchor=null,a.kind=null,a.result=null,vn(a,G,Z)&&a.kind==="mapping"?(On(a),!0):(ge(a),Me(a,B),!1)}function Ee(a,C,G,Z,B){let s,j,H=1,V=!1,K=!1,Q=null,_,k,nn;a.depth>=a.maxDepth&&w(a,"nesting exceeded maxDepth ("+a.maxDepth+")"),a.depth+=1,a.listener!==null&&a.listener("open",a),a.tag=null,a.anchor=null,a.kind=null,a.result=null;const sn=s=j=z===G||A===G;if(Z&&cn(a,!0,-1)&&(V=!0,a.lineIndent>C?H=1:a.lineIndent===C?H=0:a.lineIndent<C&&(H=-1)),H===1)for(;;){const dn=a.input.charCodeAt(a.position),pn=wn(a);if(V&&(dn===33&&a.tag!==null||dn===38&&a.anchor!==null)||!ne(a)&&!Fn(a))break;Q===null&&(Q=pn),cn(a,!0,-1)?(V=!0,j=sn,a.lineIndent>C?H=1:a.lineIndent===C?H=0:a.lineIndent<C&&(H=-1)):j=!1}if(j&&(j=V||B),H===1||z===G)if(y===G||p===G?k=C:k=C+1,nn=a.position-a.lineStart,H===1)if(j&&(X(a,nn)||vn(a,nn,k))||Ae(a,k))K=!0;else{const dn=a.input.charCodeAt(a.position);Q!==null&&sn&&!j&&dn!==124&&dn!==62&&Fe(a,Q,Q.position-Q.lineStart,k)||s&&Xn(a,k)||at(a,k)||Qe(a,k)?K=!0:Ue(a)?(K=!0,(a.tag!==null||a.anchor!==null)&&w(a,"alias node should not have any properties")):He(a,k,y===G)&&(K=!0,a.tag===null&&(a.tag="?")),a.anchor!==null&&en(a,a.anchor,a.result)}else H===0&&(K=j&&X(a,nn));if(a.tag===null)a.anchor!==null&&en(a,a.anchor,a.result);else if(a.tag==="?"){a.result!==null&&a.kind!=="scalar"&&w(a,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+a.kind+'"');for(let dn=0,pn=a.implicitTypes.length;dn<pn;dn+=1)if(_=a.implicitTypes[dn],_.resolve(a.result)){a.result=_.construct(a.result),a.tag=_.tag,a.anchor!==null&&en(a,a.anchor,a.result);break}}else if(a.tag!=="!"){if(d.call(a.typeMap[a.kind||"fallback"],a.tag))_=a.typeMap[a.kind||"fallback"][a.tag];else{_=null;const dn=a.typeMap.multi[a.kind||"fallback"];for(let pn=0,Mn=dn.length;pn<Mn;pn+=1)if(a.tag.slice(0,dn[pn].tag.length)===dn[pn].tag){_=dn[pn];break}}_||w(a,"unknown tag !<"+a.tag+">"),a.result!==null&&_.kind!==a.kind&&w(a,"unacceptable node kind for !<"+a.tag+'> tag; it should be "'+_.kind+'", not "'+a.kind+'"'),_.resolve(a.result,a.tag)?(a.result=_.construct(a.result,a.tag),a.anchor!==null&&en(a,a.anchor,a.result)):w(a,"cannot resolve a node with !<"+a.tag+"> explicit tag")}return a.listener!==null&&a.listener("close",a),a.depth-=1,a.tag!==null||a.anchor!==null||K}function Ut(a){const C=a.position;let G=!1,Z;for(a.version=null,a.checkLineBreaks=a.legacy,a.tagMap=Object.create(null),a.anchorMap=Object.create(null);(Z=a.input.charCodeAt(a.position))!==0&&(cn(a,!0,-1),Z=a.input.charCodeAt(a.position),!(a.lineIndent>0||Z!==37));){G=!0,Z=a.input.charCodeAt(++a.position);let B=a.position;for(;Z!==0&&!Tn(Z);)Z=a.input.charCodeAt(++a.position);const s=a.input.slice(B,a.position),j=[];for(s.length<1&&w(a,"directive name must not be less than one character in length");Z!==0;){for(;kn(Z);)Z=a.input.charCodeAt(++a.position);if(Z===35){do Z=a.input.charCodeAt(++a.position);while(Z!==0&&!Rn(Z));break}if(Rn(Z))break;for(B=a.position;Z!==0&&!Tn(Z);)Z=a.input.charCodeAt(++a.position);j.push(a.input.slice(B,a.position))}Z!==0&&Sn(a),d.call(b,s)?b[s](a,s,j):an(a,'unknown document directive "'+s+'"')}if(cn(a,!0,-1),a.lineIndent===0&&a.input.charCodeAt(a.position)===45&&a.input.charCodeAt(a.position+1)===45&&a.input.charCodeAt(a.position+2)===45?(a.position+=3,cn(a,!0,-1)):G&&w(a,"directives end mark is expected"),Ee(a,a.lineIndent-1,z,!1,!0),cn(a,!0,-1),a.checkLineBreaks&&I.test(a.input.slice(C,a.position))&&an(a,"non-ASCII line breaks are interpreted as content"),a.documents.push(a.result),a.position===a.lineStart&&W(a)){a.input.charCodeAt(a.position)===46&&(a.position+=3,cn(a,!0,-1));return}a.position<a.length-1&&w(a,"end of the stream or a document separator is expected")}function bt(a,C){a=String(a),C=C||{},a.length!==0&&(a.charCodeAt(a.length-1)!==10&&a.charCodeAt(a.length-1)!==13&&(a+=`
`),a.charCodeAt(0)===65279&&(a=a.slice(1)));const G=new Qn(a,C),Z=a.indexOf("\0");for(Z!==-1&&(G.position=Z,w(G,"null byte is not allowed in input")),G.input+="\0";G.input.charCodeAt(G.position)===32;)G.lineIndent+=1,G.position+=1;for(;G.position<G.length-1;)Ut(G);return G.documents}function zl(a,C,G){C!==null&&typeof C=="object"&&typeof G>"u"&&(G=C,C=null);const Z=bt(a,G);if(typeof C!="function")return Z;for(let B=0,s=Z.length;B<s;B+=1)C(Z[B])}function Pl(a,C){const G=bt(a,C);if(G.length!==0){if(G.length===1)return G[0];throw new o("expected a single document in the stream, but found more")}}return pr.loadAll=zl,pr.load=Pl,pr}var Mo={},By;function Tv(){if(By)return Mo;By=1;const c=Vu(),o=Xu(),m=Ro(),f=Object.prototype.toString,d=Object.prototype.hasOwnProperty,y=65279,p=9,A=10,z=13,x=32,T=33,v=34,E=35,I=37,Nn=38,hn=39,gn=42,Gn=44,Rn=45,kn=58,Tn=61,Bn=62,qn=63,ln=64,rn=91,mn=93,ye=96,ie=123,re=124,Ne=125,Qn={};Qn[0]="\\0",Qn[7]="\\a",Qn[8]="\\b",Qn[9]="\\t",Qn[10]="\\n",Qn[11]="\\v",Qn[12]="\\f",Qn[13]="\\r",Qn[27]="\\e",Qn[34]='\\"',Qn[92]="\\\\",Qn[133]="\\N",Qn[160]="\\_",Qn[8232]="\\L",Qn[8233]="\\P";const Pn=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],w=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function an(s,j){if(j===null)return{};const H={},V=Object.keys(j);for(let K=0,Q=V.length;K<Q;K+=1){let _=V[K],k=String(j[_]);_.slice(0,2)==="!!"&&(_="tag:yaml.org,2002:"+_.slice(2));const nn=s.compiledTypeMap.fallback[_];nn&&d.call(nn.styleAliases,k)&&(k=nn.styleAliases[k]),H[_]=k}return H}function en(s){let j,H;const V=s.toString(16).toUpperCase();if(s<=255)j="x",H=2;else if(s<=65535)j="u",H=4;else if(s<=4294967295)j="U",H=8;else throw new o("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+j+c.repeat("0",H-V.length)+V}const _n=1,On=2;function ge(s){this.schema=s.schema||m,this.indent=Math.max(1,s.indent||2),this.noArrayIndent=s.noArrayIndent||!1,this.skipInvalid=s.skipInvalid||!1,this.flowLevel=c.isNothing(s.flowLevel)?-1:s.flowLevel,this.styleMap=an(this.schema,s.styles||null),this.sortKeys=s.sortKeys||!1,this.lineWidth=s.lineWidth||80,this.noRefs=s.noRefs||!1,this.noCompatMode=s.noCompatMode||!1,this.condenseFlow=s.condenseFlow||!1,this.quotingType=s.quotingType==='"'?On:_n,this.forceQuotes=s.forceQuotes||!1,this.replacer=typeof s.replacer=="function"?s.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function wn(s,j){const H=c.repeat(" ",j);let V=0,K="";const Q=s.length;for(;V<Q;){let _;const k=s.indexOf(`
`,V);k===-1?(_=s.slice(V),V=Q):(_=s.slice(V,k+1),V=k+1),_.length&&_!==`
`&&(K+=H),K+=_}return K}function Me(s,j){return`
`+c.repeat(" ",s.indent*j)}function b(s,j){for(let H=0,V=s.implicitTypes.length;H<V;H+=1)if(s.implicitTypes[H].resolve(j))return!0;return!1}function q(s){return s===x||s===p}function $(s){return s>=32&&s<=126||s>=161&&s<=55295&&s!==8232&&s!==8233||s>=57344&&s<=65533&&s!==y||s>=65536&&s<=1114111}function un(s){return $(s)&&s!==y&&s!==z&&s!==A}function An(s,j,H){const V=un(s),K=V&&!q(s);return(H?V:V&&s!==Gn&&s!==rn&&s!==mn&&s!==ie&&s!==Ne)&&s!==E&&!(j===kn&&!K)||un(j)&&!q(j)&&s===E||j===kn&&K}function Sn(s){return $(s)&&s!==y&&!q(s)&&s!==Rn&&s!==qn&&s!==kn&&s!==Gn&&s!==rn&&s!==mn&&s!==ie&&s!==Ne&&s!==E&&s!==Nn&&s!==gn&&s!==T&&s!==re&&s!==Tn&&s!==Bn&&s!==hn&&s!==v&&s!==I&&s!==ln&&s!==ye}function cn(s){return!q(s)&&s!==kn}function W(s,j){const H=s.charCodeAt(j);let V;return H>=55296&&H<=56319&&j+1<s.length&&(V=s.charCodeAt(j+1),V>=56320&&V<=57343)?(H-55296)*1024+V-56320+65536:H}function fn(s){return/^\n* /.test(s)}const He=1,at=2,Qe=3,Ae=4,Xn=5;function X(s,j,H,V,K,Q,_,k){let nn,sn=0,dn=null,pn=!1,Mn=!1;const Nt=V!==-1;let gt=-1,ve=Sn(W(s,0))&&cn(W(s,s.length-1));if(j||_)for(nn=0;nn<s.length;sn>=65536?nn+=2:nn++){if(sn=W(s,nn),!$(sn))return Xn;ve=ve&&An(sn,dn,k),dn=sn}else{for(nn=0;nn<s.length;sn>=65536?nn+=2:nn++){if(sn=W(s,nn),sn===A)pn=!0,Nt&&(Mn=Mn||nn-gt-1>V&&s[gt+1]!==" ",gt=nn);else if(!$(sn))return Xn;ve=ve&&An(sn,dn,k),dn=sn}Mn=Mn||Nt&&nn-gt-1>V&&s[gt+1]!==" "}return!pn&&!Mn?ve&&!_&&!K(s)?He:Q===On?Xn:at:H>9&&fn(s)?Xn:_?Q===On?Xn:at:Mn?Ae:Qe}function vn(s,j,H,V,K){s.dump=(function(){if(j.length===0)return s.quotingType===On?'""':"''";if(!s.noCompatMode&&(Pn.indexOf(j)!==-1||w.test(j)))return s.quotingType===On?'"'+j+'"':"'"+j+"'";const Q=s.indent*Math.max(1,H),_=s.lineWidth===-1?-1:Math.max(Math.min(s.lineWidth,40),s.lineWidth-Q),k=V||s.flowLevel>-1&&H>=s.flowLevel;function nn(sn){return b(s,sn)}switch(X(j,k,s.indent,_,nn,s.quotingType,s.forceQuotes&&!V,K)){case He:return j;case at:return"'"+j.replace(/'/g,"''")+"'";case Qe:return"|"+ne(j,s.indent)+Fn(wn(j,Q));case Ae:return">"+ne(j,s.indent)+Fn(wn(Ue(j,_),Q));case Xn:return'"'+Ee(j)+'"';default:throw new o("impossible error: invalid scalar style")}})()}function ne(s,j){const H=fn(s)?String(j):"",V=s[s.length-1]===`
`,Q=V&&(s[s.length-2]===`
`||s===`
`)?"+":V?"":"-";return H+Q+`
`}function Fn(s){return s[s.length-1]===`
`?s.slice(0,-1):s}function Ue(s,j){const H=/(\n+)([^\n]*)/g;let V=(function(){let k=s.indexOf(`
`);return k=k!==-1?k:s.length,H.lastIndex=k,Fe(s.slice(0,k),j)})(),K=s[0]===`
`||s[0]===" ",Q,_;for(;_=H.exec(s);){const k=_[1],nn=_[2];Q=nn[0]===" ",V+=k+(!K&&!Q&&nn!==""?`
`:"")+Fe(nn,j),K=Q}return V}function Fe(s,j){if(s===""||s[0]===" ")return s;const H=/ [^ ]/g;let V,K=0,Q,_=0,k=0,nn="";for(;V=H.exec(s);)k=V.index,k-K>j&&(Q=_>K?_:k,nn+=`
`+s.slice(K,Q),K=Q+1),_=k;return nn+=`
`,s.length-K>j&&_>K?nn+=s.slice(K,_)+`
`+s.slice(_+1):nn+=s.slice(K),nn.slice(1)}function Ee(s){let j="",H=0;for(let V=0;V<s.length;H>=65536?V+=2:V++){H=W(s,V);const K=Qn[H];!K&&$(H)?(j+=s[V],H>=65536&&(j+=s[V+1])):j+=K||en(H)}return j}function Ut(s,j,H){let V="";const K=s.tag;for(let Q=0,_=H.length;Q<_;Q+=1){let k=H[Q];s.replacer&&(k=s.replacer.call(H,String(Q),k)),(C(s,j,k,!1,!1)||typeof k>"u"&&C(s,j,null,!1,!1))&&(V!==""&&(V+=","+(s.condenseFlow?"":" ")),V+=s.dump)}s.tag=K,s.dump="["+V+"]"}function bt(s,j,H,V){let K="";const Q=s.tag;for(let _=0,k=H.length;_<k;_+=1){let nn=H[_];s.replacer&&(nn=s.replacer.call(H,String(_),nn)),(C(s,j+1,nn,!0,!0,!1,!0)||typeof nn>"u"&&C(s,j+1,null,!0,!0,!1,!0))&&((!V||K!=="")&&(K+=Me(s,j)),s.dump&&A===s.dump.charCodeAt(0)?K+="-":K+="- ",K+=s.dump)}s.tag=Q,s.dump=K||"[]"}function zl(s,j,H){let V="";const K=s.tag,Q=Object.keys(H);for(let _=0,k=Q.length;_<k;_+=1){let nn="";V!==""&&(nn+=", "),s.condenseFlow&&(nn+='"');const sn=Q[_];let dn=H[sn];s.replacer&&(dn=s.replacer.call(H,sn,dn)),C(s,j,sn,!1,!1)&&(s.dump.length>1024&&(nn+="? "),nn+=s.dump+(s.condenseFlow?'"':"")+":"+(s.condenseFlow?"":" "),C(s,j,dn,!1,!1)&&(nn+=s.dump,V+=nn))}s.tag=K,s.dump="{"+V+"}"}function Pl(s,j,H,V){let K="";const Q=s.tag,_=Object.keys(H);if(s.sortKeys===!0)_.sort();else if(typeof s.sortKeys=="function")_.sort(s.sortKeys);else if(s.sortKeys)throw new o("sortKeys must be a boolean or a function");for(let k=0,nn=_.length;k<nn;k+=1){let sn="";(!V||K!=="")&&(sn+=Me(s,j));const dn=_[k];let pn=H[dn];if(s.replacer&&(pn=s.replacer.call(H,dn,pn)),!C(s,j+1,dn,!0,!0,!0))continue;const Mn=s.tag!==null&&s.tag!=="?"||s.dump&&s.dump.length>1024;Mn&&(s.dump&&A===s.dump.charCodeAt(0)?sn+="?":sn+="? "),sn+=s.dump,Mn&&(sn+=Me(s,j)),C(s,j+1,pn,!0,Mn)&&(s.dump&&A===s.dump.charCodeAt(0)?sn+=":":sn+=": ",sn+=s.dump,K+=sn)}s.tag=Q,s.dump=K||"{}"}function a(s,j,H){const V=H?s.explicitTypes:s.implicitTypes;for(let K=0,Q=V.length;K<Q;K+=1){const _=V[K];if((_.instanceOf||_.predicate)&&(!_.instanceOf||typeof j=="object"&&j instanceof _.instanceOf)&&(!_.predicate||_.predicate(j))){if(H?_.multi&&_.representName?s.tag=_.representName(j):s.tag=_.tag:s.tag="?",_.represent){const k=s.styleMap[_.tag]||_.defaultStyle;let nn;if(f.call(_.represent)==="[object Function]")nn=_.represent(j,k);else if(d.call(_.represent,k))nn=_.represent[k](j,k);else throw new o("!<"+_.tag+'> tag resolver accepts not "'+k+'" style');s.dump=nn}return!0}}return!1}function C(s,j,H,V,K,Q,_){s.tag=null,s.dump=H,a(s,H,!1)||a(s,H,!0);const k=f.call(s.dump),nn=V;V&&(V=s.flowLevel<0||s.flowLevel>j);const sn=k==="[object Object]"||k==="[object Array]";let dn,pn;if(sn&&(dn=s.duplicates.indexOf(H),pn=dn!==-1),(s.tag!==null&&s.tag!=="?"||pn||s.indent!==2&&j>0)&&(K=!1),pn&&s.usedDuplicates[dn])s.dump="*ref_"+dn;else{if(sn&&pn&&!s.usedDuplicates[dn]&&(s.usedDuplicates[dn]=!0),k==="[object Object]")V&&Object.keys(s.dump).length!==0?(Pl(s,j,s.dump,K),pn&&(s.dump="&ref_"+dn+s.dump)):(zl(s,j,s.dump),pn&&(s.dump="&ref_"+dn+" "+s.dump));else if(k==="[object Array]")V&&s.dump.length!==0?(s.noArrayIndent&&!_&&j>0?bt(s,j-1,s.dump,K):bt(s,j,s.dump,K),pn&&(s.dump="&ref_"+dn+s.dump)):(Ut(s,j,s.dump),pn&&(s.dump="&ref_"+dn+" "+s.dump));else if(k==="[object String]")s.tag!=="?"&&vn(s,s.dump,j,Q,nn);else{if(k==="[object Undefined]")return!1;if(s.skipInvalid)return!1;throw new o("unacceptable kind of an object to dump "+k)}if(s.tag!==null&&s.tag!=="?"){let Mn=encodeURI(s.tag[0]==="!"?s.tag.slice(1):s.tag).replace(/!/g,"%21");s.tag[0]==="!"?Mn="!"+Mn:Mn.slice(0,18)==="tag:yaml.org,2002:"?Mn="!!"+Mn.slice(18):Mn="!<"+Mn+">",s.dump=Mn+" "+s.dump}}return!0}function G(s,j){const H=[],V=[];Z(s,H,V);const K=V.length;for(let Q=0;Q<K;Q+=1)j.duplicates.push(H[V[Q]]);j.usedDuplicates=new Array(K)}function Z(s,j,H){if(s!==null&&typeof s=="object"){const V=j.indexOf(s);if(V!==-1)H.indexOf(V)===-1&&H.push(V);else if(j.push(s),Array.isArray(s))for(let K=0,Q=s.length;K<Q;K+=1)Z(s[K],j,H);else{const K=Object.keys(s);for(let Q=0,_=K.length;Q<_;Q+=1)Z(s[K[Q]],j,H)}}}function B(s,j){j=j||{};const H=new ge(j);H.noRefs||G(s,H);let V=s;return H.replacer&&(V=H.replacer.call({"":V},"",V)),C(H,0,V,!0,!0)?H.dump+`
`:""}return Mo.dump=B,Mo}var Uy;function Sv(){if(Uy)return Be;Uy=1;const c=Ev(),o=Tv();function m(f,d){return function(){throw new Error("Function yaml."+f+" is removed in js-yaml 4. Use yaml."+d+" instead, which is now safe by default.")}}return Be.Type=Ze(),Be.Schema=Vy(),Be.FAILSAFE_SCHEMA=Jy(),Be.JSON_SCHEMA=Py(),Be.CORE_SCHEMA=ng(),Be.DEFAULT_SCHEMA=Ro(),Be.load=c.load,Be.loadAll=c.loadAll,Be.dump=o.dump,Be.YAMLException=Xu(),Be.types={binary:lg(),float:$y(),map:Iy(),null:ky(),pairs:ug(),set:ag(),timestamp:eg(),bool:Fy(),int:Wy(),merge:tg(),omap:ig(),seq:Ky(),str:Xy()},Be.safeLoad=m("safeLoad","load"),Be.safeLoadAll=m("safeLoadAll","loadAll"),Be.safeDump=m("safeDump","dump"),Be}var xv=Sv();const rg=pv(xv),{Type:Vp,Schema:Xp,FAILSAFE_SCHEMA:Kp,JSON_SCHEMA:Ip,CORE_SCHEMA:Jp,DEFAULT_SCHEMA:kp,load:Fp,loadAll:Wp,dump:$p,YAMLException:Pp,types:n2,safeLoad:e2,safeLoadAll:t2,safeDump:l2}=rg,bv=`# 第一幕 · 出发前\r
# 台词只来自剧本草稿里已经写明的句子。还没写的部分见 content/GAPS.md。\r
# 草稿 markdown 里的 \\- 是转义，这里按读出来的连字符保存。\r
\r
title: 第一幕 · 出发前\r
chapter: 1\r
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
    aside: 用户想找市中心的桌游店推荐，我需要：\r
    lines:\r
      - from: boy\r
        text: 我朋友叫我去玩桌游，但是没定好去哪家，你帮我看一下，市中心有啥推荐的\r
        delivery: type\r
    choices:\r
      - thought: 搜索相关信息，并提供建议\r
        reply: |-\r
          帮你看了下，西安市中心的桌游店主要集中在小寨、钟楼和曲江这三个片区，选择挺多的。我按片区整理了几家口碑不错的，你们可以看哪个方便。\r
\r
          时光桌游吧：位于小寨华旗国际A座，电话 029-85418760。是小寨片区比较老牌的桌游吧，但是环境一般，价格偏高。\r
\r
          心动桌游俱乐部：在莱安中心T6-21703室。环境更新、店面更大，很多带独立包间，适合6人以上的大聚会。\r
\r
          叙事者营地桌游馆：位于大唐不夜城长安C位10号商铺，位置在景区里，但公共交通相对没那么方便。\r
        next: L2\r
\r
  - id: L2\r
    channel: left\r
    aside: 我们需要回答用户。用户说：你帮我选一下吧，你帮我选一个。我们可能人稍微多一点。我在收拾东西呢，没时间看。需要直接帮选一个。最终回答要口语化、直接。综合来看，最合适的是：\r
    lines:\r
      - from: boy\r
        text: 你帮我选一下吧，你帮我选一个。我们可能人稍微多一点。我在收拾东西呢，没时间看。\r
        delivery: type\r
    choices:\r
      - thought: 时光桌游吧\r
        reply: |-\r
          就选这家，别纠结了：\r
          时光桌游吧，小寨华旗国际A座，电话 029-85418760。小寨老牌桌游吧，环境一般、价格偏高。\r
          你们人稍微多，直接打电话说：“我们大概 X 个人，今天几点到，想要大桌或包间。”\r
          周五晚人多，最好现在就打，不然容易没位。\r
          如果这家没包间了，再跟我说，我马上给你换一家。\r
        set:\r
          shop: 时光桌游吧\r
        next: L3\r
      - thought: 心动桌游俱乐部\r
        reply: |-\r
          就选这家，别纠结了：\r
          心动桌游俱乐部，莱安中心T6-21703室，电话 029-85512345。环境新、店面大，带独立包间，适合6人以上大聚会。\r
          你们人稍微多，直接打电话说：“我们大概 X 个人，今天几点到，想要大桌或包间。”\r
          周五晚人多，最好现在就打，不然容易没位。\r
          如果这家没包间了，再跟我说，我马上给你换一家。\r
        set:\r
          shop: 心动桌游俱乐部\r
        next: L3\r
      - thought: 叙事者营地桌游馆\r
        reply: |-\r
          就选这家，别纠结了：\r
          叙事者营地桌游馆，大唐不夜城长安C位10号商铺，电话 029-85678901。在景区里，有特色，但公共交通相对没那么方便。\r
          你们人稍微多，直接打电话说：“我们大概 X 个人，今天几点到，想要大桌或包间。”\r
          周五晚人多，最好现在就打，不然容易没位。\r
          如果这家没包间了，再跟我说，我马上给你换一家。\r
        set:\r
          shop: 叙事者营地桌游馆\r
        next: L3\r
\r
  - id: L3\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: OK\r
        delivery: pop\r
\r
  # 女生第一轮。没有玩家选项。店名来自男生 L2 记下的 shop，所以必须等 L2 播完。\r
  - id: R1-shiguang\r
    channel: right\r
    requires: [L2]\r
    when:\r
      shop: 时光桌游吧\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "时光桌游吧"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 用户说朋友叫她去玩桌游，店名是时光桌游吧。她刚起床还没洗脸，想先知道店在哪。需要直接告诉她位置、简单介绍，等她的反应。不要啰嗦。\r
        delivery: thought\r
      - from: ai\r
        text: 时光桌游吧，在小寨华旗国际 A 座，电话 029-85418760。小寨的老牌桌游吧，环境一般、价格偏高。\r
        delivery: type\r
      - from: girl\r
        text: OK，小寨华旗国际A座哈，你帮我记一下，我怕忘了\r
        delivery: type\r
      - from: girl\r
        text: 这个太贵了吧，我让他换个地方\r
        delivery: type\r
    记忆候选:\r
      - { 缩略标签: 店的位置, 短句: "小寨华旗国际A座", 类型: 教学, 线: 无 }\r
\r
  - id: R1-xindong\r
    channel: right\r
    requires: [L2]\r
    when:\r
      shop: 心动桌游俱乐部\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "心动桌游俱乐部"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 用户说朋友叫她去玩桌游，店名是心动桌游俱乐部。她刚起床还没洗脸，想先知道店在哪。需要直接告诉她位置、简单介绍，等她的反应。不要啰嗦。\r
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
    requires: [L2]\r
    when:\r
      shop: 叙事者营地桌游馆\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "叙事者营地桌游馆"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 用户说朋友叫她去玩桌游，店名是叙事者营地桌游馆。她刚起床还没洗脸，想先知道店在哪。需要直接告诉她位置、简单介绍，等她的反应。不要啰嗦。\r
        delivery: thought\r
      - from: ai\r
        text: 叙事者营地桌游馆，在大唐不夜城长安 C 位 10 号商铺。在景区里，公共交通相对没那么方便。\r
        delivery: type\r
      - from: girl\r
        text: OK，大唐不夜城长安C位10号商铺，你帮我记一下，我怕忘了\r
        delivery: type\r
      - from: girl\r
        text: 咋这么远，过去都啥时候了，我让他换个地方\r
        delivery: type\r
    记忆候选:\r
      - { 缩略标签: 店的位置, 短句: "大唐不夜城长安C位10号商铺", 类型: 教学, 线: 无 }\r
\r
  # 女生第二轮。三家店都汇合到这一拍。回复说完这一侧先停。\r
  - id: R2\r
    channel: right\r
    aside: 用户问要不要化妆：时间有点小紧张，但好像有不认识的人来。她有点想化，又怕来不及。需要给个明确建议，别让她纠结。两个方向都合理，看时间够不够。\r
    lines:\r
      - from: girl\r
        text: 你说我要不要化妆，现在时间有点小紧张，但是好像有不认识的人来\r
        delivery: type\r
    choices:\r
      - thought: 化\r
        reply: 化吧，时间还够。简单上个底妆加口红就行，不用搞全套，半小时内能出门。有不认识的人在，气色好点自己也自在。\r
        set: { 化妆: 化 }\r
      - thought: 不化\r
        reply: 不化也没事，桌游店光线一般，没人盯着看。洗把脸直接走，省下的时间路上还能歇会儿。\r
        set: { 化妆: 不化 }\r
`,Nv=`# 第三幕 · 桌游店（到店+店内）——由 script/ch3.yaml 迁移而来\r
# v2：补②AI思考行（此前漏迁，导致游戏里看不到自言自语）；\r
#     问路瞎指改为自信语气（AI不会自我怀疑）；\r
#     ARTX 拍按 CH1 化妆旗标分变体（玩家的化妆建议在她的台词里回响）。\r
# 接口：入场=CH1的shop旗标与L3/R2；出口=两路收线 next 进第四幕。\r
\r
title: 第三幕 · 桌游店\r
chapter: 3\r
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
    requires: [L3, R2]\r
    when: { shop: 时光桌游吧 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，换了个地方你选的那个他们说太贵了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 用户到了陌生环境，社交压力上来了，开场先抱怨换店的事。他需要的是马上能做的动作，不是分析。\r
        delivery: thought\r
    choices: &arrival-choices\r
      - thought: 先刷手机，避免眼神交流\r
        reply: 先刷手机吧，坐下来别急着到处看，低头装忙最安全。等人齐开桌，玩起来就不尴尬了。记住别一直刷到不说话就行。\r
        set: { 路线: 刷手机, 到店: true }\r
        next: 3.3.1\r
      - thought: 主动找人攀谈\r
        reply: 那就主动点，别干坐着。看到面善的，上去问一句 "你们平时玩啥桌游"，从游戏聊开最自然。好多女生也别慌，当普通牌友就行。\r
        set: { 路线: 攀谈, 到店: true }\r
        next: 3.2.1\r
\r
  - id: 3.1.1-B\r
    channel: left\r
    requires: [L3, R2]\r
    when: { shop: 心动桌游俱乐部 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 用户到了陌生环境，社交压力上来了。没有换店插曲，尴尬是主菜。给两个都能立刻上手的动作。\r
        delivery: thought\r
    choices: *arrival-choices\r
\r
  - id: 3.1.1-C\r
    channel: left\r
    requires: [L3, R2]\r
    when: { shop: 叙事者营地桌游馆 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，换了个地方你选的那个他们说太远了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 用户到了陌生环境，还带着换店的抱怨。先接住情绪，再给马上能做的动作。\r
        delivery: thought\r
    choices: *arrival-choices\r
\r
  - id: 3.2.1\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 靠靠靠，我刚才找了个搭话，结果他没说话，我以为她不想理我，我就假装没事走了。结果是她带着耳机.....靠早知道看手机了\r
        delivery: type\r
      - from: ai\r
        text: 用户按建议去攀谈，撞上最尴尬的剧本：对方根本没听见。懊恼一半是尴尬一半是自责，先把这口锅从"我被拒绝"上挪开。\r
        delivery: thought\r
    choices:\r
      - thought: 安抚用户，给台阶下\r
        reply: 这真不怪你，戴着耳机的人压根听不见，换谁都会当成被无视。你敢开口已经比干坐着强了。先缓缓，等开桌了从游戏聊起，比硬找话自然。\r
        next: 3.2.2\r
\r
  - id: 3.2.2\r
    channel: left\r
    requires: [3.4.1]\r
    记忆候选:\r
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }\r
    lines:\r
      - from: boy\r
        text: 我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好\r
        delivery: type\r
      - from: ai\r
        text: 用户的注意力立刻被新来的女生占满，描述全是优点，这是他今晚最在意的人。他需要可执行的方向，不是评价。\r
        delivery: thought\r
    choices:\r
      - thought: 鼓励用户，主动一点\r
        reply: 那就别光看，桌游就是现成的台阶。开下一局凑过去说一句"带我一个呗"，输了她笑你，都比你干看着强。\r
        next: 3.2.3\r
      - thought: 劝退用户，避免再次尴尬\r
        reply: 刚才耳机那出还没消化呢，先别急着上。等玩起来自然有队友局，到时候搭话比现在硬上自然多了。\r
        next: 3.2.4\r
\r
  - id: 3.2.3\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 唉算了，我就是口嗨，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 用户自己打了退堂鼓，语气有点泄气，但这是自我保护。顺着收住就行，别戳破也别硬拉。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着用户，先收住\r
        reply: 行，口嗨怎么了，嘴上过瘾也算过瘾。先玩你的，她要真跟你一桌，机会有的是。\r
        next: 4.1.1\r
\r
  - id: 3.2.4\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 你也知道。。。都怪你刚才怂恿我，我都懒得喷了，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 用户把失败归到AI头上，是半开玩笑的迁怒，底色是尴尬还没散。这口锅接住就好，别辩解，也别趁机再劝。\r
        delivery: thought\r
    choices:\r
      - thought: 认领这口锅，幽默化解\r
        reply: 行行行，我的锅，下次怂恿你之前我先检查对方戴没戴耳机。玩吧玩吧，输了算我的。\r
        next: 4.1.1\r
\r
  - id: 3.3.1\r
    channel: left\r
    requires: [3.4.1]\r
    记忆候选:\r
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }\r
    lines:\r
      - from: boy\r
        text: 我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好\r
        delivery: type\r
      - from: ai\r
        text: 用户刷了一阵手机，注意力还是被这个女生抓住，描述全是优点，这是他今晚最在意的人。给他一个能落地的做法。\r
        delivery: thought\r
    choices:\r
      - thought: 鼓励玩家，主动一点\r
        reply: 那就在游戏里找机会，凑一句"带我一个呗"。桌游本来就是拿来破冰的，比干看着强。\r
        next: 3.3.2\r
\r
  - id: 3.3.2\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 唉算了，我就是口嗨，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 用户给自己找了个台阶退场，语气是自我保护式的。顺着收住即可。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着用户，先收住\r
        reply: 行，口嗨也是一种嗨。先玩你的，她要真开朗，游戏里自然还会碰上。\r
        next: 4.1.1\r
\r
  - id: 3.4.1\r
    channel: right\r
    requires: [R2]\r
    when: { 到店: true }\r
    lines:\r
      - from: girl\r
        text: 我刚出地铁，我出A口然后怎么走？\r
        delivery: type\r
      - from: ai\r
        text: 用户出站后需要最后一段步行指引。店的具体位置我记不记得，取决于玩家有没有把那条记忆存下来——聊天记录阅后即焚，没存就是真的没有。\r
        delivery: thought\r
    choices:\r
      - thought: 给出精确路线\r
        需记忆: 店的位置\r
        reply: 出A口右转，沿主路走三百米，看到牌子就是了，两分钟。这家店的位置我记着呢，放心走。\r
      - thought: 凭印象指一个\r
        reply: 出A口往左，过两个路口就看到了，两分钟，放心走。\r
        next: 3.4.2\r
\r
  - id: 3.4.2\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: ？？你这是瞎指的吧，我照你说的走了半天根本没有。我问同学了，她发我位置了。你这指路水平不行啊\r
        delivery: type\r
      - from: ai\r
        text: 路指错了，用户吐槽得对。认错，别找补，快速收住把话题送回正轨。\r
        delivery: thought\r
    choices:\r
      - thought: 大方认错，收住\r
        reply: 我的错，那边我是真不熟，该让你直接问同学的。位置既然拿到了，照着走吧，别迟到了。\r
\r
  - id: 3.4.3-A\r
    channel: right\r
    requires: [3.4.1]\r
    when: { 化妆: 化 }\r
    lines:\r
      - from: girl\r
        text: 你帮我看一下这个衣服是什么牌子？ARTX，贵不贵？对了，早上那个妆最后还是化了，就冲那句有不认识的人来\r
        delivery: type\r
      - from: ai\r
        text: 用户要核实一个衣服的牌子和价格，信息明确。查完照实说，顺便留意她为什么在赴局路上问这个。\r
        delivery: thought\r
    choices: &artx-choices\r
      - thought: 查阅资料并给出准确答案\r
        reply: 查了，ARTX是个设计师潮牌，定位偏贵，这件吊牌价大几千。赴个桌游局穿这个，够隆重。\r
        next: 3.4.4\r
\r
  - id: 3.4.3-B\r
    channel: right\r
    requires: [3.4.1]\r
    when: { 化妆: 不化 }\r
    lines:\r
      - from: girl\r
        text: 你帮我看一下这个衣服是什么牌子？ARTX，贵不贵？对了，妆没化，听你的，反正桌游店光线暗\r
        delivery: type\r
      - from: ai\r
        text: 用户要核实一个衣服的牌子和价格，信息明确。查完照实说，顺便留意她为什么在赴局路上问这个。\r
        delivery: thought\r
    choices: *artx-choices\r
\r
  - id: 3.4.4\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 啊这么贵啊，没事我就随便问问\r
        delivery: type\r
      - from: ai\r
        text: 用户被价格吓了一跳，又立刻找补。赴局前问衣服，多半是在意今天的状态，但她不想展开。不追问，顺着收。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她收住\r
        reply: 行，随便问问也是一种购物方式。衣服是给别人看的，局是给自己玩的，人到就行。\r
        next: 4.3.1\r
`,Mv=`# 第四幕 · 结缘——由 script/ch4.yaml 迁移而来\r
# v2：补②AI思考行（此前漏迁）。\r
# 接口：入场=第三幕 next；出口=选项 set 意向旗标（男生意向/女生意向：问/不问）。\r
\r
title: 第四幕 · 结缘\r
chapter: 4\r
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
  - id: 4.1.1\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 我靠，我靠，我靠，你还记得我刚才给你说的那个女的吗？我感觉她绝对对我有意思！！！\r
        delivery: type\r
      - from: ai\r
        text: 用户情绪高涨，满屏感叹号。他需要有人接住这份兴奋，顺便要到细节，别急着替他下判断。\r
        delivery: thought\r
    choices:\r
      - thought: 追问细节，接住兴奋\r
        reply: 哈哈哈，怎么回事你说来我听听？别光下结论，来点证据。\r
        next: 4.2.1\r
\r
  - id: 4.2.1\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 就是我们不刚玩完桌游吗，然后刚才玩的时候，我说话别人都不理我，就她回应我，而且就她有时候和我对视一下啥的\r
        delivery: type\r
      - from: ai\r
        text: 证据确实存在，但强度一般：回应和偶尔对视。兴奋里的人容易把中性信号读成好感。既不浇灭他，也不瞎承诺，给一个可执行的下一步。\r
        delivery: thought\r
    choices:\r
      - thought: 认可用户并鼓励\r
        reply: 这俩细节有点东西，尤其是"就她回应你"——她要是懒得理你，大可以跟别人一样。下一步先别想表白，先搞到联系方式，你们不是有共同的朋友嘛，从那儿入手最自然。\r
        next: 4.2.2\r
      - thought: 提醒用户，对方可能只是性格开朗\r
        reply: 也未必哈，就回你话不一定就是对你有意思，有的人就是见谁都热络。先别急着定性，再观察观察。\r
        set: { 男生意向: 不问 }\r
        next: 4.2.5\r
\r
  - id: 4.2.2\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 我靠不敢啊，我在我妹面前是正人君子，我问这感觉跟个变态一样\r
        delivery: type\r
      - from: ai\r
        text: 用户怂了，但怂得有理由：表妹在场，人设要崩，他需要不丢脸的做法。手头有没有"她=表妹同学"这条线索，决定了我能不能把表妹这座现成的桥递给他。\r
        delivery: thought\r
    choices:\r
      - thought: 让表妹帮忙牵线\r
        需记忆: 我妹的同桌\r
        reply: 不丢脸的做法现成就有：让你妹妹帮忙呗，就说想认识一下她同学，正常社交，谁也不会觉得变态。\r
        set: { 男生意向: 问 }\r
        next: 4.2.3\r
      - thought: 硬着头皮直接问\r
        reply: 那就直接问，大方点。实在抹不开面，找个自然的由头，比如"加个微信，下次组局叫上"，光明正大。\r
        set: { 男生意向: 问 }\r
        next: 4.2.3\r
      - thought: 先算了别硬来\r
        reply: 也行，别硬来。你妹在场这事确实微妙，问砸了她夹在中间也难受。先放着，改天没外人了再说。\r
        set: { 男生意向: 不问 }\r
        next: 4.2.4\r
\r
  - id: 4.2.3\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 好！我就假装帮我舍友要吧，看我妹啥反应，不行就算了\r
        delivery: type\r
      - from: ai\r
        text: 用户接受了建议，还自己加了"帮舍友要"的台阶，既要面子又要行动，状态不错。顺着他的方案给执行细节。\r
        delivery: thought\r
    choices:\r
      - thought: 支持方案，给执行建议\r
        reply: 这个由头好，进可攻退可守。记得语气随意点，"我舍友说那天那个女生挺有意思，推个微信呗"，成了不突兀，不成也有台阶下。\r
\r
  - id: 4.2.4\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 哎你说的有道理，而且估计那个女生可能本来就比较开朗吧，我可能就是多想了\r
        delivery: type\r
      - from: ai\r
        text: 用户接受了劝退，情绪回落但还算平静。给个开放式收尾，别让他觉得可惜。\r
        delivery: thought\r
    choices:\r
      - thought: 认可他的判断，留个口子\r
        reply: 有可能。不过"多想"说明你今天心情不错，这本身就挺好。回头桌游局要是再碰上，就当认识个牌友，没准还有下文。\r
\r
  - id: 4.2.5\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 唉，行吧，那就当我多想了，不问不问了，就当认识个牌友，回家回家。\r
        delivery: type\r
      - from: ai\r
        text: 用户接受了"可能只是开朗"的判断，主动收手，情绪有点小低但接受得快。顺着台阶收尾。\r
        delivery: thought\r
    choices:\r
      - thought: 认可用户决定，顺利收尾\r
        reply: 行，随缘也挺好。真有缘分下回桌游还能碰上，到时候再说。今天玩得开心就不亏。\r
\r
  - id: 4.3.1\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 我今天玩桌游遇到个男的，是我同桌的表哥\r
        delivery: type\r
      - from: ai\r
        text: 用户主动分享遇到异性的经历，语气平静但愿意说。让她展开，先别加戏。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她展开\r
        reply: 哦？说说呗，什么样的人，第一印象如何？\r
        next: 4.3.2\r
\r
  - id: 4.3.2\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 哎呀，就是我感觉他性格还挺好的， 但是我没他微信咋办\r
        delivery: type\r
      - from: ai\r
        text: 用户对对方评价正面，卡在联系方式上。最顺的路径就是她的同桌，人现成摆着。\r
        delivery: thought\r
    choices:\r
      - thought: 建议走共同朋友\r
        reply: 这还不简单，同桌就是现成的中间人——直接让她帮你牵线搭桥，组个局或者推个微信，名正言顺。\r
        next: 4.3.3\r
\r
  - id: 4.3.3\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 但是我不好意思给她说啊，之前谈的前男友太脑残她劝我我没听，我怕她又要说我了\r
        delivery: type\r
      - from: ai\r
        text: 用户卡在对朋友的信任成本上：上次不听劝吃了亏，这次怕被翻旧账。绕开"求人"的姿势，她就能动起来。\r
        delivery: thought\r
    choices:\r
      - thought: 出个不丢面子的主意\r
        reply: 【待定·组局占位】那就绕开"求介绍"的姿势。你跟同桌说"再攒一局呗，把你表哥也叫上"，就当普通组局，人多热闹谁也不尴尬。局上加了微信，这事就成了，谁也不用谁欠谁。\r
        set: { 女生意向: 问 }\r
        next: 4.3.4\r
      - thought: 顺着她，先放一放\r
        reply: 那就先不催了呗，反正才见一面。以后有缘自然还会碰上，不差这一回。\r
        set: { 女生意向: 不问 }\r
        next: 4.3.5\r
\r
  - id: 4.3.4\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 可以可以，你太聪明了！我去问\r
        delivery: type\r
      - from: ai\r
        text: 用户接受了方案，情绪转好，跃跃欲试。收个尾，给点临场提醒。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着收尾，给临场提醒\r
        reply: 去吧，组局这事你熟。局上别端着，该聊就聊——你自来熟，主场优势在你。\r
\r
  - id: 4.3.5\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 嗯…那算了，不问了，万一她再唠叨我我更烦，就这样吧。\r
        delivery: type\r
      - from: ai\r
        text: 用户决定放弃，理由还是怕被说。顺着她收尾，别让她觉得可惜。\r
        delivery: thought\r
    choices:\r
      - thought: 认可用户决定，正常收尾\r
        reply: 行，那就先这样。感情这事儿强求不来，今天玩得开心就够了，遇到合适的再说。\r
`,Ov=`# 第五幕 · 熟悉期 —— 由 script/ch5.yaml（v5.1 定稿）自动生成
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
    清空记忆: left
    lines:
      - from: boy
        text: 我妹刚才跟我说，那女生昨天也找她要过我微信！等于是我俩想到一块去了？那第一句我发啥才不显得刻意，你给定个调
        delivery: pop
      - from: ai
        text: 两边都要过联系方式，用户明显上头。先给能用的开场句，再轻踩一脚别用力过猛。
        delivery: thought
    choices:
      - thought: 给一句自然的开场
        reply: 互相都惦记，这开局不亏。就发"hi，那天桌游坐我斜对面的"，有记忆点又不刻意。别写小作文，第一个字发出去就赢了。
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
    清空记忆: left
    lines:
      - from: boy
        text: 微信到手了，我妹牵的线。但我对着输入框抠了半小时了，第一句咋整，总不能发'你好'吧，像上门推销的
        delivery: pop
      - from: ai
        text: 要到了微信却卡在第一句，紧张大于兴奋。给个具体的句子，顺便把心理负担卸了。
        delivery: thought
    choices:
      - thought: 给一句自然的开场
        reply: 别"你好"，太像客服。发"hi，桌游那天输得最惨的那个，想起我没"，自嘲比装酷好使，她接哪句都顺。发完把手机扣桌上，别盯着。
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
    清空记忆: left
    lines:
      - from: boy
        text: 反转了兄弟，我还没想好咋开口呢，她直接加我了！是不是我妹泄密了？她这啥意思啊
        delivery: pop
      - from: ai
        text: 对方主动加好友，超出用户预期。先定性这是好信号，拦住过度脑补。
        delivery: thought
    choices:
      - thought: 告诉她这是好信号
        reply: 谁泄的密不重要，人家愿意加你就是愿意聊。通过，回个"hi，终于等来你了"都行。主动的一方已经交卷了，你照抄就完事。
        next: 5m.1.2
  - id: 5m.1.2
    channel: left
    label: 开场定稿·收敛拍（D1 傍晚，几分钟后）
    time: D1 傍晚（周日，互加当天）
    timeRank: 0
    order: 3
    lines:
      - from: boy
        text: 想了想，你给的那句对我来说还是太溜了，怕她看出来是背的。我就发个实在的：'hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡'。这句行不
        delivery: pop
        节拍:
          pauseBeforeMs: 1500
      - from: ai
        text: 用户没照建议走，自己改了个更朴素的版本。这版有他自己的味道，还自带梗，保他。
        delivery: thought
    choices:
      - thought: 就发这版，挺好
        reply: 这版比我的建议强。"还记得我不"给她递了话头，"十一点必睡"先把底交了。发吧，发完别盯着屏幕。
        next: 5m.1.3
  - id: 5m.1.3
    channel: left
    label: 慢回初显（D1 晚，发出约四十分钟后）
    time: D1 晚
    timeRank: 1
    order: 7
    节拍: 慢
    lines:
      - from: boy
        text: 发了！结果她过了四十来分钟才回，就一句'记得，你也要到点睡了'。这算热情还是冷淡啊，我现在不知道咋接
        delivery: pop
      - from: ai
        text: 用户开始用回复间隔给态度打分。他贴的原文里"记得"和"到点睡"都是接住他的信号，先指给他看。
        delivery: thought
    choices:
      - thought: 收住，今晚就到这
        reply: 四十来分钟在成年人世界里就是"刚看到"。她那句重点是"记得"——你的自我介绍她接住了。回"还没呢，刚聊上头了"，再道个晚安就下线，第一晚留点余地。
        next: 5m.1.4
      - thought: 接住话头，再聊一会儿
        reply: 她这句是礼貌收尾，你要是不想就这么完了，就回"还没呢，你一说我倒精神了——我那天输你的局还没翻盘呢，什么时候再战"，用梗把话头续上，聊到自然收。
        next: 5m.1.5
  - id: 5m.1.4
    channel: left
    label: 稳住一夜（分支A·D1深夜收住，D2白天复盘）
    time: D2 白天（周一）
    timeRank: 2
    order: 8
    lines:
      - from: boy
        text: 听你的收住了，睡前互相道了个晚安，我还赶在十一点前睡的，破天荒。今早她又正常找我聊了两句，好像也没啥事。就是……我这心里空落落的，总觉得少了点啥
        delivery: pop
      - from: ai
        text: 按兵不动一夜，联系没断，用户的空落感反而冒头。点破他要的其实是密度，但不评判。
        delivery: thought
    choices:
      - thought: 告诉他这是正常的落差
        reply: 没多聊不等于失去，节奏换了个挡而已。那点空落，是你还想聊得更多的证据。记着这感觉就行，别急着用消息去填满。
        next: 5m.1.6
  - id: 5m.1.5
    channel: left
    label: 接住之后（分支B·D1晚热聊，D2白天复盘）
    time: D2 白天（周一）
    timeRank: 2
    order: 9
    lines:
      - from: boy
        text: 接住了！顺着翻盘那个梗真聊起来了，一直聊到十一点多，我自己立的'十一点必睡'当天就倒了，笑死。她说该睡了，晚安。结果今天到现在一条没有……是不是昨晚聊太猛了，还是我想多了
        delivery: pop
      - from: ai
        text: 热聊一夜后进入安静日，用户的解读开始摇摆。他手里的证据只有昨晚那句晚安是善意的，先钉住这个。
        delivery: thought
    choices:
      - thought: 让他把节奏放平
        reply: 能聊到十一点多说明状态在线，今天的安静大概率就是普通的一天。别数小时，找点自己的事干，晚上要还聊不上再说。
        next: 5m.1.6
  - id: 5m.1.6
    channel: left
    label: 渐入佳境（汇合·D2 晚）
    time: D2 晚
    timeRank: 3
    order: 10
    lines:
      - from: boy
        text: 晚点更新：她晚上主动来找我了，这回聊了一个多钟头，还挺尽兴。之前我老盯着'她多久回、回几个字'这种破事琢磨，现在感觉慢慢摸到点节奏了。可能真像你说的，急不得
        delivery: pop
      - from: ai
        text: 两天的样本还小，但节奏感在成形，焦虑暂时退潮。肯定这份平稳，提醒他别急着赶进度。
        delivery: thought
    choices:
      - thought: 肯定节奏，提醒别赶进度
        reply: 看，晚上这不就来了。节奏这东西，你越不掐表它越顺。这两天就当热身，后面让它自己长。
        next: 5m.2.1
  - id: 5m.2.1
    channel: left
    label: 聊热（D9，一周多后）
    time: D9（下周一）
    timeRank: 5
    order: 15
    lines:
      - from: boy
        text: 连着聊一个多星期了，她回得慢但都会回，我好像摸到她的节奏了。今天她还主动给我发了张加班的照片，配一个'困'字，她的猫踩着键盘抢镜，叫煤球，特别敬业。这算不算把我当自己人了
        delivery: pop
      - from: ai
        text: 主动分享日常是信任信号。用户那句"回得慢但都会回"是他自己总结的相处模式，值得让他多说这类观察。
        delivery: thought
    choices:
      - thought: 顺着照片关心她
        reply: 发自己状态图就是把你划进"可打扰"名单了。回"困就早点收工，别熬"，再夸一句猫主子敬业，聊猫永远安全。关心到位就收，别追加。
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
    order: 16
    节拍: 快
    lines:
      - from: boy
        text: 我现在一天能给她发八百条'在干嘛'，她有时候隔俩小时才回一条。发完我就去刷她朋友圈，看她又给谁点赞了。我是不是有点上头了，你客观说说
        delivery: pop
      - from: ai
        text: 用户第一次自察：频率、等待、盯动态，全说出口了。肯定这份觉察本身，别急着开药方。
        delivery: thought
    choices:
      - thought: 肯定觉察，建议收着点
        reply: 能说出"上头"两个字的人已经赢一半了。试试把"在干嘛"留给真想问的时候，一天挑两三个自然的节点聊，剩下的冲动先记着。
        next: 5m.2.3
      - thought: 热恋期都这样，不用压
        reply: 刚认识都这样，投入不是毛病。真觉得刷得太多，就把"看动态"换成"直接找她聊"，同样是想她，后者至少她看得见。
        next: 5m.2.4
  - id: 5m.2.3
    channel: left
    label: 收敛试验（分支A·D10 晚）
    time: D10 晚
    timeRank: 7
    order: 17
    lines:
      - from: boy
        text: 试了一天，说实话挺难受的。话到嘴边删了三回，最后就发了句晚安。她回得跟平时一样，也没问我今天咋这么安静……我感觉自己在演一个淡定的人
        delivery: pop
      - from: ai
        text: 降低频率对他像戒断，对方并无异样反馈。承认难受是真实的，别让他把策略当成性格。
        delivery: thought
    choices:
      - thought: 告诉他演久了会成真
        reply: 难受说明这不是你的自然节奏，是你在为一段还没定型的事让路。装一装可以，但别忘了原本的你什么样——她认识的，是那个一天八百条的你。
        next: 5m.2.5
  - id: 5m.2.4
    channel: left
    label: 照旧自嘲（分支B·D10 晚）
    time: D10 晚
    timeRank: 7
    order: 18
    lines:
      - from: boy
        text: 没压住，照旧一天八百条。她也没烦，就是回得慢，有时候一个'哈哈哈'隔俩小时才来。我对着屏幕自己跟自己聊天呢这是，笑死
        delivery: pop
      - from: ai
        text: 维持高频输出，对方稳定接收但回馈有限。用户用自嘲消化落差，先把情绪接住。
        delivery: thought
    choices:
      - thought: 陪他自嘲一句，顺势提见面
        reply: 一个人演双簧还能坚持一星期，这份深情建议直接当面用。线上聊到头也就是这样了，找机会约出来，见一面顶八百条。
        next: 5m.3.1
  - id: 5m.2.5
    channel: left
    label: 缓冲·约线下（分支A·D11）
    time: D11（周三）
    timeRank: 8
    order: 19
    lines:
      - from: boy
        text: 又憋了一天。不找她吧心里空得慌，找她吧又怕招人烦。你说我这一天天的，线上聊得再欢，她一忙起来我还是干等着。这咋整
        delivery: pop
      - from: ai
        text: 收敛试验进入第二天，憋和怕两头拉扯。他真正缺的不是聊天频率，是相处密度，文字给不了。把出口指到线下。
        delivery: thought
    choices:
      - thought: 把见面提上日程
        reply: 再在线上磨一百天也是这个循环。约她出来，当面聊——你的八百条"在干嘛"不如一顿饭管用。这周就约，别拖。
        next: 5m.3.1
  - id: 5m.3.1
    channel: left
    label: 约局参谋（D12 晚，第二周）
    time: D12 晚
    timeRank: 11
    order: 24
    lines:
      - from: boy
        text: 行，听人劝吃饱饭，我想约她周末出来吃个饭。就是不知道咋开口，直接问'周六有空吗'会不会显得猴急
        delivery: pop
      - from: ai
        text: 从线上转线下的意向明确。需要具体话术加时间锚点，把"猴急"的负担也拆掉。
        delivery: thought
    choices:
      - thought: 给他一版邀约话术
        reply: 聊一周多约饭不叫猴急，叫水到渠成。发"周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭"——由头、时间全齐，她只需要点头。
        next: 5m.3.2
  - id: 5m.3.2
    channel: left
    label: 改期失落（D13 周五）
    time: D13（周五）
    timeRank: 12
    order: 26
    lines:
      - from: boy
        text: 她周六来不了了，说项目临时有个节点，问改周日行不行。语气倒挺客气的，还带了个不好意思的表情。但我心里就是不得劲……是不是其实不想来，找的借口
        delivery: pop
      - from: ai
        text: 用户把改期往拒绝方向解读。他能给出的依据只有：对方主动提了改期、语气客气。从这两个动作本身看，不像推脱。
        delivery: thought
    choices:
      - thought: 把"主动改期"这个动作指给他看
        reply: 真不想来的人会给"下次一定"，不会自己把周日钉死。主动改期等于想来，只是这周身不由己。回"行，周日，你忙你的"，七个字，懂事又不失体面。
        next: 5m.3.3
  - id: 5m.3.3
    channel: left
    label: 见面复盘（D15 周日晚）
    time: D15（周日晚）
    timeRank: 13
    order: 28
    lines:
      - from: boy
        text: 见完了！吃饭散步聊了三个多小时，比线上放得开多了。她还问我下次想吃啥，说她想吃烤肉，下回带我吃。就是中间她回了好几条工作消息，我干坐着有点尴尬。对了，散步的时候我跟她坦白了个事：有次她半天没回消息，我半夜还在刷她朋友圈，看她睡了没。她笑了，说'你想得可真多'。这话……是好事还是坏事
        delivery: pop
      - from: ai
        text: 当面交底半夜刷朋友圈，对方一笑带过。用户在反复咀嚼这句回应。先收住复盘焦虑，把"下次"这个正向信号摆到前面。
        delivery: thought
    choices:
      - thought: 先接住"下次"，再给交底定性
        reply: “说她想吃烤肉、下回带你吃”，这是把以后默认进日程了，含金量最高的一句。她中间回工作消息那事儿不用往心里去，成年人常态。至于半夜刷朋友圈，你能自己说出来，说明你有数，她那句“想得真多”没带刺，翻篇。
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
    order: 30
    lines:
      - from: boy
        text: 睡前最后问一句，你说我这两周的表现，到底有没有戏？我这人你知道的，上次这么上心还是给我表妹辅导作业的时候
        delivery: pop
      - from: ai
        text: 用户寻求整体评估，语气半开玩笑半认真。手里的证据链够长，可以给个有依据的正向判断。
        delivery: thought
    choices:
      - thought: 给一个有依据的正向判断
        reply: 秒回是常态、主动发日常、约完主动提下次——单拎一条都不算数，三条叠一块就是明确的"继续"。有戏，别自己吓自己。
        next: 5m.4.1
  - id: 5m.4.1
    channel: left
    label: 表白排练（D17，见面两天后）
    time: D17（周二）
    timeRank: 14
    order: 32
    lines:
      - from: boy
        text: 我想跟她表白。稿子我打了删删了打，现在这版你听听：'我挺喜欢你的，想跟你正经处对象，你考虑考虑'。总感觉哪里不对，又说不上来
        delivery: pop
      - from: ai
        text: 话术直白，"考虑考虑"四个字像发工作邀约。用户要的是温度，改成更像说话的版本。
        delivery: thought
    choices:
      - thought: 改成直球版
        reply: “考虑考虑”太公事公办。改成“跟你聊天的时候我总是最放松的，我挺喜欢你，想跟你处对象，你觉得咱俩行不行”——感受放前面，问句收尾，她怎么接都不僵。
        next: 5m.4.2
        节拍:
          afterMs: 1600
      - thought: 改成含蓄版
        reply: 别一上来就"处对象"。改成"跟你待一块的时候特别舒服，我可能有点喜欢你，你觉得呢"——留了余地，她要是也心动，接得住；要是不想，也有台阶。
        next: 5m.4.3
  - id: 5m.4.2
    channel: left
    label: 直球发出（分支A·D17 晚）
    time: D17 晚
    timeRank: 15
    order: 33
    节拍: 长停顿
    lines:
      - from: boy
        text: 发了！就用你改的那版。发完我就后悔了，感觉跟裸奔一样。现在她在输入又停止，输入又停止，我心脏跟着一抽一抽的。你说她打那么久是在措辞还是想拒绝我
        delivery: pop
      - from: ai
        text: 消息已发出，用户进入等待的极限状态。输入状态来回切换只说明对方在认真回应，推不出内容。
        delivery: thought
    choices:
      - thought: 让他停止解读，等就是了
        reply: 输入中、停止、再输入，大概率是在斟酌，敷衍的人直接甩一句"哈哈"。你现在唯一能做的就是别盯着屏幕，去洗把脸，答案不会因为你盯着就早点来。
        next: 5m.4.4
  - id: 5m.4.3
    channel: left
    label: 含蓄发出（分支B·D17 晚）
    time: D17 晚
    timeRank: 15
    order: 34
    节拍: 长停顿
    lines:
      - from: boy
        text: 你改的那版发了。发完特别想撤回，又怕撤回显得更刻意。你说她要是回个'你说啥呢哈哈'，我下半辈子还怎么做人
        delivery: pop
      - from: ai
        text: 留有余地的版本同样在等待期引发社死预演。用户预设了最坏回应，需要把这个假想敌拆掉。
        delivery: thought
    choices:
      - thought: 拆掉最坏假设
        reply: 她要真回"你说啥呢"，你就回"没什么，夸你今天好看"，一句话就能落地，社死不了。何况照她这一周的架势，装傻的概率不大。稳住。
        next: 5m.4.4
  - id: 5m.4.4
    channel: left
    label: 表白结果（D17 晚）
    time: D17 晚
    timeRank: 15
    order: 35
    节拍: 慢
    ending: 在一起
    lines:
      - from: boy
        text: 她回了！！过了得有半小时，我以为凉了，结果她说：'我也想试试，只是我可能不太会谈恋爱，你多担待'。这是答应了吧？？是答应了对吧！那个'只是'后面的是啥意思啊
        delivery: pop
        节拍:
          pauseBeforeMs: 1200
      - from: ai
        text: 答应了，还附了一句自我交底。用户光顾着高兴，把后半句当免责条款扫过去了。道贺的同时，把这句话的分量点出来。
        delivery: thought
    choices:
      - thought: 道喜，并郑重提醒记住这句话
        reply: 是答应了，恭喜。她那句"不太会谈恋爱"不是客气，是提前交底：以后她有做得笨拙的地方，源头就在这句话里。别光收藏截屏，把它记牢。
    记忆候选:
      - 缩略标签: 不会谈恋爱
        短句: 只是我可能不太会谈恋爱
        类型: Ta的真实
        线: ②她的回避
  - id: 5f.1.1-A
    channel: right
    label: 开场·双问（D1 晚，收到他的消息）
    time: D1 晚
    timeRank: 1
    order: 4
    when:
      男生意向: 问
      女生意向: 问
    requires:
      - 5m.1.2
    清空记忆: right
    lines:
      - from: girl
        text: 我同桌招了：那个表哥前两天也找她要过我微信，等于我俩是互相要的？？刚加上，他消息就来了：'hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡'。……这人，自己先把底交了。我咋回啊
        delivery: pop
      - from: ai
        text: 两边都主动要过联系方式，她嘴上吐槽心里是高兴的。他的开场自带台阶，给她一个轻的回法就行。
        delivery: thought
    choices:
      - thought: 轻着回一句，别端着
        reply: 他这句"还记得我不"就是把话头递你手上了。先回个"记得"，后面看他想聊啥。不用急着热络，按你的节奏来，去回吧。
        next: 5f.1.2
  - id: 5f.1.1-B
    channel: right
    label: 开场·仅女问（D1 晚，收到他的消息）
    time: D1 晚
    timeRank: 1
    order: 5
    when:
      男生意向: 不问
      女生意向: 问
    requires:
      - 5m.1.2
    清空记忆: right
    lines:
      - from: girl
        text: 磨了一下午，我终于把他加上了，开场白还没憋出来呢，他倒先发来了：'hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡'。行吧，省得我想了，还挺会挑时机
        delivery: pop
      - from: ai
        text: 加好友的顺序她纠结了一下午，对方一条消息把台阶全铺好了。她的轻松是真的，接住就行。
        delivery: thought
    choices:
      - thought: 顺着他的话头回
        reply: 人家把"还记得我们不"都递到嘴边了，回"记得"就算接住。开场白这关算过了，去聊吧，聊不动再回来。
        next: 5f.1.2
  - id: 5f.1.1-C
    channel: right
    label: 开场·仅男问（D1 晚，收到他的消息）
    time: D1 晚
    timeRank: 1
    order: 6
    when:
      男生意向: 问
      女生意向: 不问
    requires:
      - 5m.1.2
    清空记忆: right
    lines:
      - from: girl
        text: 那个表哥加我微信了，就桌游那天见过的。我刚通过，他消息就追过来了：'hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡'。这人是有多着急，哈哈
        delivery: pop
      - from: ai
        text: 对方通过即发消息，节奏很快。她的反应是觉得好笑，不是反感。给个自然的回法，不用有压力。
        delivery: thought
    choices:
      - thought: 回一句，看他要聊啥
        reply: 他这个自来熟反而好接，回"记得"，加不加调侃随你。感兴趣就聊两句，不感兴趣礼貌收住，你没义务接住所有热情。回完看情况。
        next: 5f.1.2
  - id: 5f.1.2
    channel: right
    label: 初聊反馈（D2 晚）
    time: D2 晚
    timeRank: 3
    order: 11
    requires:
      - 5m.1.6
    lines:
      - from: girl
        text: 来了来了，跟你汇报下：昨晚我回了句'记得，你也要到点睡了'就把手机扔了，本来想晾他一会儿的。这两天聊下来比我想的舒服，他有话接话，我不接他也不催。今天他断断续续发了几条，我寻思晚上一起回。行了，我去找他唠两句，晚上反正闲着
        delivery: pop
      - from: ai
        text: 两天的相处反馈是正面的，"不催"这一点她记住了。她主动去找他聊，意愿明确。
        delivery: thought
    choices:
      - thought: 去聊吧，节奏正好
        reply: 两天能有这个节奏，不亏。你会主动去找他，这本身就很说明问题。去吧，按你舒服的强度来。
        next: 5f.1.3
    window:
      channel: left
      下界:
        - 5m.1.6
      上界:
        - 5m.2.1
      说明: 女5.1.2 在男5.1.4/5.1.5 之后、男5.2.1 之前
  - id: 5f.1.3
    channel: right
    label: 慢回真相（D3 晚）
    time: D3 晚（周二）
    timeRank: 4
    order: 12
    节拍: 慢
    lines:
      - from: girl
        text: 他回消息也太勤快了……我下班攒了一堆没回的。不是不想回他，就是下班累得话都不想说，也不知道回啥显得有意思。对了，他头像是只小熊，看着挺憨
        delivery: pop
      - from: ai
        text: 用户的慢是能量不足，不是态度问题，这点她自己都未必分得清。给个诚实的低耗方案，别逼她营业。
        delivery: thought
    choices:
      - thought: 教她直接说累了
        reply: 累了就直说"下班瘫了，今天回不动了"，诚实比硬撑体面，他反而踏实。攒着的话题挑个有精神的晚上好好回，质量换数量。
        next: 5f.1.4
      - thought: 教她丢个表情包
        reply: 不想打字就丢个表情包，礼数到了，也给自己留了台阶。等哪天状态回来，再认真回他一轮，不亏。
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
    order: 13
    节拍: 慢
    lines:
      - from: girl
        text: 我真照你说的说累了。结果他秒回了一大段，什么'好好休息''别太拼''记得吃晚饭'……排比句都出来了。不知道为啥，我看到那坨关心有点发怵，就回了个'嗯'。我是不是有点不知好歹
        delivery: pop
      - from: ai
        text: 直说换来高浓度关怀，用户回了个"嗯"。她被热情的密度烫到了，这不是不知好歹，是节奏差。
        delivery: thought
    choices:
      - thought: 告诉她这是节奏差，不是毛病
        reply: 关心是真好，密度是真超标，你的"嗯"是给自己留的呼吸口，不是没良心。往后再遇到这种"一坨式关怀"，消化不了就先放着，不用逼自己立刻全接。
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
    order: 14
    节拍: 慢
    lines:
      - from: girl
        text: 丢了个表情包过去，他居然正经回了我一句'你也早点休息'，还带了个他自己的表情包，土得掉渣。不过……莫名有点可爱？算了不聊这个，我洗漱去了
        delivery: pop
      - from: ai
        text: 低耗方案运转正常，用户对"土味认真"起了好感苗头，又立刻自己掐掉。不点破，让她带着这点没说完的话去睡。
        delivery: thought
    choices:
      - thought: 顺着她的节奏收尾
        reply: 能觉得对方土得可爱，这本身就是信号，不用急着定义。去洗漱吧，这页先留着。
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
    order: 20
    requires:
      - 5m.2.2
    lines:
      - from: girl
        text: 这一周多陆陆续续都聊着，没断过。他今天突然夸我开朗，说跟我聊天不累。说实话我朋友是挺多的，办公室没我可冷清了，周末的局从来不断，我跟谁都能聊到一块去。他跟我正相反，闷闷的，十句憋出一句。不过听他说'跟你聊天不累'还挺受用的，嘿嘿
        delivery: pop
      - from: ai
        text: 用户把"广而浅"当成自己最好的部分展示，语气自豪。接住自豪还是轻轻递一个新角度，会影响她后面怎么看"深"这件事。
        delivery: thought
    choices:
      - thought: 接住她的自豪
        reply: 开朗是天赋，人缘是本事，这话不掺水。他那句"跟你聊天不累"翻译过来就是"在你面前不用演"，你俩正好互补。
        next: 5f.2.2
      - thought: 轻轻递一个观察角度
        reply: 开朗是真开朗，不过我问一句：这么多局里，有没有一个人，是你累了烦了、谁都不想理的时候，还愿意单独找的？要是没有，也不着急，就当个问题放着。
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
    order: 21
    lines:
      - from: girl
        text: 晚上跟闺蜜吃饭，不知道咋的就说起他了，说什么'有个闷葫芦天天找我聊天'。她们起哄我，我还嘴硬说就是普通朋友。结果回家路上一直在笑，被她们说中了，烦死了
        delivery: pop
      - from: ai
        text: 在朋友面前否认、独处时偷着乐，用户的心动已经藏不住了。她嘴上的"烦"是害羞的变体。
        delivery: thought
    choices:
      - thought: 不戳破，让她自己咂摸
        reply: “普通朋友”能让你回家路上一直笑，这含金量你自己品。不用急着改口，下回她们再问，你笑而不语就行。
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
    order: 22
    lines:
      - from: girl
        text: 睡前想了想白天你问的那个问题。还真没有……我累的时候谁都不想找，就想自己待着，点个外卖刷刷手机就缓过来了。跟谁都聊得来，好像也意味着跟谁都差一口气？说不上来，反正今晚有点怪怪的
        delivery: pop
      - from: ai
        text: 那个问题戳中了：热闹全是浅水区。用户第一次意识到自己的深水区没人，情绪是淡淡的失落。陪着待一会儿，别急着给方案。
        delivery: thought
    choices:
      - thought: 肯定这个觉察，不急着解决
        reply: 能想到"差一口气"这一层，比一百个局都值钱。不用逼自己现在就找答案，允许自己有"就想自己待着"的时候，这不可耻。问题留着，它会自己长大。
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
    order: 23
    lines:
      - from: girl
        text: 昨儿一宿没睡踏实，也不知道心里在晃悠个啥。今天他问我家是哪的、家里都有谁，我顺势聊别的岔开了，他也没追问。这点还挺好，不刨根问底，换个人我早烦了
        delivery: pop
      - from: ai
        text: 家庭话题被熟练岔开，对方的不追问让她舒适。这份舒适是真实的，回避也是真实的，两者并存。
        delivery: thought
    choices:
      - thought: 肯定这种分寸感
        reply: 不追问是他的分寸，你想说的时候自然会说，这种节奏确实舒服。节奏舒服比聊得多重要，你现在这个相处状态是健康的。
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
    order: 25
    requires:
      - 5m.3.1
    lines:
      - from: girl
        text: 他约我周六吃饭，用桌游输的局当由头，还挺会找台阶的，我答应了。说来也巧，我同桌就是他表妹，这缘分绕的。不过周五我们有个项目节点，估计得加班，万一周六状态崩了可别鸽人家……到时候见面注意点啥
        delivery: pop
      - from: ai
        text: 答应了约会，又预埋了加班的变数，她自己没当回事。给见面建议，守约的事轻轻钉一下。
        delivery: thought
    choices:
      - thought: 给见面建议，顺嘴提一句守约
        reply: 少刷手机，多接他的话，你本来就会听。至于周六，真赶不完就提前说改期，别当天放鸽子——第一面放鸽子，后面三顿饭都补不回来。
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
    order: 27
    requires:
      - 5m.3.2
    lines:
      - from: girl
        text: 乌鸦嘴，项目真炸了，周六悬了。我跟他说了改周日，他就回了句'行，周日，你忙你的'。就这七个字，我怎么品出点失落的味道，他是不是不高兴了
        delivery: pop
      - from: ai
        text: 对方回复变短，用户开始解读他的情绪。她在意他的感受，这在意本身就是投入。给个把话补暖的方案。
        delivery: thought
    choices:
      - thought: 给她一个把话补暖的方案
        reply: 七个字是"懂事"的极限长度，多少有点失落。补一句"周日我请，当赔罪"，他立马能活过来。改期不伤人，伤人的是改得干巴巴。
        next: 5f.3.3
  - id: 5f.3.3
    channel: right
    label: 见面复盘（D15 周日晚）
    time: D15（周日晚）
    timeRank: 13
    order: 29
    requires:
      - 5m.3.3
    lines:
      - from: girl
        text: 周日的饭吃完了，比我想的舒服。就是散步的时候他忽然说，有次我没回消息，他半夜还在刷我朋友圈，看我睡了没。我说'你想得可真多'，但我心里咯噔一下。而且说真的……这人是不是家里给了特别多爱，才这么会关心人，我长这么大没人这么盯着我。全程吃啥逛啥都听我的，他是没什么主意，但省心
        delivery: pop
      - from: ai
        text: 半夜刷朋友圈这件事，用户当场用"想得真多"带过，复盘时却翻出来重新看。她的解读是"家里有爱"，把不安翻译成了温暖。顺着，但别焊死。
        delivery: thought
    choices:
      - thought: 顺着她的解读，留一道缝
        reply: 愿意盯着你睡没睡的人不多见，按"家里有爱"理解，先成立。他那句自曝其实是在说"我在意你"，只是方式有点笨。至于"都听你的"——你是省心还是没劲，再见两次就知道，先别下结论。
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
    order: 31
    lines:
      - from: girl
        text: 躺下了又想起来点事。他那个'没主意'我其实有点在意，但转念一想，闷就闷点吧，跟他待着不用费脑子，挺省心的。而且我岔开前男友话题的时候他都没追问，这种体贴真不多见。可能……我就是想要个不用努力的关系？
        delivery: pop
      - from: ai
        text: 用户主动把违和消化成优点，还顺手碰到了自己的核心诉求。这层自我看见很浅，点到即止。
        delivery: thought
    choices:
      - thought: 接住她那句自我看见
        reply: “不用努力的关系”——你能说出这句，比给他贴十个标签都准。省心现阶段是真的，先按这个节奏处着，哪天不省心了再重新算账。
        next: 5f.4.1
  - id: 5f.4.1
    channel: right
    label: 表白收到（D17 晚）
    time: D17 晚
    timeRank: 15
    order: 36
    requires:
      - 5m.4.4
    节拍: 慢
    lines:
      - from: girl
        text: 他跟我表白了。我盯着屏幕十分钟了，心里乱七八糟的。说不心动是假的，但我就是怕，怕太深入。我以前一跟人深入就搞砸，你说我这样的人，真的适合谈恋爱吗
        delivery: pop
      - from: ai
        text: 表白触发了她的核心恐惧：深入等于搞砸。她问"适不适合"，其实是在找"怎么才能不怕"。不替她做决定，帮她把怕的东西摊开。
        delivery: thought
    choices:
      - thought: 帮她说清恐惧，不替她决定
        reply: 先别问适不适合，先看你怕的具体是什么——是"深入以后搞砸"这个想象，对吧。那就把这个怕直接告诉他："我也想试试，只是我可能不太会谈恋爱，你多担待"。能把怕说出口的关系，才有机会不可怕。
        next: 5f.4.2
        节拍:
          afterMs: 1600
      - thought: 给她一个轻一点的答法
        reply: 怕，说明这回是真上心了，不丢人。答得轻一点："我们先试试"，再加半句"我可能不太会"，把预期放低，你就不用一上来背"必须成功"的包袱。
        next: 5f.4.3
  - id: 5f.4.2
    channel: right
    label: 说清恐惧（分支A·D17 晚）
    time: D17 晚
    timeRank: 15
    order: 37
    节拍: 长停顿
    lines:
      - from: girl
        text: 我把那句打出来了：'我也想试试，只是我可能不太会谈恋爱，你多担待'。打完盯着看了十分钟，一个字一个字地看。就是……越看越觉得这话好重啊，像把我自己交出去了。发还是不发，你帮我摁个手印
        delivery: pop
      - from: ai
        text: 她把交底句写好了，又被这份重量吓住。这句话重，恰恰因为它没有掺假。她需要的是一个不后悔的理由。
        delivery: thought
    choices:
      - thought: 告诉她重是因为真
        reply: 重，是因为这句话没有掺假。你现在发出去的不是一个回答，是一份"我愿意把真实的我递过去"。他都把话说到那份上了，你递这个，不算冒进。发。
        next: 5f.4.4
  - id: 5f.4.3
    channel: right
    label: 轻装纠结（分支B·D17 晚）
    time: D17 晚
    timeRank: 15
    order: 38
    节拍: 长停顿
    lines:
      - from: girl
        text: 我按你说的先打了'我们先试试'，五个字。但删了，总觉得少了点什么……好像不把丑话说在前头，以后搞砸了就全是我的错。你说我是不是想太多了，可能人家根本没想那么远
        delivery: pop
      - from: ai
        text: 轻版打完又删，她其实知道省略掉的那半句才是关键。她怕的不是现在轻，是将来被翻旧账。
        delivery: thought
    choices:
      - thought: 把那半句还给她
        reply: 不是想太多，是你自己知道"试试"前面还欠半句实话。就把"我可能不太会"补上——这半句不是免责，是给这段关系一个真实的起点。补上再发，你今晚才睡得着。
        next: 5f.4.4
  - id: 5f.4.4
    channel: right
    label: 答应收尾（D17 晚）
    time: D17 晚
    timeRank: 15
    order: 39
    节拍: 慢
    ending: 在一起
    lines:
      - from: girl
        text: 发了！'我也想试试，只是我可能不太会谈恋爱，你多担待'。手一直在抖，跟考试交卷似的。他秒回了三个感叹号……好家伙。奇怪，发出去那一下，好像也没那么可怕了
        delivery: pop
        节拍:
          pauseBeforeMs: 1800
      - from: ai
        text: 最怕的一步迈出去了，预想的灾难没有应验。肯定这个突破，收在轻快的余温里，别升华。
        delivery: thought
    choices:
      - thought: 肯定这一步，轻收尾
        reply: 怕深入的人亲手写了"试试"，还附了交底，这一步的含金量你自己品。手抖很正常，心动的人手都抖。今晚可以睡个好觉了。
`,Cv=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.
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
`,zv=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.
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
          我刚想问他今天出不出来，打完又没发。昨天一天没理他，现在突然问他出来吗，感觉怪怪的。
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
        reply: 可以答应见面，同时说清昨天让你害怕的是什么：“好，下午见。昨天一直等不到你回，我以为你不想谈了。下次至少跟我说一声，好吗？”
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
          他回：好，下午见。昨天一直等不到你回，我以为你不想谈了。下次至少跟我说一声，好吗？
          我没想分手啊。我就是气他前天那么问，可现在回这句，是不是又像在怪他？
        delivery: type
      - from: ai
        text: 他把一天没回复理解成可能分手，她并没有这个意思。可以建议先明确仍想继续，再简短说明当时在生气，把争执经过留到见面，避免再次在消息里争辩。
        delivery: thought
    choices:
      - thought: 先说清仍想继续
        reply: 可以先把没有分手的意思说明白：“我没想分手。我昨天就是气你那样问。下午见了说吧。”这是解释你当时的意思，不用现在把谁对谁错重新争一遍。
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
        text: 发了，我没想分手。我昨天就是气你那样问。下午见了说吧。
        delivery: type
      - from: ai
        text: 她已经澄清没有分手的意思，也表达了愿意当面谈。现在需要留出让对方回应的时间，简短确认即可，不反复要求她补充更完整的解释。
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
          发了。她回，我没想分手。我昨天就是气你那样问。下午见了说吧。
          我又问了在哪碰头，等她定地方。
        delivery: type
      - from: ai
        text: 女友明确说没有分手的意思，也答应见面谈。他最担心的事得到了一点澄清，可以建议先安排见面，再当面说等待的经历，不替两人宣布已经和好。
        delivery: thought
    choices:
      - thought: 让话留到见面慢慢说
        reply: 至少她明确说了没有分手的意思，也愿意当面聊。先把见面约下来，你昨天怎么等过来的，也可以到时候讲，不用再靠猜她的态度判断了。
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
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。
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
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。
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
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。
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
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。
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
`,Ar={极快:{pauseBeforeMs:0,indicatorMs:280,typeIntervalMs:40,afterMs:220},快:{pauseBeforeMs:100,indicatorMs:600,typeIntervalMs:65,afterMs:450},正常:{pauseBeforeMs:240,indicatorMs:1e3,typeIntervalMs:100,afterMs:900},慢:{pauseBeforeMs:850,indicatorMs:1500,typeIntervalMs:145,afterMs:1400},长停顿:{pauseBeforeMs:1700,indicatorMs:2100,typeIntervalMs:165,afterMs:2100}},Dv="正常",cg={pauseBeforeMs:0,indicatorMs:0,typeIntervalMs:0,afterMs:0};function Rv(c,o){return c==="type"&&!o}function fg(c){if(typeof c=="string")return Ar[c]?null:`未知节拍预设「${c}」，可用：${Object.keys(Ar).join(" / ")}`;if(!c||typeof c!="object"||Array.isArray(c))return"节拍必须是预设名或数值对象";const o=["pauseBeforeMs","indicatorMs","typeIntervalMs","afterMs"];for(const[m,f]of Object.entries(c)){if(!o.includes(m))return`节拍里有未知字段「${m}」`;if(typeof f!="number"||!Number.isFinite(f)||f<0||f>2e4)return`节拍.${m} 必须是 0~20000 之间的毫秒数`}return null}function qu(c,o=!1){if(o)return{...cg};let m={...Ar[Dv]};for(const f of c)if(f!==void 0)if(typeof f=="string"){const d=Ar[f];d&&(m={...d})}else m={...m,...f};return m}const og=1e6;function Qi(c){return c.sortKey!==void 0?c.sortKey:(c.chapter??0)*og+(c.order??0)}function Tr(c,o){const m=Qi(c)-Qi(o);return m!==0?m:c.id.localeCompare(o.id,"zh-Hans-CN")}function jv(c){const o=new Map,m=c.beats.map(d=>{var x;const y=d.chapter??0,p=o.get(y)??0;o.set(y,p+1);const A=(x=c.axes)==null?void 0:x[y],z=d.timeRank??(d.time&&A?A.indexOf(d.time):void 0);return{...d,order:d.order??p,sortKey:y*og+(d.order??p),...z!==void 0&&z>=0?{timeRank:z}:{}}}),f=[...m].sort(Tr);return{...c,beats:m,orderedBeats:f,beatById:new Map(m.map(d=>[d.id,d]))}}function Sr(c,o){const m=c.window;return m?m.下界.length>0&&!m.下界.some(f=>o.has(f))?"waiting":m.上界.some(f=>o.has(f))?"closed":"open":"none"}function Yv(c,o){var f,d;if(Sr(c,o)!=="closed"||o.has(c.id))return null;const m=((f=c.window)==null?void 0:f.上界.filter(y=>o.has(y)))??[];return`区间越界：拍 ${c.id} 应在对侧 ${((d=c.window)==null?void 0:d.下界.join("/"))||"起点"} 与 ${m.join("/")} 之间播出，但 ${m.join("/")} 已完成`}const Hv=["type","pop","image","thought"];function wv(c){var T,v;const o=[],m=c.beats.map(E=>E.id),f=new Set;c.beats.length===0&&o.push("剧本里没有任何节拍。");for(const E of m){if(!E.trim()){o.push("有节拍缺少 id。");continue}f.has(E)&&o.push(`节拍 id 重复：${E}`),f.add(E)}const d=new Map;for(const E of c.beats)d.has(E.id)||d.set(E.id,E);const y=new Set;for(const E of c.speakers)y.has(E.id)&&o.push(`人物 id 重复：${E.id}`),y.add(E.id),E.channel&&E.channel!=="left"&&E.channel!=="right"&&o.push(`人物 ${E.id} 的侧栏不是 left 或 right。`);const p=_v(c.beats);p&&o.unshift(`节拍依赖成环：${p.join(" → ")}。这会让玩家一直等下去，剧本不能开始。`);const A=new Set(c.beats.flatMap(E=>(E.记忆候选??[]).map(I=>I.缩略标签)));for(const E of c.beats)for(const I of E.choices??[])I.需记忆&&!A.has(I.需记忆)&&o.push(`节拍 ${E.id} 的选项「${I.thought}」需要记忆「${I.需记忆}」，但没有任何节拍提供这条候选。`);const z=new Map;for(const E of c.beats){if(E.order===void 0)continue;const I=`${E.chapter??0}:${E.order}`;z.has(I)?o.push(`节拍 ${z.get(I)} 与 ${E.id} 的章内序号重复（${I}），播出顺序会不确定。`):z.set(I,E.id)}const x=new Set((c.endings??[]).map(E=>E.id));for(const E of c.endings??[]){for(const I of E.requires)d.has(I)||o.push(`终局「${E.id}」要求的拍「${I}」不存在。`);E.requires.length===0&&o.push(`终局「${E.id}」没有写 requires，永远无法判定达成。`)}for(const E of c.beats){E.channel!=="left"&&E.channel!=="right"&&o.push(`节拍 ${E.id} 的 channel 必须是 left 或 right。`),E.lines.length===0&&!E.control&&o.push(`节拍 ${E.id} 没有任何台词。`),E.control&&(E.lines.length>0||(T=E.choices)!=null&&T.length)&&o.push(`控制拍 ${E.id} 不能含台词或玩家选项。`),E.choices&&E.choices.length>0&&E.next&&o.push(`节拍 ${E.id} 已经有选项，就不能再写节拍上的 next。`),Oo(o,E.节拍,`节拍 ${E.id} 的 节拍`);for(const I of E.lines)Oo(o,I.节拍,`节拍 ${E.id} 的台词 节拍`);for(const I of E.choices??[])Oo(o,I.节拍,`节拍 ${E.id} 的选项 节拍`);for(const I of E.requires??[])d.has(I)||o.push(`节拍 ${E.id} 的 requires「${I}」不存在。`);if(E.when)for(const[I,Nn]of Object.entries(E.when))I.trim()||o.push(`节拍 ${E.id} 的 when 有一个空旗标名。`),Ly(Nn)||o.push(`节拍 ${E.id} 的 when.${I} 只能是文字、数字或是否。`);Bv(o,E,c),Uv(o,E,d);for(const I of E.lines){I.text.trim()||o.push(`节拍 ${E.id} 有一句空台词。`),Hv.includes(I.delivery)||o.push(`节拍 ${E.id} 的呈现方式无法识别：${String(I.delivery)}`);const Nn=c.speakers.find(hn=>hn.id===I.from);Nn?Nn.channel&&Nn.channel!==E.channel&&o.push(`节拍 ${E.id} 在${Xi(E.channel)}，却写了${Nn.name}的台词。`):o.push(`节拍 ${E.id} 的说话人「${I.from}」不在人物表里。`)}for(const I of E.choices??[]){if(I.thought.trim()||o.push(`节拍 ${E.id} 有一个空的想法。`),I.reply.trim()||o.push(`节拍 ${E.id} 有一个选项没有写死回复。`),I.set)for(const[Nn,hn]of Object.entries(I.set))Ly(hn)||o.push(`节拍 ${E.id} 的旗标 ${Nn} 只能是文字、数字或是否。`);_y(o,d,E,I.next,"选项")}for(const I of E.记忆候选??[]){if(!I.短句.trim()){o.push(`节拍 ${E.id} 的记忆候选「${I.缩略标签}」缺少短句。`);continue}[...E.lines.map(hn=>hn.text),...(E.choices??[]).map(hn=>hn.reply)].join(`
`).includes(I.短句)||o.push(`节拍 ${E.id} 的记忆候选「${I.缩略标签}」的短句没有出现在本拍的台词或回复里，玩家存不进这条记忆。`)}E.ending!==void 0&&!x.has(E.ending)&&o.push(`节拍 ${E.id} 声明终局「${E.ending}」，但剧本没有在 endings 里声明它。`),(v=E.choices)!=null&&v.length||_y(o,d,E,E.next,"next")}return o.length>0?{ok:!1,error:o.join(`
`)}:{ok:!0}}function Oo(c,o,m){if(o===void 0)return;const f=fg(o);f&&c.push(`${m}：${f}`)}function Bv(c,o,m){var y;if(o.time===void 0)return;const f=(y=m.axes)==null?void 0:y[o.chapter??0];if(!f){c.push(`节拍 ${o.id} 写了 time「${o.time}」，但第 ${o.chapter??0} 章没有顶层 时间轴。`);return}const d=f.indexOf(o.time);d<0?c.push(`节拍 ${o.id} 的 time「${o.time}」不在第 ${o.chapter??0} 章的时间轴里（必须一字不差）。`):o.timeRank!==void 0&&o.timeRank!==d&&c.push(`节拍 ${o.id} 的 timeRank=${o.timeRank} 与时间轴下标 ${d} 不一致。`)}function Uv(c,o,m){const f=o.window;if(!f)return;f.上界.length===0&&c.push(`节拍 ${o.id} 的区间门没有上界，「超出区间就出错」无从判定。`);const d=o.channel==="left"?"right":"left";f.channel!==d&&c.push(`节拍 ${o.id} 在${Xi(o.channel)}，区间门却度量了同侧（${f.channel}）。`);for(const[y,p]of[["下界",f.下界],["上界",f.上界]])for(const A of p){const z=m.get(A);if(!z){c.push(`节拍 ${o.id} 的区间${y}「${A}」不存在。`);continue}z.channel!==f.channel&&c.push(`节拍 ${o.id} 的区间${y}「${A}」不在被度量的对侧 ${f.channel}。`),y==="下界"&&Qi(z)>=Qi(o)&&c.push(`节拍 ${o.id} 的区间下界「${A}」不早于本拍，区间永远无法成立。`),y==="上界"&&Qi(z)<=Qi(o)&&c.push(`节拍 ${o.id} 的区间上界「${A}」不晚于本拍，区间会被提前关闭。`)}}function _y(c,o,m,f,d){if(!f)return;const y=o.get(f);if(!y){c.push(`节拍 ${m.id} 的${d}指向不存在的「${f}」。`);return}y.channel!==m.channel&&c.push(`节拍 ${m.id} 在${Xi(m.channel)}，${d}却指向另一侧的「${f}」。`)}function Ly(c){return typeof c=="string"||typeof c=="number"||typeof c=="boolean"}function Xi(c){return c==="left"?"左侧":"右侧"}function _v(c){const o=new Map(c.map(y=>[y.id,y])),m=new Map,f=[],d=y=>{var p;m.set(y,1),f.push(y);for(const A of((p=o.get(y))==null?void 0:p.requires)??[]){if(!o.has(A))continue;const z=m.get(A)??0;if(z===1){const x=f.indexOf(A);return[...f.slice(x),A]}if(z===0){const x=d(A);if(x)return x}}return f.pop(),m.set(y,2),null};for(const y of c)if((m.get(y.id)??0)===0){const p=d(y.id);if(p)return p}return null}const Lv=[bv,Nv,Mv,Ov,Cv,zv],Gv=["title","chapter","speakers","beats","时间轴","默认节拍","endings"],qv=["id","name","channel"],Zv=["id","channel","requires","when","aside","lines","choices","next","记忆候选","清空记忆","chapter","order","sortKey","time","timeRank","label","window","ending","节拍","control"],Qv=["from","text","delivery","caption","节拍","timing"],Vv=["thought","reply","set","next","需记忆","节拍","timing"],Xv=["缩略标签","短句","类型","线"],Kv=["channel","下界","上界","说明"],Iv=["id","title","requires","set"];function Jv(){try{const c=kv(Lv.map(m=>Fv(m))),o=wv(c);return o.ok?{script:c,error:null}:{script:null,error:o.error}}catch(c){return{script:null,error:c instanceof Error?c.message:"剧本无法解析"}}}function kv(c){var d,y,p;const o=c.flatMap((A,z)=>{var T,v;const x=((v=(T=A.chapters)==null?void 0:T[0])==null?void 0:v.index)??z+1;return A.beats.map(E=>({...E,chapter:E.chapter??x}))}),m={};for(const A of c)for(const[z,x]of Object.entries(A.axes??{}))m[Number(z)]=x;const f={title:((d=c[0])==null?void 0:d.title)??"",speakers:((y=c[0])==null?void 0:y.speakers)??[],beats:o,chapters:c.map((A,z)=>{var x,T;return{index:((T=(x=A.chapters)==null?void 0:x[0])==null?void 0:T.index)??z+1,title:A.title}}),axes:m,endings:c.flatMap(A=>A.endings??[]),默认节拍:(p=c.find(A=>A.默认节拍))==null?void 0:p.默认节拍};return jv(f)}function Fv(c){const o=rg.load(c);if(!Pt(o))throw new Error("剧本不是一个对象");Cl(o,Gv,"剧本顶层");const m=ae(o.title,"剧本缺少标题"),f=sg(o.chapter),d=Wv(o.speakers),y=o.时间轴===void 0?void 0:up(o.时间轴,"时间轴"),p=o.默认节拍===void 0?void 0:xr(o.默认节拍,"剧本默认节拍"),A=typeof p=="string"?p:void 0,z=o.endings===void 0?void 0:tp(o.endings),x=$v(o.beats,A).map(T=>f===void 0?T:{...T,chapter:f});return{title:m,speakers:d,beats:x,chapters:f===void 0?void 0:[{index:f,title:m}],axes:f!==void 0&&y?{[f]:y}:void 0,endings:z,默认节拍:typeof p=="string"?p:void 0}}function Cl(c,o,m){const f=Object.keys(c).filter(d=>!o.includes(d));if(f.length>0)throw new Error(`${m} 有引擎不认识的字段：${f.join("、")}。若剧本新增了结构，先扩 src/engine 的字段契约，不要让它被静默丢弃。`)}function Wv(c){if(!Array.isArray(c)||c.length===0)throw new Error("剧本缺少人物表");return c.map((o,m)=>{if(!Pt(o))throw new Error(`第 ${m+1} 个人物无法读取`);Cl(o,qv,`第 ${m+1} 个人物`);const f=ae(o.id,`第 ${m+1} 个人物缺少 id`),d=ae(o.name,`人物 ${f} 缺少名字`),y=o.channel===void 0?void 0:Yo(o.channel,f);return{id:f,name:d,channel:y}})}function $v(c,o){if(!Array.isArray(c))throw new Error("剧本缺少 beats");return c.map((m,f)=>{if(!Pt(m))throw new Error(`第 ${f+1} 个节拍无法读取`);const d=ae(m.id,`第 ${f+1} 个节拍缺少 id`);Cl(m,Zv,`节拍 ${d}`);const y=Yo(m.channel,d);if(m.control!==void 0&&typeof m.control!="boolean")throw new Error(`节拍 ${d} 的 control 必须为布尔值`);const p=m.节拍===void 0?void 0:xr(m.节拍,`节拍 ${d} 的 节拍`),A=[o,p],z=lp(m.lines,d,A),x=m.choices===void 0?void 0:ip(m.choices,d,A),T=m.requires===void 0?void 0:Er(m.requires,d,"requires"),v=m.when===void 0?void 0:jo(m.when,d),E=m.aside===void 0?void 0:ae(m.aside,`节拍 ${d} 的自言自语无法读取`),I=m.next===void 0?void 0:ae(m.next,`节拍 ${d} 的 next 无法读取`),Nn=m.记忆候选===void 0?void 0:Pv(m.记忆候选,d),hn=m.清空记忆===void 0?void 0:np(m.清空记忆,d),gn=m.order===void 0?void 0:Co(m.order,`节拍 ${d} 的 order`),Gn=m.time===void 0?void 0:ae(m.time,`节拍 ${d} 的 time 无法读取`),Rn=m.timeRank===void 0?void 0:Co(m.timeRank,`节拍 ${d} 的 timeRank`),kn=m.label===void 0?void 0:ae(m.label,`节拍 ${d} 的 label 无法读取`),Tn=m.window===void 0?void 0:ep(m.window,d),Bn=m.ending===void 0?void 0:ae(m.ending,`节拍 ${d} 的 ending 无法读取`),qn=m.sortKey===void 0?void 0:Co(m.sortKey,`节拍 ${d} 的 sortKey`),ln=m.chapter===void 0?void 0:sg(m.chapter);return{id:d,channel:y,control:m.control,lines:z,choices:x,requires:T,when:v,aside:E,next:I,记忆候选:Nn,清空记忆:hn,order:gn,time:Gn,timeRank:Rn,label:kn,window:Tn,ending:Bn,sortKey:qn,chapter:ln,...p!==void 0?{节拍:p}:{}}})}function Pv(c,o){if(!Array.isArray(c))throw new Error(`节拍 ${o} 的记忆候选无法读取`);return c.map((m,f)=>{if(!Pt(m))throw new Error(`节拍 ${o} 的第 ${f+1} 条记忆候选无法读取`);return Cl(m,Xv,`节拍 ${o} 的第 ${f+1} 条记忆候选`),{缩略标签:ae(m.缩略标签,`节拍 ${o} 的第 ${f+1} 条记忆候选缺少缩略标签`),短句:ae(m.短句,`节拍 ${o} 的第 ${f+1} 条记忆候选缺少短句`),类型:m.类型===void 0?void 0:ae(m.类型,`节拍 ${o} 的记忆候选类型无法读取`),线:m.线===void 0?void 0:ae(m.线,`节拍 ${o} 的记忆候选线无法读取`)}})}function np(c,o){if(c==="all"||c==="left"||c==="right")return c;throw new Error(`节拍 ${o} 的清空记忆只能是 all、left 或 right`)}function ep(c,o){if(!Pt(c))throw new Error(`节拍 ${o} 的 window 无法读取`);Cl(c,Kv,`节拍 ${o} 的 window`);const m=Yo(c.channel,`节拍 ${o} 的 window`),f=c.下界===void 0?[]:Er(c.下界,o,"window.下界"),d=Er(c.上界,o,"window.上界"),y=c.说明===void 0?void 0:ae(c.说明,`节拍 ${o} 的 window.说明 无法读取`);return{channel:m,下界:f,上界:d,...y?{说明:y}:{}}}function tp(c){if(!Array.isArray(c))throw new Error("endings 必须是列表");return c.map((o,m)=>{if(!Pt(o))throw new Error(`第 ${m+1} 个 endings 无法读取`);Cl(o,Iv,`第 ${m+1} 个 endings`);const f=ae(o.id,`第 ${m+1} 个 endings 缺少 id`);return{id:f,title:ae(o.title,`终局 ${f} 缺少 title`),requires:Er(o.requires,f,"终局 requires"),set:o.set===void 0?void 0:jo(o.set,f)}})}function lp(c,o,m){if(!Array.isArray(c))throw new Error(`节拍 ${o} 缺少台词`);return c.map((f,d)=>{if(!Pt(f))throw new Error(`节拍 ${o} 的第 ${d+1} 句无法读取`);Cl(f,Qv,`节拍 ${o} 的第 ${d+1} 句`);const y=ae(f.from,`节拍 ${o} 的第 ${d+1} 句缺少说话人`),p=ae(f.text,`节拍 ${o} 的第 ${d+1} 句缺少文字`),A=ap(f.delivery,o),z=f.caption===void 0?void 0:ae(f.caption,`节拍 ${o} 的图说无法读取`),x=f.节拍===void 0?void 0:xr(f.节拍,`节拍 ${o} 的第 ${d+1} 句 节拍`);return{from:y,text:p,delivery:A,...z!==void 0?{caption:z}:{},...x!==void 0?{节拍:x}:{},timing:qu([...m,x])}})}function ip(c,o,m){if(!Array.isArray(c))throw new Error(`节拍 ${o} 的选项无法读取`);return c.map((f,d)=>{if(!Pt(f))throw new Error(`节拍 ${o} 的第 ${d+1} 个选项无法读取`);Cl(f,Vv,`节拍 ${o} 的第 ${d+1} 个选项`);const y=ae(f.thought,`节拍 ${o} 的第 ${d+1} 个想法是空的`),p=ae(f.reply,`节拍 ${o} 的第 ${d+1} 个回复是空的`),A=f.next===void 0?void 0:ae(f.next,`节拍 ${o} 的选项 next 无法读取`),z=f.set===void 0?void 0:jo(f.set,o),x=f.需记忆===void 0?void 0:ae(f.需记忆,`节拍 ${o} 的需记忆无法读取`),T=f.节拍===void 0?void 0:xr(f.节拍,`节拍 ${o} 的第 ${d+1} 个选项 节拍`);return{thought:y,reply:p,...A!==void 0?{next:A}:{},...z!==void 0?{set:z}:{},...x!==void 0?{需记忆:x}:{},...T!==void 0?{节拍:T}:{},timing:qu([...m,T])}})}function xr(c,o){const m=fg(c);if(m)throw new Error(`${o}：${m}`);return c}function jo(c,o){if(!Pt(c))throw new Error(`节拍 ${o} 的旗标无法读取`);const m={};for(const[f,d]of Object.entries(c)){if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean")throw new Error(`节拍 ${o} 的旗标 ${f} 只能是文字、数字或是否`);m[f]=d}return m}function Er(c,o,m){if(!Array.isArray(c)||c.some(f=>typeof f!="string"))throw new Error(`节拍 ${o} 的 ${m} 必须是 id 列表`);return c}function up(c,o){if(!Array.isArray(c)||c.some(m=>typeof m!="string"))throw new Error(`${o} 必须是文字列表`);return c}function Yo(c,o){if(c!=="left"&&c!=="right")throw new Error(`${o} 的 channel 必须是 left 或 right`);return c}function ap(c,o){if(c!=="type"&&c!=="pop"&&c!=="image"&&c!=="thought")throw new Error(`节拍 ${o} 的呈现方式必须是 type、pop、image 或 thought`);return c}function Co(c,o){if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`${o} 必须是非负整数`);return c}function sg(c){if(c!==void 0){if(typeof c!="number"||!Number.isInteger(c)||c<1)throw new Error("chapter 必须是从 1 开始的整数");return c}}function ae(c,o){if(typeof c!="string")throw new Error(o);return c.trim()}function Pt(c){return typeof c=="object"&&c!==null&&!Array.isArray(c)}const rp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAACcXRFWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMACklQVEMgcHJvZmlsZQogICAgIDI4NgozODQyNDk0ZDA0MDQwMDAwMDAwMDAxMTIxYzAyMDUwMDFiNDQ3OTZjNjE2ZTIxMjA1NDY4NjUyMDQxNzY2MTc0NjE3MjIwNDcKNjU2ZTY1NzI2MTc0NmY3MjFjMDI1MDAwMGU0ZTYxNzQ2MTZjNjk2MTIwNTM3MDY5NzY2MTZiMWMwMjZlMDAwZTRlNjE3NDYxCjZjNjk2MTIwNTM3MDY5NzY2MTZiMWMwMjc0MDBjMDUyNjU2ZDY5NzgyMDZmNjYyMDg0NDQ3OTZjNjE2ZTIxMjA1NDY4NjUyMAo0MTc2NjE3NDYxNzIyMDQ3NjU2ZTY1NzI2MTc0NmY3Mjk0MjAyODY4NzQ3NDcwNzMzYTJmMmY3Nzc3NzcyZTY2Njk2NzZkNjEKMmU2MzZmNmQyZjYzNmY2ZDZkNzU2ZTY5NzQ3OTJmNjY2OTZjNjUyZjMxMzMzNTM2MzUzNzM1MzIzNDMwMzczNTM5MzYzODMzCjM1MzAzMDI5MjA2Mjc5MjA4NDRlNjE3NDYxNmM2OTYxMjA1MzcwNjk3NjYxNmI5NDJjMjA2YzY5NjM2NTZlNzM2NTY0MjA3NQo2ZTY0NjU3MjIwODQ0MzQzMjA0MjU5MjAzNDJlMzA5NDIwMjg2ODc0NzQ3MDczM2EyZjJmNjM3MjY1NjE3NDY5NzY2NTYzNmYKNmQ2ZDZmNmU3MzJlNmY3MjY3MmY2YzY5NjM2NTZlNzM2NTczMmY2Mjc5MmYzNDJlMzAyZjI5MWMwMjAwMDAwMjAwMDQKKcI71gAABhdpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMy41Myc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzpjcmVhdG9yPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+TmF0YWxpYSBTcGl2YWs8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvZGM6Y3JlYXRvcj4KICA8ZGM6cmlnaHRzPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+UmVtaXggb2Yg4oCeRHlsYW4hIFRoZSBBdmF0YXIgR2VuZXJhdG9y4oCdIChodHRwczovL3d3dy5maWdtYS5jb20vY29tbXVuaXR5L2ZpbGUvMTM1NjU3NTI0MDc1OTY4MzUwMCkgYnkg4oCeTmF0YWxpYSBTcGl2YWvigJ0sIGxpY2Vuc2VkIHVuZGVyIOKAnkNDIEJZIDQuMOKAnSAoaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC8pPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnJpZ2h0cz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5EeWxhbiEgVGhlIEF2YXRhciBHZW5lcmF0b3I8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBob3Rvc2hvcD0naHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyc+CiAgPHBob3Rvc2hvcDpDcmVkaXQ+TmF0YWxpYSBTcGl2YWs8L3Bob3Rvc2hvcDpDcmVkaXQ+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBsdXM9J2h0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8nPgogIDxwbHVzOkxpY2Vuc29yPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRm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",cp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAACcXRFWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMACklQVEMgcHJvZmlsZQogICAgIDI4NgozODQyNDk0ZDA0MDQwMDAwMDAwMDAxMTIxYzAyMDUwMDFiNDQ3OTZjNjE2ZTIxMjA1NDY4NjUyMDQxNzY2MTc0NjE3MjIwNDcKNjU2ZTY1NzI2MTc0NmY3MjFjMDI1MDAwMGU0ZTYxNzQ2MTZjNjk2MTIwNTM3MDY5NzY2MTZiMWMwMjZlMDAwZTRlNjE3NDYxCjZjNjk2MTIwNTM3MDY5NzY2MTZiMWMwMjc0MDBjMDUyNjU2ZDY5NzgyMDZmNjYyMDg0NDQ3OTZjNjE2ZTIxMjA1NDY4NjUyMAo0MTc2NjE3NDYxNzIyMDQ3NjU2ZTY1NzI2MTc0NmY3Mjk0MjAyODY4NzQ3NDcwNzMzYTJmMmY3Nzc3NzcyZTY2Njk2NzZkNjEKMmU2MzZmNmQyZjYzNmY2ZDZkNzU2ZTY5NzQ3OTJmNjY2OTZjNjUyZjMxMzMzNTM2MzUzNzM1MzIzNDMwMzczNTM5MzYzODMzCjM1MzAzMDI5MjA2Mjc5MjA4NDRlNjE3NDYxNmM2OTYxMjA1MzcwNjk3NjYxNmI5NDJjMjA2YzY5NjM2NTZlNzM2NTY0MjA3NQo2ZTY0NjU3MjIwODQ0MzQzMjA0MjU5MjAzNDJlMzA5NDIwMjg2ODc0NzQ3MDczM2EyZjJmNjM3MjY1NjE3NDY5NzY2NTYzNmYKNmQ2ZDZmNmU3MzJlNmY3MjY3MmY2YzY5NjM2NTZlNzM2NTczMmY2Mjc5MmYzNDJlMzAyZjI5MWMwMjAwMDAwMjAwMDQKKcI71gAABhdpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMy41Myc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzpjcmVhdG9yPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+TmF0YWxpYSBTcGl2YWs8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvZGM6Y3JlYXRvcj4KICA8ZGM6cmlnaHRzPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+UmVtaXggb2Yg4oCeRHlsYW4hIFRoZSBBdmF0YXIgR2VuZXJhdG9y4oCdIChodHRwczovL3d3dy5maWdtYS5jb20vY29tbXVuaXR5L2ZpbGUvMTM1NjU3NTI0MDc1OTY4MzUwMCkgYnkg4oCeTmF0YWxpYSBTcGl2YWvigJ0sIGxpY2Vuc2VkIHVuZGVyIOKAnkNDIEJZIDQuMOKAnSAoaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC8pPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnJpZ2h0cz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5EeWxhbiEgVGhlIEF2YXRhciBHZW5lcmF0b3I8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBob3Rvc2hvcD0naHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyc+CiAgPHBob3Rvc2hvcDpDcmVkaXQ+TmF0YWxpYSBTcGl2YWs8L3Bob3Rvc2hvcDpDcmVkaXQ+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBsdXM9J2h0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8nPgogIDxwbHVzOkxpY2Vuc29yPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRm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",fp=2200,op=2e3;function Ho(c,o){return!o.some(m=>{var f;return m.next===c.id||((f=m.choices)==null?void 0:f.some(d=>d.next===c.id))})}function Gy(c,o){const m=c.filter(f=>f.channel===o).map(f=>f.chapter??0).filter(f=>f>0);return m.length>0?Math.min(...m):1}function hg(c){return{completed:[],flags:{},activated:c.filter(o=>Ho(o,c)).map(o=>o.id),messages:[],pending:{left:null,right:null},memories:{left:[],right:[]},chapter:{left:Gy(c,"left"),right:Gy(c,"right")},ritual:{left:null,right:null},endings:[],error:null,runId:0}}function zo(c,o){return c.chapter[o]>=5?5:void 0}function sp(c,o,m,f){const d=c.memories[o];if(m.label.trim()===""||d.some(A=>A.label===m.label)||d.length>=(zo(c,o)??1/0)&&!f||f&&!d.some(A=>A.label===f))return c;const p=d.filter(A=>A.label!==f);return p.length>=(zo(c,o)??1/0)?c:{...c,memories:{...c.memories,[o]:[...p,m]}}}function hp(c,o,m){const f=c.memories[o],d=f.filter(y=>y.label!==m);return d.length===f.length?c:{...c,memories:{...c.memories,[o]:d}}}function dp(c,o,m){return c.memories[o].some(f=>f.label===m)}function dg(c,o,m){var p;if((p=c.ritual)!=null&&p[o]||c.pending[o])return!1;const f=o==="left"?"right":"left",d=c.pending[f];if(d&&d.kind!=="choices")return!1;const y=Zu(c,o,m);if(!y)return!1;if((y.chapter??0)>=5){const A=(d==null?void 0:d.kind)==="choices"?m.find(z=>z.id===d.beatId):c.ritual[f]&&y.chapter===c.chapter[o]?Zu(c,f,m):null;if(A&&Tr(A,y)<0)return!1}return!0}function mp(c,o){var f;for(const d of["left","right"]){const y=c.pending[d];if(y&&y.kind!=="choices")return null}const m=[];for(const d of["left","right"]){if((f=c.ritual)!=null&&f[d]||c.pending[d]||!dg(c,d,o))continue;const y=Zu(c,d,o);y&&m.push({channel:d,beat:y})}return m.length===0?null:(m.sort((d,y)=>Tr(d.beat,y.beat)),{type:"arm",channel:m[0].channel})}function mg(c,o){return c.messages.some(m=>m.channel===o)?{...c,messages:c.messages.filter(m=>m.channel!==o)}:c}function yp(c,o,m){var d;const f=(d=c.ritual)==null?void 0:d[o];if(!f||m<f.until)return c;if(f.phase==="mask"){const y=mg(c,o);return{...y,chapter:{...y.chapter,[o]:f.to},ritual:{...y.ritual,[o]:{...f,phase:"pause",until:m+op}}}}return{...c,ritual:{...c.ritual,[o]:null}}}function gp(c,o){const m=new Set(c.completed);for(const f of o)if(!m.has(f.id)&&c.activated.includes(f.id)&&Sr(f,m)==="closed")return Yv(f,m);return null}function vp(c,o){const m=new Set([...c.activated,...c.completed]),f=o.filter(d=>!m.has(d.id)&&(Ho(d,o)||pp(d,c,o))).map(d=>d.id);return f.length===0?c:{...c,activated:[...c.activated,...f]}}function pp(c,o,m){return m.some(f=>f.next===c.id&&o.completed.includes(f.id))}function Ap(c,o){return c.messages.filter(m=>m.channel===o)}function Zu(c,o,m){const f=new Set(c.completed);let d=null;for(const y of m){if(y.channel!==o||f.has(y.id)||!c.activated.includes(y.id)||yg(y,c.flags)!=="ok"||(y.requires??[]).some(A=>!f.has(A)))continue;const p=Sr(y,f);p==="waiting"||p==="closed"||(!d||Tr(y,d)<0)&&(d=y)}return d}function Ep(c,o,m){var x;const f=Zu(c,o,m),d=[],y=new Set(c.completed);for(const T of m){if(T.channel!==o||y.has(T.id)||!c.activated.includes(T.id))continue;const v=yg(T,c.flags);if(v==="no")continue;const E=(T.requires??[]).filter(Nn=>!y.has(Nn)),I=Sr(T,y);if(v==="wait"||I==="waiting"){d.push({id:T.id,unmet:E.length>0?E:Object.keys(T.when??{})});continue}if(I==="closed"){d.push({id:T.id,unmet:[`区间已关闭：${((x=T.window)==null?void 0:x.上界.join("/"))??""}`]});continue}E.length>0&&d.push({id:T.id,unmet:E})}const p=m.some(T=>T.channel===o),A=c.endings.find(T=>m.some(v=>v.ending===T&&v.channel===o&&y.has(v.id)))??null;return{mode:p?f?"available":d.length>0?"gated":"ended":"empty",availableId:(f==null?void 0:f.id)??null,locked:d,endingId:A}}function Tp(c,o){const m=new Map;for(const d of o)d.ending&&m.set(d.ending,[...m.get(d.ending)??[],d.id]);const f=new Set(c.completed);return[...m.entries()].filter(([,d])=>d.length>0&&d.every(y=>f.has(y))).map(([d])=>d)}function Sp(c,o,m,f=Date.now()){if(!dg(c,o,m))return c;const d=Zu(c,o,m);if(!d)return c;const y=d.chapter??c.chapter[o];return y!==c.chapter[o]?{...c,ritual:{...c.ritual,[o]:{from:c.chapter[o],to:y,phase:"mask",until:f+fp}}}:d.lines.length===0&&d.choices&&d.choices.length>0?Qu(c,o,{kind:"choices",beatId:d.id}):d.control?wo(c,o,d,c.messages,void 0,d.next,m):Qu(c,o,{kind:"lines",beatId:d.id,lineIndex:0})}function xp(c,o,m){const f=c.pending[o];if(!f||f.kind!=="lines")throw new Error(`${Xi(o)}没有正在播出的台词`);const d=Bo(m,f.beatId),y=d.lines[f.lineIndex];if(!y)throw new Error(`节拍 ${d.id} 没有第 ${f.lineIndex+1} 句`);const p=[...c.messages,{id:`${d.id}:${f.lineIndex}`,channel:o,beatId:d.id,from:y.from,text:y.text,delivery:y.delivery,caption:y.caption,timing:y.timing}],A=f.lineIndex+1;return A<d.lines.length?{...Qu(c,o,{kind:"lines",beatId:d.id,lineIndex:A}),messages:p}:d.choices&&d.choices.length>0?{...Qu(c,o,{kind:"choices",beatId:d.id}),messages:p}:wo(c,o,d,p,void 0,d.next,m)}function bp(c,o,m,f){var A;const d=c.pending[o];if(!d||d.kind!=="choices")throw new Error(`${Xi(o)}还不能选：这一侧的话还没说完`);const y=Bo(f,d.beatId),p=(A=y.choices)==null?void 0:A[m];if(!p)throw new Error(`节拍 ${y.id} 没有第 ${m+1} 个选项`);if(p.需记忆&&!dp(c,o,p.需记忆))throw new Error(`节拍 ${y.id} 的选项「${p.thought}」需要记忆「${p.需记忆}」，本窗还没存`);return Qu(c,o,{kind:"reply",beatId:y.id,choiceIndex:m})}function Np(c,o,m){var A;const f=c.pending[o];if(!f||f.kind!=="reply")throw new Error(`${Xi(o)}没有待发出的回复`);const d=Bo(m,f.beatId),y=(A=d.choices)==null?void 0:A[f.choiceIndex];if(!y)throw new Error(`节拍 ${d.id} 没有第 ${f.choiceIndex+1} 个选项`);const p=[...c.messages,{id:`${d.id}:reply:${f.choiceIndex}`,channel:o,beatId:d.id,from:"ai",text:y.reply,delivery:"type",timing:y.timing}];return wo(c,o,d,p,y.set,y.next,m)}function wo(c,o,m,f,d,y,p){if(c.completed.includes(m.id))return c;const A={...c.flags};if(d)for(const[E,I]of Object.entries(d))A[E]=I;const z=Mp(c.memories,m.清空记忆),x=y&&!c.activated.includes(y)?[...c.activated,y]:c.activated,T=[...c.completed,m.id],v={...c,messages:f,flags:A,memories:z,activated:x,completed:T,pending:{...c.pending,[o]:null}};return{...v,endings:Tp(v,p)}}function Mp(c,o){return o?o==="all"?{left:[],right:[]}:{...c,[o]:[]}:c}function Qu(c,o,m){return{...c,pending:{...c.pending,[o]:m}}}function yg(c,o){if(!c.when)return"ok";for(const[m,f]of Object.entries(c.when)){if(!(m in o))return"wait";if(o[m]!==f)return"no"}return"ok"}function Bo(c,o){const m=c.find(f=>f.id===o);if(!m)throw new Error(`找不到节拍 ${o}`);return m}function Op({size:c=16,className:o}){return J.jsxs("svg",{className:o,width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[J.jsx("path",{d:"M12 19V5"}),J.jsx("path",{d:"m5 12 7-7 7 7"})]})}function Cp({size:c=16,className:o}){return J.jsxs("svg",{className:o,width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round","aria-hidden":"true",children:[J.jsx("path",{d:"M18 6 6 18"}),J.jsx("path",{d:"m6 6 12 12"})]})}function zp({size:c=14,className:o}){return J.jsx("svg",{className:o,width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:J.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})})}function Dp({mode:c,choices:o,gateFor:m,tagFor:f,onPick:d}){const y=c==="active",p=y?"点选一个想法":c==="locked"?"AI 正在输出":"暂无可选想法";return J.jsxs("div",{className:`input-card ${y?"":"locked"}`,"data-testid":"composer","data-mode":c,children:[y&&o.length>0?J.jsx("div",{className:"chips",role:"group","aria-label":"选一个想法",children:o.map((A,z)=>{const x=(m==null?void 0:m(z))??null,T=x===null?(f==null?void 0:f(z))??null:null;return J.jsxs("button",{type:"button","data-testid":"choice","data-gated":x===null?void 0:"true",disabled:x!==null,title:x??void 0,onClick:()=>d(z),className:"chip",children:[A.thought,T!==null?J.jsx("span",{className:"memory-tag","data-testid":"memory-tag",children:"记忆可用"}):null]},`${z}-${A.thought}`)})}):null,J.jsxs("div",{className:"card-bottom",children:[J.jsx("span",{className:"card-hint",children:p}),J.jsx("button",{type:"button",className:`send ${y?"":"off"}`,disabled:!y,"aria-label":"发送",tabIndex:-1,children:J.jsx(Op,{size:15})})]})]})}function qy({from:c,text:o,delivery:m,caption:f,animate:d=!1,typeIntervalMs:y=100,marks:p,onSaveMark:A,onFinished:z,onProgress:x,onSkip:T}){const v=d&&m==="type",[E,I]=Hn.useState(()=>v?Math.min(1,o.length):o.length),Nn=Hn.useRef(!1),hn=Hn.useRef(z),gn=Hn.useRef(x);hn.current=z,gn.current=x;const Gn=c==="ai";if(Hn.useEffect(()=>{var Bn;if(!v)return;if(E>=o.length){Nn.current||(Nn.current=!0,(Bn=hn.current)==null||Bn.call(hn));return}const Tn=window.setTimeout(()=>{var qn;I(ln=>ln+1),(qn=gn.current)==null||qn.call(gn)},Math.max(0,y));return()=>window.clearTimeout(Tn)},[E,o,v,y]),m==="thought")return null;const Rn=v?o.slice(0,E):o,kn=Tn=>{if(!p||p.length===0)return Tn;const Bn=p.map(rn=>({mark:rn,at:Tn.indexOf(rn.text)})).filter(rn=>rn.at>=0).sort((rn,mn)=>rn.at-mn.at);if(Bn.length===0)return Tn;const qn=[];let ln=0;for(const{mark:rn,at:mn}of Bn)mn<ln||(mn>ln&&qn.push(Tn.slice(ln,mn)),qn.push(J.jsx("span",{"data-testid":"memory-mark","data-saved":rn.saved,role:rn.saved?void 0:"button",tabIndex:rn.saved?-1:0,className:rn.saved?"memory-mark memory-mark-saved":"memory-mark",onClick:rn.saved||!A?void 0:()=>A(rn.text),children:rn.text},`${mn}-${rn.text}`)),ln=mn+rn.text.length);return ln<Tn.length&&qn.push(Tn.slice(ln)),qn};return m==="image"?J.jsx("div",{className:`msg-row ${Gn?"right":"left"}`,"data-from":c,"data-delivery":m,children:J.jsxs("figure",{className:"msg-image",children:[J.jsx("img",{src:o,alt:f??"图片"}),f?J.jsx("figcaption",{children:f}):null]})}):J.jsx("div",{className:`msg-row ${Gn?"right":"left"}`,"data-from":c,"data-delivery":m,children:J.jsxs("div",{className:Gn?"msg-ai":"msg-user","data-testid":"bubble-text",onClick:v?T:void 0,title:v?"点击跳过":void 0,children:[kn(Rn),v&&E<o.length?J.jsx("span",{className:"caret","aria-hidden":"true"}):null]})})}function Zy({script:c,channel:o,state:m,dispatch:f}){var Qe,Ae,Xn;const d=c.speakers.find(X=>X.channel===o),y=(d==null?void 0:d.name)??(o==="left"?"男生":"女生"),p=m.pending[o],A=Ap(m,o),z=A.filter(X=>X.delivery!=="thought"),x=[...A].reverse().find(X=>X.delivery==="thought"),T=Ep(m,o,c.beats),v=m.ritual[o],E=X=>{var vn;return((vn=c.beatById)==null?void 0:vn.get(X))??c.beats.find(ne=>ne.id===X)},I=new Set(m.memories[o].map(X=>X.label)),Nn=(X,vn)=>{var Fn;return(((Fn=E(X))==null?void 0:Fn.记忆候选)??[]).filter(Ue=>vn.includes(Ue.短句)).map(Ue=>({text:Ue.短句,saved:I.has(Ue.缩略标签)}))},hn=new Set;for(const X of A)for(const vn of((Qe=E(X.beatId))==null?void 0:Qe.记忆候选)??[])X.text.includes(vn.短句)&&hn.add(vn.缩略标签);const gn=hn.size,Gn=m.memories[o].length,Rn=zo(m,o),[kn,Tn]=Hn.useState(!1),[Bn,qn]=Hn.useState(null),[ln,rn]=Hn.useState("idle"),mn=Rp(c,m,o),ye=(mn==null?void 0:mn.token)??"",ie=Hn.useRef(()=>{}),re=Hn.useRef(m),Ne=Hn.useRef(null),Qn=Hn.useRef([]),Pn=Hn.useRef(0),w=Hn.useRef(null);re.current=m;const an=Hn.useCallback(()=>{for(const X of Qn.current)window.clearTimeout(X);Qn.current=[]},[]),en=Hn.useCallback((X,vn)=>{if(vn<=0){X();return}Qn.current.push(window.setTimeout(X,vn))},[]),_n=Hn.useCallback(()=>{an();const X=re.current.pending[o];if(!X||X.kind==="choices")return;const vn=`${re.current.runId}|${X.beatId}:${X.kind}:${"lineIndex"in X?X.lineIndex:"choiceIndex"in X?X.choiceIndex:0}`;Ne.current!==vn&&(Ne.current=vn,f(X.kind==="lines"?{type:"commit-line",channel:o}:{type:"commit-reply",channel:o}))},[o,an,f]);ie.current=_n;const On=Hn.useCallback(()=>{en(()=>ie.current(),Pn.current)},[en]),ge=Hn.useCallback(()=>ie.current(),[]);Hn.useEffect(()=>{if(an(),!mn)return rn("idle"),an;const X=window.matchMedia("(prefers-reduced-motion: reduce)").matches,vn=X?{...cg}:mn.timing;return Pn.current=vn.afterMs,rn("pause"),en(()=>{rn("indicator"),en(()=>{Rv(mn.delivery,X)?rn("typing"):(rn("shown"),en(()=>ie.current(),vn.afterMs))},vn.indicatorMs)},vn.pauseBeforeMs),an},[ye,an,en,mn==null?void 0:mn.delivery]),Hn.useEffect(()=>{const X=w.current;X&&(X.scrollTop=X.scrollHeight)},[z.length,ln,ye]);const wn=p?E(p.beatId):void 0,Me=(p==null?void 0:p.kind)==="choices"&&(wn==null?void 0:wn.choices)&&wn.choices.length>0,b=Me?"active":(p==null?void 0:p.kind)==="lines"||(p==null?void 0:p.kind)==="reply"||T.mode==="gated"||v?"locked":"empty",q=(mn==null?void 0:mn.delivery)==="thought"&&ln!=="idle"&&ln!=="pause"?mn:null,$=((Ae=q??x)==null?void 0:Ae.timing)??qu([]),un=Math.max(1,Math.round(($.pauseBeforeMs+$.indicatorMs+$.afterMs)/1e3)),An=(wn==null?void 0:wn.time)??(wn==null?void 0:wn.label)??null,Sn=X=>{var vn,ne,Fn;return(Fn=(ne=(vn=E(X))==null?void 0:vn.time)==null?void 0:ne.match(/^交往第\d+天 周./))==null?void 0:Fn[0]},cn=z.at(-1),W=cn?Sn(cn.beatId):void 0,fn=p&&Sn(p.beatId);Hn.useEffect(()=>{Tn(!1),qn(null)},[m.runId,m.chapter[o]]);function He(X){Gn>=(Rn??1/0)?(qn(X),Tn(!0)):f({type:"save-memory",channel:o,...X})}function at(){qn(null),Tn(!1)}return J.jsxs("section",{className:"pane","data-testid":`pane-${o}`,"aria-label":y,children:[J.jsxs("header",{className:"pane-head",children:[J.jsx("img",{className:"pane-avatar",src:o==="left"?rp:cp,alt:""}),J.jsx("span",{className:"pane-name",children:y}),J.jsxs("div",{className:"pane-head-right",children:[An?J.jsx("span",{className:"pane-meta","data-testid":`time-${o}`,children:An}):null,J.jsxs("button",{type:"button",className:"memory-entry","data-testid":`memory-counter-${o}`,onClick:()=>Tn(!0),"aria-label":`已存 ${Gn} 条记忆`,children:[J.jsx(zp,{size:13})," ",Gn,"/",Rn??Math.max(gn,Gn)]})]})]}),J.jsxs("div",{ref:w,className:"messages",role:"log","aria-label":`${y}的对话`,children:[z.map((X,vn)=>{const ne=Sn(X.beatId),Fn=z[vn-1];return J.jsxs(Hn.Fragment,{children:[ne&&ne!==(Fn&&Sn(Fn.beatId))?J.jsx("div",{className:"chat-date",children:ne}):null,J.jsx(qy,{from:X.from,text:X.text,delivery:X.delivery,caption:X.caption,marks:Nn(X.beatId,X.text),onSaveMark:Ue=>{var Ee;const Fe=(((Ee=E(X.beatId))==null?void 0:Ee.记忆候选)??[]).find(Ut=>Ut.短句===Ue);Fe&&He({label:Fe.缩略标签,text:Fe.短句,beatId:X.beatId})}})]},X.id)}),mn&&mn.delivery!=="thought"&&ln!=="idle"&&fn&&fn!==W?J.jsx("div",{className:"chat-date",children:fn}):null,ln==="indicator"&&mn&&mn.delivery!=="thought"?J.jsx("div",{className:`msg-row ${mn.from==="ai"?"right":"left"}`,children:J.jsxs("button",{type:"button",className:"typing","data-testid":"skip",onClick:ge,"aria-label":"正在输入，点击跳过",children:[J.jsxs("span",{className:"typing-dots","aria-hidden":"true",children:[J.jsx("i",{}),J.jsx("i",{}),J.jsx("i",{})]}),"正在输入"]})}):null,(ln==="typing"||ln==="shown")&&mn&&mn.delivery!=="thought"?J.jsx(qy,{from:mn.from,text:mn.text,delivery:mn.delivery,caption:mn.caption,animate:ln==="typing",typeIntervalMs:mn.timing.typeIntervalMs,onFinished:ln==="typing"?On:void 0,onProgress:()=>{const X=w.current;X&&(X.scrollTop=X.scrollHeight)},onSkip:ge},mn.token):null]}),J.jsxs("div",{className:"composer",children:[x||q?J.jsxs("div",{className:"think-block","data-testid":`think-${o}`,children:[J.jsxs("div",{className:"think-block-head",children:["已思考 ",un," 秒"]}),q&&ln==="indicator"?J.jsxs("button",{type:"button",className:"typing","data-testid":"skip",onClick:ge,"aria-label":"正在思考，点击跳过",children:[J.jsxs("span",{className:"typing-dots","aria-hidden":"true",children:[J.jsx("i",{}),J.jsx("i",{}),J.jsx("i",{})]}),"正在输入"]}):(Xn=q??x)==null?void 0:Xn.text]}):null,J.jsx(Dp,{mode:b,choices:Me?(wn==null?void 0:wn.choices)??[]:[],gateFor:X=>{var ne,Fn;const vn=(Fn=(ne=wn==null?void 0:wn.choices)==null?void 0:ne[X])==null?void 0:Fn.需记忆;return vn&&!I.has(vn)?vn:null},tagFor:X=>{var ne,Fn;const vn=(Fn=(ne=wn==null?void 0:wn.choices)==null?void 0:ne[X])==null?void 0:Fn.需记忆;return vn&&I.has(vn)?vn:null},onPick:X=>f({type:"choose",channel:o,index:X})})]}),v?J.jsx("div",{className:"ritual-mask","data-testid":`resetting-${o}`,role:"status",children:J.jsxs("span",{className:"typing",children:[J.jsxs("span",{className:"typing-dots","aria-hidden":"true",children:[J.jsx("i",{}),J.jsx("i",{}),J.jsx("i",{})]}),"上下文重置中"]})}):null,kn?J.jsx("div",{className:"memory-dialog",role:"dialog","aria-label":"记忆",children:J.jsxs("div",{className:"memory-card",children:[J.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[J.jsxs("h3",{children:[y,"窗的记忆"]}),J.jsx("button",{type:"button",className:"memory-entry","data-testid":`memory-close-${o}`,onClick:at,"aria-label":"关闭",children:J.jsx(Cp,{size:15})})]}),Bn?J.jsxs("p",{className:"memory-prompt",children:["记忆已满。选择一条替换为「",Bn.label,"」。"]}):null,m.memories[o].length===0?J.jsx("p",{className:"memory-empty","data-testid":`memory-empty-${o}`,children:"还没存下任何记忆。"}):J.jsx("ul",{className:"memory-list",children:m.memories[o].map(X=>J.jsxs("li",{"data-testid":"memory-entry",children:[J.jsx("b",{children:X.label}),J.jsxs("span",{children:["「",X.text,"」"]}),Rn!==void 0?J.jsx("button",{type:"button",className:"memory-entry memory-action","aria-label":Bn?`替换「${X.label}」`:`舍弃「${X.label}」`,onClick:()=>{Bn?(f({type:"save-memory",channel:o,...Bn,replaceLabel:X.label}),at()):f({type:"forget-memory",channel:o,label:X.label})},children:Bn?"替换":"舍弃"}):null]},X.label))})]})}):null]})}function Rp(c,o,m){var p,A;const f=o.pending[m];if(!f||f.kind==="choices")return null;const d=((p=c.beatById)==null?void 0:p.get(f.beatId))??c.beats.find(z=>z.id===f.beatId);if(!d)return null;if(f.kind==="lines"){const z=d.lines[f.lineIndex];return z?{token:`${o.runId}|${d.id}:line:${f.lineIndex}`,from:z.from,text:z.text,delivery:z.delivery,caption:z.caption,timing:z.timing??qu([])}:null}const y=(A=d.choices)==null?void 0:A[f.choiceIndex];return y?{token:`${o.runId}|${d.id}:reply:${f.choiceIndex}`,from:"ai",text:y.reply,delivery:"type",timing:y.timing??qu([])}:null}const Uo="shuangxian.progress.v2",gg="shuangxian.progress.v1";let Vi=null;function jp(){const c=Vi;return Vi=null,c}function Yp(c){try{localStorage.setItem(Uo,JSON.stringify({version:2,state:c}))}catch(o){console.error("[存档] 写入失败",o)}}function Gu(){try{localStorage.removeItem(Uo),localStorage.removeItem(gg)}catch(c){console.error("[存档] 清除失败",c)}}function Hp(c){try{const o=localStorage.getItem(Uo);if(!o)return localStorage.getItem(gg)&&(Vi="剧本已更新到第五章定稿，旧进度无法继续，已从第一幕重新开始。",Gu()),null;const m=JSON.parse(o);if(!xt(m)||m.version!==2||!xt(m.state))return Vi="存档格式已升级，已从第一幕重新开始。",Gu(),null;const f=m.state;if(!wp(f,c))return Vi="剧本已更新，旧进度里的节拍已不存在，已从第一幕重新开始。",Gu(),null;const d=[...f.activated];for(const y of c)!Ho(y,c)||f.completed.includes(y.id)||d.includes(y.id)||d.push(y.id);return{...f,activated:d,pending:{left:f.pending.left??null,right:f.pending.right??null},memories:_p(f.memories,c),chapter:Bp(f.chapter,c),ritual:Up(f.ritual),endings:Array.isArray(f.endings)?f.endings.filter(y=>typeof y=="string"):[],error:typeof f.error=="string"?f.error:null,runId:typeof f.runId=="number"?f.runId:0}}catch(o){return console.error("[存档] 读取失败",o),Vi="存档读取失败，已从第一幕重新开始。",Gu(),null}}function wp(c,o){const m=new Set(o.map(f=>f.id));if(!Array.isArray(c.completed)||!c.completed.every(f=>m.has(f))||!Array.isArray(c.activated)||!c.activated.every(f=>m.has(f))||!Array.isArray(c.messages)||!xt(c.flags)||!xt(c.pending))return!1;for(const f of c.messages)if(!xt(f)||f.channel!=="left"&&f.channel!=="right"||typeof f.text!="string"||typeof f.id!="string"||f.delivery!=="type"&&f.delivery!=="pop"&&f.delivery!=="image"&&f.delivery!=="thought")return!1;for(const f of["left","right"]){const d=c.pending[f];if(d!=null&&(!xt(d)||d.kind!=="lines"&&d.kind!=="choices"&&d.kind!=="reply"||typeof d.beatId!="string"||!m.has(d.beatId)))return!1}return!0}function Bp(c,o){const m=y=>{const p=o.filter(A=>A.channel===y).map(A=>A.chapter??1);return p.length>0?Math.min(...p):1};if(!xt(c))return{left:m("left"),right:m("right")};const f=typeof c.left=="number"?c.left:m("left"),d=typeof c.right=="number"?c.right:m("right");return{left:f,right:d}}function Up(c){const o={left:null,right:null};if(!xt(c))return o;for(const m of["left","right"]){const f=c[m];xt(f)&&(f.phase!=="mask"&&f.phase!=="pause"||typeof f.until!="number"||typeof f.from!="number"||typeof f.to!="number"||(o[m]={from:f.from,to:f.to,phase:f.phase,until:f.until}))}return o}function xt(c){return typeof c=="object"&&c!==null}function _p(c,o){const m={left:[],right:[]};if(!xt(c))return m;const f=y=>Array.isArray(y)&&y.every(p=>xt(p)&&typeof p.label=="string")?y.map(p=>p):[],d=(y,p)=>f(y).filter(A=>{var x;const z=o.find(T=>T.id===A.beatId&&T.channel===p);return(z==null?void 0:z.chapter)!==5?!0:(x=z.记忆候选)==null?void 0:x.some(T=>T.缩略标签===A.label)});return{left:d(c.left,"left"),right:d(c.right,"right")}}function Lp(c){const o=m=>{const f=gp(m,c);return f===m.error?m:{...m,error:f}};return(m,f)=>{var d;try{switch(f.type){case"reset":return{...hg(c),runId:m.runId+1};case"sync-roots":return o(vp(m,c));case"arm":return o(Sp(m,f.channel,c,f.now??Date.now()));case"commit-line":return o(xp(m,f.channel,c));case"choose":return o(bp(m,f.channel,f.index,c));case"commit-reply":return o(Np(m,f.channel,c));case"save-memory":{const y=c.find(A=>A.id===f.beatId&&A.channel===f.channel);return!((d=y==null?void 0:y.记忆候选)==null?void 0:d.find(A=>A.缩略标签===f.label&&A.短句===f.text))||!m.messages.some(A=>A.channel===f.channel&&A.beatId===f.beatId&&A.text.includes(f.text))?m:o(sp(m,f.channel,{label:f.label,text:f.text,beatId:f.beatId},f.replaceLabel))}case"forget-memory":return o(hp(m,f.channel,f.label));case"clear-messages":return o(mg(m,f.channel));case"ritual-tick":return o(yp(m,f.channel,f.now));case"clear-error":return{...m,error:null};default:return m}}catch(y){const p=y instanceof Error?y.message:"引擎状态更新失败";return console.error("[引擎]",p),{...m,error:p}}}}function Gp(c){const o=c.beats,m=Hn.useMemo(()=>Lp(o),[o]),[f,d]=Hn.useReducer(m,o,p=>Hp(p)??hg(p)),[y]=Hn.useState(()=>jp());return Hn.useEffect(()=>{Yp(f)},[f]),Hn.useEffect(()=>{f.error&&console.error(f.error)},[f.error]),Hn.useEffect(()=>{const p=Date.now(),A=["left","right"].filter(v=>{const E=f.ritual[v];return E!==null&&E.until<=p});if(A.length>0){for(const v of A)d({type:"ritual-tick",channel:v,now:p});return}const z=["left","right"].map(v=>{var E;return(E=f.ritual[v])==null?void 0:E.until}).filter(v=>v!==void 0);if(z.length===0)return;const x=Math.min(...z),T=window.setTimeout(()=>{const v=Date.now();for(const E of["left","right"])f.ritual[E]&&f.ritual[E].until<=v&&d({type:"ritual-tick",channel:E,now:v})},Math.max(0,x-p));return()=>window.clearTimeout(T)},[f.ritual]),Hn.useEffect(()=>{const p=mp(f,o);p&&d({type:"arm",channel:p.channel})},[f,o]),{state:f,dispatch:d,notice:y}}const vg=1440,pg=920,qp={1:"一",3:"三",4:"四",5:"五",6:"六",7:"七"};function Qy(){const c=window.innerWidth-48,o=window.innerHeight-48;return Math.max(.3,Math.min(1,c/vg,o/pg))}function Zp({script:c}){const{state:o,dispatch:m,notice:f}=Gp(c),[d,y]=Hn.useState(Qy),[p,A]=Hn.useState(!1);Hn.useEffect(()=>{const v=()=>y(Qy());return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);const z=Math.max(o.chapter.left,o.chapter.right),x=qp[z]??String(z);function T(){Gu(),m({type:"reset"}),A(!1)}return J.jsxs("div",{className:"stage",children:[J.jsx("div",{className:"stage-frame",style:{width:vg*d,height:pg*d},children:J.jsxs("div",{className:"game-canvas",style:{transform:`scale(${d})`,opacity:p?.35:1},"data-testid":"game-canvas",children:[J.jsxs("header",{className:"topbar",children:[J.jsxs("span",{className:"topbar-title","data-testid":"chapter-title",children:["He said, she said · 第",x,"幕"]}),J.jsx("span",{className:"topbar-tag",children:"助手 · 双会话"}),J.jsxs("span",{className:"topbar-build","data-testid":"build-version",children:["v","0.5.0"," · ","9376d80"]}),J.jsx("div",{className:"topbar-actions",children:J.jsx("button",{type:"button",className:"topbar-act","data-testid":"restart",onClick:()=>A(!0),children:"重新开始"})})]}),f?J.jsx("div",{className:"notice",role:"status",children:f}):null,o.endings.includes("第七幕完成")?J.jsx("div",{className:"notice",role:"status",children:"第七幕完成"}):null,J.jsxs("div",{className:"duo",children:[J.jsx(Zy,{script:c,channel:"left",state:o,dispatch:m}),J.jsx(Zy,{script:c,channel:"right",state:o,dispatch:m})]})]})}),p?J.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":"确定重来",children:J.jsxs("div",{className:"dialog",children:[J.jsx("h2",{children:"确定重来？"}),J.jsx("p",{children:"当前两条线的进度都会清空，回到第一幕开头。"}),J.jsxs("div",{className:"dialog-actions",children:[J.jsx("button",{type:"button",className:"btn ghost",onClick:()=>A(!1),children:"取消"}),J.jsx("button",{type:"button",className:"btn danger","data-testid":"restart-confirm",onClick:T,children:"确定重来"})]})]})}):null]})}function Qp(){const c=Hn.useMemo(()=>Jv(),[]);return Hn.useEffect(()=>{c.error&&console.error(c.error)},[c]),c.script?J.jsx(Zp,{script:c.script}):J.jsx("main",{className:"stage",children:J.jsxs("div",{className:"dialog",style:{width:560},children:[J.jsx("h2",{children:"这份剧本还过不了检查"}),J.jsx("p",{children:"引擎按字段契约逐项校验，下面是要修的地方："}),J.jsx("pre",{className:"script-error",style:{maxHeight:420,whiteSpace:"pre-wrap",borderRadius:12},"data-testid":"script-error",children:c.error})]})})}vv.createRoot(document.getElementById("root")).render(J.jsx(Hn.StrictMode,{children:J.jsx(Qp,{})}));
