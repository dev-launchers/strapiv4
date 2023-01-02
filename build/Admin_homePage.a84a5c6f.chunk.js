"use strict";
(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[3981],{

/***/ 36717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_HomePage)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(78384);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/homepage-logo.png
const homepage_logo_namespaceObject = __webpack_require__.p + "fb376b132d18bf4522ca.png";
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 27 modules
var hooks = __webpack_require__(59942);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/isGuidedTourCompleted.js
const isGuidedTourCompleted = (guidedTourState) => Object.entries(guidedTourState).every(
  ([, section]) => Object.entries(section).every(([, step]) => step)
);
/* harmony default export */ const utils_isGuidedTourCompleted = (isGuidedTourCompleted);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(40264);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowRight.js
var ArrowRight = __webpack_require__(64290);
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js
var StepNumber = __webpack_require__(96392);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js
var StepLine = __webpack_require__(89285);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.js
var constants = __webpack_require__(99872);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Step.js










const StepHomepage = ({ type, title, number, content, hasLine }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Box.Box, {
    minWidth: (0,build.pxToRem)(30),
    marginRight: 5
  }, /* @__PURE__ */ react.createElement(StepNumber/* default */.Z, {
    type,
    number
  })), /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "h3"
  }, formatMessage(title))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "flex-start"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center",
    minWidth: (0,build.pxToRem)(30),
    marginBottom: 3,
    marginTop: 3,
    marginRight: 5
  }, hasLine && /* @__PURE__ */ react.createElement(StepLine/* default */.Z, {
    type,
    minHeight: type === constants/* IS_ACTIVE */.lW ? (0,build.pxToRem)(85) : (0,build.pxToRem)(65)
  })), /* @__PURE__ */ react.createElement(Box.Box, {
    marginTop: 2
  }, type === constants/* IS_ACTIVE */.lW && content)));
};
StepHomepage.defaultProps = {
  content: void 0,
  number: void 0,
  type: constants/* IS_NOT_DONE */.VM,
  hasLine: true
};
StepHomepage.propTypes = {
  content: (prop_types_default()).node,
  number: (prop_types_default()).number,
  title: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }).isRequired,
  type: prop_types_default().oneOf([constants/* IS_ACTIVE */.lW, constants/* IS_DONE */.hx, constants/* IS_NOT_DONE */.VM]),
  hasLine: (prop_types_default()).bool
};
/* harmony default export */ const Step = (StepHomepage);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Stepper.js





const getType = (activeSectionIndex, index) => {
  if (activeSectionIndex === -1) {
    return constants/* IS_DONE */.hx;
  }
  if (index < activeSectionIndex) {
    return constants/* IS_DONE */.hx;
  }
  if (index > activeSectionIndex) {
    return constants/* IS_NOT_DONE */.VM;
  }
  return constants/* IS_ACTIVE */.lW;
};
const StepperHomepage = ({ sections, currentSectionKey }) => {
  const activeSectionIndex = sections.findIndex((section) => section.key === currentSectionKey);
  return /* @__PURE__ */ react.createElement(Box.Box, null, sections.map((section, index) => /* @__PURE__ */ react.createElement(Step, {
    key: section.key,
    title: section.title,
    content: section.content,
    number: index + 1,
    type: getType(activeSectionIndex, index),
    hasLine: index !== sections.length - 1
  })));
};
StepperHomepage.defaultProps = {
  currentSectionKey: void 0
};
StepperHomepage.propTypes = {
  sections: prop_types_default().arrayOf(
    prop_types_default().shape({
      key: (prop_types_default()).string.isRequired,
      title: prop_types_default().shape({
        id: (prop_types_default()).string,
        defaultMessage: (prop_types_default()).string
      }).isRequired,
      content: (prop_types_default()).node
    })
  ).isRequired,
  currentSectionKey: (prop_types_default()).string
};
/* harmony default export */ const Stepper = (StepperHomepage);

// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/layout.js
var layout = __webpack_require__(64729);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/index.js
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











