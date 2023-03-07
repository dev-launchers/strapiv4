(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[8503],{80117:(w,M,u)=>{"use strict";w.exports=u(41706)},41706:function(w,M,u){(function(p,E){w.exports=E(u(67294),u(78384))})(this,function(p,E){return function(n){var d={};function t(a){if(d[a])return d[a].exports;var o=d[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=d,t.d=function(a,o,c){t.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:c})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,o){if(1&o&&(a=t(a)),8&o||4&o&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),2&o&&typeof a!="string")for(var i in a)t.d(c,i,function(f){return a[f]}.bind(null,i));return c},t.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(o,"a",o),o},t.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},t.p="",t(t.s=110)}({0:function(n,d,t){n.exports=t(19)()},1:function(n,d){n.exports=p},10:function(n,d,t){var a=t(25),o=t(26),c=t(22),i=t(27);n.exports=function(f,l){return a(f)||o(f,l)||c(f,l)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,d,t){"use strict";t.r(d),t.d(d,"Main",function(){return e}),t.d(d,"SkipToContent",function(){return C});var a,o=t(5),c=t.n(o),i=t(4),f=t.n(i),l=t(3),g=t.n(l),h=t(1),O=t.n(h),s=t(0),y=t.n(s),b=t(2),x=t.n(b),S=["labelledBy"],v=x.a.main(a||(a=g()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(P){var j=P.labelledBy,F=f()(P,S),L=j||"main-content-title";return O.a.createElement(v,c()({"aria-labelledby":L,id:"main-content",tabIndex:-1},F))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:y.a.string};var r,m=t(6),A=x()(m.Box)(r||(r=g()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(P){return P.theme.spaces[3]},function(P){return P.theme.spaces[3]}),C=function(P){var j=P.children;return O.a.createElement(A,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},j)};C.propTypes={children:y.a.node.isRequired}},13:function(n,d){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(o){return typeof o},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n.exports.default=n.exports,n.exports.__esModule=!0),t(a)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,d,t){"use strict";var a=t(20);function o(){}function c(){}c.resetWarningCache=o,n.exports=function(){function i(g,h,O,s,y,b){if(b!==a){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}function f(){return i}i.isRequired=i;var l={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:f,element:i,elementType:i,instanceOf:f,node:i,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:c,resetWarningCache:o};return l.PropTypes=l,l}},2:function(n,d){n.exports=E},20:function(n,d,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,d){n.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var o=0,c=new Array(a);o<a;o++)c[o]=t[o];return c},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,d,t){var a=t(21);n.exports=function(o,c){if(o){if(typeof o=="string")return a(o,c);var i=Object.prototype.toString.call(o).slice(8,-1);return i==="Object"&&o.constructor&&(i=o.constructor.name),i==="Map"||i==="Set"?Array.from(o):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(o,c):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,d){n.exports=function(t,a){if(t==null)return{};var o,c,i={},f=Object.keys(t);for(c=0;c<f.length;c++)o=f[c],a.indexOf(o)>=0||(i[o]=t[o]);return i},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,d){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,d){n.exports=function(t,a){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var c,i,f=[],l=!0,g=!1;try{for(o=o.call(t);!(l=(c=o.next()).done)&&(f.push(c.value),!a||f.length!==a);l=!0);}catch(h){g=!0,i=h}finally{try{l||o.return==null||o.return()}finally{if(g)throw i}}return f}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,d){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,d){n.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,d,t){var a=t(24);n.exports=function(o,c){if(o==null)return{};var i,f,l=a(o,c);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(o);for(f=0;f<g.length;f++)i=g[f],c.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(o,i)&&(l[i]=o[i])}return l},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,d){function t(){return n.exports=t=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(a[i]=c[i])}return a},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,d,t){"use strict";t.r(d),t.d(d,"Box",function(){return v});var a,o=t(3),c=t.n(o),i=t(2),f=t.n(i),l=t(7),g=t(1),h=t.n(g),O=t(0),s=t.n(O),y=function(e){return h.a.createElement("div",e)},b={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},x={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])};y.defaultProps=b,y.propTypes=x;var S={color:!0},v=f.a.div.withConfig({shouldForwardProp:function(e,r){return!S[e]&&r(e)}})(a||(a=c()([`
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
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,m=e.background;return r.colors[m]},function(e){var r=e.theme,m=e.color;return r.colors[m]},function(e){var r=e.theme,m=e.padding;return Object(l.a)("padding",m,r)},function(e){var r=e.theme,m=e.paddingTop;return Object(l.a)("padding-top",m,r)},function(e){var r=e.theme,m=e.paddingRight;return Object(l.a)("padding-right",m,r)},function(e){var r=e.theme,m=e.paddingBottom;return Object(l.a)("padding-bottom",m,r)},function(e){var r=e.theme,m=e.paddingLeft;return Object(l.a)("padding-left",m,r)},function(e){var r=e.theme,m=e.marginLeft;return Object(l.a)("margin-left",m,r)},function(e){var r=e.theme,m=e.marginRight;return Object(l.a)("margin-right",m,r)},function(e){var r=e.theme,m=e.marginTop;return Object(l.a)("margin-top",m,r)},function(e){var r=e.theme,m=e.marginBottom;return Object(l.a)("margin-bottom",m,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,m=e.hasRadius,A=e.borderRadius;return m?r.borderRadius:A},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,m=e.borderColor,A=e.borderStyle,C=e.borderWidth;if(m&&!A&&!C)return"1px solid ".concat(r.colors[m])},function(e){var r=e.theme,m=e.shadow;return r.shadows[m]},function(e){return e.pointerEvents},function(e){var r=e._hover,m=e.theme;return r?r(m):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});v.defaultProps=b,v.propTypes=x},7:function(n,d,t){"use strict";var a=t(10),o=t.n(a),c=t(13),i=t.n(c);d.a=function(f,l,g){var h=l;if(Array.isArray(l)||i()(l)!=="object"||(h=[l==null?void 0:l.desktop,l==null?void 0:l.tablet,l==null?void 0:l.mobile]),h!==void 0){if(Array.isArray(h)){var O=h,s=o()(O,3),y=s[0],b=s[1],x=s[2],S="".concat(f,": ").concat(g.spaces[y],";");return b!==void 0&&(S+="".concat(g.mediaQueries.tablet,`{
          `).concat(f,": ").concat(g.spaces[b],`;
        }`)),x!==void 0&&(S+="".concat(g.mediaQueries.mobile,`{
          `).concat(f,": ").concat(g.spaces[x],`;
        }`)),S}var v=g.spaces[h]||h;return"".concat(f,": ").concat(v,";")}}}})})},31346:(w,M,u)=>{"use strict";u.r(M),u.d(M,{default:()=>Z});var p=u(67294),E=u(97132),n=u(80831),d=u(68547),t=u(35395),a=u(80117),o=u(64459),c=u(94117),i=u(9524),f=u(33483),l=u(53575),g=u(99136),h=u(39272),O=u(31023),s=u.n(O),y=u(52973),b=u.n(y),x=u(22754),S=u.n(x),v=u(80826),e=u(93742),r=u(4733),m=u(78384),A=u(16572);const P=(0,m.default)(A.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:T})=>T.colors.neutral600};
    }
  }
`;var j=u(53209);const L=j.Ry().shape({restrictedAccess:j.O7(),password:j.Z_().when("restrictedAccess",(T,I)=>T?I.required(d.translatedErrors.required):I)}),Z=()=>{(0,d.useFocusWhenNavigate)();const{formatMessage:T}=(0,E.useIntl)(),{submitMutation:I,data:B,isLoading:$}=(0,r.Z)(),[D,U]=(0,p.useState)(!1),H=W=>{I.mutate({prefix:B==null?void 0:B.prefix,body:W})};return p.createElement(a.Main,null,$?p.createElement(d.LoadingIndicatorPage,null,"Plugin settings are loading"):p.createElement(n.Formik,{initialValues:{restrictedAccess:(B==null?void 0:B.documentationAccess.restrictedAccess)||!1,password:""},onSubmit:H,validationSchema:L},({handleSubmit:W,values:R,handleChange:G,errors:Q,setFieldTouched:k,setFieldValue:z})=>p.createElement(d.Form,{noValidate:!0,onSubmit:W},p.createElement(t.HeaderLayout,{title:T({id:(0,e.O)("plugin.name"),defaultMessage:"Documentation"}),subtitle:T({id:(0,e.O)("pages.SettingsPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:p.createElement(d.CheckPermissions,{permissions:v.Z.update},p.createElement(o.Button,{type:"submit",startIcon:p.createElement(S(),null)},T({id:(0,e.O)("pages.SettingsPage.Button.save"),defaultMessage:"Save"})))}),p.createElement(t.ContentLayout,null,p.createElement(c.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},p.createElement(i.Stack,{spacing:4},p.createElement(f.Typography,{variant:"delta",as:"h2"},T({id:"global.settings",defaultMessage:"Settings"})),p.createElement(h.Grid,{gap:4},p.createElement(h.GridItem,{col:6,s:12},p.createElement(l.ToggleInput,{name:"restrictedAccess",label:T({id:(0,e.O)("pages.SettingsPage.toggle.label"),defaultMessage:"Restricted Access"}),hint:T({id:(0,e.O)("pages.SettingsPage.toggle.hint"),defaultMessage:"Make the documentation endpoint private"}),checked:R.restrictedAccess,onChange:()=>{R.restrictedAccess===!0&&(z("password","",!1),k("password",!1,!1)),z("restrictedAccess",!R.restrictedAccess,!1)},onLabel:"On",offLabel:"Off"})),R.restrictedAccess&&p.createElement(h.GridItem,{col:6,s:12},p.createElement(g.TextInput,{label:T({id:"global.password",defaultMessage:"Password"}),name:"password",placeholder:"**********",type:D?"text":"password",value:R.password,onChange:G,error:Q.password?T({id:Q.password,defaultMessage:"Invalid value"}):null,endAction:p.createElement(P,{onClick:N=>{N.stopPropagation(),U(X=>!X)},label:T(D?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},D?p.createElement(s(),null):p.createElement(b(),null))})))))))))}},4733:(w,M,u)=>{"use strict";u.d(M,{Z:()=>l});var p=u(23724),E=u(68547),n=u(49950),d=(g,h,O)=>new Promise((s,y)=>{var b=v=>{try{S(O.next(v))}catch(e){y(e)}},x=v=>{try{S(O.throw(v))}catch(e){y(e)}},S=v=>v.done?s(v.value):Promise.resolve(v.value).then(b,x);S((O=O.apply(g,h)).next())});const t=({prefix:g,version:h})=>(0,E.request)(`${g}/deleteDoc/${h}`,{method:"DELETE"}),a=g=>d(void 0,null,function*(){try{return yield(0,E.request)(`/${n.Z}/getInfos`,{method:"GET"})}catch(h){return g({type:"warning",message:{id:"notification.error"}}),null}}),o=({prefix:g,version:h})=>(0,E.request)(`${g}/regenerateDoc`,{method:"POST",body:{version:h}}),c=({prefix:g,body:h})=>(0,E.request)(`${g}/updateSettings`,{method:"PUT",body:h});var i=u(798);const l=()=>{const g=(0,p.useQueryClient)(),h=(0,E.useNotification)(),{isLoading:O,data:s}=(0,p.useQuery)("get-documentation",()=>a(h)),y=e=>{h({type:"warning",message:e.response.payload.message})},b=(e,r)=>{g.invalidateQueries("get-documentation"),h({type:e,message:{id:(0,i.Z)(r)}})},x=(0,p.useMutation)(t,{onSuccess:()=>b("info","notification.delete.success"),onError:e=>y(e)}),S=(0,p.useMutation)(c,{onSuccess:()=>b("success","notification.update.success"),onError:y}),v=(0,p.useMutation)(o,{onSuccess:()=>b("info","notification.generate.success"),onError:e=>y(e)});return{data:s,isLoading:O,deleteMutation:x,submitMutation:S,regenerateDocMutation:v}}},798:(w,M,u)=>{"use strict";u.d(M,{Z:()=>n});var p=u(49950);const n=d=>`${p.Z}.${d}`},93742:(w,M,u)=>{"use strict";u.d(M,{O:()=>p.Z});var p=u(798)}}]);
