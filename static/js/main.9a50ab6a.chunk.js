(this.webpackJsonpfront_comision=this.webpackJsonpfront_comision||[]).push([[0],{110:function(e,t,a){"use strict";(function(e){var s=a(10),c=a(69),r=a(4),n=a(1),o=a(26),l=a(6),i=a(0);t.a=function(t){var a=e.config.API_URL,d=Object(n.useState)(),u=Object(r.a)(d,2),b=(u[0],u[1]);Object(n.useEffect)((function(){}),[]);var m=Object(l.e)(),x=Object(o.a)(),j=x.register,p=x.handleSubmit,h=(x.watch,x.errors),f=Object(n.useState)({nombre:"",apellido:"",email:"",password:""}),g=Object(r.a)(f,2),O=g[0],v=g[1],N=function(e){v(Object(c.a)(Object(c.a)({},O),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("h2",{className:" p-6 max-w-sm mx-auto  rounded-xl   ",children:"Login"}),Object(i.jsx)("form",{className:"w-3/6 container mx-auto",action:"",onSubmit:p((function(e){fetch(a+"auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:O.email,password:O.password})}).then((function(e){e.json().then((function(e){e.accessToken&&(localStorage.setItem("user_data",JSON.stringify(e)),localStorage.setItem("token_user",e.accessToken),localStorage.setItem("user",e.email),localStorage.setItem("user_id",e.id),b(e),t.getUser(e.email),m.push("/blog"))}))})).catch((function(e){console.error(e)}))})),children:Object(i.jsxs)("div",{className:"bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col",children:[Object(i.jsxs)("div",{className:"mb-4",children:[Object(i.jsx)("label",{className:"block text-grey-darker text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{ref:j({required:!0}),onChange:N,className:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",id:"email",name:"email",type:"text",placeholder:"Email"}),h.email&&Object(i.jsx)("span",{className:"text-red-600",children:"Este campo es requerido"})]}),Object(i.jsxs)("div",{className:"mb-6",children:[Object(i.jsx)("label",{className:"block text-grey-darker text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{ref:j({required:!0}),onChange:N,className:"shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3",id:"password",name:"password",type:"password",placeholder:"Password"}),h.password&&Object(i.jsx)("span",{className:"text-red-600",children:"Este campo es requerido"})]}),Object(i.jsx)("div",{className:"flex flex-col",children:Object(i.jsx)("button",{className:"bg-blue-400 px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-600 rounded",type:"submit",children:"Login"})})]})})]})}}).call(this,a(19))},112:function(e,t,a){"use strict";(function(e){var s=a(3),c=a.n(s),r=a(5),n=a(4),o=a(1),l=a(113),i=a(114),d=a(116),u=a(0);t.a=function(){var t=e.config.API_URL,a=Object(o.useState)([]),s=Object(n.a)(a,2),b=s[0],m=s[1],x=Object(o.useState)([]),j=Object(n.a)(x,2),p=j[0],h=j[1],f=Object(o.useState)(),g=Object(n.a)(f,2),O=g[0],v=g[1],N=Object(o.useState)("create"),y=Object(n.a)(N,2),w=y[0],k=y[1],S=Object(o.useState)(!1),_=Object(n.a)(S,2),F=(_[0],_[1],function(){var e=Object(r.a)(c.a.mark((function e(){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"recursos",{method:"GET",headers:{"Content-Type":"application/json","x-access-token":localStorage.getItem("token_user")}});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,h(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(),q();case 2:case"end":return e.stop()}}),e)}))),[]);var q=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json");case 2:return t=e.sent,e.t0=m,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(r.a)(c.a.mark((function e(a){var s,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":localStorage.getItem("token_user")},body:JSON.stringify(a)},e.next=3,fetch(t+"recursos",s);case 3:return r=e.sent,e.next=6,r.json();case 6:if(!(n=e.sent).errors){e.next=10;break}return console.log(n.errors),e.abrupt("return",!1);case 10:F();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(c.a.mark((function e(a){var s,r,n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.id,delete a.id,r={method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":localStorage.getItem("token_user")},body:JSON.stringify(a)},e.next=5,fetch(t+"recursos/"+s,r);case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(o=e.sent).errors){e.next=12;break}return console.log(o.error),e.abrupt("return",!1);case 12:k("create"),F();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(r.a)(c.a.mark((function e(a){var s,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":localStorage.getItem("token_user")}},e.next=3,fetch(t+"recursos/"+a,s);case 3:return r=e.sent,e.next=6,r.json();case 6:if(!(n=e.sent).errors){e.next=10;break}return console.log(n.errors),e.abrupt("return",!1);case 10:F();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("div",{className:" col-span-1  mt-10 ml-3",children:"create"==w?Object(u.jsx)(i.a,{createRecurso:C}):Object(u.jsx)(d.a,{departamentos:b,UpdateRecurso:L,recurso:O})}),Object(u.jsxs)("div",{className:"col-span-2 ",children:[p&&Object(u.jsx)(l.a,{departamentos:b,deleteRecurso:D,selectRecurso:function(e){v(e),k("edit")},recursos:p})," "]})]})}}).call(this,a(19))},113:function(e,t,a){"use strict";var s=a(4),c=a(1),r=a(117),n=a(17),o=a.n(n),l=a(0);t.a=function(e){var t=Object(c.useState)(e.recursos),a=Object(s.a)(t,2),n=a[0],i=a[1];Object(c.useEffect)((function(){i(e.recursos)}),[e.recursos]);var d=1,u="",b=n.map((function(t){return u=d%2==0?"bg-gray-100":"",d++,Object(l.jsxs)("tr",{className:"border-b hover:bg-orange-100 "+u,children:[Object(l.jsx)("td",{className:"p-3 px-5",children:t.titulo}),Object(l.jsx)("td",{className:"p-3 px-5",children:JSON.parse(t.claves).map((function(e){return e.text})).join(",")}),Object(l.jsxs)("td",{"data-tip":!0,"data-for":"id"+t.id,className:"p-3 px-5",children:[t.descripcion.substring(0,15)+"...",Object(l.jsx)(r.a,{place:"right",className:"w-8/12",id:"id"+t.id,children:Object(l.jsx)("span",{children:t.descripcion})})]}),Object(l.jsx)("td",{className:"p-3 px-5",children:t.fuente}),Object(l.jsx)("td",{className:"p-3 px-5",children:t.tipo_recurso}),Object(l.jsx)("td",{className:"p-3 px-5",children:o()(t.cobertura.fecha_inicial).format("DD/MM/yyyy")}),Object(l.jsx)("td",{className:"p-3 px-5",children:o()(t.cobertura.fecha_final).format("DD/MM/yyyy")}),Object(l.jsx)("td",{className:"p-3 px-5",children:Object(l.jsxs)("a",{className:"underline text-blue-500",target:"_blank",href:"https://www.google.com/maps/search/maps/@"+t.cobertura.latitud+","+t.cobertura.longitud+",16z",children:[Object(l.jsxs)("span",{children:["Lat:",t.cobertura.latitud]}),Object(l.jsx)("br",{}),Object(l.jsxs)("span",{children:["Long:",t.cobertura.longitud]})]})}),Object(l.jsx)("td",{className:"p-3 px-5",children:e.departamentos[t.cobertura.departamento].departamento}),Object(l.jsx)("td",{className:"p-3 px-5",children:e.departamentos[t.cobertura.departamento].ciudades[t.cobertura.ciudad]}),Object(l.jsxs)("td",{className:"p-3 px-5 flex justify-end",children:[Object(l.jsx)("button",{onClick:function(){return e.selectRecurso(t)},type:"button",className:"mr-3 text-sm bg-yellow-400 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline",children:"Editar"}),Object(l.jsx)("button",{onClick:function(){window.confirm("Seguro desea eliminar este registro?")&&e.deleteRecurso(t.id)},type:"button",className:"text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline",children:"Eliminar"})]})]},t.id)}));return Object(l.jsx)("div",{className:"w-11/12 mx-auto",children:Object(l.jsxs)("div",{className:"bg-gray-200 shadow-md rounded my-6",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{className:"block text-gray-700 font-bold mb-2 text-xl text-center",children:"Listado Recursos"}),Object(l.jsx)("br",{}),Object(l.jsx)("table",{className:"table-auto overflow-auto md:overflow-scroll text-md bg-white shadow-md rounded mb-4",children:Object(l.jsxs)("tbody",{className:"",children:[Object(l.jsxs)("tr",{className:"border-b",children:[Object(l.jsx)("th",{className:"text-left p-3 px-5 ",children:"T\xedtulo"}),Object(l.jsx)("th",{className:" text-left p-3 px-5",children:"Claves"}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Descripci\xf3n"}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Fuente"}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Tipo Recurso"}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Fecha Inicial"}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Fecha Final"}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Geolocalizaci\xf3n "}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Departamento"}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Ciudad"}),Object(l.jsx)("th",{className:"text-left p-3 px-5",children:"Acciones"})]}),b&&b]})})]})})}},114:function(e,t,a){"use strict";var s=a(7),c=a(3),r=a.n(c),n=a(5),o=a(4),l=a(1),i=a(26),d=a(17),u=a.n(d),b=a(45),m=a(0);t.a=function(e){var t=Object(i.a)(),a=t.register,c=t.errors,d=t.handleSubmit,x=t.setValue,j=Object(l.useState)(),p=Object(o.a)(j,2),h=(p[0],p[1]),f=Object(l.useState)(),g=Object(o.a)(f,2),O=(g[0],g[1]),v=Object(l.useState)([]),N=Object(o.a)(v,2),y=N[0],w=N[1],k=Object(l.useState)([]),S=Object(o.a)(k,2),_=S[0],F=S[1],q=Object(l.useState)([]),C=Object(o.a)(q,2),L=C[0],D=C[1];Object(l.useEffect)(Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(),T();case 2:case"end":return e.stop()}}),e)}))),[]);var I=[188,13],T=function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json");case 2:return t=e.sent,e.t0=F,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.filter((function(e){return e.id==t}));case 2:return a=e.sent,D(a[0].ciudades),e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){h(e.coords.longitude),O(e.coords.latitude),x("longitud",e.coords.longitude,{shouldValidate:!1}),x("latitud",e.coords.latitude,{shouldValidate:!1}),x("fecha_inicial",u()().format("YYYY-MM-DD")),x("fecha_final",u()().format("YYYY-MM-DD"))}))};return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:" flex items-center justify-center",children:Object(m.jsxs)("form",{onSubmit:d((function(t,a){t.claves=JSON.stringify(y),a.preventDefault(),e.createRecurso(t),a.target.reset()})),id:"form",className:" w-11/12 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(m.jsx)("br",{}),Object(m.jsx)("h1",{className:"block text-gray-700 font-bold mb-2 text-xl text-center",children:"Crear recurso"}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{className:"block text-gray-700 font-bold mb-2 text-md text-left",children:"Informaci\xf3n Inicial"}),Object(m.jsx)("hr",{className:""}),Object(m.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[Object(m.jsxs)("div",{className:" mb-4 mt-6 col-span-1 ",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"titulo",children:"T\xedtulo"}),Object(m.jsx)("input",{ref:a({required:{value:!0,message:"Titulo es requerido"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"titulo",id:"titulo",type:"text",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:c.titulo&&c.titulo.message})]}),Object(m.jsxs)("div",{className:" mb-4 mt-6 ",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"claves",children:"Claves"}),Object(m.jsx)("div",{children:Object(m.jsx)(b.WithContext,{tags:y,handleDelete:function(e){w(y.filter((function(t,a){return a!==e})))},handleAddition:function(e){return t=e,console.log(t),void w([].concat(Object(s.a)(y),[t]));var t},handleDrag:function(e,t,a){var s=y.slice();s.splice(t,1),s.splice(a,0,e),w(s)},delimiters:I,placeholder:"Ingrese sus claves (presione enter para agregar cada una)",name:"claves",inputFieldPosition:"top",classNames:{tags:"tagsClass",tagInput:"",tagInputField:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",selected:"selectedClass",tag:"mt-2 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1",remove:"pl-2 font-bold",suggestions:"suggestionsClass",activeSuggestion:"activeSuggestionClass"}})}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:c.claves&&c.claves.message})]}),Object(m.jsxs)("div",{className:"mb-4 col-span-2",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"descripcion",children:"Descripci\xf3n"}),Object(m.jsx)("textarea",{ref:a({required:{value:!0,message:"La Descripci\xf3n es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"descripcion",id:"",cols:"30",rows:"10"}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:c.descripcion&&c.descripcion.message})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"fuente",children:"Fuente"}),Object(m.jsx)("input",{ref:a({required:{value:!0,message:"La Fuente es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"fuente",id:"fuente",type:"text",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:c.fuente&&c.fuente.message})]}),Object(m.jsxs)("div",{className:"mb-8",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"tipo_recurso",children:"Tipo de recurso"}),Object(m.jsxs)("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",ref:a({required:{value:!0,message:"tipo de recurso es requerido"}}),name:"tipo_recurso",children:[Object(m.jsx)("option",{value:"Testimonio",children:"Testimonio"}),Object(m.jsx)("option",{value:"Informe",children:"Informe"}),Object(m.jsx)("option",{value:"Caso",children:"Caso"})]})]}),Object(m.jsx)("h3",{className:"col-span-2  block text-gray-700 font-bold mb-2 text-md text-left",children:"Cobertura"}),Object(m.jsx)("hr",{className:"col-span-2 "}),Object(m.jsxs)("div",{className:"mb-4 mt-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"fecha_inicial",children:"Fecha inicial"}),Object(m.jsx)("input",{ref:a({required:{value:!0,message:"La fecha inicial es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"fecha_inicial",id:"fecha_inicial",type:"date",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:c.fecha_inicial&&c.fecha_inicial.message})]}),Object(m.jsxs)("div",{className:"mb-4 mt-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"fecha_final",children:"Fecha final"}),Object(m.jsx)("input",{ref:a({required:{value:!0,message:"La fecha final es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"fecha_final",id:"fecha_final",type:"date",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:c.fecha_final&&c.fecha_final.message})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"latitud",children:"Latitud"}),Object(m.jsx)("input",{ref:a({required:{value:!0,message:"Latitud es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"latitud",id:"latitud",type:"text",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:c.latitud&&c.latitud.message})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"longitud",children:"Longitud"}),Object(m.jsx)("input",{ref:a({required:{value:!0,message:"longitud es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"longitud",id:"longitud",type:"text",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:c.longitud&&c.longitud.message})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"departamento",children:"Departamento"}),Object(m.jsxs)("select",{onChange:function(e){return M(e.target.value)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",ref:a({required:{value:!0,message:"Departamento es requerido"}}),name:"departamento",children:[Object(m.jsx)("option",{value:"",children:"Seleccione..."}),_.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.departamento},e.id)}))]})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"municipio",children:"Municipio"}),Object(m.jsx)("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",ref:a({required:{value:!0,message:"Municipio es requerido"}}),name:"ciudad",children:L&&L.map((function(e,t){return Object(m.jsx)("option",{value:t,children:e},t)}))})]})]}),Object(m.jsx)("div",{className:"flex items-center justify-between",children:Object(m.jsxs)("button",{id:"submit",className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:[Object(m.jsx)("i",{className:"fab fa-whatsapp"})," Crear"]})})]})})})}},116:function(e,t,a){"use strict";var s=a(7),c=a(3),r=a.n(c),n=a(5),o=a(4),l=a(1),i=a(26),d=a(45),u=a(17),b=a.n(u),m=a(0);t.a=function(e){var t=Object(l.useState)(e.recurso),a=Object(o.a)(t,2),c=a[0],u=a[1],x=Object(l.useState)(),j=Object(o.a)(x,2),p=j[0],h=j[1],f=Object(l.useState)(e.departamentos),g=Object(o.a)(f,2),O=g[0],v=(g[1],Object(l.useState)([])),N=Object(o.a)(v,2),y=N[0],w=N[1];Object(l.useEffect)(Object(n.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(JSON.parse(e.recurso.claves)),C("titulo",e.recurso.titulo,{shouldValidate:!0}),C("claves",e.recurso.claves,{shouldValidate:!0}),C("tipo_recurso",e.recurso.tipo_recurso,{shouldValidate:!0}),C("descripcion",e.recurso.descripcion,{shouldValidate:!0}),C("fuente",e.recurso.fuente,{shouldValidate:!0}),C("fecha_inicial",b()(e.recurso.cobertura.fecha_inicial).format("YYYY-MM-DD"),{shouldValidate:!0}),C("fecha_final",b()(e.recurso.cobertura.fecha_final).format("YYYY-MM-DD"),{shouldValidate:!0}),C("latitud",e.recurso.cobertura.latitud,{shouldValidate:!0}),C("longitud",e.recurso.cobertura.longitud,{shouldValidate:!0}),C("departamento",e.recurso.cobertura.departamento,{shouldValidate:!0}),L(e.recurso.cobertura.departamento),u(e.recurso);case 13:case"end":return t.stop()}}),t)}))),[e.recurso]);var k=[188,13],S=Object(i.a)(),_=S.register,F=S.errors,q=S.handleSubmit,C=S.setValue,L=function(){var t=Object(n.a)(r.a.mark((function t(a){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.filter((function(e){return e.id==a}));case 2:s=t.sent,console.log(s),w(s[0].ciudades),C("ciudad",e.recurso.cobertura.ciudad,{shouldValidate:!0});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:" flex items-center justify-center",children:Object(m.jsxs)("form",{onSubmit:q((function(t,a){t.claves=JSON.stringify(p),a.preventDefault(),e.UpdateRecurso(t),a.target.reset()})),id:"form",className:" w-11/12 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(m.jsx)("br",{}),Object(m.jsx)("h1",{className:"block text-gray-700 font-bold mb-2 text-xl text-center",children:"Crear recurso"}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{className:"block text-gray-700 font-bold mb-2 text-md text-left",children:"Informaci\xf3n Inicial"}),Object(m.jsx)("input",{type:"hidden",ref:_(),value:c.id,name:"id"}),Object(m.jsx)("hr",{className:""}),Object(m.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[Object(m.jsxs)("div",{className:" mb-4 mt-6 col-span-1 ",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"titulo",children:"T\xedtulo"}),Object(m.jsx)("input",{ref:_({required:{value:!0,message:"Titulo es requerido"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"titulo",id:"titulo",type:"text",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:F.titulo&&F.titulo.message})]}),Object(m.jsxs)("div",{className:" mb-4 mt-6 ",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"claves",children:"Claves"}),Object(m.jsx)("div",{children:Object(m.jsx)(d.WithContext,{tags:p,handleDelete:function(e){h(p.filter((function(t,a){return a!==e})))},handleAddition:function(e){return t=e,console.log(t),void h([].concat(Object(s.a)(p),[t]));var t},handleDrag:function(e,t,a){var s=p.slice();s.splice(t,1),s.splice(a,0,e),h(s)},delimiters:k,placeholder:"Ingrese sus claves (presione enter para agregar cada una)",name:"claves",inputFieldPosition:"top",classNames:{tags:"tagsClass",tagInput:"",tagInputField:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",selected:"selectedClass",tag:"mt-2 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1",remove:"pl-2 font-bold",suggestions:"suggestionsClass",activeSuggestion:"activeSuggestionClass"}})}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:F.claves&&F.claves.message})]}),Object(m.jsxs)("div",{className:"mb-4 col-span-2 ",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"descripcion",children:"Descripci\xf3n"}),Object(m.jsx)("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",ref:_({required:{value:!0,message:"La descripci\xf3n es requerida"}}),name:"descripcion",id:"",cols:"30",rows:"10"}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2 ",children:F.descripcion&&F.descripcion.message})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"fuente",children:"Fuente"}),Object(m.jsx)("input",{ref:_({required:{value:!0,message:"La Fuente es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"fuente",id:"fuente",type:"text",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:F.fuente&&F.fuente.message})]}),Object(m.jsxs)("div",{className:"mb-8",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"tipo_recurso",children:"Tipo de recurso"}),Object(m.jsxs)("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",ref:_({required:{value:!0,message:"tipo de recurso es requerido"}}),name:"tipo_recurso",children:[Object(m.jsx)("option",{value:"Testimonio",children:"Testimonio"}),Object(m.jsx)("option",{value:"Informe",children:"Informe"}),Object(m.jsx)("option",{value:"Caso",children:"Caso"})]})]}),Object(m.jsx)("h3",{className:"col-span-2  block text-gray-700 font-bold mb-2 text-md text-left",children:"Cobertura"}),Object(m.jsx)("hr",{className:"col-span-2 "}),Object(m.jsxs)("div",{className:"mb-4 mt-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"fecha_inicial",children:"Fecha inicial"}),Object(m.jsx)("input",{ref:_({required:{value:!0,message:"La fecha inicial es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"fecha_inicial",id:"fecha_inicial",type:"date",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:F.fecha_inicial&&F.fecha_inicial.message})]}),Object(m.jsxs)("div",{className:"mb-4 mt-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"fecha_final",children:"Fecha final"}),Object(m.jsx)("input",{ref:_({required:{value:!0,message:"La fecha final es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"fecha_final",id:"fecha_final",type:"date",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:F.fecha_final&&F.fecha_final.message})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"latitud",children:"Latitud"}),Object(m.jsx)("input",{ref:_({required:{value:!0,message:"Latitud es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"latitud",id:"latitud",type:"text",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:F.latitud&&F.latitud.message})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"longitud",children:"Longitud"}),Object(m.jsx)("input",{ref:_({required:{value:!0,message:"longitud es requerida"}}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"longitud",id:"longitud",type:"text",placeholder:""}),Object(m.jsx)("span",{className:"text-red-500 text-small d-block mb-2",children:F.longitud&&F.longitud.message})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"departamento",children:"Departamento"}),Object(m.jsx)("select",{onChange:function(e){return L(e.target.value)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",ref:_({required:{value:!0,message:"Departamento es requerido"}}),name:"departamento",children:O.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.departamento},e.id)}))})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("label",{className:"text-left block text-gray-700 text-sm font-bold mb-2",htmlFor:"municipio",children:"Municipio"}),Object(m.jsx)("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",ref:_({required:{value:!0,message:"Municipio es requerido"}}),name:"ciudad",children:y&&y.map((function(e,t){return Object(m.jsx)("option",{value:t,children:e},t)}))})]})]}),Object(m.jsx)("div",{className:"flex items-center justify-between",children:Object(m.jsxs)("button",{id:"submit",className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:[Object(m.jsx)("i",{className:"fab fa-whatsapp"})," Modificar"]})})]})})})}},122:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){(function(t){e.exports=t.config={API_URL:" https://pruebacomisionback.herokuapp.com/api/"}}).call(this,a(19))},276:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(68),n=a.n(r),o=(a(122),a(4)),l=a(110),i=a(3),d=a.n(i),u=a(5),b=a(6),m=a(16),x=a(0),j=function(e){Object(b.e)();var t=Object(s.useState)(e.user),a=Object(o.a)(t,2),c=a[0],r=a[1];Object(s.useEffect)(Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(e.user);case 1:case"end":return t.stop()}}),t)}))),[e.user]);return Object(x.jsx)(s.Fragment,{children:Object(x.jsx)("nav",{className:"bg-gray-800",children:Object(x.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(x.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(x.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(x.jsxs)("button",{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-expanded":"false",children:[Object(x.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(x.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),Object(x.jsx)("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),Object(x.jsx)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:Object(x.jsx)("div",{className:" text-white flex-shrink-0 flex items-center",children:c&&Object(x.jsx)(m.b,{to:"/recursos",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Recursos"})})}),Object(x.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[Object(x.jsx)("a",{className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:c&&c}),!c&&Object(x.jsx)(m.b,{to:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Login"}),c&&Object(x.jsx)(m.b,{onClick:function(){return localStorage.clear(),e.getUser(null),void r(null)},to:"/blogs",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Logout"})]})]})})})})},p=a(112);a(274);var h=function(){var e=Object(s.useState)(localStorage.getItem("user")),t=Object(o.a)(e,2),a=t[0],c=t[1],r=function(e){c(e)};return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(m.a,{children:[Object(x.jsx)(j,{getUser:r,user:a}),Object(x.jsx)(b.a,{path:"/login",children:Object(x.jsx)(l.a,{getUser:r})}),Object(x.jsx)(b.a,{exact:!0,path:"/recursos",children:Object(x.jsx)(p.a,{})})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,278)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),r(e),n(e)}))};a(275);n.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(h,{})}),document.getElementById("root")),f()}},[[276,1,2]]]);
//# sourceMappingURL=main.9a50ab6a.chunk.js.map