(self["webpackChunkdevlaunchers_strapiv4"] = self["webpackChunkdevlaunchers_strapiv4"] || []).push([[6750],{

/***/ 44840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".srd-diagram {\n  height: 80vh;\n  overflow: hidden;\n}\n\n/* .srd-default-link path {\n  stroke: #000;\n} */\n\n.erc-header-title p {\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 1.3rem;\n  font-weight: 400;\n  line-height: normal;\n  color: rgb(120, 126, 143);\n  margin: 0px;\n  overflow: hidden;\n}\n\n.erc-header-title h1 {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n  margin-bottom: 0;\n  padding-right: 18px;\n  font-size: 2.4rem;\n  line-height: normal;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 45473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".srd-diagram {\n  position: relative;\n  flex-grow: 1;\n  display: flex;\n  cursor: move;\n  overflow: hidden;\n}\n.srd-diagram__selector {\n  position: absolute;\n  background-color: rgba(0, 192, 255, 0.2);\n  border: solid 2px #00c0ff;\n}\n.srd-link-layer {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  transform-origin: 0 0;\n  overflow: visible !important;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.srd-node-layer {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.srd-node {\n  position: absolute;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: move;\n  pointer-events: all;\n}\n.srd-node--selected > * {\n  border-color: #00c0ff !important;\n}\n.srd-port {\n  width: 15px;\n  height: 15px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.srd-port:hover,\n.srd-port.selected {\n  background: #c0ff00;\n}\n.srd-default-node {\n  background-color: #1e1e1e;\n  border-radius: 5px;\n  font-family: sans-serif;\n  color: white;\n  border: solid 2px black;\n  overflow: visible;\n  font-size: 11px;\n}\n.srd-default-node__title {\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  white-space: nowrap;\n}\n.srd-default-node__title > * {\n  align-self: center;\n}\n.srd-default-node__title .fa {\n  padding: 5px;\n  opacity: 0.2;\n  cursor: pointer;\n}\n.srd-default-node__title .fa:hover {\n  opacity: 1;\n}\n.srd-default-node__name {\n  flex-grow: 1;\n  padding: 5px 5px;\n}\n.srd-default-node__ports {\n  display: flex;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));\n}\n.srd-default-node__in,\n.srd-default-node__out {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.srd-default-port {\n  display: flex;\n  margin-top: 1px;\n}\n.srd-default-port > * {\n  align-self: center;\n}\n.srd-default-port__name {\n  padding: 0 5px;\n}\n.srd-default-port--out {\n  justify-content: flex-end;\n}\n.srd-default-port--out .srd-default-port__name {\n  justify-content: flex-end;\n  text-align: right;\n}\n.srd-default-label {\n  background: rgba(70, 70, 70, 0.8);\n  border: 1px solid #333;\n  border-radius: 4px;\n  color: #fff;\n  display: inline-block;\n  font-size: smaller;\n  padding: 5px;\n}\n@keyframes dash {\n  from {\n    stroke-dashoffset: 24;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.srd-default-link path {\n  fill: none;\n  pointer-events: all;\n}\n.srd-default-link--path-selected {\n  stroke: #00c0ff !important;\n  stroke-dasharray: 10, 2;\n  animation: dash 1s linear infinite;\n}\n.srd-default-link__label {\n  pointer-events: none;\n}\n.srd-default-link__label > div {\n  display: inline-block;\n  position: absolute;\n}\n.srd-default-link__point {\n  fill: rgba(255, 255, 255, 0.5);\n}\n.srd-default-link--point-selected {\n  fill: #00c0ff;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 23645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 8081:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 70681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
Copyright (c) 2012-2014 Chris Pettitt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

module.exports = {
  graphlib: __webpack_require__(70574),

  layout: __webpack_require__(98123),
  debug: __webpack_require__(27570),
  util: {
    time: (__webpack_require__(11138).time),
    notime: (__webpack_require__(11138).notime)
  },
  version: __webpack_require__(88177)
};


/***/ }),

/***/ 92188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);
var greedyFAS = __webpack_require__(74079);

module.exports = {
  run: run,
  undo: undo
};

function run(g) {
  var fas = (g.graph().acyclicer === "greedy"
    ? greedyFAS(g, weightFn(g))
    : dfsFAS(g));
  _.forEach(fas, function(e) {
    var label = g.edge(e);
    g.removeEdge(e);
    label.forwardName = e.name;
    label.reversed = true;
    g.setEdge(e.w, e.v, label, _.uniqueId("rev"));
  });

  function weightFn(g) {
    return function(e) {
      return g.edge(e).weight;
    };
  }
}

function dfsFAS(g) {
  var fas = [];
  var stack = {};
  var visited = {};

  function dfs(v) {
    if (_.has(visited, v)) {
      return;
    }
    visited[v] = true;
    stack[v] = true;
    _.forEach(g.outEdges(v), function(e) {
      if (_.has(stack, e.w)) {
        fas.push(e);
      } else {
        dfs(e.w);
      }
    });
    delete stack[v];
  }

  _.forEach(g.nodes(), dfs);
  return fas;
}

function undo(g) {
  _.forEach(g.edges(), function(e) {
    var label = g.edge(e);
    if (label.reversed) {
      g.removeEdge(e);

      var forwardName = label.forwardName;
      delete label.reversed;
      delete label.forwardName;
      g.setEdge(e.w, e.v, label, forwardName);
    }
  });
}


/***/ }),

/***/ 61133:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);
var util = __webpack_require__(11138);

module.exports = addBorderSegments;

function addBorderSegments(g) {
  function dfs(v) {
    var children = g.children(v);
    var node = g.node(v);
    if (children.length) {
      _.forEach(children, dfs);
    }

    if (_.has(node, "minRank")) {
      node.borderLeft = [];
      node.borderRight = [];
      for (var rank = node.minRank, maxRank = node.maxRank + 1;
        rank < maxRank;
        ++rank) {
        addBorderNode(g, "borderLeft", "_bl", v, node, rank);
        addBorderNode(g, "borderRight", "_br", v, node, rank);
      }
    }
  }

  _.forEach(g.children(), dfs);
}

function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
  var label = { width: 0, height: 0, rank: rank, borderType: prop };
  var prev = sgNode[prop][rank - 1];
  var curr = util.addDummyNode(g, "border", label, prefix);
  sgNode[prop][rank] = curr;
  g.setParent(curr, sg);
  if (prev) {
    g.setEdge(prev, curr, { weight: 1 });
  }
}


/***/ }),

/***/ 53258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);

module.exports = {
  adjust: adjust,
  undo: undo
};

function adjust(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === "lr" || rankDir === "rl") {
    swapWidthHeight(g);
  }
}

function undo(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === "bt" || rankDir === "rl") {
    reverseY(g);
  }

  if (rankDir === "lr" || rankDir === "rl") {
    swapXY(g);
    swapWidthHeight(g);
  }
}

function swapWidthHeight(g) {
  _.forEach(g.nodes(), function(v) { swapWidthHeightOne(g.node(v)); });
  _.forEach(g.edges(), function(e) { swapWidthHeightOne(g.edge(e)); });
}

function swapWidthHeightOne(attrs) {
  var w = attrs.width;
  attrs.width = attrs.height;
  attrs.height = w;
}

function reverseY(g) {
  _.forEach(g.nodes(), function(v) { reverseYOne(g.node(v)); });

  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    _.forEach(edge.points, reverseYOne);
    if (_.has(edge, "y")) {
      reverseYOne(edge);
    }
  });
}

function reverseYOne(attrs) {
  attrs.y = -attrs.y;
}

function swapXY(g) {
  _.forEach(g.nodes(), function(v) { swapXYOne(g.node(v)); });

  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    _.forEach(edge.points, swapXYOne);
    if (_.has(edge, "x")) {
      swapXYOne(edge);
    }
  });
}

function swapXYOne(attrs) {
  var x = attrs.x;
  attrs.x = attrs.y;
  attrs.y = x;
}


/***/ }),

/***/ 77822:
/***/ ((module) => {

/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */

module.exports = List;

function List() {
  var sentinel = {};
  sentinel._next = sentinel._prev = sentinel;
  this._sentinel = sentinel;
}

List.prototype.dequeue = function() {
  var sentinel = this._sentinel;
  var entry = sentinel._prev;
  if (entry !== sentinel) {
    unlink(entry);
    return entry;
  }
};

List.prototype.enqueue = function(entry) {
  var sentinel = this._sentinel;
  if (entry._prev && entry._next) {
    unlink(entry);
  }
  entry._next = sentinel._next;
  sentinel._next._prev = entry;
  sentinel._next = entry;
  entry._prev = sentinel;
};

List.prototype.toString = function() {
  var strs = [];
  var sentinel = this._sentinel;
  var curr = sentinel._prev;
  while (curr !== sentinel) {
    strs.push(JSON.stringify(curr, filterOutLinks));
    curr = curr._prev;
  }
  return "[" + strs.join(", ") + "]";
};

function unlink(entry) {
  entry._prev._next = entry._next;
  entry._next._prev = entry._prev;
  delete entry._next;
  delete entry._prev;
}

function filterOutLinks(k, v) {
  if (k !== "_next" && k !== "_prev") {
    return v;
  }
}


/***/ }),

/***/ 27570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);
var util = __webpack_require__(11138);
var Graph = (__webpack_require__(70574).Graph);

module.exports = {
  debugOrdering: debugOrdering
};

/* istanbul ignore next */
function debugOrdering(g) {
  var layerMatrix = util.buildLayerMatrix(g);

  var h = new Graph({ compound: true, multigraph: true }).setGraph({});

  _.forEach(g.nodes(), function(v) {
    h.setNode(v, { label: v });
    h.setParent(v, "layer" + g.node(v).rank);
  });

  _.forEach(g.edges(), function(e) {
    h.setEdge(e.v, e.w, {}, e.name);
  });

  _.forEach(layerMatrix, function(layer, i) {
    var layerV = "layer" + i;
    h.setNode(layerV, { rank: "same" });
    _.reduce(layer, function(u, v) {
      h.setEdge(u, v, { style: "invis" });
      return v;
    });
  });

  return h;
}


/***/ }),

/***/ 70574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global window */

var graphlib;

if (true) {
  try {
    graphlib = __webpack_require__(28282);
  } catch (e) {
    // continue regardless of error
  }
}

if (!graphlib) {
  graphlib = window.graphlib;
}

module.exports = graphlib;


/***/ }),

/***/ 74079:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);
var Graph = (__webpack_require__(70574).Graph);
var List = __webpack_require__(77822);

/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */
module.exports = greedyFAS;

var DEFAULT_WEIGHT_FN = _.constant(1);

function greedyFAS(g, weightFn) {
  if (g.nodeCount() <= 1) {
    return [];
  }
  var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
  var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);

  // Expand multi-edges
  return _.flatten(_.map(results, function(e) {
    return g.outEdges(e.v, e.w);
  }), true);
}

function doGreedyFAS(g, buckets, zeroIdx) {
  var results = [];
  var sources = buckets[buckets.length - 1];
  var sinks = buckets[0];

  var entry;
  while (g.nodeCount()) {
    while ((entry = sinks.dequeue()))   { removeNode(g, buckets, zeroIdx, entry); }
    while ((entry = sources.dequeue())) { removeNode(g, buckets, zeroIdx, entry); }
    if (g.nodeCount()) {
      for (var i = buckets.length - 2; i > 0; --i) {
        entry = buckets[i].dequeue();
        if (entry) {
          results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
          break;
        }
      }
    }
  }

  return results;
}

function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
  var results = collectPredecessors ? [] : undefined;

  _.forEach(g.inEdges(entry.v), function(edge) {
    var weight = g.edge(edge);
    var uEntry = g.node(edge.v);

    if (collectPredecessors) {
      results.push({ v: edge.v, w: edge.w });
    }

    uEntry.out -= weight;
    assignBucket(buckets, zeroIdx, uEntry);
  });

  _.forEach(g.outEdges(entry.v), function(edge) {
    var weight = g.edge(edge);
    var w = edge.w;
    var wEntry = g.node(w);
    wEntry["in"] -= weight;
    assignBucket(buckets, zeroIdx, wEntry);
  });

  g.removeNode(entry.v);

  return results;
}

function buildState(g, weightFn) {
  var fasGraph = new Graph();
  var maxIn = 0;
  var maxOut = 0;

  _.forEach(g.nodes(), function(v) {
    fasGraph.setNode(v, { v: v, "in": 0, out: 0 });
  });

  // Aggregate weights on nodes, but also sum the weights across multi-edges
  // into a single edge for the fasGraph.
  _.forEach(g.edges(), function(e) {
    var prevWeight = fasGraph.edge(e.v, e.w) || 0;
    var weight = weightFn(e);
    var edgeWeight = prevWeight + weight;
    fasGraph.setEdge(e.v, e.w, edgeWeight);
    maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
    maxIn  = Math.max(maxIn,  fasGraph.node(e.w)["in"]  += weight);
  });

  var buckets = _.range(maxOut + maxIn + 3).map(function() { return new List(); });
  var zeroIdx = maxIn + 1;

  _.forEach(fasGraph.nodes(), function(v) {
    assignBucket(buckets, zeroIdx, fasGraph.node(v));
  });

  return { graph: fasGraph, buckets: buckets, zeroIdx: zeroIdx };
}

function assignBucket(buckets, zeroIdx, entry) {
  if (!entry.out) {
    buckets[0].enqueue(entry);
  } else if (!entry["in"]) {
    buckets[buckets.length - 1].enqueue(entry);
  } else {
    buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
  }
}


/***/ }),

/***/ 98123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);
var acyclic = __webpack_require__(92188);
var normalize = __webpack_require__(45995);
var rank = __webpack_require__(78093);
var normalizeRanks = (__webpack_require__(11138).normalizeRanks);
var parentDummyChains = __webpack_require__(24219);
var removeEmptyRanks = (__webpack_require__(11138).removeEmptyRanks);
var nestingGraph = __webpack_require__(72981);
var addBorderSegments = __webpack_require__(61133);
var coordinateSystem = __webpack_require__(53258);
var order = __webpack_require__(53408);
var position = __webpack_require__(17873);
var util = __webpack_require__(11138);
var Graph = (__webpack_require__(70574).Graph);

module.exports = layout;

function layout(g, opts) {
  var time = opts && opts.debugTiming ? util.time : util.notime;
  time("layout", function() {
    var layoutGraph = 
      time("  buildLayoutGraph", function() { return buildLayoutGraph(g); });
    time("  runLayout",        function() { runLayout(layoutGraph, time); });
    time("  updateInputGraph", function() { updateInputGraph(g, layoutGraph); });
  });
}

function runLayout(g, time) {
  time("    makeSpaceForEdgeLabels", function() { makeSpaceForEdgeLabels(g); });
  time("    removeSelfEdges",        function() { removeSelfEdges(g); });
  time("    acyclic",                function() { acyclic.run(g); });
  time("    nestingGraph.run",       function() { nestingGraph.run(g); });
  time("    rank",                   function() { rank(util.asNonCompoundGraph(g)); });
  time("    injectEdgeLabelProxies", function() { injectEdgeLabelProxies(g); });
  time("    removeEmptyRanks",       function() { removeEmptyRanks(g); });
  time("    nestingGraph.cleanup",   function() { nestingGraph.cleanup(g); });
  time("    normalizeRanks",         function() { normalizeRanks(g); });
  time("    assignRankMinMax",       function() { assignRankMinMax(g); });
  time("    removeEdgeLabelProxies", function() { removeEdgeLabelProxies(g); });
  time("    normalize.run",          function() { normalize.run(g); });
  time("    parentDummyChains",      function() { parentDummyChains(g); });
  time("    addBorderSegments",      function() { addBorderSegments(g); });
  time("    order",                  function() { order(g); });
  time("    insertSelfEdges",        function() { insertSelfEdges(g); });
  time("    adjustCoordinateSystem", function() { coordinateSystem.adjust(g); });
  time("    position",               function() { position(g); });
  time("    positionSelfEdges",      function() { positionSelfEdges(g); });
  time("    removeBorderNodes",      function() { removeBorderNodes(g); });
  time("    normalize.undo",         function() { normalize.undo(g); });
  time("    fixupEdgeLabelCoords",   function() { fixupEdgeLabelCoords(g); });
  time("    undoCoordinateSystem",   function() { coordinateSystem.undo(g); });
  time("    translateGraph",         function() { translateGraph(g); });
  time("    assignNodeIntersects",   function() { assignNodeIntersects(g); });
  time("    reversePoints",          function() { reversePointsForReversedEdges(g); });
  time("    acyclic.undo",           function() { acyclic.undo(g); });
}

/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */
function updateInputGraph(inputGraph, layoutGraph) {
  _.forEach(inputGraph.nodes(), function(v) {
    var inputLabel = inputGraph.node(v);
    var layoutLabel = layoutGraph.node(v);

    if (inputLabel) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;

      if (layoutGraph.children(v).length) {
        inputLabel.width = layoutLabel.width;
        inputLabel.height = layoutLabel.height;
      }
    }
  });

  _.forEach(inputGraph.edges(), function(e) {
    var inputLabel = inputGraph.edge(e);
    var layoutLabel = layoutGraph.edge(e);

    inputLabel.points = layoutLabel.points;
    if (_.has(layoutLabel, "x")) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;
    }
  });

  inputGraph.graph().width = layoutGraph.graph().width;
  inputGraph.graph().height = layoutGraph.graph().height;
}

var graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
var graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
var graphAttrs = ["acyclicer", "ranker", "rankdir", "align"];
var nodeNumAttrs = ["width", "height"];
var nodeDefaults = { width: 0, height: 0 };
var edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"];
var edgeDefaults = {
  minlen: 1, weight: 1, width: 0, height: 0,
  labeloffset: 10, labelpos: "r"
};
var edgeAttrs = ["labelpos"];

/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */
function buildLayoutGraph(inputGraph) {
  var g = new Graph({ multigraph: true, compound: true });
  var graph = canonicalize(inputGraph.graph());

  g.setGraph(_.merge({},
    graphDefaults,
    selectNumberAttrs(graph, graphNumAttrs),
    _.pick(graph, graphAttrs)));

  _.forEach(inputGraph.nodes(), function(v) {
    var node = canonicalize(inputGraph.node(v));
    g.setNode(v, _.defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
    g.setParent(v, inputGraph.parent(v));
  });

  _.forEach(inputGraph.edges(), function(e) {
    var edge = canonicalize(inputGraph.edge(e));
    g.setEdge(e, _.merge({},
      edgeDefaults,
      selectNumberAttrs(edge, edgeNumAttrs),
      _.pick(edge, edgeAttrs)));
  });

  return g;
}

/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */
function makeSpaceForEdgeLabels(g) {
  var graph = g.graph();
  graph.ranksep /= 2;
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    edge.minlen *= 2;
    if (edge.labelpos.toLowerCase() !== "c") {
      if (graph.rankdir === "TB" || graph.rankdir === "BT") {
        edge.width += edge.labeloffset;
      } else {
        edge.height += edge.labeloffset;
      }
    }
  });
}

/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */
function injectEdgeLabelProxies(g) {
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.width && edge.height) {
      var v = g.node(e.v);
      var w = g.node(e.w);
      var label = { rank: (w.rank - v.rank) / 2 + v.rank, e: e };
      util.addDummyNode(g, "edge-proxy", label, "_ep");
    }
  });
}

function assignRankMinMax(g) {
  var maxRank = 0;
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.borderTop) {
      node.minRank = g.node(node.borderTop).rank;
      node.maxRank = g.node(node.borderBottom).rank;
      maxRank = _.max(maxRank, node.maxRank);
    }
  });
  g.graph().maxRank = maxRank;
}

function removeEdgeLabelProxies(g) {
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.dummy === "edge-proxy") {
      g.edge(node.e).labelRank = node.rank;
      g.removeNode(v);
    }
  });
}

function translateGraph(g) {
  var minX = Number.POSITIVE_INFINITY;
  var maxX = 0;
  var minY = Number.POSITIVE_INFINITY;
  var maxY = 0;
  var graphLabel = g.graph();
  var marginX = graphLabel.marginx || 0;
  var marginY = graphLabel.marginy || 0;

  function getExtremes(attrs) {
    var x = attrs.x;
    var y = attrs.y;
    var w = attrs.width;
    var h = attrs.height;
    minX = Math.min(minX, x - w / 2);
    maxX = Math.max(maxX, x + w / 2);
    minY = Math.min(minY, y - h / 2);
    maxY = Math.max(maxY, y + h / 2);
  }

  _.forEach(g.nodes(), function(v) { getExtremes(g.node(v)); });
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (_.has(edge, "x")) {
      getExtremes(edge);
    }
  });

  minX -= marginX;
  minY -= marginY;

  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    node.x -= minX;
    node.y -= minY;
  });

  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    _.forEach(edge.points, function(p) {
      p.x -= minX;
      p.y -= minY;
    });
    if (_.has(edge, "x")) { edge.x -= minX; }
    if (_.has(edge, "y")) { edge.y -= minY; }
  });

  graphLabel.width = maxX - minX + marginX;
  graphLabel.height = maxY - minY + marginY;
}

function assignNodeIntersects(g) {
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    var nodeV = g.node(e.v);
    var nodeW = g.node(e.w);
    var p1, p2;
    if (!edge.points) {
      edge.points = [];
      p1 = nodeW;
      p2 = nodeV;
    } else {
      p1 = edge.points[0];
      p2 = edge.points[edge.points.length - 1];
    }
    edge.points.unshift(util.intersectRect(nodeV, p1));
    edge.points.push(util.intersectRect(nodeW, p2));
  });
}

function fixupEdgeLabelCoords(g) {
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (_.has(edge, "x")) {
      if (edge.labelpos === "l" || edge.labelpos === "r") {
        edge.width -= edge.labeloffset;
      }
      switch (edge.labelpos) {
      case "l": edge.x -= edge.width / 2 + edge.labeloffset; break;
      case "r": edge.x += edge.width / 2 + edge.labeloffset; break;
      }
    }
  });
}

function reversePointsForReversedEdges(g) {
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.reversed) {
      edge.points.reverse();
    }
  });
}

function removeBorderNodes(g) {
  _.forEach(g.nodes(), function(v) {
    if (g.children(v).length) {
      var node = g.node(v);
      var t = g.node(node.borderTop);
      var b = g.node(node.borderBottom);
      var l = g.node(_.last(node.borderLeft));
      var r = g.node(_.last(node.borderRight));

      node.width = Math.abs(r.x - l.x);
      node.height = Math.abs(b.y - t.y);
      node.x = l.x + node.width / 2;
      node.y = t.y + node.height / 2;
    }
  });

  _.forEach(g.nodes(), function(v) {
    if (g.node(v).dummy === "border") {
      g.removeNode(v);
    }
  });
}

function removeSelfEdges(g) {
  _.forEach(g.edges(), function(e) {
    if (e.v === e.w) {
      var node = g.node(e.v);
      if (!node.selfEdges) {
        node.selfEdges = [];
      }
      node.selfEdges.push({ e: e, label: g.edge(e) });
      g.removeEdge(e);
    }
  });
}

function insertSelfEdges(g) {
  var layers = util.buildLayerMatrix(g);
  _.forEach(layers, function(layer) {
    var orderShift = 0;
    _.forEach(layer, function(v, i) {
      var node = g.node(v);
      node.order = i + orderShift;
      _.forEach(node.selfEdges, function(selfEdge) {
        util.addDummyNode(g, "selfedge", {
          width: selfEdge.label.width,
          height: selfEdge.label.height,
          rank: node.rank,
          order: i + (++orderShift),
          e: selfEdge.e,
          label: selfEdge.label
        }, "_se");
      });
      delete node.selfEdges;
    });
  });
}

function positionSelfEdges(g) {
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.dummy === "selfedge") {
      var selfNode = g.node(node.e.v);
      var x = selfNode.x + selfNode.width / 2;
      var y = selfNode.y;
      var dx = node.x - x;
      var dy = selfNode.height / 2;
      g.setEdge(node.e, node.label);
      g.removeNode(v);
      node.label.points = [
        { x: x + 2 * dx / 3, y: y - dy },
        { x: x + 5 * dx / 6, y: y - dy },
        { x: x +     dx    , y: y },
        { x: x + 5 * dx / 6, y: y + dy },
        { x: x + 2 * dx / 3, y: y + dy }
      ];
      node.label.x = node.x;
      node.label.y = node.y;
    }
  });
}

function selectNumberAttrs(obj, attrs) {
  return _.mapValues(_.pick(obj, attrs), Number);
}

function canonicalize(attrs) {
  var newAttrs = {};
  _.forEach(attrs, function(v, k) {
    newAttrs[k.toLowerCase()] = v;
  });
  return newAttrs;
}


/***/ }),

/***/ 38436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global window */

var lodash;

if (true) {
  try {
    lodash = {
      cloneDeep: __webpack_require__(50361),
      constant: __webpack_require__(75703),
      defaults: __webpack_require__(91747),
      each: __webpack_require__(66073),
      filter: __webpack_require__(63105),
      find: __webpack_require__(13311),
      flatten: __webpack_require__(85564),
      forEach: __webpack_require__(84486),
      forIn: __webpack_require__(62620),
      has:  __webpack_require__(18721),
      isUndefined: __webpack_require__(52353),
      last: __webpack_require__(10928),
      map: __webpack_require__(35161),
      mapValues: __webpack_require__(66604),
      max: __webpack_require__(6162),
      merge: __webpack_require__(82492),
      min: __webpack_require__(53632),
      minBy: __webpack_require__(22762),
      now: __webpack_require__(7771),
      pick: __webpack_require__(78718),
      range: __webpack_require__(96026),
      reduce: __webpack_require__(54061),
      sortBy: __webpack_require__(89734),
      uniqueId: __webpack_require__(73955),
      values: __webpack_require__(52628),
      zipObject: __webpack_require__(7287),
    };
  } catch (e) {
    // continue regardless of error
  }
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;


/***/ }),

/***/ 72981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);
var util = __webpack_require__(11138);

module.exports = {
  run: run,
  cleanup: cleanup
};

/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */
function run(g) {
  var root = util.addDummyNode(g, "root", {}, "_root");
  var depths = treeDepths(g);
  var height = _.max(_.values(depths)) - 1; // Note: depths is an Object not an array
  var nodeSep = 2 * height + 1;

  g.graph().nestingRoot = root;

  // Multiply minlen by nodeSep to align nodes on non-border ranks.
  _.forEach(g.edges(), function(e) { g.edge(e).minlen *= nodeSep; });

  // Calculate a weight that is sufficient to keep subgraphs vertically compact
  var weight = sumWeights(g) + 1;

  // Create border nodes and link them up
  _.forEach(g.children(), function(child) {
    dfs(g, root, nodeSep, weight, height, depths, child);
  });

  // Save the multiplier for node layers for later removal of empty border
  // layers.
  g.graph().nodeRankFactor = nodeSep;
}

function dfs(g, root, nodeSep, weight, height, depths, v) {
  var children = g.children(v);
  if (!children.length) {
    if (v !== root) {
      g.setEdge(root, v, { weight: 0, minlen: nodeSep });
    }
    return;
  }

  var top = util.addBorderNode(g, "_bt");
  var bottom = util.addBorderNode(g, "_bb");
  var label = g.node(v);

  g.setParent(top, v);
  label.borderTop = top;
  g.setParent(bottom, v);
  label.borderBottom = bottom;

  _.forEach(children, function(child) {
    dfs(g, root, nodeSep, weight, height, depths, child);

    var childNode = g.node(child);
    var childTop = childNode.borderTop ? childNode.borderTop : child;
    var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
    var thisWeight = childNode.borderTop ? weight : 2 * weight;
    var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;

    g.setEdge(top, childTop, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });

    g.setEdge(childBottom, bottom, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });
  });

  if (!g.parent(v)) {
    g.setEdge(root, top, { weight: 0, minlen: height + depths[v] });
  }
}

function treeDepths(g) {
  var depths = {};
  function dfs(v, depth) {
    var children = g.children(v);
    if (children && children.length) {
      _.forEach(children, function(child) {
        dfs(child, depth + 1);
      });
    }
    depths[v] = depth;
  }
  _.forEach(g.children(), function(v) { dfs(v, 1); });
  return depths;
}

function sumWeights(g) {
  return _.reduce(g.edges(), function(acc, e) {
    return acc + g.edge(e).weight;
  }, 0);
}

function cleanup(g) {
  var graphLabel = g.graph();
  g.removeNode(graphLabel.nestingRoot);
  delete graphLabel.nestingRoot;
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.nestingEdge) {
      g.removeEdge(e);
    }
  });
}


/***/ }),

/***/ 45995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);
var util = __webpack_require__(11138);

module.exports = {
  run: run,
  undo: undo
};

/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */
function run(g) {
  g.graph().dummyChains = [];
  _.forEach(g.edges(), function(edge) { normalizeEdge(g, edge); });
}

function normalizeEdge(g, e) {
  var v = e.v;
  var vRank = g.node(v).rank;
  var w = e.w;
  var wRank = g.node(w).rank;
  var name = e.name;
  var edgeLabel = g.edge(e);
  var labelRank = edgeLabel.labelRank;

  if (wRank === vRank + 1) return;

  g.removeEdge(e);

  var dummy, attrs, i;
  for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
    edgeLabel.points = [];
    attrs = {
      width: 0, height: 0,
      edgeLabel: edgeLabel, edgeObj: e,
      rank: vRank
    };
    dummy = util.addDummyNode(g, "edge", attrs, "_d");
    if (vRank === labelRank) {
      attrs.width = edgeLabel.width;
      attrs.height = edgeLabel.height;
      attrs.dummy = "edge-label";
      attrs.labelpos = edgeLabel.labelpos;
    }
    g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
    if (i === 0) {
      g.graph().dummyChains.push(dummy);
    }
    v = dummy;
  }

  g.setEdge(v, w, { weight: edgeLabel.weight }, name);
}

function undo(g) {
  _.forEach(g.graph().dummyChains, function(v) {
    var node = g.node(v);
    var origLabel = node.edgeLabel;
    var w;
    g.setEdge(node.edgeObj, origLabel);
    while (node.dummy) {
      w = g.successors(v)[0];
      g.removeNode(v);
      origLabel.points.push({ x: node.x, y: node.y });
      if (node.dummy === "edge-label") {
        origLabel.x = node.x;
        origLabel.y = node.y;
        origLabel.width = node.width;
        origLabel.height = node.height;
      }
      v = w;
      node = g.node(v);
    }
  });
}


/***/ }),

/***/ 55093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);

module.exports = addSubgraphConstraints;

function addSubgraphConstraints(g, cg, vs) {
  var prev = {},
    rootPrev;

  _.forEach(vs, function(v) {
    var child = g.parent(v),
      parent,
      prevChild;
    while (child) {
      parent = g.parent(child);
      if (parent) {
        prevChild = prev[parent];
        prev[parent] = child;
      } else {
        prevChild = rootPrev;
        rootPrev = child;
      }
      if (prevChild && prevChild !== child) {
        cg.setEdge(prevChild, child);
        return;
      }
      child = parent;
    }
  });

  /*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */
}


/***/ }),

/***/ 35439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);

module.exports = barycenter;

function barycenter(g, movable) {
  return _.map(movable, function(v) {
    var inV = g.inEdges(v);
    if (!inV.length) {
      return { v: v };
    } else {
      var result = _.reduce(inV, function(acc, e) {
        var edge = g.edge(e),
          nodeU = g.node(e.v);
        return {
          sum: acc.sum + (edge.weight * nodeU.order),
          weight: acc.weight + edge.weight
        };
      }, { sum: 0, weight: 0 });

      return {
        v: v,
        barycenter: result.sum / result.weight,
        weight: result.weight
      };
    }
  });
}



/***/ }),

/***/ 23128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);
var Graph = (__webpack_require__(70574).Graph);

module.exports = buildLayerGraph;

/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */
function buildLayerGraph(g, rank, relationship) {
  var root = createRootNode(g),
    result = new Graph({ compound: true }).setGraph({ root: root })
      .setDefaultNodeLabel(function(v) { return g.node(v); });

  _.forEach(g.nodes(), function(v) {
    var node = g.node(v),
      parent = g.parent(v);

    if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
      result.setNode(v);
      result.setParent(v, parent || root);

      // This assumes we have only short edges!
      _.forEach(g[relationship](v), function(e) {
        var u = e.v === v ? e.w : e.v,
          edge = result.edge(u, v),
          weight = !_.isUndefined(edge) ? edge.weight : 0;
        result.setEdge(u, v, { weight: g.edge(e).weight + weight });
      });

      if (_.has(node, "minRank")) {
        result.setNode(v, {
          borderLeft: node.borderLeft[rank],
          borderRight: node.borderRight[rank]
        });
      }
    }
  });

  return result;
}

function createRootNode(g) {
  var v;
  while (g.hasNode((v = _.uniqueId("_root"))));
  return v;
}


/***/ }),

/***/ 56630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);

module.exports = crossCount;

/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
function crossCount(g, layering) {
  var cc = 0;
  for (var i = 1; i < layering.length; ++i) {
    cc += twoLayerCrossCount(g, layering[i-1], layering[i]);
  }
  return cc;
}

function twoLayerCrossCount(g, northLayer, southLayer) {
  // Sort all of the edges between the north and south layers by their position
  // in the north layer and then the south. Map these edges to the position of
  // their head in the south layer.
  var southPos = _.zipObject(southLayer,
    _.map(southLayer, function (v, i) { return i; }));
  var southEntries = _.flatten(_.map(northLayer, function(v) {
    return _.sortBy(_.map(g.outEdges(v), function(e) {
      return { pos: southPos[e.w], weight: g.edge(e).weight };
    }), "pos");
  }), true);

  // Build the accumulator tree
  var firstIndex = 1;
  while (firstIndex < southLayer.length) firstIndex <<= 1;
  var treeSize = 2 * firstIndex - 1;
  firstIndex -= 1;
  var tree = _.map(new Array(treeSize), function() { return 0; });

  // Calculate the weighted crossings
  var cc = 0;
  _.forEach(southEntries.forEach(function(entry) {
    var index = entry.pos + firstIndex;
    tree[index] += entry.weight;
    var weightSum = 0;
    while (index > 0) {
      if (index % 2) {
        weightSum += tree[index + 1];
      }
      index = (index - 1) >> 1;
      tree[index] += entry.weight;
    }
    cc += entry.weight * weightSum;
  }));

  return cc;
}


/***/ }),

/***/ 53408:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);
var initOrder = __webpack_require__(2588);
var crossCount = __webpack_require__(56630);
var sortSubgraph = __webpack_require__(61026);
var buildLayerGraph = __webpack_require__(23128);
var addSubgraphConstraints = __webpack_require__(55093);
var Graph = (__webpack_require__(70574).Graph);
var util = __webpack_require__(11138);

module.exports = order;

/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */
function order(g) {
  var maxRank = util.maxRank(g),
    downLayerGraphs = buildLayerGraphs(g, _.range(1, maxRank + 1), "inEdges"),
    upLayerGraphs = buildLayerGraphs(g, _.range(maxRank - 1, -1, -1), "outEdges");

  var layering = initOrder(g);
  assignOrder(g, layering);

  var bestCC = Number.POSITIVE_INFINITY,
    best;

  for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);

    layering = util.buildLayerMatrix(g);
    var cc = crossCount(g, layering);
    if (cc < bestCC) {
      lastBest = 0;
      best = _.cloneDeep(layering);
      bestCC = cc;
    }
  }

  assignOrder(g, best);
}

function buildLayerGraphs(g, ranks, relationship) {
  return _.map(ranks, function(rank) {
    return buildLayerGraph(g, rank, relationship);
  });
}

function sweepLayerGraphs(layerGraphs, biasRight) {
  var cg = new Graph();
  _.forEach(layerGraphs, function(lg) {
    var root = lg.graph().root;
    var sorted = sortSubgraph(lg, root, cg, biasRight);
    _.forEach(sorted.vs, function(v, i) {
      lg.node(v).order = i;
    });
    addSubgraphConstraints(lg, cg, sorted.vs);
  });
}

