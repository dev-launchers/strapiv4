(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[4299],{

/***/ 699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=100)}({0:function(t,r){t.exports=e},100:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M17 14h-4.34a6 6 0 110-4H23v4h-2v4h-4v-4zM7 14a2 2 0 100-4 2 2 0 000 4z",fill:"#8E8EA9"}))}}})}));

/***/ }),

/***/ 88449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EditView)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(87760);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(99136);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Textarea.js
var Textarea = __webpack_require__(78607);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(2632);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var utils = __webpack_require__(8610);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var core_utils = __webpack_require__(23998);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_(build.translatedErrors.string).required(build.translatedErrors.required),
  type: yup_lib/* string */.Z_(build.translatedErrors.string).oneOf(["read-only", "full-access"]).required(build.translatedErrors.required),
  description: yup_lib/* string */.Z_().nullable()
});
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/LoadingView/index.js








const LoadingView = ({ apiTokenName }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": "true"
  }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: "API Tokens"
  }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
      disabled: true,
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      type: "button",
      size: "L"
    }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
    title: apiTokenName || formatMessage({
      id: "Settings.apiTokens.createPage.title",
      defaultMessage: "Create API Token"
    })
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
};
LoadingView.defaultProps = {
  apiTokenName: null
};
LoadingView.propTypes = {
  apiTokenName: (prop_types_default()).string
};
/* harmony default export */ const components_LoadingView = (LoadingView);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(49549);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Duplicate.js
var Duplicate = __webpack_require__(54279);
var Duplicate_default = /*#__PURE__*/__webpack_require__.n(Duplicate);
// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var react_copy_to_clipboard_lib = __webpack_require__(74855);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Key.js
var Key = __webpack_require__(699);
var Key_default = /*#__PURE__*/__webpack_require__.n(Key);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ContentBox/index.js








