(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{55:function(e,t,a){e.exports=a(84)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),o=(a(60),a(61),a(62),a(26)),l=(a(63),a(97)),s=(a(64),a(65),a(66),a(43)),m=a(44),u=a.n(m),d=a(4);var h=function(){var e=Object(d.f)(),t=Object(n.useState)(new Date),a=Object(o.a)(t,2),i=a[0],c=a[1],m=Object(n.useState)(new Date),h=Object(o.a)(m,2),p=h[0],b=h[1],E={startDate:i,endDate:p,key:"selection"};return r.a.createElement("div",{className:"search"},r.a.createElement(s.DateRangePicker,{ranges:[E],onChange:function(e){c(e.selection.startDate),b(e.selection.endDate)}}),r.a.createElement("h2",null,"Number of guests ",r.a.createElement(u.a,null)," "),r.a.createElement("input",{min:0,defaultValue:2,type:"Number"}),r.a.createElement(l.a,{onClick:function(){return e.push("/search")}},"Search Airbnb"))};var p=function(){var e=Object(d.f)(),t=Object(n.useState)(!0),a=Object(o.a)(t,2),i=a[0],c=a[1];return r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner__search"},r.a.createElement(l.a,{onClick:function(){return c(!i)},className:"banner__searchButton",variant:"outlined"},i?"Hide":"Search Dates"),i&&r.a.createElement(h,null)),r.a.createElement("div",{className:"banner__info"},r.a.createElement("h1",null,"Get out and stretch your imagination"),r.a.createElement("h5",null,"Plan a different kind of getaway to uncover the hidden gems near you"),r.a.createElement(l.a,{onClick:function(){return e.push("/search")}},"Explore Nearby")))};a(79);var b=function(e){var t=e.src,a=e.title,n=e.description,i=e.price;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,alt:""}),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",null,a),r.a.createElement("h2",null,n),r.a.createElement("h2",null,i)))};var E=function(){return r.a.createElement("div",{className:"home"},r.a.createElement(p,null),r.a.createElement("div",{className:"home__Section"},r.a.createElement(b,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),r.a.createElement(b,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),r.a.createElement(b,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})),r.a.createElement("div",{className:"home__Section"},r.a.createElement(b,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"\u20b96300/night"}),r.a.createElement(b,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"\u20b97600/night"}),r.a.createElement(b,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"\u20b96500/night"})))},g=(a(80),a(48)),f=a.n(g),v=a(50),_=a.n(v),w=a(49),y=a.n(w),N=a(98),j=a(20);var P=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(j.b,{to:"/"},r.a.createElement("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:""})),r.a.createElement("div",{className:"header__center"},r.a.createElement("input",{type:"text"}),r.a.createElement(f.a,null)),r.a.createElement("div",{className:"header__right"},r.a.createElement("p",null,"Become a host"),r.a.createElement(y.a,null),r.a.createElement(_.a,null),r.a.createElement(N.a,null)))};a(81);var S=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"\xa9 2020 Airbnb clone! No rights reserved - this is a demo!"),r.a.createElement("p",null,"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"))},k=(a(82),a(83),a(51)),F=a.n(k),x=a(52),L=a.n(x);var W=function(e){var t=e.img,a=e.location,n=e.title,i=e.description,c=e.star,o=e.price,l=e.total;return r.a.createElement("div",{className:"searchResult"},r.a.createElement("img",{src:t,alt:""}),r.a.createElement(F.a,{className:"searchResult__heart"}),r.a.createElement("div",{className:"searchResult__info"},r.a.createElement("div",{className:"searchResult__infoTop"},r.a.createElement("p",null,a),r.a.createElement("h3",null,n),r.a.createElement("p",null,"____"),r.a.createElement("p",null,i)),r.a.createElement("div",{className:"searchResult__infoBottom"},r.a.createElement("div",{className:"searchResult__stars"},r.a.createElement(L.a,{className:"searchResult__star"}),r.a.createElement("p",null,r.a.createElement("strong",null,c))),r.a.createElement("div",{className:"searchResults__price"},r.a.createElement("h2",null,o),r.a.createElement("p",null,l)))))};var A=function(){return r.a.createElement("div",{className:"searchPage"},r.a.createElement("div",{className:"searchPage__info"},r.a.createElement("p",null,"62 stays \xb7 18 september to 21 september \xb7 3 guests"),r.a.createElement("h1",null,"Stays nearby"),r.a.createElement(l.a,{variant:"outlined"},"Cancellation Flexibility"),r.a.createElement(l.a,{variant:"outlined"},"Type of place"),r.a.createElement(l.a,{variant:"outlined"},"Price"),r.a.createElement(l.a,{variant:"outlined"},"Rooms and beds"),r.a.createElement(l.a,{variant:"outlined"},"More filters")),r.a.createElement(W,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"\u20b93000 / night",total:"\u20b911700 total"}),r.a.createElement(W,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"\u20b94500 / night",total:"\u20b915700 total"}),r.a.createElement(W,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"\u20b93500 / night",total:"\u20b920700 total"}),r.a.createElement(W,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"\u20b95500 / night",total:"\u20b932000 total"}),r.a.createElement(W,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"\u20b96000 / night",total:"\u20b945000 total"}),r.a.createElement(W,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"\u20b96500 / night",total:"\u20b948000 total"}),r.a.createElement(W,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"\u20b99000 / night",total:"\u20b965000 total"}))};var B=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(j.a,null,r.a.createElement(P,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/search"},r.a.createElement(A,null)),r.a.createElement(d.a,{path:"/"},r.a.createElement(E,null))),r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.699db59a.chunk.js.map