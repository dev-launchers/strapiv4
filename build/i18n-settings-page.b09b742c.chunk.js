(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[3552],{

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

/***/ 72751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(89326);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(26485);
var EmptyDocuments_default = /*#__PURE__*/__webpack_require__.n(EmptyDocuments);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useLocales/index.js
var useLocales = __webpack_require__(8181);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(15559);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/ModalLayout.js
var ModalLayout = __webpack_require__(68991);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Tabs.js
var Tabs = __webpack_require__(1738);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(40264);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Divider.js
var Divider = __webpack_require__(97833);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/schemas.js


const localeFormSchema = (0,lib/* object */.Ry)().shape({
  code: (0,lib/* string */.Z_)().required(),
  displayName: (0,lib/* string */.Z_)().max(50, "Settings.locales.modal.locales.displayName.error").required(build.translatedErrors.required)
});
/* harmony default export */ const schemas = (localeFormSchema);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js
var constants = __webpack_require__(7982);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js
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





const editLocale = (id, payload, toggleNotification) => __async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)(`/i18n/locales/${id}`, {
      method: "PUT",
      body: payload
    });
    toggleNotification({
      type: "success",
      message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.edit.success") }
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return null;
  }
});
const useEditLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const modifyLocale = (id, payload) => __async(void 0, null, function* () {
    setLoading(true);
    const editedLocale = yield editLocale(id, payload, toggleNotification);
    dispatch({ type: constants/* UPDATE_LOCALE */.OT, editedLocale });
    setLoading(false);
  });
  return { isEditing: isLoading, editLocale: modifyLocale };
};
/* harmony default export */ const hooks_useEditLocale = (useEditLocale);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(99136);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(2632);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js








const BaseForm = ({ locale }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange, errors } = (0,dist.useFormikContext)();
  return /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    label: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
      defaultMessage: "Locales"
    }),
    value: locale.code,
    disabled: true
  }, /* @__PURE__ */ react.createElement(Select.Option, {
    value: locale.code
  }, locale.name))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    name: "displayName",
    label: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
      defaultMessage: "Locale display name"
    }),
    hint: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
      defaultMessage: "Locale will be displayed under that name in the administration panel"
    }),
    error: errors.displayName ? formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
      defaultMessage: "The locale display name can only be less than 50 characters."
    }) : void 0,
    value: values.displayName,
    onChange: handleChange
  })));
};
/* harmony default export */ const ModalEdit_BaseForm = (BaseForm);
BaseForm.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Checkbox.js
var Checkbox = __webpack_require__(43499);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js






