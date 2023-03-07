(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[9789],{80117:(D,j,f)=>{"use strict";D.exports=f(41706)},41706:function(D,j,f){(function(l,O){D.exports=O(f(67294),f(78384))})(this,function(l,O){return function(n){var u={};function t(r){if(u[r])return u[r].exports;var o=u[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=u,t.d=function(r,o,c){t.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:c})},t.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,o){if(1&o&&(r=t(r)),8&o||4&o&&typeof r=="object"&&r&&r.__esModule)return r;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:r}),2&o&&typeof r!="string")for(var i in r)t.d(c,i,function(p){return r[p]}.bind(null,i));return c},t.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(o,"a",o),o},t.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},t.p="",t(t.s=110)}({0:function(n,u,t){n.exports=t(19)()},1:function(n,u){n.exports=l},10:function(n,u,t){var r=t(25),o=t(26),c=t(22),i=t(27);n.exports=function(p,d){return r(p)||o(p,d)||c(p,d)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,u,t){"use strict";t.r(u),t.d(u,"Main",function(){return e}),t.d(u,"SkipToContent",function(){return I});var r,o=t(5),c=t.n(o),i=t(4),p=t.n(i),d=t(3),g=t.n(d),h=t(1),C=t.n(h),s=t(0),P=t.n(s),S=t(2),T=t.n(S),b=["labelledBy"],x=T.a.main(r||(r=g()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(w){var $=w.labelledBy,V=p()(w,b),Z=$||"main-content-title";return C.a.createElement(x,c()({"aria-labelledby":Z,id:"main-content",tabIndex:-1},V))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:P.a.string};var a,m=t(6),B=T()(m.Box)(a||(a=g()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(w){return w.theme.spaces[3]},function(w){return w.theme.spaces[3]}),I=function(w){var $=w.children;return C.a.createElement(B,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},$)};I.propTypes={children:P.a.node.isRequired}},13:function(n,u){function t(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(o){return typeof o},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n.exports.default=n.exports,n.exports.__esModule=!0),t(r)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,u,t){"use strict";var r=t(20);function o(){}function c(){}c.resetWarningCache=o,n.exports=function(){function i(g,h,C,s,P,S){if(S!==r){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}function p(){return i}i.isRequired=i;var d={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:p,element:i,elementType:i,instanceOf:p,node:i,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:c,resetWarningCache:o};return d.PropTypes=d,d}},2:function(n,u){n.exports=O},20:function(n,u,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,u){n.exports=function(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,c=new Array(r);o<r;o++)c[o]=t[o];return c},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,u,t){var r=t(21);n.exports=function(o,c){if(o){if(typeof o=="string")return r(o,c);var i=Object.prototype.toString.call(o).slice(8,-1);return i==="Object"&&o.constructor&&(i=o.constructor.name),i==="Map"||i==="Set"?Array.from(o):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(o,c):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,u){n.exports=function(t,r){if(t==null)return{};var o,c,i={},p=Object.keys(t);for(c=0;c<p.length;c++)o=p[c],r.indexOf(o)>=0||(i[o]=t[o]);return i},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,u){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,u){n.exports=function(t,r){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var c,i,p=[],d=!0,g=!1;try{for(o=o.call(t);!(d=(c=o.next()).done)&&(p.push(c.value),!r||p.length!==r);d=!0);}catch(h){g=!0,i=h}finally{try{d||o.return==null||o.return()}finally{if(g)throw i}}return p}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,u){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,u){n.exports=function(t,r){return r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,u,t){var r=t(24);n.exports=function(o,c){if(o==null)return{};var i,p,d=r(o,c);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(o);for(p=0;p<g.length;p++)i=g[p],c.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(o,i)&&(d[i]=o[i])}return d},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,u){function t(){return n.exports=t=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(r[i]=c[i])}return r},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,u,t){"use strict";t.r(u),t.d(u,"Box",function(){return x});var r,o=t(3),c=t.n(o),i=t(2),p=t.n(i),d=t(7),g=t(1),h=t.n(g),C=t(0),s=t.n(C),P=function(e){return h.a.createElement("div",e)},S={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},T={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])};P.defaultProps=S,P.propTypes=T;var b={color:!0},x=p.a.div.withConfig({shouldForwardProp:function(e,a){return!b[e]&&a(e)}})(r||(r=c()([`
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
`])),function(e){var a=e.fontSize;return e.theme.fontSizes[a]||a},function(e){var a=e.theme,m=e.background;return a.colors[m]},function(e){var a=e.theme,m=e.color;return a.colors[m]},function(e){var a=e.theme,m=e.padding;return Object(d.a)("padding",m,a)},function(e){var a=e.theme,m=e.paddingTop;return Object(d.a)("padding-top",m,a)},function(e){var a=e.theme,m=e.paddingRight;return Object(d.a)("padding-right",m,a)},function(e){var a=e.theme,m=e.paddingBottom;return Object(d.a)("padding-bottom",m,a)},function(e){var a=e.theme,m=e.paddingLeft;return Object(d.a)("padding-left",m,a)},function(e){var a=e.theme,m=e.marginLeft;return Object(d.a)("margin-left",m,a)},function(e){var a=e.theme,m=e.marginRight;return Object(d.a)("margin-right",m,a)},function(e){var a=e.theme,m=e.marginTop;return Object(d.a)("margin-top",m,a)},function(e){var a=e.theme,m=e.marginBottom;return Object(d.a)("margin-bottom",m,a)},function(e){var a=e.theme;return e.hiddenS?"".concat(a.mediaQueries.tablet," { display: none; }"):void 0},function(e){var a=e.theme;return e.hiddenXS?"".concat(a.mediaQueries.mobile," { display: none; }"):void 0},function(e){var a=e.theme,m=e.hasRadius,B=e.borderRadius;return m?a.borderRadius:B},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var a=e.borderColor;return e.theme.colors[a]},function(e){var a=e.theme,m=e.borderColor,B=e.borderStyle,I=e.borderWidth;if(m&&!B&&!I)return"1px solid ".concat(a.colors[m])},function(e){var a=e.theme,m=e.shadow;return a.shadows[m]},function(e){return e.pointerEvents},function(e){var a=e._hover,m=e.theme;return a?a(m):void 0},function(e){return e.display},function(e){return e.position},function(e){var a=e.left;return e.theme.spaces[a]||a},function(e){var a=e.right;return e.theme.spaces[a]||a},function(e){var a=e.top;return e.theme.spaces[a]||a},function(e){var a=e.bottom;return e.theme.spaces[a]||a},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var a=e.width;return e.theme.spaces[a]||a},function(e){var a=e.maxWidth;return e.theme.spaces[a]||a},function(e){var a=e.minWidth;return e.theme.spaces[a]||a},function(e){var a=e.height;return e.theme.spaces[a]||a},function(e){var a=e.maxHeight;return e.theme.spaces[a]||a},function(e){var a=e.minHeight;return e.theme.spaces[a]||a},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});x.defaultProps=S,x.propTypes=T},7:function(n,u,t){"use strict";var r=t(10),o=t.n(r),c=t(13),i=t.n(c);u.a=function(p,d,g){var h=d;if(Array.isArray(d)||i()(d)!=="object"||(h=[d==null?void 0:d.desktop,d==null?void 0:d.tablet,d==null?void 0:d.mobile]),h!==void 0){if(Array.isArray(h)){var C=h,s=o()(C,3),P=s[0],S=s[1],T=s[2],b="".concat(p,": ").concat(g.spaces[P],";");return S!==void 0&&(b+="".concat(g.mediaQueries.tablet,`{
          `).concat(p,": ").concat(g.spaces[S],`;
        }`)),T!==void 0&&(b+="".concat(g.mediaQueries.mobile,`{
          `).concat(p,": ").concat(g.spaces[T],`;
        }`)),b}var x=g.spaces[h]||h;return"".concat(p,": ").concat(x,";")}}}})})},79274:function(D,j,f){(function(l,O){D.exports=O(f(67294))})(this,function(l){return function(O){var n={};function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return O[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}return u.m=O,u.c=n,u.d=function(t,r,o){u.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},u.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,r){if(1&r&&(t=u(t)),8&r||4&r&&typeof t=="object"&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&typeof t!="string")for(var c in t)u.d(o,c,function(i){return t[i]}.bind(null,c));return o},u.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(r,"a",r),r},u.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},u.p="",u(u.s=154)}({0:function(O,n){O.exports=l},154:function(O,n,u){"use strict";u.r(n);var t=u(0);function r(){return(r=Object.assign||function(o){for(var c=1;c<arguments.length;c++){var i=arguments[c];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(o[p]=i[p])}return o}).apply(this,arguments)}n.default=function(o){return t.createElement("svg",r({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},75730:(D,j,f)=>{"use strict";f.r(j),f.d(j,{default:()=>k});var l=f(67294),O=f(97132),n=f(68547),u=f(15482),t=f(64459),r=f(35395),o=f(80117),c=f(49549),i=f(33483),p=f(40264),d=f(43546),g=f(62982),h=f.n(g),C=f(31023),s=f.n(C),P=f(79274),S=f.n(P),T=f(80826),b=f(93742),x=f(96486);const a=E=>{const y=(()=>(0,x.startsWith)(E,"/")?`${strapi.backendURL}${E}`:(0,x.startsWith)(E,"https")||(0,x.startsWith)(E,"http")?E:`${strapi.backendURL}/${E}`)();return window.open(y,"_blank"),window.focus()};var m=f(4733),B=Object.defineProperty,I=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,V=(E,y,v)=>y in E?B(E,y,{enumerable:!0,configurable:!0,writable:!0,value:v}):E[y]=v,Z=(E,y)=>{for(var v in y||(y={}))w.call(y,v)&&V(E,v,y[v]);if(I)for(var v of I(y))$.call(y,v)&&V(E,v,y[v]);return E},N=(E,y,v)=>new Promise((z,Q)=>{var H=R=>{try{L(v.next(R))}catch(W){Q(W)}},A=R=>{try{L(v.throw(R))}catch(W){Q(W)}},L=R=>R.done?z(R.value):Promise.resolve(R.value).then(H,A);L((v=v.apply(E,y)).next())});const k=()=>{var E;(0,n.useFocusWhenNavigate)();const{formatMessage:y}=(0,O.useIntl)(),{data:v,isLoading:z,deleteMutation:Q,regenerateDocMutation:H}=(0,m.Z)(),[A,L]=(0,l.useState)(!1),[R,W]=(0,l.useState)(!1),[X,K]=(0,l.useState)(),G=4,Y=(((E=v==null?void 0:v.docVersions)==null?void 0:E.length)||0)+1,U=()=>{const M=v!=null&&v.prefix.startsWith("/")?"":"/";a(`${M}${v==null?void 0:v.prefix}/v${v==null?void 0:v.currentVersion}`)},J=M=>{H.mutate({version:M,prefix:v==null?void 0:v.prefix})},_=()=>{L(!A)},q=()=>N(void 0,null,function*(){W(!0),yield Q.mutateAsync({prefix:v==null?void 0:v.prefix,version:X}),L(!A),W(!1)}),ee=M=>{K(M),L(!A)},F=y({id:(0,b.O)("plugin.name"),defaultMessage:"Documentation"});return l.createElement(r.Layout,null,l.createElement(u.Helmet,{title:F}),l.createElement(o.Main,{"aria-busy":z},l.createElement(r.HeaderLayout,{title:F,subtitle:y({id:(0,b.O)("pages.PluginPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:l.createElement(n.CheckPermissions,{permissions:T.Z.open},l.createElement(t.Button,{onClick:U,startIcon:l.createElement(s(),null)},y({id:(0,b.O)("pages.PluginPage.Button.open"),defaultMessage:"Open Documentation"})))}),l.createElement(r.ContentLayout,null,z&&l.createElement(n.LoadingIndicatorPage,null,"Plugin is loading"),v!=null&&v.docVersions.length?l.createElement(d.Table,{colCount:G,rowCount:Y},l.createElement(d.Thead,null,l.createElement(d.Tr,null,l.createElement(d.Th,null,l.createElement(i.Typography,{variant:"sigma",textColor:"neutral600"},y({id:(0,b.O)("pages.PluginPage.table.version"),defaultMessage:"Version"}))),l.createElement(d.Th,null,l.createElement(i.Typography,{variant:"sigma",textColor:"neutral600"},y({id:(0,b.O)("pages.PluginPage.table.generated"),defaultMessage:"Last Generated"}))))),l.createElement(d.Tbody,null,v.docVersions.sort((M,te)=>M.generatedDate<te.generatedDate?1:-1).map(M=>l.createElement(d.Tr,{key:M.version},l.createElement(d.Td,{width:"50%"},l.createElement(i.Typography,null,M.version)),l.createElement(d.Td,{width:"50%"},l.createElement(i.Typography,null,M.generatedDate)),l.createElement(d.Td,null,l.createElement(p.Flex,Z({justifyContent:"end"},n.stopPropagation),l.createElement(c.IconButton,{onClick:U,noBorder:!0,icon:l.createElement(s(),null),label:y({id:(0,b.O)("pages.PluginPage.table.icon.show"),defaultMessage:"Open {target}"},{target:`${M.version}`})}),l.createElement(n.CheckPermissions,{permissions:T.Z.regenerate},l.createElement(c.IconButton,{onClick:()=>J(M.version),noBorder:!0,icon:l.createElement(S(),null),label:y({id:(0,b.O)("pages.PluginPage.table.icon.regenerate"),defaultMessage:"Regenerate {target}"},{target:`${M.version}`})})),l.createElement(n.CheckPermissions,{permissions:T.Z.update},M.version!==v.currentVersion&&l.createElement(c.IconButton,{onClick:()=>ee(M.version),noBorder:!0,icon:l.createElement(h(),null),label:y({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${M.version}`})})))))))):l.createElement(n.EmptyStateLayout,null)),l.createElement(n.ConfirmDialog,{isConfirmButtonLoading:R,onConfirm:q,onToggleDialog:_,isOpen:A})))}},4733:(D,j,f)=>{"use strict";f.d(j,{Z:()=>d});var l=f(23724),O=f(68547),n=f(49950),u=(g,h,C)=>new Promise((s,P)=>{var S=x=>{try{b(C.next(x))}catch(e){P(e)}},T=x=>{try{b(C.throw(x))}catch(e){P(e)}},b=x=>x.done?s(x.value):Promise.resolve(x.value).then(S,T);b((C=C.apply(g,h)).next())});const t=({prefix:g,version:h})=>(0,O.request)(`${g}/deleteDoc/${h}`,{method:"DELETE"}),r=g=>u(void 0,null,function*(){try{return yield(0,O.request)(`/${n.Z}/getInfos`,{method:"GET"})}catch(h){return g({type:"warning",message:{id:"notification.error"}}),null}}),o=({prefix:g,version:h})=>(0,O.request)(`${g}/regenerateDoc`,{method:"POST",body:{version:h}}),c=({prefix:g,body:h})=>(0,O.request)(`${g}/updateSettings`,{method:"PUT",body:h});var i=f(798);const d=()=>{const g=(0,l.useQueryClient)(),h=(0,O.useNotification)(),{isLoading:C,data:s}=(0,l.useQuery)("get-documentation",()=>r(h)),P=e=>{h({type:"warning",message:e.response.payload.message})},S=(e,a)=>{g.invalidateQueries("get-documentation"),h({type:e,message:{id:(0,i.Z)(a)}})},T=(0,l.useMutation)(t,{onSuccess:()=>S("info","notification.delete.success"),onError:e=>P(e)}),b=(0,l.useMutation)(c,{onSuccess:()=>S("success","notification.update.success"),onError:P}),x=(0,l.useMutation)(o,{onSuccess:()=>S("info","notification.generate.success"),onError:e=>P(e)});return{data:s,isLoading:C,deleteMutation:T,submitMutation:b,regenerateDocMutation:x}}},798:(D,j,f)=>{"use strict";f.d(j,{Z:()=>n});var l=f(49950);const n=u=>`${l.Z}.${u}`},93742:(D,j,f)=>{"use strict";f.d(j,{O:()=>l.Z});var l=f(798)}}]);
