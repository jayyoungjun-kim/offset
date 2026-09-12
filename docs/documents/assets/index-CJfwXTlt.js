var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function D(e){return{current:e}}function O(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function k(e,t){pe++,fe[pe]=e.current,e.current=t}var me=D(null),he=D(null),ge=D(null),_e=D(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=de)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=_i(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return Si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=_i(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=_i(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(i(519));function Ki(e){throw Qi(Di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=D(null),ea=null,ta=null;function na(e,t,n){k($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,O($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ia(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(i(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=D(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?k(Ta,Ta.current):k(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(i(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Fa(i)===t.type)?(t=a(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case w:return t=Fa(t),f(e,t,n)}if(ue(t)||se(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Fa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),j&&Li(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),j&&Li(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Fa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Fa(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===S)return b(e,r,ua(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=D(null),oo=D(0);function so(e,t){e=Gl,k(oo,e),k(ao,t),Gl=e|t.baseLanes}function co(){k(oo,Gl),k(ao,ao.current)}function lo(){Gl=oo.current,O(ao),O(oo)}var uo=D(null),fo=null;function po(e){var t=e.alternate;k(N,N.current&1),k(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){k(N,N.current),k(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(k(N,N.current),k(uo,e),fo===null&&(fo=e)):go(e)}function go(){k(N,N.current),k(uo,uo.current)}function _o(e){O(uo),fo===e&&(fo=null),O(N)}var N=D(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){T.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(i(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Ks,o=t(n,r)}while(xo);return o}function jo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(z=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=P,a=R(),o=j;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,z=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,zs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,de,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Fo();if(j){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,a,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(i(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Di(r,n),a=rc(e.stateNode,r,a),$a(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gi&&(e=Error(i(422),{cause:r}),Qi(Di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Di(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),$a(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(z||oa(e,t,n,!1),a=(n&e.childLanes)!==0,z||a){if(r=G,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),sc;Du(),t=gc(e,t,n)}else e=o.treeContext,A=cf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(a?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(go(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=Si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=Si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),s=(n&e.childLanes)!==0,z||s){if(s=G,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(go(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,a,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Oa():(l=M._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,na(t,M,r),r!==o.cache&&aa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=Di(Error(i(424)),t),Qi(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Hi=t,Wi=!0,a=A,Zd(t.type)?(lf=a,A=cf(r.firstChild)):A=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((a=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?a=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,a=!0)),a||Ki(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Oo(e,t,jo,null,null,n),Qf._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ca(t),a=la(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(a=Ea(),a===null&&(a=G,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ja(t),na(t,M,a)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=me.current,Yi(t)?qi(t,e):(e=ff(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=me.current,Yi(t))qi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Hi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(O(N),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return k(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return B(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=N.current,k(N,a?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(N),null;case 4:return ye(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&O(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:O(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&O(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||a,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Pe(),10<a)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,T.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=T.H;return T.H=Us,e===null?Us:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Pe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Na(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,T.H=r,T.A=a,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Me();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,ot(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,E.p=a,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Pe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Yr:case Xr:case Zr:l=Bn;break;case ti:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends y{};function b(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function x(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function ee(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function S(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function C(e,t){return ee(e,t,``)}function te(e,t){return S(e,t,``)}function ne(e,t){return t.slice(0,re(e,t))}function re(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function w(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function ie(e,t){if(t)return oe(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function ae(e,t){if(t)return oe(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function oe(e,t){if(!t)return[ae(e),ie(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=w(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var se=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,ce=RegExp(`[${se}]+|\\s+|[^${se}]`,`ug`);new class extends y{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=w(e,r)}else n=e.match(ce)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&le(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&le(n,i,r,null,t.intlSegmenter),e}};function le(e,t,n,r,i){if(t&&n){let[a,o]=oe(t.value,i),[s,c]=oe(n.value,i);if(e){let r=b(a,s);e.value=S(e.value,s,r),t.value=C(t.value,r),n.value=C(n.value,r)}if(r){let e=x(o,c);r.value=ee(r.value,c,e),t.value=te(t.value,e),n.value=te(n.value,e)}}else if(n){if(e){let e=ae(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=ae(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=ae(r.value,i),[a,o]=oe(t.value,i),s=b(n,a);t.value=C(t.value,s);let c=x(C(n,s),o);t.value=te(t.value,c),r.value=ee(r.value,n,c),e.value=S(e.value,n,n.slice(0,n.length-c.length))}else if(r){let e=ae(r.value,i),n=ne(ie(t.value,i),e);t.value=te(t.value,n)}else if(e){let n=ne(ie(e.value,i),ae(t.value,i));t.value=C(t.value,n)}}new class extends y{tokenize(e){let t=RegExp(`(\\r?\\n)|[${se}]+|[^\\S\\n\\r]+|[^${se}]`,`ug`);return e.match(t)||[]}};var ue=new class extends y{constructor(){super(...arguments),this.tokenize=E}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function T(e,t,n){return ue.diff(e,t,n)}function E(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function de(e){return e==`.`||e==`!`||e==`?`}new class extends y{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(de(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends y{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends y{constructor(){super(...arguments),this.tokenize=E}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(fe(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function fe(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=fe(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=fe(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends y{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};var pe=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),D=o(((e,t)=>{t.exports=pe()}))(),O=e=>new Intl.DateTimeFormat(`ko-KR`,{timeZone:`Asia/Seoul`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,hour12:!1}).format(new Date(e));function k({documents:e}){let[t,n]=(0,_.useState)(e[0].id),[r,i]=(0,_.useState)(0),[a,o]=(0,_.useState)(0),[s,c]=(0,_.useState)(`read`),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(``),p=e.find(e=>e.id===t)||e[0],m=p.revisions.find(e=>e.revision===r)||p.revisions[p.revisions.length-1],h=p.revisions.find(e=>e.revision===a&&e.revision<m.revision)||p.revisions.find(e=>e.revision===m.revision-1);(0,_.useEffect)(()=>{let t=()=>{let t=new URLSearchParams(window.location.search);n(e.find(e=>e.id===t.get(`doc`))?.id||e[0].id),i(Number(t.get(`revision`))||0),o(Number(t.get(`base`))||0),c(t.get(`view`)===`changes`?`changes`:t.get(`view`)===`source`?`source`:`read`)};return t(),window.addEventListener(`popstate`,t),()=>window.removeEventListener(`popstate`,t)},[e]);let g=(e,t=0,r=`read`,a=0)=>{n(e),i(t),c(r),o(a),f(``);let s=new URLSearchParams({doc:e});t&&s.set(`revision`,String(t)),r!==`read`&&s.set(`view`,r),a&&s.set(`base`,String(a)),window.history.pushState(null,``,`/documents?${s}`)},v=e.filter(e=>`${e.title} ${e.description} ${e.revisions.at(-1)?.markdown}`.toLowerCase().includes(l.trim().toLowerCase())),y=(0,_.useMemo)(()=>T(h?.markdown||``,m.markdown),[h,m]),b=y.filter(e=>e.added).reduce((e,t)=>e+(t.count||0),0),x=y.filter(e=>e.removed).reduce((e,t)=>e+(t.count||0),0);async function ee(){try{let e=new URL(window.location.href);e.searchParams.set(`doc`,p.id),e.searchParams.set(`revision`,String(m.revision)),await navigator.clipboard.writeText(e.href),f(`이 버전의 링크를 복사했어요.`)}catch{f(`주소창의 링크를 복사해 주세요.`)}}function S(){let e=URL.createObjectURL(new Blob([m.markdown],{type:`text/markdown;charset=utf-8`})),t=document.createElement(`a`);t.href=e,t.download=`${p.id}-r${m.revision}.md`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}return(0,D.jsxs)(`div`,{className:`document-site`,children:[(0,D.jsx)(`a`,{className:`document-skip`,href:`#document-content`,children:`문서 본문으로 이동`}),(0,D.jsxs)(`header`,{className:`document-header`,children:[(0,D.jsxs)(`a`,{href:`/`,className:`document-brand`,children:[`OFFSET`,(0,D.jsx)(`span`,{children:` / `}),(0,D.jsx)(`span`,{children:`Documents`})]}),(0,D.jsx)(`span`,{className:`document-header-note`,children:`함께 만드는 OFFSET의 기록`})]}),(0,D.jsxs)(`div`,{className:`document-layout`,children:[(0,D.jsxs)(`aside`,{className:`document-sidebar`,"aria-label":`문서 목록`,children:[(0,D.jsxs)(`div`,{className:`document-side-title`,children:[`프로젝트 문서 `,(0,D.jsx)(`span`,{children:e.length})]}),(0,D.jsxs)(`label`,{className:`document-search`,children:[(0,D.jsx)(`span`,{children:`검색`}),(0,D.jsx)(`input`,{type:`search`,value:l,onChange:e=>u(e.target.value),placeholder:`제목과 본문 검색`})]}),(0,D.jsx)(`nav`,{children:v.map(e=>(0,D.jsxs)(`button`,{"aria-current":p.id===e.id?`page`:void 0,onClick:()=>g(e.id),children:[(0,D.jsx)(`span`,{children:e.category}),(0,D.jsx)(`strong`,{children:e.title}),(0,D.jsxs)(`small`,{children:[`r`,e.revisions.length,` · `,e.revisions.at(-1)?.recordedAt.slice(0,10).replaceAll(`-`,`.`)]})]},e.id))}),!v.length&&(0,D.jsx)(`p`,{className:`document-muted`,role:`status`,children:`검색 결과가 없어요.`}),(0,D.jsxs)(`div`,{className:`document-side-note`,children:[(0,D.jsx)(`strong`,{children:`기준을 정하고, 변화를 기록합니다.`}),(0,D.jsx)(`p`,{children:`기획부터 디자인까지 최신 문서와 이전 결정을 한곳에서 확인하세요.`})]})]}),(0,D.jsxs)(`main`,{id:`document-content`,className:`document-main`,children:[(0,D.jsxs)(`div`,{className:`document-eyebrow`,children:[`OFFSET RENEWAL `,(0,D.jsxs)(`span`,{children:[`/ `,p.category]})]}),(0,D.jsx)(`h1`,{children:p.title}),(0,D.jsx)(`p`,{className:`document-description`,children:p.description}),(0,D.jsxs)(`div`,{className:`document-meta`,children:[(0,D.jsx)(`span`,{className:`document-badge`,children:m.revision===p.revisions.length?`최신 버전`:`이전 버전`}),(0,D.jsxs)(`span`,{children:[`r`,m.revision]}),(0,D.jsxs)(`span`,{children:[O(m.recordedAt),` 기록 · KST`]})]}),(0,D.jsxs)(`div`,{className:`document-toolbar`,children:[(0,D.jsx)(`div`,{className:`document-tabs`,"aria-label":`문서 보기 방식`,children:[[`read`,`문서`],[`changes`,`변경사항`],[`source`,`원문`]].map(([e,t])=>(0,D.jsx)(`button`,{"aria-pressed":s===e,onClick:()=>g(p.id,r,e,a),children:t},e))}),(0,D.jsxs)(`div`,{className:`document-actions`,children:[(0,D.jsx)(`button`,{onClick:ee,children:`링크 복사`}),(0,D.jsx)(`button`,{onClick:S,children:`MD 다운로드 ↓`})]})]}),(0,D.jsx)(`div`,{className:`document-status`,role:`status`,children:d}),(0,D.jsxs)(`div`,{className:`document-version-row`,children:[(0,D.jsxs)(`label`,{children:[`버전 `,(0,D.jsx)(`select`,{value:m.revision,onChange:e=>g(p.id,Number(e.target.value),s),children:[...p.revisions].reverse().map(e=>(0,D.jsxs)(`option`,{value:e.revision,children:[`r`,e.revision,e.revision===p.revisions.length?` · 최신`:``,` · `,O(e.recordedAt)]},e.revision))})]}),(0,D.jsx)(`span`,{children:p.file})]}),s===`read`&&(0,D.jsx)(`article`,{className:`document-prose`,dangerouslySetInnerHTML:{__html:m.html}}),s===`source`&&(0,D.jsx)(`pre`,{className:`document-source`,children:m.markdown}),s===`changes`&&(0,D.jsx)(`section`,{"aria-label":`버전 변경 비교`,children:h?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`div`,{className:`document-compare`,children:[(0,D.jsxs)(`label`,{children:[`비교 기준 `,(0,D.jsx)(`select`,{value:h.revision,onChange:e=>g(p.id,m.revision,`changes`,Number(e.target.value)),children:p.revisions.filter(e=>e.revision<m.revision).map(e=>(0,D.jsxs)(`option`,{value:e.revision,children:[`r`,e.revision,` · `,O(e.recordedAt)]},e.revision))})]}),(0,D.jsxs)(`strong`,{children:[`→ r`,m.revision]}),(0,D.jsxs)(`span`,{className:`document-added`,children:[`+`,b,`줄 추가`]}),(0,D.jsxs)(`span`,{className:`document-removed`,children:[`−`,x,`줄 삭제`]})]}),(0,D.jsx)(`div`,{className:`document-diff`,children:y.map((e,t)=>e.added||e.removed?(0,D.jsx)(`pre`,{className:e.added?`document-added`:`document-removed`,children:e.value.replace(/\n$/,``).split(`
`).map((t,n)=>(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`b`,{"aria-label":e.added?`추가`:`삭제`,children:e.added?`+`:`−`}),t||` `,`
`]},n))},t):(0,D.jsxs)(`details`,{children:[(0,D.jsxs)(`summary`,{children:[`변경 없는 `,e.count,`줄 보기`]}),(0,D.jsx)(`pre`,{children:e.value})]},t))})]}):(0,D.jsxs)(`div`,{className:`document-empty`,children:[(0,D.jsx)(`span`,{children:`01`}),(0,D.jsx)(`h2`,{children:`첫 기준 버전이에요.`}),(0,D.jsxs)(`p`,{children:[`이전 원본이 없어 과거 변경사항은 표시하지 않아요.`,(0,D.jsx)(`br`,{}),`다음 수정부터 추가·삭제된 내용을 여기에서 비교할 수 있어요.`]})]})}),(0,D.jsx)(`footer`,{className:`document-footnote`,children:`r 버전은 문서 기록 순서입니다. 본문의 기획 버전(v0.x)과는 별도로 관리합니다.`})]}),(0,D.jsxs)(`aside`,{className:`document-outline`,"aria-label":`문서 목차와 이력`,children:[s===`read`&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`h2`,{children:`이 문서에서`}),(0,D.jsx)(`nav`,{children:m.toc.map(e=>(0,D.jsx)(`a`,{className:e.depth===3?`document-indent`:``,href:`#${e.id}`,children:e.label},e.id))})]}),(0,D.jsxs)(`details`,{className:`document-history`,open:!0,children:[(0,D.jsxs)(`summary`,{children:[`버전 기록 `,(0,D.jsx)(`span`,{children:p.revisions.length})]}),[...p.revisions].reverse().map(e=>(0,D.jsxs)(`button`,{onClick:()=>g(p.id,e.revision,`changes`),children:[(0,D.jsxs)(`strong`,{children:[`r`,e.revision,` `,e.revision===1?`기준 버전 등록`:`문서 수정`]}),(0,D.jsx)(`span`,{children:O(e.recordedAt)})]},e.revision))]})]})]})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,D.jsx)(k,{documents:{documents:[{id:`prd`,title:`제품 요구사항`,category:`기획`,description:`OFFSET의 방향, 서비스 구성과 MVP 범위`,file:`OFFSET-PRD-v0.1.md`,revisions:[{revision:1,hash:`f855ac4daee861489ff60ba45e0654e2e8f58885bff4ce7192b74fc2ce940b8a`,recordedAt:`2026-09-12T13:52:53.608Z`,markdown:`# OFFSET 리뉴얼 PRD v0.9

작성일: 2026-09-12. 상태: 논의용 초안. 사용자 발언으로 확인한 방향과 제안을 구분한다. 기존 구현의 기능·화면·기술 선택을 새 요구사항으로 자동 승계하지 않는다.

## 1. 확인된 방향

- OFFSET은 프로덕트 디자이너 대상 교육에서 출발하며, 기업 컨설팅까지 포함하는 브랜드 포지셔닝을 논의 중이다.
- 1인 운영과 적은 프로그램 수를 고려하여 별도 프로그램 목록 페이지 없이 홈에서 서비스 목록을 제공한다. 개별 서비스·모집 상세는 유지하는 안을 제안한다.
- 스타트업 컨설팅은 상시·1회성 서비스로 포함한다. 영역은 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여다. 각 영역의 구체적인 수행 범위는 미정이다.
- 경력 단계와 해결하려는 과제에 맞춘 교육으로 실력 향상을 극대화한다. 사용자가 제시한 서비스 구성은 1:1 코칭, 포트폴리오 코칭, 프로젝트 워크샵, 스타트업 컨설팅 네 가지다. 출시 시점별 실제 모집 여부는 별도 결정한다.
- OFFSET 브랜드를 앞세우고 운영자의 전문성으로 신뢰를 뒷받침하고자 한다. 개인을 드러내는 비중은 기업 컨설팅 추가와 함께 재검토 중이다.
- 방문자가 신뢰를 얻고 모집에 지원하여 실제 참여하는 것이 핵심 목표다.
- LinkedIn에 꾸준히 글을 게시하고 사이트에도 인사이트·실용 콘텐츠를 축적한다.
- 시리즈 후보는 ‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’이다. 장기적으로 콘텐츠를 엮어 이북으로 판매하고자 한다.
- 참여자 중심의 Discord 커뮤니티를 고려한다. 가입 자격과 운영 범위는 미정이다.

기업 채용 지원은 사용자 확인에 따라 지원자의 포트폴리오 검토와 면접관 참여를 의미한다. 개인 대상 1:1 코칭의 포트폴리오 피드백·가상 인터뷰와 구분한다.

## 2. 제품 정의 제안

개인 디자이너의 성장과 기업의 제품·디자인 조직 과제 해결을 돕는 교육·컨설팅 브랜드. 이 정의는 제안이며 사용자 확정 전이다.

브랜드 문구 초안: ‘디자이너의 성장부터, 팀과 제품의 다음 단계까지.’ OFFSET을 브랜드 이름으로 제시하고 교육·컨설팅을 설명 문구로 사용한다. 전문성을 드러내는 정도는 별도 결정한다. 효과를 보장하는 수치나 검증되지 않은 성과는 사용하지 않는다.

## 2.1 서비스 구성 — 사용자 제시 내용

| 서비스 | 접수 방식 | 회차·기간 | 내용 및 형식 |
|---|---|---|---|
| 1:1 코칭 | 상시 | 1회 | 커리어 조언, 포트폴리오 코칭, 프로젝트 피드백, 가상 인터뷰 체험. 시간·온라인 여부는 미정 |
| 포트폴리오 코칭 | 모집형 | 총 4회 | 1:1 온라인. 매회 포트폴리오 사전 검토 1시간 + 온라인 대면 리뷰 1시간으로 이해한 운영안 |
| 프로젝트 워크샵 | 모집형 | 8주·총 8회 | 앱 기획부터 디자인 완성까지 디자인 프로세스 경험. 개인/팀 과제, 수업 인원·회당 시간·온라인 여부는 미정 |
| 스타트업 컨설팅 | 상시 | 1회 | 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여. 시간·수행 범위·가격 방식은 미정 |

포트폴리오 코칭의 1시간 사전 검토는 운영자의 준비 시간이며 참여자의 온라인 수업 시간과 구분한다. 매회 적용 시 참여자당 총 운영 시간은 최소 8시간(사전 검토 4시간 + 온라인 리뷰 4시간)이다. 일정 조율·회차 외 질문 대응은 별도다. 총 4회가 4주인지, 회차별 제출 시점은 미정이다.

기존 workshop 페이지에서 참고할 원칙: 기존 포트폴리오를 제출하고, 리뷰 후 직접 수정하여 다음 회차에서 다시 검토하는 반복 과정. 2026-09-12 확인한 기존 페이지는 그룹·오프라인 과정이므로 신규 과정에는 사용자가 지정한 1:1·온라인·4회를 우선 적용한다. 기존 가격, 인원, 기간, 선발·결제·환불 규칙은 자동 승계하지 않는다.

### 홈 서비스 목록 제안

개인 대상 세 서비스와 기업 대상 한 서비스를 홈에서 한눈에 제공한다. 기본 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅이며 어드민에서 조정한다. 카드에는 이름, 해결 과제 한 줄, 상시/모집 상태, 회차·방식, 상세 링크를 표시한다.

- 1:1 코칭: ‘지금 막힌 문제를 한 번의 코칭으로 점검합니다.’ 단회 진단·조언이라는 역할을 설명한다.
- 포트폴리오 코칭: ‘4회의 리뷰와 수정을 통해 포트폴리오를 다듬습니다.’ 반복 개선이라는 역할을 설명한다.
- 프로젝트 워크샵: ‘8주 동안 앱 기획부터 디자인 완성까지 경험합니다.’ 새로운 프로젝트를 만드는 과정이라는 역할을 설명한다.
- 스타트업 컨설팅: ‘팀·서비스·디자인·채용의 당면 과제를 함께 검토합니다.’ 단회 서비스의 구체적인 범위는 추가 확정한다.

상시 서비스에는 접수 가능·일시 중단 상태를, 모집형에는 모집 예정·모집 중·마감 상태와 모집 단위를 둔다. 상시는 무제한 수용 또는 즉시 예약 확정을 의미하지 않는다. 모집 종료 후에도 상세 설명을 열람할 수 있게 하는 안을 제안한다.

## 3. 주요 방문 흐름

신청·예약·결제 상세는 [상세 설계 v0.4](OFFSET-BOOKING-SPEC.md)을 따른다. 확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭·프로젝트 워크샵은 검토 후 결제, 스타트업 컨설팅은 협의 후 결제. 가격·세부 정책·결제 사업자는 미정이다.


1. 교육 홍보 → 해당 모집 상세 → 적합성·방식·교육자·조건 확인 → 신청 → 운영 절차에 따른 참여 확정.
2. LinkedIn·검색 → 아티클 → 관련 시리즈·교육 → 모집 상세 → 신청.
3. 직접 방문 → 홈에서 브랜드와 서비스 목록 확인 → 해당 서비스·모집 상세 → 신청 또는 문의.
4. 참여 확정 → 참여 안내 → 자격 확인 후 Discord 초대. 자동화 여부는 미정.
5. 기업 방문 → 홈의 기업 컨설팅 → 수행 범위·방식·전문성 확인 → 프로젝트 문의 → 적합성·일정·범위 협의. 상시 문의가 즉시 착수 가능함을 뜻하지 않도록 안내한다.

모든 유입을 홈으로 우회시키지 않는다. 모집 상세만 방문해도 충분히 판단할 수 있어야 한다.

## 4. 사이트맵 제안

- 홈: 브랜드의 가치, 개인 교육 및 기업 컨설팅 서비스 목록, 진행 방식, 운영자 전문성과 확인 가능한 신뢰 근거, 대표 콘텐츠.
  - 서비스 목록은 홈 안에 배치한다. 개인을 위한 교육·코칭과 기업을 위한 컨설팅을 구분하며 별도 목록 페이지·필터는 만들지 않는다.
  - 프로그램/모집 상세: 대상, 과제, 기대 결과물, 진행 방식, 커리큘럼, 교육자, 일정·정원·가격, 신청 절차, FAQ.
  - 신청·일정 선택·신청 관리·결제 안내·결과·확정 화면: 사이트 내 폼과 외부 결제 연동을 제안한다. 제출 완료와 참여 확정을 구분한다. 회원가입 없이 이메일 본인 확인으로 관리하는 안이다.
  - 스타트업 컨설팅 상세: 팀 빌딩·스타트업 서비스 플랜·디자인 리뷰·지원자 포트폴리오 검토 및 면접관 참여의 대상 문제, 수행 범위, 결과물 예시, 협업 방식, 전문성 근거, 문의 경로. 초기에는 하나의 상세 페이지에 지원 영역을 정리하는 안을 제안한다.
- 인사이트: 아티클 목록과 시리즈 탐색.
  - 시리즈 상세: 시리즈 소개와 순서가 있는 글 목록.
  - 아티클 상세: 본문, 저자, 시리즈, 관련 글·관련 교육.
- OFFSET 소개: 교육·컨설팅 철학, 운영 방식, 운영자 소개와 검증 가능한 경력. 초기 분량이 적으면 홈의 소개 섹션으로 통합하는 안도 검토한다.
- 운영 안내: 문의 및 신청·판매 방식에 필요한 정책 페이지. 내용은 운영 방식 확정 후 작성.
- 어드민: 인증된 운영자의 콘텐츠 작성·미리보기·발행·관리.
- 향후 확장 후보: 이북 목록·상세·구매·전달. 첫 출시 포함 여부 미정.

최상위 메뉴 제안: 서비스(홈 내부 이동) / 인사이트 / 소개(독립 페이지 또는 홈 내부 이동 미정). Discord는 교육 참여자 안내 경로로 제공하는 안을 제안한다.

## 5. 콘텐츠 모델 제안

| 종류 | 주요 정보 | 관계 |
|---|---|---|
| 프로그램 | 소개, 대상 경력, 해결 과제, 형식, 상시/모집 구분, 커리큘럼, 교육자 | 모집형은 여러 모집 회차를 가질 수 있고 상시형은 모집 회차 없이 신청 가능 |
| 모집 회차 | 일정, 정원, 가격, 모집 상태, 신청 방식 | 프로그램에 연결 |
| 기업 컨설팅 | 소개, 대상 문제, 제공 범위, 결과물, 협업 방식, 문의 경로 | 홈 서비스 목록에 노출; 교육 모집 회차와 별개 |
| 기업 문의 | 조직·담당자, 과제 설명, 연락 수단, 일정 등 최소 필요 정보 | 수집 항목·접수 수단·처리 상태는 미정 |
| 교육자 | 이름, 역할, 소개, 확인된 경력·링크 | 프로그램·아티클과 연결 |
| 아티클 | 제목, 요약, 본문, 이미지, 저자, 발행일 | 시리즈 및 관련 프로그램과 연결 |
| 시리즈 | 제목, 설명, 표지, 글 순서 | 여러 아티클 포함 |
| 신청 | 대상 서비스, 모집형의 경우 대상 모집 회차, 필요한 신청 정보, 처리 상태 | 상시형과 모집형 모두 지원; 수집 항목·보관 정책·처리 방식 미정 |
| 이북(향후) | 소개, 목차, 가격, 파일·판 정보 | 관련 시리즈와 연결 가능 |

경력 단계(취업 준비·주니어·시니어·리드), 해결 과제(포트폴리오·이직·프로젝트 등), 교육 형식(1:1·그룹 등)은 서로 다른 속성으로 관리한다. 분류명은 실제 교육 구성에 맞춰 확정한다.

## 6. 신뢰 형성 원칙 제안

- 홈은 OFFSET이 돕는 대상과 해결 과제, 교육·컨설팅 방식을 중심으로 구성한다.
- 교육자는 소개 페이지와 모집 상세에서 해당 교육을 이끌 수 있는 근거와 함께 보여준다.
- 컨설팅에는 운영자의 실제 역할과 경험을 구체적으로 제시한다. 팀 빌딩이 채용·조직 설계·코칭 중 어디까지인지, 서비스 빌딩이 자문·설계·구현 중 어디까지인지 확정하기 전 수행 가능 범위를 과장하지 않는다.
- 모집 상세에 누가 적합한지, 무엇을 하며 어떤 결과물을 만드는지 구체적으로 명시한다.
- 후기·참여자 결과물은 실제 자료와 공개 동의가 있을 때만 사용한다. 자료가 없다면 교육 과정과 예시로 설명한다.

## 7. 어드민 범위 제안

- 운영자 로그인 및 권한 확인.
- 홈 서비스 노출·순서, 프로그램·회차·기업 컨설팅·교육자·시리즈·아티클 생성 및 편집.
- 이미지 업로드, 대체 텍스트, 콘텐츠 노출 순서 관리.
- 초안·미리보기·발행·비공개. 콘텐츠 발행 상태와 모집 상태는 별개로 관리.
- 상시 서비스의 접수 가능·일시 중단, 모집형의 모집 예정·모집 중·마감 상태 및 신청 버튼 제어.
- 신청 목록·보완 요청·승인·결제 안내·확정 상태, 통합 일정 및 정원 확보 관리.
- 기업 문의 접수 경로를 관리한다. 자체 접수를 선택하면 문의 목록과 처리 상태를 관리한다. 자동 접수 확인·운영자 알림 여부는 신청 흐름 설계에서 결정한다.
- 결제 연동과 상태 검증·환불 추적은 첫 버전 범위에 제안한다. 일반 회원 계정, 자동 Discord 초대, 이북 파일 전달은 별도 범위다.

## 8. 첫 출시 범위 제안과 검증 기준

첫 출시 제안: 서비스 목록을 포함한 홈, 개별 교육·모집 상세, 기업 컨설팅 상세·문의 경로, 교육 신청 경로, 인사이트·시리즈·아티클, 소개(홈 통합 가능), 콘텐츠 어드민. 별도 프로그램 목록 페이지는 제외한다.

완료 기준 초안:

- 모집 상세에서 대상·진행 방식·일정·신청 조건을 확인하고 실제 신청을 완료할 수 있다.
- 홈에서 제공 서비스를 확인하고 개별 상세 또는 신청·문의로 이동할 수 있다.
- 기업 컨설팅에서 제공 범위를 확인하고 문의를 접수할 수 있다. 접수 완료와 계약·착수 확정을 구분한다.
- 마감된 모집은 새 신청을 받지 않고 상태가 명확히 표시된다.
- 관리자가 초안을 미리보고 발행하면 공개 사이트에 반영된다. 미발행 콘텐츠는 공개되지 않는다.
- 아티클에서 같은 시리즈와 관련 교육으로 이동할 수 있다.
- 모바일에서도 주요 정보 확인과 신청이 가능하다.
- 참여자 커뮤니티 초대는 확정된 자격 기준에 따라 운영한다.

성과 확인 후보: 모집 상세 방문 대비 신청 완료, 신청 대비 실제 참여, 아티클에서 교육으로 이동, 컨설팅 문의 및 실제 상담·계약. 교육과 컨설팅 성과는 구분하며 목표 수치·측정 방식은 아직 정하지 않는다.

## 9. 합의된 협업·배포 규칙

- 편집 가능한 Figma 화면으로 설계한다. 사용자의 직접 수정 이후 최신 프레임과 개발 기준 상태를 비교하여 코드에 반영한다.
- 수정만으로 자동 배포하지 않는다.
- ‘QA에 올리자’ 지시가 있으면 QA 서버에 배포한다.
- ‘배포하자’ 지시가 있으면 QA에서 검증한 버전을 실서버에 배포한다.
- QA와 실서버의 데이터·업로드 저장소를 분리하는 설계를 적용한다.

## 10. 다음 결정 사항

1. 네 서비스의 출시 시점별 접수 여부·가격·수용 인원과 우선 대상.
2. 서비스별 신청·결제 순서는 확정. 결제 사업자·수단·가격·기한·일정 변경·취소·환불 정책은 추가 확정.
3. 이북 판매의 첫 출시 포함 여부.
4. 활용 가능한 교육자 경력·후기·결과물, 초기 아티클 수량.
5. 참고 디자인 시스템과 Figma 작업 파일.
6. 교육·컨설팅 브랜드라는 포지셔닝 및 운영자 소개 비중.
7. 스타트업 컨설팅의 구체적인 수행 범위와 동시 운영 가능량. 기업 채용 지원은 지원자 포트폴리오 검토와 면접관 참여로 확인됨. 검토 인원·면접 횟수·평가 전달 방식은 미정.
8. 단회 코칭과 컨설팅의 회당 시간·진행 채널, 포트폴리오 코칭 4회의 간격, 프로젝트 워크샵의 개인/팀 과제·정원·회당 시간.
9. 단회 참여자까지 포함할지 등 Discord 초대 자격.

## 참고

- 사용자 제공: https://www.vibemafiaclub.com/ — 2026-09-12 확인한 홈은 개인 소개와 이력을 전면에 배치한다. OFFSET은 사용자 요청에 따라 플랫폼을 전면에 두는 방향이다.
- 사용자 제공: https://offset.quest/workshop/ — 2026-09-12 HTML 본문 확인. 리뷰·수정 반복 방식을 참고하되 기존 그룹·오프라인 운영과 신규 1:1·온라인 운영을 구분한다.

## 캘린더·온라인 진행 보완

운영자의 가능 일정 공개, 고객의 웹사이트 캘린더 예약, Google Calendar·Meet 연동을 설계 범위에 포함한다. 1:1 코칭은 단일 시간 예약, 포트폴리오 코칭은 4회 일정 묶음별 1명 모집 및 검토 후 결제, 워크샵은 고정 8회 일정·정원 관리 방식이다. 포트폴리오 일정 묶음은 제안이며 세부 규칙은 신청·예약·결제 설계 12장을 참고한다. 회원가입·전체 마이페이지는 MVP에서 제외하는 안을 유지한다.

예약 가능 시간은 운영자가 직접 선택·공개한 날짜·시간만 사용한다. Google Calendar 빈 시간 기반 자동 공개·자동 차단은 MVP에서 제외하며, 연동은 확정 일정·초대·Meet 관리에 사용한다.

고객용 캘린더는 Google Calendar 임베드가 아닌 OFFSET 독립 UI다. 직접 공개한 슬롯만 표시하고 결제·예약 확정 후 운영자 Google Calendar에 일정·Meet 링크를 생성하며 신청자 이메일로 캘린더 초대를 발송한다. 결제 전에는 Google 일정·고객 초대를 만들지 않는다.

## 홈 정보 구조 초안

[홈 정보 구조 v0.1](OFFSET-HOME-IA.md)을 추가했다. 제안 순서는 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 전문성 → 인사이트 → 푸터다. 별도 프로그램 목록은 만들지 않는다. 소개는 홈 통합을 제안하며 헤드라인·세부 카피·레이아웃은 와이어프레임 단계에서 검토한다.

## 디자인 시스템 확정

사용자 지정으로 Montage를 전면 적용한다. Figma 작업 위치는 b5VKxmsX9NkkWTQsahPccI 파일의 v2(2099:2) 페이지다. [Montage 적용 기준](OFFSET-MONTAGE.md)에 확인된 토큰·레이아웃 기준 및 라이브러리 연결 상태를 기록했다.
`,html:`<h1 id="section-offset-리뉴얼-prd-v0-9">OFFSET 리뉴얼 PRD v0.9</h1><p>작성일: 2026-09-12. 상태: 논의용 초안. 사용자 발언으로 확인한 방향과 제안을 구분한다. 기존 구현의 기능·화면·기술 선택을 새 요구사항으로 자동 승계하지 않는다.</p>
<h2 id="section-1-확인된-방향">1. 확인된 방향</h2><ul>
<li>OFFSET은 프로덕트 디자이너 대상 교육에서 출발하며, 기업 컨설팅까지 포함하는 브랜드 포지셔닝을 논의 중이다.</li>
<li>1인 운영과 적은 프로그램 수를 고려하여 별도 프로그램 목록 페이지 없이 홈에서 서비스 목록을 제공한다. 개별 서비스·모집 상세는 유지하는 안을 제안한다.</li>
<li>스타트업 컨설팅은 상시·1회성 서비스로 포함한다. 영역은 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여다. 각 영역의 구체적인 수행 범위는 미정이다.</li>
<li>경력 단계와 해결하려는 과제에 맞춘 교육으로 실력 향상을 극대화한다. 사용자가 제시한 서비스 구성은 1:1 코칭, 포트폴리오 코칭, 프로젝트 워크샵, 스타트업 컨설팅 네 가지다. 출시 시점별 실제 모집 여부는 별도 결정한다.</li>
<li>OFFSET 브랜드를 앞세우고 운영자의 전문성으로 신뢰를 뒷받침하고자 한다. 개인을 드러내는 비중은 기업 컨설팅 추가와 함께 재검토 중이다.</li>
<li>방문자가 신뢰를 얻고 모집에 지원하여 실제 참여하는 것이 핵심 목표다.</li>
<li>LinkedIn에 꾸준히 글을 게시하고 사이트에도 인사이트·실용 콘텐츠를 축적한다.</li>
<li>시리즈 후보는 ‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’이다. 장기적으로 콘텐츠를 엮어 이북으로 판매하고자 한다.</li>
<li>참여자 중심의 Discord 커뮤니티를 고려한다. 가입 자격과 운영 범위는 미정이다.</li>
</ul>
<p>기업 채용 지원은 사용자 확인에 따라 지원자의 포트폴리오 검토와 면접관 참여를 의미한다. 개인 대상 1:1 코칭의 포트폴리오 피드백·가상 인터뷰와 구분한다.</p>
<h2 id="section-2-제품-정의-제안">2. 제품 정의 제안</h2><p>개인 디자이너의 성장과 기업의 제품·디자인 조직 과제 해결을 돕는 교육·컨설팅 브랜드. 이 정의는 제안이며 사용자 확정 전이다.</p>
<p>브랜드 문구 초안: ‘디자이너의 성장부터, 팀과 제품의 다음 단계까지.’ OFFSET을 브랜드 이름으로 제시하고 교육·컨설팅을 설명 문구로 사용한다. 전문성을 드러내는 정도는 별도 결정한다. 효과를 보장하는 수치나 검증되지 않은 성과는 사용하지 않는다.</p>
<h2 id="section-2-1-서비스-구성-사용자-제시-내용">2.1 서비스 구성 — 사용자 제시 내용</h2><table>
<thead>
<tr>
<th>서비스</th>
<th>접수 방식</th>
<th>회차·기간</th>
<th>내용 및 형식</th>
</tr>
</thead>
<tbody><tr>
<td>1:1 코칭</td>
<td>상시</td>
<td>1회</td>
<td>커리어 조언, 포트폴리오 코칭, 프로젝트 피드백, 가상 인터뷰 체험. 시간·온라인 여부는 미정</td>
</tr>
<tr>
<td>포트폴리오 코칭</td>
<td>모집형</td>
<td>총 4회</td>
<td>1:1 온라인. 매회 포트폴리오 사전 검토 1시간 + 온라인 대면 리뷰 1시간으로 이해한 운영안</td>
</tr>
<tr>
<td>프로젝트 워크샵</td>
<td>모집형</td>
<td>8주·총 8회</td>
<td>앱 기획부터 디자인 완성까지 디자인 프로세스 경험. 개인/팀 과제, 수업 인원·회당 시간·온라인 여부는 미정</td>
</tr>
<tr>
<td>스타트업 컨설팅</td>
<td>상시</td>
<td>1회</td>
<td>팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여. 시간·수행 범위·가격 방식은 미정</td>
</tr>
</tbody></table>
<p>포트폴리오 코칭의 1시간 사전 검토는 운영자의 준비 시간이며 참여자의 온라인 수업 시간과 구분한다. 매회 적용 시 참여자당 총 운영 시간은 최소 8시간(사전 검토 4시간 + 온라인 리뷰 4시간)이다. 일정 조율·회차 외 질문 대응은 별도다. 총 4회가 4주인지, 회차별 제출 시점은 미정이다.</p>
<p>기존 workshop 페이지에서 참고할 원칙: 기존 포트폴리오를 제출하고, 리뷰 후 직접 수정하여 다음 회차에서 다시 검토하는 반복 과정. 2026-09-12 확인한 기존 페이지는 그룹·오프라인 과정이므로 신규 과정에는 사용자가 지정한 1:1·온라인·4회를 우선 적용한다. 기존 가격, 인원, 기간, 선발·결제·환불 규칙은 자동 승계하지 않는다.</p>
<h3 id="section-홈-서비스-목록-제안">홈 서비스 목록 제안</h3><p>개인 대상 세 서비스와 기업 대상 한 서비스를 홈에서 한눈에 제공한다. 기본 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅이며 어드민에서 조정한다. 카드에는 이름, 해결 과제 한 줄, 상시/모집 상태, 회차·방식, 상세 링크를 표시한다.</p>
<ul>
<li>1:1 코칭: ‘지금 막힌 문제를 한 번의 코칭으로 점검합니다.’ 단회 진단·조언이라는 역할을 설명한다.</li>
<li>포트폴리오 코칭: ‘4회의 리뷰와 수정을 통해 포트폴리오를 다듬습니다.’ 반복 개선이라는 역할을 설명한다.</li>
<li>프로젝트 워크샵: ‘8주 동안 앱 기획부터 디자인 완성까지 경험합니다.’ 새로운 프로젝트를 만드는 과정이라는 역할을 설명한다.</li>
<li>스타트업 컨설팅: ‘팀·서비스·디자인·채용의 당면 과제를 함께 검토합니다.’ 단회 서비스의 구체적인 범위는 추가 확정한다.</li>
</ul>
<p>상시 서비스에는 접수 가능·일시 중단 상태를, 모집형에는 모집 예정·모집 중·마감 상태와 모집 단위를 둔다. 상시는 무제한 수용 또는 즉시 예약 확정을 의미하지 않는다. 모집 종료 후에도 상세 설명을 열람할 수 있게 하는 안을 제안한다.</p>
<h2 id="section-3-주요-방문-흐름">3. 주요 방문 흐름</h2><p>신청·예약·결제 상세는 <a href="/documents?doc=booking" rel="noopener noreferrer">상세 설계 v0.4</a>을 따른다. 확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭·프로젝트 워크샵은 검토 후 결제, 스타트업 컨설팅은 협의 후 결제. 가격·세부 정책·결제 사업자는 미정이다.</p>
<ol>
<li>교육 홍보 → 해당 모집 상세 → 적합성·방식·교육자·조건 확인 → 신청 → 운영 절차에 따른 참여 확정.</li>
<li>LinkedIn·검색 → 아티클 → 관련 시리즈·교육 → 모집 상세 → 신청.</li>
<li>직접 방문 → 홈에서 브랜드와 서비스 목록 확인 → 해당 서비스·모집 상세 → 신청 또는 문의.</li>
<li>참여 확정 → 참여 안내 → 자격 확인 후 Discord 초대. 자동화 여부는 미정.</li>
<li>기업 방문 → 홈의 기업 컨설팅 → 수행 범위·방식·전문성 확인 → 프로젝트 문의 → 적합성·일정·범위 협의. 상시 문의가 즉시 착수 가능함을 뜻하지 않도록 안내한다.</li>
</ol>
<p>모든 유입을 홈으로 우회시키지 않는다. 모집 상세만 방문해도 충분히 판단할 수 있어야 한다.</p>
<h2 id="section-4-사이트맵-제안">4. 사이트맵 제안</h2><ul>
<li>홈: 브랜드의 가치, 개인 교육 및 기업 컨설팅 서비스 목록, 진행 방식, 운영자 전문성과 확인 가능한 신뢰 근거, 대표 콘텐츠.<ul>
<li>서비스 목록은 홈 안에 배치한다. 개인을 위한 교육·코칭과 기업을 위한 컨설팅을 구분하며 별도 목록 페이지·필터는 만들지 않는다.</li>
<li>프로그램/모집 상세: 대상, 과제, 기대 결과물, 진행 방식, 커리큘럼, 교육자, 일정·정원·가격, 신청 절차, FAQ.</li>
<li>신청·일정 선택·신청 관리·결제 안내·결과·확정 화면: 사이트 내 폼과 외부 결제 연동을 제안한다. 제출 완료와 참여 확정을 구분한다. 회원가입 없이 이메일 본인 확인으로 관리하는 안이다.</li>
<li>스타트업 컨설팅 상세: 팀 빌딩·스타트업 서비스 플랜·디자인 리뷰·지원자 포트폴리오 검토 및 면접관 참여의 대상 문제, 수행 범위, 결과물 예시, 협업 방식, 전문성 근거, 문의 경로. 초기에는 하나의 상세 페이지에 지원 영역을 정리하는 안을 제안한다.</li>
</ul>
</li>
<li>인사이트: 아티클 목록과 시리즈 탐색.<ul>
<li>시리즈 상세: 시리즈 소개와 순서가 있는 글 목록.</li>
<li>아티클 상세: 본문, 저자, 시리즈, 관련 글·관련 교육.</li>
</ul>
</li>
<li>OFFSET 소개: 교육·컨설팅 철학, 운영 방식, 운영자 소개와 검증 가능한 경력. 초기 분량이 적으면 홈의 소개 섹션으로 통합하는 안도 검토한다.</li>
<li>운영 안내: 문의 및 신청·판매 방식에 필요한 정책 페이지. 내용은 운영 방식 확정 후 작성.</li>
<li>어드민: 인증된 운영자의 콘텐츠 작성·미리보기·발행·관리.</li>
<li>향후 확장 후보: 이북 목록·상세·구매·전달. 첫 출시 포함 여부 미정.</li>
</ul>
<p>최상위 메뉴 제안: 서비스(홈 내부 이동) / 인사이트 / 소개(독립 페이지 또는 홈 내부 이동 미정). Discord는 교육 참여자 안내 경로로 제공하는 안을 제안한다.</p>
<h2 id="section-5-콘텐츠-모델-제안">5. 콘텐츠 모델 제안</h2><table>
<thead>
<tr>
<th>종류</th>
<th>주요 정보</th>
<th>관계</th>
</tr>
</thead>
<tbody><tr>
<td>프로그램</td>
<td>소개, 대상 경력, 해결 과제, 형식, 상시/모집 구분, 커리큘럼, 교육자</td>
<td>모집형은 여러 모집 회차를 가질 수 있고 상시형은 모집 회차 없이 신청 가능</td>
</tr>
<tr>
<td>모집 회차</td>
<td>일정, 정원, 가격, 모집 상태, 신청 방식</td>
<td>프로그램에 연결</td>
</tr>
<tr>
<td>기업 컨설팅</td>
<td>소개, 대상 문제, 제공 범위, 결과물, 협업 방식, 문의 경로</td>
<td>홈 서비스 목록에 노출; 교육 모집 회차와 별개</td>
</tr>
<tr>
<td>기업 문의</td>
<td>조직·담당자, 과제 설명, 연락 수단, 일정 등 최소 필요 정보</td>
<td>수집 항목·접수 수단·처리 상태는 미정</td>
</tr>
<tr>
<td>교육자</td>
<td>이름, 역할, 소개, 확인된 경력·링크</td>
<td>프로그램·아티클과 연결</td>
</tr>
<tr>
<td>아티클</td>
<td>제목, 요약, 본문, 이미지, 저자, 발행일</td>
<td>시리즈 및 관련 프로그램과 연결</td>
</tr>
<tr>
<td>시리즈</td>
<td>제목, 설명, 표지, 글 순서</td>
<td>여러 아티클 포함</td>
</tr>
<tr>
<td>신청</td>
<td>대상 서비스, 모집형의 경우 대상 모집 회차, 필요한 신청 정보, 처리 상태</td>
<td>상시형과 모집형 모두 지원; 수집 항목·보관 정책·처리 방식 미정</td>
</tr>
<tr>
<td>이북(향후)</td>
<td>소개, 목차, 가격, 파일·판 정보</td>
<td>관련 시리즈와 연결 가능</td>
</tr>
</tbody></table>
<p>경력 단계(취업 준비·주니어·시니어·리드), 해결 과제(포트폴리오·이직·프로젝트 등), 교육 형식(1:1·그룹 등)은 서로 다른 속성으로 관리한다. 분류명은 실제 교육 구성에 맞춰 확정한다.</p>
<h2 id="section-6-신뢰-형성-원칙-제안">6. 신뢰 형성 원칙 제안</h2><ul>
<li>홈은 OFFSET이 돕는 대상과 해결 과제, 교육·컨설팅 방식을 중심으로 구성한다.</li>
<li>교육자는 소개 페이지와 모집 상세에서 해당 교육을 이끌 수 있는 근거와 함께 보여준다.</li>
<li>컨설팅에는 운영자의 실제 역할과 경험을 구체적으로 제시한다. 팀 빌딩이 채용·조직 설계·코칭 중 어디까지인지, 서비스 빌딩이 자문·설계·구현 중 어디까지인지 확정하기 전 수행 가능 범위를 과장하지 않는다.</li>
<li>모집 상세에 누가 적합한지, 무엇을 하며 어떤 결과물을 만드는지 구체적으로 명시한다.</li>
<li>후기·참여자 결과물은 실제 자료와 공개 동의가 있을 때만 사용한다. 자료가 없다면 교육 과정과 예시로 설명한다.</li>
</ul>
<h2 id="section-7-어드민-범위-제안">7. 어드민 범위 제안</h2><ul>
<li>운영자 로그인 및 권한 확인.</li>
<li>홈 서비스 노출·순서, 프로그램·회차·기업 컨설팅·교육자·시리즈·아티클 생성 및 편집.</li>
<li>이미지 업로드, 대체 텍스트, 콘텐츠 노출 순서 관리.</li>
<li>초안·미리보기·발행·비공개. 콘텐츠 발행 상태와 모집 상태는 별개로 관리.</li>
<li>상시 서비스의 접수 가능·일시 중단, 모집형의 모집 예정·모집 중·마감 상태 및 신청 버튼 제어.</li>
<li>신청 목록·보완 요청·승인·결제 안내·확정 상태, 통합 일정 및 정원 확보 관리.</li>
<li>기업 문의 접수 경로를 관리한다. 자체 접수를 선택하면 문의 목록과 처리 상태를 관리한다. 자동 접수 확인·운영자 알림 여부는 신청 흐름 설계에서 결정한다.</li>
<li>결제 연동과 상태 검증·환불 추적은 첫 버전 범위에 제안한다. 일반 회원 계정, 자동 Discord 초대, 이북 파일 전달은 별도 범위다.</li>
</ul>
<h2 id="section-8-첫-출시-범위-제안과-검증-기준">8. 첫 출시 범위 제안과 검증 기준</h2><p>첫 출시 제안: 서비스 목록을 포함한 홈, 개별 교육·모집 상세, 기업 컨설팅 상세·문의 경로, 교육 신청 경로, 인사이트·시리즈·아티클, 소개(홈 통합 가능), 콘텐츠 어드민. 별도 프로그램 목록 페이지는 제외한다.</p>
<p>완료 기준 초안:</p>
<ul>
<li>모집 상세에서 대상·진행 방식·일정·신청 조건을 확인하고 실제 신청을 완료할 수 있다.</li>
<li>홈에서 제공 서비스를 확인하고 개별 상세 또는 신청·문의로 이동할 수 있다.</li>
<li>기업 컨설팅에서 제공 범위를 확인하고 문의를 접수할 수 있다. 접수 완료와 계약·착수 확정을 구분한다.</li>
<li>마감된 모집은 새 신청을 받지 않고 상태가 명확히 표시된다.</li>
<li>관리자가 초안을 미리보고 발행하면 공개 사이트에 반영된다. 미발행 콘텐츠는 공개되지 않는다.</li>
<li>아티클에서 같은 시리즈와 관련 교육으로 이동할 수 있다.</li>
<li>모바일에서도 주요 정보 확인과 신청이 가능하다.</li>
<li>참여자 커뮤니티 초대는 확정된 자격 기준에 따라 운영한다.</li>
</ul>
<p>성과 확인 후보: 모집 상세 방문 대비 신청 완료, 신청 대비 실제 참여, 아티클에서 교육으로 이동, 컨설팅 문의 및 실제 상담·계약. 교육과 컨설팅 성과는 구분하며 목표 수치·측정 방식은 아직 정하지 않는다.</p>
<h2 id="section-9-합의된-협업-배포-규칙">9. 합의된 협업·배포 규칙</h2><ul>
<li>편집 가능한 Figma 화면으로 설계한다. 사용자의 직접 수정 이후 최신 프레임과 개발 기준 상태를 비교하여 코드에 반영한다.</li>
<li>수정만으로 자동 배포하지 않는다.</li>
<li>‘QA에 올리자’ 지시가 있으면 QA 서버에 배포한다.</li>
<li>‘배포하자’ 지시가 있으면 QA에서 검증한 버전을 실서버에 배포한다.</li>
<li>QA와 실서버의 데이터·업로드 저장소를 분리하는 설계를 적용한다.</li>
</ul>
<h2 id="section-10-다음-결정-사항">10. 다음 결정 사항</h2><ol>
<li>네 서비스의 출시 시점별 접수 여부·가격·수용 인원과 우선 대상.</li>
<li>서비스별 신청·결제 순서는 확정. 결제 사업자·수단·가격·기한·일정 변경·취소·환불 정책은 추가 확정.</li>
<li>이북 판매의 첫 출시 포함 여부.</li>
<li>활용 가능한 교육자 경력·후기·결과물, 초기 아티클 수량.</li>
<li>참고 디자인 시스템과 Figma 작업 파일.</li>
<li>교육·컨설팅 브랜드라는 포지셔닝 및 운영자 소개 비중.</li>
<li>스타트업 컨설팅의 구체적인 수행 범위와 동시 운영 가능량. 기업 채용 지원은 지원자 포트폴리오 검토와 면접관 참여로 확인됨. 검토 인원·면접 횟수·평가 전달 방식은 미정.</li>
<li>단회 코칭과 컨설팅의 회당 시간·진행 채널, 포트폴리오 코칭 4회의 간격, 프로젝트 워크샵의 개인/팀 과제·정원·회당 시간.</li>
<li>단회 참여자까지 포함할지 등 Discord 초대 자격.</li>
</ol>
<h2 id="section-참고">참고</h2><ul>
<li>사용자 제공: <a href="https://www.vibemafiaclub.com/" rel="noopener noreferrer">https://www.vibemafiaclub.com/</a> — 2026-09-12 확인한 홈은 개인 소개와 이력을 전면에 배치한다. OFFSET은 사용자 요청에 따라 플랫폼을 전면에 두는 방향이다.</li>
<li>사용자 제공: <a href="https://offset.quest/workshop/" rel="noopener noreferrer">https://offset.quest/workshop/</a> — 2026-09-12 HTML 본문 확인. 리뷰·수정 반복 방식을 참고하되 기존 그룹·오프라인 운영과 신규 1:1·온라인 운영을 구분한다.</li>
</ul>
<h2 id="section-캘린더-온라인-진행-보완">캘린더·온라인 진행 보완</h2><p>운영자의 가능 일정 공개, 고객의 웹사이트 캘린더 예약, Google Calendar·Meet 연동을 설계 범위에 포함한다. 1:1 코칭은 단일 시간 예약, 포트폴리오 코칭은 4회 일정 묶음별 1명 모집 및 검토 후 결제, 워크샵은 고정 8회 일정·정원 관리 방식이다. 포트폴리오 일정 묶음은 제안이며 세부 규칙은 신청·예약·결제 설계 12장을 참고한다. 회원가입·전체 마이페이지는 MVP에서 제외하는 안을 유지한다.</p>
<p>예약 가능 시간은 운영자가 직접 선택·공개한 날짜·시간만 사용한다. Google Calendar 빈 시간 기반 자동 공개·자동 차단은 MVP에서 제외하며, 연동은 확정 일정·초대·Meet 관리에 사용한다.</p>
<p>고객용 캘린더는 Google Calendar 임베드가 아닌 OFFSET 독립 UI다. 직접 공개한 슬롯만 표시하고 결제·예약 확정 후 운영자 Google Calendar에 일정·Meet 링크를 생성하며 신청자 이메일로 캘린더 초대를 발송한다. 결제 전에는 Google 일정·고객 초대를 만들지 않는다.</p>
<h2 id="section-홈-정보-구조-초안">홈 정보 구조 초안</h2><p><a href="/documents?doc=home" rel="noopener noreferrer">홈 정보 구조 v0.1</a>을 추가했다. 제안 순서는 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 전문성 → 인사이트 → 푸터다. 별도 프로그램 목록은 만들지 않는다. 소개는 홈 통합을 제안하며 헤드라인·세부 카피·레이아웃은 와이어프레임 단계에서 검토한다.</p>
<h2 id="section-디자인-시스템-확정">디자인 시스템 확정</h2><p>사용자 지정으로 Montage를 전면 적용한다. Figma 작업 위치는 b5VKxmsX9NkkWTQsahPccI 파일의 v2(2099:2) 페이지다. <a href="/documents?doc=montage" rel="noopener noreferrer">Montage 적용 기준</a>에 확인된 토큰·레이아웃 기준 및 라이브러리 연결 상태를 기록했다.</p>
`,toc:[{id:`section-1-확인된-방향`,label:`1. 확인된 방향`,depth:2},{id:`section-2-제품-정의-제안`,label:`2. 제품 정의 제안`,depth:2},{id:`section-2-1-서비스-구성-사용자-제시-내용`,label:`2.1 서비스 구성 — 사용자 제시 내용`,depth:2},{id:`section-홈-서비스-목록-제안`,label:`홈 서비스 목록 제안`,depth:3},{id:`section-3-주요-방문-흐름`,label:`3. 주요 방문 흐름`,depth:2},{id:`section-4-사이트맵-제안`,label:`4. 사이트맵 제안`,depth:2},{id:`section-5-콘텐츠-모델-제안`,label:`5. 콘텐츠 모델 제안`,depth:2},{id:`section-6-신뢰-형성-원칙-제안`,label:`6. 신뢰 형성 원칙 제안`,depth:2},{id:`section-7-어드민-범위-제안`,label:`7. 어드민 범위 제안`,depth:2},{id:`section-8-첫-출시-범위-제안과-검증-기준`,label:`8. 첫 출시 범위 제안과 검증 기준`,depth:2},{id:`section-9-합의된-협업-배포-규칙`,label:`9. 합의된 협업·배포 규칙`,depth:2},{id:`section-10-다음-결정-사항`,label:`10. 다음 결정 사항`,depth:2},{id:`section-참고`,label:`참고`,depth:2},{id:`section-캘린더-온라인-진행-보완`,label:`캘린더·온라인 진행 보완`,depth:2},{id:`section-홈-정보-구조-초안`,label:`홈 정보 구조 초안`,depth:2},{id:`section-디자인-시스템-확정`,label:`디자인 시스템 확정`,depth:2}]},{revision:2,hash:`9da0302b958946374b127bac1a46286b6a28ed9cca3b686b14a7538a3f026017`,recordedAt:`2026-09-12T13:53:33.718Z`,markdown:`# OFFSET 리뉴얼 PRD v0.9

작성일: 2026-09-12. 상태: 논의용 초안. 사용자 발언으로 확인한 방향과 제안을 구분한다. 기존 구현의 기능·화면·기술 선택을 새 요구사항으로 자동 승계하지 않는다.

## 1. 확인된 방향

- OFFSET은 프로덕트 디자이너 대상 교육에서 출발하며, 기업 컨설팅까지 포함하는 브랜드 포지셔닝을 논의 중이다.
- 1인 운영과 적은 프로그램 수를 고려하여 별도 프로그램 목록 페이지 없이 홈에서 서비스 목록을 제공한다. 개별 서비스·모집 상세는 유지하는 안을 제안한다.
- 스타트업 컨설팅은 상시·1회성 서비스로 포함한다. 영역은 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여다. 각 영역의 구체적인 수행 범위는 미정이다.
- 경력 단계와 해결하려는 과제에 맞춘 교육으로 실력 향상을 극대화한다. 사용자가 제시한 서비스 구성은 1:1 코칭, 포트폴리오 코칭, 프로젝트 워크샵, 스타트업 컨설팅 네 가지다. 출시 시점별 실제 모집 여부는 별도 결정한다.
- OFFSET 브랜드를 앞세우고 운영자의 전문성으로 신뢰를 뒷받침하고자 한다. 개인을 드러내는 비중은 기업 컨설팅 추가와 함께 재검토 중이다.
- 방문자가 신뢰를 얻고 모집에 지원하여 실제 참여하는 것이 핵심 목표다.
- LinkedIn에 꾸준히 글을 게시하고 사이트에도 인사이트·실용 콘텐츠를 축적한다.
- 시리즈 후보는 ‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’이다. 장기적으로 콘텐츠를 엮어 이북으로 판매하고자 한다.
- 참여자 중심의 Discord 커뮤니티를 고려한다. 가입 자격과 운영 범위는 미정이다.

기업 채용 지원은 사용자 확인에 따라 지원자의 포트폴리오 검토와 면접관 참여를 의미한다. 개인 대상 1:1 코칭의 포트폴리오 피드백·가상 인터뷰와 구분한다.

## 2. 제품 정의 제안

개인 디자이너의 성장과 기업의 제품·디자인 조직 과제 해결을 돕는 교육·컨설팅 브랜드. 이 정의는 제안이며 사용자 확정 전이다.

브랜드 문구 초안: ‘디자이너의 성장부터, 팀과 제품의 다음 단계까지.’ OFFSET을 브랜드 이름으로 제시하고 교육·컨설팅을 설명 문구로 사용한다. 전문성을 드러내는 정도는 별도 결정한다. 효과를 보장하는 수치나 검증되지 않은 성과는 사용하지 않는다.

## 2.1 서비스 구성 — 사용자 제시 내용

| 서비스 | 접수 방식 | 회차·기간 | 내용 및 형식 |
|---|---|---|---|
| 1:1 코칭 | 상시 | 1회 | 커리어 조언, 포트폴리오 코칭, 프로젝트 피드백, 가상 인터뷰 체험. 시간·온라인 여부는 미정 |
| 포트폴리오 코칭 | 모집형 | 총 4회 | 1:1 온라인. 매회 포트폴리오 사전 검토 1시간 + 온라인 대면 리뷰 1시간으로 이해한 운영안 |
| 프로젝트 워크샵 | 모집형 | 8주·총 8회 | 앱 기획부터 디자인 완성까지 디자인 프로세스 경험. 개인/팀 과제, 수업 인원·회당 시간·온라인 여부는 미정 |
| 스타트업 컨설팅 | 상시 | 1회 | 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여. 시간·수행 범위·가격 방식은 미정 |

포트폴리오 코칭의 1시간 사전 검토는 운영자의 준비 시간이며 참여자의 온라인 수업 시간과 구분한다. 매회 적용 시 참여자당 총 운영 시간은 최소 8시간(사전 검토 4시간 + 온라인 리뷰 4시간)이다. 일정 조율·회차 외 질문 대응은 별도다. 총 4회가 4주인지, 회차별 제출 시점은 미정이다.

기존 workshop 페이지에서 참고할 원칙: 기존 포트폴리오를 제출하고, 리뷰 후 직접 수정하여 다음 회차에서 다시 검토하는 반복 과정. 2026-09-12 확인한 기존 페이지는 그룹·오프라인 과정이므로 신규 과정에는 사용자가 지정한 1:1·온라인·4회를 우선 적용한다. 기존 가격, 인원, 기간, 선발·결제·환불 규칙은 자동 승계하지 않는다.

### 홈 서비스 목록 제안

개인 대상 세 서비스와 기업 대상 한 서비스를 홈에서 한눈에 제공한다. 기본 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅이며 어드민에서 조정한다. 카드에는 이름, 해결 과제 한 줄, 상시/모집 상태, 회차·방식, 상세 링크를 표시한다.

- 1:1 코칭: ‘지금 막힌 문제를 한 번의 코칭으로 점검합니다.’ 단회 진단·조언이라는 역할을 설명한다.
- 포트폴리오 코칭: ‘4회의 리뷰와 수정을 통해 포트폴리오를 다듬습니다.’ 반복 개선이라는 역할을 설명한다.
- 프로젝트 워크샵: ‘8주 동안 앱 기획부터 디자인 완성까지 경험합니다.’ 새로운 프로젝트를 만드는 과정이라는 역할을 설명한다.
- 스타트업 컨설팅: ‘팀·서비스·디자인·채용의 당면 과제를 함께 검토합니다.’ 단회 서비스의 구체적인 범위는 추가 확정한다.

상시 서비스에는 접수 가능·일시 중단 상태를, 모집형에는 모집 예정·모집 중·마감 상태와 모집 단위를 둔다. 상시는 무제한 수용 또는 즉시 예약 확정을 의미하지 않는다. 모집 종료 후에도 상세 설명을 열람할 수 있게 하는 안을 제안한다.

## 3. 주요 방문 흐름

신청·예약·결제 상세는 [상세 설계 v0.4](OFFSET-BOOKING-SPEC.md)을 따른다. 확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭·프로젝트 워크샵은 검토 후 결제, 스타트업 컨설팅은 협의 후 결제. 가격·세부 정책·결제 사업자는 미정이다.


1. 교육 홍보 → 해당 모집 상세 → 적합성·방식·교육자·조건 확인 → 신청 → 운영 절차에 따른 참여 확정.
2. LinkedIn·검색 → 아티클 → 관련 시리즈·교육 → 모집 상세 → 신청.
3. 직접 방문 → 홈에서 브랜드와 서비스 목록 확인 → 해당 서비스·모집 상세 → 신청 또는 문의.
4. 참여 확정 → 참여 안내 → 자격 확인 후 Discord 초대. 자동화 여부는 미정.
5. 기업 방문 → 홈의 기업 컨설팅 → 수행 범위·방식·전문성 확인 → 프로젝트 문의 → 적합성·일정·범위 협의. 상시 문의가 즉시 착수 가능함을 뜻하지 않도록 안내한다.

모든 유입을 홈으로 우회시키지 않는다. 모집 상세만 방문해도 충분히 판단할 수 있어야 한다.

## 4. 사이트맵 제안

- 홈: 브랜드의 가치, 개인 교육 및 기업 컨설팅 서비스 목록, 진행 방식, 운영자 전문성과 확인 가능한 신뢰 근거, 대표 콘텐츠.
  - 서비스 목록은 홈 안에 배치한다. 개인을 위한 교육·코칭과 기업을 위한 컨설팅을 구분하며 별도 목록 페이지·필터는 만들지 않는다.
  - 프로그램/모집 상세: 대상, 과제, 기대 결과물, 진행 방식, 커리큘럼, 교육자, 일정·정원·가격, 신청 절차, FAQ.
  - 신청·일정 선택·신청 관리·결제 안내·결과·확정 화면: 사이트 내 폼과 외부 결제 연동을 제안한다. 제출 완료와 참여 확정을 구분한다. 회원가입 없이 이메일 본인 확인으로 관리하는 안이다.
  - 스타트업 컨설팅 상세: 팀 빌딩·스타트업 서비스 플랜·디자인 리뷰·지원자 포트폴리오 검토 및 면접관 참여의 대상 문제, 수행 범위, 결과물 예시, 협업 방식, 전문성 근거, 문의 경로. 초기에는 하나의 상세 페이지에 지원 영역을 정리하는 안을 제안한다.
- 인사이트: 아티클 목록과 시리즈 탐색.
  - 시리즈 상세: 시리즈 소개와 순서가 있는 글 목록.
  - 아티클 상세: 본문, 저자, 시리즈, 관련 글·관련 교육.
- OFFSET 소개: 교육·컨설팅 철학, 운영 방식, 운영자 소개와 검증 가능한 경력. 초기 분량이 적으면 홈의 소개 섹션으로 통합하는 안도 검토한다.
- 운영 안내: 문의 및 신청·판매 방식에 필요한 정책 페이지. 내용은 운영 방식 확정 후 작성.
- 어드민: 인증된 운영자의 콘텐츠 작성·미리보기·발행·관리.
- 향후 확장 후보: 이북 목록·상세·구매·전달. 첫 출시 포함 여부 미정.

최상위 메뉴 제안: 서비스(홈 내부 이동) / 인사이트 / 소개(독립 페이지 또는 홈 내부 이동 미정). Discord는 교육 참여자 안내 경로로 제공하는 안을 제안한다.

## 5. 콘텐츠 모델 제안

| 종류 | 주요 정보 | 관계 |
|---|---|---|
| 프로그램 | 소개, 대상 경력, 해결 과제, 형식, 상시/모집 구분, 커리큘럼, 교육자 | 모집형은 여러 모집 회차를 가질 수 있고 상시형은 모집 회차 없이 신청 가능 |
| 모집 회차 | 일정, 정원, 가격, 모집 상태, 신청 방식 | 프로그램에 연결 |
| 기업 컨설팅 | 소개, 대상 문제, 제공 범위, 결과물, 협업 방식, 문의 경로 | 홈 서비스 목록에 노출; 교육 모집 회차와 별개 |
| 기업 문의 | 조직·담당자, 과제 설명, 연락 수단, 일정 등 최소 필요 정보 | 수집 항목·접수 수단·처리 상태는 미정 |
| 교육자 | 이름, 역할, 소개, 확인된 경력·링크 | 프로그램·아티클과 연결 |
| 아티클 | 제목, 요약, 본문, 이미지, 저자, 발행일 | 시리즈 및 관련 프로그램과 연결 |
| 시리즈 | 제목, 설명, 표지, 글 순서 | 여러 아티클 포함 |
| 신청 | 대상 서비스, 모집형의 경우 대상 모집 회차, 필요한 신청 정보, 처리 상태 | 상시형과 모집형 모두 지원; 수집 항목·보관 정책·처리 방식 미정 |
| 이북(향후) | 소개, 목차, 가격, 파일·판 정보 | 관련 시리즈와 연결 가능 |

경력 단계(취업 준비·주니어·시니어·리드), 해결 과제(포트폴리오·이직·프로젝트 등), 교육 형식(1:1·그룹 등)은 서로 다른 속성으로 관리한다. 분류명은 실제 교육 구성에 맞춰 확정한다.

## 6. 신뢰 형성 원칙 제안

- 홈은 OFFSET이 돕는 대상과 해결 과제, 교육·컨설팅 방식을 중심으로 구성한다.
- 교육자는 소개 페이지와 모집 상세에서 해당 교육을 이끌 수 있는 근거와 함께 보여준다.
- 컨설팅에는 운영자의 실제 역할과 경험을 구체적으로 제시한다. 팀 빌딩이 채용·조직 설계·코칭 중 어디까지인지, 서비스 빌딩이 자문·설계·구현 중 어디까지인지 확정하기 전 수행 가능 범위를 과장하지 않는다.
- 모집 상세에 누가 적합한지, 무엇을 하며 어떤 결과물을 만드는지 구체적으로 명시한다.
- 후기·참여자 결과물은 실제 자료와 공개 동의가 있을 때만 사용한다. 자료가 없다면 교육 과정과 예시로 설명한다.

## 7. 어드민 범위 제안

- 운영자 로그인 및 권한 확인.
- 홈 서비스 노출·순서, 프로그램·회차·기업 컨설팅·교육자·시리즈·아티클 생성 및 편집.
- 이미지 업로드, 대체 텍스트, 콘텐츠 노출 순서 관리.
- 초안·미리보기·발행·비공개. 콘텐츠 발행 상태와 모집 상태는 별개로 관리.
- 상시 서비스의 접수 가능·일시 중단, 모집형의 모집 예정·모집 중·마감 상태 및 신청 버튼 제어.
- 신청 목록·보완 요청·승인·결제 안내·확정 상태, 통합 일정 및 정원 확보 관리.
- 기업 문의 접수 경로를 관리한다. 자체 접수를 선택하면 문의 목록과 처리 상태를 관리한다. 자동 접수 확인·운영자 알림 여부는 신청 흐름 설계에서 결정한다.
- 결제 연동과 상태 검증·환불 추적은 첫 버전 범위에 제안한다. 일반 회원 계정, 자동 Discord 초대, 이북 파일 전달은 별도 범위다.

## 8. 첫 출시 범위 제안과 검증 기준

첫 출시 제안: 서비스 목록을 포함한 홈, 개별 교육·모집 상세, 기업 컨설팅 상세·문의 경로, 교육 신청 경로, 인사이트·시리즈·아티클, 소개(홈 통합 가능), 콘텐츠 어드민. 별도 프로그램 목록 페이지는 제외한다.

완료 기준 초안:

- 모집 상세에서 대상·진행 방식·일정·신청 조건을 확인하고 실제 신청을 완료할 수 있다.
- 홈에서 제공 서비스를 확인하고 개별 상세 또는 신청·문의로 이동할 수 있다.
- 기업 컨설팅에서 제공 범위를 확인하고 문의를 접수할 수 있다. 접수 완료와 계약·착수 확정을 구분한다.
- 마감된 모집은 새 신청을 받지 않고 상태가 명확히 표시된다.
- 관리자가 초안을 미리보고 발행하면 공개 사이트에 반영된다. 미발행 콘텐츠는 공개되지 않는다.
- 아티클에서 같은 시리즈와 관련 교육으로 이동할 수 있다.
- 모바일에서도 주요 정보 확인과 신청이 가능하다.
- 참여자 커뮤니티 초대는 확정된 자격 기준에 따라 운영한다.

성과 확인 후보: 모집 상세 방문 대비 신청 완료, 신청 대비 실제 참여, 아티클에서 교육으로 이동, 컨설팅 문의 및 실제 상담·계약. 교육과 컨설팅 성과는 구분하며 목표 수치·측정 방식은 아직 정하지 않는다.

## 9. 합의된 협업·배포 규칙

- 편집 가능한 Figma 화면으로 설계한다. 사용자의 직접 수정 이후 최신 프레임과 개발 기준 상태를 비교하여 코드에 반영한다.
- 수정만으로 자동 배포하지 않는다.
- ‘QA에 올리자’ 지시가 있으면 QA 서버에 배포한다.
- ‘배포하자’ 지시가 있으면 QA에서 검증한 버전을 실서버에 배포한다.
- QA와 실서버의 데이터·업로드 저장소를 분리하는 설계를 적용한다.

## 10. 다음 결정 사항

1. 네 서비스의 출시 시점별 접수 여부·가격·수용 인원과 우선 대상.
2. 서비스별 신청·결제 순서는 확정. 결제 사업자·수단·가격·기한·일정 변경·취소·환불 정책은 추가 확정.
3. 이북 판매의 첫 출시 포함 여부.
4. 활용 가능한 교육자 경력·후기·결과물, 초기 아티클 수량.
5. 참고 디자인 시스템과 Figma 작업 파일.
6. 교육·컨설팅 브랜드라는 포지셔닝 및 운영자 소개 비중.
7. 스타트업 컨설팅의 구체적인 수행 범위와 동시 운영 가능량. 기업 채용 지원은 지원자 포트폴리오 검토와 면접관 참여로 확인됨. 검토 인원·면접 횟수·평가 전달 방식은 미정.
8. 단회 코칭과 컨설팅의 회당 시간·진행 채널, 포트폴리오 코칭 4회의 간격, 프로젝트 워크샵의 개인/팀 과제·정원·회당 시간.
9. 단회 참여자까지 포함할지 등 Discord 초대 자격.

## 참고

- 사용자 제공: https://www.vibemafiaclub.com/ — 2026-09-12 확인한 홈은 개인 소개와 이력을 전면에 배치한다. OFFSET은 사용자 요청에 따라 플랫폼을 전면에 두는 방향이다.
- 사용자 제공: https://offset.quest/workshop/ — 2026-09-12 HTML 본문 확인. 리뷰·수정 반복 방식을 참고하되 기존 그룹·오프라인 운영과 신규 1:1·온라인 운영을 구분한다.

## 캘린더·온라인 진행 보완

운영자의 가능 일정 공개, 고객의 웹사이트 캘린더 예약, Google Calendar·Meet 연동을 설계 범위에 포함한다. 1:1 코칭은 단일 시간 예약, 포트폴리오 코칭은 4회 일정 묶음별 1명 모집 및 검토 후 결제, 워크샵은 고정 8회 일정·정원 관리 방식이다. 포트폴리오 일정 묶음은 제안이며 세부 규칙은 신청·예약·결제 설계 12장을 참고한다. 회원가입·전체 마이페이지는 MVP에서 제외하는 안을 유지한다.

예약 가능 시간은 운영자가 직접 선택·공개한 날짜·시간만 사용한다. Google Calendar 빈 시간 기반 자동 공개·자동 차단은 MVP에서 제외하며, 연동은 확정 일정·초대·Meet 관리에 사용한다.

고객용 캘린더는 Google Calendar 임베드가 아닌 OFFSET 독립 UI다. 직접 공개한 슬롯만 표시하고 결제·예약 확정 후 운영자 Google Calendar에 일정·Meet 링크를 생성하며 신청자 이메일로 캘린더 초대를 발송한다. 결제 전에는 Google 일정·고객 초대를 만들지 않는다.

## 홈 정보 구조 초안

[홈 정보 구조 v0.1](OFFSET-HOME-IA.md)을 추가했다. 제안 순서는 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 전문성 → 인사이트 → 푸터다. 별도 프로그램 목록은 만들지 않는다. 소개는 홈 통합을 제안하며 헤드라인·세부 카피·레이아웃은 와이어프레임 단계에서 검토한다.

## 디자인 시스템 확정

사용자 지정으로 Montage를 전면 적용한다. Figma 작업 위치는 b5VKxmsX9NkkWTQsahPccI 파일의 v2(2099:2) 페이지다. [Montage 적용 기준](OFFSET-MONTAGE.md)에 확인된 토큰·레이아웃 기준 및 라이브러리 연결 상태를 기록했다.

## 프로젝트 문서 사이트 — 2026-09-12 추가

사용자 요청에 따라 \`/documents\`에서 PRD, 신청·예약·결제 설계, 홈 정보 구조, Montage 적용 기준을 열람한다. 등록된 Markdown 파일을 원본으로 사용하며, 문서 검색·목차·원문 다운로드·버전별 열람·추가/삭제 비교·특정 버전 링크를 제공한다.

문서 내용이 바뀌면 개발 서버의 파일 저장 감지 또는 빌드 시 새 리비전을 자동 기록한다. 변경이 없는 재빌드는 버전을 추가하지 않는다. 기존 과거 원본이 없는 문서는 현재 내용을 r1 기준 버전으로 등록한다. 기록된 이력은 원본과 함께 Git에서 관리한다.

문서 자동 갱신과 서버 배포는 구분한다. QA·실서버 반영은 기존 사용자 배포 지시를 따른다. MVP 문서 페이지는 읽기 전용이며 웹에서 직접 업로드·편집하는 어드민은 포함하지 않는다.
`,html:`<h1 id="section-offset-리뉴얼-prd-v0-9">OFFSET 리뉴얼 PRD v0.9</h1><p>작성일: 2026-09-12. 상태: 논의용 초안. 사용자 발언으로 확인한 방향과 제안을 구분한다. 기존 구현의 기능·화면·기술 선택을 새 요구사항으로 자동 승계하지 않는다.</p>
<h2 id="section-1-확인된-방향">1. 확인된 방향</h2><ul>
<li>OFFSET은 프로덕트 디자이너 대상 교육에서 출발하며, 기업 컨설팅까지 포함하는 브랜드 포지셔닝을 논의 중이다.</li>
<li>1인 운영과 적은 프로그램 수를 고려하여 별도 프로그램 목록 페이지 없이 홈에서 서비스 목록을 제공한다. 개별 서비스·모집 상세는 유지하는 안을 제안한다.</li>
<li>스타트업 컨설팅은 상시·1회성 서비스로 포함한다. 영역은 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여다. 각 영역의 구체적인 수행 범위는 미정이다.</li>
<li>경력 단계와 해결하려는 과제에 맞춘 교육으로 실력 향상을 극대화한다. 사용자가 제시한 서비스 구성은 1:1 코칭, 포트폴리오 코칭, 프로젝트 워크샵, 스타트업 컨설팅 네 가지다. 출시 시점별 실제 모집 여부는 별도 결정한다.</li>
<li>OFFSET 브랜드를 앞세우고 운영자의 전문성으로 신뢰를 뒷받침하고자 한다. 개인을 드러내는 비중은 기업 컨설팅 추가와 함께 재검토 중이다.</li>
<li>방문자가 신뢰를 얻고 모집에 지원하여 실제 참여하는 것이 핵심 목표다.</li>
<li>LinkedIn에 꾸준히 글을 게시하고 사이트에도 인사이트·실용 콘텐츠를 축적한다.</li>
<li>시리즈 후보는 ‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’이다. 장기적으로 콘텐츠를 엮어 이북으로 판매하고자 한다.</li>
<li>참여자 중심의 Discord 커뮤니티를 고려한다. 가입 자격과 운영 범위는 미정이다.</li>
</ul>
<p>기업 채용 지원은 사용자 확인에 따라 지원자의 포트폴리오 검토와 면접관 참여를 의미한다. 개인 대상 1:1 코칭의 포트폴리오 피드백·가상 인터뷰와 구분한다.</p>
<h2 id="section-2-제품-정의-제안">2. 제품 정의 제안</h2><p>개인 디자이너의 성장과 기업의 제품·디자인 조직 과제 해결을 돕는 교육·컨설팅 브랜드. 이 정의는 제안이며 사용자 확정 전이다.</p>
<p>브랜드 문구 초안: ‘디자이너의 성장부터, 팀과 제품의 다음 단계까지.’ OFFSET을 브랜드 이름으로 제시하고 교육·컨설팅을 설명 문구로 사용한다. 전문성을 드러내는 정도는 별도 결정한다. 효과를 보장하는 수치나 검증되지 않은 성과는 사용하지 않는다.</p>
<h2 id="section-2-1-서비스-구성-사용자-제시-내용">2.1 서비스 구성 — 사용자 제시 내용</h2><table>
<thead>
<tr>
<th>서비스</th>
<th>접수 방식</th>
<th>회차·기간</th>
<th>내용 및 형식</th>
</tr>
</thead>
<tbody><tr>
<td>1:1 코칭</td>
<td>상시</td>
<td>1회</td>
<td>커리어 조언, 포트폴리오 코칭, 프로젝트 피드백, 가상 인터뷰 체험. 시간·온라인 여부는 미정</td>
</tr>
<tr>
<td>포트폴리오 코칭</td>
<td>모집형</td>
<td>총 4회</td>
<td>1:1 온라인. 매회 포트폴리오 사전 검토 1시간 + 온라인 대면 리뷰 1시간으로 이해한 운영안</td>
</tr>
<tr>
<td>프로젝트 워크샵</td>
<td>모집형</td>
<td>8주·총 8회</td>
<td>앱 기획부터 디자인 완성까지 디자인 프로세스 경험. 개인/팀 과제, 수업 인원·회당 시간·온라인 여부는 미정</td>
</tr>
<tr>
<td>스타트업 컨설팅</td>
<td>상시</td>
<td>1회</td>
<td>팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여. 시간·수행 범위·가격 방식은 미정</td>
</tr>
</tbody></table>
<p>포트폴리오 코칭의 1시간 사전 검토는 운영자의 준비 시간이며 참여자의 온라인 수업 시간과 구분한다. 매회 적용 시 참여자당 총 운영 시간은 최소 8시간(사전 검토 4시간 + 온라인 리뷰 4시간)이다. 일정 조율·회차 외 질문 대응은 별도다. 총 4회가 4주인지, 회차별 제출 시점은 미정이다.</p>
<p>기존 workshop 페이지에서 참고할 원칙: 기존 포트폴리오를 제출하고, 리뷰 후 직접 수정하여 다음 회차에서 다시 검토하는 반복 과정. 2026-09-12 확인한 기존 페이지는 그룹·오프라인 과정이므로 신규 과정에는 사용자가 지정한 1:1·온라인·4회를 우선 적용한다. 기존 가격, 인원, 기간, 선발·결제·환불 규칙은 자동 승계하지 않는다.</p>
<h3 id="section-홈-서비스-목록-제안">홈 서비스 목록 제안</h3><p>개인 대상 세 서비스와 기업 대상 한 서비스를 홈에서 한눈에 제공한다. 기본 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅이며 어드민에서 조정한다. 카드에는 이름, 해결 과제 한 줄, 상시/모집 상태, 회차·방식, 상세 링크를 표시한다.</p>
<ul>
<li>1:1 코칭: ‘지금 막힌 문제를 한 번의 코칭으로 점검합니다.’ 단회 진단·조언이라는 역할을 설명한다.</li>
<li>포트폴리오 코칭: ‘4회의 리뷰와 수정을 통해 포트폴리오를 다듬습니다.’ 반복 개선이라는 역할을 설명한다.</li>
<li>프로젝트 워크샵: ‘8주 동안 앱 기획부터 디자인 완성까지 경험합니다.’ 새로운 프로젝트를 만드는 과정이라는 역할을 설명한다.</li>
<li>스타트업 컨설팅: ‘팀·서비스·디자인·채용의 당면 과제를 함께 검토합니다.’ 단회 서비스의 구체적인 범위는 추가 확정한다.</li>
</ul>
<p>상시 서비스에는 접수 가능·일시 중단 상태를, 모집형에는 모집 예정·모집 중·마감 상태와 모집 단위를 둔다. 상시는 무제한 수용 또는 즉시 예약 확정을 의미하지 않는다. 모집 종료 후에도 상세 설명을 열람할 수 있게 하는 안을 제안한다.</p>
<h2 id="section-3-주요-방문-흐름">3. 주요 방문 흐름</h2><p>신청·예약·결제 상세는 <a href="/documents?doc=booking" rel="noopener noreferrer">상세 설계 v0.4</a>을 따른다. 확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭·프로젝트 워크샵은 검토 후 결제, 스타트업 컨설팅은 협의 후 결제. 가격·세부 정책·결제 사업자는 미정이다.</p>
<ol>
<li>교육 홍보 → 해당 모집 상세 → 적합성·방식·교육자·조건 확인 → 신청 → 운영 절차에 따른 참여 확정.</li>
<li>LinkedIn·검색 → 아티클 → 관련 시리즈·교육 → 모집 상세 → 신청.</li>
<li>직접 방문 → 홈에서 브랜드와 서비스 목록 확인 → 해당 서비스·모집 상세 → 신청 또는 문의.</li>
<li>참여 확정 → 참여 안내 → 자격 확인 후 Discord 초대. 자동화 여부는 미정.</li>
<li>기업 방문 → 홈의 기업 컨설팅 → 수행 범위·방식·전문성 확인 → 프로젝트 문의 → 적합성·일정·범위 협의. 상시 문의가 즉시 착수 가능함을 뜻하지 않도록 안내한다.</li>
</ol>
<p>모든 유입을 홈으로 우회시키지 않는다. 모집 상세만 방문해도 충분히 판단할 수 있어야 한다.</p>
<h2 id="section-4-사이트맵-제안">4. 사이트맵 제안</h2><ul>
<li>홈: 브랜드의 가치, 개인 교육 및 기업 컨설팅 서비스 목록, 진행 방식, 운영자 전문성과 확인 가능한 신뢰 근거, 대표 콘텐츠.<ul>
<li>서비스 목록은 홈 안에 배치한다. 개인을 위한 교육·코칭과 기업을 위한 컨설팅을 구분하며 별도 목록 페이지·필터는 만들지 않는다.</li>
<li>프로그램/모집 상세: 대상, 과제, 기대 결과물, 진행 방식, 커리큘럼, 교육자, 일정·정원·가격, 신청 절차, FAQ.</li>
<li>신청·일정 선택·신청 관리·결제 안내·결과·확정 화면: 사이트 내 폼과 외부 결제 연동을 제안한다. 제출 완료와 참여 확정을 구분한다. 회원가입 없이 이메일 본인 확인으로 관리하는 안이다.</li>
<li>스타트업 컨설팅 상세: 팀 빌딩·스타트업 서비스 플랜·디자인 리뷰·지원자 포트폴리오 검토 및 면접관 참여의 대상 문제, 수행 범위, 결과물 예시, 협업 방식, 전문성 근거, 문의 경로. 초기에는 하나의 상세 페이지에 지원 영역을 정리하는 안을 제안한다.</li>
</ul>
</li>
<li>인사이트: 아티클 목록과 시리즈 탐색.<ul>
<li>시리즈 상세: 시리즈 소개와 순서가 있는 글 목록.</li>
<li>아티클 상세: 본문, 저자, 시리즈, 관련 글·관련 교육.</li>
</ul>
</li>
<li>OFFSET 소개: 교육·컨설팅 철학, 운영 방식, 운영자 소개와 검증 가능한 경력. 초기 분량이 적으면 홈의 소개 섹션으로 통합하는 안도 검토한다.</li>
<li>운영 안내: 문의 및 신청·판매 방식에 필요한 정책 페이지. 내용은 운영 방식 확정 후 작성.</li>
<li>어드민: 인증된 운영자의 콘텐츠 작성·미리보기·발행·관리.</li>
<li>향후 확장 후보: 이북 목록·상세·구매·전달. 첫 출시 포함 여부 미정.</li>
</ul>
<p>최상위 메뉴 제안: 서비스(홈 내부 이동) / 인사이트 / 소개(독립 페이지 또는 홈 내부 이동 미정). Discord는 교육 참여자 안내 경로로 제공하는 안을 제안한다.</p>
<h2 id="section-5-콘텐츠-모델-제안">5. 콘텐츠 모델 제안</h2><table>
<thead>
<tr>
<th>종류</th>
<th>주요 정보</th>
<th>관계</th>
</tr>
</thead>
<tbody><tr>
<td>프로그램</td>
<td>소개, 대상 경력, 해결 과제, 형식, 상시/모집 구분, 커리큘럼, 교육자</td>
<td>모집형은 여러 모집 회차를 가질 수 있고 상시형은 모집 회차 없이 신청 가능</td>
</tr>
<tr>
<td>모집 회차</td>
<td>일정, 정원, 가격, 모집 상태, 신청 방식</td>
<td>프로그램에 연결</td>
</tr>
<tr>
<td>기업 컨설팅</td>
<td>소개, 대상 문제, 제공 범위, 결과물, 협업 방식, 문의 경로</td>
<td>홈 서비스 목록에 노출; 교육 모집 회차와 별개</td>
</tr>
<tr>
<td>기업 문의</td>
<td>조직·담당자, 과제 설명, 연락 수단, 일정 등 최소 필요 정보</td>
<td>수집 항목·접수 수단·처리 상태는 미정</td>
</tr>
<tr>
<td>교육자</td>
<td>이름, 역할, 소개, 확인된 경력·링크</td>
<td>프로그램·아티클과 연결</td>
</tr>
<tr>
<td>아티클</td>
<td>제목, 요약, 본문, 이미지, 저자, 발행일</td>
<td>시리즈 및 관련 프로그램과 연결</td>
</tr>
<tr>
<td>시리즈</td>
<td>제목, 설명, 표지, 글 순서</td>
<td>여러 아티클 포함</td>
</tr>
<tr>
<td>신청</td>
<td>대상 서비스, 모집형의 경우 대상 모집 회차, 필요한 신청 정보, 처리 상태</td>
<td>상시형과 모집형 모두 지원; 수집 항목·보관 정책·처리 방식 미정</td>
</tr>
<tr>
<td>이북(향후)</td>
<td>소개, 목차, 가격, 파일·판 정보</td>
<td>관련 시리즈와 연결 가능</td>
</tr>
</tbody></table>
<p>경력 단계(취업 준비·주니어·시니어·리드), 해결 과제(포트폴리오·이직·프로젝트 등), 교육 형식(1:1·그룹 등)은 서로 다른 속성으로 관리한다. 분류명은 실제 교육 구성에 맞춰 확정한다.</p>
<h2 id="section-6-신뢰-형성-원칙-제안">6. 신뢰 형성 원칙 제안</h2><ul>
<li>홈은 OFFSET이 돕는 대상과 해결 과제, 교육·컨설팅 방식을 중심으로 구성한다.</li>
<li>교육자는 소개 페이지와 모집 상세에서 해당 교육을 이끌 수 있는 근거와 함께 보여준다.</li>
<li>컨설팅에는 운영자의 실제 역할과 경험을 구체적으로 제시한다. 팀 빌딩이 채용·조직 설계·코칭 중 어디까지인지, 서비스 빌딩이 자문·설계·구현 중 어디까지인지 확정하기 전 수행 가능 범위를 과장하지 않는다.</li>
<li>모집 상세에 누가 적합한지, 무엇을 하며 어떤 결과물을 만드는지 구체적으로 명시한다.</li>
<li>후기·참여자 결과물은 실제 자료와 공개 동의가 있을 때만 사용한다. 자료가 없다면 교육 과정과 예시로 설명한다.</li>
</ul>
<h2 id="section-7-어드민-범위-제안">7. 어드민 범위 제안</h2><ul>
<li>운영자 로그인 및 권한 확인.</li>
<li>홈 서비스 노출·순서, 프로그램·회차·기업 컨설팅·교육자·시리즈·아티클 생성 및 편집.</li>
<li>이미지 업로드, 대체 텍스트, 콘텐츠 노출 순서 관리.</li>
<li>초안·미리보기·발행·비공개. 콘텐츠 발행 상태와 모집 상태는 별개로 관리.</li>
<li>상시 서비스의 접수 가능·일시 중단, 모집형의 모집 예정·모집 중·마감 상태 및 신청 버튼 제어.</li>
<li>신청 목록·보완 요청·승인·결제 안내·확정 상태, 통합 일정 및 정원 확보 관리.</li>
<li>기업 문의 접수 경로를 관리한다. 자체 접수를 선택하면 문의 목록과 처리 상태를 관리한다. 자동 접수 확인·운영자 알림 여부는 신청 흐름 설계에서 결정한다.</li>
<li>결제 연동과 상태 검증·환불 추적은 첫 버전 범위에 제안한다. 일반 회원 계정, 자동 Discord 초대, 이북 파일 전달은 별도 범위다.</li>
</ul>
<h2 id="section-8-첫-출시-범위-제안과-검증-기준">8. 첫 출시 범위 제안과 검증 기준</h2><p>첫 출시 제안: 서비스 목록을 포함한 홈, 개별 교육·모집 상세, 기업 컨설팅 상세·문의 경로, 교육 신청 경로, 인사이트·시리즈·아티클, 소개(홈 통합 가능), 콘텐츠 어드민. 별도 프로그램 목록 페이지는 제외한다.</p>
<p>완료 기준 초안:</p>
<ul>
<li>모집 상세에서 대상·진행 방식·일정·신청 조건을 확인하고 실제 신청을 완료할 수 있다.</li>
<li>홈에서 제공 서비스를 확인하고 개별 상세 또는 신청·문의로 이동할 수 있다.</li>
<li>기업 컨설팅에서 제공 범위를 확인하고 문의를 접수할 수 있다. 접수 완료와 계약·착수 확정을 구분한다.</li>
<li>마감된 모집은 새 신청을 받지 않고 상태가 명확히 표시된다.</li>
<li>관리자가 초안을 미리보고 발행하면 공개 사이트에 반영된다. 미발행 콘텐츠는 공개되지 않는다.</li>
<li>아티클에서 같은 시리즈와 관련 교육으로 이동할 수 있다.</li>
<li>모바일에서도 주요 정보 확인과 신청이 가능하다.</li>
<li>참여자 커뮤니티 초대는 확정된 자격 기준에 따라 운영한다.</li>
</ul>
<p>성과 확인 후보: 모집 상세 방문 대비 신청 완료, 신청 대비 실제 참여, 아티클에서 교육으로 이동, 컨설팅 문의 및 실제 상담·계약. 교육과 컨설팅 성과는 구분하며 목표 수치·측정 방식은 아직 정하지 않는다.</p>
<h2 id="section-9-합의된-협업-배포-규칙">9. 합의된 협업·배포 규칙</h2><ul>
<li>편집 가능한 Figma 화면으로 설계한다. 사용자의 직접 수정 이후 최신 프레임과 개발 기준 상태를 비교하여 코드에 반영한다.</li>
<li>수정만으로 자동 배포하지 않는다.</li>
<li>‘QA에 올리자’ 지시가 있으면 QA 서버에 배포한다.</li>
<li>‘배포하자’ 지시가 있으면 QA에서 검증한 버전을 실서버에 배포한다.</li>
<li>QA와 실서버의 데이터·업로드 저장소를 분리하는 설계를 적용한다.</li>
</ul>
<h2 id="section-10-다음-결정-사항">10. 다음 결정 사항</h2><ol>
<li>네 서비스의 출시 시점별 접수 여부·가격·수용 인원과 우선 대상.</li>
<li>서비스별 신청·결제 순서는 확정. 결제 사업자·수단·가격·기한·일정 변경·취소·환불 정책은 추가 확정.</li>
<li>이북 판매의 첫 출시 포함 여부.</li>
<li>활용 가능한 교육자 경력·후기·결과물, 초기 아티클 수량.</li>
<li>참고 디자인 시스템과 Figma 작업 파일.</li>
<li>교육·컨설팅 브랜드라는 포지셔닝 및 운영자 소개 비중.</li>
<li>스타트업 컨설팅의 구체적인 수행 범위와 동시 운영 가능량. 기업 채용 지원은 지원자 포트폴리오 검토와 면접관 참여로 확인됨. 검토 인원·면접 횟수·평가 전달 방식은 미정.</li>
<li>단회 코칭과 컨설팅의 회당 시간·진행 채널, 포트폴리오 코칭 4회의 간격, 프로젝트 워크샵의 개인/팀 과제·정원·회당 시간.</li>
<li>단회 참여자까지 포함할지 등 Discord 초대 자격.</li>
</ol>
<h2 id="section-참고">참고</h2><ul>
<li>사용자 제공: <a href="https://www.vibemafiaclub.com/" rel="noopener noreferrer">https://www.vibemafiaclub.com/</a> — 2026-09-12 확인한 홈은 개인 소개와 이력을 전면에 배치한다. OFFSET은 사용자 요청에 따라 플랫폼을 전면에 두는 방향이다.</li>
<li>사용자 제공: <a href="https://offset.quest/workshop/" rel="noopener noreferrer">https://offset.quest/workshop/</a> — 2026-09-12 HTML 본문 확인. 리뷰·수정 반복 방식을 참고하되 기존 그룹·오프라인 운영과 신규 1:1·온라인 운영을 구분한다.</li>
</ul>
<h2 id="section-캘린더-온라인-진행-보완">캘린더·온라인 진행 보완</h2><p>운영자의 가능 일정 공개, 고객의 웹사이트 캘린더 예약, Google Calendar·Meet 연동을 설계 범위에 포함한다. 1:1 코칭은 단일 시간 예약, 포트폴리오 코칭은 4회 일정 묶음별 1명 모집 및 검토 후 결제, 워크샵은 고정 8회 일정·정원 관리 방식이다. 포트폴리오 일정 묶음은 제안이며 세부 규칙은 신청·예약·결제 설계 12장을 참고한다. 회원가입·전체 마이페이지는 MVP에서 제외하는 안을 유지한다.</p>
<p>예약 가능 시간은 운영자가 직접 선택·공개한 날짜·시간만 사용한다. Google Calendar 빈 시간 기반 자동 공개·자동 차단은 MVP에서 제외하며, 연동은 확정 일정·초대·Meet 관리에 사용한다.</p>
<p>고객용 캘린더는 Google Calendar 임베드가 아닌 OFFSET 독립 UI다. 직접 공개한 슬롯만 표시하고 결제·예약 확정 후 운영자 Google Calendar에 일정·Meet 링크를 생성하며 신청자 이메일로 캘린더 초대를 발송한다. 결제 전에는 Google 일정·고객 초대를 만들지 않는다.</p>
<h2 id="section-홈-정보-구조-초안">홈 정보 구조 초안</h2><p><a href="/documents?doc=home" rel="noopener noreferrer">홈 정보 구조 v0.1</a>을 추가했다. 제안 순서는 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 전문성 → 인사이트 → 푸터다. 별도 프로그램 목록은 만들지 않는다. 소개는 홈 통합을 제안하며 헤드라인·세부 카피·레이아웃은 와이어프레임 단계에서 검토한다.</p>
<h2 id="section-디자인-시스템-확정">디자인 시스템 확정</h2><p>사용자 지정으로 Montage를 전면 적용한다. Figma 작업 위치는 b5VKxmsX9NkkWTQsahPccI 파일의 v2(2099:2) 페이지다. <a href="/documents?doc=montage" rel="noopener noreferrer">Montage 적용 기준</a>에 확인된 토큰·레이아웃 기준 및 라이브러리 연결 상태를 기록했다.</p>
<h2 id="section-프로젝트-문서-사이트-2026-09-12-추가">프로젝트 문서 사이트 — 2026-09-12 추가</h2><p>사용자 요청에 따라 <code>/documents</code>에서 PRD, 신청·예약·결제 설계, 홈 정보 구조, Montage 적용 기준을 열람한다. 등록된 Markdown 파일을 원본으로 사용하며, 문서 검색·목차·원문 다운로드·버전별 열람·추가/삭제 비교·특정 버전 링크를 제공한다.</p>
<p>문서 내용이 바뀌면 개발 서버의 파일 저장 감지 또는 빌드 시 새 리비전을 자동 기록한다. 변경이 없는 재빌드는 버전을 추가하지 않는다. 기존 과거 원본이 없는 문서는 현재 내용을 r1 기준 버전으로 등록한다. 기록된 이력은 원본과 함께 Git에서 관리한다.</p>
<p>문서 자동 갱신과 서버 배포는 구분한다. QA·실서버 반영은 기존 사용자 배포 지시를 따른다. MVP 문서 페이지는 읽기 전용이며 웹에서 직접 업로드·편집하는 어드민은 포함하지 않는다.</p>
`,toc:[{id:`section-1-확인된-방향`,label:`1. 확인된 방향`,depth:2},{id:`section-2-제품-정의-제안`,label:`2. 제품 정의 제안`,depth:2},{id:`section-2-1-서비스-구성-사용자-제시-내용`,label:`2.1 서비스 구성 — 사용자 제시 내용`,depth:2},{id:`section-홈-서비스-목록-제안`,label:`홈 서비스 목록 제안`,depth:3},{id:`section-3-주요-방문-흐름`,label:`3. 주요 방문 흐름`,depth:2},{id:`section-4-사이트맵-제안`,label:`4. 사이트맵 제안`,depth:2},{id:`section-5-콘텐츠-모델-제안`,label:`5. 콘텐츠 모델 제안`,depth:2},{id:`section-6-신뢰-형성-원칙-제안`,label:`6. 신뢰 형성 원칙 제안`,depth:2},{id:`section-7-어드민-범위-제안`,label:`7. 어드민 범위 제안`,depth:2},{id:`section-8-첫-출시-범위-제안과-검증-기준`,label:`8. 첫 출시 범위 제안과 검증 기준`,depth:2},{id:`section-9-합의된-협업-배포-규칙`,label:`9. 합의된 협업·배포 규칙`,depth:2},{id:`section-10-다음-결정-사항`,label:`10. 다음 결정 사항`,depth:2},{id:`section-참고`,label:`참고`,depth:2},{id:`section-캘린더-온라인-진행-보완`,label:`캘린더·온라인 진행 보완`,depth:2},{id:`section-홈-정보-구조-초안`,label:`홈 정보 구조 초안`,depth:2},{id:`section-디자인-시스템-확정`,label:`디자인 시스템 확정`,depth:2},{id:`section-프로젝트-문서-사이트-2026-09-12-추가`,label:`프로젝트 문서 사이트 — 2026-09-12 추가`,depth:2}]},{revision:3,hash:`1cafb41542972d164def2fbf934010196f4e5778660491978d414875c2ff84c6`,recordedAt:`2026-09-12T14:00:34.917Z`,markdown:`# OFFSET 리뉴얼 PRD v0.9

작성일: 2026-09-12. 상태: 논의용 초안. 사용자 발언으로 확인한 방향과 제안을 구분한다. 기존 구현의 기능·화면·기술 선택을 새 요구사항으로 자동 승계하지 않는다.

## 1. 확인된 방향

- OFFSET은 프로덕트 디자이너 대상 교육에서 출발하며, 기업 컨설팅까지 포함하는 브랜드 포지셔닝을 논의 중이다.
- 1인 운영과 적은 프로그램 수를 고려하여 별도 프로그램 목록 페이지 없이 홈에서 서비스 목록을 제공한다. 개별 서비스·모집 상세는 유지하는 안을 제안한다.
- 스타트업 컨설팅은 상시·1회성 서비스로 포함한다. 영역은 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여다. 각 영역의 구체적인 수행 범위는 미정이다.
- 경력 단계와 해결하려는 과제에 맞춘 교육으로 실력 향상을 극대화한다. 사용자가 제시한 서비스 구성은 1:1 코칭, 포트폴리오 코칭, 프로젝트 워크샵, 스타트업 컨설팅 네 가지다. 출시 시점별 실제 모집 여부는 별도 결정한다.
- OFFSET 브랜드를 앞세우고 운영자의 전문성으로 신뢰를 뒷받침하고자 한다. 개인을 드러내는 비중은 기업 컨설팅 추가와 함께 재검토 중이다.
- 방문자가 신뢰를 얻고 모집에 지원하여 실제 참여하는 것이 핵심 목표다.
- LinkedIn에 꾸준히 글을 게시하고 사이트에도 인사이트·실용 콘텐츠를 축적한다.
- 시리즈 후보는 ‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’이다. 장기적으로 콘텐츠를 엮어 이북으로 판매하고자 한다.
- 참여자 중심의 Discord 커뮤니티를 고려한다. 가입 자격과 운영 범위는 미정이다.

기업 채용 지원은 사용자 확인에 따라 지원자의 포트폴리오 검토와 면접관 참여를 의미한다. 개인 대상 1:1 코칭의 포트폴리오 피드백·가상 인터뷰와 구분한다.

## 2. 제품 정의 제안

개인 디자이너의 성장과 기업의 제품·디자인 조직 과제 해결을 돕는 교육·컨설팅 브랜드. 이 정의는 제안이며 사용자 확정 전이다.

브랜드 문구 초안: ‘디자이너의 성장부터, 팀과 제품의 다음 단계까지.’ OFFSET을 브랜드 이름으로 제시하고 교육·컨설팅을 설명 문구로 사용한다. 전문성을 드러내는 정도는 별도 결정한다. 효과를 보장하는 수치나 검증되지 않은 성과는 사용하지 않는다.

## 2.1 서비스 구성 — 사용자 제시 내용

| 서비스 | 접수 방식 | 회차·기간 | 내용 및 형식 |
|---|---|---|---|
| 1:1 코칭 | 상시 | 1회 | 커리어 조언, 포트폴리오 코칭, 프로젝트 피드백, 가상 인터뷰 체험. 시간·온라인 여부는 미정 |
| 포트폴리오 코칭 | 모집형 | 총 4회 | 1:1 온라인. 매회 포트폴리오 사전 검토 1시간 + 온라인 대면 리뷰 1시간으로 이해한 운영안 |
| 프로젝트 워크샵 | 모집형 | 8주·총 8회 | 앱 기획부터 디자인 완성까지 디자인 프로세스 경험. 개인/팀 과제, 수업 인원·회당 시간·온라인 여부는 미정 |
| 스타트업 컨설팅 | 상시 | 1회 | 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여. 시간·수행 범위·가격 방식은 미정 |

포트폴리오 코칭의 1시간 사전 검토는 운영자의 준비 시간이며 참여자의 온라인 수업 시간과 구분한다. 매회 적용 시 참여자당 총 운영 시간은 최소 8시간(사전 검토 4시간 + 온라인 리뷰 4시간)이다. 일정 조율·회차 외 질문 대응은 별도다. 총 4회가 4주인지, 회차별 제출 시점은 미정이다.

기존 workshop 페이지에서 참고할 원칙: 기존 포트폴리오를 제출하고, 리뷰 후 직접 수정하여 다음 회차에서 다시 검토하는 반복 과정. 2026-09-12 확인한 기존 페이지는 그룹·오프라인 과정이므로 신규 과정에는 사용자가 지정한 1:1·온라인·4회를 우선 적용한다. 기존 가격, 인원, 기간, 선발·결제·환불 규칙은 자동 승계하지 않는다.

### 홈 서비스 목록 제안

개인 대상 세 서비스와 기업 대상 한 서비스를 홈에서 한눈에 제공한다. 기본 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅이며 어드민에서 조정한다. 카드에는 이름, 해결 과제 한 줄, 상시/모집 상태, 회차·방식, 상세 링크를 표시한다.

- 1:1 코칭: ‘지금 막힌 문제를 한 번의 코칭으로 점검합니다.’ 단회 진단·조언이라는 역할을 설명한다.
- 포트폴리오 코칭: ‘4회의 리뷰와 수정을 통해 포트폴리오를 다듬습니다.’ 반복 개선이라는 역할을 설명한다.
- 프로젝트 워크샵: ‘8주 동안 앱 기획부터 디자인 완성까지 경험합니다.’ 새로운 프로젝트를 만드는 과정이라는 역할을 설명한다.
- 스타트업 컨설팅: ‘팀·서비스·디자인·채용의 당면 과제를 함께 검토합니다.’ 단회 서비스의 구체적인 범위는 추가 확정한다.

상시 서비스에는 접수 가능·일시 중단 상태를, 모집형에는 모집 예정·모집 중·마감 상태와 모집 단위를 둔다. 상시는 무제한 수용 또는 즉시 예약 확정을 의미하지 않는다. 모집 종료 후에도 상세 설명을 열람할 수 있게 하는 안을 제안한다.

## 3. 주요 방문 흐름

신청·예약·결제 상세는 [상세 설계 v0.4](OFFSET-BOOKING-SPEC.md)을 따른다. 확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭·프로젝트 워크샵은 검토 후 결제, 스타트업 컨설팅은 협의 후 결제. 가격·세부 정책·결제 사업자는 미정이다.


1. 교육 홍보 → 해당 모집 상세 → 적합성·방식·교육자·조건 확인 → 신청 → 운영 절차에 따른 참여 확정.
2. LinkedIn·검색 → 아티클 → 관련 시리즈·교육 → 모집 상세 → 신청.
3. 직접 방문 → 홈에서 브랜드와 서비스 목록 확인 → 해당 서비스·모집 상세 → 신청 또는 문의.
4. 참여 확정 → 참여 안내 → 자격 확인 후 Discord 초대. 자동화 여부는 미정.
5. 기업 방문 → 홈의 기업 컨설팅 → 수행 범위·방식·전문성 확인 → 프로젝트 문의 → 적합성·일정·범위 협의. 상시 문의가 즉시 착수 가능함을 뜻하지 않도록 안내한다.

모든 유입을 홈으로 우회시키지 않는다. 모집 상세만 방문해도 충분히 판단할 수 있어야 한다.

## 4. 사이트맵 제안

- 홈: 브랜드의 가치, 개인 교육 및 기업 컨설팅 서비스 목록, 진행 방식, 운영자 전문성과 확인 가능한 신뢰 근거, 대표 콘텐츠.
  - 서비스 목록은 홈 안에 배치한다. 개인을 위한 교육·코칭과 기업을 위한 컨설팅을 구분하며 별도 목록 페이지·필터는 만들지 않는다.
  - 프로그램/모집 상세: 대상, 과제, 기대 결과물, 진행 방식, 커리큘럼, 교육자, 일정·정원·가격, 신청 절차, FAQ.
  - 신청·일정 선택·신청 관리·결제 안내·결과·확정 화면: 사이트 내 폼과 외부 결제 연동을 제안한다. 제출 완료와 참여 확정을 구분한다. 회원가입 없이 이메일 본인 확인으로 관리하는 안이다.
  - 스타트업 컨설팅 상세: 팀 빌딩·스타트업 서비스 플랜·디자인 리뷰·지원자 포트폴리오 검토 및 면접관 참여의 대상 문제, 수행 범위, 결과물 예시, 협업 방식, 전문성 근거, 문의 경로. 초기에는 하나의 상세 페이지에 지원 영역을 정리하는 안을 제안한다.
- 인사이트: 아티클 목록과 시리즈 탐색.
  - 시리즈 상세: 시리즈 소개와 순서가 있는 글 목록.
  - 아티클 상세: 본문, 저자, 시리즈, 관련 글·관련 교육.
- OFFSET 소개: 교육·컨설팅 철학, 운영 방식, 운영자 소개와 검증 가능한 경력. 초기 분량이 적으면 홈의 소개 섹션으로 통합하는 안도 검토한다.
- 운영 안내: 문의 및 신청·판매 방식에 필요한 정책 페이지. 내용은 운영 방식 확정 후 작성.
- 어드민: 인증된 운영자의 콘텐츠 작성·미리보기·발행·관리.
- 향후 확장 후보: 이북 목록·상세·구매·전달. 첫 출시 포함 여부 미정.

최상위 메뉴 제안: 서비스(홈 내부 이동) / 인사이트 / 소개(독립 페이지 또는 홈 내부 이동 미정). Discord는 교육 참여자 안내 경로로 제공하는 안을 제안한다.

## 5. 콘텐츠 모델 제안

| 종류 | 주요 정보 | 관계 |
|---|---|---|
| 프로그램 | 소개, 대상 경력, 해결 과제, 형식, 상시/모집 구분, 커리큘럼, 교육자 | 모집형은 여러 모집 회차를 가질 수 있고 상시형은 모집 회차 없이 신청 가능 |
| 모집 회차 | 일정, 정원, 가격, 모집 상태, 신청 방식 | 프로그램에 연결 |
| 기업 컨설팅 | 소개, 대상 문제, 제공 범위, 결과물, 협업 방식, 문의 경로 | 홈 서비스 목록에 노출; 교육 모집 회차와 별개 |
| 기업 문의 | 조직·담당자, 과제 설명, 연락 수단, 일정 등 최소 필요 정보 | 수집 항목·접수 수단·처리 상태는 미정 |
| 교육자 | 이름, 역할, 소개, 확인된 경력·링크 | 프로그램·아티클과 연결 |
| 아티클 | 제목, 요약, 본문, 이미지, 저자, 발행일 | 시리즈 및 관련 프로그램과 연결 |
| 시리즈 | 제목, 설명, 표지, 글 순서 | 여러 아티클 포함 |
| 신청 | 대상 서비스, 모집형의 경우 대상 모집 회차, 필요한 신청 정보, 처리 상태 | 상시형과 모집형 모두 지원; 수집 항목·보관 정책·처리 방식 미정 |
| 이북(향후) | 소개, 목차, 가격, 파일·판 정보 | 관련 시리즈와 연결 가능 |

경력 단계(취업 준비·주니어·시니어·리드), 해결 과제(포트폴리오·이직·프로젝트 등), 교육 형식(1:1·그룹 등)은 서로 다른 속성으로 관리한다. 분류명은 실제 교육 구성에 맞춰 확정한다.

## 6. 신뢰 형성 원칙 제안

- 홈은 OFFSET이 돕는 대상과 해결 과제, 교육·컨설팅 방식을 중심으로 구성한다.
- 교육자는 소개 페이지와 모집 상세에서 해당 교육을 이끌 수 있는 근거와 함께 보여준다.
- 컨설팅에는 운영자의 실제 역할과 경험을 구체적으로 제시한다. 팀 빌딩이 채용·조직 설계·코칭 중 어디까지인지, 서비스 빌딩이 자문·설계·구현 중 어디까지인지 확정하기 전 수행 가능 범위를 과장하지 않는다.
- 모집 상세에 누가 적합한지, 무엇을 하며 어떤 결과물을 만드는지 구체적으로 명시한다.
- 후기·참여자 결과물은 실제 자료와 공개 동의가 있을 때만 사용한다. 자료가 없다면 교육 과정과 예시로 설명한다.

## 7. 어드민 범위 제안

- 운영자 로그인 및 권한 확인.
- 홈 서비스 노출·순서, 프로그램·회차·기업 컨설팅·교육자·시리즈·아티클 생성 및 편집.
- 이미지 업로드, 대체 텍스트, 콘텐츠 노출 순서 관리.
- 초안·미리보기·발행·비공개. 콘텐츠 발행 상태와 모집 상태는 별개로 관리.
- 상시 서비스의 접수 가능·일시 중단, 모집형의 모집 예정·모집 중·마감 상태 및 신청 버튼 제어.
- 신청 목록·보완 요청·승인·결제 안내·확정 상태, 통합 일정 및 정원 확보 관리.
- 기업 문의 접수 경로를 관리한다. 자체 접수를 선택하면 문의 목록과 처리 상태를 관리한다. 자동 접수 확인·운영자 알림 여부는 신청 흐름 설계에서 결정한다.
- 결제 연동과 상태 검증·환불 추적은 첫 버전 범위에 제안한다. 일반 회원 계정, 자동 Discord 초대, 이북 파일 전달은 별도 범위다.

## 8. 첫 출시 범위 제안과 검증 기준

첫 출시 제안: 서비스 목록을 포함한 홈, 개별 교육·모집 상세, 기업 컨설팅 상세·문의 경로, 교육 신청 경로, 인사이트·시리즈·아티클, 소개(홈 통합 가능), 콘텐츠 어드민. 별도 프로그램 목록 페이지는 제외한다.

완료 기준 초안:

- 모집 상세에서 대상·진행 방식·일정·신청 조건을 확인하고 실제 신청을 완료할 수 있다.
- 홈에서 제공 서비스를 확인하고 개별 상세 또는 신청·문의로 이동할 수 있다.
- 기업 컨설팅에서 제공 범위를 확인하고 문의를 접수할 수 있다. 접수 완료와 계약·착수 확정을 구분한다.
- 마감된 모집은 새 신청을 받지 않고 상태가 명확히 표시된다.
- 관리자가 초안을 미리보고 발행하면 공개 사이트에 반영된다. 미발행 콘텐츠는 공개되지 않는다.
- 아티클에서 같은 시리즈와 관련 교육으로 이동할 수 있다.
- 모바일에서도 주요 정보 확인과 신청이 가능하다.
- 참여자 커뮤니티 초대는 확정된 자격 기준에 따라 운영한다.

성과 확인 후보: 모집 상세 방문 대비 신청 완료, 신청 대비 실제 참여, 아티클에서 교육으로 이동, 컨설팅 문의 및 실제 상담·계약. 교육과 컨설팅 성과는 구분하며 목표 수치·측정 방식은 아직 정하지 않는다.

## 9. 합의된 협업·배포 규칙

- 편집 가능한 Figma 화면으로 설계한다. 사용자의 직접 수정 이후 최신 프레임과 개발 기준 상태를 비교하여 코드에 반영한다.
- 수정만으로 자동 배포하지 않는다.
- ‘QA에 올리자’ 지시가 있으면 QA 서버에 배포한다.
- ‘배포하자’ 지시가 있으면 QA에서 검증한 버전을 실서버에 배포한다.
- QA와 실서버의 데이터·업로드 저장소를 분리하는 설계를 적용한다.

## 10. 다음 결정 사항

1. 네 서비스의 출시 시점별 접수 여부·가격·수용 인원과 우선 대상.
2. 서비스별 신청·결제 순서는 확정. 결제 사업자·수단·가격·기한·일정 변경·취소·환불 정책은 추가 확정.
3. 이북 판매의 첫 출시 포함 여부.
4. 활용 가능한 교육자 경력·후기·결과물, 초기 아티클 수량.
5. 참고 디자인 시스템과 Figma 작업 파일.
6. 교육·컨설팅 브랜드라는 포지셔닝 및 운영자 소개 비중.
7. 스타트업 컨설팅의 구체적인 수행 범위와 동시 운영 가능량. 기업 채용 지원은 지원자 포트폴리오 검토와 면접관 참여로 확인됨. 검토 인원·면접 횟수·평가 전달 방식은 미정.
8. 단회 코칭과 컨설팅의 회당 시간·진행 채널, 포트폴리오 코칭 4회의 간격, 프로젝트 워크샵의 개인/팀 과제·정원·회당 시간.
9. 단회 참여자까지 포함할지 등 Discord 초대 자격.

## 참고

- 사용자 제공: https://www.vibemafiaclub.com/ — 2026-09-12 확인한 홈은 개인 소개와 이력을 전면에 배치한다. OFFSET은 사용자 요청에 따라 플랫폼을 전면에 두는 방향이다.
- 사용자 제공: https://offset.quest/workshop/ — 2026-09-12 HTML 본문 확인. 리뷰·수정 반복 방식을 참고하되 기존 그룹·오프라인 운영과 신규 1:1·온라인 운영을 구분한다.

## 캘린더·온라인 진행 보완

운영자의 가능 일정 공개, 고객의 웹사이트 캘린더 예약, Google Calendar·Meet 연동을 설계 범위에 포함한다. 1:1 코칭은 단일 시간 예약, 포트폴리오 코칭은 4회 일정 묶음별 1명 모집 및 검토 후 결제, 워크샵은 고정 8회 일정·정원 관리 방식이다. 포트폴리오 일정 묶음은 제안이며 세부 규칙은 신청·예약·결제 설계 12장을 참고한다. 회원가입·전체 마이페이지는 MVP에서 제외하는 안을 유지한다.

예약 가능 시간은 운영자가 직접 선택·공개한 날짜·시간만 사용한다. Google Calendar 빈 시간 기반 자동 공개·자동 차단은 MVP에서 제외하며, 연동은 확정 일정·초대·Meet 관리에 사용한다.

고객용 캘린더는 Google Calendar 임베드가 아닌 OFFSET 독립 UI다. 직접 공개한 슬롯만 표시하고 결제·예약 확정 후 운영자 Google Calendar에 일정·Meet 링크를 생성하며 신청자 이메일로 캘린더 초대를 발송한다. 결제 전에는 Google 일정·고객 초대를 만들지 않는다.

## 홈 정보 구조 초안

[홈 정보 구조 v0.1](OFFSET-HOME-IA.md)을 추가했다. 제안 순서는 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 전문성 → 인사이트 → 푸터다. 별도 프로그램 목록은 만들지 않는다. 소개는 홈 통합을 제안하며 헤드라인·세부 카피·레이아웃은 와이어프레임 단계에서 검토한다.

## 디자인 시스템 확정

사용자 지정으로 Montage를 전면 적용한다. Figma 작업 위치는 b5VKxmsX9NkkWTQsahPccI 파일의 v2(2099:2) 페이지다. [Montage 적용 기준](OFFSET-MONTAGE.md)에 확인된 토큰·레이아웃 기준 및 라이브러리 연결 상태를 기록했다.

## 프로젝트 문서 사이트 — 2026-09-12 추가

사용자 요청에 따라 \`/documents\`에서 PRD, 신청·예약·결제 설계, 홈 정보 구조, Montage 적용 기준을 열람한다. 등록된 Markdown 파일을 원본으로 사용하며, 문서 검색·목차·원문 다운로드·버전별 열람·추가/삭제 비교·특정 버전 링크를 제공한다.

문서 내용이 바뀌면 개발 서버의 파일 저장 감지 또는 빌드 시 새 리비전을 자동 기록한다. 변경이 없는 재빌드는 버전을 추가하지 않는다. 기존 과거 원본이 없는 문서는 현재 내용을 r1 기준 버전으로 등록한다. 기록된 이력은 원본과 함께 Git에서 관리한다.

문서 자동 갱신과 서버 배포는 구분한다. QA·실서버 반영은 기존 사용자 배포 지시를 따른다. MVP 문서 페이지는 읽기 전용이며 웹에서 직접 업로드·편집하는 어드민은 포함하지 않는다.

2026-09-12 접근 정책 변경: 문서 페이지는 운영자 본인만 접근한다. ChatGPT 로그인으로 확인한 계정을 서버에서 허용 목록과 비교하며, 비로그인·다른 계정에는 원문과 이력을 전달하지 않는다. QA·실서버 모두 동일하게 적용한다. 사용자가 두 환경 배포를 요청했다.
`,html:`<h1 id="section-offset-리뉴얼-prd-v0-9">OFFSET 리뉴얼 PRD v0.9</h1><p>작성일: 2026-09-12. 상태: 논의용 초안. 사용자 발언으로 확인한 방향과 제안을 구분한다. 기존 구현의 기능·화면·기술 선택을 새 요구사항으로 자동 승계하지 않는다.</p>
<h2 id="section-1-확인된-방향">1. 확인된 방향</h2><ul>
<li>OFFSET은 프로덕트 디자이너 대상 교육에서 출발하며, 기업 컨설팅까지 포함하는 브랜드 포지셔닝을 논의 중이다.</li>
<li>1인 운영과 적은 프로그램 수를 고려하여 별도 프로그램 목록 페이지 없이 홈에서 서비스 목록을 제공한다. 개별 서비스·모집 상세는 유지하는 안을 제안한다.</li>
<li>스타트업 컨설팅은 상시·1회성 서비스로 포함한다. 영역은 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여다. 각 영역의 구체적인 수행 범위는 미정이다.</li>
<li>경력 단계와 해결하려는 과제에 맞춘 교육으로 실력 향상을 극대화한다. 사용자가 제시한 서비스 구성은 1:1 코칭, 포트폴리오 코칭, 프로젝트 워크샵, 스타트업 컨설팅 네 가지다. 출시 시점별 실제 모집 여부는 별도 결정한다.</li>
<li>OFFSET 브랜드를 앞세우고 운영자의 전문성으로 신뢰를 뒷받침하고자 한다. 개인을 드러내는 비중은 기업 컨설팅 추가와 함께 재검토 중이다.</li>
<li>방문자가 신뢰를 얻고 모집에 지원하여 실제 참여하는 것이 핵심 목표다.</li>
<li>LinkedIn에 꾸준히 글을 게시하고 사이트에도 인사이트·실용 콘텐츠를 축적한다.</li>
<li>시리즈 후보는 ‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’이다. 장기적으로 콘텐츠를 엮어 이북으로 판매하고자 한다.</li>
<li>참여자 중심의 Discord 커뮤니티를 고려한다. 가입 자격과 운영 범위는 미정이다.</li>
</ul>
<p>기업 채용 지원은 사용자 확인에 따라 지원자의 포트폴리오 검토와 면접관 참여를 의미한다. 개인 대상 1:1 코칭의 포트폴리오 피드백·가상 인터뷰와 구분한다.</p>
<h2 id="section-2-제품-정의-제안">2. 제품 정의 제안</h2><p>개인 디자이너의 성장과 기업의 제품·디자인 조직 과제 해결을 돕는 교육·컨설팅 브랜드. 이 정의는 제안이며 사용자 확정 전이다.</p>
<p>브랜드 문구 초안: ‘디자이너의 성장부터, 팀과 제품의 다음 단계까지.’ OFFSET을 브랜드 이름으로 제시하고 교육·컨설팅을 설명 문구로 사용한다. 전문성을 드러내는 정도는 별도 결정한다. 효과를 보장하는 수치나 검증되지 않은 성과는 사용하지 않는다.</p>
<h2 id="section-2-1-서비스-구성-사용자-제시-내용">2.1 서비스 구성 — 사용자 제시 내용</h2><table>
<thead>
<tr>
<th>서비스</th>
<th>접수 방식</th>
<th>회차·기간</th>
<th>내용 및 형식</th>
</tr>
</thead>
<tbody><tr>
<td>1:1 코칭</td>
<td>상시</td>
<td>1회</td>
<td>커리어 조언, 포트폴리오 코칭, 프로젝트 피드백, 가상 인터뷰 체험. 시간·온라인 여부는 미정</td>
</tr>
<tr>
<td>포트폴리오 코칭</td>
<td>모집형</td>
<td>총 4회</td>
<td>1:1 온라인. 매회 포트폴리오 사전 검토 1시간 + 온라인 대면 리뷰 1시간으로 이해한 운영안</td>
</tr>
<tr>
<td>프로젝트 워크샵</td>
<td>모집형</td>
<td>8주·총 8회</td>
<td>앱 기획부터 디자인 완성까지 디자인 프로세스 경험. 개인/팀 과제, 수업 인원·회당 시간·온라인 여부는 미정</td>
</tr>
<tr>
<td>스타트업 컨설팅</td>
<td>상시</td>
<td>1회</td>
<td>팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여. 시간·수행 범위·가격 방식은 미정</td>
</tr>
</tbody></table>
<p>포트폴리오 코칭의 1시간 사전 검토는 운영자의 준비 시간이며 참여자의 온라인 수업 시간과 구분한다. 매회 적용 시 참여자당 총 운영 시간은 최소 8시간(사전 검토 4시간 + 온라인 리뷰 4시간)이다. 일정 조율·회차 외 질문 대응은 별도다. 총 4회가 4주인지, 회차별 제출 시점은 미정이다.</p>
<p>기존 workshop 페이지에서 참고할 원칙: 기존 포트폴리오를 제출하고, 리뷰 후 직접 수정하여 다음 회차에서 다시 검토하는 반복 과정. 2026-09-12 확인한 기존 페이지는 그룹·오프라인 과정이므로 신규 과정에는 사용자가 지정한 1:1·온라인·4회를 우선 적용한다. 기존 가격, 인원, 기간, 선발·결제·환불 규칙은 자동 승계하지 않는다.</p>
<h3 id="section-홈-서비스-목록-제안">홈 서비스 목록 제안</h3><p>개인 대상 세 서비스와 기업 대상 한 서비스를 홈에서 한눈에 제공한다. 기본 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅이며 어드민에서 조정한다. 카드에는 이름, 해결 과제 한 줄, 상시/모집 상태, 회차·방식, 상세 링크를 표시한다.</p>
<ul>
<li>1:1 코칭: ‘지금 막힌 문제를 한 번의 코칭으로 점검합니다.’ 단회 진단·조언이라는 역할을 설명한다.</li>
<li>포트폴리오 코칭: ‘4회의 리뷰와 수정을 통해 포트폴리오를 다듬습니다.’ 반복 개선이라는 역할을 설명한다.</li>
<li>프로젝트 워크샵: ‘8주 동안 앱 기획부터 디자인 완성까지 경험합니다.’ 새로운 프로젝트를 만드는 과정이라는 역할을 설명한다.</li>
<li>스타트업 컨설팅: ‘팀·서비스·디자인·채용의 당면 과제를 함께 검토합니다.’ 단회 서비스의 구체적인 범위는 추가 확정한다.</li>
</ul>
<p>상시 서비스에는 접수 가능·일시 중단 상태를, 모집형에는 모집 예정·모집 중·마감 상태와 모집 단위를 둔다. 상시는 무제한 수용 또는 즉시 예약 확정을 의미하지 않는다. 모집 종료 후에도 상세 설명을 열람할 수 있게 하는 안을 제안한다.</p>
<h2 id="section-3-주요-방문-흐름">3. 주요 방문 흐름</h2><p>신청·예약·결제 상세는 <a href="/documents?doc=booking" rel="noopener noreferrer">상세 설계 v0.4</a>을 따른다. 확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭·프로젝트 워크샵은 검토 후 결제, 스타트업 컨설팅은 협의 후 결제. 가격·세부 정책·결제 사업자는 미정이다.</p>
<ol>
<li>교육 홍보 → 해당 모집 상세 → 적합성·방식·교육자·조건 확인 → 신청 → 운영 절차에 따른 참여 확정.</li>
<li>LinkedIn·검색 → 아티클 → 관련 시리즈·교육 → 모집 상세 → 신청.</li>
<li>직접 방문 → 홈에서 브랜드와 서비스 목록 확인 → 해당 서비스·모집 상세 → 신청 또는 문의.</li>
<li>참여 확정 → 참여 안내 → 자격 확인 후 Discord 초대. 자동화 여부는 미정.</li>
<li>기업 방문 → 홈의 기업 컨설팅 → 수행 범위·방식·전문성 확인 → 프로젝트 문의 → 적합성·일정·범위 협의. 상시 문의가 즉시 착수 가능함을 뜻하지 않도록 안내한다.</li>
</ol>
<p>모든 유입을 홈으로 우회시키지 않는다. 모집 상세만 방문해도 충분히 판단할 수 있어야 한다.</p>
<h2 id="section-4-사이트맵-제안">4. 사이트맵 제안</h2><ul>
<li>홈: 브랜드의 가치, 개인 교육 및 기업 컨설팅 서비스 목록, 진행 방식, 운영자 전문성과 확인 가능한 신뢰 근거, 대표 콘텐츠.<ul>
<li>서비스 목록은 홈 안에 배치한다. 개인을 위한 교육·코칭과 기업을 위한 컨설팅을 구분하며 별도 목록 페이지·필터는 만들지 않는다.</li>
<li>프로그램/모집 상세: 대상, 과제, 기대 결과물, 진행 방식, 커리큘럼, 교육자, 일정·정원·가격, 신청 절차, FAQ.</li>
<li>신청·일정 선택·신청 관리·결제 안내·결과·확정 화면: 사이트 내 폼과 외부 결제 연동을 제안한다. 제출 완료와 참여 확정을 구분한다. 회원가입 없이 이메일 본인 확인으로 관리하는 안이다.</li>
<li>스타트업 컨설팅 상세: 팀 빌딩·스타트업 서비스 플랜·디자인 리뷰·지원자 포트폴리오 검토 및 면접관 참여의 대상 문제, 수행 범위, 결과물 예시, 협업 방식, 전문성 근거, 문의 경로. 초기에는 하나의 상세 페이지에 지원 영역을 정리하는 안을 제안한다.</li>
</ul>
</li>
<li>인사이트: 아티클 목록과 시리즈 탐색.<ul>
<li>시리즈 상세: 시리즈 소개와 순서가 있는 글 목록.</li>
<li>아티클 상세: 본문, 저자, 시리즈, 관련 글·관련 교육.</li>
</ul>
</li>
<li>OFFSET 소개: 교육·컨설팅 철학, 운영 방식, 운영자 소개와 검증 가능한 경력. 초기 분량이 적으면 홈의 소개 섹션으로 통합하는 안도 검토한다.</li>
<li>운영 안내: 문의 및 신청·판매 방식에 필요한 정책 페이지. 내용은 운영 방식 확정 후 작성.</li>
<li>어드민: 인증된 운영자의 콘텐츠 작성·미리보기·발행·관리.</li>
<li>향후 확장 후보: 이북 목록·상세·구매·전달. 첫 출시 포함 여부 미정.</li>
</ul>
<p>최상위 메뉴 제안: 서비스(홈 내부 이동) / 인사이트 / 소개(독립 페이지 또는 홈 내부 이동 미정). Discord는 교육 참여자 안내 경로로 제공하는 안을 제안한다.</p>
<h2 id="section-5-콘텐츠-모델-제안">5. 콘텐츠 모델 제안</h2><table>
<thead>
<tr>
<th>종류</th>
<th>주요 정보</th>
<th>관계</th>
</tr>
</thead>
<tbody><tr>
<td>프로그램</td>
<td>소개, 대상 경력, 해결 과제, 형식, 상시/모집 구분, 커리큘럼, 교육자</td>
<td>모집형은 여러 모집 회차를 가질 수 있고 상시형은 모집 회차 없이 신청 가능</td>
</tr>
<tr>
<td>모집 회차</td>
<td>일정, 정원, 가격, 모집 상태, 신청 방식</td>
<td>프로그램에 연결</td>
</tr>
<tr>
<td>기업 컨설팅</td>
<td>소개, 대상 문제, 제공 범위, 결과물, 협업 방식, 문의 경로</td>
<td>홈 서비스 목록에 노출; 교육 모집 회차와 별개</td>
</tr>
<tr>
<td>기업 문의</td>
<td>조직·담당자, 과제 설명, 연락 수단, 일정 등 최소 필요 정보</td>
<td>수집 항목·접수 수단·처리 상태는 미정</td>
</tr>
<tr>
<td>교육자</td>
<td>이름, 역할, 소개, 확인된 경력·링크</td>
<td>프로그램·아티클과 연결</td>
</tr>
<tr>
<td>아티클</td>
<td>제목, 요약, 본문, 이미지, 저자, 발행일</td>
<td>시리즈 및 관련 프로그램과 연결</td>
</tr>
<tr>
<td>시리즈</td>
<td>제목, 설명, 표지, 글 순서</td>
<td>여러 아티클 포함</td>
</tr>
<tr>
<td>신청</td>
<td>대상 서비스, 모집형의 경우 대상 모집 회차, 필요한 신청 정보, 처리 상태</td>
<td>상시형과 모집형 모두 지원; 수집 항목·보관 정책·처리 방식 미정</td>
</tr>
<tr>
<td>이북(향후)</td>
<td>소개, 목차, 가격, 파일·판 정보</td>
<td>관련 시리즈와 연결 가능</td>
</tr>
</tbody></table>
<p>경력 단계(취업 준비·주니어·시니어·리드), 해결 과제(포트폴리오·이직·프로젝트 등), 교육 형식(1:1·그룹 등)은 서로 다른 속성으로 관리한다. 분류명은 실제 교육 구성에 맞춰 확정한다.</p>
<h2 id="section-6-신뢰-형성-원칙-제안">6. 신뢰 형성 원칙 제안</h2><ul>
<li>홈은 OFFSET이 돕는 대상과 해결 과제, 교육·컨설팅 방식을 중심으로 구성한다.</li>
<li>교육자는 소개 페이지와 모집 상세에서 해당 교육을 이끌 수 있는 근거와 함께 보여준다.</li>
<li>컨설팅에는 운영자의 실제 역할과 경험을 구체적으로 제시한다. 팀 빌딩이 채용·조직 설계·코칭 중 어디까지인지, 서비스 빌딩이 자문·설계·구현 중 어디까지인지 확정하기 전 수행 가능 범위를 과장하지 않는다.</li>
<li>모집 상세에 누가 적합한지, 무엇을 하며 어떤 결과물을 만드는지 구체적으로 명시한다.</li>
<li>후기·참여자 결과물은 실제 자료와 공개 동의가 있을 때만 사용한다. 자료가 없다면 교육 과정과 예시로 설명한다.</li>
</ul>
<h2 id="section-7-어드민-범위-제안">7. 어드민 범위 제안</h2><ul>
<li>운영자 로그인 및 권한 확인.</li>
<li>홈 서비스 노출·순서, 프로그램·회차·기업 컨설팅·교육자·시리즈·아티클 생성 및 편집.</li>
<li>이미지 업로드, 대체 텍스트, 콘텐츠 노출 순서 관리.</li>
<li>초안·미리보기·발행·비공개. 콘텐츠 발행 상태와 모집 상태는 별개로 관리.</li>
<li>상시 서비스의 접수 가능·일시 중단, 모집형의 모집 예정·모집 중·마감 상태 및 신청 버튼 제어.</li>
<li>신청 목록·보완 요청·승인·결제 안내·확정 상태, 통합 일정 및 정원 확보 관리.</li>
<li>기업 문의 접수 경로를 관리한다. 자체 접수를 선택하면 문의 목록과 처리 상태를 관리한다. 자동 접수 확인·운영자 알림 여부는 신청 흐름 설계에서 결정한다.</li>
<li>결제 연동과 상태 검증·환불 추적은 첫 버전 범위에 제안한다. 일반 회원 계정, 자동 Discord 초대, 이북 파일 전달은 별도 범위다.</li>
</ul>
<h2 id="section-8-첫-출시-범위-제안과-검증-기준">8. 첫 출시 범위 제안과 검증 기준</h2><p>첫 출시 제안: 서비스 목록을 포함한 홈, 개별 교육·모집 상세, 기업 컨설팅 상세·문의 경로, 교육 신청 경로, 인사이트·시리즈·아티클, 소개(홈 통합 가능), 콘텐츠 어드민. 별도 프로그램 목록 페이지는 제외한다.</p>
<p>완료 기준 초안:</p>
<ul>
<li>모집 상세에서 대상·진행 방식·일정·신청 조건을 확인하고 실제 신청을 완료할 수 있다.</li>
<li>홈에서 제공 서비스를 확인하고 개별 상세 또는 신청·문의로 이동할 수 있다.</li>
<li>기업 컨설팅에서 제공 범위를 확인하고 문의를 접수할 수 있다. 접수 완료와 계약·착수 확정을 구분한다.</li>
<li>마감된 모집은 새 신청을 받지 않고 상태가 명확히 표시된다.</li>
<li>관리자가 초안을 미리보고 발행하면 공개 사이트에 반영된다. 미발행 콘텐츠는 공개되지 않는다.</li>
<li>아티클에서 같은 시리즈와 관련 교육으로 이동할 수 있다.</li>
<li>모바일에서도 주요 정보 확인과 신청이 가능하다.</li>
<li>참여자 커뮤니티 초대는 확정된 자격 기준에 따라 운영한다.</li>
</ul>
<p>성과 확인 후보: 모집 상세 방문 대비 신청 완료, 신청 대비 실제 참여, 아티클에서 교육으로 이동, 컨설팅 문의 및 실제 상담·계약. 교육과 컨설팅 성과는 구분하며 목표 수치·측정 방식은 아직 정하지 않는다.</p>
<h2 id="section-9-합의된-협업-배포-규칙">9. 합의된 협업·배포 규칙</h2><ul>
<li>편집 가능한 Figma 화면으로 설계한다. 사용자의 직접 수정 이후 최신 프레임과 개발 기준 상태를 비교하여 코드에 반영한다.</li>
<li>수정만으로 자동 배포하지 않는다.</li>
<li>‘QA에 올리자’ 지시가 있으면 QA 서버에 배포한다.</li>
<li>‘배포하자’ 지시가 있으면 QA에서 검증한 버전을 실서버에 배포한다.</li>
<li>QA와 실서버의 데이터·업로드 저장소를 분리하는 설계를 적용한다.</li>
</ul>
<h2 id="section-10-다음-결정-사항">10. 다음 결정 사항</h2><ol>
<li>네 서비스의 출시 시점별 접수 여부·가격·수용 인원과 우선 대상.</li>
<li>서비스별 신청·결제 순서는 확정. 결제 사업자·수단·가격·기한·일정 변경·취소·환불 정책은 추가 확정.</li>
<li>이북 판매의 첫 출시 포함 여부.</li>
<li>활용 가능한 교육자 경력·후기·결과물, 초기 아티클 수량.</li>
<li>참고 디자인 시스템과 Figma 작업 파일.</li>
<li>교육·컨설팅 브랜드라는 포지셔닝 및 운영자 소개 비중.</li>
<li>스타트업 컨설팅의 구체적인 수행 범위와 동시 운영 가능량. 기업 채용 지원은 지원자 포트폴리오 검토와 면접관 참여로 확인됨. 검토 인원·면접 횟수·평가 전달 방식은 미정.</li>
<li>단회 코칭과 컨설팅의 회당 시간·진행 채널, 포트폴리오 코칭 4회의 간격, 프로젝트 워크샵의 개인/팀 과제·정원·회당 시간.</li>
<li>단회 참여자까지 포함할지 등 Discord 초대 자격.</li>
</ol>
<h2 id="section-참고">참고</h2><ul>
<li>사용자 제공: <a href="https://www.vibemafiaclub.com/" rel="noopener noreferrer">https://www.vibemafiaclub.com/</a> — 2026-09-12 확인한 홈은 개인 소개와 이력을 전면에 배치한다. OFFSET은 사용자 요청에 따라 플랫폼을 전면에 두는 방향이다.</li>
<li>사용자 제공: <a href="https://offset.quest/workshop/" rel="noopener noreferrer">https://offset.quest/workshop/</a> — 2026-09-12 HTML 본문 확인. 리뷰·수정 반복 방식을 참고하되 기존 그룹·오프라인 운영과 신규 1:1·온라인 운영을 구분한다.</li>
</ul>
<h2 id="section-캘린더-온라인-진행-보완">캘린더·온라인 진행 보완</h2><p>운영자의 가능 일정 공개, 고객의 웹사이트 캘린더 예약, Google Calendar·Meet 연동을 설계 범위에 포함한다. 1:1 코칭은 단일 시간 예약, 포트폴리오 코칭은 4회 일정 묶음별 1명 모집 및 검토 후 결제, 워크샵은 고정 8회 일정·정원 관리 방식이다. 포트폴리오 일정 묶음은 제안이며 세부 규칙은 신청·예약·결제 설계 12장을 참고한다. 회원가입·전체 마이페이지는 MVP에서 제외하는 안을 유지한다.</p>
<p>예약 가능 시간은 운영자가 직접 선택·공개한 날짜·시간만 사용한다. Google Calendar 빈 시간 기반 자동 공개·자동 차단은 MVP에서 제외하며, 연동은 확정 일정·초대·Meet 관리에 사용한다.</p>
<p>고객용 캘린더는 Google Calendar 임베드가 아닌 OFFSET 독립 UI다. 직접 공개한 슬롯만 표시하고 결제·예약 확정 후 운영자 Google Calendar에 일정·Meet 링크를 생성하며 신청자 이메일로 캘린더 초대를 발송한다. 결제 전에는 Google 일정·고객 초대를 만들지 않는다.</p>
<h2 id="section-홈-정보-구조-초안">홈 정보 구조 초안</h2><p><a href="/documents?doc=home" rel="noopener noreferrer">홈 정보 구조 v0.1</a>을 추가했다. 제안 순서는 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 전문성 → 인사이트 → 푸터다. 별도 프로그램 목록은 만들지 않는다. 소개는 홈 통합을 제안하며 헤드라인·세부 카피·레이아웃은 와이어프레임 단계에서 검토한다.</p>
<h2 id="section-디자인-시스템-확정">디자인 시스템 확정</h2><p>사용자 지정으로 Montage를 전면 적용한다. Figma 작업 위치는 b5VKxmsX9NkkWTQsahPccI 파일의 v2(2099:2) 페이지다. <a href="/documents?doc=montage" rel="noopener noreferrer">Montage 적용 기준</a>에 확인된 토큰·레이아웃 기준 및 라이브러리 연결 상태를 기록했다.</p>
<h2 id="section-프로젝트-문서-사이트-2026-09-12-추가">프로젝트 문서 사이트 — 2026-09-12 추가</h2><p>사용자 요청에 따라 <code>/documents</code>에서 PRD, 신청·예약·결제 설계, 홈 정보 구조, Montage 적용 기준을 열람한다. 등록된 Markdown 파일을 원본으로 사용하며, 문서 검색·목차·원문 다운로드·버전별 열람·추가/삭제 비교·특정 버전 링크를 제공한다.</p>
<p>문서 내용이 바뀌면 개발 서버의 파일 저장 감지 또는 빌드 시 새 리비전을 자동 기록한다. 변경이 없는 재빌드는 버전을 추가하지 않는다. 기존 과거 원본이 없는 문서는 현재 내용을 r1 기준 버전으로 등록한다. 기록된 이력은 원본과 함께 Git에서 관리한다.</p>
<p>문서 자동 갱신과 서버 배포는 구분한다. QA·실서버 반영은 기존 사용자 배포 지시를 따른다. MVP 문서 페이지는 읽기 전용이며 웹에서 직접 업로드·편집하는 어드민은 포함하지 않는다.</p>
<p>2026-09-12 접근 정책 변경: 문서 페이지는 운영자 본인만 접근한다. ChatGPT 로그인으로 확인한 계정을 서버에서 허용 목록과 비교하며, 비로그인·다른 계정에는 원문과 이력을 전달하지 않는다. QA·실서버 모두 동일하게 적용한다. 사용자가 두 환경 배포를 요청했다.</p>
`,toc:[{id:`section-1-확인된-방향`,label:`1. 확인된 방향`,depth:2},{id:`section-2-제품-정의-제안`,label:`2. 제품 정의 제안`,depth:2},{id:`section-2-1-서비스-구성-사용자-제시-내용`,label:`2.1 서비스 구성 — 사용자 제시 내용`,depth:2},{id:`section-홈-서비스-목록-제안`,label:`홈 서비스 목록 제안`,depth:3},{id:`section-3-주요-방문-흐름`,label:`3. 주요 방문 흐름`,depth:2},{id:`section-4-사이트맵-제안`,label:`4. 사이트맵 제안`,depth:2},{id:`section-5-콘텐츠-모델-제안`,label:`5. 콘텐츠 모델 제안`,depth:2},{id:`section-6-신뢰-형성-원칙-제안`,label:`6. 신뢰 형성 원칙 제안`,depth:2},{id:`section-7-어드민-범위-제안`,label:`7. 어드민 범위 제안`,depth:2},{id:`section-8-첫-출시-범위-제안과-검증-기준`,label:`8. 첫 출시 범위 제안과 검증 기준`,depth:2},{id:`section-9-합의된-협업-배포-규칙`,label:`9. 합의된 협업·배포 규칙`,depth:2},{id:`section-10-다음-결정-사항`,label:`10. 다음 결정 사항`,depth:2},{id:`section-참고`,label:`참고`,depth:2},{id:`section-캘린더-온라인-진행-보완`,label:`캘린더·온라인 진행 보완`,depth:2},{id:`section-홈-정보-구조-초안`,label:`홈 정보 구조 초안`,depth:2},{id:`section-디자인-시스템-확정`,label:`디자인 시스템 확정`,depth:2},{id:`section-프로젝트-문서-사이트-2026-09-12-추가`,label:`프로젝트 문서 사이트 — 2026-09-12 추가`,depth:2}]},{revision:4,hash:`be78bb1abcfd313d2bcaa9e81c5ff0488438e20f03696725362edad7cf51a921`,recordedAt:`2026-09-12T14:07:43.858Z`,markdown:`# OFFSET 리뉴얼 PRD v0.9

작성일: 2026-09-12. 상태: 논의용 초안. 사용자 발언으로 확인한 방향과 제안을 구분한다. 기존 구현의 기능·화면·기술 선택을 새 요구사항으로 자동 승계하지 않는다.

## 1. 확인된 방향

- OFFSET은 프로덕트 디자이너 대상 교육에서 출발하며, 기업 컨설팅까지 포함하는 브랜드 포지셔닝을 논의 중이다.
- 1인 운영과 적은 프로그램 수를 고려하여 별도 프로그램 목록 페이지 없이 홈에서 서비스 목록을 제공한다. 개별 서비스·모집 상세는 유지하는 안을 제안한다.
- 스타트업 컨설팅은 상시·1회성 서비스로 포함한다. 영역은 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여다. 각 영역의 구체적인 수행 범위는 미정이다.
- 경력 단계와 해결하려는 과제에 맞춘 교육으로 실력 향상을 극대화한다. 사용자가 제시한 서비스 구성은 1:1 코칭, 포트폴리오 코칭, 프로젝트 워크샵, 스타트업 컨설팅 네 가지다. 출시 시점별 실제 모집 여부는 별도 결정한다.
- OFFSET 브랜드를 앞세우고 운영자의 전문성으로 신뢰를 뒷받침하고자 한다. 개인을 드러내는 비중은 기업 컨설팅 추가와 함께 재검토 중이다.
- 방문자가 신뢰를 얻고 모집에 지원하여 실제 참여하는 것이 핵심 목표다.
- LinkedIn에 꾸준히 글을 게시하고 사이트에도 인사이트·실용 콘텐츠를 축적한다.
- 시리즈 후보는 ‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’이다. 장기적으로 콘텐츠를 엮어 이북으로 판매하고자 한다.
- 참여자 중심의 Discord 커뮤니티를 고려한다. 가입 자격과 운영 범위는 미정이다.

기업 채용 지원은 사용자 확인에 따라 지원자의 포트폴리오 검토와 면접관 참여를 의미한다. 개인 대상 1:1 코칭의 포트폴리오 피드백·가상 인터뷰와 구분한다.

## 2. 제품 정의 제안

개인 디자이너의 성장과 기업의 제품·디자인 조직 과제 해결을 돕는 교육·컨설팅 브랜드. 이 정의는 제안이며 사용자 확정 전이다.

브랜드 문구 초안: ‘디자이너의 성장부터, 팀과 제품의 다음 단계까지.’ OFFSET을 브랜드 이름으로 제시하고 교육·컨설팅을 설명 문구로 사용한다. 전문성을 드러내는 정도는 별도 결정한다. 효과를 보장하는 수치나 검증되지 않은 성과는 사용하지 않는다.

## 2.1 서비스 구성 — 사용자 제시 내용

| 서비스 | 접수 방식 | 회차·기간 | 내용 및 형식 |
|---|---|---|---|
| 1:1 코칭 | 상시 | 1회 | 커리어 조언, 포트폴리오 코칭, 프로젝트 피드백, 가상 인터뷰 체험. 시간·온라인 여부는 미정 |
| 포트폴리오 코칭 | 모집형 | 총 4회 | 1:1 온라인. 매회 포트폴리오 사전 검토 1시간 + 온라인 대면 리뷰 1시간으로 이해한 운영안 |
| 프로젝트 워크샵 | 모집형 | 8주·총 8회 | 앱 기획부터 디자인 완성까지 디자인 프로세스 경험. 개인/팀 과제, 수업 인원·회당 시간·온라인 여부는 미정 |
| 스타트업 컨설팅 | 상시 | 1회 | 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여. 시간·수행 범위·가격 방식은 미정 |

포트폴리오 코칭의 1시간 사전 검토는 운영자의 준비 시간이며 참여자의 온라인 수업 시간과 구분한다. 매회 적용 시 참여자당 총 운영 시간은 최소 8시간(사전 검토 4시간 + 온라인 리뷰 4시간)이다. 일정 조율·회차 외 질문 대응은 별도다. 총 4회가 4주인지, 회차별 제출 시점은 미정이다.

기존 workshop 페이지에서 참고할 원칙: 기존 포트폴리오를 제출하고, 리뷰 후 직접 수정하여 다음 회차에서 다시 검토하는 반복 과정. 2026-09-12 확인한 기존 페이지는 그룹·오프라인 과정이므로 신규 과정에는 사용자가 지정한 1:1·온라인·4회를 우선 적용한다. 기존 가격, 인원, 기간, 선발·결제·환불 규칙은 자동 승계하지 않는다.

### 홈 서비스 목록 제안

개인 대상 세 서비스와 기업 대상 한 서비스를 홈에서 한눈에 제공한다. 기본 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅이며 어드민에서 조정한다. 카드에는 이름, 해결 과제 한 줄, 상시/모집 상태, 회차·방식, 상세 링크를 표시한다.

- 1:1 코칭: ‘지금 막힌 문제를 한 번의 코칭으로 점검합니다.’ 단회 진단·조언이라는 역할을 설명한다.
- 포트폴리오 코칭: ‘4회의 리뷰와 수정을 통해 포트폴리오를 다듬습니다.’ 반복 개선이라는 역할을 설명한다.
- 프로젝트 워크샵: ‘8주 동안 앱 기획부터 디자인 완성까지 경험합니다.’ 새로운 프로젝트를 만드는 과정이라는 역할을 설명한다.
- 스타트업 컨설팅: ‘팀·서비스·디자인·채용의 당면 과제를 함께 검토합니다.’ 단회 서비스의 구체적인 범위는 추가 확정한다.

상시 서비스에는 접수 가능·일시 중단 상태를, 모집형에는 모집 예정·모집 중·마감 상태와 모집 단위를 둔다. 상시는 무제한 수용 또는 즉시 예약 확정을 의미하지 않는다. 모집 종료 후에도 상세 설명을 열람할 수 있게 하는 안을 제안한다.

## 3. 주요 방문 흐름

신청·예약·결제 상세는 [상세 설계 v0.4](OFFSET-BOOKING-SPEC.md)을 따른다. 확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭·프로젝트 워크샵은 검토 후 결제, 스타트업 컨설팅은 협의 후 결제. 가격·세부 정책·결제 사업자는 미정이다.


1. 교육 홍보 → 해당 모집 상세 → 적합성·방식·교육자·조건 확인 → 신청 → 운영 절차에 따른 참여 확정.
2. LinkedIn·검색 → 아티클 → 관련 시리즈·교육 → 모집 상세 → 신청.
3. 직접 방문 → 홈에서 브랜드와 서비스 목록 확인 → 해당 서비스·모집 상세 → 신청 또는 문의.
4. 참여 확정 → 참여 안내 → 자격 확인 후 Discord 초대. 자동화 여부는 미정.
5. 기업 방문 → 홈의 기업 컨설팅 → 수행 범위·방식·전문성 확인 → 프로젝트 문의 → 적합성·일정·범위 협의. 상시 문의가 즉시 착수 가능함을 뜻하지 않도록 안내한다.

모든 유입을 홈으로 우회시키지 않는다. 모집 상세만 방문해도 충분히 판단할 수 있어야 한다.

## 4. 사이트맵 제안

- 홈: 브랜드의 가치, 개인 교육 및 기업 컨설팅 서비스 목록, 진행 방식, 운영자 전문성과 확인 가능한 신뢰 근거, 대표 콘텐츠.
  - 서비스 목록은 홈 안에 배치한다. 개인을 위한 교육·코칭과 기업을 위한 컨설팅을 구분하며 별도 목록 페이지·필터는 만들지 않는다.
  - 프로그램/모집 상세: 대상, 과제, 기대 결과물, 진행 방식, 커리큘럼, 교육자, 일정·정원·가격, 신청 절차, FAQ.
  - 신청·일정 선택·신청 관리·결제 안내·결과·확정 화면: 사이트 내 폼과 외부 결제 연동을 제안한다. 제출 완료와 참여 확정을 구분한다. 회원가입 없이 이메일 본인 확인으로 관리하는 안이다.
  - 스타트업 컨설팅 상세: 팀 빌딩·스타트업 서비스 플랜·디자인 리뷰·지원자 포트폴리오 검토 및 면접관 참여의 대상 문제, 수행 범위, 결과물 예시, 협업 방식, 전문성 근거, 문의 경로. 초기에는 하나의 상세 페이지에 지원 영역을 정리하는 안을 제안한다.
- 인사이트: 아티클 목록과 시리즈 탐색.
  - 시리즈 상세: 시리즈 소개와 순서가 있는 글 목록.
  - 아티클 상세: 본문, 저자, 시리즈, 관련 글·관련 교육.
- OFFSET 소개: 교육·컨설팅 철학, 운영 방식, 운영자 소개와 검증 가능한 경력. 초기 분량이 적으면 홈의 소개 섹션으로 통합하는 안도 검토한다.
- 운영 안내: 문의 및 신청·판매 방식에 필요한 정책 페이지. 내용은 운영 방식 확정 후 작성.
- 어드민: 인증된 운영자의 콘텐츠 작성·미리보기·발행·관리.
- 향후 확장 후보: 이북 목록·상세·구매·전달. 첫 출시 포함 여부 미정.

최상위 메뉴 제안: 서비스(홈 내부 이동) / 인사이트 / 소개(독립 페이지 또는 홈 내부 이동 미정). Discord는 교육 참여자 안내 경로로 제공하는 안을 제안한다.

## 5. 콘텐츠 모델 제안

| 종류 | 주요 정보 | 관계 |
|---|---|---|
| 프로그램 | 소개, 대상 경력, 해결 과제, 형식, 상시/모집 구분, 커리큘럼, 교육자 | 모집형은 여러 모집 회차를 가질 수 있고 상시형은 모집 회차 없이 신청 가능 |
| 모집 회차 | 일정, 정원, 가격, 모집 상태, 신청 방식 | 프로그램에 연결 |
| 기업 컨설팅 | 소개, 대상 문제, 제공 범위, 결과물, 협업 방식, 문의 경로 | 홈 서비스 목록에 노출; 교육 모집 회차와 별개 |
| 기업 문의 | 조직·담당자, 과제 설명, 연락 수단, 일정 등 최소 필요 정보 | 수집 항목·접수 수단·처리 상태는 미정 |
| 교육자 | 이름, 역할, 소개, 확인된 경력·링크 | 프로그램·아티클과 연결 |
| 아티클 | 제목, 요약, 본문, 이미지, 저자, 발행일 | 시리즈 및 관련 프로그램과 연결 |
| 시리즈 | 제목, 설명, 표지, 글 순서 | 여러 아티클 포함 |
| 신청 | 대상 서비스, 모집형의 경우 대상 모집 회차, 필요한 신청 정보, 처리 상태 | 상시형과 모집형 모두 지원; 수집 항목·보관 정책·처리 방식 미정 |
| 이북(향후) | 소개, 목차, 가격, 파일·판 정보 | 관련 시리즈와 연결 가능 |

경력 단계(취업 준비·주니어·시니어·리드), 해결 과제(포트폴리오·이직·프로젝트 등), 교육 형식(1:1·그룹 등)은 서로 다른 속성으로 관리한다. 분류명은 실제 교육 구성에 맞춰 확정한다.

## 6. 신뢰 형성 원칙 제안

- 홈은 OFFSET이 돕는 대상과 해결 과제, 교육·컨설팅 방식을 중심으로 구성한다.
- 교육자는 소개 페이지와 모집 상세에서 해당 교육을 이끌 수 있는 근거와 함께 보여준다.
- 컨설팅에는 운영자의 실제 역할과 경험을 구체적으로 제시한다. 팀 빌딩이 채용·조직 설계·코칭 중 어디까지인지, 서비스 빌딩이 자문·설계·구현 중 어디까지인지 확정하기 전 수행 가능 범위를 과장하지 않는다.
- 모집 상세에 누가 적합한지, 무엇을 하며 어떤 결과물을 만드는지 구체적으로 명시한다.
- 후기·참여자 결과물은 실제 자료와 공개 동의가 있을 때만 사용한다. 자료가 없다면 교육 과정과 예시로 설명한다.

## 7. 어드민 범위 제안

- 운영자 로그인 및 권한 확인.
- 홈 서비스 노출·순서, 프로그램·회차·기업 컨설팅·교육자·시리즈·아티클 생성 및 편집.
- 이미지 업로드, 대체 텍스트, 콘텐츠 노출 순서 관리.
- 초안·미리보기·발행·비공개. 콘텐츠 발행 상태와 모집 상태는 별개로 관리.
- 상시 서비스의 접수 가능·일시 중단, 모집형의 모집 예정·모집 중·마감 상태 및 신청 버튼 제어.
- 신청 목록·보완 요청·승인·결제 안내·확정 상태, 통합 일정 및 정원 확보 관리.
- 기업 문의 접수 경로를 관리한다. 자체 접수를 선택하면 문의 목록과 처리 상태를 관리한다. 자동 접수 확인·운영자 알림 여부는 신청 흐름 설계에서 결정한다.
- 결제 연동과 상태 검증·환불 추적은 첫 버전 범위에 제안한다. 일반 회원 계정, 자동 Discord 초대, 이북 파일 전달은 별도 범위다.

## 8. 첫 출시 범위 제안과 검증 기준

첫 출시 제안: 서비스 목록을 포함한 홈, 개별 교육·모집 상세, 기업 컨설팅 상세·문의 경로, 교육 신청 경로, 인사이트·시리즈·아티클, 소개(홈 통합 가능), 콘텐츠 어드민. 별도 프로그램 목록 페이지는 제외한다.

완료 기준 초안:

- 모집 상세에서 대상·진행 방식·일정·신청 조건을 확인하고 실제 신청을 완료할 수 있다.
- 홈에서 제공 서비스를 확인하고 개별 상세 또는 신청·문의로 이동할 수 있다.
- 기업 컨설팅에서 제공 범위를 확인하고 문의를 접수할 수 있다. 접수 완료와 계약·착수 확정을 구분한다.
- 마감된 모집은 새 신청을 받지 않고 상태가 명확히 표시된다.
- 관리자가 초안을 미리보고 발행하면 공개 사이트에 반영된다. 미발행 콘텐츠는 공개되지 않는다.
- 아티클에서 같은 시리즈와 관련 교육으로 이동할 수 있다.
- 모바일에서도 주요 정보 확인과 신청이 가능하다.
- 참여자 커뮤니티 초대는 확정된 자격 기준에 따라 운영한다.

성과 확인 후보: 모집 상세 방문 대비 신청 완료, 신청 대비 실제 참여, 아티클에서 교육으로 이동, 컨설팅 문의 및 실제 상담·계약. 교육과 컨설팅 성과는 구분하며 목표 수치·측정 방식은 아직 정하지 않는다.

## 9. 합의된 협업·배포 규칙

- 편집 가능한 Figma 화면으로 설계한다. 사용자의 직접 수정 이후 최신 프레임과 개발 기준 상태를 비교하여 코드에 반영한다.
- 수정만으로 자동 배포하지 않는다.
- ‘QA에 올리자’ 지시가 있으면 QA 서버에 배포한다.
- ‘배포하자’ 지시가 있으면 QA에서 검증한 버전을 실서버에 배포한다.
- QA와 실서버의 데이터·업로드 저장소를 분리하는 설계를 적용한다.

## 10. 다음 결정 사항

1. 네 서비스의 출시 시점별 접수 여부·가격·수용 인원과 우선 대상.
2. 서비스별 신청·결제 순서는 확정. 결제 사업자·수단·가격·기한·일정 변경·취소·환불 정책은 추가 확정.
3. 이북 판매의 첫 출시 포함 여부.
4. 활용 가능한 교육자 경력·후기·결과물, 초기 아티클 수량.
5. 참고 디자인 시스템과 Figma 작업 파일.
6. 교육·컨설팅 브랜드라는 포지셔닝 및 운영자 소개 비중.
7. 스타트업 컨설팅의 구체적인 수행 범위와 동시 운영 가능량. 기업 채용 지원은 지원자 포트폴리오 검토와 면접관 참여로 확인됨. 검토 인원·면접 횟수·평가 전달 방식은 미정.
8. 단회 코칭과 컨설팅의 회당 시간·진행 채널, 포트폴리오 코칭 4회의 간격, 프로젝트 워크샵의 개인/팀 과제·정원·회당 시간.
9. 단회 참여자까지 포함할지 등 Discord 초대 자격.

## 참고

- 사용자 제공: https://www.vibemafiaclub.com/ — 2026-09-12 확인한 홈은 개인 소개와 이력을 전면에 배치한다. OFFSET은 사용자 요청에 따라 플랫폼을 전면에 두는 방향이다.
- 사용자 제공: https://offset.quest/workshop/ — 2026-09-12 HTML 본문 확인. 리뷰·수정 반복 방식을 참고하되 기존 그룹·오프라인 운영과 신규 1:1·온라인 운영을 구분한다.

## 캘린더·온라인 진행 보완

운영자의 가능 일정 공개, 고객의 웹사이트 캘린더 예약, Google Calendar·Meet 연동을 설계 범위에 포함한다. 1:1 코칭은 단일 시간 예약, 포트폴리오 코칭은 4회 일정 묶음별 1명 모집 및 검토 후 결제, 워크샵은 고정 8회 일정·정원 관리 방식이다. 포트폴리오 일정 묶음은 제안이며 세부 규칙은 신청·예약·결제 설계 12장을 참고한다. 회원가입·전체 마이페이지는 MVP에서 제외하는 안을 유지한다.

예약 가능 시간은 운영자가 직접 선택·공개한 날짜·시간만 사용한다. Google Calendar 빈 시간 기반 자동 공개·자동 차단은 MVP에서 제외하며, 연동은 확정 일정·초대·Meet 관리에 사용한다.

고객용 캘린더는 Google Calendar 임베드가 아닌 OFFSET 독립 UI다. 직접 공개한 슬롯만 표시하고 결제·예약 확정 후 운영자 Google Calendar에 일정·Meet 링크를 생성하며 신청자 이메일로 캘린더 초대를 발송한다. 결제 전에는 Google 일정·고객 초대를 만들지 않는다.

## 홈 정보 구조 초안

[홈 정보 구조 v0.1](OFFSET-HOME-IA.md)을 추가했다. 제안 순서는 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 전문성 → 인사이트 → 푸터다. 별도 프로그램 목록은 만들지 않는다. 소개는 홈 통합을 제안하며 헤드라인·세부 카피·레이아웃은 와이어프레임 단계에서 검토한다.

## 디자인 시스템 확정

사용자 지정으로 Montage를 전면 적용한다. Figma 작업 위치는 b5VKxmsX9NkkWTQsahPccI 파일의 v2(2099:2) 페이지다. [Montage 적용 기준](OFFSET-MONTAGE.md)에 확인된 토큰·레이아웃 기준 및 라이브러리 연결 상태를 기록했다.

## 프로젝트 문서 사이트 — 2026-09-12 추가

사용자 요청에 따라 \`/documents\`에서 PRD, 신청·예약·결제 설계, 홈 정보 구조, Montage 적용 기준을 열람한다. 등록된 Markdown 파일을 원본으로 사용하며, 문서 검색·목차·원문 다운로드·버전별 열람·추가/삭제 비교·특정 버전 링크를 제공한다.

문서 내용이 바뀌면 개발 서버의 파일 저장 감지 또는 빌드 시 새 리비전을 자동 기록한다. 변경이 없는 재빌드는 버전을 추가하지 않는다. 기존 과거 원본이 없는 문서는 현재 내용을 r1 기준 버전으로 등록한다. 기록된 이력은 원본과 함께 Git에서 관리한다.

문서 자동 갱신과 서버 배포는 구분한다. QA·실서버 반영은 기존 사용자 배포 지시를 따른다. MVP 문서 페이지는 읽기 전용이며 웹에서 직접 업로드·편집하는 어드민은 포함하지 않는다.

2026-09-12 접근 정책 변경: 문서 페이지는 운영자 본인만 접근한다. ChatGPT 로그인으로 확인한 계정을 서버에서 허용 목록과 비교하며, 비로그인·다른 계정에는 원문과 이력을 전달하지 않는다. QA·실서버 모두 동일하게 적용한다. 사용자가 두 환경 배포를 요청했다.

2026-09-12 후속 결정: 사용자가 본인 전용 접근 제한을 나중으로 미루고 문서를 우선 공개하도록 요청했다. 현재 문서와 버전 이력은 로그인 없이 열람할 수 있다. 운영 사이트는 기존 GitHub Pages를 유지하며 \`/documents\` 정적 페이지를 추가한다.
`,html:`<h1 id="section-offset-리뉴얼-prd-v0-9">OFFSET 리뉴얼 PRD v0.9</h1><p>작성일: 2026-09-12. 상태: 논의용 초안. 사용자 발언으로 확인한 방향과 제안을 구분한다. 기존 구현의 기능·화면·기술 선택을 새 요구사항으로 자동 승계하지 않는다.</p>
<h2 id="section-1-확인된-방향">1. 확인된 방향</h2><ul>
<li>OFFSET은 프로덕트 디자이너 대상 교육에서 출발하며, 기업 컨설팅까지 포함하는 브랜드 포지셔닝을 논의 중이다.</li>
<li>1인 운영과 적은 프로그램 수를 고려하여 별도 프로그램 목록 페이지 없이 홈에서 서비스 목록을 제공한다. 개별 서비스·모집 상세는 유지하는 안을 제안한다.</li>
<li>스타트업 컨설팅은 상시·1회성 서비스로 포함한다. 영역은 팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여다. 각 영역의 구체적인 수행 범위는 미정이다.</li>
<li>경력 단계와 해결하려는 과제에 맞춘 교육으로 실력 향상을 극대화한다. 사용자가 제시한 서비스 구성은 1:1 코칭, 포트폴리오 코칭, 프로젝트 워크샵, 스타트업 컨설팅 네 가지다. 출시 시점별 실제 모집 여부는 별도 결정한다.</li>
<li>OFFSET 브랜드를 앞세우고 운영자의 전문성으로 신뢰를 뒷받침하고자 한다. 개인을 드러내는 비중은 기업 컨설팅 추가와 함께 재검토 중이다.</li>
<li>방문자가 신뢰를 얻고 모집에 지원하여 실제 참여하는 것이 핵심 목표다.</li>
<li>LinkedIn에 꾸준히 글을 게시하고 사이트에도 인사이트·실용 콘텐츠를 축적한다.</li>
<li>시리즈 후보는 ‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’이다. 장기적으로 콘텐츠를 엮어 이북으로 판매하고자 한다.</li>
<li>참여자 중심의 Discord 커뮤니티를 고려한다. 가입 자격과 운영 범위는 미정이다.</li>
</ul>
<p>기업 채용 지원은 사용자 확인에 따라 지원자의 포트폴리오 검토와 면접관 참여를 의미한다. 개인 대상 1:1 코칭의 포트폴리오 피드백·가상 인터뷰와 구분한다.</p>
<h2 id="section-2-제품-정의-제안">2. 제품 정의 제안</h2><p>개인 디자이너의 성장과 기업의 제품·디자인 조직 과제 해결을 돕는 교육·컨설팅 브랜드. 이 정의는 제안이며 사용자 확정 전이다.</p>
<p>브랜드 문구 초안: ‘디자이너의 성장부터, 팀과 제품의 다음 단계까지.’ OFFSET을 브랜드 이름으로 제시하고 교육·컨설팅을 설명 문구로 사용한다. 전문성을 드러내는 정도는 별도 결정한다. 효과를 보장하는 수치나 검증되지 않은 성과는 사용하지 않는다.</p>
<h2 id="section-2-1-서비스-구성-사용자-제시-내용">2.1 서비스 구성 — 사용자 제시 내용</h2><table>
<thead>
<tr>
<th>서비스</th>
<th>접수 방식</th>
<th>회차·기간</th>
<th>내용 및 형식</th>
</tr>
</thead>
<tbody><tr>
<td>1:1 코칭</td>
<td>상시</td>
<td>1회</td>
<td>커리어 조언, 포트폴리오 코칭, 프로젝트 피드백, 가상 인터뷰 체험. 시간·온라인 여부는 미정</td>
</tr>
<tr>
<td>포트폴리오 코칭</td>
<td>모집형</td>
<td>총 4회</td>
<td>1:1 온라인. 매회 포트폴리오 사전 검토 1시간 + 온라인 대면 리뷰 1시간으로 이해한 운영안</td>
</tr>
<tr>
<td>프로젝트 워크샵</td>
<td>모집형</td>
<td>8주·총 8회</td>
<td>앱 기획부터 디자인 완성까지 디자인 프로세스 경험. 개인/팀 과제, 수업 인원·회당 시간·온라인 여부는 미정</td>
</tr>
<tr>
<td>스타트업 컨설팅</td>
<td>상시</td>
<td>1회</td>
<td>팀 빌딩, 스타트업 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토·면접관 참여. 시간·수행 범위·가격 방식은 미정</td>
</tr>
</tbody></table>
<p>포트폴리오 코칭의 1시간 사전 검토는 운영자의 준비 시간이며 참여자의 온라인 수업 시간과 구분한다. 매회 적용 시 참여자당 총 운영 시간은 최소 8시간(사전 검토 4시간 + 온라인 리뷰 4시간)이다. 일정 조율·회차 외 질문 대응은 별도다. 총 4회가 4주인지, 회차별 제출 시점은 미정이다.</p>
<p>기존 workshop 페이지에서 참고할 원칙: 기존 포트폴리오를 제출하고, 리뷰 후 직접 수정하여 다음 회차에서 다시 검토하는 반복 과정. 2026-09-12 확인한 기존 페이지는 그룹·오프라인 과정이므로 신규 과정에는 사용자가 지정한 1:1·온라인·4회를 우선 적용한다. 기존 가격, 인원, 기간, 선발·결제·환불 규칙은 자동 승계하지 않는다.</p>
<h3 id="section-홈-서비스-목록-제안">홈 서비스 목록 제안</h3><p>개인 대상 세 서비스와 기업 대상 한 서비스를 홈에서 한눈에 제공한다. 기본 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅이며 어드민에서 조정한다. 카드에는 이름, 해결 과제 한 줄, 상시/모집 상태, 회차·방식, 상세 링크를 표시한다.</p>
<ul>
<li>1:1 코칭: ‘지금 막힌 문제를 한 번의 코칭으로 점검합니다.’ 단회 진단·조언이라는 역할을 설명한다.</li>
<li>포트폴리오 코칭: ‘4회의 리뷰와 수정을 통해 포트폴리오를 다듬습니다.’ 반복 개선이라는 역할을 설명한다.</li>
<li>프로젝트 워크샵: ‘8주 동안 앱 기획부터 디자인 완성까지 경험합니다.’ 새로운 프로젝트를 만드는 과정이라는 역할을 설명한다.</li>
<li>스타트업 컨설팅: ‘팀·서비스·디자인·채용의 당면 과제를 함께 검토합니다.’ 단회 서비스의 구체적인 범위는 추가 확정한다.</li>
</ul>
<p>상시 서비스에는 접수 가능·일시 중단 상태를, 모집형에는 모집 예정·모집 중·마감 상태와 모집 단위를 둔다. 상시는 무제한 수용 또는 즉시 예약 확정을 의미하지 않는다. 모집 종료 후에도 상세 설명을 열람할 수 있게 하는 안을 제안한다.</p>
<h2 id="section-3-주요-방문-흐름">3. 주요 방문 흐름</h2><p>신청·예약·결제 상세는 <a href="/documents?doc=booking" rel="noopener noreferrer">상세 설계 v0.4</a>을 따른다. 확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭·프로젝트 워크샵은 검토 후 결제, 스타트업 컨설팅은 협의 후 결제. 가격·세부 정책·결제 사업자는 미정이다.</p>
<ol>
<li>교육 홍보 → 해당 모집 상세 → 적합성·방식·교육자·조건 확인 → 신청 → 운영 절차에 따른 참여 확정.</li>
<li>LinkedIn·검색 → 아티클 → 관련 시리즈·교육 → 모집 상세 → 신청.</li>
<li>직접 방문 → 홈에서 브랜드와 서비스 목록 확인 → 해당 서비스·모집 상세 → 신청 또는 문의.</li>
<li>참여 확정 → 참여 안내 → 자격 확인 후 Discord 초대. 자동화 여부는 미정.</li>
<li>기업 방문 → 홈의 기업 컨설팅 → 수행 범위·방식·전문성 확인 → 프로젝트 문의 → 적합성·일정·범위 협의. 상시 문의가 즉시 착수 가능함을 뜻하지 않도록 안내한다.</li>
</ol>
<p>모든 유입을 홈으로 우회시키지 않는다. 모집 상세만 방문해도 충분히 판단할 수 있어야 한다.</p>
<h2 id="section-4-사이트맵-제안">4. 사이트맵 제안</h2><ul>
<li>홈: 브랜드의 가치, 개인 교육 및 기업 컨설팅 서비스 목록, 진행 방식, 운영자 전문성과 확인 가능한 신뢰 근거, 대표 콘텐츠.<ul>
<li>서비스 목록은 홈 안에 배치한다. 개인을 위한 교육·코칭과 기업을 위한 컨설팅을 구분하며 별도 목록 페이지·필터는 만들지 않는다.</li>
<li>프로그램/모집 상세: 대상, 과제, 기대 결과물, 진행 방식, 커리큘럼, 교육자, 일정·정원·가격, 신청 절차, FAQ.</li>
<li>신청·일정 선택·신청 관리·결제 안내·결과·확정 화면: 사이트 내 폼과 외부 결제 연동을 제안한다. 제출 완료와 참여 확정을 구분한다. 회원가입 없이 이메일 본인 확인으로 관리하는 안이다.</li>
<li>스타트업 컨설팅 상세: 팀 빌딩·스타트업 서비스 플랜·디자인 리뷰·지원자 포트폴리오 검토 및 면접관 참여의 대상 문제, 수행 범위, 결과물 예시, 협업 방식, 전문성 근거, 문의 경로. 초기에는 하나의 상세 페이지에 지원 영역을 정리하는 안을 제안한다.</li>
</ul>
</li>
<li>인사이트: 아티클 목록과 시리즈 탐색.<ul>
<li>시리즈 상세: 시리즈 소개와 순서가 있는 글 목록.</li>
<li>아티클 상세: 본문, 저자, 시리즈, 관련 글·관련 교육.</li>
</ul>
</li>
<li>OFFSET 소개: 교육·컨설팅 철학, 운영 방식, 운영자 소개와 검증 가능한 경력. 초기 분량이 적으면 홈의 소개 섹션으로 통합하는 안도 검토한다.</li>
<li>운영 안내: 문의 및 신청·판매 방식에 필요한 정책 페이지. 내용은 운영 방식 확정 후 작성.</li>
<li>어드민: 인증된 운영자의 콘텐츠 작성·미리보기·발행·관리.</li>
<li>향후 확장 후보: 이북 목록·상세·구매·전달. 첫 출시 포함 여부 미정.</li>
</ul>
<p>최상위 메뉴 제안: 서비스(홈 내부 이동) / 인사이트 / 소개(독립 페이지 또는 홈 내부 이동 미정). Discord는 교육 참여자 안내 경로로 제공하는 안을 제안한다.</p>
<h2 id="section-5-콘텐츠-모델-제안">5. 콘텐츠 모델 제안</h2><table>
<thead>
<tr>
<th>종류</th>
<th>주요 정보</th>
<th>관계</th>
</tr>
</thead>
<tbody><tr>
<td>프로그램</td>
<td>소개, 대상 경력, 해결 과제, 형식, 상시/모집 구분, 커리큘럼, 교육자</td>
<td>모집형은 여러 모집 회차를 가질 수 있고 상시형은 모집 회차 없이 신청 가능</td>
</tr>
<tr>
<td>모집 회차</td>
<td>일정, 정원, 가격, 모집 상태, 신청 방식</td>
<td>프로그램에 연결</td>
</tr>
<tr>
<td>기업 컨설팅</td>
<td>소개, 대상 문제, 제공 범위, 결과물, 협업 방식, 문의 경로</td>
<td>홈 서비스 목록에 노출; 교육 모집 회차와 별개</td>
</tr>
<tr>
<td>기업 문의</td>
<td>조직·담당자, 과제 설명, 연락 수단, 일정 등 최소 필요 정보</td>
<td>수집 항목·접수 수단·처리 상태는 미정</td>
</tr>
<tr>
<td>교육자</td>
<td>이름, 역할, 소개, 확인된 경력·링크</td>
<td>프로그램·아티클과 연결</td>
</tr>
<tr>
<td>아티클</td>
<td>제목, 요약, 본문, 이미지, 저자, 발행일</td>
<td>시리즈 및 관련 프로그램과 연결</td>
</tr>
<tr>
<td>시리즈</td>
<td>제목, 설명, 표지, 글 순서</td>
<td>여러 아티클 포함</td>
</tr>
<tr>
<td>신청</td>
<td>대상 서비스, 모집형의 경우 대상 모집 회차, 필요한 신청 정보, 처리 상태</td>
<td>상시형과 모집형 모두 지원; 수집 항목·보관 정책·처리 방식 미정</td>
</tr>
<tr>
<td>이북(향후)</td>
<td>소개, 목차, 가격, 파일·판 정보</td>
<td>관련 시리즈와 연결 가능</td>
</tr>
</tbody></table>
<p>경력 단계(취업 준비·주니어·시니어·리드), 해결 과제(포트폴리오·이직·프로젝트 등), 교육 형식(1:1·그룹 등)은 서로 다른 속성으로 관리한다. 분류명은 실제 교육 구성에 맞춰 확정한다.</p>
<h2 id="section-6-신뢰-형성-원칙-제안">6. 신뢰 형성 원칙 제안</h2><ul>
<li>홈은 OFFSET이 돕는 대상과 해결 과제, 교육·컨설팅 방식을 중심으로 구성한다.</li>
<li>교육자는 소개 페이지와 모집 상세에서 해당 교육을 이끌 수 있는 근거와 함께 보여준다.</li>
<li>컨설팅에는 운영자의 실제 역할과 경험을 구체적으로 제시한다. 팀 빌딩이 채용·조직 설계·코칭 중 어디까지인지, 서비스 빌딩이 자문·설계·구현 중 어디까지인지 확정하기 전 수행 가능 범위를 과장하지 않는다.</li>
<li>모집 상세에 누가 적합한지, 무엇을 하며 어떤 결과물을 만드는지 구체적으로 명시한다.</li>
<li>후기·참여자 결과물은 실제 자료와 공개 동의가 있을 때만 사용한다. 자료가 없다면 교육 과정과 예시로 설명한다.</li>
</ul>
<h2 id="section-7-어드민-범위-제안">7. 어드민 범위 제안</h2><ul>
<li>운영자 로그인 및 권한 확인.</li>
<li>홈 서비스 노출·순서, 프로그램·회차·기업 컨설팅·교육자·시리즈·아티클 생성 및 편집.</li>
<li>이미지 업로드, 대체 텍스트, 콘텐츠 노출 순서 관리.</li>
<li>초안·미리보기·발행·비공개. 콘텐츠 발행 상태와 모집 상태는 별개로 관리.</li>
<li>상시 서비스의 접수 가능·일시 중단, 모집형의 모집 예정·모집 중·마감 상태 및 신청 버튼 제어.</li>
<li>신청 목록·보완 요청·승인·결제 안내·확정 상태, 통합 일정 및 정원 확보 관리.</li>
<li>기업 문의 접수 경로를 관리한다. 자체 접수를 선택하면 문의 목록과 처리 상태를 관리한다. 자동 접수 확인·운영자 알림 여부는 신청 흐름 설계에서 결정한다.</li>
<li>결제 연동과 상태 검증·환불 추적은 첫 버전 범위에 제안한다. 일반 회원 계정, 자동 Discord 초대, 이북 파일 전달은 별도 범위다.</li>
</ul>
<h2 id="section-8-첫-출시-범위-제안과-검증-기준">8. 첫 출시 범위 제안과 검증 기준</h2><p>첫 출시 제안: 서비스 목록을 포함한 홈, 개별 교육·모집 상세, 기업 컨설팅 상세·문의 경로, 교육 신청 경로, 인사이트·시리즈·아티클, 소개(홈 통합 가능), 콘텐츠 어드민. 별도 프로그램 목록 페이지는 제외한다.</p>
<p>완료 기준 초안:</p>
<ul>
<li>모집 상세에서 대상·진행 방식·일정·신청 조건을 확인하고 실제 신청을 완료할 수 있다.</li>
<li>홈에서 제공 서비스를 확인하고 개별 상세 또는 신청·문의로 이동할 수 있다.</li>
<li>기업 컨설팅에서 제공 범위를 확인하고 문의를 접수할 수 있다. 접수 완료와 계약·착수 확정을 구분한다.</li>
<li>마감된 모집은 새 신청을 받지 않고 상태가 명확히 표시된다.</li>
<li>관리자가 초안을 미리보고 발행하면 공개 사이트에 반영된다. 미발행 콘텐츠는 공개되지 않는다.</li>
<li>아티클에서 같은 시리즈와 관련 교육으로 이동할 수 있다.</li>
<li>모바일에서도 주요 정보 확인과 신청이 가능하다.</li>
<li>참여자 커뮤니티 초대는 확정된 자격 기준에 따라 운영한다.</li>
</ul>
<p>성과 확인 후보: 모집 상세 방문 대비 신청 완료, 신청 대비 실제 참여, 아티클에서 교육으로 이동, 컨설팅 문의 및 실제 상담·계약. 교육과 컨설팅 성과는 구분하며 목표 수치·측정 방식은 아직 정하지 않는다.</p>
<h2 id="section-9-합의된-협업-배포-규칙">9. 합의된 협업·배포 규칙</h2><ul>
<li>편집 가능한 Figma 화면으로 설계한다. 사용자의 직접 수정 이후 최신 프레임과 개발 기준 상태를 비교하여 코드에 반영한다.</li>
<li>수정만으로 자동 배포하지 않는다.</li>
<li>‘QA에 올리자’ 지시가 있으면 QA 서버에 배포한다.</li>
<li>‘배포하자’ 지시가 있으면 QA에서 검증한 버전을 실서버에 배포한다.</li>
<li>QA와 실서버의 데이터·업로드 저장소를 분리하는 설계를 적용한다.</li>
</ul>
<h2 id="section-10-다음-결정-사항">10. 다음 결정 사항</h2><ol>
<li>네 서비스의 출시 시점별 접수 여부·가격·수용 인원과 우선 대상.</li>
<li>서비스별 신청·결제 순서는 확정. 결제 사업자·수단·가격·기한·일정 변경·취소·환불 정책은 추가 확정.</li>
<li>이북 판매의 첫 출시 포함 여부.</li>
<li>활용 가능한 교육자 경력·후기·결과물, 초기 아티클 수량.</li>
<li>참고 디자인 시스템과 Figma 작업 파일.</li>
<li>교육·컨설팅 브랜드라는 포지셔닝 및 운영자 소개 비중.</li>
<li>스타트업 컨설팅의 구체적인 수행 범위와 동시 운영 가능량. 기업 채용 지원은 지원자 포트폴리오 검토와 면접관 참여로 확인됨. 검토 인원·면접 횟수·평가 전달 방식은 미정.</li>
<li>단회 코칭과 컨설팅의 회당 시간·진행 채널, 포트폴리오 코칭 4회의 간격, 프로젝트 워크샵의 개인/팀 과제·정원·회당 시간.</li>
<li>단회 참여자까지 포함할지 등 Discord 초대 자격.</li>
</ol>
<h2 id="section-참고">참고</h2><ul>
<li>사용자 제공: <a href="https://www.vibemafiaclub.com/" rel="noopener noreferrer">https://www.vibemafiaclub.com/</a> — 2026-09-12 확인한 홈은 개인 소개와 이력을 전면에 배치한다. OFFSET은 사용자 요청에 따라 플랫폼을 전면에 두는 방향이다.</li>
<li>사용자 제공: <a href="https://offset.quest/workshop/" rel="noopener noreferrer">https://offset.quest/workshop/</a> — 2026-09-12 HTML 본문 확인. 리뷰·수정 반복 방식을 참고하되 기존 그룹·오프라인 운영과 신규 1:1·온라인 운영을 구분한다.</li>
</ul>
<h2 id="section-캘린더-온라인-진행-보완">캘린더·온라인 진행 보완</h2><p>운영자의 가능 일정 공개, 고객의 웹사이트 캘린더 예약, Google Calendar·Meet 연동을 설계 범위에 포함한다. 1:1 코칭은 단일 시간 예약, 포트폴리오 코칭은 4회 일정 묶음별 1명 모집 및 검토 후 결제, 워크샵은 고정 8회 일정·정원 관리 방식이다. 포트폴리오 일정 묶음은 제안이며 세부 규칙은 신청·예약·결제 설계 12장을 참고한다. 회원가입·전체 마이페이지는 MVP에서 제외하는 안을 유지한다.</p>
<p>예약 가능 시간은 운영자가 직접 선택·공개한 날짜·시간만 사용한다. Google Calendar 빈 시간 기반 자동 공개·자동 차단은 MVP에서 제외하며, 연동은 확정 일정·초대·Meet 관리에 사용한다.</p>
<p>고객용 캘린더는 Google Calendar 임베드가 아닌 OFFSET 독립 UI다. 직접 공개한 슬롯만 표시하고 결제·예약 확정 후 운영자 Google Calendar에 일정·Meet 링크를 생성하며 신청자 이메일로 캘린더 초대를 발송한다. 결제 전에는 Google 일정·고객 초대를 만들지 않는다.</p>
<h2 id="section-홈-정보-구조-초안">홈 정보 구조 초안</h2><p><a href="/documents?doc=home" rel="noopener noreferrer">홈 정보 구조 v0.1</a>을 추가했다. 제안 순서는 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 전문성 → 인사이트 → 푸터다. 별도 프로그램 목록은 만들지 않는다. 소개는 홈 통합을 제안하며 헤드라인·세부 카피·레이아웃은 와이어프레임 단계에서 검토한다.</p>
<h2 id="section-디자인-시스템-확정">디자인 시스템 확정</h2><p>사용자 지정으로 Montage를 전면 적용한다. Figma 작업 위치는 b5VKxmsX9NkkWTQsahPccI 파일의 v2(2099:2) 페이지다. <a href="/documents?doc=montage" rel="noopener noreferrer">Montage 적용 기준</a>에 확인된 토큰·레이아웃 기준 및 라이브러리 연결 상태를 기록했다.</p>
<h2 id="section-프로젝트-문서-사이트-2026-09-12-추가">프로젝트 문서 사이트 — 2026-09-12 추가</h2><p>사용자 요청에 따라 <code>/documents</code>에서 PRD, 신청·예약·결제 설계, 홈 정보 구조, Montage 적용 기준을 열람한다. 등록된 Markdown 파일을 원본으로 사용하며, 문서 검색·목차·원문 다운로드·버전별 열람·추가/삭제 비교·특정 버전 링크를 제공한다.</p>
<p>문서 내용이 바뀌면 개발 서버의 파일 저장 감지 또는 빌드 시 새 리비전을 자동 기록한다. 변경이 없는 재빌드는 버전을 추가하지 않는다. 기존 과거 원본이 없는 문서는 현재 내용을 r1 기준 버전으로 등록한다. 기록된 이력은 원본과 함께 Git에서 관리한다.</p>
<p>문서 자동 갱신과 서버 배포는 구분한다. QA·실서버 반영은 기존 사용자 배포 지시를 따른다. MVP 문서 페이지는 읽기 전용이며 웹에서 직접 업로드·편집하는 어드민은 포함하지 않는다.</p>
<p>2026-09-12 접근 정책 변경: 문서 페이지는 운영자 본인만 접근한다. ChatGPT 로그인으로 확인한 계정을 서버에서 허용 목록과 비교하며, 비로그인·다른 계정에는 원문과 이력을 전달하지 않는다. QA·실서버 모두 동일하게 적용한다. 사용자가 두 환경 배포를 요청했다.</p>
<p>2026-09-12 후속 결정: 사용자가 본인 전용 접근 제한을 나중으로 미루고 문서를 우선 공개하도록 요청했다. 현재 문서와 버전 이력은 로그인 없이 열람할 수 있다. 운영 사이트는 기존 GitHub Pages를 유지하며 <code>/documents</code> 정적 페이지를 추가한다.</p>
`,toc:[{id:`section-1-확인된-방향`,label:`1. 확인된 방향`,depth:2},{id:`section-2-제품-정의-제안`,label:`2. 제품 정의 제안`,depth:2},{id:`section-2-1-서비스-구성-사용자-제시-내용`,label:`2.1 서비스 구성 — 사용자 제시 내용`,depth:2},{id:`section-홈-서비스-목록-제안`,label:`홈 서비스 목록 제안`,depth:3},{id:`section-3-주요-방문-흐름`,label:`3. 주요 방문 흐름`,depth:2},{id:`section-4-사이트맵-제안`,label:`4. 사이트맵 제안`,depth:2},{id:`section-5-콘텐츠-모델-제안`,label:`5. 콘텐츠 모델 제안`,depth:2},{id:`section-6-신뢰-형성-원칙-제안`,label:`6. 신뢰 형성 원칙 제안`,depth:2},{id:`section-7-어드민-범위-제안`,label:`7. 어드민 범위 제안`,depth:2},{id:`section-8-첫-출시-범위-제안과-검증-기준`,label:`8. 첫 출시 범위 제안과 검증 기준`,depth:2},{id:`section-9-합의된-협업-배포-규칙`,label:`9. 합의된 협업·배포 규칙`,depth:2},{id:`section-10-다음-결정-사항`,label:`10. 다음 결정 사항`,depth:2},{id:`section-참고`,label:`참고`,depth:2},{id:`section-캘린더-온라인-진행-보완`,label:`캘린더·온라인 진행 보완`,depth:2},{id:`section-홈-정보-구조-초안`,label:`홈 정보 구조 초안`,depth:2},{id:`section-디자인-시스템-확정`,label:`디자인 시스템 확정`,depth:2},{id:`section-프로젝트-문서-사이트-2026-09-12-추가`,label:`프로젝트 문서 사이트 — 2026-09-12 추가`,depth:2}]}]},{id:`booking`,title:`예약·결제 설계`,category:`서비스 설계`,description:`서비스별 신청, 일정, 결제와 Google Meet 연동`,file:`OFFSET-BOOKING-SPEC.md`,revisions:[{revision:1,hash:`4be68ea05095f3e939db5a7e5dd112f33d691bb48bbfbc9297c9cd1a65098eef`,recordedAt:`2026-09-12T13:52:53.608Z`,markdown:`# OFFSET 신청·예약·결제 상세 설계 v0.4

작성일: 2026-09-12. 기획 설계 문서이며 구현·배포·실제 결제·알림 발송은 수행하지 않았다.

## 1. 결정 수준과 범위

확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭과 프로젝트 워크샵은 신청 검토 후 결제, 스타트업 컨설팅은 범위·일정·비용 협의 후 결제한다. 홈에서 네 서비스를 소개하며 별도 프로그램 목록 페이지를 만들지 않는다.

이하 화면·운영 규칙은 이 방향을 구현하기 위한 설계안이다. 가격, 제공 시간, 정원, 결제 수단·사업자, 취소·환불 조건은 아직 확정하지 않았다. 환불 가능 여부나 금액을 임의로 정하지 않는다. 정책 확정 시 해당 서비스의 실제 제공 방식과 적용 요건을 검토하여 별도 문서화한다.

첫 버전 제안: 사이트 내 신청 폼과 어드민, 결제 서비스 연동, 이메일 기반 신청 관리. 일반 회원가입·학습 관리 시스템·기업 후불·분할 결제·자동 대기자 승격은 후속 범위로 둔다. 결제 사업자는 아직 선택하지 않는다.

## 2. 공통 원칙

- 신청 접수, 참여 승인, 결제 완료, 예약·참여 확정은 별개다. 완료 화면에서 현재 상태와 다음 행동을 명시한다.
- 결제 성공은 결제 사업자의 검증된 서버 응답을 근거로 판단한다. 브라우저가 성공 페이지에 도착한 것만으로 확정하지 않는다.
- 모든 서비스는 운영자 한 명의 시간표를 공유한다. 온라인 세션, 기업 면접, 준비 시간, 차단 일정의 충돌을 함께 검사한다.
- 일정에는 날짜·시작/종료 시간·시간대(기본 Asia/Seoul)를 표시한다. 상시는 언제든 접수할 수 있다는 뜻이며 모든 시간에 예약할 수 있다는 뜻이 아니다.
- 신청 정보·포트폴리오는 공개 페이지에 노출하지 않는다. 관리 링크는 본인 확인 후 접근하며 추측 가능한 신청 번호만으로 열람할 수 없다.
- 신청자는 이메일 인증 링크로 자신의 신청·결제·일정·자료를 확인한다. 링크 만료 시 재발급하며 이메일 미수신 안내와 문의 경로를 제공한다. 회원가입은 요구하지 않는 안이다.
- 필수 동의와 선택 마케팅 동의를 분리한다. 자료 보관 기간과 삭제 절차는 출시 전에 확정한다.

## 3. 서비스별 방문자 흐름

### 3.1 1:1 코칭 — 즉시 예약

상세의 기본 버튼: ‘일정 선택하기’.

1. 상세에서 가능한 주제, 제공 시간·가격·방식, 준비 자료, 변경·취소 조건을 확인한다.
2. 주제와 고민을 작성한다. 이름·이메일은 필수, 경력 단계는 필요한 범위로 선택한다. 포트폴리오/프로젝트 리뷰는 열람 가능한 자료 링크를 필수로 받고, 커리어 상담·가상 인터뷰는 관련 자료를 선택 또는 주제별 필수로 설정한다.
3. 운영자가 공개한 시간 중 선택한다. 일정 없음은 ‘현재 예약 가능한 일정이 없습니다’와 문의 경로를 보여주며 결제 단계로 보내지 않는다.
4. 결제 직전 일정·금액·입력 정보·정책을 확인한다. 이때 해당 시간을 임시 확보하고 남은 시간을 표시한다. 임시 확보 시간은 설정값이며 제안값은 10분이다.
5. 결제 성공 검증과 시간 확보를 완료하면 자동으로 ‘예약 확정’. 운영자 승인 단계는 없다.
6. 확정 화면에 일정, 접속/장소 안내, 제출 자료, 변경·취소 요청 경로를 제공한다. 접속 링크가 아직 없으면 안내 예정 시점을 표시한다.

운영자는 공개 슬롯, 예약 마감 시점, 예약 가능한 미래 기간, 세션 전후 여유 시간, 일별·주별 한도를 관리한다. 모두 가격·시간과 함께 출시 전 설정한다. 준비가 필요한 코칭은 준비 시간을 확보한 슬롯만 판매한다. 포트폴리오 4회 과정의 사전 검토 1시간을 단회 코칭에도 자동 적용하지 않는다.

요청 주제는 한 세션의 핵심 주제 하나를 선택하게 하는 안이다. 여러 서비스를 한 번에 제공한다는 기대를 막기 위해 포함 범위와 추가 지원 여부를 명시한다. 지원하지 않는 요청은 결제 전 문의 경로로 연결한다.

### 3.2 포트폴리오 코칭 — 적합성 검토와 4회 일정 확보

상세의 기본 버튼: ‘코칭 신청하기’. 버튼 근처에 ‘신청 내용을 확인한 뒤 참여 가능 여부와 결제를 안내합니다’ 표시.

1. 모집 상세에서 목표, 대상, 총 4회, 매회 사전 검토 1시간 + 온라인 1:1 리뷰 1시간, 가격, 모집 일정과 검토 안내 시점을 확인한다.
2. 이름·이메일, 경력 단계, 포트폴리오 링크, 현재 고민, 개선 목표, 희망하는 공개 4회 일정 묶음, 회차 사이 수정 작업 가능 여부를 제출한다.
3. 접수 완료 화면에 신청 번호와 ‘검토 중이며 아직 참여가 확정되지 않았습니다’ 및 결과 안내 예정일을 표시한다.
4. 운영자는 자료 열람 가능 여부, 리뷰 가능한 포트폴리오 존재 여부, 목표와 과정의 적합성, 일정·수용 가능량을 확인한다. 평가 점수나 취업 가능성을 선별 기준으로 삼는 설계는 아니다.
5. 자료가 부족하면 보완 요청, 적합하면 희망 일정 묶음의 가용성을 확인, 맞지 않으면 이유와 함께 이번 과정 참여 어려움 안내. 대기는 참여자가 원하는 경우에만 등록한다.
6. 운영자는 아래 12장의 일정 묶음 방식에 따라 결제 안내 전에 신청자가 고른 4회 일정을 확인하고 네 세션 및 각 사전 검토 시간을 임시 확보한다. 사전 검토 시간은 내부 일정이며 참여자 예약 시간과 구분한다.
7. 운영자가 최종 금액·4회 일정·결제 기한을 확인하여 결제 안내를 보낸다. 기한 동안 정원 한 자리와 관련 시간을 확보한다.
8. 기한 내 결제 성공 시 ‘참여 확정’. 회차별 제출 일정과 접속 안내를 제공한다. 기한 만료 시 미결제 자리·일정을 해제하며 재신청 또는 재협의 경로를 제공한다.

결제 기한 제안값: 안내 후 48시간. 모집 종료·시작일보다 늦어지지 않게 조정한다. 4회 간격, 자료 제출 마감, 회차 외 피드백 범위는 미정이며 상세 발행 전 입력한다.

참여자 한 명당 최소 8시간의 운영 시간에 일정 조율·자료 관리 시간이 추가된다. 정원 숫자와 함께 실제 4회 일정을 수용할 수 있는지도 검증한다.

### 3.3 프로젝트 워크샵 — 8주 참여 적합성 검토

상세의 기본 버튼: ‘워크샵 신청하기’.

1. 모집 상세에 8주·총 8회 일정, 방식·장소, 회당 시간, 목표 결과물, 필요한 기초 역량, 예상 개인 작업 시간, 가격·정원을 명시한다. 미정 항목이 있으면 결제 안내를 시작하지 않는다.
2. 이름·이메일, 디자인 경험, 참여 목표, 만들고 싶은 앱/문제(있다면), 일정 참여 가능 여부와 주간 작업 가능 시간을 제출한다. 포트폴리오는 필수 선발 자료로 기본 설정하지 않는다.
3. 접수 완료 → 운영자 검토 → 필요 시 보완 요청 → 참여 승인 또는 참여 어려움/대기 안내.
4. 검토 기준은 과정의 선수 조건, 목표 적합성, 8주 일정과 작업 시간 확보 여부다. 선수 조건과 예상 작업 시간은 커리큘럼 확정 후 공개한다.
5. 승인된 신청에 정원 한 자리를 확보하고 결제 안내를 발급한다. 기한 내 결제하면 참여 확정한다.
6. 확정 후 전체 일정, 준비 사항, 첫 회차 안내를 제공한다. 커뮤니티 초대 대상 여부는 별도 정책에 따른다.

워크샵의 그룹/개별 운영과 개인/팀 과제는 미정이다. 그룹 운영 시 회차 시간은 코호트 전체 일정으로 한 번만 점유하고, 참가자마다 별도의 운영자 세션으로 중복 계산하지 않는다. 결제 안내 전 운영 방식 확정이 필요하다.

최소 개설 인원 적용 여부와 개설 판단일은 미정이다. 최소 인원을 적용한다면 접수·결제 확정과 과정 개설 여부를 구분하여 안내하고, 개설 실패 시 처리 규칙을 결제 전에 공개한다.

### 3.4 스타트업 컨설팅 — 범위 합의 후 결제

상세의 기본 버튼: ‘컨설팅 문의하기’. 초기 문의에서 바로 결제하거나 일정을 확정하지 않는다.

1. 조직명, 담당자 이름·이메일, 요청 영역, 당면 과제, 희망 일정, 참고 링크를 접수한다. 예산 범위는 선택 입력으로 제안한다.
2. 접수 완료 시 답변 예정 시점을 안내한다.
3. 운영자가 범위와 적합성을 확인하고 필요한 질문으로 보완한다. 별도 상담이 유료인지 여부는 미정이며 임의로 약속하지 않는다.
4. 제안서에 제공 범위·제외 범위, 준비 자료, 세션/면접 시간과 횟수, 결과물, 일정, 최종 금액·결제 기한을 기록한다.
5. 고객이 해당 제안 버전에 동의한 뒤 운영자가 시간을 확보하고 결제 안내를 발급한다.
6. 결제 성공 시 확정하고 준비·진행 안내를 제공한다. 범위가 바뀌면 기존 미결제 안내를 무효화하고 수정 제안에 다시 동의받는다.

채용 지원은 검토할 지원자 수, 포트폴리오 검토 범위, 면접 횟수·시간, 평가 전달 방식을 명시한다. 지원자 자료는 초기 공개 문의 폼에 불필요하게 수집하지 않고 협의 후 접근 제한된 경로로 받는다. 필요한 자료 공유 권한을 기업과 확인한다. 단회 컨설팅을 지속적인 채용 대행이나 팀·제품 제작 계약으로 설명하지 않는다.

## 4. 화면 목록과 공통 구성

| 화면 | 핵심 요소 |
|---|---|
| 홈 서비스 카드 | 이름·역할·상시/모집 상태·회차·방식·상세 링크 |
| 서비스 상세 | 대상·범위·결과물·진행 방식·전문성·가격/협의 여부·신청 절차·정책·상태별 버튼 |
| 신청 폼 | 서비스별 최소 질문, 오류 위치 안내, 제출 중 중복 방지, 보완할 입력 유지 |
| 일정 선택 | 실제 예약 가능 시간, 시간대, 선택 요약, 빈 상태 |
| 신청 완료 | 접수 번호·현재 상태·다음 단계·예정 안내일·관리 링크 접근 안내 |
| 신청 관리 | 본인 확인, 제출 내용·보완 요청·결제 안내·확정 일정·변경/취소 요청 |
| 결제 안내 | 서비스·모집 회차·제안 버전·일정·총 결제액·기한·정책 동의·결제 버튼 |
| 결제 결과 | 확정 / 확인 중 / 실패 / 기한 만료를 구분, 다음 행동 제공 |
| 확정 안내 | 일정·준비 자료·제출 마감·접속/장소·문의·변경/취소 경로 |

교육 모집 마감 후 기존의 유효한 결제 안내는 그 안내에 확보된 자리와 기한에 따라 처리한다. 신규 신청 마감과 기존 결제 안내 취소를 구분한다. 운영자가 모집 전체를 취소하면 미결제 안내를 무효화하고 결제된 신청을 후속 처리 대상으로 표시한다.

## 5. 상태 모델

신청 상태, 결제 상태, 일정/정원 확보 상태를 분리하여 기록한다. ‘취소 요청’만으로 환불 완료나 일정 해제를 표시하지 않는다.

| 대상 | 상태와 주요 전이 |
|---|---|
| 검토형 신청 | 접수 → 검토 중 ↔ 보완 요청 → 승인 / 참여 어려움 / 대기 / 철회 |
| 기업 문의 | 접수 → 검토·협의 중 → 제안 발송 → 합의 완료 / 종료 |
| 결제 안내 | 미발급 → 유효 → 결제됨 / 기한 만료 / 철회·대체됨 |
| 결제 | 미결제 → 처리 중 → 성공 / 실패; 성공 → 환불 요청 → 처리 중 → 부분 환불 / 전액 환불 / 환불 실패 |
| 자리·일정 | 가능 → 임시 확보 → 확정 또는 해제 |
| 참여·예약 | 미확정 → 확정 → 진행 중(다회) → 완료; 변경 요청·취소 요청은 별도 처리 항목 |

확정 조건: 유효한 신청/합의, 유효한 결제 안내, 검증된 결제 성공, 필요한 자리·일정 확보가 모두 충족되어야 한다. 단회 코칭은 검토 승인 없이 예약 조건을 충족하면 된다.

부분 환불 후 남은 회차를 진행할 수 있으므로 결제 상태만으로 참여 상태를 결정하지 않는다. 결제 기한 만료는 참여 어려움 판정과 다르다. 재안내는 최신 자리·일정·금액을 확인한 새 안내로 발급한다.

## 6. 운영자 어드민

첫 화면은 서비스 매출 대시보드보다 ‘오늘 처리할 일’을 우선한다.

- 신규 신청·기업 문의, 보완 답변, 결제 기한 임박/만료, 일정 변경·취소 요청, 결제·환불 예외, 자료 제출 예정 목록.
- 신청 상세: 제출 내용, 검토 메모(비공개), 연락 이력, 일정, 결제·환불 상태, 보완 요청·승인·참여 어려움·대기·결제 안내 액션.
- 통합 캘린더: 네 서비스의 확정/임시 확보 일정과 준비 시간·개인 차단 일정. 운영자가 명시적으로 선택·공개한 날짜와 시간만 판매한다. Google의 빈 시간 조회로 슬롯을 생성하거나 자동 차단하지 않는다. 공개 슬롯·일정 묶음·예약 변경은 OFFSET 어드민에서 관리한다.
- 모집 관리: 기간, 정원, 신청 수, 결제 대기 확보 수, 확정 수를 각각 표시. 신청 수가 정원을 차지하지 않는다.
- 결제 안내 생성: 가격·일정·기한·범위·정책 버전을 확인하는 미리보기 후 발급. 유효한 이전 안내가 있으면 중복 발급 대신 대체/연장 여부 선택.
- 콘텐츠와 운영 설정 분리: 공개 설명 수정이 이미 결제된 계약 내용·일정을 덮어쓰지 않는다.
- 활동 이력: 상태 변경·금액·일정·안내 발급·취소·환불 처리의 담당자와 시간을 기록한다.

검토형 신청의 승인·참여 어려움·기업 제안 확정은 운영자가 판단한다. 결제 성공에 따른 확정, 임시 확보 만료, 기한 알림은 자동화한다. 임의의 AI 자동 선별은 도입하지 않는다.

## 7. 자리·결제·일정 예외 처리

| 상황 | 처리 원칙 |
|---|---|
| 두 사람이 같은 단회 시간 선택 | 결제 직전 서버에서 한 명만 임시 확보. 다른 신청자는 입력을 유지하고 다른 시간 선택 |
| 정원보다 많은 승인 | 결제 대기 확보 + 확정 수가 정원을 초과하지 않게 안내 발급 차단. 검토 승인만으로 결제 가능하게 하지 않음 |
| 결제 실패·이탈 | 확보 기한 안에서는 재시도. 기한 후 해제하며 재시도 전 가능 여부 재확인 |
| 결제 성공 알림 중복 | 같은 거래를 한 번만 반영. 중복 예약·정원 차감·확정 메일 방지 |
| 결제 중 화면 종료 | 서버 검증으로 처리하고 신청 관리에서 결과 확인. 성공 화면 방문을 요구하지 않음 |
| 기한과 결제 성공이 경합 | 결제 시각·기한·실제 자원을 대조. 자원이 해제되어 다른 고객에게 배정됐다면 확정하지 않고 결제 예외로 표시, 취소/환불 또는 동의한 대체 일정 처리 |
| 결제 상태 불명 | ‘결제 확인 중’ 표시. 곧바로 재결제를 유도하지 않고 사업자 조회·재확인 후 처리 |
| 만료·대체된 링크 사용 | 결제 차단. 최신 상태와 재문의 경로 표시 |
| 자료 링크 권한 없음 | 보완 요청. 결제 전이면 안내 발급 보류, 확정 후이면 운영자가 준비 가능성을 확인하여 대응 |
| 일정 변경 | 운영자가 정책에 따라 처리. 새 시간 확보 후 기존 시간 해제. 실패하면 기존 예약 유지. 다회 과정은 변경 대상 회차 명시 |
| 취소·환불 요청 | 정책과 제공 내역 확인 → 처리 내용·금액 기록 → 결제 사업자 처리 확인. 운영상 취소와 실제 환불 상태 별도 표시 |
| 운영자 사유 취소·과정 미개설 | 신규 결제 중지, 대상자 안내 및 정책에 따른 대체·환불 처리. 대체 일정은 고객 동의 후 확정 |
| 중복 신청 | 같은 모집에 진행 중 신청이 있으면 본인 확인 후 기존 신청으로 안내. 이메일 존재 여부를 공개 응답으로 노출하지 않음 |

확보 만료 작업이 늦어져도 결제·예약 요청에서 기한을 다시 확인한다. 금액·서비스·신청 연결을 서버에서 검증하며 클라이언트 전달 금액을 신뢰하지 않는다. 별도 주문 간 실제 중복 결제가 발생하면 예외 목록에서 추적·정산한다.

## 8. 알림 설계

아래는 제품 구현 후 알림 설계이며, 이 문서 작성으로 실제 메시지를 발송하지 않는다.

- 고객: 신청 접수, 보완 요청, 검토 결과, 결제 안내, 결제 기한 알림, 예약/참여 확정, 일정·자료 준비 알림, 변경·취소·환불 결과.
- 운영자: 신규 신청·문의, 보완 답변, 확정, 일정 변경·취소 요청, 결제 불일치·환불 실패, 알림 발송 실패.
- 안내에는 서비스명, 현재 상태, 다음 행동, 기한·시간대, 본인 확인 후 접근하는 관리 링크를 포함한다. 민감한 자료나 내부 검토 메모는 넣지 않는다.
- 이메일 우선 제안. 문자·카카오 알림은 첫 버전 필수 범위에서 제외한다. 마케팅 메시지는 별도 동의 흐름이다.
- 알림 발송 실패가 결제·예약 성공을 되돌리지 않는다. 어드민에서 재발송하고 발송 중복을 방지한다.
- 제안값: 검토 안내 2영업일 이내, 결제 기한 48시간, 결제 기한 알림 24시간 전 1회. 운영 가능량에 맞춰 확정 전에는 공개 약속으로 쓰지 않는다. 짧은 결제 기한에는 이미 지난 알림을 소급 발송하지 않는다.

## 9. 구현에 필요한 데이터

서비스(신청 유형·공개 상태), 모집 단위(정원·일정), 신청/기업 문의(답변·검토 상태), 자료(접근 제한), 세션(참여자 공개 일정), 내부 준비 시간, 정원/일정 확보(만료 시각), 제안 버전, 결제 안내(금액·기한·정책 스냅샷), 주문·거래·환불, 변경/취소 요청, 알림 발송 이력, 운영 감사 이력.

외부 결제 연동 계약과 실제 데이터 스키마는 구현 단계에서 확정한다. 개인정보 접근 권한·보관 기간·삭제 시 결제 기록 처리도 출시 전에 정한다. 전송/저장된 포트폴리오를 홍보 자료로 재사용하는 권한은 신청 동의에 포함된 것으로 추정하지 않는다.

## 10. QA 완료 기준

1. 단회 코칭에서 결제 성공 시 운영자 승인 없이 예약이 한 번만 확정된다.
2. 검토형은 승인 및 자리 확보 전 결제가 불가능하다. 기업 컨설팅은 제안 합의 전 결제 안내를 발급할 수 없다.
3. 포트폴리오 코칭은 네 세션과 준비 시간 확보 없이 결제 안내를 발급하지 않는다.
4. 같은 슬롯 경쟁과 마지막 정원 경쟁에서 초과 확정이 없다. 그룹 워크샵 세션은 참가자별로 중복 차단하지 않는다.
5. 결제 실패·중복 알림·화면 종료·만료 경합을 처리하고, 불명 상태에서 재결제를 유도하지 않는다.
6. 기한 만료 시 자리 해제, 이전 링크 결제 차단, 재안내 시 최신 조건 적용이 동작한다.
7. 변경 실패 시 기존 예약 유지, 취소와 환불 상태 분리, 부분 환불 후 잔여 회차 유지가 가능하다.
8. 다른 사람의 신청·자료·결제 링크에 접근할 수 없으며 운영 메모가 고객에게 노출되지 않는다.
9. 모바일·키보드에서 폼·일정 선택·결제 이동이 가능하고 오류가 해당 입력과 연결된다.
10. 알림 실패를 운영자가 확인·재처리할 수 있고 결제된 고객을 미결제로 되돌리지 않는다.
11. QA는 별도 데이터·저장소와 결제 테스트 환경을 사용한다. 테스트 알림은 통제된 수신처로 제한한다.
12. ‘QA에 올리자’와 ‘배포하자’ 지시에 따른 별도 배포만 수행한다.

## 11. 다음 확정 항목

- 각 서비스 가격, 단회 시간·온라인 여부, 프로젝트 워크샵의 운영 형태·정원·작업 시간.
- 포트폴리오 코칭의 4회 간격과 제출 마감, 회차 외 피드백 제공 범위.
- 슬롯 공개량·준비 시간·예약 마감, 검토 안내 시간, 결제 기한.
- 변경·취소·환불·노쇼·운영자 취소·미개설 정책과 안내 문구.
- 결제 사업자·수단, 증빙 요청 처리, 기업 선결제 적합성. 후불은 별도 합의 없으면 첫 버전에서 제공하지 않는다.
- Discord 초대 자격과 방식, 고객 자료 보관 기간, 발신 이메일.

## 12. 캘린더 예약 및 Google Meet 연동 — 2026-09-12 추가 설계

사용자 요구: 운영자가 가능 일정을 열고 고객이 웹사이트에서 확인·예약한다. 포트폴리오 코칭은 열린 일정과 예약 완료 상태를 보여준다. 워크샵은 고정 일정이므로 개별 시간 선택이 필요 없다. 온라인 세션은 Google Meet을 사용한다.

### 서비스별 예약 단위

- 1:1 코칭: 어드민에서 실제 예약을 받을 날짜·시작 시간·종료 시간을 직접 선택하여 공개. 반복 생성은 선택적 입력 편의 기능이며 실제 날짜 목록을 확인하고 공개해야 한다. 고객은 날짜 캘린더에서 날짜를 고르고 그날의 시간 버튼으로 한 세션을 선택하여 결제한다. 실제 임시 확보는 결제 직전에 이루어진다.
- 포트폴리오 코칭: 4회 전체를 하나의 일정 묶음으로 판매하는 안을 제안. 운영자는 각 묶음의 실제 4개 날짜·시작/종료 시간과 내부 사전 검토 시간을 설정하고 정원은 묶음당 1명으로 둔다. 매주 같은 요일·시간은 생성 편의 기능이며 4주 연속을 확정한 것은 아니다. 고객에게는 묶음 카드와 펼쳐보는 4회 일정을 제공한다.
- 프로젝트 워크샵: 운영자가 8회 고정 일정을 등록하고 고객은 전체 일정을 확인한 뒤 해당 모집에 신청한다. 고객용 시간 선택 캘린더는 생략하되 운영자 캘린더와 온라인 회차의 Meet 관리는 포함한다.
- 스타트업 컨설팅: 공개 시간표에서 직접 예약하지 않고 협의 후 어드민에서 일정 확정. 온라인이면 Meet 연동한다.

### 포트폴리오 코칭의 검토와 예약 상태

기존 합의인 검토 후 결제를 유지한다. 신청만으로 ‘예약 완료’ 처리하지 않는다.

공개 상태: 신청 가능 → 결제 대기(선택 불가) → 예약 완료. 결제 기한 만료 시 가용성 재확인 후 신청 가능으로 복귀한다. 운영자 비공개·충돌 상태는 신규 선택을 차단한다.

신청 시에는 희망 묶음을 접수하며 자리를 독점하지 않는다. ‘신청 후 검토를 거쳐 확정되며 해당 일정은 아직 확보되지 않았습니다’라고 안내한다. 같은 묶음에 복수 신청이 올 수 있지만 운영자가 한 사람에게 결제 안내를 발급할 때만 네 일정과 준비 시간을 일괄 확보한다. 그동안 다른 신청에는 결제 안내를 발급할 수 없다. 희망 일정이 먼저 확정되면 다른 묶음을 제안하고 신청자 동의 후 변경한다. 동의 없이 일정을 바꾸거나 다른 신청자를 자동 탈락시키지 않는다.

다른 서비스가 열린 포트폴리오 시간을 판매하지 않도록, 공개한 일정 묶음은 해당 서비스 전용으로 내부 확보한다. 아직 신청이 없어도 단회 코칭에 중복 노출하지 않는다. 비공개/폐기 시 유효한 결제 대기·확정 예약이 없을 때만 전용 시간을 해제한다. 공개 전 준비 시간까지 충돌을 확인한다.

공개 화면에는 신청 가능/결제 대기/예약 완료만 표시하고 예약자 신원이나 자료는 노출하지 않는다. 완료 표시는 결제 확인으로 자동 전환하며 운영자는 일정 공개·중지·변경을 관리한다.

### Google 연동 경계

Google Calendar API는 바쁜 시간 조회와 일정 생성·수정, 일정에 연결된 Google Meet 회의 생성을 지원한다. 구현 시 운영자 Google 계정의 인증과 대상 캘린더 쓰기 권한, Meet 지원 여부를 확인한다. Google 계정 요금제의 회의 시간·참여 인원 제한이 해당 서비스에 맞는지도 실제 계정 기준으로 확인한다.

- 운영자가 어드민에서 Google 계정을 연결하고 예약을 기록할 OFFSET 전용 캘린더를 선택한다. 고객에게 Google 로그인이나 캘린더 접근 권한을 요구하지 않는다.
- 예약 가능 시간 = 운영자가 직접 공개한 슬롯 중 OFFSET 내부 예약·임시 확보·준비 시간·전용 묶음과 충돌하지 않는 시간. Google Calendar의 외부 일정으로 공개 여부를 자동 결정하지 않는다. 외부 일정과의 조율은 운영자가 공개 전에 확인한다.
- 공개 화면의 조회 결과만 신뢰하지 않고 임시 확보와 결제 확정 전 OFFSET 내부 슬롯 상태를 다시 확인한다. Google 장애만으로 공개 슬롯을 자동 폐쇄하지 않는다. 연동 실패는 일정·Meet 생성 재시도와 운영자 알림으로 처리한다.
- 예약 확정 후 Google 일정과 회차별 고유 Meet 링크를 생성하고 신청 확인 페이지·참여 안내에 반영한다. 그룹 워크샵은 참가자마다 회의를 새로 만들지 않고 같은 회차를 공유한다. Google 초대 수신만으로 고객 캘린더에 자동 표시된다고 보장하지 않는다.
- 회의 생성은 비동기일 수 있다. 결제·예약 확정과 Google 동기화 상태를 분리하고, 실패 시 링크 준비 중 표시·재시도·운영자 알림을 제공한다. 결제를 다시 요구하지 않는다. 긴급 시 운영자가 Meet 링크를 수동 등록할 수 있다.
- Google 이벤트 ID·회의 생성 요청 ID를 저장해 재시도 시 중복 일정·회의를 만들지 않는다. 동기화 대기·성공·실패·외부 변경 감지 상태를 어드민에서 확인한다.
- MVP에서 OFFSET 예약의 변경·취소 기준은 어드민이다. 어드민에서 확정한 변경을 Google에 반영한다. Google에서 예약 이벤트를 직접 변경·삭제하면 자동 환불·예약 취소로 해석하지 않고 충돌/외부 변경 알림 후 운영자가 처리한다.
- MVP에서는 외부 캘린더의 일반 일정 충돌을 자동 조회하지 않는다. 운영자가 외부 일정 충돌을 발견하면 어드민에서 미판매 슬롯을 닫거나 확정 예약의 변경 절차를 진행한다. 고객 동의 없이 확정 일정을 이동하지 않는다.
- 준비 시간은 참여자 초대 없이 내부 일정으로 관리한다. 워크샵 초대의 게스트 목록은 비공개로 설정하고 참가자의 연락처·신청 정보가 다른 참가자에게 노출되지 않게 검증한다.
- Google 이벤트는 내부 예약 ID와 연결하여 중복 생성·중복 계산을 방지한다. 외부 캘린더 busy 조회는 MVP 범위에서 제외한다.

### MVP 범위 보완

회원가입·전체 마이페이지·고객 자동 일정 변경은 제외한다. 이메일 본인 확인 후 해당 신청의 일정·결제·준비 안내와 요청 경로만 제공한다. 일정 변경 요청은 운영자가 처리한다. 예약 확인 및 일정 선택은 회원 계정 없이 가능하다.

추가 QA: 4회 묶음 일괄 확보·해제, 같은 묶음 복수 승인 경쟁, 포트폴리오 전용 시간의 단회 예약 차단, 고정 워크샵과 다른 서비스 충돌, Google 연결 해제·지연·Meet 생성 실패, 중복 이벤트 방지, 외부 변경 감지, 준비 시간/타인 정보 비노출을 검증한다.

공식 근거:
- https://developers.google.com/workspace/calendar/api/guides/create-events
- https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query

### 공개 슬롯 기준 확정

사용자 수정 반영: Google Calendar 빈 시간 기반 자동 가용성 계산을 사용하지 않는다. 운영자가 선택·공개한 날짜와 시간만 고객에게 노출한다. Google 연동의 목적은 확정 일정 기록·초대와 Meet 링크 생성·변경 관리다. 위의 API busy 조회 설명·공식 링크는 기술 참고이며 MVP 구현 요구사항이 아니다.

### 독립 예약 캘린더 및 확정 후 초대 — 사용자 확정

- 공개 웹사이트의 캘린더는 OFFSET이 제공하는 독립적인 날짜·시간 선택 UI다. 운영자의 Google Calendar를 임베드하거나 일정 목록을 복제해 노출하지 않는다. 비공개 일정과 빈 시간 정보도 가져와 표시하지 않는다.
- 어드민에서 직접 공개한 예약 가능 일시와 해당 슬롯의 예약 상태만 이 UI에 반영한다. 공개하지 않은 날짜·시간은 선택할 수 없다.
- 결제 전 신청 접수·검토·임시 확보 단계는 OFFSET 내부에서 관리하며 Google 일정이나 고객 초대를 생성하지 않는다.
- 결제 성공 검증과 예약/참여 확정 후 운영자의 연결된 Google Calendar에 일정을 생성하고 Google Meet 링크를 연결한다. 신청 시 확인한 이메일을 게스트로 추가하여 Calendar 초대 이메일을 발송하도록 구현한다. 실제 발송은 제품 운영 시 확정 이벤트에 의해 수행되며 문서 작성 중에는 발송하지 않는다.
- 포트폴리오 코칭은 확정된 4회 일정에, 온라인 워크샵은 고정 회차 일정에 해당 참여자를 연결한다. 공유 워크샵 이벤트가 이미 있으면 새 이벤트 대신 참여자를 추가한다. 게스트 연락처는 다른 참여자에게 노출하지 않는다.
- 예약 확정과 초대 수락은 별개다. 수락하지 않았다는 이유로 결제·예약을 취소하지 않는다. 신청자의 캘린더 표시 여부는 고객 설정과 초대 수락에 따라 달라질 수 있으므로 자동 표시를 보장하지 않는다.
- Google 일정 생성·Meet 생성·초대 요청의 성공/실패를 추적하고 재시도하되 같은 예약에 중복 일정·초대를 만들지 않는다. 고객은 신청 확인 페이지에서도 일정·Meet 링크를 확인한다.
`,html:`<h1 id="section-offset-신청-예약-결제-상세-설계-v0-4">OFFSET 신청·예약·결제 상세 설계 v0.4</h1><p>작성일: 2026-09-12. 기획 설계 문서이며 구현·배포·실제 결제·알림 발송은 수행하지 않았다.</p>
<h2 id="section-1-결정-수준과-범위">1. 결정 수준과 범위</h2><p>확정 방향: 1:1 코칭은 즉시 예약·결제, 포트폴리오 코칭과 프로젝트 워크샵은 신청 검토 후 결제, 스타트업 컨설팅은 범위·일정·비용 협의 후 결제한다. 홈에서 네 서비스를 소개하며 별도 프로그램 목록 페이지를 만들지 않는다.</p>
<p>이하 화면·운영 규칙은 이 방향을 구현하기 위한 설계안이다. 가격, 제공 시간, 정원, 결제 수단·사업자, 취소·환불 조건은 아직 확정하지 않았다. 환불 가능 여부나 금액을 임의로 정하지 않는다. 정책 확정 시 해당 서비스의 실제 제공 방식과 적용 요건을 검토하여 별도 문서화한다.</p>
<p>첫 버전 제안: 사이트 내 신청 폼과 어드민, 결제 서비스 연동, 이메일 기반 신청 관리. 일반 회원가입·학습 관리 시스템·기업 후불·분할 결제·자동 대기자 승격은 후속 범위로 둔다. 결제 사업자는 아직 선택하지 않는다.</p>
<h2 id="section-2-공통-원칙">2. 공통 원칙</h2><ul>
<li>신청 접수, 참여 승인, 결제 완료, 예약·참여 확정은 별개다. 완료 화면에서 현재 상태와 다음 행동을 명시한다.</li>
<li>결제 성공은 결제 사업자의 검증된 서버 응답을 근거로 판단한다. 브라우저가 성공 페이지에 도착한 것만으로 확정하지 않는다.</li>
<li>모든 서비스는 운영자 한 명의 시간표를 공유한다. 온라인 세션, 기업 면접, 준비 시간, 차단 일정의 충돌을 함께 검사한다.</li>
<li>일정에는 날짜·시작/종료 시간·시간대(기본 Asia/Seoul)를 표시한다. 상시는 언제든 접수할 수 있다는 뜻이며 모든 시간에 예약할 수 있다는 뜻이 아니다.</li>
<li>신청 정보·포트폴리오는 공개 페이지에 노출하지 않는다. 관리 링크는 본인 확인 후 접근하며 추측 가능한 신청 번호만으로 열람할 수 없다.</li>
<li>신청자는 이메일 인증 링크로 자신의 신청·결제·일정·자료를 확인한다. 링크 만료 시 재발급하며 이메일 미수신 안내와 문의 경로를 제공한다. 회원가입은 요구하지 않는 안이다.</li>
<li>필수 동의와 선택 마케팅 동의를 분리한다. 자료 보관 기간과 삭제 절차는 출시 전에 확정한다.</li>
</ul>
<h2 id="section-3-서비스별-방문자-흐름">3. 서비스별 방문자 흐름</h2><h3 id="section-3-1-1-1-코칭-즉시-예약">3.1 1:1 코칭 — 즉시 예약</h3><p>상세의 기본 버튼: ‘일정 선택하기’.</p>
<ol>
<li>상세에서 가능한 주제, 제공 시간·가격·방식, 준비 자료, 변경·취소 조건을 확인한다.</li>
<li>주제와 고민을 작성한다. 이름·이메일은 필수, 경력 단계는 필요한 범위로 선택한다. 포트폴리오/프로젝트 리뷰는 열람 가능한 자료 링크를 필수로 받고, 커리어 상담·가상 인터뷰는 관련 자료를 선택 또는 주제별 필수로 설정한다.</li>
<li>운영자가 공개한 시간 중 선택한다. 일정 없음은 ‘현재 예약 가능한 일정이 없습니다’와 문의 경로를 보여주며 결제 단계로 보내지 않는다.</li>
<li>결제 직전 일정·금액·입력 정보·정책을 확인한다. 이때 해당 시간을 임시 확보하고 남은 시간을 표시한다. 임시 확보 시간은 설정값이며 제안값은 10분이다.</li>
<li>결제 성공 검증과 시간 확보를 완료하면 자동으로 ‘예약 확정’. 운영자 승인 단계는 없다.</li>
<li>확정 화면에 일정, 접속/장소 안내, 제출 자료, 변경·취소 요청 경로를 제공한다. 접속 링크가 아직 없으면 안내 예정 시점을 표시한다.</li>
</ol>
<p>운영자는 공개 슬롯, 예약 마감 시점, 예약 가능한 미래 기간, 세션 전후 여유 시간, 일별·주별 한도를 관리한다. 모두 가격·시간과 함께 출시 전 설정한다. 준비가 필요한 코칭은 준비 시간을 확보한 슬롯만 판매한다. 포트폴리오 4회 과정의 사전 검토 1시간을 단회 코칭에도 자동 적용하지 않는다.</p>
<p>요청 주제는 한 세션의 핵심 주제 하나를 선택하게 하는 안이다. 여러 서비스를 한 번에 제공한다는 기대를 막기 위해 포함 범위와 추가 지원 여부를 명시한다. 지원하지 않는 요청은 결제 전 문의 경로로 연결한다.</p>
<h3 id="section-3-2-포트폴리오-코칭-적합성-검토와-4회-일정-확보">3.2 포트폴리오 코칭 — 적합성 검토와 4회 일정 확보</h3><p>상세의 기본 버튼: ‘코칭 신청하기’. 버튼 근처에 ‘신청 내용을 확인한 뒤 참여 가능 여부와 결제를 안내합니다’ 표시.</p>
<ol>
<li>모집 상세에서 목표, 대상, 총 4회, 매회 사전 검토 1시간 + 온라인 1:1 리뷰 1시간, 가격, 모집 일정과 검토 안내 시점을 확인한다.</li>
<li>이름·이메일, 경력 단계, 포트폴리오 링크, 현재 고민, 개선 목표, 희망하는 공개 4회 일정 묶음, 회차 사이 수정 작업 가능 여부를 제출한다.</li>
<li>접수 완료 화면에 신청 번호와 ‘검토 중이며 아직 참여가 확정되지 않았습니다’ 및 결과 안내 예정일을 표시한다.</li>
<li>운영자는 자료 열람 가능 여부, 리뷰 가능한 포트폴리오 존재 여부, 목표와 과정의 적합성, 일정·수용 가능량을 확인한다. 평가 점수나 취업 가능성을 선별 기준으로 삼는 설계는 아니다.</li>
<li>자료가 부족하면 보완 요청, 적합하면 희망 일정 묶음의 가용성을 확인, 맞지 않으면 이유와 함께 이번 과정 참여 어려움 안내. 대기는 참여자가 원하는 경우에만 등록한다.</li>
<li>운영자는 아래 12장의 일정 묶음 방식에 따라 결제 안내 전에 신청자가 고른 4회 일정을 확인하고 네 세션 및 각 사전 검토 시간을 임시 확보한다. 사전 검토 시간은 내부 일정이며 참여자 예약 시간과 구분한다.</li>
<li>운영자가 최종 금액·4회 일정·결제 기한을 확인하여 결제 안내를 보낸다. 기한 동안 정원 한 자리와 관련 시간을 확보한다.</li>
<li>기한 내 결제 성공 시 ‘참여 확정’. 회차별 제출 일정과 접속 안내를 제공한다. 기한 만료 시 미결제 자리·일정을 해제하며 재신청 또는 재협의 경로를 제공한다.</li>
</ol>
<p>결제 기한 제안값: 안내 후 48시간. 모집 종료·시작일보다 늦어지지 않게 조정한다. 4회 간격, 자료 제출 마감, 회차 외 피드백 범위는 미정이며 상세 발행 전 입력한다.</p>
<p>참여자 한 명당 최소 8시간의 운영 시간에 일정 조율·자료 관리 시간이 추가된다. 정원 숫자와 함께 실제 4회 일정을 수용할 수 있는지도 검증한다.</p>
<h3 id="section-3-3-프로젝트-워크샵-8주-참여-적합성-검토">3.3 프로젝트 워크샵 — 8주 참여 적합성 검토</h3><p>상세의 기본 버튼: ‘워크샵 신청하기’.</p>
<ol>
<li>모집 상세에 8주·총 8회 일정, 방식·장소, 회당 시간, 목표 결과물, 필요한 기초 역량, 예상 개인 작업 시간, 가격·정원을 명시한다. 미정 항목이 있으면 결제 안내를 시작하지 않는다.</li>
<li>이름·이메일, 디자인 경험, 참여 목표, 만들고 싶은 앱/문제(있다면), 일정 참여 가능 여부와 주간 작업 가능 시간을 제출한다. 포트폴리오는 필수 선발 자료로 기본 설정하지 않는다.</li>
<li>접수 완료 → 운영자 검토 → 필요 시 보완 요청 → 참여 승인 또는 참여 어려움/대기 안내.</li>
<li>검토 기준은 과정의 선수 조건, 목표 적합성, 8주 일정과 작업 시간 확보 여부다. 선수 조건과 예상 작업 시간은 커리큘럼 확정 후 공개한다.</li>
<li>승인된 신청에 정원 한 자리를 확보하고 결제 안내를 발급한다. 기한 내 결제하면 참여 확정한다.</li>
<li>확정 후 전체 일정, 준비 사항, 첫 회차 안내를 제공한다. 커뮤니티 초대 대상 여부는 별도 정책에 따른다.</li>
</ol>
<p>워크샵의 그룹/개별 운영과 개인/팀 과제는 미정이다. 그룹 운영 시 회차 시간은 코호트 전체 일정으로 한 번만 점유하고, 참가자마다 별도의 운영자 세션으로 중복 계산하지 않는다. 결제 안내 전 운영 방식 확정이 필요하다.</p>
<p>최소 개설 인원 적용 여부와 개설 판단일은 미정이다. 최소 인원을 적용한다면 접수·결제 확정과 과정 개설 여부를 구분하여 안내하고, 개설 실패 시 처리 규칙을 결제 전에 공개한다.</p>
<h3 id="section-3-4-스타트업-컨설팅-범위-합의-후-결제">3.4 스타트업 컨설팅 — 범위 합의 후 결제</h3><p>상세의 기본 버튼: ‘컨설팅 문의하기’. 초기 문의에서 바로 결제하거나 일정을 확정하지 않는다.</p>
<ol>
<li>조직명, 담당자 이름·이메일, 요청 영역, 당면 과제, 희망 일정, 참고 링크를 접수한다. 예산 범위는 선택 입력으로 제안한다.</li>
<li>접수 완료 시 답변 예정 시점을 안내한다.</li>
<li>운영자가 범위와 적합성을 확인하고 필요한 질문으로 보완한다. 별도 상담이 유료인지 여부는 미정이며 임의로 약속하지 않는다.</li>
<li>제안서에 제공 범위·제외 범위, 준비 자료, 세션/면접 시간과 횟수, 결과물, 일정, 최종 금액·결제 기한을 기록한다.</li>
<li>고객이 해당 제안 버전에 동의한 뒤 운영자가 시간을 확보하고 결제 안내를 발급한다.</li>
<li>결제 성공 시 확정하고 준비·진행 안내를 제공한다. 범위가 바뀌면 기존 미결제 안내를 무효화하고 수정 제안에 다시 동의받는다.</li>
</ol>
<p>채용 지원은 검토할 지원자 수, 포트폴리오 검토 범위, 면접 횟수·시간, 평가 전달 방식을 명시한다. 지원자 자료는 초기 공개 문의 폼에 불필요하게 수집하지 않고 협의 후 접근 제한된 경로로 받는다. 필요한 자료 공유 권한을 기업과 확인한다. 단회 컨설팅을 지속적인 채용 대행이나 팀·제품 제작 계약으로 설명하지 않는다.</p>
<h2 id="section-4-화면-목록과-공통-구성">4. 화면 목록과 공통 구성</h2><table>
<thead>
<tr>
<th>화면</th>
<th>핵심 요소</th>
</tr>
</thead>
<tbody><tr>
<td>홈 서비스 카드</td>
<td>이름·역할·상시/모집 상태·회차·방식·상세 링크</td>
</tr>
<tr>
<td>서비스 상세</td>
<td>대상·범위·결과물·진행 방식·전문성·가격/협의 여부·신청 절차·정책·상태별 버튼</td>
</tr>
<tr>
<td>신청 폼</td>
<td>서비스별 최소 질문, 오류 위치 안내, 제출 중 중복 방지, 보완할 입력 유지</td>
</tr>
<tr>
<td>일정 선택</td>
<td>실제 예약 가능 시간, 시간대, 선택 요약, 빈 상태</td>
</tr>
<tr>
<td>신청 완료</td>
<td>접수 번호·현재 상태·다음 단계·예정 안내일·관리 링크 접근 안내</td>
</tr>
<tr>
<td>신청 관리</td>
<td>본인 확인, 제출 내용·보완 요청·결제 안내·확정 일정·변경/취소 요청</td>
</tr>
<tr>
<td>결제 안내</td>
<td>서비스·모집 회차·제안 버전·일정·총 결제액·기한·정책 동의·결제 버튼</td>
</tr>
<tr>
<td>결제 결과</td>
<td>확정 / 확인 중 / 실패 / 기한 만료를 구분, 다음 행동 제공</td>
</tr>
<tr>
<td>확정 안내</td>
<td>일정·준비 자료·제출 마감·접속/장소·문의·변경/취소 경로</td>
</tr>
</tbody></table>
<p>교육 모집 마감 후 기존의 유효한 결제 안내는 그 안내에 확보된 자리와 기한에 따라 처리한다. 신규 신청 마감과 기존 결제 안내 취소를 구분한다. 운영자가 모집 전체를 취소하면 미결제 안내를 무효화하고 결제된 신청을 후속 처리 대상으로 표시한다.</p>
<h2 id="section-5-상태-모델">5. 상태 모델</h2><p>신청 상태, 결제 상태, 일정/정원 확보 상태를 분리하여 기록한다. ‘취소 요청’만으로 환불 완료나 일정 해제를 표시하지 않는다.</p>
<table>
<thead>
<tr>
<th>대상</th>
<th>상태와 주요 전이</th>
</tr>
</thead>
<tbody><tr>
<td>검토형 신청</td>
<td>접수 → 검토 중 ↔ 보완 요청 → 승인 / 참여 어려움 / 대기 / 철회</td>
</tr>
<tr>
<td>기업 문의</td>
<td>접수 → 검토·협의 중 → 제안 발송 → 합의 완료 / 종료</td>
</tr>
<tr>
<td>결제 안내</td>
<td>미발급 → 유효 → 결제됨 / 기한 만료 / 철회·대체됨</td>
</tr>
<tr>
<td>결제</td>
<td>미결제 → 처리 중 → 성공 / 실패; 성공 → 환불 요청 → 처리 중 → 부분 환불 / 전액 환불 / 환불 실패</td>
</tr>
<tr>
<td>자리·일정</td>
<td>가능 → 임시 확보 → 확정 또는 해제</td>
</tr>
<tr>
<td>참여·예약</td>
<td>미확정 → 확정 → 진행 중(다회) → 완료; 변경 요청·취소 요청은 별도 처리 항목</td>
</tr>
</tbody></table>
<p>확정 조건: 유효한 신청/합의, 유효한 결제 안내, 검증된 결제 성공, 필요한 자리·일정 확보가 모두 충족되어야 한다. 단회 코칭은 검토 승인 없이 예약 조건을 충족하면 된다.</p>
<p>부분 환불 후 남은 회차를 진행할 수 있으므로 결제 상태만으로 참여 상태를 결정하지 않는다. 결제 기한 만료는 참여 어려움 판정과 다르다. 재안내는 최신 자리·일정·금액을 확인한 새 안내로 발급한다.</p>
<h2 id="section-6-운영자-어드민">6. 운영자 어드민</h2><p>첫 화면은 서비스 매출 대시보드보다 ‘오늘 처리할 일’을 우선한다.</p>
<ul>
<li>신규 신청·기업 문의, 보완 답변, 결제 기한 임박/만료, 일정 변경·취소 요청, 결제·환불 예외, 자료 제출 예정 목록.</li>
<li>신청 상세: 제출 내용, 검토 메모(비공개), 연락 이력, 일정, 결제·환불 상태, 보완 요청·승인·참여 어려움·대기·결제 안내 액션.</li>
<li>통합 캘린더: 네 서비스의 확정/임시 확보 일정과 준비 시간·개인 차단 일정. 운영자가 명시적으로 선택·공개한 날짜와 시간만 판매한다. Google의 빈 시간 조회로 슬롯을 생성하거나 자동 차단하지 않는다. 공개 슬롯·일정 묶음·예약 변경은 OFFSET 어드민에서 관리한다.</li>
<li>모집 관리: 기간, 정원, 신청 수, 결제 대기 확보 수, 확정 수를 각각 표시. 신청 수가 정원을 차지하지 않는다.</li>
<li>결제 안내 생성: 가격·일정·기한·범위·정책 버전을 확인하는 미리보기 후 발급. 유효한 이전 안내가 있으면 중복 발급 대신 대체/연장 여부 선택.</li>
<li>콘텐츠와 운영 설정 분리: 공개 설명 수정이 이미 결제된 계약 내용·일정을 덮어쓰지 않는다.</li>
<li>활동 이력: 상태 변경·금액·일정·안내 발급·취소·환불 처리의 담당자와 시간을 기록한다.</li>
</ul>
<p>검토형 신청의 승인·참여 어려움·기업 제안 확정은 운영자가 판단한다. 결제 성공에 따른 확정, 임시 확보 만료, 기한 알림은 자동화한다. 임의의 AI 자동 선별은 도입하지 않는다.</p>
<h2 id="section-7-자리-결제-일정-예외-처리">7. 자리·결제·일정 예외 처리</h2><table>
<thead>
<tr>
<th>상황</th>
<th>처리 원칙</th>
</tr>
</thead>
<tbody><tr>
<td>두 사람이 같은 단회 시간 선택</td>
<td>결제 직전 서버에서 한 명만 임시 확보. 다른 신청자는 입력을 유지하고 다른 시간 선택</td>
</tr>
<tr>
<td>정원보다 많은 승인</td>
<td>결제 대기 확보 + 확정 수가 정원을 초과하지 않게 안내 발급 차단. 검토 승인만으로 결제 가능하게 하지 않음</td>
</tr>
<tr>
<td>결제 실패·이탈</td>
<td>확보 기한 안에서는 재시도. 기한 후 해제하며 재시도 전 가능 여부 재확인</td>
</tr>
<tr>
<td>결제 성공 알림 중복</td>
<td>같은 거래를 한 번만 반영. 중복 예약·정원 차감·확정 메일 방지</td>
</tr>
<tr>
<td>결제 중 화면 종료</td>
<td>서버 검증으로 처리하고 신청 관리에서 결과 확인. 성공 화면 방문을 요구하지 않음</td>
</tr>
<tr>
<td>기한과 결제 성공이 경합</td>
<td>결제 시각·기한·실제 자원을 대조. 자원이 해제되어 다른 고객에게 배정됐다면 확정하지 않고 결제 예외로 표시, 취소/환불 또는 동의한 대체 일정 처리</td>
</tr>
<tr>
<td>결제 상태 불명</td>
<td>‘결제 확인 중’ 표시. 곧바로 재결제를 유도하지 않고 사업자 조회·재확인 후 처리</td>
</tr>
<tr>
<td>만료·대체된 링크 사용</td>
<td>결제 차단. 최신 상태와 재문의 경로 표시</td>
</tr>
<tr>
<td>자료 링크 권한 없음</td>
<td>보완 요청. 결제 전이면 안내 발급 보류, 확정 후이면 운영자가 준비 가능성을 확인하여 대응</td>
</tr>
<tr>
<td>일정 변경</td>
<td>운영자가 정책에 따라 처리. 새 시간 확보 후 기존 시간 해제. 실패하면 기존 예약 유지. 다회 과정은 변경 대상 회차 명시</td>
</tr>
<tr>
<td>취소·환불 요청</td>
<td>정책과 제공 내역 확인 → 처리 내용·금액 기록 → 결제 사업자 처리 확인. 운영상 취소와 실제 환불 상태 별도 표시</td>
</tr>
<tr>
<td>운영자 사유 취소·과정 미개설</td>
<td>신규 결제 중지, 대상자 안내 및 정책에 따른 대체·환불 처리. 대체 일정은 고객 동의 후 확정</td>
</tr>
<tr>
<td>중복 신청</td>
<td>같은 모집에 진행 중 신청이 있으면 본인 확인 후 기존 신청으로 안내. 이메일 존재 여부를 공개 응답으로 노출하지 않음</td>
</tr>
</tbody></table>
<p>확보 만료 작업이 늦어져도 결제·예약 요청에서 기한을 다시 확인한다. 금액·서비스·신청 연결을 서버에서 검증하며 클라이언트 전달 금액을 신뢰하지 않는다. 별도 주문 간 실제 중복 결제가 발생하면 예외 목록에서 추적·정산한다.</p>
<h2 id="section-8-알림-설계">8. 알림 설계</h2><p>아래는 제품 구현 후 알림 설계이며, 이 문서 작성으로 실제 메시지를 발송하지 않는다.</p>
<ul>
<li>고객: 신청 접수, 보완 요청, 검토 결과, 결제 안내, 결제 기한 알림, 예약/참여 확정, 일정·자료 준비 알림, 변경·취소·환불 결과.</li>
<li>운영자: 신규 신청·문의, 보완 답변, 확정, 일정 변경·취소 요청, 결제 불일치·환불 실패, 알림 발송 실패.</li>
<li>안내에는 서비스명, 현재 상태, 다음 행동, 기한·시간대, 본인 확인 후 접근하는 관리 링크를 포함한다. 민감한 자료나 내부 검토 메모는 넣지 않는다.</li>
<li>이메일 우선 제안. 문자·카카오 알림은 첫 버전 필수 범위에서 제외한다. 마케팅 메시지는 별도 동의 흐름이다.</li>
<li>알림 발송 실패가 결제·예약 성공을 되돌리지 않는다. 어드민에서 재발송하고 발송 중복을 방지한다.</li>
<li>제안값: 검토 안내 2영업일 이내, 결제 기한 48시간, 결제 기한 알림 24시간 전 1회. 운영 가능량에 맞춰 확정 전에는 공개 약속으로 쓰지 않는다. 짧은 결제 기한에는 이미 지난 알림을 소급 발송하지 않는다.</li>
</ul>
<h2 id="section-9-구현에-필요한-데이터">9. 구현에 필요한 데이터</h2><p>서비스(신청 유형·공개 상태), 모집 단위(정원·일정), 신청/기업 문의(답변·검토 상태), 자료(접근 제한), 세션(참여자 공개 일정), 내부 준비 시간, 정원/일정 확보(만료 시각), 제안 버전, 결제 안내(금액·기한·정책 스냅샷), 주문·거래·환불, 변경/취소 요청, 알림 발송 이력, 운영 감사 이력.</p>
<p>외부 결제 연동 계약과 실제 데이터 스키마는 구현 단계에서 확정한다. 개인정보 접근 권한·보관 기간·삭제 시 결제 기록 처리도 출시 전에 정한다. 전송/저장된 포트폴리오를 홍보 자료로 재사용하는 권한은 신청 동의에 포함된 것으로 추정하지 않는다.</p>
<h2 id="section-10-qa-완료-기준">10. QA 완료 기준</h2><ol>
<li>단회 코칭에서 결제 성공 시 운영자 승인 없이 예약이 한 번만 확정된다.</li>
<li>검토형은 승인 및 자리 확보 전 결제가 불가능하다. 기업 컨설팅은 제안 합의 전 결제 안내를 발급할 수 없다.</li>
<li>포트폴리오 코칭은 네 세션과 준비 시간 확보 없이 결제 안내를 발급하지 않는다.</li>
<li>같은 슬롯 경쟁과 마지막 정원 경쟁에서 초과 확정이 없다. 그룹 워크샵 세션은 참가자별로 중복 차단하지 않는다.</li>
<li>결제 실패·중복 알림·화면 종료·만료 경합을 처리하고, 불명 상태에서 재결제를 유도하지 않는다.</li>
<li>기한 만료 시 자리 해제, 이전 링크 결제 차단, 재안내 시 최신 조건 적용이 동작한다.</li>
<li>변경 실패 시 기존 예약 유지, 취소와 환불 상태 분리, 부분 환불 후 잔여 회차 유지가 가능하다.</li>
<li>다른 사람의 신청·자료·결제 링크에 접근할 수 없으며 운영 메모가 고객에게 노출되지 않는다.</li>
<li>모바일·키보드에서 폼·일정 선택·결제 이동이 가능하고 오류가 해당 입력과 연결된다.</li>
<li>알림 실패를 운영자가 확인·재처리할 수 있고 결제된 고객을 미결제로 되돌리지 않는다.</li>
<li>QA는 별도 데이터·저장소와 결제 테스트 환경을 사용한다. 테스트 알림은 통제된 수신처로 제한한다.</li>
<li>‘QA에 올리자’와 ‘배포하자’ 지시에 따른 별도 배포만 수행한다.</li>
</ol>
<h2 id="section-11-다음-확정-항목">11. 다음 확정 항목</h2><ul>
<li>각 서비스 가격, 단회 시간·온라인 여부, 프로젝트 워크샵의 운영 형태·정원·작업 시간.</li>
<li>포트폴리오 코칭의 4회 간격과 제출 마감, 회차 외 피드백 제공 범위.</li>
<li>슬롯 공개량·준비 시간·예약 마감, 검토 안내 시간, 결제 기한.</li>
<li>변경·취소·환불·노쇼·운영자 취소·미개설 정책과 안내 문구.</li>
<li>결제 사업자·수단, 증빙 요청 처리, 기업 선결제 적합성. 후불은 별도 합의 없으면 첫 버전에서 제공하지 않는다.</li>
<li>Discord 초대 자격과 방식, 고객 자료 보관 기간, 발신 이메일.</li>
</ul>
<h2 id="section-12-캘린더-예약-및-google-meet-연동-2026-09-12-추가-설계">12. 캘린더 예약 및 Google Meet 연동 — 2026-09-12 추가 설계</h2><p>사용자 요구: 운영자가 가능 일정을 열고 고객이 웹사이트에서 확인·예약한다. 포트폴리오 코칭은 열린 일정과 예약 완료 상태를 보여준다. 워크샵은 고정 일정이므로 개별 시간 선택이 필요 없다. 온라인 세션은 Google Meet을 사용한다.</p>
<h3 id="section-서비스별-예약-단위">서비스별 예약 단위</h3><ul>
<li>1:1 코칭: 어드민에서 실제 예약을 받을 날짜·시작 시간·종료 시간을 직접 선택하여 공개. 반복 생성은 선택적 입력 편의 기능이며 실제 날짜 목록을 확인하고 공개해야 한다. 고객은 날짜 캘린더에서 날짜를 고르고 그날의 시간 버튼으로 한 세션을 선택하여 결제한다. 실제 임시 확보는 결제 직전에 이루어진다.</li>
<li>포트폴리오 코칭: 4회 전체를 하나의 일정 묶음으로 판매하는 안을 제안. 운영자는 각 묶음의 실제 4개 날짜·시작/종료 시간과 내부 사전 검토 시간을 설정하고 정원은 묶음당 1명으로 둔다. 매주 같은 요일·시간은 생성 편의 기능이며 4주 연속을 확정한 것은 아니다. 고객에게는 묶음 카드와 펼쳐보는 4회 일정을 제공한다.</li>
<li>프로젝트 워크샵: 운영자가 8회 고정 일정을 등록하고 고객은 전체 일정을 확인한 뒤 해당 모집에 신청한다. 고객용 시간 선택 캘린더는 생략하되 운영자 캘린더와 온라인 회차의 Meet 관리는 포함한다.</li>
<li>스타트업 컨설팅: 공개 시간표에서 직접 예약하지 않고 협의 후 어드민에서 일정 확정. 온라인이면 Meet 연동한다.</li>
</ul>
<h3 id="section-포트폴리오-코칭의-검토와-예약-상태">포트폴리오 코칭의 검토와 예약 상태</h3><p>기존 합의인 검토 후 결제를 유지한다. 신청만으로 ‘예약 완료’ 처리하지 않는다.</p>
<p>공개 상태: 신청 가능 → 결제 대기(선택 불가) → 예약 완료. 결제 기한 만료 시 가용성 재확인 후 신청 가능으로 복귀한다. 운영자 비공개·충돌 상태는 신규 선택을 차단한다.</p>
<p>신청 시에는 희망 묶음을 접수하며 자리를 독점하지 않는다. ‘신청 후 검토를 거쳐 확정되며 해당 일정은 아직 확보되지 않았습니다’라고 안내한다. 같은 묶음에 복수 신청이 올 수 있지만 운영자가 한 사람에게 결제 안내를 발급할 때만 네 일정과 준비 시간을 일괄 확보한다. 그동안 다른 신청에는 결제 안내를 발급할 수 없다. 희망 일정이 먼저 확정되면 다른 묶음을 제안하고 신청자 동의 후 변경한다. 동의 없이 일정을 바꾸거나 다른 신청자를 자동 탈락시키지 않는다.</p>
<p>다른 서비스가 열린 포트폴리오 시간을 판매하지 않도록, 공개한 일정 묶음은 해당 서비스 전용으로 내부 확보한다. 아직 신청이 없어도 단회 코칭에 중복 노출하지 않는다. 비공개/폐기 시 유효한 결제 대기·확정 예약이 없을 때만 전용 시간을 해제한다. 공개 전 준비 시간까지 충돌을 확인한다.</p>
<p>공개 화면에는 신청 가능/결제 대기/예약 완료만 표시하고 예약자 신원이나 자료는 노출하지 않는다. 완료 표시는 결제 확인으로 자동 전환하며 운영자는 일정 공개·중지·변경을 관리한다.</p>
<h3 id="section-google-연동-경계">Google 연동 경계</h3><p>Google Calendar API는 바쁜 시간 조회와 일정 생성·수정, 일정에 연결된 Google Meet 회의 생성을 지원한다. 구현 시 운영자 Google 계정의 인증과 대상 캘린더 쓰기 권한, Meet 지원 여부를 확인한다. Google 계정 요금제의 회의 시간·참여 인원 제한이 해당 서비스에 맞는지도 실제 계정 기준으로 확인한다.</p>
<ul>
<li>운영자가 어드민에서 Google 계정을 연결하고 예약을 기록할 OFFSET 전용 캘린더를 선택한다. 고객에게 Google 로그인이나 캘린더 접근 권한을 요구하지 않는다.</li>
<li>예약 가능 시간 = 운영자가 직접 공개한 슬롯 중 OFFSET 내부 예약·임시 확보·준비 시간·전용 묶음과 충돌하지 않는 시간. Google Calendar의 외부 일정으로 공개 여부를 자동 결정하지 않는다. 외부 일정과의 조율은 운영자가 공개 전에 확인한다.</li>
<li>공개 화면의 조회 결과만 신뢰하지 않고 임시 확보와 결제 확정 전 OFFSET 내부 슬롯 상태를 다시 확인한다. Google 장애만으로 공개 슬롯을 자동 폐쇄하지 않는다. 연동 실패는 일정·Meet 생성 재시도와 운영자 알림으로 처리한다.</li>
<li>예약 확정 후 Google 일정과 회차별 고유 Meet 링크를 생성하고 신청 확인 페이지·참여 안내에 반영한다. 그룹 워크샵은 참가자마다 회의를 새로 만들지 않고 같은 회차를 공유한다. Google 초대 수신만으로 고객 캘린더에 자동 표시된다고 보장하지 않는다.</li>
<li>회의 생성은 비동기일 수 있다. 결제·예약 확정과 Google 동기화 상태를 분리하고, 실패 시 링크 준비 중 표시·재시도·운영자 알림을 제공한다. 결제를 다시 요구하지 않는다. 긴급 시 운영자가 Meet 링크를 수동 등록할 수 있다.</li>
<li>Google 이벤트 ID·회의 생성 요청 ID를 저장해 재시도 시 중복 일정·회의를 만들지 않는다. 동기화 대기·성공·실패·외부 변경 감지 상태를 어드민에서 확인한다.</li>
<li>MVP에서 OFFSET 예약의 변경·취소 기준은 어드민이다. 어드민에서 확정한 변경을 Google에 반영한다. Google에서 예약 이벤트를 직접 변경·삭제하면 자동 환불·예약 취소로 해석하지 않고 충돌/외부 변경 알림 후 운영자가 처리한다.</li>
<li>MVP에서는 외부 캘린더의 일반 일정 충돌을 자동 조회하지 않는다. 운영자가 외부 일정 충돌을 발견하면 어드민에서 미판매 슬롯을 닫거나 확정 예약의 변경 절차를 진행한다. 고객 동의 없이 확정 일정을 이동하지 않는다.</li>
<li>준비 시간은 참여자 초대 없이 내부 일정으로 관리한다. 워크샵 초대의 게스트 목록은 비공개로 설정하고 참가자의 연락처·신청 정보가 다른 참가자에게 노출되지 않게 검증한다.</li>
<li>Google 이벤트는 내부 예약 ID와 연결하여 중복 생성·중복 계산을 방지한다. 외부 캘린더 busy 조회는 MVP 범위에서 제외한다.</li>
</ul>
<h3 id="section-mvp-범위-보완">MVP 범위 보완</h3><p>회원가입·전체 마이페이지·고객 자동 일정 변경은 제외한다. 이메일 본인 확인 후 해당 신청의 일정·결제·준비 안내와 요청 경로만 제공한다. 일정 변경 요청은 운영자가 처리한다. 예약 확인 및 일정 선택은 회원 계정 없이 가능하다.</p>
<p>추가 QA: 4회 묶음 일괄 확보·해제, 같은 묶음 복수 승인 경쟁, 포트폴리오 전용 시간의 단회 예약 차단, 고정 워크샵과 다른 서비스 충돌, Google 연결 해제·지연·Meet 생성 실패, 중복 이벤트 방지, 외부 변경 감지, 준비 시간/타인 정보 비노출을 검증한다.</p>
<p>공식 근거:</p>
<ul>
<li><a href="https://developers.google.com/workspace/calendar/api/guides/create-events" rel="noopener noreferrer">https://developers.google.com/workspace/calendar/api/guides/create-events</a></li>
<li><a href="https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query" rel="noopener noreferrer">https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query</a></li>
</ul>
<h3 id="section-공개-슬롯-기준-확정">공개 슬롯 기준 확정</h3><p>사용자 수정 반영: Google Calendar 빈 시간 기반 자동 가용성 계산을 사용하지 않는다. 운영자가 선택·공개한 날짜와 시간만 고객에게 노출한다. Google 연동의 목적은 확정 일정 기록·초대와 Meet 링크 생성·변경 관리다. 위의 API busy 조회 설명·공식 링크는 기술 참고이며 MVP 구현 요구사항이 아니다.</p>
<h3 id="section-독립-예약-캘린더-및-확정-후-초대-사용자-확정">독립 예약 캘린더 및 확정 후 초대 — 사용자 확정</h3><ul>
<li>공개 웹사이트의 캘린더는 OFFSET이 제공하는 독립적인 날짜·시간 선택 UI다. 운영자의 Google Calendar를 임베드하거나 일정 목록을 복제해 노출하지 않는다. 비공개 일정과 빈 시간 정보도 가져와 표시하지 않는다.</li>
<li>어드민에서 직접 공개한 예약 가능 일시와 해당 슬롯의 예약 상태만 이 UI에 반영한다. 공개하지 않은 날짜·시간은 선택할 수 없다.</li>
<li>결제 전 신청 접수·검토·임시 확보 단계는 OFFSET 내부에서 관리하며 Google 일정이나 고객 초대를 생성하지 않는다.</li>
<li>결제 성공 검증과 예약/참여 확정 후 운영자의 연결된 Google Calendar에 일정을 생성하고 Google Meet 링크를 연결한다. 신청 시 확인한 이메일을 게스트로 추가하여 Calendar 초대 이메일을 발송하도록 구현한다. 실제 발송은 제품 운영 시 확정 이벤트에 의해 수행되며 문서 작성 중에는 발송하지 않는다.</li>
<li>포트폴리오 코칭은 확정된 4회 일정에, 온라인 워크샵은 고정 회차 일정에 해당 참여자를 연결한다. 공유 워크샵 이벤트가 이미 있으면 새 이벤트 대신 참여자를 추가한다. 게스트 연락처는 다른 참여자에게 노출하지 않는다.</li>
<li>예약 확정과 초대 수락은 별개다. 수락하지 않았다는 이유로 결제·예약을 취소하지 않는다. 신청자의 캘린더 표시 여부는 고객 설정과 초대 수락에 따라 달라질 수 있으므로 자동 표시를 보장하지 않는다.</li>
<li>Google 일정 생성·Meet 생성·초대 요청의 성공/실패를 추적하고 재시도하되 같은 예약에 중복 일정·초대를 만들지 않는다. 고객은 신청 확인 페이지에서도 일정·Meet 링크를 확인한다.</li>
</ul>
`,toc:[{id:`section-1-결정-수준과-범위`,label:`1. 결정 수준과 범위`,depth:2},{id:`section-2-공통-원칙`,label:`2. 공통 원칙`,depth:2},{id:`section-3-서비스별-방문자-흐름`,label:`3. 서비스별 방문자 흐름`,depth:2},{id:`section-3-1-1-1-코칭-즉시-예약`,label:`3.1 1:1 코칭 — 즉시 예약`,depth:3},{id:`section-3-2-포트폴리오-코칭-적합성-검토와-4회-일정-확보`,label:`3.2 포트폴리오 코칭 — 적합성 검토와 4회 일정 확보`,depth:3},{id:`section-3-3-프로젝트-워크샵-8주-참여-적합성-검토`,label:`3.3 프로젝트 워크샵 — 8주 참여 적합성 검토`,depth:3},{id:`section-3-4-스타트업-컨설팅-범위-합의-후-결제`,label:`3.4 스타트업 컨설팅 — 범위 합의 후 결제`,depth:3},{id:`section-4-화면-목록과-공통-구성`,label:`4. 화면 목록과 공통 구성`,depth:2},{id:`section-5-상태-모델`,label:`5. 상태 모델`,depth:2},{id:`section-6-운영자-어드민`,label:`6. 운영자 어드민`,depth:2},{id:`section-7-자리-결제-일정-예외-처리`,label:`7. 자리·결제·일정 예외 처리`,depth:2},{id:`section-8-알림-설계`,label:`8. 알림 설계`,depth:2},{id:`section-9-구현에-필요한-데이터`,label:`9. 구현에 필요한 데이터`,depth:2},{id:`section-10-qa-완료-기준`,label:`10. QA 완료 기준`,depth:2},{id:`section-11-다음-확정-항목`,label:`11. 다음 확정 항목`,depth:2},{id:`section-12-캘린더-예약-및-google-meet-연동-2026-09-12-추가-설계`,label:`12. 캘린더 예약 및 Google Meet 연동 — 2026-09-12 추가 설계`,depth:2},{id:`section-서비스별-예약-단위`,label:`서비스별 예약 단위`,depth:3},{id:`section-포트폴리오-코칭의-검토와-예약-상태`,label:`포트폴리오 코칭의 검토와 예약 상태`,depth:3},{id:`section-google-연동-경계`,label:`Google 연동 경계`,depth:3},{id:`section-mvp-범위-보완`,label:`MVP 범위 보완`,depth:3},{id:`section-공개-슬롯-기준-확정`,label:`공개 슬롯 기준 확정`,depth:3},{id:`section-독립-예약-캘린더-및-확정-후-초대-사용자-확정`,label:`독립 예약 캘린더 및 확정 후 초대 — 사용자 확정`,depth:3}]}]},{id:`home`,title:`홈 정보 구조`,category:`화면 설계`,description:`홈의 섹션 구성, 콘텐츠 우선순위와 이동 흐름`,file:`OFFSET-HOME-IA.md`,revisions:[{revision:1,hash:`12829d1318a8b1d9b1e2cb11d0f8512c969cfdeafe009a5213c9d1185929fc58`,recordedAt:`2026-09-12T13:52:53.608Z`,markdown:`# OFFSET 홈 정보 구조 v0.1

2026-09-12 · 와이어프레임 전 논의용 설계. 기존 합의는 유지하고 아래 순서·카피는 제안이다.

## 목적과 주요 행동

방문자가 OFFSET이 누구의 어떤 과제를 돕는지 이해하고, 네 서비스를 비교하여 자신에게 맞는 상세 페이지로 이동한다. 플랫폼 이름을 앞세우고 운영자의 경험과 관점으로 신뢰를 뒷받침한다.

주요 행동: 서비스 상세 보기. 보조 행동: 교육자·컨설턴트의 전문성 확인, 인사이트 읽기. 홈에서 직접 예약·신청·결제하지 않고 각 상세에서 범위와 조건을 확인하도록 연결한다. 타겟 홍보 유입은 개별 상세로 직접 연결할 수 있다.

## 정보 순서

### 0. 헤더

OFFSET 로고(홈) / 서비스(홈 서비스 섹션) / 인사이트(글 목록) / 소개(홈 소개 섹션).

상세 페이지에서도 서비스·소개 링크는 홈의 해당 섹션을 가리킨다. MVP에는 로그인·마이페이지·별도 프로그램 목록 메뉴를 넣지 않는다. 예약 확인은 이메일의 본인 확인 링크로 제공한다.

### 1. 첫 화면 — OFFSET의 역할

헤드라인 제안: ‘디자이너의 성장과 팀의 다음 단계를 함께 만듭니다.’
설명 제안: ‘프로덕트 디자이너를 위한 코칭과 워크샵, 스타트업을 위한 디자인 컨설팅을 제공합니다.’
버튼: ‘서비스 살펴보기’ → 바로 아래 서비스 섹션.

브랜드 이름과 제공 가치를 먼저 소개한다. 짧은 텍스트로 구성해 데스크톱 첫 화면에서 서비스 섹션의 시작이 보이는 것을 목표로 한다. 큰 개인 사진·긴 이력·히어로 영상은 필수로 두지 않는다. 최종 높이·레이아웃·이미지는 디자인 단계에서 결정한다.

### 2. 서비스 — 홈의 핵심

섹션 제목: ‘지금 필요한 도움을 찾아보세요.’
네 서비스를 동일한 기본 카드 구조로 표시한다. 개인 대상 3개, 스타트업 대상 1개를 대상 라벨로 구분하며 카드 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅을 제안한다. 초기에는 필터·탭·캐러셀 없이 네 서비스를 모두 노출한다.

| 서비스 | 대상 라벨 | 설명 초안 | 확인된 메타정보 | 기본 버튼 |
|---|---|---|---|---|
| 1:1 코칭 | 개인 | 커리어, 포트폴리오, 프로젝트, 모의 인터뷰. 지금 필요한 주제를 한 번의 코칭으로 점검합니다. | 상시 · 1회 | 코칭 자세히 보기 |
| 포트폴리오 코칭 | 개인 | 사전 검토와 1:1 리뷰, 직접 수정을 반복하며 포트폴리오를 다듬습니다. | 모집형 · 4회 · 1:1 온라인 | 과정 자세히 보기 |
| 프로젝트 워크샵 | 개인 | 8주 동안 앱 기획부터 디자인 완성까지, 디자인 프로세스를 직접 경험합니다. | 모집형 · 8주 · 8회 | 워크샵 자세히 보기 |
| 스타트업 컨설팅 | 기업 | 팀 빌딩, 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토와 면접관 참여를 지원합니다. | 상시 · 1회 | 컨설팅 자세히 보기 |

카드 구성: 대상 → 이름 → 한두 문장 설명 → 횟수·방식 → 실제 접수 상태 → 상세 링크. 가격은 확정 후 정액 서비스에 표시하는 안이다. 미정 가격·가짜 할인·임의의 예상 가격을 노출하지 않는다. 긴 커리큘럼·전체 일정·FAQ는 상세에서 제공한다.

상태 표시:
- 단회 코칭: ‘예약 가능’ / ‘현재 예약 가능한 일정 없음’ / ‘접수 중지’. 예약 가능은 실제 열린 슬롯이 있을 때만 표시한다.
- 포트폴리오 코칭: ‘모집 예정’ / ‘신청 가능’ / ‘현재 선택 가능한 일정 없음’ / ‘모집 마감’. 전체 일정 묶음의 가용성을 반영하며 묶음별 결제 대기·예약 완료는 상세에서 보여준다.
- 프로젝트 워크샵: ‘모집 예정’ / ‘모집 중’ / ‘모집 마감’. 모집 중인 경우 확정된 시작일을 함께 표시한다.
- 스타트업 컨설팅: ‘문의 가능’ / ‘문의 접수 중지’. 상시 문의를 즉시 착수 가능으로 표현하지 않는다.
- 상태가 닫혀도 제공 서비스의 설명과 상세 링크는 유지한다. 접수 가능 여부에 맞지 않는 신청 버튼은 상세에서 차단한다.

검토형에는 상세 진입 후 검토·결제 순서를 명확히 안내한다. 홈 카드에서 신청 완료나 즉시 참여를 암시하지 않는다. 거짓 잔여석이나 신청자 신원을 표시하지 않는다.

### 3. 접근 방식과 운영자 소개 — 선택의 근거

하나의 섹션 안에서 접근 방식과 운영자의 근거를 연결한다. 별도의 긴 교육 철학 섹션을 반복하지 않는다.

제목 제안: ‘누가, 어떤 기준으로 함께하나요?’

접근 방식 초안:
- 현재 상황과 해결할 과제를 기준으로 시작한다.
- 포트폴리오·프로젝트·팀의 실제 자료를 놓고 구체적으로 검토한다.
- 서비스 범위에 맞춰 다음 행동과 개선 방향을 함께 정리한다.

소개 구성: 운영자 이름·OFFSET에서의 역할 / 짧은 소개 / 서비스와 관련된 경력·활동 2~3개 / 필요한 외부 프로필 링크. 사진은 보조 요소로 검토한다. 현재 직함·연차·수강생 수·회사 로고 사용 여부는 사용자가 확인한 자료를 받은 후 확정한다. 기존 사이트의 과거 정보를 최신 사실로 자동 승계하지 않는다.

공개 가능한 후기·사례가 확보되면 이 섹션에 연결한다. 초기 자료가 없으면 빈 후기 영역이나 임의의 성과 수치를 만들지 않는다. 별도 소개 페이지는 MVP에서 홈에 통합하는 안을 제안한다.

### 4. 인사이트 — 관점을 먼저 경험하는 경로

제목: ‘디자인을 바라보는 관점’.
설명 초안: ‘포트폴리오와 프로덕트 디자이너의 일에 대한 생각을 나눕니다.’

대표 글 최대 3개를 표시하고 카드에 시리즈명(해당 시), 글 제목, 짧은 요약을 제공한다. 버튼: ‘인사이트 전체 보기’. 발행된 글 중 운영자가 우선 노출 글을 선택하고, 빈 자리는 최신 글로 채우는 안이다.

‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’은 시리즈 후보이며 실제 발행된 글과 시리즈만 노출한다. 이북 구매 버튼과 뉴스레터 구독 폼은 이번 홈의 기본 범위에 포함하지 않는다. 글이 1~2개면 해당 개수만 표시하고 0개면 섹션과 헤더 인사이트 링크를 임시 숨긴다. 실제 콘텐츠 목록 공개 시 함께 노출한다.

### 5. 푸터

OFFSET 로고·짧은 설명, 운영 문의 채널, 확인된 공식 LinkedIn 링크, 필요한 사업자 정보·정책 링크를 제공한다. 기업 컨설팅 문의는 컨설팅 상세로 연결하고 일반 문의와 구분한다. 공개 Discord 가입 버튼은 두지 않는다. 참여자 자격에 따른 초대는 참여 안내에서 처리한다.

별도 마지막 대형 CTA 섹션은 초기에는 생략한다. 서비스는 위에서 비교·선택하게 하고, 푸터의 서비스 링크로 돌아갈 수 있게 한다.

## 레이아웃과 접근성 기준

- 데스크톱에서는 서비스 4개를 2열 배치하는 안을 우선 검토하고, 모바일은 동일 순서의 1열로 제공한다. 시각 스타일·간격은 제공받을 디자인 시스템에 맞춰 결정한다.
- 제목은 의미 있는 계층을 사용하며 상태를 색상만으로 구분하지 않는다. 카드 링크는 서비스명과 연결해 인식 가능하게 한다.
- 중요 설명을 호버에 숨기지 않는다. 모바일에서도 대상·이름·설명·상태·링크를 모두 확인할 수 있게 한다.
- 서비스 앵커 이동 시 고정 헤더가 제목을 가리지 않게 한다. 움직임은 내용 이해와 탐색을 방해하지 않도록 설계한다.

## 어드민 편집 범위

첫 문구·설명, 서비스 카드 설명과 노출 순서, 운영자 소개·근거, 대표 글을 편집한다. 예약 가능·모집 상태는 슬롯·모집 설정에서 계산하거나 명시적 접수 중지 설정으로 관리한다. 홈 문구 편집에서 상태를 임의 덮어쓰지 않는다. 공개 전 미리보기로 데스크톱·모바일 확인을 제공한다.

## 확인 기준

방문자는 홈만 보고 네 서비스의 차이와 자신에게 맞는 상세 진입점을 찾을 수 있어야 한다. 단회 포트폴리오 피드백과 4회 개선 과정의 차이가 설명되어야 한다. 서비스 수가 적거나 모집이 닫혀도 빈 카드·오해를 부르는 신청 버튼이 없어야 한다. 개인 일정·고객 정보·Meet 링크는 홈에 노출하지 않는다.

## 다음 결정

1. 헤드라인과 설명 문구의 어조.
2. 네 소개에 사용할 정확한 이름·직함·경력과 공개 자료.
3. 초기 인사이트 글 및 대표 시리즈.
4. 서비스별 가격·모집 조건은 상세 설계와 병행해 확정.

이 IA로 와이어프레임을 작성할 수 있다. 카피·순서는 피그마에서 함께 검토하여 수정하며 이번 문서 작성은 디자인 확정·코드 변경·배포를 의미하지 않는다.
`,html:`<h1 id="section-offset-홈-정보-구조-v0-1">OFFSET 홈 정보 구조 v0.1</h1><p>2026-09-12 · 와이어프레임 전 논의용 설계. 기존 합의는 유지하고 아래 순서·카피는 제안이다.</p>
<h2 id="section-목적과-주요-행동">목적과 주요 행동</h2><p>방문자가 OFFSET이 누구의 어떤 과제를 돕는지 이해하고, 네 서비스를 비교하여 자신에게 맞는 상세 페이지로 이동한다. 플랫폼 이름을 앞세우고 운영자의 경험과 관점으로 신뢰를 뒷받침한다.</p>
<p>주요 행동: 서비스 상세 보기. 보조 행동: 교육자·컨설턴트의 전문성 확인, 인사이트 읽기. 홈에서 직접 예약·신청·결제하지 않고 각 상세에서 범위와 조건을 확인하도록 연결한다. 타겟 홍보 유입은 개별 상세로 직접 연결할 수 있다.</p>
<h2 id="section-정보-순서">정보 순서</h2><h3 id="section-0-헤더">0. 헤더</h3><p>OFFSET 로고(홈) / 서비스(홈 서비스 섹션) / 인사이트(글 목록) / 소개(홈 소개 섹션).</p>
<p>상세 페이지에서도 서비스·소개 링크는 홈의 해당 섹션을 가리킨다. MVP에는 로그인·마이페이지·별도 프로그램 목록 메뉴를 넣지 않는다. 예약 확인은 이메일의 본인 확인 링크로 제공한다.</p>
<h3 id="section-1-첫-화면-offset의-역할">1. 첫 화면 — OFFSET의 역할</h3><p>헤드라인 제안: ‘디자이너의 성장과 팀의 다음 단계를 함께 만듭니다.’
설명 제안: ‘프로덕트 디자이너를 위한 코칭과 워크샵, 스타트업을 위한 디자인 컨설팅을 제공합니다.’
버튼: ‘서비스 살펴보기’ → 바로 아래 서비스 섹션.</p>
<p>브랜드 이름과 제공 가치를 먼저 소개한다. 짧은 텍스트로 구성해 데스크톱 첫 화면에서 서비스 섹션의 시작이 보이는 것을 목표로 한다. 큰 개인 사진·긴 이력·히어로 영상은 필수로 두지 않는다. 최종 높이·레이아웃·이미지는 디자인 단계에서 결정한다.</p>
<h3 id="section-2-서비스-홈의-핵심">2. 서비스 — 홈의 핵심</h3><p>섹션 제목: ‘지금 필요한 도움을 찾아보세요.’
네 서비스를 동일한 기본 카드 구조로 표시한다. 개인 대상 3개, 스타트업 대상 1개를 대상 라벨로 구분하며 카드 순서는 1:1 코칭 → 포트폴리오 코칭 → 프로젝트 워크샵 → 스타트업 컨설팅을 제안한다. 초기에는 필터·탭·캐러셀 없이 네 서비스를 모두 노출한다.</p>
<table>
<thead>
<tr>
<th>서비스</th>
<th>대상 라벨</th>
<th>설명 초안</th>
<th>확인된 메타정보</th>
<th>기본 버튼</th>
</tr>
</thead>
<tbody><tr>
<td>1:1 코칭</td>
<td>개인</td>
<td>커리어, 포트폴리오, 프로젝트, 모의 인터뷰. 지금 필요한 주제를 한 번의 코칭으로 점검합니다.</td>
<td>상시 · 1회</td>
<td>코칭 자세히 보기</td>
</tr>
<tr>
<td>포트폴리오 코칭</td>
<td>개인</td>
<td>사전 검토와 1:1 리뷰, 직접 수정을 반복하며 포트폴리오를 다듬습니다.</td>
<td>모집형 · 4회 · 1:1 온라인</td>
<td>과정 자세히 보기</td>
</tr>
<tr>
<td>프로젝트 워크샵</td>
<td>개인</td>
<td>8주 동안 앱 기획부터 디자인 완성까지, 디자인 프로세스를 직접 경험합니다.</td>
<td>모집형 · 8주 · 8회</td>
<td>워크샵 자세히 보기</td>
</tr>
<tr>
<td>스타트업 컨설팅</td>
<td>기업</td>
<td>팀 빌딩, 서비스 플랜, 디자인 리뷰, 지원자 포트폴리오 검토와 면접관 참여를 지원합니다.</td>
<td>상시 · 1회</td>
<td>컨설팅 자세히 보기</td>
</tr>
</tbody></table>
<p>카드 구성: 대상 → 이름 → 한두 문장 설명 → 횟수·방식 → 실제 접수 상태 → 상세 링크. 가격은 확정 후 정액 서비스에 표시하는 안이다. 미정 가격·가짜 할인·임의의 예상 가격을 노출하지 않는다. 긴 커리큘럼·전체 일정·FAQ는 상세에서 제공한다.</p>
<p>상태 표시:</p>
<ul>
<li>단회 코칭: ‘예약 가능’ / ‘현재 예약 가능한 일정 없음’ / ‘접수 중지’. 예약 가능은 실제 열린 슬롯이 있을 때만 표시한다.</li>
<li>포트폴리오 코칭: ‘모집 예정’ / ‘신청 가능’ / ‘현재 선택 가능한 일정 없음’ / ‘모집 마감’. 전체 일정 묶음의 가용성을 반영하며 묶음별 결제 대기·예약 완료는 상세에서 보여준다.</li>
<li>프로젝트 워크샵: ‘모집 예정’ / ‘모집 중’ / ‘모집 마감’. 모집 중인 경우 확정된 시작일을 함께 표시한다.</li>
<li>스타트업 컨설팅: ‘문의 가능’ / ‘문의 접수 중지’. 상시 문의를 즉시 착수 가능으로 표현하지 않는다.</li>
<li>상태가 닫혀도 제공 서비스의 설명과 상세 링크는 유지한다. 접수 가능 여부에 맞지 않는 신청 버튼은 상세에서 차단한다.</li>
</ul>
<p>검토형에는 상세 진입 후 검토·결제 순서를 명확히 안내한다. 홈 카드에서 신청 완료나 즉시 참여를 암시하지 않는다. 거짓 잔여석이나 신청자 신원을 표시하지 않는다.</p>
<h3 id="section-3-접근-방식과-운영자-소개-선택의-근거">3. 접근 방식과 운영자 소개 — 선택의 근거</h3><p>하나의 섹션 안에서 접근 방식과 운영자의 근거를 연결한다. 별도의 긴 교육 철학 섹션을 반복하지 않는다.</p>
<p>제목 제안: ‘누가, 어떤 기준으로 함께하나요?’</p>
<p>접근 방식 초안:</p>
<ul>
<li>현재 상황과 해결할 과제를 기준으로 시작한다.</li>
<li>포트폴리오·프로젝트·팀의 실제 자료를 놓고 구체적으로 검토한다.</li>
<li>서비스 범위에 맞춰 다음 행동과 개선 방향을 함께 정리한다.</li>
</ul>
<p>소개 구성: 운영자 이름·OFFSET에서의 역할 / 짧은 소개 / 서비스와 관련된 경력·활동 2~3개 / 필요한 외부 프로필 링크. 사진은 보조 요소로 검토한다. 현재 직함·연차·수강생 수·회사 로고 사용 여부는 사용자가 확인한 자료를 받은 후 확정한다. 기존 사이트의 과거 정보를 최신 사실로 자동 승계하지 않는다.</p>
<p>공개 가능한 후기·사례가 확보되면 이 섹션에 연결한다. 초기 자료가 없으면 빈 후기 영역이나 임의의 성과 수치를 만들지 않는다. 별도 소개 페이지는 MVP에서 홈에 통합하는 안을 제안한다.</p>
<h3 id="section-4-인사이트-관점을-먼저-경험하는-경로">4. 인사이트 — 관점을 먼저 경험하는 경로</h3><p>제목: ‘디자인을 바라보는 관점’.
설명 초안: ‘포트폴리오와 프로덕트 디자이너의 일에 대한 생각을 나눕니다.’</p>
<p>대표 글 최대 3개를 표시하고 카드에 시리즈명(해당 시), 글 제목, 짧은 요약을 제공한다. 버튼: ‘인사이트 전체 보기’. 발행된 글 중 운영자가 우선 노출 글을 선택하고, 빈 자리는 최신 글로 채우는 안이다.</p>
<p>‘포트폴리오’, ‘슬기로운 프로덕트 디자이너 생활’은 시리즈 후보이며 실제 발행된 글과 시리즈만 노출한다. 이북 구매 버튼과 뉴스레터 구독 폼은 이번 홈의 기본 범위에 포함하지 않는다. 글이 1~2개면 해당 개수만 표시하고 0개면 섹션과 헤더 인사이트 링크를 임시 숨긴다. 실제 콘텐츠 목록 공개 시 함께 노출한다.</p>
<h3 id="section-5-푸터">5. 푸터</h3><p>OFFSET 로고·짧은 설명, 운영 문의 채널, 확인된 공식 LinkedIn 링크, 필요한 사업자 정보·정책 링크를 제공한다. 기업 컨설팅 문의는 컨설팅 상세로 연결하고 일반 문의와 구분한다. 공개 Discord 가입 버튼은 두지 않는다. 참여자 자격에 따른 초대는 참여 안내에서 처리한다.</p>
<p>별도 마지막 대형 CTA 섹션은 초기에는 생략한다. 서비스는 위에서 비교·선택하게 하고, 푸터의 서비스 링크로 돌아갈 수 있게 한다.</p>
<h2 id="section-레이아웃과-접근성-기준">레이아웃과 접근성 기준</h2><ul>
<li>데스크톱에서는 서비스 4개를 2열 배치하는 안을 우선 검토하고, 모바일은 동일 순서의 1열로 제공한다. 시각 스타일·간격은 제공받을 디자인 시스템에 맞춰 결정한다.</li>
<li>제목은 의미 있는 계층을 사용하며 상태를 색상만으로 구분하지 않는다. 카드 링크는 서비스명과 연결해 인식 가능하게 한다.</li>
<li>중요 설명을 호버에 숨기지 않는다. 모바일에서도 대상·이름·설명·상태·링크를 모두 확인할 수 있게 한다.</li>
<li>서비스 앵커 이동 시 고정 헤더가 제목을 가리지 않게 한다. 움직임은 내용 이해와 탐색을 방해하지 않도록 설계한다.</li>
</ul>
<h2 id="section-어드민-편집-범위">어드민 편집 범위</h2><p>첫 문구·설명, 서비스 카드 설명과 노출 순서, 운영자 소개·근거, 대표 글을 편집한다. 예약 가능·모집 상태는 슬롯·모집 설정에서 계산하거나 명시적 접수 중지 설정으로 관리한다. 홈 문구 편집에서 상태를 임의 덮어쓰지 않는다. 공개 전 미리보기로 데스크톱·모바일 확인을 제공한다.</p>
<h2 id="section-확인-기준">확인 기준</h2><p>방문자는 홈만 보고 네 서비스의 차이와 자신에게 맞는 상세 진입점을 찾을 수 있어야 한다. 단회 포트폴리오 피드백과 4회 개선 과정의 차이가 설명되어야 한다. 서비스 수가 적거나 모집이 닫혀도 빈 카드·오해를 부르는 신청 버튼이 없어야 한다. 개인 일정·고객 정보·Meet 링크는 홈에 노출하지 않는다.</p>
<h2 id="section-다음-결정">다음 결정</h2><ol>
<li>헤드라인과 설명 문구의 어조.</li>
<li>네 소개에 사용할 정확한 이름·직함·경력과 공개 자료.</li>
<li>초기 인사이트 글 및 대표 시리즈.</li>
<li>서비스별 가격·모집 조건은 상세 설계와 병행해 확정.</li>
</ol>
<p>이 IA로 와이어프레임을 작성할 수 있다. 카피·순서는 피그마에서 함께 검토하여 수정하며 이번 문서 작성은 디자인 확정·코드 변경·배포를 의미하지 않는다.</p>
`,toc:[{id:`section-목적과-주요-행동`,label:`목적과 주요 행동`,depth:2},{id:`section-정보-순서`,label:`정보 순서`,depth:2},{id:`section-0-헤더`,label:`0. 헤더`,depth:3},{id:`section-1-첫-화면-offset의-역할`,label:`1. 첫 화면 — OFFSET의 역할`,depth:3},{id:`section-2-서비스-홈의-핵심`,label:`2. 서비스 — 홈의 핵심`,depth:3},{id:`section-3-접근-방식과-운영자-소개-선택의-근거`,label:`3. 접근 방식과 운영자 소개 — 선택의 근거`,depth:3},{id:`section-4-인사이트-관점을-먼저-경험하는-경로`,label:`4. 인사이트 — 관점을 먼저 경험하는 경로`,depth:3},{id:`section-5-푸터`,label:`5. 푸터`,depth:3},{id:`section-레이아웃과-접근성-기준`,label:`레이아웃과 접근성 기준`,depth:2},{id:`section-어드민-편집-범위`,label:`어드민 편집 범위`,depth:2},{id:`section-확인-기준`,label:`확인 기준`,depth:2},{id:`section-다음-결정`,label:`다음 결정`,depth:2}]}]},{id:`montage`,title:`디자인 시스템`,category:`디자인`,description:`Montage 적용 원칙, 확인된 규격과 Figma 작업 현황`,file:`OFFSET-MONTAGE.md`,revisions:[{revision:1,hash:`bc06606b0fabfac89f2fb2803bdb15b52ec4490527fa9ccd75de6dab5b3b86fd`,recordedAt:`2026-09-12T13:52:53.608Z`,markdown:`# OFFSET × Montage 적용 기준

2026-09-12. 사용자 지정: Montage를 디자인 시스템으로 전면 적용. 대상 Figma: b5VKxmsX9NkkWTQsahPccI / v2 페이지 2099:2. 브랜드 이름은 OFFSET이며 파일명 OFFSIDE를 브랜드 변경 지시로 해석하지 않는다.

## 적용 원칙

Montage의 공식 컴포넌트·시멘틱 컬러·타이포그래피·그리드·인터랙션을 우선 사용한다. OFFSET의 정보 구조와 콘텐츠는 기존 홈 IA를 따른다. Montage 문서 사이트의 페이지 레이아웃을 복제하는 작업은 아니다. 시스템에 없는 서비스·인사이트 카드 조합은 공식 컴포넌트와 토큰으로 구성한 OFFSET 패턴으로 구분한다.

## 확인된 기준

- 기본 글꼴: Pretendard JP.
- 대표 디자인 너비: desktop 1440, mobile 375. 데스크톱 콘텐츠 최대 너비 1100(패딩 포함).
- 간격: 8px 기반 그리드, 일반 간격은 4배수 권장, 컬럼 간격 20px.
- 홈 히어로 후보: Display 2(40/52), 모바일 Title 1(32/44). 실제 적용 시 대응 자간·굵기도 공식 스타일에서 가져온다.
- 서비스 제목 후보: Title 3(24/32), 본문 Body 1 Reading(16/26), 메타 Label 1 Normal(14/20).
- 색상은 primary, label, background, line, status 등 시멘틱 토큰으로 연결한다. 이름만 유사한 타 라이브러리 토큰으로 대체하지 않는다.
- 구현은 공식 @wanteddev/wds 및 @wanteddev/wds-icon 사용을 우선 검토. 설치 전에 해당 버전과 프로젝트 호환성 확인. 아직 패키지 설치·사이트 코드 변경은 하지 않았다.

## 홈 작업 계획

v2 페이지에 Desktop 1440 및 Mobile 375 홈을 오토레이아웃 기반으로 구성한다. 헤더 → 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 소개 → 인사이트 → 푸터. 버튼·배지·구분선 등은 공식 인스턴스를 사용한다. 반복되는 서비스 카드는 재사용 가능하게 구성한다. 후기·직함·글 제목 등 미확정 사실은 실제 자료인 것처럼 창작하지 않는다.

필요 자산: Button, Text Button/Link, 상태 표현, Divider, 관련 typography styles와 semantic color variables. Navigation·Service Card·Article Card는 공식 대응 컴포넌트 확인 후 인스턴스 또는 공식 기본 요소를 조합한 로컬 패턴으로 결정한다.

## 현재 확인과 미완료

- Figma 지정 v2 페이지 읽기 성공, 페이지는 비어 있음.
- 작업 저장소에 Code Connect 파일 없음. v2에 기존 화면·로컬 스타일·변수 없음.
- 연동 도구의 추가/사용 가능한 라이브러리에 Montage가 없음. 검색 결과의 타 라이브러리 컴포넌트는 채택하지 않음.
- 연동 도구의 사용 가능 폰트 목록에 Pretendard/Pretendard JP가 없음. 공식 폰트 적용 가능 여부를 추가 확보 후 검증해야 함.
- 공식 UI Kit의 편집 가능한 사본 또는 접근 가능한 라이브러리 연결 필요. 현재 홈 캔버스를 생성하거나 ‘Montage 완전 적용’했다고 주장하지 않음.

## 출처

- https://montage.wanted.co.kr/docs/getting-started
- https://montage.wanted.co.kr/docs/foundations/base-material/typography
- https://montage.wanted.co.kr/docs/foundations/base-material/grid
- https://montage.wanted.co.kr/docs/foundations/base-material/colors/semantic
- https://www.figma.com/community/file/1355516515676178246
- https://github.com/wanteddev/montage-web/blob/main/packages/wds/README.md

## 2026-09-12 작업 갱신 — 공식 UI Kit 요구 제거

사용자가 웹 문서 규격으로 직접 구성하도록 지정했다. 공식 UI Kit 연결은 더 이상 선행 조건이 아니다. 이전의 공식 인스턴스 우선·사본 요청은 이 지시로 대체한다. 로컬 컴포넌트를 공식 웹 규격과 소스에 맞춰 제작한다.

공식 GitHub 소스의 문서 84개(컴포넌트 디자인 가이드 및 웹 유틸리티)를 인덱싱하고 사용 지침을 추출했다. 이 인덱싱은 모든 컴포넌트의 시각·동작 검증 완료를 의미하지 않는다. 재현에 사용할 실제 토큰과 규격 소스는 \`montage-reference/\`에 기록했다.

### Figma 생성 완료

- Montage / Atomic: 204개(원본 166색 + 소스의 알파 합성값 38개).
- Montage / Semantic: 62개, Light/Dark 모드. 원본 색상 별칭 연결 검증 결과 오류 0개.
- Montage / Spacing: 20개. 소스 0.5 토큰은 Figma 이름 제약으로 spacing/0_5로 저장하며 원래 의미는 description에 기록.
- 그림자: Light/Dark 각각 Normal 5종·Spread 2종, 총 14개 Effect Style.
- 색상의 code syntax는 실제 --atomic-* 및 --semantic-* 이름을 사용. 숫자 간격 및 합성 primitive에는 소스에 없는 CSS 변수명을 임의로 만들지 않음.

### 검토에서 확인한 적용 사항

- Button은 규격별 높이·둥글기를 고정. 공식 웹 large: radius 12, padding 12/28, Body1 600; medium: radius 10, padding 9/20, Body2 600; small: radius 8, padding 7/14, Label2 600. assistive는 500 weight.
- 홈페이지 서비스 설명처럼 여러 줄이 필요한 부분을 공식 Card의 1줄 Caption으로 억지로 확장하지 않는다. Box/FlexBox/Typography와 Button·Badge를 조합한 OFFSET Service 패턴으로 명시한다.
- Content badge는 비클릭 상태 표시, Chip은 선택/필터 등 인터랙션 용도. 모집 상태는 Badge로 표현한다.
- WithInteraction 기본 hover 5%, pressed 12%, 150ms 전환 및 키보드 focus-visible을 별도 검증한다.
- 웹 유틸리티의 FocusScope, Form, DismissableLayer, Portal 등은 코드 동작 요구사항이다. 피그마에서 도형을 만든 것으로 적용 완료 처리하지 않는다.
- 공식 가이드의 Headline2 행간 26px와 현재 소스 24px가 다름을 확인. 해당 스타일은 이번 홈에서 사용하지 않고 불일치를 기록한다. 필요한 시점에 웹 문서 기준으로 재확인한다.

### 글꼴 상태

사용자는 Pretendard JP를 방금 로컬에 설치했다고 확인했다. 설치 후 다시 조회해도 Figma 연동 API의 폰트 목록에는 없으며 Regular·Medium·SemiBold·Bold 모두 로딩 실패했다. 로컬 설치 여부와 API 런타임의 글꼴 접근을 구분한다. native Figma 파일은 열람했지만 UI 입력 도구는 noWindowsAvailable/clipboard timeout으로 실패하여 글꼴 적용을 검증하지 못했다. 텍스트 스타일·컴포넌트·홈 화면은 아직 생성하지 않았다. 다음 단계는 동일 파일에 Pretendard JP 텍스트를 실제로 인식할 수 있는 경로 확보 후 원래 폰트로 진행하는 것이다.
`,html:`<h1 id="section-offset-montage-적용-기준">OFFSET × Montage 적용 기준</h1><p>2026-09-12. 사용자 지정: Montage를 디자인 시스템으로 전면 적용. 대상 Figma: b5VKxmsX9NkkWTQsahPccI / v2 페이지 2099:2. 브랜드 이름은 OFFSET이며 파일명 OFFSIDE를 브랜드 변경 지시로 해석하지 않는다.</p>
<h2 id="section-적용-원칙">적용 원칙</h2><p>Montage의 공식 컴포넌트·시멘틱 컬러·타이포그래피·그리드·인터랙션을 우선 사용한다. OFFSET의 정보 구조와 콘텐츠는 기존 홈 IA를 따른다. Montage 문서 사이트의 페이지 레이아웃을 복제하는 작업은 아니다. 시스템에 없는 서비스·인사이트 카드 조합은 공식 컴포넌트와 토큰으로 구성한 OFFSET 패턴으로 구분한다.</p>
<h2 id="section-확인된-기준">확인된 기준</h2><ul>
<li>기본 글꼴: Pretendard JP.</li>
<li>대표 디자인 너비: desktop 1440, mobile 375. 데스크톱 콘텐츠 최대 너비 1100(패딩 포함).</li>
<li>간격: 8px 기반 그리드, 일반 간격은 4배수 권장, 컬럼 간격 20px.</li>
<li>홈 히어로 후보: Display 2(40/52), 모바일 Title 1(32/44). 실제 적용 시 대응 자간·굵기도 공식 스타일에서 가져온다.</li>
<li>서비스 제목 후보: Title 3(24/32), 본문 Body 1 Reading(16/26), 메타 Label 1 Normal(14/20).</li>
<li>색상은 primary, label, background, line, status 등 시멘틱 토큰으로 연결한다. 이름만 유사한 타 라이브러리 토큰으로 대체하지 않는다.</li>
<li>구현은 공식 @wanteddev/wds 및 @wanteddev/wds-icon 사용을 우선 검토. 설치 전에 해당 버전과 프로젝트 호환성 확인. 아직 패키지 설치·사이트 코드 변경은 하지 않았다.</li>
</ul>
<h2 id="section-홈-작업-계획">홈 작업 계획</h2><p>v2 페이지에 Desktop 1440 및 Mobile 375 홈을 오토레이아웃 기반으로 구성한다. 헤더 → 짧은 브랜드 소개 → 네 서비스 → 접근 방식·운영자 소개 → 인사이트 → 푸터. 버튼·배지·구분선 등은 공식 인스턴스를 사용한다. 반복되는 서비스 카드는 재사용 가능하게 구성한다. 후기·직함·글 제목 등 미확정 사실은 실제 자료인 것처럼 창작하지 않는다.</p>
<p>필요 자산: Button, Text Button/Link, 상태 표현, Divider, 관련 typography styles와 semantic color variables. Navigation·Service Card·Article Card는 공식 대응 컴포넌트 확인 후 인스턴스 또는 공식 기본 요소를 조합한 로컬 패턴으로 결정한다.</p>
<h2 id="section-현재-확인과-미완료">현재 확인과 미완료</h2><ul>
<li>Figma 지정 v2 페이지 읽기 성공, 페이지는 비어 있음.</li>
<li>작업 저장소에 Code Connect 파일 없음. v2에 기존 화면·로컬 스타일·변수 없음.</li>
<li>연동 도구의 추가/사용 가능한 라이브러리에 Montage가 없음. 검색 결과의 타 라이브러리 컴포넌트는 채택하지 않음.</li>
<li>연동 도구의 사용 가능 폰트 목록에 Pretendard/Pretendard JP가 없음. 공식 폰트 적용 가능 여부를 추가 확보 후 검증해야 함.</li>
<li>공식 UI Kit의 편집 가능한 사본 또는 접근 가능한 라이브러리 연결 필요. 현재 홈 캔버스를 생성하거나 ‘Montage 완전 적용’했다고 주장하지 않음.</li>
</ul>
<h2 id="section-출처">출처</h2><ul>
<li><a href="https://montage.wanted.co.kr/docs/getting-started" rel="noopener noreferrer">https://montage.wanted.co.kr/docs/getting-started</a></li>
<li><a href="https://montage.wanted.co.kr/docs/foundations/base-material/typography" rel="noopener noreferrer">https://montage.wanted.co.kr/docs/foundations/base-material/typography</a></li>
<li><a href="https://montage.wanted.co.kr/docs/foundations/base-material/grid" rel="noopener noreferrer">https://montage.wanted.co.kr/docs/foundations/base-material/grid</a></li>
<li><a href="https://montage.wanted.co.kr/docs/foundations/base-material/colors/semantic" rel="noopener noreferrer">https://montage.wanted.co.kr/docs/foundations/base-material/colors/semantic</a></li>
<li><a href="https://www.figma.com/community/file/1355516515676178246" rel="noopener noreferrer">https://www.figma.com/community/file/1355516515676178246</a></li>
<li><a href="https://github.com/wanteddev/montage-web/blob/main/packages/wds/README.md" rel="noopener noreferrer">https://github.com/wanteddev/montage-web/blob/main/packages/wds/README.md</a></li>
</ul>
<h2 id="section-2026-09-12-작업-갱신-공식-ui-kit-요구-제거">2026-09-12 작업 갱신 — 공식 UI Kit 요구 제거</h2><p>사용자가 웹 문서 규격으로 직접 구성하도록 지정했다. 공식 UI Kit 연결은 더 이상 선행 조건이 아니다. 이전의 공식 인스턴스 우선·사본 요청은 이 지시로 대체한다. 로컬 컴포넌트를 공식 웹 규격과 소스에 맞춰 제작한다.</p>
<p>공식 GitHub 소스의 문서 84개(컴포넌트 디자인 가이드 및 웹 유틸리티)를 인덱싱하고 사용 지침을 추출했다. 이 인덱싱은 모든 컴포넌트의 시각·동작 검증 완료를 의미하지 않는다. 재현에 사용할 실제 토큰과 규격 소스는 <code>montage-reference/</code>에 기록했다.</p>
<h3 id="section-figma-생성-완료">Figma 생성 완료</h3><ul>
<li>Montage / Atomic: 204개(원본 166색 + 소스의 알파 합성값 38개).</li>
<li>Montage / Semantic: 62개, Light/Dark 모드. 원본 색상 별칭 연결 검증 결과 오류 0개.</li>
<li>Montage / Spacing: 20개. 소스 0.5 토큰은 Figma 이름 제약으로 spacing/0_5로 저장하며 원래 의미는 description에 기록.</li>
<li>그림자: Light/Dark 각각 Normal 5종·Spread 2종, 총 14개 Effect Style.</li>
<li>색상의 code syntax는 실제 --atomic-* 및 --semantic-* 이름을 사용. 숫자 간격 및 합성 primitive에는 소스에 없는 CSS 변수명을 임의로 만들지 않음.</li>
</ul>
<h3 id="section-검토에서-확인한-적용-사항">검토에서 확인한 적용 사항</h3><ul>
<li>Button은 규격별 높이·둥글기를 고정. 공식 웹 large: radius 12, padding 12/28, Body1 600; medium: radius 10, padding 9/20, Body2 600; small: radius 8, padding 7/14, Label2 600. assistive는 500 weight.</li>
<li>홈페이지 서비스 설명처럼 여러 줄이 필요한 부분을 공식 Card의 1줄 Caption으로 억지로 확장하지 않는다. Box/FlexBox/Typography와 Button·Badge를 조합한 OFFSET Service 패턴으로 명시한다.</li>
<li>Content badge는 비클릭 상태 표시, Chip은 선택/필터 등 인터랙션 용도. 모집 상태는 Badge로 표현한다.</li>
<li>WithInteraction 기본 hover 5%, pressed 12%, 150ms 전환 및 키보드 focus-visible을 별도 검증한다.</li>
<li>웹 유틸리티의 FocusScope, Form, DismissableLayer, Portal 등은 코드 동작 요구사항이다. 피그마에서 도형을 만든 것으로 적용 완료 처리하지 않는다.</li>
<li>공식 가이드의 Headline2 행간 26px와 현재 소스 24px가 다름을 확인. 해당 스타일은 이번 홈에서 사용하지 않고 불일치를 기록한다. 필요한 시점에 웹 문서 기준으로 재확인한다.</li>
</ul>
<h3 id="section-글꼴-상태">글꼴 상태</h3><p>사용자는 Pretendard JP를 방금 로컬에 설치했다고 확인했다. 설치 후 다시 조회해도 Figma 연동 API의 폰트 목록에는 없으며 Regular·Medium·SemiBold·Bold 모두 로딩 실패했다. 로컬 설치 여부와 API 런타임의 글꼴 접근을 구분한다. native Figma 파일은 열람했지만 UI 입력 도구는 noWindowsAvailable/clipboard timeout으로 실패하여 글꼴 적용을 검증하지 못했다. 텍스트 스타일·컴포넌트·홈 화면은 아직 생성하지 않았다. 다음 단계는 동일 파일에 Pretendard JP 텍스트를 실제로 인식할 수 있는 경로 확보 후 원래 폰트로 진행하는 것이다.</p>
`,toc:[{id:`section-적용-원칙`,label:`적용 원칙`,depth:2},{id:`section-확인된-기준`,label:`확인된 기준`,depth:2},{id:`section-홈-작업-계획`,label:`홈 작업 계획`,depth:2},{id:`section-현재-확인과-미완료`,label:`현재 확인과 미완료`,depth:2},{id:`section-출처`,label:`출처`,depth:2},{id:`section-2026-09-12-작업-갱신-공식-ui-kit-요구-제거`,label:`2026-09-12 작업 갱신 — 공식 UI Kit 요구 제거`,depth:2},{id:`section-figma-생성-완료`,label:`Figma 생성 완료`,depth:3},{id:`section-검토에서-확인한-적용-사항`,label:`검토에서 확인한 적용 사항`,depth:3},{id:`section-글꼴-상태`,label:`글꼴 상태`,depth:3}]}]}]}.documents}));