!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactTabs=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactTabs=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ReactTabsMenu=t.ReactTabsBody=t.ReactTabsBase=t.ReactTabs=void 0;var o=n(9),a=r(o),i=n(6),c=r(i),u=n(7),s=r(u),l=n(8),f=r(l);t.ReactTabs=a.default,t.ReactTabsBase=c.default,t.ReactTabsBody=s.default,t.ReactTabsMenu=f.default},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,u,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),f=r(l),p=n(4),d=r(p),b=n(1),y=r(b),v=n(2),h=r(v),m=n(3),O=(r(m),u=c=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onClick=function(e,t){n.setState({activeIndex:e},function(){n.props.onItemClick({target:{value:e}})})},n.state={activeIndex:e.activeIndex},n}return i(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.activeIndex;t!==this.state.activeIndex&&this.setState({activeIndex:t})}},{key:"children",get:function(){var e=this,t=this.props.children,n=this.state.activeIndex;return l.Children.map(t,function(t,r){return f.default.createElement("li",{onClick:e._onClick.bind(e,r),className:(0,y.default)("item",{active:r===n}),children:t})})}}]),t}(l.PureComponent),c.propTypes={className:d.default.string,activeIndex:d.default.number,onItemClick:d.default.func},c.defaultProps={activeIndex:0,onItemClick:h.default},u);t.default=O},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),f=r(l),p=n(4),d=(r(p),n(6)),b=r(d),y=n(1),v=r(y),h=n(2),m=(r(h),n(3)),O=(r(m),function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=(e.activeIndex,e.onItemClick,o(e,["className","activeIndex","onItemClick"]));return f.default.createElement("div",u({},n,{"data-active-index":this.state.activeIndex,className:(0,v.default)("react-tabs-body",t)}),f.default.createElement("div",{className:"scroller"},this.children))}},{key:"children",get:function(){var e=this.props.children,t=this.state.activeIndex;return l.Children.map(e,function(e,n){return f.default.createElement("li",{className:(0,v.default)("item",{active:n===t}),children:e})})}}]),t}(b.default));t.default=O},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),f=r(l),p=n(4),d=(r(p),n(6)),b=r(d),y=n(1),v=r(y),h=n(2),m=(r(h),n(3)),O=(r(m),function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=(e.activeIndex,e.onItemClick,o(e,["className","activeIndex","onItemClick"]));return f.default.createElement("menu",u({},n,{"data-active-index":this.state.activeIndex,className:(0,v.default)("react-tabs-menu",t)}),f.default.createElement("div",{className:"scroller"},this.children))}}]),t}(b.default));t.default=O},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(5),d=r(p),b=n(4),y=r(b),v=n(1),h=r(v),m=n(2),O=(r(m),n(3)),_=(r(O),s=u=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=o(e,["className"]);return d.default.createElement("section",l({},n,{className:(0,h.default)("react-tabs",t)}))}}]),t}(p.PureComponent),u.propTypes={className:y.default.string},u.defaultProps={},s);t.default=_}])});
//# sourceMappingURL=react-tabs.js.map