(this["webpackJsonpmy-employee"]=this["webpackJsonpmy-employee"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"JS Dev","location":"Melbourne"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"JS Dev","location":"Sydney"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"React Dev","location":"Adelaide"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Database Dev","location":"Adelaide"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"CSS Dev","location":"Sydney"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Database Dev","location":"Melbourne"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"JS Dev","location":"Adelaide"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"CSS Dev","location":"Adelaide"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"React Dev","location":"Sydney"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Database Dev","location":"Sydney"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"React Dev","location":"Adelaide"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"React Dev","location":"Melbourne"}]')},30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(9),r=a.n(i),c=(a(35),a(20)),l=a(21),s=a(22),m=a(28),u=a(26),g=a(44),d=a(45);a(36);var p=function(e){var t=e.employees;return n.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Profile Pic"),n.a.createElement("th",{onClick:e.handleSortSelect,"data-tag":"Name"},"Name \ud83d\udd00"),n.a.createElement("th",{onClick:e.handleSortSelect,"data-tag":"Role"},"Role \ud83d\udd00"),n.a.createElement("th",{onClick:e.handleSortSelect,"data-tag":"Work Location"},"Work Location \ud83d\udd00"))),n.a.createElement("tbody",null,t.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,n.a.createElement(d.a,{alt:e.name,src:e.image,roundedCircle:!0,fluid:!0})),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.occupation),n.a.createElement("td",null,e.location))}))))},h=a(46);var v=function(e){return n.a.createElement(h.a,{fluid:!0},e.children)},f=a(48),y=a(49),S=a(25),b=a(50);a(39);var k=function(e){return n.a.createElement(f.a,{bg:"light",variant:"light"},n.a.createElement(f.a.Brand,null,"My-Employee"),n.a.createElement(y.a,{inline:!0},n.a.createElement(S.a,{type:"text",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},placeholder:"Name",className:"mr-sm-2",onChange:e.handleInputChange,value:e.value,name:"search"}),n.a.createElement(b.a,{variant:"outline-primary",onClick:e.handleFormSubmit},"Search")))},E=a(11),C=(a(41),a(47)),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={employees:E,search:"",sortName:!0,sortLoc:!0,sortOcc:!0},e.searchName=function(t){var a=e.state.employees;return a=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),console.log(a),""===t?(console.log("No Query"),e.setState({employees:E}),void e.setState({search:""})):a?void e.setState({employees:a}):(e.setState({search:""}),e.setState({employees:E}),console.log(E),console.log("No search"),void alert("No Match"))},e.sort=function(t){var a=e.state.employees;if(console.log("Sorting"),console.log(t),"Work Location"===t){if(a=a.sort((function(e,t){console.log("in sort function-Loc");var a=e.location.toLowerCase(),o=t.location.toLowerCase();return a<o?-1:a>o?1:0})),!0===e.state.sortLoc)return e.setState({sortLoc:!1}),e.setState({employees:a}),void console.log("in true sort LOC");if(!1===e.state.sortLoc)return a=a.reverse(),e.setState({sortLoc:!0}),e.setState({employees:a}),void console.log("in false sort LOC");console.log("in sort query3-LOC"),console.log(a)}if("Role"===t){if(a=a.sort((function(e,t){console.log("in sort function-role");var a=e.occupation.toLowerCase(),o=t.occupation.toLowerCase();return a<o?-1:a>o?1:0})),!0===e.state.sortOcc)return e.setState({sortOcc:!1}),e.setState({employees:a}),void console.log("in true sort OCC");if(!1===e.state.sortOcc)return a=a.reverse(),e.setState({sortOcc:!0}),e.setState({employees:a}),void console.log("in false sort OCC");console.log("in sort query2-OCC"),console.log(a)}if("Name"===t){if(a=a.sort((function(e,t){console.log("in sort function-name");var a=e.name.toLowerCase(),o=t.name.toLowerCase();return a<o?-1:a>o?1:0})),!0===e.state.sortName)return e.setState({sortName:!1}),e.setState({employees:a}),void console.log("in true sort NAME");if(!1===e.state.sortName)return a=a.reverse(),e.setState({sortName:!0}),e.setState({employees:a}),void console.log("in false sort NAME");console.log("in sort query1-NAME"),console.log(a)}},e.handleInputChange=function(t){var a=t.target.value,o=t.target.name;e.setState(Object(c.a)({},o,a))},e.handleSortSelect=function(t){t.preventDefault(),console.log("Clicked");var a=t.target.getAttribute("data-tag");console.log(a),e.sort(a)},e.handleFormSubmit=function(t){t.preventDefault(),e.searchName(e.state.search)},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(v,null,n.a.createElement(C.a,{fluid:!0},n.a.createElement(h.a,null,n.a.createElement("h1",null,"My-Employee"),n.a.createElement("p",null,'Use My-Employee to sort by clicking the heading or search by name in the "Search" bar.'),n.a.createElement("p",null,'NOTES: The search name does "NOT" need to be an exact match to show in the list and the search may return mulitiple answers.  You can also return the full list after a search by having a blank search input and clicking search'),n.a.createElement("p",null,"\ud83d\udd00 indicates ability to sort.  Click the heading to sort and then click a second time to reverse order the sort."))),n.a.createElement(k,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),n.a.createElement(p,{employees:this.state.employees,handleSortSelect:this.handleSortSelect}))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.6f492aa1.chunk.js.map