(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{395:function(e,t,n){"use strict";n.r(t);var r=n(22),c=(n(68),{name:"news",data:function(){return{type:"news",fetchNews:[]}},methods:{activities:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("public-diu-iqac-website/news-activities/".concat(e.type));case 2:r=t.sent,e.fetchNews=null!==(n=r.data)&&void 0!==n?n:null;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.activities()}}),o=n(47),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Molecules-banner",{attrs:{title:"media",child:"news"}}),e._v(" "),n("div",{staticClass:"container box my-5"},e._l(e.fetchNews,(function(e,t){return n("Media-news",{key:t,attrs:{data:e}})})),1)],1)}),[],!1,null,"206ec881",null);t.default=component.exports}}]);