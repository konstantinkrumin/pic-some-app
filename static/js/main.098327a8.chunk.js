(this["webpackJsonppic-some-app"]=this["webpackJsonppic-some-app"]||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),l=n(8),o=(n(26),n(20)),u=n(15),m=n(6),s=r.a.createContext();function f(e){var t=e.children,n=Object(a.useState)([]),c=Object(m.a)(n,2),i=c[0],l=c[1],f=Object(a.useState)([]),d=Object(m.a)(f,2),v=d[0],E=d[1];return Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/konstantinkrumin/pic-some-app/master/src/images/images.json").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),r.a.createElement(s.Provider,{value:{allPhotos:i,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{isFavorite:!t.isFavorite}):t}));l(t)},cartItems:v,addToCart:function(e){E((function(t){return[].concat(Object(o.a)(t),[e])}))},removeFromCart:function(e){E((function(t){return t.filter((function(t){return t.id!==e}))}))},emptyCart:function(){E([])}}},t)}var d=n(1);var v=function(){var e=Object(a.useContext)(s).cartItems.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line";return r.a.createElement("header",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("h2",null,"Pic Some")),r.a.createElement(l.b,{to:"/cart"},r.a.createElement("i",{className:"".concat(e," ri-fw ri-2x")})))};var E=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(null);function i(){r(!0)}function l(){r(!1)}return Object(a.useEffect)((function(){return c.current.addEventListener("mouseenter",i),c.current.addEventListener("mouseleave",l),function(){c.current.removeEventListener("mouseenter",i),c.current.removeEventListener("mouseleave",l)}}),[]),[n,c]};var p=function(e){var t=e.item,n=E(),c=Object(m.a)(n,2),i=c[0],l=c[1],o=Object(a.useContext)(s).removeFromCart,u=i?"ri-delete-bin-fill":"ri-delete-bin-line";return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{className:u,onClick:function(){return o(t.id)},ref:l}),r.a.createElement("img",{src:t.url,alt:"pic in the check out card",width:"130px"}),r.a.createElement("p",null,"$5.99"))};var b=function(){var e=Object(a.useState)("Place Order"),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useContext)(s),l=i.cartItems,o=i.emptyCart,u=(5.99*l.length).toLocaleString("en-US",{style:"currency",currency:"USD"}),f=l.map((function(e){return r.a.createElement(p,{key:e.id,item:e})}));return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"),f,r.a.createElement("p",{className:"total-cost"},"Total: ",u),l.length>0?r.a.createElement("div",{className:"order-button"},r.a.createElement("button",{onClick:function(){c("Ordering..."),setTimeout((function(){console.log("Order placed!"),c("Place Order"),o()}),3e3)}},n)):r.a.createElement("p",null,"You have no items in your cart."))};var h=function(e){var t=e.className,n=e.img,c=E(),i=Object(m.a)(c,2),l=i[0],o=i[1],u=Object(a.useContext)(s),f=u.toggleFavorite,d=u.addToCart,v=u.cartItems,p=u.removeFromCart;return r.a.createElement("div",{className:"".concat(t," image-container"),ref:o},r.a.createElement("img",{src:n.url,alt:"pic in the cart",className:"image-grid"}),n.isFavorite?r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){return f(n.id)}}):l?r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return f(n.id)}}):void 0,v.some((function(e){return e.id===n.id}))?r.a.createElement("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return p(n.id)}}):l?r.a.createElement("i",{className:"ri-add-circle-line cart",onClick:function(){return d(n)}}):void 0)};function g(e){return e%5===0?"big":e%6===0?"wide":void 0}var O=function(){var e=Object(a.useContext)(s).allPhotos.map((function(e,t){return r.a.createElement(h,{key:e.id,img:e,className:g(t)})}));return r.a.createElement("main",{className:"photos"},e)};var j=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(d.a,{path:"/cart"},r.a.createElement(b,null))))};i.a.render(r.a.createElement(f,null,r.a.createElement(l.a,null,r.a.createElement(j,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.098327a8.chunk.js.map