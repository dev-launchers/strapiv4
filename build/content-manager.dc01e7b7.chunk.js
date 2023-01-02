(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[994],{

/***/ 33629:
/***/ ((__unused_webpack_module, exports) => {

var jsonlint = function() {
  var parser = {
    trace: function trace() {
    },
    yy: {},
    symbols_: {
      error: 2,
      JSONString: 3,
      STRING: 4,
      JSONNumber: 5,
      NUMBER: 6,
      JSONNullLiteral: 7,
      NULL: 8,
      JSONBooleanLiteral: 9,
      TRUE: 10,
      FALSE: 11,
      JSONText: 12,
      JSONValue: 13,
      EOF: 14,
      JSONObject: 15,
      JSONArray: 16,
      "{": 17,
      "}": 18,
      JSONMemberList: 19,
      JSONMember: 20,
      ":": 21,
      ",": 22,
      "[": 23,
      "]": 24,
      JSONElementList: 25,
      $accept: 0,
      $end: 1
    },
    terminals_: {
      2: "error",
      4: "STRING",
      6: "NUMBER",
      8: "NULL",
      10: "TRUE",
      11: "FALSE",
      14: "EOF",
      17: "{",
      18: "}",
      21: ":",
      22: ",",
      23: "[",
      24: "]"
    },
    productions_: [
      0,
      [3, 1],
      [5, 1],
      [7, 1],
      [9, 1],
      [9, 1],
      [12, 2],
      [13, 1],
      [13, 1],
      [13, 1],
      [13, 1],
      [13, 1],
      [13, 1],
      [15, 2],
      [15, 3],
      [20, 3],
      [19, 1],
      [19, 3],
      [16, 2],
      [16, 3],
      [25, 1],
      [25, 3]
    ],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
          this.$ = yytext.replace(/\\(\\|")/g, "$1").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\v/g, "\v").replace(/\\f/g, "\f").replace(/\\b/g, "\b");
          break;
        case 2:
          this.$ = Number(yytext);
          break;
        case 3:
          this.$ = null;
          break;
        case 4:
          this.$ = true;
          break;
        case 5:
          this.$ = false;
          break;
        case 6:
          return this.$ = $$[$0 - 1];
          break;
        case 13:
          this.$ = {};
          break;
        case 14:
          this.$ = $$[$0 - 1];
          break;
        case 15:
          this.$ = [$$[$0 - 2], $$[$0]];
          break;
        case 16:
          this.$ = {};
          this.$[$$[$0][0]] = $$[$0][1];
          break;
        case 17:
          this.$ = $$[$0 - 2];
          $$[$0 - 2][$$[$0][0]] = $$[$0][1];
          break;
        case 18:
          this.$ = [];
          break;
        case 19:
          this.$ = $$[$0 - 1];
          break;
        case 20:
          this.$ = [$$[$0]];
          break;
        case 21:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].push($$[$0]);
          break;
      }
    },
    table: [
      {
        3: 5,
        4: [1, 12],
        5: 6,
        6: [1, 13],
        7: 3,
        8: [1, 9],
        9: 4,
        10: [1, 10],
        11: [1, 11],
        12: 1,
        13: 2,
        15: 7,
        16: 8,
        17: [1, 14],
        23: [1, 15]
      },
      { 1: [3] },
      { 14: [1, 16] },
      { 14: [2, 7], 18: [2, 7], 22: [2, 7], 24: [2, 7] },
      { 14: [2, 8], 18: [2, 8], 22: [2, 8], 24: [2, 8] },
      { 14: [2, 9], 18: [2, 9], 22: [2, 9], 24: [2, 9] },
      { 14: [2, 10], 18: [2, 10], 22: [2, 10], 24: [2, 10] },
      { 14: [2, 11], 18: [2, 11], 22: [2, 11], 24: [2, 11] },
      { 14: [2, 12], 18: [2, 12], 22: [2, 12], 24: [2, 12] },
      { 14: [2, 3], 18: [2, 3], 22: [2, 3], 24: [2, 3] },
      { 14: [2, 4], 18: [2, 4], 22: [2, 4], 24: [2, 4] },
      { 14: [2, 5], 18: [2, 5], 22: [2, 5], 24: [2, 5] },
      { 14: [2, 1], 18: [2, 1], 21: [2, 1], 22: [2, 1], 24: [2, 1] },
      { 14: [2, 2], 18: [2, 2], 22: [2, 2], 24: [2, 2] },
      { 3: 20, 4: [1, 12], 18: [1, 17], 19: 18, 20: 19 },
      {
        3: 5,
        4: [1, 12],
        5: 6,
        6: [1, 13],
        7: 3,
        8: [1, 9],
        9: 4,
        10: [1, 10],
        11: [1, 11],
        13: 23,
        15: 7,
        16: 8,
        17: [1, 14],
        23: [1, 15],
        24: [1, 21],
        25: 22
      },
      { 1: [2, 6] },
      { 14: [2, 13], 18: [2, 13], 22: [2, 13], 24: [2, 13] },
      { 18: [1, 24], 22: [1, 25] },
      { 18: [2, 16], 22: [2, 16] },
      { 21: [1, 26] },
      { 14: [2, 18], 18: [2, 18], 22: [2, 18], 24: [2, 18] },
      { 22: [1, 28], 24: [1, 27] },
      { 22: [2, 20], 24: [2, 20] },
      { 14: [2, 14], 18: [2, 14], 22: [2, 14], 24: [2, 14] },
      { 3: 20, 4: [1, 12], 20: 29 },
      {
        3: 5,
        4: [1, 12],
        5: 6,
        6: [1, 13],
        7: 3,
        8: [1, 9],
        9: 4,
        10: [1, 10],
        11: [1, 11],
        13: 30,
        15: 7,
        16: 8,
        17: [1, 14],
        23: [1, 15]
      },
      { 14: [2, 19], 18: [2, 19], 22: [2, 19], 24: [2, 19] },
      {
        3: 5,
        4: [1, 12],
        5: 6,
        6: [1, 13],
        7: 3,
        8: [1, 9],
        9: 4,
        10: [1, 10],
        11: [1, 11],
        13: 31,
        15: 7,
        16: 8,
        17: [1, 14],
        23: [1, 15]
      },
      { 18: [2, 17], 22: [2, 17] },
      { 18: [2, 15], 22: [2, 15] },
      { 22: [2, 21], 24: [2, 21] }
    ],
    defaultActions: { 16: [2, 6] },
    parseError: function parseError(str, hash) {
      throw new Error(str);
    },
    parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
          token = self.symbols_[token] || token;
        }
        return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol == null)
            symbol = lex();
          action = table[state] && table[state][symbol];
        }
        _handle_error:
          if (typeof action === "undefined" || !action.length || !action[0]) {
            if (!recovering) {
              expected = [];
              for (p in table[state])
                if (this.terminals_[p] && p > 2) {
                  expected.push("'" + this.terminals_[p] + "'");
                }
              var errStr = "";
              if (this.lexer.showPosition) {
                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + this.terminals_[symbol] + "'";
              } else {
                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
              }
              this.parseError(errStr, {
                text: this.lexer.match,
                token: this.terminals_[symbol] || symbol,
                line: this.lexer.yylineno,
                loc: yyloc,
                expected
              });
            }
            if (recovering == 3) {
              if (symbol == EOF) {
                throw new Error(errStr || "Parsing halted.");
              }
              yyleng = this.lexer.yyleng;
              yytext = this.lexer.yytext;
              yylineno = this.lexer.yylineno;
              yyloc = this.lexer.yylloc;
              symbol = lex();
            }
            while (1) {
              if (TERROR.toString() in table[state]) {
                break;
              }
              if (state == 0) {
                throw new Error(errStr || "Parsing halted.");
              }
              popStack(1);
              state = stack[stack.length - 1];
            }
            preErrorSymbol = symbol;
            symbol = TERROR;
            state = stack[stack.length - 1];
            action = table[state] && table[state][TERROR];
            recovering = 3;
          }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error(
            "Parse Error: multiple actions possible at state: " + state + ", token: " + symbol
          );
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = this.lexer.yyleng;
              yytext = this.lexer.yytext;
              yylineno = this.lexer.yylineno;
              yyloc = this.lexer.yylloc;
              if (recovering > 0)
                recovering--;
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            r = this.performAction.call(
              yyval,
              yytext,
              yyleng,
              yylineno,
              this.yy,
              action[1],
              vstack,
              lstack
            );
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  };
  var lexer = function() {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parseError) {
          this.yy.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      setInput: function(input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
        return this;
      },
      input: function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/\n/);
        if (lines)
          this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
      },
      unput: function(ch) {
        this._input = ch + this._input;
        return this;
      },
      more: function() {
        this._more = true;
        return this;
      },
      less: function(n) {
        this._input = this.match.slice(n) + this._input;
      },
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      upcomingInput: function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      showPosition: function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      next: function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input)
          this.done = true;
        var token, match, tempMatch, index, col, lines;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (!this.options.flex)
              break;
          }
        }
        if (match) {
          lines = match[0].match(/\n.*/g);
          if (lines)
            this.yylineno += lines.length;
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - 1 : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.yyleng = this.yytext.length;
          this._more = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(
            this,
            this.yy,
            this,
            rules[index],
            this.conditionStack[this.conditionStack.length - 1]
          );
          if (this.done && this._input)
            this.done = false;
          if (token)
            return token;
          else
            return;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          this.parseError(
            "Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(),
            { text: "", token: null, line: this.yylineno }
          );
        }
      },
      lex: function lex() {
        var r = this.next();
        if (typeof r !== "undefined") {
          return r;
        } else {
          return this.lex();
        }
      },
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      popState: function popState() {
        return this.conditionStack.pop();
      },
      _currentRules: function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      },
      topState: function() {
        return this.conditionStack[this.conditionStack.length - 2];
      },
      pushState: function begin(condition) {
        this.begin(condition);
      }
    };
    lexer2.options = {};
    lexer2.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
      var YYSTATE = YY_START;
      switch ($avoiding_name_collisions) {
        case 0:
          break;
        case 1:
          return 6;
          break;
        case 2:
          yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
          return 4;
          break;
        case 3:
          return 17;
          break;
        case 4:
          return 18;
          break;
        case 5:
          return 23;
          break;
        case 6:
          return 24;
          break;
        case 7:
          return 22;
          break;
        case 8:
          return 21;
          break;
        case 9:
          return 10;
          break;
        case 10:
          return 11;
          break;
        case 11:
          return 8;
          break;
        case 12:
          return 14;
          break;
        case 13:
          return "INVALID";
          break;
      }
    };
    lexer2.rules = [
      /^(?:\s+)/,
      /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,
      /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,
      /^(?:\{)/,
      /^(?:\})/,
      /^(?:\[)/,
      /^(?:\])/,
      /^(?:,)/,
      /^(?::)/,
      /^(?:true\b)/,
      /^(?:false\b)/,
      /^(?:null\b)/,
      /^(?:$)/,
      /^(?:.)/
    ];
    lexer2.conditions = {
      INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], inclusive: true }
    };
    return lexer2;
  }();
  parser.lexer = lexer;
  return parser;
}();
if (true) {
  exports.parser = jsonlint;
  exports.parse = function() {
    return jsonlint.parse.apply(jsonlint, arguments);
  };
  exports.main = function commonjsMain(args) {
    if (!args[1]) {
      throw new Error("Usage: " + args[0] + " FILE");
    }
  };
}


/***/ }),

/***/ 77064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "App": () => (/* binding */ App),
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
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
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getTrad.js
const getTrad = (id) => `content-manager.${id}`;
/* harmony default export */ const utils_getTrad = (getTrad);

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/cjs/index.js
var cjs = __webpack_require__(99168);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/LayoutDnd.js

const LayoutDndContext = (0,react.createContext)();
/* harmony default export */ const LayoutDnd = (LayoutDndContext);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/LayoutDndProvider/index.js
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



function LayoutDndProvider(_a) {
  var _b = _a, {
    attributes,
    buttonData,
    children,
    goTo,
    layout,
    metadatas,
    moveItem,
    moveRow,
    onAddData,
    relationsLayout,
    removeField,
    selectedItemName,
    setEditFieldToSelect
  } = _b, rest = __objRest(_b, [
    "attributes",
    "buttonData",
    "children",
    "goTo",
    "layout",
    "metadatas",
    "moveItem",
    "moveRow",
    "onAddData",
    "relationsLayout",
    "removeField",
    "selectedItemName",
    "setEditFieldToSelect"
  ]);
  return /* @__PURE__ */ react.createElement(LayoutDnd.Provider, {
    value: __spreadValues({
      attributes,
      buttonData,
      goTo,
      layout,
      metadatas,
      moveItem,
      moveRow,
      onAddData,
      relationsLayout,
      removeField,
      selectedItemName,
      setEditFieldToSelect
    }, rest)
  }, children);
}
LayoutDndProvider.defaultProps = {
  attributes: {},
  buttonData: [],
  goTo: () => {
  },
  layout: [],
  metadatas: {},
  moveItem: () => {
  },
  moveRow: () => {
  },
  onAddData: () => {
  },
  relationsLayout: [],
  removeField: () => {
  },
  selectedItemName: null,
  setEditFieldToSelect: () => {
  }
};
LayoutDndProvider.propTypes = {
  attributes: (prop_types_default()).object,
  buttonData: (prop_types_default()).array,
  children: (prop_types_default()).node.isRequired,
  goTo: (prop_types_default()).func,
  layout: (prop_types_default()).array,
  metadatas: (prop_types_default()).object,
  moveItem: (prop_types_default()).func,
  moveRow: (prop_types_default()).func,
  onAddData: (prop_types_default()).func,
  relationsLayout: (prop_types_default()).array,
  removeField: (prop_types_default()).func,
  selectedItemName: (prop_types_default()).string,
  setEditFieldToSelect: (prop_types_default()).func
};
/* harmony default export */ const components_LayoutDndProvider = (LayoutDndProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/ItemTypes.js
/* harmony default export */ const ItemTypes = ({
  COMPONENT: "component",
  EDIT_FIELD: "editField",
  EDIT_RELATION: "editRelation",
  FIELD: "field",
  RELATION: "relation"
});

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(78384);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(40264);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(49549);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Trash.js
var Trash = __webpack_require__(62982);
var Trash_default = /*#__PURE__*/__webpack_require__.n(Trash);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Drag.js
var Drag = __webpack_require__(58506);
var Drag_default = /*#__PURE__*/__webpack_require__.n(Drag);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/CarretDown.js
var CarretDown = __webpack_require__(40413);
var CarretDown_default = /*#__PURE__*/__webpack_require__.n(CarretDown);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/DragPreview.js











const DragPreviewBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const DropdownIconWrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  height: ${32 / 16}rem;
  width: ${32 / 16}rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${6 / 16}rem;
    width: ${11 / 16}rem;
    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const ToggleButton = styled_components_browser_cjs["default"].button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`;
const DragPreview = ({ displayedValue }) => {
  return /* @__PURE__ */ react.createElement(DragPreviewBox, {
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 3,
    hasRadius: true,
    background: "neutral0",
    width: (0,build.pxToRem)(300)
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(ToggleButton, {
    type: "button"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(DropdownIconWrapper, {
    background: "neutral200"
  }, /* @__PURE__ */ react.createElement((CarretDown_default()), null)), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 6,
    maxWidth: (0,build.pxToRem)(150)
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral700",
    ellipsis: true
  }, displayedValue)))), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 3
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    icon: /* @__PURE__ */ react.createElement((Trash_default()), null)
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 2
  }, /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    icon: /* @__PURE__ */ react.createElement((Drag_default()), null)
  }))))));
};
DragPreview.propTypes = {
  displayedValue: (prop_types_default()).string.isRequired
};
/* harmony default export */ const RepeatableComponent_DragPreview = (DragPreview);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(56204);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Cross.js
var Cross = __webpack_require__(7228);
var Cross_default = /*#__PURE__*/__webpack_require__.n(Cross);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/utils/ellipsisCardTitle.js
const ellipsisCardTitle = (title) => {
  const formatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;
  return formatedTitle;
};
/* harmony default export */ const utils_ellipsisCardTitle = (ellipsisCardTitle);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/CardPreview.js










const ActionBox = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;
const DragButton = (0,styled_components_browser_cjs["default"])(ActionBox)`
  padding: 0 ${({ theme }) => theme.spaces[3]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const FieldContainer = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  display: inline-flex;
  max-height: ${32 / 16}rem;
  opacity: ${({ transparent }) => transparent ? 0 : 1};
  background-color: ${({ theme, isSibling }) => isSibling ? theme.colors.neutral100 : theme.colors.primary100};
  border: 1px solid
    ${({ theme, isSibling }) => isSibling ? theme.colors.neutral150 : theme.colors.primary200};

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme, isSibling }) => isSibling ? void 0 : theme.colors.primary600};
    }
  }

  ${Typography.Typography} {
    color: ${({ theme, isSibling }) => isSibling ? void 0 : theme.colors.primary600};
  }

  ${DragButton} {
    border-right: 1px solid
      ${({ theme, isSibling }) => isSibling ? theme.colors.neutral150 : theme.colors.primary200};
  }
`;
const CardPreview = ({ labelField, transparent, isSibling }) => {
  const cardEllipsisTitle = utils_ellipsisCardTitle(labelField);
  return /* @__PURE__ */ react.createElement(FieldContainer, {
    hasRadius: true,
    justifyContent: "space-between",
    transparent,
    isSibling
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 3
  }, /* @__PURE__ */ react.createElement(DragButton, {
    alignItems: "center"
  }, /* @__PURE__ */ react.createElement((Drag_default()), null)), /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, cardEllipsisTitle)), /* @__PURE__ */ react.createElement(Flex.Flex, {
    paddingLeft: 3
  }, /* @__PURE__ */ react.createElement(ActionBox, {
    alignItems: "center"
  }, /* @__PURE__ */ react.createElement((Pencil_default()), null)), /* @__PURE__ */ react.createElement(ActionBox, {
    alignItems: "center"
  }, /* @__PURE__ */ react.createElement((Cross_default()), null))));
};
CardPreview.defaultProps = {
  isSibling: false,
  transparent: false
};
CardPreview.propTypes = {
  isSibling: (prop_types_default()).bool,
  labelField: (prop_types_default()).string.isRequired,
  transparent: (prop_types_default()).bool
};
/* harmony default export */ const components_CardPreview = (CardPreview);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DragLayer/index.js






const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};
function getItemStyles(initialOffset, currentOffset, mouseOffset) {
  if (!initialOffset || !currentOffset) {
    return { display: "none" };
  }
  const { x, y } = mouseOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}
const CustomDragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset, mouseOffset } = (0,cjs.useDragLayer)(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
      mouseOffset: monitor.getClientOffset()
    })
  );
  if (!isDragging) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(components_LayoutDndProvider, null, /* @__PURE__ */ react.createElement("div", {
    style: layerStyles
  }, /* @__PURE__ */ react.createElement("div", {
    style: getItemStyles(initialOffset, currentOffset, mouseOffset),
    className: "col-md-2"
  }, [ItemTypes.EDIT_RELATION, ItemTypes.EDIT_FIELD, ItemTypes.FIELD].includes(itemType) && /* @__PURE__ */ react.createElement(components_CardPreview, {
    labelField: item.labelField
  }), itemType === ItemTypes.COMPONENT && /* @__PURE__ */ react.createElement(RepeatableComponent_DragPreview, {
    displayedValue: item.displayedValue
  }))));
};
/* harmony default export */ const DragLayer = (CustomDragLayer);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/ModelsContext.js

const ModelsContext = (0,react.createContext)();
/* harmony default export */ const contexts_ModelsContext = (ModelsContext);

// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.cjs.js
var react_error_boundary_cjs = __webpack_require__(66730);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/ContentTypeLayout.js

const ContentTypeLayout = (0,react.createContext)();
/* harmony default export */ const contexts_ContentTypeLayout = (ContentTypeLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/Wysiwyg.js

const Wysiwyg_WysiwygContext = (0,react.createContext)();
/* harmony default export */ const Wysiwyg = ((/* unused pure expression or super */ null && (Wysiwyg_WysiwygContext)));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/index.js




// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/selectors.js
const selectLayout = (state) => state["content-manager_editViewLayoutManager"].currentLayout;
/* harmony default export */ const selectors = (selectLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useContentTypeLayout/index.js
var useContentTypeLayout_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var useContentTypeLayout_getOwnPropSymbols = Object.getOwnPropertySymbols;
var useContentTypeLayout_hasOwnProp = Object.prototype.hasOwnProperty;
var useContentTypeLayout_propIsEnum = Object.prototype.propertyIsEnumerable;
var useContentTypeLayout_defNormalProp = (obj, key, value) => key in obj ? useContentTypeLayout_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var useContentTypeLayout_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (useContentTypeLayout_hasOwnProp.call(b, prop))
      useContentTypeLayout_defNormalProp(a, prop, b[prop]);
  if (useContentTypeLayout_getOwnPropSymbols)
    for (var prop of useContentTypeLayout_getOwnPropSymbols(b)) {
      if (useContentTypeLayout_propIsEnum.call(b, prop))
        useContentTypeLayout_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




const useContentTypeLayout = () => {
  const currentLayout = (0,lib.useSelector)(selectors);
  const getComponentLayout = (0,react.useCallback)(
    (componentUid) => {
      return (0,lodash.get)(currentLayout, ["components", componentUid], {});
    },
    [currentLayout]
  );
  return __spreadProps(useContentTypeLayout_spreadValues({}, currentLayout), { getComponentLayout });
};
/* harmony default export */ const hooks_useContentTypeLayout = (useContentTypeLayout);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(23998);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/arrayMoveItem.js

const arrayMoveItem = (arr, from, to) => {
  if (Array.isArray(arr) && from >= 0 && to >= 0 && from <= arr.length - 1 && to <= arr.length - 1) {
    const newArray = cloneDeep_default()(arr);
    const item = newArray.splice(from, 1);
    newArray.splice(to, 0, item[0]);
    return newArray;
  }
  return arr;
};
/* harmony default export */ const utils_arrayMoveItem = (arrayMoveItem);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/checkIfAttributeIsDisplayable.js

const checkIfAttributeIsDisplayable = (attribute) => {
  const type = attribute.type;
  if (type === "relation") {
    return !(0,lodash.toLower)(attribute.relationType).includes("morph");
  }
  return !["json", "dynamiczone", "richtext", "password"].includes(type) && !!type;
};
/* harmony default export */ const utils_checkIfAttributeIsDisplayable = (checkIfAttributeIsDisplayable);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/createDefaultForm.js

const createDefaultForm = (attributes, allComponentsSchema) => {
  return Object.keys(attributes).reduce((acc, current) => {
    const attribute = (0,lodash.get)(attributes, [current], {});
    const { default: defaultValue, component, type, required, min, repeatable } = attribute;
    if (type === "json") {
      acc[current] = null;
    }
    if (type === "json" && required === true) {
      acc[current] = {};
    }
    if (defaultValue !== void 0) {
      acc[current] = defaultValue;
    }
    if (type === "component") {
      const currentComponentSchema = (0,lodash.get)(allComponentsSchema, [component, "attributes"], {});
      const currentComponentDefaultForm = createDefaultForm(
        currentComponentSchema,
        allComponentsSchema
      );
      if (required === true) {
        acc[current] = repeatable === true ? [] : currentComponentDefaultForm;
      }
      if (min && repeatable === true && required) {
        acc[current] = [];
        for (let i = 0; i < min; i += 1) {
          acc[current].push(currentComponentDefaultForm);
        }
      }
    }
    if (type === "dynamiczone") {
      if (required === true) {
        acc[current] = [];
      }
    }
    return acc;
  }, {});
};
/* harmony default export */ const utils_createDefaultForm = (createDefaultForm);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/formatLayoutToApi.js
var formatLayoutToApi_defProp = Object.defineProperty;
var formatLayoutToApi_defProps = Object.defineProperties;
var formatLayoutToApi_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var formatLayoutToApi_getOwnPropSymbols = Object.getOwnPropertySymbols;
var formatLayoutToApi_hasOwnProp = Object.prototype.hasOwnProperty;
var formatLayoutToApi_propIsEnum = Object.prototype.propertyIsEnumerable;
var formatLayoutToApi_defNormalProp = (obj, key, value) => key in obj ? formatLayoutToApi_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var formatLayoutToApi_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (formatLayoutToApi_hasOwnProp.call(b, prop))
      formatLayoutToApi_defNormalProp(a, prop, b[prop]);
  if (formatLayoutToApi_getOwnPropSymbols)
    for (var prop of formatLayoutToApi_getOwnPropSymbols(b)) {
      if (formatLayoutToApi_propIsEnum.call(b, prop))
        formatLayoutToApi_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var formatLayoutToApi_spreadProps = (a, b) => formatLayoutToApi_defProps(a, formatLayoutToApi_getOwnPropDescs(b));
var formatLayoutToApi_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (formatLayoutToApi_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && formatLayoutToApi_getOwnPropSymbols)
    for (var prop of formatLayoutToApi_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && formatLayoutToApi_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

const formatLayoutToApi = (_a) => {
  var _b = _a, { layouts, metadatas } = _b, rest = formatLayoutToApi_objRest(_b, ["layouts", "metadatas"]);
  const list = layouts.list.map((obj) => {
    if (obj.name) {
      return obj.name;
    }
    return obj;
  });
  const editRelations = layouts.editRelations.map(({ name }) => name);
  const formattedMetadatas = Object.keys(metadatas).reduce((acc, current) => {
    const currentMetadatas = (0,lodash.get)(metadatas, [current], {});
    let editMetadatas = currentMetadatas.edit;
    if (editMetadatas.mainField) {
      editMetadatas = formatLayoutToApi_spreadProps(formatLayoutToApi_spreadValues({}, editMetadatas), { mainField: currentMetadatas.edit.mainField.name });
    }
    return formatLayoutToApi_spreadProps(formatLayoutToApi_spreadValues({}, acc), {
      [current]: {
        edit: editMetadatas,
        list: (0,lodash.omit)(currentMetadatas.list, ["mainField"])
      }
    });
  }, {});
  const edit = layouts.edit.map(
    (row) => row.map(({ name, size }) => ({
      name,
      size
    }))
  );
  return formatLayoutToApi_spreadProps(formatLayoutToApi_spreadValues({}, rest), {
    layouts: { edit, editRelations, list },
    metadatas: formattedMetadatas
  });
};
/* harmony default export */ const utils_formatLayoutToApi = (formatLayoutToApi);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/generatePermissionsObject.js
var generatePermissionsObject_defProp = Object.defineProperty;
var generatePermissionsObject_defProps = Object.defineProperties;
var generatePermissionsObject_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var generatePermissionsObject_getOwnPropSymbols = Object.getOwnPropertySymbols;
var generatePermissionsObject_hasOwnProp = Object.prototype.hasOwnProperty;
var generatePermissionsObject_propIsEnum = Object.prototype.propertyIsEnumerable;
var generatePermissionsObject_defNormalProp = (obj, key, value) => key in obj ? generatePermissionsObject_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var generatePermissionsObject_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (generatePermissionsObject_hasOwnProp.call(b, prop))
      generatePermissionsObject_defNormalProp(a, prop, b[prop]);
  if (generatePermissionsObject_getOwnPropSymbols)
    for (var prop of generatePermissionsObject_getOwnPropSymbols(b)) {
      if (generatePermissionsObject_propIsEnum.call(b, prop))
        generatePermissionsObject_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var generatePermissionsObject_spreadProps = (a, b) => generatePermissionsObject_defProps(a, generatePermissionsObject_getOwnPropDescs(b));
const addSubjectToPermissionsArray = (array, uid) => array.map((data) => generatePermissionsObject_spreadProps(generatePermissionsObject_spreadValues({}, data), { subject: uid }));
const generatePermissionsObject = (uid) => {
  const permissions = {
    create: [{ action: "plugin::content-manager.explorer.create", subject: null }],
    delete: [{ action: "plugin::content-manager.explorer.delete", subject: null }],
    publish: [{ action: "plugin::content-manager.explorer.publish", subject: null }],
    read: [{ action: "plugin::content-manager.explorer.read", subject: null }],
    update: [{ action: "plugin::content-manager.explorer.update", subject: null }]
  };
  return Object.keys(permissions).reduce((acc, current) => {
    acc[current] = addSubjectToPermissionsArray(permissions[current], uid);
    return acc;
  }, {});
};
/* harmony default export */ const utils_generatePermissionsObject = (generatePermissionsObject);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getFieldName.js

const getFieldName = (stringName) => stringName.split(".").filter((string) => (0,lodash.isNaN)(parseInt(string, 10)));
/* harmony default export */ const utils_getFieldName = (getFieldName);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getMaxTempKey.js
const getMaxTempKey = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  return Math.max.apply(
    Math,
    arr.map((o) => o.__temp_key__)
  );
};
/* harmony default export */ const utils_getMaxTempKey = (getMaxTempKey);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getRequestUrl.js
const getRequestUrl = (path) => `/content-manager/${path}`;
/* harmony default export */ const utils_getRequestUrl = (getRequestUrl);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/mergeMetasWithSchema.js
var mergeMetasWithSchema_defProp = Object.defineProperty;
var mergeMetasWithSchema_getOwnPropSymbols = Object.getOwnPropertySymbols;
var mergeMetasWithSchema_hasOwnProp = Object.prototype.hasOwnProperty;
var mergeMetasWithSchema_propIsEnum = Object.prototype.propertyIsEnumerable;
var mergeMetasWithSchema_defNormalProp = (obj, key, value) => key in obj ? mergeMetasWithSchema_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var mergeMetasWithSchema_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (mergeMetasWithSchema_hasOwnProp.call(b, prop))
      mergeMetasWithSchema_defNormalProp(a, prop, b[prop]);
  if (mergeMetasWithSchema_getOwnPropSymbols)
    for (var prop of mergeMetasWithSchema_getOwnPropSymbols(b)) {
      if (mergeMetasWithSchema_propIsEnum.call(b, prop))
        mergeMetasWithSchema_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const mergeMetasWithSchema = (data, schemas, mainSchemaKey) => {
  const findSchema = (refUid) => schemas.find((obj) => obj.uid === refUid);
  const merged = Object.assign({}, data);
  const mainUID = data[mainSchemaKey].uid;
  const mainSchema = findSchema(mainUID);
  (0,lodash.set)(merged, [mainSchemaKey], mergeMetasWithSchema_spreadValues(mergeMetasWithSchema_spreadValues({}, data[mainSchemaKey]), mainSchema));
  Object.keys(data.components).forEach((compoUID) => {
    const compoSchema = findSchema(compoUID);
    (0,lodash.set)(merged, ["components", compoUID], mergeMetasWithSchema_spreadValues(mergeMetasWithSchema_spreadValues({}, data.components[compoUID]), compoSchema));
  });
  return merged;
};
/* harmony default export */ const utils_mergeMetasWithSchema = (mergeMetasWithSchema);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/removeKeyInObject.js
var removeKeyInObject_defProp = Object.defineProperty;
var removeKeyInObject_defProps = Object.defineProperties;
var removeKeyInObject_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var removeKeyInObject_getOwnPropSymbols = Object.getOwnPropertySymbols;
var removeKeyInObject_hasOwnProp = Object.prototype.hasOwnProperty;
var removeKeyInObject_propIsEnum = Object.prototype.propertyIsEnumerable;
var removeKeyInObject_defNormalProp = (obj, key, value) => key in obj ? removeKeyInObject_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var removeKeyInObject_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (removeKeyInObject_hasOwnProp.call(b, prop))
      removeKeyInObject_defNormalProp(a, prop, b[prop]);
  if (removeKeyInObject_getOwnPropSymbols)
    for (var prop of removeKeyInObject_getOwnPropSymbols(b)) {
      if (removeKeyInObject_propIsEnum.call(b, prop))
        removeKeyInObject_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var removeKeyInObject_spreadProps = (a, b) => removeKeyInObject_defProps(a, removeKeyInObject_getOwnPropDescs(b));
const removeKeyInObject = (obj, keyToRemove) => {
  if (!obj) {
    return obj;
  }
  return Object.keys(obj).reduce((acc, current) => {
    const value = acc[current];
    if (value === null) {
      return acc;
    }
    if (Array.isArray(value)) {
      if (Array.isArray(acc)) {
        acc[current] = removeKeyInObject(value, keyToRemove);
        return acc;
      }
      return removeKeyInObject_spreadProps(removeKeyInObject_spreadValues({}, acc), { [current]: value.map((obj2) => removeKeyInObject(obj2, keyToRemove)) });
    }
    if (typeof value === "object") {
      if (Array.isArray(acc)) {
        acc[current] = removeKeyInObject(value, keyToRemove);
        return acc;
      }
      return removeKeyInObject_spreadProps(removeKeyInObject_spreadValues({}, acc), { [current]: removeKeyInObject(value, keyToRemove) });
    }
    if (current === keyToRemove) {
      delete acc[current];
    }
    return acc;
  }, obj);
};
/* harmony default export */ const utils_removeKeyInObject = (removeKeyInObject);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/removePasswordFieldsFromData.js


const removePasswordFieldsFromData = (data, contentTypeSchema, componentSchema) => {
  const recursiveCleanData = (data2, schema) => {
    return Object.keys(data2).reduce((acc, current) => {
      const attrType = (0,build.getType)(schema, current);
      const value = (0,lodash.get)(data2, current);
      const component = (0,build.getOtherInfos)(schema, [current, "component"]);
      const isRepeatable = (0,build.getOtherInfos)(schema, [current, "repeatable"]);
      if (attrType === "dynamiczone") {
        acc[current] = value.map((componentValue) => {
          const subCleanedData = recursiveCleanData(
            componentValue,
            componentSchema[componentValue.__component]
          );
          return subCleanedData;
        });
        return acc;
      }
      if (attrType === "component") {
        if (isRepeatable) {
          acc[current] = value ? value.map((compoData) => {
            const subCleanedData = recursiveCleanData(compoData, componentSchema[component]);
            return subCleanedData;
          }) : value;
        } else {
          acc[current] = value ? recursiveCleanData(value, componentSchema[component]) : value;
        }
        return acc;
      }
      if (attrType !== "password") {
        acc[current] = value;
      }
      return acc;
    }, {});
  };
  return recursiveCleanData(data, contentTypeSchema);
};
/* harmony default export */ const utils_removePasswordFieldsFromData = (removePasswordFieldsFromData);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/index.js














;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/utils/formatLayouts.js
var formatLayouts_defProp = Object.defineProperty;
var formatLayouts_defProps = Object.defineProperties;
var formatLayouts_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var formatLayouts_getOwnPropSymbols = Object.getOwnPropertySymbols;
var formatLayouts_hasOwnProp = Object.prototype.hasOwnProperty;
var formatLayouts_propIsEnum = Object.prototype.propertyIsEnumerable;
var formatLayouts_defNormalProp = (obj, key, value) => key in obj ? formatLayouts_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var formatLayouts_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (formatLayouts_hasOwnProp.call(b, prop))
      formatLayouts_defNormalProp(a, prop, b[prop]);
  if (formatLayouts_getOwnPropSymbols)
    for (var prop of formatLayouts_getOwnPropSymbols(b)) {
      if (formatLayouts_propIsEnum.call(b, prop))
        formatLayouts_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var formatLayouts_spreadProps = (a, b) => formatLayouts_defProps(a, formatLayouts_getOwnPropDescs(b));


const getRelationModel = (targetModel, models) => models.find((model) => model.uid === targetModel);
const formatEditRelationsLayoutWithMetas = (contentTypeConfiguration, models) => {
  const formatted = contentTypeConfiguration.layouts.editRelations.reduce((acc, current) => {
    const fieldSchema = (0,lodash.get)(contentTypeConfiguration, ["attributes", current], {});
    const targetModelUID = (0,lodash.get)(
      contentTypeConfiguration,
      ["attributes", current, "targetModel"],
      null
    );
    const targetModelSchema = getRelationModel(targetModelUID, models);
    const targetModelPluginOptions = targetModelSchema.pluginOptions || {};
    const metadatas = (0,lodash.get)(contentTypeConfiguration, ["metadatas", current, "edit"], {});
    const size = 6;
    const queryInfos = generateRelationQueryInfos(contentTypeConfiguration, current, models);
    acc.push({
      name: current,
      size,
      fieldSchema,
      metadatas,
      queryInfos,
      targetModelPluginOptions
    });
    return acc;
  }, []);
  return formatted;
};
const formatLayouts = (initialData, models) => {
  const data = createMetasSchema(initialData, models);
  const formattedCTEditLayout = formatLayoutWithMetas(data.contentType, null, models);
  const ctUid = data.contentType.uid;
  const formattedEditRelationsLayout = formatEditRelationsLayoutWithMetas(data.contentType, models);
  const formattedListLayout = formatListLayoutWithMetas(data.contentType, data.components);
  (0,lodash.set)(data, ["contentType", "layouts", "edit"], formattedCTEditLayout);
  (0,lodash.set)(data, ["contentType", "layouts", "editRelations"], formattedEditRelationsLayout);
  (0,lodash.set)(data, ["contentType", "layouts", "list"], formattedListLayout);
  Object.keys(data.components).forEach((compoUID) => {
    const formattedCompoEditLayout = formatLayoutWithMetas(
      data.components[compoUID],
      ctUid,
      models
    );
    (0,lodash.set)(data, ["components", compoUID, "layouts", "edit"], formattedCompoEditLayout);
  });
  return data;
};
const createMetasSchema = (initialData, models) => {
  const data = utils_mergeMetasWithSchema((0,lodash.cloneDeep)(initialData), models, "contentType");
  const { components, contentType } = data;
  const formatMetadatas = (targetSchema) => {
    return Object.keys(targetSchema.metadatas).reduce((acc, current) => {
      const schema = (0,lodash.get)(targetSchema, ["attributes", current], {});
      let metadatas = targetSchema.metadatas[current];
      if (schema.type === "relation") {
        const relationModel = getRelationModel(schema.targetModel, models);
        const mainFieldName = metadatas.edit.mainField;
        const mainField = {
          name: mainFieldName,
          schema: (0,lodash.get)(relationModel, ["attributes", mainFieldName])
        };
        metadatas = {
          list: formatLayouts_spreadProps(formatLayouts_spreadValues({}, metadatas.list), {
            mainField
          }),
          edit: formatLayouts_spreadProps(formatLayouts_spreadValues({}, metadatas.edit), {
            mainField
          })
        };
      }
      acc[current] = metadatas;
      return acc;
    }, {});
  };
  (0,lodash.set)(data, ["contentType", "metadatas"], formatMetadatas(contentType));
  Object.keys(components).forEach((compoUID) => {
    const currentCompo = components[compoUID];
    const updatedMetas = formatMetadatas(currentCompo);
    (0,lodash.set)(data, ["components", compoUID, "metadatas"], updatedMetas);
  });
  return data;
};
const formatLayoutWithMetas = (contentTypeConfiguration, ctUid, models) => {
  const formatted = contentTypeConfiguration.layouts.edit.reduce((acc, current) => {
    const row = current.map((attribute) => {
      const fieldSchema = (0,lodash.get)(contentTypeConfiguration, ["attributes", attribute.name], {});
      const data = formatLayouts_spreadProps(formatLayouts_spreadValues({}, attribute), {
        fieldSchema,
        metadatas: (0,lodash.get)(contentTypeConfiguration, ["metadatas", attribute.name, "edit"], {})
      });
      if (fieldSchema.type === "relation") {
        const targetModelUID = fieldSchema.targetModel;
        const targetModelSchema = getRelationModel(targetModelUID, models);
        const targetModelPluginOptions = targetModelSchema.pluginOptions || {};
        const queryInfos = ctUid ? generateRelationQueryInfosForComponents(
          contentTypeConfiguration,
          attribute.name,
          ctUid,
          models
        ) : generateRelationQueryInfos(contentTypeConfiguration, attribute.name, models);
        (0,lodash.set)(data, "targetModelPluginOptions", targetModelPluginOptions);
        (0,lodash.set)(data, "queryInfos", queryInfos);
      }
      return data;
    });
    acc.push(row);
    return acc;
  }, []);
  return formatted;
};
const formatListLayoutWithMetas = (contentTypeConfiguration, components) => {
  const formatted = contentTypeConfiguration.layouts.list.reduce((acc, current) => {
    const fieldSchema = (0,lodash.get)(contentTypeConfiguration, ["attributes", current], {});
    const metadatas = (0,lodash.get)(contentTypeConfiguration, ["metadatas", current, "list"], {});
    const type = fieldSchema.type;
    if (type === "relation") {
      const queryInfos = {
        endPoint: `collection-types/${contentTypeConfiguration.uid}`,
        defaultParams: {}
      };
      acc.push({ key: `__${current}_key__`, name: current, fieldSchema, metadatas, queryInfos });
      return acc;
    }
    if (type === "component") {
      const component = components[fieldSchema.component];
      const mainFieldName = component.settings.mainField;
      const mainFieldAttribute = component.attributes[mainFieldName];
      acc.push({
        key: `__${current}_key__`,
        name: current,
        fieldSchema,
        metadatas: formatLayouts_spreadProps(formatLayouts_spreadValues({}, metadatas), {
          mainField: formatLayouts_spreadProps(formatLayouts_spreadValues({}, mainFieldAttribute), {
            name: mainFieldName
          })
        })
      });
      return acc;
    }
    acc.push({ key: `__${current}_key__`, name: current, fieldSchema, metadatas });
    return acc;
  }, []);
  return formatted;
};
const generateRelationQueryInfos = (contentTypeConfiguration, fieldName, models) => {
  const uid = contentTypeConfiguration.uid;
  const endPoint = utils_getRequestUrl(`relations/${uid}/${fieldName}`);
  const mainField = (0,lodash.get)(
    contentTypeConfiguration,
    ["metadatas", fieldName, "edit", "mainField", "name"],
    ""
  );
  const targetModel = (0,lodash.get)(contentTypeConfiguration, ["attributes", fieldName, "targetModel"], "");
  const shouldDisplayRelationLink = getDisplayedModels(models).indexOf(targetModel) !== -1;
  const queryInfos = {
    endPoint,
    containsKey: `${mainField}`,
    defaultParams: {},
    shouldDisplayRelationLink
  };
  return queryInfos;
};
const generateRelationQueryInfosForComponents = (contentTypeConfiguration, fieldName, ctUid, models) => {
  const endPoint = utils_getRequestUrl(`relations/${ctUid}/${fieldName}`);
  const mainField = (0,lodash.get)(
    contentTypeConfiguration,
    ["metadatas", fieldName, "edit", "mainField", "name"],
    ""
  );
  const targetModel = (0,lodash.get)(contentTypeConfiguration, ["attributes", fieldName, "targetModel"], "");
  const shouldDisplayRelationLink = getDisplayedModels(models).indexOf(targetModel) !== -1;
  const queryInfos = {
    endPoint,
    containsKey: `${mainField}`,
    defaultParams: {
      _component: contentTypeConfiguration.uid
    },
    shouldDisplayRelationLink
  };
  return queryInfos;
};
const getDisplayedModels = (models) => models.filter((model) => model.isDisplayed).map(({ uid }) => uid);
/* harmony default export */ const utils_formatLayouts = (formatLayouts);


// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/immer/dist/immer.cjs.production.min.js
var immer_cjs_production_min = __webpack_require__(73749);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/reducer.js
var reducer_defProp = Object.defineProperty;
var reducer_defProps = Object.defineProperties;
var reducer_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var reducer_getOwnPropSymbols = Object.getOwnPropertySymbols;
var reducer_hasOwnProp = Object.prototype.hasOwnProperty;
var reducer_propIsEnum = Object.prototype.propertyIsEnumerable;
var reducer_defNormalProp = (obj, key, value) => key in obj ? reducer_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var reducer_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (reducer_hasOwnProp.call(b, prop))
      reducer_defNormalProp(a, prop, b[prop]);
  if (reducer_getOwnPropSymbols)
    for (var prop of reducer_getOwnPropSymbols(b)) {
      if (reducer_propIsEnum.call(b, prop))
        reducer_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var reducer_spreadProps = (a, b) => reducer_defProps(a, reducer_getOwnPropDescs(b));

const initialState = {
  error: null,
  isLoading: true,
  layout: {},
  layouts: {}
};
const reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.error = null;
      draftState.layout = {};
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      const contentTypeUid = action.data.contentType.uid;
      draftState.layout = action.data;
      draftState.layouts[contentTypeUid] = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      draftState.error = action.error;
      break;
    }
    case "SET_LAYOUT_FROM_STATE": {
      draftState.error = null;
      draftState.layout = state.layouts[action.uid];
      break;
    }
    case "UPDATE_LAYOUT": {
      const oldLayout = state.layout;
      draftState.layout = reducer_spreadProps(reducer_spreadValues({}, oldLayout), {
        contentType: reducer_spreadValues({ uid: oldLayout.contentType.uid }, action.newLayout.contentType)
      });
      draftState.layouts[oldLayout.contentType.uid] = reducer_spreadProps(reducer_spreadValues({}, oldLayout), {
        contentType: reducer_spreadValues({ uid: oldLayout.contentType.uid }, action.newLayout.contentType)
      });
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useFetchContentTypeLayout_reducer = (reducer);

// EXTERNAL MODULE: ./node_modules/reselect/lib/index.js
var reselect_lib = __webpack_require__(42279);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/App/reducer.js
var App_reducer = __webpack_require__(14506);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/selectors.js


const selectAppDomain = () => (state) => {
  return state["content-manager_app"] || App_reducer/* initialState */.E;
};
const makeSelectApp = () => createSelector(selectAppDomain(), (substate) => {
  return substate;
});
const makeSelectModels = () => createSelector(selectAppDomain(), (state) => state.models);
const makeSelectModelLinks = () => (0,reselect_lib/* createSelector */.P1)(selectAppDomain(), (state) => ({
  collectionTypeLinks: state.collectionTypeLinks,
  singleTypeLinks: state.singleTypeLinks
}));
const makeSelectModelAndComponentSchemas = () => (0,reselect_lib/* createSelector */.P1)(selectAppDomain(), ({ components, models }) => ({
  schemas: [...components, ...models]
}));
/* harmony default export */ const App_selectors = ((/* unused pure expression or super */ null && (makeSelectApp)));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/index.js
/* provided dependency */ var console = __webpack_require__(25108);
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








const useFetchContentTypeLayout = (contentTypeUID) => {
  const [{ error, isLoading, layout, layouts }, dispatch] = (0,react.useReducer)(useFetchContentTypeLayout_reducer, initialState);
  const schemasSelector = (0,react.useMemo)(makeSelectModelAndComponentSchemas, []);
  const { schemas } = (0,lib.useSelector)((state) => schemasSelector(state), lib.shallowEqual);
  const isMounted = (0,react.useRef)(true);
  const getData = (0,react.useCallback)(
    (uid, source) => __async(void 0, null, function* () {
      if (layouts[uid]) {
        dispatch({ type: "SET_LAYOUT_FROM_STATE", uid });
        return;
      }
      dispatch({ type: "GET_DATA" });
      try {
        const endPoint = utils_getRequestUrl(`content-types/${uid}/configuration`);
        const {
          data: { data }
        } = yield utils/* axiosInstance.get */.be.get(endPoint, { cancelToken: source.token });
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data: utils_formatLayouts(data, schemas)
        });
      } catch (error2) {
        if (axios_default().isCancel(error2)) {
          return;
        }
        if (isMounted.current) {
          console.error(error2);
        }
        if (isMounted.current) {
          dispatch({ type: "GET_DATA_ERROR", error: error2 });
        }
      }
    }),
    [layouts, schemas]
  );
  (0,react.useEffect)(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0,react.useEffect)(() => {
    const CancelToken = (axios_default()).CancelToken;
    const source = CancelToken.source();
    getData(contentTypeUID, source);
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [contentTypeUID, getData]);
  const updateLayout = (0,react.useCallback)(
    (data) => {
      dispatch({
        type: "UPDATE_LAYOUT",
        newLayout: utils_formatLayouts(data, schemas)
      });
    },
    [schemas]
  );
  return {
    error,
    isLoading,
    layout,
    updateLayout
  };
};
/* harmony default export */ const hooks_useFetchContentTypeLayout = (useFetchContentTypeLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/selectors.js
const selectMenuLinks = (state) => {
  const cmState = state["content-manager_app"];
  return cmState.collectionTypeLinks;
};
/* harmony default export */ const useFindRedirectionLink_selectors = (selectMenuLinks);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(80129);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(13218);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/utils/getRedirectionLink.js
var getRedirectionLink_defProp = Object.defineProperty;
var getRedirectionLink_defProps = Object.defineProperties;
var getRedirectionLink_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var getRedirectionLink_getOwnPropSymbols = Object.getOwnPropertySymbols;
var getRedirectionLink_hasOwnProp = Object.prototype.hasOwnProperty;
var getRedirectionLink_propIsEnum = Object.prototype.propertyIsEnumerable;
var getRedirectionLink_defNormalProp = (obj, key, value) => key in obj ? getRedirectionLink_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var getRedirectionLink_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (getRedirectionLink_hasOwnProp.call(b, prop))
      getRedirectionLink_defNormalProp(a, prop, b[prop]);
  if (getRedirectionLink_getOwnPropSymbols)
    for (var prop of getRedirectionLink_getOwnPropSymbols(b)) {
      if (getRedirectionLink_propIsEnum.call(b, prop))
        getRedirectionLink_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var getRedirectionLink_spreadProps = (a, b) => getRedirectionLink_defProps(a, getRedirectionLink_getOwnPropDescs(b));



const mergeParams = (initialParams, params) => {
  return Object.keys(initialParams).reduce((acc, current) => {
    const intialValue = initialParams[current];
    const nextValue = get_default()(params, [current], intialValue);
    if (isObject_default()(intialValue)) {
      return getRedirectionLink_spreadProps(getRedirectionLink_spreadValues({}, acc), { [current]: mergeParams(intialValue, nextValue) });
    }
    acc[current] = nextValue;
    return acc;
  }, {});
};
const getRedirectionLink = (links, slug, rawQuery) => {
  const matchingLink = links.find(({ to: to2 }) => to2.includes(slug));
  if (!matchingLink) {
    return "/";
  }
  const { to, search } = matchingLink;
  const searchQueryParams = (0,qs_lib.parse)(search);
  const currentQueryParams = (0,qs_lib.parse)(rawQuery.substring(1));
  const mergedParams = mergeParams(searchQueryParams, currentQueryParams);
  const link = `${to}?${(0,qs_lib.stringify)(mergedParams, { encode: false })}`;
  return link;
};
/* harmony default export */ const utils_getRedirectionLink = (getRedirectionLink);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/index.js




const useFindRedirectionLink = (slug) => {
  const [{ rawQuery }] = (0,build.useQueryParams)();
  const collectionTypesMenuLinks = (0,lib.useSelector)(useFindRedirectionLink_selectors);
  const redirectionLink = utils_getRedirectionLink(collectionTypesMenuLinks, slug, rawQuery);
  return redirectionLink;
};
/* harmony default export */ const hooks_useFindRedirectionLink = (useFindRedirectionLink);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useLayoutDnd.js


const useLayoutDnd = () => (0,react.useContext)(LayoutDnd);
/* harmony default export */ const hooks_useLayoutDnd = (useLayoutDnd);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/usePluginsQueryParams/index.js


const usePluginsQueryParams = () => {
  const { search } = (0,react_router_dom_min.useLocation)();
  const query = search ? (0,qs_lib.parse)(search.substring(1)) : {};
  return query.plugins ? (0,qs_lib.stringify)({ plugins: query.plugins }, { encode: false }) : "";
};
/* harmony default export */ const hooks_usePluginsQueryParams = (usePluginsQueryParams);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/constants.js
var constants = __webpack_require__(80015);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/actions.js

const setPermissions = (permissions, plugins, containerName) => {
  return {
    type: constants/* SET_PERMISSIONS */.m,
    permissions,
    __meta__: {
      plugins,
      containerName
    }
  };
};
const resetPermissions = () => ({ type: constants/* RESET_PERMISSIONS */.Q });

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/selectors.js
const selectPermissions = (state) => state["content-manager_rbacManager"].permissions;
const selectCollectionTypePermissions = (state) => state.rbacProvider.collectionTypesRelatedPermissions;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/index.js




const useSyncRbac = (query, collectionTypeUID, containerName = "listView") => {
  const collectionTypesRelatedPermissions = (0,lib.useSelector)(selectCollectionTypePermissions);
  const permissions = (0,lib.useSelector)(selectPermissions);
  const dispatch = (0,lib.useDispatch)();
  const relatedPermissions = collectionTypesRelatedPermissions[collectionTypeUID];
  (0,react.useEffect)(() => {
    if (relatedPermissions) {
      dispatch(setPermissions(relatedPermissions, query ? query.plugins : null, containerName));
      return () => {
        dispatch(resetPermissions());
      };
    }
    return () => {
    };
  }, [relatedPermissions, dispatch, query, containerName]);
  return permissions;
};
/* harmony default export */ const hooks_useSyncRbac = (useSyncRbac);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useWysiwyg.js


const useWysiwyg = () => useContext(WysiwygContext);
/* harmony default export */ const hooks_useWysiwyg = ((/* unused pure expression or super */ null && (useWysiwyg)));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/index.js








// EXTERNAL MODULE: ./.cache/admin/src/exposedHooks.js
var exposedHooks = __webpack_require__(46325);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/constants.js
var EditViewLayoutManager_constants = __webpack_require__(15113);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/actions.js

const resetProps = () => ({ type: EditViewLayoutManager_constants/* RESET_PROPS */.c });
const setLayout = (layout, query) => ({
  type: EditViewLayoutManager_constants/* SET_LAYOUT */.O,
  layout,
  query
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(39918);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Divider.js
var Divider = __webpack_require__(97833);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Layer.js
var Layer = __webpack_require__(16923);
var Layer_default = /*#__PURE__*/__webpack_require__.n(Layer);
// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 4 modules
var contexts = __webpack_require__(47713);
;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/useAdminProvider/index.js


const useAdminProvider = () => {
  const context = (0,react.useContext)(contexts/* AdminContext */.ux);
  return context;
};
/* harmony default export */ const hooks_useAdminProvider = (useAdminProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/useInjectionZone/index.js

const useInjectionZone = (area) => {
  const { getAdminInjectedComponents } = hooks_useAdminProvider();
  const [moduleName, page, position] = area.split(".");
  return getAdminInjectedComponents(moduleName, page, position);
};
/* harmony default export */ const hooks_useInjectionZone = (useInjectionZone);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/shared/components/InjectionZone/index.js
var InjectionZone_defProp = Object.defineProperty;
var InjectionZone_getOwnPropSymbols = Object.getOwnPropertySymbols;
var InjectionZone_hasOwnProp = Object.prototype.hasOwnProperty;
var InjectionZone_propIsEnum = Object.prototype.propertyIsEnumerable;
var InjectionZone_defNormalProp = (obj, key, value) => key in obj ? InjectionZone_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var InjectionZone_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (InjectionZone_hasOwnProp.call(b, prop))
      InjectionZone_defNormalProp(a, prop, b[prop]);
  if (InjectionZone_getOwnPropSymbols)
    for (var prop of InjectionZone_getOwnPropSymbols(b)) {
      if (InjectionZone_propIsEnum.call(b, prop))
        InjectionZone_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var InjectionZone_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (InjectionZone_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && InjectionZone_getOwnPropSymbols)
    for (var prop of InjectionZone_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && InjectionZone_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



const InjectionZone = (_a) => {
  var _b = _a, { area } = _b, props = InjectionZone_objRest(_b, ["area"]);
  const compos = hooks_useInjectionZone(area);
  return compos.map((compo) => /* @__PURE__ */ react.createElement(compo.Component, InjectionZone_spreadValues({
    key: compo.name
  }, props)));
};
InjectionZone.propTypes = {
  area: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_InjectionZone = (InjectionZone);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/components/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/utils/connect.js
var connect_defProp = Object.defineProperty;
var connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var connect_hasOwnProp = Object.prototype.hasOwnProperty;
var connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var connect_defNormalProp = (obj, key, value) => key in obj ? connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (connect_hasOwnProp.call(b, prop))
      connect_defNormalProp(a, prop, b[prop]);
  if (connect_getOwnPropSymbols)
    for (var prop of connect_getOwnPropSymbols(b)) {
      if (connect_propIsEnum.call(b, prop))
        connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select(props.name);
    return /* @__PURE__ */ react.createElement(WrappedComponent, connect_spreadValues(connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const utils_connect = (connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/utils/select.js



function useSelect(name) {
  const {
    addComponentToDynamicZone,
    createActionAllowedFields,
    isCreatingEntry,
    formErrors,
    modifiedData,
    moveComponentUp,
    moveComponentDown,
    removeComponentFromDynamicZone,
    readActionAllowedFields,
    updateActionAllowedFields
  } = (0,build.useCMEditViewDataManager)();
  const dynamicDisplayedComponents = (0,react.useMemo)(
    () => (0,lodash.get)(modifiedData, [name], []).map((data) => data.__component),
    [modifiedData, name]
  );
  const isFieldAllowed = (0,react.useMemo)(() => {
    const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
    return allowedFields.includes(name);
  }, [name, isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const isFieldReadable = (0,react.useMemo)(() => {
    const allowedFields = isCreatingEntry ? [] : readActionAllowedFields;
    return allowedFields.includes(name);
  }, [name, isCreatingEntry, readActionAllowedFields]);
  return {
    addComponentToDynamicZone,
    formErrors,
    isCreatingEntry,
    isFieldAllowed,
    isFieldReadable,
    moveComponentUp,
    moveComponentDown,
    removeComponentFromDynamicZone,
    dynamicDisplayedComponents
  };
}
/* harmony default export */ const utils_select = (useSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/PlusCircle.js
var PlusCircle = __webpack_require__(24534);
var PlusCircle_default = /*#__PURE__*/__webpack_require__.n(PlusCircle);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/BaseButton.js
var BaseButton = __webpack_require__(33289);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/AddComponentButton/index.js










const StyledAddIcon = (0,styled_components_browser_cjs["default"])((PlusCircle_default()))`
  transform: ${({ $isOpen }) => $isOpen ? "rotate(45deg)" : "rotate(0deg)"};
  > circle {
    fill: ${({ theme, $hasError }) => $hasError ? theme.colors.danger200 : theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme, $hasError }) => $hasError ? theme.colors.danger600 : theme.colors.neutral600};
  }
`;
const StyledButton = (0,styled_components_browser_cjs["default"])(BaseButton.BaseButton)`
  border-radius: 26px;
  border-color: ${({ theme }) => theme.colors.neutral150};
  background: ${({ theme }) => theme.colors.neutral0};
  padding-top: ${({ theme }) => theme.spaces[3]};
  padding-right: ${({ theme }) => theme.spaces[4]};
  padding-bottom: ${({ theme }) => theme.spaces[3]};
  padding-left: ${({ theme }) => theme.spaces[4]};

  box-shadow: ${({ theme }) => theme.shadows.filterShadow};

  svg {
    height: ${({ theme }) => theme.spaces[6]};
    width: ${({ theme }) => theme.spaces[6]};
    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary600} !important;
    ${Typography.Typography} {
      color: ${({ theme }) => theme.colors.primary600} !important;
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
  &:active {
    ${Typography.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }
    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
`;
const BoxFullHeight = (0,styled_components_browser_cjs["default"])(Box.Box)`
  height: 100%;
`;
const AddComponentButton = ({
  hasError,
  hasMaxError,
  hasMinError,
  isDisabled,
  isOpen,
  label,
  missingComponentNumber,
  name,
  onClick
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const addLabel = formatMessage(
    {
      id: utils_getTrad("components.DynamicZone.add-component"),
      defaultMessage: "Add a component to {componentName}"
    },
    { componentName: label || name }
  );
  const closeLabel = formatMessage({ id: "app.utils.close-label", defaultMessage: "Close" });
  let buttonLabel = isOpen ? closeLabel : addLabel;
  if (hasMaxError && !isOpen) {
    buttonLabel = formatMessage({
      id: "components.Input.error.validation.max",
      defaultMessage: "The value is too high."
    });
  }
  if (hasMinError && !isOpen) {
    buttonLabel = formatMessage(
      {
        id: utils_getTrad(`components.DynamicZone.missing-components`),
        defaultMessage: "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"
      },
      { number: missingComponentNumber }
    );
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    style: { cursor: isDisabled ? "not-allowed" : "pointer" }
  }, /* @__PURE__ */ react.createElement(StyledButton, {
    type: "button",
    onClick,
    disabled: isDisabled,
    hasError
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(BoxFullHeight, {
    "aria-hidden": true,
    paddingRight: 2
  }, /* @__PURE__ */ react.createElement(StyledAddIcon, {
    $isOpen: isOpen,
    $hasError: hasError && !isOpen
  })), /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    textColor: hasError && !isOpen ? "danger600" : "neutral500"
  }, buttonLabel))))));
};
AddComponentButton.defaultProps = {
  label: "",
  missingComponentNumber: 0
};
AddComponentButton.propTypes = {
  label: (prop_types_default()).string,
  hasError: (prop_types_default()).bool.isRequired,
  hasMaxError: (prop_types_default()).bool.isRequired,
  hasMinError: (prop_types_default()).bool.isRequired,
  isDisabled: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  missingComponentNumber: (prop_types_default()).number,
  name: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_AddComponentButton = (AddComponentButton);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/DzLabel/index.js








const StyledBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  border-radius: ${(0,build.pxToRem)(26)};
`;
const DzLabel = ({ label, labelAction, name, numberOfComponents, required, intlDescription }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const intlLabel = formatMessage({ id: label || name, defaultMessage: label || name });
  return /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(StyledBox, {
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 4,
    paddingLeft: 4,
    background: "neutral0",
    shadow: "filterShadow",
    color: "neutral500"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    direction: "column",
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    maxWidth: (0,build.pxToRem)(356)
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600",
    fontWeight: "bold",
    ellipsis: true
  }, intlLabel, "\xA0"), /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600",
    fontWeight: "bold"
  }, "(", numberOfComponents, ")"), required && /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "danger600"
  }, "*"), labelAction && /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 1
  }, labelAction)), intlDescription && /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 1,
    maxWidth: (0,build.pxToRem)(356)
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600",
    ellipsis: true
  }, formatMessage(intlDescription)))))));
};
DzLabel.defaultProps = {
  intlDescription: void 0,
  label: "",
  labelAction: void 0,
  required: false
};
DzLabel.propTypes = {
  intlDescription: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }),
  label: (prop_types_default()).string,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  numberOfComponents: (prop_types_default()).number.isRequired,
  required: (prop_types_default()).bool
};
/* harmony default export */ const components_DzLabel = (DzLabel);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(67814);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Accordion.js
var Accordion = __webpack_require__(47949);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/FocusTrap.js
var FocusTrap = __webpack_require__(15577);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowDown.js
var ArrowDown = __webpack_require__(72515);
var ArrowDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDown);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowUp.js
var ArrowUp = __webpack_require__(65040);
var ArrowUp_default = /*#__PURE__*/__webpack_require__.n(ArrowUp);
// EXTERNAL MODULE: ./node_modules/lodash/size.js
var size = __webpack_require__(84238);
var size_default = /*#__PURE__*/__webpack_require__.n(size);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/ComponentInitializer/index.js
var ComponentInitializer_defProp = Object.defineProperty;
var ComponentInitializer_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ComponentInitializer_hasOwnProp = Object.prototype.hasOwnProperty;
var ComponentInitializer_propIsEnum = Object.prototype.propertyIsEnumerable;
var ComponentInitializer_defNormalProp = (obj, key, value) => key in obj ? ComponentInitializer_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ComponentInitializer_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ComponentInitializer_hasOwnProp.call(b, prop))
      ComponentInitializer_defNormalProp(a, prop, b[prop]);
  if (ComponentInitializer_getOwnPropSymbols)
    for (var prop of ComponentInitializer_getOwnPropSymbols(b)) {
      if (ComponentInitializer_propIsEnum.call(b, prop))
        ComponentInitializer_defNormalProp(a, prop, b[prop]);
    }
  return a;
};











const IconWrapper = styled_components_browser_cjs["default"].span`
  > svg {
    width: ${(0,build.pxToRem)(24)};
    height: ${(0,build.pxToRem)(24)};
    > circle {
      fill: ${({ theme }) => theme.colors.primary200};
    }
    > path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentInitializer = ({ error, isReadOnly, onClick }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box.Box, {
    as: "button",
    background: "neutral100",
    borderColor: error ? "danger600" : "neutral200",
    disabled: isReadOnly,
    hasRadius: true,
    onClick,
    paddingTop: 9,
    paddingBottom: 9,
    type: "button"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center",
    style: { cursor: isReadOnly ? "not-allowed" : "inherit" }
  }, /* @__PURE__ */ react.createElement(IconWrapper, null, /* @__PURE__ */ react.createElement((PlusCircle_default()), null))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "primary600",
    variant: "pi",
    fontWeight: "bold"
  }, formatMessage({
    id: utils_getTrad("components.empty-repeatable"),
    defaultMessage: "No entry yet. Click on the button below to add one."
  }))))), (error == null ? void 0 : error.id) && /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "danger600",
    variant: "pi"
  }, formatMessage(
    {
      id: error.id,
      defaultMessage: error.id
    },
    ComponentInitializer_spreadValues({}, error.values)
  )));
};
ComponentInitializer.defaultProps = {
  error: void 0,
  isReadOnly: false
};
ComponentInitializer.propTypes = {
  error: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  isReadOnly: (prop_types_default()).bool,
  onClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ComponentInitializer = (ComponentInitializer);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/take.js
var take = __webpack_require__(69572);
var take_default = /*#__PURE__*/__webpack_require__.n(take);
// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.js
var codemirror = __webpack_require__(4631);
var codemirror_default = /*#__PURE__*/__webpack_require__.n(codemirror);
// EXTERNAL MODULE: ./node_modules/codemirror/addon/display/placeholder.js
var placeholder = __webpack_require__(88386);
// EXTERNAL MODULE: ./node_modules/markdown-it/index.js
var markdown_it = __webpack_require__(9980);
var markdown_it_default = /*#__PURE__*/__webpack_require__.n(markdown_it);
// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var highlight_js_lib = __webpack_require__(77869);
// EXTERNAL MODULE: ./node_modules/markdown-it-abbr/index.js
var markdown_it_abbr = __webpack_require__(79411);
var markdown_it_abbr_default = /*#__PURE__*/__webpack_require__.n(markdown_it_abbr);
// EXTERNAL MODULE: ./node_modules/markdown-it-container/index.js
var markdown_it_container = __webpack_require__(40591);
var markdown_it_container_default = /*#__PURE__*/__webpack_require__.n(markdown_it_container);
// EXTERNAL MODULE: ./node_modules/markdown-it-deflist/index.js
var markdown_it_deflist = __webpack_require__(30645);
var markdown_it_deflist_default = /*#__PURE__*/__webpack_require__.n(markdown_it_deflist);
// EXTERNAL MODULE: ./node_modules/markdown-it-emoji/index.js
var markdown_it_emoji = __webpack_require__(46635);
var markdown_it_emoji_default = /*#__PURE__*/__webpack_require__.n(markdown_it_emoji);
// EXTERNAL MODULE: ./node_modules/markdown-it-footnote/index.js
var markdown_it_footnote = __webpack_require__(52384);
var markdown_it_footnote_default = /*#__PURE__*/__webpack_require__.n(markdown_it_footnote);
// EXTERNAL MODULE: ./node_modules/markdown-it-ins/index.js
var markdown_it_ins = __webpack_require__(44266);
var markdown_it_ins_default = /*#__PURE__*/__webpack_require__.n(markdown_it_ins);
// EXTERNAL MODULE: ./node_modules/markdown-it-mark/index.js
var markdown_it_mark = __webpack_require__(94574);
var markdown_it_mark_default = /*#__PURE__*/__webpack_require__.n(markdown_it_mark);
// EXTERNAL MODULE: ./node_modules/markdown-it-sub/index.js
var markdown_it_sub = __webpack_require__(40700);
var markdown_it_sub_default = /*#__PURE__*/__webpack_require__.n(markdown_it_sub);
// EXTERNAL MODULE: ./node_modules/markdown-it-sup/index.js
var markdown_it_sup = __webpack_require__(97003);
var markdown_it_sup_default = /*#__PURE__*/__webpack_require__.n(markdown_it_sup);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/utils/mdRenderer.js
var mdRenderer_async = (__this, __arguments, generator) => {
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











const loadCss = () => mdRenderer_async(void 0, null, function* () {
  yield __webpack_require__.e(/* import() | highlight.js */ 7347).then(__webpack_require__.bind(__webpack_require__, 24840));
});
loadCss();
const md = new (markdown_it_default())({
  html: true,
  xhtmlOut: false,
  breaks: true,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && lang !== "auto" && (0,highlight_js_lib.getLanguage)(lang)) {
      return '<pre class="hljs language-' + md.utils.escapeHtml(lang.toLowerCase()) + '"><code>' + (0,highlight_js_lib.highlight)(lang, str, true).value + "</code></pre>";
    }
    if (lang === "auto") {
      const result = (0,highlight_js_lib.highlightAuto)(str);
      return '<pre class="hljs language-' + md.utils.escapeHtml(result.language) + '"><code>' + result.value + "</code></pre>";
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>";
  }
}).use((markdown_it_abbr_default())).use((markdown_it_container_default()), "warning").use((markdown_it_container_default()), "tip").use((markdown_it_deflist_default())).use((markdown_it_emoji_default())).use((markdown_it_footnote_default())).use((markdown_it_ins_default())).use((markdown_it_mark_default())).use((markdown_it_sub_default())).use((markdown_it_sup_default()));
md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
  const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
  return '<sup class="footnote-ref"><span>' + caption + "</span></sup>";
};
md.renderer.rules.footnote_anchor = () => {
  return ' <span class="footnote-backref">\u21A9\uFE0E</span>';
};
/* harmony default export */ const mdRenderer = (md);

// EXTERNAL MODULE: ./node_modules/sanitize-html/index.js
var sanitize_html = __webpack_require__(91036);
var sanitize_html_default = /*#__PURE__*/__webpack_require__.n(sanitize_html);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/utils/satinizeHtml.js
var satinizeHtml_defProp = Object.defineProperty;
var satinizeHtml_defProps = Object.defineProperties;
var satinizeHtml_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var satinizeHtml_getOwnPropSymbols = Object.getOwnPropertySymbols;
var satinizeHtml_hasOwnProp = Object.prototype.hasOwnProperty;
var satinizeHtml_propIsEnum = Object.prototype.propertyIsEnumerable;
var satinizeHtml_defNormalProp = (obj, key, value) => key in obj ? satinizeHtml_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var satinizeHtml_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (satinizeHtml_hasOwnProp.call(b, prop))
      satinizeHtml_defNormalProp(a, prop, b[prop]);
  if (satinizeHtml_getOwnPropSymbols)
    for (var prop of satinizeHtml_getOwnPropSymbols(b)) {
      if (satinizeHtml_propIsEnum.call(b, prop))
        satinizeHtml_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var satinizeHtml_spreadProps = (a, b) => satinizeHtml_defProps(a, satinizeHtml_getOwnPropDescs(b));

const options = satinizeHtml_spreadProps(satinizeHtml_spreadValues({}, (sanitize_html_default()).defaults), {
  allowedTags: false,
  allowedAttributes: {
    "*": ["href", "align", "alt", "center", "width", "height", "type", "controls", "target"],
    img: ["src", "alt"],
    source: ["src", "type"]
  }
});
const clean = (dirty) => sanitize_html_default()(dirty, options);
/* harmony default export */ const satinizeHtml = (clean);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/Wrapper.js

const Wrapper = styled_components_browser_cjs["default"].div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  font-size: ${14 / 16}rem;
  background-color: ${({ theme }) => theme.colors.neutral0};
  z-index: 2;
  cursor: not-allowed;
  color: ${({ theme }) => theme.colors.neutral800};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: 10px;
    margin-block-end: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  h1 {
    font-size: ${36 / 16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30 / 16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24 / 16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20 / 16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: 41px;
    margin-bottom: 34px;
    font-size: ${14 / 16}rem;
    font-weight: 400;
    border-left: 5px solid #eee;
    font-style: italic;
    padding: 10px 20px;
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({ theme }) => theme.colors.neutral150};

      th {
        padding: ${({ theme }) => theme.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
    }
    th,
    td {
      padding: ${({ theme }) => theme.spaces[4]};
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: 13px;
    border-radius: 3px;
    background-color: #002b36;
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  .warning {
    background-color: #faa684;
    padding: 30px;
    border-radius: 3px;
  }
  .tip {
    padding: 30px;
    border-radius: 3px;
  }

  .footnote-ref,
  .footnote-backref {
    color: #007bff;
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({ theme }) => theme.spaces[4]};
    margin-block-end: ${({ theme }) => theme.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({ theme }) => theme.spaces[4]};
    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({ theme }) => theme.spaces[4]};
    margin-block-end: ${({ theme }) => theme.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({ theme }) => theme.spaces[4]};
    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;
/* harmony default export */ const PreviewWysiwyg_Wrapper = (Wrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/index.js





const PreviewWysiwyg = ({ data }) => {
  const html = (0,react.useMemo)(() => satinizeHtml(mdRenderer.render(data || "")), [data]);
  return /* @__PURE__ */ react.createElement(PreviewWysiwyg_Wrapper, null, /* @__PURE__ */ react.createElement("div", {
    dangerouslySetInnerHTML: { __html: html }
  }));
};
PreviewWysiwyg.defaultProps = {
  data: ""
};
PreviewWysiwyg.propTypes = {
  data: (prop_types_default()).string
};
/* harmony default export */ const components_PreviewWysiwyg = ((0,react.memo)(PreviewWysiwyg));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/EditorStylesContainer.js

const EditorStylesContainer = styled_components_browser_cjs["default"].div`
  cursor: ${({ disabled }) => disabled ? "not-allowed !important" : "auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({ theme }) => theme.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14 / 16}rem;
    height: ${({ isExpandMode }) => isExpandMode ? "100%" : "290px"};
    color: ${({ theme }) => theme.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({ theme }) => `${theme.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => `${theme.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({ theme }) => `${theme.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({ theme }) => theme.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({ theme }) => theme.colors.neutral800} !important;
  }
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygStyles.js



const CustomIconButton = (0,styled_components_browser_cjs["default"])(IconButton.IconButton)`
  padding: ${({ theme }) => theme.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
const CustomLinkIconButton = (0,styled_components_browser_cjs["default"])(CustomIconButton)`
  svg {
    width: ${8 / 16}rem;
    height: ${8 / 16}rem;
  }
`;
const MainButtons = (0,styled_components_browser_cjs["default"])(IconButton.IconButtonGroup)`
  margin-left: ${({ theme }) => theme.spaces[4]};
`;
const MoreButton = (0,styled_components_browser_cjs["default"])(IconButton.IconButton)`
  margin: ${({ theme }) => `0 ${theme.spaces[2]}`};
  padding: ${({ theme }) => theme.spaces[2]};

  svg {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
const IconButtonGroupMargin = (0,styled_components_browser_cjs["default"])(IconButton.IconButtonGroup)`
  margin-right: ${({ theme }) => `${theme.spaces[2]}`};
`;
const EditorAndPreviewWrapper = styled_components_browser_cjs["default"].div`
  position: relative;
  height: calc(100% - 48px);
`;
const ExpandButton = (0,styled_components_browser_cjs["default"])(BaseButton.BaseButton)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => `${theme.spaces[2]}`};
    path {
      fill: ${({ theme }) => theme.colors.neutral700};
      width: ${12 / 16}rem;
      height: ${12 / 16}rem;
    }
  }
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/utils/continueList.js

var listRE = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/, emptyListRE = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/, unorderedListRE = /[*+-]\s/;
function newlineAndIndentContinueMarkdownList(cm) {
  if (cm.getOption("disableInput"))
    return (codemirror_default()).Pass;
  var ranges = cm.listSelections(), replacements = [];
  for (var i = 0; i < ranges.length; i++) {
    var pos = ranges[i].head;
    var eolState = cm.getStateAfter(pos.line);
    var inList = eolState.list !== false;
    var inQuote = eolState.quote !== 0;
    var line = cm.getLine(pos.line), match = listRE.exec(line);
    var cursorBeforeBullet = /^\s*$/.test(line.slice(0, pos.ch));
    if (!ranges[i].empty() || !inList && !inQuote || !match || cursorBeforeBullet) {
      cm.execCommand("newlineAndIndent");
      return;
    }
    if (emptyListRE.test(line)) {
      var endOfQuote = inQuote && />\s*$/.test(line);
      var endOfList = !/>\s*$/.test(line);
      if (endOfQuote || endOfList)
        cm.replaceRange(
          "",
          {
            line: pos.line,
            ch: 0
          },
          {
            line: pos.line,
            ch: pos.ch + 1
          }
        );
      replacements[i] = "\n";
    } else {
      var indent = match[1], after = match[5];
      var numbered = !(unorderedListRE.test(match[2]) || match[2].indexOf(">") >= 0);
      var bullet = numbered ? parseInt(match[3], 10) + 1 + match[4] : match[2].replace("x", " ");
      replacements[i] = "\n" + indent + bullet + after;
      if (numbered)
        incrementRemainingMarkdownListNumbers(cm, pos);
    }
  }
  cm.replaceSelections(replacements);
}
function incrementRemainingMarkdownListNumbers(cm, pos) {
  var startLine = pos.line, lookAhead = 0, skipCount = 0;
  var startItem = listRE.exec(cm.getLine(startLine)), startIndent = startItem[1];
  do {
    lookAhead += 1;
    var nextLineNumber = startLine + lookAhead;
    var nextLine = cm.getLine(nextLineNumber);
    var nextItem = listRE.exec(nextLine);
    if (nextItem) {
      var nextIndent = nextItem[1];
      var newNumber = parseInt(startItem[3], 10) + lookAhead - skipCount;
      var nextNumber = parseInt(nextItem[3], 10), itemNumber = nextNumber;
      if (startIndent === nextIndent && !isNaN(nextNumber)) {
        if (newNumber === nextNumber)
          itemNumber = nextNumber + 1;
        if (newNumber > nextNumber)
          itemNumber = newNumber + 1;
        cm.replaceRange(
          nextLine.replace(listRE, nextIndent + itemNumber + nextItem[4] + nextItem[5]),
          {
            line: nextLineNumber,
            ch: 0
          },
          {
            line: nextLineNumber,
            ch: nextLine.length
          }
        );
      } else {
        if (startIndent.length > nextIndent.length)
          return;
        if (startIndent.length < nextIndent.length && lookAhead === 1)
          return;
        skipCount += 1;
      }
    }
  } while (nextItem);
}
/* harmony default export */ const continueList = (newlineAndIndentContinueMarkdownList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/Editor.js








const Editor = ({
  disabled,
  editorRef,
  error,
  isPreviewMode,
  isExpandMode,
  name,
  onChange,
  placeholder,
  textareaRef,
  value
}) => {
  const onChangeRef = (0,react.useRef)(onChange);
  (0,react.useEffect)(() => {
    editorRef.current = codemirror_default().fromTextArea(textareaRef.current, {
      lineWrapping: true,
      extraKeys: {
        Enter: "newlineAndIndentContinueMarkdownList",
        Tab: false,
        "Shift-Tab": false
      },
      readOnly: false,
      smartIndent: false,
      placeholder,
      spellcheck: true,
      inputStyle: "contenteditable"
    });
    (codemirror_default()).commands.newlineAndIndentContinueMarkdownList = continueList;
    editorRef.current.on("change", (doc) => {
      onChangeRef.current({ target: { name, value: doc.getValue(), type: "wysiwyg" } });
    });
  }, [editorRef, textareaRef, name, placeholder]);
  (0,react.useEffect)(() => {
    if (value && !editorRef.current.state.focused) {
      editorRef.current.setValue(value);
    }
  }, [editorRef, value]);
  (0,react.useEffect)(() => {
    if (isPreviewMode || disabled) {
      editorRef.current.setOption("readOnly", "nocursor");
    } else {
      editorRef.current.setOption("readOnly", false);
    }
  }, [disabled, isPreviewMode, editorRef]);
  (0,react.useEffect)(() => {
    if (error) {
      editorRef.current.setOption("screenReaderLabel", error);
    } else {
      editorRef.current.setOption("screenReaderLabel", "Editor");
    }
  }, [editorRef, error]);
  return /* @__PURE__ */ react.createElement(EditorAndPreviewWrapper, null, /* @__PURE__ */ react.createElement(EditorStylesContainer, {
    isExpandMode,
    disabled: disabled || isPreviewMode
  }, /* @__PURE__ */ react.createElement("textarea", {
    ref: textareaRef
  })), isPreviewMode && /* @__PURE__ */ react.createElement(components_PreviewWysiwyg, {
    data: value
  }));
};
Editor.defaultProps = {
  disabled: false,
  error: void 0,
  isPreviewMode: false,
  isExpandMode: false,
  placeholder: "",
  value: ""
};
Editor.propTypes = {
  disabled: (prop_types_default()).bool,
  editorRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  error: (prop_types_default()).string,
  isPreviewMode: (prop_types_default()).bool,
  isExpandMode: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: (prop_types_default()).string,
  textareaRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const Wysiwyg_Editor = (Editor);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(2632);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Popover.js
var Popover = __webpack_require__(39589);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Bold.js
var Bold = __webpack_require__(66788);
var Bold_default = /*#__PURE__*/__webpack_require__.n(Bold);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Italic.js
var Italic = __webpack_require__(37500);
var Italic_default = /*#__PURE__*/__webpack_require__.n(Italic);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Underline.js
var Underline = __webpack_require__(75040);
var Underline_default = /*#__PURE__*/__webpack_require__.n(Underline);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/StrikeThrough.js
var StrikeThrough = __webpack_require__(96134);
var StrikeThrough_default = /*#__PURE__*/__webpack_require__.n(StrikeThrough);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/BulletList.js
var BulletList = __webpack_require__(63645);
var BulletList_default = /*#__PURE__*/__webpack_require__.n(BulletList);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/NumberList.js
var NumberList = __webpack_require__(4802);
var NumberList_default = /*#__PURE__*/__webpack_require__.n(NumberList);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Code.js
var Code = __webpack_require__(83194);
var Code_default = /*#__PURE__*/__webpack_require__.n(Code);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Picture.js
var Picture = __webpack_require__(97018);
var Picture_default = /*#__PURE__*/__webpack_require__.n(Picture);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Link.js
var Link = __webpack_require__(70399);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Quote.js
var Quote = __webpack_require__(76016);
var Quote_default = /*#__PURE__*/__webpack_require__.n(Quote);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/More.js
var More = __webpack_require__(73551);
var More_default = /*#__PURE__*/__webpack_require__.n(More);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygNav.js






















const WysiwygNav = ({
  disabled,
  editorRef,
  isExpandMode,
  isPreviewMode,
  onActionClick,
  onToggleMediaLib,
  onTogglePreviewMode
}) => {
  const [visiblePopover, setVisiblePopover] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const selectPlaceholder = formatMessage({
    id: "components.Wysiwyg.selectOptions.title",
    defaultMessage: "Add a title"
  });
  const buttonMoreRef = (0,react.useRef)();
  const handleTogglePopover = () => {
    setVisiblePopover((prev) => !prev);
  };
  if (disabled || isPreviewMode) {
    return /* @__PURE__ */ react.createElement(Box.Box, {
      padding: 2,
      background: "neutral100"
    }, /* @__PURE__ */ react.createElement(Flex.Flex, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Select.Select, {
      disabled: true,
      id: "selectTitle",
      placeholder: selectPlaceholder,
      size: "S",
      "aria-label": selectPlaceholder
    }, /* @__PURE__ */ react.createElement(Select.Option, {
      value: "h1"
    }, "h1"), /* @__PURE__ */ react.createElement(Select.Option, {
      value: "h2"
    }, "h2"), /* @__PURE__ */ react.createElement(Select.Option, {
      value: "h3"
    }, "h3"), /* @__PURE__ */ react.createElement(Select.Option, {
      value: "h4"
    }, "h4"), /* @__PURE__ */ react.createElement(Select.Option, {
      value: "h5"
    }, "h5"), /* @__PURE__ */ react.createElement(Select.Option, {
      value: "h6"
    }, "h6")), /* @__PURE__ */ react.createElement(MainButtons, null, /* @__PURE__ */ react.createElement(CustomIconButton, {
      disabled: true,
      id: "Bold",
      label: "Bold",
      name: "Bold",
      icon: /* @__PURE__ */ react.createElement((Bold_default()), null)
    }), /* @__PURE__ */ react.createElement(CustomIconButton, {
      disabled: true,
      id: "Italic",
      label: "Italic",
      name: "Italic",
      icon: /* @__PURE__ */ react.createElement((Italic_default()), null)
    }), /* @__PURE__ */ react.createElement(CustomIconButton, {
      disabled: true,
      id: "Underline",
      label: "Underline",
      name: "Underline",
      icon: /* @__PURE__ */ react.createElement((Underline_default()), null)
    })), /* @__PURE__ */ react.createElement(MoreButton, {
      disabled: true,
      id: "more",
      label: "More",
      icon: /* @__PURE__ */ react.createElement((More_default()), null)
    })), !isExpandMode && /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: onTogglePreviewMode,
      variant: "tertiary",
      id: "preview"
    }, formatMessage({
      id: "components.Wysiwyg.ToggleMode.markdown-mode",
      defaultMessage: "Markdown mode"
    }))));
  }
  return /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 2,
    background: "neutral100"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Select.Select, {
    id: "selectTitle",
    placeholder: selectPlaceholder,
    size: "S",
    onChange: (value) => onActionClick(value, editorRef)
  }, /* @__PURE__ */ react.createElement(Select.Option, {
    value: "h1"
  }, "h1"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "h2"
  }, "h2"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "h3"
  }, "h3"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "h4"
  }, "h4"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "h5"
  }, "h5"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "h6"
  }, "h6")), /* @__PURE__ */ react.createElement(MainButtons, null, /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => onActionClick("Bold", editorRef),
    id: "Bold",
    label: "Bold",
    name: "Bold",
    icon: /* @__PURE__ */ react.createElement((Bold_default()), null)
  }), /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => onActionClick("Italic", editorRef),
    id: "Italic",
    label: "Italic",
    name: "Italic",
    icon: /* @__PURE__ */ react.createElement((Italic_default()), null)
  }), /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => onActionClick("Underline", editorRef),
    id: "Underline",
    label: "Underline",
    name: "Underline",
    icon: /* @__PURE__ */ react.createElement((Underline_default()), null)
  })), /* @__PURE__ */ react.createElement(MoreButton, {
    ref: buttonMoreRef,
    onClick: handleTogglePopover,
    id: "more",
    label: "More",
    icon: /* @__PURE__ */ react.createElement((More_default()), null)
  }), visiblePopover && /* @__PURE__ */ react.createElement(Popover.Popover, {
    centered: true,
    source: buttonMoreRef,
    spacing: 4,
    id: "popover"
  }, /* @__PURE__ */ react.createElement(FocusTrap.FocusTrap, {
    onEscape: handleTogglePopover,
    restoreFocus: false
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(IconButtonGroupMargin, null, /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => onActionClick("Strikethrough", editorRef, handleTogglePopover),
    id: "Strikethrough",
    label: "Strikethrough",
    name: "Strikethrough",
    icon: /* @__PURE__ */ react.createElement((StrikeThrough_default()), null)
  }), /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => onActionClick("BulletList", editorRef, handleTogglePopover),
    id: "BulletList",
    label: "BulletList",
    name: "BulletList",
    icon: /* @__PURE__ */ react.createElement((BulletList_default()), null)
  }), /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => onActionClick("NumberList", editorRef, handleTogglePopover),
    id: "NumberList",
    label: "NumberList",
    name: "NumberList",
    icon: /* @__PURE__ */ react.createElement((NumberList_default()), null)
  })), /* @__PURE__ */ react.createElement(IconButton.IconButtonGroup, null, /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => onActionClick("Code", editorRef, handleTogglePopover),
    id: "Code",
    label: "Code",
    name: "Code",
    icon: /* @__PURE__ */ react.createElement((Code_default()), null)
  }), /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => {
      handleTogglePopover();
      onToggleMediaLib();
    },
    id: "Image",
    label: "Image",
    name: "Image",
    icon: /* @__PURE__ */ react.createElement((Picture_default()), null)
  }), /* @__PURE__ */ react.createElement(CustomLinkIconButton, {
    onClick: () => onActionClick("Link", editorRef, handleTogglePopover),
    id: "Link",
    label: "Link",
    name: "Link",
    icon: /* @__PURE__ */ react.createElement((Link_default()), null)
  }), /* @__PURE__ */ react.createElement(CustomIconButton, {
    onClick: () => onActionClick("Quote", editorRef, handleTogglePopover),
    id: "Quote",
    label: "Quote",
    name: "Quote",
    icon: /* @__PURE__ */ react.createElement((Quote_default()), null)
  })))))), onTogglePreviewMode && /* @__PURE__ */ react.createElement(Button.Button, {
    onClick: onTogglePreviewMode,
    variant: "tertiary",
    id: "preview"
  }, formatMessage({
    id: "components.Wysiwyg.ToggleMode.preview-mode",
    defaultMessage: "Preview mode"
  }))));
};
WysiwygNav.defaultProps = {
  isPreviewMode: false,
  onActionClick: () => {
  },
  onToggleMediaLib: () => {
  },
  onTogglePreviewMode: void 0
};
WysiwygNav.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  editorRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  isExpandMode: (prop_types_default()).bool.isRequired,
  isPreviewMode: (prop_types_default()).bool,
  onActionClick: (prop_types_default()).func,
  onToggleMediaLib: (prop_types_default()).func,
  onTogglePreviewMode: (prop_types_default()).func
};
/* harmony default export */ const Wysiwyg_WysiwygNav = (WysiwygNav);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Expand.js
var Expand = __webpack_require__(83017);
var Expand_default = /*#__PURE__*/__webpack_require__.n(Expand);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygFooter.js








const WysiwygFooter = ({ onToggleExpand }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 2,
    background: "neutral100",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }, /* @__PURE__ */ react.createElement(ExpandButton, {
    id: "expand",
    onClick: onToggleExpand
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: "components.WysiwygBottomControls.fullscreen",
    defaultMessage: "Expand"
  })), /* @__PURE__ */ react.createElement((Expand_default()), null))));
};
WysiwygFooter.defaultProps = {
  onToggleExpand: () => {
  }
};
WysiwygFooter.propTypes = {
  onToggleExpand: (prop_types_default()).func
};
/* harmony default export */ const Wysiwyg_WysiwygFooter = (WysiwygFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Hint/index.js
var Hint_defProp = Object.defineProperty;
var Hint_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Hint_hasOwnProp = Object.prototype.hasOwnProperty;
var Hint_propIsEnum = Object.prototype.propertyIsEnumerable;
var Hint_defNormalProp = (obj, key, value) => key in obj ? Hint_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Hint_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Hint_hasOwnProp.call(b, prop))
      Hint_defNormalProp(a, prop, b[prop]);
  if (Hint_getOwnPropSymbols)
    for (var prop of Hint_getOwnPropSymbols(b)) {
      if (Hint_propIsEnum.call(b, prop))
        Hint_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const Hint = ({ id, error, name, description }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    Hint_spreadValues({}, description.values)
  ) : "";
  if (!hint || error) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Typography.Typography, {
    as: "p",
    variant: "pi",
    id: `${id || name}-hint`,
    textColor: "neutral600"
  }, hint);
};
Hint.defaultProps = {
  id: void 0,
  description: void 0,
  error: void 0
};
Hint.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  error: (prop_types_default()).string,
  id: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_Hint = (Hint);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/utils/utils.js
const replaceText = (markdownName, textToChange) => {
  let editedText;
  switch (markdownName) {
    case "Strikethrough":
      editedText = `~~${textToChange}~~`;
      break;
    case "Bold":
      editedText = `**${textToChange}**`;
      break;
    case "Italic":
      editedText = `_${textToChange}_`;
      break;
    case "Underline":
      editedText = `<u>${textToChange}</u>`;
      break;
    case "Code":
      editedText = `\`\`\`
${textToChange}
\`\`\``;
      break;
    case "Link":
      editedText = `[${textToChange}](link)`;
      break;
    case "Quote":
      editedText = `>${textToChange}`;
      break;
    default:
      editedText = textToChange;
  }
  return editedText;
};
const insertText = (markdownName) => {
  let editedText;
  let selection = { start: markdownName.length, end: 0 };
  switch (markdownName) {
    case "Strikethrough":
      editedText = `~~${markdownName}~~`;
      selection.end = 2;
      break;
    case "Bold":
      editedText = `**${markdownName}**`;
      selection.end = 2;
      break;
    case "Italic":
      editedText = `_${markdownName}_`;
      selection.end = 1;
      break;
    case "alt":
      editedText = `[${markdownName}]()`;
      selection.end = 3;
      break;
    case "Underline":
      editedText = `<u>${markdownName}</u>`;
      selection.end = 4;
      break;
    case "Code":
      editedText = `\`\`\`
${markdownName}
\`\`\``;
      selection.end = 3;
      break;
    case "Link":
      editedText = `[${markdownName}](link)`;
      selection.end = 7;
      break;
    case "Quote":
      editedText = `>${markdownName}`;
      selection.end = 0;
      break;
    default:
      editedText = "";
  }
  return { editedText, selection };
};
const insertListOrTitle = (markdown) => {
  let textToInsert;
  switch (markdown) {
    case "BulletList":
      textToInsert = "- ";
      break;
    case "NumberList":
      textToInsert = "1. ";
      break;
    case "h1":
      textToInsert = "# ";
      break;
    case "h2":
      textToInsert = "## ";
      break;
    case "h3":
      textToInsert = "### ";
      break;
    case "h4":
      textToInsert = "#### ";
      break;
    case "h5":
      textToInsert = "##### ";
      break;
    case "h6":
      textToInsert = "###### ";
      break;
    default:
      return "";
  }
  return textToInsert;
};
const markdownHandler = (editor, markdownType) => {
  const textToEdit = editor.current.getSelection();
  let textToInsert;
  if (textToEdit) {
    const editedText = replaceText(markdownType, textToEdit);
    editor.current.replaceSelection(editedText);
    editor.current.focus();
  } else {
    textToInsert = insertText(markdownType);
    editor.current.replaceSelection(textToInsert.editedText);
    editor.current.focus();
    const { line, ch } = editor.current.getCursor();
    const endSelection = ch - textToInsert.selection.end;
    const startSelection = ch - textToInsert.selection.end - textToInsert.selection.start;
    editor.current.setSelection({ line, ch: startSelection }, { line, ch: endSelection });
  }
};
const listHandler = (editor, listType) => {
  const doc = editor.current.getDoc();
  const insertion = listType === "BulletList" ? "- " : "1. ";
  if (doc.somethingSelected()) {
    const selections = doc.listSelections();
    let remove = null;
    editor.current.operation(function() {
      selections.forEach(function(selection) {
        const pos = [selection.head.line, selection.anchor.line].sort();
        if (remove == null) {
          remove = doc.getLine(pos[0]).startsWith(insertion);
        }
        for (let i = pos[0]; i <= pos[1]; i++) {
          if (remove) {
            if (doc.getLine(i).startsWith(insertion)) {
              doc.replaceRange("", { line: i, ch: 0 }, { line: i, ch: insertion.length });
            }
          } else {
            const lineInsertion = listType === "BulletList" ? "- " : `${i + 1}. `;
            doc.replaceRange(lineInsertion, { line: i, ch: 0 });
          }
        }
      });
    });
  } else {
    let { line: currentLine } = doc.getCursor();
    const listToInsert = insertListOrTitle(listType);
    const lineContent = editor.current.getLine(currentLine);
    const textToInsert = listToInsert + lineContent;
    editor.current.setSelection(
      { line: currentLine, ch: 0 },
      { line: currentLine, ch: lineContent.length }
    );
    editor.current.replaceSelection(textToInsert);
  }
  editor.current.focus();
};
const titleHandler = (editor, titleType) => {
  let { line: currentLine } = editor.current.getCursor();
  const titleToInsert = insertListOrTitle(titleType);
  const lineContent = editor.current.getLine(currentLine);
  const lineWithNoTitle = lineContent.replace(/#{1,6}\s/g, "").trim();
  const textToInsert = titleToInsert + lineWithNoTitle;
  editor.current.setSelection(
    { line: currentLine, ch: 0 },
    { line: currentLine, ch: lineContent.length }
  );
  editor.current.replaceSelection(textToInsert);
  setTimeout(() => {
    const newLastLineLength = editor.current.getLine(currentLine).length;
    editor.current.focus();
    editor.current.setCursor({ line: currentLine, ch: newLastLineLength });
  }, 0);
};
const insertFile = (editor, files) => {
  let { line, ch } = editor.current.getCursor();
  files.forEach((file, i) => {
    let contentLength = editor.current.getLine(line).length;
    editor.current.setCursor({ line, ch: contentLength });
    if (i > 0 || i === 0 && ch !== 0) {
      contentLength = editor.current.getLine(line).length;
      editor.current.setCursor({ line, ch: contentLength });
      line++;
      editor.current.replaceSelection("\n");
    }
    if (file.mime.includes("image")) {
      editor.current.replaceSelection(`![${file.alt}](${file.url})`);
    } else {
      editor.current.replaceSelection(`[${file.alt}](${file.url})`);
    }
  });
  setTimeout(() => editor.current.focus(), 0);
};
const insertWithTextToEdit = (editor, markdownType, line, contentLength, textToEdit) => {
  const textToInsert = replaceText(markdownType, textToEdit);
  const contentToMove = editor.current.getRange(
    { line: line + 1, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.replaceRange("", { line: line + 1, ch: 0 }, { line: Infinity, ch: Infinity });
  editor.current.replaceSelection("");
  editor.current.setCursor({ line, ch: contentLength });
  editor.current.replaceSelection("\n");
  editor.current.replaceSelection(textToInsert);
  if (markdownType === "Code") {
    let { line: newLine } = editor.current.getCursor();
    editor.current.setCursor({ line: newLine - 1, ch: textToEdit.length });
  }
  editor.current.replaceRange(
    contentToMove,
    { line: line + 4, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.focus();
};
const insertWithoutTextToEdit = (editor, markdownType, line, contentLength) => {
  const textToInsert = insertText(markdownType);
  const contentToMove = editor.current.getRange(
    { line: line + 1, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.replaceRange("", { line: line + 1, ch: 0 }, { line: Infinity, ch: Infinity });
  editor.current.setCursor({ line, ch: contentLength });
  editor.current.replaceSelection("\n");
  editor.current.replaceSelection(textToInsert.editedText);
  if (markdownType === "Code") {
    line += 2;
    editor.current.setSelection({ line, ch: 0 }, { line, ch: 4 });
  } else {
    line += 1;
    let { ch } = editor.current.getCursor();
    let endSelection = ch - textToInsert.selection.end;
    let startSelection = ch - textToInsert.selection.end - textToInsert.selection.start;
    editor.current.setSelection({ line, ch: startSelection }, { line, ch: endSelection });
  }
  editor.current.replaceRange(
    contentToMove,
    { line: line + 2, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.focus();
};
const quoteAndCodeHandler = (editor, markdownType) => {
  const textToEdit = editor.current.getSelection();
  let { line } = editor.current.getCursor();
  let contentLength = editor.current.getLine(line).length;
  if (textToEdit) {
    insertWithTextToEdit(editor, markdownType, line, contentLength, textToEdit);
  } else {
    insertWithoutTextToEdit(editor, markdownType, line, contentLength);
  }
};

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Portal.js
var Portal = __webpack_require__(54451);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Collapse.js
var Collapse = __webpack_require__(84623);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/EditorLayout.js













const setOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;
const ExpandWrapper = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  background: ${({ theme }) => setOpacity(theme.colors.neutral800, 0.2)};
`;
const BoxWithBorder = (0,styled_components_browser_cjs["default"])(Box.Box)`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const EditorLayout_ExpandButton = (0,styled_components_browser_cjs["default"])(BaseButton.BaseButton)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => `${theme.spaces[2]}`};
    path {
      fill: ${({ theme }) => theme.colors.neutral700};
      width: ${12 / 16}rem;
      height: ${12 / 16}rem;
    }
  }
`;
const EditorLayout = ({ children, isExpandMode, error, previewContent, onCollapse }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,react.useEffect)(() => {
    const body = document.body;
    if (isExpandMode) {
      body.classList.add("lock-body-scroll");
    }
    return () => {
      if (isExpandMode) {
        body.classList.remove("lock-body-scroll");
      }
    };
  }, [isExpandMode]);
  if (isExpandMode) {
    return /* @__PURE__ */ react.createElement(Portal.Portal, {
      role: "dialog",
      "aria-modal": false
    }, /* @__PURE__ */ react.createElement(FocusTrap.FocusTrap, {
      onEscape: onCollapse
    }, /* @__PURE__ */ react.createElement(ExpandWrapper, {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 4,
      justifyContent: "center",
      onClick: onCollapse
    }, /* @__PURE__ */ react.createElement(Box.Box, {
      id: "wysiwyg-expand",
      background: "neutral0",
      hasRadius: true,
      shadow: "popupShadow",
      overflow: "hidden",
      width: "70%",
      height: "70%",
      onClick: (e) => e.stopPropagation()
    }, /* @__PURE__ */ react.createElement(Flex.Flex, {
      height: "100%",
      alignItems: "flex-start"
    }, /* @__PURE__ */ react.createElement(BoxWithBorder, {
      flex: "1",
      height: "100%"
    }, children), /* @__PURE__ */ react.createElement(Box.Box, {
      flex: "1",
      height: "100%"
    }, /* @__PURE__ */ react.createElement(Flex.Flex, {
      height: (0,build.pxToRem)(48),
      background: "neutral100",
      justifyContent: "flex-end"
    }, /* @__PURE__ */ react.createElement(EditorLayout_ExpandButton, {
      id: "collapse",
      onClick: onCollapse
    }, /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
      id: "components.Wysiwyg.collapse",
      defaultMessage: "Collapse"
    })), /* @__PURE__ */ react.createElement((Collapse_default()), null))), /* @__PURE__ */ react.createElement(Box.Box, {
      position: "relative",
      height: "100%"
    }, /* @__PURE__ */ react.createElement(components_PreviewWysiwyg, {
      data: previewContent
    }))))))));
  }
  return /* @__PURE__ */ react.createElement(Box.Box, {
    borderColor: error ? "danger600" : "neutral200",
    borderStyle: "solid",
    borderWidth: "1px",
    hasRadius: true
  }, children);
};
EditorLayout.defaultProps = {
  error: void 0,
  previewContent: ""
};
EditorLayout.propTypes = {
  children: (prop_types_default()).node.isRequired,
  error: (prop_types_default()).string,
  isExpandMode: (prop_types_default()).bool.isRequired,
  previewContent: (prop_types_default()).string,
  onCollapse: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/index.js
var Wysiwyg_defProp = Object.defineProperty;
var Wysiwyg_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Wysiwyg_hasOwnProp = Object.prototype.hasOwnProperty;
var Wysiwyg_propIsEnum = Object.prototype.propertyIsEnumerable;
var Wysiwyg_defNormalProp = (obj, key, value) => key in obj ? Wysiwyg_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Wysiwyg_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Wysiwyg_hasOwnProp.call(b, prop))
      Wysiwyg_defNormalProp(a, prop, b[prop]);
  if (Wysiwyg_getOwnPropSymbols)
    for (var prop of Wysiwyg_getOwnPropSymbols(b)) {
      if (Wysiwyg_propIsEnum.call(b, prop))
        Wysiwyg_defNormalProp(a, prop, b[prop]);
    }
  return a;
};














const LabelAction = (0,styled_components_browser_cjs["default"])(Box.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const TypographyAsterisk = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  line-height: 0;
`;
const Wysiwyg_Wysiwyg = ({
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  placeholder,
  value,
  required
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const textareaRef = (0,react.useRef)(null);
  const editorRef = (0,react.useRef)(null);
  const [isPreviewMode, setIsPreviewMode] = (0,react.useState)(false);
  const [mediaLibVisible, setMediaLibVisible] = (0,react.useState)(false);
  const [isExpandMode, setIsExpandMode] = (0,react.useState)(false);
  const { components } = (0,build.useLibrary)();
  const MediaLibraryDialog = components["media-library"];
  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);
  const handleTogglePreviewMode = () => setIsPreviewMode((prev) => !prev);
  const handleToggleExpand = () => {
    setIsPreviewMode(false);
    setIsExpandMode((prev) => !prev);
  };
  const handleActionClick = (value2, currentEditorRef, togglePopover) => {
    switch (value2) {
      case "Link":
      case "Strikethrough": {
        markdownHandler(currentEditorRef, value2);
        togglePopover();
        break;
      }
      case "Code":
      case "Quote": {
        quoteAndCodeHandler(currentEditorRef, value2);
        togglePopover();
        break;
      }
      case "Bold":
      case "Italic":
      case "Underline": {
        markdownHandler(currentEditorRef, value2);
        break;
      }
      case "BulletList":
      case "NumberList": {
        listHandler(currentEditorRef, value2);
        togglePopover();
        break;
      }
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6": {
        titleHandler(currentEditorRef, value2);
        break;
      }
      default: {
      }
    }
  };
  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: (0,build.prefixFileUrlWithBackendUrl)(f.url),
      mime: f.mime
    }));
    insertFile(editorRef, formattedFiles);
    setMediaLibVisible(false);
  };
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    Wysiwyg_spreadValues({}, placeholder.values)
  ) : "";
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    Wysiwyg_spreadValues({}, intlLabel.values)
  ) : name;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 1
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    textColor: "neutral800"
  }, label, required && /* @__PURE__ */ react.createElement(TypographyAsterisk, {
    textColor: "danger600"
  }, "*")), labelAction && /* @__PURE__ */ react.createElement(LabelAction, {
    paddingLeft: 1
  }, labelAction)), /* @__PURE__ */ react.createElement(EditorLayout, {
    isExpandMode,
    error,
    previewContent: value,
    onCollapse: handleToggleExpand
  }, /* @__PURE__ */ react.createElement(Wysiwyg_WysiwygNav, {
    isExpandMode,
    editorRef,
    isPreviewMode,
    onActionClick: handleActionClick,
    onToggleMediaLib: handleToggleMediaLib,
    onTogglePreviewMode: isExpandMode ? void 0 : handleTogglePreviewMode,
    disabled
  }), /* @__PURE__ */ react.createElement(Wysiwyg_Editor, {
    disabled,
    isExpandMode,
    editorRef,
    error,
    isPreviewMode,
    name,
    onChange,
    placeholder: formattedPlaceholder,
    textareaRef,
    value
  }), !isExpandMode && /* @__PURE__ */ react.createElement(Wysiwyg_WysiwygFooter, {
    onToggleExpand: handleToggleExpand
  })), /* @__PURE__ */ react.createElement(components_Hint, {
    description,
    name,
    error
  })), error && /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 1
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "danger600",
    "data-strapi-field-error": true
  }, error)), mediaLibVisible && /* @__PURE__ */ react.createElement(MediaLibraryDialog, {
    onClose: handleToggleMediaLib,
    onSelectAssets: handleSelectAssets
  }));
};
Wysiwyg_Wysiwyg.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  labelAction: void 0,
  placeholder: null,
  required: false,
  value: ""
};
Wysiwyg_Wysiwyg.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  required: (prop_types_default()).bool,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_Wysiwyg = (Wysiwyg_Wysiwyg);

// EXTERNAL MODULE: ./node_modules/lodash/trimStart.js
var trimStart = __webpack_require__(95659);
var trimStart_default = /*#__PURE__*/__webpack_require__.n(trimStart);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Field.js
var Field = __webpack_require__(16572);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/components/InputJSON/jsonlint.js
var jsonlint = __webpack_require__(33629);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputJSON/components.js


const EditorWrapper = styled_components_browser_cjs["default"].div`
  cursor: ${({ disabled }) => disabled ? "not-allowed !important" : "auto"};
  /* BASICS */

  .colored {
    background-color: yellow;
    color: black !important;
  }

  > div {
    border-radius: 3px;
    > div:last-of-type {
      min-height: 253px;
      max-height: 506px;
    }
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14 / 16}rem;
    direction: ltr;
    z-index: 0;
  }
`;
const components_StyledBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme, error }) => error ? theme.colors.danger600 : "transparent"};
`;


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputJSON/Label.js
var Label_defProp = Object.defineProperty;
var Label_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Label_hasOwnProp = Object.prototype.hasOwnProperty;
var Label_propIsEnum = Object.prototype.propertyIsEnumerable;
var Label_defNormalProp = (obj, key, value) => key in obj ? Label_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Label_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Label_hasOwnProp.call(b, prop))
      Label_defNormalProp(a, prop, b[prop]);
  if (Label_getOwnPropSymbols)
    for (var prop of Label_getOwnPropSymbols(b)) {
      if (Label_propIsEnum.call(b, prop))
        Label_defNormalProp(a, prop, b[prop]);
    }
  return a;
};







const Label_LabelAction = (0,styled_components_browser_cjs["default"])(Box.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const Label = ({ intlLabel, labelAction, name, required }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = (intlLabel == null ? void 0 : intlLabel.id) ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    Label_spreadValues({}, intlLabel.values)
  ) : name;
  return /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Field.FieldLabel, {
    required
  }, label), labelAction && /* @__PURE__ */ react.createElement(Label_LabelAction, {
    paddingLeft: 1
  }, labelAction));
};
Label.defaultProps = {
  id: void 0,
  intlLabel: void 0,
  labelAction: void 0,
  required: false
};
Label.propTypes = {
  id: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  required: (prop_types_default()).bool
};
/* harmony default export */ const InputJSON_Label = (Label);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputJSON/FieldWrapper.js




const FieldWrapper = ({ name, hint, error, children }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(Field.Field, {
    name,
    hint: hint && formatMessage(hint),
    error: errorMessage,
    id: name
  }, children);
};
FieldWrapper.defaultProps = {
  hint: void 0,
  error: ""
};
FieldWrapper.propTypes = {
  name: (prop_types_default()).string.isRequired,
  hint: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }),
  error: (prop_types_default()).string,
  children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const InputJSON_FieldWrapper = (FieldWrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputJSON/index.js
var InputJSON_defProp = Object.defineProperty;
var InputJSON_defNormalProp = (obj, key, value) => key in obj ? InputJSON_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  InputJSON_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var InputJSON_async = (__this, __arguments, generator) => {
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










const WAIT = 600;
const DEFAULT_THEME = "blackboard";
const InputJSON_loadCss = () => InputJSON_async(void 0, null, function* () {
  yield __webpack_require__.e(/* import() | codemirror-javacript */ 3860).then(__webpack_require__.t.bind(__webpack_require__, 96876, 23));
  yield __webpack_require__.e(/* import() | codemirror-addon-lint */ 2781).then(__webpack_require__.t.bind(__webpack_require__, 3256, 23));
  yield __webpack_require__.e(/* import() | codemirror-addon-lint-js */ 953).then(__webpack_require__.t.bind(__webpack_require__, 96477, 23));
  yield __webpack_require__.e(/* import() | codemirror-addon-closebrackets */ 5178).then(__webpack_require__.t.bind(__webpack_require__, 82801, 23));
  yield __webpack_require__.e(/* import() | codemirror-addon-mark-selection */ 5509).then(__webpack_require__.t.bind(__webpack_require__, 64020, 23));
  yield __webpack_require__.e(/* import() | codemirror-css */ 3973).then(__webpack_require__.bind(__webpack_require__, 91380));
  yield __webpack_require__.e(/* import() | codemirror-theme */ 2218).then(__webpack_require__.bind(__webpack_require__, 69039));
});
InputJSON_loadCss();
class InputJSON extends react.Component {
  constructor(props) {
    super(props);
    __publicField(this, "timer", null);
    __publicField(this, "setInitValue", () => {
      const { value } = this.props;
      try {
        if (value === null)
          return this.codeMirror.setValue("");
        return this.codeMirror.setValue(value);
      } catch (err) {
        return this.setState({ error: true });
      }
    });
    __publicField(this, "setSize", () => this.codeMirror.setSize("100%", "auto"));
    __publicField(this, "getContentAtLine", (line) => this.codeMirror.getLine(line));
    __publicField(this, "getEditorOption", (opt) => this.codeMirror.getOption(opt));
    __publicField(this, "getValue", () => this.codeMirror.getValue());
    __publicField(this, "markSelection", ({ message }) => {
      let line = parseInt(message.split(":")[0].split("line ")[1], 10) - 1;
      let content = this.getContentAtLine(line);
      if (content === "{") {
        line += 1;
        content = this.getContentAtLine(line);
      }
      const chEnd = content.length;
      const chStart = chEnd - trimStart_default()(content, " ").length;
      const markedText = this.codeMirror.markText(
        { line, ch: chStart },
        { line, ch: chEnd },
        { className: "colored" }
      );
      this.setState({ markedText });
    });
    __publicField(this, "handleChange", (doc, change) => {
      if (change.origin === "setValue") {
        return;
      }
      const { name, onChange } = this.props;
      let value = doc.getValue();
      if (value === "") {
        value = null;
      }
      onChange({
        target: {
          name,
          value,
          type: "json"
        }
      });
      if (this.state.markedText) {
        this.state.markedText.clear();
        this.setState({ markedText: null, error: null });
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.testJSON(doc.getValue()), WAIT);
    });
    __publicField(this, "testJSON", (value) => {
      try {
        jsonlint.parse(value);
      } catch (err) {
        this.markSelection(err);
      }
    });
    this.editor = react.createRef();
    this.state = { error: false, markedText: null };
  }
  componentDidMount() {
    this.codeMirror = codemirror_default().fromTextArea(this.editor.current, {
      autoCloseBrackets: true,
      lineNumbers: true,
      matchBrackets: true,
      mode: "application/json",
      readOnly: this.props.disabled,
      smartIndent: true,
      styleSelectedText: true,
      tabSize: 2,
      theme: DEFAULT_THEME,
      fontSize: "13px"
    });
    this.codeMirror.on("change", this.handleChange);
    this.setSize();
    this.setInitValue();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && !this.codeMirror.state.focused) {
      this.setInitValue();
    }
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ react.createElement("div", null, "error json");
    }
    return /* @__PURE__ */ react.createElement(InputJSON_FieldWrapper, {
      name: this.props.name,
      hint: this.props.description,
      error: this.props.error
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 1
    }, /* @__PURE__ */ react.createElement(InputJSON_Label, {
      intlLabel: this.props.intlLabel,
      labelAction: this.props.labelAction,
      name: this.props.name,
      required: this.props.required
    }), /* @__PURE__ */ react.createElement(components_StyledBox, {
      error: this.props.error
    }, /* @__PURE__ */ react.createElement(EditorWrapper, {
      disabled: this.props.disabled
    }, /* @__PURE__ */ react.createElement("textarea", {
      ref: this.editor,
      autoComplete: "off",
      id: this.props.id || this.props.name,
      defaultValue: ""
    }))), /* @__PURE__ */ react.createElement(Field.FieldHint, null), /* @__PURE__ */ react.createElement(Field.FieldError, null)));
  }
}
InputJSON.defaultProps = {
  description: null,
  disabled: false,
  id: void 0,
  error: void 0,
  intlLabel: void 0,
  labelAction: void 0,
  onChange: () => {
  },
  value: null,
  required: false
};
InputJSON.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  id: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func,
  value: (prop_types_default()).any,
  required: (prop_types_default()).bool
};
/* harmony default export */ const components_InputJSON = (InputJSON);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(99136);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Refresh.js
var Refresh = __webpack_require__(79274);
var Refresh_default = /*#__PURE__*/__webpack_require__.n(Refresh);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/CheckCircle.js
var CheckCircle = __webpack_require__(37694);
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ExclamationMarkCircle.js
var ExclamationMarkCircle = __webpack_require__(49993);
var ExclamationMarkCircle_default = /*#__PURE__*/__webpack_require__.n(ExclamationMarkCircle);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Loader.js
var Loader = __webpack_require__(79386);
var Loader_default = /*#__PURE__*/__webpack_require__.n(Loader);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/useDebounce.js

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = (0,react.useState)(value);
  (0,react.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
/* harmony default export */ const InputUID_useDebounce = (useDebounce);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/regex.js
const UID_REGEX = new RegExp(/^[A-Za-z0-9-_.~]*$/);
/* harmony default export */ const regex = (UID_REGEX);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/endActionStyle.js




const EndActionWrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  position: relative;
`;
const FieldActionWrapper = (0,styled_components_browser_cjs["default"])(Field.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const TextValidation = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  position: absolute;
  right: ${({ theme }) => theme.spaces[6]};
  width: 100px;
  pointer-events: none;

  svg {
    margin-right: ${({ theme }) => theme.spaces[1]};
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
    path {
      fill: ${({ theme, notAvailable }) => !notAvailable ? theme.colors.success600 : theme.colors.danger600};
    }
  }
`;
const rotation = styled_components_browser_cjs.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  animation: ${rotation} 2s infinite linear;
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/index.js
var InputUID_defProp = Object.defineProperty;
var InputUID_getOwnPropSymbols = Object.getOwnPropertySymbols;
var InputUID_hasOwnProp = Object.prototype.hasOwnProperty;
var InputUID_propIsEnum = Object.prototype.propertyIsEnumerable;
var InputUID_defNormalProp = (obj, key, value) => key in obj ? InputUID_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var InputUID_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (InputUID_hasOwnProp.call(b, prop))
      InputUID_defNormalProp(a, prop, b[prop]);
  if (InputUID_getOwnPropSymbols)
    for (var prop of InputUID_getOwnPropSymbols(b)) {
      if (InputUID_propIsEnum.call(b, prop))
        InputUID_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var InputUID_async = (__this, __arguments, generator) => {
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
















const InputUID = ({
  attribute,
  contentTypeUID,
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  value,
  placeholder,
  required
}) => {
  const { modifiedData, initialData, layout } = (0,build.useCMEditViewDataManager)();
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [availability, setAvailability] = (0,react.useState)(null);
  const debouncedValue = InputUID_useDebounce(value, 300);
  const generateUid = (0,react.useRef)();
  const initialValue = initialData[name];
  const { formatMessage } = (0,react_intl.useIntl)();
  const createdAtName = get_default()(layout, ["options", "timestamps", 0]);
  const isCreation = !initialData[createdAtName];
  const debouncedTargetFieldValue = InputUID_useDebounce(modifiedData[attribute.targetField], 300);
  const [isCustomized, setIsCustomized] = (0,react.useState)(false);
  const [regenerateLabel, setRegenerateLabel] = (0,react.useState)(null);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    InputUID_spreadValues({}, intlLabel.values)
  ) : name;
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    InputUID_spreadValues({}, description.values)
  ) : "";
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    InputUID_spreadValues({}, placeholder.values)
  ) : "";
  generateUid.current = (shouldSetInitialValue = false) => InputUID_async(void 0, null, function* () {
    setIsLoading(true);
    const requestURL = utils_getRequestUrl("uid/generate");
    try {
      const {
        data: { data }
      } = yield utils/* axiosInstance.post */.be.post(requestURL, {
        contentTypeUID,
        field: name,
        data: modifiedData
      });
      onChange({ target: { name, value: data, type: "text" } }, shouldSetInitialValue);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  });
  const checkAvailability = () => InputUID_async(void 0, null, function* () {
    setIsLoading(true);
    const requestURL = utils_getRequestUrl("uid/check-availability");
    if (!value) {
      return;
    }
    try {
      const { data } = yield utils/* axiosInstance.post */.be.post(requestURL, {
        contentTypeUID,
        field: name,
        value: value ? value.trim() : ""
      });
      setAvailability(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  });
  (0,react.useEffect)(() => {
    if (!value && attribute.required) {
      generateUid.current(true);
    }
  }, []);
  (0,react.useEffect)(() => {
    if (debouncedValue && debouncedValue.trim().match(regex) && debouncedValue !== initialValue) {
      checkAvailability();
    }
    if (!debouncedValue) {
      setAvailability(null);
    }
  }, [debouncedValue, initialValue]);
  (0,react.useEffect)(() => {
    let timer;
    if (availability && availability.isAvailable) {
      timer = setTimeout(() => {
        setAvailability(null);
      }, 4e3);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [availability]);
  (0,react.useEffect)(() => {
    if (!isCustomized && isCreation && debouncedTargetFieldValue && modifiedData[attribute.targetField] && !value) {
      generateUid.current(true);
    }
  }, [debouncedTargetFieldValue, isCustomized, isCreation]);
  const handleGenerateMouseEnter = () => {
    setRegenerateLabel(
      formatMessage({
        id: "content-manager.components.uid.regenerate",
        defaultMessage: "Regenerate"
      })
    );
  };
  const handleGenerateMouseLeave = () => {
    setRegenerateLabel(null);
  };
  const handleChange = (e) => {
    if (e.target.value && isCreation) {
      setIsCustomized(true);
    }
    onChange(e);
  };
  return /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    disabled,
    error,
    endAction: /* @__PURE__ */ react.createElement(EndActionWrapper, null, availability && availability.isAvailable && !regenerateLabel && /* @__PURE__ */ react.createElement(TextValidation, {
      alignItems: "center",
      justifyContent: "flex-end"
    }, /* @__PURE__ */ react.createElement((CheckCircle_default()), null), /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "success600",
      variant: "pi"
    }, formatMessage({
      id: "content-manager.components.uid.available",
      defaultMessage: "Available"
    }))), availability && !availability.isAvailable && !regenerateLabel && /* @__PURE__ */ react.createElement(TextValidation, {
      notAvailable: true,
      alignItems: "center",
      justifyContent: "flex-end"
    }, /* @__PURE__ */ react.createElement((ExclamationMarkCircle_default()), null), /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "danger600",
      variant: "pi"
    }, formatMessage({
      id: "content-manager.components.uid.unavailable",
      defaultMessage: "Unavailable"
    }))), regenerateLabel && /* @__PURE__ */ react.createElement(TextValidation, {
      alignItems: "center",
      justifyContent: "flex-end"
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "primary600",
      variant: "pi"
    }, regenerateLabel)), /* @__PURE__ */ react.createElement(FieldActionWrapper, {
      onClick: () => generateUid.current(),
      label: "regenerate",
      onMouseEnter: handleGenerateMouseEnter,
      onMouseLeave: handleGenerateMouseLeave
    }, isLoading ? /* @__PURE__ */ react.createElement(LoadingWrapper, null, /* @__PURE__ */ react.createElement((Loader_default()), null)) : /* @__PURE__ */ react.createElement((Refresh_default()), null))),
    hint,
    label,
    labelAction,
    name,
    onChange: handleChange,
    placeholder: formattedPlaceholder,
    value: value || "",
    required
  });
};
InputUID.propTypes = {
  attribute: prop_types_default().shape({
    targetField: (prop_types_default()).string,
    required: (prop_types_default()).bool
  }).isRequired,
  contentTypeUID: (prop_types_default()).string.isRequired,
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  required: (prop_types_default()).bool
};
InputUID.defaultProps = {
  description: void 0,
  disabled: false,
  error: void 0,
  labelAction: void 0,
  placeholder: void 0,
  value: "",
  required: false
};
/* harmony default export */ const components_InputUID = (InputUID);

// EXTERNAL MODULE: ./node_modules/lodash/findIndex.js
var findIndex = __webpack_require__(30998);
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex);
// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(1469);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectWrapper/Label.js







const SelectWrapper_Label_LabelAction = (0,styled_components_browser_cjs["default"])(Box.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const Label_Label = ({ intlLabel, id, labelAction, link, name, numberOfEntries, isSingle }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = (intlLabel == null ? void 0 : intlLabel.id) ? formatMessage(intlLabel) : name;
  return /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800",
    htmlFor: id || name,
    variant: "pi",
    fontWeight: "bold",
    as: "label"
  }, label, !isSingle && /* @__PURE__ */ react.createElement(react.Fragment, null, "\xA0(", numberOfEntries, ")")), labelAction && /* @__PURE__ */ react.createElement(SelectWrapper_Label_LabelAction, {
    paddingLeft: 1
  }, labelAction)), link);
};
Label_Label.defaultProps = {
  id: void 0,
  labelAction: void 0,
  link: null,
  numberOfEntries: 0
};
Label_Label.propTypes = {
  id: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  isSingle: (prop_types_default()).bool.isRequired,
  labelAction: (prop_types_default()).element,
  link: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  numberOfEntries: (prop_types_default()).number
};
/* harmony default export */ const SelectWrapper_Label = (Label_Label);

// EXTERNAL MODULE: ./node_modules/lodash/isNull.js
var isNull = __webpack_require__(45220);
var isNull_default = /*#__PURE__*/__webpack_require__.n(isNull);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.browser.cjs.js
var react_select_browser_cjs = __webpack_require__(38010);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectOne/SingleValue.js
var SingleValue_defProp = Object.defineProperty;
var SingleValue_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SingleValue_hasOwnProp = Object.prototype.hasOwnProperty;
var SingleValue_propIsEnum = Object.prototype.propertyIsEnumerable;
var SingleValue_defNormalProp = (obj, key, value) => key in obj ? SingleValue_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SingleValue_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SingleValue_hasOwnProp.call(b, prop))
      SingleValue_defNormalProp(a, prop, b[prop]);
  if (SingleValue_getOwnPropSymbols)
    for (var prop of SingleValue_getOwnPropSymbols(b)) {
      if (SingleValue_propIsEnum.call(b, prop))
        SingleValue_defNormalProp(a, prop, b[prop]);
    }
  return a;
};












const StyledBullet = styled_components_browser_cjs["default"].div`
  flex-shrink: 0;
  width: ${(0,build.pxToRem)(6)};
  height: ${(0,build.pxToRem)(6)};
  margin-right: ${({ theme }) => theme.spaces[2]};
  background-color: ${({ theme, isDraft }) => theme.colors[isDraft ? "secondary600" : "success600"]};
  border-radius: 50%;
  cursor: pointer;
`;
const SingleValue = (props) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const Component = react_select_browser_cjs.components.SingleValue;
  const hasDraftAndPublish = has_default()(get_default()(props, "data.value"), "publishedAt");
  const isDraft = isEmpty_default()(get_default()(props, "data.value.publishedAt"));
  if (hasDraftAndPublish) {
    const draftMessage = {
      id: utils_getTrad("components.Select.draft-info-title"),
      defaultMessage: "State: Draft"
    };
    const publishedMessage = {
      id: utils_getTrad("components.Select.publish-info-title"),
      defaultMessage: "State: Published"
    };
    const title = isDraft ? formatMessage(draftMessage) : formatMessage(publishedMessage);
    return /* @__PURE__ */ react.createElement(Component, SingleValue_spreadValues({}, props), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(StyledBullet, {
      title,
      isDraft
    }), /* @__PURE__ */ react.createElement(Typography.Typography, {
      ellipsis: true
    }, props.data.label || "-")));
  }
  return /* @__PURE__ */ react.createElement(Component, SingleValue_spreadValues({}, props), props.data.label || "-");
};
SingleValue.propTypes = {
  data: (prop_types_default()).object.isRequired,
  selectProps: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      schema: prop_types_default().shape({
        type: (prop_types_default()).string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const SelectOne_SingleValue = (SingleValue);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectOne/index.js
var SelectOne_defProp = Object.defineProperty;
var SelectOne_defProps = Object.defineProperties;
var SelectOne_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SelectOne_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SelectOne_hasOwnProp = Object.prototype.hasOwnProperty;
var SelectOne_propIsEnum = Object.prototype.propertyIsEnumerable;
var SelectOne_defNormalProp = (obj, key, value) => key in obj ? SelectOne_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SelectOne_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SelectOne_hasOwnProp.call(b, prop))
      SelectOne_defNormalProp(a, prop, b[prop]);
  if (SelectOne_getOwnPropSymbols)
    for (var prop of SelectOne_getOwnPropSymbols(b)) {
      if (SelectOne_propIsEnum.call(b, prop))
        SelectOne_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SelectOne_spreadProps = (a, b) => SelectOne_defProps(a, SelectOne_getOwnPropDescs(b));









function SelectOne({
  components,
  mainField,
  name,
  isDisabled,
  isLoading,
  onChange,
  onInputChange,
  onMenuClose,
  onMenuOpen,
  onMenuScrollToBottom,
  options,
  placeholder,
  value,
  description
}) {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(build.ReactSelect, {
    components: SelectOne_spreadProps(SelectOne_spreadValues({}, components), {
      SingleValue: SelectOne_SingleValue
    }),
    id: name,
    isClearable: true,
    isDisabled,
    isLoading,
    mainField,
    options,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onMenuScrollToBottom,
    placeholder: formatMessage(
      placeholder || { id: "global.select", defaultMessage: "Select..." }
    ),
    value: isNull_default()(value) ? null : { label: get_default()(value, [mainField.name], ""), value }
  }), description && /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600"
  }, description));
}
SelectOne.defaultProps = {
  description: "",
  components: {},
  placeholder: null,
  value: null
};
SelectOne.propTypes = {
  components: (prop_types_default()).object,
  isDisabled: (prop_types_default()).bool.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  mainField: prop_types_default().shape({
    name: (prop_types_default()).string.isRequired,
    schema: prop_types_default().shape({
      type: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  onInputChange: (prop_types_default()).func.isRequired,
  onMenuClose: (prop_types_default()).func.isRequired,
  onMenuOpen: (prop_types_default()).func.isRequired,
  onMenuScrollToBottom: (prop_types_default()).func.isRequired,
  options: (prop_types_default()).array.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }),
  value: (prop_types_default()).object,
  description: (prop_types_default()).string
};
/* harmony default export */ const components_SelectOne = ((0,react.memo)(SelectOne));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectMany/ListItem.js












const ListItem_StyledBullet = styled_components_browser_cjs["default"].div`
  width: ${(0,build.pxToRem)(6)};
  height: ${(0,build.pxToRem)(6)};
  background: ${({ theme, isDraft }) => theme.colors[isDraft ? "secondary600" : "success600"]};
  border-radius: 50%;
  cursor: pointer;
`;
function ListItem({
  data,
  displayNavigationLink,
  isDisabled,
  mainField,
  onRemove,
  searchToPersist,
  targetModel
}) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const to = `/content-manager/collectionType/${targetModel}/${data.id}`;
  let cursor = "pointer";
  if (isDisabled) {
    cursor = "not-allowed";
  }
  if (!displayNavigationLink) {
    cursor = "default";
  }
  const hasDraftAndPublish = has_default()(data, "publishedAt");
  const isDraft = isEmpty_default()(data.publishedAt);
  const value = data[mainField.name];
  const draftMessage = {
    id: utils_getTrad("components.Select.draft-info-title"),
    defaultMessage: "State: Draft"
  };
  const publishedMessage = {
    id: utils_getTrad("components.Select.publish-info-title"),
    defaultMessage: "State: Published"
  };
  const title = isDraft ? formatMessage(draftMessage) : formatMessage(publishedMessage);
  const { pathname } = (0,react_router_dom_min.useLocation)();
  return /* @__PURE__ */ react.createElement(Flex.Flex, {
    as: "li",
    alignItems: "center"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    style: { flex: 1 },
    alignItems: "center"
  }, hasDraftAndPublish && /* @__PURE__ */ react.createElement(Box.Box, {
    paddingRight: 2
  }, /* @__PURE__ */ react.createElement(ListItem_StyledBullet, {
    isDraft,
    title
  })), displayNavigationLink ? /* @__PURE__ */ react.createElement(build.Link, {
    to: { pathname: to, state: { from: pathname }, search: searchToPersist },
    style: { textTransform: "none" }
  }, value || data.id) : /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi"
  }, value || data.id)), /* @__PURE__ */ react.createElement(build.RemoveRoundedButton, {
    onClick: onRemove,
    label: "Remove",
    style: { cursor }
  }));
}
ListItem.defaultProps = {
  onRemove: () => {
  },
  searchToPersist: null,
  targetModel: ""
};
ListItem.propTypes = {
  data: (prop_types_default()).object.isRequired,
  displayNavigationLink: (prop_types_default()).bool.isRequired,
  isDisabled: (prop_types_default()).bool.isRequired,
  mainField: prop_types_default().shape({
    name: (prop_types_default()).string.isRequired,
    schema: prop_types_default().shape({
      type: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  onRemove: (prop_types_default()).func,
  searchToPersist: (prop_types_default()).string,
  targetModel: (prop_types_default()).string
};
/* harmony default export */ const SelectMany_ListItem = ((0,react.memo)(ListItem));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectMany/index.js










function SelectMany({
  addRelation,
  components,
  displayNavigationLink,
  mainField,
  name,
  isDisabled,
  isLoading,
  onInputChange,
  onMenuClose,
  onMenuOpen,
  onMenuScrollToBottom,
  onRemove,
  options,
  placeholder,
  searchToPersist,
  targetModel,
  value,
  description
}) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: true,
    trim: false,
    matchFrom: "any"
  };
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(build.ReactSelect, {
    components,
    isDisabled,
    id: name,
    filterOption: (candidate, input) => {
      if (!isEmpty_default()(value)) {
        const isSelected = value.findIndex((item) => item.id === candidate.value.id) !== -1;
        if (isSelected) {
          return false;
        }
      }
      if (input) {
        return (0,react_select_browser_cjs.createFilter)(filterConfig)(candidate, input);
      }
      return true;
    },
    mainField,
    isLoading,
    isMulti: true,
    isSearchable: true,
    options,
    onChange: addRelation,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onMenuScrollToBottom,
    placeholder: formatMessage(
      placeholder || { id: "global.select", defaultMessage: "Select..." }
    ),
    value: []
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 3,
    style: { overflow: "auto" }
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    as: "ul",
    spacing: 4,
    style: { maxHeight: "128px", overflowX: "hidden" }
  }, value == null ? void 0 : value.map((data, index) => {
    return /* @__PURE__ */ react.createElement(SelectMany_ListItem, {
      key: data.id,
      data,
      displayNavigationLink,
      isDisabled,
      mainField,
      onRemove: () => {
        if (!isDisabled) {
          onRemove(`${name}.${index}`);
        }
      },
      searchToPersist,
      targetModel
    });
  }))), description && /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600"
  }, description));
}
SelectMany.defaultProps = {
  description: "",
  components: {},
  placeholder: null,
  searchToPersist: null,
  value: null
};
SelectMany.propTypes = {
  addRelation: (prop_types_default()).func.isRequired,
  components: (prop_types_default()).object,
  displayNavigationLink: (prop_types_default()).bool.isRequired,
  isDisabled: (prop_types_default()).bool.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  mainField: prop_types_default().shape({
    name: (prop_types_default()).string.isRequired,
    schema: prop_types_default().shape({
      type: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onInputChange: (prop_types_default()).func.isRequired,
  onMenuClose: (prop_types_default()).func.isRequired,
  onMenuOpen: (prop_types_default()).func.isRequired,
  onMenuScrollToBottom: (prop_types_default()).func.isRequired,
  onRemove: (prop_types_default()).func.isRequired,
  options: (prop_types_default()).array.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }),
  searchToPersist: (prop_types_default()).string,
  targetModel: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).array,
  description: (prop_types_default()).string
};
/* harmony default export */ const components_SelectMany = ((0,react.memo)(SelectMany));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectWrapper/Option.js
var Option_defProp = Object.defineProperty;
var Option_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Option_hasOwnProp = Object.prototype.hasOwnProperty;
var Option_propIsEnum = Object.prototype.propertyIsEnumerable;
var Option_defNormalProp = (obj, key, value) => key in obj ? Option_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Option_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Option_hasOwnProp.call(b, prop))
      Option_defNormalProp(a, prop, b[prop]);
  if (Option_getOwnPropSymbols)
    for (var prop of Option_getOwnPropSymbols(b)) {
      if (Option_propIsEnum.call(b, prop))
        Option_defNormalProp(a, prop, b[prop]);
    }
  return a;
};










const Option_StyledBullet = styled_components_browser_cjs["default"].div`
  flex-shrink: 0;
  width: ${(0,build.pxToRem)(6)};
  height: ${(0,build.pxToRem)(6)};
  margin-right: ${({ theme }) => theme.spaces[2]};
  background-color: ${({ theme, isDraft }) => theme.colors[isDraft ? "secondary600" : "success600"]};
  border-radius: 50%;
  cursor: pointer;
`;
const Option = (props) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const Component = react_select_browser_cjs.components.Option;
  const hasDraftAndPublish = (0,lodash.has)((0,lodash.get)(props, "data.value"), "publishedAt");
  if (hasDraftAndPublish) {
    const isDraft = (0,lodash.isEmpty)((0,lodash.get)(props, "data.value.publishedAt"));
    const draftMessage = {
      id: utils_getTrad("components.Select.draft-info-title"),
      defaultMessage: "State: Draft"
    };
    const publishedMessage = {
      id: utils_getTrad("components.Select.publish-info-title"),
      defaultMessage: "State: Published"
    };
    const title = isDraft ? formatMessage(draftMessage) : formatMessage(publishedMessage);
    return /* @__PURE__ */ react.createElement(Component, Option_spreadValues({}, props), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Option_StyledBullet, {
      title,
      isDraft
    }), /* @__PURE__ */ react.createElement(Typography.Typography, {
      ellipsis: true
    }, props.label || "-")));
  }
  return /* @__PURE__ */ react.createElement(Component, Option_spreadValues({}, props), props.label || "-");
};
Option.defaultProps = {
  label: ""
};
Option.propTypes = {
  label: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  isFocused: (prop_types_default()).bool.isRequired,
  selectProps: prop_types_default().shape({
    hasDraftAndPublish: (prop_types_default()).bool,
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      schema: prop_types_default().shape({
        type: (prop_types_default()).string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const SelectWrapper_Option = (Option);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectWrapper/utils/connect.js
var utils_connect_defProp = Object.defineProperty;
var utils_connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var utils_connect_hasOwnProp = Object.prototype.hasOwnProperty;
var utils_connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var utils_connect_defNormalProp = (obj, key, value) => key in obj ? utils_connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var utils_connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (utils_connect_hasOwnProp.call(b, prop))
      utils_connect_defNormalProp(a, prop, b[prop]);
  if (utils_connect_getOwnPropSymbols)
    for (var prop of utils_connect_getOwnPropSymbols(b)) {
      if (utils_connect_propIsEnum.call(b, prop))
        utils_connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function connect_connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select(props);
    return /* @__PURE__ */ react.createElement(WrappedComponent, utils_connect_spreadValues(utils_connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const SelectWrapper_utils_connect = (connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectWrapper/utils/select.js


function select_useSelect({ isUserAllowedToEditField, isUserAllowedToReadField, name }) {
  const {
    isCreatingEntry,
    createActionAllowedFields,
    readActionAllowedFields,
    updateActionAllowedFields
  } = (0,build.useCMEditViewDataManager)();
  const isFieldAllowed = (0,react.useMemo)(() => {
    if (isUserAllowedToEditField === true) {
      return true;
    }
    const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
    return allowedFields.includes(name);
  }, [
    isCreatingEntry,
    createActionAllowedFields,
    name,
    isUserAllowedToEditField,
    updateActionAllowedFields
  ]);
  const isFieldReadable = (0,react.useMemo)(() => {
    if (isUserAllowedToReadField) {
      return true;
    }
    const allowedFields = isCreatingEntry ? [] : readActionAllowedFields;
    return allowedFields.includes(name);
  }, [isCreatingEntry, isUserAllowedToReadField, name, readActionAllowedFields]);
  return {
    isCreatingEntry,
    isFieldAllowed,
    isFieldReadable
  };
}
/* harmony default export */ const SelectWrapper_utils_select = (select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectWrapper/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SelectWrapper/index.js
var SelectWrapper_defProp = Object.defineProperty;
var SelectWrapper_defProps = Object.defineProperties;
var SelectWrapper_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SelectWrapper_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SelectWrapper_hasOwnProp = Object.prototype.hasOwnProperty;
var SelectWrapper_propIsEnum = Object.prototype.propertyIsEnumerable;
var SelectWrapper_defNormalProp = (obj, key, value) => key in obj ? SelectWrapper_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SelectWrapper_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SelectWrapper_hasOwnProp.call(b, prop))
      SelectWrapper_defNormalProp(a, prop, b[prop]);
  if (SelectWrapper_getOwnPropSymbols)
    for (var prop of SelectWrapper_getOwnPropSymbols(b)) {
      if (SelectWrapper_propIsEnum.call(b, prop))
        SelectWrapper_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SelectWrapper_spreadProps = (a, b) => SelectWrapper_defProps(a, SelectWrapper_getOwnPropDescs(b));
var SelectWrapper_async = (__this, __arguments, generator) => {
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




















const initialPaginationState = {
  contains: "",
  limit: 20,
  start: 0
};
const buildParams = (query, paramsToKeep) => {
  if (!paramsToKeep) {
    return {};
  }
  return paramsToKeep.reduce((acc, current) => {
    const value = get_default()(query, current, null);
    if (value) {
      set_default()(acc, current, value);
    }
    return acc;
  }, {});
};
function SelectWrapper({
  description,
  editable,
  labelAction,
  intlLabel,
  isCreatingEntry,
  isFieldAllowed,
  isFieldReadable,
  mainField,
  name,
  relationType,
  targetModel,
  placeholder,
  queryInfos
}) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [{ query }] = (0,build.useQueryParams)();
  const isMorph = (0,react.useMemo)(() => relationType.toLowerCase().includes("morph"), [relationType]);
  const {
    addRelation,
    modifiedData,
    moveRelation,
    onChange,
    onRemoveRelation
  } = (0,build.useCMEditViewDataManager)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const value = get_default()(modifiedData, name, null);
  const [state, setState] = (0,react.useState)(initialPaginationState);
  const [options, setOptions] = (0,react.useState)([]);
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const filteredOptions = (0,react.useMemo)(() => {
    return options.filter((option) => {
      if (!isEmpty_default()(value)) {
        if (Array.isArray(value)) {
          return findIndex_default()(value, (o) => o.id === option.value.id) === -1;
        }
        return get_default()(value, "id", "") !== option.value.id;
      }
      return true;
    });
  }, [options, value]);
  const {
    endPoint,
    containsKey,
    defaultParams,
    shouldDisplayRelationLink,
    paramsToKeep
  } = queryInfos;
  const isSingle = ["oneWay", "oneToOne", "manyToOne", "oneToManyMorph", "oneToOneMorph"].includes(
    relationType
  );
  const idsToOmit = (0,react.useMemo)(() => {
    if (!value) {
      return [];
    }
    if (isSingle) {
      return [value.id];
    }
    return value.map((val) => val.id);
  }, [isSingle, value]);
  const getData = (0,react.useCallback)(
    (source) => SelectWrapper_async(this, null, function* () {
      if (isMorph) {
        setIsLoading(false);
        return;
      }
      if (!isFieldAllowed) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      const params = SelectWrapper_spreadProps(SelectWrapper_spreadValues({ limit: state.limit }, defaultParams), { start: state.start });
      if (state.contains) {
        params[`filters[${containsKey}][$contains]`] = state.contains;
      }
      try {
        const { data } = yield utils/* axiosInstance.post */.be.post(
          endPoint,
          { idsToOmit },
          { params, cancelToken: source.token }
        );
        const formattedData = data.map((obj) => {
          return { value: obj, label: obj[mainField.name] };
        });
        setOptions(
          (prevState) => prevState.concat(formattedData).filter((obj, index) => {
            const objIndex = prevState.findIndex((el) => el.value.id === obj.value.id);
            if (objIndex === -1) {
              return true;
            }
            return prevState.findIndex((el) => el.value.id === obj.value.id) === index;
          })
        );
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }),
    [
      containsKey,
      defaultParams,
      endPoint,
      idsToOmit,
      isFieldAllowed,
      isMorph,
      mainField.name,
      state.contains,
      state.limit,
      state.start
    ]
  );
  (0,react.useEffect)(() => {
    const CancelToken = (axios_default()).CancelToken;
    const source = CancelToken.source();
    if (isOpen) {
      getData(source);
    }
    return () => source.cancel("Operation canceled by the user.");
  }, [getData, isOpen]);
  const handleInputChange = (inputValue, { action }) => {
    if (action === "input-change") {
      setState((prevState) => {
        if (prevState.contains === inputValue) {
          return prevState;
        }
        return SelectWrapper_spreadProps(SelectWrapper_spreadValues({}, prevState), { contains: inputValue, start: 0 });
      });
    }
    return inputValue;
  };
  const handleMenuScrollToBottom = () => {
    setState((prevState) => SelectWrapper_spreadProps(SelectWrapper_spreadValues({}, prevState), {
      start: prevState.start + 20
    }));
  };
  const handleMenuClose = () => {
    setState(initialPaginationState);
    setIsOpen(false);
  };
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2 ? value2.value : value2 } });
  };
  const handleAddRelation = (value2) => {
    if (!isEmpty_default()(value2)) {
      addRelation({ target: { name, value: value2 } });
    }
  };
  const handleMenuOpen = () => {
    setIsOpen(true);
  };
  const to = `/content-manager/collectionType/${targetModel}/${value ? value.id : null}`;
  const searchToPersist = (0,qs_lib.stringify)(buildParams(query, paramsToKeep), { encode: false });
  let link = null;
  if (isSingle && value && shouldDisplayRelationLink) {
    link = /* @__PURE__ */ react.createElement(build.Link, {
      to: { pathname: to, state: { from: pathname }, search: searchToPersist }
    }, formatMessage({ id: utils_getTrad("containers.Edit.seeDetails"), defaultMessage: "Details" }));
  }
  const Component = isSingle ? components_SelectOne : components_SelectMany;
  const associationsLength = isArray_default()(value) ? value.length : 0;
  const isDisabled = (0,react.useMemo)(() => {
    if (isMorph) {
      return true;
    }
    if (!isCreatingEntry) {
      return !isFieldAllowed && isFieldReadable || !editable;
    }
    return !editable;
  }, [isMorph, isCreatingEntry, editable, isFieldAllowed, isFieldReadable]);
  if (!isFieldAllowed && isCreatingEntry) {
    return /* @__PURE__ */ react.createElement(build.NotAllowedInput, {
      intlLabel,
      labelAction
    });
  }
  if (!isCreatingEntry && !isFieldAllowed && !isFieldReadable) {
    return /* @__PURE__ */ react.createElement(build.NotAllowedInput, {
      intlLabel,
      labelAction
    });
  }
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(SelectWrapper_Label, {
    intlLabel,
    isSingle,
    labelAction,
    link,
    name,
    numberOfEntries: associationsLength
  }), /* @__PURE__ */ react.createElement(Component, {
    addRelation: handleAddRelation,
    components: {
      Option: SelectWrapper_Option
    },
    displayNavigationLink: shouldDisplayRelationLink,
    id: name,
    isDisabled,
    isLoading,
    isClearable: true,
    mainField,
    move: moveRelation,
    name,
    options: filteredOptions,
    onChange: handleChange,
    onInputChange: handleInputChange,
    onMenuClose: handleMenuClose,
    onMenuOpen: handleMenuOpen,
    onMenuScrollToBottom: handleMenuScrollToBottom,
    onRemove: onRemoveRelation,
    placeholder,
    searchToPersist,
    targetModel,
    value,
    description
  }));
}
SelectWrapper.defaultProps = {
  editable: true,
  description: "",
  labelAction: null,
  isFieldAllowed: true,
  placeholder: null
};
SelectWrapper.propTypes = {
  editable: (prop_types_default()).bool,
  description: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isFieldAllowed: (prop_types_default()).bool,
  isFieldReadable: (prop_types_default()).bool.isRequired,
  mainField: prop_types_default().shape({
    name: (prop_types_default()).string.isRequired,
    schema: prop_types_default().shape({
      type: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  relationType: (prop_types_default()).string.isRequired,
  targetModel: (prop_types_default()).string.isRequired,
  queryInfos: prop_types_default().shape({
    containsKey: (prop_types_default()).string.isRequired,
    defaultParams: (prop_types_default()).object,
    endPoint: (prop_types_default()).string.isRequired,
    shouldDisplayRelationLink: (prop_types_default()).bool.isRequired,
    paramsToKeep: (prop_types_default()).array
  }).isRequired
};
const Memoized = (0,react.memo)(SelectWrapper);
/* harmony default export */ const components_SelectWrapper = (SelectWrapper_utils_connect(Memoized, SelectWrapper_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/connect.js
var Inputs_utils_connect_defProp = Object.defineProperty;
var Inputs_utils_connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Inputs_utils_connect_hasOwnProp = Object.prototype.hasOwnProperty;
var Inputs_utils_connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var Inputs_utils_connect_defNormalProp = (obj, key, value) => key in obj ? Inputs_utils_connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Inputs_utils_connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Inputs_utils_connect_hasOwnProp.call(b, prop))
      Inputs_utils_connect_defNormalProp(a, prop, b[prop]);
  if (Inputs_utils_connect_getOwnPropSymbols)
    for (var prop of Inputs_utils_connect_getOwnPropSymbols(b)) {
      if (Inputs_utils_connect_propIsEnum.call(b, prop))
        Inputs_utils_connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function utils_connect_connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select(props.keys);
    return /* @__PURE__ */ react.createElement(WrappedComponent, Inputs_utils_connect_spreadValues(Inputs_utils_connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const Inputs_utils_connect = (utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/generateOptions.js
const generateOptions = (options, isRequired = false) => {
  return [
    {
      metadatas: {
        intlLabel: {
          id: "components.InputSelect.option.placeholder",
          defaultMessage: "Choose here"
        },
        disabled: isRequired,
        hidden: isRequired
      },
      key: "__enum_option_null",
      value: ""
    },
    ...options.map((option) => {
      return {
        metadatas: {
          intlLabel: {
            id: option,
            defaultMessage: option
          },
          hidden: false,
          disabled: false
        },
        key: option,
        value: option
      };
    })
  ];
};
/* harmony default export */ const utils_generateOptions = (generateOptions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/getInputType.js

const getInputType = (type = "") => {
  switch ((0,lodash.toLower)(type)) {
    case "boolean":
      return "bool";
    case "biginteger":
      return "text";
    case "decimal":
    case "float":
    case "integer":
      return "number";
    case "date":
    case "datetime":
    case "time":
      return type;
    case "email":
      return "email";
    case "enumeration":
      return "select";
    case "password":
      return "password";
    case "string":
      return "text";
    case "text":
      return "textarea";
    case "media":
    case "file":
    case "files":
      return "media";
    case "json":
      return "json";
    case "wysiwyg":
    case "WYSIWYG":
    case "richtext":
      return "wysiwyg";
    case "uid":
      return "uid";
    default:
      return type || "text";
  }
};
/* harmony default export */ const utils_getInputType = (getInputType);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/getStep.js
const getStep = (type) => {
  let step;
  if (type === "float" || type === "decimal") {
    step = 0.01;
  } else if (type === "time" || type === "datetime") {
    step = 1;
  } else {
    step = 1;
  }
  return step;
};
/* harmony default export */ const utils_getStep = (getStep);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/select.js



function utils_select_useSelect(keys) {
  const {
    createActionAllowedFields,
    formErrors,
    isCreatingEntry,
    modifiedData,
    onChange,
    readActionAllowedFields,
    shouldNotRunValidations,
    updateActionAllowedFields
  } = (0,build.useCMEditViewDataManager)();
  const allowedFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
  }, [isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const readableFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? [] : readActionAllowedFields;
  }, [isCreatingEntry, readActionAllowedFields]);
  const value = (0,lodash.get)(modifiedData, keys, null);
  return {
    allowedFields,
    formErrors,
    isCreatingEntry,
    onChange,
    readableFields,
    shouldNotRunValidations,
    value
  };
}
/* harmony default export */ const Inputs_utils_select = (utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/VALIDATIONS_TO_OMIT.js
const validationsToOmit = [
  "type",
  "model",
  "via",
  "collection",
  "default",
  "plugin",
  "enum",
  "regex",
  "pluginOptions"
];
/* harmony default export */ const VALIDATIONS_TO_OMIT = (validationsToOmit);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/index.js







;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/index.js
var Inputs_defProp = Object.defineProperty;
var Inputs_defProps = Object.defineProperties;
var Inputs_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Inputs_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Inputs_hasOwnProp = Object.prototype.hasOwnProperty;
var Inputs_propIsEnum = Object.prototype.propertyIsEnumerable;
var Inputs_defNormalProp = (obj, key, value) => key in obj ? Inputs_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Inputs_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Inputs_hasOwnProp.call(b, prop))
      Inputs_defNormalProp(a, prop, b[prop]);
  if (Inputs_getOwnPropSymbols)
    for (var prop of Inputs_getOwnPropSymbols(b)) {
      if (Inputs_propIsEnum.call(b, prop))
        Inputs_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Inputs_spreadProps = (a, b) => Inputs_defProps(a, Inputs_getOwnPropDescs(b));















function Inputs({
  allowedFields,
  fieldSchema,
  formErrors,
  isCreatingEntry,
  keys,
  labelAction,
  metadatas,
  onChange,
  readableFields,
  shouldNotRunValidations,
  queryInfos,
  value
}) {
  const { fields } = (0,build.useLibrary)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { contentType: currentContentTypeLayout } = hooks_useContentTypeLayout();
  const disabled = (0,react.useMemo)(() => !get_default()(metadatas, "editable", true), [metadatas]);
  const type = fieldSchema.type;
  const error = get_default()(formErrors, [keys], null);
  const fieldName = (0,react.useMemo)(() => {
    return utils_getFieldName(keys);
  }, [keys]);
  const validations = (0,react.useMemo)(() => {
    const inputValidations = omit_default()(
      fieldSchema,
      shouldNotRunValidations ? [...VALIDATIONS_TO_OMIT, "required", "minLength"] : VALIDATIONS_TO_OMIT
    );
    const regexpString = fieldSchema.regex || null;
    if (regexpString) {
      const regexp = new RegExp(regexpString);
      if (regexp) {
        inputValidations.regex = regexp;
      }
    }
    return inputValidations;
  }, [fieldSchema, shouldNotRunValidations]);
  const isRequired = (0,react.useMemo)(() => get_default()(validations, ["required"], false), [validations]);
  const isChildOfDynamicZone = (0,react.useMemo)(() => {
    const attributes = get_default()(currentContentTypeLayout, ["attributes"], {});
    const foundAttributeType = get_default()(attributes, [fieldName[0], "type"], null);
    return foundAttributeType === "dynamiczone";
  }, [currentContentTypeLayout, fieldName]);
  const inputType = (0,react.useMemo)(() => {
    return utils_getInputType(type);
  }, [type]);
  const inputValue = (0,react.useMemo)(() => {
    if (type === "media" && !value) {
      return [];
    }
    return value;
  }, [type, value]);
  const step = (0,react.useMemo)(() => {
    return utils_getStep(type);
  }, [type]);
  const isUserAllowedToEditField = (0,react.useMemo)(() => {
    const joinedName = fieldName.join(".");
    if (allowedFields.includes(joinedName)) {
      return true;
    }
    if (isChildOfDynamicZone) {
      return allowedFields.includes(fieldName[0]);
    }
    const isChildOfComponent = fieldName.length > 1;
    if (isChildOfComponent) {
      const parentFieldName = take_default()(fieldName, fieldName.length - 1).join(".");
      return allowedFields.includes(parentFieldName);
    }
    return false;
  }, [allowedFields, fieldName, isChildOfDynamicZone]);
  const isUserAllowedToReadField = (0,react.useMemo)(() => {
    const joinedName = fieldName.join(".");
    if (readableFields.includes(joinedName)) {
      return true;
    }
    if (isChildOfDynamicZone) {
      return readableFields.includes(fieldName[0]);
    }
    const isChildOfComponent = fieldName.length > 1;
    if (isChildOfComponent) {
      const parentFieldName = take_default()(fieldName, fieldName.length - 1).join(".");
      return readableFields.includes(parentFieldName);
    }
    return false;
  }, [readableFields, fieldName, isChildOfDynamicZone]);
  const shouldDisplayNotAllowedInput = (0,react.useMemo)(() => {
    return isUserAllowedToReadField || isUserAllowedToEditField;
  }, [isUserAllowedToEditField, isUserAllowedToReadField]);
  const shouldDisableField = (0,react.useMemo)(() => {
    if (!isCreatingEntry) {
      const doesNotHaveRight = isUserAllowedToReadField && !isUserAllowedToEditField;
      if (doesNotHaveRight) {
        return true;
      }
      return disabled;
    }
    return disabled;
  }, [disabled, isCreatingEntry, isUserAllowedToEditField, isUserAllowedToReadField]);
  const options = (0,react.useMemo)(() => utils_generateOptions(fieldSchema.enum || [], isRequired), [
    fieldSchema,
    isRequired
  ]);
  const { label, description, placeholder, visible } = metadatas;
  if (visible === false) {
    return null;
  }
  if (!shouldDisplayNotAllowedInput) {
    return /* @__PURE__ */ react.createElement(build.NotAllowedInput, {
      description: description ? { id: description, defaultMessage: description } : null,
      intlLabel: { id: label, defaultMessage: label },
      labelAction,
      error: error && formatMessage(error),
      name: keys,
      required: isRequired
    });
  }
  if (type === "relation") {
    return /* @__PURE__ */ react.createElement(components_SelectWrapper, Inputs_spreadProps(Inputs_spreadValues(Inputs_spreadValues({}, metadatas), fieldSchema), {
      description: metadatas.description ? formatMessage({
        id: metadatas.description,
        defaultMessage: metadatas.description
      }) : void 0,
      intlLabel: {
        id: metadatas.label,
        defaultMessage: metadatas.label
      },
      labelAction,
      isUserAllowedToEditField,
      isUserAllowedToReadField,
      name: keys,
      placeholder: metadatas.placeholder ? {
        id: metadatas.placeholder,
        defaultMessage: metadatas.placeholder
      } : null,
      queryInfos,
      value,
      error: error && formatMessage(error)
    }));
  }
  return /* @__PURE__ */ react.createElement(build.GenericInput, {
    attribute: fieldSchema,
    autoComplete: "new-password",
    intlLabel: { id: label, defaultMessage: label },
    isNullable: inputType === "bool" && [null, void 0].includes(fieldSchema.default),
    description: description ? { id: description, defaultMessage: description } : null,
    disabled: shouldDisableField,
    error,
    labelAction,
    contentTypeUID: currentContentTypeLayout.uid,
    customInputs: Inputs_spreadValues({
      json: components_InputJSON,
      uid: components_InputUID,
      media: fields.media,
      wysiwyg: components_Wysiwyg
    }, fields),
    multiple: fieldSchema.multiple || false,
    name: keys,
    onChange,
    options,
    placeholder: placeholder ? { id: placeholder, defaultMessage: placeholder } : null,
    required: fieldSchema.required || false,
    step,
    type: inputType,
    value: inputValue,
    withDefaultValue: false
  });
}
Inputs.defaultProps = {
  formErrors: {},
  labelAction: void 0,
  queryInfos: {},
  value: null
};
Inputs.propTypes = {
  allowedFields: (prop_types_default()).array.isRequired,
  fieldSchema: (prop_types_default()).object.isRequired,
  formErrors: (prop_types_default()).object,
  keys: (prop_types_default()).string.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  labelAction: (prop_types_default()).element,
  metadatas: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  readableFields: (prop_types_default()).array.isRequired,
  shouldNotRunValidations: (prop_types_default()).bool.isRequired,
  queryInfos: prop_types_default().shape({
    containsKey: (prop_types_default()).string,
    defaultParams: (prop_types_default()).object,
    endPoint: (prop_types_default()).string
  }),
  value: (prop_types_default()).any
};
const Inputs_Memoized = (0,react.memo)(Inputs, (react_fast_compare_default()));
/* harmony default export */ const components_Inputs = (Inputs_utils_connect(Inputs_Memoized, Inputs_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/NonRepeatableComponent/index.js








const NonRepeatableComponent = ({ componentUid, isFromDynamicZone, isNested, name }) => {
  const { getComponentLayout } = hooks_useContentTypeLayout();
  const componentLayoutData = (0,react.useMemo)(() => getComponentLayout(componentUid), [
    componentUid,
    getComponentLayout
  ]);
  const fields = componentLayoutData.layouts.edit;
  return /* @__PURE__ */ react.createElement(Box.Box, {
    background: isFromDynamicZone ? "" : "neutral100",
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 6,
    hasRadius: isNested,
    borderColor: isNested ? "neutral200" : ""
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 6
  }, fields.map((fieldRow, key) => {
    return /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 4,
      key
    }, fieldRow.map(({ name: fieldName, size, metadatas, fieldSchema, queryInfos }) => {
      const isComponent = fieldSchema.type === "component";
      const keys = `${name}.${fieldName}`;
      if (isComponent) {
        const compoUid = fieldSchema.component;
        return /* @__PURE__ */ react.createElement(Grid.GridItem, {
          col: size,
          s: 12,
          xs: 12,
          key: fieldName
        }, /* @__PURE__ */ react.createElement(components_FieldComponent, {
          componentUid: compoUid,
          intlLabel: {
            id: metadatas.label,
            defaultMessage: metadatas.label
          },
          isNested: true,
          isRepeatable: fieldSchema.repeatable,
          max: fieldSchema.max,
          min: fieldSchema.min,
          name: keys,
          required: fieldSchema.required || false
        }));
      }
      return /* @__PURE__ */ react.createElement(Grid.GridItem, {
        col: size,
        key: fieldName,
        s: 12,
        xs: 12
      }, /* @__PURE__ */ react.createElement(components_Inputs, {
        keys,
        fieldSchema,
        metadatas,
        queryInfos
      }));
    }));
  })));
};
NonRepeatableComponent.defaultProps = {
  isFromDynamicZone: false,
  isNested: false
};
NonRepeatableComponent.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  isFromDynamicZone: (prop_types_default()).bool,
  isNested: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_NonRepeatableComponent = (NonRepeatableComponent);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/TextButton.js
var TextButton = __webpack_require__(82212);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(89326);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/utils/connect.js
var RepeatableComponent_utils_connect_defProp = Object.defineProperty;
var RepeatableComponent_utils_connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var RepeatableComponent_utils_connect_hasOwnProp = Object.prototype.hasOwnProperty;
var RepeatableComponent_utils_connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var RepeatableComponent_utils_connect_defNormalProp = (obj, key, value) => key in obj ? RepeatableComponent_utils_connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var RepeatableComponent_utils_connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (RepeatableComponent_utils_connect_hasOwnProp.call(b, prop))
      RepeatableComponent_utils_connect_defNormalProp(a, prop, b[prop]);
  if (RepeatableComponent_utils_connect_getOwnPropSymbols)
    for (var prop of RepeatableComponent_utils_connect_getOwnPropSymbols(b)) {
      if (RepeatableComponent_utils_connect_propIsEnum.call(b, prop))
        RepeatableComponent_utils_connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function RepeatableComponent_utils_connect_connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select(props);
    return /* @__PURE__ */ react.createElement(WrappedComponent, RepeatableComponent_utils_connect_spreadValues(RepeatableComponent_utils_connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const RepeatableComponent_utils_connect = (RepeatableComponent_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/utils/select.js

function RepeatableComponent_utils_select_useSelect() {
  const { addRepeatableComponentToField, formErrors } = (0,build.useCMEditViewDataManager)();
  return {
    addRepeatableComponentToField,
    formErrors
  };
}
/* harmony default export */ const RepeatableComponent_utils_select = (RepeatableComponent_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/utils/getComponentErrorKeys.js
function getComponentErrorKeys(name, formErrors) {
  return Object.keys(formErrors).filter((errorKey) => errorKey.startsWith(name)).map(
    (errorKey) => errorKey.split(".").slice(0, name.split(".").length + 1).join(".")
  );
}

// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var dist_cjs = __webpack_require__(61080);
// EXTERNAL MODULE: ./node_modules/lodash/toString.js
var lodash_toString = __webpack_require__(79833);
var toString_default = /*#__PURE__*/__webpack_require__.n(lodash_toString);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Tooltip.js
var Tooltip = __webpack_require__(55639);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/DraggedItem/Preview.js


const StyledSpan = styled_components_browser_cjs["default"].span`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary100};
  outline: 1px dashed ${({ theme }) => theme.colors.primary500};
  outline-offset: -1px;
  padding: ${({ theme }) => theme.spaces[6]};
`;
const Preview = () => {
  return /* @__PURE__ */ react.createElement(StyledSpan, {
    padding: 6,
    background: "primary100"
  });
};
/* harmony default export */ const DraggedItem_Preview = (Preview);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Icon.js
var Icon = __webpack_require__(33699);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/DraggedItem/IconButtonCustoms.js


const IconButtonCustoms_CustomIconButton = (0,styled_components_browser_cjs["default"])(IconButton.IconButton)`
  background-color: transparent;

  svg {
    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }
  }
`;
const CustomIconButtonSibling = (0,styled_components_browser_cjs["default"])(IconButton.IconButton)`
  background-color: transparent;

  svg {
    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
    }
  }
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/DraggedItem/DraggingSibling.js












const SiblingWrapper = styled_components_browser_cjs["default"].span`
  display: flex;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.spaces[4]};
  padding-right: ${({ theme }) => theme.spaces[4]};
  background-color: ${({ theme }) => theme.colors.neutral0};
  height: ${50 / 16}rem;
`;
const DraggingSibling_ToggleButton = (0,styled_components_browser_cjs["default"])(TextButton.TextButton)`
  text-align: left;

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral500};
    }
  }
`;
const DraggingSibling = ({ displayedValue }) => {
  return /* @__PURE__ */ react.createElement(SiblingWrapper, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 3,
    flex: 1
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center",
    borderRadius: "50%",
    height: `${24 / 16}rem}`,
    width: `${24 / 16}rem}`,
    "aria-hidden": true,
    as: "span",
    background: "neutral200"
  }, /* @__PURE__ */ react.createElement(Icon.Icon, {
    as: (CarretDown_default()),
    width: `${8 / 16}rem}`,
    color: "neutral600"
  })), /* @__PURE__ */ react.createElement(DraggingSibling_ToggleButton, {
    onClick: () => {
    },
    flex: 1
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral700"
  }, displayedValue))), /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 0
  }, /* @__PURE__ */ react.createElement(CustomIconButtonSibling, {
    noBorder: true,
    onClick: () => {
    },
    icon: /* @__PURE__ */ react.createElement((Trash_default()), null)
  }), /* @__PURE__ */ react.createElement(CustomIconButtonSibling, {
    icon: /* @__PURE__ */ react.createElement((Drag_default()), null),
    noBorder: true
  })));
};
DraggingSibling.propTypes = {
  displayedValue: (prop_types_default()).string.isRequired
};
/* harmony default export */ const DraggedItem_DraggingSibling = (DraggingSibling);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/DraggedItem/utils/connect.js
var DraggedItem_utils_connect_defProp = Object.defineProperty;
var DraggedItem_utils_connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DraggedItem_utils_connect_hasOwnProp = Object.prototype.hasOwnProperty;
var DraggedItem_utils_connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var DraggedItem_utils_connect_defNormalProp = (obj, key, value) => key in obj ? DraggedItem_utils_connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DraggedItem_utils_connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DraggedItem_utils_connect_hasOwnProp.call(b, prop))
      DraggedItem_utils_connect_defNormalProp(a, prop, b[prop]);
  if (DraggedItem_utils_connect_getOwnPropSymbols)
    for (var prop of DraggedItem_utils_connect_getOwnPropSymbols(b)) {
      if (DraggedItem_utils_connect_propIsEnum.call(b, prop))
        DraggedItem_utils_connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function DraggedItem_utils_connect_connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select(props);
    return /* @__PURE__ */ react.createElement(WrappedComponent, DraggedItem_utils_connect_spreadValues(DraggedItem_utils_connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const DraggedItem_utils_connect = (DraggedItem_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/DraggedItem/utils/select.js



function DraggedItem_utils_select_useSelect({ schema, componentFieldName }) {
  const {
    checkFormErrors,
    modifiedData,
    moveComponentField,
    removeRepeatableField,
    triggerFormValidation
  } = (0,build.useCMEditViewDataManager)();
  const mainField = (0,react.useMemo)(() => (0,lodash.get)(schema, ["settings", "mainField"], "id"), [schema]);
  const displayedValue = (0,lodash.toString)(
    (0,lodash.get)(modifiedData, [...componentFieldName.split("."), mainField], "")
  );
  return {
    displayedValue,
    mainField,
    checkFormErrors,
    moveComponentField,
    removeRepeatableField,
    schema,
    triggerFormValidation
  };
}
/* harmony default export */ const DraggedItem_utils_select = (DraggedItem_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/DraggedItem/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/DraggedItem/index.js






















const DraggedItem_DragButton = styled_components_browser_cjs["default"].span`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spaces[7]};

  padding: 0 ${({ theme }) => theme.spaces[3]};
  cursor: all-scroll;

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const DraggedItem = ({
  componentFieldName,
  hasErrorMessage,
  hasErrors,
  isDraggingSibling,
  isOpen,
  isReadOnly,
  onClickToggle,
  schema,
  toggleCollapses,
  moveComponentField,
  removeRepeatableField,
  setIsDraggingSibling,
  triggerFormValidation,
  displayedValue
}) => {
  const dragRef = (0,react.useRef)(null);
  const dropRef = (0,react.useRef)(null);
  const [, forceRerenderAfterDnd] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const fields = schema.layouts.edit;
  const [, drop] = (0,cjs.useDrop)({
    accept: ItemTypes.COMPONENT,
    canDrop() {
      return false;
    },
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragPath = item.originalPath;
      const hoverPath = componentFieldName;
      const fullPathToComponentArray = dragPath.split(".");
      const dragIndexString = fullPathToComponentArray.slice().splice(-1).join("");
      const hoverIndexString = hoverPath.split(".").splice(-1).join("");
      const pathToComponentArray = fullPathToComponentArray.slice(
        0,
        fullPathToComponentArray.length - 1
      );
      const dragIndex = parseInt(dragIndexString, 10);
      const hoverIndex = parseInt(hoverIndexString, 10);
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      if (dragPath.split(".").length !== hoverPath.split(".").length) {
        return;
      }
      moveComponentField(pathToComponentArray, dragIndex, hoverIndex);
      item.originalPath = hoverPath;
    }
  });
  const [{ isDragging }, drag, preview] = (0,cjs.useDrag)({
    type: ItemTypes.COMPONENT,
    item: () => {
      toggleCollapses(-1);
      return {
        displayedValue,
        originalPath: componentFieldName
      };
    },
    end: () => {
      triggerFormValidation();
      setIsDraggingSibling(false);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  (0,react.useEffect)(() => {
    preview((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [preview]);
  (0,react.useEffect)(() => {
    if (isDragging) {
      setIsDraggingSibling(true);
    }
  }, [isDragging, setIsDraggingSibling]);
  (0,react.useEffect)(() => {
    if (!isDraggingSibling) {
      forceRerenderAfterDnd((prev) => !prev);
    }
  }, [isDraggingSibling]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  const accordionTitle = toString_default()(displayedValue);
  const accordionHasError = hasErrors ? "error" : void 0;
  return /* @__PURE__ */ react.createElement(Box.Box, {
    ref: refs ? refs.dropRef : null
  }, isDragging && /* @__PURE__ */ react.createElement(DraggedItem_Preview, null), !isDragging && isDraggingSibling && /* @__PURE__ */ react.createElement(DraggedItem_DraggingSibling, {
    displayedValue: accordionTitle,
    componentFieldName
  }), !isDragging && !isDraggingSibling && /* @__PURE__ */ react.createElement(Accordion.Accordion, {
    error: accordionHasError,
    hasErrorMessage,
    expanded: isOpen,
    onToggle: onClickToggle,
    id: componentFieldName,
    size: "S"
  }, /* @__PURE__ */ react.createElement(Accordion.AccordionToggle, {
    action: isReadOnly ? null : /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 0
    }, /* @__PURE__ */ react.createElement(IconButtonCustoms_CustomIconButton, {
      expanded: isOpen,
      noBorder: true,
      onClick: () => {
        removeRepeatableField(componentFieldName);
        toggleCollapses();
      },
      label: formatMessage({
        id: utils_getTrad("containers.Edit.delete"),
        defaultMessage: "Delete"
      }),
      icon: /* @__PURE__ */ react.createElement((Trash_default()), null)
    }), /* @__PURE__ */ react.createElement(Tooltip.Tooltip, {
      description: formatMessage({
        id: utils_getTrad("components.DragHandle-label"),
        defaultMessage: "Drag"
      })
    }, /* @__PURE__ */ react.createElement(DraggedItem_DragButton, {
      role: "button",
      tabIndex: -1,
      ref: refs.dragRef,
      onClick: (e) => e.stopPropagation()
    }, /* @__PURE__ */ react.createElement((Drag_default()), null)))),
    title: accordionTitle,
    togglePosition: "left"
  }), /* @__PURE__ */ react.createElement(Accordion.AccordionContent, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    background: "neutral100",
    padding: 6,
    spacing: 6
  }, fields.map((fieldRow, key) => {
    return /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 4,
      key
    }, fieldRow.map(({ name, fieldSchema, metadatas, queryInfos, size }) => {
      const isComponent = fieldSchema.type === "component";
      const keys = `${componentFieldName}.${name}`;
      if (isComponent) {
        const componentUid = fieldSchema.component;
        return /* @__PURE__ */ react.createElement(Grid.GridItem, {
          col: size,
          s: 12,
          xs: 12,
          key: name
        }, /* @__PURE__ */ react.createElement(components_FieldComponent, {
          componentUid,
          intlLabel: {
            id: metadatas.label,
            defaultMessage: metadatas.label
          },
          isRepeatable: fieldSchema.repeatable,
          isNested: true,
          name: keys,
          max: fieldSchema.max,
          min: fieldSchema.min,
          required: fieldSchema.required
        }));
      }
      return /* @__PURE__ */ react.createElement(Grid.GridItem, {
        key: keys,
        col: size,
        s: 12,
        xs: 12
      }, /* @__PURE__ */ react.createElement(components_Inputs, {
        fieldSchema,
        keys,
        metadatas,
        queryInfos
      }));
    }));
  })))));
};
DraggedItem.defaultProps = {
  isDraggingSibling: false,
  isOpen: false,
  setIsDraggingSibling: () => {
  },
  toggleCollapses: () => {
  }
};
DraggedItem.propTypes = {
  componentFieldName: (prop_types_default()).string.isRequired,
  hasErrorMessage: (prop_types_default()).bool.isRequired,
  hasErrors: (prop_types_default()).bool.isRequired,
  isDraggingSibling: (prop_types_default()).bool,
  isOpen: (prop_types_default()).bool,
  isReadOnly: (prop_types_default()).bool.isRequired,
  onClickToggle: (prop_types_default()).func.isRequired,
  schema: (prop_types_default()).object.isRequired,
  toggleCollapses: (prop_types_default()).func,
  moveComponentField: (prop_types_default()).func.isRequired,
  removeRepeatableField: (prop_types_default()).func.isRequired,
  setIsDraggingSibling: (prop_types_default()).func,
  triggerFormValidation: (prop_types_default()).func.isRequired,
  displayedValue: (prop_types_default()).string.isRequired
};
const DraggedItem_Memoized = (0,react.memo)(DraggedItem);
/* harmony default export */ const RepeatableComponent_DraggedItem = (DraggedItem_utils_connect(DraggedItem_Memoized, DraggedItem_utils_select));


// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/KeyboardNavigable.js
var KeyboardNavigable = __webpack_require__(33247);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/AccordionGroupCustom/index.js
var AccordionGroupCustom_defProp = Object.defineProperty;
var AccordionGroupCustom_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AccordionGroupCustom_hasOwnProp = Object.prototype.hasOwnProperty;
var AccordionGroupCustom_propIsEnum = Object.prototype.propertyIsEnumerable;
var AccordionGroupCustom_defNormalProp = (obj, key, value) => key in obj ? AccordionGroupCustom_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AccordionGroupCustom_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AccordionGroupCustom_hasOwnProp.call(b, prop))
      AccordionGroupCustom_defNormalProp(a, prop, b[prop]);
  if (AccordionGroupCustom_getOwnPropSymbols)
    for (var prop of AccordionGroupCustom_getOwnPropSymbols(b)) {
      if (AccordionGroupCustom_propIsEnum.call(b, prop))
        AccordionGroupCustom_defNormalProp(a, prop, b[prop]);
    }
  return a;
};








const AccordionFooter = (0,styled_components_browser_cjs["default"])(Box.Box)`
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-left: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
`;
const EnhancedGroup = (0,styled_components_browser_cjs["default"])(Box.Box)`
  > div {
    & > * {
      border-radius: unset;
      border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-left: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
    }
    > div {
      > div:first-of-type {
        border-radius: unset;
      }
    }
  }

  > div:first-of-type {
    > div {
      border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
      > div:first-of-type {
        border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
      }
    }

    > div:not([data-strapi-expanded='true']) {
      border-top: 1px solid ${({ theme }) => theme.colors.neutral200};

      &:hover {
        border-top: 1px solid ${({ theme }) => theme.colors.primary600};
      }
    }

    > span {
      border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
      border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({ theme }) => theme.colors.primary600};
  }

  ${({ theme, footer }) => `
    &:not(${footer}) {
      & > *:last-of-type {
        border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
      }
    }
  `}
`;
const AccordionGroupCustom_LabelAction = (0,styled_components_browser_cjs["default"])(Box.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const AccordionGroupCustom = ({ children, footer, label, labelAction, error }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const childrenArray = react.Children.toArray(children).map((child) => {
    return (0,react.cloneElement)(child, { hasErrorMessage: false });
  });
  return /* @__PURE__ */ react.createElement(KeyboardNavigable.KeyboardNavigable, {
    attributeName: "data-strapi-accordion-toggle"
  }, label && /* @__PURE__ */ react.createElement(Flex.Flex, {
    paddingBottom: 1
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    as: "label",
    textColor: "neutral800",
    variant: "pi",
    fontWeight: "bold"
  }, label), labelAction && /* @__PURE__ */ react.createElement(AccordionGroupCustom_LabelAction, {
    paddingLeft: 1
  }, labelAction)), /* @__PURE__ */ react.createElement(EnhancedGroup, {
    footer
  }, childrenArray), footer && /* @__PURE__ */ react.createElement(AccordionFooter, null, footer), error && /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 1
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "danger600"
  }, formatMessage({ id: error.id, defaultMessage: error.id }, AccordionGroupCustom_spreadValues({}, error.values)))));
};
AccordionGroupCustom.defaultProps = {
  error: void 0,
  footer: null,
  label: null,
  labelAction: void 0
};
AccordionGroupCustom.propTypes = {
  children: (prop_types_default()).node.isRequired,
  error: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  footer: (prop_types_default()).node,
  label: (prop_types_default()).string,
  labelAction: (prop_types_default()).node
};
/* harmony default export */ const RepeatableComponent_AccordionGroupCustom = (AccordionGroupCustom);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/index.js




















const TextButtonCustom = (0,styled_components_browser_cjs["default"])(TextButton.TextButton)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`;
const RepeatableComponent = ({
  addRepeatableComponentToField,
  formErrors,
  componentUid,
  componentValue,
  componentValueLength,
  isReadOnly,
  max,
  min,
  name
}) => {
  const toggleNotification = (0,build.useNotification)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const [collapseToOpen, setCollapseToOpen] = (0,react.useState)("");
  const [isDraggingSibling, setIsDraggingSibling] = (0,react.useState)(false);
  const [, drop] = (0,cjs.useDrop)({ accept: ItemTypes.COMPONENT });
  const { getComponentLayout } = hooks_useContentTypeLayout();
  const componentLayoutData = (0,react.useMemo)(() => getComponentLayout(componentUid), [
    componentUid,
    getComponentLayout
  ]);
  const nextTempKey = (0,react.useMemo)(() => {
    return utils_getMaxTempKey(componentValue || []) + 1;
  }, [componentValue]);
  const componentErrorKeys = getComponentErrorKeys(name, formErrors);
  const toggleCollapses = () => {
    setCollapseToOpen("");
  };
  const missingComponentsValue = min - componentValueLength;
  const hasMinError = get_default()(formErrors, name, { id: "" }).id.includes("min");
  const handleClick = (0,react.useCallback)(() => {
    if (!isReadOnly) {
      if (componentValueLength < max) {
        const shouldCheckErrors = hasMinError;
        addRepeatableComponentToField(name, componentUid, shouldCheckErrors);
        setCollapseToOpen(nextTempKey);
      } else if (componentValueLength >= max) {
        toggleNotification({
          type: "info",
          message: { id: utils_getTrad("components.notification.info.maximum-requirement") }
        });
      }
    }
  }, [
    addRepeatableComponentToField,
    componentUid,
    componentValueLength,
    hasMinError,
    isReadOnly,
    max,
    name,
    nextTempKey,
    toggleNotification
  ]);
  let errorMessage = formErrors[name];
  if (hasMinError) {
    errorMessage = {
      id: utils_getTrad("components.DynamicZone.missing-components"),
      defaultMessage: "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",
      values: { number: missingComponentsValue }
    };
  }
  if (componentValueLength === 0) {
    return /* @__PURE__ */ react.createElement(components_ComponentInitializer, {
      error: errorMessage,
      isReadOnly,
      onClick: handleClick
    });
  }
  const doesRepComponentHasChildError = componentErrorKeys.some(
    (error) => error.split(".").length > 1
  );
  if (doesRepComponentHasChildError && !hasMinError) {
    errorMessage = {
      id: utils_getTrad("components.RepeatableComponent.error-message"),
      defaultMessage: "The component(s) contain error(s)"
    };
  }
  return /* @__PURE__ */ react.createElement(Box.Box, {
    hasRadius: true,
    ref: drop
  }, /* @__PURE__ */ react.createElement(RepeatableComponent_AccordionGroupCustom, {
    error: errorMessage,
    footer: /* @__PURE__ */ react.createElement(Flex.Flex, {
      justifyContent: "center",
      height: "48px",
      background: "neutral0"
    }, /* @__PURE__ */ react.createElement(TextButtonCustom, {
      disabled: isReadOnly,
      onClick: handleClick,
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: utils_getTrad("containers.EditView.add.new-entry"),
      defaultMessage: "Add an entry"
    })))
  }, componentValue.map((data, index) => {
    const key = data.__temp_key__;
    const isOpen = collapseToOpen === key;
    const componentFieldName = `${name}.${index}`;
    const hasErrors = componentErrorKeys.includes(componentFieldName);
    return /* @__PURE__ */ react.createElement(RepeatableComponent_DraggedItem, {
      componentFieldName,
      componentUid,
      hasErrors,
      hasMinError,
      isDraggingSibling,
      isOpen,
      isReadOnly,
      key,
      onClickToggle: () => {
        if (isOpen) {
          setCollapseToOpen("");
        } else {
          setCollapseToOpen(key);
        }
      },
      parentName: name,
      schema: componentLayoutData,
      setIsDraggingSibling,
      toggleCollapses
    });
  })));
};
RepeatableComponent.defaultProps = {
  componentValue: null,
  componentValueLength: 0,
  formErrors: {},
  max: Infinity,
  min: 0
};
RepeatableComponent.propTypes = {
  addRepeatableComponentToField: (prop_types_default()).func.isRequired,
  componentUid: (prop_types_default()).string.isRequired,
  componentValue: prop_types_default().oneOfType([(prop_types_default()).array, (prop_types_default()).object]),
  componentValueLength: (prop_types_default()).number,
  formErrors: (prop_types_default()).object,
  isReadOnly: (prop_types_default()).bool.isRequired,
  max: (prop_types_default()).number,
  min: (prop_types_default()).number,
  name: (prop_types_default()).string.isRequired
};
const RepeatableComponent_Memoized = (0,react.memo)(RepeatableComponent);
/* harmony default export */ const components_RepeatableComponent = (RepeatableComponent_utils_connect(RepeatableComponent_Memoized, RepeatableComponent_utils_select));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/utils/connect.js
var FieldComponent_utils_connect_defProp = Object.defineProperty;
var FieldComponent_utils_connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var FieldComponent_utils_connect_hasOwnProp = Object.prototype.hasOwnProperty;
var FieldComponent_utils_connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var FieldComponent_utils_connect_defNormalProp = (obj, key, value) => key in obj ? FieldComponent_utils_connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var FieldComponent_utils_connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (FieldComponent_utils_connect_hasOwnProp.call(b, prop))
      FieldComponent_utils_connect_defNormalProp(a, prop, b[prop]);
  if (FieldComponent_utils_connect_getOwnPropSymbols)
    for (var prop of FieldComponent_utils_connect_getOwnPropSymbols(b)) {
      if (FieldComponent_utils_connect_propIsEnum.call(b, prop))
        FieldComponent_utils_connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function FieldComponent_utils_connect_connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select(props);
    return /* @__PURE__ */ react.createElement(WrappedComponent, FieldComponent_utils_connect_spreadValues(FieldComponent_utils_connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const FieldComponent_utils_connect = (FieldComponent_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/utils/select.js





function FieldComponent_utils_select_useSelect({ isFromDynamicZone, name }) {
  const {
    addNonRepeatableComponentToField,
    createActionAllowedFields,
    isCreatingEntry,
    modifiedData,
    removeComponentFromField,
    readActionAllowedFields,
    updateActionAllowedFields,
    formErrors
  } = (0,build.useCMEditViewDataManager)();
  const { contentType } = hooks_useContentTypeLayout();
  const allDynamicZoneFields = (0,react.useMemo)(() => {
    const attributes = (0,lodash.get)(contentType, ["attributes"], {});
    const dynamicZoneFields = Object.keys(attributes).filter((attrName) => {
      return (0,lodash.get)(attributes, [attrName, "type"], "") === "dynamiczone";
    });
    return dynamicZoneFields;
  }, [contentType]);
  const allowedFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
  }, [isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const componentValue = (0,lodash.get)(modifiedData, name, null);
  const compoName = (0,react.useMemo)(() => {
    return utils_getFieldName(name);
  }, [name]);
  const hasChildrenAllowedFields = (0,react.useMemo)(() => {
    if (isFromDynamicZone && isCreatingEntry) {
      return true;
    }
    const includedDynamicZoneFields = allowedFields.filter((name2) => name2 === compoName[0]);
    if (includedDynamicZoneFields.length > 0) {
      return true;
    }
    const relatedChildrenAllowedFields = allowedFields.map((fieldName) => {
      return fieldName.split(".");
    }).filter((fieldName) => {
      if (fieldName.length < compoName.length) {
        return false;
      }
      const joined = (0,lodash.take)(fieldName, compoName.length).join(".");
      return joined === compoName.join(".");
    });
    return relatedChildrenAllowedFields.length > 0;
  }, [isFromDynamicZone, isCreatingEntry, allowedFields, compoName]);
  const hasChildrenReadableFields = (0,react.useMemo)(() => {
    if (isFromDynamicZone) {
      return true;
    }
    if (allDynamicZoneFields.includes(compoName[0])) {
      return true;
    }
    const allowedFields2 = isCreatingEntry ? [] : readActionAllowedFields;
    const relatedChildrenAllowedFields = allowedFields2.map((fieldName) => {
      return fieldName.split(".");
    }).filter((fieldName) => {
      if (fieldName.length < compoName.length) {
        return false;
      }
      const joined = (0,lodash.take)(fieldName, compoName.length).join(".");
      return joined === compoName.join(".");
    });
    return relatedChildrenAllowedFields.length > 0;
  }, [
    isFromDynamicZone,
    allDynamicZoneFields,
    compoName,
    isCreatingEntry,
    readActionAllowedFields
  ]);
  const isReadOnly = (0,react.useMemo)(() => {
    if (isCreatingEntry) {
      return false;
    }
    if (hasChildrenAllowedFields) {
      return false;
    }
    return hasChildrenReadableFields;
  }, [hasChildrenAllowedFields, hasChildrenReadableFields, isCreatingEntry]);
  return {
    addNonRepeatableComponentToField,
    formErrors,
    hasChildrenAllowedFields,
    hasChildrenReadableFields,
    isCreatingEntry,
    isReadOnly,
    removeComponentFromField,
    componentValue
  };
}
/* harmony default export */ const FieldComponent_utils_select = (FieldComponent_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/Label.js







const FieldComponent_Label_LabelAction = (0,styled_components_browser_cjs["default"])(Box.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const FieldComponent_Label_Label = ({
  intlLabel,
  id,
  labelAction,
  name,
  numberOfEntries,
  showNumberOfEntries,
  required
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = (intlLabel == null ? void 0 : intlLabel.id) ? formatMessage(intlLabel) : name;
  return /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 1
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800",
    htmlFor: id || name,
    variant: "pi",
    fontWeight: "bold",
    as: "label"
  }, label, showNumberOfEntries && /* @__PURE__ */ react.createElement(react.Fragment, null, "\xA0(", numberOfEntries, ")"), required && /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "danger600"
  }, "*")), labelAction && /* @__PURE__ */ react.createElement(FieldComponent_Label_LabelAction, {
    paddingLeft: 1
  }, labelAction)));
};
FieldComponent_Label_Label.defaultProps = {
  id: void 0,
  labelAction: void 0,
  numberOfEntries: 0,
  required: false,
  showNumberOfEntries: false
};
FieldComponent_Label_Label.propTypes = {
  id: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  numberOfEntries: (prop_types_default()).number,
  required: (prop_types_default()).bool,
  showNumberOfEntries: (prop_types_default()).bool
};
/* harmony default export */ const FieldComponent_Label = (FieldComponent_Label_Label);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/index.js


















const FieldComponent = ({
  addNonRepeatableComponentToField,
  componentUid,
  intlLabel,
  isCreatingEntry,
  isFromDynamicZone,
  isRepeatable,
  isNested,
  labelAction,
  max,
  min,
  name,
  hasChildrenAllowedFields,
  hasChildrenReadableFields,
  isReadOnly,
  componentValue,
  removeComponentFromField,
  required
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const componentValueLength = size_default()(componentValue);
  const isInitialized = componentValue !== null || isFromDynamicZone;
  const showResetComponent = !isRepeatable && isInitialized && !isFromDynamicZone && hasChildrenAllowedFields;
  if (!hasChildrenAllowedFields && isCreatingEntry) {
    return /* @__PURE__ */ react.createElement(build.NotAllowedInput, {
      labelAction,
      intlLabel,
      name
    });
  }
  if (!hasChildrenAllowedFields && !isCreatingEntry && !hasChildrenReadableFields) {
    return /* @__PURE__ */ react.createElement(build.NotAllowedInput, {
      labelAction,
      intlLabel,
      name
    });
  }
  const handleClickAddNonRepeatableComponentToField = () => {
    addNonRepeatableComponentToField(name, componentUid);
  };
  return /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, intlLabel && /* @__PURE__ */ react.createElement(FieldComponent_Label, {
    intlLabel,
    labelAction,
    name,
    numberOfEntries: componentValueLength,
    showNumberOfEntries: isRepeatable,
    required
  }), showResetComponent && /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    label: formatMessage({
      id: utils_getTrad("components.reset-entry"),
      defaultMessage: "Reset Entry"
    }),
    icon: /* @__PURE__ */ react.createElement((Trash_default()), null),
    noBorder: true,
    onClick: () => {
      removeComponentFromField(name, componentUid);
    }
  })), /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, !isRepeatable && !isInitialized && /* @__PURE__ */ react.createElement(components_ComponentInitializer, {
    isReadOnly,
    onClick: handleClickAddNonRepeatableComponentToField
  }), !isRepeatable && isInitialized && /* @__PURE__ */ react.createElement(components_NonRepeatableComponent, {
    componentUid,
    isFromDynamicZone,
    isNested,
    name
  }), isRepeatable && /* @__PURE__ */ react.createElement(components_RepeatableComponent, {
    componentValue,
    componentValueLength,
    componentUid,
    isReadOnly,
    max,
    min,
    name
  })));
};
FieldComponent.defaultProps = {
  componentValue: null,
  hasChildrenAllowedFields: false,
  hasChildrenReadableFields: false,
  intlLabel: void 0,
  isFromDynamicZone: false,
  isReadOnly: false,
  isRepeatable: false,
  isNested: false,
  labelAction: void 0,
  max: Infinity,
  min: -Infinity,
  required: false
};
FieldComponent.propTypes = {
  addNonRepeatableComponentToField: (prop_types_default()).func.isRequired,
  componentUid: (prop_types_default()).string.isRequired,
  componentValue: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array]),
  hasChildrenAllowedFields: (prop_types_default()).bool,
  hasChildrenReadableFields: (prop_types_default()).bool,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isFromDynamicZone: (prop_types_default()).bool,
  isReadOnly: (prop_types_default()).bool,
  isRepeatable: (prop_types_default()).bool,
  isNested: (prop_types_default()).bool,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  labelAction: (prop_types_default()).element,
  max: (prop_types_default()).number,
  min: (prop_types_default()).number,
  name: (prop_types_default()).string.isRequired,
  removeComponentFromField: (prop_types_default()).func.isRequired,
  required: (prop_types_default()).bool
};
const FieldComponent_Memoized = (0,react.memo)(FieldComponent, (react_fast_compare_default()));
/* harmony default export */ const components_FieldComponent = (FieldComponent_utils_connect(FieldComponent_Memoized, FieldComponent_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/Component/Rectangle.js




const Rectangle_StyledBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  width: ${({ theme }) => theme.spaces[2]};
  height: ${({ theme }) => theme.spaces[4]};
`;
const Rectangle = () => {
  return /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Rectangle_StyledBox, {
    background: "neutral200"
  }));
};
/* harmony default export */ const Component_Rectangle = (Rectangle);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/Component/index.js


















const ActionStack = (0,styled_components_browser_cjs["default"])(Stack.Stack)`
  svg {
    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
    }
  }
`;
const IconButtonCustom = (0,styled_components_browser_cjs["default"])(IconButton.IconButton)`
  background-color: transparent;
`;
const Component_StyledBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  > div:first-child {
    box-shadow: ${({ theme }) => theme.shadows.tableShadow};
  }
`;
const AccordionContentRadius = (0,styled_components_browser_cjs["default"])(Box.Box)`
  border-radius: 0 0 ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[1]};
`;
const Component = ({
  componentUid,
  formErrors,
  index,
  isOpen,
  isFieldAllowed,
  moveComponentDown,
  moveComponentUp,
  name,
  onToggle,
  removeComponentFromDynamicZone,
  showDownIcon,
  showUpIcon
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { getComponentLayout } = hooks_useContentTypeLayout();
  const { icon, friendlyName } = (0,react.useMemo)(() => {
    const {
      info: { icon: icon2, displayName }
    } = getComponentLayout(componentUid);
    return { friendlyName: displayName, icon: icon2 };
  }, [componentUid, getComponentLayout]);
  const handleMoveComponentDown = () => moveComponentDown(name, index);
  const handleMoveComponentUp = () => moveComponentUp(name, index);
  const handleRemove = () => removeComponentFromDynamicZone(name, index);
  const downLabel = formatMessage({
    id: utils_getTrad("components.DynamicZone.move-down-label"),
    defaultMessage: "Move component down"
  });
  const upLabel = formatMessage({
    id: utils_getTrad("components.DynamicZone.move-up-label"),
    defaultMessage: "Move component down"
  });
  const deleteLabel = formatMessage(
    {
      id: utils_getTrad("components.DynamicZone.delete-label"),
      defaultMessage: "Delete {name}"
    },
    { name: friendlyName }
  );
  const formErrorsKeys = Object.keys(formErrors);
  const fieldsErrors = formErrorsKeys.filter((errorKey) => {
    const errorKeysArray = errorKey.split(".");
    if (`${errorKeysArray[0]}.${errorKeysArray[1]}` === `${name}.${index}`) {
      return true;
    }
    return false;
  });
  let errorMessage;
  if (fieldsErrors.length > 0) {
    errorMessage = formatMessage({
      id: utils_getTrad("components.DynamicZone.error-message"),
      defaultMessage: "The component contains error(s)"
    });
  }
  return /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Component_Rectangle, null), /* @__PURE__ */ react.createElement(Component_StyledBox, {
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Accordion.Accordion, {
    expanded: isOpen,
    onToggle: () => onToggle(index),
    size: "S",
    error: errorMessage
  }, /* @__PURE__ */ react.createElement(Accordion.AccordionToggle, {
    startIcon: /* @__PURE__ */ react.createElement(index_es/* FontAwesomeIcon */.G, {
      icon
    }),
    action: /* @__PURE__ */ react.createElement(ActionStack, {
      horizontal: true,
      spacing: 0,
      expanded: isOpen
    }, showDownIcon && /* @__PURE__ */ react.createElement(IconButtonCustom, {
      noBorder: true,
      label: downLabel,
      onClick: handleMoveComponentDown,
      icon: /* @__PURE__ */ react.createElement((ArrowDown_default()), null)
    }), showUpIcon && /* @__PURE__ */ react.createElement(IconButtonCustom, {
      noBorder: true,
      label: upLabel,
      onClick: handleMoveComponentUp,
      icon: /* @__PURE__ */ react.createElement((ArrowUp_default()), null)
    }), isFieldAllowed && /* @__PURE__ */ react.createElement(IconButtonCustom, {
      noBorder: true,
      label: deleteLabel,
      onClick: handleRemove,
      icon: /* @__PURE__ */ react.createElement((Trash_default()), null)
    })),
    title: friendlyName,
    togglePosition: "left"
  }), /* @__PURE__ */ react.createElement(Accordion.AccordionContent, null, /* @__PURE__ */ react.createElement(AccordionContentRadius, {
    background: "neutral0"
  }, /* @__PURE__ */ react.createElement(FocusTrap.FocusTrap, {
    onEscape: () => onToggle(index)
  }, /* @__PURE__ */ react.createElement(components_FieldComponent, {
    componentUid,
    icon,
    name: `${name}.${index}`,
    isFromDynamicZone: true
  })))))));
};
Component.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  formErrors: (prop_types_default()).object.isRequired,
  index: (prop_types_default()).number.isRequired,
  isFieldAllowed: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  moveComponentDown: (prop_types_default()).func.isRequired,
  moveComponentUp: (prop_types_default()).func.isRequired,
  name: (prop_types_default()).string.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  removeComponentFromDynamicZone: (prop_types_default()).func.isRequired,
  showDownIcon: (prop_types_default()).bool.isRequired,
  showUpIcon: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_Component = ((0,react.memo)(Component, (react_fast_compare_default())));

// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(7739);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/ComponentPicker/Category/ComponentCard/index.js









const StyledFontAwesomeIcon = (0,styled_components_browser_cjs["default"])(index_es/* FontAwesomeIcon */.G)`
  width: ${(0,build.pxToRem)(32)} !important;
  height: ${(0,build.pxToRem)(32)} !important;
  padding: ${(0,build.pxToRem)(9)};
  border-radius: ${(0,build.pxToRem)(64)};
  background: ${({ theme }) => theme.colors.neutral150};
  path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const ComponentBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  flex-shrink: 0;
  height: ${(0,build.pxToRem)(84)};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${StyledFontAwesomeIcon} {
      background: ${({ theme }) => theme.colors.primary200};
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }

    ${Typography.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
function ComponentCard({ componentUid, intlLabel, icon, onClick }) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleClick = () => {
    onClick(componentUid);
  };
  return /* @__PURE__ */ react.createElement("button", {
    type: "button",
    onClick: handleClick
  }, /* @__PURE__ */ react.createElement(ComponentBox, {
    borderRadius: "borderRadius"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1,
    style: { justifyContent: "center", alignItems: "center" }
  }, /* @__PURE__ */ react.createElement(StyledFontAwesomeIcon, {
    icon
  }), /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    textColor: "neutral600"
  }, formatMessage(intlLabel)))));
}
ComponentCard.defaultProps = {
  icon: "dice-d6",
  onClick: () => {
  }
};
ComponentCard.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired,
  icon: (prop_types_default()).string,
  onClick: (prop_types_default()).func
};
/* harmony default export */ const Category_ComponentCard = (ComponentCard);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/ComponentPicker/Category/index.js







const Category_Grid = styled_components_browser_cjs["default"].div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140 / 16}rem);
  grid-gap: ${({ theme }) => theme.spaces[1]};
`;
const Category = ({ category, components, isOdd, isOpen, onAddComponent, onToggle }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleToggle = () => {
    onToggle(category);
  };
  return /* @__PURE__ */ react.createElement(Accordion.Accordion, {
    expanded: isOpen,
    onToggle: handleToggle,
    size: "S"
  }, /* @__PURE__ */ react.createElement(Accordion.AccordionToggle, {
    variant: isOdd ? "primary" : "secondary",
    title: formatMessage({ id: category, defaultMessage: category }),
    togglePosition: "left"
  }), /* @__PURE__ */ react.createElement(Accordion.AccordionContent, null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 3,
    paddingRight: 3
  }, /* @__PURE__ */ react.createElement(Category_Grid, null, components.map(({ componentUid, info: { displayName, icon } }) => {
    return /* @__PURE__ */ react.createElement(Category_ComponentCard, {
      key: componentUid,
      componentUid,
      intlLabel: { id: displayName, defaultMessage: displayName },
      icon,
      onClick: onAddComponent
    });
  })))));
};
Category.propTypes = {
  category: (prop_types_default()).string.isRequired,
  components: (prop_types_default()).array.isRequired,
  isOdd: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  onAddComponent: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ComponentPicker_Category = (Category);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/ComponentPicker/index.js











const ComponentPicker = ({ components, isOpen, onClickAddComponent }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { getComponentLayout } = hooks_useContentTypeLayout();
  const [categoryToOpen, setCategoryToOpen] = (0,react.useState)("");
  const dynamicComponentCategories = (0,react.useMemo)(() => {
    const componentsWithInfo = components.map((componentUid) => {
      const { category, info } = getComponentLayout(componentUid);
      return { componentUid, category, info };
    });
    const categories = groupBy_default()(componentsWithInfo, "category");
    return Object.keys(categories).reduce((acc, current) => {
      acc.push({ category: current, components: categories[current] });
      return acc;
    }, []);
  }, [components, getComponentLayout]);
  (0,react.useEffect)(() => {
    if (isOpen && dynamicComponentCategories.length) {
      setCategoryToOpen(dynamicComponentCategories[0].category);
    }
  }, [isOpen, dynamicComponentCategories]);
  const handleAddComponentToDz = (0,react.useCallback)(
    (componentUid) => {
      onClickAddComponent(componentUid);
      setCategoryToOpen("");
    },
    [onClickAddComponent]
  );
  const handleClickToggle = (0,react.useCallback)(
    (categoryName) => {
      const nextCategoryToOpen = categoryToOpen === categoryName ? "" : categoryName;
      setCategoryToOpen(nextCategoryToOpen);
    },
    [categoryToOpen]
  );
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 6
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 5,
    paddingRight: 5,
    background: "neutral0",
    shadow: "tableShadow",
    borderColor: "neutral150",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral600"
  }, formatMessage({
    id: utils_getTrad("components.DynamicZone.ComponentPicker-label"),
    defaultMessage: "Pick one component"
  }))), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2
  }, /* @__PURE__ */ react.createElement(KeyboardNavigable.KeyboardNavigable, {
    attributeName: "data-strapi-accordion-toggle"
  }, dynamicComponentCategories.map(({ category, components: components2 }, index) => {
    return /* @__PURE__ */ react.createElement(ComponentPicker_Category, {
      key: category,
      category,
      components: components2,
      isOdd: index % 2 === 1,
      isOpen: category === categoryToOpen,
      onAddComponent: handleAddComponentToDz,
      onToggle: handleClickToggle
    });
  })))));
};
ComponentPicker.propTypes = {
  components: (prop_types_default()).array.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  onClickAddComponent: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ComponentPicker = ((0,react.memo)(ComponentPicker));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/index.js
var DynamicZone_defProp = Object.defineProperty;
var DynamicZone_defProps = Object.defineProperties;
var DynamicZone_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DynamicZone_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DynamicZone_hasOwnProp = Object.prototype.hasOwnProperty;
var DynamicZone_propIsEnum = Object.prototype.propertyIsEnumerable;
var DynamicZone_defNormalProp = (obj, key, value) => key in obj ? DynamicZone_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DynamicZone_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DynamicZone_hasOwnProp.call(b, prop))
      DynamicZone_defNormalProp(a, prop, b[prop]);
  if (DynamicZone_getOwnPropSymbols)
    for (var prop of DynamicZone_getOwnPropSymbols(b)) {
      if (DynamicZone_propIsEnum.call(b, prop))
        DynamicZone_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DynamicZone_spreadProps = (a, b) => DynamicZone_defProps(a, DynamicZone_getOwnPropDescs(b));














const createCollapses = (arrayLength) => Array.from({ length: arrayLength }).map(() => ({ isOpen: false }));
const DynamicZone = ({
  name,
  addComponentToDynamicZone,
  formErrors,
  isCreatingEntry,
  isFieldAllowed,
  isFieldReadable,
  labelAction,
  moveComponentUp,
  moveComponentDown,
  removeComponentFromDynamicZone,
  dynamicDisplayedComponents,
  fieldSchema,
  metadatas
}) => {
  const toggleNotification = (0,build.useNotification)();
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const [shouldOpenAddedComponent, setShouldOpenAddedComponent] = (0,react.useState)(false);
  const dynamicDisplayedComponentsLength = dynamicDisplayedComponents.length;
  const intlDescription = metadatas.description ? { id: metadatas.description, defaultMessage: metadatas.description } : null;
  const [componentCollapses, setComponentsCollapses] = (0,react.useState)(
    createCollapses(dynamicDisplayedComponentsLength)
  );
  (0,react.useEffect)(() => {
    setComponentsCollapses(createCollapses(dynamicDisplayedComponentsLength));
  }, [dynamicDisplayedComponentsLength]);
  (0,react.useEffect)(() => {
    if (shouldOpenAddedComponent) {
      setComponentsCollapses(
        (prev) => prev.map((collapse, index) => {
          if (index === prev.length - 1) {
            return DynamicZone_spreadProps(DynamicZone_spreadValues({}, collapse), { isOpen: true });
          }
          return collapse;
        })
      );
      setShouldOpenAddedComponent(false);
    }
  }, [shouldOpenAddedComponent]);
  const { max = Infinity, min = -Infinity } = fieldSchema;
  const dynamicZoneErrors = (0,react.useMemo)(() => {
    return Object.keys(formErrors).filter((key) => {
      return key === name;
    }).map((key) => formErrors[key]);
  }, [formErrors, name]);
  const dynamicZoneAvailableComponents = (0,react.useMemo)(() => fieldSchema.components || [], [fieldSchema]);
  const missingComponentNumber = min - dynamicDisplayedComponentsLength;
  const hasError = dynamicZoneErrors.length > 0;
  const hasMinError = dynamicZoneErrors.length > 0 && get_default()(dynamicZoneErrors, [0, "id"], "").includes("min");
  const hasMaxError = hasError && get_default()(dynamicZoneErrors, [0, "id"], "") === "components.Input.error.validation.max";
  const handleAddComponent = (0,react.useCallback)(
    (componentUid) => {
      setIsOpen(false);
      addComponentToDynamicZone(name, componentUid, hasError);
      setShouldOpenAddedComponent(true);
    },
    [addComponentToDynamicZone, hasError, name]
  );
  const handleClickOpenPicker = () => {
    if (dynamicDisplayedComponentsLength < max) {
      setIsOpen((prev) => !prev);
    } else {
      toggleNotification({
        type: "info",
        message: { id: utils_getTrad("components.notification.info.maximum-requirement") }
      });
    }
  };
  const handleToggleComponent = (indexToToggle) => {
    setComponentsCollapses(
      (prev) => prev.map(({ isOpen: isOpen2 }, index) => {
        if (index === indexToToggle) {
          return { isOpen: !isOpen2 };
        }
        return { isOpen: isOpen2 };
      })
    );
  };
  const handleMoveComponentDown = (name2, currentIndex) => {
    moveComponentDown(name2, currentIndex);
    setComponentsCollapses((prev) => {
      return prev.map(({ isOpen: isOpen2 }, index, refArray) => {
        if (index === currentIndex + 1) {
          return { isOpen: refArray[currentIndex].isOpen };
        }
        if (index === currentIndex) {
          return { isOpen: refArray[index + 1].isOpen };
        }
        return { isOpen: isOpen2 };
      });
    });
  };
  const handleMoveComponentUp = (name2, currentIndex) => {
    moveComponentUp(name2, currentIndex);
    setComponentsCollapses((prev) => {
      return prev.map(({ isOpen: isOpen2 }, index, refArray) => {
        if (index === currentIndex - 1) {
          return { isOpen: refArray[currentIndex].isOpen };
        }
        if (index === currentIndex) {
          return { isOpen: refArray[index - 1].isOpen };
        }
        return { isOpen: isOpen2 };
      });
    });
  };
  const handleRemoveComponent = (name2, currentIndex) => {
    removeComponentFromDynamicZone(name2, currentIndex);
  };
  if (!isFieldAllowed && isCreatingEntry) {
    return /* @__PURE__ */ react.createElement(build.NotAllowedInput, {
      description: intlDescription,
      intlLabel: { id: metadatas.label, defaultMessage: metadatas.label },
      labelAction,
      name
    });
  }
  if (!isFieldAllowed && !isFieldReadable && !isCreatingEntry) {
    return /* @__PURE__ */ react.createElement(build.NotAllowedInput, {
      description: intlDescription,
      intlLabel: { id: metadatas.label, defaultMessage: metadatas.label },
      labelAction,
      name
    });
  }
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 6
  }, dynamicDisplayedComponentsLength > 0 && /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(components_DzLabel, {
    intlDescription,
    label: metadatas.label,
    labelAction,
    name,
    numberOfComponents: dynamicDisplayedComponentsLength,
    required: fieldSchema.required || false
  }), dynamicDisplayedComponents.map((componentUid, index) => {
    var _a;
    const showDownIcon = isFieldAllowed && dynamicDisplayedComponentsLength > 0 && index < dynamicDisplayedComponentsLength - 1;
    const showUpIcon = isFieldAllowed && dynamicDisplayedComponentsLength > 0 && index > 0;
    const isOpen2 = ((_a = componentCollapses[index]) == null ? void 0 : _a.isOpen) || false;
    return /* @__PURE__ */ react.createElement(components_Component, {
      componentUid,
      formErrors,
      key: index,
      index,
      isOpen: isOpen2,
      isFieldAllowed,
      moveComponentDown: handleMoveComponentDown,
      moveComponentUp: handleMoveComponentUp,
      onToggle: handleToggleComponent,
      name,
      removeComponentFromDynamicZone: handleRemoveComponent,
      showDownIcon,
      showUpIcon
    });
  })), /* @__PURE__ */ react.createElement(components_AddComponentButton, {
    hasError,
    hasMaxError,
    hasMinError,
    isDisabled: !isFieldAllowed,
    label: metadatas.label,
    missingComponentNumber,
    isOpen,
    name,
    onClick: handleClickOpenPicker
  }), /* @__PURE__ */ react.createElement(components_ComponentPicker, {
    isOpen,
    components: dynamicZoneAvailableComponents,
    onClickAddComponent: handleAddComponent
  }));
};
DynamicZone.defaultProps = {
  dynamicDisplayedComponents: [],
  fieldSchema: {
    max: Infinity,
    min: -Infinity
  },
  labelAction: null
};
DynamicZone.propTypes = {
  addComponentToDynamicZone: (prop_types_default()).func.isRequired,
  dynamicDisplayedComponents: (prop_types_default()).array,
  fieldSchema: prop_types_default().shape({
    components: (prop_types_default()).array.isRequired,
    max: (prop_types_default()).number,
    min: (prop_types_default()).number,
    required: (prop_types_default()).bool
  }),
  formErrors: (prop_types_default()).object.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isFieldAllowed: (prop_types_default()).bool.isRequired,
  isFieldReadable: (prop_types_default()).bool.isRequired,
  labelAction: (prop_types_default()).element,
  metadatas: prop_types_default().shape({
    description: (prop_types_default()).string,
    label: (prop_types_default()).string
  }).isRequired,
  moveComponentUp: (prop_types_default()).func.isRequired,
  moveComponentDown: (prop_types_default()).func.isRequired,
  name: (prop_types_default()).string.isRequired,
  removeComponentFromDynamicZone: (prop_types_default()).func.isRequired
};
const DynamicZone_Memoized = (0,react.memo)(DynamicZone, (react_fast_compare_default()));
/* harmony default export */ const components_DynamicZone = (utils_connect(DynamicZone_Memoized, utils_select));


// EXTERNAL MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/constants.js
var crudReducer_constants = __webpack_require__(46781);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/actions.js

const getData = () => {
  return {
    type: crudReducer_constants/* GET_DATA */.ZA
  };
};
const getDataSucceeded = (data) => ({
  type: crudReducer_constants/* GET_DATA_SUCCEEDED */.Id,
  data
});
const initForm = (rawQuery, isSingleType = false) => ({
  type: crudReducer_constants/* INIT_FORM */.TP,
  rawQuery,
  isSingleType
});
const actions_resetProps = () => ({ type: crudReducer_constants/* RESET_PROPS */.c2 });
const setDataStructures = (componentsDataStructure, contentTypeDataStructure) => ({
  type: crudReducer_constants/* SET_DATA_STRUCTURES */.w7,
  componentsDataStructure,
  contentTypeDataStructure
});
const setStatus = (status) => ({
  type: crudReducer_constants/* SET_STATUS */.d0,
  status
});
const submitSucceeded = (data) => ({
  type: crudReducer_constants/* SUBMIT_SUCCEEDED */.t9,
  data
});

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/selectors.js
const selectCrudReducer = (state) => state["content-manager_editViewCrudReducer"];
/* harmony default export */ const crudReducer_selectors = (selectCrudReducer);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/CollectionTypeFormWrapper/index.js
/* provided dependency */ var CollectionTypeFormWrapper_console = __webpack_require__(25108);
var CollectionTypeFormWrapper_defProp = Object.defineProperty;
var CollectionTypeFormWrapper_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CollectionTypeFormWrapper_hasOwnProp = Object.prototype.hasOwnProperty;
var CollectionTypeFormWrapper_propIsEnum = Object.prototype.propertyIsEnumerable;
var CollectionTypeFormWrapper_defNormalProp = (obj, key, value) => key in obj ? CollectionTypeFormWrapper_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CollectionTypeFormWrapper_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CollectionTypeFormWrapper_hasOwnProp.call(b, prop))
      CollectionTypeFormWrapper_defNormalProp(a, prop, b[prop]);
  if (CollectionTypeFormWrapper_getOwnPropSymbols)
    for (var prop of CollectionTypeFormWrapper_getOwnPropSymbols(b)) {
      if (CollectionTypeFormWrapper_propIsEnum.call(b, prop))
        CollectionTypeFormWrapper_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var CollectionTypeFormWrapper_async = (__this, __arguments, generator) => {
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













const CollectionTypeFormWrapper = ({ allLayoutData, children, slug, id, origin }) => {
  const toggleNotification = (0,build.useNotification)();
  const { setCurrentStep } = (0,build.useGuidedTour)();
  const { trackUsage } = (0,build.useTracking)();
  const { push, replace } = (0,react_router_dom_min.useHistory)();
  const [{ rawQuery }] = (0,build.useQueryParams)();
  const dispatch = (0,lib.useDispatch)();
  const {
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isLoading,
    status
  } = (0,lib.useSelector)(crudReducer_selectors);
  const redirectionLink = hooks_useFindRedirectionLink(slug);
  const isMounted = (0,react.useRef)(true);
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const allLayoutDataRef = (0,react.useRef)(allLayoutData);
  const isCreatingEntry = id === null;
  const requestURL = (0,react.useMemo)(() => {
    if (isCreatingEntry && !origin) {
      return null;
    }
    return utils_getRequestUrl(`collection-types/${slug}/${origin || id}`);
  }, [slug, id, isCreatingEntry, origin]);
  const cleanClonedData = (0,react.useCallback)(
    (data2) => {
      if (!origin) {
        return data2;
      }
      const cleaned = (0,build.contentManagementUtilRemoveFieldsFromData)(
        data2,
        allLayoutDataRef.current.contentType,
        allLayoutDataRef.current.components
      );
      return cleaned;
    },
    [origin]
  );
  const cleanReceivedData = (0,react.useCallback)((data2) => {
    const cleaned = utils_removePasswordFieldsFromData(
      data2,
      allLayoutDataRef.current.contentType,
      allLayoutDataRef.current.components
    );
    return (0,build.formatContentTypeData)(
      cleaned,
      allLayoutDataRef.current.contentType,
      allLayoutDataRef.current.components
    );
  }, []);
  (0,react.useEffect)(() => {
    const componentsDataStructure2 = Object.keys(allLayoutData.components).reduce((acc, current) => {
      const defaultComponentForm = utils_createDefaultForm(
        get_default()(allLayoutData, ["components", current, "attributes"], {}),
        allLayoutData.components
      );
      acc[current] = (0,build.formatContentTypeData)(
        defaultComponentForm,
        allLayoutData.components[current],
        allLayoutData.components
      );
      return acc;
    }, {});
    const contentTypeDataStructure2 = utils_createDefaultForm(
      allLayoutData.contentType.attributes,
      allLayoutData.components
    );
    const contentTypeDataStructureFormatted = (0,build.formatContentTypeData)(
      contentTypeDataStructure2,
      allLayoutData.contentType,
      allLayoutData.components
    );
    dispatch(setDataStructures(componentsDataStructure2, contentTypeDataStructureFormatted));
  }, [allLayoutData, dispatch]);
  (0,react.useEffect)(() => {
    return () => {
      dispatch(actions_resetProps());
    };
  }, [dispatch]);
  (0,react.useEffect)(() => {
    const CancelToken = (axios_default()).CancelToken;
    const source = CancelToken.source();
    const fetchData = (source2) => CollectionTypeFormWrapper_async(void 0, null, function* () {
      dispatch(getData());
      try {
        const { data: data2 } = yield utils/* axiosInstance.get */.be.get(requestURL, { cancelToken: source2.token });
        dispatch(getDataSucceeded(cleanReceivedData(cleanClonedData(data2))));
      } catch (err) {
        if (axios_default().isCancel(err)) {
          return;
        }
        CollectionTypeFormWrapper_console.error(err);
        const resStatus = get_default()(err, "response.status", null);
        if (resStatus === 404) {
          push(redirectionLink);
          return;
        }
        if (resStatus === 403) {
          toggleNotification({
            type: "info",
            message: { id: utils_getTrad("permissions.not-allowed.update") }
          });
          push(redirectionLink);
        }
      }
    });
    const init = () => CollectionTypeFormWrapper_async(void 0, null, function* () {
      yield dispatch(getData());
      yield dispatch(initForm(rawQuery));
    });
    if (!isMounted.current) {
      return () => {
      };
    }
    if (requestURL) {
      fetchData(source);
    } else {
      init();
    }
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [
    cleanClonedData,
    cleanReceivedData,
    push,
    requestURL,
    dispatch,
    rawQuery,
    redirectionLink,
    toggleNotification
  ]);
  const displayErrors = (0,react.useCallback)(
    (err) => {
      const errorPayload = err.response.data;
      let errorMessage = get_default()(errorPayload, ["error", "message"], "Bad Request");
      if (Array.isArray(errorMessage)) {
        errorMessage = get_default()(errorMessage, ["0", "messages", "0", "id"]);
      }
      if (typeof errorMessage === "string") {
        toggleNotification({ type: "warning", message: errorMessage });
      }
    },
    [toggleNotification]
  );
  const onDelete = (0,react.useCallback)(
    (trackerProperty) => CollectionTypeFormWrapper_async(void 0, null, function* () {
      try {
        trackUsageRef.current("willDeleteEntry", trackerProperty);
        const { data: data2 } = yield utils/* axiosInstance.delete */.be["delete"](
          utils_getRequestUrl(`collection-types/${slug}/${id}`)
        );
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.delete") }
        });
        trackUsageRef.current("didDeleteEntry", trackerProperty);
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotDeleteEntry", CollectionTypeFormWrapper_spreadValues({ error: err }, trackerProperty));
        return Promise.reject(err);
      }
    }),
    [id, slug, toggleNotification]
  );
  const onDeleteSucceeded = (0,react.useCallback)(() => {
    replace(redirectionLink);
  }, [redirectionLink, replace]);
  const onPost = (0,react.useCallback)(
    (body, trackerProperty) => CollectionTypeFormWrapper_async(void 0, null, function* () {
      const endPoint = `${utils_getRequestUrl(`collection-types/${slug}`)}${rawQuery}`;
      try {
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = yield utils/* axiosInstance.post */.be.post(endPoint, body);
        trackUsageRef.current("didCreateEntry", trackerProperty);
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.save") }
        });
        setCurrentStep("contentManager.success");
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        replace(`/content-manager/collectionType/${slug}/${data2.id}${rawQuery}`);
        return Promise.resolve(data2);
      } catch (err) {
        displayErrors(err);
        trackUsageRef.current("didNotCreateEntry", { error: err, trackerProperty });
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    }),
    [
      cleanReceivedData,
      displayErrors,
      replace,
      slug,
      dispatch,
      rawQuery,
      toggleNotification,
      setCurrentStep
    ]
  );
  const onPublish = (0,react.useCallback)(() => CollectionTypeFormWrapper_async(void 0, null, function* () {
    try {
      trackUsageRef.current("willPublishEntry");
      const endPoint = utils_getRequestUrl(`collection-types/${slug}/${id}/actions/publish`);
      dispatch(setStatus("publish-pending"));
      const { data: data2 } = yield utils/* axiosInstance.post */.be.post(endPoint);
      trackUsageRef.current("didPublishEntry");
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      toggleNotification({
        type: "success",
        message: { id: utils_getTrad("success.record.publish") }
      });
      return Promise.resolve(data2);
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }), [cleanReceivedData, displayErrors, id, slug, dispatch, toggleNotification]);
  const onPut = (0,react.useCallback)(
    (body, trackerProperty) => CollectionTypeFormWrapper_async(void 0, null, function* () {
      const endPoint = utils_getRequestUrl(`collection-types/${slug}/${id}`);
      try {
        trackUsageRef.current("willEditEntry", trackerProperty);
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = yield utils/* axiosInstance.put */.be.put(endPoint, body);
        trackUsageRef.current("didEditEntry", { trackerProperty });
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.save") }
        });
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotEditEntry", { error: err, trackerProperty });
        displayErrors(err);
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    }),
    [cleanReceivedData, displayErrors, slug, id, dispatch, toggleNotification]
  );
  const onUnpublish = (0,react.useCallback)(() => CollectionTypeFormWrapper_async(void 0, null, function* () {
    const endPoint = utils_getRequestUrl(`collection-types/${slug}/${id}/actions/unpublish`);
    dispatch(setStatus("unpublish-pending"));
    try {
      trackUsageRef.current("willUnpublishEntry");
      const { data: data2 } = yield utils/* axiosInstance.post */.be.post(endPoint);
      trackUsageRef.current("didUnpublishEntry");
      toggleNotification({
        type: "success",
        message: { id: utils_getTrad("success.record.unpublish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      return Promise.resolve(data2);
    } catch (err) {
      dispatch(setStatus("resolved"));
      displayErrors(err);
      return Promise.reject(err);
    }
  }), [cleanReceivedData, displayErrors, id, slug, dispatch, toggleNotification]);
  return children({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData: isLoading,
    onDelete,
    onDeleteSucceeded,
    onPost,
    onPublish,
    onPut,
    onUnpublish,
    status,
    redirectionLink
  });
};
CollectionTypeFormWrapper.defaultProps = {
  id: null,
  origin: null
};
CollectionTypeFormWrapper.propTypes = {
  allLayoutData: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      apiID: (prop_types_default()).string.isRequired,
      attributes: (prop_types_default()).object.isRequired,
      info: (prop_types_default()).object.isRequired,
      isDisplayed: (prop_types_default()).bool.isRequired,
      kind: (prop_types_default()).string.isRequired,
      layouts: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      options: (prop_types_default()).object.isRequired,
      pluginOptions: (prop_types_default()).object,
      settings: (prop_types_default()).object.isRequired,
      uid: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  children: (prop_types_default()).func.isRequired,
  id: (prop_types_default()).string,
  origin: (prop_types_default()).string,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_CollectionTypeFormWrapper = ((0,react.memo)(CollectionTypeFormWrapper, (react_fast_compare_default())));

// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/unset.js
var unset = __webpack_require__(98601);
var unset_default = /*#__PURE__*/__webpack_require__.n(unset);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/moveFields.js
const moveFields = (initialValue, from, to, value) => {
  const returnedValue = initialValue.slice();
  returnedValue.splice(from, 1);
  returnedValue.splice(to, 0, value);
  return returnedValue;
};
/* harmony default export */ const utils_moveFields = (moveFields);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/cleanData.js



const cleanData = (retrievedData, currentSchema, componentsSchema) => {
  const getType = (schema, attrName) => get_default()(schema, ["attributes", attrName, "type"], "");
  const getOtherInfos = (schema, arr) => get_default()(schema, ["attributes", ...arr], "");
  const recursiveCleanData = (data, schema) => {
    return Object.keys(data).reduce((acc, current) => {
      const attrType = getType(schema, current);
      const value = get_default()(data, current);
      const component = getOtherInfos(schema, [current, "component"]);
      const isRepeatable = getOtherInfos(schema, [current, "repeatable"]);
      let cleanedData;
      switch (attrType) {
        case "json":
          cleanedData = JSON.parse(value);
          break;
        case "time": {
          cleanedData = value;
          if (value && value.split(":").length < 3) {
            cleanedData = `${value}:00`;
          }
          break;
        }
        case "media":
          if (getOtherInfos(schema, [current, "multiple"]) === true) {
            cleanedData = value ? value.filter((file) => !(file instanceof File)) : null;
          } else {
            cleanedData = get_default()(value, 0) instanceof File ? null : get_default()(value, "id", null);
          }
          break;
        case "component":
          if (isRepeatable) {
            cleanedData = value ? value.map((data2) => {
              const subCleanedData = recursiveCleanData(data2, componentsSchema[component]);
              return subCleanedData;
            }) : value;
          } else {
            cleanedData = value ? recursiveCleanData(value, componentsSchema[component]) : value;
          }
          break;
        case "dynamiczone":
          cleanedData = value.map((componentData) => {
            const subCleanedData = recursiveCleanData(
              componentData,
              componentsSchema[componentData.__component]
            );
            return subCleanedData;
          });
          break;
        default:
          cleanedData = helperCleanData(value, "id");
      }
      acc[current] = cleanedData;
      return acc;
    }, {});
  };
  return recursiveCleanData(retrievedData, currentSchema);
};
const helperCleanData = (value, key) => {
  if (isArray_default()(value)) {
    return value.map((obj) => obj[key] ? obj[key] : obj);
  }
  if (isObject_default()(value)) {
    return value[key];
  }
  return value;
};
/* harmony default export */ const utils_cleanData = (cleanData);

// EXTERNAL MODULE: ./node_modules/lodash/isBoolean.js
var isBoolean = __webpack_require__(51584);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(isBoolean);
// EXTERNAL MODULE: ./node_modules/lodash/isNaN.js
var lodash_isNaN = __webpack_require__(7654);
var isNaN_default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN);
// EXTERNAL MODULE: ./node_modules/lodash/toNumber.js
var toNumber = __webpack_require__(14841);
var toNumber_default = /*#__PURE__*/__webpack_require__.n(toNumber);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/isFieldTypeNumber.js
function isFieldTypeNumber(type) {
  return ["integer", "biginteger", "decimal", "float", "number"].includes(type);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/schema.js
var schema_defProp = Object.defineProperty;
var schema_defProps = Object.defineProperties;
var schema_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var schema_getOwnPropSymbols = Object.getOwnPropertySymbols;
var schema_hasOwnProp = Object.prototype.hasOwnProperty;
var schema_propIsEnum = Object.prototype.propertyIsEnumerable;
var schema_defNormalProp = (obj, key, value) => key in obj ? schema_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var schema_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (schema_hasOwnProp.call(b, prop))
      schema_defNormalProp(a, prop, b[prop]);
  if (schema_getOwnPropSymbols)
    for (var prop of schema_getOwnPropSymbols(b)) {
      if (schema_propIsEnum.call(b, prop))
        schema_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var schema_spreadProps = (a, b) => schema_defProps(a, schema_getOwnPropDescs(b));








yup_lib/* addMethod */.kM(yup_lib/* mixed */.nK, "defined", function() {
  return this.test("defined", build.translatedErrors.required, (value) => value !== void 0);
});
yup_lib/* addMethod */.kM(yup_lib/* array */.IX, "notEmptyMin", function(min) {
  return this.test("notEmptyMin", build.translatedErrors.min, (value) => {
    if (isEmpty_default()(value)) {
      return true;
    }
    return value.length >= min;
  });
});
yup_lib/* addMethod */.kM(yup_lib/* string */.Z_, "isInferior", function(message, max) {
  return this.test("isInferior", message, function(value) {
    if (!value) {
      return true;
    }
    if (Number.isNaN(toNumber_default()(value))) {
      return true;
    }
    return toNumber_default()(max) >= toNumber_default()(value);
  });
});
yup_lib/* addMethod */.kM(yup_lib/* string */.Z_, "isSuperior", function(message, min) {
  return this.test("isSuperior", message, function(value) {
    if (!value) {
      return true;
    }
    if (Number.isNaN(toNumber_default()(value))) {
      return true;
    }
    return toNumber_default()(value) >= toNumber_default()(min);
  });
});
const getAttributes = (data) => get_default()(data, ["attributes"], {});
const createYupSchema = (model, { components }, options = { isCreatingEntry: true, isDraft: true, isFromComponent: false }) => {
  const attributes = getAttributes(model);
  return yup_lib/* object */.Ry().shape(
    Object.keys(attributes).reduce((acc, current) => {
      const attribute = attributes[current];
      if (attribute.type !== "relation" && attribute.type !== "component" && attribute.type !== "dynamiczone") {
        const formatted = createYupSchemaAttribute(attribute.type, attribute, options);
        acc[current] = formatted;
      }
      if (attribute.type === "relation") {
        acc[current] = [
          "oneWay",
          "oneToOne",
          "manyToOne",
          "oneToManyMorph",
          "oneToOneMorph"
        ].includes(attribute.relationType) ? yup_lib/* object */.Ry().nullable() : yup_lib/* array */.IX().nullable();
      }
      if (attribute.type === "component") {
        const componentFieldSchema = createYupSchema(
          components[attribute.component],
          {
            components
          },
          schema_spreadProps(schema_spreadValues({}, options), { isFromComponent: true })
        );
        if (attribute.repeatable === true) {
          const { min, max, required } = attribute;
          let componentSchema2 = yup_lib/* lazy */.Vo((value) => {
            let baseSchema = yup_lib/* array */.IX().of(componentFieldSchema);
            if (min) {
              if (required) {
                baseSchema = baseSchema.min(min, build.translatedErrors.min);
              } else if (required !== true && isEmpty_default()(value)) {
                baseSchema = baseSchema.nullable();
              } else {
                baseSchema = baseSchema.min(min, build.translatedErrors.min);
              }
            } else if (required && !options.isDraft) {
              baseSchema = baseSchema.min(1, build.translatedErrors.required);
            }
            if (max) {
              baseSchema = baseSchema.max(max, build.translatedErrors.max);
            }
            return baseSchema;
          });
          acc[current] = componentSchema2;
          return acc;
        }
        const componentSchema = yup_lib/* lazy */.Vo((obj) => {
          if (obj !== void 0) {
            return attribute.required === true && !options.isDraft ? componentFieldSchema.defined() : componentFieldSchema.nullable();
          }
          return attribute.required === true ? yup_lib/* object */.Ry().defined() : yup_lib/* object */.Ry().nullable();
        });
        acc[current] = componentSchema;
        return acc;
      }
      if (attribute.type === "dynamiczone") {
        let dynamicZoneSchema = yup_lib/* array */.IX().of(
          yup_lib/* lazy */.Vo(({ __component }) => {
            return createYupSchema(
              components[__component],
              { components },
              schema_spreadProps(schema_spreadValues({}, options), { isFromComponent: true })
            );
          })
        );
        const { max, min } = attribute;
        if (min) {
          if (attribute.required) {
            dynamicZoneSchema = dynamicZoneSchema.test("min", build.translatedErrors.min, (value) => {
              if (options.isCreatingEntry) {
                return value && value.length >= min;
              }
              if (value === void 0) {
                return true;
              }
              return value !== null && value.length >= min;
            }).test("required", build.translatedErrors.required, (value) => {
              if (options.isCreatingEntry) {
                return value !== null || value !== void 0;
              }
              if (value === void 0) {
                return true;
              }
              return value !== null;
            });
          } else {
            dynamicZoneSchema = dynamicZoneSchema.notEmptyMin(min);
          }
        } else if (attribute.required && !options.isDraft) {
          dynamicZoneSchema = dynamicZoneSchema.test("required", build.translatedErrors.required, (value) => {
            if (options.isCreatingEntry) {
              return value !== null || value !== void 0;
            }
            if (value === void 0) {
              return true;
            }
            return value !== null;
          });
        }
        if (max) {
          dynamicZoneSchema = dynamicZoneSchema.max(max, build.translatedErrors.max);
        }
        acc[current] = dynamicZoneSchema;
      }
      return acc;
    }, {})
  );
};
const createYupSchemaAttribute = (type, validations, options) => {
  let schema = yup_lib/* mixed */.nK();
  if (["string", "uid", "text", "richtext", "email", "password", "enumeration"].includes(type)) {
    schema = yup_lib/* string */.Z_();
  }
  if (type === "json") {
    schema = yup_lib/* mixed */.nK(build.translatedErrors.json).test("isJSON", build.translatedErrors.json, (value) => {
      if (value === void 0) {
        return true;
      }
      try {
        JSON.parse(value);
        return true;
      } catch (err) {
        return false;
      }
    }).nullable();
  }
  if (type === "email") {
    schema = schema.email(build.translatedErrors.email);
  }
  if (["number", "integer", "float", "decimal"].includes(type)) {
    schema = yup_lib/* number */.Rx().transform((cv) => isNaN_default()(cv) ? void 0 : cv).typeError();
  }
  if (type === "biginteger") {
    schema = yup_lib/* string */.Z_().matches(/^-?\d*$/);
  }
  if (["date", "datetime"].includes(type)) {
    schema = yup_lib/* date */.hT();
  }
  Object.keys(validations).forEach((validation) => {
    const validationValue = validations[validation];
    if (!!validationValue || !isBoolean_default()(validationValue) && Number.isInteger(Math.floor(validationValue)) || validationValue === 0) {
      switch (validation) {
        case "required": {
          if (!options.isDraft) {
            if (type === "password" && options.isCreatingEntry) {
              schema = schema.required(build.translatedErrors.required);
            }
            if (type !== "password") {
              if (options.isCreatingEntry) {
                schema = schema.required(build.translatedErrors.required);
              } else {
                schema = schema.test("required", build.translatedErrors.required, (value) => {
                  if (value === void 0 && !options.isFromComponent) {
                    return true;
                  }
                  if (isFieldTypeNumber(type)) {
                    if (value === 0) {
                      return true;
                    }
                    return !!value;
                  }
                  if (type === "boolean") {
                    return value !== null;
                  }
                  if (type === "date" || type === "datetime") {
                    if (typeof value === "string") {
                      return !isEmpty_default()(value);
                    }
                    return !isEmpty_default()(value == null ? void 0 : value.toString());
                  }
                  return !isEmpty_default()(value);
                });
              }
            }
          }
          break;
        }
        case "max": {
          if (type === "biginteger") {
            schema = schema.isInferior(build.translatedErrors.max, validationValue);
          } else {
            schema = schema.max(validationValue, build.translatedErrors.max);
          }
          break;
        }
        case "maxLength":
          schema = schema.max(validationValue, build.translatedErrors.maxLength);
          break;
        case "min": {
          if (type === "biginteger") {
            schema = schema.isSuperior(build.translatedErrors.min, validationValue);
          } else {
            schema = schema.min(validationValue, build.translatedErrors.min);
          }
          break;
        }
        case "minLength": {
          if (!options.isDraft) {
            schema = schema.min(validationValue, build.translatedErrors.minLength);
          }
          break;
        }
        case "regex":
          schema = schema.matches(new RegExp(validationValue), {
            message: build.translatedErrors.regex,
            excludeEmptyString: !validations.required
          });
          break;
        case "lowercase":
          if (["text", "textarea", "email", "string"].includes(type)) {
            schema = schema.strict().lowercase();
          }
          break;
        case "uppercase":
          if (["text", "textarea", "email", "string"].includes(type)) {
            schema = schema.strict().uppercase();
          }
          break;
        case "positive":
          if (isFieldTypeNumber(type)) {
            schema = schema.positive();
          }
          break;
        case "negative":
          if (isFieldTypeNumber(type)) {
            schema = schema.negative();
          }
          break;
        default:
          schema = schema.nullable();
      }
    }
  });
  return schema;
};
/* harmony default export */ const utils_schema = (createYupSchema);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/reducer.js
var EditViewDataManagerProvider_reducer_defProp = Object.defineProperty;
var EditViewDataManagerProvider_reducer_defProps = Object.defineProperties;
var EditViewDataManagerProvider_reducer_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditViewDataManagerProvider_reducer_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditViewDataManagerProvider_reducer_hasOwnProp = Object.prototype.hasOwnProperty;
var EditViewDataManagerProvider_reducer_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditViewDataManagerProvider_reducer_defNormalProp = (obj, key, value) => key in obj ? EditViewDataManagerProvider_reducer_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditViewDataManagerProvider_reducer_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditViewDataManagerProvider_reducer_hasOwnProp.call(b, prop))
      EditViewDataManagerProvider_reducer_defNormalProp(a, prop, b[prop]);
  if (EditViewDataManagerProvider_reducer_getOwnPropSymbols)
    for (var prop of EditViewDataManagerProvider_reducer_getOwnPropSymbols(b)) {
      if (EditViewDataManagerProvider_reducer_propIsEnum.call(b, prop))
        EditViewDataManagerProvider_reducer_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditViewDataManagerProvider_reducer_spreadProps = (a, b) => EditViewDataManagerProvider_reducer_defProps(a, EditViewDataManagerProvider_reducer_getOwnPropDescs(b));







const reducer_initialState = {
  componentsDataStructure: {},
  contentTypeDataStructure: {},
  formErrors: {},
  initialData: {},
  modifiedData: null,
  shouldCheckErrors: false,
  modifiedDZName: null
};
const reducer_reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "ADD_NON_REPEATABLE_COMPONENT_TO_FIELD": {
      set_default()(
        draftState,
        ["modifiedData", ...action.keys],
        state.componentsDataStructure[action.componentUid]
      );
      break;
    }
    case "ADD_REPEATABLE_COMPONENT_TO_FIELD": {
      let currentValue = get_default()(state, ["modifiedData", ...action.keys], []).slice();
      const defaultDataStructure = EditViewDataManagerProvider_reducer_spreadProps(EditViewDataManagerProvider_reducer_spreadValues({}, state.componentsDataStructure[action.componentUid]), {
        __temp_key__: utils_getMaxTempKey(currentValue) + 1
      });
      if (Array.isArray(currentValue)) {
        currentValue.push(defaultDataStructure);
      } else {
        currentValue = [defaultDataStructure];
      }
      set_default()(draftState, ["modifiedData", ...action.keys], currentValue);
      if (action.shouldCheckErrors) {
        draftState.shouldCheckErrors = !state.shouldCheckErrors;
      }
      break;
    }
    case "ADD_COMPONENT_TO_DYNAMIC_ZONE": {
      draftState.modifiedDZName = action.keys[0];
      if (action.shouldCheckErrors) {
        draftState.shouldCheckErrors = !state.shouldCheckErrors;
      }
      const defaultDataStructure = EditViewDataManagerProvider_reducer_spreadProps(EditViewDataManagerProvider_reducer_spreadValues({}, state.componentsDataStructure[action.componentUid]), {
        __component: action.componentUid
      });
      const currentValue = get_default()(state, ["modifiedData", ...action.keys], null);
      const updatedValue = currentValue ? [...currentValue, defaultDataStructure] : [defaultDataStructure];
      set_default()(draftState, ["modifiedData", ...action.keys], updatedValue);
      break;
    }
    case "ADD_RELATION": {
      if (!Array.isArray(action.value) || !action.value.length) {
        break;
      }
      const el = action.value[0].value;
      const currentValue = get_default()(state, ["modifiedData", ...action.keys], null);
      if (!currentValue) {
        set_default()(draftState, ["modifiedData", ...action.keys], [el]);
        break;
      }
      set_default()(draftState, ["modifiedData", ...action.keys], [...currentValue, el]);
      break;
    }
    case "INIT_FORM": {
      draftState.formErrors = {};
      draftState.initialData = action.initialValues;
      draftState.modifiedData = action.initialValues;
      draftState.modifiedDZName = null;
      draftState.shouldCheckErrors = false;
      break;
    }
    case "MOVE_COMPONENT_FIELD": {
      const currentValue = get_default()(state, ["modifiedData", ...action.pathToComponent]);
      const valueToInsert = get_default()(state, [
        "modifiedData",
        ...action.pathToComponent,
        action.dragIndex
      ]);
      const updatedValue = utils_moveFields(
        currentValue,
        action.dragIndex,
        action.hoverIndex,
        valueToInsert
      );
      set_default()(draftState, ["modifiedData", ...action.pathToComponent], updatedValue);
      break;
    }
    case "MOVE_COMPONENT_UP":
    case "MOVE_COMPONENT_DOWN": {
      const { currentIndex, dynamicZoneName, shouldCheckErrors } = action;
      if (shouldCheckErrors) {
        draftState.shouldCheckErrors = !state.shouldCheckErrors;
      }
      const currentValue = state.modifiedData[dynamicZoneName];
      const nextIndex = action.type === "MOVE_COMPONENT_UP" ? currentIndex - 1 : currentIndex + 1;
      const valueToInsert = state.modifiedData[dynamicZoneName][currentIndex];
      const updatedValue = utils_moveFields(currentValue, currentIndex, nextIndex, valueToInsert);
      set_default()(draftState, ["modifiedData", action.dynamicZoneName], updatedValue);
      break;
    }
    case "MOVE_FIELD": {
      const currentValue = get_default()(state, ["modifiedData", ...action.keys], []).slice();
      const valueToInsert = get_default()(state, ["modifiedData", ...action.keys, action.dragIndex]);
      const updatedValue = utils_moveFields(
        currentValue,
        action.dragIndex,
        action.overIndex,
        valueToInsert
      );
      set_default()(draftState, ["modifiedData", ...action.keys], updatedValue);
      break;
    }
    case "ON_CHANGE": {
      const [nonRepeatableComponentKey] = action.keys;
      if (action.shouldSetInitialValue) {
        set_default()(draftState, ["initialData", ...action.keys], action.value);
      }
      if (action.keys.length === 2 && get_default()(state, ["modifiedData", nonRepeatableComponentKey]) === null) {
        set_default()(draftState, ["modifiedData", nonRepeatableComponentKey], {
          [action.keys[1]]: action.value
        });
        break;
      }
      set_default()(draftState, ["modifiedData", ...action.keys], action.value);
      break;
    }
    case "REMOVE_COMPONENT_FROM_DYNAMIC_ZONE": {
      if (action.shouldCheckErrors) {
        draftState.shouldCheckErrors = !state.shouldCheckErrors;
      }
      draftState.modifiedData[action.dynamicZoneName].splice(action.index, 1);
      break;
    }
    case "REMOVE_COMPONENT_FROM_FIELD": {
      const componentPathToRemove = ["modifiedData", ...action.keys];
      set_default()(draftState, componentPathToRemove, null);
      break;
    }
    case "REMOVE_PASSWORD_FIELD": {
      unset_default()(draftState, ["modifiedData", ...action.keys]);
      break;
    }
    case "REMOVE_REPEATABLE_FIELD": {
      const keysLength = action.keys.length - 1;
      const pathToComponentData = ["modifiedData", ...take_default()(action.keys, keysLength)];
      const hasErrors = Object.keys(state.formErrors).length > 0;
      if (hasErrors) {
        draftState.shouldCheckErrors = !state.shouldCheckErrors;
      }
      const currentValue = get_default()(state, pathToComponentData).slice();
      currentValue.splice(parseInt(action.keys[keysLength], 10), 1);
      set_default()(draftState, pathToComponentData, currentValue);
      break;
    }
    case "REMOVE_RELATION": {
      const pathArray = action.keys.split(".");
      const pathArrayLength = pathArray.length - 1;
      const pathToData = ["modifiedData", ...take_default()(pathArray, pathArrayLength)];
      const currentValue = get_default()(state, pathToData).slice();
      const indexToRemove = parseInt(pathArray[pathArrayLength], 10);
      currentValue.splice(indexToRemove, 1);
      set_default()(draftState, pathToData, currentValue);
      break;
    }
    case "SET_DEFAULT_DATA_STRUCTURES": {
      draftState.componentsDataStructure = action.componentsDataStructure;
      draftState.contentTypeDataStructure = action.contentTypeDataStructure;
      break;
    }
    case "SET_FORM_ERRORS": {
      draftState.modifiedDZName = null;
      draftState.formErrors = action.errors;
      break;
    }
    case "TRIGGER_FORM_VALIDATION": {
      const hasErrors = Object.keys(state.formErrors).length > 0;
      if (hasErrors) {
        draftState.shouldCheckErrors = !state.shouldCheckErrors;
      }
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const EditViewDataManagerProvider_reducer = (reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/index.js
var EditViewDataManagerProvider_defProp = Object.defineProperty;
var EditViewDataManagerProvider_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditViewDataManagerProvider_hasOwnProp = Object.prototype.hasOwnProperty;
var EditViewDataManagerProvider_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditViewDataManagerProvider_defNormalProp = (obj, key, value) => key in obj ? EditViewDataManagerProvider_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditViewDataManagerProvider_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditViewDataManagerProvider_hasOwnProp.call(b, prop))
      EditViewDataManagerProvider_defNormalProp(a, prop, b[prop]);
  if (EditViewDataManagerProvider_getOwnPropSymbols)
    for (var prop of EditViewDataManagerProvider_getOwnPropSymbols(b)) {
      if (EditViewDataManagerProvider_propIsEnum.call(b, prop))
        EditViewDataManagerProvider_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditViewDataManagerProvider_async = (__this, __arguments, generator) => {
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














const EditViewDataManagerProvider = ({
  allLayoutData,
  allowedActions: { canRead, canUpdate },
  children,
  componentsDataStructure,
  contentTypeDataStructure,
  createActionAllowedFields,
  from,
  initialValues,
  isCreatingEntry,
  isLoadingForData,
  isSingleType,
  onPost,
  onPublish,
  onPut,
  onUnpublish,
  readActionAllowedFields,
  redirectToPreviousPage,
  slug,
  status,
  updateActionAllowedFields
}) => {
  const [reducerState, dispatch] = (0,react.useReducer)(EditViewDataManagerProvider_reducer, reducer_initialState);
  const { formErrors, initialData, modifiedData, modifiedDZName, shouldCheckErrors } = reducerState;
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const currentContentTypeLayout = get_default()(allLayoutData, ["contentType"], {});
  const hasDraftAndPublish = (0,react.useMemo)(() => {
    return get_default()(currentContentTypeLayout, ["options", "draftAndPublish"], false);
  }, [currentContentTypeLayout]);
  const shouldNotRunValidations = (0,react.useMemo)(() => {
    return hasDraftAndPublish && !initialData.publishedAt;
  }, [hasDraftAndPublish, initialData.publishedAt]);
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const shouldRedirectToHomepageWhenEditingEntry = (0,react.useMemo)(() => {
    if (isLoadingForData) {
      return false;
    }
    if (isCreatingEntry) {
      return false;
    }
    if (canRead === false && canUpdate === false) {
      return true;
    }
    return false;
  }, [isLoadingForData, isCreatingEntry, canRead, canUpdate]);
  (0,react.useEffect)(() => {
    if (status === "resolved") {
      unlockApp();
    } else {
      lockApp();
    }
  }, [lockApp, unlockApp, status]);
  (0,react.useEffect)(() => {
    if (!isLoadingForData) {
      checkFormErrors();
    }
  }, [shouldCheckErrors]);
  (0,react.useEffect)(() => {
    const errorsInForm = Object.keys(formErrors);
    if (errorsInForm.length > 0) {
      const firstError = errorsInForm[0];
      const el = document.getElementById(firstError);
      if (el) {
        el.focus();
      }
    }
  }, [formErrors]);
  (0,react.useEffect)(() => {
    if (shouldRedirectToHomepageWhenEditingEntry) {
      toggleNotification({
        type: "info",
        message: { id: utils_getTrad("permissions.not-allowed.update") }
      });
    }
  }, [shouldRedirectToHomepageWhenEditingEntry, toggleNotification]);
  (0,react.useEffect)(() => {
    dispatch({
      type: "SET_DEFAULT_DATA_STRUCTURES",
      componentsDataStructure,
      contentTypeDataStructure
    });
  }, [componentsDataStructure, contentTypeDataStructure]);
  (0,react.useEffect)(() => {
    if (initialValues) {
      dispatch({
        type: "INIT_FORM",
        initialValues
      });
    }
  }, [initialValues]);
  const addComponentToDynamicZone = (0,react.useCallback)((keys, componentUid, shouldCheckErrors2 = false) => {
    trackUsageRef.current("didAddComponentToDynamicZone");
    dispatch({
      type: "ADD_COMPONENT_TO_DYNAMIC_ZONE",
      keys: keys.split("."),
      componentUid,
      shouldCheckErrors: shouldCheckErrors2
    });
  }, []);
  const addNonRepeatableComponentToField = (0,react.useCallback)((keys, componentUid) => {
    dispatch({
      type: "ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",
      keys: keys.split("."),
      componentUid
    });
  }, []);
  const addRelation = (0,react.useCallback)(({ target: { name, value } }) => {
    dispatch({
      type: "ADD_RELATION",
      keys: name.split("."),
      value
    });
  }, []);
  const addRepeatableComponentToField = (0,react.useCallback)(
    (keys, componentUid, shouldCheckErrors2 = false) => {
      dispatch({
        type: "ADD_REPEATABLE_COMPONENT_TO_FIELD",
        keys: keys.split("."),
        componentUid,
        shouldCheckErrors: shouldCheckErrors2
      });
    },
    []
  );
  const yupSchema = (0,react.useMemo)(() => {
    const options = { isCreatingEntry, isDraft: shouldNotRunValidations, isFromComponent: false };
    return utils_schema(
      currentContentTypeLayout,
      {
        components: allLayoutData.components || {}
      },
      options
    );
  }, [
    allLayoutData.components,
    currentContentTypeLayout,
    isCreatingEntry,
    shouldNotRunValidations
  ]);
  const checkFormErrors = (0,react.useCallback)(
    (..._0) => EditViewDataManagerProvider_async(void 0, [..._0], function* (dataToSet = {}) {
      let errors = {};
      const updatedData = cloneDeep_default()(modifiedData);
      if (!isEmpty_default()(updatedData)) {
        set_default()(updatedData, dataToSet.path, dataToSet.value);
      }
      try {
        yield yupSchema.validate(updatedData, { abortEarly: false });
      } catch (err) {
        errors = (0,build.getYupInnerErrors)(err);
        if (modifiedDZName) {
          errors = Object.keys(errors).reduce((acc, current) => {
            const dzName = current.split(".")[0];
            if (dzName !== modifiedDZName) {
              acc[current] = errors[current];
            }
            return acc;
          }, {});
        }
      }
      dispatch({
        type: "SET_FORM_ERRORS",
        errors
      });
    }),
    [modifiedDZName, modifiedData, yupSchema]
  );
  const handleChange = (0,react.useCallback)(
    ({ target: { name, value, type } }, shouldSetInitialValue = false) => {
      let inputValue = value;
      if (["text", "textarea", "string", "email", "uid", "select", "select-one", "number"].includes(
        type
      ) && !value && value !== 0) {
        inputValue = null;
      }
      if (type === "password" && !value) {
        dispatch({
          type: "REMOVE_PASSWORD_FIELD",
          keys: name.split(".")
        });
        return;
      }
      dispatch({
        type: "ON_CHANGE",
        keys: name.split("."),
        value: inputValue,
        shouldSetInitialValue
      });
    },
    []
  );
  const createFormData = (0,react.useCallback)(
    (data) => {
      const preparedData = utils_removeKeyInObject(cloneDeep_default()(data), "__temp_key__");
      const cleanedData = utils_cleanData(
        preparedData,
        currentContentTypeLayout,
        allLayoutData.components
      );
      return cleanedData;
    },
    [allLayoutData.components, currentContentTypeLayout]
  );
  const trackerProperty = (0,react.useMemo)(() => {
    if (!hasDraftAndPublish) {
      return {};
    }
    return shouldNotRunValidations ? { status: "draft" } : {};
  }, [hasDraftAndPublish, shouldNotRunValidations]);
  const handleSubmit = (0,react.useCallback)(
    (e) => EditViewDataManagerProvider_async(void 0, null, function* () {
      e.preventDefault();
      let errors = {};
      try {
        yield yupSchema.validate(modifiedData, { abortEarly: false });
      } catch (err) {
        errors = (0,build.getYupInnerErrors)(err);
      }
      try {
        if (isEmpty_default()(errors)) {
          const formData = createFormData(modifiedData);
          if (isCreatingEntry) {
            yield onPost(formData, trackerProperty);
          } else {
            yield onPut(formData, trackerProperty);
          }
        }
      } catch (err) {
        errors = EditViewDataManagerProvider_spreadValues(EditViewDataManagerProvider_spreadValues({}, errors), (0,build.getAPIInnerErrors)(err, { getTrad: utils_getTrad }));
      }
      dispatch({
        type: "SET_FORM_ERRORS",
        errors
      });
    }),
    [createFormData, isCreatingEntry, modifiedData, onPost, onPut, trackerProperty, yupSchema]
  );
  const handlePublish = (0,react.useCallback)(() => EditViewDataManagerProvider_async(void 0, null, function* () {
    const schema = utils_schema(
      currentContentTypeLayout,
      {
        components: get_default()(allLayoutData, "components", {})
      },
      { isCreatingEntry, isDraft: false, isFromComponent: false }
    );
    let errors = {};
    try {
      yield schema.validate(modifiedData, { abortEarly: false });
    } catch (err) {
      errors = (0,build.getYupInnerErrors)(err);
    }
    try {
      if (isEmpty_default()(errors)) {
        yield onPublish();
      }
    } catch (err) {
      errors = EditViewDataManagerProvider_spreadValues(EditViewDataManagerProvider_spreadValues({}, errors), (0,build.getAPIInnerErrors)(err, { getTrad: utils_getTrad }));
    }
    dispatch({
      type: "SET_FORM_ERRORS",
      errors
    });
  }), [allLayoutData, currentContentTypeLayout, isCreatingEntry, modifiedData, onPublish]);
  const shouldCheckDZErrors = (0,react.useCallback)(
    (dzName) => {
      const doesDZHaveError = Object.keys(formErrors).some((key) => key.split(".")[0] === dzName);
      const shouldCheckErrors2 = !isEmpty_default()(formErrors) && doesDZHaveError;
      return shouldCheckErrors2;
    },
    [formErrors]
  );
  const moveComponentDown = (0,react.useCallback)(
    (dynamicZoneName, currentIndex) => {
      trackUsageRef.current("changeComponentsOrder");
      dispatch({
        type: "MOVE_COMPONENT_DOWN",
        dynamicZoneName,
        currentIndex,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const moveComponentUp = (0,react.useCallback)(
    (dynamicZoneName, currentIndex) => {
      trackUsageRef.current("changeComponentsOrder");
      dispatch({
        type: "MOVE_COMPONENT_UP",
        dynamicZoneName,
        currentIndex,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const moveComponentField = (0,react.useCallback)((pathToComponent, dragIndex, hoverIndex) => {
    dispatch({
      type: "MOVE_COMPONENT_FIELD",
      pathToComponent,
      dragIndex,
      hoverIndex
    });
  }, []);
  const moveRelation = (0,react.useCallback)((dragIndex, overIndex, name) => {
    dispatch({
      type: "MOVE_FIELD",
      dragIndex,
      overIndex,
      keys: name.split(".")
    });
  }, []);
  const onRemoveRelation = (0,react.useCallback)((keys) => {
    dispatch({
      type: "REMOVE_RELATION",
      keys
    });
  }, []);
  const removeComponentFromDynamicZone = (0,react.useCallback)(
    (dynamicZoneName, index) => {
      trackUsageRef.current("removeComponentFromDynamicZone");
      dispatch({
        type: "REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",
        dynamicZoneName,
        index,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const removeComponentFromField = (0,react.useCallback)((keys, componentUid) => {
    dispatch({
      type: "REMOVE_COMPONENT_FROM_FIELD",
      keys: keys.split("."),
      componentUid
    });
  }, []);
  const removeRepeatableField = (0,react.useCallback)((keys, componentUid) => {
    dispatch({
      type: "REMOVE_REPEATABLE_FIELD",
      keys: keys.split("."),
      componentUid
    });
  }, []);
  const triggerFormValidation = (0,react.useCallback)(() => {
    dispatch({
      type: "TRIGGER_FORM_VALIDATION"
    });
  }, []);
  if (shouldRedirectToHomepageWhenEditingEntry) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, {
      to: from
    });
  }
  if (!modifiedData) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(build.ContentManagerEditViewDataManagerContext.Provider, {
    value: {
      addComponentToDynamicZone,
      addNonRepeatableComponentToField,
      addRelation,
      addRepeatableComponentToField,
      allLayoutData,
      checkFormErrors,
      createActionAllowedFields,
      formErrors,
      hasDraftAndPublish,
      initialData,
      isCreatingEntry,
      isSingleType,
      shouldNotRunValidations,
      status,
      layout: currentContentTypeLayout,
      modifiedData,
      moveComponentDown,
      moveComponentField,
      moveComponentUp,
      moveRelation,
      onChange: handleChange,
      onPublish: handlePublish,
      onUnpublish,
      onRemoveRelation,
      readActionAllowedFields,
      redirectToPreviousPage,
      removeComponentFromDynamicZone,
      removeComponentFromField,
      removeRepeatableField,
      slug,
      triggerFormValidation,
      updateActionAllowedFields
    }
  }, /* @__PURE__ */ react.createElement(react.Fragment, null, isLoadingForData || !isCreatingEntry && !initialData.id ? /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": "true"
  }, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Prompt, {
    when: !isEqual_default()(modifiedData, initialData),
    message: formatMessage({ id: "global.prompt.unsaved" })
  }), /* @__PURE__ */ react.createElement("form", {
    noValidate: true,
    onSubmit: handleSubmit
  }, children))));
};
EditViewDataManagerProvider.defaultProps = {
  from: "/",
  initialValues: null,
  redirectToPreviousPage: () => {
  }
};
EditViewDataManagerProvider.propTypes = {
  allLayoutData: (prop_types_default()).object.isRequired,
  allowedActions: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node.isRequired,
  componentsDataStructure: (prop_types_default()).object.isRequired,
  contentTypeDataStructure: (prop_types_default()).object.isRequired,
  createActionAllowedFields: (prop_types_default()).array.isRequired,
  from: (prop_types_default()).string,
  initialValues: (prop_types_default()).object,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isLoadingForData: (prop_types_default()).bool.isRequired,
  isSingleType: (prop_types_default()).bool.isRequired,
  onPost: (prop_types_default()).func.isRequired,
  onPublish: (prop_types_default()).func.isRequired,
  onPut: (prop_types_default()).func.isRequired,
  onUnpublish: (prop_types_default()).func.isRequired,
  readActionAllowedFields: (prop_types_default()).array.isRequired,
  redirectToPreviousPage: (prop_types_default()).func,
  slug: (prop_types_default()).string.isRequired,
  status: (prop_types_default()).string.isRequired,
  updateActionAllowedFields: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_EditViewDataManagerProvider = (EditViewDataManagerProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SingleTypeFormWrapper/utils/getRequestUrl.js

const requestURL = (path) => utils_getRequestUrl(`single-types/${path}`);
/* harmony default export */ const SingleTypeFormWrapper_utils_getRequestUrl = (requestURL);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SingleTypeFormWrapper/utils/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/utils/createPluginsFilter.js
const createPluginsFilter = (obj) => Object.values(obj || {}).reduce((acc, current) => Object.assign(acc, current), {});
/* harmony default export */ const utils_createPluginsFilter = (createPluginsFilter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/utils/buildQueryString.js
var buildQueryString_defProp = Object.defineProperty;
var buildQueryString_getOwnPropSymbols = Object.getOwnPropertySymbols;
var buildQueryString_hasOwnProp = Object.prototype.hasOwnProperty;
var buildQueryString_propIsEnum = Object.prototype.propertyIsEnumerable;
var buildQueryString_defNormalProp = (obj, key, value) => key in obj ? buildQueryString_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var buildQueryString_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (buildQueryString_hasOwnProp.call(b, prop))
      buildQueryString_defNormalProp(a, prop, b[prop]);
  if (buildQueryString_getOwnPropSymbols)
    for (var prop of buildQueryString_getOwnPropSymbols(b)) {
      if (buildQueryString_propIsEnum.call(b, prop))
        buildQueryString_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var buildQueryString_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (buildQueryString_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && buildQueryString_getOwnPropSymbols)
    for (var prop of buildQueryString_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && buildQueryString_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


const buildQueryString = (queryParams = {}) => {
  const _a = buildQueryString_spreadValues(buildQueryString_spreadValues({}, queryParams), utils_createPluginsFilter(queryParams.plugins)), { plugins: _ } = _a, otherQueryParams = buildQueryString_objRest(_a, ["plugins"]);
  return `?${(0,qs_lib.stringify)(otherQueryParams, { encode: false })}`;
};
/* harmony default export */ const utils_buildQueryString = (buildQueryString);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SingleTypeFormWrapper/index.js
var SingleTypeFormWrapper_defProp = Object.defineProperty;
var SingleTypeFormWrapper_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SingleTypeFormWrapper_hasOwnProp = Object.prototype.hasOwnProperty;
var SingleTypeFormWrapper_propIsEnum = Object.prototype.propertyIsEnumerable;
var SingleTypeFormWrapper_defNormalProp = (obj, key, value) => key in obj ? SingleTypeFormWrapper_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SingleTypeFormWrapper_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SingleTypeFormWrapper_hasOwnProp.call(b, prop))
      SingleTypeFormWrapper_defNormalProp(a, prop, b[prop]);
  if (SingleTypeFormWrapper_getOwnPropSymbols)
    for (var prop of SingleTypeFormWrapper_getOwnPropSymbols(b)) {
      if (SingleTypeFormWrapper_propIsEnum.call(b, prop))
        SingleTypeFormWrapper_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SingleTypeFormWrapper_async = (__this, __arguments, generator) => {
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













const SingleTypeFormWrapper = ({ allLayoutData, children, slug }) => {
  const { trackUsage } = (0,build.useTracking)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { setCurrentStep } = (0,build.useGuidedTour)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const [isCreatingEntry, setIsCreatingEntry] = (0,react.useState)(true);
  const [{ query, rawQuery }] = (0,build.useQueryParams)();
  const searchToSend = utils_buildQueryString(query);
  const toggleNotification = (0,build.useNotification)();
  const dispatch = (0,lib.useDispatch)();
  const {
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isLoading,
    status
  } = (0,lib.useSelector)(crudReducer_selectors);
  const cleanReceivedData = (0,react.useCallback)(
    (data2) => {
      const cleaned = utils_removePasswordFieldsFromData(
        data2,
        allLayoutData.contentType,
        allLayoutData.components
      );
      return (0,build.formatContentTypeData)(cleaned, allLayoutData.contentType, allLayoutData.components);
    },
    [allLayoutData]
  );
  (0,react.useEffect)(() => {
    return () => {
      dispatch(actions_resetProps());
    };
  }, [dispatch]);
  (0,react.useEffect)(() => {
    const componentsDataStructure2 = Object.keys(allLayoutData.components).reduce((acc, current) => {
      const defaultComponentForm = utils_createDefaultForm(
        get_default()(allLayoutData, ["components", current, "attributes"], {}),
        allLayoutData.components
      );
      acc[current] = (0,build.formatContentTypeData)(
        defaultComponentForm,
        allLayoutData.components[current],
        allLayoutData.components
      );
      return acc;
    }, {});
    const contentTypeDataStructure2 = utils_createDefaultForm(
      allLayoutData.contentType.attributes,
      allLayoutData.components
    );
    const contentTypeDataStructureFormatted = (0,build.formatContentTypeData)(
      contentTypeDataStructure2,
      allLayoutData.contentType,
      allLayoutData.components
    );
    dispatch(setDataStructures(componentsDataStructure2, contentTypeDataStructureFormatted));
  }, [allLayoutData, dispatch]);
  (0,react.useEffect)(() => {
    const CancelToken = (axios_default()).CancelToken;
    const source = CancelToken.source();
    const fetchData = (source2) => SingleTypeFormWrapper_async(void 0, null, function* () {
      dispatch(getData());
      setIsCreatingEntry(true);
      try {
        const { data: data2 } = yield (0,utils/* axiosInstance */.be)(SingleTypeFormWrapper_utils_getRequestUrl(`${slug}${searchToSend}`), {
          cancelToken: source2.token
        });
        dispatch(getDataSucceeded(cleanReceivedData(data2)));
        setIsCreatingEntry(false);
      } catch (err) {
        if (axios_default().isCancel(err)) {
          return;
        }
        const responseStatus = get_default()(err, "response.status", null);
        if (responseStatus === 404) {
          dispatch(initForm(rawQuery, true));
        }
        if (responseStatus === 403) {
          toggleNotification({
            type: "info",
            message: { id: utils_getTrad("permissions.not-allowed.update") }
          });
          push("/");
        }
      }
    });
    fetchData(source);
    return () => source.cancel("Operation canceled by the user.");
  }, [cleanReceivedData, push, slug, dispatch, searchToSend, rawQuery, toggleNotification]);
  const displayErrors = (0,react.useCallback)(
    (err) => {
      const errorPayload = err.response.data;
      let errorMessage = get_default()(errorPayload, ["error", "message"], "Bad Request");
      if (Array.isArray(errorMessage)) {
        errorMessage = get_default()(errorMessage, ["0", "messages", "0", "id"]);
      }
      if (typeof errorMessage === "string") {
        toggleNotification({ type: "warning", message: errorMessage });
      }
    },
    [toggleNotification]
  );
  const onDelete = (0,react.useCallback)(
    (trackerProperty) => SingleTypeFormWrapper_async(void 0, null, function* () {
      try {
        trackUsageRef.current("willDeleteEntry", trackerProperty);
        const { data: data2 } = yield utils/* axiosInstance.delete */.be["delete"](SingleTypeFormWrapper_utils_getRequestUrl(`${slug}${searchToSend}`));
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.delete") }
        });
        trackUsageRef.current("didDeleteEntry", trackerProperty);
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotDeleteEntry", SingleTypeFormWrapper_spreadValues({ error: err }, trackerProperty));
        displayErrors(err);
        return Promise.reject(err);
      }
    }),
    [slug, displayErrors, toggleNotification, searchToSend]
  );
  const onDeleteSucceeded = (0,react.useCallback)(() => {
    setIsCreatingEntry(true);
    dispatch(initForm(rawQuery, true));
  }, [dispatch, rawQuery]);
  const onPost = (0,react.useCallback)(
    (body, trackerProperty) => SingleTypeFormWrapper_async(void 0, null, function* () {
      const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}${rawQuery}`);
      try {
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = yield utils/* axiosInstance.put */.be.put(endPoint, body);
        trackUsageRef.current("didCreateEntry", trackerProperty);
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.save") }
        });
        setCurrentStep("contentManager.success");
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        setIsCreatingEntry(false);
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotCreateEntry", { error: err, trackerProperty });
        displayErrors(err);
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    }),
    [cleanReceivedData, displayErrors, slug, dispatch, rawQuery, toggleNotification, setCurrentStep]
  );
  const onPublish = (0,react.useCallback)(() => SingleTypeFormWrapper_async(void 0, null, function* () {
    try {
      trackUsageRef.current("willPublishEntry");
      const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}/actions/publish${searchToSend}`);
      dispatch(setStatus("publish-pending"));
      const { data: data2 } = yield utils/* axiosInstance.post */.be.post(endPoint);
      trackUsageRef.current("didPublishEntry");
      toggleNotification({
        type: "success",
        message: { id: utils_getTrad("success.record.publish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      return Promise.resolve(data2);
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }), [cleanReceivedData, displayErrors, slug, searchToSend, dispatch, toggleNotification]);
  const onPut = (0,react.useCallback)(
    (body, trackerProperty) => SingleTypeFormWrapper_async(void 0, null, function* () {
      const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}${rawQuery}`);
      try {
        trackUsageRef.current("willEditEntry", trackerProperty);
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = yield utils/* axiosInstance.put */.be.put(endPoint, body);
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.save") }
        });
        trackUsageRef.current("didEditEntry", { trackerProperty });
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        displayErrors(err);
        trackUsageRef.current("didNotEditEntry", { error: err, trackerProperty });
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    }),
    [cleanReceivedData, displayErrors, slug, dispatch, rawQuery, toggleNotification]
  );
  const onUnpublish = (0,react.useCallback)(() => SingleTypeFormWrapper_async(void 0, null, function* () {
    const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}/actions/unpublish${searchToSend}`);
    dispatch(setStatus("unpublish-pending"));
    try {
      trackUsageRef.current("willUnpublishEntry");
      const { data: data2 } = yield utils/* axiosInstance.post */.be.post(endPoint);
      trackUsageRef.current("didUnpublishEntry");
      toggleNotification({
        type: "success",
        message: { id: utils_getTrad("success.record.unpublish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
    } catch (err) {
      dispatch(setStatus("resolved"));
      displayErrors(err);
    }
  }), [cleanReceivedData, toggleNotification, displayErrors, slug, dispatch, searchToSend]);
  return children({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData: isLoading,
    onDelete,
    onDeleteSucceeded,
    onPost,
    onPublish,
    onPut,
    onUnpublish,
    redirectionLink: "/",
    status
  });
};
SingleTypeFormWrapper.propTypes = {
  allLayoutData: prop_types_default().shape({
    components: (prop_types_default()).object.isRequired,
    contentType: (prop_types_default()).object.isRequired
  }).isRequired,
  children: (prop_types_default()).func.isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_SingleTypeFormWrapper = ((0,react.memo)(SingleTypeFormWrapper));

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Dot.js
var Dot = __webpack_require__(33109);
var Dot_default = /*#__PURE__*/__webpack_require__.n(Dot);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/connect.js
var DraftAndPublishBadge_utils_connect_defProp = Object.defineProperty;
var DraftAndPublishBadge_utils_connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DraftAndPublishBadge_utils_connect_hasOwnProp = Object.prototype.hasOwnProperty;
var DraftAndPublishBadge_utils_connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var DraftAndPublishBadge_utils_connect_defNormalProp = (obj, key, value) => key in obj ? DraftAndPublishBadge_utils_connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DraftAndPublishBadge_utils_connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DraftAndPublishBadge_utils_connect_hasOwnProp.call(b, prop))
      DraftAndPublishBadge_utils_connect_defNormalProp(a, prop, b[prop]);
  if (DraftAndPublishBadge_utils_connect_getOwnPropSymbols)
    for (var prop of DraftAndPublishBadge_utils_connect_getOwnPropSymbols(b)) {
      if (DraftAndPublishBadge_utils_connect_propIsEnum.call(b, prop))
        DraftAndPublishBadge_utils_connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function DraftAndPublishBadge_utils_connect_connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, DraftAndPublishBadge_utils_connect_spreadValues(DraftAndPublishBadge_utils_connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const DraftAndPublishBadge_utils_connect = (DraftAndPublishBadge_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/select.js

function DraftAndPublishBadge_utils_select_useSelect() {
  const { initialData, hasDraftAndPublish } = (0,build.useCMEditViewDataManager)();
  const isPublished = initialData.publishedAt !== void 0 && initialData.publishedAt !== null;
  return {
    hasDraftAndPublish,
    isPublished
  };
}
/* harmony default export */ const DraftAndPublishBadge_utils_select = (DraftAndPublishBadge_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/index.js
var DraftAndPublishBadge_defProp = Object.defineProperty;
var DraftAndPublishBadge_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DraftAndPublishBadge_hasOwnProp = Object.prototype.hasOwnProperty;
var DraftAndPublishBadge_propIsEnum = Object.prototype.propertyIsEnumerable;
var DraftAndPublishBadge_defNormalProp = (obj, key, value) => key in obj ? DraftAndPublishBadge_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DraftAndPublishBadge_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DraftAndPublishBadge_hasOwnProp.call(b, prop))
      DraftAndPublishBadge_defNormalProp(a, prop, b[prop]);
  if (DraftAndPublishBadge_getOwnPropSymbols)
    for (var prop of DraftAndPublishBadge_getOwnPropSymbols(b)) {
      if (DraftAndPublishBadge_propIsEnum.call(b, prop))
        DraftAndPublishBadge_defNormalProp(a, prop, b[prop]);
    }
  return a;
};











const CustomBullet = (0,styled_components_browser_cjs["default"])((Dot_default()))`
  width: ${(0,build.pxToRem)(6)};
  height: ${(0,build.pxToRem)(6)};
  * {
    fill: ${({ theme, $bulletColor }) => theme.colors[$bulletColor]};
  }
`;
const DraftAndPublishBadge = ({ hasDraftAndPublish, isPublished }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (!hasDraftAndPublish) {
    return null;
  }
  const colors = {
    draft: {
      textColor: "secondary700",
      bulletColor: "secondary600",
      box: {
        background: "secondary100",
        borderColor: "secondary200"
      }
    },
    published: {
      textColor: "success700",
      bulletColor: "success600",
      box: {
        background: "success100",
        borderColor: "success200"
      }
    }
  };
  const colorProps = isPublished ? colors.published : colors.draft;
  return /* @__PURE__ */ react.createElement(Box.Box, DraftAndPublishBadge_spreadValues({
    hasRadius: true,
    as: "aside",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5
  }, colorProps.box), /* @__PURE__ */ react.createElement(Box.Box, {
    as: Flex.Flex
  }, /* @__PURE__ */ react.createElement(CustomBullet, {
    $bulletColor: colorProps.bulletColor
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 3
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: colorProps.textColor
  }, formatMessage({
    id: utils_getTrad("containers.Edit.information.editing"),
    defaultMessage: "Editing"
  }), "\xA0"), /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: colorProps.textColor
  }, isPublished && formatMessage({
    id: utils_getTrad("containers.Edit.information.publishedVersion"),
    defaultMessage: "published version"
  }), !isPublished && formatMessage({
    id: utils_getTrad("containers.Edit.information.draftVersion"),
    defaultMessage: "draft version"
  })))));
};
DraftAndPublishBadge.propTypes = {
  hasDraftAndPublish: (prop_types_default()).bool.isRequired,
  isPublished: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const EditView_DraftAndPublishBadge = (DraftAndPublishBadge_utils_connect(DraftAndPublishBadge, DraftAndPublishBadge_utils_select));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Informations/utils/getUnits.js
const msPerMinute = 60 * 1e3;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;
const msPerYear = msPerDay * 365;
const getUnits = (value) => {
  if (value < msPerMinute) {
    return { unit: "second", value: -Math.round(value / 1e3) };
  }
  if (value < msPerHour) {
    return { unit: "minute", value: -Math.round(value / msPerMinute) };
  }
  if (value < msPerDay) {
    return { unit: "hour", value: -Math.round(value / msPerHour) };
  }
  if (value < msPerMonth) {
    return { unit: "day", value: -Math.round(value / msPerDay) };
  }
  if (value < msPerYear) {
    return { unit: "month", value: -Math.round(value / msPerMonth) };
  }
  return { unit: "year", value: -Math.round(value / msPerYear) };
};
/* harmony default export */ const utils_getUnits = (getUnits);

// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var src_utils = __webpack_require__(8610);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Informations/index.js











const Informations = () => {
  const { formatMessage, formatRelativeTime } = (0,react_intl.useIntl)();
  const { initialData, isCreatingEntry } = (0,build.useCMEditViewDataManager)();
  const currentTime = (0,react.useRef)(Date.now());
  const getFieldInfo = (atField, byField) => {
    var _a, _b, _c;
    const userFirstname = ((_a = initialData[byField]) == null ? void 0 : _a.firstname) || "";
    const userLastname = ((_b = initialData[byField]) == null ? void 0 : _b.lastname) || "";
    const userUsername = (_c = initialData[byField]) == null ? void 0 : _c.username;
    const user = userUsername || (0,src_utils/* getFullName */.Pp)(userFirstname, userLastname);
    const timestamp = initialData[atField] ? new Date(initialData[atField]).getTime() : Date.now();
    const elapsed = timestamp - currentTime.current;
    const { unit, value } = utils_getUnits(-elapsed);
    return {
      at: formatRelativeTime(value, unit, { numeric: "auto" }),
      by: isCreatingEntry ? "-" : user
    };
  };
  const updated = getFieldInfo("updatedAt", "updatedBy");
  const created = getFieldInfo("createdAt", "createdBy");
  return /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600",
    id: "additional-informations"
  }, formatMessage({
    id: utils_getTrad("containers.Edit.information"),
    defaultMessage: "Information"
  })), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2,
    paddingBottom: 6
  }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 4
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, formatMessage({
    id: utils_getTrad("containers.Edit.information.created"),
    defaultMessage: "Created"
  })), /* @__PURE__ */ react.createElement(Typography.Typography, null, created.at)), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, formatMessage({
    id: utils_getTrad("containers.Edit.information.by"),
    defaultMessage: "By"
  })), /* @__PURE__ */ react.createElement(Typography.Typography, null, created.by)), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, formatMessage({
    id: utils_getTrad("containers.Edit.information.lastUpdate"),
    defaultMessage: "Last update"
  })), /* @__PURE__ */ react.createElement(Typography.Typography, null, updated.at)), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, formatMessage({
    id: utils_getTrad("containers.Edit.information.by"),
    defaultMessage: "By"
  })), /* @__PURE__ */ react.createElement(Typography.Typography, null, updated.by))));
};
/* harmony default export */ const EditView_Informations = (Informations);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(87760);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Dialog.js
var Dialog = __webpack_require__(81895);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/connect.js
var Header_utils_connect_defProp = Object.defineProperty;
var Header_utils_connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Header_utils_connect_hasOwnProp = Object.prototype.hasOwnProperty;
var Header_utils_connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var Header_utils_connect_defNormalProp = (obj, key, value) => key in obj ? Header_utils_connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Header_utils_connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Header_utils_connect_hasOwnProp.call(b, prop))
      Header_utils_connect_defNormalProp(a, prop, b[prop]);
  if (Header_utils_connect_getOwnPropSymbols)
    for (var prop of Header_utils_connect_getOwnPropSymbols(b)) {
      if (Header_utils_connect_propIsEnum.call(b, prop))
        Header_utils_connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function Header_utils_connect_connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, Header_utils_connect_spreadValues(Header_utils_connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const Header_utils_connect = (Header_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/getDraftRelations.js

const getDraftRelations = (data, ctSchema, components) => {
  const getDraftRelationsCount = (data2, schema) => Object.keys(data2).reduce((acc, current) => {
    const type = (0,lodash.get)(schema, ["attributes", current, "type"], "string");
    const relationType = (0,lodash.get)(schema, ["attributes", current, "relationType"], "");
    const isMorph = relationType.toLowerCase().includes("morph");
    const oneWayTypes = ["oneWay", "oneToOne", "manyToOne"];
    const currentData = data2[current];
    if ((0,lodash.isNil)(currentData)) {
      return acc;
    }
    if (type === "dynamiczone") {
      currentData.forEach((curr) => {
        const compoSchema = (0,lodash.get)(components, curr.__component, {});
        acc += getDraftRelationsCount(curr, compoSchema);
      });
    }
    if (type === "component") {
      const isRepeatable = (0,lodash.get)(schema, ["attributes", current, "repeatable"], false);
      const compoUID = (0,lodash.get)(schema, ["attributes", current, "component"], "");
      const compoSchema = (0,lodash.get)(components, compoUID, {});
      if (isRepeatable) {
        currentData.forEach((curr) => {
          acc += getDraftRelationsCount(curr, compoSchema);
        });
      } else {
        acc += getDraftRelationsCount(currentData, compoSchema);
      }
    }
    if (type === "relation" && !isMorph) {
      if (oneWayTypes.includes(relationType)) {
        const hasDraftAndPublish = (0,lodash.has)(currentData, "publishedAt");
        if (hasDraftAndPublish && (0,lodash.isEmpty)(currentData.publishedAt)) {
          acc += 1;
        }
      } else {
        currentData.forEach((value) => {
          if ((0,lodash.has)(value, "publishedAt") && (0,lodash.isEmpty)(value.publishedAt)) {
            acc += 1;
          }
        });
      }
    }
    return acc;
  }, 0);
  const count = getDraftRelationsCount(data, ctSchema, components);
  return count;
};
/* harmony default export */ const utils_getDraftRelations = (getDraftRelations);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/select.js

function Header_utils_select_useSelect() {
  const {
    allLayoutData,
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish
  } = (0,build.useCMEditViewDataManager)();
  return {
    componentLayouts: allLayoutData.components,
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish
  };
}
/* harmony default export */ const Header_utils_select = (Header_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/index.js





















const Header = ({
  allowedActions: { canUpdate, canCreate, canPublish },
  componentLayouts,
  initialData,
  isCreatingEntry,
  isSingleType,
  hasDraftAndPublish,
  layout,
  modifiedData,
  onPublish,
  onUnpublish,
  status
}) => {
  const { goBack } = (0,react_router_dom_min.useHistory)();
  const [showWarningUnpublish, setWarningUnpublish] = (0,react.useState)(false);
  const [showWarningDraftRelation, setShowWarningDraftRelation] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const draftRelationsCountRef = (0,react.useRef)(0);
  const currentContentTypeMainField = get_default()(layout, ["settings", "mainField"], "id");
  const currentContentTypeName = get_default()(layout, ["info", "displayName"], "NOT FOUND");
  const didChangeData = !isEqual_default()(initialData, modifiedData) || isCreatingEntry && !isEmpty_default()(modifiedData);
  const createEntryIntlTitle = formatMessage({
    id: utils_getTrad("containers.Edit.pluginHeader.title.new"),
    defaultMessage: "Create an entry"
  });
  let title = createEntryIntlTitle;
  if (!isCreatingEntry && !isSingleType) {
    title = initialData[currentContentTypeMainField] || currentContentTypeName;
  }
  if (isSingleType) {
    title = currentContentTypeName;
  }
  const checkIfHasDraftRelations = () => {
    const count = utils_getDraftRelations(modifiedData, layout, componentLayouts);
    draftRelationsCountRef.current = count;
    return count;
  };
  let primaryAction = null;
  if (isCreatingEntry && canCreate) {
    primaryAction = /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 2
    }, hasDraftAndPublish && /* @__PURE__ */ react.createElement(Button.Button, {
      disabled: true,
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      variant: "secondary"
    }, formatMessage({ id: "app.utils.publish", defaultMessage: "Publish" })), /* @__PURE__ */ react.createElement(Button.Button, {
      disabled: !didChangeData,
      isLoading: status === "submit-pending",
      type: "submit"
    }, formatMessage({
      id: utils_getTrad("containers.Edit.submit"),
      defaultMessage: "Save"
    })));
  }
  if (!isCreatingEntry && canUpdate) {
    const shouldShowPublishButton = hasDraftAndPublish && canPublish;
    const isPublished = !isEmpty_default()(initialData.publishedAt);
    const isPublishButtonLoading = isPublished ? status === "unpublish-pending" : status === "publish-pending";
    const pubishButtonLabel = isPublished ? { id: "app.utils.unpublish", defaultMessage: "Unpublish" } : { id: "app.utils.publish", defaultMessage: "Publish" };
    const onClick = isPublished ? () => setWarningUnpublish(true) : () => {
      if (checkIfHasDraftRelations() === 0) {
        onPublish();
      } else {
        setShowWarningDraftRelation(true);
      }
    };
    primaryAction = /* @__PURE__ */ react.createElement(Flex.Flex, null, shouldShowPublishButton && /* @__PURE__ */ react.createElement(Button.Button, {
      disabled: didChangeData,
      loading: isPublishButtonLoading,
      onClick,
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      variant: "secondary"
    }, formatMessage(pubishButtonLabel)), /* @__PURE__ */ react.createElement(Box.Box, {
      paddingLeft: shouldShowPublishButton ? 2 : 0
    }, /* @__PURE__ */ react.createElement(Button.Button, {
      disabled: !didChangeData,
      loading: status === "submit-pending",
      type: "submit"
    }, formatMessage({
      id: utils_getTrad("containers.Edit.submit"),
      defaultMessage: "Save"
    }))));
  }
  const toggleWarningUnpublish = () => setWarningUnpublish((prevState) => !prevState);
  const toggleWarningDraftRelation = () => setShowWarningDraftRelation((prevState) => !prevState);
  const handlePublish = () => {
    toggleWarningDraftRelation();
    draftRelationsCountRef.current = 0;
    onPublish();
  };
  const handleUnpublish = () => {
    toggleWarningUnpublish();
    onUnpublish();
  };
  const subtitle = `${formatMessage({
    id: utils_getTrad("api.id"),
    defaultMessage: "API ID "
  })} : ${layout.apiID}`;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: title.toString(),
    primaryAction,
    subtitle,
    navigationAction: /* @__PURE__ */ react.createElement(build.Link, {
      startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null),
      onClick: (e) => {
        e.preventDefault();
        goBack();
      },
      to: "/"
    }, formatMessage({
      id: "global.back",
      defaultMessage: "Back"
    }))
  }), showWarningUnpublish && /* @__PURE__ */ react.createElement(Dialog.Dialog, {
    onClose: toggleWarningUnpublish,
    title: "Confirmation",
    labelledBy: "confirmation",
    describedBy: "confirm-description",
    isOpen: showWarningUnpublish
  }, /* @__PURE__ */ react.createElement(Dialog.DialogBody, {
    icon: /* @__PURE__ */ react.createElement((ExclamationMarkCircle_default()), null)
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center",
    style: { textAlign: "center" }
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    id: "confirm-description"
  }, formatMessage(
    {
      id: utils_getTrad("popUpWarning.warning.unpublish"),
      defaultMessage: "Unpublish this content will automatically change it to a draft."
    },
    {
      br: () => /* @__PURE__ */ react.createElement("br", null)
    }
  ))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center",
    style: { textAlign: "center" }
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    id: "confirm-description"
  }, formatMessage({
    id: utils_getTrad("popUpWarning.warning.unpublish-question"),
    defaultMessage: "Are you sure you want to unpublish it?"
  }))))), /* @__PURE__ */ react.createElement(Dialog.DialogFooter, {
    startAction: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: toggleWarningUnpublish,
      variant: "tertiary"
    }, formatMessage({
      id: "components.popUpWarning.button.cancel",
      defaultMessage: "No, cancel"
    })),
    endAction: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "danger-light",
      onClick: handleUnpublish
    }, formatMessage({
      id: "components.popUpWarning.button.confirm",
      defaultMessage: "Yes, confirm"
    }))
  })), showWarningDraftRelation && /* @__PURE__ */ react.createElement(Dialog.Dialog, {
    onClose: toggleWarningDraftRelation,
    title: "Confirmation",
    labelledBy: "confirmation",
    describedBy: "confirm-description",
    isOpen: showWarningDraftRelation
  }, /* @__PURE__ */ react.createElement(Dialog.DialogBody, {
    icon: /* @__PURE__ */ react.createElement((ExclamationMarkCircle_default()), null)
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center",
    style: { textAlign: "center" }
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    id: "confirm-description"
  }, draftRelationsCountRef.current, formatMessage(
    {
      id: utils_getTrad(`popUpwarning.warning.has-draft-relations.message`),
      defaultMessage: "<b>{count, plural, =0 { of your content relations is} one { of your content relations is} other { of your content relations are}}</b> not published yet.<br></br>It might engender broken links and errors on your project."
    },
    {
      br: () => /* @__PURE__ */ react.createElement("br", null),
      b: (chunks) => /* @__PURE__ */ react.createElement(Typography.Typography, {
        fontWeight: "bold"
      }, chunks),
      count: draftRelationsCountRef.current
    }
  ))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center",
    style: { textAlign: "center" }
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    id: "confirm-description"
  }, formatMessage({
    id: utils_getTrad("popUpWarning.warning.publish-question"),
    defaultMessage: "Do you still want to publish it?"
  }))))), /* @__PURE__ */ react.createElement(Dialog.DialogFooter, {
    startAction: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: toggleWarningDraftRelation,
      variant: "tertiary"
    }, formatMessage({
      id: "components.popUpWarning.button.cancel",
      defaultMessage: "No, cancel"
    })),
    endAction: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "success",
      onClick: handlePublish
    }, formatMessage({
      id: utils_getTrad("popUpwarning.warning.has-draft-relations.button-confirm"),
      defaultMessage: "Yes, publish"
    }))
  })));
};
Header.propTypes = {
  allowedActions: prop_types_default().shape({
    canUpdate: (prop_types_default()).bool.isRequired,
    canCreate: (prop_types_default()).bool.isRequired,
    canPublish: (prop_types_default()).bool.isRequired
  }).isRequired,
  componentLayouts: (prop_types_default()).object.isRequired,
  initialData: (prop_types_default()).object.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isSingleType: (prop_types_default()).bool.isRequired,
  status: (prop_types_default()).string.isRequired,
  layout: (prop_types_default()).object.isRequired,
  hasDraftAndPublish: (prop_types_default()).bool.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  onPublish: (prop_types_default()).func.isRequired,
  onUnpublish: (prop_types_default()).func.isRequired
};
const Header_Memoized = (0,react.memo)(Header, (react_fast_compare_default()));
/* harmony default export */ const EditView_Header = (Header_utils_connect(Header_Memoized, Header_utils_select));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/createAttributesLayout.js

const createAttributesLayout = (currentLayout, attributes) => {
  const getType = (name) => (0,lodash.get)(attributes, [name, "type"], "");
  let currentRowIndex = 0;
  const newLayout = [];
  for (let row of currentLayout) {
    const hasDynamicZone = row.some(({ name }) => getType(name) === "dynamiczone");
    if (!newLayout[currentRowIndex]) {
      newLayout[currentRowIndex] = [];
    }
    if (hasDynamicZone) {
      currentRowIndex = currentRowIndex === 0 && (0,lodash.isEmpty)(newLayout[0]) ? 0 : currentRowIndex + 1;
      if (!newLayout[currentRowIndex]) {
        newLayout[currentRowIndex] = [];
      }
      newLayout[currentRowIndex].push(row);
      currentRowIndex += 1;
    } else {
      newLayout[currentRowIndex].push(row);
    }
  }
  return newLayout.filter((arr) => arr.length > 0);
};
/* harmony default export */ const utils_createAttributesLayout = (createAttributesLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/getFieldsActionMatchingPermissions.js


const getFieldsActionMatchingPermissions = (userPermissions, slug) => {
  const getMatchingPermissions = (action) => {
    const matched = (0,build.findMatchingPermissions)(userPermissions, [
      {
        action: `plugin::content-manager.explorer.${action}`,
        subject: slug
      }
    ]);
    return (0,lodash.uniq)((0,lodash.flatMap)(matched, "properties.fields"));
  };
  return {
    createActionAllowedFields: getMatchingPermissions("create"),
    readActionAllowedFields: getMatchingPermissions("read"),
    updateActionAllowedFields: getMatchingPermissions("update")
  };
};
/* harmony default export */ const utils_getFieldsActionMatchingPermissions = (getFieldsActionMatchingPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/connect.js
var DeleteLink_utils_connect_defProp = Object.defineProperty;
var DeleteLink_utils_connect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DeleteLink_utils_connect_hasOwnProp = Object.prototype.hasOwnProperty;
var DeleteLink_utils_connect_propIsEnum = Object.prototype.propertyIsEnumerable;
var DeleteLink_utils_connect_defNormalProp = (obj, key, value) => key in obj ? DeleteLink_utils_connect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DeleteLink_utils_connect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DeleteLink_utils_connect_hasOwnProp.call(b, prop))
      DeleteLink_utils_connect_defNormalProp(a, prop, b[prop]);
  if (DeleteLink_utils_connect_getOwnPropSymbols)
    for (var prop of DeleteLink_utils_connect_getOwnPropSymbols(b)) {
      if (DeleteLink_utils_connect_propIsEnum.call(b, prop))
        DeleteLink_utils_connect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function DeleteLink_utils_connect_connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, DeleteLink_utils_connect_spreadValues(DeleteLink_utils_connect_spreadValues({}, props), selectors));
  };
}
/* harmony default export */ const DeleteLink_utils_connect = (DeleteLink_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/select.js


function DeleteLink_utils_select_useSelect() {
  const { hasDraftAndPublish, modifiedData } = (0,build.useCMEditViewDataManager)();
  let trackerProperty = {};
  if (hasDraftAndPublish) {
    const isDraft = (0,lodash.isEmpty)(modifiedData.publishedAt);
    trackerProperty = isDraft ? { status: "draft" } : { status: "published" };
  }
  return {
    hasDraftAndPublish,
    trackerProperty
  };
}
/* harmony default export */ const DeleteLink_utils_select = (DeleteLink_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/index.js
var DeleteLink_async = (__this, __arguments, generator) => {
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










const DeleteLink = ({ isCreatingEntry, onDelete, onDeleteSucceeded, trackerProperty }) => {
  const [showWarningDelete, setWarningDelete] = (0,react.useState)(false);
  const [isModalConfirmButtonLoading, setIsModalConfirmButtonLoading] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const toggleWarningDelete = () => setWarningDelete((prevState) => !prevState);
  const handleConfirmDelete = () => DeleteLink_async(void 0, null, function* () {
    try {
      setIsModalConfirmButtonLoading(true);
      yield onDelete(trackerProperty);
      setIsModalConfirmButtonLoading(false);
      toggleWarningDelete();
      onDeleteSucceeded();
    } catch (err) {
      const errorMessage = get_default()(
        err,
        "response.payload.message",
        formatMessage({ id: utils_getTrad("error.record.delete") })
      );
      setIsModalConfirmButtonLoading(false);
      toggleWarningDelete();
      toggleNotification({ type: "warning", message: errorMessage });
    }
  });
  if (isCreatingEntry) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
    onClick: toggleWarningDelete,
    size: "S",
    startIcon: /* @__PURE__ */ react.createElement((Trash_default()), null),
    variant: "danger-light"
  }, formatMessage({
    id: utils_getTrad("containers.Edit.delete-entry"),
    defaultMessage: "Delete this entry"
  })), /* @__PURE__ */ react.createElement(build.ConfirmDialog, {
    isConfirmButtonLoading: isModalConfirmButtonLoading,
    isOpen: showWarningDelete,
    onConfirm: handleConfirmDelete,
    onToggleDialog: toggleWarningDelete
  }));
};
DeleteLink.propTypes = {
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  onDelete: (prop_types_default()).func.isRequired,
  onDeleteSucceeded: (prop_types_default()).func.isRequired,
  trackerProperty: (prop_types_default()).object.isRequired
};
const DeleteLink_Memoized = (0,react.memo)(DeleteLink, (react_fast_compare_default()));
/* harmony default export */ const EditView_DeleteLink = (DeleteLink_utils_connect(DeleteLink_Memoized, DeleteLink_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/index.js
var EditView_defProp = Object.defineProperty;
var EditView_defProps = Object.defineProperties;
var EditView_getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var EditView_spreadProps = (a, b) => EditView_defProps(a, EditView_getOwnPropDescs(b));





























const cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const ctbPermissions = [{ action: "plugin::content-type-builder.read", subject: null }];
const EditView = ({
  allowedActions,
  isSingleType,
  goBack,
  layout,
  slug,
  id,
  origin,
  userPermissions
}) => {
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    createActionAllowedFields,
    readActionAllowedFields,
    updateActionAllowedFields
  } = (0,react.useMemo)(() => {
    return utils_getFieldsActionMatchingPermissions(userPermissions, slug);
  }, [userPermissions, slug]);
  const configurationPermissions = (0,react.useMemo)(() => {
    return isSingleType ? cmPermissions.singleTypesConfigurations : cmPermissions.collectionTypesConfigurations;
  }, [isSingleType]);
  const configurationsURL = `/content-manager/${isSingleType ? "singleType" : "collectionType"}/${slug}/configurations/edit`;
  const currentContentTypeLayoutData = get_default()(layout, ["contentType"], {});
  const DataManagementWrapper = (0,react.useMemo)(
    () => isSingleType ? components_SingleTypeFormWrapper : components_CollectionTypeFormWrapper,
    [isSingleType]
  );
  const isDynamicZone = (0,react.useCallback)((block) => {
    return block.every((subBlock) => {
      return subBlock.every((obj) => obj.fieldSchema.type === "dynamiczone");
    });
  }, []);
  const formattedContentTypeLayout = (0,react.useMemo)(() => {
    if (!currentContentTypeLayoutData.layouts) {
      return [];
    }
    return utils_createAttributesLayout(
      currentContentTypeLayoutData.layouts.edit,
      currentContentTypeLayoutData.attributes
    );
  }, [currentContentTypeLayoutData]);
  const relationsLayout = currentContentTypeLayoutData.layouts.editRelations;
  const displayedRelationsLength = relationsLayout.length;
  return /* @__PURE__ */ react.createElement(DataManagementWrapper, {
    allLayoutData: layout,
    slug,
    id,
    origin
  }, ({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData,
    onDelete,
    onDeleteSucceeded,
    onPost,
    onPublish,
    onPut,
    onUnpublish,
    redirectionLink,
    status
  }) => {
    return /* @__PURE__ */ react.createElement(components_EditViewDataManagerProvider, {
      allowedActions,
      allLayoutData: layout,
      createActionAllowedFields,
      componentsDataStructure,
      contentTypeDataStructure,
      from: redirectionLink,
      initialValues: data,
      isCreatingEntry,
      isLoadingForData,
      isSingleType,
      onPost,
      onPublish,
      onPut,
      onUnpublish,
      readActionAllowedFields,
      redirectToPreviousPage: goBack,
      slug,
      status,
      updateActionAllowedFields
    }, /* @__PURE__ */ react.createElement(Main.Main, {
      "aria-busy": status !== "resolved"
    }, /* @__PURE__ */ react.createElement(EditView_Header, {
      allowedActions
    }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 4
    }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 9,
      s: 12
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 6
    }, formattedContentTypeLayout.map((row, index) => {
      if (isDynamicZone(row)) {
        const {
          0: {
            0: { name, fieldSchema, metadatas, labelAction }
          }
        } = row;
        return /* @__PURE__ */ react.createElement(Box.Box, {
          key: index
        }, /* @__PURE__ */ react.createElement(Grid.Grid, {
          gap: 4
        }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
          col: 12,
          s: 12,
          xs: 12
        }, /* @__PURE__ */ react.createElement(components_DynamicZone, {
          name,
          fieldSchema,
          labelAction,
          metadatas
        }))));
      }
      return /* @__PURE__ */ react.createElement(Box.Box, {
        key: index,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow",
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 6,
        paddingBottom: 6,
        borderColor: "neutral150"
      }, /* @__PURE__ */ react.createElement(Stack.Stack, {
        spacing: 6
      }, row.map((grid, gridIndex) => {
        return /* @__PURE__ */ react.createElement(Grid.Grid, {
          gap: 4,
          key: gridIndex
        }, grid.map(
          ({ fieldSchema, labelAction, metadatas, name, size }) => {
            const isComponent = fieldSchema.type === "component";
            if (isComponent) {
              const {
                component,
                max,
                min,
                repeatable = false,
                required = false
              } = fieldSchema;
              return /* @__PURE__ */ react.createElement(Grid.GridItem, {
                col: size,
                s: 12,
                xs: 12,
                key: component
              }, /* @__PURE__ */ react.createElement(components_FieldComponent, {
                componentUid: component,
                labelAction,
                isRepeatable: repeatable,
                intlLabel: {
                  id: metadatas.label,
                  defaultMessage: metadatas.label
                },
                max,
                min,
                name,
                required
              }));
            }
            return /* @__PURE__ */ react.createElement(Grid.GridItem, {
              col: size,
              key: name,
              s: 12,
              xs: 12
            }, /* @__PURE__ */ react.createElement(components_Inputs, {
              fieldSchema,
              keys: name,
              labelAction,
              metadatas
            }));
          }
        ));
      })));
    }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 3,
      s: 12
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 2
    }, /* @__PURE__ */ react.createElement(EditView_DraftAndPublishBadge, null), /* @__PURE__ */ react.createElement(Box.Box, {
      as: "aside",
      "aria-labelledby": "additional-informations",
      background: "neutral0",
      borderColor: "neutral150",
      hasRadius: true,
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 6,
      shadow: "tableShadow"
    }, /* @__PURE__ */ react.createElement(EditView_Informations, null), /* @__PURE__ */ react.createElement(components_InjectionZone, {
      area: "contentManager.editView.informations"
    })), displayedRelationsLength > 0 && /* @__PURE__ */ react.createElement(Box.Box, {
      as: "aside",
      "aria-labelledby": "relations-title",
      background: "neutral0",
      borderColor: "neutral150",
      hasRadius: true,
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 6,
      shadow: "tableShadow"
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "sigma",
      textColor: "neutral600",
      id: "relations-title"
    }, formatMessage(
      {
        id: utils_getTrad("containers.Edit.relations"),
        defaultMessage: "{number, plural, =0 {relations} one {relation} other {relations}}"
      },
      { number: displayedRelationsLength }
    )), /* @__PURE__ */ react.createElement(Box.Box, {
      paddingTop: 2,
      paddingBottom: 6
    }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 4
    }, relationsLayout.map(
      ({ name, fieldSchema, labelAction, metadatas, queryInfos }) => {
        return /* @__PURE__ */ react.createElement(components_SelectWrapper, EditView_spreadProps(EditView_spreadValues(EditView_spreadValues({}, fieldSchema), metadatas), {
          key: name,
          description: metadatas.description,
          intlLabel: {
            id: metadatas.label,
            defaultMessage: metadatas.label
          },
          labelAction,
          name,
          relationsType: fieldSchema.relationType,
          queryInfos,
          placeholder: metadatas.placeholder ? {
            id: metadatas.placeholder,
            defaultMessage: metadatas.placeholder
          } : null
        }));
      }
    ))), /* @__PURE__ */ react.createElement(Box.Box, {
      as: "aside",
      "aria-labelledby": "links"
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 2
    }, /* @__PURE__ */ react.createElement(components_InjectionZone, {
      area: "contentManager.editView.right-links",
      slug
    }), slug !== "strapi::administrator" && /* @__PURE__ */ react.createElement(build.CheckPermissions, {
      permissions: ctbPermissions
    }, /* @__PURE__ */ react.createElement(build.LinkButton, {
      onClick: () => {
        trackUsage("willEditEditLayout");
      },
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement((Pencil_default()), null),
      style: { width: "100%" },
      to: `/plugins/content-type-builder/content-types/${slug}`,
      variant: "secondary"
    }, formatMessage({
      id: utils_getTrad("link-to-ctb"),
      defaultMessage: "Edit the model"
    }))), /* @__PURE__ */ react.createElement(build.CheckPermissions, {
      permissions: configurationPermissions
    }, /* @__PURE__ */ react.createElement(build.LinkButton, {
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement((Layer_default()), null),
      style: { width: "100%" },
      to: configurationsURL,
      variant: "secondary"
    }, formatMessage({
      id: "app.links.configure-view",
      defaultMessage: "Configure the view"
    }))), allowedActions.canDelete && /* @__PURE__ */ react.createElement(EditView_DeleteLink, {
      isCreatingEntry,
      onDelete,
      onDeleteSucceeded
    })))))))));
  });
};
EditView.defaultProps = {
  id: null,
  isSingleType: false,
  origin: null,
  userPermissions: []
};
EditView.propTypes = {
  allowedActions: prop_types_default().shape({
    canRead: (prop_types_default()).bool.isRequired,
    canUpdate: (prop_types_default()).bool.isRequired,
    canCreate: (prop_types_default()).bool.isRequired,
    canDelete: (prop_types_default()).bool.isRequired
  }).isRequired,
  layout: prop_types_default().shape({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      uid: (prop_types_default()).string.isRequired,
      settings: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      options: (prop_types_default()).object.isRequired,
      attributes: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired,
  id: (prop_types_default()).string,
  isSingleType: (prop_types_default()).bool,
  goBack: (prop_types_default()).func.isRequired,
  origin: (prop_types_default()).string,
  slug: (prop_types_default()).string.isRequired,
  userPermissions: (prop_types_default()).array
};

/* harmony default export */ const pages_EditView = ((0,react.memo)(EditView));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/Permissions.js
var Permissions_defProp = Object.defineProperty;
var Permissions_defProps = Object.defineProperties;
var Permissions_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Permissions_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Permissions_hasOwnProp = Object.prototype.hasOwnProperty;
var Permissions_propIsEnum = Object.prototype.propertyIsEnumerable;
var Permissions_defNormalProp = (obj, key, value) => key in obj ? Permissions_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Permissions_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Permissions_hasOwnProp.call(b, prop))
      Permissions_defNormalProp(a, prop, b[prop]);
  if (Permissions_getOwnPropSymbols)
    for (var prop of Permissions_getOwnPropSymbols(b)) {
      if (Permissions_propIsEnum.call(b, prop))
        Permissions_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Permissions_spreadProps = (a, b) => Permissions_defProps(a, Permissions_getOwnPropDescs(b));






const Permissions = (props) => {
  const viewPermissions = (0,react.useMemo)(() => utils_generatePermissionsObject(props.slug), [props.slug]);
  const { isLoading, allowedActions } = (0,build.useRBAC)(viewPermissions, props.userPermissions);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(pages_EditView, Permissions_spreadProps(Permissions_spreadValues({}, props), {
    allowedActions
  }));
};
Permissions.defaultProps = {
  permissions: []
};
Permissions.propTypes = {
  permissions: (prop_types_default()).array,
  slug: (prop_types_default()).string.isRequired,
  userPermissions: (prop_types_default()).array.isRequired
};
/* harmony default export */ const EditViewLayoutManager_Permissions = ((0,react.memo)(Permissions, (react_fast_compare_default())));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/index.js
var EditViewLayoutManager_defProp = Object.defineProperty;
var EditViewLayoutManager_defProps = Object.defineProperties;
var EditViewLayoutManager_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditViewLayoutManager_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditViewLayoutManager_hasOwnProp = Object.prototype.hasOwnProperty;
var EditViewLayoutManager_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditViewLayoutManager_defNormalProp = (obj, key, value) => key in obj ? EditViewLayoutManager_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditViewLayoutManager_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditViewLayoutManager_hasOwnProp.call(b, prop))
      EditViewLayoutManager_defNormalProp(a, prop, b[prop]);
  if (EditViewLayoutManager_getOwnPropSymbols)
    for (var prop of EditViewLayoutManager_getOwnPropSymbols(b)) {
      if (EditViewLayoutManager_propIsEnum.call(b, prop))
        EditViewLayoutManager_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditViewLayoutManager_spreadProps = (a, b) => EditViewLayoutManager_defProps(a, EditViewLayoutManager_getOwnPropDescs(b));
var EditViewLayoutManager_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (EditViewLayoutManager_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && EditViewLayoutManager_getOwnPropSymbols)
    for (var prop of EditViewLayoutManager_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && EditViewLayoutManager_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};









const EditViewLayoutManager = (_a) => {
  var _b = _a, { layout } = _b, rest = EditViewLayoutManager_objRest(_b, ["layout"]);
  const currentLayout = (0,lib.useSelector)(selectors);
  const dispatch = (0,lib.useDispatch)();
  const [{ query }] = (0,build.useQueryParams)();
  const { runHookWaterfall } = (0,build.useStrapiApp)();
  const permissions = hooks_useSyncRbac(query, rest.slug, "editView");
  (0,react.useEffect)(() => {
    const mutatedLayout = runHookWaterfall(exposedHooks/* MUTATE_EDIT_VIEW_LAYOUT */.Eo, { layout, query });
    dispatch(setLayout(mutatedLayout.layout, query));
    return () => {
      dispatch(resetProps());
    };
  }, [layout, dispatch, query, runHookWaterfall]);
  if (!currentLayout || !permissions) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(EditViewLayoutManager_Permissions, EditViewLayoutManager_spreadProps(EditViewLayoutManager_spreadValues({}, rest), {
    layout: currentLayout,
    userPermissions: permissions
  }));
};
EditViewLayoutManager.propTypes = {
  layout: prop_types_default().shape({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      uid: (prop_types_default()).string.isRequired,
      settings: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      options: (prop_types_default()).object.isRequired,
      attributes: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_EditViewLayoutManager = (EditViewLayoutManager);

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/flatMap.js
var flatMap = __webpack_require__(94654);
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/layout.js
var layout_defProp = Object.defineProperty;
var layout_defProps = Object.defineProperties;
var layout_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var layout_getOwnPropSymbols = Object.getOwnPropertySymbols;
var layout_hasOwnProp = Object.prototype.hasOwnProperty;
var layout_propIsEnum = Object.prototype.propertyIsEnumerable;
var layout_defNormalProp = (obj, key, value) => key in obj ? layout_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var layout_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (layout_hasOwnProp.call(b, prop))
      layout_defNormalProp(a, prop, b[prop]);
  if (layout_getOwnPropSymbols)
    for (var prop of layout_getOwnPropSymbols(b)) {
      if (layout_propIsEnum.call(b, prop))
        layout_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var layout_spreadProps = (a, b) => layout_defProps(a, layout_getOwnPropDescs(b));
const getRowSize = (arr) => arr.reduce((sum, value) => sum + value.size, 0);
const createLayout = (arr) => {
  return arr.reduce((acc, current, index) => {
    const row = { rowId: index, rowContent: current };
    return acc.concat(row);
  }, []);
};
const formatLayout = (arr) => {
  return arr.reduce((acc, current) => {
    let toPush = [];
    const currentRow = current.rowContent.reduce((acc2, curr) => {
      const acc2Size = getRowSize(acc2);
      if (curr.name === "_TEMP_") {
        return acc2;
      }
      if (acc2Size + curr.size <= 12) {
        acc2.push(curr);
      } else {
        toPush.push(curr);
      }
      return acc2;
    }, []);
    const rowId = acc.length === 0 ? 0 : Math.max.apply(
      Math,
      acc.map((o) => o.rowId)
    ) + 1;
    const currentRowSize = getRowSize(currentRow);
    if (currentRowSize < 12) {
      currentRow.push({ name: "_TEMP_", size: 12 - currentRowSize });
    }
    acc.push({ rowId, rowContent: currentRow });
    if (toPush.length > 0) {
      const toPushSize = getRowSize(toPush);
      if (toPushSize < 12) {
        toPush.push({ name: "_TEMP_", size: 12 - toPushSize });
      }
      acc.push({ rowId: rowId + 1, rowContent: toPush });
      toPush = [];
    }
    return acc;
  }, []).filter((row) => row.rowContent.length > 0).filter((row) => {
    if (row.rowContent.length === 1) {
      return row.rowContent[0].name !== "_TEMP_";
    }
    return true;
  });
};
const unformatLayout = (arr) => {
  return arr.reduce((acc, current) => {
    const currentRow = current.rowContent.filter((content) => content.name !== "_TEMP_");
    return acc.concat([currentRow]);
  }, []);
};
const getDefaultInputSize = (type) => {
  switch (type) {
    case "boolean":
    case "date":
    case "integer":
    case "float":
    case "biginteger":
    case "decimal":
    case "time":
      return 4;
    case "json":
    case "component":
    case "richtext":
    case "dynamiczone":
      return 12;
    default:
      return 6;
  }
};
const getFieldSize = (name, layouts = []) => {
  return layouts.reduce((acc, { rowContent }) => {
    var _a, _b;
    const size = (_b = (_a = rowContent.find((row) => row.name === name)) == null ? void 0 : _a.size) != null ? _b : null;
    if (size) {
      acc = size;
    }
    return acc;
  }, null);
};
const setFieldSize = (name, size, layouts = []) => {
  return layouts.map((row) => {
    row.rowContent = row.rowContent.map((column) => {
      if (column.name === name) {
        return layout_spreadProps(layout_spreadValues({}, column), {
          size
        });
      }
      return column;
    });
    return row;
  });
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/reducer.js






const EditSettingsView_reducer_initialState = {
  fieldForm: {},
  componentLayouts: {},
  metaToEdit: "",
  initialData: {},
  metaForm: {},
  modifiedData: {}
};
const EditSettingsView_reducer_reducer = (state = EditSettingsView_reducer_initialState, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  var _a, _b, _c;
  const layoutPathEdit = ["modifiedData", "layouts", "edit"];
  const layoutPathRelations = ["modifiedData", "layouts", "editRelations"];
  switch (action.type) {
    case "ADD_RELATION": {
      const editRelationLayoutValue = get_default()(state, layoutPathRelations, []);
      set_default()(draftState, layoutPathRelations, [...editRelationLayoutValue, action.name]);
      break;
    }
    case "MOVE_RELATION": {
      const editRelationLayoutValue = get_default()(state, layoutPathRelations, []);
      const { fromIndex, toIndex } = action;
      set_default()(
        draftState,
        layoutPathRelations,
        utils_arrayMoveItem(editRelationLayoutValue, fromIndex, toIndex)
      );
      break;
    }
    case "MOVE_ROW": {
      const editFieldLayoutValue = get_default()(state, layoutPathEdit, []);
      const { fromIndex, toIndex } = action;
      set_default()(draftState, layoutPathEdit, utils_arrayMoveItem(editFieldLayoutValue, fromIndex, toIndex));
      break;
    }
    case "ON_ADD_FIELD": {
      const newState = cloneDeep_default()(state);
      const size = getDefaultInputSize(
        get_default()(newState, ["modifiedData", "attributes", action.name, "type"], "")
      );
      const listSize = get_default()(newState, layoutPathEdit, []).length;
      const actualRowContentPath = [...layoutPathEdit, listSize - 1, "rowContent"];
      const rowContentToSet = get_default()(newState, actualRowContentPath, []);
      let newList = get_default()(newState, layoutPathEdit, []);
      if (Array.isArray(rowContentToSet)) {
        set_default()(
          newList,
          [listSize > 0 ? listSize - 1 : 0, "rowContent"],
          [...rowContentToSet, { name: action.name, size }]
        );
      } else {
        set_default()(
          newList,
          [listSize > 0 ? listSize - 1 : 0, "rowContent"],
          [{ name: action.name, size }]
        );
      }
      const formattedList = formatLayout(newList);
      set_default()(draftState, layoutPathEdit, formattedList);
      break;
    }
    case "ON_CHANGE": {
      set_default()(draftState, ["modifiedData", ...action.keys], action.value);
      break;
    }
    case "ON_CHANGE_META": {
      set_default()(draftState, ["metaForm", "metadata", ...action.keys], action.value);
      break;
    }
    case "ON_CHANGE_SIZE": {
      set_default()(draftState, ["metaForm", "size"], action.value);
      break;
    }
    case "ON_RESET": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "REMOVE_FIELD": {
      const row = get_default()(state, [...layoutPathEdit, action.rowIndex, "rowContent"], []);
      let newState = cloneDeep_default()(state);
      if (row.length === 1 || row.length === 2 && get_default()(row, [1, "name"], "") === "_TEMP_") {
        const currentRowFieldList = get_default()(state, layoutPathEdit, []);
        set_default()(
          newState,
          layoutPathEdit,
          currentRowFieldList.filter((_, index) => action.rowIndex !== index)
        );
      } else {
        set_default()(
          newState,
          [...layoutPathEdit, action.rowIndex, "rowContent"],
          row.filter((_, index) => index !== action.fieldIndex)
        );
      }
      const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
      set_default()(draftState, layoutPathEdit, updatedList);
      break;
    }
    case "REMOVE_RELATION": {
      const relationList = get_default()(state, layoutPathRelations, []);
      set_default()(
        draftState,
        layoutPathRelations,
        relationList.filter((_, index) => action.index !== index)
      );
      break;
    }
    case "REORDER_DIFF_ROW": {
      const actualRowContent = get_default()(
        state,
        [...layoutPathEdit, action.dragRowIndex, "rowContent"],
        []
      );
      const targetRowContent = get_default()(
        state,
        [...layoutPathEdit, action.hoverRowIndex, "rowContent"],
        []
      );
      const itemToInsert = get_default()(
        state,
        [...layoutPathEdit, action.dragRowIndex, "rowContent", action.dragIndex],
        {}
      );
      const rowContent = [...targetRowContent, itemToInsert];
      let newState = cloneDeep_default()(state);
      set_default()(
        newState,
        [...layoutPathEdit, action.dragRowIndex, "rowContent"],
        actualRowContent.filter((_, index) => action.dragIndex !== index)
      );
      set_default()(
        newState,
        [...layoutPathEdit, action.hoverRowIndex, "rowContent"],
        utils_arrayMoveItem(rowContent, rowContent.length - 1, action.hoverIndex)
      );
      const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
      set_default()(draftState, layoutPathEdit, updatedList);
      break;
    }
    case "REORDER_ROW": {
      const newState = cloneDeep_default()(state);
      const rowContent = get_default()(
        newState,
        [...layoutPathEdit, action.dragRowIndex, "rowContent"],
        []
      );
      set_default()(
        newState,
        [...layoutPathEdit, action.dragRowIndex, "rowContent"],
        utils_arrayMoveItem(rowContent, action.dragIndex, action.hoverIndex)
      );
      const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
      set_default()(draftState, layoutPathEdit, updatedList);
      break;
    }
    case "SET_FIELD_TO_EDIT": {
      draftState.metaToEdit = action.name;
      draftState.metaForm = {
        metadata: get_default()(state, ["modifiedData", "metadatas", action.name, "edit"], {}),
        size: (_c = getFieldSize(action.name, (_b = (_a = state.modifiedData) == null ? void 0 : _a.layouts) == null ? void 0 : _b.edit)) != null ? _c : getDefaultInputSize()
      };
      break;
    }
    case "SUBMIT_META_FORM": {
      set_default()(
        draftState,
        ["modifiedData", "metadatas", state.metaToEdit, "edit"],
        state.metaForm.metadata
      );
      const layoutsCopy = cloneDeep_default()(get_default()(state, layoutPathEdit, []));
      const nextLayoutValue = setFieldSize(state.metaToEdit, state.metaForm.size, layoutsCopy);
      if (nextLayoutValue.length > 0) {
        set_default()(draftState, layoutPathEdit, formatLayout(nextLayoutValue));
      }
      break;
    }
    case "SUBMIT_SUCCEEDED": {
      draftState.initialData = state.modifiedData;
      break;
    }
    case "UNSET_FIELD_TO_EDIT": {
      draftState.metaToEdit = "";
      draftState.metaForm = {};
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const EditSettingsView_reducer = (EditSettingsView_reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/init.js
var init_defProp = Object.defineProperty;
var init_defProps = Object.defineProperties;
var init_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var init_getOwnPropSymbols = Object.getOwnPropertySymbols;
var init_hasOwnProp = Object.prototype.hasOwnProperty;
var init_propIsEnum = Object.prototype.propertyIsEnumerable;
var init_defNormalProp = (obj, key, value) => key in obj ? init_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var init_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (init_hasOwnProp.call(b, prop))
      init_defNormalProp(a, prop, b[prop]);
  if (init_getOwnPropSymbols)
    for (var prop of init_getOwnPropSymbols(b)) {
      if (init_propIsEnum.call(b, prop))
        init_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var init_spreadProps = (a, b) => init_defProps(a, init_getOwnPropDescs(b));


const init = (initialState, mainLayout, components) => {
  let initialData = (0,lodash.cloneDeep)(mainLayout);
  (0,lodash.set)(initialData, ["layouts", "edit"], formatLayout(createLayout(mainLayout.layouts.edit)));
  return init_spreadProps(init_spreadValues({}, initialState), {
    initialData,
    modifiedData: initialData,
    componentLayouts: components
  });
};
/* harmony default export */ const EditSettingsView_init = (init);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/SimpleMenu.js
var SimpleMenu = __webpack_require__(12615);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Cog.js
var Cog = __webpack_require__(17581);
var Cog_default = /*#__PURE__*/__webpack_require__.n(Cog);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/ComponentFieldList.js












const ComponentFieldList = ({ componentUid }) => {
  const { componentLayouts } = hooks_useLayoutDnd();
  const { formatMessage } = (0,react_intl.useIntl)();
  const componentData = get_default()(componentLayouts, [componentUid], {});
  const componentLayout = get_default()(componentData, ["layouts", "edit"], []);
  return /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 3
  }, componentLayout.map((row, index) => /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4,
    key: index
  }, row.map((rowContent) => /* @__PURE__ */ react.createElement(Grid.GridItem, {
    key: rowContent.name,
    col: rowContent.size
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "center",
    background: "neutral0",
    paddingLeft: 3,
    paddingRight: 3,
    height: `${32 / 16}rem`,
    hasRadius: true,
    borderColor: "neutral200"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, rowContent.name))))))), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2
  }, /* @__PURE__ */ react.createElement(build.Link, {
    startIcon: /* @__PURE__ */ react.createElement((Cog_default()), null),
    to: `/content-manager/components/${componentUid}/configurations/edit`
  }, formatMessage({
    id: utils_getTrad("components.FieldItem.linkToComponentLayout"),
    defaultMessage: "Set the component's layout"
  }))));
};
ComponentFieldList.propTypes = {
  componentUid: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_ComponentFieldList = (ComponentFieldList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DynamicZoneList.js











const CustomFlex = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  border-radius: 50%;
  svg {
    & > * {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
    width: 12px;
    height: 12px;
  }
`;
const CustomLink = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  text-decoration: none;
  &:hover {
    ${({ theme }) => `
      background: ${theme.colors.primary100};
      svg {
        & > * {
          fill: ${theme.colors.primary600};
        }
      }
      ${Typography.Typography} {
          color: ${theme.colors.primary600};
      }
      ${CustomFlex} {
        background: ${theme.colors.primary200};
      }
      border-color: ${theme.colors.primary200};
    `}
  }
`;
const DynamicZoneList = ({ components }) => {
  const { componentLayouts } = hooks_useLayoutDnd();
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2,
    horizontal: true,
    overflow: "scroll hidden",
    padding: 3
  }, components.map((componentUid) => /* @__PURE__ */ react.createElement(CustomLink, {
    hasRadius: true,
    background: "neutral0",
    justifyContent: "center",
    alignItems: "center",
    height: `${84 / 16}rem`,
    minWidth: `${140 / 16}rem`,
    key: componentUid,
    padding: 2,
    direction: "column",
    borderColor: "neutral200",
    as: react_router_dom_min.Link,
    to: `/content-manager/components/${componentUid}/configurations/edit`
  }, /* @__PURE__ */ react.createElement(CustomFlex, {
    width: `${32 / 16}rem`,
    height: `${32 / 16}rem`,
    background: "neutral150",
    justifyContent: "center",
    alignItems: "center",
    padding: 2
  }, /* @__PURE__ */ react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: get_default()(componentLayouts, [componentUid, "info", "icon"], "")
  })), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 1
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontSize: 1,
    textColor: "neutral600",
    fontWeight: "bold"
  }, get_default()(componentLayouts, [componentUid, "info", "displayName"], ""))))));
};
DynamicZoneList.propTypes = {
  components: prop_types_default().arrayOf((prop_types_default()).string).isRequired
};
/* harmony default export */ const components_DynamicZoneList = (DynamicZoneList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/FieldButtonContent.js













const FieldButtonContent_CustomIconButton = (0,styled_components_browser_cjs["default"])(IconButton.IconButton)`
  background-color: transparent;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const FieldButtonContent = ({ attribute, onEditField, onDeleteField, children }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box.Box, {
    overflow: "hidden",
    width: "100%"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    paddingLeft: 3,
    alignItems: "center",
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "semiBold",
    textColor: "neutral800",
    ellipsis: true
  }, children), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(FieldButtonContent_CustomIconButton, {
    label: formatMessage(
      {
        id: utils_getTrad("containers.ListSettingsView.modal-form.edit-label"),
        defaultMessage: `Edit {fieldName}`
      },
      { fieldName: children }
    ),
    onClick: onEditField,
    icon: /* @__PURE__ */ react.createElement((Pencil_default()), null),
    noBorder: true
  }), /* @__PURE__ */ react.createElement(FieldButtonContent_CustomIconButton, {
    label: formatMessage(
      {
        id: "global.delete-target",
        defaultMessage: `Delete {target}`
      },
      {
        target: children
      }
    ),
    "data-testid": "delete-field",
    onClick: onDeleteField,
    icon: /* @__PURE__ */ react.createElement((Trash_default()), null),
    noBorder: true
  }))), (attribute == null ? void 0 : attribute.type) === "component" && /* @__PURE__ */ react.createElement(components_ComponentFieldList, {
    componentUid: attribute.component
  }), (attribute == null ? void 0 : attribute.type) === "dynamiczone" && /* @__PURE__ */ react.createElement(components_DynamicZoneList, {
    components: attribute.components
  }));
};
FieldButtonContent.defaultProps = {
  attribute: void 0
};
FieldButtonContent.propTypes = {
  attribute: prop_types_default().shape({
    components: (prop_types_default()).array,
    component: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onEditField: (prop_types_default()).func.isRequired,
  onDeleteField: (prop_types_default()).func.isRequired,
  children: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_FieldButtonContent = (FieldButtonContent);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DisplayedFieldButton.js












const DisplayedFieldButton_Wrapper = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  position: relative;
  ${({ isFirst, isLast, hasHorizontalPadding }) => {
  if (isFirst) {
    return `
        padding-right: 4px;
      `;
  }
  if (isLast) {
    return `
        padding-left: 4px;
      `;
  }
  if (hasHorizontalPadding) {
    return `
        padding: 0 4px;
      `;
  }
  return "";
}}
  ${({ showRightCarret, showLeftCarret, theme }) => {
  if (showRightCarret) {
    return `
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${theme.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `;
  }
  if (showLeftCarret) {
    return `
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${theme.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `;
  }
  return "";
}};
`;
const CustomDragIcon = (0,styled_components_browser_cjs["default"])((Drag_default()))`
  height: ${12 / 16}rem;
  width: ${12 / 16}rem;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const DisplayedFieldButton_CustomFlex = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  display: ${({ dragStart }) => dragStart ? "none" : "flex"};
  opacity: ${({ isDragging, isFullSize, isHidden }) => {
  if (isDragging && !isFullSize) {
    return 0.2;
  }
  if (isDragging && isFullSize || isHidden) {
    return 0;
  }
  return 1;
}};
`;
const DisplayedFieldButton_DragButton = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  cursor: all-scroll;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const DisplayedFieldButton = ({
  attribute,
  children,
  index,
  lastIndex,
  moveItem,
  moveRow,
  name,
  onDeleteField,
  onEditField,
  rowIndex,
  size
}) => {
  const [dragStart, setDragStart] = (0,react.useState)(false);
  const isHidden = name === "_TEMP_";
  const { setIsDraggingSibling } = hooks_useLayoutDnd();
  const isFullSize = size === 12;
  const dragRef = (0,react.useRef)(null);
  const dropRef = (0,react.useRef)(null);
  const [{ clientOffset, isOver }, drop] = (0,cjs.useDrop)({
    accept: ItemTypes.EDIT_FIELD,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      if (item.size !== 12) {
        return;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = index;
      const dragRow = monitor.getItem().rowIndex;
      const targetRow = rowIndex;
      if (dragIndex === hoverIndex && dragRow === targetRow) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset2 = monitor.getClientOffset();
      const hoverClientY = clientOffset2.y - hoverBoundingRect.top;
      if (dragRow < targetRow && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragRow > targetRow && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragRow, targetRow);
      item.rowIndex = targetRow;
      item.itemIndex = hoverIndex;
    },
    drop(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = index;
      const dragRow = monitor.getItem().rowIndex;
      const targetRow = rowIndex;
      if (item.size === 12) {
        return;
      }
      if (dragIndex === hoverIndex && dragRow === targetRow) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      if (Math.abs(monitor.getClientOffset().x - hoverBoundingRect.left) > hoverBoundingRect.width / 1.8) {
        moveItem(dragIndex, hoverIndex + 1, dragRow, targetRow);
        item.itemIndex = hoverIndex + 1;
        item.rowIndex = targetRow;
        return;
      }
      moveItem(dragIndex, hoverIndex, dragRow, targetRow);
      item.itemIndex = hoverIndex;
      item.rowIndex = targetRow;
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      clientOffset: monitor.getClientOffset(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      itemType: monitor.getItemType()
    })
  });
  const [{ isDragging, getItem }, drag, dragPreview] = (0,cjs.useDrag)({
    type: ItemTypes.EDIT_FIELD,
    item: () => {
      setIsDraggingSibling(true);
      return {
        index,
        labelField: children,
        rowIndex,
        name,
        size
      };
    },
    canDrag() {
      return name !== "_TEMP_";
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      getItem: monitor.getItem()
    }),
    end: () => {
      setIsDraggingSibling(false);
    }
  });
  (0,react.useEffect)(() => {
    dragPreview((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: true });
  }, [dragPreview]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  let showLeftCarret = false;
  let showRightCarret = false;
  if (dropRef.current && clientOffset) {
    const hoverBoundingRect = dropRef.current.getBoundingClientRect();
    showLeftCarret = isOver && getItem.size !== 12 && Math.abs(clientOffset.x - hoverBoundingRect.left) < hoverBoundingRect.width / 2;
    showRightCarret = isOver && getItem.size !== 12 && Math.abs(clientOffset.x - hoverBoundingRect.left) > hoverBoundingRect.width / 2;
    if (name === "_TEMP_") {
      showLeftCarret = isOver && getItem.size !== 12;
      showRightCarret = false;
    }
  }
  const getHeight = () => {
    if (attribute && isFullSize) {
      return `${74 / 16}rem`;
    }
    return `${32 / 16}rem`;
  };
  const isFirst = index === 0 && !isFullSize;
  const isLast = index === lastIndex && !isFullSize;
  const hasHorizontalPadding = index !== 0 && !isFullSize;
  return /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: size
  }, /* @__PURE__ */ react.createElement(DisplayedFieldButton_Wrapper, {
    ref: refs.dropRef,
    showLeftCarret,
    showRightCarret,
    isFirst,
    isLast,
    hasHorizontalPadding,
    onDrag: () => {
      if (isFullSize && !dragStart) {
        setDragStart(true);
      }
    },
    onDragEnd: () => {
      if (isFullSize) {
        setDragStart(false);
      }
    }
  }, dragStart && isFullSize && /* @__PURE__ */ react.createElement(Box.Box, {
    width: "100%",
    height: "2px",
    background: "primary600"
  }), /* @__PURE__ */ react.createElement(DisplayedFieldButton_CustomFlex, {
    width: isFullSize && dragStart ? 0 : "100%",
    borderColor: "neutral150",
    hasRadius: true,
    background: "neutral100",
    minHeight: getHeight(),
    alignItems: "stretch",
    isDragging,
    dragStart,
    isFullSize,
    isHidden
  }, /* @__PURE__ */ react.createElement(DisplayedFieldButton_DragButton, {
    as: "span",
    type: "button",
    ref: refs.dragRef,
    onClick: (e) => e.stopPropagation(),
    alignItems: "center",
    paddingLeft: 3,
    paddingRight: 3,
    tabIndex: -1
  }, /* @__PURE__ */ react.createElement(CustomDragIcon, null)), !isHidden && /* @__PURE__ */ react.createElement(components_FieldButtonContent, {
    attribute,
    onEditField,
    onDeleteField
  }, children))));
};
DisplayedFieldButton.defaultProps = {
  attribute: void 0
};
DisplayedFieldButton.propTypes = {
  attribute: prop_types_default().shape({
    components: (prop_types_default()).array,
    component: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  children: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  moveItem: (prop_types_default()).func.isRequired,
  moveRow: (prop_types_default()).func.isRequired,
  name: (prop_types_default()).string.isRequired,
  onDeleteField: (prop_types_default()).func.isRequired,
  onEditField: (prop_types_default()).func.isRequired,
  rowIndex: (prop_types_default()).number.isRequired,
  lastIndex: (prop_types_default()).number.isRequired,
  size: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_DisplayedFieldButton = (DisplayedFieldButton);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/RowItemsLayout.js





const RowItemsLayout = ({ rowItem, onRemoveField, rowId, rowIndex, index, lastIndex }) => {
  const { setEditFieldToSelect, attributes, modifiedData, moveRow, moveItem } = hooks_useLayoutDnd();
  const attribute = get_default()(attributes, [rowItem.name], {});
  const attributeLabel = get_default()(modifiedData, ["metadatas", rowItem.name, "edit", "label"], "");
  return /* @__PURE__ */ react.createElement(components_DisplayedFieldButton, {
    onEditField: () => setEditFieldToSelect(rowItem.name),
    onDeleteField: () => onRemoveField(rowId, index),
    attribute,
    index,
    lastIndex,
    rowIndex,
    name: rowItem.name,
    size: rowItem.size,
    moveRow,
    moveItem
  }, attributeLabel || rowItem.name);
};
RowItemsLayout.propTypes = {
  index: (prop_types_default()).number.isRequired,
  lastIndex: (prop_types_default()).number.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired,
  rowId: (prop_types_default()).number.isRequired,
  rowIndex: (prop_types_default()).number.isRequired,
  rowItem: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_RowItemsLayout = (RowItemsLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/RowsLayout.js




const RowsLayout = ({ row, onRemoveField, rowIndex }) => {
  return /* @__PURE__ */ react.createElement(Grid.Grid, null, row.rowContent.map((rowItem, index) => {
    return /* @__PURE__ */ react.createElement(components_RowItemsLayout, {
      key: rowItem.name,
      rowItem,
      index,
      rowId: row.rowId,
      onRemoveField,
      rowIndex,
      lastIndex: row.rowContent.length - 1
    });
  }));
};
RowsLayout.propTypes = {
  onRemoveField: (prop_types_default()).func.isRequired,
  row: (prop_types_default()).object.isRequired,
  rowIndex: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_RowsLayout = (RowsLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/LinkToCTB.js







const LinkToCTB_permissions = [{ action: "plugin::content-type-builder.read", subject: null }];
const LinkToCTB = () => {
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { slug, modifiedData, isContentTypeView } = hooks_useLayoutDnd();
  const type = isContentTypeView ? "content-types" : "components";
  const baseUrl = `/plugins/content-type-builder/${type === "content-types" ? type : "component-categories"}`;
  const category = get_default()(modifiedData, "category", "");
  const suffixUrl = type === "content-types" ? slug : `${category}/${slug}`;
  const handleClick = () => {
    trackUsage("willEditEditLayout");
  };
  if (slug === "strapi::administrator") {
    return null;
  }
  return /* @__PURE__ */ react.createElement(build.CheckPermissions, {
    permissions: LinkToCTB_permissions
  }, /* @__PURE__ */ react.createElement(build.LinkButton, {
    to: `${baseUrl}/${suffixUrl}`,
    onClick: handleClick,
    size: "S",
    startIcon: /* @__PURE__ */ react.createElement((Pencil_default()), null),
    variant: "secondary"
  }, formatMessage({
    id: utils_getTrad(`edit-settings-view.link-to-ctb.${type}`),
    defaultMessage: "Edit the content type"
  })));
};
/* harmony default export */ const components_LinkToCTB = (LinkToCTB);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DisplayedFields.js













const DisplayedFields = ({ editLayout, editLayoutRemainingFields, onRemoveField, onAddField }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 4
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, formatMessage({
    id: utils_getTrad("containers.ListPage.displayedFields"),
    defaultMessage: "Displayed fields"
  }))), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600"
  }, formatMessage({
    id: "containers.SettingPage.editSettings.description",
    defaultMessage: "Drag & drop the fields to build the layout"
  })))), /* @__PURE__ */ react.createElement(components_LinkToCTB, null)), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 4,
    hasRadius: true,
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: "neutral300"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, editLayout.map((row, index) => /* @__PURE__ */ react.createElement(components_RowsLayout, {
    key: row.rowId,
    row,
    rowIndex: index,
    onRemoveField
  })), /* @__PURE__ */ react.createElement(SimpleMenu.SimpleMenu, {
    id: "label",
    label: formatMessage({
      id: utils_getTrad("containers.SettingPage.add.field"),
      defaultMessage: "Insert another field"
    }),
    as: Button.Button,
    "data-testid": "add-field",
    fullWidth: true,
    startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
    endIcon: null,
    variant: "secondary",
    disabled: editLayoutRemainingFields.length === 0
  }, editLayoutRemainingFields.map((field) => /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, {
    key: field,
    onClick: () => onAddField(field)
  }, field))))));
};
DisplayedFields.propTypes = {
  editLayout: (prop_types_default()).array.isRequired,
  editLayoutRemainingFields: (prop_types_default()).array.isRequired,
  onAddField: (prop_types_default()).func.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_DisplayedFields = (DisplayedFields);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/RelationalFieldButton.js









const RelationalFieldButton_CustomDragIcon = (0,styled_components_browser_cjs["default"])((Drag_default()))`
  height: ${12 / 16}rem;
  width: ${12 / 16}rem;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const RelationalFieldButton_CustomFlex = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  opacity: ${({ isDragging }) => isDragging ? 0 : 1};
`;
const RelationalFieldButton_DragButton = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  cursor: all-scroll;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const RelationalFieldButton = ({
  attribute,
  onEditField,
  onDeleteField,
  children,
  index,
  name,
  onMoveField
}) => {
  const dragButtonRef = (0,react.useRef)();
  const [, drop] = (0,cjs.useDrop)({
    accept: ItemTypes.EDIT_RELATION,
    hover(item) {
      if (!dragButtonRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      onMoveField(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag, dragPreview] = (0,cjs.useDrag)({
    type: ItemTypes.EDIT_RELATION,
    item: () => {
      return { index, labelField: children, name };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  (0,react.useEffect)(() => {
    dragPreview((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: true });
  }, [dragPreview]);
  drag(drop(dragButtonRef));
  const getHeight = () => {
    const higherFields = ["json", "text", "file", "media", "component", "richtext", "dynamiczone"];
    if (attribute && higherFields.includes(attribute.type)) {
      return `${74 / 16}rem`;
    }
    return `${32 / 16}rem`;
  };
  return /* @__PURE__ */ react.createElement(RelationalFieldButton_CustomFlex, {
    width: "100%",
    borderColor: "neutral150",
    hasRadius: true,
    background: "neutral100",
    minHeight: getHeight(),
    alignItems: "stretch",
    isDragging
  }, /* @__PURE__ */ react.createElement(RelationalFieldButton_DragButton, {
    as: "span",
    type: "button",
    ref: dragButtonRef,
    onClick: (e) => e.stopPropagation(),
    alignItems: "center",
    paddingLeft: 3,
    paddingRight: 3,
    tabIndex: -1
  }, /* @__PURE__ */ react.createElement(RelationalFieldButton_CustomDragIcon, null)), /* @__PURE__ */ react.createElement(components_FieldButtonContent, {
    attribute,
    onEditField,
    onDeleteField
  }, children));
};
RelationalFieldButton.defaultProps = {
  attribute: void 0
};
RelationalFieldButton.propTypes = {
  attribute: prop_types_default().shape({
    components: (prop_types_default()).array,
    component: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onEditField: (prop_types_default()).func.isRequired,
  onDeleteField: (prop_types_default()).func.isRequired,
  children: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  name: (prop_types_default()).string.isRequired,
  onMoveField: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_RelationalFieldButton = (RelationalFieldButton);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/RelationalFields.js













const RelationalFields = ({
  relationsLayout,
  editRelationsLayoutRemainingFields,
  onRemoveField,
  onAddField
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { setEditFieldToSelect, modifiedData, onMoveRelation } = hooks_useLayoutDnd();
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 4
  }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, formatMessage({
    id: utils_getTrad("containers.SettingPage.relations"),
    defaultMessage: "Relational fields"
  }))), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600"
  }, formatMessage({
    id: "containers.SettingPage.editSettings.description",
    defaultMessage: "Drag & drop the fields to build the layout"
  })))), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 4,
    hasRadius: true,
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: "neutral300"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, relationsLayout.map((relationName, index) => {
    const relationLabel = get_default()(
      modifiedData,
      ["metadatas", relationName, "edit", "label"],
      ""
    );
    return /* @__PURE__ */ react.createElement(components_RelationalFieldButton, {
      onEditField: () => setEditFieldToSelect(relationName),
      onDeleteField: () => onRemoveField(index),
      key: relationName,
      index,
      name: relationName,
      onMoveField: onMoveRelation
    }, relationLabel || relationName);
  }), /* @__PURE__ */ react.createElement(SimpleMenu.SimpleMenu, {
    id: "label",
    label: formatMessage({
      id: "containers.SettingPage.add.relational-field",
      defaultMessage: "Insert another relational field"
    }),
    "data-testid": "add-relation",
    as: Button.Button,
    fullWidth: true,
    startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
    endIcon: null,
    variant: "secondary",
    disabled: editRelationsLayoutRemainingFields.length === 0
  }, editRelationsLayoutRemainingFields.map((remainingRelation) => /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, {
    id: `menuItem-${remainingRelation}`,
    key: `menuItem-${remainingRelation}`,
    onClick: () => onAddField(remainingRelation)
  }, remainingRelation))))));
};
RelationalFields.propTypes = {
  relationsLayout: (prop_types_default()).array.isRequired,
  editRelationsLayoutRemainingFields: (prop_types_default()).array.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired,
  onAddField: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_RelationalFields = (RelationalFields);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/ModalLayout.js
var ModalLayout = __webpack_require__(68991);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Date.js
var icons_Date = __webpack_require__(80342);
var Date_default = /*#__PURE__*/__webpack_require__.n(icons_Date);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Boolean.js
var Boolean = __webpack_require__(59196);
var Boolean_default = /*#__PURE__*/__webpack_require__.n(Boolean);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Email.js
var Email = __webpack_require__(99798);
var Email_default = /*#__PURE__*/__webpack_require__.n(Email);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Enumeration.js
var Enumeration = __webpack_require__(94525);
var Enumeration_default = /*#__PURE__*/__webpack_require__.n(Enumeration);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Media.js
var Media = __webpack_require__(27856);
var Media_default = /*#__PURE__*/__webpack_require__.n(Media);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Relation.js
var Relation = __webpack_require__(72758);
var Relation_default = /*#__PURE__*/__webpack_require__.n(Relation);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Text.js
var Text = __webpack_require__(50602);
var Text_default = /*#__PURE__*/__webpack_require__.n(Text);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Uid.js
var Uid = __webpack_require__(24199);
var Uid_default = /*#__PURE__*/__webpack_require__.n(Uid);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Number.js
var icons_Number = __webpack_require__(38642);
var Number_default = /*#__PURE__*/__webpack_require__.n(icons_Number);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Json.js
var Json = __webpack_require__(87994);
var Json_default = /*#__PURE__*/__webpack_require__.n(Json);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Component.js
var icons_Component = __webpack_require__(87449);
var Component_default = /*#__PURE__*/__webpack_require__.n(icons_Component);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/DynamicZone.js
var icons_DynamicZone = __webpack_require__(51408);
var DynamicZone_default = /*#__PURE__*/__webpack_require__.n(icons_DynamicZone);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldTypeIcon/index.js














const iconByTypes = {
  biginteger: /* @__PURE__ */ react.createElement((Number_default()), null),
  boolean: /* @__PURE__ */ react.createElement((Boolean_default()), null),
  date: /* @__PURE__ */ react.createElement((Date_default()), null),
  datetime: /* @__PURE__ */ react.createElement((Date_default()), null),
  decimal: /* @__PURE__ */ react.createElement((Number_default()), null),
  email: /* @__PURE__ */ react.createElement((Email_default()), null),
  enum: /* @__PURE__ */ react.createElement((Enumeration_default()), null),
  enumeration: /* @__PURE__ */ react.createElement((Enumeration_default()), null),
  file: /* @__PURE__ */ react.createElement((Media_default()), null),
  files: /* @__PURE__ */ react.createElement((Media_default()), null),
  float: /* @__PURE__ */ react.createElement((Number_default()), null),
  integer: /* @__PURE__ */ react.createElement((Number_default()), null),
  media: /* @__PURE__ */ react.createElement((Media_default()), null),
  number: /* @__PURE__ */ react.createElement((Number_default()), null),
  relation: /* @__PURE__ */ react.createElement((Relation_default()), null),
  string: /* @__PURE__ */ react.createElement((Text_default()), null),
  text: /* @__PURE__ */ react.createElement((Text_default()), null),
  richtext: /* @__PURE__ */ react.createElement((Text_default()), null),
  time: /* @__PURE__ */ react.createElement((Date_default()), null),
  timestamp: /* @__PURE__ */ react.createElement((Date_default()), null),
  json: /* @__PURE__ */ react.createElement((Json_default()), null),
  uid: /* @__PURE__ */ react.createElement((Uid_default()), null),
  component: /* @__PURE__ */ react.createElement((Component_default()), null),
  dynamiczone: /* @__PURE__ */ react.createElement((DynamicZone_default()), null)
};
const FieldTypeIcon = ({ type }) => iconByTypes[type] || null;
FieldTypeIcon.propTypes = {
  type: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_FieldTypeIcon = (FieldTypeIcon);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/createPossibleMainFieldsForModelsAndComponents.js

const createPossibleMainFieldsForModelsAndComponents = (array) => {
  return array.reduce((acc, current) => {
    const attributes = (0,lodash.get)(current, ["attributes"], {});
    const possibleMainFields = Object.keys(attributes).filter((attr) => {
      return ![
        "boolean",
        "component",
        "dynamiczone",
        "json",
        "media",
        "password",
        "relation",
        "text",
        "richtext"
      ].includes((0,lodash.get)(attributes, [attr, "type"], ""));
    });
    acc[current.uid] = possibleMainFields;
    return acc;
  }, {});
};
/* harmony default export */ const utils_createPossibleMainFieldsForModelsAndComponents = (createPossibleMainFieldsForModelsAndComponents);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/getInputProps.js

const getInputProps = (fieldName) => {
  let type;
  switch (fieldName) {
    case "description":
    case "label":
    case "placeholder":
      type = "text";
      break;
    case "mainField":
      type = "select";
      break;
    case "editable":
      type = "bool";
      break;
    default:
      type = "";
  }
  const labelId = fieldName === "mainField" ? utils_getTrad("containers.SettingPage.editSettings.entry.title") : utils_getTrad(`form.Input.${fieldName}`);
  return { type, label: { id: labelId } };
};
/* harmony default export */ const utils_getInputProps = (getInputProps);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/index.js



// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/ToggleInput.js
var ToggleInput = __webpack_require__(53575);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/GenericInput.js
var GenericInput_defProp = Object.defineProperty;
var GenericInput_getOwnPropSymbols = Object.getOwnPropertySymbols;
var GenericInput_hasOwnProp = Object.prototype.hasOwnProperty;
var GenericInput_propIsEnum = Object.prototype.propertyIsEnumerable;
var GenericInput_defNormalProp = (obj, key, value) => key in obj ? GenericInput_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var GenericInput_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (GenericInput_hasOwnProp.call(b, prop))
      GenericInput_defNormalProp(a, prop, b[prop]);
  if (GenericInput_getOwnPropSymbols)
    for (var prop of GenericInput_getOwnPropSymbols(b)) {
      if (GenericInput_propIsEnum.call(b, prop))
        GenericInput_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var GenericInput_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (GenericInput_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && GenericInput_getOwnPropSymbols)
    for (var prop of GenericInput_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && GenericInput_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};






const GenericInput = (_a) => {
  var _b = _a, { type, options, onChange, value, name } = _b, inputProps = GenericInput_objRest(_b, ["type", "options", "onChange", "value", "name"]);
  const { formatMessage } = (0,react_intl.useIntl)();
  switch (type) {
    case "text": {
      return /* @__PURE__ */ react.createElement(TextInput.TextInput, GenericInput_spreadValues({
        onChange,
        value,
        name
      }, inputProps));
    }
    case "bool": {
      return /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, GenericInput_spreadValues({
        onChange: (e) => {
          onChange({ target: { name, value: e.target.checked } });
        },
        checked: value,
        name,
        onLabel: formatMessage({
          id: "app.components.ToggleCheckbox.on-label",
          defaultMessage: "On"
        }),
        offLabel: formatMessage({
          id: "app.components.ToggleCheckbox.off-label",
          defaultMessage: "Off"
        })
      }, inputProps));
    }
    case "select": {
      return /* @__PURE__ */ react.createElement(Select.Select, GenericInput_spreadValues({
        value,
        name,
        onChange: (value2) => onChange({ target: { name, value: value2 } })
      }, inputProps), options.map((option) => /* @__PURE__ */ react.createElement(Select.Option, {
        key: option,
        value: option
      }, option)));
    }
    default:
      return null;
  }
};
GenericInput.defaultProps = {
  options: void 0
};
GenericInput.propTypes = {
  type: (prop_types_default()).string.isRequired,
  options: prop_types_default().arrayOf((prop_types_default()).string),
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]).isRequired,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_GenericInput = (GenericInput);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/ModalForm.js












const FIELD_SIZES = [
  [4, "33%"],
  [6, "50%"],
  [8, "66%"],
  [12, "100%"]
];
const NON_RESIZABLE_FIELD_TYPES = ["dynamiczone", "component", "json", "richtext"];
const ModalForm = ({ onMetaChange, onSizeChange }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { modifiedData, selectedField, attributes, fieldForm } = hooks_useLayoutDnd();
  const schemasSelector = (0,react.useMemo)(makeSelectModelAndComponentSchemas, []);
  const { schemas } = (0,lib.useSelector)((state) => schemasSelector(state), lib.shallowEqual);
  const formToDisplay = (0,react.useMemo)(() => {
    if (!selectedField) {
      return [];
    }
    const associatedMetas = get_default()(modifiedData, ["metadatas", selectedField, "edit"], {});
    return Object.keys(associatedMetas).filter((meta) => meta !== "visible");
  }, [selectedField, modifiedData]);
  const componentsAndModelsPossibleMainFields = (0,react.useMemo)(() => {
    return utils_createPossibleMainFieldsForModelsAndComponents(schemas);
  }, [schemas]);
  const getSelectedItemSelectOptions = (0,react.useCallback)(
    (formType) => {
      if (formType !== "relation" && formType !== "component") {
        return [];
      }
      const targetKey = formType === "component" ? "component" : "targetModel";
      const key = get_default()(modifiedData, ["attributes", selectedField, targetKey], "");
      return get_default()(componentsAndModelsPossibleMainFields, [key], []);
    },
    [selectedField, componentsAndModelsPossibleMainFields, modifiedData]
  );
  const metaFields = formToDisplay.map((meta) => {
    const formType = get_default()(attributes, [selectedField, "type"]);
    if (["component", "dynamiczone"].includes(formType) && !["label", "description"].includes(meta)) {
      return null;
    }
    if (formType === "component" && meta !== "label") {
      return null;
    }
    if (["media", "json", "boolean"].includes(formType) && meta === "placeholder") {
      return null;
    }
    return /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 6,
      key: meta
    }, /* @__PURE__ */ react.createElement(components_GenericInput, {
      type: utils_getInputProps(meta).type,
      hint: meta === "mainField" ? formatMessage({
        id: utils_getTrad("containers.SettingPage.editSettings.relation-field.description")
      }) : "",
      label: formatMessage({
        id: get_default()(utils_getInputProps(meta), "label.id", "app.utils.defaultMessage")
      }),
      name: meta,
      onChange: onMetaChange,
      value: get_default()(fieldForm, ["metadata", meta], ""),
      options: getSelectedItemSelectOptions(formType)
    }));
  });
  const canResize = !NON_RESIZABLE_FIELD_TYPES.includes(attributes[selectedField].type);
  const sizeField = /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    key: "size"
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    value: fieldForm == null ? void 0 : fieldForm.size,
    name: "size",
    onChange: (value) => {
      onSizeChange({ name: selectedField, value });
    },
    label: formatMessage({
      id: utils_getTrad("containers.SettingPage.editSettings.size.label"),
      defaultMessage: "Size"
    })
  }, FIELD_SIZES.map(([value, label]) => /* @__PURE__ */ react.createElement(Select.Option, {
    key: value,
    value
  }, label))));
  return /* @__PURE__ */ react.createElement(react.Fragment, null, metaFields, canResize && sizeField);
};
ModalForm.propTypes = {
  onMetaChange: (prop_types_default()).func.isRequired,
  onSizeChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalForm = (ModalForm);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/FormModal.js














const HeaderContainer = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  svg {
    width: ${32 / 16}rem;
    height: ${24 / 16}rem;
    margin-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const FormModal = ({ onToggle, onMetaChange, onSizeChange, onSubmit, type }) => {
  const { selectedField } = hooks_useLayoutDnd();
  const { formatMessage } = (0,react_intl.useIntl)();
  const getAttrType = () => {
    if (type === "timestamp") {
      return "date";
    }
    if (["decimal", "float", "integer", "biginter"].includes(type)) {
      return "number";
    }
    return type;
  };
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose: onToggle,
    labelledBy: "title"
  }, /* @__PURE__ */ react.createElement("form", {
    onSubmit
  }, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(HeaderContainer, null, /* @__PURE__ */ react.createElement(components_FieldTypeIcon, {
    type: getAttrType(type)
  }), /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "title"
  }, formatMessage(
    {
      id: utils_getTrad("containers.ListSettingsView.modal-form.edit-label"),
      defaultMessage: "Edit {fieldName}"
    },
    { fieldName: upperFirst_default()(selectedField) }
  )))), /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(components_ModalForm, {
    onMetaChange,
    onSizeChange
  }))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: onToggle,
      variant: "tertiary"
    }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
    endActions: /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit"
    }, formatMessage({ id: "global.finish", defaultMessage: "Finish" }))
  })));
};
FormModal.propTypes = {
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  onMetaChange: (prop_types_default()).func.isRequired,
  onSizeChange: (prop_types_default()).func.isRequired,
  type: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_FormModal = (FormModal);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/api.js


const putCMSettingsEV = (body, slug, isContentTypeView) => {
  return utils/* axiosInstance.put */.be.put(
    utils_getRequestUrl(
      isContentTypeView ? `content-types/${slug}/configuration` : `components/${slug}/configuration`
    ),
    body
  );
};
/* harmony default export */ const api = (putCMSettingsEV);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/index.js

































const EditSettingsView = ({ mainLayout, components, isContentTypeView, slug, updateLayout }) => {
  const [reducerState, dispatch] = (0,react.useReducer)(
    EditSettingsView_reducer,
    EditSettingsView_reducer_initialState,
    () => EditSettingsView_init(EditSettingsView_reducer_initialState, mainLayout, components)
  );
  const [isDraggingSibling, setIsDraggingSibling] = (0,react.useState)(false);
  const { trackUsage } = (0,build.useTracking)();
  const toggleNotification = (0,build.useNotification)();
  const { goBack } = (0,react_router_dom_min.useHistory)();
  const [isModalFormOpen, setIsModalFormOpen] = (0,react.useState)(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = (0,react.useState)(false);
  const { componentLayouts, initialData, modifiedData, metaToEdit, metaForm } = reducerState;
  const { formatMessage } = (0,react_intl.useIntl)();
  const modelName = get_default()(mainLayout, ["info", "displayName"], "");
  const attributes = get_default()(modifiedData, ["attributes"], {});
  const entryTitleOptions = Object.keys(attributes).filter((attr) => {
    const type = get_default()(attributes, [attr, "type"], "");
    return ![
      "dynamiczone",
      "json",
      "text",
      "relation",
      "component",
      "boolean",
      "media",
      "password",
      "richtext",
      "timestamp"
    ].includes(type) && !!type;
  });
  const editLayout = get_default()(modifiedData, ["layouts", "edit"], []);
  const displayedFields = flatMap_default()(editLayout, "rowContent");
  const editLayoutRemainingFields = Object.keys(modifiedData.attributes).filter((attr) => {
    if (!isContentTypeView) {
      return true;
    }
    return get_default()(modifiedData, ["attributes", attr, "type"], "") !== "relation";
  }).filter((attr) => get_default()(modifiedData, ["metadatas", attr, "edit", "visible"], false) === true).filter((attr) => {
    return displayedFields.findIndex((el) => el.name === attr) === -1;
  }).sort();
  const relationsLayout = get_default()(modifiedData, ["layouts", "editRelations"], []);
  const editRelationsLayoutRemainingFields = Object.keys(attributes).filter((attr) => attributes[attr].type === "relation").filter((attr) => relationsLayout.indexOf(attr) === -1);
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name.split("."),
      value
    });
  };
  const handleToggleModal = () => {
    setIsModalFormOpen((prev) => !prev);
  };
  const toggleConfirmDialog = () => {
    setIsConfirmDialogOpen((prev) => !prev);
  };
  const handleMetaChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_META",
      keys: name.split("."),
      value
    });
  };
  const handleSizeChange = ({ name, value }) => {
    dispatch({
      type: "ON_CHANGE_SIZE",
      name,
      value
    });
  };
  const handleMetaSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_META_FORM"
    });
    handleToggleModal();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleConfirmDialog();
  };
  const submitMutation = (0,react_query_lib.useMutation)(
    (body) => {
      return api(body, slug, isContentTypeView);
    },
    {
      onSuccess: ({ data }) => {
        if (updateLayout) {
          updateLayout(data.data);
        }
        dispatch({
          type: "SUBMIT_SUCCEEDED"
        });
        toggleConfirmDialog();
        trackUsage("didEditEditSettings");
      },
      onError: () => {
        toggleNotification({ type: "warning", message: { id: "notification.error" } });
      }
    }
  );
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleConfirm = () => {
    const body = pick_default()(cloneDeep_default()(modifiedData), ["layouts", "metadatas", "settings"]);
    set_default()(body, "layouts.edit", unformatLayout(body.layouts.edit));
    submitMutation.mutate(body);
  };
  const handleMoveRelation = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_RELATION",
      fromIndex,
      toIndex
    });
  };
  const handleMoveField = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_FIELD",
      fromIndex,
      toIndex
    });
  };
  const moveItem = (dragIndex, hoverIndex, dragRowIndex, hoverRowIndex) => {
    if (dragRowIndex === hoverRowIndex) {
      dispatch({
        type: "REORDER_ROW",
        dragRowIndex,
        dragIndex,
        hoverIndex
      });
    } else {
      dispatch({
        type: "REORDER_DIFF_ROW",
        dragIndex,
        hoverIndex,
        dragRowIndex,
        hoverRowIndex
      });
    }
  };
  const moveRow = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_ROW",
      fromIndex,
      toIndex
    });
  };
  return /* @__PURE__ */ react.createElement(components_LayoutDndProvider, {
    isContentTypeView,
    attributes,
    modifiedData,
    slug,
    componentLayouts,
    selectedField: metaToEdit,
    fieldForm: metaForm,
    onMoveRelation: handleMoveRelation,
    onMoveField: handleMoveField,
    moveRow,
    moveItem,
    setEditFieldToSelect: (name) => {
      dispatch({
        type: "SET_FIELD_TO_EDIT",
        name
      });
      handleToggleModal();
    },
    isDraggingSibling,
    setIsDraggingSibling
  }, /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: formatMessage(
      {
        id: utils_getTrad("components.SettingsViewWrapper.pluginHeader.title"),
        defaultMessage: `Configure the view - ${upperFirst_default()(modelName)}`
      },
      { name: upperFirst_default()(modelName) }
    ),
    subtitle: formatMessage({
      id: utils_getTrad("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),
      defaultMessage: "Customize how the edit view will look like."
    }),
    navigationAction: /* @__PURE__ */ react.createElement(build.Link, {
      startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null),
      onClick: (e) => {
        e.preventDefault();
        goBack();
      },
      to: "/"
    }, formatMessage({
      id: "global.back",
      defaultMessage: "Back"
    })),
    primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
      disabled: isEqual_default()(initialData, modifiedData),
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      type: "submit"
    }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Box.Box, {
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
    id: utils_getTrad("containers.SettingPage.settings"),
    defaultMessage: "Settings"
  })), /* @__PURE__ */ react.createElement(Grid.Grid, null, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    label: formatMessage({
      id: utils_getTrad("containers.SettingPage.editSettings.entry.title"),
      defaultMessage: "Entry title"
    }),
    hint: formatMessage({
      id: utils_getTrad("containers.SettingPage.editSettings.entry.title.description"),
      defaultMessage: "Set the display field of your entry"
    }),
    onChange: (value) => {
      handleChange({
        target: {
          name: "settings.mainField",
          value: value === "" ? null : value
        }
      });
    },
    value: modifiedData.settings.mainField
  }, entryTitleOptions.map((attribute) => /* @__PURE__ */ react.createElement(Select.Option, {
    key: attribute,
    value: attribute
  }, attribute))))), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2,
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "h3"
  }, formatMessage({
    id: utils_getTrad("containers.SettingPage.view"),
    defaultMessage: "View"
  })), /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: isContentTypeView ? 8 : 12,
    s: 12
  }, /* @__PURE__ */ react.createElement(components_DisplayedFields, {
    attributes,
    editLayout,
    editLayoutRemainingFields,
    onAddField: (field) => {
      dispatch({
        type: "ON_ADD_FIELD",
        name: field
      });
    },
    onRemoveField: (rowId, index) => {
      dispatch({
        type: "REMOVE_FIELD",
        rowIndex: rowId,
        fieldIndex: index
      });
    }
  })), isContentTypeView && /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 4,
    s: 12
  }, /* @__PURE__ */ react.createElement(components_RelationalFields, {
    editRelationsLayoutRemainingFields,
    relationsLayout,
    onAddField: (name) => dispatch({ type: "ADD_RELATION", name }),
    onRemoveField: (index) => dispatch({ type: "REMOVE_RELATION", index })
  })))))), /* @__PURE__ */ react.createElement(build.ConfirmDialog, {
    bodyText: {
      id: utils_getTrad("popUpWarning.warning.updateAllSettings"),
      defaultMessage: "This will modify all your settings"
    },
    iconRightButton: /* @__PURE__ */ react.createElement((Check_default()), null),
    isConfirmButtonLoading: isSubmittingForm,
    isOpen: isConfirmDialogOpen,
    onToggleDialog: toggleConfirmDialog,
    onConfirm: handleConfirm,
    variantRightButton: "success-light"
  })), isModalFormOpen && /* @__PURE__ */ react.createElement(components_FormModal, {
    onSubmit: handleMetaSubmit,
    onToggle: handleToggleModal,
    type: get_default()(attributes, [metaToEdit, "type"], ""),
    onMetaChange: handleMetaChange,
    onSizeChange: handleSizeChange
  })));
};
EditSettingsView.defaultProps = {
  isContentTypeView: false,
  updateLayout: null
};
EditSettingsView.propTypes = {
  components: (prop_types_default()).object.isRequired,
  isContentTypeView: (prop_types_default()).bool,
  mainLayout: prop_types_default().shape({
    attributes: (prop_types_default()).object.isRequired,
    info: (prop_types_default()).object.isRequired,
    layouts: prop_types_default().shape({
      list: (prop_types_default()).array.isRequired,
      editRelations: (prop_types_default()).array.isRequired,
      edit: (prop_types_default()).array.isRequired
    }).isRequired,
    metadatas: (prop_types_default()).object.isRequired,
    options: (prop_types_default()).object.isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired,
  updateLayout: (prop_types_default()).func
};
/* harmony default export */ const pages_EditSettingsView = (EditSettingsView);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/ListView/constants.js
var ListView_constants = __webpack_require__(28933);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/actions.js

const actions_getData = () => ({ type: ListView_constants/* GET_DATA */.ZA });
const actions_getDataSucceeded = (pagination, data) => ({
  type: ListView_constants/* GET_DATA_SUCCEEDED */.Id,
  pagination,
  data
});
const onResetListHeaders = () => ({ type: ListView_constants/* ON_RESET_LIST_HEADERS */.MP });
function ListView_actions_resetProps() {
  return { type: ListView_constants/* RESET_PROPS */.c2 };
}
const actions_setLayout = ({ components, contentType }) => {
  const { layouts } = contentType;
  return {
    contentType,
    components,
    displayedHeaders: layouts.list,
    type: ListView_constants/* SET_LIST_LAYOUT */.Zz
  };
};
const onChangeListHeaders = (target) => ({ type: ListView_constants/* ON_CHANGE_LIST_HEADERS */.Rp, target });

// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/LiveRegions.js
var LiveRegions = __webpack_require__(67422);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/ListView/reducer.js
var ListView_reducer = __webpack_require__(37562);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/selectors.js


const listViewDomain = () => (state) => state["content-manager_listView"] || ListView_reducer/* initialState */.E;
const makeSelectListView = () => (0,reselect_lib/* createSelector */.P1)(listViewDomain(), (substate) => {
  return substate;
});
const selectDisplayedHeaders = (state) => {
  const { displayedHeaders } = state["content-manager_listView"];
  return displayedHeaders;
};
/* harmony default export */ const ListView_selectors = (makeSelectListView);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/State/index.js






const State = ({ isPublished }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const content = formatMessage({
    id: utils_getTrad(`containers.List.${isPublished ? "published" : "draft"}`)
  });
  const background = isPublished ? "success100" : "secondary100";
  const textColor = isPublished ? "success700" : "secondary700";
  return /* @__PURE__ */ react.createElement(Box.Box, {
    background,
    hasRadius: true,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 2,
    paddingRight: 2,
    style: { width: "fit-content" }
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor
  }, content));
};
State.propTypes = {
  isPublished: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_State = (State);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/BaseCheckbox.js
var BaseCheckbox = __webpack_require__(46458);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(43546);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Duplicate.js
var Duplicate = __webpack_require__(54279);
var Duplicate_default = /*#__PURE__*/__webpack_require__.n(Duplicate);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Avatar.js
var Avatar = __webpack_require__(54345);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/Media/FileWrapper.js
var FileWrapper_defProp = Object.defineProperty;
var FileWrapper_getOwnPropSymbols = Object.getOwnPropertySymbols;
var FileWrapper_hasOwnProp = Object.prototype.hasOwnProperty;
var FileWrapper_propIsEnum = Object.prototype.propertyIsEnumerable;
var FileWrapper_defNormalProp = (obj, key, value) => key in obj ? FileWrapper_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var FileWrapper_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (FileWrapper_hasOwnProp.call(b, prop))
      FileWrapper_defNormalProp(a, prop, b[prop]);
  if (FileWrapper_getOwnPropSymbols)
    for (var prop of FileWrapper_getOwnPropSymbols(b)) {
      if (FileWrapper_propIsEnum.call(b, prop))
        FileWrapper_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var FileWrapper_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (FileWrapper_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && FileWrapper_getOwnPropSymbols)
    for (var prop of FileWrapper_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && FileWrapper_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





const FileWrapper_Wrapper = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`;
const FileWrapper = (_a) => {
  var _b = _a, { children } = _b, props = FileWrapper_objRest(_b, ["children"]);
  return /* @__PURE__ */ react.createElement(FileWrapper_Wrapper, FileWrapper_spreadValues({
    justifyContent: "center",
    alignItems: "center",
    as: "span"
  }, props), /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, children));
};
FileWrapper.propTypes = {
  children: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Media_FileWrapper = (FileWrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/Media/index.js






const Media_Media = ({ url, mime, alternativeText, name, ext, formats }) => {
  var _a;
  const fileURL = (0,build.prefixFileUrlWithBackendUrl)(url);
  if (mime.includes("image")) {
    const thumbnail = ((_a = formats == null ? void 0 : formats.thumbnail) == null ? void 0 : _a.url) || null;
    const mediaURL = (0,build.prefixFileUrlWithBackendUrl)(thumbnail) || fileURL;
    return /* @__PURE__ */ react.createElement(Avatar.Avatar, {
      src: mediaURL,
      alt: alternativeText || name,
      preview: true
    });
  }
  const fileExtension = (0,build.getFileExtension)(ext);
  const fileName = name.length > 100 ? `${name.substring(0, 100)}...` : name;
  return /* @__PURE__ */ react.createElement(Tooltip.Tooltip, {
    description: fileName
  }, /* @__PURE__ */ react.createElement(Media_FileWrapper, null, fileExtension));
};
Media_Media.defaultProps = {
  alternativeText: null,
  formats: null
};
Media_Media.propTypes = {
  alternativeText: (prop_types_default()).string,
  ext: (prop_types_default()).string.isRequired,
  formats: (prop_types_default()).object,
  mime: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  url: (prop_types_default()).string.isRequired
};
/* harmony default export */ const CellContent_Media = (Media_Media);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/MultipleMedias.js
var MultipleMedias_defProp = Object.defineProperty;
var MultipleMedias_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MultipleMedias_hasOwnProp = Object.prototype.hasOwnProperty;
var MultipleMedias_propIsEnum = Object.prototype.propertyIsEnumerable;
var MultipleMedias_defNormalProp = (obj, key, value) => key in obj ? MultipleMedias_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MultipleMedias_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MultipleMedias_hasOwnProp.call(b, prop))
      MultipleMedias_defNormalProp(a, prop, b[prop]);
  if (MultipleMedias_getOwnPropSymbols)
    for (var prop of MultipleMedias_getOwnPropSymbols(b)) {
      if (MultipleMedias_propIsEnum.call(b, prop))
        MultipleMedias_defNormalProp(a, prop, b[prop]);
    }
  return a;
};





const MultipleMedia = ({ value }) => {
  return /* @__PURE__ */ react.createElement(Avatar.AvatarGroup, null, value.map((file, index) => {
    const key = `${file.id}${index}`;
    if (index === 3) {
      const remainingFiles = `+${value.length - 3}`;
      return /* @__PURE__ */ react.createElement(Media_FileWrapper, {
        key,
        preview: false
      }, remainingFiles);
    }
    if (index > 3) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(CellContent_Media, MultipleMedias_spreadValues({
      key
    }, file));
  }));
};
MultipleMedia.propTypes = {
  value: prop_types_default().arrayOf(
    prop_types_default().shape({
      alternativeText: (prop_types_default()).string,
      ext: (prop_types_default()).string.isRequired,
      formats: (prop_types_default()).object,
      mime: (prop_types_default()).string.isRequired,
      name: (prop_types_default()).string.isRequired,
      url: (prop_types_default()).string.isRequired
    })
  ).isRequired
};
/* harmony default export */ const MultipleMedias = (MultipleMedia);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Badge.js
var Badge = __webpack_require__(11380);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Loader.js
var design_system_Loader = __webpack_require__(97245);
// EXTERNAL MODULE: ./node_modules/date-fns/parseISO/index.js
var parseISO = __webpack_require__(51196);
var parseISO_default = /*#__PURE__*/__webpack_require__.n(parseISO);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/CellValue.js




const CellValue = ({ type, value }) => {
  const { formatDate, formatTime, formatNumber } = (0,react_intl.useIntl)();
  let formattedValue = value;
  if (type === "date") {
    formattedValue = formatDate(parseISO_default()(value), { dateStyle: "full" });
  }
  if (type === "datetime") {
    formattedValue = formatDate(value, { dateStyle: "full", timeStyle: "short" });
  }
  if (type === "time") {
    const [hour, minute, second] = value.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    formattedValue = formatTime(date, {
      numeric: "auto",
      style: "short"
    });
  }
  if (["float", "decimal"].includes(type)) {
    formattedValue = formatNumber(value, {
      maximumFractionDigits: 21
    });
  }
  if (["integer", "biginteger"].includes(type)) {
    formattedValue = formatNumber(value, { maximumFractionDigits: 0 });
  }
  return toString_default()(formattedValue);
};
CellValue.propTypes = {
  type: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).any.isRequired
};
/* harmony default export */ const CellContent_CellValue = (CellValue);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/RelationMultiple/index.js
var RelationMultiple_defProp = Object.defineProperty;
var RelationMultiple_getOwnPropSymbols = Object.getOwnPropertySymbols;
var RelationMultiple_hasOwnProp = Object.prototype.hasOwnProperty;
var RelationMultiple_propIsEnum = Object.prototype.propertyIsEnumerable;
var RelationMultiple_defNormalProp = (obj, key, value) => key in obj ? RelationMultiple_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var RelationMultiple_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (RelationMultiple_hasOwnProp.call(b, prop))
      RelationMultiple_defNormalProp(a, prop, b[prop]);
  if (RelationMultiple_getOwnPropSymbols)
    for (var prop of RelationMultiple_getOwnPropSymbols(b)) {
      if (RelationMultiple_propIsEnum.call(b, prop))
        RelationMultiple_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var RelationMultiple_async = (__this, __arguments, generator) => {
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















const TypographyMaxWidth = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  max-width: 500px;
`;
const fetchRelation = (endPoint, notifyStatus) => RelationMultiple_async(void 0, null, function* () {
  const {
    data: { results, pagination }
  } = yield utils/* axiosInstance.get */.be.get(endPoint);
  notifyStatus();
  return { results, pagination };
});
const RelationMultiple = ({ fieldSchema, metadatas, queryInfos, name, rowId, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  const requestURL = utils_getRequestUrl(`${queryInfos.endPoint}/${rowId}/${name.split(".")[0]}`);
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const Label = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Badge.Badge, null, value.count), " ", formatMessage(
    {
      id: "content-manager.containers.ListPage.items",
      defaultMessage: "{number, plural, =0 {items} one {item} other {items}}"
    },
    { number: value.count }
  ));
  const notify = () => {
    const message = formatMessage({
      id: utils_getTrad("DynamicTable.relation-loaded"),
      defaultMessage: "Relations have been loaded"
    });
    notifyStatus(message);
  };
  const { data, status } = (0,react_query_lib.useQuery)(
    [fieldSchema.targetModel, rowId],
    () => fetchRelation(requestURL, notify),
    {
      enabled: isOpen,
      staleTime: 0
    }
  );
  return /* @__PURE__ */ react.createElement(Box.Box, RelationMultiple_spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(SimpleMenu.SimpleMenu, {
    label: Label,
    size: "S",
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false)
  }, status !== "success" && /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, {
    "aria-disabled": true
  }, /* @__PURE__ */ react.createElement(design_system_Loader.Loader, {
    small: true
  }, formatMessage({
    id: utils_getTrad("DynamicTable.relation-loading"),
    defaultMessage: "Relations are loading"
  }))), status === "success" && /* @__PURE__ */ react.createElement(react.Fragment, null, data == null ? void 0 : data.results.map((entry) => /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, {
    key: entry.id,
    "aria-disabled": true
  }, /* @__PURE__ */ react.createElement(TypographyMaxWidth, {
    ellipsis: true
  }, /* @__PURE__ */ react.createElement(CellContent_CellValue, {
    type: metadatas.mainField.schema.type,
    value: entry[metadatas.mainField.name] || entry.id
  })))), (data == null ? void 0 : data.pagination.total) > 10 && /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, {
    "aria-disabled": true,
    "aria-label": formatMessage({
      id: utils_getTrad("DynamicTable.relation-more"),
      defaultMessage: "This relation contains more entities than displayed"
    })
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, "...")))));
};
RelationMultiple.propTypes = {
  fieldSchema: prop_types_default().shape({
    relation: (prop_types_default()).string,
    targetModel: (prop_types_default()).string,
    type: (prop_types_default()).string.isRequired
  }).isRequired,
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      schema: prop_types_default().shape({ type: (prop_types_default()).string.isRequired }).isRequired
    })
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  rowId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  queryInfos: prop_types_default().shape({ endPoint: (prop_types_default()).string.isRequired }).isRequired,
  value: (prop_types_default()).object.isRequired
};
/* harmony default export */ const CellContent_RelationMultiple = (RelationMultiple);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/RelationSingle/index.js





const RelationSingle_TypographyMaxWidth = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  max-width: 500px;
`;
const RelationSingle = ({ metadatas, value }) => {
  return /* @__PURE__ */ react.createElement(RelationSingle_TypographyMaxWidth, {
    textColor: "neutral800",
    ellipsis: true
  }, /* @__PURE__ */ react.createElement(CellContent_CellValue, {
    type: metadatas.mainField.schema.type,
    value: value[metadatas.mainField.name] || value.id
  }));
};
RelationSingle.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      schema: prop_types_default().shape({ type: (prop_types_default()).string.isRequired }).isRequired
    })
  }).isRequired,
  value: (prop_types_default()).object.isRequired
};
/* harmony default export */ const CellContent_RelationSingle = (RelationSingle);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/RepeatableComponent/index.js
var RepeatableComponent_defProp = Object.defineProperty;
var RepeatableComponent_getOwnPropSymbols = Object.getOwnPropertySymbols;
var RepeatableComponent_hasOwnProp = Object.prototype.hasOwnProperty;
var RepeatableComponent_propIsEnum = Object.prototype.propertyIsEnumerable;
var RepeatableComponent_defNormalProp = (obj, key, value) => key in obj ? RepeatableComponent_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var RepeatableComponent_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (RepeatableComponent_hasOwnProp.call(b, prop))
      RepeatableComponent_defNormalProp(a, prop, b[prop]);
  if (RepeatableComponent_getOwnPropSymbols)
    for (var prop of RepeatableComponent_getOwnPropSymbols(b)) {
      if (RepeatableComponent_propIsEnum.call(b, prop))
        RepeatableComponent_defNormalProp(a, prop, b[prop]);
    }
  return a;
};










const RepeatableComponent_TypographyMaxWidth = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  max-width: 500px;
`;
const RepeatableComponentCell = ({ value, metadatas }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    mainField: { type: mainFieldType, name: mainFieldName }
  } = metadatas;
  const Label = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Badge.Badge, null, value.length), " ", formatMessage(
    {
      id: "content-manager.containers.ListPage.items",
      defaultMessage: "{number, plural, =0 {items} one {item} other {items}}"
    },
    { number: value.length }
  ));
  return /* @__PURE__ */ react.createElement(Box.Box, RepeatableComponent_spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(SimpleMenu.SimpleMenu, {
    label: Label,
    size: "S"
  }, value.map((item) => /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, {
    key: item.id,
    "aria-disabled": true
  }, /* @__PURE__ */ react.createElement(RepeatableComponent_TypographyMaxWidth, {
    ellipsis: true
  }, /* @__PURE__ */ react.createElement(CellContent_CellValue, {
    type: mainFieldType,
    value: item[mainFieldName] || item.id
  }))))));
};
RepeatableComponentCell.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string,
      type: (prop_types_default()).string,
      value: (prop_types_default()).string
    })
  }).isRequired,
  value: (prop_types_default()).array.isRequired
};
/* harmony default export */ const CellContent_RepeatableComponent = (RepeatableComponentCell);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/SingleComponent/index.js






const SingleComponent_TypographyMaxWidth = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  max-width: 250px;
`;
const SingleComponentCell = ({ value, metadatas }) => {
  const { mainField } = metadatas;
  const content = value[mainField.name];
  return /* @__PURE__ */ react.createElement(Tooltip.Tooltip, {
    label: content
  }, /* @__PURE__ */ react.createElement(SingleComponent_TypographyMaxWidth, {
    textColor: "neutral800",
    ellipsis: true
  }, /* @__PURE__ */ react.createElement(CellContent_CellValue, {
    type: mainField.type,
    value: content
  })));
};
SingleComponentCell.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string,
      type: (prop_types_default()).string,
      value: (prop_types_default()).string
    })
  }).isRequired,
  value: (prop_types_default()).object.isRequired
};
/* harmony default export */ const SingleComponent = (SingleComponentCell);

// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(81763);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/utils/isSingleRelation.js
function isSingleRelation(type) {
  return ["oneToOne", "manyToOne", "oneToOneMorph"].includes(type);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/utils/hasContent.js




function hasContent(type, content, metadatas, fieldSchema) {
  if (type === "component") {
    const {
      mainField: { name: mainFieldName, type: mainFieldType }
    } = metadatas;
    if (fieldSchema == null ? void 0 : fieldSchema.repeatable) {
      return content.length > 0;
    }
    const value = content == null ? void 0 : content[mainFieldName];
    if (mainFieldName === "id" && ![void 0, null].includes(value)) {
      return true;
    }
    if (isFieldTypeNumber(mainFieldType) && mainFieldType !== "biginteger" && mainFieldName !== "id") {
      return isNumber_default()(value);
    }
    return !isEmpty_default()(value);
  }
  if (type === "relation") {
    if (isSingleRelation(fieldSchema.relation)) {
      return !isEmpty_default()(content);
    }
    return (content == null ? void 0 : content.count) > 0;
  }
  if (isFieldTypeNumber(type) && type !== "biginteger") {
    return isNumber_default()(content);
  }
  if (type === "boolean") {
    return content !== null;
  }
  return !isEmpty_default()(content);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/index.js
var CellContent_defProp = Object.defineProperty;
var CellContent_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CellContent_hasOwnProp = Object.prototype.hasOwnProperty;
var CellContent_propIsEnum = Object.prototype.propertyIsEnumerable;
var CellContent_defNormalProp = (obj, key, value) => key in obj ? CellContent_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CellContent_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CellContent_hasOwnProp.call(b, prop))
      CellContent_defNormalProp(a, prop, b[prop]);
  if (CellContent_getOwnPropSymbols)
    for (var prop of CellContent_getOwnPropSymbols(b)) {
      if (CellContent_propIsEnum.call(b, prop))
        CellContent_defNormalProp(a, prop, b[prop]);
    }
  return a;
};













const CellContent_TypographyMaxWidth = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  max-width: 300px;
`;
const CellContent = ({ content, fieldSchema, metadatas, name, queryInfos, rowId }) => {
  const { type } = fieldSchema;
  if (!hasContent(type, content, metadatas, fieldSchema)) {
    return /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "neutral800"
    }, "-");
  }
  switch (type) {
    case "media":
      if (!fieldSchema.multiple) {
        return /* @__PURE__ */ react.createElement(CellContent_Media, CellContent_spreadValues({}, content));
      }
      return /* @__PURE__ */ react.createElement(MultipleMedias, {
        value: content
      });
    case "relation": {
      if (isSingleRelation(fieldSchema.relation)) {
        return /* @__PURE__ */ react.createElement(CellContent_RelationSingle, {
          metadatas,
          value: content
        });
      }
      return /* @__PURE__ */ react.createElement(CellContent_RelationMultiple, {
        fieldSchema,
        queryInfos,
        metadatas,
        value: content,
        name,
        rowId
      });
    }
    case "component":
      if (fieldSchema.repeatable === true) {
        return /* @__PURE__ */ react.createElement(CellContent_RepeatableComponent, {
          value: content,
          metadatas
        });
      }
      return /* @__PURE__ */ react.createElement(SingleComponent, {
        value: content,
        metadatas
      });
    default:
      return /* @__PURE__ */ react.createElement(CellContent_TypographyMaxWidth, {
        ellipsis: true,
        textColor: "neutral800"
      }, /* @__PURE__ */ react.createElement(CellContent_CellValue, {
        type,
        value: content
      }));
  }
};
CellContent.defaultProps = {
  content: void 0,
  queryInfos: void 0
};
CellContent.propTypes = {
  content: (prop_types_default()).any,
  fieldSchema: prop_types_default().shape({
    component: (prop_types_default()).string,
    multiple: (prop_types_default()).bool,
    type: (prop_types_default()).string.isRequired,
    repeatable: (prop_types_default()).bool,
    relation: (prop_types_default()).string
  }).isRequired,
  metadatas: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  rowId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  queryInfos: prop_types_default().shape({ endPoint: (prop_types_default()).string.isRequired })
};
/* harmony default export */ const DynamicTable_CellContent = (CellContent);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/TableRows/index.js
var TableRows_defProp = Object.defineProperty;
var TableRows_defProps = Object.defineProperties;
var TableRows_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TableRows_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TableRows_hasOwnProp = Object.prototype.hasOwnProperty;
var TableRows_propIsEnum = Object.prototype.propertyIsEnumerable;
var TableRows_defNormalProp = (obj, key, value) => key in obj ? TableRows_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TableRows_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TableRows_hasOwnProp.call(b, prop))
      TableRows_defNormalProp(a, prop, b[prop]);
  if (TableRows_getOwnPropSymbols)
    for (var prop of TableRows_getOwnPropSymbols(b)) {
      if (TableRows_propIsEnum.call(b, prop))
        TableRows_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TableRows_spreadProps = (a, b) => TableRows_defProps(a, TableRows_getOwnPropDescs(b));
var TableRows_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TableRows_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TableRows_getOwnPropSymbols)
    for (var prop of TableRows_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TableRows_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
















const TableRows = ({
  canCreate,
  canDelete,
  headers,
  entriesToDelete,
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows
}) => {
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const pluginsQueryParams = hooks_usePluginsQueryParams();
  return /* @__PURE__ */ react.createElement(Table.Tbody, null, rows.map((data, index) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    const itemLineText = formatMessage(
      {
        id: "content-manager.components.DynamicTable.row-line",
        defaultMessage: "item line {number}"
      },
      { number: index }
    );
    return /* @__PURE__ */ react.createElement(Table.Tr, TableRows_spreadValues({
      key: data.id
    }, (0,build.onRowClick)({
      fn: () => {
        trackUsage("willEditEntryFromList");
        push({
          pathname: `${pathname}/${data.id}`,
          state: { from: pathname },
          search: pluginsQueryParams
        });
      },
      condition: withBulkActions
    })), withMainAction && /* @__PURE__ */ react.createElement(Table.Td, TableRows_spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(BaseCheckbox.BaseCheckbox, {
      "aria-label": formatMessage(
        {
          id: "app.component.table.select.one-entry",
          defaultMessage: `Select {target}`
        },
        { target: (0,src_utils/* getFullName */.Pp)(data.firstname, data.lastname) }
      ),
      checked: isChecked,
      onChange: () => {
        onSelectRow({ name: data.id, value: !isChecked });
      }
    })), headers.map((_a) => {
      var _b = _a, { key, cellFormatter, name } = _b, rest = TableRows_objRest(_b, ["key", "cellFormatter", "name"]);
      return /* @__PURE__ */ react.createElement(Table.Td, {
        key
      }, typeof cellFormatter === "function" ? cellFormatter(data, TableRows_spreadValues({ key, name }, rest)) : /* @__PURE__ */ react.createElement(DynamicTable_CellContent, TableRows_spreadProps(TableRows_spreadValues({
        content: data[name.split(".")[0]],
        name
      }, rest), {
        rowId: data.id
      })));
    }), withBulkActions && /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, TableRows_spreadValues({
      justifyContent: "end"
    }, build.stopPropagation), /* @__PURE__ */ react.createElement(IconButton.IconButton, {
      onClick: () => {
        trackUsage("willEditEntryFromButton");
        push({
          pathname: `${pathname}/${data.id}`,
          state: { from: pathname },
          search: pluginsQueryParams
        });
      },
      label: formatMessage(
        { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
        { target: itemLineText }
      ),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement((Pencil_default()), null)
    }), canCreate && /* @__PURE__ */ react.createElement(Box.Box, {
      paddingLeft: 1
    }, /* @__PURE__ */ react.createElement(IconButton.IconButton, {
      onClick: () => {
        push({
          pathname: `${pathname}/create/clone/${data.id}`,
          state: { from: pathname },
          search: pluginsQueryParams
        });
      },
      label: formatMessage(
        {
          id: "app.component.table.duplicate",
          defaultMessage: "Duplicate {target}"
        },
        { target: itemLineText }
      ),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement((Duplicate_default()), null)
    })), canDelete && /* @__PURE__ */ react.createElement(Box.Box, {
      paddingLeft: 1
    }, /* @__PURE__ */ react.createElement(IconButton.IconButton, {
      onClick: () => {
        trackUsage("willDeleteEntryFromList");
        onClickDelete(data.id);
      },
      label: formatMessage(
        { id: "global.delete-target", defaultMessage: "Delete {target}" },
        { target: itemLineText }
      ),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement((Trash_default()), null)
    })))));
  }));
};
TableRows.defaultProps = {
  canCreate: false,
  canDelete: false,
  entriesToDelete: [],
  onClickDelete: () => {
  },
  onSelectRow: () => {
  },
  rows: [],
  withBulkActions: false,
  withMainAction: false
};
TableRows.propTypes = {
  canCreate: (prop_types_default()).bool,
  canDelete: (prop_types_default()).bool,
  entriesToDelete: (prop_types_default()).array,
  headers: (prop_types_default()).array.isRequired,
  onClickDelete: (prop_types_default()).func,
  onSelectRow: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool,
  withMainAction: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable_TableRows = (TableRows);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InjectionZoneList/index.js
var InjectionZoneList_defProp = Object.defineProperty;
var InjectionZoneList_getOwnPropSymbols = Object.getOwnPropertySymbols;
var InjectionZoneList_hasOwnProp = Object.prototype.hasOwnProperty;
var InjectionZoneList_propIsEnum = Object.prototype.propertyIsEnumerable;
var InjectionZoneList_defNormalProp = (obj, key, value) => key in obj ? InjectionZoneList_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var InjectionZoneList_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (InjectionZoneList_hasOwnProp.call(b, prop))
      InjectionZoneList_defNormalProp(a, prop, b[prop]);
  if (InjectionZoneList_getOwnPropSymbols)
    for (var prop of InjectionZoneList_getOwnPropSymbols(b)) {
      if (InjectionZoneList_propIsEnum.call(b, prop))
        InjectionZoneList_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var InjectionZoneList_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (InjectionZoneList_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && InjectionZoneList_getOwnPropSymbols)
    for (var prop of InjectionZoneList_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && InjectionZoneList_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const InjectionZoneList = (_a) => {
  var _b = _a, { area } = _b, props = InjectionZoneList_objRest(_b, ["area"]);
  const compos = hooks_useInjectionZone(area);
  if (!compos) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("ul", null, compos.map((compo) => {
    const component = compo.Component(props);
    if (component) {
      return /* @__PURE__ */ react.createElement(Box.Box, {
        key: compo.name,
        padding: 3,
        style: { textAlign: "center" }
      }, /* @__PURE__ */ react.createElement(compo.Component, InjectionZoneList_spreadValues({}, props)));
    }
    return null;
  }));
};
InjectionZoneList.propTypes = {
  area: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_InjectionZoneList = (InjectionZoneList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/ConfirmDialogDeleteAll/index.js












const ConfirmDialogDeleteAll = ({ isConfirmButtonLoading, isOpen, onToggleDialog, onConfirm }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Dialog.Dialog, {
    onClose: onToggleDialog,
    title: formatMessage({
      id: "app.components.ConfirmDialog.title",
      defaultMessage: "Confirmation"
    }),
    labelledBy: "confirmation",
    describedBy: "confirm-description",
    isOpen
  }, /* @__PURE__ */ react.createElement(Dialog.DialogBody, {
    icon: /* @__PURE__ */ react.createElement((ExclamationMarkCircle_default()), null)
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    id: "confirm-description"
  }, formatMessage({
    id: utils_getTrad("popUpWarning.bodyMessage.contentType.delete.all"),
    defaultMessage: "Are you sure you want to delete these entries?"
  }))), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(components_InjectionZoneList, {
    area: "contentManager.listView.deleteModalAdditionalInfos"
  })))), /* @__PURE__ */ react.createElement(Dialog.DialogFooter, {
    startAction: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: onToggleDialog,
      variant: "tertiary"
    }, formatMessage({
      id: "app.components.Button.cancel",
      defaultMessage: "Cancel"
    })),
    endAction: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: onConfirm,
      variant: "danger-light",
      startIcon: /* @__PURE__ */ react.createElement((Trash_default()), null),
      id: "confirm-delete",
      loading: isConfirmButtonLoading
    }, formatMessage({
      id: "app.components.Button.confirm",
      defaultMessage: "Confirm"
    }))
  }));
};
ConfirmDialogDeleteAll.propTypes = {
  isConfirmButtonLoading: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  onConfirm: (prop_types_default()).func.isRequired,
  onToggleDialog: (prop_types_default()).func.isRequired
};
/* harmony default export */ const DynamicTable_ConfirmDialogDeleteAll = (ConfirmDialogDeleteAll);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/ConfirmDialogDelete/index.js











const ConfirmDialogDelete = ({ isConfirmButtonLoading, isOpen, onToggleDialog, onConfirm }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Dialog.Dialog, {
    onClose: onToggleDialog,
    title: formatMessage({
      id: "app.components.ConfirmDialog.title",
      defaultMessage: "Confirmation"
    }),
    labelledBy: "confirmation",
    describedBy: "confirm-description",
    isOpen
  }, /* @__PURE__ */ react.createElement(Dialog.DialogBody, {
    icon: /* @__PURE__ */ react.createElement((ExclamationMarkCircle_default()), null)
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    id: "confirm-description"
  }, formatMessage({
    id: "components.popUpWarning.message",
    defaultMessage: "Are you sure you want to delete this?"
  }))), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(components_InjectionZoneList, {
    area: "contentManager.listView.deleteModalAdditionalInfos"
  })))), /* @__PURE__ */ react.createElement(Dialog.DialogFooter, {
    startAction: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: onToggleDialog,
      variant: "tertiary"
    }, formatMessage({
      id: "app.components.Button.cancel",
      defaultMessage: "Cancel"
    })),
    endAction: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: onConfirm,
      variant: "danger-light",
      startIcon: /* @__PURE__ */ react.createElement((Trash_default()), null),
      id: "confirm-delete",
      loading: isConfirmButtonLoading
    }, formatMessage({
      id: "app.components.Button.confirm",
      defaultMessage: "Confirm"
    }))
  }));
};
ConfirmDialogDelete.propTypes = {
  isConfirmButtonLoading: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  onConfirm: (prop_types_default()).func.isRequired,
  onToggleDialog: (prop_types_default()).func.isRequired
};
/* harmony default export */ const DynamicTable_ConfirmDialogDelete = (ConfirmDialogDelete);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/index.js
var DynamicTable_defProp = Object.defineProperty;
var DynamicTable_defProps = Object.defineProperties;
var DynamicTable_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DynamicTable_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DynamicTable_hasOwnProp = Object.prototype.hasOwnProperty;
var DynamicTable_propIsEnum = Object.prototype.propertyIsEnumerable;
var DynamicTable_defNormalProp = (obj, key, value) => key in obj ? DynamicTable_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DynamicTable_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DynamicTable_hasOwnProp.call(b, prop))
      DynamicTable_defNormalProp(a, prop, b[prop]);
  if (DynamicTable_getOwnPropSymbols)
    for (var prop of DynamicTable_getOwnPropSymbols(b)) {
      if (DynamicTable_propIsEnum.call(b, prop))
        DynamicTable_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DynamicTable_spreadProps = (a, b) => DynamicTable_defProps(a, DynamicTable_getOwnPropDescs(b));













const DynamicTable = ({
  canCreate,
  canDelete,
  contentTypeName,
  action,
  isBulkable,
  isLoading,
  onConfirmDelete,
  onConfirmDeleteAll,
  layout,
  rows
}) => {
  const { runHookWaterfall } = (0,build.useStrapiApp)();
  const hasDraftAndPublish = layout.contentType.options.draftAndPublish || false;
  const { formatMessage } = (0,react_intl.useIntl)();
  const displayedHeaders = (0,lib.useSelector)(selectDisplayedHeaders);
  const tableHeaders = (0,react.useMemo)(() => {
    const headers = runHookWaterfall(exposedHooks/* INJECT_COLUMN_IN_TABLE */.No, {
      displayedHeaders,
      layout
    });
    const formattedHeaders = headers.displayedHeaders.map((header) => {
      if (header.fieldSchema.type === "relation") {
        const sortFieldValue = `${header.name}.${header.metadatas.mainField.name}`;
        return DynamicTable_spreadProps(DynamicTable_spreadValues({}, header), {
          name: sortFieldValue
        });
      }
      return header;
    });
    if (!hasDraftAndPublish) {
      return formattedHeaders;
    }
    return [
      ...formattedHeaders,
      {
        key: "__published_at_temp_key__",
        name: "publishedAt",
        fieldSchema: {
          type: "custom"
        },
        metadatas: {
          label: formatMessage({ id: utils_getTrad("containers.ListPage.table-headers.published_at") }),
          searchable: false,
          sortable: true
        },
        cellFormatter: (cellData) => {
          const isPublished = !isEmpty_default()(cellData.publishedAt);
          return /* @__PURE__ */ react.createElement(components_State, {
            isPublished
          });
        }
      }
    ];
  }, [runHookWaterfall, displayedHeaders, layout, hasDraftAndPublish, formatMessage]);
  return /* @__PURE__ */ react.createElement(build.DynamicTable, {
    components: { ConfirmDialogDelete: DynamicTable_ConfirmDialogDelete, ConfirmDialogDeleteAll: DynamicTable_ConfirmDialogDeleteAll },
    contentType: contentTypeName,
    action,
    isLoading,
    headers: tableHeaders,
    onConfirmDelete,
    onConfirmDeleteAll,
    onOpenDeleteAllModalTrackedEvent: "willBulkDeleteEntries",
    rows,
    withBulkActions: true,
    withMainAction: canDelete && isBulkable
  }, /* @__PURE__ */ react.createElement(DynamicTable_TableRows, {
    canCreate,
    canDelete,
    headers: tableHeaders,
    rows,
    withBulkActions: true,
    withMainAction: canDelete && isBulkable
  }));
};
DynamicTable.defaultProps = {
  action: void 0
};
DynamicTable.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canDelete: (prop_types_default()).bool.isRequired,
  contentTypeName: (prop_types_default()).string.isRequired,
  action: (prop_types_default()).node,
  isBulkable: (prop_types_default()).bool.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  layout: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired,
        editRelations: (prop_types_default()).array
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired,
  onConfirmDelete: (prop_types_default()).func.isRequired,
  onConfirmDeleteAll: (prop_types_default()).func.isRequired,
  rows: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_DynamicTable = (DynamicTable);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/FieldPicker/utils/getAllAllowedHeader.js

const getAllAllowedHeaders = (attributes) => {
  const allowedAttributes = Object.keys(attributes).reduce((acc, current) => {
    const attribute = attributes[current];
    if (utils_checkIfAttributeIsDisplayable(attribute)) {
      acc.push(current);
    }
    return acc;
  }, []);
  return allowedAttributes.sort();
};
/* harmony default export */ const getAllAllowedHeader = (getAllAllowedHeaders);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/FieldPicker/index.js











const FieldPicker = ({ layout }) => {
  const dispatch = (0,lib.useDispatch)();
  const displayedHeaders = (0,lib.useSelector)(selectDisplayedHeaders);
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const allAllowedHeaders = getAllAllowedHeader(layout.contentType.attributes).map((attrName) => {
    const metadatas = layout.contentType.metadatas[attrName].list;
    return {
      name: attrName,
      intlLabel: { id: metadatas.label, defaultMessage: metadatas.label }
    };
  });
  const values = displayedHeaders.map(({ name }) => name);
  const handleChange = (updatedValues) => {
    trackUsage("didChangeDisplayedFields");
    if (updatedValues.length < values.length) {
      const removedHeader = values.filter((value) => {
        return updatedValues.indexOf(value) === -1;
      });
      dispatch(onChangeListHeaders({ name: removedHeader[0], value: true }));
    } else {
      const addedHeader = updatedValues.filter((value) => {
        return values.indexOf(value) === -1;
      });
      dispatch(onChangeListHeaders({ name: addedHeader[0], value: false }));
    }
  };
  return /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 1,
    paddingBottom: 1
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    "aria-label": "change displayed fields",
    value: values,
    onChange: handleChange,
    customizeContent: (values2) => formatMessage(
      {
        id: utils_getTrad("select.currently.selected"),
        defaultMessage: "{count} currently selected"
      },
      { count: values2.length }
    ),
    multi: true,
    size: "S"
  }, allAllowedHeaders.map((header) => {
    return /* @__PURE__ */ react.createElement(Select.Option, {
      key: header.name,
      value: header.name
    }, formatMessage({
      id: header.intlLabel.id || header.name,
      defaultMessage: header.intlLabel.defaultMessage || header.name
    }));
  })));
};
FieldPicker.propTypes = {
  layout: prop_types_default().shape({
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired,
        editRelations: (prop_types_default()).array
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const ListView_FieldPicker = ((0,react.memo)(FieldPicker));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/PaginationFooter/index.js





const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "flex-end",
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(build.PageSizeURLQuery, {
    trackedEvent: "willChangeNumberOfEntriesPerPage"
  }), /* @__PURE__ */ react.createElement(build.PaginationURLQuery, {
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
/* harmony default export */ const ListView_PaginationFooter = (PaginationFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/utils/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/AttributeFilter/hooks/useAllowedAttributes.js


const NOT_ALLOWED_FILTERS = ["json", "component", "media", "richtext", "dynamiczone", "password"];
const TIMESTAMPS = ["createdAt", "updatedAt"];
const useAllowedAttributes = (contentType, slug) => {
  const { allPermissions } = (0,build.useRBACProvider)();
  const readPermissionsForSlug = (0,build.findMatchingPermissions)(allPermissions, [
    {
      action: "plugin::content-manager.explorer.read",
      subject: slug
    }
  ]);
  const readPermissionForAttr = get_default()(readPermissionsForSlug, ["0", "properties", "fields"], []);
  const attributesArray = Object.keys(get_default()(contentType, ["attributes"]), {});
  const allowedAttributes = attributesArray.filter((attr) => {
    const current = get_default()(contentType, ["attributes", attr], {});
    if (!current.type) {
      return false;
    }
    if (NOT_ALLOWED_FILTERS.includes(current.type)) {
      return false;
    }
    if (!readPermissionForAttr.includes(attr) && attr !== "id" && !TIMESTAMPS.includes(attr)) {
      return false;
    }
    return true;
  }).sort();
  return allowedAttributes;
};
/* harmony default export */ const hooks_useAllowedAttributes = (useAllowedAttributes);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Filter.js
var Filter = __webpack_require__(88231);
var Filter_default = /*#__PURE__*/__webpack_require__.n(Filter);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/AttributeFilter/Filters.js







const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const buttonRef = (0,react.useRef)();
  const { trackUsage } = (0,build.useTracking)();
  const handleToggle = () => {
    if (!isVisible) {
      trackUsage("willFilterEntries");
    }
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 1,
    paddingBottom: 1
  }, /* @__PURE__ */ react.createElement(Button.Button, {
    variant: "tertiary",
    ref: buttonRef,
    startIcon: /* @__PURE__ */ react.createElement((Filter_default()), null),
    onClick: handleToggle,
    size: "S"
  }, formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })), isVisible && /* @__PURE__ */ react.createElement(build.FilterPopoverURLQuery, {
    displayedFilters,
    isVisible,
    onToggle: handleToggle,
    source: buttonRef
  })), /* @__PURE__ */ react.createElement(build.FilterListURLQuery, {
    filtersSchema: displayedFilters
  }));
};
Filters.propTypes = {
  displayedFilters: prop_types_default().arrayOf(
    prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      metadatas: prop_types_default().shape({ label: (prop_types_default()).string }),
      fieldSchema: prop_types_default().shape({ type: (prop_types_default()).string })
    })
  ).isRequired
};
/* harmony default export */ const AttributeFilter_Filters = (Filters);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/AttributeFilter/index.js





const AttributeFilter = ({ contentType, slug, metadatas }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const allowedAttributes = hooks_useAllowedAttributes(contentType, slug);
  const displayedFilters = allowedAttributes.map((name) => {
    const attribute = contentType.attributes[name];
    const { type, enum: options } = attribute;
    const trackedEvent = {
      name: "didFilterEntries",
      properties: { useRelation: type === "relation" }
    };
    const { mainField, label } = metadatas[name].list;
    return {
      name,
      metadatas: { label: formatMessage({ id: label, defaultMessage: label }) },
      fieldSchema: { type, options, mainField },
      trackedEvent
    };
  });
  return /* @__PURE__ */ react.createElement(AttributeFilter_Filters, {
    displayedFilters
  });
};
AttributeFilter.propTypes = {
  contentType: (prop_types_default()).object.isRequired,
  metadatas: (prop_types_default()).object.isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_AttributeFilter = (AttributeFilter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/index.js
/* provided dependency */ var ListView_console = __webpack_require__(25108);
var ListView_defProp = Object.defineProperty;
var ListView_defProps = Object.defineProperties;
var ListView_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ListView_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListView_hasOwnProp = Object.prototype.hasOwnProperty;
var ListView_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListView_defNormalProp = (obj, key, value) => key in obj ? ListView_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListView_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListView_hasOwnProp.call(b, prop))
      ListView_defNormalProp(a, prop, b[prop]);
  if (ListView_getOwnPropSymbols)
    for (var prop of ListView_getOwnPropSymbols(b)) {
      if (ListView_propIsEnum.call(b, prop))
        ListView_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ListView_spreadProps = (a, b) => ListView_defProps(a, ListView_getOwnPropDescs(b));
var ListView_async = (__this, __arguments, generator) => {
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
































const ListView_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const ListView_IconButtonCustom = (0,styled_components_browser_cjs["default"])(IconButton.IconButton)`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral900};
    }
  }
`;
function ListView({
  canCreate,
  canDelete,
  canRead,
  data,
  getData: getData2,
  getDataSucceeded: getDataSucceeded2,
  isLoading,
  layout,
  pagination,
  slug
}) {
  const { total } = pagination;
  const {
    contentType: {
      metadatas,
      settings: { bulkable: isBulkable, filterable: isFilterable, searchable: isSearchable }
    }
  } = layout;
  const toggleNotification = (0,build.useNotification)();
  const { trackUsage } = (0,build.useTracking)();
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const fetchPermissionsRef = (0,react.useRef)(refetchPermissions);
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  (0,build.useFocusWhenNavigate)();
  const [{ query }] = (0,build.useQueryParams)();
  const params = utils_buildQueryString(query);
  const pluginsQueryParams = (0,qs_lib.stringify)({ plugins: query.plugins }, { encode: false });
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const contentType = layout.contentType;
  const hasDraftAndPublish = get_default()(contentType, "options.draftAndPublish", false);
  const requestUrlRef = (0,react.useRef)("");
  const fetchData = (0,react.useCallback)(
    (endPoint, source) => ListView_async(this, null, function* () {
      getData2();
      try {
        const opts = source ? { cancelToken: source.token } : null;
        const {
          data: { results, pagination: paginationResult }
        } = yield utils/* axiosInstance.get */.be.get(endPoint, opts);
        notifyStatus(
          formatMessage(
            {
              id: utils_getTrad("utils.data-loaded"),
              defaultMessage: "{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"
            },
            { number: paginationResult.count }
          )
        );
        getDataSucceeded2(paginationResult, results);
      } catch (err) {
        if (axios_default().isCancel(err)) {
          return;
        }
        const resStatus = get_default()(err, "response.status", null);
        if (resStatus === 403) {
          yield fetchPermissionsRef.current();
          toggleNotification({
            type: "info",
            message: { id: utils_getTrad("permissions.not-allowed.update") }
          });
          push("/");
          return;
        }
        ListView_console.error(err);
        toggleNotification({
          type: "warning",
          message: { id: utils_getTrad("error.model.fetch") }
        });
      }
    }),
    [formatMessage, getData2, getDataSucceeded2, notifyStatus, push, toggleNotification]
  );
  const handleConfirmDeleteAllData = (0,react.useCallback)(
    (ids) => ListView_async(this, null, function* () {
      try {
        yield utils/* axiosInstance.post */.be.post(utils_getRequestUrl(`collection-types/${slug}/actions/bulkDelete`), {
          ids
        });
        const requestUrl = utils_getRequestUrl(`collection-types/${slug}${params}`);
        fetchData(requestUrl);
        trackUsageRef.current("didBulkDeleteEntries");
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: { id: utils_getTrad("error.record.delete") }
        });
      }
    }),
    [fetchData, params, slug, toggleNotification]
  );
  const handleConfirmDeleteData = (0,react.useCallback)(
    (idToDelete) => ListView_async(this, null, function* () {
      try {
        yield utils/* axiosInstance.delete */.be["delete"](utils_getRequestUrl(`collection-types/${slug}/${idToDelete}`));
        const requestUrl = utils_getRequestUrl(`collection-types/${slug}${params}`);
        fetchData(requestUrl);
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.delete") }
        });
      } catch (err) {
        const errorMessage = get_default()(
          err,
          "response.payload.message",
          formatMessage({ id: utils_getTrad("error.record.delete") })
        );
        toggleNotification({
          type: "warning",
          message: errorMessage
        });
      }
    }),
    [slug, params, fetchData, toggleNotification, formatMessage]
  );
  (0,react.useEffect)(() => {
    const CancelToken = (axios_default()).CancelToken;
    const source = CancelToken.source();
    const shouldSendRequest = canRead;
    const requestUrl = utils_getRequestUrl(`collection-types/${slug}${params}`);
    if (shouldSendRequest && requestUrl.includes(requestUrlRef.current)) {
      fetchData(requestUrl, source);
    }
    return () => {
      requestUrlRef.current = slug;
      source.cancel("Operation canceled by the user.");
    };
  }, [canRead, getData2, slug, params, getDataSucceeded2, fetchData]);
  const defaultHeaderLayoutTitle = formatMessage({
    id: utils_getTrad("header.name"),
    defaultMessage: "Content"
  });
  const headerLayoutTitle = formatMessage({
    id: contentType.info.displayName,
    defaultMessage: contentType.info.displayName || defaultHeaderLayoutTitle
  });
  const subtitle = canRead ? formatMessage(
    {
      id: utils_getTrad("pages.ListView.header-subtitle"),
      defaultMessage: "{number, plural, =0 {# entries} one {# entry} other {# entries}} found"
    },
    { number: total }
  ) : null;
  const getCreateAction = (props) => canCreate ? /* @__PURE__ */ react.createElement(Button.Button, ListView_spreadProps(ListView_spreadValues({}, props), {
    onClick: () => {
      const trackerProperty = hasDraftAndPublish ? { status: "draft" } : {};
      trackUsageRef.current("willCreateEntry", trackerProperty);
      push({
        pathname: `${pathname}/create`,
        search: query.plugins ? pluginsQueryParams : ""
      });
    },
    startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
  }), formatMessage({
    id: utils_getTrad("HeaderLayout.button.label-add-entry"),
    defaultMessage: "Create new entry"
  })) : null;
  return /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isLoading
  }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    primaryAction: getCreateAction(),
    subtitle,
    title: headerLayoutTitle,
    navigationAction: /* @__PURE__ */ react.createElement(build.Link, {
      startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null),
      to: "/content-manager/"
    }, formatMessage({
      id: "global.back",
      defaultMessage: "Back"
    }))
  }), !canRead && /* @__PURE__ */ react.createElement(Layout.ActionLayout, {
    endActions: /* @__PURE__ */ react.createElement(components_InjectionZone, {
      area: "contentManager.listView.actions"
    })
  }), canRead && /* @__PURE__ */ react.createElement(Layout.ActionLayout, {
    endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(components_InjectionZone, {
      area: "contentManager.listView.actions"
    }), /* @__PURE__ */ react.createElement(ListView_FieldPicker, {
      layout
    }), /* @__PURE__ */ react.createElement(build.CheckPermissions, {
      permissions: ListView_cmPermissions.collectionTypesConfigurations
    }, /* @__PURE__ */ react.createElement(Box.Box, {
      paddingTop: 1,
      paddingBottom: 1
    }, /* @__PURE__ */ react.createElement(ListView_IconButtonCustom, {
      onClick: () => {
        trackUsage("willEditListLayout");
        push({ pathname: `${slug}/configurations/list`, search: pluginsQueryParams });
      },
      icon: /* @__PURE__ */ react.createElement((Cog_default()), null),
      label: formatMessage({
        id: "app.links.configure-view",
        defaultMessage: "Configure the view"
      })
    })))),
    startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, isSearchable && /* @__PURE__ */ react.createElement(build.SearchURLQuery, {
      label: formatMessage(
        { id: "app.component.search.label", defaultMessage: "Search for {target}" },
        { target: headerLayoutTitle }
      ),
      placeholder: formatMessage({
        id: "global.search",
        defaultMessage: "Search"
      }),
      trackedEvent: "didSearch"
    }), isFilterable && /* @__PURE__ */ react.createElement(components_AttributeFilter, {
      contentType,
      slug,
      metadatas
    }))
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, canRead ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(components_DynamicTable, {
    canCreate,
    canDelete,
    contentTypeName: headerLayoutTitle,
    onConfirmDeleteAll: handleConfirmDeleteAllData,
    onConfirmDelete: handleConfirmDeleteData,
    isBulkable,
    isLoading,
    layout,
    rows: data,
    action: getCreateAction({ variant: "secondary" })
  }), /* @__PURE__ */ react.createElement(ListView_PaginationFooter, {
    pagination: { pageCount: (pagination == null ? void 0 : pagination.pageCount) || 1 }
  })) : /* @__PURE__ */ react.createElement(build.NoPermissions, null)));
}
ListView.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canDelete: (prop_types_default()).bool.isRequired,
  canRead: (prop_types_default()).bool.isRequired,
  data: (prop_types_default()).array.isRequired,
  layout: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      info: prop_types_default().shape({ displayName: (prop_types_default()).string.isRequired }).isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired,
        editRelations: (prop_types_default()).array
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  getData: (prop_types_default()).func.isRequired,
  getDataSucceeded: (prop_types_default()).func.isRequired,
  pagination: prop_types_default().shape({ total: (prop_types_default()).number.isRequired, pageCount: (prop_types_default()).number }).isRequired,
  slug: (prop_types_default()).string.isRequired
};
const mapStateToProps = ListView_selectors();
function mapDispatchToProps(dispatch) {
  return (0,redux.bindActionCreators)(
    {
      getData: actions_getData,
      getDataSucceeded: actions_getDataSucceeded,
      onChangeListHeaders: onChangeListHeaders,
      onResetListHeaders: onResetListHeaders
    },
    dispatch
  );
}
const withConnect = (0,lib.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const pages_ListView = ((0,redux.compose)(withConnect)((0,react.memo)(ListView, (react_fast_compare_default()))));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListViewLayoutManager/Permissions.js
var ListViewLayoutManager_Permissions_defProp = Object.defineProperty;
var ListViewLayoutManager_Permissions_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListViewLayoutManager_Permissions_hasOwnProp = Object.prototype.hasOwnProperty;
var ListViewLayoutManager_Permissions_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListViewLayoutManager_Permissions_defNormalProp = (obj, key, value) => key in obj ? ListViewLayoutManager_Permissions_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListViewLayoutManager_Permissions_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListViewLayoutManager_Permissions_hasOwnProp.call(b, prop))
      ListViewLayoutManager_Permissions_defNormalProp(a, prop, b[prop]);
  if (ListViewLayoutManager_Permissions_getOwnPropSymbols)
    for (var prop of ListViewLayoutManager_Permissions_getOwnPropSymbols(b)) {
      if (ListViewLayoutManager_Permissions_propIsEnum.call(b, prop))
        ListViewLayoutManager_Permissions_defNormalProp(a, prop, b[prop]);
    }
  return a;
};





const Permissions_Permissions = (props) => {
  const viewPermissions = (0,react.useMemo)(() => utils_generatePermissionsObject(props.slug), [props.slug]);
  const { isLoading, allowedActions } = (0,build.useRBAC)(viewPermissions, props.permissions);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(pages_ListView, ListViewLayoutManager_Permissions_spreadValues(ListViewLayoutManager_Permissions_spreadValues({}, props), allowedActions));
};
Permissions_Permissions.defaultProps = {
  permissions: []
};
Permissions_Permissions.propTypes = {
  permissions: (prop_types_default()).array,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListViewLayoutManager_Permissions = ((0,react.memo)(Permissions_Permissions, (prev, next) => {
  const differenceBetweenRerenders = (0,build.difference)(prev, next);
  const propNamesThatHaveChanged = Object.keys(differenceBetweenRerenders).filter(
    (propName) => propName !== "state"
  );
  return propNamesThatHaveChanged.length > 0;
}));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListViewLayoutManager/index.js
var ListViewLayoutManager_defProp = Object.defineProperty;
var ListViewLayoutManager_defProps = Object.defineProperties;
var ListViewLayoutManager_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ListViewLayoutManager_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListViewLayoutManager_hasOwnProp = Object.prototype.hasOwnProperty;
var ListViewLayoutManager_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListViewLayoutManager_defNormalProp = (obj, key, value) => key in obj ? ListViewLayoutManager_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListViewLayoutManager_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListViewLayoutManager_hasOwnProp.call(b, prop))
      ListViewLayoutManager_defNormalProp(a, prop, b[prop]);
  if (ListViewLayoutManager_getOwnPropSymbols)
    for (var prop of ListViewLayoutManager_getOwnPropSymbols(b)) {
      if (ListViewLayoutManager_propIsEnum.call(b, prop))
        ListViewLayoutManager_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ListViewLayoutManager_spreadProps = (a, b) => ListViewLayoutManager_defProps(a, ListViewLayoutManager_getOwnPropDescs(b));
var ListViewLayoutManager_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ListViewLayoutManager_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ListViewLayoutManager_getOwnPropSymbols)
    for (var prop of ListViewLayoutManager_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ListViewLayoutManager_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};








const ListViewLayout = (_a) => {
  var _b = _a, { layout } = _b, props = ListViewLayoutManager_objRest(_b, ["layout"]);
  const dispatch = (0,lib.useDispatch)();
  const { replace } = (0,react_router_dom_min.useHistory)();
  const [{ query, rawQuery }] = (0,build.useQueryParams)();
  const permissions = hooks_useSyncRbac(query, props.slug, "listView");
  const redirectionLink = hooks_useFindRedirectionLink(props.slug);
  (0,react.useEffect)(() => {
    if (!rawQuery) {
      replace(redirectionLink);
    }
  }, [rawQuery, replace, redirectionLink]);
  (0,react.useEffect)(() => {
    dispatch(actions_setLayout(layout));
  }, [dispatch, layout]);
  (0,react.useEffect)(() => {
    return () => {
      dispatch(ListView_actions_resetProps());
    };
  }, [dispatch]);
  if (!permissions) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ListViewLayoutManager_Permissions, ListViewLayoutManager_spreadProps(ListViewLayoutManager_spreadValues({}, props), {
    layout,
    permissions
  }));
};
ListViewLayout.propTypes = {
  layout: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired,
        editRelations: (prop_types_default()).array
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired,
      pluginOptions: (prop_types_default()).object
    }).isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListViewLayoutManager = (ListViewLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/utils/api.js


const putCMSettingsLV = (body, slug) => {
  return utils/* axiosInstance.put */.be.put(utils_getRequestUrl(`content-types/${slug}/configuration`), body);
};
/* harmony default export */ const utils_api = (putCMSettingsLV);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/Settings.js











const FlexGap = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  gap: ${({ theme }) => theme.spaces[4]};
`;
const Settings = ({ modifiedData, onChange, sortOptions }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { settings } = modifiedData;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 4
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "h2"
  }, formatMessage({
    id: utils_getTrad("containers.SettingPage.settings"),
    defaultMessage: "Settings"
  }))), /* @__PURE__ */ react.createElement(FlexGap, {
    justifyContent: "space-between",
    wrap: "wrap",
    paddingBottom: 6
  }, /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    label: formatMessage({
      id: utils_getTrad("form.Input.search"),
      defaultMessage: "Enable search"
    }),
    onChange: (e) => {
      onChange({ target: { name: "settings.searchable", value: e.target.checked } });
    },
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "on"
    }),
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "off"
    }),
    name: "settings.searchable",
    checked: settings.searchable
  }), /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    label: formatMessage({
      id: utils_getTrad("form.Input.filters"),
      defaultMessage: "Enable filters"
    }),
    onChange: (e) => {
      onChange({ target: { name: "settings.filterable", value: e.target.checked } });
    },
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "on"
    }),
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "off"
    }),
    name: "settings.filterable",
    checked: settings.filterable
  }), /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    label: formatMessage({
      id: utils_getTrad("form.Input.bulkActions"),
      defaultMessage: "Enable bulk actions"
    }),
    onChange: (e) => {
      onChange({ target: { name: "settings.bulkable", value: e.target.checked } });
    },
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "on"
    }),
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "off"
    }),
    name: "settings.bulkable",
    checked: settings.bulkable
  })), /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    s: 12,
    col: 6
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    label: formatMessage({
      id: utils_getTrad("form.Input.pageEntries"),
      defaultMessage: "Entries per page"
    }),
    hint: formatMessage({
      id: utils_getTrad("form.Input.pageEntries.inputDescription"),
      defaultMessage: "Note: You can override this value in the Collection Type settings page."
    }),
    onChange: (value) => onChange({ target: { name: "settings.pageSize", value } }),
    name: "settings.pageSize",
    value: modifiedData.settings.pageSize || ""
  }, [10, 20, 50, 100].map((pageSize) => /* @__PURE__ */ react.createElement(Select.Option, {
    key: pageSize,
    value: pageSize
  }, pageSize)))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    s: 12,
    col: 3
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    label: formatMessage({
      id: utils_getTrad("form.Input.defaultSort"),
      defaultMessage: "Default sort attribute"
    }),
    onChange: (value) => onChange({ target: { name: "settings.defaultSortBy", value } }),
    name: "settings.defaultSortBy",
    value: modifiedData.settings.defaultSortBy || ""
  }, sortOptions.map((sortBy) => /* @__PURE__ */ react.createElement(Select.Option, {
    key: sortBy,
    value: sortBy
  }, sortBy)))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    s: 12,
    col: 3
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    label: formatMessage({
      id: utils_getTrad("form.Input.sort.order"),
      defaultMessage: "Default sort order"
    }),
    onChange: (value) => onChange({ target: { name: "settings.defaultSortOrder", value } }),
    name: "settings.defaultSortOrder",
    value: modifiedData.settings.defaultSortOrder || ""
  }, ["ASC", "DESC"].map((order) => /* @__PURE__ */ react.createElement(Select.Option, {
    key: order,
    value: order
  }, order))))));
};
Settings.defaultProps = {
  modifiedData: {},
  sortOptions: []
};
Settings.propTypes = {
  modifiedData: (prop_types_default()).object,
  onChange: (prop_types_default()).func.isRequired,
  sortOptions: (prop_types_default()).array
};
/* harmony default export */ const components_Settings = (Settings);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/DraggableCard.js
















const ActionButton = styled_components_browser_cjs["default"].button`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;
const DraggableCard_DragButton = (0,styled_components_browser_cjs["default"])(ActionButton)`
  padding: 0 ${({ theme }) => theme.spaces[3]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const DraggableCard_FieldContainer = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  max-height: ${32 / 16}rem;
  cursor: pointer;

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary100};
    border-color: ${({ theme }) => theme.colors.primary200};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }

    ${Typography.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${DraggableCard_DragButton} {
      border-right: 1px solid ${({ theme }) => theme.colors.primary200};
    }
  }
`;
const DraggableCard_FieldWrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  &:last-child {
    padding-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const DraggableCard = ({
  index,
  isDraggingSibling,
  labelField,
  onClickEditField,
  onMoveField,
  onRemoveField,
  name,
  setIsDraggingSibling
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const dragRef = (0,react.useRef)(null);
  const dropRef = (0,react.useRef)(null);
  const [, forceRerenderAfterDnd] = (0,react.useState)(false);
  const editButtonRef = (0,react.useRef)();
  const cardEllipsisTitle = utils_ellipsisCardTitle(labelField);
  const handleClickEditRow = () => {
    if (editButtonRef.current) {
      editButtonRef.current.click();
    }
  };
  const [, drop] = (0,cjs.useDrop)({
    accept: ItemTypes.FIELD,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }
      onMoveField(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag, preview] = (0,cjs.useDrag)({
    type: ItemTypes.FIELD,
    item: () => {
      return { index, labelField, name };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end: () => {
      setIsDraggingSibling(false);
    }
  });
  (0,react.useEffect)(() => {
    preview((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [preview]);
  (0,react.useEffect)(() => {
    if (isDragging) {
      setIsDraggingSibling(true);
    }
  }, [isDragging, setIsDraggingSibling]);
  (0,react.useEffect)(() => {
    if (!isDraggingSibling) {
      forceRerenderAfterDnd((prev) => !prev);
    }
  }, [isDraggingSibling]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  return /* @__PURE__ */ react.createElement(DraggableCard_FieldWrapper, {
    ref: refs ? refs.dropRef : null
  }, isDragging && /* @__PURE__ */ react.createElement(components_CardPreview, {
    transparent: true,
    labelField: cardEllipsisTitle
  }), !isDragging && isDraggingSibling && /* @__PURE__ */ react.createElement(components_CardPreview, {
    isSibling: true,
    labelField: cardEllipsisTitle
  }), !isDragging && !isDraggingSibling && /* @__PURE__ */ react.createElement(DraggableCard_FieldContainer, {
    borderColor: "neutral150",
    background: "neutral100",
    hasRadius: true,
    justifyContent: "space-between",
    onClick: handleClickEditRow,
    isDragging
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 3
  }, /* @__PURE__ */ react.createElement(DraggableCard_DragButton, {
    as: "span",
    "aria-label": formatMessage(
      {
        id: utils_getTrad("components.DraggableCard.move.field"),
        defaultMessage: "Move {item}"
      },
      { item: name }
    ),
    onClick: (e) => e.stopPropagation(),
    ref: refs.dragRef,
    type: "button"
  }, /* @__PURE__ */ react.createElement((Drag_default()), null)), /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, cardEllipsisTitle)), /* @__PURE__ */ react.createElement(Flex.Flex, {
    paddingLeft: 3
  }, /* @__PURE__ */ react.createElement(ActionButton, {
    ref: editButtonRef,
    onClick: (e) => {
      e.stopPropagation();
      onClickEditField(name);
    },
    "aria-label": formatMessage(
      {
        id: utils_getTrad("components.DraggableCard.edit.field"),
        defaultMessage: "Edit {item}"
      },
      { item: name }
    ),
    type: "button"
  }, /* @__PURE__ */ react.createElement((Pencil_default()), null)), /* @__PURE__ */ react.createElement(ActionButton, {
    onClick: onRemoveField,
    "data-testid": `delete-${name}`,
    "aria-label": formatMessage(
      {
        id: utils_getTrad("components.DraggableCard.delete.field"),
        defaultMessage: "Delete {item}"
      },
      { item: name }
    ),
    type: "button"
  }, /* @__PURE__ */ react.createElement((Cross_default()), null)))));
};
DraggableCard.propTypes = {
  index: (prop_types_default()).number.isRequired,
  isDraggingSibling: (prop_types_default()).bool.isRequired,
  labelField: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onClickEditField: (prop_types_default()).func.isRequired,
  onMoveField: (prop_types_default()).func.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired,
  setIsDraggingSibling: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_DraggableCard = (DraggableCard);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/SortDisplayedFields.js













const FlexWrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  flex: ${({ size }) => size};
`;
const ScrollableContainer = (0,styled_components_browser_cjs["default"])(FlexWrapper)`
  overflow-x: scroll;
  overflow-y: hidden;
`;
const SelectContainer = (0,styled_components_browser_cjs["default"])(FlexWrapper)`
  max-width: ${32 / 16}rem;
`;
const SortDisplayedFields = ({
  displayedFields,
  listRemainingFields,
  metadatas,
  onAddField,
  onClickEditField,
  onMoveField,
  onRemoveField
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [isDraggingSibling, setIsDraggingSibling] = (0,react.useState)(false);
  const [lastAction, setLastAction] = (0,react.useState)(null);
  const scrollableContainerRef = (0,react.useRef)();
  function handleAddField(...args) {
    setLastAction("add");
    onAddField(...args);
  }
  function handleRemoveField(...args) {
    setLastAction("remove");
    onRemoveField(...args);
  }
  (0,react.useEffect)(() => {
    if (lastAction === "add" && (scrollableContainerRef == null ? void 0 : scrollableContainerRef.current)) {
      scrollableContainerRef.current.scrollLeft = scrollableContainerRef.current.scrollWidth;
    }
  }, [displayedFields, lastAction]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 4
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "h2"
  }, formatMessage({
    id: utils_getTrad("containers.SettingPage.view"),
    defaultMessage: "View"
  }))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    paddingTop: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderColor: "neutral300",
    borderStyle: "dashed",
    borderWidth: "1px",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(ScrollableContainer, {
    size: "1",
    paddingBottom: 4,
    ref: scrollableContainerRef
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 3
  }, displayedFields.map((field, index) => /* @__PURE__ */ react.createElement(components_DraggableCard, {
    key: field,
    index,
    isDraggingSibling,
    onMoveField,
    onClickEditField,
    onRemoveField: (e) => handleRemoveField(e, index),
    name: field,
    labelField: metadatas[field].list.label || field,
    setIsDraggingSibling
  })))), /* @__PURE__ */ react.createElement(SelectContainer, {
    size: "auto",
    paddingBottom: 4
  }, /* @__PURE__ */ react.createElement(SimpleMenu.SimpleMenu, {
    label: formatMessage({
      id: utils_getTrad("components.FieldSelect.label"),
      defaultMessage: "Add a field"
    }),
    as: IconButton.IconButton,
    icon: /* @__PURE__ */ react.createElement((Plus_default()), null),
    disabled: listRemainingFields.length <= 0,
    "data-testid": "add-field"
  }, listRemainingFields.map((field) => /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, {
    key: field,
    onClick: () => handleAddField(field)
  }, field))))));
};
SortDisplayedFields.propTypes = {
  displayedFields: prop_types.PropTypes.array.isRequired,
  listRemainingFields: prop_types.PropTypes.array.isRequired,
  metadatas: prop_types.PropTypes.objectOf(
    prop_types.PropTypes.shape({
      list: prop_types.PropTypes.shape({
        label: prop_types.PropTypes.string
      })
    })
  ).isRequired,
  onAddField: prop_types.PropTypes.func.isRequired,
  onClickEditField: prop_types.PropTypes.func.isRequired,
  onMoveField: prop_types.PropTypes.func.isRequired,
  onRemoveField: prop_types.PropTypes.func.isRequired
};
/* harmony default export */ const components_SortDisplayedFields = (SortDisplayedFields);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/EditFieldForm.js














const EditFieldForm_HeaderContainer = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  svg {
    width: ${32 / 16}rem;
    height: ${24 / 16}rem;
    margin-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const EditFieldForm = ({
  attributes,
  fieldForm,
  fieldToEdit,
  onCloseModal,
  onChangeEditLabel,
  onSubmit,
  type
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const relationType = attributes[fieldToEdit].relationType;
  let shouldDisplaySortToggle = !["media", "relation"].includes(type);
  if (["oneWay", "oneToOne", "manyToOne"].includes(relationType)) {
    shouldDisplaySortToggle = true;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose: onCloseModal,
    labelledBy: "title"
  }, /* @__PURE__ */ react.createElement("form", {
    onSubmit
  }, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(EditFieldForm_HeaderContainer, null, /* @__PURE__ */ react.createElement(components_FieldTypeIcon, {
    type
  }), /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "title"
  }, formatMessage(
    {
      id: utils_getTrad("containers.ListSettingsView.modal-form.edit-label"),
      defaultMessage: "Edit {fieldName}"
    },
    { fieldName: upperFirst_default()(fieldToEdit) }
  )))), /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    s: 12,
    col: 6
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    id: "label-input",
    label: formatMessage({
      id: utils_getTrad("form.Input.label"),
      defaultMessage: "Label"
    }),
    name: "label",
    onChange: (e) => onChangeEditLabel(e),
    value: fieldForm.label,
    hint: formatMessage({
      id: utils_getTrad("form.Input.label.inputDescription"),
      defaultMessage: "This value overrides the label displayed in the table's head"
    })
  })), shouldDisplaySortToggle && /* @__PURE__ */ react.createElement(Grid.GridItem, {
    s: 12,
    col: 6
  }, /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    "data-testid": "Enable sort on this field",
    checked: fieldForm.sortable,
    label: formatMessage({
      id: utils_getTrad("form.Input.sort.field"),
      defaultMessage: "Enable sort on this field"
    }),
    name: "sortable",
    onChange: (e) => onChangeEditLabel({ target: { name: "sortable", value: e.target.checked } }),
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "on"
    }),
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "off"
    })
  })))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: onCloseModal,
      variant: "tertiary"
    }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
    endActions: /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit"
    }, formatMessage({ id: "global.finish", defaultMessage: "Finish" }))
  })));
};
EditFieldForm.propTypes = {
  attributes: prop_types_default().objectOf(
    prop_types_default().shape({
      relationType: (prop_types_default()).string
    })
  ).isRequired,
  fieldForm: prop_types_default().shape({
    label: (prop_types_default()).string,
    sortable: (prop_types_default()).bool
  }).isRequired,
  fieldToEdit: (prop_types_default()).string.isRequired,
  onChangeEditLabel: (prop_types_default()).func.isRequired,
  onCloseModal: (prop_types_default()).func.isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  type: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_EditFieldForm = (EditFieldForm);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/init.js
var ListSettingsView_init_defProp = Object.defineProperty;
var ListSettingsView_init_defProps = Object.defineProperties;
var ListSettingsView_init_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ListSettingsView_init_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListSettingsView_init_hasOwnProp = Object.prototype.hasOwnProperty;
var ListSettingsView_init_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListSettingsView_init_defNormalProp = (obj, key, value) => key in obj ? ListSettingsView_init_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListSettingsView_init_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListSettingsView_init_hasOwnProp.call(b, prop))
      ListSettingsView_init_defNormalProp(a, prop, b[prop]);
  if (ListSettingsView_init_getOwnPropSymbols)
    for (var prop of ListSettingsView_init_getOwnPropSymbols(b)) {
      if (ListSettingsView_init_propIsEnum.call(b, prop))
        ListSettingsView_init_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ListSettingsView_init_spreadProps = (a, b) => ListSettingsView_init_defProps(a, ListSettingsView_init_getOwnPropDescs(b));
const init_init = (initialState, layout) => {
  return ListSettingsView_init_spreadProps(ListSettingsView_init_spreadValues({}, initialState), {
    initialData: layout,
    modifiedData: layout
  });
};
/* harmony default export */ const ListSettingsView_init = (init_init);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/reducer.js




const ListSettingsView_reducer_initialState = {
  fieldForm: {},
  fieldToEdit: "",
  initialData: {},
  modifiedData: {}
};
const ListSettingsView_reducer_reducer = (state = ListSettingsView_reducer_initialState, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  const layoutFieldListPath = ["modifiedData", "layouts", "list"];
  switch (action.type) {
    case "ADD_FIELD": {
      const layoutFieldList = get_default()(state, layoutFieldListPath, []);
      set_default()(draftState, layoutFieldListPath, [...layoutFieldList, action.item]);
      break;
    }
    case "MOVE_FIELD": {
      const layoutFieldList = get_default()(state, layoutFieldListPath, []);
      const { originalIndex, atIndex } = action;
      set_default()(
        draftState,
        layoutFieldListPath,
        utils_arrayMoveItem(layoutFieldList, originalIndex, atIndex)
      );
      break;
    }
    case "ON_CHANGE": {
      set_default()(draftState, ["modifiedData", ...action.keys.split(".")], action.value);
      break;
    }
    case "ON_CHANGE_FIELD_METAS": {
      set_default()(draftState, ["fieldForm", action.name], action.value);
      break;
    }
    case "REMOVE_FIELD": {
      const layoutFieldList = get_default()(state, layoutFieldListPath, []);
      set_default()(
        draftState,
        layoutFieldListPath,
        layoutFieldList.filter((_, index) => action.index !== index)
      );
      break;
    }
    case "SET_FIELD_TO_EDIT": {
      const { fieldToEdit } = action;
      draftState.fieldToEdit = fieldToEdit;
      draftState.fieldForm.label = get_default()(
        draftState,
        ["modifiedData", "metadatas", fieldToEdit, "list", "label"],
        ""
      );
      draftState.fieldForm.sortable = get_default()(
        draftState,
        ["modifiedData", "metadatas", fieldToEdit, "list", "sortable"],
        ""
      );
      break;
    }
    case "UNSET_FIELD_TO_EDIT": {
      draftState.fieldForm = {};
      draftState.fieldToEdit = "";
      break;
    }
    case "SUBMIT_FIELD_FORM": {
      const fieldMetadataPath = ["modifiedData", "metadatas", state.fieldToEdit, "list"];
      set_default()(draftState, [...fieldMetadataPath, "label"], state.fieldForm.label);
      set_default()(draftState, [...fieldMetadataPath, "sortable"], state.fieldForm.sortable);
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const ListSettingsView_reducer = (ListSettingsView_reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/utils/excludedSortOptions.js
const EXCLUDED_SORT_OPTIONS = [
  "media",
  "richtext",
  "dynamiczone",
  "relation",
  "component",
  "json"
];

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/index.js
var ListSettingsView_async = (__this, __arguments, generator) => {
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



























const ListSettingsView = ({ layout, slug }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const pluginsQueryParams = hooks_usePluginsQueryParams();
  const toggleNotification = (0,build.useNotification)();
  const { refetchData } = (0,react.useContext)(contexts_ModelsContext);
  const [showWarningSubmit, setWarningSubmit] = (0,react.useState)(false);
  const toggleWarningSubmit = () => setWarningSubmit((prevState) => !prevState);
  const [isModalFormOpen, setIsModalFormOpen] = (0,react.useState)(false);
  const toggleModalForm = () => setIsModalFormOpen((prevState) => !prevState);
  const [reducerState, dispatch] = (0,react.useReducer)(
    ListSettingsView_reducer,
    ListSettingsView_reducer_initialState,
    () => ListSettingsView_init(ListSettingsView_reducer_initialState, layout)
  );
  const { fieldToEdit, fieldForm, initialData, modifiedData } = reducerState;
  const { attributes } = layout;
  const displayedFields = modifiedData.layouts.list;
  const goBackUrl = () => {
    const {
      settings: { pageSize, defaultSortBy, defaultSortOrder },
      kind,
      uid
    } = initialData;
    const sort = `${defaultSortBy}:${defaultSortOrder}`;
    const goBackSearch = `${(0,qs_lib.stringify)(
      {
        page: 1,
        pageSize,
        sort
      },
      { encode: false }
    )}${pluginsQueryParams ? `&${pluginsQueryParams}` : ""}`;
    return `/content-manager/${kind}/${uid}?${goBackSearch}`;
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value: name === "settings.pageSize" ? parseInt(value, 10) : value
    });
  };
  const handleConfirm = () => ListSettingsView_async(void 0, null, function* () {
    const body = pick_default()(modifiedData, ["layouts", "settings", "metadatas"]);
    submitMutation.mutate(body);
  });
  const handleAddField = (item) => {
    dispatch({
      type: "ADD_FIELD",
      item
    });
  };
  const handleRemoveField = (e, index) => {
    e.stopPropagation();
    if (displayedFields.length === 1) {
      toggleNotification({
        type: "info",
        message: { id: utils_getTrad("notification.info.minimumFields") }
      });
    } else {
      dispatch({
        type: "REMOVE_FIELD",
        index
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleWarningSubmit();
    trackUsage("willSaveContentTypeLayout");
  };
  const handleClickEditField = (fieldToEdit2) => {
    dispatch({
      type: "SET_FIELD_TO_EDIT",
      fieldToEdit: fieldToEdit2
    });
    toggleModalForm();
  };
  const handleCloseModal = () => {
    dispatch({
      type: "UNSET_FIELD_TO_EDIT"
    });
    toggleModalForm();
  };
  const handleSubmitFieldEdit = (e) => {
    e.preventDefault();
    toggleModalForm();
    dispatch({
      type: "SUBMIT_FIELD_FORM"
    });
  };
  const submitMutation = (0,react_query_lib.useMutation)((body) => utils_api(body, slug), {
    onSuccess: () => {
      trackUsage("didEditListSettings");
      refetchData();
    },
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleChangeEditLabel = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_FIELD_METAS",
      name,
      value
    });
  };
  const listRemainingFields = Object.entries(attributes).reduce((acc, cur) => {
    const [attrName, fieldSchema] = cur;
    const isDisplayable = utils_checkIfAttributeIsDisplayable(fieldSchema);
    const isAlreadyDisplayed = displayedFields.includes(attrName);
    if (isDisplayable && !isAlreadyDisplayed) {
      acc.push(attrName);
    }
    return acc;
  }, []).sort();
  const sortOptions = Object.entries(attributes).reduce((acc, cur) => {
    const [name, { type }] = cur;
    if (!EXCLUDED_SORT_OPTIONS.includes(type)) {
      acc.push(name);
    }
    return acc;
  }, []);
  const move = (originalIndex, atIndex) => {
    dispatch({
      type: "MOVE_FIELD",
      originalIndex,
      atIndex
    });
  };
  return /* @__PURE__ */ react.createElement(Layout.Layout, null, /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isSubmittingForm
  }, /* @__PURE__ */ react.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    navigationAction: /* @__PURE__ */ react.createElement(build.Link, {
      startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null),
      to: goBackUrl,
      id: "go-back"
    }, formatMessage({ id: "global.back", defaultMessage: "Back" })),
    primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
      size: "L",
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      disabled: isEqual_default()(modifiedData, initialData),
      type: "submit"
    }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
    subtitle: formatMessage({
      id: utils_getTrad("components.SettingsViewWrapper.pluginHeader.description.list-settings"),
      defaultMessage: "Define the settings of the list view."
    }),
    title: formatMessage(
      {
        id: utils_getTrad("components.SettingsViewWrapper.pluginHeader.title"),
        defaultMessage: "Configure the view - {name}"
      },
      { name: upperFirst_default()(modifiedData.info.displayName) }
    )
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral0",
    hasRadius: true,
    shadow: "tableShadow",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7
  }, /* @__PURE__ */ react.createElement(components_Settings, {
    modifiedData,
    onChange: handleChange,
    sortOptions
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 6
  }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), /* @__PURE__ */ react.createElement(components_SortDisplayedFields, {
    listRemainingFields,
    displayedFields,
    onAddField: handleAddField,
    onClickEditField: handleClickEditField,
    onMoveField: move,
    onRemoveField: handleRemoveField,
    metadatas: modifiedData.metadatas
  }))), /* @__PURE__ */ react.createElement(build.ConfirmDialog, {
    bodyText: {
      id: utils_getTrad("popUpWarning.warning.updateAllSettings"),
      defaultMessage: "This will modify all your settings"
    },
    iconRightButton: /* @__PURE__ */ react.createElement((Check_default()), null),
    isConfirmButtonLoading: isSubmittingForm,
    isOpen: showWarningSubmit,
    onToggleDialog: toggleWarningSubmit,
    onConfirm: handleConfirm,
    variantRightButton: "success-light"
  })), isModalFormOpen && /* @__PURE__ */ react.createElement(components_EditFieldForm, {
    attributes,
    fieldForm,
    fieldToEdit,
    onChangeEditLabel: handleChangeEditLabel,
    onCloseModal: handleCloseModal,
    onSubmit: handleSubmitFieldEdit,
    type: get_default()(attributes, [fieldToEdit, "type"], "text")
  })));
};
ListSettingsView.propTypes = {
  layout: prop_types_default().shape({
    uid: (prop_types_default()).string.isRequired,
    settings: prop_types_default().shape({
      bulkable: (prop_types_default()).bool,
      defaultSortBy: (prop_types_default()).string,
      defaultSortOrder: (prop_types_default()).string,
      filterable: (prop_types_default()).bool,
      pageSize: (prop_types_default()).number,
      searchable: (prop_types_default()).bool
    }).isRequired,
    metadatas: (prop_types_default()).object.isRequired,
    options: (prop_types_default()).object.isRequired,
    attributes: prop_types_default().objectOf(
      prop_types_default().shape({
        type: (prop_types_default()).string
      })
    ).isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const pages_ListSettingsView = ((0,react.memo)(ListSettingsView));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/CollectionTypeRecursivePath/index.js














const CollectionTypeRecursivePath_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const CollectionTypeRecursivePath = ({
  match: {
    params: { slug },
    url
  }
}) => {
  const { isLoading, layout, updateLayout } = hooks_useFetchContentTypeLayout(slug);
  const { rawContentTypeLayout, rawComponentsLayouts } = (0,react.useMemo)(() => {
    let rawContentTypeLayout2 = {};
    let rawComponentsLayouts2 = {};
    if (layout.contentType) {
      rawContentTypeLayout2 = utils_formatLayoutToApi(layout.contentType);
    }
    if (layout.components) {
      rawComponentsLayouts2 = Object.keys(layout.components).reduce((acc, current) => {
        acc[current] = utils_formatLayoutToApi(layout.components[current]);
        return acc;
      }, {});
    }
    return { rawContentTypeLayout: rawContentTypeLayout2, rawComponentsLayouts: rawComponentsLayouts2 };
  }, [layout]);
  const uid = (0,lodash.get)(layout, ["contentType", "uid"], null);
  if (uid !== slug || isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  const renderRoute = ({
    location: { state },
    history: { goBack },
    match: {
      params: { id, origin }
    }
  }, Component) => {
    return /* @__PURE__ */ react.createElement(Component, {
      slug,
      layout,
      state,
      goBack,
      id,
      origin
    });
  };
  const routes = [
    { path: "create/clone/:origin", comp: pages_EditViewLayoutManager },
    { path: "create", comp: pages_EditViewLayoutManager },
    { path: ":id", comp: pages_EditViewLayoutManager },
    { path: "", comp: ListViewLayoutManager }
  ].map(({ path, comp }) => /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    key: path,
    path: `${url}/${path}`,
    render: (props) => renderRoute(props, comp)
  }));
  return /* @__PURE__ */ react.createElement(react_error_boundary_cjs/* ErrorBoundary */.SV, {
    FallbackComponent: build.ErrorFallback
  }, /* @__PURE__ */ react.createElement(contexts_ContentTypeLayout.Provider, {
    value: layout
  }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `${url}/configurations/list`
  }, /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
    permissions: CollectionTypeRecursivePath_cmPermissions.collectionTypesConfigurations
  }, /* @__PURE__ */ react.createElement(pages_ListSettingsView, {
    layout: rawContentTypeLayout,
    slug,
    updateLayout
  }))), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `${url}/configurations/edit`
  }, /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
    permissions: CollectionTypeRecursivePath_cmPermissions.collectionTypesConfigurations
  }, /* @__PURE__ */ react.createElement(pages_EditSettingsView, {
    components: rawComponentsLayouts,
    isContentTypeView: true,
    mainLayout: rawContentTypeLayout,
    slug,
    updateLayout
  }))), routes)));
};
CollectionTypeRecursivePath.propTypes = {
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired,
    params: prop_types_default().shape({
      slug: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_CollectionTypeRecursivePath = ((0,react.memo)(CollectionTypeRecursivePath));

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/reducer.js
var crudReducer_reducer = __webpack_require__(23089);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ComponentSetttingsView/index.js
/* provided dependency */ var ComponentSetttingsView_console = __webpack_require__(25108);
var ComponentSetttingsView_async = (__this, __arguments, generator) => {
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












const ComponentSetttingsView_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const ComponentSettingsView = () => {
  const [{ isLoading, data: layout }, dispatch] = (0,react.useReducer)(crudReducer_reducer/* default */.Z, crudReducer_reducer/* crudInitialState */.q);
  const schemasSelector = (0,react.useMemo)(makeSelectModelAndComponentSchemas, []);
  const { schemas } = (0,lib.useSelector)((state) => schemasSelector(state), lib.shallowEqual);
  const { uid } = (0,react_router_dom_min.useParams)();
  (0,react.useEffect)(() => {
    const CancelToken = (axios_default()).CancelToken;
    const source = CancelToken.source();
    const fetchData = (source2) => ComponentSetttingsView_async(void 0, null, function* () {
      try {
        dispatch(getData());
        const {
          data: { data }
        } = yield utils/* axiosInstance.get */.be.get(utils_getRequestUrl(`components/${uid}/configuration`), {
          cancelToken: source2.token
        });
        dispatch(getDataSucceeded(utils_mergeMetasWithSchema(data, schemas, "component")));
      } catch (err) {
        if (axios_default().isCancel(err)) {
          return;
        }
        ComponentSetttingsView_console.error(err);
      }
    });
    fetchData(source);
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [uid, schemas]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
    permissions: ComponentSetttingsView_cmPermissions.componentsConfigurations
  }, /* @__PURE__ */ react.createElement(pages_EditSettingsView, {
    components: layout.components,
    mainLayout: layout.component,
    slug: uid
  }));
};
/* harmony default export */ const ComponentSetttingsView = ((0,react.memo)(ComponentSettingsView));

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(92543);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(26485);
var EmptyDocuments_default = /*#__PURE__*/__webpack_require__.n(EmptyDocuments);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/NoContentType/index.js









const NoContentType = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: formatMessage({
      id: utils_getTrad("header.name"),
      defaultMessage: "Content"
    })
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
    action: /* @__PURE__ */ react.createElement(build.LinkButton, {
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      to: "/plugins/content-type-builder/content-types/create-content-type"
    }, formatMessage({
      id: "app.components.HomePage.create",
      defaultMessage: "Create your first Content-type"
    })),
    content: formatMessage({
      id: "content-manager.pages.NoContentType.text",
      defaultMessage: "You don't have any content yet, we recommend you to create your first Content-Type."
    }),
    hasRadius: true,
    icon: /* @__PURE__ */ react.createElement((EmptyDocuments_default()), {
      width: "10rem"
    }),
    shadow: "tableShadow"
  })));
};
/* harmony default export */ const pages_NoContentType = (NoContentType);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/NoPermissions/index.js






const NoPermissions = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: formatMessage({
      id: utils_getTrad("header.name"),
      defaultMessage: "Content"
    })
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(build.NoPermissions, null)));
};
/* harmony default export */ const pages_NoPermissions = (NoPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/SingleTypeRecursivePath/index.js










const SingleTypeRecursivePath_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const SingleTypeRecursivePath = ({
  match: {
    params: { slug },
    url
  }
}) => {
  const { isLoading, layout, updateLayout } = hooks_useFetchContentTypeLayout(slug);
  const { rawContentTypeLayout, rawComponentsLayouts } = (0,react.useMemo)(() => {
    let rawComponentsLayouts2 = {};
    let rawContentTypeLayout2 = {};
    if (layout.contentType) {
      rawContentTypeLayout2 = utils_formatLayoutToApi(layout.contentType);
    }
    if (layout.components) {
      rawComponentsLayouts2 = Object.keys(layout.components).reduce((acc, current) => {
        acc[current] = utils_formatLayoutToApi(layout.components[current]);
        return acc;
      }, {});
    }
    return { rawContentTypeLayout: rawContentTypeLayout2, rawComponentsLayouts: rawComponentsLayouts2 };
  }, [layout]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(contexts_ContentTypeLayout.Provider, {
    value: layout
  }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `${url}/configurations/edit`
  }, /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
    permissions: SingleTypeRecursivePath_cmPermissions.singleTypesConfigurations
  }, /* @__PURE__ */ react.createElement(pages_EditSettingsView, {
    components: rawComponentsLayouts,
    isContentTypeView: true,
    mainLayout: rawContentTypeLayout,
    slug,
    updateLayout
  }))), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: url,
    render: ({ location: { state }, history: { goBack } }) => {
      return /* @__PURE__ */ react.createElement(pages_EditViewLayoutManager, {
        layout,
        slug,
        isSingleType: true,
        state,
        goBack
      });
    }
  })));
};
SingleTypeRecursivePath.propTypes = {
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired,
    params: prop_types_default().shape({
      slug: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_SingleTypeRecursivePath = ((0,react.memo)(SingleTypeRecursivePath));

// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
// EXTERNAL MODULE: ./node_modules/lodash/toLower.js
var toLower = __webpack_require__(7334);
var toLower_default = /*#__PURE__*/__webpack_require__.n(toLower);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/v2/SubNav.js
var SubNav = __webpack_require__(95431);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/LeftMenu/index.js
var LeftMenu_defProp = Object.defineProperty;
var LeftMenu_defProps = Object.defineProperties;
var LeftMenu_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var LeftMenu_getOwnPropSymbols = Object.getOwnPropertySymbols;
var LeftMenu_hasOwnProp = Object.prototype.hasOwnProperty;
var LeftMenu_propIsEnum = Object.prototype.propertyIsEnumerable;
var LeftMenu_defNormalProp = (obj, key, value) => key in obj ? LeftMenu_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var LeftMenu_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (LeftMenu_hasOwnProp.call(b, prop))
      LeftMenu_defNormalProp(a, prop, b[prop]);
  if (LeftMenu_getOwnPropSymbols)
    for (var prop of LeftMenu_getOwnPropSymbols(b)) {
      if (LeftMenu_propIsEnum.call(b, prop))
        LeftMenu_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var LeftMenu_spreadProps = (a, b) => LeftMenu_defProps(a, LeftMenu_getOwnPropDescs(b));










const matchByTitle = (links, search) => (0,match_sorter_cjs/* default */.ZP)(links, toLower_default()(search), { keys: [(item) => toLower_default()(item.title)] });
const LeftMenu = () => {
  const [search, setSearch] = (0,react.useState)("");
  const { formatMessage } = (0,react_intl.useIntl)();
  const modelLinksSelector = (0,react.useMemo)(makeSelectModelLinks, []);
  const { collectionTypeLinks, singleTypeLinks } = (0,lib.useSelector)(
    (state) => modelLinksSelector(state),
    lib.shallowEqual
  );
  const toIntl = (links) => links.map((link) => {
    return LeftMenu_spreadProps(LeftMenu_spreadValues({}, link), {
      title: formatMessage({ id: link.title, defaultMessage: link.title })
    });
  });
  const intlCollectionTypeLinks = toIntl(collectionTypeLinks);
  const intlSingleTypeLinks = toIntl(singleTypeLinks);
  const menu = [
    {
      id: "collectionTypes",
      title: {
        id: utils_getTrad("components.LeftMenu.collection-types"),
        defaultMessage: "Collection Types"
      },
      searchable: true,
      links: sortBy_default()(
        matchByTitle(intlCollectionTypeLinks, search),
        (object) => object.title.toLowerCase()
      )
    },
    {
      id: "singleTypes",
      title: {
        id: utils_getTrad("components.LeftMenu.single-types"),
        defaultMessage: "Single Types"
      },
      searchable: true,
      links: sortBy_default()(
        matchByTitle(intlSingleTypeLinks, search),
        (object) => object.title.toLowerCase()
      )
    }
  ];
  const handleClear = () => {
    setSearch("");
  };
  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };
  const label = formatMessage({
    id: utils_getTrad("header.name"),
    defaultMessage: "Content"
  });
  return /* @__PURE__ */ react.createElement(SubNav.SubNav, {
    ariaLabel: label
  }, /* @__PURE__ */ react.createElement(SubNav.SubNavHeader, {
    label,
    searchable: true,
    value: search,
    onChange: handleChangeSearch,
    onClear: handleClear,
    searchLabel: formatMessage({
      id: "content-manager.components.LeftMenu.Search.label",
      defaultMessage: "Search for a content type"
    })
  }), /* @__PURE__ */ react.createElement(SubNav.SubNavSections, null, menu.map((section) => {
    const label2 = formatMessage(
      { id: section.title.id, defaultMessage: section.title.defaultMessage },
      section.title.values
    );
    return /* @__PURE__ */ react.createElement(SubNav.SubNavSection, {
      key: section.id,
      label: label2,
      badgeLabel: section.links.length.toString()
    }, section.links.map((link) => {
      const search2 = link.search ? `?${link.search}` : "";
      return /* @__PURE__ */ react.createElement(SubNav.SubNavLink, {
        as: react_router_dom_min.NavLink,
        key: link.uid,
        to: `${link.to}${search2}`
      }, link.title);
    }));
  })));
};
/* harmony default export */ const App_LeftMenu = (LeftMenu);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/App/constants.js
var App_constants = __webpack_require__(21358);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/actions.js

const App_actions_getData = () => ({
  type: App_constants/* GET_DATA */.ZA
});
const App_actions_resetProps = () => ({ type: App_constants/* RESET_PROPS */.c2 });
const setContentTypeLinks = (authorizedCtLinks, authorizedStLinks, models, components) => ({
  type: App_constants/* SET_CONTENT_TYPE_LINKS */.ix,
  data: { authorizedCtLinks, authorizedStLinks, components, contentTypeSchemas: models }
});

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/generateModelsLinks.js


const generateLinks = (links, type, configurations = []) => {
  return links.filter((link) => link.isDisplayed).map((link) => {
    const collectionTypesPermissions = [
      { action: "plugin::content-manager.explorer.create", subject: link.uid },
      { action: "plugin::content-manager.explorer.read", subject: link.uid }
    ];
    const singleTypesPermissions = [
      { action: "plugin::content-manager.explorer.read", subject: link.uid }
    ];
    const permissions = type === "collectionTypes" ? collectionTypesPermissions : singleTypesPermissions;
    const currentContentTypeConfig = configurations.find(({ uid }) => uid === link.uid);
    let search = null;
    if (currentContentTypeConfig) {
      const searchParams = {
        page: 1,
        pageSize: currentContentTypeConfig.settings.pageSize,
        sort: `${currentContentTypeConfig.settings.defaultSortBy}:${currentContentTypeConfig.settings.defaultSortOrder}`
      };
      search = (0,qs_lib.stringify)(searchParams, { encode: false });
    }
    return {
      permissions,
      search,
      kind: link.kind,
      title: link.info.displayName,
      to: `/content-manager/${link.kind}/${link.uid}`,
      uid: link.uid,
      name: link.uid,
      isDisplayed: link.isDisplayed
    };
  });
};
const generateModelsLinks = (models, modelsConfigurations) => {
  const [collectionTypes, singleTypes] = (0,lodash.chain)(models).groupBy("kind").map((value, key) => ({ name: key, links: value })).sortBy("name").value();
  return {
    collectionTypesSectionLinks: generateLinks(
      (0,lodash.get)(collectionTypes, "links", []),
      "collectionTypes",
      modelsConfigurations
    ),
    singleTypesSectionLinks: generateLinks((0,lodash.get)(singleTypes, "links", []), "singleTypes")
  };
};
/* harmony default export */ const utils_generateModelsLinks = (generateModelsLinks);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/checkPermissions.js

const checkPermissions = (userPermissions, permissionsToCheck) => permissionsToCheck.map(({ permissions }) => (0,build.hasPermissions)(userPermissions, permissions));
/* harmony default export */ const utils_checkPermissions = (checkPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/getContentTypeLinks.js
/* provided dependency */ var getContentTypeLinks_console = __webpack_require__(25108);
var getContentTypeLinks_async = (__this, __arguments, generator) => {
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




const getContentTypeLinks = (models, userPermissions, toggleNotification) => getContentTypeLinks_async(void 0, null, function* () {
  try {
    const {
      data: { data: contentTypeConfigurations }
    } = yield utils/* axiosInstance.get */.be.get(utils_getRequestUrl("content-types-settings"));
    const { collectionTypesSectionLinks, singleTypesSectionLinks } = utils_generateModelsLinks(
      models,
      contentTypeConfigurations
    );
    const ctLinksPermissionsPromises = utils_checkPermissions(
      userPermissions,
      collectionTypesSectionLinks
    );
    const ctLinksPermissions = yield Promise.all(ctLinksPermissionsPromises);
    const authorizedCtLinks = collectionTypesSectionLinks.filter(
      (_, index) => ctLinksPermissions[index]
    );
    const stLinksPermissionsPromises = utils_checkPermissions(userPermissions, singleTypesSectionLinks);
    const stLinksPermissions = yield Promise.all(stLinksPermissionsPromises);
    const authorizedStLinks = singleTypesSectionLinks.filter(
      (_, index) => stLinksPermissions[index]
    );
    return { authorizedCtLinks, authorizedStLinks };
  } catch (err) {
    getContentTypeLinks_console.error(err);
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return { authorizedCtLinks: [], authorizedStLinks: [], contentTypes: [] };
  }
});
/* harmony default export */ const utils_getContentTypeLinks = (getContentTypeLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/useModels.js
/* provided dependency */ var useModels_console = __webpack_require__(25108);
var useModels_defProp = Object.defineProperty;
var useModels_defProps = Object.defineProperties;
var useModels_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var useModels_getOwnPropSymbols = Object.getOwnPropertySymbols;
var useModels_hasOwnProp = Object.prototype.hasOwnProperty;
var useModels_propIsEnum = Object.prototype.propertyIsEnumerable;
var useModels_defNormalProp = (obj, key, value) => key in obj ? useModels_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var useModels_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (useModels_hasOwnProp.call(b, prop))
      useModels_defNormalProp(a, prop, b[prop]);
  if (useModels_getOwnPropSymbols)
    for (var prop of useModels_getOwnPropSymbols(b)) {
      if (useModels_propIsEnum.call(b, prop))
        useModels_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var useModels_spreadProps = (a, b) => useModels_defProps(a, useModels_getOwnPropDescs(b));
var useModels_async = (__this, __arguments, generator) => {
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












const useModels = () => {
  const dispatch = (0,lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const state = (0,lib.useSelector)(selectAppDomain());
  const fetchDataRef = (0,react.useRef)();
  const { allPermissions } = (0,build.useRBACProvider)();
  const { runHookWaterfall } = (0,build.useStrapiApp)();
  const CancelToken = (axios_default()).CancelToken;
  const source = CancelToken.source();
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const fetchData = () => useModels_async(void 0, null, function* () {
    dispatch(App_actions_getData());
    try {
      const [
        {
          data: { data: components }
        },
        {
          data: { data: models }
        }
      ] = yield Promise.all(
        ["components", "content-types"].map(
          (endPoint) => utils/* axiosInstance.get */.be.get(utils_getRequestUrl(endPoint), { cancelToken: source.token })
        )
      );
      notifyStatus(
        formatMessage({
          id: utils_getTrad("App.schemas.data-loaded"),
          defaultMessage: "The schemas have been successfully loaded."
        })
      );
      const { authorizedCtLinks, authorizedStLinks } = yield utils_getContentTypeLinks(
        models,
        allPermissions,
        toggleNotification
      );
      const { ctLinks } = runHookWaterfall(exposedHooks/* MUTATE_COLLECTION_TYPES_LINKS */.LK, {
        ctLinks: authorizedCtLinks,
        models
      });
      const { stLinks } = runHookWaterfall(exposedHooks/* MUTATE_SINGLE_TYPES_LINKS */.dV, {
        stLinks: authorizedStLinks,
        models
      });
      const actionToDispatch = setContentTypeLinks(ctLinks, stLinks, models, components);
      dispatch(actionToDispatch);
    } catch (err) {
      if (axios_default().isCancel(err)) {
        return;
      }
      useModels_console.error(err);
      toggleNotification({ type: "warning", message: { id: "notification.error" } });
    }
  });
  fetchDataRef.current = fetchData;
  (0,react.useEffect)(() => {
    fetchDataRef.current();
    return () => {
      source.cancel("Operation canceled by the user.");
      dispatch(App_actions_resetProps());
    };
  }, [dispatch, toggleNotification]);
  return useModels_spreadProps(useModels_spreadValues({}, state), { refetchData: fetchDataRef.current });
};
/* harmony default export */ const App_useModels = (useModels);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/index.js



















const App_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const App = () => {
  const contentTypeMatch = (0,react_router_dom_min.useRouteMatch)(`/content-manager/:kind/:uid`);
  const { status, collectionTypeLinks, singleTypeLinks, models, refetchData } = App_useModels();
  const authorisedModels = sortBy_default()(
    [...collectionTypeLinks, ...singleTypeLinks],
    (model) => model.title.toLowerCase()
  );
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { startSection } = (0,build.useGuidedTour)();
  const startSectionRef = (0,react.useRef)(startSection);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("contentManager");
    }
  }, []);
  if (status === "loading") {
    return /* @__PURE__ */ react.createElement(Main.Main, {
      "aria-busy": "true"
    }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: formatMessage({
        id: utils_getTrad("header.name"),
        defaultMessage: "Content"
      })
    }), /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null));
  }
  const supportedModelsToDisplay = models.filter(({ isDisplayed }) => isDisplayed);
  if (authorisedModels.length === 0 && supportedModelsToDisplay.length > 0 && pathname !== "/content-manager/403") {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, {
      to: "/content-manager/403"
    });
  }
  if (supportedModelsToDisplay.length === 0 && pathname !== "/content-manager/no-content-types") {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, {
      to: "/content-manager/no-content-types"
    });
  }
  if (!contentTypeMatch && authorisedModels.length > 0) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, {
      to: `${authorisedModels[0].to}${authorisedModels[0].search ? `?${authorisedModels[0].search}` : ""}`
    });
  }
  return /* @__PURE__ */ react.createElement(Layout.Layout, {
    sideNav: /* @__PURE__ */ react.createElement(App_LeftMenu, null)
  }, /* @__PURE__ */ react.createElement(DragLayer, null), /* @__PURE__ */ react.createElement(contexts_ModelsContext.Provider, {
    value: { refetchData }
  }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: "/content-manager/components/:uid/configurations/edit"
  }, /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
    permissions: App_cmPermissions.componentsConfigurations
  }, /* @__PURE__ */ react.createElement(ComponentSetttingsView, null))), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: "/content-manager/collectionType/:slug",
    component: pages_CollectionTypeRecursivePath
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: "/content-manager/singleType/:slug",
    component: pages_SingleTypeRecursivePath
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: "/content-manager/403"
  }, /* @__PURE__ */ react.createElement(pages_NoPermissions, null)), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: "/content-manager/no-content-types"
  }, /* @__PURE__ */ react.createElement(pages_NoContentType, null)), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: "",
    component: build.NotFound
  }))));
};

/* harmony default export */ const pages_App = (() => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Helmet.Helmet, {
    title: formatMessage({ id: utils_getTrad("plugin.name"), defaultMessage: "Content Manager" })
  }), /* @__PURE__ */ react.createElement(App, null));
});


/***/ }),

/***/ 22868:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 14777:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 99830:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 70209:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 87414:
/***/ (() => {

/* (ignored) */

/***/ })

}]);