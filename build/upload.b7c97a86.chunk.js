(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[3650],{

/***/ 56156:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(44709);
  } else {}
  

/***/ }),

/***/ 44709:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(53547),__webpack_require__(78384),__webpack_require__(39711),__webpack_require__(74657)):0}(this,(function(n,e,t,r){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=115)}({0:function(n,e,t){n.exports=t(19)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(25),o=t(26),i=t(22),a=t(27);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},115:function(n,e,t){"use strict";t.r(e),t.d(e,"Link",(function(){return j}));var r,o,i=t(5),a=t.n(i),s=t(4),u=t.n(s),c=t(3),f=t.n(c),d=t(1),l=t.n(d),p=t(0),h=t.n(p),m=t(2),g=t.n(m),b=t(83),v=t.n(b),x=t(37),y=t(8),O=t(6),w=t(16),S=["href","to","children","disabled","startIcon","endIcon"],_=g.a.a(r||(r=f()(["\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  pointer-events: ",";\n  svg path {\n    fill: ",";\n  }\n  svg {\n    font-size: ","rem;\n  }\n  &:hover,\n  &:active {\n    color: ",";\n  }\n  ",";\n"])),(function(n){return n.disabled?"none":void 0}),(function(n){var e=n.disabled,t=n.theme;return e?t.colors.neutral600:t.colors.primary600}),.625,(function(n){return n.theme.colors.primary800}),w.a),T=g()(O.Box)(o||(o=f()(["\n  display: flex;\n"]))),j=function(n){var e=n.href,t=n.to,r=n.children,o=n.disabled,i=n.startIcon,s=n.endIcon,c=u()(n,S),f=e?"_blank":void 0,d=e?"noreferrer noopener":void 0;return l.a.createElement(_,a()({as:t&&!o?x.NavLink:"a",target:f,rel:d,to:o?void 0:t,href:o?"#":e,disabled:o},c),i&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingRight:2},i),l.a.createElement(y.Typography,{variant:"pi",textColor:o?"neutral600":"primary600"},r),s&&!e&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingLeft:2},s),e&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingLeft:2},l.a.createElement(v.a,null)))};j.displayName="Link",j.defaultProps={href:void 0,to:void 0,disabled:!1},j.propTypes={children:h.a.node.isRequired,disabled:h.a.bool,endIcon:h.a.element,href:function(n){if(!n.disabled&&!n.to&&!n.href)return new Error("href must be defined")},startIcon:h.a.element,to:function(n){if(!n.disabled&&!n.href&&!n.to)return new Error("to must be defined")}}},13:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},16:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}));var r=function(n){return function(e){var t=e.theme,r=e.size;return t.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(e){var t=e.theme,r=e.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(r?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},i=function(n){var e=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(e.colors.primary600,";\n    }\n  }\n")}},19:function(n,e,t){"use strict";var r=t(20);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e,t){var r=t(21);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){s=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},37:function(n,e){n.exports=t},4:function(n,e,t){var r=t(24);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a),u=t(7),c=t(1),f=t.n(c),d=t(0),l=t.n(d),p=function(n){return f.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},m={_hover:l.a.func,background:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.string]),borderColor:l.a.string,children:l.a.oneOfType([l.a.node,l.a.string]),color:l.a.string,flex:l.a.oneOfType([l.a.string,l.a.string]),grow:l.a.oneOfType([l.a.string,l.a.string]),hasRadius:l.a.bool,hiddenS:l.a.bool,hiddenXS:l.a.bool,padding:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingBottom:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingLeft:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingRight:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingTop:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),shadow:l.a.string,shrink:l.a.oneOfType([l.a.string,l.a.string])};p.defaultProps=h,p.propTypes=m;var g={color:!0},b=s.a.div.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(u.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(u.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(u.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(u.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(u.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(u.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(u.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(u.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(u.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));b.defaultProps=h,b.propTypes=m},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,s=o()(i,3),u=s[0],c=s[1],f=s[2],d="".concat(n,": ").concat(t.spaces[u],";");return void 0!==c&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),d}var l=t.spaces[r]||r;return"".concat(n,": ").concat(l,";")}}},8:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a),u=["alpha","beta","delta","epsilon","omega","pi","sigma"],c=t(1),f=t.n(c),d=t(0),l=t.n(d),p=function(n){return f.a.createElement("div",n)},h={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},m={ellipsis:l.a.bool,fontSize:l.a.oneOfType([l.a.number,l.a.string]),fontWeight:l.a.string,lineHeight:l.a.oneOfType([l.a.number,l.a.string]),textColor:l.a.string,textTransform:l.a.string,variant:l.a.oneOf(u)};p.defaultProps=h,p.propTypes=m;var g={fontSize:!0,fontWeight:!0},b=s.a.span.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));b.defaultProps=h,b.propTypes=m},83:function(n,e){n.exports=r}})}));

