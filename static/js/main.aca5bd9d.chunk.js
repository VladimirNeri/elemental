(this.webpackJsonpelemental=this.webpackJsonpelemental||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/14.396c8f29.jpg"},23:function(e,t,n){e.exports=n.p+"static/media/18.ebf7562f.jpg"},30:function(e,t,n){e.exports=n.p+"static/media/1.bc4a55ee.jpg"},31:function(e,t,n){e.exports=n.p+"static/media/10.6d7b7450.jpg"},32:function(e,t,n){e.exports=n.p+"static/media/13.cee03c13.jpg"},33:function(e,t,n){e.exports=n.p+"static/media/16.5911b7f2.jpg"},39:function(e,t,n){e.exports=n.p+"static/media/23.66b31411.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/22.0d456d4d.jpg"},44:function(e,t,n){e.exports=n(73)},59:function(e,t,n){e.exports=n.p+"static/media/5.8cc56dea.jpg"},60:function(e,t,n){e.exports=n.p+"static/media/3.b02f7cd9.jpg"},61:function(e,t,n){e.exports=n.p+"static/media/4.8c2c094b.jpg"},62:function(e,t,n){e.exports=n.p+"static/media/2.94d2d5c0.jpg"},63:function(e,t,n){e.exports=n.p+"static/media/9.b888d67b.jpg"},64:function(e,t,n){e.exports=n.p+"static/media/8.56f3a959.jpg"},65:function(e,t,n){e.exports=n.p+"static/media/7.e5693e70.jpg"},66:function(e,t,n){e.exports=n.p+"static/media/11.d23bb3de.jpg"},67:function(e,t,n){e.exports=n.p+"static/media/6.5a6b97ca.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/12.8f0bc322.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/19.944b803e.jpg"},70:function(e,t,n){e.exports=n.p+"static/media/17.83daeb98.jpg"},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),l=n.n(r),m=n(7),o=n(3),c=[{path:"/",label:"Elemental",index:!0},{path:"/portraits",label:"Portraits"},{path:"/nature",label:"Nature"},{path:"/submit",label:"Submit"},{path:"/signup",label:"SignUp"}],s=n(13),u=[{link:"https://github.com/VladimirNeri/elemental",label:"Github",icon:s.b},{link:"https://twitter.com",label:"Twitter",icon:s.d},{link:"https://www.instagram.com",label:"Instagram",icon:s.c},{link:"https://www.facebook.com",label:"Facebook",icon:s.a}],d=n(34),p=n(43),g=n(35),E=n.n(g),f=n(10),h=n(11);function b(){var e=Object(f.a)(["\n  .hamburger-container {\n    display: none;\n  }\n\n  @media screen and (max-width: 487px) {\n    .hamburger-container {\n      display: initial;\n    }\n  }\n\n  /* Position and sizing of burger button */\n  .bm-burger-button {\n    position: fixed;\n    width: 36px;\n    height: 30px;\n    left: 36px;\n    top: 36px;\n  }\n\n  .bm-menu {\n    background: white;\n    margin-top: 9px;\n    padding: 1em 1em 0 2em;\n    font-size: 1.15em;\n    z-index: 10000; \n  }\n\n  /* Wrapper for item list */\n  .bm-item-list {\n    margin-top: 0;\n    color: #3c3b3b;\n    padding: 0;\n    font-family: 'Raleway', Helvetica, sans-serif;\n  }\n\n  .open-menu {\n    position: fixed;\n    right: 0;\n    border: none;\n  }\n\n  .close-menu {\n    position: fixed;\n    right: 0;\n    border-left: 0;\n  }\n\n  .menu-hover {\n    margin-right: 1em;\n  }\n\n  .hamburger-ul {\n    display: block;\n\n    li a h3 {\n      border: 0;\n      border-top: dotted 1px rgba(160, 160, 160, 0.3);\n      margin: 1.5em 0 0 0;\n      padding: 1.5em 0 0 0;\n    }\n\n    li a:hover {\n      color: dodgerblue;\n    }\n\n    li {\n      display: block !important;\n    }\n\n    h3 {\n      font-size: 0.7em;\n    }\n\n    .index-li {\n      border-top: none;\n    }\n  }\n"]);return b=function(){return e},e}var y=h.a.div(b()),x=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1];return i.a.createElement(y,null,i.a.createElement("div",{className:"hamburger-container"},i.a.createElement("nav",{className:"hamburger"},i.a.createElement("ul",null,n?i.a.createElement("li",{className:"menu close-menu"},i.a.createElement("div",{onClick:function(){return r(!n)},className:"menu-hover"},"\u2715")):i.a.createElement("li",{className:"menu open-menu"},i.a.createElement("div",{onClick:function(){return r(!n)},className:"menu-hover"},"\u2630")))),i.a.createElement(E.a,{right:!0,noOverlay:!0,width:240,isOpen:n},i.a.createElement("ul",{className:"hamburger-ul"},c.map((function(e){return i.a.createElement("li",{key:e.label},i.a.createElement(m.b,{to:e.path,onClick:function(){return r(!n)}},i.a.createElement("h3",{className:e.index&&"index-li"},e.label)))}))))))};function v(){var e=Object(f.a)(["\n  background-color: white;\n  display: grid;\n  grid-template-columns: 1fr auto 1fr; \n  font-size: 12px;\n  text-transform: uppercase;\n  height: 4rem; \n  width: 99%;\n  \n  /* fix navbar to top */\n  overflow: hidden;\n  z-index: 21; \n  padding-top: .5rem;\n  position: fixed;\n  top: 0; \n\n  @media (max-width: 950px) {\n    grid-template-columns: 1fr 1fr; \n    margin: auto;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #1e90ff;\n    text-decoration: none;\n    transform: translateY(-3px);\n  }\n\n  .title {\n    padding-top: 0.5rem; \n    &:hover {\n      color: #1e90ff;\n      text-decoration: none;\n    }\n  }\n\n  .links {\n    grid-column: 2/3; \n    \n    @media (max-width: 950px) {\n      grid-column: 3/3;\n      margin: auto;\n    }\n\n    @media (max-width: 487px) {\n      display: none;\n    }\n  }\n\n  .icons {\n    grid-column: 3/3;\n    justify-self: end;\n    \n    @media (max-width: 950px) {\n      display: none; \n    }\n  }\n\n  ul {\n    padding: 5px; \n    align-content: center;\n    font-size: 16px; \n\n    a {\n      color: inherit; \n      text-decoration: none; \n    }\n    \n  li {\n    display: inline-block;\n    margin-right: 20px; \n    transition: opacity 0.5s ease; \n    cursor: pointer; \n    \n    :last-of-type {\n      margin-right: 0px; \n    }\n  }\n}\n"]);return v=function(){return e},e}var w=h.a.div(v()),k=function(){return i.a.createElement(w,null,i.a.createElement("h1",{className:"title"},c.filter((function(e){return e.index})).map((function(e){return i.a.createElement(m.b,{key:e.label,to:e.path},e.label)}))),i.a.createElement("div",{className:"links"},i.a.createElement("ul",null,c.filter((function(e){return!e.index})).map((function(e){return i.a.createElement("li",{key:e.label},i.a.createElement(m.b,{to:e.path},e.label))})))),i.a.createElement("div",{className:"icons"},i.a.createElement("ul",null,u.map((function(e){return i.a.createElement("li",{key:e.label},i.a.createElement("a",{href:e.link},i.a.createElement(d.a,{icon:e.icon})))})))),i.a.createElement(x,null))},N=n(15),j=n.n(N),P=[{id:"0",title:"Fall",image:n(30),path:"/posts/fall",category:"nature"},{id:"1",title:"Alpha",image:n(59),category:"portrait"},{id:"2",title:"Charlie",image:n(60),category:"nature"},{id:"3",title:"Delta",image:n(61),category:"portrait"},{id:"4",title:"Spring",image:n(62),path:"/posts/spring",category:"nature"},{id:"5",title:"Winter",image:n(63),path:"/posts/winter",category:"nature"},{id:"6",title:"Golf",image:n(64),category:"nature"},{id:"7",title:"Hotel",image:n(65),category:"portrait"},{id:"8",title:"India",image:n(66),category:"portrait"},{id:"9",title:"Juliet",image:n(67),category:"portrait"},{id:"10",title:"Kilo",image:n(31),category:"nature"},{id:"11",title:"Lima",image:n(68),category:"portrait"},{id:"12",title:"Mike",image:n(32),category:"nature"},{id:"13",title:"Summer",image:n(33),path:"/posts/summer",category:"nature"}],S=function(){return a.createElement(j.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},P.map((function(e){return a.createElement("div",{className:"image",key:e.id},a.createElement("a",{href:"#".concat(e.path)},a.createElement("img",{src:e.image,alt:e.title,className:"image"})))})))};S.defaultProps={data:[]};var q=S,C=n(12),z=n(39),U=n.n(z),F=n(22),O=n.n(F),W=n(23),I=n.n(W),L=n(40),B=n.n(L);function G(){var e=Object(f.a)(["\n  margin: auto; \n  width: 70%; \n  padding-bottom: 10px; \n  padding-top: 3px; \n\n  @media (max-width: 487px) {\n    width: 100%;\n  }\n\n   /* Should be on the markup */\n  img {\n   width: 900px; \n   height: auto; \n  }\n"]);return G=function(){return e},e}var H=h.a.div(G()),T=function(){return i.a.createElement(H,null,i.a.createElement(C.a,{interval:8e3,bsPrefix:"carousel"},i.a.createElement(C.a.Item,{bsPrefix:"carousel-item"},i.a.createElement(m.b,{to:"/posts/fall"},i.a.createElement("img",{className:"d-block w-100",src:U.a,alt:"First slide"})),i.a.createElement(C.a.Caption,{bsPrefix:"carousel-caption"},i.a.createElement("h3",null,"Fall"),i.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),i.a.createElement(C.a.Item,{bsPrefix:"carousel-item"},i.a.createElement(m.b,{to:"/posts/winter"},i.a.createElement("img",{className:"d-block w-100",src:O.a,alt:"Third slide"})),i.a.createElement(C.a.Caption,{bsPrefix:"carousel-caption"},i.a.createElement("h3",null,"Winter"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),i.a.createElement(C.a.Item,{bsPrefix:"carousel-item"},i.a.createElement(m.b,{to:"/posts/spring"},i.a.createElement("img",{className:"d-block w-100",src:I.a,alt:"Third slide"})),i.a.createElement(C.a.Caption,{bsPrefix:"carousel-caption"},i.a.createElement("h3",null,"Spring"),i.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))),i.a.createElement(C.a.Item,{bsPrefix:"carousel-item"},i.a.createElement(m.b,{to:"/posts/summer"},i.a.createElement("img",{className:"d-block w-100",src:B.a,alt:"Fourth Slide"})),i.a.createElement(C.a.Caption,{bsPrefix:"carousel-caption"},i.a.createElement("h3",null,"Summer"),i.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))},J=n(5),_=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Home"),i.a.createElement("meta",{name:"elemental",content:"Home"})),i.a.createElement(k,null),i.a.createElement(T,null),i.a.createElement(q,null))},D=function(){var e=P.filter((function(e){return"portrait"===e.category}));return a.createElement(j.a,{breakpointCols:{default:3,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},e.map((function(e){return a.createElement("div",{className:"image",key:e.id},a.createElement("a",{href:"#".concat(e.path)},a.createElement("img",{src:e.image,alt:e.title,className:"image"})))})))},M=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Portraits"),i.a.createElement("meta",{name:"description",content:"Portraits Gallery"}),i.a.createElement("meta",{name:"theme-color",content:"#008f68"})),i.a.createElement(k,null),i.a.createElement(D,null))},Y=function(){var e=P.filter((function(e){return"nature"===e.category}));return a.createElement(j.a,{breakpointCols:{default:3,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},e.map((function(e){return a.createElement("div",{className:"image",key:e.id},a.createElement("a",{href:"#".concat(e.path)},a.createElement("img",{src:e.image,alt:e.title,className:"image"})))})))},A=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Nature"),i.a.createElement("meta",{name:"description",content:"Nature Gallery"})),i.a.createElement(k,null),i.a.createElement(Y,null))},K=[{id:"0",title:"Fall",image:{image1:n(30),image2:n(31)},category:"nature",date:"2020-08-05",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:"1",title:"Winter",image:{image1:n(22),image2:n(32)},category:"nature",date:"2020-08-05",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:"2",title:"Spring",image:{image1:n(23),image2:n(69)},category:"nature",date:"2020-08-05",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:"3",title:"Summer",image:{image1:n(33),image2:n(70)},category:"nature",date:"2020-08-05",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}];function R(){var e=Object(f.a)(["\n  margin-top: 1em; \n  text-align: center; \n  padding: 20px; \n  font-size: 12px; \n\n  p {\n    font-size: 14;\n    margin-top: 1em; \n    margin-bottom: 1em; \n    display: block; \n    width: 40%;\n    margin-left: auto; \n    margin-right: auto; \n  }\n\n  .image {\n    display: block;\n    margin-top: 1em; \n    margin-bottom: 1em; \n    margin-left: auto;\n    margin-right: auto;\n    width: 80%;\n  }\n"]);return R=function(){return e},e}var V=h.a.div(R()),Q=function(){var e=K.filter((function(e){return"Fall"===e.title}));return i.a.createElement(V,null,e.map((function(e){return i.a.createElement("header",{key:e.id},i.a.createElement("div",null,i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Fall"),i.a.createElement("meta",{name:"description",content:"Posts"}))),i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.desc),i.a.createElement("img",{src:e.image.image1,alt:e.title,className:"image"}),i.a.createElement("p",null,'"Ut enim consequatur?"'),i.a.createElement("img",{src:e.image.image2,alt:e.title,className:"image"}))})))},X=function(){var e=K.filter((function(e){return"Summer"===e.title}));return i.a.createElement(V,null,e.map((function(e){return i.a.createElement("header",{key:e.id},i.a.createElement("div",null,i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Summer"),i.a.createElement("meta",{name:"description",content:"Posts"}))),i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.desc),i.a.createElement("img",{src:e.image.image1,alt:e.title,className:"image"}),i.a.createElement("p",null,'"Ut enim consequatur?"'),i.a.createElement("img",{src:e.image.image2,alt:e.title,className:"image"}))})))},Z=function(){var e=K.filter((function(e){return"Spring"===e.title}));return i.a.createElement(V,null,e.map((function(e){return i.a.createElement("header",{key:e.id},i.a.createElement("div",null,i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Spring"),i.a.createElement("meta",{name:"description",content:"Posts"}))),i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.desc),i.a.createElement("img",{src:e.image.image1,alt:e.title,className:"image"}),i.a.createElement("p",null,'"Ut enim consequatur?"'),i.a.createElement("img",{src:e.image.image2,alt:e.title,className:"image"}))})))},$=function(){var e=K.filter((function(e){return"Winter"===e.title}));return i.a.createElement(V,null,e.map((function(e){return i.a.createElement("header",{key:e.id},i.a.createElement("div",null,i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Winter"),i.a.createElement("meta",{name:"description",content:"Posts"}))),i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.desc),i.a.createElement("img",{src:e.image.image1,alt:e.title,className:"image"}),i.a.createElement("p",null,'"Ut enim consequatur?"'),i.a.createElement("img",{src:e.image.image2,alt:e.title,className:"image"}))})))},ee=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(k,null),i.a.createElement(m.a,null,i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/posts/fall",component:Q}),i.a.createElement(o.a,{path:"/posts/summer",component:X}),i.a.createElement(o.a,{path:"/posts/spring",component:Z}),i.a.createElement(o.a,{path:"/posts/winter",component:$}))))};function te(){var e=Object(f.a)(["\n  margin-top: 1em; \n  text-align: center; \n  padding: 20px; \n  font-size: 12px; \n\n  p {\n    text-align: justify; \n    font-size: 14;\n    margin-top: 1em; \n    margin-bottom: 1em; \n    display: block; \n    width: 70%;\n    margin-left: auto; \n    margin-right: auto; \n  }\n\n"]);return te=function(){return e},e}var ne=h.a.div(te()),ae=function(){return i.a.createElement(ne,null,i.a.createElement("h1",null,"Submission Guidlines"),i.a.createElement("p",null,"We only take exclusive submissions meaning they are UNPUBLISHED, having not been shown on Facebook, Tumblr, blogs or any other public forum. The published story remains a Elemental Exclusive after being published. Successful submissions will be notified via email. Elemental reserves the right to accept or deny any submissions we receive. By submitting your work, you give full consent for Elemental to publish your work in the magazine, website and/or shared via social media. Please note that due to the sheer amount of emails we receive daily we unfortunately cannot reply to every submission sent."),i.a.createElement("p",null,"By submitting an exclusive story to Elemental you agree not to send the accepted and published story to any other magazine or website and give sole discretion to Elemental to use/post your work in anyway to Elemental, unless rejected, or the 30-day period concludes in which case you may submit and publish elsewhere. When submitting, please provide your personal bio, any links to social media profiles and portfolios, along with credits and links to involved team members."),i.a.createElement("p",null,"You must be the copyright-owner of the artwork or photographs to submit them. Be aware that when submitting your contribution you agree to grant Elemental the right to reproduce, modify, adapt, publish, create derivative works, distribute, make available to the public, and/or to incorporate your contribution in other works in any media. Elemental reserve the right to re-edit any imagery and to use cropped versions of your work when producing our editorials and you as an artist understand that the editorial itself is someone\u2019s artwork. We have the rights to remove your editorial at any stage."),i.a.createElement("h2",null,"Email all submissions to: info@Elemental.net"))},ie=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Submit"),i.a.createElement("meta",{name:"description",content:"Submit"})),i.a.createElement(k,null),i.a.createElement(ae,null))},re=function(){return i.a.createElement("div",null,"signup")},le=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(J.a,null,i.a.createElement("title",null,"Elemental | Signup"),i.a.createElement("meta",{name:"description",content:"Signup Page"})),i.a.createElement(k,null),i.a.createElement(re,null))};n(71),n(72);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m.a,null,i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/",component:_}),i.a.createElement(o.a,{path:"/portraits",component:M}),i.a.createElement(o.a,{path:"/nature",component:A}),i.a.createElement(o.a,{path:"/posts",component:ee}),i.a.createElement(o.a,{path:"/submit",component:ie}),i.a.createElement(o.a,{path:"/signup",component:le})))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.aca5bd9d.chunk.js.map