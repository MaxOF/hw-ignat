(this["webpackJsonphw-1"]=this["webpackJsonphw-1"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={wrapper:"Affairs_wrapper__adwxm",affairsWrapper:"Affairs_affairsWrapper__1xP7n",button:"Affairs_button__3YaQm"}},function(e,t,n){e.exports={chat:"Message_chat__3YMyi",avatarWrappper:"Message_avatarWrappper__d59KI",avatar:"Message_avatar__3FT3j",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}},,,,,function(e,t,n){e.exports={button:"Header_button__3yJYf",link:"Header_link__1oUIl",activeLink:"Header_activeLink__263bW",header:"Header_header__1amup"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",input:"SuperInputText_input__1P_Mf"}},function(e,t,n){e.exports={container:"Greeting_container__11QLz",error:"Greeting_error__1uvQ8",inputClass:"Greeting_inputClass__14GLD",errorInput:"Greeting_errorInput__2Khas",button:"Greeting_button__24QRF"}},function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",button:"SuperButton_button__cV79v",red:"SuperButton_red__1kaz_"}},,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),i=(n(26),n(20)),o=n.n(i),j=n(7),l=n(11),u=n.n(l),d=n(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.header,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(j.b,{to:"/pre-junior",className:u.a.link,children:"Pre-junior"}),Object(d.jsx)(j.b,{to:"/junior",className:u.a.link,children:"Junior"}),Object(d.jsx)(j.b,{to:"/junior-plus",className:u.a.link,children:"Junior-plus"})]}),Object(d.jsx)("button",{className:u.a.button,children:"Menu"})]})};var h=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},x=n(2),p=n(6),O=n.n(p);var m=function(e){return Object(d.jsxs)("div",{className:O.a.chat,children:[Object(d.jsx)("div",{className:O.a.avatarWrappper,children:Object(d.jsx)("img",{className:O.a.avatar,src:e.avatar})}),Object(d.jsxs)("div",{className:O.a.text,children:[Object(d.jsx)("div",{className:O.a.name,children:e.name}),Object(d.jsx)("div",{className:O.a.message,children:e.message}),Object(d.jsx)("div",{className:O.a.time,children:e.time})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",v="some text",g="22:00";var N=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)("div",{className:"hw-1",children:Object(d.jsx)(m,{avatar:_,name:f,message:v,time:g})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},k=n(3),C=n(5),w=n.n(C);var S=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:w.a.affairsWrapper,children:e.affair.name}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:w.a.button,children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(d.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:w.a.wrapper,children:[t,Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:w.a.button,children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:w.a.button,children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:w.a.button,children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:w.a.button,children:"Low"})]})]})},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(a.useState)(I),t=Object(k.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(k.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},A=n(21),W=n(14),H=n.n(W),M=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=r?H.a.errorInput:H.a.input;return Object(d.jsxs)("div",{className:H.a.container,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:s,onBlur:n}),Object(d.jsx)("span",{children:r}),Object(d.jsx)("button",{onClick:a,disabled:!t,children:"add"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:c})})]})},F=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(k.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(k.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(M,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u(null)):(i(""),u("Not an empty string"))},addUser:function(){n(s),alert("Hello ".concat(s," !"))},error:l,totalUsers:b})},B=n(30);var G=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(F,{users:n,addUserCallback:function(e){var t={_id:Object(B.a)(),name:e};r([].concat(Object(A.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},E=n(9),J=n(10),P=n(13),U=n.n(P),K=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(U.a.error," ").concat(i||""),l="".concat(U.a.input," ").concat(c?U.a.errorInput:U.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},X=n(17),L=n.n(X),Q=n(15),Y=n.n(Q),z=function(e){var t=e.red,n=e.className,a=Object(J.a)(e,["red","className"]),r="".concat(Y.a.button," ").concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(d.jsx)("button",Object(E.a)({className:r},a))},R=n(18),Z=n.n(R),q=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),r=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(Z.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:c},r)),a&&Object(d.jsx)("span",{className:Z.a.spanClassName,children:a})]})};var D=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(k.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:L.a.column,children:[Object(d.jsx)(K,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(K,{className:L.a.blue}),Object(d.jsx)(z,{children:"default"}),Object(d.jsx)(z,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(z,{disabled:!0,children:"disabled"}),Object(d.jsx)(q,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var V=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{}),Object(d.jsx)(T,{}),Object(d.jsx)(G,{}),Object(d.jsx)(D,{})]})},$=function(){return Object(d.jsx)("div",{})},ee=function(){return Object(d.jsx)("div",{})};var te=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{path:"/*",element:Object(d.jsx)(h,{})}),Object(d.jsx)(x.a,{path:"/pre-junior",element:Object(d.jsx)(V,{})}),Object(d.jsx)(x.a,{path:"/junior",element:Object(d.jsx)($,{})}),Object(d.jsx)(x.a,{path:"/junior-plus",element:Object(d.jsx)(ee,{})}),"// add routes"]})})};var ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(te,{})]})};var ae=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.7799ab74.chunk.js.map