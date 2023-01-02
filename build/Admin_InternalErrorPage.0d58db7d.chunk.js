"use strict";
(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[9501],{

/***/ 17502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80117);
/* harmony import */ var _strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35395);
/* harmony import */ var _strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_design_system_EmptyStateLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92543);
/* harmony import */ var _strapi_design_system_EmptyStateLayout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_EmptyStateLayout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_icons_EmptyPictures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40074);
/* harmony import */ var _strapi_icons_EmptyPictures__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_EmptyPictures__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strapi_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64290);
/* harmony import */ var _strapi_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97132);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);








const InternalErrorPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.useFocusWhenNavigate)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_2__.Main, {
    labelledBy: "title"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3__.HeaderLayout, {
    id: "title",
    title: formatMessage({
      id: "content-manager.pageNotFound",
      defaultMessage: "Page not found"
    })
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3__.ContentLayout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_EmptyStateLayout__WEBPACK_IMPORTED_MODULE_4__.EmptyStateLayout, {
    action: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
      variant: "secondary",
      endIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((_strapi_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default()), null),
      to: "/"
    }, formatMessage({
      id: "app.components.NotFoundPage.back",
      defaultMessage: "Back to homepage"
    })),
    content: formatMessage({
      id: "notification.error",
      defaultMessage: "An error occured"
    }),
    hasRadius: true,
    icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((_strapi_icons_EmptyPictures__WEBPACK_IMPORTED_MODULE_5___default()), {
      width: "10rem"
    }),
    shadow: "tableShadow"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InternalErrorPage);


/***/ })

}]);