/***/ }),

/***/ 80117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(41706);
  } else {}
  

/***/ }),

/***/ 41706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(53547),__webpack_require__(78384)):0}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=110)}({0:function(n,e,t){n.exports=t(19)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(25),o=t(26),i=t(22),a=t(27);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,e,t){"use strict";t.r(e),t.d(e,"Main",(function(){return v})),t.d(e,"SkipToContent",(function(){return _}));var r,o=t(5),i=t.n(o),a=t(4),u=t.n(a),s=t(3),c=t.n(s),f=t(1),p=t.n(f),d=t(0),l=t.n(d),m=t(2),b=t.n(m),h=["labelledBy"],y=b.a.main(r||(r=c()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),v=function(n){var e=n.labelledBy,t=u()(n,h),r=e||"main-content-title";return p.a.createElement(y,i()({"aria-labelledby":r,id:"main-content",tabIndex:-1},t))};v.defaultProps={labelledBy:void 0},v.propTypes={labelledBy:l.a.string};var x,g=t(6),O=b()(g.Box)(x||(x=c()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]})),_=function(n){var e=n.children;return p.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},e)};_.propTypes={children:l.a.node.isRequired}},13:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,t){"use strict";var r=t(20);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e,t){var r=t(21);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){var r=t(24);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return y}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(7),c=t(1),f=t.n(c),p=t(0),d=t.n(p),l=function(n){return f.a.createElement("div",n)},m={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},b={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])};l.defaultProps=m,l.propTypes=b;var h={color:!0},y=u.a.div.withConfig({shouldForwardProp:function(n,e){return!h[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(s.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(s.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(s.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(s.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(s.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(s.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(s.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(s.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(s.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));y.defaultProps=m,y.propTypes=b},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],f=u[2],p="".concat(n,": ").concat(t.spaces[s],";");return void 0!==c&&(p+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(p+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),p}var d=t.spaces[r]||r;return"".concat(n,": ").concat(d,";")}}}})}));

/***/ }),

