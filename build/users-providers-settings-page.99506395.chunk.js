(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[2282],{44981:(D,Z,g)=>{"use strict";D.exports=g(5582)},5582:function(D,Z,g){(function(v,L){D.exports=L(g(67294),g(78384),g(74764))})(this,function(v,L,l){return function(s){var a={};function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return s[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=s,t.c=a,t.d=function(n,i,u){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:u})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(1&i&&(n=t(n)),8&i||4&i&&typeof n=="object"&&n&&n.__esModule)return n;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&i&&typeof n!="string")for(var d in n)t.d(u,d,function(c){return n[c]}.bind(null,d));return u},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=112)}({0:function(s,a,t){s.exports=t(19)()},1:function(s,a){s.exports=v},10:function(s,a,t){var n=t(25),i=t(26),u=t(22),d=t(27);s.exports=function(c,p){return n(c)||i(c,p)||u(c,p)||d()},s.exports.default=s.exports,s.exports.__esModule=!0},112:function(s,a,t){"use strict";t.r(a),t.d(a,"Crumb",function(){return B}),t.d(a,"Breadcrumbs",function(){return _});var n,i=t(4),u=t.n(i),d=t(3),c=t.n(d),p=t(1),O=t.n(p),S=t(0),m=t.n(S),f=t(2),T=t.n(f),M=t(50),P=t.n(M),E=t(8),r=t(6),e=t(9),o=t(18),h=["children","label"],A=T()(e.Flex)(n||(n=c()([`
  svg {
    height: `,`rem;
    width: `,`rem;
    path {
      fill: `,`;
    }
  }
  :last-of-type `,` {
    display: none;
  }
  :last-of-type `,` {
    color: `,`;
    font-weight: `,`;
  }
`])),.625,.625,function(U){return U.theme.colors.neutral500},r.Box,E.Typography,function(U){return U.theme.colors.neutral800},function(U){return U.theme.fontWeights.bold}),B=function(U){var V=U.children;return O.a.createElement(A,{inline:!0,as:"li"},O.a.createElement(E.Typography,{variant:"pi",textColor:"neutral600"},V),O.a.createElement(r.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},O.a.createElement(P.a,null)))};B.displayName="Crumb",B.propTypes={children:m.a.string.isRequired};var H=m.a.shape({type:m.a.oneOf([B])}),_=function(U){var V=U.children,J=U.label,ee=u()(U,h);return O.a.createElement(e.Flex,ee,O.a.createElement(o.VisuallyHidden,null,J),O.a.createElement("ol",{"aria-hidden":!0},V))};_.displayName="Breadcrumbs",_.propTypes={children:m.a.oneOfType([m.a.arrayOf(H),H]).isRequired,label:m.a.string.isRequired}},13:function(s,a){function t(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(s.exports=t=function(i){return typeof i},s.exports.default=s.exports,s.exports.__esModule=!0):(s.exports=t=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},s.exports.default=s.exports,s.exports.__esModule=!0),t(n)}s.exports=t,s.exports.default=s.exports,s.exports.__esModule=!0},18:function(s,a,t){"use strict";t.r(a),t.d(a,"VisuallyHidden",function(){return c});var n,i=t(3),u=t.n(i),d=t(2),c=t.n(d).a.div(n||(n=u()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(s,a,t){"use strict";var n=t(20);function i(){}function u(){}u.resetWarningCache=i,s.exports=function(){function d(O,S,m,f,T,M){if(M!==n){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function c(){return d}d.isRequired=d;var p={array:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:c,element:d,elementType:d,instanceOf:c,node:d,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:i};return p.PropTypes=p,p}},2:function(s,a){s.exports=L},20:function(s,a,t){"use strict";s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(s,a){s.exports=function(t,n){(n==null||n>t.length)&&(n=t.length);for(var i=0,u=new Array(n);i<n;i++)u[i]=t[i];return u},s.exports.default=s.exports,s.exports.__esModule=!0},22:function(s,a,t){var n=t(21);s.exports=function(i,u){if(i){if(typeof i=="string")return n(i,u);var d=Object.prototype.toString.call(i).slice(8,-1);return d==="Object"&&i.constructor&&(d=i.constructor.name),d==="Map"||d==="Set"?Array.from(i):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?n(i,u):void 0}},s.exports.default=s.exports,s.exports.__esModule=!0},24:function(s,a){s.exports=function(t,n){if(t==null)return{};var i,u,d={},c=Object.keys(t);for(u=0;u<c.length;u++)i=c[u],n.indexOf(i)>=0||(d[i]=t[i]);return d},s.exports.default=s.exports,s.exports.__esModule=!0},25:function(s,a){s.exports=function(t){if(Array.isArray(t))return t},s.exports.default=s.exports,s.exports.__esModule=!0},26:function(s,a){s.exports=function(t,n){var i=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var u,d,c=[],p=!0,O=!1;try{for(i=i.call(t);!(p=(u=i.next()).done)&&(c.push(u.value),!n||c.length!==n);p=!0);}catch(S){O=!0,d=S}finally{try{p||i.return==null||i.return()}finally{if(O)throw d}}return c}},s.exports.default=s.exports,s.exports.__esModule=!0},27:function(s,a){s.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},s.exports.default=s.exports,s.exports.__esModule=!0},3:function(s,a){s.exports=function(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))},s.exports.default=s.exports,s.exports.__esModule=!0},4:function(s,a,t){var n=t(24);s.exports=function(i,u){if(i==null)return{};var d,c,p=n(i,u);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(i);for(c=0;c<O.length;c++)d=O[c],u.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(i,d)&&(p[d]=i[d])}return p},s.exports.default=s.exports,s.exports.__esModule=!0},50:function(s,a){s.exports=l},6:function(s,a,t){"use strict";t.r(a),t.d(a,"Box",function(){return r});var n,i=t(3),u=t.n(i),d=t(2),c=t.n(d),p=t(7),O=t(1),S=t.n(O),m=t(0),f=t.n(m),T=function(e){return S.a.createElement("div",e)},M={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:f.a.func,background:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.string]),borderColor:f.a.string,children:f.a.oneOfType([f.a.node,f.a.string]),color:f.a.string,flex:f.a.oneOfType([f.a.string,f.a.string]),grow:f.a.oneOfType([f.a.string,f.a.string]),hasRadius:f.a.bool,hiddenS:f.a.bool,hiddenXS:f.a.bool,padding:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingBottom:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingLeft:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingRight:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingTop:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),shadow:f.a.string,shrink:f.a.oneOfType([f.a.string,f.a.string])};T.defaultProps=M,T.propTypes=P;var E={color:!0},r=c.a.div.withConfig({shouldForwardProp:function(e,o){return!E[e]&&o(e)}})(n||(n=u()([`
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
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,h=e.background;return o.colors[h]},function(e){var o=e.theme,h=e.color;return o.colors[h]},function(e){var o=e.theme,h=e.padding;return Object(p.a)("padding",h,o)},function(e){var o=e.theme,h=e.paddingTop;return Object(p.a)("padding-top",h,o)},function(e){var o=e.theme,h=e.paddingRight;return Object(p.a)("padding-right",h,o)},function(e){var o=e.theme,h=e.paddingBottom;return Object(p.a)("padding-bottom",h,o)},function(e){var o=e.theme,h=e.paddingLeft;return Object(p.a)("padding-left",h,o)},function(e){var o=e.theme,h=e.marginLeft;return Object(p.a)("margin-left",h,o)},function(e){var o=e.theme,h=e.marginRight;return Object(p.a)("margin-right",h,o)},function(e){var o=e.theme,h=e.marginTop;return Object(p.a)("margin-top",h,o)},function(e){var o=e.theme,h=e.marginBottom;return Object(p.a)("margin-bottom",h,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,h=e.hasRadius,A=e.borderRadius;return h?o.borderRadius:A},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,h=e.borderColor,A=e.borderStyle,B=e.borderWidth;if(h&&!A&&!B)return"1px solid ".concat(o.colors[h])},function(e){var o=e.theme,h=e.shadow;return o.shadows[h]},function(e){return e.pointerEvents},function(e){var o=e._hover,h=e.theme;return o?o(h):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});r.defaultProps=M,r.propTypes=P},7:function(s,a,t){"use strict";var n=t(10),i=t.n(n),u=t(13),d=t.n(u);a.a=function(c,p,O){var S=p;if(Array.isArray(p)||d()(p)!=="object"||(S=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),S!==void 0){if(Array.isArray(S)){var m=S,f=i()(m,3),T=f[0],M=f[1],P=f[2],E="".concat(c,": ").concat(O.spaces[T],";");return M!==void 0&&(E+="".concat(O.mediaQueries.tablet,`{
          `).concat(c,": ").concat(O.spaces[M],`;
        }`)),P!==void 0&&(E+="".concat(O.mediaQueries.mobile,`{
          `).concat(c,": ").concat(O.spaces[P],`;
        }`)),E}var r=O.spaces[S]||S;return"".concat(c,": ").concat(r,";")}}},8:function(s,a,t){"use strict";t.r(a),t.d(a,"Typography",function(){return r});var n,i=t(3),u=t.n(i),d=t(2),c=t.n(d),p=["alpha","beta","delta","epsilon","omega","pi","sigma"],O=t(1),S=t.n(O),m=t(0),f=t.n(m),T=function(e){return S.a.createElement("div",e)},M={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},P={ellipsis:f.a.bool,fontSize:f.a.oneOfType([f.a.number,f.a.string]),fontWeight:f.a.string,lineHeight:f.a.oneOfType([f.a.number,f.a.string]),textColor:f.a.string,textTransform:f.a.string,variant:f.a.oneOf(p)};T.defaultProps=M,T.propTypes=P;var E={fontSize:!0,fontWeight:!0},r=c.a.span.withConfig({shouldForwardProp:function(e,o){return!E[e]&&o(e)}})(n||(n=u()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var o=e.theme,h=e.fontWeight;return o.fontWeights[h]},function(e){var o=e.theme,h=e.fontSize;return o.fontSizes[h]},function(e){var o=e.theme,h=e.lineHeight;return o.lineHeights[h]},function(e){var o=e.theme,h=e.textColor;return o.colors[h||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var o=e.variant,h=e.theme;switch(o){case"alpha":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[5],`;
        line-height: `).concat(h.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[4],`;
        line-height: `).concat(h.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(h.fontWeights.semiBold,`;
        font-size: `).concat(h.fontSizes[3],`;
        line-height: `).concat(h.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(h.fontSizes[3],`;
        line-height: `).concat(h.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(h.fontSizes[2],`;
        line-height: `).concat(h.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(h.fontSizes[1],`;
        line-height: `).concat(h.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[0],`;
        line-height: `).concat(h.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(h.fontSizes[2],`;
      `)}});r.defaultProps=M,r.propTypes=P},9:function(s,a,t){"use strict";t.r(a),t.d(a,"Flex",function(){return e});var n,i=t(3),u=t.n(i),d=t(2),c=t.n(d),p=t(6),O=t(7),S=t(1),m=t.n(S),f=t(0),T=t.n(f),M=function(o){return m.a.createElement("div",o)},P={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},E={alignItems:T.a.string,basis:T.a.oneOfType([T.a.string,T.a.number]),direction:T.a.string,gap:T.a.oneOfType([T.a.shape({desktop:T.a.number,mobile:T.a.number,tablet:T.a.number}),T.a.number,T.a.arrayOf(T.a.number),T.a.string]),inline:T.a.bool,justifyContent:T.a.string,reverse:T.a.bool,shrink:T.a.number,wrap:T.a.string};M.defaultProps=P,M.propTypes=E;var r={direction:!0},e=c()(p.Box).withConfig({shouldForwardProp:function(o,h){return!r[o]&&h(o)}})(n||(n=u()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(o){return o.alignItems},function(o){return o.inline?"inline-flex":"flex"},function(o){return o.direction},function(o){return o.shrink},function(o){return o.wrap},function(o){var h=o.gap,A=o.theme;return Object(O.a)("gap",h,A)},function(o){return o.justifyContent});e.defaultProps=P,e.propTypes=E}})})},80117:(D,Z,g)=>{"use strict";D.exports=g(41706)},41706:function(D,Z,g){(function(v,L){D.exports=L(g(67294),g(78384))})(this,function(v,L){return function(l){var s={};function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return l[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=l,a.c=s,a.d=function(t,n,i){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},a.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n||4&n&&typeof t=="object"&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&typeof t!="string")for(var u in t)a.d(i,u,function(d){return t[d]}.bind(null,u));return i},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="",a(a.s=110)}({0:function(l,s,a){l.exports=a(19)()},1:function(l,s){l.exports=v},10:function(l,s,a){var t=a(25),n=a(26),i=a(22),u=a(27);l.exports=function(d,c){return t(d)||n(d,c)||i(d,c)||u()},l.exports.default=l.exports,l.exports.__esModule=!0},110:function(l,s,a){"use strict";a.r(s),a.d(s,"Main",function(){return r}),a.d(s,"SkipToContent",function(){return A});var t,n=a(5),i=a.n(n),u=a(4),d=a.n(u),c=a(3),p=a.n(c),O=a(1),S=a.n(O),m=a(0),f=a.n(m),T=a(2),M=a.n(T),P=["labelledBy"],E=M.a.main(t||(t=p()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),r=function(B){var H=B.labelledBy,_=d()(B,P),U=H||"main-content-title";return S.a.createElement(E,i()({"aria-labelledby":U,id:"main-content",tabIndex:-1},_))};r.defaultProps={labelledBy:void 0},r.propTypes={labelledBy:f.a.string};var e,o=a(6),h=M()(o.Box)(e||(e=p()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(B){return B.theme.spaces[3]},function(B){return B.theme.spaces[3]}),A=function(B){var H=B.children;return S.a.createElement(h,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},H)};A.propTypes={children:f.a.node.isRequired}},13:function(l,s){function a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(l.exports=a=function(n){return typeof n},l.exports.default=l.exports,l.exports.__esModule=!0):(l.exports=a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l.exports.default=l.exports,l.exports.__esModule=!0),a(t)}l.exports=a,l.exports.default=l.exports,l.exports.__esModule=!0},19:function(l,s,a){"use strict";var t=a(20);function n(){}function i(){}i.resetWarningCache=n,l.exports=function(){function u(p,O,S,m,f,T){if(T!==t){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}function d(){return u}u.isRequired=u;var c={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:d,element:u,elementType:u,instanceOf:d,node:u,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:i,resetWarningCache:n};return c.PropTypes=c,c}},2:function(l,s){l.exports=L},20:function(l,s,a){"use strict";l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(l,s){l.exports=function(a,t){(t==null||t>a.length)&&(t=a.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=a[n];return i},l.exports.default=l.exports,l.exports.__esModule=!0},22:function(l,s,a){var t=a(21);l.exports=function(n,i){if(n){if(typeof n=="string")return t(n,i);var u=Object.prototype.toString.call(n).slice(8,-1);return u==="Object"&&n.constructor&&(u=n.constructor.name),u==="Map"||u==="Set"?Array.from(n):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?t(n,i):void 0}},l.exports.default=l.exports,l.exports.__esModule=!0},24:function(l,s){l.exports=function(a,t){if(a==null)return{};var n,i,u={},d=Object.keys(a);for(i=0;i<d.length;i++)n=d[i],t.indexOf(n)>=0||(u[n]=a[n]);return u},l.exports.default=l.exports,l.exports.__esModule=!0},25:function(l,s){l.exports=function(a){if(Array.isArray(a))return a},l.exports.default=l.exports,l.exports.__esModule=!0},26:function(l,s){l.exports=function(a,t){var n=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var i,u,d=[],c=!0,p=!1;try{for(n=n.call(a);!(c=(i=n.next()).done)&&(d.push(i.value),!t||d.length!==t);c=!0);}catch(O){p=!0,u=O}finally{try{c||n.return==null||n.return()}finally{if(p)throw u}}return d}},l.exports.default=l.exports,l.exports.__esModule=!0},27:function(l,s){l.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},l.exports.default=l.exports,l.exports.__esModule=!0},3:function(l,s){l.exports=function(a,t){return t||(t=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(t)}}))},l.exports.default=l.exports,l.exports.__esModule=!0},4:function(l,s,a){var t=a(24);l.exports=function(n,i){if(n==null)return{};var u,d,c=t(n,i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(d=0;d<p.length;d++)u=p[d],i.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(n,u)&&(c[u]=n[u])}return c},l.exports.default=l.exports,l.exports.__esModule=!0},5:function(l,s){function a(){return l.exports=a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},l.exports.default=l.exports,l.exports.__esModule=!0,a.apply(this,arguments)}l.exports=a,l.exports.default=l.exports,l.exports.__esModule=!0},6:function(l,s,a){"use strict";a.r(s),a.d(s,"Box",function(){return E});var t,n=a(3),i=a.n(n),u=a(2),d=a.n(u),c=a(7),p=a(1),O=a.n(p),S=a(0),m=a.n(S),f=function(r){return O.a.createElement("div",r)},T={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},M={_hover:m.a.func,background:m.a.string,basis:m.a.oneOfType([m.a.string,m.a.string]),borderColor:m.a.string,children:m.a.oneOfType([m.a.node,m.a.string]),color:m.a.string,flex:m.a.oneOfType([m.a.string,m.a.string]),grow:m.a.oneOfType([m.a.string,m.a.string]),hasRadius:m.a.bool,hiddenS:m.a.bool,hiddenXS:m.a.bool,padding:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingBottom:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingLeft:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingRight:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingTop:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),shadow:m.a.string,shrink:m.a.oneOfType([m.a.string,m.a.string])};f.defaultProps=T,f.propTypes=M;var P={color:!0},E=d.a.div.withConfig({shouldForwardProp:function(r,e){return!P[r]&&e(r)}})(t||(t=i()([`
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
`])),function(r){var e=r.fontSize;return r.theme.fontSizes[e]||e},function(r){var e=r.theme,o=r.background;return e.colors[o]},function(r){var e=r.theme,o=r.color;return e.colors[o]},function(r){var e=r.theme,o=r.padding;return Object(c.a)("padding",o,e)},function(r){var e=r.theme,o=r.paddingTop;return Object(c.a)("padding-top",o,e)},function(r){var e=r.theme,o=r.paddingRight;return Object(c.a)("padding-right",o,e)},function(r){var e=r.theme,o=r.paddingBottom;return Object(c.a)("padding-bottom",o,e)},function(r){var e=r.theme,o=r.paddingLeft;return Object(c.a)("padding-left",o,e)},function(r){var e=r.theme,o=r.marginLeft;return Object(c.a)("margin-left",o,e)},function(r){var e=r.theme,o=r.marginRight;return Object(c.a)("margin-right",o,e)},function(r){var e=r.theme,o=r.marginTop;return Object(c.a)("margin-top",o,e)},function(r){var e=r.theme,o=r.marginBottom;return Object(c.a)("margin-bottom",o,e)},function(r){var e=r.theme;return r.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(r){var e=r.theme;return r.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(r){var e=r.theme,o=r.hasRadius,h=r.borderRadius;return o?e.borderRadius:h},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var e=r.borderColor;return r.theme.colors[e]},function(r){var e=r.theme,o=r.borderColor,h=r.borderStyle,A=r.borderWidth;if(o&&!h&&!A)return"1px solid ".concat(e.colors[o])},function(r){var e=r.theme,o=r.shadow;return e.shadows[o]},function(r){return r.pointerEvents},function(r){var e=r._hover,o=r.theme;return e?e(o):void 0},function(r){return r.display},function(r){return r.position},function(r){var e=r.left;return r.theme.spaces[e]||e},function(r){var e=r.right;return r.theme.spaces[e]||e},function(r){var e=r.top;return r.theme.spaces[e]||e},function(r){var e=r.bottom;return r.theme.spaces[e]||e},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var e=r.width;return r.theme.spaces[e]||e},function(r){var e=r.maxWidth;return r.theme.spaces[e]||e},function(r){var e=r.minWidth;return r.theme.spaces[e]||e},function(r){var e=r.height;return r.theme.spaces[e]||e},function(r){var e=r.maxHeight;return r.theme.spaces[e]||e},function(r){var e=r.minHeight;return r.theme.spaces[e]||e},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});E.defaultProps=T,E.propTypes=M},7:function(l,s,a){"use strict";var t=a(10),n=a.n(t),i=a(13),u=a.n(i);s.a=function(d,c,p){var O=c;if(Array.isArray(c)||u()(c)!=="object"||(O=[c==null?void 0:c.desktop,c==null?void 0:c.tablet,c==null?void 0:c.mobile]),O!==void 0){if(Array.isArray(O)){var S=O,m=n()(S,3),f=m[0],T=m[1],M=m[2],P="".concat(d,": ").concat(p.spaces[f],";");return T!==void 0&&(P+="".concat(p.mediaQueries.tablet,`{
          `).concat(d,": ").concat(p.spaces[T],`;
        }`)),M!==void 0&&(P+="".concat(p.mediaQueries.mobile,`{
          `).concat(d,": ").concat(p.spaces[M],`;
        }`)),P}var E=p.spaces[O]||O;return"".concat(d,": ").concat(E,";")}}}})})},8971:(D,Z,g)=>{"use strict";g.r(Z),g.d(Z,{ProvidersPage:()=>xe,default:()=>$e});var v=g(67294),L=g(97132),l=g(68547),s=g(18721),a=g.n(s),t=g(11700),n=g.n(t),i=g(67814),u=g(35395),d=g(80117),c=g(67422),p=g(43546),O=g(33483),S=g(19631),m=g(49549),f=g(56204),T=g.n(f),M=g(23724),P=g(53209),E=g(89031);const r={id:(0,E.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},e={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},o={id:(0,E.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},h={id:(0,E.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},A={id:(0,E.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},B={id:(0,E.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},H={id:(0,E.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},_={id:(0,E.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},V={email:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6}]],schema:P.Ry().shape({enabled:P.Xg().required(l.translatedErrors.required)})},providers:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6,validations:{required:!0}}],[{intlLabel:A,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:_,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:r,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:B,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:P.Ry().shape({enabled:P.Xg().required(l.translatedErrors.required),key:P.Z_().when("enabled",{is:!0,then:P.Z_().required(l.translatedErrors.required),otherwise:P.Z_()}),secret:P.Z_().when("enabled",{is:!0,then:P.Z_().required(l.translatedErrors.required),otherwise:P.Z_()}),callback:P.Z_().when("enabled",{is:!0,then:P.Z_().required(l.translatedErrors.required),otherwise:P.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6,validations:{required:!0}}],[{intlLabel:A,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:_,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,E.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,E.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:r,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:B,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:P.Ry().shape({enabled:P.Xg().required(l.translatedErrors.required),key:P.Z_().when("enabled",{is:!0,then:P.Z_().required(l.translatedErrors.required),otherwise:P.Z_()}),secret:P.Z_().when("enabled",{is:!0,then:P.Z_().required(l.translatedErrors.required),otherwise:P.Z_()}),subdomain:P.Z_().when("enabled",{is:!0,then:P.Z_().required(l.translatedErrors.required),otherwise:P.Z_()}),callback:P.Z_().when("enabled",{is:!0,then:P.Z_().required(l.translatedErrors.required),otherwise:P.Z_()})})}};var J=(b,y,x)=>new Promise((F,C)=>{var W=R=>{try{k(x.next(R))}catch(j){C(j)}},z=R=>{try{k(x.throw(R))}catch(j){C(j)}},k=R=>R.done?F(R.value):Promise.resolve(R.value).then(W,z);k((x=x.apply(b,y)).next())});const ee=b=>J(void 0,null,function*(){try{const{data:y}=yield E.be.get((0,E.Gc)("providers"));return y}catch(y){throw b({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Te=b=>E.be.put((0,E.Gc)("providers"),b);var Ee=g(96486);const Se=b=>(0,Ee.sortBy)(Object.keys(b).reduce((y,x)=>{const{icon:F,enabled:C,subdomain:W}=b[x],z=F==="envelope"?["fas","envelope"]:["fab",F];return W!==void 0?y.push({name:x,icon:z,enabled:C,subdomain:W}):y.push({name:x,icon:z,enabled:C}),y},[]),"name");var ue=g(81912),de=g(64459),we=g(9524),ce=g(44981),fe=g(39272),G=g(68991),Me=g(45697),w=g.n(Me),je=g(80831),Re=g(53575),Ce=g(99136),Be=Object.defineProperty,pe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,me=(b,y,x)=>y in b?Be(b,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[y]=x,te=(b,y)=>{for(var x in y||(y={}))Le.call(y,x)&&me(b,x,y[x]);if(pe)for(var x of pe(y))ze.call(y,x)&&me(b,x,y[x]);return b};const re=({description:b,disabled:y,intlLabel:x,error:F,name:C,onChange:W,placeholder:z,providerToEditName:k,type:R,value:j})=>{const{formatMessage:N}=(0,L.useIntl)(),X=C==="noName"?`${strapi.backendURL}/api/connect/${k}/callback`:j,Q=N({id:x.id,defaultMessage:x.defaultMessage},te({provider:k},x.values)),q=b?N({id:b.id,defaultMessage:b.defaultMessage},te({provider:k},b.values)):"";if(R==="bool")return v.createElement(Re.ToggleInput,{"aria-label":C,checked:j,disabled:y,hint:q,label:Q,name:C,offLabel:N({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:N({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:$=>{W({target:{name:C,value:$.target.checked}})}});const ae=z?N({id:z.id,defaultMessage:z.defaultMessage},te({},z.values)):"",ie=F?N({id:F,defaultMessage:F}):"";return v.createElement(Ce.TextInput,{"aria-label":C,disabled:y,error:ie,label:Q,name:C,onChange:W,placeholder:ae,type:R,value:X})};re.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},re.propTypes={description:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}),disabled:w().bool,error:w().string,intlLabel:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}).isRequired,name:w().string.isRequired,onChange:w().func.isRequired,placeholder:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}),providerToEditName:w().string.isRequired,type:w().string.isRequired,value:w().oneOfType([w().bool,w().string])};const Ie=re;var Ae=Object.defineProperty,Fe=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ve=(b,y,x)=>y in b?Ae(b,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[y]=x,He=(b,y)=>{for(var x in y||(y={}))Ue.call(y,x)&&ve(b,x,y[x]);if(he)for(var x of he(y))We.call(y,x)&&ve(b,x,y[x]);return b},De=(b,y)=>Fe(b,ke(y));const ne=({headerBreadcrumbs:b,initialData:y,isSubmiting:x,layout:F,isOpen:C,onSubmit:W,onToggle:z,providerToEditName:k})=>{const{formatMessage:R}=(0,L.useIntl)();return C?v.createElement(G.ModalLayout,{onClose:z,labelledBy:"title"},v.createElement(G.ModalHeader,null,v.createElement(ce.Breadcrumbs,{label:b.join(", ")},b.map(j=>v.createElement(ce.Crumb,{key:j},j)))),v.createElement(je.Formik,{onSubmit:j=>W(j),initialValues:y,validationSchema:F.schema,validateOnChange:!1},({errors:j,handleChange:N,values:X})=>v.createElement(l.Form,null,v.createElement(G.ModalBody,null,v.createElement(we.Stack,{spacing:1},v.createElement(fe.Grid,{gap:5},F.form.map(Q=>Q.map(q=>v.createElement(fe.GridItem,{key:q.name,col:q.size,xs:12},v.createElement(Ie,De(He({},q),{error:j[q.name],onChange:N,value:X[q.name],providerToEditName:k})))))))),v.createElement(G.ModalFooter,{startActions:v.createElement(de.Button,{variant:"tertiary",onClick:z,type:"button"},R({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:v.createElement(v.Fragment,null,v.createElement(de.Button,{type:"submit",loading:x},R({id:"global.save",defaultMessage:"Save"})))})))):null};ne.defaultProps={initialData:null,providerToEditName:null},ne.propTypes={headerBreadcrumbs:w().arrayOf(w().string).isRequired,initialData:w().object,layout:w().shape({form:w().arrayOf(w().array),schema:w().object}).isRequired,isOpen:w().bool.isRequired,isSubmiting:w().bool.isRequired,onSubmit:w().func.isRequired,onToggle:w().func.isRequired,providerToEditName:w().string};const Ze=ne;var Ne=Object.defineProperty,qe=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,be=(b,y,x)=>y in b?Ne(b,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[y]=x,oe=(b,y)=>{for(var x in y||(y={}))Ve.call(y,x)&&be(b,x,y[x]);if(ge)for(var x of ge(y))Xe.call(y,x)&&be(b,x,y[x]);return b},Qe=(b,y)=>qe(b,_e(y)),ye=(b,y,x)=>new Promise((F,C)=>{var W=R=>{try{k(x.next(R))}catch(j){C(j)}},z=R=>{try{k(x.throw(R))}catch(j){C(j)}},k=R=>R.done?F(R.value):Promise.resolve(R.value).then(W,z);k((x=x.apply(b,y)).next())});const xe=()=>{const{formatMessage:b}=(0,L.useIntl)();(0,l.useFocusWhenNavigate)();const{notifyStatus:y}=(0,c.useNotifyAT)(),x=(0,M.useQueryClient)(),{trackUsage:F}=(0,l.useTracking)(),C=(0,v.useRef)(F),[W,z]=(0,v.useState)(!1),[k,R]=(0,v.useState)(!1),[j,N]=(0,v.useState)(null),X=(0,l.useNotification)(),{lockApp:Q,unlockApp:q}=(0,l.useOverlayBlocker)(),ae=(0,v.useMemo)(()=>({update:ue.Z.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:$}}=(0,l.useRBAC)(ae),{isLoading:Ge,data:K,isFetching:Ke}=(0,M.useQuery)("get-providers",()=>ee(X),{onSuccess:()=>{y(b({id:(0,E.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ye=Ge||Ke,Je=(0,M.useMutation)(Te,{onSuccess:()=>ye(void 0,null,function*(){yield x.invalidateQueries("get-providers"),X({type:"info",message:{id:(0,E.OB)("notification.success.submit")}}),C.current("didEditAuthenticationProvider"),R(!1),se(),q()}),onError:()=>{X({type:"warning",message:{id:"notification.error"}}),q(),R(!1)},refetchActive:!1}),Y=(0,v.useMemo)(()=>Se(K),[K]),et=Y.length,Oe=(0,v.useMemo)(()=>{if(!j)return!1;const I=Y.find(le=>le.name===j);return a()(I,"subdomain")},[Y,j]),tt=b({id:(0,E.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),rt=(0,v.useMemo)(()=>j==="email"?V.email:Oe?V.providersWithSubdomain:V.providers,[j,Oe]),se=()=>{z(I=>!I)},Pe=I=>{$&&(N(I.name),se())},nt=I=>ye(void 0,null,function*(){R(!0),Q(),C.current("willEditAuthenticationProvider");const le=Qe(oe({},K),{[j]:I});Je.mutate({providers:le})});return v.createElement(u.Layout,null,v.createElement(l.SettingsPageTitle,{name:tt}),v.createElement(d.Main,null,v.createElement(u.HeaderLayout,{title:b({id:(0,E.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ye||ie?v.createElement(l.LoadingIndicatorPage,null):v.createElement(u.ContentLayout,null,v.createElement(p.Table,{colCount:4,rowCount:et+1},v.createElement(p.Thead,null,v.createElement(p.Tr,null,v.createElement(p.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},v.createElement(S.VisuallyHidden,null,b({id:(0,E.OB)("Providers.image"),defaultMessage:"Image"})))),v.createElement(p.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},b({id:"global.name",defaultMessage:"Name"}))),v.createElement(p.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},b({id:(0,E.OB)("Providers.status"),defaultMessage:"Status"}))),v.createElement(p.Th,null,v.createElement(O.Typography,{variant:"sigma"},v.createElement(S.VisuallyHidden,null,b({id:"global.settings",defaultMessage:"Settings"})))))),v.createElement(p.Tbody,null,Y.map(I=>v.createElement(p.Tr,oe({key:I.name},(0,l.onRowClick)({fn:()=>Pe(I),condition:$})),v.createElement(p.Td,{width:""},v.createElement(i.G,{icon:I.icon})),v.createElement(p.Td,{width:"45%"},v.createElement(O.Typography,{fontWeight:"semiBold",textColor:"neutral800"},I.name)),v.createElement(p.Td,{width:"65%"},v.createElement(O.Typography,{textColor:I.enabled?"success600":"danger600","data-testid":`enable-${I.name}`},I.enabled?b({id:"global.enabled",defaultMessage:"Enabled"}):b({id:"global.disabled",defaultMessage:"Disabled"}))),v.createElement(p.Td,oe({},l.stopPropagation),$&&v.createElement(m.IconButton,{onClick:()=>Pe(I),noBorder:!0,icon:v.createElement(T(),null),label:"Edit"})))))))),v.createElement(Ze,{initialData:K[j],isOpen:W,isSubmiting:k,layout:rt,headerBreadcrumbs:[b({id:(0,E.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),n()(j)],onToggle:se,onSubmit:nt,providerToEditName:j}))},$e=()=>v.createElement(l.CheckPagePermissions,{permissions:ue.Z.readProviders},v.createElement(xe,null))},46979:(D,Z,g)=>{"use strict";g.d(Z,{Z:()=>n});var v=g(9669),L=g.n(v),l=g(68547),s=g.n(l),a=(i,u,d)=>new Promise((c,p)=>{var O=f=>{try{m(d.next(f))}catch(T){p(T)}},S=f=>{try{m(d.throw(f))}catch(T){p(T)}},m=f=>f.done?c(f.value):Promise.resolve(f.value).then(O,S);m((d=d.apply(i,u)).next())});const t=L().create({baseURL:"http://localhost:1337"});t.interceptors.request.use(i=>a(void 0,null,function*(){return i.headers={Authorization:`Bearer ${l.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},i}),i=>{Promise.reject(i)}),t.interceptors.response.use(i=>i,i=>{var u;throw((u=i.response)==null?void 0:u.status)===401&&(l.auth.clearAppStorage(),window.location.reload()),i});const n=t},89031:(D,Z,g)=>{"use strict";g.d(Z,{be:()=>v.Z,YX:()=>s,Gc:()=>n,OB:()=>i.Z});var v=g(46979),L=g(96486);const s=u=>Object.keys(u).reduce((d,c)=>{const p=u[c].controllers,O=Object.keys(p).reduce((S,m)=>((0,L.isEmpty)(p[m])||(S[m]=p[m]),S),{});return(0,L.isEmpty)(O)||(d[c]={controllers:O}),d},{});var a=g(31498);const n=u=>`/${a.Z}/${u}`;var i=g(84757)}}]);
