(this["webpackJsonphw-1"]=this["webpackJsonphw-1"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={wrapper:"Affairs_wrapper__adwxm",affairsWrapper:"Affairs_affairsWrapper__1xP7n",button:"Affairs_button__3YaQm"}},function(e,t,n){e.exports={chat:"Message_chat__3YMyi",avatarWrappper:"Message_avatarWrappper__d59KI",avatar:"Message_avatar__3FT3j",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}},,,function(e,t,n){e.exports={button:"Header_button__3yJYf",link:"Header_link__1oUIl",activeLink:"Header_activeLink__263bW",header:"Header_header__1amup"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",input:"SuperInputText_input__1P_Mf"}},function(e,t,n){e.exports={container:"Greeting_container__11QLz",error:"Greeting_error__1uvQ8",inputClass:"Greeting_inputClass__14GLD",errorInput:"Greeting_errorInput__2Khas",button:"Greeting_button__24QRF"}},function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",button:"SuperButton_button__cV79v",red:"SuperButton_red__1kaz_"}},,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},function(e,t,n){e.exports={wrapperButtons:"SuperEditableSpan_wrapperButtons__MHExE"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),i=(n(27),n(20)),o=n.n(i),j=n(9),l=n(11),u=n.n(l),b=n(0);var d=function(){return Object(b.jsxs)("div",{className:u.a.header,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(j.b,{to:"/pre-junior",className:u.a.link,children:"Pre-junior"}),Object(b.jsx)(j.b,{to:"/junior",className:u.a.link,children:"Junior"}),Object(b.jsx)(j.b,{to:"/junior-plus",className:u.a.link,children:"Junior-plus"})]}),Object(b.jsx)("button",{className:u.a.button,children:"Menu"})]})};var h=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},O=n(2),x=n(8),p=n.n(x);var m=function(e){return Object(b.jsxs)("div",{className:p.a.chat,children:[Object(b.jsx)("div",{className:p.a.avatarWrappper,children:Object(b.jsx)("img",{className:p.a.avatar,src:e.avatar})}),Object(b.jsxs)("div",{className:p.a.text,children:[Object(b.jsx)("div",{className:p.a.name,children:e.name}),Object(b.jsx)("div",{className:p.a.message,children:e.message}),Object(b.jsx)("div",{className:p.a.time,children:e.time})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",v="some text",g="22:00";var N=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)("div",{className:"hw-1",children:Object(b.jsx)(m,{avatar:_,name:f,message:v,time:g})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},k=n(3),C=n(7),S=n.n(C);var w=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:S.a.affairsWrapper,children:e.affair.name}),Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:S.a.button,children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(b.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:S.a.wrapper,children:[t,Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},className:S.a.button,children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},className:S.a.button,children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},className:S.a.button,children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},className:S.a.button,children:"Low"})]})]})},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(a.useState)(I),t=Object(k.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(k.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},A=n(22),B=n(14),E=n.n(B),F=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=r?E.a.errorInput:E.a.input;return Object(b.jsxs)("div",{className:E.a.container,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,className:s,onBlur:n}),Object(b.jsx)("span",{children:r}),Object(b.jsx)("button",{onClick:a,disabled:!t,children:"add"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:c})})]})},W=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(k.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(k.a)(o,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(F,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u(null)):(i(""),u("Not an empty string"))},addUser:function(){n(s),alert("Hello ".concat(s," !"))},error:l,totalUsers:d})},H=n(31);var M=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(W,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};r([].concat(Object(A.a)(n),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},P=n(5),J=n(6),G=n(13),U=n.n(G),K=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(U.a.error," ").concat(i||""),l="".concat(U.a.input," ").concat(c?U.a.errorInput:U.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(b.jsx)("span",{className:j,children:c})]})},X=n(17),L=n.n(X),D=n(15),Q=n.n(D),Y=function(e){var t=e.red,n=e.className,a=Object(J.a)(e,["red","className"]),r="".concat(Q.a.button," ").concat(t?Q.a.red:Q.a.default," ").concat(n);return Object(b.jsx)("button",Object(P.a)({className:r},a))},z=n(18),R=n.n(z),Z=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),r=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(R.a.checkbox," ").concat(n||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:c},r)),a&&Object(b.jsx)("span",{className:R.a.spanClassName,children:a})]})};var q=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(k.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:L.a.column,children:[Object(b.jsx)(K,{value:n,onChangeText:r,onEnter:s,error:c}),Object(b.jsx)(K,{className:L.a.blue}),Object(b.jsx)(Y,{children:"default"}),Object(b.jsx)(Y,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(Y,{disabled:!0,children:"disabled"}),Object(b.jsx)(Z,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(Z,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(J.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(k.a)(s,2),o=i[0],j=i[1],l=Object(a.useState)(c.value),u=Object(k.a)(l,2),d=(u[0],u[1]),h=r||{},O=h.children,x=h.onDoubleClick,p=h.className,m=Object(J.a)(h,["children","onDoubleClick","className"]),_="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(K,Object(P.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),d(c.value),n&&n()}},c)):Object(b.jsx)("span",Object(P.a)(Object(P.a)({onDoubleClick:function(e){j(!0),d(c.value),x&&x(e)},className:_},m),{},{children:O||c.value}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=n(21),ne=n.n(te);var ae=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(V,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsxs)("div",{className:ne.a.wrapperButtons,children:[Object(b.jsx)(Y,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(b.jsx)(Y,{onClick:function(){var e=ee("editable-span-value",n);r(e)},children:"restore"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var re=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(N,{}),Object(b.jsx)(T,{}),Object(b.jsx)(M,{}),Object(b.jsx)(q,{}),Object(b.jsx)(ae,{})]})},ce=function(){return Object(b.jsx)("div",{})},se=function(){return Object(b.jsx)("div",{})};var ie=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/*",element:Object(b.jsx)(h,{})}),Object(b.jsx)(O.a,{path:"/hw-ignat",element:Object(b.jsx)(re,{})}),Object(b.jsx)(O.a,{path:"/pre-junior",element:Object(b.jsx)(re,{})}),Object(b.jsx)(O.a,{path:"/junior",element:Object(b.jsx)(ce,{})}),Object(b.jsx)(O.a,{path:"/junior-plus",element:Object(b.jsx)(se,{})})]})})};var oe=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)(ie,{})]})};var je=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(oe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.16f7cd71.chunk.js.map