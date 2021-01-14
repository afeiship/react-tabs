/*!
 *  name: @jswork/react-tabs
 *  description: Tabs component for react.
 *  homepage: https://github.com/afeiship/react-tabs#readme
 *  version: 1.0.0
 *  date: 2021-01-14T05:11:57.793Z
 *  license: MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReactTabs=e():t.ReactTabs=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("@jswork/noop")},function(t,e){t.exports=require("classnames")},function(t,e,r){"use strict";r.r(e),r.d(e,"Tabs",(function(){return D})),r.d(e,"Tab",(function(){return g}));var n=r(2),o=r.n(n),a=r(3),u=r.n(a),c=r(1),i=r.n(c),l=r(0),f=r.n(l);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=O(t);if(e){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(a,t);var e,r,n,o=d(a);function a(){return b(this,a),o.apply(this,arguments)}return e=a,(r=[{key:"render",value:function(){var t=this.props,e=t.className,r=(t.title,t.value,y(t,["className","title","value"]));return f.a.createElement("div",p({"data-component":"react-tabs__tab",className:u()("react-tabs__tab",e)},r))}}])&&v(e.prototype,r),n&&v(e,n),a}(l.Component);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function x(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=N(t);if(e){var o=N(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return C(this,r)}}function C(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}g.displayName="react-tabs__tab",g.version="__VERSION__",g.propTypes={className:i.a.string,value:i.a.string,onChange:i.a.func},g.defaultProps={onChange:o.a};var T=function(t){return t.type===g},D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(a,t);var e,r,n,o=R(a);function a(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=o.call(this,t)).handleMenuClick=function(t){var r=t.target.dataset.value;e.setState({value:r})};var r=t.value;return e.state={value:r},e}return e=a,(r=[{key:"shouldComponentUpdate",value:function(t){var e=t.value;return e!==this.state.value&&this.setState({value:e}),!0}},{key:"render",value:function(){var t=this,e=this.props,r=e.className,n=(e.value,e.children,e.extra),o=x(e,["className","value","children","extra"]),a=this.state.value;return f.a.createElement("section",S({"data-component":"react-tabs","data-value":a,className:u()("react-tabs",r)},o),f.a.createElement("nav",{className:"".concat("react-tabs","__nav")},this.menu.map((function(e){return f.a.createElement("div",{className:"is-item","data-value":e.value,"data-active":a===e.value,onClick:t.handleMenuClick,key:e.value},e.title)}))),f.a.createElement("div",{className:"".concat("react-tabs","__content")},this.children),n)}},{key:"menu",get:function(){var t=this.props.children.filter(T);return f.a.Children.map(t,(function(t){var e=t.props;return{title:e.title,value:e.value}}))}},{key:"children",get:function(){var t=this.state.value;return f.a.Children.map(this.props.children,(function(e){var r=e.props,n=(r.title,r.value),o=x(r,["title","value"]);return f.a.cloneElement(e,P(P({},o),{},{"data-active":t===n}))}))}}])&&E(e.prototype,r),n&&E(e,n),a}(l.Component);D.displayName="react-tabs",D.version="1.0.0",D.propTypes={className:i.a.string,value:i.a.string,extra:i.a.element,onChange:i.a.func},D.defaultProps={onChange:o.a}}])}));
//# sourceMappingURL=index.js.map