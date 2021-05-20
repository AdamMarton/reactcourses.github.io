(this["webpackJsonpcourses-app"]=this["webpackJsonpcourses-app"]||[]).push([[0],{30:function(e,t,s){},36:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),r=s(21),a=s.n(r),i=s(2),o=s.n(i),l=s(6),u=s(5),d=function(e){if(isNaN(e))return"00:00";var t=e/60,s=Math.floor(t),n=60*(t-s),c=Math.round(n);return s+":"+String(c).padStart(2,"0")},j=s(0);function h(){return(h=Object(l.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://courses-be.herokuapp.com/courses/"+t,e.next=3,fetch(s,{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://courses-be.herokuapp.com/authors/all",e.next=3,fetch("https://courses-be.herokuapp.com/authors/all",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.abrupt("return",t.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){var t={maxWidth:400},s=Object(n.useState)({}),c=Object(u.a)(s,2),r=c[0],a=c[1],i=Object(n.useState)({}),o=Object(u.a)(i,2),l=o[0],p=o[1];return Object(n.useEffect)((function(){(function(e){return h.apply(this,arguments)})(e.match.params.courseId).then((function(e){a(e.result)})),function(){return b.apply(this,arguments)}().then((function(e){p(e.result)}))}),[e]),Object(j.jsx)(j.Fragment,{children:r.id&&l.length?function(e,s){var n=function(e,t){return e.map((function(e){return Object(j.jsx)("span",{className:"d-block",children:t.find((function(t){return t.id===e})).name},e)}))}(e.authors,s);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)("div",{className:"p-2 w-50 flex-grow-1",children:Object(j.jsx)("a",{href:"/#/courses",children:"< Back to Courses"})})}),Object(j.jsxs)("div",{className:"d-flex border-bottom pb-4 m-2",id:e.id,children:[Object(j.jsxs)("div",{className:"p-2 w-75",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{className:"text-secondary",children:e.description})]}),Object(j.jsxs)("div",{className:"p-2 w-50",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"ID:"})," ",Object(j.jsx)("span",{className:"text-secondary",children:e.id})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Duration:"})," ",Object(j.jsx)("span",{className:"text-secondary",title:e.duration+" minutes",children:d(e.duration)})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Created:"})," ",Object(j.jsx)("span",{className:"text-secondary",children:e.creationDate})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Authors:"})," ",Object(j.jsx)("span",{className:"text-truncate text-secondary",style:t,children:n})]})]})]})]})}(r,l):Object(j.jsx)("h1",{children:"Loading"})})};s(30);var m=function(e){var t=function(e,t){return e.map((function(e){return t.find((function(t){return t.id===e})).name})).join(", ")}(e.course.authors,e.authors);return Object(j.jsxs)("div",{className:"d-flex border-bottom pb-4 m-2",id:e.course.id,children:[Object(j.jsxs)("div",{className:"p-2 w-75",children:[Object(j.jsx)("h2",{children:e.course.title}),Object(j.jsx)("p",{className:"text-secondary",children:e.course.description})]}),Object(j.jsxs)("div",{className:"p-2 w-25",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Authors:"})," ",Object(j.jsx)("span",{className:"d-inline-block text-truncate text-secondary align-bottom",style:{maxWidth:200},title:t,children:t})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Duration:"})," ",Object(j.jsx)("span",{className:"text-secondary",title:e.course.duration+" minutes",children:d(e.course.duration)})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Created:"})," ",Object(j.jsx)("span",{className:"text-secondary",children:e.course.creationDate})]}),Object(j.jsx)("a",{href:"/#/courses/"+e.course.id,className:"btn btn-success","data-course":e.course.id,onClick:e.editCourse,children:"Show course"})]})]})},f=s(7);function x(e){switch(e.type){case"textarea":return Object(j.jsx)("textarea",Object(f.a)({className:"form-control"},e));default:return Object(j.jsx)("input",Object(f.a)({className:"form-control"},e))}}var O=function(e){return Object(j.jsxs)(j.Fragment,{children:[e.label&&"button"!==e.type&&"submit"!==e.type?Object(j.jsx)("label",{className:"form-label",children:e.label}):"",x(e)]})};var v=function(e){var t=e.type;return void 0===t&&(t="button"),Object(j.jsx)(O,Object(f.a)({type:"button",className:e.className?e.className:"btn btn-light",value:e.label},e))};var N=function(e){var t=Object(n.useState)(""),s=Object(u.a)(t,2),c=s[0],r=s[1];return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-6 mr-0 pr-0",children:Object(j.jsx)(O,{type:"search",onChange:function(e){r(e.target.value)}})}),Object(j.jsx)("div",{className:"col-3 ml-0 p-0",children:Object(j.jsx)(v,{label:"Search",className:"btn btn-secondary",onClick:function(){return e.performQuery(c)}})})]})};function g(){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://courses-be.herokuapp.com/courses/all",e.next=3,fetch("https://courses-be.herokuapp.com/courses/all",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.abrupt("return",t.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(l.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://courses-be.herokuapp.com/courses/filter?title="+t,e.next=3,fetch(s,{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://courses-be.herokuapp.com/authors/all",e.next=3,fetch("https://courses-be.herokuapp.com/authors/all",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.abrupt("return",t.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),s=t[0],c=t[1],r=Object(n.useState)({}),a=Object(u.a)(r,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){g().then((function(e){c(e.result)})),function(){return k.apply(this,arguments)}().then((function(e){o(e.result)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"p-2 w-50 flex-grow-1",children:Object(j.jsx)(N,{performQuery:function(e){e?function(e){return w.apply(this,arguments)}(e).then((function(e){c(e.result)})):g().then((function(e){c(e.result)}))}})}),Object(j.jsx)("div",{className:"d-flex align-items-end",children:Object(j.jsx)("div",{className:"p-2",children:Object(j.jsx)("a",{href:"/#/courses/add",className:"btn btn-primary",children:"Add new course"})})})]}),s.length&&i.length?function(e,t){return e.map((function(e){return Object(j.jsx)(m,{course:e,authors:t},e.id)}))}(s,i):Object(j.jsx)("h1",{children:"Loading"})]})},C=s(23),T=s(3),E=function(e){var t=Object(n.useState)(e),s=Object(u.a)(t,2),c=s[0],r=s[1];return{value:c,setValue:r,reset:function(){return r("")},bind:{value:c,onChange:function(e){r(e.target.value)}}}};function F(){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://courses-be.herokuapp.com/authors/all",e.next=3,fetch("https://courses-be.herokuapp.com/authors/all",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.abrupt("return",t.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(l.a)(o.a.mark((function e(t,s){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://courses-be.herokuapp.com/authors/add",e.next=3,fetch("https://courses-be.herokuapp.com/authors/add",{method:"POST",headers:{"Content-Type":"application/json",Authorization:s},body:JSON.stringify(t)});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(l.a)(o.a.mark((function e(t,s){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://courses-be.herokuapp.com/courses/add",e.next=3,fetch("https://courses-be.herokuapp.com/courses/add",{method:"POST",headers:{"Content-Type":"application/json",Authorization:s},body:JSON.stringify(t)});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(){var e=Object(T.f)(),t=Object(n.useState)({}),s=Object(u.a)(t,2),c=s[0],r=s[1],a=E(""),i=a.value,o=a.bind,l=a.reset,h=E(""),b=h.value,p=h.bind,m=E(""),x=m.value,N=m.bind,g=E(""),y=g.value,w=g.bind,k=Object(n.useState)([]),S=Object(u.a)(k,2),I=S[0],L=S[1];Object(n.useEffect)((function(){F().then((function(e){r(e.result)}))}),[]);var A=function(){var e=JSON.parse(localStorage.getItem("session"));e&&void 0!==e.result&&function(e,t){return P.apply(this,arguments)}({name:i},e.result).then((function(e){!0===e.successful&&(l(),F().then((function(e){r(e.result)})))}))},J=function(e){L([e.target.dataset.author].concat(Object(C.a)(I)))},G=function(e){L(I.filter((function(t){return t!==e.target.dataset.author})))},q=function(t){var s=JSON.parse(localStorage.getItem("session"));s&&void 0!==s.result&&function(e,t){return D.apply(this,arguments)}({title:b,description:x,duration:parseInt(y),authors:I},s.result).then((function(t){!0===t.successful&&e.push("/courses")}))},z=function(){e.push("/courses")},B=function(e,t){return t=t||[],e.filter((function(e){return!t.some((function(t){return t===e.id}))})).map((function(e){return Object(j.jsxs)("div",{className:"d-flex w-50 align-items-center",children:[Object(j.jsx)("div",{className:"d-flex p-2 w-75",children:e.name}),Object(j.jsx)("div",{className:"d-flex p-2",children:Object(j.jsx)(v,{label:"Add author",className:"btn btn-success btn-sm m-2","data-author":e.id,onClick:J})})]},e.id)}))},M=function(e,t){return 0===(e=e||[]).length?"Author list is empty":e.map((function(e){var s=t.find((function(t){return t.id===e})).name;return Object(j.jsxs)("div",{className:"d-flex w-50 align-items-center",children:[Object(j.jsx)("div",{className:"p-2 w-75",children:s}),Object(j.jsx)("div",{className:"p-2",children:Object(j.jsx)(v,{label:"Remove author",className:"btn btn-danger btn-sm m-2","data-author":e,onClick:G})})]},e)}))};return Object(j.jsx)(j.Fragment,{children:c.length?function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"p-2 w-50 flex-grow-1",children:Object(j.jsx)(O,Object(f.a)({label:"Title",placeholder:"Enter title..."},p))}),Object(j.jsx)("div",{className:"d-flex align-items-end",children:Object(j.jsxs)("div",{className:"p-2",children:[Object(j.jsx)(v,{label:"Create course",className:"btn btn-primary",onClick:q}),Object(j.jsx)(v,{label:"Cancel",className:"btn btn-link",onClick:z})]})})]}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)("div",{className:"p-2 w-100",children:Object(j.jsx)(O,Object(f.a)({label:"Description",placeholder:"Enter description",type:"textarea"},N))})}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"p-2 w-50 flex-grow-1",children:Object(j.jsxs)("div",{className:"create_course--author",children:[Object(j.jsx)("h3",{className:"text-center",children:"Add Author"}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"w-50 flex-grow-1 pr-2",children:Object(j.jsx)("span",{className:"align-bottom",children:Object(j.jsx)(O,Object(f.a)({label:"Author name",placeholder:"Enter author name..."},o))})}),Object(j.jsx)("div",{className:"d-flex align-items-end",children:Object(j.jsx)("div",{className:"pl-2",children:Object(j.jsx)(v,{label:"Create author",className:"btn btn-secondary",onClick:A})})})]}),Object(j.jsx)("h3",{className:"text-center",children:"Duration"}),Object(j.jsx)(O,Object(f.a)({label:"Duration",className:"form-control mb-5",placeholder:"Enter duration in minutes..."},w)),Object(j.jsxs)("h3",{children:["Duration: ",Object(j.jsx)("strong",{children:d(y)})," hours"]})]})}),Object(j.jsx)("div",{className:"p-2 w-50",children:Object(j.jsxs)("div",{className:"create_course--author_list",children:[Object(j.jsx)("h3",{className:"text-center",children:"Course authors"}),Object(j.jsx)("div",{className:"d-flex flex-column align-items-center",children:B(e,I)}),Object(j.jsx)("h3",{className:"text-center",children:"Course authors"}),Object(j.jsx)("div",{className:"d-flex flex-column align-items-center",children:M(I,e)})]})})]})]})}(c):Object(j.jsx)("h1",{children:"Loading..."})})},A=s.p+"static/media/logo.ea3e7e9a.svg";var J=function(){return Object(j.jsx)("img",{src:A,alt:"Logo",width:"150px"})};var G=function(e){return Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"p-2 flex-grow-1",children:Object(j.jsx)(J,{})}),void 0!==e.user?Object(j.jsxs)("div",{className:"p-2",children:[Object(j.jsx)("span",{className:"align-middle",children:e.user}),Object(j.jsx)(v,{className:"btn btn-link",label:"Logout",onClick:e.logout})]}):""]})};s(36);function q(){return(q=Object(l.a)(o.a.mark((function e(){var t,s,n,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},s="https://courses-be.herokuapp.com/login",e.next=4,fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(e){var t=E(""),s=t.value,c=t.bind,r=E(""),a=r.value,i=r.bind,o=Object(n.useState)(!1),l=Object(u.a)(o,2),d=l[0],h=l[1],b=function(t){t.target.form.checkValidity()?(t.preventDefault(),function(){return q.apply(this,arguments)}({email:s,password:a}).then((function(t){!0===t.successful?e.handleLogin(t):h(!0)}))):t.target.form.classList.add("was-validated")};return Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("div",{className:"w-50",children:Object(j.jsxs)("form",{method:"post",onSubmit:b,children:[Object(j.jsxs)("div",{className:"mb-4",children:[!0===d?Object(j.jsx)("div",{className:"alert alert-danger",children:"Either your address cannot found or you provided an invalid password!"}):"",Object(j.jsx)(O,Object(f.a)({label:"Email",type:"email",placeholder:"Enter email",required:!0,autoFocus:!0},c)),Object(j.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid email address!"})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)(O,Object(f.a)({label:"Password",type:"password",placeholder:"Enter password",required:!0},i)),Object(j.jsx)("div",{className:"invalid-feedback",children:"Please fill password field!"})]}),Object(j.jsx)("div",{className:"mb-4",children:Object(j.jsx)(v,{type:"submit",label:"Login",className:"btn btn-primary",onClick:b})}),Object(j.jsxs)("p",{children:["If you don't have an account, you can ",Object(j.jsx)("a",{href:"/#/registration",children:"register here"}),"."]})]})})})};function B(){return(B=Object(l.a)(o.a.mark((function e(t){var s,n,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(){var e=Object(T.f)(),t=E(""),s=t.value,n=t.bind,c=E(""),r=c.value,a=c.bind,i=E(""),o=i.value,l=i.bind,u=function(t){if(t.target.form.checkValidity()){t.preventDefault();(function(e){return B.apply(this,arguments)})("https://courses-be.herokuapp.com/register",{name:s,email:r,password:o}).then((function(t){!0===t.successful&&e.push("/login")}))}else t.target.form.classList.add("was-validated")};return Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("div",{className:"w-50",children:Object(j.jsxs)("form",{method:"post",onSubmit:u,children:[Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)(O,Object(f.a)({label:"Name",type:"text",placeholder:"Enter name",required:!0,autoFocus:!0},n)),Object(j.jsx)("div",{className:"invalid-feedback",children:"Please fill name field!"})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)(O,Object(f.a)({label:"Email",type:"email",placeholder:"Enter email",required:!0},a)),Object(j.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid email address!"})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)(O,Object(f.a)({label:"Password",type:"password",placeholder:"Enter password",required:!0},l)),Object(j.jsx)("div",{className:"invalid-feedback",children:"Please fill password field!"})]}),Object(j.jsx)("div",{className:"mb-4",children:Object(j.jsx)(v,{label:"Register",className:"btn btn-primary",onClick:u})}),Object(j.jsxs)("p",{children:["If you have an account, you can ",Object(j.jsx)("a",{href:"/#/login",children:"login here"}),"."]})]})})})};var V=function(){var e=Object(T.f)(),t=Object(T.g)(),s=Object(n.useState)(!1),c=Object(u.a)(s,2),r=c[0],a=c[1],i=Object(n.useState)({}),d=Object(u.a)(i,2),h=d[0],b=d[1];function m(){return(m=Object(l.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://courses-be.herokuapp.com/users/me",e.next=3,fetch("https://courses-be.herokuapp.com/users/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:t}});case 3:return s=e.sent,e.abrupt("return",s.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(!1===r){var e=JSON.parse(localStorage.getItem("session"));e&&void 0!==e.result&&function(e){return m.apply(this,arguments)}(e.result).then((function(e){!0===e.successful&&(b({name:e.result.name,email:e.result.email}),a(!0))}))}}),[t,r]),!1===r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(G,{}),"/registration"!==t.pathname?Object(j.jsx)(z,{handleLogin:function(t){localStorage.setItem("session",JSON.stringify(t)),b(t.user),e.push("/courses")}}):Object(j.jsx)(M,{})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(G,{logout:function(){localStorage.removeItem("session"),b({}),a(!1),e.push("/login")},user:h.name||h.email}),Object(j.jsxs)(T.c,{children:[Object(j.jsx)(T.a,{path:"/courses",exact:!0,component:S}),Object(j.jsx)(T.a,{path:"/courses/add",exact:!0,component:L}),Object(j.jsx)(T.a,{path:"/courses/:courseId",component:p}),Object(j.jsx)(T.a,{path:"/login",children:Object(j.jsx)(z,{session:h})})]})]})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))},Q=s(12);s(37);a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Q.a,{children:Object(j.jsx)(V,{})})}),document.getElementById("root")),_()}},[[38,1,2]]]);
//# sourceMappingURL=main.fe645416.chunk.js.map