function assignOrder(g, layering) {
  _.forEach(layering, function(layer) {
    _.forEach(layer, function(v, i) {
      g.node(v).order = i;
    });
  });
}


/***/ }),

/***/ 2588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);

module.exports = initOrder;

/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */
function initOrder(g) {
  var visited = {};
  var simpleNodes = _.filter(g.nodes(), function(v) {
    return !g.children(v).length;
  });
  var maxRank = _.max(_.map(simpleNodes, function(v) { return g.node(v).rank; }));
  var layers = _.map(_.range(maxRank + 1), function() { return []; });

  function dfs(v) {
    if (_.has(visited, v)) return;
    visited[v] = true;
    var node = g.node(v);
    layers[node.rank].push(v);
    _.forEach(g.successors(v), dfs);
  }

  var orderedVs = _.sortBy(simpleNodes, function(v) { return g.node(v).rank; });
  _.forEach(orderedVs, dfs);

  return layers;
}


/***/ }),

/***/ 83678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);

module.exports = resolveConflicts;

/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
function resolveConflicts(entries, cg) {
  var mappedEntries = {};
  _.forEach(entries, function(entry, i) {
    var tmp = mappedEntries[entry.v] = {
      indegree: 0,
      "in": [],
      out: [],
      vs: [entry.v],
      i: i
    };
    if (!_.isUndefined(entry.barycenter)) {
      tmp.barycenter = entry.barycenter;
      tmp.weight = entry.weight;
    }
  });

  _.forEach(cg.edges(), function(e) {
    var entryV = mappedEntries[e.v];
    var entryW = mappedEntries[e.w];
    if (!_.isUndefined(entryV) && !_.isUndefined(entryW)) {
      entryW.indegree++;
      entryV.out.push(mappedEntries[e.w]);
    }
  });

  var sourceSet = _.filter(mappedEntries, function(entry) {
    return !entry.indegree;
  });

  return doResolveConflicts(sourceSet);
}

function doResolveConflicts(sourceSet) {
  var entries = [];

  function handleIn(vEntry) {
    return function(uEntry) {
      if (uEntry.merged) {
        return;
      }
      if (_.isUndefined(uEntry.barycenter) ||
          _.isUndefined(vEntry.barycenter) ||
          uEntry.barycenter >= vEntry.barycenter) {
        mergeEntries(vEntry, uEntry);
      }
    };
  }

  function handleOut(vEntry) {
    return function(wEntry) {
      wEntry["in"].push(vEntry);
      if (--wEntry.indegree === 0) {
        sourceSet.push(wEntry);
      }
    };
  }

  while (sourceSet.length) {
    var entry = sourceSet.pop();
    entries.push(entry);
    _.forEach(entry["in"].reverse(), handleIn(entry));
    _.forEach(entry.out, handleOut(entry));
  }

  return _.map(_.filter(entries, function(entry) { return !entry.merged; }),
    function(entry) {
      return _.pick(entry, ["vs", "i", "barycenter", "weight"]);
    });

}

function mergeEntries(target, source) {
  var sum = 0;
  var weight = 0;

  if (target.weight) {
    sum += target.barycenter * target.weight;
    weight += target.weight;
  }

  if (source.weight) {
    sum += source.barycenter * source.weight;
    weight += source.weight;
  }

  target.vs = source.vs.concat(target.vs);
  target.barycenter = sum / weight;
  target.weight = weight;
  target.i = Math.min(source.i, target.i);
  source.merged = true;
}


/***/ }),

/***/ 61026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);
var barycenter = __webpack_require__(35439);
var resolveConflicts = __webpack_require__(83678);
var sort = __webpack_require__(87304);

module.exports = sortSubgraph;

function sortSubgraph(g, v, cg, biasRight) {
  var movable = g.children(v);
  var node = g.node(v);
  var bl = node ? node.borderLeft : undefined;
  var br = node ? node.borderRight: undefined;
  var subgraphs = {};

  if (bl) {
    movable = _.filter(movable, function(w) {
      return w !== bl && w !== br;
    });
  }

  var barycenters = barycenter(g, movable);
  _.forEach(barycenters, function(entry) {
    if (g.children(entry.v).length) {
      var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
      subgraphs[entry.v] = subgraphResult;
      if (_.has(subgraphResult, "barycenter")) {
        mergeBarycenters(entry, subgraphResult);
      }
    }
  });

  var entries = resolveConflicts(barycenters, cg);
  expandSubgraphs(entries, subgraphs);

  var result = sort(entries, biasRight);

  if (bl) {
    result.vs = _.flatten([bl, result.vs, br], true);
    if (g.predecessors(bl).length) {
      var blPred = g.node(g.predecessors(bl)[0]),
        brPred = g.node(g.predecessors(br)[0]);
      if (!_.has(result, "barycenter")) {
        result.barycenter = 0;
        result.weight = 0;
      }
      result.barycenter = (result.barycenter * result.weight +
                           blPred.order + brPred.order) / (result.weight + 2);
      result.weight += 2;
    }
  }

  return result;
}

function expandSubgraphs(entries, subgraphs) {
  _.forEach(entries, function(entry) {
    entry.vs = _.flatten(entry.vs.map(function(v) {
      if (subgraphs[v]) {
        return subgraphs[v].vs;
      }
      return v;
    }), true);
  });
}

function mergeBarycenters(target, other) {
  if (!_.isUndefined(target.barycenter)) {
    target.barycenter = (target.barycenter * target.weight +
                         other.barycenter * other.weight) /
                        (target.weight + other.weight);
    target.weight += other.weight;
  } else {
    target.barycenter = other.barycenter;
    target.weight = other.weight;
  }
}


/***/ }),

/***/ 87304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);
var util = __webpack_require__(11138);

module.exports = sort;

function sort(entries, biasRight) {
  var parts = util.partition(entries, function(entry) {
    return _.has(entry, "barycenter");
  });
  var sortable = parts.lhs,
    unsortable = _.sortBy(parts.rhs, function(entry) { return -entry.i; }),
    vs = [],
    sum = 0,
    weight = 0,
    vsIndex = 0;

  sortable.sort(compareWithBias(!!biasRight));

  vsIndex = consumeUnsortable(vs, unsortable, vsIndex);

  _.forEach(sortable, function (entry) {
    vsIndex += entry.vs.length;
    vs.push(entry.vs);
    sum += entry.barycenter * entry.weight;
    weight += entry.weight;
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
  });

  var result = { vs: _.flatten(vs, true) };
  if (weight) {
    result.barycenter = sum / weight;
    result.weight = weight;
  }
  return result;
}

function consumeUnsortable(vs, unsortable, index) {
  var last;
  while (unsortable.length && (last = _.last(unsortable)).i <= index) {
    unsortable.pop();
    vs.push(last.vs);
    index++;
  }
  return index;
}

function compareWithBias(bias) {
  return function(entryV, entryW) {
    if (entryV.barycenter < entryW.barycenter) {
      return -1;
    } else if (entryV.barycenter > entryW.barycenter) {
      return 1;
    }

    return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
  };
}


/***/ }),

/***/ 24219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(38436);

module.exports = parentDummyChains;

function parentDummyChains(g) {
  var postorderNums = postorder(g);

  _.forEach(g.graph().dummyChains, function(v) {
    var node = g.node(v);
    var edgeObj = node.edgeObj;
    var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
    var path = pathData.path;
    var lca = pathData.lca;
    var pathIdx = 0;
    var pathV = path[pathIdx];
    var ascending = true;

    while (v !== edgeObj.w) {
      node = g.node(v);

      if (ascending) {
        while ((pathV = path[pathIdx]) !== lca &&
               g.node(pathV).maxRank < node.rank) {
          pathIdx++;
        }

        if (pathV === lca) {
          ascending = false;
        }
      }

      if (!ascending) {
        while (pathIdx < path.length - 1 &&
               g.node(pathV = path[pathIdx + 1]).minRank <= node.rank) {
          pathIdx++;
        }
        pathV = path[pathIdx];
      }

      g.setParent(v, pathV);
      v = g.successors(v)[0];
    }
  });
}

// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
  var vPath = [];
  var wPath = [];
  var low = Math.min(postorderNums[v].low, postorderNums[w].low);
  var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
  var parent;
  var lca;

  // Traverse up from v to find the LCA
  parent = v;
  do {
    parent = g.parent(parent);
    vPath.push(parent);
  } while (parent &&
           (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
  lca = parent;

  // Traverse from w to LCA
  parent = w;
  while ((parent = g.parent(parent)) !== lca) {
    wPath.push(parent);
  }

  return { path: vPath.concat(wPath.reverse()), lca: lca };
}

function postorder(g) {
  var result = {};
  var lim = 0;

  function dfs(v) {
    var low = lim;
    _.forEach(g.children(v), dfs);
    result[v] = { low: low, lim: lim++ };
  }
  _.forEach(g.children(), dfs);

  return result;
}


/***/ }),

/***/ 3573:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);
var Graph = (__webpack_require__(70574).Graph);
var util = __webpack_require__(11138);

/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */

module.exports = {
  positionX: positionX,
  findType1Conflicts: findType1Conflicts,
  findType2Conflicts: findType2Conflicts,
  addConflict: addConflict,
  hasConflict: hasConflict,
  verticalAlignment: verticalAlignment,
  horizontalCompaction: horizontalCompaction,
  alignCoordinates: alignCoordinates,
  findSmallestWidthAlignment: findSmallestWidthAlignment,
  balance: balance
};

/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */
function findType1Conflicts(g, layering) {
  var conflicts = {};

  function visitLayer(prevLayer, layer) {
    var
      // last visited node in the previous layer that is incident on an inner
      // segment.
      k0 = 0,
      // Tracks the last node in this layer scanned for crossings with a type-1
      // segment.
      scanPos = 0,
      prevLayerLength = prevLayer.length,
      lastNode = _.last(layer);

    _.forEach(layer, function(v, i) {
      var w = findOtherInnerSegmentNode(g, v),
        k1 = w ? g.node(w).order : prevLayerLength;

      if (w || v === lastNode) {
        _.forEach(layer.slice(scanPos, i +1), function(scanNode) {
          _.forEach(g.predecessors(scanNode), function(u) {
            var uLabel = g.node(u),
              uPos = uLabel.order;
            if ((uPos < k0 || k1 < uPos) &&
                !(uLabel.dummy && g.node(scanNode).dummy)) {
              addConflict(conflicts, u, scanNode);
            }
          });
        });
        scanPos = i + 1;
        k0 = k1;
      }
    });

    return layer;
  }

  _.reduce(layering, visitLayer);
  return conflicts;
}

function findType2Conflicts(g, layering) {
  var conflicts = {};

  function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
    var v;
    _.forEach(_.range(southPos, southEnd), function(i) {
      v = south[i];
      if (g.node(v).dummy) {
        _.forEach(g.predecessors(v), function(u) {
          var uNode = g.node(u);
          if (uNode.dummy &&
              (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
            addConflict(conflicts, u, v);
          }
        });
      }
    });
  }


  function visitLayer(north, south) {
    var prevNorthPos = -1,
      nextNorthPos,
      southPos = 0;

    _.forEach(south, function(v, southLookahead) {
      if (g.node(v).dummy === "border") {
        var predecessors = g.predecessors(v);
        if (predecessors.length) {
          nextNorthPos = g.node(predecessors[0]).order;
          scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
          southPos = southLookahead;
          prevNorthPos = nextNorthPos;
        }
      }
      scan(south, southPos, south.length, nextNorthPos, north.length);
    });

    return south;
  }

  _.reduce(layering, visitLayer);
  return conflicts;
}

function findOtherInnerSegmentNode(g, v) {
  if (g.node(v).dummy) {
    return _.find(g.predecessors(v), function(u) {
      return g.node(u).dummy;
    });
  }
}

function addConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  var conflictsV = conflicts[v];
  if (!conflictsV) {
    conflicts[v] = conflictsV = {};
  }
  conflictsV[w] = true;
}

function hasConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return _.has(conflicts[v], w);
}

/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */
function verticalAlignment(g, layering, conflicts, neighborFn) {
  var root = {},
    align = {},
    pos = {};

  // We cache the position here based on the layering because the graph and
  // layering may be out of sync. The layering matrix is manipulated to
  // generate different extreme alignments.
  _.forEach(layering, function(layer) {
    _.forEach(layer, function(v, order) {
      root[v] = v;
      align[v] = v;
      pos[v] = order;
    });
  });

  _.forEach(layering, function(layer) {
    var prevIdx = -1;
    _.forEach(layer, function(v) {
      var ws = neighborFn(v);
      if (ws.length) {
        ws = _.sortBy(ws, function(w) { return pos[w]; });
        var mp = (ws.length - 1) / 2;
        for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
          var w = ws[i];
          if (align[v] === v &&
              prevIdx < pos[w] &&
              !hasConflict(conflicts, v, w)) {
            align[w] = v;
            align[v] = root[v] = root[w];
            prevIdx = pos[w];
          }
        }
      }
    });
  });

  return { root: root, align: align };
}

function horizontalCompaction(g, layering, root, align, reverseSep) {
  // This portion of the algorithm differs from BK due to a number of problems.
  // Instead of their algorithm we construct a new block graph and do two
  // sweeps. The first sweep places blocks with the smallest possible
  // coordinates. The second sweep removes unused space by moving blocks to the
  // greatest coordinates without violating separation.
  var xs = {},
    blockG = buildBlockGraph(g, layering, root, reverseSep),
    borderType = reverseSep ? "borderLeft" : "borderRight";

  function iterate(setXsFunc, nextNodesFunc) {
    var stack = blockG.nodes();
    var elem = stack.pop();
    var visited = {};
    while (elem) {
      if (visited[elem]) {
        setXsFunc(elem);
      } else {
        visited[elem] = true;
        stack.push(elem);
        stack = stack.concat(nextNodesFunc(elem));
      }

      elem = stack.pop();
    }
  }

  // First pass, assign smallest coordinates
  function pass1(elem) {
    xs[elem] = blockG.inEdges(elem).reduce(function(acc, e) {
      return Math.max(acc, xs[e.v] + blockG.edge(e));
    }, 0);
  }

  // Second pass, assign greatest coordinates
  function pass2(elem) {
    var min = blockG.outEdges(elem).reduce(function(acc, e) {
      return Math.min(acc, xs[e.w] - blockG.edge(e));
    }, Number.POSITIVE_INFINITY);

    var node = g.node(elem);
    if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
      xs[elem] = Math.max(xs[elem], min);
    }
  }

  iterate(pass1, blockG.predecessors.bind(blockG));
  iterate(pass2, blockG.successors.bind(blockG));

  // Assign x coordinates to all nodes
  _.forEach(align, function(v) {
    xs[v] = xs[root[v]];
  });

  return xs;
}


function buildBlockGraph(g, layering, root, reverseSep) {
  var blockGraph = new Graph(),
    graphLabel = g.graph(),
    sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);

  _.forEach(layering, function(layer) {
    var u;
    _.forEach(layer, function(v) {
      var vRoot = root[v];
      blockGraph.setNode(vRoot);
      if (u) {
        var uRoot = root[u],
          prevMax = blockGraph.edge(uRoot, vRoot);
        blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
      }
      u = v;
    });
  });

  return blockGraph;
}

/*
 * Returns the alignment that has the smallest width of the given alignments.
 */
function findSmallestWidthAlignment(g, xss) {
  return _.minBy(_.values(xss), function (xs) {
    var max = Number.NEGATIVE_INFINITY;
    var min = Number.POSITIVE_INFINITY;

    _.forIn(xs, function (x, v) {
      var halfWidth = width(g, v) / 2;

      max = Math.max(x + halfWidth, max);
      min = Math.min(x - halfWidth, min);
    });

    return max - min;
  });
}

/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */
function alignCoordinates(xss, alignTo) {
  var alignToVals = _.values(alignTo),
    alignToMin = _.min(alignToVals),
    alignToMax = _.max(alignToVals);

  _.forEach(["u", "d"], function(vert) {
    _.forEach(["l", "r"], function(horiz) {
      var alignment = vert + horiz,
        xs = xss[alignment],
        delta;
      if (xs === alignTo) return;

      var xsVals = _.values(xs);
      delta = horiz === "l" ? alignToMin - _.min(xsVals) : alignToMax - _.max(xsVals);

      if (delta) {
        xss[alignment] = _.mapValues(xs, function(x) { return x + delta; });
      }
    });
  });
}

function balance(xss, align) {
  return _.mapValues(xss.ul, function(ignore, v) {
    if (align) {
      return xss[align.toLowerCase()][v];
    } else {
      var xs = _.sortBy(_.map(xss, v));
      return (xs[1] + xs[2]) / 2;
    }
  });
}

function positionX(g) {
  var layering = util.buildLayerMatrix(g);
  var conflicts = _.merge(
    findType1Conflicts(g, layering),
    findType2Conflicts(g, layering));

  var xss = {};
  var adjustedLayering;
  _.forEach(["u", "d"], function(vert) {
    adjustedLayering = vert === "u" ? layering : _.values(layering).reverse();
    _.forEach(["l", "r"], function(horiz) {
      if (horiz === "r") {
        adjustedLayering = _.map(adjustedLayering, function(inner) {
          return _.values(inner).reverse();
        });
      }

      var neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
      var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
      var xs = horizontalCompaction(g, adjustedLayering,
        align.root, align.align, horiz === "r");
      if (horiz === "r") {
        xs = _.mapValues(xs, function(x) { return -x; });
      }
      xss[vert + horiz] = xs;
    });
  });

  var smallestWidth = findSmallestWidthAlignment(g, xss);
  alignCoordinates(xss, smallestWidth);
  return balance(xss, g.graph().align);
}

function sep(nodeSep, edgeSep, reverseSep) {
  return function(g, v, w) {
    var vLabel = g.node(v);
    var wLabel = g.node(w);
    var sum = 0;
    var delta;

    sum += vLabel.width / 2;
    if (_.has(vLabel, "labelpos")) {
      switch (vLabel.labelpos.toLowerCase()) {
      case "l": delta = -vLabel.width / 2; break;
      case "r": delta = vLabel.width / 2; break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;

    sum += wLabel.width / 2;
    if (_.has(wLabel, "labelpos")) {
      switch (wLabel.labelpos.toLowerCase()) {
      case "l": delta = wLabel.width / 2; break;
      case "r": delta = -wLabel.width / 2; break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    return sum;
  };
}

function width(g, v) {
  return g.node(v).width;
}


/***/ }),

/***/ 17873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);
var util = __webpack_require__(11138);
var positionX = (__webpack_require__(3573).positionX);

module.exports = position;

function position(g) {
  g = util.asNonCompoundGraph(g);

  positionY(g);
  _.forEach(positionX(g), function(x, v) {
    g.node(v).x = x;
  });
}

function positionY(g) {
  var layering = util.buildLayerMatrix(g);
  var rankSep = g.graph().ranksep;
  var prevY = 0;
  _.forEach(layering, function(layer) {
    var maxHeight = _.max(_.map(layer, function(v) { return g.node(v).height; }));
    _.forEach(layer, function(v) {
      g.node(v).y = prevY + maxHeight / 2;
    });
    prevY += maxHeight + rankSep;
  });
}



/***/ }),

/***/ 20300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);
var Graph = (__webpack_require__(70574).Graph);
var slack = (__webpack_require__(76681).slack);

module.exports = feasibleTree;

/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
function feasibleTree(g) {
  var t = new Graph({ directed: false });

  // Choose arbitrary node from which to start our tree
  var start = g.nodes()[0];
  var size = g.nodeCount();
  t.setNode(start, {});

  var edge, delta;
  while (tightTree(t, g) < size) {
    edge = findMinSlackEdge(t, g);
    delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
    shiftRanks(t, g, delta);
  }

  return t;
}

/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
function tightTree(t, g) {
  function dfs(v) {
    _.forEach(g.nodeEdges(v), function(e) {
      var edgeV = e.v,
        w = (v === edgeV) ? e.w : edgeV;
      if (!t.hasNode(w) && !slack(g, e)) {
        t.setNode(w, {});
        t.setEdge(v, w, {});
        dfs(w);
      }
    });
  }

  _.forEach(t.nodes(), dfs);
  return t.nodeCount();
}

/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */
function findMinSlackEdge(t, g) {
  return _.minBy(g.edges(), function(e) {
    if (t.hasNode(e.v) !== t.hasNode(e.w)) {
      return slack(g, e);
    }
  });
}

function shiftRanks(t, g, delta) {
  _.forEach(t.nodes(), function(v) {
    g.node(v).rank += delta;
  });
}


/***/ }),

/***/ 78093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var rankUtil = __webpack_require__(76681);
var longestPath = rankUtil.longestPath;
var feasibleTree = __webpack_require__(20300);
var networkSimplex = __webpack_require__(42472);

module.exports = rank;

/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */
function rank(g) {
  switch(g.graph().ranker) {
  case "network-simplex": networkSimplexRanker(g); break;
  case "tight-tree": tightTreeRanker(g); break;
  case "longest-path": longestPathRanker(g); break;
  default: networkSimplexRanker(g);
  }
}

// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = longestPath;

function tightTreeRanker(g) {
  longestPath(g);
  feasibleTree(g);
}

function networkSimplexRanker(g) {
  networkSimplex(g);
}


/***/ }),

/***/ 42472:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);
var feasibleTree = __webpack_require__(20300);
var slack = (__webpack_require__(76681).slack);
var initRank = (__webpack_require__(76681).longestPath);
var preorder = (__webpack_require__(70574).alg.preorder);
var postorder = (__webpack_require__(70574).alg.postorder);
var simplify = (__webpack_require__(11138).simplify);

module.exports = networkSimplex;

// Expose some internals for testing purposes
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;

/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */
function networkSimplex(g) {
  g = simplify(g);
  initRank(g);
  var t = feasibleTree(g);
  initLowLimValues(t);
  initCutValues(t, g);

  var e, f;
  while ((e = leaveEdge(t))) {
    f = enterEdge(t, g, e);
    exchangeEdges(t, g, e, f);
  }
}

/*
 * Initializes cut values for all edges in the tree.
 */
function initCutValues(t, g) {
  var vs = postorder(t, t.nodes());
  vs = vs.slice(0, vs.length - 1);
  _.forEach(vs, function(v) {
    assignCutValue(t, g, v);
  });
}

function assignCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}

/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */
function calcCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  // True if the child is on the tail end of the edge in the directed graph
  var childIsTail = true;
  // The graph's view of the tree edge we're inspecting
  var graphEdge = g.edge(child, parent);
  // The accumulated cut value for the edge between this node and its parent
  var cutValue = 0;

  if (!graphEdge) {
    childIsTail = false;
    graphEdge = g.edge(parent, child);
  }

  cutValue = graphEdge.weight;

  _.forEach(g.nodeEdges(child), function(e) {
    var isOutEdge = e.v === child,
      other = isOutEdge ? e.w : e.v;

    if (other !== parent) {
      var pointsToHead = isOutEdge === childIsTail,
        otherWeight = g.edge(e).weight;

      cutValue += pointsToHead ? otherWeight : -otherWeight;
      if (isTreeEdge(t, child, other)) {
        var otherCutValue = t.edge(child, other).cutvalue;
        cutValue += pointsToHead ? -otherCutValue : otherCutValue;
      }
    }
  });

  return cutValue;
}

function initLowLimValues(tree, root) {
  if (arguments.length < 2) {
    root = tree.nodes()[0];
  }
  dfsAssignLowLim(tree, {}, 1, root);
}

function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
  var low = nextLim;
  var label = tree.node(v);

  visited[v] = true;
  _.forEach(tree.neighbors(v), function(w) {
    if (!_.has(visited, w)) {
      nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    }
  });

  label.low = low;
  label.lim = nextLim++;
  if (parent) {
    label.parent = parent;
  } else {
    // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
  }

  return nextLim;
}

function leaveEdge(tree) {
  return _.find(tree.edges(), function(e) {
    return tree.edge(e).cutvalue < 0;
  });
}

function enterEdge(t, g, edge) {
  var v = edge.v;
  var w = edge.w;

  // For the rest of this function we assume that v is the tail and w is the
  // head, so if we don't have this edge in the graph we should flip it to
  // match the correct orientation.
  if (!g.hasEdge(v, w)) {
    v = edge.w;
    w = edge.v;
  }

  var vLabel = t.node(v);
  var wLabel = t.node(w);
  var tailLabel = vLabel;
  var flip = false;

  // If the root is in the tail of the edge then we need to flip the logic that
  // checks for the head and tail nodes in the candidates function below.
  if (vLabel.lim > wLabel.lim) {
    tailLabel = wLabel;
    flip = true;
  }

  var candidates = _.filter(g.edges(), function(edge) {
    return flip === isDescendant(t, t.node(edge.v), tailLabel) &&
           flip !== isDescendant(t, t.node(edge.w), tailLabel);
  });

  return _.minBy(candidates, function(edge) { return slack(g, edge); });
}

function exchangeEdges(t, g, e, f) {
  var v = e.v;
  var w = e.w;
  t.removeEdge(v, w);
  t.setEdge(f.v, f.w, {});
  initLowLimValues(t);
  initCutValues(t, g);
  updateRanks(t, g);
}

function updateRanks(t, g) {
  var root = _.find(t.nodes(), function(v) { return !g.node(v).parent; });
  var vs = preorder(t, root);
  vs = vs.slice(1);
  _.forEach(vs, function(v) {
    var parent = t.node(v).parent,
      edge = g.edge(v, parent),
      flipped = false;

    if (!edge) {
      edge = g.edge(parent, v);
      flipped = true;
    }

    g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
  });
}

/*
 * Returns true if the edge is in the tree.
 */
function isTreeEdge(tree, u, v) {
  return tree.hasEdge(u, v);
}

/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */
function isDescendant(tree, vLabel, rootLabel) {
  return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}


/***/ }),

/***/ 76681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(38436);

module.exports = {
  longestPath: longestPath,
  slack: slack
};

/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */
function longestPath(g) {
  var visited = {};

  function dfs(v) {
    var label = g.node(v);
    if (_.has(visited, v)) {
      return label.rank;
    }
    visited[v] = true;

    var rank = _.min(_.map(g.outEdges(v), function(e) {
      return dfs(e.w) - g.edge(e).minlen;
    }));

    if (rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
        rank === undefined || // return value of _.map([]) for Lodash 4
        rank === null) { // return value of _.map([null])
      rank = 0;
    }

    return (label.rank = rank);
  }

  _.forEach(g.sources(), dfs);
}

/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */
function slack(g, e) {
  return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}


/***/ }),

/***/ 11138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
/* eslint "no-console": off */



var _ = __webpack_require__(38436);
var Graph = (__webpack_require__(70574).Graph);

module.exports = {
  addDummyNode: addDummyNode,
  simplify: simplify,
  asNonCompoundGraph: asNonCompoundGraph,
  successorWeights: successorWeights,
  predecessorWeights: predecessorWeights,
  intersectRect: intersectRect,
  buildLayerMatrix: buildLayerMatrix,
  normalizeRanks: normalizeRanks,
  removeEmptyRanks: removeEmptyRanks,
  addBorderNode: addBorderNode,
  maxRank: maxRank,
  partition: partition,
  time: time,
  notime: notime
};

/*
 * Adds a dummy node to the graph and return v.
 */
function addDummyNode(g, type, attrs, name) {
  var v;
  do {
    v = _.uniqueId(name);
  } while (g.hasNode(v));

  attrs.dummy = type;
  g.setNode(v, attrs);
  return v;
}

/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */
function simplify(g) {
  var simplified = new Graph().setGraph(g.graph());
  _.forEach(g.nodes(), function(v) { simplified.setNode(v, g.node(v)); });
  _.forEach(g.edges(), function(e) {
    var simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 };
    var label = g.edge(e);
    simplified.setEdge(e.v, e.w, {
      weight: simpleLabel.weight + label.weight,
      minlen: Math.max(simpleLabel.minlen, label.minlen)
    });
  });
  return simplified;
}

function asNonCompoundGraph(g) {
  var simplified = new Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
  _.forEach(g.nodes(), function(v) {
    if (!g.children(v).length) {
      simplified.setNode(v, g.node(v));
    }
  });
  _.forEach(g.edges(), function(e) {
    simplified.setEdge(e, g.edge(e));
  });
  return simplified;
}

function successorWeights(g) {
  var weightMap = _.map(g.nodes(), function(v) {
    var sucs = {};
    _.forEach(g.outEdges(v), function(e) {
      sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
    });
    return sucs;
  });
  return _.zipObject(g.nodes(), weightMap);
}

function predecessorWeights(g) {
  var weightMap = _.map(g.nodes(), function(v) {
    var preds = {};
    _.forEach(g.inEdges(v), function(e) {
      preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
    });
    return preds;
  });
  return _.zipObject(g.nodes(), weightMap);
}

/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */
function intersectRect(rect, point) {
  var x = rect.x;
  var y = rect.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = rect.width / 2;
  var h = rect.height / 2;

  if (!dx && !dy) {
    throw new Error("Not possible to find intersection inside of the rectangle");
  }

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = h * dx / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = w * dy / dx;
  }

  return { x: x + sx, y: y + sy };
}

/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */
function buildLayerMatrix(g) {
  var layering = _.map(_.range(maxRank(g) + 1), function() { return []; });
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    var rank = node.rank;
    if (!_.isUndefined(rank)) {
      layering[rank][node.order] = v;
    }
  });
  return layering;
}

/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */
function normalizeRanks(g) {
  var min = _.min(_.map(g.nodes(), function(v) { return g.node(v).rank; }));
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    if (_.has(node, "rank")) {
      node.rank -= min;
    }
  });
}

function removeEmptyRanks(g) {
  // Ranks may not start at 0, so we need to offset them
  var offset = _.min(_.map(g.nodes(), function(v) { return g.node(v).rank; }));

  var layers = [];
  _.forEach(g.nodes(), function(v) {
    var rank = g.node(v).rank - offset;
    if (!layers[rank]) {
      layers[rank] = [];
    }
    layers[rank].push(v);
  });

  var delta = 0;
  var nodeRankFactor = g.graph().nodeRankFactor;
  _.forEach(layers, function(vs, i) {
    if (_.isUndefined(vs) && i % nodeRankFactor !== 0) {
      --delta;
    } else if (delta) {
      _.forEach(vs, function(v) { g.node(v).rank += delta; });
    }
  });
}

function addBorderNode(g, prefix, rank, order) {
  var node = {
    width: 0,
    height: 0
  };
  if (arguments.length >= 4) {
    node.rank = rank;
    node.order = order;
  }
  return addDummyNode(g, "border", node, prefix);
}

function maxRank(g) {
  return _.max(_.map(g.nodes(), function(v) {
    var rank = g.node(v).rank;
    if (!_.isUndefined(rank)) {
      return rank;
    }
  }));
}

/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */
function partition(collection, fn) {
  var result = { lhs: [], rhs: [] };
  _.forEach(collection, function(value) {
    if (fn(value)) {
      result.lhs.push(value);
    } else {
      result.rhs.push(value);
    }
  });
  return result;
}

/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */
function time(name, fn) {
  var start = _.now();
  try {
    return fn();
  } finally {
    console.log(name + " time: " + (_.now() - start) + "ms");
  }
}

function notime(name, fn) {
  return fn();
}


/***/ }),

/***/ 88177:
/***/ ((module) => {

module.exports = "0.8.5";


/***/ }),

/***/ 36112:
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
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/pluginId.js
var pluginId = __webpack_require__(35133);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(78384);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/utils/getTrad.js

const getTrad = (id) => `${(pluginId_default())}.${id}`;
/* harmony default export */ const utils_getTrad = (getTrad);

// EXTERNAL MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/utils/storm-react-diagrams.js
var storm_react_diagrams = __webpack_require__(54597);
// EXTERNAL MODULE: ./node_modules/dagre/index.js
var dagre = __webpack_require__(70681);
var dagre_default = /*#__PURE__*/__webpack_require__.n(dagre);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/utils/dagreLayout.js


function dagreLayout(model) {
  var g = new (dagre_default()).graphlib.Graph({
    multigraph: true,
    compound: true
  });
  g.setGraph({
    align: "DR",
    rankdir: "RL",
    ranker: "longest-path",
    marginx: 25,
    marginy: 25
  });
  g.setDefaultEdgeLabel(function() {
    return {};
  });
  _.forEach(model.getNodes(), (node) => {
    g.setNode(node.getID(), { width: node.width, height: node.height });
  });
  _.forEach(model.getLinks(), (link) => {
    if (link.getSourcePort() && link.getTargetPort()) {
      g.setEdge({
        v: link.getSourcePort().getNode().getID(),
        w: link.getTargetPort().getNode().getID(),
        name: link.getID()
      });
    }
  });
  dagre_default().layout(g);
  g.nodes().forEach((v) => {
    const node = g.node(v);
    model.getNode(v).setPosition(node.x - node.width / 2, node.y - node.height / 2);
  });
  g.edges().forEach((e) => {
    const edge = g.edge(e);
    const link = model.getLink(e.name);
    const points = [link.getFirstPoint()];
    for (let i = 1; i < edge.points.length - 1; i++) {
      points.push(new storm_react_diagrams.PointModel(link, { x: edge.points[i].x, y: edge.points[i].y }));
    }
    link.setPoints(points.concat(link.getLastPoint()));
  });
}

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/utils/requests.js
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


function getEntitiesRelationData() {
  return __async(this, null, function* () {
    return yield (0,build.request)(`/${(pluginId_default())}/er-data`);
  });
}
function getTablesRelationData() {
  return __async(this, null, function* () {
    return yield (0,build.request)(`/${(pluginId_default())}/tr-data`);
  });
}

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/utils/erChart.js


function drawEntityNodes(data, options) {
  const engine = new storm_react_diagrams.DiagramEngine();
  engine.registerNodeFactory(new storm_react_diagrams.DefaultNodeFactory());
  engine.registerLinkFactory(new storm_react_diagrams.DefaultLinkFactory());
  engine.registerPortFactory(new storm_react_diagrams.DefaultPortFactory());
  engine.registerLabelFactory(new storm_react_diagrams.DefaultLabelFactory());
  const model = new storm_react_diagrams.DiagramModel();
  const nodes = [], nodesMap = {}, links = [];
  for (const index in data) {
    const model2 = data[index];
    const color = model2.modelType === "component" ? "rgb(255, 200, 0)" : model2.kind === "collectionType" ? "rgb(0,126,255)" : "rgb(85, 171, 0)";
    const node = new storm_react_diagrams.DefaultNodeModel(model2.key, color);
    const ports = {};
    const attributes = Object.keys(model2.attributes);
    ports.id = node.addInPort("id");
    for (const attr of attributes) {
      const fieldData = model2.attributes[attr];
      const relation = fieldData.type === "relation";
      const component = fieldData.type === "component";
      const dynamiczone = fieldData.type === "dynamiczone";
      if (relation) {
        ports[attr] = node.addOutPort(attr);
      } else if (component) {
        ports[attr] = node.addOutPort(attr);
      } else if (dynamiczone) {
        ports[attr] = node.addOutPort(attr);
      } else {
        ports[attr] = node.addInPort(attr);
      }
    }
    node.setPosition(0, 0);
    nodes.push(node);
    nodesMap[model2.key] = { node, ports };
  }
  for (const index in data) {
    const model2 = data[index];
    const { node, ports } = nodesMap[model2.key];
    const attributes = Object.keys(model2.attributes);
    for (const attr of attributes) {
      const fieldData = model2.attributes[attr];
      const relation = fieldData.type === "relation";
      const component = fieldData.type === "component" && (fieldData == null ? void 0 : fieldData.component);
      const dynamiczone = fieldData.type === "dynamiczone" && (fieldData == null ? void 0 : fieldData.components);
      const relationTarget = fieldData == null ? void 0 : fieldData.target;
      if (relation && options.relations && relationTarget && nodesMap[relationTarget]) {
        const outPort = ports[attr];
        const link = outPort.link(nodesMap[relationTarget].ports.id);
        link.setColor("#999");
        links.push(link);
      } else if (component && nodesMap[component] && options.components) {
        const outPort = ports[attr];
        const link = outPort.link(nodesMap[component].ports.id);
        link.setColor("#ffc800");
        links.push(link);
      } else if (dynamiczone && Array.isArray(dynamiczone) && options.dynamiczones) {
        for (const compId of dynamiczone) {
          if (nodesMap[compId]) {
            const outPort = ports[attr];
            const link = outPort.link(nodesMap[compId].ports.id);
            link.setColor("#ff6400");
            links.push(link);
          }
        }
      }
    }
    nodesMap[model2.key] = { node, ports };
  }
  model.addAll(...nodes, ...links);
  engine.setDiagramModel(model);
  return { engine, model };
}

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/utils/trChart.js
/* provided dependency */ var console = __webpack_require__(25108);


