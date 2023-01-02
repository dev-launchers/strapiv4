"use strict";
(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[9497],{

/***/ 50166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ProfilePage)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(78384);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/LiveRegions.js
var LiveRegions = __webpack_require__(67422);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(2632);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Field.js
var Field = __webpack_require__(16572);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(99136);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Eye.js
var Eye = __webpack_require__(31023);
var Eye_default = /*#__PURE__*/__webpack_require__.n(Eye);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/EyeStriked.js
var EyeStriked = __webpack_require__(52973);
var EyeStriked_default = /*#__PURE__*/__webpack_require__.n(EyeStriked);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js
var useLocalesProvider = __webpack_require__(50592);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 27 modules
var hooks = __webpack_require__(59942);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(23998);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/ProfilePage/utils/api.js
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


const fetchUser = () => __async(void 0, null, function* () {
  const { data } = yield utils/* axiosInstance.get */.be.get("/admin/users/me");
  return data.data;
});
const putUser = (body) => __async(void 0, null, function* () {
  const dataToSend = omit_default()(body, ["confirmPassword", "currentTheme"]);
  const { data } = yield utils/* axiosInstance.put */.be.put("/admin/users/me", dataToSend);
  return __spreadProps(__spreadValues({}, data.data), { currentTheme: body.currentTheme });
});


// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js + 3 modules
var users = __webpack_require__(17405);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/ProfilePage/utils/schema.js


const schema = yup_lib/* object */.Ry().shape(users/* profileValidation */.Rw);
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var src_utils = __webpack_require__(8610);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/ProfilePage/index.js
var ProfilePage_defProp = Object.defineProperty;
var ProfilePage_defProps = Object.defineProperties;
var ProfilePage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ProfilePage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ProfilePage_hasOwnProp = Object.prototype.hasOwnProperty;
var ProfilePage_propIsEnum = Object.prototype.propertyIsEnumerable;
var ProfilePage_defNormalProp = (obj, key, value) => key in obj ? ProfilePage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ProfilePage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ProfilePage_hasOwnProp.call(b, prop))
      ProfilePage_defNormalProp(a, prop, b[prop]);
  if (ProfilePage_getOwnPropSymbols)
    for (var prop of ProfilePage_getOwnPropSymbols(b)) {
      if (ProfilePage_propIsEnum.call(b, prop))
        ProfilePage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ProfilePage_spreadProps = (a, b) => ProfilePage_defProps(a, ProfilePage_getOwnPropDescs(b));
var ProfilePage_async = (__this, __arguments, generator) => {
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




























const DocumentationLink = styled_components_browser_cjs["default"].a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const PasswordInput = (0,styled_components_browser_cjs["default"])(TextInput.TextInput)`
  ::-ms-reveal {
    display: none;
  }
`;
const FieldActionWrapper = (0,styled_components_browser_cjs["default"])(Field.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const ProfilePage = () => {
  const [passwordShown, setPasswordShown] = (0,react.useState)(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = (0,react.useState)(false);
  const [currentPasswordShown, setCurrentPasswordShown] = (0,react.useState)(false);
  const { changeLocale, localeNames } = (0,useLocalesProvider/* default */.Z)();
  const { setUserDisplayName } = (0,build.useAppInfos)();
  const queryClient = (0,lib.useQueryClient)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  const { currentTheme, themes: allApplicationThemes, onChangeTheme } = (0,hooks/* useThemeToggle */.M1)();
  (0,build.useFocusWhenNavigate)();
  const { status, data } = (0,lib.useQuery)("user", () => fetchUser(), {
    onSuccess: () => {
      notifyStatus(
        formatMessage({
          id: "Settings.profile.form.notify.data.loaded",
          defaultMessage: "Your profile data has been loaded"
        })
      );
    },
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
  const isLoading = status !== "success";
  const submitMutation = (0,lib.useMutation)((body) => putUser(body), {
    onSuccess: (data2) => ProfilePage_async(void 0, null, function* () {
      yield queryClient.invalidateQueries("user");
      build.auth.setUserInfo(
        pick_default()(data2, ["email", "firstname", "lastname", "username", "preferedLanguage"])
      );
      const userDisplayName = data2.username || (0,src_utils/* getFullName */.Pp)(data2.firstname, data2.lastname);
      setUserDisplayName(userDisplayName);
      changeLocale(data2.preferedLanguage);
      onChangeTheme(data2.currentTheme);
      trackUsage("didChangeMode", { newMode: data2.currentTheme });
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved", defaultMessage: "Saved" }
      });
    }),
    onSettled: () => {
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = (_0, _1) => ProfilePage_async(void 0, [_0, _1], function* (body, { setErrors }) {
    lockApp();
    const username = body.username || null;
    submitMutation.mutate(
      ProfilePage_spreadProps(ProfilePage_spreadValues({}, body), { username }),
      {
        onError: (error) => {
          var _a;
          const res = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data;
          if (res == null ? void 0 : res.data) {
            return setErrors(res.data);
          }
          return toggleNotification({
            type: "warning",
            message: { id: "notification.error", defaultMessage: "An error occured" }
          });
        }
      }
    );
  });
  const fieldsToPick = [
    "currentTheme",
    "email",
    "firstname",
    "lastname",
    "username",
    "preferedLanguage"
  ];
  const initialData = pick_default()(ProfilePage_spreadProps(ProfilePage_spreadValues({}, data), { currentTheme }), fieldsToPick);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main.Main, {
      "aria-busy": "true"
    }, /* @__PURE__ */ react.createElement(Helmet.Helmet, {
      title: formatMessage({
        id: "Settings.profile.form.section.helmet.title",
        defaultMessage: "User profile"
      })
    }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: formatMessage({
        id: "Settings.profile.form.section.profile.page.title",
        defaultMessage: "Profile page"
      })
    }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
  }
  const themesToDisplay = Object.keys(allApplicationThemes).filter(
    (themeName) => allApplicationThemes[themeName]
  );
  return /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isSubmittingForm
  }, /* @__PURE__ */ react.createElement(Helmet.Helmet, {
    title: formatMessage({
      id: "Settings.profile.form.section.helmet.title",
      defaultMessage: "User profile"
    })
  }), /* @__PURE__ */ react.createElement(dist.Formik, {
    onSubmit: handleSubmit,
    initialValues: initialData,
    validateOnChange: false,
    validationSchema: utils_schema,
    enableReinitialize: true
  }, ({ errors, values, handleChange, isSubmitting }) => {
    return /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: data.username || (0,src_utils/* getFullName */.Pp)(data.firstname, data.lastname),
      primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
        startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
        loading: isSubmitting,
        type: "submit"
      }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
    }), /* @__PURE__ */ react.createElement(Box.Box, {
      paddingBottom: 10
    }, /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 6
    }, /* @__PURE__ */ react.createElement(Box.Box, {
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
      id: "global.profile",
      defaultMessage: "Profile"
    })), /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 5
    }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(build.GenericInput, {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      error: errors.firstname,
      onChange: handleChange,
      value: values.firstname || "",
      type: "text",
      name: "firstname",
      required: true
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(build.GenericInput, {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      error: errors.lastname,
      onChange: handleChange,
      value: values.lastname || "",
      type: "text",
      name: "lastname"
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(build.GenericInput, {
      intlLabel: { id: "Auth.form.email.label", defaultMessage: "Email" },
      error: errors.email,
      onChange: handleChange,
      value: values.email || "",
      type: "email",
      name: "email",
      required: true
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(build.GenericInput, {
      intlLabel: {
        id: "Auth.form.username.label",
        defaultMessage: "Username"
      },
      error: errors.username,
      onChange: handleChange,
      value: values.username || "",
      type: "text",
      name: "username"
    }))))), /* @__PURE__ */ react.createElement(Box.Box, {
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
      id: "global.change-password",
      defaultMessage: "Change password"
    })), /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 5
    }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(PasswordInput, {
      error: errors.currentPassword ? formatMessage({
        id: errors.currentPassword,
        defaultMessage: errors.currentPassword
      }) : "",
      onChange: handleChange,
      value: values.currentPassword || "",
      label: formatMessage({
        id: "Auth.form.currentPassword.label",
        defaultMessage: "Current Password"
      }),
      name: "currentPassword",
      type: currentPasswordShown ? "text" : "password",
      endAction: /* @__PURE__ */ react.createElement(FieldActionWrapper, {
        onClick: (e) => {
          e.stopPropagation();
          setCurrentPasswordShown((prev) => !prev);
        },
        label: formatMessage(
          currentPasswordShown ? {
            id: "Auth.form.password.show-password",
            defaultMessage: "Show password"
          } : {
            id: "Auth.form.password.hide-password",
            defaultMessage: "Hide password"
          }
        )
      }, currentPasswordShown ? /* @__PURE__ */ react.createElement((Eye_default()), null) : /* @__PURE__ */ react.createElement((EyeStriked_default()), null))
    }))), /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 5
    }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(PasswordInput, {
      error: errors.password ? formatMessage({
        id: errors.password,
        defaultMessage: errors.password
      }) : "",
      onChange: handleChange,
      value: values.password || "",
      label: formatMessage({
        id: "global.password",
        defaultMessage: "Password"
      }),
      name: "password",
      type: passwordShown ? "text" : "password",
      autoComplete: "new-password",
      endAction: /* @__PURE__ */ react.createElement(FieldActionWrapper, {
        onClick: (e) => {
          e.stopPropagation();
          setPasswordShown((prev) => !prev);
        },
        label: formatMessage(
          passwordShown ? {
            id: "Auth.form.password.show-password",
            defaultMessage: "Show password"
          } : {
            id: "Auth.form.password.hide-password",
            defaultMessage: "Hide password"
          }
        )
      }, passwordShown ? /* @__PURE__ */ react.createElement((Eye_default()), null) : /* @__PURE__ */ react.createElement((EyeStriked_default()), null))
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(PasswordInput, {
      error: errors.confirmPassword ? formatMessage({
        id: errors.confirmPassword,
        defaultMessage: errors.confirmPassword
      }) : "",
      onChange: handleChange,
      value: values.confirmPassword || "",
      label: formatMessage({
        id: "Auth.form.confirmPassword.label",
        defaultMessage: "Password confirmation"
      }),
      name: "confirmPassword",
      type: passwordConfirmShown ? "text" : "password",
      autoComplete: "new-password",
      endAction: /* @__PURE__ */ react.createElement(FieldActionWrapper, {
        onClick: (e) => {
          e.stopPropagation();
          setPasswordConfirmShown((prev) => !prev);
        },
        label: formatMessage(
          passwordConfirmShown ? {
            id: "Auth.form.password.show-password",
            defaultMessage: "Show password"
          } : {
            id: "Auth.form.password.hide-password",
            defaultMessage: "Hide password"
          }
        )
      }, passwordConfirmShown ? /* @__PURE__ */ react.createElement((Eye_default()), null) : /* @__PURE__ */ react.createElement((EyeStriked_default()), null))
    }))))), /* @__PURE__ */ react.createElement(Box.Box, {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 4
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 1
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "delta",
      as: "h2"
    }, formatMessage({
      id: "Settings.profile.form.section.experience.title",
      defaultMessage: "Experience"
    })), /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage(
      {
        id: "Settings.profile.form.section.experience.interfaceLanguageHelp",
        defaultMessage: "Preference changes will apply only to you. More information is available {here}."
      },
      {
        here: /* @__PURE__ */ react.createElement(DocumentationLink, {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"
        }, formatMessage({
          id: "Settings.profile.form.section.experience.documentation",
          defaultMessage: "here"
        }))
      }
    ))), /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 5
    }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(Select.Select, {
      label: formatMessage({
        id: "Settings.profile.form.section.experience.interfaceLanguage",
        defaultMessage: "Interface language"
      }),
      placeholder: formatMessage({
        id: "global.select",
        defaultMessage: "Select"
      }),
      hint: formatMessage({
        id: "Settings.profile.form.section.experience.interfaceLanguage.hint",
        defaultMessage: "This will only display your own interface in the chosen language."
      }),
      onClear: () => {
        handleChange({
          target: { name: "preferedLanguage", value: null }
        });
      },
      clearLabel: formatMessage({
        id: "Settings.profile.form.section.experience.clear.select",
        defaultMessage: "Clear the interface language selected"
      }),
      value: values.preferedLanguage,
      onChange: (e) => {
        handleChange({
          target: { name: "preferedLanguage", value: e }
        });
      }
    }, Object.keys(localeNames).map((language) => {
      const langName = localeNames[language];
      return /* @__PURE__ */ react.createElement(Select.Option, {
        value: language,
        key: language
      }, langName);
    }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      s: 12,
      col: 6
    }, /* @__PURE__ */ react.createElement(Select.Select, {
      label: formatMessage({
        id: "Settings.profile.form.section.experience.mode.label",
        defaultMessage: "Interface mode"
      }),
      placeholder: formatMessage({
        id: "components.Select.placeholder",
        defaultMessage: "Select"
      }),
      hint: formatMessage({
        id: "Settings.profile.form.section.experience.mode.hint",
        defaultMessage: "Displays your interface in the chosen mode."
      }),
      value: values.currentTheme,
      onChange: (e) => {
        handleChange({
          target: { name: "currentTheme", value: e }
        });
      }
    }, themesToDisplay.map((theme) => /* @__PURE__ */ react.createElement(Select.Option, {
      value: theme,
      key: theme
    }, formatMessage(
      {
        id: "Settings.profile.form.section.experience.mode.option-label",
        defaultMessage: "{name} mode"
      },
      {
        name: formatMessage({
          id: theme,
          defaultMessage: upperFirst_default()(theme)
        })
      }
    ))))))))))));
  }));
};
/* harmony default export */ const pages_ProfilePage = (ProfilePage);


