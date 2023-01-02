"use strict";
(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[302],{

/***/ 29808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SingleSignOn": () => (/* binding */ SingleSignOn),
  "default": () => (/* binding */ SettingsPage_SingleSignOn)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/ToggleInput.js
var ToggleInput = __webpack_require__(53575);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(2632);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var utils = __webpack_require__(8610);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 27 modules
var hooks = __webpack_require__(59942);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/SingleSignOn/utils/schema.js


const schema = lib/* object */.Ry().shape({
  autoRegister: lib/* bool */.Xg().required(build.translatedErrors.required),
  defaultRole: lib/* mixed */.nK().when("autoRegister", (value, initSchema) => {
    return value ? initSchema.required(build.translatedErrors.required) : initSchema.nullable();
  })
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/SingleSignOn/index.js
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

















const ssoPermissions = __spreadProps(__spreadValues({}, permissions/* default.settings.sso */.Z.settings.sso), {
  readRoles: permissions/* default.settings.roles.read */.Z.settings.roles.read
});
const SingleSignOn = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate, canReadRoles }
  } = (0,build.useRBAC)(ssoPermissions);
  const [
    { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader },
    dispatch,
    { handleChange, handleSubmit }
  ] = (0,hooks/* useSettingsForm */.G4)((0,utils/* getRequestUrl */.IF)("providers/options"), utils_schema, () => {
  }, [
    "autoRegister",
    "defaultRole"
  ]);
  const { roles } = (0,hooks/* useRolesList */.bF)(canReadRoles);
  (0,build.useFocusWhenNavigate)();
  const showLoader = isLoadingForPermissions || isLoading;
  (0,react.useEffect)(() => {
    if (formErrors.defaultRole) {
      const selector = `[name="defaultRole"]`;
      document.querySelector(selector).focus();
    }
  }, [formErrors]);
  const isHeaderButtonDisabled = isEqual_default()(initialData, modifiedData);
  return /* @__PURE__ */ react.createElement(Layout.Layout, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: "SSO"
  }), /* @__PURE__ */ react.createElement(Main.Main, {
    tabIndex: -1
  }, /* @__PURE__ */ react.createElement("form", {
    onSubmit: (e) => {
      if (isHeaderButtonDisabled) {
        e.preventDefault();
        return;
      }
      handleSubmit(e);
    }
  }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
      "data-testid": "save-button",
      disabled: isHeaderButtonDisabled,
      loading: showHeaderButtonLoader,
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      type: "submit",
      size: "L"
    }, formatMessage({
      id: "global.save",
      defaultMessage: "Save"
    })),
    title: formatMessage({ id: "Settings.sso.title", defaultMessage: "Single Sign-On" }),
    subtitle: formatMessage({
      id: "Settings.sso.description",
      defaultMessage: "Configure the settings for the Single Sign-On feature."
    })
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, showLoader ? /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 4,
    background: "neutral0",
    padding: 6,
    shadow: "filterShadow",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "h2"
  }, formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  })), /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    m: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    "aria-label": "autoRegister",
    "data-testid": "autoRegister",
    disabled: !canUpdate,
    checked: modifiedData.autoRegister,
    hint: formatMessage({
      id: "Settings.sso.form.registration.description",
      defaultMessage: "Create new user on SSO login if no account exists"
    }),
    label: formatMessage({
      id: "Settings.sso.form.registration.label",
      defaultMessage: "Auto-registration"
    }),
    name: "autoRegister",
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "Off"
    }),
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "On"
    }),
    onChange: (e) => {
      handleChange({
        target: { name: "autoRegister", value: e.target.checked }
      });
    }
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    m: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    disabled: !canUpdate,
    hint: formatMessage({
      id: "Settings.sso.form.defaultRole.description",
      defaultMessage: "It will attach the new authenticated user to the selected role"
    }),
    error: formErrors.defaultRole ? formatMessage({
      id: formErrors.defaultRole.id,
      defaultMessage: formErrors.defaultRole.id
    }) : "",
    label: formatMessage({
      id: "Settings.sso.form.defaultRole.label",
      defaultMessage: "Default role"
    }),
    name: "defaultRole",
    onChange: (value) => {
      handleChange({ target: { name: "defaultRole", value } });
    },
    placeholder: formatMessage({
      id: "components.InputSelect.option.placeholder",
      defaultMessage: "Choose here"
    }),
    value: modifiedData.defaultRole
  }, roles.map(({ id, name }) => /* @__PURE__ */ react.createElement(Select.Option, {
    key: id,
    value: id.toString()
  }, name))))))))));
};
const ProtectedSSO = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
  permissions: ssoPermissions.main
}, /* @__PURE__ */ react.createElement(SingleSignOn, null));
/* harmony default export */ const SettingsPage_SingleSignOn = (ProtectedSSO);


/***/ })

}]);