const GuidedTourHomepage = () => {
  var _a;
  const { guidedTourState, setSkipped } = (0,build.useGuidedTour)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const sections = Object.entries(layout/* default */.Z).map(([key, val]) => ({
    key,
    title: val.home.title,
    content: /* @__PURE__ */ react.createElement(build.LinkButton, {
      onClick: () => trackUsage(val.home.trackingEvent),
      to: val.home.cta.target,
      endIcon: /* @__PURE__ */ react.createElement((ArrowRight_default()), null)
    }, formatMessage(val.home.cta.title))
  }));
  const enrichedSections = sections.map((section) => __spreadValues({
    isDone: Object.entries(guidedTourState[section.key]).every(([, value]) => value)
  }, section));
  const activeSection = (_a = enrichedSections.find((section) => !section.isDone)) == null ? void 0 : _a.key;
  const handleSkip = () => {
    setSkipped(true);
    trackUsage("didSkipGuidedtour");
  };
  return /* @__PURE__ */ react.createElement(Box.Box, {
    hasRadius: true,
    shadow: "tableShadow",
    paddingTop: 7,
    paddingRight: 4,
    paddingLeft: 7,
    paddingBottom: 4,
    background: "neutral0"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 6
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "beta",
    as: "h2"
  }, formatMessage({
    id: "app.components.GuidedTour.title",
    defaultMessage: "3 steps to get started"
  })), /* @__PURE__ */ react.createElement(Stepper, {
    sections,
    currentSectionKey: activeSection
  })), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "flex-end"
  }, /* @__PURE__ */ react.createElement(Button.Button, {
    variant: "tertiary",
    onClick: handleSkip
  }, formatMessage({ id: "app.components.GuidedTour.skip", defaultMessage: "Skip the tour" }))));
};
/* harmony default export */ const Homepage = (GuidedTourHomepage);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/v2/LinkButton.js
var LinkButton = __webpack_require__(22499);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/v2/Link.js
var Link = __webpack_require__(10407);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ExternalLink.js
var ExternalLink = __webpack_require__(74657);
var ExternalLink_default = /*#__PURE__*/__webpack_require__.n(ExternalLink);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Github.js
var Github = __webpack_require__(42365);
var Github_default = /*#__PURE__*/__webpack_require__.n(Github);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Discord.js
var Discord = __webpack_require__(94869);
var Discord_default = /*#__PURE__*/__webpack_require__.n(Discord);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Reddit.js
var Reddit = __webpack_require__(70450);
var Reddit_default = /*#__PURE__*/__webpack_require__.n(Reddit);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Strapi.js
var Strapi = __webpack_require__(73910);
var Strapi_default = /*#__PURE__*/__webpack_require__.n(Strapi);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Twitter.js
var Twitter = __webpack_require__(3849);
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Discourse.js
var Discourse = __webpack_require__(90431);
var Discourse_default = /*#__PURE__*/__webpack_require__.n(Discourse);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/SocialLinks.js
















