(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(i){l=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=(u=r(7294))&&u.__esModule?u:{default:u},l=r(1003),i=r(880),c=r(9246);function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,u=void 0===n?!0!==Boolean(!1):n,p=e.href,y=e.as,b=e.children,v=e.prefetch,h=e.passHref,m=e.replace,g=e.shallow,_=e.scroll,O=e.locale,j=e.onClick,w=e.onMouseEnter,k=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=b,u&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var E,C=!1!==v,S=i.useRouter(),P=a.default.useMemo((function(){var e=o(l.resolveHref(S,p,!0),2),t=e[0],r=e[1];return{href:t,as:y?l.resolveHref(S,y):r||t}}),[S,p,y]),x=P.href,M=P.as,L=a.default.useRef(x),I=a.default.useRef(M);u&&(E=a.default.Children.only(r));var A=u?E&&"object"===typeof E&&E.ref:t,R=o(c.useIntersection({rootMargin:"200px"}),3),T=R[0],D=R[1],V=R[2],N=a.default.useCallback((function(e){I.current===M&&L.current===x||(V(),I.current=M,L.current=x),T(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[M,A,x,V,T]);a.default.useEffect((function(){var e=D&&C&&l.isLocalURL(x),t="undefined"!==typeof O?O:S&&S.locale,r=s[x+"%"+M+(t?"%"+t:"")];e&&!r&&d(S,x,M,{locale:t})}),[M,x,D,O,C,S]);var U={ref:N,onClick:function(e){u||"function"!==typeof j||j(e),u&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,a,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:u,locale:i,scroll:a}))}(e,S,x,M,m,g,_,O)},onMouseEnter:function(e){u||"function"!==typeof w||w(e),u&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),l.isLocalURL(x)&&d(S,x,M,{priority:!0})}};if(!u||h||"a"===E.type&&!("href"in E.props)){var H="undefined"!==typeof O?O:S&&S.locale,z=S&&S.isLocaleDomain&&l.getDomainLocale(M,H,S&&S.locales,S&&S.domainLocales);U.href=z||l.addBasePath(l.addLocale(M,H,S&&S.defaultLocale))}return u?a.default.cloneElement(E,U):a.default.createElement("a",Object.assign({},k,U),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(i){l=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,f=u.useRef(),s=o(u.useState(!1),2),d=s[0],p=s[1],y=o(u.useState(t?t.current:null),2),b=y[0],v=y[1],h=u.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),c.push(r));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:u,elements:o}),t}(r),o=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),i.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:b,rootMargin:r}))}),[n,b,r,d]),m=u.useCallback((function(){p(!1)}),[]);return u.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),u.useEffect((function(){t&&v(t.current)}),[t]),[h,d,m]};var u=r(7294),a=r(4686),l="undefined"!==typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7645:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=u.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,i=Promise,(null!=i&&"undefined"!==typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](a):a instanceof i)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o({},n,e));var a,i;var c=n=o({},n,t);0;if(c.suspense)return r(c);n.loadableGenerated&&delete(n=o({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)},t.noSSR=l;a(r(7294));var u=a(r(4588));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},4588:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(2021),c=r(3644);var f=[],s=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var y=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,o;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),o&&n(t,o),e}();function b(e){return function(e,t){var r=function(){if(!o){var t=new y(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=l.default.lazy(n.loader));var o=null;if(!d&&!n.suspense){var a=n.webpack?n.webpack():n.modules;a&&s.push((function(e){var t=!0,n=!1,o=void 0;try{for(var u,l=a[Symbol.iterator]();!(t=(u=l.next()).done);t=!0){var i=u.value;if(-1!==e.indexOf(i))return r()}}catch(c){n=!0,o=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw o}}}))}var f=n.suspense?function(e,t){return l.default.createElement(n.lazy,u({},e,{ref:t}))}:function(e,t){r();var u=l.default.useContext(c.LoadableContext),a=i.useSubscription(o);return l.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),u&&Array.isArray(n.modules)&&n.modules.forEach((function(e){u(e)})),l.default.useMemo((function(){return a.loading||a.error?l.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return f.preload=function(){return!n.suspense&&r()},f.displayName="LoadableComponent",l.default.forwardRef(f)}(p,e)}function v(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return v(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){v(f).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};v(s,e).then(r,r)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var h=b;t.default=h},2021:function(e,t,r){!function(){"use strict";var t={800:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var a,l,i=o(e),c=1;c<arguments.length;c++){for(var f in a=Object(arguments[c]))r.call(a,f)&&(i[f]=a[f]);if(t){l=t(a);for(var s=0;s<l.length;s++)n.call(a,l[s])&&(i[l[s]]=a[l[s]])}}return i}},569:function(e,t,r){0},403:function(e,t,r){var n=r(800),o=r(522);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,u=o.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=u[0];var a=u[1];return u=e.value,e.getCurrentValue===t&&e.subscribe===r||(u=t(),a({getCurrentValue:t,subscribe:r,value:u})),o.useDebugValue(u),o.useEffect((function(){function e(){if(!o){var e=t();a((function(o){return o.getCurrentValue!==t||o.subscribe!==r||o.value===e?o:n({},o,{value:e})}))}}var o=!1,u=r(e);return e(),function(){o=!0,u()}}),[t,r]),u}},138:function(e,t,r){e.exports=r(403)},522:function(e){e.exports=r(7294)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var u=n[e]={exports:{}},a=!0;try{t[e](u,u.exports,o),a=!1}finally{a&&delete n[e]}return u.exports}o.ab="//";var u=o(138);e.exports=u}()},5152:function(e,t,r){r(7645)},1664:function(e,t,r){e.exports=r(1551)}}]);