/***/ 87760:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}({0:function(t,r){t.exports=e},5:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 62694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(39844);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(78384);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Divider.js
var Divider = __webpack_require__(97833);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/BaseCheckbox.js
var BaseCheckbox = __webpack_require__(46458);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(19631);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(49549);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(40264);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(56204);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/UploadAssetDialog/UploadAssetDialog.js + 7 modules
var UploadAssetDialog = __webpack_require__(33012);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditFolderDialog/index.js + 5 modules
var EditFolderDialog = __webpack_require__(78971);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditAssetDialog/index.js + 12 modules
var EditAssetDialog = __webpack_require__(63509);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/AssetList/index.js + 1 modules
var AssetList = __webpack_require__(6277);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderList/index.js + 1 modules
var FolderList = __webpack_require__(9383);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SortPicker/index.js
var SortPicker = __webpack_require__(27954);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useAssets.js
var useAssets = __webpack_require__(73817);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolders.js
var useFolders = __webpack_require__(44466);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/PaginationFooter/index.js





const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "flex-end",
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(build.PageSizeURLQuery, null), /* @__PURE__ */ react.createElement(build.PaginationURLQuery, {
    pagination
  })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useMediaLibraryPermissions.js
var useMediaLibraryPermissions = __webpack_require__(31817);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolder.js
var useFolder = __webpack_require__(42047);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(49826);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(15537);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Trash.js
var Trash = __webpack_require__(62982);
var Trash_default = /*#__PURE__*/__webpack_require__.n(Trash);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkRemove.js
var useBulkRemove = __webpack_require__(2967);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkDeleteButton.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};








const BulkDeleteButton = ({ selected, onSuccess }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { isLoading, remove } = (0,useBulkRemove/* useBulkRemove */.K)();
  const handleConfirmRemove = () => __async(void 0, null, function* () {
    yield remove(selected);
    onSuccess();
  });
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
    variant: "danger-light",
    size: "S",
    startIcon: /* @__PURE__ */ react.createElement((Trash_default()), null),
    onClick: () => setShowConfirmDialog(true)
  }, formatMessage({ id: "global.delete", defaultMessage: "Delete" })), /* @__PURE__ */ react.createElement(build.ConfirmDialog, {
    isConfirmButtonLoading: isLoading,
    isOpen: showConfirmDialog,
    onToggleDialog: () => setShowConfirmDialog(false),
    onConfirm: handleConfirmRemove
  }));
};
BulkDeleteButton.propTypes = {
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired,
  onSuccess: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Folder.js
var Folder = __webpack_require__(40039);
var Folder_default = /*#__PURE__*/__webpack_require__.n(Folder);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Loader.js
var Loader = __webpack_require__(97245);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/ModalLayout.js
var ModalLayout = __webpack_require__(68991);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Field.js
var Field = __webpack_require__(16572);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pluginId.js
var pluginId = __webpack_require__(55994);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkMove.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




const useBulkMove = () => {
  const toggleNotification = (0,build.useNotification)();
  const queryClient = (0,lib.useQueryClient)();
  const url = (0,utils/* getRequestUrl */.IF)("actions/bulk-move");
  const bulkMoveQuery = ({ destinationFolderId, filesAndFolders }) => {
    const payload = filesAndFolders.reduce((acc, selected) => {
      const { id, type } = selected;
      const key = type === "asset" ? "fileIds" : "folderIds";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(id);
      return acc;
    }, {});
    return utils/* axiosInstance.post */.be.post(url, __spreadProps(__spreadValues({}, payload), { destinationFolderId }));
  };
  const mutation = (0,lib.useMutation)(bulkMoveQuery, {
    onSuccess: (res) => {
      var _a;
      const {
        data: { data }
      } = res;
      if (((_a = data == null ? void 0 : data.files) == null ? void 0 : _a.length) > 0) {
        queryClient.refetchQueries([pluginId/* default */.Z, "assets"], { active: true });
        queryClient.refetchQueries([pluginId/* default */.Z, "asset-count"], { active: true });
      }
      queryClient.refetchQueries([pluginId/* default */.Z, "folders"], { active: true });
      toggleNotification({
        type: "success",
        message: {
          id: (0,utils/* getTrad */.OB)("modal.move.success-label"),
          defaultMessage: "Elements have been moved successfully."
        }
      });
    }
  });
  const move = (destinationFolderId, filesAndFolders) => mutation.mutateAsync({ destinationFolderId, filesAndFolders });
  return __spreadProps(__spreadValues({}, mutation), { move });
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SelectTree/index.js + 4 modules
var SelectTree = __webpack_require__(66951);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolderStructure.js + 1 modules
var useFolderStructure = __webpack_require__(20796);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/BulkMoveDialog.js
var BulkMoveDialog_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



















const BulkMoveDialog = ({ onClose, selected, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { data: folderStructure, isLoading } = (0,useFolderStructure/* useFolderStructure */.v)();
  const { move } = useBulkMove();
  if (!folderStructure) {
    return null;
  }
  const handleSubmit = (_0, _1) => BulkMoveDialog_async(void 0, [_0, _1], function* (values, { setErrors }) {
    try {
      yield move(values.destination.value, selected);
      onClose();
    } catch (error) {
      const errors = (0,build.getAPIInnerErrors)(error, { getTrad: utils/* getTrad */.OB });
      const formikErrors = Object.entries(errors).reduce((acc, [key, error2]) => {
        acc[key || "destination"] = error2.defaultMessage;
        return acc;
      }, {});
      if (!isEmpty_default()(formikErrors)) {
        setErrors(formikErrors);
      }
    }
  });
  const handleClose = () => {
    onClose();
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
      onClose: handleClose,
      labelledBy: "title"
    }, /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
      justifyContent: "center",
      paddingTop: 4,
      paddingBottom: 4
    }, /* @__PURE__ */ react.createElement(Loader.Loader, null, formatMessage({
      id: (0,utils/* getTrad */.OB)("content.isLoading"),
      defaultMessage: "Content is loading."
    })))));
  }
  const initialFormData = {
    destination: {
      value: (currentFolder == null ? void 0 : currentFolder.id) || "",
      label: (currentFolder == null ? void 0 : currentFolder.name) || folderStructure[0].label
    }
  };
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose: handleClose,
    labelledBy: "title"
  }, /* @__PURE__ */ react.createElement(dist.Formik, {
    validateOnChange: false,
    onSubmit: handleSubmit,
    initialValues: initialFormData
  }, ({ values, errors, setFieldValue }) => /* @__PURE__ */ react.createElement(build.Form, {
    noValidate: true
  }, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "title"
  }, formatMessage({
    id: (0,utils/* getTrad */.OB)("modal.folder.move.title"),
    defaultMessage: "Move elements to"
  }))), /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    xs: 12,
    col: 12
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(Field.FieldLabel, {
    htmlFor: "folder-destination"
  }, formatMessage({
    id: (0,utils/* getTrad */.OB)("form.input.label.folder-location"),
    defaultMessage: "Location"
  })), /* @__PURE__ */ react.createElement(SelectTree/* default */.Z, {
    options: folderStructure,
    onChange: (value) => {
      setFieldValue("destination", value);
    },
    defaultValue: values.destination,
    name: "destination",
    menuPortalTarget: document.querySelector("body"),
    inputId: "folder-destination",
    error: errors == null ? void 0 : errors.destination,
    ariaErrorMessage: "destination-error"
  }), errors.destination && /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    as: "p",
    id: "folder-destination-error",
    textColor: "danger600"
  }, errors.destination))))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: handleClose,
      variant: "tertiary",
      name: "cancel"
    }, formatMessage({ id: "cancel", defaultMessage: "Cancel" })),
    endActions: /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      loading: isLoading
    }, formatMessage({ id: "modal.folder.move.submit", defaultMessage: "Move" }))
  }))));
};
BulkMoveDialog.defaultProps = {
  currentFolder: void 0
};
BulkMoveDialog.propTypes = {
  onClose: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* FolderDefinition */.nx, constants/* AssetDefinition */.pw).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkMoveButton.js







