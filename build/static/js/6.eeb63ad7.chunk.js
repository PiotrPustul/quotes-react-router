(this["webpackJsonprouter-app"]=this["webpackJsonprouter-app"]||[]).push([[6],{43:function(e,t,c){e.exports={card:"Card_card__1m44e"}},44:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE","input-error":"QuoteForm_input-error__1Rmxv",actions:"QuoteForm_actions__354La"}},53:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(2),n=c(35),s=c(43),o=c.n(s),u=c(1),i=function(e){return Object(u.jsx)("div",{className:o.a.card,children:e.children})},j=c(15),l=c(44),d=c.n(l),b=function(e){var t=Object(a.useState)(!1),c=Object(n.a)(t,2),s=c[0],o=c[1],l=Object(a.useState)(),b=Object(n.a)(l,2),m=b[0],O=b[1],h=Object(a.useState)(),x=Object(n.a)(h,2),p=x[0],f=x[1],_=Object(a.useState)(""),v=Object(n.a)(_,2),g=v[0],N=v[1],F=Object(a.useState)(""),Q=Object(n.a)(F,2),S=Q[0],w=Q[1],y=Object(a.useRef)(),A=Object(a.useRef)(),R=""!==g?"".concat(d.a["input-error"]):"",k=S&&"".concat(d.a["input-error"]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{when:s,message:function(){return"Are you sure you want to leave?"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){o(!0)},className:d.a.form,onSubmit:function(t){t.preventDefault();var c=y.current.value,a=A.current.value;0===c.length?(N("Please add your name."),O(!1)):(N(""),O(!0)),a.length<5?(w("Please type your quote min 5 charts"),f(!1)):(w(""),f(!0)),(m||p)&&e.onAddQuote({author:c,text:a})},children:[e.isLoading&&Object(u.jsx)("div",{className:d.a.loading,children:Object(u.jsx)(j.a,{})}),Object(u.jsxs)("div",{className:d.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{className:R,type:"text",id:"author",ref:y}),g&&Object(u.jsx)("p",{className:"error-message",children:g})]}),Object(u.jsxs)("div",{className:d.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{className:k,id:"text",rows:"5",ref:A}),S&&Object(u.jsx)("p",{className:"error-message",children:S})]}),Object(u.jsx)("div",{className:d.a.actions,children:Object(u.jsx)("button",{className:"btn",onClick:function(){o(!1)},children:"Add Quote"})})]})})]})},m=c(34),O=c(33);t.default=function(){var e=Object(m.a)(O.b),t=e.sendRequest,c=e.status,n=Object(r.h)();Object(a.useEffect)((function(){"completed"===c&&n.push({pathname:"/quotes"})}),[c,n]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.eeb63ad7.chunk.js.map