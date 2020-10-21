(this["webpackJsonpcode-challenge-sw-api"]=this["webpackJsonpcode-challenge-sw-api"]||[]).push([[0],{26:function(e,t,a){},39:function(e,t,a){e.exports=a(79)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(12),i=(a(26),a(11)),s=a.n(i),u=(a(50),function(e){var t=e.children,a=e.className;return r.a.createElement("header",{className:s()("header",a)},t)}),m=(a(51),function(){return r.a.createElement(u,{className:"sw-header layout"}," Star Wars API Test")}),p=a(15),d=(a(52),a(53),function(e){var t=e.className,a=e.items,n=e.label,l=e.onChange,c=void 0===l?function(){}:l,o=e.value;return r.a.createElement("label",{className:s()("selector__label",t)},r.a.createElement("span",{className:"selector__text"},n),r.a.createElement("select",{className:"selector__select",onChange:c,value:o},Object.keys(a).map((function(e){return r.a.createElement("option",{className:"selector__option",key:e,value:e},a[e])}))))}),E=a(13);var v,b=function(e){return e.planets.planets},f=function(e){return e.planets.loading},h=function(e){return e.planets.error},_=function(e){return e.planets.next},N=function(e,t){return e!==e?t:e},O=(a(54),function(e){var t=e.planet,a=e.onClick,n=t.name,l=t.diameter,c=t.population;return r.a.createElement("button",{className:"planet-list-item",onClick:function(e){return a(t)}},r.a.createElement("div",{className:"planet-list-item__user-information"},r.a.createElement("h2",{className:"planet-list-item__paragraph"},"Name: ",n),r.a.createElement("p",{className:"planet-list-item__paragraph"},"Diameter: ",N(l,"unknown")," km"),r.a.createElement("p",{className:"planet-list-item__paragraph"},"Population: ",N(c,"unknown"))))}),y=(a(55),function(){return r.a.createElement("div",{className:"loading-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),j=a(19);a(56);!function(e){e[e.primary=0]="primary",e[e.secondary=1]="secondary"}(v||(v={}));var w,A=function(e){var t=e.buttonType,a=void 0===t?v.primary:t,n=e.className,l=e.children,c=e.onClick,o=void 0===c?function(){}:c;return r.a.createElement("button",{className:s()("button",Object(j.a)({},"button--".concat(v[a]),v[a]),n),onClick:o},l)},S=(a(57),a(58),function(e){var t=e.children,a=e.onCloseModal;return r.a.createElement("div",{className:"simple-modal"},r.a.createElement("section",{className:"simple-modal__main"},t,r.a.createElement("div",{className:"simple-modal__actions"},r.a.createElement(A,{onClick:a},"Close"))))}),T=(a(59),function(e){var t=e.onCloseModal,a=e.planet;return r.a.createElement(S,{onCloseModal:t},r.a.createElement("div",{className:"planet-details-modal"},r.a.createElement("h2",null,"".concat(a.name)),r.a.createElement("p",null,r.a.createElement("b",null,"Diameter:")," ",N(a.diameter,"unknown")," km"),r.a.createElement("p",null,r.a.createElement("b",null,"Rotation Period:")," ",N(a.rotationPeriod,"unknown")," ","hours"),r.a.createElement("p",null,r.a.createElement("b",null,"Orbital Period:")," ",N(a.orbitalPeriod,"unknown")," ","days"),r.a.createElement("p",null,r.a.createElement("b",null,"Gravity:")," ",a.gravity," Gs"),r.a.createElement("p",null,r.a.createElement("b",null,"Population:")," ",N(a.population,"unknown")),r.a.createElement("p",null,r.a.createElement("b",null,"Climate:")," ",a.climate),r.a.createElement("p",null,r.a.createElement("b",null,"Terrain:")," ",a.terrain)))});!function(e){e.noSort="No sort",e.sortByNameAsc="Name (Asc)",e.sortByNameDesc="Name (Desc)",e.sortByPopulationAsc="Population (Asc)",e.sortByPopulationDesc="Population (Desc)"}(w||(w={}));var g=function(e){var t=e.className,a=e.sortBy,l=Object(o.b)(),c=Object(o.c)(b),i=Object(o.c)(f),u=Object(o.c)(h),m=Object(o.c)(_),d=Object(n.useState)([]),v=Object(p.a)(d,2),N=v[0],j=v[1],S=Object(n.useState)(),g=Object(p.a)(S,2),C=g[0],k=g[1];Object(n.useEffect)((function(){l({type:"STAR_WARS_PLANETS_FETCH_REQUESTED"})}),[l]),Object(n.useEffect)((function(){switch(w[a]){case w.sortByNameDesc:j(Object(E.a)(c).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:1})));break;case w.sortByNameAsc:j(Object(E.a)(c).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1})));break;case w.sortByPopulationAsc:j(Object(E.a)(c).sort((function(e,t){return e.population>t.population?-1:1})));break;case w.sortByPopulationDesc:j(Object(E.a)(c).sort((function(e,t){return e.population>t.population?1:-1})));break;default:j(c)}}),[c,a]);var P=function(e){k(e)};return r.a.createElement("div",{className:s()("planet-list",t)},r.a.createElement("div",{className:"planet-list__container"},N.map((function(e){return r.a.createElement(O,{key:"".concat(e.name,"-").concat(e.diameter,"-").concat(e.population),onClick:P,planet:e})}))),i&&r.a.createElement("div",{className:"planet-list__loading-message"},r.a.createElement(y,null),r.a.createElement("span",null,"Fetching Planets")),!i&&u&&r.a.createElement("div",{className:"planet-list__failed-message"},"Planets fetch failed"),!i&&m&&r.a.createElement(A,{className:"planet-list__more-button",onClick:function(){return l({type:"STAR_WARS_PLANETS_FETCH_REQUESTED"})}},"Get more planets"),!i&&!m&&r.a.createElement("div",{className:"planet-list__message"},"End of list"),C&&r.a.createElement(T,{onCloseModal:function(){k(null)},planet:C}))},C=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"planet-list-view"},r.a.createElement("h1",{className:"planet-list-view__main-title"},"Planets API"),r.a.createElement("p",{className:"planet-list-view__paragraph"},"This is an example of a simple API call. The list can be sorted using the selector below. Any list item can be clicked to display a modal with the planet detail.",r.a.createElement("br",null),"At the bottom, there is a button called \u201cGet more planets\u201d to fetch more items. Once there are no more items, the button is not accessible anymore and a message is displayed."),r.a.createElement(d,{className:"planet-list-view__selector",items:w,label:"Sort by",onChange:function(e){l(e.target.value)},value:a}),r.a.createElement(g,{className:"planet-list-view__list",sortBy:a}))},k=(a(60),function(){return r.a.createElement("section",{className:"sw-main-content layout"}," ",r.a.createElement(C,null)," ")}),P=function(e){var t=e.store;return r.a.createElement(o.a,{store:t},r.a.createElement(m,null),r.a.createElement(k,null))},R=a(8),x=a(36),D=a(38),L=a(7),W={loading:!1,error:null,planets:[],count:0,next:null};var F=Object(R.combineReducers)({planets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STAR_WARS_PLANETS_FETCH_REQUESTED":return Object(L.a)(Object(L.a)({},e),{},{loading:!0,error:null});case"STAR_WARS_PLANETS_FETCH_SUCCEEDED":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:null,planets:[].concat(Object(E.a)(e.planets),Object(E.a)(t.payload.results)),next:t.payload.next,count:t.payload.count});case"STAR_WARS_PLANETS_FETCH_FAILED":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:t.payload});case"STAR_WARS_PLANETS_FETCH_CLEAR":return Object(L.a)({},W);default:return e}}}),B=a(6),H=a.n(B),U=a(9),I=a(37),M=a(20),G=a.n(M),Q=G.a.create({baseURL:"https://swapi.dev/api/"}),J=a(21),q=function e(t){var a=t.count,n=t.next,r=t.previous,l=t.results;Object(J.a)(this,e),this.count=void 0,this.next=void 0,this.previous=void 0,this.results=void 0,this.count=a,this.next=n,this.previous=r,this.results=l},z=function e(t){var a=t.name,n=t.rotation_period,r=t.orbital_period,l=t.diameter,c=t.climate,o=t.gravity,i=t.terrain,s=t.surface_water,u=t.population,m=t.url;Object(J.a)(this,e),this.name=void 0,this.rotationPeriod=void 0,this.orbitalPeriod=void 0,this.diameter=void 0,this.climate=void 0,this.gravity=void 0,this.terrain=void 0,this.surfaceWater=void 0,this.population=void 0,this.url=void 0,this.name=a,this.rotationPeriod=+n,this.orbitalPeriod=+r,this.diameter=+l,this.climate=c,this.gravity=o,this.terrain=i,this.surfaceWater=+s,this.population=+u,this.url=m},K=function(){var e=Object(I.a)(H.a.mark((function e(t){var a,n,r,l,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t?G.a.get(t):Q.get("planets"),e.next=4,a;case 4:return n=e.sent,r=n.data,l=n.data.results.map((function(e){return new z(e)})),c=Object(L.a)(Object(L.a)({},r),{},{results:l}),e.abrupt("return",new q(c));case 11:throw e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),V=H.a.mark(Z),X=H.a.mark($),Y=H.a.mark(ee);function Z(e){var t,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U.d)(_);case 3:return t=e.sent,e.next=6,Object(U.b)((function(){return K(t)}));case 6:return a=e.sent,e.next=9,Object(U.c)({type:"STAR_WARS_PLANETS_FETCH_SUCCEEDED",payload:a});case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,Object(U.c)({type:"STAR_WARS_PLANETS_FETCH_FAILED",payload:e.t0});case 15:case"end":return e.stop()}}),V,null,[[0,11]])}function $(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.f)("STAR_WARS_PLANETS_FETCH_REQUESTED",Z);case 2:case"end":return e.stop()}}),X)}function ee(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([$()]);case 2:case"end":return e.stop()}}),Y)}var te=H.a.mark(ae);function ae(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([ee].map(U.e));case 2:case"end":return e.stop()}}),te)}var ne=Object(D.a)();var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(x.composeWithDevTools)({}),a=Object(R.createStore)(F,e,t(Object(R.applyMiddleware)(ne)));return ne.run(ae),a}();c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,{store:re})),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2f12fa15.chunk.js.map