const BulkMoveButton = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const handleConfirmMove = () => {
    setShowConfirmDialog(false);
    onSuccess();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
    variant: "secondary",
    size: "S",
    startIcon: /* @__PURE__ */ react.createElement((Folder_default()), null),
    onClick: () => setShowConfirmDialog(true)
  }, formatMessage({ id: "global.move", defaultMessage: "Move" })), showConfirmDialog && /* @__PURE__ */ react.createElement(BulkMoveDialog, {
    currentFolder,
    onClose: handleConfirmMove,
    selected
  }));
};
BulkMoveButton.defaultProps = {
  currentFolder: void 0
};
BulkMoveButton.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkActions.js









const BulkActions = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 2,
    paddingBottom: 5
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon",
    textColor: "neutral600"
  }, formatMessage(
    {
      id: (0,getTrad/* default */.Z)("list.assets.selected"),
      defaultMessage: "{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"
    },
    {
      numberFolders: selected.filter(({ type }) => type === "folder").length,
      numberAssets: selected.filter(({ type }) => type === "asset").length
    }
  )), /* @__PURE__ */ react.createElement(BulkDeleteButton, {
    selected,
    onSuccess
  }), /* @__PURE__ */ react.createElement(BulkMoveButton, {
    currentFolder,
    selected,
    onSuccess
  }));
};
BulkActions.defaultProps = {
  currentFolder: void 0
};
BulkActions.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderCard/index.js + 9 modules
var FolderCard = __webpack_require__(98101);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Filter.js
var Filter = __webpack_require__(88231);
var Filter_default = /*#__PURE__*/__webpack_require__.n(Filter);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterList/index.js + 1 modules
var FilterList = __webpack_require__(51386);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterPopover/index.js + 2 modules
var FilterPopover = __webpack_require__(45219);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/displayedFilters.js
var displayedFilters = __webpack_require__(97581);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/Filters.js








