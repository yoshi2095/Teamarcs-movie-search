(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{19:function(e,t,a){},28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(25),c=a.n(o),r=(a(33),a(6)),s=a(7),l=a(9),u=a(8),m=a(12),d=a(1),v=(a(19),a(27)),h=a(11),f=a(15),p=(a(34),a(17));a(35);var b=function(e){var t=e.handleHomeClick,a=e.handleShowFavourites;return Object(p.a)(e,["handleHomeClick","handleShowFavourites"]),i.a.createElement("div",{className:"header"},i.a.createElement("div",{onClick:function(){t()},style:{cursor:"pointer"}},"Home"),i.a.createElement("div",{onClick:function(){a()},style:{cursor:"pointer"}},"Favourites"))},E=(a(36),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClickOutside=function(e){n.menuRef&&n.menuRef.current&&!n.menuRef.current.contains(e.target)&&n.setState({showMenu:!1})},n.state={items:[{type:"All",id:1,value:"",selected:!0},{type:"Movies",id:2,value:"movie",selected:!1},{type:"Series",id:3,value:"series",selected:!1},{type:"Episodes",id:4,value:"episode",selected:!1}],searchTerm:"Lord",showMenu:!1},n.menuRef=i.a.createRef(),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.showMenu,o=this.props,c=o.handleSearch,r=o.searchTerm,s=o.setSelectedType,l=o.handleSearchClick;return i.a.createElement("div",{className:"search-container"},i.a.createElement("div",{className:"search-input-container"},i.a.createElement("input",{type:"text",value:r,className:"search-input",onChange:c}),i.a.createElement("div",{className:"search-dropdown",onClick:function(){e.setState((function(e){return{showMenu:!e.showMenu}}))}},"dropdown"),n?i.a.createElement("div",{className:"search-dropdown-menu",ref:this.menuRef},a.map((function(t){return i.a.createElement("div",{className:"search-dropdown-item",key:t.id,onClick:function(a){var n=Object(h.a)(e.state.items);n.forEach((function(e){return e.selected=!1}));var i=n.find((function(e){return t.id===e.id}));i.selected=!i.selected,s(t),e.setState({showMenu:!1,items:n})},style:t.selected?{background:"#009ae0",color:"white"}:{}},t.type)}))):null),i.a.createElement("div",{className:"search-button",onClick:function(){l()}},"Search"))}}]),a}(i.a.Component));a(37);var g=Object(d.f)((function(e){var t=e.handleFavourite,a=e.Year,n=e.Title,o=e.Poster,c=e.favourite,r=e.imdbID,s=e.showFavourites,l=Object(p.a)(e,["handleFavourite","Year","Title","Poster","favourite","imdbID","showFavourites"]);return i.a.createElement("div",{className:"movie-card-container",onClick:function(){l.history.push("/movie/".concat(r))}},i.a.createElement("div",{className:"movie-card"},i.a.createElement("div",{className:"movie-card-img"},i.a.createElement("img",{className:"card-img",src:"N/A"===o?"https://www.moooicarpets.com/wp-content/ewww/lazy/placeholder-300x450.png":o})),i.a.createElement("div",{className:"movie-card-title"},n),i.a.createElement("div",{className:"movie-card-date"},i.a.createElement("div",null,a),s?null:i.a.createElement("div",{style:c?{cursor:"pointer",color:"red"}:{cursor:"pointer",color:"blue"},onClick:function(e){e.stopPropagation(),t()}},c?"Unfavourite":"favourite"))))})),w=(a(43),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.loading,n=e.toggleFavourite,o=e.showFavourites;return i.a.createElement("div",{className:a||!a&&!t.length?"movies-list-container":"movies-list-container-grid"},a?i.a.createElement("div",{className:"movies-list-loading"},"Loading....."):t.length?t.map((function(e){return i.a.createElement(g,Object.assign({handleFavourite:function(){n(e)}},e,{showFavourites:o,key:e.imdbId}))})):i.a.createElement("div",{className:"movies-list-loading"},"No movies found"))}}]),a}(i.a.Component)),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleSearch=function(e){n.setState({searchTerm:e.target.value})},n.handleShowFavourites=function(){var e=Object(h.a)(n.state.movies).filter((function(e){return!0===e.favourite}));n.setState({showFavourites:!0,favourites:e})},n.state={movies:[],searchTerm:"Lord",selectedType:{type:"All",id:1,value:"",loading:!1,favourites:[],showFavourites:!1}},n.fetchMovies=n.fetchMovies.bind(Object(f.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=this,t=this.state,a=t.searchTerm,n=t.selectedType;console.log("apicall selectedType:",n),this.setState({loading:!0}),fetch("https://www.omdbapi.com/?s=".concat(a,"&type=").concat(n.value,"&apikey=1b9a1a44&plot=full")).then((function(e){return e.json()})).then((function(t){var a=Object(h.a)(t.Search);(a.forEach((function(e){e.favourite=!1})),"favourites"in localStorage)&&JSON.parse(localStorage.getItem("favourites")).forEach((function(e){a.forEach((function(t){t.imdbID===e.imdbID&&(t.favourite=e.favourite)}))}));e.setState({movies:a,loading:!1})})).catch((function(t){console.log("err:",t),e.setState({loading:!1})}))}},{key:"setSelectedType",value:function(e){this.setState((function(t){return{selectedType:Object(v.a)({},e)}}))}},{key:"handleSearchClick",value:function(){var e=this;this.setState({movies:[]},(function(){e.fetchMovies()}))}},{key:"toggleFavourite",value:function(e){var t=Object(h.a)(this.state.movies),a=t.find((function(t){return t.imdbID===e.imdbID}));a.favourite=!a.favourite;var n=t.filter((function(e){return!0===e.favourite}));localStorage.setItem("favourites",JSON.stringify(n)),this.setState({movies:t})}},{key:"handleHomeClick",value:function(){this.setState({showFavourites:!1})}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.searchTerm,n=e.loading,o=e.favourites,c=e.showFavourites;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement(b,{handleHomeClick:this.handleHomeClick.bind(this),handleShowFavourites:this.handleShowFavourites}),c?null:i.a.createElement(E,{setSelectedType:this.setSelectedType.bind(this),handleSearchClick:this.handleSearchClick.bind(this),searchTerm:a,handleSearch:this.handleSearch}),i.a.createElement(w,{toggleFavourite:this.toggleFavourite.bind(this),loading:n,movies:c?o:t,showFavourites:c})))}}]),a}(i.a.Component),y=a(22);var S=Object(d.f)((function(e){var t=Object.assign({},e),a=Object(n.useState)(!1),o=Object(y.a)(a,2),c=o[0],r=o[1],s=Object(n.useState)({}),l=Object(y.a)(s,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){var e=t.match.params.id;r(!0),fetch("https://www.omdbapi.com/?i=".concat(e,"&apikey=1b9a1a44&plot=full")).then((function(e){return e.json()})).then((function(e){m(e),r(!1)})).catch((function(e){console.log("Error:",e)}))}),[]),i.a.createElement("div",{className:"single-movie-container"},c?"Loading....":Object.keys(u).length?i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{src:u.Poster})),i.a.createElement("div",{className:"movie-details"},i.a.createElement("div",{className:"movie-title"},u.Title),i.a.createElement("div",{className:"movie-year"},u.Year)),i.a.createElement("div",{className:"go-back-button",onClick:function(){t.history.push("/")}},i.a.createElement("button",null,"Go back"))):i.a.createElement("div",{className:"content"},"No such movie found"))})),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,{basename:"/Teamarcs-movie-search"},i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/"},i.a.createElement(k,null)),i.a.createElement(d.a,{exact:!0,path:"/movie/:id"},i.a.createElement(S,null))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.10c0867f.chunk.js.map