const StyledDiscord = (0,styled_components_browser_cjs["default"])((Discord_default()))`
  path {
    fill: #7289da !important;
  }
`;
const StyledReddit = (0,styled_components_browser_cjs["default"])((Reddit_default()))`
  > path:first-child {
    fill: #ff4500;
  }
`;
const StyledStrapi = (0,styled_components_browser_cjs["default"])((Strapi_default()))`
  > path:first-child {
    fill: #8e75ff;
  }
  > path:nth-child(2) {
    fill: #8e75ff;
  }
  > path:nth-child(3) {
    fill: #8e75ff;
  }
`;
const StyledTwitter = (0,styled_components_browser_cjs["default"])((Twitter_default()))`
  path {
    fill: #1da1f2 !important;
  }
`;
const StyledDiscourse = (0,styled_components_browser_cjs["default"])((Discourse_default()))`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`;
const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/strapi/strapi/",
    icon: /* @__PURE__ */ react.createElement((Github_default()), {
      fill: "#7289DA"
    }),
    alt: "github"
  },
  {
    name: "Discord",
    link: "https://slack.strapi.io/",
    icon: /* @__PURE__ */ react.createElement(StyledDiscord, null),
    alt: "discord"
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/r/Strapi/",
    icon: /* @__PURE__ */ react.createElement(StyledReddit, null),
    alt: "reddit"
  },
  {
    name: "Twitter",
    link: "https://twitter.com/strapijs",
    icon: /* @__PURE__ */ react.createElement(StyledTwitter, null),
    alt: "twitter"
  },
  {
    name: "Forum",
    link: "https://forum.strapi.io",
    icon: /* @__PURE__ */ react.createElement(StyledDiscourse, null),
    alt: "forum"
  },
  {
    name: "Blog",
    link: "https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "blog"
  },
  {
    name: "We are hiring!",
    link: "https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "career"
  }
];
const LinkCustom = (0,styled_components_browser_cjs["default"])(LinkButton.LinkButton)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({ theme }) => theme.spaces[6]};
    height: ${({ theme }) => theme.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`;
const GridGap = (0,styled_components_browser_cjs["default"])(Grid.Grid)`
  row-gap: ${({ theme }) => theme.spaces[2]};
  column-gap: ${({ theme }) => theme.spaces[4]};
`;
const SocialLinks = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box.Box, {
    as: "aside",
    "aria-labelledby": "join-the-community",
    background: "neutral0",
    hasRadius: true,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 6,
    paddingBottom: 6,
    shadow: "tableShadow"
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 7
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 5
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 3
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "h2",
    id: "join-the-community"
  }, formatMessage({
    id: "app.components.HomePage.community",
    defaultMessage: "Join the community"
  })), /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral600"
  }, formatMessage({
    id: "app.components.HomePage.community.content",
    defaultMessage: "Discuss with team members, contributors and developers on different channels"
  }))), /* @__PURE__ */ react.createElement(Link.Link, {
    href: "https://feedback.strapi.io/",
    isExternal: true,
    endIcon: /* @__PURE__ */ react.createElement((ExternalLink_default()), null)
  }, formatMessage({
    id: "app.components.HomePage.roadmap",
    defaultMessage: "See our road map"
  })))), /* @__PURE__ */ react.createElement(GridGap, null, socialLinks.map((socialLink) => {
    return /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 6,
      s: 12,
      key: socialLink.name
    }, /* @__PURE__ */ react.createElement(LinkCustom, {
      size: "L",
      startIcon: socialLink.icon,
      variant: "tertiary",
      href: socialLink.link,
      isExternal: true
    }, socialLink.name));
  })));
};
/* harmony default export */ const HomePage_SocialLinks = (SocialLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/HomeHeader.js










const WordWrap = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  word-break: break-word;
`;
const StackCustom = (0,styled_components_browser_cjs["default"])(Stack.Stack)`
  align-items: flex-start;
`;
const HomeHeader = ({ hasCreatedContentType, onCreateCT }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 6,
    paddingBottom: 10
  }, /* @__PURE__ */ react.createElement(StackCustom, {
    spacing: 5
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    as: "h1",
    variant: "alpha"
  }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcome.again",
    defaultMessage: "Welcome \u{1F44B}"
  }) : formatMessage({
    id: "app.components.HomePage.welcome",
    defaultMessage: "Welcome on board!"
  })), /* @__PURE__ */ react.createElement(WordWrap, {
    textColor: "neutral600",
    variant: "epsilon"
  }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcomeBlock.content.again",
    defaultMessage: "We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."
  }) : formatMessage({
    id: "app.components.HomePage.welcomeBlock.content",
    defaultMessage: "Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"
  })), hasCreatedContentType ? /* @__PURE__ */ react.createElement(Link.Link, {
    isExternal: true,
    href: "https://strapi.io/blog"
  }, formatMessage({
    id: "app.components.HomePage.button.blog",
    defaultMessage: "See more on the blog"
  })) : /* @__PURE__ */ react.createElement(Button.Button, {
    size: "L",
    onClick: onCreateCT,
    endIcon: /* @__PURE__ */ react.createElement((ArrowRight_default()), null)
  }, formatMessage({
    id: "app.components.HomePage.create",
    defaultMessage: "Create your first Content type"
  })))));
};
HomeHeader.defaultProps = {
  hasCreatedContentType: void 0,
  onCreateCT: void 0
};
HomeHeader.propTypes = {
  hasCreatedContentType: (prop_types_default()).bool,
  onCreateCT: (prop_types_default()).func
};
/* harmony default export */ const HomePage_HomeHeader = (HomeHeader);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/InformationSquare.js
var InformationSquare = __webpack_require__(97557);
var InformationSquare_default = /*#__PURE__*/__webpack_require__.n(InformationSquare);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/CodeSquare.js
var CodeSquare = __webpack_require__(64214);
var CodeSquare_default = /*#__PURE__*/__webpack_require__.n(CodeSquare);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/PlaySquare.js
var PlaySquare = __webpack_require__(91021);
var PlaySquare_default = /*#__PURE__*/__webpack_require__.n(PlaySquare);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/FeatherSquare.js
var FeatherSquare = __webpack_require__(46884);
var FeatherSquare_default = /*#__PURE__*/__webpack_require__.n(FeatherSquare);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/ContentBlocks.js









