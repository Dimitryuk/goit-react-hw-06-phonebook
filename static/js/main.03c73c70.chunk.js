(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={input__field:"ContactForm_input__field__2avNL",form__button:"ContactForm_form__button__m7GUk"}},16:function(t,e,n){t.exports={contacts__list:"ContactList_contacts__list__ieZuD",contacts__button:"ContactList_contacts__button__1c5X6"}},19:function(t,e,n){t.exports={filter__field:"Filter_filter__field__3VCjK"}},26:function(t,e,n){},27:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),i=(n(26),n(27),n(17)),s=n(14),u=n.n(s),b=n(5),l=n(3),j=Object(l.b)("contacts/add",(function(t,e){return{payload:{id:u.a.generate(),name:t,number:e}}})),d=Object(l.b)("phonebook/delete"),f=Object(l.b)("phonebook/changeFilter"),_=n(11),h=n.n(_),O=n(1);var m=Object(b.b)((function(t){return t.contacts.phonebookContacts}),(function(t){return{onSubmit:function(e,n){return t(j(e,n))}}}))((function(t){t.phonebookContacts;var e=t.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),u=Object(i.a)(s,2),b=u[0],l=u[1],j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":l(c);break;default:return}};return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,b),o(""),l("")},children:[Object(O.jsxs)("label",{children:["Name",Object(O.jsx)("input",{className:h.a.input__field,onChange:j,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)("label",{children:["Number",Object(O.jsx)("input",{className:h.a.input__field,onChange:j,type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)("button",{className:h.a.form__button,type:"submit",children:"Add contact"})]})})})),p=n(16),x=n.n(p),v=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},C=Object(b.b)((function(t){var e=t.contacts,n=e.phonebookContacts,c=e.phonebookFilter;return{contacts:v(n,c)}}),(function(t){return{deleteContact:function(e){return t(d(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(O.jsx)("div",{children:Object(O.jsx)("ol",{className:x.a.contacts__list,children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(O.jsxs)("li",{className:"ContactList_item",children:[e," ",c,Object(O.jsx)("button",{className:x.a.contacts__button,type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})})})),k=n(19),g=n.n(k),y=Object(b.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(f(e))}}}))((function(t){var e=t.filter,n=t.changeFilter;return Object(O.jsxs)("div",{className:"FilterWrapper",children:["Find contact by name",Object(O.jsx)("label",{htmlFor:"",children:Object(O.jsx)("input",{className:g.a.filter__field,type:"text",name:"filter",value:e,onChange:function(t){return n(t.currentTarget.value)}})})]})}));var F,N=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(m,{}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(y,{}),Object(O.jsx)(C,{})]})})},w=n(10),A=n(20),L=n.n(A),S=n(4),z=n(21),Z=n.n(z),D=n(12),J=n(2),q=Object(l.c)([],(F={},Object(D.a)(F,j,(function(t,e){var n=e.payload;return[].concat(Object(w.a)(t),[n])})),Object(D.a)(F,d,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),F)),B=Object(l.c)("",Object(D.a)({},f,(function(t,e){return e.payload}))),M=Object(J.b)({phonebookContacts:q,phonebookFilter:B}),T={key:"contacts",storage:Z.a,blacklist:["filter"]},E=[].concat(Object(w.a)(Object(l.d)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),[L.a]),G=Object(l.a)({reducer:{contacts:Object(S.g)(T,M)},middleware:E,devTools:!1}),I={store:G,persistor:Object(S.h)(G)};o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(b.a,{store:I.store,children:Object(O.jsx)(N,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.03c73c70.chunk.js.map