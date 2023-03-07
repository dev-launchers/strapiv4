(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[5395],{35395:(V,on,q)=>{"use strict";V.exports=q(58779)},58779:function(V,on,q){(function(Z,X){V.exports=X(q(67294),q(78384))})(this,function(Z,X){return function(r){var p={};function e(a){if(p[a])return p[a].exports;var o=p[a]={i:a,l:!1,exports:{}};return r[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=p,e.d=function(a,o,l){e.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:l})},e.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,o){if(1&o&&(a=e(a)),8&o||4&o&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&o&&typeof a!="string")for(var c in a)e.d(l,c,function(d){return a[d]}.bind(null,c));return l},e.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(o,"a",o),o},e.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},e.p="",e(e.s=97)}({0:function(r,p,e){r.exports=e(19)()},1:function(r,p){r.exports=Z},10:function(r,p,e){var a=e(25),o=e(26),l=e(22),c=e(27);r.exports=function(d,i){return a(d)||o(d,i)||l(d,i)||c()},r.exports.default=r.exports,r.exports.__esModule=!0},13:function(r,p){function e(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=e=function(o){return typeof o},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=e=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r.exports.default=r.exports,r.exports.__esModule=!0),e(a)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},19:function(r,p,e){"use strict";var a=e(20);function o(){}function l(){}l.resetWarningCache=o,r.exports=function(){function c(b,g,S,u,f,O){if(O!==a){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}function d(){return c}c.isRequired=c;var i={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:l,resetWarningCache:o};return i.PropTypes=i,i}},2:function(r,p){r.exports=X},20:function(r,p,e){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(r,p){r.exports=function(e,a){(a==null||a>e.length)&&(a=e.length);for(var o=0,l=new Array(a);o<a;o++)l[o]=e[o];return l},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,p,e){var a=e(21);r.exports=function(o,l){if(o){if(typeof o=="string")return a(o,l);var c=Object.prototype.toString.call(o).slice(8,-1);return c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set"?Array.from(o):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?a(o,l):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,p){r.exports=function(e,a){if(e==null)return{};var o,l,c={},d=Object.keys(e);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)>=0||(c[o]=e[o]);return c},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,p){r.exports=function(e){if(Array.isArray(e))return e},r.exports.default=r.exports,r.exports.__esModule=!0},26:function(r,p){r.exports=function(e,a){var o=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var l,c,d=[],i=!0,b=!1;try{for(o=o.call(e);!(i=(l=o.next()).done)&&(d.push(l.value),!a||d.length!==a);i=!0);}catch(g){b=!0,c=g}finally{try{i||o.return==null||o.return()}finally{if(b)throw c}}return d}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,p){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,p){r.exports=function(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,p,e){var a=e(24);r.exports=function(o,l){if(o==null)return{};var c,d,i=a(o,l);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(o);for(d=0;d<b.length;d++)c=b[d],l.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(o,c)&&(i[c]=o[c])}return i},r.exports.default=r.exports,r.exports.__esModule=!0},47:function(r,p,e){"use strict";e.r(p),e.d(p,"Grid",function(){return j}),e.d(p,"GridItem",function(){return M});var a,o=e(5),l=e.n(o),c=e(4),d=e.n(c),i=e(3),b=e.n(i),g=e(1),S=e.n(g),u=e(2),f=e.n(u),O=e(0),m=e.n(O),w=Object(g.createContext)({gap:0,gridCols:12}),T=e(6),n=e(7),t=["gap","gridCols"],s=f()(T.Box)(a||(a=b()([`
  display: grid;
  grid-template-columns: repeat(`,`, 1fr);
  `,`
`])),function(v){return v.gridCols},function(v){var A=v.theme,_=v.gap;return Object(n.a)("gap",_,A)}),j=function(v){var A=v.gap,_=v.gridCols,I=d()(v,t);return S.a.createElement(w.Provider,{value:{gap:A,gridCols:_}},S.a.createElement(s,l()({gap:A,gridCols:_},I)))};j.defaultProps={gap:0,gridCols:12},j.propTypes={gap:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),gridCols:m.a.number};var R,N=["col","xs","s"],G=f.a.div(R||(R=b()([`
  grid-column: span `,`;
  max-width: 100%;

  `,` {
    grid-column: span `,`;
  }

  `,` {
    grid-column: span `,`;
  }
`])),function(v){return v.col},function(v){return v.theme.mediaQueries.tablet},function(v){return v.s},function(v){return v.theme.mediaQueries.mobile},function(v){return v.xs}),M=function(v){var A=v.col,_=v.xs,I=v.s,P=d()(v,N),k=Object(g.useContext)(w),Y=k.gap,$=k.gridCols;return S.a.createElement(G,{gap:Y,gridCols:$,col:A,xs:_,s:I},S.a.createElement(T.Box,P))};M.defaultProps={col:void 0,s:void 0,xs:void 0},M.propTypes={col:m.a.number,s:m.a.number,xs:m.a.number}},48:function(r,p,e){"use strict";e.d(p,"a",function(){return o});var a=e(1),o=function(l,c){Object(a.useEffect)(function(){var d=new ResizeObserver(c);return Array.isArray(l)?l.map(function(i){i.current&&d.observe(i.current)}):l.current&&d.observe(l.current),function(){d.disconnect()}},[])}},5:function(r,p){function e(){return r.exports=e=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(a[c]=l[c])}return a},r.exports.default=r.exports,r.exports.__esModule=!0,e.apply(this,arguments)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,p,e){"use strict";e.r(p),e.d(p,"Box",function(){return T});var a,o=e(3),l=e.n(o),c=e(2),d=e.n(c),i=e(7),b=e(1),g=e.n(b),S=e(0),u=e.n(S),f=function(n){return g.a.createElement("div",n)},O={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},m={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])};f.defaultProps=O,f.propTypes=m;var w={color:!0},T=d.a.div.withConfig({shouldForwardProp:function(n,t){return!w[n]&&t(n)}})(a||(a=l()([`
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
`])),function(n){var t=n.fontSize;return n.theme.fontSizes[t]||t},function(n){var t=n.theme,s=n.background;return t.colors[s]},function(n){var t=n.theme,s=n.color;return t.colors[s]},function(n){var t=n.theme,s=n.padding;return Object(i.a)("padding",s,t)},function(n){var t=n.theme,s=n.paddingTop;return Object(i.a)("padding-top",s,t)},function(n){var t=n.theme,s=n.paddingRight;return Object(i.a)("padding-right",s,t)},function(n){var t=n.theme,s=n.paddingBottom;return Object(i.a)("padding-bottom",s,t)},function(n){var t=n.theme,s=n.paddingLeft;return Object(i.a)("padding-left",s,t)},function(n){var t=n.theme,s=n.marginLeft;return Object(i.a)("margin-left",s,t)},function(n){var t=n.theme,s=n.marginRight;return Object(i.a)("margin-right",s,t)},function(n){var t=n.theme,s=n.marginTop;return Object(i.a)("margin-top",s,t)},function(n){var t=n.theme,s=n.marginBottom;return Object(i.a)("margin-bottom",s,t)},function(n){var t=n.theme;return n.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(n){var t=n.theme;return n.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(n){var t=n.theme,s=n.hasRadius,j=n.borderRadius;return s?t.borderRadius:j},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var t=n.borderColor;return n.theme.colors[t]},function(n){var t=n.theme,s=n.borderColor,j=n.borderStyle,R=n.borderWidth;if(s&&!j&&!R)return"1px solid ".concat(t.colors[s])},function(n){var t=n.theme,s=n.shadow;return t.shadows[s]},function(n){return n.pointerEvents},function(n){var t=n._hover,s=n.theme;return t?t(s):void 0},function(n){return n.display},function(n){return n.position},function(n){var t=n.left;return n.theme.spaces[t]||t},function(n){var t=n.right;return n.theme.spaces[t]||t},function(n){var t=n.top;return n.theme.spaces[t]||t},function(n){var t=n.bottom;return n.theme.spaces[t]||t},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var t=n.width;return n.theme.spaces[t]||t},function(n){var t=n.maxWidth;return n.theme.spaces[t]||t},function(n){var t=n.minWidth;return n.theme.spaces[t]||t},function(n){var t=n.height;return n.theme.spaces[t]||t},function(n){var t=n.maxHeight;return n.theme.spaces[t]||t},function(n){var t=n.minHeight;return n.theme.spaces[t]||t},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});T.defaultProps=O,T.propTypes=m},7:function(r,p,e){"use strict";var a=e(10),o=e.n(a),l=e(13),c=e.n(l);p.a=function(d,i,b){var g=i;if(Array.isArray(i)||c()(i)!=="object"||(g=[i==null?void 0:i.desktop,i==null?void 0:i.tablet,i==null?void 0:i.mobile]),g!==void 0){if(Array.isArray(g)){var S=g,u=o()(S,3),f=u[0],O=u[1],m=u[2],w="".concat(d,": ").concat(b.spaces[f],";");return O!==void 0&&(w+="".concat(b.mediaQueries.tablet,`{
          `).concat(d,": ").concat(b.spaces[O],`;
        }`)),m!==void 0&&(w+="".concat(b.mediaQueries.mobile,`{
          `).concat(d,": ").concat(b.spaces[m],`;
        }`)),w}var T=b.spaces[g]||g;return"".concat(d,": ").concat(T,";")}}},8:function(r,p,e){"use strict";e.r(p),e.d(p,"Typography",function(){return T});var a,o=e(3),l=e.n(o),c=e(2),d=e.n(c),i=["alpha","beta","delta","epsilon","omega","pi","sigma"],b=e(1),g=e.n(b),S=e(0),u=e.n(S),f=function(n){return g.a.createElement("div",n)},O={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},m={ellipsis:u.a.bool,fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(i)};f.defaultProps=O,f.propTypes=m;var w={fontSize:!0,fontWeight:!0},T=d.a.span.withConfig({shouldForwardProp:function(n,t){return!w[n]&&t(n)}})(a||(a=l()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(n){var t=n.theme,s=n.fontWeight;return t.fontWeights[s]},function(n){var t=n.theme,s=n.fontSize;return t.fontSizes[s]},function(n){var t=n.theme,s=n.lineHeight;return t.lineHeights[s]},function(n){var t=n.theme,s=n.textColor;return t.colors[s||"neutral800"]},function(n){return n.textTransform},function(n){return n.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(n){var t=n.variant,s=n.theme;switch(t){case"alpha":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[5],`;
        line-height: `).concat(s.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[4],`;
        line-height: `).concat(s.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(s.fontWeights.semiBold,`;
        font-size: `).concat(s.fontSizes[3],`;
        line-height: `).concat(s.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(s.fontSizes[3],`;
        line-height: `).concat(s.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(s.fontSizes[2],`;
        line-height: `).concat(s.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(s.fontSizes[1],`;
        line-height: `).concat(s.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[0],`;
        line-height: `).concat(s.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(s.fontSizes[2],`;
      `)}});T.defaultProps=O,T.propTypes=m},9:function(r,p,e){"use strict";e.r(p),e.d(p,"Flex",function(){return n});var a,o=e(3),l=e.n(o),c=e(2),d=e.n(c),i=e(6),b=e(7),g=e(1),S=e.n(g),u=e(0),f=e.n(u),O=function(t){return S.a.createElement("div",t)},m={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},w={alignItems:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.number]),direction:f.a.string,gap:f.a.oneOfType([f.a.shape({desktop:f.a.number,mobile:f.a.number,tablet:f.a.number}),f.a.number,f.a.arrayOf(f.a.number),f.a.string]),inline:f.a.bool,justifyContent:f.a.string,reverse:f.a.bool,shrink:f.a.number,wrap:f.a.string};O.defaultProps=m,O.propTypes=w;var T={direction:!0},n=d()(i.Box).withConfig({shouldForwardProp:function(t,s){return!T[t]&&s(t)}})(a||(a=l()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.shrink},function(t){return t.wrap},function(t){var s=t.gap,j=t.theme;return Object(b.a)("gap",s,j)},function(t){return t.justifyContent});n.defaultProps=m,n.propTypes=w},97:function(r,p,e){"use strict";e.r(p),e.d(p,"Layout",function(){return w}),e.d(p,"ActionLayout",function(){return R}),e.d(p,"ContentLayout",function(){return N}),e.d(p,"HeaderLayout",function(){return Q}),e.d(p,"BaseHeaderLayout",function(){return L}),e.d(p,"TwoColsLayout",function(){return en}),e.d(p,"GridLayout",function(){return tn});var a,o,l=e(3),c=e.n(l),d=e(1),i=e.n(d),b=e(0),g=e.n(b),S=e(2),u=e.n(S),f=e(6),O=u()(f.Box)(a||(a=c()([`
  display: grid;
  grid-template-columns: `,`;
`])),function(h){return h.hasSideNav?"auto 1fr":"1fr"}),m=u()(f.Box)(o||(o=c()([`
  overflow-x: hidden;
`]))),w=function(h){var y=h.sideNav,x=h.children;return i.a.createElement(O,{hasSideNav:Boolean(y)},y,i.a.createElement(m,{paddingBottom:10},x))};w.defaultProps={sideNav:void 0},w.propTypes={children:g.a.node.isRequired,sideNav:g.a.node};var T,n,t=e(9),s=u()(t.Flex)(T||(T=c()([`
  & > * + * {
    margin-left: `,`;
  }

  margin-left: `,`;
`])),function(h){return h.theme.spaces[2]},function(h){return h.pullRight?"auto":void 0}),j=u()(s)(n||(n=c()([`
  flex-shrink: 0;
`]))),R=function(h){var y=h.startActions,x=h.endActions;return y||x?i.a.createElement(f.Box,{paddingLeft:10,paddingRight:10},i.a.createElement(f.Box,{paddingBottom:4},i.a.createElement(t.Flex,{justifyContent:"space-between",alignItems:"flex-start"},y&&i.a.createElement(s,{wrap:"wrap"},y),x&&i.a.createElement(j,{pullRight:!0},x)))):null};R.defaultProps={endActions:void 0,startActions:void 0},R.propTypes={endActions:g.a.node,startActions:g.a.node};var N=function(h){var y=h.children;return i.a.createElement(f.Box,{paddingLeft:10,paddingRight:10},y)};N.propTypes={children:g.a.node.isRequired};var G,M=e(4),v=e.n(M),A=e(5),_=e.n(A),I=e(10),P=e.n(I),k=e(8),Y=e(48),$=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],an=function(){var h=Object(d.useRef)(null),y=Object(d.useState)(null),x=P()(y,2),B=x[0],C=x[1],E=function(F){var z=Object(d.useRef)(null),sn=Object(d.useState)(!0),rn=P()(sn,2),cn=rn[0],dn=rn[1],ln=function(D){var U=P()(D,1)[0];dn(U.isIntersecting)};return Object(d.useEffect)(function(){var D=z.current,U=new IntersectionObserver(ln,F);return D&&U.observe(z.current),function(){D&&U.disconnect()}},[z,F]),[z,cn]}({root:null,rootMargin:"0px",threshold:0}),W=P()(E,2),H=W[0],K=W[1];return Object(Y.a)(H,function(){H.current&&C(H.current.getBoundingClientRect())}),Object(d.useEffect)(function(){h.current&&C(h.current.getBoundingClientRect())},[h]),{containerRef:H,isVisible:K,baseHeaderLayoutRef:h,headerSize:B}},Q=function(h){var y=an(),x=y.containerRef,B=y.isVisible,C=y.baseHeaderLayoutRef,E=y.headerSize;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{height:E==null?void 0:E.height},ref:x},B&&i.a.createElement(L,_()({ref:C},h))),!B&&i.a.createElement(L,_()({},h,{sticky:!0,width:E==null?void 0:E.width})))};Q.displayName="HeaderLayout";var un=u()(f.Box)(G||(G=c()([`
  position: fixed;
  top: 0;
  right: 0;
  width: `,`px;
  z-index: 4;
  box-shadow: `,`;
`])),function(h){return h.width},function(h){return h.theme.shadows.tableShadow}),L=i.a.forwardRef(function(h,y){var x=h.navigationAction,B=h.primaryAction,C=h.secondaryAction,E=h.subtitle,W=h.title,H=h.sticky,K=h.width,F=v()(h,$),z=typeof E=="string";return H?i.a.createElement(un,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:K,"data-strapi-header-sticky":!0},i.a.createElement(t.Flex,{justifyContent:"space-between"},i.a.createElement(t.Flex,null,x&&i.a.createElement(f.Box,{paddingRight:3},x),i.a.createElement(f.Box,null,i.a.createElement(k.Typography,_()({variant:"beta",as:"h1"},F),W),z?i.a.createElement(k.Typography,{variant:"pi",textColor:"neutral600"},E):E),C?i.a.createElement(f.Box,{paddingLeft:4},C):null),i.a.createElement(t.Flex,null,B?i.a.createElement(f.Box,{paddingLeft:2},B):void 0))):i.a.createElement(f.Box,{ref:y,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:x?6:8,background:"neutral100","data-strapi-header":!0},x?i.a.createElement(f.Box,{paddingBottom:2},x):null,i.a.createElement(t.Flex,{justifyContent:"space-between"},i.a.createElement(t.Flex,null,i.a.createElement(k.Typography,_()({as:"h1",variant:"alpha"},F),W),C?i.a.createElement(f.Box,{paddingLeft:4},C):null),B),z?i.a.createElement(k.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},E):E)});L.displayName="BaseHeaderLayout",L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},L.propTypes={navigationAction:g.a.node,primaryAction:g.a.node,secondaryAction:g.a.node,sticky:g.a.bool,subtitle:g.a.oneOfType([g.a.string,g.a.node]),title:g.a.string.isRequired,width:g.a.number},Q.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},Q.propTypes={navigationAction:g.a.node,primaryAction:g.a.node,secondaryAction:g.a.node,subtitle:g.a.oneOfType([g.a.string,g.a.node]),title:g.a.string.isRequired};var nn,J=e(47),en=function(h){var y=h.startCol,x=h.endCol;return i.a.createElement(J.Grid,{gap:4},i.a.createElement(J.GridItem,{col:9,s:12},i.a.createElement(f.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},y)),i.a.createElement(J.GridItem,{col:3,s:12},i.a.createElement(f.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},x)))};en.propTypes={endCol:g.a.node.isRequired,startCol:g.a.node.isRequired};var tn=u.a.div(nn||(nn=c()([`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: `,`;
`])),function(h){return h.theme.spaces[4]});tn.propTypes={children:g.a.node.isRequired}}})})}}]);