const AdvancedForm = ({ isDefaultLocale }) => {
  const { values, setFieldValue } = (0,dist.useFormikContext)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Checkbox.Checkbox, {
    name: "isDefault",
    hint: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
      defaultMessage: "One default locale is required, change it by selecting another one"
    }),
    onChange: () => setFieldValue("isDefault", !values.isDefault),
    value: values.isDefault,
    disabled: isDefaultLocale
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
    defaultMessage: "Set as default locale"
  }));
};
AdvancedForm.propTypes = {
  isDefaultLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const ModalEdit_AdvancedForm = (AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js
var ModalEdit_async = (__this, __arguments, generator) => {
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


















const ModalEdit = ({ locale, onClose }) => {
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const { isEditing, editLocale } = hooks_useEditLocale();
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleSubmit = (_0) => ModalEdit_async(void 0, [_0], function* ({ displayName, isDefault }) {
    yield editLocale(locale.id, { name: displayName, isDefault });
    yield refetchPermissions();
  });
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose,
    labelledBy: "edit-locale-title"
  }, /* @__PURE__ */ react.createElement(dist.Formik, {
    initialValues: {
      code: locale == null ? void 0 : locale.code,
      displayName: (locale == null ? void 0 : locale.name) || "",
      isDefault: Boolean(locale == null ? void 0 : locale.isDefault)
    },
    onSubmit: handleSubmit,
    validationSchema: schemas
  }, /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "edit-locale-title"
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.list.actions.edit"),
    defaultMessage: "Edit a locale"
  }))), /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Tabs.TabGroup, {
    label: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
      defaultMessage: "Configurations"
    }),
    id: "tabs",
    variant: "simple"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    as: "h2"
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
    defaultMessage: "Configurations"
  })), /* @__PURE__ */ react.createElement(Tabs.Tabs, null, /* @__PURE__ */ react.createElement(Tabs.Tab, null, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
    defaultMessage: "Basic settings"
  })), /* @__PURE__ */ react.createElement(Tabs.Tab, null, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
    defaultMessage: "Advanced settings"
  })))), /* @__PURE__ */ react.createElement(Divider.Divider, null), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 7,
    paddingBottom: 7
  }, /* @__PURE__ */ react.createElement(Tabs.TabPanels, null, /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(ModalEdit_BaseForm, {
    locale
  })), /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(ModalEdit_AdvancedForm, {
    isDefaultLocale: Boolean(locale && locale.isDefault)
  })))))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "tertiary",
      onClick: onClose
    }, formatMessage({ id: "app.components.Button.cancel" })),
    endActions: /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      disabled: isEditing
    }, formatMessage({ id: "global.save" }))
  }))));
};
ModalEdit.defaultProps = {
  locale: void 0
};
ModalEdit.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalEdit = (ModalEdit);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js
var useDeleteLocale_async = (__this, __arguments, generator) => {
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





const deleteLocale = (id, toggleNotification) => useDeleteLocale_async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)(`/i18n/locales/${id}`, {
      method: "DELETE"
    });
    toggleNotification({
      type: "success",
      message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.delete.success") }
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return e;
  }
});
const useDeleteLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const removeLocale = (id) => useDeleteLocale_async(void 0, null, function* () {
    setLoading(true);
    yield deleteLocale(id, toggleNotification);
    dispatch({ type: constants/* DELETE_LOCALE */.HC, id });
    setLoading(false);
  });
  return { isDeleting: isLoading, deleteLocale: removeLocale };
};
/* harmony default export */ const hooks_useDeleteLocale = (useDeleteLocale);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js




const ModalDelete = ({ localeToDelete, onClose }) => {
  const { isDeleting, deleteLocale } = hooks_useDeleteLocale();
  const isOpened = Boolean(localeToDelete);
  const handleDelete = () => deleteLocale(localeToDelete.id).then(onClose);
  return /* @__PURE__ */ react.createElement(build.ConfirmDialog, {
    isConfirmButtonLoading: isDeleting,
    onConfirm: handleDelete,
    onToggleDialog: onClose,
    isOpen: isOpened
  });
};
ModalDelete.defaultProps = {
  localeToDelete: void 0
};
ModalDelete.propTypes = {
  localeToDelete: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalDelete = (ModalDelete);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js
var useAddLocale_async = (__this, __arguments, generator) => {
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






const addLocale = (_0, _1) => useAddLocale_async(void 0, [_0, _1], function* ({ code, name, isDefault }, toggleNotification) {
  const data = yield (0,build.request)(`/i18n/locales`, {
    method: "POST",
    body: {
      name,
      code,
      isDefault
    }
  });
  toggleNotification({
    type: "success",
    message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.success") }
  });
  return data;
});
const useAddLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const persistLocale = (locale) => useAddLocale_async(void 0, null, function* () {
    setLoading(true);
    try {
      const newLocale = yield addLocale(locale, toggleNotification);
      dispatch({ type: constants/* ADD_LOCALE */.xz, newLocale });
    } catch (e) {
      const message = get_default()(e, "response.payload.message", null);
      if (message && message.includes("already exists")) {
        toggleNotification({
          type: "warning",
          message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.alreadyExist") }
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
      throw e;
    } finally {
      setLoading(false);
    }
  });
  return { isAdding: isLoading, addLocale: persistLocale };
};
/* harmony default export */ const hooks_useAddLocale = (useAddLocale);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Combobox.js
var Combobox = __webpack_require__(88252);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/LiveRegions.js
var LiveRegions = __webpack_require__(67422);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js
var useDefaultLocales_async = (__this, __arguments, generator) => {
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





const fetchDefaultLocalesList = (toggleNotification) => useDefaultLocales_async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)("/i18n/iso-locales", {
      method: "GET"
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return [];
  }
});
const useDefaultLocales = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  const toggleNotification = (0,build.useNotification)();
  const { isLoading, data } = (0,react_query_lib.useQuery)(
    "default-locales",
    () => fetchDefaultLocalesList(toggleNotification).then((data2) => {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.loaded"),
          defaultMessage: "The locales have been successfully loaded."
        })
      );
      return data2;
    })
  );
  return { defaultLocales: data, isLoading };
};
/* harmony default export */ const hooks_useDefaultLocales = (useDefaultLocales);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js







