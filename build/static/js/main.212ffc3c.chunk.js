(this.webpackJsonpconnectnow=this.webpackJsonpconnectnow||[]).push([[0],{136:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(17),n=c.n(a),r=c(20),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,142)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},l=c(44),o=c(15),j=c(58),d=c(59),m=c(14),b="FETCH_VIDEO_GAMES",u={feed:{}};var h=Object(o.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(m.a)(Object(m.a)({},e),{},{feed:t.payload});default:return e}}}),O=Object(d.createLogger)(),x=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),p=Object(o.d)(h,x,Object(o.a)(O,j.a)),f=c(4),v=(c(80),c(27)),N=c(28),g=c(36),y=c(35),w=c(1),C=function(e){Object(g.a)(c,e);var t=Object(y.a)(c);function c(){return Object(v.a)(this,c),t.apply(this,arguments)}return Object(N.a)(c,[{key:"render",value:function(){var e=this;return Object(w.jsx)("section",{className:"row mt-5 justify-content-center align-items-center",children:Object(w.jsxs)("div",{className:"col-md-7",children:[Object(w.jsx)("h1",{children:"GET IN TOUCH"}),Object(w.jsx)("p",{className:"mb-5",children:"Trysail transom furl Sea Legs Scallywag jack Ketch Chandler mizzenmost reef sail skysail. Trysail transom furl Sea Legs Scallywag jack Ketch Chandler mizzenmost reef sail skysail."}),Object(w.jsx)("div",{className:"card p-3",children:Object(w.jsx)("form",{children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-md-12",children:Object(w.jsx)("h5",{className:"mb-4",children:"Contact Form"})}),Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsxs)("label",{children:["Name ",Object(w.jsx)("i",{className:"asterik",children:"*"})," "]}),Object(w.jsx)("input",{ref:function(t){return e.name=t},type:"text",name:"name",className:"pl-2 pr-2 w-100 form-control mt-1"})]}),Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsxs)("label",{children:["Email Address ",Object(w.jsx)("i",{className:"asterik",children:"*"})," "]}),Object(w.jsx)("input",{ref:function(t){return e.email=t},type:"text",name:"email",className:"pl-2 pr-2 w-100 form-control mt-1"})]}),Object(w.jsxs)("div",{className:"col-md-12",children:[Object(w.jsxs)("label",{children:["Message ",Object(w.jsx)("i",{className:"asterik",children:"*"})," "]}),Object(w.jsx)("textarea",{ref:function(t){return e.message=t},rows:"4",name:"message",className:"pl-2 pr-2 w-100 form-control mt-1"})]}),Object(w.jsx)("div",{className:"col-md-12",children:Object(w.jsx)("button",{className:"button",children:"Send"})})]})})})]})})}}]),c}(s.Component),S=c(70),k=c(46),F=c.n(k),T=c(60),D=c(61),I=c.n(D),E=c(141),L=c(68),M=c(62),_=c.n(M),A=function(e){var t=e.info,c=e.index;return Object(w.jsxs)("div",{className:"video-item w-100",children:[Object(w.jsx)("div",{className:"thumbnail"}),Object(w.jsxs)("div",{className:"info pt-2 pb-2",children:[Object(w.jsx)("div",{className:"row video-title",children:t.name}),Object(w.jsxs)("div",{className:"row date",children:[Object(w.jsx)("span",{children:"Release Date: "}),Object(w.jsx)(_.a,{unix:!0,format:"DD/MM/YYYY",children:t.first_release_date})]}),Object(w.jsxs)("div",{className:"row summary line-clamp",children:["[Summary] ",t.summary]})]}),Object(w.jsx)("div",{className:"number center",children:Object(w.jsx)("span",{className:"center",children:c+1})})]})},B=c(63),K=c.n(B),R={title:"Choose an option",name:"",score:"",sort:"",icon:"bi bi-arrow-up"},V=function(e){Object(g.a)(c,e);var t=Object(y.a)(c);function c(e){var s;return Object(v.a)(this,c),(s=t.call(this,e)).searchField=function(e,t,c){return function(e,t,c){return e.filter((function(e){return e[t].toLowerCase().indexOf(c.toLowerCase())>=0}))}(e,t,c)},s.searchRange=function(e,t,c){return function(e,t,c){var s=[];return c.indexOf("-")>-1?(s=c.split("-"),e.slice(s[0]-1,s[1])):e.slice(0,c)}(e,0,c)},s.sortByField=function(e,t){return function(e,t){return e.sort((function(e,c){return e[t]>c[t]?0:e[t]<c[t]?-1:1}))}(e,t)},s.clear=function(){s.setState(Object(m.a)(Object(m.a)({},R),{},{filteredData:Object(S.a)(s.props.feed)}))},s.state=Object(m.a)(Object(m.a)({},R),{},{filteredData:s.props.feed,loading:!0}),s}return Object(N.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.feeds(),setTimeout((function(){e.setState({loading:!1})}),2e3)}},{key:"render",value:function(){var e=this,t=this.state,c=t.name,s=t.loading,a=t.score,n=t.sort,r=t.icon,i=this.state.filteredData;return c&&(i=this.searchField(i,"name",c)),a&&(i=this.searchRange(i,"score",a)),n&&(i=this.sortByField(i,n)),Object(w.jsxs)("section",{className:"row",children:[Object(w.jsx)("section",{className:"col-12 col-lg-3 p-3 search-panel",children:Object(w.jsxs)("div",{className:"panel",children:[Object(w.jsx)("div",{className:"item pt-3 panel-header",children:"Filter Results"}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("span",{children:"Name (contains)"}),Object(w.jsx)("div",{className:"search-field",children:Object(w.jsx)("input",{type:"text",name:"name",value:this.state.name,className:"pl-2 pr-2 w-100 search mt-1",onChange:function(t){return e.setState({name:t.target.value})}})})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("span",{children:"Minimum Score"}),Object(w.jsx)("div",{className:"search-field",children:Object(w.jsx)("input",{type:"text",name:"rating",className:"pl-2 pr-2 w-100 search mt-1",value:this.state.score,onChange:function(t){return e.setState({score:t.target.value})}})})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("span",{children:"Order By"}),Object(w.jsxs)("div",{className:"order-by mt-1",children:[Object(w.jsx)("div",{className:"sort-direction",children:Object(w.jsx)("i",{className:"".concat(r)})}),Object(w.jsxs)(E.a,{id:"dropdown-basic-button",className:"w-100 d-block",title:this.state.title,onSelect:function(t){return e.setState({sort:t,title:(c=t,c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "))});var c},onToggle:function(t){return t?e.setState({icon:"bi bi-arrow-down"}):e.setState({icon:"bi bi-arrow-up"})},children:[Object(w.jsx)(L.a.Item,{eventKey:"first_release_date",children:"First Release Date"}),Object(w.jsx)(L.a.Item,{eventKey:"rating",children:"Score"}),Object(w.jsx)(L.a.Item,{eventKey:"name",children:"Name"})]})]})]}),Object(w.jsx)("div",{className:"item clear",children:Object(w.jsx)("button",{type:"reset",className:"button center",onClick:function(){return e.clear()},children:"Clear"})})]})}),Object(w.jsx)("section",{className:"col-12 col-lg-9 p-3 videos",children:Object(w.jsx)("div",{className:"content",children:s?Object(w.jsx)(K.a,{className:"center",type:"ThreeDots",color:"#00BFFF",height:100,width:100}):i?i.map((function(e,t){return Object(w.jsx)(A,{info:e,index:t},t)})):null})})]})}}]),c}(s.Component),z=Object(r.b)((function(e){return{feed:e.data.feed}}),(function(e){return{feeds:function(){return e(function(){var e=Object(T.a)(F.a.mark((function e(t){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat("https://public.connectnow.org.uk/applicant-test/"));case 2:c=e.sent,t({type:b,payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(V),J=c(69),Y=c(67),G=function(e){Object(Y.a)(e);var t=Object(s.useState)(0),c=Object(J.a)(t,2),a=c[0],n=c[1],r=Object(f.f)(),i=function(e){var t="tabVideo"===e.target.id?0:1;n(t);var c=0===t?"/home":"/contact";r.push(c)};return Object(w.jsx)("div",{className:"row header mb-5",children:Object(w.jsx)("div",{className:"col-12 d-flex",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"menu col",children:[Object(w.jsx)("span",{className:"background ".concat(0===a?"visible":"invisible"),children:"VIDEO"}),Object(w.jsx)("span",{id:"tabVideo",onClick:i,className:"menu-item",children:"VIDEO GAMES"})]}),Object(w.jsxs)("div",{className:"menu col",children:[Object(w.jsx)("span",{className:"background ".concat(1===a?"visible":"invisible"),children:"CONTACT"}),Object(w.jsx)("span",{id:"tabContact",onClick:i,className:"menu-item",children:"CONTACT"})]})]})})})};function H(){return Object(w.jsx)("section",{className:"main",children:Object(w.jsxs)("section",{className:"page container",children:[Object(w.jsx)(G,{}),Object(w.jsxs)(f.c,{children:[Object(w.jsx)(f.a,{exact:!0,path:"/",component:z}),Object(w.jsx)(f.a,{path:"/contact",component:C}),Object(w.jsx)(f.a,{path:"/home",component:z})]})]})})}p.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(c){}}(p.getState())})),n.a.render(Object(w.jsx)(r.a,{store:p,children:Object(w.jsx)(l.a,{children:Object(w.jsx)(H,{})})}),document.getElementById("root")),i()},80:function(e,t,c){}},[[136,1,2]]]);
//# sourceMappingURL=main.212ffc3c.chunk.js.map