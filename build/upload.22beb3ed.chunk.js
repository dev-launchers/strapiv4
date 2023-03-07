(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[3650],{56156:(K,te,g)=>{"use strict";K.exports=g(44709)},44709:function(K,te,g){(function(s,N){K.exports=N(g(67294),g(78384),g(39711),g(74657))})(this,function(s,N,l,b){return function(e){var a={};function t(i){if(a[i])return a[i].exports;var o=a[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=a,t.d=function(i,o,p){t.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:p})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,o){if(1&o&&(i=t(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var p=Object.create(null);if(t.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var u in i)t.d(p,u,function(O){return i[O]}.bind(null,u));return p},t.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(o,"a",o),o},t.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},t.p="",t(t.s=115)}({0:function(e,a,t){e.exports=t(19)()},1:function(e,a){e.exports=s},10:function(e,a,t){var i=t(25),o=t(26),p=t(22),u=t(27);e.exports=function(O,E){return i(O)||o(O,E)||p(O,E)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},115:function(e,a,t){"use strict";t.r(a),t.d(a,"Link",function(){return re});var i,o,p=t(5),u=t.n(p),O=t(4),E=t.n(O),S=t(3),y=t.n(S),z=t(1),v=t.n(z),F=t(0),B=t.n(F),R=t(2),r=t.n(R),c=t(83),n=t.n(c),d=t(37),x=t(8),U=t(6),Y=t(16),ie=["href","to","children","disabled","startIcon","endIcon"],w=r.a.a(i||(i=y()([`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: `,`;
  svg path {
    fill: `,`;
  }
  svg {
    font-size: `,`rem;
  }
  &:hover,
  &:active {
    color: `,`;
  }
  `,`;
`])),function(A){return A.disabled?"none":void 0},function(A){var $=A.disabled,Q=A.theme;return $?Q.colors.neutral600:Q.colors.primary600},.625,function(A){return A.theme.colors.primary800},Y.a),ne=r()(U.Box)(o||(o=y()([`
  display: flex;
`]))),re=function(A){var $=A.href,Q=A.to,he=A.children,k=A.disabled,le=A.startIcon,ue=A.endIcon,ye=E()(A,ie),be=$?"_blank":void 0,de=$?"noreferrer noopener":void 0;return v.a.createElement(w,u()({as:Q&&!k?d.NavLink:"a",target:be,rel:de,to:k?void 0:Q,href:k?"#":$,disabled:k},ye),le&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingRight:2},le),v.a.createElement(x.Typography,{variant:"pi",textColor:k?"neutral600":"primary600"},he),ue&&!$&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingLeft:2},ue),$&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingLeft:2},v.a.createElement(n.a,null)))};re.displayName="Link",re.defaultProps={href:void 0,to:void 0,disabled:!1},re.propTypes={children:B.a.node.isRequired,disabled:B.a.bool,endIcon:B.a.element,href:function(A){if(!A.disabled&&!A.to&&!A.href)return new Error("href must be defined")},startIcon:B.a.element,to:function(A){if(!A.disabled&&!A.href&&!A.to)return new Error("to must be defined")}}},13:function(e,a){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(e.exports=t=function(o){return typeof o},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e.exports.default=e.exports,e.exports.__esModule=!0),t(i)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},16:function(e,a,t){"use strict";t.d(a,"b",function(){return i}),t.d(a,"c",function(){return o}),t.d(a,"a",function(){return p});var i=function(u){return function(O){var E=O.theme,S=O.size;return E.sizes[u][S]}},o=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(O){var E=O.theme,S=O.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(u,`:focus-within {
        border: 1px solid `).concat(S?E.colors.danger600:E.colors.primary600,`;
        box-shadow: `).concat(S?E.colors.danger600:E.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},p=function(u){var O=u.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(O.colors.primary600,`;
    }
  }
`)}},19:function(e,a,t){"use strict";var i=t(20);function o(){}function p(){}p.resetWarningCache=o,e.exports=function(){function u(S,y,z,v,F,B){if(B!==i){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}function O(){return u}u.isRequired=u;var E={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:O,element:u,elementType:u,instanceOf:O,node:u,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:p,resetWarningCache:o};return E.PropTypes=E,E}},2:function(e,a){e.exports=N},20:function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(e,a){e.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var o=0,p=new Array(i);o<i;o++)p[o]=t[o];return p},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,a,t){var i=t(21);e.exports=function(o,p){if(o){if(typeof o=="string")return i(o,p);var u=Object.prototype.toString.call(o).slice(8,-1);return u==="Object"&&o.constructor&&(u=o.constructor.name),u==="Map"||u==="Set"?Array.from(o):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?i(o,p):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,a){e.exports=function(t,i){if(t==null)return{};var o,p,u={},O=Object.keys(t);for(p=0;p<O.length;p++)o=O[p],i.indexOf(o)>=0||(u[o]=t[o]);return u},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,a){e.exports=function(t){if(Array.isArray(t))return t},e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,a){e.exports=function(t,i){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var p,u,O=[],E=!0,S=!1;try{for(o=o.call(t);!(E=(p=o.next()).done)&&(O.push(p.value),!i||O.length!==i);E=!0);}catch(y){S=!0,u=y}finally{try{E||o.return==null||o.return()}finally{if(S)throw u}}return O}},e.exports.default=e.exports,e.exports.__esModule=!0},27:function(e,a){e.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,a){e.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},37:function(e,a){e.exports=l},4:function(e,a,t){var i=t(24);e.exports=function(o,p){if(o==null)return{};var u,O,E=i(o,p);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(o);for(O=0;O<S.length;O++)u=S[O],p.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(o,u)&&(E[u]=o[u])}return E},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,a){function t(){return e.exports=t=Object.assign||function(i){for(var o=1;o<arguments.length;o++){var p=arguments[o];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(i[u]=p[u])}return i},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,a,t){"use strict";t.r(a),t.d(a,"Box",function(){return c});var i,o=t(3),p=t.n(o),u=t(2),O=t.n(u),E=t(7),S=t(1),y=t.n(S),z=t(0),v=t.n(z),F=function(n){return y.a.createElement("div",n)},B={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},R={_hover:v.a.func,background:v.a.string,basis:v.a.oneOfType([v.a.string,v.a.string]),borderColor:v.a.string,children:v.a.oneOfType([v.a.node,v.a.string]),color:v.a.string,flex:v.a.oneOfType([v.a.string,v.a.string]),grow:v.a.oneOfType([v.a.string,v.a.string]),hasRadius:v.a.bool,hiddenS:v.a.bool,hiddenXS:v.a.bool,padding:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingBottom:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingLeft:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingRight:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingTop:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),shadow:v.a.string,shrink:v.a.oneOfType([v.a.string,v.a.string])};F.defaultProps=B,F.propTypes=R;var r={color:!0},c=O.a.div.withConfig({shouldForwardProp:function(n,d){return!r[n]&&d(n)}})(i||(i=p()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(n){var d=n.fontSize;return n.theme.fontSizes[d]||d},function(n){var d=n.theme,x=n.background;return d.colors[x]},function(n){var d=n.theme,x=n.color;return d.colors[x]},function(n){var d=n.theme,x=n.padding;return Object(E.a)("padding",x,d)},function(n){var d=n.theme,x=n.paddingTop;return Object(E.a)("padding-top",x,d)},function(n){var d=n.theme,x=n.paddingRight;return Object(E.a)("padding-right",x,d)},function(n){var d=n.theme,x=n.paddingBottom;return Object(E.a)("padding-bottom",x,d)},function(n){var d=n.theme,x=n.paddingLeft;return Object(E.a)("padding-left",x,d)},function(n){var d=n.theme,x=n.marginLeft;return Object(E.a)("margin-left",x,d)},function(n){var d=n.theme,x=n.marginRight;return Object(E.a)("margin-right",x,d)},function(n){var d=n.theme,x=n.marginTop;return Object(E.a)("margin-top",x,d)},function(n){var d=n.theme,x=n.marginBottom;return Object(E.a)("margin-bottom",x,d)},function(n){var d=n.theme;return n.hiddenS?"".concat(d.mediaQueries.tablet," { display: none; }"):void 0},function(n){var d=n.theme;return n.hiddenXS?"".concat(d.mediaQueries.mobile," { display: none; }"):void 0},function(n){var d=n.theme,x=n.hasRadius,U=n.borderRadius;return x?d.borderRadius:U},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var d=n.borderColor;return n.theme.colors[d]},function(n){var d=n.theme,x=n.borderColor,U=n.borderStyle,Y=n.borderWidth;if(x&&!U&&!Y)return"1px solid ".concat(d.colors[x])},function(n){var d=n.theme,x=n.shadow;return d.shadows[x]},function(n){return n.pointerEvents},function(n){var d=n._hover,x=n.theme;return d?d(x):void 0},function(n){return n.display},function(n){return n.position},function(n){var d=n.left;return n.theme.spaces[d]||d},function(n){var d=n.right;return n.theme.spaces[d]||d},function(n){var d=n.top;return n.theme.spaces[d]||d},function(n){var d=n.bottom;return n.theme.spaces[d]||d},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var d=n.width;return n.theme.spaces[d]||d},function(n){var d=n.maxWidth;return n.theme.spaces[d]||d},function(n){var d=n.minWidth;return n.theme.spaces[d]||d},function(n){var d=n.height;return n.theme.spaces[d]||d},function(n){var d=n.maxHeight;return n.theme.spaces[d]||d},function(n){var d=n.minHeight;return n.theme.spaces[d]||d},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});c.defaultProps=B,c.propTypes=R},7:function(e,a,t){"use strict";var i=t(10),o=t.n(i),p=t(13),u=t.n(p);a.a=function(O,E,S){var y=E;if(Array.isArray(E)||u()(E)!=="object"||(y=[E==null?void 0:E.desktop,E==null?void 0:E.tablet,E==null?void 0:E.mobile]),y!==void 0){if(Array.isArray(y)){var z=y,v=o()(z,3),F=v[0],B=v[1],R=v[2],r="".concat(O,": ").concat(S.spaces[F],";");return B!==void 0&&(r+="".concat(S.mediaQueries.tablet,`{
          `).concat(O,": ").concat(S.spaces[B],`;
        }`)),R!==void 0&&(r+="".concat(S.mediaQueries.mobile,`{
          `).concat(O,": ").concat(S.spaces[R],`;
        }`)),r}var c=S.spaces[y]||y;return"".concat(O,": ").concat(c,";")}}},8:function(e,a,t){"use strict";t.r(a),t.d(a,"Typography",function(){return c});var i,o=t(3),p=t.n(o),u=t(2),O=t.n(u),E=["alpha","beta","delta","epsilon","omega","pi","sigma"],S=t(1),y=t.n(S),z=t(0),v=t.n(z),F=function(n){return y.a.createElement("div",n)},B={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},R={ellipsis:v.a.bool,fontSize:v.a.oneOfType([v.a.number,v.a.string]),fontWeight:v.a.string,lineHeight:v.a.oneOfType([v.a.number,v.a.string]),textColor:v.a.string,textTransform:v.a.string,variant:v.a.oneOf(E)};F.defaultProps=B,F.propTypes=R;var r={fontSize:!0,fontWeight:!0},c=O.a.span.withConfig({shouldForwardProp:function(n,d){return!r[n]&&d(n)}})(i||(i=p()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(n){var d=n.theme,x=n.fontWeight;return d.fontWeights[x]},function(n){var d=n.theme,x=n.fontSize;return d.fontSizes[x]},function(n){var d=n.theme,x=n.lineHeight;return d.lineHeights[x]},function(n){var d=n.theme,x=n.textColor;return d.colors[x||"neutral800"]},function(n){return n.textTransform},function(n){return n.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(n){var d=n.variant,x=n.theme;switch(d){case"alpha":return`
        font-weight: `.concat(x.fontWeights.bold,`;
        font-size: `).concat(x.fontSizes[5],`;
        line-height: `).concat(x.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(x.fontWeights.bold,`;
        font-size: `).concat(x.fontSizes[4],`;
        line-height: `).concat(x.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(x.fontWeights.semiBold,`;
        font-size: `).concat(x.fontSizes[3],`;
        line-height: `).concat(x.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(x.fontSizes[3],`;
        line-height: `).concat(x.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(x.fontSizes[2],`;
        line-height: `).concat(x.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(x.fontSizes[1],`;
        line-height: `).concat(x.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(x.fontWeights.bold,`;
        font-size: `).concat(x.fontSizes[0],`;
        line-height: `).concat(x.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(x.fontSizes[2],`;
      `)}});c.defaultProps=B,c.propTypes=R},83:function(e,a){e.exports=b}})})},80117:(K,te,g)=>{"use strict";K.exports=g(41706)},41706:function(K,te,g){(function(s,N){K.exports=N(g(67294),g(78384))})(this,function(s,N){return function(l){var b={};function e(a){if(b[a])return b[a].exports;var t=b[a]={i:a,l:!1,exports:{}};return l[a].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=l,e.c=b,e.d=function(a,t,i){e.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:i})},e.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,t){if(1&t&&(a=e(a)),8&t||4&t&&typeof a=="object"&&a&&a.__esModule)return a;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&t&&typeof a!="string")for(var o in a)e.d(i,o,function(p){return a[p]}.bind(null,o));return i},e.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(t,"a",t),t},e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},e.p="",e(e.s=110)}({0:function(l,b,e){l.exports=e(19)()},1:function(l,b){l.exports=s},10:function(l,b,e){var a=e(25),t=e(26),i=e(22),o=e(27);l.exports=function(p,u){return a(p)||t(p,u)||i(p,u)||o()},l.exports.default=l.exports,l.exports.__esModule=!0},110:function(l,b,e){"use strict";e.r(b),e.d(b,"Main",function(){return r}),e.d(b,"SkipToContent",function(){return x});var a,t=e(5),i=e.n(t),o=e(4),p=e.n(o),u=e(3),O=e.n(u),E=e(1),S=e.n(E),y=e(0),z=e.n(y),v=e(2),F=e.n(v),B=["labelledBy"],R=F.a.main(a||(a=O()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),r=function(U){var Y=U.labelledBy,ie=p()(U,B),w=Y||"main-content-title";return S.a.createElement(R,i()({"aria-labelledby":w,id:"main-content",tabIndex:-1},ie))};r.defaultProps={labelledBy:void 0},r.propTypes={labelledBy:z.a.string};var c,n=e(6),d=F()(n.Box)(c||(c=O()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(U){return U.theme.spaces[3]},function(U){return U.theme.spaces[3]}),x=function(U){var Y=U.children;return S.a.createElement(d,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},Y)};x.propTypes={children:z.a.node.isRequired}},13:function(l,b){function e(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(l.exports=e=function(t){return typeof t},l.exports.default=l.exports,l.exports.__esModule=!0):(l.exports=e=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l.exports.default=l.exports,l.exports.__esModule=!0),e(a)}l.exports=e,l.exports.default=l.exports,l.exports.__esModule=!0},19:function(l,b,e){"use strict";var a=e(20);function t(){}function i(){}i.resetWarningCache=t,l.exports=function(){function o(O,E,S,y,z,v){if(v!==a){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}function p(){return o}o.isRequired=o;var u={array:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:p,element:o,elementType:o,instanceOf:p,node:o,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u}},2:function(l,b){l.exports=N},20:function(l,b,e){"use strict";l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(l,b){l.exports=function(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,i=new Array(a);t<a;t++)i[t]=e[t];return i},l.exports.default=l.exports,l.exports.__esModule=!0},22:function(l,b,e){var a=e(21);l.exports=function(t,i){if(t){if(typeof t=="string")return a(t,i);var o=Object.prototype.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(t,i):void 0}},l.exports.default=l.exports,l.exports.__esModule=!0},24:function(l,b){l.exports=function(e,a){if(e==null)return{};var t,i,o={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],a.indexOf(t)>=0||(o[t]=e[t]);return o},l.exports.default=l.exports,l.exports.__esModule=!0},25:function(l,b){l.exports=function(e){if(Array.isArray(e))return e},l.exports.default=l.exports,l.exports.__esModule=!0},26:function(l,b){l.exports=function(e,a){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,o,p=[],u=!0,O=!1;try{for(t=t.call(e);!(u=(i=t.next()).done)&&(p.push(i.value),!a||p.length!==a);u=!0);}catch(E){O=!0,o=E}finally{try{u||t.return==null||t.return()}finally{if(O)throw o}}return p}},l.exports.default=l.exports,l.exports.__esModule=!0},27:function(l,b){l.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},l.exports.default=l.exports,l.exports.__esModule=!0},3:function(l,b){l.exports=function(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))},l.exports.default=l.exports,l.exports.__esModule=!0},4:function(l,b,e){var a=e(24);l.exports=function(t,i){if(t==null)return{};var o,p,u=a(t,i);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(t);for(p=0;p<O.length;p++)o=O[p],i.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(u[o]=t[o])}return u},l.exports.default=l.exports,l.exports.__esModule=!0},5:function(l,b){function e(){return l.exports=e=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(a[o]=i[o])}return a},l.exports.default=l.exports,l.exports.__esModule=!0,e.apply(this,arguments)}l.exports=e,l.exports.default=l.exports,l.exports.__esModule=!0},6:function(l,b,e){"use strict";e.r(b),e.d(b,"Box",function(){return R});var a,t=e(3),i=e.n(t),o=e(2),p=e.n(o),u=e(7),O=e(1),E=e.n(O),S=e(0),y=e.n(S),z=function(r){return E.a.createElement("div",r)},v={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},F={_hover:y.a.func,background:y.a.string,basis:y.a.oneOfType([y.a.string,y.a.string]),borderColor:y.a.string,children:y.a.oneOfType([y.a.node,y.a.string]),color:y.a.string,flex:y.a.oneOfType([y.a.string,y.a.string]),grow:y.a.oneOfType([y.a.string,y.a.string]),hasRadius:y.a.bool,hiddenS:y.a.bool,hiddenXS:y.a.bool,padding:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingBottom:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingLeft:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingRight:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingTop:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),shadow:y.a.string,shrink:y.a.oneOfType([y.a.string,y.a.string])};z.defaultProps=v,z.propTypes=F;var B={color:!0},R=p.a.div.withConfig({shouldForwardProp:function(r,c){return!B[r]&&c(r)}})(a||(a=i()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(r){var c=r.fontSize;return r.theme.fontSizes[c]||c},function(r){var c=r.theme,n=r.background;return c.colors[n]},function(r){var c=r.theme,n=r.color;return c.colors[n]},function(r){var c=r.theme,n=r.padding;return Object(u.a)("padding",n,c)},function(r){var c=r.theme,n=r.paddingTop;return Object(u.a)("padding-top",n,c)},function(r){var c=r.theme,n=r.paddingRight;return Object(u.a)("padding-right",n,c)},function(r){var c=r.theme,n=r.paddingBottom;return Object(u.a)("padding-bottom",n,c)},function(r){var c=r.theme,n=r.paddingLeft;return Object(u.a)("padding-left",n,c)},function(r){var c=r.theme,n=r.marginLeft;return Object(u.a)("margin-left",n,c)},function(r){var c=r.theme,n=r.marginRight;return Object(u.a)("margin-right",n,c)},function(r){var c=r.theme,n=r.marginTop;return Object(u.a)("margin-top",n,c)},function(r){var c=r.theme,n=r.marginBottom;return Object(u.a)("margin-bottom",n,c)},function(r){var c=r.theme;return r.hiddenS?"".concat(c.mediaQueries.tablet," { display: none; }"):void 0},function(r){var c=r.theme;return r.hiddenXS?"".concat(c.mediaQueries.mobile," { display: none; }"):void 0},function(r){var c=r.theme,n=r.hasRadius,d=r.borderRadius;return n?c.borderRadius:d},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var c=r.borderColor;return r.theme.colors[c]},function(r){var c=r.theme,n=r.borderColor,d=r.borderStyle,x=r.borderWidth;if(n&&!d&&!x)return"1px solid ".concat(c.colors[n])},function(r){var c=r.theme,n=r.shadow;return c.shadows[n]},function(r){return r.pointerEvents},function(r){var c=r._hover,n=r.theme;return c?c(n):void 0},function(r){return r.display},function(r){return r.position},function(r){var c=r.left;return r.theme.spaces[c]||c},function(r){var c=r.right;return r.theme.spaces[c]||c},function(r){var c=r.top;return r.theme.spaces[c]||c},function(r){var c=r.bottom;return r.theme.spaces[c]||c},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var c=r.width;return r.theme.spaces[c]||c},function(r){var c=r.maxWidth;return r.theme.spaces[c]||c},function(r){var c=r.minWidth;return r.theme.spaces[c]||c},function(r){var c=r.height;return r.theme.spaces[c]||c},function(r){var c=r.maxHeight;return r.theme.spaces[c]||c},function(r){var c=r.minHeight;return r.theme.spaces[c]||c},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});R.defaultProps=v,R.propTypes=F},7:function(l,b,e){"use strict";var a=e(10),t=e.n(a),i=e(13),o=e.n(i);b.a=function(p,u,O){var E=u;if(Array.isArray(u)||o()(u)!=="object"||(E=[u==null?void 0:u.desktop,u==null?void 0:u.tablet,u==null?void 0:u.mobile]),E!==void 0){if(Array.isArray(E)){var S=E,y=t()(S,3),z=y[0],v=y[1],F=y[2],B="".concat(p,": ").concat(O.spaces[z],";");return v!==void 0&&(B+="".concat(O.mediaQueries.tablet,`{
          `).concat(p,": ").concat(O.spaces[v],`;
        }`)),F!==void 0&&(B+="".concat(O.mediaQueries.mobile,`{
          `).concat(p,": ").concat(O.spaces[F],`;
        }`)),B}var R=O.spaces[E]||E;return"".concat(p,": ").concat(R,";")}}}})})},87760:function(K,te,g){(function(s,N){K.exports=N(g(67294))})(this,function(s){return function(N){var l={};function b(e){if(l[e])return l[e].exports;var a=l[e]={i:e,l:!1,exports:{}};return N[e].call(a.exports,a,a.exports,b),a.l=!0,a.exports}return b.m=N,b.c=l,b.d=function(e,a,t){b.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},b.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.t=function(e,a){if(1&a&&(e=b(e)),8&a||4&a&&typeof e=="object"&&e&&e.__esModule)return e;var t=Object.create(null);if(b.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&typeof e!="string")for(var i in e)b.d(t,i,function(o){return e[o]}.bind(null,i));return t},b.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return b.d(a,"a",a),a},b.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},b.p="",b(b.s=5)}({0:function(N,l){N.exports=s},5:function(N,l,b){"use strict";b.r(l);var e=b(0);function a(){return(a=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(t[p]=o[p])}return t}).apply(this,arguments)}l.default=function(t){return e.createElement("svg",a({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},62694:(K,te,g)=>{"use strict";g.r(te),g.d(te,{default:()=>en});var s=g(67294),N=g(15482),l=g(97132),b=g(68547),e=g(39844),a=g(78384),t=g(49656),i=g(35395),o=g(80117),p=g(94117),u=g(97833),O=g(46458),E=g(19631),S=g(49549),y=g(33483),z=g(39272),v=g(40264),F=g(56204),B=g.n(F),R=g(33012),r=g(78971),c=g(63509),n=g(6277),d=g(9383),x=g(27954),U=g(73817),Y=g(44466),ie=g(45697),w=g.n(ie);const ne=({pagination:h})=>s.createElement(p.Box,{paddingTop:6},s.createElement(v.Flex,{alignItems:"flex-end",justifyContent:"space-between"},s.createElement(b.PageSizeURLQuery,null),s.createElement(b.PaginationURLQuery,{pagination:h})));ne.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ne.propTypes={pagination:w().shape({page:w().number,pageCount:w().number,pageSize:w().number,total:w().number})};var re=g(31817),A=g(42047),$=g(9524),Q=g(49826),he=g(15537),k=g(64459),le=g(62982),ue=g.n(le),ye=g(2967),be=(h,f,m)=>new Promise((C,M)=>{var j=P=>{try{T(m.next(P))}catch(D){M(D)}},I=P=>{try{T(m.throw(P))}catch(D){M(D)}},T=P=>P.done?C(P.value):Promise.resolve(P.value).then(j,I);T((m=m.apply(h,f)).next())});const de=({selected:h,onSuccess:f})=>{const{formatMessage:m}=(0,l.useIntl)(),[C,M]=(0,s.useState)(!1),{isLoading:j,remove:I}=(0,ye.K)(),T=()=>be(void 0,null,function*(){yield I(h),f()});return s.createElement(s.Fragment,null,s.createElement(k.Button,{variant:"danger-light",size:"S",startIcon:s.createElement(ue(),null),onClick:()=>M(!0)},m({id:"global.delete",defaultMessage:"Delete"})),s.createElement(b.ConfirmDialog,{isConfirmButtonLoading:j,isOpen:C,onToggleDialog:()=>M(!1),onConfirm:T}))};de.propTypes={selected:w().arrayOf(Q.pw,Q.nx).isRequired,onSuccess:w().func.isRequired};var nt=g(40039),rt=g.n(nt),ot=g(80831),at=g(41609),it=g.n(at),st=g(97245),oe=g(68991),lt=g(16572),Fe=g(23724),xe=g(55994),ut=Object.defineProperty,dt=Object.defineProperties,ct=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Ie=(h,f,m)=>f in h?ut(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,Re=(h,f)=>{for(var m in f||(f={}))ft.call(f,m)&&Ie(h,m,f[m]);if(Ae)for(var m of Ae(f))pt.call(f,m)&&Ie(h,m,f[m]);return h},ze=(h,f)=>dt(h,ct(f));const mt=()=>{const h=(0,b.useNotification)(),f=(0,Fe.useQueryClient)(),m=(0,e.IF)("actions/bulk-move"),C=({destinationFolderId:I,filesAndFolders:T})=>{const P=T.reduce((D,Z)=>{const{id:V,type:H}=Z,X=H==="asset"?"fileIds":"folderIds";return D[X]||(D[X]=[]),D[X].push(V),D},{});return e.be.post(m,ze(Re({},P),{destinationFolderId:I}))},M=(0,Fe.useMutation)(C,{onSuccess:I=>{var T;const{data:{data:P}}=I;((T=P==null?void 0:P.files)==null?void 0:T.length)>0&&(f.refetchQueries([xe.Z,"assets"],{active:!0}),f.refetchQueries([xe.Z,"asset-count"],{active:!0})),f.refetchQueries([xe.Z,"folders"],{active:!0}),h({type:"success",message:{id:(0,e.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}}),j=(I,T)=>M.mutateAsync({destinationFolderId:I,filesAndFolders:T});return ze(Re({},M),{move:j})};var gt=g(66951),vt=g(20796),ht=(h,f,m)=>new Promise((C,M)=>{var j=P=>{try{T(m.next(P))}catch(D){M(D)}},I=P=>{try{T(m.throw(P))}catch(D){M(D)}},T=P=>P.done?C(P.value):Promise.resolve(P.value).then(j,I);T((m=m.apply(h,f)).next())});const Oe=({onClose:h,selected:f,currentFolder:m})=>{const{formatMessage:C}=(0,l.useIntl)(),{data:M,isLoading:j}=(0,vt.v)(),{move:I}=mt();if(!M)return null;const T=(Z,V)=>ht(void 0,[Z,V],function*(H,{setErrors:X}){try{yield I(H.destination.value,f),h()}catch(me){const W=(0,b.getAPIInnerErrors)(me,{getTrad:e.OB}),se=Object.entries(W).reduce((ee,[G,Te])=>(ee[G||"destination"]=Te.defaultMessage,ee),{});it()(se)||X(se)}}),P=()=>{h()};if(j)return s.createElement(oe.ModalLayout,{onClose:P,labelledBy:"title"},s.createElement(oe.ModalBody,null,s.createElement(v.Flex,{justifyContent:"center",paddingTop:4,paddingBottom:4},s.createElement(st.Loader,null,C({id:(0,e.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const D={destination:{value:(m==null?void 0:m.id)||"",label:(m==null?void 0:m.name)||M[0].label}};return s.createElement(oe.ModalLayout,{onClose:P,labelledBy:"title"},s.createElement(ot.Formik,{validateOnChange:!1,onSubmit:T,initialValues:D},({values:Z,errors:V,setFieldValue:H})=>s.createElement(b.Form,{noValidate:!0},s.createElement(oe.ModalHeader,null,s.createElement(y.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},C({id:(0,e.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),s.createElement(oe.ModalBody,null,s.createElement(z.Grid,{gap:4},s.createElement(z.GridItem,{xs:12,col:12},s.createElement($.Stack,{spacing:1},s.createElement(lt.FieldLabel,{htmlFor:"folder-destination"},C({id:(0,e.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),s.createElement(gt.Z,{options:M,onChange:X=>{H("destination",X)},defaultValue:Z.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:V==null?void 0:V.destination,ariaErrorMessage:"destination-error"}),V.destination&&s.createElement(y.Typography,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},V.destination))))),s.createElement(oe.ModalFooter,{startActions:s.createElement(k.Button,{onClick:P,variant:"tertiary",name:"cancel"},C({id:"cancel",defaultMessage:"Cancel"})),endActions:s.createElement(k.Button,{type:"submit",loading:j},C({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};Oe.defaultProps={currentFolder:void 0},Oe.propTypes={onClose:w().func.isRequired,currentFolder:Q.nx,selected:w().arrayOf(Q.nx,Q.pw).isRequired};const Ee=({selected:h,onSuccess:f,currentFolder:m})=>{const{formatMessage:C}=(0,l.useIntl)(),[M,j]=(0,s.useState)(!1),I=()=>{j(!1),f()};return s.createElement(s.Fragment,null,s.createElement(k.Button,{variant:"secondary",size:"S",startIcon:s.createElement(rt(),null),onClick:()=>j(!0)},C({id:"global.move",defaultMessage:"Move"})),M&&s.createElement(Oe,{currentFolder:m,onClose:I,selected:h}))};Ee.defaultProps={currentFolder:void 0},Ee.propTypes={onSuccess:w().func.isRequired,currentFolder:Q.nx,selected:w().arrayOf(Q.pw,Q.nx).isRequired};const Se=({selected:h,onSuccess:f,currentFolder:m})=>{const{formatMessage:C}=(0,l.useIntl)();return s.createElement($.Stack,{horizontal:!0,spacing:2,paddingBottom:5},s.createElement(y.Typography,{variant:"epsilon",textColor:"neutral600"},C({id:(0,he.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:h.filter(({type:M})=>M==="folder").length,numberAssets:h.filter(({type:M})=>M==="asset").length})),s.createElement(de,{selected:h,onSuccess:f}),s.createElement(Ee,{currentFolder:m,selected:h,onSuccess:f}))};Se.defaultProps={currentFolder:void 0},Se.propTypes={onSuccess:w().func.isRequired,currentFolder:Q.nx,selected:w().arrayOf(Q.pw,Q.nx).isRequired};var ce=g(98101),yt=g(88231),bt=g.n(yt),xt=g(51386),Ot=g(45219),De=g(97581);const Et=()=>{var h;const f=(0,s.useRef)(null),[m,C]=(0,s.useState)(!1),{formatMessage:M}=(0,l.useIntl)(),{trackUsage:j}=(0,b.useTracking)(),[{query:I},T]=(0,b.useQueryParams)(),P=((h=I==null?void 0:I.filters)==null?void 0:h.$and)||[],D=()=>C(H=>!H),Z=H=>{T({filters:{$and:H},page:1})},V=H=>{j("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(H[H.length-1])[0]}),T({filters:{$and:H},page:1})};return s.createElement(s.Fragment,null,s.createElement(k.Button,{variant:"tertiary",ref:f,startIcon:s.createElement(bt(),null),onClick:D,size:"S"},M({id:"app.utils.filters",defaultMessage:"Filters"})),m&&s.createElement(Ot.Z,{displayedFilters:De.Z,filters:P,onSubmit:V,onToggle:D,source:f}),s.createElement(xt.Z,{appliedFilters:P,filtersSchema:De.Z,onRemoveFilter:Z}))};var St=g(80129),Pt=g(56156),Mt=g(87760),Tt=g.n(Mt),jt=g(89326),Pe=g.n(jt),Ct=g(70168),Lt=Object.defineProperty,wt=Object.defineProperties,Bt=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,We=(h,f,m)=>f in h?Lt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,It=(h,f)=>{for(var m in f||(f={}))Ft.call(f,m)&&We(h,m,f[m]);if(He)for(var m of He(f))At.call(f,m)&&We(h,m,f[m]);return h},Rt=(h,f)=>wt(h,Bt(f));const Me=({breadcrumbs:h,canCreate:f,folder:m,onToggleEditFolderDialog:C,onToggleUploadAssetDialog:M})=>{var j,I;const{formatMessage:T}=(0,l.useIntl)(),{pathname:P}=(0,t.useLocation)(),[{query:D}]=(0,b.useQueryParams)(),Z=Rt(It({},D),{folder:(I=(j=m==null?void 0:m.parent)==null?void 0:j.id)!=null?I:void 0});return s.createElement(i.HeaderLayout,{title:T({id:(0,e.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:h&&m&&s.createElement(Ct.O,{as:"nav",label:T({id:(0,e.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:h,currentFolderId:m==null?void 0:m.id}),navigationAction:m&&s.createElement(Pt.Link,{startIcon:s.createElement(Tt(),null),to:`${P}?${(0,St.stringify)(Z,{encode:!1})}`},T({id:(0,e.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:f&&s.createElement($.Stack,{horizontal:!0,spacing:2},s.createElement(k.Button,{startIcon:s.createElement(Pe(),null),variant:"secondary",onClick:C},T({id:(0,e.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),s.createElement(k.Button,{startIcon:s.createElement(Pe(),null),onClick:M},T({id:(0,e.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};Me.defaultProps={breadcrumbs:!1,folder:null},Me.propTypes={breadcrumbs:w().oneOfType([Q.Fv,w().bool]),canCreate:w().bool.isRequired,folder:Q.nx,onToggleEditFolderDialog:w().func.isRequired,onToggleUploadAssetDialog:w().func.isRequired};var zt=g(80660),Dt=g.n(zt),Ht=g(70088),Wt=Object.defineProperty,Qt=Object.defineProperties,Nt=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,Ut=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable,Ne=(h,f,m)=>f in h?Wt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,Vt=(h,f)=>{for(var m in f||(f={}))Ut.call(f,m)&&Ne(h,m,f[m]);if(Qe)for(var m of Qe(f))kt.call(f,m)&&Ne(h,m,f[m]);return h},$t=(h,f)=>Qt(h,Nt(f));const Zt=({isFiltering:h,canCreate:f,canRead:m})=>h?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:m?f?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Ue=({canCreate:h,isFiltering:f,canRead:m,onActionClick:C})=>{const{formatMessage:M}=(0,l.useIntl)(),j=Zt({isFiltering:f,canCreate:h,canRead:m});return s.createElement(Ht.i,{icon:m?null:Dt(),action:h&&!f&&s.createElement(k.Button,{variant:"secondary",startIcon:s.createElement(Pe(),null),onClick:C},M({id:(0,e.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:M($t(Vt({},j),{id:(0,e.OB)(j.id)}))})};Ue.propTypes={canCreate:w().bool.isRequired,canRead:w().bool.isRequired,isFiltering:w().bool.isRequired,onActionClick:w().func.isRequired};var Xt=Object.defineProperty,Gt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,Yt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Ve=(h,f,m)=>f in h?Xt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,fe=(h,f)=>{for(var m in f||(f={}))Yt.call(f,m)&&Ve(h,m,f[m]);if(ke)for(var m of ke(f))Jt.call(f,m)&&Ve(h,m,f[m]);return h},pe=(h,f)=>Gt(h,Kt(f));const qt=(0,a.default)(p.Box)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,$e=(0,a.default)(y.Typography)`
  max-width: 100%;
`,_t=()=>{var h,f,m,C;const{push:M}=(0,t.useHistory)(),{canRead:j,canCreate:I,canUpdate:T,canCopyLink:P,canDownload:D,isLoading:Z}=(0,re.y)(),V=(0,s.useRef)(),{formatMessage:H}=(0,l.useIntl)(),{pathname:X}=(0,t.useLocation)(),{trackUsage:me}=(0,b.useTracking)(),[{query:W},se]=(0,b.useQueryParams)(),ee=Boolean(W._q||W.filters),{data:G,isLoading:Te,errors:tn}=(0,U.L)({skipWhen:!j,query:W}),{data:ge,isLoading:nn,errors:rn}=(0,Y.j)({enabled:j&&((h=G==null?void 0:G.pagination)==null?void 0:h.page)===1&&!(0,e.rV)(W),query:W}),{data:je,isLoading:Ze,error:Xe}=(0,A.W)(W==null?void 0:W.folder,{enabled:j&&!!(W!=null&&W.folder)});((f=Xe==null?void 0:Xe.response)==null?void 0:f.status)===404&&M(X);const J=(ge==null?void 0:ge.length)||0,ve=G==null?void 0:G.results,q=(m=ve==null?void 0:ve.length)!=null?m:0,Ge=Ze||nn||Z||Te,[on,an]=(0,s.useState)(!1),[sn,Ke]=(0,s.useState)(!1),[Ye,Je]=(0,s.useState)(void 0),[Ce,qe]=(0,s.useState)(void 0),[_,{selectOne:Le,selectAll:_e}]=(0,b.useSelectionState)(["type","id"],[]),we=()=>an(L=>!L),et=({created:L=!1}={})=>{L&&(W==null?void 0:W.page)!=="1"&&se(pe(fe({},W),{page:1})),Ke(ae=>!ae)},ln=L=>{me("didSortMediaLibraryElements",{location:"upload",sort:L}),se({sort:L})},un=L=>{qe(L),Ke(!0)},dn=L=>{qe(null),et(L),V.current&&V.current.focus()};return(0,b.useFocusWhenNavigate)(),s.createElement(i.Layout,null,s.createElement(o.Main,{"aria-busy":Ge},s.createElement(Me,{breadcrumbs:!Ze&&(0,e.M4)(je,{pathname:X,query:W}),canCreate:I,onToggleEditFolderDialog:et,onToggleUploadAssetDialog:we,folder:je}),s.createElement(i.ActionLayout,{startActions:s.createElement(s.Fragment,null,T&&(q>0||J>0)&&s.createElement(qt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},s.createElement(O.BaseCheckbox,{"aria-label":H({id:(0,e.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:(_==null?void 0:_.length)>0&&(_==null?void 0:_.length)!==q+J,value:(q>0||J>0)&&_.length===q+J,onChange:L=>{L.target.checked&&me("didSelectAllMediaLibraryElements"),_e([...ve.map(ae=>pe(fe({},ae),{type:"asset"})),...ge.map(ae=>pe(fe({},ae),{type:"folder"}))])}})),j&&s.createElement(x.Z,{onChangeSort:ln}),j&&s.createElement(Et,null)),endActions:s.createElement(b.SearchURLQuery,{label:H({id:(0,e.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})}),s.createElement(i.ContentLayout,null,_.length>0&&s.createElement(Se,{currentFolder:je,selected:_,onSuccess:_e}),Ge&&s.createElement(b.LoadingIndicatorPage,null),(tn||rn)&&s.createElement(b.AnErrorOccurred,null),J===0&&q===0&&s.createElement(Ue,{canCreate:I,canRead:j,isFiltering:ee,onActionClick:we}),j&&s.createElement(s.Fragment,null,J>0&&s.createElement(d.$,{title:(ee&&q>0||!ee)&&H({id:(0,e.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:J})||""},ge.map(L=>{const cn=!!_.filter(({type:Be})=>Be==="folder").find(Be=>Be.id===L.id),tt=(0,e.Km)(X,W,L);return s.createElement(z.GridItem,{col:3,key:`folder-${L.id}`},s.createElement(ce.Ac,{ref:Ce&&L.id===Ce.id?V:void 0,ariaLabel:L.name,id:`folder-${L.id}`,to:tt,startAction:Le&&s.createElement(ce.MM,{"data-testid":`folder-checkbox-${L.id}`,value:cn,onChange:()=>Le(pe(fe({},L),{type:"folder"}))}),cardActions:s.createElement(S.IconButton,{icon:s.createElement(B(),null),"aria-label":H({id:(0,e.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>un(L)})},s.createElement(ce.Bu,null,s.createElement(ce.u6,{to:tt},s.createElement(v.Flex,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},s.createElement($e,{fontWeight:"semiBold",ellipsis:!0},L.name,s.createElement(E.VisuallyHidden,null,":")),s.createElement($e,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},H({id:(0,e.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:L.children.count,filesCount:L.files.count})))))))})),q>0&&J>0&&s.createElement(p.Box,{paddingTop:6,paddingBottom:4},s.createElement(u.Divider,null)),q>0&&s.createElement(s.Fragment,null,s.createElement(n.l,{assets:ve,onEditAsset:Je,onSelectAsset:Le,selectedAssets:_.filter(({type:L})=>L==="asset"),title:(!ee||ee&&J>0)&&((C=G==null?void 0:G.pagination)==null?void 0:C.page)===1&&H({id:(0,e.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:q})||""}),(G==null?void 0:G.pagination)&&s.createElement(ne,{pagination:G.pagination}))))),on&&s.createElement(R.x,{onClose:we,trackedLocation:"upload",folderId:W==null?void 0:W.folder}),sn&&s.createElement(r.f,{onClose:dn,folder:Ce,parentFolderId:W==null?void 0:W.folder,location:"upload"}),Ye&&s.createElement(c.s,{onClose:()=>Je(void 0),asset:Ye,canUpdate:T,canCopyLink:P,canDownload:D,trackedLocation:"upload"}))},en=()=>{const[{rawQuery:h},f]=(0,b.useQueryParams)(),{formatMessage:m}=(0,l.useIntl)(),C=m({id:(0,e.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,s.useEffect)(()=>{h||f({sort:"updatedAt:DESC",page:1,pageSize:10})},[h,f]),h?s.createElement(s.Fragment,null,s.createElement(N.Helmet,{title:C}),s.createElement(_t,null)):null}}}]);