const HeaderContentBox = ({ apiToken }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const { trackUsage } = (0,build.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  return /* @__PURE__ */ react.createElement(build.ContentBox, {
    endAction: apiToken && /* @__PURE__ */ react.createElement("span", {
      style: { alignSelf: "start" }
    }, /* @__PURE__ */ react.createElement(react_copy_to_clipboard_lib.CopyToClipboard, {
      onCopy: () => {
        trackUsageRef.current("didCopyTokenKey");
        toggleNotification({
          type: "success",
          message: { id: "Settings.apiTokens.notification.copied" }
        });
      },
      text: apiToken
    }, /* @__PURE__ */ react.createElement(IconButton.IconButton, {
      label: formatMessage({
        id: "app.component.CopyToClipboard.label",
        defaultMessage: "Copy to clipboard"
      }),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement((Duplicate_default()), null),
      style: { padding: 0, height: "1rem" }
    }))),
    title: apiToken || formatMessage({
      id: "Settings.apiTokens.copy.editTitle",
      defaultMessage: "This token isn\u2019t accessible anymore."
    }),
    subtitle: apiToken ? formatMessage({
      id: "Settings.apiTokens.copy.lastWarning",
      defaultMessage: "Make sure to copy this token, you won\u2019t be able to see it again!"
    }) : formatMessage({
      id: "Settings.apiTokens.copy.editMessage",
      defaultMessage: "For security reasons, you can only see your token once."
    }),
    icon: /* @__PURE__ */ react.createElement((Key_default()), null),
    iconBackground: "neutral100"
  });
};
HeaderContentBox.defaultProps = {
  apiToken: null
};
HeaderContentBox.propTypes = {
  apiToken: (prop_types_default()).string
};
/* harmony default export */ const ContentBox = (HeaderContentBox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/index.js
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
























const ApiTokenCreateView = () => {
  var _a;
  let apiToken;
  (0,build.useFocusWhenNavigate)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const toggleNotification = (0,build.useNotification)();
  const history = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,build.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const { setCurrentStep } = (0,build.useGuidedTour)();
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/api-tokens/:id");
  const isCreating = id === "create";
  (0,react.useEffect)(() => {
    trackUsageRef.current(isCreating ? "didAddTokenFromList" : "didEditTokenFromList");
  }, [isCreating]);
  if ((_a = history.location.state) == null ? void 0 : _a.apiToken.accessKey) {
    apiToken = history.location.state.apiToken;
  }
  const { status, data } = (0,lib.useQuery)(
    ["api-token", id],
    () => __async(void 0, null, function* () {
      const {
        data: { data: data2 }
      } = yield core_utils/* axiosInstance.get */.be.get(`/admin/api-tokens/${id}`);
      return data2;
    }),
    {
      enabled: !isCreating && !apiToken,
      onError: () => {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  if (data) {
    apiToken = data;
  }
  const handleSubmit = (body, actions) => __async(void 0, null, function* () {
    trackUsageRef.current(isCreating ? "willCreateToken" : "willEditToken");
    lockApp();
    try {
      const {
        data: { data: response }
      } = isCreating ? yield core_utils/* axiosInstance.post */.be.post(`/admin/api-tokens`, body) : yield core_utils/* axiosInstance.put */.be.put(`/admin/api-tokens/${id}`, body);
      apiToken = response;
      toggleNotification({
        type: "success",
        message: formatMessage({ id: "notification.success.saved", defaultMessage: "Saved" })
      });
      trackUsageRef.current(isCreating ? "didCreateToken" : "didEditToken", {
        type: apiToken.type
      });
      if (isCreating) {
        history.replace(`/settings/api-tokens/${response.id}`, { apiToken: response });
        setCurrentStep("apiTokens.success");
      }
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.Iz)(err.response.data);
      actions.setErrors(errors);
      toggleNotification({
        type: "warning",
        message: get_default()(err, "response.data.message", "notification.error")
      });
    }
    unlockApp();
  });
  const isLoading = !isCreating && !apiToken && status !== "success";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(components_LoadingView, {
      apiTokenName: apiToken == null ? void 0 : apiToken.name
    });
  }
  return /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: "API Tokens"
  }), /* @__PURE__ */ react.createElement(dist.Formik, {
    validationSchema: utils_schema,
    validateOnChange: false,
    initialValues: {
      name: (apiToken == null ? void 0 : apiToken.name) || "",
      description: (apiToken == null ? void 0 : apiToken.description) || "",
      type: (apiToken == null ? void 0 : apiToken.type) || "read-only"
    },
    onSubmit: handleSubmit
  }, ({ errors, handleChange, isSubmitting, values }) => {
    var _a2, _b, _c;
    return /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: (apiToken == null ? void 0 : apiToken.name) || formatMessage({
        id: "Settings.apiTokens.createPage.title",
        defaultMessage: "Create API Token"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
        disabled: isSubmitting,
        loading: isSubmitting,
        startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
        type: "submit",
        size: "L"
      }, formatMessage({
        id: "global.save",
        defaultMessage: "Save"
      })),
      navigationAction: /* @__PURE__ */ react.createElement(build.Link, {
        startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null),
        to: "/settings/api-tokens"
      }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 6
    }, Boolean(apiToken == null ? void 0 : apiToken.name) && /* @__PURE__ */ react.createElement(ContentBox, {
      apiToken: apiToken.accessKey
    }), /* @__PURE__ */ react.createElement(Box.Box, {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 4
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "delta",
      as: "h2"
    }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    })), /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 5
    }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
      key: "name",
      col: 6,
      xs: 12
    }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
      name: "name",
      error: errors.name ? formatMessage(
        ((_a2 = errors.name) == null ? void 0 : _a2.id) ? errors.name : { id: errors.name, defaultMessage: errors.name }
      ) : null,
      label: formatMessage({
        id: "Settings.apiTokens.form.name",
        defaultMessage: "Name"
      }),
      onChange: handleChange,
      value: values.name,
      required: true
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      key: "description",
      col: 6,
      xs: 12
    }, /* @__PURE__ */ react.createElement(Textarea.Textarea, {
      label: formatMessage({
        id: "Settings.apiTokens.form.description",
        defaultMessage: "Description"
      }),
      name: "description",
      error: errors.description ? formatMessage(
        ((_b = errors.description) == null ? void 0 : _b.id) ? errors.description : {
          id: errors.description,
          defaultMessage: errors.description
        }
      ) : null,
      onChange: handleChange
    }, values.description)), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      key: "type",
      col: 6,
      xs: 12
    }, /* @__PURE__ */ react.createElement(Select.Select, {
      name: "type",
      label: formatMessage({
        id: "Settings.apiTokens.form.type",
        defaultMessage: "Token type"
      }),
      value: values.type,
      error: errors.type ? formatMessage(
        ((_c = errors.type) == null ? void 0 : _c.id) ? errors.type : { id: errors.type, defaultMessage: errors.type }
      ) : null,
      onChange: (value) => {
        handleChange({ target: { name: "type", value } });
      }
    }, /* @__PURE__ */ react.createElement(Select.Option, {
      value: "read-only"
    }, formatMessage({
      id: "Settings.apiTokens.types.read-only",
      defaultMessage: "Read-only"
    })), /* @__PURE__ */ react.createElement(Select.Option, {
      value: "full-access"
    }, formatMessage({
      id: "Settings.apiTokens.types.full-access",
      defaultMessage: "Full access"
    }))))))))));
  }));
};
/* harmony default export */ const EditView = (ApiTokenCreateView);


/***/ }),

/***/ 9683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88449);




const ProtectedApiTokenCreateView = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, {
    permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings["api-tokens"].create */ .Z.settings["api-tokens"].create
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedApiTokenCreateView);


/***/ })

}]);