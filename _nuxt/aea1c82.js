(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15],{261:function(t,e,r){var content=r(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("5aabd276",content,!0,{sourceMap:!1})},263:function(t,e,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("a3fbc2a8",content,!0,{sourceMap:!1})},267:function(t,e,r){"use strict";r(261)},268:function(t,e,r){var n=r(75),o=r(269),c=r(266),f=n(!1),l=o(c);f.push([t.i,".team-entry[data-v-3ec20ab1]{width:20%;height:20vw;display:flex;align-items:center;flex-direction:column}.team-entry .foto[data-v-3ec20ab1]{position:relative;width:80%;height:0;border-radius:80%;box-shadow:0 0 12px -4px #000;background-image:url("+l+");background-size:cover;padding-bottom:80%}.team-entry .name[data-v-3ec20ab1]{font-size:2vw}.team-entry .role[data-v-3ec20ab1]{font-size:1.5vw;line-height:1.2vw;transform:translateY(-.8vw);color:grey}",""]),t.exports=f},269:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},271:function(t,e,r){"use strict";r.r(e);r(256);var n=r(137),o=r(138),c=r(259),f=r(260),l=r(255),d=r(21),m=(r(60),r(14),r(77),r(258));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(f,t);var e=v(f);function f(){return Object(n.a)(this,f),e.apply(this,arguments)}return Object(o.a)(f,[{key:"image",get:function(){if(!this.team)return"";try{if(this.member.image)return r(257)("./".concat(this.team.imageDirectory).concat(this.member.image));throw new Error("not found")}catch(t){return r(257)("./".concat(this.team.imageDirectory).concat(this.team.defaultImage))}}}]),f}(m.c);h([Object(m.b)({required:!0})],y.prototype,"member",void 0),h([Object(m.b)({required:!0})],y.prototype,"team",void 0);var j=y=h([m.a],y),O=(r(267),r(45)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"team-entry"},[r("div",{staticClass:"foto",style:{backgroundImage:"url('"+t.image+"')"}}),t._v(" "),r("div",{staticClass:"name"},[t._v(t._s(t.member.name))]),t._v(" "),t._l(t.member.roles,(function(e,n){return r("div",{key:n,staticClass:"role"},[t._v("\n    "+t._s(e)+"\n  ")])}))],2)}),[],!1,null,"3ec20ab1",null);e.default=component.exports},280:function(t,e,r){"use strict";r(263)},281:function(t,e,r){var n=r(75)(!1);n.push([t.i,".team-group[data-v-1b20901f]{position:relative;width:100%;background-color:#fff;box-shadow:0 0 12px -4px #000;border-radius:20px;margin:100px 0;display:flex;color:#000;justify-content:center;align-items:center;flex-direction:column}.team-group .team-group-title[data-v-1b20901f]{margin-top:20px;font-size:2vw;height:30px}.team-group .team-entries[data-v-1b20901f]{width:100%;display:flex;justify-content:center;flex-wrap:wrap;margin-top:40px}",""]),t.exports=n},291:function(t,e,r){"use strict";r.r(e);var n=r(138),o=r(137),c=r(259),f=r(260),l=r(255),d=r(21),m=(r(60),r(14),r(256),r(258)),v=r(271);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(m.c);y([Object(m.b)({required:!0})],j.prototype,"group",void 0),y([Object(m.b)({required:!0})],j.prototype,"team",void 0);var O=j=y([Object(m.a)({components:{TeamEntry:v.default}})],j),x=(r(280),r(45)),component=Object(x.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"team-group"},[r("div",{staticClass:"team-group-title"},[t._v(t._s(t.group.name))]),t._v(" "),r("div",{staticClass:"team-entries"},t._l(t.group.members,(function(e,n){return r("TeamEntry",{key:n,attrs:{member:e,team:t.team}})})),1)])}),[],!1,null,"1b20901f",null);e.default=component.exports}}]);