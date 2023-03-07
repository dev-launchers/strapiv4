"use strict";(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[7347],{55081:(d,a,e)=>{e.d(a,{Z:()=>c});var o=e(8081),r=e.n(o),n=e(23645),t=e.n(n),s=t()(r());s.push([d.id,`/*

Orginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #002b36;
  color: #839496;
}

.hljs-comment,
.hljs-quote {
  color: #586e75;
}

/* Solarized Green */
.hljs-keyword,
.hljs-selector-tag,
.hljs-addition {
  color: #859900;
}

/* Solarized Cyan */
.hljs-number,
.hljs-string,
.hljs-meta .hljs-meta-string,
.hljs-literal,
.hljs-doctag,
.hljs-regexp {
  color: #2aa198;
}

/* Solarized Blue */
.hljs-title,
.hljs-section,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #268bd2;
}

/* Solarized Yellow */
.hljs-attribute,
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-class .hljs-title,
.hljs-type {
  color: #b58900;
}

/* Solarized Orange */
.hljs-symbol,
.hljs-bullet,
.hljs-subst,
.hljs-meta,
.hljs-meta .hljs-keyword,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-link {
  color: #cb4b16;
}

/* Solarized Red */
.hljs-built_in,
.hljs-deletion {
  color: #dc322f;
}

.hljs-formula {
  background: #073642;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
`,""]);const c=s},23645:d=>{d.exports=function(a){var e=[];return e.toString=function(){return this.map(function(r){var n="",t=typeof r[5]!="undefined";return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=a(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n}).join("")},e.i=function(r,n,t,s,c){typeof r=="string"&&(r=[[null,r,void 0]]);var u={};if(t)for(var _=0;_<this.length;_++){var f=this[_][0];f!=null&&(u[f]=!0)}for(var h=0;h<r.length;h++){var l=[].concat(r[h]);t&&u[l[0]]||(typeof c!="undefined"&&(typeof l[5]=="undefined"||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},8081:d=>{d.exports=function(a){return a[1]}},24840:(d,a,e)=>{e.r(a),e.d(a,{default:()=>y});var o=e(93379),r=e.n(o),n=e(7795),t=e.n(n),s=e(90569),c=e.n(s),u=e(3565),_=e.n(u),f=e(19216),h=e.n(f),l=e(44589),v=e.n(l),E=e(55081),i={};i.styleTagTransform=v(),i.setAttributes=_(),i.insert=c().bind(null,"head"),i.domAPI=t(),i.insertStyleElement=h();var p=r()(E.Z,i);const y=E.Z&&E.Z.locals?E.Z.locals:void 0},93379:d=>{var a=[];function e(n){for(var t=-1,s=0;s<a.length;s++)if(a[s].identifier===n){t=s;break}return t}function o(n,t){for(var s={},c=[],u=0;u<n.length;u++){var _=n[u],f=t.base?_[0]+t.base:_[0],h=s[f]||0,l="".concat(f," ").concat(h);s[f]=h+1;var v=e(l),E={css:_[1],media:_[2],sourceMap:_[3],supports:_[4],layer:_[5]};if(v!==-1)a[v].references++,a[v].updater(E);else{var i=r(E,t);t.byIndex=u,a.splice(u,0,{identifier:l,updater:i,references:1})}c.push(l)}return c}function r(n,t){var s=t.domAPI(t);s.update(n);var c=function(_){if(_){if(_.css===n.css&&_.media===n.media&&_.sourceMap===n.sourceMap&&_.supports===n.supports&&_.layer===n.layer)return;s.update(n=_)}else s.remove()};return c}d.exports=function(n,t){t=t||{},n=n||[];var s=o(n,t);return function(u){u=u||[];for(var _=0;_<s.length;_++){var f=s[_],h=e(f);a[h].references--}for(var l=o(u,t),v=0;v<s.length;v++){var E=s[v],i=e(E);a[i].references===0&&(a[i].updater(),a.splice(i,1))}s=l}}},90569:d=>{var a={};function e(r){if(typeof a[r]=="undefined"){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}a[r]=n}return a[r]}function o(r,n){var t=e(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}d.exports=o},19216:d=>{function a(e){var o=document.createElement("style");return e.setAttributes(o,e.attributes),e.insert(o,e.options),o}d.exports=a},3565:(d,a,e)=>{function o(r){var n=e.nc;n&&r.setAttribute("nonce",n)}d.exports=o},7795:d=>{function a(r,n,t){var s="";t.supports&&(s+="@supports (".concat(t.supports,") {")),t.media&&(s+="@media ".concat(t.media," {"));var c=typeof t.layer!="undefined";c&&(s+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),s+=t.css,c&&(s+="}"),t.media&&(s+="}"),t.supports&&(s+="}");var u=t.sourceMap;u&&typeof btoa!="undefined"&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),n.styleTagTransform(s,r,n.options)}function e(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r)}function o(r){var n=r.insertStyleElement(r);return{update:function(s){a(n,r,s)},remove:function(){e(n)}}}d.exports=o},44589:d=>{function a(e,o){if(o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}d.exports=a}}]);