function drawDatabaseNodes(data, options) {
  var _a, _b;
  const engine = new storm_react_diagrams.DiagramEngine();
  engine.registerNodeFactory(new storm_react_diagrams.DefaultNodeFactory());
  engine.registerLinkFactory(new storm_react_diagrams.DefaultLinkFactory());
  engine.registerPortFactory(new storm_react_diagrams.DefaultPortFactory());
  engine.registerLabelFactory(new storm_react_diagrams.DefaultLabelFactory());
  const model = new storm_react_diagrams.DiagramModel();
  const nodes = [], nodesMap = {}, links = [];
  const uidToName = (uid) => {
    var _a2;
    return (_a2 = data == null ? void 0 : data.find((d) => d.key === uid)) == null ? void 0 : _a2.name;
  };
  const nameTouid = (name) => {
    var _a2;
    return (_a2 = data == null ? void 0 : data.find((d) => d.name === name)) == null ? void 0 : _a2.key;
  };
  for (const index in data) {
    const model2 = data[index];
    const color = model2.name.endsWith("_components") ? "#ff6400" : model2.name.startsWith("components_") ? "#ffc800" : "rgb(0,126,255)";
    const node = new storm_react_diagrams.DefaultNodeModel(model2.name, color);
    const ports = {};
    const attributes = Object.keys(model2.attributes);
    for (const attr of attributes) {
      const fieldData = model2.attributes[attr];
      const relation = fieldData.type === "relation";
      if (relation) {
        ports[attr] = node.addOutPort(`*${attr}`);
      } else {
        ports[attr] = node.addInPort(attr);
      }
    }
    node.setPosition(0, 0);
    nodes.push(node);
    nodesMap[model2.name] = { node, ports };
  }
  for (const index in data) {
    const model2 = data[index];
    const { ports } = nodesMap[model2.name];
    const foreignKeys = (_a = model2.foreignKeys) != null ? _a : [];
    const attributes = Object.keys(model2.attributes);
    for (const attr of attributes) {
      const fieldData = model2.attributes[attr];
      const relation = fieldData.type === "relation";
      const joinTable = fieldData.joinTable;
      if (relation && !joinTable) {
        const referencedTable = uidToName(fieldData.target);
        const reference = nodesMap[referencedTable];
        if (!reference) {
          continue;
        }
        const outPort = ports[attr];
        const inPort = reference.ports.id;
        const link = outPort.link(inPort);
        link.setColor("#00FF00");
        links.push(link);
      } else if (relation && joinTable) {
        const {
          joinColumn,
          inverseJoinColumn,
          name,
          on,
          orderBy
        } = joinTable;
        if (!joinColumn) {
          continue;
        }
        if (!inverseJoinColumn) {
          console.log("inverseJoinColumn missing22", joinTable);
          continue;
        }
        const reference = nodesMap[name];
        if (!reference) {
          continue;
        }
        if (!on) {
          continue;
        }
        console.log({ mn: model2.name, attr, name, fieldData, on, joinColumn, inverseJoinColumn, reference });
        const outPort = ports[attr];
        const inPort = reference.ports.id;
        const link = outPort.link(inPort);
        link.setColor("#FF00FF");
        links.push(link);
        const out2Port = reference.ports[inverseJoinColumn.name];
        const in2Port = (_b = nodesMap[uidToName(fieldData.target)]) == null ? void 0 : _b.ports.id;
        out2Port.in = false;
        in2Port.in = true;
        console.log({ outPort, out2Port, inPort, in2Port });
        const link2 = out2Port.link(in2Port);
        link2.setColor("#00FFFF");
        links.push(link2);
      }
    }
  }
  model.addAll(...nodes, ...links);
  engine.setDiagramModel(model);
  return { engine, model };
}

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(93379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(90569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(19216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(44589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/strapi-plugin-entity-relationship-chart/admin/src/utils/style.min.css
var style_min = __webpack_require__(45473);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/utils/style.min.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style_min/* default */.Z, options);




       /* harmony default export */ const utils_style_min = (style_min/* default */.Z && style_min/* default.locals */.Z.locals ? style_min/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/strapi-plugin-entity-relationship-chart/admin/src/pages/HomePage/main.css
var main = __webpack_require__(44840);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/pages/HomePage/main.css

      
      
      
      
      
      
      
      
      

var main_options = {};

main_options.styleTagTransform = (styleTagTransform_default());
main_options.setAttributes = (setAttributesWithoutAttributes_default());

      main_options.insert = insertBySelector_default().bind(null, "head");
    
main_options.domAPI = (styleDomAPI_default());
main_options.insertStyleElement = (insertStyleElement_default());

var main_update = injectStylesIntoStyleTag_default()(main/* default */.Z, main_options);




       /* harmony default export */ const HomePage_main = (main/* default */.Z && main/* default.locals */.Z.locals ? main/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/pages/HomePage/index.js
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
var HomePage_async = (__this, __arguments, generator) => {
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















const Legend = styled_components_browser_cjs["default"].span`
  width: 12px;
  height: 3px;
  vertical-align: middle;
  display: inline-block;
  margin: 0 8px 0 4px;
  border-radius: 1px;

  background-color: ${(props) => props.color ? props.color : "#999"};
`;
const Icon = styled_components_browser_cjs["default"].span`
  svg {
    width: 1em;
    height: 1em;
    vertical-align: middle;

    > g,
    path {
      fill: none
    }
  }
`;
function FeatherDatabase(props) {
  return /* @__PURE__ */ react.createElement(Icon, null, /* @__PURE__ */ react.createElement("svg", __spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ react.createElement("g", {
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ react.createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
  }))));
}
function FeatherBox(props) {
  return /* @__PURE__ */ react.createElement(Icon, null, /* @__PURE__ */ react.createElement("svg", __spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ react.createElement("g", {
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ react.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M3.27 6.96L12 12.01l8.73-5.05"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M12 22.08V12"
  }))));
}
function updateQuery(key, value) {
  const url = new URL(window.location);
  if (!value) {
    url.searchParams.delete(key);
  } else {
    url.searchParams.set(key, value);
  }
  window.history.pushState({}, "", url);
}
const HomePage = () => {
  const url = new URL(window.location);
  const [type, setType] = (0,react.useState)(url.searchParams.get("type"));
  const [engine, setEngine] = (0,react.useState)();
  const [erData, setERData] = (0,react.useState)();
  const [trData, setTRData] = (0,react.useState)();
  const [error, setError] = (0,react.useState)();
  const [relations, setRelations] = (0,react.useState)(true);
  const [components, setComponents] = (0,react.useState)(true);
  const [dynamiczones, setDynamiczones] = (0,react.useState)(true);
  const { formatMessage } = (0,react_intl.useIntl)();
  const title = formatMessage({
    id: utils_getTrad("name"),
    defaultMessage: "Entity Relationship Chart"
  });
  const subtitle = formatMessage({
    id: utils_getTrad("description"),
    defaultMessage: "Displays Entity Relationship Diagram of all Strapi models, fields and relations."
  });
  (0,react.useEffect)(() => {
    function getData() {
      return HomePage_async(this, null, function* () {
        try {
          if (type === void 0 && !erData) {
            setERData(yield getEntitiesRelationData());
          } else if (type === "database" && !trData) {
            setTRData(yield getTablesRelationData());
          }
        } catch (e) {
          setError(e);
        }
      });
    }
    getData();
  }, [type, setERData, setTRData, setError]);
  (0,react.useEffect)(() => {
    setEngine(null);
    setTimeout(() => {
      if (type === void 0 && erData) {
        const { engine: engine2, model } = drawEntityNodes(erData, { relations, components, dynamiczones });
        setEngine(engine2);
        dagreLayout(model);
        engine2.repaintCanvas();
      } else if (type === "database" && trData) {
        const { engine: engine2, model } = drawDatabaseNodes(trData, { relations, components, dynamiczones });
        setEngine(engine2);
        dagreLayout(model);
        engine2.repaintCanvas();
      }
    }, 0);
  }, [type, erData, trData, relations, components, dynamiczones]);
  (0,react.useEffect)(() => {
    updateQuery("type", type);
  }, [type]);
  return /* @__PURE__ */ react.createElement("main", null, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title,
    subtitle,
    primaryAction: type === void 0 ? /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement(FeatherDatabase, null),
      onClick: () => setType("database")
    }, "Switch to Database view") : /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement(FeatherBox, null),
      onClick: () => setType()
    }, "Switch to API view")
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, error && /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 7,
    background: "neutral0",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement("h2", null, error.toString()), /* @__PURE__ */ react.createElement("pre", null, /* @__PURE__ */ react.createElement("code", null, error.stack))), !error && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 1
  }, /* @__PURE__ */ react.createElement("label", null, /* @__PURE__ */ react.createElement("input", {
    type: "checkbox",
    checked: relations,
    onChange: (e) => setRelations(e.target.checked)
  }), " relations", /* @__PURE__ */ react.createElement(Legend, null)), /* @__PURE__ */ react.createElement("label", null, /* @__PURE__ */ react.createElement("input", {
    type: "checkbox",
    checked: components,
    onChange: (e) => setComponents(e.target.checked)
  }), " components", /* @__PURE__ */ react.createElement(Legend, {
    color: "#ffc800"
  })), /* @__PURE__ */ react.createElement("label", null, /* @__PURE__ */ react.createElement("input", {
    type: "checkbox",
    checked: dynamiczones,
    onChange: (e) => setDynamiczones(e.target.checked)
  }), " dynamiczones", /* @__PURE__ */ react.createElement(Legend, {
    color: "#ff6400"
  }))), /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral0",
    hasRadius: true,
    style: { height: "80vh", width: "100%" }
  }, engine && /* @__PURE__ */ react.createElement(storm_react_diagrams.DiagramWidget, {
    diagramEngine: engine
  })))));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-entity-relationship-chart/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${(pluginId_default())}`,
    component: pages_HomePage,
    exact: true
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    component: build.NotFound
  })));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 54597:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) {
    module.exports = factory(__webpack_require__(96486), __webpack_require__(53547));
  } else {}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
  return function(modules) {
    var installedModules = {};
    function __nested_webpack_require_649__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module2 = installedModules[moduleId] = { i: moduleId, l: false, exports: {} };
      modules[moduleId].call(module2.exports, module2, module2.exports, __nested_webpack_require_649__);
      module2.l = true;
      return module2.exports;
    }
    __nested_webpack_require_649__.m = modules;
    __nested_webpack_require_649__.c = installedModules;
    __nested_webpack_require_649__.d = function(exports2, name, getter) {
      if (!__nested_webpack_require_649__.o(exports2, name)) {
        Object.defineProperty(exports2, name, { configurable: false, enumerable: true, get: getter });
      }
    };
    __nested_webpack_require_649__.r = function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
    };
    __nested_webpack_require_649__.n = function(module2) {
      var getter = module2 && module2.__esModule ? function getDefault() {
        return module2["default"];
      } : function getModuleExports() {
        return module2;
      };
      __nested_webpack_require_649__.d(getter, "a", getter);
      return getter;
    };
    __nested_webpack_require_649__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    __nested_webpack_require_649__.p = "";
    return __nested_webpack_require_649__(__nested_webpack_require_649__.s = 45);
  }([
    function(module2, exports2) {
      module2.exports = __WEBPACK_EXTERNAL_MODULE__0__;
    },
    function(module2, exports2) {
      module2.exports = __WEBPACK_EXTERNAL_MODULE__1__;
    },
    function(module2, exports2) {
      var DiagonalMovement = { Always: 1, Never: 2, IfAtMostOneObstacle: 3, OnlyWhenNoObstacles: 4 };
      module2.exports = DiagonalMovement;
    },
    function(module2, exports2, __nested_webpack_require_2425__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_2425__(1);
      var BaseWidget = function(_super) {
        __extends(BaseWidget2, _super);
        function BaseWidget2(name, props) {
          var _this = _super.call(this, props) || this;
          _this.className = name;
          return _this;
        }
        BaseWidget2.prototype.bem = function(selector) {
          return (this.props.baseClass || this.className) + selector + " ";
        };
        BaseWidget2.prototype.getClassName = function() {
          return (this.props.baseClass || this.className) + " " + (this.props.className ? this.props.className + " " : "");
        };
        BaseWidget2.prototype.getProps = function() {
          return __assign({}, this.props.extraProps || {}, { className: this.getClassName() });
        };
        return BaseWidget2;
      }(React.Component);
      exports2.BaseWidget = BaseWidget;
    },
    function(module2, exports2) {
      function backtrace(node) {
        var path = [[node.x, node.y]];
        while (node.parent) {
          node = node.parent;
          path.push([node.x, node.y]);
        }
        return path.reverse();
      }
      exports2.backtrace = backtrace;
      function biBacktrace(nodeA, nodeB) {
        var pathA = backtrace(nodeA), pathB = backtrace(nodeB);
        return pathA.concat(pathB.reverse());
      }
      exports2.biBacktrace = biBacktrace;
      function pathLength(path) {
        var i, sum = 0, a, b, dx, dy;
        for (i = 1; i < path.length; ++i) {
          a = path[i - 1];
          b = path[i];
          dx = a[0] - b[0];
          dy = a[1] - b[1];
          sum += Math.sqrt(dx * dx + dy * dy);
        }
        return sum;
      }
      exports2.pathLength = pathLength;
      function interpolate(x0, y0, x1, y1) {
        var abs = Math.abs, line = [], sx, sy, dx, dy, err, e2;
        dx = abs(x1 - x0);
        dy = abs(y1 - y0);
        sx = x0 < x1 ? 1 : -1;
        sy = y0 < y1 ? 1 : -1;
        err = dx - dy;
        while (true) {
          line.push([x0, y0]);
          if (x0 === x1 && y0 === y1) {
            break;
          }
          e2 = 2 * err;
          if (e2 > -dy) {
            err = err - dy;
            x0 = x0 + sx;
          }
          if (e2 < dx) {
            err = err + dx;
            y0 = y0 + sy;
          }
        }
        return line;
      }
      exports2.interpolate = interpolate;
      function expandPath(path) {
        var expanded = [], len = path.length, coord0, coord1, interpolated, interpolatedLen, i, j;
        if (len < 2) {
          return expanded;
        }
        for (i = 0; i < len - 1; ++i) {
          coord0 = path[i];
          coord1 = path[i + 1];
          interpolated = interpolate(coord0[0], coord0[1], coord1[0], coord1[1]);
          interpolatedLen = interpolated.length;
          for (j = 0; j < interpolatedLen - 1; ++j) {
            expanded.push(interpolated[j]);
          }
        }
        expanded.push(path[len - 1]);
        return expanded;
      }
      exports2.expandPath = expandPath;
      function smoothenPath(grid, path) {
        var len = path.length, x0 = path[0][0], y0 = path[0][1], x1 = path[len - 1][0], y1 = path[len - 1][1], sx, sy, ex, ey, newPath, i, j, coord, line, testCoord, blocked;
        sx = x0;
        sy = y0;
        newPath = [[sx, sy]];
        for (i = 2; i < len; ++i) {
          coord = path[i];
          ex = coord[0];
          ey = coord[1];
          line = interpolate(sx, sy, ex, ey);
          blocked = false;
          for (j = 1; j < line.length; ++j) {
            testCoord = line[j];
            if (!grid.isWalkableAt(testCoord[0], testCoord[1])) {
              blocked = true;
              break;
            }
          }
          if (blocked) {
            lastValidCoord = path[i - 1];
            newPath.push(lastValidCoord);
            sx = lastValidCoord[0];
            sy = lastValidCoord[1];
          }
        }
        newPath.push([x1, y1]);
        return newPath;
      }
      exports2.smoothenPath = smoothenPath;
      function compressPath(path) {
        if (path.length < 3) {
          return path;
        }
        var compressed = [], sx = path[0][0], sy = path[0][1], px = path[1][0], py = path[1][1], dx = px - sx, dy = py - sy, lx, ly, ldx, ldy, sq, i;
        sq = Math.sqrt(dx * dx + dy * dy);
        dx /= sq;
        dy /= sq;
        compressed.push([sx, sy]);
        for (i = 2; i < path.length; i++) {
          lx = px;
          ly = py;
          ldx = dx;
          ldy = dy;
          px = path[i][0];
          py = path[i][1];
          dx = px - lx;
          dy = py - ly;
          sq = Math.sqrt(dx * dx + dy * dy);
          dx /= sq;
          dy /= sq;
          if (dx !== ldx || dy !== ldy) {
            compressed.push([lx, ly]);
          }
        }
        compressed.push([px, py]);
        return compressed;
      }
      exports2.compressPath = compressPath;
    },
    function(module2, exports2, __nested_webpack_require_8416__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseModel_1 = __nested_webpack_require_8416__(6);
      var PointModel = function(_super) {
        __extends(PointModel2, _super);
        function PointModel2(link, points) {
          var _this = _super.call(this) || this;
          _this.x = points.x;
          _this.y = points.y;
          _this.parent = link;
          return _this;
        }
        PointModel2.prototype.getSelectedEntities = function() {
          if (_super.prototype.isSelected.call(this) && !this.isConnectedToPort()) {
            return [this];
          }
          return [];
        };
        PointModel2.prototype.isConnectedToPort = function() {
          return this.parent.getPortForPoint(this) !== null;
        };
        PointModel2.prototype.getLink = function() {
          return this.getParent();
        };
        PointModel2.prototype.deSerialize = function(ob, engine) {
          _super.prototype.deSerialize.call(this, ob, engine);
          this.x = ob.x;
          this.y = ob.y;
        };
        PointModel2.prototype.serialize = function() {
          return _.merge(_super.prototype.serialize.call(this), { x: this.x, y: this.y });
        };
        PointModel2.prototype.remove = function() {
          if (this.parent) {
            this.parent.removePoint(this);
          }
          _super.prototype.remove.call(this);
        };
        PointModel2.prototype.updateLocation = function(points) {
          this.x = points.x;
          this.y = points.y;
        };
        PointModel2.prototype.getX = function() {
          return this.x;
        };
        PointModel2.prototype.getY = function() {
          return this.y;
        };
        PointModel2.prototype.isLocked = function() {
          return _super.prototype.isLocked.call(this) || this.getParent().isLocked();
        };
        return PointModel2;
      }(BaseModel_1.BaseModel);
      exports2.PointModel = PointModel;
    },
    function(module2, exports2, __nested_webpack_require_11052__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseEntity_1 = __nested_webpack_require_11052__(13);
      var _2 = __webpack_require__(96486);
      var BaseModel = function(_super) {
        __extends(BaseModel2, _super);
        function BaseModel2(type, id) {
          var _this = _super.call(this, id) || this;
          _this.type = type;
          _this.selected = false;
          return _this;
        }
        BaseModel2.prototype.getParent = function() {
          return this.parent;
        };
        BaseModel2.prototype.setParent = function(parent) {
          this.parent = parent;
        };
        BaseModel2.prototype.getSelectedEntities = function() {
          if (this.isSelected()) {
            return [this];
          }
          return [];
        };
        BaseModel2.prototype.deSerialize = function(ob, engine) {
          _super.prototype.deSerialize.call(this, ob, engine);
          this.type = ob.type;
          this.selected = ob.selected;
        };
        BaseModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), { type: this.type, selected: this.selected });
        };
        BaseModel2.prototype.getType = function() {
          return this.type;
        };
        BaseModel2.prototype.getID = function() {
          return this.id;
        };
        BaseModel2.prototype.isSelected = function() {
          return this.selected;
        };
        BaseModel2.prototype.setSelected = function(selected) {
          if (selected === void 0) {
            selected = true;
          }
          this.selected = selected;
          this.iterateListeners(function(listener, event2) {
            if (listener.selectionChanged) {
              listener.selectionChanged(__assign({}, event2, { isSelected: selected }));
            }
          });
        };
        BaseModel2.prototype.remove = function() {
          this.iterateListeners(function(listener, event2) {
            if (listener.entityRemoved) {
              listener.entityRemoved(event2);
            }
          });
        };
        return BaseModel2;
      }(BaseEntity_1.BaseEntity);
      exports2.BaseModel = BaseModel;
    },
    function(module2, exports2, __nested_webpack_require_14239__) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var closest = __nested_webpack_require_14239__(70);
      var PathFinding_1 = __nested_webpack_require_14239__(16);
      var Path = __nested_webpack_require_14239__(51);
      var Toolkit = function() {
        function Toolkit2() {
        }
        Toolkit2.UID = function() {
          if (Toolkit2.TESTING) {
            Toolkit2.TESTING_UID++;
            return "" + Toolkit2.TESTING_UID;
          }
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = c === "x" ? r : r & 3 | 8;
            return v.toString(16);
          });
        };
        Toolkit2.closest = function(element, selector) {
          if (document.body.closest) {
            return element.closest(selector);
          }
          return closest(element, selector);
        };
        Toolkit2.generateLinePath = function(firstPoint, lastPoint) {
          return "M" + firstPoint.x + "," + firstPoint.y + " L " + lastPoint.x + "," + lastPoint.y;
        };
        Toolkit2.generateCurvePath = function(firstPoint, lastPoint, curvy) {
          if (curvy === void 0) {
            curvy = 0;
          }
          var isHorizontal = Math.abs(firstPoint.x - lastPoint.x) > Math.abs(firstPoint.y - lastPoint.y);
          var curvyX = isHorizontal ? curvy : 0;
          var curvyY = isHorizontal ? 0 : curvy;
          return "M" + firstPoint.x + "," + firstPoint.y + " C " + (firstPoint.x + curvyX) + "," + (firstPoint.y + curvyY) + "\n    " + (lastPoint.x - curvyX) + "," + (lastPoint.y - curvyY) + " " + lastPoint.x + "," + lastPoint.y;
        };
        Toolkit2.generateDynamicPath = function(pathCoords) {
          var path = Path();
          path = path.moveto(pathCoords[0][0] * PathFinding_1.ROUTING_SCALING_FACTOR, pathCoords[0][1] * PathFinding_1.ROUTING_SCALING_FACTOR);
          pathCoords.slice(1).forEach(function(coords) {
            path = path.lineto(coords[0] * PathFinding_1.ROUTING_SCALING_FACTOR, coords[1] * PathFinding_1.ROUTING_SCALING_FACTOR);
          });
          return path.print();
        };
        Toolkit2.TESTING = false;
        Toolkit2.TESTING_UID = 0;
        return Toolkit2;
      }();
      exports2.Toolkit = Toolkit;
    },
    function(module2, exports2, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var AbstractFactory = function() {
        function AbstractFactory2(name) {
          this.type = name;
        }
        AbstractFactory2.prototype.getType = function() {
          return this.type;
        };
        return AbstractFactory2;
      }();
      exports2.AbstractFactory = AbstractFactory;
    },
    function(module2, exports2, __nested_webpack_require_17070__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseModel_1 = __nested_webpack_require_17070__(6);
      var _2 = __webpack_require__(96486);
      var NodeModel = function(_super) {
        __extends(NodeModel2, _super);
        function NodeModel2(nodeType, id) {
          if (nodeType === void 0) {
            nodeType = "default";
          }
          var _this = _super.call(this, nodeType, id) || this;
          _this.x = 0;
          _this.y = 0;
          _this.extras = {};
          _this.ports = {};
          return _this;
        }
        NodeModel2.prototype.setPosition = function(x, y) {
          var oldX = this.x;
          var oldY = this.y;
          _2.forEach(this.ports, function(port) {
            _2.forEach(port.getLinks(), function(link) {
              var point = link.getPointForPort(port);
              point.x = point.x + x - oldX;
              point.y = point.y + y - oldY;
            });
          });
          this.x = x;
          this.y = y;
        };
        NodeModel2.prototype.getSelectedEntities = function() {
          var entities = _super.prototype.getSelectedEntities.call(this);
          if (this.isSelected()) {
            _2.forEach(this.ports, function(port) {
              entities = entities.concat(
                _2.map(port.getLinks(), function(link) {
                  return link.getPointForPort(port);
                })
              );
            });
          }
          return entities;
        };
        NodeModel2.prototype.deSerialize = function(ob, engine) {
          var _this = this;
          _super.prototype.deSerialize.call(this, ob, engine);
          this.x = ob.x;
          this.y = ob.y;
          this.extras = ob.extras;
          _2.forEach(ob.ports, function(port) {
            var portOb = engine.getPortFactory(port.type).getNewInstance();
            portOb.deSerialize(port, engine);
            _this.addPort(portOb);
          });
        };
        NodeModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), {
            x: this.x,
            y: this.y,
            extras: this.extras,
            ports: _2.map(this.ports, function(port) {
              return port.serialize();
            })
          });
        };
        NodeModel2.prototype.doClone = function(lookupTable, clone) {
          if (lookupTable === void 0) {
            lookupTable = {};
          }
          clone.ports = {};
          _2.forEach(this.ports, function(port) {
            clone.addPort(port.clone(lookupTable));
          });
        };
        NodeModel2.prototype.remove = function() {
          _super.prototype.remove.call(this);
          _2.forEach(this.ports, function(port) {
            _2.forEach(port.getLinks(), function(link) {
              link.remove();
            });
          });
        };
        NodeModel2.prototype.getPortFromID = function(id) {
          for (var i in this.ports) {
            if (this.ports[i].id === id) {
              return this.ports[i];
            }
          }
          return null;
        };
        NodeModel2.prototype.getPort = function(name) {
          return this.ports[name];
        };
        NodeModel2.prototype.getPorts = function() {
          return this.ports;
        };
        NodeModel2.prototype.removePort = function(port) {
          if (this.ports[port.name]) {
            this.ports[port.name].setParent(null);
            delete this.ports[port.name];
          }
        };
        NodeModel2.prototype.addPort = function(port) {
          port.setParent(this);
          this.ports[port.name] = port;
          return port;
        };
        NodeModel2.prototype.updateDimensions = function(_a) {
          var width = _a.width, height = _a.height;
          this.width = width;
          this.height = height;
        };
        return NodeModel2;
      }(BaseModel_1.BaseModel);
      exports2.NodeModel = NodeModel;
    },
    function(module2, exports2) {
      module2.exports = {
        manhattan: function(dx, dy) {
          return dx + dy;
        },
        euclidean: function(dx, dy) {
          return Math.sqrt(dx * dx + dy * dy);
        },
        octile: function(dx, dy) {
          var F = Math.SQRT2 - 1;
          return dx < dy ? F * dx + dy : F * dy + dx;
        },
        chebyshev: function(dx, dy) {
          return Math.max(dx, dy);
        }
      };
    },
    function(module2, exports2, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseAction = function() {
        function BaseAction2(mouseX, mouseY) {
          this.mouseX = mouseX;
          this.mouseY = mouseY;
          this.ms = new Date().getTime();
        }
        return BaseAction2;
      }();
      exports2.BaseAction = BaseAction;
    },
    function(module2, exports2, __nested_webpack_require_22597__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseModel_1 = __nested_webpack_require_22597__(6);
      var _2 = __webpack_require__(96486);
      var PortModel = function(_super) {
        __extends(PortModel2, _super);
        function PortModel2(name, type, id, maximumLinks) {
          var _this = _super.call(this, type, id) || this;
          _this.name = name;
          _this.links = {};
          _this.maximumLinks = maximumLinks;
          return _this;
        }
        PortModel2.prototype.deSerialize = function(ob, engine) {
          _super.prototype.deSerialize.call(this, ob, engine);
          this.name = ob.name;
          this.maximumLinks = ob.maximumLinks;
        };
        PortModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), {
            name: this.name,
            parentNode: this.parent.id,
            links: _2.map(this.links, function(link) {
              return link.id;
            }),
            maximumLinks: this.maximumLinks
          });
        };
        PortModel2.prototype.doClone = function(lookupTable, clone) {
          if (lookupTable === void 0) {
            lookupTable = {};
          }
          clone.links = {};
          clone.parentNode = this.getParent().clone(lookupTable);
        };
        PortModel2.prototype.getNode = function() {
          return this.getParent();
        };
        PortModel2.prototype.getName = function() {
          return this.name;
        };
        PortModel2.prototype.getMaximumLinks = function() {
          return this.maximumLinks;
        };
        PortModel2.prototype.setMaximumLinks = function(maximumLinks) {
          this.maximumLinks = maximumLinks;
        };
        PortModel2.prototype.removeLink = function(link) {
          delete this.links[link.getID()];
        };
        PortModel2.prototype.addLink = function(link) {
          this.links[link.getID()] = link;
        };
        PortModel2.prototype.getLinks = function() {
          return this.links;
        };
        PortModel2.prototype.createLinkModel = function() {
          if (_2.isFinite(this.maximumLinks)) {
            var numberOfLinks = _2.size(this.links);
            if (this.maximumLinks === 1 && numberOfLinks >= 1) {
              return _2.values(this.links)[0];
            } else if (numberOfLinks >= this.maximumLinks) {
              return null;
            }
          }
          return null;
        };
        PortModel2.prototype.updateCoords = function(_a) {
          var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
        };
        PortModel2.prototype.canLinkToPort = function(port) {
          return true;
        };
        PortModel2.prototype.isLocked = function() {
          return _super.prototype.isLocked.call(this) || this.getParent().isLocked();
        };
        return PortModel2;
      }(BaseModel_1.BaseModel);
      exports2.PortModel = PortModel;
    },
    function(module2, exports2, __nested_webpack_require_26333__) {
      "use strict";
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var Toolkit_1 = __nested_webpack_require_26333__(7);
      var _2 = __webpack_require__(96486);
      var BaseEntity = function() {
        function BaseEntity2(id) {
          this.listeners = {};
          this.id = id || Toolkit_1.Toolkit.UID();
          this.locked = false;
        }
        BaseEntity2.prototype.getID = function() {
          return this.id;
        };
        BaseEntity2.prototype.doClone = function(lookupTable, clone) {
          if (lookupTable === void 0) {
            lookupTable = {};
          }
        };
        BaseEntity2.prototype.clone = function(lookupTable) {
          if (lookupTable === void 0) {
            lookupTable = {};
          }
          if (lookupTable[this.id]) {
            return lookupTable[this.id];
          }
          var clone = _2.clone(this);
          clone.id = Toolkit_1.Toolkit.UID();
          clone.clearListeners();
          lookupTable[this.id] = clone;
          this.doClone(lookupTable, clone);
          return clone;
        };
        BaseEntity2.prototype.clearListeners = function() {
          this.listeners = {};
        };
        BaseEntity2.prototype.deSerialize = function(data, engine) {
          this.id = data.id;
        };
        BaseEntity2.prototype.serialize = function() {
          return { id: this.id };
        };
        BaseEntity2.prototype.iterateListeners = function(cb) {
          var event2 = {
            id: Toolkit_1.Toolkit.UID(),
            firing: true,
            entity: this,
            stopPropagation: function() {
              event2.firing = false;
            }
          };
          for (var i in this.listeners) {
            if (this.listeners.hasOwnProperty(i)) {
              if (!event2.firing) {
                return;
              }
              cb(this.listeners[i], event2);
            }
          }
        };
        BaseEntity2.prototype.removeListener = function(listener) {
          if (this.listeners[listener]) {
            delete this.listeners[listener];
            return true;
          }
          return false;
        };
        BaseEntity2.prototype.addListener = function(listener) {
          var uid = Toolkit_1.Toolkit.UID();
          this.listeners[uid] = listener;
          return uid;
        };
        BaseEntity2.prototype.isLocked = function() {
          return this.locked;
        };
        BaseEntity2.prototype.setLocked = function(locked) {
          if (locked === void 0) {
            locked = true;
          }
          this.locked = locked;
          this.iterateListeners(function(listener, event2) {
            if (listener.lockChanged) {
              listener.lockChanged(__assign({}, event2, { locked }));
            }
          });
        };
        return BaseEntity2;
      }();
      exports2.BaseEntity = BaseEntity;
    },
    function(module2, exports2, __nested_webpack_require_29616__) {
      var Heap = __nested_webpack_require_29616__(15);
      var Util = __nested_webpack_require_29616__(4);
      var Heuristic = __nested_webpack_require_29616__(10);
      var DiagonalMovement = __nested_webpack_require_29616__(2);
      function JumpPointFinderBase(opt) {
        opt = opt || {};
        this.heuristic = opt.heuristic || Heuristic.manhattan;
        this.trackJumpRecursion = opt.trackJumpRecursion || false;
      }
      JumpPointFinderBase.prototype.findPath = function(startX, startY, endX, endY, grid) {
        var openList = this.openList = new Heap(function(nodeA, nodeB) {
          return nodeA.f - nodeB.f;
        }), startNode = this.startNode = grid.getNodeAt(startX, startY), endNode = this.endNode = grid.getNodeAt(endX, endY), node;
        this.grid = grid;
        startNode.g = 0;
        startNode.f = 0;
        openList.push(startNode);
        startNode.opened = true;
        while (!openList.empty()) {
          node = openList.pop();
          node.closed = true;
          if (node === endNode) {
            return Util.expandPath(Util.backtrace(endNode));
          }
          this._identifySuccessors(node);
        }
        return [];
      };
      JumpPointFinderBase.prototype._identifySuccessors = function(node) {
        var grid = this.grid, heuristic = this.heuristic, openList = this.openList, endX = this.endNode.x, endY = this.endNode.y, neighbors, neighbor, jumpPoint, i, l, x = node.x, y = node.y, jx, jy, dx, dy, d, ng, jumpNode, abs = Math.abs, max = Math.max;
        neighbors = this._findNeighbors(node);
        for (i = 0, l = neighbors.length; i < l; ++i) {
          neighbor = neighbors[i];
          jumpPoint = this._jump(neighbor[0], neighbor[1], x, y);
          if (jumpPoint) {
            jx = jumpPoint[0];
            jy = jumpPoint[1];
            jumpNode = grid.getNodeAt(jx, jy);
            if (jumpNode.closed) {
              continue;
            }
            d = Heuristic.octile(abs(jx - x), abs(jy - y));
            ng = node.g + d;
            if (!jumpNode.opened || ng < jumpNode.g) {
              jumpNode.g = ng;
              jumpNode.h = jumpNode.h || heuristic(abs(jx - endX), abs(jy - endY));
              jumpNode.f = jumpNode.g + jumpNode.h;
              jumpNode.parent = node;
              if (!jumpNode.opened) {
                openList.push(jumpNode);
                jumpNode.opened = true;
              } else {
                openList.updateItem(jumpNode);
              }
            }
          }
        }
      };
      module2.exports = JumpPointFinderBase;
    },
    function(module2, exports2, __nested_webpack_require_32217__) {
      module2.exports = __nested_webpack_require_32217__(66);
    },
    function(module2, exports2, __nested_webpack_require_32328__) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var PF = __nested_webpack_require_32328__(68);
      exports2.ROUTING_SCALING_FACTOR = 5;
      var pathFinderInstance = new PF.JumpPointFinder({
        heuristic: PF.Heuristic.manhattan,
        diagonalMovement: PF.DiagonalMovement.Never
      });
      var PathFinding = function() {
        function PathFinding2(diagramEngine) {
          this.instance = pathFinderInstance;
          this.diagramEngine = diagramEngine;
        }
        PathFinding2.prototype.calculateDirectPath = function(from, to) {
          var matrix = this.diagramEngine.getCanvasMatrix();
          var grid = new PF.Grid(matrix);
          return pathFinderInstance.findPath(
            this.diagramEngine.translateRoutingX(Math.floor(from.x / exports2.ROUTING_SCALING_FACTOR)),
            this.diagramEngine.translateRoutingY(Math.floor(from.y / exports2.ROUTING_SCALING_FACTOR)),
            this.diagramEngine.translateRoutingX(Math.floor(to.x / exports2.ROUTING_SCALING_FACTOR)),
            this.diagramEngine.translateRoutingY(Math.floor(to.y / exports2.ROUTING_SCALING_FACTOR)),
            grid
          );
        };
        PathFinding2.prototype.calculateLinkStartEndCoords = function(matrix, path) {
          var startIndex = path.findIndex(function(point) {
            return matrix[point[1]][point[0]] === 0;
          });
          var endIndex = path.length - 1 - path.slice().reverse().findIndex(function(point) {
            return matrix[point[1]][point[0]] === 0;
          });
          if (startIndex === -1 || endIndex === -1) {
            return void 0;
          }
          var pathToStart = path.slice(0, startIndex);
          var pathToEnd = path.slice(endIndex);
          return {
            start: { x: path[startIndex][0], y: path[startIndex][1] },
            end: { x: path[endIndex][0], y: path[endIndex][1] },
            pathToStart,
            pathToEnd
          };
        };
        PathFinding2.prototype.calculateDynamicPath = function(routingMatrix, start, end, pathToStart, pathToEnd) {
          var _this = this;
          var grid = new PF.Grid(routingMatrix);
          var dynamicPath = pathFinderInstance.findPath(start.x, start.y, end.x, end.y, grid);
          var pathCoords = pathToStart.concat(dynamicPath, pathToEnd).map(function(coords) {
            return [_this.diagramEngine.translateRoutingX(coords[0], true), _this.diagramEngine.translateRoutingY(coords[1], true)];
          });
          return PF.Util.compressPath(pathCoords);
        };
        return PathFinding2;
      }();
      exports2.default = PathFinding;
    },
    function(module2, exports2, __nested_webpack_require_35050__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseModel_1 = __nested_webpack_require_35050__(6);
      var _2 = __webpack_require__(96486);
      var LabelModel = function(_super) {
        __extends(LabelModel2, _super);
        function LabelModel2(type, id) {
          var _this = _super.call(this, type, id) || this;
          _this.offsetX = 0;
          _this.offsetY = 0;
          return _this;
        }
        LabelModel2.prototype.deSerialize = function(ob, engine) {
          _super.prototype.deSerialize.call(this, ob, engine);
          this.offsetX = ob.offsetX;
          this.offsetY = ob.offsetY;
        };
        LabelModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), { offsetX: this.offsetX, offsetY: this.offsetY });
        };
        return LabelModel2;
      }(BaseModel_1.BaseModel);
      exports2.LabelModel = LabelModel;
    },
    function(module2, exports2, __nested_webpack_require_36636__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var LabelModel_1 = __nested_webpack_require_36636__(17);
      var _2 = __webpack_require__(96486);
      var DefaultLabelModel = function(_super) {
        __extends(DefaultLabelModel2, _super);
        function DefaultLabelModel2() {
          var _this = _super.call(this, "default") || this;
          _this.offsetY = -23;
          return _this;
        }
        DefaultLabelModel2.prototype.setLabel = function(label) {
          this.label = label;
        };
        DefaultLabelModel2.prototype.deSerialize = function(ob, engine) {
          _super.prototype.deSerialize.call(this, ob, engine);
          this.label = ob.label;
        };
        DefaultLabelModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), { label: this.label });
        };
        return DefaultLabelModel2;
      }(LabelModel_1.LabelModel);
      exports2.DefaultLabelModel = DefaultLabelModel;
    },
    function(module2, exports2, __nested_webpack_require_38287__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var LinkModel_1 = __nested_webpack_require_38287__(21);
      var _2 = __webpack_require__(96486);
      var DefaultLabelModel_1 = __nested_webpack_require_38287__(18);
      var LabelModel_1 = __nested_webpack_require_38287__(17);
      var DefaultLinkModel = function(_super) {
        __extends(DefaultLinkModel2, _super);
        function DefaultLinkModel2(type) {
          if (type === void 0) {
            type = "default";
          }
          var _this = _super.call(this, type) || this;
          _this.color = "rgba(255,255,255,0.5)";
          _this.width = 3;
          _this.curvyness = 50;
          return _this;
        }
        DefaultLinkModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), {
            width: this.width,
            color: this.color,
            curvyness: this.curvyness
          });
        };
        DefaultLinkModel2.prototype.deSerialize = function(ob, engine) {
          _super.prototype.deSerialize.call(this, ob, engine);
          this.color = ob.color;
          this.width = ob.width;
          this.curvyness = ob.curvyness;
        };
        DefaultLinkModel2.prototype.addLabel = function(label) {
          if (label instanceof LabelModel_1.LabelModel) {
            return _super.prototype.addLabel.call(this, label);
          }
          var labelOb = new DefaultLabelModel_1.DefaultLabelModel();
          labelOb.setLabel(label);
          return _super.prototype.addLabel.call(this, labelOb);
        };
        DefaultLinkModel2.prototype.setWidth = function(width) {
          this.width = width;
          this.iterateListeners(function(listener, event2) {
            if (listener.widthChanged) {
              listener.widthChanged(__assign({}, event2, { width }));
            }
          });
        };
        DefaultLinkModel2.prototype.setColor = function(color) {
          this.color = color;
          this.iterateListeners(function(listener, event2) {
            if (listener.colorChanged) {
              listener.colorChanged(__assign({}, event2, { color }));
            }
          });
        };
        return DefaultLinkModel2;
      }(LinkModel_1.LinkModel);
      exports2.DefaultLinkModel = DefaultLinkModel;
    },
    function(module2, exports2, __nested_webpack_require_41553__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var _2 = __webpack_require__(96486);
      var PortModel_1 = __nested_webpack_require_41553__(12);
      var DefaultLinkModel_1 = __nested_webpack_require_41553__(19);
      var DefaultPortModel = function(_super) {
        __extends(DefaultPortModel2, _super);
        function DefaultPortModel2(isInput, name, label, id) {
          if (label === void 0) {
            label = null;
          }
          var _this = _super.call(this, name, "default", id) || this;
          _this.in = isInput;
          _this.label = label || name;
          return _this;
        }
        DefaultPortModel2.prototype.deSerialize = function(object, engine) {
          _super.prototype.deSerialize.call(this, object, engine);
          this.in = object.in;
          this.label = object.label;
        };
        DefaultPortModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), { in: this.in, label: this.label });
        };
        DefaultPortModel2.prototype.link = function(port) {
          var link = this.createLinkModel();
          link.setSourcePort(this);
          link.setTargetPort(port);
          return link;
        };
        DefaultPortModel2.prototype.canLinkToPort = function(port) {
          if (port instanceof DefaultPortModel2) {
            return this.in !== port.in;
          }
          return true;
        };
        DefaultPortModel2.prototype.createLinkModel = function() {
          var link = _super.prototype.createLinkModel.call(this);
          return link || new DefaultLinkModel_1.DefaultLinkModel();
        };
        return DefaultPortModel2;
      }(PortModel_1.PortModel);
      exports2.DefaultPortModel = DefaultPortModel;
    },
    function(module2, exports2, __nested_webpack_require_43971__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseModel_1 = __nested_webpack_require_43971__(6);
      var PointModel_1 = __nested_webpack_require_43971__(5);
      var _2 = __webpack_require__(96486);
      var LinkModel = function(_super) {
        __extends(LinkModel2, _super);
        function LinkModel2(linkType, id) {
          if (linkType === void 0) {
            linkType = "default";
          }
          var _this = _super.call(this, linkType, id) || this;
          _this.points = [
            new PointModel_1.PointModel(_this, { x: 0, y: 0 }),
            new PointModel_1.PointModel(_this, {
              x: 0,
              y: 0
            })
          ];
          _this.extras = {};
          _this.sourcePort = null;
          _this.targetPort = null;
          _this.labels = [];
          return _this;
        }
        LinkModel2.prototype.deSerialize = function(ob, engine) {
          var _this = this;
          _super.prototype.deSerialize.call(this, ob, engine);
          this.extras = ob.extras;
          this.points = _2.map(ob.points || [], function(point) {
            var p = new PointModel_1.PointModel(_this, { x: point.x, y: point.y });
            p.deSerialize(point, engine);
            return p;
          });
          _2.forEach(ob.labels || [], function(label) {
            var labelOb = engine.getLabelFactory(label.type).getNewInstance();
            labelOb.deSerialize(label, engine);
            _this.addLabel(labelOb);
          });
          if (ob.target) {
            this.setTargetPort(this.getParent().getNode(ob.target).getPortFromID(ob.targetPort));
          }
          if (ob.source) {
            this.setSourcePort(this.getParent().getNode(ob.source).getPortFromID(ob.sourcePort));
          }
        };
        LinkModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), {
            source: this.sourcePort ? this.sourcePort.getParent().id : null,
            sourcePort: this.sourcePort ? this.sourcePort.id : null,
            target: this.targetPort ? this.targetPort.getParent().id : null,
            targetPort: this.targetPort ? this.targetPort.id : null,
            points: _2.map(this.points, function(point) {
              return point.serialize();
            }),
            extras: this.extras,
            labels: _2.map(this.labels, function(label) {
              return label.serialize();
            })
          });
        };
        LinkModel2.prototype.doClone = function(lookupTable, clone) {
          if (lookupTable === void 0) {
            lookupTable = {};
          }
          clone.setPoints(
            _2.map(this.getPoints(), function(point) {
              return point.clone(lookupTable);
            })
          );
          if (this.sourcePort) {
            clone.setSourcePort(this.sourcePort.clone(lookupTable));
          }
          if (this.targetPort) {
            clone.setTargetPort(this.targetPort.clone(lookupTable));
          }
        };
        LinkModel2.prototype.remove = function() {
          if (this.sourcePort) {
            this.sourcePort.removeLink(this);
          }
          if (this.targetPort) {
            this.targetPort.removeLink(this);
          }
          _super.prototype.remove.call(this);
        };
        LinkModel2.prototype.isLastPoint = function(point) {
          var index = this.getPointIndex(point);
          return index === this.points.length - 1;
        };
        LinkModel2.prototype.getPointIndex = function(point) {
          return this.points.indexOf(point);
        };
        LinkModel2.prototype.getPointModel = function(id) {
          for (var i = 0; i < this.points.length; i++) {
            if (this.points[i].id === id) {
              return this.points[i];
            }
          }
          return null;
        };
        LinkModel2.prototype.getPortForPoint = function(point) {
          if (this.sourcePort !== null && this.getFirstPoint().getID() === point.getID()) {
            return this.sourcePort;
          }
          if (this.targetPort !== null && this.getLastPoint().getID() === point.getID()) {
            return this.targetPort;
          }
          return null;
        };
        LinkModel2.prototype.getPointForPort = function(port) {
          if (this.sourcePort !== null && this.sourcePort.getID() === port.getID()) {
            return this.getFirstPoint();
          }
          if (this.targetPort !== null && this.targetPort.getID() === port.getID()) {
            return this.getLastPoint();
          }
          return null;
        };
        LinkModel2.prototype.getFirstPoint = function() {
          return this.points[0];
        };
        LinkModel2.prototype.getLastPoint = function() {
          return this.points[this.points.length - 1];
        };
        LinkModel2.prototype.setSourcePort = function(port) {
          if (port !== null) {
            port.addLink(this);
          }
          if (this.sourcePort !== null) {
            this.sourcePort.removeLink(this);
          }
          this.sourcePort = port;
          this.iterateListeners(function(listener, event2) {
            if (listener.sourcePortChanged) {
              listener.sourcePortChanged(__assign({}, event2, { port }));
            }
          });
        };
        LinkModel2.prototype.getSourcePort = function() {
          return this.sourcePort;
        };
        LinkModel2.prototype.getTargetPort = function() {
          return this.targetPort;
        };
        LinkModel2.prototype.setTargetPort = function(port) {
          if (port !== null) {
            port.addLink(this);
          }
          if (this.targetPort !== null) {
            this.targetPort.removeLink(this);
          }
          this.targetPort = port;
          this.iterateListeners(function(listener, event2) {
            if (listener.targetPortChanged) {
              listener.targetPortChanged(__assign({}, event2, { port }));
            }
          });
        };
        LinkModel2.prototype.point = function(x, y) {
          return this.addPoint(this.generatePoint(x, y));
        };
        LinkModel2.prototype.addLabel = function(label) {
          label.setParent(this);
          this.labels.push(label);
        };
        LinkModel2.prototype.getPoints = function() {
          return this.points;
        };
        LinkModel2.prototype.setPoints = function(points) {
          var _this = this;
          _2.forEach(points, function(point) {
            point.setParent(_this);
          });
          this.points = points;
        };
        LinkModel2.prototype.removePoint = function(pointModel) {
          this.points.splice(this.getPointIndex(pointModel), 1);
        };
        LinkModel2.prototype.removePointsBefore = function(pointModel) {
          this.points.splice(0, this.getPointIndex(pointModel));
        };
        LinkModel2.prototype.removePointsAfter = function(pointModel) {
          this.points.splice(this.getPointIndex(pointModel) + 1);
        };
        LinkModel2.prototype.removeMiddlePoints = function() {
          if (this.points.length > 2) {
            this.points.splice(0, this.points.length - 2);
          }
        };
        LinkModel2.prototype.addPoint = function(pointModel, index) {
          if (index === void 0) {
            index = 1;
          }
          pointModel.setParent(this);
          this.points.splice(index, 0, pointModel);
          return pointModel;
        };
        LinkModel2.prototype.generatePoint = function(x, y) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          return new PointModel_1.PointModel(this, { x, y });
        };
        return LinkModel2;
      }(BaseModel_1.BaseModel);
      exports2.LinkModel = LinkModel;
    },
    function(module2, exports2, __nested_webpack_require_52813__) {
      var Heap = __nested_webpack_require_52813__(15);
      var Util = __nested_webpack_require_52813__(4);
      var Heuristic = __nested_webpack_require_52813__(10);
      var DiagonalMovement = __nested_webpack_require_52813__(2);
      function BiAStarFinder(opt) {
        opt = opt || {};
        this.allowDiagonal = opt.allowDiagonal;
        this.dontCrossCorners = opt.dontCrossCorners;
        this.diagonalMovement = opt.diagonalMovement;
        this.heuristic = opt.heuristic || Heuristic.manhattan;
        this.weight = opt.weight || 1;
        if (!this.diagonalMovement) {
          if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
          } else {
            if (this.dontCrossCorners) {
              this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
              this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
          }
        }
        if (this.diagonalMovement === DiagonalMovement.Never) {
          this.heuristic = opt.heuristic || Heuristic.manhattan;
        } else {
          this.heuristic = opt.heuristic || Heuristic.octile;
        }
      }
      BiAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
        var cmp = function(nodeA, nodeB) {
          return nodeA.f - nodeB.f;
        }, startOpenList = new Heap(cmp), endOpenList = new Heap(cmp), startNode = grid.getNodeAt(startX, startY), endNode = grid.getNodeAt(endX, endY), heuristic = this.heuristic, diagonalMovement = this.diagonalMovement, weight = this.weight, abs = Math.abs, SQRT2 = Math.SQRT2, node, neighbors, neighbor, i, l, x, y, ng, BY_START = 1, BY_END = 2;
        startNode.g = 0;
        startNode.f = 0;
        startOpenList.push(startNode);
        startNode.opened = BY_START;
        endNode.g = 0;
        endNode.f = 0;
        endOpenList.push(endNode);
        endNode.opened = BY_END;
        while (!startOpenList.empty() && !endOpenList.empty()) {
          node = startOpenList.pop();
          node.closed = true;
          neighbors = grid.getNeighbors(node, diagonalMovement);
          for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];
            if (neighbor.closed) {
              continue;
            }
            if (neighbor.opened === BY_END) {
              return Util.biBacktrace(node, neighbor);
            }
            x = neighbor.x;
            y = neighbor.y;
            ng = node.g + (x - node.x === 0 || y - node.y === 0 ? 1 : SQRT2);
            if (!neighbor.opened || ng < neighbor.g) {
              neighbor.g = ng;
              neighbor.h = neighbor.h || weight * heuristic(abs(x - endX), abs(y - endY));
              neighbor.f = neighbor.g + neighbor.h;
              neighbor.parent = node;
              if (!neighbor.opened) {
                startOpenList.push(neighbor);
                neighbor.opened = BY_START;
              } else {
                startOpenList.updateItem(neighbor);
              }
            }
          }
          node = endOpenList.pop();
          node.closed = true;
          neighbors = grid.getNeighbors(node, diagonalMovement);
          for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];
            if (neighbor.closed) {
              continue;
            }
            if (neighbor.opened === BY_START) {
              return Util.biBacktrace(neighbor, node);
            }
            x = neighbor.x;
            y = neighbor.y;
            ng = node.g + (x - node.x === 0 || y - node.y === 0 ? 1 : SQRT2);
            if (!neighbor.opened || ng < neighbor.g) {
              neighbor.g = ng;
              neighbor.h = neighbor.h || weight * heuristic(abs(x - startX), abs(y - startY));
              neighbor.f = neighbor.g + neighbor.h;
              neighbor.parent = node;
              if (!neighbor.opened) {
                endOpenList.push(neighbor);
                neighbor.opened = BY_END;
              } else {
                endOpenList.updateItem(neighbor);
              }
            }
          }
        }
        return [];
      };
      module2.exports = BiAStarFinder;
    },
    function(module2, exports2, __nested_webpack_require_57026__) {
      var Heap = __nested_webpack_require_57026__(15);
      var Util = __nested_webpack_require_57026__(4);
      var Heuristic = __nested_webpack_require_57026__(10);
      var DiagonalMovement = __nested_webpack_require_57026__(2);
      function AStarFinder(opt) {
        opt = opt || {};
        this.allowDiagonal = opt.allowDiagonal;
        this.dontCrossCorners = opt.dontCrossCorners;
        this.heuristic = opt.heuristic || Heuristic.manhattan;
        this.weight = opt.weight || 1;
        this.diagonalMovement = opt.diagonalMovement;
        if (!this.diagonalMovement) {
          if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
          } else {
            if (this.dontCrossCorners) {
              this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
              this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
          }
        }
        if (this.diagonalMovement === DiagonalMovement.Never) {
          this.heuristic = opt.heuristic || Heuristic.manhattan;
        } else {
          this.heuristic = opt.heuristic || Heuristic.octile;
        }
      }
      AStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
        var openList = new Heap(function(nodeA, nodeB) {
          return nodeA.f - nodeB.f;
        }), startNode = grid.getNodeAt(startX, startY), endNode = grid.getNodeAt(endX, endY), heuristic = this.heuristic, diagonalMovement = this.diagonalMovement, weight = this.weight, abs = Math.abs, SQRT2 = Math.SQRT2, node, neighbors, neighbor, i, l, x, y, ng;
        startNode.g = 0;
        startNode.f = 0;
        openList.push(startNode);
        startNode.opened = true;
        while (!openList.empty()) {
          node = openList.pop();
          node.closed = true;
          if (node === endNode) {
            return Util.backtrace(endNode);
          }
          neighbors = grid.getNeighbors(node, diagonalMovement);
          for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];
            if (neighbor.closed) {
              continue;
            }
            x = neighbor.x;
            y = neighbor.y;
            ng = node.g + (x - node.x === 0 || y - node.y === 0 ? 1 : SQRT2);
            if (!neighbor.opened || ng < neighbor.g) {
              neighbor.g = ng;
              neighbor.h = neighbor.h || weight * heuristic(abs(x - endX), abs(y - endY));
              neighbor.f = neighbor.g + neighbor.h;
              neighbor.parent = node;
              if (!neighbor.opened) {
                openList.push(neighbor);
                neighbor.opened = true;
              } else {
                openList.updateItem(neighbor);
              }
            }
          }
        }
        return [];
      };
      module2.exports = AStarFinder;
    },
    function(module2, exports2) {
      function Node(x, y, walkable) {
        this.x = x;
        this.y = y;
        this.walkable = walkable === void 0 ? true : walkable;
      }
      module2.exports = Node;
    },
    function(module2, exports2, __nested_webpack_require_60126__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_60126__(1);
      var BaseWidget_1 = __nested_webpack_require_60126__(3);
      var NodeWidget = function(_super) {
        __extends(NodeWidget2, _super);
        function NodeWidget2(props) {
          var _this = _super.call(this, "srd-node", props) || this;
          _this.state = {};
          return _this;
        }
        NodeWidget2.prototype.shouldComponentUpdate = function() {
          return this.props.diagramEngine.canEntityRepaint(this.props.node);
        };
        NodeWidget2.prototype.getClassName = function() {
          return "node " + _super.prototype.getClassName.call(this) + (this.props.node.isSelected() ? this.bem("--selected") : "");
        };
        NodeWidget2.prototype.render = function() {
          return React.createElement(
            "div",
            __assign({}, this.getProps(), {
              "data-nodeid": this.props.node.id,
              style: { top: this.props.node.y, left: this.props.node.x }
            }),
            this.props.children
          );
        };
        return NodeWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.NodeWidget = NodeWidget;
    },
    function(module2, exports2, __nested_webpack_require_62324__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_62324__(1);
      var _2 = __webpack_require__(96486);
      var NodeWidget_1 = __nested_webpack_require_62324__(25);
      var BaseWidget_1 = __nested_webpack_require_62324__(3);
      var NodeLayerWidget = function(_super) {
        __extends(NodeLayerWidget2, _super);
        function NodeLayerWidget2(props) {
          var _this = _super.call(this, "srd-node-layer", props) || this;
          _this.updateNodeDimensions = function() {
            if (!_this.props.diagramEngine.nodesRendered) {
              var diagramModel = _this.props.diagramEngine.getDiagramModel();
              _2.map(diagramModel.getNodes(), function(node) {
                node.updateDimensions(_this.props.diagramEngine.getNodeDimensions(node));
              });
            }
          };
          _this.state = {};
          return _this;
        }
        NodeLayerWidget2.prototype.componentDidUpdate = function() {
          this.updateNodeDimensions();
          this.props.diagramEngine.nodesRendered = true;
        };
        NodeLayerWidget2.prototype.render = function() {
          var _this = this;
          var diagramModel = this.props.diagramEngine.getDiagramModel();
          return React.createElement(
            "div",
            __assign({}, this.getProps(), {
              style: {
                transform: "translate(" + diagramModel.getOffsetX() + "px," + diagramModel.getOffsetY() + "px) scale(" + diagramModel.getZoomLevel() / 100 + ")"
              }
            }),
            _2.map(diagramModel.getNodes(), function(node) {
              return React.createElement(
                NodeWidget_1.NodeWidget,
                {
                  diagramEngine: _this.props.diagramEngine,
                  key: node.id,
                  node
                },
                _this.props.diagramEngine.generateWidgetForNode(node)
              );
            })
          );
        };
        return NodeLayerWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.NodeLayerWidget = NodeLayerWidget;
    },
    function(module2, exports2, __nested_webpack_require_65400__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseWidget_1 = __nested_webpack_require_65400__(3);
      var LinkWidget = function(_super) {
        __extends(LinkWidget2, _super);
        function LinkWidget2(props) {
          var _this = _super.call(this, "srd-link", props) || this;
          _this.state = {};
          return _this;
        }
        LinkWidget2.prototype.shouldComponentUpdate = function() {
          return this.props.diagramEngine.canEntityRepaint(this.props.link);
        };
        LinkWidget2.prototype.render = function() {
          return this.props.children;
        };
        return LinkWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.LinkWidget = LinkWidget;
    },
    function(module2, exports2, __nested_webpack_require_66790__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_66790__(1);
      var LinkWidget_1 = __nested_webpack_require_66790__(27);
      var _2 = __webpack_require__(96486);
      var BaseWidget_1 = __nested_webpack_require_66790__(3);
      var LinkLayerWidget = function(_super) {
        __extends(LinkLayerWidget2, _super);
        function LinkLayerWidget2(props) {
          var _this = _super.call(this, "srd-link-layer", props) || this;
          _this.state = {};
          return _this;
        }
        LinkLayerWidget2.prototype.render = function() {
          var _this = this;
          var diagramModel = this.props.diagramEngine.getDiagramModel();
          return React.createElement(
            "svg",
            __assign({}, this.getProps(), {
              style: {
                transform: "translate(" + diagramModel.getOffsetX() + "px," + diagramModel.getOffsetY() + "px) scale(" + diagramModel.getZoomLevel() / 100 + ")"
              }
            }),
            this.props.diagramEngine.canvas && _2.map(diagramModel.getLinks(), function(link) {
              if (_this.props.diagramEngine.nodesRendered && !_this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id]) {
                if (link.sourcePort !== null) {
                  try {
                    var portCenter = _this.props.diagramEngine.getPortCenter(link.sourcePort);
                    link.points[0].updateLocation(portCenter);
                    var portCoords = _this.props.diagramEngine.getPortCoords(link.sourcePort);
                    link.sourcePort.updateCoords(portCoords);
                    _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id] = true;
                  } catch (ignore) {
                  }
                }
                if (link.targetPort !== null) {
                  try {
                    var portCenter = _this.props.diagramEngine.getPortCenter(link.targetPort);
                    _2.last(link.points).updateLocation(portCenter);
                    var portCoords = _this.props.diagramEngine.getPortCoords(link.targetPort);
                    link.targetPort.updateCoords(portCoords);
                    _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id] = true;
                  } catch (ignore) {
                  }
                }
              }
              var generatedLink = _this.props.diagramEngine.generateWidgetForLink(link);
              if (!generatedLink) {
                throw new Error("no link generated for type: " + link.getType());
              }
              return React.createElement(
                LinkWidget_1.LinkWidget,
                {
                  key: link.getID(),
                  link,
                  diagramEngine: _this.props.diagramEngine
                },
                React.cloneElement(generatedLink, { pointAdded: _this.props.pointAdded })
              );
            })
          );
        };
        return LinkLayerWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.LinkLayerWidget = LinkLayerWidget;
    },
    function(module2, exports2, __nested_webpack_require_70850__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseAction_1 = __nested_webpack_require_70850__(11);
      var SelectingAction = function(_super) {
        __extends(SelectingAction2, _super);
        function SelectingAction2(mouseX, mouseY) {
          var _this = _super.call(this, mouseX, mouseY) || this;
          _this.mouseX2 = mouseX;
          _this.mouseY2 = mouseY;
          return _this;
        }
        SelectingAction2.prototype.getBoxDimensions = function() {
          return {
            left: this.mouseX2 > this.mouseX ? this.mouseX : this.mouseX2,
            top: this.mouseY2 > this.mouseY ? this.mouseY : this.mouseY2,
            width: Math.abs(this.mouseX2 - this.mouseX),
            height: Math.abs(this.mouseY2 - this.mouseY),
            right: this.mouseX2 < this.mouseX ? this.mouseX : this.mouseX2,
            bottom: this.mouseY2 < this.mouseY ? this.mouseY : this.mouseY2
          };
        };
        SelectingAction2.prototype.containsElement = function(x, y, diagramModel) {
          var z = diagramModel.getZoomLevel() / 100;
          var dimensions = this.getBoxDimensions();
          return x * z + diagramModel.getOffsetX() > dimensions.left && x * z + diagramModel.getOffsetX() < dimensions.right && y * z + diagramModel.getOffsetY() > dimensions.top && y * z + diagramModel.getOffsetY() < dimensions.bottom;
        };
        return SelectingAction2;
      }(BaseAction_1.BaseAction);
      exports2.SelectingAction = SelectingAction;
    },
    function(module2, exports2, __nested_webpack_require_73024__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseAction_1 = __nested_webpack_require_73024__(11);
      var MoveItemsAction = function(_super) {
        __extends(MoveItemsAction2, _super);
        function MoveItemsAction2(mouseX, mouseY, diagramEngine) {
          var _this = _super.call(this, mouseX, mouseY) || this;
          _this.moved = false;
          diagramEngine.enableRepaintEntities(diagramEngine.getDiagramModel().getSelectedItems());
          var selectedItems = diagramEngine.getDiagramModel().getSelectedItems();
          selectedItems = selectedItems.filter(function(item) {
            return !diagramEngine.isModelLocked(item);
          });
          _this.selectionModels = selectedItems.map(function(item) {
            return { model: item, initialX: item.x, initialY: item.y };
          });
          return _this;
        }
        return MoveItemsAction2;
      }(BaseAction_1.BaseAction);
      exports2.MoveItemsAction = MoveItemsAction;
    },
    function(module2, exports2, __nested_webpack_require_74682__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseAction_1 = __nested_webpack_require_74682__(11);
      var MoveCanvasAction = function(_super) {
        __extends(MoveCanvasAction2, _super);
        function MoveCanvasAction2(mouseX, mouseY, diagramModel) {
          var _this = _super.call(this, mouseX, mouseY) || this;
          _this.initialOffsetX = diagramModel.getOffsetX();
          _this.initialOffsetY = diagramModel.getOffsetY();
          return _this;
        }
        return MoveCanvasAction2;
      }(BaseAction_1.BaseAction);
      exports2.MoveCanvasAction = MoveCanvasAction;
    },
    function(module2, exports2, __nested_webpack_require_75965__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var AbstractFactory_1 = __nested_webpack_require_75965__(8);
      var AbstractNodeFactory = function(_super) {
        __extends(AbstractNodeFactory2, _super);
        function AbstractNodeFactory2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return AbstractNodeFactory2;
      }(AbstractFactory_1.AbstractFactory);
      exports2.AbstractNodeFactory = AbstractNodeFactory;
    },
    function(module2, exports2, __nested_webpack_require_77118__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_77118__(1);
      var BaseWidget_1 = __nested_webpack_require_77118__(3);
      var PortWidget = function(_super) {
        __extends(PortWidget2, _super);
        function PortWidget2(props) {
          var _this = _super.call(this, "srd-port", props) || this;
          _this.state = { selected: false };
          return _this;
        }
        PortWidget2.prototype.getClassName = function() {
          return "port " + _super.prototype.getClassName.call(this) + (this.state.selected ? this.bem("--selected") : "");
        };
        PortWidget2.prototype.render = function() {
          var _this = this;
          return React.createElement(
            "div",
            __assign({}, this.getProps(), {
              onMouseEnter: function() {
                _this.setState({ selected: true });
              },
              onMouseLeave: function() {
                _this.setState({ selected: false });
              },
              "data-name": this.props.name,
              "data-nodeid": this.props.node.getID()
            })
          );
        };
        return PortWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.PortWidget = PortWidget;
    },
    function(module2, exports2, __nested_webpack_require_79360__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_79360__(1);
      var PortWidget_1 = __nested_webpack_require_79360__(33);
      var BaseWidget_1 = __nested_webpack_require_79360__(3);
      var DefaultPortLabel = function(_super) {
        __extends(DefaultPortLabel2, _super);
        function DefaultPortLabel2(props) {
          return _super.call(this, "srd-default-port", props) || this;
        }
        DefaultPortLabel2.prototype.getClassName = function() {
          return _super.prototype.getClassName.call(this) + (this.props.model.in ? this.bem("--in") : this.bem("--out"));
        };
        DefaultPortLabel2.prototype.render = function() {
          var port = React.createElement(PortWidget_1.PortWidget, {
            node: this.props.model.getParent(),
            name: this.props.model.name
          });
          var label = React.createElement("div", { className: "name" }, this.props.model.label);
          return React.createElement("div", __assign({}, this.getProps()), this.props.model.in ? port : label, this.props.model.in ? label : port);
        };
        return DefaultPortLabel2;
      }(BaseWidget_1.BaseWidget);
      exports2.DefaultPortLabel = DefaultPortLabel;
    },
    function(module2, exports2, __nested_webpack_require_81573__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_81573__(1);
      var _2 = __webpack_require__(96486);
      var DefaultPortLabelWidget_1 = __nested_webpack_require_81573__(34);
      var BaseWidget_1 = __nested_webpack_require_81573__(3);
      var DefaultNodeWidget = function(_super) {
        __extends(DefaultNodeWidget2, _super);
        function DefaultNodeWidget2(props) {
          var _this = _super.call(this, "srd-default-node", props) || this;
          _this.state = {};
          return _this;
        }
        DefaultNodeWidget2.prototype.generatePort = function(port) {
          return React.createElement(DefaultPortLabelWidget_1.DefaultPortLabel, { model: port, key: port.id });
        };
        DefaultNodeWidget2.prototype.render = function() {
          return React.createElement(
            "div",
            __assign({}, this.getProps(), { style: { background: this.props.node.color } }),
            React.createElement("div", { className: this.bem("__title") }, React.createElement("div", { className: this.bem("__name") }, this.props.node.name)),
            React.createElement(
              "div",
              { className: this.bem("__ports") },
              React.createElement("div", { className: this.bem("__in") }, _2.map(this.props.node.getInPorts(), this.generatePort.bind(this))),
              React.createElement("div", { className: this.bem("__out") }, _2.map(this.props.node.getOutPorts(), this.generatePort.bind(this)))
            )
          );
        };
        return DefaultNodeWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.DefaultNodeWidget = DefaultNodeWidget;
    },
    function(module2, exports2, __nested_webpack_require_84205__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var AbstractFactory_1 = __nested_webpack_require_84205__(8);
      var AbstractLinkFactory = function(_super) {
        __extends(AbstractLinkFactory2, _super);
        function AbstractLinkFactory2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return AbstractLinkFactory2;
      }(AbstractFactory_1.AbstractFactory);
      exports2.AbstractLinkFactory = AbstractLinkFactory;
    },
    function(module2, exports2, __nested_webpack_require_85358__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_85358__(1);
      var PointModel_1 = __nested_webpack_require_85358__(5);
      var Toolkit_1 = __nested_webpack_require_85358__(7);
      var PathFinding_1 = __nested_webpack_require_85358__(16);
      var _2 = __webpack_require__(96486);
      var BaseWidget_1 = __nested_webpack_require_85358__(3);
      var DefaultLinkWidget = function(_super) {
        __extends(DefaultLinkWidget2, _super);
        function DefaultLinkWidget2(props) {
          var _this = _super.call(this, "srd-default-link", props) || this;
          _this.addPointToLink = function(event2, index) {
            if (!event2.shiftKey && !_this.props.diagramEngine.isModelLocked(_this.props.link) && _this.props.link.points.length - 1 <= _this.props.diagramEngine.getMaxNumberPointsPerLink()) {
              var point = new PointModel_1.PointModel(_this.props.link, _this.props.diagramEngine.getRelativeMousePoint(event2));
              point.setSelected(true);
              _this.forceUpdate();
              _this.props.link.addPoint(point, index);
              _this.props.pointAdded(point, event2);
            }
          };
          _this.findPathAndRelativePositionToRenderLabel = function(index) {
            var lengths = _this.refPaths.map(function(path) {
              return path.getTotalLength();
            });
            var labelPosition = lengths.reduce(function(previousValue, currentValue) {
              return previousValue + currentValue;
            }, 0) * (index / (_this.props.link.labels.length + 1));
            var pathIndex = 0;
            while (pathIndex < _this.refPaths.length) {
              if (labelPosition - lengths[pathIndex] < 0) {
                return { path: _this.refPaths[pathIndex], position: labelPosition };
              }
              labelPosition -= lengths[pathIndex];
              pathIndex++;
            }
          };
          _this.calculateLabelPosition = function(label, index) {
            if (!_this.refLabels[label.id]) {
              return;
            }
            var _a = _this.findPathAndRelativePositionToRenderLabel(index), path = _a.path, position = _a.position;
            var labelDimensions = {
              width: _this.refLabels[label.id].offsetWidth,
              height: _this.refLabels[label.id].offsetHeight
            };
            var pathCentre = path.getPointAtLength(position);
            var labelCoordinates = {
              x: pathCentre.x - labelDimensions.width / 2 + label.offsetX,
              y: pathCentre.y - labelDimensions.height / 2 + label.offsetY
            };
            _this.refLabels[label.id].setAttribute("style", "transform: translate(" + labelCoordinates.x + "px, " + labelCoordinates.y + "px);");
          };
          _this.refLabels = {};
          _this.refPaths = [];
          _this.state = { selected: false };
          if (props.diagramEngine.isSmartRoutingEnabled()) {
            _this.pathFinding = new PathFinding_1.default(_this.props.diagramEngine);
          }
          return _this;
        }
        DefaultLinkWidget2.prototype.calculateAllLabelPosition = function() {
          var _this = this;
          _2.forEach(this.props.link.labels, function(label, index) {
            _this.calculateLabelPosition(label, index + 1);
          });
        };
        DefaultLinkWidget2.prototype.componentDidUpdate = function() {
          if (this.props.link.labels.length > 0) {
            window.requestAnimationFrame(this.calculateAllLabelPosition.bind(this));
          }
        };
        DefaultLinkWidget2.prototype.componentDidMount = function() {
          if (this.props.link.labels.length > 0) {
            window.requestAnimationFrame(this.calculateAllLabelPosition.bind(this));
          }
        };
        DefaultLinkWidget2.prototype.generatePoint = function(pointIndex) {
          var _this = this;
          var x = this.props.link.points[pointIndex].x;
          var y = this.props.link.points[pointIndex].y;
          return React.createElement(
            "g",
            { key: "point-" + this.props.link.points[pointIndex].id },
            React.createElement("circle", {
              cx: x,
              cy: y,
              r: 5,
              className: "point " + this.bem("__point") + (this.props.link.points[pointIndex].isSelected() ? this.bem("--point-selected") : "")
            }),
            React.createElement("circle", {
              onMouseLeave: function() {
                _this.setState({ selected: false });
              },
              onMouseEnter: function() {
                _this.setState({ selected: true });
              },
              "data-id": this.props.link.points[pointIndex].id,
              "data-linkid": this.props.link.id,
              cx: x,
              cy: y,
              r: 15,
              opacity: 0,
              className: "point " + this.bem("__point")
            })
          );
        };
        DefaultLinkWidget2.prototype.generateLabel = function(label) {
          var _this = this;
          var canvas = this.props.diagramEngine.canvas;
          return React.createElement(
            "foreignObject",
            {
              key: label.id,
              className: this.bem("__label"),
              width: canvas.offsetWidth,
              height: canvas.offsetHeight
            },
            React.createElement(
              "div",
              {
                ref: function(ref) {
                  return _this.refLabels[label.id] = ref;
                }
              },
              this.props.diagramEngine.getFactoryForLabel(label).generateReactWidget(this.props.diagramEngine, label)
            )
          );
        };
        DefaultLinkWidget2.prototype.generateLink = function(path, extraProps, id) {
          var _this = this;
          var props = this.props;
          var Bottom = React.cloneElement(
            props.diagramEngine.getFactoryForLink(this.props.link).generateLinkSegment(this.props.link, this, this.state.selected || this.props.link.isSelected(), path),
            {
              ref: function(ref) {
                return ref && _this.refPaths.push(ref);
              }
            }
          );
          var Top = React.cloneElement(
            Bottom,
            __assign({}, extraProps, {
              strokeLinecap: "round",
              onMouseLeave: function() {
                _this.setState({ selected: false });
              },
              onMouseEnter: function() {
                _this.setState({ selected: true });
              },
              ref: null,
              "data-linkid": this.props.link.getID(),
              strokeOpacity: this.state.selected ? 0.1 : 0,
              strokeWidth: 20,
              onContextMenu: function() {
                if (!_this.props.diagramEngine.isModelLocked(_this.props.link)) {
                  event.preventDefault();
                  _this.props.link.remove();
                }
              }
            })
          );
          return React.createElement("g", { key: "link-" + id }, Bottom, Top);
        };
        DefaultLinkWidget2.prototype.isSmartRoutingApplicable = function() {
          var _a = this.props, diagramEngine = _a.diagramEngine, link = _a.link;
          if (!diagramEngine.isSmartRoutingEnabled()) {
            return false;
          }
          if (link.points.length !== 2) {
            return false;
          }
          if (link.sourcePort === null || link.targetPort === null) {
            return false;
          }
          return true;
        };
        DefaultLinkWidget2.prototype.render = function() {
          var _this = this;
          var diagramEngine = this.props.diagramEngine;
          if (!diagramEngine.nodesRendered) {
            return null;
          }
          var points = this.props.link.points;
          var paths = [];
          if (this.isSmartRoutingApplicable()) {
            var directPathCoords = this.pathFinding.calculateDirectPath(_2.first(points), _2.last(points));
            var routingMatrix = diagramEngine.getRoutingMatrix();
            var smartLink = this.pathFinding.calculateLinkStartEndCoords(routingMatrix, directPathCoords);
            if (smartLink) {
              var start = smartLink.start, end = smartLink.end, pathToStart = smartLink.pathToStart, pathToEnd = smartLink.pathToEnd;
              var simplifiedPath = this.pathFinding.calculateDynamicPath(routingMatrix, start, end, pathToStart, pathToEnd);
              paths.push(
                this.generateLink(
                  Toolkit_1.Toolkit.generateDynamicPath(simplifiedPath),
                  {
                    onMouseDown: function(event2) {
                      _this.addPointToLink(event2, 1);
                    }
                  },
                  "0"
                )
              );
            }
          }
          if (paths.length === 0) {
            if (points.length === 2) {
              var isHorizontal = Math.abs(points[0].x - points[1].x) > Math.abs(points[0].y - points[1].y);
              var xOrY = isHorizontal ? "x" : "y";
              var margin = 50;
              if (Math.abs(points[0][xOrY] - points[1][xOrY]) < 50) {
                margin = 5;
              }
              var pointLeft = points[0];
              var pointRight = points[1];
              if (pointLeft[xOrY] > pointRight[xOrY]) {
                pointLeft = points[1];
                pointRight = points[0];
              }
              paths.push(
                this.generateLink(
                  Toolkit_1.Toolkit.generateCurvePath(pointLeft, pointRight, this.props.link.curvyness),
                  {
                    onMouseDown: function(event2) {
                      _this.addPointToLink(event2, 1);
                    }
                  },
                  "0"
                )
              );
              if (this.props.link.targetPort === null) {
                paths.push(this.generatePoint(1));
              }
            } else {
              var _loop_1 = function(j2) {
                paths.push(
                  this_1.generateLink(
                    Toolkit_1.Toolkit.generateLinePath(points[j2], points[j2 + 1]),
                    {
                      "data-linkid": this_1.props.link.id,
                      "data-point": j2,
                      onMouseDown: function(event2) {
                        _this.addPointToLink(event2, j2 + 1);
                      }
                    },
                    j2
                  )
                );
              };
              var this_1 = this;
              for (var j = 0; j < points.length - 1; j++) {
                _loop_1(j);
              }
              for (var i = 1; i < points.length - 1; i++) {
                paths.push(this.generatePoint(i));
              }
              if (this.props.link.targetPort === null) {
                paths.push(this.generatePoint(points.length - 1));
              }
            }
          }
          this.refPaths = [];
          return React.createElement(
            "g",
            __assign({}, this.getProps()),
            paths,
            _2.map(this.props.link.labels, function(labelModel) {
              return _this.generateLabel(labelModel);
            })
          );
        };
        DefaultLinkWidget2.defaultProps = {
          color: "black",
          width: 3,
          link: null,
          engine: null,
          smooth: false,
          diagramEngine: null
        };
        return DefaultLinkWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.DefaultLinkWidget = DefaultLinkWidget;
    },
    function(module2, exports2, __nested_webpack_require_98008__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var DefaultPortModel_1 = __nested_webpack_require_98008__(20);
      var _2 = __webpack_require__(96486);
      var NodeModel_1 = __nested_webpack_require_98008__(9);
      var Toolkit_1 = __nested_webpack_require_98008__(7);
      var DefaultNodeModel = function(_super) {
        __extends(DefaultNodeModel2, _super);
        function DefaultNodeModel2(name, color) {
          if (name === void 0) {
            name = "Untitled";
          }
          if (color === void 0) {
            color = "rgb(0,192,255)";
          }
          var _this = _super.call(this, "default") || this;
          _this.name = name;
          _this.color = color;
          return _this;
        }
        DefaultNodeModel2.prototype.addInPort = function(label) {
          return this.addPort(new DefaultPortModel_1.DefaultPortModel(true, Toolkit_1.Toolkit.UID(), label));
        };
        DefaultNodeModel2.prototype.addOutPort = function(label) {
          return this.addPort(new DefaultPortModel_1.DefaultPortModel(false, Toolkit_1.Toolkit.UID(), label));
        };
        DefaultNodeModel2.prototype.deSerialize = function(object, engine) {
          _super.prototype.deSerialize.call(this, object, engine);
          this.name = object.name;
          this.color = object.color;
        };
        DefaultNodeModel2.prototype.serialize = function() {
          return _2.merge(_super.prototype.serialize.call(this), { name: this.name, color: this.color });
        };
        DefaultNodeModel2.prototype.getInPorts = function() {
          return _2.filter(this.ports, function(portModel) {
            return portModel.in;
          });
        };
        DefaultNodeModel2.prototype.getOutPorts = function() {
          return _2.filter(this.ports, function(portModel) {
            return !portModel.in;
          });
        };
        return DefaultNodeModel2;
      }(NodeModel_1.NodeModel);
      exports2.DefaultNodeModel = DefaultNodeModel;
    },
    function(module2, exports2, __nested_webpack_require_100646__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_100646__(1);
      var BaseWidget_1 = __nested_webpack_require_100646__(3);
      var DefaultLabelWidget = function(_super) {
        __extends(DefaultLabelWidget2, _super);
        function DefaultLabelWidget2(props) {
          return _super.call(this, "srd-default-label", props) || this;
        }
        DefaultLabelWidget2.prototype.render = function() {
          return React.createElement("div", __assign({}, this.getProps()), this.props.model.label);
        };
        return DefaultLabelWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.DefaultLabelWidget = DefaultLabelWidget;
    },
    function(module2, exports2, __nested_webpack_require_102312__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var AbstractFactory_1 = __nested_webpack_require_102312__(8);
      var AbstractLabelFactory = function(_super) {
        __extends(AbstractLabelFactory2, _super);
        function AbstractLabelFactory2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return AbstractLabelFactory2;
      }(AbstractFactory_1.AbstractFactory);
      exports2.AbstractLabelFactory = AbstractLabelFactory;
    },
    function(module2, exports2, __nested_webpack_require_103471__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_103471__(1);
      var AbstractLabelFactory_1 = __nested_webpack_require_103471__(40);
      var DefaultLabelModel_1 = __nested_webpack_require_103471__(18);
      var DefaultLabelWidget_1 = __nested_webpack_require_103471__(39);
      var DefaultLabelFactory = function(_super) {
        __extends(DefaultLabelFactory2, _super);
        function DefaultLabelFactory2() {
          return _super.call(this, "default") || this;
        }
        DefaultLabelFactory2.prototype.generateReactWidget = function(diagramEngine, label) {
          return React.createElement(DefaultLabelWidget_1.DefaultLabelWidget, { model: label });
        };
        DefaultLabelFactory2.prototype.getNewInstance = function(initialConfig) {
          return new DefaultLabelModel_1.DefaultLabelModel();
        };
        return DefaultLabelFactory2;
      }(AbstractLabelFactory_1.AbstractLabelFactory);
      exports2.DefaultLabelFactory = DefaultLabelFactory;
    },
    function(module2, exports2, __nested_webpack_require_105134__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var AbstractFactory_1 = __nested_webpack_require_105134__(8);
      var AbstractPortFactory = function(_super) {
        __extends(AbstractPortFactory2, _super);
        function AbstractPortFactory2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return AbstractPortFactory2;
      }(AbstractFactory_1.AbstractFactory);
      exports2.AbstractPortFactory = AbstractPortFactory;
    },
    function(module2, exports2, __nested_webpack_require_106287__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var DefaultPortModel_1 = __nested_webpack_require_106287__(20);
      var AbstractPortFactory_1 = __nested_webpack_require_106287__(42);
      var DefaultPortFactory = function(_super) {
        __extends(DefaultPortFactory2, _super);
        function DefaultPortFactory2() {
          return _super.call(this, "default") || this;
        }
        DefaultPortFactory2.prototype.getNewInstance = function(initialConfig) {
          return new DefaultPortModel_1.DefaultPortModel(true, "unknown");
        };
        return DefaultPortFactory2;
      }(AbstractPortFactory_1.AbstractPortFactory);
      exports2.DefaultPortFactory = DefaultPortFactory;
    },
    function(module2, exports2, __nested_webpack_require_107650__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseEntity_1 = __nested_webpack_require_107650__(13);
      var _2 = __webpack_require__(96486);
      var LinkModel_1 = __nested_webpack_require_107650__(21);
      var NodeModel_1 = __nested_webpack_require_107650__(9);
      var PortModel_1 = __nested_webpack_require_107650__(12);
      var PointModel_1 = __nested_webpack_require_107650__(5);
      var DiagramModel = function(_super) {
        __extends(DiagramModel2, _super);
        function DiagramModel2() {
          var _this = _super.call(this) || this;
          _this.links = {};
          _this.nodes = {};
          _this.offsetX = 0;
          _this.offsetY = 0;
          _this.zoom = 100;
          _this.rendered = false;
          _this.gridSize = 0;
          return _this;
        }
        DiagramModel2.prototype.setGridSize = function(size) {
          if (size === void 0) {
            size = 0;
          }
          this.gridSize = size;
          this.iterateListeners(function(listener, event2) {
            if (listener.gridUpdated) {
              listener.gridUpdated(__assign({}, event2, { size }));
            }
          });
        };
        DiagramModel2.prototype.getGridPosition = function(pos) {
          if (this.gridSize === 0) {
            return pos;
          }
          return this.gridSize * Math.floor((pos + this.gridSize / 2) / this.gridSize);
        };
        DiagramModel2.prototype.deSerializeDiagram = function(object, diagramEngine) {
          var _this = this;
          this.deSerialize(object, diagramEngine);
          this.offsetX = object.offsetX;
          this.offsetY = object.offsetY;
          this.zoom = object.zoom;
          this.gridSize = object.gridSize;
          _2.forEach(object.nodes, function(node) {
            var nodeOb = diagramEngine.getNodeFactory(node.type).getNewInstance(node);
            nodeOb.setParent(_this);
            nodeOb.deSerialize(node, diagramEngine);
            _this.addNode(nodeOb);
          });
          _2.forEach(object.links, function(link) {
            var linkOb = diagramEngine.getLinkFactory(link.type).getNewInstance();
            linkOb.setParent(_this);
            linkOb.deSerialize(link, diagramEngine);
            _this.addLink(linkOb);
          });
        };
        DiagramModel2.prototype.serializeDiagram = function() {
          return _2.merge(this.serialize(), {
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            zoom: this.zoom,
            gridSize: this.gridSize,
            links: _2.map(this.links, function(link) {
              return link.serialize();
            }),
            nodes: _2.map(this.nodes, function(node) {
              return node.serialize();
            })
          });
        };
        DiagramModel2.prototype.clearSelection = function(ignore) {
          if (ignore === void 0) {
            ignore = null;
          }
          _2.forEach(this.getSelectedItems(), function(element) {
            if (ignore && ignore.getID() === element.getID()) {
              return;
            }
            element.setSelected(false);
          });
        };
        DiagramModel2.prototype.getSelectedItems = function() {
          var filters = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            filters[_i] = arguments[_i];
          }
          if (!Array.isArray(filters)) {
            filters = [filters];
          }
          var items = [];
          items = items.concat(
            _2.flatMap(this.nodes, function(node) {
              return node.getSelectedEntities();
            })
          );
          items = items.concat(
            _2.flatMap(this.links, function(link) {
              return link.getSelectedEntities();
            })
          );
          items = items.concat(
            _2.flatMap(this.links, function(link) {
              return _2.flatMap(link.points, function(point) {
                return point.getSelectedEntities();
              });
            })
          );
          items = _2.uniq(items);
          if (filters.length > 0) {
            items = _2.filter(_2.uniq(items), function(item) {
              if (_2.includes(filters, "node") && item instanceof NodeModel_1.NodeModel) {
                return true;
              }
              if (_2.includes(filters, "link") && item instanceof LinkModel_1.LinkModel) {
                return true;
              }
              if (_2.includes(filters, "port") && item instanceof PortModel_1.PortModel) {
                return true;
              }
              if (_2.includes(filters, "point") && item instanceof PointModel_1.PointModel) {
                return true;
              }
              return false;
            });
          }
          return items;
        };
        DiagramModel2.prototype.setZoomLevel = function(zoom) {
          this.zoom = zoom;
          this.iterateListeners(function(listener, event2) {
            if (listener.zoomUpdated) {
              listener.zoomUpdated(__assign({}, event2, { zoom }));
            }
          });
        };
        DiagramModel2.prototype.setOffset = function(offsetX, offsetY) {
          this.offsetX = offsetX;
          this.offsetY = offsetY;
          this.iterateListeners(function(listener, event2) {
            if (listener.offsetUpdated) {
              listener.offsetUpdated(__assign({}, event2, { offsetX, offsetY }));
            }
          });
        };
        DiagramModel2.prototype.setOffsetX = function(offsetX) {
          var _this = this;
          this.offsetX = offsetX;
          this.iterateListeners(function(listener, event2) {
            if (listener.offsetUpdated) {
              listener.offsetUpdated(__assign({}, event2, { offsetX, offsetY: _this.offsetY }));
            }
          });
        };
        DiagramModel2.prototype.setOffsetY = function(offsetY) {
          var _this = this;
          this.offsetY = offsetY;
          this.iterateListeners(function(listener, event2) {
            if (listener.offsetUpdated) {
              listener.offsetUpdated(__assign({}, event2, { offsetX: _this.offsetX, offsetY: _this.offsetY }));
            }
          });
        };
        DiagramModel2.prototype.getOffsetY = function() {
          return this.offsetY;
        };
        DiagramModel2.prototype.getOffsetX = function() {
          return this.offsetX;
        };
        DiagramModel2.prototype.getZoomLevel = function() {
          return this.zoom;
        };
        DiagramModel2.prototype.getNode = function(node) {
          if (node instanceof NodeModel_1.NodeModel) {
            return node;
          }
          if (!this.nodes[node]) {
            return null;
          }
          return this.nodes[node];
        };
        DiagramModel2.prototype.getLink = function(link) {
          if (link instanceof LinkModel_1.LinkModel) {
            return link;
          }
          if (!this.links[link]) {
            return null;
          }
          return this.links[link];
        };
        DiagramModel2.prototype.addAll = function() {
          var _this = this;
          var models = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            models[_i] = arguments[_i];
          }
          _2.forEach(models, function(model) {
            if (model instanceof LinkModel_1.LinkModel) {
              _this.addLink(model);
            } else if (model instanceof NodeModel_1.NodeModel) {
              _this.addNode(model);
            }
          });
          return models;
        };
        DiagramModel2.prototype.addLink = function(link) {
          var _this = this;
          link.addListener({
            entityRemoved: function() {
              _this.removeLink(link);
            }
          });
          this.links[link.getID()] = link;
          this.iterateListeners(function(listener, event2) {
            if (listener.linksUpdated) {
              listener.linksUpdated(__assign({}, event2, { link, isCreated: true }));
            }
          });
          return link;
        };
        DiagramModel2.prototype.addNode = function(node) {
          var _this = this;
          node.addListener({
            entityRemoved: function() {
              _this.removeNode(node);
            }
          });
          this.nodes[node.getID()] = node;
          this.iterateListeners(function(listener, event2) {
            if (listener.nodesUpdated) {
              listener.nodesUpdated(__assign({}, event2, { node, isCreated: true }));
            }
          });
          return node;
        };
        DiagramModel2.prototype.removeLink = function(link) {
          link = this.getLink(link);
          delete this.links[link.getID()];
          this.iterateListeners(function(listener, event2) {
            if (listener.linksUpdated) {
              listener.linksUpdated(__assign({}, event2, { link, isCreated: false }));
            }
          });
        };
        DiagramModel2.prototype.removeNode = function(node) {
          node = this.getNode(node);
          delete this.nodes[node.getID()];
          this.iterateListeners(function(listener, event2) {
            if (listener.nodesUpdated) {
              listener.nodesUpdated(__assign({}, event2, { node, isCreated: false }));
            }
          });
        };
        DiagramModel2.prototype.getLinks = function() {
          return this.links;
        };
        DiagramModel2.prototype.getNodes = function() {
          return this.nodes;
        };
        return DiagramModel2;
      }(BaseEntity_1.BaseEntity);
      exports2.DiagramModel = DiagramModel;
    },
    function(module2, exports2, __nested_webpack_require_118248__) {
      "use strict";
      function __export(m) {
        for (var p in m)
          if (!exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      }
      Object.defineProperty(exports2, "__esModule", { value: true });
      __export(__nested_webpack_require_118248__(7));
      __export(__nested_webpack_require_118248__(13));
      __export(__nested_webpack_require_118248__(49));
      __export(__nested_webpack_require_118248__(38));
      __export(__nested_webpack_require_118248__(20));
      __export(__nested_webpack_require_118248__(19));
      __export(__nested_webpack_require_118248__(18));
      __export(__nested_webpack_require_118248__(48));
      __export(__nested_webpack_require_118248__(47));
      __export(__nested_webpack_require_118248__(43));
      __export(__nested_webpack_require_118248__(41));
      __export(__nested_webpack_require_118248__(37));
      __export(__nested_webpack_require_118248__(39));
      __export(__nested_webpack_require_118248__(35));
      __export(__nested_webpack_require_118248__(34));
      __export(__nested_webpack_require_118248__(8));
      __export(__nested_webpack_require_118248__(40));
      __export(__nested_webpack_require_118248__(36));
      __export(__nested_webpack_require_118248__(32));
      __export(__nested_webpack_require_118248__(42));
      __export(__nested_webpack_require_118248__(16));
      __export(__nested_webpack_require_118248__(11));
      __export(__nested_webpack_require_118248__(31));
      __export(__nested_webpack_require_118248__(30));
      __export(__nested_webpack_require_118248__(29));
      __export(__nested_webpack_require_118248__(6));
      __export(__nested_webpack_require_118248__(44));
      __export(__nested_webpack_require_118248__(21));
      __export(__nested_webpack_require_118248__(9));
      __export(__nested_webpack_require_118248__(5));
      __export(__nested_webpack_require_118248__(12));
      __export(__nested_webpack_require_118248__(17));
      __export(__nested_webpack_require_118248__(46));
      __export(__nested_webpack_require_118248__(27));
      __export(__nested_webpack_require_118248__(25));
      __export(__nested_webpack_require_118248__(33));
      __export(__nested_webpack_require_118248__(3));
      __export(__nested_webpack_require_118248__(28));
      __export(__nested_webpack_require_118248__(26));
    },
    function(module2, exports2, __nested_webpack_require_120130__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_120130__(1);
      var _2 = __webpack_require__(96486);
      var LinkLayerWidget_1 = __nested_webpack_require_120130__(28);
      var NodeLayerWidget_1 = __nested_webpack_require_120130__(26);
      var Toolkit_1 = __nested_webpack_require_120130__(7);
      var MoveCanvasAction_1 = __nested_webpack_require_120130__(31);
      var MoveItemsAction_1 = __nested_webpack_require_120130__(30);
      var SelectingAction_1 = __nested_webpack_require_120130__(29);
      var NodeModel_1 = __nested_webpack_require_120130__(9);
      var PointModel_1 = __nested_webpack_require_120130__(5);
      var PortModel_1 = __nested_webpack_require_120130__(12);
      var BaseWidget_1 = __nested_webpack_require_120130__(3);
      var DiagramWidget = function(_super) {
        __extends(DiagramWidget2, _super);
        function DiagramWidget2(props) {
          var _this = _super.call(this, "srd-diagram", props) || this;
          _this.onKeyUpPointer = null;
          _this.onMouseMove = _this.onMouseMove.bind(_this);
          _this.onMouseUp = _this.onMouseUp.bind(_this);
          _this.state = {
            action: null,
            wasMoved: false,
            renderedNodes: false,
            windowListener: null,
            diagramEngineListener: null,
            document: null
          };
          return _this;
        }
        DiagramWidget2.prototype.componentWillUnmount = function() {
          this.props.diagramEngine.removeListener(this.state.diagramEngineListener);
          this.props.diagramEngine.setCanvas(null);
          window.removeEventListener("keyup", this.onKeyUpPointer);
          window.removeEventListener("mouseUp", this.onMouseUp);
          window.removeEventListener("mouseMove", this.onMouseMove);
        };
        DiagramWidget2.prototype.componentWillReceiveProps = function(nextProps) {
          var _this = this;
          if (this.props.diagramEngine !== nextProps.diagramEngine) {
            this.props.diagramEngine.removeListener(this.state.diagramEngineListener);
            var diagramEngineListener = nextProps.diagramEngine.addListener({
              repaintCanvas: function() {
                return _this.forceUpdate();
              }
            });
            this.setState({ diagramEngineListener });
          }
        };
        DiagramWidget2.prototype.componentWillUpdate = function(nextProps) {
          if (this.props.diagramEngine.diagramModel.id !== nextProps.diagramEngine.diagramModel.id) {
            this.setState({ renderedNodes: false });
            nextProps.diagramEngine.diagramModel.rendered = true;
          }
          if (!nextProps.diagramEngine.diagramModel.rendered) {
            this.setState({ renderedNodes: false });
            nextProps.diagramEngine.diagramModel.rendered = true;
          }
        };
        DiagramWidget2.prototype.componentDidUpdate = function() {
          if (!this.state.renderedNodes) {
            this.setState({ renderedNodes: true });
          }
        };
        DiagramWidget2.prototype.componentDidMount = function() {
          var _this = this;
          this.onKeyUpPointer = this.onKeyUp.bind(this);
          this.setState({
            document,
            renderedNodes: true,
            diagramEngineListener: this.props.diagramEngine.addListener({
              repaintCanvas: function() {
                _this.forceUpdate();
              }
            })
          });
          window.addEventListener("keyup", this.onKeyUpPointer, false);
          if (true) {
            window.focus();
          }
        };
        DiagramWidget2.prototype.getMouseElement = function(event2) {
          var target = event2.target;
          var diagramModel = this.props.diagramEngine.diagramModel;
          var element = Toolkit_1.Toolkit.closest(target, ".port[data-name]");
          if (element) {
            var nodeElement = Toolkit_1.Toolkit.closest(target, ".node[data-nodeid]");
            return {
              model: diagramModel.getNode(nodeElement.getAttribute("data-nodeid")).getPort(element.getAttribute("data-name")),
              element
            };
          }
          element = Toolkit_1.Toolkit.closest(target, ".point[data-id]");
          if (element) {
            return {
              model: diagramModel.getLink(element.getAttribute("data-linkid")).getPointModel(element.getAttribute("data-id")),
              element
            };
          }
          element = Toolkit_1.Toolkit.closest(target, "[data-linkid]");
          if (element) {
            return { model: diagramModel.getLink(element.getAttribute("data-linkid")), element };
          }
          element = Toolkit_1.Toolkit.closest(target, ".node[data-nodeid]");
          if (element) {
            return { model: diagramModel.getNode(element.getAttribute("data-nodeid")), element };
          }
          return null;
        };
        DiagramWidget2.prototype.fireAction = function() {
          if (this.state.action && this.props.actionStillFiring) {
            this.props.actionStillFiring(this.state.action);
          }
        };
        DiagramWidget2.prototype.stopFiringAction = function(shouldSkipEvent) {
          if (this.props.actionStoppedFiring && !shouldSkipEvent) {
            this.props.actionStoppedFiring(this.state.action);
          }
          this.setState({ action: null });
        };
        DiagramWidget2.prototype.startFiringAction = function(action) {
          var setState = true;
          if (this.props.actionStartedFiring) {
            setState = this.props.actionStartedFiring(action);
          }
          if (setState) {
            this.setState({ action });
          }
        };
        DiagramWidget2.prototype.onMouseMove = function(event2) {
          var _this = this;
          var diagramEngine = this.props.diagramEngine;
          var diagramModel = diagramEngine.getDiagramModel();
          if (this.state.action instanceof SelectingAction_1.SelectingAction) {
            var relative = diagramEngine.getRelativePoint(event2.clientX, event2.clientY);
            _2.forEach(diagramModel.getNodes(), function(node) {
              if (_this.state.action.containsElement(node.x, node.y, diagramModel)) {
                node.setSelected(true);
              }
            });
            _2.forEach(diagramModel.getLinks(), function(link) {
              var allSelected = true;
              _2.forEach(link.points, function(point) {
                if (_this.state.action.containsElement(point.x, point.y, diagramModel)) {
                  point.setSelected(true);
                } else {
                  allSelected = false;
                }
              });
              if (allSelected) {
                link.setSelected(true);
              }
            });
            this.state.action.mouseX2 = relative.x;
            this.state.action.mouseY2 = relative.y;
            this.fireAction();
            this.setState({ action: this.state.action });
            return;
          } else if (this.state.action instanceof MoveItemsAction_1.MoveItemsAction) {
            var amountX_1 = event2.clientX - this.state.action.mouseX;
            var amountY_1 = event2.clientY - this.state.action.mouseY;
            var amountZoom_1 = diagramModel.getZoomLevel() / 100;
            _2.forEach(this.state.action.selectionModels, function(model) {
              if (model.model instanceof NodeModel_1.NodeModel || model.model instanceof PointModel_1.PointModel && !model.model.isConnectedToPort()) {
                model.model.x = diagramModel.getGridPosition(model.initialX + amountX_1 / amountZoom_1);
                model.model.y = diagramModel.getGridPosition(model.initialY + amountY_1 / amountZoom_1);
                if (model.model instanceof NodeModel_1.NodeModel) {
                  _2.forEach(model.model.getPorts(), function(port) {
                    var portCoords = _this.props.diagramEngine.getPortCoords(port);
                    port.updateCoords(portCoords);
                  });
                }
                if (diagramEngine.isSmartRoutingEnabled()) {
                  diagramEngine.calculateRoutingMatrix();
                }
              } else if (model.model instanceof PointModel_1.PointModel) {
                model.model.x = model.initialX + diagramModel.getGridPosition(amountX_1 / amountZoom_1);
                model.model.y = model.initialY + diagramModel.getGridPosition(amountY_1 / amountZoom_1);
              }
            });
            if (diagramEngine.isSmartRoutingEnabled()) {
              diagramEngine.calculateCanvasMatrix();
            }
            this.fireAction();
            if (!this.state.wasMoved) {
              this.setState({ wasMoved: true });
            } else {
              this.forceUpdate();
            }
          } else if (this.state.action instanceof MoveCanvasAction_1.MoveCanvasAction) {
            if (this.props.allowCanvasTranslation) {
              diagramModel.setOffset(
                this.state.action.initialOffsetX + (event2.clientX - this.state.action.mouseX),
                this.state.action.initialOffsetY + (event2.clientY - this.state.action.mouseY)
              );
              this.fireAction();
              this.forceUpdate();
            }
          }
        };
        DiagramWidget2.prototype.onKeyUp = function(event2) {
          var _this = this;
          if (this.props.deleteKeys.indexOf(event2.keyCode) !== -1) {
            _2.forEach(this.props.diagramEngine.getDiagramModel().getSelectedItems(), function(element) {
              if (!_this.props.diagramEngine.isModelLocked(element)) {
                element.remove();
              }
            });
            this.forceUpdate();
          }
        };
        DiagramWidget2.prototype.onMouseUp = function(event2) {
          var _this = this;
          var diagramEngine = this.props.diagramEngine;
          if (this.state.action instanceof MoveItemsAction_1.MoveItemsAction) {
            var element = this.getMouseElement(event2);
            _2.forEach(this.state.action.selectionModels, function(model) {
              if (!(model.model instanceof PointModel_1.PointModel)) {
                return;
              }
              if (element && element.model instanceof PortModel_1.PortModel && !diagramEngine.isModelLocked(element.model)) {
                var link = model.model.getLink();
                if (link.getTargetPort() !== null) {
                  if (link.getTargetPort() !== element.model && link.getSourcePort() !== element.model) {
                    var targetPort = link.getTargetPort();
                    var newLink = link.clone({});
                    newLink.setSourcePort(element.model);
                    newLink.setTargetPort(targetPort);
                    link.setTargetPort(element.model);
                    targetPort.removeLink(link);
                    newLink.removePointsBefore(newLink.getPoints()[link.getPointIndex(model.model)]);
                    link.removePointsAfter(model.model);
                    diagramEngine.getDiagramModel().addLink(newLink);
                  } else if (link.getTargetPort() === element.model) {
                    link.removePointsAfter(model.model);
                  } else if (link.getSourcePort() === element.model) {
                    link.removePointsBefore(model.model);
                  }
                } else {
                  link.setTargetPort(element.model);
                }
                delete _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.getID()];
              }
            });
            if (!this.props.allowLooseLinks && this.state.wasMoved) {
              _2.forEach(this.state.action.selectionModels, function(model) {
                if (!(model.model instanceof PointModel_1.PointModel)) {
                  return;
                }
                var selectedPoint = model.model;
                var link = selectedPoint.getLink();
                if (link.getSourcePort() === null || link.getTargetPort() === null) {
                  link.remove();
                }
              });
            }
            _2.forEach(this.state.action.selectionModels, function(model) {
              if (!(model.model instanceof PointModel_1.PointModel)) {
                return;
              }
              var link = model.model.getLink();
              var sourcePort = link.getSourcePort();
              var targetPort = link.getTargetPort();
              if (sourcePort !== null && targetPort !== null) {
                if (!sourcePort.canLinkToPort(targetPort)) {
                  link.remove();
                } else if (_2.some(_2.values(targetPort.getLinks()), function(l) {
                  return l !== link && (l.getSourcePort() === sourcePort || l.getTargetPort() === sourcePort);
                })) {
                  link.remove();
                }
              }
            });
            diagramEngine.clearRepaintEntities();
            this.stopFiringAction(!this.state.wasMoved);
          } else {
            diagramEngine.clearRepaintEntities();
            this.stopFiringAction();
          }
          this.state.document.removeEventListener("mousemove", this.onMouseMove);
          this.state.document.removeEventListener("mouseup", this.onMouseUp);
        };
        DiagramWidget2.prototype.drawSelectionBox = function() {
          var dimensions = this.state.action.getBoxDimensions();
          return React.createElement("div", {
            className: this.bem("__selector"),
            style: { top: dimensions.top, left: dimensions.left, width: dimensions.width, height: dimensions.height }
          });
        };
        DiagramWidget2.prototype.render = function() {
          var _this = this;
          var diagramEngine = this.props.diagramEngine;
          diagramEngine.setMaxNumberPointsPerLink(this.props.maxNumberPointsPerLink);
          diagramEngine.setSmartRoutingStatus(this.props.smartRouting);
          var diagramModel = diagramEngine.getDiagramModel();
          return React.createElement(
            "div",
            __assign({}, this.getProps(), {
              ref: function(ref) {
                if (ref) {
                  _this.props.diagramEngine.setCanvas(ref);
                }
              },
              onWheel: function(event2) {
                if (_this.props.allowCanvasZoom) {
                  event2.preventDefault();
                  event2.stopPropagation();
                  var oldZoomFactor = diagramModel.getZoomLevel() / 100;
                  var scrollDelta = _this.props.inverseZoom ? -event2.deltaY : event2.deltaY;
                  if (event2.ctrlKey && scrollDelta % 1 !== 0) {
                    scrollDelta /= 3;
                  } else {
                    scrollDelta /= 60;
                  }
                  if (diagramModel.getZoomLevel() + scrollDelta > 10) {
                    diagramModel.setZoomLevel(diagramModel.getZoomLevel() + scrollDelta);
                  }
                  var zoomFactor = diagramModel.getZoomLevel() / 100;
                  var boundingRect = event2.currentTarget.getBoundingClientRect();
                  var clientWidth = boundingRect.width;
                  var clientHeight = boundingRect.height;
                  var widthDiff = clientWidth * zoomFactor - clientWidth * oldZoomFactor;
                  var heightDiff = clientHeight * zoomFactor - clientHeight * oldZoomFactor;
                  var clientX = event2.clientX - boundingRect.left;
                  var clientY = event2.clientY - boundingRect.top;
                  var xFactor = (clientX - diagramModel.getOffsetX()) / oldZoomFactor / clientWidth;
                  var yFactor = (clientY - diagramModel.getOffsetY()) / oldZoomFactor / clientHeight;
                  diagramModel.setOffset(diagramModel.getOffsetX() - widthDiff * xFactor, diagramModel.getOffsetY() - heightDiff * yFactor);
                  diagramEngine.enableRepaintEntities([]);
                  _this.forceUpdate();
                }
              },
              onMouseDown: function(event2) {
                _this.setState(__assign({}, _this.state, { wasMoved: false }));
                diagramEngine.clearRepaintEntities();
                var model = _this.getMouseElement(event2);
                if (model === null) {
                  if (event2.shiftKey) {
                    var relative = diagramEngine.getRelativePoint(event2.clientX, event2.clientY);
                    _this.startFiringAction(new SelectingAction_1.SelectingAction(relative.x, relative.y));
                  } else {
                    diagramModel.clearSelection();
                    _this.startFiringAction(new MoveCanvasAction_1.MoveCanvasAction(event2.clientX, event2.clientY, diagramModel));
                  }
                } else if (model.model instanceof PortModel_1.PortModel) {
                  if (!_this.props.diagramEngine.isModelLocked(model.model)) {
                    var relative = diagramEngine.getRelativeMousePoint(event2);
                    var sourcePort = model.model;
                    var link = sourcePort.createLinkModel();
                    link.setSourcePort(sourcePort);
                    if (link) {
                      link.removeMiddlePoints();
                      if (link.getSourcePort() !== sourcePort) {
                        link.setSourcePort(sourcePort);
                      }
                      link.setTargetPort(null);
                      link.getFirstPoint().updateLocation(relative);
                      link.getLastPoint().updateLocation(relative);
                      diagramModel.clearSelection();
                      link.getLastPoint().setSelected(true);
                      diagramModel.addLink(link);
                      _this.startFiringAction(new MoveItemsAction_1.MoveItemsAction(event2.clientX, event2.clientY, diagramEngine));
                    }
                  } else {
                    diagramModel.clearSelection();
                  }
                } else {
                  if (!event2.shiftKey && !model.model.isSelected()) {
                    diagramModel.clearSelection();
                  }
                  model.model.setSelected(true);
                  _this.startFiringAction(new MoveItemsAction_1.MoveItemsAction(event2.clientX, event2.clientY, diagramEngine));
                }
                _this.state.document.addEventListener("mousemove", _this.onMouseMove);
                _this.state.document.addEventListener("mouseup", _this.onMouseUp);
              }
            }),
            this.state.renderedNodes && React.createElement(LinkLayerWidget_1.LinkLayerWidget, {
              diagramEngine,
              pointAdded: function(point, event2) {
                _this.state.document.addEventListener("mousemove", _this.onMouseMove);
                _this.state.document.addEventListener("mouseup", _this.onMouseUp);
                event2.stopPropagation();
                diagramModel.clearSelection(point);
                _this.setState({ action: new MoveItemsAction_1.MoveItemsAction(event2.clientX, event2.clientY, diagramEngine) });
              }
            }),
            React.createElement(NodeLayerWidget_1.NodeLayerWidget, { diagramEngine }),
            this.state.action instanceof SelectingAction_1.SelectingAction && this.drawSelectionBox()
          );
        };
        DiagramWidget2.defaultProps = {
          diagramEngine: null,
          allowLooseLinks: true,
          allowCanvasTranslation: true,
          allowCanvasZoom: true,
          inverseZoom: false,
          maxNumberPointsPerLink: Infinity,
          smartRouting: false,
          deleteKeys: [46, 8]
        };
        return DiagramWidget2;
      }(BaseWidget_1.BaseWidget);
      exports2.DiagramWidget = DiagramWidget;
    },
    function(module2, exports2, __nested_webpack_require_140974__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var DefaultNodeModel_1 = __nested_webpack_require_140974__(38);
      var React = __nested_webpack_require_140974__(1);
      var DefaultNodeWidget_1 = __nested_webpack_require_140974__(35);
      var AbstractNodeFactory_1 = __nested_webpack_require_140974__(32);
      var DefaultNodeFactory = function(_super) {
        __extends(DefaultNodeFactory2, _super);
        function DefaultNodeFactory2() {
          return _super.call(this, "default") || this;
        }
        DefaultNodeFactory2.prototype.generateReactWidget = function(diagramEngine, node) {
          return React.createElement(DefaultNodeWidget_1.DefaultNodeWidget, { node, diagramEngine });
        };
        DefaultNodeFactory2.prototype.getNewInstance = function(initialConfig) {
          return new DefaultNodeModel_1.DefaultNodeModel();
        };
        return DefaultNodeFactory2;
      }(AbstractNodeFactory_1.AbstractNodeFactory);
      exports2.DefaultNodeFactory = DefaultNodeFactory;
    },
    function(module2, exports2, __nested_webpack_require_142626__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var React = __nested_webpack_require_142626__(1);
      var DefaultLinkWidget_1 = __nested_webpack_require_142626__(37);
      var AbstractLinkFactory_1 = __nested_webpack_require_142626__(36);
      var DefaultLinkModel_1 = __nested_webpack_require_142626__(19);
      var DefaultLinkFactory = function(_super) {
        __extends(DefaultLinkFactory2, _super);
        function DefaultLinkFactory2() {
          return _super.call(this, "default") || this;
        }
        DefaultLinkFactory2.prototype.generateReactWidget = function(diagramEngine, link) {
          return React.createElement(DefaultLinkWidget_1.DefaultLinkWidget, { link, diagramEngine });
        };
        DefaultLinkFactory2.prototype.getNewInstance = function(initialConfig) {
          return new DefaultLinkModel_1.DefaultLinkModel();
        };
        DefaultLinkFactory2.prototype.generateLinkSegment = function(model, widget, selected, path) {
          return React.createElement("path", {
            className: selected ? widget.bem("--path-selected") : "",
            strokeWidth: model.width,
            stroke: model.color,
            d: path
          });
        };
        return DefaultLinkFactory2;
      }(AbstractLinkFactory_1.AbstractLinkFactory);
      exports2.DefaultLinkFactory = DefaultLinkFactory;
    },
    function(module2, exports2, __nested_webpack_require_144613__) {
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports2, "__esModule", { value: true });
      var BaseEntity_1 = __nested_webpack_require_144613__(13);
      var DiagramModel_1 = __nested_webpack_require_144613__(44);
      var _2 = __webpack_require__(96486);
      var NodeModel_1 = __nested_webpack_require_144613__(9);
      var PointModel_1 = __nested_webpack_require_144613__(5);
      var main_1 = __nested_webpack_require_144613__(45);
      var PathFinding_1 = __nested_webpack_require_144613__(16);
      var DefaultPortFactory_1 = __nested_webpack_require_144613__(43);
      var DefaultLabelFactory_1 = __nested_webpack_require_144613__(41);
      var Toolkit_1 = __nested_webpack_require_144613__(7);
      var DiagramEngine = function(_super) {
        __extends(DiagramEngine2, _super);
        function DiagramEngine2() {
          var _this = _super.call(this) || this;
          _this.canvasMatrix = [];
          _this.routingMatrix = [];
          _this.hAdjustmentFactor = 0;
          _this.vAdjustmentFactor = 0;
          _this.calculateMatrixDimensions = function() {
            var allNodesCoords = _2.values(_this.diagramModel.nodes).map(function(item) {
              return { x: item.x, width: item.width, y: item.y, height: item.height };
            });
            var allLinks = _2.values(_this.diagramModel.links);
            var allPortsCoords = _2.flatMap(
              allLinks.map(function(link) {
                return [link.sourcePort, link.targetPort];
              })
            ).filter(function(port) {
              return port !== null;
            }).map(function(item) {
              return { x: item.x, width: item.width, y: item.y, height: item.height };
            });
            var allPointsCoords = _2.flatMap(
              allLinks.map(function(link) {
                return link.points;
              })
            ).map(function(item) {
              return { x: item.x, width: 0, y: item.y, height: 0 };
            });
            var canvas = _this.canvas;
            var minX = Math.floor(
              Math.min(
                _2.minBy(_2.concat(allNodesCoords, allPortsCoords, allPointsCoords), function(item) {
                  return item.x;
                }).x,
                0
              ) / PathFinding_1.ROUTING_SCALING_FACTOR
            ) * PathFinding_1.ROUTING_SCALING_FACTOR;
            var maxXElement = _2.maxBy(_2.concat(allNodesCoords, allPortsCoords, allPointsCoords), function(item) {
              return item.x + item.width;
            });
            var maxX = Math.max(maxXElement.x + maxXElement.width, canvas.offsetWidth);
            var minY = Math.floor(
              Math.min(
                _2.minBy(_2.concat(allNodesCoords, allPortsCoords, allPointsCoords), function(item) {
                  return item.y;
                }).y,
                0
              ) / PathFinding_1.ROUTING_SCALING_FACTOR
            ) * PathFinding_1.ROUTING_SCALING_FACTOR;
            var maxYElement = _2.maxBy(_2.concat(allNodesCoords, allPortsCoords, allPointsCoords), function(item) {
              return item.y + item.height;
            });
            var maxY = Math.max(maxYElement.y + maxYElement.height, canvas.offsetHeight);
            return {
              width: Math.ceil(Math.abs(minX) + maxX),
              hAdjustmentFactor: Math.abs(minX) / PathFinding_1.ROUTING_SCALING_FACTOR + 1,
              height: Math.ceil(Math.abs(minY) + maxY),
              vAdjustmentFactor: Math.abs(minY) / PathFinding_1.ROUTING_SCALING_FACTOR + 1
            };
          };
          _this.markNodes = function(matrix) {
            _2.values(_this.diagramModel.nodes).forEach(function(node) {
              var startX = Math.floor(node.x / PathFinding_1.ROUTING_SCALING_FACTOR);
              var endX = Math.ceil((node.x + node.width) / PathFinding_1.ROUTING_SCALING_FACTOR);
              var startY = Math.floor(node.y / PathFinding_1.ROUTING_SCALING_FACTOR);
              var endY = Math.ceil((node.y + node.height) / PathFinding_1.ROUTING_SCALING_FACTOR);
              for (var x = startX - 1; x <= endX + 1; x++) {
                for (var y = startY - 1; y < endY + 1; y++) {
                  _this.markMatrixPoint(matrix, _this.translateRoutingX(x), _this.translateRoutingY(y));
                }
              }
            });
          };
          _this.markPorts = function(matrix) {
            var allElements = _2.flatMap(
              _2.values(_this.diagramModel.links).map(function(link) {
                return [].concat(link.sourcePort, link.targetPort);
              })
            );
            allElements.filter(function(port) {
              return port !== null;
            }).forEach(function(port) {
              var startX = Math.floor(port.x / PathFinding_1.ROUTING_SCALING_FACTOR);
              var endX = Math.ceil((port.x + port.width) / PathFinding_1.ROUTING_SCALING_FACTOR);
              var startY = Math.floor(port.y / PathFinding_1.ROUTING_SCALING_FACTOR);
              var endY = Math.ceil((port.y + port.height) / PathFinding_1.ROUTING_SCALING_FACTOR);
              for (var x = startX - 1; x <= endX + 1; x++) {
                for (var y = startY - 1; y < endY + 1; y++) {
                  _this.markMatrixPoint(matrix, _this.translateRoutingX(x), _this.translateRoutingY(y));
                }
              }
            });
          };
          _this.markMatrixPoint = function(matrix, x, y) {
            if (matrix[y] !== void 0 && matrix[y][x] !== void 0) {
              matrix[y][x] = 1;
            }
          };
          _this.diagramModel = new DiagramModel_1.DiagramModel();
          _this.nodeFactories = {};
          _this.linkFactories = {};
          _this.portFactories = {};
          _this.labelFactories = {};
          _this.canvas = null;
          _this.paintableWidgets = null;
          _this.linksThatHaveInitiallyRendered = {};
          if (Toolkit_1.Toolkit.TESTING) {
            Toolkit_1.Toolkit.TESTING_UID = 0;
            if (window) {
              window["diagram_instance"] = _this;
            }
          }
          return _this;
        }
        DiagramEngine2.prototype.installDefaultFactories = function() {
          this.registerNodeFactory(new main_1.DefaultNodeFactory());
          this.registerLinkFactory(new main_1.DefaultLinkFactory());
          this.registerPortFactory(new DefaultPortFactory_1.DefaultPortFactory());
          this.registerLabelFactory(new DefaultLabelFactory_1.DefaultLabelFactory());
        };
        DiagramEngine2.prototype.repaintCanvas = function() {
          this.iterateListeners(function(listener) {
            if (listener.repaintCanvas) {
              listener.repaintCanvas();
            }
          });
        };
        DiagramEngine2.prototype.clearRepaintEntities = function() {
          this.paintableWidgets = null;
        };
        DiagramEngine2.prototype.enableRepaintEntities = function(entities) {
          var _this = this;
          this.paintableWidgets = {};
          entities.forEach(function(entity) {
            if (entity instanceof NodeModel_1.NodeModel) {
              _2.forEach(entity.getPorts(), function(port) {
                _2.forEach(port.getLinks(), function(link) {
                  _this.paintableWidgets[link.getID()] = true;
                });
              });
            }
            if (entity instanceof PointModel_1.PointModel) {
              _this.paintableWidgets[entity.getLink().getID()] = true;
            }
            _this.paintableWidgets[entity.getID()] = true;
          });
        };
        DiagramEngine2.prototype.isModelLocked = function(model) {
          if (this.diagramModel.isLocked()) {
            return true;
          }
          return model.isLocked();
        };
        DiagramEngine2.prototype.recalculatePortsVisually = function() {
          this.nodesRendered = false;
          this.linksThatHaveInitiallyRendered = {};
        };
        DiagramEngine2.prototype.canEntityRepaint = function(baseModel) {
          if (this.paintableWidgets === null) {
            return true;
          }
          return this.paintableWidgets[baseModel.getID()] !== void 0;
        };
        DiagramEngine2.prototype.setCanvas = function(canvas) {
          this.canvas = canvas;
        };
        DiagramEngine2.prototype.setDiagramModel = function(model) {
          this.diagramModel = model;
          this.recalculatePortsVisually();
        };
        DiagramEngine2.prototype.getDiagramModel = function() {
          return this.diagramModel;
        };
        //!-------------- FACTORIES ------------
        DiagramEngine2.prototype.getNodeFactories = function() {
          return this.nodeFactories;
        };
        DiagramEngine2.prototype.getLinkFactories = function() {
          return this.linkFactories;
        };
        DiagramEngine2.prototype.getLabelFactories = function() {
          return this.labelFactories;
        };
        DiagramEngine2.prototype.registerLabelFactory = function(factory) {
          this.labelFactories[factory.getType()] = factory;
          this.iterateListeners(function(listener) {
            if (listener.labelFactoriesUpdated) {
              listener.labelFactoriesUpdated();
            }
          });
        };
        DiagramEngine2.prototype.registerPortFactory = function(factory) {
          this.portFactories[factory.getType()] = factory;
          this.iterateListeners(function(listener) {
            if (listener.portFactoriesUpdated) {
              listener.portFactoriesUpdated();
            }
          });
        };
        DiagramEngine2.prototype.registerNodeFactory = function(factory) {
          this.nodeFactories[factory.getType()] = factory;
          this.iterateListeners(function(listener) {
            if (listener.nodeFactoriesUpdated) {
              listener.nodeFactoriesUpdated();
            }
          });
        };
        DiagramEngine2.prototype.registerLinkFactory = function(factory) {
          this.linkFactories[factory.getType()] = factory;
          this.iterateListeners(function(listener) {
            if (listener.linkFactoriesUpdated) {
              listener.linkFactoriesUpdated();
            }
          });
        };
        DiagramEngine2.prototype.getPortFactory = function(type) {
          if (this.portFactories[type]) {
            return this.portFactories[type];
          }
          throw new Error("cannot find factory for port of type: [" + type + "]");
        };
        DiagramEngine2.prototype.getNodeFactory = function(type) {
          if (this.nodeFactories[type]) {
            return this.nodeFactories[type];
          }
          throw new Error("cannot find factory for node of type: [" + type + "]");
        };
        DiagramEngine2.prototype.getLinkFactory = function(type) {
          if (this.linkFactories[type]) {
            return this.linkFactories[type];
          }
          throw new Error("cannot find factory for link of type: [" + type + "]");
        };
        DiagramEngine2.prototype.getLabelFactory = function(type) {
          if (this.labelFactories[type]) {
            return this.labelFactories[type];
          }
          throw new Error("cannot find factory for label of type: [" + type + "]");
        };
        DiagramEngine2.prototype.getFactoryForNode = function(node) {
          return this.getNodeFactory(node.getType());
        };
        DiagramEngine2.prototype.getFactoryForLink = function(link) {
          return this.getLinkFactory(link.getType());
        };
        DiagramEngine2.prototype.getFactoryForLabel = function(label) {
          return this.getLabelFactory(label.getType());
        };
        DiagramEngine2.prototype.generateWidgetForLink = function(link) {
          var linkFactory = this.getFactoryForLink(link);
          if (!linkFactory) {
            throw new Error("Cannot find link factory for link: " + link.getType());
          }
          return linkFactory.generateReactWidget(this, link);
        };
        DiagramEngine2.prototype.generateWidgetForNode = function(node) {
          var nodeFactory = this.getFactoryForNode(node);
          if (!nodeFactory) {
            throw new Error("Cannot find widget factory for node: " + node.getType());
          }
          return nodeFactory.generateReactWidget(this, node);
        };
        DiagramEngine2.prototype.getRelativeMousePoint = function(event2) {
          var point = this.getRelativePoint(event2.clientX, event2.clientY);
          return {
            x: (point.x - this.diagramModel.getOffsetX()) / (this.diagramModel.getZoomLevel() / 100),
            y: (point.y - this.diagramModel.getOffsetY()) / (this.diagramModel.getZoomLevel() / 100)
          };
        };
        DiagramEngine2.prototype.getRelativePoint = function(x, y) {
          var canvasRect = this.canvas.getBoundingClientRect();
          return { x: x - canvasRect.left, y: y - canvasRect.top };
        };
        DiagramEngine2.prototype.getNodeElement = function(node) {
          var selector = this.canvas.querySelector('.node[data-nodeid="' + node.getID() + '"]');
          if (selector === null) {
            throw new Error("Cannot find Node element with nodeID: [" + node.getID() + "]");
          }
          return selector;
        };
        DiagramEngine2.prototype.getNodePortElement = function(port) {
          var selector = this.canvas.querySelector('.port[data-name="' + port.getName() + '"][data-nodeid="' + port.getParent().getID() + '"]');
          if (selector === null) {
            throw new Error("Cannot find Node Port element with nodeID: [" + port.getParent().getID() + "] and name: [" + port.getName() + "]");
          }
          return selector;
        };
        DiagramEngine2.prototype.getPortCenter = function(port) {
          var sourceElement = this.getNodePortElement(port);
          var sourceRect = sourceElement.getBoundingClientRect();
          var rel = this.getRelativePoint(sourceRect.left, sourceRect.top);
          return {
            x: sourceElement.offsetWidth / 2 + (rel.x - this.diagramModel.getOffsetX()) / (this.diagramModel.getZoomLevel() / 100),
            y: sourceElement.offsetHeight / 2 + (rel.y - this.diagramModel.getOffsetY()) / (this.diagramModel.getZoomLevel() / 100)
          };
        };
        DiagramEngine2.prototype.getPortCoords = function(port) {
          var sourceElement = this.getNodePortElement(port);
          var sourceRect = sourceElement.getBoundingClientRect();
          var canvasRect = this.canvas.getBoundingClientRect();
          return {
            x: (sourceRect.x - this.diagramModel.getOffsetX()) / (this.diagramModel.getZoomLevel() / 100) - canvasRect.left,
            y: (sourceRect.y - this.diagramModel.getOffsetY()) / (this.diagramModel.getZoomLevel() / 100) - canvasRect.top,
            width: sourceRect.width,
            height: sourceRect.height
          };
        };
        DiagramEngine2.prototype.getNodeDimensions = function(node) {
          if (!this.canvas) {
            return { width: 0, height: 0 };
          }
          var nodeElement = this.getNodeElement(node);
          var nodeRect = nodeElement.getBoundingClientRect();
          return { width: nodeRect.width, height: nodeRect.height };
        };
        DiagramEngine2.prototype.getMaxNumberPointsPerLink = function() {
          return this.maxNumberPointsPerLink;
        };
        DiagramEngine2.prototype.setMaxNumberPointsPerLink = function(max) {
          this.maxNumberPointsPerLink = max;
        };
        DiagramEngine2.prototype.isSmartRoutingEnabled = function() {
          return !!this.smartRouting;
        };
        DiagramEngine2.prototype.setSmartRoutingStatus = function(status) {
          this.smartRouting = status;
        };
        DiagramEngine2.prototype.getCanvasMatrix = function() {
          if (this.canvasMatrix.length === 0) {
            this.calculateCanvasMatrix();
          }
          return this.canvasMatrix;
        };
        DiagramEngine2.prototype.calculateCanvasMatrix = function() {
          var _a = this.calculateMatrixDimensions(), canvasWidth = _a.width, hAdjustmentFactor = _a.hAdjustmentFactor, canvasHeight = _a.height, vAdjustmentFactor = _a.vAdjustmentFactor;
          this.hAdjustmentFactor = hAdjustmentFactor;
          this.vAdjustmentFactor = vAdjustmentFactor;
          var matrixWidth = Math.ceil(canvasWidth / PathFinding_1.ROUTING_SCALING_FACTOR);
          var matrixHeight = Math.ceil(canvasHeight / PathFinding_1.ROUTING_SCALING_FACTOR);
          this.canvasMatrix = _2.range(0, matrixHeight).map(function() {
            return new Array(matrixWidth).fill(0);
          });
        };
        DiagramEngine2.prototype.getRoutingMatrix = function() {
          if (this.routingMatrix.length === 0) {
            this.calculateRoutingMatrix();
          }
          return this.routingMatrix;
        };
        DiagramEngine2.prototype.calculateRoutingMatrix = function() {
          var matrix = _2.cloneDeep(this.getCanvasMatrix());
          this.markNodes(matrix);
          this.markPorts(matrix);
          this.routingMatrix = matrix;
        };
        DiagramEngine2.prototype.translateRoutingX = function(x, reverse) {
          if (reverse === void 0) {
            reverse = false;
          }
          return x + this.hAdjustmentFactor * (reverse ? -1 : 1);
        };
        DiagramEngine2.prototype.translateRoutingY = function(y, reverse) {
          if (reverse === void 0) {
            reverse = false;
          }
          return y + this.vAdjustmentFactor * (reverse ? -1 : 1);
        };
        DiagramEngine2.prototype.zoomToFit = function() {
          var xFactor = this.canvas.clientWidth / this.canvas.scrollWidth;
          var yFactor = this.canvas.clientHeight / this.canvas.scrollHeight;
          var zoomFactor = xFactor < yFactor ? xFactor : yFactor;
          this.diagramModel.setZoomLevel(this.diagramModel.getZoomLevel() * zoomFactor);
          this.diagramModel.setOffset(0, 0);
          this.repaintCanvas();
        };
        return DiagramEngine2;
      }(BaseEntity_1.BaseEntity);
      exports2.DiagramEngine = DiagramEngine;
    },
    function(module2, exports2, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var _slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var sq = function sq2(x) {
        return x * x;
      };
      var distPointToPoint = function distPointToPoint2(_ref, _ref3) {
        var _ref2 = _slicedToArray(_ref, 2);
        var ax = _ref2[0];
        var ay = _ref2[1];
        var _ref32 = _slicedToArray(_ref3, 2);
        var bx = _ref32[0];
        var by = _ref32[1];
        return Math.sqrt(sq(ax - bx) + sq(ay - by));
      };
      var distPointToParabol = function distPointToParabol2(a, f) {
        var p = distPointToPoint(a, f);
        return p == 0 ? Infinity : sq(p) / (2 * Math.abs(a[1] - f[1]));
      };
      var circumCenter = function circumCenter2(a, b, c) {
        var d = (a[0] - c[0]) * (b[1] - c[1]) - (b[0] - c[0]) * (a[1] - c[1]);
        if (d == 0)
          return [Infinity, Infinity];
        var xc = (((a[0] - c[0]) * (a[0] + c[0]) + (a[1] - c[1]) * (a[1] + c[1])) / 2 * (b[1] - c[1]) - ((b[0] - c[0]) * (b[0] + c[0]) + (b[1] - c[1]) * (b[1] + c[1])) / 2 * (a[1] - c[1])) / d;
        var yc = (((b[0] - c[0]) * (b[0] + c[0]) + (b[1] - c[1]) * (b[1] + c[1])) / 2 * (a[0] - c[0]) - ((a[0] - c[0]) * (a[0] + c[0]) + (a[1] - c[1]) * (a[1] + c[1])) / 2 * (b[0] - c[0])) / d;
        return [xc, yc];
      };
      var parabolsCrossX = function parabolsCrossX2(fa, fb, q) {
        if (fa[1] === fb[1])
          return [(fa[0] + fb[0]) / 2, (fa[0] + fb[0]) / 2];
        var s1 = (fa[1] * fb[0] - fa[0] * fb[1] + fa[0] * q - fb[0] * q + Math.sqrt(
          (fa[0] * fa[0] + fa[1] * fa[1] - 2 * fa[0] * fb[0] + fb[0] * fb[0] - 2 * fa[1] * fb[1] + fb[1] * fb[1]) * (fa[1] * fb[1] - fa[1] * q - fb[1] * q + q * q)
        )) / (fa[1] - fb[1]);
        var s2 = (fa[1] * fb[0] - fa[0] * fb[1] + fa[0] * q - fb[0] * q - Math.sqrt(
          (fa[0] * fa[0] + fa[1] * fa[1] - 2 * fa[0] * fb[0] + fb[0] * fb[0] - 2 * fa[1] * fb[1] + fb[1] * fb[1]) * (fa[1] * fb[1] - fa[1] * q - fb[1] * q + q * q)
        )) / (fa[1] - fb[1]);
        return s1 < s2 ? [s1, s2] : [s2, s1];
      };
      var doHalflinesCross = function doHalflinesCross2(sa, sb) {
        var approx = arguments.length <= 2 || arguments[2] === void 0 ? 1e-10 : arguments[2];
        var dx = sb.ps[0] - sa.ps[0];
        var dy = sb.ps[1] - sa.ps[1];
        if (sa.m == Infinity)
          return sa.hp * (sb.m * dx - dy) <= approx && sb.vec[0] * dx <= approx;
        if (sb.m == Infinity)
          return sb.hp * (sa.m * dx - dy) >= -approx && sa.vec[0] * dx >= -approx;
        var det = sb.vec[0] * sa.vec[1] - sb.vec[1] * sa.vec[0];
        if (det === 0)
          return false;
        var u = (dy * sb.vec[0] - dx * sb.vec[1]) / det;
        var v = (dy * sa.vec[0] - dx * sa.vec[1]) / det;
        return u >= -approx && v >= approx || u >= approx && v >= -approx;
      };
      var matrixTransform = function matrixTransform2(points, matrix) {
        return points.map(function(point) {
          return {
            x: point.x * matrix[0] + point.y * matrix[2] + matrix[4],
            y: point.x * matrix[1] + point.y * matrix[3] + matrix[5]
          };
        });
      };
      var transformEllipse = function transformEllipse2(rx, ry, ax, m) {
        var torad = Math.PI / 180;
        var epsilon = 1e-10;
        var c = Math.cos(ax * torad), s = Math.sin(ax * torad);
        var ma = [rx * (m[0] * c + m[2] * s), rx * (m[1] * c + m[3] * s), ry * (-m[0] * s + m[2] * c), ry * (-m[1] * s + m[3] * c)];
        var J = ma[0] * ma[0] + ma[2] * ma[2], K = ma[1] * ma[1] + ma[3] * ma[3];
        var D = ((ma[0] - ma[3]) * (ma[0] - ma[3]) + (ma[2] + ma[1]) * (ma[2] + ma[1])) * ((ma[0] + ma[3]) * (ma[0] + ma[3]) + (ma[2] - ma[1]) * (ma[2] - ma[1]));
        var JK = (J + K) / 2;
        if (D < epsilon * JK) {
          return { rx: Math.sqrt(JK), ry: Math.sqrt(JK), ax: 0, isDegenerate: false };
        }
        var L = ma[0] * ma[1] + ma[2] * ma[3];
        D = Math.sqrt(D);
        var l1 = JK + D / 2, l2 = JK - D / 2;
        var newAx = void 0, newRx = void 0, newRy = void 0;
        newAx = Math.abs(L) < epsilon && Math.abs(l1 - K) < epsilon ? 90 : Math.atan(Math.abs(L) > Math.abs(l1 - K) ? (l1 - J) / L : L / (l1 - K)) * 180 / Math.PI;
        if (newAx >= 0) {
          newRx = Math.sqrt(l1);
          newRy = Math.sqrt(l2);
        } else {
          newAx += 90;
          newRx = Math.sqrt(l2);
          newRy = Math.sqrt(l1);
        }
        return { rx: newRx, ry: newRy, ax: newAx, isDegenerate: newRx < epsilon * newRy || newRy < epsilon * newRx };
      };
      exports2["default"] = {
        distPointToPoint,
        distPointToParabol,
        circumCenter,
        parabolsCrossX,
        doHalflinesCross,
        matrixTransform,
        transformEllipse
      };
      module2.exports = exports2["default"];
    },
    function(module2, exports2, __nested_webpack_require_169331__) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var _slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var _geom = __nested_webpack_require_169331__(50);
      var Path = function Path2(init) {
        var _instructions = init || [];
        var push = function push2(arr, el) {
          var copy = arr.slice(0, arr.length);
          copy.push(el);
          return copy;
        };
        var areEqualPoints = function areEqualPoints2(_ref, _ref3) {
          var _ref2 = _slicedToArray(_ref, 2);
          var a1 = _ref2[0];
          var b1 = _ref2[1];
          var _ref32 = _slicedToArray(_ref3, 2);
          var a2 = _ref32[0];
          var b2 = _ref32[1];
          return a1 === a2 && b1 === b2;
        };
        var trimZeros = function trimZeros2(string, char) {
          var l = string.length;
          while (string.charAt(l - 1) === "0") {
            l = l - 1;
          }
          if (string.charAt(l - 1) === ".") {
            l = l - 1;
          }
          return string.substr(0, l);
        };
        var round = function round2(number, digits) {
          var str = number.toFixed(digits);
          return trimZeros(str);
        };
        var printInstrunction = function printInstrunction2(_ref4) {
          var command = _ref4.command;
          var params = _ref4.params;
          var numbers = params.map(function(param) {
            return round(param, 6);
          });
          return command + " " + numbers.join(" ");
        };
        var point = function point2(_ref5, prev) {
          var command = _ref5.command;
          var params = _ref5.params;
          switch (command) {
            case "M":
              return [params[0], params[1]];
            case "L":
              return [params[0], params[1]];
            case "H":
              return [params[0], prev[1]];
            case "V":
              return [prev[0], params[0]];
            case "Z":
              return null;
            case "C":
              return [params[4], params[5]];
            case "S":
              return [params[2], params[3]];
            case "Q":
              return [params[2], params[3]];
            case "T":
              return [params[0], params[1]];
            case "A":
              return [params[5], params[6]];
          }
        };
        var transformParams = function transformParams2(instruction, matrix, prev) {
          var p = instruction.params;
          var transformer = {
            V: function V(instruction2, matrix2, prev2) {
              var pts = [{ x: prev2[0], y: p[1] }];
              var newPts = (0, _geom.matrixTransform)(pts, matrix2);
              if (newPts[0].x === (0, _geom.matrixTransform)([{ x: prev2[0], y: prev2[1] }])[0].x) {
                return { command: "V", params: [newPts[0].y] };
              } else {
                return { command: "L", params: [newPts[0].x, newPts[0].y] };
              }
            },
            H: function H(instruction2, matrix2, prev2) {
              var pts = [{ x: p[0], y: prev2[1] }];
              var newPts = (0, _geom.matrixTransform)(pts, matrix2);
              if (newPts[0].y === (0, _geom.matrixTransform)([{ x: prev2[0], y: prev2[1] }])[0].y) {
                return { command: "H", params: [newPts[0].x] };
              } else {
                return { command: "L", params: [newPts[0].x, newPts[0].y] };
              }
            },
            A: function A(instruction2, matrix2, prev2) {
              var r = (0, _geom.transformEllipse)(p[0], p[1], p[2], matrix2);
              var sweepFlag = p[4];
              if (matrix2[0] * matrix2[3] - matrix2[1] * matrix2[2] < 0) {
                sweepFlag = sweepFlag ? "0" : "1";
              }
              var pts = [{ x: p[5], y: p[6] }];
              var newPts = (0, _geom.matrixTransform)(pts, matrix2);
              if (r.isDegenerate) {
                return { command: "L", params: [newPts[0].x, newPts[0].y] };
              } else {
                return { command: "A", params: [r.rx, r.ry, r.ax, p[3], sweepFlag, newPts[0].x, newPts[0].y] };
              }
            },
            C: function C(instruction2, matrix2, prev2) {
              var pts = [
                { x: p[0], y: p[1] },
                { x: p[2], y: p[3] },
                { x: p[4], y: p[5] }
              ];
              var newPts = (0, _geom.matrixTransform)(pts, matrix2);
              return {
                command: "C",
                params: [newPts[0].x, newPts[0].y, newPts[1].x, newPts[1].y, newPts[2].x, newPts[2].y]
              };
            },
            Z: function Z(instruction2, matrix2, prev2) {
              return { command: "Z", params: [] };
            },
            default: function _default(instruction2, matrix2, prev2) {
              var pts = [{ x: p[0], y: p[1] }];
              var newPts = (0, _geom.matrixTransform)(pts, matrix2);
              var newParams = instruction2.params.slice(0, instruction2.params.length);
              newParams.splice(0, 2, newPts[0].x, newPts[0].y);
              return { command: instruction2.command, params: newParams };
            }
          };
          if (transformer[instruction.command]) {
            return transformer[instruction.command](instruction, matrix, prev);
          } else {
            return transformer["default"](instruction, matrix, prev);
          }
        };
        var verbosify = function verbosify2(keys, f) {
          return function(a) {
            var args = typeof a === "object" ? keys.map(function(k) {
              return a[k];
            }) : arguments;
            return f.apply(null, args);
          };
        };
        var plus = function plus2(instruction) {
          return Path2(push(_instructions, instruction));
        };
        return {
          moveto: verbosify(["x", "y"], function(x, y) {
            return plus({ command: "M", params: [x, y] });
          }),
          lineto: verbosify(["x", "y"], function(x, y) {
            return plus({ command: "L", params: [x, y] });
          }),
          hlineto: verbosify(["x"], function(x) {
            return plus({ command: "H", params: [x] });
          }),
          vlineto: verbosify(["y"], function(y) {
            return plus({ command: "V", params: [y] });
          }),
          closepath: function closepath() {
            return plus({ command: "Z", params: [] });
          },
          curveto: verbosify(["x1", "y1", "x2", "y2", "x", "y"], function(x1, y1, x2, y2, x, y) {
            return plus({ command: "C", params: [x1, y1, x2, y2, x, y] });
          }),
          smoothcurveto: verbosify(["x2", "y2", "x", "y"], function(x2, y2, x, y) {
            return plus({ command: "S", params: [x2, y2, x, y] });
          }),
          qcurveto: verbosify(["x1", "y1", "x", "y"], function(x1, y1, x, y) {
            return plus({ command: "Q", params: [x1, y1, x, y] });
          }),
          smoothqcurveto: verbosify(["x", "y"], function(x, y) {
            return plus({ command: "T", params: [x, y] });
          }),
          arc: verbosify(["rx", "ry", "xrot", "largeArcFlag", "sweepFlag", "x", "y"], function(rx, ry, xrot, largeArcFlag, sweepFlag, x, y) {
            return plus({ command: "A", params: [rx, ry, xrot, largeArcFlag, sweepFlag, x, y] });
          }),
          translate: verbosify(["dx", "dy"], function() {
            var dx = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0];
            var dy = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
            if (dx !== 0 || dx !== 0) {
              var _ret = function() {
                var prev = [0, 0];
                var matrix = [1, 0, 0, 1, dx, dy];
                var newInstructions = _instructions.map(function(instruction) {
                  var p = transformParams(instruction, matrix, prev);
                  prev = point(instruction, prev);
                  return p;
                });
                return { v: Path2(newInstructions) };
              }();
              if (typeof _ret === "object")
                return _ret.v;
            } else {
              return Path2(_instructions);
            }
          }),
          rotate: verbosify(["angle", "rx", "ry"], function(angle) {
            var rx = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
            var ry = arguments.length <= 2 || arguments[2] === void 0 ? 0 : arguments[2];
            if (angle !== 0) {
              var _ret2 = function() {
                var prev = void 0;
                var matrix = void 0;
                var newInstructions = _instructions;
                if (rx !== 0 && ry !== 0) {
                  prev = [0, 0];
                  matrix = [1, 0, 0, 1, -rx, -ry];
                  newInstructions = newInstructions.map(function(instruction) {
                    var p = transformParams(instruction, matrix, prev);
                    prev = point(instruction, prev);
                    return p;
                  });
                }
                var rad = angle * Math.PI / 180;
                var cos = Math.cos(rad);
                var sin = Math.sin(rad);
                prev = [0, 0];
                matrix = [cos, sin, -sin, cos, 0, 0];
                newInstructions = newInstructions.map(function(instruction) {
                  var p = transformParams(instruction, matrix, prev);
                  prev = point(instruction, prev);
                  return p;
                });
                if (rx !== 0 && ry !== 0) {
                  prev = [0, 0];
                  matrix = [1, 0, 0, 1, rx, ry];
                  newInstructions = newInstructions.map(function(instruction) {
                    var p = transformParams(instruction, matrix, prev);
                    prev = point(instruction, prev);
                    return p;
                  });
                }
                return { v: Path2(newInstructions) };
              }();
              if (typeof _ret2 === "object")
                return _ret2.v;
            } else {
              return Path2(_instructions);
            }
          }),
          scale: verbosify(["sx", "sy"], function() {
            var sx = arguments.length <= 0 || arguments[0] === void 0 ? 1 : arguments[0];
            var sy = arguments.length <= 1 || arguments[1] === void 0 ? sx : arguments[1];
            return function() {
              if (sx !== 1 || sy !== 1) {
                var _ret3 = function() {
                  var prev = [0, 0];
                  var matrix = [sx, 0, 0, sy, 0, 0];
                  var newInstructions = _instructions.map(function(instruction) {
                    var p = transformParams(instruction, matrix, prev);
                    prev = point(instruction, prev);
                    return p;
                  });
                  return { v: Path2(newInstructions) };
                }();
                if (typeof _ret3 === "object")
                  return _ret3.v;
              } else {
                return Path2(_instructions);
              }
            }();
          }),
          shearX: verbosify(["angle"], function() {
            var angle = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0];
            if (angle !== 0) {
              var _ret4 = function() {
                var prev = [0, 0];
                var matrix = [1, 0, Math.tan(angle * Math.PI / 180), 1, 0, 0];
                var newInstructions = _instructions.map(function(instruction) {
                  var p = transformParams(instruction, matrix, prev);
                  prev = point(instruction, prev);
                  return p;
                });
                return { v: Path2(newInstructions) };
              }();
              if (typeof _ret4 === "object")
                return _ret4.v;
            } else {
              return Path2(_instructions);
            }
          }),
          shearY: verbosify(["angle"], function() {
            var angle = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0];
            if (angle !== 0) {
              var _ret5 = function() {
                var prev = [0, 0];
                var matrix = [1, Math.tan(angle * Math.PI / 180), 0, 1, 0, 0];
                var newInstructions = _instructions.map(function(instruction) {
                  var p = transformParams(instruction, matrix, prev);
                  prev = point(instruction, prev);
                  return p;
                });
                return { v: Path2(newInstructions) };
              }();
              if (typeof _ret5 === "object")
                return _ret5.v;
            } else {
              return Path2(_instructions);
            }
          }),
          print: function print() {
            return _instructions.map(printInstrunction).join(" ");
          },
          toString: function toString() {
            return (void 0).print();
          },
          points: function points() {
            var ps = [];
            var prev = [0, 0];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = void 0;
            try {
              for (var _iterator = _instructions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var instruction = _step.value;
                var p = point(instruction, prev);
                prev = p;
                if (p) {
                  ps.push(p);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"]) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
            return ps;
          },
          instructions: function instructions() {
            return _instructions.slice(0, _instructions.length);
          },
          connect: function connect(path) {
            var ps = this.points();
            var last = ps[ps.length - 1];
            var first = path.points()[0];
            var newInstructions = void 0;
            if (_instructions[_instructions.length - 1].command !== "Z") {
              newInstructions = path.instructions().slice(1);
              if (!areEqualPoints(last, first)) {
                newInstructions.unshift({ command: "L", params: first });
              }
            } else {
              newInstructions = path.instructions();
            }
            return Path2(this.instructions().concat(newInstructions));
          }
        };
      };
      exports2["default"] = function() {
        return Path();
      };
      module2.exports = exports2["default"];
    },
    function(module2, exports2, __nested_webpack_require_185444__) {
      var JumpPointFinderBase = __nested_webpack_require_185444__(14);
      var DiagonalMovement = __nested_webpack_require_185444__(2);
      function JPFMoveDiagonallyIfAtMostOneObstacle(opt) {
        JumpPointFinderBase.call(this, opt);
      }
      JPFMoveDiagonallyIfAtMostOneObstacle.prototype = new JumpPointFinderBase();
      JPFMoveDiagonallyIfAtMostOneObstacle.prototype.constructor = JPFMoveDiagonallyIfAtMostOneObstacle;
      JPFMoveDiagonallyIfAtMostOneObstacle.prototype._jump = function(x, y, px, py) {
        var grid = this.grid, dx = x - px, dy = y - py;
        if (!grid.isWalkableAt(x, y)) {
          return null;
        }
        if (this.trackJumpRecursion === true) {
          grid.getNodeAt(x, y).tested = true;
        }
        if (grid.getNodeAt(x, y) === this.endNode) {
          return [x, y];
        }
        if (dx !== 0 && dy !== 0) {
          if (grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y) || grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy)) {
            return [x, y];
          }
          if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
          }
        } else {
          if (dx !== 0) {
            if (grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1) || grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1)) {
              return [x, y];
            }
          } else {
            if (grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y) || grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y)) {
              return [x, y];
            }
          }
        }
        if (grid.isWalkableAt(x + dx, y) || grid.isWalkableAt(x, y + dy)) {
          return this._jump(x + dx, y + dy, x, y);
        } else {
          return null;
        }
      };
      JPFMoveDiagonallyIfAtMostOneObstacle.prototype._findNeighbors = function(node) {
        var parent = node.parent, x = node.x, y = node.y, grid = this.grid, px, py, nx, ny, dx, dy, neighbors = [], neighborNodes, neighborNode, i, l;
        if (parent) {
          px = parent.x;
          py = parent.y;
          dx = (x - px) / Math.max(Math.abs(x - px), 1);
          dy = (y - py) / Math.max(Math.abs(y - py), 1);
          if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
              neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
              neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x, y + dy) || grid.isWalkableAt(x + dx, y)) {
              neighbors.push([x + dx, y + dy]);
            }
            if (!grid.isWalkableAt(x - dx, y) && grid.isWalkableAt(x, y + dy)) {
              neighbors.push([x - dx, y + dy]);
            }
            if (!grid.isWalkableAt(x, y - dy) && grid.isWalkableAt(x + dx, y)) {
              neighbors.push([x + dx, y - dy]);
            }
          } else {
            if (dx === 0) {
              if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
                if (!grid.isWalkableAt(x + 1, y)) {
                  neighbors.push([x + 1, y + dy]);
                }
                if (!grid.isWalkableAt(x - 1, y)) {
                  neighbors.push([x - 1, y + dy]);
                }
              }
            } else {
              if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
                if (!grid.isWalkableAt(x, y + 1)) {
                  neighbors.push([x + dx, y + 1]);
                }
                if (!grid.isWalkableAt(x, y - 1)) {
                  neighbors.push([x + dx, y - 1]);
                }
              }
            }
          }
        } else {
          neighborNodes = grid.getNeighbors(node, DiagonalMovement.IfAtMostOneObstacle);
          for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
          }
        }
        return neighbors;
      };
      module2.exports = JPFMoveDiagonallyIfAtMostOneObstacle;
    },
    function(module2, exports2, __nested_webpack_require_189620__) {
      var JumpPointFinderBase = __nested_webpack_require_189620__(14);
      var DiagonalMovement = __nested_webpack_require_189620__(2);
      function JPFMoveDiagonallyIfNoObstacles(opt) {
        JumpPointFinderBase.call(this, opt);
      }
      JPFMoveDiagonallyIfNoObstacles.prototype = new JumpPointFinderBase();
      JPFMoveDiagonallyIfNoObstacles.prototype.constructor = JPFMoveDiagonallyIfNoObstacles;
      JPFMoveDiagonallyIfNoObstacles.prototype._jump = function(x, y, px, py) {
        var grid = this.grid, dx = x - px, dy = y - py;
        if (!grid.isWalkableAt(x, y)) {
          return null;
        }
        if (this.trackJumpRecursion === true) {
          grid.getNodeAt(x, y).tested = true;
        }
        if (grid.getNodeAt(x, y) === this.endNode) {
          return [x, y];
        }
        if (dx !== 0 && dy !== 0) {
          if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
          }
        } else {
          if (dx !== 0) {
            if (grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1) || grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1)) {
              return [x, y];
            }
          } else if (dy !== 0) {
            if (grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy) || grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy)) {
              return [x, y];
            }
          }
        }
        if (grid.isWalkableAt(x + dx, y) && grid.isWalkableAt(x, y + dy)) {
          return this._jump(x + dx, y + dy, x, y);
        } else {
          return null;
        }
      };
      JPFMoveDiagonallyIfNoObstacles.prototype._findNeighbors = function(node) {
        var parent = node.parent, x = node.x, y = node.y, grid = this.grid, px, py, nx, ny, dx, dy, neighbors = [], neighborNodes, neighborNode, i, l;
        if (parent) {
          px = parent.x;
          py = parent.y;
          dx = (x - px) / Math.max(Math.abs(x - px), 1);
          dy = (y - py) / Math.max(Math.abs(y - py), 1);
          if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
              neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
              neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x, y + dy) && grid.isWalkableAt(x + dx, y)) {
              neighbors.push([x + dx, y + dy]);
            }
          } else {
            var isNextWalkable;
            if (dx !== 0) {
              isNextWalkable = grid.isWalkableAt(x + dx, y);
              var isTopWalkable = grid.isWalkableAt(x, y + 1);
              var isBottomWalkable = grid.isWalkableAt(x, y - 1);
              if (isNextWalkable) {
                neighbors.push([x + dx, y]);
                if (isTopWalkable) {
                  neighbors.push([x + dx, y + 1]);
                }
                if (isBottomWalkable) {
                  neighbors.push([x + dx, y - 1]);
                }
              }
              if (isTopWalkable) {
                neighbors.push([x, y + 1]);
              }
              if (isBottomWalkable) {
                neighbors.push([x, y - 1]);
              }
            } else if (dy !== 0) {
              isNextWalkable = grid.isWalkableAt(x, y + dy);
              var isRightWalkable = grid.isWalkableAt(x + 1, y);
              var isLeftWalkable = grid.isWalkableAt(x - 1, y);
              if (isNextWalkable) {
                neighbors.push([x, y + dy]);
                if (isRightWalkable) {
                  neighbors.push([x + 1, y + dy]);
                }
                if (isLeftWalkable) {
                  neighbors.push([x - 1, y + dy]);
                }
              }
              if (isRightWalkable) {
                neighbors.push([x + 1, y]);
              }
              if (isLeftWalkable) {
                neighbors.push([x - 1, y]);
              }
            }
          }
        } else {
          neighborNodes = grid.getNeighbors(node, DiagonalMovement.OnlyWhenNoObstacles);
          for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
          }
        }
        return neighbors;
      };
      module2.exports = JPFMoveDiagonallyIfNoObstacles;
    },
    function(module2, exports2, __nested_webpack_require_194019__) {
      var JumpPointFinderBase = __nested_webpack_require_194019__(14);
      var DiagonalMovement = __nested_webpack_require_194019__(2);
      function JPFAlwaysMoveDiagonally(opt) {
        JumpPointFinderBase.call(this, opt);
      }
      JPFAlwaysMoveDiagonally.prototype = new JumpPointFinderBase();
      JPFAlwaysMoveDiagonally.prototype.constructor = JPFAlwaysMoveDiagonally;
      JPFAlwaysMoveDiagonally.prototype._jump = function(x, y, px, py) {
        var grid = this.grid, dx = x - px, dy = y - py;
        if (!grid.isWalkableAt(x, y)) {
          return null;
        }
        if (this.trackJumpRecursion === true) {
          grid.getNodeAt(x, y).tested = true;
        }
        if (grid.getNodeAt(x, y) === this.endNode) {
          return [x, y];
        }
        if (dx !== 0 && dy !== 0) {
          if (grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y) || grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy)) {
            return [x, y];
          }
          if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
          }
        } else {
          if (dx !== 0) {
            if (grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1) || grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1)) {
              return [x, y];
            }
          } else {
            if (grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y) || grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y)) {
              return [x, y];
            }
          }
        }
        return this._jump(x + dx, y + dy, x, y);
      };
      JPFAlwaysMoveDiagonally.prototype._findNeighbors = function(node) {
        var parent = node.parent, x = node.x, y = node.y, grid = this.grid, px, py, nx, ny, dx, dy, neighbors = [], neighborNodes, neighborNode, i, l;
        if (parent) {
          px = parent.x;
          py = parent.y;
          dx = (x - px) / Math.max(Math.abs(x - px), 1);
          dy = (y - py) / Math.max(Math.abs(y - py), 1);
          if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
              neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
              neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x + dx, y + dy)) {
              neighbors.push([x + dx, y + dy]);
            }
            if (!grid.isWalkableAt(x - dx, y)) {
              neighbors.push([x - dx, y + dy]);
            }
            if (!grid.isWalkableAt(x, y - dy)) {
              neighbors.push([x + dx, y - dy]);
            }
          } else {
            if (dx === 0) {
              if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
              }
              if (!grid.isWalkableAt(x + 1, y)) {
                neighbors.push([x + 1, y + dy]);
              }
              if (!grid.isWalkableAt(x - 1, y)) {
                neighbors.push([x - 1, y + dy]);
              }
            } else {
              if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
              }
              if (!grid.isWalkableAt(x, y + 1)) {
                neighbors.push([x + dx, y + 1]);
              }
              if (!grid.isWalkableAt(x, y - 1)) {
                neighbors.push([x + dx, y - 1]);
              }
            }
          }
        } else {
          neighborNodes = grid.getNeighbors(node, DiagonalMovement.Always);
          for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
          }
        }
        return neighbors;
      };
      module2.exports = JPFAlwaysMoveDiagonally;
    },
    function(module2, exports2, __nested_webpack_require_197848__) {
      var JumpPointFinderBase = __nested_webpack_require_197848__(14);
      var DiagonalMovement = __nested_webpack_require_197848__(2);
      function JPFNeverMoveDiagonally(opt) {
        JumpPointFinderBase.call(this, opt);
      }
      JPFNeverMoveDiagonally.prototype = new JumpPointFinderBase();
      JPFNeverMoveDiagonally.prototype.constructor = JPFNeverMoveDiagonally;
      JPFNeverMoveDiagonally.prototype._jump = function(x, y, px, py) {
        var grid = this.grid, dx = x - px, dy = y - py;
        if (!grid.isWalkableAt(x, y)) {
          return null;
        }
        if (this.trackJumpRecursion === true) {
          grid.getNodeAt(x, y).tested = true;
        }
        if (grid.getNodeAt(x, y) === this.endNode) {
          return [x, y];
        }
        if (dx !== 0) {
          if (grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1) || grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1)) {
            return [x, y];
          }
        } else if (dy !== 0) {
          if (grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy) || grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy)) {
            return [x, y];
          }
          if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
            return [x, y];
          }
        } else {
          throw new Error("Only horizontal and vertical movements are allowed");
        }
        return this._jump(x + dx, y + dy, x, y);
      };
      JPFNeverMoveDiagonally.prototype._findNeighbors = function(node) {
        var parent = node.parent, x = node.x, y = node.y, grid = this.grid, px, py, nx, ny, dx, dy, neighbors = [], neighborNodes, neighborNode, i, l;
        if (parent) {
          px = parent.x;
          py = parent.y;
          dx = (x - px) / Math.max(Math.abs(x - px), 1);
          dy = (y - py) / Math.max(Math.abs(y - py), 1);
          if (dx !== 0) {
            if (grid.isWalkableAt(x, y - 1)) {
              neighbors.push([x, y - 1]);
            }
            if (grid.isWalkableAt(x, y + 1)) {
              neighbors.push([x, y + 1]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
              neighbors.push([x + dx, y]);
            }
          } else if (dy !== 0) {
            if (grid.isWalkableAt(x - 1, y)) {
              neighbors.push([x - 1, y]);
            }
            if (grid.isWalkableAt(x + 1, y)) {
              neighbors.push([x + 1, y]);
            }
            if (grid.isWalkableAt(x, y + dy)) {
              neighbors.push([x, y + dy]);
            }
          }
        } else {
          neighborNodes = grid.getNeighbors(node, DiagonalMovement.Never);
          for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
          }
        }
        return neighbors;
      };
      module2.exports = JPFNeverMoveDiagonally;
    },
    function(module2, exports2, __nested_webpack_require_200837__) {
      var DiagonalMovement = __nested_webpack_require_200837__(2);
      var JPFNeverMoveDiagonally = __nested_webpack_require_200837__(55);
      var JPFAlwaysMoveDiagonally = __nested_webpack_require_200837__(54);
      var JPFMoveDiagonallyIfNoObstacles = __nested_webpack_require_200837__(53);
      var JPFMoveDiagonallyIfAtMostOneObstacle = __nested_webpack_require_200837__(52);
      function JumpPointFinder(opt) {
        opt = opt || {};
        if (opt.diagonalMovement === DiagonalMovement.Never) {
          return new JPFNeverMoveDiagonally(opt);
        } else if (opt.diagonalMovement === DiagonalMovement.Always) {
          return new JPFAlwaysMoveDiagonally(opt);
        } else if (opt.diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
          return new JPFMoveDiagonallyIfNoObstacles(opt);
        } else {
          return new JPFMoveDiagonallyIfAtMostOneObstacle(opt);
        }
      }
      module2.exports = JumpPointFinder;
    },
    function(module2, exports2, __nested_webpack_require_201795__) {
      var Util = __nested_webpack_require_201795__(4);
      var Heuristic = __nested_webpack_require_201795__(10);
      var Node = __nested_webpack_require_201795__(24);
      var DiagonalMovement = __nested_webpack_require_201795__(2);
      function IDAStarFinder(opt) {
        opt = opt || {};
        this.allowDiagonal = opt.allowDiagonal;
        this.dontCrossCorners = opt.dontCrossCorners;
        this.diagonalMovement = opt.diagonalMovement;
        this.heuristic = opt.heuristic || Heuristic.manhattan;
        this.weight = opt.weight || 1;
        this.trackRecursion = opt.trackRecursion || false;
        this.timeLimit = opt.timeLimit || Infinity;
        if (!this.diagonalMovement) {
          if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
          } else {
            if (this.dontCrossCorners) {
              this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
              this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
          }
        }
        if (this.diagonalMovement === DiagonalMovement.Never) {
          this.heuristic = opt.heuristic || Heuristic.manhattan;
        } else {
          this.heuristic = opt.heuristic || Heuristic.octile;
        }
      }
      IDAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
        var nodesVisited = 0;
        var startTime = new Date().getTime();
        var h = function(a, b) {
          return this.heuristic(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
        }.bind(this);
        var cost = function(a, b) {
          return a.x === b.x || a.y === b.y ? 1 : Math.SQRT2;
        };
        var search = function(node, g, cutoff, route2, depth) {
          nodesVisited++;
          if (this.timeLimit > 0 && new Date().getTime() - startTime > this.timeLimit * 1e3) {
            return Infinity;
          }
          var f = g + h(node, end) * this.weight;
          if (f > cutoff) {
            return f;
          }
          if (node == end) {
            route2[depth] = [node.x, node.y];
            return node;
          }
          var min, t2, k, neighbour;
          var neighbours = grid.getNeighbors(node, this.diagonalMovement);
          for (k = 0, min = Infinity; neighbour = neighbours[k]; ++k) {
            if (this.trackRecursion) {
              neighbour.retainCount = neighbour.retainCount + 1 || 1;
              if (neighbour.tested !== true) {
                neighbour.tested = true;
              }
            }
            t2 = search(neighbour, g + cost(node, neighbour), cutoff, route2, depth + 1);
            if (t2 instanceof Node) {
              route2[depth] = [node.x, node.y];
              return t2;
            }
            if (this.trackRecursion && --neighbour.retainCount === 0) {
              neighbour.tested = false;
            }
            if (t2 < min) {
              min = t2;
            }
          }
          return min;
        }.bind(this);
        var start = grid.getNodeAt(startX, startY);
        var end = grid.getNodeAt(endX, endY);
        var cutOff = h(start, end);
        var j, route, t;
        for (j = 0; true; ++j) {
          route = [];
          t = search(start, 0, cutOff, route, 0);
          if (t === Infinity) {
            return [];
          }
          if (t instanceof Node) {
            return route;
          }
          cutOff = t;
        }
        return [];
      };
      module2.exports = IDAStarFinder;
    },
    function(module2, exports2, __nested_webpack_require_205328__) {
      var BiAStarFinder = __nested_webpack_require_205328__(22);
      function BiDijkstraFinder(opt) {
        BiAStarFinder.call(this, opt);
        this.heuristic = function(dx, dy) {
          return 0;
        };
      }
      BiDijkstraFinder.prototype = new BiAStarFinder();
      BiDijkstraFinder.prototype.constructor = BiDijkstraFinder;
      module2.exports = BiDijkstraFinder;
    },
    function(module2, exports2, __nested_webpack_require_205765__) {
      var Util = __nested_webpack_require_205765__(4);
      var DiagonalMovement = __nested_webpack_require_205765__(2);
      function BiBreadthFirstFinder(opt) {
        opt = opt || {};
        this.allowDiagonal = opt.allowDiagonal;
        this.dontCrossCorners = opt.dontCrossCorners;
        this.diagonalMovement = opt.diagonalMovement;
        if (!this.diagonalMovement) {
          if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
          } else {
            if (this.dontCrossCorners) {
              this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
              this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
          }
        }
      }
      BiBreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
        var startNode = grid.getNodeAt(startX, startY), endNode = grid.getNodeAt(endX, endY), startOpenList = [], endOpenList = [], neighbors, neighbor, node, diagonalMovement = this.diagonalMovement, BY_START = 0, BY_END = 1, i, l;
        startOpenList.push(startNode);
        startNode.opened = true;
        startNode.by = BY_START;
        endOpenList.push(endNode);
        endNode.opened = true;
        endNode.by = BY_END;
        while (startOpenList.length && endOpenList.length) {
          node = startOpenList.shift();
          node.closed = true;
          neighbors = grid.getNeighbors(node, diagonalMovement);
          for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];
            if (neighbor.closed) {
              continue;
            }
            if (neighbor.opened) {
              if (neighbor.by === BY_END) {
                return Util.biBacktrace(node, neighbor);
              }
              continue;
            }
            startOpenList.push(neighbor);
            neighbor.parent = node;
            neighbor.opened = true;
            neighbor.by = BY_START;
          }
          node = endOpenList.shift();
          node.closed = true;
          neighbors = grid.getNeighbors(node, diagonalMovement);
          for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];
            if (neighbor.closed) {
              continue;
            }
            if (neighbor.opened) {
              if (neighbor.by === BY_START) {
                return Util.biBacktrace(neighbor, node);
              }
              continue;
            }
            endOpenList.push(neighbor);
            neighbor.parent = node;
            neighbor.opened = true;
            neighbor.by = BY_END;
          }
        }
        return [];
      };
      module2.exports = BiBreadthFirstFinder;
    },
    function(module2, exports2, __nested_webpack_require_208534__) {
      var BiAStarFinder = __nested_webpack_require_208534__(22);
      function BiBestFirstFinder(opt) {
        BiAStarFinder.call(this, opt);
        var orig = this.heuristic;
        this.heuristic = function(dx, dy) {
          return orig(dx, dy) * 1e6;
        };
      }
      BiBestFirstFinder.prototype = new BiAStarFinder();
      BiBestFirstFinder.prototype.constructor = BiBestFirstFinder;
      module2.exports = BiBestFirstFinder;
    },
    function(module2, exports2, __nested_webpack_require_209028__) {
      var AStarFinder = __nested_webpack_require_209028__(23);
      function DijkstraFinder(opt) {
        AStarFinder.call(this, opt);
        this.heuristic = function(dx, dy) {
          return 0;
        };
      }
      DijkstraFinder.prototype = new AStarFinder();
      DijkstraFinder.prototype.constructor = DijkstraFinder;
      module2.exports = DijkstraFinder;
    },
    function(module2, exports2, __nested_webpack_require_209449__) {
      var Util = __nested_webpack_require_209449__(4);
      var DiagonalMovement = __nested_webpack_require_209449__(2);
      function BreadthFirstFinder(opt) {
        opt = opt || {};
        this.allowDiagonal = opt.allowDiagonal;
        this.dontCrossCorners = opt.dontCrossCorners;
        this.diagonalMovement = opt.diagonalMovement;
        if (!this.diagonalMovement) {
          if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
          } else {
            if (this.dontCrossCorners) {
              this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
              this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
          }
        }
      }
      BreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
        var openList = [], diagonalMovement = this.diagonalMovement, startNode = grid.getNodeAt(startX, startY), endNode = grid.getNodeAt(endX, endY), neighbors, neighbor, node, i, l;
        openList.push(startNode);
        startNode.opened = true;
        while (openList.length) {
          node = openList.shift();
          node.closed = true;
          if (node === endNode) {
            return Util.backtrace(endNode);
          }
          neighbors = grid.getNeighbors(node, diagonalMovement);
          for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];
            if (neighbor.closed || neighbor.opened) {
              continue;
            }
            openList.push(neighbor);
            neighbor.opened = true;
            neighbor.parent = node;
          }
        }
        return [];
      };
      module2.exports = BreadthFirstFinder;
    },
    function(module2, exports2, __nested_webpack_require_211225__) {
      var AStarFinder = __nested_webpack_require_211225__(23);
      function BestFirstFinder(opt) {
        AStarFinder.call(this, opt);
        var orig = this.heuristic;
        this.heuristic = function(dx, dy) {
          return orig(dx, dy) * 1e6;
        };
      }
      BestFirstFinder.prototype = new AStarFinder();
      BestFirstFinder.prototype.constructor = BestFirstFinder;
      module2.exports = BestFirstFinder;
    },
    function(module2, exports2, __nested_webpack_require_211703__) {
      var Node = __nested_webpack_require_211703__(24);
      var DiagonalMovement = __nested_webpack_require_211703__(2);
      function Grid(width_or_matrix, height, matrix) {
        var width;
        if (typeof width_or_matrix !== "object") {
          width = width_or_matrix;
        } else {
          height = width_or_matrix.length;
          width = width_or_matrix[0].length;
          matrix = width_or_matrix;
        }
        this.width = width;
        this.height = height;
        this.nodes = this._buildNodes(width, height, matrix);
      }
      Grid.prototype._buildNodes = function(width, height, matrix) {
        var i, j, nodes = new Array(height);
        for (i = 0; i < height; ++i) {
          nodes[i] = new Array(width);
          for (j = 0; j < width; ++j) {
            nodes[i][j] = new Node(j, i);
          }
        }
        if (matrix === void 0) {
          return nodes;
        }
        if (matrix.length !== height || matrix[0].length !== width) {
          throw new Error("Matrix size does not fit");
        }
        for (i = 0; i < height; ++i) {
          for (j = 0; j < width; ++j) {
            if (matrix[i][j]) {
              nodes[i][j].walkable = false;
            }
          }
        }
        return nodes;
      };
      Grid.prototype.getNodeAt = function(x, y) {
        return this.nodes[y][x];
      };
      Grid.prototype.isWalkableAt = function(x, y) {
        return this.isInside(x, y) && this.nodes[y][x].walkable;
      };
      Grid.prototype.isInside = function(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
      };
      Grid.prototype.setWalkableAt = function(x, y, walkable) {
        this.nodes[y][x].walkable = walkable;
      };
      Grid.prototype.getNeighbors = function(node, diagonalMovement) {
        var x = node.x, y = node.y, neighbors = [], s0 = false, d0 = false, s1 = false, d1 = false, s2 = false, d2 = false, s3 = false, d3 = false, nodes = this.nodes;
        if (this.isWalkableAt(x, y - 1)) {
          neighbors.push(nodes[y - 1][x]);
          s0 = true;
        }
        if (this.isWalkableAt(x + 1, y)) {
          neighbors.push(nodes[y][x + 1]);
          s1 = true;
        }
        if (this.isWalkableAt(x, y + 1)) {
          neighbors.push(nodes[y + 1][x]);
          s2 = true;
        }
        if (this.isWalkableAt(x - 1, y)) {
          neighbors.push(nodes[y][x - 1]);
          s3 = true;
        }
        if (diagonalMovement === DiagonalMovement.Never) {
          return neighbors;
        }
        if (diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
          d0 = s3 && s0;
          d1 = s0 && s1;
          d2 = s1 && s2;
          d3 = s2 && s3;
        } else if (diagonalMovement === DiagonalMovement.IfAtMostOneObstacle) {
          d0 = s3 || s0;
          d1 = s0 || s1;
          d2 = s1 || s2;
          d3 = s2 || s3;
        } else if (diagonalMovement === DiagonalMovement.Always) {
          d0 = true;
          d1 = true;
          d2 = true;
          d3 = true;
        } else {
          throw new Error("Incorrect value of diagonalMovement");
        }
        if (d0 && this.isWalkableAt(x - 1, y - 1)) {
          neighbors.push(nodes[y - 1][x - 1]);
        }
        if (d1 && this.isWalkableAt(x + 1, y - 1)) {
          neighbors.push(nodes[y - 1][x + 1]);
        }
        if (d2 && this.isWalkableAt(x + 1, y + 1)) {
          neighbors.push(nodes[y + 1][x + 1]);
        }
        if (d3 && this.isWalkableAt(x - 1, y + 1)) {
          neighbors.push(nodes[y + 1][x - 1]);
        }
        return neighbors;
      };
      Grid.prototype.clone = function() {
        var i, j, width = this.width, height = this.height, thisNodes = this.nodes, newGrid = new Grid(width, height), newNodes = new Array(height);
        for (i = 0; i < height; ++i) {
          newNodes[i] = new Array(width);
          for (j = 0; j < width; ++j) {
            newNodes[i][j] = new Node(j, i, thisNodes[i][j].walkable);
          }
        }
        newGrid.nodes = newNodes;
        return newGrid;
      };
      module2.exports = Grid;
    },
    function(module2, exports2) {
      module2.exports = function(module3) {
        if (!module3.webpackPolyfill) {
          module3.deprecate = function() {
          };
          module3.paths = [];
          if (!module3.children)
            module3.children = [];
          Object.defineProperty(module3, "loaded", {
            enumerable: true,
            get: function() {
              return module3.l;
            }
          });
          Object.defineProperty(module3, "id", {
            enumerable: true,
            get: function() {
              return module3.i;
            }
          });
          module3.webpackPolyfill = 1;
        }
        return module3;
      };
    },
    function(module2, exports2, __nested_webpack_require_216566__) {
      (function(module3) {
        (function() {
          var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;
          floor = Math.floor, min = Math.min;
          defaultCmp = function(x, y) {
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          };
          insort = function(a, x, lo, hi, cmp) {
            var mid;
            if (lo == null) {
              lo = 0;
            }
            if (cmp == null) {
              cmp = defaultCmp;
            }
            if (lo < 0) {
              throw new Error("lo must be non-negative");
            }
            if (hi == null) {
              hi = a.length;
            }
            while (lo < hi) {
              mid = floor((lo + hi) / 2);
              if (cmp(x, a[mid]) < 0) {
                hi = mid;
              } else {
                lo = mid + 1;
              }
            }
            return [].splice.apply(a, [lo, lo - lo].concat(x)), x;
          };
          heappush = function(array, item, cmp) {
            if (cmp == null) {
              cmp = defaultCmp;
            }
            array.push(item);
            return _siftdown(array, 0, array.length - 1, cmp);
          };
          heappop = function(array, cmp) {
            var lastelt, returnitem;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            lastelt = array.pop();
            if (array.length) {
              returnitem = array[0];
              array[0] = lastelt;
              _siftup(array, 0, cmp);
            } else {
              returnitem = lastelt;
            }
            return returnitem;
          };
          heapreplace = function(array, item, cmp) {
            var returnitem;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            returnitem = array[0];
            array[0] = item;
            _siftup(array, 0, cmp);
            return returnitem;
          };
          heappushpop = function(array, item, cmp) {
            var _ref;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            if (array.length && cmp(array[0], item) < 0) {
              _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
              _siftup(array, 0, cmp);
            }
            return item;
          };
          heapify = function(array, cmp) {
            var i, _i, _j, _len, _ref, _ref1, _results, _results1;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            _ref1 = function() {
              _results1 = [];
              for (var _j2 = 0, _ref2 = floor(array.length / 2); 0 <= _ref2 ? _j2 < _ref2 : _j2 > _ref2; 0 <= _ref2 ? _j2++ : _j2--) {
                _results1.push(_j2);
              }
              return _results1;
            }.apply(this).reverse();
            _results = [];
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              i = _ref1[_i];
              _results.push(_siftup(array, i, cmp));
            }
            return _results;
          };
          updateItem = function(array, item, cmp) {
            var pos;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            pos = array.indexOf(item);
            if (pos === -1) {
              return;
            }
            _siftdown(array, 0, pos, cmp);
            return _siftup(array, pos, cmp);
          };
          nlargest = function(array, n, cmp) {
            var elem, result, _i, _len, _ref;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            result = array.slice(0, n);
            if (!result.length) {
              return result;
            }
            heapify(result, cmp);
            _ref = array.slice(n);
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              elem = _ref[_i];
              heappushpop(result, elem, cmp);
            }
            return result.sort(cmp).reverse();
          };
          nsmallest = function(array, n, cmp) {
            var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            if (n * 10 <= array.length) {
              result = array.slice(0, n).sort(cmp);
              if (!result.length) {
                return result;
              }
              los = result[result.length - 1];
              _ref = array.slice(n);
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elem = _ref[_i];
                if (cmp(elem, los) < 0) {
                  insort(result, elem, 0, null, cmp);
                  result.pop();
                  los = result[result.length - 1];
                }
              }
              return result;
            }
            heapify(array, cmp);
            _results = [];
            for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
              _results.push(heappop(array, cmp));
            }
            return _results;
          };
          _siftdown = function(array, startpos, pos, cmp) {
            var newitem, parent, parentpos;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            newitem = array[pos];
            while (pos > startpos) {
              parentpos = pos - 1 >> 1;
              parent = array[parentpos];
              if (cmp(newitem, parent) < 0) {
                array[pos] = parent;
                pos = parentpos;
                continue;
              }
              break;
            }
            return array[pos] = newitem;
          };
          _siftup = function(array, pos, cmp) {
            var childpos, endpos, newitem, rightpos, startpos;
            if (cmp == null) {
              cmp = defaultCmp;
            }
            endpos = array.length;
            startpos = pos;
            newitem = array[pos];
            childpos = 2 * pos + 1;
            while (childpos < endpos) {
              rightpos = childpos + 1;
              if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
                childpos = rightpos;
              }
              array[pos] = array[childpos];
              pos = childpos;
              childpos = 2 * pos + 1;
            }
            array[pos] = newitem;
            return _siftdown(array, startpos, pos, cmp);
          };
          Heap = function() {
            Heap2.push = heappush;
            Heap2.pop = heappop;
            Heap2.replace = heapreplace;
            Heap2.pushpop = heappushpop;
            Heap2.heapify = heapify;
            Heap2.updateItem = updateItem;
            Heap2.nlargest = nlargest;
            Heap2.nsmallest = nsmallest;
            function Heap2(cmp) {
              this.cmp = cmp != null ? cmp : defaultCmp;
              this.nodes = [];
            }
            Heap2.prototype.push = function(x) {
              return heappush(this.nodes, x, this.cmp);
            };
            Heap2.prototype.pop = function() {
              return heappop(this.nodes, this.cmp);
            };
            Heap2.prototype.peek = function() {
              return this.nodes[0];
            };
            Heap2.prototype.contains = function(x) {
              return this.nodes.indexOf(x) !== -1;
            };
            Heap2.prototype.replace = function(x) {
              return heapreplace(this.nodes, x, this.cmp);
            };
            Heap2.prototype.pushpop = function(x) {
              return heappushpop(this.nodes, x, this.cmp);
            };
            Heap2.prototype.heapify = function() {
              return heapify(this.nodes, this.cmp);
            };
            Heap2.prototype.updateItem = function(x) {
              return updateItem(this.nodes, x, this.cmp);
            };
            Heap2.prototype.clear = function() {
              return this.nodes = [];
            };
            Heap2.prototype.empty = function() {
              return this.nodes.length === 0;
            };
            Heap2.prototype.size = function() {
              return this.nodes.length;
            };
            Heap2.prototype.clone = function() {
              var heap;
              heap = new Heap2();
              heap.nodes = this.nodes.slice(0);
              return heap;
            };
            Heap2.prototype.toArray = function() {
              return this.nodes.slice(0);
            };
            Heap2.prototype.insert = Heap2.prototype.push;
            Heap2.prototype.top = Heap2.prototype.peek;
            Heap2.prototype.front = Heap2.prototype.peek;
            Heap2.prototype.has = Heap2.prototype.contains;
            Heap2.prototype.copy = Heap2.prototype.clone;
            return Heap2;
          }();
          if (typeof module3 !== "undefined" && module3 !== null ? module3.exports : void 0) {
            module3.exports = Heap;
          } else {
            window.Heap = Heap;
          }
        }).call(this);
      }).call(this, __nested_webpack_require_216566__(65)(module2));
    },
    function(module2, exports2, __nested_webpack_require_225903__) {
      module2.exports = {
        Heap: __nested_webpack_require_225903__(15),
        Node: __nested_webpack_require_225903__(24),
        Grid: __nested_webpack_require_225903__(64),
        Util: __nested_webpack_require_225903__(4),
        DiagonalMovement: __nested_webpack_require_225903__(2),
        Heuristic: __nested_webpack_require_225903__(10),
        AStarFinder: __nested_webpack_require_225903__(23),
        BestFirstFinder: __nested_webpack_require_225903__(63),
        BreadthFirstFinder: __nested_webpack_require_225903__(62),
        DijkstraFinder: __nested_webpack_require_225903__(61),
        BiAStarFinder: __nested_webpack_require_225903__(22),
        BiBestFirstFinder: __nested_webpack_require_225903__(60),
        BiBreadthFirstFinder: __nested_webpack_require_225903__(59),
        BiDijkstraFinder: __nested_webpack_require_225903__(58),
        IDAStarFinder: __nested_webpack_require_225903__(57),
        JumpPointFinder: __nested_webpack_require_225903__(56)
      };
    },
    function(module2, exports2, __nested_webpack_require_226750__) {
      module2.exports = __nested_webpack_require_226750__(67);
    },
    function(module2, exports2) {
      var proto = Element.prototype;
      var vendor = proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;
      module2.exports = match;
      function match(el, selector) {
        if (vendor)
          return vendor.call(el, selector);
        var nodes = el.parentNode.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; ++i) {
          if (nodes[i] == el)
            return true;
        }
        return false;
      }
    },
    function(module2, exports2, __nested_webpack_require_227431__) {
      var matches = __nested_webpack_require_227431__(69);
      module2.exports = function(element, selector, checkYoSelf) {
        var parent = checkYoSelf ? element : element.parentNode;
        while (parent && parent !== document) {
          if (matches(parent, selector))
            return parent;
          parent = parent.parentNode;
        }
      };
    }
  ]);
});


/***/ }),

/***/ 28282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var lib = __webpack_require__(82354);

module.exports = {
  Graph: lib.Graph,
  json: __webpack_require__(28974),
  alg: __webpack_require__(12440),
  version: lib.version
};


/***/ }),

/***/ 2842:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);

module.exports = components;

function components(g) {
  var visited = {};
  var cmpts = [];
  var cmpt;

  function dfs(v) {
    if (_.has(visited, v)) return;
    visited[v] = true;
    cmpt.push(v);
    _.each(g.successors(v), dfs);
    _.each(g.predecessors(v), dfs);
  }

  _.each(g.nodes(), function(v) {
    cmpt = [];
    dfs(v);
    if (cmpt.length) {
      cmpts.push(cmpt);
    }
  });

  return cmpts;
}


/***/ }),

/***/ 53984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);

module.exports = dfs;

/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */
function dfs(g, vs, order) {
  if (!_.isArray(vs)) {
    vs = [vs];
  }

  var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);

  var acc = [];
  var visited = {};
  _.each(vs, function(v) {
    if (!g.hasNode(v)) {
      throw new Error("Graph does not have node: " + v);
    }

    doDfs(g, v, order === "post", visited, navigation, acc);
  });
  return acc;
}

function doDfs(g, v, postorder, visited, navigation, acc) {
  if (!_.has(visited, v)) {
    visited[v] = true;

    if (!postorder) { acc.push(v); }
    _.each(navigation(v), function(w) {
      doDfs(g, w, postorder, visited, navigation, acc);
    });
    if (postorder) { acc.push(v); }
  }
}


/***/ }),

/***/ 84847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dijkstra = __webpack_require__(63763);
var _ = __webpack_require__(89126);

module.exports = dijkstraAll;

function dijkstraAll(g, weightFunc, edgeFunc) {
  return _.transform(g.nodes(), function(acc, v) {
    acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
  }, {});
}


/***/ }),

/***/ 63763:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);
var PriorityQueue = __webpack_require__(75639);

module.exports = dijkstra;

var DEFAULT_WEIGHT_FUNC = _.constant(1);

function dijkstra(g, source, weightFn, edgeFn) {
  return runDijkstra(g, String(source),
    weightFn || DEFAULT_WEIGHT_FUNC,
    edgeFn || function(v) { return g.outEdges(v); });
}

function runDijkstra(g, source, weightFn, edgeFn) {
  var results = {};
  var pq = new PriorityQueue();
  var v, vEntry;

  var updateNeighbors = function(edge) {
    var w = edge.v !== v ? edge.v : edge.w;
    var wEntry = results[w];
    var weight = weightFn(edge);
    var distance = vEntry.distance + weight;

    if (weight < 0) {
      throw new Error("dijkstra does not allow negative edge weights. " +
                      "Bad edge: " + edge + " Weight: " + weight);
    }

    if (distance < wEntry.distance) {
      wEntry.distance = distance;
      wEntry.predecessor = v;
      pq.decrease(w, distance);
    }
  };

  g.nodes().forEach(function(v) {
    var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
    results[v] = { distance: distance };
    pq.add(v, distance);
  });

  while (pq.size() > 0) {
    v = pq.removeMin();
    vEntry = results[v];
    if (vEntry.distance === Number.POSITIVE_INFINITY) {
      break;
    }

    edgeFn(v).forEach(updateNeighbors);
  }

  return results;
}


/***/ }),

/***/ 9096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);
var tarjan = __webpack_require__(5023);

module.exports = findCycles;

function findCycles(g) {
  return _.filter(tarjan(g), function(cmpt) {
    return cmpt.length > 1 || (cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]));
  });
}


/***/ }),

/***/ 38924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);

module.exports = floydWarshall;

var DEFAULT_WEIGHT_FUNC = _.constant(1);

function floydWarshall(g, weightFn, edgeFn) {
  return runFloydWarshall(g,
    weightFn || DEFAULT_WEIGHT_FUNC,
    edgeFn || function(v) { return g.outEdges(v); });
}

function runFloydWarshall(g, weightFn, edgeFn) {
  var results = {};
  var nodes = g.nodes();

  nodes.forEach(function(v) {
    results[v] = {};
    results[v][v] = { distance: 0 };
    nodes.forEach(function(w) {
      if (v !== w) {
        results[v][w] = { distance: Number.POSITIVE_INFINITY };
      }
    });
    edgeFn(v).forEach(function(edge) {
      var w = edge.v === v ? edge.w : edge.v;
      var d = weightFn(edge);
      results[v][w] = { distance: d, predecessor: v };
    });
  });

  nodes.forEach(function(k) {
    var rowK = results[k];
    nodes.forEach(function(i) {
      var rowI = results[i];
      nodes.forEach(function(j) {
        var ik = rowI[k];
        var kj = rowK[j];
        var ij = rowI[j];
        var altDistance = ik.distance + kj.distance;
        if (altDistance < ij.distance) {
          ij.distance = altDistance;
          ij.predecessor = kj.predecessor;
        }
      });
    });
  });

  return results;
}


/***/ }),

/***/ 12440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  components: __webpack_require__(2842),
  dijkstra: __webpack_require__(63763),
  dijkstraAll: __webpack_require__(84847),
  findCycles: __webpack_require__(9096),
  floydWarshall: __webpack_require__(38924),
  isAcyclic: __webpack_require__(62707),
  postorder: __webpack_require__(58828),
  preorder: __webpack_require__(92648),
  prim: __webpack_require__(80514),
  tarjan: __webpack_require__(5023),
  topsort: __webpack_require__(2166)
};


/***/ }),

/***/ 62707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var topsort = __webpack_require__(2166);

module.exports = isAcyclic;

function isAcyclic(g) {
  try {
    topsort(g);
  } catch (e) {
    if (e instanceof topsort.CycleException) {
      return false;
    }
    throw e;
  }
  return true;
}


/***/ }),

/***/ 58828:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dfs = __webpack_require__(53984);

module.exports = postorder;

function postorder(g, vs) {
  return dfs(g, vs, "post");
}


/***/ }),

/***/ 92648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dfs = __webpack_require__(53984);

module.exports = preorder;

function preorder(g, vs) {
  return dfs(g, vs, "pre");
}


/***/ }),

/***/ 80514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);
var Graph = __webpack_require__(30771);
var PriorityQueue = __webpack_require__(75639);

module.exports = prim;

function prim(g, weightFunc) {
  var result = new Graph();
  var parents = {};
  var pq = new PriorityQueue();
  var v;

  function updateNeighbors(edge) {
    var w = edge.v === v ? edge.w : edge.v;
    var pri = pq.priority(w);
    if (pri !== undefined) {
      var edgeWeight = weightFunc(edge);
      if (edgeWeight < pri) {
        parents[w] = v;
        pq.decrease(w, edgeWeight);
      }
    }
  }

  if (g.nodeCount() === 0) {
    return result;
  }

  _.each(g.nodes(), function(v) {
    pq.add(v, Number.POSITIVE_INFINITY);
    result.setNode(v);
  });

  // Start from an arbitrary node
  pq.decrease(g.nodes()[0], 0);

  var init = false;
  while (pq.size() > 0) {
    v = pq.removeMin();
    if (_.has(parents, v)) {
      result.setEdge(v, parents[v]);
    } else if (init) {
      throw new Error("Input graph is not connected: " + g);
    } else {
      init = true;
    }

    g.nodeEdges(v).forEach(updateNeighbors);
  }

  return result;
}


/***/ }),

/***/ 5023:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);

module.exports = tarjan;

function tarjan(g) {
  var index = 0;
  var stack = [];
  var visited = {}; // node id -> { onStack, lowlink, index }
  var results = [];

  function dfs(v) {
    var entry = visited[v] = {
      onStack: true,
      lowlink: index,
      index: index++
    };
    stack.push(v);

    g.successors(v).forEach(function(w) {
      if (!_.has(visited, w)) {
        dfs(w);
        entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
      } else if (visited[w].onStack) {
        entry.lowlink = Math.min(entry.lowlink, visited[w].index);
      }
    });

    if (entry.lowlink === entry.index) {
      var cmpt = [];
      var w;
      do {
        w = stack.pop();
        visited[w].onStack = false;
        cmpt.push(w);
      } while (v !== w);
      results.push(cmpt);
    }
  }

  g.nodes().forEach(function(v) {
    if (!_.has(visited, v)) {
      dfs(v);
    }
  });

  return results;
}


/***/ }),

/***/ 2166:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);

module.exports = topsort;
topsort.CycleException = CycleException;

function topsort(g) {
  var visited = {};
  var stack = {};
  var results = [];

  function visit(node) {
    if (_.has(stack, node)) {
      throw new CycleException();
    }

    if (!_.has(visited, node)) {
      stack[node] = true;
      visited[node] = true;
      _.each(g.predecessors(node), visit);
      delete stack[node];
      results.push(node);
    }
  }

  _.each(g.sinks(), visit);

  if (_.size(visited) !== g.nodeCount()) {
    throw new CycleException();
  }

  return results;
}

function CycleException() {}
CycleException.prototype = new Error(); // must be an instance of Error to pass testing

/***/ }),

/***/ 75639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);

module.exports = PriorityQueue;

/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */
function PriorityQueue() {
  this._arr = [];
  this._keyIndices = {};
}

/**
 * Returns the number of elements in the queue. Takes `O(1)` time.
 */
PriorityQueue.prototype.size = function() {
  return this._arr.length;
};

/**
 * Returns the keys that are in the queue. Takes `O(n)` time.
 */
PriorityQueue.prototype.keys = function() {
  return this._arr.map(function(x) { return x.key; });
};

/**
 * Returns `true` if **key** is in the queue and `false` if not.
 */
PriorityQueue.prototype.has = function(key) {
  return _.has(this._keyIndices, key);
};

/**
 * Returns the priority for **key**. If **key** is not present in the queue
 * then this function returns `undefined`. Takes `O(1)` time.
 *
 * @param {Object} key
 */
PriorityQueue.prototype.priority = function(key) {
  var index = this._keyIndices[key];
  if (index !== undefined) {
    return this._arr[index].priority;
  }
};

/**
 * Returns the key for the minimum element in this queue. If the queue is
 * empty this function throws an Error. Takes `O(1)` time.
 */
PriorityQueue.prototype.min = function() {
  if (this.size() === 0) {
    throw new Error("Queue underflow");
  }
  return this._arr[0].key;
};

/**
 * Inserts a new key into the priority queue. If the key already exists in
 * the queue this function returns `false`; otherwise it will return `true`.
 * Takes `O(n)` time.
 *
 * @param {Object} key the key to add
 * @param {Number} priority the initial priority for the key
 */
PriorityQueue.prototype.add = function(key, priority) {
  var keyIndices = this._keyIndices;
  key = String(key);
  if (!_.has(keyIndices, key)) {
    var arr = this._arr;
    var index = arr.length;
    keyIndices[key] = index;
    arr.push({key: key, priority: priority});
    this._decrease(index);
    return true;
  }
  return false;
};

/**
 * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
 */
PriorityQueue.prototype.removeMin = function() {
  this._swap(0, this._arr.length - 1);
  var min = this._arr.pop();
  delete this._keyIndices[min.key];
  this._heapify(0);
  return min.key;
};

/**
 * Decreases the priority for **key** to **priority**. If the new priority is
 * greater than the previous priority, this function will throw an Error.
 *
 * @param {Object} key the key for which to raise priority
 * @param {Number} priority the new priority for the key
 */
PriorityQueue.prototype.decrease = function(key, priority) {
  var index = this._keyIndices[key];
  if (priority > this._arr[index].priority) {
    throw new Error("New priority is greater than current priority. " +
        "Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
  }
  this._arr[index].priority = priority;
  this._decrease(index);
};

PriorityQueue.prototype._heapify = function(i) {
  var arr = this._arr;
  var l = 2 * i;
  var r = l + 1;
  var largest = i;
  if (l < arr.length) {
    largest = arr[l].priority < arr[largest].priority ? l : largest;
    if (r < arr.length) {
      largest = arr[r].priority < arr[largest].priority ? r : largest;
    }
    if (largest !== i) {
      this._swap(i, largest);
      this._heapify(largest);
    }
  }
};

PriorityQueue.prototype._decrease = function(index) {
  var arr = this._arr;
  var priority = arr[index].priority;
  var parent;
  while (index !== 0) {
    parent = index >> 1;
    if (arr[parent].priority < priority) {
      break;
    }
    this._swap(index, parent);
    index = parent;
  }
};

PriorityQueue.prototype._swap = function(i, j) {
  var arr = this._arr;
  var keyIndices = this._keyIndices;
  var origArrI = arr[i];
  var origArrJ = arr[j];
  arr[i] = origArrJ;
  arr[j] = origArrI;
  keyIndices[origArrJ.key] = i;
  keyIndices[origArrI.key] = j;
};


/***/ }),

/***/ 30771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(89126);

module.exports = Graph;

var DEFAULT_EDGE_NAME = "\x00";
var GRAPH_NODE = "\x00";
var EDGE_KEY_DELIM = "\x01";

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.

function Graph(opts) {
  this._isDirected = _.has(opts, "directed") ? opts.directed : true;
  this._isMultigraph = _.has(opts, "multigraph") ? opts.multigraph : false;
  this._isCompound = _.has(opts, "compound") ? opts.compound : false;

  // Label for the graph itself
  this._label = undefined;

  // Defaults to be set when creating a new node
  this._defaultNodeLabelFn = _.constant(undefined);

  // Defaults to be set when creating a new edge
  this._defaultEdgeLabelFn = _.constant(undefined);

  // v -> label
  this._nodes = {};

  if (this._isCompound) {
    // v -> parent
    this._parent = {};

    // v -> children
    this._children = {};
    this._children[GRAPH_NODE] = {};
  }

  // v -> edgeObj
  this._in = {};

  // u -> v -> Number
  this._preds = {};

  // v -> edgeObj
  this._out = {};

  // v -> w -> Number
  this._sucs = {};

  // e -> edgeObj
  this._edgeObjs = {};

  // e -> label
  this._edgeLabels = {};
}

/* Number of nodes in the graph. Should only be changed by the implementation. */
Graph.prototype._nodeCount = 0;

/* Number of edges in the graph. Should only be changed by the implementation. */
Graph.prototype._edgeCount = 0;


/* === Graph functions ========= */

Graph.prototype.isDirected = function() {
  return this._isDirected;
};

Graph.prototype.isMultigraph = function() {
  return this._isMultigraph;
};

Graph.prototype.isCompound = function() {
  return this._isCompound;
};

Graph.prototype.setGraph = function(label) {
  this._label = label;
  return this;
};

Graph.prototype.graph = function() {
  return this._label;
};


/* === Node functions ========== */

Graph.prototype.setDefaultNodeLabel = function(newDefault) {
  if (!_.isFunction(newDefault)) {
    newDefault = _.constant(newDefault);
  }
  this._defaultNodeLabelFn = newDefault;
  return this;
};

Graph.prototype.nodeCount = function() {
  return this._nodeCount;
};

Graph.prototype.nodes = function() {
  return _.keys(this._nodes);
};

Graph.prototype.sources = function() {
  var self = this;
  return _.filter(this.nodes(), function(v) {
    return _.isEmpty(self._in[v]);
  });
};

Graph.prototype.sinks = function() {
  var self = this;
  return _.filter(this.nodes(), function(v) {
    return _.isEmpty(self._out[v]);
  });
};

Graph.prototype.setNodes = function(vs, value) {
  var args = arguments;
  var self = this;
  _.each(vs, function(v) {
    if (args.length > 1) {
      self.setNode(v, value);
    } else {
      self.setNode(v);
    }
  });
  return this;
};

Graph.prototype.setNode = function(v, value) {
  if (_.has(this._nodes, v)) {
    if (arguments.length > 1) {
      this._nodes[v] = value;
    }
    return this;
  }

  this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
  if (this._isCompound) {
    this._parent[v] = GRAPH_NODE;
    this._children[v] = {};
    this._children[GRAPH_NODE][v] = true;
  }
  this._in[v] = {};
  this._preds[v] = {};
  this._out[v] = {};
  this._sucs[v] = {};
  ++this._nodeCount;
  return this;
};

Graph.prototype.node = function(v) {
  return this._nodes[v];
};

Graph.prototype.hasNode = function(v) {
  return _.has(this._nodes, v);
};

Graph.prototype.removeNode =  function(v) {
  var self = this;
  if (_.has(this._nodes, v)) {
    var removeEdge = function(e) { self.removeEdge(self._edgeObjs[e]); };
    delete this._nodes[v];
    if (this._isCompound) {
      this._removeFromParentsChildList(v);
      delete this._parent[v];
      _.each(this.children(v), function(child) {
        self.setParent(child);
      });
      delete this._children[v];
    }
    _.each(_.keys(this._in[v]), removeEdge);
    delete this._in[v];
    delete this._preds[v];
    _.each(_.keys(this._out[v]), removeEdge);
    delete this._out[v];
    delete this._sucs[v];
    --this._nodeCount;
  }
  return this;
};

Graph.prototype.setParent = function(v, parent) {
  if (!this._isCompound) {
    throw new Error("Cannot set parent in a non-compound graph");
  }

  if (_.isUndefined(parent)) {
    parent = GRAPH_NODE;
  } else {
    // Coerce parent to string
    parent += "";
    for (var ancestor = parent;
      !_.isUndefined(ancestor);
      ancestor = this.parent(ancestor)) {
      if (ancestor === v) {
        throw new Error("Setting " + parent+ " as parent of " + v +
                        " would create a cycle");
      }
    }

    this.setNode(parent);
  }

  this.setNode(v);
  this._removeFromParentsChildList(v);
  this._parent[v] = parent;
  this._children[parent][v] = true;
  return this;
};

Graph.prototype._removeFromParentsChildList = function(v) {
  delete this._children[this._parent[v]][v];
};

Graph.prototype.parent = function(v) {
  if (this._isCompound) {
    var parent = this._parent[v];
    if (parent !== GRAPH_NODE) {
      return parent;
    }
  }
};

Graph.prototype.children = function(v) {
  if (_.isUndefined(v)) {
    v = GRAPH_NODE;
  }

  if (this._isCompound) {
    var children = this._children[v];
    if (children) {
      return _.keys(children);
    }
  } else if (v === GRAPH_NODE) {
    return this.nodes();
  } else if (this.hasNode(v)) {
    return [];
  }
};

Graph.prototype.predecessors = function(v) {
  var predsV = this._preds[v];
  if (predsV) {
    return _.keys(predsV);
  }
};

Graph.prototype.successors = function(v) {
  var sucsV = this._sucs[v];
  if (sucsV) {
    return _.keys(sucsV);
  }
};

Graph.prototype.neighbors = function(v) {
  var preds = this.predecessors(v);
  if (preds) {
    return _.union(preds, this.successors(v));
  }
};

Graph.prototype.isLeaf = function (v) {
  var neighbors;
  if (this.isDirected()) {
    neighbors = this.successors(v);
  } else {
    neighbors = this.neighbors(v);
  }
  return neighbors.length === 0;
};

Graph.prototype.filterNodes = function(filter) {
  var copy = new this.constructor({
    directed: this._isDirected,
    multigraph: this._isMultigraph,
    compound: this._isCompound
  });

  copy.setGraph(this.graph());

  var self = this;
  _.each(this._nodes, function(value, v) {
    if (filter(v)) {
      copy.setNode(v, value);
    }
  });

  _.each(this._edgeObjs, function(e) {
    if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
      copy.setEdge(e, self.edge(e));
    }
  });

  var parents = {};
  function findParent(v) {
    var parent = self.parent(v);
    if (parent === undefined || copy.hasNode(parent)) {
      parents[v] = parent;
      return parent;
    } else if (parent in parents) {
      return parents[parent];
    } else {
      return findParent(parent);
    }
  }

  if (this._isCompound) {
    _.each(copy.nodes(), function(v) {
      copy.setParent(v, findParent(v));
    });
  }

  return copy;
};

/* === Edge functions ========== */

Graph.prototype.setDefaultEdgeLabel = function(newDefault) {
  if (!_.isFunction(newDefault)) {
    newDefault = _.constant(newDefault);
  }
  this._defaultEdgeLabelFn = newDefault;
  return this;
};

Graph.prototype.edgeCount = function() {
  return this._edgeCount;
};

Graph.prototype.edges = function() {
  return _.values(this._edgeObjs);
};

Graph.prototype.setPath = function(vs, value) {
  var self = this;
  var args = arguments;
  _.reduce(vs, function(v, w) {
    if (args.length > 1) {
      self.setEdge(v, w, value);
    } else {
      self.setEdge(v, w);
    }
    return w;
  });
  return this;
};

/*
 * setEdge(v, w, [value, [name]])
 * setEdge({ v, w, [name] }, [value])
 */
Graph.prototype.setEdge = function() {
  var v, w, name, value;
  var valueSpecified = false;
  var arg0 = arguments[0];

  if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
    v = arg0.v;
    w = arg0.w;
    name = arg0.name;
    if (arguments.length === 2) {
      value = arguments[1];
      valueSpecified = true;
    }
  } else {
    v = arg0;
    w = arguments[1];
    name = arguments[3];
    if (arguments.length > 2) {
      value = arguments[2];
      valueSpecified = true;
    }
  }

  v = "" + v;
  w = "" + w;
  if (!_.isUndefined(name)) {
    name = "" + name;
  }

  var e = edgeArgsToId(this._isDirected, v, w, name);
  if (_.has(this._edgeLabels, e)) {
    if (valueSpecified) {
      this._edgeLabels[e] = value;
    }
    return this;
  }

  if (!_.isUndefined(name) && !this._isMultigraph) {
    throw new Error("Cannot set a named edge when isMultigraph = false");
  }

  // It didn't exist, so we need to create it.
  // First ensure the nodes exist.
  this.setNode(v);
  this.setNode(w);

  this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);

  var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
  // Ensure we add undirected edges in a consistent way.
  v = edgeObj.v;
  w = edgeObj.w;

  Object.freeze(edgeObj);
  this._edgeObjs[e] = edgeObj;
  incrementOrInitEntry(this._preds[w], v);
  incrementOrInitEntry(this._sucs[v], w);
  this._in[w][e] = edgeObj;
  this._out[v][e] = edgeObj;
  this._edgeCount++;
  return this;
};

Graph.prototype.edge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  return this._edgeLabels[e];
};

Graph.prototype.hasEdge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  return _.has(this._edgeLabels, e);
};

Graph.prototype.removeEdge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  var edge = this._edgeObjs[e];
  if (edge) {
    v = edge.v;
    w = edge.w;
    delete this._edgeLabels[e];
    delete this._edgeObjs[e];
    decrementOrRemoveEntry(this._preds[w], v);
    decrementOrRemoveEntry(this._sucs[v], w);
    delete this._in[w][e];
    delete this._out[v][e];
    this._edgeCount--;
  }
  return this;
};

Graph.prototype.inEdges = function(v, u) {
  var inV = this._in[v];
  if (inV) {
    var edges = _.values(inV);
    if (!u) {
      return edges;
    }
    return _.filter(edges, function(edge) { return edge.v === u; });
  }
};

Graph.prototype.outEdges = function(v, w) {
  var outV = this._out[v];
  if (outV) {
    var edges = _.values(outV);
    if (!w) {
      return edges;
    }
    return _.filter(edges, function(edge) { return edge.w === w; });
  }
};

Graph.prototype.nodeEdges = function(v, w) {
  var inEdges = this.inEdges(v, w);
  if (inEdges) {
    return inEdges.concat(this.outEdges(v, w));
  }
};

function incrementOrInitEntry(map, k) {
  if (map[k]) {
    map[k]++;
  } else {
    map[k] = 1;
  }
}

function decrementOrRemoveEntry(map, k) {
  if (!--map[k]) { delete map[k]; }
}

function edgeArgsToId(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM +
             (_.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
}

function edgeArgsToObj(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  var edgeObj =  { v: v, w: w };
  if (name) {
    edgeObj.name = name;
  }
  return edgeObj;
}

function edgeObjToId(isDirected, edgeObj) {
  return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}


/***/ }),

/***/ 82354:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Includes only the "core" of graphlib
module.exports = {
  Graph: __webpack_require__(30771),
  version: __webpack_require__(49631)
};


/***/ }),

/***/ 28974:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(89126);
var Graph = __webpack_require__(30771);

module.exports = {
  write: write,
  read: read
};

function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };
  if (!_.isUndefined(g.graph())) {
    json.value = _.clone(g.graph());
  }
  return json;
}

function writeNodes(g) {
  return _.map(g.nodes(), function(v) {
    var nodeValue = g.node(v);
    var parent = g.parent(v);
    var node = { v: v };
    if (!_.isUndefined(nodeValue)) {
      node.value = nodeValue;
    }
    if (!_.isUndefined(parent)) {
      node.parent = parent;
    }
    return node;
  });
}

function writeEdges(g) {
  return _.map(g.edges(), function(e) {
    var edgeValue = g.edge(e);
    var edge = { v: e.v, w: e.w };
    if (!_.isUndefined(e.name)) {
      edge.name = e.name;
    }
    if (!_.isUndefined(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

function read(json) {
  var g = new Graph(json.options).setGraph(json.value);
  _.each(json.nodes, function(entry) {
    g.setNode(entry.v, entry.value);
    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });
  _.each(json.edges, function(entry) {
    g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
  });
  return g;
}


/***/ }),

/***/ 89126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global window */

var lodash;

if (true) {
  try {
    lodash = {
      clone: __webpack_require__(66678),
      constant: __webpack_require__(75703),
      each: __webpack_require__(66073),
      filter: __webpack_require__(63105),
      has:  __webpack_require__(18721),
      isArray: __webpack_require__(1469),
      isEmpty: __webpack_require__(41609),
      isFunction: __webpack_require__(23560),
      isUndefined: __webpack_require__(52353),
      keys: __webpack_require__(3674),
      map: __webpack_require__(35161),
      reduce: __webpack_require__(54061),
      size: __webpack_require__(84238),
      transform: __webpack_require__(68718),
      union: __webpack_require__(93386),
      values: __webpack_require__(52628)
    };
  } catch (e) {
    // continue regardless of error
  }
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;


/***/ }),

/***/ 49631:
/***/ ((module) => {

module.exports = '2.1.8';


/***/ }),

/***/ 47443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(42118);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1196:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 48983:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(40371);

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ 89881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(47816),
    createBaseEach = __webpack_require__(99291);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 56029:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33448);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),

/***/ 80760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ 41848:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 53325:
/***/ ((module) => {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),

/***/ 42118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(41848),
    baseIsNaN = __webpack_require__(62722),
    strictIndexOf = __webpack_require__(42351);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 62722:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 70433:
/***/ ((module) => {

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

module.exports = baseLt;


/***/ }),

/***/ 69199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881),
    isArrayLike = __webpack_require__(98612);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 82689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseGet = __webpack_require__(97786),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    baseSortBy = __webpack_require__(71131),
    baseUnary = __webpack_require__(7518),
    compareMultiple = __webpack_require__(85022),
    identity = __webpack_require__(6557),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 25970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(63012),
    hasIn = __webpack_require__(79095);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ 63012:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(97786),
    baseSet = __webpack_require__(10611),
    castPath = __webpack_require__(71811);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ 40098:
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),

/***/ 10107:
/***/ ((module) => {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),

/***/ 71131:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 45652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(88668),
    arrayIncludes = __webpack_require__(47443),
    arrayIncludesWith = __webpack_require__(1196),
    cacheHas = __webpack_require__(74757),
    createSet = __webpack_require__(23593),
    setToArray = __webpack_require__(21814);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 47415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ 1757:
/***/ ((module) => {

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

module.exports = baseZipObject;


/***/ }),

/***/ 54290:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(6557);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ 26393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33448);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 85022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(26393);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 99291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(98612);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 67740:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(67206),
    isArrayLike = __webpack_require__(98612),
    keys = __webpack_require__(3674);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 47445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRange = __webpack_require__(40098),
    isIterateeCall = __webpack_require__(16612),
    toFinite = __webpack_require__(18601);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ 23593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(58525),
    noop = __webpack_require__(50308),
    setToArray = __webpack_require__(21814);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 42351:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 88016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiSize = __webpack_require__(48983),
    hasUnicode = __webpack_require__(62689),
    unicodeSize = __webpack_require__(21903);

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ 21903:
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ 91747:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(5976),
    eq = __webpack_require__(77813),
    isIterateeCall = __webpack_require__(16612),
    keysIn = __webpack_require__(81704);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ 66073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(84486);


/***/ }),

/***/ 63105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(34963),
    baseFilter = __webpack_require__(80760),
    baseIteratee = __webpack_require__(67206),
    isArray = __webpack_require__(1469);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ 13311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createFind = __webpack_require__(67740),
    findIndex = __webpack_require__(30998);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 30998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(41848),
    baseIteratee = __webpack_require__(67206),
    toInteger = __webpack_require__(40554);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 84486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(77412),
    baseEach = __webpack_require__(89881),
    castFunction = __webpack_require__(54290),
    isArray = __webpack_require__(1469);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ 62620:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(28483),
    castFunction = __webpack_require__(54290),
    keysIn = __webpack_require__(81704);

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

module.exports = forIn;


/***/ }),

/***/ 47037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(44239),
    isArray = __webpack_require__(1469),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 52353:
/***/ ((module) => {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ 35161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    isArray = __webpack_require__(1469);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 6162:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseExtremum = __webpack_require__(56029),
    baseGt = __webpack_require__(53325),
    identity = __webpack_require__(6557);

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

module.exports = max;


/***/ }),

/***/ 53632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseExtremum = __webpack_require__(56029),
    baseLt = __webpack_require__(70433),
    identity = __webpack_require__(6557);

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseLt)
    : undefined;
}

module.exports = min;


/***/ }),

/***/ 22762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseExtremum = __webpack_require__(56029),
    baseIteratee = __webpack_require__(67206),
    baseLt = __webpack_require__(70433);

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
    : undefined;
}

module.exports = minBy;


/***/ }),

/***/ 50308:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 7771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(78638);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 78718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(25970),
    flatRest = __webpack_require__(99021);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ 96026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createRange = __webpack_require__(47445);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ 54061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayReduce = __webpack_require__(62663),
    baseEach = __webpack_require__(89881),
    baseIteratee = __webpack_require__(67206),
    baseReduce = __webpack_require__(10107),
    isArray = __webpack_require__(1469);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),

/***/ 84238:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseKeys = __webpack_require__(280),
    getTag = __webpack_require__(64160),
    isArrayLike = __webpack_require__(98612),
    isString = __webpack_require__(47037),
    stringSize = __webpack_require__(88016);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),

/***/ 89734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    baseOrderBy = __webpack_require__(82689),
    baseRest = __webpack_require__(5976),
    isIterateeCall = __webpack_require__(16612);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 93386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    baseRest = __webpack_require__(5976),
    baseUniq = __webpack_require__(45652),
    isArrayLikeObject = __webpack_require__(29246);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),

/***/ 73955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(79833);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ 52628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseValues = __webpack_require__(47415),
    keys = __webpack_require__(3674);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 7287:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(34865),
    baseZipObject = __webpack_require__(1757);

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

module.exports = zipObject;


/***/ }),

/***/ 93379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 90569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 19216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 3565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 44589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

}]);