const Filters = () => {
  var _a;
  const buttonRef = (0,react.useRef)(null);
  const [isVisible, setVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const [{ query }, setQuery] = (0,build.useQueryParams)();
  const filters = ((_a = query == null ? void 0 : query.filters) == null ? void 0 : _a.$and) || [];
  const toggleFilter = () => setVisible((prev) => !prev);
  const handleRemoveFilter = (nextFilters) => {
    setQuery({ filters: { $and: nextFilters }, page: 1 });
  };
  const handleSubmit = (filters2) => {
    trackUsage("didFilterMediaLibraryElements", {
      location: "content-manager",
      filter: Object.keys(filters2[filters2.length - 1])[0]
    });
    setQuery({ filters: { $and: filters2 }, page: 1 });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
    variant: "tertiary",
    ref: buttonRef,
    startIcon: /* @__PURE__ */ react.createElement((Filter_default()), null),
    onClick: toggleFilter,
    size: "S"
  }, formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })), isVisible && /* @__PURE__ */ react.createElement(FilterPopover/* default */.Z, {
    displayedFilters: displayedFilters/* default */.Z,
    filters,
    onSubmit: handleSubmit,
    onToggle: toggleFilter,
    source: buttonRef
  }), /* @__PURE__ */ react.createElement(FilterList/* default */.Z, {
    appliedFilters: filters,
    filtersSchema: displayedFilters/* default */.Z,
    onRemoveFilter: handleRemoveFilter
  }));
};

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(80129);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Link.js
var Link = __webpack_require__(56156);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(87760);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(89326);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/Breadcrumbs/index.js + 2 modules
var Breadcrumbs = __webpack_require__(70168);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/Header.js
var Header_defProp = Object.defineProperty;
var Header_defProps = Object.defineProperties;
var Header_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Header_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Header_hasOwnProp = Object.prototype.hasOwnProperty;
var Header_propIsEnum = Object.prototype.propertyIsEnumerable;
var Header_defNormalProp = (obj, key, value) => key in obj ? Header_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Header_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Header_hasOwnProp.call(b, prop))
      Header_defNormalProp(a, prop, b[prop]);
  if (Header_getOwnPropSymbols)
    for (var prop of Header_getOwnPropSymbols(b)) {
      if (Header_propIsEnum.call(b, prop))
        Header_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Header_spreadProps = (a, b) => Header_defProps(a, Header_getOwnPropDescs(b));















const Header = ({
  breadcrumbs,
  canCreate,
  folder,
  onToggleEditFolderDialog,
  onToggleUploadAssetDialog
}) => {
  var _a, _b;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const [{ query }] = (0,build.useQueryParams)();
  const backQuery = Header_spreadProps(Header_spreadValues({}, query), {
    folder: (_b = (_a = folder == null ? void 0 : folder.parent) == null ? void 0 : _a.id) != null ? _b : void 0
  });
  return /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: formatMessage({
      id: (0,utils/* getTrad */.OB)("plugin.name"),
      defaultMessage: `Media Library`
    }),
    subtitle: breadcrumbs && folder && /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, {
      as: "nav",
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("header.breadcrumbs.nav.label"),
        defaultMessage: "Folders navigation"
      }),
      breadcrumbs,
      currentFolderId: folder == null ? void 0 : folder.id
    }),
    navigationAction: folder && /* @__PURE__ */ react.createElement(Link.Link, {
      startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null),
      to: `${pathname}?${(0,qs_lib.stringify)(backQuery, { encode: false })}`
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("header.actions.folder-level-up"),
      defaultMessage: "Back"
    })),
    primaryAction: canCreate && /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 2
    }, /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      variant: "secondary",
      onClick: onToggleEditFolderDialog
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("header.actions.add-folder"),
      defaultMessage: "Add new folder"
    })), /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      onClick: onToggleUploadAssetDialog
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("header.actions.add-assets"),
      defaultMessage: "Add new assets"
    })))
  });
};
Header.defaultProps = {
  breadcrumbs: false,
  folder: null
};
Header.propTypes = {
  breadcrumbs: prop_types_default().oneOfType([constants/* BreadcrumbsDefinition */.Fv, (prop_types_default()).bool]),
  canCreate: (prop_types_default()).bool.isRequired,
  folder: constants/* FolderDefinition */.nx,
  onToggleEditFolderDialog: (prop_types_default()).func.isRequired,
  onToggleUploadAssetDialog: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/EmptyPermissions.js
var EmptyPermissions = __webpack_require__(80660);
var EmptyPermissions_default = /*#__PURE__*/__webpack_require__.n(EmptyPermissions);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EmptyAssets/index.js + 1 modules
var EmptyAssets = __webpack_require__(70088);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/EmptyOrNoPermissions.js
var EmptyOrNoPermissions_defProp = Object.defineProperty;
var EmptyOrNoPermissions_defProps = Object.defineProperties;
var EmptyOrNoPermissions_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EmptyOrNoPermissions_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EmptyOrNoPermissions_hasOwnProp = Object.prototype.hasOwnProperty;
var EmptyOrNoPermissions_propIsEnum = Object.prototype.propertyIsEnumerable;
var EmptyOrNoPermissions_defNormalProp = (obj, key, value) => key in obj ? EmptyOrNoPermissions_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EmptyOrNoPermissions_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EmptyOrNoPermissions_hasOwnProp.call(b, prop))
      EmptyOrNoPermissions_defNormalProp(a, prop, b[prop]);
  if (EmptyOrNoPermissions_getOwnPropSymbols)
    for (var prop of EmptyOrNoPermissions_getOwnPropSymbols(b)) {
      if (EmptyOrNoPermissions_propIsEnum.call(b, prop))
        EmptyOrNoPermissions_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EmptyOrNoPermissions_spreadProps = (a, b) => EmptyOrNoPermissions_defProps(a, EmptyOrNoPermissions_getOwnPropDescs(b));








const getContentIntlMessage = ({ isFiltering, canCreate, canRead }) => {
  if (isFiltering) {
    return {
      id: "list.assets-empty.title-withSearch",
      defaultMessage: "There are no elements with the applied filters"
    };
  }
  if (canRead) {
    if (canCreate) {
      return {
        id: "list.assets.empty-upload",
        defaultMessage: "Upload your first assets..."
      };
    }
    return {
      id: "list.assets.empty",
      defaultMessage: "Media Library is empty"
    };
  }
  return {
    id: "header.actions.no-permissions",
    defaultMessage: "No permissions to view"
  };
};
const EmptyOrNoPermissions = ({ canCreate, isFiltering, canRead, onActionClick }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const content = getContentIntlMessage({ isFiltering, canCreate, canRead });
  return /* @__PURE__ */ react.createElement(EmptyAssets/* EmptyAssets */.i, {
    icon: !canRead ? (EmptyPermissions_default()) : null,
    action: canCreate && !isFiltering && /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      onClick: onActionClick
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("header.actions.add-assets"),
      defaultMessage: "Add new assets"
    })),
    content: formatMessage(EmptyOrNoPermissions_spreadProps(EmptyOrNoPermissions_spreadValues({}, content), {
      id: (0,utils/* getTrad */.OB)(content.id)
    }))
  });
};
EmptyOrNoPermissions.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canRead: (prop_types_default()).bool.isRequired,
  isFiltering: (prop_types_default()).bool.isRequired,
  onActionClick: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary.js
