(this.webpackJsonpelemental=this.webpackJsonpelemental||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/14.396c8f29.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/18.ebf7562f.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/1.bc4a55ee.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/10.6d7b7450.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/13.cee03c13.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/16.5911b7f2.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/23.66b31411.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/22.0d456d4d.jpg"},47:function(e,t,a){e.exports=a(87)},73:function(e,t,a){e.exports=a.p+"static/media/5.8cc56dea.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/3.b02f7cd9.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/4.8c2c094b.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/2.94d2d5c0.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/9.b888d67b.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/8.56f3a959.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/7.e5693e70.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/11.d23bb3de.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/6.5a6b97ca.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/12.8f0bc322.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/19.944b803e.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/17.83daeb98.jpg"},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(15),r=a.n(l),m=a(7),o=a(3),c=[{path:"/",label:"Elemental",index:!0},{path:"/portraits",label:"Portraits"},{path:"/nature",label:"Nature"},{path:"/submit",label:"Submit"},{path:"/signup",label:"SignUp"}],s=a(14),u=[{link:"https://github.com/VladimirNeri/elemental",label:"Github",icon:s.b},{link:"https://twitter.com",label:"Twitter",icon:s.d},{link:"https://www.instagram.com",label:"Instagram",icon:s.c},{link:"https://www.facebook.com",label:"Facebook",icon:s.a}],d=a(37),p=a(46),g=a(38),E=a(11),f=a(12);function h(){var e=Object(E.a)(["\n  .hamburger-container {\n    display: none;\n  }\n\n  @media screen and (max-width: 487px) {\n    .hamburger-container {\n      display: initial;\n    }\n  }\n\n\n"]);return h=function(){return e},e}var b=f.a.div(h()),y=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],l=t[1];return i.a.createElement(b,null,i.a.createElement("div",{className:"hamburger-container"},i.a.createElement("nav",{className:"main",id:"hamburger-nav"},i.a.createElement("ul",null,a?i.a.createElement("li",{className:"menu close-menu"},i.a.createElement("div",{onClick:function(){return l(!a)},className:"menu-hover"},"\u2715")):i.a.createElement("li",{className:"menu open-menu"},i.a.createElement("div",{onClick:function(){return l(!a)},className:"menu-hover"},"\u2630")))),i.a.createElement(g.slide,{right:!0,noOverlay:!0,isOpen:a,width:200},i.a.createElement("ul",{className:"hamburger-ul"},c.map((function(e){return i.a.createElement("li",{key:e.label},i.a.createElement(m.b,{to:e.path,onClick:function(){return l(!a)}},i.a.createElement("h3",{className:e.index&&"index-li"},e.label)))}))))))};function x(){var e=Object(E.a)(["\n  background-color: white;\n  display: grid;\n  grid-template-columns: 1fr auto 1fr; \n  font-size: 12px;\n  text-transform: uppercase;\n  height: 4rem; \n  width: 99%;\n  \n  /* fix navbar to top */\n  overflow: hidden;\n  z-index: 21; \n  padding-top: .5rem;\n  position: fixed;\n  top: 0; \n\n  @media (max-width: 950px) {\n    grid-template-columns: 1fr 1fr; \n    margin: auto;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #1e90ff;\n    text-decoration: none;\n    transform: translateY(-3px);\n  }\n\n  .title {\n    padding-top: 0.5rem; \n    &:hover {\n      color: #1e90ff;\n      text-decoration: none;\n    }\n  }\n\n  .links {\n    grid-column: 2/3; \n    \n    @media (max-width: 950px) {\n      grid-column: 3/3;\n      margin: auto;\n    }\n\n    @media (max-width: 487px) {\n      display: none;\n    }\n  }\n\n  .icons {\n    grid-column: 3/3;\n    justify-self: end;\n    \n    @media (max-width: 950px) {\n      display: none; \n    }\n  }\n\n  ul {\n    padding: 5px; \n    align-content: center;\n    font-size: 16px; \n\n    a {\n      color: inherit; \n      text-decoration: none; \n    }\n    \n  li {\n    display: inline-block;\n    margin-right: 20px; \n    transition: opacity 0.5s ease; \n    cursor: pointer; \n    \n    :last-of-type {\n      margin-right: 0px; \n    }\n  }\n}\n"]);return x=function(){return e},e}var v=f.a.div(x()),w=function(){return i.a.createElement(v,null,i.a.createElement("h1",{className:"title"},c.filter((function(e){return e.index})).map((function(e){return i.a.createElement(m.b,{key:e.label,to:e.path},e.label)}))),i.a.createElement("div",{className:"links"},i.a.createElement("ul",null,c.filter((function(e){return!e.index})).map((function(e){return i.a.createElement("li",{key:e.label},i.a.createElement(m.b,{to:e.path},e.label))})))),i.a.createElement("div",{className:"icons"},i.a.createElement("ul",null,u.map((function(e){return i.a.createElement("li",{key:e.label},i.a.createElement("a",{href:e.link},i.a.createElement(d.a,{icon:e.icon})))})))),i.a.createElement(y,null))},k=a(16),N=a.n(k),j=[{id:"0",title:"Fall",image:a(33),path:"/posts/fall",category:"nature"},{id:"1",title:"Alpha",image:a(73),category:"portrait"},{id:"2",title:"Charlie",image:a(74),category:"nature"},{id:"3",title:"Delta",image:a(75),category:"portrait"},{id:"4",title:"Spring",image:a(76),path:"/posts/spring",category:"nature"},{id:"5",title:"Winter",image:a(77),path:"/posts/winter",category:"nature"},{id:"6",title:"Golf",image:a(78),category:"nature"},{id:"7",title:"Hotel",image:a(79),category:"portrait"},{id:"8",title:"India",image:a(80),category:"portrait"},{id:"9",title:"Juliet",image:a(81),category:"portrait"},{id:"10",title:"Kilo",image:a(34),category:"nature"},{id:"11",title:"Lima",image:a(82),category:"portrait"},{id:"12",title:"Mike",image:a(35),category:"nature"},{id:"13",title:"Summer",image:a(36),path:"/posts/summer",category:"nature"}],S=function(){return n.createElement(N.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},j.map((function(e){return n.createElement("div",{className:"image",key:e.id},n.createElement("a",{href:"#".concat(e.path)},n.createElement("img",{src:e.image,alt:e.title,className:"image"})))})))};S.defaultProps={data:[]};var q=S,P=a(13),C=a(42),U=a.n(C),z=a(23),F=a.n(z),O=a(24),I=a.n(O),W=a(43),L=a.n(W);function B(){var e=Object(E.a)(["\n  margin: auto; \n  width: 70%; \n  padding-bottom: 10px; \n  padding-top: 3px; \n\n  @media (max-width: 450px) {\n    width: 100%\n  }\n\n   /* Should be on the markup */\n  img {\n   width: 900px; \n   height: auto; \n  }\n"]);return B=function(){return e},e}var G=f.a.div(B()),T=function(){return i.a.createElement(G,null,i.a.createElement(P.a,{interval:8e3,bsPrefix:"carousel"},i.a.createElement(P.a.Item,{bsPrefix:"carousel-item"},i.a.createElement(m.b,{to:"/posts/fall"},i.a.createElement("img",{className:"d-block w-100",src:U.a,alt:"First slide"})),i.a.createElement(P.a.Caption,{bsPrefix:"carousel-caption"},i.a.createElement("h3",null,"Fall"),i.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),i.a.createElement(P.a.Item,{bsPrefix:"carousel-item"},i.a.createElement(m.b,{to:"/posts/winter"},i.a.createElement("img",{className:"d-block w-100",src:F.a,alt:"Third slide"})),i.a.createElement(P.a.Caption,{bsPrefix:"carousel-caption"},i.a.createElement("h3",null,"Winter"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),i.a.createElement(P.a.Item,{bsPrefix:"carousel-item"},i.a.createElement(m.b,{to:"/posts/spring"},i.a.createElement("img",{className:"d-block w-100",src:I.a,alt:"Third slide"})),i.a.createElement(P.a.Caption,{bsPrefix:"carousel-caption"},i.a.createElement("h3",null,"Spring"),i.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))),i.a.createElement(P.a.Item,{bsPrefix:"carousel-item"},i.a.createElement(m.b,{to:"/posts/summer"},i.a.createElement("img",{className:"d-block w-100",src:L.a,alt:"Fourth Slide"})),i.a.createElement(P.a.Caption,{bsPrefix:"carousel-caption"},i.a.createElement("h3",null,"Summer"),i.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))},H=a(5),J=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Home"),i.a.createElement("meta",{name:"elemental",content:"Home"})),i.a.createElement(w,null),i.a.createElement(T,null),i.a.createElement(q,null))},_=function(){var e=j.filter((function(e){return"portrait"===e.category}));return n.createElement(N.a,{breakpointCols:{default:3,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},e.map((function(e){return n.createElement("div",{className:"image",key:e.id},n.createElement("a",{href:"#".concat(e.path)},n.createElement("img",{src:e.image,alt:e.title,className:"image"})))})))},D=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Portraits"),i.a.createElement("meta",{name:"description",content:"Portraits Gallery"}),i.a.createElement("meta",{name:"theme-color",content:"#008f68"})),i.a.createElement(w,null),i.a.createElement(_,null))},M=function(){var e=j.filter((function(e){return"nature"===e.category}));return n.createElement(N.a,{breakpointCols:{default:3,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},e.map((function(e){return n.createElement("div",{className:"image",key:e.id},n.createElement("a",{href:"#".concat(e.path)},n.createElement("img",{src:e.image,alt:e.title,className:"image"})))})))},Y=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Nature"),i.a.createElement("meta",{name:"description",content:"Nature Gallery"})),i.a.createElement(w,null),i.a.createElement(M,null))},A=[{id:"0",title:"Fall",image:{image1:a(33),image2:a(34)},category:"nature",date:"2020-08-05",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:"1",title:"Winter",image:{image1:a(23),image2:a(35)},category:"nature",date:"2020-08-05",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:"2",title:"Spring",image:{image1:a(24),image2:a(83)},category:"nature",date:"2020-08-05",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:"3",title:"Summer",image:{image1:a(36),image2:a(84)},category:"nature",date:"2020-08-05",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}];function K(){var e=Object(E.a)(["\n  margin-top: 1em; \n  text-align: center; \n  padding: 20px; \n  font-size: 12px; \n\n  p {\n    font-size: 14;\n    margin-top: 1em; \n    margin-bottom: 1em; \n    display: block; \n    width: 40%;\n    margin-left: auto; \n    margin-right: auto; \n  }\n\n  .image {\n    display: block;\n    margin-top: 1em; \n    margin-bottom: 1em; \n    margin-left: auto;\n    margin-right: auto;\n    width: 80%;\n  }\n"]);return K=function(){return e},e}var V=f.a.div(K()),Q=function(){var e=A.filter((function(e){return"Fall"===e.title}));return i.a.createElement(V,null,e.map((function(e){return i.a.createElement("header",{key:e.id},i.a.createElement("div",null,i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Fall"),i.a.createElement("meta",{name:"description",content:"Posts"}))),i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.desc),i.a.createElement("img",{src:e.image.image1,alt:e.title,className:"image"}),i.a.createElement("p",null,'"Ut enim consequatur?"'),i.a.createElement("img",{src:e.image.image2,alt:e.title,className:"image"}))})))},R=function(){var e=A.filter((function(e){return"Summer"===e.title}));return i.a.createElement(V,null,e.map((function(e){return i.a.createElement("header",{key:e.id},i.a.createElement("div",null,i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Summer"),i.a.createElement("meta",{name:"description",content:"Posts"}))),i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.desc),i.a.createElement("img",{src:e.image.image1,alt:e.title,className:"image"}),i.a.createElement("p",null,'"Ut enim consequatur?"'),i.a.createElement("img",{src:e.image.image2,alt:e.title,className:"image"}))})))},X=function(){var e=A.filter((function(e){return"Spring"===e.title}));return i.a.createElement(V,null,e.map((function(e){return i.a.createElement("header",{key:e.id},i.a.createElement("div",null,i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Spring"),i.a.createElement("meta",{name:"description",content:"Posts"}))),i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.desc),i.a.createElement("img",{src:e.image.image1,alt:e.title,className:"image"}),i.a.createElement("p",null,'"Ut enim consequatur?"'),i.a.createElement("img",{src:e.image.image2,alt:e.title,className:"image"}))})))},Z=function(){var e=A.filter((function(e){return"Winter"===e.title}));return i.a.createElement(V,null,e.map((function(e){return i.a.createElement("header",{key:e.id},i.a.createElement("div",null,i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Winter"),i.a.createElement("meta",{name:"description",content:"Posts"}))),i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.desc),i.a.createElement("img",{src:e.image.image1,alt:e.title,className:"image"}),i.a.createElement("p",null,'"Ut enim consequatur?"'),i.a.createElement("img",{src:e.image.image2,alt:e.title,className:"image"}))})))},$=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(w,null),i.a.createElement(m.a,null,i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/posts/fall",component:Q}),i.a.createElement(o.a,{path:"/posts/summer",component:R}),i.a.createElement(o.a,{path:"/posts/spring",component:X}),i.a.createElement(o.a,{path:"/posts/winter",component:Z}))))};function ee(){var e=Object(E.a)(["\n  margin-top: 1em; \n  text-align: center; \n  padding: 20px; \n  font-size: 12px; \n\n  p {\n    text-align: justify; \n    font-size: 14;\n    margin-top: 1em; \n    margin-bottom: 1em; \n    display: block; \n    width: 70%;\n    margin-left: auto; \n    margin-right: auto; \n  }\n\n"]);return ee=function(){return e},e}var te=f.a.div(ee()),ae=function(){return i.a.createElement(te,null,i.a.createElement("h1",null,"Submission Guidlines"),i.a.createElement("p",null,"We only take exclusive submissions meaning they are UNPUBLISHED, having not been shown on Facebook, Tumblr, blogs or any other public forum. The published story remains a Elemental Exclusive after being published. Successful submissions will be notified via email. Elemental reserves the right to accept or deny any submissions we receive. By submitting your work, you give full consent for Elemental to publish your work in the magazine, website and/or shared via social media. Please note that due to the sheer amount of emails we receive daily we unfortunately cannot reply to every submission sent."),i.a.createElement("p",null,"By submitting an exclusive story to Elemental you agree not to send the accepted and published story to any other magazine or website and give sole discretion to Elemental to use/post your work in anyway to Elemental, unless rejected, or the 30-day period concludes in which case you may submit and publish elsewhere. When submitting, please provide your personal bio, any links to social media profiles and portfolios, along with credits and links to involved team members."),i.a.createElement("p",null,"You must be the copyright-owner of the artwork or photographs to submit them. Be aware that when submitting your contribution you agree to grant Elemental the right to reproduce, modify, adapt, publish, create derivative works, distribute, make available to the public, and/or to incorporate your contribution in other works in any media. Elemental reserve the right to re-edit any imagery and to use cropped versions of your work when producing our editorials and you as an artist understand that the editorial itself is someone\u2019s artwork. We have the rights to remove your editorial at any stage."),i.a.createElement("h2",null,"Email all submissions to: info@Elemental.net"))},ne=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Submit"),i.a.createElement("meta",{name:"description",content:"Submit"})),i.a.createElement(w,null),i.a.createElement(ae,null))},ie=function(){return i.a.createElement("div",null,"signup")},le=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(H.a,null,i.a.createElement("title",null,"Elemental | Signup"),i.a.createElement("meta",{name:"description",content:"Signup Page"})),i.a.createElement(w,null),i.a.createElement(ie,null))};a(85),a(86);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m.a,null,i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/",component:J}),i.a.createElement(o.a,{path:"/portraits",component:D}),i.a.createElement(o.a,{path:"/nature",component:Y}),i.a.createElement(o.a,{path:"/posts",component:$}),i.a.createElement(o.a,{path:"/submit",component:ne}),i.a.createElement(o.a,{path:"/signup",component:le})))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.fac82603.chunk.js.map