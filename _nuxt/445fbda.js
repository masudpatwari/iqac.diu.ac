(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{404:function(e,t,n){"use strict";n.r(t);var c=n(22),r=(n(68),{name:"materials",data:function(){return{type:"materials",fetchResearchPublication:[]}},methods:{researchPublication:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("public-diu-iqac-website/research-publication/".concat(e.type));case 2:n=t.sent,e.fetchResearchPublication=null!=n?n:null;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.researchPublication()}}),l=n(47),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Molecules-banner",{attrs:{title:"research and publications",child:"materials"}}),e._v(" "),n("div",{staticClass:"container box my-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("Molecules-lists",{attrs:{data:e.fetchResearchPublication}})],1)])])],1)}),[],!1,null,"15cb7d30",null);t.default=component.exports}}]);