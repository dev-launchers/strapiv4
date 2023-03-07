"use strict";(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[4263],{22282:(b,P,e)=>{e.r(P),e.d(P,{default:()=>ye});var t=e(67294),s=e(68547),o=e(49656),p=e(96486),C=e(87751),l=e(87462),I=e(15861),i=e(64687),M=e.n(i),c=e(97132),D=e(45697),L=e.n(D),V=e(78718),S=e.n(V),F=e(27361),Z=e.n(F),G=e(57557),z=e.n(G),_=e(23724),x=e(80831),E=e(94117),h=e(64459),u=e(39272),A=e(35395),U=e(33483),X=e(80117),g=e(9524),n=e(87760),a=e.n(n),r=e(22754),q=e.n(r),Y=e(8610),B=e(23998),re=(R,W,m)=>new Promise((H,d)=>{var Q=K=>{try{w(m.next(K))}catch(J){d(J)}},N=K=>{try{w(m.throw(K))}catch(J){d(J)}},w=K=>K.done?H(K.value):Promise.resolve(K.value).then(Q,N);w((m=m.apply(R,W)).next())});const Ee=R=>re(void 0,null,function*(){const{data:W}=yield B.be.get(`/admin/users/${R}`);return W.data}),ge=(R,W)=>re(void 0,null,function*(){const{data:m}=yield B.be.put(`/admin/users/${R}`,W);return m.data}),fe=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var ve=e(17405),Pe=e(81288),Me=e(25108),he=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),ne=["email","firstname","lastname","username","isActive","roles"],oe=function(W){var m=W.canUpdate,H=(0,c.useIntl)(),d=H.formatMessage,Q=(0,o.useRouteMatch)("/settings/users/:id"),N=Q.params.id,w=(0,o.useHistory)(),K=w.push,J=(0,s.useAppInfos)(),De=J.setUserDisplayName,ae=(0,s.useNotification)(),le=(0,s.useOverlayBlocker)(),Le=le.lockApp,Ae=le.unlockApp;(0,s.useFocusWhenNavigate)();var ie=(0,_.useQuery)(["user",N],function(){return Ee(N)},{retry:!1,keepPreviousData:!1,staleTime:1e3*20,onError:function(f){var v=f.response.status;v===403&&(ae({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),K("/")),Me.log(f.response.status)}}),Te=ie.status,T=ie.data,Ce=function(){var O=(0,I.Z)(M().mark(function f(v,$){var k,te,j,se,ue;return M().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return Le(),y.prev=1,y.next=4,ge(N,z()(v,"confirmPassword"));case 4:k=y.sent,ae({type:"success",message:d({id:"notification.success.saved",defaultMessage:"Saved"})}),te=s.auth.getUserInfo(),N.toString()===te.id.toString()&&(s.auth.setUserInfo(k),j=Z()(v,"username")||(0,Y.Pp)(v.firstname,v.lastname),De(j)),$.setValues(S()(v,ne)),y.next=17;break;case 11:y.prev=11,y.t0=y.catch(1),se=(0,Y.Iz)(y.t0.response.data),ue=Object.keys(se).reduce(function(me,pe){return me[pe]=se[pe].id,me},{}),$.setErrors(ue),ae({type:"warning",message:Z()(y.t0,"response.data.message","notification.error")});case 17:Ae();case 18:case"end":return y.stop()}},f,null,[[1,11]])}));return function(v,$){return O.apply(this,arguments)}}(),de=Te!=="success",Ie=de?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},ee=Object.keys(S()(T,ne)).reduce(function(O,f){return f==="roles"?(O[f]=((T==null?void 0:T.roles)||[]).map(function(v){var $=v.id;return $}),O):(O[f]=T==null?void 0:T[f],O)},{}),_e=ee.username||(0,Y.Pp)(ee.firstname,ee.lastname),ce=d(Ie,{name:_e});return de?t.createElement(X.Main,{"aria-busy":"true"},t.createElement(s.SettingsPageTitle,{name:"Users"}),t.createElement(A.HeaderLayout,{primaryAction:t.createElement(h.Button,{disabled:!0,startIcon:t.createElement(q(),null),type:"button",size:"L"},d({id:"global.save",defaultMessage:"Save"})),title:ce,navigationAction:t.createElement(s.Link,{startIcon:t.createElement(a(),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},d({id:"global.back",defaultMessage:"Back"}))}),t.createElement(A.ContentLayout,null,t.createElement(s.LoadingIndicatorPage,null))):t.createElement(X.Main,null,t.createElement(s.SettingsPageTitle,{name:"Users"}),t.createElement(x.Formik,{onSubmit:Ce,initialValues:ee,validateOnChange:!1,validationSchema:ve.YM},function(O){var f=O.errors,v=O.values,$=O.handleChange,k=O.isSubmitting;return t.createElement(s.Form,null,t.createElement(A.HeaderLayout,{primaryAction:t.createElement(h.Button,{disabled:k||!m,startIcon:t.createElement(q(),null),loading:k,type:"submit",size:"L"},d({id:"global.save",defaultMessage:"Save"})),title:ce,navigationAction:t.createElement(s.Link,{startIcon:t.createElement(a(),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},d({id:"global.back",defaultMessage:"Back"}))}),t.createElement(A.ContentLayout,null,(T==null?void 0:T.registrationToken)&&t.createElement(E.Box,{paddingBottom:6},t.createElement(he,{registrationToken:T.registrationToken})),t.createElement(g.Stack,{spacing:7},t.createElement(E.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(g.Stack,{spacing:4},t.createElement(U.Typography,{variant:"delta",as:"h2"},d({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(u.Grid,{gap:5},fe.map(function(te){return te.map(function(j){return t.createElement(u.GridItem,(0,l.Z)({key:j.name},j.size),t.createElement(s.GenericInput,(0,l.Z)({},j,{disabled:!m,error:f[j.name],onChange:$,value:v[j.name]||""})))})})))),t.createElement(E.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(g.Stack,{spacing:4},t.createElement(U.Typography,{variant:"delta",as:"h2"},d({id:"global.roles",defaultMessage:"User's role"})),t.createElement(u.Grid,{gap:5},t.createElement(u.GridItem,{col:6,xs:12},t.createElement(Pe.Z,{disabled:!m,error:f.roles,onChange:$,value:v.roles}))))))))}))};oe.propTypes={canUpdate:L().bool.isRequired};const Oe=oe,ye=()=>{const R=(0,s.useNotification)(),W=(0,t.useMemo)(()=>({read:C.Z.settings.users.read,update:C.Z.settings.users.update}),[]),{isLoading:m,allowedActions:{canRead:H,canUpdate:d}}=(0,s.useRBAC)(W),{state:Q}=(0,o.useLocation)(),N=(0,p.get)(Q,"from","/");return(0,t.useEffect)(()=>{m||!H&&!d&&R({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[m,H,d,R]),m?t.createElement(s.LoadingIndicatorPage,null):!H&&!d?t.createElement(o.Redirect,{to:N}):t.createElement(Oe,{canUpdate:d})}},82464:(b,P,e)=>{e.d(P,{Z:()=>Z});var t=e(67294),s=e(45697),o=e.n(s),p=e(49549),C=e.n(p),l=e(68547),I=e.n(l),i=e(54279),M=e.n(i),c=e(74855),D=e.n(c),L=e(97132),V=e.n(L);const S=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},t.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},t.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),F=({children:G,target:z})=>{const _=(0,l.useNotification)(),{formatMessage:x}=(0,L.useIntl)(),E=()=>{_({type:"info",message:{id:"notification.link-copied"}})},h=x({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(l.ContentBox,{endAction:t.createElement(c.CopyToClipboard,{onCopy:E,text:z},t.createElement(p.IconButton,{label:h,noBorder:!0,icon:t.createElement(M(),null)})),title:z,titleEllipsis:!0,subtitle:G,icon:t.createElement(S,null),iconBackground:"neutral100"})};F.propTypes={children:o().oneOfType([o().element,o().string]).isRequired,target:o().string.isRequired};const Z=F},31605:(b,P,e)=>{e.d(P,{Z:()=>M});var t=e(67294),s=e(97132),o=e.n(s),p=e(45697),C=e.n(p),l=e(63871),I=e(82464);const i=({registrationToken:c})=>{const{formatMessage:D}=(0,s.useIntl)(),L=`${window.location.origin}${l.Z}auth/register?registrationToken=${c}`;return t.createElement(I.Z,{target:L},D({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};i.defaultProps={registrationToken:""},i.propTypes={registrationToken:C().string};const M=i},81288:(b,P,e)=>{e.d(P,{Z:()=>x});var t=e(67294),s=e(45697),o=e.n(s),p=e(97132),C=e.n(p),l=e(2632),I=e.n(l),i=e(23724),M=e.n(i),c=e(78384),D=e(79386),L=e.n(D),V=e(23998),S=(E,h,u)=>new Promise((A,U)=>{var X=a=>{try{n(u.next(a))}catch(r){U(r)}},g=a=>{try{n(u.throw(a))}catch(r){U(r)}},n=a=>a.done?A(a.value):Promise.resolve(a.value).then(X,g);n((u=u.apply(E,h)).next())});const F=c.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Z=c.default.div`
  animation: ${F} 2s infinite linear;
`,G=()=>t.createElement(Z,null,t.createElement(L(),null)),z=()=>S(void 0,null,function*(){const{data:E}=yield V.be.get("/admin/roles");return E.data}),_=({disabled:E,error:h,onChange:u,value:A})=>{const{status:U,data:X}=(0,i.useQuery)(["roles"],z,{staleTime:5e4}),{formatMessage:g}=(0,p.useIntl)(),n=h?g({id:h,defaultMessage:h}):"",a=g({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),r=g({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),q=g({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Y=U==="loading"?t.createElement(G,null):void 0;return t.createElement(l.Select,{id:"roles",disabled:E,error:n,hint:r,label:a,name:"roles",onChange:B=>{u({target:{name:"roles",value:B}})},placeholder:q,multi:!0,startIcon:Y,value:A,withTags:!0,required:!0},(X||[]).map(B=>t.createElement(l.Option,{key:B.id,value:B.id},g({id:`global.${B.code}`,defaultMessage:B.name}))))};_.defaultProps={disabled:!1,error:void 0},_.propTypes={disabled:o().bool,error:o().string,onChange:o().func.isRequired,value:o().array.isRequired};const x=_},17405:(b,P,e)=>{e.d(P,{YM:()=>g,Rw:()=>S});var t=e(53209),s=e(68547),o=Object.defineProperty,p=Object.defineProperties,C=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,M=(n,a,r)=>a in n?o(n,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[a]=r,c=(n,a)=>{for(var r in a||(a={}))I.call(a,r)&&M(n,r,a[r]);if(l)for(var r of l(a))i.call(a,r)&&M(n,r,a[r]);return n},D=(n,a)=>p(n,C(a));const L={firstname:t.nK().required(s.translatedErrors.required),lastname:t.nK(),email:t.Z_().email(s.translatedErrors.email).lowercase().required(s.translatedErrors.required),username:t.Z_().nullable(),password:t.Z_().min(8,s.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,s.translatedErrors.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(n,a)=>n?a.required(s.translatedErrors.required):a)},S=D(c({},L),{currentPassword:t.Z_().when(["password","confirmPassword"],(n,a,r)=>n||a?r.required(s.translatedErrors.required):r),preferedLanguage:t.Z_().nullable()}),Z={roles:t.IX().min(1,s.translatedErrors.required).required(s.translatedErrors.required)};var G=Object.defineProperty,z=Object.defineProperties,_=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(n,a,r)=>a in n?G(n,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[a]=r,A=(n,a)=>{for(var r in a||(a={}))E.call(a,r)&&u(n,r,a[r]);if(x)for(var r of x(a))h.call(a,r)&&u(n,r,a[r]);return n},U=(n,a)=>z(n,_(a));const g=t.Ry().shape(A(U(A({},L),{isActive:t.Xg()}),Z))},12201:(b,P,e)=>{e.d(P,{Z:()=>M});var t=e(67294),s=e(97132),o=e.n(s),p=e(45697),C=e.n(p),l=e(63871),I=e(82464);const i=({registrationToken:c})=>{const{formatMessage:D}=(0,s.useIntl)();return c?t.createElement(I.Z,{target:`${window.location.origin}${l.Z}auth/register?registrationToken=${c}`},D({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(I.Z,{target:`${window.location.origin}${l.Z}auth/login`},D({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};i.defaultProps={registrationToken:""},i.propTypes={registrationToken:C().string};const M=i}}]);
