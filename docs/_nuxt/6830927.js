(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(t,e,n){"use strict";n.r(e);var l=n(8),r=(n(37),n(27),n(144),n(29),n(38),{name:"About",data:function(){return{about:null}},computed:{description:function(){var t,e=this.about;return null!==e&&(t=e.description.split("\n")),t}},created:function(){this.getAbout()},methods:{getAbout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("about").fetch();case 2:n=e.sent,t.about=n;case 4:case"end":return e.stop()}}),e)})))()}}}),o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"about"}},[n("div",{staticClass:"container mx-auto px-8 py-8 md:px-20 md:py-28 max-w-6xl"},[t._m(0),t._v(" "),t.about?n("div",{staticClass:"md:grid md:grid-cols-4 items-center align-middle"},[n("div",{staticClass:"col-span-4 md:col-span-3 md:mr-3"},[t._m(1),t._v(" "),t._l(t.description,(function(desc,e){return n("p",{key:(e+1)*Math.random(),staticClass:"mb-4 text-white-opacity-50 text-left text-base font-normal mt-0 leading-relaxed"},[t._v("\n          "+t._s(desc)+"\n        ")])}))],2),t._v(" "),n("div",{staticClass:"mt-6 col-span-4 md:col-span-1 md:mt-0 flex text-center align-middle items-center justify-center"},[n("div",{staticClass:"mx-auto shadow-cyan-500/50 relative h-72 w-full max-w-md flex lg:w-72 lg:max-w-full rounded-xl shadow-even overflow-hidden"},[n("div",{staticClass:"absolute inset-0"}),t._v(" "),n("img",{staticClass:"h-full w-full flex object-cover",attrs:{src:"/images/profile/"+t.about.image_about,alt:t.about.name}})])])]):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5 lg:mb-10 flex text-center justify-center align-middle items-center"},[n("h2",{staticClass:"text-7xl md:text-9xl md:p-0 w-full text-zinc-900 leading-snug uppercase font-bold mb-0 whitespace-nowrap"},[t._v("\n        About Me\n      ")]),t._v(" "),n("p",{staticClass:"text-center font-semibold text-white leading-normal text-3xl md:text-4xl p-0 m-0 self-center w-full absolute"},[t._v("\n        Get to know me\n        "),n("span",{staticClass:"w-20 border-b-4 border-cyan-500 m-0 p-0 md:pt-2 block mx-auto"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-white mb-3 text-3xl font-semibold"},[t._v("\n          I'm "),n("span",{staticClass:"text-cyan-400"},[t._v("Reno Philibert,")]),t._v(" a Software\n          Developer\n        ")])}],!1,null,null,null);e.default=component.exports}}]);