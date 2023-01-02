(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[5162],{

/***/ 4753:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=145)}({0:function(t,r){t.exports=e},145:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M4 20.252V3.748a1 1 0 011.507-.862l14.028 8.252a1 1 0 010 1.724L5.507 21.113A1 1 0 014 20.252z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 40703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Webhooks_EditView)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 27 modules
var hooks = __webpack_require__(59942);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(23998);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(87760);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Play.js
var Play = __webpack_require__(4753);
var Play_default = /*#__PURE__*/__webpack_require__.n(Play);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(99136);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Field.js
var Field = __webpack_require__(16572);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(78384);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/BaseCheckbox.js
var BaseCheckbox = __webpack_require__(46458);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Checkbox.js
var Checkbox = __webpack_require__(43499);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/EventRow.js





const EventRow = ({ disabledEvents, name, events, inputValue, handleChange, handleChangeAll }) => {
  const enabledCheckboxes = events.filter((event) => {
    return !disabledEvents.includes(event);
  });
  const areAllCheckboxesSelected = inputValue.length === enabledCheckboxes.length;
  const hasSomeCheckboxSelected = inputValue.length > 0;
  const onChangeAll = ({ target: { name: name2 } }) => {
    const valueToSet = !areAllCheckboxesSelected;
    handleChangeAll({
      target: { name: name2, value: valueToSet }
    });
  };
  return /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement(Checkbox.Checkbox, {
    indeterminate: hasSomeCheckboxSelected && !areAllCheckboxesSelected,
    "aria-label": "Select all entries",
    name,
    onChange: onChangeAll,
    value: areAllCheckboxesSelected
  }, upperFirst_default()(name))), events.map((event) => {
    return /* @__PURE__ */ react.createElement("td", {
      key: event
    }, /* @__PURE__ */ react.createElement(BaseCheckbox.BaseCheckbox, {
      disabled: disabledEvents.includes(event),
      "aria-label": event,
      name: event,
      value: inputValue.includes(event),
      onValueChange: (value) => handleChange({ target: { name: event, value } })
    }));
  }));
};
EventRow.defaultProps = {
  disabledEvents: [],
  events: [],
  inputValue: [],
  handleChange: () => {
  },
  handleChangeAll: () => {
  }
};
EventRow.propTypes = {
  disabledEvents: (prop_types_default()).array,
  events: (prop_types_default()).array,
  inputValue: (prop_types_default()).array,
  handleChange: (prop_types_default()).func,
  handleChangeAll: (prop_types_default()).func,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const EventInput_EventRow = (EventRow);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/utils/formatValue.js
const formatValue = (value) => value.reduce((acc, curr) => {
  const key = curr.split(".")[0];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});
/* harmony default export */ const utils_formatValue = (formatValue);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/index.js










const StyledTable = styled_components_browser_cjs["default"].table`
  td {
    height: ${52 / 16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;
const displayedData = {
  headers: {
    default: [
      "Settings.webhooks.events.create",
      "Settings.webhooks.events.update",
      "app.utils.delete"
    ],
    draftAndPublish: [
      "Settings.webhooks.events.create",
      "Settings.webhooks.events.update",
      "app.utils.delete",
      "app.utils.publish",
      "app.utils.unpublish"
    ]
  },
  events: {
    default: {
      entry: ["entry.create", "entry.update", "entry.delete"],
      media: ["media.create", "media.update", "media.delete"]
    },
    draftAndPublish: {
      entry: ["entry.create", "entry.update", "entry.delete", "entry.publish", "entry.unpublish"],
      media: ["media.create", "media.update", "media.delete"]
    }
  }
};
const EventInput = ({ isDraftAndPublish }) => {
  const headersName = isDraftAndPublish ? displayedData.headers.draftAndPublish : displayedData.headers.default;
  const events = isDraftAndPublish ? displayedData.events.draftAndPublish : displayedData.events.default;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange: onChange } = (0,dist.useFormikContext)();
  const inputName = "events";
  const inputValue = values.events;
  const disabledEvents = [];
  const formattedValue = utils_formatValue(inputValue);
  const handleChange = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      set.add(name);
    } else {
      set.delete(name);
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  const handleChangeAll = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      events[name].forEach((event) => {
        if (!disabledEvents.includes(event)) {
          set.add(event);
        }
      });
    } else {
      events[name].forEach((event) => set.delete(event));
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(Field.FieldLabel, null, formatMessage({
    id: "Settings.webhooks.form.events",
    defaultMessage: "Events"
  })), /* @__PURE__ */ react.createElement(StyledTable, null, /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null), headersName.map((header) => {
    if (header === "app.utils.publish" || header === "app.utils.unpublish") {
      return /* @__PURE__ */ react.createElement("td", {
        key: header,
        title: formatMessage({
          id: "Settings.webhooks.event.publish-tooltip",
          defaultMessage: "This event only exists for contents with Draft/Publish system enabled"
        })
      }, /* @__PURE__ */ react.createElement(Typography.Typography, {
        variant: "sigma",
        textColor: "neutral600"
      }, formatMessage({ id: header, defaultMessage: header })));
    }
    return /* @__PURE__ */ react.createElement("td", {
      key: header
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "sigma",
      textColor: "neutral600"
    }, formatMessage({ id: header, defaultMessage: header })));
  }))), /* @__PURE__ */ react.createElement("tbody", null, Object.keys(events).map((event) => {
    return /* @__PURE__ */ react.createElement(EventInput_EventRow, {
      disabledEvents,
      key: event,
      name: event,
      events: events[event],
      inputValue: formattedValue[event],
      handleChange,
      handleChangeAll
    });
  }))));
};
EventInput.propTypes = {
  isDraftAndPublish: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_EventInput = (EventInput);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(89326);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(40264);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/TextButton.js
var TextButton = __webpack_require__(82212);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Combobox.js
var Combobox = __webpack_require__(88252);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/keys.js
const keys = [
  "A-IM",
  "Accept",
  "Accept-Charset",
  "Accept-Encoding",
  "Accept-Language",
  "Accept-Datetime",
  "Access-Control-Request-Method",
  "Access-Control-Request-Headers",
  "Authorization",
  "Cache-Control",
  "Connection",
  "Content-Length",
  "Content-Type",
  "Cookie",
  "Date",
  "Expect",
  "Forwarded",
  "From",
  "Host",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Range",
  "If-Unmodified-Since",
  "Max-Forwards",
  "Origin",
  "Pragma",
  "Proxy-Authorization",
  "Range",
  "Referer",
  "TE",
  "User-Agent",
  "Upgrade",
  "Via",
  "Warning"
];
/* harmony default export */ const HeadersInput_keys = (keys);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/Combobox.js
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const Combobox_Combobox = (_a) => {
  var _b = _a, { name, onChange, value } = _b, props = __objRest(_b, ["name", "onChange", "value"]);
  const [options, setOptions] = (0,react.useState)(value ? [...HeadersInput_keys, value] : HeadersInput_keys);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2 } });
  };
  const handleCreateOption = (value2) => {
    setOptions((prev) => [...prev, value2]);
    onChange({ target: { name, value: value2 } });
  };
  return /* @__PURE__ */ react.createElement(Combobox.CreatableCombobox, __spreadProps(__spreadValues({}, props), {
    onChange: handleChange,
    onCreateOption: handleCreateOption,
    placeholder: "",
    value
  }), options.map((key) => /* @__PURE__ */ react.createElement(Combobox.ComboboxOption, {
    value: key,
    key
  }, key)));
};
Combobox_Combobox.defaultProps = {
  value: void 0
};
Combobox_Combobox.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const HeadersInput_Combobox = (Combobox_Combobox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/index.js













const HeadersInput = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, errors } = (0,dist.useFormikContext)();
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(Field.FieldLabel, null, formatMessage({
    id: "Settings.webhooks.form.headers",
    defaultMessage: "Headers"
  })), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 8,
    background: "neutral100",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(dist.FieldArray, {
    validateOnChange: false,
    name: "headers",
    render: ({ push, remove }) => {
      var _a;
      return /* @__PURE__ */ react.createElement(Grid.Grid, {
        gap: 4
      }, (_a = values.headers) == null ? void 0 : _a.map((header, i) => {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        return /* @__PURE__ */ react.createElement(react.Fragment, {
          key: i
        }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
          col: 6
        }, /* @__PURE__ */ react.createElement(dist.Field, {
          as: HeadersInput_Combobox,
          name: `headers.${i}.key`,
          "aria-label": `row ${i + 1} key`,
          label: formatMessage({
            id: "Settings.webhooks.key",
            defaultMessage: "Key"
          }),
          error: ((_b = (_a2 = errors.headers) == null ? void 0 : _a2[i]) == null ? void 0 : _b.key) && formatMessage({
            id: (_c = errors.headers[i]) == null ? void 0 : _c.key,
            defaultMessage: (_d = errors.headers[i]) == null ? void 0 : _d.key
          })
        })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
          col: 6
        }, /* @__PURE__ */ react.createElement(Flex.Flex, {
          alignItems: "flex-end"
        }, /* @__PURE__ */ react.createElement(Box.Box, {
          style: { flex: 1 }
        }, /* @__PURE__ */ react.createElement(dist.Field, {
          as: TextInput.TextInput,
          "aria-label": `row ${i + 1} value`,
          label: formatMessage({
            id: "Settings.webhooks.value",
            defaultMessage: "Value"
          }),
          name: `headers.${i}.value`,
          error: ((_f = (_e = errors.headers) == null ? void 0 : _e[i]) == null ? void 0 : _f.value) && formatMessage({
            id: (_g = errors.headers[i]) == null ? void 0 : _g.value,
            defaultMessage: (_h = errors.headers[i]) == null ? void 0 : _h.value
          })
        })), /* @__PURE__ */ react.createElement(Flex.Flex, {
          paddingLeft: 2,
          style: { alignSelf: "center" },
          paddingTop: ((_j = (_i = errors.headers) == null ? void 0 : _i[i]) == null ? void 0 : _j.value) ? 0 : 5
        }, /* @__PURE__ */ react.createElement(build.RemoveRoundedButton, {
          onClick: () => values.headers.length !== 1 && remove(i),
          label: formatMessage(
            {
              id: "Settings.webhooks.headers.remove",
              defaultMessage: "Remove header row {number}"
            },
            { number: i + 1 }
          )
        })))));
      }), /* @__PURE__ */ react.createElement(Grid.GridItem, {
        col: 12
      }, /* @__PURE__ */ react.createElement(TextButton.TextButton, {
        type: "button",
        onClick: () => {
          push({ key: "", value: "" });
        },
        startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
      }, formatMessage({
        id: "Settings.webhooks.create.header",
        defaultMessage: "Create new header"
      }))));
    }
  })));
};
/* harmony default export */ const components_HeadersInput = (HeadersInput);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Cross.js
var Cross = __webpack_require__(7228);
var Cross_default = /*#__PURE__*/__webpack_require__.n(Cross);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Loader.js
var Loader = __webpack_require__(79386);
var Loader_default = /*#__PURE__*/__webpack_require__.n(Loader);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/TriggerContainer/index.js













const Icon = styled_components_browser_cjs["default"].svg(
  ({ theme, color }) => `
  width: ${12 / 16}rem;
  height: ${12 / 16}rem;

  path {
    fill: ${theme.colors[color]};
  }
`
);
const Status = ({ isPending, statusCode }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (isPending) {
    return /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 2,
      style: { alignItems: "center" }
    }, /* @__PURE__ */ react.createElement(Icon, {
      as: (Loader_default())
    }), /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({ id: "Settings.webhooks.trigger.pending", defaultMessage: "pending" })));
  }
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 2,
      style: { alignItems: "center" }
    }, /* @__PURE__ */ react.createElement(Icon, {
      as: (Check_default()),
      color: "success700"
    }), /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({ id: "Settings.webhooks.trigger.success", defaultMessage: "success" })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 2,
      style: { alignItems: "center" }
    }, /* @__PURE__ */ react.createElement(Icon, {
      as: (Cross_default()),
      color: "danger700"
    }), /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({ id: "Settings.error", defaultMessage: "error" }), " ", statusCode));
  }
  return null;
};
Status.propTypes = {
  isPending: (prop_types_default()).bool.isRequired,
  statusCode: (prop_types_default()).number
};
Status.defaultProps = {
  statusCode: void 0
};
const Message = ({ statusCode, message }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Flex.Flex, {
      justifyContent: "flex-end"
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "neutral600",
      ellipsis: true
    }, formatMessage({
      id: "Settings.webhooks.trigger.success.label",
      defaultMessage: "Trigger succeeded"
    })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Flex.Flex, {
      justifyContent: "flex-end"
    }, /* @__PURE__ */ react.createElement(Flex.Flex, {
      maxWidth: (0,build.pxToRem)(250),
      justifyContent: "flex-end",
      title: message
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      ellipsis: true,
      textColor: "neutral600"
    }, message)));
  }
  return null;
};
Message.propTypes = {
  statusCode: (prop_types_default()).number,
  message: (prop_types_default()).string
};
Message.defaultProps = {
  statusCode: void 0,
  message: void 0
};
const CancelButton = ({ onCancel }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "flex-end"
  }, /* @__PURE__ */ react.createElement("button", {
    onClick: onCancel,
    type: "button"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 2,
    style: { alignItems: "center" }
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral400"
  }, formatMessage({ id: "Settings.webhooks.trigger.cancel", defaultMessage: "cancel" })), /* @__PURE__ */ react.createElement(Icon, {
    as: (Cross_default()),
    color: "neutral400"
  }))));
};
CancelButton.propTypes = { onCancel: (prop_types_default()).func.isRequired };
const TriggerContainer = ({ isPending, onCancel, response }) => {
  const { statusCode, message } = response;
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral0",
    padding: 5,
    shadow: "filterShadow",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4,
    style: { alignItems: "center" }
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 3
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: "Settings.webhooks.trigger.test",
    defaultMessage: "Test-trigger"
  }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 3
  }, /* @__PURE__ */ react.createElement(Status, {
    isPending,
    statusCode
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, !isPending ? /* @__PURE__ */ react.createElement(Message, {
    statusCode,
    message
  }) : /* @__PURE__ */ react.createElement(CancelButton, {
    onCancel
  }))));
};
TriggerContainer.defaultProps = {
  isPending: false,
  onCancel: () => {
  },
  response: {}
};
TriggerContainer.propTypes = {
  isPending: (prop_types_default()).bool,
  onCancel: (prop_types_default()).func,
  response: (prop_types_default()).object
};
/* harmony default export */ const components_TriggerContainer = (TriggerContainer);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/fieldsRegex.js
const NAME_REGEX = new RegExp("(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)");
const URL_REGEX = new RegExp("(^$)|((https?://.*)(d*)/?(.*))");


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/schema.js



const schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_(build.translatedErrors.string).required(build.translatedErrors.required).matches(NAME_REGEX, build.translatedErrors.regex),
  url: yup_lib/* string */.Z_(build.translatedErrors.string).required(build.translatedErrors.required).matches(URL_REGEX, build.translatedErrors.regex),
  headers: yup_lib/* lazy */.Vo((array) => {
    let baseSchema = yup_lib/* array */.IX();
    if (array.length === 1) {
      const { key, value } = array[0];
      if (!key && !value) {
        return baseSchema;
      }
    }
    return baseSchema.of(
      yup_lib/* object */.Ry().shape({
        key: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        value: yup_lib/* string */.Z_().required(build.translatedErrors.required)
      })
    );
  }),
  events: yup_lib/* array */.IX()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/WebhookForm/index.js


















const WebhookForm = ({
  handleSubmit,
  data,
  triggerWebhook,
  isCreating,
  isTriggering,
  triggerResponse,
  isDraftAndPublishEvents
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showTriggerResponse, setShowTriggerResponse] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(dist.Formik, {
    onSubmit: handleSubmit,
    initialValues: {
      name: (data == null ? void 0 : data.name) || "",
      url: (data == null ? void 0 : data.url) || "",
      headers: Object.keys((data == null ? void 0 : data.headers) || []).length ? Object.entries(data.headers).map(([key, value]) => ({ key, value })) : [{ key: "", value: "" }],
      events: (data == null ? void 0 : data.events) || []
    },
    validationSchema: utils_schema,
    validateOnChange: false,
    validateOnBlur: false
  }, ({ handleSubmit: handleSubmit2, errors }) => /* @__PURE__ */ react.createElement(build.Form, {
    noValidate: true
  }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    primaryAction: /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 2
    }, /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: () => {
        triggerWebhook();
        setShowTriggerResponse(true);
      },
      variant: "tertiary",
      startIcon: /* @__PURE__ */ react.createElement((Play_default()), null),
      disabled: isCreating || isTriggering,
      size: "L"
    }, formatMessage({
      id: "Settings.webhooks.trigger",
      defaultMessage: "Trigger"
    })), /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      onClick: handleSubmit2,
      type: "submit",
      size: "L"
    }, formatMessage({
      id: "global.save",
      defaultMessage: "Save"
    }))),
    title: isCreating ? formatMessage({
      id: "Settings.webhooks.create",
      defaultMessage: "Create a webhook"
    }) : data == null ? void 0 : data.name,
    navigationAction: /* @__PURE__ */ react.createElement(build.Link, {
      startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null),
      to: "/settings/webhooks"
    }, formatMessage({
      id: "global.back",
      defaultMessage: "Back"
    }))
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 4
  }, showTriggerResponse && /* @__PURE__ */ react.createElement("div", {
    className: "trigger-wrapper"
  }, /* @__PURE__ */ react.createElement(components_TriggerContainer, {
    isPending: isTriggering,
    response: triggerResponse,
    onCancel: () => setShowTriggerResponse(false)
  })), /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral0",
    padding: 8,
    shadow: "filterShadow",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 6
  }, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 6
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(dist.Field, {
    as: TextInput.TextInput,
    name: "name",
    error: errors.name && formatMessage({ id: errors.name }),
    label: formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }),
    required: true
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 12
  }, /* @__PURE__ */ react.createElement(dist.Field, {
    as: TextInput.TextInput,
    name: "url",
    error: errors.url && formatMessage({ id: errors.url }),
    label: formatMessage({
      id: "Settings.roles.form.input.url",
      defaultMessage: "Url"
    }),
    required: true
  }))), /* @__PURE__ */ react.createElement(components_HeadersInput, null), /* @__PURE__ */ react.createElement(components_EventInput, {
    isDraftAndPublish: isDraftAndPublishEvents
  })))))));
};
WebhookForm.propTypes = {
  data: (prop_types_default()).object,
  handleSubmit: (prop_types_default()).func.isRequired,
  triggerWebhook: (prop_types_default()).func.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  isDraftAndPublishEvents: (prop_types_default()).bool.isRequired,
  isTriggering: (prop_types_default()).bool.isRequired,
  triggerResponse: (prop_types_default()).object
};
WebhookForm.defaultProps = {
  data: void 0,
  triggerResponse: void 0
};
/* harmony default export */ const components_WebhookForm = (WebhookForm);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/utils/formatData.js
var formatData_defProp = Object.defineProperty;
var formatData_defProps = Object.defineProperties;
var formatData_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var formatData_getOwnPropSymbols = Object.getOwnPropertySymbols;
var formatData_hasOwnProp = Object.prototype.hasOwnProperty;
var formatData_propIsEnum = Object.prototype.propertyIsEnumerable;
var formatData_defNormalProp = (obj, key, value) => key in obj ? formatData_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var formatData_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (formatData_hasOwnProp.call(b, prop))
      formatData_defNormalProp(a, prop, b[prop]);
  if (formatData_getOwnPropSymbols)
    for (var prop of formatData_getOwnPropSymbols(b)) {
      if (formatData_propIsEnum.call(b, prop))
        formatData_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var formatData_spreadProps = (a, b) => formatData_defProps(a, formatData_getOwnPropDescs(b));

const cleanData = (data) => {
  const webhooks = formatData_spreadValues({}, data);
  (0,lodash.set)(webhooks, "headers", unformatHeaders(data.headers));
  return webhooks;
};
const unformatHeaders = (headers) => {
  return headers.reduce((acc, current) => {
    const { key, value } = current;
    if (key !== "") {
      return formatData_spreadProps(formatData_spreadValues({}, acc), {
        [key]: value
      });
    }
    return acc;
  }, {});
};
/* harmony default export */ const formatData = (cleanData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var EditView_defProp = Object.defineProperty;
var EditView_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditView_hasOwnProp = Object.prototype.hasOwnProperty;
var EditView_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditView_defNormalProp = (obj, key, value) => key in obj ? EditView_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditView_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditView_hasOwnProp.call(b, prop))
      EditView_defNormalProp(a, prop, b[prop]);
  if (EditView_getOwnPropSymbols)
    for (var prop of EditView_getOwnPropSymbols(b)) {
      if (EditView_propIsEnum.call(b, prop))
        EditView_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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









const EditView = () => {
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/webhooks/:id");
  const { replace } = (0,react_router_dom_min.useHistory)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const toggleNotification = (0,build.useNotification)();
  const queryClient = (0,lib.useQueryClient)();
  const { isLoading: isLoadingForModels, collectionTypes } = (0,hooks/* useModels */.bP)();
  const isCreating = id === "create";
  const fetchWebhook = (0,react.useCallback)(
    (id2) => __async(void 0, null, function* () {
      const [err, { data: data2 }] = yield (0,build.to)(
        (0,build.request)(`/admin/webhooks/${id2}`, {
          method: "GET"
        })
      );
      if (err) {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
        return null;
      }
      return data2;
    }),
    [toggleNotification]
  );
  const { isLoading, data } = (0,lib.useQuery)(["get-webhook", id], () => fetchWebhook(id), {
    enabled: !isCreating
  });
  const {
    isLoading: isTriggering,
    data: triggerResponse,
    isIdle: isTriggerIdle,
    mutate
  } = (0,lib.useMutation)(() => utils/* axiosInstance.post */.be.post(`/admin/webhooks/${id}/trigger`));
  const triggerWebhook = () => mutate(null, {
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  const createWebhookMutation = (0,lib.useMutation)(
    (body) => (0,build.request)("/admin/webhooks", {
      method: "POST",
      body
    })
  );
  const updateWebhookMutation = (0,lib.useMutation)(
    ({ id: id2, body }) => (0,build.request)(`/admin/webhooks/${id2}`, {
      method: "PUT",
      body
    })
  );
  const handleSubmit = (data2) => __async(void 0, null, function* () {
    if (isCreating) {
      lockApp();
      createWebhookMutation.mutate(formatData(data2), {
        onSuccess: (result) => {
          toggleNotification({
            type: "success",
            message: { id: "Settings.webhooks.created" }
          });
          replace(`/settings/webhooks/${result.data.id}`);
          unlockApp();
        },
        onError: (e) => {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
          console.log(e);
          unlockApp();
        }
      });
    } else {
      lockApp();
      updateWebhookMutation.mutate(
        { id, body: formatData(data2) },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["get-webhook", id]);
            toggleNotification({
              type: "success",
              message: { id: "notification.form.success.fields" }
            });
            unlockApp();
          },
          onError: (e) => {
            toggleNotification({
              type: "warning",
              message: { id: "notification.error" }
            });
            console.log(e);
            unlockApp();
          }
        }
      );
    }
  });
  const isDraftAndPublishEvents = (0,react.useMemo)(
    () => collectionTypes.some((ct) => ct.options.draftAndPublish === true),
    [collectionTypes]
  );
  if (isLoading || isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: "Webhooks"
  }), /* @__PURE__ */ react.createElement(components_WebhookForm, EditView_spreadValues({}, {
    handleSubmit,
    data,
    triggerWebhook,
    isCreating,
    isTriggering,
    isTriggerIdle,
    triggerResponse: triggerResponse == null ? void 0 : triggerResponse.data.data,
    isDraftAndPublishEvents
  })));
};
/* harmony default export */ const Webhooks_EditView = (EditView);


/***/ }),

/***/ 3672:
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
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40703);




const ProtectedCreateView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, {
  permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.webhooks.create */ .Z.settings.webhooks.create
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedCreateView);


/***/ }),

/***/ 9311:
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
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40703);




const ProtectedEditView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, {
  permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.webhooks.update */ .Z.settings.webhooks.update
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedEditView);


/***/ })

}]);