(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,function(e,t,a){e.exports={diveButtonFilter:"Affairs_diveButtonFilter__3N8gQ",buttonFilter:"Affairs_buttonFilter__F5SIK",listDivBody:"Affairs_listDivBody__22Woa",divBody:"Affairs_divBody__39KOS",name:"Affairs_name__32oBL",low:"Affairs_low__P5qni",high:"Affairs_high__36oMl",middle:"Affairs_middle__2hOus",title:"Affairs_title__3L8vI"}},,function(e,t,a){e.exports={post:"Message_post__bQcta",ava:"Message_ava__5D0a4",back:"Message_back__zouWd",block:"Message_block__1ajZA",name:"Message_name__2zFE7",message:"Message_message__3Jv1d",time:"Message_time__1PbMs",title:"Message_title__zBhdS"}},function(e,t,a){e.exports={greetingContainer:"Greeting_greetingContainer__2TSGg",inputNotError:"Greeting_inputNotError__2v1Sj",inputError:"Greeting_inputError__3flAH",errorMessage:"Greeting_errorMessage__Jem0i",title:"Greeting_title__1l7HM",totalUsers:"Greeting_totalUsers__23BrZ",buttonAddUser:"Greeting_buttonAddUser__1GqOE",divConteiner:"Greeting_divConteiner__cznL1"}},,,,,function(e,t,a){e.exports={standartInputStyle:"SuperInputText_standartInputStyle__2S8M2",errorInputStyle:"SuperInputText_errorInputStyle__2yqxb",inputNotError:"SuperInputText_inputNotError__1q_NP",inputError:"SuperInputText_inputError__3pmVF"}},function(e,t,a){e.exports={blue:"HW4_blue__3PbWC",column:"HW4_column__bZqwm",testSpanError:"HW4_testSpanError__1JgNj",title:"HW4_title__1uCL-"}},,function(e,t,a){e.exports={default:"SuperButton_default__c7Wf2",red:"SuperButton_red__2dR0Q",buttonFilter:"SuperButton_buttonFilter__2Ig6n"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__3m-4T",spanClassName:"SuperCheckbox_spanClassName__29Yd6"}},,function(e,t,a){e.exports={App:"App_App__3agx2"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(15),c=a.n(s),i=(a(22),a(16)),o=a.n(i),l=a(4),d=a.n(l),j=a(0),u=function(e){return Object(j.jsxs)("div",{className:d.a.post,children:[Object(j.jsx)("div",{className:d.a.ava,children:Object(j.jsx)("div",{className:d.a.back,children:Object(j.jsx)("img",{alt:"ava",src:e.avatar})})}),Object(j.jsxs)("div",{className:d.a.block,children:[Object(j.jsx)("div",{className:d.a.name,children:e.name}),Object(j.jsx)("div",{className:d.a.message,children:e.message}),Object(j.jsx)("div",{className:d.a.time,children:e.time})]})]})},b="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6z5Asj733AuRYdGiVV7sBn_WqNEDLw6E3Tg&usqp=CAU",_="Child of Korn",h="Hello",m="22.01";var p=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)("span",{className:d.a.title,children:" homeworks 1 "}),Object(j.jsx)(u,{avatar:b,name:_,message:h,time:m}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},x=a(3),O=a(2),f=a.n(O);var g=function(e){var t="high"===e.affair.priority?f.a.high:"low"===e.affair.priority?f.a.low:f.a.middle;return Object(j.jsxs)("div",{className:f.a.divBody,children:[Object(j.jsx)("div",{className:f.a.name,children:e.affair.name}),Object(j.jsx)("div",{className:t,children:e.affair.priority}),Object(j.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},v=a(6),N=a(7),C=a(13),k=a.n(C),y=function(e){var t=e.red,a=e.className,n=Object(N.a)(e,["red","className"]),r="".concat(k.a.default," ").concat(t?k.a.red:""," ").concat(a);return Object(j.jsx)("button",Object(v.a)({className:r},n))};function S(e){var t=e.data.map((function(t){return Object(j.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:f.a.listDivBody,children:t}),Object(j.jsxs)("div",{className:f.a.diveButtonFilter,children:[Object(j.jsx)(y,{className:f.a.buttonFilter,onClick:function(){return e.setFilter("all")},children:"All"}),Object(j.jsx)(y,{className:f.a.buttonFilter,onClick:function(){return e.setFilter("high")},children:"High"}),Object(j.jsx)(y,{className:f.a.buttonFilter,onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(j.jsx)(y,{className:f.a.buttonFilter,onClick:function(){return e.setFilter("low")},children:"Low"})]})]})}var A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(n.useState)(A),t=Object(x.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("all"),c=Object(x.a)(s,2),i=c[0],o=c[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:f.a.title,children:"homeworks 2 "}),Object(j.jsx)(S,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(j.jsx)("hr",{})]})},E=a(17),F=a(5),B=a.n(F),M=a(10),T=a.n(M),I=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,o=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(T.a.inputError," ").concat(i||""),d="".concat(T.a.standartInputStyle," ").concat(c,"  ").concat(s?T.a.errorInputStyle:"");return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",Object(v.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:d},o)),s&&Object(j.jsx)("span",{className:l,children:s})]})},G=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,s=e.totalUsers;"".concat(B.a.inputNotError," ").concat(r?B.a.inputError:"");return Object(j.jsxs)("div",{className:B.a.divConteiner,children:[Object(j.jsx)(I,{value:t,onChange:a,placeholder:"What is your name?",error:r}),Object(j.jsx)(y,{onClick:n,disabled:!!r,children:"Add"}),Object(j.jsx)("span",{className:B.a.totalUsers,children:s})]})},U=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),s=Object(x.a)(r,2),c=s[0],i=s[1],o=Object(n.useState)(""),l=Object(x.a)(o,2),d=l[0],u=l[1],b=t.length;return Object(j.jsx)(G,{name:c,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){c.trim()?(alert("Hello "+c.trim()+" !"),a(c),i("")):u("Field must not be empty")},error:d,totalUsers:b})},W=a(26);var H=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)("span",{className:B.a.title,children:"homeworks 3 "}),Object(j.jsx)(U,{className:B.a.greetingContainer,users:a,addUserCallback:function(e){r([].concat(Object(E.a)(a),[{_id:Object(W.a)(),name:e}]))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},q=a(11),P=a.n(q),K=a(14),L=a.n(K),z=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(L.a.checkbox," ").concat(n||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(v.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:c},s)),r&&Object(j.jsx)("span",{className:L.a.spanClassName,children:r})]})};var D=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],r=t[1],s=a?"":"Field must not be empty",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(x.a)(i,2),l=o[0],d=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)("span",{className:P.a.title,children:"homeworks 4 "}),Object(j.jsxs)("div",{className:P.a.column,children:[Object(j.jsx)(I,{value:a,onChangeText:r,onEnter:c,error:s}),Object(j.jsx)(I,{className:P.a.blue}),Object(j.jsx)(y,{children:"default"}),Object(j.jsx)(y,{red:!0,onClick:c,children:"delete "}),Object(j.jsx)(y,{disabled:!0,children:"disabled"}),Object(j.jsx)(z,{checked:l,onChangeChecked:d,children:"some text "}),Object(j.jsx)(z,{checked:l,onChange:function(e){return d(e.currentTarget.checked)}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var J=function(){return Object(j.jsxs)("div",{className:o.a.App,children:[Object(j.jsx)("div",{children:"react homeworks:"}),Object(j.jsx)(p,{}),Object(j.jsx)(w,{}),Object(j.jsx)(H,{}),Object(j.jsx)(D,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.74fcc98e.chunk.js.map