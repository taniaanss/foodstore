(this["webpackJsonpfoodstore-ui"]=this["webpackJsonpfoodstore-ui"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),s=a(24),i=a.n(s),l=(a(77),a.p,a(78),a(10)),u=a(13),o=a(15),j=a(28),b=a(60),d="features/Auth/USER_LOGIN",m="features/Auth/USER_LOGOUT",O=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{user:null,token:null};var h=a(11),x=a(6),p="features/Products/START_FETCHING_PRODUCT",f="features/Products/ERROR_FETCHING_PRODUCT",g="features/Products/SUCCESS_FETCHING_PRODUCT",v="features/Products/SET_CATEGORY",k="features/Products/SET_KEYWORD",y="features/Products/SET_TAGS",w="features/Products/SET_PAGE",S="features/Products/NEXT_PAGE",_="features/Products/PREV_PAGE",P="features/Products/TOGGLE_TAG",N="process",C="success",I="error",E={data:[],currentPage:1,totalItems:-1,perPage:6,keyword:"",category:"",tags:[],status:"idle"};var T="features/Cart/ADD_ITEM",A="features/Cart/REMOVE_ITEM",q="features/Cart/CLEAR_ITEMS",D="features/Cart/SET_ITEMS",L=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];var M=window._REDUX_DEVTOOLS_EXTENTION_COMPOSE||j.d,B=Object(j.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{user:t.user,token:t.token};case m:return{user:null,token:null};default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(x.a)(Object(x.a)({},e),{},{status:N});case f:return Object(x.a)(Object(x.a)({},e),{},{status:I});case g:return Object(x.a)(Object(x.a)({},e),{},{status:C,data:t.data,totalItems:t.data});case w:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case k:return Object(x.a)(Object(x.a)({},e),{},{keyword:t.keyword,category:"",tags:[]});case v:return Object(x.a)(Object(x.a)({},e),{},{currentPage:1,keyword:"",category:t.category,tags:[]});case y:return Object(x.a)(Object(x.a)({},e),{},{tags:t.tags});case P:return e.tags.includes(t.tag)?Object(x.a)(Object(x.a)({},e),{},{currentPage:1,tags:e.tags.filter((function(e){return e!==t.tag}))}):Object(x.a)(Object(x.a)({},e),{},{currentPage:1,tags:[].concat(Object(h.a)(e.tags),[t.tag])});case S:return Object(x.a)(Object(x.a)({},e),{},{currentPage:e.currentPage+1});case _:return Object(x.a)(Object(x.a)({},e),{},{currentPage:e.currentPage-1});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return e.find((function(e){return e._id===t.item._id}))?e.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{qty:e._id===t.item._id?e.qty+1:e.qty})})):[].concat(Object(h.a)(e),[Object(x.a)(Object(x.a)({},t.item),{},{qty:1})]);case A:return e.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{qty:e._id===t.item._id?e.qty-1:e.qty})})).filter((function(e){return e.qty>0}));case q:return[];case D:return t.items;default:return e}}}),H=Object(j.e)(B,M(Object(j.a)(b.a))),R=a(3),z=a.n(R),K=a(5),J=a(14),G=a.n(J),U=a(61);a.n(U).a.config();var F,V,X="http://localhost:3000",Y="Food Store",$="20000",W="Tania",Q="taniaarangkuti@gmail.com",Z={account_no:"xxxxx-xxxx-23-23",bank_name:"BCA"};function ee(e){return{type:T,item:e}}function te(){return{type:q}}function ae(e){return{type:D,items:e}}function re(e,t){return ne.apply(this,arguments)}function ne(){return(ne=Object(K.a)(z.a.mark((function e(t,a){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.put("".concat(X,"/api/carts"),{items:a},{headers:{authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(K.a)(z.a.mark((function e(){var t,a,r,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},a=t.token){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,G.a.get("".concat(X,"/api/carts"),{headers:{authorization:"Bearer ".concat(a)}});case 5:r=e.sent,(n=r.data).error||H.dispatch(ae(n));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){var e=F,t=V;F=H.getState().auth,V=H.getState().cart;var a=F.token;F!==e&&(localStorage.setItem("auth",JSON.stringify(F)),re(a,V)),V!==t&&(localStorage.setItem("cart",JSON.stringify(V)),re(a,V))}var ie=a(2),le=[{icon:"/image/menus/semua.png",label:"semua",id:""},{icon:"/image/menus/utama.png",label:"utama",id:"utama"},{icon:"/image/menus/minuman.png",label:"minuman",id:"minuman"},{icon:"/image/menus/snack.png",label:"snack",id:"snack"},{icon:"/image/menus/pastry.png",label:"pastry",id:"pastry"}],ue=a(63),oe=a.n(ue);function je(){return Object(r.jsx)(l.b,{to:"/",children:Object(r.jsx)("div",{className:"text-blue-600 font-bold text-4xl",children:Y})})}function be(){var e,t=Object(o.c)((function(e){return e.auth}));return Object(r.jsxs)(ie.n,{desktop:2,justify:"between",items:"center",children:[Object(r.jsx)("div",{children:Object(r.jsx)(je,{})}),Object(r.jsx)("div",{className:"mr-5 text-right",children:Object(r.jsxs)(l.b,{to:(null===t||void 0===t?void 0:t.user)?"/account":"/login",children:[Object(r.jsx)("div",{className:"mr-2 inline-block text-blue-600 font-bold",children:null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.full_name}),Object(r.jsx)(ie.c,{color:"blue",icon:oe.a})]})})]})}function de(){return(de=Object(K.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(X,"/api/products"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me=a(64),Oe=a.n(me)()((function(e){return de.apply(this,arguments)}),1e3);function he(e){var t=e.data,a=e.count;return{type:g,data:t,count:a}}var xe=a(32),pe=a.n(xe),fe={"":[],utama:["burger","pizza","bread"],pastry:["cheese","strawberry","muffin"],snack:["fried","bread","cheese","coffe"],minuman:["coffe","tea","hot","cold"]},ge=a(27),ve=a.n(ge),ke=a(40),ye=a.n(ke);function we(e){return e.reduce((function(e,t){return e+t.price*t.qty}),0)}function Se(e){return new Intl.NumberFormat("id-ID",{maximumSignificantDigits:2,style:"currency",currency:"IDR"}).format(e)}function _e(e){var t=e.items,a=e.onItemInc,n=e.onItemDec,c=e.onCheckout,s=we(t);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"text-3xl flex items-center text-gray-600",children:[Object(r.jsx)(ye.a,{}),Object(r.jsx)("div",{className:"ml-2",children:"Keranjang"})]}),Object(r.jsxs)(ie.s,{as:"h5",children:["Total : ",Se(s)]}),Object(r.jsx)("div",{className:"px-2 border-b mt-5 pb-5",children:Object(r.jsx)(ie.b,{text:"Checkout",fitContainer:!0,iconAfter:Object(r.jsx)(ve.a,{}),disabled:!t.length,onClick:c})}),Object(r.jsxs)("div",{className:"p-2",children:[t.length?null:Object(r.jsx)("div",{className:"text-center text-sm text-gray-800",children:"Belum ada items dalam keranjang."}),t.map((function(e,t){return Object(r.jsx)("div",{className:"mb-2",children:Object(r.jsx)(ie.e,{imgUrl:"".concat(X,"/upload/").concat(e.image_url),name:e.name,qty:e.qty,color:"gray",onInc:function(t){return a(e)},onDec:function(t){return n(e)}})},t)}))]})]})}function Pe(){var e=Object(u.g)(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.products})),c=Object(o.c)((function(e){return e.cart}));return Object(n.useEffect)((function(){t(function(){var e=Object(K.a)(z.a.mark((function e(t,a){var r,n,c,s,i,l,u,o,j,b;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:p}),r=a().products.perPage||9,n=a().products.currentPage||1,c=a().products.tags||[],s=a().products.keyword||"",i=a().products.category||"",l={limit:r,skip:n*r-r,q:s,tags:c,category:i},e.prev=7,e.next=10,Oe({params:l});case 10:u=e.sent,o=u.data,j=o.data,b=o.count,t(he({data:j,count:b})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),t({type:f});case 20:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t,a){return e.apply(this,arguments)}}())}),[t,a.currentPage,a.keyword,a.category,a.tags]),Object(r.jsx)("div",{children:Object(r.jsx)(ie.k,{sidebar:Object(r.jsx)(ie.p,{color:"blue",items:le,verticalAlign:"top",active:a.category,onChange:function(e){return t(function(e){return{type:v,category:e}}(e))}}),content:Object(r.jsxs)("div",{className:"md:flex md:flex-row-reverse w-full mr-5 h-full min-h-screen",children:[Object(r.jsxs)("div",{className:"w-full md:w-3/4 pl-5 pb-10",children:[Object(r.jsx)(be,{}),Object(r.jsx)("div",{className:"w-full text-center mb-10 mt-5",children:Object(r.jsx)(ie.i,{fullRound:!0,value:a.keyword,placeholder:"Cari makanan yang kamu inginkan...",fitContainer:!0,onChange:function(e){return t((a=e.target.value,{type:k,keyword:a}));var a}})}),Object(r.jsx)("div",{className:"mb-5 pl-2 flex w-3/3 overflow-auto pb-5",children:fe[a.category].map((function(e,n){return Object(r.jsx)("div",{children:Object(r.jsx)(ie.m,{text:e,icon:e.slice(0,1).toUpperCase(),isActive:a.tags.includes(e),onClick:function(a){return t(function(e){return{type:P,tag:e}}(e))}})},n)}))}),"process"!==a.status||a.data.length?null:Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsx)(pe.a,{color:"blue"})}),Object(r.jsx)(ie.n,{desktop:3,items:"stretch",children:a.data.map((function(e,a){return Object(r.jsx)("div",{className:"p-2",children:Object(r.jsx)(ie.f,{color:"blue",title:e.name,imgUrl:"".concat(X,"/upload/").concat(e.image_url),price:e.price,onAddToCart:function(a){return t(ee(e))}})},a)}))}),Object(r.jsx)("div",{className:"text-center my-10",children:Object(r.jsx)(ie.l,{totalItems:a.totalItems,page:a.currentPage,perPage:a.perPage,onChange:function(e){return t(function(){return{type:w,currentPage:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}(a.page))},onNext:function(e){return t({type:S})},onPrev:function(e){return t({type:_})}})})]}),Object(r.jsx)("div",{className:"w-full md:w-1/4 h-full shadow-lg border-r border-white bg-gray-100",children:Object(r.jsx)(_e,{items:c,onItemDec:function(e){return t(function(e){return{type:A,item:e}}(e))},onItemInc:function(e){return t(ee(e))},onCheckout:function(t){return e.push("/checkout")}})})]}),sidebarSize:80})})}var Ne=a(7),Ce=a(33),Ie={required:{value:!0,message:"Nama lengkap harus diisi"},maxLength:{value:500,message:"Nama lengkap maksimal 500 karakter"}},Ee={required:{value:!0,message:"Email harus diisi"},maxLength:{value:255,message:"Email maksimal 255 karakter"},pattern:{value:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,message:"Email tidak valid"}},Te={required:{value:!0,message:"Password harus diisi"},maxLength:{value:255,message:"Password maksimal 255 karakter"}},Ae={required:{value:!0,message:"Konfirmasi password harus diisi"}};function qe(e){return De.apply(this,arguments)}function De(){return(De=Object(K.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.post("".concat(X,"/auth/register"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Le(e,t){return Me.apply(this,arguments)}function Me(){return(Me=Object(K.a)(z.a.mark((function e(t,a){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.post("".concat(X,"/auth/login"),{email:t,password:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(){return He.apply(this,arguments)}function He(){return(He=Object(K.a)(z.a.mark((function e(){var t,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},a=t.token,e.next=3,G.a.post("".concat(X,"/auth/logout"),null,{headers:{authorization:"Bearer ".concat(a)}}).then((function(e){return localStorage.removeItem("auth"),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Re="idle",ze="process",Ke="success",Je="error";function Ge(){var e,t,a,c,s=Object(Ce.a)(),i=s.register,o=s.handleSubmit,j=s.errors,b=s.setError,d=Object(n.useState)(Re),m=Object(Ne.a)(d,2),O=m[0],h=m[1],x=Object(u.g)(),p=function(){var e=Object(K.a)(z.a.mark((function e(t){var a,r,n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.password,r=t.password_confirmation,a===r){e.next=3;break}return e.abrupt("return",b("password_confirmation",{type:"uquality",message:"Password tidak sama"}));case 3:return h(ze),e.next=6,qe(t);case 6:if(n=e.sent,!(c=n.data).error){e.next=13;break}return Object.keys(c.fields).forEach((function(e){var t;b(e,{type:"server",message:null===(t=c.fields[e])||void 0===t?void 0:t.message})})),h(Je),e.abrupt("return");case 13:h(Ke),x.push("/register/berhasil");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(ie.j,{size:"small",children:Object(r.jsxs)(ie.d,{color:"white",children:[Object(r.jsx)("div",{className:"text-center mb-5",children:Object(r.jsx)(je,{})}),Object(r.jsxs)("form",{onSubmit:o(p),children:[Object(r.jsx)(ie.g,{errorMessage:null===(e=j.full_name)||void 0===e?void 0:e.message,children:Object(r.jsx)(ie.i,{name:"full_name",placeholder:"Nama Lengkap",fitContainer:!0,ref:i(Ie)})}),Object(r.jsx)(ie.g,{errorMessage:null===(t=j.email)||void 0===t?void 0:t.message,children:Object(r.jsx)(ie.i,{name:"email",placeholder:"Email",fitContainer:!0,ref:i(Ee)})}),Object(r.jsx)(ie.g,{errorMessage:null===(a=j.password)||void 0===a?void 0:a.message,children:Object(r.jsx)(ie.h,{name:"password",placeholder:"Password",fitContainer:!0,ref:i(Te)})}),Object(r.jsx)(ie.g,{errorMessage:null===(c=j.password_confirmation)||void 0===c?void 0:c.message,children:Object(r.jsx)(ie.h,{name:"password_confirmation",placeholder:"Konfirmasi Password",fitContainer:!0,ref:i(Ae)})}),Object(r.jsx)(ie.b,{size:"large",fitContainer:!0,disabled:O===ze,children:O===ze?"Sedang memproses":"Daftar"})]}),Object(r.jsxs)("div",{className:"text-center mt-2",children:["Sudahkah anda memiliki akun ? ",Object(r.jsx)(l.b,{to:"/login",children:Object(r.jsx)("b",{children:"Masuk sekarang"})})]})]})})}function Ue(){return Object(r.jsx)(ie.j,{size:"small",children:Object(r.jsx)(ie.d,{color:"white",children:Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)(ie.s,{as:"h3",children:"Pendaftaran Berhasil."}),Object(r.jsx)(ie.s,{children:"Silahkan masuk ke aplikasi!"}),Object(r.jsx)("br",{}),Object(r.jsx)(l.b,{to:"/login",children:Object(r.jsx)(ie.b,{fitContainer:!0,children:"Masuk"})})]})})})}function Fe(e,t){return{type:d,user:e,token:t}}var Ve={required:{value:!0,message:"Email harus diisi"},maxLength:{value:255,message:"Email maksimal 255 karakter"},pattern:{value:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,message:"Email tidak valid"}},Xe={required:{value:!0,message:"Password harus diisi"},maxLength:{value:255,message:"Password maksimal 255 karakter"}},Ye="idle",$e="process",We="success",Qe="error";function Ze(){var e,t,a=Object(Ce.a)(),c=a.register,s=a.handleSubmit,i=a.errors,j=a.setError,b=Object(n.useState)(Ye),d=Object(Ne.a)(b,2),m=d[0],O=d[1],h=Object(o.b)(),x=Object(u.g)(),p=function(){var e=Object(K.a)(z.a.mark((function e(t){var a,r,n,c,s,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,r=t.password,O($e),e.next=4,Le(a,r);case 4:n=e.sent,(c=n.data).error?(j("password",{type:"invalidCredential",message:c.message}),O(Qe)):(s=c.user,i=c.token,h(Fe(s,i)),x.push("/")),O(We);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(ie.j,{size:"small",children:Object(r.jsxs)(ie.d,{color:"white",children:[Object(r.jsx)("div",{className:"text-center mb-5",children:Object(r.jsx)(je,{})}),Object(r.jsxs)("form",{onSubmit:s(p),children:[Object(r.jsx)(ie.g,{errorMessage:null===(e=i.email)||void 0===e?void 0:e.message,children:Object(r.jsx)(ie.i,{name:"email",placeholder:"Email",fitContainer:!0,ref:c(Ve)})}),Object(r.jsx)(ie.g,{errorMessage:null===(t=i.password)||void 0===t?void 0:t.message,children:Object(r.jsx)(ie.h,{name:"password",placeholder:"Password",fitContainer:!0,ref:c(Xe)})}),Object(r.jsx)(ie.b,{size:"large",fitContainer:!0,disabled:m===$e,children:"Masuk"})]}),Object(r.jsxs)("div",{className:"text-center mt-2",children:["Belum memiliki akun ? ",Object(r.jsx)(l.b,{to:"/register",children:Object(r.jsx)("b",{children:"Daftar sekarang"})})]})]})})}var et=a(65),tt=a.n(et),at=a(66),rt=a.n(at),nt=a(50),ct=a.n(nt),st=a(67),it=a.n(st);function lt(e){return ut.apply(this,arguments)}function ut(){return(ut=Object(K.a)(z.a.mark((function e(t){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},r=a.token,e.next=3,G.a.get("".concat(X,"/api/delivery-addresses"),{params:{limit:t.limit,skip:t.page*t.limit-t.limit},headers:{authorization:"Bearer ".concat(r)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ot(e){return jt.apply(this,arguments)}function jt(){return(jt=Object(K.a)(z.a.mark((function e(t){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},r=a.token,e.next=3,G.a.post("".concat(X,"/api/delivery-addresses"),t,{headers:{authorization:"Bearer ".concat(r)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var bt="idle",dt="process",mt="success",Ot="error";function ht(){var e=Object(n.useState)([]),t=Object(Ne.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(Ne.a)(c,2),i=s[0],l=s[1],u=Object(n.useState)(bt),o=Object(Ne.a)(u,2),j=o[0],b=o[1],d=Object(n.useState)(1),m=Object(Ne.a)(d,2),O=m[0],h=m[1],x=Object(n.useState)(10),p=Object(Ne.a)(x,2),f=p[0],g=p[1],v=Object(n.useCallback)(Object(K.a)(z.a.mark((function e(){var t,a,n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(dt),e.next=3,lt({page:O,limit:f});case 3:if(t=e.sent,a=t.data,n=a.data,c=a.count,!a.error){e.next=11;break}return b(Ot),e.abrupt("return");case 11:b(mt),r(n),l(c);case 14:case"end":return e.stop()}}),e)}))),[O,f]);return Object(n.useEffect)((function(){v()}),[v]),{data:a,count:i,status:j,page:O,limit:f,setPage:h,setLimit:g}}function xt(e){return pt.apply(this,arguments)}function pt(){return(pt=Object(K.a)(z.a.mark((function e(t){var a,r,n,c,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},r=a.token,n=t.limit,c=t.page,s=c*n-n,e.next=5,G.a.get("".concat(X,"/api/orders/"),{params:{skip:s,limit:n},headers:{authorization:"Bearer ".concat(r)}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ft(e){return gt.apply(this,arguments)}function gt(){return(gt=Object(K.a)(z.a.mark((function e(t){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},r=a.token,e.next=3,G.a.post("".concat(X,"/api/orders/"),t,{headers:{authorization:"Bearer ".concat(r)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var vt=function(e){var t=e.children;return Object(r.jsx)("div",{className:"text-3xl flex justify-center",children:t})},kt=[{label:"Item",icon:Object(r.jsx)(vt,{children:Object(r.jsx)(ye.a,{})})},{label:"Alamat",icon:Object(r.jsx)(vt,{children:Object(r.jsx)(tt.a,{})})},{label:"Konfirmasi",icon:Object(r.jsx)(vt,{children:Object(r.jsx)(rt.a,{})})}],yt=[{Header:"Nama Produk",accessor:function(e){return Object(r.jsxs)("div",{className:"flex items-center",children:[Object(r.jsx)("img",{src:"".concat(X,"/upload/").concat(e.image_url),alt:e.name,width:48}),e.name]})}},{Header:"Jumlah",accessor:"qty"},{Header:"Harga satuan",id:"price",accessor:function(e){return Object(r.jsxs)("span",{children:["@ ",Se(e.price)]})}},{Header:"Harga Total",id:"subtotal",accessor:function(e){return Object(r.jsx)("div",{children:Se(e.price*e.qty)})}}],wt=[{Header:"Nama Alamat",accessor:function(e){return Object(r.jsxs)("div",{children:[e.nama," ",Object(r.jsx)("br",{}),Object(r.jsxs)("small",{children:[e.provinsi,", ",e.kabupaten,", ",e.kecamatan,",",e.kelurahan," ",Object(r.jsx)("br",{}),e.detail]})]})}}];function St(){var e=Object(n.useState)(0),t=Object(Ne.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),i=Object(Ne.a)(s,2),j=i[0],b=i[1],d=Object(o.c)((function(e){return e.cart})),m=ht(),O=m.data,h=m.status,x=m.limit,p=m.page,f=m.count,g=m.setPage,v=Object(u.g)(),k=Object(o.b)();function y(){return(y=Object(K.a)(z.a.mark((function e(){var t,a,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={delivery_fee:$,delivery_address:j._id},e.next=3,ft(t);case 3:if(a=e.sent,n=a.data,console.log(n),!(null===n||void 0===n?void 0:n.error)){e.next=8;break}return e.abrupt("return",Object(r.jsx)("div",{children:null===n||void 0===n?void 0:n.error}));case 8:v.push("/invoice/".concat(n._id)),k(te);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return d.length?Object(r.jsxs)(ie.j,{children:[Object(r.jsx)(be,{}),Object(r.jsx)(ie.s,{as:"h3",children:"Checkout"}),Object(r.jsx)(ie.q,{steps:kt,active:a}),0===a?Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(ie.r,{items:d,columns:yt,perPage:d.length,showPagination:!1}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"text-right",children:[Object(r.jsxs)(ie.s,{as:"h4",children:[" Subtotal : ",Se(we(d))]}),Object(r.jsx)("br",{}),Object(r.jsx)(ie.b,{onClick:function(e){return c(a+1)},color:"blue",iconAfter:Object(r.jsx)(ve.a,{}),children:"Selanjutnya "})]})]}):null,1===a?Object(r.jsxs)("div",{children:[Object(r.jsx)(ie.r,{items:O,columns:wt,perPage:x,page:p,onPageChange:function(e){return g(e)},totalItems:f,isLoading:"process"===h,selectable:!0,primaryKey:"_id",selectedRow:j,onSelectRow:function(e){return b(e)}}),O.length||"success"!==h?null:Object(r.jsx)("div",{className:"text-center my-10",children:Object(r.jsxs)(l.b,{to:"/alamat-pengirim/tambah",children:["Kamu belum memiliki alamat pengirim ",Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),Object(r.jsx)(ie.b,{children:"Tambah Alamat"})]})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(ie.n,{desktop:2,tablet:2,mobile:2,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ie.b,{onClick:function(e){return c(a-1)},color:"blue",iconBefore:Object(r.jsx)(ct.a,{}),children:"Sebelumnya"})}),Object(r.jsx)("div",{className:"text-right",children:Object(r.jsx)(ie.b,{onClick:function(e){return c(a+1)},disabled:!j,color:"blue",iconAfter:Object(r.jsx)(ve.a,{}),children:"Selanjutnya "})})]})]}):null,2===a?Object(r.jsxs)("div",{children:[Object(r.jsx)(ie.r,{columns:[{Header:"",accessor:"label"},{Header:"",accessor:"value"}],items:[{label:"Alamat",value:Object(r.jsxs)("div",{children:[j.nama," ",Object(r.jsx)("br",{}),j.provinsi,", ",j.kabupaten,",",j.kecamatan,", ",j.kelurahan," ",Object(r.jsx)("br",{}),j.detail]})},{label:"Subtotal",value:Se(we(d))},{label:"Ongkir",value:Object(r.jsx)("b",{children:Se($)})},{label:"Total",value:Object(r.jsx)("b",{children:Se(we(d)+parseInt($))})}],showPagination:!1}),Object(r.jsx)("br",{}),Object(r.jsxs)(ie.n,{desktop:2,tablet:2,mobile:2,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ie.b,{onClick:function(e){return c(a-1)},color:"blue",iconBefore:Object(r.jsx)(ct.a,{}),children:"Sebelumnya"})}),Object(r.jsx)("div",{className:"text-right",children:Object(r.jsx)(ie.b,{onClick:function(){return y.apply(this,arguments)},color:"blue",size:"large",iconBefore:Object(r.jsx)(it.a,{}),children:"Bayar"})})]})]}):null]}):Object(r.jsx)(u.a,{to:"/"})}var _t={required:{value:!0,message:"Nama alamat harus diisi"},maxLength:{value:500,message:"Nama alamat maksimal 500 karakter"},minLength:{value:5,message:"Nama alamat minimal 5 karakter"}},Pt={required:{value:!0,message:"Provinsi harus dipilih"}},Nt={required:{value:!0,message:"Kabupaten harus dipilih"}},Ct={required:{value:!0,message:"Kecamatan harus dipilih"}},It={required:{value:!0,message:"Kelurahan harus dipilih"}},Et={required:{value:!0,message:"Detail alamat harus dipilih"},maxLength:{value:1e3,message:"Alamat maksimal 1000 karakter"}};function Tt(e){var t=e.tingkat,a=e.kodeInduk,c=e.onChange,s=e.value,i=Object(n.useState)([]),l=Object(Ne.a)(i,2),u=l[0],o=l[1],j=Object(n.useState)(!1),b=Object(Ne.a)(j,2),d=b[0],m=b[1];return Object(n.useEffect)((function(){m(!0),G.a.get("".concat(X,"/api/wilayah/").concat(t,"?kode_induk=").concat(a)).then((function(e){var t=e.data;return o(t)})).finally((function(e){return m(!1)}))}),[a,t]),Object(r.jsx)(ie.o,{options:u.map((function(e){return{label:e.nama,value:e.kode}})),onChange:c,value:s,isLoading:d,isDisabled:d||!u.length})}function At(){var e,t,a,c,s,i,l,o,j,b=Object(u.g)(),d=Object(Ce.a)(),m=d.handleSubmit,O=d.register,h=d.errors,x=d.setValue,p=d.watch,f=d.getValues,g=p();Object(n.useEffect)((function(){O({name:"provinsi"},Pt),O({name:"kabupaten"},Nt),O({name:"kecamatan"},Ct),O({name:"kelurahan"},It)}),[O]),Object(n.useEffect)((function(){x("kabupaten",null),x("kecamatan",null),x("kelurahan",null)}),[g.provinsi,x]),Object(n.useEffect)((function(){x("kecamatan",null),x("kelurahan",null)}),[g.kabupaten,x]),Object(n.useEffect)((function(){x("kelurahan",null)}),[g.kecamatan,x]);var v=function(e,t){return x(e,t,{shouldValidate:!0,shouldDirty:!0})},k=function(){var e=Object(K.a)(z.a.mark((function e(t){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama:t.nama_alamat,detail:t.detail_alamat,provinsi:t.provinsi.label,kabupaten:t.kabupaten.label,kecamatan:t.kecamatan.label,kelurahan:t.kelurahan.label},e.next=3,ot(a);case 3:if(r=e.sent,!r.data.error){e.next=7;break}return e.abrupt("return");case 7:b.push("/alamat-pengirim");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(ie.j,{children:[Object(r.jsx)(be,{}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:m(k),children:[Object(r.jsx)(ie.g,{label:"Nama Alamat ",errorMessage:null===(e=h.nama_alamat)||void 0===e?void 0:e.message,color:"black",children:Object(r.jsx)(ie.i,{placeholder:"Nama Alamat",fitContainer:!0,name:"nama_alamat",ref:O(_t)})}),Object(r.jsx)(ie.g,{label:"Provinsi",errorMessage:null===(t=h.provinsi)||void 0===t?void 0:t.message,color:"black",children:Object(r.jsx)(Tt,{onChange:function(e){return v("provinsi",e)},name:"provinsi",value:f().provinsi})}),Object(r.jsx)(ie.g,{label:"Kabupaten/Kota",errorMessage:null===(a=h.kabupaten)||void 0===a?void 0:a.message,color:"black",children:Object(r.jsx)(Tt,{tingkat:"kabupaten",onChange:function(e){return v("kabupaten",e)},value:f().kabupaten,kodeInduk:null===(c=f().provinsi)||void 0===c?void 0:c.value})}),Object(r.jsx)(ie.g,{label:"Kecamatan",errorMessage:null===(s=h.kecamatan)||void 0===s?void 0:s.message,color:"black",children:Object(r.jsx)(Tt,{tingkat:"kecamatan",onChange:function(e){return v("kecamatan",e)},value:f().kecamatan,kodeInduk:null===(i=f().kabupaten)||void 0===i?void 0:i.value})}),Object(r.jsx)(ie.g,{label:"Kelurahan",errorMessage:null===(l=h.kelurahan)||void 0===l?void 0:l.message,color:"black",children:Object(r.jsx)(Tt,{tingkat:"desa",onChange:function(e){return v("kelurahan",e)},value:f().kelurahan,kodeInduk:null===(o=f().kecamatan)||void 0===o?void 0:o.value})}),Object(r.jsx)(ie.g,{label:"Detail Alamat ",errorMessage:null===(j=h.detail_alamat)||void 0===j?void 0:j.message,color:"black",children:Object(r.jsx)(ie.t,{placeholder:"Detaill Alamat",fitContainer:!0,name:"detail_alamat",ref:O(Et)})}),Object(r.jsx)(ie.b,{fitContainer:!0,children:"Simpan"})]})})]})}Tt.defaultProps={tingkat:"provinsi"};var qt=[{Header:"Nama",accessor:"nama"},{Header:"Detail",accessor:function(e){return Object(r.jsxs)("div",{children:[e.provinsi,", ",e.kabupaten,", ",e.kecamatan,", ",e.kelurahan,Object(r.jsx)("br",{}),e.detail]})}}];function Dt(){var e=ht(),t=e.data,a=e.limit,n=e.page,c=e.status,s=e.count,i=e.setPage;return Object(r.jsxs)(ie.j,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(be,{}),Object(r.jsx)(ie.s,{as:"h3",children:"Alamat Pengirim"}),Object(r.jsx)("br",{}),Object(r.jsx)(ie.r,{items:t,columns:qt,totalItems:s,page:n,isLoading:"process"===c,perPage:a,onPageChange:function(e){return i(e)}})]}),"success"!==c||t.length?null:Object(r.jsxs)("div",{className:"text-center p-10",children:["Kamu belum menentukan alamat Pengirim",Object(r.jsx)(l.b,{to:"/alamat-pengirim/tambah",children:Object(r.jsx)(ie.b,{children:"Tambah Baru"})})]})]})}function Lt(){return(Lt=Object(K.a)(z.a.mark((function e(t){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},r=a.token,e.next=3,G.a.get("".concat(X,"/api/invoice/").concat(t),{headers:{authorization:"Bearer ".concat(r)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mt(e){switch(e.status){case"waiting_payment":return Object(r.jsx)(ie.a,{color:"orange",children:"Menunggu Pembayaran"});case"paid":return Object(r.jsx)(ie.a,{color:"green",children:"Sudah dibayar"});case"processing":return Object(r.jsx)(ie.a,{color:"yellow",children:"Sedang diproses"});case"in_delivery":return Object(r.jsx)(ie.a,{color:"blue",children:"Dalam pengiriman"});case"delivered":return Object(r.jsx)(ie.a,{color:"red",children:"Pesan diterima"});default:return Object(r.jsx)("div",{})}}function Bt(){var e,t,a,c,s,i,l,o,j=Object(n.useState)(null),b=Object(Ne.a)(j,2),d=b[0],m=b[1],O=Object(n.useState)(""),h=Object(Ne.a)(O,2),x=h[0],p=h[1],f=Object(n.useState)("process"),g=Object(Ne.a)(f,2),v=g[0],k=g[1],y=Object(u.h)().params;return Object(n.useEffect)((function(){(function(e){return Lt.apply(this,arguments)})(null===y||void 0===y?void 0:y.order_id).then((function(e){var t=e.data;(null===t||void 0===t?void 0:t.error)&&p(t.message||"Terjadi kesalahan yang tidak dietahui"),m(t)})).finally((function(){return k("idle")}))}),[]),x.length?Object(r.jsxs)(ie.j,{children:[Object(r.jsx)(be,{}),Object(r.jsx)(ie.s,{as:"h3",children:"Terjadi Kesalahan"}),x]}):"process"===v?Object(r.jsx)(ie.j,{children:Object(r.jsx)("div",{className:"text-center py-10",children:Object(r.jsx)("div",{className:"inline-block",children:Object(r.jsx)(pe.a,{color:"blue"})})})}):Object(r.jsxs)(ie.j,{children:[Object(r.jsx)(be,{}),Object(r.jsx)(ie.s,{as:"h3",children:"Invoice"}),Object(r.jsx)("br",{}),Object(r.jsx)(ie.r,{showPagination:!1,items:[{label:"Status",value:Object(r.jsx)(Mt,{status:null===d||void 0===d?void 0:d.payment_status})},{label:"Order ID",value:"#"+(null===d||void 0===d||null===(e=d.order)||void 0===e?void 0:e.order_number)},{label:"Total amount",value:Se(null===d||void 0===d?void 0:d.total)},{label:"Billed to",value:Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:null===d||void 0===d||null===(t=d.user)||void 0===t?void 0:t.full_name}),Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:null===d||void 0===d||null===(a=d.user)||void 0===a?void 0:a.email}),Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:null===d||void 0===d||null===(c=d.delivery_address)||void 0===c?void 0:c.detail}),Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:null===d||void 0===d||null===(s=d.delivery_address)||void 0===s?void 0:s.kelurahan}),Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:null===d||void 0===d||null===(i=d.delivery_address)||void 0===i?void 0:i.kecamatan}),Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:null===d||void 0===d||null===(l=d.delivery_address)||void 0===l?void 0:l.kabupaten}),Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:null===d||void 0===d||null===(o=d.delivery_address)||void 0===o?void 0:o.provinsi}),Object(r.jsx)("br",{})]})},{label:"Payment to",value:Object(r.jsxs)("div",{children:[W," ",Object(r.jsx)("br",{}),Q," ",Object(r.jsx)("br",{}),Z.account_no," ",Object(r.jsx)("br",{}),Z.bank_name]})}],columns:[{Header:"Invoice",accessor:"label"},{Header:"",accessor:"value"}]})]})}Mt.defaultProps={};var Ht=a(68),Rt=a.n(Ht),zt=a(69),Kt=a.n(zt),Jt=a(70),Gt=a.n(Jt),Ut=function(e){var t=e.children;return Object(r.jsx)("div",{className:"text-white text-5xl flex justify-center mb-5",children:t})},Ft=[{label:"Beranda",value:Object(r.jsx)(Ut,{children:Object(r.jsx)(Rt.a,{})}),url:"/"},{label:"Alamat",value:Object(r.jsx)(Ut,{children:Object(r.jsx)(Kt.a,{})}),url:"/alamat-pengirim"},{label:"Pesanan",value:Object(r.jsx)(Ut,{children:Object(r.jsx)(Gt.a,{})}),url:"/pesanan"},{label:"Logout",value:Object(r.jsx)(Ut,{children:Object(r.jsx)(ve.a,{})}),url:"/logout"}];function Vt(){return Object(r.jsxs)(ie.j,{children:[Object(r.jsx)(be,{}),Object(r.jsx)(ie.s,{as:"h3",children:"Akun Anda"}),Object(r.jsx)("br",{}),Object(r.jsx)(ie.n,{desktop:4,mobile:4,tablet:4,children:Ft.map((function(e,t){return Object(r.jsx)("div",{className:"px-2 pb-2",children:Object(r.jsx)(l.b,{to:e.url,children:Object(r.jsx)(ie.d,{header:e.value,body:Object(r.jsx)("div",{className:"text-center font-bold text-white",children:e.label})})})},t)}))})]})}var Xt,Yt=a(16),$t=a(71),Wt=a.n($t),Qt=[(Xt={Header:"",id:"Status",accessor:function(e){return Object(r.jsxs)("div",{children:["#",e.order_number,Object(r.jsx)("br",{}),Object(r.jsx)(Mt,{status:e.status})]})}},Object(Yt.a)(Xt,"Header","Items"),Object(Yt.a)(Xt,"accessor",(function(e){return Object(r.jsxs)("div",{children:["#",e.order_items.map((function(e){return Object(r.jsxs)("div",{children:[e.name," ",e.qty]},e._id)})),Object(r.jsx)("br",{})]})})),Object(Yt.a)(Xt,"Header","Total"),Object(Yt.a)(Xt,"accessor",(function(e){return Object(r.jsx)("div",{children:Se(we(e.order_items)+e.delivery_fee)})})),Object(Yt.a)(Xt,"Header","Invoice"),Object(Yt.a)(Xt,"accessor",(function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(l.b,{to:"/invoice/".concat(e._id),children:Object(r.jsx)(ie.b,{color:"gray",iconBefore:Object(r.jsx)(Wt.a,{}),children:"Invoice"})})})})),Xt)];function Zt(){var e=Object(n.useState)([]),t=Object(Ne.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),i=Object(Ne.a)(s,2),l=i[0],u=i[1],o=Object(n.useState)("idle"),j=Object(Ne.a)(o,2),b=j[0],d=j[1],m=Object(n.useState)(1),O=Object(Ne.a)(m,2),h=O[0],x=O[1],p=Object(n.useState)(10),f=Object(Ne.a)(p,2),g=f[0],v=(f[1],Object(n.useCallback)(Object(K.a)(z.a.mark((function e(){var t,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d("process"),e.next=3,xt({limit:g,page:h});case 3:if(t=e.sent,!(a=t.data).error){e.next=8;break}return d("error"),e.abrupt("return");case 8:d("success"),c(a.data),u(a.count);case 11:case"end":return e.stop()}}),e)}))),[h,g]));return Object(n.useEffect)((function(){v()}),[v]),Object(r.jsxs)(ie.j,{children:[Object(r.jsx)(be,{}),Object(r.jsx)(ie.s,{as:"h3",children:"Pesanan Anda"}),Object(r.jsx)("br",{}),Object(r.jsx)(ie.r,{items:a,totalItems:l,columns:Qt,onPageChange:function(e){return x(e)},page:h,isLoading:"process"===b})]})}function ea(){var e=Object(o.b)(),t=Object(u.g)();return Object(n.useEffect)((function(){Be().then((function(){return e({type:m})})).then((function(){return t.push("/")}))}),[t,Be]),Object(r.jsx)(ie.j,{size:"small",children:Object(r.jsxs)("div",{className:"text-center flex flex-col justify-center items-center",children:[Object(r.jsx)(pe.a,{color:"red"}),Object(r.jsx)("br",{}),"Logging out"]})})}var ta=a(41);function aa(e){var t=e.children,a=Object(ta.a)(e,["children"]),n=Object(o.c)((function(e){return e.auth})).user;return Object(r.jsx)(u.b,Object(x.a)(Object(x.a)({},a),{},{children:n?t:Object(r.jsx)(u.a,{to:"/login"})}))}function ra(e){var t=e.children,a=Object(ta.a)(e,["children"]),n=Object(o.c)((function(e){return e.auth})).user;return Object(r.jsx)(u.b,Object(x.a)(Object(x.a)({},a),{},{children:n?Object(r.jsx)(u.a,{to:"/login"}):t}))}var na=function(){return Object(n.useEffect)((function(){H.subscribe(se),function(){ce.apply(this,arguments)}()}),[]),Object(r.jsx)(o.a,{store:H,children:Object(r.jsx)(l.a,{children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",component:Pe,exact:!0}),Object(r.jsx)(ra,{path:"/register",children:Object(r.jsx)(Ge,{})}),Object(r.jsx)(ra,{path:"/register/berhasil",children:Object(r.jsx)(Ue,{})}),Object(r.jsx)(ra,{path:"/login",children:Object(r.jsx)(Ze,{})}),Object(r.jsx)(aa,{path:"/checkout",children:Object(r.jsx)(St,{})}),Object(r.jsx)(aa,{path:"/alamat-pengirim/tambah",children:Object(r.jsx)(At,{})}),Object(r.jsx)(aa,{path:"/alamat-pengirim",children:Object(r.jsx)(Dt,{})}),Object(r.jsx)(aa,{path:"/account",children:Object(r.jsx)(Vt,{})}),Object(r.jsx)(u.b,{path:"/pesanan",children:Object(r.jsx)(aa,{children:Object(r.jsx)(Zt,{})})}),Object(r.jsx)(aa,{path:"/invoice/:order_id",children:Object(r.jsx)(Bt,{})}),Object(r.jsx)(aa,{path:"/logout",children:Object(r.jsx)(ea,{})})]})})})},ca=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(na,{})}),document.getElementById("root")),ca()},77:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.5cfc2fc2.chunk.js.map