"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[737],{2737:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,u,c,i,o,s,p,l,d=t(168),h=t(7402),x=h.Z.div(r||(r=(0,d.Z)(["\n  margin-left: 20px;\n"]))),f=t(885),m=t(2791),b=t(9434),g=t(8174),v=t(208),Z=t(4683),j=h.Z.form(a||(a=(0,d.Z)(["\n  background-color: #e5e9eb;\n  max-width: 300px;\n  padding: 10px;\n"]))),k=h.Z.label(u||(u=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n  font-size: 20px;\n  line-height: 1.3;\n  margin-bottom: 15px;\n"]))),w=h.Z.input(c||(c=(0,d.Z)(["\n  margin-top: 10px;\n  padding: 5px 10px;\n"]))),y=h.Z.button(i||(i=(0,d.Z)(["\n  padding: 10px 15px;\n  border-radius: 20px;\n  border: none;\n  cursor: pointer;\n  :hover,\n  :focus {\n   background-color: grey;\n  }\n"]))),C=t(184),z=function(){var n=(0,b.v9)(Z.K2),e=(0,b.I0)(),t=(0,m.useState)(""),r=(0,f.Z)(t,2),a=r[0],u=r[1],c=(0,m.useState)(""),i=(0,f.Z)(c,2),o=i[0],s=i[1],p=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":u(r);break;case"number":s(r);break;default:return}};return(0,C.jsxs)(j,{onSubmit:function(t){return null!==n&&void 0!==n&&n.find((function(n){return n.name===a}))?g.Am.error("".concat(a," is already in contacts")):e((0,v.el)({name:a,number:o}))},children:[(0,C.jsxs)(k,{children:["Name",(0,C.jsx)(w,{type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p})]}),(0,C.jsxs)(k,{children:["Number",(0,C.jsx)(w,{type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p})]}),(0,C.jsx)(y,{type:"submit",children:"Add contact"})]})},A=t(5861),_=t(4687),S=t.n(_),N=t(6382),I=t(4635),V=(0,N.hg)("contacts/fetchAll",function(){var n=(0,A.Z)(S().mark((function n(e,t){var r;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,I.SN)();case 3:return r=n.sent,n.abrupt("return",r);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",t.rejectWithValue(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()),W=((0,N.hg)("contacts/addContact",function(){var n=(0,A.Z)(S().mark((function n(e,t){var r;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,I.hG)(e);case 3:return r=n.sent,n.abrupt("return",r);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",t.rejectWithValue(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()),(0,N.hg)("contacts/deleteContact",function(){var n=(0,A.Z)(S().mark((function n(e,t){var r;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,I.zY)(e);case 3:return r=n.sent,n.abrupt("return",r);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",t.rejectWithValue(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}())),q=h.Z.li(o||(o=(0,d.Z)(["\n  font-size: 20px;\n  line-height: 1.3;\n  :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),K=h.Z.button(s||(s=(0,d.Z)(["\n  margin-left: 15px;\n  border-radius: 20px;\n  border: none;\n  padding: 6px 14px;\n  font-size: 16px;\n  line-height: 1.3;\n  cursor: pointer;\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"]))),P=function(){var n=(0,b.I0)(),e=(0,b.v9)(Z.K2);(0,m.useEffect)((function(){n(V())}),[n]);return(0,C.jsx)("ul",{children:e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,C.jsxs)(q,{children:[r,": ",a,(0,C.jsx)(K,{onClick:function(){!function(e){n(W(e))}(t)},children:"Delete"})]},t)}))})},B=t(9459),D=h.Z.label(p||(p=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  line-height: 1.3;\n"]))),E=h.Z.input(l||(l=(0,d.Z)(["\n  max-width: 200px;\n  padding: 5px 10px;\n  margin-top: 10px;\n"]))),F=function(){var n=(0,b.I0)(),e=(0,b.v9)((function(n){return n.filter.filter}));return(0,C.jsxs)(D,{children:["Search contacts by name",(0,C.jsx)(E,{type:"text",name:"filter",value:e,onChange:function(e){var t=e.currentTarget.value;n((0,B.C)(t))}})]})};function G(){return(0,C.jsxs)(x,{children:[(0,C.jsx)("h1",{children:"Phonebook"}),(0,C.jsx)(z,{}),(0,C.jsx)("h2",{children:"Contacts"}),(0,C.jsx)(F,{}),(0,C.jsx)(P,{})]})}}}]);
//# sourceMappingURL=737.3f02d5b5.chunk.js.map