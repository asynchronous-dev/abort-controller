/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):(a=a||self,b(a.AbortControllerShim={}))})(this,function(a){'use strict';function b(a){"@babel/helpers - typeof";return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b(a)}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function e(a,b,c){return b&&d(a.prototype,b),c&&d(a,c),a}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&h(a,b)}function g(a){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},g(a)}function h(a,b){return h=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},h(a,b)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function j(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function k(a,b){return b&&("object"==typeof b||"function"==typeof b)?b:j(a)}function l(a){var b=i();return function(){var c,d=g(a);if(b){var e=g(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return k(this,c)}}function m(a){var b=I.get(a);return console.assert(null!=b,"'this' is expected an Event object, but got",a),b}function n(a){return null==a.passiveListener?void(!a.event.cancelable||(a.canceled=!0,"function"==typeof a.event.preventDefault&&a.event.preventDefault())):void("undefined"!=typeof console&&"function"==typeof console.error&&console.error("Unable to preventDefault inside passive event listener invocation.",a.passiveListener))}function o(a,b){I.set(this,{eventTarget:a,event:b,eventPhase:2,currentTarget:a,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:b.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});for(var c,d=Object.keys(b),e=0;e<d.length;++e)c=d[e],c in this||Object.defineProperty(this,c,p(c))}function p(a){return{get:function(){return m(this).event[a]},set:function(b){m(this).event[a]=b},configurable:!0,enumerable:!0}}function q(a){return{value:function(){var b=m(this).event;return b[a].apply(b,arguments)},configurable:!0,enumerable:!0}}function r(a,b){function c(b,c){a.call(this,b,c)}var d=Object.keys(b);if(0===d.length)return a;c.prototype=Object.create(a.prototype,{constructor:{value:c,configurable:!0,writable:!0}});for(var e,f=0;f<d.length;++f)if(e=d[f],!(e in a.prototype)){var g=Object.getOwnPropertyDescriptor(b,e),h="function"==typeof g.value;Object.defineProperty(c.prototype,e,h?q(e):p(e))}return c}function s(a){if(null==a||a===Object.prototype)return o;var b=J.get(a);return null==b&&(b=r(s(Object.getPrototypeOf(a)),a),J.set(a,b)),b}function t(a,b){var c=s(Object.getPrototypeOf(b));return new c(a,b)}function u(a){return m(a).immediateStopped}function v(a,b){m(a).eventPhase=b}function w(a,b){m(a).currentTarget=b}function x(a,b){m(a).passiveListener=b}function y(a){return null!==a&&"object"===b(a)}function z(a){var b=K.get(a);if(null==b)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return b}function A(a){return{get:function(){for(var b=z(this),c=b.get(a);null!=c;){if(3===c.listenerType)return c.listener;c=c.next}return null},set:function(b){"function"==typeof b||y(b)||(b=null);for(var c=z(this),d=null,e=c.get(a);null!=e;)3===e.listenerType?null===d?null===e.next?c.delete(a):c.set(a,e.next):d.next=e.next:d=e,e=e.next;if(null!==b){var f={listener:b,listenerType:3,passive:!1,once:!1,next:null};null===d?c.set(a,f):d.next=f}},configurable:!0,enumerable:!0}}function B(a,b){Object.defineProperty(a,"on".concat(b),A(b))}function C(a){function b(){D.call(this)}b.prototype=Object.create(D.prototype,{constructor:{value:b,configurable:!0,writable:!0}});for(var c=0;c<a.length;++c)B(b.prototype,a[c]);return b}function D(){if(this instanceof D)return void K.set(this,new Map);if(1===arguments.length&&Array.isArray(arguments[0]))return C(arguments[0]);if(0<arguments.length){for(var a=Array(arguments.length),b=0;b<arguments.length;++b)a[b]=arguments[b];return C(a)}throw new TypeError("Cannot call a class as a function")}function E(){var a=Object.create(N.prototype);return D.call(a),O.set(a,!1),a}function F(a){!1!==O.get(a)||(O.set(a,!0),a.dispatchEvent({type:"abort"}))}function G(a){!0!==O.get(a)||O.set(a,!1)}function H(a){var c=Q.get(a);if(null==c)throw new TypeError("Expected 'this' to be an 'AbortController' object, but got ".concat(null===a?"null":b(a)));return c}var I=new WeakMap,J=new WeakMap;o.prototype={get type(){return m(this).event.type},get target(){return m(this).eventTarget},get currentTarget(){return m(this).currentTarget},composedPath:function(){var a=m(this).currentTarget;return null==a?[]:[a]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return m(this).eventPhase},stopPropagation:function(){var a=m(this);a.stopped=!0,"function"==typeof a.event.stopPropagation&&a.event.stopPropagation()},stopImmediatePropagation:function(){var a=m(this);a.stopped=!0,a.immediateStopped=!0,"function"==typeof a.event.stopImmediatePropagation&&a.event.stopImmediatePropagation()},get bubbles(){return!!m(this).event.bubbles},get cancelable(){return!!m(this).event.cancelable},preventDefault:function(){n(m(this))},get defaultPrevented(){return m(this).canceled},get composed(){return!!m(this).event.composed},get timeStamp(){return m(this).timeStamp},get srcElement(){return m(this).eventTarget},get cancelBubble(){return m(this).stopped},set cancelBubble(a){if(a){var b=m(this);b.stopped=!0,"boolean"==typeof b.event.cancelBubble&&(b.event.cancelBubble=!0)}},get returnValue(){return!m(this).canceled},set returnValue(a){a||n(m(this))},initEvent:function(){}},Object.defineProperty(o.prototype,"constructor",{value:o,configurable:!0,writable:!0}),"undefined"!=typeof window&&"undefined"!=typeof window.Event&&(Object.setPrototypeOf(o.prototype,window.Event.prototype),J.set(window.Event.prototype,o));var K=new WeakMap,L=1,M=2;D.prototype={addEventListener:function(a,b,c){if(null!=b){if("function"!=typeof b&&!y(b))throw new TypeError("'listener' should be a function or an object.");var d=z(this),e=y(c),f=e?!!c.capture:!!c,g=f?L:M,h={listener:b,listenerType:g,passive:e&&!!c.passive,once:e&&!!c.once,next:null},i=d.get(a);if(void 0===i)return void d.set(a,h);for(var j=null;null!=i;){if(i.listener===b&&i.listenerType===g)return;j=i,i=i.next}j.next=h}},removeEventListener:function(a,b,c){if(null!=b)for(var d=z(this),e=y(c)?!!c.capture:!!c,f=e?L:M,g=null,h=d.get(a);null!=h;){if(h.listener===b&&h.listenerType===f)return void(null===g?null===h.next?d.delete(a):d.set(a,h.next):g.next=h.next);g=h,h=h.next}},dispatchEvent:function(a){if(null==a||"string"!=typeof a.type)throw new TypeError("\"event.type\" should be a string.");var b=z(this),c=a.type,d=b.get(c);if(null==d)return!0;for(var e=t(this,a),f=null;null!=d;){if(d.once?null===f?null===d.next?b.delete(c):b.set(c,d.next):f.next=d.next:f=d,x(e,d.passive?d.listener:null),"function"==typeof d.listener)try{d.listener.call(this,e)}catch(a){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(a)}else d.listenerType!==3&&"function"==typeof d.listener.handleEvent&&d.listener.handleEvent(e);if(u(e))break;d=d.next}return x(e,null),v(e,0),w(e,null),!e.defaultPrevented}},Object.defineProperty(D.prototype,"constructor",{value:D,configurable:!0,writable:!0}),"undefined"!=typeof window&&"undefined"!=typeof window.EventTarget&&Object.setPrototypeOf(D.prototype,window.EventTarget.prototype);var N=function(a){function d(){var a;throw c(this,d),a=g.call(this),new TypeError("AbortSignal cannot be constructed directly")}f(d,a);var g=l(d);return e(d,[{key:"aborted",get:function(){var a=O.get(this);if("boolean"!=typeof a)throw new TypeError("Expected 'this' to be an 'AbortSignal' object, but got ".concat(null===this?"null":b(this)));return a}}]),d}(D);B(N.prototype,"abort");var O=new WeakMap;Object.defineProperties(N.prototype,{aborted:{enumerable:!0}}),"function"==typeof Symbol&&"symbol"===b(Symbol.toStringTag)&&Object.defineProperty(N.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});var P=function(){function a(){c(this,a),Q.set(this,E())}return e(a,[{key:"abort",value:function(){F(H(this))}},{key:"reset",value:function(){G(H(this))}},{key:"signal",get:function(){return H(this)}}]),a}(),Q=new WeakMap;if(Object.defineProperties(P.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),"function"==typeof Symbol&&"symbol"===b(Symbol.toStringTag)&&Object.defineProperty(P.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"}),a.AbortController=P,a.AbortSignal=N,a.default=P,Object.defineProperty(a,"__esModule",{value:!0}),"undefined"==typeof module&&"undefined"==typeof define){var R=Function("return this")();"undefined"==typeof R.AbortController&&(R.AbortController=P,R.AbortSignal=N)}});
//# sourceMappingURL=abort-controller.umd.js.map
