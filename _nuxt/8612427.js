(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{275:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("a3096c36",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";n(275)},315:function(t,e,n){var c=n(75)(!1);c.push([t.i,"#about-segment[data-v-4cf70d44]{height:500px;width:100%;display:flex;justify-content:center;align-items:center}#about-segment #text[data-v-4cf70d44]{padding:5%}#about-segment #image[data-v-4cf70d44],#about-segment #text[data-v-4cf70d44]{height:100%;width:50%;display:flex;justify-content:center;align-items:center}#about-segment #image #image-container[data-v-4cf70d44]{width:20vw;height:20vw;background-color:#fff;box-shadow:0 0 12px -4px #000;border-radius:100%;display:flex;justify-content:center;align-items:center}#about-segment #image #image-container img[data-v-4cf70d44]{width:70%}",""]),t.exports=c},331:function(t,e,n){"use strict";n.r(e);var c=n(8),r=n(137),o=n(138),f=n(259),d=n(260),l=n(255),h=n(21),m=(n(46),n(60),n(14),n(256),n(258));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(d.a)(this,n)}}var x=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(f.a)(l,t);var e,d=v(l);function l(){var t;return Object(r.a)(this,l),(t=d.apply(this,arguments)).data=null,t.text={},t}return Object(o.a)(l,[{key:"created",value:(e=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$nuxt.context.$content("about/about-data").fetch();case 2:return this.data=t.sent,t.next=5,this.$nuxt.context.$content("about/about-text").fetch();case 5:this.text=t.sent;case 6:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"image",get:function(){return this.data?n(257)("./".concat(this.data.img)):""}}]),l}(m.c),w=y=x([m.a],y),j=(n(314),n(45)),component=Object(j.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapped-content",attrs:{id:"about-segment"}},[n("div",{attrs:{id:"text"}},[n("nuxt-content",{attrs:{document:t.text}})],1),t._v(" "),n("div",{attrs:{id:"image"}},[n("div",{attrs:{id:"image-container"}},[n("img",{attrs:{src:t.image,alt:""}})])])])}),[],!1,null,"4cf70d44",null);e.default=component.exports}}]);