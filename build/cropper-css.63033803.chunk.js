"use strict";(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[7784],{95073:(c,t,n)=>{n.d(t,{Z:()=>u});var s=n(8081),o=n.n(s),e=n(23645),r=n.n(e),p=n(61667),l=n.n(p),d=new URL(n(8738),n.b),i=r()(o()),_=l()(d);i.push([c.id,`/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:11.623Z
 */

.cropper-container {
  direction: ltr;
  font-size: 0;
  line-height: 0;
  position: relative;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.cropper-container img {
  display: block;
  height: 100%;
  image-orientation: 0deg;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}

.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.cropper-wrap-box,
.cropper-canvas {
  overflow: hidden;
}

.cropper-drag-box {
  background-color: #fff;
  opacity: 0;
}

.cropper-modal {
  background-color: #000;
  opacity: 0.5;
}

.cropper-view-box {
  display: block;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  overflow: hidden;
  width: 100%;
}

.cropper-dashed {
  border: 0 dashed #eee;
  display: block;
  opacity: 0.5;
  position: absolute;
}

.cropper-dashed.dashed-h {
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: calc(100% / 3);
  left: 0;
  top: calc(100% / 3);
  width: 100%;
}

.cropper-dashed.dashed-v {
  border-left-width: 1px;
  border-right-width: 1px;
  height: 100%;
  left: calc(100% / 3);
  top: 0;
  width: calc(100% / 3);
}

.cropper-center {
  display: block;
  height: 0;
  left: 50%;
  opacity: 0.75;
  position: absolute;
  top: 50%;
  width: 0;
}

.cropper-center::before,
.cropper-center::after {
  background-color: #eee;
  content: ' ';
  display: block;
  position: absolute;
}

.cropper-center::before {
  height: 1px;
  left: -3px;
  top: 0;
  width: 7px;
}

.cropper-center::after {
  height: 7px;
  left: 0;
  top: -3px;
  width: 1px;
}

.cropper-face,
.cropper-line,
.cropper-point {
  display: block;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}

.cropper-face {
  background-color: #fff;
  left: 0;
  top: 0;
}

.cropper-line {
  background-color: #39f;
}

.cropper-line.line-e {
  cursor: ew-resize;
  right: -3px;
  top: 0;
  width: 5px;
}

.cropper-line.line-n {
  cursor: ns-resize;
  height: 5px;
  left: 0;
  top: -3px;
}

.cropper-line.line-w {
  cursor: ew-resize;
  left: -3px;
  top: 0;
  width: 5px;
}

.cropper-line.line-s {
  bottom: -3px;
  cursor: ns-resize;
  height: 5px;
  left: 0;
}

.cropper-point {
  background-color: #39f;
  height: 5px;
  opacity: 0.75;
  width: 5px;
}

.cropper-point.point-e {
  cursor: ew-resize;
  margin-top: -3px;
  right: -3px;
  top: 50%;
}

.cropper-point.point-n {
  cursor: ns-resize;
  left: 50%;
  margin-left: -3px;
  top: -3px;
}

.cropper-point.point-w {
  cursor: ew-resize;
  left: -3px;
  margin-top: -3px;
  top: 50%;
}

.cropper-point.point-s {
  bottom: -3px;
  cursor: s-resize;
  left: 50%;
  margin-left: -3px;
}

.cropper-point.point-ne {
  cursor: nesw-resize;
  right: -3px;
  top: -3px;
}

.cropper-point.point-nw {
  cursor: nwse-resize;
  left: -3px;
  top: -3px;
}

.cropper-point.point-sw {
  bottom: -3px;
  cursor: nesw-resize;
  left: -3px;
}

.cropper-point.point-se {
  bottom: -3px;
  cursor: nwse-resize;
  height: 20px;
  opacity: 1;
  right: -3px;
  width: 20px;
}

@media (min-width: 768px) {
  .cropper-point.point-se {
    height: 15px;
    width: 15px;
  }
}

@media (min-width: 992px) {
  .cropper-point.point-se {
    height: 10px;
    width: 10px;
  }
}

@media (min-width: 1200px) {
  .cropper-point.point-se {
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }
}

.cropper-point.point-se::before {
  background-color: #39f;
  bottom: -50%;
  content: ' ';
  display: block;
  height: 200%;
  opacity: 0;
  position: absolute;
  right: -50%;
  width: 200%;
}

.cropper-invisible {
  opacity: 0;
}

.cropper-bg {
  background-image: url(`+_+`);
}

.cropper-hide {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}

.cropper-hidden {
  display: none !important;
}

.cropper-move {
  cursor: move;
}

.cropper-crop {
  cursor: crosshair;
}

.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
`,""]);const u=i},23645:c=>{c.exports=function(t){var n=[];return n.toString=function(){return this.map(function(o){var e="",r=typeof o[5]!="undefined";return o[4]&&(e+="@supports (".concat(o[4],") {")),o[2]&&(e+="@media ".concat(o[2]," {")),r&&(e+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),e+=t(o),r&&(e+="}"),o[2]&&(e+="}"),o[4]&&(e+="}"),e}).join("")},n.i=function(o,e,r,p,l){typeof o=="string"&&(o=[[null,o,void 0]]);var d={};if(r)for(var i=0;i<this.length;i++){var _=this[i][0];_!=null&&(d[_]=!0)}for(var u=0;u<o.length;u++){var a=[].concat(o[u]);r&&d[a[0]]||(typeof l!="undefined"&&(typeof a[5]=="undefined"||(a[1]="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {").concat(a[1],"}")),a[5]=l),e&&(a[2]&&(a[1]="@media ".concat(a[2]," {").concat(a[1],"}")),a[2]=e),p&&(a[4]?(a[1]="@supports (".concat(a[4],") {").concat(a[1],"}"),a[4]=p):a[4]="".concat(p)),n.push(a))}},n}},61667:c=>{c.exports=function(t,n){return n||(n={}),t&&(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},8081:c=>{c.exports=function(t){return t[1]}},74063:(c,t,n)=>{n.r(t),n.d(t,{default:()=>v});var s=n(93379),o=n.n(s),e=n(7795),r=n.n(e),p=n(90569),l=n.n(p),d=n(3565),i=n.n(d),_=n(19216),u=n.n(_),a=n(44589),h=n.n(a),A=n(95073),f={};f.styleTagTransform=h(),f.setAttributes=i(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u();var g=o()(A.Z,f);const v=A.Z&&A.Z.locals?A.Z.locals:void 0},93379:c=>{var t=[];function n(e){for(var r=-1,p=0;p<t.length;p++)if(t[p].identifier===e){r=p;break}return r}function s(e,r){for(var p={},l=[],d=0;d<e.length;d++){var i=e[d],_=r.base?i[0]+r.base:i[0],u=p[_]||0,a="".concat(_," ").concat(u);p[_]=u+1;var h=n(a),A={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(h!==-1)t[h].references++,t[h].updater(A);else{var f=o(A,r);r.byIndex=d,t.splice(d,0,{identifier:a,updater:f,references:1})}l.push(a)}return l}function o(e,r){var p=r.domAPI(r);p.update(e);var l=function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap&&i.supports===e.supports&&i.layer===e.layer)return;p.update(e=i)}else p.remove()};return l}c.exports=function(e,r){r=r||{},e=e||[];var p=s(e,r);return function(d){d=d||[];for(var i=0;i<p.length;i++){var _=p[i],u=n(_);t[u].references--}for(var a=s(d,r),h=0;h<p.length;h++){var A=p[h],f=n(A);t[f].references===0&&(t[f].updater(),t.splice(f,1))}p=a}}},90569:c=>{var t={};function n(o){if(typeof t[o]=="undefined"){var e=document.querySelector(o);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}t[o]=e}return t[o]}function s(o,e){var r=n(o);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}c.exports=s},19216:c=>{function t(n){var s=document.createElement("style");return n.setAttributes(s,n.attributes),n.insert(s,n.options),s}c.exports=t},3565:(c,t,n)=>{function s(o){var e=n.nc;e&&o.setAttribute("nonce",e)}c.exports=s},7795:c=>{function t(o,e,r){var p="";r.supports&&(p+="@supports (".concat(r.supports,") {")),r.media&&(p+="@media ".concat(r.media," {"));var l=typeof r.layer!="undefined";l&&(p+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),p+=r.css,l&&(p+="}"),r.media&&(p+="}"),r.supports&&(p+="}");var d=r.sourceMap;d&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleTagTransform(p,o,e.options)}function n(o){if(o.parentNode===null)return!1;o.parentNode.removeChild(o)}function s(o){var e=o.insertStyleElement(o);return{update:function(p){t(e,o,p)},remove:function(){n(e)}}}c.exports=s},44589:c=>{function t(n,s){if(s.styleSheet)s.styleSheet.cssText=n;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(n))}}c.exports=t},8738:c=>{c.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC"}}]);