const BlockLink = styled_components_browser_cjs["default"].a`
  text-decoration: none;
`;
const ContentBlocks = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const handleClick = (eventName) => {
    trackUsage(eventName);
  };
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 5
  }, /* @__PURE__ */ react.createElement(BlockLink, {
    href: "https://strapi.io/resource-center",
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    onClick: () => handleClick("didClickonReadTheDocumentationSection")
  }, /* @__PURE__ */ react.createElement(build.ContentBox, {
    title: formatMessage({
      id: "global.documentation",
      defaultMessage: "Documentation"
    }),
    subtitle: formatMessage({
      id: "app.components.BlockLink.documentation.content",
      defaultMessage: "Discover the essential concepts, guides and instructions."
    }),
    icon: /* @__PURE__ */ react.createElement((InformationSquare_default()), null),
    iconBackground: "primary100"
  })), /* @__PURE__ */ react.createElement(BlockLink, {
    href: "https://strapi.io/starters",
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    onClick: () => handleClick("didClickonCodeExampleSection")
  }, /* @__PURE__ */ react.createElement(build.ContentBox, {
    title: formatMessage({
      id: "app.components.BlockLink.code",
      defaultMessage: "Code example"
    }),
    subtitle: formatMessage({
      id: "app.components.BlockLink.code.content",
      defaultMessage: "Learn by using ready-made starters for your projects."
    }),
    icon: /* @__PURE__ */ react.createElement((CodeSquare_default()), null),
    iconBackground: "warning100"
  })), /* @__PURE__ */ react.createElement(BlockLink, {
    href: "https://strapi.io/blog/categories/tutorials",
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    onClick: () => handleClick("didClickonTutorialSection")
  }, /* @__PURE__ */ react.createElement(build.ContentBox, {
    title: formatMessage({
      id: "app.components.BlockLink.tutorial",
      defaultMessage: "Tutorials"
    }),
    subtitle: formatMessage({
      id: "app.components.BlockLink.tutorial.content",
      defaultMessage: "Follow step-by-step instructions to use and customize Strapi."
    }),
    icon: /* @__PURE__ */ react.createElement((PlaySquare_default()), null),
    iconBackground: "secondary100"
  })), /* @__PURE__ */ react.createElement(BlockLink, {
    href: "https://strapi.io/blog",
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    onClick: () => handleClick("didClickonBlogSection")
  }, /* @__PURE__ */ react.createElement(build.ContentBox, {
    title: formatMessage({
      id: "app.components.BlockLink.blog",
      defaultMessage: "Blog"
    }),
    subtitle: formatMessage({
      id: "app.components.BlockLink.blog.content",
      defaultMessage: "Read the latest news about Strapi and the ecosystem."
    }),
    icon: /* @__PURE__ */ react.createElement((FeatherSquare_default()), null),
    iconBackground: "alternative100"
  })));
};
/* harmony default export */ const HomePage_ContentBlocks = (ContentBlocks);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/index.js

















const LogoContainer = (0,styled_components_browser_cjs["default"])(Box.Box)`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: ${150 / 16}rem;
  }
`;
const HomePage = () => {
  const { collectionTypes, singleTypes, isLoading: isLoadingForModels } = (0,hooks/* useModels */.bP)();
  const { guidedTourState, isGuidedTourVisible, isSkipped } = (0,build.useGuidedTour)();
  const showGuidedTour = !utils_isGuidedTourCompleted(guidedTourState) && isGuidedTourVisible && !isSkipped;
  const { push } = (0,react_router_dom_min.useHistory)();
  const handleClick = (e) => {
    e.preventDefault();
    push("/plugins/content-type-builder/content-types/create-content-type");
  };
  const hasAlreadyCreatedContentTypes = (0,react.useMemo)(() => {
    const filterContentTypes = (contentTypes) => contentTypes.filter((c) => c.isDisplayed);
    return filterContentTypes(collectionTypes).length > 1 || filterContentTypes(singleTypes).length > 0;
  }, [collectionTypes, singleTypes]);
  if (isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(Layout.Layout, null, /* @__PURE__ */ react.createElement(react_intl.FormattedMessage, {
    id: "HomePage.helmet.title",
    defaultMessage: "Homepage"
  }, (title) => /* @__PURE__ */ react.createElement(Helmet.Helmet, {
    title: title[0]
  })), /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(LogoContainer, null, /* @__PURE__ */ react.createElement("img", {
    alt: "",
    "aria-hidden": true,
    src: homepage_logo_namespaceObject
  })), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 10
  }, /* @__PURE__ */ react.createElement(Grid.Grid, null, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 8,
    s: 12
  }, /* @__PURE__ */ react.createElement(HomePage_HomeHeader, {
    onCreateCT: handleClick,
    hasCreatedContentType: hasAlreadyCreatedContentTypes
  }))), /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 6
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 8,
    s: 12
  }, showGuidedTour ? /* @__PURE__ */ react.createElement(Homepage, null) : /* @__PURE__ */ react.createElement(HomePage_ContentBlocks, null)), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 4,
    s: 12
  }, /* @__PURE__ */ react.createElement(HomePage_SocialLinks, null))))));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));


/***/ })

}]);