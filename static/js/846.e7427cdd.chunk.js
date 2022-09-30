"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[846],{948:function(t,e,r){r.d(e,{HH:function(){return S}});var n,o=r(2791);function a(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function u(){}function i(t){return!!(t||"").match(/\d/)}function f(t){return null===t||void 0===t}function c(t){return"number"===typeof t&&isNaN(t)}function l(t,e){return Array(e+1).join(t)}function s(t){var e=t+"",r="-"===e[0]?"-":"";r&&(e=e.substring(1));var n=e.split(/[eE]/g),o=n[0],a=n[1];if(!(a=Number(a)))return r+o;var u=1+a,i=(o=o.replace(".","")).length;return u<0?o="0."+l("0",Math.abs(u))+o:u>=i?o+=l("0",u-i):o=(o.substring(0,u)||"0")+"."+o.substring(u),r+o}function v(t,e){if(t.value=t.value,null!==t){if(t.createTextRange){var r=t.createTextRange();return r.move("character",e),r.select(),!0}return t.selectionStart||0===t.selectionStart?(t.focus(),t.setSelectionRange(e,e),!0):(t.focus(),!1)}}function g(t){return{from:{start:0,end:0},to:{start:0,end:t.length},lastValue:""}}function m(t,e){return void 0===t&&(t=" "),"string"===typeof t?t:t[e]||" "}function d(t,e,r,n){var o,a,u,i=t.length;if(o=e,a=0,u=i,e=Math.min(Math.max(o,a),u),"left"===n){for(;e>=0&&!r[e];)e--;-1===e&&(e=r.indexOf(!0))}else{for(;e<=i&&!r[e];)e++;e>i&&(e=r.lastIndexOf(!0))}return-1===e&&(e=i),e}function p(t){for(var e=Array.from({length:t.length+1}).map((function(){return!0})),r=0,n=e.length;r<n;r++)e[r]=Boolean(i(t[r])||i(t[r-1]));return e}function h(t,e,r,n,a,i){void 0===i&&(i=u);var l=(0,o.useRef)(),v=function(t){var e=(0,o.useRef)(t);e.current=t;var r=(0,o.useRef)((function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e.current.apply(e,t)}));return r.current}((function(t){var e,o;return f(t)||c(t)?(o="",e=""):"number"===typeof t||r?(o="number"===typeof t?s(t):t,e=n(o)):(o=a(t,void 0),e=t),{formattedValue:e,numAsString:o}})),g=(0,o.useState)((function(){return v(e)})),m=g[0],d=g[1];return(0,o.useMemo)((function(){f(t)?l.current=void 0:(l.current=v(t),d(l.current))}),[t,v]),[m,function(t,e){d({formattedValue:t.formattedValue,numAsString:t.value}),i(t,e)}]}function y(t){return t.replace(/[^0-9]/g,"")}function b(t){return t}function w(t){var e=t.type;void 0===e&&(e="text");var r=t.displayType;void 0===r&&(r="input");var f=t.customInput,c=t.renderText,l=t.getInputRef,s=t.format;void 0===s&&(s=b);var g=t.removeFormatting;void 0===g&&(g=y);var m=t.defaultValue,w=t.valueIsNumericString,C=t.onValueChange,S=t.isAllowed,T=t.onChange;void 0===T&&(T=u);var A=t.onKeyDown;void 0===A&&(A=u);var V=t.onMouseUp;void 0===V&&(V=u);var k=t.onFocus;void 0===k&&(k=u);var E=t.onBlur;void 0===E&&(E=u);var O=t.value,x=t.getCaretBoundary;void 0===x&&(x=p);var M=a(t,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary"]),R=h(O,m,Boolean(w),s,g,C),j=R[0],B=j.formattedValue,F=j.numAsString,D=R[1],I=(0,o.useRef)();(0,o.useEffect)((function(){var t=s(F);if(void 0===I.current||t!==I.current){var e=N.current;G({formattedValue:t,numAsString:F,input:e,setCaretPosition:!0,source:n.props,event:void 0})}}));var P=(0,o.useState)(!1),_=P[0],K=P[1],N=(0,o.useRef)(null),U=(0,o.useRef)({setCaretTimeout:null,focusTimeout:null});(0,o.useEffect)((function(){return K(!0),function(){clearTimeout(U.current.setCaretTimeout),clearTimeout(U.current.focusTimeout)}}),[]);var L=s,H=function(t,e){var r=parseFloat(e);return{formattedValue:t,value:e,floatValue:isNaN(r)?void 0:r}},W=function(t,e,r){v(t,e),U.current.setCaretTimeout=setTimeout((function(){t.value===r&&v(t,e)}),0)},q=function(t,e,r){return d(t,e,x(t),r)},z=function(t,e,r){var n=x(e),o=function(t,e,r,n,o){var a=o.findIndex((function(t){return t})),u=t.slice(0,a);e||r.startsWith(u)||(r=u+r,n+=u.length);for(var f=r.length,c=t.length,l={},s=new Array(f),v=0;v<f;v++){s[v]=-1;for(var g=0,m=c;g<m;g++)if(r[v]===t[g]&&!0!==l[g]){s[v]=g,l[g]=!0;break}}for(var d=n;d<f&&(-1===s[d]||!i(r[d]));)d++;var p=d===f||-1===s[d]?c:s[d];for(d=n-1;d>0&&-1===s[d];)d--;var h=-1===d||-1===s[d]?0:s[d]+1;return h>p?p:n-h<p-n?h:p}(e,B,t,r,n);return o=d(e,o,n)},G=function(t){var e=t.formattedValue;void 0===e&&(e="");var r=t.input,n=t.setCaretPosition;void 0===n&&(n=!0);var o,a=t.source,u=t.event,i=t.numAsString,f=t.caretPos;if(r){if(void 0===f&&n){var c=t.inputValue||r.value,l=(o=r,Math.max(o.selectionStart,o.selectionEnd));r.value=e,f=z(c,e,l)}r.value=e,n&&void 0!==f&&W(r,f,e)}e!==B&&function(t,e){I.current=t.formattedValue,D(t,e)}(H(e,i),{event:u,source:a})},J=!_||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",Q=Object.assign({inputMode:J},M,{type:e,value:B,onChange:function(t){var e=function(t,e,r){var n=function(t,e){for(var r=0,n=0,o=t.length,a=e.length;t[r]===e[r]&&r<o;)r++;for(;t[o-1-n]===e[a-1-n]&&a-n>r&&o-n>r;)n++;return{from:{start:r,end:o-n},to:{start:r,end:a-n}}}(B,t),o=Object.assign(Object.assign({},n),{lastValue:B}),a=g(t,o),u=L(a);return!(S&&!S(H(u,a)))&&(G({formattedValue:u,numAsString:a,inputValue:t,event:e,source:r,setCaretPosition:!0,input:e.target}),!0)}(t.target.value,t,n.event);e&&T(t)},onKeyDown:function(t){var e,r=t.target,n=t.key,o=r.selectionStart,a=r.selectionEnd,u=r.value;if(void 0===u&&(u=""),"ArrowLeft"===n||"Backspace"===n?e=Math.max(o-1,0):"ArrowRight"===n?e=Math.min(o+1,u.length):"Delete"===n&&(e=o),void 0!==e&&o===a){var f=e;if("ArrowLeft"===n||"ArrowRight"===n)f=q(u,e,"ArrowLeft"===n?"left":"right");else"Delete"!==n||i(u[e])?"Backspace"!==n||i(u[e])||(f=q(u,e,"left")):f=q(u,e,"right");f!==e&&W(r,f,u),t.isUnitTestRun&&W(r,f,u),A(t)}else A(t)},onMouseUp:function(t){var e=t.target,r=e.selectionStart,n=e.selectionEnd,o=e.value;if(void 0===o&&(o=""),r===n){var a=q(o,r);a!==r&&W(e,a,o)}V(t)},onFocus:function(t){t.persist();var e=t.target;N.current=e,U.current.focusTimeout=setTimeout((function(){var r=e.selectionStart,n=e.selectionEnd,o=e.value;void 0===o&&(o="");var a=q(o,r);a===r||0===r&&n===o.length||W(e,a,o),k(t)}),0)},onBlur:function(t){N.current=null,clearTimeout(U.current.focusTimeout),clearTimeout(U.current.setCaretTimeout),E(t)}});if("text"===r)return c?o.createElement(o.Fragment,null,c(B,M)||null):o.createElement("span",Object.assign({},M,{ref:l}),B);if(f){var X=f;return o.createElement(X,Object.assign({},Q,{ref:l}))}return o.createElement("input",Object.assign({},Q,{ref:l}))}function C(t){var e=t.format,r=t.inputMode;void 0===r&&(r="numeric");var n=t.onKeyDown;void 0===n&&(n=u);var o=t.patternChar;void 0===o&&(o="#"),function(t){var e=t.mask;if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("Mask "+e+" should not contain numeric character;")}(t);var a=function(e){return function(t,e){var r=e.format,n=e.mask,o=e.patternChar;void 0===o&&(o="#");var a=Array.from({length:t.length+1}).map((function(){return!0})),u=0,i=-1,f={};r.split("").forEach((function(e,r){var a=void 0;e===o&&(u++,a=m(n,u-1),-1===i&&t[r]===a&&(i=r)),f[r]=a}));for(var c=function(e){return r[e]===o&&t[e]!==f[e]},l=0,s=a.length;l<s;l++)a[l]=l===i||c(l)||c(l-1);return a[r.indexOf(o)]=!0,a}(e,t)};return{inputMode:r,format:function(e){return function(t,e){var r=e.format,n=e.allowEmptyFormatting,o=e.mask,a=e.patternChar;if(void 0===a&&(a="#"),""===t&&!n)return"";for(var u=0,i=r.split(""),f=0,c=r.length;f<c;f++)r[f]===a&&(i[f]=t[u]||m(o,u),u+=1);return i.join("")}(e,t)},removeFormatting:function(e,r){return function(t,e,r){void 0===e&&(e=g(t));var n=r.format,o=r.patternChar;void 0===o&&(o="#");var a=e.from,u=e.to,i=e.lastValue;void 0===i&&(i="");var f=function(t){return n[t]===o},c=function(t,e){for(var r="",n=0;n<t.length;n++)f(e+n)&&(r+=t[n]);return r},l=function(t){return t.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return l(t);if(""===i&&t.length===n.length){for(var s="",v=0;v<t.length;v++)if(f(v))s+=t[v];else if(t[v]!==n[v])return l(t);return s}var m=i.substring(0,a.start),d=t.substring(u.start,u.end),p=i.substring(a.end);return""+c(m,0)+l(d)+c(p,a.end)}(e,r,t)},getCaretBoundary:a,onKeyDown:function(t){var r=t.key,u=t.target,i=u.selectionStart,f=u.selectionEnd,c=u.value;if(i===f){var l=i;if("Backspace"===r||"Delete"===r){var s="right";if("Backspace"===r){for(;l>0&&e[l-1]!==o;)l--;s="left"}else{for(var g=e.length;l<g&&e[l]!==o;)l++;s="right"}l=d(c,l,a(c),s)}else e[l]!==o&&"ArrowLeft"!==r&&"ArrowRight"!==r&&(l=d(c,l+1,a(c),"right"));l!==i&&v(u,l),n(t)}else n(t)}}}function S(t){t.mask,t.allowEmptyFormatting,t.format,t.inputMode,t.onKeyDown,t.patternChar;var e=a(t,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar"]),r=C(t);return o.createElement(w,Object.assign({},e,r))}!function(t){t.event="event",t.props="prop"}(n||(n={}))},5984:function(t,e,r){r.d(e,{x0:function(){return n}});var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=846.e7427cdd.chunk.js.map