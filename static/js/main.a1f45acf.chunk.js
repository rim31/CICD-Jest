(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},22:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),l=(a(22),a(1)),i=a.n(l),o=a(4),m=a(3);a(24),a(25);function u(e,t){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.exchangeratesapi.io/latest?base=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.rates[a]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function p(){var e=r.a.useState(0),t=Object(m.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"Counter"),r.a.createElement("button",{id:"increment-btn",style:{border:"1px solid yellow",borderRadius:"8px",padding:"3px 3px"},onClick:function(){return n(a+1)}},"Increment"),r.a.createElement("button",{id:"decrement-btn",style:{border:"1px solid yellow",borderRadius:"8px",padding:"3px 3px"},onClick:function(){return n(a>0?a-1:0)}},"Decrement"),r.a.createElement("div",{id:"counter-value"},a))}var f=a(6),v=a.n(f),h="f33a484cf794d08d0148764789aaba32",E=function(){var e=Object(o.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&exclude=minutely&appid="+h);case 3:if(!(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:return e.abrupt("return","");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.error);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:h}});case 3:if(!(a=e.sent)){e.next=8;break}return e.abrupt("return",a);case 8:return e.abrupt("return","");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.error);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),w=a(5),N=a.n(w);function g(e){var t=e.weatherSevenDays;return r.a.createElement("div",{className:"block"},t.data&&r.a.createElement("p",{className:"title mt-2"},"48h"),r.a.createElement("div",{className:"ml-1 mr-1",style:{display:"flex",flexWrap:"nowrap",overflowX:"auto",boxSizing:"border-box",whiteSpace:"break-spaces",flexDirection:"row"}},t.data&&t.data.hourly.map((function(e,t){return r.a.createElement("div",{key:t,className:"ml-1 mr-1",style:{flex:"0 0 auto",padding:"0px 2px 0px 2px",justifyContent:"center"}},r.a.createElement("div",{style:{backgroundColor:"aquamarine",width:"110px",minHeight:"204px",borderRadius:"8px"}},r.a.createElement("div",{className:"city-temp"},Math.round(e.temp),r.a.createElement("sup",null,"\xb0C")),r.a.createElement("div",{className:"info"},r.a.createElement("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:e.weather[0].description}),r.a.createElement("p",{style:{color:"grey"}},e.weather[0].description)),r.a.createElement("p",{style:{fontSize:"1rem"}},N()().add(t,"hours").format("LT"))))}))),t.data&&r.a.createElement("p",{className:"title mt-2"},"7 days "),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-mobile is-tablet is-half"},t.data&&t.data.daily.map((function(e,t){return r.a.createElement("div",{key:t,className:"d-flex mb-1"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"}),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content has-text-left rows is-full"},r.a.createElement("time",null,r.a.createElement("div",{className:"subtitle row"},N()().add(t,"days").format("dddd"))),r.a.createElement("time",null,r.a.createElement("div",null," ",N()().add(t,"days").format("MMMM Do")))),r.a.createElement("div",{className:"media-content rows has-text-right is-full"},r.a.createElement("div",{className:"subtitle is-6 row"},e.weather[0].description),r.a.createElement("div",{className:"title is-4 row"},Math.round(e.temp.day),r.a.createElement("sup",null,"\xb0C")," ")),r.a.createElement("div",{className:"media-right "},r.a.createElement("figure",{className:"image is-128x128"},r.a.createElement("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:e.weather[0].description})))))))})))))}function y(){var e,t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),d=u[0],p=u[1],f=Object(n.useState)(""),v=Object(m.a)(f,2),h=v[0],w=v[1],y=Object(n.useState)(""),x=Object(m.a)(y,2),k=x[0],C=x[1],S=Object(n.useState)(!1),j=Object(m.a)(S,2),O=j[0],D=j[1],M=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key||!c){e.next=14;break}return D(!0),e.next=4,b(c.toLowerCase());case 4:if(!(a=e.sent)){e.next=11;break}return w(a.data),e.next=9,E(a.data.coord.lat,a.data.coord.lon);case 9:n=e.sent,C(n);case 11:s(""),p(""),D(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=14;break}return D(!0),e.next=4,b(d.toLowerCase());case 4:if(!(a=e.sent)){e.next=13;break}return w(a.data),e.next=9,E(a.data.coord.lat,a.data.coord.lon);case 9:n=e.sent,C(n),s(""),p("");case 13:D(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.useEffect((function(){R(d)}),[d]),r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"icon-container"},h.main?r.a.createElement("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(h.weather[0].icon,"@2x.png"),alt:h.weather[0].description}):r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-home"})))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"general-information"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-home"})),r.a.createElement("div",{id:"titleForecast",className:"location","data-location":!0},"Weather in a city"),r.a.createElement("p",{className:"subtitle"},N()().format("dddd, MMMM Do YYYY"))),r.a.createElement("div",{className:"columns "},r.a.createElement("div",{className:"detail column",style:{backgroundColor:"whitesmoke"}},r.a.createElement("div",{className:"subtitle"},"Now"),r.a.createElement("div",{className:"value","data-wind":!0},h.main&&r.a.createElement("p",{style:{color:"grey"}},h.weather[0].description))),r.a.createElement("div",{className:"detail column"},r.a.createElement("div",{className:"subtitle",style:{whiteSpace:"nowrap"}},"Temperature"),r.a.createElement("div",{className:"value","data-temperature":!0},h.main&&r.a.createElement("p",null,Math.round(h.main.temp),r.a.createElement("sup",null,"\xb0C")))),r.a.createElement("div",{className:"detail column",style:{backgroundColor:"whitesmoke"}},r.a.createElement("div",{className:"subtitle"},"City"),r.a.createElement("div",{className:"value","data-precipitation":!0},h.main&&r.a.createElement("div",null,r.a.createElement("span",{className:"value"},h.name),r.a.createElement("sup",{className:"subtitle"},h.sys.country," ",(e=h.sys.country,"undefined"!==typeof String.fromCodePoint?e.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)})):e)))))),r.a.createElement("label",{className:"text-center subtitle"},"Search a city's weather"),r.a.createElement("div",{className:"city-search-container mt-3"},r.a.createElement("div",{className:"field has-addons has-addons-centered"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{id:"cityInput2",className:"input",type:"text",placeholder:"City...",value:c,style:{border:"1px solid black"},onChange:function(e){s(e.target.value),p(e.target.value)},onKeyPress:M})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{id:"btn-search",className:"button is-info",onClick:function(e){R(d)}},"Search")))),r.a.createElement("br",null),r.a.createElement("div",{className:"columns "},r.a.createElement("div",{className:"detail column",style:{backgroundColor:"whitesmoke"}},r.a.createElement("div",{className:"control"},r.a.createElement("button",{id:"btn-search",className:"button is-secondary",onClick:function(e){p("Turku")}},"Turku"))),r.a.createElement("div",{className:"detail column",style:{backgroundColor:"whitesmoke"}},r.a.createElement("div",{className:"control"},r.a.createElement("button",{id:"btn-search",className:"button is-secondary",onClick:function(e){p("Toulouse")}},"Toulouse"))),r.a.createElement("div",{className:"detail column",style:{backgroundColor:"whitesmoke"}},r.a.createElement("div",{className:"control"},r.a.createElement("button",{id:"btn-search",className:"button is-secondary",onClick:function(e){p("Paris")}},"Paris")))))),O&&r.a.createElement("progress",{className:"progress is-small is-primary",max:"100"},"loading"),r.a.createElement(g,{weatherSevenDays:k}))}var x=function(){var e=r.a.useState(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=r.a.useState(0),s=Object(m.a)(c,2),l=s[0],d=s[1],f=r.a.useState(!1),v=Object(m.a)(f,2),h=v[0],E=v[1];return r.a.useEffect((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("USD","EUR");case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"",style:{background:"linear-gradient(to right, rgb(255, 167, 35), rgb(25, 97, 235))",minHeight:"100vh"}},r.a.createElement(y,null),r.a.createElement("a",{href:"#myCard"},r.a.createElement("button",{id:"conversionHeader",type:"button",className:"collapsible mt-5 has-text-centered",onClick:function(){return E(!h)}},"Open Conversion $/\u20ac debug",r.a.createElement("i",{className:"fa fa-caret-square-o-down"}))),h&&r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card",id:"myCard"},r.a.createElement(p,null),r.a.createElement("h1",{id:"titleConversion"},"conversion rate : $ USD - \u20ac EUR"),r.a.createElement("h3",null,a||""," : rate $ / \u20ac"),r.a.createElement("h2",null,"CI-CD"),r.a.createElement("div",{className:"d-inline-flex p-2"},r.a.createElement("button",{id:"increment-btn",className:"button mr-2",style:{border:"1px solid yellow",borderRadius:"8px",padding:"3px 3px"},onClick:function(){return d(l+1)}},"+ Increment"),r.a.createElement("button",{id:"decrement-btn",className:"button",style:{border:"1px solid yellow",borderRadius:"8px",padding:"3px 3px"},onClick:function(){return d(l>0?l-1:0)}},"- Decrement")),r.a.createElement("p",null,"Conversion ",(l/parseFloat(a)).toFixed(2)," $"),r.a.createElement("div",{className:"d-inline-flex p-2"},r.a.createElement("span",{id:"counter-value"},l),r.a.createElement("span",null," \u20ac"))))))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/CICD-Jest",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/CICD-Jest","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.a1f45acf.chunk.js.map