var MediaLibrary_defProp = Object.defineProperty;
var MediaLibrary_defProps = Object.defineProperties;
var MediaLibrary_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MediaLibrary_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MediaLibrary_hasOwnProp = Object.prototype.hasOwnProperty;
var MediaLibrary_propIsEnum = Object.prototype.propertyIsEnumerable;
var MediaLibrary_defNormalProp = (obj, key, value) => key in obj ? MediaLibrary_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MediaLibrary_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MediaLibrary_hasOwnProp.call(b, prop))
      MediaLibrary_defNormalProp(a, prop, b[prop]);
  if (MediaLibrary_getOwnPropSymbols)
    for (var prop of MediaLibrary_getOwnPropSymbols(b)) {
      if (MediaLibrary_propIsEnum.call(b, prop))
        MediaLibrary_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MediaLibrary_spreadProps = (a, b) => MediaLibrary_defProps(a, MediaLibrary_getOwnPropDescs(b));

































const BoxWithHeight = (0,styled_components_browser_cjs["default"])(Box.Box)`
  height: ${32 / 16}rem;
  display: flex;
  align-items: center;
`;
const TypographyMaxWidth = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  max-width: 100%;
`;
const MediaLibrary = () => {
  var _a, _b, _c, _d;
  const { push } = (0,react_router_dom_min.useHistory)();
  const {
    canRead,
    canCreate,
    canUpdate,
    canCopyLink,
    canDownload,
    isLoading: permissionsLoading
  } = (0,useMediaLibraryPermissions/* useMediaLibraryPermissions */.y)();
  const currentFolderToEditRef = (0,react.useRef)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { trackUsage } = (0,build.useTracking)();
  const [{ query }, setQuery] = (0,build.useQueryParams)();
  const isFiltering = Boolean(query._q || query.filters);
  const { data: assetsData, isLoading: assetsLoading, errors: assetsError } = (0,useAssets/* useAssets */.L)({
    skipWhen: !canRead,
    query
  });
  const { data: folders, isLoading: foldersLoading, errors: foldersError } = (0,useFolders/* useFolders */.j)({
    enabled: canRead && ((_a = assetsData == null ? void 0 : assetsData.pagination) == null ? void 0 : _a.page) === 1 && !(0,utils/* containsAssetFilter */.rV)(query),
    query
  });
  const {
    data: currentFolder,
    isLoading: isCurrentFolderLoading,
    error: currentFolderError
  } = (0,useFolder/* useFolder */.W)(query == null ? void 0 : query.folder, {
    enabled: canRead && !!(query == null ? void 0 : query.folder)
  });
  if (((_b = currentFolderError == null ? void 0 : currentFolderError.response) == null ? void 0 : _b.status) === 404) {
    push(pathname);
  }
  const folderCount = (folders == null ? void 0 : folders.length) || 0;
  const assets = assetsData == null ? void 0 : assetsData.results;
  const assetCount = (_c = assets == null ? void 0 : assets.length) != null ? _c : 0;
  const isLoading = isCurrentFolderLoading || foldersLoading || permissionsLoading || assetsLoading;
  const [showUploadAssetDialog, setShowUploadAssetDialog] = (0,react.useState)(false);
  const [showEditFolderDialog, setShowEditFolderDialog] = (0,react.useState)(false);
  const [assetToEdit, setAssetToEdit] = (0,react.useState)(void 0);
  const [folderToEdit, setFolderToEdit] = (0,react.useState)(void 0);
  const [selected, { selectOne, selectAll }] = (0,build.useSelectionState)(["type", "id"], []);
  const toggleUploadAssetDialog = () => setShowUploadAssetDialog((prev) => !prev);
  const toggleEditFolderDialog = ({ created = false } = {}) => {
    if (created && (query == null ? void 0 : query.page) !== "1") {
      setQuery(MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, query), {
        page: 1
      }));
    }
    setShowEditFolderDialog((prev) => !prev);
  };
  const handleChangeSort = (value) => {
    trackUsage("didSortMediaLibraryElements", {
      location: "upload",
      sort: value
    });
    setQuery({ sort: value });
  };
  const handleEditFolder = (folder) => {
    setFolderToEdit(folder);
    setShowEditFolderDialog(true);
  };
  const handleEditFolderClose = (payload) => {
    setFolderToEdit(null);
    toggleEditFolderDialog(payload);
    if (currentFolderToEditRef.current) {
      currentFolderToEditRef.current.focus();
    }
  };
  (0,build.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(Layout.Layout, null, /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isLoading
  }, /* @__PURE__ */ react.createElement(Header, {
    breadcrumbs: !isCurrentFolderLoading && (0,utils/* getBreadcrumbDataML */.M4)(currentFolder, { pathname, query }),
    canCreate,
    onToggleEditFolderDialog: toggleEditFolderDialog,
    onToggleUploadAssetDialog: toggleUploadAssetDialog,
    folder: currentFolder
  }), /* @__PURE__ */ react.createElement(Layout.ActionLayout, {
    startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, canUpdate && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ react.createElement(BoxWithHeight, {
      paddingLeft: 2,
      paddingRight: 2,
      background: "neutral0",
      hasRadius: true,
      borderColor: "neutral200"
    }, /* @__PURE__ */ react.createElement(BaseCheckbox.BaseCheckbox, {
      "aria-label": formatMessage({
        id: (0,utils/* getTrad */.OB)("bulk.select.label"),
        defaultMessage: "Select all folders & assets"
      }),
      indeterminate: (selected == null ? void 0 : selected.length) > 0 && (selected == null ? void 0 : selected.length) !== assetCount + folderCount,
      value: (assetCount > 0 || folderCount > 0) && selected.length === assetCount + folderCount,
      onChange: (e) => {
        if (e.target.checked) {
          trackUsage("didSelectAllMediaLibraryElements");
        }
        selectAll([
          ...assets.map((asset) => MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, asset), { type: "asset" })),
          ...folders.map((folder) => MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, folder), { type: "folder" }))
        ]);
      }
    })), canRead && /* @__PURE__ */ react.createElement(SortPicker/* default */.Z, {
      onChangeSort: handleChangeSort
    }), canRead && /* @__PURE__ */ react.createElement(Filters, null)),
    endActions: /* @__PURE__ */ react.createElement(build.SearchURLQuery, {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("search.label"),
        defaultMessage: "Search for an asset"
      }),
      trackedEvent: "didSearchMediaLibraryElements",
      trackedEventDetails: { location: "upload" }
    })
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, selected.length > 0 && /* @__PURE__ */ react.createElement(BulkActions, {
    currentFolder,
    selected,
    onSuccess: selectAll
  }), isLoading && /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null), (assetsError || foldersError) && /* @__PURE__ */ react.createElement(build.AnErrorOccurred, null), folderCount === 0 && assetCount === 0 && /* @__PURE__ */ react.createElement(EmptyOrNoPermissions, {
    canCreate,
    canRead,
    isFiltering,
    onActionClick: toggleUploadAssetDialog
  }), canRead && /* @__PURE__ */ react.createElement(react.Fragment, null, folderCount > 0 && /* @__PURE__ */ react.createElement(FolderList/* FolderList */.$, {
    title: (isFiltering && assetCount > 0 || !isFiltering) && formatMessage(
      {
        id: (0,utils/* getTrad */.OB)("list.folders.title"),
        defaultMessage: "Folders ({count})"
      },
      { count: folderCount }
    ) || ""
  }, folders.map((folder) => {
    const selectedFolders = selected.filter(({ type }) => type === "folder");
    const isSelected = !!selectedFolders.find(
      (currentFolder2) => currentFolder2.id === folder.id
    );
    const url = (0,utils/* getFolderURL */.Km)(pathname, query, folder);
    return /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 3,
      key: `folder-${folder.id}`
    }, /* @__PURE__ */ react.createElement(FolderCard/* FolderCard */.Ac, {
      ref: folderToEdit && folder.id === folderToEdit.id ? currentFolderToEditRef : void 0,
      ariaLabel: folder.name,
      id: `folder-${folder.id}`,
      to: url,
      startAction: selectOne && /* @__PURE__ */ react.createElement(FolderCard/* FolderCardCheckbox */.MM, {
        "data-testid": `folder-checkbox-${folder.id}`,
        value: isSelected,
        onChange: () => selectOne(MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, folder), { type: "folder" }))
      }),
      cardActions: /* @__PURE__ */ react.createElement(IconButton.IconButton, {
        icon: /* @__PURE__ */ react.createElement((Pencil_default()), null),
        "aria-label": formatMessage({
          id: (0,utils/* getTrad */.OB)("list.folder.edit"),
          defaultMessage: "Edit folder"
        }),
        onClick: () => handleEditFolder(folder)
      })
    }, /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBody */.Bu, null, /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBodyAction */.u6, {
      to: url
    }, /* @__PURE__ */ react.createElement(Flex.Flex, {
      as: "h2",
      direction: "column",
      alignItems: "start",
      maxWidth: "100%"
    }, /* @__PURE__ */ react.createElement(TypographyMaxWidth, {
      fontWeight: "semiBold",
      ellipsis: true
    }, folder.name, /* @__PURE__ */ react.createElement(VisuallyHidden.VisuallyHidden, null, ":")), /* @__PURE__ */ react.createElement(TypographyMaxWidth, {
      as: "span",
      textColor: "neutral600",
      variant: "pi",
      ellipsis: true
    }, formatMessage(
      {
        id: (0,utils/* getTrad */.OB)("list.folder.subtitle"),
        defaultMessage: "{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"
      },
      {
        folderCount: folder.children.count,
        filesCount: folder.files.count
      }
    )))))));
  })), assetCount > 0 && folderCount > 0 && /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 4
  }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), assetCount > 0 && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(AssetList/* AssetList */.l, {
    assets,
    onEditAsset: setAssetToEdit,
    onSelectAsset: selectOne,
    selectedAssets: selected.filter(({ type }) => type === "asset"),
    title: (!isFiltering || isFiltering && folderCount > 0) && ((_d = assetsData == null ? void 0 : assetsData.pagination) == null ? void 0 : _d.page) === 1 && formatMessage(
      {
        id: (0,utils/* getTrad */.OB)("list.assets.title"),
        defaultMessage: "Assets ({count})"
      },
      { count: assetCount }
    ) || ""
  }), (assetsData == null ? void 0 : assetsData.pagination) && /* @__PURE__ */ react.createElement(PaginationFooter, {
    pagination: assetsData.pagination
  }))))), showUploadAssetDialog && /* @__PURE__ */ react.createElement(UploadAssetDialog/* UploadAssetDialog */.x, {
    onClose: toggleUploadAssetDialog,
    trackedLocation: "upload",
    folderId: query == null ? void 0 : query.folder
  }), showEditFolderDialog && /* @__PURE__ */ react.createElement(EditFolderDialog/* EditFolderDialog */.f, {
    onClose: handleEditFolderClose,
    folder: folderToEdit,
    parentFolderId: query == null ? void 0 : query.folder,
    location: "upload"
  }), assetToEdit && /* @__PURE__ */ react.createElement(EditAssetDialog/* EditAssetDialog */.s, {
    onClose: () => setAssetToEdit(void 0),
    asset: assetToEdit,
    canUpdate,
    canCopyLink,
    canDownload,
    trackedLocation: "upload"
  }));
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/index.js






const App = () => {
  const [{ rawQuery }, setQuery] = (0,build.useQueryParams)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const title = formatMessage({ id: (0,utils/* getTrad */.OB)("plugin.name"), defaultMessage: "Media Library" });
  (0,react.useEffect)(() => {
    if (!rawQuery) {
      setQuery({ sort: "updatedAt:DESC", page: 1, pageSize: 10 });
    }
  }, [rawQuery, setQuery]);
  if (rawQuery) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Helmet.Helmet, {
      title
    }), /* @__PURE__ */ react.createElement(MediaLibrary, null));
  }
  return null;
};
/* harmony default export */ const pages_App = (App);


/***/ })

}]);