/***/ }),

/***/ 17405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YM": () => (/* reexport */ edit),
  "Rw": () => (/* reexport */ profile)
});

// UNUSED EXPORTS: rolesValidation

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js
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


const commonUserSchema = {
  firstname: lib/* mixed */.nK().required(build.translatedErrors.required),
  lastname: lib/* mixed */.nK(),
  email: lib/* string */.Z_().email(build.translatedErrors.email).lowercase().required(build.translatedErrors.required),
  username: lib/* string */.Z_().nullable(),
  password: lib/* string */.Z_().min(8, build.translatedErrors.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number"),
  confirmPassword: lib/* string */.Z_().min(8, build.translatedErrors.minLength).oneOf([lib/* ref */.iH("password"), null], "components.Input.error.password.noMatch").when("password", (password, passSchema) => {
    return password ? passSchema.required(build.translatedErrors.required) : passSchema;
  })
};
const schema = __spreadProps(__spreadValues({}, commonUserSchema), {
  currentPassword: lib/* string */.Z_().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(build.translatedErrors.required) : passSchema;
  }),
  preferedLanguage: lib/* string */.Z_().nullable()
});
/* harmony default export */ const profile = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js


const roles_schema = {
  roles: lib/* array */.IX().min(1, build.translatedErrors.required).required(build.translatedErrors.required)
};
/* harmony default export */ const roles = (roles_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js
var edit_defProp = Object.defineProperty;
var edit_defProps = Object.defineProperties;
var edit_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var edit_getOwnPropSymbols = Object.getOwnPropertySymbols;
var edit_hasOwnProp = Object.prototype.hasOwnProperty;
var edit_propIsEnum = Object.prototype.propertyIsEnumerable;
var edit_defNormalProp = (obj, key, value) => key in obj ? edit_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var edit_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (edit_hasOwnProp.call(b, prop))
      edit_defNormalProp(a, prop, b[prop]);
  if (edit_getOwnPropSymbols)
    for (var prop of edit_getOwnPropSymbols(b)) {
      if (edit_propIsEnum.call(b, prop))
        edit_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var edit_spreadProps = (a, b) => edit_defProps(a, edit_getOwnPropDescs(b));



const edit_schema = lib/* object */.Ry().shape(edit_spreadValues(edit_spreadProps(edit_spreadValues({}, commonUserSchema), {
  isActive: lib/* bool */.Xg()
}), roles));
/* harmony default export */ const edit = (edit_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js





/***/ })

}]);