const LocaleSelect = react.memo(({ value, onClear, onLocaleChange, error }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const { locales } = (0,useLocales/* default */.Z)();
  const options = (defaultLocales || []).map((locale) => ({
    label: locale.name,
    value: locale.code
  })).filter(({ value: v }) => {
    const foundLocale = locales.find(({ code }) => code === v);
    return !foundLocale || foundLocale.code === value;
  });
  const computedValue = value || "";
  return /* @__PURE__ */ react.createElement(Combobox.Combobox, {
    "aria-busy": isLoading,
    error,
    label: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
      defaultMessage: "Locales"
    }),
    value: computedValue,
    onClear: value ? onClear : void 0,
    onChange: (selectedLocaleKey) => {
      const selectedLocale = options.find((locale) => locale.value === selectedLocaleKey);
      if (selectedLocale) {
        onLocaleChange({ code: selectedLocale.value, displayName: selectedLocale.label });
      }
    },
    placeholder: formatMessage({
      id: "components.placeholder.select",
      defaultMessage: "Select"
    })
  }, options.map((option) => /* @__PURE__ */ react.createElement(Combobox.ComboboxOption, {
    value: option.value,
    key: option.value
  }, option.label)));
});
LocaleSelect.defaultProps = {
  error: void 0,
  value: void 0,
  onClear: () => {
  },
  onLocaleChange: () => void 0
};
LocaleSelect.propTypes = {
  error: (prop_types_default()).string,
  onClear: (prop_types_default()).func,
  onLocaleChange: (prop_types_default()).func,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_LocaleSelect = (LocaleSelect);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js







const BaseForm_BaseForm = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange, setFieldValue, errors } = (0,dist.useFormikContext)();
  const handleLocaleChange = (0,react.useCallback)(
    (nextLocale) => {
      setFieldValue("displayName", nextLocale.displayName);
      setFieldValue("code", nextLocale.code);
    },
    [setFieldValue]
  );
  const handleClear = (0,react.useCallback)(() => {
    setFieldValue("displayName", "");
    setFieldValue("code", "");
  }, [setFieldValue]);
  return /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(components_LocaleSelect, {
    error: errors.code,
    value: values.code,
    onLocaleChange: handleLocaleChange,
    onClear: handleClear
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    name: "displayName",
    label: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
      defaultMessage: "Locale display name"
    }),
    hint: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
      defaultMessage: "Locale will be displayed under that name in the administration panel"
    }),
    error: errors.displayName ? formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
      defaultMessage: "The locale display name can only be less than 50 characters."
    }) : void 0,
    value: values.displayName,
    onChange: handleChange
  })));
};
/* harmony default export */ const ModalCreate_BaseForm = (BaseForm_BaseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js





const AdvancedForm_AdvancedForm = () => {
  const { values, setFieldValue } = (0,dist.useFormikContext)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Checkbox.Checkbox, {
    hint: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
      defaultMessage: "One default locale is required, change it by selecting another one"
    }),
    onChange: () => setFieldValue("isDefault", !values.isDefault),
    value: values.isDefault
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
    defaultMessage: "Set as default locale"
  }));
};
/* harmony default export */ const ModalCreate_AdvancedForm = (AdvancedForm_AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js
var ModalCreate_async = (__this, __arguments, generator) => {
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


















const initialFormValues = {
  code: "",
  displayName: "",
  isDefault: false
};
const ModalCreate = ({ onClose }) => {
  const { isAdding, addLocale } = hooks_useAddLocale();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const handleLocaleAdd = (values) => ModalCreate_async(void 0, null, function* () {
    yield addLocale({
      code: values.code,
      name: values.displayName,
      isDefault: values.isDefault
    });
    yield refetchPermissions();
  });
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose,
    labelledBy: "add-locale-title"
  }, /* @__PURE__ */ react.createElement(dist.Formik, {
    initialValues: initialFormValues,
    onSubmit: handleLocaleAdd,
    validationSchema: schemas,
    validateOnChange: false
  }, /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "add-locale-title"
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.list.actions.add"),
    defaultMessage: "Add new locale"
  }))), /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Tabs.TabGroup, {
    label: formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
      defaultMessage: "Configurations"
    }),
    id: "tabs",
    variant: "simple"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    as: "h2",
    variant: "beta"
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
    defaultMessage: "Configurations"
  })), /* @__PURE__ */ react.createElement(Tabs.Tabs, null, /* @__PURE__ */ react.createElement(Tabs.Tab, null, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
    defaultMessage: "Basic settings"
  })), /* @__PURE__ */ react.createElement(Tabs.Tab, null, formatMessage({
    id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
    defaultMessage: "Advanced settings"
  })))), /* @__PURE__ */ react.createElement(Divider.Divider, null), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 7,
    paddingBottom: 7
  }, /* @__PURE__ */ react.createElement(Tabs.TabPanels, null, /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(ModalCreate_BaseForm, null)), /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(ModalCreate_AdvancedForm, null)))))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "tertiary",
      onClick: onClose
    }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
    endActions: /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      disabled: isAdding
    }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
  }))));
};
ModalCreate.propTypes = {
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalCreate = (ModalCreate);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(49549);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(19631);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(43546);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(56204);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Trash.js
var Trash = __webpack_require__(62982);
var Trash_default = /*#__PURE__*/__webpack_require__.n(Trash);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js
var __defProp = Object.defineProperty;
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












const LocaleTable = ({ locales, onDeleteLocale, onEditLocale }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Table.Table, {
    colCount: 4,
    rowCount: locales.length + 1
  }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.id") }))), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.displayName") }))), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.default-locale") }))), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden.VisuallyHidden, null, "Actions")))), /* @__PURE__ */ react.createElement(Table.Tbody, null, locales.map((locale) => /* @__PURE__ */ react.createElement(Table.Tr, __spreadValues({
    key: locale.id
  }, (0,build.onRowClick)({
    fn: () => onEditLocale(locale),
    condition: onEditLocale
  })), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, locale.id)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, locale.name)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, locale.isDefault ? formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.default") }) : null)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Stack.Stack, __spreadValues({
    horizontal: true,
    spacing: 1,
    style: { justifyContent: "flex-end" }
  }, build.stopPropagation), onEditLocale && /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => onEditLocale(locale),
    label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.edit") }),
    icon: /* @__PURE__ */ react.createElement((Pencil_default()), null),
    noBorder: true
  }), onDeleteLocale && !locale.isDefault && /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => onDeleteLocale(locale),
    label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.delete") }),
    icon: /* @__PURE__ */ react.createElement((Trash_default()), null),
    noBorder: true
  })))))));
};
LocaleTable.defaultProps = {
  locales: [],
  onDeleteLocale: void 0,
  onEditLocale: void 0
};
LocaleTable.propTypes = {
  locales: (prop_types_default()).array,
  onDeleteLocale: (prop_types_default()).func,
  onEditLocale: (prop_types_default()).func
};
/* harmony default export */ const LocaleList_LocaleTable = (LocaleTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js















const LocaleList = ({ canUpdateLocale, canDeleteLocale, onToggleCreateModal, isCreating }) => {
  const [localeToDelete, setLocaleToDelete] = (0,react.useState)();
  const [localeToEdit, setLocaleToEdit] = (0,react.useState)();
  const { locales } = (0,useLocales/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  const closeModalToDelete = () => setLocaleToDelete(void 0);
  const handleDeleteLocale = canDeleteLocale ? setLocaleToDelete : void 0;
  const closeModalToEdit = () => setLocaleToEdit(void 0);
  const handleEditLocale = canUpdateLocale ? setLocaleToEdit : void 0;
  return /* @__PURE__ */ react.createElement(Main.Main, {
    tabIndex: -1
  }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      onClick: onToggleCreateModal,
      size: "L"
    }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })),
    title: formatMessage({ id: (0,utils/* getTrad */.O)("plugin.name") }),
    subtitle: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.description") })
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, (locales == null ? void 0 : locales.length) > 0 ? /* @__PURE__ */ react.createElement(LocaleList_LocaleTable, {
    locales,
    onDeleteLocale: handleDeleteLocale,
    onEditLocale: handleEditLocale
  }) : /* @__PURE__ */ react.createElement(Layout.EmptyStateLayout, {
    icon: /* @__PURE__ */ react.createElement((EmptyDocuments_default()), {
      width: void 0,
      height: void 0
    }),
    content: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.empty.title") }),
    action: onToggleCreateModal ? /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      onClick: onToggleCreateModal
    }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })) : null
  })), isCreating && /* @__PURE__ */ react.createElement(components_ModalCreate, {
    onClose: onToggleCreateModal
  }), localeToEdit && /* @__PURE__ */ react.createElement(components_ModalEdit, {
    onClose: closeModalToEdit,
    locale: localeToEdit
  }), /* @__PURE__ */ react.createElement(components_ModalDelete, {
    localeToDelete,
    onClose: closeModalToDelete
  }));
};
LocaleList.defaultProps = {
  onToggleCreateModal: void 0
};
LocaleList.propTypes = {
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired,
  onToggleCreateModal: (prop_types_default()).func,
  isCreating: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_LocaleList = (LocaleList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js



const LocaleSettingsPage = ({
  canReadLocale,
  canCreateLocale,
  canDeleteLocale,
  canUpdateLocale
}) => {
  const [isOpenedCreateModal, setIsOpenedCreateModal] = (0,react.useState)(false);
  const handleToggleModalCreate = canCreateLocale ? () => setIsOpenedCreateModal((s) => !s) : void 0;
  return canReadLocale ? /* @__PURE__ */ react.createElement(components_LocaleList, {
    canUpdateLocale,
    canDeleteLocale,
    onToggleCreateModal: handleToggleModalCreate,
    isCreating: isOpenedCreateModal
  }) : null;
};
LocaleSettingsPage.propTypes = {
  canReadLocale: (prop_types_default()).bool.isRequired,
  canCreateLocale: (prop_types_default()).bool.isRequired,
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const SettingsPage_LocaleSettingsPage = (LocaleSettingsPage);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/permissions.js
var permissions = __webpack_require__(2135);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/index.js




const ProtectedLocaleSettingsPage = () => {
  const {
    isLoading,
    allowedActions: { canRead, canUpdate, canCreate, canDelete }
  } = (0,build.useRBAC)(permissions/* default */.Z);
  if (isLoading) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(SettingsPage_LocaleSettingsPage, {
    canReadLocale: canRead,
    canCreateLocale: canCreate,
    canUpdateLocale: canUpdate,
    canDeleteLocale: canDelete
  });
};
/* harmony default export */ const SettingsPage = (ProtectedLocaleSettingsPage);


/***/ })

}]);